webpackJsonp([1],{"0xDb":function(t,e,n){"use strict";e.j=function(t){return void 0!==t&&!h()(t)},n.d(e,"c",function(){return p}),n.d(e,"g",function(){return $}),n.d(e,"h",function(){return y}),n.d(e,"a",function(){return g}),n.d(e,"i",function(){return T}),n.d(e,"f",function(){return O}),n.d(e,"e",function(){return j}),n.d(e,"d",function(){return U});var r=n("Fkx8"),i=n.n(r),a=n("fZjL"),o=n.n(a),s=n("N/eU"),u=n.n(s),c=n("VZ1x"),d=n.n(c),l=n("G0Q/"),f=n.n(l),v=n("p8Ns"),h=n.n(v),m=n("JyIk");n.d(e,"b",function(){return m.a});var p=function(t,e){var n=_(t,e),r={};for(var i in n){var a=n[i];r[a]=e[a]}return r},_=function(t,e){var n=f()(t,e);return d()(function(e,r,i){return u()(n[r],t[r])?e:e.concat(r)},[],o()(t))},$=function(t){var e={};for(var n in t)e["_"===n.charAt(0)?n.substr(1):n]=t[n];return e},b=["id"],y=function(t){var e={};for(var n in t)e[b.includes(n)?"_"+n:n]=t[n];return e},g=function t(e){var n={};for(var r in e){var i=void 0,a=void 0,o=e[r];if("type"in o){i=o.type,a="default"in o?o.default:"";var s=void 0;s=i===Object?o.properties?t(o.properties)():{}:i===Array?[]:new i(a).valueOf(),n[r]=s}else n[r]=t(o)}return function(){return f()({},n)}},w=function t(e,n,r){var i={};if(e instanceof Array)i=e.map(function(e){for(var i in e)n.items&&i in n.items&&([Object,Array].includes(n.items[i])?e[i]=t(e[i],n[i],r):e[i]=r(e[i],n.items[i]));return e});else if(e instanceof Object)for(var a in e)n[a]&&n[a].items?i[a]=t(e[a],n[a],r):n[a]&&n[a].properties?i[a]=t(e[a],n[a].properties,r):i[a]=a in n?r(e[a],n[a]):e[a];else i=r(e,n);return i},x=function(t,e){var n=void 0,r=e.type;if(r&&![Object,Array].includes(r)){var i=new r(t);n=i.encode?i.encode():i.valueOf()}else n=t;return n},k=function(t,e){var n=e.type;return n&&![Object,Array].includes(n)?new n(t).valueOf():t},T=function(t,e){var n=i()(t);return w(n,e,x)},O=function(t,e){var n=i()(t);return w(n,e,k)},j=function(t){var e={};for(var n in t.$options.computed)e[n]=t[n];var r={};for(var i in t.schema())r[i]=t[i];var a=f()(r,e);return delete a.errors,delete a.fields,a},U=function(t,e){o()(e).forEach(function(n){t[n]=e[n]})}},"2lNz":function(t,e,n){"use strict";var r=n("VKuu"),i=n("bKmf"),a=n("HIZq");e.a={name:"app",models:{user:function(){return new i.a}},components:{card:r.a},created:function(){this.setUser()},data:function(){return{current_user:void 0}},computed:{encoded:function(){return this.$user.encode()}},methods:{setUser:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"one";this.current_user=t,this.$user=n.i(a.a)()[t]},resetUser:function(){this.$user.reset()}}}},"5G9v":function(t,e,n){"use strict";var r=n("JPjd");e.a={name:"card",props:["model"],models:{user:function(){return this.model}},components:{avatar:r.a},computed:{created_on:function(){return new Date(this.$user.created).toLocaleDateString()}}}},"90m7":function(t,e,n){"use strict";var r=n("VJOs"),i=n.n(r),a=n("0xDb"),o=function(t,e){if(t.$options["$"+e])throw new ReferenceError("Model '"+e+"' has a naming conflict\n       with an existing computed property'");t.$options.computed["$"+e]={get:function(){return t.$models[e]},set:function(n){return t.$models[e].set(n)}}},s=function(t){t._models=t.$options.models||{},t.$models=t.$options.$models||{};for(var e in t._models)t.$models[e]=t._models[e];if(n.i(a.j)(t.$models)){t.$options.computed||(t.$options.computed={});for(var r in t.$models)o(t,r)}},u=function(t){for(var e in t.$models)t.$models[e]=t.$models[e].apply(t),t.$models[e]._vm=t};e.a=function(t){return{beforeCreate:function(){n.i(a.j)(this.$options.models)&&s(this)},created:function(){n.i(a.j)(this.$options.models)&&u(this)},beforeDestroy:function(){if(n.i(a.j)(this.$models))for(var t in this.$models)i()(["$options","persist"],this.$models[t])||this.$models[t].reset()}}}},"99P9":function(t,e,n){"use strict";var r=n("VJOs"),i=n.n(r),a=n("Zrlr"),o=n.n(a),s=n("wxAW"),u=n.n(s),c=function(){function t(e,n){o()(this,t),this.value=void 0,n&&(this.key=n);var r=this.getValue(e);return r&&this.set(r),this}return u()(t,[{key:"set",value:function(t){return this.in(t),this}},{key:"valueOf",value:function(){return this.out()}},{key:"getValue",value:function(t){return this.key?i()([this.key],t)||t:t}},{key:"in",value:function(t){return this.value=t,this}},{key:"out",value:function(){return this.value}},{key:"encode",value:function(){var t=void 0,e=this.valueOf();return this.key&&e?(t={})[this.key]=e:t=e,t}}]),t}();e.a=c},"CxC/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),i=n("eNIl"),a=n("VLWJ");r.a.config.productionTip=!1,r.a.use(a.a),new r.a({el:"#app",template:"<App/>",components:{App:i.a}})},HIZq:function(t,e,n){"use strict";e.a=function(){return{one:{id:{$oid:"c12acd432b19cb22c12db021"},created:{$date:"2015-10-11T00:00:00"},updated:"2017-10-09T00:00:00",role:"admin",first_name:"Michael",last_name:"Scott",email:"mscott@dundermifflin.com",avatar_color:"rebeccapurple",notifications:{alarm:{$date:"2017-10-09T00:00:00"},test:{one:{$date:"2017-10-09T00:00:00"},two:{three:{$date:"2017-10-09T00:00:00"}}}},things:[{id:{$oid:"587e3e15e4e05574a3f91e23"},created:{$date:"2017-10-09T00:00:00"}},{id:{$oid:"58e3e8fee4e0555b7f600c46"},created:{$date:"2017-10-09T00:00:00"}}]},two:{id:{$oid:"586e6d75b7a7bc5c852c60a5"},created:{$date:"2017-10-09T00:00:00"},updated:"2017-10-09T00:00:00",role:"manager",first_name:"Jim",last_name:"Halpert",email:"jhalpert@dundermifflin.com",avatar_color:"teal",notifications:{alarm:{$date:"2017-10-09T00:00:00"},test:{one:{$date:"2017-10-09T00:00:00"},two:{three:{$date:"2017-10-09T00:00:00"}}}},things:[{id:{$oid:"42356d75b7a7bc5c52c11a90"},created:{$date:"2016-12-16T00:00:00"}},{id:{$oid:"09a11c25c5cb7a7b57d65324"},created:{$date:"2016-12-16T00:00:00"}}]},three:{id:{$oid:"dc23bd12b1b9f2fc79ac22c0"},created:{$date:"2015-12-12T00:00:00"},updated:"2016-11-09T00:00:00",role:"manager",first_name:"Pam",last_name:"Halpert",email:"phalpert@dundermifflin.com",avatar_color:"orange",notifications:{alarm:{$date:"2016-11-09T00:00:00"},test:{one:{$date:"2016-11-09T00:00:00"},two:{three:{$date:"2016-11-09T00:00:00"}}}},things:[{id:{$oid:"58fa1966e4e05570c2787c4a"},created:{$date:"2014-08-12T00:00:00"}},{id:{$oid:"5914688de4e0556b1dcf29d3"},created:{$date:"2016-03-11T00:00:00"}}]}}}},JPjd:function(t,e,n){"use strict";var r=n("ME64"),i=n("aUkE"),a=n("VU/8")(r.a,i.a,function(t){n("vxr/")},"data-v-8e73982c",null);e.a=a.exports},Jqgd:function(t,e,n){"use strict";n.d(e,"a",function(){return h}),n.d(e,"b",function(){return m});var r=n("Zx67"),i=n.n(r),a=n("Zrlr"),o=n.n(a),s=n("wxAW"),u=n.n(s),c=n("zwoO"),d=n.n(c),l=n("Pf15"),f=n.n(l),v=n("99P9"),h=function(t){function e(t){var n;o()(this,e);var r=d()(this,(e.__proto__||i()(e)).call(this,t,"$oid"));return n=r,d()(r,n)}return f()(e,t),u()(e,[{key:"out",value:function(){return this.value||""}}]),e}(v.a),m=function(t){function e(t){var n;o()(this,e);var r=d()(this,(e.__proto__||i()(e)).call(this,t,"$date"));return n=r,d()(r,n)}return f()(e,t),u()(e,[{key:"in",value:function(t){var e=new Date(t);if(isNaN(e.getTime()))throw new TypeError('Invalid date: "'+t+'"');this.value=t}},{key:"out",value:function(){return this.value?new Date(this.value).toISOString():void 0}}]),e}(v.a)},ME64:function(t,e,n){"use strict";e.a={name:"avatar",props:["initials","color"],computed:{style:function(){return{background:this.color}}}}},VKuu:function(t,e,n){"use strict";var r=n("5G9v"),i=n("mpQm"),a=n("VU/8")(r.a,i.a,function(t){n("bsCW")},"data-v-77cd0461",null);e.a=a.exports},VLWJ:function(t,e,n){"use strict";var r=n("Zrlr"),i=n.n(r),a=n("wxAW"),o=n.n(a),s=n("90m7"),u=n("lOx2");n("99P9");n.d(e,"b",function(){return u.a});var c=function(){function t(){i()(this,t)}return o()(t,null,[{key:"install",value:function(t,e){t.mixin(n.i(s.a)(t)),u.a.init(t)}}]),t}();e.a=c},ZgR8:function(t,e){},aUkE:function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"avatar",style:t.style},[n("svg",{attrs:{viewBox:"0 0 220 220"}},[n("text",{attrs:{transform:"matrix(1 0 0 1 110 144)","text-anchor":"middle"}},[t._t("default")],2)])])},staticRenderFns:[]};e.a=r},bKmf:function(t,e,n){"use strict";var r=n("Zx67"),i=n.n(r),a=n("Zrlr"),o=n.n(a),s=n("wxAW"),u=n.n(s),c=n("zwoO"),d=n.n(c),l=n("Pf15"),f=n.n(l),v=n("VLWJ"),h=n("Jqgd"),m=function(t){function e(){return o()(this,e),d()(this,(e.__proto__||i()(e)).apply(this,arguments))}return f()(e,t),u()(e,null,[{key:"defaults",value:function(){return{name:"user",computed:{basePath:function(){if(this.role){var t=this.$options.basePath;return t||this.role+"s"}return""},full_name:function(){return this.role?this.first_name+" "+this.last_name:""},initials:function(){return this.role?(""+this.first_name[0]+this.last_name[0]).toUpperCase():""}}}}},{key:"schema",value:function(){return{id:{type:h.a},updated:{type:h.b},created:{type:h.b},company:{type:String},first_name:{type:String},last_name:{type:String},email:{type:String},role:{type:String},avatar_color:{type:String},notifications:{type:Object,properties:{alarm:{type:h.b},test:{type:Object,properties:{one:{type:h.b},two:{type:Object,properties:{three:{type:h.b}}}}}}},status:{type:Object,properties:{one:{type:Object}}},things:{type:Array,items:{id:{type:h.a},created:{type:h.b}}}}}}]),e}(v.b);e.a=m},bsCW:function(t,e){},eNIl:function(t,e,n){"use strict";var r=n("2lNz"),i=n("ej3p"),a=n("VU/8")(r.a,i.a,function(t){n("ZgR8")},"data-v-a94c3498",null);e.a=a.exports},ej3p:function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("vue-models")]),t._v(" "),n("table",{staticClass:"top"},[n("tbody",[n("tr",[t._m(0),t._v(" "),n("td",[t.$user.role?n("div",[n("button",{on:{click:t.resetUser}},[t._v("Clear Model")]),t._v(" "),n("button",{attrs:{disabled:"one"===t.current_user},on:{click:function(e){t.setUser("one")}}},[t._v("Set User One")]),t._v(" "),n("button",{attrs:{disabled:"two"===t.current_user},on:{click:function(e){t.setUser("two")}}},[t._v("Set User Two")]),t._v(" "),n("button",{attrs:{disabled:"three"===t.current_user},on:{click:function(e){t.setUser("three")}}},[t._v("Set User Three")])]):n("div",[n("button",{on:{click:function(e){t.setUser()}}},[t._v("Populate Model")])])])])])]),t._v(" "),n("h2",[t._v("Vue Binding")]),t._v(" "),n("card",{attrs:{model:t.$user}}),t._v(" "),n("h2",[t._v("Schema Transformation")]),t._v(" "),n("table",[t._m(1),t._v(" "),n("tbody",[n("tr",[n("td",[n("pre",[t._v(t._s(t.encoded))])]),t._v(" "),n("td",[n("pre",[t._v(t._s(t.$user))])])])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{attrs:{width:"75%"}},[n("p",[t._v("\n            Below is an example of binding a model to a Vue instance. Use the buttons\n            to mutate the user data in the model, and the user card will update.\n            Below that is an example of using custom types in a model schema to decode \n            "),n("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/mongodb-extended-json/",target:"_blank"}},[t._v("extended json")]),t._v(" \n            from MongoDB. The data is flattened for use client-side, and then re-encoded\n            to extended json when saving, or as otherwise needed.\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td",[n("h2",[t._v("raw user data")])]),t._v(" "),n("td",[n("h2",[t._v("decoded user model")])])])])}]};e.a=r},lOx2:function(t,e,n){"use strict";n.d(e,"a",function(){return w});var r=n("//Fk"),i=n.n(r),a=n("p8Ns"),o=n.n(a),s=n("Xxa5"),u=n.n(s),c=n("exGp"),d=n.n(c),l=n("VJOs"),f=n.n(l),v=n("G0Q/"),h=n.n(v),m=n("Zrlr"),p=n.n(m),_=n("wxAW"),$=n.n(_),b=n("Jqgd"),y=n("0xDb"),g=void 0,w=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};p()(this,t);var r=this.constructor.schema(),a=y.a(r),s=h()(this.constructor.defaults(),n),c={name:"model",created:function(){this.set(e)},data:function(){return a()},computed:{basePath:function(){var t=this.$options.basePath;return t||this.$options.name+"s"},urlRoot:function(){return this.basePath+"/"+this.id},isNew:function(){return[void 0,""].includes(this.id)},url:function(){var t=s.url?s.url:this.isNew?this.basePath:this.urlRoot;return t},$request:function(){return f()(["$request"],this._vm)||y.b}},methods:{fetch:function(){var t=this;return d()(u.a.mark(function e(){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$request(t.urlRoot);case 2:return n=e.sent,t.set(n),e.abrupt("return",n);case 5:case"end":return e.stop()}},e,t)}))()},destroy:function(){return this.$request(this.urlRoot,{method:"DELETE"})},save:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={path:""};r=h()(r,n);var a=y.c(this.$data,t);if(o()(a))return i.a.resolve();var s=this.encode(a),u=this.isNew?"POST":"PUT",c=r.path?"/"+r.path:"",d=this.$request(this.url+c,{method:u,body:s});return d.then(function(){e.set(s)}),d},data:function(){var t={};for(var e in r)t[e]=this[e];return h()({},t)},set:function(t){var e=this.decode(t);for(var n in e)this[n]=e[n];return this},reset:function(){return y.d(this,a())},toJSON:function(){return y.e(this)},decode:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.data();return y.f(y.g(t),r)},encode:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.data();return y.h(y.i(t,r))},schema:function(){return r}}},l=h()(c,s);return new g(l)}return $()(t,null,[{key:"init",value:function(t){g=t}},{key:"schema",value:function(){return{id:{type:String},created:{type:b.b},updated:{type:b.b}}}},{key:"defaults",value:function(){return{}}}]),t}()},mpQm:function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$user.role?n("div",[n("div",{staticClass:"card"},[n("div",{staticClass:"row"},[n("avatar",{attrs:{color:t.$user.avatar_color}},[t._v(t._s(t.$user.initials))]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"meta"},[n("div",{staticClass:"name"},[t._v(t._s(t.$user.full_name))]),t._v(" "),n("div",{staticClass:"email"},[t._v(t._s(t.$user.email))]),t._v(" "),n("div",{staticClass:"created"},[t._v(t._s(t.created_on))])])])],1)])]):n("div",[t._v("No user")])])},staticRenderFns:[]};e.a=r},"vxr/":function(t,e){}},["CxC/"]);