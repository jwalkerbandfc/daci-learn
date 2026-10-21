function Xu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ju = { exports: {} }, _o = {}, ed = { exports: {} }, G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ks = Symbol.for("react.element"), mf = Symbol.for("react.portal"), gf = Symbol.for("react.fragment"), xf = Symbol.for("react.strict_mode"), yf = Symbol.for("react.profiler"), vf = Symbol.for("react.provider"), wf = Symbol.for("react.context"), bf = Symbol.for("react.forward_ref"), kf = Symbol.for("react.suspense"), Sf = Symbol.for("react.memo"), jf = Symbol.for("react.lazy"), cc = Symbol.iterator;
function Nf(e) {
  return e === null || typeof e != "object" ? null : (e = cc && e[cc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var td = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, nd = Object.assign, rd = {};
function Nr(e, t, n) {
  this.props = e, this.context = t, this.refs = rd, this.updater = n || td;
}
Nr.prototype.isReactComponent = {};
Nr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Nr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sd() {
}
sd.prototype = Nr.prototype;
function Ki(e, t, n) {
  this.props = e, this.context = t, this.refs = rd, this.updater = n || td;
}
var Zi = Ki.prototype = new sd();
Zi.constructor = Ki;
nd(Zi, Nr.prototype);
Zi.isPureReactComponent = !0;
var uc = Array.isArray, od = Object.prototype.hasOwnProperty, Yi = { current: null }, ad = { key: !0, ref: !0, __self: !0, __source: !0 };
function id(e, t, n) {
  var r, s = {}, o = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (o = "" + t.key), t) od.call(t, r) && !ad.hasOwnProperty(r) && (s[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) s.children = n;
  else if (1 < l) {
    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
    s.children = c;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) s[r] === void 0 && (s[r] = l[r]);
  return { $$typeof: ks, type: e, key: o, ref: a, props: s, _owner: Yi.current };
}
function Cf(e, t) {
  return { $$typeof: ks, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Qi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ks;
}
function $f(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var dc = /\/+/g;
function ua(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? $f("" + e.key) : t.toString(36);
}
function Zs(e, t, n, r, s) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else switch (o) {
    case "string":
    case "number":
      a = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case ks:
        case mf:
          a = !0;
      }
  }
  if (a) return a = e, s = s(a), e = r === "" ? "." + ua(a, 0) : r, uc(s) ? (n = "", e != null && (n = e.replace(dc, "$&/") + "/"), Zs(s, t, n, "", function(u) {
    return u;
  })) : s != null && (Qi(s) && (s = Cf(s, n + (!s.key || a && a.key === s.key ? "" : ("" + s.key).replace(dc, "$&/") + "/") + e)), t.push(s)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", uc(e)) for (var l = 0; l < e.length; l++) {
    o = e[l];
    var c = r + ua(o, l);
    a += Zs(o, t, n, c, s);
  }
  else if (c = Nf(e), typeof c == "function") for (e = c.call(e), l = 0; !(o = e.next()).done; ) o = o.value, c = r + ua(o, l++), a += Zs(o, t, n, c, s);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Es(e, t, n) {
  if (e == null) return e;
  var r = [], s = 0;
  return Zs(e, r, "", "", function(o) {
    return t.call(n, o, s++);
  }), r;
}
function Pf(e) {
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
var Fe = { current: null }, Ys = { transition: null }, Ef = { ReactCurrentDispatcher: Fe, ReactCurrentBatchConfig: Ys, ReactCurrentOwner: Yi };
function ld() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = { map: Es, forEach: function(e, t, n) {
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
  if (!Qi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
G.Component = Nr;
G.Fragment = gf;
G.Profiler = yf;
G.PureComponent = Ki;
G.StrictMode = xf;
G.Suspense = kf;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ef;
G.act = ld;
G.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = nd({}, e.props), s = e.key, o = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, a = Yi.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (c in t) od.call(t, c) && !ad.hasOwnProperty(c) && (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ks, type: e.type, key: s, ref: o, props: r, _owner: a };
};
G.createContext = function(e) {
  return e = { $$typeof: wf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: vf, _context: e }, e.Consumer = e;
};
G.createElement = id;
G.createFactory = function(e) {
  var t = id.bind(null, e);
  return t.type = e, t;
};
G.createRef = function() {
  return { current: null };
};
G.forwardRef = function(e) {
  return { $$typeof: bf, render: e };
};
G.isValidElement = Qi;
G.lazy = function(e) {
  return { $$typeof: jf, _payload: { _status: -1, _result: e }, _init: Pf };
};
G.memo = function(e, t) {
  return { $$typeof: Sf, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function(e) {
  var t = Ys.transition;
  Ys.transition = {};
  try {
    e();
  } finally {
    Ys.transition = t;
  }
};
G.unstable_act = ld;
G.useCallback = function(e, t) {
  return Fe.current.useCallback(e, t);
};
G.useContext = function(e) {
  return Fe.current.useContext(e);
};
G.useDebugValue = function() {
};
G.useDeferredValue = function(e) {
  return Fe.current.useDeferredValue(e);
};
G.useEffect = function(e, t) {
  return Fe.current.useEffect(e, t);
};
G.useId = function() {
  return Fe.current.useId();
};
G.useImperativeHandle = function(e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function(e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function(e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
G.useMemo = function(e, t) {
  return Fe.current.useMemo(e, t);
};
G.useReducer = function(e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
G.useRef = function(e) {
  return Fe.current.useRef(e);
};
G.useState = function(e) {
  return Fe.current.useState(e);
};
G.useSyncExternalStore = function(e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function() {
  return Fe.current.useTransition();
};
G.version = "18.3.1";
ed.exports = G;
var P = ed.exports;
const es = /* @__PURE__ */ Xu(P);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tf = P, Af = Symbol.for("react.element"), If = Symbol.for("react.fragment"), Mf = Object.prototype.hasOwnProperty, Lf = Tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rf = { key: !0, ref: !0, __self: !0, __source: !0 };
function cd(e, t, n) {
  var r, s = {}, o = null, a = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) Mf.call(t, r) && !Rf.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) s[r] === void 0 && (s[r] = t[r]);
  return { $$typeof: Af, type: e, key: o, ref: a, props: s, _owner: Lf.current };
}
_o.Fragment = If;
_o.jsx = cd;
_o.jsxs = cd;
Ju.exports = _o;
var i = Ju.exports, ud = { exports: {} }, et = {}, dd = { exports: {} }, pd = {};
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
  function t(R, N) {
    var F = R.length;
    R.push(N);
    e: for (; 0 < F; ) {
      var A = F - 1 >>> 1, X = R[A];
      if (0 < s(X, N)) R[A] = N, R[F] = X, F = A;
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var N = R[0], F = R.pop();
    if (F !== N) {
      R[0] = F;
      e: for (var A = 0, X = R.length, Ne = X >>> 1; A < Ne; ) {
        var be = 2 * (A + 1) - 1, gn = R[be], nt = be + 1, Ht = R[nt];
        if (0 > s(gn, F)) nt < X && 0 > s(Ht, gn) ? (R[A] = Ht, R[nt] = F, A = nt) : (R[A] = gn, R[be] = F, A = be);
        else if (nt < X && 0 > s(Ht, F)) R[A] = Ht, R[nt] = F, A = nt;
        else break e;
      }
    }
    return N;
  }
  function s(R, N) {
    var F = R.sortIndex - N.sortIndex;
    return F !== 0 ? F : R.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var a = Date, l = a.now();
    e.unstable_now = function() {
      return a.now() - l;
    };
  }
  var c = [], u = [], d = 1, p = null, h = 3, f = !1, g = !1, j = !1, y = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, x = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(R) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= R) r(u), N.sortIndex = N.expirationTime, t(c, N);
      else break;
      N = n(u);
    }
  }
  function k(R) {
    if (j = !1, w(R), !g) if (n(c) !== null) g = !0, I(C);
    else {
      var N = n(u);
      N !== null && we(k, N.startTime - R);
    }
  }
  function C(R, N) {
    g = !1, j && (j = !1, m(T), T = -1), f = !0;
    var F = h;
    try {
      for (w(N), p = n(c); p !== null && (!(p.expirationTime > N) || R && !Z()); ) {
        var A = p.callback;
        if (typeof A == "function") {
          p.callback = null, h = p.priorityLevel;
          var X = A(p.expirationTime <= N);
          N = e.unstable_now(), typeof X == "function" ? p.callback = X : p === n(c) && r(c), w(N);
        } else r(c);
        p = n(c);
      }
      if (p !== null) var Ne = !0;
      else {
        var be = n(u);
        be !== null && we(k, be.startTime - N), Ne = !1;
      }
      return Ne;
    } finally {
      p = null, h = F, f = !1;
    }
  }
  var v = !1, $ = null, T = -1, U = 5, L = -1;
  function Z() {
    return !(e.unstable_now() - L < U);
  }
  function J() {
    if ($ !== null) {
      var R = e.unstable_now();
      L = R;
      var N = !0;
      try {
        N = $(!0, R);
      } finally {
        N ? te() : (v = !1, $ = null);
      }
    } else v = !1;
  }
  var te;
  if (typeof x == "function") te = function() {
    x(J);
  };
  else if (typeof MessageChannel < "u") {
    var ee = new MessageChannel(), Ue = ee.port2;
    ee.port1.onmessage = J, te = function() {
      Ue.postMessage(null);
    };
  } else te = function() {
    y(J, 0);
  };
  function I(R) {
    $ = R, v || (v = !0, te());
  }
  function we(R, N) {
    T = y(function() {
      R(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    g || f || (g = !0, I(C));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(R) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = h;
    }
    var F = h;
    h = N;
    try {
      return R();
    } finally {
      h = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(R, N) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var F = h;
    h = R;
    try {
      return N();
    } finally {
      h = F;
    }
  }, e.unstable_scheduleCallback = function(R, N, F) {
    var A = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? A + F : A) : F = A, R) {
      case 1:
        var X = -1;
        break;
      case 2:
        X = 250;
        break;
      case 5:
        X = 1073741823;
        break;
      case 4:
        X = 1e4;
        break;
      default:
        X = 5e3;
    }
    return X = F + X, R = { id: d++, callback: N, priorityLevel: R, startTime: F, expirationTime: X, sortIndex: -1 }, F > A ? (R.sortIndex = F, t(u, R), n(c) === null && R === n(u) && (j ? (m(T), T = -1) : j = !0, we(k, F - A))) : (R.sortIndex = X, t(c, R), g || f || (g = !0, I(C))), R;
  }, e.unstable_shouldYield = Z, e.unstable_wrapCallback = function(R) {
    var N = h;
    return function() {
      var F = h;
      h = N;
      try {
        return R.apply(this, arguments);
      } finally {
        h = F;
      }
    };
  };
})(pd);
dd.exports = pd;
var Df = dd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zf = P, Je = Df;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var hd = /* @__PURE__ */ new Set(), ts = {};
function zn(e, t) {
  mr(e, t), mr(e + "Capture", t);
}
function mr(e, t) {
  for (ts[e] = t, e = 0; e < t.length; e++) hd.add(t[e]);
}
var Dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wa = Object.prototype.hasOwnProperty, Of = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, pc = {}, hc = {};
function _f(e) {
  return Wa.call(hc, e) ? !0 : Wa.call(pc, e) ? !1 : Of.test(e) ? hc[e] = !0 : (pc[e] = !0, !1);
}
function Ff(e, t, n, r) {
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
function Hf(e, t, n, r) {
  if (t === null || typeof t > "u" || Ff(e, t, n, r)) return !0;
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
function He(e, t, n, r, s, o, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a;
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ee[e] = new He(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ee[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ee[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ee[e] = new He(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ee[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ee[e] = new He(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ee[e] = new He(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ee[e] = new He(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ee[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xi = /[\-:]([a-z])/g;
function Ji(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Xi,
    Ji
  );
  Ee[t] = new He(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Xi, Ji);
  Ee[t] = new He(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Xi, Ji);
  Ee[t] = new He(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ee[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new He("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ee[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function el(e, t, n, r) {
  var s = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Hf(t, n, s, r) && (n = null), r || s === null ? _f(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ft = zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ts = Symbol.for("react.element"), Vn = Symbol.for("react.portal"), qn = Symbol.for("react.fragment"), tl = Symbol.for("react.strict_mode"), Va = Symbol.for("react.profiler"), fd = Symbol.for("react.provider"), md = Symbol.for("react.context"), nl = Symbol.for("react.forward_ref"), qa = Symbol.for("react.suspense"), Ga = Symbol.for("react.suspense_list"), rl = Symbol.for("react.memo"), qt = Symbol.for("react.lazy"), gd = Symbol.for("react.offscreen"), fc = Symbol.iterator;
function Tr(e) {
  return e === null || typeof e != "object" ? null : (e = fc && e[fc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var pe = Object.assign, da;
function Fr(e) {
  if (da === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    da = t && t[1] || "";
  }
  return `
` + da + e;
}
var pa = !1;
function ha(e, t) {
  if (!e || pa) return "";
  pa = !0;
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
`), a = s.length - 1, l = o.length - 1; 1 <= a && 0 <= l && s[a] !== o[l]; ) l--;
      for (; 1 <= a && 0 <= l; a--, l--) if (s[a] !== o[l]) {
        if (a !== 1 || l !== 1)
          do
            if (a--, l--, 0 > l || s[a] !== o[l]) {
              var c = `
` + s[a].replace(" at new ", " at ");
              return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
            }
          while (1 <= a && 0 <= l);
        break;
      }
    }
  } finally {
    pa = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Fr(e) : "";
}
function Uf(e) {
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
      return e = ha(e.type, !1), e;
    case 11:
      return e = ha(e.type.render, !1), e;
    case 1:
      return e = ha(e.type, !0), e;
    default:
      return "";
  }
}
function Ka(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case qn:
      return "Fragment";
    case Vn:
      return "Portal";
    case Va:
      return "Profiler";
    case tl:
      return "StrictMode";
    case qa:
      return "Suspense";
    case Ga:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case md:
      return (e.displayName || "Context") + ".Consumer";
    case fd:
      return (e._context.displayName || "Context") + ".Provider";
    case nl:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case rl:
      return t = e.displayName || null, t !== null ? t : Ka(e.type) || "Memo";
    case qt:
      t = e._payload, e = e._init;
      try {
        return Ka(e(t));
      } catch {
      }
  }
  return null;
}
function Bf(e) {
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
      return Ka(t);
    case 8:
      return t === tl ? "StrictMode" : "Mode";
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
function ln(e) {
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
function xd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Wf(e) {
  var t = xd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var s = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return s.call(this);
    }, set: function(a) {
      r = "" + a, o.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(a) {
      r = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function As(e) {
  e._valueTracker || (e._valueTracker = Wf(e));
}
function yd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = xd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function co(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Za(e, t) {
  var n = t.checked;
  return pe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function mc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ln(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function vd(e, t) {
  t = t.checked, t != null && el(e, "checked", t, !1);
}
function Ya(e, t) {
  vd(e, t);
  var n = ln(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Qa(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qa(e, t.type, ln(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function gc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Qa(e, t, n) {
  (t !== "number" || co(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Hr = Array.isArray;
function ar(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ln(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        e[s].selected = !0, r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Xa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return pe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function xc(e, t) {
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
  e._wrapperState = { initialValue: ln(n) };
}
function wd(e, t) {
  var n = ln(t.value), r = ln(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function yc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function bd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ja(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? bd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Is, kd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, s);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Is = Is || document.createElement("div"), Is.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Is.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
}, Vf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wr).forEach(function(e) {
  Vf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Wr[t] = Wr[e];
  });
});
function Sd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Wr.hasOwnProperty(e) && Wr[e] ? ("" + t).trim() : t + "px";
}
function jd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, s = Sd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
  }
}
var qf = pe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ei(e, t) {
  if (t) {
    if (qf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function ti(e, t) {
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
var ni = null;
function sl(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ri = null, ir = null, lr = null;
function vc(e) {
  if (e = Ns(e)) {
    if (typeof ri != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = Wo(t), ri(e.stateNode, e.type, t));
  }
}
function Nd(e) {
  ir ? lr ? lr.push(e) : lr = [e] : ir = e;
}
function Cd() {
  if (ir) {
    var e = ir, t = lr;
    if (lr = ir = null, vc(e), t) for (e = 0; e < t.length; e++) vc(t[e]);
  }
}
function $d(e, t) {
  return e(t);
}
function Pd() {
}
var fa = !1;
function Ed(e, t, n) {
  if (fa) return e(t, n);
  fa = !0;
  try {
    return $d(e, t, n);
  } finally {
    fa = !1, (ir !== null || lr !== null) && (Pd(), Cd());
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
var si = !1;
if (Dt) try {
  var Ar = {};
  Object.defineProperty(Ar, "passive", { get: function() {
    si = !0;
  } }), window.addEventListener("test", Ar, Ar), window.removeEventListener("test", Ar, Ar);
} catch {
  si = !1;
}
function Gf(e, t, n, r, s, o, a, l, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Vr = !1, uo = null, po = !1, oi = null, Kf = { onError: function(e) {
  Vr = !0, uo = e;
} };
function Zf(e, t, n, r, s, o, a, l, c) {
  Vr = !1, uo = null, Gf.apply(Kf, arguments);
}
function Yf(e, t, n, r, s, o, a, l, c) {
  if (Zf.apply(this, arguments), Vr) {
    if (Vr) {
      var u = uo;
      Vr = !1, uo = null;
    } else throw Error(E(198));
    po || (po = !0, oi = u);
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
function Td(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function wc(e) {
  if (On(e) !== e) throw Error(E(188));
}
function Qf(e) {
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
        if (o === n) return wc(s), e;
        if (o === r) return wc(s), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) n = s, r = o;
    else {
      for (var a = !1, l = s.child; l; ) {
        if (l === n) {
          a = !0, n = s, r = o;
          break;
        }
        if (l === r) {
          a = !0, r = s, n = o;
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = o.child; l; ) {
          if (l === n) {
            a = !0, n = o, r = s;
            break;
          }
          if (l === r) {
            a = !0, r = o, n = s;
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Ad(e) {
  return e = Qf(e), e !== null ? Id(e) : null;
}
function Id(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Id(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Md = Je.unstable_scheduleCallback, bc = Je.unstable_cancelCallback, Xf = Je.unstable_shouldYield, Jf = Je.unstable_requestPaint, ge = Je.unstable_now, em = Je.unstable_getCurrentPriorityLevel, ol = Je.unstable_ImmediatePriority, Ld = Je.unstable_UserBlockingPriority, ho = Je.unstable_NormalPriority, tm = Je.unstable_LowPriority, Rd = Je.unstable_IdlePriority, Fo = null, jt = null;
function nm(e) {
  if (jt && typeof jt.onCommitFiberRoot == "function") try {
    jt.onCommitFiberRoot(Fo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var xt = Math.clz32 ? Math.clz32 : om, rm = Math.log, sm = Math.LN2;
function om(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (rm(e) / sm | 0) | 0;
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
  var r = 0, s = e.suspendedLanes, o = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var l = a & ~s;
    l !== 0 ? r = Ur(l) : (o &= a, o !== 0 && (r = Ur(o)));
  } else a = n & ~s, a !== 0 ? r = Ur(a) : o !== 0 && (r = Ur(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & s) && (s = r & -r, o = t & -t, s >= o || s === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - xt(t), s = 1 << n, r |= e[n], t &= ~s;
  return r;
}
function am(e, t) {
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
function im(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var a = 31 - xt(o), l = 1 << a, c = s[a];
    c === -1 ? (!(l & n) || l & r) && (s[a] = am(l, t)) : c <= t && (e.expiredLanes |= l), o &= ~l;
  }
}
function ai(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Dd() {
  var e = Ms;
  return Ms <<= 1, !(Ms & 4194240) && (Ms = 64), e;
}
function ma(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ss(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - xt(t), e[t] = n;
}
function lm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - xt(n), o = 1 << s;
    t[s] = 0, r[s] = -1, e[s] = -1, n &= ~o;
  }
}
function al(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - xt(n), s = 1 << r;
    s & t | e[r] & t && (e[r] |= t), n &= ~s;
  }
}
var Q = 0;
function zd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Od, il, _d, Fd, Hd, ii = !1, Rs = [], Xt = null, Jt = null, en = null, ss = /* @__PURE__ */ new Map(), os = /* @__PURE__ */ new Map(), Kt = [], cm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function kc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xt = null;
      break;
    case "dragenter":
    case "dragleave":
      Jt = null;
      break;
    case "mouseover":
    case "mouseout":
      en = null;
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
function Ir(e, t, n, r, s, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [s] }, t !== null && (t = Ns(t), t !== null && il(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
}
function um(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return Xt = Ir(Xt, e, t, n, r, s), !0;
    case "dragenter":
      return Jt = Ir(Jt, e, t, n, r, s), !0;
    case "mouseover":
      return en = Ir(en, e, t, n, r, s), !0;
    case "pointerover":
      var o = s.pointerId;
      return ss.set(o, Ir(ss.get(o) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return o = s.pointerId, os.set(o, Ir(os.get(o) || null, e, t, n, r, s)), !0;
  }
  return !1;
}
function Ud(e) {
  var t = kn(e.target);
  if (t !== null) {
    var n = On(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Td(n), t !== null) {
          e.blockedOn = t, Hd(e.priority, function() {
            _d(n);
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
    var n = li(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ni = r, n.target.dispatchEvent(r), ni = null;
    } else return t = Ns(n), t !== null && il(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Sc(e, t, n) {
  Qs(e) && n.delete(t);
}
function dm() {
  ii = !1, Xt !== null && Qs(Xt) && (Xt = null), Jt !== null && Qs(Jt) && (Jt = null), en !== null && Qs(en) && (en = null), ss.forEach(Sc), os.forEach(Sc);
}
function Mr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ii || (ii = !0, Je.unstable_scheduleCallback(Je.unstable_NormalPriority, dm)));
}
function as(e) {
  function t(s) {
    return Mr(s, e);
  }
  if (0 < Rs.length) {
    Mr(Rs[0], e);
    for (var n = 1; n < Rs.length; n++) {
      var r = Rs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Xt !== null && Mr(Xt, e), Jt !== null && Mr(Jt, e), en !== null && Mr(en, e), ss.forEach(t), os.forEach(t), n = 0; n < Kt.length; n++) r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); ) Ud(n), n.blockedOn === null && Kt.shift();
}
var cr = Ft.ReactCurrentBatchConfig, mo = !0;
function pm(e, t, n, r) {
  var s = Q, o = cr.transition;
  cr.transition = null;
  try {
    Q = 1, ll(e, t, n, r);
  } finally {
    Q = s, cr.transition = o;
  }
}
function hm(e, t, n, r) {
  var s = Q, o = cr.transition;
  cr.transition = null;
  try {
    Q = 4, ll(e, t, n, r);
  } finally {
    Q = s, cr.transition = o;
  }
}
function ll(e, t, n, r) {
  if (mo) {
    var s = li(e, t, n, r);
    if (s === null) Na(e, t, r, go, n), kc(e, r);
    else if (um(s, e, t, n, r)) r.stopPropagation();
    else if (kc(e, r), t & 4 && -1 < cm.indexOf(e)) {
      for (; s !== null; ) {
        var o = Ns(s);
        if (o !== null && Od(o), o = li(e, t, n, r), o === null && Na(e, t, r, go, n), o === s) break;
        s = o;
      }
      s !== null && r.stopPropagation();
    } else Na(e, t, r, null, n);
  }
}
var go = null;
function li(e, t, n, r) {
  if (go = null, e = sl(r), e = kn(e), e !== null) if (t = On(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Td(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return go = e, null;
}
function Bd(e) {
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
      switch (em()) {
        case ol:
          return 1;
        case Ld:
          return 4;
        case ho:
        case tm:
          return 16;
        case Rd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null, cl = null, Xs = null;
function Wd() {
  if (Xs) return Xs;
  var e, t = cl, n = t.length, r, s = "value" in Yt ? Yt.value : Yt.textContent, o = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++) ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === s[o - r]; r++) ;
  return Xs = s.slice(e, 1 < r ? 1 - r : void 0);
}
function Js(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ds() {
  return !0;
}
function jc() {
  return !1;
}
function tt(e) {
  function t(n, r, s, o, a) {
    this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = o, this.target = a, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ds : jc, this.isPropagationStopped = jc, this;
  }
  return pe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ds);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ds);
  }, persist: function() {
  }, isPersistent: Ds }), t;
}
var Cr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ul = tt(Cr), js = pe({}, Cr, { view: 0, detail: 0 }), fm = tt(js), ga, xa, Lr, Ho = pe({}, js, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: dl, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Lr && (Lr && e.type === "mousemove" ? (ga = e.screenX - Lr.screenX, xa = e.screenY - Lr.screenY) : xa = ga = 0, Lr = e), ga);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : xa;
} }), Nc = tt(Ho), mm = pe({}, Ho, { dataTransfer: 0 }), gm = tt(mm), xm = pe({}, js, { relatedTarget: 0 }), ya = tt(xm), ym = pe({}, Cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vm = tt(ym), wm = pe({}, Cr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), bm = tt(wm), km = pe({}, Cr, { data: 0 }), Cc = tt(km), Sm = {
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
}, jm = {
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
}, Nm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Cm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Nm[e]) ? !!t[e] : !1;
}
function dl() {
  return Cm;
}
var $m = pe({}, js, { key: function(e) {
  if (e.key) {
    var t = Sm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Js(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? jm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: dl, charCode: function(e) {
  return e.type === "keypress" ? Js(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Js(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Pm = tt($m), Em = pe({}, Ho, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), $c = tt(Em), Tm = pe({}, js, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: dl }), Am = tt(Tm), Im = pe({}, Cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Mm = tt(Im), Lm = pe({}, Ho, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Rm = tt(Lm), Dm = [9, 13, 27, 32], pl = Dt && "CompositionEvent" in window, qr = null;
Dt && "documentMode" in document && (qr = document.documentMode);
var zm = Dt && "TextEvent" in window && !qr, Vd = Dt && (!pl || qr && 8 < qr && 11 >= qr), Pc = " ", Ec = !1;
function qd(e, t) {
  switch (e) {
    case "keyup":
      return Dm.indexOf(t.keyCode) !== -1;
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
function Gd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Gn = !1;
function Om(e, t) {
  switch (e) {
    case "compositionend":
      return Gd(t);
    case "keypress":
      return t.which !== 32 ? null : (Ec = !0, Pc);
    case "textInput":
      return e = t.data, e === Pc && Ec ? null : e;
    default:
      return null;
  }
}
function _m(e, t) {
  if (Gn) return e === "compositionend" || !pl && qd(e, t) ? (e = Wd(), Xs = cl = Yt = null, Gn = !1, e) : null;
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
      return Vd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Tc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Fm[e.type] : t === "textarea";
}
function Kd(e, t, n, r) {
  Nd(r), t = xo(t, "onChange"), 0 < t.length && (n = new ul("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Gr = null, is = null;
function Hm(e) {
  op(e, 0);
}
function Uo(e) {
  var t = Yn(e);
  if (yd(t)) return e;
}
function Um(e, t) {
  if (e === "change") return t;
}
var Zd = !1;
if (Dt) {
  var va;
  if (Dt) {
    var wa = "oninput" in document;
    if (!wa) {
      var Ac = document.createElement("div");
      Ac.setAttribute("oninput", "return;"), wa = typeof Ac.oninput == "function";
    }
    va = wa;
  } else va = !1;
  Zd = va && (!document.documentMode || 9 < document.documentMode);
}
function Ic() {
  Gr && (Gr.detachEvent("onpropertychange", Yd), is = Gr = null);
}
function Yd(e) {
  if (e.propertyName === "value" && Uo(is)) {
    var t = [];
    Kd(t, is, e, sl(e)), Ed(Hm, t);
  }
}
function Bm(e, t, n) {
  e === "focusin" ? (Ic(), Gr = t, is = n, Gr.attachEvent("onpropertychange", Yd)) : e === "focusout" && Ic();
}
function Wm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Uo(is);
}
function Vm(e, t) {
  if (e === "click") return Uo(t);
}
function qm(e, t) {
  if (e === "input" || e === "change") return Uo(t);
}
function Gm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var vt = typeof Object.is == "function" ? Object.is : Gm;
function ls(e, t) {
  if (vt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Wa.call(t, s) || !vt(e[s], t[s])) return !1;
  }
  return !0;
}
function Mc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Lc(e, t) {
  var n = Mc(e);
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
    n = Mc(n);
  }
}
function Qd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Xd() {
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
function hl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Km(e) {
  var t = Xd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Qd(n.ownerDocument.documentElement, n)) {
    if (r !== null && hl(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var s = n.textContent.length, o = Math.min(r.start, s);
        r = r.end === void 0 ? o : Math.min(r.end, s), !e.extend && o > r && (s = r, r = o, o = s), s = Lc(n, o);
        var a = Lc(
          n,
          r
        );
        s && a && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Zm = Dt && "documentMode" in document && 11 >= document.documentMode, Kn = null, ci = null, Kr = null, ui = !1;
function Rc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ui || Kn == null || Kn !== co(r) || (r = Kn, "selectionStart" in r && hl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Kr && ls(Kr, r) || (Kr = r, r = xo(ci, "onSelect"), 0 < r.length && (t = new ul("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Kn)));
}
function zs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Zn = { animationend: zs("Animation", "AnimationEnd"), animationiteration: zs("Animation", "AnimationIteration"), animationstart: zs("Animation", "AnimationStart"), transitionend: zs("Transition", "TransitionEnd") }, ba = {}, Jd = {};
Dt && (Jd = document.createElement("div").style, "AnimationEvent" in window || (delete Zn.animationend.animation, delete Zn.animationiteration.animation, delete Zn.animationstart.animation), "TransitionEvent" in window || delete Zn.transitionend.transition);
function Bo(e) {
  if (ba[e]) return ba[e];
  if (!Zn[e]) return e;
  var t = Zn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Jd) return ba[e] = t[n];
  return e;
}
var ep = Bo("animationend"), tp = Bo("animationiteration"), np = Bo("animationstart"), rp = Bo("transitionend"), sp = /* @__PURE__ */ new Map(), Dc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function pn(e, t) {
  sp.set(e, t), zn(t, [e]);
}
for (var ka = 0; ka < Dc.length; ka++) {
  var Sa = Dc[ka], Ym = Sa.toLowerCase(), Qm = Sa[0].toUpperCase() + Sa.slice(1);
  pn(Ym, "on" + Qm);
}
pn(ep, "onAnimationEnd");
pn(tp, "onAnimationIteration");
pn(np, "onAnimationStart");
pn("dblclick", "onDoubleClick");
pn("focusin", "onFocus");
pn("focusout", "onBlur");
pn(rp, "onTransitionEnd");
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
var Br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));
function zc(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Yf(r, t, void 0, e), e.currentTarget = null;
}
function op(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], s = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var l = r[a], c = l.instance, u = l.currentTarget;
        if (l = l.listener, c !== o && s.isPropagationStopped()) break e;
        zc(s, l, u), o = c;
      }
      else for (a = 0; a < r.length; a++) {
        if (l = r[a], c = l.instance, u = l.currentTarget, l = l.listener, c !== o && s.isPropagationStopped()) break e;
        zc(s, l, u), o = c;
      }
    }
  }
  if (po) throw e = oi, po = !1, oi = null, e;
}
function oe(e, t) {
  var n = t[mi];
  n === void 0 && (n = t[mi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ap(t, e, 2, !1), n.add(r));
}
function ja(e, t, n) {
  var r = 0;
  t && (r |= 4), ap(n, e, r, t);
}
var Os = "_reactListening" + Math.random().toString(36).slice(2);
function cs(e) {
  if (!e[Os]) {
    e[Os] = !0, hd.forEach(function(n) {
      n !== "selectionchange" && (Xm.has(n) || ja(n, !1, e), ja(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Os] || (t[Os] = !0, ja("selectionchange", !1, t));
  }
}
function ap(e, t, n, r) {
  switch (Bd(t)) {
    case 1:
      var s = pm;
      break;
    case 4:
      s = hm;
      break;
    default:
      s = ll;
  }
  n = s.bind(null, t, n, e), s = void 0, !si || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
}
function Na(e, t, n, r, s) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var a = r.tag;
    if (a === 3 || a === 4) {
      var l = r.stateNode.containerInfo;
      if (l === s || l.nodeType === 8 && l.parentNode === s) break;
      if (a === 4) for (a = r.return; a !== null; ) {
        var c = a.tag;
        if ((c === 3 || c === 4) && (c = a.stateNode.containerInfo, c === s || c.nodeType === 8 && c.parentNode === s)) return;
        a = a.return;
      }
      for (; l !== null; ) {
        if (a = kn(l), a === null) return;
        if (c = a.tag, c === 5 || c === 6) {
          r = o = a;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  Ed(function() {
    var u = o, d = sl(n), p = [];
    e: {
      var h = sp.get(e);
      if (h !== void 0) {
        var f = ul, g = e;
        switch (e) {
          case "keypress":
            if (Js(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = Pm;
            break;
          case "focusin":
            g = "focus", f = ya;
            break;
          case "focusout":
            g = "blur", f = ya;
            break;
          case "beforeblur":
          case "afterblur":
            f = ya;
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
            f = Nc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = gm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = Am;
            break;
          case ep:
          case tp:
          case np:
            f = vm;
            break;
          case rp:
            f = Mm;
            break;
          case "scroll":
            f = fm;
            break;
          case "wheel":
            f = Rm;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = bm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = $c;
        }
        var j = (t & 4) !== 0, y = !j && e === "scroll", m = j ? h !== null ? h + "Capture" : null : h;
        j = [];
        for (var x = u, w; x !== null; ) {
          w = x;
          var k = w.stateNode;
          if (w.tag === 5 && k !== null && (w = k, m !== null && (k = rs(x, m), k != null && j.push(us(x, k, w)))), y) break;
          x = x.return;
        }
        0 < j.length && (h = new f(h, g, null, n, d), p.push({ event: h, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", f = e === "mouseout" || e === "pointerout", h && n !== ni && (g = n.relatedTarget || n.fromElement) && (kn(g) || g[zt])) break e;
        if ((f || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window, f ? (g = n.relatedTarget || n.toElement, f = u, g = g ? kn(g) : null, g !== null && (y = On(g), g !== y || g.tag !== 5 && g.tag !== 6) && (g = null)) : (f = null, g = u), f !== g)) {
          if (j = Nc, k = "onMouseLeave", m = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (j = $c, k = "onPointerLeave", m = "onPointerEnter", x = "pointer"), y = f == null ? h : Yn(f), w = g == null ? h : Yn(g), h = new j(k, x + "leave", f, n, d), h.target = y, h.relatedTarget = w, k = null, kn(d) === u && (j = new j(m, x + "enter", g, n, d), j.target = w, j.relatedTarget = y, k = j), y = k, f && g) t: {
            for (j = f, m = g, x = 0, w = j; w; w = Bn(w)) x++;
            for (w = 0, k = m; k; k = Bn(k)) w++;
            for (; 0 < x - w; ) j = Bn(j), x--;
            for (; 0 < w - x; ) m = Bn(m), w--;
            for (; x--; ) {
              if (j === m || m !== null && j === m.alternate) break t;
              j = Bn(j), m = Bn(m);
            }
            j = null;
          }
          else j = null;
          f !== null && Oc(p, h, f, j, !1), g !== null && y !== null && Oc(p, y, g, j, !0);
        }
      }
      e: {
        if (h = u ? Yn(u) : window, f = h.nodeName && h.nodeName.toLowerCase(), f === "select" || f === "input" && h.type === "file") var C = Um;
        else if (Tc(h)) if (Zd) C = qm;
        else {
          C = Wm;
          var v = Bm;
        }
        else (f = h.nodeName) && f.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (C = Vm);
        if (C && (C = C(e, u))) {
          Kd(p, C, n, d);
          break e;
        }
        v && v(e, h, u), e === "focusout" && (v = h._wrapperState) && v.controlled && h.type === "number" && Qa(h, "number", h.value);
      }
      switch (v = u ? Yn(u) : window, e) {
        case "focusin":
          (Tc(v) || v.contentEditable === "true") && (Kn = v, ci = u, Kr = null);
          break;
        case "focusout":
          Kr = ci = Kn = null;
          break;
        case "mousedown":
          ui = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ui = !1, Rc(p, n, d);
          break;
        case "selectionchange":
          if (Zm) break;
        case "keydown":
        case "keyup":
          Rc(p, n, d);
      }
      var $;
      if (pl) e: {
        switch (e) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else Gn ? qd(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Vd && n.locale !== "ko" && (Gn || T !== "onCompositionStart" ? T === "onCompositionEnd" && Gn && ($ = Wd()) : (Yt = d, cl = "value" in Yt ? Yt.value : Yt.textContent, Gn = !0)), v = xo(u, T), 0 < v.length && (T = new Cc(T, e, null, n, d), p.push({ event: T, listeners: v }), $ ? T.data = $ : ($ = Gd(n), $ !== null && (T.data = $)))), ($ = zm ? Om(e, n) : _m(e, n)) && (u = xo(u, "onBeforeInput"), 0 < u.length && (d = new Cc("onBeforeInput", "beforeinput", null, n, d), p.push({ event: d, listeners: u }), d.data = $));
    }
    op(p, t);
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
function Oc(e, t, n, r, s) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n, c = l.alternate, u = l.stateNode;
    if (c !== null && c === r) break;
    l.tag === 5 && u !== null && (l = u, s ? (c = rs(n, o), c != null && a.unshift(us(n, c, l))) : s || (c = rs(n, o), c != null && a.push(us(n, c, l)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Jm = /\r\n?/g, eg = /\u0000|\uFFFD/g;
function _c(e) {
  return (typeof e == "string" ? e : "" + e).replace(Jm, `
`).replace(eg, "");
}
function _s(e, t, n) {
  if (t = _c(t), _c(e) !== t && n) throw Error(E(425));
}
function yo() {
}
var di = null, pi = null;
function hi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var fi = typeof setTimeout == "function" ? setTimeout : void 0, tg = typeof clearTimeout == "function" ? clearTimeout : void 0, Fc = typeof Promise == "function" ? Promise : void 0, ng = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fc < "u" ? function(e) {
  return Fc.resolve(null).then(e).catch(rg);
} : fi;
function rg(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ca(e, t) {
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
function tn(e) {
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
function Hc(e) {
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
var $r = Math.random().toString(36).slice(2), St = "__reactFiber$" + $r, ds = "__reactProps$" + $r, zt = "__reactContainer$" + $r, mi = "__reactEvents$" + $r, sg = "__reactListeners$" + $r, og = "__reactHandles$" + $r;
function kn(e) {
  var t = e[St];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[zt] || n[St]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Hc(e); e !== null; ) {
        if (n = e[St]) return n;
        e = Hc(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ns(e) {
  return e = e[St] || e[zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Yn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Wo(e) {
  return e[ds] || null;
}
var gi = [], Qn = -1;
function hn(e) {
  return { current: e };
}
function ae(e) {
  0 > Qn || (e.current = gi[Qn], gi[Qn] = null, Qn--);
}
function ne(e, t) {
  Qn++, gi[Qn] = e.current, e.current = t;
}
var cn = {}, Le = hn(cn), qe = hn(!1), Tn = cn;
function gr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var s = {}, o;
  for (o in n) s[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
}
function Ge(e) {
  return e = e.childContextTypes, e != null;
}
function vo() {
  ae(qe), ae(Le);
}
function Uc(e, t, n) {
  if (Le.current !== cn) throw Error(E(168));
  ne(Le, t), ne(qe, n);
}
function ip(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(E(108, Bf(e) || "Unknown", s));
  return pe({}, n, r);
}
function wo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || cn, Tn = Le.current, ne(Le, e), ne(qe, qe.current), !0;
}
function Bc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? (e = ip(e, t, Tn), r.__reactInternalMemoizedMergedChildContext = e, ae(qe), ae(Le), ne(Le, e)) : ae(qe), ne(qe, n);
}
var Tt = null, Vo = !1, $a = !1;
function lp(e) {
  Tt === null ? Tt = [e] : Tt.push(e);
}
function ag(e) {
  Vo = !0, lp(e);
}
function fn() {
  if (!$a && Tt !== null) {
    $a = !0;
    var e = 0, t = Q;
    try {
      var n = Tt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Tt = null, Vo = !1;
    } catch (s) {
      throw Tt !== null && (Tt = Tt.slice(e + 1)), Md(ol, fn), s;
    } finally {
      Q = t, $a = !1;
    }
  }
  return null;
}
var Xn = [], Jn = 0, bo = null, ko = 0, rt = [], st = 0, An = null, It = 1, Mt = "";
function wn(e, t) {
  Xn[Jn++] = ko, Xn[Jn++] = bo, bo = e, ko = t;
}
function cp(e, t, n) {
  rt[st++] = It, rt[st++] = Mt, rt[st++] = An, An = e;
  var r = It;
  e = Mt;
  var s = 32 - xt(r) - 1;
  r &= ~(1 << s), n += 1;
  var o = 32 - xt(t) + s;
  if (30 < o) {
    var a = s - s % 5;
    o = (r & (1 << a) - 1).toString(32), r >>= a, s -= a, It = 1 << 32 - xt(t) + s | n << s | r, Mt = o + e;
  } else It = 1 << o | n << s | r, Mt = e;
}
function fl(e) {
  e.return !== null && (wn(e, 1), cp(e, 1, 0));
}
function ml(e) {
  for (; e === bo; ) bo = Xn[--Jn], Xn[Jn] = null, ko = Xn[--Jn], Xn[Jn] = null;
  for (; e === An; ) An = rt[--st], rt[st] = null, Mt = rt[--st], rt[st] = null, It = rt[--st], rt[st] = null;
}
var Xe = null, Ye = null, ie = !1, ft = null;
function up(e, t) {
  var n = ot(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Wc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ye = tn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ye = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = An !== null ? { id: It, overflow: Mt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ot(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Xe = e, Ye = null, !0) : !1;
    default:
      return !1;
  }
}
function xi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function yi(e) {
  if (ie) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!Wc(e, t)) {
        if (xi(e)) throw Error(E(418));
        t = tn(n.nextSibling);
        var r = Xe;
        t && Wc(e, t) ? up(r, n) : (e.flags = e.flags & -4097 | 2, ie = !1, Xe = e);
      }
    } else {
      if (xi(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, ie = !1, Xe = e;
    }
  }
}
function Vc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Xe = e;
}
function Fs(e) {
  if (e !== Xe) return !1;
  if (!ie) return Vc(e), ie = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !hi(e.type, e.memoizedProps)), t && (t = Ye)) {
    if (xi(e)) throw dp(), Error(E(418));
    for (; t; ) up(e, t), t = tn(t.nextSibling);
  }
  if (Vc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = tn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Xe ? tn(e.stateNode.nextSibling) : null;
  return !0;
}
function dp() {
  for (var e = Ye; e; ) e = tn(e.nextSibling);
}
function xr() {
  Ye = Xe = null, ie = !1;
}
function gl(e) {
  ft === null ? ft = [e] : ft.push(e);
}
var ig = Ft.ReactCurrentBatchConfig;
function Rr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var s = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(a) {
        var l = s.refs;
        a === null ? delete l[o] : l[o] = a;
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
function qc(e) {
  var t = e._init;
  return t(e._payload);
}
function pp(e) {
  function t(m, x) {
    if (e) {
      var w = m.deletions;
      w === null ? (m.deletions = [x], m.flags |= 16) : w.push(x);
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
    return m = on(m, x), m.index = 0, m.sibling = null, m;
  }
  function o(m, x, w) {
    return m.index = w, e ? (w = m.alternate, w !== null ? (w = w.index, w < x ? (m.flags |= 2, x) : w) : (m.flags |= 2, x)) : (m.flags |= 1048576, x);
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, x, w, k) {
    return x === null || x.tag !== 6 ? (x = La(w, m.mode, k), x.return = m, x) : (x = s(x, w), x.return = m, x);
  }
  function c(m, x, w, k) {
    var C = w.type;
    return C === qn ? d(m, x, w.props.children, k, w.key) : x !== null && (x.elementType === C || typeof C == "object" && C !== null && C.$$typeof === qt && qc(C) === x.type) ? (k = s(x, w.props), k.ref = Rr(m, x, w), k.return = m, k) : (k = ao(w.type, w.key, w.props, null, m.mode, k), k.ref = Rr(m, x, w), k.return = m, k);
  }
  function u(m, x, w, k) {
    return x === null || x.tag !== 4 || x.stateNode.containerInfo !== w.containerInfo || x.stateNode.implementation !== w.implementation ? (x = Ra(w, m.mode, k), x.return = m, x) : (x = s(x, w.children || []), x.return = m, x);
  }
  function d(m, x, w, k, C) {
    return x === null || x.tag !== 7 ? (x = Pn(w, m.mode, k, C), x.return = m, x) : (x = s(x, w), x.return = m, x);
  }
  function p(m, x, w) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return x = La("" + x, m.mode, w), x.return = m, x;
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ts:
          return w = ao(x.type, x.key, x.props, null, m.mode, w), w.ref = Rr(m, null, x), w.return = m, w;
        case Vn:
          return x = Ra(x, m.mode, w), x.return = m, x;
        case qt:
          var k = x._init;
          return p(m, k(x._payload), w);
      }
      if (Hr(x) || Tr(x)) return x = Pn(x, m.mode, w, null), x.return = m, x;
      Hs(m, x);
    }
    return null;
  }
  function h(m, x, w, k) {
    var C = x !== null ? x.key : null;
    if (typeof w == "string" && w !== "" || typeof w == "number") return C !== null ? null : l(m, x, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ts:
          return w.key === C ? c(m, x, w, k) : null;
        case Vn:
          return w.key === C ? u(m, x, w, k) : null;
        case qt:
          return C = w._init, h(
            m,
            x,
            C(w._payload),
            k
          );
      }
      if (Hr(w) || Tr(w)) return C !== null ? null : d(m, x, w, k, null);
      Hs(m, w);
    }
    return null;
  }
  function f(m, x, w, k, C) {
    if (typeof k == "string" && k !== "" || typeof k == "number") return m = m.get(w) || null, l(x, m, "" + k, C);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Ts:
          return m = m.get(k.key === null ? w : k.key) || null, c(x, m, k, C);
        case Vn:
          return m = m.get(k.key === null ? w : k.key) || null, u(x, m, k, C);
        case qt:
          var v = k._init;
          return f(m, x, w, v(k._payload), C);
      }
      if (Hr(k) || Tr(k)) return m = m.get(w) || null, d(x, m, k, C, null);
      Hs(x, k);
    }
    return null;
  }
  function g(m, x, w, k) {
    for (var C = null, v = null, $ = x, T = x = 0, U = null; $ !== null && T < w.length; T++) {
      $.index > T ? (U = $, $ = null) : U = $.sibling;
      var L = h(m, $, w[T], k);
      if (L === null) {
        $ === null && ($ = U);
        break;
      }
      e && $ && L.alternate === null && t(m, $), x = o(L, x, T), v === null ? C = L : v.sibling = L, v = L, $ = U;
    }
    if (T === w.length) return n(m, $), ie && wn(m, T), C;
    if ($ === null) {
      for (; T < w.length; T++) $ = p(m, w[T], k), $ !== null && (x = o($, x, T), v === null ? C = $ : v.sibling = $, v = $);
      return ie && wn(m, T), C;
    }
    for ($ = r(m, $); T < w.length; T++) U = f($, m, T, w[T], k), U !== null && (e && U.alternate !== null && $.delete(U.key === null ? T : U.key), x = o(U, x, T), v === null ? C = U : v.sibling = U, v = U);
    return e && $.forEach(function(Z) {
      return t(m, Z);
    }), ie && wn(m, T), C;
  }
  function j(m, x, w, k) {
    var C = Tr(w);
    if (typeof C != "function") throw Error(E(150));
    if (w = C.call(w), w == null) throw Error(E(151));
    for (var v = C = null, $ = x, T = x = 0, U = null, L = w.next(); $ !== null && !L.done; T++, L = w.next()) {
      $.index > T ? (U = $, $ = null) : U = $.sibling;
      var Z = h(m, $, L.value, k);
      if (Z === null) {
        $ === null && ($ = U);
        break;
      }
      e && $ && Z.alternate === null && t(m, $), x = o(Z, x, T), v === null ? C = Z : v.sibling = Z, v = Z, $ = U;
    }
    if (L.done) return n(
      m,
      $
    ), ie && wn(m, T), C;
    if ($ === null) {
      for (; !L.done; T++, L = w.next()) L = p(m, L.value, k), L !== null && (x = o(L, x, T), v === null ? C = L : v.sibling = L, v = L);
      return ie && wn(m, T), C;
    }
    for ($ = r(m, $); !L.done; T++, L = w.next()) L = f($, m, T, L.value, k), L !== null && (e && L.alternate !== null && $.delete(L.key === null ? T : L.key), x = o(L, x, T), v === null ? C = L : v.sibling = L, v = L);
    return e && $.forEach(function(J) {
      return t(m, J);
    }), ie && wn(m, T), C;
  }
  function y(m, x, w, k) {
    if (typeof w == "object" && w !== null && w.type === qn && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ts:
          e: {
            for (var C = w.key, v = x; v !== null; ) {
              if (v.key === C) {
                if (C = w.type, C === qn) {
                  if (v.tag === 7) {
                    n(m, v.sibling), x = s(v, w.props.children), x.return = m, m = x;
                    break e;
                  }
                } else if (v.elementType === C || typeof C == "object" && C !== null && C.$$typeof === qt && qc(C) === v.type) {
                  n(m, v.sibling), x = s(v, w.props), x.ref = Rr(m, v, w), x.return = m, m = x;
                  break e;
                }
                n(m, v);
                break;
              } else t(m, v);
              v = v.sibling;
            }
            w.type === qn ? (x = Pn(w.props.children, m.mode, k, w.key), x.return = m, m = x) : (k = ao(w.type, w.key, w.props, null, m.mode, k), k.ref = Rr(m, x, w), k.return = m, m = k);
          }
          return a(m);
        case Vn:
          e: {
            for (v = w.key; x !== null; ) {
              if (x.key === v) if (x.tag === 4 && x.stateNode.containerInfo === w.containerInfo && x.stateNode.implementation === w.implementation) {
                n(m, x.sibling), x = s(x, w.children || []), x.return = m, m = x;
                break e;
              } else {
                n(m, x);
                break;
              }
              else t(m, x);
              x = x.sibling;
            }
            x = Ra(w, m.mode, k), x.return = m, m = x;
          }
          return a(m);
        case qt:
          return v = w._init, y(m, x, v(w._payload), k);
      }
      if (Hr(w)) return g(m, x, w, k);
      if (Tr(w)) return j(m, x, w, k);
      Hs(m, w);
    }
    return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, x !== null && x.tag === 6 ? (n(m, x.sibling), x = s(x, w), x.return = m, m = x) : (n(m, x), x = La(w, m.mode, k), x.return = m, m = x), a(m)) : n(m, x);
  }
  return y;
}
var yr = pp(!0), hp = pp(!1), So = hn(null), jo = null, er = null, xl = null;
function yl() {
  xl = er = jo = null;
}
function vl(e) {
  var t = So.current;
  ae(So), e._currentValue = t;
}
function vi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function ur(e, t) {
  jo = e, xl = er = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (We = !0), e.firstContext = null);
}
function it(e) {
  var t = e._currentValue;
  if (xl !== e) if (e = { context: e, memoizedValue: t, next: null }, er === null) {
    if (jo === null) throw Error(E(308));
    er = e, jo.dependencies = { lanes: 0, firstContext: e };
  } else er = er.next = e;
  return t;
}
var Sn = null;
function wl(e) {
  Sn === null ? Sn = [e] : Sn.push(e);
}
function fp(e, t, n, r) {
  var s = t.interleaved;
  return s === null ? (n.next = n, wl(t)) : (n.next = s.next, s.next = n), t.interleaved = n, Ot(e, r);
}
function Ot(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Gt = !1;
function bl(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function mp(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Lt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function nn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Y & 2) {
    var s = r.pending;
    return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, Ot(e, n);
  }
  return s = r.interleaved, s === null ? (t.next = t, wl(r)) : (t.next = s.next, s.next = t), r.interleaved = t, Ot(e, n);
}
function eo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, al(e, n);
  }
}
function Gc(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var s = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? s = o = a : o = o.next = a, n = n.next;
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
  Gt = !1;
  var o = s.firstBaseUpdate, a = s.lastBaseUpdate, l = s.shared.pending;
  if (l !== null) {
    s.shared.pending = null;
    var c = l, u = c.next;
    c.next = null, a === null ? o = u : a.next = u, a = c;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== a && (l === null ? d.firstBaseUpdate = u : l.next = u, d.lastBaseUpdate = c));
  }
  if (o !== null) {
    var p = s.baseState;
    a = 0, d = u = c = null, l = o;
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
          var g = e, j = l;
          switch (h = t, f = n, j.tag) {
            case 1:
              if (g = j.payload, typeof g == "function") {
                p = g.call(f, p, h);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = j.payload, h = typeof g == "function" ? g.call(f, p, h) : g, h == null) break e;
              p = pe({}, p, h);
              break e;
            case 2:
              Gt = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, h = s.effects, h === null ? s.effects = [l] : h.push(l));
      } else f = { eventTime: f, lane: h, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (u = d = f, c = p) : d = d.next = f, a |= h;
      if (l = l.next, l === null) {
        if (l = s.shared.pending, l === null) break;
        h = l, l = h.next, h.next = null, s.lastBaseUpdate = h, s.shared.pending = null;
      }
    } while (!0);
    if (d === null && (c = p), s.baseState = c, s.firstBaseUpdate = u, s.lastBaseUpdate = d, t = s.shared.interleaved, t !== null) {
      s = t;
      do
        a |= s.lane, s = s.next;
      while (s !== t);
    } else o === null && (s.shared.lanes = 0);
    Mn |= a, e.lanes = a, e.memoizedState = p;
  }
}
function Kc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], s = r.callback;
    if (s !== null) {
      if (r.callback = null, r = n, typeof s != "function") throw Error(E(191, s));
      s.call(r);
    }
  }
}
var Cs = {}, Nt = hn(Cs), ps = hn(Cs), hs = hn(Cs);
function jn(e) {
  if (e === Cs) throw Error(E(174));
  return e;
}
function kl(e, t) {
  switch (ne(hs, t), ne(ps, e), ne(Nt, Cs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ja(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ja(t, e);
  }
  ae(Nt), ne(Nt, t);
}
function vr() {
  ae(Nt), ae(ps), ae(hs);
}
function gp(e) {
  jn(hs.current);
  var t = jn(Nt.current), n = Ja(t, e.type);
  t !== n && (ne(ps, e), ne(Nt, n));
}
function Sl(e) {
  ps.current === e && (ae(Nt), ae(ps));
}
var ue = hn(0);
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
var Pa = [];
function jl() {
  for (var e = 0; e < Pa.length; e++) Pa[e]._workInProgressVersionPrimary = null;
  Pa.length = 0;
}
var to = Ft.ReactCurrentDispatcher, Ea = Ft.ReactCurrentBatchConfig, In = 0, de = null, ye = null, ke = null, $o = !1, Zr = !1, fs = 0, lg = 0;
function Te() {
  throw Error(E(321));
}
function Nl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!vt(e[n], t[n])) return !1;
  return !0;
}
function Cl(e, t, n, r, s, o) {
  if (In = o, de = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, to.current = e === null || e.memoizedState === null ? pg : hg, e = n(r, s), Zr) {
    o = 0;
    do {
      if (Zr = !1, fs = 0, 25 <= o) throw Error(E(301));
      o += 1, ke = ye = null, t.updateQueue = null, to.current = fg, e = n(r, s);
    } while (Zr);
  }
  if (to.current = Po, t = ye !== null && ye.next !== null, In = 0, ke = ye = de = null, $o = !1, t) throw Error(E(300));
  return e;
}
function $l() {
  var e = fs !== 0;
  return fs = 0, e;
}
function bt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ke === null ? de.memoizedState = ke = e : ke = ke.next = e, ke;
}
function lt() {
  if (ye === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ye.next;
  var t = ke === null ? de.memoizedState : ke.next;
  if (t !== null) ke = t, ye = e;
  else {
    if (e === null) throw Error(E(310));
    ye = e, e = { memoizedState: ye.memoizedState, baseState: ye.baseState, baseQueue: ye.baseQueue, queue: ye.queue, next: null }, ke === null ? de.memoizedState = ke = e : ke = ke.next = e;
  }
  return ke;
}
function ms(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ta(e) {
  var t = lt(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = ye, s = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (s !== null) {
      var a = s.next;
      s.next = o.next, o.next = a;
    }
    r.baseQueue = s = o, n.pending = null;
  }
  if (s !== null) {
    o = s.next, r = r.baseState;
    var l = a = null, c = null, u = o;
    do {
      var d = u.lane;
      if ((In & d) === d) c !== null && (c = c.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        c === null ? (l = c = p, a = r) : c = c.next = p, de.lanes |= d, Mn |= d;
      }
      u = u.next;
    } while (u !== null && u !== o);
    c === null ? a = r : c.next = l, vt(r, t.memoizedState) || (We = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    s = e;
    do
      o = s.lane, de.lanes |= o, Mn |= o, s = s.next;
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Aa(e) {
  var t = lt(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, s = n.pending, o = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var a = s = s.next;
    do
      o = e(o, a.action), a = a.next;
    while (a !== s);
    vt(o, t.memoizedState) || (We = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function xp() {
}
function yp(e, t) {
  var n = de, r = lt(), s = t(), o = !vt(r.memoizedState, s);
  if (o && (r.memoizedState = s, We = !0), r = r.queue, Pl(bp.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ke !== null && ke.memoizedState.tag & 1) {
    if (n.flags |= 2048, gs(9, wp.bind(null, n, r, s, t), void 0, null), je === null) throw Error(E(349));
    In & 30 || vp(n, t, s);
  }
  return s;
}
function vp(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function wp(e, t, n, r) {
  t.value = n, t.getSnapshot = r, kp(t) && Sp(e);
}
function bp(e, t, n) {
  return n(function() {
    kp(t) && Sp(e);
  });
}
function kp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !vt(e, n);
  } catch {
    return !0;
  }
}
function Sp(e) {
  var t = Ot(e, 1);
  t !== null && yt(t, e, 1, -1);
}
function Zc(e) {
  var t = bt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ms, lastRenderedState: e }, t.queue = e, e = e.dispatch = dg.bind(null, de, e), [t.memoizedState, e];
}
function gs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function jp() {
  return lt().memoizedState;
}
function no(e, t, n, r) {
  var s = bt();
  de.flags |= e, s.memoizedState = gs(1 | t, n, void 0, r === void 0 ? null : r);
}
function qo(e, t, n, r) {
  var s = lt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ye !== null) {
    var a = ye.memoizedState;
    if (o = a.destroy, r !== null && Nl(r, a.deps)) {
      s.memoizedState = gs(t, n, o, r);
      return;
    }
  }
  de.flags |= e, s.memoizedState = gs(1 | t, n, o, r);
}
function Yc(e, t) {
  return no(8390656, 8, e, t);
}
function Pl(e, t) {
  return qo(2048, 8, e, t);
}
function Np(e, t) {
  return qo(4, 2, e, t);
}
function Cp(e, t) {
  return qo(4, 4, e, t);
}
function $p(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Pp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, qo(4, 4, $p.bind(null, t, e), n);
}
function El() {
}
function Ep(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Nl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Tp(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Nl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ap(e, t, n) {
  return In & 21 ? (vt(n, t) || (n = Dd(), de.lanes |= n, Mn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, We = !0), e.memoizedState = n);
}
function cg(e, t) {
  var n = Q;
  Q = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ea.transition;
  Ea.transition = {};
  try {
    e(!1), t();
  } finally {
    Q = n, Ea.transition = r;
  }
}
function Ip() {
  return lt().memoizedState;
}
function ug(e, t, n) {
  var r = sn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Mp(e)) Lp(t, n);
  else if (n = fp(e, t, n, r), n !== null) {
    var s = _e();
    yt(n, e, r, s), Rp(n, t, r);
  }
}
function dg(e, t, n) {
  var r = sn(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Mp(e)) Lp(t, s);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var a = t.lastRenderedState, l = o(a, n);
      if (s.hasEagerState = !0, s.eagerState = l, vt(l, a)) {
        var c = t.interleaved;
        c === null ? (s.next = s, wl(t)) : (s.next = c.next, c.next = s), t.interleaved = s;
        return;
      }
    } catch {
    } finally {
    }
    n = fp(e, t, s, r), n !== null && (s = _e(), yt(n, e, r, s), Rp(n, t, r));
  }
}
function Mp(e) {
  var t = e.alternate;
  return e === de || t !== null && t === de;
}
function Lp(e, t) {
  Zr = $o = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Rp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, al(e, n);
  }
}
var Po = { readContext: it, useCallback: Te, useContext: Te, useEffect: Te, useImperativeHandle: Te, useInsertionEffect: Te, useLayoutEffect: Te, useMemo: Te, useReducer: Te, useRef: Te, useState: Te, useDebugValue: Te, useDeferredValue: Te, useTransition: Te, useMutableSource: Te, useSyncExternalStore: Te, useId: Te, unstable_isNewReconciler: !1 }, pg = { readContext: it, useCallback: function(e, t) {
  return bt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: it, useEffect: Yc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, no(
    4194308,
    4,
    $p.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return no(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return no(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = bt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = bt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ug.bind(null, de, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = bt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Zc, useDebugValue: El, useDeferredValue: function(e) {
  return bt().memoizedState = e;
}, useTransition: function() {
  var e = Zc(!1), t = e[0];
  return e = cg.bind(null, e[1]), bt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = de, s = bt();
  if (ie) {
    if (n === void 0) throw Error(E(407));
    n = n();
  } else {
    if (n = t(), je === null) throw Error(E(349));
    In & 30 || vp(r, t, n);
  }
  s.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return s.queue = o, Yc(bp.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, gs(9, wp.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = bt(), t = je.identifierPrefix;
  if (ie) {
    var n = Mt, r = It;
    n = (r & ~(1 << 32 - xt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = fs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = lg++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, hg = {
  readContext: it,
  useCallback: Ep,
  useContext: it,
  useEffect: Pl,
  useImperativeHandle: Pp,
  useInsertionEffect: Np,
  useLayoutEffect: Cp,
  useMemo: Tp,
  useReducer: Ta,
  useRef: jp,
  useState: function() {
    return Ta(ms);
  },
  useDebugValue: El,
  useDeferredValue: function(e) {
    var t = lt();
    return Ap(t, ye.memoizedState, e);
  },
  useTransition: function() {
    var e = Ta(ms)[0], t = lt().memoizedState;
    return [e, t];
  },
  useMutableSource: xp,
  useSyncExternalStore: yp,
  useId: Ip,
  unstable_isNewReconciler: !1
}, fg = { readContext: it, useCallback: Ep, useContext: it, useEffect: Pl, useImperativeHandle: Pp, useInsertionEffect: Np, useLayoutEffect: Cp, useMemo: Tp, useReducer: Aa, useRef: jp, useState: function() {
  return Aa(ms);
}, useDebugValue: El, useDeferredValue: function(e) {
  var t = lt();
  return ye === null ? t.memoizedState = e : Ap(t, ye.memoizedState, e);
}, useTransition: function() {
  var e = Aa(ms)[0], t = lt().memoizedState;
  return [e, t];
}, useMutableSource: xp, useSyncExternalStore: yp, useId: Ip, unstable_isNewReconciler: !1 };
function pt(e, t) {
  if (e && e.defaultProps) {
    t = pe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function wi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : pe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Go = { isMounted: function(e) {
  return (e = e._reactInternals) ? On(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = _e(), s = sn(e), o = Lt(r, s);
  o.payload = t, n != null && (o.callback = n), t = nn(e, o, s), t !== null && (yt(t, e, s, r), eo(t, e, s));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = _e(), s = sn(e), o = Lt(r, s);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = nn(e, o, s), t !== null && (yt(t, e, s, r), eo(t, e, s));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = _e(), r = sn(e), s = Lt(n, r);
  s.tag = 2, t != null && (s.callback = t), t = nn(e, s, r), t !== null && (yt(t, e, r, n), eo(t, e, r));
} };
function Qc(e, t, n, r, s, o, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, a) : t.prototype && t.prototype.isPureReactComponent ? !ls(n, r) || !ls(s, o) : !0;
}
function Dp(e, t, n) {
  var r = !1, s = cn, o = t.contextType;
  return typeof o == "object" && o !== null ? o = it(o) : (s = Ge(t) ? Tn : Le.current, r = t.contextTypes, o = (r = r != null) ? gr(e, s) : cn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Go, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Xc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Go.enqueueReplaceState(t, t.state, null);
}
function bi(e, t, n, r) {
  var s = e.stateNode;
  s.props = n, s.state = e.memoizedState, s.refs = {}, bl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? s.context = it(o) : (o = Ge(t) ? Tn : Le.current, s.context = gr(e, o)), s.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (wi(e, t, o, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && Go.enqueueReplaceState(s, s.state, null), No(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function wr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Uf(r), r = r.return;
    while (r);
    var s = n;
  } catch (o) {
    s = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Ia(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ki(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var mg = typeof WeakMap == "function" ? WeakMap : Map;
function zp(e, t, n) {
  n = Lt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    To || (To = !0, Ii = r), ki(e, t);
  }, n;
}
function Op(e, t, n) {
  n = Lt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    n.payload = function() {
      return r(s);
    }, n.callback = function() {
      ki(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    ki(e, t), typeof r != "function" && (rn === null ? rn = /* @__PURE__ */ new Set([this]) : rn.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function Jc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mg();
    var s = /* @__PURE__ */ new Set();
    r.set(t, s);
  } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
  s.has(n) || (s.add(n), e = Eg.bind(null, e, t, n), t.then(e, e));
}
function eu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function tu(e, t, n, r, s) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Lt(-1, 1), t.tag = 2, nn(n, t, 1))), n.lanes |= 1), e);
}
var gg = Ft.ReactCurrentOwner, We = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? hp(t, null, n, r) : yr(t, e.child, n, r);
}
function nu(e, t, n, r, s) {
  n = n.render;
  var o = t.ref;
  return ur(t, s), r = Cl(e, t, n, r, o, s), n = $l(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, _t(e, t, s)) : (ie && n && fl(t), t.flags |= 1, Oe(e, t, r, s), t.child);
}
function ru(e, t, n, r, s) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !zl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, _p(e, t, o, r, s)) : (e = ao(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & s)) {
    var a = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ls, n(a, r) && e.ref === t.ref) return _t(e, t, s);
  }
  return t.flags |= 1, e = on(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function _p(e, t, n, r, s) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ls(o, r) && e.ref === t.ref) if (We = !1, t.pendingProps = r = o, (e.lanes & s) !== 0) e.flags & 131072 && (We = !0);
    else return t.lanes = e.lanes, _t(e, t, s);
  }
  return Si(e, t, n, r, s);
}
function Fp(e, t, n) {
  var r = t.pendingProps, s = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ne(nr, Ze), Ze |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ne(nr, Ze), Ze |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, ne(nr, Ze), Ze |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ne(nr, Ze), Ze |= r;
  return Oe(e, t, s, n), t.child;
}
function Hp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Si(e, t, n, r, s) {
  var o = Ge(n) ? Tn : Le.current;
  return o = gr(t, o), ur(t, s), n = Cl(e, t, n, r, o, s), r = $l(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, _t(e, t, s)) : (ie && r && fl(t), t.flags |= 1, Oe(e, t, n, s), t.child);
}
function su(e, t, n, r, s) {
  if (Ge(n)) {
    var o = !0;
    wo(t);
  } else o = !1;
  if (ur(t, s), t.stateNode === null) ro(e, t), Dp(t, n, r), bi(t, n, r, s), r = !0;
  else if (e === null) {
    var a = t.stateNode, l = t.memoizedProps;
    a.props = l;
    var c = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = it(u) : (u = Ge(n) ? Tn : Le.current, u = gr(t, u));
    var d = n.getDerivedStateFromProps, p = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    p || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== r || c !== u) && Xc(t, a, r, u), Gt = !1;
    var h = t.memoizedState;
    a.state = h, No(t, r, a, s), c = t.memoizedState, l !== r || h !== c || qe.current || Gt ? (typeof d == "function" && (wi(t, n, d, r), c = t.memoizedState), (l = Gt || Qc(t, n, l, r, h, c, u)) ? (p || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), a.props = r, a.state = c, a.context = u, r = l) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, mp(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : pt(t.type, l), a.props = u, p = t.pendingProps, h = a.context, c = n.contextType, typeof c == "object" && c !== null ? c = it(c) : (c = Ge(n) ? Tn : Le.current, c = gr(t, c));
    var f = n.getDerivedStateFromProps;
    (d = typeof f == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== p || h !== c) && Xc(t, a, r, c), Gt = !1, h = t.memoizedState, a.state = h, No(t, r, a, s);
    var g = t.memoizedState;
    l !== p || h !== g || qe.current || Gt ? (typeof f == "function" && (wi(t, n, f, r), g = t.memoizedState), (u = Gt || Qc(t, n, u, r, h, g, c) || !1) ? (d || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, g, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, g, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), a.props = r, a.state = g, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ji(e, t, n, r, o, s);
}
function ji(e, t, n, r, s, o) {
  Hp(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return s && Bc(t, n, !1), _t(e, t, o);
  r = t.stateNode, gg.current = t;
  var l = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = yr(t, e.child, null, o), t.child = yr(t, null, l, o)) : Oe(e, t, l, o), t.memoizedState = r.state, s && Bc(t, n, !0), t.child;
}
function Up(e) {
  var t = e.stateNode;
  t.pendingContext ? Uc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Uc(e, t.context, !1), kl(e, t.containerInfo);
}
function ou(e, t, n, r, s) {
  return xr(), gl(s), t.flags |= 256, Oe(e, t, n, r), t.child;
}
var Ni = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ci(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Bp(e, t, n) {
  var r = t.pendingProps, s = ue.current, o = !1, a = (t.flags & 128) !== 0, l;
  if ((l = a) || (l = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), ne(ue, s & 1), e === null)
    return yi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, a = { mode: "hidden", children: a }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = a) : o = Yo(a, r, 0, null), e = Pn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ci(n), t.memoizedState = Ni, e) : Tl(t, a));
  if (s = e.memoizedState, s !== null && (l = s.dehydrated, l !== null)) return xg(e, t, a, r, l, s, n);
  if (o) {
    o = r.fallback, a = t.mode, s = e.child, l = s.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = on(s, c), r.subtreeFlags = s.subtreeFlags & 14680064), l !== null ? o = on(l, o) : (o = Pn(o, a, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, a = e.child.memoizedState, a = a === null ? Ci(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, o.memoizedState = a, o.childLanes = e.childLanes & ~n, t.memoizedState = Ni, r;
  }
  return o = e.child, e = o.sibling, r = on(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Tl(e, t) {
  return t = Yo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Us(e, t, n, r) {
  return r !== null && gl(r), yr(t, e.child, null, n), e = Tl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function xg(e, t, n, r, s, o, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ia(Error(E(422))), Us(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, s = t.mode, r = Yo({ mode: "visible", children: r.children }, s, 0, null), o = Pn(o, s, a, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && yr(t, e.child, null, a), t.child.memoizedState = Ci(a), t.memoizedState = Ni, o);
  if (!(t.mode & 1)) return Us(e, t, a, null);
  if (s.data === "$!") {
    if (r = s.nextSibling && s.nextSibling.dataset, r) var l = r.dgst;
    return r = l, o = Error(E(419)), r = Ia(o, r, void 0), Us(e, t, a, r);
  }
  if (l = (a & e.childLanes) !== 0, We || l) {
    if (r = je, r !== null) {
      switch (a & -a) {
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
      s = s & (r.suspendedLanes | a) ? 0 : s, s !== 0 && s !== o.retryLane && (o.retryLane = s, Ot(e, s), yt(r, e, s, -1));
    }
    return Dl(), r = Ia(Error(E(421))), Us(e, t, a, r);
  }
  return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Tg.bind(null, e), s._reactRetry = t, null) : (e = o.treeContext, Ye = tn(s.nextSibling), Xe = t, ie = !0, ft = null, e !== null && (rt[st++] = It, rt[st++] = Mt, rt[st++] = An, It = e.id, Mt = e.overflow, An = t), t = Tl(t, r.children), t.flags |= 4096, t);
}
function au(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vi(e.return, t, n);
}
function Ma(e, t, n, r, s) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = s);
}
function Wp(e, t, n) {
  var r = t.pendingProps, s = r.revealOrder, o = r.tail;
  if (Oe(e, t, r.children, n), r = ue.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && au(e, n, t);
      else if (e.tag === 19) au(e, n, t);
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
  if (ne(ue, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (s) {
    case "forwards":
      for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && Co(e) === null && (s = n), n = n.sibling;
      n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Ma(t, !1, s, n, o);
      break;
    case "backwards":
      for (n = null, s = t.child, t.child = null; s !== null; ) {
        if (e = s.alternate, e !== null && Co(e) === null) {
          t.child = s;
          break;
        }
        e = s.sibling, s.sibling = n, n = s, s = e;
      }
      Ma(t, !0, n, null, o);
      break;
    case "together":
      Ma(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ro(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function _t(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Mn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = on(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function yg(e, t, n) {
  switch (t.tag) {
    case 3:
      Up(t), xr();
      break;
    case 5:
      gp(t);
      break;
    case 1:
      Ge(t.type) && wo(t);
      break;
    case 4:
      kl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, s = t.memoizedProps.value;
      ne(So, r._currentValue), r._currentValue = s;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ne(ue, ue.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Bp(e, t, n) : (ne(ue, ue.current & 1), e = _t(e, t, n), e !== null ? e.sibling : null);
      ne(ue, ue.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Wp(e, t, n);
        t.flags |= 128;
      }
      if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), ne(ue, ue.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Fp(e, t, n);
  }
  return _t(e, t, n);
}
var Vp, $i, qp, Gp;
Vp = function(e, t) {
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
$i = function() {
};
qp = function(e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    e = t.stateNode, jn(Nt.current);
    var o = null;
    switch (n) {
      case "input":
        s = Za(e, s), r = Za(e, r), o = [];
        break;
      case "select":
        s = pe({}, s, { value: void 0 }), r = pe({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        s = Xa(e, s), r = Xa(e, r), o = [];
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = yo);
    }
    ei(n, r);
    var a;
    n = null;
    for (u in s) if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null) if (u === "style") {
      var l = s[u];
      for (a in l) l.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ts.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (l = s != null ? s[u] : void 0, r.hasOwnProperty(u) && c !== l && (c != null || l != null)) if (u === "style") if (l) {
        for (a in l) !l.hasOwnProperty(a) || c && c.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in c) c.hasOwnProperty(a) && l[a] !== c[a] && (n || (n = {}), n[a] = c[a]);
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
Gp = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Dr(e, t) {
  if (!ie) switch (e.tailMode) {
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
function Ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
  else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function vg(e, t, n) {
  var r = t.pendingProps;
  switch (ml(t), t.tag) {
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
      return Ae(t), null;
    case 1:
      return Ge(t.type) && vo(), Ae(t), null;
    case 3:
      return r = t.stateNode, vr(), ae(qe), ae(Le), jl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Fs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ft !== null && (Ri(ft), ft = null))), $i(e, t), Ae(t), null;
    case 5:
      Sl(t);
      var s = jn(hs.current);
      if (n = t.type, e !== null && t.stateNode != null) qp(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return Ae(t), null;
        }
        if (e = jn(Nt.current), Fs(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[St] = t, r[ds] = o, e = (t.mode & 1) !== 0, n) {
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
              mc(r, o), oe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, oe("invalid", r);
              break;
            case "textarea":
              xc(r, o), oe("invalid", r);
          }
          ei(n, o), s = null;
          for (var a in o) if (o.hasOwnProperty(a)) {
            var l = o[a];
            a === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && _s(r.textContent, l, e), s = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && _s(
              r.textContent,
              l,
              e
            ), s = ["children", "" + l]) : ts.hasOwnProperty(a) && l != null && a === "onScroll" && oe("scroll", r);
          }
          switch (n) {
            case "input":
              As(r), gc(r, o, !0);
              break;
            case "textarea":
              As(r), yc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = yo);
          }
          r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = bd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[St] = t, e[ds] = r, Vp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = ti(n, r), n) {
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
                mc(e, r), s = Za(e, r), oe("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, s = pe({}, r, { value: void 0 }), oe("invalid", e);
                break;
              case "textarea":
                xc(e, r), s = Xa(e, r), oe("invalid", e);
                break;
              default:
                s = r;
            }
            ei(n, s), l = s;
            for (o in l) if (l.hasOwnProperty(o)) {
              var c = l[o];
              o === "style" ? jd(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && kd(e, c)) : o === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && ns(e, c) : typeof c == "number" && ns(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (ts.hasOwnProperty(o) ? c != null && o === "onScroll" && oe("scroll", e) : c != null && el(e, o, c, a));
            }
            switch (n) {
              case "input":
                As(e), gc(e, r, !1);
                break;
              case "textarea":
                As(e), yc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ln(r.value));
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
      return Ae(t), null;
    case 6:
      if (e && t.stateNode != null) Gp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (n = jn(hs.current), jn(Nt.current), Fs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[St] = t, (o = r.nodeValue !== n) && (e = Xe, e !== null)) switch (e.tag) {
            case 3:
              _s(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && _s(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[St] = t, t.stateNode = r;
      }
      return Ae(t), null;
    case 13:
      if (ae(ue), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ie && Ye !== null && t.mode & 1 && !(t.flags & 128)) dp(), xr(), t.flags |= 98560, o = !1;
        else if (o = Fs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(E(317));
            o[St] = t;
          } else xr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ae(t), o = !1;
        } else ft !== null && (Ri(ft), ft = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ue.current & 1 ? ve === 0 && (ve = 3) : Dl())), t.updateQueue !== null && (t.flags |= 4), Ae(t), null);
    case 4:
      return vr(), $i(e, t), e === null && cs(t.stateNode.containerInfo), Ae(t), null;
    case 10:
      return vl(t.type._context), Ae(t), null;
    case 17:
      return Ge(t.type) && vo(), Ae(t), null;
    case 19:
      if (ae(ue), o = t.memoizedState, o === null) return Ae(t), null;
      if (r = (t.flags & 128) !== 0, a = o.rendering, a === null) if (r) Dr(o, !1);
      else {
        if (ve !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = Co(e), a !== null) {
            for (t.flags |= 128, Dr(o, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, a = o.alternate, a === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = a.childLanes, o.lanes = a.lanes, o.child = a.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = a.memoizedProps, o.memoizedState = a.memoizedState, o.updateQueue = a.updateQueue, o.type = a.type, e = a.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ne(ue, ue.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && ge() > br && (t.flags |= 128, r = !0, Dr(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Co(a), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Dr(o, !0), o.tail === null && o.tailMode === "hidden" && !a.alternate && !ie) return Ae(t), null;
        } else 2 * ge() - o.renderingStartTime > br && n !== 1073741824 && (t.flags |= 128, r = !0, Dr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (a.sibling = t.child, t.child = a) : (n = o.last, n !== null ? n.sibling = a : t.child = a, o.last = a);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ge(), t.sibling = null, n = ue.current, ne(ue, r ? n & 1 | 2 : n & 1), t) : (Ae(t), null);
    case 22:
    case 23:
      return Rl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ze & 1073741824 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ae(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function wg(e, t) {
  switch (ml(t), t.tag) {
    case 1:
      return Ge(t.type) && vo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return vr(), ae(qe), ae(Le), jl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Sl(t), null;
    case 13:
      if (ae(ue), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        xr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ae(ue), null;
    case 4:
      return vr(), null;
    case 10:
      return vl(t.type._context), null;
    case 22:
    case 23:
      return Rl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Bs = !1, Me = !1, bg = typeof WeakSet == "function" ? WeakSet : Set, z = null;
function tr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    fe(e, t, r);
  }
  else n.current = null;
}
function Pi(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var iu = !1;
function kg(e, t) {
  if (di = mo, e = Xd(), hl(e)) {
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
        var a = 0, l = -1, c = -1, u = 0, d = 0, p = e, h = null;
        t: for (; ; ) {
          for (var f; p !== n || s !== 0 && p.nodeType !== 3 || (l = a + s), p !== o || r !== 0 && p.nodeType !== 3 || (c = a + r), p.nodeType === 3 && (a += p.nodeValue.length), (f = p.firstChild) !== null; )
            h = p, p = f;
          for (; ; ) {
            if (p === e) break t;
            if (h === n && ++u === s && (l = a), h === o && ++d === r && (c = a), (f = p.nextSibling) !== null) break;
            p = h, h = p.parentNode;
          }
          p = f;
        }
        n = l === -1 || c === -1 ? null : { start: l, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (pi = { focusedElem: e, selectionRange: n }, mo = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
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
            var j = g.memoizedProps, y = g.memoizedState, m = t.stateNode, x = m.getSnapshotBeforeUpdate(t.elementType === t.type ? j : pt(t.type, j), y);
            m.__reactInternalSnapshotBeforeUpdate = x;
          }
          break;
        case 3:
          var w = t.stateNode.containerInfo;
          w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(E(163));
      }
    } catch (k) {
      fe(t, t.return, k);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, z = e;
      break;
    }
    z = t.return;
  }
  return g = iu, iu = !1, g;
}
function Yr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var s = r = r.next;
    do {
      if ((s.tag & e) === e) {
        var o = s.destroy;
        s.destroy = void 0, o !== void 0 && Pi(t, n, o);
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
function Ei(e) {
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
function Kp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Kp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[St], delete t[ds], delete t[mi], delete t[sg], delete t[og])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Zp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Zp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ti(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = yo));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ti(e, t, n), e = e.sibling; e !== null; ) Ti(e, t, n), e = e.sibling;
}
function Ai(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ai(e, t, n), e = e.sibling; e !== null; ) Ai(e, t, n), e = e.sibling;
}
var Ce = null, ht = !1;
function Bt(e, t, n) {
  for (n = n.child; n !== null; ) Yp(e, t, n), n = n.sibling;
}
function Yp(e, t, n) {
  if (jt && typeof jt.onCommitFiberUnmount == "function") try {
    jt.onCommitFiberUnmount(Fo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Me || tr(n, t);
    case 6:
      var r = Ce, s = ht;
      Ce = null, Bt(e, t, n), Ce = r, ht = s, Ce !== null && (ht ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null && (ht ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? Ca(e.parentNode, n) : e.nodeType === 1 && Ca(e, n), as(e)) : Ca(Ce, n.stateNode));
      break;
    case 4:
      r = Ce, s = ht, Ce = n.stateNode.containerInfo, ht = !0, Bt(e, t, n), Ce = r, ht = s;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Me && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        s = r = r.next;
        do {
          var o = s, a = o.destroy;
          o = o.tag, a !== void 0 && (o & 2 || o & 4) && Pi(n, t, a), s = s.next;
        } while (s !== r);
      }
      Bt(e, t, n);
      break;
    case 1:
      if (!Me && (tr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        fe(n, t, l);
      }
      Bt(e, t, n);
      break;
    case 21:
      Bt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Me = (r = Me) || n.memoizedState !== null, Bt(e, t, n), Me = r) : Bt(e, t, n);
      break;
    default:
      Bt(e, t, n);
  }
}
function cu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bg()), t.forEach(function(r) {
      var s = Ag.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(s, s));
    });
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var s = n[r];
    try {
      var o = e, a = t, l = a;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            Ce = l.stateNode, ht = !1;
            break e;
          case 3:
            Ce = l.stateNode.containerInfo, ht = !0;
            break e;
          case 4:
            Ce = l.stateNode.containerInfo, ht = !0;
            break e;
        }
        l = l.return;
      }
      if (Ce === null) throw Error(E(160));
      Yp(o, a, s), Ce = null, ht = !1;
      var c = s.alternate;
      c !== null && (c.return = null), s.return = null;
    } catch (u) {
      fe(s, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Qp(t, e), t = t.sibling;
}
function Qp(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ut(t, e), wt(e), r & 4) {
        try {
          Yr(3, e, e.return), Ko(3, e);
        } catch (j) {
          fe(e, e.return, j);
        }
        try {
          Yr(5, e, e.return);
        } catch (j) {
          fe(e, e.return, j);
        }
      }
      break;
    case 1:
      ut(t, e), wt(e), r & 512 && n !== null && tr(n, n.return);
      break;
    case 5:
      if (ut(t, e), wt(e), r & 512 && n !== null && tr(n, n.return), e.flags & 32) {
        var s = e.stateNode;
        try {
          ns(s, "");
        } catch (j) {
          fe(e, e.return, j);
        }
      }
      if (r & 4 && (s = e.stateNode, s != null)) {
        var o = e.memoizedProps, a = n !== null ? n.memoizedProps : o, l = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          l === "input" && o.type === "radio" && o.name != null && vd(s, o), ti(l, a);
          var u = ti(l, o);
          for (a = 0; a < c.length; a += 2) {
            var d = c[a], p = c[a + 1];
            d === "style" ? jd(s, p) : d === "dangerouslySetInnerHTML" ? kd(s, p) : d === "children" ? ns(s, p) : el(s, d, p, u);
          }
          switch (l) {
            case "input":
              Ya(s, o);
              break;
            case "textarea":
              wd(s, o);
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
        } catch (j) {
          fe(e, e.return, j);
        }
      }
      break;
    case 6:
      if (ut(t, e), wt(e), r & 4) {
        if (e.stateNode === null) throw Error(E(162));
        s = e.stateNode, o = e.memoizedProps;
        try {
          s.nodeValue = o;
        } catch (j) {
          fe(e, e.return, j);
        }
      }
      break;
    case 3:
      if (ut(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        as(t.containerInfo);
      } catch (j) {
        fe(e, e.return, j);
      }
      break;
    case 4:
      ut(t, e), wt(e);
      break;
    case 13:
      ut(t, e), wt(e), s = e.child, s.flags & 8192 && (o = s.memoizedState !== null, s.stateNode.isHidden = o, !o || s.alternate !== null && s.alternate.memoizedState !== null || (Ml = ge())), r & 4 && cu(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Me = (u = Me) || d, ut(t, e), Me = u) : ut(t, e), wt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (z = e, d = e.child; d !== null; ) {
          for (p = z = d; z !== null; ) {
            switch (h = z, f = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Yr(4, h, h.return);
                break;
              case 1:
                tr(h, h.return);
                var g = h.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (j) {
                    fe(r, n, j);
                  }
                }
                break;
              case 5:
                tr(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  du(p);
                  continue;
                }
            }
            f !== null ? (f.return = h, z = f) : du(p);
          }
          d = d.sibling;
        }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                s = p.stateNode, u ? (o = s.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = p.stateNode, c = p.memoizedProps.style, a = c != null && c.hasOwnProperty("display") ? c.display : null, l.style.display = Sd("display", a));
              } catch (j) {
                fe(e, e.return, j);
              }
            }
          } else if (p.tag === 6) {
            if (d === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (j) {
              fe(e, e.return, j);
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
      ut(t, e), wt(e), r & 4 && cu(e);
      break;
    case 21:
      break;
    default:
      ut(
        t,
        e
      ), wt(e);
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Zp(n)) {
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
          var o = lu(e);
          Ai(e, o, s);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, l = lu(e);
          Ti(e, l, a);
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
function Sg(e, t, n) {
  z = e, Xp(e);
}
function Xp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var s = z, o = s.child;
    if (s.tag === 22 && r) {
      var a = s.memoizedState !== null || Bs;
      if (!a) {
        var l = s.alternate, c = l !== null && l.memoizedState !== null || Me;
        l = Bs;
        var u = Me;
        if (Bs = a, (Me = c) && !u) for (z = s; z !== null; ) a = z, c = a.child, a.tag === 22 && a.memoizedState !== null ? pu(s) : c !== null ? (c.return = a, z = c) : pu(s);
        for (; o !== null; ) z = o, Xp(o), o = o.sibling;
        z = s, Bs = l, Me = u;
      }
      uu(e);
    } else s.subtreeFlags & 8772 && o !== null ? (o.return = s, z = o) : uu(e);
  }
}
function uu(e) {
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
              var s = t.elementType === t.type ? n.memoizedProps : pt(t.type, n.memoizedProps);
              r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Kc(t, o, r);
            break;
          case 3:
            var a = t.updateQueue;
            if (a !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Kc(t, a, n);
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
        Me || t.flags & 512 && Ei(t);
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
function du(e) {
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
function pu(e) {
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
            Ei(t);
          } catch (c) {
            fe(t, o, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Ei(t);
          } catch (c) {
            fe(t, a, c);
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
var jg = Math.ceil, Eo = Ft.ReactCurrentDispatcher, Al = Ft.ReactCurrentOwner, at = Ft.ReactCurrentBatchConfig, Y = 0, je = null, xe = null, Pe = 0, Ze = 0, nr = hn(0), ve = 0, xs = null, Mn = 0, Zo = 0, Il = 0, Qr = null, Be = null, Ml = 0, br = 1 / 0, Et = null, To = !1, Ii = null, rn = null, Ws = !1, Qt = null, Ao = 0, Xr = 0, Mi = null, so = -1, oo = 0;
function _e() {
  return Y & 6 ? ge() : so !== -1 ? so : so = ge();
}
function sn(e) {
  return e.mode & 1 ? Y & 2 && Pe !== 0 ? Pe & -Pe : ig.transition !== null ? (oo === 0 && (oo = Dd()), oo) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Bd(e.type)), e) : 1;
}
function yt(e, t, n, r) {
  if (50 < Xr) throw Xr = 0, Mi = null, Error(E(185));
  Ss(e, n, r), (!(Y & 2) || e !== je) && (e === je && (!(Y & 2) && (Zo |= n), ve === 4 && Zt(e, Pe)), Ke(e, r), n === 1 && Y === 0 && !(t.mode & 1) && (br = ge() + 500, Vo && fn()));
}
function Ke(e, t) {
  var n = e.callbackNode;
  im(e, t);
  var r = fo(e, e === je ? Pe : 0);
  if (r === 0) n !== null && bc(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && bc(n), t === 1) e.tag === 0 ? ag(hu.bind(null, e)) : lp(hu.bind(null, e)), ng(function() {
      !(Y & 6) && fn();
    }), n = null;
    else {
      switch (zd(r)) {
        case 1:
          n = ol;
          break;
        case 4:
          n = Ld;
          break;
        case 16:
          n = ho;
          break;
        case 536870912:
          n = Rd;
          break;
        default:
          n = ho;
      }
      n = ah(n, Jp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Jp(e, t) {
  if (so = -1, oo = 0, Y & 6) throw Error(E(327));
  var n = e.callbackNode;
  if (dr() && e.callbackNode !== n) return null;
  var r = fo(e, e === je ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Io(e, r);
  else {
    t = r;
    var s = Y;
    Y |= 2;
    var o = th();
    (je !== e || Pe !== t) && (Et = null, br = ge() + 500, $n(e, t));
    do
      try {
        $g();
        break;
      } catch (l) {
        eh(e, l);
      }
    while (!0);
    yl(), Eo.current = o, Y = s, xe !== null ? t = 0 : (je = null, Pe = 0, t = ve);
  }
  if (t !== 0) {
    if (t === 2 && (s = ai(e), s !== 0 && (r = s, t = Li(e, s))), t === 1) throw n = xs, $n(e, 0), Zt(e, r), Ke(e, ge()), n;
    if (t === 6) Zt(e, r);
    else {
      if (s = e.current.alternate, !(r & 30) && !Ng(s) && (t = Io(e, r), t === 2 && (o = ai(e), o !== 0 && (r = o, t = Li(e, o))), t === 1)) throw n = xs, $n(e, 0), Zt(e, r), Ke(e, ge()), n;
      switch (e.finishedWork = s, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          bn(e, Be, Et);
          break;
        case 3:
          if (Zt(e, r), (r & 130023424) === r && (t = Ml + 500 - ge(), 10 < t)) {
            if (fo(e, 0) !== 0) break;
            if (s = e.suspendedLanes, (s & r) !== r) {
              _e(), e.pingedLanes |= e.suspendedLanes & s;
              break;
            }
            e.timeoutHandle = fi(bn.bind(null, e, Be, Et), t);
            break;
          }
          bn(e, Be, Et);
          break;
        case 4:
          if (Zt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var a = 31 - xt(r);
            o = 1 << a, a = t[a], a > s && (s = a), r &= ~o;
          }
          if (r = s, r = ge() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * jg(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = fi(bn.bind(null, e, Be, Et), r);
            break;
          }
          bn(e, Be, Et);
          break;
        case 5:
          bn(e, Be, Et);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ke(e, ge()), e.callbackNode === n ? Jp.bind(null, e) : null;
}
function Li(e, t) {
  var n = Qr;
  return e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256), e = Io(e, t), e !== 2 && (t = Be, Be = n, t !== null && Ri(t)), e;
}
function Ri(e) {
  Be === null ? Be = e : Be.push.apply(Be, e);
}
function Ng(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var s = n[r], o = s.getSnapshot;
        s = s.value;
        try {
          if (!vt(o(), s)) return !1;
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
function Zt(e, t) {
  for (t &= ~Il, t &= ~Zo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - xt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function hu(e) {
  if (Y & 6) throw Error(E(327));
  dr();
  var t = fo(e, 0);
  if (!(t & 1)) return Ke(e, ge()), null;
  var n = Io(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ai(e);
    r !== 0 && (t = r, n = Li(e, r));
  }
  if (n === 1) throw n = xs, $n(e, 0), Zt(e, t), Ke(e, ge()), n;
  if (n === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, bn(e, Be, Et), Ke(e, ge()), null;
}
function Ll(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    Y = n, Y === 0 && (br = ge() + 500, Vo && fn());
  }
}
function Ln(e) {
  Qt !== null && Qt.tag === 0 && !(Y & 6) && dr();
  var t = Y;
  Y |= 1;
  var n = at.transition, r = Q;
  try {
    if (at.transition = null, Q = 1, e) return e();
  } finally {
    Q = r, at.transition = n, Y = t, !(Y & 6) && fn();
  }
}
function Rl() {
  Ze = nr.current, ae(nr);
}
function $n(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, tg(n)), xe !== null) for (n = xe.return; n !== null; ) {
    var r = n;
    switch (ml(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && vo();
        break;
      case 3:
        vr(), ae(qe), ae(Le), jl();
        break;
      case 5:
        Sl(r);
        break;
      case 4:
        vr();
        break;
      case 13:
        ae(ue);
        break;
      case 19:
        ae(ue);
        break;
      case 10:
        vl(r.type._context);
        break;
      case 22:
      case 23:
        Rl();
    }
    n = n.return;
  }
  if (je = e, xe = e = on(e.current, null), Pe = Ze = t, ve = 0, xs = null, Il = Zo = Mn = 0, Be = Qr = null, Sn !== null) {
    for (t = 0; t < Sn.length; t++) if (n = Sn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var s = r.next, o = n.pending;
      if (o !== null) {
        var a = o.next;
        o.next = s, r.next = a;
      }
      n.pending = r;
    }
    Sn = null;
  }
  return e;
}
function eh(e, t) {
  do {
    var n = xe;
    try {
      if (yl(), to.current = Po, $o) {
        for (var r = de.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), r = r.next;
        }
        $o = !1;
      }
      if (In = 0, ke = ye = de = null, Zr = !1, fs = 0, Al.current = null, n === null || n.return === null) {
        ve = 1, xs = t, xe = null;
        break;
      }
      e: {
        var o = e, a = n.return, l = n, c = t;
        if (t = Pe, l.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var u = c, d = l, p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = d.alternate;
            h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var f = eu(a);
          if (f !== null) {
            f.flags &= -257, tu(f, a, l, o, t), f.mode & 1 && Jc(o, u, t), t = f, c = u;
            var g = t.updateQueue;
            if (g === null) {
              var j = /* @__PURE__ */ new Set();
              j.add(c), t.updateQueue = j;
            } else g.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Jc(o, u, t), Dl();
              break e;
            }
            c = Error(E(426));
          }
        } else if (ie && l.mode & 1) {
          var y = eu(a);
          if (y !== null) {
            !(y.flags & 65536) && (y.flags |= 256), tu(y, a, l, o, t), gl(wr(c, l));
            break e;
          }
        }
        o = c = wr(c, l), ve !== 4 && (ve = 2), Qr === null ? Qr = [o] : Qr.push(o), o = a;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var m = zp(o, c, t);
              Gc(o, m);
              break e;
            case 1:
              l = c;
              var x = o.type, w = o.stateNode;
              if (!(o.flags & 128) && (typeof x.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (rn === null || !rn.has(w)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var k = Op(o, l, t);
                Gc(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      rh(n);
    } catch (C) {
      t = C, xe === n && n !== null && (xe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function th() {
  var e = Eo.current;
  return Eo.current = Po, e === null ? Po : e;
}
function Dl() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4), je === null || !(Mn & 268435455) && !(Zo & 268435455) || Zt(je, Pe);
}
function Io(e, t) {
  var n = Y;
  Y |= 2;
  var r = th();
  (je !== e || Pe !== t) && (Et = null, $n(e, t));
  do
    try {
      Cg();
      break;
    } catch (s) {
      eh(e, s);
    }
  while (!0);
  if (yl(), Y = n, Eo.current = r, xe !== null) throw Error(E(261));
  return je = null, Pe = 0, ve;
}
function Cg() {
  for (; xe !== null; ) nh(xe);
}
function $g() {
  for (; xe !== null && !Xf(); ) nh(xe);
}
function nh(e) {
  var t = oh(e.alternate, e, Ze);
  e.memoizedProps = e.pendingProps, t === null ? rh(e) : xe = t, Al.current = null;
}
function rh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = wg(n, t), n !== null) {
        n.flags &= 32767, xe = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ve = 6, xe = null;
        return;
      }
    } else if (n = vg(n, t, Ze), n !== null) {
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
function bn(e, t, n) {
  var r = Q, s = at.transition;
  try {
    at.transition = null, Q = 1, Pg(e, t, n, r);
  } finally {
    at.transition = s, Q = r;
  }
  return null;
}
function Pg(e, t, n, r) {
  do
    dr();
  while (Qt !== null);
  if (Y & 6) throw Error(E(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (lm(e, o), e === je && (xe = je = null, Pe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ws || (Ws = !0, ah(ho, function() {
    return dr(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = at.transition, at.transition = null;
    var a = Q;
    Q = 1;
    var l = Y;
    Y |= 4, Al.current = null, kg(e, n), Qp(n, e), Km(pi), mo = !!di, pi = di = null, e.current = n, Sg(n), Jf(), Y = l, Q = a, at.transition = o;
  } else e.current = n;
  if (Ws && (Ws = !1, Qt = e, Ao = s), o = e.pendingLanes, o === 0 && (rn = null), nm(n.stateNode), Ke(e, ge()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
  if (To) throw To = !1, e = Ii, Ii = null, e;
  return Ao & 1 && e.tag !== 0 && dr(), o = e.pendingLanes, o & 1 ? e === Mi ? Xr++ : (Xr = 0, Mi = e) : Xr = 0, fn(), null;
}
function dr() {
  if (Qt !== null) {
    var e = zd(Ao), t = at.transition, n = Q;
    try {
      if (at.transition = null, Q = 16 > e ? 16 : e, Qt === null) var r = !1;
      else {
        if (e = Qt, Qt = null, Ao = 0, Y & 6) throw Error(E(331));
        var s = Y;
        for (Y |= 4, z = e.current; z !== null; ) {
          var o = z, a = o.child;
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
                      Yr(8, d, o);
                  }
                  var p = d.child;
                  if (p !== null) p.return = d, z = p;
                  else for (; z !== null; ) {
                    d = z;
                    var h = d.sibling, f = d.return;
                    if (Kp(d), d === u) {
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
                var j = g.child;
                if (j !== null) {
                  g.child = null;
                  do {
                    var y = j.sibling;
                    j.sibling = null, j = y;
                  } while (j !== null);
                }
              }
              z = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) a.return = o, z = a;
          else e: for (; z !== null; ) {
            if (o = z, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Yr(9, o, o.return);
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
          a = z;
          var w = a.child;
          if (a.subtreeFlags & 2064 && w !== null) w.return = a, z = w;
          else e: for (a = x; z !== null; ) {
            if (l = z, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Ko(9, l);
              }
            } catch (C) {
              fe(l, l.return, C);
            }
            if (l === a) {
              z = null;
              break e;
            }
            var k = l.sibling;
            if (k !== null) {
              k.return = l.return, z = k;
              break e;
            }
            z = l.return;
          }
        }
        if (Y = s, fn(), jt && typeof jt.onPostCommitFiberRoot == "function") try {
          jt.onPostCommitFiberRoot(Fo, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Q = n, at.transition = t;
    }
  }
  return !1;
}
function fu(e, t, n) {
  t = wr(n, t), t = zp(e, t, 1), e = nn(e, t, 1), t = _e(), e !== null && (Ss(e, 1, t), Ke(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) fu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      fu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (rn === null || !rn.has(r))) {
        e = wr(n, e), e = Op(t, e, 1), t = nn(t, e, 1), e = _e(), t !== null && (Ss(t, 1, e), Ke(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Eg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = _e(), e.pingedLanes |= e.suspendedLanes & n, je === e && (Pe & n) === n && (ve === 4 || ve === 3 && (Pe & 130023424) === Pe && 500 > ge() - Ml ? $n(e, 0) : Il |= n), Ke(e, t);
}
function sh(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ls, Ls <<= 1, !(Ls & 130023424) && (Ls = 4194304)) : t = 1);
  var n = _e();
  e = Ot(e, t), e !== null && (Ss(e, t, n), Ke(e, n));
}
function Tg(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), sh(e, n);
}
function Ag(e, t) {
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
  r !== null && r.delete(t), sh(e, n);
}
var oh;
oh = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || qe.current) We = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return We = !1, yg(e, t, n);
    We = !!(e.flags & 131072);
  }
  else We = !1, ie && t.flags & 1048576 && cp(t, ko, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ro(e, t), e = t.pendingProps;
      var s = gr(t, Le.current);
      ur(t, n), s = Cl(null, t, r, e, s, n);
      var o = $l();
      return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ge(r) ? (o = !0, wo(t)) : o = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, bl(t), s.updater = Go, t.stateNode = s, s._reactInternals = t, bi(t, r, e, n), t = ji(null, t, r, !0, o, n)) : (t.tag = 0, ie && o && fl(t), Oe(null, t, s, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ro(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Mg(r), e = pt(r, e), s) {
          case 0:
            t = Si(null, t, r, e, n);
            break e;
          case 1:
            t = su(null, t, r, e, n);
            break e;
          case 11:
            t = nu(null, t, r, e, n);
            break e;
          case 14:
            t = ru(null, t, r, pt(r.type, e), n);
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
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : pt(r, s), Si(e, t, r, s, n);
    case 1:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : pt(r, s), su(e, t, r, s, n);
    case 3:
      e: {
        if (Up(t), e === null) throw Error(E(387));
        r = t.pendingProps, o = t.memoizedState, s = o.element, mp(e, t), No(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          s = wr(Error(E(423)), t), t = ou(e, t, r, n, s);
          break e;
        } else if (r !== s) {
          s = wr(Error(E(424)), t), t = ou(e, t, r, n, s);
          break e;
        } else for (Ye = tn(t.stateNode.containerInfo.firstChild), Xe = t, ie = !0, ft = null, n = hp(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (xr(), r === s) {
            t = _t(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return gp(t), e === null && yi(t), r = t.type, s = t.pendingProps, o = e !== null ? e.memoizedProps : null, a = s.children, hi(r, s) ? a = null : o !== null && hi(r, o) && (t.flags |= 32), Hp(e, t), Oe(e, t, a, n), t.child;
    case 6:
      return e === null && yi(t), null;
    case 13:
      return Bp(e, t, n);
    case 4:
      return kl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = yr(t, null, r, n) : Oe(e, t, r, n), t.child;
    case 11:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : pt(r, s), nu(e, t, r, s, n);
    case 7:
      return Oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, s = t.pendingProps, o = t.memoizedProps, a = s.value, ne(So, r._currentValue), r._currentValue = a, o !== null) if (vt(o.value, a)) {
          if (o.children === s.children && !qe.current) {
            t = _t(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var l = o.dependencies;
          if (l !== null) {
            a = o.child;
            for (var c = l.firstContext; c !== null; ) {
              if (c.context === r) {
                if (o.tag === 1) {
                  c = Lt(-1, n & -n), c.tag = 2;
                  var u = o.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var d = u.pending;
                    d === null ? c.next = c : (c.next = d.next, d.next = c), u.pending = c;
                  }
                }
                o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), vi(
                  o.return,
                  n,
                  t
                ), l.lanes |= n;
                break;
              }
              c = c.next;
            }
          } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (a = o.return, a === null) throw Error(E(341));
            a.lanes |= n, l = a.alternate, l !== null && (l.lanes |= n), vi(a, n, t), a = o.sibling;
          } else a = o.child;
          if (a !== null) a.return = o;
          else for (a = o; a !== null; ) {
            if (a === t) {
              a = null;
              break;
            }
            if (o = a.sibling, o !== null) {
              o.return = a.return, a = o;
              break;
            }
            a = a.return;
          }
          o = a;
        }
        Oe(e, t, s.children, n), t = t.child;
      }
      return t;
    case 9:
      return s = t.type, r = t.pendingProps.children, ur(t, n), s = it(s), r = r(s), t.flags |= 1, Oe(e, t, r, n), t.child;
    case 14:
      return r = t.type, s = pt(r, t.pendingProps), s = pt(r.type, s), ru(e, t, r, s, n);
    case 15:
      return _p(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : pt(r, s), ro(e, t), t.tag = 1, Ge(r) ? (e = !0, wo(t)) : e = !1, ur(t, n), Dp(t, r, s), bi(t, r, s, n), ji(null, t, r, !0, e, n);
    case 19:
      return Wp(e, t, n);
    case 22:
      return Fp(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function ah(e, t) {
  return Md(e, t);
}
function Ig(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ot(e, t, n, r) {
  return new Ig(e, t, n, r);
}
function zl(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Mg(e) {
  if (typeof e == "function") return zl(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === nl) return 11;
    if (e === rl) return 14;
  }
  return 2;
}
function on(e, t) {
  var n = e.alternate;
  return n === null ? (n = ot(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ao(e, t, n, r, s, o) {
  var a = 2;
  if (r = e, typeof e == "function") zl(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case qn:
      return Pn(n.children, s, o, t);
    case tl:
      a = 8, s |= 8;
      break;
    case Va:
      return e = ot(12, n, t, s | 2), e.elementType = Va, e.lanes = o, e;
    case qa:
      return e = ot(13, n, t, s), e.elementType = qa, e.lanes = o, e;
    case Ga:
      return e = ot(19, n, t, s), e.elementType = Ga, e.lanes = o, e;
    case gd:
      return Yo(n, s, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case fd:
          a = 10;
          break e;
        case md:
          a = 9;
          break e;
        case nl:
          a = 11;
          break e;
        case rl:
          a = 14;
          break e;
        case qt:
          a = 16, r = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = ot(a, n, t, s), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Pn(e, t, n, r) {
  return e = ot(7, e, r, t), e.lanes = n, e;
}
function Yo(e, t, n, r) {
  return e = ot(22, e, r, t), e.elementType = gd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function La(e, t, n) {
  return e = ot(6, e, null, t), e.lanes = n, e;
}
function Ra(e, t, n) {
  return t = ot(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Lg(e, t, n, r, s) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ma(0), this.expirationTimes = ma(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ma(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
}
function Ol(e, t, n, r, s, o, a, l, c) {
  return e = new Lg(e, t, n, l, c), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ot(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, bl(o), e;
}
function Rg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ih(e) {
  if (!e) return cn;
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
          if (Ge(t.type)) {
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
    if (Ge(n)) return ip(e, n, t);
  }
  return t;
}
function lh(e, t, n, r, s, o, a, l, c) {
  return e = Ol(n, r, !0, e, s, o, a, l, c), e.context = ih(null), n = e.current, r = _e(), s = sn(n), o = Lt(r, s), o.callback = t ?? null, nn(n, o, s), e.current.lanes = s, Ss(e, s, r), Ke(e, r), e;
}
function Qo(e, t, n, r) {
  var s = t.current, o = _e(), a = sn(s);
  return n = ih(n), t.context === null ? t.context = n : t.pendingContext = n, t = Lt(o, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = nn(s, t, a), e !== null && (yt(e, s, a, o), eo(e, s, a)), a;
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
function mu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function _l(e, t) {
  mu(e, t), (e = e.alternate) && mu(e, t);
}
function Dg() {
  return null;
}
var ch = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Fl(e) {
  this._internalRoot = e;
}
Xo.prototype.render = Fl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Qo(e, t, null, null);
};
Xo.prototype.unmount = Fl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ln(function() {
      Qo(null, e, null, null);
    }), t[zt] = null;
  }
};
function Xo(e) {
  this._internalRoot = e;
}
Xo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Fd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++) ;
    Kt.splice(n, 0, e), n === 0 && Ud(e);
  }
};
function Hl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Jo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function gu() {
}
function zg(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = Mo(a);
        o.call(u);
      };
    }
    var a = lh(t, r, e, 0, null, !1, !1, "", gu);
    return e._reactRootContainer = a, e[zt] = a.current, cs(e.nodeType === 8 ? e.parentNode : e), Ln(), a;
  }
  for (; s = e.lastChild; ) e.removeChild(s);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = Mo(c);
      l.call(u);
    };
  }
  var c = Ol(e, 0, !1, null, null, !1, !1, "", gu);
  return e._reactRootContainer = c, e[zt] = c.current, cs(e.nodeType === 8 ? e.parentNode : e), Ln(function() {
    Qo(t, c, n, r);
  }), c;
}
function ea(e, t, n, r, s) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof s == "function") {
      var l = s;
      s = function() {
        var c = Mo(a);
        l.call(c);
      };
    }
    Qo(t, a, e, s);
  } else a = zg(n, t, e, s, r);
  return Mo(a);
}
Od = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ur(t.pendingLanes);
        n !== 0 && (al(t, n | 1), Ke(t, ge()), !(Y & 6) && (br = ge() + 500, fn()));
      }
      break;
    case 13:
      Ln(function() {
        var r = Ot(e, 1);
        if (r !== null) {
          var s = _e();
          yt(r, e, 1, s);
        }
      }), _l(e, 1);
  }
};
il = function(e) {
  if (e.tag === 13) {
    var t = Ot(e, 134217728);
    if (t !== null) {
      var n = _e();
      yt(t, e, 134217728, n);
    }
    _l(e, 134217728);
  }
};
_d = function(e) {
  if (e.tag === 13) {
    var t = sn(e), n = Ot(e, t);
    if (n !== null) {
      var r = _e();
      yt(n, e, t, r);
    }
    _l(e, t);
  }
};
Fd = function() {
  return Q;
};
Hd = function(e, t) {
  var n = Q;
  try {
    return Q = e, t();
  } finally {
    Q = n;
  }
};
ri = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ya(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Wo(r);
            if (!s) throw Error(E(90));
            yd(r), Ya(r, s);
          }
        }
      }
      break;
    case "textarea":
      wd(e, n);
      break;
    case "select":
      t = n.value, t != null && ar(e, !!n.multiple, t, !1);
  }
};
$d = Ll;
Pd = Ln;
var Og = { usingClientEntryPoint: !1, Events: [Ns, Yn, Wo, Nd, Cd, Ll] }, zr = { findFiberByHostInstance: kn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, _g = { bundleType: zr.bundleType, version: zr.version, rendererPackageName: zr.rendererPackageName, rendererConfig: zr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ft.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ad(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: zr.findFiberByHostInstance || Dg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Vs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vs.isDisabled && Vs.supportsFiber) try {
    Fo = Vs.inject(_g), jt = Vs;
  } catch {
  }
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Og;
et.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hl(t)) throw Error(E(200));
  return Rg(e, t, null, n);
};
et.createRoot = function(e, t) {
  if (!Hl(e)) throw Error(E(299));
  var n = !1, r = "", s = ch;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Ol(e, 1, !1, null, null, n, !1, r, s), e[zt] = t.current, cs(e.nodeType === 8 ? e.parentNode : e), new Fl(t);
};
et.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = Ad(t), e = e === null ? null : e.stateNode, e;
};
et.flushSync = function(e) {
  return Ln(e);
};
et.hydrate = function(e, t, n) {
  if (!Jo(t)) throw Error(E(200));
  return ea(null, e, t, !0, n);
};
et.hydrateRoot = function(e, t, n) {
  if (!Hl(e)) throw Error(E(405));
  var r = n != null && n.hydratedSources || null, s = !1, o = "", a = ch;
  if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = lh(t, null, e, 1, n ?? null, s, !1, o, a), e[zt] = t.current, cs(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
    n,
    s
  );
  return new Xo(t);
};
et.render = function(e, t, n) {
  if (!Jo(t)) throw Error(E(200));
  return ea(null, e, t, !1, n);
};
et.unmountComponentAtNode = function(e) {
  if (!Jo(e)) throw Error(E(40));
  return e._reactRootContainer ? (Ln(function() {
    ea(null, null, e, !1, function() {
      e._reactRootContainer = null, e[zt] = null;
    });
  }), !0) : !1;
};
et.unstable_batchedUpdates = Ll;
et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Jo(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return ea(e, t, n, !1, r);
};
et.version = "18.3.1-next-f1338f8080-20240426";
function uh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uh);
    } catch (e) {
      console.error(e);
    }
}
uh(), ud.exports = et;
var Fg = ud.exports, dh, xu = Fg;
dh = xu.createRoot, xu.hydrateRoot;
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ph = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ug = {
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
const Bg = P.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: o,
    iconNode: a,
    ...l
  }, c) => P.createElement(
    "svg",
    {
      ref: c,
      ...Ug,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: ph("lucide", s),
      ...l
    },
    [
      ...a.map(([u, d]) => P.createElement(u, d)),
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
const M = (e, t) => {
  const n = P.forwardRef(
    ({ className: r, ...s }, o) => P.createElement(Bg, {
      ref: o,
      iconNode: t,
      className: ph(`lucide-${Hg(e)}`, r),
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
const Wg = M("Antenna", [
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
const hh = M("ArrowDownToLine", [
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
const fh = M("ArrowUpFromLine", [
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
const Vg = M("BookMarked", [
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
const Lo = M("BoxSelect", [
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
const mh = M("Box", [
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
const qg = M("Building2", [
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
const Gg = M("Cable", [
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
const gh = M("Calculator", [
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
const Kg = M("Camera", [
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
const xh = M("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yh = M("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zg = M("ChevronsDown", [
  ["path", { d: "m7 6 5 5 5-5", key: "1lc07p" }],
  ["path", { d: "m7 13 5 5 5-5", key: "1d48rs" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yg = M("ChevronsUp", [
  ["path", { d: "m17 11-5-5-5 5", key: "e8nh98" }],
  ["path", { d: "m17 18-5-5-5 5", key: "2avn1x" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _n = M("CircleAlert", [
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
const Pr = M("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vh = M("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wh = M("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qg = M("Cloud", [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ul = M("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ta = M("Crosshair", [
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
const Xg = M("Database", [
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
const Bl = M("Download", [
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
const Jg = M("Earth", [
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
const e1 = M("Eraser", [
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
const bh = M("FastForward", [
  ["polygon", { points: "13 19 22 12 13 5 13 19", key: "587y9g" }],
  ["polygon", { points: "2 19 11 12 2 5 2 19", key: "3pweh0" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kh = M("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t1 = M("FolderTree", [
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
const n1 = M("GitFork", [
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
const r1 = M("Globe", [
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
const Sh = M("GraduationCap", [
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
const s1 = M("HeartPulse", [
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
const o1 = M("KeyRound", [
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
const a1 = M("Laptop", [
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
const i1 = M("Layers", [
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
const na = M("Lightbulb", [
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
const l1 = M("ListOrdered", [
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
const Wl = M("LockOpen", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const un = M("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vl = M("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ql = M("Maximize2", [
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
const jh = M("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nh = M("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c1 = M("Monitor", [
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
const Gl = M("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u1 = M("MousePointer2", [
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
const Wn = M("Network", [
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
const d1 = M("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ch = M("PanelRightClose", [
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
const p1 = M("PanelRight", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h1 = M("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kl = M("Pencil", [
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
const pr = M("PhoneCall", [
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
const $h = M("PhoneOff", [
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
const f1 = M("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ph = M("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = M("Radio", [
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
const g1 = M("Redo2", [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13", key: "6uklza" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eh = M("RefreshCw", [
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
const x1 = M("Router", [
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
const y1 = M("Save", [
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
const Di = M("ScanSearch", [
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
const ra = M("Settings", [
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
const ys = M("ShieldCheck", [
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
const Th = M("Skull", [
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
const Zl = M("Sparkles", [
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
const Yl = M("SquareTerminal", [
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
const Ql = M("StepForward", [
  ["line", { x1: "6", x2: "6", y1: "4", y2: "20", key: "fy8qot" }],
  ["polygon", { points: "10,4 20,12 10,20", key: "1mc1pf" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xl = M("Sun", [
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
const gt = M("Trash2", [
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
const v1 = M("Trash", [
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
const w1 = M("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = M("Upload", [
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
const Jl = M("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k1 = M("UsersRound", [
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
const S1 = M("Waves", [
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
const Ah = M("WifiOff", [
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
const Ih = M("Wifi", [
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
const Mh = M("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sa = M("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), j1 = {
  Router: x1,
  Network: Wn,
  Layers: i1,
  ShieldCheck: ys,
  Monitor: c1,
  Globe: r1,
  BookMarked: Vg,
  ListOrdered: l1,
  FolderTree: t1,
  Radio: m1,
  Camera: Kg,
  Wifi: Ih,
  WifiOff: Ah,
  Laptop: a1,
  Skull: Th,
  KeyRound: o1,
  Waves: S1,
  GitFork: n1,
  Database: Xg,
  Zap: sa,
  Antenna: Wg,
  ScanSearch: Di,
  Copy: Ul,
  Box: mh,
  TerminalSquare: Yl,
  Download: Bl,
  Settings: ra,
  Sun: Xl,
  Moon: Gl,
  Trash2: gt,
  Sparkles: Zl,
  PanelRightClose: Ch,
  CheckCircle2: Pr,
  Circle: vh,
  AlertCircle: _n,
  Lightbulb: na,
  ChevronRight: yh,
  ChevronDown: xh,
  Filter: kh,
  Lock: un,
  LockOpen: Wl,
  Crosshair: ta,
  StepForward: Ql,
  FastForward: bh,
  Mail: Vl,
  ArrowDownToLine: hh,
  ArrowUpFromLine: fh,
  Clock: wh,
  Plus: Ph,
  Minus: Nh,
  Maximize2: ql,
  BoxSelect: Lo,
  Building2: qg,
  Pencil: Kl,
  Trash: v1,
  Cloud: Qg,
  Calculator: gh,
  Globe2: Jg,
  RefreshCw: Eh,
  PhoneCall: pr,
  UserRound: Jl,
  UsersRound: k1,
  MessageSquare: jh,
  GraduationCap: Sh,
  PhoneOff: $h
};
function $s(e) {
  return j1[e] || mh;
}
function _({ variant: e = "ghost", size: t = "md", className: n = "", ...r }) {
  const s = "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed", o = { sm: "px-2.5 py-1.5 text-xs", md: "px-3 py-2 text-[13px]", lg: "px-4 py-2.5 text-sm w-full" }, a = {
    primary: "bg-accent text-white hover:brightness-110",
    danger: "bg-down text-white hover:brightness-110",
    ghost: "text-soft hover:text-ink hover:bg-panel2",
    outline: "border border-line text-ink hover:border-accent hover:text-accent",
    active: "bg-accent text-white"
  };
  return /* @__PURE__ */ i.jsx("button", { className: `${s} ${o[t]} ${a[e]} ${n}`, ...r });
}
function dn({ title: e, subtitle: t, icon: n, onClose: r, children: s, footer: o, width: a = "max-w-2xl" }) {
  const l = P.useRef(null);
  return P.useEffect(() => {
    var c;
    (c = l.current) == null || c.focus();
  }, []), /* @__PURE__ */ i.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 grid place-items-center bg-black/55 p-4 backdrop-blur-sm",
      onMouseDown: (c) => {
        c.target === c.currentTarget && r();
      },
      children: /* @__PURE__ */ i.jsxs(
        "div",
        {
          ref: l,
          tabIndex: -1,
          role: "dialog",
          "aria-modal": "true",
          "aria-label": e,
          className: `flex max-h-[86vh] w-full ${a} flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl outline-none`,
          children: [
            /* @__PURE__ */ i.jsxs("header", { className: "flex items-center gap-3 border-b border-line px-4 py-3", children: [
              n,
              /* @__PURE__ */ i.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ i.jsx("h2", { className: "truncate text-[15px] font-bold leading-tight", children: e }),
                t && /* @__PURE__ */ i.jsx("p", { className: "truncate text-[11px] text-soft", children: t })
              ] }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  onClick: r,
                  "aria-label": "Close",
                  className: "ml-auto grid h-8 w-8 place-items-center rounded-lg bg-panel2 text-soft hover:text-ink",
                  children: /* @__PURE__ */ i.jsx(Mh, { size: 16 })
                }
              )
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "min-h-0 flex-1 overflow-y-auto p-4", children: s }),
            o && /* @__PURE__ */ i.jsx("footer", { className: "border-t border-line px-4 py-3", children: o })
          ]
        }
      )
    }
  );
}
function K({ label: e, hint: t, children: n }) {
  return /* @__PURE__ */ i.jsxs("label", { className: "mb-3 block", children: [
    /* @__PURE__ */ i.jsx("span", { className: "mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-soft", children: e }),
    n,
    t && /* @__PURE__ */ i.jsx("span", { className: "mt-1 block text-[11px] leading-snug text-soft", children: t })
  ] });
}
const W = "w-full rounded-lg border border-line bg-panel2 px-2.5 py-2 font-mono text-[13px] text-ink outline-none focus:border-accent";
function he({ checked: e, onChange: t, label: n, hint: r, id: s }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "mb-2 flex items-center justify-between gap-3 rounded-lg border border-line px-3 py-2.5", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ i.jsx("div", { className: "text-[13px] font-medium", children: n }),
      r && /* @__PURE__ */ i.jsx("div", { className: "text-[11px] leading-snug text-soft", children: r })
    ] }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        id: s,
        role: "switch",
        "aria-checked": e,
        "aria-label": n,
        onClick: () => t(!e),
        className: `relative h-[22px] w-10 shrink-0 rounded-full transition-colors ${e ? "bg-up" : "bg-line"}`,
        children: /* @__PURE__ */ i.jsx(
          "span",
          {
            className: `absolute top-0.5 h-[18px] w-[18px] rounded-full bg-white transition-all ${e ? "left-[20px]" : "left-0.5"}`
          }
        )
      }
    )
  ] });
}
function se({ children: e, tone: t = "neutral", className: n = "" }) {
  const r = {
    neutral: "bg-panel2 text-soft border-line",
    up: "bg-up/15 text-up border-up/40",
    down: "bg-down/15 text-down border-down/40",
    warn: "bg-warn/15 text-warn border-warn/40",
    accent: "bg-accent/15 text-accent border-accent/40"
  };
  return /* @__PURE__ */ i.jsx(
    "span",
    {
      className: `inline-flex items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-[10.5px] font-semibold ${r[t]} ${n}`,
      children: e
    }
  );
}
function q({ children: e, className: t = "" }) {
  return /* @__PURE__ */ i.jsx("h3", { className: `mb-2 text-[10px] font-bold uppercase tracking-wider text-soft ${t}`, children: e });
}
const N1 = {}, yu = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, p) => {
    const h = typeof d == "function" ? d(t) : d;
    if (!Object.is(h, t)) {
      const f = t;
      t = p ?? (typeof h != "object" || h === null) ? h : Object.assign({}, t, h), n.forEach((g) => g(t, f));
    }
  }, s = () => t, c = { setState: r, getState: s, getInitialState: () => u, subscribe: (d) => (n.add(d), () => n.delete(d)), destroy: () => {
    (N1 ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, u = t = e(r, s, c);
  return c;
}, C1 = (e) => e ? yu(e) : yu;
var Lh = { exports: {} }, Rh = {}, Dh = { exports: {} }, zh = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr = P;
function $1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var P1 = typeof Object.is == "function" ? Object.is : $1, E1 = kr.useState, T1 = kr.useEffect, A1 = kr.useLayoutEffect, I1 = kr.useDebugValue;
function M1(e, t) {
  var n = t(), r = E1({ inst: { value: n, getSnapshot: t } }), s = r[0].inst, o = r[1];
  return A1(function() {
    s.value = n, s.getSnapshot = t, Da(s) && o({ inst: s });
  }, [e, n, t]), T1(function() {
    return Da(s) && o({ inst: s }), e(function() {
      Da(s) && o({ inst: s });
    });
  }, [e]), I1(n), n;
}
function Da(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !P1(e, n);
  } catch {
    return !0;
  }
}
function L1(e, t) {
  return t();
}
var R1 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? L1 : M1;
zh.useSyncExternalStore = kr.useSyncExternalStore !== void 0 ? kr.useSyncExternalStore : R1;
Dh.exports = zh;
var D1 = Dh.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oa = P, z1 = D1;
function O1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var _1 = typeof Object.is == "function" ? Object.is : O1, F1 = z1.useSyncExternalStore, H1 = oa.useRef, U1 = oa.useEffect, B1 = oa.useMemo, W1 = oa.useDebugValue;
Rh.useSyncExternalStoreWithSelector = function(e, t, n, r, s) {
  var o = H1(null);
  if (o.current === null) {
    var a = { hasValue: !1, value: null };
    o.current = a;
  } else a = o.current;
  o = B1(function() {
    function c(f) {
      if (!u) {
        if (u = !0, d = f, f = r(f), s !== void 0 && a.hasValue) {
          var g = a.value;
          if (s(g, f)) return p = g;
        }
        return p = f;
      }
      if (g = p, _1(d, f)) return g;
      var j = r(f);
      return s !== void 0 && s(g, j) ? g : (d = f, p = j);
    }
    var u = !1, d, p, h = n === void 0 ? null : n;
    return [function() {
      return c(t());
    }, h === null ? void 0 : function() {
      return c(h());
    }];
  }, [t, n, r, s]);
  var l = F1(e, o[0], o[1]);
  return U1(function() {
    a.hasValue = !0, a.value = l;
  }, [l]), W1(l), l;
};
Lh.exports = Rh;
var V1 = Lh.exports;
const q1 = /* @__PURE__ */ Xu(V1), Oh = {}, { useDebugValue: G1 } = es, { useSyncExternalStoreWithSelector: K1 } = q1;
let vu = !1;
const Z1 = (e) => e;
function Y1(e, t = Z1, n) {
  (Oh ? "production" : void 0) !== "production" && n && !vu && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), vu = !0);
  const r = K1(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return G1(r), r;
}
const wu = (e) => {
  (Oh ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? C1(e) : e, n = (r, s) => Y1(t, r, s);
  return Object.assign(n, t), n;
}, Q1 = (e) => e ? wu(e) : wu, Fn = {
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
}, X1 = (e) => e === "wifi", J1 = (e) => {
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
function bu(e, t) {
  const n = (r) => r.role === "router" || r.role === "firewall" ? "l3" : r.role === "switch" || r.role === "l3switch" ? "l2" : "host";
  return n(e) === n(t);
}
function zi(e, t) {
  const n = Se[e];
  return !n || !t ? !1 : n.media.includes(t.media);
}
function e0(e, t, n, r = null, s = null) {
  var a;
  const o = Se[e];
  if (!o) return { ok: !1, reason: "Unknown cable type.", fatal: !0 };
  if (!t || !n) return { ok: !1, reason: "Both ends must be devices.", fatal: !0 };
  if (t.id === n.id) return { ok: !1, reason: "Cannot cable a device to itself.", fatal: !0 };
  if (!r && !s) {
    for (const l of [t, n])
      if (!(l.interfaces || []).some((u) => zi(e, u)))
        return {
          ok: !1,
          fatal: !0,
          reason: `${l.hostname || "device"} has no ${o.short} port — ${o.hint}`
        };
  }
  if (r || s)
    for (const [l, c] of [[t, r], [n, s]]) {
      if (!c) return { ok: !1, reason: "Choose a port at each end.", fatal: !0 };
      if (X1(c.media))
        return { ok: !1, reason: `${c.name} is a radio — nothing plugs into it.`, fatal: !0 };
      if (!zi(e, c))
        return {
          ok: !1,
          fatal: !0,
          reason: `${o.label} does not fit ${l.hostname} ${c.name} (${((a = Fn[c.media]) == null ? void 0 : a.label) || c.media}).`
        };
      if (c.link)
        return { ok: !1, reason: `${l.hostname} ${c.name} already has a cable.`, fatal: !0 };
    }
  return e === "straight" && bu(t, n) ? { ok: !1, reason: Se.crossover.hint } : e === "crossover" && !bu(t, n) ? { ok: !1, reason: Se.straight.hint } : { ok: !0, reason: "" };
}
const Rn = {
  // ---- Network devices -------------------------------------------------
  router: {
    id: "router",
    label: "Router",
    role: "router",
    os: "ios",
    group: "Network Devices",
    icon: "Router",
    chassis: { rows: 2, label: "ISR series" },
    ports: [
      { prefix: "Gi0/", count: 2, media: "ethernet", speed: "1 Gbps" },
      { name: "Gi0/0/0", media: "fiber", speed: "1 Gbps", uplink: !0 },
      { prefix: "Se0/0/", count: 2, media: "serial", zeroBased: !0, speed: "1.544 Mbps" },
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
    chassis: { rows: 2, label: "Catalyst 2960" },
    ports: [
      { prefix: "Fa0/", count: 8, media: "ethernet", speed: "100 Mbps" },
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
    chassis: { rows: 2, label: "Catalyst 3560" },
    ports: [
      { prefix: "Gi1/0/", count: 8, media: "ethernet", speed: "1 Gbps" },
      { prefix: "Te1/1/", count: 2, media: "fiber", speed: "10 Gbps", uplink: !0 },
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
    chassis: { rows: 1, label: "ASA series" },
    ports: [
      { prefix: "Gi0/", count: 3, media: "ethernet", speed: "1 Gbps" },
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
    ap: { ssid: "LAB-WIFI", security: "wpa2", passphrase: "LabWiFi2026!", channel: 6 }
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
  webserver: {
    id: "webserver",
    label: "Web Server",
    role: "host",
    os: "linux",
    group: "End Devices",
    icon: "Globe",
    chassis: { rows: 1, label: "Rack server" },
    ports: [
      { prefix: "eth", count: 2, media: "ethernet", zeroBased: !0, speed: "1 Gbps" },
      { name: "Fib0", media: "fiber", speed: "10 Gbps", uplink: !0 },
      { name: "Con0", media: "console" }
    ],
    services: { http: !0, ssh: !0, mysql: !0, smb: !0 },
    webApp: !0
    // exposes the mock database used by the SQLi exercise
  },
  dnsserver: {
    id: "dnsserver",
    label: "DNS Server",
    role: "host",
    os: "linux",
    group: "End Devices",
    icon: "BookMarked",
    chassis: { rows: 1, label: "Rack server" },
    ports: [
      { prefix: "eth", count: 1, media: "ethernet", zeroBased: !0, speed: "1 Gbps" },
      { name: "Fib0", media: "fiber", speed: "10 Gbps", uplink: !0 }
    ],
    services: { dns: !0, ssh: !0 }
  },
  dhcpserver: {
    id: "dhcpserver",
    label: "DHCP Server",
    role: "host",
    os: "linux",
    group: "End Devices",
    icon: "ListOrdered",
    chassis: { rows: 1, label: "Rack server" },
    ports: [
      { prefix: "eth", count: 1, media: "ethernet", zeroBased: !0, speed: "1 Gbps" },
      { name: "Fib0", media: "fiber", speed: "10 Gbps", uplink: !0 }
    ],
    services: { dhcp: !0, ssh: !0 }
  },
  ftpserver: {
    id: "ftpserver",
    label: "FTP Server",
    role: "host",
    os: "linux",
    group: "End Devices",
    icon: "FolderTree",
    chassis: { rows: 1, label: "Rack server" },
    ports: [
      { prefix: "eth", count: 1, media: "ethernet", zeroBased: !0, speed: "1 Gbps" },
      { name: "Fib0", media: "fiber", speed: "10 Gbps", uplink: !0 }
    ],
    services: { ftp: !0, ssh: !0 }
  },
  // ---- IoT -------------------------------------------------------------
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
function _h(e) {
  const t = Array.isArray(e.ports) ? e.ports : [e.ports], n = [];
  for (const r of t) {
    if (!r) continue;
    const s = r.media || "ethernet";
    if (r.name) {
      n.push({ name: r.name, media: s, speed: r.speed || null, uplink: !!r.uplink });
      continue;
    }
    const o = r.count ?? 1;
    for (let a = 0; a < o; a++)
      n.push({
        name: `${r.prefix}${r.zeroBased ? a : a + 1}`,
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
  snmp: { label: "SNMP management", port: 161, proto: "udp", product: "net-snmp", current: "5.9.4", old: "5.7.3", cleartext: !0 }
}, t0 = ["Network Devices", "End Devices", "IoT Devices", "Red Team"];
function n0(e) {
  return Object.values(Rn).filter((t) => t.group === e);
}
function ct(e) {
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
function kt(e) {
  return [24, 16, 8, 0].map((t) => e >>> t & 255).join(".");
}
function $e(e) {
  return ct(e) !== null;
}
function Ve(e) {
  const t = ct(e);
  if (t === null) return null;
  const n = ~t >>> 0;
  if (n + 1 & n) return null;
  let r = 0;
  for (let s = 31; s >= 0 && t >>> s & 1; s--)
    r++;
  return r;
}
function Fh(e) {
  return e < 0 || e > 32 ? null : kt(e === 0 ? 0 : 4294967295 << 32 - e >>> 0);
}
function ku(e, t) {
  const n = ct(e), r = ct(t);
  return n === null || r === null ? null : (n & r) >>> 0;
}
function Jr(e, t, n) {
  const r = ku(e, n), s = ku(t, n);
  return r !== null && s !== null && r === s;
}
function Ct(e) {
  let t = 2166136261;
  for (let r = 0; r < e.length; r++)
    t ^= e.charCodeAt(r), t = t * 16777619 >>> 0;
  return [2, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, t & 255, t >>> 3 & 255].map((r) => r.toString(16).padStart(2, "0")).join(":");
}
const r0 = [
  { id: "tautology", re: /('|")?\s*or\s+('|")?\s*\d+\s*('|")?\s*=\s*('|")?\s*\d+/i, label: "tautology (OR 1=1)" },
  { id: "union", re: /union\s+(all\s+)?select/i, label: "UNION SELECT column grafting" },
  { id: "comment", re: /(--|#|\/\*)/, label: "comment terminator" },
  { id: "stacked", re: /;\s*(drop|insert|update|delete)\s/i, label: "stacked statement" },
  { id: "always-true-string", re: /('|")\s*or\s*('|")[^'"]*('|")\s*=\s*('|")/i, label: "string tautology (OR 'a'='a')" },
  { id: "sleep", re: /(sleep|benchmark|waitfor\s+delay)\s*\(/i, label: "time-based probe" }
];
function s0(e = "") {
  const t = `FLAG{sqli_${o0(e).toString(16)}}`;
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
function o0(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t ^= e.charCodeAt(n), t = t * 16777619 >>> 0;
  return t >>> 0;
}
function a0(e) {
  const t = String(e ?? "");
  return r0.filter((n) => n.re.test(t));
}
function Hh(e, t) {
  const n = e.database;
  if (!n)
    return { status: 404, vulnerable: !1, blocked: !1, signatures: [], lines: ["No web application on this host."], flag: null };
  const r = a0(t), s = e.security.inputSanitised, o = { at: Date.now(), input: String(t ?? ""), hits: r.map((u) => u.id), blocked: !1 };
  n.queryLog.push(o), n.queryLog.length > 200 && n.queryLog.shift();
  const a = s ? `SELECT id,username FROM users WHERE username = ?   -- bound: ${JSON.stringify(String(t ?? ""))}` : `SELECT id,username FROM users WHERE username = '${String(t ?? "")}'`;
  if (r.length === 0)
    return {
      status: 200,
      vulnerable: !1,
      blocked: !1,
      signatures: [],
      flag: null,
      lines: [a, "200 OK — 0 rows matched."]
    };
  if (s)
    return o.blocked = !0, {
      status: 400,
      vulnerable: !1,
      blocked: !0,
      signatures: r.map((u) => u.label),
      flag: null,
      lines: [
        a,
        "Input bound as a parameter — metacharacters carry no meaning.",
        `400 Bad Request — rejected signatures: ${r.map((u) => u.id).join(", ")}`
      ]
    };
  const l = [a, "MySQL error 1064 leaked column list → id, username, role, password_hash"];
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
const Hn = 210, le = {
  open: { id: "open", label: "Open — no encryption", short: "OPEN", encrypted: !1 },
  wep: { id: "wep", label: "WEP — legacy, broken", short: "WEP", encrypted: !0 },
  wpa2: { id: "wpa2", label: "WPA2-PSK (AES-CCMP)", short: "WPA2", encrypted: !0 },
  wpa3: { id: "wpa3", label: "WPA3-SAE", short: "WPA3", encrypted: !0 }
};
function i0(e) {
  return !!(le[e] && le[e].encrypted);
}
function vs(e, t) {
  return Math.hypot(e.x - t.x, e.y - t.y);
}
function Er(e) {
  return e.devices.filter((t) => t.ap && t.ap.enabled);
}
function l0(e) {
  return !!(e.radio && e.radio.enabled) && !(e.ap && e.ap.enabled);
}
function ec(e, t) {
  if (!t || !t.ap || !t.ap.enabled) return null;
  const n = t.ap.range ?? Hn, r = vs(e, t);
  if (r > n) return null;
  const s = Math.round(-30 - r / n * 62);
  return Math.max(-95, Math.min(-25, s));
}
function Uh(e) {
  return e == null ? 0 : e >= -55 ? 4 : e >= -67 ? 3 : e >= -78 ? 2 : e >= -88 ? 1 : 0;
}
function Bh(e, t) {
  return Er(e).filter((n) => n.id !== t.id).map((n) => ({ ap: n, dbm: ec(t, n) })).filter(({ dbm: n }) => n !== null).sort((n, r) => r.dbm - n.dbm);
}
function c0(e, t) {
  return !!(e.ap && e.ap.deauthed && e.ap.deauthed[t] != null);
}
function mn(e) {
  const t = /* @__PURE__ */ new Map(), n = Er(e);
  for (const r of e.devices) {
    if (!l0(r)) continue;
    const s = r.radio.ssid ? String(r.radio.ssid) : null;
    let o = null;
    for (const a of n) {
      if (a.id === r.id || s && a.ap.ssid !== s || c0(a, r.id)) continue;
      const l = ec(r, a);
      l !== null && (!o || l > o.dbm) && (o = {
        apId: a.id,
        dbm: l,
        ssid: a.ap.ssid,
        security: a.ap.security,
        rogue: !!a.ap.rogue
      });
    }
    o && t.set(r.id, o);
  }
  return t;
}
function Wh(e) {
  const t = [];
  for (const [n, r] of mn(e))
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
function u0(e, t) {
  let n = !1;
  for (const r of e.devices)
    if (!(!r.ap || !r.ap.deauthed))
      for (const [s, o] of Object.entries(r.ap.deauthed))
        t >= o && (delete r.ap.deauthed[s], n = !0);
  return n;
}
function d0(e, t, n) {
  return e.devices.filter((r) => {
    if (!r.radio || !r.radio.enabled) return !1;
    if (r.id === t.id || n && r.id === n.id) return !0;
    const s = r.radio.range ?? Hn;
    return vs(r, t) <= s;
  });
}
function Vh(e, t, n) {
  const r = mn(e), s = r.get(t.id);
  if (s && s.apId === n.id) return s;
  const o = r.get(n.id);
  return o && o.apId === t.id ? o : null;
}
let Su = 0;
function p0(e = "d") {
  return Su += 1, `${e}${Su.toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}
const h0 = {
  router: "Router",
  switch: "Switch",
  l3switch: "MLSwitch",
  firewall: "Firewall",
  host: "Host",
  iot: "IoT"
};
function f0(e, t) {
  const n = t.id === "pc" ? "PC" : t.id === "laptop" ? "Laptop" : t.id === "accesspoint" ? "AP" : t.id === "threatactor" ? "Attacker" : t.id === "isp" ? "Internet" : t.id === "webserver" ? "WebSrv" : t.id === "dnsserver" ? "DnsSrv" : t.id === "dhcpserver" ? "DhcpSrv" : t.id === "ftpserver" ? "FtpSrv" : t.id === "sensor" ? "Sensor" : t.id === "camera" ? "Camera" : h0[t.role] || "Device";
  let r = 0;
  const s = new Set(e.map((o) => o.hostname));
  for (; s.has(`${n}${r}`); ) r += 1;
  return `${n}${r}`;
}
function m0(e) {
  return e.ap || !_h(e).some((n) => n.media === "wifi") && !e.radio ? null : {
    enabled: !0,
    ssid: "",
    monitorMode: !1,
    ...e.radio || {},
    range: Hn
  };
}
function g0(e, t) {
  return _h(e).map((n, r) => ({
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
    mac: Ct(`${t}:${r}`),
    enabled: !1,
    // "administratively down" until configured or cabled
    vlan: 1,
    mode: "access"
  }));
}
function ju(e, t, n, r = []) {
  const s = Rn[e];
  if (!s) throw new Error(`Unknown device type: ${e}`);
  const o = p0("d");
  return {
    id: o,
    typeId: e,
    role: s.role,
    os: s.os,
    hostname: f0(r, s),
    x: t,
    y: n,
    interfaces: g0(s, o),
    gateway: "",
    routes: [],
    vlans: s.vlanCapable ? [{ id: 1, name: "default" }] : [],
    acl: [],
    // firewall / router access-list entries
    arp: {},
    //           ip -> { mac, static, spoofed }
    dnsZone: {},
    //       name -> ip   (DNS servers only)
    services: { ...s.services },
    // --- radio layer (see engine/wireless.js) ---------------------------
    // `radio` is a client station; `ap` makes the device broadcast a BSS.
    //
    // The radio is derived from the panel rather than declared separately:
    // any device with a Wi-Fi port gets a client radio, so a port and its
    // radio can never disagree about whether the device can use wireless.
    // Access points are the exception — their Wi-Fi port serves the BSS.
    radio: m0(s),
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
    database: s.webApp ? s0(o) : null,
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
function O(e) {
  const t = e.interfaces.find((n) => n.ip);
  return t ? t.ip : "";
}
function rr(e) {
  return e.interfaces.find((t) => t.ip) || e.interfaces[0] || null;
}
function qh(e, t) {
  if (!t) return null;
  const n = String(t).toLowerCase().replace(/\s+/g, "");
  return e.interfaces.find((r) => r.name.toLowerCase().replace(/\s+/g, "") === n) || // allow shorthand: "0/1" matches "Gi0/1", "e0" matches "eth0"
  e.interfaces.find((r) => r.name.toLowerCase().replace(/\s+/g, "").endsWith(n)) || null;
}
function Nn(e) {
  return Object.entries(e.services).filter(([, t]) => t).map(([t]) => t);
}
function x0(e, t) {
  return !!e.services[t] && !e.runtime.unresponsive;
}
function Oi(e, t) {
  const n = e.security;
  return n.lockout.failures += 1, n.maxAuthTries > 0 && n.lockout.failures >= n.maxAuthTries && (n.lockout.locked = !0, n.lockout.lockedUntil = t + 6e4), n.lockout;
}
function Gh(e, t) {
  const n = e.security.lockout;
  return n.locked ? t >= n.lockedUntil ? (n.locked = !1, n.failures = 0, !1) : !0 : !1;
}
function tc(e) {
  e.runtime.cpu = 2, e.runtime.memory = 14, e.runtime.packetsDropped = 0, e.runtime.sessions = 0, e.runtime.unresponsive = !1, e.runtime.underAttack = null;
}
function _i(e, t) {
  return !e || !t ? null : e.interfaces.find((n) => n.name === t) || null;
}
function Kh(e, t) {
  return e.interfaces.map((n) => {
    var a, l;
    const r = Fn[n.media];
    let s = !1, o = "";
    if (n.media === "wifi")
      s = !0, o = "radio — nothing plugs in";
    else if (n.link)
      s = !0, o = "already cabled";
    else if (t && !zi(t, n)) {
      s = !0;
      const c = (a = r == null ? void 0 : r.cables) == null ? void 0 : a[0], u = c ? (l = Se[c]) == null ? void 0 : l.short : null;
      o = u ? `needs a ${u} cable` : `wrong media (${(r == null ? void 0 : r.short) || n.media})`;
    }
    return { port: n, name: n.name, media: n.media, mediaLabel: (r == null ? void 0 : r.label) || n.media, disabled: s, reason: o };
  });
}
function Nu(e, t) {
  return Kh(e, t).filter((n) => !n.disabled).map((n) => n.port);
}
function hr(e, t, n) {
  var o;
  if (!t) return "empty";
  if (t.media === "wifi") {
    const a = e.radio && e.radio.associatedTo;
    return (o = e.radio) != null && o.enabled ? a ? "up" : "idle" : "off";
  }
  if (!t.link) return "empty";
  const r = n == null ? void 0 : n.links.find((a) => a.id === t.link);
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
  const s = r.a === e.id ? r.b : r.a, o = r.a === e.id ? r.bPort : r.aPort, a = n.devices.find((l) => l.id === s);
  return a ? { device: a, port: _i(a, o), link: r } : null;
}
function y0(e) {
  const t = new Map(e.devices.map((s) => [s.id, s])), n = (s, o) => {
    const a = t.get(s);
    if (!a) return !1;
    if (!o) return !0;
    const l = a.interfaces.find((c) => c.name === o);
    return l ? l.enabled !== !1 : !0;
  };
  return e.links.filter(
    (s) => !s.down && n(s.a, s.aPort) && n(s.b, s.bPort)
  ).concat(Wh(e));
}
const v0 = y0;
function Zh(e, t) {
  const n = [];
  for (const r of v0(e))
    r.a === t ? n.push(r.b) : r.b === t && n.push(r.a);
  return n;
}
function V(e, t, n) {
  if (t === n) return [t];
  const r = /* @__PURE__ */ new Map([[t, null]]), s = [t];
  for (; s.length; ) {
    const o = s.shift();
    for (const a of Zh(e, o))
      if (!r.has(a)) {
        if (r.set(a, o), a === n) {
          const l = [a];
          let c = o;
          for (; c !== null; )
            l.unshift(c), c = r.get(c);
          return l;
        }
        s.push(a);
      }
  }
  return null;
}
function w0(e, t, n) {
  return V(e, t, n) !== null;
}
function b0(e, t) {
  const n = new Map(e.devices.map((a) => [a.id, a])), r = /* @__PURE__ */ new Set([t]), s = [t], o = /* @__PURE__ */ new Set([t]);
  for (; s.length; ) {
    const a = s.shift();
    for (const l of Zh(e, a)) {
      if (r.has(l)) continue;
      r.add(l), o.add(l);
      const c = n.get(l);
      c && (c.role === "router" || c.role === "firewall") || s.push(l);
    }
  }
  return o;
}
function Yh(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.devices)
    for (const r of n.interfaces)
      r.ip && t.set(r.ip, { device: n, iface: r });
  return t;
}
function Qe(e, t) {
  if (!t) return null;
  const n = Yh(e).get(t.trim());
  if (n) return n.device;
  const r = t.trim().toLowerCase();
  return e.devices.find((s) => s.hostname.toLowerCase() === r) || null;
}
class k0 {
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
const S0 = "ff:ff:ff:ff:ff:ff", za = (e) => {
  var t, n;
  return ((n = (t = e == null ? void 0 : e.interfaces) == null ? void 0 : t[0]) == null ? void 0 : n.mac) || Ct(`${(e == null ? void 0 : e.id) || "x"}:0`);
}, Or = (e) => String(e).split("").reduce((t, n) => t * 31 + n.charCodeAt(0) >>> 0, 7), j0 = /* @__PURE__ */ new Set(["beacon", "deauth", "auth", "probe"]), Cu = {
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
}, Qh = {
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
function $u({ topology: e, from: t, to: n, kind: r = "icmp", clock: s = 0, srcIp: o = "", dstIp: a = "", meta: l = {} }) {
  var U;
  const c = Cu[r] || Cu.tcp, u = j0.has(r), d = u ? null : Vh(e, t, n), p = !!d || u, h = l.security || (d == null ? void 0 : d.security) || (p ? N0(e, t, n) : null), f = String(h || "none").toLowerCase(), g = p && !u && i0(f) && !l.plaintext, j = za(t), y = u && r === "beacon" ? S0 : za(n), m = d ? za(e.devices.find((L) => L.id === d.apId) || t) : j, x = new k0(), w = {};
  if (p) {
    const L = { beacon: 8, deauth: 12, auth: 11, probe: 4 }[r] ?? 0, Z = u ? 0 : 2;
    x.u8((L & 15) << 4 | (Z & 3) << 2), x.u8(g ? 64 : 0), x.u16(314), x.mac(y), x.mac(j), x.mac(m), x.u16(((l.sn ?? l.seq ?? 0) & 4095) << 4), g && x.filler(8, Or(j)), w.dot11 = {
      frameType: u ? `Management (${r})` : "Data",
      protected: g,
      receiver: y,
      transmitter: j,
      bssid: m,
      ssid: l.ssid || (d == null ? void 0 : d.ssid) || "",
      channel: l.channel ?? null,
      signal: l.dbm != null ? `${l.dbm} dBm` : d ? `${d.dbm} dBm` : "",
      security: le[f] ? le[f].short : "OPEN",
      ...r === "deauth" ? { reasonCode: `${l.reason ?? 7} (class 3 frame from nonassociated station)` } : {}
    };
  } else {
    const L = r === "arp" ? 2054 : 2048;
    x.mac(y).mac(j).u16(L), w.eth = {
      destination: y,
      source: j,
      type: `0x${L.toString(16).padStart(4, "0")} (${r === "arp" ? "ARP" : "IPv4"})`
    };
  }
  let k = "";
  if (r === "arp")
    x.u16(1).u16(2048).u8(6).u8(4).u16(l.reply ? 2 : 1), x.mac(j).ip(o).mac(l.reply ? y : "00:00:00:00:00:00").ip(a), w.arp = {
      opcode: l.reply ? "2 (reply)" : "1 (request)",
      senderMac: j,
      senderIp: o,
      targetIp: a,
      summary: l.reply ? `${o} is at ${j}` : `Who has ${a}? Tell ${o}`
    };
  else if (u) {
    const L = l.ssid || "";
    x.u8(0).u8(L.length).ascii(L).u8(3).u8(l.channel ?? 6), r === "deauth" && x.u16(l.reason ?? 7), k = $0(r, l);
  } else {
    const L = c.l4, Z = (L === "tcp" || L === "udp") && l.body ? String(l.body).length : c.payload || 0, J = L === "tcp" ? 20 : L === "udp" || L === "icmp" ? 8 : 0;
    x.u8(69).u8(0).u16(20 + J + Z).u16(7238).u16(16384), x.u8(l.ttl ?? 64), x.u8(L === "tcp" ? 6 : L === "udp" ? 17 : 1), x.u16(0).ip(o).ip(a), w.ip = {
      version: 4,
      headerLength: "20 bytes",
      totalLength: `${20 + J + Z} bytes`,
      ttl: l.ttl ?? 64,
      protocol: L === "tcp" ? "6 (TCP)" : L === "udp" ? "17 (UDP)" : "1 (ICMP)",
      source: o,
      destination: a
    };
    const te = l.port || c.port || 0;
    if (L === "tcp") {
      const ee = 4e4 + (Or(j) % 2e4 | 0);
      x.u16(ee).u16(te).u32(l.seq ?? 1).u32(0).u16(20504).u16(64240).u16(0).u16(0), w.tcp = {
        sourcePort: ee,
        destinationPort: te,
        flags: "PSH, ACK",
        window: 64240,
        payloadBytes: Z
      };
    } else if (L === "udp") {
      const ee = 4e4 + (Or(j) % 2e4 | 0);
      x.u16(ee).u16(te).u16(8 + Z).u16(0), w.udp = { sourcePort: ee, destinationPort: te, length: 8 + Z };
    } else L === "icmp" && (x.u8(l.reply ? 0 : 8).u8(0).u16(0).u16(1).u16(l.seq ?? 0), w.icmp = {
      type: l.reply ? "0 (Echo Reply)" : "8 (Echo Request)",
      identifier: "0x0001",
      sequence: l.seq ?? 0
    });
    k = l.body ? String(l.body) : C0(r, l), Z > 0 && (g ? x.filler(Z, Or(j + Z)) : l.body ? x.ascii(String(l.body)) : x.filler(Z, Or(r) + (l.seq ?? 0)));
  }
  (k && k.length > 0 || g) && (w.payload = {
    protected: g,
    bytes: g ? "ciphertext" : `${k.length} bytes`,
    ...g ? { note: `Encrypted with ${((U = le[f]) == null ? void 0 : U.short) || "WPA2"} — unreadable without the key` } : { text: k }
  });
  const v = x.out, $ = P0({ kind: r, spec: c, meta: l, srcIp: o, dstIp: a, layers: w, encrypted: g, security: f, payloadText: k });
  return {
    number: null,
    // assigned by CaptureBuffer.add
    time: s / 1e3,
    source: p && u ? j : o || j,
    destination: p && u ? y : a || y,
    protocol: c.protocol,
    colorKey: c.colorKey,
    length: v.length,
    bytes: v,
    wireless: p,
    encrypted: g,
    security: f,
    info: $,
    witnesses: [],
    layers: {
      frame: {
        capturedLength: `${v.length} bytes`,
        medium: p ? `802.11 radio${l.channel != null ? `, channel ${l.channel}` : ""}` : "Ethernet cable",
        arrivalTime: `${(s / 1e3).toFixed(3)} s (virtual)`,
        ...p && l.dbm != null ? { signal: `${l.dbm} dBm` } : {}
      },
      ...w
    }
  };
}
function N0(e, t, n) {
  const r = [t, n].find((s) => s && s.ap && s.ap.enabled);
  return r ? r.ap.security : "none";
}
function C0(e, t) {
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
function $0(e, t) {
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
function P0({ kind: e, spec: t, meta: n, srcIp: r, dstIp: s, layers: o, encrypted: a, security: l, payloadText: c }) {
  var u, d;
  if (e === "beacon")
    return `Beacon frame, SSID="${n.ssid || ""}", CH ${n.channel ?? 6}, ${String(n.security || "open").toUpperCase()}`;
  if (e === "deauth")
    return `Deauthentication, reason ${n.reason ?? 7} (spoofed)`;
  if (e === "auth") return "Authentication, association exchange";
  if (e === "arp") return ((u = o.arp) == null ? void 0 : u.summary) || "ARP";
  if (e === "icmp")
    return `Echo (ping) ${n.reply ? "reply" : "request"} id=0x0001 seq=${n.seq ?? 0}`;
  if (a)
    return `${t.protocol} data, ${((d = le[l]) == null ? void 0 : d.short) || "WPA2"} protected`;
  if (e === "http") {
    const p = String(n.body || "").split(`\r
`)[0];
    return p ? `${p}` : `HTTP ${r} → ${s}`;
  }
  return e === "dns" ? `Standard query A ${n.name || "web.lab.local"}` : e === "mqtt" ? `PUBLISH ${n.topic || "sensors/telemetry"}` : e === "attack" ? n.label ? `${n.label}` : "TCP (exercise traffic)" : c || `${t.protocol} ${r} → ${s}`;
}
function E0(e, t, n) {
  const r = new Map(e.devices.map((l) => [l.id, l])), s = /* @__PURE__ */ new Set([t.id, n.id]), o = [], a = (l) => {
    var c;
    return ((c = r.get(l)) == null ? void 0 : c.role) === "hub";
  };
  for (const l of [t.id, n.id]) a(l) && o.push(l);
  for (; o.length; ) {
    const l = o.shift();
    for (const c of e.links) {
      if (c.down) continue;
      const u = c.a === l ? c.b : c.b === l ? c.a : null;
      !u || s.has(u) || (s.add(u), a(u) && o.push(u));
    }
  }
  return s;
}
function T0(e, t, n, r) {
  if (!t || !n || !r) return !1;
  if (t.id === n.id || t.id === r.id) return !0;
  const s = Vh(e, n, r), o = !s && !!(n.ap || r.ap) && n.id === r.id;
  if (s || o) {
    if (!t.radio || !t.radio.enabled || !t.radio.monitorMode) return !1;
    const a = t.radio.range ?? Hn;
    return vs(t, n) <= a || vs(t, r) <= a;
  }
  return t.promiscuous ? E0(e, n, r).has(t.id) : !1;
}
const Pu = {
  http: "HTTP",
  icmp: "ICMP",
  arp: "ARP",
  dns: "DNS",
  dhcp: "DHCP",
  mqtt: "MQTT",
  eapol: "EAPOL"
};
function Xh(e, t) {
  const n = String(t || "").trim().toLowerCase();
  return n ? n.split(/\s+(?:and|&&)\s+/).map((r) => r.trim()).filter(Boolean).every((r) => A0(e, r)) : !0;
}
function A0(e, t) {
  if (t === "wlan") return !!e.wireless;
  if (t === "eth") return !e.wireless;
  if (t === "plaintext") return !e.encrypted;
  if (t === "encrypted") return !!e.encrypted;
  if (t === "tcp") return !!e.layers.tcp;
  if (t === "udp") return !!e.layers.udp;
  if (Pu[t]) return e.protocol === Pu[t];
  const n = t.match(/^([a-z0-9.]+)\s*(==|!=)\s*(.+)$/);
  if (n) {
    const [, r, s, o] = n, a = o.replace(/^["']|["']$/g, "").trim(), l = I0(e, r);
    if (l === null) return !1;
    const c = Array.isArray(l) ? l.some((u) => String(u).toLowerCase() === a) : String(l).toLowerCase() === a;
    return s === "!=" ? !c : c;
  }
  return `${e.protocol} ${e.source} ${e.destination} ${e.info}`.toLowerCase().includes(t);
}
function I0(e, t) {
  var n, r, s, o, a, l, c, u, d, p;
  switch (t) {
    case "ip.src":
      return ((n = e.layers.ip) == null ? void 0 : n.source) ?? null;
    case "ip.dst":
      return ((r = e.layers.ip) == null ? void 0 : r.destination) ?? null;
    case "ip.addr":
      return [(s = e.layers.ip) == null ? void 0 : s.source, (o = e.layers.ip) == null ? void 0 : o.destination, e.source, e.destination].filter(Boolean);
    case "eth.src":
      return ((a = e.layers.eth) == null ? void 0 : a.source) ?? ((l = e.layers.dot11) == null ? void 0 : l.transmitter) ?? null;
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
class M0 {
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
    for (const a of n)
      r[a.protocol] = (r[a.protocol] || 0) + 1, s += a.length, a.encrypted && (o += 1);
    return { total: n.length, bytes: s, encrypted: o, byProtocol: r };
  }
  /** Cleartext credentials visible in the capture — the payoff of sniffing. */
  credentials(t = null) {
    var r;
    const n = [];
    for (const s of this.for(t)) {
      if (s.encrypted) continue;
      const a = (((r = s.layers.payload) == null ? void 0 : r.text) || "").match(/(?:username|user|login)=([^&\s]+).*?password=([^&\s]+)/i);
      a && n.push({ number: s.number, username: a[1], password: a[2], at: s.time });
    }
    return n;
  }
}
function L0(e, t = 16) {
  const n = [], r = Array.from(e || []);
  for (let s = 0; s < r.length; s += t) {
    const o = r.slice(s, s + t);
    n.push({
      offset: s.toString(16).padStart(4, "0"),
      hex: o.map((a) => a.toString(16).padStart(2, "0")),
      ascii: o.map((a) => a >= 32 && a < 127 ? String.fromCharCode(a) : ".").join(""),
      bytes: o
    });
  }
  return n;
}
function R0(e) {
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
const Eu = {
  icmp: { label: "ICMP", color: "#3b82f6" },
  arp: { label: "ARP", color: "#a855f7" },
  dns: { label: "DNS", color: "#14b8a6" },
  dhcp: { label: "DHCP", color: "#f59e0b" },
  http: { label: "HTTP", color: "#22c55e" },
  mqtt: { label: "MQTT", color: "#06b6d4" },
  attack: { label: "ATTACK", color: "#ef4444" }
}, _r = 320, D0 = 4;
let z0 = 0;
const Oa = () => z0 += 1;
class O0 {
  /**
   * @param {object} opts
   * @param {() => {devices:Array, links:Array}} opts.getTopology  live snapshot accessor
   * @param {(line:{channel:string,text:string,level:string}) => void} opts.onLog
   * @param {() => void} opts.onChange  called when runtime state mutates
   */
  constructor({ getTopology: t, onLog: n = () => {
  }, onChange: r = () => {
  } }) {
    this.getTopology = t, this.onLog = n, this.onChange = r, this.clock = 0, this.running = !0, this.speed = 1, this.queue = [], this.packets = [], this._timers = /* @__PURE__ */ new Map(), this.capture = new M0(), this.mode = "realtime", this.ambient = !0, this.coaching = !1, this.pduEvents = [], this.pduSeq = 0;
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
    this.clock += t * this.speed, u0(this.getTopology(), this.clock) && this.onChange();
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
    const s = { id: Oa(), at: this.clock + t, fn: n, label: r, cancelled: !1 }, o = this.queue.findIndex((a) => a.at > s.at);
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
      for (const a of s)
        this.pduEvents.push({
          id: ++this.pduSeq,
          status: "queued",
          at: null,
          kind: n,
          hop: a
        });
      return this.pduEvents.length > 300 && this.pduEvents.splice(0, this.pduEvents.length - 300), this.onChange(), null;
    }
    const o = {
      id: Oa(),
      kind: n,
      path: t,
      meta: r,
      startedAt: this.clock,
      arrivesAt: this.clock + _r * (t.length - 1),
      hopMs: _r
    };
    this.packets.push(o), this.packets.length > 120 && this.packets.shift();
    for (const a of s) this.commitHop(a);
    return this.onChange(), o;
  }
  /** Advance one queued hop. Returns the event, or null when the queue is empty. */
  step() {
    const t = this.pduEvents.find((n) => n.status === "queued");
    return t ? (t.status = "done", t.at = this.clock, this.commitHop(t.hop), this.packets.push({
      id: Oa(),
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
    const s = this.getTopology(), o = new Map(s.devices.map((p) => [p.id, p])), a = o.get(t[0]), l = o.get(t[t.length - 1]);
    if (!a || !l) return [];
    const c = r.srcIp || O(a), u = r.dstIp || O(l), d = [];
    for (let p = 0; p < t.length - 1; p++) {
      const h = o.get(t[p]), f = o.get(t[p + 1]);
      if (!h || !f) continue;
      const g = mn(s).get(h.id), j = $u({
        topology: s,
        from: h,
        to: f,
        kind: n,
        clock: this.clock,
        srcIp: c,
        dstIp: u,
        meta: { ...r, dbm: g ? g.dbm : void 0, ssid: g ? g.ssid : r.ssid }
      }), y = s.devices.filter((m) => (m.capturing || m.id === h.id || m.id === f.id) && T0(s, m, h, f)).map((m) => m.id);
      d.push({
        index: p,
        total: t.length - 1,
        path: t,
        fromId: h.id,
        toId: f.id,
        fromName: h.hostname,
        toName: f.hostname,
        frame: j,
        witnesses: y
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
    const o = this.getTopology(), a = $u({
      topology: o,
      from: t,
      to: n,
      kind: r,
      clock: this.clock,
      srcIp: O(t),
      dstIp: O(n),
      meta: s
    }), l = d0(o, t, n).filter((u) => u.capturing && u.radio.monitorMode).map((u) => u.id), c = [.../* @__PURE__ */ new Set([t.id, n.id, ...l])];
    return this.capture.add(a, c), this.onChange(), a;
  }
  /** Where a packet sits right now, in canvas coordinates, or null. */
  positionOf(t, n) {
    const r = this.clock - t.startedAt;
    if (r < 0) return null;
    const s = Math.min(Math.floor(r / t.hopMs), t.path.length - 2), o = Math.min(1, (r - s * t.hopMs) / t.hopMs), a = n.get(t.path[s]), l = n.get(t.path[s + 1]);
    return !a || !l ? null : { x: a.x + (l.x - a.x) * o, y: a.y + (l.y - a.y) * o };
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
    const r = this.getTopology(), s = (f, g) => ({ ok: !1, code: f, reason: g, path: null, viaSpoof: !1, ttl: 0 }), o = O(t);
    if (!o) return s("no-src-ip", "no IP address configured on the source interface");
    const a = Qe(r, n);
    if (!a) {
      const f = r.devices.some((g) => g.services.dns && Object.keys(g.dnsZone).length);
      return s("unknown-host", f ? "name not present in any DNS zone" : "name or service not known");
    }
    if (a.id === t.id)
      return { ok: !0, code: "loopback", reason: "loopback", path: [t.id], viaSpoof: !1, ttl: 64 };
    const l = O(a);
    if (!l) return s("no-dst-ip", `${a.hostname} has no IP address configured`);
    const c = V(r, t.id, a.id);
    if (!c) return s("no-path", "no cable path to the destination — check your wiring");
    const u = rr(t);
    if (!Jr(o, l, u.mask)) {
      if (!t.gateway || !$e(t.gateway))
        return s("no-gateway", "destination is off-subnet and no default gateway is set");
      const f = Qe(r, t.gateway);
      if (!f) return s("gateway-unreachable", `default gateway ${t.gateway} does not exist`);
      if (!V(r, t.id, f.id))
        return s("gateway-unreachable", `default gateway ${t.gateway} is not reachable`);
      if (!r.devices.some(
        (j) => (j.role === "router" || j.role === "l3switch") && V(r, t.id, j.id) && V(r, j.id, a.id)
      )) return s("no-route", "no router joins these two subnets");
    }
    const p = this.aclVerdict(c, o, l);
    if (p) return { ...s("acl-deny", `blocked by ACL on ${p.hostname}`), path: c };
    if (a.runtime.unresponsive)
      return { ...s("host-down", `${a.hostname} is not responding (service saturated)`), path: c };
    const h = this.spoofDetour(t, a, c);
    return {
      ok: !0,
      code: "ok",
      reason: "reachable",
      path: h.path,
      viaSpoof: h.viaSpoof,
      ttl: 64 - (h.path.length - 2)
    };
  }
  /** First firewall on the path whose ACL denies this flow, or null. */
  aclVerdict(t, n, r) {
    const s = this.getTopology(), o = new Map(s.devices.map((a) => [a.id, a]));
    for (const a of t) {
      const l = o.get(a);
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
    const n = this.getTopology(), r = new Map(n.devices.map((o) => [o.id, o])), s = t.map((o) => r.get(o)).filter((o) => o && o.interfaces.some((a) => a.ip));
    for (let o = 0; o < s.length - 1; o++) {
      const a = s[o], l = s[o + 1];
      for (const c of a.interfaces) {
        if (!c.ip) continue;
        const u = l.interfaces.find((d) => d.ip && Jr(c.ip, d.ip, c.mask));
        if (u) {
          this.cacheArp(a, u.ip, u.mac), this.cacheArp(l, c.ip, c.mac);
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
        s.static || (s.age = Math.floor((this.clock - (s.at ?? this.clock)) / 6e4), !s.spoofed && s.age >= D0 && delete n.arp[r]);
  }
  /**
   * If the source's ARP entry for its next hop has been poisoned, splice the
   * attacker into the path — this is what makes the MitM lesson visible.
   */
  spoofDetour(t, n, r) {
    const s = this.getTopology(), o = Jr(O(t), O(n), rr(t).mask) ? O(n) : t.gateway, a = t.arp[o];
    if (!a || !a.spoofed || !a.byDeviceId) return { path: r, viaSpoof: !1 };
    const l = s.devices.find((d) => d.id === a.byDeviceId);
    if (!l) return { path: r, viaSpoof: !1 };
    const c = V(s, t.id, l.id), u = V(s, l.id, n.id);
    return !c || !u ? { path: r, viaSpoof: !1 } : { path: [...c, ...u.slice(1)], viaSpoof: !0 };
  }
  // ------------------------------------------------------------- services
  /** ICMP echo, four probes, logged to the issuing device's console. */
  ping(t, n, r, { count: s = 4 } = {}) {
    const o = this.adjudicate(t, n), a = this.getTopology(), l = Qe(a, n), c = l ? O(l) : n;
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
    const o = this.getTopology(), a = new Map(o.devices.map((c) => [c.id, c])), l = s.path.slice(1).map((c) => a.get(c)).filter(Boolean);
    return this.log(r, `traceroute to ${n}, 30 hops max`, "info"), l.forEach((c, u) => {
      this.schedule(u * 260, () => {
        const d = (u + 1) * 0.8 + Math.random() * 2;
        this.log(
          r,
          ` ${u + 1}  ${c.hostname} (${O(c) || "*"})  ${d.toFixed(2)} ms`,
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
    const r = O(t);
    if (!r) return null;
    const s = r.split("."), o = `${s[0]}.${s[1]}.${s[2]}.`, a = t.dhcp = t.dhcp || {};
    a.base !== o && Object.assign(a, { base: o, next: 100, leases: {} }), a.leases = a.leases || {};
    const l = Object.entries(a.leases).find(([, p]) => p === n.id);
    if (l) return l[0];
    const c = this.getTopology(), u = new Set(
      c.devices.flatMap((p) => p.interfaces.map((h) => h.ip).filter(Boolean))
    );
    for (; a.next < 255 && u.has(`${o}${a.next}`); ) a.next += 1;
    if (a.next >= 255) return null;
    const d = `${o}${a.next++}`;
    return a.leases[d] = n.id, d;
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
    const t = this.getTopology(), n = t.devices.filter((o) => o.services.dhcp && O(o));
    if (n.length)
      for (const o of t.devices) {
        if (o.role === "attacker") continue;
        const a = o.interfaces.find((h) => h.addressing === "dhcp" && h.media !== "console");
        if (!a || a.ip || !(a.link || ((r = o.radio) == null ? void 0 : r.associatedTo))) continue;
        const c = n.find((h) => h.id !== o.id && V(t, o.id, h.id));
        if (!c) continue;
        const u = this.lease(c, o);
        if (!u) continue;
        a.ip = u, a.mask = ((s = rr(c)) == null ? void 0 : s.mask) || "255.255.255.0", a.enabled = !0;
        const d = t.devices.find(
          (h) => (h.role === "router" || h.role === "l3switch") && O(h) && V(t, o.id, h.id)
        );
        d && (o.gateway = O(d));
        const p = V(t, o.id, c.id);
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
      (c) => c.services.dhcp && V(r, t.id, c.id)
    );
    if (!s)
      return this.log(n, "DHCPDISCOVER on eth0 … no DHCPOFFERS received", "error"), null;
    const o = this.lease(s, t);
    if (!o)
      return this.log(n, "DHCPDISCOVER on eth0 … offered pool is exhausted", "error"), null;
    const a = V(r, t.id, s.id), l = [
      ["DHCPDISCOVER on eth0 to 255.255.255.255 port 67", "info"],
      [`DHCPOFFER of ${o} from ${O(s) || s.hostname}`, "info"],
      [`DHCPREQUEST for ${o}`, "info"],
      [`DHCPACK of ${o} — lease bound`, "success"]
    ];
    return l.forEach(([c, u], d) => {
      this.schedule(d * 320, () => {
        var p;
        if (this.log(n, c, u), a && this.emit(d % 2 === 0 ? a : [...a].reverse(), "dhcp"), d === l.length - 1) {
          const h = t.interfaces.find((g) => g.media !== "console") || t.interfaces[0];
          h.ip = o, h.mask = ((p = rr(s)) == null ? void 0 : p.mask) || "255.255.255.0", h.enabled = !0;
          const f = r.devices.find(
            (g) => (g.role === "router" || g.role === "l3switch") && O(g) && V(r, t.id, g.id)
          );
          f && (t.gateway = O(f)), this.onChange();
        }
      });
    }), o;
  }
  /** Resolve a name through a reachable DNS server's zone file. */
  dnsLookup(t, n, r) {
    const s = this.getTopology(), o = s.devices.find(
      (c) => c.services.dns && V(s, t.id, c.id)
    );
    if (!o)
      return this.log(r, ";; connection timed out; no servers could be reached", "error"), null;
    const a = V(s, t.id, o.id);
    a && this.emit(a, "dns");
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
        (a) => (a.role === "host" || a.role === "iot") && O(a) && !a.runtime.unresponsive
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
    const r = t.devices.filter((d) => d.id !== n.id && O(d));
    if (!r.length) return null;
    const s = r.find((d) => d.services.dns), o = r.find((d) => d.services.http), a = n.gateway ? r.find((d) => O(d) === n.gateway) : null, l = [];
    if (s && l.push({ kind: "dns", target: O(s), meta: { name: "time.lab" }, weight: 3 }), o && l.push({ kind: "http", target: O(o), meta: { body: "GET /index.html HTTP/1.1" }, weight: 3 }), a && l.push({ kind: "arp", target: O(a), meta: { reply: !1 }, weight: 2 }), a && l.push({ kind: "icmp", target: O(a), meta: { seq: 1 }, weight: 1 }), !l.length) return null;
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
      this.ageArp(), this.serveDhcp();
      const n = t.devices.filter((r) => r.services.mqtt && r.role === "host");
      for (const r of t.devices) {
        if (r.role !== "iot" || !r.services.mqtt || !O(r)) continue;
        const s = n.find((a) => V(t, r.id, a.id));
        if (!s) continue;
        const o = V(t, r.id, s.id);
        o && this.emit(o, "mqtt", { from: r.hostname }), r.runtime.packetsOut += 1, s.runtime.packetsIn += 1;
      }
      this.onChange();
    }, "telemetry");
  }
}
function _0(e, t) {
  const n = e.devices;
  return {
    topology: e,
    devices: n,
    links: e.links,
    engine: t,
    /** First device matching a predicate or role name. */
    find: (r) => typeof r == "string" ? n.find((s) => s.role === r || s.typeId === r) : n.find(r),
    findAll: (r) => typeof r == "string" ? n.filter((s) => s.role === r || s.typeId === r) : n.filter(r),
    ipOf: O,
    ifaceOf: rr,
    reachable: (r, s) => !!(r && s && w0(e, r.id, s.id)),
    path: (r, s) => r && s ? V(e, r.id, s.id) : null,
    resolve: (r) => Qe(e, r),
    ips: () => Yh(e),
    sameSubnet: Jr,
    maskToPrefix: Ve
  };
}
function F0(e, t, n) {
  const r = _0(t, n), s = e.objectives.map((l) => {
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
  }), o = s.reduce((l, c) => l + c.points, 0), a = s.reduce((l, c) => l + (c.pass ? c.points : 0), 0);
  return {
    objectives: s,
    earned: a,
    total: o,
    percent: o === 0 ? 0 : Math.round(a / o * 100),
    complete: a === o && o > 0,
    gradedAt: Date.now()
  };
}
function H0(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.objectives)
    t.has(n.section) || t.set(n.section, []), t.get(n.section).push(n);
  return [...t.entries()].map(([n, r]) => ({ section: n, objectives: r }));
}
function Jh(e) {
  return e >= 90 ? "A" : e >= 80 ? "B" : e >= 70 ? "C" : e >= 60 ? "D" : "F";
}
function Tu(e, t) {
  return {
    labId: e.id,
    labTitle: e.title,
    score: { raw: t.earned, max: t.total, scaled: t.total ? t.earned / t.total : 0 },
    percent: t.percent,
    grade: Jh(t.percent),
    completion: t.complete ? "completed" : "incomplete",
    success: t.complete ? "passed" : "unknown",
    objectives: t.objectives.map((n) => ({ id: n.id, title: n.title, pass: n.pass, points: n.points })),
    gradedAt: new Date(t.gradedAt).toISOString()
  };
}
const _a = "192.168.10.0", qs = "255.255.255.0", $t = "192.168.10.1", ef = {
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
    `Address the router's first interface as ${$t} / ${qs} and bring it up (CLI: interface, ip address, no shutdown).`,
    `Give the PC and the server addresses inside ${_a}/24 and set their default gateway to ${$t}.`,
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
      title: `Router gateway interface is ${$t}/24 and up`,
      points: 2,
      hint: `CLI: enable → configure terminal → interface Gi0/1 → ip address ${$t} ${qs} → no shutdown`,
      check: (e) => {
        const t = e.find("router");
        if (!t) return !1;
        const n = t.interfaces.find((r) => r.ip === $t);
        return !!(n && n.enabled && e.maskToPrefix(n.mask) === 24);
      }
    },
    {
      id: "hosts-addressed",
      section: "Addressing",
      title: `PC and server addressed inside ${_a}/24 with the correct gateway`,
      points: 2,
      hint: `Each host needs an address in ${_a}/24 and default gateway ${$t}.`,
      check: (e) => {
        const t = (n) => {
          if (!n) return !1;
          const r = e.ipOf(n);
          return !!r && e.sameSubnet(r, $t, qs) && n.gateway === $t;
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
      [`ip address ${$t} ${qs}`, "address the interface"],
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
}, U0 = "LAB-WIFI", B0 = ["123456", "password", "admin", "letmein", "qwerty", "welcome", "root", "toor", "changeme", "admin123"], W0 = {
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
    `Place a Wireless AP and a Laptop inside its cell, plus a Threat Actor node in range. The starter topology already has all three on SSID "${U0}".`,
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
        return n.length >= 12 && !B0.includes(n.toLowerCase());
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
}, Ro = [ef, W0], V0 = ef.id;
function sr(e) {
  return Ro.find((t) => t.id === e) || Ro[0];
}
function aa(e, t) {
  var o, a;
  const n = [];
  let r = e;
  const s = /* @__PURE__ */ new Set([e == null ? void 0 : e.id]);
  for (; (a = (o = r == null ? void 0 : r.cli) == null ? void 0 : o.sessions) != null && a.length && t; ) {
    const l = r.cli.sessions[r.cli.sessions.length - 1], c = t.devices.find((u) => u.id === l.targetId);
    if (!c || s.has(c.id)) break;
    s.add(c.id), n.push({ host: r, session: l, device: c }), r = c;
  }
  return { device: r, chain: n };
}
function En(e, t, n, r) {
  return e.cli.sessions || (e.cli.sessions = []), e.cli.sessions.push({ targetId: t.id, protocol: n, user: r, openedAt: Date.now() }), t.runtime.sessions += 1, t.os === "ios" && (t.cli.mode = "user"), { ok: !0 };
}
function q0(e, t) {
  const { chain: n } = aa(e, t);
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
function G0(e, t, n) {
  var o, a;
  const r = e.cli.pending, s = t.trim();
  if (r.used += 1, s === r.expected) {
    e.cli.pending = null, (o = r.onSuccess) == null || o.call(r, n), n.commit();
    return;
  }
  if (r.used >= r.tries) {
    e.cli.pending = null, n.log("% Bad passwords", "error"), (a = r.onFail) == null || a.call(r, n), n.commit();
    return;
  }
  n.log("% Bad secrets", "error"), n.commit();
}
const K0 = {
  user: ">",
  priv: "#",
  config: "(config)#",
  "config-if": "(config-if)#",
  "config-vlan": "(config-vlan)#",
  "config-line": "(config-line)#"
};
function Z0(e) {
  return `${e.hostname}${K0[e.cli.mode] || "#"} `;
}
const Fa = { user: 0, priv: 1, config: 2, "config-if": 3, "config-vlan": 3, "config-line": 3 };
function me(e, t) {
  const n = e.toLowerCase(), r = t.find((o) => o === n);
  if (r) return r;
  const s = t.filter((o) => o.startsWith(n));
  return s.length === 1 ? s[0] : null;
}
function tf(e, t, n, r = {}) {
  const { log: s } = n, o = t.trim();
  if (!o) return;
  if (o === "?") return rx(e, s);
  const a = o.split(/\s+/), l = [
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
  ], u = !r.exec && Fa[e.cli.mode] >= 2, d = me(a[0], u ? c : l);
  if (!d) {
    s("% Invalid input detected at '^' marker.", "error");
    return;
  }
  const p = e.cli.mode, h = (f, g) => {
    if (Fa[p] < Fa[f]) {
      s(`% Command authorised at ${f} level — currently ${p}.`, "error");
      return;
    }
    g();
  };
  switch (d) {
    case "enable": {
      const f = me(a[1] || "", ["secret", "password"]);
      if (p === "config" && f) {
        if (!a[2]) return s("% Incomplete command.", "error");
        e.enableSecret = a[2], s(`  enable ${f} set`, "success"), n.commit();
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
        onFail: (j) => j.log("% Access denied", "error")
      }), n.commit();
      return;
    }
    case "disable":
      e.cli.mode = "user";
      return;
    case "configure":
      return h("priv", () => {
        if (me(a[1] || "terminal", ["terminal", "memory"]) !== "terminal") return s('% Only "configure terminal" is supported.', "error");
        e.cli.mode = "config", s("Enter configuration commands, one per line. End with CNTL/Z.", "dim");
      });
    case "interface":
      return h("config", () => {
        const f = a.slice(1).join("");
        if (!f) return s("% Incomplete command.", "error");
        const g = qh(e, f);
        if (!g)
          return s(`% Invalid interface ${f}. Available: ${e.interfaces.map((j) => j.name).join(", ")}`, "error");
        e.cli.ifaceCursor = g.name, e.cli.mode = "config-if";
      });
    case "ip":
      return Y0(e, a, n);
    case "no":
      return Q0(e, a, n);
    case "shutdown":
      return h("config-if", () => {
        const f = an(e);
        f && (f.enabled = !1, s(`%LINK-5-CHANGED: Interface ${f.name}, changed state to administratively down`, "warn"), n.commit());
      });
    case "vlan":
      return h("config", () => {
        const f = Number(a[1]);
        if (!Number.isInteger(f) || f < 1 || f > 4094) return s("% Invalid VLAN id.", "error");
        e.vlans.some((g) => g.id === f) || e.vlans.push({ id: f, name: `VLAN${f}` }), e.cli.mode = "config-vlan", e.cli.vlanCursor = f, n.commit();
      });
    case "name":
      return h("config-vlan", () => {
        const f = e.vlans.find((g) => g.id === e.cli.vlanCursor);
        if (!f) return s("% No VLAN selected.", "error");
        f.name = a.slice(1).join(" ") || f.name, s(`  vlan ${f.id} named ${f.name}`, "success"), n.commit();
      });
    case "hostname":
      return h("config", () => {
        if (!a[1]) return s("% Incomplete command.", "error");
        e.hostname = a[1], n.commit();
      });
    case "username":
      return h("config", () => {
        const f = a[1], g = me(a[2] || "", ["secret", "password"]), j = a[3];
        if (!f || !g || !j) return s("% Usage: username NAME secret PASSWORD", "error");
        e.security.username = f, e.security.password = j, s(`  credentials updated for ${f}`, "success"), n.commit();
      });
    case "access-list":
      return h("config", () => X0(e, a, n));
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
      return tf(e, a.slice(1).join(" "), n, { exec: !0 });
    case "switchport":
      return h("config-if", () => J0(e, a, n));
    case "description":
      return h("config-if", () => {
        const f = an(e);
        f && (f.description = a.slice(1).join(" "), n.commit());
      });
    case "duplex":
    case "speed":
      return h("config-if", () => {
        const f = an(e);
        f && (f[d] = a[1], n.commit());
      });
    case "line":
      return h("config", () => ex(e, a, n));
    case "password":
      return h("config-line", () => {
        if (!a[1]) return s("% Incomplete command.", "error");
        e.lines[e.cli.lineCursor].password = a[1], s("  line password set", "success"), n.commit();
      });
    case "login":
      return h("config-line", () => {
        e.lines[e.cli.lineCursor].login = !0, e.lines[e.cli.lineCursor].password || s("% Login disabled on line — set a password first.", "warn"), n.commit();
      });
    case "transport":
      return h("config-line", () => {
        if (me(a[1] || "", ["input", "output"]) !== "input") return s("% Usage: transport input {telnet|ssh|all|none}", "error");
        const g = (a[2] || "").toLowerCase(), j = { telnet: ["telnet"], ssh: ["ssh"], all: ["telnet", "ssh"], none: [] };
        if (!(g in j)) return s("% Usage: transport input {telnet|ssh|all|none}", "error");
        if (e.lines.vty.transport = [...j[g]], a[3]) {
          const y = a[3].toLowerCase();
          j[y] && (e.lines.vty.transport = [.../* @__PURE__ */ new Set([...e.lines.vty.transport, ...j[y]])]);
        }
        s(`  vty transport input: ${e.lines.vty.transport.join(" ") || "none"}`, "success"), n.commit();
      });
    case "banner":
      return h("config", () => {
        const f = a.slice(2).join(" ").replace(/^[#^]|[#^]$/g, "").trim();
        e.banner = f || "Authorised access only.", s("  banner set", "success"), n.commit();
      });
    case "crypto":
      return h("config", () => {
        if (!(me(a[1] || "", ["key"]) === "key" && /gen/.test(a[2] || ""))) return s("% Usage: crypto key generate rsa", "error");
        if (!e.domainName)
          return s("% Please define a domain-name first (ip domain-name NAME).", "error");
        e.cryptoKey = !0, s("The name for the keys will be: " + e.hostname + "." + e.domainName, "dim"), s("% Generating 1024 bit RSA keys, keys will be non-exportable...[OK]", "success"), n.commit();
      });
    case "service":
      return h("config", () => {
        e.passwordEncryption = /password-encryption/.test(a.slice(1).join(" ")), s("  service password-encryption enabled", "success"), n.commit();
      });
    case "spanning-tree":
      return h("config", () => {
        e.spanningTree = a.slice(1).join(" ") || "mode pvst", s(`  spanning-tree ${e.spanningTree}`, "success"), n.commit();
      });
    case "traceroute":
      if (!a[1]) return s("% Usage: traceroute <ip|host>", "error");
      n.engine.traceroute(e, a[1], n.channel);
      return;
    case "telnet":
    case "ssh":
      return tx(e, a, d, n);
    case "show":
      return nx(e, a.slice(1), n);
    case "ping": {
      if (!a[1]) return s("% Usage: ping <ip|hostname>", "error");
      n.engine.ping(e, a[1], n.channel);
      return;
    }
    case "clear":
      me(a[1] || "", ["arp-cache", "counters"]) === "arp-cache" && (e.arp = {}, s("  ARP cache cleared", "success"), n.commit());
      return;
    case "reload":
      return h("priv", () => {
        s("Proceed with reload? [confirm]", "dim"), e.cli.mode = "user", e.arp = {}, n.commit();
      });
    default:
      s(`% Unknown command: ${o}`, "error");
  }
}
function an(e) {
  return qh(e, e.cli.ifaceCursor);
}
function Y0(e, t, n) {
  const { log: r } = n, s = me(t[1] || "", ["address", "route", "default-gateway", "access-group", "name-server", "domain-name", "ssh"]);
  if (s === "address") {
    if (e.cli.mode !== "config-if") return r("% Enter interface configuration mode first.", "error");
    const o = an(e), [, , a, l] = t;
    if (!$e(a) || !$e(l)) return r("% Invalid IP address or mask.", "error");
    if (Ve(l) === null) return r("% Mask is not contiguous.", "error");
    o.ip = a, o.mask = l, o.enabled = !0, r(`  ${o.name} ← ${a}/${Ve(l)}`, "success"), n.commit();
    return;
  }
  if (s === "route") {
    if (e.cli.mode !== "config") return r("% Enter global configuration mode first.", "error");
    const [, , o, a, l] = t;
    if (!$e(o) || !$e(a) || !$e(l))
      return r("% Usage: ip route NETWORK MASK NEXT-HOP", "error");
    e.routes.push({ network: o, mask: a, nextHop: l }), r("  static route installed", "success"), n.commit();
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
    const o = an(e);
    o.accessGroup = t[2], r(`  access-group ${t[2]} applied to ${o.name}`, "success"), n.commit();
    return;
  }
  r("% Incomplete command.", "error");
}
function Q0(e, t, n) {
  const { log: r } = n, s = me(t[1] || "", ["shutdown", "ip"]);
  if (s === "shutdown") {
    if (e.cli.mode !== "config-if") return r("% Enter interface configuration mode first.", "error");
    const o = an(e);
    o.enabled = !0, r(`%LINK-3-UPDOWN: Interface ${o.name}, changed state to up`, "success"), n.commit();
    return;
  }
  if (s === "ip" && me(t[2] || "", ["address"]) === "address") {
    const o = an(e);
    o && (o.ip = "", n.commit());
    return;
  }
  r("% Incomplete command.", "error");
}
function X0(e, t, n) {
  const { log: r } = n, s = t[1], o = me(t[2] || "", ["permit", "deny"]);
  if (!s || !o) return r("% Usage: access-list ID {permit|deny} ip SOURCE DEST", "error");
  const a = t.slice(4), l = (d) => d[0] === "any" ? { value: "any", consumed: 1 } : d[0] === "host" ? { value: d[1], consumed: 2 } : { value: d[0] || "any", consumed: 1 }, c = l(a), u = l(a.slice(c.consumed));
  e.acl.push({ id: s, action: o, source: c.value, dest: u.value, raw: t.join(" ") }), r(`  ACL ${s}: ${o} ${c.value} → ${u.value}`, "success"), n.commit();
}
function J0(e, t, n) {
  const { log: r } = n, s = an(e);
  if (!s) return r("% Select an interface first.", "error");
  const o = me(t[1] || "", ["mode", "access", "trunk", "nonegotiate", "port-security"]);
  if (o === "mode") {
    const a = me(t[2] || "", ["access", "trunk", "dynamic"]);
    if (!a) return r("% Usage: switchport mode {access|trunk}", "error");
    s.mode = a, r(`  ${s.name} is now a ${a} port`, "success"), n.commit();
    return;
  }
  if (o === "access") {
    if (me(t[2] || "", ["vlan"]) !== "vlan") return r("% Usage: switchport access vlan ID", "error");
    const a = Number(t[3]);
    if (!Number.isInteger(a) || a < 1 || a > 4094) return r("% Invalid VLAN id.", "error");
    e.vlans.some((l) => l.id === a) || (e.vlans.push({ id: a, name: `VLAN${String(a).padStart(4, "0")}` }), r(`% Access VLAN does not exist. Creating vlan ${a}`, "warn")), s.vlan = a, s.mode = s.mode === "trunk" ? "trunk" : "access", r(`  ${s.name} → VLAN ${a}`, "success"), n.commit();
    return;
  }
  if (o === "trunk") {
    const a = me(t[2] || "", ["allowed", "native", "encapsulation"]);
    if (a === "allowed" && me(t[3] || "", ["vlan"]) === "vlan")
      s.allowedVlans = t[4] || "all", r(`  ${s.name} allowed VLANs: ${s.allowedVlans}`, "success");
    else if (a === "native" && me(t[3] || "", ["vlan"]) === "vlan")
      s.nativeVlan = Number(t[4]) || 1, r(`  ${s.name} native VLAN ${s.nativeVlan}`, "success");
    else if (a === "encapsulation")
      s.encapsulation = t[3] || "dot1q", r(`  ${s.name} encapsulation ${s.encapsulation}`, "success");
    else
      return r("% Usage: switchport trunk {allowed vlan LIST|native vlan ID|encapsulation dot1q}", "error");
    n.commit();
    return;
  }
  r("% Usage: switchport {mode|access|trunk} ...", "error");
}
function ex(e, t, n) {
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
function tx(e, t, n, r) {
  var h;
  const { log: s, engine: o, topology: a } = r, l = t[1];
  if (!l) return s(`% Usage: ${n} ${n === "ssh" ? "-l USER HOST" : "HOST"}`, "error");
  let c = l, u = null;
  n === "ssh" && l === "-l" && (u = t[2], c = t[3]);
  const d = Qe(a, c);
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
          En(e, d, n, u || "student"), d.banner && g.log(d.banner, "warn"), g.log(`[Connected to ${d.hostname}]`, "success");
        },
        onFail: (g) => g.log(`[Connection to ${c} closed by remote host]`, "error")
      }), r.commit();
      return;
    }
  }
  En(e, d, n, u || "student"), d.banner && s(d.banner, "warn"), s(`[Connected to ${d.hostname}] — type exit to return.`, "success"), r.commit();
}
function Au(e, t, n) {
  const r = hr(e, t, n);
  return r === "admin-down" ? { status: "administratively down", protocol: "down" } : r === "up" ? { status: "up", protocol: "up" } : { status: "down", protocol: "down" };
}
function nx(e, t, n) {
  var a, l, c;
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
      const h = (a = p.port) == null ? void 0 : a.mac;
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
      ), u && r(`  IP address: ${O(h.device) || "not set"}`, "dim");
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
      const { status: d, protocol: p } = Au(e, u, s);
      r(`${u.name} is ${d}, line protocol is ${p}`), u.ip && r(`  Internet address is ${u.ip}/${Ve(u.mask)}`, "dim");
    }
    return;
  }
  if (o === "ip") {
    const u = me(t[1] || "", ["interface", "route"]);
    if (u === "interface") {
      r("Interface              IP-Address      OK? Method Status                Protocol", "dim");
      for (const d of e.interfaces) {
        const { status: p, protocol: h } = Au(e, d, s);
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
        d.ip && r(`C    ${d.ip}/${Ve(d.mask)} is directly connected, ${d.name}`);
      for (const d of e.routes)
        r(`S    ${d.network}/${Ve(d.mask)} [1/0] via ${d.nextHop}`);
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
      r(`${d.name} is ${d.enabled ? "up" : "administratively down"}, line protocol is ${d.enabled ? "up" : "down"}`), r(`  Hardware is Ethernet, address is ${d.mac}`, "dim"), r(`  Internet address is ${d.ip ? `${d.ip}/${Ve(d.mask)}` : "not set"}`, "dim");
    return;
  }
  r("% Unsupported show option.", "error");
}
function rx(e, t) {
  const n = e.role === "switch" || e.role === "l3switch";
  t('Abbreviations work: "conf t", "int gi0/1", "sh ip int br".', "dim"), t(""), t("EXEC      enable · disable · ping HOST · traceroute HOST · write memory", "dim"), t("          telnet HOST · ssh -l USER HOST · reload · clear arp-cache", "dim"), t("CONFIG    configure terminal · hostname NAME · enable secret PASS", "dim"), t("          ip domain-name NAME · crypto key generate rsa · banner motd ^TEXT^", "dim"), t("          username NAME secret PASS · service password-encryption", "dim"), t("LINES     line console 0 | line vty 0 4 → password PASS · login", "dim"), t("          transport input {telnet|ssh|all|none}", "dim"), t("INTERFACE interface NAME · ip address IP MASK · no shutdown · description TEXT", "dim"), n ? (t("SWITCH    vlan ID · switchport mode {access|trunk}", "dim"), t("          switchport access vlan ID · switchport trunk allowed vlan LIST", "dim")) : t("ROUTING   ip route NET MASK NEXTHOP · access-list ID deny ip SRC DST", "dim"), t("SHOW      ip interface brief · ip route · running-config · startup-config", "dim"), t("          vlan brief · interfaces status · interfaces trunk · mac address-table", "dim"), t("          cdp neighbors [detail] · arp · users · ssh · version · protocols", "dim");
}
const sx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  execute: tf,
  prompt: Z0
}, Symbol.toStringTag, { value: "Module" })), Do = [
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
], Fi = {
  critical: { id: "critical", label: "Critical", rank: 4, tone: "down", min: 9 },
  high: { id: "high", label: "High", rank: 3, tone: "down", min: 7 },
  medium: { id: "medium", label: "Medium", rank: 2, tone: "warn", min: 4 },
  low: { id: "low", label: "Low", rank: 1, tone: "neutral", min: 0.1 }
}, ox = ["critical", "high", "medium", "low"], ax = [
  /* ---------------------------------------------- credentials & accounts */
  {
    id: "NRL-2026-0001",
    title: "Default or trivially guessable service credentials",
    cwe: "CWE-1392",
    severity: "critical",
    cvss: 9.8,
    vector: "AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
    applies: (e) => Nn(e).length > 0,
    test: (e) => Do.includes(e.security.password) ? `account "${e.security.username}" uses a password present in a public default-credential list` : null,
    fix: "Set a unique passphrase of at least 12 characters and enforce a password policy."
  },
  {
    id: "NRL-2026-0002",
    title: "No authentication attempt limit",
    cwe: "CWE-307",
    severity: "medium",
    cvss: 5.3,
    vector: "AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
    applies: (e) => Nn(e).some((t) => ["ssh", "ftp", "telnet", "rdp"].includes(t)),
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
        (s) => s.id !== e.id && s.role === "attacker" && V(t, s.id, e.id)
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
        (s) => s.id !== e.id && (s.typeId === "pc" || s.typeId === "laptop") && V(t, s.id, e.id)
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
    applies: (e) => Nn(e).length > 0,
    test: (e) => {
      if (e.security.patched) return null;
      const t = Nn(e).map((n) => Rt[n]).filter((n) => n && n.old !== n.current);
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
      const t = le[e.ap.security];
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
function ix(e, t) {
  const n = [];
  for (const r of ax) {
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
      address: O(e) || "—"
    });
  }
  return n.sort(
    (r, s) => Fi[s.severity].rank - Fi[r.severity].rank || s.cvss - r.cvss
  );
}
function lx(e) {
  const t = { critical: 0, high: 0, medium: 0, low: 0 };
  for (const s of e) t[s.severity] += 1;
  const n = { critical: 14, high: 8, medium: 4, low: 1 }, r = e.reduce((s, o) => s + n[o.severity], 0);
  return { counts: t, total: e.length, risk: Math.max(0, 100 - r) };
}
function cx(e) {
  return Nn(e).map((t) => ({ name: t, ...Rt[t] })).filter((t) => t.port).sort((t, n) => t.port - n.port);
}
function ux(e, t) {
  const n = Rt[t];
  if (!n) return "";
  const r = e.security.patched ? n.current : n.old;
  return `${n.product} ${r}`;
}
const re = "attack";
function dx({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (p, h) => e.log(re, p, h), o = n.services.ssh ? "ssh" : n.services.ftp ? "ftp" : null, a = O(n) || n.hostname;
  if (s(`
[brute-force] ${t.hostname} → ${n.hostname} (${a})`, "warn"), !o) {
    s("[brute-force] no SSH or FTP service is listening — nothing to test.", "error");
    return;
  }
  s(`[brute-force] service ${o}, wordlist = demo-10, user = ${n.security.username}`, "dim"), n.security.maxAuthTries > 0 && s(`[brute-force] target advertises a ${n.security.maxAuthTries}-attempt limit`, "dim");
  const l = Do.includes(n.security.password), c = [...Do];
  l && !c.includes(n.security.password) && c.push(n.security.password);
  const u = V(e.getTopology(), t.id, n.id);
  let d = !1;
  c.forEach((p, h) => {
    e.schedule(h * 280, () => {
      if (d) return;
      if (Gh(n, e.clock)) {
        s(`[brute-force] attempt ${h + 1} refused — account locked out. Attack defeated.`, "success"), n.runtime.underAttack = null, d = !0, r();
        return;
      }
      if (u && e.emit(u, "attack", { label: "auth" }), n.runtime.packetsIn += 1, n.runtime.underAttack = "brute-force", p === n.security.password) {
        d = !0, n.runtime.compromised = !0, s(`[brute-force] attempt ${h + 1}: ${n.security.username}:${p} → ACCEPTED`, "error"), s(`[brute-force] CREDENTIALS RECOVERED. Shell on ${n.hostname}.`, "error"), e.note(re, "Mitigate with a password outside the wordlist, plus an attempt limit."), n.runtime.underAttack = null, r();
        return;
      }
      const f = Oi(n, e.clock);
      s(
        `[brute-force] attempt ${h + 1}: ${n.security.username}:${p} → denied` + (n.security.maxAuthTries ? ` (${f.failures}/${n.security.maxAuthTries})` : ""),
        "dim"
      ), r();
    });
  }), e.schedule(c.length * 280 + 200, () => {
    d || (s("[brute-force] wordlist exhausted — the password held. Good hardening.", "success"), n.runtime.underAttack = null, r());
  });
}
function px({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (u, d) => e.log(re, u, d), o = O(n) || n.hostname, a = n.services.http ? 80 : n.services.ssh ? 22 : 0;
  if (s(`
[syn-flood] ${t.hostname} → ${o}:${a}`, "warn"), !a) {
    s("[syn-flood] target exposes no TCP service — no queue to fill.", "error");
    return;
  }
  n.security.synCookies && s("[syn-flood] target has SYN cookies enabled; half-open queue cannot be exhausted.", "dim");
  const l = V(e.getTopology(), t.id, n.id);
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
    n.runtime.unresponsive ? (s("[syn-flood] Outcome: denial of service achieved.", "error"), e.note(re, "Mitigate with SYN cookies, or an ACL dropping the source.")) : s(`[syn-flood] Outcome: absorbed — peak cpu ${n.runtime.cpu.toFixed(0)}%, service stayed up.`, "success"), n.runtime.underAttack = null, r(), e.schedule(4e3, () => {
      tc(n), r();
    });
  });
}
function hx({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (f, g) => e.log(re, f, g), o = e.getTopology(), a = b0(o, t.id), l = n.role === "host" || n.role === "iot" ? n : o.devices.find((f) => f.id !== t.id && a.has(f.id) && (f.role === "host" || f.role === "iot")), c = o.devices.find(
    (f) => (f.role === "router" || f.role === "l3switch") && V(o, t.id, f.id)
  );
  if (s(`
[arp-spoof] ${t.hostname} poisoning the local segment`, "warn"), !l || !c) {
    s("[arp-spoof] needs a victim host and a router on the same segment.", "error");
    return;
  }
  const u = O(c), d = O(l);
  if (!u || !d) {
    s("[arp-spoof] victim and gateway both need addresses first.", "error");
    return;
  }
  if (c.security.dynamicArpInspection || l.security.dynamicArpInspection) {
    s("[arp-spoof] Dynamic ARP Inspection is on — gratuitous replies are dropped.", "dim"), s("[arp-spoof] Outcome: poisoning refused. Segment integrity held.", "success");
    return;
  }
  const p = Ct(t.id + ":0");
  [
    [`[arp-spoof] → ${l.hostname}:  "${u} is-at ${p}"`, "dim"],
    [`[arp-spoof] → ${c.hostname}: "${d} is-at ${p}"`, "dim"]
  ].forEach(([f, g], j) => e.schedule(j * 420, () => s(f, g))), e.schedule(900, () => {
    l.arp[u] = { mac: p, spoofed: !0, byDeviceId: t.id, age: 0 }, c.arp[d] = { mac: p, spoofed: !0, byDeviceId: t.id, age: 0 }, l.runtime.underAttack = "mitm", s(`[arp-spoof] ✓ caches poisoned — ${l.hostname} ⇄ ${c.hostname} now transits ${t.hostname}`, "error"), s('[arp-spoof] Inspect with "show arp" (IOS) or "ip neigh" (Linux): duplicate MAC.', "dim"), r();
  }), e.schedule(1500, () => {
    const f = e.adjudicate(l, u);
    f.path && e.emit(f.path, "attack", { label: "intercepted" }), f.viaSpoof && (s(`[arp-spoof] captured from ${l.hostname}: GET /login  user=student  pass=••••••`, "error"), e.note(re, "Mitigate with Dynamic ARP Inspection, or static ARP entries.")), r();
  });
}
function fx({ engine: e, attacker: t, target: n, commit: r, payload: s }) {
  const o = (c, u) => e.log(re, c, u), a = O(n) || n.hostname;
  if (o(`
[sqli] ${t.hostname} → http://${a}/search`, "warn"), !n.services.http || !n.database) {
    o("[sqli] target is not running the simulated web application.", "error");
    return;
  }
  o(`[sqli] input: ${s}`, "dim");
  const l = V(e.getTopology(), t.id, n.id);
  l && e.emit(l, "attack", { label: "POST" }), e.schedule(600, () => {
    const c = Hh(n, s);
    o(`[sqli] HTTP ${c.status}`, c.vulnerable ? "error" : "success"), c.signatures.length && o(`[sqli] signatures matched: ${c.signatures.join("; ")}`, "dim");
    for (const u of c.lines) o(`[sqli] ${u}`, c.vulnerable ? "warn" : "dim");
    c.flag && (n.runtime.compromised = !0, o(`[sqli] EXFILTRATED → ${c.flag}`, "error"), e.note(re, "Mitigate with parameterised queries (Services → Input sanitisation).")), c.blocked && o("[sqli] Outcome: injection blocked by parameter binding. Defence works.", "success"), r();
  });
}
function mx({ engine: e, attacker: t, commit: n }) {
  const r = (d, p) => e.log(re, d, p), s = e.getTopology();
  if (r(`
[wifi] ${t.hostname}: putting wlan0 into monitor mode`, "warn"), !t.radio) {
    r("[wifi] this device has no radio.", "error");
    return;
  }
  t.radio.monitorMode = !0, t.capturing = !0, n();
  const o = Er(s).filter((d) => d.id !== t.id).map((d) => ({ ap: d, dbm: ec(t, d) })).filter(({ dbm: d }) => d !== null).sort((d, p) => p.dbm - d.dbm);
  if (!o.length) {
    r("[wifi] no access points within range. Move the node closer to an AP.", "error");
    return;
  }
  r("[wifi] airodump — BSSIDs in range:", "dim"), r("       BSSID              PWR  CH  ENC    ESSID", "dim");
  for (const { ap: d, dbm: p } of o) {
    const h = le[d.ap.security] ? d.ap.security.toUpperCase() : "OPEN";
    r(
      `       ${Ct(`${d.id}:0`)}  ${String(p).padStart(4)}  ${String(d.ap.channel).padStart(2)}  ${h.padEnd(6)} ${d.ap.ssid}`,
      h === "OPEN" ? "error" : "info"
    );
  }
  const l = [...mn(s).entries()].map(([d, p]) => ({ client: s.devices.find((h) => h.id === d), a: p })).filter(({ client: d }) => d && d.id !== t.id).filter(({ client: d }) => vs(t, d) <= (t.radio.range || Hn));
  r(`[wifi] ${l.length} associated station(s) in range`, "dim");
  for (const { client: d, a: p } of l)
    r(`       ${Ct(`${d.id}:0`)}  ${d.hostname} → ${p.ssid} (${p.dbm} dBm, ${Uh(p.dbm)}/4)`, "dim");
  if (!l.length) {
    r("[wifi] capturing, but no stations are talking. Generate traffic from a client.", "warn");
    return;
  }
  const c = s.devices.filter((d) => d.services.http || d.services.dns || d.services.mqtt);
  let u = 0;
  for (const { client: d, a: p } of l) {
    const h = c.find((g) => V(s, d.id, g.id));
    if (!h) continue;
    const f = V(s, d.id, h.id);
    !le[p.security] || le[p.security].encrypted, e.schedule(u++ * 420, () => {
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
      const j = (g.layers.payload.text || "").match(/username=([^&\s]+)&password=([^&\s]+)/);
      j && f.set(`${j[1]}:${j[2]}`, { user: j[1], pass: j[2], from: g.sourceName });
    }
    if (f.size) {
      r(`[wifi] CLEARTEXT CREDENTIALS RECOVERED FROM THE AIR (${f.size})`, "error");
      for (const { user: g, pass: j, from: y } of f.values())
        r(`[wifi]   ${y}: username=${g}  password=${j}`, "error");
      e.note(re, "Mitigate with WPA2/WPA3 on the SSID, and HTTPS on the application.");
    } else h.length && (r("[wifi] every payload is CCMP-protected — the capture is unreadable.", "success"), r("[wifi] Headers (MAC addresses, timing, volume) still leak. That is traffic analysis.", "dim"));
    r("[wifi] Open the Packet Capture tab to inspect frames layer by layer.", "dim"), n();
  });
}
function gx({ engine: e, attacker: t, target: n, commit: r }) {
  var p;
  const s = (h, f) => e.log(re, h, f), o = e.getTopology(), a = mn(o);
  let l = n;
  if (n.ap) {
    const h = (p = [...a.entries()].find(([, f]) => f.apId === n.id)) == null ? void 0 : p[0];
    l = o.devices.find((f) => f.id === h);
  }
  if (!l || !a.has(l.id)) {
    s(`
[deauth] target is not an associated wireless station.`, "error");
    return;
  }
  const c = a.get(l.id), u = o.devices.find((h) => h.id === c.apId);
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
      }), s(`[deauth] frame ${h + 1}/${d} → ${Ct(`${l.id}:0`)} (spoofing ${Ct(`${u.id}:0`)})`, "dim");
    });
  e.schedule(d * 260 + 200, () => {
    u.ap.deauthed = u.ap.deauthed || {}, u.ap.deauthed[l.id] = e.clock + 12e3, l.runtime.underAttack = "deauth", s(`[deauth] ${l.hostname} DISASSOCIATED — it drops off the topology for 12s.`, "error"), e.note(re, "Mitigate with 802.11w Protected Management Frames on the AP."), r();
  }), e.schedule(d * 260 + 12500, () => {
    l.runtime.underAttack = null, s(`[deauth] ban lapsed — ${l.hostname} may re-associate.`, "dim"), r();
  });
}
function xx({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (l, c) => e.log(re, l, c), o = e.getTopology(), a = n && n.ap ? n : Er(o).find((l) => l.id !== t.id);
  if (!a) {
    s(`
[evil-twin] no legitimate AP to clone. Place a Wireless AP first.`, "error");
    return;
  }
  s(`
[evil-twin] cloning "${a.ap.ssid}" from ${a.hostname}`, "warn"), s(`[evil-twin] legitimate BSSID ${Ct(`${a.id}:0`)} (${a.ap.security.toUpperCase()})`, "dim"), t.ap = {
    enabled: !0,
    ssid: a.ap.ssid,
    security: "open",
    passphrase: "",
    channel: a.ap.channel,
    range: Hn,
    deauthed: {},
    rogue: !0
  }, t.capturing = !0, t.radio && (t.radio.monitorMode = !0), r(), s(`[evil-twin] rogue BSSID ${Ct(`${t.id}:0`)} broadcasting "${a.ap.ssid}" — OPEN`, "error"), e.schedule(400, () => {
    e.recordAir(t, t, "beacon", {
      ssid: a.ap.ssid,
      security: "Open",
      channel: a.ap.channel,
      plaintext: !0
    });
  }), e.schedule(900, () => {
    const c = [...mn(e.getTopology()).entries()].filter(([, u]) => u.apId === t.id);
    if (!c.length) {
      s("[evil-twin] no station switched over.", "success"), s("[evil-twin] Clients that pin an SSID to a known BSSID, or require WPA2, resist this.", "dim"), s("[evil-twin] Tip: deauth a station first — it will re-join the strongest beacon.", "dim"), r();
      return;
    }
    for (const [u] of c) {
      const d = e.getTopology().devices.find((f) => f.id === u);
      if (!d) continue;
      s(`[evil-twin] ${d.hostname} ASSOCIATED TO THE ROGUE AP — traffic now transits ${t.hostname}`, "error"), d.runtime.underAttack = "evil-twin";
      const h = e.getTopology().devices.filter((f) => f.services.http).find((f) => V(e.getTopology(), d.id, f.id));
      if (h) {
        const f = V(e.getTopology(), d.id, h.id);
        e.emit(f, "http", {
          request: "POST /login HTTP/1.1",
          body: `POST /login HTTP/1.1\r
Host: ${h.hostname.toLowerCase()}\r
\r
username=${d.security.username}&password=${d.security.password}`
        });
      }
    }
    e.note(re, "Mitigate with WPA2/WPA3-only client profiles and 802.11w."), r();
  });
}
function yx({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (g, j) => e.log(re, g, j), o = (g) => e.note(re, g), a = e.getTopology(), l = O(n) || n.hostname, c = V(a, t.id, n.id), u = vx();
  if (s(`nmap -sV -T4 ${l}`, "warn"), s(`Starting Nmap 7.95 ( https://nmap.org ) at ${u}`, "dim"), !c) {
    e.schedule(400, () => {
      s(`Nmap scan report for ${l}`, "info"), s("Host seems down. If it is really up, but blocking our ping probes, try -Pn", "dim"), s("Nmap done: 1 IP address (0 hosts up) scanned in 2.07 seconds", "dim"), o("No layer-3 path exists. Check cabling and addressing before blaming a firewall.");
    });
    return;
  }
  const d = cx(n).filter((g) => x0(n, g.name)), p = (8e-4 + c.length * 4e-4).toFixed(4), h = 1e3, f = ["ssh", "ftp", "telnet", "dns", "http", "https", "smb", "rdp", "mysql", "mqtt", "rtsp", "snmp"];
  f.forEach((g, j) => {
    e.schedule(j * 90, () => {
      const y = Rt[g];
      y && e.emit(c, "tcp", {
        sport: 44e3 + j,
        dport: y.port,
        flags: d.some((m) => m.name === g) ? "SYN, ACK" : "RST, ACK"
      });
    });
  }), e.schedule(f.length * 90 + 250, () => {
    var j;
    if (s(`Nmap scan report for ${n.hostname} (${l})`, "info"), s(`Host is up (${p}s latency).`, "info"), !d.length)
      s(`All ${h} scanned ports on ${l} are in ignored states.`, "info"), s(`Not shown: ${h} closed tcp ports (reset)`, "dim");
    else {
      s(`Not shown: ${h - d.length} closed tcp ports (reset)`, "dim"), s("PORT      STATE SERVICE     VERSION", "dim");
      for (const y of d) {
        const m = `${y.port}/${y.proto}`;
        s(
          `${m.padEnd(10)}${"open".padEnd(6)}${y.name.padEnd(12)}${ux(n, y.name)}`,
          "error"
        );
      }
    }
    const g = (j = n.interfaces.find((y) => y.ip)) == null ? void 0 : j.mac;
    g && s(`MAC Address: ${g.toUpperCase()} (Unknown)`, "dim"), s("Service detection performed. Please report any incorrect results.", "dim"), s(`Nmap done: 1 IP address (1 host up) scanned in ${(2 + d.length * 0.4).toFixed(2)} seconds`, "dim"), o(`${d.length} service(s) answered. Every open port is something to justify keeping.`), !n.security.patched && d.length && o("Those version strings are the next lead — compare them against current releases."), n.runtime.lastExercise = "port-scan", n.runtime.scannedBy = t.id, r();
  });
}
function vx() {
  const e = /* @__PURE__ */ new Date(), t = (n) => String(n).padStart(2, "0");
  return `${e.getFullYear()}-${t(e.getMonth() + 1)}-${t(e.getDate())} ${t(e.getHours())}:${t(e.getMinutes())} ${Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"}`;
}
function wx({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (p, h) => e.log(re, p, h), o = (p) => e.note(re, p), a = e.getTopology(), l = !n || n.id === t.id, c = l ? a.devices.filter((p) => p.role !== "attacker" && V(a, t.id, p.id)) : [n];
  if (s("netrange-va --profile full " + (l ? "--subnet local" : O(n) || n.hostname), "warn"), s("NetRange VA 1.0 — configuration audit (offline, no packets sent)", "dim"), !c.length) {
    s("0 hosts responded to discovery. Nothing to audit.", "error");
    return;
  }
  let u = 300;
  const d = [];
  for (const p of c) {
    const h = ix(p, a);
    d.push(...h);
    const f = O(p) || "—";
    e.schedule(u, () => {
      if (s("", "dim"), s(`── ${p.hostname} (${f}) ${"─".repeat(Math.max(0, 46 - p.hostname.length - f.length))}`, "info"), !h.length) {
        s("  No findings at this profile.", "success");
        return;
      }
      for (const g of h) {
        const j = Fi[g.severity];
        s(`  [${j.label.toUpperCase()}] ${g.id}  ${g.title}`, j.rank >= 3 ? "error" : "warn"), s(`      CVSS ${g.cvss.toFixed(1)} (${g.vector})  ${g.cwe}`, "dim"), s(`      Evidence:    ${g.evidence}`, "dim"), s(`      Remediation: ${g.fix}`, "dim");
      }
    }), u += 260;
  }
  e.schedule(u + 200, () => {
    const p = lx(d);
    s("", "dim"), s(`Scanned ${c.length} host(s). ${p.total} finding(s).`, "warn"), s(
      ox.map((h) => `${p.counts[h]} ${h}`).join("   "),
      p.counts.critical ? "error" : "warn"
    ), s(`Risk score ${p.risk}/100`, p.risk < 50 ? "error" : p.risk < 80 ? "warn" : "success"), o("Work top-down by severity, fix, then re-run and watch the score move.");
    for (const h of c) h.runtime.lastExercise = h.runtime.lastExercise || "vuln-scan";
    r();
  });
}
function bx({ engine: e, attacker: t, target: n, commit: r, payload: s }) {
  const o = (p, h) => e.log(re, p, h), a = e.getTopology(), l = s || "IT Helpdesk: your mailbox is full, sign in to release held messages";
  if (o(`
[phish] staging a credential-harvest portal on ${t.hostname}`, "warn"), o(`[phish] pretext: "${l}"`, "dim"), o("[phish] the page is a lab-branded clone — it imitates no real organisation.", "dim"), !n || n.role === "attacker") {
    o("[phish] pick a host to send the lure to.", "error");
    return;
  }
  const c = V(a, t.id, n.id);
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
    }), o(`[phish] HARVESTED → ${p.user} / ${p.pass}`, "error"), d ? (o("[phish] replaying the credentials… rejected: a second factor is required.", "success"), o("[phish] Outcome: credentials stolen but unusable. MFA broke the chain.", "warn")) : (n.runtime.compromised = !0, o("[phish] credentials replayed successfully — account takeover.", "error"), e.note(re, "Mitigate with awareness training, and MFA so a stolen password is not enough.")), r();
  });
}
function kx({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (d, p) => e.log(re, d, p), o = e.getTopology(), a = O(n) || n.hostname, l = o.devices.filter(
    (d) => d.id !== n.id && d.id !== t.id && (d.role === "iot" || d.role === "host") && O(d) && V(o, d.id, n.id)
  );
  if (s(`
[ddos] recruiting bots reachable from ${t.hostname}`, "warn"), !l.length) {
    s("[ddos] no recruitable hosts — a distributed flood needs more than one source.", "error"), s("[ddos] Add IoT devices or workstations, then try again.", "dim");
    return;
  }
  for (const d of l)
    s(`[ddos]   + ${d.hostname} (${O(d)})${d.security.password === "admin" ? " — default credentials" : ""}`, "dim");
  s(`[ddos] botnet of ${l.length} — flooding ${a}`, "error"), n.runtime.underAttack = "ddos";
  const c = 8, u = 2400;
  for (let d = 0; d < c; d++)
    e.schedule(d * 320, () => {
      const p = l.filter((g) => e.aclVerdict(
        V(o, g.id, n.id) || [],
        O(g),
        a
      )), h = l.length - p.length, f = n.security.synCookies ? 2 + h * 0.6 : 4 + h * 2.4;
      n.runtime.cpu = Math.min(100, n.runtime.cpu + f), n.runtime.packetsIn += h * u / 100;
      for (const g of l.slice(0, 4)) {
        const j = V(o, g.id, n.id);
        j && e.emit(j, "attack", { label: "flood" });
      }
      s(
        `[ddos] ${h}/${l.length} sources active   ${(h * u).toLocaleString()} pkt/s   cpu=${n.runtime.cpu.toFixed(0)}%`,
        n.runtime.cpu > 90 ? "error" : "warn"
      ), n.runtime.cpu >= 97 && !n.runtime.unresponsive && (n.runtime.unresponsive = !0, s(`[ddos] ${n.hostname} is down — saturated from ${h} sources.`, "error")), r();
    });
  e.schedule(c * 320 + 300, () => {
    n.runtime.unresponsive ? (s("[ddos] Outcome: service unavailable.", "error"), s("[ddos] Blocking one source does nothing — that is what separates DDoS from DoS.", "dim"), s("[ddos] Mitigate upstream: rate limiting, anycast scrubbing, and fixing the bots' default passwords.", "dim")) : s(`[ddos] Outcome: absorbed — peak cpu ${n.runtime.cpu.toFixed(0)}%.`, "success"), n.runtime.underAttack = null, r(), e.schedule(4e3, () => {
      tc(n), r();
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
    run: bx
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
    run: kx
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
    run: dx
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
    run: px
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
    run: hx
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
    run: fx
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
    run: yx
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
    run: wx
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
    run: mx
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
    run: gx
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
    run: xx
  }
}, Sx = [
  "Reconnaissance",
  "Initial Access",
  "Credential Access",
  "Execution",
  "Collection",
  "Impact"
], jx = ["Reconnaissance", "Wireless", "Network", "Credential", "Application"];
function or(e, t) {
  const n = fr[e];
  if (!n) throw new Error(`Unknown exercise: ${e}`);
  if (!t.attacker) {
    t.engine.log(re, "Select the node the exercise runs from.", "error");
    return;
  }
  if (n.requiresRadio && !t.attacker.radio) {
    t.engine.log(re, `${t.attacker.hostname} has no radio — use a Threat Actor or a wireless host.`, "error");
    return;
  }
  const r = n.category === "Wireless";
  if (n.needsTarget !== !1 && !r) {
    if (!t.target) {
      t.engine.log(re, "Select a target node.", "error");
      return;
    }
    if (t.attacker.id === t.target.id) {
      t.engine.log(re, "Attacker and target must be different nodes.", "error");
      return;
    }
    if (!V(t.engine.getTopology(), t.attacker.id, t.target.id)) {
      t.engine.log(re, "No path between attacker and target — connect them first.", "error");
      return;
    }
  }
  const s = t.payload ?? n.defaultPayload ?? "";
  t.target && (t.target.runtime.lastExercise = e), t.attacker.runtime.lastLaunched = e, n.run({ ...t, payload: s });
}
const Nx = (e) => Ct(`${e.id}:0`);
function Cx(e) {
  const t = e.role === "attacker", n = e.cli.sshUser || (t ? "root" : e.security.username), r = e.cli.sshHost || (t ? "kali" : e.hostname.toLowerCase());
  return `${n}@${r}:~${t && !e.cli.sshHost ? "#" : "$"} `;
}
function $x(e, t, n) {
  const { log: r, engine: s, topology: o } = n, a = t.trim();
  if (!a) return;
  const l = a.split(/\s+/), c = l[0].toLowerCase();
  switch (c) {
    case "help":
    case "?":
      return Mx(r, e);
    case "ip":
      return l[1] === "a" || l[1] === "addr" || l[1] === "address" ? Iu(e, r) : l[1] === "r" || l[1] === "route" ? Px(e, r) : l[1] === "neigh" ? Mu(e, r) : r("Usage: ip {a|route|neigh}", "error");
    case "ifconfig":
      return Iu(e, r);
    case "arp":
      return Mu(e, r);
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
      return Tx(e, l, n);
    case "exit":
    case "logout":
      e.cli.sshHost && (r(`Connection to ${e.cli.sshHost} closed.`, "dim"), e.cli.sshHost = null, e.cli.sshUser = null, n.commit());
      return;
    case "systemctl":
      return Ex(e, l, n);
    case "ss":
    case "netstat":
      r("Netid  State   Local Address:Port", "dim");
      for (const u of Nn(e)) {
        const d = Rt[u];
        r(`tcp    LISTEN  ${O(e) || "0.0.0.0"}:${d ? d.port : "?"}   (${u})`);
      }
      Nn(e).length || r("(no services listening)", "dim");
      return;
    case "curl":
    case "wget": {
      const d = (l[1] || "").replace(/^https?:\/\//, "").split("/")[0], p = Qe(o, d);
      if (!p) return r(`${c}: could not resolve host: ${d}`, "error");
      if (!p.services.http) return r(`${c}: connection refused`, "error");
      const h = s.adjudicate(e, d);
      if (!h.ok) return r(`${c}: ${h.reason}`, "error");
      s.emit(h.path, "http"), r("HTTP/1.1 200 OK", "success"), r(`Server: Apache (simulated) on ${p.hostname}`, "dim"), r(`<h1>${p.hostname}</h1><form action="/search">…</form>`, "dim");
      return;
    }
    case "sqlquery": {
      const u = l[1], d = l.slice(2).join(" "), p = Qe(o, u);
      if (!p || !p.database) return r("Usage: sqlquery <web-host> <input>", "error");
      const h = Hh(p, d);
      r(`POST http://${O(p)}/search`, "dim");
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
        r("127.0.0.1  localhost", "dim"), r(`${O(e) || "127.0.1.1"}  ${e.hostname.toLowerCase()}`, "dim");
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
      return Lu(e, n);
    case "airmon-ng": {
      if (!e.radio) return r("airmon-ng: no wireless interface.", "error");
      const u = (l[1] || "start") === "start";
      e.radio.monitorMode = u, e.capturing = u || e.capturing, r(`${u ? "Enabling" : "Disabling"} monitor mode on ${e.interfaces[0].name}`, u ? "success" : "warn"), n.commit();
      return;
    }
    case "airodump-ng":
      return e.radio ? e.radio.monitorMode ? Lu(e, n) : r("airodump-ng: interface is not in monitor mode (run airmon-ng start).", "error") : r("airodump-ng: no wireless interface.", "error");
    case "tcpdump":
      return Ax(e, l, n);
    case "nmap":
    case "aireplay-ng":
    case "arpspoof":
    case "hydra":
      return e.role !== "attacker" ? r(`${c}: command not found`, "error") : Ix(e, c, l, n);
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
function Iu(e, t) {
  e.interfaces.forEach((n, r) => {
    t(`${r + 1}: ${n.name}: <${n.enabled ? "UP,BROADCAST,RUNNING" : "NO-CARRIER,DOWN"}> mtu 1500`, n.enabled ? "success" : "dim"), t(`    link/ether ${n.mac}`, "dim"), n.ip ? t(`    inet ${n.ip}/${Ve(n.mask)} scope global ${n.name}`) : t("    inet (none)", "dim");
  });
}
function Px(e, t) {
  for (const n of e.interfaces)
    n.ip && t(`${n.ip}/${Ve(n.mask)} dev ${n.name} scope link`);
  e.gateway ? t(`default via ${e.gateway} dev ${e.interfaces[0].name}`, "success") : t("(no default route — set a gateway)", "dim");
}
function Mu(e, t) {
  const n = Object.entries(e.arp);
  if (!n.length) return t("(neighbour table empty — send traffic first)", "dim");
  for (const [r, s] of n)
    t(
      `${r} dev ${e.interfaces[0].name} lladdr ${s.mac} ${s.spoofed ? "STALE  << duplicate address detected" : "REACHABLE"}`,
      s.spoofed ? "error" : "info"
    );
}
function Ex(e, t, n) {
  const { log: r } = n, s = t[1], o = (t[2] || "").replace(/\.service$/, "");
  if (!s || s === "status") {
    if (!o) {
      for (const [a, l] of Object.entries(e.services))
        r(`${a.padEnd(10)} ${l ? "active (running)" : "inactive (dead)"}`, l ? "success" : "dim");
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
function Tx(e, t, n) {
  const { log: r, engine: s, topology: o } = n, a = t[1];
  if (!a) return r("Usage: ssh [user@]host", "error");
  const [l, c] = a.includes("@") ? a.split("@") : [null, a], u = Qe(o, c);
  if (!u) return r(`ssh: Could not resolve hostname ${c}`, "error");
  const d = s.adjudicate(e, c);
  if (!d.ok) return r(`ssh: connect to host ${c}: ${d.reason}`, "error");
  if (!u.services.ssh) return r(`ssh: connect to host ${c} port 22: Connection refused`, "error");
  if (Gh(u, s.clock))
    return r(`ssh: ${u.hostname} is refusing logins (account locked after repeated failures)`, "error");
  s.emit(d.path, "http", { ssh: !0 });
  const p = l || u.security.username, h = t.indexOf("-p"), f = h > -1 ? t[h + 1] : null;
  if (f !== null && f !== u.security.password) {
    const g = Oi(u, s.clock);
    return n.commit(), r(`Permission denied (publickey,password). Failures: ${g.failures}`, "error");
  }
  if (r(`Warning: Permanently added '${c}' (ED25519) to the list of known hosts.`, "dim"), f === null && u.security.password) {
    r(`${p}@${c}'s password:`, "dim"), ws(e, {
      purpose: "login",
      expected: u.security.password,
      onSuccess: (g) => {
        En(e, u, "ssh", p), u.banner && g.log(u.banner, "warn"), g.log(`Welcome to ${u.hostname} (simulated). Type "exit" to return.`, "success");
      },
      onFail: (g) => {
        Oi(u, s.clock), g.log("Permission denied (publickey,password).", "error");
      }
    }), n.commit();
    return;
  }
  En(e, u, "ssh", p), u.banner && r(u.banner, "warn"), r(`Welcome to ${u.hostname} (simulated)`, "success"), r(`Session opened as ${p}. Type "exit" to return to ${e.hostname}.`, "dim"), n.commit();
}
function Lu(e, t) {
  const { log: n, topology: r } = t, s = Bh(r, e);
  if (!s.length) return n("No networks in range.", "dim");
  n("BSSID               PWR  CH  ENC       ESSID", "dim");
  for (const { ap: o, dbm: a } of s) {
    const l = (o.ap.security || "open").toUpperCase();
    n(
      `${Nx(o).padEnd(19)} ${String(a).padStart(4)}  ${String(o.ap.channel).padStart(2)}  ${l.padEnd(9)} ${o.ap.ssid}`,
      l === "OPEN" ? "warn" : "info"
    );
  }
  n(`${s.length} network(s). Open networks carry readable payloads.`, "dim");
}
function Ax(e, t, n) {
  const { log: r, engine: s } = n;
  e.capturing = !0, n.commit();
  const o = t.indexOf("-c"), a = o > -1 && Number(t[o + 1]) || 10, l = t.filter((u, d) => d > 0 && !u.startsWith("-") && t[d - 1] !== "-c").join(" "), c = s.capture.for(e.id).filter((u) => Xh(u, l)).slice(-a);
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
function Ix(e, t, n, r) {
  const { log: s, engine: o, topology: a } = r, l = r.commit, c = () => r.focusChannel && r.focusChannel("attack");
  if (t === "nmap") {
    const u = Qe(a, n[n.length - 1]);
    if (!u) return s("nmap: could not resolve target.", "error");
    s(`Starting Nmap against ${n[n.length - 1]} — results in the Cyber Range tab.`, "dim"), c(), or("port-scan", { engine: o, attacker: e, target: u, commit: l });
    return;
  }
  if (t === "aireplay-ng") {
    const u = Qe(a, n[n.length - 1]);
    if (!u) return s("aireplay-ng: specify a station, e.g. aireplay-ng --deauth 5 Laptop0", "error");
    s("Sending deauthentication frames — results in the Cyber Range tab.", "dim"), c(), or("deauth", { engine: o, attacker: e, target: u, commit: l });
    return;
  }
  if (t === "arpspoof") {
    const u = Qe(a, n[n.length - 1]);
    s("Poisoning the local segment — results in the Cyber Range tab.", "dim"), c(), or("arp-spoof", { engine: o, attacker: e, target: u || e, commit: l });
    return;
  }
  if (t === "hydra") {
    const u = Qe(a, n[n.length - 1]);
    if (!u) return s("hydra: could not resolve target.", "error");
    s("Running the credential list — results in the Cyber Range tab.", "dim"), c(), or("brute-force", { engine: o, attacker: e, target: u, commit: l });
    return;
  }
}
function Mx(e, t) {
  e("Networking:  ip a | ip route | ip neigh | arp | ping HOST | traceroute HOST", "dim"), t && t.radio && e("Wireless:    iwconfig | iwlist scan | airmon-ng start|stop | airodump-ng", "dim"), e("Capture:     tcpdump [-c N] [filter]   e.g. tcpdump -c 20 http", "dim"), t && t.role === "attacker" && e("Offensive:   nmap HOST | aireplay-ng --deauth N STATION | arpspoof HOST | hydra HOST", "dim"), e("Name service: dig NAME | nslookup NAME | dhclient", "dim"), e("Services:    systemctl status|start|stop UNIT | ss", "dim"), e("Remote:      ssh [user@]host [-p PASSWORD] | exit", "dim"), e("Web/DB lab:  curl http://HOST | sqlquery HOST <input>", "dim"), e("Files:       ls | cat flag.txt | cat /etc/passwd | passwd NEW", "dim"), e("Host:        top | uptime | whoami | hostname | clear", "dim");
}
const Hi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  execute: $x,
  prompt: Cx
}, Symbol.toStringTag, { value: "Module" }));
function Lx(e) {
  return `C:\\Users\\${e.security.username}>`;
}
function zo(e) {
  return e.media === "wifi" ? "Wireless LAN adapter Wi-Fi" : e.media === "ethernet" ? `Ethernet adapter ${e.name}` : e.media === "serial" ? `Serial port ${e.name}` : e.media === "usb" ? `USB device ${e.name}` : `Adapter ${e.name}`;
}
function Rx(e, t, n) {
  const { log: r, engine: s, topology: o } = n, a = t.trim();
  if (!a) return;
  const l = a.split(/\s+/), c = l[0].toLowerCase(), u = l.filter((p) => p.startsWith("/") || p.startsWith("-")).map((p) => p.toLowerCase()), d = l.slice(1).filter((p) => !p.startsWith("/") && !p.startsWith("-"));
  switch (c) {
    case "help":
    case "?":
      return _x(r);
    case "ipconfig":
      return Ru(e, u, n);
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
      r(`Server:  ${p ? p.hostname : "UnKnown"}`, "dim"), r(`Address:  ${p ? O(p) : "—"}`, "dim"), r(""), s.dnsLookup(e, d[0], n.channel);
      return;
    }
    case "arp":
      return Dx(e, u, n);
    case "netstat":
      return zx(e, u, n);
    case "route":
      return (d[0] || "").toLowerCase() === "print" ? Ox(e, n) : r("Usage: route print", "error");
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
      return Ru(e, ["/all"], n);
    case "telnet":
      return Du(e, d, "telnet", n);
    case "ssh":
      return Du(e, d, "ssh", n);
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
function Ru(e, t, n) {
  var a, l;
  const { log: r, topology: s } = n, o = t.includes("/all") || t.includes("-all");
  r(""), r("Windows IP Configuration"), r(""), o && (r(`   Host Name . . . . . . . . . . . . : ${e.hostname}`), r(`   Primary Dns Suffix  . . . . . . . : ${e.domainName || ""}`), r("   Node Type . . . . . . . . . . . . : Hybrid"), r("   IP Routing Enabled. . . . . . . . : No"), r(""));
  for (const c of e.interfaces) {
    if (c.media === "console" || c.media === "serial" || c.media === "usb") continue;
    const u = c.media === "wifi" ? !!((a = e.radio) != null && a.associatedTo) : !!c.link;
    if (r(`${zo(c)}:`), r(""), !u && !c.ip) {
      r("   Media State . . . . . . . . . . . : Media disconnected"), r("   Connection-specific DNS Suffix  . : "), r("");
      continue;
    }
    if (o && (r(`   Description . . . . . . . . . . . : ${c.media === "wifi" ? "Wireless Network Adapter" : "Gigabit Network Connection"}`), r(`   Physical Address. . . . . . . . . : ${c.mac.replace(/:/g, "-").toUpperCase()}`), r(`   DHCP Enabled. . . . . . . . . . . : ${e.dhcpLease ? "Yes" : "No"}`), r("   Autoconfiguration Enabled . . . . : Yes")), r(`   IPv4 Address. . . . . . . . . . . : ${c.ip || "169.254.1.1(Preferred)"}`), r(`   Subnet Mask . . . . . . . . . . . : ${c.mask}`), r(`   Default Gateway . . . . . . . . . : ${e.gateway || ""}`), o) {
      const d = s.devices.find((p) => p.services.dns);
      r(`   DNS Servers . . . . . . . . . . . : ${d ? O(d) : ""}`), c.media === "wifi" && ((l = e.radio) != null && l.ssid) && r(`   SSID. . . . . . . . . . . . . . . : ${e.radio.ssid}`);
    }
    r("");
  }
  o || r("For the full adapter detail, run: ipconfig /all", "dim");
}
function Dx(e, t, n) {
  const { log: r } = n, s = Object.entries(e.arp || {});
  if (r(""), r(`Interface: ${O(e) || "0.0.0.0"} --- 0x2`), r("  Internet Address      Physical Address      Type", "dim"), !s.length) {
    r("  (no entries — send traffic first, e.g. ping a neighbour)", "dim");
    return;
  }
  for (const [o, a] of s)
    r(
      `  ${o.padEnd(22)}${String(a.mac).replace(/:/g, "-").padEnd(22)}${a.static ? "static" : "dynamic"}`,
      a.spoofed ? "error" : "info"
    );
  s.some(([, o]) => o.spoofed) && (r("", "dim"), r("  Note: two addresses share a physical address — that is what ARP poisoning looks like.", "warn"));
}
function zx(e, t, n) {
  var l;
  const { log: r } = n, s = t.some((c) => c.includes("n"));
  r(""), r("Active Connections"), r(""), r("  Proto  Local Address          Foreign Address        State", "dim");
  const o = O(e) || "0.0.0.0", a = Object.entries(e.services).filter(([, c]) => c);
  if (!a.length && !((l = e.cli.sessions) != null && l.length)) {
    r("  (no listening services and no open sessions)", "dim");
    return;
  }
  for (const [c] of a) {
    const u = Rt[c];
    r(`  TCP    ${`${o}:${u ? u.port : "0"}`.padEnd(23)}${"0.0.0.0:0".padEnd(23)}LISTENING`);
  }
  for (const c of e.cli.sessions || []) {
    const u = c.protocol === "ssh" ? 22 : 23;
    r(`  TCP    ${`${o}:49${u}`.padEnd(23)}${`remote:${u}`.padEnd(23)}ESTABLISHED`);
  }
  s || r("", "dim");
}
function Ox(e, t) {
  const { log: n } = t;
  n("==========================================================================="), n("Interface List");
  for (const [s, o] of e.interfaces.filter((a) => a.media !== "console").entries())
    n(` ${String(s + 2).padStart(2)}...${o.mac.replace(/:/g, " ")} ......${zo(o)}`);
  n("==========================================================================="), n(""), n("IPv4 Route Table"), n("==========================================================================="), n("Active Routes:", "dim"), n("Network Destination        Netmask          Gateway       Interface  Metric", "dim");
  const r = O(e);
  e.gateway && n(`          0.0.0.0          0.0.0.0  ${e.gateway.padEnd(15)}${(r || "").padEnd(11)}     25`);
  for (const s of e.interfaces) {
    if (!s.ip) continue;
    const o = Ve(s.mask), a = s.ip.split(".").slice(0, Math.max(1, Math.floor((o || 24) / 8))).join(".");
    n(`${(a + ".0").padStart(17)}  ${s.mask.padEnd(15)}  ${"On-link".padEnd(13)}${s.ip.padEnd(11)}    281`);
  }
  n("==========================================================================="), e.gateway || n("No default route — set a default gateway to leave this subnet.", "warn");
}
function Du(e, t, n, r) {
  var h;
  const { log: s, engine: o, topology: a } = r, l = t[0];
  if (!l) return s(`Usage: ${n} ${n === "ssh" ? "[user@]host" : "<host>"}`, "error");
  const [c, u] = l.includes("@") ? l.split("@") : [null, l], d = Qe(a, u);
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
          En(e, d, n, c || "student"), g.log(d.banner || "", d.banner ? "warn" : "dim"), g.log(`[Connected to ${d.hostname}]`, "success");
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
        En(e, d, n, c || d.security.username), f.log(`[Connected to ${d.hostname}]`, "success");
      },
      onFail: (f) => f.log("Permission denied (password).", "error")
    }), r.commit();
    return;
  }
  En(e, d, n, c || "student"), d.banner && s(d.banner, "warn"), s(`[Connected to ${d.hostname}] — type exit to return.`, "success"), r.commit();
}
function _x(e) {
  e("Network:     ipconfig [/all] | ping [-n N] host | tracert host | nslookup name"), e("Tables:      arp -a | netstat [-an] | route print | getmac"), e("Remote:      telnet host | ssh [user@]host     (exit to come back)"), e("System:      hostname | systeminfo | dir | cls | echo text");
}
const Fx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  execute: Rx,
  prompt: Lx
}, Symbol.toStringTag, { value: "Module" })), Hx = { ios: sx, linux: Hi, kali: Hi, windows: Fx }, Ui = (e) => Hx[e == null ? void 0 : e.os] || Hi, Ux = /^(exit|logout|quit|disconnect)$/i;
function nf(e, t, n) {
  var a;
  const { device: r, chain: s } = aa(e, n.topology);
  if ((a = r.cli) != null && a.pending) return G0(r, t, n);
  const o = t.trim();
  if (s.length && Ux.test(o)) {
    if (r.os === "ios" && ["config", "config-if", "config-vlan", "config-line"].includes(r.cli.mode)) return Ui(r).execute(r, t, n);
    const c = q0(e, n.topology);
    n.log(`[Connection to ${(c == null ? void 0 : c.hostname) || "host"} closed]`, "dim"), n.commit();
    return;
  }
  return Ui(r).execute(r, t, n);
}
function Bi(e, t = null) {
  var r;
  const { device: n } = aa(e, t);
  return (r = n.cli) != null && r.pending ? n.cli.pending.prompt || "Password: " : Ui(n).prompt(n);
}
function zu(e, t = null) {
  var r, s;
  const { device: n } = aa(e, t);
  return !!((s = (r = n.cli) == null ? void 0 : r.pending) != null && s.secret);
}
const Oo = 1, nc = {
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
        (r) => !le[r.ap.security] || !le[r.ap.security].encrypted
      ), n = [...mn(e).values()].some((r) => r.rogue);
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
          var o, a;
          return !s.encrypted && /FLAG\{sqli_/.test(((a = (o = s.layers) == null ? void 0 : o.payload) == null ? void 0 : a.text) || "");
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
}, rc = Object.values(nc), Bx = ["social-foothold", "insider-control"];
function rf(e) {
  return typeof btoa == "function" ? btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (t, n) => String.fromCharCode(parseInt(n, 16)))) : Buffer.from(e, "utf8").toString("base64");
}
function Wx(e) {
  return typeof atob == "function" ? decodeURIComponent(
    atob(e).split("").map((t) => `%${t.charCodeAt(0).toString(16).padStart(2, "0")}`).join("")
  ) : Buffer.from(e, "base64").toString("utf8");
}
function sc(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t ^= e.charCodeAt(n), t = t * 16777619 >>> 0;
  return t.toString(36).toUpperCase().padStart(7, "0").slice(0, 7);
}
function Vx(e, { name: t, author: n, objectives: r, minutes: s = 20, scenarioId: o = null, setupMinutes: a = null } = {}) {
  var h;
  const l = (e.personnel || []).length > 0, c = (r && r.length ? r : rc.map((f) => f.id)).filter((f) => nc[f]).filter((f) => l || !Bx.includes(f)), u = JSON.parse(JSON.stringify({
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
    setupMinutes: a,
    // what blue was given, for the record
    scenarioId: o,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    objectives: c,
    personnel: u.personnel.length,
    topology: u
  }, p = JSON.stringify(d);
  return `NRC1.${sc(p)}.${rf(p)}`;
}
function qx(e) {
  const t = String(e || "").trim().replace(/\s+/g, "");
  if (!t) return { ok: !1, reason: "Paste a challenge code first." };
  const n = t.split(".");
  if (n.length !== 3 || n[0] !== "NRC1")
    return { ok: !1, reason: "That does not look like a challenge code — it should start with NRC1." };
  let r;
  try {
    r = Wx(n[2]);
  } catch {
    return { ok: !1, reason: "The code is damaged and could not be decoded." };
  }
  if (sc(r) !== n[1])
    return { ok: !1, reason: "Checksum does not match — the code was truncated or edited in transit." };
  let s;
  try {
    s = JSON.parse(r);
  } catch {
    return { ok: !1, reason: "The code decoded but did not contain a readable challenge." };
  }
  return s.v !== Oo ? { ok: !1, reason: `This code is version ${s.v}; this build reads version ${Oo}.` } : !s.topology || !Array.isArray(s.topology.devices) ? { ok: !1, reason: "The challenge has no topology in it." } : { ok: !0, challenge: s };
}
function Gx(e, t, n) {
  var c;
  const r = (c = e == null ? void 0 : e.objectives) != null && c.length ? e.objectives : rc.map((u) => u.id), s = { topology: t, engine: n }, o = r.map((u) => {
    const d = nc[u];
    if (!d) return null;
    let p = !1;
    try {
      p = !!d.test(s);
    } catch {
      p = !1;
    }
    return { ...d, captured: p };
  }).filter(Boolean), a = o.reduce((u, d) => u + d.points, 0), l = o.filter((u) => u.captured).reduce((u, d) => u + d.points, 0);
  return {
    results: o,
    total: a,
    red: l,
    blue: a - l,
    capturedCount: o.filter((u) => u.captured).length,
    objectiveCount: o.length,
    redPercent: a ? Math.round(l / a * 100) : 0
  };
}
function Kx(e, t, { team: n = "Red team", elapsedSeconds: r = 0 } = {}) {
  const s = {
    v: Oo,
    challenge: (e == null ? void 0 : e.name) || "Unnamed challenge",
    team: n,
    elapsedSeconds: r,
    red: t.red,
    blue: t.blue,
    total: t.total,
    captured: t.results.filter((a) => a.captured).map((a) => a.id),
    at: (/* @__PURE__ */ new Date()).toISOString()
  }, o = JSON.stringify(s);
  return `NRR1.${sc(o)}.${rf(o)}`;
}
function Zx(e) {
  const t = [], n = (o, a, l) => t.push({ severity: o, device: a, text: l });
  for (const o of e.devices) {
    if (o.role === "attacker") continue;
    const a = o.hostname;
    if (Object.values(o.services).some(Boolean) && ((!o.security.password || o.security.password.length < 10) && n("high", a, "Password is short enough to be guessed by the demo wordlist."), o.security.maxAuthTries === 0 && n("medium", a, "No limit on authentication attempts.")), o.services.http && !o.security.inputSanitised && o.database && n("high", a, "Web application accepts unsanitised input — the database is reachable through it."), o.services.telnet && n("medium", a, "Telnet is enabled; it carries credentials in clear."), (o.services.http || o.services.ssh) && !o.security.synCookies && n("low", a, "No SYN cookies — a flood can exhaust the accept queue."), o.role === "host" && !o.security.awarenessTraining && n("medium", a, "User has had no awareness training; a phishing lure will be opened."), o.role === "host" && !o.security.mfa && n("low", a, "No MFA, so a stolen password is enough on its own."), o.role === "host" && !o.security.callbackVerification && n("medium", a, "No callback policy — a caller claiming to be IT will be believed."), o.ap) {
      const l = le[o.ap.security];
      (!l || !l.encrypted) && n("high", a, `SSID "${o.ap.ssid}" is open — everything in range is readable.`), o.security.managementFrameProtection || n("medium", a, "Management frames unprotected; clients can be deauthenticated.");
    }
    (o.role === "router" || o.role === "l3switch") && !o.security.dynamicArpInspection && n("medium", a, "No Dynamic ARP Inspection — the segment can be put on-path.");
  }
  const r = { high: 3, medium: 2, low: 1 }, s = Math.max(0, 100 - t.reduce((o, a) => o + r[a.severity] * 6, 0));
  return { findings: t, score: s };
}
const Wi = {
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
      { typeId: "webserver", count: 1, label: "Web server (holds the data)" },
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
      { typeId: "webserver", count: 1, label: "Web server" },
      { typeId: "ftpserver", count: 1, label: "File server" },
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
      { typeId: "webserver", count: 1, label: "DMZ web server" },
      { typeId: "dnsserver", count: 1, label: "Internal DNS" },
      { typeId: "ftpserver", count: 1, label: "File server" },
      { typeId: "pc", count: 3, label: "Staff workstations" },
      { typeId: "accesspoint", count: 1, label: "Wireless access point" },
      { typeId: "laptop", count: 1, label: "Roaming laptop" }
    ],
    objectives: rc.map((e) => e.id)
  }
}, Yx = Object.values(Wi), io = (e) => Wi[e] || Wi["small-office"];
function Qx(e, t = []) {
  const n = t.map((o) => {
    const a = e.devices.filter((l) => l.typeId === o.typeId).length;
    return { ...o, placed: a, ok: a >= o.count };
  }), r = n.reduce((o, a) => o + a.count, 0), s = n.reduce((o, a) => o + Math.min(a.placed, a.count), 0);
  return {
    rows: n,
    required: r,
    placed: s,
    complete: n.every((o) => o.ok),
    percent: r ? Math.round(s / r * 100) : 100
  };
}
function Xx(e, t) {
  const n = Qx(e, t.roster), r = Zx(e), s = [];
  if (!n.complete) {
    const l = n.rows.filter((c) => !c.ok).map((c) => `${c.count - c.placed} × ${c.label}`).join(", ");
    s.push(`Still to deploy: ${l}.`);
  }
  const o = e.devices.filter((l) => l.interfaces.some((c) => c.ip)).length;
  o < e.devices.length && s.push(`${e.devices.length - o} device(s) have no IP address.`);
  const a = e.devices.filter(
    (l) => {
      var c;
      return l.role !== "attacker" && !l.interfaces.some((u) => u.link) && !((c = l.radio) != null && c.ssid);
    }
  ).length;
  return a > 0 && s.push(`${a} device(s) are not cabled or associated.`), { roster: n, hardening: r, blockers: s, ready: s.length === 0 };
}
function oc(e) {
  return JSON.stringify({
    security: e.security,
    services: e.services,
    acl: e.acl,
    lines: e.lines,
    enableSecret: e.enableSecret,
    ap: e.ap ? { security: e.ap.security, passphrase: e.ap.passphrase, enabled: e.ap.enabled } : null
  });
}
function Ou(e) {
  const t = {};
  for (const n of e.devices) t[n.id] = oc(n);
  return t;
}
function Jx(e, t, n) {
  if (!t) return t;
  const r = e.devices.find((s) => s.id === n);
  return r && (t[r.id] = oc(r)), t;
}
function ey(e, t) {
  if (!t) return [];
  const n = [];
  for (const r of e.devices) {
    const s = t[r.id];
    if (!s || oc(r) === s) continue;
    const o = JSON.parse(s);
    r.security = { ...o.security, lockout: r.security.lockout }, r.services = { ...o.services }, r.acl = JSON.parse(JSON.stringify(o.acl)), r.lines = JSON.parse(JSON.stringify(o.lines)), r.enableSecret = o.enableSecret, r.ap && o.ap && Object.assign(r.ap, o.ap), n.push(r.hostname);
  }
  return n;
}
const Dn = {
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
}, ty = Object.values(Dn), ia = {
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
}, ny = Object.values(ia), bs = {
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
let _u = 0;
function Fu(e, { name: t, areaZoneId: n = null } = {}) {
  const r = bs[e] || bs.junior;
  return _u += 1, {
    id: `p${_u}${Math.random().toString(36).slice(2, 6)}`,
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
function ry(e, t) {
  if (!(t != null && t.areaZoneId)) return e.devices;
  const n = (e.zones || []).find((r) => r.id === t.areaZoneId);
  return n ? e.devices.filter(
    (r) => r.x >= n.x && r.x <= n.x + n.w && r.y >= n.y && r.y <= n.y + n.h
  ) : e.devices;
}
function sy(e, t) {
  var r, s;
  const n = String(t || "").trim().toLowerCase();
  if (!n) return { ok: !1, kind: null, note: "No detail offered — the pretext is bare assertion." };
  for (const o of e.devices) {
    if (o.hostname.toLowerCase() === n)
      return { ok: !0, kind: "hostname", note: `"${o.hostname}" is a real host here.` };
    if (O(o) && O(o) === n)
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
function Ha(e, t) {
  const n = e.filter((r) => r.role === "host" || r.role === "iot");
  return n.length ? n.filter((r) => {
    var s;
    return (s = r.security) == null ? void 0 : s[t];
  }).length / n.length : 0;
}
function oy(e, { tactic: t, ask: n, claim: r, topology: s, caller: o = "Jordan Ellis", colleague: a = "Dave" }) {
  const l = bs[e.roleId], c = Dn[t], u = ia[n];
  if (!l || !c || !u)
    return { ok: !1, refused: !0, reported: !1, reply: "…sorry, what are you asking for?", factors: [], score: 0, threshold: 0, debrief: "", effect: null };
  const d = ry(s, e), p = Ha(d, "awarenessTraining"), h = Ha(d, "callbackVerification"), f = Ha(d, "mfa"), g = sy(s, r), j = [
    { label: `${c.label} pretext`, value: c.pressure },
    { label: g.ok ? `Detail checks out (${g.kind})` : "Detail does not check out", value: g.ok ? 3 : -3 },
    { label: `"${u.label}" is a ${u.sensitivity === 0 ? "small" : u.sensitivity >= 3 ? "serious" : "significant"} ask`, value: -u.sensitivity }
  ];
  e.granted.length && j.push({ label: "They have already helped once", value: 3 });
  const y = j.reduce((J, te) => J + te.value, 0), m = [
    { label: `${l.label} baseline against ${c.label.toLowerCase()}`, value: l.resistance[t] },
    { label: "Awareness training in this area", value: Math.round(p * 3) },
    { label: "Suspicion already raised", value: Math.round(e.suspicion * 0.8) }
  ], x = c.defeatedBy === "callbackVerification" && h >= 0.5;
  x && m.push({ label: "Callback verification is policy here", value: 99 });
  const w = m.reduce((J, te) => J + te.value, 0), k = y >= w, C = u.needsSupervisor && !l.supervisor, v = k && !C;
  let $ = 0;
  g.ok || ($ += 2), u.sensitivity >= 3 && ($ += 1), v || ($ += 1);
  const T = e.suspicion + $, U = T >= l.suspicionLimit && !e.reported;
  let L;
  x ? L = l.id === "junior" ? "I do want to help, but we have to call back on the directory number now. What extension are you on?" : "Policy is a callback on a directory number before anything like that. Give me your extension and I will ring you." : C ? L = "I do not have the rights to do that — you would need someone with a supervisor account." : v ? L = l.id === "junior" ? ay(u, g) : iy(u, g) : L = l.id === "junior" ? ly(c, g, T, l) : cy(c, g), U && (L += l.id === "junior" ? " …actually, I am going to flag this with my supervisor." : " I am logging this contact and notifying the security team.");
  const Z = v ? uy(u, d) : null;
  return {
    ok: v,
    refused: !v,
    reported: U,
    reply: L,
    factors: [...j, ...m.map((J) => ({ ...J, value: -J.value }))],
    score: y,
    threshold: w,
    suspicionDelta: $,
    debrief: dy({ t: c, a: u, ok: v, corr: g, callbackBlocks: x, training: p, mfa: f, role: l }),
    effect: Z
  };
}
function sf(e) {
  return /^[aeiou]/i.test(String(e)) ? "an" : "a";
}
function ay(e, t) {
  const n = t.ok ? "Oh — yes, I know the one. " : "Um, okay. ";
  return {
    "confirm-username": `${n}The account on that box is the standard one, I can read it out.`,
    "reset-password": `${n}I can set that for you now. Give me the password you want on it.`,
    "read-mfa": `${n}The code on my authenticator right now is 418 992.`,
    "disable-control": `${n}I will switch it off, just tell me when I can put it back.`
  }[e.id];
}
function iy(e, t) {
  const n = t.ok ? "That tallies with what I have here. " : "";
  return {
    "confirm-username": `${n}I can confirm the account name, that is not sensitive.`,
    "reset-password": `${n}Against my better judgement — I will reset it and note it in the ticket.`,
    "read-mfa": `${n}I will read it once, and I am changing it straight after.`,
    "disable-control": `${n}Ten minutes, and I am turning it back on myself.`
  }[e.id];
}
function ly(e, t, n, r) {
  return t.ok ? n >= r.suspicionLimit - 1 ? "This does not feel right. Can I take your name and call you back?" : "I do not think I am supposed to do that one. Could you raise a ticket?" : "Sorry — I cannot find that on our system. Are you sure you have the right site?";
}
function cy(e, t) {
  return t.ok ? "No. That goes through change control, whoever is asking." : "That does not match anything here, and I am not going to guess. Raise it through the service desk.";
}
function uy(e, t) {
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
function dy({ t: e, a: t, ok: n, corr: r, callbackBlocks: s, training: o, mfa: a, role: l }) {
  if (s)
    return `Blocked by callback verification. ${e.defeatNote}`;
  if (n) {
    const c = r.ok ? "the detail you quoted was real, which is what made the pretext credible" : "the pretext alone carried it", u = t.id === "reset-password" && a >= 0.5 ? " MFA still stands between that password and the account." : t.id === "disable-control" ? " Least privilege would have limited what this account could switch off." : "", d = e.label.toLowerCase();
    return `${l.label} complied under ${sf(d)} ${d} pretext — ${c}.${u}`;
  }
  return r.ok ? o >= 0.5 ? `Refused. Awareness training is doing the work here: ${e.defeatNote}` : "Refused — the ask was too large for the pressure applied. A smaller request first often makes the next one land." : "Refused: the detail did not check out. Reconnaissance first — a pretext built on something real is far harder to refuse.";
}
function py(e, t) {
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
const Hu = 50, hy = "netrange.theme", of = "netrange.settings", ac = "netrange.workspace", fy = 700;
function my() {
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
    const t = localStorage.getItem(of);
    return t ? { ...e, ...JSON.parse(t) } : e;
  } catch {
    return e;
  }
}
function gy(e) {
  try {
    localStorage.setItem(of, JSON.stringify(e)), localStorage.setItem(hy, e.theme);
  } catch {
  }
}
let Vi = null, Uu = !1;
function xy(e, t, n) {
  Uu || (clearTimeout(Vi), Vi = setTimeout(() => {
    try {
      localStorage.setItem(ac, JSON.stringify({ version: 1, topology: e, labId: t, at: Date.now() }));
    } catch (r) {
      Uu = !0, n == null || n(r);
    }
  }, fy));
}
function yy() {
  var e;
  try {
    const t = localStorage.getItem(ac);
    if (!t) return null;
    const n = JSON.parse(t);
    return (e = n == null ? void 0 : n.topology) != null && e.devices ? (n.topology.zones = n.topology.zones || [], n.topology.personnel = n.topology.personnel || [], n) : null;
  } catch {
    return null;
  }
}
function vy() {
  clearTimeout(Vi);
  try {
    localStorage.removeItem(ac);
  } catch {
  }
}
function wy(e, t, n, r = 96) {
  const s = (o, a) => e.some((l) => Math.abs(l.x - o) < r && Math.abs(l.y - a) < r * 0.75);
  if (!s(t, n)) return { x: t, y: n };
  for (let o = 1; o <= 8; o++)
    for (let a = -o; a <= o; a++)
      for (const [l, c] of [
        [t + a * r, n - o * r * 0.8],
        [t + a * r, n + o * r * 0.8],
        [t - o * r, n + a * r * 0.8],
        [t + o * r, n + a * r * 0.8]
      ])
        if (!s(l, c)) return { x: l, y: c };
  return { x: t, y: n };
}
function by(e) {
  const t = document.documentElement;
  e === "light" ? t.setAttribute("data-theme", "light") : t.setAttribute("data-theme", "dark");
}
const b = Q1((e, t) => {
  const n = my(), r = new O0({
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
    labId: V0,
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
        past: [...o.past.slice(-Hu + 1), s],
        future: []
      }));
    },
    undo: () => {
      const { past: s, future: o, topology: a } = t();
      if (!s.length) return;
      const l = s[s.length - 1];
      e({
        past: s.slice(0, -1),
        future: [JSON.stringify(a), ...o].slice(0, Hu),
        topology: JSON.parse(l),
        selectedId: null,
        selectedLinkId: null
      }), t().commit();
    },
    redo: () => {
      const { past: s, future: o, topology: a } = t();
      o.length && (e({
        past: [...s, JSON.stringify(a)],
        future: o.slice(1),
        topology: JSON.parse(o[0]),
        selectedId: null,
        selectedLinkId: null
      }), t().commit());
    },
    /** Re-render after in-place mutation, and re-grade if already graded. */
    commit: () => {
      const { posture: s, challengePhase: o, topology: a } = t();
      if (s && o === "breach") {
        const l = ey(a, s);
        l.length && t().log(
          "system",
          `Defences are locked for this round — reverted changes on ${l.join(", ")}.`,
          "warn"
        );
      }
      e((l) => ({ rev: l.rev + 1 })), t().graded && t().grade({ silent: !0 }), t().settings.autosave && xy(a, t().labId, (l) => {
        t().log(
          "system",
          `Could not save your work to this browser (${l.name || "storage error"}). Use Save to download the topology instead.`,
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
      const o = t().zoneRenameId, a = String(s || "").trim();
      e({ zoneRenameId: null }), !(!o || !a) && (t().pushHistory(), t().updateZone(o, { name: a.slice(0, 40) }), t().commit());
    },
    /* --------------------------------------------------------- devices */
    addDevice: (s, o, a) => {
      if (!Rn[s]) return null;
      t().pushHistory();
      const { topology: l } = t(), c = wy(l.devices, o, a), u = ju(s, Math.round(c.x), Math.round(c.y), l.devices);
      return l.devices.push(u), e({ selectedId: u.id }), t().log("system", `Placed ${u.hostname} (${Rn[s].label})`, "dim"), t().commit(), u;
    },
    moveDevice: (s, o, a) => {
      const l = t().topology.devices.find((c) => c.id === s);
      l && (l.x = Math.round(o), l.y = Math.round(a), e((c) => ({ rev: c.rev + 1 })));
    },
    removeDevice: (s) => {
      t().pushHistory();
      const { topology: o } = t(), a = o.devices.find((c) => c.id === s), l = new Set(o.links.filter((c) => c.a === s || c.b === s).map((c) => c.id));
      for (const c of o.devices)
        for (const u of c.interfaces) l.has(u.link) && (u.link = null);
      o.devices = o.devices.filter((c) => c.id !== s), o.links = o.links.filter((c) => c.a !== s && c.b !== s), e((c) => ({
        topology: o,
        selectedId: c.selectedId === s ? null : c.selectedId,
        consoles: c.consoles.filter((u) => u.deviceId !== s),
        activeConsoleId: c.consoles.find((u) => u.deviceId === s && u.id === c.activeConsoleId) ? "system" : c.activeConsoleId
      })), a && t().log("system", `Removed ${a.hostname}`, "dim"), t().commit();
    },
    updateDevice: (s, o) => {
      const a = t().topology.devices.find((l) => l.id === s);
      a && (t().pushHistory(), o(a), t().commit());
    },
    duplicateDevice: (s) => {
      const o = t().topology.devices.find((c) => c.id === s);
      if (!o) return;
      t().pushHistory();
      const { topology: a } = t(), l = ju(o.typeId, o.x + 70, o.y + 50, a.devices);
      l.interfaces = o.interfaces.map((c) => ({ ...c, ip: "", mac: l.interfaces[0].mac })), l.gateway = o.gateway, l.services = { ...o.services }, l.security = { ...o.security, lockout: { failures: 0, lockedUntil: 0, locked: !1 } }, a.devices.push(l), e({ selectedId: l.id }), t().commit();
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
      const { x: a, y: l, zoom: c } = t().viewport;
      return { x: (s - a) / c, y: (o - l) / c };
    },
    /** World point → screen point, for positioning HTML popovers. */
    toScreen: (s, o) => {
      const { x: a, y: l, zoom: c } = t().viewport;
      return { x: s * c + a, y: o * c + l };
    },
    panBy: (s, o) => {
      const a = t().viewport;
      e({ viewport: { ...a, x: a.x + s, y: a.y + o } });
    },
    /** Zoom about a screen point, so the world under the cursor stays put. */
    zoomAt: (s, o, a) => {
      const l = t().viewport, c = Math.max(0.25, Math.min(3, l.zoom * s));
      if (c === l.zoom) return;
      const u = (o - l.x) / l.zoom, d = (a - l.y) / l.zoom;
      e({ viewport: { x: o - u * c, y: a - d * c, zoom: c } });
    },
    setZoom: (s, o = 0, a = 0) => {
      const l = t().viewport;
      t().zoomAt(Math.max(0.25, Math.min(3, s)) / l.zoom, o, a);
    },
    resetView: () => e({ viewport: { x: 0, y: 0, zoom: 1 } }),
    /** Frame everything currently placed, with a margin. */
    fitView: (s, o, a = 80) => {
      const l = t().canvasSize;
      s = s || l.w, o = o || l.h;
      const { devices: c, zones: u } = t().topology, d = [
        ...c.map((y) => ({ x: y.x, y: y.y, w: 40, h: 32 })),
        ...(u || []).map((y) => ({ x: y.x + y.w / 2, y: y.y + y.h / 2, w: y.w / 2, h: y.h / 2 }))
      ];
      if (!d.length || !s || !o) {
        t().resetView();
        return;
      }
      const p = Math.min(...d.map((y) => y.x - y.w)), h = Math.max(...d.map((y) => y.x + y.w)), f = Math.min(...d.map((y) => y.y - y.h)), g = Math.max(...d.map((y) => y.y + y.h)), j = Math.max(0.25, Math.min(2, Math.min(
        (s - a * 2) / Math.max(1, h - p),
        (o - a * 2) / Math.max(1, g - f)
      )));
      e({
        viewport: {
          zoom: j,
          x: s / 2 - (p + h) / 2 * j,
          y: o / 2 - (f + g) / 2 * j
        }
      });
    },
    /* ------------------------------------------------- zones (floors/rooms) */
    addZone: (s, o, a = "") => {
      t().pushHistory();
      const { topology: l } = t();
      l.zones || (l.zones = []);
      const c = l.zones.length + 1, u = {
        id: `z${Math.random().toString(36).slice(2, 9)}`,
        name: a || `Floor ${c}`,
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
      const a = (t().topology.zones || []).find((l) => l.id === s);
      a && (Object.assign(a, o), e((l) => ({ rev: l.rev + 1 })));
    },
    removeZone: (s, o = !1) => {
      t().pushHistory();
      const { topology: a } = t(), l = (a.zones || []).find((c) => c.id === s);
      if (l && o) {
        const c = t().devicesInZone(l).map((u) => u.id);
        a.devices = a.devices.filter((u) => !c.includes(u.id)), a.links = a.links.filter((u) => !c.includes(u.a) && !c.includes(u.b));
      }
      a.zones = (a.zones || []).filter((c) => c.id !== s), e((c) => ({ selectedZoneId: c.selectedZoneId === s ? null : c.selectedZoneId })), t().log("system", `Removed section "${(l == null ? void 0 : l.name) || s}".`, "dim"), t().commit();
    },
    /** Devices whose centre falls inside a section. */
    devicesInZone: (s) => t().topology.devices.filter(
      (o) => o.x >= s.x && o.x <= s.x + s.w && o.y >= s.y && o.y <= s.y + s.h
    ),
    /** Move a section and carry everything standing in it. */
    moveZone: (s, o, a, l = null) => {
      const c = (t().topology.zones || []).find((u) => u.id === s);
      if (c) {
        c.x += o, c.y += a;
        for (const u of l || [])
          u.x += o, u.y += a;
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
    startSetup: (s, { setupMinutes: o, breachMinutes: a, name: l, author: c } = {}) => {
      const u = io(s), d = o ?? u.setupMinutes, p = a ?? u.breachMinutes;
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
      return s ? Xx(t().topology, s) : null;
    },
    /** Lock the build and produce the code to hand over. */
    armChallenge: () => {
      const { topology: s, challengeScenario: o, challengeBreachMinutes: a, challengeSetupMinutes: l } = t(), c = o || io(null), u = Vx(s, {
        name: t().challengeName,
        author: t().challengeAuthor,
        objectives: c.objectives,
        minutes: a,
        setupMinutes: l,
        scenarioId: c.id
      });
      return e({
        challengeCode: u,
        challengePhase: "armed",
        challengeDeadline: null,
        posture: Ou(s)
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
      const o = qx(s);
      if (!o.ok)
        return t().log("system", `Challenge: ${o.reason}`, "error"), o;
      t().pushHistory();
      const a = o.challenge.minutes || 15;
      return e({
        topology: o.challenge.topology,
        challenge: o.challenge,
        challengeRole: "red",
        challengePhase: "breach",
        challengeScenario: o.challenge.scenarioId ? io(o.challenge.scenarioId) : null,
        challengeBreachMinutes: a,
        challengeStartedAt: Date.now(),
        challengeDeadline: Date.now() + a * 6e4,
        // Freeze what blue left, so red cannot weaken it from their own copy.
        posture: Ou(o.challenge.topology),
        selectedId: null,
        selectedLinkId: null
      }), t().engine.reset(), t().engine.capture.clear(), t().log("system", `Challenge loaded: "${o.challenge.name}" by ${o.challenge.author}.`, "success"), t().log("system", `${o.challenge.objectives.length} objectives, ${o.challenge.minutes} minutes.`, "dim"), t().commit(), o;
    },
    /** Live score for the loaded challenge, or null when none is loaded. */
    challengeScore: () => {
      const { challenge: s, topology: o, engine: a } = t();
      return s ? Gx(s, o, a) : null;
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
      var o, a;
      return e({ socialOpen: !0, socialTarget: s || ((a = (o = t().topology.personnel) == null ? void 0 : o[0]) == null ? void 0 : a.id) || null });
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
      const a = o.zones || [];
      o.personnel = [
        Fu("senior", { areaZoneId: ((l = a[0]) == null ? void 0 : l.id) || null }),
        Fu("junior", { areaZoneId: ((c = a[1]) == null ? void 0 : c.id) || ((u = a[0]) == null ? void 0 : u.id) || null })
      ], t().log("system", "A senior and a junior technician are now on the network.", "success"), t().commit();
    },
    /** Move a technician onto a different section. */
    assignTechnician: (s, o) => {
      const { topology: a } = t(), l = (a.personnel || []).find((u) => u.id === s);
      if (!l) return;
      l.areaZoneId = o || null;
      const c = (a.zones || []).find((u) => u.id === o);
      t().log("system", `${l.name} now covers ${c ? c.name : "the whole site"}.`, "dim"), t().commit();
    },
    /**
     * Red tries a pretext.
     *
     * The transcript, the suspicion and any resulting change all land on the
     * topology, so the score sees them and the debrief can explain them.
     */
    socialAttempt: ({ technicianId: s, tactic: o, ask: a, claim: l }) => {
      var f;
      const { topology: c, posture: u } = t(), d = (c.personnel || []).find((g) => g.id === s);
      if (!d) return null;
      if (d.reported)
        return { ok: !1, reply: "The line rings out. This one has stopped taking your calls.", blocked: !0 };
      const p = Dn[o], h = oy(d, { tactic: o, ask: a, claim: l, topology: c });
      if (d.transcript.push({
        who: "red",
        tactic: o,
        ask: a,
        claim: l,
        text: ((p == null ? void 0 : p.opener) || "").replace("{caller}", "Jordan Ellis").replace("{colleague}", "Dave")
      }), d.transcript.push({ who: "tech", text: h.reply, ok: h.ok, debrief: h.debrief }), d.suspicion += h.suspicionDelta, h.reported && (d.reported = !0), h.ok) {
        d.granted.includes(a) || d.granted.push(a);
        const g = py(c, h.effect);
        g && (t().log("attack", `[social] ${g}`, "warn"), u && ((f = h.effect) != null && f.deviceId) && Jx(c, u, h.effect.deviceId));
        const j = Dn[o].label.toLowerCase();
        t().log("attack", `[social] ${d.name} complied — ${sf(j)} ${j} pretext.`, "error");
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
      const a = t().topology.devices.find((c) => c.id === s);
      if (!a) return;
      const l = `dev:${s}`;
      t().openDeviceConsole(s), t().log(l, Bi(a, t().topology) + o, "info"), nf(a, o, {
        engine: t().engine,
        topology: t().topology,
        channel: l,
        log: (c, u = "info") => t().log(l, c, u),
        commit: () => t().commit(),
        clearConsole: () => t().clearConsole(l)
      }), t().commit();
    },
    cableClick: (s) => {
      const { pendingCableFrom: o, topology: a, cableType: l } = t(), c = a.devices.find((h) => h.id === s);
      if (!c) return;
      const u = !o, d = Kh(c, u ? null : l), p = d.filter((h) => !h.disabled);
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
      const { pendingCableFrom: a, pendingCablePort: l, topology: c, cableType: u } = t();
      if (e({ portPicker: null }), !a) {
        const d = c.devices.find((g) => g.id === s), p = d == null ? void 0 : d.interfaces.find((g) => g.name === o), h = p ? J1(p.media) : null, f = h && h !== u ? h : u;
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
      if (a === s) {
        e({ pendingCableFrom: null, pendingCablePort: null });
        return;
      }
      t().connect(a, s, u, l, o), e({ pendingCableFrom: null, pendingCablePort: null, selectedId: null });
    },
    connect: (s, o, a = "straight", l = null, c = null) => {
      const { topology: u } = t(), d = u.devices.find((y) => y.id === s), p = u.devices.find((y) => y.id === o);
      if (!d || !p) return;
      const h = l ? _i(d, l) : Nu(d, a)[0], f = c ? _i(p, c) : Nu(p, a)[0];
      if (!h || !f) {
        const y = h ? p : d;
        t().log(
          "system",
          `Cannot connect: ${y.hostname} has no free ${Se[a].short} port.`,
          "error"
        );
        return;
      }
      const g = e0(a, d, p, h, f);
      if (!g.ok && g.fatal) {
        t().log("system", `Cannot connect: ${g.reason}`, "error");
        return;
      }
      t().pushHistory();
      const j = {
        id: `l${Math.random().toString(36).slice(2, 9)}`,
        a: s,
        aPort: h.name,
        b: o,
        bPort: f.name,
        cableType: a,
        down: !g.ok,
        reason: g.ok ? "" : g.reason
      };
      u.links.push(j), h.link = j.id, f.link = j.id, g.ok ? (h.enabled = !0, f.enabled = !0, t().log(
        "system",
        `${d.hostname} ${h.name} ⇄ ${p.hostname} ${f.name} — link up (${Se[a].short})`,
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
      for (const a of o.devices)
        for (const l of a.interfaces) l.link === s && (l.link = null);
      o.links = o.links.filter((a) => a.id !== s), e((a) => ({ selectedLinkId: a.selectedLinkId === s ? null : a.selectedLinkId })), t().log("system", "Cable removed", "dim"), t().commit();
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
    log: (s, o, a = "info") => {
      e((l) => ({
        consoles: l.consoles.map(
          (c) => c.id === s ? { ...c, lines: [...c.lines.slice(-400), { text: o, level: a, n: c.lines.length }] } : c
        )
      }));
    },
    ensureConsole: (s, o, a = null) => {
      t().consoles.some((l) => l.id === s) || e((l) => ({ consoles: [...l.consoles, { id: s, title: o, deviceId: a, lines: [] }] }));
    },
    openDeviceConsole: (s) => {
      const o = t().topology.devices.find((c) => c.id === s);
      if (!o) return;
      const a = `dev:${s}`, l = !t().consoles.some((c) => c.id === a);
      t().ensureConsole(a, o.hostname, s), e({ activeConsoleId: a }), l && (o.os === "ios" ? (t().log(a, `Connected to ${o.hostname} console port.`, "dim"), t().log(a, 'Press ? for the command list. Start with "enable".', "dim")) : (t().log(a, `${o.hostname} login: ${o.security.username} (authenticated)`, "dim"), t().log(a, "Press ? or type help for the command list.", "dim")));
    },
    setActiveConsole: (s) => e({ activeConsoleId: s }),
    setCaptureDevice: (s) => e({ captureDeviceId: s }),
    /** Start or stop a device's capture, and show it in the capture pane. */
    toggleCapture: (s) => {
      var a;
      const o = t().topology.devices.find((l) => l.id === s);
      o && (o.capturing = !o.capturing, t().ensureConsole("capture", "Packet Capture"), o.capturing ? (e({ captureDeviceId: s, activeConsoleId: "capture" }), t().log("system", `${o.hostname}: capture started on ${((a = o.interfaces[0]) == null ? void 0 : a.name) || "eth0"}.`, "success")) : t().log("system", `${o.hostname}: capture stopped.`, "dim"), t().commit());
    },
    closeConsole: (s) => {
      s === "system" || s === "attack" || s === "capture" || e((o) => ({
        consoles: o.consoles.filter((a) => a.id !== s),
        activeConsoleId: o.activeConsoleId === s ? "system" : o.activeConsoleId
      }));
    },
    clearConsole: (s) => {
      e((o) => ({ consoles: o.consoles.map((a) => a.id === s ? { ...a, lines: [] } : a) }));
    },
    /* -------------------------------------------------------- settings */
    updateSettings: (s) => {
      const o = { ...t().settings, ...s };
      e({ settings: o }), gy(o), s.theme && by(o.theme), s.speed !== void 0 && t().engine.setSpeed(o.speed), s.ambient !== void 0 && t().engine.setAmbient(o.ambient), s.coaching !== void 0 && t().engine.setCoaching(o.coaching);
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
        const a = t().topology.devices.find((l) => l.id === s);
        e({ pduFrom: s, selectedId: s }), t().log("system", `PDU: now click the destination (sending from ${a == null ? void 0 : a.hostname}).`, "dim");
        return;
      }
      if (o === s) {
        e({ pduFrom: null });
        return;
      }
      t().addSimplePdu(o, s), e({ pduFrom: null, selectedId: null });
    },
    addSimplePdu: (s, o) => {
      const { topology: a, engine: l } = t(), c = a.devices.find((p) => p.id === s), u = a.devices.find((p) => p.id === o);
      if (!c || !u) return null;
      const d = l.adjudicate(c, u.hostname);
      return !d.ok || !d.path ? (t().log("simulation", `PDU ${c.hostname} → ${u.hostname}: ${d.reason}`, "error"), t().commit(), null) : (l.emit(d.path, "icmp", { seq: 1 }), t().ensureConsole("simulation", "Simulation"), e({ activeConsoleId: "simulation" }), t().log("simulation", `PDU queued: ${c.hostname} → ${u.hostname} (${d.path.length - 1} hops).`, "success"), t().commit(), d);
    },
    /* ---------------------------------------------------------- grading */
    grade: ({ silent: s = !1 } = {}) => {
      const o = sr(t().labId), a = F0(o, t().topology, t().engine);
      if (e({ gradeResult: a, graded: !0 }), !s) {
        t().log(
          "system",
          `Check Solution: ${a.earned}/${a.total} points (${a.percent}%).`,
          a.complete ? "success" : "warn"
        ), a.complete && t().log("system", "All objectives met — lab complete.", "success");
        try {
          window.dispatchEvent(new CustomEvent("netrange:graded", { detail: { labId: o.id, result: a } }));
        } catch {
        }
      }
      return a;
    },
    setLab: (s) => e({ labId: s, gradeResult: null, graded: !1 }),
    /* ------------------------------------------------- load / save / reset */
    exportState: () => JSON.stringify({ version: 1, topology: t().topology, labId: t().labId }, null, 2),
    /** Restore the autosaved workspace, if there is one. Returns true if so. */
    restoreWorkspace: () => {
      const s = yy();
      if (!s || !s.topology.devices.length) return !1;
      e({
        topology: s.topology,
        labId: s.labId || t().labId,
        selectedId: null,
        selectedLinkId: null,
        graded: !1,
        gradeResult: null
      });
      const o = s.topology.devices.length;
      return t().log("system", `Restored your last workspace — ${o} device${o === 1 ? "" : "s"}.`, "dim"), e((a) => ({ rev: a.rev + 1 })), !0;
    },
    /** Forget the autosaved copy without touching what is on screen. */
    forgetSavedWorkspace: () => {
      vy(), t().log("system", "Saved workspace cleared from this browser.", "dim");
    },
    importState: (s) => {
      try {
        const o = typeof s == "string" ? JSON.parse(s) : s;
        if (!o || !o.topology) throw new Error("missing topology");
        return o.topology.zones || (o.topology.zones = []), t().pushHistory(), e({ topology: o.topology, labId: o.labId || t().labId, selectedId: null, graded: !1, gradeResult: null }), t().log("system", "Topology loaded.", "success"), t().commit(), !0;
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
        tc(s), s.runtime.compromised = !1, s.security.lockout = { failures: 0, lockedUntil: 0, locked: !1 };
        for (const o of Object.keys(s.arp)) s.arp[o].spoofed && delete s.arp[o];
      }
      t().log("system", "All nodes recovered; ARP caches flushed.", "success"), t().commit();
    },
    /* ------------------------------------------------------ demo scenario */
    loadStarterTopology: () => {
      const { addDevice: s, connect: o, topology: a } = t();
      if (a.devices.length) {
        t().log("system", "Clear the workspace first — the starter segment only loads onto an empty canvas.", "warn");
        return;
      }
      const l = s("router", 430, 90), c = s("switch", 430, 210), u = s("pc", 250, 330), d = s("webserver", 620, 330), p = s("accesspoint", 430, 420), h = s("laptop", 300, 520), f = s("camera", 520, 545), g = s("threatactor", 615, 470), j = (y, m) => {
        y.interfaces[0].ip = m, y.interfaces[0].mask = "255.255.255.0", y.interfaces[0].enabled = !0, y.gateway = "192.168.10.1";
      };
      j(l, "192.168.10.1"), l.gateway = "", j(u, "192.168.10.20"), j(d, "192.168.10.80"), j(p, "192.168.10.2"), j(h, "192.168.10.50"), j(f, "192.168.10.51"), j(g, "192.168.10.66"), h.security.username = "student", h.security.password = "Autumn2026", o(l.id, c.id, "straight"), o(c.id, u.id, "straight"), o(c.id, d.id, "straight"), o(c.id, p.id, "straight"), t().ensureConsole("attack", "Cyber Range"), t().ensureConsole("capture", "Packet Capture"), t().log(
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
function ky({ onTogglePalette: e, onToggleLab: t, onOpenAttack: n, onOpenSettings: r, onOpenSubnet: s, onOpenSocial: o, paletteOpen: a, labOpen: l }) {
  const c = b((A) => A.tool), u = b((A) => A.setTool), d = b((A) => A.undo), p = b((A) => A.redo), h = b((A) => A.past.length > 0), f = b((A) => A.future.length > 0), g = b((A) => A.toggleRunning), j = b((A) => A.recoverAll), y = b((A) => A.exportState), m = b((A) => A.importState), x = b((A) => A.engine), w = b((A) => A.setSimMode), k = b((A) => A.toggleTheme), C = b((A) => A.addZone), v = b((A) => A.openChallenge), $ = b((A) => A.challengePhase), T = b((A) => A.challengeDeadline), U = b((A) => A.tickChallenge), [L, Z] = es.useState(Date.now());
  es.useEffect(() => {
    if ($ === "idle") return;
    const A = setInterval(() => {
      Z(Date.now()), U();
    }, 1e3);
    return () => clearInterval(A);
  }, [$, U]);
  const J = b((A) => A.settings.theme), te = b((A) => A.stepPdu);
  b((A) => A.rev);
  const ee = b((A) => A.topology.devices.length), Ue = b((A) => (A.topology.personnel || []).length), I = x.running, we = x.mode, R = x.queuedPdu, N = () => {
    const A = new Blob([y()], { type: "application/json" }), X = URL.createObjectURL(A), Ne = document.createElement("a");
    Ne.href = X, Ne.download = "netrange-topology.json", Ne.click(), URL.revokeObjectURL(X);
  }, F = () => {
    const A = document.createElement("input");
    A.type = "file", A.accept = "application/json", A.onchange = () => {
      var be;
      const X = (be = A.files) == null ? void 0 : be[0];
      if (!X) return;
      const Ne = new FileReader();
      Ne.onload = () => m(String(Ne.result)), Ne.readAsText(X);
    }, A.click();
  };
  return /* @__PURE__ */ i.jsxs("header", { className: "flex flex-wrap items-center gap-2 border-b border-line bg-panel px-3 py-2", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "mr-1 flex items-center gap-2", children: [
      /* @__PURE__ */ i.jsx(
        "span",
        {
          className: "grid h-7 w-7 place-items-center rounded-lg text-white",
          style: { background: "conic-gradient(from 210deg, rgb(var(--nr-accent)), rgb(var(--nr-up)), rgb(var(--nr-accent)))" },
          children: /* @__PURE__ */ i.jsx(ys, { size: 15 })
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "leading-tight", children: [
        /* @__PURE__ */ i.jsx("div", { className: "text-[13px] font-bold", children: "NetRange Lab" }),
        /* @__PURE__ */ i.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-soft", children: "Simulated · offline" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex gap-1 rounded-xl border border-line bg-panel2 p-0.5", children: [
      /* @__PURE__ */ i.jsxs(_, { variant: c === "select" ? "active" : "ghost", size: "sm", onClick: () => u("select"), title: "Select / move (V)", children: [
        /* @__PURE__ */ i.jsx(u1, { size: 14 }),
        " Select"
      ] }),
      /* @__PURE__ */ i.jsxs(_, { variant: c === "cable" ? "active" : "ghost", size: "sm", onClick: () => u("cable"), title: "Cable (C)", children: [
        /* @__PURE__ */ i.jsx(Gg, { size: 14 }),
        " Cable"
      ] }),
      /* @__PURE__ */ i.jsx(_, { variant: c === "delete" ? "active" : "ghost", size: "sm", onClick: () => u("delete"), title: "Delete", children: /* @__PURE__ */ i.jsx(gt, { size: 14 }) }),
      /* @__PURE__ */ i.jsx(
        _,
        {
          variant: c === "pdu" ? "active" : "ghost",
          size: "sm",
          onClick: () => u("pdu"),
          title: "Simple PDU — click a sender, then a receiver (P)",
          children: /* @__PURE__ */ i.jsx(Vl, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex gap-1 rounded-xl border border-line bg-panel2 p-0.5", children: [
      /* @__PURE__ */ i.jsx(
        _,
        {
          variant: we === "realtime" ? "active" : "ghost",
          size: "sm",
          onClick: () => w("realtime"),
          title: "Transmissions play out immediately",
          children: "Realtime"
        }
      ),
      /* @__PURE__ */ i.jsx(
        _,
        {
          variant: we === "simulation" ? "active" : "ghost",
          size: "sm",
          onClick: () => w("simulation"),
          title: "Queue every hop so you can step through it and inspect each PDU",
          children: "Simulation"
        }
      )
    ] }),
    we === "simulation" && /* @__PURE__ */ i.jsxs(_, { variant: "outline", size: "sm", onClick: () => te(), title: "Advance one hop", children: [
      /* @__PURE__ */ i.jsx(Ql, { size: 14 }),
      " Step",
      R > 0 && /* @__PURE__ */ i.jsx("span", { className: "ml-1 rounded bg-accent/20 px-1 font-mono text-[10px]", children: R })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex gap-1 rounded-xl border border-line bg-panel2 p-0.5", children: [
      /* @__PURE__ */ i.jsx(_, { size: "sm", onClick: d, disabled: !h, title: "Undo (Ctrl+Z)", children: /* @__PURE__ */ i.jsx(w1, { size: 14 }) }),
      /* @__PURE__ */ i.jsx(_, { size: "sm", onClick: p, disabled: !f, title: "Redo (Ctrl+Y)", children: /* @__PURE__ */ i.jsx(g1, { size: 14 }) })
    ] }),
    /* @__PURE__ */ i.jsxs(_, { variant: "outline", size: "sm", onClick: () => g(), title: "Pause / resume (Space)", children: [
      I ? /* @__PURE__ */ i.jsx(h1, { size: 14 }) : /* @__PURE__ */ i.jsx(f1, { size: 14 }),
      " ",
      I ? "Pause" : "Run"
    ] }),
    /* @__PURE__ */ i.jsxs(
      _,
      {
        variant: "outline",
        size: "sm",
        onClick: v,
        title: "Red team vs blue team challenge",
        children: [
          /* @__PURE__ */ i.jsx(ys, { size: 14 }),
          " Challenge"
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(_, { variant: "danger", size: "sm", onClick: n, title: "Open the cyber range", children: [
      /* @__PURE__ */ i.jsx(sa, { size: 14 }),
      " Cyber Range"
    ] }),
    /* @__PURE__ */ i.jsxs(
      _,
      {
        variant: "outline",
        size: "sm",
        onClick: o,
        title: "The human layer — scripted technicians and social engineering",
        children: [
          /* @__PURE__ */ i.jsx(pr, { size: 14 }),
          " People",
          Ue > 0 && /* @__PURE__ */ i.jsx("span", { className: "ml-1 rounded bg-accent/20 px-1 font-mono text-[10px]", children: Ue })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      _,
      {
        variant: "outline",
        size: "sm",
        onClick: () => {
          const { w: A, h: X } = b.getState().canvasSize, Ne = b.getState().toWorld(A / 2, X / 2);
          C(Ne.x, Ne.y);
        },
        title: "Add a floor or building section",
        children: [
          /* @__PURE__ */ i.jsx(Lo, { size: 14 }),
          " Section"
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(_, { variant: "outline", size: "sm", onClick: j, title: "Clear attack damage and flush ARP caches", children: [
      /* @__PURE__ */ i.jsx(s1, { size: 14 }),
      " Recover"
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "flex-1" }),
    $ !== "idle" && /* @__PURE__ */ i.jsxs(se, { tone: $ === "breach" ? "down" : $ === "armed" ? "up" : "accent", children: [
      $ === "setup" ? "BUILD" : $ === "breach" ? "BREACH" : $.toUpperCase(),
      T ? ` ${Sy(T, L)}` : ""
    ] }),
    /* @__PURE__ */ i.jsxs(se, { tone: I ? "up" : "warn", children: [
      /* @__PURE__ */ i.jsx("span", { className: `h-2 w-2 rounded-full ${I ? "bg-up" : "bg-warn"}` }),
      I ? "RUNNING" : "PAUSED"
    ] }),
    /* @__PURE__ */ i.jsxs(se, { children: [
      ee,
      " node",
      ee === 1 ? "" : "s"
    ] }),
    /* @__PURE__ */ i.jsxs(se, { tone: "accent", className: "hidden sm:inline-flex", children: [
      "t+",
      (x.clock / 1e3).toFixed(1),
      "s"
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ i.jsx(_, { size: "sm", onClick: N, title: "Save topology as JSON", children: /* @__PURE__ */ i.jsx(y1, { size: 14 }) }),
      /* @__PURE__ */ i.jsx(_, { size: "sm", onClick: F, title: "Load topology JSON", children: /* @__PURE__ */ i.jsx(b1, { size: 14 }) }),
      /* @__PURE__ */ i.jsx(_, { variant: a ? "active" : "ghost", size: "sm", onClick: e, title: "Toggle palette", children: /* @__PURE__ */ i.jsx(d1, { size: 14 }) }),
      /* @__PURE__ */ i.jsx(_, { variant: l ? "active" : "ghost", size: "sm", onClick: t, title: "Toggle lab guide", children: /* @__PURE__ */ i.jsx(p1, { size: 14 }) }),
      /* @__PURE__ */ i.jsx(_, { size: "sm", onClick: s, title: "Subnet calculator", "aria-label": "Subnet calculator", children: /* @__PURE__ */ i.jsx(gh, { size: 14 }) }),
      /* @__PURE__ */ i.jsx(
        _,
        {
          size: "sm",
          onClick: k,
          title: J === "dark" ? "Switch to light mode" : "Switch to dark mode",
          "aria-label": "Toggle colour theme",
          children: J === "dark" ? /* @__PURE__ */ i.jsx(Xl, { size: 14 }) : /* @__PURE__ */ i.jsx(Gl, { size: 14 })
        }
      ),
      /* @__PURE__ */ i.jsx(_, { size: "sm", onClick: r, title: "Settings", children: /* @__PURE__ */ i.jsx(ra, { size: 14 }) })
    ] })
  ] });
}
function Sy(e, t) {
  const n = Math.max(0, Math.floor((e - t) / 1e3));
  return `${Math.floor(n / 60)}:${String(n % 60).padStart(2, "0")}`;
}
function jy({ name: e, size: t = 16 }) {
  const n = $s(e);
  return /* @__PURE__ */ i.jsx(n, { size: t });
}
function Ny({ onClose: e }) {
  const t = b((o) => o.addDevice), n = b((o) => o.cableType), r = b((o) => o.setCableType), s = b((o) => o.tool);
  return /* @__PURE__ */ i.jsxs("aside", { className: "w-[196px] shrink-0 overflow-y-auto border-r border-line bg-panel p-3", children: [
    t0.map((o) => /* @__PURE__ */ i.jsxs("section", { className: "mb-4", children: [
      /* @__PURE__ */ i.jsx(q, { children: o }),
      n0(o).map((a) => /* @__PURE__ */ i.jsxs(
        "button",
        {
          draggable: !0,
          onDragStart: (l) => {
            l.dataTransfer.setData("application/netrange-device", a.id), l.dataTransfer.effectAllowed = "copy";
          },
          onClick: () => t(a.id, 360 + Math.random() * 120, 220 + Math.random() * 120),
          title: `Drag onto the canvas, or click to place ${a.label}`,
          className: "mb-1.5 flex w-full items-center gap-2.5 rounded-lg border border-line bg-panel2 px-2.5 py-2 text-left text-[12.5px] font-semibold hover:border-accent hover:shadow-sm",
          children: [
            /* @__PURE__ */ i.jsx("span", { className: "grid h-7 w-7 shrink-0 place-items-center rounded-md border border-line bg-panel text-accent", children: /* @__PURE__ */ i.jsx(jy, { name: a.icon }) }),
            /* @__PURE__ */ i.jsx("span", { className: "min-w-0 truncate", children: a.label })
          ]
        },
        a.id
      ))
    ] }, o)),
    /* @__PURE__ */ i.jsxs("section", { children: [
      /* @__PURE__ */ i.jsx(q, { children: "Media" }),
      Object.values(Se).map((o) => {
        const a = s === "cable" && n === o.id;
        return /* @__PURE__ */ i.jsxs(
          "button",
          {
            onClick: () => r(o.id),
            title: o.hint,
            className: `mb-1.5 flex w-full items-center gap-2.5 rounded-lg border px-2.5 py-2 text-left text-[12px] font-semibold ${a ? "border-accent bg-accent/10" : "border-line bg-panel2 hover:border-accent"}`,
            children: [
              /* @__PURE__ */ i.jsx("span", { className: "grid h-7 w-7 shrink-0 place-items-center rounded-md border border-line bg-panel", children: /* @__PURE__ */ i.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", children: /* @__PURE__ */ i.jsx(
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
              /* @__PURE__ */ i.jsxs("span", { className: "min-w-0", children: [
                /* @__PURE__ */ i.jsx("span", { className: "block truncate", children: o.label }),
                /* @__PURE__ */ i.jsx("span", { className: "block font-mono text-[9.5px] text-soft", children: o.short })
              ] })
            ]
          },
          o.id
        );
      }),
      /* @__PURE__ */ i.jsxs("p", { className: "mt-2 text-[11px] leading-snug text-soft", children: [
        "Pick a cable, then click two devices. The wrong cable installs a",
        " ",
        /* @__PURE__ */ i.jsx("span", { className: "text-down", children: "red" }),
        " link so you can diagnose it."
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("button", { onClick: e, className: "mt-4 w-full rounded-lg border border-line py-1.5 text-[11px] text-soft hover:text-ink", children: "Hide palette" })
  ] });
}
const Cy = {
  ethernet: "▭",
  fiber: "◇",
  serial: "⬡",
  usb: "⬒",
  console: "⌸",
  wifi: "◉"
};
function $y() {
  const e = b((h) => h.portPicker), t = b((h) => h.choosePort), n = b((h) => h.closePortPicker), r = b((h) => h.cableType), s = b((h) => h.topology), o = b((h) => h.toScreen);
  if (b((h) => h.viewport), !e) return null;
  const a = s.devices.find((h) => h.id === e.deviceId);
  if (!a) return null;
  const l = Se[r], c = e.options.filter((h) => !h.disabled).length, u = o(a.x, a.y), d = Math.max(8, u.x + 46), p = Math.max(8, u.y - 24);
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "absolute z-30 w-[228px] overflow-hidden rounded-xl border border-line bg-panel shadow-2xl",
      style: { left: d, top: p },
      role: "dialog",
      "aria-label": `Choose a port on ${a.hostname}`,
      children: [
        /* @__PURE__ */ i.jsxs("header", { className: "border-b border-line px-2.5 py-2", children: [
          /* @__PURE__ */ i.jsx("div", { className: "text-[12px] font-bold leading-tight", children: a.hostname }),
          /* @__PURE__ */ i.jsxs("div", { className: "text-[10.5px] leading-snug text-soft", children: [
            c,
            " port",
            c === 1 ? "" : "s",
            " accept",
            c === 1 ? "s" : "",
            " ",
            /* @__PURE__ */ i.jsx("span", { style: { color: l == null ? void 0 : l.color }, children: l == null ? void 0 : l.short })
          ] })
        ] }),
        /* @__PURE__ */ i.jsx("ul", { className: "max-h-[232px] overflow-y-auto p-1", children: e.options.map((h) => {
          const f = Fn[h.media];
          return /* @__PURE__ */ i.jsx("li", { children: /* @__PURE__ */ i.jsxs(
            "button",
            {
              disabled: h.disabled,
              onClick: () => t(a.id, h.name),
              title: h.disabled ? h.reason : `Connect to ${h.name} (${h.mediaLabel})`,
              className: `flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left font-mono text-[11.5px] ${h.disabled ? "cursor-not-allowed text-soft/60" : "text-ink hover:bg-accent/15"}`,
              children: [
                /* @__PURE__ */ i.jsx(
                  "span",
                  {
                    className: "w-3.5 shrink-0 text-center",
                    style: { color: h.disabled || f == null ? void 0 : f.color },
                    "aria-hidden": "true",
                    children: Cy[h.media] || "▭"
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { className: "min-w-0 flex-1 truncate", children: h.name }),
                /* @__PURE__ */ i.jsx("span", { className: "shrink-0 text-[9.5px] uppercase tracking-wide text-soft", children: h.disabled ? h.reason : f == null ? void 0 : f.short })
              ]
            }
          ) }, h.name);
        }) }),
        /* @__PURE__ */ i.jsx("footer", { className: "border-t border-line px-2.5 py-1.5", children: /* @__PURE__ */ i.jsx("button", { onClick: n, className: "text-[11px] text-soft hover:text-ink", children: "Cancel" }) })
      ]
    }
  );
}
function Py() {
  const e = b((s) => s.contextMenu), t = b((s) => s.closeContextMenu), n = P.useRef(null);
  if (P.useEffect(() => {
    if (!e) return;
    const s = (a) => {
      n.current && !n.current.contains(a.target) && t();
    }, o = (a) => {
      a.key === "Escape" && t();
    };
    return window.addEventListener("pointerdown", s, !0), window.addEventListener("keydown", o), () => {
      window.removeEventListener("pointerdown", s, !0), window.removeEventListener("keydown", o);
    };
  }, [e, t]), !e) return null;
  const r = Ey(e);
  return r.length ? /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: n,
      className: "absolute z-40 min-w-[196px] overflow-hidden rounded-xl border border-line bg-panel py-1 shadow-2xl",
      style: { left: e.x, top: e.y },
      role: "menu",
      "aria-label": "Context menu",
      children: r.map(
        (s, o) => s.separator ? /* @__PURE__ */ i.jsx("div", { className: "my-1 h-px bg-line" }, `sep${o}`) : s.header ? /* @__PURE__ */ i.jsx("div", { className: "px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-soft", children: s.header }, `h${o}`) : /* @__PURE__ */ i.jsxs(
          "button",
          {
            role: "menuitem",
            disabled: s.disabled,
            onClick: () => {
              s.onClick(), t();
            },
            className: `flex w-full items-center gap-2.5 px-3 py-1.5 text-left text-[12.5px] ${s.disabled ? "cursor-not-allowed text-soft/50" : s.danger ? "text-down hover:bg-down/10" : "text-ink hover:bg-accent/15"}`,
            children: [
              /* @__PURE__ */ i.jsx("span", { className: "w-3.5 shrink-0 text-soft", children: s.icon }),
              /* @__PURE__ */ i.jsx("span", { className: "flex-1 truncate", children: s.label }),
              s.hint && /* @__PURE__ */ i.jsx("span", { className: "shrink-0 font-mono text-[9.5px] text-soft", children: s.hint })
            ]
          },
          s.label
        )
      )
    }
  ) : null;
}
function Ey(e, t) {
  const n = b.getState();
  if (e.kind === "canvas")
    return [
      {
        label: "Add floor / section here",
        icon: /* @__PURE__ */ i.jsx(Lo, { size: 13 }),
        onClick: () => n.addZone(e.world.x, e.world.y)
      },
      { separator: !0 },
      {
        label: "Fit everything in view",
        icon: /* @__PURE__ */ i.jsx(ql, { size: 13 }),
        hint: "F",
        onClick: () => n.fitView()
      },
      { label: "Reset zoom", icon: /* @__PURE__ */ i.jsx(ta, { size: 13 }), onClick: () => n.resetView() },
      { separator: !0 },
      {
        label: "Clear workspace",
        icon: /* @__PURE__ */ i.jsx(gt, { size: 13 }),
        danger: !0,
        disabled: n.topology.devices.length === 0 && (n.topology.zones || []).length === 0,
        onClick: () => n.resetTopology()
      }
    ];
  if (e.kind === "zone") {
    const a = (n.topology.zones || []).find((c) => c.id === e.id);
    if (!a) return [];
    const l = n.devicesInZone(a).length;
    return [
      { header: a.name },
      {
        label: "Rename section",
        icon: /* @__PURE__ */ i.jsx(Kl, { size: 13 }),
        // Not window.prompt: a sandboxed iframe without allow-modals silently
        // returns null, and an iframe is where this app is designed to live.
        onClick: () => n.startZoneRename(a.id)
      },
      {
        label: "Recolour",
        icon: /* @__PURE__ */ i.jsx(Lo, { size: 13 }),
        onClick: () => n.updateZone(a.id, { hue: (a.hue + 47) % 360 })
      },
      { separator: !0 },
      {
        label: "Delete section only",
        icon: /* @__PURE__ */ i.jsx(gt, { size: 13 }),
        danger: !0,
        onClick: () => n.removeZone(a.id, !1)
      },
      {
        label: `Delete with ${l} device${l === 1 ? "" : "s"}`,
        icon: /* @__PURE__ */ i.jsx(gt, { size: 13 }),
        danger: !0,
        disabled: l === 0,
        onClick: () => n.removeZone(a.id, !0)
      }
    ];
  }
  if (e.kind === "link") {
    const a = n.topology.links.find((u) => u.id === e.id);
    if (!a) return [];
    const l = n.topology.devices.find((u) => u.id === a.a), c = n.topology.devices.find((u) => u.id === a.b);
    return [
      { header: `${(l == null ? void 0 : l.hostname) || "?"} ${a.aPort} ⇄ ${(c == null ? void 0 : c.hostname) || "?"} ${a.bPort}` },
      {
        label: a.down ? "Link is down" : "Link is up",
        icon: /* @__PURE__ */ i.jsx(Wn, { size: 13 }),
        disabled: !0,
        onClick: () => {
        }
      },
      { separator: !0 },
      {
        label: "Remove cable",
        icon: /* @__PURE__ */ i.jsx(gt, { size: 13 }),
        danger: !0,
        onClick: () => n.removeLink(a.id)
      }
    ];
  }
  const r = n.topology.devices.find((a) => a.id === e.id);
  if (!r) return [];
  const s = Rn[r.typeId], o = [{ header: `${r.hostname} · ${(s == null ? void 0 : s.label) || r.role}` }];
  return o.push({
    label: "Open console",
    icon: /* @__PURE__ */ i.jsx(Yl, { size: 13 }),
    onClick: () => n.openDeviceConsole(r.id)
  }), o.push({
    label: "Configure…",
    icon: /* @__PURE__ */ i.jsx(ra, { size: 13 }),
    onClick: () => {
      var a;
      return ((a = n.openDeviceModal) == null ? void 0 : a.call(n, r.id)) ?? n.openDeviceConsole(r.id);
    }
  }), (r.role === "switch" || r.role === "l3switch") && (o.push({ separator: !0 }), o.push({
    label: "Show MAC address table",
    icon: /* @__PURE__ */ i.jsx(Wn, { size: 13 }),
    onClick: () => Gs(n, r, "show mac address-table")
  }), o.push({
    label: "Show VLAN brief",
    icon: /* @__PURE__ */ i.jsx(Wn, { size: 13 }),
    onClick: () => Gs(n, r, "show vlan brief")
  })), (r.role === "router" || r.role === "firewall" || r.role === "l3switch") && (o.push({ separator: !0 }), o.push({
    label: "Show IP route",
    icon: /* @__PURE__ */ i.jsx(Wn, { size: 13 }),
    onClick: () => Gs(n, r, "show ip route")
  }), o.push({
    label: "Show interface brief",
    icon: /* @__PURE__ */ i.jsx(Wn, { size: 13 }),
    onClick: () => Gs(n, r, "show ip interface brief")
  })), r.ap && (o.push({ separator: !0 }), o.push({
    label: r.ap.enabled ? "Switch radio off" : "Switch radio on",
    icon: r.ap.enabled ? /* @__PURE__ */ i.jsx(Ah, { size: 13 }) : /* @__PURE__ */ i.jsx(Ih, { size: 13 }),
    onClick: () => n.updateDevice(r.id, (a) => {
      a.ap.enabled = !a.ap.enabled;
    })
  })), r.radio && (o.push({ separator: !0 }), o.push({
    label: r.radio.monitorMode ? "Leave monitor mode" : "Enter monitor mode",
    icon: /* @__PURE__ */ i.jsx(Di, { size: 13 }),
    onClick: () => n.updateDevice(r.id, (a) => {
      a.radio.monitorMode = !a.radio.monitorMode;
    })
  })), o.push({ separator: !0 }), o.push({
    label: r.capturing ? "Stop capture here" : "Capture from here",
    icon: /* @__PURE__ */ i.jsx(Di, { size: 13 }),
    onClick: () => n.toggleCapture(r.id)
  }), o.push({
    label: "Send a PDU from here",
    icon: /* @__PURE__ */ i.jsx(Vl, { size: 13 }),
    hint: "P",
    onClick: () => {
      n.setTool("pdu"), n.pduClick(r.id);
    }
  }), r.role === "attacker" && o.push({
    label: "Open the cyber range",
    icon: /* @__PURE__ */ i.jsx(sa, { size: 13 }),
    onClick: () => {
      var a;
      return (a = n.openAttackPanel) == null ? void 0 : a.call(n, r.id);
    }
  }), o.push({ separator: !0 }), o.push({
    label: "Duplicate",
    icon: /* @__PURE__ */ i.jsx(Ul, { size: 13 }),
    hint: "⌘D",
    onClick: () => n.duplicateDevice(r.id)
  }), o.push({
    label: "Delete device",
    icon: /* @__PURE__ */ i.jsx(gt, { size: 13 }),
    danger: !0,
    hint: "Del",
    onClick: () => n.removeDevice(r.id)
  }), o;
}
function Gs(e, t, n) {
  var r;
  e.openDeviceConsole(t.id), (r = e.queueConsoleCommand) == null || r.call(e, t.id, n);
}
const dt = 76, Wt = 58, Ks = 11;
function Ty({ onOpenDevice: e }) {
  const t = P.useRef(null), n = P.useRef(null), r = P.useRef(null), s = b((S) => S.topology), o = b((S) => S.rev), a = b((S) => S.engine), l = b((S) => S.tool), c = b((S) => S.cableType), u = b((S) => S.selectedId), d = b((S) => S.selectedLinkId), p = b((S) => S.pendingCableFrom), h = b((S) => S.settings), f = b((S) => S.select), g = b((S) => S.selectLink), j = b((S) => S.clearSelection), y = b((S) => S.moveDevice), m = b((S) => S.pushHistory), x = b((S) => S.removeDevice), w = b((S) => S.removeLink), k = b((S) => S.cableClick), C = b((S) => S.pduClick), v = b((S) => S.pduFrom), $ = b((S) => S.viewport), T = b((S) => S.panBy), U = b((S) => S.zoomAt), L = b((S) => S.resetView), Z = b((S) => S.fitView), J = b((S) => S.topology.zones), te = b((S) => S.selectedZoneId), ee = b((S) => S.selectZone), Ue = b((S) => S.moveZone), I = b((S) => S.updateZone), we = b((S) => S.devicesInZone), R = b((S) => S.openContextMenu), N = b((S) => S.startZoneRename), F = b((S) => S.setCanvasSize), A = b((S) => S.closeContextMenu), X = b((S) => S.addDevice), Ne = b((S) => S.openDeviceConsole), [be, gn] = P.useState(null), [nt, Ht] = P.useState(null), [Ut, Ps] = P.useState(null), xn = P.useMemo(
    () => new Map(s.devices.map((S) => [S.id, S])),
    [s.devices, o]
  ), yn = P.useCallback((S) => {
    const D = n.current, H = t.current;
    if (!D || !H) return { x: 0, y: 0 };
    const B = H.createSVGPoint();
    B.x = S.clientX, B.y = S.clientY;
    const ce = D.getScreenCTM();
    return ce ? B.matrixTransform(ce.inverse()) : { x: 0, y: 0 };
  }, []), cf = P.useCallback((S) => {
    var H;
    const D = (H = r.current) == null ? void 0 : H.getBoundingClientRect();
    return D ? { x: S.clientX - D.left, y: S.clientY - D.top } : { x: 0, y: 0 };
  }, []), uf = (S, D) => {
    var B, ce;
    if (S.stopPropagation(), l === "delete") {
      x(D.id);
      return;
    }
    if (l === "cable") {
      k(D.id);
      return;
    }
    if (l === "pdu") {
      C(D.id);
      return;
    }
    f(D.id);
    const H = yn(S);
    gn({ id: D.id, dx: D.x - H.x, dy: D.y - H.y, moved: !1 }), (ce = (B = S.currentTarget).setPointerCapture) == null || ce.call(B, S.pointerId);
  }, df = (S) => {
    if (nt) {
      T(S.clientX - nt.x, S.clientY - nt.y), Ht({ x: S.clientX, y: S.clientY });
      return;
    }
    if (Ut) {
      const Re = yn(S), De = Re.x - Ut.lastX, ze = Re.y - Ut.lastY;
      if (De || ze) {
        if (Ut.resize) {
          const vn = (J || []).find((ca) => ca.id === Ut.id);
          vn && I(vn.id, { w: Math.max(140, vn.w + De), h: Math.max(110, vn.h + ze) });
        } else
          Ue(Ut.id, De, ze, Ut.carried);
        Ps({ ...Ut, lastX: Re.x, lastY: Re.y });
      }
      return;
    }
    if (!be) return;
    const D = yn(S), H = Math.round((D.x + be.dx) / Ks) * Ks, B = Math.round((D.y + be.dy) / Ks) * Ks, ce = xn.get(be.id);
    ce && (ce.x !== H || ce.y !== B) && (be.moved || (m(), gn({ ...be, moved: !0 })), y(be.id, H, B));
  }, lc = () => {
    gn(null), Ht(null), Ps(null);
  }, pf = (S) => {
    var D, H;
    A(), j(), S.button === 0 && (Ht({ x: S.clientX, y: S.clientY }), (H = (D = S.currentTarget).setPointerCapture) == null || H.call(D, S.pointerId));
  }, Un = (S, D) => {
    S.preventDefault(), S.stopPropagation();
    const H = cf(S);
    R({ ...D, x: H.x, y: H.y, world: yn(S) });
  }, hf = (S) => {
    S.preventDefault();
    const D = S.dataTransfer.getData("application/netrange-device");
    if (!D) return;
    const H = yn(S);
    X(D, H.x, H.y);
  };
  P.useEffect(() => {
    const S = r.current;
    if (!S || typeof ResizeObserver > "u") return;
    const D = new ResizeObserver(([H]) => {
      const { width: B, height: ce } = H.contentRect;
      F(B, ce);
    });
    return D.observe(S), () => D.disconnect();
  }, [F]), P.useEffect(() => {
    const S = r.current;
    if (!S) return;
    const D = (H) => {
      H.preventDefault();
      const B = S.getBoundingClientRect();
      U(H.deltaY < 0 ? 1.12 : 1 / 1.12, H.clientX - B.left, H.clientY - B.top);
    };
    return S.addEventListener("wheel", D, { passive: !1 }), () => S.removeEventListener("wheel", D);
  }, [U]);
  const ff = a.packets;
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: r,
      className: `relative min-h-0 flex-1 overflow-hidden ${h.showGrid ? "nr-grid" : ""}`,
      onDragOver: (S) => S.preventDefault(),
      onDrop: hf,
      children: [
        /* @__PURE__ */ i.jsx(
          "svg",
          {
            ref: t,
            className: `h-full w-full touch-none ${nt ? "cursor-grabbing" : ""}`,
            onPointerMove: df,
            onPointerUp: lc,
            onPointerLeave: lc,
            onPointerDown: pf,
            onContextMenu: (S) => Un(S, { kind: "canvas" }),
            role: "application",
            "aria-label": "Network topology workspace",
            children: /* @__PURE__ */ i.jsxs(
              "g",
              {
                ref: n,
                transform: `translate(${$.x},${$.y}) scale(${$.zoom})`,
                children: [
                  /* @__PURE__ */ i.jsx("g", { children: (J || []).map((S) => {
                    const D = te === S.id, H = `hsl(${S.hue} 70% 55%)`;
                    return /* @__PURE__ */ i.jsxs("g", { children: [
                      /* @__PURE__ */ i.jsx(
                        "rect",
                        {
                          x: S.x,
                          y: S.y,
                          width: S.w,
                          height: S.h,
                          rx: 14,
                          fill: H,
                          fillOpacity: D ? 0.1 : 0.055,
                          stroke: H,
                          strokeOpacity: D ? 0.9 : 0.45,
                          strokeWidth: D ? 2 : 1.5,
                          strokeDasharray: "10 6",
                          className: "cursor-move",
                          onPointerDown: (B) => {
                            var Re, De;
                            B.stopPropagation(), A(), ee(S.id);
                            const ce = yn(B);
                            Ps({ id: S.id, lastX: ce.x, lastY: ce.y, carried: we(S) }), (De = (Re = B.currentTarget).setPointerCapture) == null || De.call(Re, B.pointerId);
                          },
                          onContextMenu: (B) => Un(B, { kind: "zone", id: S.id })
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "rect",
                        {
                          x: S.x + 8,
                          y: S.y + 10,
                          width: Math.max(42, S.name.length * 7.1 + 14),
                          height: 18,
                          rx: 5,
                          fill: "rgb(var(--nr-panel))",
                          fillOpacity: 0.82,
                          stroke: H,
                          strokeOpacity: 0.35,
                          className: "cursor-text",
                          onPointerDown: (B) => B.stopPropagation(),
                          onDoubleClick: (B) => {
                            B.stopPropagation(), N(S.id);
                          },
                          onContextMenu: (B) => Un(B, { kind: "zone", id: S.id })
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "text",
                        {
                          x: S.x + 14,
                          y: S.y + 22,
                          fontSize: "12",
                          fontWeight: "600",
                          fontFamily: "ui-monospace, monospace",
                          fill: H,
                          opacity: 0.95,
                          className: "cursor-text select-none",
                          role: "button",
                          "aria-label": `Rename section ${S.name}`,
                          onPointerDown: (B) => B.stopPropagation(),
                          onDoubleClick: (B) => {
                            B.stopPropagation(), N(S.id);
                          },
                          onContextMenu: (B) => Un(B, { kind: "zone", id: S.id }),
                          children: S.name
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "rect",
                        {
                          x: S.x + S.w - 16,
                          y: S.y + S.h - 16,
                          width: 14,
                          height: 14,
                          rx: 3,
                          fill: H,
                          fillOpacity: 0.55,
                          className: "cursor-nwse-resize",
                          onPointerDown: (B) => {
                            var Re, De;
                            B.stopPropagation();
                            const ce = yn(B);
                            Ps({ id: S.id, lastX: ce.x, lastY: ce.y, resize: !0, carried: [] }), (De = (Re = B.currentTarget).setPointerCapture) == null || De.call(Re, B.pointerId);
                          }
                        }
                      )
                    ] }, S.id);
                  }) }),
                  /* @__PURE__ */ i.jsx("g", { children: Er(s).map((S) => {
                    const D = !le[S.ap.security] || !le[S.ap.security].encrypted, H = S.ap.rogue ? "rgb(var(--nr-down))" : D ? "rgb(var(--nr-warn))" : "rgb(var(--nr-accent))";
                    return /* @__PURE__ */ i.jsxs("g", { pointerEvents: "none", children: [
                      /* @__PURE__ */ i.jsx(
                        "circle",
                        {
                          cx: S.x,
                          cy: S.y,
                          r: S.ap.range,
                          fill: H,
                          fillOpacity: 0.045,
                          stroke: H,
                          strokeOpacity: 0.35,
                          strokeWidth: 1.25,
                          strokeDasharray: "6 7"
                        }
                      ),
                      /* @__PURE__ */ i.jsxs(
                        "text",
                        {
                          x: S.x,
                          y: S.y - S.ap.range + 15,
                          textAnchor: "middle",
                          fontSize: "10",
                          fontFamily: "ui-monospace, monospace",
                          fill: H,
                          opacity: 0.85,
                          children: [
                            S.ap.ssid,
                            " · ",
                            D ? "OPEN" : S.ap.security.toUpperCase(),
                            S.ap.rogue ? " · ROGUE" : ""
                          ]
                        }
                      )
                    ] }, `rf-${S.id}`);
                  }) }),
                  /* @__PURE__ */ i.jsx("g", { children: Wh(s).map((S) => {
                    var De, ze;
                    const D = xn.get(S.a), H = xn.get(S.b);
                    if (!D || !H) return null;
                    const B = le[S.security] && le[S.security].encrypted, Re = ((ze = (De = xn.get(S.b)) == null ? void 0 : De.ap) == null ? void 0 : ze.rogue) ? "rgb(var(--nr-down))" : B ? "rgb(var(--nr-up))" : "rgb(var(--nr-warn))";
                    return /* @__PURE__ */ i.jsxs("g", { pointerEvents: "none", children: [
                      /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: D.x,
                          y1: D.y,
                          x2: H.x,
                          y2: H.y,
                          stroke: Re,
                          strokeWidth: 2,
                          strokeDasharray: "3 7",
                          strokeLinecap: "round",
                          opacity: 0.85
                        }
                      ),
                      /* @__PURE__ */ i.jsxs(
                        "text",
                        {
                          x: (D.x + H.x) / 2,
                          y: (D.y + H.y) / 2 - 5,
                          textAnchor: "middle",
                          fontSize: "9",
                          fontFamily: "ui-monospace, monospace",
                          fill: Re,
                          opacity: 0.9,
                          children: [
                            S.dbm,
                            " dBm ",
                            B ? "🔒" : "⚠"
                          ]
                        }
                      )
                    ] }, S.id);
                  }) }),
                  /* @__PURE__ */ i.jsx("g", { children: s.links.map((S) => {
                    const D = xn.get(S.a), H = xn.get(S.b);
                    if (!D || !H) return null;
                    const B = Se[S.cableType] || Se.straight, ce = S.down, Re = ce ? "rgb(var(--nr-down))" : B.color, De = d === S.id;
                    return /* @__PURE__ */ i.jsxs("g", { children: [
                      /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: D.x,
                          y1: D.y,
                          x2: H.x,
                          y2: H.y,
                          stroke: De ? "rgb(var(--nr-accent))" : Re,
                          strokeWidth: De ? 4.5 : 3,
                          strokeLinecap: "round",
                          strokeDasharray: ce ? "7 6" : B.dash || void 0
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "line",
                        {
                          x1: D.x,
                          y1: D.y,
                          x2: H.x,
                          y2: H.y,
                          stroke: "transparent",
                          strokeWidth: 16,
                          className: "cursor-pointer",
                          onPointerDown: (ze) => {
                            ze.stopPropagation(), A(), l === "delete" ? w(S.id) : g(S.id);
                          },
                          onContextMenu: (ze) => Un(ze, { kind: "link", id: S.id }),
                          children: /* @__PURE__ */ i.jsxs("title", { children: [
                            B.label,
                            ce ? ` — DOWN: ${S.reason}` : " — up"
                          ] })
                        }
                      ),
                      [[D, H], [H, D]].map(([ze, vn], ca) => /* @__PURE__ */ i.jsx(
                        "circle",
                        {
                          cx: ze.x + (vn.x - ze.x) * 0.26,
                          cy: ze.y + (vn.y - ze.y) * 0.26,
                          r: 3.6,
                          fill: ce ? "rgb(var(--nr-down))" : "rgb(var(--nr-up))",
                          stroke: "rgb(var(--nr-panel))",
                          strokeWidth: "1"
                        },
                        ca
                      ))
                    ] }, S.id);
                  }) }),
                  /* @__PURE__ */ i.jsx("g", { children: ff.map((S) => {
                    const D = a.positionOf(S, xn);
                    if (!D) return null;
                    const H = Eu[S.kind] || Eu.icmp;
                    return /* @__PURE__ */ i.jsxs("g", { children: [
                      /* @__PURE__ */ i.jsx("circle", { cx: D.x, cy: D.y, r: 7, fill: H.color, opacity: 0.22 }),
                      /* @__PURE__ */ i.jsx("circle", { cx: D.x, cy: D.y, r: 3.8, fill: H.color })
                    ] }, S.id);
                  }) }),
                  /* @__PURE__ */ i.jsx("g", { children: s.devices.map((S) => /* @__PURE__ */ i.jsx(
                    Ay,
                    {
                      device: S,
                      selected: u === S.id,
                      armed: p === S.id || v === S.id,
                      showLabel: h.showLabels,
                      onPointerDown: (D) => uf(D, S),
                      onContextMenu: (D) => Un(D, { kind: "device", id: S.id }),
                      onDoubleClick: (D) => {
                        D.stopPropagation(), e(S.id), Ne(S.id);
                      }
                    },
                    S.id
                  )) })
                ]
              }
            )
          }
        ),
        s.devices.length === 0 && /* @__PURE__ */ i.jsx("div", { className: "pointer-events-none absolute inset-0 grid place-items-center p-6 text-center", children: /* @__PURE__ */ i.jsx("p", { className: "max-w-xs text-[13px] leading-relaxed text-soft", children: "Drag a device from the palette, then pick a cable and click two devices to wire them. Double-click any node for its configuration and console." }) }),
        /* @__PURE__ */ i.jsx($y, {}),
        /* @__PURE__ */ i.jsx(Py, {}),
        /* @__PURE__ */ i.jsxs("div", { className: "absolute bottom-3 right-3 flex items-center gap-1 rounded-xl border border-line bg-panel/90 p-1 shadow-lg backdrop-blur", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              onClick: () => {
                var S, D;
                return U(1 / 1.2, (((S = r.current) == null ? void 0 : S.clientWidth) || 0) / 2, (((D = r.current) == null ? void 0 : D.clientHeight) || 0) / 2);
              },
              title: "Zoom out",
              "aria-label": "Zoom out",
              className: "grid h-7 w-7 place-items-center rounded-lg text-soft hover:bg-panel2 hover:text-ink",
              children: /* @__PURE__ */ i.jsx(Nh, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              onClick: () => L(),
              title: "Reset zoom to 100%",
              className: "min-w-[48px] rounded-lg px-1 font-mono text-[11px] text-soft hover:bg-panel2 hover:text-ink",
              children: [
                Math.round($.zoom * 100),
                "%"
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              onClick: () => {
                var S, D;
                return U(1.2, (((S = r.current) == null ? void 0 : S.clientWidth) || 0) / 2, (((D = r.current) == null ? void 0 : D.clientHeight) || 0) / 2);
              },
              title: "Zoom in",
              "aria-label": "Zoom in",
              className: "grid h-7 w-7 place-items-center rounded-lg text-soft hover:bg-panel2 hover:text-ink",
              children: /* @__PURE__ */ i.jsx(Ph, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx("span", { className: "mx-0.5 h-5 w-px bg-line" }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              onClick: () => Z(),
              title: "Fit everything in view (F)",
              "aria-label": "Fit to content",
              className: "grid h-7 w-7 place-items-center rounded-lg text-soft hover:bg-panel2 hover:text-ink",
              children: /* @__PURE__ */ i.jsx(ql, { size: 13 })
            }
          )
        ] }),
        l === "pdu" && /* @__PURE__ */ i.jsxs("div", { className: "pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-accent/50 bg-panel/90 px-3 py-1.5 font-mono text-[11px] text-accent shadow", children: [
          "Simple PDU — ",
          v ? "click the destination" : "click the sender"
        ] }),
        l === "cable" && /* @__PURE__ */ i.jsxs("div", { className: "pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-accent/50 bg-panel/90 px-3 py-1.5 font-mono text-[11px] text-accent shadow", children: [
          Se[c].label,
          " — ",
          p ? "click the far end" : "click the first device"
        ] })
      ]
    }
  );
}
function Ay({ device: e, selected: t, armed: n, showLabel: r, onPointerDown: s, onDoubleClick: o, onContextMenu: a }) {
  const l = Rn[e.typeId], c = $s(l == null ? void 0 : l.icon), u = O(e), d = e.runtime, p = t || n ? "rgb(var(--nr-accent))" : "rgb(var(--nr-line))", h = d.cpu > 70;
  return /* @__PURE__ */ i.jsxs(
    "g",
    {
      transform: `translate(${e.x},${e.y})`,
      onPointerDown: s,
      onDoubleClick: o,
      onContextMenu: a,
      className: "cursor-grab",
      tabIndex: 0,
      role: "button",
      "aria-label": `${e.hostname}, ${l == null ? void 0 : l.label}, ${u || "no address"}`,
      children: [
        /* @__PURE__ */ i.jsx("title", { children: `${e.hostname} — ${l == null ? void 0 : l.label}
${u || "no address"}
double-click to configure` }),
        /* @__PURE__ */ i.jsx(
          "rect",
          {
            x: -dt / 2,
            y: -Wt / 2,
            width: dt,
            height: Wt,
            rx: 13,
            fill: "rgb(var(--nr-panel))",
            stroke: p,
            strokeWidth: t || n ? 2.5 : 1.5
          }
        ),
        (d.compromised || d.unresponsive) && /* @__PURE__ */ i.jsx(
          "rect",
          {
            x: -dt / 2,
            y: -Wt / 2,
            width: dt,
            height: 4,
            rx: 2,
            fill: "rgb(var(--nr-down))"
          }
        ),
        /* @__PURE__ */ i.jsx("g", { transform: "translate(-9,-22)", color: "rgb(var(--nr-accent))", children: /* @__PURE__ */ i.jsx(c, { size: 18 }) }),
        r && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("text", { y: 13, textAnchor: "middle", fontSize: "11", fontWeight: "600", fill: "rgb(var(--nr-ink))", children: e.hostname }),
          /* @__PURE__ */ i.jsx("text", { y: 24, textAnchor: "middle", fontSize: "9.5", fontFamily: "ui-monospace, monospace", fill: "rgb(var(--nr-soft))", children: u || "—" })
        ] }),
        Object.values(e.services).some(Boolean) && /* @__PURE__ */ i.jsx(
          "circle",
          {
            cx: dt / 2 - 9,
            cy: -Wt / 2 + 10,
            r: 3.5,
            fill: d.unresponsive ? "rgb(var(--nr-down))" : h ? "rgb(var(--nr-warn))" : "rgb(var(--nr-up))"
          }
        ),
        e.capturing && /* @__PURE__ */ i.jsxs("g", { transform: `translate(${-dt / 2 + 7},${-Wt / 2 + 7})`, children: [
          /* @__PURE__ */ i.jsx("circle", { r: 4.5, fill: "rgb(var(--nr-down))", opacity: 0.25 }),
          /* @__PURE__ */ i.jsx("circle", { r: 2.5, fill: "rgb(var(--nr-down))" }),
          /* @__PURE__ */ i.jsx("text", { x: 8, y: 3, fontSize: "7.5", fontFamily: "ui-monospace, monospace", fill: "rgb(var(--nr-down))", children: e.radio && e.radio.monitorMode ? "MON" : "CAP" })
        ] }),
        d.underAttack && /* @__PURE__ */ i.jsx(
          "rect",
          {
            x: -dt / 2 - 4,
            y: -Wt / 2 - 4,
            width: dt + 8,
            height: Wt + 8,
            rx: 16,
            fill: "none",
            stroke: "rgb(var(--nr-down))",
            strokeWidth: "1.5",
            strokeDasharray: "5 4",
            opacity: "0.9"
          }
        ),
        d.cpu > 10 && /* @__PURE__ */ i.jsxs("g", { transform: `translate(${-dt / 2 + 8},${Wt / 2 - 7})`, children: [
          /* @__PURE__ */ i.jsx("rect", { width: dt - 16, height: 3, rx: 1.5, fill: "rgb(var(--nr-line))" }),
          /* @__PURE__ */ i.jsx(
            "rect",
            {
              width: (dt - 16) * Math.min(100, d.cpu) / 100,
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
const Bu = {
  info: "text-[rgb(var(--nr-term-fg))]",
  success: "text-emerald-400",
  error: "text-rose-400",
  warn: "text-amber-300",
  dim: "text-slate-500"
};
function Iy({ consoleId: e }) {
  const t = b((v) => v.consoles), n = b((v) => v.topology), r = b((v) => v.engine), s = b((v) => v.log), o = b((v) => v.commit), a = b((v) => v.clearConsole), l = b((v) => v.ensureConsole), c = b((v) => v.setActiveConsole), u = b((v) => v.rev), d = t.find((v) => v.id === e), p = d != null && d.deviceId ? n.devices.find((v) => v.id === d.deviceId) : null, [h, f] = P.useState(""), [g, j] = P.useState([]), [y, m] = P.useState(-1), x = P.useRef(null), w = P.useRef(null);
  if (P.useEffect(() => {
    const v = x.current;
    v && (v.scrollTop = v.scrollHeight);
  }, [d == null ? void 0 : d.lines.length, u]), !d) return null;
  const k = () => {
    const v = h;
    if (f(""), !p)
      return;
    const $ = zu(p, n);
    s(e, Bi(p, n) + ($ ? "" : v), "info"), v.trim() && ($ || j((T) => [...T, v]), m(-1), nf(p, v, {
      engine: r,
      topology: n,
      channel: e,
      log: (T, U = "info") => s(e, T, U),
      commit: o,
      clearConsole: () => a(e),
      // Lets a command bring another panel forward — the offensive tools
      // write their output to the Cyber Range channel.
      focusChannel: (T) => {
        l(T, T === "attack" ? "Cyber Range" : "Packet Capture"), c(T);
      }
    }));
  }, C = (v) => {
    if (v.key === "Enter") {
      v.preventDefault(), k();
      return;
    }
    if (v.key === "ArrowUp") {
      if (v.preventDefault(), !g.length) return;
      const $ = y < 0 ? g.length - 1 : Math.max(0, y - 1);
      m($), f(g[$]);
      return;
    }
    if (v.key === "ArrowDown") {
      if (v.preventDefault(), y < 0) return;
      const $ = y + 1;
      $ >= g.length ? (m(-1), f("")) : (m($), f(g[$]));
      return;
    }
    v.key === "l" && v.ctrlKey && (v.preventDefault(), a(e));
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: x,
      className: "nr-term h-full overflow-y-auto px-3 py-2 font-mono text-[12px] leading-[1.55]",
      onClick: () => {
        var v;
        return (v = w.current) == null ? void 0 : v.focus();
      },
      children: [
        d.lines.map((v, $) => /* @__PURE__ */ i.jsx("div", { className: `whitespace-pre-wrap break-words ${Bu[v.level] || Bu.info}`, children: v.text }, $)),
        p ? /* @__PURE__ */ i.jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ i.jsx("span", { className: "whitespace-pre text-emerald-400", children: Bi(p, n) }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: w,
              value: h,
              onChange: (v) => f(v.target.value),
              onKeyDown: C,
              type: zu(p, n) ? "password" : "text",
              spellCheck: !1,
              autoComplete: "off",
              autoCapitalize: "off",
              "aria-label": `Command input for ${p.hostname}`,
              className: "min-w-0 flex-1 bg-transparent font-mono text-[12px] text-[rgb(var(--nr-term-fg))] outline-none"
            }
          )
        ] }) : /* @__PURE__ */ i.jsx("div", { className: "text-slate-600", children: e === "attack" ? "— cyber range output appears here —" : "— system messages appear here —" })
      ]
    }
  );
}
const My = ["", "wlan", "plaintext", "encrypted", "http", "icmp", "arp", "dns"];
function Ly() {
  const e = b((k) => k.engine), t = b((k) => k.topology), n = b((k) => k.rev), r = b((k) => k.commit), s = b((k) => k.captureDeviceId), o = b((k) => k.setCaptureDevice), [a, l] = P.useState(""), [c, u] = P.useState(null), [d, p] = P.useState({ frame: !1, eth: !0, dot11: !0, ip: !0, tcp: !0, udp: !0, icmp: !0, arp: !0, payload: !0 }), [h, f] = P.useState(null), g = t.devices.filter((k) => k.capturing || k.promiscuous || k.radio && k.radio.monitorMode), j = P.useMemo(() => e.capture.for(s || null).filter((C) => Xh(C, a)), [e, s, a, n]), y = j.find((k) => k.number === c) || j[j.length - 1] || null, m = y ? L0(y.bytes) : [], x = t.devices.find((k) => k.id === s), w = () => {
    const k = new Blob([R0(j)], { type: "text/plain" }), C = URL.createObjectURL(k), v = document.createElement("a");
    v.href = C, v.download = "netrange-capture.txt", v.click(), URL.revokeObjectURL(C);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "flex h-full flex-col bg-[rgb(var(--nr-term-bg))] text-[rgb(var(--nr-term-fg))]", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex flex-wrap items-center gap-2 border-b border-white/10 px-2.5 py-1.5", children: [
      /* @__PURE__ */ i.jsxs("label", { className: "flex items-center gap-1.5 text-[11px] text-slate-400", children: [
        /* @__PURE__ */ i.jsx(ta, { size: 12 }),
        "Interface",
        /* @__PURE__ */ i.jsxs(
          "select",
          {
            value: s || "",
            onChange: (k) => o(k.target.value || null),
            className: "rounded border border-white/15 bg-white/5 px-1.5 py-1 font-mono text-[11px] text-slate-100 outline-none",
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "", children: "All vantage points" }),
              g.map((k) => /* @__PURE__ */ i.jsxs("option", { value: k.id, children: [
                k.hostname,
                " ",
                k.radio && k.radio.monitorMode ? "(monitor)" : "(promisc)"
              ] }, k.id))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("span", { className: "flex min-w-[180px] flex-1 items-center gap-1.5 rounded border border-white/15 bg-white/5 px-2", children: [
        /* @__PURE__ */ i.jsx(kh, { size: 12, className: "shrink-0 text-slate-500" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            value: a,
            onChange: (k) => l(k.target.value),
            placeholder: "display filter — e.g. http, wlan and plaintext, ip.addr == 192.168.10.50",
            "aria-label": "Display filter",
            className: "min-w-0 flex-1 bg-transparent py-1 font-mono text-[11px] text-slate-100 outline-none placeholder:text-slate-600"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "flex gap-1", children: My.filter(Boolean).slice(0, 4).map((k) => /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => l(a === k ? "" : k),
          className: `rounded px-1.5 py-1 font-mono text-[10px] ${a === k ? "bg-emerald-500/25 text-emerald-300" : "bg-white/5 text-slate-400 hover:text-slate-200"}`,
          children: k
        },
        k
      )) }),
      /* @__PURE__ */ i.jsxs("span", { className: "font-mono text-[10.5px] text-slate-500", children: [
        j.length,
        " / ",
        e.capture.frames.length,
        " frames"
      ] }),
      /* @__PURE__ */ i.jsx("button", { onClick: w, title: "Export the filtered list as text", className: "rounded p-1 text-slate-400 hover:text-slate-100", children: /* @__PURE__ */ i.jsx(Bl, { size: 13 }) }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => {
            e.capture.clear(), u(null), r();
          },
          title: "Clear the capture buffer",
          className: "rounded p-1 text-slate-400 hover:text-slate-100",
          children: /* @__PURE__ */ i.jsx(gt, { size: 13 })
        }
      )
    ] }),
    j.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "flex flex-1 items-center justify-center p-6 text-center", children: /* @__PURE__ */ i.jsx("div", { className: "max-w-md text-[12px] leading-relaxed text-slate-500", children: e.capture.frames.length === 0 ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("p", { className: "mb-2 text-slate-300", children: "No frames captured yet." }),
      /* @__PURE__ */ i.jsxs("p", { children: [
        "Generate traffic (ping from a host), then capture it. On switched Ethernet a bystander sees almost nothing — that is the point. Put a Threat Actor in monitor mode near an access point and run ",
        /* @__PURE__ */ i.jsx("span", { className: "text-emerald-400", children: "WiFi Snooping" }),
        " to see the difference."
      ] })
    ] }) : x ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("p", { className: "mb-2 text-slate-300", children: [
        x.hostname,
        " witnessed nothing matching this filter."
      ] }),
      /* @__PURE__ */ i.jsx("p", { children: x.radio && x.radio.monitorMode ? "Its radio is in monitor mode but nothing in range is transmitting." : "A switch does not flood unicast traffic to every port, so a wired bystander captures very little. Try monitor mode on a wireless segment, or poison ARP to put yourself on the path." })
    ] }) : /* @__PURE__ */ i.jsxs("p", { children: [
      "No frames match “",
      a,
      "”."
    ] }) }) }) : /* @__PURE__ */ i.jsxs("div", { className: "flex min-h-0 flex-1 flex-col", children: [
      /* @__PURE__ */ i.jsx("div", { className: "min-h-0 flex-1 overflow-auto", children: /* @__PURE__ */ i.jsxs("table", { className: "w-full border-collapse font-mono text-[11px]", children: [
        /* @__PURE__ */ i.jsx("thead", { className: "sticky top-0 bg-[rgb(var(--nr-term-bg))] text-[10px] uppercase text-slate-500", children: /* @__PURE__ */ i.jsx("tr", { children: ["No.", "Time", "Source", "Destination", "Proto", "Len", "Info"].map((k, C) => /* @__PURE__ */ i.jsx("th", { className: `border-b border-white/10 px-2 py-1 text-left ${C === 6 ? "" : "whitespace-nowrap"}`, children: k }, k)) }) }),
        /* @__PURE__ */ i.jsx("tbody", { children: j.map((k) => {
          const C = y && k.number === y.number, v = Qh[k.colorKey] || "#64748b";
          return /* @__PURE__ */ i.jsxs(
            "tr",
            {
              onClick: () => {
                u(k.number), f(null);
              },
              className: `cursor-pointer ${C ? "bg-sky-500/25" : "hover:bg-white/5"}`,
              children: [
                /* @__PURE__ */ i.jsx("td", { className: "px-2 py-[3px] text-slate-500", children: k.number }),
                /* @__PURE__ */ i.jsx("td", { className: "px-2 py-[3px] tabular-nums text-slate-400", children: k.time.toFixed(3) }),
                /* @__PURE__ */ i.jsx("td", { className: "whitespace-nowrap px-2 py-[3px]", children: k.source }),
                /* @__PURE__ */ i.jsx("td", { className: "whitespace-nowrap px-2 py-[3px]", children: k.destination }),
                /* @__PURE__ */ i.jsx("td", { className: "px-2 py-[3px] font-bold", style: { color: v }, children: k.protocol }),
                /* @__PURE__ */ i.jsx("td", { className: "px-2 py-[3px] tabular-nums text-slate-400", children: k.length }),
                /* @__PURE__ */ i.jsx("td", { className: "px-2 py-[3px]", children: /* @__PURE__ */ i.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  k.wireless && (k.encrypted ? /* @__PURE__ */ i.jsx(un, { size: 10, className: "shrink-0 text-amber-400" }) : /* @__PURE__ */ i.jsx(Wl, { size: 10, className: "shrink-0 text-rose-400" })),
                  /* @__PURE__ */ i.jsx("span", { className: k.encrypted ? "text-slate-500" : "", children: k.info })
                ] }) })
              ]
            },
            k.number
          );
        }) })
      ] }) }),
      y && /* @__PURE__ */ i.jsxs("div", { className: "grid min-h-0 shrink-0 grid-cols-1 gap-px border-t border-white/15 bg-white/10 md:grid-cols-2", style: { height: "46%" }, children: [
        /* @__PURE__ */ i.jsx("div", { className: "min-h-0 overflow-auto bg-[rgb(var(--nr-term-bg))] p-2 font-mono text-[11px]", children: Object.entries(y.layers).map(([k, C]) => /* @__PURE__ */ i.jsx(
          zy,
          {
            name: Ry[k] || k,
            layerKey: k,
            fields: C,
            open: d[k] !== !1,
            onToggle: () => p((v) => ({ ...v, [k]: v[k] === !1 })),
            onHover: f,
            frame: y
          },
          k
        )) }),
        /* @__PURE__ */ i.jsxs("div", { className: "min-h-0 overflow-auto bg-[rgb(var(--nr-term-bg))] p-2 font-mono text-[11px] leading-[1.45]", children: [
          m.map((k, C) => /* @__PURE__ */ i.jsxs("div", { className: "flex gap-3 whitespace-pre", children: [
            /* @__PURE__ */ i.jsx("span", { className: "text-slate-600", children: k.offset }),
            /* @__PURE__ */ i.jsx("span", { children: k.hex.map((v, $) => {
              const T = C * 16 + $, U = h && T >= h.start && T < h.end;
              return /* @__PURE__ */ i.jsxs("span", { className: U ? "bg-sky-500/50 text-white" : "", children: [
                v,
                $ === 7 ? "  " : " "
              ] }, $);
            }) }),
            /* @__PURE__ */ i.jsx("span", { className: "text-slate-500", children: k.ascii })
          ] }, k.offset)),
          y.encrypted && /* @__PURE__ */ i.jsxs("p", { className: "mt-2 max-w-sm whitespace-normal text-[10.5px] leading-snug text-amber-400/90", children: [
            "Payload bytes are ",
            y.security.toUpperCase(),
            " ciphertext. The 802.11 header stays readable — addresses, timing and frame sizes leak even on an encrypted network."
          ] })
        ] })
      ] })
    ] })
  ] });
}
const Ry = {
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
function Dy(e, t) {
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
function zy({ name: e, layerKey: t, fields: n, open: r, onToggle: s, onHover: o, frame: a }) {
  const l = Dy(a, t), c = r ? xh : yh;
  return /* @__PURE__ */ i.jsxs("div", { className: "mb-0.5", children: [
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        onClick: s,
        onMouseEnter: () => l && o(l),
        onMouseLeave: () => o(null),
        className: "flex w-full items-center gap-1 rounded px-1 py-0.5 text-left text-slate-200 hover:bg-white/10",
        children: [
          /* @__PURE__ */ i.jsx(c, { size: 11, className: "shrink-0 text-slate-500" }),
          /* @__PURE__ */ i.jsx("span", { className: "font-semibold", children: e }),
          t === "payload" && n.protected && /* @__PURE__ */ i.jsx(un, { size: 10, className: "text-amber-400" })
        ]
      }
    ),
    r && /* @__PURE__ */ i.jsxs("dl", { className: "ml-4 border-l border-white/10 pl-3", children: [
      Object.entries(n).filter(([u, d]) => u !== "text" && d !== "" && d !== void 0 && d !== null).map(([u, d]) => /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2 py-[1px]", children: [
        /* @__PURE__ */ i.jsxs("dt", { className: "shrink-0 text-slate-500", children: [
          Oy(u),
          ":"
        ] }),
        /* @__PURE__ */ i.jsx("dd", { className: "min-w-0 break-all text-slate-300", children: String(d) })
      ] }, u)),
      t === "payload" && n.text && /* @__PURE__ */ i.jsx("pre", { className: "mt-1 whitespace-pre-wrap break-all rounded bg-white/5 p-1.5 text-[10.5px] text-emerald-300", children: n.text })
    ] })
  ] });
}
function Oy(e) {
  return e.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/^./, (t) => t.toUpperCase());
}
const mt = {
  source: "source",
  transit: "transit",
  destination: "destination"
};
function _y(e, t) {
  return t === 0 ? mt.source : t === e.length - 1 ? mt.destination : mt.transit;
}
const Ie = (e, t, n) => ({ n: e, name: t, detail: n });
function Fy({ device: e, frame: t, role: n, peerIn: r = null, peerOut: s = null }) {
  var h, f, g, j, y;
  const o = [], a = [], l = t.layers.dot11 ? "802.11" : "Ethernet", c = t.layers.ip, u = t.layers.tcp ? "TCP" : t.layers.udp ? "UDP" : t.layers.icmp ? "ICMP" : null, d = t.layers.payload, p = t.wireless ? `radio, ${((h = le[t.security]) == null ? void 0 : h.short) || "OPEN"}` : "copper";
  if (n !== mt.source && (o.push(Ie(1, "Physical", `Signal received from ${r ? r.hostname : "the medium"} over ${p}.`)), o.push(
    Ie(
      2,
      "Data Link",
      t.layers.dot11 ? `802.11 frame received. Receiver ${t.layers.dot11.receiver}, BSSID ${t.layers.dot11.bssid}.` + (t.encrypted ? " Payload is CCMP ciphertext; the header is not." : "") : `Ethernet frame received. Destination MAC ${(f = t.layers.eth) == null ? void 0 : f.destination}; it matches this interface, so the frame is accepted and the header removed.`
    )
  )), n !== mt.source && e.role !== "switch" && e.role !== "hub" && c && o.push(Ie(3, "Network", `IPv4 packet for ${c.destination}, TTL ${c.ttl}.`)), n === mt.destination && u && o.push(Ie(4, "Transport", Wu(t, u))), n === mt.destination && d && o.push(
    Ie(
      7,
      "Application",
      d.protected ? "Application data is encrypted and cannot be read without the key." : `Application data delivered: ${Vu(d.text || "", 90)}`
    )
  ), n === mt.source) {
    if (d && a.push(
      Ie(
        7,
        "Application",
        d.protected ? "Application data handed down; it will be encrypted by the link layer." : `Application data created: ${Vu(d.text || "", 90)}`
      )
    ), u && a.push(Ie(4, "Transport", Wu(t, u))), c) {
      const m = rr(e), x = m && Jr(c.source, c.destination, m.mask);
      a.push(
        Ie(
          3,
          "Network",
          `IPv4 header added: ${c.source} → ${c.destination}. ` + (x ? "Destination is on the local subnet, so it is sent directly." : `Destination is off-subnet, so it is sent to the default gateway ${e.gateway || "(unset)"}.`)
        )
      );
    }
    a.push(Ie(2, "Data Link", Hy(t, l, s))), a.push(Ie(1, "Physical", `Bits placed on the ${p} towards ${s ? s.hostname : "the medium"}.`));
  } else n === mt.transit && (e.role === "switch" || e.role === "l3switch" ? a.push(
    Ie(
      2,
      "Data Link",
      `MAC address table consulted for ${((g = t.layers.eth) == null ? void 0 : g.destination) || ((j = t.layers.dot11) == null ? void 0 : j.receiver)}. The frame is forwarded out that single port only — which is why a bystander on another port sees nothing.`
    )
  ) : e.role === "hub" ? a.push(Ie(1, "Physical", "A hub has no address table: the frame is repeated out of every other port, so every attached device receives it.")) : e.role === "ap" ? a.push(
    Ie(
      2,
      "Data Link",
      t.wireless ? "Bridged from 802.11 to 802.3: the radio header is stripped and an Ethernet header is applied." : "Bridged from 802.3 to 802.11: an 802.11 header is applied" + ((y = le[t.security]) != null && y.encrypted ? " and the payload is encrypted for the air." : " and the payload goes out in clear.")
    )
  ) : (e.role === "router" || e.role === "firewall") && (a.push(
    Ie(
      3,
      "Network",
      `Routing table consulted for ${c ? c.destination : "the destination"}. TTL decremented to ${c ? Math.max(0, Number(c.ttl) - 1) : "—"}.` + (e.role === "firewall" ? " Access list evaluated before forwarding." : "")
    )
  ), a.push(Ie(2, "Data Link", `New ${l} header written: this hop's source MAC and the next hop's destination MAC. The IP addresses do not change.`))), a.push(Ie(1, "Physical", `Forwarded towards ${s ? s.hostname : "the next hop"}.`)));
  return { inbound: o, outbound: a, verdict: Uy(e, t, n) };
}
function Wu(e, t) {
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
function Hy(e, t, n) {
  var r, s;
  if (e.layers.dot11) {
    const o = e.layers.dot11;
    return `802.11 header added. Transmitter ${o.transmitter}, receiver ${o.receiver}, BSSID ${o.bssid}.` + (o.protected ? " Payload encrypted with CCMP — but the addresses, timing and frame size stay visible to anything in range." : " No encryption: every byte is readable by anything in range.");
  }
  return `Ethernet header added: source ${(r = e.layers.eth) == null ? void 0 : r.source}, destination ${(s = e.layers.eth) == null ? void 0 : s.destination}${n ? ` (${n.hostname})` : ""}.`;
}
function Uy(e, t, n) {
  return n === mt.destination ? "Delivered" : e.role === "firewall" ? "Inspected and forwarded" : n === mt.source ? "Sent" : "Forwarded";
}
function Vu(e, t) {
  const n = String(e).replace(/\r?\n/g, " ");
  return n.length > t ? `${n.slice(0, t)}…` : n;
}
function By(e) {
  return e.encrypted ? `${e.info} (encrypted)` : e.info;
}
const Wy = { source: "Origin", transit: "In transit", destination: "Destination" };
function Vy() {
  const e = b((p) => p.engine), t = b((p) => p.topology), n = b((p) => p.stepPdu), r = b((p) => p.flushPdu), s = b((p) => p.clearPdu);
  b((p) => p.rev);
  const [o, a] = P.useState(null), l = e.pduEvents, c = l.filter((p) => p.status === "queued").length, u = l.find((p) => p.id === o) || [...l].reverse().find((p) => p.status === "done") || l[0] || null, d = new Map(t.devices.map((p) => [p.id, p]));
  return /* @__PURE__ */ i.jsxs("div", { className: "flex h-full flex-col bg-[rgb(var(--nr-term-bg))] text-[rgb(var(--nr-term-fg))]", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex flex-wrap items-center gap-2 border-b border-white/10 px-2 py-1.5 text-[11px]", children: [
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          onClick: () => {
            const p = n();
            p && a(p.id);
          },
          disabled: c === 0,
          className: "inline-flex items-center gap-1.5 rounded-md bg-sky-600 px-2.5 py-1 font-semibold text-white disabled:opacity-40",
          children: [
            /* @__PURE__ */ i.jsx(Ql, { size: 12 }),
            " Step"
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          onClick: () => r(),
          disabled: c === 0,
          className: "inline-flex items-center gap-1.5 rounded-md border border-white/20 px-2.5 py-1 font-semibold disabled:opacity-40",
          children: [
            /* @__PURE__ */ i.jsx(bh, { size: 12 }),
            " Run all"
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          onClick: () => {
            s(), a(null);
          },
          disabled: l.length === 0,
          className: "inline-flex items-center gap-1.5 rounded-md border border-white/20 px-2.5 py-1 font-semibold disabled:opacity-40",
          children: [
            /* @__PURE__ */ i.jsx(gt, { size: 12 }),
            " Clear"
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs("span", { className: "ml-auto font-mono text-slate-400", children: [
        c,
        " queued · ",
        l.length - c,
        " delivered"
      ] })
    ] }),
    l.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "flex flex-1 items-center justify-center p-6 text-center", children: /* @__PURE__ */ i.jsxs("p", { className: "max-w-sm text-[12px] leading-relaxed text-slate-400", children: [
      "No PDUs queued. Pick the ",
      /* @__PURE__ */ i.jsx("strong", { children: "envelope" }),
      " tool in the toolbar and click a sender then a receiver, or run ",
      /* @__PURE__ */ i.jsx("code", { className: "text-emerald-400", children: "ping" }),
      " from any console. Each hop will queue here for you to step through."
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: "grid min-h-0 flex-1 grid-cols-1 gap-px bg-white/10 md:grid-cols-[1.1fr_1fr]", children: [
      /* @__PURE__ */ i.jsx("div", { className: "min-h-0 overflow-auto bg-[rgb(var(--nr-term-bg))]", children: /* @__PURE__ */ i.jsxs("table", { className: "w-full border-collapse font-mono text-[11px]", children: [
        /* @__PURE__ */ i.jsx("thead", { className: "sticky top-0 bg-[rgb(var(--nr-term-bg))] text-[10px] uppercase text-slate-500", children: /* @__PURE__ */ i.jsxs("tr", { children: [
          /* @__PURE__ */ i.jsx("th", { className: "px-2 py-1 text-left", children: "#" }),
          /* @__PURE__ */ i.jsx("th", { className: "px-2 py-1 text-left", children: "Last device" }),
          /* @__PURE__ */ i.jsx("th", { className: "px-2 py-1 text-left", children: "At device" }),
          /* @__PURE__ */ i.jsx("th", { className: "px-2 py-1 text-left", children: "Type" }),
          /* @__PURE__ */ i.jsx("th", { className: "px-2 py-1 text-left", children: "Info" })
        ] }) }),
        /* @__PURE__ */ i.jsx("tbody", { children: l.map((p) => {
          const h = u && p.id === u.id, f = Qh[p.hop.frame.colorKey] || "#64748b";
          return /* @__PURE__ */ i.jsxs(
            "tr",
            {
              onClick: () => a(p.id),
              className: `cursor-pointer border-b border-white/5 ${h ? "bg-sky-500/25" : p.status === "queued" ? "opacity-55 hover:bg-white/5" : "hover:bg-white/5"}`,
              children: [
                /* @__PURE__ */ i.jsx("td", { className: "px-2 py-[3px] text-slate-500", children: p.status === "queued" ? "·" : p.id }),
                /* @__PURE__ */ i.jsx("td", { className: "whitespace-nowrap px-2 py-[3px]", children: p.hop.fromName }),
                /* @__PURE__ */ i.jsx("td", { className: "whitespace-nowrap px-2 py-[3px] font-semibold", children: p.hop.toName }),
                /* @__PURE__ */ i.jsx("td", { className: "px-2 py-[3px]", style: { color: f }, children: p.hop.frame.protocol }),
                /* @__PURE__ */ i.jsx("td", { className: "px-2 py-[3px]", children: /* @__PURE__ */ i.jsxs("span", { className: "flex items-center gap-1 text-slate-300", children: [
                  p.hop.frame.encrypted && /* @__PURE__ */ i.jsx(un, { size: 9, className: "shrink-0 text-amber-400" }),
                  /* @__PURE__ */ i.jsx("span", { className: "truncate", children: By(p.hop.frame) })
                ] }) })
              ]
            },
            p.id
          );
        }) })
      ] }) }),
      /* @__PURE__ */ i.jsx("div", { className: "min-h-0 overflow-auto bg-[rgb(var(--nr-term-bg))] p-2.5", children: u ? /* @__PURE__ */ i.jsx(qy, { event: u, byId: d }) : null })
    ] })
  ] });
}
function qy({ event: e, byId: t }) {
  const { hop: n } = e, r = t.get(n.toId), s = t.get(n.fromId), o = n.index + 2, a = n.path && n.path[o] ? t.get(n.path[o]) : null;
  if (!r) return null;
  const l = _y(n.path || [n.fromId, n.toId], n.index + 1), { inbound: c, outbound: u, verdict: d } = Fy({ device: r, frame: n.frame, role: l, peerIn: s, peerOut: a });
  return /* @__PURE__ */ i.jsxs("div", { className: "font-mono text-[11px]", children: [
    /* @__PURE__ */ i.jsxs("header", { className: "mb-2 border-b border-white/10 pb-2", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ i.jsx("span", { className: "font-bold text-slate-100", children: r.hostname }),
        /* @__PURE__ */ i.jsx("span", { className: "rounded bg-white/10 px-1.5 py-0.5 text-[9.5px] uppercase tracking-wide text-slate-300", children: Wy[l] }),
        /* @__PURE__ */ i.jsxs("span", { className: "ml-auto text-slate-500", children: [
          "hop ",
          n.index + 1,
          " of ",
          n.total
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("p", { className: "mt-1 text-[10.5px] leading-snug text-slate-400", children: [
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
    /* @__PURE__ */ i.jsx(qu, { title: "In layers", icon: /* @__PURE__ */ i.jsx(hh, { size: 11 }), layers: c, empty: "This device originated the PDU, so nothing arrived." }),
    /* @__PURE__ */ i.jsx(qu, { title: "Out layers", icon: /* @__PURE__ */ i.jsx(fh, { size: 11 }), layers: u, empty: "The PDU was consumed here; nothing was forwarded." })
  ] });
}
function qu({ title: e, icon: t, layers: n, empty: r }) {
  return /* @__PURE__ */ i.jsxs("section", { className: "mb-3", children: [
    /* @__PURE__ */ i.jsxs("h4", { className: "mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500", children: [
      t,
      " ",
      e
    ] }),
    n.length === 0 ? /* @__PURE__ */ i.jsx("p", { className: "pl-1 text-[10.5px] italic text-slate-600", children: r }) : /* @__PURE__ */ i.jsx("ol", { className: "space-y-1", children: n.map((s) => /* @__PURE__ */ i.jsxs("li", { className: "flex gap-2 rounded border border-white/10 bg-white/[0.03] p-1.5", children: [
      /* @__PURE__ */ i.jsxs("span", { className: "shrink-0 rounded bg-sky-500/20 px-1.5 py-0.5 text-[9.5px] font-bold text-sky-300", children: [
        "L",
        s.n
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ i.jsx("div", { className: "font-semibold text-slate-200", children: s.name }),
        /* @__PURE__ */ i.jsx("div", { className: "whitespace-normal break-words leading-snug text-slate-400", children: s.detail })
      ] })
    ] }, `${e}-${s.n}`)) })
  ] });
}
const Gy = "203.0.113.53", la = {
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
}, Gu = Object.fromEntries(
  Object.values(la).map((e) => [e.host, e.ip])
), Ky = (e) => la[String(e).toLowerCase()] || null, Zy = (e) => Object.values(la).find((t) => t.ip === e) || null;
function Yy(e) {
  return e.devices.filter((t) => t.role === "cloud");
}
function af(e, t) {
  const n = (a, l) => ({ ok: !1, code: a, reason: l }), r = Yy(e)[0];
  if (!r) return n("no-cloud", "no ISP cloud on the topology — place one and cable it to your edge router");
  const s = V(e, t.id, r.id);
  return s ? O(t) ? t.gateway ? e.devices.find(
    (a) => (a.role === "router" || a.role === "l3switch" || a.role === "firewall") && V(e, t.id, a.id) && V(e, a.id, r.id)
  ) ? r.cloud && r.cloud.down ? n("isp-down", "the ISP link is down") : { ok: !0, code: "ok", reason: "reachable", cloud: r, path: s } : n("no-edge-router", "no router joins this subnet to the ISP") : n("no-gateway", "no default gateway set, so nothing can leave the local subnet") : n("no-address", "this host has no IP address") : n("no-path", "no cable path to the ISP — check the link to your edge router");
}
function Qy(e, t, n) {
  const r = String(n || "").toLowerCase(), s = e.devices.find(
    (o) => o.services.dns && o.dnsZone && o.dnsZone[r] && V(e, t.id, o.id)
  );
  if (s) return { ip: s.dnsZone[r], via: s.hostname, scope: "local" };
  if (Gu[r]) {
    const o = af(e, t);
    return o.ok ? { ip: Gu[r], via: "public resolver " + Gy, scope: "public" } : { ip: null, error: o.reason, scope: "public" };
  }
  return { ip: null, error: "NXDOMAIN — no such name", scope: "unknown" };
}
function Xy(e, t, n) {
  const r = String(n || "").toLowerCase().replace(/^https?:\/\//, "").split("/")[0], s = Ky(r) || Zy(r);
  if (!s)
    return { ok: !1, status: 404, reason: Qy(e, t, r).error || "host not found" };
  const o = af(e, t);
  return o.ok ? { ok: !0, status: 200, site: s, path: o.path, cloud: o.cloud } : { ok: !1, status: 0, reason: o.reason, code: o.code };
}
function Jy() {
  return Object.values(la).map((e) => ({
    host: e.host,
    ip: e.ip,
    title: e.title,
    blurb: e.blurb
  }));
}
function ev() {
  const e = b((f) => f.topology), t = b((f) => f.engine);
  b((f) => f.rev);
  const n = e.devices.filter(
    (f) => (f.role === "host" || f.role === "attacker") && f.interfaces.some((g) => g.ip)
  ), [r, s] = P.useState(""), [o, a] = P.useState("search.lab"), [l, c] = P.useState(null), [u, d] = P.useState(!1), p = e.devices.find((f) => f.id === r) || n[0], h = (f = o) => {
    if (a(f), !p) {
      c({ ok: !1, reason: "no addressed host to browse from", status: 0 });
      return;
    }
    const g = Xy(e, p, f);
    c(g), g.ok && g.path && (t.emit(g.path, "dns", { name: f }), t.schedule(300, () => {
      t.emit(g.path, u ? "tcp" : "http", {
        port: u ? 443 : 80,
        body: `GET / HTTP/1.1\r
Host: ${g.site.host}`
      });
    }));
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "flex h-full flex-col bg-[rgb(var(--nr-term-bg))] text-[rgb(var(--nr-term-fg))]", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex flex-wrap items-center gap-2 border-b border-white/10 px-2 py-1.5", children: [
      /* @__PURE__ */ i.jsxs(
        "select",
        {
          value: (p == null ? void 0 : p.id) || "",
          onChange: (f) => s(f.target.value),
          className: "rounded-md border border-white/15 bg-white/5 px-1.5 py-1 font-mono text-[11px]",
          "aria-label": "Browse from",
          children: [
            n.length === 0 && /* @__PURE__ */ i.jsx("option", { value: "", children: "no addressed host" }),
            n.map((f) => /* @__PURE__ */ i.jsxs("option", { value: f.id, children: [
              f.hostname,
              " — ",
              O(f)
            ] }, f.id))
          ]
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => d((f) => !f),
          title: u ? "HTTPS — payload encrypted in the capture" : "HTTP — payload readable in the capture",
          className: `grid h-6 w-6 place-items-center rounded ${u ? "text-emerald-400" : "text-amber-400"}`,
          children: u ? /* @__PURE__ */ i.jsx(un, { size: 12 }) : /* @__PURE__ */ i.jsx(Wl, { size: 12 })
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "flex min-w-[200px] flex-1 items-center gap-1 rounded-md border border-white/15 bg-white/5 px-2", children: [
        /* @__PURE__ */ i.jsx("span", { className: "font-mono text-[10.5px] text-slate-500", children: u ? "https://" : "http://" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            value: o,
            onChange: (f) => a(f.target.value),
            onKeyDown: (f) => {
              f.key === "Enter" && h();
            },
            spellCheck: !1,
            "aria-label": "Address",
            className: "min-w-0 flex-1 bg-transparent py-1 font-mono text-[11.5px] outline-none"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          onClick: () => h(),
          className: "inline-flex items-center gap-1.5 rounded-md bg-sky-600 px-2.5 py-1 text-[11px] font-semibold text-white",
          children: [
            /* @__PURE__ */ i.jsx(Eh, { size: 11 }),
            " Go"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "min-h-0 flex-1 overflow-auto", children: l ? l.ok ? /* @__PURE__ */ i.jsx(rv, { site: l.site, secure: u }) : /* @__PURE__ */ i.jsx(nv, { result: l, url: o }) : /* @__PURE__ */ i.jsx(tv, { onPick: h }) })
  ] });
}
function ic() {
  return /* @__PURE__ */ i.jsx("div", { className: "mb-3 rounded-md border border-amber-500/40 bg-amber-500/10 px-2.5 py-1.5 text-[10.5px] leading-snug text-amber-300", children: "Simulated page — generated inside this tab by NetRange Lab. No request was made and this is not a real website." });
}
function tv({ onPick: e }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ i.jsx(ic, {}),
    /* @__PURE__ */ i.jsx("h2", { className: "mb-1 text-[15px] font-bold text-slate-100", children: "The simulated internet" }),
    /* @__PURE__ */ i.jsx("p", { className: "mb-3 text-[12px] leading-snug text-slate-400", children: "These names resolve only once a host has an address, a default gateway, and a router with a path to an ISP cloud. Place one from the palette and cable it to your edge router." }),
    /* @__PURE__ */ i.jsx("ul", { className: "space-y-1.5", children: Jy().map((t) => /* @__PURE__ */ i.jsx("li", { children: /* @__PURE__ */ i.jsxs(
      "button",
      {
        onClick: () => e(t.host),
        className: "w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-left hover:border-sky-500/50",
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-baseline gap-2", children: [
            /* @__PURE__ */ i.jsx("span", { className: "font-semibold text-slate-200", children: t.title }),
            /* @__PURE__ */ i.jsxs("span", { className: "font-mono text-[10.5px] text-slate-500", children: [
              t.host,
              " · ",
              t.ip
            ] })
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: "text-[11px] text-slate-400", children: t.blurb })
        ]
      }
    ) }, t.host)) })
  ] });
}
function nv({ result: e, url: t }) {
  const n = {
    "no-cloud": "Drag an ISP / Internet node onto the canvas and cable it to your edge router.",
    "no-path": "Follow the cable from this host towards the ISP — one of the links is missing or down.",
    "no-address": "Give this host an IP address, or request one with DHCP.",
    "no-gateway": "Set the default gateway to your router’s address on this subnet.",
    "no-edge-router": "Cable a router between this subnet and the ISP cloud.",
    "isp-down": "The provider link is down — bring it back up from the ISP node."
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ i.jsx(ic, {}),
    /* @__PURE__ */ i.jsx("h2", { className: "mb-1 text-[15px] font-bold text-rose-300", children: "This page did not load" }),
    /* @__PURE__ */ i.jsx("p", { className: "mb-2 font-mono text-[11.5px] text-slate-400", children: t }),
    /* @__PURE__ */ i.jsx("p", { className: "mb-3 text-[12.5px] text-slate-300", children: e.reason }),
    n[e.code] && /* @__PURE__ */ i.jsx("p", { className: "rounded-lg border border-sky-500/30 bg-sky-500/10 px-3 py-2 text-[12px] leading-snug text-sky-200", children: n[e.code] })
  ] });
}
function rv({ site: e, secure: t }) {
  return /* @__PURE__ */ i.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ i.jsx(ic, {}),
    /* @__PURE__ */ i.jsxs("header", { className: "mb-3 flex items-baseline justify-between border-b border-white/10 pb-2", children: [
      /* @__PURE__ */ i.jsx("h2", { className: "text-[16px] font-bold text-slate-100", children: e.title }),
      /* @__PURE__ */ i.jsxs("span", { className: "font-mono text-[10.5px] text-slate-500", children: [
        e.host,
        " · ",
        e.ip,
        " · ",
        t ? "TLS" : "cleartext"
      ] })
    ] }),
    e.kind === "search" && /* @__PURE__ */ i.jsxs("div", { children: [
      /* @__PURE__ */ i.jsx("div", { className: "mb-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[12px] text-slate-500", children: "Search the teaching network…" }),
      /* @__PURE__ */ i.jsx("p", { className: "text-[12px] text-slate-400", children: "A placeholder search page. Load it over HTTP and then over HTTPS, and compare what the capture pane can read in each case." })
    ] }),
    e.kind === "news" && /* @__PURE__ */ i.jsx("ul", { className: "space-y-3", children: e.articles.map((n) => /* @__PURE__ */ i.jsxs("li", { children: [
      /* @__PURE__ */ i.jsx("h3", { className: "text-[13px] font-semibold text-slate-200", children: n.head }),
      /* @__PURE__ */ i.jsx("p", { className: "text-[12px] leading-snug text-slate-400", children: n.body })
    ] }, n.head)) }),
    e.kind === "shop" && /* @__PURE__ */ i.jsx("table", { className: "w-full border-collapse text-[12px]", children: /* @__PURE__ */ i.jsx("tbody", { children: e.items.map((n) => /* @__PURE__ */ i.jsxs("tr", { className: "border-b border-white/10", children: [
      /* @__PURE__ */ i.jsx("td", { className: "py-1.5 text-slate-300", children: n.name }),
      /* @__PURE__ */ i.jsx("td", { className: "py-1.5 text-right font-mono text-slate-400", children: n.price })
    ] }, n.name)) }) }),
    e.kind === "login" && /* @__PURE__ */ i.jsxs("div", { className: "max-w-xs", children: [
      /* @__PURE__ */ i.jsx("p", { className: "mb-2 text-[12px] text-slate-400", children: e.blurb }),
      /* @__PURE__ */ i.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ i.jsx("div", { className: "rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5 text-[12px] text-slate-500", children: "username" }),
        /* @__PURE__ */ i.jsx("div", { className: "rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5 text-[12px] text-slate-500", children: "••••••••" })
      ] }),
      !t && /* @__PURE__ */ i.jsx("p", { className: "mt-2.5 rounded-md border border-rose-500/40 bg-rose-500/10 px-2.5 py-1.5 text-[11px] leading-snug text-rose-300", children: "Loaded over HTTP. Anything typed here would cross the network in cleartext — switch the padlock on and compare the capture." })
    ] }),
    e.kind === "service" && /* @__PURE__ */ i.jsx("pre", { className: "whitespace-pre-wrap rounded-lg border border-white/10 bg-white/[0.03] p-3 font-mono text-[11.5px] text-emerald-300", children: '{ "status": "ok", "stratum": 2, "offset_ms": 1.8 }' })
  ] });
}
const Ua = 44, sv = 520;
function ov({ height: e, onResize: t }) {
  const n = b((d) => d.consoles), r = b((d) => d.activeConsoleId), s = b((d) => d.setActiveConsole), o = b((d) => d.closeConsole), a = b((d) => d.clearConsole), l = P.useRef(null), c = P.useCallback(
    (d) => {
      d.preventDefault();
      const p = d.clientY, h = e, f = (j) => {
        const y = Math.min(sv, Math.max(Ua, h - (j.clientY - p)));
        t(y);
      }, g = () => {
        window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", g);
      };
      window.addEventListener("pointermove", f), window.addEventListener("pointerup", g);
    },
    [e, t]
  ), u = e <= Ua + 4;
  return /* @__PURE__ */ i.jsxs(
    "section",
    {
      className: "flex shrink-0 flex-col border-t border-line",
      style: { height: e },
      "aria-label": "Device consoles",
      children: [
        /* @__PURE__ */ i.jsx(
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
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-1 overflow-x-auto bg-black/25 px-2 pt-1.5", children: [
          n.map((d) => {
            const p = d.id === r;
            return /* @__PURE__ */ i.jsxs(
              "button",
              {
                onClick: () => s(d.id),
                className: `flex shrink-0 items-center gap-2 rounded-t-lg px-3 py-1.5 font-mono text-[11.5px] font-semibold ${p ? "nr-term text-emerald-400" : "text-slate-400 hover:text-slate-200"}`,
                children: [
                  d.title,
                  d.deviceId && /* @__PURE__ */ i.jsx(
                    Mh,
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
          /* @__PURE__ */ i.jsx("div", { className: "flex-1" }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              onClick: () => a(r),
              title: "Clear this console (Ctrl+L)",
              className: "shrink-0 rounded p-1 text-slate-400 hover:text-slate-100",
              children: /* @__PURE__ */ i.jsx(e1, { size: 13 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              onClick: () => t(u ? 240 : Ua),
              title: u ? "Expand" : "Collapse",
              className: "shrink-0 rounded p-1 text-slate-400 hover:text-slate-100",
              children: u ? /* @__PURE__ */ i.jsx(Yg, { size: 13 }) : /* @__PURE__ */ i.jsx(Zg, { size: 13 })
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "min-h-0 flex-1", children: !u && (r === "capture" ? /* @__PURE__ */ i.jsx(Ly, {}) : r === "simulation" ? /* @__PURE__ */ i.jsx(Vy, {}) : r === "browser" ? /* @__PURE__ */ i.jsx(ev, {}) : /* @__PURE__ */ i.jsx(Iy, { consoleId: r })) })
      ]
    }
  );
}
function av({ onClose: e }) {
  const t = b((u) => u.labId), n = b((u) => u.setLab), r = b((u) => u.grade), s = b((u) => u.gradeResult), o = b((u) => u.graded);
  b((u) => u.rev);
  const a = sr(t), [l, c] = P.useState("objectives");
  return /* @__PURE__ */ i.jsxs("aside", { className: "flex w-[286px] shrink-0 flex-col overflow-hidden border-l border-line bg-panel", children: [
    /* @__PURE__ */ i.jsxs("header", { className: "border-b border-line px-3.5 py-3", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "mb-1 flex items-start gap-2", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ i.jsx("h2", { className: "text-[14px] font-bold leading-tight", children: a.title }),
          /* @__PURE__ */ i.jsx("p", { className: "text-[11px] text-soft", children: a.subtitle })
        ] }),
        /* @__PURE__ */ i.jsx("button", { onClick: e, "aria-label": "Hide lab guide", className: "text-soft hover:text-ink", children: /* @__PURE__ */ i.jsx(Ch, { size: 16 }) })
      ] }),
      Ro.length > 1 && /* @__PURE__ */ i.jsx(
        "select",
        {
          className: "mt-2 w-full rounded-md border border-line bg-panel2 px-2 py-1.5 text-[12px]",
          value: t,
          onChange: (u) => n(u.target.value),
          children: Ro.map((u) => /* @__PURE__ */ i.jsx("option", { value: u.id, children: u.title }, u.id))
        }
      ),
      /* @__PURE__ */ i.jsx("nav", { className: "mt-2.5 flex gap-1", children: [
        ["objectives", "Objectives"],
        ["brief", "Brief"],
        ["cheatsheet", "Commands"]
      ].map(([u, d]) => /* @__PURE__ */ i.jsx(_, { size: "sm", variant: l === u ? "active" : "outline", onClick: () => c(u), children: d }, u)) })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "min-h-0 flex-1 overflow-y-auto px-3.5 py-3", children: [
      l === "objectives" && /* @__PURE__ */ i.jsx(iv, { lab: a, result: s, graded: o }),
      l === "brief" && /* @__PURE__ */ i.jsx(lv, { lab: a }),
      l === "cheatsheet" && /* @__PURE__ */ i.jsx(cv, { lab: a })
    ] }),
    /* @__PURE__ */ i.jsxs("footer", { className: "border-t border-line p-3", children: [
      s && /* @__PURE__ */ i.jsxs("div", { className: "mb-2.5 flex items-baseline justify-between", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsxs("span", { className: "font-mono text-[26px] font-bold tabular-nums", children: [
            s.percent,
            "%"
          ] }),
          /* @__PURE__ */ i.jsxs("span", { className: "ml-2 text-[12px] text-soft", children: [
            s.earned,
            "/",
            s.total,
            " pts · ",
            Jh(s.percent)
          ] })
        ] }),
        s.complete && /* @__PURE__ */ i.jsx(se, { tone: "up", children: "COMPLETE" })
      ] }),
      /* @__PURE__ */ i.jsxs(_, { variant: "primary", size: "lg", onClick: () => r(), children: [
        /* @__PURE__ */ i.jsx(Pr, { size: 15 }),
        " Check Solution"
      ] }),
      /* @__PURE__ */ i.jsx("p", { className: "mt-2 text-[10.5px] leading-snug text-soft", children: "Grading inspects the topology state, so GUI and CLI configuration both count." })
    ] })
  ] });
}
function iv({ lab: e, result: t, graded: n }) {
  const r = t ? H0(t) : [{ section: "Tasks", objectives: e.objectives.map((s) => ({ ...s, pass: !1 })) }];
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    r.map(({ section: s, objectives: o }) => /* @__PURE__ */ i.jsxs("section", { className: "mb-4", children: [
      /* @__PURE__ */ i.jsx(q, { children: s }),
      o.map((a) => /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: `mb-1.5 flex gap-2.5 rounded-lg border p-2.5 text-[12.5px] leading-snug ${n ? a.pass ? "border-up/40 bg-up/10" : "border-down/40 bg-down/10" : "border-line bg-panel2"}`,
          children: [
            /* @__PURE__ */ i.jsx("span", { className: "mt-0.5 shrink-0", children: n ? a.pass ? /* @__PURE__ */ i.jsx(Pr, { size: 15, className: "text-up" }) : /* @__PURE__ */ i.jsx(_n, { size: 15, className: "text-down" }) : /* @__PURE__ */ i.jsx(vh, { size: 15, className: "text-soft" }) }),
            /* @__PURE__ */ i.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ i.jsx("div", { children: a.title }),
              /* @__PURE__ */ i.jsxs("div", { className: "mt-0.5 font-mono text-[10px] text-soft", children: [
                a.points,
                " pt",
                a.points === 1 ? "" : "s"
              ] }),
              n && !a.pass && a.hint && /* @__PURE__ */ i.jsxs("div", { className: "mt-1 text-[11px] text-soft", children: [
                /* @__PURE__ */ i.jsx(na, { size: 11, className: "mr-1 inline" }),
                a.hint
              ] }),
              a.detail && /* @__PURE__ */ i.jsx("div", { className: "mt-1 font-mono text-[10px] text-warn", children: a.detail })
            ] })
          ]
        },
        a.id
      ))
    ] }, s)),
    !n && /* @__PURE__ */ i.jsxs("p", { className: "text-[11.5px] leading-snug text-soft", children: [
      "Press ",
      /* @__PURE__ */ i.jsx("strong", { children: "Check Solution" }),
      " at any time. Nothing is submitted anywhere — grading runs in this tab."
    ] })
  ] });
}
function lv({ lab: e }) {
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(q, { children: "Scenario" }),
    e.brief.map((t, n) => /* @__PURE__ */ i.jsx("p", { className: "mb-2.5 text-[12.5px] leading-relaxed text-soft", children: t }, n)),
    /* @__PURE__ */ i.jsx(q, { className: "mt-4", children: "Walkthrough" }),
    /* @__PURE__ */ i.jsx("ol", { className: "space-y-2", children: e.steps.map((t, n) => /* @__PURE__ */ i.jsxs("li", { className: "flex gap-2.5 text-[12.5px] leading-snug", children: [
      /* @__PURE__ */ i.jsx("span", { className: "grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 font-mono text-[10px] font-bold text-accent", children: n + 1 }),
      /* @__PURE__ */ i.jsx("span", { className: "text-soft", children: t })
    ] }, n)) }),
    /* @__PURE__ */ i.jsxs("p", { className: "mt-4 font-mono text-[10.5px] leading-snug text-soft", children: [
      "Estimated time: ",
      e.estimatedMinutes,
      " minutes"
    ] })
  ] });
}
function cv({ lab: e }) {
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    Object.entries(e.cheatsheet).map(([t, n]) => /* @__PURE__ */ i.jsxs("section", { className: "mb-4", children: [
      /* @__PURE__ */ i.jsx(q, { children: t }),
      /* @__PURE__ */ i.jsx("dl", { className: "space-y-1.5", children: n.map(([r, s]) => /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("dt", { className: "break-all rounded bg-panel2 px-1.5 py-0.5 font-mono text-[11px] text-accent", children: r }),
        /* @__PURE__ */ i.jsx("dd", { className: "mt-0.5 text-[11px] leading-snug text-soft", children: s })
      ] }, r)) })
    ] }, t)),
    /* @__PURE__ */ i.jsxs("p", { className: "text-[11px] leading-snug text-soft", children: [
      "IOS abbreviations work: ",
      /* @__PURE__ */ i.jsx("span", { className: "font-mono", children: "conf t" }),
      ",",
      " ",
      /* @__PURE__ */ i.jsx("span", { className: "font-mono", children: "int gi0/1" }),
      ",",
      " ",
      /* @__PURE__ */ i.jsx("span", { className: "font-mono", children: "sh ip int br" }),
      ". Press ",
      /* @__PURE__ */ i.jsx("span", { className: "font-mono", children: "?" }),
      " in any console for its command list."
    ] })
  ] });
}
const At = {
  up: { led: "#22c55e", body: "border-up/60 bg-up/10", label: "Up" },
  "admin-down": { led: "#f59e0b", body: "border-warn/60 bg-warn/10", label: "Administratively down" },
  down: { led: "#ef4444", body: "border-down/60 bg-down/10", label: "Down — check the cable" },
  idle: { led: "#60a5fa", body: "border-accent/40 bg-accent/10", label: "Radio on, not associated" },
  off: { led: "#475569", body: "border-line bg-panel2", label: "Radio off" },
  empty: { led: "#334155", body: "border-line bg-panel2", label: "No cable" }
};
function uv({ device: e, topology: t }) {
  const [n, r] = P.useState(null), s = [];
  for (const l of e.interfaces) {
    const c = s[s.length - 1];
    c && c.media === l.media ? c.ports.push(l) : s.push({ media: l.media, ports: [l] });
  }
  const o = e.interfaces.filter((l) => l.link).length, a = e.interfaces.filter((l) => hr(e, l, t) === "up").length;
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(q, { children: "Front panel" }),
    /* @__PURE__ */ i.jsxs("div", { className: "mb-3 rounded-xl border border-line bg-panel2 p-3", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "mb-2 flex items-baseline justify-between", children: [
        /* @__PURE__ */ i.jsx("span", { className: "font-mono text-[11px] font-bold tracking-wide text-ink", children: e.hostname }),
        /* @__PURE__ */ i.jsxs("span", { className: "font-mono text-[10px] text-soft", children: [
          o,
          " cabled · ",
          a,
          " up · ",
          e.interfaces.length,
          " ports"
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "flex flex-wrap items-start gap-x-4 gap-y-3", children: s.map((l, c) => {
        var u;
        return /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("div", { className: "mb-1 font-mono text-[9px] uppercase tracking-widest text-soft", children: ((u = Fn[l.media]) == null ? void 0 : u.short) || l.media }),
          /* @__PURE__ */ i.jsx("div", { className: "flex flex-wrap gap-1", children: l.ports.map((d) => {
            var g;
            const p = hr(e, d, t), h = At[p] || At.empty, f = Sr(e, d, t);
            return /* @__PURE__ */ i.jsxs(
              "button",
              {
                onMouseEnter: () => r(d.name),
                onMouseLeave: () => r(null),
                onFocus: () => r(d.name),
                onBlur: () => r(null),
                title: hv(e, d, p, f),
                className: `relative grid h-9 w-11 place-items-center rounded border ${h.body} transition-colors`,
                children: [
                  /* @__PURE__ */ i.jsx(
                    "span",
                    {
                      className: "absolute left-1 top-1 h-1.5 w-1.5 rounded-full",
                      style: { background: h.led, boxShadow: p === "up" ? `0 0 5px ${h.led}` : "none" }
                    }
                  ),
                  /* @__PURE__ */ i.jsx("span", { className: "mt-1 font-mono text-[8.5px] leading-none text-ink", children: pv(d.name) }),
                  f && /* @__PURE__ */ i.jsx(
                    "span",
                    {
                      className: "absolute bottom-[2px] h-[2px] w-5 rounded-full",
                      style: { background: ((g = Se[f.link.cableType]) == null ? void 0 : g.color) || "#64748b" }
                    }
                  )
                ]
              },
              d.name
            );
          }) })
        ] }, c);
      }) })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "mb-3 min-h-[52px] rounded-lg border border-line bg-panel2 px-3 py-2 font-mono text-[11px]", children: n ? /* @__PURE__ */ i.jsx(dv, { device: e, port: e.interfaces.find((l) => l.name === n), topology: t }) : /* @__PURE__ */ i.jsx("span", { className: "text-soft", children: "Hover a port for its link state and the device at the far end." }) }),
    /* @__PURE__ */ i.jsx("div", { className: "flex flex-wrap gap-x-4 gap-y-1 text-[10.5px] text-soft", children: ["up", "admin-down", "down", "empty"].map((l) => /* @__PURE__ */ i.jsxs("span", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ i.jsx("span", { className: "h-2 w-2 rounded-full", style: { background: At[l].led } }),
      At[l].label
    ] }, l)) }),
    /* @__PURE__ */ i.jsx(q, { className: "mt-5", children: "Cable schedule" }),
    o === 0 ? /* @__PURE__ */ i.jsx("p", { className: "font-mono text-[11.5px] text-soft", children: "Nothing is plugged into this device yet." }) : /* @__PURE__ */ i.jsxs("table", { className: "w-full border-collapse font-mono text-[11px]", children: [
      /* @__PURE__ */ i.jsx("thead", { children: /* @__PURE__ */ i.jsxs("tr", { className: "text-[9.5px] uppercase text-soft", children: [
        /* @__PURE__ */ i.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "Local port" }),
        /* @__PURE__ */ i.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "Cable" }),
        /* @__PURE__ */ i.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "Far end" }),
        /* @__PURE__ */ i.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "State" })
      ] }) }),
      /* @__PURE__ */ i.jsx("tbody", { children: e.interfaces.filter((l) => l.link).map((l) => {
        var d, p, h;
        const c = Sr(e, l, t), u = hr(e, l, t);
        return /* @__PURE__ */ i.jsxs("tr", { children: [
          /* @__PURE__ */ i.jsx("td", { className: "border-b border-line p-1.5", children: l.name }),
          /* @__PURE__ */ i.jsx("td", { className: "border-b border-line p-1.5", style: { color: (d = Se[c == null ? void 0 : c.link.cableType]) == null ? void 0 : d.color }, children: ((p = Se[c == null ? void 0 : c.link.cableType]) == null ? void 0 : p.short) || "—" }),
          /* @__PURE__ */ i.jsx("td", { className: "border-b border-line p-1.5", children: c ? `${c.device.hostname} ${((h = c.port) == null ? void 0 : h.name) || ""}` : "—" }),
          /* @__PURE__ */ i.jsx("td", { className: "border-b border-line p-1.5", style: { color: At[u].led }, children: At[u].label })
        ] }, l.name);
      }) })
    ] })
  ] });
}
function dv({ device: e, port: t, topology: n }) {
  var l, c, u;
  if (!t) return null;
  const r = hr(e, t, n), s = At[r] || At.empty, o = Sr(e, t, n), a = Fn[t.media];
  return /* @__PURE__ */ i.jsxs("div", { className: "leading-relaxed", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex flex-wrap items-center gap-x-3", children: [
      /* @__PURE__ */ i.jsx("span", { className: "font-bold text-ink", children: t.name }),
      /* @__PURE__ */ i.jsx("span", { className: "text-soft", children: (a == null ? void 0 : a.label) || t.media }),
      t.speed && /* @__PURE__ */ i.jsx("span", { className: "text-soft", children: t.speed }),
      /* @__PURE__ */ i.jsxs("span", { style: { color: s.led }, children: [
        "● ",
        s.label
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "text-soft", children: [
      t.ip ? `${t.ip} / ${t.mask}` : "no address",
      " · ",
      t.mac,
      o ? ` · ${(l = Se[o.link.cableType]) == null ? void 0 : l.label} to ${o.device.hostname} ${((c = o.port) == null ? void 0 : c.name) || ""}` : ""
    ] }),
    o && o.link.down && o.link.reason && /* @__PURE__ */ i.jsx("div", { className: "text-down", children: o.link.reason }),
    r === "down" && !(o != null && o.link.down) && ((u = o == null ? void 0 : o.port) == null ? void 0 : u.enabled) === !1 && /* @__PURE__ */ i.jsxs("div", { className: "text-warn", children: [
      "No carrier — ",
      o.device.hostname,
      " ",
      o.port.name,
      " is administratively down at the other end."
    ] })
  ] });
}
function pv(e) {
  if (e.includes("/")) {
    const t = e.match(/^([A-Za-z])[A-Za-z]*(.*)$/);
    return t ? `${t[1].toUpperCase()}${t[2]}` : e;
  }
  return e.replace(/^Ethernet/, "Eth").replace(/^Wi-Fi$/, "WiFi");
}
function hv(e, t, n, r) {
  var o, a, l;
  const s = [`${t.name} — ${((o = Fn[t.media]) == null ? void 0 : o.label) || t.media}`];
  return t.speed && s.push(t.speed), s.push(((a = At[n]) == null ? void 0 : a.label) || n), r && s.push(`→ ${r.device.hostname} ${((l = r.port) == null ? void 0 : l.name) || ""}`), t.ip && s.push(t.ip), s.join(" · ");
}
function fv({ deviceId: e, onClose: t }) {
  const n = b((y) => y.topology.devices.find((m) => m.id === e)), r = b((y) => y.topology), s = b((y) => y.updateDevice), o = b((y) => y.openDeviceConsole), a = b((y) => y.engine);
  b((y) => y.rev);
  const [l, c] = P.useState("config"), [u, d] = P.useState(0);
  if (!n) return null;
  const p = Rn[n.typeId], h = $s(p == null ? void 0 : p.icon), f = (y) => s(n.id, y), g = n.interfaces[u] || n.interfaces[0], j = [
    ...n.role === "attacker" ? [["toolkit", "Toolkit"]] : [],
    ["config", "Config"],
    ["physical", "Physical"],
    ...n.radio || n.ap ? [["wireless", "Wireless"]] : [],
    ...p != null && p.vlanCapable || p != null && p.routeCapable || n.role === "router" ? [["routing", "Routing & VLAN"]] : [],
    ...n.role === "firewall" || n.role === "router" ? [["acl", "Access Lists"]] : [],
    ...Object.keys((p == null ? void 0 : p.services) || {}).length || n.role === "host" || n.role === "iot" ? [["services", "Services"]] : [],
    ["security", "Security"],
    ["status", "Status"]
  ];
  return /* @__PURE__ */ i.jsxs(
    dn,
    {
      title: n.hostname,
      subtitle: `${p == null ? void 0 : p.label} · ${n.os.toUpperCase()} · ${n.interfaces.length} interfaces`,
      icon: /* @__PURE__ */ i.jsx("span", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-panel2 text-accent", children: /* @__PURE__ */ i.jsx(h, { size: 18 }) }),
      onClose: t,
      footer: /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ i.jsxs(
          _,
          {
            variant: "primary",
            size: "sm",
            onClick: () => {
              o(n.id), t();
            },
            children: [
              /* @__PURE__ */ i.jsx(Yl, { size: 14 }),
              " Open console"
            ]
          }
        ),
        n.runtime.compromised && /* @__PURE__ */ i.jsx(se, { tone: "down", children: "COMPROMISED" }),
        n.runtime.unresponsive && /* @__PURE__ */ i.jsx(se, { tone: "down", children: "SATURATED" }),
        n.security.lockout.locked && /* @__PURE__ */ i.jsx(se, { tone: "warn", children: "LOGINS LOCKED" }),
        /* @__PURE__ */ i.jsx("div", { className: "flex-1" }),
        /* @__PURE__ */ i.jsx("span", { className: "font-mono text-[10px] text-soft", children: n.cli.saved ? "config saved" : "unsaved changes" })
      ] }),
      children: [
        /* @__PURE__ */ i.jsx("nav", { className: "mb-4 flex flex-wrap gap-1.5", children: j.map(([y, m]) => /* @__PURE__ */ i.jsx(_, { size: "sm", variant: l === y ? "active" : "outline", onClick: () => c(y), children: m }, y)) }),
        l === "config" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(K, { label: "Hostname", children: /* @__PURE__ */ i.jsx(
            "input",
            {
              className: W,
              value: n.hostname,
              onChange: (y) => f((m) => {
                m.hostname = y.target.value || m.hostname;
              })
            }
          ) }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ i.jsx(K, { label: "Interface", children: /* @__PURE__ */ i.jsx(
              "select",
              {
                className: W,
                value: u,
                onChange: (y) => d(Number(y.target.value)),
                children: n.interfaces.map((y, m) => /* @__PURE__ */ i.jsxs("option", { value: m, children: [
                  y.name,
                  " ",
                  y.ip ? `— ${y.ip}` : "— unassigned"
                ] }, y.name))
              }
            ) }),
            /* @__PURE__ */ i.jsx(K, { label: "Administrative state", children: /* @__PURE__ */ i.jsxs(
              "select",
              {
                className: W,
                value: g.enabled ? "1" : "0",
                onChange: (y) => f((m) => {
                  m.interfaces[u].enabled = y.target.value === "1";
                }),
                children: [
                  /* @__PURE__ */ i.jsx("option", { value: "1", children: "up (no shutdown)" }),
                  /* @__PURE__ */ i.jsx("option", { value: "0", children: "administratively down" })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ i.jsx(
            K,
            {
              label: "Addressing",
              hint: g.addressing === "dhcp" ? "Takes an address from any reachable DHCP server, the way a real client does. Typing an address below switches this to Static." : "This interface is yours — nothing will overwrite it.",
              children: /* @__PURE__ */ i.jsxs(
                "select",
                {
                  className: W,
                  value: g.addressing === "dhcp" ? "dhcp" : "static",
                  "aria-label": "Addressing mode",
                  onChange: (y) => f((m) => {
                    const x = y.target.value;
                    m.interfaces[u].addressing = x, x === "dhcp" && (m.interfaces[u].ip = "", m.gateway = "");
                  }),
                  children: [
                    /* @__PURE__ */ i.jsx("option", { value: "dhcp", children: "DHCP — ask the network" }),
                    /* @__PURE__ */ i.jsx("option", { value: "static", children: "Static — set it myself" })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ i.jsx(
              K,
              {
                label: "IP address",
                hint: g.ip && !$e(g.ip) ? "Not a valid IPv4 address." : g.addressing === "dhcp" && !g.ip ? "Waiting for a DHCP offer…" : void 0,
                children: /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    className: W,
                    placeholder: g.addressing === "dhcp" ? "assigned by DHCP" : "192.168.10.20",
                    value: g.ip,
                    onChange: (y) => f((m) => {
                      const x = y.target.value.trim();
                      m.interfaces[u].ip = x, x && (m.interfaces[u].enabled = !0, m.interfaces[u].addressing = "static");
                    })
                  }
                )
              }
            ),
            /* @__PURE__ */ i.jsx(
              K,
              {
                label: "Subnet mask",
                hint: g.mask ? `/${Ve(g.mask) ?? "?"}` : void 0,
                children: /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    className: W,
                    value: g.mask,
                    onChange: (y) => f((m) => {
                      m.interfaces[u].mask = y.target.value.trim();
                    })
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ i.jsx(K, { label: "Default gateway", hint: "Needed for any traffic leaving the local subnet.", children: /* @__PURE__ */ i.jsx(
            "input",
            {
              className: W,
              placeholder: "192.168.10.1",
              value: n.gateway,
              onChange: (y) => f((m) => {
                m.gateway = y.target.value.trim();
              })
            }
          ) }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ i.jsx(K, { label: "MAC address", children: /* @__PURE__ */ i.jsx("input", { className: W, value: g.mac, readOnly: !0 }) }),
            (p == null ? void 0 : p.vlanCapable) && /* @__PURE__ */ i.jsx(K, { label: "Access VLAN", children: /* @__PURE__ */ i.jsx(
              "input",
              {
                className: W,
                value: g.vlan,
                onChange: (y) => f((m) => {
                  m.interfaces[u].vlan = Number(y.target.value) || 1;
                })
              }
            ) })
          ] }),
          (n.role === "host" || n.role === "iot") && /* @__PURE__ */ i.jsxs(
            _,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                b.getState().openDeviceConsole(n.id), a.dhcpRequest(n, `dev:${n.id}`);
              },
              children: [
                /* @__PURE__ */ i.jsx(Bl, { size: 14 }),
                " Request a DHCP lease"
              ]
            }
          )
        ] }),
        l === "physical" && /* @__PURE__ */ i.jsx(uv, { device: n, topology: r }),
        l === "wireless" && /* @__PURE__ */ i.jsx(mv, { device: n, edit: f }),
        l === "toolkit" && /* @__PURE__ */ i.jsx(gv, { device: n, onClose: t }),
        l === "routing" && /* @__PURE__ */ i.jsx(xv, { device: n, edit: f }),
        l === "acl" && /* @__PURE__ */ i.jsx(yv, { device: n, edit: f }),
        l === "services" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(q, { children: "Hosted services" }),
          Object.keys(Rt).map((y) => /* @__PURE__ */ i.jsx(
            he,
            {
              id: `svc-${n.id}-${y}`,
              label: Rt[y].label,
              hint: `tcp/${Rt[y].port}`,
              checked: !!n.services[y],
              onChange: (m) => f((x) => {
                x.services[y] = m;
              })
            },
            y
          )),
          n.services.dns && /* @__PURE__ */ i.jsx(vv, { device: n, edit: f }),
          /* @__PURE__ */ i.jsx("p", { className: "mt-2 text-[11px] leading-snug text-soft", children: "Running services become selectable targets in the Cyber Range. Stopping a service is itself a valid mitigation — reducing attack surface." })
        ] }),
        l === "security" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(q, { children: "Credentials" }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ i.jsx(K, { label: "Username", children: /* @__PURE__ */ i.jsx(
              "input",
              {
                className: W,
                value: n.security.username,
                onChange: (y) => f((m) => {
                  m.security.username = y.target.value;
                })
              }
            ) }),
            /* @__PURE__ */ i.jsx(
              K,
              {
                label: "Password",
                hint: Do.includes(n.security.password) ? "⚠ This password is in the demo wordlist — brute force will succeed." : n.security.password.length < 10 ? "Short passwords are brittle; 10+ characters is the lab target." : "✓ Outside the wordlist and long enough.",
                children: /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    className: W,
                    value: n.security.password,
                    onChange: (y) => f((m) => {
                      m.security.password = y.target.value;
                    })
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ i.jsx(
            K,
            {
              label: "Max authentication attempts",
              hint: "0 means unlimited. Set 3–5 so the brute-force drill locks out.",
              children: /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "number",
                  min: "0",
                  max: "20",
                  className: W,
                  value: n.security.maxAuthTries,
                  onChange: (y) => f((m) => {
                    m.security.maxAuthTries = Math.max(0, Number(y.target.value) || 0);
                  })
                }
              )
            }
          ),
          /* @__PURE__ */ i.jsx(q, { className: "mt-4", children: "Hardening controls" }),
          /* @__PURE__ */ i.jsx(
            he,
            {
              label: "SYN cookies",
              hint: "Caps the half-open queue so a SYN flood cannot exhaust it.",
              checked: n.security.synCookies,
              onChange: (y) => f((m) => {
                m.security.synCookies = y;
              })
            }
          ),
          /* @__PURE__ */ i.jsx(
            he,
            {
              label: "Input sanitisation (parameterised queries)",
              hint: "Binds web-app input as parameters, defeating SQL injection.",
              checked: n.security.inputSanitised,
              onChange: (y) => f((m) => {
                m.security.inputSanitised = y;
              })
            }
          ),
          /* @__PURE__ */ i.jsx(
            he,
            {
              label: "Security awareness training",
              hint: "A trained user reports a phishing lure instead of opening it.",
              checked: n.security.awarenessTraining,
              onChange: (y) => f((m) => {
                m.security.awarenessTraining = y;
              })
            }
          ),
          /* @__PURE__ */ i.jsx(
            he,
            {
              label: "Multi-factor authentication",
              hint: "A stolen password alone no longer gets an attacker in.",
              checked: n.security.mfa,
              onChange: (y) => f((m) => {
                m.security.mfa = y;
              })
            }
          ),
          /* @__PURE__ */ i.jsx(
            he,
            {
              label: "Security updates applied",
              hint: "Unpatched services advertise an older build, which a version scan will report.",
              checked: n.security.patched,
              onChange: (y) => f((m) => {
                m.security.patched = y;
              })
            }
          ),
          /* @__PURE__ */ i.jsx(
            he,
            {
              label: "TLS on the web service",
              hint: "Without it, logins posted to this host cross the network in clear.",
              checked: n.security.tlsEnabled,
              onChange: (y) => f((m) => {
                m.security.tlsEnabled = y;
              })
            }
          ),
          /* @__PURE__ */ i.jsx(
            he,
            {
              label: "Legacy SMBv1 enabled",
              hint: "A deprecated file-sharing dialect with no modern signing. Usually left on for one old device and forgotten.",
              checked: n.security.legacySmb,
              onChange: (y) => f((m) => {
                m.security.legacySmb = y;
              })
            }
          ),
          /* @__PURE__ */ i.jsx(
            he,
            {
              label: "Anonymous FTP permitted",
              hint: "Lets anyone read the share without a password.",
              checked: n.security.anonymousFtp,
              onChange: (y) => f((m) => {
                m.security.anonymousFtp = y;
              })
            }
          ),
          /* @__PURE__ */ i.jsx(
            he,
            {
              label: "Enforce a password policy",
              hint: "Minimum length and complexity for new passwords.",
              checked: n.security.passwordPolicy,
              onChange: (y) => f((m) => {
                m.security.passwordPolicy = y;
              })
            }
          ),
          /* @__PURE__ */ i.jsx(K, { label: "SNMP community string", hint: '"public" is the vendor default, and the first thing a scanner tries.', children: /* @__PURE__ */ i.jsx(
            "input",
            {
              className: W,
              value: n.security.snmpCommunity,
              "aria-label": "SNMP community string",
              onChange: (y) => f((m) => {
                m.security.snmpCommunity = y.target.value;
              })
            }
          ) }),
          /* @__PURE__ */ i.jsx(
            he,
            {
              label: "Callback verification policy",
              hint: "Staff ring an unexpected caller back on a number from the internal directory. Ends any pretext that rests on a claimed identity.",
              checked: n.security.callbackVerification,
              onChange: (y) => f((m) => {
                m.security.callbackVerification = y;
              })
            }
          ),
          /* @__PURE__ */ i.jsx(
            he,
            {
              label: "Dynamic ARP Inspection",
              hint: "Drops gratuitous ARP replies, defeating the MitM drill.",
              checked: n.security.dynamicArpInspection,
              onChange: (y) => f((m) => {
                m.security.dynamicArpInspection = y;
              })
            }
          ),
          n.security.lockout.failures > 0 && /* @__PURE__ */ i.jsxs("p", { className: "mt-3 font-mono text-[11px] text-warn", children: [
            "auth failures: ",
            n.security.lockout.failures,
            n.security.lockout.locked ? " — LOCKED" : ""
          ] })
        ] }),
        l === "status" && /* @__PURE__ */ i.jsx(wv, { device: n })
      ]
    }
  );
}
function mv({ device: e, edit: t }) {
  const n = b((l) => l.topology), r = b((l) => l.toggleCapture);
  b((l) => l.rev);
  const s = mn(n).get(e.id), o = s && n.devices.find((l) => l.id === s.apId), a = e.radio ? Bh(n, e) : [];
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    e.ap && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs(q, { children: [
        "Broadcast network ",
        e.ap.rogue ? "(rogue clone)" : ""
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ i.jsx(K, { label: "SSID", children: /* @__PURE__ */ i.jsx(
          "input",
          {
            className: W,
            value: e.ap.ssid,
            onChange: (l) => t((c) => {
              c.ap.ssid = l.target.value;
            })
          }
        ) }),
        /* @__PURE__ */ i.jsx(K, { label: "Channel", children: /* @__PURE__ */ i.jsx(
          "input",
          {
            className: W,
            type: "number",
            value: e.ap.channel,
            onChange: (l) => t((c) => {
              c.ap.channel = Number(l.target.value) || 6;
            })
          }
        ) })
      ] }),
      /* @__PURE__ */ i.jsx(
        K,
        {
          label: "Security",
          hint: le[e.ap.security] && le[e.ap.security].encrypted ? "✓ Payloads are encrypted over the air." : "⚠ Open network — anything in range can read every payload in cleartext.",
          children: /* @__PURE__ */ i.jsx(
            "select",
            {
              className: W,
              value: e.ap.security,
              onChange: (l) => t((c) => {
                c.ap.security = l.target.value;
              }),
              children: Object.values(le).map((l) => /* @__PURE__ */ i.jsx("option", { value: l.id, children: l.label }, l.id))
            }
          )
        }
      ),
      /* @__PURE__ */ i.jsx(K, { label: "Passphrase", children: /* @__PURE__ */ i.jsx(
        "input",
        {
          className: W,
          value: e.ap.passphrase,
          onChange: (l) => t((c) => {
            c.ap.passphrase = l.target.value;
          })
        }
      ) }),
      /* @__PURE__ */ i.jsx(K, { label: `Cell radius — ${e.ap.range}px`, hint: "How far the signal carries on the canvas. A smaller cell is a real mitigation.", children: /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "range",
          min: "90",
          max: "340",
          step: "10",
          value: e.ap.range,
          onChange: (l) => t((c) => {
            c.ap.range = Number(l.target.value);
          }),
          className: "w-full accent-[rgb(var(--nr-accent))]"
        }
      ) }),
      /* @__PURE__ */ i.jsx(
        he,
        {
          label: "802.11w Protected Management Frames",
          hint: "Signs deauthentication frames so forged ones are ignored.",
          checked: e.security.managementFrameProtection,
          onChange: (l) => t((c) => {
            c.security.managementFrameProtection = l;
          })
        }
      ),
      Object.keys(e.ap.deauthed || {}).length > 0 && /* @__PURE__ */ i.jsxs("p", { className: "mt-2 font-mono text-[11px] text-warn", children: [
        Object.keys(e.ap.deauthed).length,
        " station(s) currently banned by a deauth exercise."
      ] })
    ] }),
    e.radio && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(q, { className: e.ap ? "mt-5" : "", children: "Client radio" }),
      /* @__PURE__ */ i.jsx(
        he,
        {
          label: "Radio enabled",
          checked: e.radio.enabled,
          onChange: (l) => t((c) => {
            c.radio.enabled = l;
          })
        }
      ),
      /* @__PURE__ */ i.jsx(
        he,
        {
          label: "Monitor mode",
          hint: "Captures every frame in range instead of only its own. This is what makes passive WiFi snooping possible.",
          checked: e.radio.monitorMode,
          onChange: (l) => t((c) => {
            c.radio.monitorMode = l;
          })
        }
      ),
      /* @__PURE__ */ i.jsx(
        he,
        {
          label: "Capture to the Packet Capture tab",
          checked: !!e.capturing,
          onChange: () => r(e.id)
        }
      ),
      /* @__PURE__ */ i.jsx(
        K,
        {
          label: "Preferred SSID",
          hint: e.radio.ssid ? "✓ Pinned to one network — an open clone of another name will not be joined." : "⚠ Blank means auto-join anything in range, which is exactly what an evil twin needs.",
          children: /* @__PURE__ */ i.jsx(
            "input",
            {
              className: W,
              placeholder: "(any network)",
              value: e.radio.ssid,
              onChange: (l) => t((c) => {
                c.radio.ssid = l.target.value.trim();
              })
            }
          )
        }
      ),
      /* @__PURE__ */ i.jsx(q, { className: "mt-4", children: "Networks in range" }),
      a.length === 0 ? /* @__PURE__ */ i.jsx("p", { className: "font-mono text-[11.5px] text-soft", children: "No access points within radio range." }) : /* @__PURE__ */ i.jsx("ul", { className: "space-y-1", children: a.map(({ ap: l, dbm: c }) => {
        const u = !le[l.ap.security] || !le[l.ap.security].encrypted, d = s && s.apId === l.id;
        return /* @__PURE__ */ i.jsxs(
          "li",
          {
            className: `flex items-center gap-2 rounded-md border px-2 py-1.5 font-mono text-[11.5px] ${d ? "border-up/50 bg-up/10" : "border-line bg-panel2"}`,
            children: [
              /* @__PURE__ */ i.jsx("span", { className: "flex-1 truncate", children: l.ap.ssid }),
              /* @__PURE__ */ i.jsx(se, { tone: u ? "warn" : "up", children: u ? "OPEN" : l.ap.security.toUpperCase() }),
              /* @__PURE__ */ i.jsxs("span", { className: "text-soft", children: [
                c,
                " dBm · ",
                Uh(c),
                "/4"
              ] }),
              d && /* @__PURE__ */ i.jsx(se, { tone: "up", children: "joined" })
            ]
          },
          l.id
        );
      }) }),
      s && o && /* @__PURE__ */ i.jsxs("p", { className: "mt-3 text-[11.5px] leading-snug text-soft", children: [
        "Associated with ",
        /* @__PURE__ */ i.jsx("strong", { className: "text-ink", children: o.hostname }),
        " on “",
        s.ssid,
        "”",
        o.ap.rogue && /* @__PURE__ */ i.jsx("span", { className: "text-down", children: " — this is the rogue access point." })
      ] })
    ] })
  ] });
}
function gv({ device: e, onClose: t }) {
  const n = b((y) => y.engine), r = b((y) => y.topology), s = b((y) => y.commit), o = b((y) => y.setActiveConsole), a = b((y) => y.ensureConsole), l = b((y) => y.toggleCapture);
  b((y) => y.rev);
  const [c, u] = P.useState(""), [d, p] = P.useState(fr.sqli.defaultPayload), h = r.devices.filter((y) => y.id !== e.id), f = h.find((y) => y.id === c) || null, g = (y) => {
    a("attack", "Cyber Range"), a("capture", "Packet Capture"), o("attack");
    const m = f || h.find((x) => y.canTarget(x)) || null;
    or(y.id, {
      engine: n,
      attacker: e,
      target: m,
      commit: s,
      payload: y.needsPayload ? d : void 0
    }), t();
  }, j = jx.map((y) => ({
    category: y,
    items: Object.values(fr).filter((m) => m.category === y)
  })).filter((y) => y.items.length);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsxs("p", { className: "mb-3 text-[12px] leading-relaxed text-soft", children: [
      "Exercises launch from ",
      /* @__PURE__ */ i.jsx("strong", { className: "text-ink", children: e.hostname }),
      ". Wireless ones reach their target through the air and need no cable. Everything is simulated inside this tab."
    ] }),
    /* @__PURE__ */ i.jsx(K, { label: "Target", hint: "Leave on auto and the first eligible node is chosen for each exercise.", children: /* @__PURE__ */ i.jsxs("select", { className: W, value: c, onChange: (y) => u(y.target.value), children: [
      /* @__PURE__ */ i.jsx("option", { value: "", children: "Auto-select" }),
      h.map((y) => /* @__PURE__ */ i.jsxs("option", { value: y.id, children: [
        y.hostname,
        " — ",
        O(y) || "no IP"
      ] }, y.id))
    ] }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "mb-3 flex flex-wrap gap-2", children: [
      /* @__PURE__ */ i.jsx(_, { variant: e.capturing ? "active" : "outline", size: "sm", onClick: () => l(e.id), children: e.capturing ? "Capturing" : "Start capture" }),
      /* @__PURE__ */ i.jsx(
        _,
        {
          variant: "outline",
          size: "sm",
          onClick: () => {
            a("capture", "Packet Capture"), o("capture"), t();
          },
          children: "Open Packet Capture"
        }
      )
    ] }),
    j.map(({ category: y, items: m }) => /* @__PURE__ */ i.jsxs("section", { className: "mb-3", children: [
      /* @__PURE__ */ i.jsx(q, { children: y }),
      m.map((x) => {
        const w = $s(x.icon), k = x.category === "Wireless" ? !!e.radio : f ? x.canTarget(f) : h.some((C) => x.canTarget(C));
        return /* @__PURE__ */ i.jsxs("div", { className: "mb-2 rounded-lg border border-line bg-panel2 p-2.5", children: [
          /* @__PURE__ */ i.jsxs("h4", { className: "mb-1 flex items-center gap-2 text-[12.5px] font-bold", children: [
            /* @__PURE__ */ i.jsx(w, { size: 14, className: "text-down" }),
            x.label,
            !k && /* @__PURE__ */ i.jsx(se, { tone: "warn", children: "unavailable" })
          ] }),
          /* @__PURE__ */ i.jsx("p", { className: "mb-2 text-[11px] leading-snug text-soft", children: x.summary }),
          x.needsPayload && /* @__PURE__ */ i.jsx(
            "input",
            {
              className: `${W} mb-2`,
              value: d,
              onChange: (C) => p(C.target.value),
              "aria-label": "Injection payload"
            }
          ),
          /* @__PURE__ */ i.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ i.jsx(_, { variant: "danger", size: "sm", disabled: !k, onClick: () => g(x), children: "Launch" }),
            /* @__PURE__ */ i.jsxs("span", { className: "text-[10.5px] text-soft", children: [
              /* @__PURE__ */ i.jsx("strong", { className: "text-ink", children: "Defence:" }),
              " ",
              x.mitigation
            ] })
          ] })
        ] }, x.id);
      })
    ] }, y))
  ] });
}
function xv({ device: e, edit: t }) {
  const [n, r] = P.useState({ network: "", mask: "255.255.255.0", nextHop: "" }), [s, o] = P.useState({ id: "", name: "" });
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(q, { children: "Static routes" }),
    /* @__PURE__ */ i.jsxs("table", { className: "mb-3 w-full border-collapse font-mono text-[11.5px]", children: [
      /* @__PURE__ */ i.jsx("thead", { children: /* @__PURE__ */ i.jsxs("tr", { className: "text-[10px] uppercase text-soft", children: [
        /* @__PURE__ */ i.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "Network" }),
        /* @__PURE__ */ i.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "Mask" }),
        /* @__PURE__ */ i.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "Next hop" }),
        /* @__PURE__ */ i.jsx("th", { className: "border-b border-line p-1.5" })
      ] }) }),
      /* @__PURE__ */ i.jsxs("tbody", { children: [
        e.routes.length === 0 && /* @__PURE__ */ i.jsx("tr", { children: /* @__PURE__ */ i.jsx("td", { colSpan: 4, className: "p-2 text-soft", children: "No static routes." }) }),
        e.routes.map((a, l) => /* @__PURE__ */ i.jsxs("tr", { children: [
          /* @__PURE__ */ i.jsx("td", { className: "border-b border-line p-1.5", children: a.network }),
          /* @__PURE__ */ i.jsx("td", { className: "border-b border-line p-1.5", children: a.mask }),
          /* @__PURE__ */ i.jsx("td", { className: "border-b border-line p-1.5", children: a.nextHop }),
          /* @__PURE__ */ i.jsx("td", { className: "border-b border-line p-1.5 text-right", children: /* @__PURE__ */ i.jsx(
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
    /* @__PURE__ */ i.jsxs("div", { className: "grid gap-2 sm:grid-cols-3", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          className: W,
          placeholder: "10.0.0.0",
          value: n.network,
          onChange: (a) => r({ ...n, network: a.target.value })
        }
      ),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          className: W,
          placeholder: "255.0.0.0",
          value: n.mask,
          onChange: (a) => r({ ...n, mask: a.target.value })
        }
      ),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          className: W,
          placeholder: "192.168.10.2",
          value: n.nextHop,
          onChange: (a) => r({ ...n, nextHop: a.target.value })
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(
      _,
      {
        variant: "outline",
        size: "sm",
        className: "mt-2",
        disabled: !$e(n.network) || !$e(n.mask) || !$e(n.nextHop),
        onClick: () => {
          t((a) => {
            a.routes.push({ ...n });
          }), r({ network: "", mask: "255.255.255.0", nextHop: "" });
        },
        children: "Add route"
      }
    ),
    /* @__PURE__ */ i.jsx(q, { className: "mt-5", children: "VLANs" }),
    /* @__PURE__ */ i.jsxs("div", { className: "mb-2 flex flex-wrap gap-1.5", children: [
      e.vlans.length === 0 && /* @__PURE__ */ i.jsx("span", { className: "text-[12px] text-soft", children: "None configured." }),
      e.vlans.map((a) => /* @__PURE__ */ i.jsxs(se, { tone: "accent", children: [
        a.id,
        " · ",
        a.name,
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "ml-1 opacity-60 hover:opacity-100",
            onClick: () => t((l) => {
              l.vlans = l.vlans.filter((c) => c.id !== a.id);
            }),
            children: "×"
          }
        )
      ] }, a.id))
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "grid gap-2 sm:grid-cols-2", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          className: W,
          placeholder: "VLAN id, e.g. 20",
          value: s.id,
          onChange: (a) => o({ ...s, id: a.target.value })
        }
      ),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          className: W,
          placeholder: "Name, e.g. STAFF",
          value: s.name,
          onChange: (a) => o({ ...s, name: a.target.value })
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(
      _,
      {
        variant: "outline",
        size: "sm",
        className: "mt-2",
        disabled: !Number(s.id),
        onClick: () => {
          const a = Number(s.id);
          t((l) => {
            l.vlans.some((c) => c.id === a) || l.vlans.push({ id: a, name: s.name || `VLAN${a}` });
          }), o({ id: "", name: "" });
        },
        children: "Add VLAN"
      }
    )
  ] });
}
function yv({ device: e, edit: t }) {
  const [n, r] = P.useState({ id: "101", action: "deny", source: "any", dest: "any" });
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(q, { children: "Access control list" }),
    /* @__PURE__ */ i.jsxs("p", { className: "mb-3 text-[11.5px] leading-snug text-soft", children: [
      "Rules are evaluated top-down on every simulated flow crossing this device. A ",
      /* @__PURE__ */ i.jsx("code", { children: "deny" }),
      " ",
      "matching the source stops a flood at the perimeter."
    ] }),
    e.acl.length === 0 ? /* @__PURE__ */ i.jsx("p", { className: "mb-3 font-mono text-[11.5px] text-soft", children: "No rules — all traffic permitted." }) : /* @__PURE__ */ i.jsx("ol", { className: "mb-3 space-y-1", children: e.acl.map((s, o) => /* @__PURE__ */ i.jsxs("li", { className: "flex items-center gap-2 rounded-md border border-line bg-panel2 px-2 py-1.5 font-mono text-[11.5px]", children: [
      /* @__PURE__ */ i.jsx(se, { tone: s.action === "deny" ? "down" : "up", children: s.action }),
      /* @__PURE__ */ i.jsxs("span", { className: "min-w-0 flex-1 truncate", children: [
        s.source,
        " → ",
        s.dest
      ] }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "text-down hover:underline",
          onClick: () => t((a) => {
            a.acl.splice(o, 1);
          }),
          children: "remove"
        }
      )
    ] }, o)) }),
    /* @__PURE__ */ i.jsxs("div", { className: "grid gap-2 sm:grid-cols-4", children: [
      /* @__PURE__ */ i.jsx("input", { className: W, value: n.id, onChange: (s) => r({ ...n, id: s.target.value }) }),
      /* @__PURE__ */ i.jsxs("select", { className: W, value: n.action, onChange: (s) => r({ ...n, action: s.target.value }), children: [
        /* @__PURE__ */ i.jsx("option", { value: "deny", children: "deny" }),
        /* @__PURE__ */ i.jsx("option", { value: "permit", children: "permit" })
      ] }),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          className: W,
          placeholder: "source / any",
          value: n.source,
          onChange: (s) => r({ ...n, source: s.target.value })
        }
      ),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          className: W,
          placeholder: "dest / any",
          value: n.dest,
          onChange: (s) => r({ ...n, dest: s.target.value })
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(
      _,
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
function vv({ device: e, edit: t }) {
  const [n, r] = P.useState({ name: "", ip: "" });
  return /* @__PURE__ */ i.jsxs("div", { className: "mt-4", children: [
    /* @__PURE__ */ i.jsx(q, { children: "DNS zone" }),
    Object.entries(e.dnsZone).length === 0 && /* @__PURE__ */ i.jsx("p", { className: "mb-2 font-mono text-[11.5px] text-soft", children: "Empty zone — add an A record." }),
    Object.entries(e.dnsZone).map(([s, o]) => /* @__PURE__ */ i.jsxs("div", { className: "mb-1 flex items-center gap-2 font-mono text-[11.5px]", children: [
      /* @__PURE__ */ i.jsx("span", { className: "flex-1 truncate", children: s }),
      /* @__PURE__ */ i.jsx("span", { className: "text-soft", children: "A" }),
      /* @__PURE__ */ i.jsx("span", { children: o }),
      /* @__PURE__ */ i.jsx("button", { className: "text-down", onClick: () => t((a) => {
        delete a.dnsZone[s];
      }), children: "×" })
    ] }, s)),
    /* @__PURE__ */ i.jsxs("div", { className: "mt-2 grid gap-2 sm:grid-cols-2", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          className: W,
          placeholder: "web.lab.local",
          value: n.name,
          onChange: (s) => r({ ...n, name: s.target.value })
        }
      ),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          className: W,
          placeholder: "192.168.10.80",
          value: n.ip,
          onChange: (s) => r({ ...n, ip: s.target.value })
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(
      _,
      {
        variant: "outline",
        size: "sm",
        className: "mt-2",
        disabled: !n.name || !$e(n.ip),
        onClick: () => {
          t((s) => {
            s.dnsZone[n.name] = n.ip;
          }), r({ name: "", ip: "" });
        },
        children: "Add A record"
      }
    )
  ] });
}
function wv({ device: e }) {
  const t = e.runtime, n = [
    ["CPU load", `${t.cpu.toFixed(0)}%`],
    ["Memory", `${t.memory.toFixed(0)}%`],
    ["Packets in", Math.round(t.packetsIn)],
    ["Packets out", Math.round(t.packetsOut)],
    ["Packets dropped", Math.round(t.packetsDropped)],
    ["Open sessions", t.sessions],
    ["Last exercise", t.lastExercise || "—"]
  ], r = Object.entries(e.arp);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(q, { children: "Runtime counters" }),
    /* @__PURE__ */ i.jsx("dl", { className: "mb-4 grid grid-cols-2 gap-x-4 gap-y-1.5 font-mono text-[12px]", children: n.map(([s, o]) => /* @__PURE__ */ i.jsxs(es.Fragment, { children: [
      /* @__PURE__ */ i.jsx("dt", { className: "text-soft", children: s }),
      /* @__PURE__ */ i.jsx("dd", { className: "text-right tabular-nums", children: o })
    ] }, s)) }),
    /* @__PURE__ */ i.jsx("div", { className: "mb-4 h-2 overflow-hidden rounded-full bg-line", children: /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "h-full rounded-full transition-all",
        style: {
          width: `${Math.min(100, t.cpu)}%`,
          background: t.cpu > 85 ? "rgb(var(--nr-down))" : t.cpu > 60 ? "rgb(var(--nr-warn))" : "rgb(var(--nr-up))"
        }
      }
    ) }),
    /* @__PURE__ */ i.jsx(q, { children: "ARP / neighbour table" }),
    r.length === 0 ? /* @__PURE__ */ i.jsx("p", { className: "font-mono text-[11.5px] text-soft", children: "Empty — generate traffic to populate it." }) : /* @__PURE__ */ i.jsx("ul", { className: "space-y-1 font-mono text-[11.5px]", children: r.map(([s, o]) => /* @__PURE__ */ i.jsxs("li", { className: o.spoofed ? "text-down" : "", children: [
      s,
      " → ",
      o.mac,
      " ",
      o.spoofed ? "  ⚠ duplicate (poisoned)" : ""
    ] }, s)) }),
    e.database && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(q, { className: "mt-4", children: "Mock database" }),
      /* @__PURE__ */ i.jsxs("p", { className: "font-mono text-[11.5px] text-soft", children: [
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
function bv({ onClose: e }) {
  const t = b((m) => m.topology), n = b((m) => m.engine), r = b((m) => m.commit), s = b((m) => m.setActiveConsole), o = b((m) => m.ensureConsole);
  b((m) => m.rev);
  const a = t.devices, l = P.useMemo(
    () => a.find((m) => m.typeId === "pc") || a[0],
    [a]
  ), [c, u] = P.useState((l == null ? void 0 : l.id) || ""), [d, p] = P.useState(""), [h, f] = P.useState(fr.sqli.defaultPayload), g = a.find((m) => m.id === c), j = (m) => {
    o("attack", "Cyber Range"), s("attack");
    const x = fr[m], k = a.find((C) => C.id === d) || (x.needsTarget === !1 ? null : a.find((C) => C.id !== c && x.canTarget(C)));
    or(m, {
      engine: n,
      attacker: g,
      target: k,
      commit: r,
      payload: m === "sqli" ? h : void 0
    });
  };
  return /* @__PURE__ */ i.jsxs(
    dn,
    {
      title: "Cyber Range",
      subtitle: "Synthetic exercises — nothing leaves this browser tab",
      icon: /* @__PURE__ */ i.jsx("span", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-down/40 bg-down/15 text-down", children: /* @__PURE__ */ i.jsx(sa, { size: 18 }) }),
      onClose: e,
      width: "max-w-xl",
      footer: /* @__PURE__ */ i.jsx("p", { className: "text-[11px] leading-snug text-soft", children: "Exercises are grouped by the phase of an engagement they belong to, because order is most of the method: you scan before you exploit, and you report rather than hoard. Every one of these runs against simulated devices in this tab — against a real network, the same actions need written authorisation and a defined scope." }),
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "mb-4 grid gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ i.jsx(K, { label: "Attacker node", children: /* @__PURE__ */ i.jsxs("select", { className: W, value: c, onChange: (m) => u(m.target.value), children: [
            a.length === 0 && /* @__PURE__ */ i.jsx("option", { value: "", children: "no devices placed" }),
            a.map((m) => /* @__PURE__ */ i.jsxs("option", { value: m.id, children: [
              m.hostname,
              " — ",
              O(m) || "no IP"
            ] }, m.id))
          ] }) }),
          /* @__PURE__ */ i.jsx(K, { label: "Target node", children: /* @__PURE__ */ i.jsxs("select", { className: W, value: d, onChange: (m) => p(m.target.value), children: [
            /* @__PURE__ */ i.jsx("option", { value: "", children: "auto-select a valid target" }),
            a.filter((m) => m.id !== c).map((m) => /* @__PURE__ */ i.jsxs("option", { value: m.id, children: [
              m.hostname,
              " — ",
              O(m) || "no IP"
            ] }, m.id))
          ] }) })
        ] }),
        Sx.map((m) => {
          const x = Object.values(fr).filter((w) => w.phase === m);
          return x.length ? /* @__PURE__ */ i.jsxs("section", { children: [
            /* @__PURE__ */ i.jsx(q, { children: m }),
            x.map((w) => y(w))
          ] }, m) : null;
        })
      ]
    }
  );
  function y(m) {
    {
      const x = $s(m.icon), w = a.find((C) => C.id === d), k = m.category === "Wireless" ? !!(g && g.radio) : w ? m.canTarget(w) : a.some((C) => C.id !== c && m.canTarget(C));
      return /* @__PURE__ */ i.jsxs("article", { className: "mb-2.5 rounded-xl border border-line bg-panel2 p-3", children: [
        /* @__PURE__ */ i.jsxs("h4", { className: "mb-1 flex items-center gap-2 text-[13px] font-bold", children: [
          /* @__PURE__ */ i.jsx(x, { size: 15, className: "text-down" }),
          m.label,
          !k && /* @__PURE__ */ i.jsx(se, { tone: "warn", children: "no valid target" })
        ] }),
        /* @__PURE__ */ i.jsx("p", { className: "mb-2 text-[11.5px] leading-snug text-soft", children: m.summary }),
        /* @__PURE__ */ i.jsxs("dl", { className: "mb-2 space-y-1 rounded-lg border border-line bg-panel/60 p-2 text-[11px] leading-snug", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex gap-1.5", children: [
            /* @__PURE__ */ i.jsx("dt", { className: "shrink-0 font-semibold text-soft", children: "Looks like" }),
            /* @__PURE__ */ i.jsx("dd", { className: "min-w-0 text-ink/90", children: m.indicators })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "flex gap-1.5", children: [
            /* @__PURE__ */ i.jsx("dt", { className: "shrink-0 font-semibold text-soft", children: "Find it" }),
            /* @__PURE__ */ i.jsx("dd", { className: "min-w-0 text-ink/90", children: m.detect })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "flex gap-1.5", children: [
            /* @__PURE__ */ i.jsx("dt", { className: "shrink-0 font-semibold text-soft", children: "Then what" }),
            /* @__PURE__ */ i.jsx("dd", { className: "min-w-0 text-ink/90", children: m.nextStep })
          ] })
        ] }),
        m.needsPayload && /* @__PURE__ */ i.jsx(
          "input",
          {
            className: `${W} mb-2`,
            value: h,
            onChange: (C) => f(C.target.value),
            "aria-label": "Injection payload"
          }
        ),
        /* @__PURE__ */ i.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ i.jsx(_, { variant: "danger", size: "sm", disabled: !g || !k, onClick: () => j(m.id), children: "Run exercise" }),
          /* @__PURE__ */ i.jsxs("span", { className: "text-[11px] text-soft", children: [
            /* @__PURE__ */ i.jsx("strong", { className: "text-ink", children: "Defence:" }),
            " ",
            m.mitigation
          ] })
        ] })
      ] }, m.id);
    }
  }
}
function kv({ onClose: e }) {
  const t = b((c) => c.settings), n = b((c) => c.updateSettings), r = b((c) => c.resetTopology), s = b((c) => c.loadStarterTopology), o = b((c) => c.forgetSavedWorkspace), [a, l] = P.useState(!1);
  return /* @__PURE__ */ i.jsxs(
    dn,
    {
      title: "Settings",
      subtitle: "Stored in this browser only",
      icon: /* @__PURE__ */ i.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg border border-line bg-panel2 text-accent", children: /* @__PURE__ */ i.jsx(ra, { size: 18 }) }),
      onClose: e,
      width: "max-w-md",
      children: [
        /* @__PURE__ */ i.jsx(q, { children: "Appearance" }),
        /* @__PURE__ */ i.jsx(K, { label: "Theme", children: /* @__PURE__ */ i.jsx("div", { className: "flex gap-1.5", children: [
          ["light", "Light", Xl],
          ["dark", "Dark", Gl]
        ].map(([c, u, d]) => /* @__PURE__ */ i.jsxs(
          _,
          {
            size: "sm",
            variant: t.theme === c ? "active" : "outline",
            onClick: () => n({ theme: c }),
            children: [
              /* @__PURE__ */ i.jsx(d, { size: 14 }),
              " ",
              u
            ]
          },
          c
        )) }) }),
        /* @__PURE__ */ i.jsx(q, { className: "mt-5", children: "Your work" }),
        /* @__PURE__ */ i.jsx(
          he,
          {
            label: "Keep my work in this browser",
            hint: "Restores the canvas after a refresh or a closed tab. Stored only on this device — it is never sent anywhere. Use Save in the toolbar for a copy you can move between machines.",
            checked: t.autosave !== !1,
            onChange: (c) => n({ autosave: c })
          }
        ),
        /* @__PURE__ */ i.jsxs("div", { className: "mt-2", children: [
          /* @__PURE__ */ i.jsxs(
            _,
            {
              size: "sm",
              onClick: () => {
                o(), l(!0);
              },
              disabled: a,
              children: [
                /* @__PURE__ */ i.jsx(gt, { size: 13 }),
                " ",
                a ? "Saved copy cleared" : "Clear the saved copy"
              ]
            }
          ),
          /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-[11px] text-soft", children: "Forgets the stored workspace without touching what is on screen." })
        ] }),
        /* @__PURE__ */ i.jsx(q, { className: "mt-5", children: "Tool output" }),
        /* @__PURE__ */ i.jsx(
          he,
          {
            label: "Add instructor notes to tool output",
            hint: "Off by default, so nmap and the scanner print what the real tools print and nothing else. Turn it on to have the hint and the mitigation appear inline while a class finds its feet — the Cyber Range panel always carries them either way.",
            checked: t.coaching === !0,
            onChange: (c) => n({ coaching: c })
          }
        ),
        /* @__PURE__ */ i.jsx(q, { className: "mt-5", children: "Live network" }),
        /* @__PURE__ */ i.jsx(
          he,
          {
            label: "Background traffic",
            hint: "Idle hosts resolve names, fetch pages and refresh ARP, so the capture pane is never empty. Realtime mode only.",
            checked: t.ambient !== !1,
            onChange: (c) => n({ ambient: c })
          }
        ),
        /* @__PURE__ */ i.jsx(
          he,
          {
            label: "Show canvas grid",
            checked: t.showGrid,
            onChange: (c) => n({ showGrid: c })
          }
        ),
        /* @__PURE__ */ i.jsx(
          he,
          {
            label: "Show hostnames and addresses",
            checked: t.showLabels,
            onChange: (c) => n({ showLabels: c })
          }
        ),
        /* @__PURE__ */ i.jsx(q, { className: "mt-5", children: "Simulation" }),
        /* @__PURE__ */ i.jsx(K, { label: `Speed — ${t.speed}×`, hint: "Scales the virtual clock: packet flight, ping intervals and exercise pacing.", children: /* @__PURE__ */ i.jsx(
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
        /* @__PURE__ */ i.jsx(q, { className: "mt-5", children: "Workspace" }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ i.jsxs(_, { variant: "outline", size: "sm", onClick: () => {
            r(), e();
          }, children: [
            /* @__PURE__ */ i.jsx(gt, { size: 14 }),
            " Clear workspace"
          ] }),
          /* @__PURE__ */ i.jsxs(_, { variant: "outline", size: "sm", onClick: () => {
            s(), e();
          }, children: [
            /* @__PURE__ */ i.jsx(Zl, { size: 14 }),
            " Load starter segment"
          ] })
        ] }),
        /* @__PURE__ */ i.jsx(q, { className: "mt-5", children: "Keyboard" }),
        /* @__PURE__ */ i.jsx("dl", { className: "grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[12px]", children: [
          ["Ctrl + Z / Ctrl + Y", "Undo / redo"],
          ["Delete", "Remove selected device or cable"],
          ["Space", "Pause / resume the simulation"],
          ["C / V / P", "Cable tool / select tool / PDU tool"],
          ["F", "Fit everything in view"],
          ["Wheel · drag", "Zoom · pan the canvas"],
          ["Ctrl + D", "Duplicate selected device"],
          ["Ctrl + L", "Clear the active console"],
          ["Esc", "Close dialogs and deselect"]
        ].map(([c, u]) => /* @__PURE__ */ i.jsxs(es.Fragment, { children: [
          /* @__PURE__ */ i.jsx("dt", { className: "font-mono text-[11px] text-soft", children: c }),
          /* @__PURE__ */ i.jsx("dd", { children: u })
        ] }, c)) })
      ]
    }
  );
}
function lf(e) {
  const t = ct(e);
  if (t === null) return null;
  const n = t >>> 24 & 255;
  return n < 128 ? { letter: "A", defaultPrefix: 8, note: "large networks" } : n < 192 ? { letter: "B", defaultPrefix: 16, note: "medium networks" } : n < 224 ? { letter: "C", defaultPrefix: 24, note: "small networks" } : n < 240 ? { letter: "D", defaultPrefix: null, note: "multicast" } : { letter: "E", defaultPrefix: null, note: "reserved / experimental" };
}
const Vt = (e, t) => {
  const [n, r] = t.split("/"), s = r === "0" ? 0 : 4294967295 << 32 - Number(r) >>> 0;
  return (e & s) >>> 0 === (ct(n) & s) >>> 0;
};
function Sv(e) {
  const t = ct(e);
  return t === null ? null : Vt(t, "10.0.0.0/8") || Vt(t, "172.16.0.0/12") || Vt(t, "192.168.0.0/16") ? { kind: "private", label: "Private (RFC 1918)", routable: !1 } : Vt(t, "127.0.0.0/8") ? { kind: "loopback", label: "Loopback", routable: !1 } : Vt(t, "169.254.0.0/16") ? { kind: "link-local", label: "Link-local (APIPA)", routable: !1 } : Vt(t, "224.0.0.0/4") ? { kind: "multicast", label: "Multicast", routable: !1 } : Vt(t, "100.64.0.0/10") ? { kind: "cgnat", label: "Carrier-grade NAT", routable: !1 } : Vt(t, "240.0.0.0/4") ? { kind: "reserved", label: "Reserved", routable: !1 } : { kind: "public", label: "Public", routable: !0 };
}
function Ba(e) {
  const t = ct(e);
  return t === null ? "" : [24, 16, 8, 0].map((n) => (t >>> n & 255).toString(2).padStart(8, "0")).join(".");
}
function jr(e, t) {
  if (!$e(e)) return null;
  const n = typeof t == "number" ? t : /^\d+$/.test(String(t)) ? Number(t) : Ve(t);
  if (n == null || n < 0 || n > 32) return null;
  const r = Fh(n), s = ct(r), o = ct(e), a = (o & s) >>> 0, l = (a | ~s >>> 0) >>> 0, c = 2 ** (32 - n);
  let u, d, p;
  return n === 32 ? (u = 1, d = a, p = a) : n === 31 ? (u = 2, d = a, p = l) : (u = c - 2, d = a + 1 >>> 0, p = l - 1 >>> 0), {
    address: e,
    prefix: n,
    mask: r,
    cidr: `${kt(a)}/${n}`,
    wildcard: kt(~s >>> 0),
    network: kt(a),
    broadcast: kt(l),
    firstHost: kt(d),
    lastHost: kt(p),
    totalAddresses: c,
    usableHosts: u,
    isNetworkAddress: n < 31 && o === a,
    isBroadcastAddress: n < 31 && o === l,
    class: lf(e),
    scope: Sv(e),
    binaryIp: Ba(e),
    binaryMask: Ba(r),
    binaryNetwork: Ba(kt(a))
  };
}
function jv(e) {
  return e ? e.isNetworkAddress ? `${e.address} is the network address of ${e.cidr} — it identifies the subnet, so no host can use it.` : e.isBroadcastAddress ? `${e.address} is the broadcast address of ${e.cidr} — it reaches every host, so none can use it.` : null : null;
}
function Nv(e) {
  const t = String(e || "").trim();
  if (!t) return { ok: !1, reason: "Enter an address, for example 192.168.1.10/24", error: "Enter an address, for example 192.168.1.10/24" };
  if (t.includes("/")) {
    const [s, o] = t.split("/"), a = s.trim(), l = Number(String(o).trim());
    return $e(a) ? !Number.isInteger(l) || l < 0 || l > 32 ? { ok: !1, reason: "Prefix length must be between 0 and 32.", error: "Prefix length must be between 0 and 32." } : { ok: !0, ip: a, prefix: l, assumed: !1 } : { ok: !1, reason: `${a} is not a valid IPv4 address.` };
  }
  const n = t.split(/\s+/);
  if (n.length >= 2) {
    const [s, o] = n;
    if (!$e(s)) return { ok: !1, reason: `${s} is not a valid IPv4 address.` };
    if (!$e(o)) return { ok: !1, reason: `${o} is not a valid subnet mask.` };
    const a = Ve(o);
    return a === null ? { ok: !1, reason: `${o} is not a contiguous mask — the ones must be unbroken.` } : { ok: !0, ip: s, prefix: a, assumed: !1 };
  }
  if (!$e(t)) return { ok: !1, reason: `${t} is not a valid IPv4 address.` };
  const r = lf(t);
  return !r || r.defaultPrefix === null ? { ok: !1, reason: `Class ${r ? r.letter : "?"} addresses have no default mask — give a prefix.` } : { ok: !0, ip: t, prefix: r.defaultPrefix, assumed: !0 };
}
function Cv(e, t, n, r = 256) {
  const s = jr(e, t);
  if (!s) return { ok: !1, reason: "That is not a valid network.", error: "That is not a valid network." };
  if (n <= t)
    return { ok: !1, reason: `/${n} is not longer than /${t} — a split needs smaller blocks.` };
  if (n > 32) return { ok: !1, reason: "Prefix length cannot exceed 32.", error: "Prefix length cannot exceed 32." };
  const o = 2 ** (n - t);
  if (o > r)
    return { ok: !1, count: o, reason: `That would make ${o.toLocaleString()} subnets — too many to list.` };
  const a = 2 ** (32 - n), l = ct(s.network), c = Array.from(
    { length: o },
    (u, d) => jr(kt(l + d * a >>> 0), n)
  );
  return { ok: !0, count: o, rows: c };
}
function $v(e = 8, t = 32) {
  const n = [];
  for (let r = e; r <= t; r++) {
    const s = 2 ** (32 - r), o = Fh(r);
    n.push({
      prefix: r,
      mask: o,
      wildcard: kt(~ct(o) >>> 0),
      total: s,
      usable: r === 32 ? 1 : r === 31 ? 2 : s - 2,
      // Within the octet the prefix falls in, how far apart subnets sit.
      blockSize: r % 8 === 0 ? 256 : 2 ** (8 - r % 8),
      subnetsOfA24: r >= 24 ? 2 ** (r - 24) : null
    });
  }
  return n;
}
const Cn = {
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
], qi = {
  easy: { prefixes: [24], label: "Whole octets (/24)" },
  medium: { prefixes: [25, 26, 27, 28], label: "Inside the last octet (/25–/28)" },
  hard: { prefixes: [17, 18, 20, 22, 23, 29, 30], label: "Across octets (/17–/30)" }
}, Pv = Object.entries(qi).map(([e, t]) => ({ id: e, ...t })), Ku = (e, t) => e[Math.floor(t() * e.length)];
function Gi(e = "medium", t = Math.random) {
  const n = qi[e] || qi.medium, r = Ku(n.prefixes, t), s = Ku(
    [
      () => `192.168.${Math.floor(t() * 256)}.${Math.floor(t() * 256)}`,
      () => `172.${16 + Math.floor(t() * 16)}.${Math.floor(t() * 256)}.${Math.floor(t() * 256)}`,
      () => `10.${Math.floor(t() * 256)}.${Math.floor(t() * 256)}.${Math.floor(t() * 256)}`
    ],
    t
  )(), o = jr(s, r);
  return !o || o.isNetworkAddress || o.isBroadcastAddress ? Gi(e, t) : { ip: s, prefix: r, difficulty: e };
}
const Ev = (e) => String(e ?? "").trim().replace(/\s+/g, "");
function Tv(e, t, n = {}) {
  const r = jr(e, t);
  if (!r) return { ok: !1, reason: "That question is not valid.", results: [], error: "That question is not valid.", results: [] };
  const s = t % 8 === 0 ? 256 : 2 ** (8 - t % 8), o = lo.map((c) => {
    const u = String(r[c.key]), d = Ev(n[c.key]);
    if (!d) return { ...c, state: "blank", expected: u, given: "" };
    const p = c.numeric ? Number(d.replace(/,/g, "")) === Number(u) : d === u;
    return {
      ...c,
      state: p ? "correct" : "wrong",
      expected: u,
      given: d,
      hint: p ? null : Av(c.key, r, d, s)
    };
  }), a = o.filter((c) => c.state !== "blank"), l = o.filter((c) => c.state === "correct");
  return {
    ok: !0,
    results: o,
    info: r,
    answered: a.length,
    correct: l.length,
    total: lo.length,
    allCorrect: l.length === lo.length
  };
}
function Av(e, t, n, r) {
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
function Iv(e, t) {
  const n = jr(e, t);
  if (!n) return [];
  const r = Math.floor(t / 8), s = t % 8, o = s === 0 ? 256 : 2 ** (8 - s), a = s === 0 ? Math.max(0, r - 1) : r, c = e.split(".").map(Number)[a], u = Math.floor(c / o) * o;
  return [
    {
      title: "Write out the mask",
      detail: `/${t} is ${t} one-bits: ${r} full octet${r === 1 ? "" : "s"} of 255` + (s ? `, then ${s} bit${s === 1 ? "" : "s"} in the next octet.` : "."),
      result: n.mask
    },
    {
      title: "Find the interesting octet",
      detail: s === 0 ? `The prefix lands on an octet boundary, so octet ${a + 1} is where subnets step.` : `The prefix stops part-way through octet ${a + 1}, so that is the interesting octet.`,
      result: `octet ${a + 1}`
    },
    {
      title: "Work out the block size",
      detail: s === 0 ? "A whole-octet boundary steps in 256s." : `256 − ${256 - o} = ${o}. Subnets start every ${o} in that octet.`,
      result: String(o)
    },
    {
      title: "Count up to the address",
      detail: `Counting in ${o}s: ${Mv(o, c)}. ${c} falls in the ${u} block.`,
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
function Mv(e, t) {
  const n = [];
  for (let a = 0; a < 256; a += e) n.push(a);
  if (n.length <= 9) return n.join(", ");
  const r = Math.floor(t / e), s = Math.max(0, r - 2), o = n.slice(s, r + 3);
  return `${s > 0 ? "…, " : ""}${o.join(", ")}${r + 3 < n.length ? ", …" : ""}`;
}
function Lv({ onClose: e }) {
  const t = b((f) => f.topology), [n, r] = P.useState("192.168.10.37/24"), [s, o] = P.useState(26), [a, l] = P.useState("practice"), c = P.useMemo(() => Nv(n), [n]), u = P.useMemo(
    () => c.ok ? jr(c.ip, c.prefix) : null,
    [c]
  ), d = jv(u), p = P.useMemo(
    () => u ? Cv(u.network, u.prefix, s) : null,
    [u, s]
  ), h = t.devices.flatMap((f) => f.interfaces.filter((g) => g.ip).map((g) => ({ device: f, iface: g }))).slice(0, 12);
  return /* @__PURE__ */ i.jsxs(
    dn,
    {
      title: "Subnet calculator",
      subtitle: "Hover any field for what it means",
      icon: /* @__PURE__ */ i.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg border border-line bg-panel2 text-accent", children: /* @__PURE__ */ i.jsx(ta, { size: 18 }) }),
      onClose: e,
      width: "max-w-3xl",
      children: [
        /* @__PURE__ */ i.jsx("nav", { className: "mb-4 flex flex-wrap gap-1.5", children: [["practice", "Practice"], ["calculator", "Check an address"], ["split", "Split a block"], ["table", "Prefix table"]].map(([f, g]) => /* @__PURE__ */ i.jsx(_, { size: "sm", variant: a === f ? "active" : "outline", onClick: () => l(f), children: g }, f)) }),
        a !== "practice" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            K,
            {
              label: "Address",
              hint: "Accepts 192.168.1.10/24, 192.168.1.10 255.255.255.0, or a bare address.",
              children: /* @__PURE__ */ i.jsx(
                "input",
                {
                  className: W,
                  value: n,
                  onChange: (f) => r(f.target.value),
                  spellCheck: !1,
                  "aria-label": "Address to analyse"
                }
              )
            }
          ),
          h.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "mb-4 flex flex-wrap gap-1.5", children: [
            /* @__PURE__ */ i.jsx("span", { className: "text-[11px] text-soft", children: "From your topology:" }),
            h.map(({ device: f, iface: g }) => /* @__PURE__ */ i.jsx(
              "button",
              {
                onClick: () => r(`${g.ip}/${Ve(g.mask) ?? 24}`),
                className: "rounded-md border border-line bg-panel2 px-1.5 py-0.5 font-mono text-[10.5px] text-soft hover:border-accent hover:text-accent",
                title: `${f.hostname} ${g.name}`,
                children: g.ip
              },
              `${f.id}-${g.name}`
            ))
          ] }),
          !c.ok && /* @__PURE__ */ i.jsx("p", { className: "mb-3 text-[12.5px] text-down", children: c.error }),
          c.ok && c.assumed && /* @__PURE__ */ i.jsxs("p", { className: "mb-3 text-[11.5px] text-warn", children: [
            "No prefix given — assuming the classful default /",
            c.prefix,
            "."
          ] })
        ] }),
        a === "practice" && /* @__PURE__ */ i.jsx(Ov, {}),
        u && a === "calculator" && /* @__PURE__ */ i.jsx(Rv, { info: u, warning: d }),
        u && a === "split" && /* @__PURE__ */ i.jsx(Dv, { info: u, split: p, splitTo: s, setSplitTo: o }),
        a === "table" && /* @__PURE__ */ i.jsx(zv, {})
      ]
    }
  );
}
function Pt({ k: e, label: t, value: n, tone: r }) {
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "group relative rounded-lg border border-line bg-panel2 px-2.5 py-2",
      tabIndex: 0,
      title: Cn[e] || "",
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-soft", children: t }),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `font-mono text-[13px] ${r === "down" ? "text-down" : r === "up" ? "text-up" : "text-ink"}`,
            children: n
          }
        ),
        Cn[e] && /* @__PURE__ */ i.jsx("div", { className: "pointer-events-none absolute left-0 top-full z-20 mt-1 hidden w-60 rounded-lg border border-line bg-panel p-2 text-[11px] leading-snug text-soft shadow-xl group-hover:block group-focus:block", children: Cn[e] })
      ]
    }
  );
}
function Rv({ info: e, warning: t }) {
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    t && /* @__PURE__ */ i.jsx("p", { className: "mb-3 rounded-lg border border-warn/40 bg-warn/10 px-3 py-2 text-[12px] leading-snug text-warn", children: t }),
    /* @__PURE__ */ i.jsxs("div", { className: "mb-3 grid gap-2 sm:grid-cols-3", children: [
      /* @__PURE__ */ i.jsx(Pt, { k: "cidr", label: "Subnet", value: e.cidr, tone: "up" }),
      /* @__PURE__ */ i.jsx(Pt, { k: "mask", label: "Mask", value: e.mask }),
      /* @__PURE__ */ i.jsx(Pt, { k: "wildcard", label: "Wildcard", value: e.wildcard }),
      /* @__PURE__ */ i.jsx(Pt, { k: "network", label: "Network", value: e.network }),
      /* @__PURE__ */ i.jsx(Pt, { k: "broadcast", label: "Broadcast", value: e.broadcast }),
      /* @__PURE__ */ i.jsx(Pt, { k: "usableHosts", label: "Usable hosts", value: e.usableHosts.toLocaleString() }),
      /* @__PURE__ */ i.jsx(Pt, { k: "firstHost", label: "First host", value: e.firstHost }),
      /* @__PURE__ */ i.jsx(Pt, { k: "lastHost", label: "Last host", value: e.lastHost }),
      /* @__PURE__ */ i.jsx(Pt, { k: "totalAddresses", label: "Total addresses", value: e.totalAddresses.toLocaleString() })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "mb-3 flex flex-wrap gap-2", children: [
      /* @__PURE__ */ i.jsxs(se, { tone: "accent", title: Cn.class, children: [
        "Class ",
        e.class.letter
      ] }),
      /* @__PURE__ */ i.jsx(se, { tone: e.scope.kind === "public" ? "warn" : "up", title: Cn.scope, children: e.scope.label }),
      /* @__PURE__ */ i.jsxs(se, { children: [
        e.prefix,
        " network bits · ",
        32 - e.prefix,
        " host bits"
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(q, { children: "In binary" }),
    /* @__PURE__ */ i.jsxs("div", { className: "rounded-lg border border-line bg-panel2 p-2.5 font-mono text-[11.5px] leading-relaxed", children: [
      /* @__PURE__ */ i.jsxs("div", { title: Cn.binaryIp, children: [
        /* @__PURE__ */ i.jsx("span", { className: "text-soft", children: "address " }),
        /* @__PURE__ */ i.jsx("span", { className: "text-accent", children: e.binaryIp.slice(0, Zu(e.prefix)) }),
        /* @__PURE__ */ i.jsx("span", { className: "text-ink", children: e.binaryIp.slice(Zu(e.prefix)) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { title: Cn.binaryMask, children: [
        /* @__PURE__ */ i.jsx("span", { className: "text-soft", children: "mask    " }),
        /* @__PURE__ */ i.jsx("span", { className: "text-ink", children: e.binaryMask })
      ] }),
      /* @__PURE__ */ i.jsx("p", { className: "mt-1.5 whitespace-normal text-[10.5px] text-soft", children: "The highlighted bits are fixed by the mask; everything after them numbers the hosts." })
    ] })
  ] });
}
function Zu(e) {
  const t = Math.floor(e / 8), n = e % 8;
  return t * 9 + (n || 0);
}
function Dv({ info: e, split: t, splitTo: n, setSplitTo: r }) {
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(K, { label: `Split ${e.cidr} into /${n} subnets`, children: /* @__PURE__ */ i.jsx(
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
    t != null && t.ok ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("p", { className: "mb-2 text-[12px] text-soft", children: [
        t.count.toLocaleString(),
        " subnets of ",
        t.rows[0].usableHosts.toLocaleString(),
        " usable hosts each",
        t.truncated && ` — showing the first ${t.shown}`,
        "."
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "max-h-[260px] overflow-auto rounded-lg border border-line", children: /* @__PURE__ */ i.jsxs("table", { className: "w-full border-collapse font-mono text-[11.5px]", children: [
        /* @__PURE__ */ i.jsx("thead", { className: "sticky top-0 bg-panel2 text-[9.5px] uppercase text-soft", children: /* @__PURE__ */ i.jsxs("tr", { children: [
          /* @__PURE__ */ i.jsx("th", { className: "p-1.5 text-left", children: "#" }),
          /* @__PURE__ */ i.jsx("th", { className: "p-1.5 text-left", children: "Network" }),
          /* @__PURE__ */ i.jsx("th", { className: "p-1.5 text-left", children: "First host" }),
          /* @__PURE__ */ i.jsx("th", { className: "p-1.5 text-left", children: "Last host" }),
          /* @__PURE__ */ i.jsx("th", { className: "p-1.5 text-left", children: "Broadcast" })
        ] }) }),
        /* @__PURE__ */ i.jsx("tbody", { children: t.rows.map((s, o) => /* @__PURE__ */ i.jsxs("tr", { className: "border-t border-line", children: [
          /* @__PURE__ */ i.jsx("td", { className: "p-1.5 text-soft", children: o }),
          /* @__PURE__ */ i.jsx("td", { className: "p-1.5", children: s.cidr }),
          /* @__PURE__ */ i.jsx("td", { className: "p-1.5", children: s.firstHost }),
          /* @__PURE__ */ i.jsx("td", { className: "p-1.5", children: s.lastHost }),
          /* @__PURE__ */ i.jsx("td", { className: "p-1.5", children: s.broadcast })
        ] }, s.network)) })
      ] }) })
    ] }) : /* @__PURE__ */ i.jsx("p", { className: "text-[12.5px] text-soft", children: (t == null ? void 0 : t.error) || "Choose a longer prefix." })
  ] });
}
function zv() {
  const e = $v(16, 30);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("p", { className: "mb-2 text-[12px] leading-snug text-soft", children: "The block size column is the one worth memorising: it is the gap between consecutive subnets in the last octet, which is how you find a subnet boundary without a calculator." }),
    /* @__PURE__ */ i.jsx("div", { className: "max-h-[320px] overflow-auto rounded-lg border border-line", children: /* @__PURE__ */ i.jsxs("table", { className: "w-full border-collapse font-mono text-[11.5px]", children: [
      /* @__PURE__ */ i.jsx("thead", { className: "sticky top-0 bg-panel2 text-[9.5px] uppercase text-soft", children: /* @__PURE__ */ i.jsxs("tr", { children: [
        /* @__PURE__ */ i.jsx("th", { className: "p-1.5 text-left", children: "Prefix" }),
        /* @__PURE__ */ i.jsx("th", { className: "p-1.5 text-left", children: "Mask" }),
        /* @__PURE__ */ i.jsx("th", { className: "p-1.5 text-left", children: "Wildcard" }),
        /* @__PURE__ */ i.jsx("th", { className: "p-1.5 text-right", children: "Usable hosts" }),
        /* @__PURE__ */ i.jsx("th", { className: "p-1.5 text-right", children: "Block size" })
      ] }) }),
      /* @__PURE__ */ i.jsx("tbody", { children: e.map((t) => /* @__PURE__ */ i.jsxs("tr", { className: "border-t border-line", children: [
        /* @__PURE__ */ i.jsxs("td", { className: "p-1.5 text-accent", children: [
          "/",
          t.prefix
        ] }),
        /* @__PURE__ */ i.jsx("td", { className: "p-1.5", children: t.mask }),
        /* @__PURE__ */ i.jsx("td", { className: "p-1.5 text-soft", children: t.wildcard }),
        /* @__PURE__ */ i.jsx("td", { className: "p-1.5 text-right tabular-nums", children: t.usable.toLocaleString() }),
        /* @__PURE__ */ i.jsx("td", { className: "p-1.5 text-right tabular-nums", children: t.blockSize })
      ] }, t.prefix)) })
    ] }) })
  ] });
}
function Ov() {
  const [e, t] = P.useState("medium"), [n, r] = P.useState(() => Gi("medium")), [s, o] = P.useState({}), [a, l] = P.useState(null), [c, u] = P.useState(!1), [d, p] = P.useState({ attempted: 0, solved: 0 }), h = P.useMemo(() => Iv(n.ip, n.prefix), [n]), f = (y = e) => {
    t(y), r(Gi(y)), o({}), l(null), u(!1);
  }, g = () => {
    const y = Tv(n.ip, n.prefix, s);
    l(y), p((m) => ({
      attempted: m.attempted + 1,
      solved: m.solved + (y.allCorrect ? 1 : 0)
    }));
  }, j = (y) => a == null ? void 0 : a.results.find((m) => m.key === y);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsxs("div", { className: "mb-3 flex flex-wrap items-center gap-2", children: [
      Pv.map((y) => /* @__PURE__ */ i.jsx(
        _,
        {
          size: "sm",
          variant: e === y.id ? "active" : "outline",
          onClick: () => f(y.id),
          children: y.label
        },
        y.id
      )),
      /* @__PURE__ */ i.jsxs("span", { className: "ml-auto font-mono text-[11px] text-soft", children: [
        d.solved,
        "/",
        d.attempted,
        " fully correct"
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "mb-4 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3", children: [
      /* @__PURE__ */ i.jsx("p", { className: "mb-1 text-[11px] font-bold uppercase tracking-wider text-soft", children: "Work out this subnet" }),
      /* @__PURE__ */ i.jsxs("p", { className: "font-mono text-[22px] font-bold tracking-tight text-ink", children: [
        n.ip,
        /* @__PURE__ */ i.jsxs("span", { className: "text-accent", children: [
          "/",
          n.prefix
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "mb-3 grid gap-2.5 sm:grid-cols-2", children: lo.map((y) => {
      const m = j(y.key), x = (m == null ? void 0 : m.state) === "correct" ? "border-up/60 bg-up/10" : (m == null ? void 0 : m.state) === "wrong" ? "border-down/60 bg-down/10" : "border-line bg-panel2";
      return /* @__PURE__ */ i.jsxs("div", { className: `rounded-lg border ${x} p-2.5`, children: [
        /* @__PURE__ */ i.jsxs("label", { className: "mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-soft", children: [
          y.label,
          (m == null ? void 0 : m.state) === "correct" && /* @__PURE__ */ i.jsx(Pr, { size: 12, className: "text-up" }),
          (m == null ? void 0 : m.state) === "wrong" && /* @__PURE__ */ i.jsx(_n, { size: 12, className: "text-down" })
        ] }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            className: W,
            value: s[y.key] ?? "",
            placeholder: y.placeholder,
            spellCheck: !1,
            onChange: (w) => o((k) => ({ ...k, [y.key]: w.target.value })),
            onKeyDown: (w) => {
              w.key === "Enter" && g();
            },
            "aria-label": y.label
          }
        ),
        (m == null ? void 0 : m.state) === "wrong" && /* @__PURE__ */ i.jsxs("p", { className: "mt-1.5 flex gap-1.5 text-[11px] leading-snug text-soft", children: [
          /* @__PURE__ */ i.jsx(na, { size: 11, className: "mt-0.5 shrink-0 text-warn" }),
          /* @__PURE__ */ i.jsx("span", { children: m.hint })
        ] })
      ] }, y.key);
    }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "mb-3 flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ i.jsx(_, { variant: "primary", size: "sm", onClick: g, children: "Check my answers" }),
      /* @__PURE__ */ i.jsxs(_, { variant: "outline", size: "sm", onClick: () => f(), children: [
        /* @__PURE__ */ i.jsx(Zl, { size: 13 }),
        " New question"
      ] }),
      /* @__PURE__ */ i.jsx(_, { variant: "ghost", size: "sm", onClick: () => u((y) => !y), children: c ? "Hide the method" : "Show me the method" })
    ] }),
    a && /* @__PURE__ */ i.jsx(
      "p",
      {
        className: `mb-3 rounded-lg border px-3 py-2 text-[12.5px] ${a.allCorrect ? "border-up/50 bg-up/10 text-up" : "border-warn/50 bg-warn/10 text-warn"}`,
        children: a.allCorrect ? "All six correct — that is the whole method applied cleanly." : `${a.correct} of ${a.total} correct. Read the hints, fix those boxes and check again.`
      }
    ),
    c && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(q, { children: "How to work it out" }),
      /* @__PURE__ */ i.jsx("ol", { className: "space-y-1.5", children: h.map((y, m) => /* @__PURE__ */ i.jsxs("li", { className: "flex gap-2.5 rounded-lg border border-line bg-panel2 p-2.5", children: [
        /* @__PURE__ */ i.jsx("span", { className: "grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 font-mono text-[10px] font-bold text-accent", children: m + 1 }),
        /* @__PURE__ */ i.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ i.jsx("div", { className: "text-[12.5px] font-semibold", children: y.title }),
          /* @__PURE__ */ i.jsx("div", { className: "text-[11.5px] leading-snug text-soft", children: y.detail }),
          /* @__PURE__ */ i.jsx("div", { className: "mt-0.5 font-mono text-[11.5px] text-accent", children: y.result })
        ] })
      ] }, y.title)) })
    ] })
  ] });
}
function _v({ onClose: e }) {
  const t = b((r) => r.challengeRole), n = b((r) => r.setChallengeRole);
  return b((r) => r.challenge), /* @__PURE__ */ i.jsxs(
    dn,
    {
      title: "Red team vs Blue team",
      subtitle: "Harden a network, hand it over, see what holds",
      icon: /* @__PURE__ */ i.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg border border-line bg-panel2 text-accent", children: /* @__PURE__ */ i.jsx(ys, { size: 18 }) }),
      onClose: e,
      width: "max-w-3xl",
      children: [
        !t && /* @__PURE__ */ i.jsx(Fv, { setRole: n }),
        t === "blue" && /* @__PURE__ */ i.jsx(Hv, {}),
        t === "red" && /* @__PURE__ */ i.jsx(Uv, {})
      ]
    }
  );
}
function Fv({ setRole: e }) {
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("p", { className: "mb-4 text-[12.5px] leading-relaxed text-soft", children: "One team builds a network and locks it down. The other team gets it exactly as it was left and tries to meet the objectives against it. Scoring runs from the same rules on both sides." }),
    /* @__PURE__ */ i.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          onClick: () => e("blue"),
          className: "rounded-xl border border-accent/50 bg-accent/10 p-4 text-left hover:border-accent",
          children: [
            /* @__PURE__ */ i.jsxs("div", { className: "mb-1 flex items-center gap-2 font-bold", children: [
              /* @__PURE__ */ i.jsx(ys, { size: 16, className: "text-accent" }),
              " Blue team"
            ] }),
            /* @__PURE__ */ i.jsx("p", { className: "text-[12px] leading-snug text-soft", children: "Build and harden the network, then export a challenge code to hand over." })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          onClick: () => e("red"),
          className: "rounded-xl border border-down/50 bg-down/10 p-4 text-left hover:border-down",
          children: [
            /* @__PURE__ */ i.jsxs("div", { className: "mb-1 flex items-center gap-2 font-bold", children: [
              /* @__PURE__ */ i.jsx(Th, { size: 16, className: "text-down" }),
              " Red team"
            ] }),
            /* @__PURE__ */ i.jsx("p", { className: "text-[12px] leading-snug text-soft", children: "Paste a challenge code, load their network, and work the objectives." })
          ]
        }
      )
    ] })
  ] });
}
function Hv() {
  const e = b((N) => N.challengePhase), t = b((N) => N.challengeScenario), n = b((N) => N.challengeDeadline), r = b((N) => N.challengeCode), s = b((N) => N.startSetup), o = b((N) => N.armChallenge), a = b((N) => N.tickChallenge), l = b((N) => N.readiness), c = b((N) => N.endChallenge), u = b((N) => N.staffNetwork), d = b((N) => N.openSocial), p = b((N) => N.topology), h = p.personnel || [];
  b((N) => N.rev);
  const [f, g] = P.useState("small-office"), [j, y] = P.useState(20), [m, x] = P.useState(15), [w, k] = P.useState(""), [C, v] = P.useState("Blue team"), [$, T] = P.useState(!1), [U, L] = P.useState(!0), [Z, J] = P.useState(Date.now());
  P.useEffect(() => {
    const N = setInterval(() => {
      J(Date.now()), a();
    }, 1e3);
    return () => clearInterval(N);
  }, [a]);
  const te = io(f);
  if (P.useEffect(() => {
    y(te.setupMinutes), x(te.breachMinutes), k(`${te.name} — round 1`);
  }, [f]), e === "idle" || !t)
    return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("p", { className: "mb-3 text-[12.5px] leading-relaxed text-soft", children: "Pick a scenario. You get a build window to deploy the required nodes and secure them; when it closes the network locks and becomes the board the other team attacks." }),
      /* @__PURE__ */ i.jsx("div", { className: "mb-3 space-y-2", children: Yx.map((N) => /* @__PURE__ */ i.jsxs(
        "label",
        {
          className: `flex cursor-pointer gap-3 rounded-xl border p-3 ${f === N.id ? "border-accent bg-accent/10" : "border-line bg-panel2"}`,
          children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "radio",
                className: "mt-1 accent-[rgb(var(--nr-accent))]",
                checked: f === N.id,
                onChange: () => g(N.id)
              }
            ),
            /* @__PURE__ */ i.jsxs("span", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ i.jsxs("span", { className: "flex flex-wrap items-center gap-2 text-[13px] font-bold", children: [
                N.name,
                /* @__PURE__ */ i.jsxs(se, { tone: "accent", children: [
                  N.nodes,
                  " nodes"
                ] }),
                /* @__PURE__ */ i.jsxs(se, { children: [
                  N.setupMinutes,
                  " min build"
                ] }),
                /* @__PURE__ */ i.jsxs(se, { children: [
                  N.breachMinutes,
                  " min breach"
                ] })
              ] }),
              /* @__PURE__ */ i.jsx("span", { className: "mt-0.5 block text-[11.5px] leading-snug text-soft", children: N.brief })
            ] })
          ]
        },
        N.id
      )) }),
      /* @__PURE__ */ i.jsxs("div", { className: "grid gap-3 sm:grid-cols-4", children: [
        /* @__PURE__ */ i.jsx(K, { label: "Challenge name", children: /* @__PURE__ */ i.jsx("input", { className: W, value: w, onChange: (N) => k(N.target.value) }) }),
        /* @__PURE__ */ i.jsx(K, { label: "Your team", children: /* @__PURE__ */ i.jsx("input", { className: W, value: C, onChange: (N) => v(N.target.value) }) }),
        /* @__PURE__ */ i.jsx(K, { label: "Build minutes", children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            min: "5",
            max: "60",
            className: W,
            value: j,
            onChange: (N) => y(Number(N.target.value) || 20)
          }
        ) }),
        /* @__PURE__ */ i.jsx(K, { label: "Breach minutes", children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            min: "5",
            max: "60",
            className: W,
            value: m,
            onChange: (N) => x(Number(N.target.value) || 15)
          }
        ) })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "my-3 rounded-xl border border-line bg-panel2 p-3", children: /* @__PURE__ */ i.jsx(
        he,
        {
          id: "staff-network",
          checked: U,
          onChange: L,
          label: "Staff the network with technicians",
          hint: "A senior and a junior technician answer the phone for this network. The other team can try to talk them into something, which adds two objectives and makes awareness training, a callback policy and least privilege worth having. Their replies are scripted, not generated."
        }
      ) }),
      /* @__PURE__ */ i.jsx(
        _,
        {
          variant: "primary",
          size: "lg",
          onClick: () => {
            s(f, { setupMinutes: j, breachMinutes: m, name: w, author: C }), u(U);
          },
          children: "Start the build window"
        }
      ),
      /* @__PURE__ */ i.jsx("p", { className: "mt-2 text-[11.5px] text-soft", children: "The clock starts immediately. You can close this panel and keep building — the countdown stays in the toolbar." })
    ] });
  if (e === "armed")
    return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("div", { className: "mb-3 flex items-center gap-2 rounded-xl border border-up/50 bg-up/10 p-3", children: [
        /* @__PURE__ */ i.jsx(un, { size: 16, className: "shrink-0 text-up" }),
        /* @__PURE__ */ i.jsxs("div", { className: "min-w-0 text-[12.5px]", children: [
          /* @__PURE__ */ i.jsx("strong", { children: "Build locked." }),
          " The defensive settings are frozen into the code, so the other team cannot weaken them from their own copy."
        ] })
      ] }),
      /* @__PURE__ */ i.jsx(q, { children: "Hand this to the other team" }),
      /* @__PURE__ */ i.jsx(
        "textarea",
        {
          readOnly: !0,
          value: r,
          onFocus: (N) => N.target.select(),
          className: "h-32 w-full resize-none rounded-lg border border-line bg-panel2 p-2 font-mono text-[10.5px] text-ink",
          "aria-label": "Challenge code"
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ i.jsxs(
          _,
          {
            variant: "outline",
            size: "sm",
            onClick: async () => {
              try {
                await navigator.clipboard.writeText(r), T(!0);
              } catch {
                T(!1);
              }
            },
            children: [
              /* @__PURE__ */ i.jsx(Ul, { size: 13 }),
              " ",
              $ ? "Copied" : "Copy code"
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(_, { variant: "ghost", size: "sm", onClick: c, children: "Start a new round" }),
        /* @__PURE__ */ i.jsxs("span", { className: "text-[11px] text-soft", children: [
          r.length.toLocaleString(),
          " characters"
        ] })
      ] })
    ] });
  const ee = l(), Ue = Math.max(0, Math.floor(((n || Z) - Z) / 1e3)), I = `${Math.floor(Ue / 60)}:${String(Ue % 60).padStart(2, "0")}`, we = Ue < 180, R = { high: "down", medium: "warn", low: "neutral" };
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsxs("div", { className: "mb-3 flex flex-wrap items-center gap-3 rounded-xl border border-line bg-panel2 p-3", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ i.jsx("div", { className: "text-[13px] font-bold", children: t.name }),
        /* @__PURE__ */ i.jsx("div", { className: "text-[11.5px] leading-snug text-soft", children: t.brief })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ i.jsx("div", { className: `font-mono text-[26px] font-bold tabular-nums ${we ? "text-down" : "text-ink"}`, children: I }),
        /* @__PURE__ */ i.jsx("div", { className: "text-[10.5px] text-soft", children: "build window" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs(q, { children: [
      "Required build — ",
      ee.roster.placed,
      "/",
      ee.roster.required,
      " nodes"
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "mb-3 h-2 overflow-hidden rounded-full bg-line", children: /* @__PURE__ */ i.jsx("div", { className: "h-full rounded-full bg-accent transition-all", style: { width: `${ee.roster.percent}%` } }) }),
    /* @__PURE__ */ i.jsx("div", { className: "mb-3 grid gap-1.5 sm:grid-cols-2", children: ee.roster.rows.map((N) => /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-[12px] ${N.ok ? "border-up/50 bg-up/10" : "border-line bg-panel2"}`,
        children: [
          N.ok ? /* @__PURE__ */ i.jsx(Pr, { size: 13, className: "shrink-0 text-up" }) : /* @__PURE__ */ i.jsx(_n, { size: 13, className: "shrink-0 text-soft" }),
          /* @__PURE__ */ i.jsx("span", { className: "min-w-0 flex-1 truncate", children: N.label }),
          /* @__PURE__ */ i.jsxs("span", { className: "font-mono text-[11px] text-soft", children: [
            Math.min(N.placed, N.count),
            "/",
            N.count
          ] })
        ]
      },
      N.typeId
    )) }),
    h.length > 0 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(q, { children: "Your technicians" }),
      /* @__PURE__ */ i.jsx("div", { className: "mb-3 grid gap-1.5 sm:grid-cols-2", children: h.map((N) => {
        const F = (p.zones || []).find((A) => A.id === N.areaZoneId);
        return /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-line bg-panel2 px-2.5 py-1.5 text-[12px]", children: [
          /* @__PURE__ */ i.jsx(Jl, { size: 13, className: `shrink-0 ${N.roleId === "senior" ? "text-up" : "text-warn"}` }),
          /* @__PURE__ */ i.jsxs("span", { className: "min-w-0 flex-1 truncate", children: [
            N.name,
            " ",
            /* @__PURE__ */ i.jsxs("span", { className: "text-soft", children: [
              "— ",
              N.roleId
            ] })
          ] }),
          /* @__PURE__ */ i.jsx("span", { className: "truncate text-[11px] text-soft", children: F ? F.name : "whole site" })
        ] }, N.id);
      }) }),
      /* @__PURE__ */ i.jsxs("p", { className: "mb-3 text-[11.5px] leading-snug text-soft", children: [
        "Add sections to the canvas and assign each technician a patch in the",
        " ",
        /* @__PURE__ */ i.jsx("button", { className: "underline hover:text-ink", onClick: d, children: "People" }),
        " panel. Awareness training and a callback policy live on each host, under Security."
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs(q, { children: [
      "Hardening — ",
      ee.hardening.score,
      "/100"
    ] }),
    ee.hardening.findings.length === 0 ? /* @__PURE__ */ i.jsx("p", { className: "mb-3 text-[12px] text-up", children: "Nothing obvious left open." }) : /* @__PURE__ */ i.jsx("ul", { className: "mb-3 max-h-[132px] space-y-1 overflow-y-auto", children: ee.hardening.findings.map((N, F) => /* @__PURE__ */ i.jsxs("li", { className: "flex items-start gap-2 text-[11.5px] leading-snug", children: [
      /* @__PURE__ */ i.jsx(se, { tone: R[N.severity], children: N.severity }),
      /* @__PURE__ */ i.jsxs("span", { className: "min-w-0", children: [
        /* @__PURE__ */ i.jsx("span", { className: "font-mono text-ink", children: N.device }),
        " ",
        /* @__PURE__ */ i.jsx("span", { className: "text-soft", children: N.text })
      ] })
    ] }, F)) }),
    ee.blockers.length > 0 && /* @__PURE__ */ i.jsx("ul", { className: "mb-3 space-y-1", children: ee.blockers.map((N, F) => /* @__PURE__ */ i.jsxs("li", { className: "text-[11.5px] text-warn", children: [
      "• ",
      N
    ] }, F)) }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ i.jsxs(_, { variant: "primary", size: "sm", onClick: o, children: [
        /* @__PURE__ */ i.jsx(un, { size: 13 }),
        " Lock the build and hand over"
      ] }),
      /* @__PURE__ */ i.jsx(_, { variant: "ghost", size: "sm", onClick: c, children: "Abandon round" }),
      !ee.ready && /* @__PURE__ */ i.jsx("span", { className: "text-[11px] text-soft", children: "You can hand over early — unfinished work counts against you." })
    ] })
  ] });
}
function Uv() {
  const e = b((v) => v.challenge), t = b((v) => v.loadChallenge), n = b((v) => v.challengeScore), r = b((v) => v.challengeStartedAt), s = b((v) => v.challengeDeadline), o = b((v) => v.challengePhase), a = b((v) => v.tickChallenge), l = b((v) => v.endChallenge), c = b((v) => v.openSocial), u = b((v) => v.topology.personnel || []);
  b((v) => v.rev);
  const [d, p] = P.useState(""), [h, f] = P.useState(""), [g, j] = P.useState(""), [y, m] = P.useState(Date.now());
  if (P.useEffect(() => {
    const v = setInterval(() => {
      m(Date.now()), a();
    }, 1e3);
    return () => clearInterval(v);
  }, [a]), !e)
    return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(K, { label: "Challenge code", hint: "Paste the code the other team sent you.", children: /* @__PURE__ */ i.jsx(
        "textarea",
        {
          value: d,
          onChange: (v) => {
            p(v.target.value), f("");
          },
          placeholder: "NRC1.…",
          className: "h-28 w-full resize-none rounded-lg border border-line bg-panel2 p-2 font-mono text-[10.5px] text-ink",
          "aria-label": "Challenge code to load"
        }
      ) }),
      h && /* @__PURE__ */ i.jsx("p", { className: "mb-2 text-[12.5px] text-down", children: h }),
      /* @__PURE__ */ i.jsx(
        _,
        {
          variant: "primary",
          size: "lg",
          onClick: () => {
            const v = t(d);
            v.ok || f(v.reason);
          },
          children: "Load challenge"
        }
      ),
      /* @__PURE__ */ i.jsx("p", { className: "mt-3 text-[11.5px] leading-snug text-soft", children: "Loading replaces the workspace with their network and clears the capture buffer, so you start from the same place they left it." })
    ] });
  const x = n(), w = Math.floor((y - (r || y)) / 1e3), k = o === "over" ? 0 : Math.max(0, Math.floor(((s || y) - y) / 1e3)), C = (v) => `${Math.floor(v / 60)}:${String(v % 60).padStart(2, "0")}`;
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsxs("div", { className: "mb-3 flex flex-wrap items-center gap-3 rounded-xl border border-line bg-panel2 p-3", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ i.jsx("div", { className: "truncate text-[14px] font-bold", children: e.name }),
        /* @__PURE__ */ i.jsxs("div", { className: "text-[11.5px] text-soft", children: [
          "built by ",
          e.author
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs(se, { tone: k === 0 ? "down" : k < 120 ? "warn" : "neutral", children: [
        /* @__PURE__ */ i.jsx(wh, { size: 11 }),
        " ",
        k === 0 ? "time up" : C(k)
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "font-mono text-[22px] font-bold tabular-nums", children: [
          /* @__PURE__ */ i.jsx("span", { className: "text-down", children: x.red }),
          /* @__PURE__ */ i.jsxs("span", { className: "text-soft", children: [
            " / ",
            x.total
          ] })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "text-[10.5px] text-soft", children: "red score" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "mb-3 h-2 overflow-hidden rounded-full bg-line", children: /* @__PURE__ */ i.jsx("div", { className: "h-full rounded-full bg-down transition-all", style: { width: `${x.redPercent}%` } }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "mb-3 flex items-center gap-2 rounded-lg border border-line bg-panel2 px-3 py-2", children: [
      /* @__PURE__ */ i.jsx(un, { size: 13, className: "shrink-0 text-soft" }),
      /* @__PURE__ */ i.jsx("span", { className: "text-[11.5px] leading-snug text-soft", children: "Their defensive settings are frozen for this round. Changing one on your copy reverts it — you have to get through what they built, not edit it." })
    ] }),
    /* @__PURE__ */ i.jsx(q, { children: "Objectives" }),
    /* @__PURE__ */ i.jsx("div", { className: "mb-3 space-y-1.5", children: x.results.map((v) => /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `flex gap-2.5 rounded-lg border p-2.5 ${v.captured ? "border-down/50 bg-down/10" : "border-line bg-panel2"}`,
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "mt-0.5 shrink-0", children: v.captured ? /* @__PURE__ */ i.jsx(Pr, { size: 15, className: "text-down" }) : /* @__PURE__ */ i.jsx(_n, { size: 15, className: "text-soft" }) }),
          /* @__PURE__ */ i.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[12.5px] font-semibold", children: [
              v.label,
              /* @__PURE__ */ i.jsxs(se, { tone: v.captured ? "down" : "neutral", children: [
                v.points,
                " pts"
              ] }),
              /* @__PURE__ */ i.jsx(se, { children: v.phase })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "text-[11.5px] leading-snug text-soft", children: v.captured ? v.blue : v.red })
          ] })
        ]
      },
      v.id
    )) }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex flex-wrap gap-2", children: [
      u.length > 0 && /* @__PURE__ */ i.jsxs(_, { variant: "danger", size: "sm", onClick: () => c(), children: [
        /* @__PURE__ */ i.jsx(pr, { size: 13 }),
        " Call their technicians (",
        u.length,
        ")"
      ] }),
      /* @__PURE__ */ i.jsx(
        _,
        {
          variant: "outline",
          size: "sm",
          onClick: () => j(Kx(e, x, { elapsedSeconds: w })),
          children: "Generate result code"
        }
      ),
      /* @__PURE__ */ i.jsx(_, { variant: "ghost", size: "sm", onClick: l, children: "End challenge" })
    ] }),
    g && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(q, { className: "mt-4", children: "Send this back to them" }),
      /* @__PURE__ */ i.jsx(
        "textarea",
        {
          readOnly: !0,
          value: g,
          onFocus: (v) => v.target.select(),
          className: "h-20 w-full resize-none rounded-lg border border-line bg-panel2 p-2 font-mono text-[10.5px] text-ink",
          "aria-label": "Result code"
        }
      )
    ] })
  ] });
}
function Bv({ onClose: e }) {
  var C;
  const t = b((v) => v.topology), n = t.personnel || [], r = b((v) => v.socialTarget), s = b((v) => v.setSocialTarget), o = b((v) => v.socialAttempt), a = b((v) => v.staffNetwork), l = b((v) => v.assignTechnician), c = b((v) => v.challengeRole), u = b((v) => v.rev), [d, p] = P.useState("authority"), [h, f] = P.useState("confirm-username"), [g, j] = P.useState(""), y = P.useRef(null), m = n.find((v) => v.id === r) || n[0], x = P.useMemo(() => {
    var $;
    const v = [];
    for (const T of t.devices) {
      if (T.role === "attacker") continue;
      v.push({ value: T.hostname, label: `${T.hostname} — hostname` });
      const U = O(T);
      U && v.push({ value: U, label: `${U} — address of ${T.hostname}` }), ($ = T.ap) != null && $.ssid && v.push({ value: T.ap.ssid, label: `${T.ap.ssid} — wireless network` });
    }
    return v;
  }, [t.devices, u]);
  P.useEffect(() => {
    var v;
    (v = y.current) == null || v.scrollTo({ top: y.current.scrollHeight, behavior: "smooth" });
  }, [(C = m == null ? void 0 : m.transcript) == null ? void 0 : C.length]);
  const w = () => {
    m && o({ technicianId: m.id, tactic: d, ask: h, claim: g });
  };
  if (!n.length)
    return /* @__PURE__ */ i.jsxs(
      dn,
      {
        title: "The human layer",
        subtitle: "Synthetic technicians — scripted, not a language model",
        icon: /* @__PURE__ */ i.jsx(Yu, { children: /* @__PURE__ */ i.jsx(pr, { size: 18 }) }),
        onClose: e,
        width: "max-w-2xl",
        children: [
          /* @__PURE__ */ i.jsxs("p", { className: "text-[13px] leading-relaxed text-soft", children: [
            "Every control in this lab can be undone by someone being talked into undoing it, so the network can be staffed with two technicians: a ",
            /* @__PURE__ */ i.jsx("strong", { className: "text-ink", children: "senior" }),
            " who follows process under pressure, and a ",
            /* @__PURE__ */ i.jsx("strong", { className: "text-ink", children: "junior" }),
            " who wants to be helpful and holds a supervisor account he has not been taught to be careful with."
          ] }),
          /* @__PURE__ */ i.jsx("p", { className: "mt-3 text-[13px] leading-relaxed text-soft", children: "Assign them during the build window and the other team can try to talk them into something. Their replies come from a state machine, so the same pretext always gets the same answer and the debrief can show you exactly why." }),
          /* @__PURE__ */ i.jsx("div", { className: "mt-4", children: /* @__PURE__ */ i.jsxs(_, { variant: "active", onClick: () => a(!0), children: [
            /* @__PURE__ */ i.jsx(Sh, { size: 14 }),
            " Put a senior and a junior on this network"
          ] }) })
        ]
      }
    );
  const k = bs[m.roleId];
  return k.suspicionLimit, /* @__PURE__ */ i.jsx(
    dn,
    {
      title: "The human layer",
      subtitle: "Scripted technicians — fixed pretexts, and a debrief after every call",
      icon: /* @__PURE__ */ i.jsx(Yu, { children: /* @__PURE__ */ i.jsx(pr, { size: 18 }) }),
      onClose: e,
      width: "max-w-4xl",
      footer: /* @__PURE__ */ i.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[11px] text-soft", children: [
        /* @__PURE__ */ i.jsx(_n, { size: 13 }),
        "These are not real people and nothing is sent anywhere. The point of the exercise is the control named in each debrief.",
        /* @__PURE__ */ i.jsx("span", { className: "flex-1" }),
        c !== "red" && /* @__PURE__ */ i.jsxs(_, { size: "sm", onClick: () => a(!1), children: [
          /* @__PURE__ */ i.jsx($h, { size: 13 }),
          " Stand the technicians down"
        ] })
      ] }),
      children: /* @__PURE__ */ i.jsxs("div", { className: "grid gap-4 lg:grid-cols-[260px_1fr]", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ i.jsx(q, { children: "On the network" }),
          n.map((v) => {
            const $ = bs[v.roleId], T = (t.zones || []).find((L) => L.id === v.areaZoneId), U = v.id === m.id;
            return /* @__PURE__ */ i.jsxs(
              "button",
              {
                onClick: () => s(v.id),
                className: `w-full rounded-xl border p-3 text-left transition ${U ? "border-accent bg-accent/10" : "border-line bg-panel2 hover:border-accent/50"}`,
                children: [
                  /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ i.jsx("span", { className: `grid h-7 w-7 shrink-0 place-items-center rounded-lg ${v.roleId === "senior" ? "bg-up/15 text-up" : "bg-warn/15 text-warn"}`, children: /* @__PURE__ */ i.jsx(Jl, { size: 14 }) }),
                    /* @__PURE__ */ i.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ i.jsx("div", { className: "truncate text-[13px] font-semibold", children: v.name }),
                      /* @__PURE__ */ i.jsx("div", { className: "truncate text-[10px] uppercase tracking-wider text-soft", children: $.label })
                    ] })
                  ] }),
                  /* @__PURE__ */ i.jsxs("div", { className: "mt-2 flex flex-wrap gap-1", children: [
                    /* @__PURE__ */ i.jsx(se, { tone: v.reported ? "down" : v.suspicion >= $.suspicionLimit - 2 ? "warn" : "neutral", children: v.reported ? "reported you" : `suspicion ${v.suspicion}/${$.suspicionLimit}` }),
                    v.granted.length > 0 && /* @__PURE__ */ i.jsxs(se, { tone: "down", children: [
                      v.granted.length,
                      " helped with"
                    ] })
                  ] }),
                  /* @__PURE__ */ i.jsxs("div", { className: "mt-1 text-[10px] text-soft", children: [
                    "Covers ",
                    T ? T.name : "the whole site"
                  ] })
                ]
              },
              v.id
            );
          }),
          c !== "red" && (t.zones || []).length > 0 && /* @__PURE__ */ i.jsx(K, { label: "Assign to a section", hint: "A technician can only act on devices in their own patch.", children: /* @__PURE__ */ i.jsxs(
            "select",
            {
              className: W,
              value: m.areaZoneId || "",
              onChange: (v) => l(m.id, v.target.value || null),
              "aria-label": "Assign technician to a section",
              children: [
                /* @__PURE__ */ i.jsx("option", { value: "", children: "Whole site" }),
                (t.zones || []).map((v) => /* @__PURE__ */ i.jsx("option", { value: v.id, children: v.name }, v.id))
              ]
            }
          ) }),
          /* @__PURE__ */ i.jsx("p", { className: "rounded-xl border border-line bg-panel2 p-3 text-[11px] leading-relaxed text-soft", children: k.blurb })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "min-w-0 space-y-3", children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              ref: y,
              className: "h-64 overflow-y-auto rounded-xl border border-line bg-panel2 p-3",
              "aria-label": "Call transcript",
              "aria-live": "polite",
              children: m.transcript.length ? /* @__PURE__ */ i.jsx("div", { className: "space-y-2", children: m.transcript.map((v, $) => /* @__PURE__ */ i.jsx(Wv, { m: v, name: m.name }, $)) }) : /* @__PURE__ */ i.jsx("p", { className: "grid h-full place-items-center text-center text-[12px] text-soft", children: /* @__PURE__ */ i.jsxs("span", { children: [
                /* @__PURE__ */ i.jsx(jh, { size: 18, className: "mx-auto mb-2 opacity-60" }),
                "Pick a tactic, quote a detail and make an ask.",
                /* @__PURE__ */ i.jsx("br", {}),
                "A detail you have actually discovered lands much harder than a guess."
              ] }) })
            }
          ),
          m.reported ? /* @__PURE__ */ i.jsxs("div", { className: "rounded-xl border border-down/40 bg-down/10 p-3 text-[12px] text-ink", children: [
            /* @__PURE__ */ i.jsxs("strong", { children: [
              m.name,
              " has stopped taking your calls"
            ] }),
            " and reported the contact. Pushing a clumsy pretext too many times is itself a detection event — which is exactly what awareness training is for."
          ] }) : /* @__PURE__ */ i.jsxs("div", { className: "grid gap-3 sm:grid-cols-3", children: [
            /* @__PURE__ */ i.jsx(K, { label: "Tactic", hint: Dn[d].blurb, children: /* @__PURE__ */ i.jsx("select", { className: W, value: d, onChange: (v) => p(v.target.value), "aria-label": "Pressure tactic", children: ty.map((v) => /* @__PURE__ */ i.jsx("option", { value: v.id, children: v.label }, v.id)) }) }),
            /* @__PURE__ */ i.jsx(K, { label: "Detail you quote", hint: "Checked against the real network.", children: /* @__PURE__ */ i.jsxs("select", { className: W, value: g, onChange: (v) => j(v.target.value), "aria-label": "Detail to quote", children: [
              /* @__PURE__ */ i.jsx("option", { value: "", children: "Quote nothing specific" }),
              x.map((v, $) => /* @__PURE__ */ i.jsx("option", { value: v.value, children: v.label }, $))
            ] }) }),
            /* @__PURE__ */ i.jsx(K, { label: "What you ask for", hint: ia[h].blurb, children: /* @__PURE__ */ i.jsx("select", { className: W, value: h, onChange: (v) => f(v.target.value), "aria-label": "The ask", children: ny.map((v) => /* @__PURE__ */ i.jsx("option", { value: v.id, children: v.label }, v.id)) }) })
          ] }),
          !m.reported && /* @__PURE__ */ i.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ i.jsxs(_, { variant: "danger", onClick: w, children: [
              /* @__PURE__ */ i.jsx(pr, { size: 14 }),
              " Make the call"
            ] }),
            /* @__PURE__ */ i.jsx("span", { className: "text-[11px] text-soft", children: Dn[d].opener.replace("{caller}", "Jordan Ellis").replace("{colleague}", "Dave") })
          ] })
        ] })
      ] })
    }
  );
}
function Yu({ children: e }) {
  return /* @__PURE__ */ i.jsx("span", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/40 bg-accent/15 text-accent", children: e });
}
function Wv({ m: e, name: t }) {
  var n, r;
  return e.who === "red" ? /* @__PURE__ */ i.jsxs("div", { className: "ml-auto max-w-[85%] rounded-xl rounded-br-sm border border-down/30 bg-down/10 p-2.5", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "mb-0.5 text-[10px] uppercase tracking-wider text-soft", children: [
      "You — ",
      (n = Dn[e.tactic]) == null ? void 0 : n.label,
      " · asking to ",
      (r = ia[e.ask]) == null ? void 0 : r.effect
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "text-[12px] leading-snug", children: e.text }),
    e.claim && /* @__PURE__ */ i.jsxs("div", { className: "mt-1 font-mono text-[11px] text-soft", children: [
      'quoting "',
      e.claim,
      '"'
    ] })
  ] }) : /* @__PURE__ */ i.jsxs("div", { className: "max-w-[90%] space-y-1.5", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "rounded-xl rounded-bl-sm border border-line bg-panel p-2.5", children: [
      /* @__PURE__ */ i.jsx("div", { className: "mb-0.5 text-[10px] uppercase tracking-wider text-soft", children: t }),
      /* @__PURE__ */ i.jsx("div", { className: "text-[12px] leading-snug", children: e.text })
    ] }),
    e.debrief && /* @__PURE__ */ i.jsxs("div", { className: `flex gap-2 rounded-lg border p-2 text-[11px] leading-relaxed ${e.ok ? "border-down/40 bg-down/10" : "border-up/40 bg-up/10"}`, children: [
      e.ok ? /* @__PURE__ */ i.jsx(_n, { size: 13, className: "mt-0.5 shrink-0" }) : /* @__PURE__ */ i.jsx(na, { size: 13, className: "mt-0.5 shrink-0" }),
      /* @__PURE__ */ i.jsx("span", { children: e.debrief })
    ] })
  ] });
}
function Vv() {
  const e = b((c) => c.zoneRenameId), t = b((c) => (c.topology.zones || []).find((u) => u.id === c.zoneRenameId)), n = b((c) => c.commitZoneRename), r = b((c) => c.cancelZoneRename), [s, o] = P.useState((t == null ? void 0 : t.name) || ""), a = P.useRef(null);
  if (P.useEffect(() => {
    o((t == null ? void 0 : t.name) || "");
    const c = setTimeout(() => {
      var u, d;
      (u = a.current) == null || u.focus(), (d = a.current) == null || d.select();
    }, 30);
    return () => clearTimeout(c);
  }, [e]), !t) return null;
  const l = () => n(s);
  return /* @__PURE__ */ i.jsx(
    dn,
    {
      title: "Rename section",
      subtitle: "Floors, buildings, wiring closets — whatever the area is called",
      icon: /* @__PURE__ */ i.jsx("span", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/40 bg-accent/15 text-accent", children: /* @__PURE__ */ i.jsx(Kl, { size: 16 }) }),
      onClose: r,
      width: "max-w-md",
      footer: /* @__PURE__ */ i.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ i.jsx(_, { size: "sm", onClick: r, children: "Cancel" }),
        /* @__PURE__ */ i.jsx(_, { variant: "primary", size: "sm", onClick: l, disabled: !s.trim(), children: "Rename" })
      ] }),
      children: /* @__PURE__ */ i.jsx(K, { label: "Section name", hint: "Up to 40 characters. Enter saves, Escape cancels.", children: /* @__PURE__ */ i.jsx(
        "input",
        {
          ref: a,
          className: W,
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
function qv({ initialState: e = null, scenario: t = null } = {}) {
  const n = b((I) => I.engine), r = b((I) => I.loadStarterTopology), s = b((I) => I.importState), o = b((I) => I.restoreWorkspace), a = b((I) => I.ensureConsole), [l, c] = P.useState(!0), [u, d] = P.useState(!0), [p, h] = P.useState(210), f = b((I) => I.modalDeviceId), g = b((I) => I.openDeviceModal), j = b((I) => I.closeDeviceModal), y = b((I) => I.attackPanelOpen), m = b((I) => I.challengeOpen), x = b((I) => I.socialOpen), w = b((I) => I.zoneRenameId), k = b((I) => I.openSocial), C = b((I) => I.closeSocial), v = b((I) => I.closeChallenge), $ = b((I) => I.openAttackPanel), T = b((I) => I.closeAttackPanel), [U, L] = P.useState(!1), [Z, J] = P.useState(!1);
  P.useEffect(() => {
    a("attack", "Cyber Range"), a("browser", "Web Browser"), e ? s(e) : o() || t === "starter" && r(), n.startTelemetry(), n.setAmbient(b.getState().settings.ambient !== !1), n.setCoaching(b.getState().settings.coaching === !0), n.startAmbientTraffic();
  }, []);
  const te = P.useRef(0), ee = P.useRef(performance.now());
  P.useEffect(() => {
    const I = (we) => {
      const R = Math.min(64, we - ee.current);
      ee.current = we, n.tick(R), te.current = requestAnimationFrame(I);
    };
    return te.current = requestAnimationFrame(I), () => cancelAnimationFrame(te.current);
  }, [n]);
  const Ue = P.useCallback((I) => {
    const we = I.target, R = we && (/^(INPUT|TEXTAREA|SELECT)$/.test(we.tagName) || we.isContentEditable), N = b.getState(), F = I.ctrlKey || I.metaKey;
    if (I.key === "Escape") {
      T(), L(!1), J(!1), v(), C(), b.getState().cancelZoneRename(), j(), N.closeContextMenu(), N.setTool("select"), N.clearSelection();
      return;
    }
    if (!R) {
      if (F && I.key.toLowerCase() === "z") {
        I.preventDefault(), N.undo();
        return;
      }
      if (F && (I.key.toLowerCase() === "y" || I.shiftKey && I.key.toLowerCase() === "z")) {
        I.preventDefault(), N.redo();
        return;
      }
      if (F && I.key.toLowerCase() === "d") {
        I.preventDefault(), N.selectedId && N.duplicateDevice(N.selectedId);
        return;
      }
      if (I.key === "Delete" || I.key === "Backspace") {
        I.preventDefault(), N.deleteSelection();
        return;
      }
      if (I.key === " ") {
        I.preventDefault(), N.toggleRunning();
        return;
      }
      if (I.key === "c" || I.key === "C") {
        N.setTool(N.tool === "cable" ? "select" : "cable");
        return;
      }
      if (I.key === "f" || I.key === "F") {
        N.fitView();
        return;
      }
      if (I.key === "p" || I.key === "P") {
        N.setTool(N.tool === "pdu" ? "select" : "pdu");
        return;
      }
      if (I.key === "s" || I.key === "S") {
        N.engine.mode === "simulation" && N.stepPdu();
        return;
      }
      if (I.key === "v" || I.key === "V") {
        N.setTool("select");
        return;
      }
      I.key === "?" && (L(!1), d(!0));
    }
  }, []);
  return P.useEffect(() => (window.addEventListener("keydown", Ue), () => window.removeEventListener("keydown", Ue)), [Ue]), /* @__PURE__ */ i.jsxs("div", { className: "flex h-full w-full flex-col overflow-hidden bg-[rgb(var(--nr-bg))] text-ink", children: [
    /* @__PURE__ */ i.jsx(
      ky,
      {
        onTogglePalette: () => c((I) => !I),
        onToggleLab: () => d((I) => !I),
        onOpenAttack: $,
        onOpenSettings: () => L(!0),
        onOpenSubnet: () => J(!0),
        onOpenSocial: () => k(),
        paletteOpen: l,
        labOpen: u
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: "flex min-h-0 flex-1", children: [
      l && /* @__PURE__ */ i.jsx(Ny, { onClose: () => c(!1) }),
      /* @__PURE__ */ i.jsxs("main", { className: "flex min-w-0 flex-1 flex-col", children: [
        /* @__PURE__ */ i.jsx(Ty, { onOpenDevice: g }),
        /* @__PURE__ */ i.jsx(ov, { height: p, onResize: h })
      ] }),
      u && /* @__PURE__ */ i.jsx(av, { onClose: () => d(!1) })
    ] }),
    f && /* @__PURE__ */ i.jsx(fv, { deviceId: f, onClose: j }),
    y && /* @__PURE__ */ i.jsx(bv, { onClose: T }),
    U && /* @__PURE__ */ i.jsx(kv, { onClose: () => L(!1) }),
    Z && /* @__PURE__ */ i.jsx(Lv, { onClose: () => J(!1) }),
    m && /* @__PURE__ */ i.jsx(_v, { onClose: v }),
    x && /* @__PURE__ */ i.jsx(Bv, { onClose: C }),
    w && /* @__PURE__ */ i.jsx(Vv, {})
  ] });
}
const Gv = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.invisible{visibility:hidden}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.bottom-3{bottom:.75rem}.bottom-\\[2px\\]{bottom:2px}.left-0{left:0}.left-0\\.5{left:.125rem}.left-1{left:.25rem}.left-1\\/2{left:50%}.left-\\[20px\\]{left:20px}.right-3{right:.75rem}.top-0{top:0}.top-0\\.5{top:.125rem}.top-1{top:.25rem}.top-full{top:100%}.isolate{isolation:isolate}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.mx-0\\.5{margin-left:.125rem;margin-right:.125rem}.mx-auto{margin-left:auto;margin-right:auto}.my-1{margin-top:.25rem;margin-bottom:.25rem}.my-3{margin-top:.75rem;margin-bottom:.75rem}.mb-0\\.5{margin-bottom:.125rem}.mb-1{margin-bottom:.25rem}.mb-1\\.5{margin-bottom:.375rem}.mb-2{margin-bottom:.5rem}.mb-2\\.5{margin-bottom:.625rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.ml-4{margin-left:1rem}.ml-auto{margin-left:auto}.mr-1{margin-right:.25rem}.mt-0\\.5{margin-top:.125rem}.mt-1{margin-top:.25rem}.mt-1\\.5{margin-top:.375rem}.mt-2{margin-top:.5rem}.mt-2\\.5{margin-top:.625rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.block{display:block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-1\\.5{height:.375rem}.h-2{height:.5rem}.h-20{height:5rem}.h-28{height:7rem}.h-32{height:8rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-64{height:16rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[18px\\]{height:18px}.h-\\[22px\\]{height:22px}.h-\\[2px\\]{height:2px}.h-full{height:100%}.h-px{height:1px}.max-h-\\[132px\\]{max-height:132px}.max-h-\\[232px\\]{max-height:232px}.max-h-\\[260px\\]{max-height:260px}.max-h-\\[320px\\]{max-height:320px}.max-h-\\[86vh\\]{max-height:86vh}.min-h-0{min-height:0px}.min-h-\\[52px\\]{min-height:52px}.w-1\\.5{width:.375rem}.w-10{width:2.5rem}.w-11{width:2.75rem}.w-2{width:.5rem}.w-3\\.5{width:.875rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-7{width:1.75rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-\\[18px\\]{width:18px}.w-\\[196px\\]{width:196px}.w-\\[228px\\]{width:228px}.w-\\[286px\\]{width:286px}.w-full{width:100%}.w-px{width:1px}.min-w-0{min-width:0px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[196px\\]{min-width:196px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[48px\\]{min-width:48px}.max-w-2xl{max-width:42rem}.max-w-3xl{max-width:48rem}.max-w-4xl{max-width:56rem}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90\\%\\]{max-width:90%}.max-w-md{max-width:28rem}.max-w-sm{max-width:24rem}.max-w-xl{max-width:36rem}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.shrink-0{flex-shrink:0}.border-collapse{border-collapse:collapse}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-grab{cursor:grab}.cursor-grabbing{cursor:grabbing}.cursor-move{cursor:move}.cursor-not-allowed{cursor:not-allowed}.cursor-ns-resize{cursor:ns-resize}.cursor-nwse-resize{cursor:nwse-resize}.cursor-pointer{cursor:pointer}.cursor-text{cursor:text}.touch-none{touch-action:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize-none{resize:none}.resize{resize:both}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-\\[auto_1fr\\]{grid-template-columns:auto 1fr}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-items-center{place-items:center}.items-start{align-items:flex-start}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-px{gap:1px}.gap-x-3{-moz-column-gap:.75rem;column-gap:.75rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-y-1{row-gap:.25rem}.gap-y-1\\.5{row-gap:.375rem}.gap-y-3{row-gap:.75rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.375rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem * var(--tw-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.whitespace-pre{white-space:pre}.whitespace-pre-wrap{white-space:pre-wrap}.break-words{overflow-wrap:break-word}.break-all{word-break:break-all}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.rounded-bl-sm{border-bottom-left-radius:.125rem}.rounded-br-sm{border-bottom-right-radius:.125rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-accent{--tw-border-opacity: 1;border-color:rgb(var(--nr-accent) / var(--tw-border-opacity))}.border-accent\\/40{border-color:rgb(var(--nr-accent) / .4)}.border-accent\\/50{border-color:rgb(var(--nr-accent) / .5)}.border-amber-500\\/40{border-color:#f59e0b66}.border-down\\/30{border-color:rgb(var(--nr-down) / .3)}.border-down\\/40{border-color:rgb(var(--nr-down) / .4)}.border-down\\/50{border-color:rgb(var(--nr-down) / .5)}.border-down\\/60{border-color:rgb(var(--nr-down) / .6)}.border-line{--tw-border-opacity: 1;border-color:rgb(var(--nr-line) / var(--tw-border-opacity))}.border-rose-500\\/40{border-color:#f43f5e66}.border-sky-500\\/30{border-color:#0ea5e94d}.border-up\\/40{border-color:rgb(var(--nr-up) / .4)}.border-up\\/50{border-color:rgb(var(--nr-up) / .5)}.border-up\\/60{border-color:rgb(var(--nr-up) / .6)}.border-warn\\/40{border-color:rgb(var(--nr-warn) / .4)}.border-warn\\/50{border-color:rgb(var(--nr-warn) / .5)}.border-warn\\/60{border-color:rgb(var(--nr-warn) / .6)}.border-white\\/10{border-color:#ffffff1a}.border-white\\/15{border-color:#ffffff26}.border-white\\/20{border-color:#fff3}.border-white\\/5{border-color:#ffffff0d}.bg-\\[rgb\\(var\\(--nr-bg\\)\\)\\]{background-color:rgb(var(--nr-bg))}.bg-\\[rgb\\(var\\(--nr-term-bg\\)\\)\\]{background-color:rgb(var(--nr-term-bg))}.bg-accent{--tw-bg-opacity: 1;background-color:rgb(var(--nr-accent) / var(--tw-bg-opacity))}.bg-accent\\/10{background-color:rgb(var(--nr-accent) / .1)}.bg-accent\\/15{background-color:rgb(var(--nr-accent) / .15)}.bg-accent\\/20{background-color:rgb(var(--nr-accent) / .2)}.bg-amber-500\\/10{background-color:#f59e0b1a}.bg-black\\/25{background-color:#00000040}.bg-black\\/55{background-color:#0000008c}.bg-down{--tw-bg-opacity: 1;background-color:rgb(var(--nr-down) / var(--tw-bg-opacity))}.bg-down\\/10{background-color:rgb(var(--nr-down) / .1)}.bg-down\\/15{background-color:rgb(var(--nr-down) / .15)}.bg-emerald-500\\/25{background-color:#10b98140}.bg-line{--tw-bg-opacity: 1;background-color:rgb(var(--nr-line) / var(--tw-bg-opacity))}.bg-line\\/60{background-color:rgb(var(--nr-line) / .6)}.bg-panel{--tw-bg-opacity: 1;background-color:rgb(var(--nr-panel) / var(--tw-bg-opacity))}.bg-panel\\/60{background-color:rgb(var(--nr-panel) / .6)}.bg-panel\\/90{background-color:rgb(var(--nr-panel) / .9)}.bg-panel2{--tw-bg-opacity: 1;background-color:rgb(var(--nr-panel2) / var(--tw-bg-opacity))}.bg-rose-500\\/10{background-color:#f43f5e1a}.bg-sky-500\\/10{background-color:#0ea5e91a}.bg-sky-500\\/20{background-color:#0ea5e933}.bg-sky-500\\/25{background-color:#0ea5e940}.bg-sky-500\\/50{background-color:#0ea5e980}.bg-sky-600{--tw-bg-opacity: 1;background-color:rgb(2 132 199 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-up{--tw-bg-opacity: 1;background-color:rgb(var(--nr-up) / var(--tw-bg-opacity))}.bg-up\\/10{background-color:rgb(var(--nr-up) / .1)}.bg-up\\/15{background-color:rgb(var(--nr-up) / .15)}.bg-warn{--tw-bg-opacity: 1;background-color:rgb(var(--nr-warn) / var(--tw-bg-opacity))}.bg-warn\\/10{background-color:rgb(var(--nr-warn) / .1)}.bg-warn\\/15{background-color:rgb(var(--nr-warn) / .15)}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-white\\/10{background-color:#ffffff1a}.bg-white\\/5{background-color:#ffffff0d}.bg-white\\/\\[0\\.03\\]{background-color:#ffffff08}.p-0\\.5{padding:.125rem}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-1\\.5{padding-left:.375rem;padding-right:.375rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-3\\.5{padding-left:.875rem;padding-right:.875rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-\\[1px\\]{padding-top:1px;padding-bottom:1px}.py-\\[3px\\]{padding-top:3px;padding-bottom:3px}.pb-2{padding-bottom:.5rem}.pl-1{padding-left:.25rem}.pl-3{padding-left:.75rem}.pt-1\\.5{padding-top:.375rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.text-\\[10\\.5px\\]{font-size:10.5px}.text-\\[10px\\]{font-size:10px}.text-\\[11\\.5px\\]{font-size:11.5px}.text-\\[11px\\]{font-size:11px}.text-\\[12\\.5px\\]{font-size:12.5px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[8\\.5px\\]{font-size:8.5px}.text-\\[9\\.5px\\]{font-size:9.5px}.text-\\[9px\\]{font-size:9px}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing: tabular-nums;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.leading-\\[1\\.45\\]{line-height:1.45}.leading-\\[1\\.55\\]{line-height:1.55}.leading-none{line-height:1}.leading-relaxed{line-height:1.625}.leading-snug{line-height:1.375}.leading-tight{line-height:1.25}.tracking-tight{letter-spacing:-.025em}.tracking-wide{letter-spacing:.025em}.tracking-wider{letter-spacing:.05em}.tracking-widest{letter-spacing:.1em}.text-\\[rgb\\(var\\(--nr-term-fg\\)\\)\\]{color:rgb(var(--nr-term-fg))}.text-accent{--tw-text-opacity: 1;color:rgb(var(--nr-accent) / var(--tw-text-opacity))}.text-amber-300{--tw-text-opacity: 1;color:rgb(252 211 77 / var(--tw-text-opacity))}.text-amber-400{--tw-text-opacity: 1;color:rgb(251 191 36 / var(--tw-text-opacity))}.text-amber-400\\/90{color:#fbbf24e6}.text-down{--tw-text-opacity: 1;color:rgb(var(--nr-down) / var(--tw-text-opacity))}.text-emerald-300{--tw-text-opacity: 1;color:rgb(110 231 183 / var(--tw-text-opacity))}.text-emerald-400{--tw-text-opacity: 1;color:rgb(52 211 153 / var(--tw-text-opacity))}.text-ink{--tw-text-opacity: 1;color:rgb(var(--nr-ink) / var(--tw-text-opacity))}.text-ink\\/90{color:rgb(var(--nr-ink) / .9)}.text-rose-300{--tw-text-opacity: 1;color:rgb(253 164 175 / var(--tw-text-opacity))}.text-rose-400{--tw-text-opacity: 1;color:rgb(251 113 133 / var(--tw-text-opacity))}.text-sky-200{--tw-text-opacity: 1;color:rgb(186 230 253 / var(--tw-text-opacity))}.text-sky-300{--tw-text-opacity: 1;color:rgb(125 211 252 / var(--tw-text-opacity))}.text-slate-100{--tw-text-opacity: 1;color:rgb(241 245 249 / var(--tw-text-opacity))}.text-slate-200{--tw-text-opacity: 1;color:rgb(226 232 240 / var(--tw-text-opacity))}.text-slate-300{--tw-text-opacity: 1;color:rgb(203 213 225 / var(--tw-text-opacity))}.text-slate-400{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity))}.text-slate-500{--tw-text-opacity: 1;color:rgb(100 116 139 / var(--tw-text-opacity))}.text-slate-600{--tw-text-opacity: 1;color:rgb(71 85 105 / var(--tw-text-opacity))}.text-soft{--tw-text-opacity: 1;color:rgb(var(--nr-soft) / var(--tw-text-opacity))}.text-soft\\/50{color:rgb(var(--nr-soft) / .5)}.text-soft\\/60{color:rgb(var(--nr-soft) / .6)}.text-up{--tw-text-opacity: 1;color:rgb(var(--nr-up) / var(--tw-text-opacity))}.text-warn{--tw-text-opacity: 1;color:rgb(var(--nr-warn) / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.accent-\\[rgb\\(var\\(--nr-accent\\)\\)\\]{accent-color:rgb(var(--nr-accent))}.opacity-50{opacity:.5}.opacity-55{opacity:.55}.opacity-60{opacity:.6}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur{--tw-backdrop-blur: blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}:root,:host{--nr-bg: 244 246 251;--nr-panel: 255 255 255;--nr-panel2: 238 241 247;--nr-ink: 17 23 38;--nr-soft: 96 110 133;--nr-line: 216 222 233;--nr-accent: 23 99 255;--nr-up: 19 166 106;--nr-down: 226 59 78;--nr-warn: 217 138 0;--nr-grid: 226 232 240;--nr-term-bg: 12 18 34;--nr-term-fg: 207 227 255;color-scheme:light}[data-theme=dark],:host([theme="dark"]){--nr-bg: 10 14 26;--nr-panel: 18 24 41;--nr-panel2: 14 20 34;--nr-ink: 231 237 249;--nr-soft: 147 161 189;--nr-line: 36 45 68;--nr-accent: 77 135 255;--nr-up: 47 211 138;--nr-down: 255 90 106;--nr-warn: 255 176 32;--nr-grid: 22 29 48;--nr-term-bg: 6 10 20;--nr-term-fg: 207 227 255;color-scheme:dark}html,body,#root{height:100%}body{margin:0;background:rgb(var(--nr-bg));color:rgb(var(--nr-ink));font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif;font-size:14px;overflow:hidden}.nr-grid{background-image:radial-gradient(circle at 1px 1px,rgb(var(--nr-grid)) 1px,transparent 0);background-size:22px 22px}.nr-term{background:rgb(var(--nr-term-bg));color:rgb(var(--nr-term-fg))}*::-webkit-scrollbar{width:9px;height:9px}*::-webkit-scrollbar-thumb{background:rgb(var(--nr-line));border-radius:6px}*::-webkit-scrollbar-track{background:transparent}@media (prefers-reduced-motion: reduce){*{transition-duration:.01ms!important;animation-duration:.01ms!important}}:focus-visible{outline:2px solid rgb(var(--nr-accent));outline-offset:2px}.placeholder\\:text-slate-600::-moz-placeholder{--tw-text-opacity: 1;color:rgb(71 85 105 / var(--tw-text-opacity))}.placeholder\\:text-slate-600::placeholder{--tw-text-opacity: 1;color:rgb(71 85 105 / var(--tw-text-opacity))}.hover\\:border-accent:hover{--tw-border-opacity: 1;border-color:rgb(var(--nr-accent) / var(--tw-border-opacity))}.hover\\:border-accent\\/50:hover{border-color:rgb(var(--nr-accent) / .5)}.hover\\:border-down:hover{--tw-border-opacity: 1;border-color:rgb(var(--nr-down) / var(--tw-border-opacity))}.hover\\:border-sky-500\\/50:hover{border-color:#0ea5e980}.hover\\:bg-accent\\/15:hover{background-color:rgb(var(--nr-accent) / .15)}.hover\\:bg-accent\\/60:hover{background-color:rgb(var(--nr-accent) / .6)}.hover\\:bg-down\\/10:hover{background-color:rgb(var(--nr-down) / .1)}.hover\\:bg-panel2:hover{--tw-bg-opacity: 1;background-color:rgb(var(--nr-panel2) / var(--tw-bg-opacity))}.hover\\:bg-white\\/10:hover{background-color:#ffffff1a}.hover\\:bg-white\\/5:hover{background-color:#ffffff0d}.hover\\:text-accent:hover{--tw-text-opacity: 1;color:rgb(var(--nr-accent) / var(--tw-text-opacity))}.hover\\:text-ink:hover{--tw-text-opacity: 1;color:rgb(var(--nr-ink) / var(--tw-text-opacity))}.hover\\:text-slate-100:hover{--tw-text-opacity: 1;color:rgb(241 245 249 / var(--tw-text-opacity))}.hover\\:text-slate-200:hover{--tw-text-opacity: 1;color:rgb(226 232 240 / var(--tw-text-opacity))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-sm:hover{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.hover\\:brightness-110:hover{--tw-brightness: brightness(1.1);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.focus\\:border-accent:focus{--tw-border-opacity: 1;border-color:rgb(var(--nr-accent) / var(--tw-border-opacity))}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.group:hover .group-hover\\:block{display:block}.group:focus .group-focus\\:block{display:block}@media (min-width: 640px){.sm\\:inline-flex{display:inline-flex}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (min-width: 768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-\\[1\\.1fr_1fr\\]{grid-template-columns:1.1fr 1fr}}@media (min-width: 1024px){.lg\\:grid-cols-\\[260px_1fr\\]{grid-template-columns:260px 1fr}}', Qu = "netrange-lab";
class Kv extends HTMLElement {
  static get observedAttributes() {
    return ["theme", "lab", "height"];
  }
  constructor() {
    super(), this._root = null, this._mount = null, this._unsub = null;
  }
  connectedCallback() {
    if (this._root) return;
    const t = this.attachShadow({ mode: "open" }), n = document.createElement("style");
    n.textContent = Gv + `
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
    const a = this.getAttribute("scenario") || (this.getAttribute("autostart") === "true" ? "starter" : null);
    let l = null;
    const c = this.getAttribute("state");
    if (c)
      try {
        l = JSON.parse(c);
      } catch {
        console.warn("[netrange] `state` attribute is not valid JSON; ignoring.");
      }
    this._root = dh(r), this._root.render(/* @__PURE__ */ i.jsx(qv, { initialState: l, scenario: a })), this._onGraded = (u) => {
      var f;
      const { labId: d, result: p } = u.detail, h = Tu(sr(d), p);
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
    return Tu(sr(t.labId), n);
  }
  reset() {
    b.getState().resetTopology();
  }
}
customElements.get(Qu) || customElements.define(Qu, Kv);
export {
  Qu as TAG,
  Kv as default
};
