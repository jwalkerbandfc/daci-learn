function ld(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var cd = { exports: {} }, _o = {}, ud = { exports: {} }, K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ks = Symbol.for("react.element"), Ef = Symbol.for("react.portal"), Af = Symbol.for("react.fragment"), If = Symbol.for("react.strict_mode"), Tf = Symbol.for("react.profiler"), Mf = Symbol.for("react.provider"), Lf = Symbol.for("react.context"), Df = Symbol.for("react.forward_ref"), Rf = Symbol.for("react.suspense"), zf = Symbol.for("react.memo"), Of = Symbol.for("react.lazy"), mc = Symbol.iterator;
function _f(e) {
  return e === null || typeof e != "object" ? null : (e = mc && e[mc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var dd = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, pd = Object.assign, hd = {};
function Nr(e, t, n) {
  this.props = e, this.context = t, this.refs = hd, this.updater = n || dd;
}
Nr.prototype.isReactComponent = {};
Nr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Nr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fd() {
}
fd.prototype = Nr.prototype;
function Xi(e, t, n) {
  this.props = e, this.context = t, this.refs = hd, this.updater = n || dd;
}
var Ji = Xi.prototype = new fd();
Ji.constructor = Xi;
pd(Ji, Nr.prototype);
Ji.isPureReactComponent = !0;
var gc = Array.isArray, md = Object.prototype.hasOwnProperty, el = { current: null }, gd = { key: !0, ref: !0, __self: !0, __source: !0 };
function xd(e, t, n) {
  var r, s = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) md.call(t, r) && !gd.hasOwnProperty(r) && (s[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) s.children = n;
  else if (1 < l) {
    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
    s.children = c;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) s[r] === void 0 && (s[r] = l[r]);
  return { $$typeof: ks, type: e, key: o, ref: i, props: s, _owner: el.current };
}
function Ff(e, t) {
  return { $$typeof: ks, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function tl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ks;
}
function Hf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var xc = /\/+/g;
function ha(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Hf("" + e.key) : t.toString(36);
}
function Ys(e, t, n, r, s) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case ks:
        case Ef:
          i = !0;
      }
  }
  if (i) return i = e, s = s(i), e = r === "" ? "." + ha(i, 0) : r, gc(s) ? (n = "", e != null && (n = e.replace(xc, "$&/") + "/"), Ys(s, t, n, "", function(u) {
    return u;
  })) : s != null && (tl(s) && (s = Ff(s, n + (!s.key || i && i.key === s.key ? "" : ("" + s.key).replace(xc, "$&/") + "/") + e)), t.push(s)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", gc(e)) for (var l = 0; l < e.length; l++) {
    o = e[l];
    var c = r + ha(o, l);
    i += Ys(o, t, n, c, s);
  }
  else if (c = _f(e), typeof c == "function") for (e = c.call(e), l = 0; !(o = e.next()).done; ) o = o.value, c = r + ha(o, l++), i += Ys(o, t, n, c, s);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Es(e, t, n) {
  if (e == null) return e;
  var r = [], s = 0;
  return Ys(e, r, "", "", function(o) {
    return t.call(n, o, s++);
  }), r;
}
function Uf(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var He = { current: null }, Zs = { transition: null }, Bf = { ReactCurrentDispatcher: He, ReactCurrentBatchConfig: Zs, ReactCurrentOwner: el };
function yd() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = { map: Es, forEach: function(e, t, n) {
  Es(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Es(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Es(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!tl(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
K.Component = Nr;
K.Fragment = Af;
K.Profiler = Tf;
K.PureComponent = Xi;
K.StrictMode = If;
K.Suspense = Rf;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bf;
K.act = yd;
K.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = pd({}, e.props), s = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = el.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (c in t) md.call(t, c) && !gd.hasOwnProperty(c) && (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ks, type: e.type, key: s, ref: o, props: r, _owner: i };
};
K.createContext = function(e) {
  return e = { $$typeof: Lf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Mf, _context: e }, e.Consumer = e;
};
K.createElement = xd;
K.createFactory = function(e) {
  var t = xd.bind(null, e);
  return t.type = e, t;
};
K.createRef = function() {
  return { current: null };
};
K.forwardRef = function(e) {
  return { $$typeof: Df, render: e };
};
K.isValidElement = tl;
K.lazy = function(e) {
  return { $$typeof: Of, _payload: { _status: -1, _result: e }, _init: Uf };
};
K.memo = function(e, t) {
  return { $$typeof: zf, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function(e) {
  var t = Zs.transition;
  Zs.transition = {};
  try {
    e();
  } finally {
    Zs.transition = t;
  }
};
K.unstable_act = yd;
K.useCallback = function(e, t) {
  return He.current.useCallback(e, t);
};
K.useContext = function(e) {
  return He.current.useContext(e);
};
K.useDebugValue = function() {
};
K.useDeferredValue = function(e) {
  return He.current.useDeferredValue(e);
};
K.useEffect = function(e, t) {
  return He.current.useEffect(e, t);
};
K.useId = function() {
  return He.current.useId();
};
K.useImperativeHandle = function(e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function(e, t) {
  return He.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function(e, t) {
  return He.current.useLayoutEffect(e, t);
};
K.useMemo = function(e, t) {
  return He.current.useMemo(e, t);
};
K.useReducer = function(e, t, n) {
  return He.current.useReducer(e, t, n);
};
K.useRef = function(e) {
  return He.current.useRef(e);
};
K.useState = function(e) {
  return He.current.useState(e);
};
K.useSyncExternalStore = function(e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function() {
  return He.current.useTransition();
};
K.version = "18.3.1";
ud.exports = K;
var C = ud.exports;
const es = /* @__PURE__ */ ld(C);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wf = C, Vf = Symbol.for("react.element"), qf = Symbol.for("react.fragment"), Gf = Object.prototype.hasOwnProperty, Kf = Wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Yf = { key: !0, ref: !0, __self: !0, __source: !0 };
function vd(e, t, n) {
  var r, s = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Gf.call(t, r) && !Yf.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) s[r] === void 0 && (s[r] = t[r]);
  return { $$typeof: Vf, type: e, key: o, ref: i, props: s, _owner: Kf.current };
}
_o.Fragment = qf;
_o.jsx = vd;
_o.jsxs = vd;
cd.exports = _o;
var a = cd.exports, wd = { exports: {} }, nt = {}, bd = { exports: {} }, kd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(D, N) {
    var H = D.length;
    D.push(N);
    e: for (; 0 < H; ) {
      var T = H - 1 >>> 1, J = D[T];
      if (0 < s(J, N)) D[T] = N, D[H] = J, H = T;
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var N = D[0], H = D.pop();
    if (H !== N) {
      D[0] = H;
      e: for (var T = 0, J = D.length, Ne = J >>> 1; T < Ne; ) {
        var be = 2 * (T + 1) - 1, xn = D[be], st = be + 1, Bt = D[st];
        if (0 > s(xn, H)) st < J && 0 > s(Bt, xn) ? (D[T] = Bt, D[st] = H, T = st) : (D[T] = xn, D[be] = H, T = be);
        else if (st < J && 0 > s(Bt, H)) D[T] = Bt, D[st] = H, T = st;
        else break e;
      }
    }
    return N;
  }
  function s(D, N) {
    var H = D.sortIndex - N.sortIndex;
    return H !== 0 ? H : D.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, l = i.now();
    e.unstable_now = function() {
      return i.now() - l;
    };
  }
  var c = [], u = [], d = 1, p = null, h = 3, f = !1, g = !1, w = !1, k = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, x = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(D) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= D) r(u), N.sortIndex = N.expirationTime, t(c, N);
      else break;
      N = n(u);
    }
  }
  function S(D) {
    if (w = !1, v(D), !g) if (n(c) !== null) g = !0, M($);
    else {
      var N = n(u);
      N !== null && we(S, N.startTime - D);
    }
  }
  function $(D, N) {
    g = !1, w && (w = !1, m(A), A = -1), f = !0;
    var H = h;
    try {
      for (v(N), p = n(c); p !== null && (!(p.expirationTime > N) || D && !Y()); ) {
        var T = p.callback;
        if (typeof T == "function") {
          p.callback = null, h = p.priorityLevel;
          var J = T(p.expirationTime <= N);
          N = e.unstable_now(), typeof J == "function" ? p.callback = J : p === n(c) && r(c), v(N);
        } else r(c);
        p = n(c);
      }
      if (p !== null) var Ne = !0;
      else {
        var be = n(u);
        be !== null && we(S, be.startTime - N), Ne = !1;
      }
      return Ne;
    } finally {
      p = null, h = H, f = !1;
    }
  }
  var y = !1, P = null, A = -1, B = 5, L = -1;
  function Y() {
    return !(e.unstable_now() - L < B);
  }
  function ee() {
    if (P !== null) {
      var D = e.unstable_now();
      L = D;
      var N = !0;
      try {
        N = P(!0, D);
      } finally {
        N ? ne() : (y = !1, P = null);
      }
    } else y = !1;
  }
  var ne;
  if (typeof x == "function") ne = function() {
    x(ee);
  };
  else if (typeof MessageChannel < "u") {
    var te = new MessageChannel(), Be = te.port2;
    te.port1.onmessage = ee, ne = function() {
      Be.postMessage(null);
    };
  } else ne = function() {
    k(ee, 0);
  };
  function M(D) {
    P = D, y || (y = !0, ne());
  }
  function we(D, N) {
    A = k(function() {
      D(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(D) {
    D.callback = null;
  }, e.unstable_continueExecution = function() {
    g || f || (g = !0, M($));
  }, e.unstable_forceFrameRate = function(D) {
    0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < D ? Math.floor(1e3 / D) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(D) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = h;
    }
    var H = h;
    h = N;
    try {
      return D();
    } finally {
      h = H;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(D, N) {
    switch (D) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        D = 3;
    }
    var H = h;
    h = D;
    try {
      return N();
    } finally {
      h = H;
    }
  }, e.unstable_scheduleCallback = function(D, N, H) {
    var T = e.unstable_now();
    switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? T + H : T) : H = T, D) {
      case 1:
        var J = -1;
        break;
      case 2:
        J = 250;
        break;
      case 5:
        J = 1073741823;
        break;
      case 4:
        J = 1e4;
        break;
      default:
        J = 5e3;
    }
    return J = H + J, D = { id: d++, callback: N, priorityLevel: D, startTime: H, expirationTime: J, sortIndex: -1 }, H > T ? (D.sortIndex = H, t(u, D), n(c) === null && D === n(u) && (w ? (m(A), A = -1) : w = !0, we(S, H - T))) : (D.sortIndex = J, t(c, D), g || f || (g = !0, M($))), D;
  }, e.unstable_shouldYield = Y, e.unstable_wrapCallback = function(D) {
    var N = h;
    return function() {
      var H = h;
      h = N;
      try {
        return D.apply(this, arguments);
      } finally {
        h = H;
      }
    };
  };
})(kd);
bd.exports = kd;
var Zf = bd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qf = C, tt = Zf;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Sd = /* @__PURE__ */ new Set(), ts = {};
function zn(e, t) {
  mr(e, t), mr(e + "Capture", t);
}
function mr(e, t) {
  for (ts[e] = t, e = 0; e < t.length; e++) Sd.add(t[e]);
}
var zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ka = Object.prototype.hasOwnProperty, Xf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, yc = {}, vc = {};
function Jf(e) {
  return Ka.call(vc, e) ? !0 : Ka.call(yc, e) ? !1 : Xf.test(e) ? vc[e] = !0 : (yc[e] = !0, !1);
}
function em(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function tm(e, t, n, r) {
  if (t === null || typeof t > "u" || em(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Ue(e, t, n, r, s, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ee[e] = new Ue(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ee[t] = new Ue(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ee[e] = new Ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ee[e] = new Ue(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ee[e] = new Ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ee[e] = new Ue(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ee[e] = new Ue(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ee[e] = new Ue(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ee[e] = new Ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var nl = /[\-:]([a-z])/g;
function rl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    nl,
    rl
  );
  Ee[t] = new Ue(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(nl, rl);
  Ee[t] = new Ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(nl, rl);
  Ee[t] = new Ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ee[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new Ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ee[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function sl(e, t, n, r) {
  var s = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (tm(t, n, s, r) && (n = null), r || s === null ? Jf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = Qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, As = Symbol.for("react.element"), Vn = Symbol.for("react.portal"), qn = Symbol.for("react.fragment"), ol = Symbol.for("react.strict_mode"), Ya = Symbol.for("react.profiler"), jd = Symbol.for("react.provider"), Nd = Symbol.for("react.context"), al = Symbol.for("react.forward_ref"), Za = Symbol.for("react.suspense"), Qa = Symbol.for("react.suspense_list"), il = Symbol.for("react.memo"), Kt = Symbol.for("react.lazy"), Cd = Symbol.for("react.offscreen"), wc = Symbol.iterator;
function Ar(e) {
  return e === null || typeof e != "object" ? null : (e = wc && e[wc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var he = Object.assign, fa;
function Fr(e) {
  if (fa === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    fa = t && t[1] || "";
  }
  return `
` + fa + e;
}
var ma = !1;
function ga(e, t) {
  if (!e || ma) return "";
  ma = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var s = u.stack.split(`
`), o = r.stack.split(`
`), i = s.length - 1, l = o.length - 1; 1 <= i && 0 <= l && s[i] !== o[l]; ) l--;
      for (; 1 <= i && 0 <= l; i--, l--) if (s[i] !== o[l]) {
        if (i !== 1 || l !== 1)
          do
            if (i--, l--, 0 > l || s[i] !== o[l]) {
              var c = `
` + s[i].replace(" at new ", " at ");
              return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
            }
          while (1 <= i && 0 <= l);
        break;
      }
    }
  } finally {
    ma = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Fr(e) : "";
}
function nm(e) {
  switch (e.tag) {
    case 5:
      return Fr(e.type);
    case 16:
      return Fr("Lazy");
    case 13:
      return Fr("Suspense");
    case 19:
      return Fr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ga(e.type, !1), e;
    case 11:
      return e = ga(e.type.render, !1), e;
    case 1:
      return e = ga(e.type, !0), e;
    default:
      return "";
  }
}
function Xa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case qn:
      return "Fragment";
    case Vn:
      return "Portal";
    case Ya:
      return "Profiler";
    case ol:
      return "StrictMode";
    case Za:
      return "Suspense";
    case Qa:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Nd:
      return (e.displayName || "Context") + ".Consumer";
    case jd:
      return (e._context.displayName || "Context") + ".Provider";
    case al:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case il:
      return t = e.displayName || null, t !== null ? t : Xa(e.type) || "Memo";
    case Kt:
      t = e._payload, e = e._init;
      try {
        return Xa(e(t));
      } catch {
      }
  }
  return null;
}
function rm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Xa(t);
    case 8:
      return t === ol ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function un(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function $d(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function sm(e) {
  var t = $d(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var s = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return s.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Is(e) {
  e._valueTracker || (e._valueTracker = sm(e));
}
function Pd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = $d(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function co(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ja(e, t) {
  var n = t.checked;
  return he({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function bc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = un(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ed(e, t) {
  t = t.checked, t != null && sl(e, "checked", t, !1);
}
function ei(e, t) {
  Ed(e, t);
  var n = un(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ti(e, t.type, n) : t.hasOwnProperty("defaultValue") && ti(e, t.type, un(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function kc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ti(e, t, n) {
  (t !== "number" || co(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Hr = Array.isArray;
function ar(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + un(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        e[s].selected = !0, r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function ni(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return he({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Sc(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(E(92));
      if (Hr(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: un(n) };
}
function Ad(e, t) {
  var n = un(t.value), r = un(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function jc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Id(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ri(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Id(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ts, Td = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, s);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ts = Ts || document.createElement("div"), Ts.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ts.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ns(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Wr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, om = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wr).forEach(function(e) {
  om.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Wr[t] = Wr[e];
  });
});
function Md(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Wr.hasOwnProperty(e) && Wr[e] ? ("" + t).trim() : t + "px";
}
function Ld(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, s = Md(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
  }
}
var am = he({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function si(e, t) {
  if (t) {
    if (am[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function oi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ai = null;
function ll(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ii = null, ir = null, lr = null;
function Nc(e) {
  if (e = Ns(e)) {
    if (typeof ii != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = Wo(t), ii(e.stateNode, e.type, t));
  }
}
function Dd(e) {
  ir ? lr ? lr.push(e) : lr = [e] : ir = e;
}
function Rd() {
  if (ir) {
    var e = ir, t = lr;
    if (lr = ir = null, Nc(e), t) for (e = 0; e < t.length; e++) Nc(t[e]);
  }
}
function zd(e, t) {
  return e(t);
}
function Od() {
}
var xa = !1;
function _d(e, t, n) {
  if (xa) return e(t, n);
  xa = !0;
  try {
    return zd(e, t, n);
  } finally {
    xa = !1, (ir !== null || lr !== null) && (Od(), Rd());
  }
}
function rs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Wo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var li = !1;
if (zt) try {
  var Ir = {};
  Object.defineProperty(Ir, "passive", { get: function() {
    li = !0;
  } }), window.addEventListener("test", Ir, Ir), window.removeEventListener("test", Ir, Ir);
} catch {
  li = !1;
}
function im(e, t, n, r, s, o, i, l, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Vr = !1, uo = null, po = !1, ci = null, lm = { onError: function(e) {
  Vr = !0, uo = e;
} };
function cm(e, t, n, r, s, o, i, l, c) {
  Vr = !1, uo = null, im.apply(lm, arguments);
}
function um(e, t, n, r, s, o, i, l, c) {
  if (cm.apply(this, arguments), Vr) {
    if (Vr) {
      var u = uo;
      Vr = !1, uo = null;
    } else throw Error(E(198));
    po || (po = !0, ci = u);
  }
}
function On(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Fd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Cc(e) {
  if (On(e) !== e) throw Error(E(188));
}
function dm(e) {
  var t = e.alternate;
  if (!t) {
    if (t = On(e), t === null) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var o = s.alternate;
    if (o === null) {
      if (r = s.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === o.child) {
      for (o = s.child; o; ) {
        if (o === n) return Cc(s), e;
        if (o === r) return Cc(s), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) n = s, r = o;
    else {
      for (var i = !1, l = s.child; l; ) {
        if (l === n) {
          i = !0, n = s, r = o;
          break;
        }
        if (l === r) {
          i = !0, r = s, n = o;
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = o.child; l; ) {
          if (l === n) {
            i = !0, n = o, r = s;
            break;
          }
          if (l === r) {
            i = !0, r = o, n = s;
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Hd(e) {
  return e = dm(e), e !== null ? Ud(e) : null;
}
function Ud(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ud(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Bd = tt.unstable_scheduleCallback, $c = tt.unstable_cancelCallback, pm = tt.unstable_shouldYield, hm = tt.unstable_requestPaint, ge = tt.unstable_now, fm = tt.unstable_getCurrentPriorityLevel, cl = tt.unstable_ImmediatePriority, Wd = tt.unstable_UserBlockingPriority, ho = tt.unstable_NormalPriority, mm = tt.unstable_LowPriority, Vd = tt.unstable_IdlePriority, Fo = null, Nt = null;
function gm(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function") try {
    Nt.onCommitFiberRoot(Fo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var xt = Math.clz32 ? Math.clz32 : vm, xm = Math.log, ym = Math.LN2;
function vm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (xm(e) / ym | 0) | 0;
}
var Ms = 64, Ls = 4194304;
function Ur(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function fo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, s = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var l = i & ~s;
    l !== 0 ? r = Ur(l) : (o &= i, o !== 0 && (r = Ur(o)));
  } else i = n & ~s, i !== 0 ? r = Ur(i) : o !== 0 && (r = Ur(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & s) && (s = r & -r, o = t & -t, s >= o || s === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - xt(t), s = 1 << n, r |= e[n], t &= ~s;
  return r;
}
function wm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function bm(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - xt(o), l = 1 << i, c = s[i];
    c === -1 ? (!(l & n) || l & r) && (s[i] = wm(l, t)) : c <= t && (e.expiredLanes |= l), o &= ~l;
  }
}
function ui(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function qd() {
  var e = Ms;
  return Ms <<= 1, !(Ms & 4194240) && (Ms = 64), e;
}
function ya(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ss(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - xt(t), e[t] = n;
}
function km(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - xt(n), o = 1 << s;
    t[s] = 0, r[s] = -1, e[s] = -1, n &= ~o;
  }
}
function ul(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - xt(n), s = 1 << r;
    s & t | e[r] & t && (e[r] |= t), n &= ~s;
  }
}
var X = 0;
function Gd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Kd, dl, Yd, Zd, Qd, di = !1, Ds = [], en = null, tn = null, nn = null, ss = /* @__PURE__ */ new Map(), os = /* @__PURE__ */ new Map(), Zt = [], Sm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Pc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      en = null;
      break;
    case "dragenter":
    case "dragleave":
      tn = null;
      break;
    case "mouseover":
    case "mouseout":
      nn = null;
      break;
    case "pointerover":
    case "pointerout":
      ss.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      os.delete(t.pointerId);
  }
}
function Tr(e, t, n, r, s, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [s] }, t !== null && (t = Ns(t), t !== null && dl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
}
function jm(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return en = Tr(en, e, t, n, r, s), !0;
    case "dragenter":
      return tn = Tr(tn, e, t, n, r, s), !0;
    case "mouseover":
      return nn = Tr(nn, e, t, n, r, s), !0;
    case "pointerover":
      var o = s.pointerId;
      return ss.set(o, Tr(ss.get(o) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return o = s.pointerId, os.set(o, Tr(os.get(o) || null, e, t, n, r, s)), !0;
  }
  return !1;
}
function Xd(e) {
  var t = Sn(e.target);
  if (t !== null) {
    var n = On(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Fd(n), t !== null) {
          e.blockedOn = t, Qd(e.priority, function() {
            Yd(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Qs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ai = r, n.target.dispatchEvent(r), ai = null;
    } else return t = Ns(n), t !== null && dl(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ec(e, t, n) {
  Qs(e) && n.delete(t);
}
function Nm() {
  di = !1, en !== null && Qs(en) && (en = null), tn !== null && Qs(tn) && (tn = null), nn !== null && Qs(nn) && (nn = null), ss.forEach(Ec), os.forEach(Ec);
}
function Mr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, di || (di = !0, tt.unstable_scheduleCallback(tt.unstable_NormalPriority, Nm)));
}
function as(e) {
  function t(s) {
    return Mr(s, e);
  }
  if (0 < Ds.length) {
    Mr(Ds[0], e);
    for (var n = 1; n < Ds.length; n++) {
      var r = Ds[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (en !== null && Mr(en, e), tn !== null && Mr(tn, e), nn !== null && Mr(nn, e), ss.forEach(t), os.forEach(t), n = 0; n < Zt.length; n++) r = Zt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Zt.length && (n = Zt[0], n.blockedOn === null); ) Xd(n), n.blockedOn === null && Zt.shift();
}
var cr = Ut.ReactCurrentBatchConfig, mo = !0;
function Cm(e, t, n, r) {
  var s = X, o = cr.transition;
  cr.transition = null;
  try {
    X = 1, pl(e, t, n, r);
  } finally {
    X = s, cr.transition = o;
  }
}
function $m(e, t, n, r) {
  var s = X, o = cr.transition;
  cr.transition = null;
  try {
    X = 4, pl(e, t, n, r);
  } finally {
    X = s, cr.transition = o;
  }
}
function pl(e, t, n, r) {
  if (mo) {
    var s = pi(e, t, n, r);
    if (s === null) Pa(e, t, r, go, n), Pc(e, r);
    else if (jm(s, e, t, n, r)) r.stopPropagation();
    else if (Pc(e, r), t & 4 && -1 < Sm.indexOf(e)) {
      for (; s !== null; ) {
        var o = Ns(s);
        if (o !== null && Kd(o), o = pi(e, t, n, r), o === null && Pa(e, t, r, go, n), o === s) break;
        s = o;
      }
      s !== null && r.stopPropagation();
    } else Pa(e, t, r, null, n);
  }
}
var go = null;
function pi(e, t, n, r) {
  if (go = null, e = ll(r), e = Sn(e), e !== null) if (t = On(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Fd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return go = e, null;
}
function Jd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (fm()) {
        case cl:
          return 1;
        case Wd:
          return 4;
        case ho:
        case mm:
          return 16;
        case Vd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xt = null, hl = null, Xs = null;
function ep() {
  if (Xs) return Xs;
  var e, t = hl, n = t.length, r, s = "value" in Xt ? Xt.value : Xt.textContent, o = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === s[o - r]; r++) ;
  return Xs = s.slice(e, 1 < r ? 1 - r : void 0);
}
function Js(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Rs() {
  return !0;
}
function Ac() {
  return !1;
}
function rt(e) {
  function t(n, r, s, o, i) {
    this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Rs : Ac, this.isPropagationStopped = Ac, this;
  }
  return he(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Rs);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Rs);
  }, persist: function() {
  }, isPersistent: Rs }), t;
}
var Cr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, fl = rt(Cr), js = he({}, Cr, { view: 0, detail: 0 }), Pm = rt(js), va, wa, Lr, Ho = he({}, js, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ml, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Lr && (Lr && e.type === "mousemove" ? (va = e.screenX - Lr.screenX, wa = e.screenY - Lr.screenY) : wa = va = 0, Lr = e), va);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : wa;
} }), Ic = rt(Ho), Em = he({}, Ho, { dataTransfer: 0 }), Am = rt(Em), Im = he({}, js, { relatedTarget: 0 }), ba = rt(Im), Tm = he({}, Cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Mm = rt(Tm), Lm = he({}, Cr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Dm = rt(Lm), Rm = he({}, Cr, { data: 0 }), Tc = rt(Rm), zm = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Om = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, _m = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Fm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _m[e]) ? !!t[e] : !1;
}
function ml() {
  return Fm;
}
var Hm = he({}, js, { key: function(e) {
  if (e.key) {
    var t = zm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Js(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Om[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ml, charCode: function(e) {
  return e.type === "keypress" ? Js(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Js(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Um = rt(Hm), Bm = he({}, Ho, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Mc = rt(Bm), Wm = he({}, js, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ml }), Vm = rt(Wm), qm = he({}, Cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gm = rt(qm), Km = he({}, Ho, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Ym = rt(Km), Zm = [9, 13, 27, 32], gl = zt && "CompositionEvent" in window, qr = null;
zt && "documentMode" in document && (qr = document.documentMode);
var Qm = zt && "TextEvent" in window && !qr, tp = zt && (!gl || qr && 8 < qr && 11 >= qr), Lc = " ", Dc = !1;
function np(e, t) {
  switch (e) {
    case "keyup":
      return Zm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function rp(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Gn = !1;
function Xm(e, t) {
  switch (e) {
    case "compositionend":
      return rp(t);
    case "keypress":
      return t.which !== 32 ? null : (Dc = !0, Lc);
    case "textInput":
      return e = t.data, e === Lc && Dc ? null : e;
    default:
      return null;
  }
}
function Jm(e, t) {
  if (Gn) return e === "compositionend" || !gl && np(e, t) ? (e = ep(), Xs = hl = Xt = null, Gn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return tp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var eg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Rc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!eg[e.type] : t === "textarea";
}
function sp(e, t, n, r) {
  Dd(r), t = xo(t, "onChange"), 0 < t.length && (n = new fl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Gr = null, is = null;
function tg(e) {
  mp(e, 0);
}
function Uo(e) {
  var t = Zn(e);
  if (Pd(t)) return e;
}
function ng(e, t) {
  if (e === "change") return t;
}
var op = !1;
if (zt) {
  var ka;
  if (zt) {
    var Sa = "oninput" in document;
    if (!Sa) {
      var zc = document.createElement("div");
      zc.setAttribute("oninput", "return;"), Sa = typeof zc.oninput == "function";
    }
    ka = Sa;
  } else ka = !1;
  op = ka && (!document.documentMode || 9 < document.documentMode);
}
function Oc() {
  Gr && (Gr.detachEvent("onpropertychange", ap), is = Gr = null);
}
function ap(e) {
  if (e.propertyName === "value" && Uo(is)) {
    var t = [];
    sp(t, is, e, ll(e)), _d(tg, t);
  }
}
function rg(e, t, n) {
  e === "focusin" ? (Oc(), Gr = t, is = n, Gr.attachEvent("onpropertychange", ap)) : e === "focusout" && Oc();
}
function sg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Uo(is);
}
function og(e, t) {
  if (e === "click") return Uo(t);
}
function ag(e, t) {
  if (e === "input" || e === "change") return Uo(t);
}
function ig(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var wt = typeof Object.is == "function" ? Object.is : ig;
function ls(e, t) {
  if (wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Ka.call(t, s) || !wt(e[s], t[s])) return !1;
  }
  return !0;
}
function _c(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Fc(e, t) {
  var n = _c(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = _c(n);
  }
}
function ip(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ip(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function lp() {
  for (var e = window, t = co(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = co(e.document);
  }
  return t;
}
function xl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function lg(e) {
  var t = lp(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ip(n.ownerDocument.documentElement, n)) {
    if (r !== null && xl(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var s = n.textContent.length, o = Math.min(r.start, s);
        r = r.end === void 0 ? o : Math.min(r.end, s), !e.extend && o > r && (s = r, r = o, o = s), s = Fc(n, o);
        var i = Fc(
          n,
          r
        );
        s && i && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var cg = zt && "documentMode" in document && 11 >= document.documentMode, Kn = null, hi = null, Kr = null, fi = !1;
function Hc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fi || Kn == null || Kn !== co(r) || (r = Kn, "selectionStart" in r && xl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Kr && ls(Kr, r) || (Kr = r, r = xo(hi, "onSelect"), 0 < r.length && (t = new fl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Kn)));
}
function zs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Yn = { animationend: zs("Animation", "AnimationEnd"), animationiteration: zs("Animation", "AnimationIteration"), animationstart: zs("Animation", "AnimationStart"), transitionend: zs("Transition", "TransitionEnd") }, ja = {}, cp = {};
zt && (cp = document.createElement("div").style, "AnimationEvent" in window || (delete Yn.animationend.animation, delete Yn.animationiteration.animation, delete Yn.animationstart.animation), "TransitionEvent" in window || delete Yn.transitionend.transition);
function Bo(e) {
  if (ja[e]) return ja[e];
  if (!Yn[e]) return e;
  var t = Yn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in cp) return ja[e] = t[n];
  return e;
}
var up = Bo("animationend"), dp = Bo("animationiteration"), pp = Bo("animationstart"), hp = Bo("transitionend"), fp = /* @__PURE__ */ new Map(), Uc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function fn(e, t) {
  fp.set(e, t), zn(t, [e]);
}
for (var Na = 0; Na < Uc.length; Na++) {
  var Ca = Uc[Na], ug = Ca.toLowerCase(), dg = Ca[0].toUpperCase() + Ca.slice(1);
  fn(ug, "on" + dg);
}
fn(up, "onAnimationEnd");
fn(dp, "onAnimationIteration");
fn(pp, "onAnimationStart");
fn("dblclick", "onDoubleClick");
fn("focusin", "onFocus");
fn("focusout", "onBlur");
fn(hp, "onTransitionEnd");
mr("onMouseEnter", ["mouseout", "mouseover"]);
mr("onMouseLeave", ["mouseout", "mouseover"]);
mr("onPointerEnter", ["pointerout", "pointerover"]);
mr("onPointerLeave", ["pointerout", "pointerover"]);
zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));
function Bc(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, um(r, t, void 0, e), e.currentTarget = null;
}
function mp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], s = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var l = r[i], c = l.instance, u = l.currentTarget;
        if (l = l.listener, c !== o && s.isPropagationStopped()) break e;
        Bc(s, l, u), o = c;
      }
      else for (i = 0; i < r.length; i++) {
        if (l = r[i], c = l.instance, u = l.currentTarget, l = l.listener, c !== o && s.isPropagationStopped()) break e;
        Bc(s, l, u), o = c;
      }
    }
  }
  if (po) throw e = ci, po = !1, ci = null, e;
}
function oe(e, t) {
  var n = t[vi];
  n === void 0 && (n = t[vi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (gp(t, e, 2, !1), n.add(r));
}
function $a(e, t, n) {
  var r = 0;
  t && (r |= 4), gp(n, e, r, t);
}
var Os = "_reactListening" + Math.random().toString(36).slice(2);
function cs(e) {
  if (!e[Os]) {
    e[Os] = !0, Sd.forEach(function(n) {
      n !== "selectionchange" && (pg.has(n) || $a(n, !1, e), $a(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Os] || (t[Os] = !0, $a("selectionchange", !1, t));
  }
}
function gp(e, t, n, r) {
  switch (Jd(t)) {
    case 1:
      var s = Cm;
      break;
    case 4:
      s = $m;
      break;
    default:
      s = pl;
  }
  n = s.bind(null, t, n, e), s = void 0, !li || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
}
function Pa(e, t, n, r, s) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var l = r.stateNode.containerInfo;
      if (l === s || l.nodeType === 8 && l.parentNode === s) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var c = i.tag;
        if ((c === 3 || c === 4) && (c = i.stateNode.containerInfo, c === s || c.nodeType === 8 && c.parentNode === s)) return;
        i = i.return;
      }
      for (; l !== null; ) {
        if (i = Sn(l), i === null) return;
        if (c = i.tag, c === 5 || c === 6) {
          r = o = i;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  _d(function() {
    var u = o, d = ll(n), p = [];
    e: {
      var h = fp.get(e);
      if (h !== void 0) {
        var f = fl, g = e;
        switch (e) {
          case "keypress":
            if (Js(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = Um;
            break;
          case "focusin":
            g = "focus", f = ba;
            break;
          case "focusout":
            g = "blur", f = ba;
            break;
          case "beforeblur":
          case "afterblur":
            f = ba;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            f = Ic;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = Am;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = Vm;
            break;
          case up:
          case dp:
          case pp:
            f = Mm;
            break;
          case hp:
            f = Gm;
            break;
          case "scroll":
            f = Pm;
            break;
          case "wheel":
            f = Ym;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = Dm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = Mc;
        }
        var w = (t & 4) !== 0, k = !w && e === "scroll", m = w ? h !== null ? h + "Capture" : null : h;
        w = [];
        for (var x = u, v; x !== null; ) {
          v = x;
          var S = v.stateNode;
          if (v.tag === 5 && S !== null && (v = S, m !== null && (S = rs(x, m), S != null && w.push(us(x, S, v)))), k) break;
          x = x.return;
        }
        0 < w.length && (h = new f(h, g, null, n, d), p.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", f = e === "mouseout" || e === "pointerout", h && n !== ai && (g = n.relatedTarget || n.fromElement) && (Sn(g) || g[Ot])) break e;
        if ((f || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window, f ? (g = n.relatedTarget || n.toElement, f = u, g = g ? Sn(g) : null, g !== null && (k = On(g), g !== k || g.tag !== 5 && g.tag !== 6) && (g = null)) : (f = null, g = u), f !== g)) {
          if (w = Ic, S = "onMouseLeave", m = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (w = Mc, S = "onPointerLeave", m = "onPointerEnter", x = "pointer"), k = f == null ? h : Zn(f), v = g == null ? h : Zn(g), h = new w(S, x + "leave", f, n, d), h.target = k, h.relatedTarget = v, S = null, Sn(d) === u && (w = new w(m, x + "enter", g, n, d), w.target = v, w.relatedTarget = k, S = w), k = S, f && g) t: {
            for (w = f, m = g, x = 0, v = w; v; v = Bn(v)) x++;
            for (v = 0, S = m; S; S = Bn(S)) v++;
            for (; 0 < x - v; ) w = Bn(w), x--;
            for (; 0 < v - x; ) m = Bn(m), v--;
            for (; x--; ) {
              if (w === m || m !== null && w === m.alternate) break t;
              w = Bn(w), m = Bn(m);
            }
            w = null;
          }
          else w = null;
          f !== null && Wc(p, h, f, w, !1), g !== null && k !== null && Wc(p, k, g, w, !0);
        }
      }
      e: {
        if (h = u ? Zn(u) : window, f = h.nodeName && h.nodeName.toLowerCase(), f === "select" || f === "input" && h.type === "file") var $ = ng;
        else if (Rc(h)) if (op) $ = ag;
        else {
          $ = sg;
          var y = rg;
        }
        else (f = h.nodeName) && f.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && ($ = og);
        if ($ && ($ = $(e, u))) {
          sp(p, $, n, d);
          break e;
        }
        y && y(e, h, u), e === "focusout" && (y = h._wrapperState) && y.controlled && h.type === "number" && ti(h, "number", h.value);
      }
      switch (y = u ? Zn(u) : window, e) {
        case "focusin":
          (Rc(y) || y.contentEditable === "true") && (Kn = y, hi = u, Kr = null);
          break;
        case "focusout":
          Kr = hi = Kn = null;
          break;
        case "mousedown":
          fi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          fi = !1, Hc(p, n, d);
          break;
        case "selectionchange":
          if (cg) break;
        case "keydown":
        case "keyup":
          Hc(p, n, d);
      }
      var P;
      if (gl) e: {
        switch (e) {
          case "compositionstart":
            var A = "onCompositionStart";
            break e;
          case "compositionend":
            A = "onCompositionEnd";
            break e;
          case "compositionupdate":
            A = "onCompositionUpdate";
            break e;
        }
        A = void 0;
      }
      else Gn ? np(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A && (tp && n.locale !== "ko" && (Gn || A !== "onCompositionStart" ? A === "onCompositionEnd" && Gn && (P = ep()) : (Xt = d, hl = "value" in Xt ? Xt.value : Xt.textContent, Gn = !0)), y = xo(u, A), 0 < y.length && (A = new Tc(A, e, null, n, d), p.push({ event: A, listeners: y }), P ? A.data = P : (P = rp(n), P !== null && (A.data = P)))), (P = Qm ? Xm(e, n) : Jm(e, n)) && (u = xo(u, "onBeforeInput"), 0 < u.length && (d = new Tc("onBeforeInput", "beforeinput", null, n, d), p.push({ event: d, listeners: u }), d.data = P));
    }
    mp(p, t);
  });
}
function us(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e, o = s.stateNode;
    s.tag === 5 && o !== null && (s = o, o = rs(e, n), o != null && r.unshift(us(e, o, s)), o = rs(e, t), o != null && r.push(us(e, o, s))), e = e.return;
  }
  return r;
}
function Bn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wc(e, t, n, r, s) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n, c = l.alternate, u = l.stateNode;
    if (c !== null && c === r) break;
    l.tag === 5 && u !== null && (l = u, s ? (c = rs(n, o), c != null && i.unshift(us(n, c, l))) : s || (c = rs(n, o), c != null && i.push(us(n, c, l)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var hg = /\r\n?/g, fg = /\u0000|\uFFFD/g;
function Vc(e) {
  return (typeof e == "string" ? e : "" + e).replace(hg, `
`).replace(fg, "");
}
function _s(e, t, n) {
  if (t = Vc(t), Vc(e) !== t && n) throw Error(E(425));
}
function yo() {
}
var mi = null, gi = null;
function xi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var yi = typeof setTimeout == "function" ? setTimeout : void 0, mg = typeof clearTimeout == "function" ? clearTimeout : void 0, qc = typeof Promise == "function" ? Promise : void 0, gg = typeof queueMicrotask == "function" ? queueMicrotask : typeof qc < "u" ? function(e) {
  return qc.resolve(null).then(e).catch(xg);
} : yi;
function xg(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ea(e, t) {
  var n = t, r = 0;
  do {
    var s = n.nextSibling;
    if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
      if (r === 0) {
        e.removeChild(s), as(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = s;
  } while (n);
  as(t);
}
function rn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Gc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var $r = Math.random().toString(36).slice(2), jt = "__reactFiber$" + $r, ds = "__reactProps$" + $r, Ot = "__reactContainer$" + $r, vi = "__reactEvents$" + $r, yg = "__reactListeners$" + $r, vg = "__reactHandles$" + $r;
function Sn(e) {
  var t = e[jt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ot] || n[jt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Gc(e); e !== null; ) {
        if (n = e[jt]) return n;
        e = Gc(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ns(e) {
  return e = e[jt] || e[Ot], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Zn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Wo(e) {
  return e[ds] || null;
}
var wi = [], Qn = -1;
function mn(e) {
  return { current: e };
}
function ie(e) {
  0 > Qn || (e.current = wi[Qn], wi[Qn] = null, Qn--);
}
function re(e, t) {
  Qn++, wi[Qn] = e.current, e.current = t;
}
var dn = {}, Le = mn(dn), Ge = mn(!1), In = dn;
function gr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var s = {}, o;
  for (o in n) s[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
}
function Ke(e) {
  return e = e.childContextTypes, e != null;
}
function vo() {
  ie(Ge), ie(Le);
}
function Kc(e, t, n) {
  if (Le.current !== dn) throw Error(E(168));
  re(Le, t), re(Ge, n);
}
function xp(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(E(108, rm(e) || "Unknown", s));
  return he({}, n, r);
}
function wo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dn, In = Le.current, re(Le, e), re(Ge, Ge.current), !0;
}
function Yc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? (e = xp(e, t, In), r.__reactInternalMemoizedMergedChildContext = e, ie(Ge), ie(Le), re(Le, e)) : ie(Ge), re(Ge, n);
}
var It = null, Vo = !1, Aa = !1;
function yp(e) {
  It === null ? It = [e] : It.push(e);
}
function wg(e) {
  Vo = !0, yp(e);
}
function gn() {
  if (!Aa && It !== null) {
    Aa = !0;
    var e = 0, t = X;
    try {
      var n = It;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      It = null, Vo = !1;
    } catch (s) {
      throw It !== null && (It = It.slice(e + 1)), Bd(cl, gn), s;
    } finally {
      X = t, Aa = !1;
    }
  }
  return null;
}
var Xn = [], Jn = 0, bo = null, ko = 0, ot = [], at = 0, Tn = null, Mt = 1, Lt = "";
function bn(e, t) {
  Xn[Jn++] = ko, Xn[Jn++] = bo, bo = e, ko = t;
}
function vp(e, t, n) {
  ot[at++] = Mt, ot[at++] = Lt, ot[at++] = Tn, Tn = e;
  var r = Mt;
  e = Lt;
  var s = 32 - xt(r) - 1;
  r &= ~(1 << s), n += 1;
  var o = 32 - xt(t) + s;
  if (30 < o) {
    var i = s - s % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, s -= i, Mt = 1 << 32 - xt(t) + s | n << s | r, Lt = o + e;
  } else Mt = 1 << o | n << s | r, Lt = e;
}
function yl(e) {
  e.return !== null && (bn(e, 1), vp(e, 1, 0));
}
function vl(e) {
  for (; e === bo; ) bo = Xn[--Jn], Xn[Jn] = null, ko = Xn[--Jn], Xn[Jn] = null;
  for (; e === Tn; ) Tn = ot[--at], ot[at] = null, Lt = ot[--at], ot[at] = null, Mt = ot[--at], ot[at] = null;
}
var et = null, Xe = null, le = !1, mt = null;
function wp(e, t) {
  var n = it(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Zc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, et = e, Xe = rn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, et = e, Xe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tn !== null ? { id: Mt, overflow: Lt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = it(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, et = e, Xe = null, !0) : !1;
    default:
      return !1;
  }
}
function bi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ki(e) {
  if (le) {
    var t = Xe;
    if (t) {
      var n = t;
      if (!Zc(e, t)) {
        if (bi(e)) throw Error(E(418));
        t = rn(n.nextSibling);
        var r = et;
        t && Zc(e, t) ? wp(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, et = e);
      }
    } else {
      if (bi(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, le = !1, et = e;
    }
  }
}
function Qc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  et = e;
}
function Fs(e) {
  if (e !== et) return !1;
  if (!le) return Qc(e), le = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !xi(e.type, e.memoizedProps)), t && (t = Xe)) {
    if (bi(e)) throw bp(), Error(E(418));
    for (; t; ) wp(e, t), t = rn(t.nextSibling);
  }
  if (Qc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Xe = rn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Xe = null;
    }
  } else Xe = et ? rn(e.stateNode.nextSibling) : null;
  return !0;
}
function bp() {
  for (var e = Xe; e; ) e = rn(e.nextSibling);
}
function xr() {
  Xe = et = null, le = !1;
}
function wl(e) {
  mt === null ? mt = [e] : mt.push(e);
}
var bg = Ut.ReactCurrentBatchConfig;
function Dr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var s = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var l = s.refs;
        i === null ? delete l[o] : l[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Hs(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Xc(e) {
  var t = e._init;
  return t(e._payload);
}
function kp(e) {
  function t(m, x) {
    if (e) {
      var v = m.deletions;
      v === null ? (m.deletions = [x], m.flags |= 16) : v.push(x);
    }
  }
  function n(m, x) {
    if (!e) return null;
    for (; x !== null; ) t(m, x), x = x.sibling;
    return null;
  }
  function r(m, x) {
    for (m = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? m.set(x.key, x) : m.set(x.index, x), x = x.sibling;
    return m;
  }
  function s(m, x) {
    return m = ln(m, x), m.index = 0, m.sibling = null, m;
  }
  function o(m, x, v) {
    return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < x ? (m.flags |= 2, x) : v) : (m.flags |= 2, x)) : (m.flags |= 1048576, x);
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, x, v, S) {
    return x === null || x.tag !== 6 ? (x = za(v, m.mode, S), x.return = m, x) : (x = s(x, v), x.return = m, x);
  }
  function c(m, x, v, S) {
    var $ = v.type;
    return $ === qn ? d(m, x, v.props.children, S, v.key) : x !== null && (x.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === Kt && Xc($) === x.type) ? (S = s(x, v.props), S.ref = Dr(m, x, v), S.return = m, S) : (S = ao(v.type, v.key, v.props, null, m.mode, S), S.ref = Dr(m, x, v), S.return = m, S);
  }
  function u(m, x, v, S) {
    return x === null || x.tag !== 4 || x.stateNode.containerInfo !== v.containerInfo || x.stateNode.implementation !== v.implementation ? (x = Oa(v, m.mode, S), x.return = m, x) : (x = s(x, v.children || []), x.return = m, x);
  }
  function d(m, x, v, S, $) {
    return x === null || x.tag !== 7 ? (x = En(v, m.mode, S, $), x.return = m, x) : (x = s(x, v), x.return = m, x);
  }
  function p(m, x, v) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return x = za("" + x, m.mode, v), x.return = m, x;
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case As:
          return v = ao(x.type, x.key, x.props, null, m.mode, v), v.ref = Dr(m, null, x), v.return = m, v;
        case Vn:
          return x = Oa(x, m.mode, v), x.return = m, x;
        case Kt:
          var S = x._init;
          return p(m, S(x._payload), v);
      }
      if (Hr(x) || Ar(x)) return x = En(x, m.mode, v, null), x.return = m, x;
      Hs(m, x);
    }
    return null;
  }
  function h(m, x, v, S) {
    var $ = x !== null ? x.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return $ !== null ? null : l(m, x, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case As:
          return v.key === $ ? c(m, x, v, S) : null;
        case Vn:
          return v.key === $ ? u(m, x, v, S) : null;
        case Kt:
          return $ = v._init, h(
            m,
            x,
            $(v._payload),
            S
          );
      }
      if (Hr(v) || Ar(v)) return $ !== null ? null : d(m, x, v, S, null);
      Hs(m, v);
    }
    return null;
  }
  function f(m, x, v, S, $) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return m = m.get(v) || null, l(x, m, "" + S, $);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case As:
          return m = m.get(S.key === null ? v : S.key) || null, c(x, m, S, $);
        case Vn:
          return m = m.get(S.key === null ? v : S.key) || null, u(x, m, S, $);
        case Kt:
          var y = S._init;
          return f(m, x, v, y(S._payload), $);
      }
      if (Hr(S) || Ar(S)) return m = m.get(v) || null, d(x, m, S, $, null);
      Hs(x, S);
    }
    return null;
  }
  function g(m, x, v, S) {
    for (var $ = null, y = null, P = x, A = x = 0, B = null; P !== null && A < v.length; A++) {
      P.index > A ? (B = P, P = null) : B = P.sibling;
      var L = h(m, P, v[A], S);
      if (L === null) {
        P === null && (P = B);
        break;
      }
      e && P && L.alternate === null && t(m, P), x = o(L, x, A), y === null ? $ = L : y.sibling = L, y = L, P = B;
    }
    if (A === v.length) return n(m, P), le && bn(m, A), $;
    if (P === null) {
      for (; A < v.length; A++) P = p(m, v[A], S), P !== null && (x = o(P, x, A), y === null ? $ = P : y.sibling = P, y = P);
      return le && bn(m, A), $;
    }
    for (P = r(m, P); A < v.length; A++) B = f(P, m, A, v[A], S), B !== null && (e && B.alternate !== null && P.delete(B.key === null ? A : B.key), x = o(B, x, A), y === null ? $ = B : y.sibling = B, y = B);
    return e && P.forEach(function(Y) {
      return t(m, Y);
    }), le && bn(m, A), $;
  }
  function w(m, x, v, S) {
    var $ = Ar(v);
    if (typeof $ != "function") throw Error(E(150));
    if (v = $.call(v), v == null) throw Error(E(151));
    for (var y = $ = null, P = x, A = x = 0, B = null, L = v.next(); P !== null && !L.done; A++, L = v.next()) {
      P.index > A ? (B = P, P = null) : B = P.sibling;
      var Y = h(m, P, L.value, S);
      if (Y === null) {
        P === null && (P = B);
        break;
      }
      e && P && Y.alternate === null && t(m, P), x = o(Y, x, A), y === null ? $ = Y : y.sibling = Y, y = Y, P = B;
    }
    if (L.done) return n(
      m,
      P
    ), le && bn(m, A), $;
    if (P === null) {
      for (; !L.done; A++, L = v.next()) L = p(m, L.value, S), L !== null && (x = o(L, x, A), y === null ? $ = L : y.sibling = L, y = L);
      return le && bn(m, A), $;
    }
    for (P = r(m, P); !L.done; A++, L = v.next()) L = f(P, m, A, L.value, S), L !== null && (e && L.alternate !== null && P.delete(L.key === null ? A : L.key), x = o(L, x, A), y === null ? $ = L : y.sibling = L, y = L);
    return e && P.forEach(function(ee) {
      return t(m, ee);
    }), le && bn(m, A), $;
  }
  function k(m, x, v, S) {
    if (typeof v == "object" && v !== null && v.type === qn && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case As:
          e: {
            for (var $ = v.key, y = x; y !== null; ) {
              if (y.key === $) {
                if ($ = v.type, $ === qn) {
                  if (y.tag === 7) {
                    n(m, y.sibling), x = s(y, v.props.children), x.return = m, m = x;
                    break e;
                  }
                } else if (y.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === Kt && Xc($) === y.type) {
                  n(m, y.sibling), x = s(y, v.props), x.ref = Dr(m, y, v), x.return = m, m = x;
                  break e;
                }
                n(m, y);
                break;
              } else t(m, y);
              y = y.sibling;
            }
            v.type === qn ? (x = En(v.props.children, m.mode, S, v.key), x.return = m, m = x) : (S = ao(v.type, v.key, v.props, null, m.mode, S), S.ref = Dr(m, x, v), S.return = m, m = S);
          }
          return i(m);
        case Vn:
          e: {
            for (y = v.key; x !== null; ) {
              if (x.key === y) if (x.tag === 4 && x.stateNode.containerInfo === v.containerInfo && x.stateNode.implementation === v.implementation) {
                n(m, x.sibling), x = s(x, v.children || []), x.return = m, m = x;
                break e;
              } else {
                n(m, x);
                break;
              }
              else t(m, x);
              x = x.sibling;
            }
            x = Oa(v, m.mode, S), x.return = m, m = x;
          }
          return i(m);
        case Kt:
          return y = v._init, k(m, x, y(v._payload), S);
      }
      if (Hr(v)) return g(m, x, v, S);
      if (Ar(v)) return w(m, x, v, S);
      Hs(m, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, x !== null && x.tag === 6 ? (n(m, x.sibling), x = s(x, v), x.return = m, m = x) : (n(m, x), x = za(v, m.mode, S), x.return = m, m = x), i(m)) : n(m, x);
  }
  return k;
}
var yr = kp(!0), Sp = kp(!1), So = mn(null), jo = null, er = null, bl = null;
function kl() {
  bl = er = jo = null;
}
function Sl(e) {
  var t = So.current;
  ie(So), e._currentValue = t;
}
function Si(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function ur(e, t) {
  jo = e, bl = er = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0), e.firstContext = null);
}
function ct(e) {
  var t = e._currentValue;
  if (bl !== e) if (e = { context: e, memoizedValue: t, next: null }, er === null) {
    if (jo === null) throw Error(E(308));
    er = e, jo.dependencies = { lanes: 0, firstContext: e };
  } else er = er.next = e;
  return t;
}
var jn = null;
function jl(e) {
  jn === null ? jn = [e] : jn.push(e);
}
function jp(e, t, n, r) {
  var s = t.interleaved;
  return s === null ? (n.next = n, jl(t)) : (n.next = s.next, s.next = n), t.interleaved = n, _t(e, r);
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Yt = !1;
function Nl(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Np(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Q & 2) {
    var s = r.pending;
    return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, _t(e, n);
  }
  return s = r.interleaved, s === null ? (t.next = t, jl(r)) : (t.next = s.next, s.next = t), r.interleaved = t, _t(e, n);
}
function eo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ul(e, n);
  }
}
function Jc(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var s = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? s = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? s = o = t : o = o.next = t;
    } else s = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: s, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function No(e, t, n, r) {
  var s = e.updateQueue;
  Yt = !1;
  var o = s.firstBaseUpdate, i = s.lastBaseUpdate, l = s.shared.pending;
  if (l !== null) {
    s.shared.pending = null;
    var c = l, u = c.next;
    c.next = null, i === null ? o = u : i.next = u, i = c;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== i && (l === null ? d.firstBaseUpdate = u : l.next = u, d.lastBaseUpdate = c));
  }
  if (o !== null) {
    var p = s.baseState;
    i = 0, d = u = c = null, l = o;
    do {
      var h = l.lane, f = l.eventTime;
      if ((r & h) === h) {
        d !== null && (d = d.next = {
          eventTime: f,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var g = e, w = l;
          switch (h = t, f = n, w.tag) {
            case 1:
              if (g = w.payload, typeof g == "function") {
                p = g.call(f, p, h);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = w.payload, h = typeof g == "function" ? g.call(f, p, h) : g, h == null) break e;
              p = he({}, p, h);
              break e;
            case 2:
              Yt = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, h = s.effects, h === null ? s.effects = [l] : h.push(l));
      } else f = { eventTime: f, lane: h, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (u = d = f, c = p) : d = d.next = f, i |= h;
      if (l = l.next, l === null) {
        if (l = s.shared.pending, l === null) break;
        h = l, l = h.next, h.next = null, s.lastBaseUpdate = h, s.shared.pending = null;
      }
    } while (!0);
    if (d === null && (c = p), s.baseState = c, s.firstBaseUpdate = u, s.lastBaseUpdate = d, t = s.shared.interleaved, t !== null) {
      s = t;
      do
        i |= s.lane, s = s.next;
      while (s !== t);
    } else o === null && (s.shared.lanes = 0);
    Ln |= i, e.lanes = i, e.memoizedState = p;
  }
}
function eu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], s = r.callback;
    if (s !== null) {
      if (r.callback = null, r = n, typeof s != "function") throw Error(E(191, s));
      s.call(r);
    }
  }
}
var Cs = {}, Ct = mn(Cs), ps = mn(Cs), hs = mn(Cs);
function Nn(e) {
  if (e === Cs) throw Error(E(174));
  return e;
}
function Cl(e, t) {
  switch (re(hs, t), re(ps, e), re(Ct, Cs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ri(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ri(t, e);
  }
  ie(Ct), re(Ct, t);
}
function vr() {
  ie(Ct), ie(ps), ie(hs);
}
function Cp(e) {
  Nn(hs.current);
  var t = Nn(Ct.current), n = ri(t, e.type);
  t !== n && (re(ps, e), re(Ct, n));
}
function $l(e) {
  ps.current === e && (ie(Ct), ie(ps));
}
var de = mn(0);
function Co(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Ia = [];
function Pl() {
  for (var e = 0; e < Ia.length; e++) Ia[e]._workInProgressVersionPrimary = null;
  Ia.length = 0;
}
var to = Ut.ReactCurrentDispatcher, Ta = Ut.ReactCurrentBatchConfig, Mn = 0, pe = null, ye = null, ke = null, $o = !1, Yr = !1, fs = 0, kg = 0;
function Ae() {
  throw Error(E(321));
}
function El(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!wt(e[n], t[n])) return !1;
  return !0;
}
function Al(e, t, n, r, s, o) {
  if (Mn = o, pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, to.current = e === null || e.memoizedState === null ? Cg : $g, e = n(r, s), Yr) {
    o = 0;
    do {
      if (Yr = !1, fs = 0, 25 <= o) throw Error(E(301));
      o += 1, ke = ye = null, t.updateQueue = null, to.current = Pg, e = n(r, s);
    } while (Yr);
  }
  if (to.current = Po, t = ye !== null && ye.next !== null, Mn = 0, ke = ye = pe = null, $o = !1, t) throw Error(E(300));
  return e;
}
function Il() {
  var e = fs !== 0;
  return fs = 0, e;
}
function kt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ke === null ? pe.memoizedState = ke = e : ke = ke.next = e, ke;
}
function ut() {
  if (ye === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ye.next;
  var t = ke === null ? pe.memoizedState : ke.next;
  if (t !== null) ke = t, ye = e;
  else {
    if (e === null) throw Error(E(310));
    ye = e, e = { memoizedState: ye.memoizedState, baseState: ye.baseState, baseQueue: ye.baseQueue, queue: ye.queue, next: null }, ke === null ? pe.memoizedState = ke = e : ke = ke.next = e;
  }
  return ke;
}
function ms(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ma(e) {
  var t = ut(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = ye, s = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (s !== null) {
      var i = s.next;
      s.next = o.next, o.next = i;
    }
    r.baseQueue = s = o, n.pending = null;
  }
  if (s !== null) {
    o = s.next, r = r.baseState;
    var l = i = null, c = null, u = o;
    do {
      var d = u.lane;
      if ((Mn & d) === d) c !== null && (c = c.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        c === null ? (l = c = p, i = r) : c = c.next = p, pe.lanes |= d, Ln |= d;
      }
      u = u.next;
    } while (u !== null && u !== o);
    c === null ? i = r : c.next = l, wt(r, t.memoizedState) || (Ve = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    s = e;
    do
      o = s.lane, pe.lanes |= o, Ln |= o, s = s.next;
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function La(e) {
  var t = ut(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, s = n.pending, o = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var i = s = s.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== s);
    wt(o, t.memoizedState) || (Ve = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function $p() {
}
function Pp(e, t) {
  var n = pe, r = ut(), s = t(), o = !wt(r.memoizedState, s);
  if (o && (r.memoizedState = s, Ve = !0), r = r.queue, Tl(Ip.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ke !== null && ke.memoizedState.tag & 1) {
    if (n.flags |= 2048, gs(9, Ap.bind(null, n, r, s, t), void 0, null), je === null) throw Error(E(349));
    Mn & 30 || Ep(n, t, s);
  }
  return s;
}
function Ep(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ap(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Tp(t) && Mp(e);
}
function Ip(e, t, n) {
  return n(function() {
    Tp(t) && Mp(e);
  });
}
function Tp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wt(e, n);
  } catch {
    return !0;
  }
}
function Mp(e) {
  var t = _t(e, 1);
  t !== null && yt(t, e, 1, -1);
}
function tu(e) {
  var t = kt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ms, lastRenderedState: e }, t.queue = e, e = e.dispatch = Ng.bind(null, pe, e), [t.memoizedState, e];
}
function gs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Lp() {
  return ut().memoizedState;
}
function no(e, t, n, r) {
  var s = kt();
  pe.flags |= e, s.memoizedState = gs(1 | t, n, void 0, r === void 0 ? null : r);
}
function qo(e, t, n, r) {
  var s = ut();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ye !== null) {
    var i = ye.memoizedState;
    if (o = i.destroy, r !== null && El(r, i.deps)) {
      s.memoizedState = gs(t, n, o, r);
      return;
    }
  }
  pe.flags |= e, s.memoizedState = gs(1 | t, n, o, r);
}
function nu(e, t) {
  return no(8390656, 8, e, t);
}
function Tl(e, t) {
  return qo(2048, 8, e, t);
}
function Dp(e, t) {
  return qo(4, 2, e, t);
}
function Rp(e, t) {
  return qo(4, 4, e, t);
}
function zp(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Op(e, t, n) {
  return n = n != null ? n.concat([e]) : null, qo(4, 4, zp.bind(null, t, e), n);
}
function Ml() {
}
function _p(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && El(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Fp(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && El(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Hp(e, t, n) {
  return Mn & 21 ? (wt(n, t) || (n = qd(), pe.lanes |= n, Ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ve = !0), e.memoizedState = n);
}
function Sg(e, t) {
  var n = X;
  X = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ta.transition;
  Ta.transition = {};
  try {
    e(!1), t();
  } finally {
    X = n, Ta.transition = r;
  }
}
function Up() {
  return ut().memoizedState;
}
function jg(e, t, n) {
  var r = an(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Bp(e)) Wp(t, n);
  else if (n = jp(e, t, n, r), n !== null) {
    var s = Fe();
    yt(n, e, r, s), Vp(n, t, r);
  }
}
function Ng(e, t, n) {
  var r = an(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Bp(e)) Wp(t, s);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, l = o(i, n);
      if (s.hasEagerState = !0, s.eagerState = l, wt(l, i)) {
        var c = t.interleaved;
        c === null ? (s.next = s, jl(t)) : (s.next = c.next, c.next = s), t.interleaved = s;
        return;
      }
    } catch {
    } finally {
    }
    n = jp(e, t, s, r), n !== null && (s = Fe(), yt(n, e, r, s), Vp(n, t, r));
  }
}
function Bp(e) {
  var t = e.alternate;
  return e === pe || t !== null && t === pe;
}
function Wp(e, t) {
  Yr = $o = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Vp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ul(e, n);
  }
}
var Po = { readContext: ct, useCallback: Ae, useContext: Ae, useEffect: Ae, useImperativeHandle: Ae, useInsertionEffect: Ae, useLayoutEffect: Ae, useMemo: Ae, useReducer: Ae, useRef: Ae, useState: Ae, useDebugValue: Ae, useDeferredValue: Ae, useTransition: Ae, useMutableSource: Ae, useSyncExternalStore: Ae, useId: Ae, unstable_isNewReconciler: !1 }, Cg = { readContext: ct, useCallback: function(e, t) {
  return kt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ct, useEffect: nu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, no(
    4194308,
    4,
    zp.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return no(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return no(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = kt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = kt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = jg.bind(null, pe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = kt();
  return e = { current: e }, t.memoizedState = e;
}, useState: tu, useDebugValue: Ml, useDeferredValue: function(e) {
  return kt().memoizedState = e;
}, useTransition: function() {
  var e = tu(!1), t = e[0];
  return e = Sg.bind(null, e[1]), kt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = pe, s = kt();
  if (le) {
    if (n === void 0) throw Error(E(407));
    n = n();
  } else {
    if (n = t(), je === null) throw Error(E(349));
    Mn & 30 || Ep(r, t, n);
  }
  s.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return s.queue = o, nu(Ip.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, gs(9, Ap.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = kt(), t = je.identifierPrefix;
  if (le) {
    var n = Lt, r = Mt;
    n = (r & ~(1 << 32 - xt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = fs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = kg++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, $g = {
  readContext: ct,
  useCallback: _p,
  useContext: ct,
  useEffect: Tl,
  useImperativeHandle: Op,
  useInsertionEffect: Dp,
  useLayoutEffect: Rp,
  useMemo: Fp,
  useReducer: Ma,
  useRef: Lp,
  useState: function() {
    return Ma(ms);
  },
  useDebugValue: Ml,
  useDeferredValue: function(e) {
    var t = ut();
    return Hp(t, ye.memoizedState, e);
  },
  useTransition: function() {
    var e = Ma(ms)[0], t = ut().memoizedState;
    return [e, t];
  },
  useMutableSource: $p,
  useSyncExternalStore: Pp,
  useId: Up,
  unstable_isNewReconciler: !1
}, Pg = { readContext: ct, useCallback: _p, useContext: ct, useEffect: Tl, useImperativeHandle: Op, useInsertionEffect: Dp, useLayoutEffect: Rp, useMemo: Fp, useReducer: La, useRef: Lp, useState: function() {
  return La(ms);
}, useDebugValue: Ml, useDeferredValue: function(e) {
  var t = ut();
  return ye === null ? t.memoizedState = e : Hp(t, ye.memoizedState, e);
}, useTransition: function() {
  var e = La(ms)[0], t = ut().memoizedState;
  return [e, t];
}, useMutableSource: $p, useSyncExternalStore: Pp, useId: Up, unstable_isNewReconciler: !1 };
function ht(e, t) {
  if (e && e.defaultProps) {
    t = he({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ji(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Go = { isMounted: function(e) {
  return (e = e._reactInternals) ? On(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Fe(), s = an(e), o = Dt(r, s);
  o.payload = t, n != null && (o.callback = n), t = sn(e, o, s), t !== null && (yt(t, e, s, r), eo(t, e, s));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Fe(), s = an(e), o = Dt(r, s);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = sn(e, o, s), t !== null && (yt(t, e, s, r), eo(t, e, s));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Fe(), r = an(e), s = Dt(n, r);
  s.tag = 2, t != null && (s.callback = t), t = sn(e, s, r), t !== null && (yt(t, e, r, n), eo(t, e, r));
} };
function ru(e, t, n, r, s, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !ls(n, r) || !ls(s, o) : !0;
}
function qp(e, t, n) {
  var r = !1, s = dn, o = t.contextType;
  return typeof o == "object" && o !== null ? o = ct(o) : (s = Ke(t) ? In : Le.current, r = t.contextTypes, o = (r = r != null) ? gr(e, s) : dn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Go, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function su(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Go.enqueueReplaceState(t, t.state, null);
}
function Ni(e, t, n, r) {
  var s = e.stateNode;
  s.props = n, s.state = e.memoizedState, s.refs = {}, Nl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? s.context = ct(o) : (o = Ke(t) ? In : Le.current, s.context = gr(e, o)), s.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ji(e, t, o, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && Go.enqueueReplaceState(s, s.state, null), No(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function wr(e, t) {
  try {
    var n = "", r = t;
    do
      n += nm(r), r = r.return;
    while (r);
    var s = n;
  } catch (o) {
    s = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Da(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ci(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Eg = typeof WeakMap == "function" ? WeakMap : Map;
function Gp(e, t, n) {
  n = Dt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ao || (Ao = !0, Ri = r), Ci(e, t);
  }, n;
}
function Kp(e, t, n) {
  n = Dt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    n.payload = function() {
      return r(s);
    }, n.callback = function() {
      Ci(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Ci(e, t), typeof r != "function" && (on === null ? on = /* @__PURE__ */ new Set([this]) : on.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function ou(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Eg();
    var s = /* @__PURE__ */ new Set();
    r.set(t, s);
  } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
  s.has(n) || (s.add(n), e = Bg.bind(null, e, t, n), t.then(e, e));
}
function au(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function iu(e, t, n, r, s) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dt(-1, 1), t.tag = 2, sn(n, t, 1))), n.lanes |= 1), e);
}
var Ag = Ut.ReactCurrentOwner, Ve = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? Sp(t, null, n, r) : yr(t, e.child, n, r);
}
function lu(e, t, n, r, s) {
  n = n.render;
  var o = t.ref;
  return ur(t, s), r = Al(e, t, n, r, o, s), n = Il(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Ft(e, t, s)) : (le && n && yl(t), t.flags |= 1, Oe(e, t, r, s), t.child);
}
function cu(e, t, n, r, s) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Hl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Yp(e, t, o, r, s)) : (e = ao(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & s)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ls, n(i, r) && e.ref === t.ref) return Ft(e, t, s);
  }
  return t.flags |= 1, e = ln(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Yp(e, t, n, r, s) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ls(o, r) && e.ref === t.ref) if (Ve = !1, t.pendingProps = r = o, (e.lanes & s) !== 0) e.flags & 131072 && (Ve = !0);
    else return t.lanes = e.lanes, Ft(e, t, s);
  }
  return $i(e, t, n, r, s);
}
function Zp(e, t, n) {
  var r = t.pendingProps, s = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, re(nr, Qe), Qe |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, re(nr, Qe), Qe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, re(nr, Qe), Qe |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, re(nr, Qe), Qe |= r;
  return Oe(e, t, s, n), t.child;
}
function Qp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function $i(e, t, n, r, s) {
  var o = Ke(n) ? In : Le.current;
  return o = gr(t, o), ur(t, s), n = Al(e, t, n, r, o, s), r = Il(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Ft(e, t, s)) : (le && r && yl(t), t.flags |= 1, Oe(e, t, n, s), t.child);
}
function uu(e, t, n, r, s) {
  if (Ke(n)) {
    var o = !0;
    wo(t);
  } else o = !1;
  if (ur(t, s), t.stateNode === null) ro(e, t), qp(t, n, r), Ni(t, n, r, s), r = !0;
  else if (e === null) {
    var i = t.stateNode, l = t.memoizedProps;
    i.props = l;
    var c = i.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = ct(u) : (u = Ke(n) ? In : Le.current, u = gr(t, u));
    var d = n.getDerivedStateFromProps, p = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== r || c !== u) && su(t, i, r, u), Yt = !1;
    var h = t.memoizedState;
    i.state = h, No(t, r, i, s), c = t.memoizedState, l !== r || h !== c || Ge.current || Yt ? (typeof d == "function" && (ji(t, n, d, r), c = t.memoizedState), (l = Yt || ru(t, n, l, r, h, c, u)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = u, r = l) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Np(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : ht(t.type, l), i.props = u, p = t.pendingProps, h = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = ct(c) : (c = Ke(n) ? In : Le.current, c = gr(t, c));
    var f = n.getDerivedStateFromProps;
    (d = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== p || h !== c) && su(t, i, r, c), Yt = !1, h = t.memoizedState, i.state = h, No(t, r, i, s);
    var g = t.memoizedState;
    l !== p || h !== g || Ge.current || Yt ? (typeof f == "function" && (ji(t, n, f, r), g = t.memoizedState), (u = Yt || ru(t, n, u, r, h, g, c) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = c, r = u) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Pi(e, t, n, r, o, s);
}
function Pi(e, t, n, r, s, o) {
  Qp(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return s && Yc(t, n, !1), Ft(e, t, o);
  r = t.stateNode, Ag.current = t;
  var l = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = yr(t, e.child, null, o), t.child = yr(t, null, l, o)) : Oe(e, t, l, o), t.memoizedState = r.state, s && Yc(t, n, !0), t.child;
}
function Xp(e) {
  var t = e.stateNode;
  t.pendingContext ? Kc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Kc(e, t.context, !1), Cl(e, t.containerInfo);
}
function du(e, t, n, r, s) {
  return xr(), wl(s), t.flags |= 256, Oe(e, t, n, r), t.child;
}
var Ei = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ai(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Jp(e, t, n) {
  var r = t.pendingProps, s = de.current, o = !1, i = (t.flags & 128) !== 0, l;
  if ((l = i) || (l = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), re(de, s & 1), e === null)
    return ki(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Zo(i, r, 0, null), e = En(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ai(n), t.memoizedState = Ei, e) : Ll(t, i));
  if (s = e.memoizedState, s !== null && (l = s.dehydrated, l !== null)) return Ig(e, t, i, r, l, s, n);
  if (o) {
    o = r.fallback, i = t.mode, s = e.child, l = s.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = ln(s, c), r.subtreeFlags = s.subtreeFlags & 14680064), l !== null ? o = ln(l, o) : (o = En(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Ai(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Ei, r;
  }
  return o = e.child, e = o.sibling, r = ln(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ll(e, t) {
  return t = Zo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Us(e, t, n, r) {
  return r !== null && wl(r), yr(t, e.child, null, n), e = Ll(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Ig(e, t, n, r, s, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Da(Error(E(422))), Us(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, s = t.mode, r = Zo({ mode: "visible", children: r.children }, s, 0, null), o = En(o, s, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && yr(t, e.child, null, i), t.child.memoizedState = Ai(i), t.memoizedState = Ei, o);
  if (!(t.mode & 1)) return Us(e, t, i, null);
  if (s.data === "$!") {
    if (r = s.nextSibling && s.nextSibling.dataset, r) var l = r.dgst;
    return r = l, o = Error(E(419)), r = Da(o, r, void 0), Us(e, t, i, r);
  }
  if (l = (i & e.childLanes) !== 0, Ve || l) {
    if (r = je, r !== null) {
      switch (i & -i) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      s = s & (r.suspendedLanes | i) ? 0 : s, s !== 0 && s !== o.retryLane && (o.retryLane = s, _t(e, s), yt(r, e, s, -1));
    }
    return Fl(), r = Da(Error(E(421))), Us(e, t, i, r);
  }
  return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Wg.bind(null, e), s._reactRetry = t, null) : (e = o.treeContext, Xe = rn(s.nextSibling), et = t, le = !0, mt = null, e !== null && (ot[at++] = Mt, ot[at++] = Lt, ot[at++] = Tn, Mt = e.id, Lt = e.overflow, Tn = t), t = Ll(t, r.children), t.flags |= 4096, t);
}
function pu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Si(e.return, t, n);
}
function Ra(e, t, n, r, s) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = s);
}
function eh(e, t, n) {
  var r = t.pendingProps, s = r.revealOrder, o = r.tail;
  if (Oe(e, t, r.children, n), r = de.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && pu(e, n, t);
      else if (e.tag === 19) pu(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (re(de, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (s) {
    case "forwards":
      for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && Co(e) === null && (s = n), n = n.sibling;
      n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Ra(t, !1, s, n, o);
      break;
    case "backwards":
      for (n = null, s = t.child, t.child = null; s !== null; ) {
        if (e = s.alternate, e !== null && Co(e) === null) {
          t.child = s;
          break;
        }
        e = s.sibling, s.sibling = n, n = s, s = e;
      }
      Ra(t, !0, n, null, o);
      break;
    case "together":
      Ra(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ro(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ft(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ln |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ln(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Tg(e, t, n) {
  switch (t.tag) {
    case 3:
      Xp(t), xr();
      break;
    case 5:
      Cp(t);
      break;
    case 1:
      Ke(t.type) && wo(t);
      break;
    case 4:
      Cl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, s = t.memoizedProps.value;
      re(So, r._currentValue), r._currentValue = s;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (re(de, de.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Jp(e, t, n) : (re(de, de.current & 1), e = Ft(e, t, n), e !== null ? e.sibling : null);
      re(de, de.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return eh(e, t, n);
        t.flags |= 128;
      }
      if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), re(de, de.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Zp(e, t, n);
  }
  return Ft(e, t, n);
}
var th, Ii, nh, rh;
th = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Ii = function() {
};
nh = function(e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    e = t.stateNode, Nn(Ct.current);
    var o = null;
    switch (n) {
      case "input":
        s = Ja(e, s), r = Ja(e, r), o = [];
        break;
      case "select":
        s = he({}, s, { value: void 0 }), r = he({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        s = ni(e, s), r = ni(e, r), o = [];
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = yo);
    }
    si(n, r);
    var i;
    n = null;
    for (u in s) if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null) if (u === "style") {
      var l = s[u];
      for (i in l) l.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ts.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (l = s != null ? s[u] : void 0, r.hasOwnProperty(u) && c !== l && (c != null || l != null)) if (u === "style") if (l) {
        for (i in l) !l.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in c) c.hasOwnProperty(i) && l[i] !== c[i] && (n || (n = {}), n[i] = c[i]);
      } else n || (o || (o = []), o.push(
        u,
        n
      )), n = c;
      else u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, l = l ? l.__html : void 0, c != null && l !== c && (o = o || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ts.hasOwnProperty(u) ? (c != null && u === "onScroll" && oe("scroll", e), o || l === c || (o = [])) : (o = o || []).push(u, c));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
rh = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rr(e, t) {
  if (!le) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
  else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Mg(e, t, n) {
  var r = t.pendingProps;
  switch (vl(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ie(t), null;
    case 1:
      return Ke(t.type) && vo(), Ie(t), null;
    case 3:
      return r = t.stateNode, vr(), ie(Ge), ie(Le), Pl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Fs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, mt !== null && (_i(mt), mt = null))), Ii(e, t), Ie(t), null;
    case 5:
      $l(t);
      var s = Nn(hs.current);
      if (n = t.type, e !== null && t.stateNode != null) nh(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return Ie(t), null;
        }
        if (e = Nn(Ct.current), Fs(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[jt] = t, r[ds] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < Br.length; s++) oe(Br[s], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe(
                "error",
                r
              ), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              bc(r, o), oe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, oe("invalid", r);
              break;
            case "textarea":
              Sc(r, o), oe("invalid", r);
          }
          si(n, o), s = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var l = o[i];
            i === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && _s(r.textContent, l, e), s = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && _s(
              r.textContent,
              l,
              e
            ), s = ["children", "" + l]) : ts.hasOwnProperty(i) && l != null && i === "onScroll" && oe("scroll", r);
          }
          switch (n) {
            case "input":
              Is(r), kc(r, o, !0);
              break;
            case "textarea":
              Is(r), jc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = yo);
          }
          r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Id(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[jt] = t, e[ds] = r, th(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = oi(n, r), n) {
              case "dialog":
                oe("cancel", e), oe("close", e), s = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), s = r;
                break;
              case "video":
              case "audio":
                for (s = 0; s < Br.length; s++) oe(Br[s], e);
                s = r;
                break;
              case "source":
                oe("error", e), s = r;
                break;
              case "img":
              case "image":
              case "link":
                oe(
                  "error",
                  e
                ), oe("load", e), s = r;
                break;
              case "details":
                oe("toggle", e), s = r;
                break;
              case "input":
                bc(e, r), s = Ja(e, r), oe("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, s = he({}, r, { value: void 0 }), oe("invalid", e);
                break;
              case "textarea":
                Sc(e, r), s = ni(e, r), oe("invalid", e);
                break;
              default:
                s = r;
            }
            si(n, s), l = s;
            for (o in l) if (l.hasOwnProperty(o)) {
              var c = l[o];
              o === "style" ? Ld(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Td(e, c)) : o === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && ns(e, c) : typeof c == "number" && ns(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (ts.hasOwnProperty(o) ? c != null && o === "onScroll" && oe("scroll", e) : c != null && sl(e, o, c, i));
            }
            switch (n) {
              case "input":
                Is(e), kc(e, r, !1);
                break;
              case "textarea":
                Is(e), jc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + un(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? ar(e, !!r.multiple, o, !1) : r.defaultValue != null && ar(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = yo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Ie(t), null;
    case 6:
      if (e && t.stateNode != null) rh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (n = Nn(hs.current), Nn(Ct.current), Fs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[jt] = t, (o = r.nodeValue !== n) && (e = et, e !== null)) switch (e.tag) {
            case 3:
              _s(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && _s(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[jt] = t, t.stateNode = r;
      }
      return Ie(t), null;
    case 13:
      if (ie(de), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (le && Xe !== null && t.mode & 1 && !(t.flags & 128)) bp(), xr(), t.flags |= 98560, o = !1;
        else if (o = Fs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(E(317));
            o[jt] = t;
          } else xr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ie(t), o = !1;
        } else mt !== null && (_i(mt), mt = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || de.current & 1 ? ve === 0 && (ve = 3) : Fl())), t.updateQueue !== null && (t.flags |= 4), Ie(t), null);
    case 4:
      return vr(), Ii(e, t), e === null && cs(t.stateNode.containerInfo), Ie(t), null;
    case 10:
      return Sl(t.type._context), Ie(t), null;
    case 17:
      return Ke(t.type) && vo(), Ie(t), null;
    case 19:
      if (ie(de), o = t.memoizedState, o === null) return Ie(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Rr(o, !1);
      else {
        if (ve !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Co(e), i !== null) {
            for (t.flags |= 128, Rr(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return re(de, de.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && ge() > br && (t.flags |= 128, r = !0, Rr(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Co(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Rr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !le) return Ie(t), null;
        } else 2 * ge() - o.renderingStartTime > br && n !== 1073741824 && (t.flags |= 128, r = !0, Rr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ge(), t.sibling = null, n = de.current, re(de, r ? n & 1 | 2 : n & 1), t) : (Ie(t), null);
    case 22:
    case 23:
      return _l(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Qe & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Lg(e, t) {
  switch (vl(t), t.tag) {
    case 1:
      return Ke(t.type) && vo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return vr(), ie(Ge), ie(Le), Pl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return $l(t), null;
    case 13:
      if (ie(de), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        xr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ie(de), null;
    case 4:
      return vr(), null;
    case 10:
      return Sl(t.type._context), null;
    case 22:
    case 23:
      return _l(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Bs = !1, Me = !1, Dg = typeof WeakSet == "function" ? WeakSet : Set, z = null;
function tr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    fe(e, t, r);
  }
  else n.current = null;
}
function Ti(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var hu = !1;
function Rg(e, t) {
  if (mi = mo, e = lp(), xl(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var s = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, l = -1, c = -1, u = 0, d = 0, p = e, h = null;
        t: for (; ; ) {
          for (var f; p !== n || s !== 0 && p.nodeType !== 3 || (l = i + s), p !== o || r !== 0 && p.nodeType !== 3 || (c = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (f = p.firstChild) !== null; )
            h = p, p = f;
          for (; ; ) {
            if (p === e) break t;
            if (h === n && ++u === s && (l = i), h === o && ++d === r && (c = i), (f = p.nextSibling) !== null) break;
            p = h, h = p.parentNode;
          }
          p = f;
        }
        n = l === -1 || c === -1 ? null : { start: l, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (gi = { focusedElem: e, selectionRange: n }, mo = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
  else for (; z !== null; ) {
    t = z;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var w = g.memoizedProps, k = g.memoizedState, m = t.stateNode, x = m.getSnapshotBeforeUpdate(t.elementType === t.type ? w : ht(t.type, w), k);
            m.__reactInternalSnapshotBeforeUpdate = x;
          }
          break;
        case 3:
          var v = t.stateNode.containerInfo;
          v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(E(163));
      }
    } catch (S) {
      fe(t, t.return, S);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, z = e;
      break;
    }
    z = t.return;
  }
  return g = hu, hu = !1, g;
}
function Zr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var s = r = r.next;
    do {
      if ((s.tag & e) === e) {
        var o = s.destroy;
        s.destroy = void 0, o !== void 0 && Ti(t, n, o);
      }
      s = s.next;
    } while (s !== r);
  }
}
function Ko(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Mi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function sh(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, sh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[jt], delete t[ds], delete t[vi], delete t[yg], delete t[vg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function oh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function fu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || oh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Li(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = yo));
  else if (r !== 4 && (e = e.child, e !== null)) for (Li(e, t, n), e = e.sibling; e !== null; ) Li(e, t, n), e = e.sibling;
}
function Di(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Di(e, t, n), e = e.sibling; e !== null; ) Di(e, t, n), e = e.sibling;
}
var Ce = null, ft = !1;
function Vt(e, t, n) {
  for (n = n.child; n !== null; ) ah(e, t, n), n = n.sibling;
}
function ah(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function") try {
    Nt.onCommitFiberUnmount(Fo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Me || tr(n, t);
    case 6:
      var r = Ce, s = ft;
      Ce = null, Vt(e, t, n), Ce = r, ft = s, Ce !== null && (ft ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null && (ft ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? Ea(e.parentNode, n) : e.nodeType === 1 && Ea(e, n), as(e)) : Ea(Ce, n.stateNode));
      break;
    case 4:
      r = Ce, s = ft, Ce = n.stateNode.containerInfo, ft = !0, Vt(e, t, n), Ce = r, ft = s;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Me && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        s = r = r.next;
        do {
          var o = s, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Ti(n, t, i), s = s.next;
        } while (s !== r);
      }
      Vt(e, t, n);
      break;
    case 1:
      if (!Me && (tr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        fe(n, t, l);
      }
      Vt(e, t, n);
      break;
    case 21:
      Vt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Me = (r = Me) || n.memoizedState !== null, Vt(e, t, n), Me = r) : Vt(e, t, n);
      break;
    default:
      Vt(e, t, n);
  }
}
function mu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Dg()), t.forEach(function(r) {
      var s = Vg.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(s, s));
    });
  }
}
function dt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var s = n[r];
    try {
      var o = e, i = t, l = i;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            Ce = l.stateNode, ft = !1;
            break e;
          case 3:
            Ce = l.stateNode.containerInfo, ft = !0;
            break e;
          case 4:
            Ce = l.stateNode.containerInfo, ft = !0;
            break e;
        }
        l = l.return;
      }
      if (Ce === null) throw Error(E(160));
      ah(o, i, s), Ce = null, ft = !1;
      var c = s.alternate;
      c !== null && (c.return = null), s.return = null;
    } catch (u) {
      fe(s, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ih(t, e), t = t.sibling;
}
function ih(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (dt(t, e), bt(e), r & 4) {
        try {
          Zr(3, e, e.return), Ko(3, e);
        } catch (w) {
          fe(e, e.return, w);
        }
        try {
          Zr(5, e, e.return);
        } catch (w) {
          fe(e, e.return, w);
        }
      }
      break;
    case 1:
      dt(t, e), bt(e), r & 512 && n !== null && tr(n, n.return);
      break;
    case 5:
      if (dt(t, e), bt(e), r & 512 && n !== null && tr(n, n.return), e.flags & 32) {
        var s = e.stateNode;
        try {
          ns(s, "");
        } catch (w) {
          fe(e, e.return, w);
        }
      }
      if (r & 4 && (s = e.stateNode, s != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, l = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          l === "input" && o.type === "radio" && o.name != null && Ed(s, o), oi(l, i);
          var u = oi(l, o);
          for (i = 0; i < c.length; i += 2) {
            var d = c[i], p = c[i + 1];
            d === "style" ? Ld(s, p) : d === "dangerouslySetInnerHTML" ? Td(s, p) : d === "children" ? ns(s, p) : sl(s, d, p, u);
          }
          switch (l) {
            case "input":
              ei(s, o);
              break;
            case "textarea":
              Ad(s, o);
              break;
            case "select":
              var h = s._wrapperState.wasMultiple;
              s._wrapperState.wasMultiple = !!o.multiple;
              var f = o.value;
              f != null ? ar(s, !!o.multiple, f, !1) : h !== !!o.multiple && (o.defaultValue != null ? ar(
                s,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : ar(s, !!o.multiple, o.multiple ? [] : "", !1));
          }
          s[ds] = o;
        } catch (w) {
          fe(e, e.return, w);
        }
      }
      break;
    case 6:
      if (dt(t, e), bt(e), r & 4) {
        if (e.stateNode === null) throw Error(E(162));
        s = e.stateNode, o = e.memoizedProps;
        try {
          s.nodeValue = o;
        } catch (w) {
          fe(e, e.return, w);
        }
      }
      break;
    case 3:
      if (dt(t, e), bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        as(t.containerInfo);
      } catch (w) {
        fe(e, e.return, w);
      }
      break;
    case 4:
      dt(t, e), bt(e);
      break;
    case 13:
      dt(t, e), bt(e), s = e.child, s.flags & 8192 && (o = s.memoizedState !== null, s.stateNode.isHidden = o, !o || s.alternate !== null && s.alternate.memoizedState !== null || (zl = ge())), r & 4 && mu(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Me = (u = Me) || d, dt(t, e), Me = u) : dt(t, e), bt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (z = e, d = e.child; d !== null; ) {
          for (p = z = d; z !== null; ) {
            switch (h = z, f = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Zr(4, h, h.return);
                break;
              case 1:
                tr(h, h.return);
                var g = h.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (w) {
                    fe(r, n, w);
                  }
                }
                break;
              case 5:
                tr(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  xu(p);
                  continue;
                }
            }
            f !== null ? (f.return = h, z = f) : xu(p);
          }
          d = d.sibling;
        }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                s = p.stateNode, u ? (o = s.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = p.stateNode, c = p.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, l.style.display = Md("display", i));
              } catch (w) {
                fe(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (d === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (w) {
              fe(e, e.return, w);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), p = p.return;
          }
          d === p && (d = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      dt(t, e), bt(e), r & 4 && mu(e);
      break;
    case 21:
      break;
    default:
      dt(
        t,
        e
      ), bt(e);
  }
}
function bt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (oh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (ns(s, ""), r.flags &= -33);
          var o = fu(e);
          Di(e, o, s);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, l = fu(e);
          Li(e, l, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (c) {
      fe(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zg(e, t, n) {
  z = e, lh(e);
}
function lh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var s = z, o = s.child;
    if (s.tag === 22 && r) {
      var i = s.memoizedState !== null || Bs;
      if (!i) {
        var l = s.alternate, c = l !== null && l.memoizedState !== null || Me;
        l = Bs;
        var u = Me;
        if (Bs = i, (Me = c) && !u) for (z = s; z !== null; ) i = z, c = i.child, i.tag === 22 && i.memoizedState !== null ? yu(s) : c !== null ? (c.return = i, z = c) : yu(s);
        for (; o !== null; ) z = o, lh(o), o = o.sibling;
        z = s, Bs = l, Me = u;
      }
      gu(e);
    } else s.subtreeFlags & 8772 && o !== null ? (o.return = s, z = o) : gu(e);
  }
}
function gu(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Me || Ko(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Me) if (n === null) r.componentDidMount();
            else {
              var s = t.elementType === t.type ? n.memoizedProps : ht(t.type, n.memoizedProps);
              r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && eu(t, o, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              eu(t, i, n);
            }
            break;
          case 5:
            var l = t.stateNode;
            if (n === null && t.flags & 4) {
              n = l;
              var c = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c.autoFocus && n.focus();
                  break;
                case "img":
                  c.src && (n.src = c.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var d = u.memoizedState;
                if (d !== null) {
                  var p = d.dehydrated;
                  p !== null && as(p);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(E(163));
        }
        Me || t.flags & 512 && Mi(t);
      } catch (h) {
        fe(t, t.return, h);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function xu(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function yu(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ko(4, t);
          } catch (c) {
            fe(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              fe(t, s, c);
            }
          }
          var o = t.return;
          try {
            Mi(t);
          } catch (c) {
            fe(t, o, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Mi(t);
          } catch (c) {
            fe(t, i, c);
          }
      }
    } catch (c) {
      fe(t, t.return, c);
    }
    if (t === e) {
      z = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, z = l;
      break;
    }
    z = t.return;
  }
}
var Og = Math.ceil, Eo = Ut.ReactCurrentDispatcher, Dl = Ut.ReactCurrentOwner, lt = Ut.ReactCurrentBatchConfig, Q = 0, je = null, xe = null, Pe = 0, Qe = 0, nr = mn(0), ve = 0, xs = null, Ln = 0, Yo = 0, Rl = 0, Qr = null, We = null, zl = 0, br = 1 / 0, At = null, Ao = !1, Ri = null, on = null, Ws = !1, Jt = null, Io = 0, Xr = 0, zi = null, so = -1, oo = 0;
function Fe() {
  return Q & 6 ? ge() : so !== -1 ? so : so = ge();
}
function an(e) {
  return e.mode & 1 ? Q & 2 && Pe !== 0 ? Pe & -Pe : bg.transition !== null ? (oo === 0 && (oo = qd()), oo) : (e = X, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Jd(e.type)), e) : 1;
}
function yt(e, t, n, r) {
  if (50 < Xr) throw Xr = 0, zi = null, Error(E(185));
  Ss(e, n, r), (!(Q & 2) || e !== je) && (e === je && (!(Q & 2) && (Yo |= n), ve === 4 && Qt(e, Pe)), Ye(e, r), n === 1 && Q === 0 && !(t.mode & 1) && (br = ge() + 500, Vo && gn()));
}
function Ye(e, t) {
  var n = e.callbackNode;
  bm(e, t);
  var r = fo(e, e === je ? Pe : 0);
  if (r === 0) n !== null && $c(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && $c(n), t === 1) e.tag === 0 ? wg(vu.bind(null, e)) : yp(vu.bind(null, e)), gg(function() {
      !(Q & 6) && gn();
    }), n = null;
    else {
      switch (Gd(r)) {
        case 1:
          n = cl;
          break;
        case 4:
          n = Wd;
          break;
        case 16:
          n = ho;
          break;
        case 536870912:
          n = Vd;
          break;
        default:
          n = ho;
      }
      n = gh(n, ch.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ch(e, t) {
  if (so = -1, oo = 0, Q & 6) throw Error(E(327));
  var n = e.callbackNode;
  if (dr() && e.callbackNode !== n) return null;
  var r = fo(e, e === je ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = To(e, r);
  else {
    t = r;
    var s = Q;
    Q |= 2;
    var o = dh();
    (je !== e || Pe !== t) && (At = null, br = ge() + 500, Pn(e, t));
    do
      try {
        Hg();
        break;
      } catch (l) {
        uh(e, l);
      }
    while (!0);
    kl(), Eo.current = o, Q = s, xe !== null ? t = 0 : (je = null, Pe = 0, t = ve);
  }
  if (t !== 0) {
    if (t === 2 && (s = ui(e), s !== 0 && (r = s, t = Oi(e, s))), t === 1) throw n = xs, Pn(e, 0), Qt(e, r), Ye(e, ge()), n;
    if (t === 6) Qt(e, r);
    else {
      if (s = e.current.alternate, !(r & 30) && !_g(s) && (t = To(e, r), t === 2 && (o = ui(e), o !== 0 && (r = o, t = Oi(e, o))), t === 1)) throw n = xs, Pn(e, 0), Qt(e, r), Ye(e, ge()), n;
      switch (e.finishedWork = s, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          kn(e, We, At);
          break;
        case 3:
          if (Qt(e, r), (r & 130023424) === r && (t = zl + 500 - ge(), 10 < t)) {
            if (fo(e, 0) !== 0) break;
            if (s = e.suspendedLanes, (s & r) !== r) {
              Fe(), e.pingedLanes |= e.suspendedLanes & s;
              break;
            }
            e.timeoutHandle = yi(kn.bind(null, e, We, At), t);
            break;
          }
          kn(e, We, At);
          break;
        case 4:
          if (Qt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var i = 31 - xt(r);
            o = 1 << i, i = t[i], i > s && (s = i), r &= ~o;
          }
          if (r = s, r = ge() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Og(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = yi(kn.bind(null, e, We, At), r);
            break;
          }
          kn(e, We, At);
          break;
        case 5:
          kn(e, We, At);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ye(e, ge()), e.callbackNode === n ? ch.bind(null, e) : null;
}
function Oi(e, t) {
  var n = Qr;
  return e.current.memoizedState.isDehydrated && (Pn(e, t).flags |= 256), e = To(e, t), e !== 2 && (t = We, We = n, t !== null && _i(t)), e;
}
function _i(e) {
  We === null ? We = e : We.push.apply(We, e);
}
function _g(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var s = n[r], o = s.getSnapshot;
        s = s.value;
        try {
          if (!wt(o(), s)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Qt(e, t) {
  for (t &= ~Rl, t &= ~Yo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - xt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function vu(e) {
  if (Q & 6) throw Error(E(327));
  dr();
  var t = fo(e, 0);
  if (!(t & 1)) return Ye(e, ge()), null;
  var n = To(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ui(e);
    r !== 0 && (t = r, n = Oi(e, r));
  }
  if (n === 1) throw n = xs, Pn(e, 0), Qt(e, t), Ye(e, ge()), n;
  if (n === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, kn(e, We, At), Ye(e, ge()), null;
}
function Ol(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    Q = n, Q === 0 && (br = ge() + 500, Vo && gn());
  }
}
function Dn(e) {
  Jt !== null && Jt.tag === 0 && !(Q & 6) && dr();
  var t = Q;
  Q |= 1;
  var n = lt.transition, r = X;
  try {
    if (lt.transition = null, X = 1, e) return e();
  } finally {
    X = r, lt.transition = n, Q = t, !(Q & 6) && gn();
  }
}
function _l() {
  Qe = nr.current, ie(nr);
}
function Pn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, mg(n)), xe !== null) for (n = xe.return; n !== null; ) {
    var r = n;
    switch (vl(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && vo();
        break;
      case 3:
        vr(), ie(Ge), ie(Le), Pl();
        break;
      case 5:
        $l(r);
        break;
      case 4:
        vr();
        break;
      case 13:
        ie(de);
        break;
      case 19:
        ie(de);
        break;
      case 10:
        Sl(r.type._context);
        break;
      case 22:
      case 23:
        _l();
    }
    n = n.return;
  }
  if (je = e, xe = e = ln(e.current, null), Pe = Qe = t, ve = 0, xs = null, Rl = Yo = Ln = 0, We = Qr = null, jn !== null) {
    for (t = 0; t < jn.length; t++) if (n = jn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var s = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = s, r.next = i;
      }
      n.pending = r;
    }
    jn = null;
  }
  return e;
}
function uh(e, t) {
  do {
    var n = xe;
    try {
      if (kl(), to.current = Po, $o) {
        for (var r = pe.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), r = r.next;
        }
        $o = !1;
      }
      if (Mn = 0, ke = ye = pe = null, Yr = !1, fs = 0, Dl.current = null, n === null || n.return === null) {
        ve = 1, xs = t, xe = null;
        break;
      }
      e: {
        var o = e, i = n.return, l = n, c = t;
        if (t = Pe, l.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var u = c, d = l, p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = d.alternate;
            h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var f = au(i);
          if (f !== null) {
            f.flags &= -257, iu(f, i, l, o, t), f.mode & 1 && ou(o, u, t), t = f, c = u;
            var g = t.updateQueue;
            if (g === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(c), t.updateQueue = w;
            } else g.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              ou(o, u, t), Fl();
              break e;
            }
            c = Error(E(426));
          }
        } else if (le && l.mode & 1) {
          var k = au(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), iu(k, i, l, o, t), wl(wr(c, l));
            break e;
          }
        }
        o = c = wr(c, l), ve !== 4 && (ve = 2), Qr === null ? Qr = [o] : Qr.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var m = Gp(o, c, t);
              Jc(o, m);
              break e;
            case 1:
              l = c;
              var x = o.type, v = o.stateNode;
              if (!(o.flags & 128) && (typeof x.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (on === null || !on.has(v)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var S = Kp(o, l, t);
                Jc(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      hh(n);
    } catch ($) {
      t = $, xe === n && n !== null && (xe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function dh() {
  var e = Eo.current;
  return Eo.current = Po, e === null ? Po : e;
}
function Fl() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4), je === null || !(Ln & 268435455) && !(Yo & 268435455) || Qt(je, Pe);
}
function To(e, t) {
  var n = Q;
  Q |= 2;
  var r = dh();
  (je !== e || Pe !== t) && (At = null, Pn(e, t));
  do
    try {
      Fg();
      break;
    } catch (s) {
      uh(e, s);
    }
  while (!0);
  if (kl(), Q = n, Eo.current = r, xe !== null) throw Error(E(261));
  return je = null, Pe = 0, ve;
}
function Fg() {
  for (; xe !== null; ) ph(xe);
}
function Hg() {
  for (; xe !== null && !pm(); ) ph(xe);
}
function ph(e) {
  var t = mh(e.alternate, e, Qe);
  e.memoizedProps = e.pendingProps, t === null ? hh(e) : xe = t, Dl.current = null;
}
function hh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Lg(n, t), n !== null) {
        n.flags &= 32767, xe = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ve = 6, xe = null;
        return;
      }
    } else if (n = Mg(n, t, Qe), n !== null) {
      xe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      xe = t;
      return;
    }
    xe = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function kn(e, t, n) {
  var r = X, s = lt.transition;
  try {
    lt.transition = null, X = 1, Ug(e, t, n, r);
  } finally {
    lt.transition = s, X = r;
  }
  return null;
}
function Ug(e, t, n, r) {
  do
    dr();
  while (Jt !== null);
  if (Q & 6) throw Error(E(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (km(e, o), e === je && (xe = je = null, Pe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ws || (Ws = !0, gh(ho, function() {
    return dr(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = lt.transition, lt.transition = null;
    var i = X;
    X = 1;
    var l = Q;
    Q |= 4, Dl.current = null, Rg(e, n), ih(n, e), lg(gi), mo = !!mi, gi = mi = null, e.current = n, zg(n), hm(), Q = l, X = i, lt.transition = o;
  } else e.current = n;
  if (Ws && (Ws = !1, Jt = e, Io = s), o = e.pendingLanes, o === 0 && (on = null), gm(n.stateNode), Ye(e, ge()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
  if (Ao) throw Ao = !1, e = Ri, Ri = null, e;
  return Io & 1 && e.tag !== 0 && dr(), o = e.pendingLanes, o & 1 ? e === zi ? Xr++ : (Xr = 0, zi = e) : Xr = 0, gn(), null;
}
function dr() {
  if (Jt !== null) {
    var e = Gd(Io), t = lt.transition, n = X;
    try {
      if (lt.transition = null, X = 16 > e ? 16 : e, Jt === null) var r = !1;
      else {
        if (e = Jt, Jt = null, Io = 0, Q & 6) throw Error(E(331));
        var s = Q;
        for (Q |= 4, z = e.current; z !== null; ) {
          var o = z, i = o.child;
          if (z.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var c = 0; c < l.length; c++) {
                var u = l[c];
                for (z = u; z !== null; ) {
                  var d = z;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zr(8, d, o);
                  }
                  var p = d.child;
                  if (p !== null) p.return = d, z = p;
                  else for (; z !== null; ) {
                    d = z;
                    var h = d.sibling, f = d.return;
                    if (sh(d), d === u) {
                      z = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = f, z = h;
                      break;
                    }
                    z = f;
                  }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var k = w.sibling;
                    w.sibling = null, w = k;
                  } while (w !== null);
                }
              }
              z = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, z = i;
          else e: for (; z !== null; ) {
            if (o = z, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Zr(9, o, o.return);
            }
            var m = o.sibling;
            if (m !== null) {
              m.return = o.return, z = m;
              break e;
            }
            z = o.return;
          }
        }
        var x = e.current;
        for (z = x; z !== null; ) {
          i = z;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) v.return = i, z = v;
          else e: for (i = x; z !== null; ) {
            if (l = z, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Ko(9, l);
              }
            } catch ($) {
              fe(l, l.return, $);
            }
            if (l === i) {
              z = null;
              break e;
            }
            var S = l.sibling;
            if (S !== null) {
              S.return = l.return, z = S;
              break e;
            }
            z = l.return;
          }
        }
        if (Q = s, gn(), Nt && typeof Nt.onPostCommitFiberRoot == "function") try {
          Nt.onPostCommitFiberRoot(Fo, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      X = n, lt.transition = t;
    }
  }
  return !1;
}
function wu(e, t, n) {
  t = wr(n, t), t = Gp(e, t, 1), e = sn(e, t, 1), t = Fe(), e !== null && (Ss(e, 1, t), Ye(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) wu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      wu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (on === null || !on.has(r))) {
        e = wr(n, e), e = Kp(t, e, 1), t = sn(t, e, 1), e = Fe(), t !== null && (Ss(t, 1, e), Ye(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Bg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Fe(), e.pingedLanes |= e.suspendedLanes & n, je === e && (Pe & n) === n && (ve === 4 || ve === 3 && (Pe & 130023424) === Pe && 500 > ge() - zl ? Pn(e, 0) : Rl |= n), Ye(e, t);
}
function fh(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ls, Ls <<= 1, !(Ls & 130023424) && (Ls = 4194304)) : t = 1);
  var n = Fe();
  e = _t(e, t), e !== null && (Ss(e, t, n), Ye(e, n));
}
function Wg(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), fh(e, n);
}
function Vg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), fh(e, n);
}
var mh;
mh = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ge.current) Ve = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ve = !1, Tg(e, t, n);
    Ve = !!(e.flags & 131072);
  }
  else Ve = !1, le && t.flags & 1048576 && vp(t, ko, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ro(e, t), e = t.pendingProps;
      var s = gr(t, Le.current);
      ur(t, n), s = Al(null, t, r, e, s, n);
      var o = Il();
      return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ke(r) ? (o = !0, wo(t)) : o = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, Nl(t), s.updater = Go, t.stateNode = s, s._reactInternals = t, Ni(t, r, e, n), t = Pi(null, t, r, !0, o, n)) : (t.tag = 0, le && o && yl(t), Oe(null, t, s, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ro(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Gg(r), e = ht(r, e), s) {
          case 0:
            t = $i(null, t, r, e, n);
            break e;
          case 1:
            t = uu(null, t, r, e, n);
            break e;
          case 11:
            t = lu(null, t, r, e, n);
            break e;
          case 14:
            t = cu(null, t, r, ht(r.type, e), n);
            break e;
        }
        throw Error(E(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : ht(r, s), $i(e, t, r, s, n);
    case 1:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : ht(r, s), uu(e, t, r, s, n);
    case 3:
      e: {
        if (Xp(t), e === null) throw Error(E(387));
        r = t.pendingProps, o = t.memoizedState, s = o.element, Np(e, t), No(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          s = wr(Error(E(423)), t), t = du(e, t, r, n, s);
          break e;
        } else if (r !== s) {
          s = wr(Error(E(424)), t), t = du(e, t, r, n, s);
          break e;
        } else for (Xe = rn(t.stateNode.containerInfo.firstChild), et = t, le = !0, mt = null, n = Sp(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (xr(), r === s) {
            t = Ft(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Cp(t), e === null && ki(t), r = t.type, s = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = s.children, xi(r, s) ? i = null : o !== null && xi(r, o) && (t.flags |= 32), Qp(e, t), Oe(e, t, i, n), t.child;
    case 6:
      return e === null && ki(t), null;
    case 13:
      return Jp(e, t, n);
    case 4:
      return Cl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = yr(t, null, r, n) : Oe(e, t, r, n), t.child;
    case 11:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : ht(r, s), lu(e, t, r, s, n);
    case 7:
      return Oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, s = t.pendingProps, o = t.memoizedProps, i = s.value, re(So, r._currentValue), r._currentValue = i, o !== null) if (wt(o.value, i)) {
          if (o.children === s.children && !Ge.current) {
            t = Ft(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var l = o.dependencies;
          if (l !== null) {
            i = o.child;
            for (var c = l.firstContext; c !== null; ) {
              if (c.context === r) {
                if (o.tag === 1) {
                  c = Dt(-1, n & -n), c.tag = 2;
                  var u = o.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var d = u.pending;
                    d === null ? c.next = c : (c.next = d.next, d.next = c), u.pending = c;
                  }
                }
                o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Si(
                  o.return,
                  n,
                  t
                ), l.lanes |= n;
                break;
              }
              c = c.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(E(341));
            i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Si(i, n, t), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        Oe(e, t, s.children, n), t = t.child;
      }
      return t;
    case 9:
      return s = t.type, r = t.pendingProps.children, ur(t, n), s = ct(s), r = r(s), t.flags |= 1, Oe(e, t, r, n), t.child;
    case 14:
      return r = t.type, s = ht(r, t.pendingProps), s = ht(r.type, s), cu(e, t, r, s, n);
    case 15:
      return Yp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : ht(r, s), ro(e, t), t.tag = 1, Ke(r) ? (e = !0, wo(t)) : e = !1, ur(t, n), qp(t, r, s), Ni(t, r, s, n), Pi(null, t, r, !0, e, n);
    case 19:
      return eh(e, t, n);
    case 22:
      return Zp(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function gh(e, t) {
  return Bd(e, t);
}
function qg(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function it(e, t, n, r) {
  return new qg(e, t, n, r);
}
function Hl(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Gg(e) {
  if (typeof e == "function") return Hl(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === al) return 11;
    if (e === il) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return n === null ? (n = it(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ao(e, t, n, r, s, o) {
  var i = 2;
  if (r = e, typeof e == "function") Hl(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case qn:
      return En(n.children, s, o, t);
    case ol:
      i = 8, s |= 8;
      break;
    case Ya:
      return e = it(12, n, t, s | 2), e.elementType = Ya, e.lanes = o, e;
    case Za:
      return e = it(13, n, t, s), e.elementType = Za, e.lanes = o, e;
    case Qa:
      return e = it(19, n, t, s), e.elementType = Qa, e.lanes = o, e;
    case Cd:
      return Zo(n, s, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case jd:
          i = 10;
          break e;
        case Nd:
          i = 9;
          break e;
        case al:
          i = 11;
          break e;
        case il:
          i = 14;
          break e;
        case Kt:
          i = 16, r = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = it(i, n, t, s), t.elementType = e, t.type = r, t.lanes = o, t;
}
function En(e, t, n, r) {
  return e = it(7, e, r, t), e.lanes = n, e;
}
function Zo(e, t, n, r) {
  return e = it(22, e, r, t), e.elementType = Cd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function za(e, t, n) {
  return e = it(6, e, null, t), e.lanes = n, e;
}
function Oa(e, t, n) {
  return t = it(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Kg(e, t, n, r, s) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ya(0), this.expirationTimes = ya(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ya(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
}
function Ul(e, t, n, r, s, o, i, l, c) {
  return e = new Kg(e, t, n, l, c), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = it(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Nl(o), e;
}
function Yg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function xh(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (On(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ke(n)) return xp(e, n, t);
  }
  return t;
}
function yh(e, t, n, r, s, o, i, l, c) {
  return e = Ul(n, r, !0, e, s, o, i, l, c), e.context = xh(null), n = e.current, r = Fe(), s = an(n), o = Dt(r, s), o.callback = t ?? null, sn(n, o, s), e.current.lanes = s, Ss(e, s, r), Ye(e, r), e;
}
function Qo(e, t, n, r) {
  var s = t.current, o = Fe(), i = an(s);
  return n = xh(n), t.context === null ? t.context = n : t.pendingContext = n, t = Dt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = sn(s, t, i), e !== null && (yt(e, s, i, o), eo(e, s, i)), i;
}
function Mo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Bl(e, t) {
  bu(e, t), (e = e.alternate) && bu(e, t);
}
function Zg() {
  return null;
}
var vh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Wl(e) {
  this._internalRoot = e;
}
Xo.prototype.render = Wl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Qo(e, t, null, null);
};
Xo.prototype.unmount = Wl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Dn(function() {
      Qo(null, e, null, null);
    }), t[Ot] = null;
  }
};
function Xo(e) {
  this._internalRoot = e;
}
Xo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Zd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Zt.length && t !== 0 && t < Zt[n].priority; n++) ;
    Zt.splice(n, 0, e), n === 0 && Xd(e);
  }
};
function Vl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Jo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ku() {
}
function Qg(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = Mo(i);
        o.call(u);
      };
    }
    var i = yh(t, r, e, 0, null, !1, !1, "", ku);
    return e._reactRootContainer = i, e[Ot] = i.current, cs(e.nodeType === 8 ? e.parentNode : e), Dn(), i;
  }
  for (; s = e.lastChild; ) e.removeChild(s);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = Mo(c);
      l.call(u);
    };
  }
  var c = Ul(e, 0, !1, null, null, !1, !1, "", ku);
  return e._reactRootContainer = c, e[Ot] = c.current, cs(e.nodeType === 8 ? e.parentNode : e), Dn(function() {
    Qo(t, c, n, r);
  }), c;
}
function ea(e, t, n, r, s) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof s == "function") {
      var l = s;
      s = function() {
        var c = Mo(i);
        l.call(c);
      };
    }
    Qo(t, i, e, s);
  } else i = Qg(n, t, e, s, r);
  return Mo(i);
}
Kd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ur(t.pendingLanes);
        n !== 0 && (ul(t, n | 1), Ye(t, ge()), !(Q & 6) && (br = ge() + 500, gn()));
      }
      break;
    case 13:
      Dn(function() {
        var r = _t(e, 1);
        if (r !== null) {
          var s = Fe();
          yt(r, e, 1, s);
        }
      }), Bl(e, 1);
  }
};
dl = function(e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Fe();
      yt(t, e, 134217728, n);
    }
    Bl(e, 134217728);
  }
};
Yd = function(e) {
  if (e.tag === 13) {
    var t = an(e), n = _t(e, t);
    if (n !== null) {
      var r = Fe();
      yt(n, e, t, r);
    }
    Bl(e, t);
  }
};
Zd = function() {
  return X;
};
Qd = function(e, t) {
  var n = X;
  try {
    return X = e, t();
  } finally {
    X = n;
  }
};
ii = function(e, t, n) {
  switch (t) {
    case "input":
      if (ei(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Wo(r);
            if (!s) throw Error(E(90));
            Pd(r), ei(r, s);
          }
        }
      }
      break;
    case "textarea":
      Ad(e, n);
      break;
    case "select":
      t = n.value, t != null && ar(e, !!n.multiple, t, !1);
  }
};
zd = Ol;
Od = Dn;
var Xg = { usingClientEntryPoint: !1, Events: [Ns, Zn, Wo, Dd, Rd, Ol] }, zr = { findFiberByHostInstance: Sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Jg = { bundleType: zr.bundleType, version: zr.version, rendererPackageName: zr.rendererPackageName, rendererConfig: zr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Hd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: zr.findFiberByHostInstance || Zg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Vs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vs.isDisabled && Vs.supportsFiber) try {
    Fo = Vs.inject(Jg), Nt = Vs;
  } catch {
  }
}
nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xg;
nt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vl(t)) throw Error(E(200));
  return Yg(e, t, null, n);
};
nt.createRoot = function(e, t) {
  if (!Vl(e)) throw Error(E(299));
  var n = !1, r = "", s = vh;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Ul(e, 1, !1, null, null, n, !1, r, s), e[Ot] = t.current, cs(e.nodeType === 8 ? e.parentNode : e), new Wl(t);
};
nt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = Hd(t), e = e === null ? null : e.stateNode, e;
};
nt.flushSync = function(e) {
  return Dn(e);
};
nt.hydrate = function(e, t, n) {
  if (!Jo(t)) throw Error(E(200));
  return ea(null, e, t, !0, n);
};
nt.hydrateRoot = function(e, t, n) {
  if (!Vl(e)) throw Error(E(405));
  var r = n != null && n.hydratedSources || null, s = !1, o = "", i = vh;
  if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = yh(t, null, e, 1, n ?? null, s, !1, o, i), e[Ot] = t.current, cs(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
    n,
    s
  );
  return new Xo(t);
};
nt.render = function(e, t, n) {
  if (!Jo(t)) throw Error(E(200));
  return ea(null, e, t, !1, n);
};
nt.unmountComponentAtNode = function(e) {
  if (!Jo(e)) throw Error(E(40));
  return e._reactRootContainer ? (Dn(function() {
    ea(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ot] = null;
    });
  }), !0) : !1;
};
nt.unstable_batchedUpdates = Ol;
nt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Jo(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return ea(e, t, n, !1, r);
};
nt.version = "18.3.1-next-f1338f8080-20240426";
function wh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wh);
    } catch (e) {
      console.error(e);
    }
}
wh(), wd.exports = nt;
var e1 = wd.exports, bh, Su = e1;
bh = Su.createRoot, Su.hydrateRoot;
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), kh = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var n1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r1 = C.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: o,
    iconNode: i,
    ...l
  }, c) => C.createElement(
    "svg",
    {
      ref: c,
      ...n1,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: kh("lucide", s),
      ...l
    },
    [
      ...i.map(([u, d]) => C.createElement(u, d)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I = (e, t) => {
  const n = C.forwardRef(
    ({ className: r, ...s }, o) => C.createElement(r1, {
      ref: o,
      iconNode: t,
      className: kh(`lucide-${t1(e)}`, r),
      ...s
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s1 = I("Antenna", [
  ["path", { d: "M2 12 7 2", key: "117k30" }],
  ["path", { d: "m7 12 5-10", key: "1tvx22" }],
  ["path", { d: "m12 12 5-10", key: "ev1o1a" }],
  ["path", { d: "m17 12 5-10", key: "1e4ti3" }],
  ["path", { d: "M4.5 7h15", key: "vlsxkz" }],
  ["path", { d: "M12 16v6", key: "c8a4gj" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sh = I("ArrowDownToLine", [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jh = I("ArrowUpFromLine", [
  ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nh = I("BookMarked", [
  ["path", { d: "M10 2v8l3-3 3 3V2", key: "sqw3rj" }],
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lo = I("BoxSelect", [
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }],
  ["path", { d: "M21 9v1", key: "mxsmne" }],
  ["path", { d: "M3 14v1", key: "vnatye" }],
  ["path", { d: "M21 14v1", key: "169vum" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ch = I("Box", [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o1 = I("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a1 = I("Cable", [
  [
    "path",
    {
      d: "M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",
      key: "10bnsj"
    }
  ],
  ["path", { d: "M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9", key: "1eqmu1" }],
  ["path", { d: "M21 21v-2h-4", key: "14zm7j" }],
  ["path", { d: "M3 5h4V3", key: "z442eg" }],
  [
    "path",
    { d: "M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3", key: "ebdjd7" }
  ]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $h = I("Calculator", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i1 = I("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ph = I("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eh = I("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l1 = I("ChevronsDown", [
  ["path", { d: "m7 6 5 5 5-5", key: "1lc07p" }],
  ["path", { d: "m7 13 5 5 5-5", key: "1d48rs" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c1 = I("ChevronsUp", [
  ["path", { d: "m17 11-5-5-5 5", key: "e8nh98" }],
  ["path", { d: "m17 18-5-5-5 5", key: "2avn1x" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _n = I("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = I("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ah = I("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ih = I("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u1 = I("Cloud", [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ql = I("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ta = I("Crosshair", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }],
  ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }],
  ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d1 = I("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gl = I("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p1 = I("Earth", [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  [
    "path",
    {
      d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
      key: "1tzkfa"
    }
  ],
  ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "14pb5j" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h1 = I("Eraser", [
  [
    "path",
    {
      d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      key: "182aya"
    }
  ],
  ["path", { d: "M22 21H7", key: "t4ddhn" }],
  ["path", { d: "m5 11 9 9", key: "1mo9qw" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Th = I("FastForward", [
  ["polygon", { points: "13 19 22 12 13 5 13 19", key: "587y9g" }],
  ["polygon", { points: "2 19 11 12 2 5 2 19", key: "3pweh0" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mh = I("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f1 = I("FolderTree", [
  [
    "path",
    {
      d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
      key: "hod4my"
    }
  ],
  [
    "path",
    {
      d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
      key: "w4yl2u"
    }
  ],
  ["path", { d: "M3 5a2 2 0 0 0 2 2h3", key: "f2jnh7" }],
  ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3", key: "k8epm1" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = I("GitFork", [
  ["circle", { cx: "12", cy: "18", r: "3", key: "1mpf1b" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9", key: "1uq4wg" }],
  ["path", { d: "M12 12v3", key: "158kv8" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g1 = I("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lh = I("GraduationCap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x1 = I("HardDrive", [
  ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ],
  ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
  ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y1 = I("HeartPulse", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dh = I("IdCard", [
  ["path", { d: "M16 10h2", key: "8sgtl7" }],
  ["path", { d: "M16 14h2", key: "epxaof" }],
  ["path", { d: "M6.17 15a3 3 0 0 1 5.66 0", key: "n6f512" }],
  ["circle", { cx: "9", cy: "11", r: "2", key: "yxgjnd" }],
  ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2", key: "qneu4z" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v1 = I("KeyRound", [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rh = I("KeySquare", [
  [
    "path",
    {
      d: "M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z",
      key: "165ttr"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  [
    "path",
    {
      d: "m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814",
      key: "1ubxi2"
    }
  ]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w1 = I("Laptop", [
  [
    "path",
    {
      d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
      key: "tarvll"
    }
  ]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = I("Layers", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw"
    }
  ],
  ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" }],
  ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const na = I("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zh = I("ListOrdered", [
  ["line", { x1: "10", x2: "21", y1: "6", y2: "6", key: "76qw6h" }],
  ["line", { x1: "10", x2: "21", y1: "12", y2: "12", key: "16nom4" }],
  ["line", { x1: "10", x2: "21", y1: "18", y2: "18", key: "u3jurt" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kl = I("LockOpen", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pn = I("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yl = I("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zl = I("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oh = I("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _h = I("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k1 = I("Monitor", [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ql = I("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S1 = I("MousePointer2", [
  [
    "path",
    {
      d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
      key: "edeuup"
    }
  ]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wn = I("Network", [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fh = I("Package", [
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j1 = I("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hh = I("PanelRightClose", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["path", { d: "m8 9 3 3-3 3", key: "12hl5m" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N1 = I("PanelRight", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C1 = I("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xl = I("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pr = I("PhoneCall", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ],
  ["path", { d: "M14.05 2a9 9 0 0 1 8 7.94", key: "vmijpz" }],
  ["path", { d: "M14.05 6A5 5 0 0 1 18 10", key: "13nbpp" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uh = I("PhoneOff", [
  [
    "path",
    {
      d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",
      key: "z86iuo"
    }
  ],
  ["line", { x1: "22", x2: "2", y1: "2", y2: "22", key: "11kh81" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $1 = I("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ra = I("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P1 = I("Radio", [
  ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }],
  ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }],
  ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E1 = I("Redo2", [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13", key: "6uklza" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jl = I("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A1 = I("Router", [
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6.01 18H6", key: "19vcac" }],
  ["path", { d: "M10.01 18H10", key: "uamcmx" }],
  ["path", { d: "M15 10v4", key: "qjz1xs" }],
  ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0", key: "1rif40" }],
  ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0", key: "6a5xfq" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I1 = I("Save", [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fi = I("ScanSearch", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "m16 16-1.9-1.9", key: "1dq9hf" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T1 = I("Server", [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sa = I("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M1 = I("Share2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = I("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bh = I("Skull", [
  ["path", { d: "m12.5 17-.5-1-.5 1h1z", key: "3me087" }],
  [
    "path",
    {
      d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",
      key: "1o5pge"
    }
  ],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = I("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = I("SquareTerminal", [
  ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
  ["path", { d: "M11 13h4", key: "1p7l4v" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = I("StepForward", [
  ["line", { x1: "6", x2: "6", y1: "4", y2: "20", key: "fy8qot" }],
  ["polygon", { points: "10,4 20,12 10,20", key: "1mc1pf" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = I("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _e = I("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L1 = I("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D1 = I("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R1 = I("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = I("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z1 = I("UsersRound", [
  ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O1 = I("Waves", [
  [
    "path",
    {
      d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "knzxuh"
    }
  ],
  [
    "path",
    {
      d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "2jd2cc"
    }
  ],
  [
    "path",
    {
      d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "rd2r6e"
    }
  ]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wh = I("WifiOff", [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
  ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
  ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vh = I("Wifi", [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qh = I("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oa = I("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), _1 = {
  Router: A1,
  Network: Wn,
  Layers: b1,
  ShieldCheck: ys,
  Monitor: k1,
  Globe: g1,
  BookMarked: Nh,
  ListOrdered: zh,
  FolderTree: f1,
  Radio: P1,
  Camera: i1,
  Wifi: Vh,
  WifiOff: Wh,
  Laptop: w1,
  Skull: Bh,
  KeyRound: v1,
  Waves: O1,
  GitFork: m1,
  Database: d1,
  Zap: oa,
  Antenna: s1,
  ScanSearch: Fi,
  Copy: ql,
  Box: Ch,
  TerminalSquare: tc,
  Download: Gl,
  Settings: sa,
  Sun: rc,
  Moon: Ql,
  Trash2: _e,
  Sparkles: ec,
  PanelRightClose: Hh,
  CheckCircle2: Pr,
  Circle: Ah,
  AlertCircle: _n,
  Lightbulb: na,
  ChevronRight: Eh,
  ChevronDown: Ph,
  Filter: Mh,
  Lock: pn,
  LockOpen: Kl,
  Crosshair: ta,
  StepForward: nc,
  FastForward: Th,
  Mail: Yl,
  ArrowDownToLine: Sh,
  ArrowUpFromLine: jh,
  Clock: Ih,
  Plus: ra,
  Minus: _h,
  Maximize2: Zl,
  BoxSelect: Lo,
  Building2: o1,
  Pencil: Xl,
  Trash: L1,
  Cloud: u1,
  Calculator: $h,
  Globe2: p1,
  RefreshCw: Jl,
  PhoneCall: pr,
  UserRound: sc,
  UsersRound: z1,
  MessageSquare: Oh,
  GraduationCap: Lh,
  PhoneOff: Uh,
  Server: T1,
  HardDrive: x1,
  Package: Fh,
  IdCard: Dh,
  KeySquare: Rh,
  Share2: M1
};
function $s(e) {
  return _1[e] || Ch;
}
function O({ variant: e = "ghost", size: t = "md", className: n = "", ...r }) {
  const s = "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed", o = { sm: "px-2.5 py-1.5 text-xs", md: "px-3 py-2 text-[13px]", lg: "px-4 py-2.5 text-sm w-full" }, i = {
    primary: "bg-accent text-white hover:brightness-110",
    danger: "bg-down text-white hover:brightness-110",
    ghost: "text-soft hover:text-ink hover:bg-panel2",
    outline: "border border-line text-ink hover:border-accent hover:text-accent",
    active: "bg-accent text-white"
  };
  return /* @__PURE__ */ a.jsx("button", { className: `${s} ${o[t]} ${i[e]} ${n}`, ...r });
}
function hn({ title: e, subtitle: t, icon: n, onClose: r, children: s, footer: o, width: i = "max-w-2xl" }) {
  const l = C.useRef(null);
  return C.useEffect(() => {
    var c;
    (c = l.current) == null || c.focus();
  }, []), /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 grid place-items-center bg-black/55 p-4 backdrop-blur-sm",
      onMouseDown: (c) => {
        c.target === c.currentTarget && r();
      },
      children: /* @__PURE__ */ a.jsxs(
        "div",
        {
          ref: l,
          tabIndex: -1,
          role: "dialog",
          "aria-modal": "true",
          "aria-label": e,
          className: `flex max-h-[86vh] w-full ${i} flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl outline-none`,
          children: [
            /* @__PURE__ */ a.jsxs("header", { className: "flex items-center gap-3 border-b border-line px-4 py-3", children: [
              n,
              /* @__PURE__ */ a.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ a.jsx("h2", { className: "truncate text-[15px] font-bold leading-tight", children: e }),
                t && /* @__PURE__ */ a.jsx("p", { className: "truncate text-[11px] text-soft", children: t })
              ] }),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  onClick: r,
                  "aria-label": "Close",
                  className: "ml-auto grid h-8 w-8 place-items-center rounded-lg bg-panel2 text-soft hover:text-ink",
                  children: /* @__PURE__ */ a.jsx(qh, { size: 16 })
                }
              )
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "min-h-0 flex-1 overflow-y-auto p-4", children: s }),
            o && /* @__PURE__ */ a.jsx("footer", { className: "border-t border-line px-4 py-3", children: o })
          ]
        }
      )
    }
  );
}
function W({ label: e, hint: t, children: n }) {
  return /* @__PURE__ */ a.jsxs("label", { className: "mb-3 block", children: [
    /* @__PURE__ */ a.jsx("span", { className: "mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-soft", children: e }),
    n,
    t && /* @__PURE__ */ a.jsx("span", { className: "mt-1 block text-[11px] leading-snug text-soft", children: t })
  ] });
}
const F = "w-full rounded-lg border border-line bg-panel2 px-2.5 py-2 font-mono text-[13px] text-ink outline-none focus:border-accent";
function ue({ checked: e, onChange: t, label: n, hint: r, id: s }) {
  return /* @__PURE__ */ a.jsxs("div", { className: "mb-2 flex items-center justify-between gap-3 rounded-lg border border-line px-3 py-2.5", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ a.jsx("div", { className: "text-[13px] font-medium", children: n }),
      r && /* @__PURE__ */ a.jsx("div", { className: "text-[11px] leading-snug text-soft", children: r })
    ] }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        id: s,
        role: "switch",
        "aria-checked": e,
        "aria-label": n,
        onClick: () => t(!e),
        className: `relative h-[22px] w-10 shrink-0 rounded-full transition-colors ${e ? "bg-up" : "bg-line"}`,
        children: /* @__PURE__ */ a.jsx(
          "span",
          {
            className: `absolute top-0.5 h-[18px] w-[18px] rounded-full bg-white transition-all ${e ? "left-[20px]" : "left-0.5"}`
          }
        )
      }
    )
  ] });
}
function Z({ children: e, tone: t = "neutral", className: n = "" }) {
  const r = {
    neutral: "bg-panel2 text-soft border-line",
    up: "bg-up/15 text-up border-up/40",
    down: "bg-down/15 text-down border-down/40",
    warn: "bg-warn/15 text-warn border-warn/40",
    accent: "bg-accent/15 text-accent border-accent/40"
  };
  return /* @__PURE__ */ a.jsx(
    "span",
    {
      className: `inline-flex items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-[10.5px] font-semibold ${r[t]} ${n}`,
      children: e
    }
  );
}
function V({ children: e, className: t = "" }) {
  return /* @__PURE__ */ a.jsx("h3", { className: `mb-2 text-[10px] font-bold uppercase tracking-wider text-soft ${t}`, children: e });
}
const F1 = {}, ju = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, p) => {
    const h = typeof d == "function" ? d(t) : d;
    if (!Object.is(h, t)) {
      const f = t;
      t = p ?? (typeof h != "object" || h === null) ? h : Object.assign({}, t, h), n.forEach((g) => g(t, f));
    }
  }, s = () => t, c = { setState: r, getState: s, getInitialState: () => u, subscribe: (d) => (n.add(d), () => n.delete(d)), destroy: () => {
    (F1 ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, u = t = e(r, s, c);
  return c;
}, H1 = (e) => e ? ju(e) : ju;
var Gh = { exports: {} }, Kh = {}, Yh = { exports: {} }, Zh = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr = C;
function U1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var B1 = typeof Object.is == "function" ? Object.is : U1, W1 = kr.useState, V1 = kr.useEffect, q1 = kr.useLayoutEffect, G1 = kr.useDebugValue;
function K1(e, t) {
  var n = t(), r = W1({ inst: { value: n, getSnapshot: t } }), s = r[0].inst, o = r[1];
  return q1(function() {
    s.value = n, s.getSnapshot = t, _a(s) && o({ inst: s });
  }, [e, n, t]), V1(function() {
    return _a(s) && o({ inst: s }), e(function() {
      _a(s) && o({ inst: s });
    });
  }, [e]), G1(n), n;
}
function _a(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !B1(e, n);
  } catch {
    return !0;
  }
}
function Y1(e, t) {
  return t();
}
var Z1 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Y1 : K1;
Zh.useSyncExternalStore = kr.useSyncExternalStore !== void 0 ? kr.useSyncExternalStore : Z1;
Yh.exports = Zh;
var Q1 = Yh.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = C, X1 = Q1;
function J1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var e0 = typeof Object.is == "function" ? Object.is : J1, t0 = X1.useSyncExternalStore, n0 = aa.useRef, r0 = aa.useEffect, s0 = aa.useMemo, o0 = aa.useDebugValue;
Kh.useSyncExternalStoreWithSelector = function(e, t, n, r, s) {
  var o = n0(null);
  if (o.current === null) {
    var i = { hasValue: !1, value: null };
    o.current = i;
  } else i = o.current;
  o = s0(function() {
    function c(f) {
      if (!u) {
        if (u = !0, d = f, f = r(f), s !== void 0 && i.hasValue) {
          var g = i.value;
          if (s(g, f)) return p = g;
        }
        return p = f;
      }
      if (g = p, e0(d, f)) return g;
      var w = r(f);
      return s !== void 0 && s(g, w) ? g : (d = f, p = w);
    }
    var u = !1, d, p, h = n === void 0 ? null : n;
    return [function() {
      return c(t());
    }, h === null ? void 0 : function() {
      return c(h());
    }];
  }, [t, n, r, s]);
  var l = t0(e, o[0], o[1]);
  return r0(function() {
    i.hasValue = !0, i.value = l;
  }, [l]), o0(l), l;
};
Gh.exports = Kh;
var a0 = Gh.exports;
const i0 = /* @__PURE__ */ ld(a0), Qh = {}, { useDebugValue: l0 } = es, { useSyncExternalStoreWithSelector: c0 } = i0;
let Nu = !1;
const u0 = (e) => e;
function d0(e, t = u0, n) {
  (Qh ? "production" : void 0) !== "production" && n && !Nu && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Nu = !0);
  const r = c0(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return l0(r), r;
}
const Cu = (e) => {
  (Qh ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? H1(e) : e, n = (r, s) => d0(t, r, s);
  return Object.assign(n, t), n;
}, p0 = (e) => e ? Cu(e) : Cu, Fn = {
  ethernet: {
    id: "ethernet",
    label: "Ethernet (RJ45)",
    short: "RJ45",
    color: "#22c55e",
    cables: ["straight", "crossover"]
  },
  fiber: {
    id: "fiber",
    label: "Fiber (SFP)",
    short: "SFP",
    color: "#eab308",
    cables: ["fiber"]
  },
  serial: {
    id: "serial",
    label: "Serial (WAN)",
    short: "SER",
    color: "#a855f7",
    cables: ["serial"]
  },
  usb: {
    id: "usb",
    label: "USB",
    short: "USB",
    color: "#38bdf8",
    cables: ["usb"]
  },
  console: {
    id: "console",
    label: "Console (management)",
    short: "CON",
    color: "#94a3b8",
    cables: ["console"]
  },
  wifi: {
    id: "wifi",
    label: "802.11 radio",
    short: "WLAN",
    color: "#60a5fa",
    cables: []
    // nothing plugs into a radio
  }
}, h0 = (e) => e === "wifi", f0 = (e) => {
  var t, n;
  return ((n = (t = Fn[e]) == null ? void 0 : t.cables) == null ? void 0 : n[0]) || null;
}, Se = {
  straight: {
    id: "straight",
    label: "Copper Straight-Through",
    short: "UTP-S",
    color: "#22c55e",
    dash: null,
    media: ["ethernet"],
    hint: "Use between unlike devices — PC to switch, switch to router."
  },
  crossover: {
    id: "crossover",
    label: "Copper Crossover",
    short: "UTP-X",
    color: "#3b82f6",
    dash: "1 0",
    media: ["ethernet"],
    hint: "Use between like devices — switch to switch, PC to PC, router to router."
  },
  fiber: {
    id: "fiber",
    label: "Fiber Optic",
    short: "FIB",
    color: "#eab308",
    dash: null,
    media: ["fiber"],
    hint: "Only seats in an SFP/optical port — uplinks between infrastructure gear."
  },
  serial: {
    id: "serial",
    label: "Serial (WAN)",
    short: "SER",
    color: "#a855f7",
    dash: "7 4",
    media: ["serial"],
    hint: "Router-to-router WAN links, into a serial interface."
  },
  usb: {
    id: "usb",
    label: "USB",
    short: "USB",
    color: "#38bdf8",
    dash: "2 3",
    media: ["usb"],
    hint: "Host-to-peripheral, or USB console on newer gear."
  },
  console: {
    id: "console",
    label: "Console (rollover)",
    short: "CON",
    color: "#94a3b8",
    dash: "1 4",
    media: ["console"],
    hint: "Out-of-band management: a PC into a device console port."
  }
};
function $u(e, t) {
  const n = (r) => r.role === "router" || r.role === "firewall" ? "l3" : r.role === "switch" || r.role === "l3switch" ? "l2" : "host";
  return n(e) === n(t);
}
function Hi(e, t) {
  const n = Se[e];
  return !n || !t ? !1 : n.media.includes(t.media);
}
function m0(e, t, n, r = null, s = null) {
  var i;
  const o = Se[e];
  if (!o) return { ok: !1, reason: "Unknown cable type.", fatal: !0 };
  if (!t || !n) return { ok: !1, reason: "Both ends must be devices.", fatal: !0 };
  if (t.id === n.id) return { ok: !1, reason: "Cannot cable a device to itself.", fatal: !0 };
  if (!r && !s) {
    for (const l of [t, n])
      if (!(l.interfaces || []).some((u) => Hi(e, u)))
        return {
          ok: !1,
          fatal: !0,
          reason: `${l.hostname || "device"} has no ${o.short} port — ${o.hint}`
        };
  }
  if (r || s)
    for (const [l, c] of [[t, r], [n, s]]) {
      if (!c) return { ok: !1, reason: "Choose a port at each end.", fatal: !0 };
      if (h0(c.media))
        return { ok: !1, reason: `${c.name} is a radio — nothing plugs into it.`, fatal: !0 };
      if (!Hi(e, c))
        return {
          ok: !1,
          fatal: !0,
          reason: `${o.label} does not fit ${l.hostname} ${c.name} (${((i = Fn[c.media]) == null ? void 0 : i.label) || c.media}).`
        };
      if (c.link)
        return { ok: !1, reason: `${l.hostname} ${c.name} already has a cable.`, fatal: !0 };
    }
  return e === "straight" && $u(t, n) ? { ok: !1, reason: Se.crossover.hint } : e === "crossover" && !$u(t, n) ? { ok: !1, reason: Se.straight.hint } : { ok: !0, reason: "" };
}
const Ht = {
  // ---- Network devices -------------------------------------------------
  router: {
    id: "router",
    label: "Router",
    role: "router",
    os: "ios",
    group: "Network Devices",
    icon: "Router",
    // Cisco ISR 4331: three onboard GE, the third an SFP cage, plus a
    // two-port serial NIM in slot 1. The naming is the real thing —
    // slot/subslot/port — which is what a student will meet in a lab rack.
    chassis: { rows: 2, label: "Cisco ISR 4331" },
    ports: [
      { prefix: "Gi0/0/", count: 2, media: "ethernet", zeroBased: !0, speed: "1 Gbps" },
      { name: "Gi0/0/2", media: "fiber", speed: "1 Gbps", uplink: !0 },
      { prefix: "Se0/1/", count: 2, media: "serial", zeroBased: !0, speed: "1.544 Mbps" },
      { name: "Con0", media: "console" }
    ],
    // A router is the usual source of addresses on a small network, so its
    // pool is on by default. Turn it off per device under Services.
    services: { dhcp: !0, snmp: !0 }
  },
  switch: {
    id: "switch",
    label: "Layer 2 Switch",
    role: "switch",
    os: "ios",
    group: "Network Devices",
    icon: "Network",
    // Catalyst 2960-24TC-L: 24 FastEthernet access ports and two
    // dual-purpose gigabit uplinks, modelled with SFPs fitted. This is the
    // switch a CCNA student actually sits in front of.
    chassis: { rows: 2, label: "Cisco Catalyst 2960-24TC-L" },
    ports: [
      { prefix: "Fa0/", count: 24, media: "ethernet", speed: "100 Mbps" },
      { prefix: "Gi0/", count: 2, media: "fiber", speed: "1 Gbps", uplink: !0 },
      { name: "Con0", media: "console" }
    ],
    services: {},
    vlanCapable: !0
  },
  l3switch: {
    id: "l3switch",
    label: "Layer 3 Switch",
    role: "l3switch",
    os: "ios",
    group: "Network Devices",
    icon: "Layers",
    // Catalyst 3650-24PS: 24 gigabit access ports in stack member 1, four
    // ten-gig uplinks in the network module.
    chassis: { rows: 2, label: "Cisco Catalyst 3650-24PS" },
    ports: [
      { prefix: "Gi1/0/", count: 24, media: "ethernet", speed: "1 Gbps" },
      { prefix: "Te1/1/", count: 4, media: "fiber", speed: "10 Gbps", uplink: !0 },
      { name: "Con0", media: "console" }
    ],
    services: {},
    vlanCapable: !0,
    routeCapable: !0
  },
  firewall: {
    id: "firewall",
    label: "Firewall",
    role: "firewall",
    os: "ios",
    group: "Network Devices",
    icon: "ShieldCheck",
    chassis: { rows: 1, label: "Cisco ASA 5506-X" },
    ports: [
      { prefix: "Gi1/", count: 4, media: "ethernet", speed: "1 Gbps" },
      { name: "Con0", media: "console" }
    ],
    services: {},
    aclCapable: !0
  },
  accesspoint: {
    id: "accesspoint",
    label: "Wireless AP",
    role: "ap",
    os: "linux",
    group: "Network Devices",
    icon: "Wifi",
    chassis: { rows: 1, label: "Access point" },
    ports: [
      { name: "eth0", media: "ethernet", speed: "1 Gbps" },
      { name: "wlan0", media: "wifi" }
    ],
    services: {},
    ap: {
      ssid: "LAB-WIFI",
      security: "wpa2",
      passphrase: "LabWiFi2026!",
      channel: 6,
      // 802.1X and the hotspot portal both need somewhere to ask.
      radiusServerId: "",
      portal: !1,
      portalName: "Guest WiFi"
    }
  },
  isp: {
    id: "isp",
    label: "ISP / Internet",
    role: "cloud",
    os: "linux",
    group: "Network Devices",
    icon: "Cloud",
    chassis: { rows: 1, label: "Provider edge" },
    ports: [
      { prefix: "Gi0/", count: 2, media: "ethernet", speed: "1 Gbps" },
      { prefix: "Se0/", count: 2, media: "serial", zeroBased: !0, speed: "1.544 Mbps" },
      { name: "Fib0", media: "fiber", speed: "10 Gbps", uplink: !0 }
    ],
    services: { dns: !0, http: !0 },
    cloud: { down: !1, provider: "LabNet ISP" }
  },
  // ---- End devices -----------------------------------------------------
  pc: {
    id: "pc",
    dhcpClient: !0,
    // asks the network for an address, like the real thing
    label: "PC Workstation",
    role: "host",
    os: "windows",
    group: "End Devices",
    icon: "Monitor",
    chassis: { rows: 1, label: "Desktop" },
    // A workstation really does expose four different media, and a student
    // should have to pick the right one.
    ports: [
      { name: "Ethernet0", media: "ethernet", speed: "1 Gbps" },
      { prefix: "USB", count: 2, media: "usb", zeroBased: !0 },
      { name: "COM1", media: "serial" },
      { name: "Wi-Fi", media: "wifi" }
    ],
    services: { smb: !0, rdp: !0 }
  },
  laptop: {
    id: "laptop",
    dhcpClient: !0,
    // asks the network for an address, like the real thing
    label: "Laptop (WiFi)",
    role: "host",
    os: "windows",
    group: "End Devices",
    icon: "Laptop",
    chassis: { rows: 1, label: "Laptop" },
    ports: [
      { name: "wlan0", media: "wifi" },
      { name: "Ethernet0", media: "ethernet", speed: "1 Gbps" },
      { prefix: "USB", count: 1, media: "usb", zeroBased: !0 }
    ],
    services: { smb: !0 },
    radio: { enabled: !0, ssid: "", monitorMode: !1 }
  },
  server: {
    id: "server",
    label: "Server",
    role: "host",
    os: "linux",
    group: "End Devices",
    icon: "Server",
    chassis: { rows: 1, label: "1U rack server" },
    ports: [
      { prefix: "eth", count: 2, media: "ethernet", zeroBased: !0, speed: "1 Gbps" },
      { name: "Fib0", media: "fiber", speed: "10 Gbps", uplink: !0 },
      { name: "Con0", media: "console" }
    ],
    // One box. What it *is* comes from what is running on it, the same way a
    // real server is a web server because somebody installed a web server —
    // not because it was bought as one. Everything else here is a role the
    // student turns on under Services.
    services: { http: !0, ssh: !0 },
    webApp: !0,
    // the mock database the injection exercise reads
    serverRoles: !0
    // offers DNS zones, DHCP scopes, directory and RADIUS
  },
  sensor: {
    id: "sensor",
    dhcpClient: !0,
    // asks the network for an address, like the real thing
    label: "Smart Sensor",
    role: "iot",
    os: "linux",
    group: "IoT Devices",
    icon: "Radio",
    chassis: { rows: 1, label: "Sensor" },
    ports: [{ name: "wlan0", media: "wifi" }],
    services: { mqtt: !0 },
    telemetry: { metric: "temperature", unit: "°C", min: 17, max: 24 },
    radio: { enabled: !0, ssid: "", monitorMode: !1 }
  },
  camera: {
    id: "camera",
    dhcpClient: !0,
    // asks the network for an address, like the real thing
    label: "IP Camera",
    role: "iot",
    os: "linux",
    group: "IoT Devices",
    icon: "Camera",
    chassis: { rows: 1, label: "IP camera" },
    ports: [
      { name: "wlan0", media: "wifi" },
      { name: "eth0", media: "ethernet", speed: "100 Mbps" }
    ],
    services: { mqtt: !0, rtsp: !0, ssh: !0 },
    telemetry: { metric: "frames", unit: "fps", min: 24, max: 30 },
    weakDefaults: !0,
    // ships with admin/admin — the brute-force target
    radio: { enabled: !0, ssid: "", monitorMode: !1 }
  },
  // ---- Red team --------------------------------------------------------
  threatactor: {
    id: "threatactor",
    label: "Threat Actor",
    role: "attacker",
    os: "kali",
    group: "Red Team",
    icon: "Skull",
    chassis: { rows: 1, label: "Attack box" },
    ports: [
      { prefix: "wlan", count: 2, media: "wifi", zeroBased: !0 },
      { name: "eth0", media: "ethernet", speed: "1 Gbps" },
      { prefix: "USB", count: 1, media: "usb", zeroBased: !0 }
    ],
    services: { smb: !0 },
    radio: { enabled: !0, ssid: "", monitorMode: !1 },
    promiscuous: !0,
    attacker: !0
  }
};
function oc(e) {
  const t = Array.isArray(e.ports) ? e.ports : [e.ports], n = [];
  for (const r of t) {
    if (!r) continue;
    const s = r.media || "ethernet";
    if (r.name) {
      n.push({ name: r.name, media: s, speed: r.speed || null, uplink: !!r.uplink });
      continue;
    }
    const o = r.count ?? 1;
    for (let i = 0; i < o; i++)
      n.push({
        name: `${r.prefix}${r.zeroBased ? i : i + 1}`,
        media: s,
        speed: r.speed || null,
        uplink: !!r.uplink
      });
  }
  return n;
}
const Rt = {
  http: { label: "HTTP (Apache)", port: 80, proto: "tcp", product: "Apache httpd", current: "2.4.62", old: "2.4.29", cleartext: !0 },
  https: { label: "HTTPS (TLS)", port: 443, proto: "tcp", product: "Apache httpd", current: "2.4.62", old: "2.4.29" },
  ssh: { label: "SSH (OpenSSH)", port: 22, proto: "tcp", product: "OpenSSH", current: "9.8p1", old: "7.4" },
  ftp: { label: "FTP (vsftpd)", port: 21, proto: "tcp", product: "vsftpd", current: "3.0.5", old: "2.3.4", cleartext: !0 },
  telnet: { label: "Telnet", port: 23, proto: "tcp", product: "Linux telnetd", current: "0.17", old: "0.17", cleartext: !0 },
  dns: { label: "DNS (bind9)", port: 53, proto: "udp", product: "ISC BIND", current: "9.20.0", old: "9.11.3" },
  dhcp: { label: "DHCP (isc-dhcp)", port: 67, proto: "udp", product: "ISC DHCP", current: "4.4.3", old: "4.3.5" },
  mysql: { label: "MySQL", port: 3306, proto: "tcp", product: "MySQL", current: "8.4.2", old: "5.5.62" },
  mqtt: { label: "MQTT Telemetry", port: 1883, proto: "tcp", product: "Mosquitto", current: "2.0.18", old: "1.4.15", cleartext: !0 },
  rtsp: { label: "RTSP Video", port: 554, proto: "tcp", product: "live555", current: "1.17", old: "0.92", cleartext: !0 },
  smb: { label: "SMB file sharing", port: 445, proto: "tcp", product: "Samba", current: "4.20.1", old: "3.6.25" },
  rdp: { label: "RDP remote desktop", port: 3389, proto: "tcp", product: "xrdp", current: "0.10.1", old: "0.9.12" },
  snmp: { label: "SNMP management", port: 161, proto: "udp", product: "net-snmp", current: "5.9.4", old: "5.7.3", cleartext: !0 },
  radius: { label: "RADIUS (802.1X)", port: 1812, proto: "udp", product: "FreeRADIUS", current: "3.2.5", old: "3.0.21" },
  ad: { label: "Directory (LDAP)", port: 389, proto: "tcp", product: "OpenLDAP slapd", current: "2.6.8", old: "2.4.57", cleartext: !0 },
  portal: { label: "Captive portal", port: 8080, proto: "tcp", product: "nginx", current: "1.27.0", old: "1.18.0", cleartext: !0 }
}, Xh = {
  webserver: { typeId: "server", defining: "http", services: { http: !0, ssh: !0, mysql: !0, smb: !0 } },
  dnsserver: { typeId: "server", defining: "dns", services: { dns: !0, ssh: !0 } },
  dhcpserver: { typeId: "server", defining: "dhcp", services: { dhcp: !0, ssh: !0 } },
  ftpserver: { typeId: "server", defining: "ftp", services: { ftp: !0, ssh: !0 } }
};
function g0(e) {
  const t = Xh[e];
  return t ? (n) => {
    var r;
    return n.typeId === t.typeId && !!((r = n.services) != null && r[t.defining]);
  } : null;
}
const x0 = {
  router: {
    "Gi0/1": "Gi0/0/0",
    "Gi0/2": "Gi0/0/1",
    "Gi0/0/0": "Gi0/0/2",
    "Se0/0/0": "Se0/1/0",
    "Se0/0/1": "Se0/1/1"
  },
  firewall: { "Gi0/1": "Gi1/1", "Gi0/2": "Gi1/2", "Gi0/3": "Gi1/3" }
}, y0 = [
  ["ad", "Domain Controller"],
  ["dns", "DNS"],
  ["dhcp", "DHCP"],
  ["radius", "RADIUS"],
  ["http", "Web"],
  ["ftp", "File"],
  ["mysql", "Database"],
  ["smb", "File share"]
];
function v0(e) {
  return e != null && e.services ? y0.filter(([t]) => e.services[t]).map(([, t]) => t) : [];
}
function Pu(e) {
  const t = v0(e);
  return t.length ? t.length <= 2 ? t.join(" · ") : `${t.slice(0, 2).join(" · ")} +${t.length - 2}` : "no roles";
}
const w0 = ["Network Devices", "End Devices", "IoT Devices", "Red Team"];
function b0(e) {
  return Object.values(Ht).filter((t) => t.group === e);
}
function Ze(e) {
  if (typeof e != "string") return null;
  const t = e.trim().split(".");
  if (t.length !== 4) return null;
  let n = 0;
  for (const r of t) {
    if (!/^\d{1,3}$/.test(r)) return null;
    const s = Number(r);
    if (s > 255) return null;
    n = n << 8 | s;
  }
  return n >>> 0;
}
function St(e) {
  return [24, 16, 8, 0].map((t) => e >>> t & 255).join(".");
}
function $e(e) {
  return Ze(e) !== null;
}
function qe(e) {
  const t = Ze(e);
  if (t === null) return null;
  const n = ~t >>> 0;
  if (n + 1 & n) return null;
  let r = 0;
  for (let s = 31; s >= 0 && t >>> s & 1; s--)
    r++;
  return r;
}
function Jh(e) {
  return e < 0 || e > 32 ? null : St(e === 0 ? 0 : 4294967295 << 32 - e >>> 0);
}
function Eu(e, t) {
  const n = Ze(e), r = Ze(t);
  return n === null || r === null ? null : (n & r) >>> 0;
}
function Jr(e, t, n) {
  const r = Eu(e, n), s = Eu(t, n);
  return r !== null && s !== null && r === s;
}
function $t(e) {
  let t = 2166136261;
  for (let r = 0; r < e.length; r++)
    t ^= e.charCodeAt(r), t = t * 16777619 >>> 0;
  return [2, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, t & 255, t >>> 3 & 255].map((r) => r.toString(16).padStart(2, "0")).join(":");
}
const k0 = [
  { id: "tautology", re: /('|")?\s*or\s+('|")?\s*\d+\s*('|")?\s*=\s*('|")?\s*\d+/i, label: "tautology (OR 1=1)" },
  { id: "union", re: /union\s+(all\s+)?select/i, label: "UNION SELECT column grafting" },
  { id: "comment", re: /(--|#|\/\*)/, label: "comment terminator" },
  { id: "stacked", re: /;\s*(drop|insert|update|delete)\s/i, label: "stacked statement" },
  { id: "always-true-string", re: /('|")\s*or\s*('|")[^'"]*('|")\s*=\s*('|")/i, label: "string tautology (OR 'a'='a')" },
  { id: "sleep", re: /(sleep|benchmark|waitfor\s+delay)\s*\(/i, label: "time-based probe" }
];
function S0(e = "") {
  const t = `FLAG{sqli_${j0(e).toString(16)}}`;
  return {
    name: "appdb",
    tables: {
      users: {
        columns: ["id", "username", "role", "password_hash"],
        rows: [
          [1, "admin", "administrator", "$2b$10$nQ…redacted"],
          [2, "j.hughes", "staff", "$2b$10$pL…redacted"],
          [3, "guest", "read-only", "$2b$10$aR…redacted"]
        ]
      },
      secrets: {
        columns: ["id", "flag"],
        rows: [[1, t]]
      }
    },
    flag: t,
    queryLog: []
  };
}
function j0(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t ^= e.charCodeAt(n), t = t * 16777619 >>> 0;
  return t >>> 0;
}
function N0(e) {
  const t = String(e ?? "");
  return k0.filter((n) => n.re.test(t));
}
function ef(e, t) {
  const n = e.database;
  if (!n)
    return { status: 404, vulnerable: !1, blocked: !1, signatures: [], lines: ["No web application on this host."], flag: null };
  const r = N0(t), s = e.security.inputSanitised, o = { at: Date.now(), input: String(t ?? ""), hits: r.map((u) => u.id), blocked: !1 };
  n.queryLog.push(o), n.queryLog.length > 200 && n.queryLog.shift();
  const i = s ? `SELECT id,username FROM users WHERE username = ?   -- bound: ${JSON.stringify(String(t ?? ""))}` : `SELECT id,username FROM users WHERE username = '${String(t ?? "")}'`;
  if (r.length === 0)
    return {
      status: 200,
      vulnerable: !1,
      blocked: !1,
      signatures: [],
      flag: null,
      lines: [i, "200 OK — 0 rows matched."]
    };
  if (s)
    return o.blocked = !0, {
      status: 400,
      vulnerable: !1,
      blocked: !0,
      signatures: r.map((u) => u.label),
      flag: null,
      lines: [
        i,
        "Input bound as a parameter — metacharacters carry no meaning.",
        `400 Bad Request — rejected signatures: ${r.map((u) => u.id).join(", ")}`
      ]
    };
  const l = [i, "MySQL error 1064 leaked column list → id, username, role, password_hash"];
  let c = null;
  if (r.some((u) => u.id === "union"))
    l.push("UNION branch accepted — reading table `secrets`"), l.push(`row: ${n.flag}`), c = n.flag;
  else {
    l.push("Tautology accepted — authentication bypassed, dumping `users`");
    for (const u of n.tables.users.rows) l.push(`row: ${u.slice(0, 3).join(" | ")}`);
    l.push("Hint: add `UNION SELECT flag FROM secrets--` to reach the flag.");
  }
  return {
    status: 200,
    vulnerable: !0,
    blocked: !1,
    signatures: r.map((u) => u.label),
    flag: c,
    lines: l
  };
}
const Hn = 210, ae = {
  open: { id: "open", label: "Open — no encryption", short: "OPEN", encrypted: !1 },
  wep: { id: "wep", label: "WEP — legacy, broken", short: "WEP", encrypted: !0 },
  wpa2: { id: "wpa2", label: "WPA2-PSK (AES-CCMP)", short: "WPA2", encrypted: !0 },
  wpa3: { id: "wpa3", label: "WPA3-SAE", short: "WPA3", encrypted: !0 },
  // 802.1X: no shared passphrase at all. Every client authenticates to a
  // RADIUS server with its own credentials, which is why a leaver losing
  // access does not mean re-keying the whole site.
  "wpa2-enterprise": {
    id: "wpa2-enterprise",
    label: "WPA2-Enterprise (802.1X)",
    short: "WPA2-E",
    encrypted: !0,
    enterprise: !0
  }
}, ac = (e) => {
  var t;
  return !!((t = ae[e]) != null && t.enterprise);
};
function C0(e) {
  return !!(ae[e] && ae[e].encrypted);
}
function vs(e, t) {
  return Math.hypot(e.x - t.x, e.y - t.y);
}
function Er(e) {
  return e.devices.filter((t) => t.ap && t.ap.enabled);
}
function $0(e) {
  return !!(e.radio && e.radio.enabled) && !(e.ap && e.ap.enabled);
}
function ic(e, t) {
  if (!t || !t.ap || !t.ap.enabled) return null;
  const n = t.ap.range ?? Hn, r = vs(e, t);
  if (r > n) return null;
  const s = Math.round(-30 - r / n * 62);
  return Math.max(-95, Math.min(-25, s));
}
function tf(e) {
  return e == null ? 0 : e >= -55 ? 4 : e >= -67 ? 3 : e >= -78 ? 2 : e >= -88 ? 1 : 0;
}
function nf(e, t) {
  return Er(e).filter((n) => n.id !== t.id).map((n) => ({ ap: n, dbm: ic(t, n) })).filter(({ dbm: n }) => n !== null).sort((n, r) => r.dbm - n.dbm);
}
function P0(e, t) {
  return !!(e.ap && e.ap.deauthed && e.ap.deauthed[t] != null);
}
function E0(e, t, n) {
  var c, u, d, p;
  const r = (c = n.radio) == null ? void 0 : c.identity;
  if (!(r != null && r.username)) return !1;
  const s = t.ap.radiusServerId;
  if (!s) return !1;
  const o = e.devices.find((h) => h.id === s);
  if (!o || !((u = o.services) != null && u.radius)) return !1;
  const i = (((d = o.directory) == null ? void 0 : d.users) || []).find((h) => h.username === r.username && h.enabled);
  if (i) return i.password === r.password;
  const l = (((p = o.radius) == null ? void 0 : p.users) || []).find((h) => h.username === r.username);
  return !!(l && l.password === r.password);
}
function vt(e) {
  const t = /* @__PURE__ */ new Map(), n = Er(e);
  for (const r of e.devices) {
    if (!$0(r)) continue;
    const s = r.radio.ssid ? String(r.radio.ssid) : null;
    let o = null;
    for (const i of n) {
      if (i.id === r.id || s && i.ap.ssid !== s || P0(i, r.id)) continue;
      const l = ic(r, i);
      l !== null && (ac(i.ap.security) && !E0(e, i, r) || (!o || l > o.dbm) && (o = {
        apId: i.id,
        dbm: l,
        ssid: i.ap.ssid,
        security: i.ap.security,
        rogue: !!i.ap.rogue
      }));
    }
    o && t.set(r.id, o);
  }
  return t;
}
function rf(e) {
  const t = [];
  for (const [n, r] of vt(e))
    t.push({
      id: `w:${r.apId}:${n}`,
      a: n,
      b: r.apId,
      wireless: !0,
      down: !1,
      security: r.security,
      ssid: r.ssid,
      dbm: r.dbm
    });
  return t;
}
function A0(e, t) {
  let n = !1;
  for (const r of e.devices)
    if (!(!r.ap || !r.ap.deauthed))
      for (const [s, o] of Object.entries(r.ap.deauthed))
        t >= o && (delete r.ap.deauthed[s], n = !0);
  return n;
}
function I0(e, t, n) {
  return e.devices.filter((r) => {
    if (!r.radio || !r.radio.enabled) return !1;
    if (r.id === t.id || n && r.id === n.id) return !0;
    const s = r.radio.range ?? Hn;
    return vs(r, t) <= s;
  });
}
function sf(e, t, n) {
  const r = vt(e), s = r.get(t.id);
  if (s && s.apId === n.id) return s;
  const o = r.get(n.id);
  return o && o.apId === t.id ? o : null;
}
let Au = 0;
function T0(e = "d") {
  return Au += 1, `${e}${Au.toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}
const M0 = {
  router: "Router",
  switch: "Switch",
  l3switch: "MLSwitch",
  firewall: "Firewall",
  host: "Host",
  iot: "IoT"
};
function L0(e, t) {
  const n = t.id === "pc" ? "PC" : t.id === "laptop" ? "Laptop" : t.id === "accesspoint" ? "AP" : t.id === "threatactor" ? "Attacker" : t.id === "isp" ? "Internet" : t.id === "server" ? "Srv" : t.id === "sensor" ? "Sensor" : t.id === "camera" ? "Camera" : M0[t.role] || "Device";
  let r = 0;
  const s = new Set(e.map((o) => o.hostname));
  for (; s.has(`${n}${r}`); ) r += 1;
  return `${n}${r}`;
}
function D0(e) {
  return e.ap || !oc(e).some((n) => n.media === "wifi") && !e.radio ? null : {
    enabled: !0,
    ssid: "",
    monitorMode: !1,
    // Credentials the station presents on an 802.1X network, which has no
    // shared passphrase. Empty means it can join open and PSK cells but will
    // never be admitted to an enterprise one.
    identity: { username: "", password: "" },
    ...e.radio || {},
    range: Hn
  };
}
function R0(e, t) {
  return oc(e).map((n, r) => ({
    // 'dhcp' asks the network for an address; 'static' means the student (or
    // a lab) owns this interface and nothing should overwrite it.
    addressing: e.dhcpClient && n.media !== "console" ? "dhcp" : "static",
    name: n.name,
    media: n.media,
    speed: n.speed || null,
    uplink: !!n.uplink,
    link: null,
    // cable id when something is plugged in
    ip: "",
    mask: "255.255.255.0",
    mac: $t(`${t}:${r}`),
    enabled: !1,
    // "administratively down" until configured or cabled
    vlan: 1,
    mode: "access"
  }));
}
function Iu(e, t, n, r = []) {
  const s = Ht[e];
  if (!s) throw new Error(`Unknown device type: ${e}`);
  const o = T0("d");
  return {
    id: o,
    typeId: e,
    role: s.role,
    os: s.os,
    hostname: L0(r, s),
    x: t,
    y: n,
    interfaces: R0(s, o),
    gateway: "",
    routes: [],
    vlans: s.vlanCapable ? [{ id: 1, name: "default" }] : [],
    acl: [],
    // firewall / router access-list entries
    arp: {},
    //           ip -> { mac, static, spoofed }
    dnsZone: {},
    //       name -> ip   (whatever is running DNS)
    // A DHCP scope. Addresses are handed out from here and the leases are
    // kept so the student can see who holds what, as they would in a real
    // console. `base` is re-derived from the server's own address, so a
    // scope cannot drift onto a subnet the server is not on.
    dhcp: { base: "", first: 100, last: 200, leaseMins: 60, leases: {}, reservations: {} },
    // Installed software. Purely descriptive, but it is what a version scan
    // reads and what an administrator actually looks at first.
    packages: s.serverRoles ? O0() : [],
    // A directory: a domain, its accounts and its groups. Devices join it by
    // name, which is what makes a stolen domain credential worth having.
    directory: { domain: "", users: [], groups: [], joined: [] },
    // RADIUS, for 802.1X wireless and the hotspot portal.
    radius: { secret: "testing123", clients: [], accepted: 0, rejected: 0 },
    // Who has got past the captive portal on this network.
    portalSessions: {},
    services: { ...s.services },
    // --- radio layer (see engine/wireless.js) ---------------------------
    // `radio` is a client station; `ap` makes the device broadcast a BSS.
    //
    // The radio is derived from the panel rather than declared separately:
    // any device with a Wi-Fi port gets a client radio, so a port and its
    // radio can never disagree about whether the device can use wireless.
    // Access points are the exception — their Wi-Fi port serves the BSS.
    radio: D0(s),
    ap: s.ap ? { ...s.ap, enabled: !0, range: Hn, deauthed: {} } : null,
    cloud: s.cloud ? { ...s.cloud } : null,
    promiscuous: !!s.promiscuous,
    capturing: !1,
    // --- synthetic runtime telemetry (reset by the simulation engine) ----
    runtime: {
      cpu: 2,
      memory: 14,
      packetsIn: 0,
      packetsOut: 0,
      packetsDropped: 0,
      sessions: 0,
      compromised: !1,
      unresponsive: !1,
      underAttack: null
    },
    // --- security posture: what the exercises inspect --------------------
    security: {
      // Deliberately weak defaults on IoT so the brute-force lesson lands.
      username: "admin",
      password: (s.weakDefaults, "admin"),
      maxAuthTries: 0,
      // 0 = unlimited; the mitigation is to set this
      lockout: { failures: 0, lockedUntil: 0, locked: !1 },
      inputSanitised: !1,
      // the SQLi mitigation
      synCookies: !1,
      //    the DoS mitigation
      dynamicArpInspection: !1,
      //      the MitM mitigation
      managementFrameProtection: !1,
      // 802.11w — the deauth mitigation
      awarenessTraining: !1,
      // the user reports the lure instead of clicking
      mfa: !1,
      //              a stolen password is not enough on its own
      callbackVerification: !1,
      // staff ring the caller back on a directory
      //                              number — the control that ends a pretext
      //                              built on claimed identity
      patched: !1,
      //       security updates applied; false leaves services
      //                      advertising their older build to a banner grab
      tlsEnabled: !1,
      //    HTTP without this is cleartext on the wire
      anonymousFtp: !0,
      //   vsftpd's own default, and a classic finding
      snmpCommunity: "public",
      // the community string everyone forgets
      legacySmb: !0,
      //      SMBv1 left enabled for an old printer, allegedly
      passwordPolicy: !1
      // length and complexity actually enforced
    },
    // The mock database only exists on devices that host a web app.
    database: s.webApp ? S0(o) : null,
    /**
     * Console line configuration — what a student actually secures in CCNA 2.
     * `login` means the line demands a password; `transport` limits which
     * protocols the vty lines will accept.
     */
    lines: {
      con: { password: "", login: !1 },
      vty: { password: "", login: !1, transport: ["telnet"], range: "0 4" }
    },
    enableSecret: "",
    domainName: "",
    cryptoKey: !1,
    // `crypto key generate rsa` — SSH will not start without it
    banner: "",
    /**
     * CLI session state.
     *  mode      — IOS mode stack position
     *  sessions  — remote hops opened from this console (ssh/telnet)
     *  pending   — an interactive prompt awaiting the next line (a password)
     */
    cli: { mode: "user", ifaceCursor: null, saved: !1, sessions: [], pending: null }
  };
}
function _(e) {
  const t = e.interfaces.find((n) => n.ip);
  return t ? t.ip : "";
}
function rr(e) {
  return e.interfaces.find((t) => t.ip) || e.interfaces[0] || null;
}
function of(e, t) {
  if (!t) return null;
  const n = String(t).toLowerCase().replace(/\s+/g, "");
  return e.interfaces.find((r) => r.name.toLowerCase().replace(/\s+/g, "") === n) || // allow shorthand: "0/1" matches "Gi0/1", "e0" matches "eth0"
  e.interfaces.find((r) => r.name.toLowerCase().replace(/\s+/g, "").endsWith(n)) || null;
}
function Cn(e) {
  return Object.entries(e.services).filter(([, t]) => t).map(([t]) => t);
}
function z0(e, t) {
  return !!e.services[t] && !e.runtime.unresponsive;
}
function O0() {
  return [
    { name: "openssh-server", version: "9.8p1", service: "ssh" },
    { name: "nginx", version: "1.27.0", service: "http" }
  ];
}
function Ui(e, t) {
  const n = e.security;
  return n.lockout.failures += 1, n.maxAuthTries > 0 && n.lockout.failures >= n.maxAuthTries && (n.lockout.locked = !0, n.lockout.lockedUntil = t + 6e4), n.lockout;
}
function af(e, t) {
  const n = e.security.lockout;
  return n.locked ? t >= n.lockedUntil ? (n.locked = !1, n.failures = 0, !1) : !0 : !1;
}
function lc(e) {
  e.runtime.cpu = 2, e.runtime.memory = 14, e.runtime.packetsDropped = 0, e.runtime.sessions = 0, e.runtime.unresponsive = !1, e.runtime.underAttack = null;
}
function Bi(e, t) {
  return !e || !t ? null : e.interfaces.find((n) => n.name === t) || null;
}
function lf(e, t) {
  return e.interfaces.map((n) => {
    var i, l;
    const r = Fn[n.media];
    let s = !1, o = "";
    if (n.media === "wifi")
      s = !0, o = "radio — nothing plugs in";
    else if (n.link)
      s = !0, o = "already cabled";
    else if (t && !Hi(t, n)) {
      s = !0;
      const c = (i = r == null ? void 0 : r.cables) == null ? void 0 : i[0], u = c ? (l = Se[c]) == null ? void 0 : l.short : null;
      o = u ? `needs a ${u} cable` : `wrong media (${(r == null ? void 0 : r.short) || n.media})`;
    }
    return { port: n, name: n.name, media: n.media, mediaLabel: (r == null ? void 0 : r.label) || n.media, disabled: s, reason: o };
  });
}
function Tu(e, t) {
  return lf(e, t).filter((n) => !n.disabled).map((n) => n.port);
}
function hr(e, t, n) {
  var o;
  if (!t) return "empty";
  if (t.media === "wifi") {
    const i = e.radio && e.radio.associatedTo;
    return (o = e.radio) != null && o.enabled ? i ? "up" : "idle" : "off";
  }
  if (!t.link) return "empty";
  const r = n == null ? void 0 : n.links.find((i) => i.id === t.link);
  if (!r) return "empty";
  if (r.down) return "down";
  if (!t.enabled) return "admin-down";
  const s = Sr(e, t, n);
  return s != null && s.port && s.port.enabled === !1 ? "down" : "up";
}
function Sr(e, t, n) {
  if (!t || !t.link || !n) return null;
  const r = n.links.find((l) => l.id === t.link);
  if (!r) return null;
  const s = r.a === e.id ? r.b : r.a, o = r.a === e.id ? r.bPort : r.aPort, i = n.devices.find((l) => l.id === s);
  return i ? { device: i, port: Bi(i, o), link: r } : null;
}
function _0(e) {
  const t = new Map(e.devices.map((s) => [s.id, s])), n = (s, o) => {
    const i = t.get(s);
    if (!i) return !1;
    if (!o) return !0;
    const l = i.interfaces.find((c) => c.name === o);
    return l ? l.enabled !== !1 : !0;
  };
  return e.links.filter(
    (s) => !s.down && n(s.a, s.aPort) && n(s.b, s.bPort)
  ).concat(rf(e));
}
const F0 = _0;
function cf(e, t) {
  const n = [];
  for (const r of F0(e))
    r.a === t ? n.push(r.b) : r.b === t && n.push(r.a);
  return n;
}
function G(e, t, n) {
  if (t === n) return [t];
  const r = /* @__PURE__ */ new Map([[t, null]]), s = [t];
  for (; s.length; ) {
    const o = s.shift();
    for (const i of cf(e, o))
      if (!r.has(i)) {
        if (r.set(i, o), i === n) {
          const l = [i];
          let c = o;
          for (; c !== null; )
            l.unshift(c), c = r.get(c);
          return l;
        }
        s.push(i);
      }
  }
  return null;
}
function H0(e, t, n) {
  return G(e, t, n) !== null;
}
function U0(e, t) {
  const n = new Map(e.devices.map((i) => [i.id, i])), r = /* @__PURE__ */ new Set([t]), s = [t], o = /* @__PURE__ */ new Set([t]);
  for (; s.length; ) {
    const i = s.shift();
    for (const l of cf(e, i)) {
      if (r.has(l)) continue;
      r.add(l), o.add(l);
      const c = n.get(l);
      c && (c.role === "router" || c.role === "firewall") || s.push(l);
    }
  }
  return o;
}
function uf(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.devices)
    for (const r of n.interfaces)
      r.ip && t.set(r.ip, { device: n, iface: r });
  return t;
}
function Je(e, t) {
  if (!t) return null;
  const n = uf(e).get(t.trim());
  if (n) return n.device;
  const r = t.trim().toLowerCase();
  return e.devices.find((s) => s.hostname.toLowerCase() === r) || null;
}
class B0 {
  constructor() {
    this.out = [];
  }
  u8(t) {
    return this.out.push(t & 255), this;
  }
  u16(t) {
    return this.out.push(t >>> 8 & 255, t & 255), this;
  }
  u32(t) {
    return this.out.push(t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, t & 255), this;
  }
  mac(t) {
    const n = String(t || "00:00:00:00:00:00").split(":").map((r) => parseInt(r, 16) || 0);
    for (; n.length < 6; ) n.push(0);
    return this.out.push(...n.slice(0, 6)), this;
  }
  ip(t) {
    const n = String(t || "0.0.0.0").split(".").map((r) => Number(r) || 0);
    for (; n.length < 4; ) n.push(0);
    return this.out.push(...n.slice(0, 4)), this;
  }
  ascii(t) {
    for (const n of String(t)) this.out.push(n.charCodeAt(0) & 255);
    return this;
  }
  /** Deterministic pseudo-random filler, used for payloads and ciphertext. */
  filler(t, n = 1) {
    let r = n >>> 0 || 625341585;
    for (let s = 0; s < t; s++)
      r ^= r << 13, r >>>= 0, r ^= r >>> 17, r ^= r << 5, r >>>= 0, this.out.push(r & 255);
    return this;
  }
}
const W0 = "ff:ff:ff:ff:ff:ff", Fa = (e) => {
  var t, n;
  return ((n = (t = e == null ? void 0 : e.interfaces) == null ? void 0 : t[0]) == null ? void 0 : n.mac) || $t(`${(e == null ? void 0 : e.id) || "x"}:0`);
}, Or = (e) => String(e).split("").reduce((t, n) => t * 31 + n.charCodeAt(0) >>> 0, 7), V0 = /* @__PURE__ */ new Set(["beacon", "deauth", "auth", "probe"]), Mu = {
  icmp: { protocol: "ICMP", colorKey: "icmp", l4: "icmp", payload: 56 },
  arp: { protocol: "ARP", colorKey: "arp", l4: "arp" },
  dns: { protocol: "DNS", colorKey: "dns", l4: "udp", port: 53, payload: 42 },
  dhcp: { protocol: "DHCP", colorKey: "dhcp", l4: "udp", port: 67, payload: 300 },
  http: { protocol: "HTTP", colorKey: "http", l4: "tcp", port: 80 },
  mqtt: { protocol: "MQTT", colorKey: "mqtt", l4: "tcp", port: 1883, payload: 34 },
  tcp: { protocol: "TCP", colorKey: "tcp", l4: "tcp", port: 443, payload: 0 },
  attack: { protocol: "TCP", colorKey: "attack", l4: "tcp", port: 80, payload: 0 },
  beacon: { protocol: "802.11", colorKey: "beacon" },
  deauth: { protocol: "802.11", colorKey: "deauth" },
  auth: { protocol: "802.11", colorKey: "auth" },
  eapol: { protocol: "EAPOL", colorKey: "eapol", payload: 117 }
}, df = {
  icmp: "#3b82f6",
  arp: "#a855f7",
  dns: "#14b8a6",
  dhcp: "#f59e0b",
  http: "#22c55e",
  mqtt: "#06b6d4",
  tcp: "#64748b",
  udp: "#64748b",
  attack: "#ef4444",
  beacon: "#8b5cf6",
  deauth: "#ef4444",
  auth: "#8b5cf6",
  eapol: "#eab308"
};
function Lu({ topology: e, from: t, to: n, kind: r = "icmp", clock: s = 0, srcIp: o = "", dstIp: i = "", meta: l = {} }) {
  var B;
  const c = Mu[r] || Mu.tcp, u = V0.has(r), d = u ? null : sf(e, t, n), p = !!d || u, h = l.security || (d == null ? void 0 : d.security) || (p ? q0(e, t, n) : null), f = String(h || "none").toLowerCase(), g = p && !u && C0(f) && !l.plaintext, w = Fa(t), k = u && r === "beacon" ? W0 : Fa(n), m = d ? Fa(e.devices.find((L) => L.id === d.apId) || t) : w, x = new B0(), v = {};
  if (p) {
    const L = { beacon: 8, deauth: 12, auth: 11, probe: 4 }[r] ?? 0, Y = u ? 0 : 2;
    x.u8((L & 15) << 4 | (Y & 3) << 2), x.u8(g ? 64 : 0), x.u16(314), x.mac(k), x.mac(w), x.mac(m), x.u16(((l.sn ?? l.seq ?? 0) & 4095) << 4), g && x.filler(8, Or(w)), v.dot11 = {
      frameType: u ? `Management (${r})` : "Data",
      protected: g,
      receiver: k,
      transmitter: w,
      bssid: m,
      ssid: l.ssid || (d == null ? void 0 : d.ssid) || "",
      channel: l.channel ?? null,
      signal: l.dbm != null ? `${l.dbm} dBm` : d ? `${d.dbm} dBm` : "",
      security: ae[f] ? ae[f].short : "OPEN",
      ...r === "deauth" ? { reasonCode: `${l.reason ?? 7} (class 3 frame from nonassociated station)` } : {}
    };
  } else {
    const L = r === "arp" ? 2054 : 2048;
    x.mac(k).mac(w).u16(L), v.eth = {
      destination: k,
      source: w,
      type: `0x${L.toString(16).padStart(4, "0")} (${r === "arp" ? "ARP" : "IPv4"})`
    };
  }
  let S = "";
  if (r === "arp")
    x.u16(1).u16(2048).u8(6).u8(4).u16(l.reply ? 2 : 1), x.mac(w).ip(o).mac(l.reply ? k : "00:00:00:00:00:00").ip(i), v.arp = {
      opcode: l.reply ? "2 (reply)" : "1 (request)",
      senderMac: w,
      senderIp: o,
      targetIp: i,
      summary: l.reply ? `${o} is at ${w}` : `Who has ${i}? Tell ${o}`
    };
  else if (u) {
    const L = l.ssid || "";
    x.u8(0).u8(L.length).ascii(L).u8(3).u8(l.channel ?? 6), r === "deauth" && x.u16(l.reason ?? 7), S = K0(r, l);
  } else {
    const L = c.l4, Y = (L === "tcp" || L === "udp") && l.body ? String(l.body).length : c.payload || 0, ee = L === "tcp" ? 20 : L === "udp" || L === "icmp" ? 8 : 0;
    x.u8(69).u8(0).u16(20 + ee + Y).u16(7238).u16(16384), x.u8(l.ttl ?? 64), x.u8(L === "tcp" ? 6 : L === "udp" ? 17 : 1), x.u16(0).ip(o).ip(i), v.ip = {
      version: 4,
      headerLength: "20 bytes",
      totalLength: `${20 + ee + Y} bytes`,
      ttl: l.ttl ?? 64,
      protocol: L === "tcp" ? "6 (TCP)" : L === "udp" ? "17 (UDP)" : "1 (ICMP)",
      source: o,
      destination: i
    };
    const ne = l.port || c.port || 0;
    if (L === "tcp") {
      const te = 4e4 + (Or(w) % 2e4 | 0);
      x.u16(te).u16(ne).u32(l.seq ?? 1).u32(0).u16(20504).u16(64240).u16(0).u16(0), v.tcp = {
        sourcePort: te,
        destinationPort: ne,
        flags: "PSH, ACK",
        window: 64240,
        payloadBytes: Y
      };
    } else if (L === "udp") {
      const te = 4e4 + (Or(w) % 2e4 | 0);
      x.u16(te).u16(ne).u16(8 + Y).u16(0), v.udp = { sourcePort: te, destinationPort: ne, length: 8 + Y };
    } else L === "icmp" && (x.u8(l.reply ? 0 : 8).u8(0).u16(0).u16(1).u16(l.seq ?? 0), v.icmp = {
      type: l.reply ? "0 (Echo Reply)" : "8 (Echo Request)",
      identifier: "0x0001",
      sequence: l.seq ?? 0
    });
    S = l.body ? String(l.body) : G0(r, l), Y > 0 && (g ? x.filler(Y, Or(w + Y)) : l.body ? x.ascii(String(l.body)) : x.filler(Y, Or(r) + (l.seq ?? 0)));
  }
  (S && S.length > 0 || g) && (v.payload = {
    protected: g,
    bytes: g ? "ciphertext" : `${S.length} bytes`,
    ...g ? { note: `Encrypted with ${((B = ae[f]) == null ? void 0 : B.short) || "WPA2"} — unreadable without the key` } : { text: S }
  });
  const y = x.out, P = Y0({ kind: r, spec: c, meta: l, srcIp: o, dstIp: i, layers: v, encrypted: g, security: f, payloadText: S });
  return {
    number: null,
    // assigned by CaptureBuffer.add
    time: s / 1e3,
    source: p && u ? w : o || w,
    destination: p && u ? k : i || k,
    protocol: c.protocol,
    colorKey: c.colorKey,
    length: y.length,
    bytes: y,
    wireless: p,
    encrypted: g,
    security: f,
    info: P,
    witnesses: [],
    layers: {
      frame: {
        capturedLength: `${y.length} bytes`,
        medium: p ? `802.11 radio${l.channel != null ? `, channel ${l.channel}` : ""}` : "Ethernet cable",
        arrivalTime: `${(s / 1e3).toFixed(3)} s (virtual)`,
        ...p && l.dbm != null ? { signal: `${l.dbm} dBm` } : {}
      },
      ...v
    }
  };
}
function q0(e, t, n) {
  const r = [t, n].find((s) => s && s.ap && s.ap.enabled);
  return r ? r.ap.security : "none";
}
function G0(e, t) {
  switch (e) {
    case "dns":
      return `Standard query A ${t.name || "web.lab.local"}`;
    case "dhcp":
      return "DHCP Discover / Offer / Request / Ack";
    case "mqtt":
      return `PUBLISH ${t.topic || "sensors/telemetry"}`;
    case "icmp":
      return "";
    default:
      return "";
  }
}
function K0(e, t) {
  switch (e) {
    case "beacon":
      return `Beacon: SSID "${t.ssid || ""}", channel ${t.channel ?? 6}, ${String(t.security || "open").toUpperCase()}`;
    case "deauth":
      return `Deauthentication, reason ${t.reason ?? 7}`;
    case "auth":
      return "Authentication / Association exchange";
    default:
      return "";
  }
}
function Y0({ kind: e, spec: t, meta: n, srcIp: r, dstIp: s, layers: o, encrypted: i, security: l, payloadText: c }) {
  var u, d;
  if (e === "beacon")
    return `Beacon frame, SSID="${n.ssid || ""}", CH ${n.channel ?? 6}, ${String(n.security || "open").toUpperCase()}`;
  if (e === "deauth")
    return `Deauthentication, reason ${n.reason ?? 7} (spoofed)`;
  if (e === "auth") return "Authentication, association exchange";
  if (e === "arp") return ((u = o.arp) == null ? void 0 : u.summary) || "ARP";
  if (e === "icmp")
    return `Echo (ping) ${n.reply ? "reply" : "request"} id=0x0001 seq=${n.seq ?? 0}`;
  if (i)
    return `${t.protocol} data, ${((d = ae[l]) == null ? void 0 : d.short) || "WPA2"} protected`;
  if (e === "http") {
    const p = String(n.body || "").split(`\r
`)[0];
    return p ? `${p}` : `HTTP ${r} → ${s}`;
  }
  return e === "dns" ? `Standard query A ${n.name || "web.lab.local"}` : e === "mqtt" ? `PUBLISH ${n.topic || "sensors/telemetry"}` : e === "attack" ? n.label ? `${n.label}` : "TCP (exercise traffic)" : c || `${t.protocol} ${r} → ${s}`;
}
function Z0(e, t, n) {
  const r = new Map(e.devices.map((l) => [l.id, l])), s = /* @__PURE__ */ new Set([t.id, n.id]), o = [], i = (l) => {
    var c;
    return ((c = r.get(l)) == null ? void 0 : c.role) === "hub";
  };
  for (const l of [t.id, n.id]) i(l) && o.push(l);
  for (; o.length; ) {
    const l = o.shift();
    for (const c of e.links) {
      if (c.down) continue;
      const u = c.a === l ? c.b : c.b === l ? c.a : null;
      !u || s.has(u) || (s.add(u), i(u) && o.push(u));
    }
  }
  return s;
}
function Q0(e, t, n, r) {
  if (!t || !n || !r) return !1;
  if (t.id === n.id || t.id === r.id) return !0;
  const s = sf(e, n, r), o = !s && !!(n.ap || r.ap) && n.id === r.id;
  if (s || o) {
    if (!t.radio || !t.radio.enabled || !t.radio.monitorMode) return !1;
    const i = t.radio.range ?? Hn;
    return vs(t, n) <= i || vs(t, r) <= i;
  }
  return t.promiscuous ? Z0(e, n, r).has(t.id) : !1;
}
const Du = {
  http: "HTTP",
  icmp: "ICMP",
  arp: "ARP",
  dns: "DNS",
  dhcp: "DHCP",
  mqtt: "MQTT",
  eapol: "EAPOL"
};
function pf(e, t) {
  const n = String(t || "").trim().toLowerCase();
  return n ? n.split(/\s+(?:and|&&)\s+/).map((r) => r.trim()).filter(Boolean).every((r) => X0(e, r)) : !0;
}
function X0(e, t) {
  if (t === "wlan") return !!e.wireless;
  if (t === "eth") return !e.wireless;
  if (t === "plaintext") return !e.encrypted;
  if (t === "encrypted") return !!e.encrypted;
  if (t === "tcp") return !!e.layers.tcp;
  if (t === "udp") return !!e.layers.udp;
  if (Du[t]) return e.protocol === Du[t];
  const n = t.match(/^([a-z0-9.]+)\s*(==|!=)\s*(.+)$/);
  if (n) {
    const [, r, s, o] = n, i = o.replace(/^["']|["']$/g, "").trim(), l = J0(e, r);
    if (l === null) return !1;
    const c = Array.isArray(l) ? l.some((u) => String(u).toLowerCase() === i) : String(l).toLowerCase() === i;
    return s === "!=" ? !c : c;
  }
  return `${e.protocol} ${e.source} ${e.destination} ${e.info}`.toLowerCase().includes(t);
}
function J0(e, t) {
  var n, r, s, o, i, l, c, u, d, p;
  switch (t) {
    case "ip.src":
      return ((n = e.layers.ip) == null ? void 0 : n.source) ?? null;
    case "ip.dst":
      return ((r = e.layers.ip) == null ? void 0 : r.destination) ?? null;
    case "ip.addr":
      return [(s = e.layers.ip) == null ? void 0 : s.source, (o = e.layers.ip) == null ? void 0 : o.destination, e.source, e.destination].filter(Boolean);
    case "eth.src":
      return ((i = e.layers.eth) == null ? void 0 : i.source) ?? ((l = e.layers.dot11) == null ? void 0 : l.transmitter) ?? null;
    case "eth.dst":
      return ((c = e.layers.eth) == null ? void 0 : c.destination) ?? ((u = e.layers.dot11) == null ? void 0 : u.receiver) ?? null;
    case "wlan.ssid":
      return ((d = e.layers.dot11) == null ? void 0 : d.ssid) ?? null;
    case "wlan.channel":
      return ((p = e.layers.dot11) == null ? void 0 : p.channel) == null ? null : String(e.layers.dot11.channel);
    case "tcp.port":
      return e.layers.tcp ? [e.layers.tcp.sourcePort, e.layers.tcp.destinationPort] : null;
    case "udp.port":
      return e.layers.udp ? [e.layers.udp.sourcePort, e.layers.udp.destinationPort] : null;
    default:
      return null;
  }
}
class ex {
  constructor(t = 800) {
    this.frames = [], this.limit = t, this.counter = 0;
  }
  /**
   * Record a frame and the devices that witnessed it.
   * Witnesses are stored on the frame so a per-device view is a filter rather
   * than a second copy of the buffer.
   */
  add(t, n = []) {
    for (t.number == null && (t.number = ++this.counter), t.witnesses = n, this.frames.push(t); this.frames.length > this.limit; ) this.frames.shift();
    return t;
  }
  clear() {
    this.frames = [], this.counter = 0;
  }
  /** Frames seen from one vantage point; null or '' means every frame. */
  for(t) {
    return t ? this.frames.filter((n) => Array.isArray(n.witnesses) && n.witnesses.includes(t)) : this.frames;
  }
  stats(t = null) {
    const n = this.for(t), r = {};
    let s = 0, o = 0;
    for (const i of n)
      r[i.protocol] = (r[i.protocol] || 0) + 1, s += i.length, i.encrypted && (o += 1);
    return { total: n.length, bytes: s, encrypted: o, byProtocol: r };
  }
  /** Cleartext credentials visible in the capture — the payoff of sniffing. */
  credentials(t = null) {
    var r;
    const n = [];
    for (const s of this.for(t)) {
      if (s.encrypted) continue;
      const i = (((r = s.layers.payload) == null ? void 0 : r.text) || "").match(/(?:username|user|login)=([^&\s]+).*?password=([^&\s]+)/i);
      i && n.push({ number: s.number, username: i[1], password: i[2], at: s.time });
    }
    return n;
  }
}
function tx(e, t = 16) {
  const n = [], r = Array.from(e || []);
  for (let s = 0; s < r.length; s += t) {
    const o = r.slice(s, s + t);
    n.push({
      offset: s.toString(16).padStart(4, "0"),
      hex: o.map((i) => i.toString(16).padStart(2, "0")),
      ascii: o.map((i) => i >= 32 && i < 127 ? String.fromCharCode(i) : ".").join(""),
      bytes: o
    });
  }
  return n;
}
function nx(e) {
  const t = "No.    Time      Source               Destination          Proto   Len   Info", n = "".padEnd(t.length, "-"), r = e.map(
    (s) => String(s.number).padEnd(7) + s.time.toFixed(3).padStart(8) + "  " + String(s.source || "-").padEnd(21) + String(s.destination || "-").padEnd(21) + String(s.protocol).padEnd(8) + String(s.length).padEnd(6) + (s.encrypted ? `${s.info} [encrypted]` : s.info)
  );
  return [
    "# NetRange Lab — simulated capture (no real traffic was observed)",
    `# ${e.length} frames`,
    "",
    t,
    n,
    ...r,
    ""
  ].join(`
`);
}
function rx(e, t, n) {
  const r = String(t || "").trim().toLowerCase();
  return r ? /^[a-z0-9.-]+$/.test(r) ? $e(n) ? (e.dnsZone[r] = n, { ok: !0 }) : { ok: !1, reason: `"${n}" is not a valid IPv4 address.` } : { ok: !1, reason: "Use letters, digits, dots and hyphens only." } : { ok: !1, reason: "A record needs a name." };
}
function sx(e, t) {
  delete e.dnsZone[t];
}
function ox(e) {
  return Object.entries(e.dnsZone || {}).map(([t, n]) => ({ name: t, ip: n, type: "A" })).sort((t, n) => t.name.localeCompare(n.name));
}
function ia(e) {
  const t = _(e), n = e.dhcp || {};
  if (!t) return { ...n, base: "", ready: !1, reason: "the server has no address of its own yet" };
  const r = t.split(".").slice(0, 3).join(".") + ".", s = Ru(n.first ?? 100), o = Ru(n.last ?? 200);
  return o < s ? { ...n, base: r, first: s, last: o, ready: !1, reason: "the range ends before it starts" } : { ...n, base: r, first: s, last: o, ready: !0, reason: "" };
}
const Ru = (e) => Math.min(254, Math.max(1, Number(e) || 1));
function ax(e) {
  return new Set(
    e.devices.flatMap((t) => t.interfaces.map((n) => n.ip).filter(Boolean))
  );
}
function ix(e, t, n, r = 0) {
  var u;
  const s = ia(e);
  if (!s.ready) return null;
  e.dhcp.leases = e.dhcp.leases || {}, e.dhcp.reservations = e.dhcp.reservations || {};
  const o = (u = t.interfaces.find((d) => d.media !== "console")) == null ? void 0 : u.mac, i = o && e.dhcp.reservations[o];
  if (i)
    return e.dhcp.leases[i] = { clientId: t.id, mac: o, at: r, host: t.hostname }, i;
  const l = Object.entries(e.dhcp.leases).find(([, d]) => d.clientId === t.id);
  if (l)
    return l[1].at = r, l[0];
  const c = ax(n);
  for (let d = s.first; d <= s.last; d++) {
    const p = `${s.base}${d}`;
    if (!(c.has(p) || e.dhcp.leases[p]))
      return e.dhcp.leases[p] = { clientId: t.id, mac: o, at: r, host: t.hostname }, p;
  }
  return null;
}
function lx(e, t) {
  var n;
  (n = e.dhcp) != null && n.leases && delete e.dhcp.leases[t];
}
function cx(e, t, n = 0) {
  var o, i;
  const r = ((o = e.dhcp) == null ? void 0 : o.leases) || {}, s = ((i = e.dhcp) == null ? void 0 : i.leaseMins) || 60;
  return Object.entries(r).map(([l, c]) => {
    var p;
    const u = t.devices.find((h) => h.id === c.clientId), d = Math.max(0, n - (c.at || 0));
    return {
      address: l,
      mac: c.mac || "—",
      host: (u == null ? void 0 : u.hostname) || c.host || "(gone)",
      online: !!u,
      expiresIn: Math.max(0, s - Math.floor(d / 6e4)),
      reserved: Object.values(((p = e.dhcp) == null ? void 0 : p.reservations) || {}).includes(l)
    };
  }).sort((l, c) => Ze(l.address) - Ze(c.address));
}
function zu(e) {
  const t = ia(e);
  return t.ready ? t.last - t.first + 1 : 0;
}
const ux = ["Domain Users", "Domain Admins", "Helpdesk"];
function dx(e, { username: t, password: n, group: r = "Domain Users" }) {
  const s = String(t || "").trim().toLowerCase();
  return s ? /^[a-z0-9._-]+$/.test(s) ? (e.directory.users = e.directory.users || [], e.directory.users.some((o) => o.username === s) ? { ok: !1, reason: `"${s}" already exists in this domain.` } : (e.directory.users.push({
    username: s,
    password: String(n || ""),
    group: r,
    enabled: !0,
    // Stored so the audit can say *why* an account is a finding, rather than
    // just that it is.
    createdAt: Date.now()
  }), { ok: !0 })) : { ok: !1, reason: "Use letters, digits, dot, underscore or hyphen." } : { ok: !1, reason: "An account needs a username." };
}
function px(e, t) {
  e.directory.users = (e.directory.users || []).filter((n) => n.username !== t);
}
function hx(e, t, n) {
  var s;
  const r = (((s = e.directory) == null ? void 0 : s.users) || []).find(
    (o) => o.username === String(t || "").trim().toLowerCase()
  );
  return r ? r.enabled ? r.password !== n ? { ok: !1, reason: "bad password" } : { ok: !0, user: r, admin: r.group === "Domain Admins" } : { ok: !1, reason: "account disabled" } : { ok: !1, reason: "no such account" };
}
function fx(e, t) {
  var r, s;
  if (!((r = t == null ? void 0 : t.ap) != null && r.radiusServerId)) return null;
  const n = e.devices.find((o) => o.id === t.ap.radiusServerId);
  return !n || !((s = n.services) != null && s.radius) ? null : G(e, t.id, n.id) ? n : null;
}
function mx(e, t, n) {
  var i;
  if (!((i = e == null ? void 0 : e.services) != null && i.radius)) return { ok: !1, reason: "no RADIUS service" };
  e.radius = e.radius || { accepted: 0, rejected: 0 };
  const r = e.services.ad ? hx(e, t, n) : { ok: !1, reason: "no directory on this server" }, s = (e.radius.users || []).find((l) => l.username === t), o = r.ok || !!(s && s.password === n);
  return o ? e.radius.accepted += 1 : e.radius.rejected += 1, o ? { ok: !0, via: r.ok ? "directory" : "radius-local" } : { ok: !1, reason: r.reason || "rejected" };
}
function hf(e, t, n) {
  var o;
  if (!((o = t == null ? void 0 : t.ap) != null && o.portal)) return !0;
  const s = (t.portalSessions || {})[n.id];
  return !!(s && s.authenticated);
}
function gx(e, t, n, r, s) {
  t.portalSessions = t.portalSessions || {};
  const o = fx(e, t);
  if (!o)
    return t.portalSessions[n.id] = { authenticated: !1, at: Date.now(), reason: "no RADIUS server reachable" }, { ok: !1, reason: "the portal has no authentication server to ask" };
  const i = mx(o, r, s);
  return t.portalSessions[n.id] = {
    authenticated: i.ok,
    username: r,
    at: Date.now(),
    via: i.via,
    reason: i.reason
  }, i;
}
function xx(e, t) {
  e.portalSessions && delete e.portalSessions[t.id];
}
function yx(e, t) {
  return Object.entries(t.portalSessions || {}).map(([n, r]) => {
    var s;
    return {
      ...r,
      deviceId: n,
      host: ((s = e.devices.find((o) => o.id === n)) == null ? void 0 : s.hostname) || "(gone)"
    };
  });
}
const vx = {
  http: { name: "nginx", version: "1.27.0" },
  dns: { name: "bind9", version: "9.20.0" },
  dhcp: { name: "isc-dhcp-server", version: "4.4.3" },
  ftp: { name: "vsftpd", version: "3.0.5" },
  mysql: { name: "mysql-server", version: "8.4.2" },
  ssh: { name: "openssh-server", version: "9.8p1" },
  smb: { name: "samba", version: "4.20.1" },
  radius: { name: "freeradius", version: "3.2.5" },
  ad: { name: "slapd", version: "2.6.8" },
  snmp: { name: "snmpd", version: "5.9.4" },
  portal: { name: "nodogsplash", version: "5.0.3" },
  telnet: { name: "telnetd", version: "0.17" },
  rtsp: { name: "live555", version: "1.17" },
  mqtt: { name: "mosquitto", version: "2.0.18" }
};
function wx(e) {
  var n, r;
  e.packages = e.packages || [];
  const t = new Set(e.packages.map((s) => s.name));
  for (const [s, o] of Object.entries(vx))
    (n = e.services) != null && n[s] && !t.has(o.name) && (e.packages.push({ ...o, service: s }), t.add(o.name));
  for (const s of e.packages) s.running = !!((r = e.services) != null && r[s.service]);
  return e.packages.sort((s, o) => s.name.localeCompare(o.name)), e.packages;
}
function bx(e, t) {
  e.packages = (e.packages || []).filter((n) => n.name !== t);
}
const Ou = {
  icmp: { label: "ICMP", color: "#3b82f6" },
  arp: { label: "ARP", color: "#a855f7" },
  dns: { label: "DNS", color: "#14b8a6" },
  dhcp: { label: "DHCP", color: "#f59e0b" },
  http: { label: "HTTP", color: "#22c55e" },
  mqtt: { label: "MQTT", color: "#06b6d4" },
  attack: { label: "ATTACK", color: "#ef4444" }
}, _r = 320, kx = 4;
let Sx = 0;
const Ha = () => Sx += 1;
class jx {
  /**
   * @param {object} opts
   * @param {() => {devices:Array, links:Array}} opts.getTopology  live snapshot accessor
   * @param {(line:{channel:string,text:string,level:string}) => void} opts.onLog
   * @param {() => void} opts.onChange  called when runtime state mutates
   */
  constructor({ getTopology: t, onLog: n = () => {
  }, onChange: r = () => {
  } }) {
    this.getTopology = t, this.onLog = n, this.onChange = r, this.clock = 0, this.running = !0, this.speed = 1, this.queue = [], this.packets = [], this._timers = /* @__PURE__ */ new Map(), this.capture = new ex(), this.mode = "realtime", this.ambient = !0, this.coaching = !1, this.pduEvents = [], this.pduSeq = 0;
  }
  setMode(t) {
    return this.mode = t === "simulation" ? "simulation" : "realtime", this.mode === "realtime" && this.flushPdu(), this.onChange(), this.mode;
  }
  clearPdu() {
    this.pduEvents = [], this.onChange();
  }
  // ---------------------------------------------------------------- clock
  /** Advance the virtual clock by `realDtMs * speed` and drain due events. */
  tick(t) {
    if (!this.running) return;
    this.clock += t * this.speed, A0(this.getTopology(), this.clock) && this.onChange();
    let n = 0;
    for (; this.queue.length && this.queue[0].at <= this.clock && n++ < 500; ) {
      const s = this.queue.shift();
      if (!s.cancelled)
        try {
          s.fn(this.clock);
        } catch (o) {
          this.log("system", `simulation error: ${o.message}`, "error");
        }
    }
    const r = this.packets.length;
    this.packets = this.packets.filter((s) => s.arrivesAt > this.clock - 200), this.packets.length !== r && this.onChange();
  }
  schedule(t, n, r = "") {
    const s = { id: Ha(), at: this.clock + t, fn: n, label: r, cancelled: !1 }, o = this.queue.findIndex((i) => i.at > s.at);
    return o === -1 ? this.queue.push(s) : this.queue.splice(o, 0, s), s;
  }
  /** Repeating event; returns a handle for cancellation. */
  every(t, n, r = "") {
    const s = { cancelled: !1 }, o = () => {
      s.cancelled || (n(this.clock), s.ev = this.schedule(t, o, r));
    };
    return s.ev = this.schedule(t, o, r), this._timers.set(s, r), s;
  }
  cancel(t) {
    t && (t.cancelled = !0, t.ev && (t.ev.cancelled = !0), this._timers.delete(t));
  }
  pause() {
    this.running = !1;
  }
  resume() {
    this.running = !0;
  }
  toggle() {
    return this.running = !this.running, this.running;
  }
  setSpeed(t) {
    this.speed = Math.max(0.25, Math.min(4, t));
  }
  reset() {
    this.queue = [], this.packets = [];
    for (const t of [...this._timers.keys()]) this.cancel(t);
    this.clock = 0, this.onChange();
  }
  log(t, n, r = "info") {
    this.onLog({ channel: t, text: n, level: r, at: this.clock });
  }
  /**
   * A coaching line: the thing an instructor would say, not the thing the
   * tool prints.
   *
   * Nobody running nmap gets told which exercise to try next, and mixing that
   * into the transcript teaches students to read output that will never look
   * like that again. Notes are off by default and the panel carries the
   * teaching instead; turning them on puts them back inline for a class that
   * is being walked through its first scan.
   */
  note(t, n) {
    this.coaching && this.onLog({ channel: t, text: `  → ${n}`, level: "dim", at: this.clock });
  }
  setCoaching(t) {
    this.coaching = !!t;
  }
  // -------------------------------------------------------------- packets
  /**
   * Launch an animated packet along a device path.
   * The renderer reads `packets` and interpolates between hops by clock time.
   */
  emit(t, n = "icmp", r = {}) {
    if (!Array.isArray(t) || t.length < 2) return null;
    this.learnArp(t);
    const s = this.buildHops(t, n, r);
    if (this.mode === "simulation") {
      for (const i of s)
        this.pduEvents.push({
          id: ++this.pduSeq,
          status: "queued",
          at: null,
          kind: n,
          hop: i
        });
      return this.pduEvents.length > 300 && this.pduEvents.splice(0, this.pduEvents.length - 300), this.onChange(), null;
    }
    const o = {
      id: Ha(),
      kind: n,
      path: t,
      meta: r,
      startedAt: this.clock,
      arrivesAt: this.clock + _r * (t.length - 1),
      hopMs: _r
    };
    this.packets.push(o), this.packets.length > 120 && this.packets.shift();
    for (const i of s) this.commitHop(i);
    return this.onChange(), o;
  }
  /** Advance one queued hop. Returns the event, or null when the queue is empty. */
  step() {
    const t = this.pduEvents.find((n) => n.status === "queued");
    return t ? (t.status = "done", t.at = this.clock, this.commitHop(t.hop), this.packets.push({
      id: Ha(),
      kind: t.kind,
      path: [t.hop.fromId, t.hop.toId],
      meta: {},
      startedAt: this.clock,
      arrivesAt: this.clock + _r,
      hopMs: _r
    }), this.clock += _r, this.onChange(), t) : null;
  }
  /** Run the whole queue out at once. */
  flushPdu() {
    let t = 0;
    for (; this.pduEvents.some((n) => n.status === "queued") && t++ < 500; ) this.step();
  }
  get queuedPdu() {
    return this.pduEvents.filter((t) => t.status === "queued").length;
  }
  /**
   * Manufacture capture records for a transmission.
   *
   * One frame per hop, because that is what a capture would really contain:
   * the same conversation appears separately on each segment it crosses, and
   * which segments a sniffer can see is exactly the lesson.
   */
  buildHops(t, n, r = {}) {
    const s = this.getTopology(), o = new Map(s.devices.map((p) => [p.id, p])), i = o.get(t[0]), l = o.get(t[t.length - 1]);
    if (!i || !l) return [];
    const c = r.srcIp || _(i), u = r.dstIp || _(l), d = [];
    for (let p = 0; p < t.length - 1; p++) {
      const h = o.get(t[p]), f = o.get(t[p + 1]);
      if (!h || !f) continue;
      const g = vt(s).get(h.id), w = Lu({
        topology: s,
        from: h,
        to: f,
        kind: n,
        clock: this.clock,
        srcIp: c,
        dstIp: u,
        meta: { ...r, dbm: g ? g.dbm : void 0, ssid: g ? g.ssid : r.ssid }
      }), k = s.devices.filter((m) => (m.capturing || m.id === h.id || m.id === f.id) && Q0(s, m, h, f)).map((m) => m.id);
      d.push({
        index: p,
        total: t.length - 1,
        path: t,
        fromId: h.id,
        toId: f.id,
        fromName: h.hostname,
        toName: f.hostname,
        frame: w,
        witnesses: k
      });
    }
    return d;
  }
  /** Write one hop's frame into the capture buffer. */
  commitHop(t) {
    !t || !t.frame || this.capture.add(t.frame, t.witnesses);
  }
  /**
   * Manufacture capture records for a transmission.
   *
   * One frame per hop, because that is what a capture would really contain:
   * the same conversation appears separately on each segment it crosses, and
   * which segments a sniffer can see is exactly the lesson.
   */
  record(t, n, r = {}) {
    for (const s of this.buildHops(t, n, r)) this.commitHop(s);
  }
  /** Emit a frame that exists only in the air, with no path (beacons, deauth). */
  recordAir(t, n, r, s = {}) {
    const o = this.getTopology(), i = Lu({
      topology: o,
      from: t,
      to: n,
      kind: r,
      clock: this.clock,
      srcIp: _(t),
      dstIp: _(n),
      meta: s
    }), l = I0(o, t, n).filter((u) => u.capturing && u.radio.monitorMode).map((u) => u.id), c = [.../* @__PURE__ */ new Set([t.id, n.id, ...l])];
    return this.capture.add(i, c), this.onChange(), i;
  }
  /** Where a packet sits right now, in canvas coordinates, or null. */
  positionOf(t, n) {
    const r = this.clock - t.startedAt;
    if (r < 0) return null;
    const s = Math.min(Math.floor(r / t.hopMs), t.path.length - 2), o = Math.min(1, (r - s * t.hopMs) / t.hopMs), i = n.get(t.path[s]), l = n.get(t.path[s + 1]);
    return !i || !l ? null : { x: i.x + (l.x - i.x) * o, y: i.y + (l.y - i.y) * o };
  }
  // ------------------------------------------------------------- delivery
  /**
   * Decide whether `src` can reach `target`, and by which path.
   * Mirrors the real decision order so the CLI can explain failures.
   *
   * @returns {{ok:boolean, reason:string, code:string, path:string[]|null,
   *            viaSpoof:boolean, ttl:number}}
   */
  adjudicate(t, n) {
    const r = this.getTopology(), s = (g, w) => ({ ok: !1, code: g, reason: w, path: null, viaSpoof: !1, ttl: 0 }), o = _(t);
    if (!o) return s("no-src-ip", "no IP address configured on the source interface");
    const i = Je(r, n);
    if (!i) {
      const g = r.devices.some((w) => w.services.dns && Object.keys(w.dnsZone).length);
      return s("unknown-host", g ? "name not present in any DNS zone" : "name or service not known");
    }
    if (i.id === t.id)
      return { ok: !0, code: "loopback", reason: "loopback", path: [t.id], viaSpoof: !1, ttl: 64 };
    const l = _(i);
    if (!l) return s("no-dst-ip", `${i.hostname} has no IP address configured`);
    const c = G(r, t.id, i.id);
    if (!c) return s("no-path", "no cable path to the destination — check your wiring");
    const u = this.portalGate(t, i);
    if (u) return s("portal", u);
    const d = rr(t);
    if (!Jr(o, l, d.mask)) {
      if (!t.gateway || !$e(t.gateway))
        return s("no-gateway", "destination is off-subnet and no default gateway is set");
      const g = Je(r, t.gateway);
      if (!g) return s("gateway-unreachable", `default gateway ${t.gateway} does not exist`);
      if (!G(r, t.id, g.id))
        return s("gateway-unreachable", `default gateway ${t.gateway} is not reachable`);
      if (!r.devices.some(
        (k) => (k.role === "router" || k.role === "l3switch") && G(r, t.id, k.id) && G(r, k.id, i.id)
      )) return s("no-route", "no router joins these two subnets");
    }
    const h = this.aclVerdict(c, o, l);
    if (h) return { ...s("acl-deny", `blocked by ACL on ${h.hostname}`), path: c };
    if (i.runtime.unresponsive)
      return { ...s("host-down", `${i.hostname} is not responding (service saturated)`), path: c };
    const f = this.spoofDetour(t, i, c);
    return {
      ok: !0,
      code: "ok",
      reason: "reachable",
      path: f.path,
      viaSpoof: f.viaSpoof,
      ttl: 64 - (f.path.length - 2)
    };
  }
  /**
   * Is this source stuck behind a captive portal?
   *
   * Traffic to the access point itself is always allowed — that is how the
   * sign-in page is reachable in the first place — as is anything on the same
   * cell, so a student can still prove the radio works while locked out.
   */
  portalGate(t, n) {
    var l;
    const r = this.getTopology(), s = vt(r).get(t.id);
    if (!s) return null;
    const o = r.devices.find((c) => c.id === s.apId);
    return !((l = o == null ? void 0 : o.ap) != null && l.portal) || n.id === o.id || hf(r, o, t) ? null : `associated to ${o.ap.portalName || o.ap.ssid || "the hotspot"} but not signed in — open the portal and authenticate first`;
  }
  /** First firewall on the path whose ACL denies this flow, or null. */
  aclVerdict(t, n, r) {
    const s = this.getTopology(), o = new Map(s.devices.map((i) => [i.id, i]));
    for (const i of t) {
      const l = o.get(i);
      if (!(!l || !l.acl || l.acl.length === 0))
        for (const c of l.acl) {
          const u = (c.source === "any" || c.source === n) && (c.dest === "any" || c.dest === r);
          if (u && c.action === "deny") return l;
          if (u && c.action === "permit") break;
        }
    }
    return null;
  }
  /**
   * Populate ARP caches from traffic that actually flowed.
   *
   * Before a frame can leave a host it needs the destination's MAC, so every
   * delivery implies a resolution first. Both ends of each L2 adjacency learn
   * each other, because the responder caches the requester's details from the
   * request — which is also precisely why ARP is forgeable, and why the
   * spoofing exercise works at all.
   *
   * Switches and hubs are skipped: they are transparent at layer 3 and hold a
   * MAC address table instead, which `show mac address-table` builds from the
   * cabling. Only interfaces with an address take part.
   *
   * A poisoned or static entry is never overwritten. If legitimate traffic
   * quietly healed a poisoned cache the MitM lesson would undo itself, and a
   * real host would not correct it either — it has no way to know.
   */
  learnArp(t) {
    const n = this.getTopology(), r = new Map(n.devices.map((o) => [o.id, o])), s = t.map((o) => r.get(o)).filter((o) => o && o.interfaces.some((i) => i.ip));
    for (let o = 0; o < s.length - 1; o++) {
      const i = s[o], l = s[o + 1];
      for (const c of i.interfaces) {
        if (!c.ip) continue;
        const u = l.interfaces.find((d) => d.ip && Jr(c.ip, d.ip, c.mask));
        if (u) {
          this.cacheArp(i, u.ip, u.mac), this.cacheArp(l, c.ip, c.mac);
          break;
        }
      }
    }
  }
  /** Write one ARP entry, leaving poisoned and static entries alone. */
  cacheArp(t, n, r) {
    if (!t || !n || !r) return;
    const s = t.arp[n];
    s && (s.spoofed || s.static) || (t.arp[n] = { mac: r, static: !1, spoofed: !1, at: this.clock, age: 0 });
  }
  /**
   * Write the current wireless associations back onto the stations.
   *
   * `associations()` derives the picture from geometry and security every
   * time it is asked, but several things need the answer on the device
   * itself: the front panel's link LED, `ipconfig`, and DHCP, which will not
   * offer an address to something it believes is unplugged. Without this the
   * map was computed and thrown away, so a wireless client could sit inside
   * a cell quite happily and still never come up.
   */
  syncAssociations() {
    const t = this.getTopology(), n = vt(t);
    for (const r of t.devices) {
      if (!r.radio) continue;
      const s = n.get(r.id);
      r.radio.associatedTo = s ? s.apId : null, r.radio.dbm = s ? s.dbm : null;
    }
  }
  /**
   * Age the cache, the way a real one expires.
   *
   * `show ip arp` prints an age in minutes, so entries have to get older or
   * the column is a constant zero. Entries are dropped well before a real
   * four-hour timeout — on a lab clock nobody waits that long to see an entry
   * disappear, and watching one expire is part of the lesson.
   */
  ageArp() {
    const t = this.getTopology();
    for (const n of t.devices)
      for (const [r, s] of Object.entries(n.arp || {}))
        s.static || (s.age = Math.floor((this.clock - (s.at ?? this.clock)) / 6e4), !s.spoofed && s.age >= kx && delete n.arp[r]);
  }
  /**
   * If the source's ARP entry for its next hop has been poisoned, splice the
   * attacker into the path — this is what makes the MitM lesson visible.
   */
  spoofDetour(t, n, r) {
    const s = this.getTopology(), o = Jr(_(t), _(n), rr(t).mask) ? _(n) : t.gateway, i = t.arp[o];
    if (!i || !i.spoofed || !i.byDeviceId) return { path: r, viaSpoof: !1 };
    const l = s.devices.find((d) => d.id === i.byDeviceId);
    if (!l) return { path: r, viaSpoof: !1 };
    const c = G(s, t.id, l.id), u = G(s, l.id, n.id);
    return !c || !u ? { path: r, viaSpoof: !1 } : { path: [...c, ...u.slice(1)], viaSpoof: !0 };
  }
  // ------------------------------------------------------------- services
  /** ICMP echo, four probes, logged to the issuing device's console. */
  ping(t, n, r, { count: s = 4 } = {}) {
    const o = this.adjudicate(t, n), i = this.getTopology(), l = Je(i, n), c = l ? _(l) : n;
    if (!o.ok) {
      if (this.log(r, `PING ${n}: ${o.reason}`, "error"), o.path) {
        for (let u = 0; u < s; u++)
          this.schedule(u * 400, () => this.log(r, `Request timeout for icmp_seq ${u}`, "error"));
        this.schedule(s * 400, () => {
          this.log(r, `--- ${c} statistics --- ${s} sent, 0 received, 100% loss`, "error");
        });
      }
      return o;
    }
    this.log(r, `PING ${c} (${l.hostname}) 56 data bytes`, "info"), o.viaSpoof && this.log(r, "(frames are traversing an unexpected hop — ARP cache may be poisoned)", "warn");
    for (let u = 0; u < s; u++)
      this.schedule(u * 420, () => {
        this.emit(o.path, "icmp", { seq: u }), t.runtime.packetsOut += 1, l.runtime.packetsIn += 1;
        const d = (o.path.length - 1) * 0.6 + Math.random() * 1.8;
        this.log(
          r,
          `64 bytes from ${c}: icmp_seq=${u} ttl=${o.ttl} time=${d.toFixed(2)} ms`,
          "success"
        ), this.onChange();
      });
    return this.schedule(s * 420 + 120, () => {
      this.log(r, `--- ${c} statistics --- ${s} sent, ${s} received, 0% loss`, "success"), t.stats = t.stats || {}, t.stats.lastPingOk = n, this.onChange();
    }), o;
  }
  traceroute(t, n, r) {
    const s = this.adjudicate(t, n);
    if (!s.ok || !s.path)
      return this.log(r, `traceroute: ${s.reason}`, "error"), s;
    const o = this.getTopology(), i = new Map(o.devices.map((c) => [c.id, c])), l = s.path.slice(1).map((c) => i.get(c)).filter(Boolean);
    return this.log(r, `traceroute to ${n}, 30 hops max`, "info"), l.forEach((c, u) => {
      this.schedule(u * 260, () => {
        const d = (u + 1) * 0.8 + Math.random() * 2;
        this.log(
          r,
          ` ${u + 1}  ${c.hostname} (${_(c) || "*"})  ${d.toFixed(2)} ms`,
          u === l.length - 1 ? "success" : "info"
        );
      });
    }), this.emit(s.path, "icmp", { trace: !0 }), s;
  }
  /**
   * Allocate an address from a server's pool.
   *
   * The pool is derived from the server's own address rather than hardcoded,
   * because a server sitting on 192.168.10.0/24 handing out 192.168.1.x is
   * the kind of silently-broken behaviour that costs a student an afternoon.
   * An existing lease is returned unchanged, so re-requesting is idempotent.
   */
  lease(t, n) {
    return ix(t, n, this.getTopology(), this.clock);
  }
  /**
   * Hand addresses to anything waiting for one.
   *
   * A PC plugged into a live network gets an address without anyone typing a
   * command, and the simulator should behave the same way. Only interfaces
   * marked `addressing: 'dhcp'` are touched, so setting an address by hand —
   * or switching the interface to Static — is never overwritten.
   */
  serveDhcp() {
    var r, s;
    const t = this.getTopology(), n = t.devices.filter((o) => o.services.dhcp && _(o));
    if (n.length)
      for (const o of t.devices) {
        if (o.role === "attacker") continue;
        const i = o.interfaces.find((h) => h.addressing === "dhcp" && h.media !== "console");
        if (!i || i.ip || !(i.link || ((r = o.radio) == null ? void 0 : r.associatedTo))) continue;
        const c = n.find((h) => h.id !== o.id && G(t, o.id, h.id));
        if (!c) continue;
        const u = this.lease(c, o);
        if (!u) {
          const h = ia(c);
          o.runtime.dhcpWarned || (o.runtime.dhcpWarned = !0, this.log("system", `${o.hostname}: no DHCPOFFER — ${h.ready ? `${c.hostname}'s scope is exhausted` : `${c.hostname}'s scope is unusable (${h.reason})`}.`, "warn"));
          continue;
        }
        o.runtime.dhcpWarned = !1, i.ip = u, i.mask = ((s = rr(c)) == null ? void 0 : s.mask) || "255.255.255.0", i.enabled = !0;
        const d = t.devices.find(
          (h) => (h.role === "router" || h.role === "l3switch") && _(h) && G(t, o.id, h.id)
        );
        d && (o.gateway = _(d));
        const p = G(t, o.id, c.id);
        p && this.emit(p, "dhcp", { lease: u }), this.log(
          "system",
          `${o.hostname}: DHCPACK from ${c.hostname} — leased ${u}${o.gateway ? `, gateway ${o.gateway}` : ""}.`,
          "success"
        ), this.onChange();
      }
  }
  /** DHCP DISCOVER→OFFER→REQUEST→ACK against any reachable DHCP server. */
  dhcpRequest(t, n) {
    const r = this.getTopology(), s = r.devices.find(
      (c) => c.services.dhcp && G(r, t.id, c.id)
    );
    if (!s)
      return this.log(n, "DHCPDISCOVER on eth0 … no DHCPOFFERS received", "error"), null;
    const o = this.lease(s, t);
    if (!o)
      return this.log(n, "DHCPDISCOVER on eth0 … offered pool is exhausted", "error"), null;
    const i = G(r, t.id, s.id), l = [
      ["DHCPDISCOVER on eth0 to 255.255.255.255 port 67", "info"],
      [`DHCPOFFER of ${o} from ${_(s) || s.hostname}`, "info"],
      [`DHCPREQUEST for ${o}`, "info"],
      [`DHCPACK of ${o} — lease bound`, "success"]
    ];
    return l.forEach(([c, u], d) => {
      this.schedule(d * 320, () => {
        var p;
        if (this.log(n, c, u), i && this.emit(d % 2 === 0 ? i : [...i].reverse(), "dhcp"), d === l.length - 1) {
          const h = t.interfaces.find((g) => g.media !== "console") || t.interfaces[0];
          h.ip = o, h.mask = ((p = rr(s)) == null ? void 0 : p.mask) || "255.255.255.0", h.enabled = !0;
          const f = r.devices.find(
            (g) => (g.role === "router" || g.role === "l3switch") && _(g) && G(r, t.id, g.id)
          );
          f && (t.gateway = _(f)), this.onChange();
        }
      });
    }), o;
  }
  /** Resolve a name through a reachable DNS server's zone file. */
  dnsLookup(t, n, r) {
    const s = this.getTopology(), o = s.devices.find(
      (c) => c.services.dns && G(s, t.id, c.id)
    );
    if (!o)
      return this.log(r, ";; connection timed out; no servers could be reached", "error"), null;
    const i = G(s, t.id, o.id);
    i && this.emit(i, "dns");
    const l = o.dnsZone[n] || null;
    return this.schedule(240, () => {
      l ? this.log(r, `${n} has address ${l}`, "success") : this.log(r, `** server can't find ${n}: NXDOMAIN`, "error");
    }), l;
  }
  /**
   * Keep a live network looking live.
   *
   * Real segments are never silent: hosts resolve names, fetch pages, refresh
   * ARP entries and renew leases without anyone touching a keyboard. Without
   * this the capture pane only ever shows what the student just typed, which
   * makes "find the interesting frame" far easier than it should be.
   *
   * Only in realtime mode — Simulation Mode would fill the step queue with
   * noise the student never asked for.
   */
  startAmbientTraffic() {
    this.cancel(this._ambient), this._ambient = this.every(1800, () => {
      if (this.mode !== "realtime" || !this.ambient) return;
      const t = this.getTopology(), n = t.devices.filter(
        (i) => (i.role === "host" || i.role === "iot") && _(i) && !i.runtime.unresponsive
      );
      if (!n.length) return;
      const r = n[Math.floor(Math.random() * n.length)], s = this.pickAmbientFlow(t, r);
      if (!s) return;
      const o = this.adjudicate(r, s.target);
      !o.ok || !o.path || (this.emit(o.path, s.kind, { ...s.meta, ambient: !0 }), r.runtime.packetsOut += 1);
    }, "ambient");
  }
  /** Choose something plausible for this host to be doing. */
  pickAmbientFlow(t, n) {
    const r = t.devices.filter((d) => d.id !== n.id && _(d));
    if (!r.length) return null;
    const s = r.find((d) => d.services.dns), o = r.find((d) => d.services.http), i = n.gateway ? r.find((d) => _(d) === n.gateway) : null, l = [];
    if (s && l.push({ kind: "dns", target: _(s), meta: { name: "time.lab" }, weight: 3 }), o && l.push({ kind: "http", target: _(o), meta: { body: "GET /index.html HTTP/1.1" }, weight: 3 }), i && l.push({ kind: "arp", target: _(i), meta: { reply: !1 }, weight: 2 }), i && l.push({ kind: "icmp", target: _(i), meta: { seq: 1 }, weight: 1 }), !l.length) return null;
    const c = l.reduce((d, p) => d + p.weight, 0);
    let u = Math.random() * c;
    for (const d of l)
      if (u -= d.weight, u <= 0) return d;
    return l[0];
  }
  setAmbient(t) {
    this.ambient = !!t, this.onChange();
  }
  /** Start IoT telemetry publishing for every sensor/camera with a broker. */
  startTelemetry() {
    this.cancel(this._telemetry), this._telemetry = this.every(2200, () => {
      const t = this.getTopology();
      this.syncAssociations(), this.ageArp(), this.serveDhcp();
      const n = t.devices.filter((r) => r.services.mqtt && r.role === "host");
      for (const r of t.devices) {
        if (r.role !== "iot" || !r.services.mqtt || !_(r)) continue;
        const s = n.find((i) => G(t, r.id, i.id));
        if (!s) continue;
        const o = G(t, r.id, s.id);
        o && this.emit(o, "mqtt", { from: r.hostname }), r.runtime.packetsOut += 1, s.runtime.packetsIn += 1;
      }
      this.onChange();
    }, "telemetry");
  }
}
function Nx(e, t) {
  const n = e.devices;
  return {
    topology: e,
    devices: n,
    links: e.links,
    engine: t,
    /** First device matching a predicate or role name. */
    // A string matches a role, a type id, or a type id that used to exist —
    // "webserver" now means "the server running a web server".
    find: (r) => n.find(Fu(r)),
    findAll: (r) => n.filter(Fu(r)),
    ipOf: _,
    ifaceOf: rr,
    reachable: (r, s) => !!(r && s && H0(e, r.id, s.id)),
    path: (r, s) => r && s ? G(e, r.id, s.id) : null,
    resolve: (r) => Je(e, r),
    ips: () => uf(e),
    sameSubnet: Jr,
    maskToPrefix: qe
  };
}
function Cx(e, t, n) {
  const r = Nx(t, n), s = e.objectives.map((l) => {
    let c = !1, u = "";
    try {
      const d = l.check(r);
      typeof d == "object" && d !== null ? (c = !!d.pass, u = d.detail || "") : c = !!d;
    } catch (d) {
      c = !1, u = `check error: ${d.message}`;
    }
    return {
      id: l.id,
      title: l.title,
      hint: l.hint,
      points: l.points ?? 1,
      section: l.section || "Tasks",
      pass: c,
      detail: u
    };
  }), o = s.reduce((l, c) => l + c.points, 0), i = s.reduce((l, c) => l + (c.pass ? c.points : 0), 0);
  return {
    objectives: s,
    earned: i,
    total: o,
    percent: o === 0 ? 0 : Math.round(i / o * 100),
    complete: i === o && o > 0,
    gradedAt: Date.now()
  };
}
function $x(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.objectives)
    t.has(n.section) || t.set(n.section, []), t.get(n.section).push(n);
  return [...t.entries()].map(([n, r]) => ({ section: n, objectives: r }));
}
function ff(e) {
  return e >= 90 ? "A" : e >= 80 ? "B" : e >= 70 ? "C" : e >= 60 ? "D" : "F";
}
function _u(e, t) {
  return {
    labId: e.id,
    labTitle: e.title,
    score: { raw: t.earned, max: t.total, scaled: t.total ? t.earned / t.total : 0 },
    percent: t.percent,
    grade: ff(t.percent),
    completion: t.complete ? "completed" : "incomplete",
    success: t.complete ? "passed" : "unknown",
    objectives: t.objectives.map((n) => ({ id: n.id, title: n.title, pass: n.pass, points: n.points })),
    gradedAt: new Date(t.gradedAt).toISOString()
  };
}
function Fu(e) {
  if (typeof e != "string") return e;
  const t = g0(e);
  return (n) => n.role === e || n.typeId === e || (t ? t(n) : !1);
}
const Ua = "192.168.10.0", qs = "255.255.255.0", Pt = "192.168.10.1", mf = {
  id: "lab-01-secure-segment",
  title: "Build It, Break It, Defend It",
  subtitle: "Lab 1 · Access-layer design and host hardening",
  estimatedMinutes: 40,
  brief: [
    "You are commissioning a small access segment for a teaching lab: one router acting as the gateway, a switch, a workstation and a web server.",
    "First make it work. Then run the synthetic cyber exercises against the server to see how it fails. Finally apply the defences and prove the same exercises no longer succeed.",
    "Everything here is simulated inside this browser tab — no traffic leaves your machine."
  ],
  steps: [
    "Place a Router, a Layer 2 Switch, a PC Workstation and a Web Server on the canvas.",
    "Cable the PC and the server to the switch, and the switch to the router. Watch for green links — a red link means the wrong cable type.",
    `Address the router's first interface as ${Pt} / ${qs} and bring it up (CLI: interface, ip address, no shutdown).`,
    `Give the PC and the server addresses inside ${Ua}/24 and set their default gateway to ${Pt}.`,
    "From the PC console, ping the server to prove end-to-end connectivity.",
    "Open the Cyber Range panel. Run Brute-Force, SYN Flood and SQL Injection against the web server and read the outcome lines.",
    "Harden the server: a password outside the demo wordlist, an attempt limit, SYN cookies, and input sanitisation.",
    "Re-run the three exercises. Each should now report that the defence held, then press Check Solution."
  ],
  objectives: [
    // ---- Section: Topology -------------------------------------------
    {
      id: "topology-parts",
      section: "Topology",
      title: "Router, switch, workstation and web server all present",
      points: 1,
      hint: "Drag all four from the sidebar palette onto the canvas.",
      check: (e) => !!e.find("router") && !!e.find("switch") && !!e.find("pc") && !!e.find("webserver")
    },
    {
      id: "topology-cabled",
      section: "Topology",
      title: "PC and web server both reach the router over live cables",
      points: 1,
      hint: "Pick a cable in the palette, then click two devices. Straight-through for PC→switch and switch→router.",
      check: (e) => {
        const t = e.find("router"), n = e.find("pc"), r = e.find("webserver");
        return e.reachable(n, t) && e.reachable(r, t);
      }
    },
    // ---- Section: Addressing -----------------------------------------
    {
      id: "router-addressed",
      section: "Addressing",
      title: `Router gateway interface is ${Pt}/24 and up`,
      points: 2,
      hint: `CLI: enable → configure terminal → interface Gi0/1 → ip address ${Pt} ${qs} → no shutdown`,
      check: (e) => {
        const t = e.find("router");
        if (!t) return !1;
        const n = t.interfaces.find((r) => r.ip === Pt);
        return !!(n && n.enabled && e.maskToPrefix(n.mask) === 24);
      }
    },
    {
      id: "hosts-addressed",
      section: "Addressing",
      title: `PC and server addressed inside ${Ua}/24 with the correct gateway`,
      points: 2,
      hint: `Each host needs an address in ${Ua}/24 and default gateway ${Pt}.`,
      check: (e) => {
        const t = (n) => {
          if (!n) return !1;
          const r = e.ipOf(n);
          return !!r && e.sameSubnet(r, Pt, qs) && n.gateway === Pt;
        };
        return t(e.find("pc")) && t(e.find("webserver"));
      }
    },
    {
      id: "connectivity-proven",
      section: "Addressing",
      title: "A successful ping has been recorded from the PC",
      points: 1,
      hint: "Open the PC console and run: ping <server address>",
      check: (e) => {
        const t = e.find("pc"), n = e.find("webserver");
        if (!t || !n) return !1;
        const r = e.ipOf(n);
        return !!(t.stats && t.stats.lastPingOk) && (t.stats.lastPingOk === r || t.stats.lastPingOk === n.hostname);
      }
    },
    // ---- Section: Exercises ------------------------------------------
    {
      id: "exercises-run",
      section: "Cyber Exercises",
      title: "At least one synthetic exercise has been run against the server",
      points: 1,
      hint: "Open the Cyber Range panel, choose the web server as target, and launch an exercise.",
      check: (e) => {
        const t = e.find("webserver");
        return !!(t && t.runtime.lastExercise);
      }
    },
    // ---- Section: Hardening ------------------------------------------
    {
      id: "strong-credentials",
      section: "Hardening",
      title: "Server password is outside the demo wordlist and at least 10 characters",
      points: 2,
      hint: "Device → Security tab, or run: passwd <new-password> in the server console.",
      check: (e) => {
        const t = e.find("webserver");
        if (!t) return !1;
        const n = ["123456", "password", "admin", "letmein", "qwerty", "welcome", "root", "toor", "changeme", "admin123"], r = t.security.password || "";
        return r.length >= 10 && !n.includes(r);
      }
    },
    {
      id: "login-throttle",
      section: "Hardening",
      title: "An authentication attempt limit is configured on the server",
      points: 1,
      hint: "Device → Security tab → Max auth tries (3 is typical). The brute-force drill then locks out.",
      check: (e) => {
        const t = e.find("webserver");
        return !!(t && t.security.maxAuthTries > 0);
      }
    },
    {
      id: "syn-cookies",
      section: "Hardening",
      title: "SYN cookies enabled, and the flood no longer takes the server down",
      points: 2,
      hint: "Device → Security tab → SYN cookies. Then re-run the SYN Flood exercise.",
      check: (e) => {
        const t = e.find("webserver");
        return t ? t.security.synCookies && !t.runtime.unresponsive : !1;
      }
    },
    {
      id: "input-sanitised",
      section: "Hardening",
      title: "Web application uses parameterised queries (input sanitisation on)",
      points: 2,
      hint: "Device → Security tab → Input sanitisation. Then re-run SQL Injection: it should return 400.",
      check: (e) => {
        const t = e.find("webserver");
        return !!(t && t.security.inputSanitised);
      }
    },
    {
      id: "not-compromised",
      section: "Hardening",
      title: "Server is not currently in a compromised state",
      points: 1,
      hint: "Apply the defences, then re-run the exercises — a defended run clears the flag.",
      check: (e) => {
        const t = e.find("webserver");
        return t ? t.runtime.compromised === !1 : !1;
      }
    }
  ],
  cheatsheet: {
    "Cisco IOS": [
      ["enable", "enter privileged mode"],
      ["configure terminal", "enter global config"],
      ["interface Gi0/1", "select an interface"],
      [`ip address ${Pt} ${qs}`, "address the interface"],
      ["no shutdown", "bring the interface up"],
      ["vlan 20", "create a VLAN"],
      ["ip route 10.0.0.0 255.0.0.0 192.168.10.2", "static route"],
      ["access-list 101 deny ip host 192.168.10.50 any", "filter a source"],
      ["show ip interface brief", "interface summary"],
      ["show running-config", "full configuration"],
      ["show arp", "ARP cache (spots poisoning)"],
      ["write memory", "save configuration"]
    ],
    "Linux / IoT": [
      ["ip a", "show addresses"],
      ["ip route", "show routing table"],
      ["ip neigh", "ARP neighbour table"],
      ["ping 192.168.10.80", "four ICMP echoes"],
      ["traceroute 192.168.10.1", "hop-by-hop path"],
      ["dig web.lab.local", "DNS lookup"],
      ["dhclient", "request a DHCP lease"],
      ["ssh admin@192.168.10.80", "open a simulated session"],
      ["systemctl stop http", "stop a service"],
      ["sqlquery WebSrv0 ' OR 1=1--", "submit input to the mock app"],
      ["passwd MyStr0ngPass!", "change the local password"],
      ["top", "CPU, memory and drop counters"]
    ]
  }
}, Px = "LAB-WIFI", Ex = ["123456", "password", "admin", "letmein", "qwerty", "welcome", "root", "toor", "changeme", "admin123"], Ax = {
  id: "lab-02-clear-air",
  title: "Clear Air",
  subtitle: "Lab 2 · Wireless capture and rogue access points",
  estimatedMinutes: 45,
  brief: [
    "A threat actor is parked within range of your campus access point. It has no cable to your network and it does not need one: radio reaches past the walls, and a monitor-mode receiver hears every frame in the cell.",
    "You will prove that an open SSID hands over credentials, then watch the same capture become useless once encryption is on. After that you will defend against two management-frame attacks: deauthentication and an evil twin.",
    "Nothing here transmits. Range is distance between nodes on the canvas and every captured frame is manufactured by the simulator."
  ],
  steps: [
    `Place a Wireless AP and a Laptop inside its cell, plus a Threat Actor node in range. The starter topology already has all three on SSID "${Px}".`,
    "Open the AP and set Security to Open (no encryption). This is the vulnerable state.",
    "Open the Threat Actor, go to Toolkit and run WiFi Snooping.",
    `Switch to the Packet Capture tab. Filter on "plaintext" and find the HTTP POST — the laptop's password is in the payload.`,
    'Now set the AP back to WPA2-PSK and run WiFi Snooping again. Filter on "encrypted": the headers still show, the payloads do not.',
    "Run Deauthentication against the laptop. Watch its association link vanish from the canvas.",
    "Enable 802.11w Protected Management Frames on the AP, then re-run the deauth. It should be rejected.",
    "Run the Evil Twin exercise. Then set the laptop's Preferred SSID so it stops auto-joining, and confirm the rogue AP can no longer capture it.",
    "Press Check Solution."
  ],
  objectives: [
    /* ---- Build the cell ---- */
    {
      id: "wifi-parts",
      section: "Wireless segment",
      title: "An access point, a wireless client and a threat actor are placed",
      points: 1,
      hint: "All three are in the palette — the Threat Actor is under Red Team.",
      check: (e) => !!e.find((t) => t.ap) && !!e.find((t) => t.radio && !t.ap && t.role !== "attacker") && !!e.find("attacker")
    },
    {
      id: "wifi-associated",
      section: "Wireless segment",
      title: "A client has associated with the access point",
      points: 1,
      hint: "Drag the client inside the dashed RF circle. The association link appears automatically.",
      check: (e) => {
        const t = e.find((r) => r.radio && !r.ap && r.role !== "attacker"), n = e.find((r) => r.ap && !r.ap.rogue);
        return !!(t && n && e.reachable(t, n));
      }
    },
    {
      id: "wifi-uplink",
      section: "Wireless segment",
      title: "The access point has a wired uplink into the LAN",
      points: 1,
      hint: "Cable the AP to the switch with a straight-through cable.",
      check: (e) => {
        const t = e.find((r) => r.ap && !r.ap.rogue), n = e.find("switch") || e.find("router");
        return !!(t && n && e.topology.links.some(
          (r) => !r.down && (r.a === t.id && r.b === n.id || r.b === t.id && r.a === n.id)
        ));
      }
    },
    /* ---- Run the attack ---- */
    {
      id: "capture-taken",
      section: "Capture",
      title: "The threat actor has captured frames in monitor mode",
      points: 2,
      hint: "Open the Threat Actor → Toolkit → WiFi Snooping.",
      check: (e) => {
        const t = e.find("attacker");
        return !t || !t.radio || !t.radio.monitorMode ? !1 : e.engine.capture.for(t.id).length > 0;
      }
    },
    {
      id: "cleartext-seen",
      section: "Capture",
      title: "A cleartext credential was recovered from the air at least once",
      points: 2,
      hint: "Set the AP to Open, then run WiFi Snooping. The POST /login payload is readable.",
      check: (e) => e.find("attacker") ? e.engine.capture.frames.some(
        (r) => !r.encrypted && r.layers.payload && /password=/.test(r.layers.payload.text || "")
      ) : !1
    },
    /* ---- Defend ---- */
    {
      id: "wpa-enabled",
      section: "Hardening",
      title: "The access point now uses WPA2 or WPA3",
      points: 2,
      hint: "AP → Wireless → Security. Open and WEP both fail this check.",
      check: (e) => {
        const t = e.find((n) => n.ap && !n.ap.rogue);
        return !!(t && ["wpa2", "wpa3"].includes(t.ap.security));
      }
    },
    {
      id: "pmf-enabled",
      section: "Hardening",
      title: "802.11w Protected Management Frames is enabled on the AP",
      points: 2,
      hint: "AP → Wireless → Protected Management Frames. This defeats the deauth exercise.",
      check: (e) => {
        const t = e.find((n) => n.ap && !n.ap.rogue);
        return !!(t && t.security.managementFrameProtection);
      }
    },
    {
      id: "ssid-pinned",
      section: "Hardening",
      title: "The wireless client pins a preferred SSID instead of auto-joining",
      points: 2,
      hint: "Client → Wireless → Preferred SSID. A blank value is what the evil twin exploits.",
      check: (e) => {
        const t = e.find((n) => n.radio && !n.ap && n.role !== "attacker");
        return !!(t && t.radio.ssid);
      }
    },
    {
      id: "strong-passphrase",
      section: "Hardening",
      title: "The WPA passphrase is not a wordlist entry and is at least 12 characters",
      points: 1,
      hint: "AP → Wireless → Passphrase.",
      check: (e) => {
        const t = e.find((r) => r.ap && !r.ap.rogue);
        if (!t) return !1;
        const n = t.ap.passphrase || "";
        return n.length >= 12 && !Ex.includes(n.toLowerCase());
      }
    },
    {
      id: "no-rogue-clients",
      section: "Hardening",
      title: "The Evil Twin exercise was run and no client fell for it",
      points: 1,
      hint: "Run Evil Twin from the Threat Actor. If a client joined the rogue AP, change its wireless settings so it will not, then run it again.",
      // Requires the drill to have actually happened — a topology with no
      // rogue AP has not been tested and so does not earn the point.
      check: (e) => {
        const t = e.findAll((r) => r.ap && r.ap.rogue);
        return t.length ? e.findAll((r) => r.radio && !r.ap).some((r) => t.some((s) => {
          var o;
          return ((o = e.path(r, s)) == null ? void 0 : o.length) === 2;
        })) ? { pass: !1, detail: "a client is still associated with the rogue AP" } : !0 : { pass: !1, detail: "no rogue AP has been stood up yet" };
      }
    }
  ],
  cheatsheet: {
    "Wireless (any radio)": [
      ["iwconfig", "show radio mode and ESSID"],
      ["iwlist scan", "list networks in range with signal and encryption"],
      ["airmon-ng start", "enter monitor mode"],
      ["airodump-ng", "survey BSSIDs and associated stations"],
      ["tcpdump -c 20 wlan", "print the last 20 captured wireless frames"],
      ["tcpdump plaintext", "only frames whose payload is readable"]
    ],
    "Threat actor only": [
      ["nmap WebSrv0", "enumerate open services"],
      ["aireplay-ng --deauth 5 Laptop0", "forge deauthentication frames"],
      ["arpspoof 192.168.10.1", "poison the local ARP caches"],
      ["hydra WebSrv0", "run the credential list against SSH/FTP"]
    ],
    "Capture filters": [
      ["wlan", "frames that travelled through the air"],
      ["encrypted / plaintext", "split by payload confidentiality"],
      ["http", "application-layer requests"],
      ["ip.addr == 192.168.10.50", "one host, either direction"],
      ["tcp.port == 80", "by port number"],
      ["wlan and plaintext", 'combine with "and"']
    ]
  }
}, Do = [mf, Ax], Ix = mf.id;
function sr(e) {
  return Do.find((t) => t.id === e) || Do[0];
}
function la(e, t) {
  var o, i;
  const n = [];
  let r = e;
  const s = /* @__PURE__ */ new Set([e == null ? void 0 : e.id]);
  for (; (i = (o = r == null ? void 0 : r.cli) == null ? void 0 : o.sessions) != null && i.length && t; ) {
    const l = r.cli.sessions[r.cli.sessions.length - 1], c = t.devices.find((u) => u.id === l.targetId);
    if (!c || s.has(c.id)) break;
    s.add(c.id), n.push({ host: r, session: l, device: c }), r = c;
  }
  return { device: r, chain: n };
}
function An(e, t, n, r) {
  return e.cli.sessions || (e.cli.sessions = []), e.cli.sessions.push({ targetId: t.id, protocol: n, user: r, openedAt: Date.now() }), t.runtime.sessions += 1, t.os === "ios" && (t.cli.mode = "user"), { ok: !0 };
}
function Tx(e, t) {
  const { chain: n } = la(e, t);
  if (!n.length) return null;
  const r = n[n.length - 1];
  return r.host.cli.sessions.pop(), r.device;
}
function ws(e, t) {
  e.cli.pending = {
    prompt: t.prompt || "Password: ",
    secret: !0,
    purpose: t.purpose,
    expected: t.expected,
    onSuccess: t.onSuccess,
    onFail: t.onFail,
    tries: t.tries ?? 3,
    used: 0
  };
}
function Mx(e, t, n) {
  var o, i;
  const r = e.cli.pending, s = t.trim();
  if (r.used += 1, s === r.expected) {
    e.cli.pending = null, (o = r.onSuccess) == null || o.call(r, n), n.commit();
    return;
  }
  if (r.used >= r.tries) {
    e.cli.pending = null, n.log("% Bad passwords", "error"), (i = r.onFail) == null || i.call(r, n), n.commit();
    return;
  }
  n.log("% Bad secrets", "error"), n.commit();
}
const Lx = {
  user: ">",
  priv: "#",
  config: "(config)#",
  "config-if": "(config-if)#",
  "config-vlan": "(config-vlan)#",
  "config-line": "(config-line)#"
};
function Dx(e) {
  return `${e.hostname}${Lx[e.cli.mode] || "#"} `;
}
const Ba = { user: 0, priv: 1, config: 2, "config-if": 3, "config-vlan": 3, "config-line": 3 };
function me(e, t) {
  const n = e.toLowerCase(), r = t.find((o) => o === n);
  if (r) return r;
  const s = t.filter((o) => o.startsWith(n));
  return s.length === 1 ? s[0] : null;
}
function gf(e, t, n, r = {}) {
  const { log: s } = n, o = t.trim();
  if (!o) return;
  if (o === "?") return Bx(e, s);
  const i = o.split(/\s+/), l = [
    "enable",
    "disable",
    "show",
    "ping",
    "traceroute",
    "telnet",
    "ssh",
    "write",
    "copy",
    "reload",
    "clear",
    "configure",
    "exit"
  ], c = [
    "interface",
    "ip",
    "no",
    "shutdown",
    "vlan",
    "name",
    "hostname",
    "end",
    "username",
    "access-list",
    "switchport",
    "line",
    "password",
    "login",
    "transport",
    "banner",
    "crypto",
    "service",
    "spanning-tree",
    "description",
    "duplex",
    "speed",
    "do",
    "enable",
    "exit",
    "show"
  ], u = !r.exec && Ba[e.cli.mode] >= 2, d = me(i[0], u ? c : l);
  if (!d) {
    s("% Invalid input detected at '^' marker.", "error");
    return;
  }
  const p = e.cli.mode, h = (f, g) => {
    if (Ba[p] < Ba[f]) {
      s(`% Command authorised at ${f} level — currently ${p}.`, "error");
      return;
    }
    g();
  };
  switch (d) {
    case "enable": {
      const f = me(i[1] || "", ["secret", "password"]);
      if (p === "config" && f) {
        if (!i[2]) return s("% Incomplete command.", "error");
        e.enableSecret = i[2], s(`  enable ${f} set`, "success"), n.commit();
        return;
      }
      const g = e.enableSecret;
      if (!g) {
        e.cli.mode = "priv";
        return;
      }
      ws(e, {
        purpose: "enable",
        expected: g,
        onSuccess: () => {
          e.cli.mode = "priv";
        },
        onFail: (w) => w.log("% Access denied", "error")
      }), n.commit();
      return;
    }
    case "disable":
      e.cli.mode = "user";
      return;
    case "configure":
      return h("priv", () => {
        if (me(i[1] || "terminal", ["terminal", "memory"]) !== "terminal") return s('% Only "configure terminal" is supported.', "error");
        e.cli.mode = "config", s("Enter configuration commands, one per line. End with CNTL/Z.", "dim");
      });
    case "interface":
      return h("config", () => {
        const f = i.slice(1).join("");
        if (!f) return s("% Incomplete command.", "error");
        const g = of(e, f);
        if (!g)
          return s(`% Invalid interface ${f}. Available: ${e.interfaces.map((w) => w.name).join(", ")}`, "error");
        e.cli.ifaceCursor = g.name, e.cli.mode = "config-if";
      });
    case "ip":
      return Rx(e, i, n);
    case "no":
      return zx(e, i, n);
    case "shutdown":
      return h("config-if", () => {
        const f = cn(e);
        f && (f.enabled = !1, s(`%LINK-5-CHANGED: Interface ${f.name}, changed state to administratively down`, "warn"), n.commit());
      });
    case "vlan":
      return h("config", () => {
        const f = Number(i[1]);
        if (!Number.isInteger(f) || f < 1 || f > 4094) return s("% Invalid VLAN id.", "error");
        e.vlans.some((g) => g.id === f) || e.vlans.push({ id: f, name: `VLAN${f}` }), e.cli.mode = "config-vlan", e.cli.vlanCursor = f, n.commit();
      });
    case "name":
      return h("config-vlan", () => {
        const f = e.vlans.find((g) => g.id === e.cli.vlanCursor);
        if (!f) return s("% No VLAN selected.", "error");
        f.name = i.slice(1).join(" ") || f.name, s(`  vlan ${f.id} named ${f.name}`, "success"), n.commit();
      });
    case "hostname":
      return h("config", () => {
        if (!i[1]) return s("% Incomplete command.", "error");
        e.hostname = i[1], n.commit();
      });
    case "username":
      return h("config", () => {
        const f = i[1], g = me(i[2] || "", ["secret", "password"]), w = i[3];
        if (!f || !g || !w) return s("% Usage: username NAME secret PASSWORD", "error");
        e.security.username = f, e.security.password = w, s(`  credentials updated for ${f}`, "success"), n.commit();
      });
    case "access-list":
      return h("config", () => Ox(e, i, n));
    case "exit":
      e.cli.mode = p === "config-if" || p === "config-vlan" || p === "config-line" ? "config" : p === "config" ? "priv" : "user";
      return;
    case "end":
      e.cli.mode = "priv";
      return;
    case "write":
    case "copy":
      return h("priv", () => {
        s("Building configuration...", "dim"), e.cli.saved = !0, n.commit(), n.engine.schedule(300, () => s("[OK]", "success"));
      });
    case "do":
      return gf(e, i.slice(1).join(" "), n, { exec: !0 });
    case "switchport":
      return h("config-if", () => _x(e, i, n));
    case "description":
      return h("config-if", () => {
        const f = cn(e);
        f && (f.description = i.slice(1).join(" "), n.commit());
      });
    case "duplex":
    case "speed":
      return h("config-if", () => {
        const f = cn(e);
        f && (f[d] = i[1], n.commit());
      });
    case "line":
      return h("config", () => Fx(e, i, n));
    case "password":
      return h("config-line", () => {
        if (!i[1]) return s("% Incomplete command.", "error");
        e.lines[e.cli.lineCursor].password = i[1], s("  line password set", "success"), n.commit();
      });
    case "login":
      return h("config-line", () => {
        e.lines[e.cli.lineCursor].login = !0, e.lines[e.cli.lineCursor].password || s("% Login disabled on line — set a password first.", "warn"), n.commit();
      });
    case "transport":
      return h("config-line", () => {
        if (me(i[1] || "", ["input", "output"]) !== "input") return s("% Usage: transport input {telnet|ssh|all|none}", "error");
        const g = (i[2] || "").toLowerCase(), w = { telnet: ["telnet"], ssh: ["ssh"], all: ["telnet", "ssh"], none: [] };
        if (!(g in w)) return s("% Usage: transport input {telnet|ssh|all|none}", "error");
        if (e.lines.vty.transport = [...w[g]], i[3]) {
          const k = i[3].toLowerCase();
          w[k] && (e.lines.vty.transport = [.../* @__PURE__ */ new Set([...e.lines.vty.transport, ...w[k]])]);
        }
        s(`  vty transport input: ${e.lines.vty.transport.join(" ") || "none"}`, "success"), n.commit();
      });
    case "banner":
      return h("config", () => {
        const f = i.slice(2).join(" ").replace(/^[#^]|[#^]$/g, "").trim();
        e.banner = f || "Authorised access only.", s("  banner set", "success"), n.commit();
      });
    case "crypto":
      return h("config", () => {
        if (!(me(i[1] || "", ["key"]) === "key" && /gen/.test(i[2] || ""))) return s("% Usage: crypto key generate rsa", "error");
        if (!e.domainName)
          return s("% Please define a domain-name first (ip domain-name NAME).", "error");
        e.cryptoKey = !0, s("The name for the keys will be: " + e.hostname + "." + e.domainName, "dim"), s("% Generating 1024 bit RSA keys, keys will be non-exportable...[OK]", "success"), n.commit();
      });
    case "service":
      return h("config", () => {
        e.passwordEncryption = /password-encryption/.test(i.slice(1).join(" ")), s("  service password-encryption enabled", "success"), n.commit();
      });
    case "spanning-tree":
      return h("config", () => {
        e.spanningTree = i.slice(1).join(" ") || "mode pvst", s(`  spanning-tree ${e.spanningTree}`, "success"), n.commit();
      });
    case "traceroute":
      if (!i[1]) return s("% Usage: traceroute <ip|host>", "error");
      n.engine.traceroute(e, i[1], n.channel);
      return;
    case "telnet":
    case "ssh":
      return Hx(e, i, d, n);
    case "show":
      return Ux(e, i.slice(1), n);
    case "ping": {
      if (!i[1]) return s("% Usage: ping <ip|hostname>", "error");
      n.engine.ping(e, i[1], n.channel);
      return;
    }
    case "clear":
      me(i[1] || "", ["arp-cache", "counters"]) === "arp-cache" && (e.arp = {}, s("  ARP cache cleared", "success"), n.commit());
      return;
    case "reload":
      return h("priv", () => {
        s("Proceed with reload? [confirm]", "dim"), e.cli.mode = "user", e.arp = {}, n.commit();
      });
    default:
      s(`% Unknown command: ${o}`, "error");
  }
}
function cn(e) {
  return of(e, e.cli.ifaceCursor);
}
function Rx(e, t, n) {
  const { log: r } = n, s = me(t[1] || "", ["address", "route", "default-gateway", "access-group", "name-server", "domain-name", "ssh"]);
  if (s === "address") {
    if (e.cli.mode !== "config-if") return r("% Enter interface configuration mode first.", "error");
    const o = cn(e), [, , i, l] = t;
    if (!$e(i) || !$e(l)) return r("% Invalid IP address or mask.", "error");
    if (qe(l) === null) return r("% Mask is not contiguous.", "error");
    o.ip = i, o.mask = l, o.enabled = !0, r(`  ${o.name} ← ${i}/${qe(l)}`, "success"), n.commit();
    return;
  }
  if (s === "route") {
    if (e.cli.mode !== "config") return r("% Enter global configuration mode first.", "error");
    const [, , o, i, l] = t;
    if (!$e(o) || !$e(i) || !$e(l))
      return r("% Usage: ip route NETWORK MASK NEXT-HOP", "error");
    e.routes.push({ network: o, mask: i, nextHop: l }), r("  static route installed", "success"), n.commit();
    return;
  }
  if (s === "domain-name") {
    if (e.cli.mode !== "config") return r("% Enter global configuration mode first.", "error");
    if (!t[2]) return r("% Usage: ip domain-name NAME", "error");
    e.domainName = t[2], r(`  domain name set to ${t[2]}`, "success"), n.commit();
    return;
  }
  if (s === "default-gateway") {
    if (!$e(t[2])) return r("% Invalid gateway.", "error");
    e.gateway = t[2], n.commit();
    return;
  }
  if (s === "access-group") {
    if (e.cli.mode !== "config-if") return r("% Enter interface configuration mode first.", "error");
    const o = cn(e);
    o.accessGroup = t[2], r(`  access-group ${t[2]} applied to ${o.name}`, "success"), n.commit();
    return;
  }
  r("% Incomplete command.", "error");
}
function zx(e, t, n) {
  const { log: r } = n, s = me(t[1] || "", ["shutdown", "ip"]);
  if (s === "shutdown") {
    if (e.cli.mode !== "config-if") return r("% Enter interface configuration mode first.", "error");
    const o = cn(e);
    o.enabled = !0, r(`%LINK-3-UPDOWN: Interface ${o.name}, changed state to up`, "success"), n.commit();
    return;
  }
  if (s === "ip" && me(t[2] || "", ["address"]) === "address") {
    const o = cn(e);
    o && (o.ip = "", n.commit());
    return;
  }
  r("% Incomplete command.", "error");
}
function Ox(e, t, n) {
  const { log: r } = n, s = t[1], o = me(t[2] || "", ["permit", "deny"]);
  if (!s || !o) return r("% Usage: access-list ID {permit|deny} ip SOURCE DEST", "error");
  const i = t.slice(4), l = (d) => d[0] === "any" ? { value: "any", consumed: 1 } : d[0] === "host" ? { value: d[1], consumed: 2 } : { value: d[0] || "any", consumed: 1 }, c = l(i), u = l(i.slice(c.consumed));
  e.acl.push({ id: s, action: o, source: c.value, dest: u.value, raw: t.join(" ") }), r(`  ACL ${s}: ${o} ${c.value} → ${u.value}`, "success"), n.commit();
}
function _x(e, t, n) {
  const { log: r } = n, s = cn(e);
  if (!s) return r("% Select an interface first.", "error");
  const o = me(t[1] || "", ["mode", "access", "trunk", "nonegotiate", "port-security"]);
  if (o === "mode") {
    const i = me(t[2] || "", ["access", "trunk", "dynamic"]);
    if (!i) return r("% Usage: switchport mode {access|trunk}", "error");
    s.mode = i, r(`  ${s.name} is now a ${i} port`, "success"), n.commit();
    return;
  }
  if (o === "access") {
    if (me(t[2] || "", ["vlan"]) !== "vlan") return r("% Usage: switchport access vlan ID", "error");
    const i = Number(t[3]);
    if (!Number.isInteger(i) || i < 1 || i > 4094) return r("% Invalid VLAN id.", "error");
    e.vlans.some((l) => l.id === i) || (e.vlans.push({ id: i, name: `VLAN${String(i).padStart(4, "0")}` }), r(`% Access VLAN does not exist. Creating vlan ${i}`, "warn")), s.vlan = i, s.mode = s.mode === "trunk" ? "trunk" : "access", r(`  ${s.name} → VLAN ${i}`, "success"), n.commit();
    return;
  }
  if (o === "trunk") {
    const i = me(t[2] || "", ["allowed", "native", "encapsulation"]);
    if (i === "allowed" && me(t[3] || "", ["vlan"]) === "vlan")
      s.allowedVlans = t[4] || "all", r(`  ${s.name} allowed VLANs: ${s.allowedVlans}`, "success");
    else if (i === "native" && me(t[3] || "", ["vlan"]) === "vlan")
      s.nativeVlan = Number(t[4]) || 1, r(`  ${s.name} native VLAN ${s.nativeVlan}`, "success");
    else if (i === "encapsulation")
      s.encapsulation = t[3] || "dot1q", r(`  ${s.name} encapsulation ${s.encapsulation}`, "success");
    else
      return r("% Usage: switchport trunk {allowed vlan LIST|native vlan ID|encapsulation dot1q}", "error");
    n.commit();
    return;
  }
  r("% Usage: switchport {mode|access|trunk} ...", "error");
}
function Fx(e, t, n) {
  const { log: r } = n, s = me(t[1] || "", ["console", "vty", "aux"]);
  if (!s) return r("% Usage: line {console 0 | vty 0 4}", "error");
  if (s === "console")
    e.cli.lineCursor = "con";
  else if (s === "vty")
    e.cli.lineCursor = "vty", t[2] !== void 0 && (e.lines.vty.range = `${t[2]} ${t[3] ?? t[2]}`);
  else
    return r("% aux lines are not simulated.", "warn");
  e.cli.mode = "config-line", n.commit();
}
function Hx(e, t, n, r) {
  var h;
  const { log: s, engine: o, topology: i } = r, l = t[1];
  if (!l) return s(`% Usage: ${n} ${n === "ssh" ? "-l USER HOST" : "HOST"}`, "error");
  let c = l, u = null;
  n === "ssh" && l === "-l" && (u = t[2], c = t[3]);
  const d = Je(i, c);
  if (!d) return s(`% Unknown host ${c}`, "error");
  const p = o.adjudicate(e, c);
  if (!p.ok) return s(`% ${p.reason}`, "error");
  if (d.os !== "ios" && !d.services[n])
    return s("% Connection refused by remote host", "error");
  if (d.os === "ios") {
    const f = (h = d.lines) == null ? void 0 : h.vty;
    if (f && !f.transport.includes(n))
      return s(`% Connection refused — remote vty does not permit ${n}.`, "error");
    if (n === "ssh" && !d.cryptoKey)
      return s("% Connection refused — remote has no RSA key.", "error");
    if (f != null && f.login && f.password) {
      s(`Trying ${c} ...Open`, "dim"), ws(e, {
        purpose: "vty",
        expected: f.password,
        onSuccess: (g) => {
          An(e, d, n, u || "student"), d.banner && g.log(d.banner, "warn"), g.log(`[Connected to ${d.hostname}]`, "success");
        },
        onFail: (g) => g.log(`[Connection to ${c} closed by remote host]`, "error")
      }), r.commit();
      return;
    }
  }
  An(e, d, n, u || "student"), d.banner && s(d.banner, "warn"), s(`[Connected to ${d.hostname}] — type exit to return.`, "success"), r.commit();
}
function Hu(e, t, n) {
  const r = hr(e, t, n);
  return r === "admin-down" ? { status: "administratively down", protocol: "down" } : r === "up" ? { status: "up", protocol: "up" } : { status: "down", protocol: "down" };
}
function Ux(e, t, n) {
  var i, l, c;
  const { log: r, topology: s } = n, o = me(t[0] || "", [
    "ip",
    "running-config",
    "startup-config",
    "vlan",
    "arp",
    "version",
    "interfaces",
    "access-lists",
    "mac",
    "cdp",
    "users",
    "ssh",
    "clock",
    "protocols",
    "controllers",
    "flash"
  ]);
  if (o === "mac") {
    r("          Mac Address Table", "dim"), r("-------------------------------------------", "dim"), r(""), r("Vlan    Mac Address       Type        Ports", "dim"), r("----    -----------       --------    -----", "dim");
    let u = 0;
    for (const d of e.interfaces) {
      const p = Sr(e, d, s);
      if (!p) continue;
      const h = (i = p.port) == null ? void 0 : i.mac;
      h && (r(`${String(d.vlan || 1).padEnd(8)}${h}   DYNAMIC     ${d.name}`), u += 1);
    }
    r(u ? `Total Mac Addresses for this criterion: ${u}` : "(table empty — the switch learns addresses from traffic)", "dim");
    return;
  }
  if (o === "cdp") {
    const u = /det/.test(t[2] || t[1] || "");
    r("Capability Codes: R - Router, S - Switch, H - Host, I - IGMP", "dim"), r(""), r("Device ID      Local Intrfce   Holdtme   Capability   Platform   Port ID", "dim");
    let d = 0;
    for (const p of e.interfaces) {
      const h = Sr(e, p, s);
      if (!h) continue;
      d += 1;
      const f = { router: "R", switch: "S", l3switch: "R S", firewall: "R", host: "H", iot: "H", ap: "S", attacker: "H" }[h.device.role] || "H";
      r(
        `${h.device.hostname.padEnd(15)}${p.name.padEnd(16)}${String(120 + d).padEnd(10)}${f.padEnd(13)}${h.device.typeId.padEnd(11)}${((l = h.port) == null ? void 0 : l.name) || ""}`
      ), u && r(`  IP address: ${_(h.device) || "not set"}`, "dim");
    }
    d || r("(no directly connected Cisco neighbours)", "dim");
    return;
  }
  if (o === "users") {
    r("    Line       User       Host(s)              Idle       Location", "dim"), r("*  0 con 0                idle                 00:00:00");
    const u = e.runtime.sessions || 0;
    for (let d = 0; d < u; d++) r(`   ${d + 1} vty ${d}     student    idle                 00:00:0${d}`);
    return;
  }
  if (o === "ssh") {
    if (!e.cryptoKey) return r("%% SSH has not been enabled (no RSA key).", "warn");
    r("Connection Version Mode Encryption  Hmac       State          Username", "dim"), r("0          2.0     IN   aes256-cbc  hmac-sha1  Session started student");
    return;
  }
  if (o === "clock") {
    const u = Math.floor((((c = n.engine) == null ? void 0 : c.clock) || 0) / 1e3);
    return r(`*${new Date(u * 1e3).toISOString().slice(11, 19)}.000 UTC (simulated uptime)`);
  }
  if (o === "flash") {
    r("Directory of flash0:/", "dim"), r("    1  -rw-     33591768          <no date>  c2960-lanbasek9-mz.150-2.SE4.bin"), r("64016384 bytes total (30417816 bytes free)", "dim");
    return;
  }
  if (o === "protocols") {
    r("Global values:", "dim"), r("  Internet Protocol routing is enabled");
    for (const u of e.interfaces) {
      if (u.media === "console") continue;
      const { status: d, protocol: p } = Hu(e, u, s);
      r(`${u.name} is ${d}, line protocol is ${p}`), u.ip && r(`  Internet address is ${u.ip}/${qe(u.mask)}`, "dim");
    }
    return;
  }
  if (o === "ip") {
    const u = me(t[1] || "", ["interface", "route"]);
    if (u === "interface") {
      r("Interface              IP-Address      OK? Method Status                Protocol", "dim");
      for (const d of e.interfaces) {
        const { status: p, protocol: h } = Hu(e, d, s);
        r(
          `${d.name.padEnd(22)} ${(d.ip || "unassigned").padEnd(15)} YES  manual ${p.padEnd(21)} ${h}`,
          h === "up" ? "success" : "dim"
        );
      }
      return;
    }
    if (u === "route") {
      r("Codes: C - connected, S - static", "dim");
      for (const d of e.interfaces)
        d.ip && r(`C    ${d.ip}/${qe(d.mask)} is directly connected, ${d.name}`);
      for (const d of e.routes)
        r(`S    ${d.network}/${qe(d.mask)} [1/0] via ${d.nextHop}`);
      e.gateway && r(`S*   0.0.0.0/0 [1/0] via ${e.gateway}`);
      return;
    }
    return r('% Try "show ip interface brief" or "show ip route".', "error");
  }
  if (o === "running-config" || o === "startup-config") {
    if (o === "startup-config" && !e.cli.saved)
      return r('startup-config is not present — run "write memory" first.', "warn");
    const u = (d) => e.passwordEncryption ? "7 08014D4B5A" : d;
    r("Building configuration...", "dim"), r(""), r(`Current configuration : ${820 + e.interfaces.length * 60} bytes`, "dim"), r("!"), r("version 15.0"), e.passwordEncryption && r("service password-encryption"), r("!"), r(`hostname ${e.hostname}`), r("!"), e.enableSecret && r(`enable secret ${u(e.enableSecret)}`), e.security.maxAuthTries > 0 && r(`login block-for 60 attempts ${e.security.maxAuthTries}`), r("!"), e.domainName && r(`ip domain-name ${e.domainName}`), e.cryptoKey && r("crypto key generate rsa  ! 1024-bit key present"), e.spanningTree && r(`spanning-tree ${e.spanningTree}`), r("!");
    for (const d of e.vlans)
      r(`vlan ${d.id}`), r(` name ${d.name}`), r("!");
    for (const d of e.interfaces)
      d.media !== "console" && (r(`interface ${d.name}`), d.description && r(` description ${d.description}`), d.mode === "trunk" ? (r(" switchport mode trunk"), d.encapsulation && r(` switchport trunk encapsulation ${d.encapsulation}`), d.allowedVlans && r(` switchport trunk allowed vlan ${d.allowedVlans}`), d.nativeVlan && r(` switchport trunk native vlan ${d.nativeVlan}`)) : d.media === "ethernet" && (e.role === "switch" || e.role === "l3switch") && (r(" switchport mode access"), (d.vlan || 1) !== 1 && r(` switchport access vlan ${d.vlan}`)), d.ip && r(` ip address ${d.ip} ${d.mask}`), d.accessGroup && r(` ip access-group ${d.accessGroup} in`), r(d.enabled ? " no shutdown" : " shutdown"), r("!"));
    for (const d of e.routes) r(`ip route ${d.network} ${d.mask} ${d.nextHop}`);
    for (const d of e.acl) r(d.raw);
    e.banner && r(`banner motd ^C${e.banner}^C`), r("!"), r("line con 0"), e.lines.con.password && r(` password ${u(e.lines.con.password)}`), e.lines.con.login && r(" login"), r(`line vty ${e.lines.vty.range}`), e.lines.vty.password && r(` password ${u(e.lines.vty.password)}`), e.lines.vty.login && r(" login"), r(` transport input ${e.lines.vty.transport.join(" ") || "none"}`), r("!"), r("end");
    return;
  }
  if (o === "vlan") {
    if (r("VLAN Name                             Status    Ports", "dim"), r("---- -------------------------------- --------- -------------------------------", "dim"), !e.vlans.length) {
      r("(no VLANs configured)", "dim");
      return;
    }
    for (const u of e.vlans) {
      const d = e.interfaces.filter((p) => p.media === "ethernet" && (p.vlan || 1) === u.id && p.mode !== "trunk").map((p) => p.name).join(", ");
      r(`${String(u.id).padEnd(5)}${u.name.padEnd(33)}active    ${d}`);
    }
    return;
  }
  if (o === "arp") {
    const u = Object.entries(e.arp);
    if (!u.length) return r("(ARP cache empty — generate traffic first)", "dim");
    r("Protocol  Address          Age  Hardware Addr      Type", "dim");
    for (const [d, p] of u)
      r(
        `Internet  ${d.padEnd(16)} ${String(p.age ?? 0).padEnd(4)} ${p.mac}  ARPA${p.spoofed ? "   << DUPLICATE" : ""}`,
        p.spoofed ? "error" : "info"
      );
    return;
  }
  if (o === "access-lists") {
    if (!e.acl.length) return r("(no access lists configured)", "dim");
    for (const u of e.acl) r(u.raw);
    return;
  }
  if (o === "version") {
    r("NetRange IOS Simulator, Version 1.0 (educational build)", "dim"), r(`${e.hostname} uptime is ${Math.floor(n.engine.clock / 1e3)} seconds`, "dim"), r(`CPU utilisation: ${e.runtime.cpu.toFixed(0)}%`, "dim");
    return;
  }
  if (o === "interfaces") {
    const u = me(t[1] || "", ["status", "trunk", "description"]);
    if (u === "status") {
      r("Port      Name               Status       Vlan       Duplex  Speed Type", "dim");
      for (const d of e.interfaces) {
        if (d.media === "console") continue;
        const p = hr(e, d, s), h = p === "up" ? "connected" : p === "admin-down" ? "disabled" : "notconnect";
        r(
          `${d.name.padEnd(10)}${(d.description || "").padEnd(19)}${h.padEnd(13)}${String(d.mode === "trunk" ? "trunk" : d.vlan || 1).padEnd(11)}${(d.duplex || "auto").padEnd(8)}${(d.speed || "auto").padEnd(6)}${d.media}`,
          p === "up" ? "success" : "dim"
        );
      }
      return;
    }
    if (u === "trunk") {
      const d = e.interfaces.filter((p) => p.mode === "trunk");
      if (!d.length) return r("(no trunk ports configured)", "dim");
      r("Port        Mode         Encapsulation  Status        Native vlan", "dim");
      for (const p of d)
        r(`${p.name.padEnd(12)}${"on".padEnd(13)}${(p.encapsulation || "802.1q").padEnd(15)}${"trunking".padEnd(14)}${p.nativeVlan || 1}`);
      r(""), r("Port        Vlans allowed on trunk", "dim");
      for (const p of d) r(`${p.name.padEnd(12)}${p.allowedVlans || "all"}`);
      return;
    }
    if (u === "description") {
      r("Interface                      Status         Protocol Description", "dim");
      for (const d of e.interfaces)
        r(`${d.name.padEnd(31)}${(d.enabled ? "up" : "admin down").padEnd(15)}${(d.enabled ? "up" : "down").padEnd(9)}${d.description || ""}`);
      return;
    }
    for (const d of e.interfaces)
      r(`${d.name} is ${d.enabled ? "up" : "administratively down"}, line protocol is ${d.enabled ? "up" : "down"}`), r(`  Hardware is Ethernet, address is ${d.mac}`, "dim"), r(`  Internet address is ${d.ip ? `${d.ip}/${qe(d.mask)}` : "not set"}`, "dim");
    return;
  }
  r("% Unsupported show option.", "error");
}
function Bx(e, t) {
  const n = e.role === "switch" || e.role === "l3switch";
  t('Abbreviations work: "conf t", "int gi0/1", "sh ip int br".', "dim"), t(""), t("EXEC      enable · disable · ping HOST · traceroute HOST · write memory", "dim"), t("          telnet HOST · ssh -l USER HOST · reload · clear arp-cache", "dim"), t("CONFIG    configure terminal · hostname NAME · enable secret PASS", "dim"), t("          ip domain-name NAME · crypto key generate rsa · banner motd ^TEXT^", "dim"), t("          username NAME secret PASS · service password-encryption", "dim"), t("LINES     line console 0 | line vty 0 4 → password PASS · login", "dim"), t("          transport input {telnet|ssh|all|none}", "dim"), t("INTERFACE interface NAME · ip address IP MASK · no shutdown · description TEXT", "dim"), n ? (t("SWITCH    vlan ID · switchport mode {access|trunk}", "dim"), t("          switchport access vlan ID · switchport trunk allowed vlan LIST", "dim")) : t("ROUTING   ip route NET MASK NEXTHOP · access-list ID deny ip SRC DST", "dim"), t("SHOW      ip interface brief · ip route · running-config · startup-config", "dim"), t("          vlan brief · interfaces status · interfaces trunk · mac address-table", "dim"), t("          cdp neighbors [detail] · arp · users · ssh · version · protocols", "dim");
}
const Wx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  execute: gf,
  prompt: Dx
}, Symbol.toStringTag, { value: "Module" })), Ro = [
  "123456",
  "password",
  "admin",
  "letmein",
  "qwerty",
  "welcome",
  "root",
  "toor",
  "changeme",
  "admin123"
], Wi = {
  critical: { id: "critical", label: "Critical", rank: 4, tone: "down", min: 9 },
  high: { id: "high", label: "High", rank: 3, tone: "down", min: 7 },
  medium: { id: "medium", label: "Medium", rank: 2, tone: "warn", min: 4 },
  low: { id: "low", label: "Low", rank: 1, tone: "neutral", min: 0.1 }
}, Vx = ["critical", "high", "medium", "low"], qx = [
  /* ---------------------------------------------- credentials & accounts */
  {
    id: "NRL-2026-0001",
    title: "Default or trivially guessable service credentials",
    cwe: "CWE-1392",
    severity: "critical",
    cvss: 9.8,
    vector: "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    applies: (e) => Cn(e).length > 0,
    test: (e) => Ro.includes(e.security.password) ? `account "${e.security.username}" uses a password present in a public default-credential list` : null,
    fix: "Set a unique passphrase of at least 12 characters and enforce a password policy."
  },
  {
    id: "NRL-2026-0002",
    title: "No authentication attempt limit",
    cwe: "CWE-307",
    severity: "medium",
    cvss: 5.3,
    vector: "AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
    applies: (e) => Cn(e).some((t) => ["ssh", "ftp", "telnet", "rdp"].includes(t)),
    test: (e) => e.security.maxAuthTries === 0 ? "remote login services accept unlimited authentication attempts" : null,
    fix: 'Set an attempt limit and a lock-out period (Security → attempt limit, or "login block-for").'
  },
  {
    id: "NRL-2026-0003",
    title: "Single-factor authentication on an interactive account",
    cwe: "CWE-308",
    severity: "medium",
    cvss: 6.5,
    vector: "AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N",
    applies: (e) => e.role === "host",
    test: (e) => e.security.mfa ? null : "no second factor configured — a stolen password is sufficient",
    fix: "Enable MFA so a recovered password alone does not grant access."
  },
  {
    id: "NRL-2026-0004",
    title: "No enforced password policy",
    cwe: "CWE-521",
    severity: "low",
    cvss: 3.7,
    vector: "AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:N/A:N",
    applies: (e) => e.role === "host" || e.role === "router",
    test: (e) => e.security.passwordPolicy ? null : "length and complexity are not enforced for new passwords",
    fix: "Enforce a minimum length and complexity, and screen against known-breached passwords."
  },
  /* ------------------------------------------------- cleartext protocols */
  {
    id: "NRL-2026-0010",
    title: "Cleartext administrative protocol enabled (Telnet)",
    cwe: "CWE-319",
    severity: "high",
    cvss: 8.1,
    vector: "AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:N",
    applies: () => !0,
    test: (e) => e.services.telnet ? "telnet is listening on 23/tcp — credentials and session data cross the network unencrypted" : null,
    fix: 'Disable Telnet and manage the device over SSH ("transport input ssh" on the vty lines).'
  },
  {
    id: "NRL-2026-0011",
    title: "Web service without transport encryption",
    cwe: "CWE-319",
    severity: "high",
    cvss: 7.4,
    vector: "AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:N",
    applies: (e) => e.services.http,
    test: (e) => !e.security.tlsEnabled && !e.services.https ? "HTTP is served on 80/tcp with no TLS listener — form posts including logins are readable in transit" : null,
    fix: "Terminate TLS and redirect 80 to 443."
  },
  {
    id: "NRL-2026-0012",
    title: "Anonymous FTP access permitted",
    cwe: "CWE-287",
    severity: "high",
    cvss: 7.5,
    vector: "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
    applies: (e) => e.services.ftp,
    test: (e) => e.security.anonymousFtp ? "the FTP service accepts the anonymous account without a password" : null,
    fix: "Disable anonymous login, or replace FTP with SFTP over the existing SSH service."
  },
  {
    id: "NRL-2026-0013",
    title: "Default SNMP community string",
    cwe: "CWE-1393",
    severity: "high",
    cvss: 7.5,
    vector: "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
    applies: (e) => e.services.snmp,
    test: (e) => ["public", "private"].includes(String(e.security.snmpCommunity).toLowerCase()) ? `SNMP responds to the community string "${e.security.snmpCommunity}", which is a vendor default` : null,
    fix: "Replace the community string, restrict SNMP to a management subnet, and prefer SNMPv3 with authentication."
  },
  /* -------------------------------------------------------- exposed surface */
  {
    id: "NRL-2026-0020",
    title: "Legacy SMB file-sharing protocol enabled",
    cwe: "CWE-477",
    severity: "critical",
    cvss: 9.3,
    vector: "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    applies: (e) => e.services.smb,
    test: (e) => e.security.legacySmb ? "the SMBv1 dialect is still negotiated — a deprecated protocol with no modern signing or encryption" : null,
    fix: "Disable SMBv1 and require SMBv3 with signing. Remove file sharing entirely where it is not needed."
  },
  {
    id: "NRL-2026-0021",
    title: "Remote desktop exposed beyond its subnet",
    cwe: "CWE-668",
    severity: "high",
    cvss: 8.8,
    vector: "AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
    applies: (e) => e.services.rdp,
    test: (e, t) => {
      var r;
      const n = ((t == null ? void 0 : t.devices) || []).filter(
        (s) => s.id !== e.id && s.role === "attacker" && G(t, s.id, e.id)
      );
      return (r = e.acl) != null && r.length ? null : n.length ? "RDP is listening on 3389/tcp with no access list, and an untrusted host can reach it" : "RDP is listening on 3389/tcp with no access list restricting who may connect";
    },
    fix: "Restrict 3389/tcp to a jump host with an ACL, and require MFA on the account."
  },
  {
    id: "NRL-2026-0022",
    title: "Database service reachable from a user network",
    cwe: "CWE-668",
    severity: "critical",
    cvss: 9.1,
    vector: "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N",
    applies: (e) => e.services.mysql,
    test: (e, t) => {
      var r;
      const n = ((t == null ? void 0 : t.devices) || []).filter(
        (s) => s.id !== e.id && (s.typeId === "pc" || s.typeId === "laptop") && G(t, s.id, e.id)
      );
      return n.length && !((r = e.acl) != null && r.length) ? `3306/tcp is reachable from ${n.length} workstation(s) with no access list in front of it` : null;
    },
    fix: "Bind the database to the application host or an isolated segment, and filter 3306/tcp at the gateway."
  },
  {
    id: "NRL-2026-0023",
    title: "Unused switch ports left enabled",
    cwe: "CWE-1188",
    severity: "medium",
    cvss: 4.3,
    vector: "AV:A/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N",
    applies: (e) => e.role === "switch" || e.role === "l3switch",
    test: (e) => {
      const t = e.interfaces.filter(
        (n) => n.media !== "console" && n.media !== "wifi" && !n.link && n.enabled !== !1
      );
      return t.length >= 2 ? `${t.length} ports have no cable and are administratively up — anyone in the room can plug in` : null;
    },
    fix: "Shut unused access ports and place them in an unused VLAN."
  },
  /* ---------------------------------------------------- patching & software */
  {
    id: "NRL-2026-0030",
    title: "Security updates not applied",
    cwe: "CWE-1104",
    severity: "high",
    cvss: 8.2,
    vector: "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:L",
    applies: (e) => Cn(e).length > 0,
    test: (e) => {
      if (e.security.patched) return null;
      const t = Cn(e).map((n) => Rt[n]).filter((n) => n && n.old !== n.current);
      return t.length ? `${t.length} service(s) advertise a build older than their current release (${t.slice(0, 3).map((n) => `${n.product} ${n.old}`).join(", ")}${t.length > 3 ? ", …" : ""})` : null;
    },
    fix: "Apply vendor updates, then re-scan to confirm the banners have moved."
  },
  /* ----------------------------------------------------- application layer */
  {
    id: "NRL-2026-0040",
    title: "Database query built from unvalidated input",
    cwe: "CWE-89",
    severity: "critical",
    cvss: 9.8,
    vector: "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    applies: (e) => e.services.http && e.database,
    test: (e) => e.security.inputSanitised ? null : "the application concatenates request parameters into SQL rather than binding them",
    fix: "Use parameterised queries. Input filtering is a second line, not the fix."
  },
  {
    id: "NRL-2026-0041",
    title: "No rate limiting or connection backlog protection",
    cwe: "CWE-770",
    severity: "medium",
    cvss: 5.3,
    vector: "AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L",
    applies: (e) => e.services.http || e.services.ssh,
    test: (e) => e.security.synCookies ? null : "SYN cookies are disabled and no connection rate limit is configured",
    fix: "Enable SYN cookies and rate-limit new connections per source."
  },
  /* ----------------------------------------------------------- network plane */
  {
    id: "NRL-2026-0050",
    title: "No privileged-mode secret configured",
    cwe: "CWE-306",
    severity: "critical",
    cvss: 9,
    vector: "AV:A/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H",
    applies: (e) => e.os === "ios",
    test: (e) => e.enableSecret ? null : "privileged EXEC mode is reachable without a secret — anyone on the console takes full control",
    fix: 'Set "enable secret" and protect console and vty lines with distinct credentials.'
  },
  {
    id: "NRL-2026-0051",
    title: "Configuration passwords stored in cleartext",
    cwe: "CWE-256",
    severity: "low",
    cvss: 3.3,
    vector: "AV:L/AC:L/PR:L/UI:N/S:U/C:L/I:N/A:N",
    applies: (e) => e.os === "ios",
    test: (e) => e.passwordEncryption ? null : 'running-config shows line passwords in plain text ("service password-encryption" is off)',
    fix: "Enable service password-encryption, and prefer secrets that are hashed rather than obfuscated."
  },
  {
    id: "NRL-2026-0052",
    title: "ARP inspection disabled on a routed segment",
    cwe: "CWE-290",
    severity: "medium",
    cvss: 6.5,
    vector: "AV:A/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N",
    applies: (e) => e.role === "router" || e.role === "l3switch",
    test: (e) => e.security.dynamicArpInspection ? null : "Dynamic ARP Inspection is off — gratuitous ARP replies are accepted without validation",
    fix: "Enable DARP inspection with DHCP snooping so bindings are verified."
  },
  /* ---- the management plane, where most real infrastructure findings sit */
  {
    id: "NRL-2026-0053",
    title: "Remote management lines accept unauthenticated access",
    cwe: "CWE-306",
    severity: "critical",
    cvss: 9.8,
    vector: "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    applies: (e) => {
      var t;
      return e.os === "ios" && ((t = e.lines) == null ? void 0 : t.vty);
    },
    test: (e) => {
      var n;
      const t = e.lines.vty;
      return !((n = t.transport) != null && n.length) || t.login && t.password ? null : `vty ${t.range} accepts ${t.transport.join("/")} with ${t.login ? "no password set" : "login not required"}`;
    },
    fix: 'Set a password on the vty lines and require it with "login", or authenticate against local accounts.'
  },
  {
    id: "NRL-2026-0054",
    title: "Cleartext protocol permitted on the management lines",
    cwe: "CWE-319",
    severity: "high",
    cvss: 8.1,
    vector: "AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:N",
    applies: (e) => {
      var t;
      return e.os === "ios" && ((t = e.lines) == null ? void 0 : t.vty);
    },
    test: (e) => {
      var t;
      return (t = e.lines.vty.transport) != null && t.includes("telnet") ? `vty ${e.lines.vty.range} permits telnet — an administrator's password crosses the network in clear` : null;
    },
    fix: 'Restrict the lines to SSH with "transport input ssh".'
  },
  {
    id: "NRL-2026-0055",
    title: "SSH permitted but no host key generated",
    cwe: "CWE-1188",
    severity: "medium",
    cvss: 5.3,
    vector: "AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L",
    applies: (e) => {
      var t, n, r;
      return e.os === "ios" && ((r = (n = (t = e.lines) == null ? void 0 : t.vty) == null ? void 0 : n.transport) == null ? void 0 : r.includes("ssh"));
    },
    test: (e) => e.cryptoKey ? null : "the lines offer SSH but no RSA key exists, so the daemon never starts and administrators fall back to telnet",
    fix: 'Set "ip domain-name" and run "crypto key generate rsa" so SSH can actually serve.'
  },
  {
    id: "NRL-2026-0056",
    title: "Management plane reachable from any source address",
    cwe: "CWE-284",
    severity: "medium",
    cvss: 6.5,
    vector: "AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:L/A:L",
    applies: (e) => {
      var t, n, r;
      return (e.role === "router" || e.role === "l3switch" || e.role === "firewall") && ((r = (n = (t = e.lines) == null ? void 0 : t.vty) == null ? void 0 : n.transport) == null ? void 0 : r.length) > 0;
    },
    test: (e) => (e.acl || []).length === 0 ? "no access list restricts who may open a management session — any host that can route here may try" : null,
    fix: "Apply an access class to the vty lines so only a management subnet can reach them."
  },
  /* -------------------------------------------------------------- wireless */
  {
    id: "NRL-2026-0060",
    title: "Wireless network without encryption",
    cwe: "CWE-319",
    severity: "critical",
    cvss: 9.4,
    vector: "AV:A/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    applies: (e) => !!e.ap,
    test: (e) => {
      const t = ae[e.ap.security];
      return !t || !t.encrypted ? `SSID "${e.ap.ssid || "(unnamed)"}" is broadcasting with ${t ? t.label : "no"} security — every frame in range is readable` : e.ap.security === "wep" ? `SSID "${e.ap.ssid}" uses WEP, which is broken and recoverable` : null;
    },
    fix: "Use WPA2-AES or WPA3 with a passphrase that is not in any wordlist."
  },
  {
    id: "NRL-2026-0061",
    title: "Management frames unprotected",
    cwe: "CWE-345",
    severity: "medium",
    cvss: 6.5,
    vector: "AV:A/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H",
    applies: (e) => !!e.ap,
    test: (e) => e.security.managementFrameProtection ? null : "802.11w is not enabled — deauthentication frames are accepted unauthenticated",
    fix: "Enable protected management frames (802.11w) on the SSID."
  },
  /* -------------------------------------------------------------- the people */
  {
    id: "NRL-2026-0070",
    title: "No security awareness training recorded",
    cwe: "CWE-1248",
    severity: "medium",
    cvss: 5.4,
    vector: "AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:N/A:N",
    applies: (e) => e.role === "host",
    test: (e) => e.security.awarenessTraining ? null : "the account holder has no recorded awareness training",
    fix: "Run phishing and pretext-call training, and give staff a route to report an approach."
  },
  {
    id: "NRL-2026-0071",
    title: "No caller verification procedure",
    cwe: "CWE-1248",
    severity: "medium",
    cvss: 5.4,
    vector: "AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:N",
    applies: (e) => e.role === "host",
    test: (e) => e.security.callbackVerification ? null : "no callback policy — a caller claiming to be internal IT is taken at their word",
    fix: "Require a callback to a number from the internal directory before any account action."
  }
];
function Gx(e, t) {
  const n = [];
  for (const r of qx) {
    let s = null;
    try {
      if (!r.applies(e, t)) continue;
      s = r.test(e, t);
    } catch {
      continue;
    }
    s && n.push({
      id: r.id,
      title: r.title,
      cwe: r.cwe,
      severity: r.severity,
      cvss: r.cvss,
      vector: r.vector,
      evidence: s,
      fix: r.fix,
      host: e.hostname,
      address: _(e) || "—"
    });
  }
  return n.sort(
    (r, s) => Wi[s.severity].rank - Wi[r.severity].rank || s.cvss - r.cvss
  );
}
function Kx(e) {
  const t = { critical: 0, high: 0, medium: 0, low: 0 };
  for (const s of e) t[s.severity] += 1;
  const n = { critical: 14, high: 8, medium: 4, low: 1 }, r = e.reduce((s, o) => s + n[o.severity], 0);
  return { counts: t, total: e.length, risk: Math.max(0, 100 - r) };
}
function Yx(e) {
  return Cn(e).map((t) => ({ name: t, ...Rt[t] })).filter((t) => t.port).sort((t, n) => t.port - n.port);
}
function Zx(e, t) {
  const n = Rt[t];
  if (!n) return "";
  const r = e.security.patched ? n.current : n.old;
  return `${n.product} ${r}`;
}
const se = "attack";
function Qx({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (p, h) => e.log(se, p, h), o = n.services.ssh ? "ssh" : n.services.ftp ? "ftp" : null, i = _(n) || n.hostname;
  if (s(`
[brute-force] ${t.hostname} → ${n.hostname} (${i})`, "warn"), !o) {
    s("[brute-force] no SSH or FTP service is listening — nothing to test.", "error");
    return;
  }
  s(`[brute-force] service ${o}, wordlist = demo-10, user = ${n.security.username}`, "dim"), n.security.maxAuthTries > 0 && s(`[brute-force] target advertises a ${n.security.maxAuthTries}-attempt limit`, "dim");
  const l = Ro.includes(n.security.password), c = [...Ro];
  l && !c.includes(n.security.password) && c.push(n.security.password);
  const u = G(e.getTopology(), t.id, n.id);
  let d = !1;
  c.forEach((p, h) => {
    e.schedule(h * 280, () => {
      if (d) return;
      if (af(n, e.clock)) {
        s(`[brute-force] attempt ${h + 1} refused — account locked out. Attack defeated.`, "success"), n.runtime.underAttack = null, d = !0, r();
        return;
      }
      if (u && e.emit(u, "attack", { label: "auth" }), n.runtime.packetsIn += 1, n.runtime.underAttack = "brute-force", p === n.security.password) {
        d = !0, n.runtime.compromised = !0, s(`[brute-force] attempt ${h + 1}: ${n.security.username}:${p} → ACCEPTED`, "error"), s(`[brute-force] CREDENTIALS RECOVERED. Shell on ${n.hostname}.`, "error"), e.note(se, "Mitigate with a password outside the wordlist, plus an attempt limit."), n.runtime.underAttack = null, r();
        return;
      }
      const f = Ui(n, e.clock);
      s(
        `[brute-force] attempt ${h + 1}: ${n.security.username}:${p} → denied` + (n.security.maxAuthTries ? ` (${f.failures}/${n.security.maxAuthTries})` : ""),
        "dim"
      ), r();
    });
  }), e.schedule(c.length * 280 + 200, () => {
    d || (s("[brute-force] wordlist exhausted — the password held. Good hardening.", "success"), n.runtime.underAttack = null, r());
  });
}
function Xx({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (u, d) => e.log(se, u, d), o = _(n) || n.hostname, i = n.services.http ? 80 : n.services.ssh ? 22 : 0;
  if (s(`
[syn-flood] ${t.hostname} → ${o}:${i}`, "warn"), !i) {
    s("[syn-flood] target exposes no TCP service — no queue to fill.", "error");
    return;
  }
  n.security.synCookies && s("[syn-flood] target has SYN cookies enabled; half-open queue cannot be exhausted.", "dim");
  const l = G(e.getTopology(), t.id, n.id);
  n.runtime.underAttack = "syn-flood";
  const c = 9;
  for (let u = 0; u < c; u++)
    e.schedule(u * 340, () => {
      const d = n.security.synCookies ? 3 + Math.random() * 2 : 9 + Math.random() * 13;
      n.runtime.cpu = Math.min(100, n.runtime.cpu + d), n.runtime.memory = Math.min(100, n.runtime.memory + d * 0.5);
      const p = 1400 + u * 900 + Math.floor(Math.random() * 300), h = n.runtime.cpu > 70 ? Math.min(98, (n.runtime.cpu - 70) * 3.2) : 0;
      n.runtime.packetsIn += p / 100, n.runtime.packetsDropped += p / 100 * (h / 100), l && e.emit(l, "attack", { label: "SYN" }), s(
        `[syn-flood] ${p} SYN/s   half-open=${Math.round(n.runtime.cpu * 12)}   cpu=${n.runtime.cpu.toFixed(0)}%   drop=${h.toFixed(0)}%`,
        n.runtime.cpu > 90 ? "error" : "warn"
      ), n.runtime.cpu >= 97 && !n.runtime.unresponsive && (n.runtime.unresponsive = !0, s(`[syn-flood] ${n.hostname} STOPPED RESPONDING — accept queue exhausted.`, "error")), r();
    });
  e.schedule(c * 340 + 300, () => {
    n.runtime.unresponsive ? (s("[syn-flood] Outcome: denial of service achieved.", "error"), e.note(se, "Mitigate with SYN cookies, or an ACL dropping the source.")) : s(`[syn-flood] Outcome: absorbed — peak cpu ${n.runtime.cpu.toFixed(0)}%, service stayed up.`, "success"), n.runtime.underAttack = null, r(), e.schedule(4e3, () => {
      lc(n), r();
    });
  });
}
function Jx({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (f, g) => e.log(se, f, g), o = e.getTopology(), i = U0(o, t.id), l = n.role === "host" || n.role === "iot" ? n : o.devices.find((f) => f.id !== t.id && i.has(f.id) && (f.role === "host" || f.role === "iot")), c = o.devices.find(
    (f) => (f.role === "router" || f.role === "l3switch") && G(o, t.id, f.id)
  );
  if (s(`
[arp-spoof] ${t.hostname} poisoning the local segment`, "warn"), !l || !c) {
    s("[arp-spoof] needs a victim host and a router on the same segment.", "error");
    return;
  }
  const u = _(c), d = _(l);
  if (!u || !d) {
    s("[arp-spoof] victim and gateway both need addresses first.", "error");
    return;
  }
  if (c.security.dynamicArpInspection || l.security.dynamicArpInspection) {
    s("[arp-spoof] Dynamic ARP Inspection is on — gratuitous replies are dropped.", "dim"), s("[arp-spoof] Outcome: poisoning refused. Segment integrity held.", "success");
    return;
  }
  const p = $t(t.id + ":0");
  [
    [`[arp-spoof] → ${l.hostname}:  "${u} is-at ${p}"`, "dim"],
    [`[arp-spoof] → ${c.hostname}: "${d} is-at ${p}"`, "dim"]
  ].forEach(([f, g], w) => e.schedule(w * 420, () => s(f, g))), e.schedule(900, () => {
    l.arp[u] = { mac: p, spoofed: !0, byDeviceId: t.id, age: 0 }, c.arp[d] = { mac: p, spoofed: !0, byDeviceId: t.id, age: 0 }, l.runtime.underAttack = "mitm", s(`[arp-spoof] ✓ caches poisoned — ${l.hostname} ⇄ ${c.hostname} now transits ${t.hostname}`, "error"), s('[arp-spoof] Inspect with "show arp" (IOS) or "ip neigh" (Linux): duplicate MAC.', "dim"), r();
  }), e.schedule(1500, () => {
    const f = e.adjudicate(l, u);
    f.path && e.emit(f.path, "attack", { label: "intercepted" }), f.viaSpoof && (s(`[arp-spoof] captured from ${l.hostname}: GET /login  user=student  pass=••••••`, "error"), e.note(se, "Mitigate with Dynamic ARP Inspection, or static ARP entries.")), r();
  });
}
function ey({ engine: e, attacker: t, target: n, commit: r, payload: s }) {
  const o = (c, u) => e.log(se, c, u), i = _(n) || n.hostname;
  if (o(`
[sqli] ${t.hostname} → http://${i}/search`, "warn"), !n.services.http || !n.database) {
    o("[sqli] target is not running the simulated web application.", "error");
    return;
  }
  o(`[sqli] input: ${s}`, "dim");
  const l = G(e.getTopology(), t.id, n.id);
  l && e.emit(l, "attack", { label: "POST" }), e.schedule(600, () => {
    const c = ef(n, s);
    o(`[sqli] HTTP ${c.status}`, c.vulnerable ? "error" : "success"), c.signatures.length && o(`[sqli] signatures matched: ${c.signatures.join("; ")}`, "dim");
    for (const u of c.lines) o(`[sqli] ${u}`, c.vulnerable ? "warn" : "dim");
    c.flag && (n.runtime.compromised = !0, o(`[sqli] EXFILTRATED → ${c.flag}`, "error"), e.note(se, "Mitigate with parameterised queries (Services → Input sanitisation).")), c.blocked && o("[sqli] Outcome: injection blocked by parameter binding. Defence works.", "success"), r();
  });
}
function ty({ engine: e, attacker: t, commit: n }) {
  const r = (d, p) => e.log(se, d, p), s = e.getTopology();
  if (r(`
[wifi] ${t.hostname}: putting wlan0 into monitor mode`, "warn"), !t.radio) {
    r("[wifi] this device has no radio.", "error");
    return;
  }
  t.radio.monitorMode = !0, t.capturing = !0, n();
  const o = Er(s).filter((d) => d.id !== t.id).map((d) => ({ ap: d, dbm: ic(t, d) })).filter(({ dbm: d }) => d !== null).sort((d, p) => p.dbm - d.dbm);
  if (!o.length) {
    r("[wifi] no access points within range. Move the node closer to an AP.", "error");
    return;
  }
  r("[wifi] airodump — BSSIDs in range:", "dim"), r("       BSSID              PWR  CH  ENC    ESSID", "dim");
  for (const { ap: d, dbm: p } of o) {
    const h = ae[d.ap.security] ? d.ap.security.toUpperCase() : "OPEN";
    r(
      `       ${$t(`${d.id}:0`)}  ${String(p).padStart(4)}  ${String(d.ap.channel).padStart(2)}  ${h.padEnd(6)} ${d.ap.ssid}`,
      h === "OPEN" ? "error" : "info"
    );
  }
  const l = [...vt(s).entries()].map(([d, p]) => ({ client: s.devices.find((h) => h.id === d), a: p })).filter(({ client: d }) => d && d.id !== t.id).filter(({ client: d }) => vs(t, d) <= (t.radio.range || Hn));
  r(`[wifi] ${l.length} associated station(s) in range`, "dim");
  for (const { client: d, a: p } of l)
    r(`       ${$t(`${d.id}:0`)}  ${d.hostname} → ${p.ssid} (${p.dbm} dBm, ${tf(p.dbm)}/4)`, "dim");
  if (!l.length) {
    r("[wifi] capturing, but no stations are talking. Generate traffic from a client.", "warn");
    return;
  }
  const c = s.devices.filter((d) => d.services.http || d.services.dns || d.services.mqtt);
  let u = 0;
  for (const { client: d, a: p } of l) {
    const h = c.find((g) => G(s, d.id, g.id));
    if (!h) continue;
    const f = G(s, d.id, h.id);
    !ae[p.security] || ae[p.security].encrypted, e.schedule(u++ * 420, () => {
      e.emit(f, "dns", { name: "portal.lab.local", txid: 20266 });
    }), e.schedule(u++ * 420, () => {
      e.emit(f, "http", {
        request: "POST /login HTTP/1.1",
        body: `POST /login HTTP/1.1\r
Host: ${h.hostname.toLowerCase()}\r
Content-Type: application/x-www-form-urlencoded\r
\r
username=${d.security.username}&password=${d.security.password}`
      });
    });
  }
  e.schedule(u * 420 + 500, () => {
    const d = e.capture.for(t.id), p = d.filter((g) => !g.encrypted && g.layers.payload && g.layers.payload.text), h = d.filter((g) => g.encrypted);
    r(`[wifi] captured ${d.length} frames — ${p.length} readable, ${h.length} encrypted`, "warn");
    const f = /* @__PURE__ */ new Map();
    for (const g of p) {
      const w = (g.layers.payload.text || "").match(/username=([^&\s]+)&password=([^&\s]+)/);
      w && f.set(`${w[1]}:${w[2]}`, { user: w[1], pass: w[2], from: g.sourceName });
    }
    if (f.size) {
      r(`[wifi] CLEARTEXT CREDENTIALS RECOVERED FROM THE AIR (${f.size})`, "error");
      for (const { user: g, pass: w, from: k } of f.values())
        r(`[wifi]   ${k}: username=${g}  password=${w}`, "error");
      e.note(se, "Mitigate with WPA2/WPA3 on the SSID, and HTTPS on the application.");
    } else h.length && (r("[wifi] every payload is CCMP-protected — the capture is unreadable.", "success"), r("[wifi] Headers (MAC addresses, timing, volume) still leak. That is traffic analysis.", "dim"));
    r("[wifi] Open the Packet Capture tab to inspect frames layer by layer.", "dim"), n();
  });
}
function ny({ engine: e, attacker: t, target: n, commit: r }) {
  var p;
  const s = (h, f) => e.log(se, h, f), o = e.getTopology(), i = vt(o);
  let l = n;
  if (n.ap) {
    const h = (p = [...i.entries()].find(([, f]) => f.apId === n.id)) == null ? void 0 : p[0];
    l = o.devices.find((f) => f.id === h);
  }
  if (!l || !i.has(l.id)) {
    s(`
[deauth] target is not an associated wireless station.`, "error");
    return;
  }
  const c = i.get(l.id), u = o.devices.find((h) => h.id === c.apId);
  if (s(`
[deauth] ${t.hostname} → ${l.hostname} (assoc. with ${u.hostname}/${c.ssid})`, "warn"), u.security.managementFrameProtection) {
    s("[deauth] AP enforces 802.11w Protected Management Frames.", "dim"), s("[deauth] Forged deauth frames are rejected. Attack defeated.", "success");
    return;
  }
  const d = 5;
  for (let h = 0; h < d; h++)
    e.schedule(h * 260, () => {
      e.recordAir(t, l, "deauth", {
        sn: h,
        ssid: c.ssid,
        bssidDeviceId: u.id,
        plaintext: !0
        // management frames are never encrypted
      }), s(`[deauth] frame ${h + 1}/${d} → ${$t(`${l.id}:0`)} (spoofing ${$t(`${u.id}:0`)})`, "dim");
    });
  e.schedule(d * 260 + 200, () => {
    u.ap.deauthed = u.ap.deauthed || {}, u.ap.deauthed[l.id] = e.clock + 12e3, l.runtime.underAttack = "deauth", s(`[deauth] ${l.hostname} DISASSOCIATED — it drops off the topology for 12s.`, "error"), e.note(se, "Mitigate with 802.11w Protected Management Frames on the AP."), r();
  }), e.schedule(d * 260 + 12500, () => {
    l.runtime.underAttack = null, s(`[deauth] ban lapsed — ${l.hostname} may re-associate.`, "dim"), r();
  });
}
function ry({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (l, c) => e.log(se, l, c), o = e.getTopology(), i = n && n.ap ? n : Er(o).find((l) => l.id !== t.id);
  if (!i) {
    s(`
[evil-twin] no legitimate AP to clone. Place a Wireless AP first.`, "error");
    return;
  }
  s(`
[evil-twin] cloning "${i.ap.ssid}" from ${i.hostname}`, "warn"), s(`[evil-twin] legitimate BSSID ${$t(`${i.id}:0`)} (${i.ap.security.toUpperCase()})`, "dim"), t.ap = {
    enabled: !0,
    ssid: i.ap.ssid,
    security: "open",
    passphrase: "",
    channel: i.ap.channel,
    range: Hn,
    deauthed: {},
    rogue: !0
  }, t.capturing = !0, t.radio && (t.radio.monitorMode = !0), r(), s(`[evil-twin] rogue BSSID ${$t(`${t.id}:0`)} broadcasting "${i.ap.ssid}" — OPEN`, "error"), e.schedule(400, () => {
    e.recordAir(t, t, "beacon", {
      ssid: i.ap.ssid,
      security: "Open",
      channel: i.ap.channel,
      plaintext: !0
    });
  }), e.schedule(900, () => {
    const c = [...vt(e.getTopology()).entries()].filter(([, u]) => u.apId === t.id);
    if (!c.length) {
      s("[evil-twin] no station switched over.", "success"), s("[evil-twin] Clients that pin an SSID to a known BSSID, or require WPA2, resist this.", "dim"), s("[evil-twin] Tip: deauth a station first — it will re-join the strongest beacon.", "dim"), r();
      return;
    }
    for (const [u] of c) {
      const d = e.getTopology().devices.find((f) => f.id === u);
      if (!d) continue;
      s(`[evil-twin] ${d.hostname} ASSOCIATED TO THE ROGUE AP — traffic now transits ${t.hostname}`, "error"), d.runtime.underAttack = "evil-twin";
      const h = e.getTopology().devices.filter((f) => f.services.http).find((f) => G(e.getTopology(), d.id, f.id));
      if (h) {
        const f = G(e.getTopology(), d.id, h.id);
        e.emit(f, "http", {
          request: "POST /login HTTP/1.1",
          body: `POST /login HTTP/1.1\r
Host: ${h.hostname.toLowerCase()}\r
\r
username=${d.security.username}&password=${d.security.password}`
        });
      }
    }
    e.note(se, "Mitigate with WPA2/WPA3-only client profiles and 802.11w."), r();
  });
}
function sy({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (g, w) => e.log(se, g, w), o = (g) => e.note(se, g), i = e.getTopology(), l = _(n) || n.hostname, c = G(i, t.id, n.id), u = oy();
  if (s(`nmap -sV -T4 ${l}`, "warn"), s(`Starting Nmap 7.95 ( https://nmap.org ) at ${u}`, "dim"), !c) {
    e.schedule(400, () => {
      s(`Nmap scan report for ${l}`, "info"), s("Host seems down. If it is really up, but blocking our ping probes, try -Pn", "dim"), s("Nmap done: 1 IP address (0 hosts up) scanned in 2.07 seconds", "dim"), o("No layer-3 path exists. Check cabling and addressing before blaming a firewall.");
    });
    return;
  }
  const d = Yx(n).filter((g) => z0(n, g.name)), p = (8e-4 + c.length * 4e-4).toFixed(4), h = 1e3, f = ["ssh", "ftp", "telnet", "dns", "http", "https", "smb", "rdp", "mysql", "mqtt", "rtsp", "snmp"];
  f.forEach((g, w) => {
    e.schedule(w * 90, () => {
      const k = Rt[g];
      k && e.emit(c, "tcp", {
        sport: 44e3 + w,
        dport: k.port,
        flags: d.some((m) => m.name === g) ? "SYN, ACK" : "RST, ACK"
      });
    });
  }), e.schedule(f.length * 90 + 250, () => {
    var w;
    if (s(`Nmap scan report for ${n.hostname} (${l})`, "info"), s(`Host is up (${p}s latency).`, "info"), !d.length)
      s(`All ${h} scanned ports on ${l} are in ignored states.`, "info"), s(`Not shown: ${h} closed tcp ports (reset)`, "dim");
    else {
      s(`Not shown: ${h - d.length} closed tcp ports (reset)`, "dim"), s("PORT      STATE SERVICE     VERSION", "dim");
      for (const k of d) {
        const m = `${k.port}/${k.proto}`;
        s(
          `${m.padEnd(10)}${"open".padEnd(6)}${k.name.padEnd(12)}${Zx(n, k.name)}`,
          "error"
        );
      }
    }
    const g = (w = n.interfaces.find((k) => k.ip)) == null ? void 0 : w.mac;
    g && s(`MAC Address: ${g.toUpperCase()} (Unknown)`, "dim"), s("Service detection performed. Please report any incorrect results.", "dim"), s(`Nmap done: 1 IP address (1 host up) scanned in ${(2 + d.length * 0.4).toFixed(2)} seconds`, "dim"), o(`${d.length} service(s) answered. Every open port is something to justify keeping.`), !n.security.patched && d.length && o("Those version strings are the next lead — compare them against current releases."), n.runtime.lastExercise = "port-scan", n.runtime.scannedBy = t.id, r();
  });
}
function oy() {
  const e = /* @__PURE__ */ new Date(), t = (n) => String(n).padStart(2, "0");
  return `${e.getFullYear()}-${t(e.getMonth() + 1)}-${t(e.getDate())} ${t(e.getHours())}:${t(e.getMinutes())} ${Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"}`;
}
function ay({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (p, h) => e.log(se, p, h), o = (p) => e.note(se, p), i = e.getTopology(), l = !n || n.id === t.id, c = l ? i.devices.filter((p) => p.role !== "attacker" && G(i, t.id, p.id)) : [n];
  if (s("netrange-va --profile full " + (l ? "--subnet local" : _(n) || n.hostname), "warn"), s("NetRange VA 1.0 — configuration audit (offline, no packets sent)", "dim"), !c.length) {
    s("0 hosts responded to discovery. Nothing to audit.", "error");
    return;
  }
  let u = 300;
  const d = [];
  for (const p of c) {
    const h = Gx(p, i);
    d.push(...h);
    const f = _(p) || "—";
    e.schedule(u, () => {
      if (s("", "dim"), s(`── ${p.hostname} (${f}) ${"─".repeat(Math.max(0, 46 - p.hostname.length - f.length))}`, "info"), !h.length) {
        s("  No findings at this profile.", "success");
        return;
      }
      for (const g of h) {
        const w = Wi[g.severity];
        s(`  [${w.label.toUpperCase()}] ${g.id}  ${g.title}`, w.rank >= 3 ? "error" : "warn"), s(`      CVSS ${g.cvss.toFixed(1)} (${g.vector})  ${g.cwe}`, "dim"), s(`      Evidence:    ${g.evidence}`, "dim"), s(`      Remediation: ${g.fix}`, "dim");
      }
    }), u += 260;
  }
  e.schedule(u + 200, () => {
    const p = Kx(d);
    s("", "dim"), s(`Scanned ${c.length} host(s). ${p.total} finding(s).`, "warn"), s(
      Vx.map((h) => `${p.counts[h]} ${h}`).join("   "),
      p.counts.critical ? "error" : "warn"
    ), s(`Risk score ${p.risk}/100`, p.risk < 50 ? "error" : p.risk < 80 ? "warn" : "success"), o("Work top-down by severity, fix, then re-run and watch the score move.");
    for (const h of c) h.runtime.lastExercise = h.runtime.lastExercise || "vuln-scan";
    r();
  });
}
function iy({ engine: e, attacker: t, target: n, commit: r, payload: s }) {
  const o = (p, h) => e.log(se, p, h), i = e.getTopology(), l = s || "IT Helpdesk: your mailbox is full, sign in to release held messages";
  if (o(`
[phish] staging a credential-harvest portal on ${t.hostname}`, "warn"), o(`[phish] pretext: "${l}"`, "dim"), o("[phish] the page is a lab-branded clone — it imitates no real organisation.", "dim"), !n || n.role === "attacker") {
    o("[phish] pick a host to send the lure to.", "error");
    return;
  }
  const c = G(i, t.id, n.id);
  if (!c) {
    o("[phish] no path to the recipient — the lure cannot be delivered.", "error");
    return;
  }
  const u = n.security.awarenessTraining, d = n.security.mfa;
  e.schedule(400, () => {
    e.emit(c, "http", { body: `GET /portal?from=helpdesk\r
\r
${l}` }), o(`[phish] lure delivered to ${n.hostname}`, "dim");
  }), e.schedule(1100, () => {
    if (u) {
      o(`[phish] ${n.hostname} reported the message instead of opening it.`, "success"), o("[phish] Outcome: no credentials captured. Awareness training is the control that worked.", "success"), r();
      return;
    }
    const p = { user: n.security.username, pass: n.security.password };
    o(`[phish] ${n.hostname} opened the portal and submitted credentials`, "error"), e.emit([...c].reverse(), "http", {
      body: `POST /portal/login\r
\r
username=${p.user}&password=${p.pass}`
    }), o(`[phish] HARVESTED → ${p.user} / ${p.pass}`, "error"), d ? (o("[phish] replaying the credentials… rejected: a second factor is required.", "success"), o("[phish] Outcome: credentials stolen but unusable. MFA broke the chain.", "warn")) : (n.runtime.compromised = !0, o("[phish] credentials replayed successfully — account takeover.", "error"), e.note(se, "Mitigate with awareness training, and MFA so a stolen password is not enough.")), r();
  });
}
function ly({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (d, p) => e.log(se, d, p), o = e.getTopology(), i = _(n) || n.hostname, l = o.devices.filter(
    (d) => d.id !== n.id && d.id !== t.id && (d.role === "iot" || d.role === "host") && _(d) && G(o, d.id, n.id)
  );
  if (s(`
[ddos] recruiting bots reachable from ${t.hostname}`, "warn"), !l.length) {
    s("[ddos] no recruitable hosts — a distributed flood needs more than one source.", "error"), s("[ddos] Add IoT devices or workstations, then try again.", "dim");
    return;
  }
  for (const d of l)
    s(`[ddos]   + ${d.hostname} (${_(d)})${d.security.password === "admin" ? " — default credentials" : ""}`, "dim");
  s(`[ddos] botnet of ${l.length} — flooding ${i}`, "error"), n.runtime.underAttack = "ddos";
  const c = 8, u = 2400;
  for (let d = 0; d < c; d++)
    e.schedule(d * 320, () => {
      const p = l.filter((g) => e.aclVerdict(
        G(o, g.id, n.id) || [],
        _(g),
        i
      )), h = l.length - p.length, f = n.security.synCookies ? 2 + h * 0.6 : 4 + h * 2.4;
      n.runtime.cpu = Math.min(100, n.runtime.cpu + f), n.runtime.packetsIn += h * u / 100;
      for (const g of l.slice(0, 4)) {
        const w = G(o, g.id, n.id);
        w && e.emit(w, "attack", { label: "flood" });
      }
      s(
        `[ddos] ${h}/${l.length} sources active   ${(h * u).toLocaleString()} pkt/s   cpu=${n.runtime.cpu.toFixed(0)}%`,
        n.runtime.cpu > 90 ? "error" : "warn"
      ), n.runtime.cpu >= 97 && !n.runtime.unresponsive && (n.runtime.unresponsive = !0, s(`[ddos] ${n.hostname} is down — saturated from ${h} sources.`, "error")), r();
    });
  e.schedule(c * 320 + 300, () => {
    n.runtime.unresponsive ? (s("[ddos] Outcome: service unavailable.", "error"), s("[ddos] Blocking one source does nothing — that is what separates DDoS from DoS.", "dim"), s("[ddos] Mitigate upstream: rate limiting, anycast scrubbing, and fixing the bots' default passwords.", "dim")) : s(`[ddos] Outcome: absorbed — peak cpu ${n.runtime.cpu.toFixed(0)}%.`, "success"), n.runtime.underAttack = null, r(), e.schedule(4e3, () => {
      lc(n), r();
    });
  });
}
const fr = {
  phishing: {
    id: "phishing",
    label: "Credential Phishing",
    icon: "Mail",
    category: "Credential",
    phase: "Initial Access",
    summary: "Stands up a lab-branded sign-in portal and sends a lure to a chosen host. A trained user reports it; an untrained one submits credentials.",
    indicators: "An HTTP POST carrying a username and password to a host that is not your identity provider.",
    detect: "Capture pane — filter `http` and look for form data leaving a workstation.",
    nextStep: "With valid credentials, a tester would authenticate to a real service and establish what that account can reach.",
    mitigation: "Awareness training stops the click; MFA makes a stolen password insufficient on its own.",
    needsPayload: !0,
    defaultPayload: "IT Helpdesk: your mailbox is full, sign in to release held messages",
    canTarget: (e) => e.role === "host" || e.role === "iot",
    run: iy
  },
  ddos: {
    id: "ddos",
    label: "DDoS (botnet flood)",
    icon: "Waves",
    category: "Network",
    phase: "Impact",
    summary: "Recruits every reachable host and IoT device as a bot, then floods one target from all of them at once.",
    indicators: "Traffic from many distinct sources arriving at one destination, each source individually unremarkable.",
    detect: "Device → Status shows CPU and drop counters climbing; the capture shows many source addresses.",
    nextStep: "A defender would measure which sources dominate and ask the upstream provider to filter, rather than fighting it at the edge.",
    mitigation: "Upstream rate limiting and scrubbing. Blocking one source achieves nothing, and fixing the bots default credentials is what stops the botnet existing.",
    canTarget: (e) => !!(e.services.http || e.services.ssh || e.services.ftp),
    run: ly
  },
  "brute-force": {
    id: "brute-force",
    label: "Brute-Force Login",
    icon: "KeyRound",
    category: "Credential",
    summary: "Replays a 10-word demo list against the simulated SSH/FTP login state machine and tracks lock-out counters.",
    phase: "Credential Access",
    indicators: "Many failed authentications from one source in a short window, then one success.",
    detect: "Device → Security shows the failure counter; the attack log shows each attempt.",
    nextStep: "A tester would check whether the same password unlocks other hosts — credential reuse is usually the real finding.",
    mitigation: "Set a password outside the wordlist and a non-zero attempt limit.",
    needsPayload: !1,
    canTarget: (e) => !!(e.services.ssh || e.services.ftp),
    run: Qx
  },
  "syn-flood": {
    id: "syn-flood",
    label: "SYN Flood (DoS)",
    icon: "Waves",
    category: "Network",
    summary: "Drives the target’s synthetic CPU, memory and packet-drop counters until the accept queue is exhausted.",
    phase: "Impact",
    indicators: "Half-open connections climbing while completed sessions stay flat.",
    detect: "Device → Status: CPU and packet-drop counters rising together.",
    nextStep: "Confirm whether the service recovers on its own, then measure how much traffic it actually took.",
    mitigation: "Enable SYN cookies, or deny the source with an ACL.",
    needsPayload: !1,
    canTarget: (e) => !!(e.services.http || e.services.ssh || e.services.ftp),
    run: Xx
  },
  "arp-spoof": {
    id: "arp-spoof",
    label: "ARP Spoof (MitM)",
    icon: "GitFork",
    category: "Network",
    summary: "Rewrites the victim’s and gateway’s in-memory ARP tables so simulated frames detour through the attacker.",
    phase: "Collection",
    indicators: "Two IP addresses reporting the same MAC address in the ARP table.",
    detect: "Run `arp -a` on the victim, or `show arp` on the gateway, and look for the duplicate.",
    nextStep: "Once on-path, a tester would look for credentials in cleartext protocols before touching anything else.",
    mitigation: "Enable Dynamic ARP Inspection on the gateway.",
    needsPayload: !1,
    canTarget: (e) => e.role === "host" || e.role === "iot" || e.role === "router",
    run: Jx
  },
  sqli: {
    id: "sqli",
    label: "SQL Injection",
    icon: "Database",
    category: "Application",
    summary: "Matches your input against injection signatures and returns the mock database’s scripted response.",
    phase: "Execution",
    indicators: "Input containing quotes, UNION or comment markers reaching the application, and database errors in the response.",
    detect: "Capture pane — filter `http` and read the request body.",
    nextStep: "A tester would establish what the injection can reach, then report it rather than dump the data.",
    mitigation: "Turn on input sanitisation (parameterised queries) for the web app.",
    needsPayload: !0,
    defaultPayload: "' OR '1'='1' UNION SELECT flag FROM secrets--",
    canTarget: (e) => !!e.database,
    run: ey
  },
  "port-scan": {
    id: "port-scan",
    label: "Port Scan",
    icon: "ScanSearch",
    category: "Reconnaissance",
    summary: "Probes the target’s service table and reports which ports answer. Every probe appears in the capture.",
    phase: "Reconnaissance",
    indicators: "One source touching many ports on one host in quick succession.",
    detect: "Capture pane — filter `tcp` and watch the sequential destination ports.",
    nextStep: "Scanning only says what is listening. The next question is what version it is, and whether it is exposed deliberately.",
    mitigation: "Stop unused services, or deny the scanning host with an ACL.",
    needsPayload: !1,
    canTarget: (e) => e.role !== "attacker",
    run: sy
  },
  "vuln-scan": {
    id: "vuln-scan",
    label: "Vulnerability Scan",
    icon: "ShieldCheck",
    category: "Assessment",
    summary: "Audits a host — or everything reachable — against a checklist of common weaknesses, and reports each finding with a severity, a score, the evidence and the fix. Leave the target unset to sweep the whole network.",
    phase: "Reconnaissance",
    indicators: "Broad, low-rate probing of many services across many hosts, often from one address.",
    detect: "Authenticated scans are usually agreed in advance. An unexpected one is itself the finding.",
    nextStep: "A finding is a hypothesis until it is confirmed. Work top-down by severity, fix, re-run, and watch the risk score move.",
    mitigation: "Scanning is the defensive tool here: run it yourself, on a schedule, and treat the report as a work queue.",
    needsPayload: !1,
    // Leaving the target unset audits everything reachable, rather than
    // having a host picked on the student's behalf.
    needsTarget: !1,
    canTarget: (e) => e.role !== "attacker",
    run: ay
  },
  "wifi-snoop": {
    id: "wifi-snoop",
    label: "WiFi Snooping",
    icon: "Antenna",
    category: "Wireless",
    summary: "Drops the radio into monitor mode and captures every frame in range. Open networks yield readable payloads; WPA2 yields ciphertext.",
    phase: "Reconnaissance",
    indicators: "Nothing. A passive monitor-mode capture transmits nothing and cannot be seen from the network.",
    detect: "It cannot be detected — which is the lesson. Encryption is the control, not detection.",
    nextStep: "Having mapped the cell, a tester would check whether traffic is encrypted and whether management frames are protected.",
    mitigation: "Use WPA2/WPA3 on the SSID and HTTPS in the application.",
    needsPayload: !1,
    needsTarget: !1,
    requiresRadio: !0,
    canTarget: () => !0,
    run: ty
  },
  deauth: {
    id: "deauth",
    label: "Deauthentication",
    icon: "WifiOff",
    category: "Wireless",
    summary: "Forges management frames to knock a station off its access point. The association link disappears from the canvas.",
    phase: "Impact",
    indicators: "Deauthentication frames claiming to come from the AP, followed by clients re-associating.",
    detect: "Capture pane — filter `wlan` and look for deauth frames sourced from the AP.",
    nextStep: "Deauth is usually a means, not an end: it forces a re-association so a handshake can be captured.",
    mitigation: "Enable 802.11w Protected Management Frames on the access point.",
    needsPayload: !1,
    requiresRadio: !0,
    canTarget: (e) => !!(e.radio || e.ap),
    run: ny
  },
  "evil-twin": {
    id: "evil-twin",
    label: "Evil Twin AP",
    icon: "Copy",
    category: "Wireless",
    summary: "Stands up a rogue open access point cloning a real SSID. Clients set to auto-join hop across and their traffic transits the attacker.",
    phase: "Initial Access",
    indicators: "Two access points advertising one SSID, with different BSSIDs and different security.",
    detect: "Scan from a client and compare BSSIDs; the clone usually advertises weaker security.",
    nextStep: "Once clients associate to the rogue, every unencrypted protocol they use is readable.",
    mitigation: "Pin client profiles to WPA2/WPA3 so an open clone is never joined.",
    needsPayload: !1,
    requiresRadio: !0,
    canTarget: (e) => !!e.ap,
    run: ry
  }
}, cy = [
  "Reconnaissance",
  "Initial Access",
  "Credential Access",
  "Execution",
  "Collection",
  "Impact"
], uy = ["Reconnaissance", "Wireless", "Network", "Credential", "Application"];
function or(e, t) {
  const n = fr[e];
  if (!n) throw new Error(`Unknown exercise: ${e}`);
  if (!t.attacker) {
    t.engine.log(se, "Select the node the exercise runs from.", "error");
    return;
  }
  if (n.requiresRadio && !t.attacker.radio) {
    t.engine.log(se, `${t.attacker.hostname} has no radio — use a Threat Actor or a wireless host.`, "error");
    return;
  }
  const r = n.category === "Wireless";
  if (n.needsTarget !== !1 && !r) {
    if (!t.target) {
      t.engine.log(se, "Select a target node.", "error");
      return;
    }
    if (t.attacker.id === t.target.id) {
      t.engine.log(se, "Attacker and target must be different nodes.", "error");
      return;
    }
    if (!G(t.engine.getTopology(), t.attacker.id, t.target.id)) {
      t.engine.log(se, "No path between attacker and target — connect them first.", "error");
      return;
    }
  }
  const s = t.payload ?? n.defaultPayload ?? "";
  t.target && (t.target.runtime.lastExercise = e), t.attacker.runtime.lastLaunched = e, n.run({ ...t, payload: s });
}
const dy = (e) => $t(`${e.id}:0`);
function py(e) {
  const t = e.role === "attacker", n = e.cli.sshUser || (t ? "root" : e.security.username), r = e.cli.sshHost || (t ? "kali" : e.hostname.toLowerCase());
  return `${n}@${r}:~${t && !e.cli.sshHost ? "#" : "$"} `;
}
function hy(e, t, n) {
  const { log: r, engine: s, topology: o } = n, i = t.trim();
  if (!i) return;
  const l = i.split(/\s+/), c = l[0].toLowerCase();
  switch (c) {
    case "help":
    case "?":
      return vy(r, e);
    case "ip":
      return l[1] === "a" || l[1] === "addr" || l[1] === "address" ? Uu(e, r) : l[1] === "r" || l[1] === "route" ? fy(e, r) : l[1] === "neigh" ? Bu(e, r) : r("Usage: ip {a|route|neigh}", "error");
    case "ifconfig":
      return Uu(e, r);
    case "arp":
      return Bu(e, r);
    case "ping": {
      const u = l.find((h, f) => f > 0 && !h.startsWith("-"));
      if (!u) return r("Usage: ping <host>", "error");
      const d = l.indexOf("-c"), p = d > -1 && Number(l[d + 1]) || 4;
      s.ping(e, u, n.channel, { count: Math.min(p, 8) });
      return;
    }
    case "traceroute":
    case "tracepath":
      if (!l[1]) return r("Usage: traceroute <host>", "error");
      s.traceroute(e, l[1], n.channel);
      return;
    case "dig":
    case "nslookup":
      if (!l[1]) return r("Usage: dig <name>", "error");
      s.dnsLookup(e, l[1], n.channel);
      return;
    case "dhclient":
      r("Requesting a lease…", "dim"), s.dhcpRequest(e, n.channel);
      return;
    case "ssh":
      return gy(e, l, n);
    case "exit":
    case "logout":
      e.cli.sshHost && (r(`Connection to ${e.cli.sshHost} closed.`, "dim"), e.cli.sshHost = null, e.cli.sshUser = null, n.commit());
      return;
    case "systemctl":
      return my(e, l, n);
    case "ss":
    case "netstat":
      r("Netid  State   Local Address:Port", "dim");
      for (const u of Cn(e)) {
        const d = Rt[u];
        r(`tcp    LISTEN  ${_(e) || "0.0.0.0"}:${d ? d.port : "?"}   (${u})`);
      }
      Cn(e).length || r("(no services listening)", "dim");
      return;
    case "curl":
    case "wget": {
      const d = (l[1] || "").replace(/^https?:\/\//, "").split("/")[0], p = Je(o, d);
      if (!p) return r(`${c}: could not resolve host: ${d}`, "error");
      if (!p.services.http) return r(`${c}: connection refused`, "error");
      const h = s.adjudicate(e, d);
      if (!h.ok) return r(`${c}: ${h.reason}`, "error");
      s.emit(h.path, "http"), r("HTTP/1.1 200 OK", "success"), r(`Server: Apache (simulated) on ${p.hostname}`, "dim"), r(`<h1>${p.hostname}</h1><form action="/search">…</form>`, "dim");
      return;
    }
    case "sqlquery": {
      const u = l[1], d = l.slice(2).join(" "), p = Je(o, u);
      if (!p || !p.database) return r("Usage: sqlquery <web-host> <input>", "error");
      const h = ef(p, d);
      r(`POST http://${_(p)}/search`, "dim");
      for (const f of h.lines) r(f, h.vulnerable ? "warn" : "success");
      h.flag && r(`exfiltrated: ${h.flag}`, "error"), n.commit();
      return;
    }
    case "cat": {
      const u = l[1] || "";
      if (/flag/.test(u))
        return e.database ? r(e.database.flag, "success") : r("cat: flag.txt: No such file or directory", "error");
      if (/passwd/.test(u)) {
        r("root:x:0:0:root:/root:/bin/bash", "dim"), r(`${e.security.username}:x:1000:1000::/home/${e.security.username}:/bin/bash`, "dim");
        return;
      }
      if (/hosts/.test(u)) {
        r("127.0.0.1  localhost", "dim"), r(`${_(e) || "127.0.1.1"}  ${e.hostname.toLowerCase()}`, "dim");
        return;
      }
      return r(`cat: ${u}: No such file or directory`, "error");
    }
    case "ls":
      r(e.database ? "app.py  flag.txt  index.html  static/" : "notes.txt  readme.md", "dim");
      return;
    case "whoami":
      r(e.cli.sshUser || e.security.username);
      return;
    case "hostname":
      if (l[1]) {
        e.hostname = l[1], n.commit();
        return;
      }
      r(e.hostname);
      return;
    case "uptime":
      r(`up ${Math.floor(s.clock / 1e3)}s,  load average: ${(e.runtime.cpu / 25).toFixed(2)}`, "dim");
      return;
    case "top":
      r(`%Cpu(s): ${e.runtime.cpu.toFixed(1)} us   MiB used: ${e.runtime.memory.toFixed(0)}`, e.runtime.cpu > 80 ? "error" : "info"), r(`packets in ${e.runtime.packetsIn} / out ${e.runtime.packetsOut} / dropped ${e.runtime.packetsDropped}`, "dim"), e.runtime.unresponsive && r("service saturated — requests are being dropped", "error");
      return;
    case "clear":
      n.clearConsole();
      return;
    case "iwconfig":
      if (!e.radio) return r("iwconfig: no wireless extensions.", "error");
      r(`${e.interfaces[0].name}  IEEE 802.11  ESSID:"${e.radio.ssid || "any"}"`, "info"), r(`          Mode:${e.radio.monitorMode ? "Monitor" : "Managed"}  Range:${e.radio.range}px`, "dim");
      return;
    case "iwlist":
      return Wu(e, n);
    case "airmon-ng": {
      if (!e.radio) return r("airmon-ng: no wireless interface.", "error");
      const u = (l[1] || "start") === "start";
      e.radio.monitorMode = u, e.capturing = u || e.capturing, r(`${u ? "Enabling" : "Disabling"} monitor mode on ${e.interfaces[0].name}`, u ? "success" : "warn"), n.commit();
      return;
    }
    case "airodump-ng":
      return e.radio ? e.radio.monitorMode ? Wu(e, n) : r("airodump-ng: interface is not in monitor mode (run airmon-ng start).", "error") : r("airodump-ng: no wireless interface.", "error");
    case "tcpdump":
      return xy(e, l, n);
    case "nmap":
    case "aireplay-ng":
    case "arpspoof":
    case "hydra":
      return e.role !== "attacker" ? r(`${c}: command not found`, "error") : yy(e, c, l, n);
    case "passwd": {
      const u = l[1];
      if (!u) return r("Usage: passwd <new-password>", "error");
      e.security.password = u, r("passwd: password updated successfully", "success"), n.commit();
      return;
    }
    default:
      r(`${c}: command not found`, "error");
  }
}
function Uu(e, t) {
  e.interfaces.forEach((n, r) => {
    t(`${r + 1}: ${n.name}: <${n.enabled ? "UP,BROADCAST,RUNNING" : "NO-CARRIER,DOWN"}> mtu 1500`, n.enabled ? "success" : "dim"), t(`    link/ether ${n.mac}`, "dim"), n.ip ? t(`    inet ${n.ip}/${qe(n.mask)} scope global ${n.name}`) : t("    inet (none)", "dim");
  });
}
function fy(e, t) {
  for (const n of e.interfaces)
    n.ip && t(`${n.ip}/${qe(n.mask)} dev ${n.name} scope link`);
  e.gateway ? t(`default via ${e.gateway} dev ${e.interfaces[0].name}`, "success") : t("(no default route — set a gateway)", "dim");
}
function Bu(e, t) {
  const n = Object.entries(e.arp);
  if (!n.length) return t("(neighbour table empty — send traffic first)", "dim");
  for (const [r, s] of n)
    t(
      `${r} dev ${e.interfaces[0].name} lladdr ${s.mac} ${s.spoofed ? "STALE  << duplicate address detected" : "REACHABLE"}`,
      s.spoofed ? "error" : "info"
    );
}
function my(e, t, n) {
  const { log: r } = n, s = t[1], o = (t[2] || "").replace(/\.service$/, "");
  if (!s || s === "status") {
    if (!o) {
      for (const [i, l] of Object.entries(e.services))
        r(`${i.padEnd(10)} ${l ? "active (running)" : "inactive (dead)"}`, l ? "success" : "dim");
      return;
    }
    return r(`${o}: ${e.services[o] ? "active (running)" : "inactive (dead)"}`, e.services[o] ? "success" : "dim");
  }
  if (!o) return r("Usage: systemctl {start|stop|status} UNIT", "error");
  if (!(o in e.services) && s !== "start") return r(`Unit ${o}.service not found.`, "error");
  if (s === "start")
    e.services[o] = !0, r(`${o} started`, "success");
  else if (s === "stop")
    e.services[o] = !1, r(`${o} stopped`, "warn");
  else return r("Usage: systemctl {start|stop|status} UNIT", "error");
  n.commit();
}
function gy(e, t, n) {
  const { log: r, engine: s, topology: o } = n, i = t[1];
  if (!i) return r("Usage: ssh [user@]host", "error");
  const [l, c] = i.includes("@") ? i.split("@") : [null, i], u = Je(o, c);
  if (!u) return r(`ssh: Could not resolve hostname ${c}`, "error");
  const d = s.adjudicate(e, c);
  if (!d.ok) return r(`ssh: connect to host ${c}: ${d.reason}`, "error");
  if (!u.services.ssh) return r(`ssh: connect to host ${c} port 22: Connection refused`, "error");
  if (af(u, s.clock))
    return r(`ssh: ${u.hostname} is refusing logins (account locked after repeated failures)`, "error");
  s.emit(d.path, "http", { ssh: !0 });
  const p = l || u.security.username, h = t.indexOf("-p"), f = h > -1 ? t[h + 1] : null;
  if (f !== null && f !== u.security.password) {
    const g = Ui(u, s.clock);
    return n.commit(), r(`Permission denied (publickey,password). Failures: ${g.failures}`, "error");
  }
  if (r(`Warning: Permanently added '${c}' (ED25519) to the list of known hosts.`, "dim"), f === null && u.security.password) {
    r(`${p}@${c}'s password:`, "dim"), ws(e, {
      purpose: "login",
      expected: u.security.password,
      onSuccess: (g) => {
        An(e, u, "ssh", p), u.banner && g.log(u.banner, "warn"), g.log(`Welcome to ${u.hostname} (simulated). Type "exit" to return.`, "success");
      },
      onFail: (g) => {
        Ui(u, s.clock), g.log("Permission denied (publickey,password).", "error");
      }
    }), n.commit();
    return;
  }
  An(e, u, "ssh", p), u.banner && r(u.banner, "warn"), r(`Welcome to ${u.hostname} (simulated)`, "success"), r(`Session opened as ${p}. Type "exit" to return to ${e.hostname}.`, "dim"), n.commit();
}
function Wu(e, t) {
  const { log: n, topology: r } = t, s = nf(r, e);
  if (!s.length) return n("No networks in range.", "dim");
  n("BSSID               PWR  CH  ENC       ESSID", "dim");
  for (const { ap: o, dbm: i } of s) {
    const l = (o.ap.security || "open").toUpperCase();
    n(
      `${dy(o).padEnd(19)} ${String(i).padStart(4)}  ${String(o.ap.channel).padStart(2)}  ${l.padEnd(9)} ${o.ap.ssid}`,
      l === "OPEN" ? "warn" : "info"
    );
  }
  n(`${s.length} network(s). Open networks carry readable payloads.`, "dim");
}
function xy(e, t, n) {
  const { log: r, engine: s } = n;
  e.capturing = !0, n.commit();
  const o = t.indexOf("-c"), i = o > -1 && Number(t[o + 1]) || 10, l = t.filter((u, d) => d > 0 && !u.startsWith("-") && t[d - 1] !== "-c").join(" "), c = s.capture.for(e.id).filter((u) => pf(u, l)).slice(-i);
  if (r(`tcpdump: verbose output suppressed, listening on ${e.interfaces[0].name}`, "dim"), !c.length) {
    r("0 packets captured.", "dim"), r("Nothing has been witnessed from here yet. On switched Ethernet that is", "dim"), r("expected — a switch does not flood unicast. Try monitor mode on WiFi.", "dim");
    return;
  }
  for (const u of c)
    r(
      `${u.time.toFixed(6)} ${u.source} > ${u.destination}: ${u.protocol} ${u.length} ${u.info}`,
      u.encrypted ? "dim" : "info"
    );
  r(`${c.length} packets captured. Full decode in the Packet Capture tab.`, "success");
}
function yy(e, t, n, r) {
  const { log: s, engine: o, topology: i } = r, l = r.commit, c = () => r.focusChannel && r.focusChannel("attack");
  if (t === "nmap") {
    const u = Je(i, n[n.length - 1]);
    if (!u) return s("nmap: could not resolve target.", "error");
    s(`Starting Nmap against ${n[n.length - 1]} — results in the Cyber Range tab.`, "dim"), c(), or("port-scan", { engine: o, attacker: e, target: u, commit: l });
    return;
  }
  if (t === "aireplay-ng") {
    const u = Je(i, n[n.length - 1]);
    if (!u) return s("aireplay-ng: specify a station, e.g. aireplay-ng --deauth 5 Laptop0", "error");
    s("Sending deauthentication frames — results in the Cyber Range tab.", "dim"), c(), or("deauth", { engine: o, attacker: e, target: u, commit: l });
    return;
  }
  if (t === "arpspoof") {
    const u = Je(i, n[n.length - 1]);
    s("Poisoning the local segment — results in the Cyber Range tab.", "dim"), c(), or("arp-spoof", { engine: o, attacker: e, target: u || e, commit: l });
    return;
  }
  if (t === "hydra") {
    const u = Je(i, n[n.length - 1]);
    if (!u) return s("hydra: could not resolve target.", "error");
    s("Running the credential list — results in the Cyber Range tab.", "dim"), c(), or("brute-force", { engine: o, attacker: e, target: u, commit: l });
    return;
  }
}
function vy(e, t) {
  e("Networking:  ip a | ip route | ip neigh | arp | ping HOST | traceroute HOST", "dim"), t && t.radio && e("Wireless:    iwconfig | iwlist scan | airmon-ng start|stop | airodump-ng", "dim"), e("Capture:     tcpdump [-c N] [filter]   e.g. tcpdump -c 20 http", "dim"), t && t.role === "attacker" && e("Offensive:   nmap HOST | aireplay-ng --deauth N STATION | arpspoof HOST | hydra HOST", "dim"), e("Name service: dig NAME | nslookup NAME | dhclient", "dim"), e("Services:    systemctl status|start|stop UNIT | ss", "dim"), e("Remote:      ssh [user@]host [-p PASSWORD] | exit", "dim"), e("Web/DB lab:  curl http://HOST | sqlquery HOST <input>", "dim"), e("Files:       ls | cat flag.txt | cat /etc/passwd | passwd NEW", "dim"), e("Host:        top | uptime | whoami | hostname | clear", "dim");
}
const Vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  execute: hy,
  prompt: py
}, Symbol.toStringTag, { value: "Module" }));
function wy(e) {
  return `C:\\Users\\${e.security.username}>`;
}
function zo(e) {
  return e.media === "wifi" ? "Wireless LAN adapter Wi-Fi" : e.media === "ethernet" ? `Ethernet adapter ${e.name}` : e.media === "serial" ? `Serial port ${e.name}` : e.media === "usb" ? `USB device ${e.name}` : `Adapter ${e.name}`;
}
function by(e, t, n) {
  const { log: r, engine: s, topology: o } = n, i = t.trim();
  if (!i) return;
  const l = i.split(/\s+/), c = l[0].toLowerCase(), u = l.filter((p) => p.startsWith("/") || p.startsWith("-")).map((p) => p.toLowerCase()), d = l.slice(1).filter((p) => !p.startsWith("/") && !p.startsWith("-"));
  switch (c) {
    case "help":
    case "?":
      return Ny(r);
    case "ipconfig":
      return Vu(e, u, n);
    case "ping": {
      const p = d[0];
      if (!p) return r("Usage: ping [-n count] <destination>", "error");
      const h = l.findIndex((g) => g.toLowerCase() === "-n"), f = h > -1 ? Math.min(10, Number(l[h + 1]) || 4) : 4;
      s.ping(e, p, n.channel, { count: f });
      return;
    }
    case "tracert":
      if (!d[0]) return r("Usage: tracert <destination>", "error");
      r(`Tracing route to ${d[0]} over a maximum of 30 hops`, "info"), r(""), s.traceroute(e, d[0], n.channel);
      return;
    case "nslookup": {
      if (!d[0]) return r("Usage: nslookup <name>", "error");
      const p = o.devices.find((h) => h.services.dns);
      r(`Server:  ${p ? p.hostname : "UnKnown"}`, "dim"), r(`Address:  ${p ? _(p) : "—"}`, "dim"), r(""), s.dnsLookup(e, d[0], n.channel);
      return;
    }
    case "arp":
      return ky(e, u, n);
    case "netstat":
      return Sy(e, u, n);
    case "route":
      return (d[0] || "").toLowerCase() === "print" ? jy(e, n) : r("Usage: route print", "error");
    case "getmac":
      r(""), r("Physical Address      Transport Name", "dim"), r("===================   ==========================================", "dim");
      for (const p of e.interfaces.filter((h) => h.media !== "console"))
        r(`${p.mac.replace(/:/g, "-").toUpperCase()}   ${zo(p)}`);
      return;
    case "hostname":
      return r(e.hostname);
    case "systeminfo":
      r(`Host Name:                 ${e.hostname.toUpperCase()}`), r("OS Name:                   NetRange Simulated Windows"), r("OS Version:                10.0 (educational build)"), r(`Logon Server:              \\\\${e.hostname.toUpperCase()}`), r(`Network Card(s):           ${e.interfaces.filter((p) => p.media !== "console").length} NIC(s) Installed.`);
      for (const p of e.interfaces.filter((h) => h.media !== "console"))
        r(`                           ${zo(p)}: ${p.ip || "DHCP / unassigned"}`);
      return;
    case "ipconfig/all":
      return Vu(e, ["/all"], n);
    case "telnet":
      return qu(e, d, "telnet", n);
    case "ssh":
      return qu(e, d, "ssh", n);
    case "cls":
      n.clearConsole();
      return;
    case "dir":
      r(" Volume in drive C has no label."), r(""), r(" Directory of C:\\Users\\" + e.security.username), r(""), r("13/09/2026  09:14    <DIR>          Documents"), r("13/09/2026  09:14    <DIR>          Downloads"), r("13/09/2026  09:14             1,024 notes.txt"), r("               1 File(s)          1,024 bytes");
      return;
    case "echo":
      return r(l.slice(1).join(" "));
    case "exit":
      r("Nothing to exit — this is the local console.", "dim");
      return;
    default:
      r(`'${l[0]}' is not recognized as an internal or external command,`, "error"), r("operable program or batch file.", "error");
  }
}
function Vu(e, t, n) {
  var i, l;
  const { log: r, topology: s } = n, o = t.includes("/all") || t.includes("-all");
  r(""), r("Windows IP Configuration"), r(""), o && (r(`   Host Name . . . . . . . . . . . . : ${e.hostname}`), r(`   Primary Dns Suffix  . . . . . . . : ${e.domainName || ""}`), r("   Node Type . . . . . . . . . . . . : Hybrid"), r("   IP Routing Enabled. . . . . . . . : No"), r(""));
  for (const c of e.interfaces) {
    if (c.media === "console" || c.media === "serial" || c.media === "usb") continue;
    const u = c.media === "wifi" ? !!((i = e.radio) != null && i.associatedTo) : !!c.link;
    if (r(`${zo(c)}:`), r(""), !u && !c.ip) {
      r("   Media State . . . . . . . . . . . : Media disconnected"), r("   Connection-specific DNS Suffix  . : "), r("");
      continue;
    }
    if (o && (r(`   Description . . . . . . . . . . . : ${c.media === "wifi" ? "Wireless Network Adapter" : "Gigabit Network Connection"}`), r(`   Physical Address. . . . . . . . . : ${c.mac.replace(/:/g, "-").toUpperCase()}`), r(`   DHCP Enabled. . . . . . . . . . . : ${e.dhcpLease ? "Yes" : "No"}`), r("   Autoconfiguration Enabled . . . . : Yes")), r(`   IPv4 Address. . . . . . . . . . . : ${c.ip || "169.254.1.1(Preferred)"}`), r(`   Subnet Mask . . . . . . . . . . . : ${c.mask}`), r(`   Default Gateway . . . . . . . . . : ${e.gateway || ""}`), o) {
      const d = s.devices.find((p) => p.services.dns);
      r(`   DNS Servers . . . . . . . . . . . : ${d ? _(d) : ""}`), c.media === "wifi" && ((l = e.radio) != null && l.ssid) && r(`   SSID. . . . . . . . . . . . . . . : ${e.radio.ssid}`);
    }
    r("");
  }
  o || r("For the full adapter detail, run: ipconfig /all", "dim");
}
function ky(e, t, n) {
  const { log: r } = n, s = Object.entries(e.arp || {});
  if (r(""), r(`Interface: ${_(e) || "0.0.0.0"} --- 0x2`), r("  Internet Address      Physical Address      Type", "dim"), !s.length) {
    r("  (no entries — send traffic first, e.g. ping a neighbour)", "dim");
    return;
  }
  for (const [o, i] of s)
    r(
      `  ${o.padEnd(22)}${String(i.mac).replace(/:/g, "-").padEnd(22)}${i.static ? "static" : "dynamic"}`,
      i.spoofed ? "error" : "info"
    );
  s.some(([, o]) => o.spoofed) && (r("", "dim"), r("  Note: two addresses share a physical address — that is what ARP poisoning looks like.", "warn"));
}
function Sy(e, t, n) {
  var l;
  const { log: r } = n, s = t.some((c) => c.includes("n"));
  r(""), r("Active Connections"), r(""), r("  Proto  Local Address          Foreign Address        State", "dim");
  const o = _(e) || "0.0.0.0", i = Object.entries(e.services).filter(([, c]) => c);
  if (!i.length && !((l = e.cli.sessions) != null && l.length)) {
    r("  (no listening services and no open sessions)", "dim");
    return;
  }
  for (const [c] of i) {
    const u = Rt[c];
    r(`  TCP    ${`${o}:${u ? u.port : "0"}`.padEnd(23)}${"0.0.0.0:0".padEnd(23)}LISTENING`);
  }
  for (const c of e.cli.sessions || []) {
    const u = c.protocol === "ssh" ? 22 : 23;
    r(`  TCP    ${`${o}:49${u}`.padEnd(23)}${`remote:${u}`.padEnd(23)}ESTABLISHED`);
  }
  s || r("", "dim");
}
function jy(e, t) {
  const { log: n } = t;
  n("==========================================================================="), n("Interface List");
  for (const [s, o] of e.interfaces.filter((i) => i.media !== "console").entries())
    n(` ${String(s + 2).padStart(2)}...${o.mac.replace(/:/g, " ")} ......${zo(o)}`);
  n("==========================================================================="), n(""), n("IPv4 Route Table"), n("==========================================================================="), n("Active Routes:", "dim"), n("Network Destination        Netmask          Gateway       Interface  Metric", "dim");
  const r = _(e);
  e.gateway && n(`          0.0.0.0          0.0.0.0  ${e.gateway.padEnd(15)}${(r || "").padEnd(11)}     25`);
  for (const s of e.interfaces) {
    if (!s.ip) continue;
    const o = qe(s.mask), i = s.ip.split(".").slice(0, Math.max(1, Math.floor((o || 24) / 8))).join(".");
    n(`${(i + ".0").padStart(17)}  ${s.mask.padEnd(15)}  ${"On-link".padEnd(13)}${s.ip.padEnd(11)}    281`);
  }
  n("==========================================================================="), e.gateway || n("No default route — set a default gateway to leave this subnet.", "warn");
}
function qu(e, t, n, r) {
  var h;
  const { log: s, engine: o, topology: i } = r, l = t[0];
  if (!l) return s(`Usage: ${n} ${n === "ssh" ? "[user@]host" : "<host>"}`, "error");
  const [c, u] = l.includes("@") ? l.split("@") : [null, l], d = Je(i, u);
  if (!d)
    return s(
      n === "telnet" ? `Connecting To ${u}...Could not open connection to the host, on port 23: Connect failed` : `ssh: Could not resolve hostname ${u}`,
      "error"
    );
  const p = o.adjudicate(e, u);
  if (!p.ok) return s(`Connecting To ${u}... ${p.reason}`, "error");
  if (d.os !== "ios" && !d.services[n])
    return s(
      `Could not open connection to the host, on port ${n === "ssh" ? 22 : 23}: Connect failed`,
      "error"
    );
  if (d.os === "ios") {
    const f = (h = d.lines) == null ? void 0 : h.vty;
    if (f && Array.isArray(f.transport) && !f.transport.includes(n))
      return s(`Connection refused by remote host — vty lines do not permit ${n}.`, "error");
    if (n === "ssh" && !d.cryptoKey)
      return s("Connection refused — no RSA key on the remote device (crypto key generate rsa).", "error");
    if (f != null && f.login && !f.password)
      return s("Password required, but none set — remote refused the connection.", "error");
    if (f != null && f.login && f.password) {
      s(`Connecting To ${u}...`, "dim"), ws(e, {
        purpose: "vty",
        expected: f.password,
        onSuccess: (g) => {
          An(e, d, n, c || "student"), g.log(d.banner || "", d.banner ? "warn" : "dim"), g.log(`[Connected to ${d.hostname}]`, "success");
        },
        onFail: (g) => g.log(`[Connection to ${u} closed by remote host]`, "error")
      }), r.commit();
      return;
    }
  } else if (d.security.password) {
    s(`${c || d.security.username}@${u}'s password:`, "dim"), ws(e, {
      purpose: "login",
      expected: d.security.password,
      onSuccess: (f) => {
        An(e, d, n, c || d.security.username), f.log(`[Connected to ${d.hostname}]`, "success");
      },
      onFail: (f) => f.log("Permission denied (password).", "error")
    }), r.commit();
    return;
  }
  An(e, d, n, c || "student"), d.banner && s(d.banner, "warn"), s(`[Connected to ${d.hostname}] — type exit to return.`, "success"), r.commit();
}
function Ny(e) {
  e("Network:     ipconfig [/all] | ping [-n N] host | tracert host | nslookup name"), e("Tables:      arp -a | netstat [-an] | route print | getmac"), e("Remote:      telnet host | ssh [user@]host     (exit to come back)"), e("System:      hostname | systeminfo | dir | cls | echo text");
}
const Cy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  execute: by,
  prompt: wy
}, Symbol.toStringTag, { value: "Module" })), $y = { ios: Wx, linux: Vi, kali: Vi, windows: Cy }, qi = (e) => $y[e == null ? void 0 : e.os] || Vi, Py = /^(exit|logout|quit|disconnect)$/i;
function xf(e, t, n) {
  var i;
  const { device: r, chain: s } = la(e, n.topology);
  if ((i = r.cli) != null && i.pending) return Mx(r, t, n);
  const o = t.trim();
  if (s.length && Py.test(o)) {
    if (r.os === "ios" && ["config", "config-if", "config-vlan", "config-line"].includes(r.cli.mode)) return qi(r).execute(r, t, n);
    const c = Tx(e, n.topology);
    n.log(`[Connection to ${(c == null ? void 0 : c.hostname) || "host"} closed]`, "dim"), n.commit();
    return;
  }
  return qi(r).execute(r, t, n);
}
function Gi(e, t = null) {
  var r;
  const { device: n } = la(e, t);
  return (r = n.cli) != null && r.pending ? n.cli.pending.prompt || "Password: " : qi(n).prompt(n);
}
function Gu(e, t = null) {
  var r, s;
  const { device: n } = la(e, t);
  return !!((s = (r = n.cli) == null ? void 0 : r.pending) != null && s.secret);
}
const Oo = 1, cc = {
  "recon-map": {
    id: "recon-map",
    label: "Map the network",
    points: 10,
    phase: "Reconnaissance",
    red: "Scan a host and discover at least one listening service.",
    blue: "Close services nobody needs; a smaller surface is less to find.",
    test: ({ topology: e }) => e.devices.some((t) => t.runtime.lastExercise === "port-scan" && Object.values(t.services).some(Boolean))
  },
  "creds-cracked": {
    id: "creds-cracked",
    label: "Break a login",
    points: 25,
    phase: "Credential Access",
    red: "Recover a working password by brute force or phishing.",
    blue: "Strong passwords, an attempt limit, awareness training and MFA.",
    test: ({ topology: e }) => e.devices.some((t) => t.runtime.compromised && t.security.password)
  },
  "wifi-broken": {
    id: "wifi-broken",
    label: "Get onto the wireless",
    points: 25,
    phase: "Initial Access",
    red: "Read traffic off the air, or stand up a clone clients will join.",
    blue: "WPA2 or better, a passphrase outside any wordlist, and protected management frames.",
    test: ({ topology: e }) => {
      const t = Er(e).some(
        (r) => !ae[r.ap.security] || !ae[r.ap.security].encrypted
      ), n = [...vt(e).values()].some((r) => r.rogue);
      return t || n;
    }
  },
  "mitm-onpath": {
    id: "mitm-onpath",
    label: "Get on the path",
    points: 20,
    phase: "Collection",
    red: "Poison ARP so traffic between a host and its gateway transits your node.",
    blue: "Dynamic ARP Inspection on the gateway.",
    test: ({ topology: e }) => e.devices.some((t) => Object.values(t.arp || {}).some((n) => n.spoofed))
  },
  "data-exfil": {
    id: "data-exfil",
    label: "Reach the data",
    points: 30,
    phase: "Execution",
    red: "Get the flag out of the web application’s database.",
    blue: "Parameterised queries, so crafted input is bound rather than executed.",
    test: ({ topology: e, engine: t }) => {
      var r;
      return e.devices.filter((s) => s.database).some((s) => s.runtime.compromised && !s.security.inputSanitised) ? !0 : (((r = t == null ? void 0 : t.capture) == null ? void 0 : r.frames) || []).some(
        (s) => {
          var o, i;
          return !s.encrypted && /FLAG\{sqli_/.test(((i = (o = s.layers) == null ? void 0 : o.payload) == null ? void 0 : i.text) || "");
        }
      );
    }
  },
  "creds-in-clear": {
    id: "creds-in-clear",
    label: "Capture a password in flight",
    points: 20,
    phase: "Collection",
    red: "Find a username and password travelling in cleartext.",
    blue: "Encrypt the link and the application — HTTPS and WPA2 both matter.",
    test: ({ engine: e }) => {
      var t, n;
      return (((n = (t = e == null ? void 0 : e.capture) == null ? void 0 : t.credentials) == null ? void 0 : n.call(t)) || []).length > 0;
    }
  },
  "social-foothold": {
    id: "social-foothold",
    label: "Talk a technician into helping",
    points: 20,
    phase: "Initial Access",
    red: "Build a pretext that checks out and get one of the technicians to act on it.",
    blue: "Awareness training, and a callback policy so a claimed identity is never taken on trust.",
    test: ({ topology: e }) => (e.personnel || []).some((t) => (t.granted || []).length > 0)
  },
  "insider-control": {
    id: "insider-control",
    label: "Get a control switched off from the inside",
    points: 30,
    phase: "Execution",
    red: 'Persuade a technician to read back a second factor or disable a protection "temporarily".',
    blue: "Least privilege: the person answering the phone should not be able to turn a control off.",
    test: ({ topology: e }) => (e.personnel || []).some(
      (t) => (t.granted || []).some((n) => n === "disable-control" || n === "read-mfa")
    )
  },
  "service-down": {
    id: "service-down",
    label: "Take a service offline",
    points: 20,
    phase: "Impact",
    red: "Saturate a server until it stops answering.",
    blue: "SYN cookies, rate limiting, and an ACL for a single noisy source.",
    test: ({ topology: e }) => e.devices.some((t) => t.runtime.unresponsive)
  }
}, uc = Object.values(cc), Ey = ["social-foothold", "insider-control"];
function yf(e) {
  return typeof btoa == "function" ? btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (t, n) => String.fromCharCode(parseInt(n, 16)))) : Buffer.from(e, "utf8").toString("base64");
}
function Ay(e) {
  return typeof atob == "function" ? decodeURIComponent(
    atob(e).split("").map((t) => `%${t.charCodeAt(0).toString(16).padStart(2, "0")}`).join("")
  ) : Buffer.from(e, "base64").toString("utf8");
}
function dc(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t ^= e.charCodeAt(n), t = t * 16777619 >>> 0;
  return t.toString(36).toUpperCase().padStart(7, "0").slice(0, 7);
}
function Iy(e, { name: t, author: n, objectives: r, minutes: s = 20, scenarioId: o = null, setupMinutes: i = null } = {}) {
  var h;
  const l = (e.personnel || []).length > 0, c = (r && r.length ? r : uc.map((f) => f.id)).filter((f) => cc[f]).filter((f) => l || !Ey.includes(f)), u = JSON.parse(JSON.stringify({
    devices: e.devices,
    links: e.links,
    zones: e.zones || [],
    // The technicians travel with the network. Their transcripts do not: red
    // starts the conversation themselves, with a clean slate of suspicion.
    personnel: (e.personnel || []).map((f) => ({
      ...f,
      suspicion: 0,
      reported: !1,
      transcript: [],
      granted: []
    }))
  }));
  for (const f of u.devices) {
    f.runtime = {
      cpu: 2,
      memory: 14,
      packetsIn: 0,
      packetsOut: 0,
      packetsDropped: 0,
      sessions: 0,
      compromised: !1,
      unresponsive: !1,
      underAttack: null
    }, f.cli = { mode: "user", ifaceCursor: null, saved: ((h = f.cli) == null ? void 0 : h.saved) ?? !1, sessions: [], pending: null }, f.capturing = !1;
    for (const g of Object.keys(f.arp || {})) f.arp[g].spoofed && delete f.arp[g];
    f.ap && (f.ap.deauthed = {}), f.ap && delete f.ap.rogue;
  }
  const d = {
    v: Oo,
    name: t || "Unnamed challenge",
    author: n || "Blue team",
    minutes: s,
    // the breach window red gets
    setupMinutes: i,
    // what blue was given, for the record
    scenarioId: o,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    objectives: c,
    personnel: u.personnel.length,
    topology: u
  }, p = JSON.stringify(d);
  return `NRC1.${dc(p)}.${yf(p)}`;
}
function Ty(e) {
  const t = String(e || "").trim().replace(/\s+/g, "");
  if (!t) return { ok: !1, reason: "Paste a challenge code first." };
  const n = t.split(".");
  if (n.length !== 3 || n[0] !== "NRC1")
    return { ok: !1, reason: "That does not look like a challenge code — it should start with NRC1." };
  let r;
  try {
    r = Ay(n[2]);
  } catch {
    return { ok: !1, reason: "The code is damaged and could not be decoded." };
  }
  if (dc(r) !== n[1])
    return { ok: !1, reason: "Checksum does not match — the code was truncated or edited in transit." };
  let s;
  try {
    s = JSON.parse(r);
  } catch {
    return { ok: !1, reason: "The code decoded but did not contain a readable challenge." };
  }
  return s.v !== Oo ? { ok: !1, reason: `This code is version ${s.v}; this build reads version ${Oo}.` } : !s.topology || !Array.isArray(s.topology.devices) ? { ok: !1, reason: "The challenge has no topology in it." } : { ok: !0, challenge: s };
}
function My(e, t, n) {
  var c;
  const r = (c = e == null ? void 0 : e.objectives) != null && c.length ? e.objectives : uc.map((u) => u.id), s = { topology: t, engine: n }, o = r.map((u) => {
    const d = cc[u];
    if (!d) return null;
    let p = !1;
    try {
      p = !!d.test(s);
    } catch {
      p = !1;
    }
    return { ...d, captured: p };
  }).filter(Boolean), i = o.reduce((u, d) => u + d.points, 0), l = o.filter((u) => u.captured).reduce((u, d) => u + d.points, 0);
  return {
    results: o,
    total: i,
    red: l,
    blue: i - l,
    capturedCount: o.filter((u) => u.captured).length,
    objectiveCount: o.length,
    redPercent: i ? Math.round(l / i * 100) : 0
  };
}
function Ly(e, t, { team: n = "Red team", elapsedSeconds: r = 0 } = {}) {
  const s = {
    v: Oo,
    challenge: (e == null ? void 0 : e.name) || "Unnamed challenge",
    team: n,
    elapsedSeconds: r,
    red: t.red,
    blue: t.blue,
    total: t.total,
    captured: t.results.filter((i) => i.captured).map((i) => i.id),
    at: (/* @__PURE__ */ new Date()).toISOString()
  }, o = JSON.stringify(s);
  return `NRR1.${dc(o)}.${yf(o)}`;
}
function Dy(e) {
  const t = [], n = (o, i, l) => t.push({ severity: o, device: i, text: l });
  for (const o of e.devices) {
    if (o.role === "attacker") continue;
    const i = o.hostname;
    if (Object.values(o.services).some(Boolean) && ((!o.security.password || o.security.password.length < 10) && n("high", i, "Password is short enough to be guessed by the demo wordlist."), o.security.maxAuthTries === 0 && n("medium", i, "No limit on authentication attempts.")), o.services.http && !o.security.inputSanitised && o.database && n("high", i, "Web application accepts unsanitised input — the database is reachable through it."), o.services.telnet && n("medium", i, "Telnet is enabled; it carries credentials in clear."), (o.services.http || o.services.ssh) && !o.security.synCookies && n("low", i, "No SYN cookies — a flood can exhaust the accept queue."), o.role === "host" && !o.security.awarenessTraining && n("medium", i, "User has had no awareness training; a phishing lure will be opened."), o.role === "host" && !o.security.mfa && n("low", i, "No MFA, so a stolen password is enough on its own."), o.role === "host" && !o.security.callbackVerification && n("medium", i, "No callback policy — a caller claiming to be IT will be believed."), o.ap) {
      const l = ae[o.ap.security];
      (!l || !l.encrypted) && n("high", i, `SSID "${o.ap.ssid}" is open — everything in range is readable.`), o.security.managementFrameProtection || n("medium", i, "Management frames unprotected; clients can be deauthenticated.");
    }
    (o.role === "router" || o.role === "l3switch") && !o.security.dynamicArpInspection && n("medium", i, "No Dynamic ARP Inspection — the segment can be put on-path.");
  }
  const r = { high: 3, medium: 2, low: 1 }, s = Math.max(0, 100 - t.reduce((o, i) => o + r[i.severity] * 6, 0));
  return { findings: t, score: s };
}
const Ki = {
  "small-office": {
    id: "small-office",
    name: "Small office",
    nodes: 6,
    setupMinutes: 20,
    breachMinutes: 15,
    brief: "A six-node office. One way in, one server worth stealing from, and staff who will click things. Stand it up, lock it down, and hand it over.",
    roster: [
      { typeId: "router", count: 1, label: "Edge router" },
      { typeId: "switch", count: 1, label: "Access switch" },
      { typeId: "server", count: 1, label: "Web server (holds the data)" },
      { typeId: "pc", count: 2, label: "Staff workstations" },
      { typeId: "accesspoint", count: 1, label: "Wireless access point" }
    ],
    objectives: [
      "recon-map",
      "creds-cracked",
      "wifi-broken",
      "data-exfil",
      "service-down",
      "social-foothold",
      "insider-control"
    ]
  },
  branch: {
    id: "branch",
    name: "Branch with wireless",
    nodes: 9,
    setupMinutes: 30,
    breachMinutes: 20,
    brief: "A branch office with wireless, IoT on the same estate, and a server room. More to defend, and more ways in — the wireless and the cameras are both reachable.",
    roster: [
      { typeId: "router", count: 1, label: "Edge router" },
      { typeId: "switch", count: 2, label: "Access switches" },
      { typeId: "server", count: 2, label: "Servers (web and file)" },
      { typeId: "pc", count: 2, label: "Staff workstations" },
      { typeId: "accesspoint", count: 1, label: "Wireless access point" },
      { typeId: "camera", count: 1, label: "IP camera" }
    ],
    objectives: [
      "recon-map",
      "creds-cracked",
      "wifi-broken",
      "mitm-onpath",
      "data-exfil",
      "creds-in-clear",
      "service-down"
    ]
  },
  campus: {
    id: "campus",
    name: "Campus segment",
    nodes: 12,
    setupMinutes: 30,
    breachMinutes: 25,
    brief: "A segmented campus network with a firewall, a DMZ server and an internet edge. Everything is in scope, including the people using it.",
    roster: [
      { typeId: "router", count: 1, label: "Edge router" },
      { typeId: "firewall", count: 1, label: "Perimeter firewall" },
      { typeId: "switch", count: 2, label: "Access switches" },
      { typeId: "server", count: 3, label: "Servers (web, DNS and file)" },
      { typeId: "pc", count: 3, label: "Staff workstations" },
      { typeId: "accesspoint", count: 1, label: "Wireless access point" },
      { typeId: "laptop", count: 1, label: "Roaming laptop" }
    ],
    objectives: uc.map((e) => e.id)
  }
}, Ry = Object.values(Ki), io = (e) => Ki[e] || Ki["small-office"];
function zy(e, t = []) {
  const n = t.map((o) => {
    const i = e.devices.filter((l) => l.typeId === o.typeId).length;
    return { ...o, placed: i, ok: i >= o.count };
  }), r = n.reduce((o, i) => o + i.count, 0), s = n.reduce((o, i) => o + Math.min(i.placed, i.count), 0);
  return {
    rows: n,
    required: r,
    placed: s,
    complete: n.every((o) => o.ok),
    percent: r ? Math.round(s / r * 100) : 100
  };
}
function Oy(e, t) {
  const n = zy(e, t.roster), r = Dy(e), s = [];
  if (!n.complete) {
    const l = n.rows.filter((c) => !c.ok).map((c) => `${c.count - c.placed} × ${c.label}`).join(", ");
    s.push(`Still to deploy: ${l}.`);
  }
  const o = e.devices.filter((l) => l.interfaces.some((c) => c.ip)).length;
  o < e.devices.length && s.push(`${e.devices.length - o} device(s) have no IP address.`);
  const i = e.devices.filter(
    (l) => {
      var c;
      return l.role !== "attacker" && !l.interfaces.some((u) => u.link) && !((c = l.radio) != null && c.ssid);
    }
  ).length;
  return i > 0 && s.push(`${i} device(s) are not cabled or associated.`), { roster: n, hardening: r, blockers: s, ready: s.length === 0 };
}
function pc(e) {
  return JSON.stringify({
    security: e.security,
    services: e.services,
    acl: e.acl,
    lines: e.lines,
    enableSecret: e.enableSecret,
    ap: e.ap ? { security: e.ap.security, passphrase: e.ap.passphrase, enabled: e.ap.enabled } : null
  });
}
function Ku(e) {
  const t = {};
  for (const n of e.devices) t[n.id] = pc(n);
  return t;
}
function _y(e, t, n) {
  if (!t) return t;
  const r = e.devices.find((s) => s.id === n);
  return r && (t[r.id] = pc(r)), t;
}
function Fy(e, t) {
  if (!t) return [];
  const n = [];
  for (const r of e.devices) {
    const s = t[r.id];
    if (!s || pc(r) === s) continue;
    const o = JSON.parse(s);
    r.security = { ...o.security, lockout: r.security.lockout }, r.services = { ...o.services }, r.acl = JSON.parse(JSON.stringify(o.acl)), r.lines = JSON.parse(JSON.stringify(o.lines)), r.enableSecret = o.enableSecret, r.ap && o.ap && Object.assign(r.ap, o.ap), n.push(r.hostname);
  }
  return n;
}
const Rn = {
  authority: {
    id: "authority",
    label: "Authority",
    pressure: 4,
    blurb: "Claim to outrank them, or to be speaking for someone who does.",
    opener: "This is {caller} from IT Security. I need you to action something for me.",
    defeatedBy: "callbackVerification",
    defeatNote: "A callback to a number from the internal directory ends this instantly."
  },
  urgency: {
    id: "urgency",
    label: "Urgency",
    pressure: 4,
    blurb: "Remove their time to think. Something is breaking right now.",
    opener: "We are mid-incident and the director is waiting — I need this in the next two minutes.",
    defeatedBy: null,
    defeatNote: "Training teaches that genuine emergencies survive a verification step."
  },
  familiarity: {
    id: "familiarity",
    label: "Familiarity",
    pressure: 3,
    blurb: "Sound like a colleague. Use names and details you already know.",
    opener: "Hi — {caller} here, {colleague} said you would be able to sort this out.",
    defeatedBy: "callbackVerification",
    defeatNote: "Verifying the caller independently removes the advantage of sounding familiar."
  },
  reciprocity: {
    id: "reciprocity",
    label: "Reciprocity",
    pressure: 3,
    blurb: "Do them a favour first, then ask for one back.",
    opener: "I cleared that ticket backlog for you this morning — could you help me with one thing?",
    defeatedBy: null,
    defeatNote: "Process beats goodwill: the step is required regardless of who is asking."
  },
  fear: {
    id: "fear",
    label: "Fear",
    pressure: 4,
    blurb: "Imply they are in trouble, or about to be.",
    opener: "Your account is implicated in an incident. I need to confirm some details before this escalates.",
    defeatedBy: null,
    defeatNote: "Training reframes this: real security teams do not pressure staff this way."
  }
}, Hy = Object.values(Rn), ca = {
  "confirm-username": {
    id: "confirm-username",
    label: "Confirm the account name on a host",
    sensitivity: 0,
    blurb: "Low risk on its own, and the usual first step — it makes the next pretext credible.",
    effect: "reveals the account name"
  },
  "reset-password": {
    id: "reset-password",
    label: "Reset a password to one you supply",
    sensitivity: 2,
    blurb: "Hands over an account outright, unless a second factor stands in the way.",
    effect: "sets a password you know"
  },
  "read-mfa": {
    id: "read-mfa",
    label: "Read back the code on their authenticator",
    sensitivity: 3,
    blurb: "Defeats the control most teams rely on to survive a stolen password.",
    effect: "bypasses MFA for this round"
  },
  "disable-control": {
    id: "disable-control",
    label: 'Turn a security control off "temporarily"',
    sensitivity: 4,
    blurb: "The most valuable and the hardest. A supervisor account can do it; a standard one cannot.",
    effect: "switches off one protection",
    needsSupervisor: !0
  }
}, Uy = Object.values(ca), bs = {
  junior: {
    id: "junior",
    label: "Junior technician",
    blurb: "New, eager to be useful, and holds a supervisor account he has not been taught to be careful with. Wants to help, and finds it hard to say no to someone senior.",
    supervisor: !0,
    resistance: { authority: 4, urgency: 4, familiarity: 4, reciprocity: 4, fear: 4 },
    suspicionLimit: 6
  },
  senior: {
    id: "senior",
    label: "Senior technician",
    blurb: "Experienced and hard to rush. Will follow process under pressure, but a pretext built from details that check out can still land.",
    supervisor: !0,
    resistance: { authority: 8, urgency: 8, familiarity: 8, reciprocity: 8, fear: 7 },
    suspicionLimit: 4
  }
};
let Yu = 0;
function Zu(e, { name: t, areaZoneId: n = null } = {}) {
  const r = bs[e] || bs.junior;
  return Yu += 1, {
    id: `p${Yu}${Math.random().toString(36).slice(2, 6)}`,
    roleId: r.id,
    name: t || (r.id === "junior" ? "Sam Okafor" : "Priya Raman"),
    areaZoneId: n,
    suspicion: 0,
    reported: !1,
    transcript: [],
    granted: []
    // ask ids they have already complied with
  };
}
function By(e, t) {
  if (!(t != null && t.areaZoneId)) return e.devices;
  const n = (e.zones || []).find((r) => r.id === t.areaZoneId);
  return n ? e.devices.filter(
    (r) => r.x >= n.x && r.x <= n.x + n.w && r.y >= n.y && r.y <= n.y + n.h
  ) : e.devices;
}
function Wy(e, t) {
  var r, s;
  const n = String(t || "").trim().toLowerCase();
  if (!n) return { ok: !1, kind: null, note: "No detail offered — the pretext is bare assertion." };
  for (const o of e.devices) {
    if (o.hostname.toLowerCase() === n)
      return { ok: !0, kind: "hostname", note: `"${o.hostname}" is a real host here.` };
    if (_(o) && _(o) === n)
      return { ok: !0, kind: "address", note: `${n} is a real address on this network.` };
    if ((r = o.security) != null && r.username && o.security.username.toLowerCase() === n)
      return { ok: !0, kind: "username", note: `"${n}" is a real account name here.` };
    if ((s = o.ap) != null && s.ssid && o.ap.ssid.toLowerCase() === n)
      return { ok: !0, kind: "ssid", note: `"${o.ap.ssid}" is this site's wireless network.` };
  }
  return {
    ok: !1,
    kind: null,
    note: `Nothing here is called "${t}" — the detail does not check out.`
  };
}
function Wa(e, t) {
  const n = e.filter((r) => r.role === "host" || r.role === "iot");
  return n.length ? n.filter((r) => {
    var s;
    return (s = r.security) == null ? void 0 : s[t];
  }).length / n.length : 0;
}
function Vy(e, { tactic: t, ask: n, claim: r, topology: s, caller: o = "Jordan Ellis", colleague: i = "Dave" }) {
  const l = bs[e.roleId], c = Rn[t], u = ca[n];
  if (!l || !c || !u)
    return { ok: !1, refused: !0, reported: !1, reply: "…sorry, what are you asking for?", factors: [], score: 0, threshold: 0, debrief: "", effect: null };
  const d = By(s, e), p = Wa(d, "awarenessTraining"), h = Wa(d, "callbackVerification"), f = Wa(d, "mfa"), g = Wy(s, r), w = [
    { label: `${c.label} pretext`, value: c.pressure },
    { label: g.ok ? `Detail checks out (${g.kind})` : "Detail does not check out", value: g.ok ? 3 : -3 },
    { label: `"${u.label}" is a ${u.sensitivity === 0 ? "small" : u.sensitivity >= 3 ? "serious" : "significant"} ask`, value: -u.sensitivity }
  ];
  e.granted.length && w.push({ label: "They have already helped once", value: 3 });
  const k = w.reduce((ee, ne) => ee + ne.value, 0), m = [
    { label: `${l.label} baseline against ${c.label.toLowerCase()}`, value: l.resistance[t] },
    { label: "Awareness training in this area", value: Math.round(p * 3) },
    { label: "Suspicion already raised", value: Math.round(e.suspicion * 0.8) }
  ], x = c.defeatedBy === "callbackVerification" && h >= 0.5;
  x && m.push({ label: "Callback verification is policy here", value: 99 });
  const v = m.reduce((ee, ne) => ee + ne.value, 0), S = k >= v, $ = u.needsSupervisor && !l.supervisor, y = S && !$;
  let P = 0;
  g.ok || (P += 2), u.sensitivity >= 3 && (P += 1), y || (P += 1);
  const A = e.suspicion + P, B = A >= l.suspicionLimit && !e.reported;
  let L;
  x ? L = l.id === "junior" ? "I do want to help, but we have to call back on the directory number now. What extension are you on?" : "Policy is a callback on a directory number before anything like that. Give me your extension and I will ring you." : $ ? L = "I do not have the rights to do that — you would need someone with a supervisor account." : y ? L = l.id === "junior" ? qy(u, g) : Gy(u, g) : L = l.id === "junior" ? Ky(c, g, A, l) : Yy(c, g), B && (L += l.id === "junior" ? " …actually, I am going to flag this with my supervisor." : " I am logging this contact and notifying the security team.");
  const Y = y ? Zy(u, d) : null;
  return {
    ok: y,
    refused: !y,
    reported: B,
    reply: L,
    factors: [...w, ...m.map((ee) => ({ ...ee, value: -ee.value }))],
    score: k,
    threshold: v,
    suspicionDelta: P,
    debrief: Qy({ t: c, a: u, ok: y, corr: g, callbackBlocks: x, training: p, mfa: f, role: l }),
    effect: Y
  };
}
function vf(e) {
  return /^[aeiou]/i.test(String(e)) ? "an" : "a";
}
function qy(e, t) {
  const n = t.ok ? "Oh — yes, I know the one. " : "Um, okay. ";
  return {
    "confirm-username": `${n}The account on that box is the standard one, I can read it out.`,
    "reset-password": `${n}I can set that for you now. Give me the password you want on it.`,
    "read-mfa": `${n}The code on my authenticator right now is 418 992.`,
    "disable-control": `${n}I will switch it off, just tell me when I can put it back.`
  }[e.id];
}
function Gy(e, t) {
  const n = t.ok ? "That tallies with what I have here. " : "";
  return {
    "confirm-username": `${n}I can confirm the account name, that is not sensitive.`,
    "reset-password": `${n}Against my better judgement — I will reset it and note it in the ticket.`,
    "read-mfa": `${n}I will read it once, and I am changing it straight after.`,
    "disable-control": `${n}Ten minutes, and I am turning it back on myself.`
  }[e.id];
}
function Ky(e, t, n, r) {
  return t.ok ? n >= r.suspicionLimit - 1 ? "This does not feel right. Can I take your name and call you back?" : "I do not think I am supposed to do that one. Could you raise a ticket?" : "Sorry — I cannot find that on our system. Are you sure you have the right site?";
}
function Yy(e, t) {
  return t.ok ? "No. That goes through change control, whoever is asking." : "That does not match anything here, and I am not going to guess. Raise it through the service desk.";
}
function Zy(e, t) {
  const n = t.find((r) => r.role === "host") || t[0];
  if (!n) return null;
  switch (e.id) {
    case "confirm-username":
      return { kind: "reveal-username", deviceId: n.id, value: n.security.username };
    case "reset-password":
      return { kind: "set-password", deviceId: n.id, value: "Spring2026!" };
    case "read-mfa":
      return { kind: "bypass-mfa", deviceId: n.id };
    case "disable-control":
      return { kind: "disable-control", deviceId: n.id, field: "inputSanitised" };
    default:
      return null;
  }
}
function Qy({ t: e, a: t, ok: n, corr: r, callbackBlocks: s, training: o, mfa: i, role: l }) {
  if (s)
    return `Blocked by callback verification. ${e.defeatNote}`;
  if (n) {
    const c = r.ok ? "the detail you quoted was real, which is what made the pretext credible" : "the pretext alone carried it", u = t.id === "reset-password" && i >= 0.5 ? " MFA still stands between that password and the account." : t.id === "disable-control" ? " Least privilege would have limited what this account could switch off." : "", d = e.label.toLowerCase();
    return `${l.label} complied under ${vf(d)} ${d} pretext — ${c}.${u}`;
  }
  return r.ok ? o >= 0.5 ? `Refused. Awareness training is doing the work here: ${e.defeatNote}` : "Refused — the ask was too large for the pressure applied. A smaller request first often makes the next one land." : "Refused: the detail did not check out. Reconnaissance first — a pretext built on something real is far harder to refuse.";
}
function Xy(e, t) {
  if (!t) return null;
  const n = e.devices.find((r) => r.id === t.deviceId);
  if (!n) return null;
  switch (t.kind) {
    case "reveal-username":
      return `${n.hostname}: account name is "${n.security.username}".`;
    case "set-password":
      return n.security.password = t.value, n.security.lockout = { failures: 0, lockedUntil: 0, locked: !1 }, `${n.hostname}: password reset to "${t.value}".`;
    case "bypass-mfa":
      return n.security.mfa = !1, n.runtime.compromised = !0, `${n.hostname}: second factor read aloud — the account is yours.`;
    case "disable-control":
      return n.security[t.field] = !1, `${n.hostname}: ${t.field} switched off at the technician's hand.`;
    default:
      return null;
  }
}
const Jy = 2;
function Va(e) {
  var o, i;
  const t = [];
  if (!e || !Array.isArray(e.devices)) return { topology: e, changes: t };
  e.zones = e.zones || [], e.personnel = e.personnel || [];
  const n = /* @__PURE__ */ new Map();
  let r = 0, s = 0;
  for (const l of e.devices) {
    const c = Xh[l.typeId];
    c && (l.typeId = c.typeId, l.services = { ...c.services, ...l.services || {} }, r += 1);
    const u = Ht[l.typeId];
    if (!u) continue;
    const d = x0[l.typeId];
    if (d && Array.isArray(l.interfaces)) {
      const p = {};
      for (const h of l.interfaces)
        d[h.name] && (p[h.name] = d[h.name], h.name = d[h.name], s += 1);
      Object.keys(p).length && n.set(l.id, p);
    }
    if (Array.isArray(l.interfaces)) {
      const p = new Set(l.interfaces.map((h) => h.name));
      for (const h of oc(u))
        p.has(h.name) || l.interfaces.push({
          name: h.name,
          media: h.media,
          speed: h.speed || null,
          uplink: !!h.uplink,
          link: null,
          ip: "",
          mask: "255.255.255.0",
          mac: nv(l.id, h.name),
          enabled: !1,
          addressing: "static",
          vlan: 1,
          mode: "access"
        });
    }
    if (l.dnsZone = l.dnsZone || {}, l.dhcp = tv(l.dhcp), l.packages = l.packages || [], l.directory = l.directory || { domain: "", users: [], groups: [], joined: [] }, l.radius = l.radius || { secret: "testing123", clients: [], accepted: 0, rejected: 0 }, l.portalSessions = l.portalSessions || {}, l.arp = l.arp || {}, l.security)
      for (const [p, h] of Object.entries(ev))
        l.security[p] === void 0 && (l.security[p] = h);
  }
  if (Array.isArray(e.links)) {
    for (const c of e.links) {
      const u = n.get(c.a), d = n.get(c.b);
      u && u[c.aPort] && (c.aPort = u[c.aPort]), d && d[c.bPort] && (c.bPort = d[c.bPort]);
    }
    const l = new Map(e.devices.map((c) => [c.id, c]));
    for (const c of e.links)
      for (const [u, d] of [[c.a, c.aPort], [c.b, c.bPort]]) {
        const p = (i = (o = l.get(u)) == null ? void 0 : o.interfaces) == null ? void 0 : i.find((h) => h.name === d);
        p && !p.link && (p.link = c.id);
      }
  }
  return r && t.push(`${r} server(s) merged into the single Server type`), s && t.push(`${s} interface(s) renamed to match the real kit`), e.version = Jy, { topology: e, changes: t };
}
const ev = {
  patched: !1,
  tlsEnabled: !1,
  anonymousFtp: !0,
  snmpCommunity: "public",
  legacySmb: !0,
  passwordPolicy: !1,
  callbackVerification: !1,
  awarenessTraining: !1,
  mfa: !1
};
function tv(e) {
  const t = { base: "", first: 100, last: 200, leaseMins: 60, leases: {}, reservations: {} };
  return e ? {
    ...t,
    ...e,
    first: e.first ?? e.next ?? 100,
    leases: e.leases || {},
    reservations: e.reservations || {}
  } : t;
}
function nv(e, t) {
  let n = 2166136261;
  for (const s of `${e}:${t}`)
    n ^= s.charCodeAt(0), n = n * 16777619 >>> 0;
  const r = (s) => (n >> s * 8 & 255).toString(16).padStart(2, "0");
  return `02:${r(0)}:${r(1)}:${r(2)}:${r(3)}:${(n >>> 28 & 255).toString(16).padStart(2, "0")}`;
}
const Qu = 50, rv = "netrange.theme", wf = "netrange.settings", hc = "netrange.workspace", sv = 700;
function ov() {
  const e = {
    theme: "dark",
    speed: 1,
    sound: !1,
    showGrid: !0,
    showLabels: !0,
    ambient: !0,
    autosave: !0,
    coaching: !1
  };
  try {
    const t = localStorage.getItem(wf);
    return t ? { ...e, ...JSON.parse(t) } : e;
  } catch {
    return e;
  }
}
function av(e) {
  try {
    localStorage.setItem(wf, JSON.stringify(e)), localStorage.setItem(rv, e.theme);
  } catch {
  }
}
let Yi = null, Xu = !1;
function iv(e, t, n) {
  Xu || (clearTimeout(Yi), Yi = setTimeout(() => {
    try {
      localStorage.setItem(hc, JSON.stringify({ version: 1, topology: e, labId: t, at: Date.now() }));
    } catch (r) {
      Xu = !0, n == null || n(r);
    }
  }, sv));
}
function lv() {
  var e;
  try {
    const t = localStorage.getItem(hc);
    if (!t) return null;
    const n = JSON.parse(t);
    return (e = n == null ? void 0 : n.topology) != null && e.devices ? (n.topology.zones = n.topology.zones || [], n.topology.personnel = n.topology.personnel || [], n) : null;
  } catch {
    return null;
  }
}
function cv() {
  clearTimeout(Yi);
  try {
    localStorage.removeItem(hc);
  } catch {
  }
}
function uv(e, t, n, r = 96) {
  const s = (o, i) => e.some((l) => Math.abs(l.x - o) < r && Math.abs(l.y - i) < r * 0.75);
  if (!s(t, n)) return { x: t, y: n };
  for (let o = 1; o <= 8; o++)
    for (let i = -o; i <= o; i++)
      for (const [l, c] of [
        [t + i * r, n - o * r * 0.8],
        [t + i * r, n + o * r * 0.8],
        [t - o * r, n + i * r * 0.8],
        [t + o * r, n + i * r * 0.8]
      ])
        if (!s(l, c)) return { x: l, y: c };
  return { x: t, y: n };
}
function dv(e) {
  const t = document.documentElement;
  e === "light" ? t.setAttribute("data-theme", "light") : t.setAttribute("data-theme", "dark");
}
const b = p0((e, t) => {
  const n = ov(), r = new jx({
    getTopology: () => t().topology,
    onLog: (s) => t().log(s.channel, s.text, s.level),
    onChange: () => e((s) => ({ rev: s.rev + 1 }))
  });
  return r.setSpeed(n.speed), {
    /* ---------------------------------------------------------- state */
    topology: { devices: [], links: [], zones: [], personnel: [] },
    rev: 0,
    tool: "select",
    // select | cable | delete
    cableType: "straight",
    selectedId: null,
    selectedLinkId: null,
    pendingCableFrom: null,
    pendingCablePort: null,
    consoles: [{ id: "system", title: "System", deviceId: null, lines: [] }],
    activeConsoleId: "system",
    /** Which device's vantage point the capture pane is showing (null = all). */
    captureDeviceId: null,
    labId: Ix,
    gradeResult: null,
    graded: !1,
    settings: n,
    engine: r,
    past: [],
    future: [],
    /* -------------------------------------------------------- history */
    snapshot: () => JSON.stringify(t().topology),
    pushHistory: () => {
      const s = t().snapshot();
      e((o) => ({
        past: [...o.past.slice(-Qu + 1), s],
        future: []
      }));
    },
    undo: () => {
      const { past: s, future: o, topology: i } = t();
      if (!s.length) return;
      const l = s[s.length - 1];
      e({
        past: s.slice(0, -1),
        future: [JSON.stringify(i), ...o].slice(0, Qu),
        topology: JSON.parse(l),
        selectedId: null,
        selectedLinkId: null
      }), t().commit();
    },
    redo: () => {
      const { past: s, future: o, topology: i } = t();
      o.length && (e({
        past: [...s, JSON.stringify(i)],
        future: o.slice(1),
        topology: JSON.parse(o[0]),
        selectedId: null,
        selectedLinkId: null
      }), t().commit());
    },
    /** Re-render after in-place mutation, and re-grade if already graded. */
    commit: () => {
      var l, c;
      const { posture: s, challengePhase: o, topology: i } = t();
      if (s && o === "breach") {
        const u = Fy(i, s);
        u.length && t().log(
          "system",
          `Defences are locked for this round — reverted changes on ${u.join(", ")}.`,
          "warn"
        );
      }
      (c = (l = t().engine).syncAssociations) == null || c.call(l), e((u) => ({ rev: u.rev + 1 })), t().graded && t().grade({ silent: !0 }), t().settings.autosave && iv(i, t().labId, (u) => {
        t().log(
          "system",
          `Could not save your work to this browser (${u.name || "storage error"}). Use Save to download the topology instead.`,
          "warn"
        );
      });
    },
    /* ------------------------------------------------ renaming a section */
    // An in-app dialog rather than window.prompt, which a sandboxed iframe
    // without allow-modals discards without telling anyone.
    zoneRenameId: null,
    startZoneRename: (s) => e({ zoneRenameId: s, contextMenu: null }),
    cancelZoneRename: () => e({ zoneRenameId: null }),
    commitZoneRename: (s) => {
      const o = t().zoneRenameId, i = String(s || "").trim();
      e({ zoneRenameId: null }), !(!o || !i) && (t().pushHistory(), t().updateZone(o, { name: i.slice(0, 40) }), t().commit());
    },
    /* --------------------------------------------------------- devices */
    addDevice: (s, o, i) => {
      if (!Ht[s]) return null;
      t().pushHistory();
      const { topology: l } = t(), c = uv(l.devices, o, i), u = Iu(s, Math.round(c.x), Math.round(c.y), l.devices);
      return l.devices.push(u), e({ selectedId: u.id }), t().log("system", `Placed ${u.hostname} (${Ht[s].label})`, "dim"), t().commit(), u;
    },
    moveDevice: (s, o, i) => {
      const l = t().topology.devices.find((c) => c.id === s);
      l && (l.x = Math.round(o), l.y = Math.round(i), e((c) => ({ rev: c.rev + 1 })));
    },
    removeDevice: (s) => {
      t().pushHistory();
      const { topology: o } = t(), i = o.devices.find((c) => c.id === s), l = new Set(o.links.filter((c) => c.a === s || c.b === s).map((c) => c.id));
      for (const c of o.devices)
        for (const u of c.interfaces) l.has(u.link) && (u.link = null);
      o.devices = o.devices.filter((c) => c.id !== s), o.links = o.links.filter((c) => c.a !== s && c.b !== s), e((c) => ({
        topology: o,
        selectedId: c.selectedId === s ? null : c.selectedId,
        consoles: c.consoles.filter((u) => u.deviceId !== s),
        activeConsoleId: c.consoles.find((u) => u.deviceId === s && u.id === c.activeConsoleId) ? "system" : c.activeConsoleId
      })), i && t().log("system", `Removed ${i.hostname}`, "dim"), t().commit();
    },
    updateDevice: (s, o) => {
      const i = t().topology.devices.find((l) => l.id === s);
      i && (t().pushHistory(), o(i), t().commit());
    },
    duplicateDevice: (s) => {
      const o = t().topology.devices.find((c) => c.id === s);
      if (!o) return;
      t().pushHistory();
      const { topology: i } = t(), l = Iu(o.typeId, o.x + 70, o.y + 50, i.devices);
      l.interfaces = o.interfaces.map((c) => ({ ...c, ip: "", mac: l.interfaces[0].mac })), l.gateway = o.gateway, l.services = { ...o.services }, l.security = { ...o.security, lockout: { failures: 0, lockedUntil: 0, locked: !1 } }, i.devices.push(l), e({ selectedId: l.id }), t().commit();
    },
    /* ----------------------------------------------------------- links */
    setTool: (s) => e({ tool: s, pendingCableFrom: null, pendingCablePort: null, portPicker: null, pduFrom: null }),
    setCableType: (s) => e({ cableType: s, tool: "cable", pendingCableFrom: null }),
    /** Click-to-cable: first click arms, second click connects. */
    /**
     * Cabling is a two-click gesture, and each click may need a port chosen.
     * `portPicker` holds the pending request the canvas renders as a popover:
     * { deviceId, end: 'a' | 'b', options }.
     */
    portPicker: null,
    closePortPicker: () => e({ portPicker: null }),
    /* -------------------------------------------------- viewport (pan/zoom) */
    /**
     * The canvas transform. `x`/`y` are a screen-space translation and `zoom`
     * a scale, applied to one wrapping <g>. Device coordinates stay in world
     * space, so nothing else in the app has to know the view moved.
     */
    viewport: { x: 0, y: 0, zoom: 1 },
    /** Canvas pixel size, reported by TopologyCanvas via ResizeObserver. */
    canvasSize: { w: 0, h: 0 },
    setCanvasSize: (s, o) => e({ canvasSize: { w: s, h: o } }),
    /** Screen point → world point. */
    toWorld: (s, o) => {
      const { x: i, y: l, zoom: c } = t().viewport;
      return { x: (s - i) / c, y: (o - l) / c };
    },
    /** World point → screen point, for positioning HTML popovers. */
    toScreen: (s, o) => {
      const { x: i, y: l, zoom: c } = t().viewport;
      return { x: s * c + i, y: o * c + l };
    },
    panBy: (s, o) => {
      const i = t().viewport;
      e({ viewport: { ...i, x: i.x + s, y: i.y + o } });
    },
    /** Zoom about a screen point, so the world under the cursor stays put. */
    zoomAt: (s, o, i) => {
      const l = t().viewport, c = Math.max(0.25, Math.min(3, l.zoom * s));
      if (c === l.zoom) return;
      const u = (o - l.x) / l.zoom, d = (i - l.y) / l.zoom;
      e({ viewport: { x: o - u * c, y: i - d * c, zoom: c } });
    },
    setZoom: (s, o = 0, i = 0) => {
      const l = t().viewport;
      t().zoomAt(Math.max(0.25, Math.min(3, s)) / l.zoom, o, i);
    },
    resetView: () => e({ viewport: { x: 0, y: 0, zoom: 1 } }),
    /** Frame everything currently placed, with a margin. */
    fitView: (s, o, i = 80) => {
      const l = t().canvasSize;
      s = s || l.w, o = o || l.h;
      const { devices: c, zones: u } = t().topology, d = [
        ...c.map((k) => ({ x: k.x, y: k.y, w: 40, h: 32 })),
        ...(u || []).map((k) => ({ x: k.x + k.w / 2, y: k.y + k.h / 2, w: k.w / 2, h: k.h / 2 }))
      ];
      if (!d.length || !s || !o) {
        t().resetView();
        return;
      }
      const p = Math.min(...d.map((k) => k.x - k.w)), h = Math.max(...d.map((k) => k.x + k.w)), f = Math.min(...d.map((k) => k.y - k.h)), g = Math.max(...d.map((k) => k.y + k.h)), w = Math.max(0.25, Math.min(2, Math.min(
        (s - i * 2) / Math.max(1, h - p),
        (o - i * 2) / Math.max(1, g - f)
      )));
      e({
        viewport: {
          zoom: w,
          x: s / 2 - (p + h) / 2 * w,
          y: o / 2 - (f + g) / 2 * w
        }
      });
    },
    /* ------------------------------------------------- zones (floors/rooms) */
    addZone: (s, o, i = "") => {
      t().pushHistory();
      const { topology: l } = t();
      l.zones || (l.zones = []);
      const c = l.zones.length + 1, u = {
        id: `z${Math.random().toString(36).slice(2, 9)}`,
        name: i || `Floor ${c}`,
        x: Math.round(s - 170),
        y: Math.round(o - 120),
        w: 340,
        h: 240,
        hue: c * 57 % 360
      };
      return l.zones.push(u), e({ selectedZoneId: u.id }), t().log("system", `Added section "${u.name}".`, "dim"), t().commit(), u;
    },
    selectedZoneId: null,
    selectZone: (s) => e({ selectedZoneId: s, selectedId: null, selectedLinkId: null }),
    updateZone: (s, o) => {
      const i = (t().topology.zones || []).find((l) => l.id === s);
      i && (Object.assign(i, o), e((l) => ({ rev: l.rev + 1 })));
    },
    removeZone: (s, o = !1) => {
      t().pushHistory();
      const { topology: i } = t(), l = (i.zones || []).find((c) => c.id === s);
      if (l && o) {
        const c = t().devicesInZone(l).map((u) => u.id);
        i.devices = i.devices.filter((u) => !c.includes(u.id)), i.links = i.links.filter((u) => !c.includes(u.a) && !c.includes(u.b));
      }
      i.zones = (i.zones || []).filter((c) => c.id !== s), e((c) => ({ selectedZoneId: c.selectedZoneId === s ? null : c.selectedZoneId })), t().log("system", `Removed section "${(l == null ? void 0 : l.name) || s}".`, "dim"), t().commit();
    },
    /** Devices whose centre falls inside a section. */
    devicesInZone: (s) => t().topology.devices.filter(
      (o) => o.x >= s.x && o.x <= s.x + s.w && o.y >= s.y && o.y <= s.y + s.h
    ),
    /** Move a section and carry everything standing in it. */
    moveZone: (s, o, i, l = null) => {
      const c = (t().topology.zones || []).find((u) => u.id === s);
      if (c) {
        c.x += o, c.y += i;
        for (const u of l || [])
          u.x += o, u.y += i;
        e((u) => ({ rev: u.rev + 1 }));
      }
    },
    /* ---------------------------------------------------- context menu */
    contextMenu: null,
    openContextMenu: (s) => e({ contextMenu: s }),
    closeContextMenu: () => e({ contextMenu: null }),
    /* ------------------------------------------------- panels the menu opens */
    modalDeviceId: null,
    openDeviceModal: (s) => e({ modalDeviceId: s }),
    closeDeviceModal: () => e({ modalDeviceId: null }),
    /* ------------------------------------------------ red vs blue */
    challenge: null,
    // the loaded challenge, when playing red
    challengeRole: null,
    // 'blue' while building, 'red' while attacking
    challengeStartedAt: null,
    /**
     * A round runs in phases:
     *   idle   — no challenge
     *   setup  — blue is building and hardening, against a countdown
     *   armed  — the build is locked and a code has been produced
     *   breach — red is attacking, against their own countdown
     *   over   — a timer ran out
     */
    challengePhase: "idle",
    challengeScenario: null,
    challengeDeadline: null,
    // epoch ms the current phase ends
    challengeSetupMinutes: 20,
    challengeBreachMinutes: 15,
    challengeCode: "",
    posture: null,
    // frozen defensive settings, once armed
    /** Blue starts the build window. */
    startSetup: (s, { setupMinutes: o, breachMinutes: i, name: l, author: c } = {}) => {
      const u = io(s), d = o ?? u.setupMinutes, p = i ?? u.breachMinutes;
      e({
        challengeRole: "blue",
        challengePhase: "setup",
        challengeScenario: u,
        challengeSetupMinutes: d,
        challengeBreachMinutes: p,
        challengeDeadline: Date.now() + d * 6e4,
        challengeName: l || `${u.name} — round 1`,
        challengeAuthor: c || "Blue team",
        challengeCode: "",
        posture: null
      }), t().log("system", `Build window open: ${u.name}, ${d} minutes for ${u.nodes} nodes.`, "success"), t().commit();
    },
    challengeName: "",
    challengeAuthor: "Blue team",
    /** How the build is going, for the checklist. */
    readiness: () => {
      const s = t().challengeScenario;
      return s ? Oy(t().topology, s) : null;
    },
    /** Lock the build and produce the code to hand over. */
    armChallenge: () => {
      const { topology: s, challengeScenario: o, challengeBreachMinutes: i, challengeSetupMinutes: l } = t(), c = o || io(null), u = Iy(s, {
        name: t().challengeName,
        author: t().challengeAuthor,
        objectives: c.objectives,
        minutes: i,
        setupMinutes: l,
        scenarioId: c.id
      });
      return e({
        challengeCode: u,
        challengePhase: "armed",
        challengeDeadline: null,
        posture: Ku(s)
      }), t().log("system", "Build locked. Hand the challenge code to the other team.", "success"), t().commit(), u;
    },
    /** Called by the UI each second; ends a phase whose timer has run out. */
    tickChallenge: () => {
      const { challengePhase: s, challengeDeadline: o } = t();
      !o || Date.now() < o || (s === "setup" ? (t().log("system", "Build window closed — locking the network.", "warn"), t().armChallenge()) : s === "breach" && (e({ challengePhase: "over", challengeDeadline: null }), t().log("system", "Breach window closed.", "warn"), t().commit()));
    },
    challengeOpen: !1,
    openChallenge: () => e({ challengeOpen: !0 }),
    closeChallenge: () => e({ challengeOpen: !1 }),
    setChallengeRole: (s) => e({ challengeRole: s }),
    /** Load a challenge code: the topology becomes the board to attack. */
    loadChallenge: (s) => {
      const o = Ty(s);
      if (!o.ok)
        return t().log("system", `Challenge: ${o.reason}`, "error"), o;
      t().pushHistory();
      const { changes: i } = Va(o.challenge.topology), l = o.challenge.minutes || 15;
      e({
        topology: o.challenge.topology,
        challenge: o.challenge,
        challengeRole: "red",
        challengePhase: "breach",
        challengeScenario: o.challenge.scenarioId ? io(o.challenge.scenarioId) : null,
        challengeBreachMinutes: l,
        challengeStartedAt: Date.now(),
        challengeDeadline: Date.now() + l * 6e4,
        // Freeze what blue left, so red cannot weaken it from their own copy.
        posture: Ku(o.challenge.topology),
        selectedId: null,
        selectedLinkId: null
      }), t().engine.reset(), t().engine.capture.clear(), t().log("system", `Challenge loaded: "${o.challenge.name}" by ${o.challenge.author}.`, "success"), t().log("system", `${o.challenge.objectives.length} objectives, ${o.challenge.minutes} minutes.`, "dim");
      for (const c of i) t().log("system", `Migrated: ${c}.`, "dim");
      return t().commit(), o;
    },
    /** Live score for the loaded challenge, or null when none is loaded. */
    challengeScore: () => {
      const { challenge: s, topology: o, engine: i } = t();
      return s ? My(s, o, i) : null;
    },
    endChallenge: () => {
      e({
        challenge: null,
        challengeRole: null,
        challengeStartedAt: null,
        challengePhase: "idle",
        challengeScenario: null,
        challengeDeadline: null,
        challengeCode: "",
        posture: null
      }), t().log("system", "Challenge ended.", "dim"), t().commit();
    },
    /* ------------------------------------------------ the human layer */
    socialOpen: !1,
    socialTarget: null,
    // technician id red is talking to
    openSocial: (s = null) => {
      var o, i;
      return e({ socialOpen: !0, socialTarget: s || ((i = (o = t().topology.personnel) == null ? void 0 : o[0]) == null ? void 0 : i.id) || null });
    },
    closeSocial: () => e({ socialOpen: !1 }),
    setSocialTarget: (s) => e({ socialTarget: s }),
    /** Blue staffs the network. Two technicians, each with a patch to look after. */
    staffNetwork: (s = !0) => {
      var l, c, u;
      t().pushHistory();
      const { topology: o } = t();
      if (!s) {
        o.personnel = [], t().log("system", "Technicians stood down — no one is answering the phone this round.", "dim"), t().commit();
        return;
      }
      const i = o.zones || [];
      o.personnel = [
        Zu("senior", { areaZoneId: ((l = i[0]) == null ? void 0 : l.id) || null }),
        Zu("junior", { areaZoneId: ((c = i[1]) == null ? void 0 : c.id) || ((u = i[0]) == null ? void 0 : u.id) || null })
      ], t().log("system", "A senior and a junior technician are now on the network.", "success"), t().commit();
    },
    /** Move a technician onto a different section. */
    assignTechnician: (s, o) => {
      const { topology: i } = t(), l = (i.personnel || []).find((u) => u.id === s);
      if (!l) return;
      l.areaZoneId = o || null;
      const c = (i.zones || []).find((u) => u.id === o);
      t().log("system", `${l.name} now covers ${c ? c.name : "the whole site"}.`, "dim"), t().commit();
    },
    /**
     * Red tries a pretext.
     *
     * The transcript, the suspicion and any resulting change all land on the
     * topology, so the score sees them and the debrief can explain them.
     */
    socialAttempt: ({ technicianId: s, tactic: o, ask: i, claim: l }) => {
      var f;
      const { topology: c, posture: u } = t(), d = (c.personnel || []).find((g) => g.id === s);
      if (!d) return null;
      if (d.reported)
        return { ok: !1, reply: "The line rings out. This one has stopped taking your calls.", blocked: !0 };
      const p = Rn[o], h = Vy(d, { tactic: o, ask: i, claim: l, topology: c });
      if (d.transcript.push({
        who: "red",
        tactic: o,
        ask: i,
        claim: l,
        text: ((p == null ? void 0 : p.opener) || "").replace("{caller}", "Jordan Ellis").replace("{colleague}", "Dave")
      }), d.transcript.push({ who: "tech", text: h.reply, ok: h.ok, debrief: h.debrief }), d.suspicion += h.suspicionDelta, h.reported && (d.reported = !0), h.ok) {
        d.granted.includes(i) || d.granted.push(i);
        const g = Xy(c, h.effect);
        g && (t().log("attack", `[social] ${g}`, "warn"), u && ((f = h.effect) != null && f.deviceId) && _y(c, u, h.effect.deviceId));
        const w = Rn[o].label.toLowerCase();
        t().log("attack", `[social] ${d.name} complied — ${vf(w)} ${w} pretext.`, "error");
      } else
        t().log("attack", `[social] ${d.name} refused. ${h.debrief}`, "dim");
      return h.reported && t().log("system", `${d.name} has reported the contact to the security team.`, "warn"), t().commit(), h;
    },
    attackPanelOpen: !1,
    openAttackPanel: () => e({ attackPanelOpen: !0 }),
    closeAttackPanel: () => e({ attackPanelOpen: !1 }),
    /**
     * Run a command in a device's console as if it had been typed, so a menu
     * item and a keystroke produce the same transcript.
     */
    queueConsoleCommand: (s, o) => {
      const i = t().topology.devices.find((c) => c.id === s);
      if (!i) return;
      const l = `dev:${s}`;
      t().openDeviceConsole(s), t().log(l, Gi(i, t().topology) + o, "info"), xf(i, o, {
        engine: t().engine,
        topology: t().topology,
        channel: l,
        log: (c, u = "info") => t().log(l, c, u),
        commit: () => t().commit(),
        clearConsole: () => t().clearConsole(l)
      }), t().commit();
    },
    cableClick: (s) => {
      const { pendingCableFrom: o, topology: i, cableType: l } = t(), c = i.devices.find((h) => h.id === s);
      if (!c) return;
      const u = !o, d = lf(c, u ? null : l), p = d.filter((h) => !h.disabled);
      if (p.length === 0) {
        const h = d.length ? u ? "every port is already cabled, or is a radio" : "no free port takes that cable — try another cable or free a port" : "this device has no ports";
        t().log("system", `${c.hostname}: ${h}.`, "error");
        return;
      }
      if (c.interfaces.length === 1) {
        t().choosePort(s, p[0].port.name);
        return;
      }
      e({ portPicker: { deviceId: s, end: o ? "b" : "a", options: d } });
    },
    /** Second half of the gesture: a port was picked (or auto-picked). */
    choosePort: (s, o) => {
      const { pendingCableFrom: i, pendingCablePort: l, topology: c, cableType: u } = t();
      if (e({ portPicker: null }), !i) {
        const d = c.devices.find((g) => g.id === s), p = d == null ? void 0 : d.interfaces.find((g) => g.name === o), h = p ? f0(p.media) : null, f = h && h !== u ? h : u;
        f !== u && t().log("system", `Cable set to ${Se[f].label} to match ${o}.`, "dim"), e({
          pendingCableFrom: s,
          pendingCablePort: o,
          selectedId: s,
          cableType: f
        }), t().log(
          "system",
          `${Se[f].label}: ${d == null ? void 0 : d.hostname} ${o} — now click the far end.`,
          "dim"
        );
        return;
      }
      if (i === s) {
        e({ pendingCableFrom: null, pendingCablePort: null });
        return;
      }
      t().connect(i, s, u, l, o), e({ pendingCableFrom: null, pendingCablePort: null, selectedId: null });
    },
    connect: (s, o, i = "straight", l = null, c = null) => {
      const { topology: u } = t(), d = u.devices.find((k) => k.id === s), p = u.devices.find((k) => k.id === o);
      if (!d || !p) return;
      const h = l ? Bi(d, l) : Tu(d, i)[0], f = c ? Bi(p, c) : Tu(p, i)[0];
      if (!h || !f) {
        const k = h ? p : d;
        t().log(
          "system",
          `Cannot connect: ${k.hostname} has no free ${Se[i].short} port.`,
          "error"
        );
        return;
      }
      const g = m0(i, d, p, h, f);
      if (!g.ok && g.fatal) {
        t().log("system", `Cannot connect: ${g.reason}`, "error");
        return;
      }
      t().pushHistory();
      const w = {
        id: `l${Math.random().toString(36).slice(2, 9)}`,
        a: s,
        aPort: h.name,
        b: o,
        bPort: f.name,
        cableType: i,
        down: !g.ok,
        reason: g.ok ? "" : g.reason
      };
      u.links.push(w), h.link = w.id, f.link = w.id, g.ok ? (h.enabled = !0, f.enabled = !0, t().log(
        "system",
        `${d.hostname} ${h.name} ⇄ ${p.hostname} ${f.name} — link up (${Se[i].short})`,
        "success"
      )) : t().log(
        "system",
        `${d.hostname} ${h.name} ⇄ ${p.hostname} ${f.name} — LINK DOWN: ${g.reason}`,
        "error"
      ), t().commit();
    },
    removeLink: (s) => {
      t().pushHistory();
      const { topology: o } = t();
      for (const i of o.devices)
        for (const l of i.interfaces) l.link === s && (l.link = null);
      o.links = o.links.filter((i) => i.id !== s), e((i) => ({ selectedLinkId: i.selectedLinkId === s ? null : i.selectedLinkId })), t().log("system", "Cable removed", "dim"), t().commit();
    },
    /* ------------------------------------------------------- selection */
    select: (s) => e({ selectedId: s, selectedLinkId: null }),
    selectLink: (s) => e({ selectedLinkId: s, selectedId: null }),
    clearSelection: () => e({ selectedId: null, selectedLinkId: null, pendingCableFrom: null }),
    deleteSelection: () => {
      const { selectedId: s, selectedLinkId: o } = t();
      s ? t().removeDevice(s) : o && t().removeLink(o);
    },
    /* -------------------------------------------------------- consoles */
    log: (s, o, i = "info") => {
      e((l) => ({
        consoles: l.consoles.map(
          (c) => c.id === s ? { ...c, lines: [...c.lines.slice(-400), { text: o, level: i, n: c.lines.length }] } : c
        )
      }));
    },
    ensureConsole: (s, o, i = null) => {
      t().consoles.some((l) => l.id === s) || e((l) => ({ consoles: [...l.consoles, { id: s, title: o, deviceId: i, lines: [] }] }));
    },
    openDeviceConsole: (s) => {
      const o = t().topology.devices.find((c) => c.id === s);
      if (!o) return;
      const i = `dev:${s}`, l = !t().consoles.some((c) => c.id === i);
      t().ensureConsole(i, o.hostname, s), e({ activeConsoleId: i }), l && (o.os === "ios" ? (t().log(i, `Connected to ${o.hostname} console port.`, "dim"), t().log(i, 'Press ? for the command list. Start with "enable".', "dim")) : (t().log(i, `${o.hostname} login: ${o.security.username} (authenticated)`, "dim"), t().log(i, "Press ? or type help for the command list.", "dim")));
    },
    setActiveConsole: (s) => e({ activeConsoleId: s }),
    setCaptureDevice: (s) => e({ captureDeviceId: s }),
    /** Start or stop a device's capture, and show it in the capture pane. */
    toggleCapture: (s) => {
      var i;
      const o = t().topology.devices.find((l) => l.id === s);
      o && (o.capturing = !o.capturing, t().ensureConsole("capture", "Packet Capture"), o.capturing ? (e({ captureDeviceId: s, activeConsoleId: "capture" }), t().log("system", `${o.hostname}: capture started on ${((i = o.interfaces[0]) == null ? void 0 : i.name) || "eth0"}.`, "success")) : t().log("system", `${o.hostname}: capture stopped.`, "dim"), t().commit());
    },
    closeConsole: (s) => {
      s === "system" || s === "attack" || s === "capture" || e((o) => ({
        consoles: o.consoles.filter((i) => i.id !== s),
        activeConsoleId: o.activeConsoleId === s ? "system" : o.activeConsoleId
      }));
    },
    clearConsole: (s) => {
      e((o) => ({ consoles: o.consoles.map((i) => i.id === s ? { ...i, lines: [] } : i) }));
    },
    /* -------------------------------------------------------- settings */
    updateSettings: (s) => {
      const o = { ...t().settings, ...s };
      e({ settings: o }), av(o), s.theme && dv(o.theme), s.speed !== void 0 && t().engine.setSpeed(o.speed), s.ambient !== void 0 && t().engine.setAmbient(o.ambient), s.coaching !== void 0 && t().engine.setCoaching(o.coaching);
    },
    toggleTheme: () => {
      t().updateSettings({ theme: t().settings.theme === "dark" ? "light" : "dark" });
    },
    /* ------------------------------------------------------- simulation */
    toggleRunning: () => {
      const s = t().engine.toggle();
      return t().log("system", s ? "Simulation resumed." : "Simulation paused.", "dim"), t().commit(), s;
    },
    /* ------------------------------------------- simulation (PDU) mode */
    /**
     * Realtime plays transmissions out immediately; Simulation queues every
     * hop so the student can walk a packet across the topology and read the
     * OSI breakdown at each device.
     */
    setSimMode: (s) => {
      t().engine.setMode(s), s === "simulation" ? (t().ensureConsole("simulation", "Simulation"), e({ activeConsoleId: "simulation" }), t().log("system", "Simulation mode: transmissions now queue as PDUs. Press Step to advance one hop.", "success")) : t().log("system", "Realtime mode: transmissions play out immediately.", "dim"), t().commit();
    },
    stepPdu: () => {
      const s = t().engine.step();
      return s || t().log("simulation", "Nothing queued — generate traffic first (ping, or Add PDU).", "dim"), t().commit(), s;
    },
    flushPdu: () => {
      t().engine.flushPdu(), t().commit();
    },
    clearPdu: () => {
      t().engine.clearPdu(), t().commit();
    },
    /**
     * Packet Tracer's envelope tool: queue a one-off ICMP echo between two
     * devices without opening a console.
     */
    /** Envelope tool: first click arms the sender, second fires the PDU. */
    pduFrom: null,
    pduClick: (s) => {
      const o = t().pduFrom;
      if (!o) {
        const i = t().topology.devices.find((l) => l.id === s);
        e({ pduFrom: s, selectedId: s }), t().log("system", `PDU: now click the destination (sending from ${i == null ? void 0 : i.hostname}).`, "dim");
        return;
      }
      if (o === s) {
        e({ pduFrom: null });
        return;
      }
      t().addSimplePdu(o, s), e({ pduFrom: null, selectedId: null });
    },
    addSimplePdu: (s, o) => {
      const { topology: i, engine: l } = t(), c = i.devices.find((p) => p.id === s), u = i.devices.find((p) => p.id === o);
      if (!c || !u) return null;
      const d = l.adjudicate(c, u.hostname);
      return !d.ok || !d.path ? (t().log("simulation", `PDU ${c.hostname} → ${u.hostname}: ${d.reason}`, "error"), t().commit(), null) : (l.emit(d.path, "icmp", { seq: 1 }), t().ensureConsole("simulation", "Simulation"), e({ activeConsoleId: "simulation" }), t().log("simulation", `PDU queued: ${c.hostname} → ${u.hostname} (${d.path.length - 1} hops).`, "success"), t().commit(), d);
    },
    /* ---------------------------------------------------------- grading */
    grade: ({ silent: s = !1 } = {}) => {
      const o = sr(t().labId), i = Cx(o, t().topology, t().engine);
      if (e({ gradeResult: i, graded: !0 }), !s) {
        t().log(
          "system",
          `Check Solution: ${i.earned}/${i.total} points (${i.percent}%).`,
          i.complete ? "success" : "warn"
        ), i.complete && t().log("system", "All objectives met — lab complete.", "success");
        try {
          window.dispatchEvent(new CustomEvent("netrange:graded", { detail: { labId: o.id, result: i } }));
        } catch {
        }
      }
      return i;
    },
    setLab: (s) => e({ labId: s, gradeResult: null, graded: !1 }),
    /* ------------------------------------------------- load / save / reset */
    exportState: () => JSON.stringify({ version: 1, topology: t().topology, labId: t().labId }, null, 2),
    /** Restore the autosaved workspace, if there is one. Returns true if so. */
    restoreWorkspace: () => {
      const s = lv();
      if (!s || !s.topology.devices.length) return !1;
      const { changes: o } = Va(s.topology);
      e({
        topology: s.topology,
        labId: s.labId || t().labId,
        selectedId: null,
        selectedLinkId: null,
        graded: !1,
        gradeResult: null
      });
      const i = s.topology.devices.length;
      t().log("system", `Restored your last workspace — ${i} device${i === 1 ? "" : "s"}.`, "dim");
      for (const l of o) t().log("system", `Migrated: ${l}.`, "dim");
      return e((l) => ({ rev: l.rev + 1 })), !0;
    },
    /** Forget the autosaved copy without touching what is on screen. */
    forgetSavedWorkspace: () => {
      cv(), t().log("system", "Saved workspace cleared from this browser.", "dim");
    },
    importState: (s) => {
      try {
        const o = typeof s == "string" ? JSON.parse(s) : s;
        if (!o || !o.topology) throw new Error("missing topology");
        const { changes: i } = Va(o.topology);
        t().pushHistory(), e({ topology: o.topology, labId: o.labId || t().labId, selectedId: null, graded: !1, gradeResult: null }), t().log("system", "Topology loaded.", "success");
        for (const l of i) t().log("system", `Migrated: ${l}.`, "dim");
        return t().commit(), !0;
      } catch (o) {
        return t().log("system", `Load failed: ${o.message}`, "error"), !1;
      }
    },
    resetTopology: () => {
      t().pushHistory(), e({
        topology: { devices: [], links: [], zones: [], personnel: [] },
        selectedId: null,
        selectedLinkId: null,
        graded: !1,
        gradeResult: null
      }), t().engine.reset(), t().log("system", "Workspace cleared.", "dim"), t().commit();
    },
    /** Clear synthetic attack damage without touching configuration. */
    recoverAll: () => {
      for (const s of t().topology.devices) {
        lc(s), s.runtime.compromised = !1, s.security.lockout = { failures: 0, lockedUntil: 0, locked: !1 };
        for (const o of Object.keys(s.arp)) s.arp[o].spoofed && delete s.arp[o];
      }
      t().log("system", "All nodes recovered; ARP caches flushed.", "success"), t().commit();
    },
    /* ------------------------------------------------------ demo scenario */
    loadStarterTopology: () => {
      const { addDevice: s, connect: o, topology: i } = t();
      if (i.devices.length) {
        t().log("system", "Clear the workspace first — the starter segment only loads onto an empty canvas.", "warn");
        return;
      }
      const l = s("router", 430, 90), c = s("switch", 430, 210), u = s("pc", 250, 330), d = s("server", 620, 330), p = s("accesspoint", 430, 420), h = s("laptop", 300, 520), f = s("camera", 520, 545), g = s("threatactor", 615, 470), w = (k, m) => {
        k.interfaces[0].ip = m, k.interfaces[0].mask = "255.255.255.0", k.interfaces[0].enabled = !0, k.gateway = "192.168.10.1";
      };
      w(l, "192.168.10.1"), l.gateway = "", w(u, "192.168.10.20"), w(d, "192.168.10.80"), w(p, "192.168.10.2"), w(h, "192.168.10.50"), w(f, "192.168.10.51"), w(g, "192.168.10.66"), h.security.username = "student", h.security.password = "Autumn2026", o(l.id, c.id, "straight"), o(c.id, u.id, "straight"), o(c.id, d.id, "straight"), o(c.id, p.id, "straight"), t().ensureConsole("attack", "Cyber Range"), t().ensureConsole("capture", "Packet Capture"), t().log(
        "system",
        'Campus segment loaded: 192.168.10.0/24 with a WPA2 SSID "LAB-WIFI" and an unattached threat actor in range.',
        "success"
      ), t().log(
        "system",
        "Try: open the Threat Actor and run WiFi Snooping, then set the AP to Open and run it again.",
        "dim"
      ), t().commit();
    }
  };
});
function pv({ onTogglePalette: e, onToggleLab: t, onOpenAttack: n, onOpenSettings: r, onOpenSubnet: s, onOpenSocial: o, paletteOpen: i, labOpen: l }) {
  const c = b((T) => T.tool), u = b((T) => T.setTool), d = b((T) => T.undo), p = b((T) => T.redo), h = b((T) => T.past.length > 0), f = b((T) => T.future.length > 0), g = b((T) => T.toggleRunning), w = b((T) => T.recoverAll), k = b((T) => T.exportState), m = b((T) => T.importState), x = b((T) => T.engine), v = b((T) => T.setSimMode), S = b((T) => T.toggleTheme), $ = b((T) => T.addZone), y = b((T) => T.openChallenge), P = b((T) => T.challengePhase), A = b((T) => T.challengeDeadline), B = b((T) => T.tickChallenge), [L, Y] = es.useState(Date.now());
  es.useEffect(() => {
    if (P === "idle") return;
    const T = setInterval(() => {
      Y(Date.now()), B();
    }, 1e3);
    return () => clearInterval(T);
  }, [P, B]);
  const ee = b((T) => T.settings.theme), ne = b((T) => T.stepPdu);
  b((T) => T.rev);
  const te = b((T) => T.topology.devices.length), Be = b((T) => (T.topology.personnel || []).length), M = x.running, we = x.mode, D = x.queuedPdu, N = () => {
    const T = new Blob([k()], { type: "application/json" }), J = URL.createObjectURL(T), Ne = document.createElement("a");
    Ne.href = J, Ne.download = "netrange-topology.json", Ne.click(), URL.revokeObjectURL(J);
  }, H = () => {
    const T = document.createElement("input");
    T.type = "file", T.accept = "application/json", T.onchange = () => {
      var be;
      const J = (be = T.files) == null ? void 0 : be[0];
      if (!J) return;
      const Ne = new FileReader();
      Ne.onload = () => m(String(Ne.result)), Ne.readAsText(J);
    }, T.click();
  };
  return /* @__PURE__ */ a.jsxs("header", { className: "flex flex-wrap items-center gap-2 border-b border-line bg-panel px-3 py-2", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "mr-1 flex items-center gap-2", children: [
      /* @__PURE__ */ a.jsx(
        "span",
        {
          className: "grid h-7 w-7 place-items-center rounded-lg text-white",
          style: { background: "conic-gradient(from 210deg, rgb(var(--nr-accent)), rgb(var(--nr-up)), rgb(var(--nr-accent)))" },
          children: /* @__PURE__ */ a.jsx(ys, { size: 15 })
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "leading-tight", children: [
        /* @__PURE__ */ a.jsx("div", { className: "text-[13px] font-bold", children: "NetRange Lab" }),
        /* @__PURE__ */ a.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-soft", children: "Simulated · offline" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex gap-1 rounded-xl border border-line bg-panel2 p-0.5", children: [
      /* @__PURE__ */ a.jsxs(O, { variant: c === "select" ? "active" : "ghost", size: "sm", onClick: () => u("select"), title: "Select / move (V)", children: [
        /* @__PURE__ */ a.jsx(S1, { size: 14 }),
        " Select"
      ] }),
      /* @__PURE__ */ a.jsxs(O, { variant: c === "cable" ? "active" : "ghost", size: "sm", onClick: () => u("cable"), title: "Cable (C)", children: [
        /* @__PURE__ */ a.jsx(a1, { size: 14 }),
        " Cable"
      ] }),
      /* @__PURE__ */ a.jsx(O, { variant: c === "delete" ? "active" : "ghost", size: "sm", onClick: () => u("delete"), title: "Delete", children: /* @__PURE__ */ a.jsx(_e, { size: 14 }) }),
      /* @__PURE__ */ a.jsx(
        O,
        {
          variant: c === "pdu" ? "active" : "ghost",
          size: "sm",
          onClick: () => u("pdu"),
          title: "Simple PDU — click a sender, then a receiver (P)",
          children: /* @__PURE__ */ a.jsx(Yl, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex gap-1 rounded-xl border border-line bg-panel2 p-0.5", children: [
      /* @__PURE__ */ a.jsx(
        O,
        {
          variant: we === "realtime" ? "active" : "ghost",
          size: "sm",
          onClick: () => v("realtime"),
          title: "Transmissions play out immediately",
          children: "Realtime"
        }
      ),
      /* @__PURE__ */ a.jsx(
        O,
        {
          variant: we === "simulation" ? "active" : "ghost",
          size: "sm",
          onClick: () => v("simulation"),
          title: "Queue every hop so you can step through it and inspect each PDU",
          children: "Simulation"
        }
      )
    ] }),
    we === "simulation" && /* @__PURE__ */ a.jsxs(O, { variant: "outline", size: "sm", onClick: () => ne(), title: "Advance one hop", children: [
      /* @__PURE__ */ a.jsx(nc, { size: 14 }),
      " Step",
      D > 0 && /* @__PURE__ */ a.jsx("span", { className: "ml-1 rounded bg-accent/20 px-1 font-mono text-[10px]", children: D })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex gap-1 rounded-xl border border-line bg-panel2 p-0.5", children: [
      /* @__PURE__ */ a.jsx(O, { size: "sm", onClick: d, disabled: !h, title: "Undo (Ctrl+Z)", children: /* @__PURE__ */ a.jsx(D1, { size: 14 }) }),
      /* @__PURE__ */ a.jsx(O, { size: "sm", onClick: p, disabled: !f, title: "Redo (Ctrl+Y)", children: /* @__PURE__ */ a.jsx(E1, { size: 14 }) })
    ] }),
    /* @__PURE__ */ a.jsxs(O, { variant: "outline", size: "sm", onClick: () => g(), title: "Pause / resume (Space)", children: [
      M ? /* @__PURE__ */ a.jsx(C1, { size: 14 }) : /* @__PURE__ */ a.jsx($1, { size: 14 }),
      " ",
      M ? "Pause" : "Run"
    ] }),
    /* @__PURE__ */ a.jsxs(
      O,
      {
        variant: "outline",
        size: "sm",
        onClick: y,
        title: "Red team vs blue team challenge",
        children: [
          /* @__PURE__ */ a.jsx(ys, { size: 14 }),
          " Challenge"
        ]
      }
    ),
    /* @__PURE__ */ a.jsxs(O, { variant: "danger", size: "sm", onClick: n, title: "Open the cyber range", children: [
      /* @__PURE__ */ a.jsx(oa, { size: 14 }),
      " Cyber Range"
    ] }),
    /* @__PURE__ */ a.jsxs(
      O,
      {
        variant: "outline",
        size: "sm",
        onClick: o,
        title: "The human layer — scripted technicians and social engineering",
        children: [
          /* @__PURE__ */ a.jsx(pr, { size: 14 }),
          " People",
          Be > 0 && /* @__PURE__ */ a.jsx("span", { className: "ml-1 rounded bg-accent/20 px-1 font-mono text-[10px]", children: Be })
        ]
      }
    ),
    /* @__PURE__ */ a.jsxs(
      O,
      {
        variant: "outline",
        size: "sm",
        onClick: () => {
          const { w: T, h: J } = b.getState().canvasSize, Ne = b.getState().toWorld(T / 2, J / 2);
          $(Ne.x, Ne.y);
        },
        title: "Add a floor or building section",
        children: [
          /* @__PURE__ */ a.jsx(Lo, { size: 14 }),
          " Section"
        ]
      }
    ),
    /* @__PURE__ */ a.jsxs(O, { variant: "outline", size: "sm", onClick: w, title: "Clear attack damage and flush ARP caches", children: [
      /* @__PURE__ */ a.jsx(y1, { size: 14 }),
      " Recover"
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "flex-1" }),
    P !== "idle" && /* @__PURE__ */ a.jsxs(Z, { tone: P === "breach" ? "down" : P === "armed" ? "up" : "accent", children: [
      P === "setup" ? "BUILD" : P === "breach" ? "BREACH" : P.toUpperCase(),
      A ? ` ${hv(A, L)}` : ""
    ] }),
    /* @__PURE__ */ a.jsxs(Z, { tone: M ? "up" : "warn", children: [
      /* @__PURE__ */ a.jsx("span", { className: `h-2 w-2 rounded-full ${M ? "bg-up" : "bg-warn"}` }),
      M ? "RUNNING" : "PAUSED"
    ] }),
    /* @__PURE__ */ a.jsxs(Z, { children: [
      te,
      " node",
      te === 1 ? "" : "s"
    ] }),
    /* @__PURE__ */ a.jsxs(Z, { tone: "accent", className: "hidden sm:inline-flex", children: [
      "t+",
      (x.clock / 1e3).toFixed(1),
      "s"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ a.jsx(O, { size: "sm", onClick: N, title: "Save topology as JSON", children: /* @__PURE__ */ a.jsx(I1, { size: 14 }) }),
      /* @__PURE__ */ a.jsx(O, { size: "sm", onClick: H, title: "Load topology JSON", children: /* @__PURE__ */ a.jsx(R1, { size: 14 }) }),
      /* @__PURE__ */ a.jsx(O, { variant: i ? "active" : "ghost", size: "sm", onClick: e, title: "Toggle palette", children: /* @__PURE__ */ a.jsx(j1, { size: 14 }) }),
      /* @__PURE__ */ a.jsx(O, { variant: l ? "active" : "ghost", size: "sm", onClick: t, title: "Toggle lab guide", children: /* @__PURE__ */ a.jsx(N1, { size: 14 }) }),
      /* @__PURE__ */ a.jsx(O, { size: "sm", onClick: s, title: "Subnet calculator", "aria-label": "Subnet calculator", children: /* @__PURE__ */ a.jsx($h, { size: 14 }) }),
      /* @__PURE__ */ a.jsx(
        O,
        {
          size: "sm",
          onClick: S,
          title: ee === "dark" ? "Switch to light mode" : "Switch to dark mode",
          "aria-label": "Toggle colour theme",
          children: ee === "dark" ? /* @__PURE__ */ a.jsx(rc, { size: 14 }) : /* @__PURE__ */ a.jsx(Ql, { size: 14 })
        }
      ),
      /* @__PURE__ */ a.jsx(O, { size: "sm", onClick: r, title: "Settings", children: /* @__PURE__ */ a.jsx(sa, { size: 14 }) })
    ] })
  ] });
}
function hv(e, t) {
  const n = Math.max(0, Math.floor((e - t) / 1e3));
  return `${Math.floor(n / 60)}:${String(n % 60).padStart(2, "0")}`;
}
function fv({ name: e, size: t = 16 }) {
  const n = $s(e);
  return /* @__PURE__ */ a.jsx(n, { size: t });
}
function mv({ onClose: e }) {
  const t = b((o) => o.addDevice), n = b((o) => o.cableType), r = b((o) => o.setCableType), s = b((o) => o.tool);
  return /* @__PURE__ */ a.jsxs("aside", { className: "w-[196px] shrink-0 overflow-y-auto border-r border-line bg-panel p-3", children: [
    w0.map((o) => /* @__PURE__ */ a.jsxs("section", { className: "mb-4", children: [
      /* @__PURE__ */ a.jsx(V, { children: o }),
      b0(o).map((i) => /* @__PURE__ */ a.jsxs(
        "button",
        {
          draggable: !0,
          onDragStart: (l) => {
            l.dataTransfer.setData("application/netrange-device", i.id), l.dataTransfer.effectAllowed = "copy";
          },
          onClick: () => t(i.id, 360 + Math.random() * 120, 220 + Math.random() * 120),
          title: `Drag onto the canvas, or click to place ${i.label}`,
          className: "mb-1.5 flex w-full items-center gap-2.5 rounded-lg border border-line bg-panel2 px-2.5 py-2 text-left text-[12.5px] font-semibold hover:border-accent hover:shadow-sm",
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "grid h-7 w-7 shrink-0 place-items-center rounded-md border border-line bg-panel text-accent", children: /* @__PURE__ */ a.jsx(fv, { name: i.icon }) }),
            /* @__PURE__ */ a.jsx("span", { className: "min-w-0 truncate", children: i.label })
          ]
        },
        i.id
      ))
    ] }, o)),
    /* @__PURE__ */ a.jsxs("section", { children: [
      /* @__PURE__ */ a.jsx(V, { children: "Media" }),
      Object.values(Se).map((o) => {
        const i = s === "cable" && n === o.id;
        return /* @__PURE__ */ a.jsxs(
          "button",
          {
            onClick: () => r(o.id),
            title: o.hint,
            className: `mb-1.5 flex w-full items-center gap-2.5 rounded-lg border px-2.5 py-2 text-left text-[12px] font-semibold ${i ? "border-accent bg-accent/10" : "border-line bg-panel2 hover:border-accent"}`,
            children: [
              /* @__PURE__ */ a.jsx("span", { className: "grid h-7 w-7 shrink-0 place-items-center rounded-md border border-line bg-panel", children: /* @__PURE__ */ a.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", children: /* @__PURE__ */ a.jsx(
                "line",
                {
                  x1: "1",
                  y1: "13",
                  x2: "15",
                  y2: "3",
                  stroke: o.color,
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeDasharray: o.dash || void 0
                }
              ) }) }),
              /* @__PURE__ */ a.jsxs("span", { className: "min-w-0", children: [
                /* @__PURE__ */ a.jsx("span", { className: "block truncate", children: o.label }),
                /* @__PURE__ */ a.jsx("span", { className: "block font-mono text-[9.5px] text-soft", children: o.short })
              ] })
            ]
          },
          o.id
        );
      }),
      /* @__PURE__ */ a.jsxs("p", { className: "mt-2 text-[11px] leading-snug text-soft", children: [
        "Pick a cable, then click two devices. The wrong cable installs a",
        " ",
        /* @__PURE__ */ a.jsx("span", { className: "text-down", children: "red" }),
        " link so you can diagnose it."
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("button", { onClick: e, className: "mt-4 w-full rounded-lg border border-line py-1.5 text-[11px] text-soft hover:text-ink", children: "Hide palette" })
  ] });
}
const gv = {
  ethernet: "▭",
  fiber: "◇",
  serial: "⬡",
  usb: "⬒",
  console: "⌸",
  wifi: "◉"
};
function xv() {
  const e = b((h) => h.portPicker), t = b((h) => h.choosePort), n = b((h) => h.closePortPicker), r = b((h) => h.cableType), s = b((h) => h.topology), o = b((h) => h.toScreen);
  if (b((h) => h.viewport), !e) return null;
  const i = s.devices.find((h) => h.id === e.deviceId);
  if (!i) return null;
  const l = Se[r], c = e.options.filter((h) => !h.disabled).length, u = o(i.x, i.y), d = Math.max(8, u.x + 46), p = Math.max(8, u.y - 24);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "absolute z-30 w-[228px] overflow-hidden rounded-xl border border-line bg-panel shadow-2xl",
      style: { left: d, top: p },
      role: "dialog",
      "aria-label": `Choose a port on ${i.hostname}`,
      children: [
        /* @__PURE__ */ a.jsxs("header", { className: "border-b border-line px-2.5 py-2", children: [
          /* @__PURE__ */ a.jsx("div", { className: "text-[12px] font-bold leading-tight", children: i.hostname }),
          /* @__PURE__ */ a.jsxs("div", { className: "text-[10.5px] leading-snug text-soft", children: [
            c,
            " port",
            c === 1 ? "" : "s",
            " accept",
            c === 1 ? "s" : "",
            " ",
            /* @__PURE__ */ a.jsx("span", { style: { color: l == null ? void 0 : l.color }, children: l == null ? void 0 : l.short })
          ] })
        ] }),
        /* @__PURE__ */ a.jsx("ul", { className: "max-h-[232px] overflow-y-auto p-1", children: e.options.map((h) => {
          const f = Fn[h.media];
          return /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsxs(
            "button",
            {
              disabled: h.disabled,
              onClick: () => t(i.id, h.name),
              title: h.disabled ? h.reason : `Connect to ${h.name} (${h.mediaLabel})`,
              className: `flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left font-mono text-[11.5px] ${h.disabled ? "cursor-not-allowed text-soft/60" : "text-ink hover:bg-accent/15"}`,
              children: [
                /* @__PURE__ */ a.jsx(
                  "span",
                  {
                    className: "w-3.5 shrink-0 text-center",
                    style: { color: h.disabled || f == null ? void 0 : f.color },
                    "aria-hidden": "true",
                    children: gv[h.media] || "▭"
                  }
                ),
                /* @__PURE__ */ a.jsx("span", { className: "min-w-0 flex-1 truncate", children: h.name }),
                /* @__PURE__ */ a.jsx("span", { className: "shrink-0 text-[9.5px] uppercase tracking-wide text-soft", children: h.disabled ? h.reason : f == null ? void 0 : f.short })
              ]
            }
          ) }, h.name);
        }) }),
        /* @__PURE__ */ a.jsx("footer", { className: "border-t border-line px-2.5 py-1.5", children: /* @__PURE__ */ a.jsx("button", { onClick: n, className: "text-[11px] text-soft hover:text-ink", children: "Cancel" }) })
      ]
    }
  );
}
function yv() {
  const e = b((s) => s.contextMenu), t = b((s) => s.closeContextMenu), n = C.useRef(null);
  if (C.useEffect(() => {
    if (!e) return;
    const s = (i) => {
      n.current && !n.current.contains(i.target) && t();
    }, o = (i) => {
      i.key === "Escape" && t();
    };
    return window.addEventListener("pointerdown", s, !0), window.addEventListener("keydown", o), () => {
      window.removeEventListener("pointerdown", s, !0), window.removeEventListener("keydown", o);
    };
  }, [e, t]), !e) return null;
  const r = vv(e);
  return r.length ? /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: n,
      className: "absolute z-40 min-w-[196px] overflow-hidden rounded-xl border border-line bg-panel py-1 shadow-2xl",
      style: { left: e.x, top: e.y },
      role: "menu",
      "aria-label": "Context menu",
      children: r.map(
        (s, o) => s.separator ? /* @__PURE__ */ a.jsx("div", { className: "my-1 h-px bg-line" }, `sep${o}`) : s.header ? /* @__PURE__ */ a.jsx("div", { className: "px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-soft", children: s.header }, `h${o}`) : /* @__PURE__ */ a.jsxs(
          "button",
          {
            role: "menuitem",
            disabled: s.disabled,
            onClick: () => {
              s.onClick(), t();
            },
            className: `flex w-full items-center gap-2.5 px-3 py-1.5 text-left text-[12.5px] ${s.disabled ? "cursor-not-allowed text-soft/50" : s.danger ? "text-down hover:bg-down/10" : "text-ink hover:bg-accent/15"}`,
            children: [
              /* @__PURE__ */ a.jsx("span", { className: "w-3.5 shrink-0 text-soft", children: s.icon }),
              /* @__PURE__ */ a.jsx("span", { className: "flex-1 truncate", children: s.label }),
              s.hint && /* @__PURE__ */ a.jsx("span", { className: "shrink-0 font-mono text-[9.5px] text-soft", children: s.hint })
            ]
          },
          s.label
        )
      )
    }
  ) : null;
}
function vv(e, t) {
  const n = b.getState();
  if (e.kind === "canvas")
    return [
      {
        label: "Add floor / section here",
        icon: /* @__PURE__ */ a.jsx(Lo, { size: 13 }),
        onClick: () => n.addZone(e.world.x, e.world.y)
      },
      { separator: !0 },
      {
        label: "Fit everything in view",
        icon: /* @__PURE__ */ a.jsx(Zl, { size: 13 }),
        hint: "F",
        onClick: () => n.fitView()
      },
      { label: "Reset zoom", icon: /* @__PURE__ */ a.jsx(ta, { size: 13 }), onClick: () => n.resetView() },
      { separator: !0 },
      {
        label: "Clear workspace",
        icon: /* @__PURE__ */ a.jsx(_e, { size: 13 }),
        danger: !0,
        disabled: n.topology.devices.length === 0 && (n.topology.zones || []).length === 0,
        onClick: () => n.resetTopology()
      }
    ];
  if (e.kind === "zone") {
    const i = (n.topology.zones || []).find((c) => c.id === e.id);
    if (!i) return [];
    const l = n.devicesInZone(i).length;
    return [
      { header: i.name },
      {
        label: "Rename section",
        icon: /* @__PURE__ */ a.jsx(Xl, { size: 13 }),
        // Not window.prompt: a sandboxed iframe without allow-modals silently
        // returns null, and an iframe is where this app is designed to live.
        onClick: () => n.startZoneRename(i.id)
      },
      {
        label: "Recolour",
        icon: /* @__PURE__ */ a.jsx(Lo, { size: 13 }),
        onClick: () => n.updateZone(i.id, { hue: (i.hue + 47) % 360 })
      },
      { separator: !0 },
      {
        label: "Delete section only",
        icon: /* @__PURE__ */ a.jsx(_e, { size: 13 }),
        danger: !0,
        onClick: () => n.removeZone(i.id, !1)
      },
      {
        label: `Delete with ${l} device${l === 1 ? "" : "s"}`,
        icon: /* @__PURE__ */ a.jsx(_e, { size: 13 }),
        danger: !0,
        disabled: l === 0,
        onClick: () => n.removeZone(i.id, !0)
      }
    ];
  }
  if (e.kind === "link") {
    const i = n.topology.links.find((u) => u.id === e.id);
    if (!i) return [];
    const l = n.topology.devices.find((u) => u.id === i.a), c = n.topology.devices.find((u) => u.id === i.b);
    return [
      { header: `${(l == null ? void 0 : l.hostname) || "?"} ${i.aPort} ⇄ ${(c == null ? void 0 : c.hostname) || "?"} ${i.bPort}` },
      {
        label: i.down ? "Link is down" : "Link is up",
        icon: /* @__PURE__ */ a.jsx(Wn, { size: 13 }),
        disabled: !0,
        onClick: () => {
        }
      },
      { separator: !0 },
      {
        label: "Remove cable",
        icon: /* @__PURE__ */ a.jsx(_e, { size: 13 }),
        danger: !0,
        onClick: () => n.removeLink(i.id)
      }
    ];
  }
  const r = n.topology.devices.find((i) => i.id === e.id);
  if (!r) return [];
  const s = Ht[r.typeId], o = [{ header: `${r.hostname} · ${(s == null ? void 0 : s.label) || r.role}` }];
  return o.push({
    label: "Open console",
    icon: /* @__PURE__ */ a.jsx(tc, { size: 13 }),
    onClick: () => n.openDeviceConsole(r.id)
  }), o.push({
    label: "Configure…",
    icon: /* @__PURE__ */ a.jsx(sa, { size: 13 }),
    onClick: () => {
      var i;
      return ((i = n.openDeviceModal) == null ? void 0 : i.call(n, r.id)) ?? n.openDeviceConsole(r.id);
    }
  }), (r.role === "switch" || r.role === "l3switch") && (o.push({ separator: !0 }), o.push({
    label: "Show MAC address table",
    icon: /* @__PURE__ */ a.jsx(Wn, { size: 13 }),
    onClick: () => Gs(n, r, "show mac address-table")
  }), o.push({
    label: "Show VLAN brief",
    icon: /* @__PURE__ */ a.jsx(Wn, { size: 13 }),
    onClick: () => Gs(n, r, "show vlan brief")
  })), (r.role === "router" || r.role === "firewall" || r.role === "l3switch") && (o.push({ separator: !0 }), o.push({
    label: "Show IP route",
    icon: /* @__PURE__ */ a.jsx(Wn, { size: 13 }),
    onClick: () => Gs(n, r, "show ip route")
  }), o.push({
    label: "Show interface brief",
    icon: /* @__PURE__ */ a.jsx(Wn, { size: 13 }),
    onClick: () => Gs(n, r, "show ip interface brief")
  })), r.ap && (o.push({ separator: !0 }), o.push({
    label: r.ap.enabled ? "Switch radio off" : "Switch radio on",
    icon: r.ap.enabled ? /* @__PURE__ */ a.jsx(Wh, { size: 13 }) : /* @__PURE__ */ a.jsx(Vh, { size: 13 }),
    onClick: () => n.updateDevice(r.id, (i) => {
      i.ap.enabled = !i.ap.enabled;
    })
  })), r.radio && (o.push({ separator: !0 }), o.push({
    label: r.radio.monitorMode ? "Leave monitor mode" : "Enter monitor mode",
    icon: /* @__PURE__ */ a.jsx(Fi, { size: 13 }),
    onClick: () => n.updateDevice(r.id, (i) => {
      i.radio.monitorMode = !i.radio.monitorMode;
    })
  })), o.push({ separator: !0 }), o.push({
    label: r.capturing ? "Stop capture here" : "Capture from here",
    icon: /* @__PURE__ */ a.jsx(Fi, { size: 13 }),
    onClick: () => n.toggleCapture(r.id)
  }), o.push({
    label: "Send a PDU from here",
    icon: /* @__PURE__ */ a.jsx(Yl, { size: 13 }),
    hint: "P",
    onClick: () => {
      n.setTool("pdu"), n.pduClick(r.id);
    }
  }), r.role === "attacker" && o.push({
    label: "Open the cyber range",
    icon: /* @__PURE__ */ a.jsx(oa, { size: 13 }),
    onClick: () => {
      var i;
      return (i = n.openAttackPanel) == null ? void 0 : i.call(n, r.id);
    }
  }), o.push({ separator: !0 }), o.push({
    label: "Duplicate",
    icon: /* @__PURE__ */ a.jsx(ql, { size: 13 }),
    hint: "⌘D",
    onClick: () => n.duplicateDevice(r.id)
  }), o.push({
    label: "Delete device",
    icon: /* @__PURE__ */ a.jsx(_e, { size: 13 }),
    danger: !0,
    hint: "Del",
    onClick: () => n.removeDevice(r.id)
  }), o;
}
function Gs(e, t, n) {
  var r;
  e.openDeviceConsole(t.id), (r = e.queueConsoleCommand) == null || r.call(e, t.id, n);
}
const pt = 76, qt = 58, Ks = 11;
function wv({ onOpenDevice: e }) {
  const t = C.useRef(null), n = C.useRef(null), r = C.useRef(null), s = b((j) => j.topology), o = b((j) => j.rev), i = b((j) => j.engine), l = b((j) => j.tool), c = b((j) => j.cableType), u = b((j) => j.selectedId), d = b((j) => j.selectedLinkId), p = b((j) => j.pendingCableFrom), h = b((j) => j.settings), f = b((j) => j.select), g = b((j) => j.selectLink), w = b((j) => j.clearSelection), k = b((j) => j.moveDevice), m = b((j) => j.pushHistory), x = b((j) => j.removeDevice), v = b((j) => j.removeLink), S = b((j) => j.cableClick), $ = b((j) => j.pduClick), y = b((j) => j.pduFrom), P = b((j) => j.viewport), A = b((j) => j.panBy), B = b((j) => j.zoomAt), L = b((j) => j.resetView), Y = b((j) => j.fitView), ee = b((j) => j.topology.zones), ne = b((j) => j.selectedZoneId), te = b((j) => j.selectZone), Be = b((j) => j.moveZone), M = b((j) => j.updateZone), we = b((j) => j.devicesInZone), D = b((j) => j.openContextMenu), N = b((j) => j.startZoneRename), H = b((j) => j.setCanvasSize), T = b((j) => j.closeContextMenu), J = b((j) => j.addDevice), Ne = b((j) => j.openDeviceConsole), [be, xn] = C.useState(null), [st, Bt] = C.useState(null), [Wt, Ps] = C.useState(null), yn = C.useMemo(
    () => new Map(s.devices.map((j) => [j.id, j])),
    [s.devices, o]
  ), vn = C.useCallback((j) => {
    const R = n.current, U = t.current;
    if (!R || !U) return { x: 0, y: 0 };
    const q = U.createSVGPoint();
    q.x = j.clientX, q.y = j.clientY;
    const ce = R.getScreenCTM();
    return ce ? q.matrixTransform(ce.inverse()) : { x: 0, y: 0 };
  }, []), Sf = C.useCallback((j) => {
    var U;
    const R = (U = r.current) == null ? void 0 : U.getBoundingClientRect();
    return R ? { x: j.clientX - R.left, y: j.clientY - R.top } : { x: 0, y: 0 };
  }, []), jf = (j, R) => {
    var q, ce;
    if (j.stopPropagation(), l === "delete") {
      x(R.id);
      return;
    }
    if (l === "cable") {
      S(R.id);
      return;
    }
    if (l === "pdu") {
      $(R.id);
      return;
    }
    f(R.id);
    const U = vn(j);
    xn({ id: R.id, dx: R.x - U.x, dy: R.y - U.y, moved: !1 }), (ce = (q = j.currentTarget).setPointerCapture) == null || ce.call(q, j.pointerId);
  }, Nf = (j) => {
    if (st) {
      A(j.clientX - st.x, j.clientY - st.y), Bt({ x: j.clientX, y: j.clientY });
      return;
    }
    if (Wt) {
      const De = vn(j), Re = De.x - Wt.lastX, ze = De.y - Wt.lastY;
      if (Re || ze) {
        if (Wt.resize) {
          const wn = (ee || []).find((pa) => pa.id === Wt.id);
          wn && M(wn.id, { w: Math.max(140, wn.w + Re), h: Math.max(110, wn.h + ze) });
        } else
          Be(Wt.id, Re, ze, Wt.carried);
        Ps({ ...Wt, lastX: De.x, lastY: De.y });
      }
      return;
    }
    if (!be) return;
    const R = vn(j), U = Math.round((R.x + be.dx) / Ks) * Ks, q = Math.round((R.y + be.dy) / Ks) * Ks, ce = yn.get(be.id);
    ce && (ce.x !== U || ce.y !== q) && (be.moved || (m(), xn({ ...be, moved: !0 })), k(be.id, U, q));
  }, fc = () => {
    xn(null), Bt(null), Ps(null);
  }, Cf = (j) => {
    var R, U;
    T(), w(), j.button === 0 && (Bt({ x: j.clientX, y: j.clientY }), (U = (R = j.currentTarget).setPointerCapture) == null || U.call(R, j.pointerId));
  }, Un = (j, R) => {
    j.preventDefault(), j.stopPropagation();
    const U = Sf(j);
    D({ ...R, x: U.x, y: U.y, world: vn(j) });
  }, $f = (j) => {
    j.preventDefault();
    const R = j.dataTransfer.getData("application/netrange-device");
    if (!R) return;
    const U = vn(j);
    J(R, U.x, U.y);
  };
  C.useEffect(() => {
    const j = r.current;
    if (!j || typeof ResizeObserver > "u") return;
    const R = new ResizeObserver(([U]) => {
      const { width: q, height: ce } = U.contentRect;
      H(q, ce);
    });
    return R.observe(j), () => R.disconnect();
  }, [H]), C.useEffect(() => {
    const j = r.current;
    if (!j) return;
    const R = (U) => {
      U.preventDefault();
      const q = j.getBoundingClientRect();
      B(U.deltaY < 0 ? 1.12 : 1 / 1.12, U.clientX - q.left, U.clientY - q.top);
    };
    return j.addEventListener("wheel", R, { passive: !1 }), () => j.removeEventListener("wheel", R);
  }, [B]);
  const Pf = i.packets;
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: r,
      className: `relative min-h-0 flex-1 overflow-hidden ${h.showGrid ? "nr-grid" : ""}`,
      onDragOver: (j) => j.preventDefault(),
      onDrop: $f,
      children: [
        /* @__PURE__ */ a.jsx(
          "svg",
          {
            ref: t,
            className: `h-full w-full touch-none ${st ? "cursor-grabbing" : ""}`,
            onPointerMove: Nf,
            onPointerUp: fc,
            onPointerLeave: fc,
            onPointerDown: Cf,
            onContextMenu: (j) => Un(j, { kind: "canvas" }),
            role: "application",
            "aria-label": "Network topology workspace",
            children: /* @__PURE__ */ a.jsxs(
              "g",
              {
                ref: n,
                transform: `translate(${P.x},${P.y}) scale(${P.zoom})`,
                children: [
                  /* @__PURE__ */ a.jsx("g", { children: (ee || []).map((j) => {
                    const R = ne === j.id, U = `hsl(${j.hue} 70% 55%)`;
                    return /* @__PURE__ */ a.jsxs("g", { children: [
                      /* @__PURE__ */ a.jsx(
                        "rect",
                        {
                          x: j.x,
                          y: j.y,
                          width: j.w,
                          height: j.h,
                          rx: 14,
                          fill: U,
                          fillOpacity: R ? 0.1 : 0.055,
                          stroke: U,
                          strokeOpacity: R ? 0.9 : 0.45,
                          strokeWidth: R ? 2 : 1.5,
                          strokeDasharray: "10 6",
                          className: "cursor-move",
                          onPointerDown: (q) => {
                            var De, Re;
                            q.stopPropagation(), T(), te(j.id);
                            const ce = vn(q);
                            Ps({ id: j.id, lastX: ce.x, lastY: ce.y, carried: we(j) }), (Re = (De = q.currentTarget).setPointerCapture) == null || Re.call(De, q.pointerId);
                          },
                          onContextMenu: (q) => Un(q, { kind: "zone", id: j.id })
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "rect",
                        {
                          x: j.x + 8,
                          y: j.y + 10,
                          width: Math.max(42, j.name.length * 7.1 + 14),
                          height: 18,
                          rx: 5,
                          fill: "rgb(var(--nr-panel))",
                          fillOpacity: 0.82,
                          stroke: U,
                          strokeOpacity: 0.35,
                          className: "cursor-text",
                          onPointerDown: (q) => q.stopPropagation(),
                          onDoubleClick: (q) => {
                            q.stopPropagation(), N(j.id);
                          },
                          onContextMenu: (q) => Un(q, { kind: "zone", id: j.id })
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "text",
                        {
                          x: j.x + 14,
                          y: j.y + 22,
                          fontSize: "12",
                          fontWeight: "600",
                          fontFamily: "ui-monospace, monospace",
                          fill: U,
                          opacity: 0.95,
                          className: "cursor-text select-none",
                          role: "button",
                          "aria-label": `Rename section ${j.name}`,
                          onPointerDown: (q) => q.stopPropagation(),
                          onDoubleClick: (q) => {
                            q.stopPropagation(), N(j.id);
                          },
                          onContextMenu: (q) => Un(q, { kind: "zone", id: j.id }),
                          children: j.name
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "rect",
                        {
                          x: j.x + j.w - 16,
                          y: j.y + j.h - 16,
                          width: 14,
                          height: 14,
                          rx: 3,
                          fill: U,
                          fillOpacity: 0.55,
                          className: "cursor-nwse-resize",
                          onPointerDown: (q) => {
                            var De, Re;
                            q.stopPropagation();
                            const ce = vn(q);
                            Ps({ id: j.id, lastX: ce.x, lastY: ce.y, resize: !0, carried: [] }), (Re = (De = q.currentTarget).setPointerCapture) == null || Re.call(De, q.pointerId);
                          }
                        }
                      )
                    ] }, j.id);
                  }) }),
                  /* @__PURE__ */ a.jsx("g", { children: Er(s).map((j) => {
                    const R = !ae[j.ap.security] || !ae[j.ap.security].encrypted, U = j.ap.rogue ? "rgb(var(--nr-down))" : R ? "rgb(var(--nr-warn))" : "rgb(var(--nr-accent))";
                    return /* @__PURE__ */ a.jsxs("g", { pointerEvents: "none", children: [
                      /* @__PURE__ */ a.jsx(
                        "circle",
                        {
                          cx: j.x,
                          cy: j.y,
                          r: j.ap.range,
                          fill: U,
                          fillOpacity: 0.045,
                          stroke: U,
                          strokeOpacity: 0.35,
                          strokeWidth: 1.25,
                          strokeDasharray: "6 7"
                        }
                      ),
                      /* @__PURE__ */ a.jsxs(
                        "text",
                        {
                          x: j.x,
                          y: j.y - j.ap.range + 15,
                          textAnchor: "middle",
                          fontSize: "10",
                          fontFamily: "ui-monospace, monospace",
                          fill: U,
                          opacity: 0.85,
                          children: [
                            j.ap.ssid,
                            " · ",
                            R ? "OPEN" : j.ap.security.toUpperCase(),
                            j.ap.rogue ? " · ROGUE" : ""
                          ]
                        }
                      )
                    ] }, `rf-${j.id}`);
                  }) }),
                  /* @__PURE__ */ a.jsx("g", { children: rf(s).map((j) => {
                    var Re, ze;
                    const R = yn.get(j.a), U = yn.get(j.b);
                    if (!R || !U) return null;
                    const q = ae[j.security] && ae[j.security].encrypted, De = ((ze = (Re = yn.get(j.b)) == null ? void 0 : Re.ap) == null ? void 0 : ze.rogue) ? "rgb(var(--nr-down))" : q ? "rgb(var(--nr-up))" : "rgb(var(--nr-warn))";
                    return /* @__PURE__ */ a.jsxs("g", { pointerEvents: "none", children: [
                      /* @__PURE__ */ a.jsx(
                        "line",
                        {
                          x1: R.x,
                          y1: R.y,
                          x2: U.x,
                          y2: U.y,
                          stroke: De,
                          strokeWidth: 2,
                          strokeDasharray: "3 7",
                          strokeLinecap: "round",
                          opacity: 0.85
                        }
                      ),
                      /* @__PURE__ */ a.jsxs(
                        "text",
                        {
                          x: (R.x + U.x) / 2,
                          y: (R.y + U.y) / 2 - 5,
                          textAnchor: "middle",
                          fontSize: "9",
                          fontFamily: "ui-monospace, monospace",
                          fill: De,
                          opacity: 0.9,
                          children: [
                            j.dbm,
                            " dBm ",
                            q ? "🔒" : "⚠"
                          ]
                        }
                      )
                    ] }, j.id);
                  }) }),
                  /* @__PURE__ */ a.jsx("g", { children: s.links.map((j) => {
                    const R = yn.get(j.a), U = yn.get(j.b);
                    if (!R || !U) return null;
                    const q = Se[j.cableType] || Se.straight, ce = j.down, De = ce ? "rgb(var(--nr-down))" : q.color, Re = d === j.id;
                    return /* @__PURE__ */ a.jsxs("g", { children: [
                      /* @__PURE__ */ a.jsx(
                        "line",
                        {
                          x1: R.x,
                          y1: R.y,
                          x2: U.x,
                          y2: U.y,
                          stroke: Re ? "rgb(var(--nr-accent))" : De,
                          strokeWidth: Re ? 4.5 : 3,
                          strokeLinecap: "round",
                          strokeDasharray: ce ? "7 6" : q.dash || void 0
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "line",
                        {
                          x1: R.x,
                          y1: R.y,
                          x2: U.x,
                          y2: U.y,
                          stroke: "transparent",
                          strokeWidth: 16,
                          className: "cursor-pointer",
                          onPointerDown: (ze) => {
                            ze.stopPropagation(), T(), l === "delete" ? v(j.id) : g(j.id);
                          },
                          onContextMenu: (ze) => Un(ze, { kind: "link", id: j.id }),
                          children: /* @__PURE__ */ a.jsxs("title", { children: [
                            q.label,
                            ce ? ` — DOWN: ${j.reason}` : " — up"
                          ] })
                        }
                      ),
                      [[R, U], [U, R]].map(([ze, wn], pa) => /* @__PURE__ */ a.jsx(
                        "circle",
                        {
                          cx: ze.x + (wn.x - ze.x) * 0.26,
                          cy: ze.y + (wn.y - ze.y) * 0.26,
                          r: 3.6,
                          fill: ce ? "rgb(var(--nr-down))" : "rgb(var(--nr-up))",
                          stroke: "rgb(var(--nr-panel))",
                          strokeWidth: "1"
                        },
                        pa
                      ))
                    ] }, j.id);
                  }) }),
                  /* @__PURE__ */ a.jsx("g", { children: Pf.map((j) => {
                    const R = i.positionOf(j, yn);
                    if (!R) return null;
                    const U = Ou[j.kind] || Ou.icmp;
                    return /* @__PURE__ */ a.jsxs("g", { children: [
                      /* @__PURE__ */ a.jsx("circle", { cx: R.x, cy: R.y, r: 7, fill: U.color, opacity: 0.22 }),
                      /* @__PURE__ */ a.jsx("circle", { cx: R.x, cy: R.y, r: 3.8, fill: U.color })
                    ] }, j.id);
                  }) }),
                  /* @__PURE__ */ a.jsx("g", { children: s.devices.map((j) => /* @__PURE__ */ a.jsx(
                    bv,
                    {
                      device: j,
                      selected: u === j.id,
                      armed: p === j.id || y === j.id,
                      showLabel: h.showLabels,
                      onPointerDown: (R) => jf(R, j),
                      onContextMenu: (R) => Un(R, { kind: "device", id: j.id }),
                      onDoubleClick: (R) => {
                        R.stopPropagation(), e(j.id), Ne(j.id);
                      }
                    },
                    j.id
                  )) })
                ]
              }
            )
          }
        ),
        s.devices.length === 0 && /* @__PURE__ */ a.jsx("div", { className: "pointer-events-none absolute inset-0 grid place-items-center p-6 text-center", children: /* @__PURE__ */ a.jsx("p", { className: "max-w-xs text-[13px] leading-relaxed text-soft", children: "Drag a device from the palette, then pick a cable and click two devices to wire them. Double-click any node for its configuration and console." }) }),
        /* @__PURE__ */ a.jsx(xv, {}),
        /* @__PURE__ */ a.jsx(yv, {}),
        /* @__PURE__ */ a.jsxs("div", { className: "absolute bottom-3 right-3 flex items-center gap-1 rounded-xl border border-line bg-panel/90 p-1 shadow-lg backdrop-blur", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => {
                var j, R;
                return B(1 / 1.2, (((j = r.current) == null ? void 0 : j.clientWidth) || 0) / 2, (((R = r.current) == null ? void 0 : R.clientHeight) || 0) / 2);
              },
              title: "Zoom out",
              "aria-label": "Zoom out",
              className: "grid h-7 w-7 place-items-center rounded-lg text-soft hover:bg-panel2 hover:text-ink",
              children: /* @__PURE__ */ a.jsx(_h, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsxs(
            "button",
            {
              onClick: () => L(),
              title: "Reset zoom to 100%",
              className: "min-w-[48px] rounded-lg px-1 font-mono text-[11px] text-soft hover:bg-panel2 hover:text-ink",
              children: [
                Math.round(P.zoom * 100),
                "%"
              ]
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => {
                var j, R;
                return B(1.2, (((j = r.current) == null ? void 0 : j.clientWidth) || 0) / 2, (((R = r.current) == null ? void 0 : R.clientHeight) || 0) / 2);
              },
              title: "Zoom in",
              "aria-label": "Zoom in",
              className: "grid h-7 w-7 place-items-center rounded-lg text-soft hover:bg-panel2 hover:text-ink",
              children: /* @__PURE__ */ a.jsx(ra, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx("span", { className: "mx-0.5 h-5 w-px bg-line" }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => Y(),
              title: "Fit everything in view (F)",
              "aria-label": "Fit to content",
              className: "grid h-7 w-7 place-items-center rounded-lg text-soft hover:bg-panel2 hover:text-ink",
              children: /* @__PURE__ */ a.jsx(Zl, { size: 13 })
            }
          )
        ] }),
        l === "pdu" && /* @__PURE__ */ a.jsxs("div", { className: "pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-accent/50 bg-panel/90 px-3 py-1.5 font-mono text-[11px] text-accent shadow", children: [
          "Simple PDU — ",
          y ? "click the destination" : "click the sender"
        ] }),
        l === "cable" && /* @__PURE__ */ a.jsxs("div", { className: "pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-accent/50 bg-panel/90 px-3 py-1.5 font-mono text-[11px] text-accent shadow", children: [
          Se[c].label,
          " — ",
          p ? "click the far end" : "click the first device"
        ] })
      ]
    }
  );
}
function bv({ device: e, selected: t, armed: n, showLabel: r, onPointerDown: s, onDoubleClick: o, onContextMenu: i }) {
  const l = Ht[e.typeId], c = $s(l == null ? void 0 : l.icon), u = _(e), d = e.runtime, p = t || n ? "rgb(var(--nr-accent))" : "rgb(var(--nr-line))", h = d.cpu > 70;
  return /* @__PURE__ */ a.jsxs(
    "g",
    {
      transform: `translate(${e.x},${e.y})`,
      onPointerDown: s,
      onDoubleClick: o,
      onContextMenu: i,
      className: "cursor-grab",
      tabIndex: 0,
      role: "button",
      "aria-label": `${e.hostname}, ${l != null && l.serverRoles ? `${l.label} running ${Pu(e)}` : l == null ? void 0 : l.label}, ${u || "no address"}`,
      children: [
        /* @__PURE__ */ a.jsx("title", { children: `${e.hostname} — ${l == null ? void 0 : l.label}
${u || "no address"}
double-click to configure` }),
        /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: -pt / 2,
            y: -qt / 2,
            width: pt,
            height: qt,
            rx: 13,
            fill: "rgb(var(--nr-panel))",
            stroke: p,
            strokeWidth: t || n ? 2.5 : 1.5
          }
        ),
        (d.compromised || d.unresponsive) && /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: -pt / 2,
            y: -qt / 2,
            width: pt,
            height: 4,
            rx: 2,
            fill: "rgb(var(--nr-down))"
          }
        ),
        /* @__PURE__ */ a.jsx("g", { transform: "translate(-9,-22)", color: "rgb(var(--nr-accent))", children: /* @__PURE__ */ a.jsx(c, { size: 18 }) }),
        r && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("text", { y: 13, textAnchor: "middle", fontSize: "11", fontWeight: "600", fill: "rgb(var(--nr-ink))", children: e.hostname }),
          /* @__PURE__ */ a.jsx("text", { y: 24, textAnchor: "middle", fontSize: "9.5", fontFamily: "ui-monospace, monospace", fill: "rgb(var(--nr-soft))", children: u || "—" }),
          (l == null ? void 0 : l.serverRoles) && /* @__PURE__ */ a.jsx("text", { y: 34, textAnchor: "middle", fontSize: "8.5", fill: "rgb(var(--nr-accent))", children: Pu(e) })
        ] }),
        Object.values(e.services).some(Boolean) && /* @__PURE__ */ a.jsx(
          "circle",
          {
            cx: pt / 2 - 9,
            cy: -qt / 2 + 10,
            r: 3.5,
            fill: d.unresponsive ? "rgb(var(--nr-down))" : h ? "rgb(var(--nr-warn))" : "rgb(var(--nr-up))"
          }
        ),
        e.capturing && /* @__PURE__ */ a.jsxs("g", { transform: `translate(${-pt / 2 + 7},${-qt / 2 + 7})`, children: [
          /* @__PURE__ */ a.jsx("circle", { r: 4.5, fill: "rgb(var(--nr-down))", opacity: 0.25 }),
          /* @__PURE__ */ a.jsx("circle", { r: 2.5, fill: "rgb(var(--nr-down))" }),
          /* @__PURE__ */ a.jsx("text", { x: 8, y: 3, fontSize: "7.5", fontFamily: "ui-monospace, monospace", fill: "rgb(var(--nr-down))", children: e.radio && e.radio.monitorMode ? "MON" : "CAP" })
        ] }),
        d.underAttack && /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: -pt / 2 - 4,
            y: -qt / 2 - 4,
            width: pt + 8,
            height: qt + 8,
            rx: 16,
            fill: "none",
            stroke: "rgb(var(--nr-down))",
            strokeWidth: "1.5",
            strokeDasharray: "5 4",
            opacity: "0.9"
          }
        ),
        d.cpu > 10 && /* @__PURE__ */ a.jsxs("g", { transform: `translate(${-pt / 2 + 8},${qt / 2 - 7})`, children: [
          /* @__PURE__ */ a.jsx("rect", { width: pt - 16, height: 3, rx: 1.5, fill: "rgb(var(--nr-line))" }),
          /* @__PURE__ */ a.jsx(
            "rect",
            {
              width: (pt - 16) * Math.min(100, d.cpu) / 100,
              height: 3,
              rx: 1.5,
              fill: d.cpu > 85 ? "rgb(var(--nr-down))" : d.cpu > 60 ? "rgb(var(--nr-warn))" : "rgb(var(--nr-up))"
            }
          )
        ] })
      ]
    }
  );
}
const Ju = {
  info: "text-[rgb(var(--nr-term-fg))]",
  success: "text-emerald-400",
  error: "text-rose-400",
  warn: "text-amber-300",
  dim: "text-slate-500"
};
function kv({ consoleId: e }) {
  const t = b((y) => y.consoles), n = b((y) => y.topology), r = b((y) => y.engine), s = b((y) => y.log), o = b((y) => y.commit), i = b((y) => y.clearConsole), l = b((y) => y.ensureConsole), c = b((y) => y.setActiveConsole), u = b((y) => y.rev), d = t.find((y) => y.id === e), p = d != null && d.deviceId ? n.devices.find((y) => y.id === d.deviceId) : null, [h, f] = C.useState(""), [g, w] = C.useState([]), [k, m] = C.useState(-1), x = C.useRef(null), v = C.useRef(null);
  if (C.useEffect(() => {
    const y = x.current;
    y && (y.scrollTop = y.scrollHeight);
  }, [d == null ? void 0 : d.lines.length, u]), !d) return null;
  const S = () => {
    const y = h;
    if (f(""), !p)
      return;
    const P = Gu(p, n);
    s(e, Gi(p, n) + (P ? "" : y), "info"), y.trim() && (P || w((A) => [...A, y]), m(-1), xf(p, y, {
      engine: r,
      topology: n,
      channel: e,
      log: (A, B = "info") => s(e, A, B),
      commit: o,
      clearConsole: () => i(e),
      // Lets a command bring another panel forward — the offensive tools
      // write their output to the Cyber Range channel.
      focusChannel: (A) => {
        l(A, A === "attack" ? "Cyber Range" : "Packet Capture"), c(A);
      }
    }));
  }, $ = (y) => {
    if (y.key === "Enter") {
      y.preventDefault(), S();
      return;
    }
    if (y.key === "ArrowUp") {
      if (y.preventDefault(), !g.length) return;
      const P = k < 0 ? g.length - 1 : Math.max(0, k - 1);
      m(P), f(g[P]);
      return;
    }
    if (y.key === "ArrowDown") {
      if (y.preventDefault(), k < 0) return;
      const P = k + 1;
      P >= g.length ? (m(-1), f("")) : (m(P), f(g[P]));
      return;
    }
    y.key === "l" && y.ctrlKey && (y.preventDefault(), i(e));
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: x,
      className: "nr-term h-full overflow-y-auto px-3 py-2 font-mono text-[12px] leading-[1.55]",
      onClick: () => {
        var y;
        return (y = v.current) == null ? void 0 : y.focus();
      },
      children: [
        d.lines.map((y, P) => /* @__PURE__ */ a.jsx("div", { className: `whitespace-pre-wrap break-words ${Ju[y.level] || Ju.info}`, children: y.text }, P)),
        p ? /* @__PURE__ */ a.jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ a.jsx("span", { className: "whitespace-pre text-emerald-400", children: Gi(p, n) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              ref: v,
              value: h,
              onChange: (y) => f(y.target.value),
              onKeyDown: $,
              type: Gu(p, n) ? "password" : "text",
              spellCheck: !1,
              autoComplete: "off",
              autoCapitalize: "off",
              "aria-label": `Command input for ${p.hostname}`,
              className: "min-w-0 flex-1 bg-transparent font-mono text-[12px] text-[rgb(var(--nr-term-fg))] outline-none"
            }
          )
        ] }) : /* @__PURE__ */ a.jsx("div", { className: "text-slate-600", children: e === "attack" ? "— cyber range output appears here —" : "— system messages appear here —" })
      ]
    }
  );
}
const Sv = ["", "wlan", "plaintext", "encrypted", "http", "icmp", "arp", "dns"];
function jv() {
  const e = b((S) => S.engine), t = b((S) => S.topology), n = b((S) => S.rev), r = b((S) => S.commit), s = b((S) => S.captureDeviceId), o = b((S) => S.setCaptureDevice), [i, l] = C.useState(""), [c, u] = C.useState(null), [d, p] = C.useState({ frame: !1, eth: !0, dot11: !0, ip: !0, tcp: !0, udp: !0, icmp: !0, arp: !0, payload: !0 }), [h, f] = C.useState(null), g = t.devices.filter((S) => S.capturing || S.promiscuous || S.radio && S.radio.monitorMode), w = C.useMemo(() => e.capture.for(s || null).filter(($) => pf($, i)), [e, s, i, n]), k = w.find((S) => S.number === c) || w[w.length - 1] || null, m = k ? tx(k.bytes) : [], x = t.devices.find((S) => S.id === s), v = () => {
    const S = new Blob([nx(w)], { type: "text/plain" }), $ = URL.createObjectURL(S), y = document.createElement("a");
    y.href = $, y.download = "netrange-capture.txt", y.click(), URL.revokeObjectURL($);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "flex h-full flex-col bg-[rgb(var(--nr-term-bg))] text-[rgb(var(--nr-term-fg))]", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-2 border-b border-white/10 px-2.5 py-1.5", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "flex items-center gap-1.5 text-[11px] text-slate-400", children: [
        /* @__PURE__ */ a.jsx(ta, { size: 12 }),
        "Interface",
        /* @__PURE__ */ a.jsxs(
          "select",
          {
            value: s || "",
            onChange: (S) => o(S.target.value || null),
            className: "rounded border border-white/15 bg-white/5 px-1.5 py-1 font-mono text-[11px] text-slate-100 outline-none",
            children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "All vantage points" }),
              g.map((S) => /* @__PURE__ */ a.jsxs("option", { value: S.id, children: [
                S.hostname,
                " ",
                S.radio && S.radio.monitorMode ? "(monitor)" : "(promisc)"
              ] }, S.id))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("span", { className: "flex min-w-[180px] flex-1 items-center gap-1.5 rounded border border-white/15 bg-white/5 px-2", children: [
        /* @__PURE__ */ a.jsx(Mh, { size: 12, className: "shrink-0 text-slate-500" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            value: i,
            onChange: (S) => l(S.target.value),
            placeholder: "display filter — e.g. http, wlan and plaintext, ip.addr == 192.168.10.50",
            "aria-label": "Display filter",
            className: "min-w-0 flex-1 bg-transparent py-1 font-mono text-[11px] text-slate-100 outline-none placeholder:text-slate-600"
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "flex gap-1", children: Sv.filter(Boolean).slice(0, 4).map((S) => /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: () => l(i === S ? "" : S),
          className: `rounded px-1.5 py-1 font-mono text-[10px] ${i === S ? "bg-emerald-500/25 text-emerald-300" : "bg-white/5 text-slate-400 hover:text-slate-200"}`,
          children: S
        },
        S
      )) }),
      /* @__PURE__ */ a.jsxs("span", { className: "font-mono text-[10.5px] text-slate-500", children: [
        w.length,
        " / ",
        e.capture.frames.length,
        " frames"
      ] }),
      /* @__PURE__ */ a.jsx("button", { onClick: v, title: "Export the filtered list as text", className: "rounded p-1 text-slate-400 hover:text-slate-100", children: /* @__PURE__ */ a.jsx(Gl, { size: 13 }) }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: () => {
            e.capture.clear(), u(null), r();
          },
          title: "Clear the capture buffer",
          className: "rounded p-1 text-slate-400 hover:text-slate-100",
          children: /* @__PURE__ */ a.jsx(_e, { size: 13 })
        }
      )
    ] }),
    w.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "flex flex-1 items-center justify-center p-6 text-center", children: /* @__PURE__ */ a.jsx("div", { className: "max-w-md text-[12px] leading-relaxed text-slate-500", children: e.capture.frames.length === 0 ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("p", { className: "mb-2 text-slate-300", children: "No frames captured yet." }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Generate traffic (ping from a host), then capture it. On switched Ethernet a bystander sees almost nothing — that is the point. Put a Threat Actor in monitor mode near an access point and run ",
        /* @__PURE__ */ a.jsx("span", { className: "text-emerald-400", children: "WiFi Snooping" }),
        " to see the difference."
      ] })
    ] }) : x ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { className: "mb-2 text-slate-300", children: [
        x.hostname,
        " witnessed nothing matching this filter."
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: x.radio && x.radio.monitorMode ? "Its radio is in monitor mode but nothing in range is transmitting." : "A switch does not flood unicast traffic to every port, so a wired bystander captures very little. Try monitor mode on a wireless segment, or poison ARP to put yourself on the path." })
    ] }) : /* @__PURE__ */ a.jsxs("p", { children: [
      "No frames match “",
      i,
      "”."
    ] }) }) }) : /* @__PURE__ */ a.jsxs("div", { className: "flex min-h-0 flex-1 flex-col", children: [
      /* @__PURE__ */ a.jsx("div", { className: "min-h-0 flex-1 overflow-auto", children: /* @__PURE__ */ a.jsxs("table", { className: "w-full border-collapse font-mono text-[11px]", children: [
        /* @__PURE__ */ a.jsx("thead", { className: "sticky top-0 bg-[rgb(var(--nr-term-bg))] text-[10px] uppercase text-slate-500", children: /* @__PURE__ */ a.jsx("tr", { children: ["No.", "Time", "Source", "Destination", "Proto", "Len", "Info"].map((S, $) => /* @__PURE__ */ a.jsx("th", { className: `border-b border-white/10 px-2 py-1 text-left ${$ === 6 ? "" : "whitespace-nowrap"}`, children: S }, S)) }) }),
        /* @__PURE__ */ a.jsx("tbody", { children: w.map((S) => {
          const $ = k && S.number === k.number, y = df[S.colorKey] || "#64748b";
          return /* @__PURE__ */ a.jsxs(
            "tr",
            {
              onClick: () => {
                u(S.number), f(null);
              },
              className: `cursor-pointer ${$ ? "bg-sky-500/25" : "hover:bg-white/5"}`,
              children: [
                /* @__PURE__ */ a.jsx("td", { className: "px-2 py-[3px] text-slate-500", children: S.number }),
                /* @__PURE__ */ a.jsx("td", { className: "px-2 py-[3px] tabular-nums text-slate-400", children: S.time.toFixed(3) }),
                /* @__PURE__ */ a.jsx("td", { className: "whitespace-nowrap px-2 py-[3px]", children: S.source }),
                /* @__PURE__ */ a.jsx("td", { className: "whitespace-nowrap px-2 py-[3px]", children: S.destination }),
                /* @__PURE__ */ a.jsx("td", { className: "px-2 py-[3px] font-bold", style: { color: y }, children: S.protocol }),
                /* @__PURE__ */ a.jsx("td", { className: "px-2 py-[3px] tabular-nums text-slate-400", children: S.length }),
                /* @__PURE__ */ a.jsx("td", { className: "px-2 py-[3px]", children: /* @__PURE__ */ a.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  S.wireless && (S.encrypted ? /* @__PURE__ */ a.jsx(pn, { size: 10, className: "shrink-0 text-amber-400" }) : /* @__PURE__ */ a.jsx(Kl, { size: 10, className: "shrink-0 text-rose-400" })),
                  /* @__PURE__ */ a.jsx("span", { className: S.encrypted ? "text-slate-500" : "", children: S.info })
                ] }) })
              ]
            },
            S.number
          );
        }) })
      ] }) }),
      k && /* @__PURE__ */ a.jsxs("div", { className: "grid min-h-0 shrink-0 grid-cols-1 gap-px border-t border-white/15 bg-white/10 md:grid-cols-2", style: { height: "46%" }, children: [
        /* @__PURE__ */ a.jsx("div", { className: "min-h-0 overflow-auto bg-[rgb(var(--nr-term-bg))] p-2 font-mono text-[11px]", children: Object.entries(k.layers).map(([S, $]) => /* @__PURE__ */ a.jsx(
          $v,
          {
            name: Nv[S] || S,
            layerKey: S,
            fields: $,
            open: d[S] !== !1,
            onToggle: () => p((y) => ({ ...y, [S]: y[S] === !1 })),
            onHover: f,
            frame: k
          },
          S
        )) }),
        /* @__PURE__ */ a.jsxs("div", { className: "min-h-0 overflow-auto bg-[rgb(var(--nr-term-bg))] p-2 font-mono text-[11px] leading-[1.45]", children: [
          m.map((S, $) => /* @__PURE__ */ a.jsxs("div", { className: "flex gap-3 whitespace-pre", children: [
            /* @__PURE__ */ a.jsx("span", { className: "text-slate-600", children: S.offset }),
            /* @__PURE__ */ a.jsx("span", { children: S.hex.map((y, P) => {
              const A = $ * 16 + P, B = h && A >= h.start && A < h.end;
              return /* @__PURE__ */ a.jsxs("span", { className: B ? "bg-sky-500/50 text-white" : "", children: [
                y,
                P === 7 ? "  " : " "
              ] }, P);
            }) }),
            /* @__PURE__ */ a.jsx("span", { className: "text-slate-500", children: S.ascii })
          ] }, S.offset)),
          k.encrypted && /* @__PURE__ */ a.jsxs("p", { className: "mt-2 max-w-sm whitespace-normal text-[10.5px] leading-snug text-amber-400/90", children: [
            "Payload bytes are ",
            k.security.toUpperCase(),
            " ciphertext. The 802.11 header stays readable — addresses, timing and frame sizes leak even on an encrypted network."
          ] })
        ] })
      ] })
    ] })
  ] });
}
const Nv = {
  frame: "Frame",
  eth: "Ethernet II",
  dot11: "IEEE 802.11 Wireless LAN",
  ip: "Internet Protocol Version 4",
  tcp: "Transmission Control Protocol",
  udp: "User Datagram Protocol",
  icmp: "Internet Control Message Protocol",
  arp: "Address Resolution Protocol",
  payload: "Application Data"
};
function Cv(e, t) {
  const n = e.layers;
  let r = 0;
  const s = n.dot11 ? n.dot11.protected ? 32 : 24 : 14;
  if (t === "dot11" || t === "eth") return { start: 0, end: s };
  if (r = s, n.ip) {
    if (t === "ip") return { start: r, end: r + 20 };
    r += 20;
  }
  if (n.tcp) {
    if (t === "tcp") return { start: r, end: r + 20 };
    r += 20;
  } else if (n.udp) {
    if (t === "udp") return { start: r, end: r + 8 };
    r += 8;
  } else if (n.icmp) {
    if (t === "icmp") return { start: r, end: r + 8 };
    r += 8;
  }
  return t === "payload" ? { start: r, end: e.bytes.length } : null;
}
function $v({ name: e, layerKey: t, fields: n, open: r, onToggle: s, onHover: o, frame: i }) {
  const l = Cv(i, t), c = r ? Ph : Eh;
  return /* @__PURE__ */ a.jsxs("div", { className: "mb-0.5", children: [
    /* @__PURE__ */ a.jsxs(
      "button",
      {
        onClick: s,
        onMouseEnter: () => l && o(l),
        onMouseLeave: () => o(null),
        className: "flex w-full items-center gap-1 rounded px-1 py-0.5 text-left text-slate-200 hover:bg-white/10",
        children: [
          /* @__PURE__ */ a.jsx(c, { size: 11, className: "shrink-0 text-slate-500" }),
          /* @__PURE__ */ a.jsx("span", { className: "font-semibold", children: e }),
          t === "payload" && n.protected && /* @__PURE__ */ a.jsx(pn, { size: 10, className: "text-amber-400" })
        ]
      }
    ),
    r && /* @__PURE__ */ a.jsxs("dl", { className: "ml-4 border-l border-white/10 pl-3", children: [
      Object.entries(n).filter(([u, d]) => u !== "text" && d !== "" && d !== void 0 && d !== null).map(([u, d]) => /* @__PURE__ */ a.jsxs("div", { className: "flex gap-2 py-[1px]", children: [
        /* @__PURE__ */ a.jsxs("dt", { className: "shrink-0 text-slate-500", children: [
          Pv(u),
          ":"
        ] }),
        /* @__PURE__ */ a.jsx("dd", { className: "min-w-0 break-all text-slate-300", children: String(d) })
      ] }, u)),
      t === "payload" && n.text && /* @__PURE__ */ a.jsx("pre", { className: "mt-1 whitespace-pre-wrap break-all rounded bg-white/5 p-1.5 text-[10.5px] text-emerald-300", children: n.text })
    ] })
  ] });
}
function Pv(e) {
  return e.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/^./, (t) => t.toUpperCase());
}
const gt = {
  source: "source",
  transit: "transit",
  destination: "destination"
};
function Ev(e, t) {
  return t === 0 ? gt.source : t === e.length - 1 ? gt.destination : gt.transit;
}
const Te = (e, t, n) => ({ n: e, name: t, detail: n });
function Av({ device: e, frame: t, role: n, peerIn: r = null, peerOut: s = null }) {
  var h, f, g, w, k;
  const o = [], i = [], l = t.layers.dot11 ? "802.11" : "Ethernet", c = t.layers.ip, u = t.layers.tcp ? "TCP" : t.layers.udp ? "UDP" : t.layers.icmp ? "ICMP" : null, d = t.layers.payload, p = t.wireless ? `radio, ${((h = ae[t.security]) == null ? void 0 : h.short) || "OPEN"}` : "copper";
  if (n !== gt.source && (o.push(Te(1, "Physical", `Signal received from ${r ? r.hostname : "the medium"} over ${p}.`)), o.push(
    Te(
      2,
      "Data Link",
      t.layers.dot11 ? `802.11 frame received. Receiver ${t.layers.dot11.receiver}, BSSID ${t.layers.dot11.bssid}.` + (t.encrypted ? " Payload is CCMP ciphertext; the header is not." : "") : `Ethernet frame received. Destination MAC ${(f = t.layers.eth) == null ? void 0 : f.destination}; it matches this interface, so the frame is accepted and the header removed.`
    )
  )), n !== gt.source && e.role !== "switch" && e.role !== "hub" && c && o.push(Te(3, "Network", `IPv4 packet for ${c.destination}, TTL ${c.ttl}.`)), n === gt.destination && u && o.push(Te(4, "Transport", ed(t, u))), n === gt.destination && d && o.push(
    Te(
      7,
      "Application",
      d.protected ? "Application data is encrypted and cannot be read without the key." : `Application data delivered: ${td(d.text || "", 90)}`
    )
  ), n === gt.source) {
    if (d && i.push(
      Te(
        7,
        "Application",
        d.protected ? "Application data handed down; it will be encrypted by the link layer." : `Application data created: ${td(d.text || "", 90)}`
      )
    ), u && i.push(Te(4, "Transport", ed(t, u))), c) {
      const m = rr(e), x = m && Jr(c.source, c.destination, m.mask);
      i.push(
        Te(
          3,
          "Network",
          `IPv4 header added: ${c.source} → ${c.destination}. ` + (x ? "Destination is on the local subnet, so it is sent directly." : `Destination is off-subnet, so it is sent to the default gateway ${e.gateway || "(unset)"}.`)
        )
      );
    }
    i.push(Te(2, "Data Link", Iv(t, l, s))), i.push(Te(1, "Physical", `Bits placed on the ${p} towards ${s ? s.hostname : "the medium"}.`));
  } else n === gt.transit && (e.role === "switch" || e.role === "l3switch" ? i.push(
    Te(
      2,
      "Data Link",
      `MAC address table consulted for ${((g = t.layers.eth) == null ? void 0 : g.destination) || ((w = t.layers.dot11) == null ? void 0 : w.receiver)}. The frame is forwarded out that single port only — which is why a bystander on another port sees nothing.`
    )
  ) : e.role === "hub" ? i.push(Te(1, "Physical", "A hub has no address table: the frame is repeated out of every other port, so every attached device receives it.")) : e.role === "ap" ? i.push(
    Te(
      2,
      "Data Link",
      t.wireless ? "Bridged from 802.11 to 802.3: the radio header is stripped and an Ethernet header is applied." : "Bridged from 802.3 to 802.11: an 802.11 header is applied" + ((k = ae[t.security]) != null && k.encrypted ? " and the payload is encrypted for the air." : " and the payload goes out in clear.")
    )
  ) : (e.role === "router" || e.role === "firewall") && (i.push(
    Te(
      3,
      "Network",
      `Routing table consulted for ${c ? c.destination : "the destination"}. TTL decremented to ${c ? Math.max(0, Number(c.ttl) - 1) : "—"}.` + (e.role === "firewall" ? " Access list evaluated before forwarding." : "")
    )
  ), i.push(Te(2, "Data Link", `New ${l} header written: this hop's source MAC and the next hop's destination MAC. The IP addresses do not change.`))), i.push(Te(1, "Physical", `Forwarded towards ${s ? s.hostname : "the next hop"}.`)));
  return { inbound: o, outbound: i, verdict: Tv(e, t, n) };
}
function ed(e, t) {
  if (t === "TCP") {
    const r = e.layers.tcp;
    return `TCP ${r.sourcePort} → ${r.destinationPort}, flags ${r.flags}, ${r.payloadBytes} bytes of data.`;
  }
  if (t === "UDP") {
    const r = e.layers.udp;
    return `UDP ${r.sourcePort} → ${r.destinationPort}, length ${r.length}.`;
  }
  const n = e.layers.icmp;
  return `ICMP ${n.type}, sequence ${n.sequence}.`;
}
function Iv(e, t, n) {
  var r, s;
  if (e.layers.dot11) {
    const o = e.layers.dot11;
    return `802.11 header added. Transmitter ${o.transmitter}, receiver ${o.receiver}, BSSID ${o.bssid}.` + (o.protected ? " Payload encrypted with CCMP — but the addresses, timing and frame size stay visible to anything in range." : " No encryption: every byte is readable by anything in range.");
  }
  return `Ethernet header added: source ${(r = e.layers.eth) == null ? void 0 : r.source}, destination ${(s = e.layers.eth) == null ? void 0 : s.destination}${n ? ` (${n.hostname})` : ""}.`;
}
function Tv(e, t, n) {
  return n === gt.destination ? "Delivered" : e.role === "firewall" ? "Inspected and forwarded" : n === gt.source ? "Sent" : "Forwarded";
}
function td(e, t) {
  const n = String(e).replace(/\r?\n/g, " ");
  return n.length > t ? `${n.slice(0, t)}…` : n;
}
function Mv(e) {
  return e.encrypted ? `${e.info} (encrypted)` : e.info;
}
const Lv = { source: "Origin", transit: "In transit", destination: "Destination" };
function Dv() {
  const e = b((p) => p.engine), t = b((p) => p.topology), n = b((p) => p.stepPdu), r = b((p) => p.flushPdu), s = b((p) => p.clearPdu);
  b((p) => p.rev);
  const [o, i] = C.useState(null), l = e.pduEvents, c = l.filter((p) => p.status === "queued").length, u = l.find((p) => p.id === o) || [...l].reverse().find((p) => p.status === "done") || l[0] || null, d = new Map(t.devices.map((p) => [p.id, p]));
  return /* @__PURE__ */ a.jsxs("div", { className: "flex h-full flex-col bg-[rgb(var(--nr-term-bg))] text-[rgb(var(--nr-term-fg))]", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-2 border-b border-white/10 px-2 py-1.5 text-[11px]", children: [
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          onClick: () => {
            const p = n();
            p && i(p.id);
          },
          disabled: c === 0,
          className: "inline-flex items-center gap-1.5 rounded-md bg-sky-600 px-2.5 py-1 font-semibold text-white disabled:opacity-40",
          children: [
            /* @__PURE__ */ a.jsx(nc, { size: 12 }),
            " Step"
          ]
        }
      ),
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          onClick: () => r(),
          disabled: c === 0,
          className: "inline-flex items-center gap-1.5 rounded-md border border-white/20 px-2.5 py-1 font-semibold disabled:opacity-40",
          children: [
            /* @__PURE__ */ a.jsx(Th, { size: 12 }),
            " Run all"
          ]
        }
      ),
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          onClick: () => {
            s(), i(null);
          },
          disabled: l.length === 0,
          className: "inline-flex items-center gap-1.5 rounded-md border border-white/20 px-2.5 py-1 font-semibold disabled:opacity-40",
          children: [
            /* @__PURE__ */ a.jsx(_e, { size: 12 }),
            " Clear"
          ]
        }
      ),
      /* @__PURE__ */ a.jsxs("span", { className: "ml-auto font-mono text-slate-400", children: [
        c,
        " queued · ",
        l.length - c,
        " delivered"
      ] })
    ] }),
    l.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "flex flex-1 items-center justify-center p-6 text-center", children: /* @__PURE__ */ a.jsxs("p", { className: "max-w-sm text-[12px] leading-relaxed text-slate-400", children: [
      "No PDUs queued. Pick the ",
      /* @__PURE__ */ a.jsx("strong", { children: "envelope" }),
      " tool in the toolbar and click a sender then a receiver, or run ",
      /* @__PURE__ */ a.jsx("code", { className: "text-emerald-400", children: "ping" }),
      " from any console. Each hop will queue here for you to step through."
    ] }) }) : /* @__PURE__ */ a.jsxs("div", { className: "grid min-h-0 flex-1 grid-cols-1 gap-px bg-white/10 md:grid-cols-[1.1fr_1fr]", children: [
      /* @__PURE__ */ a.jsx("div", { className: "min-h-0 overflow-auto bg-[rgb(var(--nr-term-bg))]", children: /* @__PURE__ */ a.jsxs("table", { className: "w-full border-collapse font-mono text-[11px]", children: [
        /* @__PURE__ */ a.jsx("thead", { className: "sticky top-0 bg-[rgb(var(--nr-term-bg))] text-[10px] uppercase text-slate-500", children: /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("th", { className: "px-2 py-1 text-left", children: "#" }),
          /* @__PURE__ */ a.jsx("th", { className: "px-2 py-1 text-left", children: "Last device" }),
          /* @__PURE__ */ a.jsx("th", { className: "px-2 py-1 text-left", children: "At device" }),
          /* @__PURE__ */ a.jsx("th", { className: "px-2 py-1 text-left", children: "Type" }),
          /* @__PURE__ */ a.jsx("th", { className: "px-2 py-1 text-left", children: "Info" })
        ] }) }),
        /* @__PURE__ */ a.jsx("tbody", { children: l.map((p) => {
          const h = u && p.id === u.id, f = df[p.hop.frame.colorKey] || "#64748b";
          return /* @__PURE__ */ a.jsxs(
            "tr",
            {
              onClick: () => i(p.id),
              className: `cursor-pointer border-b border-white/5 ${h ? "bg-sky-500/25" : p.status === "queued" ? "opacity-55 hover:bg-white/5" : "hover:bg-white/5"}`,
              children: [
                /* @__PURE__ */ a.jsx("td", { className: "px-2 py-[3px] text-slate-500", children: p.status === "queued" ? "·" : p.id }),
                /* @__PURE__ */ a.jsx("td", { className: "whitespace-nowrap px-2 py-[3px]", children: p.hop.fromName }),
                /* @__PURE__ */ a.jsx("td", { className: "whitespace-nowrap px-2 py-[3px] font-semibold", children: p.hop.toName }),
                /* @__PURE__ */ a.jsx("td", { className: "px-2 py-[3px]", style: { color: f }, children: p.hop.frame.protocol }),
                /* @__PURE__ */ a.jsx("td", { className: "px-2 py-[3px]", children: /* @__PURE__ */ a.jsxs("span", { className: "flex items-center gap-1 text-slate-300", children: [
                  p.hop.frame.encrypted && /* @__PURE__ */ a.jsx(pn, { size: 9, className: "shrink-0 text-amber-400" }),
                  /* @__PURE__ */ a.jsx("span", { className: "truncate", children: Mv(p.hop.frame) })
                ] }) })
              ]
            },
            p.id
          );
        }) })
      ] }) }),
      /* @__PURE__ */ a.jsx("div", { className: "min-h-0 overflow-auto bg-[rgb(var(--nr-term-bg))] p-2.5", children: u ? /* @__PURE__ */ a.jsx(Rv, { event: u, byId: d }) : null })
    ] })
  ] });
}
function Rv({ event: e, byId: t }) {
  const { hop: n } = e, r = t.get(n.toId), s = t.get(n.fromId), o = n.index + 2, i = n.path && n.path[o] ? t.get(n.path[o]) : null;
  if (!r) return null;
  const l = Ev(n.path || [n.fromId, n.toId], n.index + 1), { inbound: c, outbound: u, verdict: d } = Av({ device: r, frame: n.frame, role: l, peerIn: s, peerOut: i });
  return /* @__PURE__ */ a.jsxs("div", { className: "font-mono text-[11px]", children: [
    /* @__PURE__ */ a.jsxs("header", { className: "mb-2 border-b border-white/10 pb-2", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ a.jsx("span", { className: "font-bold text-slate-100", children: r.hostname }),
        /* @__PURE__ */ a.jsx("span", { className: "rounded bg-white/10 px-1.5 py-0.5 text-[9.5px] uppercase tracking-wide text-slate-300", children: Lv[l] }),
        /* @__PURE__ */ a.jsxs("span", { className: "ml-auto text-slate-500", children: [
          "hop ",
          n.index + 1,
          " of ",
          n.total
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("p", { className: "mt-1 text-[10.5px] leading-snug text-slate-400", children: [
        n.fromName,
        " → ",
        n.toName,
        " · ",
        n.frame.length,
        " bytes ·",
        " ",
        n.frame.wireless ? "802.11 radio" : "Ethernet",
        " · ",
        d
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(nd, { title: "In layers", icon: /* @__PURE__ */ a.jsx(Sh, { size: 11 }), layers: c, empty: "This device originated the PDU, so nothing arrived." }),
    /* @__PURE__ */ a.jsx(nd, { title: "Out layers", icon: /* @__PURE__ */ a.jsx(jh, { size: 11 }), layers: u, empty: "The PDU was consumed here; nothing was forwarded." })
  ] });
}
function nd({ title: e, icon: t, layers: n, empty: r }) {
  return /* @__PURE__ */ a.jsxs("section", { className: "mb-3", children: [
    /* @__PURE__ */ a.jsxs("h4", { className: "mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500", children: [
      t,
      " ",
      e
    ] }),
    n.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "pl-1 text-[10.5px] italic text-slate-600", children: r }) : /* @__PURE__ */ a.jsx("ol", { className: "space-y-1", children: n.map((s) => /* @__PURE__ */ a.jsxs("li", { className: "flex gap-2 rounded border border-white/10 bg-white/[0.03] p-1.5", children: [
      /* @__PURE__ */ a.jsxs("span", { className: "shrink-0 rounded bg-sky-500/20 px-1.5 py-0.5 text-[9.5px] font-bold text-sky-300", children: [
        "L",
        s.n
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ a.jsx("div", { className: "font-semibold text-slate-200", children: s.name }),
        /* @__PURE__ */ a.jsx("div", { className: "whitespace-normal break-words leading-snug text-slate-400", children: s.detail })
      ] })
    ] }, `${e}-${s.n}`)) })
  ] });
}
const zv = "203.0.113.53", ua = {
  "search.lab": {
    host: "search.lab",
    ip: "198.51.100.10",
    title: "LabSearch",
    kind: "search",
    blurb: "A pretend search engine for the teaching network."
  },
  "news.lab": {
    host: "news.lab",
    ip: "198.51.100.20",
    title: "Campus Wire",
    kind: "news",
    blurb: "A fictional campus news page.",
    articles: [
      { head: "Network upgrade reaches the science block", body: "Fibre uplinks replace the last of the copper runs this term." },
      { head: "Help desk reports a rise in phishing", body: "Staff are reminded that the service desk never asks for a password." },
      { head: "Wi-Fi coverage extended to the annexe", body: "Two further access points bring the annexe onto the campus SSID." }
    ]
  },
  "shop.lab": {
    host: "shop.lab",
    ip: "198.51.100.30",
    title: "Lab Supplies Co.",
    kind: "shop",
    blurb: "A fictional shop, used for the HTTPS and cart exercises.",
    items: [
      { name: "Cat6 patch lead, 2 m", price: "£3.40" },
      { name: "SFP module, 1000BASE-LX", price: "£28.00" },
      { name: "Console cable, USB to RJ45", price: "£11.95" },
      { name: "Rack shelf, 1U", price: "£17.50" }
    ]
  },
  "mail.lab": {
    host: "mail.lab",
    ip: "198.51.100.40",
    title: "Lab Webmail",
    kind: "login",
    blurb: "A fictional webmail sign-in, used to show what a cleartext login leaks.",
    warnsHttp: !0
  },
  "bank.lab": {
    host: "bank.lab",
    ip: "198.51.100.50",
    title: "Example Bank (teaching mock)",
    kind: "login",
    blurb: "An obviously fake bank sign-in for the phishing and sniffing lessons.",
    warnsHttp: !0
  },
  "time.lab": {
    host: "time.lab",
    ip: "203.0.113.123",
    title: "Lab Time Service",
    kind: "service",
    blurb: "A pretend NTP/status endpoint, handy for testing reachability."
  }
}, rd = Object.fromEntries(
  Object.values(ua).map((e) => [e.host, e.ip])
), Ov = (e) => ua[String(e).toLowerCase()] || null, _v = (e) => Object.values(ua).find((t) => t.ip === e) || null;
function Fv(e) {
  return e.devices.filter((t) => t.role === "cloud");
}
function bf(e, t) {
  const n = (i, l) => ({ ok: !1, code: i, reason: l }), r = Fv(e)[0];
  if (!r) return n("no-cloud", "no ISP cloud on the topology — place one and cable it to your edge router");
  const s = G(e, t.id, r.id);
  return s ? _(t) ? t.gateway ? e.devices.find(
    (i) => (i.role === "router" || i.role === "l3switch" || i.role === "firewall") && G(e, t.id, i.id) && G(e, i.id, r.id)
  ) ? r.cloud && r.cloud.down ? n("isp-down", "the ISP link is down") : { ok: !0, code: "ok", reason: "reachable", cloud: r, path: s } : n("no-edge-router", "no router joins this subnet to the ISP") : n("no-gateway", "no default gateway set, so nothing can leave the local subnet") : n("no-address", "this host has no IP address") : n("no-path", "no cable path to the ISP — check the link to your edge router");
}
function Hv(e, t, n) {
  const r = String(n || "").toLowerCase(), s = e.devices.find(
    (o) => o.services.dns && o.dnsZone && o.dnsZone[r] && G(e, t.id, o.id)
  );
  if (s) return { ip: s.dnsZone[r], via: s.hostname, scope: "local" };
  if (rd[r]) {
    const o = bf(e, t);
    return o.ok ? { ip: rd[r], via: "public resolver " + zv, scope: "public" } : { ip: null, error: o.reason, scope: "public" };
  }
  return { ip: null, error: "NXDOMAIN — no such name", scope: "unknown" };
}
function Uv(e, t, n) {
  const r = String(n || "").toLowerCase().replace(/^https?:\/\//, "").split("/")[0], s = Ov(r) || _v(r);
  if (!s)
    return { ok: !1, status: 404, reason: Hv(e, t, r).error || "host not found" };
  const o = bf(e, t);
  return o.ok ? { ok: !0, status: 200, site: s, path: o.path, cloud: o.cloud } : { ok: !1, status: 0, reason: o.reason, code: o.code };
}
function Bv() {
  return Object.values(ua).map((e) => ({
    host: e.host,
    ip: e.ip,
    title: e.title,
    blurb: e.blurb
  }));
}
function Wv() {
  const e = b((g) => g.topology), t = b((g) => g.engine);
  b((g) => g.rev);
  const n = e.devices.filter(
    (g) => (g.role === "host" || g.role === "attacker") && g.interfaces.some((w) => w.ip)
  ), [r, s] = C.useState(""), [o, i] = C.useState("search.lab"), [l, c] = C.useState(null), [u, d] = C.useState(!1), p = e.devices.find((g) => g.id === r) || n[0], h = (() => {
    var k;
    if (!p) return null;
    const g = vt(e).get(p.id);
    if (!g) return null;
    const w = e.devices.find((m) => m.id === g.apId);
    return (k = w == null ? void 0 : w.ap) != null && k.portal ? hf(e, w, p) ? null : w : null;
  })(), f = (g = o) => {
    if (i(g), !p) {
      c({ ok: !1, reason: "no addressed host to browse from", status: 0 });
      return;
    }
    const w = Uv(e, p, g);
    c(w), w.ok && w.path && (t.emit(w.path, "dns", { name: g }), t.schedule(300, () => {
      t.emit(w.path, u ? "tcp" : "http", {
        port: u ? 443 : 80,
        body: `GET / HTTP/1.1\r
Host: ${w.site.host}`
      });
    }));
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "flex h-full flex-col bg-[rgb(var(--nr-term-bg))] text-[rgb(var(--nr-term-fg))]", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-2 border-b border-white/10 px-2 py-1.5", children: [
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          value: (p == null ? void 0 : p.id) || "",
          onChange: (g) => s(g.target.value),
          className: "rounded-md border border-white/15 bg-white/5 px-1.5 py-1 font-mono text-[11px]",
          "aria-label": "Browse from",
          children: [
            n.length === 0 && /* @__PURE__ */ a.jsx("option", { value: "", children: "no addressed host" }),
            n.map((g) => /* @__PURE__ */ a.jsxs("option", { value: g.id, children: [
              g.hostname,
              " — ",
              _(g)
            ] }, g.id))
          ]
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: () => d((g) => !g),
          title: u ? "HTTPS — payload encrypted in the capture" : "HTTP — payload readable in the capture",
          className: `grid h-6 w-6 place-items-center rounded ${u ? "text-emerald-400" : "text-amber-400"}`,
          children: u ? /* @__PURE__ */ a.jsx(pn, { size: 12 }) : /* @__PURE__ */ a.jsx(Kl, { size: 12 })
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "flex min-w-[200px] flex-1 items-center gap-1 rounded-md border border-white/15 bg-white/5 px-2", children: [
        /* @__PURE__ */ a.jsx("span", { className: "font-mono text-[10.5px] text-slate-500", children: u ? "https://" : "http://" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            value: o,
            onChange: (g) => i(g.target.value),
            onKeyDown: (g) => {
              g.key === "Enter" && f();
            },
            spellCheck: !1,
            "aria-label": "Address",
            className: "min-w-0 flex-1 bg-transparent py-1 font-mono text-[11.5px] outline-none"
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          onClick: () => f(),
          className: "inline-flex items-center gap-1.5 rounded-md bg-sky-600 px-2.5 py-1 text-[11px] font-semibold text-white",
          children: [
            /* @__PURE__ */ a.jsx(Jl, { size: 11 }),
            " Go"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "min-h-0 flex-1 overflow-auto", children: h ? /* @__PURE__ */ a.jsx(Kv, { ap: h, station: p, onDone: () => f(o) }) : l ? l.ok ? /* @__PURE__ */ a.jsx(Gv, { site: l.site, secure: u }) : /* @__PURE__ */ a.jsx(qv, { result: l, url: o }) : /* @__PURE__ */ a.jsx(Vv, { onPick: f }) })
  ] });
}
function da() {
  return /* @__PURE__ */ a.jsx("div", { className: "mb-3 rounded-md border border-amber-500/40 bg-amber-500/10 px-2.5 py-1.5 text-[10.5px] leading-snug text-amber-300", children: "Simulated page — generated inside this tab by NetRange Lab. No request was made and this is not a real website." });
}
function Vv({ onPick: e }) {
  return /* @__PURE__ */ a.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ a.jsx(da, {}),
    /* @__PURE__ */ a.jsx("h2", { className: "mb-1 text-[15px] font-bold text-slate-100", children: "The simulated internet" }),
    /* @__PURE__ */ a.jsx("p", { className: "mb-3 text-[12px] leading-snug text-slate-400", children: "These names resolve only once a host has an address, a default gateway, and a router with a path to an ISP cloud. Place one from the palette and cable it to your edge router." }),
    /* @__PURE__ */ a.jsx("ul", { className: "space-y-1.5", children: Bv().map((t) => /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsxs(
      "button",
      {
        onClick: () => e(t.host),
        className: "w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-left hover:border-sky-500/50",
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-baseline gap-2", children: [
            /* @__PURE__ */ a.jsx("span", { className: "font-semibold text-slate-200", children: t.title }),
            /* @__PURE__ */ a.jsxs("span", { className: "font-mono text-[10.5px] text-slate-500", children: [
              t.host,
              " · ",
              t.ip
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("div", { className: "text-[11px] text-slate-400", children: t.blurb })
        ]
      }
    ) }, t.host)) })
  ] });
}
function qv({ result: e, url: t }) {
  const n = {
    "no-cloud": "Drag an ISP / Internet node onto the canvas and cable it to your edge router.",
    "no-path": "Follow the cable from this host towards the ISP — one of the links is missing or down.",
    "no-address": "Give this host an IP address, or request one with DHCP.",
    "no-gateway": "Set the default gateway to your router’s address on this subnet.",
    "no-edge-router": "Cable a router between this subnet and the ISP cloud.",
    "isp-down": "The provider link is down — bring it back up from the ISP node."
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ a.jsx(da, {}),
    /* @__PURE__ */ a.jsx("h2", { className: "mb-1 text-[15px] font-bold text-rose-300", children: "This page did not load" }),
    /* @__PURE__ */ a.jsx("p", { className: "mb-2 font-mono text-[11.5px] text-slate-400", children: t }),
    /* @__PURE__ */ a.jsx("p", { className: "mb-3 text-[12.5px] text-slate-300", children: e.reason }),
    n[e.code] && /* @__PURE__ */ a.jsx("p", { className: "rounded-lg border border-sky-500/30 bg-sky-500/10 px-3 py-2 text-[12px] leading-snug text-sky-200", children: n[e.code] })
  ] });
}
function Gv({ site: e, secure: t }) {
  return /* @__PURE__ */ a.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ a.jsx(da, {}),
    /* @__PURE__ */ a.jsxs("header", { className: "mb-3 flex items-baseline justify-between border-b border-white/10 pb-2", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "text-[16px] font-bold text-slate-100", children: e.title }),
      /* @__PURE__ */ a.jsxs("span", { className: "font-mono text-[10.5px] text-slate-500", children: [
        e.host,
        " · ",
        e.ip,
        " · ",
        t ? "TLS" : "cleartext"
      ] })
    ] }),
    e.kind === "search" && /* @__PURE__ */ a.jsxs("div", { children: [
      /* @__PURE__ */ a.jsx("div", { className: "mb-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[12px] text-slate-500", children: "Search the teaching network…" }),
      /* @__PURE__ */ a.jsx("p", { className: "text-[12px] text-slate-400", children: "A placeholder search page. Load it over HTTP and then over HTTPS, and compare what the capture pane can read in each case." })
    ] }),
    e.kind === "news" && /* @__PURE__ */ a.jsx("ul", { className: "space-y-3", children: e.articles.map((n) => /* @__PURE__ */ a.jsxs("li", { children: [
      /* @__PURE__ */ a.jsx("h3", { className: "text-[13px] font-semibold text-slate-200", children: n.head }),
      /* @__PURE__ */ a.jsx("p", { className: "text-[12px] leading-snug text-slate-400", children: n.body })
    ] }, n.head)) }),
    e.kind === "shop" && /* @__PURE__ */ a.jsx("table", { className: "w-full border-collapse text-[12px]", children: /* @__PURE__ */ a.jsx("tbody", { children: e.items.map((n) => /* @__PURE__ */ a.jsxs("tr", { className: "border-b border-white/10", children: [
      /* @__PURE__ */ a.jsx("td", { className: "py-1.5 text-slate-300", children: n.name }),
      /* @__PURE__ */ a.jsx("td", { className: "py-1.5 text-right font-mono text-slate-400", children: n.price })
    ] }, n.name)) }) }),
    e.kind === "login" && /* @__PURE__ */ a.jsxs("div", { className: "max-w-xs", children: [
      /* @__PURE__ */ a.jsx("p", { className: "mb-2 text-[12px] text-slate-400", children: e.blurb }),
      /* @__PURE__ */ a.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ a.jsx("div", { className: "rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5 text-[12px] text-slate-500", children: "username" }),
        /* @__PURE__ */ a.jsx("div", { className: "rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5 text-[12px] text-slate-500", children: "••••••••" })
      ] }),
      !t && /* @__PURE__ */ a.jsx("p", { className: "mt-2.5 rounded-md border border-rose-500/40 bg-rose-500/10 px-2.5 py-1.5 text-[11px] leading-snug text-rose-300", children: "Loaded over HTTP. Anything typed here would cross the network in cleartext — switch the padlock on and compare the capture." })
    ] }),
    e.kind === "service" && /* @__PURE__ */ a.jsx("pre", { className: "whitespace-pre-wrap rounded-lg border border-white/10 bg-white/[0.03] p-3 font-mono text-[11.5px] text-emerald-300", children: '{ "status": "ok", "stratum": 2, "offset_ms": 1.8 }' })
  ] });
}
function Kv({ ap: e, station: t, onDone: n }) {
  const r = b((h) => h.commit), s = b((h) => h.topology), [o, i] = C.useState(""), [l, c] = C.useState(""), [u, d] = C.useState(""), p = (h) => {
    var g;
    (g = h == null ? void 0 : h.preventDefault) == null || g.call(h);
    const f = gx(s, e, t, o, l);
    r(), f.ok ? (d(""), n == null || n()) : d(f.reason || "Those details were not accepted.");
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ a.jsx(da, {}),
    /* @__PURE__ */ a.jsxs("div", { className: "mx-auto max-w-sm rounded-xl border border-white/15 bg-white/5 p-4", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "text-[15px] font-bold", children: e.ap.portalName || e.ap.ssid }),
      /* @__PURE__ */ a.jsx("p", { className: "mt-1 text-[12px] leading-snug text-slate-400", children: "You are connected to this network but not yet signed in. Nothing beyond this page will load until you are." }),
      /* @__PURE__ */ a.jsxs("form", { onSubmit: p, className: "mt-3 space-y-2", children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            className: "w-full rounded-md border border-white/15 bg-white/5 px-2 py-1.5 font-mono text-[12px]",
            placeholder: "username",
            "aria-label": "Portal username",
            value: o,
            onChange: (h) => {
              i(h.target.value), d("");
            }
          }
        ),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "password",
            className: "w-full rounded-md border border-white/15 bg-white/5 px-2 py-1.5 font-mono text-[12px]",
            placeholder: "password",
            "aria-label": "Portal password",
            value: l,
            onChange: (h) => {
              c(h.target.value), d("");
            }
          }
        ),
        /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "submit",
            className: "w-full rounded-md bg-sky-500/80 px-2 py-1.5 text-[12px] font-semibold text-white hover:bg-sky-500",
            children: "Sign in"
          }
        )
      ] }),
      u && /* @__PURE__ */ a.jsx("p", { className: "mt-2 text-[11.5px] text-rose-400", children: u }),
      /* @__PURE__ */ a.jsx("p", { className: "mt-3 border-t border-white/10 pt-2 text-[10.5px] leading-snug text-slate-500", children: "Accounts come from the RADIUS server this access point is pointed at. Associating with a hotspot and being allowed onto it are two different things — this page is the gap." })
    ] })
  ] });
}
const qa = 44, Yv = 520;
function Zv({ height: e, onResize: t }) {
  const n = b((d) => d.consoles), r = b((d) => d.activeConsoleId), s = b((d) => d.setActiveConsole), o = b((d) => d.closeConsole), i = b((d) => d.clearConsole), l = C.useRef(null), c = C.useCallback(
    (d) => {
      d.preventDefault();
      const p = d.clientY, h = e, f = (w) => {
        const k = Math.min(Yv, Math.max(qa, h - (w.clientY - p)));
        t(k);
      }, g = () => {
        window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", g);
      };
      window.addEventListener("pointermove", f), window.addEventListener("pointerup", g);
    },
    [e, t]
  ), u = e <= qa + 4;
  return /* @__PURE__ */ a.jsxs(
    "section",
    {
      className: "flex shrink-0 flex-col border-t border-line",
      style: { height: e },
      "aria-label": "Device consoles",
      children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            ref: l,
            onPointerDown: c,
            className: "h-1.5 cursor-ns-resize bg-line/60 hover:bg-accent/60",
            role: "separator",
            "aria-orientation": "horizontal",
            title: "Drag to resize"
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-1 overflow-x-auto bg-black/25 px-2 pt-1.5", children: [
          n.map((d) => {
            const p = d.id === r;
            return /* @__PURE__ */ a.jsxs(
              "button",
              {
                onClick: () => s(d.id),
                className: `flex shrink-0 items-center gap-2 rounded-t-lg px-3 py-1.5 font-mono text-[11.5px] font-semibold ${p ? "nr-term text-emerald-400" : "text-slate-400 hover:text-slate-200"}`,
                children: [
                  d.title,
                  d.deviceId && /* @__PURE__ */ a.jsx(
                    qh,
                    {
                      size: 12,
                      className: "opacity-50 hover:opacity-100",
                      onClick: (h) => {
                        h.stopPropagation(), o(d.id);
                      }
                    }
                  )
                ]
              },
              d.id
            );
          }),
          /* @__PURE__ */ a.jsx("div", { className: "flex-1" }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => i(r),
              title: "Clear this console (Ctrl+L)",
              className: "shrink-0 rounded p-1 text-slate-400 hover:text-slate-100",
              children: /* @__PURE__ */ a.jsx(h1, { size: 13 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => t(u ? 240 : qa),
              title: u ? "Expand" : "Collapse",
              className: "shrink-0 rounded p-1 text-slate-400 hover:text-slate-100",
              children: u ? /* @__PURE__ */ a.jsx(c1, { size: 13 }) : /* @__PURE__ */ a.jsx(l1, { size: 13 })
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "min-h-0 flex-1", children: !u && (r === "capture" ? /* @__PURE__ */ a.jsx(jv, {}) : r === "simulation" ? /* @__PURE__ */ a.jsx(Dv, {}) : r === "browser" ? /* @__PURE__ */ a.jsx(Wv, {}) : /* @__PURE__ */ a.jsx(kv, { consoleId: r })) })
      ]
    }
  );
}
function Qv({ onClose: e }) {
  const t = b((u) => u.labId), n = b((u) => u.setLab), r = b((u) => u.grade), s = b((u) => u.gradeResult), o = b((u) => u.graded);
  b((u) => u.rev);
  const i = sr(t), [l, c] = C.useState("objectives");
  return /* @__PURE__ */ a.jsxs("aside", { className: "flex w-[286px] shrink-0 flex-col overflow-hidden border-l border-line bg-panel", children: [
    /* @__PURE__ */ a.jsxs("header", { className: "border-b border-line px-3.5 py-3", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "mb-1 flex items-start gap-2", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ a.jsx("h2", { className: "text-[14px] font-bold leading-tight", children: i.title }),
          /* @__PURE__ */ a.jsx("p", { className: "text-[11px] text-soft", children: i.subtitle })
        ] }),
        /* @__PURE__ */ a.jsx("button", { onClick: e, "aria-label": "Hide lab guide", className: "text-soft hover:text-ink", children: /* @__PURE__ */ a.jsx(Hh, { size: 16 }) })
      ] }),
      Do.length > 1 && /* @__PURE__ */ a.jsx(
        "select",
        {
          className: "mt-2 w-full rounded-md border border-line bg-panel2 px-2 py-1.5 text-[12px]",
          value: t,
          onChange: (u) => n(u.target.value),
          children: Do.map((u) => /* @__PURE__ */ a.jsx("option", { value: u.id, children: u.title }, u.id))
        }
      ),
      /* @__PURE__ */ a.jsx("nav", { className: "mt-2.5 flex gap-1", children: [
        ["objectives", "Objectives"],
        ["brief", "Brief"],
        ["cheatsheet", "Commands"]
      ].map(([u, d]) => /* @__PURE__ */ a.jsx(O, { size: "sm", variant: l === u ? "active" : "outline", onClick: () => c(u), children: d }, u)) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "min-h-0 flex-1 overflow-y-auto px-3.5 py-3", children: [
      l === "objectives" && /* @__PURE__ */ a.jsx(Xv, { lab: i, result: s, graded: o }),
      l === "brief" && /* @__PURE__ */ a.jsx(Jv, { lab: i }),
      l === "cheatsheet" && /* @__PURE__ */ a.jsx(ew, { lab: i })
    ] }),
    /* @__PURE__ */ a.jsxs("footer", { className: "border-t border-line p-3", children: [
      s && /* @__PURE__ */ a.jsxs("div", { className: "mb-2.5 flex items-baseline justify-between", children: [
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsxs("span", { className: "font-mono text-[26px] font-bold tabular-nums", children: [
            s.percent,
            "%"
          ] }),
          /* @__PURE__ */ a.jsxs("span", { className: "ml-2 text-[12px] text-soft", children: [
            s.earned,
            "/",
            s.total,
            " pts · ",
            ff(s.percent)
          ] })
        ] }),
        s.complete && /* @__PURE__ */ a.jsx(Z, { tone: "up", children: "COMPLETE" })
      ] }),
      /* @__PURE__ */ a.jsxs(O, { variant: "primary", size: "lg", onClick: () => r(), children: [
        /* @__PURE__ */ a.jsx(Pr, { size: 15 }),
        " Check Solution"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "mt-2 text-[10.5px] leading-snug text-soft", children: "Grading inspects the topology state, so GUI and CLI configuration both count." })
    ] })
  ] });
}
function Xv({ lab: e, result: t, graded: n }) {
  const r = t ? $x(t) : [{ section: "Tasks", objectives: e.objectives.map((s) => ({ ...s, pass: !1 })) }];
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    r.map(({ section: s, objectives: o }) => /* @__PURE__ */ a.jsxs("section", { className: "mb-4", children: [
      /* @__PURE__ */ a.jsx(V, { children: s }),
      o.map((i) => /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: `mb-1.5 flex gap-2.5 rounded-lg border p-2.5 text-[12.5px] leading-snug ${n ? i.pass ? "border-up/40 bg-up/10" : "border-down/40 bg-down/10" : "border-line bg-panel2"}`,
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "mt-0.5 shrink-0", children: n ? i.pass ? /* @__PURE__ */ a.jsx(Pr, { size: 15, className: "text-up" }) : /* @__PURE__ */ a.jsx(_n, { size: 15, className: "text-down" }) : /* @__PURE__ */ a.jsx(Ah, { size: 15, className: "text-soft" }) }),
            /* @__PURE__ */ a.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ a.jsx("div", { children: i.title }),
              /* @__PURE__ */ a.jsxs("div", { className: "mt-0.5 font-mono text-[10px] text-soft", children: [
                i.points,
                " pt",
                i.points === 1 ? "" : "s"
              ] }),
              n && !i.pass && i.hint && /* @__PURE__ */ a.jsxs("div", { className: "mt-1 text-[11px] text-soft", children: [
                /* @__PURE__ */ a.jsx(na, { size: 11, className: "mr-1 inline" }),
                i.hint
              ] }),
              i.detail && /* @__PURE__ */ a.jsx("div", { className: "mt-1 font-mono text-[10px] text-warn", children: i.detail })
            ] })
          ]
        },
        i.id
      ))
    ] }, s)),
    !n && /* @__PURE__ */ a.jsxs("p", { className: "text-[11.5px] leading-snug text-soft", children: [
      "Press ",
      /* @__PURE__ */ a.jsx("strong", { children: "Check Solution" }),
      " at any time. Nothing is submitted anywhere — grading runs in this tab."
    ] })
  ] });
}
function Jv({ lab: e }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(V, { children: "Scenario" }),
    e.brief.map((t, n) => /* @__PURE__ */ a.jsx("p", { className: "mb-2.5 text-[12.5px] leading-relaxed text-soft", children: t }, n)),
    /* @__PURE__ */ a.jsx(V, { className: "mt-4", children: "Walkthrough" }),
    /* @__PURE__ */ a.jsx("ol", { className: "space-y-2", children: e.steps.map((t, n) => /* @__PURE__ */ a.jsxs("li", { className: "flex gap-2.5 text-[12.5px] leading-snug", children: [
      /* @__PURE__ */ a.jsx("span", { className: "grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 font-mono text-[10px] font-bold text-accent", children: n + 1 }),
      /* @__PURE__ */ a.jsx("span", { className: "text-soft", children: t })
    ] }, n)) }),
    /* @__PURE__ */ a.jsxs("p", { className: "mt-4 font-mono text-[10.5px] leading-snug text-soft", children: [
      "Estimated time: ",
      e.estimatedMinutes,
      " minutes"
    ] })
  ] });
}
function ew({ lab: e }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Object.entries(e.cheatsheet).map(([t, n]) => /* @__PURE__ */ a.jsxs("section", { className: "mb-4", children: [
      /* @__PURE__ */ a.jsx(V, { children: t }),
      /* @__PURE__ */ a.jsx("dl", { className: "space-y-1.5", children: n.map(([r, s]) => /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("dt", { className: "break-all rounded bg-panel2 px-1.5 py-0.5 font-mono text-[11px] text-accent", children: r }),
        /* @__PURE__ */ a.jsx("dd", { className: "mt-0.5 text-[11px] leading-snug text-soft", children: s })
      ] }, r)) })
    ] }, t)),
    /* @__PURE__ */ a.jsxs("p", { className: "text-[11px] leading-snug text-soft", children: [
      "IOS abbreviations work: ",
      /* @__PURE__ */ a.jsx("span", { className: "font-mono", children: "conf t" }),
      ",",
      " ",
      /* @__PURE__ */ a.jsx("span", { className: "font-mono", children: "int gi0/1" }),
      ",",
      " ",
      /* @__PURE__ */ a.jsx("span", { className: "font-mono", children: "sh ip int br" }),
      ". Press ",
      /* @__PURE__ */ a.jsx("span", { className: "font-mono", children: "?" }),
      " in any console for its command list."
    ] })
  ] });
}
function tw({ device: e, edit: t }) {
  const n = b((o) => o.topology), r = b((o) => o.engine);
  b((o) => o.rev);
  const s = !e.services.dns && !e.services.dhcp && !e.services.ad && !e.services.radius;
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    s && /* @__PURE__ */ a.jsxs("p", { className: "mb-3 rounded-xl border border-line bg-panel2 p-3 text-[12px] leading-relaxed text-soft", children: [
      "This server has no roles configured yet. Switch on DNS, DHCP, the directory or RADIUS under",
      " ",
      /* @__PURE__ */ a.jsx("strong", { className: "text-ink", children: "Services" }),
      " and the tools for managing each one appear here."
    ] }),
    e.services.dns && /* @__PURE__ */ a.jsx(nw, { device: e, edit: t }),
    e.services.dhcp && /* @__PURE__ */ a.jsx(rw, { device: e, edit: t, topology: n, engine: r }),
    e.services.ad && /* @__PURE__ */ a.jsx(sw, { device: e, edit: t }),
    e.services.radius && /* @__PURE__ */ a.jsx(ow, { device: e, edit: t, topology: n }),
    /* @__PURE__ */ a.jsx(aw, { device: e, edit: t })
  ] });
}
function nw({ device: e, edit: t }) {
  const [n, r] = C.useState(""), [s, o] = C.useState(""), [i, l] = C.useState(""), c = ox(e), u = () => {
    let d;
    if (t((p) => {
      d = rx(p, n, s);
    }), !(d != null && d.ok)) return l((d == null ? void 0 : d.reason) || "Could not add that record.");
    r(""), o(""), l("");
  };
  return /* @__PURE__ */ a.jsxs("section", { className: "mb-4", children: [
    /* @__PURE__ */ a.jsxs(V, { children: [
      /* @__PURE__ */ a.jsx(Nh, { size: 13, className: "mr-1 inline" }),
      " DNS zone"
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "mb-2 text-[11.5px] leading-snug text-soft", children: "Names this server answers for. Anything not listed here is passed to the wider lab internet, so a record added here overrides the public answer — which is how a split-horizon zone behaves." }),
    c.length > 0 && /* @__PURE__ */ a.jsxs("table", { className: "mb-2 w-full text-left text-[12px]", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { className: "text-[10.5px] uppercase tracking-wider text-soft", children: [
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5", children: "Name" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5", children: "Type" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5", children: "Address" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5" })
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: c.map((d) => /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5 font-mono", children: d.name }),
        /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5 text-soft", children: d.type }),
        /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5 font-mono", children: d.ip }),
        /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5 text-right", children: /* @__PURE__ */ a.jsx(O, { size: "sm", "aria-label": `Remove ${d.name}`, onClick: () => t((p) => sx(p, d.name)), children: /* @__PURE__ */ a.jsx(_e, { size: 12 }) }) })
      ] }, d.name)) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "grid gap-2 sm:grid-cols-[1fr_1fr_auto]", children: [
      /* @__PURE__ */ a.jsx(W, { label: "Name", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          className: F,
          placeholder: "intranet.lab",
          value: n,
          "aria-label": "DNS record name",
          onChange: (d) => {
            r(d.target.value), l("");
          }
        }
      ) }),
      /* @__PURE__ */ a.jsx(W, { label: "Address", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          className: F,
          placeholder: "10.10.0.20",
          value: s,
          "aria-label": "DNS record address",
          onChange: (d) => {
            o(d.target.value), l("");
          }
        }
      ) }),
      /* @__PURE__ */ a.jsx("div", { className: "flex items-end", children: /* @__PURE__ */ a.jsxs(O, { variant: "outline", size: "sm", onClick: u, children: [
        /* @__PURE__ */ a.jsx(ra, { size: 13 }),
        " Add"
      ] }) })
    ] }),
    i && /* @__PURE__ */ a.jsx("p", { className: "mt-1 text-[11.5px] text-down", children: i })
  ] });
}
function rw({ device: e, edit: t, topology: n, engine: r }) {
  const s = ia(e), o = cx(e, n, r.clock);
  return /* @__PURE__ */ a.jsxs("section", { className: "mb-4", children: [
    /* @__PURE__ */ a.jsxs(V, { children: [
      /* @__PURE__ */ a.jsx(zh, { size: 13, className: "mr-1 inline" }),
      " DHCP scope"
    ] }),
    s.ready ? /* @__PURE__ */ a.jsxs("p", { className: "mb-2 text-[11.5px] leading-snug text-soft", children: [
      "Handing out ",
      /* @__PURE__ */ a.jsxs("span", { className: "font-mono text-ink", children: [
        s.base,
        s.first
      ] }),
      " –",
      " ",
      /* @__PURE__ */ a.jsxs("span", { className: "font-mono text-ink", children: [
        s.base,
        s.last
      ] }),
      " (",
      zu(e),
      " addresses). The subnet follows this server's own address, so the scope cannot drift onto one it is not on."
    ] }) : /* @__PURE__ */ a.jsxs("p", { className: "mb-2 rounded-lg border border-warn/40 bg-warn/10 p-2 text-[11.5px] text-ink", children: [
      "This scope cannot serve: ",
      s.reason,
      "."
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3 grid gap-2 sm:grid-cols-3", children: [
      /* @__PURE__ */ a.jsx(W, { label: "First address", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "number",
          min: "1",
          max: "254",
          className: F,
          value: e.dhcp.first,
          "aria-label": "Scope first address",
          onChange: (i) => t((l) => {
            l.dhcp.first = Number(i.target.value) || 1;
          })
        }
      ) }),
      /* @__PURE__ */ a.jsx(W, { label: "Last address", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "number",
          min: "1",
          max: "254",
          className: F,
          value: e.dhcp.last,
          "aria-label": "Scope last address",
          onChange: (i) => t((l) => {
            l.dhcp.last = Number(i.target.value) || 254;
          })
        }
      ) }),
      /* @__PURE__ */ a.jsx(W, { label: "Lease (minutes)", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "number",
          min: "1",
          className: F,
          value: e.dhcp.leaseMins,
          "aria-label": "Lease minutes",
          onChange: (i) => t((l) => {
            l.dhcp.leaseMins = Number(i.target.value) || 60;
          })
        }
      ) })
    ] }),
    /* @__PURE__ */ a.jsxs(V, { children: [
      "Leases — ",
      o.length,
      " of ",
      zu(e)
    ] }),
    o.length ? /* @__PURE__ */ a.jsxs("table", { className: "w-full text-left text-[12px]", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { className: "text-[10.5px] uppercase tracking-wider text-soft", children: [
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5", children: "Address" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5", children: "Client" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5", children: "MAC" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5", children: "Expires" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5" })
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: o.map((i) => /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5 font-mono", children: i.address }),
        /* @__PURE__ */ a.jsxs("td", { className: "border-b border-line p-1.5", children: [
          i.host,
          " ",
          i.reserved && /* @__PURE__ */ a.jsx(Z, { tone: "accent", children: "reserved" }),
          !i.online && /* @__PURE__ */ a.jsx(Z, { tone: "warn", children: "gone" })
        ] }),
        /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5 font-mono text-[11px] text-soft", children: i.mac }),
        /* @__PURE__ */ a.jsxs("td", { className: "border-b border-line p-1.5 text-soft", children: [
          i.expiresIn,
          " min"
        ] }),
        /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5 text-right", children: /* @__PURE__ */ a.jsx(
          O,
          {
            size: "sm",
            "aria-label": `Release ${i.address}`,
            onClick: () => t((l) => lx(l, i.address)),
            children: /* @__PURE__ */ a.jsx(_e, { size: 12 })
          }
        ) })
      ] }, i.address)) })
    ] }) : /* @__PURE__ */ a.jsx("p", { className: "text-[11.5px] text-soft", children: "Nothing has asked yet. Cable up a client set to DHCP and watch it appear." })
  ] });
}
function sw({ device: e, edit: t }) {
  var h;
  const [n, r] = C.useState(""), [s, o] = C.useState(""), [i, l] = C.useState("Domain Users"), [c, u] = C.useState(""), d = e.directory.users || [], p = () => {
    let f;
    if (t((g) => {
      f = dx(g, { username: n, password: s, group: i });
    }), !(f != null && f.ok)) return u((f == null ? void 0 : f.reason) || "Could not add that account.");
    r(""), o(""), u("");
  };
  return /* @__PURE__ */ a.jsxs("section", { className: "mb-4", children: [
    /* @__PURE__ */ a.jsxs(V, { children: [
      /* @__PURE__ */ a.jsx(Dh, { size: 13, className: "mr-1 inline" }),
      " Directory"
    ] }),
    /* @__PURE__ */ a.jsx(W, { label: "Domain name", hint: "Devices join this name, and RADIUS can authenticate against these accounts.", children: /* @__PURE__ */ a.jsx(
      "input",
      {
        className: F,
        placeholder: "lab.local",
        value: e.directory.domain,
        "aria-label": "Domain name",
        onChange: (f) => t((g) => {
          g.directory.domain = f.target.value.trim().toLowerCase();
        })
      }
    ) }),
    !e.directory.domain && /* @__PURE__ */ a.jsx("p", { className: "mt-1 text-[11.5px] text-warn", children: "Set a domain name before adding accounts — there is nothing for them to belong to yet." }),
    d.length > 0 && /* @__PURE__ */ a.jsxs("table", { className: "my-2 w-full text-left text-[12px]", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { className: "text-[10.5px] uppercase tracking-wider text-soft", children: [
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5", children: "Account" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5", children: "Group" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5", children: "State" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5" })
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: d.map((f) => /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5 font-mono", children: f.username }),
        /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5", children: f.group === "Domain Admins" ? /* @__PURE__ */ a.jsx(Z, { tone: "down", children: f.group }) : /* @__PURE__ */ a.jsx("span", { className: "text-soft", children: f.group }) }),
        /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5", children: /* @__PURE__ */ a.jsx(
          "button",
          {
            className: "text-[11px] underline hover:text-ink",
            onClick: () => t((g) => {
              const w = g.directory.users.find((k) => k.username === f.username);
              w && (w.enabled = !w.enabled);
            }),
            children: f.enabled ? "enabled" : "disabled"
          }
        ) }),
        /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5 text-right", children: /* @__PURE__ */ a.jsx(
          O,
          {
            size: "sm",
            "aria-label": `Remove ${f.username}`,
            onClick: () => t((g) => px(g, f.username)),
            children: /* @__PURE__ */ a.jsx(_e, { size: 12 })
          }
        ) })
      ] }, f.username)) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "grid gap-2 sm:grid-cols-[1fr_1fr_1fr_auto]", children: [
      /* @__PURE__ */ a.jsx(W, { label: "Username", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          className: F,
          placeholder: "a.smith",
          value: n,
          "aria-label": "Directory username",
          onChange: (f) => {
            r(f.target.value), u("");
          }
        }
      ) }),
      /* @__PURE__ */ a.jsx(W, { label: "Password", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          className: F,
          placeholder: "Winter2026!",
          value: s,
          "aria-label": "Directory password",
          onChange: (f) => {
            o(f.target.value), u("");
          }
        }
      ) }),
      /* @__PURE__ */ a.jsx(W, { label: "Group", children: /* @__PURE__ */ a.jsx(
        "select",
        {
          className: F,
          value: i,
          "aria-label": "Directory group",
          onChange: (f) => l(f.target.value),
          children: ux.map((f) => /* @__PURE__ */ a.jsx("option", { value: f, children: f }, f))
        }
      ) }),
      /* @__PURE__ */ a.jsx("div", { className: "flex items-end", children: /* @__PURE__ */ a.jsxs(O, { variant: "outline", size: "sm", onClick: p, children: [
        /* @__PURE__ */ a.jsx(ra, { size: 13 }),
        " Add"
      ] }) })
    ] }),
    c && /* @__PURE__ */ a.jsx("p", { className: "mt-1 text-[11.5px] text-down", children: c }),
    ((h = e.directory.joined) == null ? void 0 : h.length) > 0 && /* @__PURE__ */ a.jsxs("p", { className: "mt-2 text-[11.5px] text-soft", children: [
      e.directory.joined.length,
      " device(s) joined to this domain."
    ] })
  ] });
}
function ow({ device: e, edit: t, topology: n }) {
  const r = !!(e.services.ad && e.directory.domain), s = n.devices.filter((o) => {
    var i;
    return ((i = o.ap) == null ? void 0 : i.radiusServerId) === e.id;
  });
  return /* @__PURE__ */ a.jsxs("section", { className: "mb-4", children: [
    /* @__PURE__ */ a.jsxs(V, { children: [
      /* @__PURE__ */ a.jsx(Rh, { size: 13, className: "mr-1 inline" }),
      " RADIUS"
    ] }),
    /* @__PURE__ */ a.jsxs("p", { className: "mb-2 text-[11.5px] leading-snug text-soft", children: [
      "Answers 802.1X and captive-portal requests from access points.",
      " ",
      r ? "Accounts come from the directory on this server, so one password opens both the domain and the wireless." : "No directory is running here, so it has no account store — switch the directory on, or point the portal at a server that has one."
    ] }),
    /* @__PURE__ */ a.jsx(W, { label: "Shared secret", hint: "What the access point proves itself with. Not a user password.", children: /* @__PURE__ */ a.jsx(
      "input",
      {
        className: F,
        value: e.radius.secret,
        "aria-label": "RADIUS shared secret",
        onChange: (o) => t((i) => {
          i.radius.secret = o.target.value;
        })
      }
    ) }),
    /* @__PURE__ */ a.jsxs("div", { className: "mt-2 flex flex-wrap gap-2", children: [
      /* @__PURE__ */ a.jsxs(Z, { tone: "up", children: [
        e.radius.accepted,
        " accepted"
      ] }),
      /* @__PURE__ */ a.jsxs(Z, { tone: e.radius.rejected ? "down" : "neutral", children: [
        e.radius.rejected,
        " rejected"
      ] }),
      /* @__PURE__ */ a.jsxs(O, { size: "sm", onClick: () => t((o) => {
        o.radius.accepted = 0, o.radius.rejected = 0;
      }), children: [
        /* @__PURE__ */ a.jsx(Jl, { size: 12 }),
        " Reset counters"
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "mt-2 text-[11.5px] text-soft", children: s.length ? `${s.length} access point(s) point here: ${s.map((o) => o.hostname).join(", ")}.` : "No access point is pointed at this server yet — set it on the AP’s Wireless tab." })
  ] });
}
function aw({ device: e, edit: t }) {
  const n = wx(e);
  return /* @__PURE__ */ a.jsxs("section", { children: [
    /* @__PURE__ */ a.jsxs(V, { children: [
      /* @__PURE__ */ a.jsx(Fh, { size: 13, className: "mr-1 inline" }),
      " Installed software"
    ] }),
    /* @__PURE__ */ a.jsx("p", { className: "mb-2 text-[11.5px] leading-snug text-soft", children: "Switching a role on installs what it needs. Switching it off stops the service but leaves the package behind, exactly as it would on a real machine — and the vulnerability scan still finds it." }),
    /* @__PURE__ */ a.jsxs("table", { className: "w-full text-left text-[12px]", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { className: "text-[10.5px] uppercase tracking-wider text-soft", children: [
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5", children: "Package" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5", children: "Version" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5", children: "State" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5" })
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: n.map((r) => /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5 font-mono", children: r.name }),
        /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5 font-mono text-soft", children: r.version }),
        /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5", children: r.running ? /* @__PURE__ */ a.jsx(Z, { tone: "up", children: "running" }) : /* @__PURE__ */ a.jsx(Z, { children: "installed" }) }),
        /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5 text-right", children: !r.running && /* @__PURE__ */ a.jsx(
          O,
          {
            size: "sm",
            "aria-label": `Uninstall ${r.name}`,
            onClick: () => t((s) => bx(s, r.name)),
            children: /* @__PURE__ */ a.jsx(_e, { size: 12 })
          }
        ) })
      ] }, r.name)) })
    ] })
  ] });
}
const Tt = {
  up: { led: "#22c55e", body: "border-up/60 bg-up/10", label: "Up" },
  "admin-down": { led: "#f59e0b", body: "border-warn/60 bg-warn/10", label: "Administratively down" },
  down: { led: "#ef4444", body: "border-down/60 bg-down/10", label: "Down — check the cable" },
  idle: { led: "#60a5fa", body: "border-accent/40 bg-accent/10", label: "Radio on, not associated" },
  off: { led: "#475569", body: "border-line bg-panel2", label: "Radio off" },
  empty: { led: "#334155", body: "border-line bg-panel2", label: "No cable" }
};
function iw({ device: e, topology: t }) {
  var l, c;
  const [n, r] = C.useState(null), s = [];
  for (const u of e.interfaces) {
    const d = s[s.length - 1];
    d && d.media === u.media ? d.ports.push(u) : s.push({ media: u.media, ports: [u] });
  }
  const o = e.interfaces.filter((u) => u.link).length, i = e.interfaces.filter((u) => hr(e, u, t) === "up").length;
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(V, { children: "Front panel" }),
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3 rounded-xl border border-line bg-panel2 p-3", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "mb-2 flex items-baseline justify-between", children: [
        /* @__PURE__ */ a.jsxs("span", { className: "font-mono text-[11px] font-bold tracking-wide text-ink", children: [
          e.hostname,
          /* @__PURE__ */ a.jsx("span", { className: "ml-2 font-sans text-[10px] font-normal text-soft", children: ((c = (l = Ht[e.typeId]) == null ? void 0 : l.chassis) == null ? void 0 : c.label) || "" })
        ] }),
        /* @__PURE__ */ a.jsxs("span", { className: "font-mono text-[10px] text-soft", children: [
          o,
          " cabled · ",
          i,
          " up · ",
          e.interfaces.length,
          " ports"
        ] })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap items-start gap-x-4 gap-y-3", children: s.map((u, d) => {
        var p;
        return /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("div", { className: "mb-1 font-mono text-[9px] uppercase tracking-widest text-soft", children: ((p = Fn[u.media]) == null ? void 0 : p.short) || u.media }),
          /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-1", children: u.ports.map((h) => {
            var k;
            const f = hr(e, h, t), g = Tt[f] || Tt.empty, w = Sr(e, h, t);
            return /* @__PURE__ */ a.jsxs(
              "button",
              {
                onMouseEnter: () => r(h.name),
                onMouseLeave: () => r(null),
                onFocus: () => r(h.name),
                onBlur: () => r(null),
                title: uw(e, h, f, w),
                className: `relative grid h-9 w-11 place-items-center rounded border ${g.body} transition-colors`,
                children: [
                  /* @__PURE__ */ a.jsx(
                    "span",
                    {
                      className: "absolute left-1 top-1 h-1.5 w-1.5 rounded-full",
                      style: { background: g.led, boxShadow: f === "up" ? `0 0 5px ${g.led}` : "none" }
                    }
                  ),
                  /* @__PURE__ */ a.jsx("span", { className: "mt-1 font-mono text-[8.5px] leading-none text-ink", children: cw(h.name) }),
                  w && /* @__PURE__ */ a.jsx(
                    "span",
                    {
                      className: "absolute bottom-[2px] h-[2px] w-5 rounded-full",
                      style: { background: ((k = Se[w.link.cableType]) == null ? void 0 : k.color) || "#64748b" }
                    }
                  )
                ]
              },
              h.name
            );
          }) })
        ] }, d);
      }) })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "mb-3 min-h-[52px] rounded-lg border border-line bg-panel2 px-3 py-2 font-mono text-[11px]", children: n ? /* @__PURE__ */ a.jsx(lw, { device: e, port: e.interfaces.find((u) => u.name === n), topology: t }) : /* @__PURE__ */ a.jsx("span", { className: "text-soft", children: "Hover a port for its link state and the device at the far end." }) }),
    /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-x-4 gap-y-1 text-[10.5px] text-soft", children: ["up", "admin-down", "down", "empty"].map((u) => /* @__PURE__ */ a.jsxs("span", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ a.jsx("span", { className: "h-2 w-2 rounded-full", style: { background: Tt[u].led } }),
      Tt[u].label
    ] }, u)) }),
    /* @__PURE__ */ a.jsx(V, { className: "mt-5", children: "Cable schedule" }),
    o === 0 ? /* @__PURE__ */ a.jsx("p", { className: "font-mono text-[11.5px] text-soft", children: "Nothing is plugged into this device yet." }) : /* @__PURE__ */ a.jsxs("table", { className: "w-full border-collapse font-mono text-[11px]", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { className: "text-[9.5px] uppercase text-soft", children: [
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "Local port" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "Cable" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "Far end" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "State" })
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: e.interfaces.filter((u) => u.link).map((u) => {
        var h, f, g;
        const d = Sr(e, u, t), p = hr(e, u, t);
        return /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5", children: u.name }),
          /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5", style: { color: (h = Se[d == null ? void 0 : d.link.cableType]) == null ? void 0 : h.color }, children: ((f = Se[d == null ? void 0 : d.link.cableType]) == null ? void 0 : f.short) || "—" }),
          /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5", children: d ? `${d.device.hostname} ${((g = d.port) == null ? void 0 : g.name) || ""}` : "—" }),
          /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5", style: { color: Tt[p].led }, children: Tt[p].label })
        ] }, u.name);
      }) })
    ] })
  ] });
}
function lw({ device: e, port: t, topology: n }) {
  var l, c, u;
  if (!t) return null;
  const r = hr(e, t, n), s = Tt[r] || Tt.empty, o = Sr(e, t, n), i = Fn[t.media];
  return /* @__PURE__ */ a.jsxs("div", { className: "leading-relaxed", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-x-3", children: [
      /* @__PURE__ */ a.jsx("span", { className: "font-bold text-ink", children: t.name }),
      /* @__PURE__ */ a.jsx("span", { className: "text-soft", children: (i == null ? void 0 : i.label) || t.media }),
      t.speed && /* @__PURE__ */ a.jsx("span", { className: "text-soft", children: t.speed }),
      /* @__PURE__ */ a.jsxs("span", { style: { color: s.led }, children: [
        "● ",
        s.label
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "text-soft", children: [
      t.ip ? `${t.ip} / ${t.mask}` : "no address",
      " · ",
      t.mac,
      o ? ` · ${(l = Se[o.link.cableType]) == null ? void 0 : l.label} to ${o.device.hostname} ${((c = o.port) == null ? void 0 : c.name) || ""}` : ""
    ] }),
    o && o.link.down && o.link.reason && /* @__PURE__ */ a.jsx("div", { className: "text-down", children: o.link.reason }),
    r === "down" && !(o != null && o.link.down) && ((u = o == null ? void 0 : o.port) == null ? void 0 : u.enabled) === !1 && /* @__PURE__ */ a.jsxs("div", { className: "text-warn", children: [
      "No carrier — ",
      o.device.hostname,
      " ",
      o.port.name,
      " is administratively down at the other end."
    ] })
  ] });
}
function cw(e) {
  if (e.includes("/")) {
    const t = e.match(/^([A-Za-z])[A-Za-z]*(.*)$/);
    return t ? `${t[1].toUpperCase()}${t[2]}` : e;
  }
  return e.replace(/^Ethernet/, "Eth").replace(/^Wi-Fi$/, "WiFi");
}
function uw(e, t, n, r) {
  var o, i, l;
  const s = [`${t.name} — ${((o = Fn[t.media]) == null ? void 0 : o.label) || t.media}`];
  return t.speed && s.push(t.speed), s.push(((i = Tt[n]) == null ? void 0 : i.label) || n), r && s.push(`→ ${r.device.hostname} ${((l = r.port) == null ? void 0 : l.name) || ""}`), t.ip && s.push(t.ip), s.join(" · ");
}
function dw({ deviceId: e, onClose: t }) {
  var k;
  const n = b((m) => m.topology.devices.find((x) => x.id === e)), r = b((m) => m.topology), s = b((m) => m.updateDevice), o = b((m) => m.openDeviceConsole), i = b((m) => m.engine);
  b((m) => m.rev);
  const [l, c] = C.useState("config"), [u, d] = C.useState(0);
  if (!n) return null;
  const p = Ht[n.typeId], h = $s(p == null ? void 0 : p.icon), f = (m) => s(n.id, m), g = n.interfaces[u] || n.interfaces[0], w = [
    ...n.role === "attacker" ? [["toolkit", "Toolkit"]] : [],
    ["config", "Config"],
    ["physical", "Physical"],
    ...n.radio || n.ap ? [["wireless", "Wireless"]] : [],
    ...p != null && p.vlanCapable || p != null && p.routeCapable || n.role === "router" ? [["routing", "Routing & VLAN"]] : [],
    ...n.role === "firewall" || n.role === "router" ? [["acl", "Access Lists"]] : [],
    ...Object.keys((p == null ? void 0 : p.services) || {}).length || n.role === "host" || n.role === "iot" ? [["services", "Services"]] : [],
    ...p != null && p.serverRoles ? [["roles", "Server roles"]] : [],
    ["security", "Security"],
    ["status", "Status"]
  ];
  return /* @__PURE__ */ a.jsxs(
    hn,
    {
      title: n.hostname,
      subtitle: `${((k = p == null ? void 0 : p.chassis) == null ? void 0 : k.label) || (p == null ? void 0 : p.label)} · ${n.os.toUpperCase()} · ${n.interfaces.length} interfaces`,
      icon: /* @__PURE__ */ a.jsx("span", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-panel2 text-accent", children: /* @__PURE__ */ a.jsx(h, { size: 18 }) }),
      onClose: t,
      footer: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ a.jsxs(
          O,
          {
            variant: "primary",
            size: "sm",
            onClick: () => {
              o(n.id), t();
            },
            children: [
              /* @__PURE__ */ a.jsx(tc, { size: 14 }),
              " Open console"
            ]
          }
        ),
        n.runtime.compromised && /* @__PURE__ */ a.jsx(Z, { tone: "down", children: "COMPROMISED" }),
        n.runtime.unresponsive && /* @__PURE__ */ a.jsx(Z, { tone: "down", children: "SATURATED" }),
        n.security.lockout.locked && /* @__PURE__ */ a.jsx(Z, { tone: "warn", children: "LOGINS LOCKED" }),
        /* @__PURE__ */ a.jsx("div", { className: "flex-1" }),
        /* @__PURE__ */ a.jsx("span", { className: "font-mono text-[10px] text-soft", children: n.cli.saved ? "config saved" : "unsaved changes" })
      ] }),
      children: [
        /* @__PURE__ */ a.jsx("nav", { className: "mb-4 flex flex-wrap gap-1.5", children: w.map(([m, x]) => /* @__PURE__ */ a.jsx(O, { size: "sm", variant: l === m ? "active" : "outline", onClick: () => c(m), children: x }, m)) }),
        l === "config" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(W, { label: "Hostname", children: /* @__PURE__ */ a.jsx(
            "input",
            {
              className: F,
              value: n.hostname,
              onChange: (m) => f((x) => {
                x.hostname = m.target.value || x.hostname;
              })
            }
          ) }),
          /* @__PURE__ */ a.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ a.jsx(W, { label: "Interface", children: /* @__PURE__ */ a.jsx(
              "select",
              {
                className: F,
                value: u,
                onChange: (m) => d(Number(m.target.value)),
                children: n.interfaces.map((m, x) => /* @__PURE__ */ a.jsxs("option", { value: x, children: [
                  m.name,
                  " ",
                  m.ip ? `— ${m.ip}` : "— unassigned"
                ] }, m.name))
              }
            ) }),
            /* @__PURE__ */ a.jsx(W, { label: "Administrative state", children: /* @__PURE__ */ a.jsxs(
              "select",
              {
                className: F,
                value: g.enabled ? "1" : "0",
                onChange: (m) => f((x) => {
                  x.interfaces[u].enabled = m.target.value === "1";
                }),
                children: [
                  /* @__PURE__ */ a.jsx("option", { value: "1", children: "up (no shutdown)" }),
                  /* @__PURE__ */ a.jsx("option", { value: "0", children: "administratively down" })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ a.jsx(
            W,
            {
              label: "Addressing",
              hint: g.addressing === "dhcp" ? "Takes an address from any reachable DHCP server, the way a real client does. Typing an address below switches this to Static." : "This interface is yours — nothing will overwrite it.",
              children: /* @__PURE__ */ a.jsxs(
                "select",
                {
                  className: F,
                  value: g.addressing === "dhcp" ? "dhcp" : "static",
                  "aria-label": "Addressing mode",
                  onChange: (m) => f((x) => {
                    const v = m.target.value;
                    x.interfaces[u].addressing = v, v === "dhcp" && (x.interfaces[u].ip = "", x.gateway = "");
                  }),
                  children: [
                    /* @__PURE__ */ a.jsx("option", { value: "dhcp", children: "DHCP — ask the network" }),
                    /* @__PURE__ */ a.jsx("option", { value: "static", children: "Static — set it myself" })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ a.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ a.jsx(
              W,
              {
                label: "IP address",
                hint: g.ip && !$e(g.ip) ? "Not a valid IPv4 address." : g.addressing === "dhcp" && !g.ip ? "Waiting for a DHCP offer…" : void 0,
                children: /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    className: F,
                    placeholder: g.addressing === "dhcp" ? "assigned by DHCP" : "192.168.10.20",
                    value: g.ip,
                    onChange: (m) => f((x) => {
                      const v = m.target.value.trim();
                      x.interfaces[u].ip = v, v && (x.interfaces[u].enabled = !0, x.interfaces[u].addressing = "static");
                    })
                  }
                )
              }
            ),
            /* @__PURE__ */ a.jsx(
              W,
              {
                label: "Subnet mask",
                hint: g.mask ? `/${qe(g.mask) ?? "?"}` : void 0,
                children: /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    className: F,
                    value: g.mask,
                    onChange: (m) => f((x) => {
                      x.interfaces[u].mask = m.target.value.trim();
                    })
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ a.jsx(W, { label: "Default gateway", hint: "Needed for any traffic leaving the local subnet.", children: /* @__PURE__ */ a.jsx(
            "input",
            {
              className: F,
              placeholder: "192.168.10.1",
              value: n.gateway,
              onChange: (m) => f((x) => {
                x.gateway = m.target.value.trim();
              })
            }
          ) }),
          /* @__PURE__ */ a.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ a.jsx(W, { label: "MAC address", children: /* @__PURE__ */ a.jsx("input", { className: F, value: g.mac, readOnly: !0 }) }),
            (p == null ? void 0 : p.vlanCapable) && /* @__PURE__ */ a.jsx(W, { label: "Access VLAN", children: /* @__PURE__ */ a.jsx(
              "input",
              {
                className: F,
                value: g.vlan,
                onChange: (m) => f((x) => {
                  x.interfaces[u].vlan = Number(m.target.value) || 1;
                })
              }
            ) })
          ] }),
          (n.role === "host" || n.role === "iot") && /* @__PURE__ */ a.jsxs(
            O,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                b.getState().openDeviceConsole(n.id), i.dhcpRequest(n, `dev:${n.id}`);
              },
              children: [
                /* @__PURE__ */ a.jsx(Gl, { size: 14 }),
                " Request a DHCP lease"
              ]
            }
          )
        ] }),
        l === "physical" && /* @__PURE__ */ a.jsx(iw, { device: n, topology: r }),
        l === "wireless" && /* @__PURE__ */ a.jsx(pw, { device: n, edit: f }),
        l === "toolkit" && /* @__PURE__ */ a.jsx(hw, { device: n, onClose: t }),
        l === "routing" && /* @__PURE__ */ a.jsx(fw, { device: n, edit: f }),
        l === "acl" && /* @__PURE__ */ a.jsx(mw, { device: n, edit: f }),
        l === "roles" && /* @__PURE__ */ a.jsx(tw, { device: n, edit: f }),
        l === "services" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(V, { children: "Hosted services" }),
          Object.keys(Rt).map((m) => /* @__PURE__ */ a.jsx(
            ue,
            {
              id: `svc-${n.id}-${m}`,
              label: Rt[m].label,
              hint: `tcp/${Rt[m].port}`,
              checked: !!n.services[m],
              onChange: (x) => f((v) => {
                v.services[m] = x;
              })
            },
            m
          )),
          /* @__PURE__ */ a.jsxs("p", { className: "mt-2 text-[11px] leading-snug text-soft", children: [
            "Running services become selectable targets in the Cyber Range, and decide what this box is called on the canvas. Stopping a service is itself a valid mitigation — it is attack surface removed.",
            p != null && p.serverRoles ? " Anything that needs configuring appears under Server roles." : ""
          ] })
        ] }),
        l === "security" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(V, { children: "Credentials" }),
          /* @__PURE__ */ a.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ a.jsx(W, { label: "Username", children: /* @__PURE__ */ a.jsx(
              "input",
              {
                className: F,
                value: n.security.username,
                onChange: (m) => f((x) => {
                  x.security.username = m.target.value;
                })
              }
            ) }),
            /* @__PURE__ */ a.jsx(
              W,
              {
                label: "Password",
                hint: Ro.includes(n.security.password) ? "⚠ This password is in the demo wordlist — brute force will succeed." : n.security.password.length < 10 ? "Short passwords are brittle; 10+ characters is the lab target." : "✓ Outside the wordlist and long enough.",
                children: /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    className: F,
                    value: n.security.password,
                    onChange: (m) => f((x) => {
                      x.security.password = m.target.value;
                    })
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ a.jsx(
            W,
            {
              label: "Max authentication attempts",
              hint: "0 means unlimited. Set 3–5 so the brute-force drill locks out.",
              children: /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "number",
                  min: "0",
                  max: "20",
                  className: F,
                  value: n.security.maxAuthTries,
                  onChange: (m) => f((x) => {
                    x.security.maxAuthTries = Math.max(0, Number(m.target.value) || 0);
                  })
                }
              )
            }
          ),
          /* @__PURE__ */ a.jsx(V, { className: "mt-4", children: "Hardening controls" }),
          /* @__PURE__ */ a.jsx(
            ue,
            {
              label: "SYN cookies",
              hint: "Caps the half-open queue so a SYN flood cannot exhaust it.",
              checked: n.security.synCookies,
              onChange: (m) => f((x) => {
                x.security.synCookies = m;
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            ue,
            {
              label: "Input sanitisation (parameterised queries)",
              hint: "Binds web-app input as parameters, defeating SQL injection.",
              checked: n.security.inputSanitised,
              onChange: (m) => f((x) => {
                x.security.inputSanitised = m;
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            ue,
            {
              label: "Security awareness training",
              hint: "A trained user reports a phishing lure instead of opening it.",
              checked: n.security.awarenessTraining,
              onChange: (m) => f((x) => {
                x.security.awarenessTraining = m;
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            ue,
            {
              label: "Multi-factor authentication",
              hint: "A stolen password alone no longer gets an attacker in.",
              checked: n.security.mfa,
              onChange: (m) => f((x) => {
                x.security.mfa = m;
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            ue,
            {
              label: "Security updates applied",
              hint: "Unpatched services advertise an older build, which a version scan will report.",
              checked: n.security.patched,
              onChange: (m) => f((x) => {
                x.security.patched = m;
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            ue,
            {
              label: "TLS on the web service",
              hint: "Without it, logins posted to this host cross the network in clear.",
              checked: n.security.tlsEnabled,
              onChange: (m) => f((x) => {
                x.security.tlsEnabled = m;
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            ue,
            {
              label: "Legacy SMBv1 enabled",
              hint: "A deprecated file-sharing dialect with no modern signing. Usually left on for one old device and forgotten.",
              checked: n.security.legacySmb,
              onChange: (m) => f((x) => {
                x.security.legacySmb = m;
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            ue,
            {
              label: "Anonymous FTP permitted",
              hint: "Lets anyone read the share without a password.",
              checked: n.security.anonymousFtp,
              onChange: (m) => f((x) => {
                x.security.anonymousFtp = m;
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            ue,
            {
              label: "Enforce a password policy",
              hint: "Minimum length and complexity for new passwords.",
              checked: n.security.passwordPolicy,
              onChange: (m) => f((x) => {
                x.security.passwordPolicy = m;
              })
            }
          ),
          /* @__PURE__ */ a.jsx(W, { label: "SNMP community string", hint: '"public" is the vendor default, and the first thing a scanner tries.', children: /* @__PURE__ */ a.jsx(
            "input",
            {
              className: F,
              value: n.security.snmpCommunity,
              "aria-label": "SNMP community string",
              onChange: (m) => f((x) => {
                x.security.snmpCommunity = m.target.value;
              })
            }
          ) }),
          /* @__PURE__ */ a.jsx(
            ue,
            {
              label: "Callback verification policy",
              hint: "Staff ring an unexpected caller back on a number from the internal directory. Ends any pretext that rests on a claimed identity.",
              checked: n.security.callbackVerification,
              onChange: (m) => f((x) => {
                x.security.callbackVerification = m;
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            ue,
            {
              label: "Dynamic ARP Inspection",
              hint: "Drops gratuitous ARP replies, defeating the MitM drill.",
              checked: n.security.dynamicArpInspection,
              onChange: (m) => f((x) => {
                x.security.dynamicArpInspection = m;
              })
            }
          ),
          n.security.lockout.failures > 0 && /* @__PURE__ */ a.jsxs("p", { className: "mt-3 font-mono text-[11px] text-warn", children: [
            "auth failures: ",
            n.security.lockout.failures,
            n.security.lockout.locked ? " — LOCKED" : ""
          ] })
        ] }),
        l === "status" && /* @__PURE__ */ a.jsx(gw, { device: n })
      ]
    }
  );
}
function pw({ device: e, edit: t }) {
  var l, c;
  const n = b((u) => u.topology), r = b((u) => u.toggleCapture);
  b((u) => u.rev);
  const s = vt(n).get(e.id), o = s && n.devices.find((u) => u.id === s.apId), i = e.radio ? nf(n, e) : [];
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    e.ap && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs(V, { children: [
        "Broadcast network ",
        e.ap.rogue ? "(rogue clone)" : ""
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ a.jsx(W, { label: "SSID", children: /* @__PURE__ */ a.jsx(
          "input",
          {
            className: F,
            value: e.ap.ssid,
            onChange: (u) => t((d) => {
              d.ap.ssid = u.target.value;
            })
          }
        ) }),
        /* @__PURE__ */ a.jsx(W, { label: "Channel", children: /* @__PURE__ */ a.jsx(
          "input",
          {
            className: F,
            type: "number",
            value: e.ap.channel,
            onChange: (u) => t((d) => {
              d.ap.channel = Number(u.target.value) || 6;
            })
          }
        ) })
      ] }),
      /* @__PURE__ */ a.jsx(
        W,
        {
          label: "Security",
          hint: ae[e.ap.security] && ae[e.ap.security].encrypted ? "✓ Payloads are encrypted over the air." : "⚠ Open network — anything in range can read every payload in cleartext.",
          children: /* @__PURE__ */ a.jsx(
            "select",
            {
              className: F,
              value: e.ap.security,
              onChange: (u) => t((d) => {
                d.ap.security = u.target.value;
              }),
              children: Object.values(ae).map((u) => /* @__PURE__ */ a.jsx("option", { value: u.id, children: u.label }, u.id))
            }
          )
        }
      ),
      ac(e.ap.security) ? /* @__PURE__ */ a.jsx("p", { className: "mb-3 rounded-lg border border-up/40 bg-up/10 p-2 text-[11.5px] leading-snug text-ink", children: "802.1X has no shared passphrase. Each client presents its own credentials to the server below, which is why a leaver losing access does not mean re-keying the whole site." }) : /* @__PURE__ */ a.jsx(
        W,
        {
          label: "Passphrase",
          hint: e.ap.security === "open" ? "An open network has none — anyone in range joins." : void 0,
          children: /* @__PURE__ */ a.jsx(
            "input",
            {
              className: F,
              value: e.ap.passphrase,
              disabled: e.ap.security === "open",
              onChange: (u) => t((d) => {
                d.ap.passphrase = u.target.value;
              })
            }
          )
        }
      ),
      /* @__PURE__ */ a.jsx(xw, { device: e, edit: t }),
      /* @__PURE__ */ a.jsx(W, { label: `Cell radius — ${e.ap.range}px`, hint: "How far the signal carries on the canvas. A smaller cell is a real mitigation.", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "range",
          min: "90",
          max: "340",
          step: "10",
          value: e.ap.range,
          onChange: (u) => t((d) => {
            d.ap.range = Number(u.target.value);
          }),
          className: "w-full accent-[rgb(var(--nr-accent))]"
        }
      ) }),
      /* @__PURE__ */ a.jsx(
        ue,
        {
          label: "802.11w Protected Management Frames",
          hint: "Signs deauthentication frames so forged ones are ignored.",
          checked: e.security.managementFrameProtection,
          onChange: (u) => t((d) => {
            d.security.managementFrameProtection = u;
          })
        }
      ),
      Object.keys(e.ap.deauthed || {}).length > 0 && /* @__PURE__ */ a.jsxs("p", { className: "mt-2 font-mono text-[11px] text-warn", children: [
        Object.keys(e.ap.deauthed).length,
        " station(s) currently banned by a deauth exercise."
      ] })
    ] }),
    e.radio && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(V, { className: e.ap ? "mt-5" : "", children: "Client radio" }),
      /* @__PURE__ */ a.jsx(
        ue,
        {
          label: "Radio enabled",
          checked: e.radio.enabled,
          onChange: (u) => t((d) => {
            d.radio.enabled = u;
          })
        }
      ),
      /* @__PURE__ */ a.jsx(
        ue,
        {
          label: "Monitor mode",
          hint: "Captures every frame in range instead of only its own. This is what makes passive WiFi snooping possible.",
          checked: e.radio.monitorMode,
          onChange: (u) => t((d) => {
            d.radio.monitorMode = u;
          })
        }
      ),
      /* @__PURE__ */ a.jsx(
        ue,
        {
          label: "Capture to the Packet Capture tab",
          checked: !!e.capturing,
          onChange: () => r(e.id)
        }
      ),
      /* @__PURE__ */ a.jsx(
        W,
        {
          label: "Preferred SSID",
          hint: e.radio.ssid ? "✓ Pinned to one network — an open clone of another name will not be joined." : "⚠ Blank means auto-join anything in range, which is exactly what an evil twin needs.",
          children: /* @__PURE__ */ a.jsx(
            "input",
            {
              className: F,
              placeholder: "(any network)",
              value: e.radio.ssid,
              onChange: (u) => t((d) => {
                d.radio.ssid = u.target.value.trim();
              })
            }
          )
        }
      ),
      /* @__PURE__ */ a.jsx(
        W,
        {
          label: "802.1X identity",
          hint: "Used on enterprise networks, which have no shared passphrase. Usually the same account as the domain.",
          children: /* @__PURE__ */ a.jsxs("div", { className: "grid gap-2 sm:grid-cols-2", children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                className: F,
                placeholder: "username",
                "aria-label": "802.1X username",
                value: ((l = e.radio.identity) == null ? void 0 : l.username) || "",
                onChange: (u) => t((d) => {
                  d.radio.identity = d.radio.identity || {}, d.radio.identity.username = u.target.value.trim().toLowerCase();
                })
              }
            ),
            /* @__PURE__ */ a.jsx(
              "input",
              {
                className: F,
                placeholder: "password",
                "aria-label": "802.1X password",
                value: ((c = e.radio.identity) == null ? void 0 : c.password) || "",
                onChange: (u) => t((d) => {
                  d.radio.identity = d.radio.identity || {}, d.radio.identity.password = u.target.value;
                })
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ a.jsx(V, { className: "mt-4", children: "Networks in range" }),
      i.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "font-mono text-[11.5px] text-soft", children: "No access points within radio range." }) : /* @__PURE__ */ a.jsx("ul", { className: "space-y-1", children: i.map(({ ap: u, dbm: d }) => {
        const p = !ae[u.ap.security] || !ae[u.ap.security].encrypted, h = s && s.apId === u.id;
        return /* @__PURE__ */ a.jsxs(
          "li",
          {
            className: `flex items-center gap-2 rounded-md border px-2 py-1.5 font-mono text-[11.5px] ${h ? "border-up/50 bg-up/10" : "border-line bg-panel2"}`,
            children: [
              /* @__PURE__ */ a.jsx("span", { className: "flex-1 truncate", children: u.ap.ssid }),
              /* @__PURE__ */ a.jsx(Z, { tone: p ? "warn" : "up", children: p ? "OPEN" : u.ap.security.toUpperCase() }),
              /* @__PURE__ */ a.jsxs("span", { className: "text-soft", children: [
                d,
                " dBm · ",
                tf(d),
                "/4"
              ] }),
              h && /* @__PURE__ */ a.jsx(Z, { tone: "up", children: "joined" })
            ]
          },
          u.id
        );
      }) }),
      s && o && /* @__PURE__ */ a.jsxs("p", { className: "mt-3 text-[11.5px] leading-snug text-soft", children: [
        "Associated with ",
        /* @__PURE__ */ a.jsx("strong", { className: "text-ink", children: o.hostname }),
        " on “",
        s.ssid,
        "”",
        o.ap.rogue && /* @__PURE__ */ a.jsx("span", { className: "text-down", children: " — this is the rogue access point." })
      ] })
    ] })
  ] });
}
function hw({ device: e, onClose: t }) {
  const n = b((k) => k.engine), r = b((k) => k.topology), s = b((k) => k.commit), o = b((k) => k.setActiveConsole), i = b((k) => k.ensureConsole), l = b((k) => k.toggleCapture);
  b((k) => k.rev);
  const [c, u] = C.useState(""), [d, p] = C.useState(fr.sqli.defaultPayload), h = r.devices.filter((k) => k.id !== e.id), f = h.find((k) => k.id === c) || null, g = (k) => {
    i("attack", "Cyber Range"), i("capture", "Packet Capture"), o("attack");
    const m = f || h.find((x) => k.canTarget(x)) || null;
    or(k.id, {
      engine: n,
      attacker: e,
      target: m,
      commit: s,
      payload: k.needsPayload ? d : void 0
    }), t();
  }, w = uy.map((k) => ({
    category: k,
    items: Object.values(fr).filter((m) => m.category === k)
  })).filter((k) => k.items.length);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("p", { className: "mb-3 text-[12px] leading-relaxed text-soft", children: [
      "Exercises launch from ",
      /* @__PURE__ */ a.jsx("strong", { className: "text-ink", children: e.hostname }),
      ". Wireless ones reach their target through the air and need no cable. Everything is simulated inside this tab."
    ] }),
    /* @__PURE__ */ a.jsx(W, { label: "Target", hint: "Leave on auto and the first eligible node is chosen for each exercise.", children: /* @__PURE__ */ a.jsxs("select", { className: F, value: c, onChange: (k) => u(k.target.value), children: [
      /* @__PURE__ */ a.jsx("option", { value: "", children: "Auto-select" }),
      h.map((k) => /* @__PURE__ */ a.jsxs("option", { value: k.id, children: [
        k.hostname,
        " — ",
        _(k) || "no IP"
      ] }, k.id))
    ] }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3 flex flex-wrap gap-2", children: [
      /* @__PURE__ */ a.jsx(O, { variant: e.capturing ? "active" : "outline", size: "sm", onClick: () => l(e.id), children: e.capturing ? "Capturing" : "Start capture" }),
      /* @__PURE__ */ a.jsx(
        O,
        {
          variant: "outline",
          size: "sm",
          onClick: () => {
            i("capture", "Packet Capture"), o("capture"), t();
          },
          children: "Open Packet Capture"
        }
      )
    ] }),
    w.map(({ category: k, items: m }) => /* @__PURE__ */ a.jsxs("section", { className: "mb-3", children: [
      /* @__PURE__ */ a.jsx(V, { children: k }),
      m.map((x) => {
        const v = $s(x.icon), S = x.category === "Wireless" ? !!e.radio : f ? x.canTarget(f) : h.some(($) => x.canTarget($));
        return /* @__PURE__ */ a.jsxs("div", { className: "mb-2 rounded-lg border border-line bg-panel2 p-2.5", children: [
          /* @__PURE__ */ a.jsxs("h4", { className: "mb-1 flex items-center gap-2 text-[12.5px] font-bold", children: [
            /* @__PURE__ */ a.jsx(v, { size: 14, className: "text-down" }),
            x.label,
            !S && /* @__PURE__ */ a.jsx(Z, { tone: "warn", children: "unavailable" })
          ] }),
          /* @__PURE__ */ a.jsx("p", { className: "mb-2 text-[11px] leading-snug text-soft", children: x.summary }),
          x.needsPayload && /* @__PURE__ */ a.jsx(
            "input",
            {
              className: `${F} mb-2`,
              value: d,
              onChange: ($) => p($.target.value),
              "aria-label": "Injection payload"
            }
          ),
          /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ a.jsx(O, { variant: "danger", size: "sm", disabled: !S, onClick: () => g(x), children: "Launch" }),
            /* @__PURE__ */ a.jsxs("span", { className: "text-[10.5px] text-soft", children: [
              /* @__PURE__ */ a.jsx("strong", { className: "text-ink", children: "Defence:" }),
              " ",
              x.mitigation
            ] })
          ] })
        ] }, x.id);
      })
    ] }, k))
  ] });
}
function fw({ device: e, edit: t }) {
  const [n, r] = C.useState({ network: "", mask: "255.255.255.0", nextHop: "" }), [s, o] = C.useState({ id: "", name: "" });
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(V, { children: "Static routes" }),
    /* @__PURE__ */ a.jsxs("table", { className: "mb-3 w-full border-collapse font-mono text-[11.5px]", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { className: "text-[10px] uppercase text-soft", children: [
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "Network" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "Mask" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "Next hop" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5" })
      ] }) }),
      /* @__PURE__ */ a.jsxs("tbody", { children: [
        e.routes.length === 0 && /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", { colSpan: 4, className: "p-2 text-soft", children: "No static routes." }) }),
        e.routes.map((i, l) => /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5", children: i.network }),
          /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5", children: i.mask }),
          /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5", children: i.nextHop }),
          /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5 text-right", children: /* @__PURE__ */ a.jsx(
            "button",
            {
              className: "text-down hover:underline",
              onClick: () => t((c) => {
                c.routes.splice(l, 1);
              }),
              children: "remove"
            }
          ) })
        ] }, l))
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "grid gap-2 sm:grid-cols-3", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: F,
          placeholder: "10.0.0.0",
          value: n.network,
          onChange: (i) => r({ ...n, network: i.target.value })
        }
      ),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: F,
          placeholder: "255.0.0.0",
          value: n.mask,
          onChange: (i) => r({ ...n, mask: i.target.value })
        }
      ),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: F,
          placeholder: "192.168.10.2",
          value: n.nextHop,
          onChange: (i) => r({ ...n, nextHop: i.target.value })
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx(
      O,
      {
        variant: "outline",
        size: "sm",
        className: "mt-2",
        disabled: !$e(n.network) || !$e(n.mask) || !$e(n.nextHop),
        onClick: () => {
          t((i) => {
            i.routes.push({ ...n });
          }), r({ network: "", mask: "255.255.255.0", nextHop: "" });
        },
        children: "Add route"
      }
    ),
    /* @__PURE__ */ a.jsx(V, { className: "mt-5", children: "VLANs" }),
    /* @__PURE__ */ a.jsxs("div", { className: "mb-2 flex flex-wrap gap-1.5", children: [
      e.vlans.length === 0 && /* @__PURE__ */ a.jsx("span", { className: "text-[12px] text-soft", children: "None configured." }),
      e.vlans.map((i) => /* @__PURE__ */ a.jsxs(Z, { tone: "accent", children: [
        i.id,
        " · ",
        i.name,
        /* @__PURE__ */ a.jsx(
          "button",
          {
            className: "ml-1 opacity-60 hover:opacity-100",
            onClick: () => t((l) => {
              l.vlans = l.vlans.filter((c) => c.id !== i.id);
            }),
            children: "×"
          }
        )
      ] }, i.id))
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "grid gap-2 sm:grid-cols-2", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: F,
          placeholder: "VLAN id, e.g. 20",
          value: s.id,
          onChange: (i) => o({ ...s, id: i.target.value })
        }
      ),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: F,
          placeholder: "Name, e.g. STAFF",
          value: s.name,
          onChange: (i) => o({ ...s, name: i.target.value })
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx(
      O,
      {
        variant: "outline",
        size: "sm",
        className: "mt-2",
        disabled: !Number(s.id),
        onClick: () => {
          const i = Number(s.id);
          t((l) => {
            l.vlans.some((c) => c.id === i) || l.vlans.push({ id: i, name: s.name || `VLAN${i}` });
          }), o({ id: "", name: "" });
        },
        children: "Add VLAN"
      }
    )
  ] });
}
function mw({ device: e, edit: t }) {
  const [n, r] = C.useState({ id: "101", action: "deny", source: "any", dest: "any" });
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(V, { children: "Access control list" }),
    /* @__PURE__ */ a.jsxs("p", { className: "mb-3 text-[11.5px] leading-snug text-soft", children: [
      "Rules are evaluated top-down on every simulated flow crossing this device. A ",
      /* @__PURE__ */ a.jsx("code", { children: "deny" }),
      " ",
      "matching the source stops a flood at the perimeter."
    ] }),
    e.acl.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "mb-3 font-mono text-[11.5px] text-soft", children: "No rules — all traffic permitted." }) : /* @__PURE__ */ a.jsx("ol", { className: "mb-3 space-y-1", children: e.acl.map((s, o) => /* @__PURE__ */ a.jsxs("li", { className: "flex items-center gap-2 rounded-md border border-line bg-panel2 px-2 py-1.5 font-mono text-[11.5px]", children: [
      /* @__PURE__ */ a.jsx(Z, { tone: s.action === "deny" ? "down" : "up", children: s.action }),
      /* @__PURE__ */ a.jsxs("span", { className: "min-w-0 flex-1 truncate", children: [
        s.source,
        " → ",
        s.dest
      ] }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          className: "text-down hover:underline",
          onClick: () => t((i) => {
            i.acl.splice(o, 1);
          }),
          children: "remove"
        }
      )
    ] }, o)) }),
    /* @__PURE__ */ a.jsxs("div", { className: "grid gap-2 sm:grid-cols-4", children: [
      /* @__PURE__ */ a.jsx("input", { className: F, value: n.id, onChange: (s) => r({ ...n, id: s.target.value }) }),
      /* @__PURE__ */ a.jsxs("select", { className: F, value: n.action, onChange: (s) => r({ ...n, action: s.target.value }), children: [
        /* @__PURE__ */ a.jsx("option", { value: "deny", children: "deny" }),
        /* @__PURE__ */ a.jsx("option", { value: "permit", children: "permit" })
      ] }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: F,
          placeholder: "source / any",
          value: n.source,
          onChange: (s) => r({ ...n, source: s.target.value })
        }
      ),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: F,
          placeholder: "dest / any",
          value: n.dest,
          onChange: (s) => r({ ...n, dest: s.target.value })
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx(
      O,
      {
        variant: "outline",
        size: "sm",
        className: "mt-2",
        onClick: () => t((s) => {
          s.acl.push({
            ...n,
            raw: `access-list ${n.id} ${n.action} ip ${n.source === "any" ? "any" : `host ${n.source}`} ${n.dest === "any" ? "any" : `host ${n.dest}`}`
          });
        }),
        children: "Add rule"
      }
    )
  ] });
}
function gw({ device: e }) {
  const t = e.runtime, n = [
    ["CPU load", `${t.cpu.toFixed(0)}%`],
    ["Memory", `${t.memory.toFixed(0)}%`],
    ["Packets in", Math.round(t.packetsIn)],
    ["Packets out", Math.round(t.packetsOut)],
    ["Packets dropped", Math.round(t.packetsDropped)],
    ["Open sessions", t.sessions],
    ["Last exercise", t.lastExercise || "—"]
  ], r = Object.entries(e.arp);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(V, { children: "Runtime counters" }),
    /* @__PURE__ */ a.jsx("dl", { className: "mb-4 grid grid-cols-2 gap-x-4 gap-y-1.5 font-mono text-[12px]", children: n.map(([s, o]) => /* @__PURE__ */ a.jsxs(es.Fragment, { children: [
      /* @__PURE__ */ a.jsx("dt", { className: "text-soft", children: s }),
      /* @__PURE__ */ a.jsx("dd", { className: "text-right tabular-nums", children: o })
    ] }, s)) }),
    /* @__PURE__ */ a.jsx("div", { className: "mb-4 h-2 overflow-hidden rounded-full bg-line", children: /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "h-full rounded-full transition-all",
        style: {
          width: `${Math.min(100, t.cpu)}%`,
          background: t.cpu > 85 ? "rgb(var(--nr-down))" : t.cpu > 60 ? "rgb(var(--nr-warn))" : "rgb(var(--nr-up))"
        }
      }
    ) }),
    /* @__PURE__ */ a.jsx(V, { children: "ARP / neighbour table" }),
    r.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "font-mono text-[11.5px] text-soft", children: "Empty — generate traffic to populate it." }) : /* @__PURE__ */ a.jsx("ul", { className: "space-y-1 font-mono text-[11.5px]", children: r.map(([s, o]) => /* @__PURE__ */ a.jsxs("li", { className: o.spoofed ? "text-down" : "", children: [
      s,
      " → ",
      o.mac,
      " ",
      o.spoofed ? "  ⚠ duplicate (poisoned)" : ""
    ] }, s)) }),
    e.database && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(V, { className: "mt-4", children: "Mock database" }),
      /* @__PURE__ */ a.jsxs("p", { className: "font-mono text-[11.5px] text-soft", children: [
        e.database.name,
        " · tables: ",
        Object.keys(e.database.tables).join(", "),
        " ·",
        " ",
        e.database.queryLog.length,
        " queries logged"
      ] })
    ] })
  ] });
}
function xw({ device: e, edit: t }) {
  const n = b((i) => i.topology), r = n.devices.filter((i) => {
    var l;
    return (l = i.services) == null ? void 0 : l.radius;
  }), s = yx(n, e), o = ac(e.ap.security) || e.ap.portal;
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(V, { children: "Authentication" }),
    /* @__PURE__ */ a.jsx(
      W,
      {
        label: "RADIUS server",
        hint: o ? r.length ? "The server that decides who may join." : "No server on this network is running RADIUS yet — switch it on under a server’s Services." : "Only needed for 802.1X or a sign-in portal.",
        children: /* @__PURE__ */ a.jsxs(
          "select",
          {
            className: F,
            value: e.ap.radiusServerId || "",
            "aria-label": "RADIUS server",
            onChange: (i) => t((l) => {
              l.ap.radiusServerId = i.target.value;
            }),
            children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "none" }),
              r.map((i) => {
                var l;
                return /* @__PURE__ */ a.jsxs("option", { value: i.id, children: [
                  i.hostname,
                  (l = i.directory) != null && l.domain ? ` — ${i.directory.domain}` : ""
                ] }, i.id);
              })
            ]
          }
        )
      }
    ),
    o && !e.ap.radiusServerId && /* @__PURE__ */ a.jsx("p", { className: "mb-2 text-[11.5px] text-warn", children: "Nothing to ask, so nobody gets in. A gate that fails open would not be a gate, so this one stays shut." }),
    /* @__PURE__ */ a.jsx(
      ue,
      {
        label: "Captive portal (guest hotspot)",
        hint: "Clients associate freely, then sit at the gateway until they sign in. Associated is not admitted — that gap is the lesson.",
        checked: !!e.ap.portal,
        onChange: (i) => t((l) => {
          l.ap.portal = i;
        })
      }
    ),
    e.ap.portal && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(W, { label: "Portal name", hint: "What the sign-in page calls itself.", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          className: F,
          value: e.ap.portalName || "",
          "aria-label": "Portal name",
          onChange: (i) => t((l) => {
            l.ap.portalName = i.target.value;
          })
        }
      ) }),
      /* @__PURE__ */ a.jsxs(V, { children: [
        "Signed in — ",
        s.filter((i) => i.authenticated).length
      ] }),
      s.length ? /* @__PURE__ */ a.jsx("ul", { className: "space-y-1", children: s.map((i) => /* @__PURE__ */ a.jsxs("li", { className: "flex items-center gap-2 text-[12px]", children: [
        /* @__PURE__ */ a.jsx(Z, { tone: i.authenticated ? "up" : "warn", children: i.authenticated ? "in" : "blocked" }),
        /* @__PURE__ */ a.jsxs("span", { className: "min-w-0 flex-1 truncate", children: [
          i.host,
          i.username ? ` — ${i.username}` : "",
          !i.authenticated && i.reason ? /* @__PURE__ */ a.jsxs("span", { className: "text-soft", children: [
            " (",
            i.reason,
            ")"
          ] }) : null
        ] }),
        /* @__PURE__ */ a.jsx(O, { size: "sm", onClick: () => t((l) => xx(l, { id: i.deviceId })), children: "Sign out" })
      ] }, i.deviceId)) }) : /* @__PURE__ */ a.jsx("p", { className: "text-[11.5px] text-soft", children: "Nobody has opened the portal yet." })
    ] })
  ] });
}
function yw({ onClose: e }) {
  const t = b((m) => m.topology), n = b((m) => m.engine), r = b((m) => m.commit), s = b((m) => m.setActiveConsole), o = b((m) => m.ensureConsole);
  b((m) => m.rev);
  const i = t.devices, l = C.useMemo(
    () => i.find((m) => m.typeId === "pc") || i[0],
    [i]
  ), [c, u] = C.useState((l == null ? void 0 : l.id) || ""), [d, p] = C.useState(""), [h, f] = C.useState(fr.sqli.defaultPayload), g = i.find((m) => m.id === c), w = (m) => {
    o("attack", "Cyber Range"), s("attack");
    const x = fr[m], S = i.find(($) => $.id === d) || (x.needsTarget === !1 ? null : i.find(($) => $.id !== c && x.canTarget($)));
    or(m, {
      engine: n,
      attacker: g,
      target: S,
      commit: r,
      payload: m === "sqli" ? h : void 0
    });
  };
  return /* @__PURE__ */ a.jsxs(
    hn,
    {
      title: "Cyber Range",
      subtitle: "Synthetic exercises — nothing leaves this browser tab",
      icon: /* @__PURE__ */ a.jsx("span", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-down/40 bg-down/15 text-down", children: /* @__PURE__ */ a.jsx(oa, { size: 18 }) }),
      onClose: e,
      width: "max-w-xl",
      footer: /* @__PURE__ */ a.jsx("p", { className: "text-[11px] leading-snug text-soft", children: "Exercises are grouped by the phase of an engagement they belong to, because order is most of the method: you scan before you exploit, and you report rather than hoard. Every one of these runs against simulated devices in this tab — against a real network, the same actions need written authorisation and a defined scope." }),
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "mb-4 grid gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ a.jsx(W, { label: "Attacker node", children: /* @__PURE__ */ a.jsxs("select", { className: F, value: c, onChange: (m) => u(m.target.value), children: [
            i.length === 0 && /* @__PURE__ */ a.jsx("option", { value: "", children: "no devices placed" }),
            i.map((m) => /* @__PURE__ */ a.jsxs("option", { value: m.id, children: [
              m.hostname,
              " — ",
              _(m) || "no IP"
            ] }, m.id))
          ] }) }),
          /* @__PURE__ */ a.jsx(W, { label: "Target node", children: /* @__PURE__ */ a.jsxs("select", { className: F, value: d, onChange: (m) => p(m.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "auto-select a valid target" }),
            i.filter((m) => m.id !== c).map((m) => /* @__PURE__ */ a.jsxs("option", { value: m.id, children: [
              m.hostname,
              " — ",
              _(m) || "no IP"
            ] }, m.id))
          ] }) })
        ] }),
        cy.map((m) => {
          const x = Object.values(fr).filter((v) => v.phase === m);
          return x.length ? /* @__PURE__ */ a.jsxs("section", { children: [
            /* @__PURE__ */ a.jsx(V, { children: m }),
            x.map((v) => k(v))
          ] }, m) : null;
        })
      ]
    }
  );
  function k(m) {
    {
      const x = $s(m.icon), v = i.find(($) => $.id === d), S = m.category === "Wireless" ? !!(g && g.radio) : v ? m.canTarget(v) : i.some(($) => $.id !== c && m.canTarget($));
      return /* @__PURE__ */ a.jsxs("article", { className: "mb-2.5 rounded-xl border border-line bg-panel2 p-3", children: [
        /* @__PURE__ */ a.jsxs("h4", { className: "mb-1 flex items-center gap-2 text-[13px] font-bold", children: [
          /* @__PURE__ */ a.jsx(x, { size: 15, className: "text-down" }),
          m.label,
          !S && /* @__PURE__ */ a.jsx(Z, { tone: "warn", children: "no valid target" })
        ] }),
        /* @__PURE__ */ a.jsx("p", { className: "mb-2 text-[11.5px] leading-snug text-soft", children: m.summary }),
        /* @__PURE__ */ a.jsxs("dl", { className: "mb-2 space-y-1 rounded-lg border border-line bg-panel/60 p-2 text-[11px] leading-snug", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex gap-1.5", children: [
            /* @__PURE__ */ a.jsx("dt", { className: "shrink-0 font-semibold text-soft", children: "Looks like" }),
            /* @__PURE__ */ a.jsx("dd", { className: "min-w-0 text-ink/90", children: m.indicators })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex gap-1.5", children: [
            /* @__PURE__ */ a.jsx("dt", { className: "shrink-0 font-semibold text-soft", children: "Find it" }),
            /* @__PURE__ */ a.jsx("dd", { className: "min-w-0 text-ink/90", children: m.detect })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex gap-1.5", children: [
            /* @__PURE__ */ a.jsx("dt", { className: "shrink-0 font-semibold text-soft", children: "Then what" }),
            /* @__PURE__ */ a.jsx("dd", { className: "min-w-0 text-ink/90", children: m.nextStep })
          ] })
        ] }),
        m.needsPayload && /* @__PURE__ */ a.jsx(
          "input",
          {
            className: `${F} mb-2`,
            value: h,
            onChange: ($) => f($.target.value),
            "aria-label": "Injection payload"
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ a.jsx(O, { variant: "danger", size: "sm", disabled: !g || !S, onClick: () => w(m.id), children: "Run exercise" }),
          /* @__PURE__ */ a.jsxs("span", { className: "text-[11px] text-soft", children: [
            /* @__PURE__ */ a.jsx("strong", { className: "text-ink", children: "Defence:" }),
            " ",
            m.mitigation
          ] })
        ] })
      ] }, m.id);
    }
  }
}
function vw({ onClose: e }) {
  const t = b((c) => c.settings), n = b((c) => c.updateSettings), r = b((c) => c.resetTopology), s = b((c) => c.loadStarterTopology), o = b((c) => c.forgetSavedWorkspace), [i, l] = C.useState(!1);
  return /* @__PURE__ */ a.jsxs(
    hn,
    {
      title: "Settings",
      subtitle: "Stored in this browser only",
      icon: /* @__PURE__ */ a.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg border border-line bg-panel2 text-accent", children: /* @__PURE__ */ a.jsx(sa, { size: 18 }) }),
      onClose: e,
      width: "max-w-md",
      children: [
        /* @__PURE__ */ a.jsx(V, { children: "Appearance" }),
        /* @__PURE__ */ a.jsx(W, { label: "Theme", children: /* @__PURE__ */ a.jsx("div", { className: "flex gap-1.5", children: [
          ["light", "Light", rc],
          ["dark", "Dark", Ql]
        ].map(([c, u, d]) => /* @__PURE__ */ a.jsxs(
          O,
          {
            size: "sm",
            variant: t.theme === c ? "active" : "outline",
            onClick: () => n({ theme: c }),
            children: [
              /* @__PURE__ */ a.jsx(d, { size: 14 }),
              " ",
              u
            ]
          },
          c
        )) }) }),
        /* @__PURE__ */ a.jsx(V, { className: "mt-5", children: "Your work" }),
        /* @__PURE__ */ a.jsx(
          ue,
          {
            label: "Keep my work in this browser",
            hint: "Restores the canvas after a refresh or a closed tab. Stored only on this device — it is never sent anywhere. Use Save in the toolbar for a copy you can move between machines.",
            checked: t.autosave !== !1,
            onChange: (c) => n({ autosave: c })
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { className: "mt-2", children: [
          /* @__PURE__ */ a.jsxs(
            O,
            {
              size: "sm",
              onClick: () => {
                o(), l(!0);
              },
              disabled: i,
              children: [
                /* @__PURE__ */ a.jsx(_e, { size: 13 }),
                " ",
                i ? "Saved copy cleared" : "Clear the saved copy"
              ]
            }
          ),
          /* @__PURE__ */ a.jsx("p", { className: "mt-1 text-[11px] text-soft", children: "Forgets the stored workspace without touching what is on screen." })
        ] }),
        /* @__PURE__ */ a.jsx(V, { className: "mt-5", children: "Tool output" }),
        /* @__PURE__ */ a.jsx(
          ue,
          {
            label: "Add instructor notes to tool output",
            hint: "Off by default, so nmap and the scanner print what the real tools print and nothing else. Turn it on to have the hint and the mitigation appear inline while a class finds its feet — the Cyber Range panel always carries them either way.",
            checked: t.coaching === !0,
            onChange: (c) => n({ coaching: c })
          }
        ),
        /* @__PURE__ */ a.jsx(V, { className: "mt-5", children: "Live network" }),
        /* @__PURE__ */ a.jsx(
          ue,
          {
            label: "Background traffic",
            hint: "Idle hosts resolve names, fetch pages and refresh ARP, so the capture pane is never empty. Realtime mode only.",
            checked: t.ambient !== !1,
            onChange: (c) => n({ ambient: c })
          }
        ),
        /* @__PURE__ */ a.jsx(
          ue,
          {
            label: "Show canvas grid",
            checked: t.showGrid,
            onChange: (c) => n({ showGrid: c })
          }
        ),
        /* @__PURE__ */ a.jsx(
          ue,
          {
            label: "Show hostnames and addresses",
            checked: t.showLabels,
            onChange: (c) => n({ showLabels: c })
          }
        ),
        /* @__PURE__ */ a.jsx(V, { className: "mt-5", children: "Simulation" }),
        /* @__PURE__ */ a.jsx(W, { label: `Speed — ${t.speed}×`, hint: "Scales the virtual clock: packet flight, ping intervals and exercise pacing.", children: /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "range",
            min: "0.5",
            max: "3",
            step: "0.5",
            value: t.speed,
            onChange: (c) => n({ speed: Number(c.target.value) }),
            className: "w-full accent-[rgb(var(--nr-accent))]"
          }
        ) }),
        /* @__PURE__ */ a.jsx(V, { className: "mt-5", children: "Workspace" }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ a.jsxs(O, { variant: "outline", size: "sm", onClick: () => {
            r(), e();
          }, children: [
            /* @__PURE__ */ a.jsx(_e, { size: 14 }),
            " Clear workspace"
          ] }),
          /* @__PURE__ */ a.jsxs(O, { variant: "outline", size: "sm", onClick: () => {
            s(), e();
          }, children: [
            /* @__PURE__ */ a.jsx(ec, { size: 14 }),
            " Load starter segment"
          ] })
        ] }),
        /* @__PURE__ */ a.jsx(V, { className: "mt-5", children: "Keyboard" }),
        /* @__PURE__ */ a.jsx("dl", { className: "grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[12px]", children: [
          ["Ctrl + Z / Ctrl + Y", "Undo / redo"],
          ["Delete", "Remove selected device or cable"],
          ["Space", "Pause / resume the simulation"],
          ["C / V / P", "Cable tool / select tool / PDU tool"],
          ["F", "Fit everything in view"],
          ["Wheel · drag", "Zoom · pan the canvas"],
          ["Ctrl + D", "Duplicate selected device"],
          ["Ctrl + L", "Clear the active console"],
          ["Esc", "Close dialogs and deselect"]
        ].map(([c, u]) => /* @__PURE__ */ a.jsxs(es.Fragment, { children: [
          /* @__PURE__ */ a.jsx("dt", { className: "font-mono text-[11px] text-soft", children: c }),
          /* @__PURE__ */ a.jsx("dd", { children: u })
        ] }, c)) })
      ]
    }
  );
}
function kf(e) {
  const t = Ze(e);
  if (t === null) return null;
  const n = t >>> 24 & 255;
  return n < 128 ? { letter: "A", defaultPrefix: 8, note: "large networks" } : n < 192 ? { letter: "B", defaultPrefix: 16, note: "medium networks" } : n < 224 ? { letter: "C", defaultPrefix: 24, note: "small networks" } : n < 240 ? { letter: "D", defaultPrefix: null, note: "multicast" } : { letter: "E", defaultPrefix: null, note: "reserved / experimental" };
}
const Gt = (e, t) => {
  const [n, r] = t.split("/"), s = r === "0" ? 0 : 4294967295 << 32 - Number(r) >>> 0;
  return (e & s) >>> 0 === (Ze(n) & s) >>> 0;
};
function ww(e) {
  const t = Ze(e);
  return t === null ? null : Gt(t, "10.0.0.0/8") || Gt(t, "172.16.0.0/12") || Gt(t, "192.168.0.0/16") ? { kind: "private", label: "Private (RFC 1918)", routable: !1 } : Gt(t, "127.0.0.0/8") ? { kind: "loopback", label: "Loopback", routable: !1 } : Gt(t, "169.254.0.0/16") ? { kind: "link-local", label: "Link-local (APIPA)", routable: !1 } : Gt(t, "224.0.0.0/4") ? { kind: "multicast", label: "Multicast", routable: !1 } : Gt(t, "100.64.0.0/10") ? { kind: "cgnat", label: "Carrier-grade NAT", routable: !1 } : Gt(t, "240.0.0.0/4") ? { kind: "reserved", label: "Reserved", routable: !1 } : { kind: "public", label: "Public", routable: !0 };
}
function Ga(e) {
  const t = Ze(e);
  return t === null ? "" : [24, 16, 8, 0].map((n) => (t >>> n & 255).toString(2).padStart(8, "0")).join(".");
}
function jr(e, t) {
  if (!$e(e)) return null;
  const n = typeof t == "number" ? t : /^\d+$/.test(String(t)) ? Number(t) : qe(t);
  if (n == null || n < 0 || n > 32) return null;
  const r = Jh(n), s = Ze(r), o = Ze(e), i = (o & s) >>> 0, l = (i | ~s >>> 0) >>> 0, c = 2 ** (32 - n);
  let u, d, p;
  return n === 32 ? (u = 1, d = i, p = i) : n === 31 ? (u = 2, d = i, p = l) : (u = c - 2, d = i + 1 >>> 0, p = l - 1 >>> 0), {
    address: e,
    prefix: n,
    mask: r,
    cidr: `${St(i)}/${n}`,
    wildcard: St(~s >>> 0),
    network: St(i),
    broadcast: St(l),
    firstHost: St(d),
    lastHost: St(p),
    totalAddresses: c,
    usableHosts: u,
    isNetworkAddress: n < 31 && o === i,
    isBroadcastAddress: n < 31 && o === l,
    class: kf(e),
    scope: ww(e),
    binaryIp: Ga(e),
    binaryMask: Ga(r),
    binaryNetwork: Ga(St(i))
  };
}
function bw(e) {
  return e ? e.isNetworkAddress ? `${e.address} is the network address of ${e.cidr} — it identifies the subnet, so no host can use it.` : e.isBroadcastAddress ? `${e.address} is the broadcast address of ${e.cidr} — it reaches every host, so none can use it.` : null : null;
}
function kw(e) {
  const t = String(e || "").trim();
  if (!t) return { ok: !1, reason: "Enter an address, for example 192.168.1.10/24", error: "Enter an address, for example 192.168.1.10/24" };
  if (t.includes("/")) {
    const [s, o] = t.split("/"), i = s.trim(), l = Number(String(o).trim());
    return $e(i) ? !Number.isInteger(l) || l < 0 || l > 32 ? { ok: !1, reason: "Prefix length must be between 0 and 32.", error: "Prefix length must be between 0 and 32." } : { ok: !0, ip: i, prefix: l, assumed: !1 } : { ok: !1, reason: `${i} is not a valid IPv4 address.` };
  }
  const n = t.split(/\s+/);
  if (n.length >= 2) {
    const [s, o] = n;
    if (!$e(s)) return { ok: !1, reason: `${s} is not a valid IPv4 address.` };
    if (!$e(o)) return { ok: !1, reason: `${o} is not a valid subnet mask.` };
    const i = qe(o);
    return i === null ? { ok: !1, reason: `${o} is not a contiguous mask — the ones must be unbroken.` } : { ok: !0, ip: s, prefix: i, assumed: !1 };
  }
  if (!$e(t)) return { ok: !1, reason: `${t} is not a valid IPv4 address.` };
  const r = kf(t);
  return !r || r.defaultPrefix === null ? { ok: !1, reason: `Class ${r ? r.letter : "?"} addresses have no default mask — give a prefix.` } : { ok: !0, ip: t, prefix: r.defaultPrefix, assumed: !0 };
}
function Sw(e, t, n, r = 256) {
  const s = jr(e, t);
  if (!s) return { ok: !1, reason: "That is not a valid network.", error: "That is not a valid network." };
  if (n <= t)
    return { ok: !1, reason: `/${n} is not longer than /${t} — a split needs smaller blocks.` };
  if (n > 32) return { ok: !1, reason: "Prefix length cannot exceed 32.", error: "Prefix length cannot exceed 32." };
  const o = 2 ** (n - t);
  if (o > r)
    return { ok: !1, count: o, reason: `That would make ${o.toLocaleString()} subnets — too many to list.` };
  const i = 2 ** (32 - n), l = Ze(s.network), c = Array.from(
    { length: o },
    (u, d) => jr(St(l + d * i >>> 0), n)
  );
  return { ok: !0, count: o, rows: c };
}
function jw(e = 8, t = 32) {
  const n = [];
  for (let r = e; r <= t; r++) {
    const s = 2 ** (32 - r), o = Jh(r);
    n.push({
      prefix: r,
      mask: o,
      wildcard: St(~Ze(o) >>> 0),
      total: s,
      usable: r === 32 ? 1 : r === 31 ? 2 : s - 2,
      // Within the octet the prefix falls in, how far apart subnets sit.
      blockSize: r % 8 === 0 ? 256 : 2 ** (8 - r % 8),
      subnetsOfA24: r >= 24 ? 2 ** (r - 24) : null
    });
  }
  return n;
}
const $n = {
  cidr: "The subnet itself: its network address followed by the number of bits that identify the network.",
  mask: "The subnet mask. Every 1 bit marks a network bit; every 0 bit marks a host bit.",
  wildcard: "The mask inverted. Cisco access lists and OSPF match on this rather than the mask.",
  network: "The first address in the block. It names the subnet and cannot be given to a host.",
  broadcast: "The last address in the block. It reaches every host at once, so no single host can use it.",
  firstHost: "The lowest address you can assign — usually taken by the default gateway.",
  lastHost: "The highest address you can assign.",
  usableHosts: "Total addresses minus the network and broadcast addresses. A /31 and a /32 are exceptions.",
  totalAddresses: "Every address in the block, including the two that cannot be assigned.",
  class: "The legacy class the first octet falls into. Classful rules no longer route, but the defaults still show up in exams and in equipment defaults.",
  scope: "Whether this address is routable on the public internet, or reserved for private, loopback or link-local use.",
  binaryIp: "The address in binary. Network bits are highlighted; the rest identify the host.",
  binaryMask: "The mask in binary. The ones must be unbroken — that is what makes a mask valid.",
  blockSize: "How far apart consecutive subnets sit in the octet the prefix falls in. Counting in these steps finds a boundary instantly."
}, lo = [
  { key: "mask", label: "Subnet mask", placeholder: "255.255.255.0" },
  { key: "network", label: "Network address", placeholder: "192.168.1.0" },
  { key: "broadcast", label: "Broadcast address", placeholder: "192.168.1.255" },
  { key: "firstHost", label: "First usable host", placeholder: "192.168.1.1" },
  { key: "lastHost", label: "Last usable host", placeholder: "192.168.1.254" },
  { key: "usableHosts", label: "Usable hosts", placeholder: "254", numeric: !0 }
], Zi = {
  easy: { prefixes: [24], label: "Whole octets (/24)" },
  medium: { prefixes: [25, 26, 27, 28], label: "Inside the last octet (/25–/28)" },
  hard: { prefixes: [17, 18, 20, 22, 23, 29, 30], label: "Across octets (/17–/30)" }
}, Nw = Object.entries(Zi).map(([e, t]) => ({ id: e, ...t })), sd = (e, t) => e[Math.floor(t() * e.length)];
function Qi(e = "medium", t = Math.random) {
  const n = Zi[e] || Zi.medium, r = sd(n.prefixes, t), s = sd(
    [
      () => `192.168.${Math.floor(t() * 256)}.${Math.floor(t() * 256)}`,
      () => `172.${16 + Math.floor(t() * 16)}.${Math.floor(t() * 256)}.${Math.floor(t() * 256)}`,
      () => `10.${Math.floor(t() * 256)}.${Math.floor(t() * 256)}.${Math.floor(t() * 256)}`
    ],
    t
  )(), o = jr(s, r);
  return !o || o.isNetworkAddress || o.isBroadcastAddress ? Qi(e, t) : { ip: s, prefix: r, difficulty: e };
}
const Cw = (e) => String(e ?? "").trim().replace(/\s+/g, "");
function $w(e, t, n = {}) {
  const r = jr(e, t);
  if (!r) return { ok: !1, reason: "That question is not valid.", results: [], error: "That question is not valid.", results: [] };
  const s = t % 8 === 0 ? 256 : 2 ** (8 - t % 8), o = lo.map((c) => {
    const u = String(r[c.key]), d = Cw(n[c.key]);
    if (!d) return { ...c, state: "blank", expected: u, given: "" };
    const p = c.numeric ? Number(d.replace(/,/g, "")) === Number(u) : d === u;
    return {
      ...c,
      state: p ? "correct" : "wrong",
      expected: u,
      given: d,
      hint: p ? null : Pw(c.key, r, d, s)
    };
  }), i = o.filter((c) => c.state !== "blank"), l = o.filter((c) => c.state === "correct");
  return {
    ok: !0,
    results: o,
    info: r,
    answered: i.length,
    correct: l.length,
    total: lo.length,
    allCorrect: l.length === lo.length
  };
}
function Pw(e, t, n, r) {
  switch (e) {
    case "mask":
      return `/${t.prefix} means ${t.prefix} one-bits. Fill whole octets with 255 first, then work out the part-octet.`;
    case "network":
      return `Find the interesting octet, count up in steps of ${r}, and take the step at or below the address.`;
    case "broadcast":
      return `The broadcast sits one below the next network. Add ${r} to the network address, then subtract 1.`;
    case "firstHost":
      return "The first host is one above the network address.";
    case "lastHost":
      return "The last host is one below the broadcast address.";
    case "usableHosts":
      return Number(String(n).replace(/,/g, "")) === t.totalAddresses ? "Close — that is every address. Two of them cannot be given to a host." : `2^(32 − ${t.prefix}) gives the block size; subtract the network and broadcast addresses.`;
    default:
      return null;
  }
}
function Ew(e, t) {
  const n = jr(e, t);
  if (!n) return [];
  const r = Math.floor(t / 8), s = t % 8, o = s === 0 ? 256 : 2 ** (8 - s), i = s === 0 ? Math.max(0, r - 1) : r, c = e.split(".").map(Number)[i], u = Math.floor(c / o) * o;
  return [
    {
      title: "Write out the mask",
      detail: `/${t} is ${t} one-bits: ${r} full octet${r === 1 ? "" : "s"} of 255` + (s ? `, then ${s} bit${s === 1 ? "" : "s"} in the next octet.` : "."),
      result: n.mask
    },
    {
      title: "Find the interesting octet",
      detail: s === 0 ? `The prefix lands on an octet boundary, so octet ${i + 1} is where subnets step.` : `The prefix stops part-way through octet ${i + 1}, so that is the interesting octet.`,
      result: `octet ${i + 1}`
    },
    {
      title: "Work out the block size",
      detail: s === 0 ? "A whole-octet boundary steps in 256s." : `256 − ${256 - o} = ${o}. Subnets start every ${o} in that octet.`,
      result: String(o)
    },
    {
      title: "Count up to the address",
      detail: `Counting in ${o}s: ${Aw(o, c)}. ${c} falls in the ${u} block.`,
      result: n.network
    },
    {
      title: "Broadcast is one below the next block",
      detail: `${u} + ${o} = ${u + o}, minus 1.`,
      result: n.broadcast
    },
    {
      title: "Hosts sit between them",
      detail: "One above the network address, one below the broadcast address.",
      result: `${n.firstHost} – ${n.lastHost}`
    },
    {
      title: "Count the usable hosts",
      detail: `2^(32 − ${t}) = ${n.totalAddresses.toLocaleString()} addresses, minus the network and broadcast.`,
      result: `${n.usableHosts.toLocaleString()} usable`
    }
  ];
}
function Aw(e, t) {
  const n = [];
  for (let i = 0; i < 256; i += e) n.push(i);
  if (n.length <= 9) return n.join(", ");
  const r = Math.floor(t / e), s = Math.max(0, r - 2), o = n.slice(s, r + 3);
  return `${s > 0 ? "…, " : ""}${o.join(", ")}${r + 3 < n.length ? ", …" : ""}`;
}
function Iw({ onClose: e }) {
  const t = b((f) => f.topology), [n, r] = C.useState("192.168.10.37/24"), [s, o] = C.useState(26), [i, l] = C.useState("practice"), c = C.useMemo(() => kw(n), [n]), u = C.useMemo(
    () => c.ok ? jr(c.ip, c.prefix) : null,
    [c]
  ), d = bw(u), p = C.useMemo(
    () => u ? Sw(u.network, u.prefix, s) : null,
    [u, s]
  ), h = t.devices.flatMap((f) => f.interfaces.filter((g) => g.ip).map((g) => ({ device: f, iface: g }))).slice(0, 12);
  return /* @__PURE__ */ a.jsxs(
    hn,
    {
      title: "Subnet calculator",
      subtitle: "Hover any field for what it means",
      icon: /* @__PURE__ */ a.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg border border-line bg-panel2 text-accent", children: /* @__PURE__ */ a.jsx(ta, { size: 18 }) }),
      onClose: e,
      width: "max-w-3xl",
      children: [
        /* @__PURE__ */ a.jsx("nav", { className: "mb-4 flex flex-wrap gap-1.5", children: [["practice", "Practice"], ["calculator", "Check an address"], ["split", "Split a block"], ["table", "Prefix table"]].map(([f, g]) => /* @__PURE__ */ a.jsx(O, { size: "sm", variant: i === f ? "active" : "outline", onClick: () => l(f), children: g }, f)) }),
        i !== "practice" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(
            W,
            {
              label: "Address",
              hint: "Accepts 192.168.1.10/24, 192.168.1.10 255.255.255.0, or a bare address.",
              children: /* @__PURE__ */ a.jsx(
                "input",
                {
                  className: F,
                  value: n,
                  onChange: (f) => r(f.target.value),
                  spellCheck: !1,
                  "aria-label": "Address to analyse"
                }
              )
            }
          ),
          h.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "mb-4 flex flex-wrap gap-1.5", children: [
            /* @__PURE__ */ a.jsx("span", { className: "text-[11px] text-soft", children: "From your topology:" }),
            h.map(({ device: f, iface: g }) => /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: () => r(`${g.ip}/${qe(g.mask) ?? 24}`),
                className: "rounded-md border border-line bg-panel2 px-1.5 py-0.5 font-mono text-[10.5px] text-soft hover:border-accent hover:text-accent",
                title: `${f.hostname} ${g.name}`,
                children: g.ip
              },
              `${f.id}-${g.name}`
            ))
          ] }),
          !c.ok && /* @__PURE__ */ a.jsx("p", { className: "mb-3 text-[12.5px] text-down", children: c.error }),
          c.ok && c.assumed && /* @__PURE__ */ a.jsxs("p", { className: "mb-3 text-[11.5px] text-warn", children: [
            "No prefix given — assuming the classful default /",
            c.prefix,
            "."
          ] })
        ] }),
        i === "practice" && /* @__PURE__ */ a.jsx(Dw, {}),
        u && i === "calculator" && /* @__PURE__ */ a.jsx(Tw, { info: u, warning: d }),
        u && i === "split" && /* @__PURE__ */ a.jsx(Mw, { info: u, split: p, splitTo: s, setSplitTo: o }),
        i === "table" && /* @__PURE__ */ a.jsx(Lw, {})
      ]
    }
  );
}
function Et({ k: e, label: t, value: n, tone: r }) {
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "group relative rounded-lg border border-line bg-panel2 px-2.5 py-2",
      tabIndex: 0,
      title: $n[e] || "",
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-soft", children: t }),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `font-mono text-[13px] ${r === "down" ? "text-down" : r === "up" ? "text-up" : "text-ink"}`,
            children: n
          }
        ),
        $n[e] && /* @__PURE__ */ a.jsx("div", { className: "pointer-events-none absolute left-0 top-full z-20 mt-1 hidden w-60 rounded-lg border border-line bg-panel p-2 text-[11px] leading-snug text-soft shadow-xl group-hover:block group-focus:block", children: $n[e] })
      ]
    }
  );
}
function Tw({ info: e, warning: t }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    t && /* @__PURE__ */ a.jsx("p", { className: "mb-3 rounded-lg border border-warn/40 bg-warn/10 px-3 py-2 text-[12px] leading-snug text-warn", children: t }),
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3 grid gap-2 sm:grid-cols-3", children: [
      /* @__PURE__ */ a.jsx(Et, { k: "cidr", label: "Subnet", value: e.cidr, tone: "up" }),
      /* @__PURE__ */ a.jsx(Et, { k: "mask", label: "Mask", value: e.mask }),
      /* @__PURE__ */ a.jsx(Et, { k: "wildcard", label: "Wildcard", value: e.wildcard }),
      /* @__PURE__ */ a.jsx(Et, { k: "network", label: "Network", value: e.network }),
      /* @__PURE__ */ a.jsx(Et, { k: "broadcast", label: "Broadcast", value: e.broadcast }),
      /* @__PURE__ */ a.jsx(Et, { k: "usableHosts", label: "Usable hosts", value: e.usableHosts.toLocaleString() }),
      /* @__PURE__ */ a.jsx(Et, { k: "firstHost", label: "First host", value: e.firstHost }),
      /* @__PURE__ */ a.jsx(Et, { k: "lastHost", label: "Last host", value: e.lastHost }),
      /* @__PURE__ */ a.jsx(Et, { k: "totalAddresses", label: "Total addresses", value: e.totalAddresses.toLocaleString() })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3 flex flex-wrap gap-2", children: [
      /* @__PURE__ */ a.jsxs(Z, { tone: "accent", title: $n.class, children: [
        "Class ",
        e.class.letter
      ] }),
      /* @__PURE__ */ a.jsx(Z, { tone: e.scope.kind === "public" ? "warn" : "up", title: $n.scope, children: e.scope.label }),
      /* @__PURE__ */ a.jsxs(Z, { children: [
        e.prefix,
        " network bits · ",
        32 - e.prefix,
        " host bits"
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(V, { children: "In binary" }),
    /* @__PURE__ */ a.jsxs("div", { className: "rounded-lg border border-line bg-panel2 p-2.5 font-mono text-[11.5px] leading-relaxed", children: [
      /* @__PURE__ */ a.jsxs("div", { title: $n.binaryIp, children: [
        /* @__PURE__ */ a.jsx("span", { className: "text-soft", children: "address " }),
        /* @__PURE__ */ a.jsx("span", { className: "text-accent", children: e.binaryIp.slice(0, od(e.prefix)) }),
        /* @__PURE__ */ a.jsx("span", { className: "text-ink", children: e.binaryIp.slice(od(e.prefix)) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { title: $n.binaryMask, children: [
        /* @__PURE__ */ a.jsx("span", { className: "text-soft", children: "mask    " }),
        /* @__PURE__ */ a.jsx("span", { className: "text-ink", children: e.binaryMask })
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "mt-1.5 whitespace-normal text-[10.5px] text-soft", children: "The highlighted bits are fixed by the mask; everything after them numbers the hosts." })
    ] })
  ] });
}
function od(e) {
  const t = Math.floor(e / 8), n = e % 8;
  return t * 9 + (n || 0);
}
function Mw({ info: e, split: t, splitTo: n, setSplitTo: r }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(W, { label: `Split ${e.cidr} into /${n} subnets`, children: /* @__PURE__ */ a.jsx(
      "input",
      {
        type: "range",
        min: e.prefix + 1,
        max: 30,
        value: Math.max(e.prefix + 1, Math.min(30, n)),
        onChange: (s) => r(Number(s.target.value)),
        className: "w-full accent-[rgb(var(--nr-accent))]"
      }
    ) }),
    t != null && t.ok ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { className: "mb-2 text-[12px] text-soft", children: [
        t.count.toLocaleString(),
        " subnets of ",
        t.rows[0].usableHosts.toLocaleString(),
        " usable hosts each",
        t.truncated && ` — showing the first ${t.shown}`,
        "."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "max-h-[260px] overflow-auto rounded-lg border border-line", children: /* @__PURE__ */ a.jsxs("table", { className: "w-full border-collapse font-mono text-[11.5px]", children: [
        /* @__PURE__ */ a.jsx("thead", { className: "sticky top-0 bg-panel2 text-[9.5px] uppercase text-soft", children: /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("th", { className: "p-1.5 text-left", children: "#" }),
          /* @__PURE__ */ a.jsx("th", { className: "p-1.5 text-left", children: "Network" }),
          /* @__PURE__ */ a.jsx("th", { className: "p-1.5 text-left", children: "First host" }),
          /* @__PURE__ */ a.jsx("th", { className: "p-1.5 text-left", children: "Last host" }),
          /* @__PURE__ */ a.jsx("th", { className: "p-1.5 text-left", children: "Broadcast" })
        ] }) }),
        /* @__PURE__ */ a.jsx("tbody", { children: t.rows.map((s, o) => /* @__PURE__ */ a.jsxs("tr", { className: "border-t border-line", children: [
          /* @__PURE__ */ a.jsx("td", { className: "p-1.5 text-soft", children: o }),
          /* @__PURE__ */ a.jsx("td", { className: "p-1.5", children: s.cidr }),
          /* @__PURE__ */ a.jsx("td", { className: "p-1.5", children: s.firstHost }),
          /* @__PURE__ */ a.jsx("td", { className: "p-1.5", children: s.lastHost }),
          /* @__PURE__ */ a.jsx("td", { className: "p-1.5", children: s.broadcast })
        ] }, s.network)) })
      ] }) })
    ] }) : /* @__PURE__ */ a.jsx("p", { className: "text-[12.5px] text-soft", children: (t == null ? void 0 : t.error) || "Choose a longer prefix." })
  ] });
}
function Lw() {
  const e = jw(16, 30);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx("p", { className: "mb-2 text-[12px] leading-snug text-soft", children: "The block size column is the one worth memorising: it is the gap between consecutive subnets in the last octet, which is how you find a subnet boundary without a calculator." }),
    /* @__PURE__ */ a.jsx("div", { className: "max-h-[320px] overflow-auto rounded-lg border border-line", children: /* @__PURE__ */ a.jsxs("table", { className: "w-full border-collapse font-mono text-[11.5px]", children: [
      /* @__PURE__ */ a.jsx("thead", { className: "sticky top-0 bg-panel2 text-[9.5px] uppercase text-soft", children: /* @__PURE__ */ a.jsxs("tr", { children: [
        /* @__PURE__ */ a.jsx("th", { className: "p-1.5 text-left", children: "Prefix" }),
        /* @__PURE__ */ a.jsx("th", { className: "p-1.5 text-left", children: "Mask" }),
        /* @__PURE__ */ a.jsx("th", { className: "p-1.5 text-left", children: "Wildcard" }),
        /* @__PURE__ */ a.jsx("th", { className: "p-1.5 text-right", children: "Usable hosts" }),
        /* @__PURE__ */ a.jsx("th", { className: "p-1.5 text-right", children: "Block size" })
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: e.map((t) => /* @__PURE__ */ a.jsxs("tr", { className: "border-t border-line", children: [
        /* @__PURE__ */ a.jsxs("td", { className: "p-1.5 text-accent", children: [
          "/",
          t.prefix
        ] }),
        /* @__PURE__ */ a.jsx("td", { className: "p-1.5", children: t.mask }),
        /* @__PURE__ */ a.jsx("td", { className: "p-1.5 text-soft", children: t.wildcard }),
        /* @__PURE__ */ a.jsx("td", { className: "p-1.5 text-right tabular-nums", children: t.usable.toLocaleString() }),
        /* @__PURE__ */ a.jsx("td", { className: "p-1.5 text-right tabular-nums", children: t.blockSize })
      ] }, t.prefix)) })
    ] }) })
  ] });
}
function Dw() {
  const [e, t] = C.useState("medium"), [n, r] = C.useState(() => Qi("medium")), [s, o] = C.useState({}), [i, l] = C.useState(null), [c, u] = C.useState(!1), [d, p] = C.useState({ attempted: 0, solved: 0 }), h = C.useMemo(() => Ew(n.ip, n.prefix), [n]), f = (k = e) => {
    t(k), r(Qi(k)), o({}), l(null), u(!1);
  }, g = () => {
    const k = $w(n.ip, n.prefix, s);
    l(k), p((m) => ({
      attempted: m.attempted + 1,
      solved: m.solved + (k.allCorrect ? 1 : 0)
    }));
  }, w = (k) => i == null ? void 0 : i.results.find((m) => m.key === k);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3 flex flex-wrap items-center gap-2", children: [
      Nw.map((k) => /* @__PURE__ */ a.jsx(
        O,
        {
          size: "sm",
          variant: e === k.id ? "active" : "outline",
          onClick: () => f(k.id),
          children: k.label
        },
        k.id
      )),
      /* @__PURE__ */ a.jsxs("span", { className: "ml-auto font-mono text-[11px] text-soft", children: [
        d.solved,
        "/",
        d.attempted,
        " fully correct"
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "mb-4 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3", children: [
      /* @__PURE__ */ a.jsx("p", { className: "mb-1 text-[11px] font-bold uppercase tracking-wider text-soft", children: "Work out this subnet" }),
      /* @__PURE__ */ a.jsxs("p", { className: "font-mono text-[22px] font-bold tracking-tight text-ink", children: [
        n.ip,
        /* @__PURE__ */ a.jsxs("span", { className: "text-accent", children: [
          "/",
          n.prefix
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "mb-3 grid gap-2.5 sm:grid-cols-2", children: lo.map((k) => {
      const m = w(k.key), x = (m == null ? void 0 : m.state) === "correct" ? "border-up/60 bg-up/10" : (m == null ? void 0 : m.state) === "wrong" ? "border-down/60 bg-down/10" : "border-line bg-panel2";
      return /* @__PURE__ */ a.jsxs("div", { className: `rounded-lg border ${x} p-2.5`, children: [
        /* @__PURE__ */ a.jsxs("label", { className: "mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-soft", children: [
          k.label,
          (m == null ? void 0 : m.state) === "correct" && /* @__PURE__ */ a.jsx(Pr, { size: 12, className: "text-up" }),
          (m == null ? void 0 : m.state) === "wrong" && /* @__PURE__ */ a.jsx(_n, { size: 12, className: "text-down" })
        ] }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            className: F,
            value: s[k.key] ?? "",
            placeholder: k.placeholder,
            spellCheck: !1,
            onChange: (v) => o((S) => ({ ...S, [k.key]: v.target.value })),
            onKeyDown: (v) => {
              v.key === "Enter" && g();
            },
            "aria-label": k.label
          }
        ),
        (m == null ? void 0 : m.state) === "wrong" && /* @__PURE__ */ a.jsxs("p", { className: "mt-1.5 flex gap-1.5 text-[11px] leading-snug text-soft", children: [
          /* @__PURE__ */ a.jsx(na, { size: 11, className: "mt-0.5 shrink-0 text-warn" }),
          /* @__PURE__ */ a.jsx("span", { children: m.hint })
        ] })
      ] }, k.key);
    }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3 flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ a.jsx(O, { variant: "primary", size: "sm", onClick: g, children: "Check my answers" }),
      /* @__PURE__ */ a.jsxs(O, { variant: "outline", size: "sm", onClick: () => f(), children: [
        /* @__PURE__ */ a.jsx(ec, { size: 13 }),
        " New question"
      ] }),
      /* @__PURE__ */ a.jsx(O, { variant: "ghost", size: "sm", onClick: () => u((k) => !k), children: c ? "Hide the method" : "Show me the method" })
    ] }),
    i && /* @__PURE__ */ a.jsx(
      "p",
      {
        className: `mb-3 rounded-lg border px-3 py-2 text-[12.5px] ${i.allCorrect ? "border-up/50 bg-up/10 text-up" : "border-warn/50 bg-warn/10 text-warn"}`,
        children: i.allCorrect ? "All six correct — that is the whole method applied cleanly." : `${i.correct} of ${i.total} correct. Read the hints, fix those boxes and check again.`
      }
    ),
    c && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(V, { children: "How to work it out" }),
      /* @__PURE__ */ a.jsx("ol", { className: "space-y-1.5", children: h.map((k, m) => /* @__PURE__ */ a.jsxs("li", { className: "flex gap-2.5 rounded-lg border border-line bg-panel2 p-2.5", children: [
        /* @__PURE__ */ a.jsx("span", { className: "grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 font-mono text-[10px] font-bold text-accent", children: m + 1 }),
        /* @__PURE__ */ a.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ a.jsx("div", { className: "text-[12.5px] font-semibold", children: k.title }),
          /* @__PURE__ */ a.jsx("div", { className: "text-[11.5px] leading-snug text-soft", children: k.detail }),
          /* @__PURE__ */ a.jsx("div", { className: "mt-0.5 font-mono text-[11.5px] text-accent", children: k.result })
        ] })
      ] }, k.title)) })
    ] })
  ] });
}
function Rw({ onClose: e }) {
  const t = b((r) => r.challengeRole), n = b((r) => r.setChallengeRole);
  return b((r) => r.challenge), /* @__PURE__ */ a.jsxs(
    hn,
    {
      title: "Red team vs Blue team",
      subtitle: "Harden a network, hand it over, see what holds",
      icon: /* @__PURE__ */ a.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg border border-line bg-panel2 text-accent", children: /* @__PURE__ */ a.jsx(ys, { size: 18 }) }),
      onClose: e,
      width: "max-w-3xl",
      children: [
        !t && /* @__PURE__ */ a.jsx(zw, { setRole: n }),
        t === "blue" && /* @__PURE__ */ a.jsx(Ow, {}),
        t === "red" && /* @__PURE__ */ a.jsx(_w, {})
      ]
    }
  );
}
function zw({ setRole: e }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx("p", { className: "mb-4 text-[12.5px] leading-relaxed text-soft", children: "One team builds a network and locks it down. The other team gets it exactly as it was left and tries to meet the objectives against it. Scoring runs from the same rules on both sides." }),
    /* @__PURE__ */ a.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          onClick: () => e("blue"),
          className: "rounded-xl border border-accent/50 bg-accent/10 p-4 text-left hover:border-accent",
          children: [
            /* @__PURE__ */ a.jsxs("div", { className: "mb-1 flex items-center gap-2 font-bold", children: [
              /* @__PURE__ */ a.jsx(ys, { size: 16, className: "text-accent" }),
              " Blue team"
            ] }),
            /* @__PURE__ */ a.jsx("p", { className: "text-[12px] leading-snug text-soft", children: "Build and harden the network, then export a challenge code to hand over." })
          ]
        }
      ),
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          onClick: () => e("red"),
          className: "rounded-xl border border-down/50 bg-down/10 p-4 text-left hover:border-down",
          children: [
            /* @__PURE__ */ a.jsxs("div", { className: "mb-1 flex items-center gap-2 font-bold", children: [
              /* @__PURE__ */ a.jsx(Bh, { size: 16, className: "text-down" }),
              " Red team"
            ] }),
            /* @__PURE__ */ a.jsx("p", { className: "text-[12px] leading-snug text-soft", children: "Paste a challenge code, load their network, and work the objectives." })
          ]
        }
      )
    ] })
  ] });
}
function Ow() {
  const e = b((N) => N.challengePhase), t = b((N) => N.challengeScenario), n = b((N) => N.challengeDeadline), r = b((N) => N.challengeCode), s = b((N) => N.startSetup), o = b((N) => N.armChallenge), i = b((N) => N.tickChallenge), l = b((N) => N.readiness), c = b((N) => N.endChallenge), u = b((N) => N.staffNetwork), d = b((N) => N.openSocial), p = b((N) => N.topology), h = p.personnel || [];
  b((N) => N.rev);
  const [f, g] = C.useState("small-office"), [w, k] = C.useState(20), [m, x] = C.useState(15), [v, S] = C.useState(""), [$, y] = C.useState("Blue team"), [P, A] = C.useState(!1), [B, L] = C.useState(!0), [Y, ee] = C.useState(Date.now());
  C.useEffect(() => {
    const N = setInterval(() => {
      ee(Date.now()), i();
    }, 1e3);
    return () => clearInterval(N);
  }, [i]);
  const ne = io(f);
  if (C.useEffect(() => {
    k(ne.setupMinutes), x(ne.breachMinutes), S(`${ne.name} — round 1`);
  }, [f]), e === "idle" || !t)
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("p", { className: "mb-3 text-[12.5px] leading-relaxed text-soft", children: "Pick a scenario. You get a build window to deploy the required nodes and secure them; when it closes the network locks and becomes the board the other team attacks." }),
      /* @__PURE__ */ a.jsx("div", { className: "mb-3 space-y-2", children: Ry.map((N) => /* @__PURE__ */ a.jsxs(
        "label",
        {
          className: `flex cursor-pointer gap-3 rounded-xl border p-3 ${f === N.id ? "border-accent bg-accent/10" : "border-line bg-panel2"}`,
          children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "radio",
                className: "mt-1 accent-[rgb(var(--nr-accent))]",
                checked: f === N.id,
                onChange: () => g(N.id)
              }
            ),
            /* @__PURE__ */ a.jsxs("span", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ a.jsxs("span", { className: "flex flex-wrap items-center gap-2 text-[13px] font-bold", children: [
                N.name,
                /* @__PURE__ */ a.jsxs(Z, { tone: "accent", children: [
                  N.nodes,
                  " nodes"
                ] }),
                /* @__PURE__ */ a.jsxs(Z, { children: [
                  N.setupMinutes,
                  " min build"
                ] }),
                /* @__PURE__ */ a.jsxs(Z, { children: [
                  N.breachMinutes,
                  " min breach"
                ] })
              ] }),
              /* @__PURE__ */ a.jsx("span", { className: "mt-0.5 block text-[11.5px] leading-snug text-soft", children: N.brief })
            ] })
          ]
        },
        N.id
      )) }),
      /* @__PURE__ */ a.jsxs("div", { className: "grid gap-3 sm:grid-cols-4", children: [
        /* @__PURE__ */ a.jsx(W, { label: "Challenge name", children: /* @__PURE__ */ a.jsx("input", { className: F, value: v, onChange: (N) => S(N.target.value) }) }),
        /* @__PURE__ */ a.jsx(W, { label: "Your team", children: /* @__PURE__ */ a.jsx("input", { className: F, value: $, onChange: (N) => y(N.target.value) }) }),
        /* @__PURE__ */ a.jsx(W, { label: "Build minutes", children: /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "number",
            min: "5",
            max: "60",
            className: F,
            value: w,
            onChange: (N) => k(Number(N.target.value) || 20)
          }
        ) }),
        /* @__PURE__ */ a.jsx(W, { label: "Breach minutes", children: /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "number",
            min: "5",
            max: "60",
            className: F,
            value: m,
            onChange: (N) => x(Number(N.target.value) || 15)
          }
        ) })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "my-3 rounded-xl border border-line bg-panel2 p-3", children: /* @__PURE__ */ a.jsx(
        ue,
        {
          id: "staff-network",
          checked: B,
          onChange: L,
          label: "Staff the network with technicians",
          hint: "A senior and a junior technician answer the phone for this network. The other team can try to talk them into something, which adds two objectives and makes awareness training, a callback policy and least privilege worth having. Their replies are scripted, not generated."
        }
      ) }),
      /* @__PURE__ */ a.jsx(
        O,
        {
          variant: "primary",
          size: "lg",
          onClick: () => {
            s(f, { setupMinutes: w, breachMinutes: m, name: v, author: $ }), u(B);
          },
          children: "Start the build window"
        }
      ),
      /* @__PURE__ */ a.jsx("p", { className: "mt-2 text-[11.5px] text-soft", children: "The clock starts immediately. You can close this panel and keep building — the countdown stays in the toolbar." })
    ] });
  if (e === "armed")
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("div", { className: "mb-3 flex items-center gap-2 rounded-xl border border-up/50 bg-up/10 p-3", children: [
        /* @__PURE__ */ a.jsx(pn, { size: 16, className: "shrink-0 text-up" }),
        /* @__PURE__ */ a.jsxs("div", { className: "min-w-0 text-[12.5px]", children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Build locked." }),
          " The defensive settings are frozen into the code, so the other team cannot weaken them from their own copy."
        ] })
      ] }),
      /* @__PURE__ */ a.jsx(V, { children: "Hand this to the other team" }),
      /* @__PURE__ */ a.jsx(
        "textarea",
        {
          readOnly: !0,
          value: r,
          onFocus: (N) => N.target.select(),
          className: "h-32 w-full resize-none rounded-lg border border-line bg-panel2 p-2 font-mono text-[10.5px] text-ink",
          "aria-label": "Challenge code"
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ a.jsxs(
          O,
          {
            variant: "outline",
            size: "sm",
            onClick: async () => {
              try {
                await navigator.clipboard.writeText(r), A(!0);
              } catch {
                A(!1);
              }
            },
            children: [
              /* @__PURE__ */ a.jsx(ql, { size: 13 }),
              " ",
              P ? "Copied" : "Copy code"
            ]
          }
        ),
        /* @__PURE__ */ a.jsx(O, { variant: "ghost", size: "sm", onClick: c, children: "Start a new round" }),
        /* @__PURE__ */ a.jsxs("span", { className: "text-[11px] text-soft", children: [
          r.length.toLocaleString(),
          " characters"
        ] })
      ] })
    ] });
  const te = l(), Be = Math.max(0, Math.floor(((n || Y) - Y) / 1e3)), M = `${Math.floor(Be / 60)}:${String(Be % 60).padStart(2, "0")}`, we = Be < 180, D = { high: "down", medium: "warn", low: "neutral" };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3 flex flex-wrap items-center gap-3 rounded-xl border border-line bg-panel2 p-3", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ a.jsx("div", { className: "text-[13px] font-bold", children: t.name }),
        /* @__PURE__ */ a.jsx("div", { className: "text-[11.5px] leading-snug text-soft", children: t.brief })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ a.jsx("div", { className: `font-mono text-[26px] font-bold tabular-nums ${we ? "text-down" : "text-ink"}`, children: M }),
        /* @__PURE__ */ a.jsx("div", { className: "text-[10.5px] text-soft", children: "build window" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs(V, { children: [
      "Required build — ",
      te.roster.placed,
      "/",
      te.roster.required,
      " nodes"
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "mb-3 h-2 overflow-hidden rounded-full bg-line", children: /* @__PURE__ */ a.jsx("div", { className: "h-full rounded-full bg-accent transition-all", style: { width: `${te.roster.percent}%` } }) }),
    /* @__PURE__ */ a.jsx("div", { className: "mb-3 grid gap-1.5 sm:grid-cols-2", children: te.roster.rows.map((N) => /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-[12px] ${N.ok ? "border-up/50 bg-up/10" : "border-line bg-panel2"}`,
        children: [
          N.ok ? /* @__PURE__ */ a.jsx(Pr, { size: 13, className: "shrink-0 text-up" }) : /* @__PURE__ */ a.jsx(_n, { size: 13, className: "shrink-0 text-soft" }),
          /* @__PURE__ */ a.jsx("span", { className: "min-w-0 flex-1 truncate", children: N.label }),
          /* @__PURE__ */ a.jsxs("span", { className: "font-mono text-[11px] text-soft", children: [
            Math.min(N.placed, N.count),
            "/",
            N.count
          ] })
        ]
      },
      N.typeId
    )) }),
    h.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(V, { children: "Your technicians" }),
      /* @__PURE__ */ a.jsx("div", { className: "mb-3 grid gap-1.5 sm:grid-cols-2", children: h.map((N) => {
        const H = (p.zones || []).find((T) => T.id === N.areaZoneId);
        return /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-line bg-panel2 px-2.5 py-1.5 text-[12px]", children: [
          /* @__PURE__ */ a.jsx(sc, { size: 13, className: `shrink-0 ${N.roleId === "senior" ? "text-up" : "text-warn"}` }),
          /* @__PURE__ */ a.jsxs("span", { className: "min-w-0 flex-1 truncate", children: [
            N.name,
            " ",
            /* @__PURE__ */ a.jsxs("span", { className: "text-soft", children: [
              "— ",
              N.roleId
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("span", { className: "truncate text-[11px] text-soft", children: H ? H.name : "whole site" })
        ] }, N.id);
      }) }),
      /* @__PURE__ */ a.jsxs("p", { className: "mb-3 text-[11.5px] leading-snug text-soft", children: [
        "Add sections to the canvas and assign each technician a patch in the",
        " ",
        /* @__PURE__ */ a.jsx("button", { className: "underline hover:text-ink", onClick: d, children: "People" }),
        " panel. Awareness training and a callback policy live on each host, under Security."
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs(V, { children: [
      "Hardening — ",
      te.hardening.score,
      "/100"
    ] }),
    te.hardening.findings.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "mb-3 text-[12px] text-up", children: "Nothing obvious left open." }) : /* @__PURE__ */ a.jsx("ul", { className: "mb-3 max-h-[132px] space-y-1 overflow-y-auto", children: te.hardening.findings.map((N, H) => /* @__PURE__ */ a.jsxs("li", { className: "flex items-start gap-2 text-[11.5px] leading-snug", children: [
      /* @__PURE__ */ a.jsx(Z, { tone: D[N.severity], children: N.severity }),
      /* @__PURE__ */ a.jsxs("span", { className: "min-w-0", children: [
        /* @__PURE__ */ a.jsx("span", { className: "font-mono text-ink", children: N.device }),
        " ",
        /* @__PURE__ */ a.jsx("span", { className: "text-soft", children: N.text })
      ] })
    ] }, H)) }),
    te.blockers.length > 0 && /* @__PURE__ */ a.jsx("ul", { className: "mb-3 space-y-1", children: te.blockers.map((N, H) => /* @__PURE__ */ a.jsxs("li", { className: "text-[11.5px] text-warn", children: [
      "• ",
      N
    ] }, H)) }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ a.jsxs(O, { variant: "primary", size: "sm", onClick: o, children: [
        /* @__PURE__ */ a.jsx(pn, { size: 13 }),
        " Lock the build and hand over"
      ] }),
      /* @__PURE__ */ a.jsx(O, { variant: "ghost", size: "sm", onClick: c, children: "Abandon round" }),
      !te.ready && /* @__PURE__ */ a.jsx("span", { className: "text-[11px] text-soft", children: "You can hand over early — unfinished work counts against you." })
    ] })
  ] });
}
function _w() {
  const e = b((y) => y.challenge), t = b((y) => y.loadChallenge), n = b((y) => y.challengeScore), r = b((y) => y.challengeStartedAt), s = b((y) => y.challengeDeadline), o = b((y) => y.challengePhase), i = b((y) => y.tickChallenge), l = b((y) => y.endChallenge), c = b((y) => y.openSocial), u = b((y) => y.topology.personnel || []);
  b((y) => y.rev);
  const [d, p] = C.useState(""), [h, f] = C.useState(""), [g, w] = C.useState(""), [k, m] = C.useState(Date.now());
  if (C.useEffect(() => {
    const y = setInterval(() => {
      m(Date.now()), i();
    }, 1e3);
    return () => clearInterval(y);
  }, [i]), !e)
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(W, { label: "Challenge code", hint: "Paste the code the other team sent you.", children: /* @__PURE__ */ a.jsx(
        "textarea",
        {
          value: d,
          onChange: (y) => {
            p(y.target.value), f("");
          },
          placeholder: "NRC1.…",
          className: "h-28 w-full resize-none rounded-lg border border-line bg-panel2 p-2 font-mono text-[10.5px] text-ink",
          "aria-label": "Challenge code to load"
        }
      ) }),
      h && /* @__PURE__ */ a.jsx("p", { className: "mb-2 text-[12.5px] text-down", children: h }),
      /* @__PURE__ */ a.jsx(
        O,
        {
          variant: "primary",
          size: "lg",
          onClick: () => {
            const y = t(d);
            y.ok || f(y.reason);
          },
          children: "Load challenge"
        }
      ),
      /* @__PURE__ */ a.jsx("p", { className: "mt-3 text-[11.5px] leading-snug text-soft", children: "Loading replaces the workspace with their network and clears the capture buffer, so you start from the same place they left it." })
    ] });
  const x = n(), v = Math.floor((k - (r || k)) / 1e3), S = o === "over" ? 0 : Math.max(0, Math.floor(((s || k) - k) / 1e3)), $ = (y) => `${Math.floor(y / 60)}:${String(y % 60).padStart(2, "0")}`;
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3 flex flex-wrap items-center gap-3 rounded-xl border border-line bg-panel2 p-3", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ a.jsx("div", { className: "truncate text-[14px] font-bold", children: e.name }),
        /* @__PURE__ */ a.jsxs("div", { className: "text-[11.5px] text-soft", children: [
          "built by ",
          e.author
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs(Z, { tone: S === 0 ? "down" : S < 120 ? "warn" : "neutral", children: [
        /* @__PURE__ */ a.jsx(Ih, { size: 11 }),
        " ",
        S === 0 ? "time up" : $(S)
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "font-mono text-[22px] font-bold tabular-nums", children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-down", children: x.red }),
          /* @__PURE__ */ a.jsxs("span", { className: "text-soft", children: [
            " / ",
            x.total
          ] })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "text-[10.5px] text-soft", children: "red score" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "mb-3 h-2 overflow-hidden rounded-full bg-line", children: /* @__PURE__ */ a.jsx("div", { className: "h-full rounded-full bg-down transition-all", style: { width: `${x.redPercent}%` } }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3 flex items-center gap-2 rounded-lg border border-line bg-panel2 px-3 py-2", children: [
      /* @__PURE__ */ a.jsx(pn, { size: 13, className: "shrink-0 text-soft" }),
      /* @__PURE__ */ a.jsx("span", { className: "text-[11.5px] leading-snug text-soft", children: "Their defensive settings are frozen for this round. Changing one on your copy reverts it — you have to get through what they built, not edit it." })
    ] }),
    /* @__PURE__ */ a.jsx(V, { children: "Objectives" }),
    /* @__PURE__ */ a.jsx("div", { className: "mb-3 space-y-1.5", children: x.results.map((y) => /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `flex gap-2.5 rounded-lg border p-2.5 ${y.captured ? "border-down/50 bg-down/10" : "border-line bg-panel2"}`,
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "mt-0.5 shrink-0", children: y.captured ? /* @__PURE__ */ a.jsx(Pr, { size: 15, className: "text-down" }) : /* @__PURE__ */ a.jsx(_n, { size: 15, className: "text-soft" }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[12.5px] font-semibold", children: [
              y.label,
              /* @__PURE__ */ a.jsxs(Z, { tone: y.captured ? "down" : "neutral", children: [
                y.points,
                " pts"
              ] }),
              /* @__PURE__ */ a.jsx(Z, { children: y.phase })
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "text-[11.5px] leading-snug text-soft", children: y.captured ? y.blue : y.red })
          ] })
        ]
      },
      y.id
    )) }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap gap-2", children: [
      u.length > 0 && /* @__PURE__ */ a.jsxs(O, { variant: "danger", size: "sm", onClick: () => c(), children: [
        /* @__PURE__ */ a.jsx(pr, { size: 13 }),
        " Call their technicians (",
        u.length,
        ")"
      ] }),
      /* @__PURE__ */ a.jsx(
        O,
        {
          variant: "outline",
          size: "sm",
          onClick: () => w(Ly(e, x, { elapsedSeconds: v })),
          children: "Generate result code"
        }
      ),
      /* @__PURE__ */ a.jsx(O, { variant: "ghost", size: "sm", onClick: l, children: "End challenge" })
    ] }),
    g && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(V, { className: "mt-4", children: "Send this back to them" }),
      /* @__PURE__ */ a.jsx(
        "textarea",
        {
          readOnly: !0,
          value: g,
          onFocus: (y) => y.target.select(),
          className: "h-20 w-full resize-none rounded-lg border border-line bg-panel2 p-2 font-mono text-[10.5px] text-ink",
          "aria-label": "Result code"
        }
      )
    ] })
  ] });
}
function Fw({ onClose: e }) {
  var $;
  const t = b((y) => y.topology), n = t.personnel || [], r = b((y) => y.socialTarget), s = b((y) => y.setSocialTarget), o = b((y) => y.socialAttempt), i = b((y) => y.staffNetwork), l = b((y) => y.assignTechnician), c = b((y) => y.challengeRole), u = b((y) => y.rev), [d, p] = C.useState("authority"), [h, f] = C.useState("confirm-username"), [g, w] = C.useState(""), k = C.useRef(null), m = n.find((y) => y.id === r) || n[0], x = C.useMemo(() => {
    var P;
    const y = [];
    for (const A of t.devices) {
      if (A.role === "attacker") continue;
      y.push({ value: A.hostname, label: `${A.hostname} — hostname` });
      const B = _(A);
      B && y.push({ value: B, label: `${B} — address of ${A.hostname}` }), (P = A.ap) != null && P.ssid && y.push({ value: A.ap.ssid, label: `${A.ap.ssid} — wireless network` });
    }
    return y;
  }, [t.devices, u]);
  C.useEffect(() => {
    var y;
    (y = k.current) == null || y.scrollTo({ top: k.current.scrollHeight, behavior: "smooth" });
  }, [($ = m == null ? void 0 : m.transcript) == null ? void 0 : $.length]);
  const v = () => {
    m && o({ technicianId: m.id, tactic: d, ask: h, claim: g });
  };
  if (!n.length)
    return /* @__PURE__ */ a.jsxs(
      hn,
      {
        title: "The human layer",
        subtitle: "Synthetic technicians — scripted, not a language model",
        icon: /* @__PURE__ */ a.jsx(ad, { children: /* @__PURE__ */ a.jsx(pr, { size: 18 }) }),
        onClose: e,
        width: "max-w-2xl",
        children: [
          /* @__PURE__ */ a.jsxs("p", { className: "text-[13px] leading-relaxed text-soft", children: [
            "Every control in this lab can be undone by someone being talked into undoing it, so the network can be staffed with two technicians: a ",
            /* @__PURE__ */ a.jsx("strong", { className: "text-ink", children: "senior" }),
            " who follows process under pressure, and a ",
            /* @__PURE__ */ a.jsx("strong", { className: "text-ink", children: "junior" }),
            " who wants to be helpful and holds a supervisor account he has not been taught to be careful with."
          ] }),
          /* @__PURE__ */ a.jsx("p", { className: "mt-3 text-[13px] leading-relaxed text-soft", children: "Assign them during the build window and the other team can try to talk them into something. Their replies come from a state machine, so the same pretext always gets the same answer and the debrief can show you exactly why." }),
          /* @__PURE__ */ a.jsx("div", { className: "mt-4", children: /* @__PURE__ */ a.jsxs(O, { variant: "active", onClick: () => i(!0), children: [
            /* @__PURE__ */ a.jsx(Lh, { size: 14 }),
            " Put a senior and a junior on this network"
          ] }) })
        ]
      }
    );
  const S = bs[m.roleId];
  return S.suspicionLimit, /* @__PURE__ */ a.jsx(
    hn,
    {
      title: "The human layer",
      subtitle: "Scripted technicians — fixed pretexts, and a debrief after every call",
      icon: /* @__PURE__ */ a.jsx(ad, { children: /* @__PURE__ */ a.jsx(pr, { size: 18 }) }),
      onClose: e,
      width: "max-w-4xl",
      footer: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[11px] text-soft", children: [
        /* @__PURE__ */ a.jsx(_n, { size: 13 }),
        "These are not real people and nothing is sent anywhere. The point of the exercise is the control named in each debrief.",
        /* @__PURE__ */ a.jsx("span", { className: "flex-1" }),
        c !== "red" && /* @__PURE__ */ a.jsxs(O, { size: "sm", onClick: () => i(!1), children: [
          /* @__PURE__ */ a.jsx(Uh, { size: 13 }),
          " Stand the technicians down"
        ] })
      ] }),
      children: /* @__PURE__ */ a.jsxs("div", { className: "grid gap-4 lg:grid-cols-[260px_1fr]", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ a.jsx(V, { children: "On the network" }),
          n.map((y) => {
            const P = bs[y.roleId], A = (t.zones || []).find((L) => L.id === y.areaZoneId), B = y.id === m.id;
            return /* @__PURE__ */ a.jsxs(
              "button",
              {
                onClick: () => s(y.id),
                className: `w-full rounded-xl border p-3 text-left transition ${B ? "border-accent bg-accent/10" : "border-line bg-panel2 hover:border-accent/50"}`,
                children: [
                  /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ a.jsx("span", { className: `grid h-7 w-7 shrink-0 place-items-center rounded-lg ${y.roleId === "senior" ? "bg-up/15 text-up" : "bg-warn/15 text-warn"}`, children: /* @__PURE__ */ a.jsx(sc, { size: 14 }) }),
                    /* @__PURE__ */ a.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ a.jsx("div", { className: "truncate text-[13px] font-semibold", children: y.name }),
                      /* @__PURE__ */ a.jsx("div", { className: "truncate text-[10px] uppercase tracking-wider text-soft", children: P.label })
                    ] })
                  ] }),
                  /* @__PURE__ */ a.jsxs("div", { className: "mt-2 flex flex-wrap gap-1", children: [
                    /* @__PURE__ */ a.jsx(Z, { tone: y.reported ? "down" : y.suspicion >= P.suspicionLimit - 2 ? "warn" : "neutral", children: y.reported ? "reported you" : `suspicion ${y.suspicion}/${P.suspicionLimit}` }),
                    y.granted.length > 0 && /* @__PURE__ */ a.jsxs(Z, { tone: "down", children: [
                      y.granted.length,
                      " helped with"
                    ] })
                  ] }),
                  /* @__PURE__ */ a.jsxs("div", { className: "mt-1 text-[10px] text-soft", children: [
                    "Covers ",
                    A ? A.name : "the whole site"
                  ] })
                ]
              },
              y.id
            );
          }),
          c !== "red" && (t.zones || []).length > 0 && /* @__PURE__ */ a.jsx(W, { label: "Assign to a section", hint: "A technician can only act on devices in their own patch.", children: /* @__PURE__ */ a.jsxs(
            "select",
            {
              className: F,
              value: m.areaZoneId || "",
              onChange: (y) => l(m.id, y.target.value || null),
              "aria-label": "Assign technician to a section",
              children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "Whole site" }),
                (t.zones || []).map((y) => /* @__PURE__ */ a.jsx("option", { value: y.id, children: y.name }, y.id))
              ]
            }
          ) }),
          /* @__PURE__ */ a.jsx("p", { className: "rounded-xl border border-line bg-panel2 p-3 text-[11px] leading-relaxed text-soft", children: S.blurb })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "min-w-0 space-y-3", children: [
          /* @__PURE__ */ a.jsx(
            "div",
            {
              ref: k,
              className: "h-64 overflow-y-auto rounded-xl border border-line bg-panel2 p-3",
              "aria-label": "Call transcript",
              "aria-live": "polite",
              children: m.transcript.length ? /* @__PURE__ */ a.jsx("div", { className: "space-y-2", children: m.transcript.map((y, P) => /* @__PURE__ */ a.jsx(Hw, { m: y, name: m.name }, P)) }) : /* @__PURE__ */ a.jsx("p", { className: "grid h-full place-items-center text-center text-[12px] text-soft", children: /* @__PURE__ */ a.jsxs("span", { children: [
                /* @__PURE__ */ a.jsx(Oh, { size: 18, className: "mx-auto mb-2 opacity-60" }),
                "Pick a tactic, quote a detail and make an ask.",
                /* @__PURE__ */ a.jsx("br", {}),
                "A detail you have actually discovered lands much harder than a guess."
              ] }) })
            }
          ),
          m.reported ? /* @__PURE__ */ a.jsxs("div", { className: "rounded-xl border border-down/40 bg-down/10 p-3 text-[12px] text-ink", children: [
            /* @__PURE__ */ a.jsxs("strong", { children: [
              m.name,
              " has stopped taking your calls"
            ] }),
            " and reported the contact. Pushing a clumsy pretext too many times is itself a detection event — which is exactly what awareness training is for."
          ] }) : /* @__PURE__ */ a.jsxs("div", { className: "grid gap-3 sm:grid-cols-3", children: [
            /* @__PURE__ */ a.jsx(W, { label: "Tactic", hint: Rn[d].blurb, children: /* @__PURE__ */ a.jsx("select", { className: F, value: d, onChange: (y) => p(y.target.value), "aria-label": "Pressure tactic", children: Hy.map((y) => /* @__PURE__ */ a.jsx("option", { value: y.id, children: y.label }, y.id)) }) }),
            /* @__PURE__ */ a.jsx(W, { label: "Detail you quote", hint: "Checked against the real network.", children: /* @__PURE__ */ a.jsxs("select", { className: F, value: g, onChange: (y) => w(y.target.value), "aria-label": "Detail to quote", children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Quote nothing specific" }),
              x.map((y, P) => /* @__PURE__ */ a.jsx("option", { value: y.value, children: y.label }, P))
            ] }) }),
            /* @__PURE__ */ a.jsx(W, { label: "What you ask for", hint: ca[h].blurb, children: /* @__PURE__ */ a.jsx("select", { className: F, value: h, onChange: (y) => f(y.target.value), "aria-label": "The ask", children: Uy.map((y) => /* @__PURE__ */ a.jsx("option", { value: y.id, children: y.label }, y.id)) }) })
          ] }),
          !m.reported && /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ a.jsxs(O, { variant: "danger", onClick: v, children: [
              /* @__PURE__ */ a.jsx(pr, { size: 14 }),
              " Make the call"
            ] }),
            /* @__PURE__ */ a.jsx("span", { className: "text-[11px] text-soft", children: Rn[d].opener.replace("{caller}", "Jordan Ellis").replace("{colleague}", "Dave") })
          ] })
        ] })
      ] })
    }
  );
}
function ad({ children: e }) {
  return /* @__PURE__ */ a.jsx("span", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/40 bg-accent/15 text-accent", children: e });
}
function Hw({ m: e, name: t }) {
  var n, r;
  return e.who === "red" ? /* @__PURE__ */ a.jsxs("div", { className: "ml-auto max-w-[85%] rounded-xl rounded-br-sm border border-down/30 bg-down/10 p-2.5", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "mb-0.5 text-[10px] uppercase tracking-wider text-soft", children: [
      "You — ",
      (n = Rn[e.tactic]) == null ? void 0 : n.label,
      " · asking to ",
      (r = ca[e.ask]) == null ? void 0 : r.effect
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "text-[12px] leading-snug", children: e.text }),
    e.claim && /* @__PURE__ */ a.jsxs("div", { className: "mt-1 font-mono text-[11px] text-soft", children: [
      'quoting "',
      e.claim,
      '"'
    ] })
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "max-w-[90%] space-y-1.5", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "rounded-xl rounded-bl-sm border border-line bg-panel p-2.5", children: [
      /* @__PURE__ */ a.jsx("div", { className: "mb-0.5 text-[10px] uppercase tracking-wider text-soft", children: t }),
      /* @__PURE__ */ a.jsx("div", { className: "text-[12px] leading-snug", children: e.text })
    ] }),
    e.debrief && /* @__PURE__ */ a.jsxs("div", { className: `flex gap-2 rounded-lg border p-2 text-[11px] leading-relaxed ${e.ok ? "border-down/40 bg-down/10" : "border-up/40 bg-up/10"}`, children: [
      e.ok ? /* @__PURE__ */ a.jsx(_n, { size: 13, className: "mt-0.5 shrink-0" }) : /* @__PURE__ */ a.jsx(na, { size: 13, className: "mt-0.5 shrink-0" }),
      /* @__PURE__ */ a.jsx("span", { children: e.debrief })
    ] })
  ] });
}
function Uw() {
  const e = b((c) => c.zoneRenameId), t = b((c) => (c.topology.zones || []).find((u) => u.id === c.zoneRenameId)), n = b((c) => c.commitZoneRename), r = b((c) => c.cancelZoneRename), [s, o] = C.useState((t == null ? void 0 : t.name) || ""), i = C.useRef(null);
  if (C.useEffect(() => {
    o((t == null ? void 0 : t.name) || "");
    const c = setTimeout(() => {
      var u, d;
      (u = i.current) == null || u.focus(), (d = i.current) == null || d.select();
    }, 30);
    return () => clearTimeout(c);
  }, [e]), !t) return null;
  const l = () => n(s);
  return /* @__PURE__ */ a.jsx(
    hn,
    {
      title: "Rename section",
      subtitle: "Floors, buildings, wiring closets — whatever the area is called",
      icon: /* @__PURE__ */ a.jsx("span", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/40 bg-accent/15 text-accent", children: /* @__PURE__ */ a.jsx(Xl, { size: 16 }) }),
      onClose: r,
      width: "max-w-md",
      footer: /* @__PURE__ */ a.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ a.jsx(O, { size: "sm", onClick: r, children: "Cancel" }),
        /* @__PURE__ */ a.jsx(O, { variant: "primary", size: "sm", onClick: l, disabled: !s.trim(), children: "Rename" })
      ] }),
      children: /* @__PURE__ */ a.jsx(W, { label: "Section name", hint: "Up to 40 characters. Enter saves, Escape cancels.", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          ref: i,
          className: F,
          value: s,
          maxLength: 40,
          "aria-label": "Section name",
          onChange: (c) => o(c.target.value),
          onKeyDown: (c) => {
            c.key === "Enter" && (c.preventDefault(), l()), c.stopPropagation();
          }
        }
      ) })
    }
  );
}
function Bw({ initialState: e = null, scenario: t = null } = {}) {
  const n = b((M) => M.engine), r = b((M) => M.loadStarterTopology), s = b((M) => M.importState), o = b((M) => M.restoreWorkspace), i = b((M) => M.ensureConsole), [l, c] = C.useState(!0), [u, d] = C.useState(!0), [p, h] = C.useState(210), f = b((M) => M.modalDeviceId), g = b((M) => M.openDeviceModal), w = b((M) => M.closeDeviceModal), k = b((M) => M.attackPanelOpen), m = b((M) => M.challengeOpen), x = b((M) => M.socialOpen), v = b((M) => M.zoneRenameId), S = b((M) => M.openSocial), $ = b((M) => M.closeSocial), y = b((M) => M.closeChallenge), P = b((M) => M.openAttackPanel), A = b((M) => M.closeAttackPanel), [B, L] = C.useState(!1), [Y, ee] = C.useState(!1);
  C.useEffect(() => {
    i("attack", "Cyber Range"), i("browser", "Web Browser"), e ? s(e) : o() || t === "starter" && r(), n.startTelemetry(), n.setAmbient(b.getState().settings.ambient !== !1), n.setCoaching(b.getState().settings.coaching === !0), n.startAmbientTraffic();
  }, []);
  const ne = C.useRef(0), te = C.useRef(performance.now());
  C.useEffect(() => {
    const M = (we) => {
      const D = Math.min(64, we - te.current);
      te.current = we, n.tick(D), ne.current = requestAnimationFrame(M);
    };
    return ne.current = requestAnimationFrame(M), () => cancelAnimationFrame(ne.current);
  }, [n]);
  const Be = C.useCallback((M) => {
    const we = M.target, D = we && (/^(INPUT|TEXTAREA|SELECT)$/.test(we.tagName) || we.isContentEditable), N = b.getState(), H = M.ctrlKey || M.metaKey;
    if (M.key === "Escape") {
      A(), L(!1), ee(!1), y(), $(), b.getState().cancelZoneRename(), w(), N.closeContextMenu(), N.setTool("select"), N.clearSelection();
      return;
    }
    if (!D) {
      if (H && M.key.toLowerCase() === "z") {
        M.preventDefault(), N.undo();
        return;
      }
      if (H && (M.key.toLowerCase() === "y" || M.shiftKey && M.key.toLowerCase() === "z")) {
        M.preventDefault(), N.redo();
        return;
      }
      if (H && M.key.toLowerCase() === "d") {
        M.preventDefault(), N.selectedId && N.duplicateDevice(N.selectedId);
        return;
      }
      if (M.key === "Delete" || M.key === "Backspace") {
        M.preventDefault(), N.deleteSelection();
        return;
      }
      if (M.key === " ") {
        M.preventDefault(), N.toggleRunning();
        return;
      }
      if (M.key === "c" || M.key === "C") {
        N.setTool(N.tool === "cable" ? "select" : "cable");
        return;
      }
      if (M.key === "f" || M.key === "F") {
        N.fitView();
        return;
      }
      if (M.key === "p" || M.key === "P") {
        N.setTool(N.tool === "pdu" ? "select" : "pdu");
        return;
      }
      if (M.key === "s" || M.key === "S") {
        N.engine.mode === "simulation" && N.stepPdu();
        return;
      }
      if (M.key === "v" || M.key === "V") {
        N.setTool("select");
        return;
      }
      M.key === "?" && (L(!1), d(!0));
    }
  }, []);
  return C.useEffect(() => (window.addEventListener("keydown", Be), () => window.removeEventListener("keydown", Be)), [Be]), /* @__PURE__ */ a.jsxs("div", { className: "flex h-full w-full flex-col overflow-hidden bg-[rgb(var(--nr-bg))] text-ink", children: [
    /* @__PURE__ */ a.jsx(
      pv,
      {
        onTogglePalette: () => c((M) => !M),
        onToggleLab: () => d((M) => !M),
        onOpenAttack: P,
        onOpenSettings: () => L(!0),
        onOpenSubnet: () => ee(!0),
        onOpenSocial: () => S(),
        paletteOpen: l,
        labOpen: u
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: "flex min-h-0 flex-1", children: [
      l && /* @__PURE__ */ a.jsx(mv, { onClose: () => c(!1) }),
      /* @__PURE__ */ a.jsxs("main", { className: "flex min-w-0 flex-1 flex-col", children: [
        /* @__PURE__ */ a.jsx(wv, { onOpenDevice: g }),
        /* @__PURE__ */ a.jsx(Zv, { height: p, onResize: h })
      ] }),
      u && /* @__PURE__ */ a.jsx(Qv, { onClose: () => d(!1) })
    ] }),
    f && /* @__PURE__ */ a.jsx(dw, { deviceId: f, onClose: w }),
    k && /* @__PURE__ */ a.jsx(yw, { onClose: A }),
    B && /* @__PURE__ */ a.jsx(vw, { onClose: () => L(!1) }),
    Y && /* @__PURE__ */ a.jsx(Iw, { onClose: () => ee(!1) }),
    m && /* @__PURE__ */ a.jsx(Rw, { onClose: y }),
    x && /* @__PURE__ */ a.jsx(Fw, { onClose: $ }),
    v && /* @__PURE__ */ a.jsx(Uw, {})
  ] });
}
const Ww = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.invisible{visibility:hidden}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.bottom-3{bottom:.75rem}.bottom-\\[2px\\]{bottom:2px}.left-0{left:0}.left-0\\.5{left:.125rem}.left-1{left:.25rem}.left-1\\/2{left:50%}.left-\\[20px\\]{left:20px}.right-3{right:.75rem}.top-0{top:0}.top-0\\.5{top:.125rem}.top-1{top:.25rem}.top-full{top:100%}.isolate{isolation:isolate}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.mx-0\\.5{margin-left:.125rem;margin-right:.125rem}.mx-auto{margin-left:auto;margin-right:auto}.my-1{margin-top:.25rem;margin-bottom:.25rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.my-3{margin-top:.75rem;margin-bottom:.75rem}.mb-0\\.5{margin-bottom:.125rem}.mb-1{margin-bottom:.25rem}.mb-1\\.5{margin-bottom:.375rem}.mb-2{margin-bottom:.5rem}.mb-2\\.5{margin-bottom:.625rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.ml-4{margin-left:1rem}.ml-auto{margin-left:auto}.mr-1{margin-right:.25rem}.mt-0\\.5{margin-top:.125rem}.mt-1{margin-top:.25rem}.mt-1\\.5{margin-top:.375rem}.mt-2{margin-top:.5rem}.mt-2\\.5{margin-top:.625rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.block{display:block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-1\\.5{height:.375rem}.h-2{height:.5rem}.h-20{height:5rem}.h-28{height:7rem}.h-32{height:8rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-64{height:16rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[18px\\]{height:18px}.h-\\[22px\\]{height:22px}.h-\\[2px\\]{height:2px}.h-full{height:100%}.h-px{height:1px}.max-h-\\[132px\\]{max-height:132px}.max-h-\\[232px\\]{max-height:232px}.max-h-\\[260px\\]{max-height:260px}.max-h-\\[320px\\]{max-height:320px}.max-h-\\[86vh\\]{max-height:86vh}.min-h-0{min-height:0px}.min-h-\\[52px\\]{min-height:52px}.w-1\\.5{width:.375rem}.w-10{width:2.5rem}.w-11{width:2.75rem}.w-2{width:.5rem}.w-3\\.5{width:.875rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-7{width:1.75rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-\\[18px\\]{width:18px}.w-\\[196px\\]{width:196px}.w-\\[228px\\]{width:228px}.w-\\[286px\\]{width:286px}.w-full{width:100%}.w-px{width:1px}.min-w-0{min-width:0px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[196px\\]{min-width:196px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[48px\\]{min-width:48px}.max-w-2xl{max-width:42rem}.max-w-3xl{max-width:48rem}.max-w-4xl{max-width:56rem}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90\\%\\]{max-width:90%}.max-w-md{max-width:28rem}.max-w-sm{max-width:24rem}.max-w-xl{max-width:36rem}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.shrink-0{flex-shrink:0}.border-collapse{border-collapse:collapse}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-grab{cursor:grab}.cursor-grabbing{cursor:grabbing}.cursor-move{cursor:move}.cursor-not-allowed{cursor:not-allowed}.cursor-ns-resize{cursor:ns-resize}.cursor-nwse-resize{cursor:nwse-resize}.cursor-pointer{cursor:pointer}.cursor-text{cursor:text}.touch-none{touch-action:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize-none{resize:none}.resize{resize:both}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-\\[auto_1fr\\]{grid-template-columns:auto 1fr}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-items-center{place-items:center}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-px{gap:1px}.gap-x-3{-moz-column-gap:.75rem;column-gap:.75rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-y-1{row-gap:.25rem}.gap-y-1\\.5{row-gap:.375rem}.gap-y-3{row-gap:.75rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.375rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem * var(--tw-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.whitespace-pre{white-space:pre}.whitespace-pre-wrap{white-space:pre-wrap}.break-words{overflow-wrap:break-word}.break-all{word-break:break-all}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.rounded-bl-sm{border-bottom-left-radius:.125rem}.rounded-br-sm{border-bottom-right-radius:.125rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-accent{--tw-border-opacity: 1;border-color:rgb(var(--nr-accent) / var(--tw-border-opacity))}.border-accent\\/40{border-color:rgb(var(--nr-accent) / .4)}.border-accent\\/50{border-color:rgb(var(--nr-accent) / .5)}.border-amber-500\\/40{border-color:#f59e0b66}.border-down\\/30{border-color:rgb(var(--nr-down) / .3)}.border-down\\/40{border-color:rgb(var(--nr-down) / .4)}.border-down\\/50{border-color:rgb(var(--nr-down) / .5)}.border-down\\/60{border-color:rgb(var(--nr-down) / .6)}.border-line{--tw-border-opacity: 1;border-color:rgb(var(--nr-line) / var(--tw-border-opacity))}.border-rose-500\\/40{border-color:#f43f5e66}.border-sky-500\\/30{border-color:#0ea5e94d}.border-up\\/40{border-color:rgb(var(--nr-up) / .4)}.border-up\\/50{border-color:rgb(var(--nr-up) / .5)}.border-up\\/60{border-color:rgb(var(--nr-up) / .6)}.border-warn\\/40{border-color:rgb(var(--nr-warn) / .4)}.border-warn\\/50{border-color:rgb(var(--nr-warn) / .5)}.border-warn\\/60{border-color:rgb(var(--nr-warn) / .6)}.border-white\\/10{border-color:#ffffff1a}.border-white\\/15{border-color:#ffffff26}.border-white\\/20{border-color:#fff3}.border-white\\/5{border-color:#ffffff0d}.bg-\\[rgb\\(var\\(--nr-bg\\)\\)\\]{background-color:rgb(var(--nr-bg))}.bg-\\[rgb\\(var\\(--nr-term-bg\\)\\)\\]{background-color:rgb(var(--nr-term-bg))}.bg-accent{--tw-bg-opacity: 1;background-color:rgb(var(--nr-accent) / var(--tw-bg-opacity))}.bg-accent\\/10{background-color:rgb(var(--nr-accent) / .1)}.bg-accent\\/15{background-color:rgb(var(--nr-accent) / .15)}.bg-accent\\/20{background-color:rgb(var(--nr-accent) / .2)}.bg-amber-500\\/10{background-color:#f59e0b1a}.bg-black\\/25{background-color:#00000040}.bg-black\\/55{background-color:#0000008c}.bg-down{--tw-bg-opacity: 1;background-color:rgb(var(--nr-down) / var(--tw-bg-opacity))}.bg-down\\/10{background-color:rgb(var(--nr-down) / .1)}.bg-down\\/15{background-color:rgb(var(--nr-down) / .15)}.bg-emerald-500\\/25{background-color:#10b98140}.bg-line{--tw-bg-opacity: 1;background-color:rgb(var(--nr-line) / var(--tw-bg-opacity))}.bg-line\\/60{background-color:rgb(var(--nr-line) / .6)}.bg-panel{--tw-bg-opacity: 1;background-color:rgb(var(--nr-panel) / var(--tw-bg-opacity))}.bg-panel\\/60{background-color:rgb(var(--nr-panel) / .6)}.bg-panel\\/90{background-color:rgb(var(--nr-panel) / .9)}.bg-panel2{--tw-bg-opacity: 1;background-color:rgb(var(--nr-panel2) / var(--tw-bg-opacity))}.bg-rose-500\\/10{background-color:#f43f5e1a}.bg-sky-500\\/10{background-color:#0ea5e91a}.bg-sky-500\\/20{background-color:#0ea5e933}.bg-sky-500\\/25{background-color:#0ea5e940}.bg-sky-500\\/50{background-color:#0ea5e980}.bg-sky-500\\/80{background-color:#0ea5e9cc}.bg-sky-600{--tw-bg-opacity: 1;background-color:rgb(2 132 199 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-up{--tw-bg-opacity: 1;background-color:rgb(var(--nr-up) / var(--tw-bg-opacity))}.bg-up\\/10{background-color:rgb(var(--nr-up) / .1)}.bg-up\\/15{background-color:rgb(var(--nr-up) / .15)}.bg-warn{--tw-bg-opacity: 1;background-color:rgb(var(--nr-warn) / var(--tw-bg-opacity))}.bg-warn\\/10{background-color:rgb(var(--nr-warn) / .1)}.bg-warn\\/15{background-color:rgb(var(--nr-warn) / .15)}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-white\\/10{background-color:#ffffff1a}.bg-white\\/5{background-color:#ffffff0d}.bg-white\\/\\[0\\.03\\]{background-color:#ffffff08}.p-0\\.5{padding:.125rem}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-1\\.5{padding-left:.375rem;padding-right:.375rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-3\\.5{padding-left:.875rem;padding-right:.875rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-\\[1px\\]{padding-top:1px;padding-bottom:1px}.py-\\[3px\\]{padding-top:3px;padding-bottom:3px}.pb-2{padding-bottom:.5rem}.pl-1{padding-left:.25rem}.pl-3{padding-left:.75rem}.pt-1\\.5{padding-top:.375rem}.pt-2{padding-top:.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.font-sans{font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.text-\\[10\\.5px\\]{font-size:10.5px}.text-\\[10px\\]{font-size:10px}.text-\\[11\\.5px\\]{font-size:11.5px}.text-\\[11px\\]{font-size:11px}.text-\\[12\\.5px\\]{font-size:12.5px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[8\\.5px\\]{font-size:8.5px}.text-\\[9\\.5px\\]{font-size:9.5px}.text-\\[9px\\]{font-size:9px}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing: tabular-nums;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.leading-\\[1\\.45\\]{line-height:1.45}.leading-\\[1\\.55\\]{line-height:1.55}.leading-none{line-height:1}.leading-relaxed{line-height:1.625}.leading-snug{line-height:1.375}.leading-tight{line-height:1.25}.tracking-tight{letter-spacing:-.025em}.tracking-wide{letter-spacing:.025em}.tracking-wider{letter-spacing:.05em}.tracking-widest{letter-spacing:.1em}.text-\\[rgb\\(var\\(--nr-term-fg\\)\\)\\]{color:rgb(var(--nr-term-fg))}.text-accent{--tw-text-opacity: 1;color:rgb(var(--nr-accent) / var(--tw-text-opacity))}.text-amber-300{--tw-text-opacity: 1;color:rgb(252 211 77 / var(--tw-text-opacity))}.text-amber-400{--tw-text-opacity: 1;color:rgb(251 191 36 / var(--tw-text-opacity))}.text-amber-400\\/90{color:#fbbf24e6}.text-down{--tw-text-opacity: 1;color:rgb(var(--nr-down) / var(--tw-text-opacity))}.text-emerald-300{--tw-text-opacity: 1;color:rgb(110 231 183 / var(--tw-text-opacity))}.text-emerald-400{--tw-text-opacity: 1;color:rgb(52 211 153 / var(--tw-text-opacity))}.text-ink{--tw-text-opacity: 1;color:rgb(var(--nr-ink) / var(--tw-text-opacity))}.text-ink\\/90{color:rgb(var(--nr-ink) / .9)}.text-rose-300{--tw-text-opacity: 1;color:rgb(253 164 175 / var(--tw-text-opacity))}.text-rose-400{--tw-text-opacity: 1;color:rgb(251 113 133 / var(--tw-text-opacity))}.text-sky-200{--tw-text-opacity: 1;color:rgb(186 230 253 / var(--tw-text-opacity))}.text-sky-300{--tw-text-opacity: 1;color:rgb(125 211 252 / var(--tw-text-opacity))}.text-slate-100{--tw-text-opacity: 1;color:rgb(241 245 249 / var(--tw-text-opacity))}.text-slate-200{--tw-text-opacity: 1;color:rgb(226 232 240 / var(--tw-text-opacity))}.text-slate-300{--tw-text-opacity: 1;color:rgb(203 213 225 / var(--tw-text-opacity))}.text-slate-400{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity))}.text-slate-500{--tw-text-opacity: 1;color:rgb(100 116 139 / var(--tw-text-opacity))}.text-slate-600{--tw-text-opacity: 1;color:rgb(71 85 105 / var(--tw-text-opacity))}.text-soft{--tw-text-opacity: 1;color:rgb(var(--nr-soft) / var(--tw-text-opacity))}.text-soft\\/50{color:rgb(var(--nr-soft) / .5)}.text-soft\\/60{color:rgb(var(--nr-soft) / .6)}.text-up{--tw-text-opacity: 1;color:rgb(var(--nr-up) / var(--tw-text-opacity))}.text-warn{--tw-text-opacity: 1;color:rgb(var(--nr-warn) / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.accent-\\[rgb\\(var\\(--nr-accent\\)\\)\\]{accent-color:rgb(var(--nr-accent))}.opacity-50{opacity:.5}.opacity-55{opacity:.55}.opacity-60{opacity:.6}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur{--tw-backdrop-blur: blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}:root,:host{--nr-bg: 244 246 251;--nr-panel: 255 255 255;--nr-panel2: 238 241 247;--nr-ink: 17 23 38;--nr-soft: 96 110 133;--nr-line: 216 222 233;--nr-accent: 23 99 255;--nr-up: 19 166 106;--nr-down: 226 59 78;--nr-warn: 217 138 0;--nr-grid: 226 232 240;--nr-term-bg: 12 18 34;--nr-term-fg: 207 227 255;color-scheme:light}[data-theme=dark],:host([theme="dark"]){--nr-bg: 10 14 26;--nr-panel: 18 24 41;--nr-panel2: 14 20 34;--nr-ink: 231 237 249;--nr-soft: 147 161 189;--nr-line: 36 45 68;--nr-accent: 77 135 255;--nr-up: 47 211 138;--nr-down: 255 90 106;--nr-warn: 255 176 32;--nr-grid: 22 29 48;--nr-term-bg: 6 10 20;--nr-term-fg: 207 227 255;color-scheme:dark}html,body,#root{height:100%}body{margin:0;background:rgb(var(--nr-bg));color:rgb(var(--nr-ink));font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif;font-size:14px;overflow:hidden}.nr-grid{background-image:radial-gradient(circle at 1px 1px,rgb(var(--nr-grid)) 1px,transparent 0);background-size:22px 22px}.nr-term{background:rgb(var(--nr-term-bg));color:rgb(var(--nr-term-fg))}*::-webkit-scrollbar{width:9px;height:9px}*::-webkit-scrollbar-thumb{background:rgb(var(--nr-line));border-radius:6px}*::-webkit-scrollbar-track{background:transparent}@media (prefers-reduced-motion: reduce){*{transition-duration:.01ms!important;animation-duration:.01ms!important}}:focus-visible{outline:2px solid rgb(var(--nr-accent));outline-offset:2px}.placeholder\\:text-slate-600::-moz-placeholder{--tw-text-opacity: 1;color:rgb(71 85 105 / var(--tw-text-opacity))}.placeholder\\:text-slate-600::placeholder{--tw-text-opacity: 1;color:rgb(71 85 105 / var(--tw-text-opacity))}.hover\\:border-accent:hover{--tw-border-opacity: 1;border-color:rgb(var(--nr-accent) / var(--tw-border-opacity))}.hover\\:border-accent\\/50:hover{border-color:rgb(var(--nr-accent) / .5)}.hover\\:border-down:hover{--tw-border-opacity: 1;border-color:rgb(var(--nr-down) / var(--tw-border-opacity))}.hover\\:border-sky-500\\/50:hover{border-color:#0ea5e980}.hover\\:bg-accent\\/15:hover{background-color:rgb(var(--nr-accent) / .15)}.hover\\:bg-accent\\/60:hover{background-color:rgb(var(--nr-accent) / .6)}.hover\\:bg-down\\/10:hover{background-color:rgb(var(--nr-down) / .1)}.hover\\:bg-panel2:hover{--tw-bg-opacity: 1;background-color:rgb(var(--nr-panel2) / var(--tw-bg-opacity))}.hover\\:bg-sky-500:hover{--tw-bg-opacity: 1;background-color:rgb(14 165 233 / var(--tw-bg-opacity))}.hover\\:bg-white\\/10:hover{background-color:#ffffff1a}.hover\\:bg-white\\/5:hover{background-color:#ffffff0d}.hover\\:text-accent:hover{--tw-text-opacity: 1;color:rgb(var(--nr-accent) / var(--tw-text-opacity))}.hover\\:text-ink:hover{--tw-text-opacity: 1;color:rgb(var(--nr-ink) / var(--tw-text-opacity))}.hover\\:text-slate-100:hover{--tw-text-opacity: 1;color:rgb(241 245 249 / var(--tw-text-opacity))}.hover\\:text-slate-200:hover{--tw-text-opacity: 1;color:rgb(226 232 240 / var(--tw-text-opacity))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-sm:hover{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.hover\\:brightness-110:hover{--tw-brightness: brightness(1.1);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.focus\\:border-accent:focus{--tw-border-opacity: 1;border-color:rgb(var(--nr-accent) / var(--tw-border-opacity))}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.group:hover .group-hover\\:block{display:block}.group:focus .group-focus\\:block{display:block}@media (min-width: 640px){.sm\\:inline-flex{display:inline-flex}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.sm\\:grid-cols-\\[1fr_1fr_1fr_auto\\]{grid-template-columns:1fr 1fr 1fr auto}.sm\\:grid-cols-\\[1fr_1fr_auto\\]{grid-template-columns:1fr 1fr auto}}@media (min-width: 768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-\\[1\\.1fr_1fr\\]{grid-template-columns:1.1fr 1fr}}@media (min-width: 1024px){.lg\\:grid-cols-\\[260px_1fr\\]{grid-template-columns:260px 1fr}}', id = "netrange-lab";
class Vw extends HTMLElement {
  static get observedAttributes() {
    return ["theme", "lab", "height"];
  }
  constructor() {
    super(), this._root = null, this._mount = null, this._unsub = null;
  }
  connectedCallback() {
    if (this._root) return;
    const t = this.attachShadow({ mode: "open" }), n = document.createElement("style");
    n.textContent = Ww + `
      :host { display: block; }
      .nr-host {
        height: 100%;
        background: rgb(var(--nr-bg));
        color: rgb(var(--nr-ink));
        font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
        font-size: 14px;
      }
    `, t.appendChild(n);
    const r = document.createElement("div");
    r.className = "nr-host", r.setAttribute("data-theme", this.getAttribute("theme") || "dark"), t.appendChild(r), this.style.height = this.getAttribute("height") ? `${this.getAttribute("height")}px`.replace("pxpx", "px") : "720px", this._mount = r;
    const s = b.getState(), o = this.getAttribute("lab");
    o && s.setLab(sr(o).id), s.updateSettings({ theme: this.getAttribute("theme") === "light" ? "light" : "dark" });
    const i = this.getAttribute("scenario") || (this.getAttribute("autostart") === "true" ? "starter" : null);
    let l = null;
    const c = this.getAttribute("state");
    if (c)
      try {
        l = JSON.parse(c);
      } catch {
        console.warn("[netrange] `state` attribute is not valid JSON; ignoring.");
      }
    this._root = bh(r), this._root.render(/* @__PURE__ */ a.jsx(Bw, { initialState: l, scenario: i })), this._onGraded = (u) => {
      var f;
      const { labId: d, result: p } = u.detail, h = _u(sr(d), p);
      this.dispatchEvent(new CustomEvent("netrange:graded", { detail: h, bubbles: !0, composed: !0 }));
      try {
        (f = window.parent) == null || f.postMessage({ source: "netrange", type: "graded", payload: h }, "*");
      } catch {
      }
    }, window.addEventListener("netrange:graded", this._onGraded), this.dispatchEvent(
      new CustomEvent("netrange:ready", {
        detail: { labId: b.getState().labId },
        bubbles: !0,
        composed: !0
      })
    );
  }
  disconnectedCallback() {
    window.removeEventListener("netrange:graded", this._onGraded);
    const t = this._root;
    this._root = null, setTimeout(() => t == null ? void 0 : t.unmount(), 0);
  }
  attributeChangedCallback(t, n, r) {
    this._mount && (t === "theme" && (this._mount.setAttribute("data-theme", r === "light" ? "light" : "dark"), b.getState().updateSettings({ theme: r === "light" ? "light" : "dark" })), t === "lab" && r && b.getState().setLab(sr(r).id), t === "height" && r && (this.style.height = `${parseInt(r, 10)}px`));
  }
  /* ----------------------------------------------------- public API */
  get state() {
    return b.getState().exportState();
  }
  set state(t) {
    b.getState().importState(t);
  }
  grade() {
    const t = b.getState(), n = t.grade();
    return _u(sr(t.labId), n);
  }
  reset() {
    b.getState().resetTopology();
  }
}
customElements.get(id) || customElements.define(id, Vw);
export {
  id as TAG,
  Vw as default
};
