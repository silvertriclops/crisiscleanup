/*! Raven.js 3.17.0 (6384830) | github.com/getsentry/raven-js */
!function (a) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = a(); else if ("function" == typeof define && define.amd) define([], a); else {
    var b;
    b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b = b.Raven || (b.Raven = {}), b = b.Plugins || (b.Plugins = {}), b.Vue = a()
  }
}(function () {
  return function a(b, c, d) {
    function e(g, h) {
      if (!c[g]) {
        if (!b[g]) {
          var i = "function" == typeof require && require;
          if (!h && i) return i(g, !0);
          if (f) return f(g, !0);
          var j = new Error("Cannot find module '" + g + "'");
          throw j.code = "MODULE_NOT_FOUND", j
        }
        var k = c[g] = {exports: {}};
        b[g][0].call(k.exports, function (a) {
          var c = b[g][1][a];
          return e(c ? c : a)
        }, k, k.exports, a, b, c, d)
      }
      return c[g].exports
    }

    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
  }({
    1: [function (a, b, c) {
      "use strict";

      function d(a) {
        var b = a._isVue ? a.$options.name || a.$options._componentTag : a.name;
        return (b ? "component <" + b + ">" : "anonymous component") + (a._isVue && a.$options.__file ? " at " + a.$options.__file : "")
      }

      function e(a, b) {
        if (b = b || window.Vue, b && b.config) {
          var c = b.config.errorHandler;
          b.config.errorHandler = function (b, e) {
            a.captureException(b, {
              extra: {
                componentName: d(e),
                propsData: e.$options.propsData
              }
            }), "function" == typeof c && c.call(this, b, e)
          }
        }
      }

      b.exports = e
    }, {}]
  }, {}, [1])(1)
});
//# sourceMappingURL=vue.min.js.map