/*! For license information please see 565.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkviews=self.webpackChunkviews||[]).push([[565],{8567:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(7211),i=n(2919),o=(n(5080),n(3745));function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const l=new Map,s=new WeakMap;let c=0;function u(e,t,n={},r=undefined){if(void 0===window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){let t=function(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(n=e.root,n?(s.has(n)||(c+=1,s.set(n,c.toString())),s.get(n)):"0"):e[t]}`;var n})).toString()}(e),n=l.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},l.set(t,n)}return n}(n);let u=a.get(e)||[];return a.has(e)||a.set(e,u),u.push(t),o.observe(e),function(){u.splice(u.indexOf(t),1),0===u.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),l.delete(i))}}const h=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function d(e){return"function"!=typeof e.children}class f extends o.Component{constructor(e){super(e),this.node=null,this._unobserveCb=null,this.handleNode=e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()},this.handleChange=(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),d(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)},this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:o}=this.props;this._unobserveCb=u(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!d(this.props)){const{inView:e,entry:t}=this.state;return this.props.children({inView:e,entry:t,ref:this.handleNode})}const e=this.props,{children:t,as:n}=e,r=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,h);return o.createElement(n||"div",a({ref:this.handleNode},r),t)}}function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function p(){p=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function c(e,t,n,i){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),l=new x(i||[]);return r(a,"_invoke",{value:k(e,n,l)}),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h={};function d(){}function f(){}function v(){}var g={};s(g,o,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(O([])));b&&b!==t&&n.call(b,o)&&(g=b);var E=v.prototype=d.prototype=Object.create(g);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function i(r,o,a,l){var s=u(e[r],e,o);if("throw"!==s.type){var c=s.arg,h=c.value;return h&&"object"==m(h)&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){i("next",e,a,l)}),(function(e){i("throw",e,a,l)})):t.resolve(h).then((function(e){c.value=e,a(c)}),(function(e){return i("throw",e,a,l)}))}l(s.arg)}var o;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){i(e,n,t,r)}))}return o=o?o.then(r,r):r()}})}function k(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return{value:void 0,done:!0}}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var l=L(a,n);if(l){if(l===h)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function L(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var i=u(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,h;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:A}}function A(){return{value:void 0,done:!0}}return f.prototype=v,r(E,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:f,configurable:!0}),f.displayName=s(v,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},w(N.prototype),s(N.prototype,a,(function(){return this})),e.AsyncIterator=N,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new N(c(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(E),s(E,l,"Generator"),s(E,o,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=O,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}function v(e,t,n,r,i,o,a){try{var l=e[o](a),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,i)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(e){var t,n,r=e.handleScroll,i=e.scrollPosition,a=(0,o.useRef)(null),l=(0,o.useRef)(null),s=(0,o.useRef)(null),c=(0,o.useRef)(),u=(t=(0,o.useState)(0),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=u[0],d=u[1];function m(e,t){switch(console.log(t),t.target.id){case"1":e&&t.target.classList.remove("fade-left");break;case"2":e&&t.target.classList.remove("fade-right")}}function y(){var e;return e=p().mark((function e(t){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[t.current.value],console.log(n),!n[0].includes("@")){e.next=8;break}return e.next=5,fetch("/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return alert("Email Sent")})).catch((function(e){return alert("An error occurred, Please try again")}));case 5:t.current.value="",e.next=10;break;case 8:c.current.classList.add("on"),setTimeout((function(){c.current.classList.remove("on")}),2500);case 10:case"end":return e.stop()}}),e)})),y=function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){v(o,r,i,a,l,"next",e)}function l(e){v(o,r,i,a,l,"throw",e)}a(void 0)}))},y.apply(this,arguments)}return(0,o.useEffect)((function(){setTimeout((function(){a.current.classList.remove("hide-i")}),3e3);var e=function(){try{l.current.classList.add("scroll")}catch(e){console.log(e)}r()};return window.addEventListener("scroll",e),d(window.innerWidth),function(){window.removeEventListener("scroll",e)}}),[]),console.log(i),(0,o.useEffect)((function(){var e=Array.from(l.current.lastChild.children),t="";i<650?(e[0].firstChild.classList.add("highlight"),t=e[0].id):i>650&&i<1360?(e[1].firstChild.classList.add("highlight"),t=e[1].id):i>1360&&i<2e3?(e[2].firstChild.classList.add("highlight"),t=e[2].id):(e[3].firstChild.classList.add("highlight"),t=e[3].id,console.log(t)),e.filter((function(e){return e.id!==t})).forEach((function(e){return e.firstChild.classList.remove("highlight")}))}),[i]),o.createElement("div",{className:"infopage"},o.createElement("div",{className:"guide-i"},o.createElement("div",{ref:l,className:"nav-section"},o.createElement("h1",null,"Featured"),o.createElement("ul",null,o.createElement("li",{id:"b1"},o.createElement("button",{className:"btn-ip"},"A1")),o.createElement("li",{id:"b2"},o.createElement("button",{className:"btn-ip"},"A2")),o.createElement("li",{id:"b3"},o.createElement("button",{className:"btn-ip"},"A3")),o.createElement("li",{id:"b4"},o.createElement("button",{className:"btn-ip"},"A4"))))),o.createElement("div",{ref:a,className:"content-ip hide-i"},o.createElement("h2",null,"Recieve Free Guide"),o.createElement("div",null,o.createElement("input",{name:"emailForm",ref:s,placeholder:"Enter",type:"text",alt:""}),o.createElement("img",{src:"/images/email.png",alt:"",id:"email-ip"})),o.createElement("p",{className:"emailSubmit",ref:c},"Email Invalid"),o.createElement("p",null,"Get an in-depth & personalized business analysis "),o.createElement("span",null,o.createElement("button",{className:"submit-ip",onClick:function(){return function(e){return y.apply(this,arguments)}(s)}},"Submit"),o.createElement("button",{onClick:function(){a.current.classList.add("hide-i")},className:"submit-ip"},"Close"))),o.createElement("div",{className:"cards-ip"},o.createElement("div",{className:"c-section"},o.createElement(f,{onChange:m,threshold:h>500?.5:0},(function(e){e.inView;var t=e.ref;return o.createElement("div",{ref:t,id:1,className:"card-ip f1 fade-left"},o.createElement("img",{src:"/images/flowchart.jpg",alt:"",id:"tech-ip"}),o.createElement("p",null,"Captivating Lead Strategy"),o.createElement("div",{className:"d d1"}),o.createElement("div",{className:"d d2"}))})),o.createElement(f,{onChange:m,threshold:h>500?.5:0},(function(e){e.inView;var t=e.ref;return o.createElement("div",{ref:t,id:2,className:"blog-ip fade-right"},o.createElement("h1",null,"How It Works"),o.createElement("div",{className:"blog-content-ip"},o.createElement("span",null,o.createElement("h2",null,"Initital Interaction"),h>500?o.createElement("p",null,"Customers and Merchants from around the world opt into your sales funnel through Live Call/SMS/Email. Upon Interaction, LEAD begins collecting valuble consumer data."):o.createElement("p",null,"Customers and Merchants from around the world opt into your sales funnel through Live Call/SMS/Email.")),o.createElement("span",null,o.createElement("h2",null,"Prompt Retargeting"),h>500?o.createElement("p",null,"Once sufficient data is collected from Call/SMS our lead is then sent an effective follow up package containing vital onboarding information via Google & Twilio APIs"):o.createElement("p",null," Once sufficient data is collected from Call/SMS our lead is then sent an effective follow up package containing vital onboarding information")),o.createElement("span",{className:"last-span-ip"},o.createElement("h2",null,"Stored Data"),h>500?o.createElement("p",null,"LEAD then stores the data and repurposes it to automate tedious tasks (Appointment Setting, Creating Email Lists, Automatic Replies)"):o.createElement("p",null," LEAD then stores the data and repurposes it to automate tedious tasks "))))}))),o.createElement("div",{className:"c-section r2"},o.createElement(f,{onChange:m,threshold:h>500?.5:0},(function(e){e.inView;var t=e.ref;return o.createElement("div",{ref:t,id:1,className:"card-ip f1 fade-left"},o.createElement("img",{src:"/images/happyclient.jpg",alt:"",id:"tech-ip"}),o.createElement("p",null,"Building relationships & Exceeding expectations"),o.createElement("div",{className:"d d1"}),o.createElement("div",{className:"d d2"}))})),o.createElement(f,{onChange:m,threshold:h>500?.5:0},(function(e){e.inView;var t=e.ref;return o.createElement("div",{ref:t,id:2,className:"blog-ip fade-right"},o.createElement("h1",null,"Client Satisfaction"),o.createElement("div",{className:"blog-content-ip"},o.createElement("span",null,o.createElement("h2",null,"Happy Clients"),o.createElement("p",null,"Ensuring client satisfaction is a top priority for every business.LEAD ensures a great impression accross all client interactions to secure credibility without the need for human presence")),o.createElement("span",null,o.createElement("h2",null,"Accessible Assistance"),o.createElement("p",null,"Clients are also free to opt for a interaction with one of your representatives from your company. This allows LEAD to act as a saftey net for any client calls or attempts to reach out are effectively recovered."))))}))),o.createElement("div",{className:"c-section"},o.createElement(f,{onChange:m,threshold:h>500?.5:0},(function(e){e.inView;var t=e.ref;return o.createElement("div",{ref:t,id:1,className:"card-ip f1 fade-left"},o.createElement("img",{src:"/images/blogcover.jpg",alt:"",id:"tech-ip"}),o.createElement("p",null,"Give Potential Clients Clarity In The Market"),o.createElement("div",{className:"d d1"}),o.createElement("div",{className:"d d2"}))})),o.createElement(f,{onChange:m,threshold:h>500?.5:0},(function(e){e.inView;var t=e.ref;return o.createElement("div",{ref:t,id:2,className:"blog-ip fade-right"},o.createElement("h1",null,"Business Visibility"),o.createElement("div",{className:"blog-content-ip"},o.createElement("span",null,o.createElement("h2",null,"Stand Out"),h>500?o.createElement("p",null,"There are approximately 30 million active businesses in North America. The attributes that make your business unique are embedded in the services/product offering and how it is presented. Implementing LEAD as a co-pilot allows you to focus on what matters most"):o.createElement("p",null,"There are approximately 30 million active businesses in North America. The attributes that make your business unique are embedded in the services/product offering and how it is presented")),o.createElement("span",null,o.createElement("h2",null,"Take Control"),h>500?o.createElement("p",null,"By taking control and partnering with our web services agency, you unlock the power to elevate your online presence and drive exceptional results. Our tailored strategies and cutting-edge solutions empower you to reach new heights, captivate your target audience, and outshine your competition."):o.createElement("p",null,"By taking control and partnering with our web services agency, you unlock the power to elevate your online presence and drive exceptional results."))))}))),o.createElement("div",{className:"c-section r4"},o.createElement(f,{onChange:m,threshold:h>500?.5:0},(function(e){e.inView;var t=e.ref;return o.createElement("div",{ref:t,id:1,className:"card-ip f1 fade-left"},o.createElement("img",{src:"/images/auto.jpg",alt:"",id:"tech-ip"}),o.createElement("p",null,"Time Is Money"),o.createElement("div",{className:"d d1"}),o.createElement("div",{className:"d d2"}))})),o.createElement(f,{onChange:m,threshold:h>500?.5:0},(function(e){e.inView;var t=e.ref;return o.createElement("div",{ref:t,id:2,className:"blog-ip fade-right"},o.createElement("h1",null,"Seamless Automation"),o.createElement("div",{className:"blog-content-ip"},o.createElement("span",null,o.createElement("h2",null,"Automate Everything"),h>500?o.createElement("p",null,"Embracing automation holds the key to unlocking unprecedented efficiency and productivity for your business. By implementing automated processes, you can streamline repetitive tasks, eliminate human error, and free up valuable time for your team to focus on strategic initiatives and creative problem-solving. Experience accelerated growth, improved scalability, and a competitive edge in today's fast-paced digital landscape by harnessing the transformative power of automation."):o.createElement("p",null,"  Embracing automation holds the key to unlocking unprecedented efficiency and productivity for your business. By implementing automated processes, you can streamline repetitive tasks, eliminate human error, and free up valuable time for your team to focus on strategic initiatives and creative problem-solving."))))})))))};function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=function(){var e,t,n=(e=(0,o.useState)(0),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],l=n[1];return o.createElement(o.Fragment,null,o.createElement(r.Z,null),o.createElement(y,{handleScroll:function(){var e=window.scrollY;l(e)},scrollPosition:a}),o.createElement(i.Z,null))}}}]);