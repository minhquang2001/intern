(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{261:function(t,e,n){"use strict";n.r(e);var o={props:["text"]},r=n(42),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("v-btn",{staticStyle:{"background-color":"#d9d9d9"},attrs:{variant:"text"}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,n){"use strict";n.r(e);var o=n(12),r=(n(78),n(59),n(261)),c=n(263),l={name:"IndexPage",components:{Wrapbutton:r.default},data:function(){return{textCopy:"",showDiv:!1}},methods:{copy:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.write({string:t.textCopy});case 2:t.showDiv=!0,console.log(t.textCopy),t.showDiv&&t.hideTimeOut();case 5:case"end":return e.stop()}}),e)})))()},confirm:function(){this.showDiv=!1},hideTimeOut:function(){var t=this;setTimeout((function(){t.showDiv=!1}),3e3)}}},v=n(42),component=Object(v.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap"},[e("div",{staticClass:"wrap__content"},[e("div",[e("h1",[t._v("Chào bạn")]),t._v(" "),e("div",{staticClass:"wrap__form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.textCopy,expression:"textCopy"}],attrs:{type:"text",placeholder:"...nhập text ở đây",spellcheck:"false"},domProps:{value:t.textCopy},on:{input:function(e){e.target.composing||(t.textCopy=e.target.value)}}}),t._v(" "),e("div",{on:{click:t.copy}},[e("Wrapbutton",{staticStyle:{"font-weight":"600"},attrs:{text:"COPY"}})],1)])]),t._v(" "),e("div",{staticClass:"wrap__form",class:{show:t.showDiv,hide:!t.showDiv}},[e("h4",[t._v("copied")]),t._v(" "),e("div",{on:{click:t.confirm}},[e("Wrapbutton",{staticStyle:{"font-weight":"600"},attrs:{text:"ok"}})],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Wrapbutton:n(261).default})}}]);