webpackJsonp([3],{"cS+l":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={components:{Win10Button:function(){return n.e(7).then(n.bind(null,"qkow"))}},props:{title:{type:String,default:"Title"},minWidth:{type:Number,default:200},minHeight:{type:Number,default:200}},data:function(){return{size:{width:400,height:300},position:{left:100,top:100},fullScreen:!1}},methods:{mousedown:function(t,i){var n=this,e=t.clientX,o=t.clientY;document.onmousemove=function(t){"tl"===i?(n.size.width+=e-t.clientX,n.size.height+=o-t.clientY,n.size.width>n.minWidth&&(n.position.left-=e-t.clientX),n.size.height>n.minHeight&&(n.position.top-=o-t.clientY)):"tr"===i?(n.size.width+=t.clientX-e,n.size.height+=o-t.clientY,n.size.height>n.minHeight&&(n.position.top-=o-t.clientY)):"bl"===i?(n.size.width+=e-t.clientX,n.size.height+=t.clientY-o,n.size.width>n.minWidth&&(n.position.left-=e-t.clientX)):"br"===i?(n.size.width+=t.clientX-e,n.size.height+=t.clientY-o):"move"===i?(n.position.left+=t.clientX-e,n.position.top+=t.clientY-o):"top"===i?(n.size.height+=o-t.clientY,n.size.height>n.minHeight&&(n.position.top-=o-t.clientY)):"right"===i?n.size.width+=t.clientX-e:"bottom"===i?n.size.height+=t.clientY-o:"left"===i&&(n.size.width+=e-t.clientX,n.size.width>n.minWidth&&(n.position.left-=e-t.clientX)),e=t.clientX,o=t.clientY,n.size.width<=n.minWidth&&(n.size.width=n.minWidth),n.size.height<=n.minHeight&&(n.size.height=n.minHeight)},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}},handleZoom:function(){this.fullScreen=!this.fullScreen}}},o={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"win10-window",style:{width:t.size.width+"px",height:t.size.height+"px",left:t.position.left+"px",top:t.position.top+"px"}},[n("div",{staticClass:"win10-window-header"},[n("div",{staticClass:"win10-window-title",domProps:{textContent:t._s(t.title)},on:{mousedown:function(i){t.mousedown(i,"move")}}}),t._v(" "),n("div",{staticClass:"win10-window-header-right"},[n("win10-button",{attrs:{icon:"min",title:"最小化"}}),t._v(" "),n("win10-button",{attrs:{icon:t.fullScreen?"window-restore":"window-max",title:"最大化"},on:{click:t.handleZoom}}),t._v(" "),n("win10-button",{attrs:{icon:"window-close",title:"关闭"}})],1)]),t._v(" "),n("div",{staticClass:"win10-window-body"}),t._v(" "),n("div",{staticClass:"win10-window-top-left",on:{mousedown:function(i){t.mousedown(i,"tl")}}}),t._v(" "),n("div",{staticClass:"win10-window-top",on:{mousedown:function(i){t.mousedown(i,"top")}}}),t._v(" "),n("div",{staticClass:"win10-window-top-right",on:{mousedown:function(i){t.mousedown(i,"tr")}}}),t._v(" "),n("div",{staticClass:"win10-window-right",on:{mousedown:function(i){t.mousedown(i,"right")}}}),t._v(" "),n("div",{staticClass:"win10-window-bottom-left",on:{mousedown:function(i){t.mousedown(i,"bl")}}}),t._v(" "),n("div",{staticClass:"win10-window-bottom",on:{mousedown:function(i){t.mousedown(i,"bottom")}}}),t._v(" "),n("div",{staticClass:"win10-window-bottom-right",on:{mousedown:function(i){t.mousedown(i,"br")}}}),t._v(" "),n("div",{staticClass:"win10-window-left",on:{mousedown:function(i){t.mousedown(i,"left")}}})])},staticRenderFns:[]};var s=n("VU/8")(e,o,!1,function(t){n("hjtD")},null,null);i.default=s.exports},hjtD:function(t,i){}});
//# sourceMappingURL=win10-window.31ac351ca0bd422f094e.js.map