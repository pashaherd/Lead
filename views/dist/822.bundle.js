/*! For license information please see 822.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkviews=self.webpackChunkviews||[]).push([[822],{6822:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(2455),o=n(3745),i=n(4770);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(){c=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function f(e,t,n,o){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),c=new P(o||[]);return r(a,"_invoke",{value:x(e,n,c)}),a}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=f;var p={};function m(){}function y(){}function v(){}var d={};s(d,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(N([])));b&&b!==t&&n.call(b,i)&&(d=b);var E=v.prototype=m.prototype=Object.create(d);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function o(r,i,c,u){var l=h(e[r],e,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==a(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,c,u)}),(function(e){o("throw",e,c,u)})):t.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return o("throw",e,c,u)}))}u(l.arg)}var i;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){o(e,n,t,r)}))}return i=i?i.then(r,r):r()}})}function x(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=h(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function j(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=h(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function N(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return y.prototype=v,r(E,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:y,configurable:!0}),y.displayName=s(v,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},w(O.prototype),s(O.prototype,u,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new O(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(E),s(E,l,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=N,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){f(i,r,o,a,c,"next",e)}function c(e){f(i,r,o,a,c,"throw",e)}a(void 0)}))}}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(){var e=p((0,o.useState)([]),2),t=e[0],n=e[1],a=p((0,o.useState)([]),2),u=a[0],f=a[1],m=p((0,o.useState)({fname:"",lname:"",email:"",phone:"",code:"",business:"",industry:""}),2),y=m[0],v=m[1];function d(){return d=h(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/data").then((function(e){return e.json()})).then((function(e){n(e.business);var t=Object.entries(e.codes);f(t)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function g(e){var t=e.target,n=t.name,r=t.value;v(l(l({},y),{},s({},n,r)))}function b(){return(b=h(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)}).then((function(e){200===e.status?i.Am.success("Thank You ".concat(y.fname,", For Your Submission"),{position:"top-center"}):i.Am.error("Sorry ".concat(y.fname,", Something Went Wrong"),{position:"top-center"})})).catch((function(e){return console.log(e)}));case 3:v({fname:"",lname:"",email:"",phone:"",code:"",business:"",industry:""});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,o.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),o.createElement(o.Fragment,null,o.createElement("div",{className:"contact-wrap"},o.createElement("h1",null,"Let Us Find You"),o.createElement("form",{onSubmit:function(e){return function(e){return b.apply(this,arguments)}(e)},action:"/",method:"POST"},o.createElement("fieldset",{className:"names"},o.createElement("div",null,o.createElement("label",{htmlFor:"fname"},"First Name",o.createElement("input",{type:"text",name:"fname",value:y.fname,onChange:function(e){return g(e)},placeholder:"Enter",id:"fname"}))),o.createElement("div",null,o.createElement("label",{htmlFor:"lname"},"Last Name",o.createElement("input",{type:"text",name:"lname",id:"lname",value:y.lname,onChange:function(e){return g(e)},placeholder:"Enter"})))),o.createElement("fieldset",{className:"email"},o.createElement("div",null,o.createElement("label",{htmlFor:"email"},"Email",o.createElement("input",{type:"text",name:"email",id:"email",value:y.email,onChange:function(e){return g(e)},placeholder:"Enter"})))),o.createElement("fieldset",{className:"phone"},o.createElement("div",null,o.createElement("label",{htmlFor:"phone"},"Phone Number"),o.createElement("span",null,o.createElement("select",{name:"code",className:"phone-codes",onChange:function(e){return g(e)},value:y.code},u.map((function(e){return o.createElement("option",null,"".concat(e[0]," ").concat(e[1]))}))),o.createElement("input",{type:"text",name:"phone",id:"phone",value:y.phone,onChange:function(e){return g(e)},placeholder:"Enter"})))),o.createElement("fieldset",{className:"b-info"},o.createElement("div",null,o.createElement("label",{htmlFor:"business-name"},"Business Name",o.createElement("input",{type:"text",placeholder:"Enter",name:"business",value:y.business,onChange:function(e){return g(e)},id:"business-name"}))),o.createElement("div",null,o.createElement("label",null,"Business Industry",o.createElement("select",{name:"industry",value:y.industry,onChange:function(e){return g(e)}},t.map((function(e){return o.createElement("option",{key:(0,r.Z)()},e)})))))),o.createElement("div",{className:"btn-f"},o.createElement("button",{type:"submit"},"Submit")))),o.createElement(i.Ix,null))},v=n(817),d=n(7782),g=function(){return o.createElement(o.Fragment,null,o.createElement(v.Z,null),o.createElement(y,null),o.createElement(d.Z,null))}}}]);