webpackJsonp([8],{NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("7+uW"),r=t("Dd8w"),a=t.n(r),s=t("vNF5"),o=t("NYxO"),u={name:"App",components:{Win10Menu:function(){return t.e(2).then(t.bind(null,"ccZh"))},Win10Message:function(){return t.e(3).then(t.bind(null,"yJ2L"))},Win10Taskbar:function(){return t.e(1).then(t.bind(null,"SxFL"))},Win10Shortcut:function(){return t.e(0).then(t.bind(null,"o5jB"))},Win10Window:function(){return t.e(6).then(t.bind(null,"cS+l"))}},data:function(){return{shortcuts:[{name:"assets-management",alt:"资产管理"},{name:"assets-monitor",alt:"资产监控"},{name:"auth-type",alt:"授权策略"},{name:"auth-rule",alt:"访问规则"},{name:"alarm-ct",alt:"告警统计"},{name:"my-todo",alt:"我的待办"},{name:"sys-set",alt:"系统设置"},{name:"assets-afa",alt:"资产巡检"},{name:"assets-find",alt:"资产发现"},{name:"business-service",alt:"业务服务"},{name:"tv-wall",alt:"电视墙"}]}},computed:a()({},Object(o.b)(["winArr"])),mounted:function(){var n=this;this.getWinSize(),window.onresize=function(){n.getWinSize()}},methods:{handleClick:function(n){var e=Object(s.a)(n.target,"win10-message"),t=Object(s.a)(n.target,"win10-menu"),i=Object(s.a)(n.target,"win10-button win10-btn-menu"),r=Object(s.a)(n.target,"win10-button win10-btn-message");!1===e&&!1===t&&!1===i&&!1===r&&(!0===this.$store.state.showMenu&&this.$store.commit("toggleMenu"),!0===this.$store.state.showMessage&&this.$store.commit("toggleMessage")),!0===Object(s.a)(n.target,"win10-window")&&this.$store.commit("setZIndex",{name:Object(s.c)(n.target,"win10-window")})},getWinSize:function(){this.$store.commit("setWinSize",{width:document.body.clientWidth,height:document.body.clientHeight})},handleDblclick:function(n){this.$store.commit("newWin",n)}}},c={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"win10",attrs:{id:"win10"},on:{click:n.handleClick}},[t("div",{staticClass:"win10-shortcut"},n._l(n.shortcuts,function(e,i){return t("win10-shortcut",{key:i,attrs:{obj:e},on:{dblclick:n.handleDblclick}})})),n._v(" "),n._l(n.winArr,function(n){return t("win10-window",{key:n.name,attrs:{obj:n}})}),n._v(" "),t("win10-menu"),n._v(" "),t("win10-message"),n._v(" "),t("win10-taskbar")],2)},staticRenderFns:[]};var l=t("VU/8")(u,c,!1,function(n){t("kjNt")},null,null).exports,d=t("mvHQ"),w=t.n(d);i.a.use(o.a);var m=new o.a.Store({state:{showMenu:!1,showMessage:!1,winSize:{width:0,height:0},winArr:[],zIndex:1001},mutations:{toggleMenu:function(n){n.showMessage=!1,n.showMenu=!n.showMenu},toggleMessage:function(n){n.showMenu=!1,n.showMessage=!n.showMessage},setWinSize:function(n,e){n.winSize.width=e.width,n.winSize.height=e.height},newWin:function(n,e){for(var t=0;t<n.winArr.length;t++)if(n.winArr[t].name===e.name){var i=document.querySelector("[data-name="+e.name+"]");return"none"===i.style.display&&(i.style.display="block"),n.winArr[t].zIndex=n.zIndex,n.zIndex++,n.winArr=JSON.parse(w()(n.winArr)),!1}n.winArr.push({name:e.name,alt:e.alt,zIndex:n.zIndex}),n.zIndex++},toggleWin:function(n,e){for(var t=0;t<n.winArr.length;t++)if(n.winArr[t].name===e.name){var i=document.querySelector("[data-name="+e.name+"]");return"none"===i.style.display?(i.style.display="block",n.winArr[t].zIndex=n.zIndex,n.zIndex++,n.winArr=JSON.parse(w()(n.winArr))):i.style.display="none",!1}},destroyWin:function(n,e){for(var t=0;t<n.winArr.length;t++)if(n.winArr[t].name===e.name)return n.winArr.splice(t,1),!1},setZIndex:function(n,e){for(var t=0;t<n.winArr.length;t++)if(n.winArr[t].name===e.name)return n.winArr[t].zIndex=n.zIndex,n.zIndex++,n.winArr=JSON.parse(w()(n.winArr)),!1}}});i.a.config.productionTip=!1,i.a.component("assets-management",function(){return t.e(4).then(t.bind(null,"fLah"))}),i.a.component("assets-monitor",function(){return t.e(5).then(t.bind(null,"TFPO"))}),new i.a({el:"#app",store:m,components:{App:l},template:"<App/>"})},kjNt:function(n,e){},vNF5:function(n,e,t){"use strict";function i(n,e){var t=n.className;return"win10"!==t&&(e===t||i(n.parentNode,e))}function r(n,e){return n.className===e?n.getAttribute("data-name"):r(n.parentNode,e)}function a(n,e){return n.className===e?n:a(n.parentNode,e)}t.d(e,"a",function(){return i}),t.d(e,"b",function(){return a}),t.d(e,"c",function(){return r})}},["NHnr"]);
//# sourceMappingURL=win10.b80d59b165be447c040c.js.map