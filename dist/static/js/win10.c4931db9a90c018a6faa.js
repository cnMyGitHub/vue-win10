webpackJsonp([4], {
  EMv1: function (t, e) {
  }, NHnr: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n("7+uW"), o = {
      name: "App", components: {
        Win10Menu: function () {
          return n.e(1).then(n.bind(null, "ccZh"))
        }, Win10Message: function () {
          return n.e(2).then(n.bind(null, "yJ2L"))
        }, Win10Taskbar: function () {
          return n.e(0).then(n.bind(null, "SxFL"))
        }
      }
    }, r = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {attrs: {id: "win10"}}, [e("win10-menu"), this._v(" "), e("win10-message"), this._v(" "), e("win10-taskbar")], 1)
      }, staticRenderFns: []
    };
    var s = n("VU/8")(o, r, !1, function (t) {
      n("EMv1")
    }, null, null).exports, a = function (t) {
      if (Number(t.version.split(".")[0]) >= 2) t.mixin({beforeCreate: n}); else {
        var e = t.prototype._init;
        t.prototype._init = function (t) {
          void 0 === t && (t = {}), t.init = t.init ? [n].concat(t.init) : n, e.call(this, t)
        }
      }

      function n() {
        var t = this.$options;
        t.store ? this.$store = "function" == typeof t.store ? t.store() : t.store : t.parent && t.parent.$store && (this.$store = t.parent.$store)
      }
    }, c = "undefined" != typeof window && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

    function u(t, e) {
      Object.keys(t).forEach(function (n) {
        return e(t[n], n)
      })
    }

    var p = function (t, e) {
      this.runtime = e, this._children = Object.create(null), this._rawModule = t;
      var n = t.state;
      this.state = ("function" == typeof n ? n() : n) || {}
    }, f = {namespaced: {configurable: !0}};
    f.namespaced.get = function () {
      return !!this._rawModule.namespaced
    }, p.prototype.addChild = function (t, e) {
      this._children[t] = e
    }, p.prototype.removeChild = function (t) {
      delete this._children[t]
    }, p.prototype.getChild = function (t) {
      return this._children[t]
    }, p.prototype.update = function (t) {
      this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters)
    }, p.prototype.forEachChild = function (t) {
      u(this._children, t)
    }, p.prototype.forEachGetter = function (t) {
      this._rawModule.getters && u(this._rawModule.getters, t)
    }, p.prototype.forEachAction = function (t) {
      this._rawModule.actions && u(this._rawModule.actions, t)
    }, p.prototype.forEachMutation = function (t) {
      this._rawModule.mutations && u(this._rawModule.mutations, t)
    }, Object.defineProperties(p.prototype, f);
    var h = function (t) {
      this.register([], t, !1)
    };
    h.prototype.get = function (t) {
      return t.reduce(function (t, e) {
        return t.getChild(e)
      }, this.root)
    }, h.prototype.getNamespace = function (t) {
      var e = this.root;
      return t.reduce(function (t, n) {
        return t + ((e = e.getChild(n)).namespaced ? n + "/" : "")
      }, "")
    }, h.prototype.update = function (t) {
      !function t(e, n, i) {
        0;
        n.update(i);
        if (i.modules) for (var o in i.modules) {
          if (!n.getChild(o)) return void 0;
          t(e.concat(o), n.getChild(o), i.modules[o])
        }
      }([], this.root, t)
    }, h.prototype.register = function (t, e, n) {
      var i = this;
      void 0 === n && (n = !0);
      var o = new p(e, n);
      0 === t.length ? this.root = o : this.get(t.slice(0, -1)).addChild(t[t.length - 1], o);
      e.modules && u(e.modules, function (e, o) {
        i.register(t.concat(o), e, n)
      })
    }, h.prototype.unregister = function (t) {
      var e = this.get(t.slice(0, -1)), n = t[t.length - 1];
      e.getChild(n).runtime && e.removeChild(n)
    };
    var l;
    var d = function (t) {
      var e = this;
      void 0 === t && (t = {}), !l && "undefined" != typeof window && window.Vue && M(window.Vue);
      var n = t.plugins;
      void 0 === n && (n = []);
      var i = t.strict;
      void 0 === i && (i = !1);
      var o = t.state;
      void 0 === o && (o = {}), "function" == typeof o && (o = o() || {}), this._committing = !1, this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), this._modules = new h(t), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], this._watcherVM = new l;
      var r = this, s = this.dispatch, a = this.commit;
      this.dispatch = function (t, e) {
        return s.call(r, t, e)
      }, this.commit = function (t, e, n) {
        return a.call(r, t, e, n)
      }, this.strict = i, g(this, o, [], this._modules.root), y(this, o), n.forEach(function (t) {
        return t(e)
      }), l.config.devtools && function (t) {
        c && (t._devtoolHook = c, c.emit("vuex:init", t), c.on("vuex:travel-to-state", function (e) {
          t.replaceState(e)
        }), t.subscribe(function (t, e) {
          c.emit("vuex:mutation", t, e)
        }))
      }(this)
    }, m = {state: {configurable: !0}};

    function v(t, e) {
      return e.indexOf(t) < 0 && e.push(t), function () {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
      }
    }

    function _(t, e) {
      t._actions = Object.create(null), t._mutations = Object.create(null), t._wrappedGetters = Object.create(null), t._modulesNamespaceMap = Object.create(null);
      var n = t.state;
      g(t, n, [], t._modules.root, !0), y(t, n, e)
    }

    function y(t, e, n) {
      var i = t._vm;
      t.getters = {};
      var o = {};
      u(t._wrappedGetters, function (e, n) {
        o[n] = function () {
          return e(t)
        }, Object.defineProperty(t.getters, n, {
          get: function () {
            return t._vm[n]
          }, enumerable: !0
        })
      });
      var r = l.config.silent;
      l.config.silent = !0, t._vm = new l({
        data: {$$state: e},
        computed: o
      }), l.config.silent = r, t.strict && function (t) {
        t._vm.$watch(function () {
          return this._data.$$state
        }, function () {
          0
        }, {deep: !0, sync: !0})
      }(t), i && (n && t._withCommit(function () {
        i._data.$$state = null
      }), l.nextTick(function () {
        return i.$destroy()
      }))
    }

    function g(t, e, n, i, o) {
      var r = !n.length, s = t._modules.getNamespace(n);
      if (i.namespaced && (t._modulesNamespaceMap[s] = i), !r && !o) {
        var a = b(e, n.slice(0, -1)), c = n[n.length - 1];
        t._withCommit(function () {
          l.set(a, c, i.state)
        })
      }
      var u = i.context = function (t, e, n) {
        var i = "" === e, o = {
          dispatch: i ? t.dispatch : function (n, i, o) {
            var r = w(n, i, o), s = r.payload, a = r.options, c = r.type;
            return a && a.root || (c = e + c), t.dispatch(c, s)
          }, commit: i ? t.commit : function (n, i, o) {
            var r = w(n, i, o), s = r.payload, a = r.options, c = r.type;
            a && a.root || (c = e + c), t.commit(c, s, a)
          }
        };
        return Object.defineProperties(o, {
          getters: {
            get: i ? function () {
              return t.getters
            } : function () {
              return function (t, e) {
                var n = {}, i = e.length;
                return Object.keys(t.getters).forEach(function (o) {
                  if (o.slice(0, i) === e) {
                    var r = o.slice(i);
                    Object.defineProperty(n, r, {
                      get: function () {
                        return t.getters[o]
                      }, enumerable: !0
                    })
                  }
                }), n
              }(t, e)
            }
          }, state: {
            get: function () {
              return b(t.state, n)
            }
          }
        }), o
      }(t, s, n);
      i.forEachMutation(function (e, n) {
        !function (t, e, n, i) {
          (t._mutations[e] || (t._mutations[e] = [])).push(function (e) {
            n.call(t, i.state, e)
          })
        }(t, s + n, e, u)
      }), i.forEachAction(function (e, n) {
        var i = e.root ? n : s + n, o = e.handler || e;
        !function (t, e, n, i) {
          (t._actions[e] || (t._actions[e] = [])).push(function (e, o) {
            var r, s = n.call(t, {
              dispatch: i.dispatch,
              commit: i.commit,
              getters: i.getters,
              state: i.state,
              rootGetters: t.getters,
              rootState: t.state
            }, e, o);
            return (r = s) && "function" == typeof r.then || (s = Promise.resolve(s)), t._devtoolHook ? s.catch(function (e) {
              throw t._devtoolHook.emit("vuex:error", e), e
            }) : s
          })
        }(t, i, o, u)
      }), i.forEachGetter(function (e, n) {
        !function (t, e, n, i) {
          if (t._wrappedGetters[e]) return void 0;
          t._wrappedGetters[e] = function (t) {
            return n(i.state, i.getters, t.state, t.getters)
          }
        }(t, s + n, e, u)
      }), i.forEachChild(function (i, r) {
        g(t, e, n.concat(r), i, o)
      })
    }

    function b(t, e) {
      return e.length ? e.reduce(function (t, e) {
        return t[e]
      }, t) : t
    }

    function w(t, e, n) {
      var i;
      return null !== (i = t) && "object" == typeof i && t.type && (n = e, e = t, t = t.type), {
        type: t,
        payload: e,
        options: n
      }
    }

    function M(t) {
      l && t === l || a(l = t)
    }

    m.state.get = function () {
      return this._vm._data.$$state
    }, m.state.set = function (t) {
      0
    }, d.prototype.commit = function (t, e, n) {
      var i = this, o = w(t, e, n), r = o.type, s = o.payload, a = (o.options, {type: r, payload: s}),
        c = this._mutations[r];
      c && (this._withCommit(function () {
        c.forEach(function (t) {
          t(s)
        })
      }), this._subscribers.forEach(function (t) {
        return t(a, i.state)
      }))
    }, d.prototype.dispatch = function (t, e) {
      var n = this, i = w(t, e), o = i.type, r = i.payload, s = {type: o, payload: r}, a = this._actions[o];
      if (a) return this._actionSubscribers.forEach(function (t) {
        return t(s, n.state)
      }), a.length > 1 ? Promise.all(a.map(function (t) {
        return t(r)
      })) : a[0](r)
    }, d.prototype.subscribe = function (t) {
      return v(t, this._subscribers)
    }, d.prototype.subscribeAction = function (t) {
      return v(t, this._actionSubscribers)
    }, d.prototype.watch = function (t, e, n) {
      var i = this;
      return this._watcherVM.$watch(function () {
        return t(i.state, i.getters)
      }, e, n)
    }, d.prototype.replaceState = function (t) {
      var e = this;
      this._withCommit(function () {
        e._vm._data.$$state = t
      })
    }, d.prototype.registerModule = function (t, e, n) {
      void 0 === n && (n = {}), "string" == typeof t && (t = [t]), this._modules.register(t, e), g(this, this.state, t, this._modules.get(t), n.preserveState), y(this, this.state)
    }, d.prototype.unregisterModule = function (t) {
      var e = this;
      "string" == typeof t && (t = [t]), this._modules.unregister(t), this._withCommit(function () {
        var n = b(e.state, t.slice(0, -1));
        l.delete(n, t[t.length - 1])
      }), _(this)
    }, d.prototype.hotUpdate = function (t) {
      this._modules.update(t), _(this, !0)
    }, d.prototype._withCommit = function (t) {
      var e = this._committing;
      this._committing = !0, t(), this._committing = e
    }, Object.defineProperties(d.prototype, m);
    var $ = x(function (t, e) {
      var n = {};
      return C(e).forEach(function (e) {
        var i = e.key, o = e.val;
        n[i] = function () {
          var e = this.$store.state, n = this.$store.getters;
          if (t) {
            var i = k(this.$store, "mapState", t);
            if (!i) return;
            e = i.context.state, n = i.context.getters
          }
          return "function" == typeof o ? o.call(this, e, n) : e[o]
        }, n[i].vuex = !0
      }), n
    }), O = x(function (t, e) {
      var n = {};
      return C(e).forEach(function (e) {
        var i = e.key, o = e.val;
        n[i] = function () {
          for (var e = [], n = arguments.length; n--;) e[n] = arguments[n];
          var i = this.$store.commit;
          if (t) {
            var r = k(this.$store, "mapMutations", t);
            if (!r) return;
            i = r.context.commit
          }
          return "function" == typeof o ? o.apply(this, [i].concat(e)) : i.apply(this.$store, [o].concat(e))
        }
      }), n
    }), E = x(function (t, e) {
      var n = {};
      return C(e).forEach(function (e) {
        var i = e.key, o = e.val;
        o = t + o, n[i] = function () {
          if (!t || k(this.$store, "mapGetters", t)) return this.$store.getters[o]
        }, n[i].vuex = !0
      }), n
    }), j = x(function (t, e) {
      var n = {};
      return C(e).forEach(function (e) {
        var i = e.key, o = e.val;
        n[i] = function () {
          for (var e = [], n = arguments.length; n--;) e[n] = arguments[n];
          var i = this.$store.dispatch;
          if (t) {
            var r = k(this.$store, "mapActions", t);
            if (!r) return;
            i = r.context.dispatch
          }
          return "function" == typeof o ? o.apply(this, [i].concat(e)) : i.apply(this.$store, [o].concat(e))
        }
      }), n
    });

    function C(t) {
      return Array.isArray(t) ? t.map(function (t) {
        return {key: t, val: t}
      }) : Object.keys(t).map(function (e) {
        return {key: e, val: t[e]}
      })
    }

    function x(t) {
      return function (e, n) {
        return "string" != typeof e ? (n = e, e = "") : "/" !== e.charAt(e.length - 1) && (e += "/"), t(e, n)
      }
    }

    function k(t, e, n) {
      return t._modulesNamespaceMap[n]
    }

    var S = {
      Store: d,
      install: M,
      version: "3.0.1",
      mapState: $,
      mapMutations: O,
      mapGetters: E,
      mapActions: j,
      createNamespacedHelpers: function (t) {
        return {
          mapState: $.bind(null, t),
          mapGetters: E.bind(null, t),
          mapMutations: O.bind(null, t),
          mapActions: j.bind(null, t)
        }
      }
    };
    i.a.use(S);
    var A = new S.Store({state: {}, mutations: {}});
    i.a.config.productionTip = !1, new i.a({el: "#app", store: A, components: {App: s}, template: "<App/>"})
  }
}, ["NHnr"]);
//# sourceMappingURL=win10.c4931db9a90c018a6faa.js.map