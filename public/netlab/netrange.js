function Vu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qu = { exports: {} }, Lo = {}, Gu = { exports: {} }, V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xs = Symbol.for("react.element"), cf = Symbol.for("react.portal"), uf = Symbol.for("react.fragment"), df = Symbol.for("react.strict_mode"), pf = Symbol.for("react.profiler"), hf = Symbol.for("react.provider"), ff = Symbol.for("react.context"), mf = Symbol.for("react.forward_ref"), gf = Symbol.for("react.suspense"), xf = Symbol.for("react.memo"), yf = Symbol.for("react.lazy"), sc = Symbol.iterator;
function wf(e) {
  return e === null || typeof e != "object" ? null : (e = sc && e[sc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ku = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Yu = Object.assign, Zu = {};
function yr(e, t, n) {
  this.props = e, this.context = t, this.refs = Zu, this.updater = n || Ku;
}
yr.prototype.isReactComponent = {};
yr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
yr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Qu() {
}
Qu.prototype = yr.prototype;
function Vi(e, t, n) {
  this.props = e, this.context = t, this.refs = Zu, this.updater = n || Ku;
}
var qi = Vi.prototype = new Qu();
qi.constructor = Vi;
Yu(qi, yr.prototype);
qi.isPureReactComponent = !0;
var oc = Array.isArray, Xu = Object.prototype.hasOwnProperty, Gi = { current: null }, Ju = { key: !0, ref: !0, __self: !0, __source: !0 };
function ed(e, t, n) {
  var r, s = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) Xu.call(t, r) && !Ju.hasOwnProperty(r) && (s[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) s.children = n;
  else if (1 < l) {
    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
    s.children = c;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) s[r] === void 0 && (s[r] = l[r]);
  return { $$typeof: xs, type: e, key: o, ref: i, props: s, _owner: Gi.current };
}
function vf(e, t) {
  return { $$typeof: xs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ki(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xs;
}
function bf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ac = /\/+/g;
function ia(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? bf("" + e.key) : t.toString(36);
}
function Vs(e, t, n, r, s) {
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
        case xs:
        case cf:
          i = !0;
      }
  }
  if (i) return i = e, s = s(i), e = r === "" ? "." + ia(i, 0) : r, oc(s) ? (n = "", e != null && (n = e.replace(ac, "$&/") + "/"), Vs(s, t, n, "", function(u) {
    return u;
  })) : s != null && (Ki(s) && (s = vf(s, n + (!s.key || i && i.key === s.key ? "" : ("" + s.key).replace(ac, "$&/") + "/") + e)), t.push(s)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", oc(e)) for (var l = 0; l < e.length; l++) {
    o = e[l];
    var c = r + ia(o, l);
    i += Vs(o, t, n, c, s);
  }
  else if (c = wf(e), typeof c == "function") for (e = c.call(e), l = 0; !(o = e.next()).done; ) o = o.value, c = r + ia(o, l++), i += Vs(o, t, n, c, s);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Ns(e, t, n) {
  if (e == null) return e;
  var r = [], s = 0;
  return Vs(e, r, "", "", function(o) {
    return t.call(n, o, s++);
  }), r;
}
function kf(e) {
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
var Fe = { current: null }, qs = { transition: null }, Sf = { ReactCurrentDispatcher: Fe, ReactCurrentBatchConfig: qs, ReactCurrentOwner: Gi };
function td() {
  throw Error("act(...) is not supported in production builds of React.");
}
V.Children = { map: Ns, forEach: function(e, t, n) {
  Ns(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ns(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ns(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ki(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
V.Component = yr;
V.Fragment = uf;
V.Profiler = pf;
V.PureComponent = Vi;
V.StrictMode = df;
V.Suspense = gf;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sf;
V.act = td;
V.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Yu({}, e.props), s = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = Gi.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (c in t) Xu.call(t, c) && !Ju.hasOwnProperty(c) && (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: xs, type: e.type, key: s, ref: o, props: r, _owner: i };
};
V.createContext = function(e) {
  return e = { $$typeof: ff, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: hf, _context: e }, e.Consumer = e;
};
V.createElement = ed;
V.createFactory = function(e) {
  var t = ed.bind(null, e);
  return t.type = e, t;
};
V.createRef = function() {
  return { current: null };
};
V.forwardRef = function(e) {
  return { $$typeof: mf, render: e };
};
V.isValidElement = Ki;
V.lazy = function(e) {
  return { $$typeof: yf, _payload: { _status: -1, _result: e }, _init: kf };
};
V.memo = function(e, t) {
  return { $$typeof: xf, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function(e) {
  var t = qs.transition;
  qs.transition = {};
  try {
    e();
  } finally {
    qs.transition = t;
  }
};
V.unstable_act = td;
V.useCallback = function(e, t) {
  return Fe.current.useCallback(e, t);
};
V.useContext = function(e) {
  return Fe.current.useContext(e);
};
V.useDebugValue = function() {
};
V.useDeferredValue = function(e) {
  return Fe.current.useDeferredValue(e);
};
V.useEffect = function(e, t) {
  return Fe.current.useEffect(e, t);
};
V.useId = function() {
  return Fe.current.useId();
};
V.useImperativeHandle = function(e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function(e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function(e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
V.useMemo = function(e, t) {
  return Fe.current.useMemo(e, t);
};
V.useReducer = function(e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
V.useRef = function(e) {
  return Fe.current.useRef(e);
};
V.useState = function(e) {
  return Fe.current.useState(e);
};
V.useSyncExternalStore = function(e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function() {
  return Fe.current.useTransition();
};
V.version = "18.3.1";
Gu.exports = V;
var P = Gu.exports;
const Kr = /* @__PURE__ */ Vu(P);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jf = P, Nf = Symbol.for("react.element"), Cf = Symbol.for("react.fragment"), $f = Object.prototype.hasOwnProperty, Pf = jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ef = { key: !0, ref: !0, __self: !0, __source: !0 };
function nd(e, t, n) {
  var r, s = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) $f.call(t, r) && !Ef.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) s[r] === void 0 && (s[r] = t[r]);
  return { $$typeof: Nf, type: e, key: o, ref: i, props: s, _owner: Pf.current };
}
Lo.Fragment = Cf;
Lo.jsx = nd;
Lo.jsxs = nd;
qu.exports = Lo;
var a = qu.exports, rd = { exports: {} }, tt = {}, sd = { exports: {} }, od = {};
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
    var F = D.length;
    D.push(N);
    e: for (; 0 < F; ) {
      var A = F - 1 >>> 1, J = D[A];
      if (0 < s(J, N)) D[A] = N, D[F] = J, F = A;
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var N = D[0], F = D.pop();
    if (F !== N) {
      D[0] = F;
      e: for (var A = 0, J = D.length, ie = J >>> 1; A < ie; ) {
        var Be = 2 * (A + 1) - 1, Ht = D[Be], ut = Be + 1, Ye = D[ut];
        if (0 > s(Ht, F)) ut < J && 0 > s(Ye, Ht) ? (D[A] = Ye, D[ut] = F, A = ut) : (D[A] = Ht, D[Be] = F, A = Be);
        else if (ut < J && 0 > s(Ye, F)) D[A] = Ye, D[ut] = F, A = ut;
        else break e;
      }
    }
    return N;
  }
  function s(D, N) {
    var F = D.sortIndex - N.sortIndex;
    return F !== 0 ? F : D.id - N.id;
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
  var c = [], u = [], d = 1, p = null, f = 3, h = !1, x = !1, j = !1, w = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(D) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= D) r(u), N.sortIndex = N.expirationTime, t(c, N);
      else break;
      N = n(u);
    }
  }
  function b(D) {
    if (j = !1, v(D), !x) if (n(c) !== null) x = !0, ke($);
    else {
      var N = n(u);
      N !== null && Q(b, N.startTime - D);
    }
  }
  function $(D, N) {
    x = !1, j && (j = !1, m(E), E = -1), h = !0;
    var F = f;
    try {
      for (v(N), p = n(c); p !== null && (!(p.expirationTime > N) || D && !q()); ) {
        var A = p.callback;
        if (typeof A == "function") {
          p.callback = null, f = p.priorityLevel;
          var J = A(p.expirationTime <= N);
          N = e.unstable_now(), typeof J == "function" ? p.callback = J : p === n(c) && r(c), v(N);
        } else r(c);
        p = n(c);
      }
      if (p !== null) var ie = !0;
      else {
        var Be = n(u);
        Be !== null && Q(b, Be.startTime - N), ie = !1;
      }
      return ie;
    } finally {
      p = null, f = F, h = !1;
    }
  }
  var y = !1, C = null, E = -1, B = 5, z = -1;
  function q() {
    return !(e.unstable_now() - z < B);
  }
  function ee() {
    if (C !== null) {
      var D = e.unstable_now();
      z = D;
      var N = !0;
      try {
        N = C(!0, D);
      } finally {
        N ? te() : (y = !1, C = null);
      }
    } else y = !1;
  }
  var te;
  if (typeof g == "function") te = function() {
    g(ee);
  };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(), be = I.port2;
    I.port1.onmessage = ee, te = function() {
      be.postMessage(null);
    };
  } else te = function() {
    w(ee, 0);
  };
  function ke(D) {
    C = D, y || (y = !0, te());
  }
  function Q(D, N) {
    E = w(function() {
      D(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(D) {
    D.callback = null;
  }, e.unstable_continueExecution = function() {
    x || h || (x = !0, ke($));
  }, e.unstable_forceFrameRate = function(D) {
    0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < D ? Math.floor(1e3 / D) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(D) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = f;
    }
    var F = f;
    f = N;
    try {
      return D();
    } finally {
      f = F;
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
    var F = f;
    f = D;
    try {
      return N();
    } finally {
      f = F;
    }
  }, e.unstable_scheduleCallback = function(D, N, F) {
    var A = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? A + F : A) : F = A, D) {
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
    return J = F + J, D = { id: d++, callback: N, priorityLevel: D, startTime: F, expirationTime: J, sortIndex: -1 }, F > A ? (D.sortIndex = F, t(u, D), n(c) === null && D === n(u) && (j ? (m(E), E = -1) : j = !0, Q(b, F - A))) : (D.sortIndex = J, t(c, D), x || h || (x = !0, ke($))), D;
  }, e.unstable_shouldYield = q, e.unstable_wrapCallback = function(D) {
    var N = f;
    return function() {
      var F = f;
      f = N;
      try {
        return D.apply(this, arguments);
      } finally {
        f = F;
      }
    };
  };
})(od);
sd.exports = od;
var Tf = sd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var If = P, et = Tf;
function T(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ad = /* @__PURE__ */ new Set(), Yr = {};
function zn(e, t) {
  cr(e, t), cr(e + "Capture", t);
}
function cr(e, t) {
  for (Yr[e] = t, e = 0; e < t.length; e++) ad.add(t[e]);
}
var Lt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ha = Object.prototype.hasOwnProperty, Af = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ic = {}, lc = {};
function Mf(e) {
  return Ha.call(lc, e) ? !0 : Ha.call(ic, e) ? !1 : Af.test(e) ? lc[e] = !0 : (ic[e] = !0, !1);
}
function zf(e, t, n, r) {
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
function Df(e, t, n, r) {
  if (t === null || typeof t > "u" || zf(e, t, n, r)) return !0;
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
function He(e, t, n, r, s, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var $e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  $e[e] = new He(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  $e[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  $e[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  $e[e] = new He(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  $e[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  $e[e] = new He(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  $e[e] = new He(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  $e[e] = new He(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  $e[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yi = /[\-:]([a-z])/g;
function Zi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Yi,
    Zi
  );
  $e[t] = new He(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Yi, Zi);
  $e[t] = new He(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Yi, Zi);
  $e[t] = new He(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  $e[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$e.xlinkHref = new He("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  $e[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qi(e, t, n, r) {
  var s = $e.hasOwnProperty(t) ? $e[t] : null;
  (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Df(t, n, s, r) && (n = null), r || s === null ? Mf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ft = If.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Cs = Symbol.for("react.element"), Fn = Symbol.for("react.portal"), Hn = Symbol.for("react.fragment"), Xi = Symbol.for("react.strict_mode"), Ba = Symbol.for("react.profiler"), id = Symbol.for("react.provider"), ld = Symbol.for("react.context"), Ji = Symbol.for("react.forward_ref"), Ua = Symbol.for("react.suspense"), Wa = Symbol.for("react.suspense_list"), el = Symbol.for("react.memo"), Vt = Symbol.for("react.lazy"), cd = Symbol.for("react.offscreen"), cc = Symbol.iterator;
function jr(e) {
  return e === null || typeof e != "object" ? null : (e = cc && e[cc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var pe = Object.assign, la;
function zr(e) {
  if (la === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    la = t && t[1] || "";
  }
  return `
` + la + e;
}
var ca = !1;
function ua(e, t) {
  if (!e || ca) return "";
  ca = !0;
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
    ca = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? zr(e) : "";
}
function Lf(e) {
  switch (e.tag) {
    case 5:
      return zr(e.type);
    case 16:
      return zr("Lazy");
    case 13:
      return zr("Suspense");
    case 19:
      return zr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ua(e.type, !1), e;
    case 11:
      return e = ua(e.type.render, !1), e;
    case 1:
      return e = ua(e.type, !0), e;
    default:
      return "";
  }
}
function Va(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Hn:
      return "Fragment";
    case Fn:
      return "Portal";
    case Ba:
      return "Profiler";
    case Xi:
      return "StrictMode";
    case Ua:
      return "Suspense";
    case Wa:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ld:
      return (e.displayName || "Context") + ".Consumer";
    case id:
      return (e._context.displayName || "Context") + ".Provider";
    case Ji:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case el:
      return t = e.displayName || null, t !== null ? t : Va(e.type) || "Memo";
    case Vt:
      t = e._payload, e = e._init;
      try {
        return Va(e(t));
      } catch {
      }
  }
  return null;
}
function Rf(e) {
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
      return Va(t);
    case 8:
      return t === Xi ? "StrictMode" : "Mode";
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
function an(e) {
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
function ud(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Of(e) {
  var t = ud(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function $s(e) {
  e._valueTracker || (e._valueTracker = Of(e));
}
function dd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ud(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function oo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qa(e, t) {
  var n = t.checked;
  return pe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function uc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = an(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function pd(e, t) {
  t = t.checked, t != null && Qi(e, "checked", t, !1);
}
function Ga(e, t) {
  pd(e, t);
  var n = an(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ka(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ka(e, t.type, an(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function dc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ka(e, t, n) {
  (t !== "number" || oo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Dr = Array.isArray;
function er(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + an(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        e[s].selected = !0, r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ya(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return pe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function pc(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(T(92));
      if (Dr(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: an(n) };
}
function hd(e, t) {
  var n = an(t.value), r = an(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function hc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function fd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Za(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? fd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ps, md = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, s);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ps = Ps || document.createElement("div"), Ps.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ps.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Zr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Or = {
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
}, _f = ["Webkit", "ms", "Moz", "O"];
Object.keys(Or).forEach(function(e) {
  _f.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Or[t] = Or[e];
  });
});
function gd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Or.hasOwnProperty(e) && Or[e] ? ("" + t).trim() : t + "px";
}
function xd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, s = gd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
  }
}
var Ff = pe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Qa(e, t) {
  if (t) {
    if (Ff[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function Xa(e, t) {
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
var Ja = null;
function tl(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ei = null, tr = null, nr = null;
function fc(e) {
  if (e = vs(e)) {
    if (typeof ei != "function") throw Error(T(280));
    var t = e.stateNode;
    t && (t = Ho(t), ei(e.stateNode, e.type, t));
  }
}
function yd(e) {
  tr ? nr ? nr.push(e) : nr = [e] : tr = e;
}
function wd() {
  if (tr) {
    var e = tr, t = nr;
    if (nr = tr = null, fc(e), t) for (e = 0; e < t.length; e++) fc(t[e]);
  }
}
function vd(e, t) {
  return e(t);
}
function bd() {
}
var da = !1;
function kd(e, t, n) {
  if (da) return e(t, n);
  da = !0;
  try {
    return vd(e, t, n);
  } finally {
    da = !1, (tr !== null || nr !== null) && (bd(), wd());
  }
}
function Qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ho(n);
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
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var ti = !1;
if (Lt) try {
  var Nr = {};
  Object.defineProperty(Nr, "passive", { get: function() {
    ti = !0;
  } }), window.addEventListener("test", Nr, Nr), window.removeEventListener("test", Nr, Nr);
} catch {
  ti = !1;
}
function Hf(e, t, n, r, s, o, i, l, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var _r = !1, ao = null, io = !1, ni = null, Bf = { onError: function(e) {
  _r = !0, ao = e;
} };
function Uf(e, t, n, r, s, o, i, l, c) {
  _r = !1, ao = null, Hf.apply(Bf, arguments);
}
function Wf(e, t, n, r, s, o, i, l, c) {
  if (Uf.apply(this, arguments), _r) {
    if (_r) {
      var u = ao;
      _r = !1, ao = null;
    } else throw Error(T(198));
    io || (io = !0, ni = u);
  }
}
function Dn(e) {
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
function Sd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function mc(e) {
  if (Dn(e) !== e) throw Error(T(188));
}
function Vf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Dn(e), t === null) throw Error(T(188));
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
        if (o === n) return mc(s), e;
        if (o === r) return mc(s), t;
        o = o.sibling;
      }
      throw Error(T(188));
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
        if (!i) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function jd(e) {
  return e = Vf(e), e !== null ? Nd(e) : null;
}
function Nd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Nd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cd = et.unstable_scheduleCallback, gc = et.unstable_cancelCallback, qf = et.unstable_shouldYield, Gf = et.unstable_requestPaint, me = et.unstable_now, Kf = et.unstable_getCurrentPriorityLevel, nl = et.unstable_ImmediatePriority, $d = et.unstable_UserBlockingPriority, lo = et.unstable_NormalPriority, Yf = et.unstable_LowPriority, Pd = et.unstable_IdlePriority, Ro = null, Nt = null;
function Zf(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function") try {
    Nt.onCommitFiberRoot(Ro, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var xt = Math.clz32 ? Math.clz32 : Jf, Qf = Math.log, Xf = Math.LN2;
function Jf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Qf(e) / Xf | 0) | 0;
}
var Es = 64, Ts = 4194304;
function Lr(e) {
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
function co(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, s = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var l = i & ~s;
    l !== 0 ? r = Lr(l) : (o &= i, o !== 0 && (r = Lr(o)));
  } else i = n & ~s, i !== 0 ? r = Lr(i) : o !== 0 && (r = Lr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & s) && (s = r & -r, o = t & -t, s >= o || s === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - xt(t), s = 1 << n, r |= e[n], t &= ~s;
  return r;
}
function em(e, t) {
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
function tm(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - xt(o), l = 1 << i, c = s[i];
    c === -1 ? (!(l & n) || l & r) && (s[i] = em(l, t)) : c <= t && (e.expiredLanes |= l), o &= ~l;
  }
}
function ri(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ed() {
  var e = Es;
  return Es <<= 1, !(Es & 4194240) && (Es = 64), e;
}
function pa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ys(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - xt(t), e[t] = n;
}
function nm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - xt(n), o = 1 << s;
    t[s] = 0, r[s] = -1, e[s] = -1, n &= ~o;
  }
}
function rl(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - xt(n), s = 1 << r;
    s & t | e[r] & t && (e[r] |= t), n &= ~s;
  }
}
var X = 0;
function Td(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Id, sl, Ad, Md, zd, si = !1, Is = [], Qt = null, Xt = null, Jt = null, Xr = /* @__PURE__ */ new Map(), Jr = /* @__PURE__ */ new Map(), Gt = [], rm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function xc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Qt = null;
      break;
    case "dragenter":
    case "dragleave":
      Xt = null;
      break;
    case "mouseover":
    case "mouseout":
      Jt = null;
      break;
    case "pointerover":
    case "pointerout":
      Xr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jr.delete(t.pointerId);
  }
}
function Cr(e, t, n, r, s, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [s] }, t !== null && (t = vs(t), t !== null && sl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
}
function sm(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return Qt = Cr(Qt, e, t, n, r, s), !0;
    case "dragenter":
      return Xt = Cr(Xt, e, t, n, r, s), !0;
    case "mouseover":
      return Jt = Cr(Jt, e, t, n, r, s), !0;
    case "pointerover":
      var o = s.pointerId;
      return Xr.set(o, Cr(Xr.get(o) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return o = s.pointerId, Jr.set(o, Cr(Jr.get(o) || null, e, t, n, r, s)), !0;
  }
  return !1;
}
function Dd(e) {
  var t = wn(e.target);
  if (t !== null) {
    var n = Dn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Sd(n), t !== null) {
          e.blockedOn = t, zd(e.priority, function() {
            Ad(n);
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
function Gs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = oi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ja = r, n.target.dispatchEvent(r), Ja = null;
    } else return t = vs(n), t !== null && sl(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function yc(e, t, n) {
  Gs(e) && n.delete(t);
}
function om() {
  si = !1, Qt !== null && Gs(Qt) && (Qt = null), Xt !== null && Gs(Xt) && (Xt = null), Jt !== null && Gs(Jt) && (Jt = null), Xr.forEach(yc), Jr.forEach(yc);
}
function $r(e, t) {
  e.blockedOn === t && (e.blockedOn = null, si || (si = !0, et.unstable_scheduleCallback(et.unstable_NormalPriority, om)));
}
function es(e) {
  function t(s) {
    return $r(s, e);
  }
  if (0 < Is.length) {
    $r(Is[0], e);
    for (var n = 1; n < Is.length; n++) {
      var r = Is[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Qt !== null && $r(Qt, e), Xt !== null && $r(Xt, e), Jt !== null && $r(Jt, e), Xr.forEach(t), Jr.forEach(t), n = 0; n < Gt.length; n++) r = Gt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Gt.length && (n = Gt[0], n.blockedOn === null); ) Dd(n), n.blockedOn === null && Gt.shift();
}
var rr = Ft.ReactCurrentBatchConfig, uo = !0;
function am(e, t, n, r) {
  var s = X, o = rr.transition;
  rr.transition = null;
  try {
    X = 1, ol(e, t, n, r);
  } finally {
    X = s, rr.transition = o;
  }
}
function im(e, t, n, r) {
  var s = X, o = rr.transition;
  rr.transition = null;
  try {
    X = 4, ol(e, t, n, r);
  } finally {
    X = s, rr.transition = o;
  }
}
function ol(e, t, n, r) {
  if (uo) {
    var s = oi(e, t, n, r);
    if (s === null) ka(e, t, r, po, n), xc(e, r);
    else if (sm(s, e, t, n, r)) r.stopPropagation();
    else if (xc(e, r), t & 4 && -1 < rm.indexOf(e)) {
      for (; s !== null; ) {
        var o = vs(s);
        if (o !== null && Id(o), o = oi(e, t, n, r), o === null && ka(e, t, r, po, n), o === s) break;
        s = o;
      }
      s !== null && r.stopPropagation();
    } else ka(e, t, r, null, n);
  }
}
var po = null;
function oi(e, t, n, r) {
  if (po = null, e = tl(r), e = wn(e), e !== null) if (t = Dn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Sd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return po = e, null;
}
function Ld(e) {
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
      switch (Kf()) {
        case nl:
          return 1;
        case $d:
          return 4;
        case lo:
        case Yf:
          return 16;
        case Pd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null, al = null, Ks = null;
function Rd() {
  if (Ks) return Ks;
  var e, t = al, n = t.length, r, s = "value" in Yt ? Yt.value : Yt.textContent, o = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === s[o - r]; r++) ;
  return Ks = s.slice(e, 1 < r ? 1 - r : void 0);
}
function Ys(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function As() {
  return !0;
}
function wc() {
  return !1;
}
function nt(e) {
  function t(n, r, s, o, i) {
    this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? As : wc, this.isPropagationStopped = wc, this;
  }
  return pe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = As);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = As);
  }, persist: function() {
  }, isPersistent: As }), t;
}
var wr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, il = nt(wr), ws = pe({}, wr, { view: 0, detail: 0 }), lm = nt(ws), ha, fa, Pr, Oo = pe({}, ws, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ll, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Pr && (Pr && e.type === "mousemove" ? (ha = e.screenX - Pr.screenX, fa = e.screenY - Pr.screenY) : fa = ha = 0, Pr = e), ha);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : fa;
} }), vc = nt(Oo), cm = pe({}, Oo, { dataTransfer: 0 }), um = nt(cm), dm = pe({}, ws, { relatedTarget: 0 }), ma = nt(dm), pm = pe({}, wr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), hm = nt(pm), fm = pe({}, wr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), mm = nt(fm), gm = pe({}, wr, { data: 0 }), bc = nt(gm), xm = {
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
}, ym = {
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
}, wm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function vm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wm[e]) ? !!t[e] : !1;
}
function ll() {
  return vm;
}
var bm = pe({}, ws, { key: function(e) {
  if (e.key) {
    var t = xm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ys(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ym[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ll, charCode: function(e) {
  return e.type === "keypress" ? Ys(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ys(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), km = nt(bm), Sm = pe({}, Oo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), kc = nt(Sm), jm = pe({}, ws, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ll }), Nm = nt(jm), Cm = pe({}, wr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $m = nt(Cm), Pm = pe({}, Oo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Em = nt(Pm), Tm = [9, 13, 27, 32], cl = Lt && "CompositionEvent" in window, Fr = null;
Lt && "documentMode" in document && (Fr = document.documentMode);
var Im = Lt && "TextEvent" in window && !Fr, Od = Lt && (!cl || Fr && 8 < Fr && 11 >= Fr), Sc = " ", jc = !1;
function _d(e, t) {
  switch (e) {
    case "keyup":
      return Tm.indexOf(t.keyCode) !== -1;
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
function Fd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Bn = !1;
function Am(e, t) {
  switch (e) {
    case "compositionend":
      return Fd(t);
    case "keypress":
      return t.which !== 32 ? null : (jc = !0, Sc);
    case "textInput":
      return e = t.data, e === Sc && jc ? null : e;
    default:
      return null;
  }
}
function Mm(e, t) {
  if (Bn) return e === "compositionend" || !cl && _d(e, t) ? (e = Rd(), Ks = al = Yt = null, Bn = !1, e) : null;
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
      return Od && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var zm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Nc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!zm[e.type] : t === "textarea";
}
function Hd(e, t, n, r) {
  yd(r), t = ho(t, "onChange"), 0 < t.length && (n = new il("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Hr = null, ts = null;
function Dm(e) {
  Xd(e, 0);
}
function _o(e) {
  var t = Vn(e);
  if (dd(t)) return e;
}
function Lm(e, t) {
  if (e === "change") return t;
}
var Bd = !1;
if (Lt) {
  var ga;
  if (Lt) {
    var xa = "oninput" in document;
    if (!xa) {
      var Cc = document.createElement("div");
      Cc.setAttribute("oninput", "return;"), xa = typeof Cc.oninput == "function";
    }
    ga = xa;
  } else ga = !1;
  Bd = ga && (!document.documentMode || 9 < document.documentMode);
}
function $c() {
  Hr && (Hr.detachEvent("onpropertychange", Ud), ts = Hr = null);
}
function Ud(e) {
  if (e.propertyName === "value" && _o(ts)) {
    var t = [];
    Hd(t, ts, e, tl(e)), kd(Dm, t);
  }
}
function Rm(e, t, n) {
  e === "focusin" ? ($c(), Hr = t, ts = n, Hr.attachEvent("onpropertychange", Ud)) : e === "focusout" && $c();
}
function Om(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return _o(ts);
}
function _m(e, t) {
  if (e === "click") return _o(t);
}
function Fm(e, t) {
  if (e === "input" || e === "change") return _o(t);
}
function Hm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var wt = typeof Object.is == "function" ? Object.is : Hm;
function ns(e, t) {
  if (wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Ha.call(t, s) || !wt(e[s], t[s])) return !1;
  }
  return !0;
}
function Pc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ec(e, t) {
  var n = Pc(e);
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
    n = Pc(n);
  }
}
function Wd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Vd() {
  for (var e = window, t = oo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = oo(e.document);
  }
  return t;
}
function ul(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Bm(e) {
  var t = Vd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Wd(n.ownerDocument.documentElement, n)) {
    if (r !== null && ul(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var s = n.textContent.length, o = Math.min(r.start, s);
        r = r.end === void 0 ? o : Math.min(r.end, s), !e.extend && o > r && (s = r, r = o, o = s), s = Ec(n, o);
        var i = Ec(
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
var Um = Lt && "documentMode" in document && 11 >= document.documentMode, Un = null, ai = null, Br = null, ii = !1;
function Tc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ii || Un == null || Un !== oo(r) || (r = Un, "selectionStart" in r && ul(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Br && ns(Br, r) || (Br = r, r = ho(ai, "onSelect"), 0 < r.length && (t = new il("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Un)));
}
function Ms(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Wn = { animationend: Ms("Animation", "AnimationEnd"), animationiteration: Ms("Animation", "AnimationIteration"), animationstart: Ms("Animation", "AnimationStart"), transitionend: Ms("Transition", "TransitionEnd") }, ya = {}, qd = {};
Lt && (qd = document.createElement("div").style, "AnimationEvent" in window || (delete Wn.animationend.animation, delete Wn.animationiteration.animation, delete Wn.animationstart.animation), "TransitionEvent" in window || delete Wn.transitionend.transition);
function Fo(e) {
  if (ya[e]) return ya[e];
  if (!Wn[e]) return e;
  var t = Wn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in qd) return ya[e] = t[n];
  return e;
}
var Gd = Fo("animationend"), Kd = Fo("animationiteration"), Yd = Fo("animationstart"), Zd = Fo("transitionend"), Qd = /* @__PURE__ */ new Map(), Ic = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function un(e, t) {
  Qd.set(e, t), zn(t, [e]);
}
for (var wa = 0; wa < Ic.length; wa++) {
  var va = Ic[wa], Wm = va.toLowerCase(), Vm = va[0].toUpperCase() + va.slice(1);
  un(Wm, "on" + Vm);
}
un(Gd, "onAnimationEnd");
un(Kd, "onAnimationIteration");
un(Yd, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(Zd, "onTransitionEnd");
cr("onMouseEnter", ["mouseout", "mouseover"]);
cr("onMouseLeave", ["mouseout", "mouseover"]);
cr("onPointerEnter", ["pointerout", "pointerover"]);
cr("onPointerLeave", ["pointerout", "pointerover"]);
zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Rr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));
function Ac(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Wf(r, t, void 0, e), e.currentTarget = null;
}
function Xd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], s = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var l = r[i], c = l.instance, u = l.currentTarget;
        if (l = l.listener, c !== o && s.isPropagationStopped()) break e;
        Ac(s, l, u), o = c;
      }
      else for (i = 0; i < r.length; i++) {
        if (l = r[i], c = l.instance, u = l.currentTarget, l = l.listener, c !== o && s.isPropagationStopped()) break e;
        Ac(s, l, u), o = c;
      }
    }
  }
  if (io) throw e = ni, io = !1, ni = null, e;
}
function se(e, t) {
  var n = t[pi];
  n === void 0 && (n = t[pi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Jd(t, e, 2, !1), n.add(r));
}
function ba(e, t, n) {
  var r = 0;
  t && (r |= 4), Jd(n, e, r, t);
}
var zs = "_reactListening" + Math.random().toString(36).slice(2);
function rs(e) {
  if (!e[zs]) {
    e[zs] = !0, ad.forEach(function(n) {
      n !== "selectionchange" && (qm.has(n) || ba(n, !1, e), ba(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zs] || (t[zs] = !0, ba("selectionchange", !1, t));
  }
}
function Jd(e, t, n, r) {
  switch (Ld(t)) {
    case 1:
      var s = am;
      break;
    case 4:
      s = im;
      break;
    default:
      s = ol;
  }
  n = s.bind(null, t, n, e), s = void 0, !ti || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
}
function ka(e, t, n, r, s) {
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
        if (i = wn(l), i === null) return;
        if (c = i.tag, c === 5 || c === 6) {
          r = o = i;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  kd(function() {
    var u = o, d = tl(n), p = [];
    e: {
      var f = Qd.get(e);
      if (f !== void 0) {
        var h = il, x = e;
        switch (e) {
          case "keypress":
            if (Ys(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = km;
            break;
          case "focusin":
            x = "focus", h = ma;
            break;
          case "focusout":
            x = "blur", h = ma;
            break;
          case "beforeblur":
          case "afterblur":
            h = ma;
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
            h = vc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = um;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Nm;
            break;
          case Gd:
          case Kd:
          case Yd:
            h = hm;
            break;
          case Zd:
            h = $m;
            break;
          case "scroll":
            h = lm;
            break;
          case "wheel":
            h = Em;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = mm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = kc;
        }
        var j = (t & 4) !== 0, w = !j && e === "scroll", m = j ? f !== null ? f + "Capture" : null : f;
        j = [];
        for (var g = u, v; g !== null; ) {
          v = g;
          var b = v.stateNode;
          if (v.tag === 5 && b !== null && (v = b, m !== null && (b = Qr(g, m), b != null && j.push(ss(g, b, v)))), w) break;
          g = g.return;
        }
        0 < j.length && (f = new h(f, x, null, n, d), p.push({ event: f, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", f && n !== Ja && (x = n.relatedTarget || n.fromElement) && (wn(x) || x[Rt])) break e;
        if ((h || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window, h ? (x = n.relatedTarget || n.toElement, h = u, x = x ? wn(x) : null, x !== null && (w = Dn(x), x !== w || x.tag !== 5 && x.tag !== 6) && (x = null)) : (h = null, x = u), h !== x)) {
          if (j = vc, b = "onMouseLeave", m = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (j = kc, b = "onPointerLeave", m = "onPointerEnter", g = "pointer"), w = h == null ? f : Vn(h), v = x == null ? f : Vn(x), f = new j(b, g + "leave", h, n, d), f.target = w, f.relatedTarget = v, b = null, wn(d) === u && (j = new j(m, g + "enter", x, n, d), j.target = v, j.relatedTarget = w, b = j), w = b, h && x) t: {
            for (j = h, m = x, g = 0, v = j; v; v = On(v)) g++;
            for (v = 0, b = m; b; b = On(b)) v++;
            for (; 0 < g - v; ) j = On(j), g--;
            for (; 0 < v - g; ) m = On(m), v--;
            for (; g--; ) {
              if (j === m || m !== null && j === m.alternate) break t;
              j = On(j), m = On(m);
            }
            j = null;
          }
          else j = null;
          h !== null && Mc(p, f, h, j, !1), x !== null && w !== null && Mc(p, w, x, j, !0);
        }
      }
      e: {
        if (f = u ? Vn(u) : window, h = f.nodeName && f.nodeName.toLowerCase(), h === "select" || h === "input" && f.type === "file") var $ = Lm;
        else if (Nc(f)) if (Bd) $ = Fm;
        else {
          $ = Om;
          var y = Rm;
        }
        else (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && ($ = _m);
        if ($ && ($ = $(e, u))) {
          Hd(p, $, n, d);
          break e;
        }
        y && y(e, f, u), e === "focusout" && (y = f._wrapperState) && y.controlled && f.type === "number" && Ka(f, "number", f.value);
      }
      switch (y = u ? Vn(u) : window, e) {
        case "focusin":
          (Nc(y) || y.contentEditable === "true") && (Un = y, ai = u, Br = null);
          break;
        case "focusout":
          Br = ai = Un = null;
          break;
        case "mousedown":
          ii = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ii = !1, Tc(p, n, d);
          break;
        case "selectionchange":
          if (Um) break;
        case "keydown":
        case "keyup":
          Tc(p, n, d);
      }
      var C;
      if (cl) e: {
        switch (e) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else Bn ? _d(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Od && n.locale !== "ko" && (Bn || E !== "onCompositionStart" ? E === "onCompositionEnd" && Bn && (C = Rd()) : (Yt = d, al = "value" in Yt ? Yt.value : Yt.textContent, Bn = !0)), y = ho(u, E), 0 < y.length && (E = new bc(E, e, null, n, d), p.push({ event: E, listeners: y }), C ? E.data = C : (C = Fd(n), C !== null && (E.data = C)))), (C = Im ? Am(e, n) : Mm(e, n)) && (u = ho(u, "onBeforeInput"), 0 < u.length && (d = new bc("onBeforeInput", "beforeinput", null, n, d), p.push({ event: d, listeners: u }), d.data = C));
    }
    Xd(p, t);
  });
}
function ss(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ho(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e, o = s.stateNode;
    s.tag === 5 && o !== null && (s = o, o = Qr(e, n), o != null && r.unshift(ss(e, o, s)), o = Qr(e, t), o != null && r.push(ss(e, o, s))), e = e.return;
  }
  return r;
}
function On(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Mc(e, t, n, r, s) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n, c = l.alternate, u = l.stateNode;
    if (c !== null && c === r) break;
    l.tag === 5 && u !== null && (l = u, s ? (c = Qr(n, o), c != null && i.unshift(ss(n, c, l))) : s || (c = Qr(n, o), c != null && i.push(ss(n, c, l)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Gm = /\r\n?/g, Km = /\u0000|\uFFFD/g;
function zc(e) {
  return (typeof e == "string" ? e : "" + e).replace(Gm, `
`).replace(Km, "");
}
function Ds(e, t, n) {
  if (t = zc(t), zc(e) !== t && n) throw Error(T(425));
}
function fo() {
}
var li = null, ci = null;
function ui(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var di = typeof setTimeout == "function" ? setTimeout : void 0, Ym = typeof clearTimeout == "function" ? clearTimeout : void 0, Dc = typeof Promise == "function" ? Promise : void 0, Zm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dc < "u" ? function(e) {
  return Dc.resolve(null).then(e).catch(Qm);
} : di;
function Qm(e) {
  setTimeout(function() {
    throw e;
  });
}
function Sa(e, t) {
  var n = t, r = 0;
  do {
    var s = n.nextSibling;
    if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
      if (r === 0) {
        e.removeChild(s), es(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = s;
  } while (n);
  es(t);
}
function en(e) {
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
function Lc(e) {
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
var vr = Math.random().toString(36).slice(2), St = "__reactFiber$" + vr, os = "__reactProps$" + vr, Rt = "__reactContainer$" + vr, pi = "__reactEvents$" + vr, Xm = "__reactListeners$" + vr, Jm = "__reactHandles$" + vr;
function wn(e) {
  var t = e[St];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Rt] || n[St]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Lc(e); e !== null; ) {
        if (n = e[St]) return n;
        e = Lc(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function vs(e) {
  return e = e[St] || e[Rt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Vn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Ho(e) {
  return e[os] || null;
}
var hi = [], qn = -1;
function dn(e) {
  return { current: e };
}
function oe(e) {
  0 > qn || (e.current = hi[qn], hi[qn] = null, qn--);
}
function ne(e, t) {
  qn++, hi[qn] = e.current, e.current = t;
}
var ln = {}, Ae = dn(ln), qe = dn(!1), Cn = ln;
function ur(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ln;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var s = {}, o;
  for (o in n) s[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
}
function Ge(e) {
  return e = e.childContextTypes, e != null;
}
function mo() {
  oe(qe), oe(Ae);
}
function Rc(e, t, n) {
  if (Ae.current !== ln) throw Error(T(168));
  ne(Ae, t), ne(qe, n);
}
function ep(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(T(108, Rf(e) || "Unknown", s));
  return pe({}, n, r);
}
function go(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ln, Cn = Ae.current, ne(Ae, e), ne(qe, qe.current), !0;
}
function Oc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n ? (e = ep(e, t, Cn), r.__reactInternalMemoizedMergedChildContext = e, oe(qe), oe(Ae), ne(Ae, e)) : oe(qe), ne(qe, n);
}
var It = null, Bo = !1, ja = !1;
function tp(e) {
  It === null ? It = [e] : It.push(e);
}
function eg(e) {
  Bo = !0, tp(e);
}
function pn() {
  if (!ja && It !== null) {
    ja = !0;
    var e = 0, t = X;
    try {
      var n = It;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      It = null, Bo = !1;
    } catch (s) {
      throw It !== null && (It = It.slice(e + 1)), Cd(nl, pn), s;
    } finally {
      X = t, ja = !1;
    }
  }
  return null;
}
var Gn = [], Kn = 0, xo = null, yo = 0, rt = [], st = 0, $n = null, Mt = 1, zt = "";
function xn(e, t) {
  Gn[Kn++] = yo, Gn[Kn++] = xo, xo = e, yo = t;
}
function np(e, t, n) {
  rt[st++] = Mt, rt[st++] = zt, rt[st++] = $n, $n = e;
  var r = Mt;
  e = zt;
  var s = 32 - xt(r) - 1;
  r &= ~(1 << s), n += 1;
  var o = 32 - xt(t) + s;
  if (30 < o) {
    var i = s - s % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, s -= i, Mt = 1 << 32 - xt(t) + s | n << s | r, zt = o + e;
  } else Mt = 1 << o | n << s | r, zt = e;
}
function dl(e) {
  e.return !== null && (xn(e, 1), np(e, 1, 0));
}
function pl(e) {
  for (; e === xo; ) xo = Gn[--Kn], Gn[Kn] = null, yo = Gn[--Kn], Gn[Kn] = null;
  for (; e === $n; ) $n = rt[--st], rt[st] = null, zt = rt[--st], rt[st] = null, Mt = rt[--st], rt[st] = null;
}
var Je = null, Qe = null, ae = !1, mt = null;
function rp(e, t) {
  var n = ot(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function _c(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Je = e, Qe = en(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Je = e, Qe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = $n !== null ? { id: Mt, overflow: zt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ot(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Je = e, Qe = null, !0) : !1;
    default:
      return !1;
  }
}
function fi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function mi(e) {
  if (ae) {
    var t = Qe;
    if (t) {
      var n = t;
      if (!_c(e, t)) {
        if (fi(e)) throw Error(T(418));
        t = en(n.nextSibling);
        var r = Je;
        t && _c(e, t) ? rp(r, n) : (e.flags = e.flags & -4097 | 2, ae = !1, Je = e);
      }
    } else {
      if (fi(e)) throw Error(T(418));
      e.flags = e.flags & -4097 | 2, ae = !1, Je = e;
    }
  }
}
function Fc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Je = e;
}
function Ls(e) {
  if (e !== Je) return !1;
  if (!ae) return Fc(e), ae = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ui(e.type, e.memoizedProps)), t && (t = Qe)) {
    if (fi(e)) throw sp(), Error(T(418));
    for (; t; ) rp(e, t), t = en(t.nextSibling);
  }
  if (Fc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Qe = en(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Qe = null;
    }
  } else Qe = Je ? en(e.stateNode.nextSibling) : null;
  return !0;
}
function sp() {
  for (var e = Qe; e; ) e = en(e.nextSibling);
}
function dr() {
  Qe = Je = null, ae = !1;
}
function hl(e) {
  mt === null ? mt = [e] : mt.push(e);
}
var tg = Ft.ReactCurrentBatchConfig;
function Er(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var s = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var l = s.refs;
        i === null ? delete l[o] : l[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Rs(e, t) {
  throw e = Object.prototype.toString.call(t), Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Hc(e) {
  var t = e._init;
  return t(e._payload);
}
function op(e) {
  function t(m, g) {
    if (e) {
      var v = m.deletions;
      v === null ? (m.deletions = [g], m.flags |= 16) : v.push(g);
    }
  }
  function n(m, g) {
    if (!e) return null;
    for (; g !== null; ) t(m, g), g = g.sibling;
    return null;
  }
  function r(m, g) {
    for (m = /* @__PURE__ */ new Map(); g !== null; ) g.key !== null ? m.set(g.key, g) : m.set(g.index, g), g = g.sibling;
    return m;
  }
  function s(m, g) {
    return m = sn(m, g), m.index = 0, m.sibling = null, m;
  }
  function o(m, g, v) {
    return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < g ? (m.flags |= 2, g) : v) : (m.flags |= 2, g)) : (m.flags |= 1048576, g);
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, g, v, b) {
    return g === null || g.tag !== 6 ? (g = Ia(v, m.mode, b), g.return = m, g) : (g = s(g, v), g.return = m, g);
  }
  function c(m, g, v, b) {
    var $ = v.type;
    return $ === Hn ? d(m, g, v.props.children, b, v.key) : g !== null && (g.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === Vt && Hc($) === g.type) ? (b = s(g, v.props), b.ref = Er(m, g, v), b.return = m, b) : (b = no(v.type, v.key, v.props, null, m.mode, b), b.ref = Er(m, g, v), b.return = m, b);
  }
  function u(m, g, v, b) {
    return g === null || g.tag !== 4 || g.stateNode.containerInfo !== v.containerInfo || g.stateNode.implementation !== v.implementation ? (g = Aa(v, m.mode, b), g.return = m, g) : (g = s(g, v.children || []), g.return = m, g);
  }
  function d(m, g, v, b, $) {
    return g === null || g.tag !== 7 ? (g = jn(v, m.mode, b, $), g.return = m, g) : (g = s(g, v), g.return = m, g);
  }
  function p(m, g, v) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return g = Ia("" + g, m.mode, v), g.return = m, g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Cs:
          return v = no(g.type, g.key, g.props, null, m.mode, v), v.ref = Er(m, null, g), v.return = m, v;
        case Fn:
          return g = Aa(g, m.mode, v), g.return = m, g;
        case Vt:
          var b = g._init;
          return p(m, b(g._payload), v);
      }
      if (Dr(g) || jr(g)) return g = jn(g, m.mode, v, null), g.return = m, g;
      Rs(m, g);
    }
    return null;
  }
  function f(m, g, v, b) {
    var $ = g !== null ? g.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return $ !== null ? null : l(m, g, "" + v, b);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Cs:
          return v.key === $ ? c(m, g, v, b) : null;
        case Fn:
          return v.key === $ ? u(m, g, v, b) : null;
        case Vt:
          return $ = v._init, f(
            m,
            g,
            $(v._payload),
            b
          );
      }
      if (Dr(v) || jr(v)) return $ !== null ? null : d(m, g, v, b, null);
      Rs(m, v);
    }
    return null;
  }
  function h(m, g, v, b, $) {
    if (typeof b == "string" && b !== "" || typeof b == "number") return m = m.get(v) || null, l(g, m, "" + b, $);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Cs:
          return m = m.get(b.key === null ? v : b.key) || null, c(g, m, b, $);
        case Fn:
          return m = m.get(b.key === null ? v : b.key) || null, u(g, m, b, $);
        case Vt:
          var y = b._init;
          return h(m, g, v, y(b._payload), $);
      }
      if (Dr(b) || jr(b)) return m = m.get(v) || null, d(g, m, b, $, null);
      Rs(g, b);
    }
    return null;
  }
  function x(m, g, v, b) {
    for (var $ = null, y = null, C = g, E = g = 0, B = null; C !== null && E < v.length; E++) {
      C.index > E ? (B = C, C = null) : B = C.sibling;
      var z = f(m, C, v[E], b);
      if (z === null) {
        C === null && (C = B);
        break;
      }
      e && C && z.alternate === null && t(m, C), g = o(z, g, E), y === null ? $ = z : y.sibling = z, y = z, C = B;
    }
    if (E === v.length) return n(m, C), ae && xn(m, E), $;
    if (C === null) {
      for (; E < v.length; E++) C = p(m, v[E], b), C !== null && (g = o(C, g, E), y === null ? $ = C : y.sibling = C, y = C);
      return ae && xn(m, E), $;
    }
    for (C = r(m, C); E < v.length; E++) B = h(C, m, E, v[E], b), B !== null && (e && B.alternate !== null && C.delete(B.key === null ? E : B.key), g = o(B, g, E), y === null ? $ = B : y.sibling = B, y = B);
    return e && C.forEach(function(q) {
      return t(m, q);
    }), ae && xn(m, E), $;
  }
  function j(m, g, v, b) {
    var $ = jr(v);
    if (typeof $ != "function") throw Error(T(150));
    if (v = $.call(v), v == null) throw Error(T(151));
    for (var y = $ = null, C = g, E = g = 0, B = null, z = v.next(); C !== null && !z.done; E++, z = v.next()) {
      C.index > E ? (B = C, C = null) : B = C.sibling;
      var q = f(m, C, z.value, b);
      if (q === null) {
        C === null && (C = B);
        break;
      }
      e && C && q.alternate === null && t(m, C), g = o(q, g, E), y === null ? $ = q : y.sibling = q, y = q, C = B;
    }
    if (z.done) return n(
      m,
      C
    ), ae && xn(m, E), $;
    if (C === null) {
      for (; !z.done; E++, z = v.next()) z = p(m, z.value, b), z !== null && (g = o(z, g, E), y === null ? $ = z : y.sibling = z, y = z);
      return ae && xn(m, E), $;
    }
    for (C = r(m, C); !z.done; E++, z = v.next()) z = h(C, m, E, z.value, b), z !== null && (e && z.alternate !== null && C.delete(z.key === null ? E : z.key), g = o(z, g, E), y === null ? $ = z : y.sibling = z, y = z);
    return e && C.forEach(function(ee) {
      return t(m, ee);
    }), ae && xn(m, E), $;
  }
  function w(m, g, v, b) {
    if (typeof v == "object" && v !== null && v.type === Hn && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Cs:
          e: {
            for (var $ = v.key, y = g; y !== null; ) {
              if (y.key === $) {
                if ($ = v.type, $ === Hn) {
                  if (y.tag === 7) {
                    n(m, y.sibling), g = s(y, v.props.children), g.return = m, m = g;
                    break e;
                  }
                } else if (y.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === Vt && Hc($) === y.type) {
                  n(m, y.sibling), g = s(y, v.props), g.ref = Er(m, y, v), g.return = m, m = g;
                  break e;
                }
                n(m, y);
                break;
              } else t(m, y);
              y = y.sibling;
            }
            v.type === Hn ? (g = jn(v.props.children, m.mode, b, v.key), g.return = m, m = g) : (b = no(v.type, v.key, v.props, null, m.mode, b), b.ref = Er(m, g, v), b.return = m, m = b);
          }
          return i(m);
        case Fn:
          e: {
            for (y = v.key; g !== null; ) {
              if (g.key === y) if (g.tag === 4 && g.stateNode.containerInfo === v.containerInfo && g.stateNode.implementation === v.implementation) {
                n(m, g.sibling), g = s(g, v.children || []), g.return = m, m = g;
                break e;
              } else {
                n(m, g);
                break;
              }
              else t(m, g);
              g = g.sibling;
            }
            g = Aa(v, m.mode, b), g.return = m, m = g;
          }
          return i(m);
        case Vt:
          return y = v._init, w(m, g, y(v._payload), b);
      }
      if (Dr(v)) return x(m, g, v, b);
      if (jr(v)) return j(m, g, v, b);
      Rs(m, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, g !== null && g.tag === 6 ? (n(m, g.sibling), g = s(g, v), g.return = m, m = g) : (n(m, g), g = Ia(v, m.mode, b), g.return = m, m = g), i(m)) : n(m, g);
  }
  return w;
}
var pr = op(!0), ap = op(!1), wo = dn(null), vo = null, Yn = null, fl = null;
function ml() {
  fl = Yn = vo = null;
}
function gl(e) {
  var t = wo.current;
  oe(wo), e._currentValue = t;
}
function gi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function sr(e, t) {
  vo = e, fl = Yn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (We = !0), e.firstContext = null);
}
function it(e) {
  var t = e._currentValue;
  if (fl !== e) if (e = { context: e, memoizedValue: t, next: null }, Yn === null) {
    if (vo === null) throw Error(T(308));
    Yn = e, vo.dependencies = { lanes: 0, firstContext: e };
  } else Yn = Yn.next = e;
  return t;
}
var vn = null;
function xl(e) {
  vn === null ? vn = [e] : vn.push(e);
}
function ip(e, t, n, r) {
  var s = t.interleaved;
  return s === null ? (n.next = n, xl(t)) : (n.next = s.next, s.next = n), t.interleaved = n, Ot(e, r);
}
function Ot(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var qt = !1;
function yl(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lp(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function tn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Z & 2) {
    var s = r.pending;
    return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, Ot(e, n);
  }
  return s = r.interleaved, s === null ? (t.next = t, xl(r)) : (t.next = s.next, s.next = t), r.interleaved = t, Ot(e, n);
}
function Zs(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, rl(e, n);
  }
}
function Bc(e, t) {
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
function bo(e, t, n, r) {
  var s = e.updateQueue;
  qt = !1;
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
      var f = l.lane, h = l.eventTime;
      if ((r & f) === f) {
        d !== null && (d = d.next = {
          eventTime: h,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var x = e, j = l;
          switch (f = t, h = n, j.tag) {
            case 1:
              if (x = j.payload, typeof x == "function") {
                p = x.call(h, p, f);
                break e;
              }
              p = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = j.payload, f = typeof x == "function" ? x.call(h, p, f) : x, f == null) break e;
              p = pe({}, p, f);
              break e;
            case 2:
              qt = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, f = s.effects, f === null ? s.effects = [l] : f.push(l));
      } else h = { eventTime: h, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (u = d = h, c = p) : d = d.next = h, i |= f;
      if (l = l.next, l === null) {
        if (l = s.shared.pending, l === null) break;
        f = l, l = f.next, f.next = null, s.lastBaseUpdate = f, s.shared.pending = null;
      }
    } while (!0);
    if (d === null && (c = p), s.baseState = c, s.firstBaseUpdate = u, s.lastBaseUpdate = d, t = s.shared.interleaved, t !== null) {
      s = t;
      do
        i |= s.lane, s = s.next;
      while (s !== t);
    } else o === null && (s.shared.lanes = 0);
    En |= i, e.lanes = i, e.memoizedState = p;
  }
}
function Uc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], s = r.callback;
    if (s !== null) {
      if (r.callback = null, r = n, typeof s != "function") throw Error(T(191, s));
      s.call(r);
    }
  }
}
var bs = {}, Ct = dn(bs), as = dn(bs), is = dn(bs);
function bn(e) {
  if (e === bs) throw Error(T(174));
  return e;
}
function wl(e, t) {
  switch (ne(is, t), ne(as, e), ne(Ct, bs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Za(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Za(t, e);
  }
  oe(Ct), ne(Ct, t);
}
function hr() {
  oe(Ct), oe(as), oe(is);
}
function cp(e) {
  bn(is.current);
  var t = bn(Ct.current), n = Za(t, e.type);
  t !== n && (ne(as, e), ne(Ct, n));
}
function vl(e) {
  as.current === e && (oe(Ct), oe(as));
}
var ce = dn(0);
function ko(e) {
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
var Na = [];
function bl() {
  for (var e = 0; e < Na.length; e++) Na[e]._workInProgressVersionPrimary = null;
  Na.length = 0;
}
var Qs = Ft.ReactCurrentDispatcher, Ca = Ft.ReactCurrentBatchConfig, Pn = 0, de = null, xe = null, we = null, So = !1, Ur = !1, ls = 0, ng = 0;
function Pe() {
  throw Error(T(321));
}
function kl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!wt(e[n], t[n])) return !1;
  return !0;
}
function Sl(e, t, n, r, s, o) {
  if (Pn = o, de = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qs.current = e === null || e.memoizedState === null ? ag : ig, e = n(r, s), Ur) {
    o = 0;
    do {
      if (Ur = !1, ls = 0, 25 <= o) throw Error(T(301));
      o += 1, we = xe = null, t.updateQueue = null, Qs.current = lg, e = n(r, s);
    } while (Ur);
  }
  if (Qs.current = jo, t = xe !== null && xe.next !== null, Pn = 0, we = xe = de = null, So = !1, t) throw Error(T(300));
  return e;
}
function jl() {
  var e = ls !== 0;
  return ls = 0, e;
}
function bt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return we === null ? de.memoizedState = we = e : we = we.next = e, we;
}
function lt() {
  if (xe === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = we === null ? de.memoizedState : we.next;
  if (t !== null) we = t, xe = e;
  else {
    if (e === null) throw Error(T(310));
    xe = e, e = { memoizedState: xe.memoizedState, baseState: xe.baseState, baseQueue: xe.baseQueue, queue: xe.queue, next: null }, we === null ? de.memoizedState = we = e : we = we.next = e;
  }
  return we;
}
function cs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function $a(e) {
  var t = lt(), n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = xe, s = r.baseQueue, o = n.pending;
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
      if ((Pn & d) === d) c !== null && (c = c.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        c === null ? (l = c = p, i = r) : c = c.next = p, de.lanes |= d, En |= d;
      }
      u = u.next;
    } while (u !== null && u !== o);
    c === null ? i = r : c.next = l, wt(r, t.memoizedState) || (We = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    s = e;
    do
      o = s.lane, de.lanes |= o, En |= o, s = s.next;
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Pa(e) {
  var t = lt(), n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, s = n.pending, o = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var i = s = s.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== s);
    wt(o, t.memoizedState) || (We = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function up() {
}
function dp(e, t) {
  var n = de, r = lt(), s = t(), o = !wt(r.memoizedState, s);
  if (o && (r.memoizedState = s, We = !0), r = r.queue, Nl(fp.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || we !== null && we.memoizedState.tag & 1) {
    if (n.flags |= 2048, us(9, hp.bind(null, n, r, s, t), void 0, null), ve === null) throw Error(T(349));
    Pn & 30 || pp(n, t, s);
  }
  return s;
}
function pp(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function hp(e, t, n, r) {
  t.value = n, t.getSnapshot = r, mp(t) && gp(e);
}
function fp(e, t, n) {
  return n(function() {
    mp(t) && gp(e);
  });
}
function mp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wt(e, n);
  } catch {
    return !0;
  }
}
function gp(e) {
  var t = Ot(e, 1);
  t !== null && yt(t, e, 1, -1);
}
function Wc(e) {
  var t = bt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cs, lastRenderedState: e }, t.queue = e, e = e.dispatch = og.bind(null, de, e), [t.memoizedState, e];
}
function us(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function xp() {
  return lt().memoizedState;
}
function Xs(e, t, n, r) {
  var s = bt();
  de.flags |= e, s.memoizedState = us(1 | t, n, void 0, r === void 0 ? null : r);
}
function Uo(e, t, n, r) {
  var s = lt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (xe !== null) {
    var i = xe.memoizedState;
    if (o = i.destroy, r !== null && kl(r, i.deps)) {
      s.memoizedState = us(t, n, o, r);
      return;
    }
  }
  de.flags |= e, s.memoizedState = us(1 | t, n, o, r);
}
function Vc(e, t) {
  return Xs(8390656, 8, e, t);
}
function Nl(e, t) {
  return Uo(2048, 8, e, t);
}
function yp(e, t) {
  return Uo(4, 2, e, t);
}
function wp(e, t) {
  return Uo(4, 4, e, t);
}
function vp(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function bp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Uo(4, 4, vp.bind(null, t, e), n);
}
function Cl() {
}
function kp(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Sp(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function jp(e, t, n) {
  return Pn & 21 ? (wt(n, t) || (n = Ed(), de.lanes |= n, En |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, We = !0), e.memoizedState = n);
}
function rg(e, t) {
  var n = X;
  X = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ca.transition;
  Ca.transition = {};
  try {
    e(!1), t();
  } finally {
    X = n, Ca.transition = r;
  }
}
function Np() {
  return lt().memoizedState;
}
function sg(e, t, n) {
  var r = rn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Cp(e)) $p(t, n);
  else if (n = ip(e, t, n, r), n !== null) {
    var s = _e();
    yt(n, e, r, s), Pp(n, t, r);
  }
}
function og(e, t, n) {
  var r = rn(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Cp(e)) $p(t, s);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, l = o(i, n);
      if (s.hasEagerState = !0, s.eagerState = l, wt(l, i)) {
        var c = t.interleaved;
        c === null ? (s.next = s, xl(t)) : (s.next = c.next, c.next = s), t.interleaved = s;
        return;
      }
    } catch {
    } finally {
    }
    n = ip(e, t, s, r), n !== null && (s = _e(), yt(n, e, r, s), Pp(n, t, r));
  }
}
function Cp(e) {
  var t = e.alternate;
  return e === de || t !== null && t === de;
}
function $p(e, t) {
  Ur = So = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Pp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, rl(e, n);
  }
}
var jo = { readContext: it, useCallback: Pe, useContext: Pe, useEffect: Pe, useImperativeHandle: Pe, useInsertionEffect: Pe, useLayoutEffect: Pe, useMemo: Pe, useReducer: Pe, useRef: Pe, useState: Pe, useDebugValue: Pe, useDeferredValue: Pe, useTransition: Pe, useMutableSource: Pe, useSyncExternalStore: Pe, useId: Pe, unstable_isNewReconciler: !1 }, ag = { readContext: it, useCallback: function(e, t) {
  return bt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: it, useEffect: Vc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Xs(
    4194308,
    4,
    vp.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Xs(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Xs(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = bt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = bt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = sg.bind(null, de, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = bt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Wc, useDebugValue: Cl, useDeferredValue: function(e) {
  return bt().memoizedState = e;
}, useTransition: function() {
  var e = Wc(!1), t = e[0];
  return e = rg.bind(null, e[1]), bt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = de, s = bt();
  if (ae) {
    if (n === void 0) throw Error(T(407));
    n = n();
  } else {
    if (n = t(), ve === null) throw Error(T(349));
    Pn & 30 || pp(r, t, n);
  }
  s.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return s.queue = o, Vc(fp.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, us(9, hp.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = bt(), t = ve.identifierPrefix;
  if (ae) {
    var n = zt, r = Mt;
    n = (r & ~(1 << 32 - xt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ls++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = ng++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, ig = {
  readContext: it,
  useCallback: kp,
  useContext: it,
  useEffect: Nl,
  useImperativeHandle: bp,
  useInsertionEffect: yp,
  useLayoutEffect: wp,
  useMemo: Sp,
  useReducer: $a,
  useRef: xp,
  useState: function() {
    return $a(cs);
  },
  useDebugValue: Cl,
  useDeferredValue: function(e) {
    var t = lt();
    return jp(t, xe.memoizedState, e);
  },
  useTransition: function() {
    var e = $a(cs)[0], t = lt().memoizedState;
    return [e, t];
  },
  useMutableSource: up,
  useSyncExternalStore: dp,
  useId: Np,
  unstable_isNewReconciler: !1
}, lg = { readContext: it, useCallback: kp, useContext: it, useEffect: Nl, useImperativeHandle: bp, useInsertionEffect: yp, useLayoutEffect: wp, useMemo: Sp, useReducer: Pa, useRef: xp, useState: function() {
  return Pa(cs);
}, useDebugValue: Cl, useDeferredValue: function(e) {
  var t = lt();
  return xe === null ? t.memoizedState = e : jp(t, xe.memoizedState, e);
}, useTransition: function() {
  var e = Pa(cs)[0], t = lt().memoizedState;
  return [e, t];
}, useMutableSource: up, useSyncExternalStore: dp, useId: Np, unstable_isNewReconciler: !1 };
function ht(e, t) {
  if (e && e.defaultProps) {
    t = pe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function xi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : pe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Wo = { isMounted: function(e) {
  return (e = e._reactInternals) ? Dn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = _e(), s = rn(e), o = Dt(r, s);
  o.payload = t, n != null && (o.callback = n), t = tn(e, o, s), t !== null && (yt(t, e, s, r), Zs(t, e, s));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = _e(), s = rn(e), o = Dt(r, s);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = tn(e, o, s), t !== null && (yt(t, e, s, r), Zs(t, e, s));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = _e(), r = rn(e), s = Dt(n, r);
  s.tag = 2, t != null && (s.callback = t), t = tn(e, s, r), t !== null && (yt(t, e, r, n), Zs(t, e, r));
} };
function qc(e, t, n, r, s, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !ns(n, r) || !ns(s, o) : !0;
}
function Ep(e, t, n) {
  var r = !1, s = ln, o = t.contextType;
  return typeof o == "object" && o !== null ? o = it(o) : (s = Ge(t) ? Cn : Ae.current, r = t.contextTypes, o = (r = r != null) ? ur(e, s) : ln), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Wo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Gc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Wo.enqueueReplaceState(t, t.state, null);
}
function yi(e, t, n, r) {
  var s = e.stateNode;
  s.props = n, s.state = e.memoizedState, s.refs = {}, yl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? s.context = it(o) : (o = Ge(t) ? Cn : Ae.current, s.context = ur(e, o)), s.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (xi(e, t, o, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && Wo.enqueueReplaceState(s, s.state, null), bo(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function fr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Lf(r), r = r.return;
    while (r);
    var s = n;
  } catch (o) {
    s = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Ea(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function wi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var cg = typeof WeakMap == "function" ? WeakMap : Map;
function Tp(e, t, n) {
  n = Dt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Co || (Co = !0, Ei = r), wi(e, t);
  }, n;
}
function Ip(e, t, n) {
  n = Dt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    n.payload = function() {
      return r(s);
    }, n.callback = function() {
      wi(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    wi(e, t), typeof r != "function" && (nn === null ? nn = /* @__PURE__ */ new Set([this]) : nn.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Kc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cg();
    var s = /* @__PURE__ */ new Set();
    r.set(t, s);
  } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
  s.has(n) || (s.add(n), e = Sg.bind(null, e, t, n), t.then(e, e));
}
function Yc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Zc(e, t, n, r, s) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dt(-1, 1), t.tag = 2, tn(n, t, 1))), n.lanes |= 1), e);
}
var ug = Ft.ReactCurrentOwner, We = !1;
function Le(e, t, n, r) {
  t.child = e === null ? ap(t, null, n, r) : pr(t, e.child, n, r);
}
function Qc(e, t, n, r, s) {
  n = n.render;
  var o = t.ref;
  return sr(t, s), r = Sl(e, t, n, r, o, s), n = jl(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, _t(e, t, s)) : (ae && n && dl(t), t.flags |= 1, Le(e, t, r, s), t.child);
}
function Xc(e, t, n, r, s) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !zl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ap(e, t, o, r, s)) : (e = no(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & s)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ns, n(i, r) && e.ref === t.ref) return _t(e, t, s);
  }
  return t.flags |= 1, e = sn(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ap(e, t, n, r, s) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ns(o, r) && e.ref === t.ref) if (We = !1, t.pendingProps = r = o, (e.lanes & s) !== 0) e.flags & 131072 && (We = !0);
    else return t.lanes = e.lanes, _t(e, t, s);
  }
  return vi(e, t, n, r, s);
}
function Mp(e, t, n) {
  var r = t.pendingProps, s = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ne(Qn, Ze), Ze |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ne(Qn, Ze), Ze |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, ne(Qn, Ze), Ze |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ne(Qn, Ze), Ze |= r;
  return Le(e, t, s, n), t.child;
}
function zp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function vi(e, t, n, r, s) {
  var o = Ge(n) ? Cn : Ae.current;
  return o = ur(t, o), sr(t, s), n = Sl(e, t, n, r, o, s), r = jl(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, _t(e, t, s)) : (ae && r && dl(t), t.flags |= 1, Le(e, t, n, s), t.child);
}
function Jc(e, t, n, r, s) {
  if (Ge(n)) {
    var o = !0;
    go(t);
  } else o = !1;
  if (sr(t, s), t.stateNode === null) Js(e, t), Ep(t, n, r), yi(t, n, r, s), r = !0;
  else if (e === null) {
    var i = t.stateNode, l = t.memoizedProps;
    i.props = l;
    var c = i.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = it(u) : (u = Ge(n) ? Cn : Ae.current, u = ur(t, u));
    var d = n.getDerivedStateFromProps, p = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== r || c !== u) && Gc(t, i, r, u), qt = !1;
    var f = t.memoizedState;
    i.state = f, bo(t, r, i, s), c = t.memoizedState, l !== r || f !== c || qe.current || qt ? (typeof d == "function" && (xi(t, n, d, r), c = t.memoizedState), (l = qt || qc(t, n, l, r, f, c, u)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = u, r = l) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, lp(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : ht(t.type, l), i.props = u, p = t.pendingProps, f = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = it(c) : (c = Ge(n) ? Cn : Ae.current, c = ur(t, c));
    var h = n.getDerivedStateFromProps;
    (d = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== p || f !== c) && Gc(t, i, r, c), qt = !1, f = t.memoizedState, i.state = f, bo(t, r, i, s);
    var x = t.memoizedState;
    l !== p || f !== x || qe.current || qt ? (typeof h == "function" && (xi(t, n, h, r), x = t.memoizedState), (u = qt || qc(t, n, u, r, f, x, c) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), i.props = r, i.state = x, i.context = c, r = u) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return bi(e, t, n, r, o, s);
}
function bi(e, t, n, r, s, o) {
  zp(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return s && Oc(t, n, !1), _t(e, t, o);
  r = t.stateNode, ug.current = t;
  var l = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = pr(t, e.child, null, o), t.child = pr(t, null, l, o)) : Le(e, t, l, o), t.memoizedState = r.state, s && Oc(t, n, !0), t.child;
}
function Dp(e) {
  var t = e.stateNode;
  t.pendingContext ? Rc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Rc(e, t.context, !1), wl(e, t.containerInfo);
}
function eu(e, t, n, r, s) {
  return dr(), hl(s), t.flags |= 256, Le(e, t, n, r), t.child;
}
var ki = { dehydrated: null, treeContext: null, retryLane: 0 };
function Si(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Lp(e, t, n) {
  var r = t.pendingProps, s = ce.current, o = !1, i = (t.flags & 128) !== 0, l;
  if ((l = i) || (l = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), ne(ce, s & 1), e === null)
    return mi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Go(i, r, 0, null), e = jn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Si(n), t.memoizedState = ki, e) : $l(t, i));
  if (s = e.memoizedState, s !== null && (l = s.dehydrated, l !== null)) return dg(e, t, i, r, l, s, n);
  if (o) {
    o = r.fallback, i = t.mode, s = e.child, l = s.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = sn(s, c), r.subtreeFlags = s.subtreeFlags & 14680064), l !== null ? o = sn(l, o) : (o = jn(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Si(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = ki, r;
  }
  return o = e.child, e = o.sibling, r = sn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function $l(e, t) {
  return t = Go({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Os(e, t, n, r) {
  return r !== null && hl(r), pr(t, e.child, null, n), e = $l(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function dg(e, t, n, r, s, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ea(Error(T(422))), Os(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, s = t.mode, r = Go({ mode: "visible", children: r.children }, s, 0, null), o = jn(o, s, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && pr(t, e.child, null, i), t.child.memoizedState = Si(i), t.memoizedState = ki, o);
  if (!(t.mode & 1)) return Os(e, t, i, null);
  if (s.data === "$!") {
    if (r = s.nextSibling && s.nextSibling.dataset, r) var l = r.dgst;
    return r = l, o = Error(T(419)), r = Ea(o, r, void 0), Os(e, t, i, r);
  }
  if (l = (i & e.childLanes) !== 0, We || l) {
    if (r = ve, r !== null) {
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
      s = s & (r.suspendedLanes | i) ? 0 : s, s !== 0 && s !== o.retryLane && (o.retryLane = s, Ot(e, s), yt(r, e, s, -1));
    }
    return Ml(), r = Ea(Error(T(421))), Os(e, t, i, r);
  }
  return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = jg.bind(null, e), s._reactRetry = t, null) : (e = o.treeContext, Qe = en(s.nextSibling), Je = t, ae = !0, mt = null, e !== null && (rt[st++] = Mt, rt[st++] = zt, rt[st++] = $n, Mt = e.id, zt = e.overflow, $n = t), t = $l(t, r.children), t.flags |= 4096, t);
}
function tu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), gi(e.return, t, n);
}
function Ta(e, t, n, r, s) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = s);
}
function Rp(e, t, n) {
  var r = t.pendingProps, s = r.revealOrder, o = r.tail;
  if (Le(e, t, r.children, n), r = ce.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && tu(e, n, t);
      else if (e.tag === 19) tu(e, n, t);
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
  if (ne(ce, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (s) {
    case "forwards":
      for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && ko(e) === null && (s = n), n = n.sibling;
      n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Ta(t, !1, s, n, o);
      break;
    case "backwards":
      for (n = null, s = t.child, t.child = null; s !== null; ) {
        if (e = s.alternate, e !== null && ko(e) === null) {
          t.child = s;
          break;
        }
        e = s.sibling, s.sibling = n, n = s, s = e;
      }
      Ta(t, !0, n, null, o);
      break;
    case "together":
      Ta(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Js(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function _t(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), En |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = sn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function pg(e, t, n) {
  switch (t.tag) {
    case 3:
      Dp(t), dr();
      break;
    case 5:
      cp(t);
      break;
    case 1:
      Ge(t.type) && go(t);
      break;
    case 4:
      wl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, s = t.memoizedProps.value;
      ne(wo, r._currentValue), r._currentValue = s;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ne(ce, ce.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Lp(e, t, n) : (ne(ce, ce.current & 1), e = _t(e, t, n), e !== null ? e.sibling : null);
      ne(ce, ce.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Rp(e, t, n);
        t.flags |= 128;
      }
      if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), ne(ce, ce.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Mp(e, t, n);
  }
  return _t(e, t, n);
}
var Op, ji, _p, Fp;
Op = function(e, t) {
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
ji = function() {
};
_p = function(e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    e = t.stateNode, bn(Ct.current);
    var o = null;
    switch (n) {
      case "input":
        s = qa(e, s), r = qa(e, r), o = [];
        break;
      case "select":
        s = pe({}, s, { value: void 0 }), r = pe({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        s = Ya(e, s), r = Ya(e, r), o = [];
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = fo);
    }
    Qa(n, r);
    var i;
    n = null;
    for (u in s) if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null) if (u === "style") {
      var l = s[u];
      for (i in l) l.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Yr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (l = s != null ? s[u] : void 0, r.hasOwnProperty(u) && c !== l && (c != null || l != null)) if (u === "style") if (l) {
        for (i in l) !l.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in c) c.hasOwnProperty(i) && l[i] !== c[i] && (n || (n = {}), n[i] = c[i]);
      } else n || (o || (o = []), o.push(
        u,
        n
      )), n = c;
      else u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, l = l ? l.__html : void 0, c != null && l !== c && (o = o || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Yr.hasOwnProperty(u) ? (c != null && u === "onScroll" && se("scroll", e), o || l === c || (o = [])) : (o = o || []).push(u, c));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Fp = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tr(e, t) {
  if (!ae) switch (e.tailMode) {
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
function Ee(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
  else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function hg(e, t, n) {
  var r = t.pendingProps;
  switch (pl(t), t.tag) {
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
      return Ee(t), null;
    case 1:
      return Ge(t.type) && mo(), Ee(t), null;
    case 3:
      return r = t.stateNode, hr(), oe(qe), oe(Ae), bl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ls(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, mt !== null && (Ai(mt), mt = null))), ji(e, t), Ee(t), null;
    case 5:
      vl(t);
      var s = bn(is.current);
      if (n = t.type, e !== null && t.stateNode != null) _p(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return Ee(t), null;
        }
        if (e = bn(Ct.current), Ls(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[St] = t, r[os] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < Rr.length; s++) se(Rr[s], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se(
                "error",
                r
              ), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              uc(r, o), se("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, se("invalid", r);
              break;
            case "textarea":
              pc(r, o), se("invalid", r);
          }
          Qa(n, o), s = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var l = o[i];
            i === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && Ds(r.textContent, l, e), s = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && Ds(
              r.textContent,
              l,
              e
            ), s = ["children", "" + l]) : Yr.hasOwnProperty(i) && l != null && i === "onScroll" && se("scroll", r);
          }
          switch (n) {
            case "input":
              $s(r), dc(r, o, !0);
              break;
            case "textarea":
              $s(r), hc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = fo);
          }
          r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = fd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[St] = t, e[os] = r, Op(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Xa(n, r), n) {
              case "dialog":
                se("cancel", e), se("close", e), s = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), s = r;
                break;
              case "video":
              case "audio":
                for (s = 0; s < Rr.length; s++) se(Rr[s], e);
                s = r;
                break;
              case "source":
                se("error", e), s = r;
                break;
              case "img":
              case "image":
              case "link":
                se(
                  "error",
                  e
                ), se("load", e), s = r;
                break;
              case "details":
                se("toggle", e), s = r;
                break;
              case "input":
                uc(e, r), s = qa(e, r), se("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, s = pe({}, r, { value: void 0 }), se("invalid", e);
                break;
              case "textarea":
                pc(e, r), s = Ya(e, r), se("invalid", e);
                break;
              default:
                s = r;
            }
            Qa(n, s), l = s;
            for (o in l) if (l.hasOwnProperty(o)) {
              var c = l[o];
              o === "style" ? xd(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && md(e, c)) : o === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Zr(e, c) : typeof c == "number" && Zr(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Yr.hasOwnProperty(o) ? c != null && o === "onScroll" && se("scroll", e) : c != null && Qi(e, o, c, i));
            }
            switch (n) {
              case "input":
                $s(e), dc(e, r, !1);
                break;
              case "textarea":
                $s(e), hc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + an(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? er(e, !!r.multiple, o, !1) : r.defaultValue != null && er(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = fo);
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
      return Ee(t), null;
    case 6:
      if (e && t.stateNode != null) Fp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (n = bn(is.current), bn(Ct.current), Ls(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[St] = t, (o = r.nodeValue !== n) && (e = Je, e !== null)) switch (e.tag) {
            case 3:
              Ds(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ds(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[St] = t, t.stateNode = r;
      }
      return Ee(t), null;
    case 13:
      if (oe(ce), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ae && Qe !== null && t.mode & 1 && !(t.flags & 128)) sp(), dr(), t.flags |= 98560, o = !1;
        else if (o = Ls(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(T(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(T(317));
            o[St] = t;
          } else dr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ee(t), o = !1;
        } else mt !== null && (Ai(mt), mt = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ce.current & 1 ? ye === 0 && (ye = 3) : Ml())), t.updateQueue !== null && (t.flags |= 4), Ee(t), null);
    case 4:
      return hr(), ji(e, t), e === null && rs(t.stateNode.containerInfo), Ee(t), null;
    case 10:
      return gl(t.type._context), Ee(t), null;
    case 17:
      return Ge(t.type) && mo(), Ee(t), null;
    case 19:
      if (oe(ce), o = t.memoizedState, o === null) return Ee(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Tr(o, !1);
      else {
        if (ye !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = ko(e), i !== null) {
            for (t.flags |= 128, Tr(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ne(ce, ce.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && me() > mr && (t.flags |= 128, r = !0, Tr(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ko(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Tr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !ae) return Ee(t), null;
        } else 2 * me() - o.renderingStartTime > mr && n !== 1073741824 && (t.flags |= 128, r = !0, Tr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = me(), t.sibling = null, n = ce.current, ne(ce, r ? n & 1 | 2 : n & 1), t) : (Ee(t), null);
    case 22:
    case 23:
      return Al(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ze & 1073741824 && (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ee(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function fg(e, t) {
  switch (pl(t), t.tag) {
    case 1:
      return Ge(t.type) && mo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return hr(), oe(qe), oe(Ae), bl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return vl(t), null;
    case 13:
      if (oe(ce), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(T(340));
        dr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return oe(ce), null;
    case 4:
      return hr(), null;
    case 10:
      return gl(t.type._context), null;
    case 22:
    case 23:
      return Al(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _s = !1, Ie = !1, mg = typeof WeakSet == "function" ? WeakSet : Set, R = null;
function Zn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    he(e, t, r);
  }
  else n.current = null;
}
function Ni(e, t, n) {
  try {
    n();
  } catch (r) {
    he(e, t, r);
  }
}
var nu = !1;
function gg(e, t) {
  if (li = uo, e = Vd(), ul(e)) {
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
        var i = 0, l = -1, c = -1, u = 0, d = 0, p = e, f = null;
        t: for (; ; ) {
          for (var h; p !== n || s !== 0 && p.nodeType !== 3 || (l = i + s), p !== o || r !== 0 && p.nodeType !== 3 || (c = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (h = p.firstChild) !== null; )
            f = p, p = h;
          for (; ; ) {
            if (p === e) break t;
            if (f === n && ++u === s && (l = i), f === o && ++d === r && (c = i), (h = p.nextSibling) !== null) break;
            p = f, f = p.parentNode;
          }
          p = h;
        }
        n = l === -1 || c === -1 ? null : { start: l, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ci = { focusedElem: e, selectionRange: n }, uo = !1, R = t; R !== null; ) if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e;
  else for (; R !== null; ) {
    t = R;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var j = x.memoizedProps, w = x.memoizedState, m = t.stateNode, g = m.getSnapshotBeforeUpdate(t.elementType === t.type ? j : ht(t.type, j), w);
            m.__reactInternalSnapshotBeforeUpdate = g;
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
          throw Error(T(163));
      }
    } catch (b) {
      he(t, t.return, b);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, R = e;
      break;
    }
    R = t.return;
  }
  return x = nu, nu = !1, x;
}
function Wr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var s = r = r.next;
    do {
      if ((s.tag & e) === e) {
        var o = s.destroy;
        s.destroy = void 0, o !== void 0 && Ni(t, n, o);
      }
      s = s.next;
    } while (s !== r);
  }
}
function Vo(e, t) {
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
function Ci(e) {
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
function Hp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Hp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[St], delete t[os], delete t[pi], delete t[Xm], delete t[Jm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Bp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ru(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Bp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function $i(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = fo));
  else if (r !== 4 && (e = e.child, e !== null)) for ($i(e, t, n), e = e.sibling; e !== null; ) $i(e, t, n), e = e.sibling;
}
function Pi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Pi(e, t, n), e = e.sibling; e !== null; ) Pi(e, t, n), e = e.sibling;
}
var Se = null, ft = !1;
function Bt(e, t, n) {
  for (n = n.child; n !== null; ) Up(e, t, n), n = n.sibling;
}
function Up(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function") try {
    Nt.onCommitFiberUnmount(Ro, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ie || Zn(n, t);
    case 6:
      var r = Se, s = ft;
      Se = null, Bt(e, t, n), Se = r, ft = s, Se !== null && (ft ? (e = Se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null && (ft ? (e = Se, n = n.stateNode, e.nodeType === 8 ? Sa(e.parentNode, n) : e.nodeType === 1 && Sa(e, n), es(e)) : Sa(Se, n.stateNode));
      break;
    case 4:
      r = Se, s = ft, Se = n.stateNode.containerInfo, ft = !0, Bt(e, t, n), Se = r, ft = s;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        s = r = r.next;
        do {
          var o = s, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Ni(n, t, i), s = s.next;
        } while (s !== r);
      }
      Bt(e, t, n);
      break;
    case 1:
      if (!Ie && (Zn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        he(n, t, l);
      }
      Bt(e, t, n);
      break;
    case 21:
      Bt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ie = (r = Ie) || n.memoizedState !== null, Bt(e, t, n), Ie = r) : Bt(e, t, n);
      break;
    default:
      Bt(e, t, n);
  }
}
function su(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mg()), t.forEach(function(r) {
      var s = Ng.bind(null, e, r);
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
            Se = l.stateNode, ft = !1;
            break e;
          case 3:
            Se = l.stateNode.containerInfo, ft = !0;
            break e;
          case 4:
            Se = l.stateNode.containerInfo, ft = !0;
            break e;
        }
        l = l.return;
      }
      if (Se === null) throw Error(T(160));
      Up(o, i, s), Se = null, ft = !1;
      var c = s.alternate;
      c !== null && (c.return = null), s.return = null;
    } catch (u) {
      he(s, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Wp(t, e), t = t.sibling;
}
function Wp(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (dt(t, e), vt(e), r & 4) {
        try {
          Wr(3, e, e.return), Vo(3, e);
        } catch (j) {
          he(e, e.return, j);
        }
        try {
          Wr(5, e, e.return);
        } catch (j) {
          he(e, e.return, j);
        }
      }
      break;
    case 1:
      dt(t, e), vt(e), r & 512 && n !== null && Zn(n, n.return);
      break;
    case 5:
      if (dt(t, e), vt(e), r & 512 && n !== null && Zn(n, n.return), e.flags & 32) {
        var s = e.stateNode;
        try {
          Zr(s, "");
        } catch (j) {
          he(e, e.return, j);
        }
      }
      if (r & 4 && (s = e.stateNode, s != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, l = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          l === "input" && o.type === "radio" && o.name != null && pd(s, o), Xa(l, i);
          var u = Xa(l, o);
          for (i = 0; i < c.length; i += 2) {
            var d = c[i], p = c[i + 1];
            d === "style" ? xd(s, p) : d === "dangerouslySetInnerHTML" ? md(s, p) : d === "children" ? Zr(s, p) : Qi(s, d, p, u);
          }
          switch (l) {
            case "input":
              Ga(s, o);
              break;
            case "textarea":
              hd(s, o);
              break;
            case "select":
              var f = s._wrapperState.wasMultiple;
              s._wrapperState.wasMultiple = !!o.multiple;
              var h = o.value;
              h != null ? er(s, !!o.multiple, h, !1) : f !== !!o.multiple && (o.defaultValue != null ? er(
                s,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : er(s, !!o.multiple, o.multiple ? [] : "", !1));
          }
          s[os] = o;
        } catch (j) {
          he(e, e.return, j);
        }
      }
      break;
    case 6:
      if (dt(t, e), vt(e), r & 4) {
        if (e.stateNode === null) throw Error(T(162));
        s = e.stateNode, o = e.memoizedProps;
        try {
          s.nodeValue = o;
        } catch (j) {
          he(e, e.return, j);
        }
      }
      break;
    case 3:
      if (dt(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        es(t.containerInfo);
      } catch (j) {
        he(e, e.return, j);
      }
      break;
    case 4:
      dt(t, e), vt(e);
      break;
    case 13:
      dt(t, e), vt(e), s = e.child, s.flags & 8192 && (o = s.memoizedState !== null, s.stateNode.isHidden = o, !o || s.alternate !== null && s.alternate.memoizedState !== null || (Tl = me())), r & 4 && su(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ie = (u = Ie) || d, dt(t, e), Ie = u) : dt(t, e), vt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (R = e, d = e.child; d !== null; ) {
          for (p = R = d; R !== null; ) {
            switch (f = R, h = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Wr(4, f, f.return);
                break;
              case 1:
                Zn(f, f.return);
                var x = f.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (j) {
                    he(r, n, j);
                  }
                }
                break;
              case 5:
                Zn(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  au(p);
                  continue;
                }
            }
            h !== null ? (h.return = f, R = h) : au(p);
          }
          d = d.sibling;
        }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                s = p.stateNode, u ? (o = s.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = p.stateNode, c = p.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, l.style.display = gd("display", i));
              } catch (j) {
                he(e, e.return, j);
              }
            }
          } else if (p.tag === 6) {
            if (d === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (j) {
              he(e, e.return, j);
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
      dt(t, e), vt(e), r & 4 && su(e);
      break;
    case 21:
      break;
    default:
      dt(
        t,
        e
      ), vt(e);
  }
}
function vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Bp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Zr(s, ""), r.flags &= -33);
          var o = ru(e);
          Pi(e, o, s);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, l = ru(e);
          $i(e, l, i);
          break;
        default:
          throw Error(T(161));
      }
    } catch (c) {
      he(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xg(e, t, n) {
  R = e, Vp(e);
}
function Vp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var s = R, o = s.child;
    if (s.tag === 22 && r) {
      var i = s.memoizedState !== null || _s;
      if (!i) {
        var l = s.alternate, c = l !== null && l.memoizedState !== null || Ie;
        l = _s;
        var u = Ie;
        if (_s = i, (Ie = c) && !u) for (R = s; R !== null; ) i = R, c = i.child, i.tag === 22 && i.memoizedState !== null ? iu(s) : c !== null ? (c.return = i, R = c) : iu(s);
        for (; o !== null; ) R = o, Vp(o), o = o.sibling;
        R = s, _s = l, Ie = u;
      }
      ou(e);
    } else s.subtreeFlags & 8772 && o !== null ? (o.return = s, R = o) : ou(e);
  }
}
function ou(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ie || Vo(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ie) if (n === null) r.componentDidMount();
            else {
              var s = t.elementType === t.type ? n.memoizedProps : ht(t.type, n.memoizedProps);
              r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Uc(t, o, r);
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
              Uc(t, i, n);
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
                  p !== null && es(p);
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
            throw Error(T(163));
        }
        Ie || t.flags & 512 && Ci(t);
      } catch (f) {
        he(t, t.return, f);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function au(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function iu(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Vo(4, t);
          } catch (c) {
            he(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              he(t, s, c);
            }
          }
          var o = t.return;
          try {
            Ci(t);
          } catch (c) {
            he(t, o, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ci(t);
          } catch (c) {
            he(t, i, c);
          }
      }
    } catch (c) {
      he(t, t.return, c);
    }
    if (t === e) {
      R = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, R = l;
      break;
    }
    R = t.return;
  }
}
var yg = Math.ceil, No = Ft.ReactCurrentDispatcher, Pl = Ft.ReactCurrentOwner, at = Ft.ReactCurrentBatchConfig, Z = 0, ve = null, ge = null, Ne = 0, Ze = 0, Qn = dn(0), ye = 0, ds = null, En = 0, qo = 0, El = 0, Vr = null, Ue = null, Tl = 0, mr = 1 / 0, Tt = null, Co = !1, Ei = null, nn = null, Fs = !1, Zt = null, $o = 0, qr = 0, Ti = null, eo = -1, to = 0;
function _e() {
  return Z & 6 ? me() : eo !== -1 ? eo : eo = me();
}
function rn(e) {
  return e.mode & 1 ? Z & 2 && Ne !== 0 ? Ne & -Ne : tg.transition !== null ? (to === 0 && (to = Ed()), to) : (e = X, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ld(e.type)), e) : 1;
}
function yt(e, t, n, r) {
  if (50 < qr) throw qr = 0, Ti = null, Error(T(185));
  ys(e, n, r), (!(Z & 2) || e !== ve) && (e === ve && (!(Z & 2) && (qo |= n), ye === 4 && Kt(e, Ne)), Ke(e, r), n === 1 && Z === 0 && !(t.mode & 1) && (mr = me() + 500, Bo && pn()));
}
function Ke(e, t) {
  var n = e.callbackNode;
  tm(e, t);
  var r = co(e, e === ve ? Ne : 0);
  if (r === 0) n !== null && gc(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && gc(n), t === 1) e.tag === 0 ? eg(lu.bind(null, e)) : tp(lu.bind(null, e)), Zm(function() {
      !(Z & 6) && pn();
    }), n = null;
    else {
      switch (Td(r)) {
        case 1:
          n = nl;
          break;
        case 4:
          n = $d;
          break;
        case 16:
          n = lo;
          break;
        case 536870912:
          n = Pd;
          break;
        default:
          n = lo;
      }
      n = Jp(n, qp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function qp(e, t) {
  if (eo = -1, to = 0, Z & 6) throw Error(T(327));
  var n = e.callbackNode;
  if (or() && e.callbackNode !== n) return null;
  var r = co(e, e === ve ? Ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Po(e, r);
  else {
    t = r;
    var s = Z;
    Z |= 2;
    var o = Kp();
    (ve !== e || Ne !== t) && (Tt = null, mr = me() + 500, Sn(e, t));
    do
      try {
        bg();
        break;
      } catch (l) {
        Gp(e, l);
      }
    while (!0);
    ml(), No.current = o, Z = s, ge !== null ? t = 0 : (ve = null, Ne = 0, t = ye);
  }
  if (t !== 0) {
    if (t === 2 && (s = ri(e), s !== 0 && (r = s, t = Ii(e, s))), t === 1) throw n = ds, Sn(e, 0), Kt(e, r), Ke(e, me()), n;
    if (t === 6) Kt(e, r);
    else {
      if (s = e.current.alternate, !(r & 30) && !wg(s) && (t = Po(e, r), t === 2 && (o = ri(e), o !== 0 && (r = o, t = Ii(e, o))), t === 1)) throw n = ds, Sn(e, 0), Kt(e, r), Ke(e, me()), n;
      switch (e.finishedWork = s, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          yn(e, Ue, Tt);
          break;
        case 3:
          if (Kt(e, r), (r & 130023424) === r && (t = Tl + 500 - me(), 10 < t)) {
            if (co(e, 0) !== 0) break;
            if (s = e.suspendedLanes, (s & r) !== r) {
              _e(), e.pingedLanes |= e.suspendedLanes & s;
              break;
            }
            e.timeoutHandle = di(yn.bind(null, e, Ue, Tt), t);
            break;
          }
          yn(e, Ue, Tt);
          break;
        case 4:
          if (Kt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var i = 31 - xt(r);
            o = 1 << i, i = t[i], i > s && (s = i), r &= ~o;
          }
          if (r = s, r = me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yg(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = di(yn.bind(null, e, Ue, Tt), r);
            break;
          }
          yn(e, Ue, Tt);
          break;
        case 5:
          yn(e, Ue, Tt);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return Ke(e, me()), e.callbackNode === n ? qp.bind(null, e) : null;
}
function Ii(e, t) {
  var n = Vr;
  return e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256), e = Po(e, t), e !== 2 && (t = Ue, Ue = n, t !== null && Ai(t)), e;
}
function Ai(e) {
  Ue === null ? Ue = e : Ue.push.apply(Ue, e);
}
function wg(e) {
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
function Kt(e, t) {
  for (t &= ~El, t &= ~qo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - xt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function lu(e) {
  if (Z & 6) throw Error(T(327));
  or();
  var t = co(e, 0);
  if (!(t & 1)) return Ke(e, me()), null;
  var n = Po(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ri(e);
    r !== 0 && (t = r, n = Ii(e, r));
  }
  if (n === 1) throw n = ds, Sn(e, 0), Kt(e, t), Ke(e, me()), n;
  if (n === 6) throw Error(T(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, yn(e, Ue, Tt), Ke(e, me()), null;
}
function Il(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    Z = n, Z === 0 && (mr = me() + 500, Bo && pn());
  }
}
function Tn(e) {
  Zt !== null && Zt.tag === 0 && !(Z & 6) && or();
  var t = Z;
  Z |= 1;
  var n = at.transition, r = X;
  try {
    if (at.transition = null, X = 1, e) return e();
  } finally {
    X = r, at.transition = n, Z = t, !(Z & 6) && pn();
  }
}
function Al() {
  Ze = Qn.current, oe(Qn);
}
function Sn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Ym(n)), ge !== null) for (n = ge.return; n !== null; ) {
    var r = n;
    switch (pl(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && mo();
        break;
      case 3:
        hr(), oe(qe), oe(Ae), bl();
        break;
      case 5:
        vl(r);
        break;
      case 4:
        hr();
        break;
      case 13:
        oe(ce);
        break;
      case 19:
        oe(ce);
        break;
      case 10:
        gl(r.type._context);
        break;
      case 22:
      case 23:
        Al();
    }
    n = n.return;
  }
  if (ve = e, ge = e = sn(e.current, null), Ne = Ze = t, ye = 0, ds = null, El = qo = En = 0, Ue = Vr = null, vn !== null) {
    for (t = 0; t < vn.length; t++) if (n = vn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var s = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = s, r.next = i;
      }
      n.pending = r;
    }
    vn = null;
  }
  return e;
}
function Gp(e, t) {
  do {
    var n = ge;
    try {
      if (ml(), Qs.current = jo, So) {
        for (var r = de.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), r = r.next;
        }
        So = !1;
      }
      if (Pn = 0, we = xe = de = null, Ur = !1, ls = 0, Pl.current = null, n === null || n.return === null) {
        ye = 1, ds = t, ge = null;
        break;
      }
      e: {
        var o = e, i = n.return, l = n, c = t;
        if (t = Ne, l.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var u = c, d = l, p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = d.alternate;
            f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var h = Yc(i);
          if (h !== null) {
            h.flags &= -257, Zc(h, i, l, o, t), h.mode & 1 && Kc(o, u, t), t = h, c = u;
            var x = t.updateQueue;
            if (x === null) {
              var j = /* @__PURE__ */ new Set();
              j.add(c), t.updateQueue = j;
            } else x.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Kc(o, u, t), Ml();
              break e;
            }
            c = Error(T(426));
          }
        } else if (ae && l.mode & 1) {
          var w = Yc(i);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), Zc(w, i, l, o, t), hl(fr(c, l));
            break e;
          }
        }
        o = c = fr(c, l), ye !== 4 && (ye = 2), Vr === null ? Vr = [o] : Vr.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var m = Tp(o, c, t);
              Bc(o, m);
              break e;
            case 1:
              l = c;
              var g = o.type, v = o.stateNode;
              if (!(o.flags & 128) && (typeof g.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (nn === null || !nn.has(v)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var b = Ip(o, l, t);
                Bc(o, b);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Zp(n);
    } catch ($) {
      t = $, ge === n && n !== null && (ge = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Kp() {
  var e = No.current;
  return No.current = jo, e === null ? jo : e;
}
function Ml() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4), ve === null || !(En & 268435455) && !(qo & 268435455) || Kt(ve, Ne);
}
function Po(e, t) {
  var n = Z;
  Z |= 2;
  var r = Kp();
  (ve !== e || Ne !== t) && (Tt = null, Sn(e, t));
  do
    try {
      vg();
      break;
    } catch (s) {
      Gp(e, s);
    }
  while (!0);
  if (ml(), Z = n, No.current = r, ge !== null) throw Error(T(261));
  return ve = null, Ne = 0, ye;
}
function vg() {
  for (; ge !== null; ) Yp(ge);
}
function bg() {
  for (; ge !== null && !qf(); ) Yp(ge);
}
function Yp(e) {
  var t = Xp(e.alternate, e, Ze);
  e.memoizedProps = e.pendingProps, t === null ? Zp(e) : ge = t, Pl.current = null;
}
function Zp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = fg(n, t), n !== null) {
        n.flags &= 32767, ge = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ye = 6, ge = null;
        return;
      }
    } else if (n = hg(n, t, Ze), n !== null) {
      ge = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ge = t;
      return;
    }
    ge = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function yn(e, t, n) {
  var r = X, s = at.transition;
  try {
    at.transition = null, X = 1, kg(e, t, n, r);
  } finally {
    at.transition = s, X = r;
  }
  return null;
}
function kg(e, t, n, r) {
  do
    or();
  while (Zt !== null);
  if (Z & 6) throw Error(T(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(T(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (nm(e, o), e === ve && (ge = ve = null, Ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Fs || (Fs = !0, Jp(lo, function() {
    return or(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = at.transition, at.transition = null;
    var i = X;
    X = 1;
    var l = Z;
    Z |= 4, Pl.current = null, gg(e, n), Wp(n, e), Bm(ci), uo = !!li, ci = li = null, e.current = n, xg(n), Gf(), Z = l, X = i, at.transition = o;
  } else e.current = n;
  if (Fs && (Fs = !1, Zt = e, $o = s), o = e.pendingLanes, o === 0 && (nn = null), Zf(n.stateNode), Ke(e, me()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
  if (Co) throw Co = !1, e = Ei, Ei = null, e;
  return $o & 1 && e.tag !== 0 && or(), o = e.pendingLanes, o & 1 ? e === Ti ? qr++ : (qr = 0, Ti = e) : qr = 0, pn(), null;
}
function or() {
  if (Zt !== null) {
    var e = Td($o), t = at.transition, n = X;
    try {
      if (at.transition = null, X = 16 > e ? 16 : e, Zt === null) var r = !1;
      else {
        if (e = Zt, Zt = null, $o = 0, Z & 6) throw Error(T(331));
        var s = Z;
        for (Z |= 4, R = e.current; R !== null; ) {
          var o = R, i = o.child;
          if (R.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var c = 0; c < l.length; c++) {
                var u = l[c];
                for (R = u; R !== null; ) {
                  var d = R;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wr(8, d, o);
                  }
                  var p = d.child;
                  if (p !== null) p.return = d, R = p;
                  else for (; R !== null; ) {
                    d = R;
                    var f = d.sibling, h = d.return;
                    if (Hp(d), d === u) {
                      R = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = h, R = f;
                      break;
                    }
                    R = h;
                  }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var j = x.child;
                if (j !== null) {
                  x.child = null;
                  do {
                    var w = j.sibling;
                    j.sibling = null, j = w;
                  } while (j !== null);
                }
              }
              R = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, R = i;
          else e: for (; R !== null; ) {
            if (o = R, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Wr(9, o, o.return);
            }
            var m = o.sibling;
            if (m !== null) {
              m.return = o.return, R = m;
              break e;
            }
            R = o.return;
          }
        }
        var g = e.current;
        for (R = g; R !== null; ) {
          i = R;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) v.return = i, R = v;
          else e: for (i = g; R !== null; ) {
            if (l = R, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Vo(9, l);
              }
            } catch ($) {
              he(l, l.return, $);
            }
            if (l === i) {
              R = null;
              break e;
            }
            var b = l.sibling;
            if (b !== null) {
              b.return = l.return, R = b;
              break e;
            }
            R = l.return;
          }
        }
        if (Z = s, pn(), Nt && typeof Nt.onPostCommitFiberRoot == "function") try {
          Nt.onPostCommitFiberRoot(Ro, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      X = n, at.transition = t;
    }
  }
  return !1;
}
function cu(e, t, n) {
  t = fr(n, t), t = Tp(e, t, 1), e = tn(e, t, 1), t = _e(), e !== null && (ys(e, 1, t), Ke(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) cu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      cu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nn === null || !nn.has(r))) {
        e = fr(n, e), e = Ip(t, e, 1), t = tn(t, e, 1), e = _e(), t !== null && (ys(t, 1, e), Ke(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Sg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = _e(), e.pingedLanes |= e.suspendedLanes & n, ve === e && (Ne & n) === n && (ye === 4 || ye === 3 && (Ne & 130023424) === Ne && 500 > me() - Tl ? Sn(e, 0) : El |= n), Ke(e, t);
}
function Qp(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ts, Ts <<= 1, !(Ts & 130023424) && (Ts = 4194304)) : t = 1);
  var n = _e();
  e = Ot(e, t), e !== null && (ys(e, t, n), Ke(e, n));
}
function jg(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Qp(e, n);
}
function Ng(e, t) {
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
      throw Error(T(314));
  }
  r !== null && r.delete(t), Qp(e, n);
}
var Xp;
Xp = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || qe.current) We = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return We = !1, pg(e, t, n);
    We = !!(e.flags & 131072);
  }
  else We = !1, ae && t.flags & 1048576 && np(t, yo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Js(e, t), e = t.pendingProps;
      var s = ur(t, Ae.current);
      sr(t, n), s = Sl(null, t, r, e, s, n);
      var o = jl();
      return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ge(r) ? (o = !0, go(t)) : o = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, yl(t), s.updater = Wo, t.stateNode = s, s._reactInternals = t, yi(t, r, e, n), t = bi(null, t, r, !0, o, n)) : (t.tag = 0, ae && o && dl(t), Le(null, t, s, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Js(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = $g(r), e = ht(r, e), s) {
          case 0:
            t = vi(null, t, r, e, n);
            break e;
          case 1:
            t = Jc(null, t, r, e, n);
            break e;
          case 11:
            t = Qc(null, t, r, e, n);
            break e;
          case 14:
            t = Xc(null, t, r, ht(r.type, e), n);
            break e;
        }
        throw Error(T(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : ht(r, s), vi(e, t, r, s, n);
    case 1:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : ht(r, s), Jc(e, t, r, s, n);
    case 3:
      e: {
        if (Dp(t), e === null) throw Error(T(387));
        r = t.pendingProps, o = t.memoizedState, s = o.element, lp(e, t), bo(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          s = fr(Error(T(423)), t), t = eu(e, t, r, n, s);
          break e;
        } else if (r !== s) {
          s = fr(Error(T(424)), t), t = eu(e, t, r, n, s);
          break e;
        } else for (Qe = en(t.stateNode.containerInfo.firstChild), Je = t, ae = !0, mt = null, n = ap(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (dr(), r === s) {
            t = _t(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return cp(t), e === null && mi(t), r = t.type, s = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = s.children, ui(r, s) ? i = null : o !== null && ui(r, o) && (t.flags |= 32), zp(e, t), Le(e, t, i, n), t.child;
    case 6:
      return e === null && mi(t), null;
    case 13:
      return Lp(e, t, n);
    case 4:
      return wl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pr(t, null, r, n) : Le(e, t, r, n), t.child;
    case 11:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : ht(r, s), Qc(e, t, r, s, n);
    case 7:
      return Le(e, t, t.pendingProps, n), t.child;
    case 8:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, s = t.pendingProps, o = t.memoizedProps, i = s.value, ne(wo, r._currentValue), r._currentValue = i, o !== null) if (wt(o.value, i)) {
          if (o.children === s.children && !qe.current) {
            t = _t(e, t, n);
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
                o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), gi(
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
            if (i = o.return, i === null) throw Error(T(341));
            i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), gi(i, n, t), i = o.sibling;
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
        Le(e, t, s.children, n), t = t.child;
      }
      return t;
    case 9:
      return s = t.type, r = t.pendingProps.children, sr(t, n), s = it(s), r = r(s), t.flags |= 1, Le(e, t, r, n), t.child;
    case 14:
      return r = t.type, s = ht(r, t.pendingProps), s = ht(r.type, s), Xc(e, t, r, s, n);
    case 15:
      return Ap(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : ht(r, s), Js(e, t), t.tag = 1, Ge(r) ? (e = !0, go(t)) : e = !1, sr(t, n), Ep(t, r, s), yi(t, r, s, n), bi(null, t, r, !0, e, n);
    case 19:
      return Rp(e, t, n);
    case 22:
      return Mp(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Jp(e, t) {
  return Cd(e, t);
}
function Cg(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ot(e, t, n, r) {
  return new Cg(e, t, n, r);
}
function zl(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function $g(e) {
  if (typeof e == "function") return zl(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ji) return 11;
    if (e === el) return 14;
  }
  return 2;
}
function sn(e, t) {
  var n = e.alternate;
  return n === null ? (n = ot(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function no(e, t, n, r, s, o) {
  var i = 2;
  if (r = e, typeof e == "function") zl(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Hn:
      return jn(n.children, s, o, t);
    case Xi:
      i = 8, s |= 8;
      break;
    case Ba:
      return e = ot(12, n, t, s | 2), e.elementType = Ba, e.lanes = o, e;
    case Ua:
      return e = ot(13, n, t, s), e.elementType = Ua, e.lanes = o, e;
    case Wa:
      return e = ot(19, n, t, s), e.elementType = Wa, e.lanes = o, e;
    case cd:
      return Go(n, s, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case id:
          i = 10;
          break e;
        case ld:
          i = 9;
          break e;
        case Ji:
          i = 11;
          break e;
        case el:
          i = 14;
          break e;
        case Vt:
          i = 16, r = null;
          break e;
      }
      throw Error(T(130, e == null ? e : typeof e, ""));
  }
  return t = ot(i, n, t, s), t.elementType = e, t.type = r, t.lanes = o, t;
}
function jn(e, t, n, r) {
  return e = ot(7, e, r, t), e.lanes = n, e;
}
function Go(e, t, n, r) {
  return e = ot(22, e, r, t), e.elementType = cd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ia(e, t, n) {
  return e = ot(6, e, null, t), e.lanes = n, e;
}
function Aa(e, t, n) {
  return t = ot(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Pg(e, t, n, r, s) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = pa(0), this.expirationTimes = pa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pa(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
}
function Dl(e, t, n, r, s, o, i, l, c) {
  return e = new Pg(e, t, n, l, c), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ot(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, yl(o), e;
}
function Eg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Fn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function eh(e) {
  if (!e) return ln;
  e = e._reactInternals;
  e: {
    if (Dn(e) !== e || e.tag !== 1) throw Error(T(170));
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
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ge(n)) return ep(e, n, t);
  }
  return t;
}
function th(e, t, n, r, s, o, i, l, c) {
  return e = Dl(n, r, !0, e, s, o, i, l, c), e.context = eh(null), n = e.current, r = _e(), s = rn(n), o = Dt(r, s), o.callback = t ?? null, tn(n, o, s), e.current.lanes = s, ys(e, s, r), Ke(e, r), e;
}
function Ko(e, t, n, r) {
  var s = t.current, o = _e(), i = rn(s);
  return n = eh(n), t.context === null ? t.context = n : t.pendingContext = n, t = Dt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = tn(s, t, i), e !== null && (yt(e, s, i, o), Zs(e, s, i)), i;
}
function Eo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function uu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ll(e, t) {
  uu(e, t), (e = e.alternate) && uu(e, t);
}
function Tg() {
  return null;
}
var nh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Rl(e) {
  this._internalRoot = e;
}
Yo.prototype.render = Rl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Ko(e, t, null, null);
};
Yo.prototype.unmount = Rl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tn(function() {
      Ko(null, e, null, null);
    }), t[Rt] = null;
  }
};
function Yo(e) {
  this._internalRoot = e;
}
Yo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Md();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Gt.length && t !== 0 && t < Gt[n].priority; n++) ;
    Gt.splice(n, 0, e), n === 0 && Dd(e);
  }
};
function Ol(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Zo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function du() {
}
function Ig(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = Eo(i);
        o.call(u);
      };
    }
    var i = th(t, r, e, 0, null, !1, !1, "", du);
    return e._reactRootContainer = i, e[Rt] = i.current, rs(e.nodeType === 8 ? e.parentNode : e), Tn(), i;
  }
  for (; s = e.lastChild; ) e.removeChild(s);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = Eo(c);
      l.call(u);
    };
  }
  var c = Dl(e, 0, !1, null, null, !1, !1, "", du);
  return e._reactRootContainer = c, e[Rt] = c.current, rs(e.nodeType === 8 ? e.parentNode : e), Tn(function() {
    Ko(t, c, n, r);
  }), c;
}
function Qo(e, t, n, r, s) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof s == "function") {
      var l = s;
      s = function() {
        var c = Eo(i);
        l.call(c);
      };
    }
    Ko(t, i, e, s);
  } else i = Ig(n, t, e, s, r);
  return Eo(i);
}
Id = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Lr(t.pendingLanes);
        n !== 0 && (rl(t, n | 1), Ke(t, me()), !(Z & 6) && (mr = me() + 500, pn()));
      }
      break;
    case 13:
      Tn(function() {
        var r = Ot(e, 1);
        if (r !== null) {
          var s = _e();
          yt(r, e, 1, s);
        }
      }), Ll(e, 1);
  }
};
sl = function(e) {
  if (e.tag === 13) {
    var t = Ot(e, 134217728);
    if (t !== null) {
      var n = _e();
      yt(t, e, 134217728, n);
    }
    Ll(e, 134217728);
  }
};
Ad = function(e) {
  if (e.tag === 13) {
    var t = rn(e), n = Ot(e, t);
    if (n !== null) {
      var r = _e();
      yt(n, e, t, r);
    }
    Ll(e, t);
  }
};
Md = function() {
  return X;
};
zd = function(e, t) {
  var n = X;
  try {
    return X = e, t();
  } finally {
    X = n;
  }
};
ei = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ga(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Ho(r);
            if (!s) throw Error(T(90));
            dd(r), Ga(r, s);
          }
        }
      }
      break;
    case "textarea":
      hd(e, n);
      break;
    case "select":
      t = n.value, t != null && er(e, !!n.multiple, t, !1);
  }
};
vd = Il;
bd = Tn;
var Ag = { usingClientEntryPoint: !1, Events: [vs, Vn, Ho, yd, wd, Il] }, Ir = { findFiberByHostInstance: wn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Mg = { bundleType: Ir.bundleType, version: Ir.version, rendererPackageName: Ir.rendererPackageName, rendererConfig: Ir.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ft.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = jd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ir.findFiberByHostInstance || Tg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hs.isDisabled && Hs.supportsFiber) try {
    Ro = Hs.inject(Mg), Nt = Hs;
  } catch {
  }
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ag;
tt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ol(t)) throw Error(T(200));
  return Eg(e, t, null, n);
};
tt.createRoot = function(e, t) {
  if (!Ol(e)) throw Error(T(299));
  var n = !1, r = "", s = nh;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Dl(e, 1, !1, null, null, n, !1, r, s), e[Rt] = t.current, rs(e.nodeType === 8 ? e.parentNode : e), new Rl(t);
};
tt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","), Error(T(268, e)));
  return e = jd(t), e = e === null ? null : e.stateNode, e;
};
tt.flushSync = function(e) {
  return Tn(e);
};
tt.hydrate = function(e, t, n) {
  if (!Zo(t)) throw Error(T(200));
  return Qo(null, e, t, !0, n);
};
tt.hydrateRoot = function(e, t, n) {
  if (!Ol(e)) throw Error(T(405));
  var r = n != null && n.hydratedSources || null, s = !1, o = "", i = nh;
  if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = th(t, null, e, 1, n ?? null, s, !1, o, i), e[Rt] = t.current, rs(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
    n,
    s
  );
  return new Yo(t);
};
tt.render = function(e, t, n) {
  if (!Zo(t)) throw Error(T(200));
  return Qo(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function(e) {
  if (!Zo(e)) throw Error(T(40));
  return e._reactRootContainer ? (Tn(function() {
    Qo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Rt] = null;
    });
  }), !0) : !1;
};
tt.unstable_batchedUpdates = Il;
tt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Zo(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return Qo(e, t, n, !1, r);
};
tt.version = "18.3.1-next-f1338f8080-20240426";
function rh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rh);
    } catch (e) {
      console.error(e);
    }
}
rh(), rd.exports = tt;
var zg = rd.exports, sh, pu = zg;
sh = pu.createRoot, pu.hydrateRoot;
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), oh = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Lg = {
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
const Rg = P.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: o,
    iconNode: i,
    ...l
  }, c) => P.createElement(
    "svg",
    {
      ref: c,
      ...Lg,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: oh("lucide", s),
      ...l
    },
    [
      ...i.map(([u, d]) => P.createElement(u, d)),
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
    ({ className: r, ...s }, o) => P.createElement(Rg, {
      ref: o,
      iconNode: t,
      className: oh(`lucide-${Dg(e)}`, r),
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
const Og = M("Antenna", [
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
const ah = M("ArrowDownToLine", [
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
const ih = M("ArrowUpFromLine", [
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
const _g = M("BookMarked", [
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
const To = M("BoxSelect", [
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
const lh = M("Box", [
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
const Fg = M("Building2", [
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
const Hg = M("Cable", [
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
const ch = M("Calculator", [
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
const Bg = M("Camera", [
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
const uh = M("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dh = M("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ug = M("ChevronsDown", [
  ["path", { d: "m7 6 5 5 5-5", key: "1lc07p" }],
  ["path", { d: "m7 13 5 5 5-5", key: "1d48rs" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wg = M("ChevronsUp", [
  ["path", { d: "m17 11-5-5-5 5", key: "e8nh98" }],
  ["path", { d: "m17 18-5-5-5 5", key: "2avn1x" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ln = M("CircleAlert", [
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
const br = M("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ph = M("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hh = M("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vg = M("Cloud", [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _l = M("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = M("Crosshair", [
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
const qg = M("Database", [
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
const Fl = M("Download", [
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
const Gg = M("Earth", [
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
const Kg = M("Eraser", [
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
const fh = M("FastForward", [
  ["polygon", { points: "13 19 22 12 13 5 13 19", key: "587y9g" }],
  ["polygon", { points: "2 19 11 12 2 5 2 19", key: "3pweh0" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mh = M("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yg = M("FolderTree", [
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
const Zg = M("GitFork", [
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
const Qg = M("Globe", [
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
const gh = M("GraduationCap", [
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
const Xg = M("HeartPulse", [
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
const Jg = M("KeyRound", [
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
const e1 = M("Laptop", [
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
const t1 = M("Layers", [
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
const Jo = M("Lightbulb", [
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
const n1 = M("ListOrdered", [
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
const Hl = M("LockOpen", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cn = M("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bl = M("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ul = M("Maximize2", [
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
const xh = M("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yh = M("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r1 = M("Monitor", [
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
const Wl = M("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s1 = M("MousePointer2", [
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
const _n = M("Network", [
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
const o1 = M("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wh = M("PanelRightClose", [
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
const a1 = M("PanelRight", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i1 = M("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vh = M("Pencil", [
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
const ar = M("PhoneCall", [
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
const bh = M("PhoneOff", [
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
const l1 = M("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kh = M("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c1 = M("Radio", [
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
const u1 = M("Redo2", [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13", key: "6uklza" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sh = M("RefreshCw", [
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
const d1 = M("Router", [
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
const p1 = M("Save", [
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
const Mi = M("ScanSearch", [
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
const ea = M("Settings", [
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
const ps = M("ShieldCheck", [
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
const jh = M("Skull", [
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
const Vl = M("Sparkles", [
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
const ql = M("SquareTerminal", [
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
const Gl = M("StepForward", [
  ["line", { x1: "6", x2: "6", y1: "4", y2: "20", key: "fy8qot" }],
  ["polygon", { points: "10,4 20,12 10,20", key: "1mc1pf" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kl = M("Sun", [
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
const jt = M("Trash2", [
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
const h1 = M("Trash", [
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
const f1 = M("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = M("Upload", [
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
const Yl = M("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g1 = M("UsersRound", [
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
const x1 = M("Waves", [
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
const Nh = M("WifiOff", [
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
const Ch = M("Wifi", [
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
const $h = M("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ta = M("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), y1 = {
  Router: d1,
  Network: _n,
  Layers: t1,
  ShieldCheck: ps,
  Monitor: r1,
  Globe: Qg,
  BookMarked: _g,
  ListOrdered: n1,
  FolderTree: Yg,
  Radio: c1,
  Camera: Bg,
  Wifi: Ch,
  WifiOff: Nh,
  Laptop: e1,
  Skull: jh,
  KeyRound: Jg,
  Waves: x1,
  GitFork: Zg,
  Database: qg,
  Zap: ta,
  Antenna: Og,
  ScanSearch: Mi,
  Copy: _l,
  Box: lh,
  TerminalSquare: ql,
  Download: Fl,
  Settings: ea,
  Sun: Kl,
  Moon: Wl,
  Trash2: jt,
  Sparkles: Vl,
  PanelRightClose: wh,
  CheckCircle2: br,
  Circle: ph,
  AlertCircle: Ln,
  Lightbulb: Jo,
  ChevronRight: dh,
  ChevronDown: uh,
  Filter: mh,
  Lock: cn,
  LockOpen: Hl,
  Crosshair: Xo,
  StepForward: Gl,
  FastForward: fh,
  Mail: Bl,
  ArrowDownToLine: ah,
  ArrowUpFromLine: ih,
  Clock: hh,
  Plus: kh,
  Minus: yh,
  Maximize2: Ul,
  BoxSelect: To,
  Building2: Fg,
  Pencil: vh,
  Trash: h1,
  Cloud: Vg,
  Calculator: ch,
  Globe2: Gg,
  RefreshCw: Sh,
  PhoneCall: ar,
  UserRound: Yl,
  UsersRound: g1,
  MessageSquare: xh,
  GraduationCap: gh,
  PhoneOff: bh
};
function ks(e) {
  return y1[e] || lh;
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
function In({ title: e, subtitle: t, icon: n, onClose: r, children: s, footer: o, width: i = "max-w-2xl" }) {
  const l = P.useRef(null);
  return P.useEffect(() => {
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
                  children: /* @__PURE__ */ a.jsx($h, { size: 16 })
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
function Y({ label: e, hint: t, children: n }) {
  return /* @__PURE__ */ a.jsxs("label", { className: "mb-3 block", children: [
    /* @__PURE__ */ a.jsx("span", { className: "mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-soft", children: e }),
    n,
    t && /* @__PURE__ */ a.jsx("span", { className: "mt-1 block text-[11px] leading-snug text-soft", children: t })
  ] });
}
const U = "w-full rounded-lg border border-line bg-panel2 px-2.5 py-2 font-mono text-[13px] text-ink outline-none focus:border-accent";
function Re({ checked: e, onChange: t, label: n, hint: r, id: s }) {
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
function re({ children: e, tone: t = "neutral", className: n = "" }) {
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
function W({ children: e, className: t = "" }) {
  return /* @__PURE__ */ a.jsx("h3", { className: `mb-2 text-[10px] font-bold uppercase tracking-wider text-soft ${t}`, children: e });
}
const w1 = {}, hu = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, p) => {
    const f = typeof d == "function" ? d(t) : d;
    if (!Object.is(f, t)) {
      const h = t;
      t = p ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), n.forEach((x) => x(t, h));
    }
  }, s = () => t, c = { setState: r, getState: s, getInitialState: () => u, subscribe: (d) => (n.add(d), () => n.delete(d)), destroy: () => {
    (w1 ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, u = t = e(r, s, c);
  return c;
}, v1 = (e) => e ? hu(e) : hu;
var Ph = { exports: {} }, Eh = {}, Th = { exports: {} }, Ih = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr = P;
function b1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var k1 = typeof Object.is == "function" ? Object.is : b1, S1 = gr.useState, j1 = gr.useEffect, N1 = gr.useLayoutEffect, C1 = gr.useDebugValue;
function $1(e, t) {
  var n = t(), r = S1({ inst: { value: n, getSnapshot: t } }), s = r[0].inst, o = r[1];
  return N1(function() {
    s.value = n, s.getSnapshot = t, Ma(s) && o({ inst: s });
  }, [e, n, t]), j1(function() {
    return Ma(s) && o({ inst: s }), e(function() {
      Ma(s) && o({ inst: s });
    });
  }, [e]), C1(n), n;
}
function Ma(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !k1(e, n);
  } catch {
    return !0;
  }
}
function P1(e, t) {
  return t();
}
var E1 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? P1 : $1;
Ih.useSyncExternalStore = gr.useSyncExternalStore !== void 0 ? gr.useSyncExternalStore : E1;
Th.exports = Ih;
var T1 = Th.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var na = P, I1 = T1;
function A1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var M1 = typeof Object.is == "function" ? Object.is : A1, z1 = I1.useSyncExternalStore, D1 = na.useRef, L1 = na.useEffect, R1 = na.useMemo, O1 = na.useDebugValue;
Eh.useSyncExternalStoreWithSelector = function(e, t, n, r, s) {
  var o = D1(null);
  if (o.current === null) {
    var i = { hasValue: !1, value: null };
    o.current = i;
  } else i = o.current;
  o = R1(function() {
    function c(h) {
      if (!u) {
        if (u = !0, d = h, h = r(h), s !== void 0 && i.hasValue) {
          var x = i.value;
          if (s(x, h)) return p = x;
        }
        return p = h;
      }
      if (x = p, M1(d, h)) return x;
      var j = r(h);
      return s !== void 0 && s(x, j) ? x : (d = h, p = j);
    }
    var u = !1, d, p, f = n === void 0 ? null : n;
    return [function() {
      return c(t());
    }, f === null ? void 0 : function() {
      return c(f());
    }];
  }, [t, n, r, s]);
  var l = z1(e, o[0], o[1]);
  return L1(function() {
    i.hasValue = !0, i.value = l;
  }, [l]), O1(l), l;
};
Ph.exports = Eh;
var _1 = Ph.exports;
const F1 = /* @__PURE__ */ Vu(_1), Ah = {}, { useDebugValue: H1 } = Kr, { useSyncExternalStoreWithSelector: B1 } = F1;
let fu = !1;
const U1 = (e) => e;
function W1(e, t = U1, n) {
  (Ah ? "production" : void 0) !== "production" && n && !fu && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), fu = !0);
  const r = B1(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return H1(r), r;
}
const mu = (e) => {
  (Ah ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? v1(e) : e, n = (r, s) => W1(t, r, s);
  return Object.assign(n, t), n;
}, V1 = (e) => e ? mu(e) : mu, kr = {
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
}, q1 = (e) => e === "wifi", Ce = {
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
function gu(e, t) {
  const n = (r) => r.role === "router" || r.role === "firewall" ? "l3" : r.role === "switch" || r.role === "l3switch" ? "l2" : "host";
  return n(e) === n(t);
}
function zi(e, t) {
  const n = Ce[e];
  return !n || !t ? !1 : n.media.includes(t.media);
}
function G1(e, t, n, r = null, s = null) {
  var i;
  const o = Ce[e];
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
      if (q1(c.media))
        return { ok: !1, reason: `${c.name} is a radio — nothing plugs into it.`, fatal: !0 };
      if (!zi(e, c))
        return {
          ok: !1,
          fatal: !0,
          reason: `${o.label} does not fit ${l.hostname} ${c.name} (${((i = kr[c.media]) == null ? void 0 : i.label) || c.media}).`
        };
      if (c.link)
        return { ok: !1, reason: `${l.hostname} ${c.name} already has a cable.`, fatal: !0 };
    }
  return e === "straight" && gu(t, n) ? { ok: !1, reason: Ce.crossover.hint } : e === "crossover" && !gu(t, n) ? { ok: !1, reason: Ce.straight.hint } : { ok: !0, reason: "" };
}
const An = {
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
      { prefix: "Se0/0/", count: 2, media: "serial", zeroBased: !0, speed: "1.544 Mbps" },
      { name: "Con0", media: "console" }
    ],
    services: {}
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
    services: {}
  },
  laptop: {
    id: "laptop",
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
    services: {},
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
      { name: "Con0", media: "console" }
    ],
    services: { http: !0, ssh: !0, mysql: !0 },
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
    ports: [{ prefix: "eth", count: 1, media: "ethernet", zeroBased: !0, speed: "1 Gbps" }],
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
    ports: [{ prefix: "eth", count: 1, media: "ethernet", zeroBased: !0, speed: "1 Gbps" }],
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
    ports: [{ prefix: "eth", count: 1, media: "ethernet", zeroBased: !0, speed: "1 Gbps" }],
    services: { ftp: !0, ssh: !0 }
  },
  // ---- IoT -------------------------------------------------------------
  sensor: {
    id: "sensor",
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
    services: {},
    radio: { enabled: !0, ssid: "", monitorMode: !1 },
    promiscuous: !0,
    attacker: !0
  }
};
function Mh(e) {
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
const ir = {
  http: { label: "HTTP (Apache)", port: 80 },
  https: { label: "HTTPS (TLS)", port: 443 },
  ssh: { label: "SSH (OpenSSH)", port: 22 },
  ftp: { label: "FTP (vsftpd)", port: 21 },
  telnet: { label: "Telnet", port: 23 },
  dns: { label: "DNS (bind9)", port: 53 },
  dhcp: { label: "DHCP (isc-dhcp)", port: 67 },
  mysql: { label: "MySQL", port: 3306 },
  mqtt: { label: "MQTT Telemetry", port: 1883 },
  rtsp: { label: "RTSP Video", port: 554 }
}, K1 = ["Network Devices", "End Devices", "IoT Devices", "Red Team"];
function Y1(e) {
  return Object.values(An).filter((t) => t.group === e);
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
function je(e) {
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
function zh(e) {
  return e < 0 || e > 32 ? null : kt(e === 0 ? 0 : 4294967295 << 32 - e >>> 0);
}
function xu(e, t) {
  const n = ct(e), r = ct(t);
  return n === null || r === null ? null : (n & r) >>> 0;
}
function Io(e, t, n) {
  const r = xu(e, n), s = xu(t, n);
  return r !== null && s !== null && r === s;
}
function $t(e) {
  let t = 2166136261;
  for (let r = 0; r < e.length; r++)
    t ^= e.charCodeAt(r), t = t * 16777619 >>> 0;
  return [2, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, t & 255, t >>> 3 & 255].map((r) => r.toString(16).padStart(2, "0")).join(":");
}
const Z1 = [
  { id: "tautology", re: /('|")?\s*or\s+('|")?\s*\d+\s*('|")?\s*=\s*('|")?\s*\d+/i, label: "tautology (OR 1=1)" },
  { id: "union", re: /union\s+(all\s+)?select/i, label: "UNION SELECT column grafting" },
  { id: "comment", re: /(--|#|\/\*)/, label: "comment terminator" },
  { id: "stacked", re: /;\s*(drop|insert|update|delete)\s/i, label: "stacked statement" },
  { id: "always-true-string", re: /('|")\s*or\s*('|")[^'"]*('|")\s*=\s*('|")/i, label: "string tautology (OR 'a'='a')" },
  { id: "sleep", re: /(sleep|benchmark|waitfor\s+delay)\s*\(/i, label: "time-based probe" }
];
function Q1(e = "") {
  const t = `FLAG{sqli_${X1(e).toString(16)}}`;
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
function X1(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t ^= e.charCodeAt(n), t = t * 16777619 >>> 0;
  return t >>> 0;
}
function J1(e) {
  const t = String(e ?? "");
  return Z1.filter((n) => n.re.test(t));
}
function Dh(e, t) {
  const n = e.database;
  if (!n)
    return { status: 404, vulnerable: !1, blocked: !1, signatures: [], lines: ["No web application on this host."], flag: null };
  const r = J1(t), s = e.security.inputSanitised, o = { at: Date.now(), input: String(t ?? ""), hits: r.map((u) => u.id), blocked: !1 };
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
const Rn = 210, ue = {
  open: { id: "open", label: "Open — no encryption", short: "OPEN", encrypted: !1 },
  wep: { id: "wep", label: "WEP — legacy, broken", short: "WEP", encrypted: !0 },
  wpa2: { id: "wpa2", label: "WPA2-PSK (AES-CCMP)", short: "WPA2", encrypted: !0 },
  wpa3: { id: "wpa3", label: "WPA3-SAE", short: "WPA3", encrypted: !0 }
};
function e0(e) {
  return !!(ue[e] && ue[e].encrypted);
}
function hs(e, t) {
  return Math.hypot(e.x - t.x, e.y - t.y);
}
function Sr(e) {
  return e.devices.filter((t) => t.ap && t.ap.enabled);
}
function t0(e) {
  return !!(e.radio && e.radio.enabled) && !(e.ap && e.ap.enabled);
}
function Zl(e, t) {
  if (!t || !t.ap || !t.ap.enabled) return null;
  const n = t.ap.range ?? Rn, r = hs(e, t);
  if (r > n) return null;
  const s = Math.round(-30 - r / n * 62);
  return Math.max(-95, Math.min(-25, s));
}
function Lh(e) {
  return e == null ? 0 : e >= -55 ? 4 : e >= -67 ? 3 : e >= -78 ? 2 : e >= -88 ? 1 : 0;
}
function Rh(e, t) {
  return Sr(e).filter((n) => n.id !== t.id).map((n) => ({ ap: n, dbm: Zl(t, n) })).filter(({ dbm: n }) => n !== null).sort((n, r) => r.dbm - n.dbm);
}
function n0(e, t) {
  return !!(e.ap && e.ap.deauthed && e.ap.deauthed[t] != null);
}
function hn(e) {
  const t = /* @__PURE__ */ new Map(), n = Sr(e);
  for (const r of e.devices) {
    if (!t0(r)) continue;
    const s = r.radio.ssid ? String(r.radio.ssid) : null;
    let o = null;
    for (const i of n) {
      if (i.id === r.id || s && i.ap.ssid !== s || n0(i, r.id)) continue;
      const l = Zl(r, i);
      l !== null && (!o || l > o.dbm) && (o = {
        apId: i.id,
        dbm: l,
        ssid: i.ap.ssid,
        security: i.ap.security,
        rogue: !!i.ap.rogue
      });
    }
    o && t.set(r.id, o);
  }
  return t;
}
function Oh(e) {
  const t = [];
  for (const [n, r] of hn(e))
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
function r0(e, t) {
  let n = !1;
  for (const r of e.devices)
    if (!(!r.ap || !r.ap.deauthed))
      for (const [s, o] of Object.entries(r.ap.deauthed))
        t >= o && (delete r.ap.deauthed[s], n = !0);
  return n;
}
function s0(e, t, n) {
  return e.devices.filter((r) => {
    if (!r.radio || !r.radio.enabled) return !1;
    if (r.id === t.id || n && r.id === n.id) return !0;
    const s = r.radio.range ?? Rn;
    return hs(r, t) <= s;
  });
}
function _h(e, t, n) {
  const r = hn(e), s = r.get(t.id);
  if (s && s.apId === n.id) return s;
  const o = r.get(n.id);
  return o && o.apId === t.id ? o : null;
}
let yu = 0;
function o0(e = "d") {
  return yu += 1, `${e}${yu.toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}
const a0 = {
  router: "Router",
  switch: "Switch",
  l3switch: "MLSwitch",
  firewall: "Firewall",
  host: "Host",
  iot: "IoT"
};
function i0(e, t) {
  const n = t.id === "pc" ? "PC" : t.id === "laptop" ? "Laptop" : t.id === "accesspoint" ? "AP" : t.id === "threatactor" ? "Attacker" : t.id === "isp" ? "Internet" : t.id === "webserver" ? "WebSrv" : t.id === "dnsserver" ? "DnsSrv" : t.id === "dhcpserver" ? "DhcpSrv" : t.id === "ftpserver" ? "FtpSrv" : t.id === "sensor" ? "Sensor" : t.id === "camera" ? "Camera" : a0[t.role] || "Device";
  let r = 0;
  const s = new Set(e.map((o) => o.hostname));
  for (; s.has(`${n}${r}`); ) r += 1;
  return `${n}${r}`;
}
function l0(e) {
  return e.ap || !Mh(e).some((n) => n.media === "wifi") && !e.radio ? null : {
    enabled: !0,
    ssid: "",
    monitorMode: !1,
    ...e.radio || {},
    range: Rn
  };
}
function c0(e, t) {
  return Mh(e).map((n, r) => ({
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
function wu(e, t, n, r = []) {
  const s = An[e];
  if (!s) throw new Error(`Unknown device type: ${e}`);
  const o = o0("d");
  return {
    id: o,
    typeId: e,
    role: s.role,
    os: s.os,
    hostname: i0(r, s),
    x: t,
    y: n,
    interfaces: c0(s, o),
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
    radio: l0(s),
    ap: s.ap ? { ...s.ap, enabled: !0, range: Rn, deauthed: {} } : null,
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
      callbackVerification: !1
      // staff ring the caller back on a directory
      //                              number — the control that ends a pretext
      //                              built on claimed identity
    },
    // The mock database only exists on devices that host a web app.
    database: s.webApp ? Q1(o) : null,
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
function H(e) {
  const t = e.interfaces.find((n) => n.ip);
  return t ? t.ip : "";
}
function Ao(e) {
  return e.interfaces.find((t) => t.ip) || e.interfaces[0] || null;
}
function Fh(e, t) {
  if (!t) return null;
  const n = String(t).toLowerCase().replace(/\s+/g, "");
  return e.interfaces.find((r) => r.name.toLowerCase().replace(/\s+/g, "") === n) || // allow shorthand: "0/1" matches "Gi0/1", "e0" matches "eth0"
  e.interfaces.find((r) => r.name.toLowerCase().replace(/\s+/g, "").endsWith(n)) || null;
}
function Di(e) {
  return Object.entries(e.services).filter(([, t]) => t).map(([t]) => t);
}
function Li(e, t) {
  const n = e.security;
  return n.lockout.failures += 1, n.maxAuthTries > 0 && n.lockout.failures >= n.maxAuthTries && (n.lockout.locked = !0, n.lockout.lockedUntil = t + 6e4), n.lockout;
}
function Hh(e, t) {
  const n = e.security.lockout;
  return n.locked ? t >= n.lockedUntil ? (n.locked = !1, n.failures = 0, !1) : !0 : !1;
}
function Ql(e) {
  e.runtime.cpu = 2, e.runtime.memory = 14, e.runtime.packetsDropped = 0, e.runtime.sessions = 0, e.runtime.unresponsive = !1, e.runtime.underAttack = null;
}
function Ri(e, t) {
  return !e || !t ? null : e.interfaces.find((n) => n.name === t) || null;
}
function Bh(e, t) {
  return e.interfaces.map((n) => {
    var i, l;
    const r = kr[n.media];
    let s = !1, o = "";
    if (n.media === "wifi")
      s = !0, o = "radio — nothing plugs in";
    else if (n.link)
      s = !0, o = "already cabled";
    else if (t && !zi(t, n)) {
      s = !0;
      const c = (i = r == null ? void 0 : r.cables) == null ? void 0 : i[0], u = c ? (l = Ce[c]) == null ? void 0 : l.short : null;
      o = u ? `needs a ${u} cable` : `wrong media (${(r == null ? void 0 : r.short) || n.media})`;
    }
    return { port: n, name: n.name, media: n.media, mediaLabel: (r == null ? void 0 : r.label) || n.media, disabled: s, reason: o };
  });
}
function vu(e, t) {
  return Bh(e, t).filter((n) => !n.disabled).map((n) => n.port);
}
function Gr(e, t, n) {
  var s;
  if (!t) return "empty";
  if (t.media === "wifi") {
    const o = e.radio && e.radio.associatedTo;
    return (s = e.radio) != null && s.enabled ? o ? "up" : "idle" : "off";
  }
  if (!t.link) return "empty";
  const r = n == null ? void 0 : n.links.find((o) => o.id === t.link);
  return r ? r.down ? "down" : t.enabled ? "up" : "admin-down" : "empty";
}
function fs(e, t, n) {
  if (!t || !t.link || !n) return null;
  const r = n.links.find((l) => l.id === t.link);
  if (!r) return null;
  const s = r.a === e.id ? r.b : r.a, o = r.a === e.id ? r.bPort : r.aPort, i = n.devices.find((l) => l.id === s);
  return i ? { device: i, port: Ri(i, o), link: r } : null;
}
function u0(e) {
  return e.links.filter((n) => !n.down).concat(Oh(e));
}
const d0 = u0;
function Uh(e, t) {
  const n = [];
  for (const r of d0(e))
    r.a === t ? n.push(r.b) : r.b === t && n.push(r.a);
  return n;
}
function K(e, t, n) {
  if (t === n) return [t];
  const r = /* @__PURE__ */ new Map([[t, null]]), s = [t];
  for (; s.length; ) {
    const o = s.shift();
    for (const i of Uh(e, o))
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
function p0(e, t, n) {
  return K(e, t, n) !== null;
}
function h0(e, t) {
  const n = new Map(e.devices.map((i) => [i.id, i])), r = /* @__PURE__ */ new Set([t]), s = [t], o = /* @__PURE__ */ new Set([t]);
  for (; s.length; ) {
    const i = s.shift();
    for (const l of Uh(e, i)) {
      if (r.has(l)) continue;
      r.add(l), o.add(l);
      const c = n.get(l);
      c && (c.role === "router" || c.role === "firewall") || s.push(l);
    }
  }
  return o;
}
function Wh(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.devices)
    for (const r of n.interfaces)
      r.ip && t.set(r.ip, { device: n, iface: r });
  return t;
}
function Xe(e, t) {
  if (!t) return null;
  const n = Wh(e).get(t.trim());
  if (n) return n.device;
  const r = t.trim().toLowerCase();
  return e.devices.find((s) => s.hostname.toLowerCase() === r) || null;
}
class f0 {
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
const m0 = "ff:ff:ff:ff:ff:ff", za = (e) => {
  var t, n;
  return ((n = (t = e == null ? void 0 : e.interfaces) == null ? void 0 : t[0]) == null ? void 0 : n.mac) || $t(`${(e == null ? void 0 : e.id) || "x"}:0`);
}, Ar = (e) => String(e).split("").reduce((t, n) => t * 31 + n.charCodeAt(0) >>> 0, 7), g0 = /* @__PURE__ */ new Set(["beacon", "deauth", "auth", "probe"]), bu = {
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
}, Vh = {
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
function ku({ topology: e, from: t, to: n, kind: r = "icmp", clock: s = 0, srcIp: o = "", dstIp: i = "", meta: l = {} }) {
  var B;
  const c = bu[r] || bu.tcp, u = g0.has(r), d = u ? null : _h(e, t, n), p = !!d || u, f = l.security || (d == null ? void 0 : d.security) || (p ? x0(e, t, n) : null), h = String(f || "none").toLowerCase(), x = p && !u && e0(h) && !l.plaintext, j = za(t), w = u && r === "beacon" ? m0 : za(n), m = d ? za(e.devices.find((z) => z.id === d.apId) || t) : j, g = new f0(), v = {};
  if (p) {
    const z = { beacon: 8, deauth: 12, auth: 11, probe: 4 }[r] ?? 0, q = u ? 0 : 2;
    g.u8((z & 15) << 4 | (q & 3) << 2), g.u8(x ? 64 : 0), g.u16(314), g.mac(w), g.mac(j), g.mac(m), g.u16(((l.sn ?? l.seq ?? 0) & 4095) << 4), x && g.filler(8, Ar(j)), v.dot11 = {
      frameType: u ? `Management (${r})` : "Data",
      protected: x,
      receiver: w,
      transmitter: j,
      bssid: m,
      ssid: l.ssid || (d == null ? void 0 : d.ssid) || "",
      channel: l.channel ?? null,
      signal: l.dbm != null ? `${l.dbm} dBm` : d ? `${d.dbm} dBm` : "",
      security: ue[h] ? ue[h].short : "OPEN",
      ...r === "deauth" ? { reasonCode: `${l.reason ?? 7} (class 3 frame from nonassociated station)` } : {}
    };
  } else {
    const z = r === "arp" ? 2054 : 2048;
    g.mac(w).mac(j).u16(z), v.eth = {
      destination: w,
      source: j,
      type: `0x${z.toString(16).padStart(4, "0")} (${r === "arp" ? "ARP" : "IPv4"})`
    };
  }
  let b = "";
  if (r === "arp")
    g.u16(1).u16(2048).u8(6).u8(4).u16(l.reply ? 2 : 1), g.mac(j).ip(o).mac(l.reply ? w : "00:00:00:00:00:00").ip(i), v.arp = {
      opcode: l.reply ? "2 (reply)" : "1 (request)",
      senderMac: j,
      senderIp: o,
      targetIp: i,
      summary: l.reply ? `${o} is at ${j}` : `Who has ${i}? Tell ${o}`
    };
  else if (u) {
    const z = l.ssid || "";
    g.u8(0).u8(z.length).ascii(z).u8(3).u8(l.channel ?? 6), r === "deauth" && g.u16(l.reason ?? 7), b = w0(r, l);
  } else {
    const z = c.l4, q = (z === "tcp" || z === "udp") && l.body ? String(l.body).length : c.payload || 0, ee = z === "tcp" ? 20 : z === "udp" || z === "icmp" ? 8 : 0;
    g.u8(69).u8(0).u16(20 + ee + q).u16(7238).u16(16384), g.u8(l.ttl ?? 64), g.u8(z === "tcp" ? 6 : z === "udp" ? 17 : 1), g.u16(0).ip(o).ip(i), v.ip = {
      version: 4,
      headerLength: "20 bytes",
      totalLength: `${20 + ee + q} bytes`,
      ttl: l.ttl ?? 64,
      protocol: z === "tcp" ? "6 (TCP)" : z === "udp" ? "17 (UDP)" : "1 (ICMP)",
      source: o,
      destination: i
    };
    const te = l.port || c.port || 0;
    if (z === "tcp") {
      const I = 4e4 + (Ar(j) % 2e4 | 0);
      g.u16(I).u16(te).u32(l.seq ?? 1).u32(0).u16(20504).u16(64240).u16(0).u16(0), v.tcp = {
        sourcePort: I,
        destinationPort: te,
        flags: "PSH, ACK",
        window: 64240,
        payloadBytes: q
      };
    } else if (z === "udp") {
      const I = 4e4 + (Ar(j) % 2e4 | 0);
      g.u16(I).u16(te).u16(8 + q).u16(0), v.udp = { sourcePort: I, destinationPort: te, length: 8 + q };
    } else z === "icmp" && (g.u8(l.reply ? 0 : 8).u8(0).u16(0).u16(1).u16(l.seq ?? 0), v.icmp = {
      type: l.reply ? "0 (Echo Reply)" : "8 (Echo Request)",
      identifier: "0x0001",
      sequence: l.seq ?? 0
    });
    b = l.body ? String(l.body) : y0(r, l), q > 0 && (x ? g.filler(q, Ar(j + q)) : l.body ? g.ascii(String(l.body)) : g.filler(q, Ar(r) + (l.seq ?? 0)));
  }
  (b && b.length > 0 || x) && (v.payload = {
    protected: x,
    bytes: x ? "ciphertext" : `${b.length} bytes`,
    ...x ? { note: `Encrypted with ${((B = ue[h]) == null ? void 0 : B.short) || "WPA2"} — unreadable without the key` } : { text: b }
  });
  const y = g.out, C = v0({ kind: r, spec: c, meta: l, srcIp: o, dstIp: i, layers: v, encrypted: x, security: h, payloadText: b });
  return {
    number: null,
    // assigned by CaptureBuffer.add
    time: s / 1e3,
    source: p && u ? j : o || j,
    destination: p && u ? w : i || w,
    protocol: c.protocol,
    colorKey: c.colorKey,
    length: y.length,
    bytes: y,
    wireless: p,
    encrypted: x,
    security: h,
    info: C,
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
function x0(e, t, n) {
  const r = [t, n].find((s) => s && s.ap && s.ap.enabled);
  return r ? r.ap.security : "none";
}
function y0(e, t) {
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
function w0(e, t) {
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
function v0({ kind: e, spec: t, meta: n, srcIp: r, dstIp: s, layers: o, encrypted: i, security: l, payloadText: c }) {
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
    return `${t.protocol} data, ${((d = ue[l]) == null ? void 0 : d.short) || "WPA2"} protected`;
  if (e === "http") {
    const p = String(n.body || "").split(`\r
`)[0];
    return p ? `${p}` : `HTTP ${r} → ${s}`;
  }
  return e === "dns" ? `Standard query A ${n.name || "web.lab.local"}` : e === "mqtt" ? `PUBLISH ${n.topic || "sensors/telemetry"}` : e === "attack" ? n.label ? `${n.label}` : "TCP (exercise traffic)" : c || `${t.protocol} ${r} → ${s}`;
}
function b0(e, t, n) {
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
function k0(e, t, n, r) {
  if (!t || !n || !r) return !1;
  if (t.id === n.id || t.id === r.id) return !0;
  const s = _h(e, n, r), o = !s && !!(n.ap || r.ap) && n.id === r.id;
  if (s || o) {
    if (!t.radio || !t.radio.enabled || !t.radio.monitorMode) return !1;
    const i = t.radio.range ?? Rn;
    return hs(t, n) <= i || hs(t, r) <= i;
  }
  return t.promiscuous ? b0(e, n, r).has(t.id) : !1;
}
const Su = {
  http: "HTTP",
  icmp: "ICMP",
  arp: "ARP",
  dns: "DNS",
  dhcp: "DHCP",
  mqtt: "MQTT",
  eapol: "EAPOL"
};
function qh(e, t) {
  const n = String(t || "").trim().toLowerCase();
  return n ? n.split(/\s+(?:and|&&)\s+/).map((r) => r.trim()).filter(Boolean).every((r) => S0(e, r)) : !0;
}
function S0(e, t) {
  if (t === "wlan") return !!e.wireless;
  if (t === "eth") return !e.wireless;
  if (t === "plaintext") return !e.encrypted;
  if (t === "encrypted") return !!e.encrypted;
  if (t === "tcp") return !!e.layers.tcp;
  if (t === "udp") return !!e.layers.udp;
  if (Su[t]) return e.protocol === Su[t];
  const n = t.match(/^([a-z0-9.]+)\s*(==|!=)\s*(.+)$/);
  if (n) {
    const [, r, s, o] = n, i = o.replace(/^["']|["']$/g, "").trim(), l = j0(e, r);
    if (l === null) return !1;
    const c = Array.isArray(l) ? l.some((u) => String(u).toLowerCase() === i) : String(l).toLowerCase() === i;
    return s === "!=" ? !c : c;
  }
  return `${e.protocol} ${e.source} ${e.destination} ${e.info}`.toLowerCase().includes(t);
}
function j0(e, t) {
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
class N0 {
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
function C0(e, t = 16) {
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
function $0(e) {
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
const ju = {
  icmp: { label: "ICMP", color: "#3b82f6" },
  arp: { label: "ARP", color: "#a855f7" },
  dns: { label: "DNS", color: "#14b8a6" },
  dhcp: { label: "DHCP", color: "#f59e0b" },
  http: { label: "HTTP", color: "#22c55e" },
  mqtt: { label: "MQTT", color: "#06b6d4" },
  attack: { label: "ATTACK", color: "#ef4444" }
}, Mr = 320;
let P0 = 0;
const Da = () => P0 += 1;
class E0 {
  /**
   * @param {object} opts
   * @param {() => {devices:Array, links:Array}} opts.getTopology  live snapshot accessor
   * @param {(line:{channel:string,text:string,level:string}) => void} opts.onLog
   * @param {() => void} opts.onChange  called when runtime state mutates
   */
  constructor({ getTopology: t, onLog: n = () => {
  }, onChange: r = () => {
  } }) {
    this.getTopology = t, this.onLog = n, this.onChange = r, this.clock = 0, this.running = !0, this.speed = 1, this.queue = [], this.packets = [], this._timers = /* @__PURE__ */ new Map(), this.capture = new N0(), this.mode = "realtime", this.ambient = !0, this.pduEvents = [], this.pduSeq = 0;
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
    this.clock += t * this.speed, r0(this.getTopology(), this.clock) && this.onChange();
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
    const s = { id: Da(), at: this.clock + t, fn: n, label: r, cancelled: !1 }, o = this.queue.findIndex((i) => i.at > s.at);
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
  // -------------------------------------------------------------- packets
  /**
   * Launch an animated packet along a device path.
   * The renderer reads `packets` and interpolates between hops by clock time.
   */
  emit(t, n = "icmp", r = {}) {
    if (!Array.isArray(t) || t.length < 2) return null;
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
      id: Da(),
      kind: n,
      path: t,
      meta: r,
      startedAt: this.clock,
      arrivesAt: this.clock + Mr * (t.length - 1),
      hopMs: Mr
    };
    this.packets.push(o), this.packets.length > 120 && this.packets.shift();
    for (const i of s) this.commitHop(i);
    return this.onChange(), o;
  }
  /** Advance one queued hop. Returns the event, or null when the queue is empty. */
  step() {
    const t = this.pduEvents.find((n) => n.status === "queued");
    return t ? (t.status = "done", t.at = this.clock, this.commitHop(t.hop), this.packets.push({
      id: Da(),
      kind: t.kind,
      path: [t.hop.fromId, t.hop.toId],
      meta: {},
      startedAt: this.clock,
      arrivesAt: this.clock + Mr,
      hopMs: Mr
    }), this.clock += Mr, this.onChange(), t) : null;
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
    const c = r.srcIp || H(i), u = r.dstIp || H(l), d = [];
    for (let p = 0; p < t.length - 1; p++) {
      const f = o.get(t[p]), h = o.get(t[p + 1]);
      if (!f || !h) continue;
      const x = hn(s).get(f.id), j = ku({
        topology: s,
        from: f,
        to: h,
        kind: n,
        clock: this.clock,
        srcIp: c,
        dstIp: u,
        meta: { ...r, dbm: x ? x.dbm : void 0, ssid: x ? x.ssid : r.ssid }
      }), w = s.devices.filter((m) => (m.capturing || m.id === f.id || m.id === h.id) && k0(s, m, f, h)).map((m) => m.id);
      d.push({
        index: p,
        total: t.length - 1,
        path: t,
        fromId: f.id,
        toId: h.id,
        fromName: f.hostname,
        toName: h.hostname,
        frame: j,
        witnesses: w
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
    const o = this.getTopology(), i = ku({
      topology: o,
      from: t,
      to: n,
      kind: r,
      clock: this.clock,
      srcIp: H(t),
      dstIp: H(n),
      meta: s
    }), l = s0(o, t, n).filter((u) => u.capturing && u.radio.monitorMode).map((u) => u.id), c = [.../* @__PURE__ */ new Set([t.id, n.id, ...l])];
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
    const r = this.getTopology(), s = (h, x) => ({ ok: !1, code: h, reason: x, path: null, viaSpoof: !1, ttl: 0 }), o = H(t);
    if (!o) return s("no-src-ip", "no IP address configured on the source interface");
    const i = Xe(r, n);
    if (!i) {
      const h = r.devices.some((x) => x.services.dns && Object.keys(x.dnsZone).length);
      return s("unknown-host", h ? "name not present in any DNS zone" : "name or service not known");
    }
    if (i.id === t.id)
      return { ok: !0, code: "loopback", reason: "loopback", path: [t.id], viaSpoof: !1, ttl: 64 };
    const l = H(i);
    if (!l) return s("no-dst-ip", `${i.hostname} has no IP address configured`);
    const c = K(r, t.id, i.id);
    if (!c) return s("no-path", "no cable path to the destination — check your wiring");
    const u = Ao(t);
    if (!Io(o, l, u.mask)) {
      if (!t.gateway || !je(t.gateway))
        return s("no-gateway", "destination is off-subnet and no default gateway is set");
      const h = Xe(r, t.gateway);
      if (!h) return s("gateway-unreachable", `default gateway ${t.gateway} does not exist`);
      if (!K(r, t.id, h.id))
        return s("gateway-unreachable", `default gateway ${t.gateway} is not reachable`);
      if (!r.devices.some(
        (j) => (j.role === "router" || j.role === "l3switch") && K(r, t.id, j.id) && K(r, j.id, i.id)
      )) return s("no-route", "no router joins these two subnets");
    }
    const p = this.aclVerdict(c, o, l);
    if (p) return { ...s("acl-deny", `blocked by ACL on ${p.hostname}`), path: c };
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
   * If the source's ARP entry for its next hop has been poisoned, splice the
   * attacker into the path — this is what makes the MitM lesson visible.
   */
  spoofDetour(t, n, r) {
    const s = this.getTopology(), o = Io(H(t), H(n), Ao(t).mask) ? H(n) : t.gateway, i = t.arp[o];
    if (!i || !i.spoofed || !i.byDeviceId) return { path: r, viaSpoof: !1 };
    const l = s.devices.find((d) => d.id === i.byDeviceId);
    if (!l) return { path: r, viaSpoof: !1 };
    const c = K(s, t.id, l.id), u = K(s, l.id, n.id);
    return !c || !u ? { path: r, viaSpoof: !1 } : { path: [...c, ...u.slice(1)], viaSpoof: !0 };
  }
  // ------------------------------------------------------------- services
  /** ICMP echo, four probes, logged to the issuing device's console. */
  ping(t, n, r, { count: s = 4 } = {}) {
    const o = this.adjudicate(t, n), i = this.getTopology(), l = Xe(i, n), c = l ? H(l) : n;
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
          ` ${u + 1}  ${c.hostname} (${H(c) || "*"})  ${d.toFixed(2)} ms`,
          u === l.length - 1 ? "success" : "info"
        );
      });
    }), this.emit(s.path, "icmp", { trace: !0 }), s;
  }
  /** DHCP DISCOVER→OFFER→REQUEST→ACK against any reachable DHCP server. */
  dhcpRequest(t, n) {
    const r = this.getTopology(), s = r.devices.find(
      (d) => d.services.dhcp && K(r, t.id, d.id)
    );
    if (!s)
      return this.log(n, "DHCPDISCOVER on eth0 … no DHCPOFFERS received", "error"), null;
    const o = s.dhcp = s.dhcp || { base: "192.168.1.", next: 100, leases: {} }, i = Object.entries(o.leases).find(([, d]) => d === t.id), l = i ? i[0] : `${o.base}${o.next++}`;
    o.leases[l] = t.id;
    const c = K(r, t.id, s.id), u = [
      ["DHCPDISCOVER on eth0 to 255.255.255.255 port 67", "info"],
      [`DHCPOFFER of ${l} from ${H(s) || s.hostname}`, "info"],
      [`DHCPREQUEST for ${l}`, "info"],
      [`DHCPACK of ${l} — lease bound`, "success"]
    ];
    return u.forEach(([d, p], f) => {
      this.schedule(f * 320, () => {
        if (this.log(n, d, p), c && this.emit(f % 2 === 0 ? c : [...c].reverse(), "dhcp"), f === u.length - 1) {
          const h = t.interfaces[0];
          h.ip = l, h.mask = "255.255.255.0", h.enabled = !0;
          const x = r.devices.find((j) => j.role === "router" && K(r, t.id, j.id));
          x && H(x) && (t.gateway = H(x)), this.onChange();
        }
      });
    }), l;
  }
  /** Resolve a name through a reachable DNS server's zone file. */
  dnsLookup(t, n, r) {
    const s = this.getTopology(), o = s.devices.find(
      (c) => c.services.dns && K(s, t.id, c.id)
    );
    if (!o)
      return this.log(r, ";; connection timed out; no servers could be reached", "error"), null;
    const i = K(s, t.id, o.id);
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
        (i) => (i.role === "host" || i.role === "iot") && H(i) && !i.runtime.unresponsive
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
    const r = t.devices.filter((d) => d.id !== n.id && H(d));
    if (!r.length) return null;
    const s = r.find((d) => d.services.dns), o = r.find((d) => d.services.http), i = n.gateway ? r.find((d) => H(d) === n.gateway) : null, l = [];
    if (s && l.push({ kind: "dns", target: H(s), meta: { name: "time.lab" }, weight: 3 }), o && l.push({ kind: "http", target: H(o), meta: { body: "GET /index.html HTTP/1.1" }, weight: 3 }), i && l.push({ kind: "arp", target: H(i), meta: { reply: !1 }, weight: 2 }), i && l.push({ kind: "icmp", target: H(i), meta: { seq: 1 }, weight: 1 }), !l.length) return null;
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
      const t = this.getTopology(), n = t.devices.filter((r) => r.services.mqtt && r.role === "host");
      for (const r of t.devices) {
        if (r.role !== "iot" || !r.services.mqtt || !H(r)) continue;
        const s = n.find((i) => K(t, r.id, i.id));
        if (!s) continue;
        const o = K(t, r.id, s.id);
        o && this.emit(o, "mqtt", { from: r.hostname }), r.runtime.packetsOut += 1, s.runtime.packetsIn += 1;
      }
      this.onChange();
    }, "telemetry");
  }
}
function T0(e, t) {
  const n = e.devices;
  return {
    topology: e,
    devices: n,
    links: e.links,
    engine: t,
    /** First device matching a predicate or role name. */
    find: (r) => typeof r == "string" ? n.find((s) => s.role === r || s.typeId === r) : n.find(r),
    findAll: (r) => typeof r == "string" ? n.filter((s) => s.role === r || s.typeId === r) : n.filter(r),
    ipOf: H,
    ifaceOf: Ao,
    reachable: (r, s) => !!(r && s && p0(e, r.id, s.id)),
    path: (r, s) => r && s ? K(e, r.id, s.id) : null,
    resolve: (r) => Xe(e, r),
    ips: () => Wh(e),
    sameSubnet: Io,
    maskToPrefix: Ve
  };
}
function I0(e, t, n) {
  const r = T0(t, n), s = e.objectives.map((l) => {
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
function A0(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.objectives)
    t.has(n.section) || t.set(n.section, []), t.get(n.section).push(n);
  return [...t.entries()].map(([n, r]) => ({ section: n, objectives: r }));
}
function Gh(e) {
  return e >= 90 ? "A" : e >= 80 ? "B" : e >= 70 ? "C" : e >= 60 ? "D" : "F";
}
function Nu(e, t) {
  return {
    labId: e.id,
    labTitle: e.title,
    score: { raw: t.earned, max: t.total, scaled: t.total ? t.earned / t.total : 0 },
    percent: t.percent,
    grade: Gh(t.percent),
    completion: t.complete ? "completed" : "incomplete",
    success: t.complete ? "passed" : "unknown",
    objectives: t.objectives.map((n) => ({ id: n.id, title: n.title, pass: n.pass, points: n.points })),
    gradedAt: new Date(t.gradedAt).toISOString()
  };
}
const La = "192.168.10.0", Bs = "255.255.255.0", Pt = "192.168.10.1", Kh = {
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
    `Address the router's first interface as ${Pt} / ${Bs} and bring it up (CLI: interface, ip address, no shutdown).`,
    `Give the PC and the server addresses inside ${La}/24 and set their default gateway to ${Pt}.`,
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
      hint: `CLI: enable → configure terminal → interface Gi0/1 → ip address ${Pt} ${Bs} → no shutdown`,
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
      title: `PC and server addressed inside ${La}/24 with the correct gateway`,
      points: 2,
      hint: `Each host needs an address in ${La}/24 and default gateway ${Pt}.`,
      check: (e) => {
        const t = (n) => {
          if (!n) return !1;
          const r = e.ipOf(n);
          return !!r && e.sameSubnet(r, Pt, Bs) && n.gateway === Pt;
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
      [`ip address ${Pt} ${Bs}`, "address the interface"],
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
}, M0 = "LAB-WIFI", z0 = ["123456", "password", "admin", "letmein", "qwerty", "welcome", "root", "toor", "changeme", "admin123"], D0 = {
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
    `Place a Wireless AP and a Laptop inside its cell, plus a Threat Actor node in range. The starter topology already has all three on SSID "${M0}".`,
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
        return n.length >= 12 && !z0.includes(n.toLowerCase());
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
}, Mo = [Kh, D0], L0 = Kh.id;
function Xn(e) {
  return Mo.find((t) => t.id === e) || Mo[0];
}
function ra(e, t) {
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
function Nn(e, t, n, r) {
  return e.cli.sessions || (e.cli.sessions = []), e.cli.sessions.push({ targetId: t.id, protocol: n, user: r, openedAt: Date.now() }), t.runtime.sessions += 1, t.os === "ios" && (t.cli.mode = "user"), { ok: !0 };
}
function R0(e, t) {
  const { chain: n } = ra(e, t);
  if (!n.length) return null;
  const r = n[n.length - 1];
  return r.host.cli.sessions.pop(), r.device;
}
function ms(e, t) {
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
function O0(e, t, n) {
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
const _0 = {
  user: ">",
  priv: "#",
  config: "(config)#",
  "config-if": "(config-if)#",
  "config-vlan": "(config-vlan)#",
  "config-line": "(config-line)#"
};
function F0(e) {
  return `${e.hostname}${_0[e.cli.mode] || "#"} `;
}
const Ra = { user: 0, priv: 1, config: 2, "config-if": 3, "config-vlan": 3, "config-line": 3 };
function fe(e, t) {
  const n = e.toLowerCase(), r = t.find((o) => o === n);
  if (r) return r;
  const s = t.filter((o) => o.startsWith(n));
  return s.length === 1 ? s[0] : null;
}
function Yh(e, t, n, r = {}) {
  const { log: s } = n, o = t.trim();
  if (!o) return;
  if (o === "?") return K0(e, s);
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
  ], u = !r.exec && Ra[e.cli.mode] >= 2, d = fe(i[0], u ? c : l);
  if (!d) {
    s("% Invalid input detected at '^' marker.", "error");
    return;
  }
  const p = e.cli.mode, f = (h, x) => {
    if (Ra[p] < Ra[h]) {
      s(`% Command authorised at ${h} level — currently ${p}.`, "error");
      return;
    }
    x();
  };
  switch (d) {
    case "enable": {
      const h = fe(i[1] || "", ["secret", "password"]);
      if (p === "config" && h) {
        if (!i[2]) return s("% Incomplete command.", "error");
        e.enableSecret = i[2], s(`  enable ${h} set`, "success"), n.commit();
        return;
      }
      const x = e.enableSecret;
      if (!x) {
        e.cli.mode = "priv";
        return;
      }
      ms(e, {
        purpose: "enable",
        expected: x,
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
      return f("priv", () => {
        if (fe(i[1] || "terminal", ["terminal", "memory"]) !== "terminal") return s('% Only "configure terminal" is supported.', "error");
        e.cli.mode = "config", s("Enter configuration commands, one per line. End with CNTL/Z.", "dim");
      });
    case "interface":
      return f("config", () => {
        const h = i.slice(1).join("");
        if (!h) return s("% Incomplete command.", "error");
        const x = Fh(e, h);
        if (!x)
          return s(`% Invalid interface ${h}. Available: ${e.interfaces.map((j) => j.name).join(", ")}`, "error");
        e.cli.ifaceCursor = x.name, e.cli.mode = "config-if";
      });
    case "ip":
      return H0(e, i, n);
    case "no":
      return B0(e, i, n);
    case "shutdown":
      return f("config-if", () => {
        const h = on(e);
        h && (h.enabled = !1, s(`%LINK-5-CHANGED: Interface ${h.name}, changed state to administratively down`, "warn"), n.commit());
      });
    case "vlan":
      return f("config", () => {
        const h = Number(i[1]);
        if (!Number.isInteger(h) || h < 1 || h > 4094) return s("% Invalid VLAN id.", "error");
        e.vlans.some((x) => x.id === h) || e.vlans.push({ id: h, name: `VLAN${h}` }), e.cli.mode = "config-vlan", e.cli.vlanCursor = h, n.commit();
      });
    case "name":
      return f("config-vlan", () => {
        const h = e.vlans.find((x) => x.id === e.cli.vlanCursor);
        if (!h) return s("% No VLAN selected.", "error");
        h.name = i.slice(1).join(" ") || h.name, s(`  vlan ${h.id} named ${h.name}`, "success"), n.commit();
      });
    case "hostname":
      return f("config", () => {
        if (!i[1]) return s("% Incomplete command.", "error");
        e.hostname = i[1], n.commit();
      });
    case "username":
      return f("config", () => {
        const h = i[1], x = fe(i[2] || "", ["secret", "password"]), j = i[3];
        if (!h || !x || !j) return s("% Usage: username NAME secret PASSWORD", "error");
        e.security.username = h, e.security.password = j, s(`  credentials updated for ${h}`, "success"), n.commit();
      });
    case "access-list":
      return f("config", () => U0(e, i, n));
    case "exit":
      e.cli.mode = p === "config-if" || p === "config-vlan" || p === "config-line" ? "config" : p === "config" ? "priv" : "user";
      return;
    case "end":
      e.cli.mode = "priv";
      return;
    case "write":
    case "copy":
      return f("priv", () => {
        s("Building configuration...", "dim"), e.cli.saved = !0, n.commit(), n.engine.schedule(300, () => s("[OK]", "success"));
      });
    case "do":
      return Yh(e, i.slice(1).join(" "), n, { exec: !0 });
    case "switchport":
      return f("config-if", () => W0(e, i, n));
    case "description":
      return f("config-if", () => {
        const h = on(e);
        h && (h.description = i.slice(1).join(" "), n.commit());
      });
    case "duplex":
    case "speed":
      return f("config-if", () => {
        const h = on(e);
        h && (h[d] = i[1], n.commit());
      });
    case "line":
      return f("config", () => V0(e, i, n));
    case "password":
      return f("config-line", () => {
        if (!i[1]) return s("% Incomplete command.", "error");
        e.lines[e.cli.lineCursor].password = i[1], s("  line password set", "success"), n.commit();
      });
    case "login":
      return f("config-line", () => {
        e.lines[e.cli.lineCursor].login = !0, e.lines[e.cli.lineCursor].password || s("% Login disabled on line — set a password first.", "warn"), n.commit();
      });
    case "transport":
      return f("config-line", () => {
        if (fe(i[1] || "", ["input", "output"]) !== "input") return s("% Usage: transport input {telnet|ssh|all|none}", "error");
        const x = (i[2] || "").toLowerCase(), j = { telnet: ["telnet"], ssh: ["ssh"], all: ["telnet", "ssh"], none: [] };
        if (!(x in j)) return s("% Usage: transport input {telnet|ssh|all|none}", "error");
        if (e.lines.vty.transport = [...j[x]], i[3]) {
          const w = i[3].toLowerCase();
          j[w] && (e.lines.vty.transport = [.../* @__PURE__ */ new Set([...e.lines.vty.transport, ...j[w]])]);
        }
        s(`  vty transport input: ${e.lines.vty.transport.join(" ") || "none"}`, "success"), n.commit();
      });
    case "banner":
      return f("config", () => {
        const h = i.slice(2).join(" ").replace(/^[#^]|[#^]$/g, "").trim();
        e.banner = h || "Authorised access only.", s("  banner set", "success"), n.commit();
      });
    case "crypto":
      return f("config", () => {
        if (!(fe(i[1] || "", ["key"]) === "key" && /gen/.test(i[2] || ""))) return s("% Usage: crypto key generate rsa", "error");
        if (!e.domainName)
          return s("% Please define a domain-name first (ip domain-name NAME).", "error");
        e.cryptoKey = !0, s("The name for the keys will be: " + e.hostname + "." + e.domainName, "dim"), s("% Generating 1024 bit RSA keys, keys will be non-exportable...[OK]", "success"), n.commit();
      });
    case "service":
      return f("config", () => {
        e.passwordEncryption = /password-encryption/.test(i.slice(1).join(" ")), s("  service password-encryption enabled", "success"), n.commit();
      });
    case "spanning-tree":
      return f("config", () => {
        e.spanningTree = i.slice(1).join(" ") || "mode pvst", s(`  spanning-tree ${e.spanningTree}`, "success"), n.commit();
      });
    case "traceroute":
      if (!i[1]) return s("% Usage: traceroute <ip|host>", "error");
      n.engine.traceroute(e, i[1], n.channel);
      return;
    case "telnet":
    case "ssh":
      return q0(e, i, d, n);
    case "show":
      return G0(e, i.slice(1), n);
    case "ping": {
      if (!i[1]) return s("% Usage: ping <ip|hostname>", "error");
      n.engine.ping(e, i[1], n.channel);
      return;
    }
    case "clear":
      fe(i[1] || "", ["arp-cache", "counters"]) === "arp-cache" && (e.arp = {}, s("  ARP cache cleared", "success"), n.commit());
      return;
    case "reload":
      return f("priv", () => {
        s("Proceed with reload? [confirm]", "dim"), e.cli.mode = "user", e.arp = {}, n.commit();
      });
    default:
      s(`% Unknown command: ${o}`, "error");
  }
}
function on(e) {
  return Fh(e, e.cli.ifaceCursor);
}
function H0(e, t, n) {
  const { log: r } = n, s = fe(t[1] || "", ["address", "route", "default-gateway", "access-group", "name-server", "domain-name", "ssh"]);
  if (s === "address") {
    if (e.cli.mode !== "config-if") return r("% Enter interface configuration mode first.", "error");
    const o = on(e), [, , i, l] = t;
    if (!je(i) || !je(l)) return r("% Invalid IP address or mask.", "error");
    if (Ve(l) === null) return r("% Mask is not contiguous.", "error");
    o.ip = i, o.mask = l, o.enabled = !0, r(`  ${o.name} ← ${i}/${Ve(l)}`, "success"), n.commit();
    return;
  }
  if (s === "route") {
    if (e.cli.mode !== "config") return r("% Enter global configuration mode first.", "error");
    const [, , o, i, l] = t;
    if (!je(o) || !je(i) || !je(l))
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
    if (!je(t[2])) return r("% Invalid gateway.", "error");
    e.gateway = t[2], n.commit();
    return;
  }
  if (s === "access-group") {
    if (e.cli.mode !== "config-if") return r("% Enter interface configuration mode first.", "error");
    const o = on(e);
    o.accessGroup = t[2], r(`  access-group ${t[2]} applied to ${o.name}`, "success"), n.commit();
    return;
  }
  r("% Incomplete command.", "error");
}
function B0(e, t, n) {
  const { log: r } = n, s = fe(t[1] || "", ["shutdown", "ip"]);
  if (s === "shutdown") {
    if (e.cli.mode !== "config-if") return r("% Enter interface configuration mode first.", "error");
    const o = on(e);
    o.enabled = !0, r(`%LINK-3-UPDOWN: Interface ${o.name}, changed state to up`, "success"), n.commit();
    return;
  }
  if (s === "ip" && fe(t[2] || "", ["address"]) === "address") {
    const o = on(e);
    o && (o.ip = "", n.commit());
    return;
  }
  r("% Incomplete command.", "error");
}
function U0(e, t, n) {
  const { log: r } = n, s = t[1], o = fe(t[2] || "", ["permit", "deny"]);
  if (!s || !o) return r("% Usage: access-list ID {permit|deny} ip SOURCE DEST", "error");
  const i = t.slice(4), l = (d) => d[0] === "any" ? { value: "any", consumed: 1 } : d[0] === "host" ? { value: d[1], consumed: 2 } : { value: d[0] || "any", consumed: 1 }, c = l(i), u = l(i.slice(c.consumed));
  e.acl.push({ id: s, action: o, source: c.value, dest: u.value, raw: t.join(" ") }), r(`  ACL ${s}: ${o} ${c.value} → ${u.value}`, "success"), n.commit();
}
function W0(e, t, n) {
  const { log: r } = n, s = on(e);
  if (!s) return r("% Select an interface first.", "error");
  const o = fe(t[1] || "", ["mode", "access", "trunk", "nonegotiate", "port-security"]);
  if (o === "mode") {
    const i = fe(t[2] || "", ["access", "trunk", "dynamic"]);
    if (!i) return r("% Usage: switchport mode {access|trunk}", "error");
    s.mode = i, r(`  ${s.name} is now a ${i} port`, "success"), n.commit();
    return;
  }
  if (o === "access") {
    if (fe(t[2] || "", ["vlan"]) !== "vlan") return r("% Usage: switchport access vlan ID", "error");
    const i = Number(t[3]);
    if (!Number.isInteger(i) || i < 1 || i > 4094) return r("% Invalid VLAN id.", "error");
    e.vlans.some((l) => l.id === i) || (e.vlans.push({ id: i, name: `VLAN${String(i).padStart(4, "0")}` }), r(`% Access VLAN does not exist. Creating vlan ${i}`, "warn")), s.vlan = i, s.mode = s.mode === "trunk" ? "trunk" : "access", r(`  ${s.name} → VLAN ${i}`, "success"), n.commit();
    return;
  }
  if (o === "trunk") {
    const i = fe(t[2] || "", ["allowed", "native", "encapsulation"]);
    if (i === "allowed" && fe(t[3] || "", ["vlan"]) === "vlan")
      s.allowedVlans = t[4] || "all", r(`  ${s.name} allowed VLANs: ${s.allowedVlans}`, "success");
    else if (i === "native" && fe(t[3] || "", ["vlan"]) === "vlan")
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
function V0(e, t, n) {
  const { log: r } = n, s = fe(t[1] || "", ["console", "vty", "aux"]);
  if (!s) return r("% Usage: line {console 0 | vty 0 4}", "error");
  if (s === "console")
    e.cli.lineCursor = "con";
  else if (s === "vty")
    e.cli.lineCursor = "vty", t[2] !== void 0 && (e.lines.vty.range = `${t[2]} ${t[3] ?? t[2]}`);
  else
    return r("% aux lines are not simulated.", "warn");
  e.cli.mode = "config-line", n.commit();
}
function q0(e, t, n, r) {
  var f;
  const { log: s, engine: o, topology: i } = r, l = t[1];
  if (!l) return s(`% Usage: ${n} ${n === "ssh" ? "-l USER HOST" : "HOST"}`, "error");
  let c = l, u = null;
  n === "ssh" && l === "-l" && (u = t[2], c = t[3]);
  const d = Xe(i, c);
  if (!d) return s(`% Unknown host ${c}`, "error");
  const p = o.adjudicate(e, c);
  if (!p.ok) return s(`% ${p.reason}`, "error");
  if (d.os !== "ios" && !d.services[n])
    return s("% Connection refused by remote host", "error");
  if (d.os === "ios") {
    const h = (f = d.lines) == null ? void 0 : f.vty;
    if (h && !h.transport.includes(n))
      return s(`% Connection refused — remote vty does not permit ${n}.`, "error");
    if (n === "ssh" && !d.cryptoKey)
      return s("% Connection refused — remote has no RSA key.", "error");
    if (h != null && h.login && h.password) {
      s(`Trying ${c} ...Open`, "dim"), ms(e, {
        purpose: "vty",
        expected: h.password,
        onSuccess: (x) => {
          Nn(e, d, n, u || "student"), d.banner && x.log(d.banner, "warn"), x.log(`[Connected to ${d.hostname}]`, "success");
        },
        onFail: (x) => x.log(`[Connection to ${c} closed by remote host]`, "error")
      }), r.commit();
      return;
    }
  }
  Nn(e, d, n, u || "student"), d.banner && s(d.banner, "warn"), s(`[Connected to ${d.hostname}] — type exit to return.`, "success"), r.commit();
}
function G0(e, t, n) {
  var i, l, c;
  const { log: r, topology: s } = n, o = fe(t[0] || "", [
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
      const p = fs(e, d, s);
      if (!p) continue;
      const f = (i = p.port) == null ? void 0 : i.mac;
      f && (r(`${String(d.vlan || 1).padEnd(8)}${f}   DYNAMIC     ${d.name}`), u += 1);
    }
    r(u ? `Total Mac Addresses for this criterion: ${u}` : "(table empty — the switch learns addresses from traffic)", "dim");
    return;
  }
  if (o === "cdp") {
    const u = /det/.test(t[2] || t[1] || "");
    r("Capability Codes: R - Router, S - Switch, H - Host, I - IGMP", "dim"), r(""), r("Device ID      Local Intrfce   Holdtme   Capability   Platform   Port ID", "dim");
    let d = 0;
    for (const p of e.interfaces) {
      const f = fs(e, p, s);
      if (!f) continue;
      d += 1;
      const h = { router: "R", switch: "S", l3switch: "R S", firewall: "R", host: "H", iot: "H", ap: "S", attacker: "H" }[f.device.role] || "H";
      r(
        `${f.device.hostname.padEnd(15)}${p.name.padEnd(16)}${String(120 + d).padEnd(10)}${h.padEnd(13)}${f.device.typeId.padEnd(11)}${((l = f.port) == null ? void 0 : l.name) || ""}`
      ), u && r(`  IP address: ${H(f.device) || "not set"}`, "dim");
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
    for (const u of e.interfaces)
      u.media !== "console" && (r(`${u.name} is ${u.enabled ? "up" : "administratively down"}, line protocol is ${u.enabled ? "up" : "down"}`), u.ip && r(`  Internet address is ${u.ip}/${Ve(u.mask)}`, "dim"));
    return;
  }
  if (o === "ip") {
    const u = fe(t[1] || "", ["interface", "route"]);
    if (u === "interface") {
      r("Interface              IP-Address      OK? Method Status                Protocol", "dim");
      for (const d of e.interfaces) {
        const p = d.enabled ? "up" : "administratively down";
        r(
          `${d.name.padEnd(22)} ${(d.ip || "unassigned").padEnd(15)} YES  manual ${p.padEnd(21)} ${d.enabled ? "up" : "down"}`,
          d.enabled ? "success" : "dim"
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
    const u = fe(t[1] || "", ["status", "trunk", "description"]);
    if (u === "status") {
      r("Port      Name               Status       Vlan       Duplex  Speed Type", "dim");
      for (const d of e.interfaces) {
        if (d.media === "console") continue;
        const p = Gr(e, d, s), f = p === "up" ? "connected" : p === "empty" ? "notconnect" : p === "admin-down" ? "disabled" : "err-disabled";
        r(
          `${d.name.padEnd(10)}${(d.description || "").padEnd(19)}${f.padEnd(13)}${String(d.mode === "trunk" ? "trunk" : d.vlan || 1).padEnd(11)}${(d.duplex || "auto").padEnd(8)}${(d.speed || "auto").padEnd(6)}${d.media}`,
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
function K0(e, t) {
  const n = e.role === "switch" || e.role === "l3switch";
  t('Abbreviations work: "conf t", "int gi0/1", "sh ip int br".', "dim"), t(""), t("EXEC      enable · disable · ping HOST · traceroute HOST · write memory", "dim"), t("          telnet HOST · ssh -l USER HOST · reload · clear arp-cache", "dim"), t("CONFIG    configure terminal · hostname NAME · enable secret PASS", "dim"), t("          ip domain-name NAME · crypto key generate rsa · banner motd ^TEXT^", "dim"), t("          username NAME secret PASS · service password-encryption", "dim"), t("LINES     line console 0 | line vty 0 4 → password PASS · login", "dim"), t("          transport input {telnet|ssh|all|none}", "dim"), t("INTERFACE interface NAME · ip address IP MASK · no shutdown · description TEXT", "dim"), n ? (t("SWITCH    vlan ID · switchport mode {access|trunk}", "dim"), t("          switchport access vlan ID · switchport trunk allowed vlan LIST", "dim")) : t("ROUTING   ip route NET MASK NEXTHOP · access-list ID deny ip SRC DST", "dim"), t("SHOW      ip interface brief · ip route · running-config · startup-config", "dim"), t("          vlan brief · interfaces status · interfaces trunk · mac address-table", "dim"), t("          cdp neighbors [detail] · arp · users · ssh · version · protocols", "dim");
}
const Y0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  execute: Yh,
  prompt: F0
}, Symbol.toStringTag, { value: "Module" })), Oi = [
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
], Oe = "attack";
function Z0({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (p, f) => e.log(Oe, p, f), o = n.services.ssh ? "ssh" : n.services.ftp ? "ftp" : null, i = H(n) || n.hostname;
  if (s(`
[brute-force] ${t.hostname} → ${n.hostname} (${i})`, "warn"), !o) {
    s("[brute-force] no SSH or FTP service is listening — nothing to test.", "error");
    return;
  }
  s(`[brute-force] service ${o}, wordlist = demo-10, user = ${n.security.username}`, "dim"), n.security.maxAuthTries > 0 && s(`[brute-force] target advertises a ${n.security.maxAuthTries}-attempt limit`, "dim");
  const l = Oi.includes(n.security.password), c = [...Oi];
  l && !c.includes(n.security.password) && c.push(n.security.password);
  const u = K(e.getTopology(), t.id, n.id);
  let d = !1;
  c.forEach((p, f) => {
    e.schedule(f * 280, () => {
      if (d) return;
      if (Hh(n, e.clock)) {
        s(`[brute-force] attempt ${f + 1} refused — account locked out. Attack defeated.`, "success"), n.runtime.underAttack = null, d = !0, r();
        return;
      }
      if (u && e.emit(u, "attack", { label: "auth" }), n.runtime.packetsIn += 1, n.runtime.underAttack = "brute-force", p === n.security.password) {
        d = !0, n.runtime.compromised = !0, s(`[brute-force] attempt ${f + 1}: ${n.security.username}:${p} → ACCEPTED`, "error"), s(`[brute-force] CREDENTIALS RECOVERED. Shell on ${n.hostname}.`, "error"), s("[brute-force] Mitigate with: a password outside the wordlist, plus an attempt limit.", "dim"), n.runtime.underAttack = null, r();
        return;
      }
      const h = Li(n, e.clock);
      s(
        `[brute-force] attempt ${f + 1}: ${n.security.username}:${p} → denied` + (n.security.maxAuthTries ? ` (${h.failures}/${n.security.maxAuthTries})` : ""),
        "dim"
      ), r();
    });
  }), e.schedule(c.length * 280 + 200, () => {
    d || (s("[brute-force] wordlist exhausted — the password held. Good hardening.", "success"), n.runtime.underAttack = null, r());
  });
}
function Q0({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (u, d) => e.log(Oe, u, d), o = H(n) || n.hostname, i = n.services.http ? 80 : n.services.ssh ? 22 : 0;
  if (s(`
[syn-flood] ${t.hostname} → ${o}:${i}`, "warn"), !i) {
    s("[syn-flood] target exposes no TCP service — no queue to fill.", "error");
    return;
  }
  n.security.synCookies && s("[syn-flood] target has SYN cookies enabled; half-open queue cannot be exhausted.", "dim");
  const l = K(e.getTopology(), t.id, n.id);
  n.runtime.underAttack = "syn-flood";
  const c = 9;
  for (let u = 0; u < c; u++)
    e.schedule(u * 340, () => {
      const d = n.security.synCookies ? 3 + Math.random() * 2 : 9 + Math.random() * 13;
      n.runtime.cpu = Math.min(100, n.runtime.cpu + d), n.runtime.memory = Math.min(100, n.runtime.memory + d * 0.5);
      const p = 1400 + u * 900 + Math.floor(Math.random() * 300), f = n.runtime.cpu > 70 ? Math.min(98, (n.runtime.cpu - 70) * 3.2) : 0;
      n.runtime.packetsIn += p / 100, n.runtime.packetsDropped += p / 100 * (f / 100), l && e.emit(l, "attack", { label: "SYN" }), s(
        `[syn-flood] ${p} SYN/s   half-open=${Math.round(n.runtime.cpu * 12)}   cpu=${n.runtime.cpu.toFixed(0)}%   drop=${f.toFixed(0)}%`,
        n.runtime.cpu > 90 ? "error" : "warn"
      ), n.runtime.cpu >= 97 && !n.runtime.unresponsive && (n.runtime.unresponsive = !0, s(`[syn-flood] ${n.hostname} STOPPED RESPONDING — accept queue exhausted.`, "error")), r();
    });
  e.schedule(c * 340 + 300, () => {
    n.runtime.unresponsive ? (s("[syn-flood] Outcome: denial of service achieved.", "error"), s("[syn-flood] Mitigate with: SYN cookies, or an ACL dropping the source.", "dim")) : s(`[syn-flood] Outcome: absorbed — peak cpu ${n.runtime.cpu.toFixed(0)}%, service stayed up.`, "success"), n.runtime.underAttack = null, r(), e.schedule(4e3, () => {
      Ql(n), r();
    });
  });
}
function X0({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (h, x) => e.log(Oe, h, x), o = e.getTopology(), i = h0(o, t.id), l = n.role === "host" || n.role === "iot" ? n : o.devices.find((h) => h.id !== t.id && i.has(h.id) && (h.role === "host" || h.role === "iot")), c = o.devices.find(
    (h) => (h.role === "router" || h.role === "l3switch") && K(o, t.id, h.id)
  );
  if (s(`
[arp-spoof] ${t.hostname} poisoning the local segment`, "warn"), !l || !c) {
    s("[arp-spoof] needs a victim host and a router on the same segment.", "error");
    return;
  }
  const u = H(c), d = H(l);
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
  ].forEach(([h, x], j) => e.schedule(j * 420, () => s(h, x))), e.schedule(900, () => {
    l.arp[u] = { mac: p, spoofed: !0, byDeviceId: t.id, age: 0 }, c.arp[d] = { mac: p, spoofed: !0, byDeviceId: t.id, age: 0 }, l.runtime.underAttack = "mitm", s(`[arp-spoof] ✓ caches poisoned — ${l.hostname} ⇄ ${c.hostname} now transits ${t.hostname}`, "error"), s('[arp-spoof] Inspect with "show arp" (IOS) or "ip neigh" (Linux): duplicate MAC.', "dim"), r();
  }), e.schedule(1500, () => {
    const h = e.adjudicate(l, u);
    h.path && e.emit(h.path, "attack", { label: "intercepted" }), h.viaSpoof && (s(`[arp-spoof] captured from ${l.hostname}: GET /login  user=student  pass=••••••`, "error"), s("[arp-spoof] Mitigate with: Dynamic ARP Inspection, or static ARP entries.", "dim")), r();
  });
}
function J0({ engine: e, attacker: t, target: n, commit: r, payload: s }) {
  const o = (c, u) => e.log(Oe, c, u), i = H(n) || n.hostname;
  if (o(`
[sqli] ${t.hostname} → http://${i}/search`, "warn"), !n.services.http || !n.database) {
    o("[sqli] target is not running the simulated web application.", "error");
    return;
  }
  o(`[sqli] input: ${s}`, "dim");
  const l = K(e.getTopology(), t.id, n.id);
  l && e.emit(l, "attack", { label: "POST" }), e.schedule(600, () => {
    const c = Dh(n, s);
    o(`[sqli] HTTP ${c.status}`, c.vulnerable ? "error" : "success"), c.signatures.length && o(`[sqli] signatures matched: ${c.signatures.join("; ")}`, "dim");
    for (const u of c.lines) o(`[sqli] ${u}`, c.vulnerable ? "warn" : "dim");
    c.flag && (n.runtime.compromised = !0, o(`[sqli] EXFILTRATED → ${c.flag}`, "error"), o("[sqli] Mitigate with: parameterised queries (Services → Input sanitisation).", "dim")), c.blocked && o("[sqli] Outcome: injection blocked by parameter binding. Defence works.", "success"), r();
  });
}
function ex({ engine: e, attacker: t, commit: n }) {
  const r = (d, p) => e.log(Oe, d, p), s = e.getTopology();
  if (r(`
[wifi] ${t.hostname}: putting wlan0 into monitor mode`, "warn"), !t.radio) {
    r("[wifi] this device has no radio.", "error");
    return;
  }
  t.radio.monitorMode = !0, t.capturing = !0, n();
  const o = Sr(s).filter((d) => d.id !== t.id).map((d) => ({ ap: d, dbm: Zl(t, d) })).filter(({ dbm: d }) => d !== null).sort((d, p) => p.dbm - d.dbm);
  if (!o.length) {
    r("[wifi] no access points within range. Move the node closer to an AP.", "error");
    return;
  }
  r("[wifi] airodump — BSSIDs in range:", "dim"), r("       BSSID              PWR  CH  ENC    ESSID", "dim");
  for (const { ap: d, dbm: p } of o) {
    const f = ue[d.ap.security] ? d.ap.security.toUpperCase() : "OPEN";
    r(
      `       ${$t(`${d.id}:0`)}  ${String(p).padStart(4)}  ${String(d.ap.channel).padStart(2)}  ${f.padEnd(6)} ${d.ap.ssid}`,
      f === "OPEN" ? "error" : "info"
    );
  }
  const l = [...hn(s).entries()].map(([d, p]) => ({ client: s.devices.find((f) => f.id === d), a: p })).filter(({ client: d }) => d && d.id !== t.id).filter(({ client: d }) => hs(t, d) <= (t.radio.range || Rn));
  r(`[wifi] ${l.length} associated station(s) in range`, "dim");
  for (const { client: d, a: p } of l)
    r(`       ${$t(`${d.id}:0`)}  ${d.hostname} → ${p.ssid} (${p.dbm} dBm, ${Lh(p.dbm)}/4)`, "dim");
  if (!l.length) {
    r("[wifi] capturing, but no stations are talking. Generate traffic from a client.", "warn");
    return;
  }
  const c = s.devices.filter((d) => d.services.http || d.services.dns || d.services.mqtt);
  let u = 0;
  for (const { client: d, a: p } of l) {
    const f = c.find((x) => K(s, d.id, x.id));
    if (!f) continue;
    const h = K(s, d.id, f.id);
    !ue[p.security] || ue[p.security].encrypted, e.schedule(u++ * 420, () => {
      e.emit(h, "dns", { name: "portal.lab.local", txid: 20266 });
    }), e.schedule(u++ * 420, () => {
      e.emit(h, "http", {
        request: "POST /login HTTP/1.1",
        body: `POST /login HTTP/1.1\r
Host: ${f.hostname.toLowerCase()}\r
Content-Type: application/x-www-form-urlencoded\r
\r
username=${d.security.username}&password=${d.security.password}`
      });
    });
  }
  e.schedule(u * 420 + 500, () => {
    const d = e.capture.for(t.id), p = d.filter((x) => !x.encrypted && x.layers.payload && x.layers.payload.text), f = d.filter((x) => x.encrypted);
    r(`[wifi] captured ${d.length} frames — ${p.length} readable, ${f.length} encrypted`, "warn");
    const h = /* @__PURE__ */ new Map();
    for (const x of p) {
      const j = (x.layers.payload.text || "").match(/username=([^&\s]+)&password=([^&\s]+)/);
      j && h.set(`${j[1]}:${j[2]}`, { user: j[1], pass: j[2], from: x.sourceName });
    }
    if (h.size) {
      r(`[wifi] CLEARTEXT CREDENTIALS RECOVERED FROM THE AIR (${h.size})`, "error");
      for (const { user: x, pass: j, from: w } of h.values())
        r(`[wifi]   ${w}: username=${x}  password=${j}`, "error");
      r("[wifi] Mitigate with: WPA2/WPA3 on the SSID, and HTTPS on the application.", "dim");
    } else f.length && (r("[wifi] every payload is CCMP-protected — the capture is unreadable.", "success"), r("[wifi] Headers (MAC addresses, timing, volume) still leak. That is traffic analysis.", "dim"));
    r("[wifi] Open the Packet Capture tab to inspect frames layer by layer.", "dim"), n();
  });
}
function tx({ engine: e, attacker: t, target: n, commit: r }) {
  var p;
  const s = (f, h) => e.log(Oe, f, h), o = e.getTopology(), i = hn(o);
  let l = n;
  if (n.ap) {
    const f = (p = [...i.entries()].find(([, h]) => h.apId === n.id)) == null ? void 0 : p[0];
    l = o.devices.find((h) => h.id === f);
  }
  if (!l || !i.has(l.id)) {
    s(`
[deauth] target is not an associated wireless station.`, "error");
    return;
  }
  const c = i.get(l.id), u = o.devices.find((f) => f.id === c.apId);
  if (s(`
[deauth] ${t.hostname} → ${l.hostname} (assoc. with ${u.hostname}/${c.ssid})`, "warn"), u.security.managementFrameProtection) {
    s("[deauth] AP enforces 802.11w Protected Management Frames.", "dim"), s("[deauth] Forged deauth frames are rejected. Attack defeated.", "success");
    return;
  }
  const d = 5;
  for (let f = 0; f < d; f++)
    e.schedule(f * 260, () => {
      e.recordAir(t, l, "deauth", {
        sn: f,
        ssid: c.ssid,
        bssidDeviceId: u.id,
        plaintext: !0
        // management frames are never encrypted
      }), s(`[deauth] frame ${f + 1}/${d} → ${$t(`${l.id}:0`)} (spoofing ${$t(`${u.id}:0`)})`, "dim");
    });
  e.schedule(d * 260 + 200, () => {
    u.ap.deauthed = u.ap.deauthed || {}, u.ap.deauthed[l.id] = e.clock + 12e3, l.runtime.underAttack = "deauth", s(`[deauth] ${l.hostname} DISASSOCIATED — it drops off the topology for 12s.`, "error"), s("[deauth] Mitigate with: 802.11w Protected Management Frames on the AP.", "dim"), r();
  }), e.schedule(d * 260 + 12500, () => {
    l.runtime.underAttack = null, s(`[deauth] ban lapsed — ${l.hostname} may re-associate.`, "dim"), r();
  });
}
function nx({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (l, c) => e.log(Oe, l, c), o = e.getTopology(), i = n && n.ap ? n : Sr(o).find((l) => l.id !== t.id);
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
    range: Rn,
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
    const c = [...hn(e.getTopology()).entries()].filter(([, u]) => u.apId === t.id);
    if (!c.length) {
      s("[evil-twin] no station switched over.", "success"), s("[evil-twin] Clients that pin an SSID to a known BSSID, or require WPA2, resist this.", "dim"), s("[evil-twin] Tip: deauth a station first — it will re-join the strongest beacon.", "dim"), r();
      return;
    }
    for (const [u] of c) {
      const d = e.getTopology().devices.find((h) => h.id === u);
      if (!d) continue;
      s(`[evil-twin] ${d.hostname} ASSOCIATED TO THE ROGUE AP — traffic now transits ${t.hostname}`, "error"), d.runtime.underAttack = "evil-twin";
      const f = e.getTopology().devices.filter((h) => h.services.http).find((h) => K(e.getTopology(), d.id, h.id));
      if (f) {
        const h = K(e.getTopology(), d.id, f.id);
        e.emit(h, "http", {
          request: "POST /login HTTP/1.1",
          body: `POST /login HTTP/1.1\r
Host: ${f.hostname.toLowerCase()}\r
\r
username=${d.security.username}&password=${d.security.password}`
        });
      }
    }
    s("[evil-twin] Mitigate with: WPA2/WPA3-only client profiles and 802.11w.", "dim"), r();
  });
}
function rx({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (d, p) => e.log(Oe, d, p), o = e.getTopology(), i = H(n) || n.hostname, l = K(o, t.id, n.id);
  if (s(`
[nmap] starting scan against ${i} (${n.hostname})`, "warn"), !l) {
    s("[nmap] host unreachable — no path.", "error");
    return;
  }
  const c = Di(n), u = ["ssh", "ftp", "telnet", "dns", "http", "https", "mqtt", "rtsp", "mysql"];
  u.forEach((d, p) => {
    e.schedule(p * 170, () => {
      const f = ir[d], h = c.includes(d);
      e.emit(l, "tcp", {
        sport: 44e3 + p,
        dport: f ? f.port : 0,
        flags: h ? "SYN, ACK" : "RST, ACK"
      }), h && s(`[nmap] ${String(f.port).padStart(5)}/tcp  open    ${d.padEnd(7)} ${f.label}`, "error");
    });
  }), e.schedule(u.length * 170 + 300, () => {
    const d = u.length - c.filter((p) => u.includes(p)).length;
    s(`[nmap] scan complete — ${c.length} open, ${d} closed/filtered`, "warn"), n.security.lockout && c.includes("ssh") && s("[nmap] SSH exposed — pair with the brute-force exercise.", "dim"), s("[nmap] Mitigate with: stop unused services, or deny the source with an ACL.", "dim"), n.runtime.lastExercise = "port-scan", r();
  });
}
function sx({ engine: e, attacker: t, target: n, commit: r, payload: s }) {
  const o = (p, f) => e.log(Oe, p, f), i = e.getTopology(), l = s || "IT Helpdesk: your mailbox is full, sign in to release held messages";
  if (o(`
[phish] staging a credential-harvest portal on ${t.hostname}`, "warn"), o(`[phish] pretext: "${l}"`, "dim"), o("[phish] the page is a lab-branded clone — it imitates no real organisation.", "dim"), !n || n.role === "attacker") {
    o("[phish] pick a host to send the lure to.", "error");
    return;
  }
  const c = K(i, t.id, n.id);
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
    }), o(`[phish] HARVESTED → ${p.user} / ${p.pass}`, "error"), d ? (o("[phish] replaying the credentials… rejected: a second factor is required.", "success"), o("[phish] Outcome: credentials stolen but unusable. MFA broke the chain.", "warn")) : (n.runtime.compromised = !0, o("[phish] credentials replayed successfully — account takeover.", "error"), o("[phish] Mitigate with: awareness training, and MFA so a stolen password is not enough.", "dim")), r();
  });
}
function ox({ engine: e, attacker: t, target: n, commit: r }) {
  const s = (d, p) => e.log(Oe, d, p), o = e.getTopology(), i = H(n) || n.hostname, l = o.devices.filter(
    (d) => d.id !== n.id && d.id !== t.id && (d.role === "iot" || d.role === "host") && H(d) && K(o, d.id, n.id)
  );
  if (s(`
[ddos] recruiting bots reachable from ${t.hostname}`, "warn"), !l.length) {
    s("[ddos] no recruitable hosts — a distributed flood needs more than one source.", "error"), s("[ddos] Add IoT devices or workstations, then try again.", "dim");
    return;
  }
  for (const d of l)
    s(`[ddos]   + ${d.hostname} (${H(d)})${d.security.password === "admin" ? " — default credentials" : ""}`, "dim");
  s(`[ddos] botnet of ${l.length} — flooding ${i}`, "error"), n.runtime.underAttack = "ddos";
  const c = 8, u = 2400;
  for (let d = 0; d < c; d++)
    e.schedule(d * 320, () => {
      const p = l.filter((x) => e.aclVerdict(
        K(o, x.id, n.id) || [],
        H(x),
        i
      )), f = l.length - p.length, h = n.security.synCookies ? 2 + f * 0.6 : 4 + f * 2.4;
      n.runtime.cpu = Math.min(100, n.runtime.cpu + h), n.runtime.packetsIn += f * u / 100;
      for (const x of l.slice(0, 4)) {
        const j = K(o, x.id, n.id);
        j && e.emit(j, "attack", { label: "flood" });
      }
      s(
        `[ddos] ${f}/${l.length} sources active   ${(f * u).toLocaleString()} pkt/s   cpu=${n.runtime.cpu.toFixed(0)}%`,
        n.runtime.cpu > 90 ? "error" : "warn"
      ), n.runtime.cpu >= 97 && !n.runtime.unresponsive && (n.runtime.unresponsive = !0, s(`[ddos] ${n.hostname} is down — saturated from ${f} sources.`, "error")), r();
    });
  e.schedule(c * 320 + 300, () => {
    n.runtime.unresponsive ? (s("[ddos] Outcome: service unavailable.", "error"), s("[ddos] Blocking one source does nothing — that is what separates DDoS from DoS.", "dim"), s("[ddos] Mitigate upstream: rate limiting, anycast scrubbing, and fixing the bots' default passwords.", "dim")) : s(`[ddos] Outcome: absorbed — peak cpu ${n.runtime.cpu.toFixed(0)}%.`, "success"), n.runtime.underAttack = null, r(), e.schedule(4e3, () => {
      Ql(n), r();
    });
  });
}
const lr = {
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
    run: sx
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
    run: ox
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
    run: Z0
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
    run: Q0
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
    run: X0
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
    run: J0
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
    run: rx
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
    run: ex
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
    run: tx
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
    run: nx
  }
}, ax = [
  "Reconnaissance",
  "Initial Access",
  "Credential Access",
  "Execution",
  "Collection",
  "Impact"
], ix = ["Reconnaissance", "Wireless", "Network", "Credential", "Application"];
function Jn(e, t) {
  const n = lr[e];
  if (!n) throw new Error(`Unknown exercise: ${e}`);
  if (!t.attacker) {
    t.engine.log(Oe, "Select the node the exercise runs from.", "error");
    return;
  }
  if (n.requiresRadio && !t.attacker.radio) {
    t.engine.log(Oe, `${t.attacker.hostname} has no radio — use a Threat Actor or a wireless host.`, "error");
    return;
  }
  const r = n.category === "Wireless";
  if (n.needsTarget !== !1 && !r) {
    if (!t.target) {
      t.engine.log(Oe, "Select a target node.", "error");
      return;
    }
    if (t.attacker.id === t.target.id) {
      t.engine.log(Oe, "Attacker and target must be different nodes.", "error");
      return;
    }
    if (!K(t.engine.getTopology(), t.attacker.id, t.target.id)) {
      t.engine.log(Oe, "No path between attacker and target — connect them first.", "error");
      return;
    }
  }
  const s = t.payload ?? n.defaultPayload ?? "";
  t.target && (t.target.runtime.lastExercise = e), t.attacker.runtime.lastLaunched = e, n.run({ ...t, payload: s });
}
const lx = (e) => $t(`${e.id}:0`);
function cx(e) {
  const t = e.role === "attacker", n = e.cli.sshUser || (t ? "root" : e.security.username), r = e.cli.sshHost || (t ? "kali" : e.hostname.toLowerCase());
  return `${n}@${r}:~${t && !e.cli.sshHost ? "#" : "$"} `;
}
function ux(e, t, n) {
  const { log: r, engine: s, topology: o } = n, i = t.trim();
  if (!i) return;
  const l = i.split(/\s+/), c = l[0].toLowerCase();
  switch (c) {
    case "help":
    case "?":
      return gx(r, e);
    case "ip":
      return l[1] === "a" || l[1] === "addr" || l[1] === "address" ? Cu(e, r) : l[1] === "r" || l[1] === "route" ? dx(e, r) : l[1] === "neigh" ? $u(e, r) : r("Usage: ip {a|route|neigh}", "error");
    case "ifconfig":
      return Cu(e, r);
    case "arp":
      return $u(e, r);
    case "ping": {
      const u = l.find((f, h) => h > 0 && !f.startsWith("-"));
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
      return hx(e, l, n);
    case "exit":
    case "logout":
      e.cli.sshHost && (r(`Connection to ${e.cli.sshHost} closed.`, "dim"), e.cli.sshHost = null, e.cli.sshUser = null, n.commit());
      return;
    case "systemctl":
      return px(e, l, n);
    case "ss":
    case "netstat":
      r("Netid  State   Local Address:Port", "dim");
      for (const u of Di(e)) {
        const d = ir[u];
        r(`tcp    LISTEN  ${H(e) || "0.0.0.0"}:${d ? d.port : "?"}   (${u})`);
      }
      Di(e).length || r("(no services listening)", "dim");
      return;
    case "curl":
    case "wget": {
      const d = (l[1] || "").replace(/^https?:\/\//, "").split("/")[0], p = Xe(o, d);
      if (!p) return r(`${c}: could not resolve host: ${d}`, "error");
      if (!p.services.http) return r(`${c}: connection refused`, "error");
      const f = s.adjudicate(e, d);
      if (!f.ok) return r(`${c}: ${f.reason}`, "error");
      s.emit(f.path, "http"), r("HTTP/1.1 200 OK", "success"), r(`Server: Apache (simulated) on ${p.hostname}`, "dim"), r(`<h1>${p.hostname}</h1><form action="/search">…</form>`, "dim");
      return;
    }
    case "sqlquery": {
      const u = l[1], d = l.slice(2).join(" "), p = Xe(o, u);
      if (!p || !p.database) return r("Usage: sqlquery <web-host> <input>", "error");
      const f = Dh(p, d);
      r(`POST http://${H(p)}/search`, "dim");
      for (const h of f.lines) r(h, f.vulnerable ? "warn" : "success");
      f.flag && r(`exfiltrated: ${f.flag}`, "error"), n.commit();
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
        r("127.0.0.1  localhost", "dim"), r(`${H(e) || "127.0.1.1"}  ${e.hostname.toLowerCase()}`, "dim");
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
      return Pu(e, n);
    case "airmon-ng": {
      if (!e.radio) return r("airmon-ng: no wireless interface.", "error");
      const u = (l[1] || "start") === "start";
      e.radio.monitorMode = u, e.capturing = u || e.capturing, r(`${u ? "Enabling" : "Disabling"} monitor mode on ${e.interfaces[0].name}`, u ? "success" : "warn"), n.commit();
      return;
    }
    case "airodump-ng":
      return e.radio ? e.radio.monitorMode ? Pu(e, n) : r("airodump-ng: interface is not in monitor mode (run airmon-ng start).", "error") : r("airodump-ng: no wireless interface.", "error");
    case "tcpdump":
      return fx(e, l, n);
    case "nmap":
    case "aireplay-ng":
    case "arpspoof":
    case "hydra":
      return e.role !== "attacker" ? r(`${c}: command not found`, "error") : mx(e, c, l, n);
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
function Cu(e, t) {
  e.interfaces.forEach((n, r) => {
    t(`${r + 1}: ${n.name}: <${n.enabled ? "UP,BROADCAST,RUNNING" : "NO-CARRIER,DOWN"}> mtu 1500`, n.enabled ? "success" : "dim"), t(`    link/ether ${n.mac}`, "dim"), n.ip ? t(`    inet ${n.ip}/${Ve(n.mask)} scope global ${n.name}`) : t("    inet (none)", "dim");
  });
}
function dx(e, t) {
  for (const n of e.interfaces)
    n.ip && t(`${n.ip}/${Ve(n.mask)} dev ${n.name} scope link`);
  e.gateway ? t(`default via ${e.gateway} dev ${e.interfaces[0].name}`, "success") : t("(no default route — set a gateway)", "dim");
}
function $u(e, t) {
  const n = Object.entries(e.arp);
  if (!n.length) return t("(neighbour table empty — send traffic first)", "dim");
  for (const [r, s] of n)
    t(
      `${r} dev ${e.interfaces[0].name} lladdr ${s.mac} ${s.spoofed ? "STALE  << duplicate address detected" : "REACHABLE"}`,
      s.spoofed ? "error" : "info"
    );
}
function px(e, t, n) {
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
function hx(e, t, n) {
  const { log: r, engine: s, topology: o } = n, i = t[1];
  if (!i) return r("Usage: ssh [user@]host", "error");
  const [l, c] = i.includes("@") ? i.split("@") : [null, i], u = Xe(o, c);
  if (!u) return r(`ssh: Could not resolve hostname ${c}`, "error");
  const d = s.adjudicate(e, c);
  if (!d.ok) return r(`ssh: connect to host ${c}: ${d.reason}`, "error");
  if (!u.services.ssh) return r(`ssh: connect to host ${c} port 22: Connection refused`, "error");
  if (Hh(u, s.clock))
    return r(`ssh: ${u.hostname} is refusing logins (account locked after repeated failures)`, "error");
  s.emit(d.path, "http", { ssh: !0 });
  const p = l || u.security.username, f = t.indexOf("-p"), h = f > -1 ? t[f + 1] : null;
  if (h !== null && h !== u.security.password) {
    const x = Li(u, s.clock);
    return n.commit(), r(`Permission denied (publickey,password). Failures: ${x.failures}`, "error");
  }
  if (r(`Warning: Permanently added '${c}' (ED25519) to the list of known hosts.`, "dim"), h === null && u.security.password) {
    r(`${p}@${c}'s password:`, "dim"), ms(e, {
      purpose: "login",
      expected: u.security.password,
      onSuccess: (x) => {
        Nn(e, u, "ssh", p), u.banner && x.log(u.banner, "warn"), x.log(`Welcome to ${u.hostname} (simulated). Type "exit" to return.`, "success");
      },
      onFail: (x) => {
        Li(u, s.clock), x.log("Permission denied (publickey,password).", "error");
      }
    }), n.commit();
    return;
  }
  Nn(e, u, "ssh", p), u.banner && r(u.banner, "warn"), r(`Welcome to ${u.hostname} (simulated)`, "success"), r(`Session opened as ${p}. Type "exit" to return to ${e.hostname}.`, "dim"), n.commit();
}
function Pu(e, t) {
  const { log: n, topology: r } = t, s = Rh(r, e);
  if (!s.length) return n("No networks in range.", "dim");
  n("BSSID               PWR  CH  ENC       ESSID", "dim");
  for (const { ap: o, dbm: i } of s) {
    const l = (o.ap.security || "open").toUpperCase();
    n(
      `${lx(o).padEnd(19)} ${String(i).padStart(4)}  ${String(o.ap.channel).padStart(2)}  ${l.padEnd(9)} ${o.ap.ssid}`,
      l === "OPEN" ? "warn" : "info"
    );
  }
  n(`${s.length} network(s). Open networks carry readable payloads.`, "dim");
}
function fx(e, t, n) {
  const { log: r, engine: s } = n;
  e.capturing = !0, n.commit();
  const o = t.indexOf("-c"), i = o > -1 && Number(t[o + 1]) || 10, l = t.filter((u, d) => d > 0 && !u.startsWith("-") && t[d - 1] !== "-c").join(" "), c = s.capture.for(e.id).filter((u) => qh(u, l)).slice(-i);
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
function mx(e, t, n, r) {
  const { log: s, engine: o, topology: i } = r, l = r.commit, c = () => r.focusChannel && r.focusChannel("attack");
  if (t === "nmap") {
    const u = Xe(i, n[n.length - 1]);
    if (!u) return s("nmap: could not resolve target.", "error");
    s(`Starting Nmap against ${n[n.length - 1]} — results in the Cyber Range tab.`, "dim"), c(), Jn("port-scan", { engine: o, attacker: e, target: u, commit: l });
    return;
  }
  if (t === "aireplay-ng") {
    const u = Xe(i, n[n.length - 1]);
    if (!u) return s("aireplay-ng: specify a station, e.g. aireplay-ng --deauth 5 Laptop0", "error");
    s("Sending deauthentication frames — results in the Cyber Range tab.", "dim"), c(), Jn("deauth", { engine: o, attacker: e, target: u, commit: l });
    return;
  }
  if (t === "arpspoof") {
    const u = Xe(i, n[n.length - 1]);
    s("Poisoning the local segment — results in the Cyber Range tab.", "dim"), c(), Jn("arp-spoof", { engine: o, attacker: e, target: u || e, commit: l });
    return;
  }
  if (t === "hydra") {
    const u = Xe(i, n[n.length - 1]);
    if (!u) return s("hydra: could not resolve target.", "error");
    s("Running the credential list — results in the Cyber Range tab.", "dim"), c(), Jn("brute-force", { engine: o, attacker: e, target: u, commit: l });
    return;
  }
}
function gx(e, t) {
  e("Networking:  ip a | ip route | ip neigh | arp | ping HOST | traceroute HOST", "dim"), t && t.radio && e("Wireless:    iwconfig | iwlist scan | airmon-ng start|stop | airodump-ng", "dim"), e("Capture:     tcpdump [-c N] [filter]   e.g. tcpdump -c 20 http", "dim"), t && t.role === "attacker" && e("Offensive:   nmap HOST | aireplay-ng --deauth N STATION | arpspoof HOST | hydra HOST", "dim"), e("Name service: dig NAME | nslookup NAME | dhclient", "dim"), e("Services:    systemctl status|start|stop UNIT | ss", "dim"), e("Remote:      ssh [user@]host [-p PASSWORD] | exit", "dim"), e("Web/DB lab:  curl http://HOST | sqlquery HOST <input>", "dim"), e("Files:       ls | cat flag.txt | cat /etc/passwd | passwd NEW", "dim"), e("Host:        top | uptime | whoami | hostname | clear", "dim");
}
const _i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  execute: ux,
  prompt: cx
}, Symbol.toStringTag, { value: "Module" }));
function xx(e) {
  return `C:\\Users\\${e.security.username}>`;
}
function zo(e) {
  return e.media === "wifi" ? "Wireless LAN adapter Wi-Fi" : e.media === "ethernet" ? `Ethernet adapter ${e.name}` : e.media === "serial" ? `Serial port ${e.name}` : e.media === "usb" ? `USB device ${e.name}` : `Adapter ${e.name}`;
}
function yx(e, t, n) {
  const { log: r, engine: s, topology: o } = n, i = t.trim();
  if (!i) return;
  const l = i.split(/\s+/), c = l[0].toLowerCase(), u = l.filter((p) => p.startsWith("/") || p.startsWith("-")).map((p) => p.toLowerCase()), d = l.slice(1).filter((p) => !p.startsWith("/") && !p.startsWith("-"));
  switch (c) {
    case "help":
    case "?":
      return kx(r);
    case "ipconfig":
      return Eu(e, u, n);
    case "ping": {
      const p = d[0];
      if (!p) return r("Usage: ping [-n count] <destination>", "error");
      const f = l.findIndex((x) => x.toLowerCase() === "-n"), h = f > -1 ? Math.min(10, Number(l[f + 1]) || 4) : 4;
      s.ping(e, p, n.channel, { count: h });
      return;
    }
    case "tracert":
      if (!d[0]) return r("Usage: tracert <destination>", "error");
      r(`Tracing route to ${d[0]} over a maximum of 30 hops`, "info"), r(""), s.traceroute(e, d[0], n.channel);
      return;
    case "nslookup": {
      if (!d[0]) return r("Usage: nslookup <name>", "error");
      const p = o.devices.find((f) => f.services.dns);
      r(`Server:  ${p ? p.hostname : "UnKnown"}`, "dim"), r(`Address:  ${p ? H(p) : "—"}`, "dim"), r(""), s.dnsLookup(e, d[0], n.channel);
      return;
    }
    case "arp":
      return wx(e, u, n);
    case "netstat":
      return vx(e, u, n);
    case "route":
      return (d[0] || "").toLowerCase() === "print" ? bx(e, n) : r("Usage: route print", "error");
    case "getmac":
      r(""), r("Physical Address      Transport Name", "dim"), r("===================   ==========================================", "dim");
      for (const p of e.interfaces.filter((f) => f.media !== "console"))
        r(`${p.mac.replace(/:/g, "-").toUpperCase()}   ${zo(p)}`);
      return;
    case "hostname":
      return r(e.hostname);
    case "systeminfo":
      r(`Host Name:                 ${e.hostname.toUpperCase()}`), r("OS Name:                   NetRange Simulated Windows"), r("OS Version:                10.0 (educational build)"), r(`Logon Server:              \\\\${e.hostname.toUpperCase()}`), r(`Network Card(s):           ${e.interfaces.filter((p) => p.media !== "console").length} NIC(s) Installed.`);
      for (const p of e.interfaces.filter((f) => f.media !== "console"))
        r(`                           ${zo(p)}: ${p.ip || "DHCP / unassigned"}`);
      return;
    case "ipconfig/all":
      return Eu(e, ["/all"], n);
    case "telnet":
      return Tu(e, d, "telnet", n);
    case "ssh":
      return Tu(e, d, "ssh", n);
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
function Eu(e, t, n) {
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
      r(`   DNS Servers . . . . . . . . . . . : ${d ? H(d) : ""}`), c.media === "wifi" && ((l = e.radio) != null && l.ssid) && r(`   SSID. . . . . . . . . . . . . . . : ${e.radio.ssid}`);
    }
    r("");
  }
  o || r("For the full adapter detail, run: ipconfig /all", "dim");
}
function wx(e, t, n) {
  const { log: r } = n, s = Object.entries(e.arp || {});
  if (r(""), r(`Interface: ${H(e) || "0.0.0.0"} --- 0x2`), r("  Internet Address      Physical Address      Type", "dim"), !s.length) {
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
function vx(e, t, n) {
  var l;
  const { log: r } = n, s = t.some((c) => c.includes("n"));
  r(""), r("Active Connections"), r(""), r("  Proto  Local Address          Foreign Address        State", "dim");
  const o = H(e) || "0.0.0.0", i = Object.entries(e.services).filter(([, c]) => c);
  if (!i.length && !((l = e.cli.sessions) != null && l.length)) {
    r("  (no listening services and no open sessions)", "dim");
    return;
  }
  for (const [c] of i) {
    const u = ir[c];
    r(`  TCP    ${`${o}:${u ? u.port : "0"}`.padEnd(23)}${"0.0.0.0:0".padEnd(23)}LISTENING`);
  }
  for (const c of e.cli.sessions || []) {
    const u = c.protocol === "ssh" ? 22 : 23;
    r(`  TCP    ${`${o}:49${u}`.padEnd(23)}${`remote:${u}`.padEnd(23)}ESTABLISHED`);
  }
  s || r("", "dim");
}
function bx(e, t) {
  const { log: n } = t;
  n("==========================================================================="), n("Interface List");
  for (const [s, o] of e.interfaces.filter((i) => i.media !== "console").entries())
    n(` ${String(s + 2).padStart(2)}...${o.mac.replace(/:/g, " ")} ......${zo(o)}`);
  n("==========================================================================="), n(""), n("IPv4 Route Table"), n("==========================================================================="), n("Active Routes:", "dim"), n("Network Destination        Netmask          Gateway       Interface  Metric", "dim");
  const r = H(e);
  e.gateway && n(`          0.0.0.0          0.0.0.0  ${e.gateway.padEnd(15)}${(r || "").padEnd(11)}     25`);
  for (const s of e.interfaces) {
    if (!s.ip) continue;
    const o = Ve(s.mask), i = s.ip.split(".").slice(0, Math.max(1, Math.floor((o || 24) / 8))).join(".");
    n(`${(i + ".0").padStart(17)}  ${s.mask.padEnd(15)}  ${"On-link".padEnd(13)}${s.ip.padEnd(11)}    281`);
  }
  n("==========================================================================="), e.gateway || n("No default route — set a default gateway to leave this subnet.", "warn");
}
function Tu(e, t, n, r) {
  var f;
  const { log: s, engine: o, topology: i } = r, l = t[0];
  if (!l) return s(`Usage: ${n} ${n === "ssh" ? "[user@]host" : "<host>"}`, "error");
  const [c, u] = l.includes("@") ? l.split("@") : [null, l], d = Xe(i, u);
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
    const h = (f = d.lines) == null ? void 0 : f.vty;
    if (h && Array.isArray(h.transport) && !h.transport.includes(n))
      return s(`Connection refused by remote host — vty lines do not permit ${n}.`, "error");
    if (n === "ssh" && !d.cryptoKey)
      return s("Connection refused — no RSA key on the remote device (crypto key generate rsa).", "error");
    if (h != null && h.login && !h.password)
      return s("Password required, but none set — remote refused the connection.", "error");
    if (h != null && h.login && h.password) {
      s(`Connecting To ${u}...`, "dim"), ms(e, {
        purpose: "vty",
        expected: h.password,
        onSuccess: (x) => {
          Nn(e, d, n, c || "student"), x.log(d.banner || "", d.banner ? "warn" : "dim"), x.log(`[Connected to ${d.hostname}]`, "success");
        },
        onFail: (x) => x.log(`[Connection to ${u} closed by remote host]`, "error")
      }), r.commit();
      return;
    }
  } else if (d.security.password) {
    s(`${c || d.security.username}@${u}'s password:`, "dim"), ms(e, {
      purpose: "login",
      expected: d.security.password,
      onSuccess: (h) => {
        Nn(e, d, n, c || d.security.username), h.log(`[Connected to ${d.hostname}]`, "success");
      },
      onFail: (h) => h.log("Permission denied (password).", "error")
    }), r.commit();
    return;
  }
  Nn(e, d, n, c || "student"), d.banner && s(d.banner, "warn"), s(`[Connected to ${d.hostname}] — type exit to return.`, "success"), r.commit();
}
function kx(e) {
  e("Network:     ipconfig [/all] | ping [-n N] host | tracert host | nslookup name"), e("Tables:      arp -a | netstat [-an] | route print | getmac"), e("Remote:      telnet host | ssh [user@]host     (exit to come back)"), e("System:      hostname | systeminfo | dir | cls | echo text");
}
const Sx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  execute: yx,
  prompt: xx
}, Symbol.toStringTag, { value: "Module" })), jx = { ios: Y0, linux: _i, kali: _i, windows: Sx }, Fi = (e) => jx[e == null ? void 0 : e.os] || _i, Nx = /^(exit|logout|quit|disconnect)$/i;
function Zh(e, t, n) {
  var i;
  const { device: r, chain: s } = ra(e, n.topology);
  if ((i = r.cli) != null && i.pending) return O0(r, t, n);
  const o = t.trim();
  if (s.length && Nx.test(o)) {
    if (r.os === "ios" && ["config", "config-if", "config-vlan", "config-line"].includes(r.cli.mode)) return Fi(r).execute(r, t, n);
    const c = R0(e, n.topology);
    n.log(`[Connection to ${(c == null ? void 0 : c.hostname) || "host"} closed]`, "dim"), n.commit();
    return;
  }
  return Fi(r).execute(r, t, n);
}
function Hi(e, t = null) {
  var r;
  const { device: n } = ra(e, t);
  return (r = n.cli) != null && r.pending ? n.cli.pending.prompt || "Password: " : Fi(n).prompt(n);
}
function Iu(e, t = null) {
  var r, s;
  const { device: n } = ra(e, t);
  return !!((s = (r = n.cli) == null ? void 0 : r.pending) != null && s.secret);
}
const Do = 1, Xl = {
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
      const t = Sr(e).some(
        (r) => !ue[r.ap.security] || !ue[r.ap.security].encrypted
      ), n = [...hn(e).values()].some((r) => r.rogue);
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
}, Jl = Object.values(Xl), Cx = ["social-foothold", "insider-control"];
function Qh(e) {
  return typeof btoa == "function" ? btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (t, n) => String.fromCharCode(parseInt(n, 16)))) : Buffer.from(e, "utf8").toString("base64");
}
function $x(e) {
  return typeof atob == "function" ? decodeURIComponent(
    atob(e).split("").map((t) => `%${t.charCodeAt(0).toString(16).padStart(2, "0")}`).join("")
  ) : Buffer.from(e, "base64").toString("utf8");
}
function ec(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t ^= e.charCodeAt(n), t = t * 16777619 >>> 0;
  return t.toString(36).toUpperCase().padStart(7, "0").slice(0, 7);
}
function Px(e, { name: t, author: n, objectives: r, minutes: s = 20, scenarioId: o = null, setupMinutes: i = null } = {}) {
  var f;
  const l = (e.personnel || []).length > 0, c = (r && r.length ? r : Jl.map((h) => h.id)).filter((h) => Xl[h]).filter((h) => l || !Cx.includes(h)), u = JSON.parse(JSON.stringify({
    devices: e.devices,
    links: e.links,
    zones: e.zones || [],
    // The technicians travel with the network. Their transcripts do not: red
    // starts the conversation themselves, with a clean slate of suspicion.
    personnel: (e.personnel || []).map((h) => ({
      ...h,
      suspicion: 0,
      reported: !1,
      transcript: [],
      granted: []
    }))
  }));
  for (const h of u.devices) {
    h.runtime = {
      cpu: 2,
      memory: 14,
      packetsIn: 0,
      packetsOut: 0,
      packetsDropped: 0,
      sessions: 0,
      compromised: !1,
      unresponsive: !1,
      underAttack: null
    }, h.cli = { mode: "user", ifaceCursor: null, saved: ((f = h.cli) == null ? void 0 : f.saved) ?? !1, sessions: [], pending: null }, h.capturing = !1;
    for (const x of Object.keys(h.arp || {})) h.arp[x].spoofed && delete h.arp[x];
    h.ap && (h.ap.deauthed = {}), h.ap && delete h.ap.rogue;
  }
  const d = {
    v: Do,
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
  return `NRC1.${ec(p)}.${Qh(p)}`;
}
function Ex(e) {
  const t = String(e || "").trim().replace(/\s+/g, "");
  if (!t) return { ok: !1, reason: "Paste a challenge code first." };
  const n = t.split(".");
  if (n.length !== 3 || n[0] !== "NRC1")
    return { ok: !1, reason: "That does not look like a challenge code — it should start with NRC1." };
  let r;
  try {
    r = $x(n[2]);
  } catch {
    return { ok: !1, reason: "The code is damaged and could not be decoded." };
  }
  if (ec(r) !== n[1])
    return { ok: !1, reason: "Checksum does not match — the code was truncated or edited in transit." };
  let s;
  try {
    s = JSON.parse(r);
  } catch {
    return { ok: !1, reason: "The code decoded but did not contain a readable challenge." };
  }
  return s.v !== Do ? { ok: !1, reason: `This code is version ${s.v}; this build reads version ${Do}.` } : !s.topology || !Array.isArray(s.topology.devices) ? { ok: !1, reason: "The challenge has no topology in it." } : { ok: !0, challenge: s };
}
function Tx(e, t, n) {
  var c;
  const r = (c = e == null ? void 0 : e.objectives) != null && c.length ? e.objectives : Jl.map((u) => u.id), s = { topology: t, engine: n }, o = r.map((u) => {
    const d = Xl[u];
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
function Ix(e, t, { team: n = "Red team", elapsedSeconds: r = 0 } = {}) {
  const s = {
    v: Do,
    challenge: (e == null ? void 0 : e.name) || "Unnamed challenge",
    team: n,
    elapsedSeconds: r,
    red: t.red,
    blue: t.blue,
    total: t.total,
    captured: t.results.filter((i) => i.captured).map((i) => i.id),
    at: (/* @__PURE__ */ new Date()).toISOString()
  }, o = JSON.stringify(s);
  return `NRR1.${ec(o)}.${Qh(o)}`;
}
function Ax(e) {
  const t = [], n = (o, i, l) => t.push({ severity: o, device: i, text: l });
  for (const o of e.devices) {
    if (o.role === "attacker") continue;
    const i = o.hostname;
    if (Object.values(o.services).some(Boolean) && ((!o.security.password || o.security.password.length < 10) && n("high", i, "Password is short enough to be guessed by the demo wordlist."), o.security.maxAuthTries === 0 && n("medium", i, "No limit on authentication attempts.")), o.services.http && !o.security.inputSanitised && o.database && n("high", i, "Web application accepts unsanitised input — the database is reachable through it."), o.services.telnet && n("medium", i, "Telnet is enabled; it carries credentials in clear."), (o.services.http || o.services.ssh) && !o.security.synCookies && n("low", i, "No SYN cookies — a flood can exhaust the accept queue."), o.role === "host" && !o.security.awarenessTraining && n("medium", i, "User has had no awareness training; a phishing lure will be opened."), o.role === "host" && !o.security.mfa && n("low", i, "No MFA, so a stolen password is enough on its own."), o.role === "host" && !o.security.callbackVerification && n("medium", i, "No callback policy — a caller claiming to be IT will be believed."), o.ap) {
      const l = ue[o.ap.security];
      (!l || !l.encrypted) && n("high", i, `SSID "${o.ap.ssid}" is open — everything in range is readable.`), o.security.managementFrameProtection || n("medium", i, "Management frames unprotected; clients can be deauthenticated.");
    }
    (o.role === "router" || o.role === "l3switch") && !o.security.dynamicArpInspection && n("medium", i, "No Dynamic ARP Inspection — the segment can be put on-path.");
  }
  const r = { high: 3, medium: 2, low: 1 }, s = Math.max(0, 100 - t.reduce((o, i) => o + r[i.severity] * 6, 0));
  return { findings: t, score: s };
}
const Bi = {
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
    objectives: Jl.map((e) => e.id)
  }
}, Mx = Object.values(Bi), ro = (e) => Bi[e] || Bi["small-office"];
function zx(e, t = []) {
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
function Dx(e, t) {
  const n = zx(e, t.roster), r = Ax(e), s = [];
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
function tc(e) {
  return JSON.stringify({
    security: e.security,
    services: e.services,
    acl: e.acl,
    lines: e.lines,
    enableSecret: e.enableSecret,
    ap: e.ap ? { security: e.ap.security, passphrase: e.ap.passphrase, enabled: e.ap.enabled } : null
  });
}
function Au(e) {
  const t = {};
  for (const n of e.devices) t[n.id] = tc(n);
  return t;
}
function Lx(e, t, n) {
  if (!t) return t;
  const r = e.devices.find((s) => s.id === n);
  return r && (t[r.id] = tc(r)), t;
}
function Rx(e, t) {
  if (!t) return [];
  const n = [];
  for (const r of e.devices) {
    const s = t[r.id];
    if (!s || tc(r) === s) continue;
    const o = JSON.parse(s);
    r.security = { ...o.security, lockout: r.security.lockout }, r.services = { ...o.services }, r.acl = JSON.parse(JSON.stringify(o.acl)), r.lines = JSON.parse(JSON.stringify(o.lines)), r.enableSecret = o.enableSecret, r.ap && o.ap && Object.assign(r.ap, o.ap), n.push(r.hostname);
  }
  return n;
}
const Mn = {
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
}, Ox = Object.values(Mn), sa = {
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
}, _x = Object.values(sa), gs = {
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
let Mu = 0;
function zu(e, { name: t, areaZoneId: n = null } = {}) {
  const r = gs[e] || gs.junior;
  return Mu += 1, {
    id: `p${Mu}${Math.random().toString(36).slice(2, 6)}`,
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
function Fx(e, t) {
  if (!(t != null && t.areaZoneId)) return e.devices;
  const n = (e.zones || []).find((r) => r.id === t.areaZoneId);
  return n ? e.devices.filter(
    (r) => r.x >= n.x && r.x <= n.x + n.w && r.y >= n.y && r.y <= n.y + n.h
  ) : e.devices;
}
function Hx(e, t) {
  var r, s;
  const n = String(t || "").trim().toLowerCase();
  if (!n) return { ok: !1, kind: null, note: "No detail offered — the pretext is bare assertion." };
  for (const o of e.devices) {
    if (o.hostname.toLowerCase() === n)
      return { ok: !0, kind: "hostname", note: `"${o.hostname}" is a real host here.` };
    if (H(o) && H(o) === n)
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
function Oa(e, t) {
  const n = e.filter((r) => r.role === "host" || r.role === "iot");
  return n.length ? n.filter((r) => {
    var s;
    return (s = r.security) == null ? void 0 : s[t];
  }).length / n.length : 0;
}
function Bx(e, { tactic: t, ask: n, claim: r, topology: s, caller: o = "Jordan Ellis", colleague: i = "Dave" }) {
  const l = gs[e.roleId], c = Mn[t], u = sa[n];
  if (!l || !c || !u)
    return { ok: !1, refused: !0, reported: !1, reply: "…sorry, what are you asking for?", factors: [], score: 0, threshold: 0, debrief: "", effect: null };
  const d = Fx(s, e), p = Oa(d, "awarenessTraining"), f = Oa(d, "callbackVerification"), h = Oa(d, "mfa"), x = Hx(s, r), j = [
    { label: `${c.label} pretext`, value: c.pressure },
    { label: x.ok ? `Detail checks out (${x.kind})` : "Detail does not check out", value: x.ok ? 3 : -3 },
    { label: `"${u.label}" is a ${u.sensitivity === 0 ? "small" : u.sensitivity >= 3 ? "serious" : "significant"} ask`, value: -u.sensitivity }
  ];
  e.granted.length && j.push({ label: "They have already helped once", value: 3 });
  const w = j.reduce((ee, te) => ee + te.value, 0), m = [
    { label: `${l.label} baseline against ${c.label.toLowerCase()}`, value: l.resistance[t] },
    { label: "Awareness training in this area", value: Math.round(p * 3) },
    { label: "Suspicion already raised", value: Math.round(e.suspicion * 0.8) }
  ], g = c.defeatedBy === "callbackVerification" && f >= 0.5;
  g && m.push({ label: "Callback verification is policy here", value: 99 });
  const v = m.reduce((ee, te) => ee + te.value, 0), b = w >= v, $ = u.needsSupervisor && !l.supervisor, y = b && !$;
  let C = 0;
  x.ok || (C += 2), u.sensitivity >= 3 && (C += 1), y || (C += 1);
  const E = e.suspicion + C, B = E >= l.suspicionLimit && !e.reported;
  let z;
  g ? z = l.id === "junior" ? "I do want to help, but we have to call back on the directory number now. What extension are you on?" : "Policy is a callback on a directory number before anything like that. Give me your extension and I will ring you." : $ ? z = "I do not have the rights to do that — you would need someone with a supervisor account." : y ? z = l.id === "junior" ? Ux(u, x) : Wx(u, x) : z = l.id === "junior" ? Vx(c, x, E, l) : qx(c, x), B && (z += l.id === "junior" ? " …actually, I am going to flag this with my supervisor." : " I am logging this contact and notifying the security team.");
  const q = y ? Gx(u, d) : null;
  return {
    ok: y,
    refused: !y,
    reported: B,
    reply: z,
    factors: [...j, ...m.map((ee) => ({ ...ee, value: -ee.value }))],
    score: w,
    threshold: v,
    suspicionDelta: C,
    debrief: Kx({ t: c, a: u, ok: y, corr: x, callbackBlocks: g, training: p, mfa: h, role: l }),
    effect: q
  };
}
function Xh(e) {
  return /^[aeiou]/i.test(String(e)) ? "an" : "a";
}
function Ux(e, t) {
  const n = t.ok ? "Oh — yes, I know the one. " : "Um, okay. ";
  return {
    "confirm-username": `${n}The account on that box is the standard one, I can read it out.`,
    "reset-password": `${n}I can set that for you now. Give me the password you want on it.`,
    "read-mfa": `${n}The code on my authenticator right now is 418 992.`,
    "disable-control": `${n}I will switch it off, just tell me when I can put it back.`
  }[e.id];
}
function Wx(e, t) {
  const n = t.ok ? "That tallies with what I have here. " : "";
  return {
    "confirm-username": `${n}I can confirm the account name, that is not sensitive.`,
    "reset-password": `${n}Against my better judgement — I will reset it and note it in the ticket.`,
    "read-mfa": `${n}I will read it once, and I am changing it straight after.`,
    "disable-control": `${n}Ten minutes, and I am turning it back on myself.`
  }[e.id];
}
function Vx(e, t, n, r) {
  return t.ok ? n >= r.suspicionLimit - 1 ? "This does not feel right. Can I take your name and call you back?" : "I do not think I am supposed to do that one. Could you raise a ticket?" : "Sorry — I cannot find that on our system. Are you sure you have the right site?";
}
function qx(e, t) {
  return t.ok ? "No. That goes through change control, whoever is asking." : "That does not match anything here, and I am not going to guess. Raise it through the service desk.";
}
function Gx(e, t) {
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
function Kx({ t: e, a: t, ok: n, corr: r, callbackBlocks: s, training: o, mfa: i, role: l }) {
  if (s)
    return `Blocked by callback verification. ${e.defeatNote}`;
  if (n) {
    const c = r.ok ? "the detail you quoted was real, which is what made the pretext credible" : "the pretext alone carried it", u = t.id === "reset-password" && i >= 0.5 ? " MFA still stands between that password and the account." : t.id === "disable-control" ? " Least privilege would have limited what this account could switch off." : "", d = e.label.toLowerCase();
    return `${l.label} complied under ${Xh(d)} ${d} pretext — ${c}.${u}`;
  }
  return r.ok ? o >= 0.5 ? `Refused. Awareness training is doing the work here: ${e.defeatNote}` : "Refused — the ask was too large for the pressure applied. A smaller request first often makes the next one land." : "Refused: the detail did not check out. Reconnaissance first — a pretext built on something real is far harder to refuse.";
}
function Yx(e, t) {
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
const Du = 50, Zx = "netrange.theme", Jh = "netrange.settings";
function Qx() {
  const e = { theme: "dark", speed: 1, sound: !1, showGrid: !0, showLabels: !0, ambient: !0 };
  try {
    const t = localStorage.getItem(Jh);
    return t ? { ...e, ...JSON.parse(t) } : e;
  } catch {
    return e;
  }
}
function Xx(e) {
  try {
    localStorage.setItem(Jh, JSON.stringify(e)), localStorage.setItem(Zx, e.theme);
  } catch {
  }
}
function Jx(e, t, n, r = 96) {
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
function ey(e) {
  const t = document.documentElement;
  e === "light" ? t.setAttribute("data-theme", "light") : t.setAttribute("data-theme", "dark");
}
const k = V1((e, t) => {
  const n = Qx(), r = new E0({
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
    labId: L0,
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
        past: [...o.past.slice(-Du + 1), s],
        future: []
      }));
    },
    undo: () => {
      const { past: s, future: o, topology: i } = t();
      if (!s.length) return;
      const l = s[s.length - 1];
      e({
        past: s.slice(0, -1),
        future: [JSON.stringify(i), ...o].slice(0, Du),
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
      const { posture: s, challengePhase: o, topology: i } = t();
      if (s && o === "breach") {
        const l = Rx(i, s);
        l.length && t().log(
          "system",
          `Defences are locked for this round — reverted changes on ${l.join(", ")}.`,
          "warn"
        );
      }
      e((l) => ({ rev: l.rev + 1 })), t().graded && t().grade({ silent: !0 });
    },
    /* --------------------------------------------------------- devices */
    addDevice: (s, o, i) => {
      if (!An[s]) return null;
      t().pushHistory();
      const { topology: l } = t(), c = Jx(l.devices, o, i), u = wu(s, Math.round(c.x), Math.round(c.y), l.devices);
      return l.devices.push(u), e({ selectedId: u.id }), t().log("system", `Placed ${u.hostname} (${An[s].label})`, "dim"), t().commit(), u;
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
      const { topology: i } = t(), l = wu(o.typeId, o.x + 70, o.y + 50, i.devices);
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
        ...c.map((w) => ({ x: w.x, y: w.y, w: 40, h: 32 })),
        ...(u || []).map((w) => ({ x: w.x + w.w / 2, y: w.y + w.h / 2, w: w.w / 2, h: w.h / 2 }))
      ];
      if (!d.length || !s || !o) {
        t().resetView();
        return;
      }
      const p = Math.min(...d.map((w) => w.x - w.w)), f = Math.max(...d.map((w) => w.x + w.w)), h = Math.min(...d.map((w) => w.y - w.h)), x = Math.max(...d.map((w) => w.y + w.h)), j = Math.max(0.25, Math.min(2, Math.min(
        (s - i * 2) / Math.max(1, f - p),
        (o - i * 2) / Math.max(1, x - h)
      )));
      e({
        viewport: {
          zoom: j,
          x: s / 2 - (p + f) / 2 * j,
          y: o / 2 - (h + x) / 2 * j
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
      const u = ro(s), d = o ?? u.setupMinutes, p = i ?? u.breachMinutes;
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
      return s ? Dx(t().topology, s) : null;
    },
    /** Lock the build and produce the code to hand over. */
    armChallenge: () => {
      const { topology: s, challengeScenario: o, challengeBreachMinutes: i, challengeSetupMinutes: l } = t(), c = o || ro(null), u = Px(s, {
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
        posture: Au(s)
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
      const o = Ex(s);
      if (!o.ok)
        return t().log("system", `Challenge: ${o.reason}`, "error"), o;
      t().pushHistory();
      const i = o.challenge.minutes || 15;
      return e({
        topology: o.challenge.topology,
        challenge: o.challenge,
        challengeRole: "red",
        challengePhase: "breach",
        challengeScenario: o.challenge.scenarioId ? ro(o.challenge.scenarioId) : null,
        challengeBreachMinutes: i,
        challengeStartedAt: Date.now(),
        challengeDeadline: Date.now() + i * 6e4,
        // Freeze what blue left, so red cannot weaken it from their own copy.
        posture: Au(o.challenge.topology),
        selectedId: null,
        selectedLinkId: null
      }), t().engine.reset(), t().engine.capture.clear(), t().log("system", `Challenge loaded: "${o.challenge.name}" by ${o.challenge.author}.`, "success"), t().log("system", `${o.challenge.objectives.length} objectives, ${o.challenge.minutes} minutes.`, "dim"), t().commit(), o;
    },
    /** Live score for the loaded challenge, or null when none is loaded. */
    challengeScore: () => {
      const { challenge: s, topology: o, engine: i } = t();
      return s ? Tx(s, o, i) : null;
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
        zu("senior", { areaZoneId: ((l = i[0]) == null ? void 0 : l.id) || null }),
        zu("junior", { areaZoneId: ((c = i[1]) == null ? void 0 : c.id) || ((u = i[0]) == null ? void 0 : u.id) || null })
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
      var h;
      const { topology: c, posture: u } = t(), d = (c.personnel || []).find((x) => x.id === s);
      if (!d) return null;
      if (d.reported)
        return { ok: !1, reply: "The line rings out. This one has stopped taking your calls.", blocked: !0 };
      const p = Mn[o], f = Bx(d, { tactic: o, ask: i, claim: l, topology: c });
      if (d.transcript.push({
        who: "red",
        tactic: o,
        ask: i,
        claim: l,
        text: ((p == null ? void 0 : p.opener) || "").replace("{caller}", "Jordan Ellis").replace("{colleague}", "Dave")
      }), d.transcript.push({ who: "tech", text: f.reply, ok: f.ok, debrief: f.debrief }), d.suspicion += f.suspicionDelta, f.reported && (d.reported = !0), f.ok) {
        d.granted.includes(i) || d.granted.push(i);
        const x = Yx(c, f.effect);
        x && (t().log("attack", `[social] ${x}`, "warn"), u && ((h = f.effect) != null && h.deviceId) && Lx(c, u, f.effect.deviceId));
        const j = Mn[o].label.toLowerCase();
        t().log("attack", `[social] ${d.name} complied — ${Xh(j)} ${j} pretext.`, "error");
      } else
        t().log("attack", `[social] ${d.name} refused. ${f.debrief}`, "dim");
      return f.reported && t().log("system", `${d.name} has reported the contact to the security team.`, "warn"), t().commit(), f;
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
      t().openDeviceConsole(s), t().log(l, Hi(i, t().topology) + o, "info"), Zh(i, o, {
        engine: t().engine,
        topology: t().topology,
        channel: l,
        log: (c, u = "info") => t().log(l, c, u),
        commit: () => t().commit(),
        clearConsole: () => t().clearConsole(l)
      }), t().commit();
    },
    cableClick: (s) => {
      const { pendingCableFrom: o, topology: i, cableType: l } = t(), c = i.devices.find((p) => p.id === s);
      if (!c) return;
      const u = Bh(c, l), d = u.filter((p) => !p.disabled);
      if (d.length === 0) {
        const p = u.length ? "no free port takes that cable — try another cable or free a port" : "this device has no ports";
        t().log("system", `${c.hostname}: ${p}.`, "error");
        return;
      }
      if (c.interfaces.length === 1) {
        t().choosePort(s, d[0].port.name);
        return;
      }
      e({ portPicker: { deviceId: s, end: o ? "b" : "a", options: u } });
    },
    /** Second half of the gesture: a port was picked (or auto-picked). */
    choosePort: (s, o) => {
      const { pendingCableFrom: i, pendingCablePort: l, topology: c, cableType: u } = t();
      if (e({ portPicker: null }), !i) {
        const d = c.devices.find((p) => p.id === s);
        e({ pendingCableFrom: s, pendingCablePort: o, selectedId: s }), t().log(
          "system",
          `${Ce[u].label}: ${d == null ? void 0 : d.hostname} ${o} — now click the far end.`,
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
      const { topology: u } = t(), d = u.devices.find((w) => w.id === s), p = u.devices.find((w) => w.id === o);
      if (!d || !p) return;
      const f = l ? Ri(d, l) : vu(d, i)[0], h = c ? Ri(p, c) : vu(p, i)[0];
      if (!f || !h) {
        const w = f ? p : d;
        t().log(
          "system",
          `Cannot connect: ${w.hostname} has no free ${Ce[i].short} port.`,
          "error"
        );
        return;
      }
      const x = G1(i, d, p, f, h);
      if (!x.ok && x.fatal) {
        t().log("system", `Cannot connect: ${x.reason}`, "error");
        return;
      }
      t().pushHistory();
      const j = {
        id: `l${Math.random().toString(36).slice(2, 9)}`,
        a: s,
        aPort: f.name,
        b: o,
        bPort: h.name,
        cableType: i,
        down: !x.ok,
        reason: x.ok ? "" : x.reason
      };
      u.links.push(j), f.link = j.id, h.link = j.id, x.ok ? (f.enabled = !0, h.enabled = !0, t().log(
        "system",
        `${d.hostname} ${f.name} ⇄ ${p.hostname} ${h.name} — link up (${Ce[i].short})`,
        "success"
      )) : t().log(
        "system",
        `${d.hostname} ${f.name} ⇄ ${p.hostname} ${h.name} — LINK DOWN: ${x.reason}`,
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
      e({ settings: o }), Xx(o), s.theme && ey(o.theme), s.speed !== void 0 && t().engine.setSpeed(o.speed), s.ambient !== void 0 && t().engine.setAmbient(o.ambient);
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
      const o = Xn(t().labId), i = I0(o, t().topology, t().engine);
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
        Ql(s), s.runtime.compromised = !1, s.security.lockout = { failures: 0, lockedUntil: 0, locked: !1 };
        for (const o of Object.keys(s.arp)) s.arp[o].spoofed && delete s.arp[o];
      }
      t().log("system", "All nodes recovered; ARP caches flushed.", "success"), t().commit();
    },
    /* ------------------------------------------------------ demo scenario */
    loadStarterTopology: () => {
      const { addDevice: s, connect: o, topology: i } = t();
      if (i.devices.length) return;
      const l = s("router", 430, 90), c = s("switch", 430, 210), u = s("pc", 250, 330), d = s("webserver", 620, 330), p = s("accesspoint", 430, 420), f = s("laptop", 300, 520), h = s("camera", 520, 545), x = s("threatactor", 615, 470), j = (w, m) => {
        w.interfaces[0].ip = m, w.interfaces[0].mask = "255.255.255.0", w.interfaces[0].enabled = !0, w.gateway = "192.168.10.1";
      };
      j(l, "192.168.10.1"), l.gateway = "", j(u, "192.168.10.20"), j(d, "192.168.10.80"), j(p, "192.168.10.2"), j(f, "192.168.10.50"), j(h, "192.168.10.51"), j(x, "192.168.10.66"), f.security.username = "student", f.security.password = "Autumn2026", o(l.id, c.id, "straight"), o(c.id, u.id, "straight"), o(c.id, d.id, "straight"), o(c.id, p.id, "straight"), t().ensureConsole("attack", "Cyber Range"), t().ensureConsole("capture", "Packet Capture"), t().log(
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
function ty({ onTogglePalette: e, onToggleLab: t, onOpenAttack: n, onOpenSettings: r, onOpenSubnet: s, onOpenSocial: o, paletteOpen: i, labOpen: l }) {
  const c = k((A) => A.tool), u = k((A) => A.setTool), d = k((A) => A.undo), p = k((A) => A.redo), f = k((A) => A.past.length > 0), h = k((A) => A.future.length > 0), x = k((A) => A.toggleRunning), j = k((A) => A.recoverAll), w = k((A) => A.exportState), m = k((A) => A.importState), g = k((A) => A.engine), v = k((A) => A.setSimMode), b = k((A) => A.toggleTheme), $ = k((A) => A.addZone), y = k((A) => A.openChallenge), C = k((A) => A.challengePhase), E = k((A) => A.challengeDeadline), B = k((A) => A.tickChallenge), [z, q] = Kr.useState(Date.now());
  Kr.useEffect(() => {
    if (C === "idle") return;
    const A = setInterval(() => {
      q(Date.now()), B();
    }, 1e3);
    return () => clearInterval(A);
  }, [C, B]);
  const ee = k((A) => A.settings.theme), te = k((A) => A.stepPdu);
  k((A) => A.rev);
  const I = k((A) => A.topology.devices.length), be = k((A) => (A.topology.personnel || []).length), ke = g.running, Q = g.mode, D = g.queuedPdu, N = () => {
    const A = new Blob([w()], { type: "application/json" }), J = URL.createObjectURL(A), ie = document.createElement("a");
    ie.href = J, ie.download = "netrange-topology.json", ie.click(), URL.revokeObjectURL(J);
  }, F = () => {
    const A = document.createElement("input");
    A.type = "file", A.accept = "application/json", A.onchange = () => {
      var Be;
      const J = (Be = A.files) == null ? void 0 : Be[0];
      if (!J) return;
      const ie = new FileReader();
      ie.onload = () => m(String(ie.result)), ie.readAsText(J);
    }, A.click();
  };
  return /* @__PURE__ */ a.jsxs("header", { className: "flex flex-wrap items-center gap-2 border-b border-line bg-panel px-3 py-2", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "mr-1 flex items-center gap-2", children: [
      /* @__PURE__ */ a.jsx(
        "span",
        {
          className: "grid h-7 w-7 place-items-center rounded-lg text-white",
          style: { background: "conic-gradient(from 210deg, rgb(var(--nr-accent)), rgb(var(--nr-up)), rgb(var(--nr-accent)))" },
          children: /* @__PURE__ */ a.jsx(ps, { size: 15 })
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "leading-tight", children: [
        /* @__PURE__ */ a.jsx("div", { className: "text-[13px] font-bold", children: "NetRange Lab" }),
        /* @__PURE__ */ a.jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-soft", children: "Simulated · offline" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex gap-1 rounded-xl border border-line bg-panel2 p-0.5", children: [
      /* @__PURE__ */ a.jsxs(O, { variant: c === "select" ? "active" : "ghost", size: "sm", onClick: () => u("select"), title: "Select / move (V)", children: [
        /* @__PURE__ */ a.jsx(s1, { size: 14 }),
        " Select"
      ] }),
      /* @__PURE__ */ a.jsxs(O, { variant: c === "cable" ? "active" : "ghost", size: "sm", onClick: () => u("cable"), title: "Cable (C)", children: [
        /* @__PURE__ */ a.jsx(Hg, { size: 14 }),
        " Cable"
      ] }),
      /* @__PURE__ */ a.jsx(O, { variant: c === "delete" ? "active" : "ghost", size: "sm", onClick: () => u("delete"), title: "Delete", children: /* @__PURE__ */ a.jsx(jt, { size: 14 }) }),
      /* @__PURE__ */ a.jsx(
        O,
        {
          variant: c === "pdu" ? "active" : "ghost",
          size: "sm",
          onClick: () => u("pdu"),
          title: "Simple PDU — click a sender, then a receiver (P)",
          children: /* @__PURE__ */ a.jsx(Bl, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex gap-1 rounded-xl border border-line bg-panel2 p-0.5", children: [
      /* @__PURE__ */ a.jsx(
        O,
        {
          variant: Q === "realtime" ? "active" : "ghost",
          size: "sm",
          onClick: () => v("realtime"),
          title: "Transmissions play out immediately",
          children: "Realtime"
        }
      ),
      /* @__PURE__ */ a.jsx(
        O,
        {
          variant: Q === "simulation" ? "active" : "ghost",
          size: "sm",
          onClick: () => v("simulation"),
          title: "Queue every hop so you can step through it and inspect each PDU",
          children: "Simulation"
        }
      )
    ] }),
    Q === "simulation" && /* @__PURE__ */ a.jsxs(O, { variant: "outline", size: "sm", onClick: () => te(), title: "Advance one hop", children: [
      /* @__PURE__ */ a.jsx(Gl, { size: 14 }),
      " Step",
      D > 0 && /* @__PURE__ */ a.jsx("span", { className: "ml-1 rounded bg-accent/20 px-1 font-mono text-[10px]", children: D })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex gap-1 rounded-xl border border-line bg-panel2 p-0.5", children: [
      /* @__PURE__ */ a.jsx(O, { size: "sm", onClick: d, disabled: !f, title: "Undo (Ctrl+Z)", children: /* @__PURE__ */ a.jsx(f1, { size: 14 }) }),
      /* @__PURE__ */ a.jsx(O, { size: "sm", onClick: p, disabled: !h, title: "Redo (Ctrl+Y)", children: /* @__PURE__ */ a.jsx(u1, { size: 14 }) })
    ] }),
    /* @__PURE__ */ a.jsxs(O, { variant: "outline", size: "sm", onClick: () => x(), title: "Pause / resume (Space)", children: [
      ke ? /* @__PURE__ */ a.jsx(i1, { size: 14 }) : /* @__PURE__ */ a.jsx(l1, { size: 14 }),
      " ",
      ke ? "Pause" : "Run"
    ] }),
    /* @__PURE__ */ a.jsxs(
      O,
      {
        variant: "outline",
        size: "sm",
        onClick: y,
        title: "Red team vs blue team challenge",
        children: [
          /* @__PURE__ */ a.jsx(ps, { size: 14 }),
          " Challenge"
        ]
      }
    ),
    /* @__PURE__ */ a.jsxs(O, { variant: "danger", size: "sm", onClick: n, title: "Open the cyber range", children: [
      /* @__PURE__ */ a.jsx(ta, { size: 14 }),
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
          /* @__PURE__ */ a.jsx(ar, { size: 14 }),
          " People",
          be > 0 && /* @__PURE__ */ a.jsx("span", { className: "ml-1 rounded bg-accent/20 px-1 font-mono text-[10px]", children: be })
        ]
      }
    ),
    /* @__PURE__ */ a.jsxs(
      O,
      {
        variant: "outline",
        size: "sm",
        onClick: () => {
          const { w: A, h: J } = k.getState().canvasSize, ie = k.getState().toWorld(A / 2, J / 2);
          $(ie.x, ie.y);
        },
        title: "Add a floor or building section",
        children: [
          /* @__PURE__ */ a.jsx(To, { size: 14 }),
          " Section"
        ]
      }
    ),
    /* @__PURE__ */ a.jsxs(O, { variant: "outline", size: "sm", onClick: j, title: "Clear attack damage and flush ARP caches", children: [
      /* @__PURE__ */ a.jsx(Xg, { size: 14 }),
      " Recover"
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "flex-1" }),
    C !== "idle" && /* @__PURE__ */ a.jsxs(re, { tone: C === "breach" ? "down" : C === "armed" ? "up" : "accent", children: [
      C === "setup" ? "BUILD" : C === "breach" ? "BREACH" : C.toUpperCase(),
      E ? ` ${ny(E, z)}` : ""
    ] }),
    /* @__PURE__ */ a.jsxs(re, { tone: ke ? "up" : "warn", children: [
      /* @__PURE__ */ a.jsx("span", { className: `h-2 w-2 rounded-full ${ke ? "bg-up" : "bg-warn"}` }),
      ke ? "RUNNING" : "PAUSED"
    ] }),
    /* @__PURE__ */ a.jsxs(re, { children: [
      I,
      " node",
      I === 1 ? "" : "s"
    ] }),
    /* @__PURE__ */ a.jsxs(re, { tone: "accent", className: "hidden sm:inline-flex", children: [
      "t+",
      (g.clock / 1e3).toFixed(1),
      "s"
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ a.jsx(O, { size: "sm", onClick: N, title: "Save topology as JSON", children: /* @__PURE__ */ a.jsx(p1, { size: 14 }) }),
      /* @__PURE__ */ a.jsx(O, { size: "sm", onClick: F, title: "Load topology JSON", children: /* @__PURE__ */ a.jsx(m1, { size: 14 }) }),
      /* @__PURE__ */ a.jsx(O, { variant: i ? "active" : "ghost", size: "sm", onClick: e, title: "Toggle palette", children: /* @__PURE__ */ a.jsx(o1, { size: 14 }) }),
      /* @__PURE__ */ a.jsx(O, { variant: l ? "active" : "ghost", size: "sm", onClick: t, title: "Toggle lab guide", children: /* @__PURE__ */ a.jsx(a1, { size: 14 }) }),
      /* @__PURE__ */ a.jsx(O, { size: "sm", onClick: s, title: "Subnet calculator", "aria-label": "Subnet calculator", children: /* @__PURE__ */ a.jsx(ch, { size: 14 }) }),
      /* @__PURE__ */ a.jsx(
        O,
        {
          size: "sm",
          onClick: b,
          title: ee === "dark" ? "Switch to light mode" : "Switch to dark mode",
          "aria-label": "Toggle colour theme",
          children: ee === "dark" ? /* @__PURE__ */ a.jsx(Kl, { size: 14 }) : /* @__PURE__ */ a.jsx(Wl, { size: 14 })
        }
      ),
      /* @__PURE__ */ a.jsx(O, { size: "sm", onClick: r, title: "Settings", children: /* @__PURE__ */ a.jsx(ea, { size: 14 }) })
    ] })
  ] });
}
function ny(e, t) {
  const n = Math.max(0, Math.floor((e - t) / 1e3));
  return `${Math.floor(n / 60)}:${String(n % 60).padStart(2, "0")}`;
}
function ry({ name: e, size: t = 16 }) {
  const n = ks(e);
  return /* @__PURE__ */ a.jsx(n, { size: t });
}
function sy({ onClose: e }) {
  const t = k((o) => o.addDevice), n = k((o) => o.cableType), r = k((o) => o.setCableType), s = k((o) => o.tool);
  return /* @__PURE__ */ a.jsxs("aside", { className: "w-[196px] shrink-0 overflow-y-auto border-r border-line bg-panel p-3", children: [
    K1.map((o) => /* @__PURE__ */ a.jsxs("section", { className: "mb-4", children: [
      /* @__PURE__ */ a.jsx(W, { children: o }),
      Y1(o).map((i) => /* @__PURE__ */ a.jsxs(
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
            /* @__PURE__ */ a.jsx("span", { className: "grid h-7 w-7 shrink-0 place-items-center rounded-md border border-line bg-panel text-accent", children: /* @__PURE__ */ a.jsx(ry, { name: i.icon }) }),
            /* @__PURE__ */ a.jsx("span", { className: "min-w-0 truncate", children: i.label })
          ]
        },
        i.id
      ))
    ] }, o)),
    /* @__PURE__ */ a.jsxs("section", { children: [
      /* @__PURE__ */ a.jsx(W, { children: "Media" }),
      Object.values(Ce).map((o) => {
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
const oy = {
  ethernet: "▭",
  fiber: "◇",
  serial: "⬡",
  usb: "⬒",
  console: "⌸",
  wifi: "◉"
};
function ay() {
  const e = k((f) => f.portPicker), t = k((f) => f.choosePort), n = k((f) => f.closePortPicker), r = k((f) => f.cableType), s = k((f) => f.topology), o = k((f) => f.toScreen);
  if (k((f) => f.viewport), !e) return null;
  const i = s.devices.find((f) => f.id === e.deviceId);
  if (!i) return null;
  const l = Ce[r], c = e.options.filter((f) => !f.disabled).length, u = o(i.x, i.y), d = Math.max(8, u.x + 46), p = Math.max(8, u.y - 24);
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
        /* @__PURE__ */ a.jsx("ul", { className: "max-h-[232px] overflow-y-auto p-1", children: e.options.map((f) => {
          const h = kr[f.media];
          return /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsxs(
            "button",
            {
              disabled: f.disabled,
              onClick: () => t(i.id, f.name),
              title: f.disabled ? f.reason : `Connect to ${f.name} (${f.mediaLabel})`,
              className: `flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left font-mono text-[11.5px] ${f.disabled ? "cursor-not-allowed text-soft/60" : "text-ink hover:bg-accent/15"}`,
              children: [
                /* @__PURE__ */ a.jsx(
                  "span",
                  {
                    className: "w-3.5 shrink-0 text-center",
                    style: { color: f.disabled || h == null ? void 0 : h.color },
                    "aria-hidden": "true",
                    children: oy[f.media] || "▭"
                  }
                ),
                /* @__PURE__ */ a.jsx("span", { className: "min-w-0 flex-1 truncate", children: f.name }),
                /* @__PURE__ */ a.jsx("span", { className: "shrink-0 text-[9.5px] uppercase tracking-wide text-soft", children: f.disabled ? f.reason : h == null ? void 0 : h.short })
              ]
            }
          ) }, f.name);
        }) }),
        /* @__PURE__ */ a.jsx("footer", { className: "border-t border-line px-2.5 py-1.5", children: /* @__PURE__ */ a.jsx("button", { onClick: n, className: "text-[11px] text-soft hover:text-ink", children: "Cancel" }) })
      ]
    }
  );
}
function iy() {
  const e = k((s) => s.contextMenu), t = k((s) => s.closeContextMenu), n = P.useRef(null);
  if (P.useEffect(() => {
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
  const r = ly(e);
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
function ly(e, t) {
  const n = k.getState();
  if (e.kind === "canvas")
    return [
      {
        label: "Add floor / section here",
        icon: /* @__PURE__ */ a.jsx(To, { size: 13 }),
        onClick: () => n.addZone(e.world.x, e.world.y)
      },
      { separator: !0 },
      {
        label: "Fit everything in view",
        icon: /* @__PURE__ */ a.jsx(Ul, { size: 13 }),
        hint: "F",
        onClick: () => n.fitView()
      },
      { label: "Reset zoom", icon: /* @__PURE__ */ a.jsx(Xo, { size: 13 }), onClick: () => n.resetView() },
      { separator: !0 },
      {
        label: "Clear workspace",
        icon: /* @__PURE__ */ a.jsx(jt, { size: 13 }),
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
        icon: /* @__PURE__ */ a.jsx(vh, { size: 13 }),
        onClick: () => {
          const c = window.prompt("Section name", i.name);
          c && n.updateZone(i.id, { name: c });
        }
      },
      {
        label: "Recolour",
        icon: /* @__PURE__ */ a.jsx(To, { size: 13 }),
        onClick: () => n.updateZone(i.id, { hue: (i.hue + 47) % 360 })
      },
      { separator: !0 },
      {
        label: "Delete section only",
        icon: /* @__PURE__ */ a.jsx(jt, { size: 13 }),
        danger: !0,
        onClick: () => n.removeZone(i.id, !1)
      },
      {
        label: `Delete with ${l} device${l === 1 ? "" : "s"}`,
        icon: /* @__PURE__ */ a.jsx(jt, { size: 13 }),
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
        icon: /* @__PURE__ */ a.jsx(_n, { size: 13 }),
        disabled: !0,
        onClick: () => {
        }
      },
      { separator: !0 },
      {
        label: "Remove cable",
        icon: /* @__PURE__ */ a.jsx(jt, { size: 13 }),
        danger: !0,
        onClick: () => n.removeLink(i.id)
      }
    ];
  }
  const r = n.topology.devices.find((i) => i.id === e.id);
  if (!r) return [];
  const s = An[r.typeId], o = [{ header: `${r.hostname} · ${(s == null ? void 0 : s.label) || r.role}` }];
  return o.push({
    label: "Open console",
    icon: /* @__PURE__ */ a.jsx(ql, { size: 13 }),
    onClick: () => n.openDeviceConsole(r.id)
  }), o.push({
    label: "Configure…",
    icon: /* @__PURE__ */ a.jsx(ea, { size: 13 }),
    onClick: () => {
      var i;
      return ((i = n.openDeviceModal) == null ? void 0 : i.call(n, r.id)) ?? n.openDeviceConsole(r.id);
    }
  }), (r.role === "switch" || r.role === "l3switch") && (o.push({ separator: !0 }), o.push({
    label: "Show MAC address table",
    icon: /* @__PURE__ */ a.jsx(_n, { size: 13 }),
    onClick: () => Us(n, r, "show mac address-table")
  }), o.push({
    label: "Show VLAN brief",
    icon: /* @__PURE__ */ a.jsx(_n, { size: 13 }),
    onClick: () => Us(n, r, "show vlan brief")
  })), (r.role === "router" || r.role === "firewall" || r.role === "l3switch") && (o.push({ separator: !0 }), o.push({
    label: "Show IP route",
    icon: /* @__PURE__ */ a.jsx(_n, { size: 13 }),
    onClick: () => Us(n, r, "show ip route")
  }), o.push({
    label: "Show interface brief",
    icon: /* @__PURE__ */ a.jsx(_n, { size: 13 }),
    onClick: () => Us(n, r, "show ip interface brief")
  })), r.ap && (o.push({ separator: !0 }), o.push({
    label: r.ap.enabled ? "Switch radio off" : "Switch radio on",
    icon: r.ap.enabled ? /* @__PURE__ */ a.jsx(Nh, { size: 13 }) : /* @__PURE__ */ a.jsx(Ch, { size: 13 }),
    onClick: () => n.updateDevice(r.id, (i) => {
      i.ap.enabled = !i.ap.enabled;
    })
  })), r.radio && (o.push({ separator: !0 }), o.push({
    label: r.radio.monitorMode ? "Leave monitor mode" : "Enter monitor mode",
    icon: /* @__PURE__ */ a.jsx(Mi, { size: 13 }),
    onClick: () => n.updateDevice(r.id, (i) => {
      i.radio.monitorMode = !i.radio.monitorMode;
    })
  })), o.push({ separator: !0 }), o.push({
    label: r.capturing ? "Stop capture here" : "Capture from here",
    icon: /* @__PURE__ */ a.jsx(Mi, { size: 13 }),
    onClick: () => n.toggleCapture(r.id)
  }), o.push({
    label: "Send a PDU from here",
    icon: /* @__PURE__ */ a.jsx(Bl, { size: 13 }),
    hint: "P",
    onClick: () => {
      n.setTool("pdu"), n.pduClick(r.id);
    }
  }), r.role === "attacker" && o.push({
    label: "Open the cyber range",
    icon: /* @__PURE__ */ a.jsx(ta, { size: 13 }),
    onClick: () => {
      var i;
      return (i = n.openAttackPanel) == null ? void 0 : i.call(n, r.id);
    }
  }), o.push({ separator: !0 }), o.push({
    label: "Duplicate",
    icon: /* @__PURE__ */ a.jsx(_l, { size: 13 }),
    hint: "⌘D",
    onClick: () => n.duplicateDevice(r.id)
  }), o.push({
    label: "Delete device",
    icon: /* @__PURE__ */ a.jsx(jt, { size: 13 }),
    danger: !0,
    hint: "Del",
    onClick: () => n.removeDevice(r.id)
  }), o;
}
function Us(e, t, n) {
  var r;
  e.openDeviceConsole(t.id), (r = e.queueConsoleCommand) == null || r.call(e, t.id, n);
}
const pt = 76, Ut = 58, Ws = 11;
function cy({ onOpenDevice: e }) {
  const t = P.useRef(null), n = P.useRef(null), r = P.useRef(null), s = k((S) => S.topology), o = k((S) => S.rev), i = k((S) => S.engine), l = k((S) => S.tool), c = k((S) => S.cableType), u = k((S) => S.selectedId), d = k((S) => S.selectedLinkId), p = k((S) => S.pendingCableFrom), f = k((S) => S.settings), h = k((S) => S.select), x = k((S) => S.selectLink), j = k((S) => S.clearSelection), w = k((S) => S.moveDevice), m = k((S) => S.pushHistory), g = k((S) => S.removeDevice), v = k((S) => S.removeLink), b = k((S) => S.cableClick), $ = k((S) => S.pduClick), y = k((S) => S.pduFrom), C = k((S) => S.viewport), E = k((S) => S.panBy), B = k((S) => S.zoomAt), z = k((S) => S.resetView), q = k((S) => S.fitView), ee = k((S) => S.topology.zones), te = k((S) => S.selectedZoneId), I = k((S) => S.selectZone), be = k((S) => S.moveZone), ke = k((S) => S.updateZone), Q = k((S) => S.devicesInZone), D = k((S) => S.openContextMenu), N = k((S) => S.setCanvasSize), F = k((S) => S.closeContextMenu), A = k((S) => S.addDevice), J = k((S) => S.openDeviceConsole), [ie, Be] = P.useState(null), [Ht, ut] = P.useState(null), [Ye, Ss] = P.useState(null), fn = P.useMemo(
    () => new Map(s.devices.map((S) => [S.id, S])),
    [s.devices, o]
  ), mn = P.useCallback((S) => {
    const L = n.current, _ = t.current;
    if (!L || !_) return { x: 0, y: 0 };
    const G = _.createSVGPoint();
    G.x = S.clientX, G.y = S.clientY;
    const le = L.getScreenCTM();
    return le ? G.matrixTransform(le.inverse()) : { x: 0, y: 0 };
  }, []), nf = P.useCallback((S) => {
    var _;
    const L = (_ = r.current) == null ? void 0 : _.getBoundingClientRect();
    return L ? { x: S.clientX - L.left, y: S.clientY - L.top } : { x: 0, y: 0 };
  }, []), rf = (S, L) => {
    var G, le;
    if (S.stopPropagation(), l === "delete") {
      g(L.id);
      return;
    }
    if (l === "cable") {
      b(L.id);
      return;
    }
    if (l === "pdu") {
      $(L.id);
      return;
    }
    h(L.id);
    const _ = mn(S);
    Be({ id: L.id, dx: L.x - _.x, dy: L.y - _.y, moved: !1 }), (le = (G = S.currentTarget).setPointerCapture) == null || le.call(G, S.pointerId);
  }, sf = (S) => {
    if (Ht) {
      E(S.clientX - Ht.x, S.clientY - Ht.y), ut({ x: S.clientX, y: S.clientY });
      return;
    }
    if (Ye) {
      const Me = mn(S), ze = Me.x - Ye.lastX, De = Me.y - Ye.lastY;
      if (ze || De) {
        if (Ye.resize) {
          const gn = (ee || []).find((aa) => aa.id === Ye.id);
          gn && ke(gn.id, { w: Math.max(140, gn.w + ze), h: Math.max(110, gn.h + De) });
        } else
          be(Ye.id, ze, De, Ye.carried);
        Ss({ ...Ye, lastX: Me.x, lastY: Me.y });
      }
      return;
    }
    if (!ie) return;
    const L = mn(S), _ = Math.round((L.x + ie.dx) / Ws) * Ws, G = Math.round((L.y + ie.dy) / Ws) * Ws, le = fn.get(ie.id);
    le && (le.x !== _ || le.y !== G) && (ie.moved || (m(), Be({ ...ie, moved: !0 })), w(ie.id, _, G));
  }, rc = () => {
    Be(null), ut(null), Ss(null);
  }, of = (S) => {
    var L, _;
    F(), j(), S.button === 0 && (ut({ x: S.clientX, y: S.clientY }), (_ = (L = S.currentTarget).setPointerCapture) == null || _.call(L, S.pointerId));
  }, js = (S, L) => {
    S.preventDefault(), S.stopPropagation();
    const _ = nf(S);
    D({ ...L, x: _.x, y: _.y, world: mn(S) });
  }, af = (S) => {
    S.preventDefault();
    const L = S.dataTransfer.getData("application/netrange-device");
    if (!L) return;
    const _ = mn(S);
    A(L, _.x, _.y);
  };
  P.useEffect(() => {
    const S = r.current;
    if (!S || typeof ResizeObserver > "u") return;
    const L = new ResizeObserver(([_]) => {
      const { width: G, height: le } = _.contentRect;
      N(G, le);
    });
    return L.observe(S), () => L.disconnect();
  }, [N]), P.useEffect(() => {
    const S = r.current;
    if (!S) return;
    const L = (_) => {
      _.preventDefault();
      const G = S.getBoundingClientRect();
      B(_.deltaY < 0 ? 1.12 : 1 / 1.12, _.clientX - G.left, _.clientY - G.top);
    };
    return S.addEventListener("wheel", L, { passive: !1 }), () => S.removeEventListener("wheel", L);
  }, [B]);
  const lf = i.packets;
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: r,
      className: `relative min-h-0 flex-1 overflow-hidden ${f.showGrid ? "nr-grid" : ""}`,
      onDragOver: (S) => S.preventDefault(),
      onDrop: af,
      children: [
        /* @__PURE__ */ a.jsx(
          "svg",
          {
            ref: t,
            className: `h-full w-full touch-none ${Ht ? "cursor-grabbing" : ""}`,
            onPointerMove: sf,
            onPointerUp: rc,
            onPointerLeave: rc,
            onPointerDown: of,
            onContextMenu: (S) => js(S, { kind: "canvas" }),
            role: "application",
            "aria-label": "Network topology workspace",
            children: /* @__PURE__ */ a.jsxs(
              "g",
              {
                ref: n,
                transform: `translate(${C.x},${C.y}) scale(${C.zoom})`,
                children: [
                  /* @__PURE__ */ a.jsx("g", { children: (ee || []).map((S) => {
                    const L = te === S.id, _ = `hsl(${S.hue} 70% 55%)`;
                    return /* @__PURE__ */ a.jsxs("g", { children: [
                      /* @__PURE__ */ a.jsx(
                        "rect",
                        {
                          x: S.x,
                          y: S.y,
                          width: S.w,
                          height: S.h,
                          rx: 14,
                          fill: _,
                          fillOpacity: L ? 0.1 : 0.055,
                          stroke: _,
                          strokeOpacity: L ? 0.9 : 0.45,
                          strokeWidth: L ? 2 : 1.5,
                          strokeDasharray: "10 6",
                          className: "cursor-move",
                          onPointerDown: (G) => {
                            var Me, ze;
                            G.stopPropagation(), F(), I(S.id);
                            const le = mn(G);
                            Ss({ id: S.id, lastX: le.x, lastY: le.y, carried: Q(S) }), (ze = (Me = G.currentTarget).setPointerCapture) == null || ze.call(Me, G.pointerId);
                          },
                          onContextMenu: (G) => js(G, { kind: "zone", id: S.id })
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "text",
                        {
                          x: S.x + 14,
                          y: S.y + 22,
                          fontSize: "12",
                          fontWeight: "600",
                          fontFamily: "ui-monospace, monospace",
                          fill: _,
                          opacity: 0.95,
                          pointerEvents: "none",
                          children: S.name
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "rect",
                        {
                          x: S.x + S.w - 16,
                          y: S.y + S.h - 16,
                          width: 14,
                          height: 14,
                          rx: 3,
                          fill: _,
                          fillOpacity: 0.55,
                          className: "cursor-nwse-resize",
                          onPointerDown: (G) => {
                            var Me, ze;
                            G.stopPropagation();
                            const le = mn(G);
                            Ss({ id: S.id, lastX: le.x, lastY: le.y, resize: !0, carried: [] }), (ze = (Me = G.currentTarget).setPointerCapture) == null || ze.call(Me, G.pointerId);
                          }
                        }
                      )
                    ] }, S.id);
                  }) }),
                  /* @__PURE__ */ a.jsx("g", { children: Sr(s).map((S) => {
                    const L = !ue[S.ap.security] || !ue[S.ap.security].encrypted, _ = S.ap.rogue ? "rgb(var(--nr-down))" : L ? "rgb(var(--nr-warn))" : "rgb(var(--nr-accent))";
                    return /* @__PURE__ */ a.jsxs("g", { pointerEvents: "none", children: [
                      /* @__PURE__ */ a.jsx(
                        "circle",
                        {
                          cx: S.x,
                          cy: S.y,
                          r: S.ap.range,
                          fill: _,
                          fillOpacity: 0.045,
                          stroke: _,
                          strokeOpacity: 0.35,
                          strokeWidth: 1.25,
                          strokeDasharray: "6 7"
                        }
                      ),
                      /* @__PURE__ */ a.jsxs(
                        "text",
                        {
                          x: S.x,
                          y: S.y - S.ap.range + 15,
                          textAnchor: "middle",
                          fontSize: "10",
                          fontFamily: "ui-monospace, monospace",
                          fill: _,
                          opacity: 0.85,
                          children: [
                            S.ap.ssid,
                            " · ",
                            L ? "OPEN" : S.ap.security.toUpperCase(),
                            S.ap.rogue ? " · ROGUE" : ""
                          ]
                        }
                      )
                    ] }, `rf-${S.id}`);
                  }) }),
                  /* @__PURE__ */ a.jsx("g", { children: Oh(s).map((S) => {
                    var ze, De;
                    const L = fn.get(S.a), _ = fn.get(S.b);
                    if (!L || !_) return null;
                    const G = ue[S.security] && ue[S.security].encrypted, Me = ((De = (ze = fn.get(S.b)) == null ? void 0 : ze.ap) == null ? void 0 : De.rogue) ? "rgb(var(--nr-down))" : G ? "rgb(var(--nr-up))" : "rgb(var(--nr-warn))";
                    return /* @__PURE__ */ a.jsxs("g", { pointerEvents: "none", children: [
                      /* @__PURE__ */ a.jsx(
                        "line",
                        {
                          x1: L.x,
                          y1: L.y,
                          x2: _.x,
                          y2: _.y,
                          stroke: Me,
                          strokeWidth: 2,
                          strokeDasharray: "3 7",
                          strokeLinecap: "round",
                          opacity: 0.85
                        }
                      ),
                      /* @__PURE__ */ a.jsxs(
                        "text",
                        {
                          x: (L.x + _.x) / 2,
                          y: (L.y + _.y) / 2 - 5,
                          textAnchor: "middle",
                          fontSize: "9",
                          fontFamily: "ui-monospace, monospace",
                          fill: Me,
                          opacity: 0.9,
                          children: [
                            S.dbm,
                            " dBm ",
                            G ? "🔒" : "⚠"
                          ]
                        }
                      )
                    ] }, S.id);
                  }) }),
                  /* @__PURE__ */ a.jsx("g", { children: s.links.map((S) => {
                    const L = fn.get(S.a), _ = fn.get(S.b);
                    if (!L || !_) return null;
                    const G = Ce[S.cableType] || Ce.straight, le = S.down, Me = le ? "rgb(var(--nr-down))" : G.color, ze = d === S.id;
                    return /* @__PURE__ */ a.jsxs("g", { children: [
                      /* @__PURE__ */ a.jsx(
                        "line",
                        {
                          x1: L.x,
                          y1: L.y,
                          x2: _.x,
                          y2: _.y,
                          stroke: ze ? "rgb(var(--nr-accent))" : Me,
                          strokeWidth: ze ? 4.5 : 3,
                          strokeLinecap: "round",
                          strokeDasharray: le ? "7 6" : G.dash || void 0
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "line",
                        {
                          x1: L.x,
                          y1: L.y,
                          x2: _.x,
                          y2: _.y,
                          stroke: "transparent",
                          strokeWidth: 16,
                          className: "cursor-pointer",
                          onPointerDown: (De) => {
                            De.stopPropagation(), F(), l === "delete" ? v(S.id) : x(S.id);
                          },
                          onContextMenu: (De) => js(De, { kind: "link", id: S.id }),
                          children: /* @__PURE__ */ a.jsxs("title", { children: [
                            G.label,
                            le ? ` — DOWN: ${S.reason}` : " — up"
                          ] })
                        }
                      ),
                      [[L, _], [_, L]].map(([De, gn], aa) => /* @__PURE__ */ a.jsx(
                        "circle",
                        {
                          cx: De.x + (gn.x - De.x) * 0.26,
                          cy: De.y + (gn.y - De.y) * 0.26,
                          r: 3.6,
                          fill: le ? "rgb(var(--nr-down))" : "rgb(var(--nr-up))",
                          stroke: "rgb(var(--nr-panel))",
                          strokeWidth: "1"
                        },
                        aa
                      ))
                    ] }, S.id);
                  }) }),
                  /* @__PURE__ */ a.jsx("g", { children: lf.map((S) => {
                    const L = i.positionOf(S, fn);
                    if (!L) return null;
                    const _ = ju[S.kind] || ju.icmp;
                    return /* @__PURE__ */ a.jsxs("g", { children: [
                      /* @__PURE__ */ a.jsx("circle", { cx: L.x, cy: L.y, r: 7, fill: _.color, opacity: 0.22 }),
                      /* @__PURE__ */ a.jsx("circle", { cx: L.x, cy: L.y, r: 3.8, fill: _.color })
                    ] }, S.id);
                  }) }),
                  /* @__PURE__ */ a.jsx("g", { children: s.devices.map((S) => /* @__PURE__ */ a.jsx(
                    uy,
                    {
                      device: S,
                      selected: u === S.id,
                      armed: p === S.id || y === S.id,
                      showLabel: f.showLabels,
                      onPointerDown: (L) => rf(L, S),
                      onContextMenu: (L) => js(L, { kind: "device", id: S.id }),
                      onDoubleClick: (L) => {
                        L.stopPropagation(), e(S.id), J(S.id);
                      }
                    },
                    S.id
                  )) })
                ]
              }
            )
          }
        ),
        s.devices.length === 0 && /* @__PURE__ */ a.jsx("div", { className: "pointer-events-none absolute inset-0 grid place-items-center p-6 text-center", children: /* @__PURE__ */ a.jsx("p", { className: "max-w-xs text-[13px] leading-relaxed text-soft", children: "Drag a device from the palette, then pick a cable and click two devices to wire them. Double-click any node for its configuration and console." }) }),
        /* @__PURE__ */ a.jsx(ay, {}),
        /* @__PURE__ */ a.jsx(iy, {}),
        /* @__PURE__ */ a.jsxs("div", { className: "absolute bottom-3 right-3 flex items-center gap-1 rounded-xl border border-line bg-panel/90 p-1 shadow-lg backdrop-blur", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => {
                var S, L;
                return B(1 / 1.2, (((S = r.current) == null ? void 0 : S.clientWidth) || 0) / 2, (((L = r.current) == null ? void 0 : L.clientHeight) || 0) / 2);
              },
              title: "Zoom out",
              "aria-label": "Zoom out",
              className: "grid h-7 w-7 place-items-center rounded-lg text-soft hover:bg-panel2 hover:text-ink",
              children: /* @__PURE__ */ a.jsx(yh, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsxs(
            "button",
            {
              onClick: () => z(),
              title: "Reset zoom to 100%",
              className: "min-w-[48px] rounded-lg px-1 font-mono text-[11px] text-soft hover:bg-panel2 hover:text-ink",
              children: [
                Math.round(C.zoom * 100),
                "%"
              ]
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => {
                var S, L;
                return B(1.2, (((S = r.current) == null ? void 0 : S.clientWidth) || 0) / 2, (((L = r.current) == null ? void 0 : L.clientHeight) || 0) / 2);
              },
              title: "Zoom in",
              "aria-label": "Zoom in",
              className: "grid h-7 w-7 place-items-center rounded-lg text-soft hover:bg-panel2 hover:text-ink",
              children: /* @__PURE__ */ a.jsx(kh, { size: 14 })
            }
          ),
          /* @__PURE__ */ a.jsx("span", { className: "mx-0.5 h-5 w-px bg-line" }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => q(),
              title: "Fit everything in view (F)",
              "aria-label": "Fit to content",
              className: "grid h-7 w-7 place-items-center rounded-lg text-soft hover:bg-panel2 hover:text-ink",
              children: /* @__PURE__ */ a.jsx(Ul, { size: 13 })
            }
          )
        ] }),
        l === "pdu" && /* @__PURE__ */ a.jsxs("div", { className: "pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-accent/50 bg-panel/90 px-3 py-1.5 font-mono text-[11px] text-accent shadow", children: [
          "Simple PDU — ",
          y ? "click the destination" : "click the sender"
        ] }),
        l === "cable" && /* @__PURE__ */ a.jsxs("div", { className: "pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-accent/50 bg-panel/90 px-3 py-1.5 font-mono text-[11px] text-accent shadow", children: [
          Ce[c].label,
          " — ",
          p ? "click the far end" : "click the first device"
        ] })
      ]
    }
  );
}
function uy({ device: e, selected: t, armed: n, showLabel: r, onPointerDown: s, onDoubleClick: o, onContextMenu: i }) {
  const l = An[e.typeId], c = ks(l == null ? void 0 : l.icon), u = H(e), d = e.runtime, p = t || n ? "rgb(var(--nr-accent))" : "rgb(var(--nr-line))", f = d.cpu > 70;
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
      "aria-label": `${e.hostname}, ${l == null ? void 0 : l.label}, ${u || "no address"}`,
      children: [
        /* @__PURE__ */ a.jsx("title", { children: `${e.hostname} — ${l == null ? void 0 : l.label}
${u || "no address"}
double-click to configure` }),
        /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: -pt / 2,
            y: -Ut / 2,
            width: pt,
            height: Ut,
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
            y: -Ut / 2,
            width: pt,
            height: 4,
            rx: 2,
            fill: "rgb(var(--nr-down))"
          }
        ),
        /* @__PURE__ */ a.jsx("g", { transform: "translate(-9,-22)", color: "rgb(var(--nr-accent))", children: /* @__PURE__ */ a.jsx(c, { size: 18 }) }),
        r && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("text", { y: 13, textAnchor: "middle", fontSize: "11", fontWeight: "600", fill: "rgb(var(--nr-ink))", children: e.hostname }),
          /* @__PURE__ */ a.jsx("text", { y: 24, textAnchor: "middle", fontSize: "9.5", fontFamily: "ui-monospace, monospace", fill: "rgb(var(--nr-soft))", children: u || "—" })
        ] }),
        Object.values(e.services).some(Boolean) && /* @__PURE__ */ a.jsx(
          "circle",
          {
            cx: pt / 2 - 9,
            cy: -Ut / 2 + 10,
            r: 3.5,
            fill: d.unresponsive ? "rgb(var(--nr-down))" : f ? "rgb(var(--nr-warn))" : "rgb(var(--nr-up))"
          }
        ),
        e.capturing && /* @__PURE__ */ a.jsxs("g", { transform: `translate(${-pt / 2 + 7},${-Ut / 2 + 7})`, children: [
          /* @__PURE__ */ a.jsx("circle", { r: 4.5, fill: "rgb(var(--nr-down))", opacity: 0.25 }),
          /* @__PURE__ */ a.jsx("circle", { r: 2.5, fill: "rgb(var(--nr-down))" }),
          /* @__PURE__ */ a.jsx("text", { x: 8, y: 3, fontSize: "7.5", fontFamily: "ui-monospace, monospace", fill: "rgb(var(--nr-down))", children: e.radio && e.radio.monitorMode ? "MON" : "CAP" })
        ] }),
        d.underAttack && /* @__PURE__ */ a.jsx(
          "rect",
          {
            x: -pt / 2 - 4,
            y: -Ut / 2 - 4,
            width: pt + 8,
            height: Ut + 8,
            rx: 16,
            fill: "none",
            stroke: "rgb(var(--nr-down))",
            strokeWidth: "1.5",
            strokeDasharray: "5 4",
            opacity: "0.9"
          }
        ),
        d.cpu > 10 && /* @__PURE__ */ a.jsxs("g", { transform: `translate(${-pt / 2 + 8},${Ut / 2 - 7})`, children: [
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
const Lu = {
  info: "text-[rgb(var(--nr-term-fg))]",
  success: "text-emerald-400",
  error: "text-rose-400",
  warn: "text-amber-300",
  dim: "text-slate-500"
};
function dy({ consoleId: e }) {
  const t = k((y) => y.consoles), n = k((y) => y.topology), r = k((y) => y.engine), s = k((y) => y.log), o = k((y) => y.commit), i = k((y) => y.clearConsole), l = k((y) => y.ensureConsole), c = k((y) => y.setActiveConsole), u = k((y) => y.rev), d = t.find((y) => y.id === e), p = d != null && d.deviceId ? n.devices.find((y) => y.id === d.deviceId) : null, [f, h] = P.useState(""), [x, j] = P.useState([]), [w, m] = P.useState(-1), g = P.useRef(null), v = P.useRef(null);
  if (P.useEffect(() => {
    const y = g.current;
    y && (y.scrollTop = y.scrollHeight);
  }, [d == null ? void 0 : d.lines.length, u]), !d) return null;
  const b = () => {
    const y = f;
    if (h(""), !p)
      return;
    const C = Iu(p, n);
    s(e, Hi(p, n) + (C ? "" : y), "info"), y.trim() && (C || j((E) => [...E, y]), m(-1), Zh(p, y, {
      engine: r,
      topology: n,
      channel: e,
      log: (E, B = "info") => s(e, E, B),
      commit: o,
      clearConsole: () => i(e),
      // Lets a command bring another panel forward — the offensive tools
      // write their output to the Cyber Range channel.
      focusChannel: (E) => {
        l(E, E === "attack" ? "Cyber Range" : "Packet Capture"), c(E);
      }
    }));
  }, $ = (y) => {
    if (y.key === "Enter") {
      y.preventDefault(), b();
      return;
    }
    if (y.key === "ArrowUp") {
      if (y.preventDefault(), !x.length) return;
      const C = w < 0 ? x.length - 1 : Math.max(0, w - 1);
      m(C), h(x[C]);
      return;
    }
    if (y.key === "ArrowDown") {
      if (y.preventDefault(), w < 0) return;
      const C = w + 1;
      C >= x.length ? (m(-1), h("")) : (m(C), h(x[C]));
      return;
    }
    y.key === "l" && y.ctrlKey && (y.preventDefault(), i(e));
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: g,
      className: "nr-term h-full overflow-y-auto px-3 py-2 font-mono text-[12px] leading-[1.55]",
      onClick: () => {
        var y;
        return (y = v.current) == null ? void 0 : y.focus();
      },
      children: [
        d.lines.map((y, C) => /* @__PURE__ */ a.jsx("div", { className: `whitespace-pre-wrap break-words ${Lu[y.level] || Lu.info}`, children: y.text }, C)),
        p ? /* @__PURE__ */ a.jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ a.jsx("span", { className: "whitespace-pre text-emerald-400", children: Hi(p, n) }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              ref: v,
              value: f,
              onChange: (y) => h(y.target.value),
              onKeyDown: $,
              type: Iu(p, n) ? "password" : "text",
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
const py = ["", "wlan", "plaintext", "encrypted", "http", "icmp", "arp", "dns"];
function hy() {
  const e = k((b) => b.engine), t = k((b) => b.topology), n = k((b) => b.rev), r = k((b) => b.commit), s = k((b) => b.captureDeviceId), o = k((b) => b.setCaptureDevice), [i, l] = P.useState(""), [c, u] = P.useState(null), [d, p] = P.useState({ frame: !1, eth: !0, dot11: !0, ip: !0, tcp: !0, udp: !0, icmp: !0, arp: !0, payload: !0 }), [f, h] = P.useState(null), x = t.devices.filter((b) => b.capturing || b.promiscuous || b.radio && b.radio.monitorMode), j = P.useMemo(() => e.capture.for(s || null).filter(($) => qh($, i)), [e, s, i, n]), w = j.find((b) => b.number === c) || j[j.length - 1] || null, m = w ? C0(w.bytes) : [], g = t.devices.find((b) => b.id === s), v = () => {
    const b = new Blob([$0(j)], { type: "text/plain" }), $ = URL.createObjectURL(b), y = document.createElement("a");
    y.href = $, y.download = "netrange-capture.txt", y.click(), URL.revokeObjectURL($);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "flex h-full flex-col bg-[rgb(var(--nr-term-bg))] text-[rgb(var(--nr-term-fg))]", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-2 border-b border-white/10 px-2.5 py-1.5", children: [
      /* @__PURE__ */ a.jsxs("label", { className: "flex items-center gap-1.5 text-[11px] text-slate-400", children: [
        /* @__PURE__ */ a.jsx(Xo, { size: 12 }),
        "Interface",
        /* @__PURE__ */ a.jsxs(
          "select",
          {
            value: s || "",
            onChange: (b) => o(b.target.value || null),
            className: "rounded border border-white/15 bg-white/5 px-1.5 py-1 font-mono text-[11px] text-slate-100 outline-none",
            children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "All vantage points" }),
              x.map((b) => /* @__PURE__ */ a.jsxs("option", { value: b.id, children: [
                b.hostname,
                " ",
                b.radio && b.radio.monitorMode ? "(monitor)" : "(promisc)"
              ] }, b.id))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("span", { className: "flex min-w-[180px] flex-1 items-center gap-1.5 rounded border border-white/15 bg-white/5 px-2", children: [
        /* @__PURE__ */ a.jsx(mh, { size: 12, className: "shrink-0 text-slate-500" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            value: i,
            onChange: (b) => l(b.target.value),
            placeholder: "display filter — e.g. http, wlan and plaintext, ip.addr == 192.168.10.50",
            "aria-label": "Display filter",
            className: "min-w-0 flex-1 bg-transparent py-1 font-mono text-[11px] text-slate-100 outline-none placeholder:text-slate-600"
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "flex gap-1", children: py.filter(Boolean).slice(0, 4).map((b) => /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: () => l(i === b ? "" : b),
          className: `rounded px-1.5 py-1 font-mono text-[10px] ${i === b ? "bg-emerald-500/25 text-emerald-300" : "bg-white/5 text-slate-400 hover:text-slate-200"}`,
          children: b
        },
        b
      )) }),
      /* @__PURE__ */ a.jsxs("span", { className: "font-mono text-[10.5px] text-slate-500", children: [
        j.length,
        " / ",
        e.capture.frames.length,
        " frames"
      ] }),
      /* @__PURE__ */ a.jsx("button", { onClick: v, title: "Export the filtered list as text", className: "rounded p-1 text-slate-400 hover:text-slate-100", children: /* @__PURE__ */ a.jsx(Fl, { size: 13 }) }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: () => {
            e.capture.clear(), u(null), r();
          },
          title: "Clear the capture buffer",
          className: "rounded p-1 text-slate-400 hover:text-slate-100",
          children: /* @__PURE__ */ a.jsx(jt, { size: 13 })
        }
      )
    ] }),
    j.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: "flex flex-1 items-center justify-center p-6 text-center", children: /* @__PURE__ */ a.jsx("div", { className: "max-w-md text-[12px] leading-relaxed text-slate-500", children: e.capture.frames.length === 0 ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("p", { className: "mb-2 text-slate-300", children: "No frames captured yet." }),
      /* @__PURE__ */ a.jsxs("p", { children: [
        "Generate traffic (ping from a host), then capture it. On switched Ethernet a bystander sees almost nothing — that is the point. Put a Threat Actor in monitor mode near an access point and run ",
        /* @__PURE__ */ a.jsx("span", { className: "text-emerald-400", children: "WiFi Snooping" }),
        " to see the difference."
      ] })
    ] }) : g ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("p", { className: "mb-2 text-slate-300", children: [
        g.hostname,
        " witnessed nothing matching this filter."
      ] }),
      /* @__PURE__ */ a.jsx("p", { children: g.radio && g.radio.monitorMode ? "Its radio is in monitor mode but nothing in range is transmitting." : "A switch does not flood unicast traffic to every port, so a wired bystander captures very little. Try monitor mode on a wireless segment, or poison ARP to put yourself on the path." })
    ] }) : /* @__PURE__ */ a.jsxs("p", { children: [
      "No frames match “",
      i,
      "”."
    ] }) }) }) : /* @__PURE__ */ a.jsxs("div", { className: "flex min-h-0 flex-1 flex-col", children: [
      /* @__PURE__ */ a.jsx("div", { className: "min-h-0 flex-1 overflow-auto", children: /* @__PURE__ */ a.jsxs("table", { className: "w-full border-collapse font-mono text-[11px]", children: [
        /* @__PURE__ */ a.jsx("thead", { className: "sticky top-0 bg-[rgb(var(--nr-term-bg))] text-[10px] uppercase text-slate-500", children: /* @__PURE__ */ a.jsx("tr", { children: ["No.", "Time", "Source", "Destination", "Proto", "Len", "Info"].map((b, $) => /* @__PURE__ */ a.jsx("th", { className: `border-b border-white/10 px-2 py-1 text-left ${$ === 6 ? "" : "whitespace-nowrap"}`, children: b }, b)) }) }),
        /* @__PURE__ */ a.jsx("tbody", { children: j.map((b) => {
          const $ = w && b.number === w.number, y = Vh[b.colorKey] || "#64748b";
          return /* @__PURE__ */ a.jsxs(
            "tr",
            {
              onClick: () => {
                u(b.number), h(null);
              },
              className: `cursor-pointer ${$ ? "bg-sky-500/25" : "hover:bg-white/5"}`,
              children: [
                /* @__PURE__ */ a.jsx("td", { className: "px-2 py-[3px] text-slate-500", children: b.number }),
                /* @__PURE__ */ a.jsx("td", { className: "px-2 py-[3px] tabular-nums text-slate-400", children: b.time.toFixed(3) }),
                /* @__PURE__ */ a.jsx("td", { className: "whitespace-nowrap px-2 py-[3px]", children: b.source }),
                /* @__PURE__ */ a.jsx("td", { className: "whitespace-nowrap px-2 py-[3px]", children: b.destination }),
                /* @__PURE__ */ a.jsx("td", { className: "px-2 py-[3px] font-bold", style: { color: y }, children: b.protocol }),
                /* @__PURE__ */ a.jsx("td", { className: "px-2 py-[3px] tabular-nums text-slate-400", children: b.length }),
                /* @__PURE__ */ a.jsx("td", { className: "px-2 py-[3px]", children: /* @__PURE__ */ a.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  b.wireless && (b.encrypted ? /* @__PURE__ */ a.jsx(cn, { size: 10, className: "shrink-0 text-amber-400" }) : /* @__PURE__ */ a.jsx(Hl, { size: 10, className: "shrink-0 text-rose-400" })),
                  /* @__PURE__ */ a.jsx("span", { className: b.encrypted ? "text-slate-500" : "", children: b.info })
                ] }) })
              ]
            },
            b.number
          );
        }) })
      ] }) }),
      w && /* @__PURE__ */ a.jsxs("div", { className: "grid min-h-0 shrink-0 grid-cols-1 gap-px border-t border-white/15 bg-white/10 md:grid-cols-2", style: { height: "46%" }, children: [
        /* @__PURE__ */ a.jsx("div", { className: "min-h-0 overflow-auto bg-[rgb(var(--nr-term-bg))] p-2 font-mono text-[11px]", children: Object.entries(w.layers).map(([b, $]) => /* @__PURE__ */ a.jsx(
          gy,
          {
            name: fy[b] || b,
            layerKey: b,
            fields: $,
            open: d[b] !== !1,
            onToggle: () => p((y) => ({ ...y, [b]: y[b] === !1 })),
            onHover: h,
            frame: w
          },
          b
        )) }),
        /* @__PURE__ */ a.jsxs("div", { className: "min-h-0 overflow-auto bg-[rgb(var(--nr-term-bg))] p-2 font-mono text-[11px] leading-[1.45]", children: [
          m.map((b, $) => /* @__PURE__ */ a.jsxs("div", { className: "flex gap-3 whitespace-pre", children: [
            /* @__PURE__ */ a.jsx("span", { className: "text-slate-600", children: b.offset }),
            /* @__PURE__ */ a.jsx("span", { children: b.hex.map((y, C) => {
              const E = $ * 16 + C, B = f && E >= f.start && E < f.end;
              return /* @__PURE__ */ a.jsxs("span", { className: B ? "bg-sky-500/50 text-white" : "", children: [
                y,
                C === 7 ? "  " : " "
              ] }, C);
            }) }),
            /* @__PURE__ */ a.jsx("span", { className: "text-slate-500", children: b.ascii })
          ] }, b.offset)),
          w.encrypted && /* @__PURE__ */ a.jsxs("p", { className: "mt-2 max-w-sm whitespace-normal text-[10.5px] leading-snug text-amber-400/90", children: [
            "Payload bytes are ",
            w.security.toUpperCase(),
            " ciphertext. The 802.11 header stays readable — addresses, timing and frame sizes leak even on an encrypted network."
          ] })
        ] })
      ] })
    ] })
  ] });
}
const fy = {
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
function my(e, t) {
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
function gy({ name: e, layerKey: t, fields: n, open: r, onToggle: s, onHover: o, frame: i }) {
  const l = my(i, t), c = r ? uh : dh;
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
          t === "payload" && n.protected && /* @__PURE__ */ a.jsx(cn, { size: 10, className: "text-amber-400" })
        ]
      }
    ),
    r && /* @__PURE__ */ a.jsxs("dl", { className: "ml-4 border-l border-white/10 pl-3", children: [
      Object.entries(n).filter(([u, d]) => u !== "text" && d !== "" && d !== void 0 && d !== null).map(([u, d]) => /* @__PURE__ */ a.jsxs("div", { className: "flex gap-2 py-[1px]", children: [
        /* @__PURE__ */ a.jsxs("dt", { className: "shrink-0 text-slate-500", children: [
          xy(u),
          ":"
        ] }),
        /* @__PURE__ */ a.jsx("dd", { className: "min-w-0 break-all text-slate-300", children: String(d) })
      ] }, u)),
      t === "payload" && n.text && /* @__PURE__ */ a.jsx("pre", { className: "mt-1 whitespace-pre-wrap break-all rounded bg-white/5 p-1.5 text-[10.5px] text-emerald-300", children: n.text })
    ] })
  ] });
}
function xy(e) {
  return e.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/^./, (t) => t.toUpperCase());
}
const gt = {
  source: "source",
  transit: "transit",
  destination: "destination"
};
function yy(e, t) {
  return t === 0 ? gt.source : t === e.length - 1 ? gt.destination : gt.transit;
}
const Te = (e, t, n) => ({ n: e, name: t, detail: n });
function wy({ device: e, frame: t, role: n, peerIn: r = null, peerOut: s = null }) {
  var f, h, x, j, w;
  const o = [], i = [], l = t.layers.dot11 ? "802.11" : "Ethernet", c = t.layers.ip, u = t.layers.tcp ? "TCP" : t.layers.udp ? "UDP" : t.layers.icmp ? "ICMP" : null, d = t.layers.payload, p = t.wireless ? `radio, ${((f = ue[t.security]) == null ? void 0 : f.short) || "OPEN"}` : "copper";
  if (n !== gt.source && (o.push(Te(1, "Physical", `Signal received from ${r ? r.hostname : "the medium"} over ${p}.`)), o.push(
    Te(
      2,
      "Data Link",
      t.layers.dot11 ? `802.11 frame received. Receiver ${t.layers.dot11.receiver}, BSSID ${t.layers.dot11.bssid}.` + (t.encrypted ? " Payload is CCMP ciphertext; the header is not." : "") : `Ethernet frame received. Destination MAC ${(h = t.layers.eth) == null ? void 0 : h.destination}; it matches this interface, so the frame is accepted and the header removed.`
    )
  )), n !== gt.source && e.role !== "switch" && e.role !== "hub" && c && o.push(Te(3, "Network", `IPv4 packet for ${c.destination}, TTL ${c.ttl}.`)), n === gt.destination && u && o.push(Te(4, "Transport", Ru(t, u))), n === gt.destination && d && o.push(
    Te(
      7,
      "Application",
      d.protected ? "Application data is encrypted and cannot be read without the key." : `Application data delivered: ${Ou(d.text || "", 90)}`
    )
  ), n === gt.source) {
    if (d && i.push(
      Te(
        7,
        "Application",
        d.protected ? "Application data handed down; it will be encrypted by the link layer." : `Application data created: ${Ou(d.text || "", 90)}`
      )
    ), u && i.push(Te(4, "Transport", Ru(t, u))), c) {
      const m = Ao(e), g = m && Io(c.source, c.destination, m.mask);
      i.push(
        Te(
          3,
          "Network",
          `IPv4 header added: ${c.source} → ${c.destination}. ` + (g ? "Destination is on the local subnet, so it is sent directly." : `Destination is off-subnet, so it is sent to the default gateway ${e.gateway || "(unset)"}.`)
        )
      );
    }
    i.push(Te(2, "Data Link", vy(t, l, s))), i.push(Te(1, "Physical", `Bits placed on the ${p} towards ${s ? s.hostname : "the medium"}.`));
  } else n === gt.transit && (e.role === "switch" || e.role === "l3switch" ? i.push(
    Te(
      2,
      "Data Link",
      `MAC address table consulted for ${((x = t.layers.eth) == null ? void 0 : x.destination) || ((j = t.layers.dot11) == null ? void 0 : j.receiver)}. The frame is forwarded out that single port only — which is why a bystander on another port sees nothing.`
    )
  ) : e.role === "hub" ? i.push(Te(1, "Physical", "A hub has no address table: the frame is repeated out of every other port, so every attached device receives it.")) : e.role === "ap" ? i.push(
    Te(
      2,
      "Data Link",
      t.wireless ? "Bridged from 802.11 to 802.3: the radio header is stripped and an Ethernet header is applied." : "Bridged from 802.3 to 802.11: an 802.11 header is applied" + ((w = ue[t.security]) != null && w.encrypted ? " and the payload is encrypted for the air." : " and the payload goes out in clear.")
    )
  ) : (e.role === "router" || e.role === "firewall") && (i.push(
    Te(
      3,
      "Network",
      `Routing table consulted for ${c ? c.destination : "the destination"}. TTL decremented to ${c ? Math.max(0, Number(c.ttl) - 1) : "—"}.` + (e.role === "firewall" ? " Access list evaluated before forwarding." : "")
    )
  ), i.push(Te(2, "Data Link", `New ${l} header written: this hop's source MAC and the next hop's destination MAC. The IP addresses do not change.`))), i.push(Te(1, "Physical", `Forwarded towards ${s ? s.hostname : "the next hop"}.`)));
  return { inbound: o, outbound: i, verdict: by(e, t, n) };
}
function Ru(e, t) {
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
function vy(e, t, n) {
  var r, s;
  if (e.layers.dot11) {
    const o = e.layers.dot11;
    return `802.11 header added. Transmitter ${o.transmitter}, receiver ${o.receiver}, BSSID ${o.bssid}.` + (o.protected ? " Payload encrypted with CCMP — but the addresses, timing and frame size stay visible to anything in range." : " No encryption: every byte is readable by anything in range.");
  }
  return `Ethernet header added: source ${(r = e.layers.eth) == null ? void 0 : r.source}, destination ${(s = e.layers.eth) == null ? void 0 : s.destination}${n ? ` (${n.hostname})` : ""}.`;
}
function by(e, t, n) {
  return n === gt.destination ? "Delivered" : e.role === "firewall" ? "Inspected and forwarded" : n === gt.source ? "Sent" : "Forwarded";
}
function Ou(e, t) {
  const n = String(e).replace(/\r?\n/g, " ");
  return n.length > t ? `${n.slice(0, t)}…` : n;
}
function ky(e) {
  return e.encrypted ? `${e.info} (encrypted)` : e.info;
}
const Sy = { source: "Origin", transit: "In transit", destination: "Destination" };
function jy() {
  const e = k((p) => p.engine), t = k((p) => p.topology), n = k((p) => p.stepPdu), r = k((p) => p.flushPdu), s = k((p) => p.clearPdu);
  k((p) => p.rev);
  const [o, i] = P.useState(null), l = e.pduEvents, c = l.filter((p) => p.status === "queued").length, u = l.find((p) => p.id === o) || [...l].reverse().find((p) => p.status === "done") || l[0] || null, d = new Map(t.devices.map((p) => [p.id, p]));
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
            /* @__PURE__ */ a.jsx(Gl, { size: 12 }),
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
            /* @__PURE__ */ a.jsx(fh, { size: 12 }),
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
            /* @__PURE__ */ a.jsx(jt, { size: 12 }),
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
          const f = u && p.id === u.id, h = Vh[p.hop.frame.colorKey] || "#64748b";
          return /* @__PURE__ */ a.jsxs(
            "tr",
            {
              onClick: () => i(p.id),
              className: `cursor-pointer border-b border-white/5 ${f ? "bg-sky-500/25" : p.status === "queued" ? "opacity-55 hover:bg-white/5" : "hover:bg-white/5"}`,
              children: [
                /* @__PURE__ */ a.jsx("td", { className: "px-2 py-[3px] text-slate-500", children: p.status === "queued" ? "·" : p.id }),
                /* @__PURE__ */ a.jsx("td", { className: "whitespace-nowrap px-2 py-[3px]", children: p.hop.fromName }),
                /* @__PURE__ */ a.jsx("td", { className: "whitespace-nowrap px-2 py-[3px] font-semibold", children: p.hop.toName }),
                /* @__PURE__ */ a.jsx("td", { className: "px-2 py-[3px]", style: { color: h }, children: p.hop.frame.protocol }),
                /* @__PURE__ */ a.jsx("td", { className: "px-2 py-[3px]", children: /* @__PURE__ */ a.jsxs("span", { className: "flex items-center gap-1 text-slate-300", children: [
                  p.hop.frame.encrypted && /* @__PURE__ */ a.jsx(cn, { size: 9, className: "shrink-0 text-amber-400" }),
                  /* @__PURE__ */ a.jsx("span", { className: "truncate", children: ky(p.hop.frame) })
                ] }) })
              ]
            },
            p.id
          );
        }) })
      ] }) }),
      /* @__PURE__ */ a.jsx("div", { className: "min-h-0 overflow-auto bg-[rgb(var(--nr-term-bg))] p-2.5", children: u ? /* @__PURE__ */ a.jsx(Ny, { event: u, byId: d }) : null })
    ] })
  ] });
}
function Ny({ event: e, byId: t }) {
  const { hop: n } = e, r = t.get(n.toId), s = t.get(n.fromId), o = n.index + 2, i = n.path && n.path[o] ? t.get(n.path[o]) : null;
  if (!r) return null;
  const l = yy(n.path || [n.fromId, n.toId], n.index + 1), { inbound: c, outbound: u, verdict: d } = wy({ device: r, frame: n.frame, role: l, peerIn: s, peerOut: i });
  return /* @__PURE__ */ a.jsxs("div", { className: "font-mono text-[11px]", children: [
    /* @__PURE__ */ a.jsxs("header", { className: "mb-2 border-b border-white/10 pb-2", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ a.jsx("span", { className: "font-bold text-slate-100", children: r.hostname }),
        /* @__PURE__ */ a.jsx("span", { className: "rounded bg-white/10 px-1.5 py-0.5 text-[9.5px] uppercase tracking-wide text-slate-300", children: Sy[l] }),
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
    /* @__PURE__ */ a.jsx(_u, { title: "In layers", icon: /* @__PURE__ */ a.jsx(ah, { size: 11 }), layers: c, empty: "This device originated the PDU, so nothing arrived." }),
    /* @__PURE__ */ a.jsx(_u, { title: "Out layers", icon: /* @__PURE__ */ a.jsx(ih, { size: 11 }), layers: u, empty: "The PDU was consumed here; nothing was forwarded." })
  ] });
}
function _u({ title: e, icon: t, layers: n, empty: r }) {
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
const Cy = "203.0.113.53", oa = {
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
}, Fu = Object.fromEntries(
  Object.values(oa).map((e) => [e.host, e.ip])
), $y = (e) => oa[String(e).toLowerCase()] || null, Py = (e) => Object.values(oa).find((t) => t.ip === e) || null;
function Ey(e) {
  return e.devices.filter((t) => t.role === "cloud");
}
function ef(e, t) {
  const n = (i, l) => ({ ok: !1, code: i, reason: l }), r = Ey(e)[0];
  if (!r) return n("no-cloud", "no ISP cloud on the topology — place one and cable it to your edge router");
  const s = K(e, t.id, r.id);
  return s ? H(t) ? t.gateway ? e.devices.find(
    (i) => (i.role === "router" || i.role === "l3switch" || i.role === "firewall") && K(e, t.id, i.id) && K(e, i.id, r.id)
  ) ? r.cloud && r.cloud.down ? n("isp-down", "the ISP link is down") : { ok: !0, code: "ok", reason: "reachable", cloud: r, path: s } : n("no-edge-router", "no router joins this subnet to the ISP") : n("no-gateway", "no default gateway set, so nothing can leave the local subnet") : n("no-address", "this host has no IP address") : n("no-path", "no cable path to the ISP — check the link to your edge router");
}
function Ty(e, t, n) {
  const r = String(n || "").toLowerCase(), s = e.devices.find(
    (o) => o.services.dns && o.dnsZone && o.dnsZone[r] && K(e, t.id, o.id)
  );
  if (s) return { ip: s.dnsZone[r], via: s.hostname, scope: "local" };
  if (Fu[r]) {
    const o = ef(e, t);
    return o.ok ? { ip: Fu[r], via: "public resolver " + Cy, scope: "public" } : { ip: null, error: o.reason, scope: "public" };
  }
  return { ip: null, error: "NXDOMAIN — no such name", scope: "unknown" };
}
function Iy(e, t, n) {
  const r = String(n || "").toLowerCase().replace(/^https?:\/\//, "").split("/")[0], s = $y(r) || Py(r);
  if (!s)
    return { ok: !1, status: 404, reason: Ty(e, t, r).error || "host not found" };
  const o = ef(e, t);
  return o.ok ? { ok: !0, status: 200, site: s, path: o.path, cloud: o.cloud } : { ok: !1, status: 0, reason: o.reason, code: o.code };
}
function Ay() {
  return Object.values(oa).map((e) => ({
    host: e.host,
    ip: e.ip,
    title: e.title,
    blurb: e.blurb
  }));
}
function My() {
  const e = k((h) => h.topology), t = k((h) => h.engine);
  k((h) => h.rev);
  const n = e.devices.filter(
    (h) => (h.role === "host" || h.role === "attacker") && h.interfaces.some((x) => x.ip)
  ), [r, s] = P.useState(""), [o, i] = P.useState("search.lab"), [l, c] = P.useState(null), [u, d] = P.useState(!1), p = e.devices.find((h) => h.id === r) || n[0], f = (h = o) => {
    if (i(h), !p) {
      c({ ok: !1, reason: "no addressed host to browse from", status: 0 });
      return;
    }
    const x = Iy(e, p, h);
    c(x), x.ok && x.path && (t.emit(x.path, "dns", { name: h }), t.schedule(300, () => {
      t.emit(x.path, u ? "tcp" : "http", {
        port: u ? 443 : 80,
        body: `GET / HTTP/1.1\r
Host: ${x.site.host}`
      });
    }));
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "flex h-full flex-col bg-[rgb(var(--nr-term-bg))] text-[rgb(var(--nr-term-fg))]", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-2 border-b border-white/10 px-2 py-1.5", children: [
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          value: (p == null ? void 0 : p.id) || "",
          onChange: (h) => s(h.target.value),
          className: "rounded-md border border-white/15 bg-white/5 px-1.5 py-1 font-mono text-[11px]",
          "aria-label": "Browse from",
          children: [
            n.length === 0 && /* @__PURE__ */ a.jsx("option", { value: "", children: "no addressed host" }),
            n.map((h) => /* @__PURE__ */ a.jsxs("option", { value: h.id, children: [
              h.hostname,
              " — ",
              H(h)
            ] }, h.id))
          ]
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: () => d((h) => !h),
          title: u ? "HTTPS — payload encrypted in the capture" : "HTTP — payload readable in the capture",
          className: `grid h-6 w-6 place-items-center rounded ${u ? "text-emerald-400" : "text-amber-400"}`,
          children: u ? /* @__PURE__ */ a.jsx(cn, { size: 12 }) : /* @__PURE__ */ a.jsx(Hl, { size: 12 })
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "flex min-w-[200px] flex-1 items-center gap-1 rounded-md border border-white/15 bg-white/5 px-2", children: [
        /* @__PURE__ */ a.jsx("span", { className: "font-mono text-[10.5px] text-slate-500", children: u ? "https://" : "http://" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            value: o,
            onChange: (h) => i(h.target.value),
            onKeyDown: (h) => {
              h.key === "Enter" && f();
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
            /* @__PURE__ */ a.jsx(Sh, { size: 11 }),
            " Go"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "min-h-0 flex-1 overflow-auto", children: l ? l.ok ? /* @__PURE__ */ a.jsx(Ly, { site: l.site, secure: u }) : /* @__PURE__ */ a.jsx(Dy, { result: l, url: o }) : /* @__PURE__ */ a.jsx(zy, { onPick: f }) })
  ] });
}
function nc() {
  return /* @__PURE__ */ a.jsx("div", { className: "mb-3 rounded-md border border-amber-500/40 bg-amber-500/10 px-2.5 py-1.5 text-[10.5px] leading-snug text-amber-300", children: "Simulated page — generated inside this tab by NetRange Lab. No request was made and this is not a real website." });
}
function zy({ onPick: e }) {
  return /* @__PURE__ */ a.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ a.jsx(nc, {}),
    /* @__PURE__ */ a.jsx("h2", { className: "mb-1 text-[15px] font-bold text-slate-100", children: "The simulated internet" }),
    /* @__PURE__ */ a.jsx("p", { className: "mb-3 text-[12px] leading-snug text-slate-400", children: "These names resolve only once a host has an address, a default gateway, and a router with a path to an ISP cloud. Place one from the palette and cable it to your edge router." }),
    /* @__PURE__ */ a.jsx("ul", { className: "space-y-1.5", children: Ay().map((t) => /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsxs(
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
function Dy({ result: e, url: t }) {
  const n = {
    "no-cloud": "Drag an ISP / Internet node onto the canvas and cable it to your edge router.",
    "no-path": "Follow the cable from this host towards the ISP — one of the links is missing or down.",
    "no-address": "Give this host an IP address, or request one with DHCP.",
    "no-gateway": "Set the default gateway to your router’s address on this subnet.",
    "no-edge-router": "Cable a router between this subnet and the ISP cloud.",
    "isp-down": "The provider link is down — bring it back up from the ISP node."
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ a.jsx(nc, {}),
    /* @__PURE__ */ a.jsx("h2", { className: "mb-1 text-[15px] font-bold text-rose-300", children: "This page did not load" }),
    /* @__PURE__ */ a.jsx("p", { className: "mb-2 font-mono text-[11.5px] text-slate-400", children: t }),
    /* @__PURE__ */ a.jsx("p", { className: "mb-3 text-[12.5px] text-slate-300", children: e.reason }),
    n[e.code] && /* @__PURE__ */ a.jsx("p", { className: "rounded-lg border border-sky-500/30 bg-sky-500/10 px-3 py-2 text-[12px] leading-snug text-sky-200", children: n[e.code] })
  ] });
}
function Ly({ site: e, secure: t }) {
  return /* @__PURE__ */ a.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ a.jsx(nc, {}),
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
const _a = 44, Ry = 520;
function Oy({ height: e, onResize: t }) {
  const n = k((d) => d.consoles), r = k((d) => d.activeConsoleId), s = k((d) => d.setActiveConsole), o = k((d) => d.closeConsole), i = k((d) => d.clearConsole), l = P.useRef(null), c = P.useCallback(
    (d) => {
      d.preventDefault();
      const p = d.clientY, f = e, h = (j) => {
        const w = Math.min(Ry, Math.max(_a, f - (j.clientY - p)));
        t(w);
      }, x = () => {
        window.removeEventListener("pointermove", h), window.removeEventListener("pointerup", x);
      };
      window.addEventListener("pointermove", h), window.addEventListener("pointerup", x);
    },
    [e, t]
  ), u = e <= _a + 4;
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
                    $h,
                    {
                      size: 12,
                      className: "opacity-50 hover:opacity-100",
                      onClick: (f) => {
                        f.stopPropagation(), o(d.id);
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
              children: /* @__PURE__ */ a.jsx(Kg, { size: 13 })
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => t(u ? 240 : _a),
              title: u ? "Expand" : "Collapse",
              className: "shrink-0 rounded p-1 text-slate-400 hover:text-slate-100",
              children: u ? /* @__PURE__ */ a.jsx(Wg, { size: 13 }) : /* @__PURE__ */ a.jsx(Ug, { size: 13 })
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "min-h-0 flex-1", children: !u && (r === "capture" ? /* @__PURE__ */ a.jsx(hy, {}) : r === "simulation" ? /* @__PURE__ */ a.jsx(jy, {}) : r === "browser" ? /* @__PURE__ */ a.jsx(My, {}) : /* @__PURE__ */ a.jsx(dy, { consoleId: r })) })
      ]
    }
  );
}
function _y({ onClose: e }) {
  const t = k((u) => u.labId), n = k((u) => u.setLab), r = k((u) => u.grade), s = k((u) => u.gradeResult), o = k((u) => u.graded);
  k((u) => u.rev);
  const i = Xn(t), [l, c] = P.useState("objectives");
  return /* @__PURE__ */ a.jsxs("aside", { className: "flex w-[286px] shrink-0 flex-col overflow-hidden border-l border-line bg-panel", children: [
    /* @__PURE__ */ a.jsxs("header", { className: "border-b border-line px-3.5 py-3", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "mb-1 flex items-start gap-2", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ a.jsx("h2", { className: "text-[14px] font-bold leading-tight", children: i.title }),
          /* @__PURE__ */ a.jsx("p", { className: "text-[11px] text-soft", children: i.subtitle })
        ] }),
        /* @__PURE__ */ a.jsx("button", { onClick: e, "aria-label": "Hide lab guide", className: "text-soft hover:text-ink", children: /* @__PURE__ */ a.jsx(wh, { size: 16 }) })
      ] }),
      Mo.length > 1 && /* @__PURE__ */ a.jsx(
        "select",
        {
          className: "mt-2 w-full rounded-md border border-line bg-panel2 px-2 py-1.5 text-[12px]",
          value: t,
          onChange: (u) => n(u.target.value),
          children: Mo.map((u) => /* @__PURE__ */ a.jsx("option", { value: u.id, children: u.title }, u.id))
        }
      ),
      /* @__PURE__ */ a.jsx("nav", { className: "mt-2.5 flex gap-1", children: [
        ["objectives", "Objectives"],
        ["brief", "Brief"],
        ["cheatsheet", "Commands"]
      ].map(([u, d]) => /* @__PURE__ */ a.jsx(O, { size: "sm", variant: l === u ? "active" : "outline", onClick: () => c(u), children: d }, u)) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "min-h-0 flex-1 overflow-y-auto px-3.5 py-3", children: [
      l === "objectives" && /* @__PURE__ */ a.jsx(Fy, { lab: i, result: s, graded: o }),
      l === "brief" && /* @__PURE__ */ a.jsx(Hy, { lab: i }),
      l === "cheatsheet" && /* @__PURE__ */ a.jsx(By, { lab: i })
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
            Gh(s.percent)
          ] })
        ] }),
        s.complete && /* @__PURE__ */ a.jsx(re, { tone: "up", children: "COMPLETE" })
      ] }),
      /* @__PURE__ */ a.jsxs(O, { variant: "primary", size: "lg", onClick: () => r(), children: [
        /* @__PURE__ */ a.jsx(br, { size: 15 }),
        " Check Solution"
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "mt-2 text-[10.5px] leading-snug text-soft", children: "Grading inspects the topology state, so GUI and CLI configuration both count." })
    ] })
  ] });
}
function Fy({ lab: e, result: t, graded: n }) {
  const r = t ? A0(t) : [{ section: "Tasks", objectives: e.objectives.map((s) => ({ ...s, pass: !1 })) }];
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    r.map(({ section: s, objectives: o }) => /* @__PURE__ */ a.jsxs("section", { className: "mb-4", children: [
      /* @__PURE__ */ a.jsx(W, { children: s }),
      o.map((i) => /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: `mb-1.5 flex gap-2.5 rounded-lg border p-2.5 text-[12.5px] leading-snug ${n ? i.pass ? "border-up/40 bg-up/10" : "border-down/40 bg-down/10" : "border-line bg-panel2"}`,
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "mt-0.5 shrink-0", children: n ? i.pass ? /* @__PURE__ */ a.jsx(br, { size: 15, className: "text-up" }) : /* @__PURE__ */ a.jsx(Ln, { size: 15, className: "text-down" }) : /* @__PURE__ */ a.jsx(ph, { size: 15, className: "text-soft" }) }),
            /* @__PURE__ */ a.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ a.jsx("div", { children: i.title }),
              /* @__PURE__ */ a.jsxs("div", { className: "mt-0.5 font-mono text-[10px] text-soft", children: [
                i.points,
                " pt",
                i.points === 1 ? "" : "s"
              ] }),
              n && !i.pass && i.hint && /* @__PURE__ */ a.jsxs("div", { className: "mt-1 text-[11px] text-soft", children: [
                /* @__PURE__ */ a.jsx(Jo, { size: 11, className: "mr-1 inline" }),
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
function Hy({ lab: e }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(W, { children: "Scenario" }),
    e.brief.map((t, n) => /* @__PURE__ */ a.jsx("p", { className: "mb-2.5 text-[12.5px] leading-relaxed text-soft", children: t }, n)),
    /* @__PURE__ */ a.jsx(W, { className: "mt-4", children: "Walkthrough" }),
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
function By({ lab: e }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Object.entries(e.cheatsheet).map(([t, n]) => /* @__PURE__ */ a.jsxs("section", { className: "mb-4", children: [
      /* @__PURE__ */ a.jsx(W, { children: t }),
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
const At = {
  up: { led: "#22c55e", body: "border-up/60 bg-up/10", label: "Up" },
  "admin-down": { led: "#f59e0b", body: "border-warn/60 bg-warn/10", label: "Administratively down" },
  down: { led: "#ef4444", body: "border-down/60 bg-down/10", label: "Down — check the cable" },
  idle: { led: "#60a5fa", body: "border-accent/40 bg-accent/10", label: "Radio on, not associated" },
  off: { led: "#475569", body: "border-line bg-panel2", label: "Radio off" },
  empty: { led: "#334155", body: "border-line bg-panel2", label: "No cable" }
};
function Uy({ device: e, topology: t }) {
  const [n, r] = P.useState(null), s = [];
  for (const l of e.interfaces) {
    const c = s[s.length - 1];
    c && c.media === l.media ? c.ports.push(l) : s.push({ media: l.media, ports: [l] });
  }
  const o = e.interfaces.filter((l) => l.link).length, i = e.interfaces.filter((l) => Gr(e, l, t) === "up").length;
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(W, { children: "Front panel" }),
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3 rounded-xl border border-line bg-panel2 p-3", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "mb-2 flex items-baseline justify-between", children: [
        /* @__PURE__ */ a.jsx("span", { className: "font-mono text-[11px] font-bold tracking-wide text-ink", children: e.hostname }),
        /* @__PURE__ */ a.jsxs("span", { className: "font-mono text-[10px] text-soft", children: [
          o,
          " cabled · ",
          i,
          " up · ",
          e.interfaces.length,
          " ports"
        ] })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap items-start gap-x-4 gap-y-3", children: s.map((l, c) => {
        var u;
        return /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("div", { className: "mb-1 font-mono text-[9px] uppercase tracking-widest text-soft", children: ((u = kr[l.media]) == null ? void 0 : u.short) || l.media }),
          /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-1", children: l.ports.map((d) => {
            var x;
            const p = Gr(e, d, t), f = At[p] || At.empty, h = fs(e, d, t);
            return /* @__PURE__ */ a.jsxs(
              "button",
              {
                onMouseEnter: () => r(d.name),
                onMouseLeave: () => r(null),
                onFocus: () => r(d.name),
                onBlur: () => r(null),
                title: qy(e, d, p, h),
                className: `relative grid h-9 w-11 place-items-center rounded border ${f.body} transition-colors`,
                children: [
                  /* @__PURE__ */ a.jsx(
                    "span",
                    {
                      className: "absolute left-1 top-1 h-1.5 w-1.5 rounded-full",
                      style: { background: f.led, boxShadow: p === "up" ? `0 0 5px ${f.led}` : "none" }
                    }
                  ),
                  /* @__PURE__ */ a.jsx("span", { className: "mt-1 font-mono text-[8.5px] leading-none text-ink", children: Vy(d.name) }),
                  h && /* @__PURE__ */ a.jsx(
                    "span",
                    {
                      className: "absolute bottom-[2px] h-[2px] w-5 rounded-full",
                      style: { background: ((x = Ce[h.link.cableType]) == null ? void 0 : x.color) || "#64748b" }
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
    /* @__PURE__ */ a.jsx("div", { className: "mb-3 min-h-[52px] rounded-lg border border-line bg-panel2 px-3 py-2 font-mono text-[11px]", children: n ? /* @__PURE__ */ a.jsx(Wy, { device: e, port: e.interfaces.find((l) => l.name === n), topology: t }) : /* @__PURE__ */ a.jsx("span", { className: "text-soft", children: "Hover a port for its link state and the device at the far end." }) }),
    /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-x-4 gap-y-1 text-[10.5px] text-soft", children: ["up", "admin-down", "down", "empty"].map((l) => /* @__PURE__ */ a.jsxs("span", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ a.jsx("span", { className: "h-2 w-2 rounded-full", style: { background: At[l].led } }),
      At[l].label
    ] }, l)) }),
    /* @__PURE__ */ a.jsx(W, { className: "mt-5", children: "Cable schedule" }),
    o === 0 ? /* @__PURE__ */ a.jsx("p", { className: "font-mono text-[11.5px] text-soft", children: "Nothing is plugged into this device yet." }) : /* @__PURE__ */ a.jsxs("table", { className: "w-full border-collapse font-mono text-[11px]", children: [
      /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { className: "text-[9.5px] uppercase text-soft", children: [
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "Local port" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "Cable" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "Far end" }),
        /* @__PURE__ */ a.jsx("th", { className: "border-b border-line p-1.5 text-left", children: "State" })
      ] }) }),
      /* @__PURE__ */ a.jsx("tbody", { children: e.interfaces.filter((l) => l.link).map((l) => {
        var d, p, f;
        const c = fs(e, l, t), u = Gr(e, l, t);
        return /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5", children: l.name }),
          /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5", style: { color: (d = Ce[c == null ? void 0 : c.link.cableType]) == null ? void 0 : d.color }, children: ((p = Ce[c == null ? void 0 : c.link.cableType]) == null ? void 0 : p.short) || "—" }),
          /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5", children: c ? `${c.device.hostname} ${((f = c.port) == null ? void 0 : f.name) || ""}` : "—" }),
          /* @__PURE__ */ a.jsx("td", { className: "border-b border-line p-1.5", style: { color: At[u].led }, children: At[u].label })
        ] }, l.name);
      }) })
    ] })
  ] });
}
function Wy({ device: e, port: t, topology: n }) {
  var l, c;
  if (!t) return null;
  const r = Gr(e, t, n), s = At[r] || At.empty, o = fs(e, t, n), i = kr[t.media];
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
      o ? ` · ${(l = Ce[o.link.cableType]) == null ? void 0 : l.label} to ${o.device.hostname} ${((c = o.port) == null ? void 0 : c.name) || ""}` : ""
    ] }),
    o && o.link.down && o.link.reason && /* @__PURE__ */ a.jsx("div", { className: "text-down", children: o.link.reason })
  ] });
}
function Vy(e) {
  if (e.includes("/")) {
    const t = e.match(/^([A-Za-z])[A-Za-z]*(.*)$/);
    return t ? `${t[1].toUpperCase()}${t[2]}` : e;
  }
  return e.replace(/^Ethernet/, "Eth").replace(/^Wi-Fi$/, "WiFi");
}
function qy(e, t, n, r) {
  var o, i, l;
  const s = [`${t.name} — ${((o = kr[t.media]) == null ? void 0 : o.label) || t.media}`];
  return t.speed && s.push(t.speed), s.push(((i = At[n]) == null ? void 0 : i.label) || n), r && s.push(`→ ${r.device.hostname} ${((l = r.port) == null ? void 0 : l.name) || ""}`), t.ip && s.push(t.ip), s.join(" · ");
}
function Gy({ deviceId: e, onClose: t }) {
  const n = k((w) => w.topology.devices.find((m) => m.id === e)), r = k((w) => w.topology), s = k((w) => w.updateDevice), o = k((w) => w.openDeviceConsole), i = k((w) => w.engine);
  k((w) => w.rev);
  const [l, c] = P.useState("config"), [u, d] = P.useState(0);
  if (!n) return null;
  const p = An[n.typeId], f = ks(p == null ? void 0 : p.icon), h = (w) => s(n.id, w), x = n.interfaces[u] || n.interfaces[0], j = [
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
  return /* @__PURE__ */ a.jsxs(
    In,
    {
      title: n.hostname,
      subtitle: `${p == null ? void 0 : p.label} · ${n.os.toUpperCase()} · ${n.interfaces.length} interfaces`,
      icon: /* @__PURE__ */ a.jsx("span", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-panel2 text-accent", children: /* @__PURE__ */ a.jsx(f, { size: 18 }) }),
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
              /* @__PURE__ */ a.jsx(ql, { size: 14 }),
              " Open console"
            ]
          }
        ),
        n.runtime.compromised && /* @__PURE__ */ a.jsx(re, { tone: "down", children: "COMPROMISED" }),
        n.runtime.unresponsive && /* @__PURE__ */ a.jsx(re, { tone: "down", children: "SATURATED" }),
        n.security.lockout.locked && /* @__PURE__ */ a.jsx(re, { tone: "warn", children: "LOGINS LOCKED" }),
        /* @__PURE__ */ a.jsx("div", { className: "flex-1" }),
        /* @__PURE__ */ a.jsx("span", { className: "font-mono text-[10px] text-soft", children: n.cli.saved ? "config saved" : "unsaved changes" })
      ] }),
      children: [
        /* @__PURE__ */ a.jsx("nav", { className: "mb-4 flex flex-wrap gap-1.5", children: j.map(([w, m]) => /* @__PURE__ */ a.jsx(O, { size: "sm", variant: l === w ? "active" : "outline", onClick: () => c(w), children: m }, w)) }),
        l === "config" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(Y, { label: "Hostname", children: /* @__PURE__ */ a.jsx(
            "input",
            {
              className: U,
              value: n.hostname,
              onChange: (w) => h((m) => {
                m.hostname = w.target.value || m.hostname;
              })
            }
          ) }),
          /* @__PURE__ */ a.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ a.jsx(Y, { label: "Interface", children: /* @__PURE__ */ a.jsx(
              "select",
              {
                className: U,
                value: u,
                onChange: (w) => d(Number(w.target.value)),
                children: n.interfaces.map((w, m) => /* @__PURE__ */ a.jsxs("option", { value: m, children: [
                  w.name,
                  " ",
                  w.ip ? `— ${w.ip}` : "— unassigned"
                ] }, w.name))
              }
            ) }),
            /* @__PURE__ */ a.jsx(Y, { label: "Administrative state", children: /* @__PURE__ */ a.jsxs(
              "select",
              {
                className: U,
                value: x.enabled ? "1" : "0",
                onChange: (w) => h((m) => {
                  m.interfaces[u].enabled = w.target.value === "1";
                }),
                children: [
                  /* @__PURE__ */ a.jsx("option", { value: "1", children: "up (no shutdown)" }),
                  /* @__PURE__ */ a.jsx("option", { value: "0", children: "administratively down" })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ a.jsx(
              Y,
              {
                label: "IP address",
                hint: x.ip && !je(x.ip) ? "Not a valid IPv4 address." : void 0,
                children: /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    className: U,
                    placeholder: "192.168.10.20",
                    value: x.ip,
                    onChange: (w) => h((m) => {
                      m.interfaces[u].ip = w.target.value.trim(), w.target.value.trim() && (m.interfaces[u].enabled = !0);
                    })
                  }
                )
              }
            ),
            /* @__PURE__ */ a.jsx(
              Y,
              {
                label: "Subnet mask",
                hint: x.mask ? `/${Ve(x.mask) ?? "?"}` : void 0,
                children: /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    className: U,
                    value: x.mask,
                    onChange: (w) => h((m) => {
                      m.interfaces[u].mask = w.target.value.trim();
                    })
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ a.jsx(Y, { label: "Default gateway", hint: "Needed for any traffic leaving the local subnet.", children: /* @__PURE__ */ a.jsx(
            "input",
            {
              className: U,
              placeholder: "192.168.10.1",
              value: n.gateway,
              onChange: (w) => h((m) => {
                m.gateway = w.target.value.trim();
              })
            }
          ) }),
          /* @__PURE__ */ a.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ a.jsx(Y, { label: "MAC address", children: /* @__PURE__ */ a.jsx("input", { className: U, value: x.mac, readOnly: !0 }) }),
            (p == null ? void 0 : p.vlanCapable) && /* @__PURE__ */ a.jsx(Y, { label: "Access VLAN", children: /* @__PURE__ */ a.jsx(
              "input",
              {
                className: U,
                value: x.vlan,
                onChange: (w) => h((m) => {
                  m.interfaces[u].vlan = Number(w.target.value) || 1;
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
                k.getState().openDeviceConsole(n.id), i.dhcpRequest(n, `dev:${n.id}`);
              },
              children: [
                /* @__PURE__ */ a.jsx(Fl, { size: 14 }),
                " Request a DHCP lease"
              ]
            }
          )
        ] }),
        l === "physical" && /* @__PURE__ */ a.jsx(Uy, { device: n, topology: r }),
        l === "wireless" && /* @__PURE__ */ a.jsx(Ky, { device: n, edit: h }),
        l === "toolkit" && /* @__PURE__ */ a.jsx(Yy, { device: n, onClose: t }),
        l === "routing" && /* @__PURE__ */ a.jsx(Zy, { device: n, edit: h }),
        l === "acl" && /* @__PURE__ */ a.jsx(Qy, { device: n, edit: h }),
        l === "services" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(W, { children: "Hosted services" }),
          Object.keys(ir).map((w) => /* @__PURE__ */ a.jsx(
            Re,
            {
              id: `svc-${n.id}-${w}`,
              label: ir[w].label,
              hint: `tcp/${ir[w].port}`,
              checked: !!n.services[w],
              onChange: (m) => h((g) => {
                g.services[w] = m;
              })
            },
            w
          )),
          n.services.dns && /* @__PURE__ */ a.jsx(Xy, { device: n, edit: h }),
          /* @__PURE__ */ a.jsx("p", { className: "mt-2 text-[11px] leading-snug text-soft", children: "Running services become selectable targets in the Cyber Range. Stopping a service is itself a valid mitigation — reducing attack surface." })
        ] }),
        l === "security" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(W, { children: "Credentials" }),
          /* @__PURE__ */ a.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ a.jsx(Y, { label: "Username", children: /* @__PURE__ */ a.jsx(
              "input",
              {
                className: U,
                value: n.security.username,
                onChange: (w) => h((m) => {
                  m.security.username = w.target.value;
                })
              }
            ) }),
            /* @__PURE__ */ a.jsx(
              Y,
              {
                label: "Password",
                hint: Oi.includes(n.security.password) ? "⚠ This password is in the demo wordlist — brute force will succeed." : n.security.password.length < 10 ? "Short passwords are brittle; 10+ characters is the lab target." : "✓ Outside the wordlist and long enough.",
                children: /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    className: U,
                    value: n.security.password,
                    onChange: (w) => h((m) => {
                      m.security.password = w.target.value;
                    })
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ a.jsx(
            Y,
            {
              label: "Max authentication attempts",
              hint: "0 means unlimited. Set 3–5 so the brute-force drill locks out.",
              children: /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "number",
                  min: "0",
                  max: "20",
                  className: U,
                  value: n.security.maxAuthTries,
                  onChange: (w) => h((m) => {
                    m.security.maxAuthTries = Math.max(0, Number(w.target.value) || 0);
                  })
                }
              )
            }
          ),
          /* @__PURE__ */ a.jsx(W, { className: "mt-4", children: "Hardening controls" }),
          /* @__PURE__ */ a.jsx(
            Re,
            {
              label: "SYN cookies",
              hint: "Caps the half-open queue so a SYN flood cannot exhaust it.",
              checked: n.security.synCookies,
              onChange: (w) => h((m) => {
                m.security.synCookies = w;
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            Re,
            {
              label: "Input sanitisation (parameterised queries)",
              hint: "Binds web-app input as parameters, defeating SQL injection.",
              checked: n.security.inputSanitised,
              onChange: (w) => h((m) => {
                m.security.inputSanitised = w;
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            Re,
            {
              label: "Security awareness training",
              hint: "A trained user reports a phishing lure instead of opening it.",
              checked: n.security.awarenessTraining,
              onChange: (w) => h((m) => {
                m.security.awarenessTraining = w;
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            Re,
            {
              label: "Multi-factor authentication",
              hint: "A stolen password alone no longer gets an attacker in.",
              checked: n.security.mfa,
              onChange: (w) => h((m) => {
                m.security.mfa = w;
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            Re,
            {
              label: "Callback verification policy",
              hint: "Staff ring an unexpected caller back on a number from the internal directory. Ends any pretext that rests on a claimed identity.",
              checked: n.security.callbackVerification,
              onChange: (w) => h((m) => {
                m.security.callbackVerification = w;
              })
            }
          ),
          /* @__PURE__ */ a.jsx(
            Re,
            {
              label: "Dynamic ARP Inspection",
              hint: "Drops gratuitous ARP replies, defeating the MitM drill.",
              checked: n.security.dynamicArpInspection,
              onChange: (w) => h((m) => {
                m.security.dynamicArpInspection = w;
              })
            }
          ),
          n.security.lockout.failures > 0 && /* @__PURE__ */ a.jsxs("p", { className: "mt-3 font-mono text-[11px] text-warn", children: [
            "auth failures: ",
            n.security.lockout.failures,
            n.security.lockout.locked ? " — LOCKED" : ""
          ] })
        ] }),
        l === "status" && /* @__PURE__ */ a.jsx(Jy, { device: n })
      ]
    }
  );
}
function Ky({ device: e, edit: t }) {
  const n = k((l) => l.topology), r = k((l) => l.toggleCapture);
  k((l) => l.rev);
  const s = hn(n).get(e.id), o = s && n.devices.find((l) => l.id === s.apId), i = e.radio ? Rh(n, e) : [];
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    e.ap && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs(W, { children: [
        "Broadcast network ",
        e.ap.rogue ? "(rogue clone)" : ""
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ a.jsx(Y, { label: "SSID", children: /* @__PURE__ */ a.jsx(
          "input",
          {
            className: U,
            value: e.ap.ssid,
            onChange: (l) => t((c) => {
              c.ap.ssid = l.target.value;
            })
          }
        ) }),
        /* @__PURE__ */ a.jsx(Y, { label: "Channel", children: /* @__PURE__ */ a.jsx(
          "input",
          {
            className: U,
            type: "number",
            value: e.ap.channel,
            onChange: (l) => t((c) => {
              c.ap.channel = Number(l.target.value) || 6;
            })
          }
        ) })
      ] }),
      /* @__PURE__ */ a.jsx(
        Y,
        {
          label: "Security",
          hint: ue[e.ap.security] && ue[e.ap.security].encrypted ? "✓ Payloads are encrypted over the air." : "⚠ Open network — anything in range can read every payload in cleartext.",
          children: /* @__PURE__ */ a.jsx(
            "select",
            {
              className: U,
              value: e.ap.security,
              onChange: (l) => t((c) => {
                c.ap.security = l.target.value;
              }),
              children: Object.values(ue).map((l) => /* @__PURE__ */ a.jsx("option", { value: l.id, children: l.label }, l.id))
            }
          )
        }
      ),
      /* @__PURE__ */ a.jsx(Y, { label: "Passphrase", children: /* @__PURE__ */ a.jsx(
        "input",
        {
          className: U,
          value: e.ap.passphrase,
          onChange: (l) => t((c) => {
            c.ap.passphrase = l.target.value;
          })
        }
      ) }),
      /* @__PURE__ */ a.jsx(Y, { label: `Cell radius — ${e.ap.range}px`, hint: "How far the signal carries on the canvas. A smaller cell is a real mitigation.", children: /* @__PURE__ */ a.jsx(
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
      /* @__PURE__ */ a.jsx(
        Re,
        {
          label: "802.11w Protected Management Frames",
          hint: "Signs deauthentication frames so forged ones are ignored.",
          checked: e.security.managementFrameProtection,
          onChange: (l) => t((c) => {
            c.security.managementFrameProtection = l;
          })
        }
      ),
      Object.keys(e.ap.deauthed || {}).length > 0 && /* @__PURE__ */ a.jsxs("p", { className: "mt-2 font-mono text-[11px] text-warn", children: [
        Object.keys(e.ap.deauthed).length,
        " station(s) currently banned by a deauth exercise."
      ] })
    ] }),
    e.radio && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(W, { className: e.ap ? "mt-5" : "", children: "Client radio" }),
      /* @__PURE__ */ a.jsx(
        Re,
        {
          label: "Radio enabled",
          checked: e.radio.enabled,
          onChange: (l) => t((c) => {
            c.radio.enabled = l;
          })
        }
      ),
      /* @__PURE__ */ a.jsx(
        Re,
        {
          label: "Monitor mode",
          hint: "Captures every frame in range instead of only its own. This is what makes passive WiFi snooping possible.",
          checked: e.radio.monitorMode,
          onChange: (l) => t((c) => {
            c.radio.monitorMode = l;
          })
        }
      ),
      /* @__PURE__ */ a.jsx(
        Re,
        {
          label: "Capture to the Packet Capture tab",
          checked: !!e.capturing,
          onChange: () => r(e.id)
        }
      ),
      /* @__PURE__ */ a.jsx(
        Y,
        {
          label: "Preferred SSID",
          hint: e.radio.ssid ? "✓ Pinned to one network — an open clone of another name will not be joined." : "⚠ Blank means auto-join anything in range, which is exactly what an evil twin needs.",
          children: /* @__PURE__ */ a.jsx(
            "input",
            {
              className: U,
              placeholder: "(any network)",
              value: e.radio.ssid,
              onChange: (l) => t((c) => {
                c.radio.ssid = l.target.value.trim();
              })
            }
          )
        }
      ),
      /* @__PURE__ */ a.jsx(W, { className: "mt-4", children: "Networks in range" }),
      i.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "font-mono text-[11.5px] text-soft", children: "No access points within radio range." }) : /* @__PURE__ */ a.jsx("ul", { className: "space-y-1", children: i.map(({ ap: l, dbm: c }) => {
        const u = !ue[l.ap.security] || !ue[l.ap.security].encrypted, d = s && s.apId === l.id;
        return /* @__PURE__ */ a.jsxs(
          "li",
          {
            className: `flex items-center gap-2 rounded-md border px-2 py-1.5 font-mono text-[11.5px] ${d ? "border-up/50 bg-up/10" : "border-line bg-panel2"}`,
            children: [
              /* @__PURE__ */ a.jsx("span", { className: "flex-1 truncate", children: l.ap.ssid }),
              /* @__PURE__ */ a.jsx(re, { tone: u ? "warn" : "up", children: u ? "OPEN" : l.ap.security.toUpperCase() }),
              /* @__PURE__ */ a.jsxs("span", { className: "text-soft", children: [
                c,
                " dBm · ",
                Lh(c),
                "/4"
              ] }),
              d && /* @__PURE__ */ a.jsx(re, { tone: "up", children: "joined" })
            ]
          },
          l.id
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
function Yy({ device: e, onClose: t }) {
  const n = k((w) => w.engine), r = k((w) => w.topology), s = k((w) => w.commit), o = k((w) => w.setActiveConsole), i = k((w) => w.ensureConsole), l = k((w) => w.toggleCapture);
  k((w) => w.rev);
  const [c, u] = P.useState(""), [d, p] = P.useState(lr.sqli.defaultPayload), f = r.devices.filter((w) => w.id !== e.id), h = f.find((w) => w.id === c) || null, x = (w) => {
    i("attack", "Cyber Range"), i("capture", "Packet Capture"), o("attack");
    const m = h || f.find((g) => w.canTarget(g)) || null;
    Jn(w.id, {
      engine: n,
      attacker: e,
      target: m,
      commit: s,
      payload: w.needsPayload ? d : void 0
    }), t();
  }, j = ix.map((w) => ({
    category: w,
    items: Object.values(lr).filter((m) => m.category === w)
  })).filter((w) => w.items.length);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("p", { className: "mb-3 text-[12px] leading-relaxed text-soft", children: [
      "Exercises launch from ",
      /* @__PURE__ */ a.jsx("strong", { className: "text-ink", children: e.hostname }),
      ". Wireless ones reach their target through the air and need no cable. Everything is simulated inside this tab."
    ] }),
    /* @__PURE__ */ a.jsx(Y, { label: "Target", hint: "Leave on auto and the first eligible node is chosen for each exercise.", children: /* @__PURE__ */ a.jsxs("select", { className: U, value: c, onChange: (w) => u(w.target.value), children: [
      /* @__PURE__ */ a.jsx("option", { value: "", children: "Auto-select" }),
      f.map((w) => /* @__PURE__ */ a.jsxs("option", { value: w.id, children: [
        w.hostname,
        " — ",
        H(w) || "no IP"
      ] }, w.id))
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
    j.map(({ category: w, items: m }) => /* @__PURE__ */ a.jsxs("section", { className: "mb-3", children: [
      /* @__PURE__ */ a.jsx(W, { children: w }),
      m.map((g) => {
        const v = ks(g.icon), b = g.category === "Wireless" ? !!e.radio : h ? g.canTarget(h) : f.some(($) => g.canTarget($));
        return /* @__PURE__ */ a.jsxs("div", { className: "mb-2 rounded-lg border border-line bg-panel2 p-2.5", children: [
          /* @__PURE__ */ a.jsxs("h4", { className: "mb-1 flex items-center gap-2 text-[12.5px] font-bold", children: [
            /* @__PURE__ */ a.jsx(v, { size: 14, className: "text-down" }),
            g.label,
            !b && /* @__PURE__ */ a.jsx(re, { tone: "warn", children: "unavailable" })
          ] }),
          /* @__PURE__ */ a.jsx("p", { className: "mb-2 text-[11px] leading-snug text-soft", children: g.summary }),
          g.needsPayload && /* @__PURE__ */ a.jsx(
            "input",
            {
              className: `${U} mb-2`,
              value: d,
              onChange: ($) => p($.target.value),
              "aria-label": "Injection payload"
            }
          ),
          /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ a.jsx(O, { variant: "danger", size: "sm", disabled: !b, onClick: () => x(g), children: "Launch" }),
            /* @__PURE__ */ a.jsxs("span", { className: "text-[10.5px] text-soft", children: [
              /* @__PURE__ */ a.jsx("strong", { className: "text-ink", children: "Defence:" }),
              " ",
              g.mitigation
            ] })
          ] })
        ] }, g.id);
      })
    ] }, w))
  ] });
}
function Zy({ device: e, edit: t }) {
  const [n, r] = P.useState({ network: "", mask: "255.255.255.0", nextHop: "" }), [s, o] = P.useState({ id: "", name: "" });
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(W, { children: "Static routes" }),
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
          className: U,
          placeholder: "10.0.0.0",
          value: n.network,
          onChange: (i) => r({ ...n, network: i.target.value })
        }
      ),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: U,
          placeholder: "255.0.0.0",
          value: n.mask,
          onChange: (i) => r({ ...n, mask: i.target.value })
        }
      ),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: U,
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
        disabled: !je(n.network) || !je(n.mask) || !je(n.nextHop),
        onClick: () => {
          t((i) => {
            i.routes.push({ ...n });
          }), r({ network: "", mask: "255.255.255.0", nextHop: "" });
        },
        children: "Add route"
      }
    ),
    /* @__PURE__ */ a.jsx(W, { className: "mt-5", children: "VLANs" }),
    /* @__PURE__ */ a.jsxs("div", { className: "mb-2 flex flex-wrap gap-1.5", children: [
      e.vlans.length === 0 && /* @__PURE__ */ a.jsx("span", { className: "text-[12px] text-soft", children: "None configured." }),
      e.vlans.map((i) => /* @__PURE__ */ a.jsxs(re, { tone: "accent", children: [
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
          className: U,
          placeholder: "VLAN id, e.g. 20",
          value: s.id,
          onChange: (i) => o({ ...s, id: i.target.value })
        }
      ),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: U,
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
function Qy({ device: e, edit: t }) {
  const [n, r] = P.useState({ id: "101", action: "deny", source: "any", dest: "any" });
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(W, { children: "Access control list" }),
    /* @__PURE__ */ a.jsxs("p", { className: "mb-3 text-[11.5px] leading-snug text-soft", children: [
      "Rules are evaluated top-down on every simulated flow crossing this device. A ",
      /* @__PURE__ */ a.jsx("code", { children: "deny" }),
      " ",
      "matching the source stops a flood at the perimeter."
    ] }),
    e.acl.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "mb-3 font-mono text-[11.5px] text-soft", children: "No rules — all traffic permitted." }) : /* @__PURE__ */ a.jsx("ol", { className: "mb-3 space-y-1", children: e.acl.map((s, o) => /* @__PURE__ */ a.jsxs("li", { className: "flex items-center gap-2 rounded-md border border-line bg-panel2 px-2 py-1.5 font-mono text-[11.5px]", children: [
      /* @__PURE__ */ a.jsx(re, { tone: s.action === "deny" ? "down" : "up", children: s.action }),
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
      /* @__PURE__ */ a.jsx("input", { className: U, value: n.id, onChange: (s) => r({ ...n, id: s.target.value }) }),
      /* @__PURE__ */ a.jsxs("select", { className: U, value: n.action, onChange: (s) => r({ ...n, action: s.target.value }), children: [
        /* @__PURE__ */ a.jsx("option", { value: "deny", children: "deny" }),
        /* @__PURE__ */ a.jsx("option", { value: "permit", children: "permit" })
      ] }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: U,
          placeholder: "source / any",
          value: n.source,
          onChange: (s) => r({ ...n, source: s.target.value })
        }
      ),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: U,
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
function Xy({ device: e, edit: t }) {
  const [n, r] = P.useState({ name: "", ip: "" });
  return /* @__PURE__ */ a.jsxs("div", { className: "mt-4", children: [
    /* @__PURE__ */ a.jsx(W, { children: "DNS zone" }),
    Object.entries(e.dnsZone).length === 0 && /* @__PURE__ */ a.jsx("p", { className: "mb-2 font-mono text-[11.5px] text-soft", children: "Empty zone — add an A record." }),
    Object.entries(e.dnsZone).map(([s, o]) => /* @__PURE__ */ a.jsxs("div", { className: "mb-1 flex items-center gap-2 font-mono text-[11.5px]", children: [
      /* @__PURE__ */ a.jsx("span", { className: "flex-1 truncate", children: s }),
      /* @__PURE__ */ a.jsx("span", { className: "text-soft", children: "A" }),
      /* @__PURE__ */ a.jsx("span", { children: o }),
      /* @__PURE__ */ a.jsx("button", { className: "text-down", onClick: () => t((i) => {
        delete i.dnsZone[s];
      }), children: "×" })
    ] }, s)),
    /* @__PURE__ */ a.jsxs("div", { className: "mt-2 grid gap-2 sm:grid-cols-2", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: U,
          placeholder: "web.lab.local",
          value: n.name,
          onChange: (s) => r({ ...n, name: s.target.value })
        }
      ),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: U,
          placeholder: "192.168.10.80",
          value: n.ip,
          onChange: (s) => r({ ...n, ip: s.target.value })
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx(
      O,
      {
        variant: "outline",
        size: "sm",
        className: "mt-2",
        disabled: !n.name || !je(n.ip),
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
function Jy({ device: e }) {
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
    /* @__PURE__ */ a.jsx(W, { children: "Runtime counters" }),
    /* @__PURE__ */ a.jsx("dl", { className: "mb-4 grid grid-cols-2 gap-x-4 gap-y-1.5 font-mono text-[12px]", children: n.map(([s, o]) => /* @__PURE__ */ a.jsxs(Kr.Fragment, { children: [
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
    /* @__PURE__ */ a.jsx(W, { children: "ARP / neighbour table" }),
    r.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "font-mono text-[11.5px] text-soft", children: "Empty — generate traffic to populate it." }) : /* @__PURE__ */ a.jsx("ul", { className: "space-y-1 font-mono text-[11.5px]", children: r.map(([s, o]) => /* @__PURE__ */ a.jsxs("li", { className: o.spoofed ? "text-down" : "", children: [
      s,
      " → ",
      o.mac,
      " ",
      o.spoofed ? "  ⚠ duplicate (poisoned)" : ""
    ] }, s)) }),
    e.database && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(W, { className: "mt-4", children: "Mock database" }),
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
function ew({ onClose: e }) {
  const t = k((m) => m.topology), n = k((m) => m.engine), r = k((m) => m.commit), s = k((m) => m.setActiveConsole), o = k((m) => m.ensureConsole);
  k((m) => m.rev);
  const i = t.devices, l = P.useMemo(
    () => i.find((m) => m.typeId === "pc") || i[0],
    [i]
  ), [c, u] = P.useState((l == null ? void 0 : l.id) || ""), [d, p] = P.useState(""), [f, h] = P.useState(lr.sqli.defaultPayload), x = i.find((m) => m.id === c), j = (m) => {
    o("attack", "Cyber Range"), s("attack");
    const g = lr[m], v = i.find((b) => b.id === d) || i.find((b) => b.id !== c && g.canTarget(b));
    Jn(m, {
      engine: n,
      attacker: x,
      target: v,
      commit: r,
      payload: m === "sqli" ? f : void 0
    });
  };
  return /* @__PURE__ */ a.jsxs(
    In,
    {
      title: "Cyber Range",
      subtitle: "Synthetic exercises — nothing leaves this browser tab",
      icon: /* @__PURE__ */ a.jsx("span", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-down/40 bg-down/15 text-down", children: /* @__PURE__ */ a.jsx(ta, { size: 18 }) }),
      onClose: e,
      width: "max-w-xl",
      footer: /* @__PURE__ */ a.jsx("p", { className: "text-[11px] leading-snug text-soft", children: "Exercises are grouped by the phase of an engagement they belong to, because order is most of the method: you scan before you exploit, and you report rather than hoard. Every one of these runs against simulated devices in this tab — against a real network, the same actions need written authorisation and a defined scope." }),
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "mb-4 grid gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ a.jsx(Y, { label: "Attacker node", children: /* @__PURE__ */ a.jsxs("select", { className: U, value: c, onChange: (m) => u(m.target.value), children: [
            i.length === 0 && /* @__PURE__ */ a.jsx("option", { value: "", children: "no devices placed" }),
            i.map((m) => /* @__PURE__ */ a.jsxs("option", { value: m.id, children: [
              m.hostname,
              " — ",
              H(m) || "no IP"
            ] }, m.id))
          ] }) }),
          /* @__PURE__ */ a.jsx(Y, { label: "Target node", children: /* @__PURE__ */ a.jsxs("select", { className: U, value: d, onChange: (m) => p(m.target.value), children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "auto-select a valid target" }),
            i.filter((m) => m.id !== c).map((m) => /* @__PURE__ */ a.jsxs("option", { value: m.id, children: [
              m.hostname,
              " — ",
              H(m) || "no IP"
            ] }, m.id))
          ] }) })
        ] }),
        ax.map((m) => {
          const g = Object.values(lr).filter((v) => v.phase === m);
          return g.length ? /* @__PURE__ */ a.jsxs("section", { children: [
            /* @__PURE__ */ a.jsx(W, { children: m }),
            g.map((v) => w(v))
          ] }, m) : null;
        })
      ]
    }
  );
  function w(m) {
    {
      const g = ks(m.icon), v = i.find(($) => $.id === d), b = m.category === "Wireless" ? !!(x && x.radio) : v ? m.canTarget(v) : i.some(($) => $.id !== c && m.canTarget($));
      return /* @__PURE__ */ a.jsxs("article", { className: "mb-2.5 rounded-xl border border-line bg-panel2 p-3", children: [
        /* @__PURE__ */ a.jsxs("h4", { className: "mb-1 flex items-center gap-2 text-[13px] font-bold", children: [
          /* @__PURE__ */ a.jsx(g, { size: 15, className: "text-down" }),
          m.label,
          !b && /* @__PURE__ */ a.jsx(re, { tone: "warn", children: "no valid target" })
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
            className: `${U} mb-2`,
            value: f,
            onChange: ($) => h($.target.value),
            "aria-label": "Injection payload"
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ a.jsx(O, { variant: "danger", size: "sm", disabled: !x || !b, onClick: () => j(m.id), children: "Run exercise" }),
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
function tw({ onClose: e }) {
  const t = k((o) => o.settings), n = k((o) => o.updateSettings), r = k((o) => o.resetTopology), s = k((o) => o.loadStarterTopology);
  return /* @__PURE__ */ a.jsxs(
    In,
    {
      title: "Settings",
      subtitle: "Stored in this browser only",
      icon: /* @__PURE__ */ a.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg border border-line bg-panel2 text-accent", children: /* @__PURE__ */ a.jsx(ea, { size: 18 }) }),
      onClose: e,
      width: "max-w-md",
      children: [
        /* @__PURE__ */ a.jsx(W, { children: "Appearance" }),
        /* @__PURE__ */ a.jsx(Y, { label: "Theme", children: /* @__PURE__ */ a.jsx("div", { className: "flex gap-1.5", children: [
          ["light", "Light", Kl],
          ["dark", "Dark", Wl]
        ].map(([o, i, l]) => /* @__PURE__ */ a.jsxs(
          O,
          {
            size: "sm",
            variant: t.theme === o ? "active" : "outline",
            onClick: () => n({ theme: o }),
            children: [
              /* @__PURE__ */ a.jsx(l, { size: 14 }),
              " ",
              i
            ]
          },
          o
        )) }) }),
        /* @__PURE__ */ a.jsx(W, { className: "mt-5", children: "Live network" }),
        /* @__PURE__ */ a.jsx(
          Re,
          {
            label: "Background traffic",
            hint: "Idle hosts resolve names, fetch pages and refresh ARP, so the capture pane is never empty. Realtime mode only.",
            checked: t.ambient !== !1,
            onChange: (o) => n({ ambient: o })
          }
        ),
        /* @__PURE__ */ a.jsx(
          Re,
          {
            label: "Show canvas grid",
            checked: t.showGrid,
            onChange: (o) => n({ showGrid: o })
          }
        ),
        /* @__PURE__ */ a.jsx(
          Re,
          {
            label: "Show hostnames and addresses",
            checked: t.showLabels,
            onChange: (o) => n({ showLabels: o })
          }
        ),
        /* @__PURE__ */ a.jsx(W, { className: "mt-5", children: "Simulation" }),
        /* @__PURE__ */ a.jsx(Y, { label: `Speed — ${t.speed}×`, hint: "Scales the virtual clock: packet flight, ping intervals and exercise pacing.", children: /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "range",
            min: "0.5",
            max: "3",
            step: "0.5",
            value: t.speed,
            onChange: (o) => n({ speed: Number(o.target.value) }),
            className: "w-full accent-[rgb(var(--nr-accent))]"
          }
        ) }),
        /* @__PURE__ */ a.jsx(W, { className: "mt-5", children: "Workspace" }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ a.jsxs(O, { variant: "outline", size: "sm", onClick: () => {
            r(), e();
          }, children: [
            /* @__PURE__ */ a.jsx(jt, { size: 14 }),
            " Clear workspace"
          ] }),
          /* @__PURE__ */ a.jsxs(O, { variant: "outline", size: "sm", onClick: () => {
            s(), e();
          }, children: [
            /* @__PURE__ */ a.jsx(Vl, { size: 14 }),
            " Load starter segment"
          ] })
        ] }),
        /* @__PURE__ */ a.jsx(W, { className: "mt-5", children: "Keyboard" }),
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
        ].map(([o, i]) => /* @__PURE__ */ a.jsxs(Kr.Fragment, { children: [
          /* @__PURE__ */ a.jsx("dt", { className: "font-mono text-[11px] text-soft", children: o }),
          /* @__PURE__ */ a.jsx("dd", { children: i })
        ] }, o)) })
      ]
    }
  );
}
function tf(e) {
  const t = ct(e);
  if (t === null) return null;
  const n = t >>> 24 & 255;
  return n < 128 ? { letter: "A", defaultPrefix: 8, note: "large networks" } : n < 192 ? { letter: "B", defaultPrefix: 16, note: "medium networks" } : n < 224 ? { letter: "C", defaultPrefix: 24, note: "small networks" } : n < 240 ? { letter: "D", defaultPrefix: null, note: "multicast" } : { letter: "E", defaultPrefix: null, note: "reserved / experimental" };
}
const Wt = (e, t) => {
  const [n, r] = t.split("/"), s = r === "0" ? 0 : 4294967295 << 32 - Number(r) >>> 0;
  return (e & s) >>> 0 === (ct(n) & s) >>> 0;
};
function nw(e) {
  const t = ct(e);
  return t === null ? null : Wt(t, "10.0.0.0/8") || Wt(t, "172.16.0.0/12") || Wt(t, "192.168.0.0/16") ? { kind: "private", label: "Private (RFC 1918)", routable: !1 } : Wt(t, "127.0.0.0/8") ? { kind: "loopback", label: "Loopback", routable: !1 } : Wt(t, "169.254.0.0/16") ? { kind: "link-local", label: "Link-local (APIPA)", routable: !1 } : Wt(t, "224.0.0.0/4") ? { kind: "multicast", label: "Multicast", routable: !1 } : Wt(t, "100.64.0.0/10") ? { kind: "cgnat", label: "Carrier-grade NAT", routable: !1 } : Wt(t, "240.0.0.0/4") ? { kind: "reserved", label: "Reserved", routable: !1 } : { kind: "public", label: "Public", routable: !0 };
}
function Fa(e) {
  const t = ct(e);
  return t === null ? "" : [24, 16, 8, 0].map((n) => (t >>> n & 255).toString(2).padStart(8, "0")).join(".");
}
function xr(e, t) {
  if (!je(e)) return null;
  const n = typeof t == "number" ? t : /^\d+$/.test(String(t)) ? Number(t) : Ve(t);
  if (n == null || n < 0 || n > 32) return null;
  const r = zh(n), s = ct(r), o = ct(e), i = (o & s) >>> 0, l = (i | ~s >>> 0) >>> 0, c = 2 ** (32 - n);
  let u, d, p;
  return n === 32 ? (u = 1, d = i, p = i) : n === 31 ? (u = 2, d = i, p = l) : (u = c - 2, d = i + 1 >>> 0, p = l - 1 >>> 0), {
    address: e,
    prefix: n,
    mask: r,
    cidr: `${kt(i)}/${n}`,
    wildcard: kt(~s >>> 0),
    network: kt(i),
    broadcast: kt(l),
    firstHost: kt(d),
    lastHost: kt(p),
    totalAddresses: c,
    usableHosts: u,
    isNetworkAddress: n < 31 && o === i,
    isBroadcastAddress: n < 31 && o === l,
    class: tf(e),
    scope: nw(e),
    binaryIp: Fa(e),
    binaryMask: Fa(r),
    binaryNetwork: Fa(kt(i))
  };
}
function rw(e) {
  return e ? e.isNetworkAddress ? `${e.address} is the network address of ${e.cidr} — it identifies the subnet, so no host can use it.` : e.isBroadcastAddress ? `${e.address} is the broadcast address of ${e.cidr} — it reaches every host, so none can use it.` : null : null;
}
function sw(e) {
  const t = String(e || "").trim();
  if (!t) return { ok: !1, reason: "Enter an address, for example 192.168.1.10/24", error: "Enter an address, for example 192.168.1.10/24" };
  if (t.includes("/")) {
    const [s, o] = t.split("/"), i = s.trim(), l = Number(String(o).trim());
    return je(i) ? !Number.isInteger(l) || l < 0 || l > 32 ? { ok: !1, reason: "Prefix length must be between 0 and 32.", error: "Prefix length must be between 0 and 32." } : { ok: !0, ip: i, prefix: l, assumed: !1 } : { ok: !1, reason: `${i} is not a valid IPv4 address.` };
  }
  const n = t.split(/\s+/);
  if (n.length >= 2) {
    const [s, o] = n;
    if (!je(s)) return { ok: !1, reason: `${s} is not a valid IPv4 address.` };
    if (!je(o)) return { ok: !1, reason: `${o} is not a valid subnet mask.` };
    const i = Ve(o);
    return i === null ? { ok: !1, reason: `${o} is not a contiguous mask — the ones must be unbroken.` } : { ok: !0, ip: s, prefix: i, assumed: !1 };
  }
  if (!je(t)) return { ok: !1, reason: `${t} is not a valid IPv4 address.` };
  const r = tf(t);
  return !r || r.defaultPrefix === null ? { ok: !1, reason: `Class ${r ? r.letter : "?"} addresses have no default mask — give a prefix.` } : { ok: !0, ip: t, prefix: r.defaultPrefix, assumed: !0 };
}
function ow(e, t, n, r = 256) {
  const s = xr(e, t);
  if (!s) return { ok: !1, reason: "That is not a valid network.", error: "That is not a valid network." };
  if (n <= t)
    return { ok: !1, reason: `/${n} is not longer than /${t} — a split needs smaller blocks.` };
  if (n > 32) return { ok: !1, reason: "Prefix length cannot exceed 32.", error: "Prefix length cannot exceed 32." };
  const o = 2 ** (n - t);
  if (o > r)
    return { ok: !1, count: o, reason: `That would make ${o.toLocaleString()} subnets — too many to list.` };
  const i = 2 ** (32 - n), l = ct(s.network), c = Array.from(
    { length: o },
    (u, d) => xr(kt(l + d * i >>> 0), n)
  );
  return { ok: !0, count: o, rows: c };
}
function aw(e = 8, t = 32) {
  const n = [];
  for (let r = e; r <= t; r++) {
    const s = 2 ** (32 - r), o = zh(r);
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
const kn = {
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
}, so = [
  { key: "mask", label: "Subnet mask", placeholder: "255.255.255.0" },
  { key: "network", label: "Network address", placeholder: "192.168.1.0" },
  { key: "broadcast", label: "Broadcast address", placeholder: "192.168.1.255" },
  { key: "firstHost", label: "First usable host", placeholder: "192.168.1.1" },
  { key: "lastHost", label: "Last usable host", placeholder: "192.168.1.254" },
  { key: "usableHosts", label: "Usable hosts", placeholder: "254", numeric: !0 }
], Ui = {
  easy: { prefixes: [24], label: "Whole octets (/24)" },
  medium: { prefixes: [25, 26, 27, 28], label: "Inside the last octet (/25–/28)" },
  hard: { prefixes: [17, 18, 20, 22, 23, 29, 30], label: "Across octets (/17–/30)" }
}, iw = Object.entries(Ui).map(([e, t]) => ({ id: e, ...t })), Hu = (e, t) => e[Math.floor(t() * e.length)];
function Wi(e = "medium", t = Math.random) {
  const n = Ui[e] || Ui.medium, r = Hu(n.prefixes, t), s = Hu(
    [
      () => `192.168.${Math.floor(t() * 256)}.${Math.floor(t() * 256)}`,
      () => `172.${16 + Math.floor(t() * 16)}.${Math.floor(t() * 256)}.${Math.floor(t() * 256)}`,
      () => `10.${Math.floor(t() * 256)}.${Math.floor(t() * 256)}.${Math.floor(t() * 256)}`
    ],
    t
  )(), o = xr(s, r);
  return !o || o.isNetworkAddress || o.isBroadcastAddress ? Wi(e, t) : { ip: s, prefix: r, difficulty: e };
}
const lw = (e) => String(e ?? "").trim().replace(/\s+/g, "");
function cw(e, t, n = {}) {
  const r = xr(e, t);
  if (!r) return { ok: !1, reason: "That question is not valid.", results: [], error: "That question is not valid.", results: [] };
  const s = t % 8 === 0 ? 256 : 2 ** (8 - t % 8), o = so.map((c) => {
    const u = String(r[c.key]), d = lw(n[c.key]);
    if (!d) return { ...c, state: "blank", expected: u, given: "" };
    const p = c.numeric ? Number(d.replace(/,/g, "")) === Number(u) : d === u;
    return {
      ...c,
      state: p ? "correct" : "wrong",
      expected: u,
      given: d,
      hint: p ? null : uw(c.key, r, d, s)
    };
  }), i = o.filter((c) => c.state !== "blank"), l = o.filter((c) => c.state === "correct");
  return {
    ok: !0,
    results: o,
    info: r,
    answered: i.length,
    correct: l.length,
    total: so.length,
    allCorrect: l.length === so.length
  };
}
function uw(e, t, n, r) {
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
function dw(e, t) {
  const n = xr(e, t);
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
      detail: `Counting in ${o}s: ${pw(o, c)}. ${c} falls in the ${u} block.`,
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
function pw(e, t) {
  const n = [];
  for (let i = 0; i < 256; i += e) n.push(i);
  if (n.length <= 9) return n.join(", ");
  const r = Math.floor(t / e), s = Math.max(0, r - 2), o = n.slice(s, r + 3);
  return `${s > 0 ? "…, " : ""}${o.join(", ")}${r + 3 < n.length ? ", …" : ""}`;
}
function hw({ onClose: e }) {
  const t = k((h) => h.topology), [n, r] = P.useState("192.168.10.37/24"), [s, o] = P.useState(26), [i, l] = P.useState("practice"), c = P.useMemo(() => sw(n), [n]), u = P.useMemo(
    () => c.ok ? xr(c.ip, c.prefix) : null,
    [c]
  ), d = rw(u), p = P.useMemo(
    () => u ? ow(u.network, u.prefix, s) : null,
    [u, s]
  ), f = t.devices.flatMap((h) => h.interfaces.filter((x) => x.ip).map((x) => ({ device: h, iface: x }))).slice(0, 12);
  return /* @__PURE__ */ a.jsxs(
    In,
    {
      title: "Subnet calculator",
      subtitle: "Hover any field for what it means",
      icon: /* @__PURE__ */ a.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg border border-line bg-panel2 text-accent", children: /* @__PURE__ */ a.jsx(Xo, { size: 18 }) }),
      onClose: e,
      width: "max-w-3xl",
      children: [
        /* @__PURE__ */ a.jsx("nav", { className: "mb-4 flex flex-wrap gap-1.5", children: [["practice", "Practice"], ["calculator", "Check an address"], ["split", "Split a block"], ["table", "Prefix table"]].map(([h, x]) => /* @__PURE__ */ a.jsx(O, { size: "sm", variant: i === h ? "active" : "outline", onClick: () => l(h), children: x }, h)) }),
        i !== "practice" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(
            Y,
            {
              label: "Address",
              hint: "Accepts 192.168.1.10/24, 192.168.1.10 255.255.255.0, or a bare address.",
              children: /* @__PURE__ */ a.jsx(
                "input",
                {
                  className: U,
                  value: n,
                  onChange: (h) => r(h.target.value),
                  spellCheck: !1,
                  "aria-label": "Address to analyse"
                }
              )
            }
          ),
          f.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "mb-4 flex flex-wrap gap-1.5", children: [
            /* @__PURE__ */ a.jsx("span", { className: "text-[11px] text-soft", children: "From your topology:" }),
            f.map(({ device: h, iface: x }) => /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: () => r(`${x.ip}/${Ve(x.mask) ?? 24}`),
                className: "rounded-md border border-line bg-panel2 px-1.5 py-0.5 font-mono text-[10.5px] text-soft hover:border-accent hover:text-accent",
                title: `${h.hostname} ${x.name}`,
                children: x.ip
              },
              `${h.id}-${x.name}`
            ))
          ] }),
          !c.ok && /* @__PURE__ */ a.jsx("p", { className: "mb-3 text-[12.5px] text-down", children: c.error }),
          c.ok && c.assumed && /* @__PURE__ */ a.jsxs("p", { className: "mb-3 text-[11.5px] text-warn", children: [
            "No prefix given — assuming the classful default /",
            c.prefix,
            "."
          ] })
        ] }),
        i === "practice" && /* @__PURE__ */ a.jsx(xw, {}),
        u && i === "calculator" && /* @__PURE__ */ a.jsx(fw, { info: u, warning: d }),
        u && i === "split" && /* @__PURE__ */ a.jsx(mw, { info: u, split: p, splitTo: s, setSplitTo: o }),
        i === "table" && /* @__PURE__ */ a.jsx(gw, {})
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
      title: kn[e] || "",
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-soft", children: t }),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `font-mono text-[13px] ${r === "down" ? "text-down" : r === "up" ? "text-up" : "text-ink"}`,
            children: n
          }
        ),
        kn[e] && /* @__PURE__ */ a.jsx("div", { className: "pointer-events-none absolute left-0 top-full z-20 mt-1 hidden w-60 rounded-lg border border-line bg-panel p-2 text-[11px] leading-snug text-soft shadow-xl group-hover:block group-focus:block", children: kn[e] })
      ]
    }
  );
}
function fw({ info: e, warning: t }) {
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
      /* @__PURE__ */ a.jsxs(re, { tone: "accent", title: kn.class, children: [
        "Class ",
        e.class.letter
      ] }),
      /* @__PURE__ */ a.jsx(re, { tone: e.scope.kind === "public" ? "warn" : "up", title: kn.scope, children: e.scope.label }),
      /* @__PURE__ */ a.jsxs(re, { children: [
        e.prefix,
        " network bits · ",
        32 - e.prefix,
        " host bits"
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(W, { children: "In binary" }),
    /* @__PURE__ */ a.jsxs("div", { className: "rounded-lg border border-line bg-panel2 p-2.5 font-mono text-[11.5px] leading-relaxed", children: [
      /* @__PURE__ */ a.jsxs("div", { title: kn.binaryIp, children: [
        /* @__PURE__ */ a.jsx("span", { className: "text-soft", children: "address " }),
        /* @__PURE__ */ a.jsx("span", { className: "text-accent", children: e.binaryIp.slice(0, Bu(e.prefix)) }),
        /* @__PURE__ */ a.jsx("span", { className: "text-ink", children: e.binaryIp.slice(Bu(e.prefix)) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { title: kn.binaryMask, children: [
        /* @__PURE__ */ a.jsx("span", { className: "text-soft", children: "mask    " }),
        /* @__PURE__ */ a.jsx("span", { className: "text-ink", children: e.binaryMask })
      ] }),
      /* @__PURE__ */ a.jsx("p", { className: "mt-1.5 whitespace-normal text-[10.5px] text-soft", children: "The highlighted bits are fixed by the mask; everything after them numbers the hosts." })
    ] })
  ] });
}
function Bu(e) {
  const t = Math.floor(e / 8), n = e % 8;
  return t * 9 + (n || 0);
}
function mw({ info: e, split: t, splitTo: n, setSplitTo: r }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(Y, { label: `Split ${e.cidr} into /${n} subnets`, children: /* @__PURE__ */ a.jsx(
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
function gw() {
  const e = aw(16, 30);
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
function xw() {
  const [e, t] = P.useState("medium"), [n, r] = P.useState(() => Wi("medium")), [s, o] = P.useState({}), [i, l] = P.useState(null), [c, u] = P.useState(!1), [d, p] = P.useState({ attempted: 0, solved: 0 }), f = P.useMemo(() => dw(n.ip, n.prefix), [n]), h = (w = e) => {
    t(w), r(Wi(w)), o({}), l(null), u(!1);
  }, x = () => {
    const w = cw(n.ip, n.prefix, s);
    l(w), p((m) => ({
      attempted: m.attempted + 1,
      solved: m.solved + (w.allCorrect ? 1 : 0)
    }));
  }, j = (w) => i == null ? void 0 : i.results.find((m) => m.key === w);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3 flex flex-wrap items-center gap-2", children: [
      iw.map((w) => /* @__PURE__ */ a.jsx(
        O,
        {
          size: "sm",
          variant: e === w.id ? "active" : "outline",
          onClick: () => h(w.id),
          children: w.label
        },
        w.id
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
    /* @__PURE__ */ a.jsx("div", { className: "mb-3 grid gap-2.5 sm:grid-cols-2", children: so.map((w) => {
      const m = j(w.key), g = (m == null ? void 0 : m.state) === "correct" ? "border-up/60 bg-up/10" : (m == null ? void 0 : m.state) === "wrong" ? "border-down/60 bg-down/10" : "border-line bg-panel2";
      return /* @__PURE__ */ a.jsxs("div", { className: `rounded-lg border ${g} p-2.5`, children: [
        /* @__PURE__ */ a.jsxs("label", { className: "mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-soft", children: [
          w.label,
          (m == null ? void 0 : m.state) === "correct" && /* @__PURE__ */ a.jsx(br, { size: 12, className: "text-up" }),
          (m == null ? void 0 : m.state) === "wrong" && /* @__PURE__ */ a.jsx(Ln, { size: 12, className: "text-down" })
        ] }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            className: U,
            value: s[w.key] ?? "",
            placeholder: w.placeholder,
            spellCheck: !1,
            onChange: (v) => o((b) => ({ ...b, [w.key]: v.target.value })),
            onKeyDown: (v) => {
              v.key === "Enter" && x();
            },
            "aria-label": w.label
          }
        ),
        (m == null ? void 0 : m.state) === "wrong" && /* @__PURE__ */ a.jsxs("p", { className: "mt-1.5 flex gap-1.5 text-[11px] leading-snug text-soft", children: [
          /* @__PURE__ */ a.jsx(Jo, { size: 11, className: "mt-0.5 shrink-0 text-warn" }),
          /* @__PURE__ */ a.jsx("span", { children: m.hint })
        ] })
      ] }, w.key);
    }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3 flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ a.jsx(O, { variant: "primary", size: "sm", onClick: x, children: "Check my answers" }),
      /* @__PURE__ */ a.jsxs(O, { variant: "outline", size: "sm", onClick: () => h(), children: [
        /* @__PURE__ */ a.jsx(Vl, { size: 13 }),
        " New question"
      ] }),
      /* @__PURE__ */ a.jsx(O, { variant: "ghost", size: "sm", onClick: () => u((w) => !w), children: c ? "Hide the method" : "Show me the method" })
    ] }),
    i && /* @__PURE__ */ a.jsx(
      "p",
      {
        className: `mb-3 rounded-lg border px-3 py-2 text-[12.5px] ${i.allCorrect ? "border-up/50 bg-up/10 text-up" : "border-warn/50 bg-warn/10 text-warn"}`,
        children: i.allCorrect ? "All six correct — that is the whole method applied cleanly." : `${i.correct} of ${i.total} correct. Read the hints, fix those boxes and check again.`
      }
    ),
    c && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(W, { children: "How to work it out" }),
      /* @__PURE__ */ a.jsx("ol", { className: "space-y-1.5", children: f.map((w, m) => /* @__PURE__ */ a.jsxs("li", { className: "flex gap-2.5 rounded-lg border border-line bg-panel2 p-2.5", children: [
        /* @__PURE__ */ a.jsx("span", { className: "grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 font-mono text-[10px] font-bold text-accent", children: m + 1 }),
        /* @__PURE__ */ a.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ a.jsx("div", { className: "text-[12.5px] font-semibold", children: w.title }),
          /* @__PURE__ */ a.jsx("div", { className: "text-[11.5px] leading-snug text-soft", children: w.detail }),
          /* @__PURE__ */ a.jsx("div", { className: "mt-0.5 font-mono text-[11.5px] text-accent", children: w.result })
        ] })
      ] }, w.title)) })
    ] })
  ] });
}
function yw({ onClose: e }) {
  const t = k((r) => r.challengeRole), n = k((r) => r.setChallengeRole);
  return k((r) => r.challenge), /* @__PURE__ */ a.jsxs(
    In,
    {
      title: "Red team vs Blue team",
      subtitle: "Harden a network, hand it over, see what holds",
      icon: /* @__PURE__ */ a.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg border border-line bg-panel2 text-accent", children: /* @__PURE__ */ a.jsx(ps, { size: 18 }) }),
      onClose: e,
      width: "max-w-3xl",
      children: [
        !t && /* @__PURE__ */ a.jsx(ww, { setRole: n }),
        t === "blue" && /* @__PURE__ */ a.jsx(vw, {}),
        t === "red" && /* @__PURE__ */ a.jsx(bw, {})
      ]
    }
  );
}
function ww({ setRole: e }) {
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
              /* @__PURE__ */ a.jsx(ps, { size: 16, className: "text-accent" }),
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
              /* @__PURE__ */ a.jsx(jh, { size: 16, className: "text-down" }),
              " Red team"
            ] }),
            /* @__PURE__ */ a.jsx("p", { className: "text-[12px] leading-snug text-soft", children: "Paste a challenge code, load their network, and work the objectives." })
          ]
        }
      )
    ] })
  ] });
}
function vw() {
  const e = k((N) => N.challengePhase), t = k((N) => N.challengeScenario), n = k((N) => N.challengeDeadline), r = k((N) => N.challengeCode), s = k((N) => N.startSetup), o = k((N) => N.armChallenge), i = k((N) => N.tickChallenge), l = k((N) => N.readiness), c = k((N) => N.endChallenge), u = k((N) => N.staffNetwork), d = k((N) => N.openSocial), p = k((N) => N.topology), f = p.personnel || [];
  k((N) => N.rev);
  const [h, x] = P.useState("small-office"), [j, w] = P.useState(20), [m, g] = P.useState(15), [v, b] = P.useState(""), [$, y] = P.useState("Blue team"), [C, E] = P.useState(!1), [B, z] = P.useState(!0), [q, ee] = P.useState(Date.now());
  P.useEffect(() => {
    const N = setInterval(() => {
      ee(Date.now()), i();
    }, 1e3);
    return () => clearInterval(N);
  }, [i]);
  const te = ro(h);
  if (P.useEffect(() => {
    w(te.setupMinutes), g(te.breachMinutes), b(`${te.name} — round 1`);
  }, [h]), e === "idle" || !t)
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("p", { className: "mb-3 text-[12.5px] leading-relaxed text-soft", children: "Pick a scenario. You get a build window to deploy the required nodes and secure them; when it closes the network locks and becomes the board the other team attacks." }),
      /* @__PURE__ */ a.jsx("div", { className: "mb-3 space-y-2", children: Mx.map((N) => /* @__PURE__ */ a.jsxs(
        "label",
        {
          className: `flex cursor-pointer gap-3 rounded-xl border p-3 ${h === N.id ? "border-accent bg-accent/10" : "border-line bg-panel2"}`,
          children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "radio",
                className: "mt-1 accent-[rgb(var(--nr-accent))]",
                checked: h === N.id,
                onChange: () => x(N.id)
              }
            ),
            /* @__PURE__ */ a.jsxs("span", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ a.jsxs("span", { className: "flex flex-wrap items-center gap-2 text-[13px] font-bold", children: [
                N.name,
                /* @__PURE__ */ a.jsxs(re, { tone: "accent", children: [
                  N.nodes,
                  " nodes"
                ] }),
                /* @__PURE__ */ a.jsxs(re, { children: [
                  N.setupMinutes,
                  " min build"
                ] }),
                /* @__PURE__ */ a.jsxs(re, { children: [
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
        /* @__PURE__ */ a.jsx(Y, { label: "Challenge name", children: /* @__PURE__ */ a.jsx("input", { className: U, value: v, onChange: (N) => b(N.target.value) }) }),
        /* @__PURE__ */ a.jsx(Y, { label: "Your team", children: /* @__PURE__ */ a.jsx("input", { className: U, value: $, onChange: (N) => y(N.target.value) }) }),
        /* @__PURE__ */ a.jsx(Y, { label: "Build minutes", children: /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "number",
            min: "5",
            max: "60",
            className: U,
            value: j,
            onChange: (N) => w(Number(N.target.value) || 20)
          }
        ) }),
        /* @__PURE__ */ a.jsx(Y, { label: "Breach minutes", children: /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "number",
            min: "5",
            max: "60",
            className: U,
            value: m,
            onChange: (N) => g(Number(N.target.value) || 15)
          }
        ) })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "my-3 rounded-xl border border-line bg-panel2 p-3", children: /* @__PURE__ */ a.jsx(
        Re,
        {
          id: "staff-network",
          checked: B,
          onChange: z,
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
            s(h, { setupMinutes: j, breachMinutes: m, name: v, author: $ }), u(B);
          },
          children: "Start the build window"
        }
      ),
      /* @__PURE__ */ a.jsx("p", { className: "mt-2 text-[11.5px] text-soft", children: "The clock starts immediately. You can close this panel and keep building — the countdown stays in the toolbar." })
    ] });
  if (e === "armed")
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("div", { className: "mb-3 flex items-center gap-2 rounded-xl border border-up/50 bg-up/10 p-3", children: [
        /* @__PURE__ */ a.jsx(cn, { size: 16, className: "shrink-0 text-up" }),
        /* @__PURE__ */ a.jsxs("div", { className: "min-w-0 text-[12.5px]", children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Build locked." }),
          " The defensive settings are frozen into the code, so the other team cannot weaken them from their own copy."
        ] })
      ] }),
      /* @__PURE__ */ a.jsx(W, { children: "Hand this to the other team" }),
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
                await navigator.clipboard.writeText(r), E(!0);
              } catch {
                E(!1);
              }
            },
            children: [
              /* @__PURE__ */ a.jsx(_l, { size: 13 }),
              " ",
              C ? "Copied" : "Copy code"
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
  const I = l(), be = Math.max(0, Math.floor(((n || q) - q) / 1e3)), ke = `${Math.floor(be / 60)}:${String(be % 60).padStart(2, "0")}`, Q = be < 180, D = { high: "down", medium: "warn", low: "neutral" };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3 flex flex-wrap items-center gap-3 rounded-xl border border-line bg-panel2 p-3", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ a.jsx("div", { className: "text-[13px] font-bold", children: t.name }),
        /* @__PURE__ */ a.jsx("div", { className: "text-[11.5px] leading-snug text-soft", children: t.brief })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ a.jsx("div", { className: `font-mono text-[26px] font-bold tabular-nums ${Q ? "text-down" : "text-ink"}`, children: ke }),
        /* @__PURE__ */ a.jsx("div", { className: "text-[10.5px] text-soft", children: "build window" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs(W, { children: [
      "Required build — ",
      I.roster.placed,
      "/",
      I.roster.required,
      " nodes"
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "mb-3 h-2 overflow-hidden rounded-full bg-line", children: /* @__PURE__ */ a.jsx("div", { className: "h-full rounded-full bg-accent transition-all", style: { width: `${I.roster.percent}%` } }) }),
    /* @__PURE__ */ a.jsx("div", { className: "mb-3 grid gap-1.5 sm:grid-cols-2", children: I.roster.rows.map((N) => /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-[12px] ${N.ok ? "border-up/50 bg-up/10" : "border-line bg-panel2"}`,
        children: [
          N.ok ? /* @__PURE__ */ a.jsx(br, { size: 13, className: "shrink-0 text-up" }) : /* @__PURE__ */ a.jsx(Ln, { size: 13, className: "shrink-0 text-soft" }),
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
    f.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(W, { children: "Your technicians" }),
      /* @__PURE__ */ a.jsx("div", { className: "mb-3 grid gap-1.5 sm:grid-cols-2", children: f.map((N) => {
        const F = (p.zones || []).find((A) => A.id === N.areaZoneId);
        return /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-line bg-panel2 px-2.5 py-1.5 text-[12px]", children: [
          /* @__PURE__ */ a.jsx(Yl, { size: 13, className: `shrink-0 ${N.roleId === "senior" ? "text-up" : "text-warn"}` }),
          /* @__PURE__ */ a.jsxs("span", { className: "min-w-0 flex-1 truncate", children: [
            N.name,
            " ",
            /* @__PURE__ */ a.jsxs("span", { className: "text-soft", children: [
              "— ",
              N.roleId
            ] })
          ] }),
          /* @__PURE__ */ a.jsx("span", { className: "truncate text-[11px] text-soft", children: F ? F.name : "whole site" })
        ] }, N.id);
      }) }),
      /* @__PURE__ */ a.jsxs("p", { className: "mb-3 text-[11.5px] leading-snug text-soft", children: [
        "Add sections to the canvas and assign each technician a patch in the",
        " ",
        /* @__PURE__ */ a.jsx("button", { className: "underline hover:text-ink", onClick: d, children: "People" }),
        " panel. Awareness training and a callback policy live on each host, under Security."
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs(W, { children: [
      "Hardening — ",
      I.hardening.score,
      "/100"
    ] }),
    I.hardening.findings.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "mb-3 text-[12px] text-up", children: "Nothing obvious left open." }) : /* @__PURE__ */ a.jsx("ul", { className: "mb-3 max-h-[132px] space-y-1 overflow-y-auto", children: I.hardening.findings.map((N, F) => /* @__PURE__ */ a.jsxs("li", { className: "flex items-start gap-2 text-[11.5px] leading-snug", children: [
      /* @__PURE__ */ a.jsx(re, { tone: D[N.severity], children: N.severity }),
      /* @__PURE__ */ a.jsxs("span", { className: "min-w-0", children: [
        /* @__PURE__ */ a.jsx("span", { className: "font-mono text-ink", children: N.device }),
        " ",
        /* @__PURE__ */ a.jsx("span", { className: "text-soft", children: N.text })
      ] })
    ] }, F)) }),
    I.blockers.length > 0 && /* @__PURE__ */ a.jsx("ul", { className: "mb-3 space-y-1", children: I.blockers.map((N, F) => /* @__PURE__ */ a.jsxs("li", { className: "text-[11.5px] text-warn", children: [
      "• ",
      N
    ] }, F)) }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ a.jsxs(O, { variant: "primary", size: "sm", onClick: o, children: [
        /* @__PURE__ */ a.jsx(cn, { size: 13 }),
        " Lock the build and hand over"
      ] }),
      /* @__PURE__ */ a.jsx(O, { variant: "ghost", size: "sm", onClick: c, children: "Abandon round" }),
      !I.ready && /* @__PURE__ */ a.jsx("span", { className: "text-[11px] text-soft", children: "You can hand over early — unfinished work counts against you." })
    ] })
  ] });
}
function bw() {
  const e = k((y) => y.challenge), t = k((y) => y.loadChallenge), n = k((y) => y.challengeScore), r = k((y) => y.challengeStartedAt), s = k((y) => y.challengeDeadline), o = k((y) => y.challengePhase), i = k((y) => y.tickChallenge), l = k((y) => y.endChallenge), c = k((y) => y.openSocial), u = k((y) => y.topology.personnel || []);
  k((y) => y.rev);
  const [d, p] = P.useState(""), [f, h] = P.useState(""), [x, j] = P.useState(""), [w, m] = P.useState(Date.now());
  if (P.useEffect(() => {
    const y = setInterval(() => {
      m(Date.now()), i();
    }, 1e3);
    return () => clearInterval(y);
  }, [i]), !e)
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(Y, { label: "Challenge code", hint: "Paste the code the other team sent you.", children: /* @__PURE__ */ a.jsx(
        "textarea",
        {
          value: d,
          onChange: (y) => {
            p(y.target.value), h("");
          },
          placeholder: "NRC1.…",
          className: "h-28 w-full resize-none rounded-lg border border-line bg-panel2 p-2 font-mono text-[10.5px] text-ink",
          "aria-label": "Challenge code to load"
        }
      ) }),
      f && /* @__PURE__ */ a.jsx("p", { className: "mb-2 text-[12.5px] text-down", children: f }),
      /* @__PURE__ */ a.jsx(
        O,
        {
          variant: "primary",
          size: "lg",
          onClick: () => {
            const y = t(d);
            y.ok || h(y.reason);
          },
          children: "Load challenge"
        }
      ),
      /* @__PURE__ */ a.jsx("p", { className: "mt-3 text-[11.5px] leading-snug text-soft", children: "Loading replaces the workspace with their network and clears the capture buffer, so you start from the same place they left it." })
    ] });
  const g = n(), v = Math.floor((w - (r || w)) / 1e3), b = o === "over" ? 0 : Math.max(0, Math.floor(((s || w) - w) / 1e3)), $ = (y) => `${Math.floor(y / 60)}:${String(y % 60).padStart(2, "0")}`;
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3 flex flex-wrap items-center gap-3 rounded-xl border border-line bg-panel2 p-3", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ a.jsx("div", { className: "truncate text-[14px] font-bold", children: e.name }),
        /* @__PURE__ */ a.jsxs("div", { className: "text-[11.5px] text-soft", children: [
          "built by ",
          e.author
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs(re, { tone: b === 0 ? "down" : b < 120 ? "warn" : "neutral", children: [
        /* @__PURE__ */ a.jsx(hh, { size: 11 }),
        " ",
        b === 0 ? "time up" : $(b)
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "font-mono text-[22px] font-bold tabular-nums", children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-down", children: g.red }),
          /* @__PURE__ */ a.jsxs("span", { className: "text-soft", children: [
            " / ",
            g.total
          ] })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "text-[10.5px] text-soft", children: "red score" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "mb-3 h-2 overflow-hidden rounded-full bg-line", children: /* @__PURE__ */ a.jsx("div", { className: "h-full rounded-full bg-down transition-all", style: { width: `${g.redPercent}%` } }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3 flex items-center gap-2 rounded-lg border border-line bg-panel2 px-3 py-2", children: [
      /* @__PURE__ */ a.jsx(cn, { size: 13, className: "shrink-0 text-soft" }),
      /* @__PURE__ */ a.jsx("span", { className: "text-[11.5px] leading-snug text-soft", children: "Their defensive settings are frozen for this round. Changing one on your copy reverts it — you have to get through what they built, not edit it." })
    ] }),
    /* @__PURE__ */ a.jsx(W, { children: "Objectives" }),
    /* @__PURE__ */ a.jsx("div", { className: "mb-3 space-y-1.5", children: g.results.map((y) => /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `flex gap-2.5 rounded-lg border p-2.5 ${y.captured ? "border-down/50 bg-down/10" : "border-line bg-panel2"}`,
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "mt-0.5 shrink-0", children: y.captured ? /* @__PURE__ */ a.jsx(br, { size: 15, className: "text-down" }) : /* @__PURE__ */ a.jsx(Ln, { size: 15, className: "text-soft" }) }),
          /* @__PURE__ */ a.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[12.5px] font-semibold", children: [
              y.label,
              /* @__PURE__ */ a.jsxs(re, { tone: y.captured ? "down" : "neutral", children: [
                y.points,
                " pts"
              ] }),
              /* @__PURE__ */ a.jsx(re, { children: y.phase })
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "text-[11.5px] leading-snug text-soft", children: y.captured ? y.blue : y.red })
          ] })
        ]
      },
      y.id
    )) }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap gap-2", children: [
      u.length > 0 && /* @__PURE__ */ a.jsxs(O, { variant: "danger", size: "sm", onClick: () => c(), children: [
        /* @__PURE__ */ a.jsx(ar, { size: 13 }),
        " Call their technicians (",
        u.length,
        ")"
      ] }),
      /* @__PURE__ */ a.jsx(
        O,
        {
          variant: "outline",
          size: "sm",
          onClick: () => j(Ix(e, g, { elapsedSeconds: v })),
          children: "Generate result code"
        }
      ),
      /* @__PURE__ */ a.jsx(O, { variant: "ghost", size: "sm", onClick: l, children: "End challenge" })
    ] }),
    x && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(W, { className: "mt-4", children: "Send this back to them" }),
      /* @__PURE__ */ a.jsx(
        "textarea",
        {
          readOnly: !0,
          value: x,
          onFocus: (y) => y.target.select(),
          className: "h-20 w-full resize-none rounded-lg border border-line bg-panel2 p-2 font-mono text-[10.5px] text-ink",
          "aria-label": "Result code"
        }
      )
    ] })
  ] });
}
function kw({ onClose: e }) {
  var $;
  const t = k((y) => y.topology), n = t.personnel || [], r = k((y) => y.socialTarget), s = k((y) => y.setSocialTarget), o = k((y) => y.socialAttempt), i = k((y) => y.staffNetwork), l = k((y) => y.assignTechnician), c = k((y) => y.challengeRole), u = k((y) => y.rev), [d, p] = P.useState("authority"), [f, h] = P.useState("confirm-username"), [x, j] = P.useState(""), w = P.useRef(null), m = n.find((y) => y.id === r) || n[0], g = P.useMemo(() => {
    var C;
    const y = [];
    for (const E of t.devices) {
      if (E.role === "attacker") continue;
      y.push({ value: E.hostname, label: `${E.hostname} — hostname` });
      const B = H(E);
      B && y.push({ value: B, label: `${B} — address of ${E.hostname}` }), (C = E.ap) != null && C.ssid && y.push({ value: E.ap.ssid, label: `${E.ap.ssid} — wireless network` });
    }
    return y;
  }, [t.devices, u]);
  P.useEffect(() => {
    var y;
    (y = w.current) == null || y.scrollTo({ top: w.current.scrollHeight, behavior: "smooth" });
  }, [($ = m == null ? void 0 : m.transcript) == null ? void 0 : $.length]);
  const v = () => {
    m && o({ technicianId: m.id, tactic: d, ask: f, claim: x });
  };
  if (!n.length)
    return /* @__PURE__ */ a.jsxs(
      In,
      {
        title: "The human layer",
        subtitle: "Synthetic technicians — scripted, not a language model",
        icon: /* @__PURE__ */ a.jsx(Uu, { children: /* @__PURE__ */ a.jsx(ar, { size: 18 }) }),
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
            /* @__PURE__ */ a.jsx(gh, { size: 14 }),
            " Put a senior and a junior on this network"
          ] }) })
        ]
      }
    );
  const b = gs[m.roleId];
  return b.suspicionLimit, /* @__PURE__ */ a.jsx(
    In,
    {
      title: "The human layer",
      subtitle: "Scripted technicians — fixed pretexts, and a debrief after every call",
      icon: /* @__PURE__ */ a.jsx(Uu, { children: /* @__PURE__ */ a.jsx(ar, { size: 18 }) }),
      onClose: e,
      width: "max-w-4xl",
      footer: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[11px] text-soft", children: [
        /* @__PURE__ */ a.jsx(Ln, { size: 13 }),
        "These are not real people and nothing is sent anywhere. The point of the exercise is the control named in each debrief.",
        /* @__PURE__ */ a.jsx("span", { className: "flex-1" }),
        c !== "red" && /* @__PURE__ */ a.jsxs(O, { size: "sm", onClick: () => i(!1), children: [
          /* @__PURE__ */ a.jsx(bh, { size: 13 }),
          " Stand the technicians down"
        ] })
      ] }),
      children: /* @__PURE__ */ a.jsxs("div", { className: "grid gap-4 lg:grid-cols-[260px_1fr]", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ a.jsx(W, { children: "On the network" }),
          n.map((y) => {
            const C = gs[y.roleId], E = (t.zones || []).find((z) => z.id === y.areaZoneId), B = y.id === m.id;
            return /* @__PURE__ */ a.jsxs(
              "button",
              {
                onClick: () => s(y.id),
                className: `w-full rounded-xl border p-3 text-left transition ${B ? "border-accent bg-accent/10" : "border-line bg-panel2 hover:border-accent/50"}`,
                children: [
                  /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ a.jsx("span", { className: `grid h-7 w-7 shrink-0 place-items-center rounded-lg ${y.roleId === "senior" ? "bg-up/15 text-up" : "bg-warn/15 text-warn"}`, children: /* @__PURE__ */ a.jsx(Yl, { size: 14 }) }),
                    /* @__PURE__ */ a.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ a.jsx("div", { className: "truncate text-[13px] font-semibold", children: y.name }),
                      /* @__PURE__ */ a.jsx("div", { className: "truncate text-[10px] uppercase tracking-wider text-soft", children: C.label })
                    ] })
                  ] }),
                  /* @__PURE__ */ a.jsxs("div", { className: "mt-2 flex flex-wrap gap-1", children: [
                    /* @__PURE__ */ a.jsx(re, { tone: y.reported ? "down" : y.suspicion >= C.suspicionLimit - 2 ? "warn" : "neutral", children: y.reported ? "reported you" : `suspicion ${y.suspicion}/${C.suspicionLimit}` }),
                    y.granted.length > 0 && /* @__PURE__ */ a.jsxs(re, { tone: "down", children: [
                      y.granted.length,
                      " helped with"
                    ] })
                  ] }),
                  /* @__PURE__ */ a.jsxs("div", { className: "mt-1 text-[10px] text-soft", children: [
                    "Covers ",
                    E ? E.name : "the whole site"
                  ] })
                ]
              },
              y.id
            );
          }),
          c !== "red" && (t.zones || []).length > 0 && /* @__PURE__ */ a.jsx(Y, { label: "Assign to a section", hint: "A technician can only act on devices in their own patch.", children: /* @__PURE__ */ a.jsxs(
            "select",
            {
              className: U,
              value: m.areaZoneId || "",
              onChange: (y) => l(m.id, y.target.value || null),
              "aria-label": "Assign technician to a section",
              children: [
                /* @__PURE__ */ a.jsx("option", { value: "", children: "Whole site" }),
                (t.zones || []).map((y) => /* @__PURE__ */ a.jsx("option", { value: y.id, children: y.name }, y.id))
              ]
            }
          ) }),
          /* @__PURE__ */ a.jsx("p", { className: "rounded-xl border border-line bg-panel2 p-3 text-[11px] leading-relaxed text-soft", children: b.blurb })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "min-w-0 space-y-3", children: [
          /* @__PURE__ */ a.jsx(
            "div",
            {
              ref: w,
              className: "h-64 overflow-y-auto rounded-xl border border-line bg-panel2 p-3",
              "aria-label": "Call transcript",
              "aria-live": "polite",
              children: m.transcript.length ? /* @__PURE__ */ a.jsx("div", { className: "space-y-2", children: m.transcript.map((y, C) => /* @__PURE__ */ a.jsx(Sw, { m: y, name: m.name }, C)) }) : /* @__PURE__ */ a.jsx("p", { className: "grid h-full place-items-center text-center text-[12px] text-soft", children: /* @__PURE__ */ a.jsxs("span", { children: [
                /* @__PURE__ */ a.jsx(xh, { size: 18, className: "mx-auto mb-2 opacity-60" }),
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
            /* @__PURE__ */ a.jsx(Y, { label: "Tactic", hint: Mn[d].blurb, children: /* @__PURE__ */ a.jsx("select", { className: U, value: d, onChange: (y) => p(y.target.value), "aria-label": "Pressure tactic", children: Ox.map((y) => /* @__PURE__ */ a.jsx("option", { value: y.id, children: y.label }, y.id)) }) }),
            /* @__PURE__ */ a.jsx(Y, { label: "Detail you quote", hint: "Checked against the real network.", children: /* @__PURE__ */ a.jsxs("select", { className: U, value: x, onChange: (y) => j(y.target.value), "aria-label": "Detail to quote", children: [
              /* @__PURE__ */ a.jsx("option", { value: "", children: "Quote nothing specific" }),
              g.map((y, C) => /* @__PURE__ */ a.jsx("option", { value: y.value, children: y.label }, C))
            ] }) }),
            /* @__PURE__ */ a.jsx(Y, { label: "What you ask for", hint: sa[f].blurb, children: /* @__PURE__ */ a.jsx("select", { className: U, value: f, onChange: (y) => h(y.target.value), "aria-label": "The ask", children: _x.map((y) => /* @__PURE__ */ a.jsx("option", { value: y.id, children: y.label }, y.id)) }) })
          ] }),
          !m.reported && /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ a.jsxs(O, { variant: "danger", onClick: v, children: [
              /* @__PURE__ */ a.jsx(ar, { size: 14 }),
              " Make the call"
            ] }),
            /* @__PURE__ */ a.jsx("span", { className: "text-[11px] text-soft", children: Mn[d].opener.replace("{caller}", "Jordan Ellis").replace("{colleague}", "Dave") })
          ] })
        ] })
      ] })
    }
  );
}
function Uu({ children: e }) {
  return /* @__PURE__ */ a.jsx("span", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/40 bg-accent/15 text-accent", children: e });
}
function Sw({ m: e, name: t }) {
  var n, r;
  return e.who === "red" ? /* @__PURE__ */ a.jsxs("div", { className: "ml-auto max-w-[85%] rounded-xl rounded-br-sm border border-down/30 bg-down/10 p-2.5", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "mb-0.5 text-[10px] uppercase tracking-wider text-soft", children: [
      "You — ",
      (n = Mn[e.tactic]) == null ? void 0 : n.label,
      " · asking to ",
      (r = sa[e.ask]) == null ? void 0 : r.effect
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
      e.ok ? /* @__PURE__ */ a.jsx(Ln, { size: 13, className: "mt-0.5 shrink-0" }) : /* @__PURE__ */ a.jsx(Jo, { size: 13, className: "mt-0.5 shrink-0" }),
      /* @__PURE__ */ a.jsx("span", { children: e.debrief })
    ] })
  ] });
}
function jw({ initialState: e = null, scenario: t = null } = {}) {
  const n = k((I) => I.engine), r = k((I) => I.loadStarterTopology), s = k((I) => I.importState), o = k((I) => I.ensureConsole), [i, l] = P.useState(!0), [c, u] = P.useState(!0), [d, p] = P.useState(210), f = k((I) => I.modalDeviceId), h = k((I) => I.openDeviceModal), x = k((I) => I.closeDeviceModal), j = k((I) => I.attackPanelOpen), w = k((I) => I.challengeOpen), m = k((I) => I.socialOpen), g = k((I) => I.openSocial), v = k((I) => I.closeSocial), b = k((I) => I.closeChallenge), $ = k((I) => I.openAttackPanel), y = k((I) => I.closeAttackPanel), [C, E] = P.useState(!1), [B, z] = P.useState(!1);
  P.useEffect(() => {
    o("attack", "Cyber Range"), o("browser", "Web Browser"), e ? s(e) : t === "starter" && r(), n.startTelemetry(), n.setAmbient(k.getState().settings.ambient !== !1), n.startAmbientTraffic();
  }, []);
  const q = P.useRef(0), ee = P.useRef(performance.now());
  P.useEffect(() => {
    const I = (be) => {
      const ke = Math.min(64, be - ee.current);
      ee.current = be, n.tick(ke), q.current = requestAnimationFrame(I);
    };
    return q.current = requestAnimationFrame(I), () => cancelAnimationFrame(q.current);
  }, [n]);
  const te = P.useCallback((I) => {
    const be = I.target, ke = be && (/^(INPUT|TEXTAREA|SELECT)$/.test(be.tagName) || be.isContentEditable), Q = k.getState(), D = I.ctrlKey || I.metaKey;
    if (I.key === "Escape") {
      y(), E(!1), z(!1), b(), v(), x(), Q.closeContextMenu(), Q.setTool("select"), Q.clearSelection();
      return;
    }
    if (!ke) {
      if (D && I.key.toLowerCase() === "z") {
        I.preventDefault(), Q.undo();
        return;
      }
      if (D && (I.key.toLowerCase() === "y" || I.shiftKey && I.key.toLowerCase() === "z")) {
        I.preventDefault(), Q.redo();
        return;
      }
      if (D && I.key.toLowerCase() === "d") {
        I.preventDefault(), Q.selectedId && Q.duplicateDevice(Q.selectedId);
        return;
      }
      if (I.key === "Delete" || I.key === "Backspace") {
        I.preventDefault(), Q.deleteSelection();
        return;
      }
      if (I.key === " ") {
        I.preventDefault(), Q.toggleRunning();
        return;
      }
      if (I.key === "c" || I.key === "C") {
        Q.setTool(Q.tool === "cable" ? "select" : "cable");
        return;
      }
      if (I.key === "f" || I.key === "F") {
        Q.fitView();
        return;
      }
      if (I.key === "p" || I.key === "P") {
        Q.setTool(Q.tool === "pdu" ? "select" : "pdu");
        return;
      }
      if (I.key === "s" || I.key === "S") {
        Q.engine.mode === "simulation" && Q.stepPdu();
        return;
      }
      if (I.key === "v" || I.key === "V") {
        Q.setTool("select");
        return;
      }
      I.key === "?" && (E(!1), u(!0));
    }
  }, []);
  return P.useEffect(() => (window.addEventListener("keydown", te), () => window.removeEventListener("keydown", te)), [te]), /* @__PURE__ */ a.jsxs("div", { className: "flex h-full w-full flex-col overflow-hidden bg-[rgb(var(--nr-bg))] text-ink", children: [
    /* @__PURE__ */ a.jsx(
      ty,
      {
        onTogglePalette: () => l((I) => !I),
        onToggleLab: () => u((I) => !I),
        onOpenAttack: $,
        onOpenSettings: () => E(!0),
        onOpenSubnet: () => z(!0),
        onOpenSocial: () => g(),
        paletteOpen: i,
        labOpen: c
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: "flex min-h-0 flex-1", children: [
      i && /* @__PURE__ */ a.jsx(sy, { onClose: () => l(!1) }),
      /* @__PURE__ */ a.jsxs("main", { className: "flex min-w-0 flex-1 flex-col", children: [
        /* @__PURE__ */ a.jsx(cy, { onOpenDevice: h }),
        /* @__PURE__ */ a.jsx(Oy, { height: d, onResize: p })
      ] }),
      c && /* @__PURE__ */ a.jsx(_y, { onClose: () => u(!1) })
    ] }),
    f && /* @__PURE__ */ a.jsx(Gy, { deviceId: f, onClose: x }),
    j && /* @__PURE__ */ a.jsx(ew, { onClose: y }),
    C && /* @__PURE__ */ a.jsx(tw, { onClose: () => E(!1) }),
    B && /* @__PURE__ */ a.jsx(hw, { onClose: () => z(!1) }),
    w && /* @__PURE__ */ a.jsx(yw, { onClose: b }),
    m && /* @__PURE__ */ a.jsx(kw, { onClose: v })
  ] });
}
const Nw = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.invisible{visibility:hidden}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{top:0;right:0;bottom:0;left:0}.bottom-3{bottom:.75rem}.bottom-\\[2px\\]{bottom:2px}.left-0{left:0}.left-0\\.5{left:.125rem}.left-1{left:.25rem}.left-1\\/2{left:50%}.left-\\[20px\\]{left:20px}.right-3{right:.75rem}.top-0{top:0}.top-0\\.5{top:.125rem}.top-1{top:.25rem}.top-full{top:100%}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.mx-0\\.5{margin-left:.125rem;margin-right:.125rem}.mx-auto{margin-left:auto;margin-right:auto}.my-1{margin-top:.25rem;margin-bottom:.25rem}.my-3{margin-top:.75rem;margin-bottom:.75rem}.mb-0\\.5{margin-bottom:.125rem}.mb-1{margin-bottom:.25rem}.mb-1\\.5{margin-bottom:.375rem}.mb-2{margin-bottom:.5rem}.mb-2\\.5{margin-bottom:.625rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.ml-4{margin-left:1rem}.ml-auto{margin-left:auto}.mr-1{margin-right:.25rem}.mt-0\\.5{margin-top:.125rem}.mt-1{margin-top:.25rem}.mt-1\\.5{margin-top:.375rem}.mt-2{margin-top:.5rem}.mt-2\\.5{margin-top:.625rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.block{display:block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-1\\.5{height:.375rem}.h-2{height:.5rem}.h-20{height:5rem}.h-28{height:7rem}.h-32{height:8rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-64{height:16rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[18px\\]{height:18px}.h-\\[22px\\]{height:22px}.h-\\[2px\\]{height:2px}.h-full{height:100%}.h-px{height:1px}.max-h-\\[132px\\]{max-height:132px}.max-h-\\[232px\\]{max-height:232px}.max-h-\\[260px\\]{max-height:260px}.max-h-\\[320px\\]{max-height:320px}.max-h-\\[86vh\\]{max-height:86vh}.min-h-0{min-height:0px}.min-h-\\[52px\\]{min-height:52px}.w-1\\.5{width:.375rem}.w-10{width:2.5rem}.w-11{width:2.75rem}.w-2{width:.5rem}.w-3\\.5{width:.875rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-7{width:1.75rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-\\[18px\\]{width:18px}.w-\\[196px\\]{width:196px}.w-\\[228px\\]{width:228px}.w-\\[286px\\]{width:286px}.w-full{width:100%}.w-px{width:1px}.min-w-0{min-width:0px}.min-w-\\[180px\\]{min-width:180px}.min-w-\\[196px\\]{min-width:196px}.min-w-\\[200px\\]{min-width:200px}.min-w-\\[48px\\]{min-width:48px}.max-w-2xl{max-width:42rem}.max-w-3xl{max-width:48rem}.max-w-4xl{max-width:56rem}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[90\\%\\]{max-width:90%}.max-w-md{max-width:28rem}.max-w-sm{max-width:24rem}.max-w-xl{max-width:36rem}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.shrink-0{flex-shrink:0}.border-collapse{border-collapse:collapse}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-grab{cursor:grab}.cursor-grabbing{cursor:grabbing}.cursor-move{cursor:move}.cursor-not-allowed{cursor:not-allowed}.cursor-ns-resize{cursor:ns-resize}.cursor-nwse-resize{cursor:nwse-resize}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize-none{resize:none}.resize{resize:both}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-\\[auto_1fr\\]{grid-template-columns:auto 1fr}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-items-center{place-items:center}.items-start{align-items:flex-start}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-px{gap:1px}.gap-x-3{-moz-column-gap:.75rem;column-gap:.75rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-y-1{row-gap:.25rem}.gap-y-1\\.5{row-gap:.375rem}.gap-y-3{row-gap:.75rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.375rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem * var(--tw-space-y-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.whitespace-pre{white-space:pre}.whitespace-pre-wrap{white-space:pre-wrap}.break-words{overflow-wrap:break-word}.break-all{word-break:break-all}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.rounded-bl-sm{border-bottom-left-radius:.125rem}.rounded-br-sm{border-bottom-right-radius:.125rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-accent{--tw-border-opacity: 1;border-color:rgb(var(--nr-accent) / var(--tw-border-opacity))}.border-accent\\/40{border-color:rgb(var(--nr-accent) / .4)}.border-accent\\/50{border-color:rgb(var(--nr-accent) / .5)}.border-amber-500\\/40{border-color:#f59e0b66}.border-down\\/30{border-color:rgb(var(--nr-down) / .3)}.border-down\\/40{border-color:rgb(var(--nr-down) / .4)}.border-down\\/50{border-color:rgb(var(--nr-down) / .5)}.border-down\\/60{border-color:rgb(var(--nr-down) / .6)}.border-line{--tw-border-opacity: 1;border-color:rgb(var(--nr-line) / var(--tw-border-opacity))}.border-rose-500\\/40{border-color:#f43f5e66}.border-sky-500\\/30{border-color:#0ea5e94d}.border-up\\/40{border-color:rgb(var(--nr-up) / .4)}.border-up\\/50{border-color:rgb(var(--nr-up) / .5)}.border-up\\/60{border-color:rgb(var(--nr-up) / .6)}.border-warn\\/40{border-color:rgb(var(--nr-warn) / .4)}.border-warn\\/50{border-color:rgb(var(--nr-warn) / .5)}.border-warn\\/60{border-color:rgb(var(--nr-warn) / .6)}.border-white\\/10{border-color:#ffffff1a}.border-white\\/15{border-color:#ffffff26}.border-white\\/20{border-color:#fff3}.border-white\\/5{border-color:#ffffff0d}.bg-\\[rgb\\(var\\(--nr-bg\\)\\)\\]{background-color:rgb(var(--nr-bg))}.bg-\\[rgb\\(var\\(--nr-term-bg\\)\\)\\]{background-color:rgb(var(--nr-term-bg))}.bg-accent{--tw-bg-opacity: 1;background-color:rgb(var(--nr-accent) / var(--tw-bg-opacity))}.bg-accent\\/10{background-color:rgb(var(--nr-accent) / .1)}.bg-accent\\/15{background-color:rgb(var(--nr-accent) / .15)}.bg-accent\\/20{background-color:rgb(var(--nr-accent) / .2)}.bg-amber-500\\/10{background-color:#f59e0b1a}.bg-black\\/25{background-color:#00000040}.bg-black\\/55{background-color:#0000008c}.bg-down{--tw-bg-opacity: 1;background-color:rgb(var(--nr-down) / var(--tw-bg-opacity))}.bg-down\\/10{background-color:rgb(var(--nr-down) / .1)}.bg-down\\/15{background-color:rgb(var(--nr-down) / .15)}.bg-emerald-500\\/25{background-color:#10b98140}.bg-line{--tw-bg-opacity: 1;background-color:rgb(var(--nr-line) / var(--tw-bg-opacity))}.bg-line\\/60{background-color:rgb(var(--nr-line) / .6)}.bg-panel{--tw-bg-opacity: 1;background-color:rgb(var(--nr-panel) / var(--tw-bg-opacity))}.bg-panel\\/60{background-color:rgb(var(--nr-panel) / .6)}.bg-panel\\/90{background-color:rgb(var(--nr-panel) / .9)}.bg-panel2{--tw-bg-opacity: 1;background-color:rgb(var(--nr-panel2) / var(--tw-bg-opacity))}.bg-rose-500\\/10{background-color:#f43f5e1a}.bg-sky-500\\/10{background-color:#0ea5e91a}.bg-sky-500\\/20{background-color:#0ea5e933}.bg-sky-500\\/25{background-color:#0ea5e940}.bg-sky-500\\/50{background-color:#0ea5e980}.bg-sky-600{--tw-bg-opacity: 1;background-color:rgb(2 132 199 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-up{--tw-bg-opacity: 1;background-color:rgb(var(--nr-up) / var(--tw-bg-opacity))}.bg-up\\/10{background-color:rgb(var(--nr-up) / .1)}.bg-up\\/15{background-color:rgb(var(--nr-up) / .15)}.bg-warn{--tw-bg-opacity: 1;background-color:rgb(var(--nr-warn) / var(--tw-bg-opacity))}.bg-warn\\/10{background-color:rgb(var(--nr-warn) / .1)}.bg-warn\\/15{background-color:rgb(var(--nr-warn) / .15)}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-white\\/10{background-color:#ffffff1a}.bg-white\\/5{background-color:#ffffff0d}.bg-white\\/\\[0\\.03\\]{background-color:#ffffff08}.p-0\\.5{padding:.125rem}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-1\\.5{padding-left:.375rem;padding-right:.375rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-3\\.5{padding-left:.875rem;padding-right:.875rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-\\[1px\\]{padding-top:1px;padding-bottom:1px}.py-\\[3px\\]{padding-top:3px;padding-bottom:3px}.pb-2{padding-bottom:.5rem}.pl-1{padding-left:.25rem}.pl-3{padding-left:.75rem}.pt-1\\.5{padding-top:.375rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.text-\\[10\\.5px\\]{font-size:10.5px}.text-\\[10px\\]{font-size:10px}.text-\\[11\\.5px\\]{font-size:11.5px}.text-\\[11px\\]{font-size:11px}.text-\\[12\\.5px\\]{font-size:12.5px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[22px\\]{font-size:22px}.text-\\[26px\\]{font-size:26px}.text-\\[8\\.5px\\]{font-size:8.5px}.text-\\[9\\.5px\\]{font-size:9.5px}.text-\\[9px\\]{font-size:9px}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing: tabular-nums;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.leading-\\[1\\.45\\]{line-height:1.45}.leading-\\[1\\.55\\]{line-height:1.55}.leading-none{line-height:1}.leading-relaxed{line-height:1.625}.leading-snug{line-height:1.375}.leading-tight{line-height:1.25}.tracking-tight{letter-spacing:-.025em}.tracking-wide{letter-spacing:.025em}.tracking-wider{letter-spacing:.05em}.tracking-widest{letter-spacing:.1em}.text-\\[rgb\\(var\\(--nr-term-fg\\)\\)\\]{color:rgb(var(--nr-term-fg))}.text-accent{--tw-text-opacity: 1;color:rgb(var(--nr-accent) / var(--tw-text-opacity))}.text-amber-300{--tw-text-opacity: 1;color:rgb(252 211 77 / var(--tw-text-opacity))}.text-amber-400{--tw-text-opacity: 1;color:rgb(251 191 36 / var(--tw-text-opacity))}.text-amber-400\\/90{color:#fbbf24e6}.text-down{--tw-text-opacity: 1;color:rgb(var(--nr-down) / var(--tw-text-opacity))}.text-emerald-300{--tw-text-opacity: 1;color:rgb(110 231 183 / var(--tw-text-opacity))}.text-emerald-400{--tw-text-opacity: 1;color:rgb(52 211 153 / var(--tw-text-opacity))}.text-ink{--tw-text-opacity: 1;color:rgb(var(--nr-ink) / var(--tw-text-opacity))}.text-ink\\/90{color:rgb(var(--nr-ink) / .9)}.text-rose-300{--tw-text-opacity: 1;color:rgb(253 164 175 / var(--tw-text-opacity))}.text-rose-400{--tw-text-opacity: 1;color:rgb(251 113 133 / var(--tw-text-opacity))}.text-sky-200{--tw-text-opacity: 1;color:rgb(186 230 253 / var(--tw-text-opacity))}.text-sky-300{--tw-text-opacity: 1;color:rgb(125 211 252 / var(--tw-text-opacity))}.text-slate-100{--tw-text-opacity: 1;color:rgb(241 245 249 / var(--tw-text-opacity))}.text-slate-200{--tw-text-opacity: 1;color:rgb(226 232 240 / var(--tw-text-opacity))}.text-slate-300{--tw-text-opacity: 1;color:rgb(203 213 225 / var(--tw-text-opacity))}.text-slate-400{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity))}.text-slate-500{--tw-text-opacity: 1;color:rgb(100 116 139 / var(--tw-text-opacity))}.text-slate-600{--tw-text-opacity: 1;color:rgb(71 85 105 / var(--tw-text-opacity))}.text-soft{--tw-text-opacity: 1;color:rgb(var(--nr-soft) / var(--tw-text-opacity))}.text-soft\\/50{color:rgb(var(--nr-soft) / .5)}.text-soft\\/60{color:rgb(var(--nr-soft) / .6)}.text-up{--tw-text-opacity: 1;color:rgb(var(--nr-up) / var(--tw-text-opacity))}.text-warn{--tw-text-opacity: 1;color:rgb(var(--nr-warn) / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.accent-\\[rgb\\(var\\(--nr-accent\\)\\)\\]{accent-color:rgb(var(--nr-accent))}.opacity-50{opacity:.5}.opacity-55{opacity:.55}.opacity-60{opacity:.6}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur{--tw-backdrop-blur: blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}:root,:host{--nr-bg: 244 246 251;--nr-panel: 255 255 255;--nr-panel2: 238 241 247;--nr-ink: 17 23 38;--nr-soft: 96 110 133;--nr-line: 216 222 233;--nr-accent: 23 99 255;--nr-up: 19 166 106;--nr-down: 226 59 78;--nr-warn: 217 138 0;--nr-grid: 226 232 240;--nr-term-bg: 12 18 34;--nr-term-fg: 207 227 255;color-scheme:light}[data-theme=dark],:host([theme="dark"]){--nr-bg: 10 14 26;--nr-panel: 18 24 41;--nr-panel2: 14 20 34;--nr-ink: 231 237 249;--nr-soft: 147 161 189;--nr-line: 36 45 68;--nr-accent: 77 135 255;--nr-up: 47 211 138;--nr-down: 255 90 106;--nr-warn: 255 176 32;--nr-grid: 22 29 48;--nr-term-bg: 6 10 20;--nr-term-fg: 207 227 255;color-scheme:dark}html,body,#root{height:100%}body{margin:0;background:rgb(var(--nr-bg));color:rgb(var(--nr-ink));font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif;font-size:14px;overflow:hidden}.nr-grid{background-image:radial-gradient(circle at 1px 1px,rgb(var(--nr-grid)) 1px,transparent 0);background-size:22px 22px}.nr-term{background:rgb(var(--nr-term-bg));color:rgb(var(--nr-term-fg))}*::-webkit-scrollbar{width:9px;height:9px}*::-webkit-scrollbar-thumb{background:rgb(var(--nr-line));border-radius:6px}*::-webkit-scrollbar-track{background:transparent}@media (prefers-reduced-motion: reduce){*{transition-duration:.01ms!important;animation-duration:.01ms!important}}:focus-visible{outline:2px solid rgb(var(--nr-accent));outline-offset:2px}.placeholder\\:text-slate-600::-moz-placeholder{--tw-text-opacity: 1;color:rgb(71 85 105 / var(--tw-text-opacity))}.placeholder\\:text-slate-600::placeholder{--tw-text-opacity: 1;color:rgb(71 85 105 / var(--tw-text-opacity))}.hover\\:border-accent:hover{--tw-border-opacity: 1;border-color:rgb(var(--nr-accent) / var(--tw-border-opacity))}.hover\\:border-accent\\/50:hover{border-color:rgb(var(--nr-accent) / .5)}.hover\\:border-down:hover{--tw-border-opacity: 1;border-color:rgb(var(--nr-down) / var(--tw-border-opacity))}.hover\\:border-sky-500\\/50:hover{border-color:#0ea5e980}.hover\\:bg-accent\\/15:hover{background-color:rgb(var(--nr-accent) / .15)}.hover\\:bg-accent\\/60:hover{background-color:rgb(var(--nr-accent) / .6)}.hover\\:bg-down\\/10:hover{background-color:rgb(var(--nr-down) / .1)}.hover\\:bg-panel2:hover{--tw-bg-opacity: 1;background-color:rgb(var(--nr-panel2) / var(--tw-bg-opacity))}.hover\\:bg-white\\/10:hover{background-color:#ffffff1a}.hover\\:bg-white\\/5:hover{background-color:#ffffff0d}.hover\\:text-accent:hover{--tw-text-opacity: 1;color:rgb(var(--nr-accent) / var(--tw-text-opacity))}.hover\\:text-ink:hover{--tw-text-opacity: 1;color:rgb(var(--nr-ink) / var(--tw-text-opacity))}.hover\\:text-slate-100:hover{--tw-text-opacity: 1;color:rgb(241 245 249 / var(--tw-text-opacity))}.hover\\:text-slate-200:hover{--tw-text-opacity: 1;color:rgb(226 232 240 / var(--tw-text-opacity))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-sm:hover{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.hover\\:brightness-110:hover{--tw-brightness: brightness(1.1);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.focus\\:border-accent:focus{--tw-border-opacity: 1;border-color:rgb(var(--nr-accent) / var(--tw-border-opacity))}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-40:disabled{opacity:.4}.group:hover .group-hover\\:block{display:block}.group:focus .group-focus\\:block{display:block}@media (min-width: 640px){.sm\\:inline-flex{display:inline-flex}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (min-width: 768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-\\[1\\.1fr_1fr\\]{grid-template-columns:1.1fr 1fr}}@media (min-width: 1024px){.lg\\:grid-cols-\\[260px_1fr\\]{grid-template-columns:260px 1fr}}', Wu = "netrange-lab";
class Cw extends HTMLElement {
  static get observedAttributes() {
    return ["theme", "lab", "height"];
  }
  constructor() {
    super(), this._root = null, this._mount = null, this._unsub = null;
  }
  connectedCallback() {
    if (this._root) return;
    const t = this.attachShadow({ mode: "open" }), n = document.createElement("style");
    n.textContent = Nw + `
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
    const s = k.getState(), o = this.getAttribute("lab");
    o && s.setLab(Xn(o).id), s.updateSettings({ theme: this.getAttribute("theme") === "light" ? "light" : "dark" });
    const i = this.getAttribute("scenario") || (this.getAttribute("autostart") === "true" ? "starter" : null);
    let l = null;
    const c = this.getAttribute("state");
    if (c)
      try {
        l = JSON.parse(c);
      } catch {
        console.warn("[netrange] `state` attribute is not valid JSON; ignoring.");
      }
    this._root = sh(r), this._root.render(/* @__PURE__ */ a.jsx(jw, { initialState: l, scenario: i })), this._onGraded = (u) => {
      var h;
      const { labId: d, result: p } = u.detail, f = Nu(Xn(d), p);
      this.dispatchEvent(new CustomEvent("netrange:graded", { detail: f, bubbles: !0, composed: !0 }));
      try {
        (h = window.parent) == null || h.postMessage({ source: "netrange", type: "graded", payload: f }, "*");
      } catch {
      }
    }, window.addEventListener("netrange:graded", this._onGraded), this.dispatchEvent(
      new CustomEvent("netrange:ready", {
        detail: { labId: k.getState().labId },
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
    this._mount && (t === "theme" && (this._mount.setAttribute("data-theme", r === "light" ? "light" : "dark"), k.getState().updateSettings({ theme: r === "light" ? "light" : "dark" })), t === "lab" && r && k.getState().setLab(Xn(r).id), t === "height" && r && (this.style.height = `${parseInt(r, 10)}px`));
  }
  /* ----------------------------------------------------- public API */
  get state() {
    return k.getState().exportState();
  }
  set state(t) {
    k.getState().importState(t);
  }
  grade() {
    const t = k.getState(), n = t.grade();
    return Nu(Xn(t.labId), n);
  }
  reset() {
    k.getState().resetTopology();
  }
}
customElements.get(Wu) || customElements.define(Wu, Cw);
export {
  Wu as TAG,
  Cw as default
};
