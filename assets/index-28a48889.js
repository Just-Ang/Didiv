function Q_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var J=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function b1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function _t(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var w1={exports:{}},eu={},S1={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),J_=Symbol.for("react.portal"),e2=Symbol.for("react.fragment"),t2=Symbol.for("react.strict_mode"),n2=Symbol.for("react.profiler"),r2=Symbol.for("react.provider"),i2=Symbol.for("react.context"),o2=Symbol.for("react.forward_ref"),a2=Symbol.for("react.suspense"),s2=Symbol.for("react.memo"),l2=Symbol.for("react.lazy"),Fm=Symbol.iterator;function u2(e){return e===null||typeof e!="object"?null:(e=Fm&&e[Fm]||e["@@iterator"],typeof e=="function"?e:null)}var _1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E1=Object.assign,C1={};function qi(e,t,n){this.props=e,this.context=t,this.refs=C1,this.updater=n||_1}qi.prototype.isReactComponent={};qi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function k1(){}k1.prototype=qi.prototype;function jp(e,t,n){this.props=e,this.context=t,this.refs=C1,this.updater=n||_1}var $p=jp.prototype=new k1;$p.constructor=jp;E1($p,qi.prototype);$p.isPureReactComponent=!0;var Nm=Array.isArray,T1=Object.prototype.hasOwnProperty,Dp={current:null},O1={key:!0,ref:!0,__self:!0,__source:!0};function P1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)T1.call(t,r)&&!O1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ca,type:e,key:o,ref:a,props:i,_owner:Dp.current}}function c2(e,t){return{$$typeof:Ca,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ca}function d2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zm=/\/+/g;function wc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?d2(""+e.key):t.toString(36)}function Cs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ca:case J_:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+wc(a,0):r,Nm(i)?(n="",e!=null&&(n=e.replace(zm,"$&/")+"/"),Cs(i,t,n,"",function(u){return u})):i!=null&&(Lp(i)&&(i=c2(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(zm,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Nm(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+wc(o,l);a+=Cs(o,t,n,s,i)}else if(s=u2(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+wc(o,l++),a+=Cs(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ua(e,t,n){if(e==null)return e;var r=[],i=0;return Cs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function f2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ct={current:null},ks={transition:null},p2={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:ks,ReactCurrentOwner:Dp};ne.Children={map:Ua,forEach:function(e,t,n){Ua(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ua(e,function(){t++}),t},toArray:function(e){return Ua(e,function(t){return t})||[]},only:function(e){if(!Lp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ne.Component=qi;ne.Fragment=e2;ne.Profiler=n2;ne.PureComponent=jp;ne.StrictMode=t2;ne.Suspense=a2;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p2;ne.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=E1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Dp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)T1.call(t,s)&&!O1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ca,type:e.type,key:i,ref:o,props:r,_owner:a}};ne.createContext=function(e){return e={$$typeof:i2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:r2,_context:e},e.Consumer=e};ne.createElement=P1;ne.createFactory=function(e){var t=P1.bind(null,e);return t.type=e,t};ne.createRef=function(){return{current:null}};ne.forwardRef=function(e){return{$$typeof:o2,render:e}};ne.isValidElement=Lp;ne.lazy=function(e){return{$$typeof:l2,_payload:{_status:-1,_result:e},_init:f2}};ne.memo=function(e,t){return{$$typeof:s2,type:e,compare:t===void 0?null:t}};ne.startTransition=function(e){var t=ks.transition;ks.transition={};try{e()}finally{ks.transition=t}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(e,t){return ct.current.useCallback(e,t)};ne.useContext=function(e){return ct.current.useContext(e)};ne.useDebugValue=function(){};ne.useDeferredValue=function(e){return ct.current.useDeferredValue(e)};ne.useEffect=function(e,t){return ct.current.useEffect(e,t)};ne.useId=function(){return ct.current.useId()};ne.useImperativeHandle=function(e,t,n){return ct.current.useImperativeHandle(e,t,n)};ne.useInsertionEffect=function(e,t){return ct.current.useInsertionEffect(e,t)};ne.useLayoutEffect=function(e,t){return ct.current.useLayoutEffect(e,t)};ne.useMemo=function(e,t){return ct.current.useMemo(e,t)};ne.useReducer=function(e,t,n){return ct.current.useReducer(e,t,n)};ne.useRef=function(e){return ct.current.useRef(e)};ne.useState=function(e){return ct.current.useState(e)};ne.useSyncExternalStore=function(e,t,n){return ct.current.useSyncExternalStore(e,t,n)};ne.useTransition=function(){return ct.current.useTransition()};ne.version="18.2.0";S1.exports=ne;var b=S1.exports;const W=b1(b),Gd=Q_({__proto__:null,default:W},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h2=b,m2=Symbol.for("react.element"),g2=Symbol.for("react.fragment"),v2=Object.prototype.hasOwnProperty,y2=h2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x2={key:!0,ref:!0,__self:!0,__source:!0};function M1(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)v2.call(t,r)&&!x2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:m2,type:e,key:o,ref:a,props:i,_owner:y2.current}}eu.Fragment=g2;eu.jsx=M1;eu.jsxs=M1;w1.exports=eu;var v=w1.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ko.apply(this,arguments)}var ar;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ar||(ar={}));const Vm="popstate";function b2(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Yd("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Js(i)}return S2(t,n,null,e)}function $e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function w2(){return Math.random().toString(36).substr(2,8)}function Bm(e,t){return{usr:e.state,key:e.key,idx:t}}function Yd(e,t,n,r){return n===void 0&&(n=null),Ko({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ki(t):t,{state:n,key:t&&t.key||r||w2()})}function Js(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ki(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function S2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=ar.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(Ko({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){l=ar.Pop;let S=c(),p=S==null?null:S-u;u=S,s&&s({action:l,location:y.location,delta:p})}function h(S,p){l=ar.Push;let m=Yd(y.location,S,p);n&&n(m,S),u=c()+1;let x=Bm(m,u),w=y.createHref(m);try{a.pushState(x,"",w)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(w)}o&&s&&s({action:l,location:y.location,delta:1})}function f(S,p){l=ar.Replace;let m=Yd(y.location,S,p);n&&n(m,S),u=c();let x=Bm(m,u),w=y.createHref(m);a.replaceState(x,"",w),o&&s&&s({action:l,location:y.location,delta:0})}function g(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof S=="string"?S:Js(S);return $e(p,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,p)}let y={get action(){return l},get location(){return e(i,a)},listen(S){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Vm,d),s=S,()=>{i.removeEventListener(Vm,d),s=null}},createHref(S){return t(i,S)},createURL:g,encodeLocation(S){let p=g(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:f,go(S){return a.go(S)}};return y}var Hm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hm||(Hm={}));function _2(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ki(t):t,i=Ap(r.pathname||"/",n);if(i==null)return null;let o=I1(e);E2(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=$2(o[l],R2(i));return a}function I1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&($e(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=dr([r,s.relativePath]),c=n.concat(s);o.children&&o.children.length>0&&($e(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),I1(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:I2(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of j1(o.path))i(o,a,s)}),t}function j1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=j1(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function E2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:j2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const C2=/^:\w+$/,k2=3,T2=2,O2=1,P2=10,M2=-2,Um=e=>e==="*";function I2(e,t){let n=e.split("/"),r=n.length;return n.some(Um)&&(r+=M2),t&&(r+=T2),n.filter(i=>!Um(i)).reduce((i,o)=>i+(C2.test(o)?k2:o===""?O2:P2),r)}function j2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function $2(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=D2({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;o.push({params:r,pathname:dr([i,c.pathname]),pathnameBase:z2(dr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=dr([i,c.pathnameBase]))}return o}function D2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=L2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";a=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=A2(l[d]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function L2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Rp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function R2(e){try{return decodeURI(e)}catch(t){return Rp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function A2(e,t){try{return decodeURIComponent(e)}catch(n){return Rp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ap(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function F2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ki(e):e;return{pathname:n?n.startsWith("/")?n:N2(n,t):t,search:V2(r),hash:B2(i)}}function N2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function D1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ki(e):(i=Ko({},e),$e(!i.pathname||!i.pathname.includes("?"),Sc("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),Sc("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),Sc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=F2(i,l),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const dr=e=>e.join("/").replace(/\/\/+/g,"/"),z2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),V2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,B2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function H2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const L1=["post","put","patch","delete"];new Set(L1);const U2=["get",...L1];new Set(U2);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},el.apply(this,arguments)}const Fp=b.createContext(null),W2=b.createContext(null),Zi=b.createContext(null),tu=b.createContext(null),Xn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),R1=b.createContext(null);function G2(e,t){let{relative:n}=t===void 0?{}:t;ka()||$e(!1);let{basename:r,navigator:i}=b.useContext(Zi),{hash:o,pathname:a,search:l}=N1(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:dr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function ka(){return b.useContext(tu)!=null}function Qi(){return ka()||$e(!1),b.useContext(tu).location}function A1(e){b.useContext(Zi).static||b.useLayoutEffect(e)}function nu(){let{isDataRoute:e}=b.useContext(Xn);return e?sE():Y2()}function Y2(){ka()||$e(!1);let e=b.useContext(Fp),{basename:t,navigator:n}=b.useContext(Zi),{matches:r}=b.useContext(Xn),{pathname:i}=Qi(),o=JSON.stringify($1(r).map(s=>s.pathnameBase)),a=b.useRef(!1);return A1(()=>{a.current=!0}),b.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let c=D1(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:dr([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}const X2=b.createContext(null);function q2(e){let t=b.useContext(Xn).outlet;return t&&b.createElement(X2.Provider,{value:e},t)}function F1(){let{matches:e}=b.useContext(Xn),t=e[e.length-1];return t?t.params:{}}function N1(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(Xn),{pathname:i}=Qi(),o=JSON.stringify($1(r).map(a=>a.pathnameBase));return b.useMemo(()=>D1(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function K2(e,t){return Z2(e,t)}function Z2(e,t,n){ka()||$e(!1);let{navigator:r}=b.useContext(Zi),{matches:i}=b.useContext(Xn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Qi(),u;if(t){var c;let y=typeof t=="string"?Ki(t):t;l==="/"||(c=y.pathname)!=null&&c.startsWith(l)||$e(!1),u=y}else u=s;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",f=_2(e,{pathname:h}),g=nE(f&&f.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:dr([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:dr([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&g?b.createElement(tu.Provider,{value:{location:el({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ar.Pop}},g):g}function Q2(){let e=aE(),t=H2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const J2=b.createElement(Q2,null);class eE extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(Xn.Provider,{value:this.props.routeContext},b.createElement(R1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tE(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Fp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Xn.Provider,{value:t},r)}function nE(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||$e(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let c=s.route.id?a==null?void 0:a[s.route.id]:null,d=null;n&&(d=s.route.errorElement||J2);let h=t.concat(o.slice(0,u+1)),f=()=>{let g;return c?g=d:s.route.Component?g=b.createElement(s.route.Component,null):s.route.element?g=s.route.element:g=l,b.createElement(tE,{match:s,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:g})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?b.createElement(eE,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var z1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(z1||{}),tl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(tl||{});function rE(e){let t=b.useContext(Fp);return t||$e(!1),t}function iE(e){let t=b.useContext(W2);return t||$e(!1),t}function oE(e){let t=b.useContext(Xn);return t||$e(!1),t}function V1(e){let t=oE(),n=t.matches[t.matches.length-1];return n.route.id||$e(!1),n.route.id}function aE(){var e;let t=b.useContext(R1),n=iE(tl.UseRouteError),r=V1(tl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function sE(){let{router:e}=rE(z1.UseNavigateStable),t=V1(tl.UseNavigateStable),n=b.useRef(!1);return A1(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,el({fromRouteId:t},o)))},[e,t])}function lE(e){return q2(e.context)}function mt(e){$e(!1)}function uE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ar.Pop,navigator:o,static:a=!1}=e;ka()&&$e(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=Ki(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:f="default"}=r,g=b.useMemo(()=>{let y=Ap(u,l);return y==null?null:{location:{pathname:y,search:c,hash:d,state:h,key:f},navigationType:i}},[l,u,c,d,h,f,i]);return g==null?null:b.createElement(Zi.Provider,{value:s},b.createElement(tu.Provider,{children:n,value:g}))}function cE(e){let{children:t,location:n}=e;return K2(Xd(t),n)}new Promise(()=>{});function Xd(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Xd(r.props.children,o));return}r.type!==mt&&$e(!1),!r.props.index||!r.props.children||$e(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Xd(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qd(){return qd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qd.apply(this,arguments)}function dE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function fE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function pE(e,t){return e.button===0&&(!t||t==="_self")&&!fE(e)}const hE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],mE="startTransition",Wm=Gd[mE];function gE(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=b2({window:i,v5Compat:!0}));let a=o.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=b.useCallback(d=>{u&&Wm?Wm(()=>s(d)):s(d)},[s,u]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(uE,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const vE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oe=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:c}=t,d=dE(t,hE),{basename:h}=b.useContext(Zi),f,g=!1;if(typeof u=="string"&&yE.test(u)&&(f=u,vE))try{let m=new URL(window.location.href),x=u.startsWith("//")?new URL(m.protocol+u):new URL(u),w=Ap(x.pathname,h);x.origin===m.origin&&w!=null?u=w+x.search+x.hash:g=!0}catch{}let y=G2(u,{relative:i}),S=xE(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:i});function p(m){r&&r(m),m.defaultPrevented||S(m)}return b.createElement("a",qd({},d,{href:f||y,onClick:g||o?r:p,ref:n,target:s}))});var Gm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Gm||(Gm={}));var Ym;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ym||(Ym={}));function xE(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=nu(),s=Qi(),u=N1(e,{relative:a});return b.useCallback(c=>{if(pE(c,n)){c.preventDefault();let d=r!==void 0?r:Js(s)===Js(u);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}var Kd={},B1={exports:{}},Lt={},H1={exports:{}},U1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,D){var N=O.length;O.push(D);e:for(;0<N;){var B=N-1>>>1,z=O[B];if(0<i(z,D))O[B]=D,O[N]=z,N=B;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var D=O[0],N=O.pop();if(N!==D){O[0]=N;e:for(var B=0,z=O.length,G=z>>>1;B<G;){var Q=2*(B+1)-1,Z=O[Q],K=Q+1,re=O[K];if(0>i(Z,N))K<z&&0>i(re,Z)?(O[B]=re,O[K]=N,B=K):(O[B]=Z,O[Q]=N,B=Q);else if(K<z&&0>i(re,N))O[B]=re,O[K]=N,B=K;else break e}}return D}function i(O,D){var N=O.sortIndex-D.sortIndex;return N!==0?N:O.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,d=null,h=3,f=!1,g=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(O){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=O)r(u),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(u)}}function w(O){if(y=!1,x(O),!g)if(n(s)!==null)g=!0,F(E);else{var D=n(u);D!==null&&A(w,D.startTime-O)}}function E(O,D){g=!1,y&&(y=!1,p(C),C=-1),f=!0;var N=h;try{for(x(D),d=n(s);d!==null&&(!(d.expirationTime>D)||O&&!$());){var B=d.callback;if(typeof B=="function"){d.callback=null,h=d.priorityLevel;var z=B(d.expirationTime<=D);D=e.unstable_now(),typeof z=="function"?d.callback=z:d===n(s)&&r(s),x(D)}else r(s);d=n(s)}if(d!==null)var G=!0;else{var Q=n(u);Q!==null&&A(w,Q.startTime-D),G=!1}return G}finally{d=null,h=N,f=!1}}var k=!1,_=null,C=-1,M=5,I=-1;function $(){return!(e.unstable_now()-I<M)}function P(){if(_!==null){var O=e.unstable_now();I=O;var D=!0;try{D=_(!0,O)}finally{D?j():(k=!1,_=null)}}else k=!1}var j;if(typeof m=="function")j=function(){m(P)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,L=R.port2;R.port1.onmessage=P,j=function(){L.postMessage(null)}}else j=function(){S(P,0)};function F(O){_=O,k||(k=!0,j())}function A(O,D){C=S(function(){O(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||f||(g=!0,F(E))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var N=h;h=D;try{return O()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,D){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var N=h;h=O;try{return D()}finally{h=N}},e.unstable_scheduleCallback=function(O,D,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,O){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=N+z,O={id:c++,callback:D,priorityLevel:O,startTime:N,expirationTime:z,sortIndex:-1},N>B?(O.sortIndex=N,t(u,O),n(s)===null&&O===n(u)&&(y?(p(C),C=-1):y=!0,A(w,N-B))):(O.sortIndex=z,t(s,O),g||f||(g=!0,F(E))),O},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(O){var D=h;return function(){var N=h;h=D;try{return O.apply(this,arguments)}finally{h=N}}}})(U1);H1.exports=U1;var bE=H1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W1=b,$t=bE;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var G1=new Set,Zo={};function Jr(e,t){$i(e,t),$i(e+"Capture",t)}function $i(e,t){for(Zo[e]=t,e=0;e<t.length;e++)G1.add(t[e])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zd=Object.prototype.hasOwnProperty,wE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xm={},qm={};function SE(e){return Zd.call(qm,e)?!0:Zd.call(Xm,e)?!1:wE.test(e)?qm[e]=!0:(Xm[e]=!0,!1)}function _E(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function EE(e,t,n,r){if(t===null||typeof t>"u"||_E(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function dt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Xe[e]=new dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Xe[t]=new dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Xe[e]=new dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Xe[e]=new dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Xe[e]=new dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Xe[e]=new dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Xe[e]=new dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Xe[e]=new dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Xe[e]=new dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Np=/[\-:]([a-z])/g;function zp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Np,zp);Xe[t]=new dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Np,zp);Xe[t]=new dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Np,zp);Xe[t]=new dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Xe[e]=new dt(e,1,!1,e.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Xe[e]=new dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vp(e,t,n,r){var i=Xe.hasOwnProperty(t)?Xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(EE(t,n,i,r)&&(n=null),r||i===null?SE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qn=W1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),pi=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),Bp=Symbol.for("react.strict_mode"),Qd=Symbol.for("react.profiler"),Y1=Symbol.for("react.provider"),X1=Symbol.for("react.context"),Hp=Symbol.for("react.forward_ref"),Jd=Symbol.for("react.suspense"),ef=Symbol.for("react.suspense_list"),Up=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),q1=Symbol.for("react.offscreen"),Km=Symbol.iterator;function po(e){return e===null||typeof e!="object"?null:(e=Km&&e[Km]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,_c;function Oo(e){if(_c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_c=t&&t[1]||""}return`
`+_c+e}var Ec=!1;function Cc(e,t){if(!e||Ec)return"";Ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ec=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Oo(e):""}function CE(e){switch(e.tag){case 5:return Oo(e.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return e=Cc(e.type,!1),e;case 11:return e=Cc(e.type.render,!1),e;case 1:return e=Cc(e.type,!0),e;default:return""}}function tf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hi:return"Fragment";case pi:return"Portal";case Qd:return"Profiler";case Bp:return"StrictMode";case Jd:return"Suspense";case ef:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case X1:return(e.displayName||"Context")+".Consumer";case Y1:return(e._context.displayName||"Context")+".Provider";case Hp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Up:return t=e.displayName||null,t!==null?t:tf(e.type)||"Memo";case nr:t=e._payload,e=e._init;try{return tf(e(t))}catch{}}return null}function kE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tf(t);case 8:return t===Bp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function K1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function TE(e){var t=K1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ga(e){e._valueTracker||(e._valueTracker=TE(e))}function Z1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=K1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nf(e,t){var n=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Zm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Q1(e,t){t=t.checked,t!=null&&Vp(e,"checked",t,!1)}function rf(e,t){Q1(e,t);var n=wr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?of(e,t.type,n):t.hasOwnProperty("defaultValue")&&of(e,t.type,wr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function of(e,t,n){(t!=="number"||nl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Po=Array.isArray;function Ci(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function af(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(Po(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wr(n)}}function J1(e,t){var n=wr(t.value),r=wr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function eg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ey(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ey(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ya,ty=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ya=Ya||document.createElement("div"),Ya.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ya.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},OE=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(e){OE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ao[t]=Ao[e]})});function ny(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ao.hasOwnProperty(e)&&Ao[e]?(""+t).trim():t+"px"}function ry(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ny(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var PE=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lf(e,t){if(t){if(PE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function uf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cf=null;function Wp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var df=null,ki=null,Ti=null;function tg(e){if(e=Pa(e)){if(typeof df!="function")throw Error(V(280));var t=e.stateNode;t&&(t=su(t),df(e.stateNode,e.type,t))}}function iy(e){ki?Ti?Ti.push(e):Ti=[e]:ki=e}function oy(){if(ki){var e=ki,t=Ti;if(Ti=ki=null,tg(e),t)for(e=0;e<t.length;e++)tg(t[e])}}function ay(e,t){return e(t)}function sy(){}var kc=!1;function ly(e,t,n){if(kc)return e(t,n);kc=!0;try{return ay(e,t,n)}finally{kc=!1,(ki!==null||Ti!==null)&&(sy(),oy())}}function Jo(e,t){var n=e.stateNode;if(n===null)return null;var r=su(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var ff=!1;if(Bn)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){ff=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{ff=!1}function ME(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Fo=!1,rl=null,il=!1,pf=null,IE={onError:function(e){Fo=!0,rl=e}};function jE(e,t,n,r,i,o,a,l,s){Fo=!1,rl=null,ME.apply(IE,arguments)}function $E(e,t,n,r,i,o,a,l,s){if(jE.apply(this,arguments),Fo){if(Fo){var u=rl;Fo=!1,rl=null}else throw Error(V(198));il||(il=!0,pf=u)}}function ei(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function uy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ng(e){if(ei(e)!==e)throw Error(V(188))}function DE(e){var t=e.alternate;if(!t){if(t=ei(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ng(i),e;if(o===r)return ng(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function cy(e){return e=DE(e),e!==null?dy(e):null}function dy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=dy(e);if(t!==null)return t;e=e.sibling}return null}var fy=$t.unstable_scheduleCallback,rg=$t.unstable_cancelCallback,LE=$t.unstable_shouldYield,RE=$t.unstable_requestPaint,Te=$t.unstable_now,AE=$t.unstable_getCurrentPriorityLevel,Gp=$t.unstable_ImmediatePriority,py=$t.unstable_UserBlockingPriority,ol=$t.unstable_NormalPriority,FE=$t.unstable_LowPriority,hy=$t.unstable_IdlePriority,ru=null,wn=null;function NE(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(ru,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:BE,zE=Math.log,VE=Math.LN2;function BE(e){return e>>>=0,e===0?32:31-(zE(e)/VE|0)|0}var Xa=64,qa=4194304;function Mo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function al(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Mo(l):(o&=a,o!==0&&(r=Mo(o)))}else a=n&~i,a!==0?r=Mo(a):o!==0&&(r=Mo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-on(t),i=1<<n,r|=e[n],t&=~i;return r}function HE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-on(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=HE(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function hf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function my(){var e=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),e}function Tc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ta(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-on(t),e[t]=n}function WE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-on(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Yp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-on(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function gy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vy,Xp,yy,xy,by,mf=!1,Ka=[],fr=null,pr=null,hr=null,ea=new Map,ta=new Map,ir=[],GE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ig(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":ea.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(t.pointerId)}}function mo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Pa(t),t!==null&&Xp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function YE(e,t,n,r,i){switch(t){case"focusin":return fr=mo(fr,e,t,n,r,i),!0;case"dragenter":return pr=mo(pr,e,t,n,r,i),!0;case"mouseover":return hr=mo(hr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ea.set(o,mo(ea.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ta.set(o,mo(ta.get(o)||null,e,t,n,r,i)),!0}return!1}function wy(e){var t=Rr(e.target);if(t!==null){var n=ei(t);if(n!==null){if(t=n.tag,t===13){if(t=uy(n),t!==null){e.blockedOn=t,by(e.priority,function(){yy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cf=r,n.target.dispatchEvent(r),cf=null}else return t=Pa(n),t!==null&&Xp(t),e.blockedOn=n,!1;t.shift()}return!0}function og(e,t,n){Ts(e)&&n.delete(t)}function XE(){mf=!1,fr!==null&&Ts(fr)&&(fr=null),pr!==null&&Ts(pr)&&(pr=null),hr!==null&&Ts(hr)&&(hr=null),ea.forEach(og),ta.forEach(og)}function go(e,t){e.blockedOn===t&&(e.blockedOn=null,mf||(mf=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,XE)))}function na(e){function t(i){return go(i,e)}if(0<Ka.length){go(Ka[0],e);for(var n=1;n<Ka.length;n++){var r=Ka[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fr!==null&&go(fr,e),pr!==null&&go(pr,e),hr!==null&&go(hr,e),ea.forEach(t),ta.forEach(t),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)wy(n),n.blockedOn===null&&ir.shift()}var Oi=qn.ReactCurrentBatchConfig,sl=!0;function qE(e,t,n,r){var i=fe,o=Oi.transition;Oi.transition=null;try{fe=1,qp(e,t,n,r)}finally{fe=i,Oi.transition=o}}function KE(e,t,n,r){var i=fe,o=Oi.transition;Oi.transition=null;try{fe=4,qp(e,t,n,r)}finally{fe=i,Oi.transition=o}}function qp(e,t,n,r){if(sl){var i=gf(e,t,n,r);if(i===null)Ac(e,t,r,ll,n),ig(e,r);else if(YE(i,e,t,n,r))r.stopPropagation();else if(ig(e,r),t&4&&-1<GE.indexOf(e)){for(;i!==null;){var o=Pa(i);if(o!==null&&vy(o),o=gf(e,t,n,r),o===null&&Ac(e,t,r,ll,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ac(e,t,r,null,n)}}var ll=null;function gf(e,t,n,r){if(ll=null,e=Wp(r),e=Rr(e),e!==null)if(t=ei(e),t===null)e=null;else if(n=t.tag,n===13){if(e=uy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ll=e,null}function Sy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AE()){case Gp:return 1;case py:return 4;case ol:case FE:return 16;case hy:return 536870912;default:return 16}default:return 16}}var sr=null,Kp=null,Os=null;function _y(){if(Os)return Os;var e,t=Kp,n=t.length,r,i="value"in sr?sr.value:sr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Os=i.slice(e,1<r?1-r:void 0)}function Ps(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Za(){return!0}function ag(){return!1}function Rt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Za:ag,this.isPropagationStopped=ag,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),t}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zp=Rt(Ji),Oa=Ee({},Ji,{view:0,detail:0}),ZE=Rt(Oa),Oc,Pc,vo,iu=Ee({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vo&&(vo&&e.type==="mousemove"?(Oc=e.screenX-vo.screenX,Pc=e.screenY-vo.screenY):Pc=Oc=0,vo=e),Oc)},movementY:function(e){return"movementY"in e?e.movementY:Pc}}),sg=Rt(iu),QE=Ee({},iu,{dataTransfer:0}),JE=Rt(QE),eC=Ee({},Oa,{relatedTarget:0}),Mc=Rt(eC),tC=Ee({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),nC=Rt(tC),rC=Ee({},Ji,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iC=Rt(rC),oC=Ee({},Ji,{data:0}),lg=Rt(oC),aC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lC[e])?!!t[e]:!1}function Qp(){return uC}var cC=Ee({},Oa,{key:function(e){if(e.key){var t=aC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ps(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qp,charCode:function(e){return e.type==="keypress"?Ps(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ps(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dC=Rt(cC),fC=Ee({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ug=Rt(fC),pC=Ee({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qp}),hC=Rt(pC),mC=Ee({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),gC=Rt(mC),vC=Ee({},iu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yC=Rt(vC),xC=[9,13,27,32],Jp=Bn&&"CompositionEvent"in window,No=null;Bn&&"documentMode"in document&&(No=document.documentMode);var bC=Bn&&"TextEvent"in window&&!No,Ey=Bn&&(!Jp||No&&8<No&&11>=No),cg=String.fromCharCode(32),dg=!1;function Cy(e,t){switch(e){case"keyup":return xC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ky(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mi=!1;function wC(e,t){switch(e){case"compositionend":return ky(t);case"keypress":return t.which!==32?null:(dg=!0,cg);case"textInput":return e=t.data,e===cg&&dg?null:e;default:return null}}function SC(e,t){if(mi)return e==="compositionend"||!Jp&&Cy(e,t)?(e=_y(),Os=Kp=sr=null,mi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ey&&t.locale!=="ko"?null:t.data;default:return null}}var _C={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_C[e.type]:t==="textarea"}function Ty(e,t,n,r){iy(r),t=ul(t,"onChange"),0<t.length&&(n=new Zp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zo=null,ra=null;function EC(e){Fy(e,0)}function ou(e){var t=yi(e);if(Z1(t))return e}function CC(e,t){if(e==="change")return t}var Oy=!1;if(Bn){var Ic;if(Bn){var jc="oninput"in document;if(!jc){var pg=document.createElement("div");pg.setAttribute("oninput","return;"),jc=typeof pg.oninput=="function"}Ic=jc}else Ic=!1;Oy=Ic&&(!document.documentMode||9<document.documentMode)}function hg(){zo&&(zo.detachEvent("onpropertychange",Py),ra=zo=null)}function Py(e){if(e.propertyName==="value"&&ou(ra)){var t=[];Ty(t,ra,e,Wp(e)),ly(EC,t)}}function kC(e,t,n){e==="focusin"?(hg(),zo=t,ra=n,zo.attachEvent("onpropertychange",Py)):e==="focusout"&&hg()}function TC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ou(ra)}function OC(e,t){if(e==="click")return ou(t)}function PC(e,t){if(e==="input"||e==="change")return ou(t)}function MC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var un=typeof Object.is=="function"?Object.is:MC;function ia(e,t){if(un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zd.call(t,i)||!un(e[i],t[i]))return!1}return!0}function mg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gg(e,t){var n=mg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mg(n)}}function My(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?My(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Iy(){for(var e=window,t=nl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nl(e.document)}return t}function eh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function IC(e){var t=Iy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&My(n.ownerDocument.documentElement,n)){if(r!==null&&eh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=gg(n,o);var a=gg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jC=Bn&&"documentMode"in document&&11>=document.documentMode,gi=null,vf=null,Vo=null,yf=!1;function vg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yf||gi==null||gi!==nl(r)||(r=gi,"selectionStart"in r&&eh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vo&&ia(Vo,r)||(Vo=r,r=ul(vf,"onSelect"),0<r.length&&(t=new Zp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gi)))}function Qa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vi={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},$c={},jy={};Bn&&(jy=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function au(e){if($c[e])return $c[e];if(!vi[e])return e;var t=vi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jy)return $c[e]=t[n];return e}var $y=au("animationend"),Dy=au("animationiteration"),Ly=au("animationstart"),Ry=au("transitionend"),Ay=new Map,yg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(e,t){Ay.set(e,t),Jr(t,[e])}for(var Dc=0;Dc<yg.length;Dc++){var Lc=yg[Dc],$C=Lc.toLowerCase(),DC=Lc[0].toUpperCase()+Lc.slice(1);Er($C,"on"+DC)}Er($y,"onAnimationEnd");Er(Dy,"onAnimationIteration");Er(Ly,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(Ry,"onTransitionEnd");$i("onMouseEnter",["mouseout","mouseover"]);$i("onMouseLeave",["mouseout","mouseover"]);$i("onPointerEnter",["pointerout","pointerover"]);$i("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function xg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$E(r,t,void 0,e),e.currentTarget=null}function Fy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;xg(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;xg(i,l,u),o=s}}}if(il)throw e=pf,il=!1,pf=null,e}function me(e,t){var n=t[_f];n===void 0&&(n=t[_f]=new Set);var r=e+"__bubble";n.has(r)||(Ny(t,e,2,!1),n.add(r))}function Rc(e,t,n){var r=0;t&&(r|=4),Ny(n,e,r,t)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function oa(e){if(!e[Ja]){e[Ja]=!0,G1.forEach(function(n){n!=="selectionchange"&&(LC.has(n)||Rc(n,!1,e),Rc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ja]||(t[Ja]=!0,Rc("selectionchange",!1,t))}}function Ny(e,t,n,r){switch(Sy(t)){case 1:var i=qE;break;case 4:i=KE;break;default:i=qp}n=i.bind(null,t,n,e),i=void 0,!ff||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ac(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Rr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}ly(function(){var u=o,c=Wp(n),d=[];e:{var h=Ay.get(e);if(h!==void 0){var f=Zp,g=e;switch(e){case"keypress":if(Ps(n)===0)break e;case"keydown":case"keyup":f=dC;break;case"focusin":g="focus",f=Mc;break;case"focusout":g="blur",f=Mc;break;case"beforeblur":case"afterblur":f=Mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=sg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=JE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=hC;break;case $y:case Dy:case Ly:f=nC;break;case Ry:f=gC;break;case"scroll":f=ZE;break;case"wheel":f=yC;break;case"copy":case"cut":case"paste":f=iC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=ug}var y=(t&4)!==0,S=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var m=u,x;m!==null;){x=m;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,p!==null&&(w=Jo(m,p),w!=null&&y.push(aa(m,w,x)))),S)break;m=m.return}0<y.length&&(h=new f(h,g,null,n,c),d.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",h&&n!==cf&&(g=n.relatedTarget||n.fromElement)&&(Rr(g)||g[Hn]))break e;if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(g=n.relatedTarget||n.toElement,f=u,g=g?Rr(g):null,g!==null&&(S=ei(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(f=null,g=u),f!==g)){if(y=sg,w="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=ug,w="onPointerLeave",p="onPointerEnter",m="pointer"),S=f==null?h:yi(f),x=g==null?h:yi(g),h=new y(w,m+"leave",f,n,c),h.target=S,h.relatedTarget=x,w=null,Rr(c)===u&&(y=new y(p,m+"enter",g,n,c),y.target=x,y.relatedTarget=S,w=y),S=w,f&&g)t:{for(y=f,p=g,m=0,x=y;x;x=ri(x))m++;for(x=0,w=p;w;w=ri(w))x++;for(;0<m-x;)y=ri(y),m--;for(;0<x-m;)p=ri(p),x--;for(;m--;){if(y===p||p!==null&&y===p.alternate)break t;y=ri(y),p=ri(p)}y=null}else y=null;f!==null&&bg(d,h,f,y,!1),g!==null&&S!==null&&bg(d,S,g,y,!0)}}e:{if(h=u?yi(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var E=CC;else if(fg(h))if(Oy)E=PC;else{E=TC;var k=kC}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=OC);if(E&&(E=E(e,u))){Ty(d,E,n,c);break e}k&&k(e,h,u),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&of(h,"number",h.value)}switch(k=u?yi(u):window,e){case"focusin":(fg(k)||k.contentEditable==="true")&&(gi=k,vf=u,Vo=null);break;case"focusout":Vo=vf=gi=null;break;case"mousedown":yf=!0;break;case"contextmenu":case"mouseup":case"dragend":yf=!1,vg(d,n,c);break;case"selectionchange":if(jC)break;case"keydown":case"keyup":vg(d,n,c)}var _;if(Jp)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else mi?Cy(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Ey&&n.locale!=="ko"&&(mi||C!=="onCompositionStart"?C==="onCompositionEnd"&&mi&&(_=_y()):(sr=c,Kp="value"in sr?sr.value:sr.textContent,mi=!0)),k=ul(u,C),0<k.length&&(C=new lg(C,e,null,n,c),d.push({event:C,listeners:k}),_?C.data=_:(_=ky(n),_!==null&&(C.data=_)))),(_=bC?wC(e,n):SC(e,n))&&(u=ul(u,"onBeforeInput"),0<u.length&&(c=new lg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=_))}Fy(d,t)})}function aa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ul(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Jo(e,n),o!=null&&r.unshift(aa(e,o,i)),o=Jo(e,t),o!=null&&r.push(aa(e,o,i))),e=e.return}return r}function ri(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Jo(n,o),s!=null&&a.unshift(aa(n,s,l))):i||(s=Jo(n,o),s!=null&&a.push(aa(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var RC=/\r\n?/g,AC=/\u0000|\uFFFD/g;function wg(e){return(typeof e=="string"?e:""+e).replace(RC,`
`).replace(AC,"")}function es(e,t,n){if(t=wg(t),wg(e)!==t&&n)throw Error(V(425))}function cl(){}var xf=null,bf=null;function wf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sf=typeof setTimeout=="function"?setTimeout:void 0,FC=typeof clearTimeout=="function"?clearTimeout:void 0,Sg=typeof Promise=="function"?Promise:void 0,NC=typeof queueMicrotask=="function"?queueMicrotask:typeof Sg<"u"?function(e){return Sg.resolve(null).then(e).catch(zC)}:Sf;function zC(e){setTimeout(function(){throw e})}function Fc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),na(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);na(t)}function mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _g(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var eo=Math.random().toString(36).slice(2),xn="__reactFiber$"+eo,sa="__reactProps$"+eo,Hn="__reactContainer$"+eo,_f="__reactEvents$"+eo,VC="__reactListeners$"+eo,BC="__reactHandles$"+eo;function Rr(e){var t=e[xn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hn]||n[xn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_g(e);e!==null;){if(n=e[xn])return n;e=_g(e)}return t}e=n,n=e.parentNode}return null}function Pa(e){return e=e[xn]||e[Hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function su(e){return e[sa]||null}var Ef=[],xi=-1;function Cr(e){return{current:e}}function ve(e){0>xi||(e.current=Ef[xi],Ef[xi]=null,xi--)}function he(e,t){xi++,Ef[xi]=e.current,e.current=t}var Sr={},rt=Cr(Sr),xt=Cr(!1),Hr=Sr;function Di(e,t){var n=e.type.contextTypes;if(!n)return Sr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function bt(e){return e=e.childContextTypes,e!=null}function dl(){ve(xt),ve(rt)}function Eg(e,t,n){if(rt.current!==Sr)throw Error(V(168));he(rt,t),he(xt,n)}function zy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,kE(e)||"Unknown",i));return Ee({},n,r)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sr,Hr=rt.current,he(rt,e),he(xt,xt.current),!0}function Cg(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=zy(e,t,Hr),r.__reactInternalMemoizedMergedChildContext=e,ve(xt),ve(rt),he(rt,e)):ve(xt),he(xt,n)}var $n=null,lu=!1,Nc=!1;function Vy(e){$n===null?$n=[e]:$n.push(e)}function HC(e){lu=!0,Vy(e)}function kr(){if(!Nc&&$n!==null){Nc=!0;var e=0,t=fe;try{var n=$n;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$n=null,lu=!1}catch(i){throw $n!==null&&($n=$n.slice(e+1)),fy(Gp,kr),i}finally{fe=t,Nc=!1}}return null}var bi=[],wi=0,pl=null,hl=0,zt=[],Vt=0,Ur=null,Rn=1,An="";function Mr(e,t){bi[wi++]=hl,bi[wi++]=pl,pl=e,hl=t}function By(e,t,n){zt[Vt++]=Rn,zt[Vt++]=An,zt[Vt++]=Ur,Ur=e;var r=Rn;e=An;var i=32-on(r)-1;r&=~(1<<i),n+=1;var o=32-on(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Rn=1<<32-on(t)+i|n<<i|r,An=o+e}else Rn=1<<o|n<<i|r,An=e}function th(e){e.return!==null&&(Mr(e,1),By(e,1,0))}function nh(e){for(;e===pl;)pl=bi[--wi],bi[wi]=null,hl=bi[--wi],bi[wi]=null;for(;e===Ur;)Ur=zt[--Vt],zt[Vt]=null,An=zt[--Vt],zt[Vt]=null,Rn=zt[--Vt],zt[Vt]=null}var It=null,Pt=null,be=!1,nn=null;function Hy(e,t){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function kg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,Pt=mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,Pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ur!==null?{id:Rn,overflow:An}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,It=e,Pt=null,!0):!1;default:return!1}}function Cf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kf(e){if(be){var t=Pt;if(t){var n=t;if(!kg(e,t)){if(Cf(e))throw Error(V(418));t=mr(n.nextSibling);var r=It;t&&kg(e,t)?Hy(r,n):(e.flags=e.flags&-4097|2,be=!1,It=e)}}else{if(Cf(e))throw Error(V(418));e.flags=e.flags&-4097|2,be=!1,It=e}}}function Tg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function ts(e){if(e!==It)return!1;if(!be)return Tg(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wf(e.type,e.memoizedProps)),t&&(t=Pt)){if(Cf(e))throw Uy(),Error(V(418));for(;t;)Hy(e,t),t=mr(t.nextSibling)}if(Tg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pt=mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pt=null}}else Pt=It?mr(e.stateNode.nextSibling):null;return!0}function Uy(){for(var e=Pt;e;)e=mr(e.nextSibling)}function Li(){Pt=It=null,be=!1}function rh(e){nn===null?nn=[e]:nn.push(e)}var UC=qn.ReactCurrentBatchConfig;function Jt(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ml=Cr(null),gl=null,Si=null,ih=null;function oh(){ih=Si=gl=null}function ah(e){var t=ml.current;ve(ml),e._currentValue=t}function Tf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pi(e,t){gl=e,ih=Si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(yt=!0),e.firstContext=null)}function Ut(e){var t=e._currentValue;if(ih!==e)if(e={context:e,memoizedValue:t,next:null},Si===null){if(gl===null)throw Error(V(308));Si=e,gl.dependencies={lanes:0,firstContext:e}}else Si=Si.next=e;return t}var Ar=null;function sh(e){Ar===null?Ar=[e]:Ar.push(e)}function Wy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,sh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Un(e,r)}function Un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rr=!1;function lh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Un(e,n)}return i=r.interleaved,i===null?(t.next=t,sh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Un(e,n)}function Ms(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yp(e,n)}}function Og(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vl(e,t,n,r){var i=e.updateQueue;rr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,c=u=s=null,l=o;do{var h=l.lane,f=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,y=l;switch(h=t,f=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(f,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(f,d,h):g,h==null)break e;d=Ee({},d,h);break e;case 2:rr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else f={eventTime:f,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=f,s=d):c=c.next=f,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Gr|=a,e.lanes=a,e.memoizedState=d}}function Pg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Yy=new W1.Component().refs;function Of(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var uu={isMounted:function(e){return(e=e._reactInternals)?ei(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lt(),i=yr(e),o=Fn(r,i);o.payload=t,n!=null&&(o.callback=n),t=gr(e,o,i),t!==null&&(an(t,e,i,r),Ms(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lt(),i=yr(e),o=Fn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gr(e,o,i),t!==null&&(an(t,e,i,r),Ms(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),r=yr(e),i=Fn(n,r);i.tag=2,t!=null&&(i.callback=t),t=gr(e,i,r),t!==null&&(an(t,e,r,n),Ms(t,e,r))}};function Mg(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ia(n,r)||!ia(i,o):!0}function Xy(e,t,n){var r=!1,i=Sr,o=t.contextType;return typeof o=="object"&&o!==null?o=Ut(o):(i=bt(t)?Hr:rt.current,r=t.contextTypes,o=(r=r!=null)?Di(e,i):Sr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=uu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ig(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&uu.enqueueReplaceState(t,t.state,null)}function Pf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Yy,lh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ut(o):(o=bt(t)?Hr:rt.current,i.context=Di(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Of(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&uu.enqueueReplaceState(i,i.state,null),vl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function yo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Yy&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function ns(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jg(e){var t=e._init;return t(e._payload)}function qy(e){function t(p,m){if(e){var x=p.deletions;x===null?(p.deletions=[m],p.flags|=16):x.push(m)}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=xr(p,m),p.index=0,p.sibling=null,p}function o(p,m,x){return p.index=x,e?(x=p.alternate,x!==null?(x=x.index,x<m?(p.flags|=2,m):x):(p.flags|=2,m)):(p.flags|=1048576,m)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,m,x,w){return m===null||m.tag!==6?(m=Gc(x,p.mode,w),m.return=p,m):(m=i(m,x),m.return=p,m)}function s(p,m,x,w){var E=x.type;return E===hi?c(p,m,x.props.children,w,x.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nr&&jg(E)===m.type)?(w=i(m,x.props),w.ref=yo(p,m,x),w.return=p,w):(w=Rs(x.type,x.key,x.props,null,p.mode,w),w.ref=yo(p,m,x),w.return=p,w)}function u(p,m,x,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Yc(x,p.mode,w),m.return=p,m):(m=i(m,x.children||[]),m.return=p,m)}function c(p,m,x,w,E){return m===null||m.tag!==7?(m=Vr(x,p.mode,w,E),m.return=p,m):(m=i(m,x),m.return=p,m)}function d(p,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Gc(""+m,p.mode,x),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Wa:return x=Rs(m.type,m.key,m.props,null,p.mode,x),x.ref=yo(p,null,m),x.return=p,x;case pi:return m=Yc(m,p.mode,x),m.return=p,m;case nr:var w=m._init;return d(p,w(m._payload),x)}if(Po(m)||po(m))return m=Vr(m,p.mode,x,null),m.return=p,m;ns(p,m)}return null}function h(p,m,x,w){var E=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:l(p,m,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wa:return x.key===E?s(p,m,x,w):null;case pi:return x.key===E?u(p,m,x,w):null;case nr:return E=x._init,h(p,m,E(x._payload),w)}if(Po(x)||po(x))return E!==null?null:c(p,m,x,w,null);ns(p,x)}return null}function f(p,m,x,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(x)||null,l(m,p,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Wa:return p=p.get(w.key===null?x:w.key)||null,s(m,p,w,E);case pi:return p=p.get(w.key===null?x:w.key)||null,u(m,p,w,E);case nr:var k=w._init;return f(p,m,x,k(w._payload),E)}if(Po(w)||po(w))return p=p.get(x)||null,c(m,p,w,E,null);ns(m,w)}return null}function g(p,m,x,w){for(var E=null,k=null,_=m,C=m=0,M=null;_!==null&&C<x.length;C++){_.index>C?(M=_,_=null):M=_.sibling;var I=h(p,_,x[C],w);if(I===null){_===null&&(_=M);break}e&&_&&I.alternate===null&&t(p,_),m=o(I,m,C),k===null?E=I:k.sibling=I,k=I,_=M}if(C===x.length)return n(p,_),be&&Mr(p,C),E;if(_===null){for(;C<x.length;C++)_=d(p,x[C],w),_!==null&&(m=o(_,m,C),k===null?E=_:k.sibling=_,k=_);return be&&Mr(p,C),E}for(_=r(p,_);C<x.length;C++)M=f(_,p,C,x[C],w),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?C:M.key),m=o(M,m,C),k===null?E=M:k.sibling=M,k=M);return e&&_.forEach(function($){return t(p,$)}),be&&Mr(p,C),E}function y(p,m,x,w){var E=po(x);if(typeof E!="function")throw Error(V(150));if(x=E.call(x),x==null)throw Error(V(151));for(var k=E=null,_=m,C=m=0,M=null,I=x.next();_!==null&&!I.done;C++,I=x.next()){_.index>C?(M=_,_=null):M=_.sibling;var $=h(p,_,I.value,w);if($===null){_===null&&(_=M);break}e&&_&&$.alternate===null&&t(p,_),m=o($,m,C),k===null?E=$:k.sibling=$,k=$,_=M}if(I.done)return n(p,_),be&&Mr(p,C),E;if(_===null){for(;!I.done;C++,I=x.next())I=d(p,I.value,w),I!==null&&(m=o(I,m,C),k===null?E=I:k.sibling=I,k=I);return be&&Mr(p,C),E}for(_=r(p,_);!I.done;C++,I=x.next())I=f(_,p,C,I.value,w),I!==null&&(e&&I.alternate!==null&&_.delete(I.key===null?C:I.key),m=o(I,m,C),k===null?E=I:k.sibling=I,k=I);return e&&_.forEach(function(P){return t(p,P)}),be&&Mr(p,C),E}function S(p,m,x,w){if(typeof x=="object"&&x!==null&&x.type===hi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Wa:e:{for(var E=x.key,k=m;k!==null;){if(k.key===E){if(E=x.type,E===hi){if(k.tag===7){n(p,k.sibling),m=i(k,x.props.children),m.return=p,p=m;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nr&&jg(E)===k.type){n(p,k.sibling),m=i(k,x.props),m.ref=yo(p,k,x),m.return=p,p=m;break e}n(p,k);break}else t(p,k);k=k.sibling}x.type===hi?(m=Vr(x.props.children,p.mode,w,x.key),m.return=p,p=m):(w=Rs(x.type,x.key,x.props,null,p.mode,w),w.ref=yo(p,m,x),w.return=p,p=w)}return a(p);case pi:e:{for(k=x.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(p,m.sibling),m=i(m,x.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else t(p,m);m=m.sibling}m=Yc(x,p.mode,w),m.return=p,p=m}return a(p);case nr:return k=x._init,S(p,m,k(x._payload),w)}if(Po(x))return g(p,m,x,w);if(po(x))return y(p,m,x,w);ns(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(p,m.sibling),m=i(m,x),m.return=p,p=m):(n(p,m),m=Gc(x,p.mode,w),m.return=p,p=m),a(p)):n(p,m)}return S}var Ri=qy(!0),Ky=qy(!1),Ma={},Sn=Cr(Ma),la=Cr(Ma),ua=Cr(Ma);function Fr(e){if(e===Ma)throw Error(V(174));return e}function uh(e,t){switch(he(ua,t),he(la,e),he(Sn,Ma),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sf(t,e)}ve(Sn),he(Sn,t)}function Ai(){ve(Sn),ve(la),ve(ua)}function Zy(e){Fr(ua.current);var t=Fr(Sn.current),n=sf(t,e.type);t!==n&&(he(la,e),he(Sn,n))}function ch(e){la.current===e&&(ve(Sn),ve(la))}var Se=Cr(0);function yl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zc=[];function dh(){for(var e=0;e<zc.length;e++)zc[e]._workInProgressVersionPrimary=null;zc.length=0}var Is=qn.ReactCurrentDispatcher,Vc=qn.ReactCurrentBatchConfig,Wr=0,_e=null,Le=null,Ve=null,xl=!1,Bo=!1,ca=0,WC=0;function Ke(){throw Error(V(321))}function fh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!un(e[n],t[n]))return!1;return!0}function ph(e,t,n,r,i,o){if(Wr=o,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Is.current=e===null||e.memoizedState===null?qC:KC,e=n(r,i),Bo){o=0;do{if(Bo=!1,ca=0,25<=o)throw Error(V(301));o+=1,Ve=Le=null,t.updateQueue=null,Is.current=ZC,e=n(r,i)}while(Bo)}if(Is.current=bl,t=Le!==null&&Le.next!==null,Wr=0,Ve=Le=_e=null,xl=!1,t)throw Error(V(300));return e}function hh(){var e=ca!==0;return ca=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?_e.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Wt(){if(Le===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Ve===null?_e.memoizedState:Ve.next;if(t!==null)Ve=t,Le=e;else{if(e===null)throw Error(V(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ve===null?_e.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function da(e,t){return typeof t=="function"?t(e):t}function Bc(e){var t=Wt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var c=u.lane;if((Wr&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,_e.lanes|=c,Gr|=c}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,un(r,t.memoizedState)||(yt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,_e.lanes|=o,Gr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hc(e){var t=Wt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);un(o,t.memoizedState)||(yt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qy(){}function Jy(e,t){var n=_e,r=Wt(),i=t(),o=!un(r.memoizedState,i);if(o&&(r.memoizedState=i,yt=!0),r=r.queue,mh(nx.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,fa(9,tx.bind(null,n,r,i,t),void 0,null),Be===null)throw Error(V(349));Wr&30||ex(n,t,i)}return i}function ex(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tx(e,t,n,r){t.value=n,t.getSnapshot=r,rx(t)&&ix(e)}function nx(e,t,n){return n(function(){rx(t)&&ix(e)})}function rx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!un(e,n)}catch{return!0}}function ix(e){var t=Un(e,1);t!==null&&an(t,e,1,-1)}function $g(e){var t=gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:e},t.queue=e,e=e.dispatch=XC.bind(null,_e,e),[t.memoizedState,e]}function fa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ox(){return Wt().memoizedState}function js(e,t,n,r){var i=gn();_e.flags|=e,i.memoizedState=fa(1|t,n,void 0,r===void 0?null:r)}function cu(e,t,n,r){var i=Wt();r=r===void 0?null:r;var o=void 0;if(Le!==null){var a=Le.memoizedState;if(o=a.destroy,r!==null&&fh(r,a.deps)){i.memoizedState=fa(t,n,o,r);return}}_e.flags|=e,i.memoizedState=fa(1|t,n,o,r)}function Dg(e,t){return js(8390656,8,e,t)}function mh(e,t){return cu(2048,8,e,t)}function ax(e,t){return cu(4,2,e,t)}function sx(e,t){return cu(4,4,e,t)}function lx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ux(e,t,n){return n=n!=null?n.concat([e]):null,cu(4,4,lx.bind(null,t,e),n)}function gh(){}function cx(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function dx(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fx(e,t,n){return Wr&21?(un(n,t)||(n=my(),_e.lanes|=n,Gr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,yt=!0),e.memoizedState=n)}function GC(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=Vc.transition;Vc.transition={};try{e(!1),t()}finally{fe=n,Vc.transition=r}}function px(){return Wt().memoizedState}function YC(e,t,n){var r=yr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hx(e))mx(t,n);else if(n=Wy(e,t,n,r),n!==null){var i=lt();an(n,e,r,i),gx(n,t,r)}}function XC(e,t,n){var r=yr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hx(e))mx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,un(l,a)){var s=t.interleaved;s===null?(i.next=i,sh(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Wy(e,t,i,r),n!==null&&(i=lt(),an(n,e,r,i),gx(n,t,r))}}function hx(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function mx(e,t){Bo=xl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yp(e,n)}}var bl={readContext:Ut,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},qC={readContext:Ut,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:Ut,useEffect:Dg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,js(4194308,4,lx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return js(4194308,4,e,t)},useInsertionEffect:function(e,t){return js(4,2,e,t)},useMemo:function(e,t){var n=gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=YC.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:$g,useDebugValue:gh,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=$g(!1),t=e[0];return e=GC.bind(null,e[1]),gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_e,i=gn();if(be){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Be===null)throw Error(V(349));Wr&30||ex(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Dg(nx.bind(null,r,o,e),[e]),r.flags|=2048,fa(9,tx.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=gn(),t=Be.identifierPrefix;if(be){var n=An,r=Rn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ca++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=WC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},KC={readContext:Ut,useCallback:cx,useContext:Ut,useEffect:mh,useImperativeHandle:ux,useInsertionEffect:ax,useLayoutEffect:sx,useMemo:dx,useReducer:Bc,useRef:ox,useState:function(){return Bc(da)},useDebugValue:gh,useDeferredValue:function(e){var t=Wt();return fx(t,Le.memoizedState,e)},useTransition:function(){var e=Bc(da)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Qy,useSyncExternalStore:Jy,useId:px,unstable_isNewReconciler:!1},ZC={readContext:Ut,useCallback:cx,useContext:Ut,useEffect:mh,useImperativeHandle:ux,useInsertionEffect:ax,useLayoutEffect:sx,useMemo:dx,useReducer:Hc,useRef:ox,useState:function(){return Hc(da)},useDebugValue:gh,useDeferredValue:function(e){var t=Wt();return Le===null?t.memoizedState=e:fx(t,Le.memoizedState,e)},useTransition:function(){var e=Hc(da)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Qy,useSyncExternalStore:Jy,useId:px,unstable_isNewReconciler:!1};function Fi(e,t){try{var n="",r=t;do n+=CE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Uc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Mf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var QC=typeof WeakMap=="function"?WeakMap:Map;function vx(e,t,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Sl||(Sl=!0,zf=r),Mf(e,t)},n}function yx(e,t,n){n=Fn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Mf(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Mf(e,t),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Lg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new QC;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=fk.bind(null,e,t,n),t.then(e,e))}function Rg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ag(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Fn(-1,1),t.tag=2,gr(n,t,1))),n.lanes|=1),e)}var JC=qn.ReactCurrentOwner,yt=!1;function at(e,t,n,r){t.child=e===null?Ky(t,null,n,r):Ri(t,e.child,n,r)}function Fg(e,t,n,r,i){n=n.render;var o=t.ref;return Pi(t,i),r=ph(e,t,n,r,o,i),n=hh(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(be&&n&&th(t),t.flags|=1,at(e,t,r,i),t.child)}function Ng(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Eh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,xx(e,t,o,r,i)):(e=Rs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(a,r)&&e.ref===t.ref)return Wn(e,t,i)}return t.flags|=1,e=xr(o,r),e.ref=t.ref,e.return=t,t.child=e}function xx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ia(o,r)&&e.ref===t.ref)if(yt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(yt=!0);else return t.lanes=e.lanes,Wn(e,t,i)}return If(e,t,n,r,i)}function bx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Ei,Tt),Tt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(Ei,Tt),Tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(Ei,Tt),Tt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(Ei,Tt),Tt|=r;return at(e,t,i,n),t.child}function wx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function If(e,t,n,r,i){var o=bt(n)?Hr:rt.current;return o=Di(t,o),Pi(t,i),n=ph(e,t,n,r,o,i),r=hh(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(be&&r&&th(t),t.flags|=1,at(e,t,n,i),t.child)}function zg(e,t,n,r,i){if(bt(n)){var o=!0;fl(t)}else o=!1;if(Pi(t,i),t.stateNode===null)$s(e,t),Xy(t,n,r),Pf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ut(u):(u=bt(n)?Hr:rt.current,u=Di(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Ig(t,a,r,u),rr=!1;var h=t.memoizedState;a.state=h,vl(t,r,a,i),s=t.memoizedState,l!==r||h!==s||xt.current||rr?(typeof c=="function"&&(Of(t,n,c,r),s=t.memoizedState),(l=rr||Mg(t,n,l,r,h,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Gy(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Jt(t.type,l),a.props=u,d=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ut(s):(s=bt(n)?Hr:rt.current,s=Di(t,s));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||h!==s)&&Ig(t,a,r,s),rr=!1,h=t.memoizedState,a.state=h,vl(t,r,a,i);var g=t.memoizedState;l!==d||h!==g||xt.current||rr?(typeof f=="function"&&(Of(t,n,f,r),g=t.memoizedState),(u=rr||Mg(t,n,u,r,h,g,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return jf(e,t,n,r,o,i)}function jf(e,t,n,r,i,o){wx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Cg(t,n,!1),Wn(e,t,o);r=t.stateNode,JC.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ri(t,e.child,null,o),t.child=Ri(t,null,l,o)):at(e,t,l,o),t.memoizedState=r.state,i&&Cg(t,n,!0),t.child}function Sx(e){var t=e.stateNode;t.pendingContext?Eg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Eg(e,t.context,!1),uh(e,t.containerInfo)}function Vg(e,t,n,r,i){return Li(),rh(i),t.flags|=256,at(e,t,n,r),t.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function Df(e){return{baseLanes:e,cachePool:null,transitions:null}}function _x(e,t,n){var r=t.pendingProps,i=Se.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(Se,i&1),e===null)return kf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=pu(a,r,0,null),e=Vr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Df(n),t.memoizedState=$f,e):vh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ek(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=xr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=xr(l,o):(o=Vr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Df(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=$f,r}return o=e.child,e=o.sibling,r=xr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vh(e,t){return t=pu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function rs(e,t,n,r){return r!==null&&rh(r),Ri(t,e.child,null,n),e=vh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ek(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Uc(Error(V(422))),rs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=pu({mode:"visible",children:r.children},i,0,null),o=Vr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ri(t,e.child,null,a),t.child.memoizedState=Df(a),t.memoizedState=$f,o);if(!(t.mode&1))return rs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=Uc(o,r,void 0),rs(e,t,a,r)}if(l=(a&e.childLanes)!==0,yt||l){if(r=Be,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Un(e,i),an(r,e,i,-1))}return _h(),r=Uc(Error(V(421))),rs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=pk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Pt=mr(i.nextSibling),It=t,be=!0,nn=null,e!==null&&(zt[Vt++]=Rn,zt[Vt++]=An,zt[Vt++]=Ur,Rn=e.id,An=e.overflow,Ur=t),t=vh(t,r.children),t.flags|=4096,t)}function Bg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Tf(e.return,t,n)}function Wc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ex(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(at(e,t,r.children,n),r=Se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bg(e,n,t);else if(e.tag===19)Bg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(Se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&yl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Wc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Wc(t,!0,n,null,o);break;case"together":Wc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $s(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=xr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tk(e,t,n){switch(t.tag){case 3:Sx(t),Li();break;case 5:Zy(t);break;case 1:bt(t.type)&&fl(t);break;case 4:uh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(ml,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(Se,Se.current&1),t.flags|=128,null):n&t.child.childLanes?_x(e,t,n):(he(Se,Se.current&1),e=Wn(e,t,n),e!==null?e.sibling:null);he(Se,Se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ex(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Se,Se.current),r)break;return null;case 22:case 23:return t.lanes=0,bx(e,t,n)}return Wn(e,t,n)}var Cx,Lf,kx,Tx;Cx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lf=function(){};kx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Fr(Sn.current);var o=null;switch(n){case"input":i=nf(e,i),r=nf(e,r),o=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),o=[];break;case"textarea":i=af(e,i),r=af(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cl)}lf(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&me("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Tx=function(e,t,n,r){n!==r&&(t.flags|=4)};function xo(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function nk(e,t,n){var r=t.pendingProps;switch(nh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return bt(t.type)&&dl(),Ze(t),null;case 3:return r=t.stateNode,Ai(),ve(xt),ve(rt),dh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nn!==null&&(Hf(nn),nn=null))),Lf(e,t),Ze(t),null;case 5:ch(t);var i=Fr(ua.current);if(n=t.type,e!==null&&t.stateNode!=null)kx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return Ze(t),null}if(e=Fr(Sn.current),ts(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[xn]=t,r[sa]=o,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Io.length;i++)me(Io[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Zm(r,o),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},me("invalid",r);break;case"textarea":Jm(r,o),me("invalid",r)}lf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&es(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&es(r.textContent,l,e),i=["children",""+l]):Zo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&me("scroll",r)}switch(n){case"input":Ga(r),Qm(r,o,!0);break;case"textarea":Ga(r),eg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=cl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ey(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[xn]=t,e[sa]=r,Cx(e,t,!1,!1),t.stateNode=e;e:{switch(a=uf(n,r),n){case"dialog":me("cancel",e),me("close",e),i=r;break;case"iframe":case"object":case"embed":me("load",e),i=r;break;case"video":case"audio":for(i=0;i<Io.length;i++)me(Io[i],e);i=r;break;case"source":me("error",e),i=r;break;case"img":case"image":case"link":me("error",e),me("load",e),i=r;break;case"details":me("toggle",e),i=r;break;case"input":Zm(e,r),i=nf(e,r),me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),me("invalid",e);break;case"textarea":Jm(e,r),i=af(e,r),me("invalid",e);break;default:i=r}lf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?ry(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ty(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Qo(e,s):typeof s=="number"&&Qo(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Zo.hasOwnProperty(o)?s!=null&&o==="onScroll"&&me("scroll",e):s!=null&&Vp(e,o,s,a))}switch(n){case"input":Ga(e),Qm(e,r,!1);break;case"textarea":Ga(e),eg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ci(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)Tx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Fr(ua.current),Fr(Sn.current),ts(t)){if(r=t.stateNode,n=t.memoizedProps,r[xn]=t,(o=r.nodeValue!==n)&&(e=It,e!==null))switch(e.tag){case 3:es(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&es(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=t,t.stateNode=r}return Ze(t),null;case 13:if(ve(Se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&Pt!==null&&t.mode&1&&!(t.flags&128))Uy(),Li(),t.flags|=98560,o=!1;else if(o=ts(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[xn]=t}else Li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else nn!==null&&(Hf(nn),nn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Se.current&1?Ae===0&&(Ae=3):_h())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Ai(),Lf(e,t),e===null&&oa(t.stateNode.containerInfo),Ze(t),null;case 10:return ah(t.type._context),Ze(t),null;case 17:return bt(t.type)&&dl(),Ze(t),null;case 19:if(ve(Se),o=t.memoizedState,o===null)return Ze(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)xo(o,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=yl(e),a!==null){for(t.flags|=128,xo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(Se,Se.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>Ni&&(t.flags|=128,r=!0,xo(o,!1),t.lanes=4194304)}else{if(!r)if(e=yl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!be)return Ze(t),null}else 2*Te()-o.renderingStartTime>Ni&&n!==1073741824&&(t.flags|=128,r=!0,xo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,n=Se.current,he(Se,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return Sh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Tt&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function rk(e,t){switch(nh(t),t.tag){case 1:return bt(t.type)&&dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ai(),ve(xt),ve(rt),dh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ch(t),null;case 13:if(ve(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Se),null;case 4:return Ai(),null;case 10:return ah(t.type._context),null;case 22:case 23:return Sh(),null;case 24:return null;default:return null}}var is=!1,tt=!1,ik=typeof WeakSet=="function"?WeakSet:Set,H=null;function _i(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function Rf(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var Hg=!1;function ok(e,t){if(xf=sl,e=Iy(),eh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===e)break t;if(h===n&&++u===i&&(l=a),h===o&&++c===r&&(s=a),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(bf={focusedElem:e,selectionRange:n},sl=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,S=g.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:Jt(t.type,y),S);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(w){Ce(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return g=Hg,Hg=!1,g}function Ho(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Rf(t,n,o)}i=i.next}while(i!==r)}}function du(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Af(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ox(e){var t=e.alternate;t!==null&&(e.alternate=null,Ox(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xn],delete t[sa],delete t[_f],delete t[VC],delete t[BC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Px(e){return e.tag===5||e.tag===3||e.tag===4}function Ug(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Px(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ff(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cl));else if(r!==4&&(e=e.child,e!==null))for(Ff(e,t,n),e=e.sibling;e!==null;)Ff(e,t,n),e=e.sibling}function Nf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nf(e,t,n),e=e.sibling;e!==null;)Nf(e,t,n),e=e.sibling}var We=null,en=!1;function er(e,t,n){for(n=n.child;n!==null;)Mx(e,t,n),n=n.sibling}function Mx(e,t,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(ru,n)}catch{}switch(n.tag){case 5:tt||_i(n,t);case 6:var r=We,i=en;We=null,er(e,t,n),We=r,en=i,We!==null&&(en?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(en?(e=We,n=n.stateNode,e.nodeType===8?Fc(e.parentNode,n):e.nodeType===1&&Fc(e,n),na(e)):Fc(We,n.stateNode));break;case 4:r=We,i=en,We=n.stateNode.containerInfo,en=!0,er(e,t,n),We=r,en=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Rf(n,t,a),i=i.next}while(i!==r)}er(e,t,n);break;case 1:if(!tt&&(_i(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,t,l)}er(e,t,n);break;case 21:er(e,t,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,er(e,t,n),tt=r):er(e,t,n);break;default:er(e,t,n)}}function Wg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ik),t.forEach(function(r){var i=hk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:We=l.stateNode,en=!1;break e;case 3:We=l.stateNode.containerInfo,en=!0;break e;case 4:We=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(We===null)throw Error(V(160));Mx(o,a,i),We=null,en=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Ce(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ix(t,e),t=t.sibling}function Ix(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qt(t,e),hn(e),r&4){try{Ho(3,e,e.return),du(3,e)}catch(y){Ce(e,e.return,y)}try{Ho(5,e,e.return)}catch(y){Ce(e,e.return,y)}}break;case 1:qt(t,e),hn(e),r&512&&n!==null&&_i(n,n.return);break;case 5:if(qt(t,e),hn(e),r&512&&n!==null&&_i(n,n.return),e.flags&32){var i=e.stateNode;try{Qo(i,"")}catch(y){Ce(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Q1(i,o),uf(l,a);var u=uf(l,o);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?ry(i,d):c==="dangerouslySetInnerHTML"?ty(i,d):c==="children"?Qo(i,d):Vp(i,c,d,u)}switch(l){case"input":rf(i,o);break;case"textarea":J1(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;f!=null?Ci(i,!!o.multiple,f,!1):h!==!!o.multiple&&(o.defaultValue!=null?Ci(i,!!o.multiple,o.defaultValue,!0):Ci(i,!!o.multiple,o.multiple?[]:"",!1))}i[sa]=o}catch(y){Ce(e,e.return,y)}}break;case 6:if(qt(t,e),hn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Ce(e,e.return,y)}}break;case 3:if(qt(t,e),hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{na(t.containerInfo)}catch(y){Ce(e,e.return,y)}break;case 4:qt(t,e),hn(e);break;case 13:qt(t,e),hn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(bh=Te())),r&4&&Wg(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(u=tt)||c,qt(t,e),tt=u):qt(t,e),hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(H=e,c=e.child;c!==null;){for(d=H=c;H!==null;){switch(h=H,f=h.child,h.tag){case 0:case 11:case 14:case 15:Ho(4,h,h.return);break;case 1:_i(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){Ce(r,n,y)}}break;case 5:_i(h,h.return);break;case 22:if(h.memoizedState!==null){Yg(d);continue}}f!==null?(f.return=h,H=f):Yg(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ny("display",a))}catch(y){Ce(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Ce(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qt(t,e),hn(e),r&4&&Wg(e);break;case 21:break;default:qt(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Px(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qo(i,""),r.flags&=-33);var o=Ug(e);Nf(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Ug(e);Ff(e,l,a);break;default:throw Error(V(161))}}catch(s){Ce(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ak(e,t,n){H=e,jx(e)}function jx(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||is;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||tt;l=is;var u=tt;if(is=a,(tt=s)&&!u)for(H=i;H!==null;)a=H,s=a.child,a.tag===22&&a.memoizedState!==null?Xg(i):s!==null?(s.return=a,H=s):Xg(i);for(;o!==null;)H=o,jx(o),o=o.sibling;H=i,is=l,tt=u}Gg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,H=o):Gg(e)}}function Gg(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||du(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Jt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Pg(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pg(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&na(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}tt||t.flags&512&&Af(t)}catch(h){Ce(t,t.return,h)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function Yg(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function Xg(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{du(4,t)}catch(s){Ce(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Ce(t,i,s)}}var o=t.return;try{Af(t)}catch(s){Ce(t,o,s)}break;case 5:var a=t.return;try{Af(t)}catch(s){Ce(t,a,s)}}}catch(s){Ce(t,t.return,s)}if(t===e){H=null;break}var l=t.sibling;if(l!==null){l.return=t.return,H=l;break}H=t.return}}var sk=Math.ceil,wl=qn.ReactCurrentDispatcher,yh=qn.ReactCurrentOwner,Ht=qn.ReactCurrentBatchConfig,ae=0,Be=null,je=null,Ye=0,Tt=0,Ei=Cr(0),Ae=0,pa=null,Gr=0,fu=0,xh=0,Uo=null,vt=null,bh=0,Ni=1/0,Mn=null,Sl=!1,zf=null,vr=null,os=!1,lr=null,_l=0,Wo=0,Vf=null,Ds=-1,Ls=0;function lt(){return ae&6?Te():Ds!==-1?Ds:Ds=Te()}function yr(e){return e.mode&1?ae&2&&Ye!==0?Ye&-Ye:UC.transition!==null?(Ls===0&&(Ls=my()),Ls):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Sy(e.type)),e):1}function an(e,t,n,r){if(50<Wo)throw Wo=0,Vf=null,Error(V(185));Ta(e,n,r),(!(ae&2)||e!==Be)&&(e===Be&&(!(ae&2)&&(fu|=n),Ae===4&&or(e,Ye)),wt(e,r),n===1&&ae===0&&!(t.mode&1)&&(Ni=Te()+500,lu&&kr()))}function wt(e,t){var n=e.callbackNode;UE(e,t);var r=al(e,e===Be?Ye:0);if(r===0)n!==null&&rg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&rg(n),t===1)e.tag===0?HC(qg.bind(null,e)):Vy(qg.bind(null,e)),NC(function(){!(ae&6)&&kr()}),n=null;else{switch(gy(r)){case 1:n=Gp;break;case 4:n=py;break;case 16:n=ol;break;case 536870912:n=hy;break;default:n=ol}n=zx(n,$x.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $x(e,t){if(Ds=-1,Ls=0,ae&6)throw Error(V(327));var n=e.callbackNode;if(Mi()&&e.callbackNode!==n)return null;var r=al(e,e===Be?Ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=El(e,r);else{t=r;var i=ae;ae|=2;var o=Lx();(Be!==e||Ye!==t)&&(Mn=null,Ni=Te()+500,zr(e,t));do try{ck();break}catch(l){Dx(e,l)}while(1);oh(),wl.current=o,ae=i,je!==null?t=0:(Be=null,Ye=0,t=Ae)}if(t!==0){if(t===2&&(i=hf(e),i!==0&&(r=i,t=Bf(e,i))),t===1)throw n=pa,zr(e,0),or(e,r),wt(e,Te()),n;if(t===6)or(e,r);else{if(i=e.current.alternate,!(r&30)&&!lk(i)&&(t=El(e,r),t===2&&(o=hf(e),o!==0&&(r=o,t=Bf(e,o))),t===1))throw n=pa,zr(e,0),or(e,r),wt(e,Te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Ir(e,vt,Mn);break;case 3:if(or(e,r),(r&130023424)===r&&(t=bh+500-Te(),10<t)){if(al(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){lt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Sf(Ir.bind(null,e,vt,Mn),t);break}Ir(e,vt,Mn);break;case 4:if(or(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-on(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sk(r/1960))-r,10<r){e.timeoutHandle=Sf(Ir.bind(null,e,vt,Mn),r);break}Ir(e,vt,Mn);break;case 5:Ir(e,vt,Mn);break;default:throw Error(V(329))}}}return wt(e,Te()),e.callbackNode===n?$x.bind(null,e):null}function Bf(e,t){var n=Uo;return e.current.memoizedState.isDehydrated&&(zr(e,t).flags|=256),e=El(e,t),e!==2&&(t=vt,vt=n,t!==null&&Hf(t)),e}function Hf(e){vt===null?vt=e:vt.push.apply(vt,e)}function lk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!un(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function or(e,t){for(t&=~xh,t&=~fu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-on(t),r=1<<n;e[n]=-1,t&=~r}}function qg(e){if(ae&6)throw Error(V(327));Mi();var t=al(e,0);if(!(t&1))return wt(e,Te()),null;var n=El(e,t);if(e.tag!==0&&n===2){var r=hf(e);r!==0&&(t=r,n=Bf(e,r))}if(n===1)throw n=pa,zr(e,0),or(e,t),wt(e,Te()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ir(e,vt,Mn),wt(e,Te()),null}function wh(e,t){var n=ae;ae|=1;try{return e(t)}finally{ae=n,ae===0&&(Ni=Te()+500,lu&&kr())}}function Yr(e){lr!==null&&lr.tag===0&&!(ae&6)&&Mi();var t=ae;ae|=1;var n=Ht.transition,r=fe;try{if(Ht.transition=null,fe=1,e)return e()}finally{fe=r,Ht.transition=n,ae=t,!(ae&6)&&kr()}}function Sh(){Tt=Ei.current,ve(Ei)}function zr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,FC(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(nh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:Ai(),ve(xt),ve(rt),dh();break;case 5:ch(r);break;case 4:Ai();break;case 13:ve(Se);break;case 19:ve(Se);break;case 10:ah(r.type._context);break;case 22:case 23:Sh()}n=n.return}if(Be=e,je=e=xr(e.current,null),Ye=Tt=t,Ae=0,pa=null,xh=fu=Gr=0,vt=Uo=null,Ar!==null){for(t=0;t<Ar.length;t++)if(n=Ar[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Ar=null}return e}function Dx(e,t){do{var n=je;try{if(oh(),Is.current=bl,xl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xl=!1}if(Wr=0,Ve=Le=_e=null,Bo=!1,ca=0,yh.current=null,n===null||n.return===null){Ae=1,pa=t,je=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Ye,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Rg(a);if(f!==null){f.flags&=-257,Ag(f,a,l,o,t),f.mode&1&&Lg(o,u,t),t=f,s=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(s),t.updateQueue=y}else g.add(s);break e}else{if(!(t&1)){Lg(o,u,t),_h();break e}s=Error(V(426))}}else if(be&&l.mode&1){var S=Rg(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Ag(S,a,l,o,t),rh(Fi(s,l));break e}}o=s=Fi(s,l),Ae!==4&&(Ae=2),Uo===null?Uo=[o]:Uo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=vx(o,s,t);Og(o,p);break e;case 1:l=s;var m=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(vr===null||!vr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=yx(o,l,t);Og(o,w);break e}}o=o.return}while(o!==null)}Ax(n)}catch(E){t=E,je===n&&n!==null&&(je=n=n.return);continue}break}while(1)}function Lx(){var e=wl.current;return wl.current=bl,e===null?bl:e}function _h(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Be===null||!(Gr&268435455)&&!(fu&268435455)||or(Be,Ye)}function El(e,t){var n=ae;ae|=2;var r=Lx();(Be!==e||Ye!==t)&&(Mn=null,zr(e,t));do try{uk();break}catch(i){Dx(e,i)}while(1);if(oh(),ae=n,wl.current=r,je!==null)throw Error(V(261));return Be=null,Ye=0,Ae}function uk(){for(;je!==null;)Rx(je)}function ck(){for(;je!==null&&!LE();)Rx(je)}function Rx(e){var t=Nx(e.alternate,e,Tt);e.memoizedProps=e.pendingProps,t===null?Ax(e):je=t,yh.current=null}function Ax(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=rk(n,t),n!==null){n.flags&=32767,je=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,je=null;return}}else if(n=nk(n,t,Tt),n!==null){je=n;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);Ae===0&&(Ae=5)}function Ir(e,t,n){var r=fe,i=Ht.transition;try{Ht.transition=null,fe=1,dk(e,t,n,r)}finally{Ht.transition=i,fe=r}return null}function dk(e,t,n,r){do Mi();while(lr!==null);if(ae&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(WE(e,o),e===Be&&(je=Be=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||os||(os=!0,zx(ol,function(){return Mi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ht.transition,Ht.transition=null;var a=fe;fe=1;var l=ae;ae|=4,yh.current=null,ok(e,n),Ix(n,e),IC(bf),sl=!!xf,bf=xf=null,e.current=n,ak(n),RE(),ae=l,fe=a,Ht.transition=o}else e.current=n;if(os&&(os=!1,lr=e,_l=i),o=e.pendingLanes,o===0&&(vr=null),NE(n.stateNode),wt(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sl)throw Sl=!1,e=zf,zf=null,e;return _l&1&&e.tag!==0&&Mi(),o=e.pendingLanes,o&1?e===Vf?Wo++:(Wo=0,Vf=e):Wo=0,kr(),null}function Mi(){if(lr!==null){var e=gy(_l),t=Ht.transition,n=fe;try{if(Ht.transition=null,fe=16>e?16:e,lr===null)var r=!1;else{if(e=lr,lr=null,_l=0,ae&6)throw Error(V(331));var i=ae;for(ae|=4,H=e.current;H!==null;){var o=H,a=o.child;if(H.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(H=u;H!==null;){var c=H;switch(c.tag){case 0:case 11:case 15:Ho(8,c,o)}var d=c.child;if(d!==null)d.return=c,H=d;else for(;H!==null;){c=H;var h=c.sibling,f=c.return;if(Ox(c),c===u){H=null;break}if(h!==null){h.return=f,H=h;break}H=f}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}H=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,H=a;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ho(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,H=p;break e}H=o.return}}var m=e.current;for(H=m;H!==null;){a=H;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,H=x;else e:for(a=m;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:du(9,l)}}catch(E){Ce(l,l.return,E)}if(l===a){H=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,H=w;break e}H=l.return}}if(ae=i,kr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(ru,e)}catch{}r=!0}return r}finally{fe=n,Ht.transition=t}}return!1}function Kg(e,t,n){t=Fi(n,t),t=vx(e,t,1),e=gr(e,t,1),t=lt(),e!==null&&(Ta(e,1,t),wt(e,t))}function Ce(e,t,n){if(e.tag===3)Kg(e,e,n);else for(;t!==null;){if(t.tag===3){Kg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){e=Fi(n,e),e=yx(t,e,1),t=gr(t,e,1),e=lt(),t!==null&&(Ta(t,1,e),wt(t,e));break}}t=t.return}}function fk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(Ye&n)===n&&(Ae===4||Ae===3&&(Ye&130023424)===Ye&&500>Te()-bh?zr(e,0):xh|=n),wt(e,t)}function Fx(e,t){t===0&&(e.mode&1?(t=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):t=1);var n=lt();e=Un(e,t),e!==null&&(Ta(e,t,n),wt(e,n))}function pk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fx(e,n)}function hk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Fx(e,n)}var Nx;Nx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)yt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return yt=!1,tk(e,t,n);yt=!!(e.flags&131072)}else yt=!1,be&&t.flags&1048576&&By(t,hl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$s(e,t),e=t.pendingProps;var i=Di(t,rt.current);Pi(t,n),i=ph(null,t,r,e,i,n);var o=hh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(r)?(o=!0,fl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lh(t),i.updater=uu,t.stateNode=i,i._reactInternals=t,Pf(t,r,e,n),t=jf(null,t,r,!0,o,n)):(t.tag=0,be&&o&&th(t),at(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($s(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=gk(r),e=Jt(r,e),i){case 0:t=If(null,t,r,e,n);break e;case 1:t=zg(null,t,r,e,n);break e;case 11:t=Fg(null,t,r,e,n);break e;case 14:t=Ng(null,t,r,Jt(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),If(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),zg(e,t,r,i,n);case 3:e:{if(Sx(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Gy(e,t),vl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Fi(Error(V(423)),t),t=Vg(e,t,r,n,i);break e}else if(r!==i){i=Fi(Error(V(424)),t),t=Vg(e,t,r,n,i);break e}else for(Pt=mr(t.stateNode.containerInfo.firstChild),It=t,be=!0,nn=null,n=Ky(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Li(),r===i){t=Wn(e,t,n);break e}at(e,t,r,n)}t=t.child}return t;case 5:return Zy(t),e===null&&kf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,wf(r,i)?a=null:o!==null&&wf(r,o)&&(t.flags|=32),wx(e,t),at(e,t,a,n),t.child;case 6:return e===null&&kf(t),null;case 13:return _x(e,t,n);case 4:return uh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ri(t,null,r,n):at(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Fg(e,t,r,i,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,he(ml,r._currentValue),r._currentValue=a,o!==null)if(un(o.value,a)){if(o.children===i.children&&!xt.current){t=Wn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Fn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Tf(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Tf(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}at(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pi(t,n),i=Ut(i),r=r(i),t.flags|=1,at(e,t,r,n),t.child;case 14:return r=t.type,i=Jt(r,t.pendingProps),i=Jt(r.type,i),Ng(e,t,r,i,n);case 15:return xx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),$s(e,t),t.tag=1,bt(r)?(e=!0,fl(t)):e=!1,Pi(t,n),Xy(t,r,i),Pf(t,r,i,n),jf(null,t,r,!0,e,n);case 19:return Ex(e,t,n);case 22:return bx(e,t,n)}throw Error(V(156,t.tag))};function zx(e,t){return fy(e,t)}function mk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(e,t,n,r){return new mk(e,t,n,r)}function Eh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gk(e){if(typeof e=="function")return Eh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hp)return 11;if(e===Up)return 14}return 2}function xr(e,t){var n=e.alternate;return n===null?(n=Bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Eh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case hi:return Vr(n.children,i,o,t);case Bp:a=8,i|=8;break;case Qd:return e=Bt(12,n,t,i|2),e.elementType=Qd,e.lanes=o,e;case Jd:return e=Bt(13,n,t,i),e.elementType=Jd,e.lanes=o,e;case ef:return e=Bt(19,n,t,i),e.elementType=ef,e.lanes=o,e;case q1:return pu(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y1:a=10;break e;case X1:a=9;break e;case Hp:a=11;break e;case Up:a=14;break e;case nr:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Bt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Vr(e,t,n,r){return e=Bt(7,e,r,t),e.lanes=n,e}function pu(e,t,n,r){return e=Bt(22,e,r,t),e.elementType=q1,e.lanes=n,e.stateNode={isHidden:!1},e}function Gc(e,t,n){return e=Bt(6,e,null,t),e.lanes=n,e}function Yc(e,t,n){return t=Bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ch(e,t,n,r,i,o,a,l,s){return e=new vk(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Bt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lh(o),e}function yk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vx(e){if(!e)return Sr;e=e._reactInternals;e:{if(ei(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(bt(n))return zy(e,n,t)}return t}function Bx(e,t,n,r,i,o,a,l,s){return e=Ch(n,r,!0,e,i,o,a,l,s),e.context=Vx(null),n=e.current,r=lt(),i=yr(n),o=Fn(r,i),o.callback=t??null,gr(n,o,i),e.current.lanes=i,Ta(e,i,r),wt(e,r),e}function hu(e,t,n,r){var i=t.current,o=lt(),a=yr(i);return n=Vx(n),t.context===null?t.context=n:t.pendingContext=n,t=Fn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gr(i,t,a),e!==null&&(an(e,i,a,o),Ms(e,i,a)),a}function Cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kh(e,t){Zg(e,t),(e=e.alternate)&&Zg(e,t)}function xk(){return null}var Hx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Th(e){this._internalRoot=e}mu.prototype.render=Th.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));hu(e,t,null,null)};mu.prototype.unmount=Th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yr(function(){hu(null,e,null,null)}),t[Hn]=null}};function mu(e){this._internalRoot=e}mu.prototype.unstable_scheduleHydration=function(e){if(e){var t=xy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ir.length&&t!==0&&t<ir[n].priority;n++);ir.splice(n,0,e),n===0&&wy(e)}};function Oh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qg(){}function bk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Cl(a);o.call(u)}}var a=Bx(t,r,e,0,null,!1,!1,"",Qg);return e._reactRootContainer=a,e[Hn]=a.current,oa(e.nodeType===8?e.parentNode:e),Yr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Cl(s);l.call(u)}}var s=Ch(e,0,!1,null,null,!1,!1,"",Qg);return e._reactRootContainer=s,e[Hn]=s.current,oa(e.nodeType===8?e.parentNode:e),Yr(function(){hu(t,s,n,r)}),s}function vu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Cl(a);l.call(s)}}hu(t,a,e,i)}else a=bk(n,t,e,i,r);return Cl(a)}vy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mo(t.pendingLanes);n!==0&&(Yp(t,n|1),wt(t,Te()),!(ae&6)&&(Ni=Te()+500,kr()))}break;case 13:Yr(function(){var r=Un(e,1);if(r!==null){var i=lt();an(r,e,1,i)}}),kh(e,1)}};Xp=function(e){if(e.tag===13){var t=Un(e,134217728);if(t!==null){var n=lt();an(t,e,134217728,n)}kh(e,134217728)}};yy=function(e){if(e.tag===13){var t=yr(e),n=Un(e,t);if(n!==null){var r=lt();an(n,e,t,r)}kh(e,t)}};xy=function(){return fe};by=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};df=function(e,t,n){switch(t){case"input":if(rf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=su(r);if(!i)throw Error(V(90));Z1(r),rf(r,i)}}}break;case"textarea":J1(e,n);break;case"select":t=n.value,t!=null&&Ci(e,!!n.multiple,t,!1)}};ay=wh;sy=Yr;var wk={usingClientEntryPoint:!1,Events:[Pa,yi,su,iy,oy,wh]},bo={findFiberByHostInstance:Rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Sk={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cy(e),e===null?null:e.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||xk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var as=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!as.isDisabled&&as.supportsFiber)try{ru=as.inject(Sk),wn=as}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wk;Lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oh(t))throw Error(V(200));return yk(e,t,null,n)};Lt.createRoot=function(e,t){if(!Oh(e))throw Error(V(299));var n=!1,r="",i=Hx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ch(e,1,!1,null,null,n,!1,r,i),e[Hn]=t.current,oa(e.nodeType===8?e.parentNode:e),new Th(t)};Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=cy(t),e=e===null?null:e.stateNode,e};Lt.flushSync=function(e){return Yr(e)};Lt.hydrate=function(e,t,n){if(!gu(t))throw Error(V(200));return vu(null,e,t,!0,n)};Lt.hydrateRoot=function(e,t,n){if(!Oh(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Hx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Bx(t,null,e,1,n??null,i,!1,o,a),e[Hn]=t.current,oa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new mu(t)};Lt.render=function(e,t,n){if(!gu(t))throw Error(V(200));return vu(null,e,t,!1,n)};Lt.unmountComponentAtNode=function(e){if(!gu(e))throw Error(V(40));return e._reactRootContainer?(Yr(function(){vu(null,null,e,!1,function(){e._reactRootContainer=null,e[Hn]=null})}),!0):!1};Lt.unstable_batchedUpdates=wh;Lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gu(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return vu(e,t,n,!1,r)};Lt.version="18.2.0-next-9e3b772b8-20220608";function Ux(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ux)}catch(e){console.error(e)}}Ux(),B1.exports=Lt;var yu=B1.exports,Jg=yu;Kd.createRoot=Jg.createRoot,Kd.hydrateRoot=Jg.hydrateRoot;var nt=function(){return nt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},nt.apply(this,arguments)};function zi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function _k(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ek=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ck=_k(function(e){return Ek.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ge="-ms-",Go="-moz-",le="-webkit-",Wx="comm",xu="rule",Ph="decl",kk="@import",Tk="@namespace",Gx="@keyframes",Ok="@layer",Yx=Math.abs,Mh=String.fromCharCode,Uf=Object.assign;function Pk(e,t){return Re(e,0)^45?(((t<<2^Re(e,0))<<2^Re(e,1))<<2^Re(e,2))<<2^Re(e,3):0}function Xx(e){return e.trim()}function In(e,t){return(e=t.exec(e))?e[0]:e}function ee(e,t,n){return e.replace(t,n)}function As(e,t,n){return e.indexOf(t,n)}function Re(e,t){return e.charCodeAt(t)|0}function Xr(e,t,n){return e.slice(t,n)}function tn(e){return e.length}function qx(e){return e.length}function jo(e,t){return t.push(e),e}function Mk(e,t){return e.map(t).join("")}function e0(e,t){return e.filter(function(n){return!In(n,t)})}var bu=1,Vi=1,Kx=0,Gt=0,Me=0,to="";function wu(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:bu,column:Vi,length:a,return:"",siblings:l}}function tr(e,t){return Uf(wu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ii(e){for(;e.root;)e=tr(e.root,{children:[e]});jo(e,e.siblings)}function Ik(){return Me}function jk(){return Me=Gt>0?Re(to,--Gt):0,Vi--,Me===10&&(Vi=1,bu--),Me}function sn(){return Me=Gt<Kx?Re(to,Gt++):0,Vi++,Me===10&&(Vi=1,bu++),Me}function ur(){return Re(to,Gt)}function Fs(){return Gt}function Su(e,t){return Xr(to,e,t)}function ha(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $k(e){return bu=Vi=1,Kx=tn(to=e),Gt=0,[]}function Dk(e){return to="",e}function Xc(e){return Xx(Su(Gt-1,Wf(e===91?e+2:e===40?e+1:e)))}function Lk(e){for(;(Me=ur())&&Me<33;)sn();return ha(e)>2||ha(Me)>3?"":" "}function Rk(e,t){for(;--t&&sn()&&!(Me<48||Me>102||Me>57&&Me<65||Me>70&&Me<97););return Su(e,Fs()+(t<6&&ur()==32&&sn()==32))}function Wf(e){for(;sn();)switch(Me){case e:return Gt;case 34:case 39:e!==34&&e!==39&&Wf(Me);break;case 40:e===41&&Wf(e);break;case 92:sn();break}return Gt}function Ak(e,t){for(;sn()&&e+Me!==47+10;)if(e+Me===42+42&&ur()===47)break;return"/*"+Su(t,Gt-1)+"*"+Mh(e===47?e:sn())}function Fk(e){for(;!ha(ur());)sn();return Su(e,Gt)}function Nk(e){return Dk(Ns("",null,null,null,[""],e=$k(e),0,[0],e))}function Ns(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,h=0,f=0,g=0,y=1,S=1,p=1,m=0,x="",w=i,E=o,k=r,_=x;S;)switch(g=m,m=sn()){case 40:if(g!=108&&Re(_,d-1)==58){As(_+=ee(Xc(m),"&","&\f"),"&\f",Yx(u?l[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:_+=Xc(m);break;case 9:case 10:case 13:case 32:_+=Lk(g);break;case 92:_+=Rk(Fs()-1,7);continue;case 47:switch(ur()){case 42:case 47:jo(zk(Ak(sn(),Fs()),t,n,s),s),(ha(g||1)==5||ha(ur()||1)==5)&&tn(_)&&Xr(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*y:l[u++]=tn(_)*p;case 125*y:case 59:case 0:switch(m){case 0:case 125:S=0;case 59+c:p==-1&&(_=ee(_,/\f/g,"")),f>0&&(tn(_)-d||y===0&&g===47)&&jo(f>32?n0(_+";",r,n,d-1,s):n0(ee(_," ","")+";",r,n,d-2,s),s);break;case 59:_+=";";default:if(jo(k=t0(_,t,n,u,c,i,l,x,w=[],E=[],d,o),o),m===123)if(c===0)Ns(_,t,k,k,w,o,d,l,E);else{switch(h){case 99:if(Re(_,3)===110)break;case 108:if(Re(_,2)===97)break;default:c=0;case 100:case 109:case 115:}c?Ns(e,k,k,r&&jo(t0(e,k,k,0,0,i,l,x,i,w=[],d,E),E),i,E,d,l,r?w:E):Ns(_,k,k,k,[""],E,0,l,E)}}u=c=f=0,y=p=1,x=_="",d=a;break;case 58:d=1+tn(_),f=g;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&jk()==125)continue}switch(_+=Mh(m),m*y){case 38:p=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(tn(_)-1)*p,p=1;break;case 64:ur()===45&&(_+=Xc(sn())),h=ur(),c=d=tn(x=_+=Fk(Fs())),m++;break;case 45:g===45&&tn(_)==2&&(y=0)}}return o}function t0(e,t,n,r,i,o,a,l,s,u,c,d){for(var h=i-1,f=i===0?o:[""],g=qx(f),y=0,S=0,p=0;y<r;++y)for(var m=0,x=Xr(e,h+1,h=Yx(S=a[y])),w=e;m<g;++m)(w=Xx(S>0?f[m]+" "+x:ee(x,/&\f/g,f[m])))&&(s[p++]=w);return wu(e,t,n,i===0?xu:l,s,u,c,d)}function zk(e,t,n,r){return wu(e,t,n,Wx,Mh(Ik()),Xr(e,2,-2),0,r)}function n0(e,t,n,r,i){return wu(e,t,n,Ph,Xr(e,0,r),Xr(e,r+1,-1),r,i)}function Zx(e,t,n){switch(Pk(e,t)){case 5103:return le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return le+e+e;case 4855:return le+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Go+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return le+e+Go+e+ge+e+e;case 5936:switch(Re(e,t+11)){case 114:return le+e+ge+ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return le+e+ge+ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return le+e+ge+ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return le+e+ge+e+e;case 6165:return le+e+ge+"flex-"+e+e;case 5187:return le+e+ee(e,/(\w+).+(:[^]+)/,le+"box-$1$2"+ge+"flex-$1$2")+e;case 5443:return le+e+ge+"flex-item-"+ee(e,/flex-|-self/g,"")+(In(e,/flex-|baseline/)?"":ge+"grid-row-"+ee(e,/flex-|-self/g,""))+e;case 4675:return le+e+ge+"flex-line-pack"+ee(e,/align-content|flex-|-self/g,"")+e;case 5548:return le+e+ge+ee(e,"shrink","negative")+e;case 5292:return le+e+ge+ee(e,"basis","preferred-size")+e;case 6060:return le+"box-"+ee(e,"-grow","")+le+e+ge+ee(e,"grow","positive")+e;case 4554:return le+ee(e,/([^-])(transform)/g,"$1"+le+"$2")+e;case 6187:return ee(ee(ee(e,/(zoom-|grab)/,le+"$1"),/(image-set)/,le+"$1"),e,"")+e;case 5495:case 3959:return ee(e,/(image-set\([^]*)/,le+"$1$`$1");case 4968:return ee(ee(e,/(.+:)(flex-)?(.*)/,le+"box-pack:$3"+ge+"flex-pack:$3"),/space-between/,"justify")+le+e+e;case 4200:if(!In(e,/flex-|baseline/))return ge+"grid-column-align"+Xr(e,t)+e;break;case 2592:case 3360:return ge+ee(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,In(r.props,/grid-\w+-end/)})?~As(e+(n=n[t].value),"span",0)?e:ge+ee(e,"-start","")+e+ge+"grid-row-span:"+(~As(n,"span",0)?In(n,/\d+/):+In(n,/\d+/)-+In(e,/\d+/))+";":ge+ee(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return In(r.props,/grid-\w+-start/)})?e:ge+ee(ee(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ee(e,/(.+)-inline(.+)/,le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tn(e)-1-t>6)switch(Re(e,t+1)){case 109:if(Re(e,t+4)!==45)break;case 102:return ee(e,/(.+:)(.+)-([^]+)/,"$1"+le+"$2-$3$1"+Go+(Re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~As(e,"stretch",0)?Zx(ee(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ee(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return ge+i+":"+o+u+(a?ge+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(Re(e,t+6)===121)return ee(e,":",":"+le)+e;break;case 6444:switch(Re(e,Re(e,14)===45?18:11)){case 120:return ee(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+le+(Re(e,14)===45?"inline-":"")+"box$3$1"+le+"$2$3$1"+ge+"$2box$3")+e;case 100:return ee(e,":",":"+ge)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(e,"scroll-","scroll-snap-")+e}return e}function kl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Vk(e,t,n,r){switch(e.type){case Ok:if(e.children.length)break;case kk:case Tk:case Ph:return e.return=e.return||e.value;case Wx:return"";case Gx:return e.return=e.value+"{"+kl(e.children,r)+"}";case xu:if(!tn(e.value=e.props.join(",")))return""}return tn(n=kl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Bk(e){var t=qx(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function Hk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Uk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ph:e.return=Zx(e.value,e.length,n);return;case Gx:return kl([tr(e,{value:ee(e.value,"@","@"+le)})],r);case xu:if(e.length)return Mk(n=e.props,function(i){switch(In(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ii(tr(e,{props:[ee(i,/:(read-\w+)/,":"+Go+"$1")]})),ii(tr(e,{props:[i]})),Uf(e,{props:e0(n,r)});break;case"::placeholder":ii(tr(e,{props:[ee(i,/:(plac\w+)/,":"+le+"input-$1")]})),ii(tr(e,{props:[ee(i,/:(plac\w+)/,":"+Go+"$1")]})),ii(tr(e,{props:[ee(i,/:(plac\w+)/,ge+"input-$1")]})),ii(tr(e,{props:[i]})),Uf(e,{props:e0(n,r)});break}return""})}}var Wk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Qx="active",Jx="data-styled-version",_u="6.3.11",Ih=`/*!sc*/
`,Yo=typeof window<"u"&&typeof document<"u",Gk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Yk={};function Ia(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var zs=new Map,Tl=new Map,Vs=1,$o=function(e){if(zs.has(e))return zs.get(e);for(;Tl.has(Vs);)Vs++;var t=Vs++;return zs.set(e,t),Tl.set(t,e),t},Xk=function(e,t){Vs=t+1,zs.set(e,t),Tl.set(t,e)},jh=Object.freeze([]),Hi=Object.freeze({});function eb(e,t,n){return n===void 0&&(n=Hi),e.theme!==n.theme&&e.theme||t||n.theme}var tb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),qk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kk=/(^-|-$)/g;function r0(e){return e.replace(qk,"-").replace(Kk,"")}var Zk=/(a)(d)/gi,i0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Gf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=i0(t%52)+n;return(i0(t%52)+n).replace(Zk,"$1-$2")}var qc,jr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},nb=function(e){return jr(5381,e)};function $h(e){return Gf(nb(e)>>>0)}function Qk(e){return e.displayName||e.name||"Component"}function Kc(e){return typeof e=="string"&&!0}var rb=typeof Symbol=="function"&&Symbol.for,ib=rb?Symbol.for("react.memo"):60115,Jk=rb?Symbol.for("react.forward_ref"):60112,eT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},tT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ob={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nT=((qc={})[Jk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qc[ib]=ob,qc);function o0(e){return("type"in(t=e)&&t.type.$$typeof)===ib?ob:"$$typeof"in e?nT[e.$$typeof]:eT;var t}var rT=Object.defineProperty,iT=Object.getOwnPropertyNames,a0=Object.getOwnPropertySymbols,oT=Object.getOwnPropertyDescriptor,aT=Object.getPrototypeOf,s0=Object.prototype;function ab(e,t,n){if(typeof t!="string"){if(s0){var r=aT(t);r&&r!==s0&&ab(e,r,n)}var i=iT(t);a0&&(i=i.concat(a0(t)));for(var o=o0(e),a=o0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in tT||n&&n[s]||a&&s in a||o&&s in o)){var u=oT(t,s);try{rT(e,s,u)}catch{}}}}return e}function Ui(e){return typeof e=="function"}function Dh(e){return typeof e=="object"&&"styledComponentId"in e}function Nr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ol(e,t){return e.join(t||"")}function ma(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Yf(e,t,n){if(n===void 0&&(n=!1),!n&&!ma(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Yf(e[r],t[r]);else if(ma(t))for(var r in t)e[r]=Yf(e[r],t[r]);return e}function Lh(e,t){Object.defineProperty(e,"toString",{value:t})}var sT=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ia(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+Ih;return n},e}(),lT="style[".concat(Bi,"][").concat(Jx,'="').concat(_u,'"]'),uT=new RegExp("^".concat(Bi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),l0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Xf=function(e){if(!e)return document;if(l0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(l0(t))return t}return document},cT=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},dT=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ih),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(uT);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(Xk(c,u),cT(e,c,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},Zc=function(e){for(var t=Xf(e.options.target).querySelectorAll(lT),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Bi)!==Qx&&(dT(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function fT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sb=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Bi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Bi,Qx),r.setAttribute(Jx,_u);var a=fT();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},pT=function(){function e(t){this.element=sb(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Ia(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),hT=function(){function e(t){this.element=sb(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),mT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),u0=Yo,gT={isServer:!Yo,useCSSOMInjection:!Gk},Pl=function(){function e(t,n,r){t===void 0&&(t=Hi),n===void 0&&(n={});var i=this;this.options=nt(nt({},gT),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Yo&&u0&&(u0=!1,Zc(this)),Lh(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(d){var h=function(p){return Tl.get(p)}(d);if(h===void 0)return"continue";var f=o.names.get(h);if(f===void 0||!f.size)return"continue";var g=a.getGroup(d);if(g.length===0)return"continue";var y=Bi+".g"+d+'[id="'+h+'"]',S="";f.forEach(function(p){p.length>0&&(S+=p+",")}),s+=g+y+'{content:"'+S+'"}'+Ih},c=0;c<l;c++)u(c);return s}(i)})}return e.registerId=function(t){return $o(t)},e.prototype.rehydrate=function(){!this.server&&Yo&&Zc(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(nt(nt({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Yo&&t.target!==this.options.target&&Xf(this.options.target)!==Xf(t.target)&&Zc(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new mT(i):r?new pT(i):new hT(i)}(this.options),new sT(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){$o(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules($o(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup($o(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),vT=/&/g,jn=47,$r=42;function c0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==jn||e.charCodeAt(o+1)!==$r)if(i)a===$r&&e.charCodeAt(o+1)===jn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function lb(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=lb(n.children,t)),n})}function yT(e){var t,n,r,i=e===void 0?Hi:e,o=i.options,a=o===void 0?Hi:o,l=i.plugins,s=l===void 0?jh:l,u=function(g,y,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):g},c=s.slice();c.push(function(g){g.type===xu&&g.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),g.props[0]=g.props[0].replace(vT,n).replace(r,u))}),a.prefix&&c.push(Uk),c.push(Vk);var d=[],h=Bk(c.concat(Hk(function(g){return d.push(g)}))),f=function(g,y,S,p){y===void 0&&(y=""),S===void 0&&(S=""),p===void 0&&(p="&"),t=p,n=y,r=void 0;var m=function(w){if(!c0(w))return w;for(var E=w.length,k="",_=0,C=0,M=0,I=!1,$=0;$<E;$++){var P=w.charCodeAt($);if(M!==0||I||P!==jn||w.charCodeAt($+1)!==$r)if(I)P===$r&&w.charCodeAt($+1)===jn&&(I=!1,$++);else if(P!==34&&P!==39||$!==0&&w.charCodeAt($-1)===92){if(M===0)if(P===123)C++;else if(P===125){if(--C<0){for(var j=$+1;j<E;){var R=w.charCodeAt(j);if(R===59||R===10)break;j++}j<E&&w.charCodeAt(j)===59&&j++,C=0,$=j-1,_=j;continue}C===0&&(k+=w.substring(_,$+1),_=$+1)}else P===59&&C===0&&(k+=w.substring(_,$+1),_=$+1)}else M===0?M=P:M===P&&(M=0);else I=!0,$++}if(_<E){var L=w.substring(_);c0(L)||(k+=L)}return k}(function(w){if(w.indexOf("//")===-1)return w;for(var E=w.length,k=[],_=0,C=0,M=0,I=0;C<E;){var $=w.charCodeAt(C);if($!==34&&$!==39||C!==0&&w.charCodeAt(C-1)===92)if(M===0)if($===jn&&C+1<E&&w.charCodeAt(C+1)===$r){for(C+=2;C+1<E&&(w.charCodeAt(C)!==$r||w.charCodeAt(C+1)!==jn);)C++;C+=2}else if($===40&&C>=3&&(32|w.charCodeAt(C-1))==108&&(32|w.charCodeAt(C-2))==114&&(32|w.charCodeAt(C-3))==117)I=1,C++;else if(I>0)$===41?I--:$===40&&I++,C++;else if($===$r&&C+1<E&&w.charCodeAt(C+1)===jn)C>_&&k.push(w.substring(_,C)),_=C+=2;else if($===jn&&C+1<E&&w.charCodeAt(C+1)===jn){for(C>_&&k.push(w.substring(_,C));C<E&&w.charCodeAt(C)!==10;)C++;_=C}else C++;else C++;else M===0?M=$:M===$&&(M=0),C++}return _===0?w:(_<E&&k.push(w.substring(_)),k.join(""))}(g)),x=Nk(S||y?"".concat(S," ").concat(y," { ").concat(m," }"):m);return a.namespace&&(x=lb(x,a.namespace)),d=[],kl(x,h),d};return f.hash=s.length?s.reduce(function(g,y){return y.name||Ia(15),jr(g,y.name)},5381).toString():"",f}var xT=new Pl,qf=yT(),ub=W.createContext({shouldForwardProp:void 0,styleSheet:xT,stylis:qf});ub.Consumer;W.createContext(void 0);function Kf(){return W.useContext(ub)}var cb=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=qf);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Lh(this,function(){throw Ia(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=qf),this.name+t.hash},e}();function bT(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Wk||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var wT=function(e){return e>="A"&&e<="Z"};function d0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;wT(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var db=function(e){return e==null||e===!1||e===""},fb=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!db(r)&&(Array.isArray(r)&&r.isCss||Ui(r)?t.push("".concat(d0(n),":"),r,";"):ma(r)?t.push.apply(t,zi(zi(["".concat(n," {")],fb(r),!1),["}"],!1)):t.push("".concat(d0(n),": ").concat(bT(n,r),";")))}return t};function br(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(db(e))return i;if(Dh(e))return i.push(".".concat(e.styledComponentId)),i;if(Ui(e)){if(!Ui(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return br(o,t,n,r,i)}var a;if(e instanceof cb)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(ma(e)){for(var l=fb(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)br(e[s],t,n,r,i);return i}function pb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ui(n)&&!Dh(n))return!1}return!0}var ST=nb(_u),_T=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&pb(t),this.componentId=n,this.baseHash=jr(ST,n),this.baseStyle=r,Pl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Nr(i,this.staticRulesId);else{var o=Ol(br(this.rules,t,n,r)),a=Gf(jr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Nr(i,a),this.staticRulesId=a}else{for(var s=jr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var h=Ol(br(d,t,n,r));s=jr(jr(s,String(c)),h),u+=h}}if(u){var f=Gf(s>>>0);if(!n.hasNameForId(this.componentId,f)){var g=r(u,".".concat(f),void 0,this.componentId);n.insertRules(this.componentId,f,g)}i=Nr(i,f)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup($o(this.componentId)):""}},e}(),Rh=W.createContext(void 0);Rh.Consumer;var Qc={};function ET(e,t,n){var r=Dh(e),i=e,o=!Kc(e),a=t.attrs,l=a===void 0?jh:a,s=t.componentId,u=s===void 0?function(w,E){var k=typeof w!="string"?"sc":r0(w);Qc[k]=(Qc[k]||0)+1;var _="".concat(k,"-").concat($h(_u+k+Qc[k]));return E?"".concat(E,"-").concat(_):_}(t.displayName,t.parentComponentId):s,c=t.displayName,d=c===void 0?function(w){return Kc(w)?"styled.".concat(w):"Styled(".concat(Qk(w),")")}(e):c,h=t.displayName&&t.componentId?"".concat(r0(t.displayName),"-").concat(t.componentId):t.componentId||u,f=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;g=function(w,E){return y(w,E)&&S(w,E)}}else g=y}var p=new _T(n,h,r?i.componentStyle:void 0);function m(w,E){return function(k,_,C){var M=k.attrs,I=k.componentStyle,$=k.defaultProps,P=k.foldedComponentIds,j=k.styledComponentId,R=k.target,L=W.useContext(Rh),F=Kf(),A=k.shouldForwardProp||F.shouldForwardProp,O=eb(_,L,$)||Hi,D=function(K,re,we){for(var qe,Pe=nt(nt({},re),{className:void 0,theme:we}),Xt=0;Xt<K.length;Xt+=1){var Ft=Ui(qe=K[Xt])?qe(Pe):qe;for(var kt in Ft)kt==="className"?Pe.className=Nr(Pe.className,Ft[kt]):kt==="style"?Pe.style=nt(nt({},Pe.style),Ft[kt]):Pe[kt]=Ft[kt]}return"className"in re&&typeof re.className=="string"&&(Pe.className=Nr(Pe.className,re.className)),Pe}(M,_,O),N=D.as||R,B={};for(var z in D)D[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&D.theme===O||(z==="forwardedAs"?B.as=D.forwardedAs:A&&!A(z,N)||(B[z]=D[z]));var G=function(K,re){var we=Kf(),qe=K.generateAndInjectStyles(re,we.styleSheet,we.stylis);return qe}(I,D),Q=G.className,Z=Nr(P,j);return Q&&(Z+=" "+Q),D.className&&(Z+=" "+D.className),B[Kc(N)&&!tb.has(N)?"class":"className"]=Z,C&&(B.ref=C),b.createElement(N,B)}(x,w,E)}m.displayName=d;var x=W.forwardRef(m);return x.attrs=f,x.componentStyle=p,x.displayName=d,x.shouldForwardProp=g,x.foldedComponentIds=r?Nr(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=h,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(E){for(var k=[],_=1;_<arguments.length;_++)k[_-1]=arguments[_];for(var C=0,M=k;C<M.length;C++)Yf(E,M[C],!0);return E}({},i.defaultProps,w):w}}),Lh(x,function(){return".".concat(x.styledComponentId)}),o&&ab(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function f0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var p0=function(e){return Object.assign(e,{isCss:!0})};function Ah(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ui(e)||ma(e))return p0(br(f0(jh,zi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?br(r):p0(br(f0(r,t)))}function Zf(e,t,n){if(n===void 0&&(n=Hi),!t)throw Ia(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Ah.apply(void 0,zi([i],o,!1)))};return r.attrs=function(i){return Zf(e,t,nt(nt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Zf(e,t,nt(nt({},n),i))},r}var hb=function(e){return Zf(ET,e)},T=hb;tb.forEach(function(e){T[e]=hb(e)});var CT=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=pb(t),Pl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ol(br(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Pl.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function kT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ah.apply(void 0,zi([e],t,!1)),i="sc-global-".concat($h(JSON.stringify(r))),o=new CT(r,i),a=new WeakMap,l=function(u){var c=Kf(),d=W.useContext(Rh),h=a.get(c.styleSheet);return h===void 0&&(h=c.styleSheet.allocateGSInstance(i),a.set(c.styleSheet,h)),(typeof window>"u"||!c.styleSheet.server)&&s(h,u,c.styleSheet,d,c.stylis),W.useLayoutEffect(function(){return c.styleSheet.server||s(h,u,c.styleSheet,d,c.stylis),function(){var f;o.removeStyles(h,c.styleSheet),f=c.styleSheet.options.target,typeof document<"u"&&(f??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(g){return g.remove()})}},[h,u,c.styleSheet,d,c.stylis]),null};function s(u,c,d,h,f){if(o.isStatic)o.renderStyles(u,Yk,d,f);else{var g=nt(nt({},c),{theme:eb(c,h,l.defaultProps)});o.renderStyles(u,g,d,f)}}return W.memo(l)}function Fh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ol(Ah.apply(void 0,zi([e],t,!1))),i=$h(r);return new cb(i,r)}const TT=T.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,OT=T.div`
  width: 100%;
  max-width: 750px;
  padding: 10px;

  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
    padding-left: 0;
    padding-right: 0;
  }
`,PT=T.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,MT=T.div`

  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`,IT=T.div`
  display: flex;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`;T(Oe)`
  color: var(--main-brand-color);
  display: none;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;T.img`
  display: flex;
  width: 50px;
  height: 50px;

  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;T.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100px;
    height: 100px;

    justify-content: center;
    align-items: center;
  }
`;const jT=T(Oe)`
  font-size: 40px;
  font-family: Poiret One;
  /* font-family: 'MyFont'; */
  font-weight: 800;
  color: var(--white-color);
  letter-spacing:0.2em;

  &::after {
    content: '.';
    color: var(--orange-color); 
    margin-left: 2px;
  }
`;T.h1`
  color: var(--white-color);
  font-family: DM Serif Display;
  margin-left: 70px;
`;const $T=T.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,DT=T.button`
  display: flex;
  align-items: center;
  gap: 8px;

  background: transparent;
  color: var(--white-color);
  border: none;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 600;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; // показуємо тільки на мобільних
  }

  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
  }
`;T.div`
  z-index: 9999;
`;T.a`
  color: var(--black-color);
`;const LT=T.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%; /* Трохи вужче, щоб бачити фон */
  max-width: 350px;
  height: 100%;
  background: #ffffff;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 80px 30px 40px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({open:e})=>e?"translateX(0)":"translateX(100%)"};
`,RT=T.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:active {
    transform: scale(0.9);
  }
`,AT=T.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,ss=T(Oe)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: #2c2c2c;
  display: flex;
  align-items: center;
  gap: 15px; /* Відступ між іконкою і текстом */
  transition: color 0.3s;

  svg {
    color: #d35400; /* Колір як у вашої кнопки на фоні */
    font-size: 24px;
  }

  &:hover, &:active {
    color: #d35400;
  }
`,FT=T.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,NT=T.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px); /* Гарне розмиття фону */
  z-index: 999;
  display: ${({open:e})=>e?"block":"none"};
  transition: opacity 0.3s;
`,zT=T.div`
 display: flex;
  align-items: center;
  background: #ffffff2b;
   border-radius: 12px;
 
 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
 width: 100%;
        max-width: 750px;
       
  
 @media screen and (min-width: 768px) {
   max-width:  1448px;
   margin-left: auto;
   margin-right:auto;
  }



`,VT=T.input`
  
  border: none;
  outline: none;
  padding: 14px 22px;
  font-size: 16px;
  background-color: transparent;
  color: var(--white-color);
 width: 100%;
        max-width: 750px;
        padding:10px;
  

  ::placeholder {
    color: #a09589;

     
  }
  

  @media screen and (min-width: 768px) {
max-width:  1448px;
  }
`,BT=T.button`
  margin-right: 6px;
  height: 42px;
  width: 42px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;

  :hover {
    transform: scale(1.05);
  }
   
`,HT=T.svg`
  width: 24px;
  height: 24px;
  

`,cn="/Didiv/assets/symbol-defs-f1e4efb3.svg",UT=()=>{const[e,t]=b.useState("");return v.jsxs(zT,{children:[v.jsx(VT,{name:"site-search",value:e,onChange:n=>t(n.target.value),placeholder:"Пошук",autoComplete:"off"}),v.jsx(BT,{className:"search-button",children:v.jsx(HT,{children:v.jsx("use",{href:`${cn}#icon-search`})})})]})};var mb={exports:{}},gb={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=b;function WT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var GT=typeof Object.is=="function"?Object.is:WT,YT=ja.useSyncExternalStore,XT=ja.useRef,qT=ja.useEffect,KT=ja.useMemo,ZT=ja.useDebugValue;gb.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=XT(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=KT(function(){function s(f){if(!u){if(u=!0,c=f,f=r(f),i!==void 0&&a.hasValue){var g=a.value;if(i(g,f))return d=g}return d=f}if(g=d,GT(c,f))return g;var y=r(f);return i!==void 0&&i(g,y)?(c=f,g):(c=f,d=y)}var u=!1,c,d,h=n===void 0?null:n;return[function(){return s(t())},h===null?void 0:function(){return s(h())}]},[t,n,r,i]);var l=YT(e,o[0],o[1]);return qT(function(){a.hasValue=!0,a.value=l},[l]),ZT(l),l};mb.exports=gb;var QT=mb.exports;function JT(e){e()}function eO(){let e=null,t=null;return{clear(){e=null,t=null},notify(){JT(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var h0={notify(){},get:()=>[]};function tO(e,t){let n,r=h0,i=0,o=!1;function a(y){c();const S=r.subscribe(y);let p=!1;return()=>{p||(p=!0,S(),d())}}function l(){r.notify()}function s(){g.onStateChange&&g.onStateChange()}function u(){return o}function c(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=eO())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=h0)}function h(){o||(o=!0,c())}function f(){o&&(o=!1,d())}const g={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:h,tryUnsubscribe:f,getListeners:()=>r};return g}var nO=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rO=nO(),iO=()=>typeof navigator<"u"&&navigator.product==="ReactNative",oO=iO(),aO=()=>rO||oO?b.useLayoutEffect:b.useEffect,sO=aO(),Jc=Symbol.for("react-redux-context"),ed=typeof globalThis<"u"?globalThis:{};function lO(){if(!b.createContext)return{};const e=ed[Jc]??(ed[Jc]=new Map);let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var _r=lO();function uO(e){const{children:t,context:n,serverState:r,store:i}=e,o=b.useMemo(()=>{const s=tO(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=b.useMemo(()=>i.getState(),[i]);sO(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||_r;return b.createElement(l.Provider,{value:o},t)}var cO=uO;function Nh(e=_r){return function(){return b.useContext(e)}}var vb=Nh();function yb(e=_r){const t=e===_r?vb:Nh(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var dO=yb();function fO(e=_r){const t=e===_r?dO:yb(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var no=fO(),pO=(e,t)=>e===t;function hO(e=_r){const t=e===_r?vb:Nh(e),n=(r,i={})=>{const{equalityFn:o=pO}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:u}=a;b.useRef(!0);const c=b.useCallback({[r.name](h){return r(h)}}[r.name],[r]),d=QT.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,c,o);return b.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Nn=hO();const mO=T(Oe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,gO=T.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,vO=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,yO=T.div`
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  background:var(--orange-color); 
  color: white;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
font-size: 13px;
  font-weight: 600;
  font-family: var(--second-font); 
  box-shadow: 0 0 1px rgba(0,0,0,0.3);
`,xO=({onClick:e})=>{const t=Nn(n=>n.cart.items.length);return v.jsx(mO,{to:"/cart",children:v.jsxs(vO,{onClick:e,children:[v.jsx(gO,{children:v.jsx("use",{href:`${cn}#icon-cart`})}),t>0&&v.jsx(yO,{children:t})]})})},bO=T.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; 
  }
   @media (min-width: 768px) {
   order:1;
    gap: 80px;
    margin-right: auto;
    margin-left: auto;
 
  }
`,ls=T(Oe)`
 font-size:20px;
      display: flex;
    align-items: center;
    text-align: center;
        justify-content: center;
         text-decoration: none;
  color: var(--white-color);
  font-weight: 500;
  cursor: pointer;

  &:hover {
      color: #ffffff;
      text-shadow: 0 0 5px rgba(255,255,255,0.8);
  }
`,wO=()=>v.jsxs(bO,{children:[v.jsx(ls,{to:"/",children:"Головна"}),v.jsx(ls,{to:"/about",children:"Про нас"}),v.jsx(ls,{to:"/catalog",children:"Каталог"}),v.jsx(ls,{to:"/contacts",children:"Контакти"})]}),SO=T.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,_O=T(Oe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
 
  }
       
`,EO=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,CO=T.div`

  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  background:var(--orange-color); 
  color: white;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
   font-size: 13px;
  font-weight: 600;
  font-family: var(--second-font); 
  box-shadow: 0 0 1px rgba(0,0,0,0.3);
`,kO=({onClick:e})=>{const t=Nn(n=>n.favorites.items.length);return v.jsx(_O,{to:"/favorite",children:v.jsxs(EO,{onClick:e,children:[v.jsx(SO,{children:v.jsx("use",{href:`${cn}#icon-heart`})}),t>0&&v.jsx(CO,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OO=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=e=>{const t=OO(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var PO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MO=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>b.createElement("svg",{ref:s,...PO,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:xb("lucide",i),...!o&&!MO(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,c])=>b.createElement(u,c)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(IO,{ref:o,iconNode:t,className:xb(`lucide-${TO(m0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=m0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jO=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],bb=Tn("arrow-right",jO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $O=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],wb=Tn("heart",$O);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],LO=Tn("house",DO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],AO=Tn("info",RO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FO=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],NO=Tn("mail",FO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zO=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],VO=Tn("shopping-bag",zO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BO=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Eu=Tn("shopping-cart",BO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HO=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Sb=Tn("sliders-horizontal",HO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UO=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],_b=Tn("trash-2",UO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Eb=Tn("x",WO),GO=()=>{const[e,t]=b.useState(!1);return v.jsx(TT,{children:v.jsx(OT,{children:v.jsxs(PT,{children:[v.jsxs(MT,{children:[v.jsx(jT,{to:"/",children:"Дідів хлів"}),v.jsxs(IT,{children:[v.jsx(xO,{}),v.jsx(kO,{}),v.jsx(wO,{}),v.jsx(DT,{onClick:()=>t(!e),children:v.jsx($T,{children:v.jsx("use",{href:`${cn}#icon-menu`})})}),v.jsx(NT,{open:e,onClick:()=>t(!1)}),v.jsxs(LT,{open:e,children:[v.jsx(RT,{onClick:()=>t(!1),children:v.jsx(Eb,{size:28,strokeWidth:1.5})}),v.jsxs(AT,{children:[v.jsxs(ss,{onClick:()=>t(!1),to:"/",children:[v.jsx(LO,{size:22,strokeWidth:1.5})," Головна"]}),v.jsxs(ss,{onClick:()=>t(!1),to:"/about",children:[v.jsx(AO,{size:22,strokeWidth:1.5})," Про нас"]}),v.jsxs(ss,{onClick:()=>t(!1),to:"/catalog",children:[v.jsx(VO,{size:22,strokeWidth:1.5})," Каталог"]}),v.jsxs(ss,{onClick:()=>t(!1),to:"/contacts",children:[v.jsx(NO,{size:22,strokeWidth:1.5})," Контакти"]})]}),v.jsx(FT,{children:v.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),v.jsx(UT,{})]})})})},YO=T.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,XO=T.footer`
 
  color: #ffffff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  text-align: center;
   width: 100%;
  max-width: 750px;


      margin-left: auto;
    margin-right: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
     max-width: 994px;
    
    padding: 50px 30px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1448px;
    
    padding: 60px 0px;
  }
`,qO=T.div`
  display: flex;
  flex-direction: column; /* На мобільці — стовпчиком */
  gap: 40px;
  width: 100%;

  @media screen and (min-width: 480px) {
    flex-direction: row; /* На дуже маленьких екранах все ще стовпчик, на трохи більших — в рядок */
    justify-content: space-around;
  }

  @media screen and (min-width: 768px) {
    display: contents; /* Повертаємо як було для десктопа */
  }
`,td=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,nd=T.h3`
  font-size: 20px; /* Трохи більший заголовок */
  margin-bottom: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
  position: relative;

  /* Можна додати тонку лінію під заголовком для стилю */
  &::after {
    content: '';
    display: block;
    width: 30px;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
    margin: 8px auto 0;
    @media screen and (min-width: 768px) {
      margin: 8px 0 0;
    }
  }
`,mn=T(Oe)`
  color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Робимо текст не таким яскравим, як заголовок */
  text-decoration: none;
  font-size: 16px; /* Збільшено для зручного натискання пальцем */
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`,KO=T.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,g0=T.a`
  width: 44px; /* Збільшено (стандарт Apple/Google для тач-зон) */
  height: 44px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4a332a;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: scale(1.1);
    background-color: #f0f0f0;
  }

  svg {
    fill: currentColor;
  }
`,ZO=()=>v.jsx(YO,{children:v.jsxs(XO,{children:[v.jsxs(qO,{children:[v.jsxs(td,{children:[v.jsx(nd,{children:"Навігація"}),v.jsx(mn,{to:"/",children:"Головна"}),v.jsx(mn,{to:"/about",children:"Про нас"}),v.jsx(mn,{to:"/catalog",children:"Каталог"}),v.jsx(mn,{to:"/contacts",children:"Контакти"})]}),v.jsxs(td,{children:[v.jsx(nd,{children:"Інформація"}),v.jsx(mn,{to:"/delivery",children:"Оплата і доставка"}),v.jsx(mn,{children:"Повернення"}),v.jsx(mn,{children:"Гарантія"}),v.jsx(mn,{children:"Політика конфіденційності"})]})]}),v.jsxs(td,{children:[v.jsx(nd,{children:"Контакти"}),v.jsx(mn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),v.jsx(mn,{href:"mailto:email@email.com",children:"email@email.com"}),v.jsxs(KO,{children:[v.jsx(g0,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:v.jsx("svg",{width:"20px",children:v.jsx("use",{href:`${cn}#icon-instagram`})})}),v.jsx(g0,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:v.jsx("svg",{width:"20px",children:v.jsx("use",{href:`${cn}#icon-telegram`})})})]})]})]})}),QO=()=>(console.log("rer"),v.jsxs(v.Fragment,{children:[v.jsx(GO,{}),v.jsx("main",{className:"main-content",children:v.jsx(lE,{})}),v.jsx(ZO,{})]}));function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}function JO(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function eP(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var tP=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(eP(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=JO(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Je="-ms-",Ml="-moz-",ue="-webkit-",Cb="comm",zh="rule",Vh="decl",nP="@import",kb="@keyframes",rP="@layer",iP=Math.abs,Cu=String.fromCharCode,oP=Object.assign;function aP(e,t){return Ge(e,0)^45?(((t<<2^Ge(e,0))<<2^Ge(e,1))<<2^Ge(e,2))<<2^Ge(e,3):0}function Tb(e){return e.trim()}function sP(e,t){return(e=t.exec(e))?e[0]:e}function ce(e,t,n){return e.replace(t,n)}function Qf(e,t){return e.indexOf(t)}function Ge(e,t){return e.charCodeAt(t)|0}function ga(e,t,n){return e.slice(t,n)}function vn(e){return e.length}function Bh(e){return e.length}function us(e,t){return t.push(e),e}function lP(e,t){return e.map(t).join("")}var ku=1,Wi=1,Ob=0,St=0,Ie=0,ro="";function Tu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ku,column:Wi,length:a,return:""}}function wo(e,t){return oP(Tu("",null,null,"",null,null,0),e,{length:-e.length},t)}function uP(){return Ie}function cP(){return Ie=St>0?Ge(ro,--St):0,Wi--,Ie===10&&(Wi=1,ku--),Ie}function jt(){return Ie=St<Ob?Ge(ro,St++):0,Wi++,Ie===10&&(Wi=1,ku++),Ie}function _n(){return Ge(ro,St)}function Bs(){return St}function $a(e,t){return ga(ro,e,t)}function va(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pb(e){return ku=Wi=1,Ob=vn(ro=e),St=0,[]}function Mb(e){return ro="",e}function Hs(e){return Tb($a(St-1,Jf(e===91?e+2:e===40?e+1:e)))}function dP(e){for(;(Ie=_n())&&Ie<33;)jt();return va(e)>2||va(Ie)>3?"":" "}function fP(e,t){for(;--t&&jt()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return $a(e,Bs()+(t<6&&_n()==32&&jt()==32))}function Jf(e){for(;jt();)switch(Ie){case e:return St;case 34:case 39:e!==34&&e!==39&&Jf(Ie);break;case 40:e===41&&Jf(e);break;case 92:jt();break}return St}function pP(e,t){for(;jt()&&e+Ie!==47+10;)if(e+Ie===42+42&&_n()===47)break;return"/*"+$a(t,St-1)+"*"+Cu(e===47?e:jt())}function hP(e){for(;!va(_n());)jt();return $a(e,St)}function mP(e){return Mb(Us("",null,null,null,[""],e=Pb(e),0,[0],e))}function Us(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,h=0,f=0,g=0,y=1,S=1,p=1,m=0,x="",w=i,E=o,k=r,_=x;S;)switch(g=m,m=jt()){case 40:if(g!=108&&Ge(_,d-1)==58){Qf(_+=ce(Hs(m),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:_+=Hs(m);break;case 9:case 10:case 13:case 32:_+=dP(g);break;case 92:_+=fP(Bs()-1,7);continue;case 47:switch(_n()){case 42:case 47:us(gP(pP(jt(),Bs()),t,n),s);break;default:_+="/"}break;case 123*y:l[u++]=vn(_)*p;case 125*y:case 59:case 0:switch(m){case 0:case 125:S=0;case 59+c:p==-1&&(_=ce(_,/\f/g,"")),f>0&&vn(_)-d&&us(f>32?y0(_+";",r,n,d-1):y0(ce(_," ","")+";",r,n,d-2),s);break;case 59:_+=";";default:if(us(k=v0(_,t,n,u,c,i,l,x,w=[],E=[],d),o),m===123)if(c===0)Us(_,t,k,k,w,o,d,l,E);else switch(h===99&&Ge(_,3)===110?100:h){case 100:case 108:case 109:case 115:Us(e,k,k,r&&us(v0(e,k,k,0,0,i,l,x,i,w=[],d),E),i,E,d,l,r?w:E);break;default:Us(_,k,k,k,[""],E,0,l,E)}}u=c=f=0,y=p=1,x=_="",d=a;break;case 58:d=1+vn(_),f=g;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&cP()==125)continue}switch(_+=Cu(m),m*y){case 38:p=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(vn(_)-1)*p,p=1;break;case 64:_n()===45&&(_+=Hs(jt())),h=_n(),c=d=vn(x=_+=hP(Bs())),m++;break;case 45:g===45&&vn(_)==2&&(y=0)}}return o}function v0(e,t,n,r,i,o,a,l,s,u,c){for(var d=i-1,h=i===0?o:[""],f=Bh(h),g=0,y=0,S=0;g<r;++g)for(var p=0,m=ga(e,d+1,d=iP(y=a[g])),x=e;p<f;++p)(x=Tb(y>0?h[p]+" "+m:ce(m,/&\f/g,h[p])))&&(s[S++]=x);return Tu(e,t,n,i===0?zh:l,s,u,c)}function gP(e,t,n){return Tu(e,t,n,Cb,Cu(uP()),ga(e,2,-2),0)}function y0(e,t,n,r){return Tu(e,t,n,Vh,ga(e,0,r),ga(e,r+1,-1),r)}function Ii(e,t){for(var n="",r=Bh(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function vP(e,t,n,r){switch(e.type){case rP:if(e.children.length)break;case nP:case Vh:return e.return=e.return||e.value;case Cb:return"";case kb:return e.return=e.value+"{"+Ii(e.children,r)+"}";case zh:e.value=e.props.join(",")}return vn(n=Ii(e.children,r))?e.return=e.value+"{"+n+"}":""}function yP(e){var t=Bh(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function xP(e){return function(t){t.root||(t=t.return)&&e(t)}}function bP(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var wP=function(t,n,r){for(var i=0,o=0;i=o,o=_n(),i===38&&o===12&&(n[r]=1),!va(o);)jt();return $a(t,St)},SP=function(t,n){var r=-1,i=44;do switch(va(i)){case 0:i===38&&_n()===12&&(n[r]=1),t[r]+=wP(St-1,n,r);break;case 2:t[r]+=Hs(i);break;case 4:if(i===44){t[++r]=_n()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Cu(i)}while(i=jt());return t},_P=function(t,n){return Mb(SP(Pb(t),n))},x0=new WeakMap,EP=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!x0.get(r))&&!i){x0.set(t,!0);for(var o=[],a=_P(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var c=0;c<l.length;c++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[c]):l[c]+" "+a[s]}}},CP=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Ib(e,t){switch(aP(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+Ml+e+Je+e+e;case 6828:case 4268:return ue+e+Je+e+e;case 6165:return ue+e+Je+"flex-"+e+e;case 5187:return ue+e+ce(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+Je+"flex-$1$2")+e;case 5443:return ue+e+Je+"flex-item-"+ce(e,/flex-|-self/,"")+e;case 4675:return ue+e+Je+"flex-line-pack"+ce(e,/align-content|flex-|-self/,"")+e;case 5548:return ue+e+Je+ce(e,"shrink","negative")+e;case 5292:return ue+e+Je+ce(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ce(e,"-grow","")+ue+e+Je+ce(e,"grow","positive")+e;case 4554:return ue+ce(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ce(ce(ce(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ce(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ce(ce(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+Je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4095:case 3583:case 4068:case 2532:return ce(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(vn(e)-1-t>6)switch(Ge(e,t+1)){case 109:if(Ge(e,t+4)!==45)break;case 102:return ce(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+Ml+(Ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Qf(e,"stretch")?Ib(ce(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ge(e,t+1)!==115)break;case 6444:switch(Ge(e,vn(e)-3-(~Qf(e,"!important")&&10))){case 107:return ce(e,":",":"+ue)+e;case 101:return ce(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ue+(Ge(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+Je+"$2box$3")+e}break;case 5936:switch(Ge(e,t+11)){case 114:return ue+e+Je+ce(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+Je+ce(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+Je+ce(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ue+e+Je+e+e}return e}var kP=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Vh:t.return=Ib(t.value,t.length);break;case kb:return Ii([wo(t,{value:ce(t.value,"@","@"+ue)})],i);case zh:if(t.length)return lP(t.props,function(o){switch(sP(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ii([wo(t,{props:[ce(o,/:(read-\w+)/,":"+Ml+"$1")]})],i);case"::placeholder":return Ii([wo(t,{props:[ce(o,/:(plac\w+)/,":"+ue+"input-$1")]}),wo(t,{props:[ce(o,/:(plac\w+)/,":"+Ml+"$1")]}),wo(t,{props:[ce(o,/:(plac\w+)/,Je+"input-$1")]})],i)}return""})}},TP=[kP],OP=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var S=y.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||TP,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var S=y.getAttribute("data-emotion").split(" "),p=1;p<S.length;p++)o[S[p]]=!0;l.push(y)});var s,u=[EP,CP];{var c,d=[vP,xP(function(y){c.insert(y)})],h=yP(u.concat(i,d)),f=function(S){return Ii(mP(S),h)};s=function(S,p,m,x){c=m,f(S?S+"{"+p.styles+"}":p.styles),x&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new tP({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return g.sheet.hydrate(l),g},jb={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He=typeof Symbol=="function"&&Symbol.for,Hh=He?Symbol.for("react.element"):60103,Uh=He?Symbol.for("react.portal"):60106,Ou=He?Symbol.for("react.fragment"):60107,Pu=He?Symbol.for("react.strict_mode"):60108,Mu=He?Symbol.for("react.profiler"):60114,Iu=He?Symbol.for("react.provider"):60109,ju=He?Symbol.for("react.context"):60110,Wh=He?Symbol.for("react.async_mode"):60111,$u=He?Symbol.for("react.concurrent_mode"):60111,Du=He?Symbol.for("react.forward_ref"):60112,Lu=He?Symbol.for("react.suspense"):60113,PP=He?Symbol.for("react.suspense_list"):60120,Ru=He?Symbol.for("react.memo"):60115,Au=He?Symbol.for("react.lazy"):60116,MP=He?Symbol.for("react.block"):60121,IP=He?Symbol.for("react.fundamental"):60117,jP=He?Symbol.for("react.responder"):60118,$P=He?Symbol.for("react.scope"):60119;function At(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Hh:switch(e=e.type,e){case Wh:case $u:case Ou:case Mu:case Pu:case Lu:return e;default:switch(e=e&&e.$$typeof,e){case ju:case Du:case Au:case Ru:case Iu:return e;default:return t}}case Uh:return t}}}function $b(e){return At(e)===$u}pe.AsyncMode=Wh;pe.ConcurrentMode=$u;pe.ContextConsumer=ju;pe.ContextProvider=Iu;pe.Element=Hh;pe.ForwardRef=Du;pe.Fragment=Ou;pe.Lazy=Au;pe.Memo=Ru;pe.Portal=Uh;pe.Profiler=Mu;pe.StrictMode=Pu;pe.Suspense=Lu;pe.isAsyncMode=function(e){return $b(e)||At(e)===Wh};pe.isConcurrentMode=$b;pe.isContextConsumer=function(e){return At(e)===ju};pe.isContextProvider=function(e){return At(e)===Iu};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hh};pe.isForwardRef=function(e){return At(e)===Du};pe.isFragment=function(e){return At(e)===Ou};pe.isLazy=function(e){return At(e)===Au};pe.isMemo=function(e){return At(e)===Ru};pe.isPortal=function(e){return At(e)===Uh};pe.isProfiler=function(e){return At(e)===Mu};pe.isStrictMode=function(e){return At(e)===Pu};pe.isSuspense=function(e){return At(e)===Lu};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ou||e===$u||e===Mu||e===Pu||e===Lu||e===PP||typeof e=="object"&&e!==null&&(e.$$typeof===Au||e.$$typeof===Ru||e.$$typeof===Iu||e.$$typeof===ju||e.$$typeof===Du||e.$$typeof===IP||e.$$typeof===jP||e.$$typeof===$P||e.$$typeof===MP)};pe.typeOf=At;jb.exports=pe;var DP=jb.exports,Db=DP,LP={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},RP={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lb={};Lb[Db.ForwardRef]=LP;Lb[Db.Memo]=RP;var AP=!0;function Rb(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Gh=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||AP===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Ab=function(t,n,r){Gh(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function FP(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var NP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zP=/[A-Z]|^ms/g,VP=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Fb=function(t){return t.charCodeAt(1)===45},b0=function(t){return t!=null&&typeof t!="boolean"},rd=bP(function(e){return Fb(e)?e:e.replace(zP,"-$&").toLowerCase()}),w0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(VP,function(r,i,o){return yn={name:i,styles:o,next:yn},i})}return NP[t]!==1&&!Fb(t)&&typeof n=="number"&&n!==0?n+"px":n};function ya(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return yn={name:n.name,styles:n.styles,next:yn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)yn={name:r.name,styles:r.styles,next:yn},r=r.next;var i=n.styles+";";return i}return BP(e,t,n)}case"function":{if(e!==void 0){var o=yn,a=n(e);return yn=o,ya(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function BP(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ya(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":b0(a)&&(r+=rd(o)+":"+w0(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)b0(a[l])&&(r+=rd(o)+":"+w0(o,a[l])+";");else{var s=ya(e,t,a);switch(o){case"animation":case"animationName":{r+=rd(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var S0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,yn,Yh=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";yn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=ya(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=ya(r,n,t[l]),i&&(o+=a[l]);S0.lastIndex=0;for(var s="",u;(u=S0.exec(o))!==null;)s+="-"+u[1];var c=FP(o)+s;return{name:c,styles:o,next:yn}},HP=function(t){return t()},UP=Gd["useInsertionEffect"]?Gd["useInsertionEffect"]:!1,Nb=UP||HP,Xh={}.hasOwnProperty,zb=b.createContext(typeof HTMLElement<"u"?OP({key:"css"}):null);zb.Provider;var Vb=function(t){return b.forwardRef(function(n,r){var i=b.useContext(zb);return t(n,i,r)})},Bb=b.createContext({}),ep="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",WP=function(t,n){var r={};for(var i in n)Xh.call(n,i)&&(r[i]=n[i]);return r[ep]=t,r},GP=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Gh(n,r,i),Nb(function(){return Ab(n,r,i)}),null},YP=Vb(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[ep],o=[r],a="";typeof e.className=="string"?a=Rb(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=Yh(o,void 0,b.useContext(Bb));a+=t.key+"-"+l.name;var s={};for(var u in e)Xh.call(e,u)&&u!=="css"&&u!==ep&&(s[u]=e[u]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(GP,{cache:t,serialized:l,isStringTag:typeof i=="string"}),b.createElement(i,s))}),XP=YP,Y=function(t,n){var r=arguments;if(n==null||!Xh.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=XP,o[1]=WP(t,n);for(var a=2;a<i;a++)o[a]=r[a];return b.createElement.apply(null,o)};function qh(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Yh(t)}var qP=function(){var t=qh.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},KP=Ck,ZP=function(t){return t!=="theme"},_0=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?KP:ZP},E0=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},QP=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Gh(n,r,i),Nb(function(){return Ab(n,r,i)}),null},JP=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=E0(t,n,r),s=l||_0(i),u=!s("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var h=c.length,f=1;f<h;f++)d.push(c[f],c[0][f])}var g=Vb(function(y,S,p){var m=u&&y.as||i,x="",w=[],E=y;if(y.theme==null){E={};for(var k in y)E[k]=y[k];E.theme=b.useContext(Bb)}typeof y.className=="string"?x=Rb(S.registered,w,y.className):y.className!=null&&(x=y.className+" ");var _=Yh(d.concat(w),S.registered,E);x+=S.key+"-"+_.name,a!==void 0&&(x+=" "+a);var C=u&&l===void 0?_0(m):s,M={};for(var I in y)u&&I==="as"||C(I)&&(M[I]=y[I]);return M.className=x,M.ref=p,b.createElement(b.Fragment,null,b.createElement(QP,{cache:S,serialized:_,isStringTag:typeof m=="string"}),b.createElement(m,M))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=d,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(y,S){return e(y,q({},n,S,{shouldForwardProp:E0(g,S,!0)})).apply(void 0,d)},g}},e3=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Fe=JP.bind();e3.forEach(function(e){Fe[e]=Fe(e)});const t3=Fe.section`
  background-color:  var(--second-background);
 
 
`,n3=Fe.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
    margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding-top: 30px;
 @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
    padding-left: 0px;
    padding-right: 0px;
  }
  
`,r3=Fe.h1`

    font-size: 32px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;

 
`,i3=Fe.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 

  width: 100%;
        max-width: 750px;
        padding:10px;
  

  gap: 24px; 
  padding-top:30px;
  padding-bottom:30px;
   max-height: 600px;   
  overflow-y: auto;  
  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  -ms-overflow-style: none;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); 
     padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
      padding-left: 20px;
    padding-right: 20px;
    gap: 20px;
}
 @media screen and (min-width: 1440px) {
     grid-template-columns: repeat(4, 1fr); 
     padding-left: 30px;
    padding-right: 30px;
    max-width: 1340px
  }
`;Fe.div`
  position: absolute;
  inset: 0; /* займає всю картку */
  background: rgba(0, 0, 0, 0.622); /* чорний з прозорістю 25% */
`;const o3=Fe(Oe)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;

  border-radius: 16px;
  overflow: hidden;
  background: #fff;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  }
`,a3=Fe.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 100px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.309);
    z-index: 1;
  }
`,s3=Fe.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
 

  display: block;
   @media screen and (max-width: 768px) {
  height: 100px;
  }

`,l3=Fe.p`
color: var( --black-color);
  padding: 16px;
  font-size: 18px;
  
  font-family: var(--second-font);
font-weight: 400;
  text-align: center;
    @media screen and (max-width: 768px) {
 padding:10px;
   font-size: 15px;
  font-weight: 400;
  }

`;var u3={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};c3(u3);function c3(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var d3="#4fa94d",f3={"aria-busy":!0,role:"progressbar"},p3=T.div`
  display: ${e=>e.$visible?"flex":"none"};
`,h3="http://www.w3.org/2000/svg",Zt=242.776657104492,m3=1.6,g3=Fh`
12.5% {
  stroke-dasharray: ${Zt*.14}px, ${Zt}px;
  stroke-dashoffset: -${Zt*.11}px;
}
43.75% {
  stroke-dasharray: ${Zt*.35}px, ${Zt}px;
  stroke-dashoffset: -${Zt*.35}px;
}
100% {
  stroke-dasharray: ${Zt*.01}px, ${Zt}px;
  stroke-dashoffset: -${Zt*.99}px;
}
`;T.path`
  stroke-dasharray: ${Zt*.01}px, ${Zt};
  stroke-dashoffset: 0;
  animation: ${g3} ${m3}s linear infinite;
`;var v3=Fh`
to {
   transform: rotate(360deg);
 }
`;T.svg`
  animation: ${v3} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
`;T.polyline`
  stroke-width: ${e=>`${e.$strokeWidth}px`};
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;var y3=({height:e=80,width:t=80,radius:n=9,color:r=d3,ariaLabel:i="three-dots-loading",wrapperStyle:o,wrapperClass:a,visible:l=!0})=>v.jsx(p3,{style:o,$visible:l,className:a,"data-testid":"three-dots-loading","aria-label":i,...f3,children:v.jsxs("svg",{width:t,height:e,viewBox:"0 0 120 30",xmlns:h3,fill:r,"data-testid":"three-dots-svg",children:[v.jsxs("circle",{cx:"15",cy:"15",r:Number(n)+6,children:[v.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),v.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),v.jsxs("circle",{cx:"60",cy:"15",r:n,attributeName:"fill-opacity",from:"1",to:"0.3",children:[v.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),v.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),v.jsxs("circle",{cx:"105",cy:"15",r:Number(n)+6,children:[v.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),v.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),x3=Fh`
to {
   stroke-dashoffset: 136;
 }
`;T.polygon`
  stroke-dasharray: 17;
  animation: ${x3} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;T.svg`
  transform-origin: 50% 65%;
`;const b3=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image")).json();console.log(a),t(a.data.map(l=>{var s;return{id:l.id_title,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?v.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"50px"},children:v.jsx(y3,{height:"80",width:"80",radius:"9",color:"var(--orange-color)",ariaLabel:"three-dots-loading",visible:!0})}):v.jsx(t3,{children:v.jsxs(n3,{children:[v.jsx(r3,{children:"Каталог"}),v.jsx(i3,{children:e.map(i=>v.jsxs(o3,{to:`/catalog/${i.id}`,children:[v.jsx(a3,{children:v.jsx(s3,{src:i.image,alt:i.title})}),v.jsx(l3,{children:i.title})]},i.id))})]})})},w3=Fe.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,S3=Fe.h1`
   text-align: center;
margin-bottom: 40px;
font-family: var(--second-font);
  color: #191919;
 font-size: 30px;
  @media screen and (min-width: 768px) {
  font-size: 40px;
  }

  span {  font-size: 40px;
    @media screen and (min-width: 768px) {
  font-size: 70px;
  }
    
     
  }
`,_3=Fe.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,E3=Fe(Oe)`

font-family: var(--second-font);
    display: flex;
    justify-content: center;
    width: 200px;
    background: #f47920;
    color: white;
    border: none;
    padding: 25px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 20px;
 transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
background-color: #e0961d;}

  
`,C3=()=>v.jsxs(w3,{children:[v.jsxs(S3,{children:[" ",v.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),v.jsx(_3,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),v.jsx(E3,{children:" На головну"})]});const k3=T.div`
  width: 100%;
  height: 100%;
font-family: var(--main-font);
`,T3=T.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var Hb={},Ub={},Fu={},Wb={exports:{}},Da={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var C0=Object.getOwnPropertySymbols,O3=Object.prototype.hasOwnProperty,P3=Object.prototype.propertyIsEnumerable;function M3(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function I3(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var j3=I3()?Object.assign:function(e,t){for(var n,r=M3(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)O3.call(n,a)&&(r[a]=n[a]);if(C0){i=C0(n);for(var l=0;l<i.length;l++)P3.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},Gb={exports:{}},se={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh=j3,io=60103,Yb=60106;se.Fragment=60107;se.StrictMode=60108;se.Profiler=60114;var Xb=60109,qb=60110,Kb=60112;se.Suspense=60113;var Zb=60115,Qb=60116;if(typeof Symbol=="function"&&Symbol.for){var Kt=Symbol.for;io=Kt("react.element"),Yb=Kt("react.portal"),se.Fragment=Kt("react.fragment"),se.StrictMode=Kt("react.strict_mode"),se.Profiler=Kt("react.profiler"),Xb=Kt("react.provider"),qb=Kt("react.context"),Kb=Kt("react.forward_ref"),se.Suspense=Kt("react.suspense"),Zb=Kt("react.memo"),Qb=Kt("react.lazy")}var k0=typeof Symbol=="function"&&Symbol.iterator;function $3(e){return e===null||typeof e!="object"?null:(e=k0&&e[k0]||e["@@iterator"],typeof e=="function"?e:null)}function La(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ew={};function oo(e,t,n){this.props=e,this.context=t,this.refs=ew,this.updater=n||Jb}oo.prototype.isReactComponent={};oo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(La(85));this.updater.enqueueSetState(this,e,t,"setState")};oo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tw(){}tw.prototype=oo.prototype;function Zh(e,t,n){this.props=e,this.context=t,this.refs=ew,this.updater=n||Jb}var Qh=Zh.prototype=new tw;Qh.constructor=Zh;Kh(Qh,oo.prototype);Qh.isPureReactComponent=!0;var Jh={current:null},nw=Object.prototype.hasOwnProperty,rw={key:!0,ref:!0,__self:!0,__source:!0};function iw(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)nw.call(t,r)&&!rw.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:io,type:e,key:o,ref:a,props:i,_owner:Jh.current}}function D3(e,t){return{$$typeof:io,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function em(e){return typeof e=="object"&&e!==null&&e.$$typeof===io}function L3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var T0=/\/+/g;function id(e,t){return typeof e=="object"&&e!==null&&e.key!=null?L3(""+e.key):t.toString(36)}function Ws(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case io:case Yb:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+id(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(T0,"$&/")+"/"),Ws(i,t,n,"",function(u){return u})):i!=null&&(em(i)&&(i=D3(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(T0,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+id(o,l);a+=Ws(o,t,n,s,i)}else if(s=$3(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+id(o,l++),a+=Ws(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(La(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function cs(e,t,n){if(e==null)return e;var r=[],i=0;return Ws(e,r,"","",function(o){return t.call(n,o,i++)}),r}function R3(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var ow={current:null};function Kn(){var e=ow.current;if(e===null)throw Error(La(321));return e}var A3={ReactCurrentDispatcher:ow,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Jh,IsSomeRendererActing:{current:!1},assign:Kh};se.Children={map:cs,forEach:function(e,t,n){cs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cs(e,function(){t++}),t},toArray:function(e){return cs(e,function(t){return t})||[]},only:function(e){if(!em(e))throw Error(La(143));return e}};se.Component=oo;se.PureComponent=Zh;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A3;se.cloneElement=function(e,t,n){if(e==null)throw Error(La(267,e));var r=Kh({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Jh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)nw.call(t,s)&&!rw.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:io,type:e.type,key:i,ref:o,props:r,_owner:a}};se.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:qb,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Xb,_context:e},e.Consumer=e};se.createElement=iw;se.createFactory=function(e){var t=iw.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:Kb,render:e}};se.isValidElement=em;se.lazy=function(e){return{$$typeof:Qb,_payload:{_status:-1,_result:e},_init:R3}};se.memo=function(e,t){return{$$typeof:Zb,type:e,compare:t===void 0?null:t}};se.useCallback=function(e,t){return Kn().useCallback(e,t)};se.useContext=function(e,t){return Kn().useContext(e,t)};se.useDebugValue=function(){};se.useEffect=function(e,t){return Kn().useEffect(e,t)};se.useImperativeHandle=function(e,t,n){return Kn().useImperativeHandle(e,t,n)};se.useLayoutEffect=function(e,t){return Kn().useLayoutEffect(e,t)};se.useMemo=function(e,t){return Kn().useMemo(e,t)};se.useReducer=function(e,t,n){return Kn().useReducer(e,t,n)};se.useRef=function(e){return Kn().useRef(e)};se.useState=function(e){return Kn().useState(e)};se.version="17.0.2";Gb.exports=se;var F3=Gb.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N3=F3,aw=60103;Da.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var O0=Symbol.for;aw=O0("react.element"),Da.Fragment=O0("react.fragment")}var z3=N3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V3=Object.prototype.hasOwnProperty,B3={key:!0,ref:!0,__self:!0,__source:!0};function sw(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)V3.call(t,r)&&!B3.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:aw,type:e,key:o,ref:a,props:i,_owner:z3.current}}Da.jsx=sw;Da.jsxs=sw;Wb.exports=Da;var Et=Wb.exports,lw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(lw);var Ct=lw.exports;const H3={"lds-circle":"_lds-circle_qlxhy_1"},U3=Object.freeze(Object.defineProperty({__proto__:null,default:H3},Symbol.toStringTag,{value:"Module"})),W3=_t(U3);var uw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Fu,"__esModule",{value:!0});Fu.Circle=void 0;const G3=Et,Y3=uw(Ct),X3=uw(W3);function q3({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,G3.jsx)("div",{className:(0,Y3.default)(X3.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}Fu.Circle=q3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=Fu;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(Ub);var cw={},Nu={};const K3={"lds-default":"_lds-default_wt1n8_1"},Z3=Object.freeze(Object.defineProperty({__proto__:null,default:K3},Symbol.toStringTag,{value:"Module"})),Q3=_t(Z3);var dw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Nu,"__esModule",{value:!0});Nu.Default=void 0;const P0=Et,J3=dw(Ct),e4=dw(Q3);function t4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,P0.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,P0.jsx)("div",{className:(0,J3.default)(e4.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}Nu.Default=t4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=Nu;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(cw);var fw={},zu={};const n4={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},r4=Object.freeze(Object.defineProperty({__proto__:null,default:n4},Symbol.toStringTag,{value:"Module"})),i4=_t(r4);var pw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(zu,"__esModule",{value:!0});zu.DualRing=void 0;const M0=Et,I0=pw(Ct),j0=pw(i4);function o4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,M0.jsx)("div",{className:(0,I0.default)(j0.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,M0.jsx)("div",{className:(0,I0.default)(j0.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}zu.DualRing=o4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=zu;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(fw);var hw={},Vu={};const a4={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},s4=Object.freeze(Object.defineProperty({__proto__:null,default:a4},Symbol.toStringTag,{value:"Module"})),l4=_t(s4);var mw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Vu,"__esModule",{value:!0});Vu.Ellipsis=void 0;const $0=Et,u4=mw(Ct),c4=mw(l4);function d4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,$0.jsx)("div",{style:{background:`${e}`}},l));return(0,$0.jsx)("div",{className:(0,u4.default)(c4.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}Vu.Ellipsis=d4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=Vu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(hw);var gw={},Bu={};const f4={"lds-facebook":"_lds-facebook_1ts9g_1"},p4=Object.freeze(Object.defineProperty({__proto__:null,default:f4},Symbol.toStringTag,{value:"Module"})),h4=_t(p4);var vw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Bu,"__esModule",{value:!0});Bu.Facebook=void 0;const D0=Et,m4=vw(Ct),g4=vw(h4);function v4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,D0.jsx)("div",{style:{background:`${e}`}},l));return(0,D0.jsx)("div",{className:(0,m4.default)(g4.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}Bu.Facebook=v4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=Bu;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(gw);var yw={},Hu={};const y4={"lds-grid":"_lds-grid_1ftub_1"},x4=Object.freeze(Object.defineProperty({__proto__:null,default:y4},Symbol.toStringTag,{value:"Module"})),b4=_t(x4);var xw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Hu,"__esModule",{value:!0});Hu.Grid=void 0;const L0=Et,w4=xw(Ct),S4=xw(b4);function _4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,L0.jsx)("div",{style:{background:`${e}`}},l));return(0,L0.jsx)("div",{className:(0,w4.default)(S4.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}Hu.Grid=_4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=Hu;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(yw);var bw={},Uu={};const E4={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},C4=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"})),k4=_t(C4);var ww=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Uu,"__esModule",{value:!0});Uu.Heart=void 0;const ds=Et,od=ww(Ct),ad=ww(k4);function T4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,ds.jsx)("div",{className:(0,od.default)(ad.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,ds.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,ds.jsx)("div",{className:(0,od.default)(ad.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,ds.jsx)("div",{className:(0,od.default)(ad.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}Uu.Heart=T4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=Uu;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(bw);var Sw={},Wu={};const O4={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},P4=Object.freeze(Object.defineProperty({__proto__:null,default:O4},Symbol.toStringTag,{value:"Module"})),M4=_t(P4);var _w=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Wu,"__esModule",{value:!0});Wu.Hourglass=void 0;const R0=Et,A0=_w(Ct),F0=_w(M4);function I4({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,R0.jsx)("div",{className:(0,A0.default)(F0.default["lds-hourglass"],n),style:{...r},children:(0,R0.jsx)("div",{className:(0,A0.default)(F0.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}Wu.Hourglass=I4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=Wu;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(Sw);var Ew={},Gu={};const Cw="_center_1rufi_10",kw="_spin_1rufi_1",j4={"lds-orbitals":"_lds-orbitals_1rufi_1",center:Cw,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:kw},$4=Object.freeze(Object.defineProperty({__proto__:null,center:Cw,default:j4,spin:kw},Symbol.toStringTag,{value:"Module"})),D4=_t($4);var Tw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Gu,"__esModule",{value:!0});Gu.Orbitals=void 0;const Qe=Et,ot=Tw(Ct),xe=Tw(D4);function L4({color:e="#7f58af",className:t,style:n}){return(0,Qe.jsxs)("div",{className:(0,ot.default)(xe.default["lds-orbitals"],t),style:{...n},children:[(0,Qe.jsx)("div",{className:xe.default.center,style:{background:e}}),(0,Qe.jsxs)("div",{className:(0,ot.default)(xe.default["inner-spin"]),children:[(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-moon-a"]),style:{background:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-moon-b"]),style:{background:e}})]}),(0,Qe.jsxs)("div",{className:(0,ot.default)(xe.default["outer-spin"]),children:[(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-moon-a"]),style:{background:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-moon-b"]),style:{background:e}})]})]})}Gu.Orbitals=L4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=Gu;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(Ew);var Ow={},Yu={};const R4={"lds-ring":"_lds-ring_xgxdp_1"},A4=Object.freeze(Object.defineProperty({__proto__:null,default:R4},Symbol.toStringTag,{value:"Module"})),F4=_t(A4);var Pw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Yu,"__esModule",{value:!0});Yu.Ring=void 0;const N0=Et,N4=Pw(Ct),z4=Pw(F4);function V4({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,N0.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,N0.jsx)("div",{className:(0,N4.default)(z4.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}Yu.Ring=V4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=Yu;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(Ow);var Mw={},Xu={};const B4={"lds-ripple":"_lds-ripple_1lgcf_1"},H4=Object.freeze(Object.defineProperty({__proto__:null,default:B4},Symbol.toStringTag,{value:"Module"})),U4=_t(H4);var Iw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xu,"__esModule",{value:!0});Xu.Ripple=void 0;const z0=Et,W4=Iw(Ct),G4=Iw(U4);function Y4({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,z0.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,z0.jsx)("div",{className:(0,W4.default)(G4.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}Xu.Ripple=Y4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=Xu;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(Mw);var jw={},qu={};const X4={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},q4=Object.freeze(Object.defineProperty({__proto__:null,default:X4},Symbol.toStringTag,{value:"Module"})),K4=_t(q4);var $w=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(qu,"__esModule",{value:!0});qu.Roller=void 0;const sd=Et,V0=$w(Ct),B0=$w(K4);function Z4({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,sd.jsx)("div",{children:(0,sd.jsx)("div",{className:(0,V0.default)(B0.default["div-after"]),style:{background:e}})},o));return(0,sd.jsx)("div",{className:(0,V0.default)(B0.default["lds-roller"],t),style:{...n},children:r})}qu.Roller=Z4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=qu;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(jw);var Dw={},Ku={};const Q4={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},J4=Object.freeze(Object.defineProperty({__proto__:null,default:Q4},Symbol.toStringTag,{value:"Module"})),eM=_t(J4);var Lw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ku,"__esModule",{value:!0});Ku.Spinner=void 0;const ld=Et,H0=Lw(Ct),U0=Lw(eM);function tM({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,ld.jsx)("div",{children:(0,ld.jsx)("div",{className:(0,H0.default)(U0.default["div-after"]),style:{background:e}})},o));return(0,ld.jsx)("div",{className:(0,H0.default)(U0.default["lds-spinner"],t),style:{...n},children:r})}Ku.Spinner=tM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=Ku;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(Dw);var Rw={},Zu={};const Aw="_left_v9vlb_30",Fw="_right_v9vlb_33",Nw="_anim_v9vlb_37",nM={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:Aw,right:Fw,anim:Nw,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},rM=Object.freeze(Object.defineProperty({__proto__:null,anim:Nw,default:nM,left:Aw,right:Fw},Symbol.toStringTag,{value:"Module"})),iM=_t(rM);var zw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Zu,"__esModule",{value:!0});Zu.Ouroboro=void 0;const So=Et,_o=zw(Ct),Eo=zw(iM);function oM({color:e="#7f58af",style:t,className:n}){return(0,So.jsxs)("div",{className:(0,_o.default)(Eo.default["lds-ouroboro"],n),style:{...t},children:[(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.left),children:(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.anim),style:{background:e}})}),(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.right),children:(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.anim),style:{background:e}})})]})}Zu.Ouroboro=oM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=Zu;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(Rw);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=Ub;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=cw;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=fw;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=hw;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=gw;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=yw;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=bw;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=Sw;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const u=Ew;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return u.Orbitals}});const c=Ow;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return c.Ring}});const d=Mw;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return d.Ripple}});const h=jw;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return h.Roller}});const f=Dw;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return f.Spinner}});const g=Rw;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return g.Ouroboro}})})(Hb);const aM=()=>v.jsx(T3,{children:v.jsx(Hb.Default,{color:"#6d433da8"})}),sM="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",lM=kT`
:root {
  /* colors */
  --black-color: #1d0f0a;
  --main-brand-color: #382116;
  --second-color: #927052;
  --white-color: #f2ebd4; 
    --second-white: #f0eae7; 
  --orange-color: #f47920;
  --yellow-color: #e0941a;
  --red-color: #be2222d6;
  --main-font: Poiret One;
  --second-font: IBM Plex Sans;
  --background-color: #f6e1d338;
  --light-grey: #c1c1c1;
  --second-background: #f9f7f2;
  --brown-color: #3c2f2a;
  

 }

.no-scroll {
  /* overflow: hidden; */
}

@font-face {
  font-family: 'MyFont';
  src: url(${sM}) format('truetype');
  font-weight: 400;
  font-style: normal;
}


body {
  background-size: auto 100%;
  background-position: center center;
  background-repeat: no-repeat;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: var(--black-color);
  width: 100%;
  height: 100vh;
  margin: 0;


&::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #000000, #EF8964, #000000);
    border-radius: 12px;
  }

}

/* index.css або глобальний стиль */
html, body {
  height: 100%;
  margin: 0;
}

#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Висота на весь екран */
}

.main-content {
  flex: 1; /* займає весь простір між header і footer */
}


h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
  border: none;
}
button {
  cursor: pointer;
}
dl {
    margin: 0;

}
dd {
  margin-left: 0;
}
`,uM=T.div`
  width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);

    grid-template-rows: repeat(2, 280px);
  }
`,cM=T(Oe)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-image: url(${e=>e.bg});
  background-size: cover;
  background-position: center;
  min-height: 180px;
  cursor: pointer;
  transition: transform 0.2s ease;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.481);
  }

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: 1024px) {
    ${e=>e.isBig&&`
      grid-row: span 2;
      height: 100%;
    `}
  }
`,dM=T.h2`
  margin-top: 20px;
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,fM=T.h3`

  text-transform: uppercase;
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: #fff;
  margin: 0;
font-family: var(--second-font);
  font-size: 1.1rem;
  font-weight: 400;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.892);
  max-width: 80%;
`,pM=T.a`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: var(--orange-color);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-family: var(--main-font);
  font-weight: bold;
  transition: background-color 0.2s;
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #e0961d;
  }

  span {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`,hM=T.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,mM=()=>{const[e,t]=b.useState([]);return b.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(console.log("API response:",i),!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{id:o.id,title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),v.jsxs(v.Fragment,{children:[v.jsx(dM,{children:"Каталог"}),v.jsxs(uM,{children:[e.slice(0,6).map(n=>v.jsx(cM,{to:`catalog/${n.id}`,bg:n.image,isBig:n.big,children:v.jsx(fM,{children:n.title})},n.id)),v.jsxs(pM,{href:"catalog",children:[v.jsx("p",{children:"Весь каталог"}),v.jsx(hM,{children:v.jsx(bb,{size:24})})]})]})]})};function W0(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function tm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:W0(t[r])&&W0(e[r])&&Object.keys(t[r]).length>0&&tm(e[r],t[r])})}const Vw={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function En(){const e=typeof document<"u"?document:{};return tm(e,Vw),e}const gM={document:Vw,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function ft(){const e=typeof window<"u"?window:{};return tm(e,gM),e}function vM(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function yM(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Bw(e,t=0){return setTimeout(e,t)}function Il(){return Date.now()}function xM(e){const t=ft();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function bM(e,t="x"){const n=ft();let r,i,o;const a=xM(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function fs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function wM(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ot(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!wM(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(fs(t[l])&&fs(r[l])?r[l].__swiper__?t[l]=r[l]:Ot(t[l],r[l]):!fs(t[l])&&fs(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Ot(t[l],r[l])):t[l]=r[l])}}}return t}function oi(e,t,n){e.style.setProperty(t,n)}function Hw({swiper:e,targetPosition:t,side:n}){const r=ft(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",u=(d,h)=>s==="next"&&d>=h||s==="prev"&&d<=h,c=()=>{a=new Date().getTime(),o===null&&(o=a);const d=Math.max(Math.min((a-o)/l,1),0),h=.5-Math.cos(d*Math.PI)/2;let f=i+h*(t-i);if(u(f,t)&&(f=t),e.wrapperEl.scrollTo({[n]:f}),u(f,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:f})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(c)};c()}function bn(e,t=""){const n=ft(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function SM(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function _M(e,t){const n=ft();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=SM(e,t))),r}function jl(e){try{console.warn(e);return}catch{}}function $l(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:vM(t)),n}function EM(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function CM(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function cr(e,t){return ft().getComputedStyle(e,null).getPropertyValue(t)}function Dl(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Uw(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function tp(e,t,n){const r=ft();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function ze(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function xa(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function Ww(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=bn(e.el,`.${r[i]}`)[0];o||(o=$l("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const G0='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function kM({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:G0};function i(f){let g;return f&&typeof f=="string"&&e.isElement&&(g=e.el.querySelector(f)||e.hostEl.querySelector(f),g)?g:(f&&(typeof f=="string"&&(g=[...document.querySelectorAll(f)]),e.params.uniqueNavElements&&typeof f=="string"&&g&&g.length>1&&e.el.querySelectorAll(f).length===1?g=e.el.querySelector(f):g&&g.length===1&&(g=g[0])),f&&!g?f:g)}function o(f,g){const y=e.params.navigation;f=ze(f),f.forEach(S=>{S&&(S.classList[g?"add":"remove"](...y.disabledClass.split(" ")),S.tagName==="BUTTON"&&(S.disabled=g),e.params.watchOverflow&&e.enabled&&S.classList[e.isLocked?"add":"remove"](y.lockClass))})}function a(){const{nextEl:f,prevEl:g}=e.navigation;if(e.params.loop){o(g,!1),o(f,!1);return}o(g,e.isBeginning&&!e.params.rewind),o(f,e.isEnd&&!e.params.rewind)}function l(f){f.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(f){f.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const f=e.params.navigation;if(e.params.navigation=Ww(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(f.nextEl||f.prevEl))return;let g=i(f.nextEl),y=i(f.prevEl);Object.assign(e.navigation,{nextEl:g,prevEl:y}),g=ze(g),y=ze(y);const S=(p,m)=>{if(p){if(f.addIcons&&p.matches(".swiper-button-next,.swiper-button-prev")&&!p.querySelector("svg")){const x=document.createElement("div");xa(x,G0),p.appendChild(x.querySelector("svg")),x.remove()}p.addEventListener("click",m==="next"?s:l)}!e.enabled&&p&&p.classList.add(...f.lockClass.split(" "))};g.forEach(p=>S(p,"next")),y.forEach(p=>S(p,"prev"))}function c(){let{nextEl:f,prevEl:g}=e.navigation;f=ze(f),g=ze(g);const y=(S,p)=>{S.removeEventListener("click",p==="next"?s:l),S.classList.remove(...e.params.navigation.disabledClass.split(" "))};f.forEach(S=>y(S,"next")),g.forEach(S=>y(S,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?h():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{c()}),n("enable disable",()=>{let{nextEl:f,prevEl:g}=e.navigation;if(f=ze(f),g=ze(g),e.enabled){a();return}[...f,...g].filter(y=>!!y).forEach(y=>y.classList.add(e.params.navigation.lockClass))}),n("click",(f,g)=>{let{nextEl:y,prevEl:S}=e.navigation;y=ze(y),S=ze(S);const p=g.target;let m=S.includes(p)||y.includes(p);if(e.isElement&&!m){const x=g.path||g.composedPath&&g.composedPath();x&&(m=x.find(w=>y.includes(w)||S.includes(w)))}if(e.params.navigation.hideOnClick&&!m){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===p||e.pagination.el.contains(p)))return;let x;y.length?x=y[0].classList.contains(e.params.navigation.hiddenClass):S.length&&(x=S[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...y,...S].filter(w=>!!w).forEach(w=>w.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},h=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),c()};Object.assign(e.navigation,{enable:d,disable:h,update:a,init:u,destroy:c})}function Co(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function TM({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:p=>p,formatFractionTotal:p=>p,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(p,m){const{bulletActiveClass:x}=e.params.pagination;p&&(p=p[`${m==="prev"?"previous":"next"}ElementSibling`],p&&(p.classList.add(`${x}-${m}`),p=p[`${m==="prev"?"previous":"next"}ElementSibling`],p&&p.classList.add(`${x}-${m}-${m}`)))}function u(p,m,x){if(p=p%x,m=m%x,m===p+1)return"next";if(m===p-1)return"previous"}function c(p){const m=p.target.closest(Co(e.params.pagination.bulletClass));if(!m)return;p.preventDefault();const x=Dl(m)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const w=u(e.realIndex,x,e.slides.length);w==="next"?e.slideNext():w==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function d(){const p=e.rtl,m=e.params.pagination;if(l())return;let x=e.pagination.el;x=ze(x);let w,E;const k=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,_=e.params.loop?Math.ceil(k/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(E=e.previousRealIndex||0,w=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(w=e.snapIndex,E=e.previousSnapIndex):(E=e.previousIndex||0,w=e.activeIndex||0),m.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const C=e.pagination.bullets;let M,I,$;if(m.dynamicBullets&&(o=tp(C[0],e.isHorizontal()?"width":"height",!0),x.forEach(P=>{P.style[e.isHorizontal()?"width":"height"]=`${o*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&E!==void 0&&(a+=w-(E||0),a>m.dynamicMainBullets-1?a=m.dynamicMainBullets-1:a<0&&(a=0)),M=Math.max(w-a,0),I=M+(Math.min(C.length,m.dynamicMainBullets)-1),$=(I+M)/2),C.forEach(P=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(R=>`${m.bulletActiveClass}${R}`)].map(R=>typeof R=="string"&&R.includes(" ")?R.split(" "):R).flat();P.classList.remove(...j)}),x.length>1)C.forEach(P=>{const j=Dl(P);j===w?P.classList.add(...m.bulletActiveClass.split(" ")):e.isElement&&P.setAttribute("part","bullet"),m.dynamicBullets&&(j>=M&&j<=I&&P.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),j===M&&s(P,"prev"),j===I&&s(P,"next"))});else{const P=C[w];if(P&&P.classList.add(...m.bulletActiveClass.split(" ")),e.isElement&&C.forEach((j,R)=>{j.setAttribute("part",R===w?"bullet-active":"bullet")}),m.dynamicBullets){const j=C[M],R=C[I];for(let L=M;L<=I;L+=1)C[L]&&C[L].classList.add(...`${m.bulletActiveClass}-main`.split(" "));s(j,"prev"),s(R,"next")}}if(m.dynamicBullets){const P=Math.min(C.length,m.dynamicMainBullets+4),j=(o*P-o)/2-$*o,R=p?"right":"left";C.forEach(L=>{L.style[e.isHorizontal()?R:"top"]=`${j}px`})}}x.forEach((C,M)=>{if(m.type==="fraction"&&(C.querySelectorAll(Co(m.currentClass)).forEach(I=>{I.textContent=m.formatFractionCurrent(w+1)}),C.querySelectorAll(Co(m.totalClass)).forEach(I=>{I.textContent=m.formatFractionTotal(_)})),m.type==="progressbar"){let I;m.progressbarOpposite?I=e.isHorizontal()?"vertical":"horizontal":I=e.isHorizontal()?"horizontal":"vertical";const $=(w+1)/_;let P=1,j=1;I==="horizontal"?P=$:j=$,C.querySelectorAll(Co(m.progressbarFillClass)).forEach(R=>{R.style.transform=`translate3d(0,0,0) scaleX(${P}) scaleY(${j})`,R.style.transitionDuration=`${e.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(xa(C,m.renderCustom(e,w+1,_)),M===0&&r("paginationRender",C)):(M===0&&r("paginationRender",C),r("paginationUpdate",C)),e.params.watchOverflow&&e.enabled&&C.classList[e.isLocked?"add":"remove"](m.lockClass)})}function h(){const p=e.params.pagination;if(l())return;const m=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=ze(x);let w="";if(p.type==="bullets"){let E=e.params.loop?Math.ceil(m/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&E>m&&(E=m);for(let k=0;k<E;k+=1)p.renderBullet?w+=p.renderBullet.call(e,k,p.bulletClass):w+=`<${p.bulletElement} ${e.isElement?'part="bullet"':""} class="${p.bulletClass}"></${p.bulletElement}>`}p.type==="fraction"&&(p.renderFraction?w=p.renderFraction.call(e,p.currentClass,p.totalClass):w=`<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),p.type==="progressbar"&&(p.renderProgressbar?w=p.renderProgressbar.call(e,p.progressbarFillClass):w=`<span class="${p.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(E=>{p.type!=="custom"&&xa(E,w||""),p.type==="bullets"&&e.pagination.bullets.push(...E.querySelectorAll(Co(p.bulletClass)))}),p.type!=="custom"&&r("paginationRender",x[0])}function f(){e.params.pagination=Ww(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const p=e.params.pagination;if(!p.el)return;let m;typeof p.el=="string"&&e.isElement&&(m=e.el.querySelector(p.el)),!m&&typeof p.el=="string"&&(m=[...document.querySelectorAll(p.el)]),m||(m=p.el),!(!m||m.length===0)&&(e.params.uniqueNavElements&&typeof p.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...e.el.querySelectorAll(p.el)],m.length>1&&(m=m.find(x=>Uw(x,".swiper")[0]===e.el))),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(e.pagination,{el:m}),m=ze(m),m.forEach(x=>{p.type==="bullets"&&p.clickable&&x.classList.add(...(p.clickableClass||"").split(" ")),x.classList.add(p.modifierClass+p.type),x.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.type==="bullets"&&p.dynamicBullets&&(x.classList.add(`${p.modifierClass}${p.type}-dynamic`),a=0,p.dynamicMainBullets<1&&(p.dynamicMainBullets=1)),p.type==="progressbar"&&p.progressbarOpposite&&x.classList.add(p.progressbarOppositeClass),p.clickable&&x.addEventListener("click",c),e.enabled||x.classList.add(p.lockClass)}))}function g(){const p=e.params.pagination;if(l())return;let m=e.pagination.el;m&&(m=ze(m),m.forEach(x=>{x.classList.remove(p.hiddenClass),x.classList.remove(p.modifierClass+p.type),x.classList.remove(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.clickable&&(x.classList.remove(...(p.clickableClass||"").split(" ")),x.removeEventListener("click",c))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...p.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const p=e.params.pagination;let{el:m}=e.pagination;m=ze(m),m.forEach(x=>{x.classList.remove(p.horizontalClass,p.verticalClass),x.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?S():(f(),h(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{h(),d()}),n("destroy",()=>{g()}),n("enable disable",()=>{let{el:p}=e.pagination;p&&(p=ze(p),p.forEach(m=>m.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(p,m)=>{const x=m.target,w=ze(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&w&&w.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const E=w[0].classList.contains(e.params.pagination.hiddenClass);r(E===!0?"paginationShow":"paginationHide"),w.forEach(k=>k.classList.toggle(e.params.pagination.hiddenClass))}});const y=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=ze(p),p.forEach(m=>m.classList.remove(e.params.pagination.paginationDisabledClass))),f(),h(),d()},S=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=ze(p),p.forEach(m=>m.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:y,disable:S,render:h,update:d,init:f,destroy:g})}function OM({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,u,c=new Date().getTime(),d,h,f,g,y,S;function p(A){!e||e.destroyed||!e.wrapperEl||A.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",p),!(S||A.detail&&A.detail.bySwiperTouchMove)&&M())}const m=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(s=u,d=!1);const A=e.autoplay.paused?u:c+s-new Date().getTime();e.autoplay.timeLeft=A,r("autoplayTimeLeft",A,A/l),a=requestAnimationFrame(()=>{m()})},x=()=>{let A;return e.virtual&&e.params.virtual.enabled?A=e.slides.find(D=>D.classList.contains("swiper-slide-active")):A=e.slides[e.activeIndex],A?parseInt(A.getAttribute("data-swiper-autoplay"),10):void 0},w=()=>{let A=e.params.autoplay.delay;const O=x();return!Number.isNaN(O)&&O>0&&(A=O),A},E=A=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),m();let O=A;typeof O>"u"&&(O=w(),l=O,s=O),u=O;const D=e.params.speed,N=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(D,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,D,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(D,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,D,!0,!0),r("autoplay")),e.params.cssMode&&(c=new Date().getTime(),requestAnimationFrame(()=>{E()})))};return O>0?(clearTimeout(o),o=setTimeout(()=>{N()},O)):requestAnimationFrame(()=>{N()}),O},k=()=>{c=new Date().getTime(),e.autoplay.running=!0,E(),r("autoplayStart")},_=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},C=(A,O)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),A||(y=!0);const D=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",p):M()};if(e.autoplay.paused=!0,O){D();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-c),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),D())},M=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(c=new Date().getTime(),y?(y=!1,E(u)):E(),e.autoplay.paused=!1,r("autoplayResume"))},I=()=>{if(e.destroyed||!e.autoplay.running)return;const A=En();A.visibilityState==="hidden"&&(y=!0,C(!0)),A.visibilityState==="visible"&&M()},$=A=>{A.pointerType==="mouse"&&(y=!0,S=!0,!(e.animating||e.autoplay.paused)&&C(!0))},P=A=>{A.pointerType==="mouse"&&(S=!1,e.autoplay.paused&&M())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",$),e.el.addEventListener("pointerleave",P))},R=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",$),e.el.removeEventListener("pointerleave",P))},L=()=>{En().addEventListener("visibilitychange",I)},F=()=>{En().removeEventListener("visibilitychange",I)};n("init",()=>{e.params.autoplay.enabled&&(j(),L(),k())}),n("destroy",()=>{R(),F(),e.autoplay.running&&_()}),n("_freeModeStaticRelease",()=>{(f||y)&&M()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?_():C(!0,!0)}),n("beforeTransitionStart",(A,O,D)=>{e.destroyed||!e.autoplay.running||(D||!e.params.autoplay.disableOnInteraction?C(!0,!0):_())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){_();return}h=!0,f=!1,y=!1,g=setTimeout(()=>{y=!0,f=!0,C(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!h)){if(clearTimeout(g),clearTimeout(o),e.params.autoplay.disableOnInteraction){f=!1,h=!1;return}f&&e.params.cssMode&&M(),f=!1,h=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(u=w(),l=w())}),Object.assign(e.autoplay,{start:k,stop:_,pause:C,resume:M})}let ud;function PM(){const e=ft(),t=En();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Gw(){return ud||(ud=PM()),ud}let cd;function MM({userAgent:e}={}){const t=Gw(),n=ft(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const c=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=r==="Win32";let f=r==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&f&&t.touch&&g.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),f=!1),s&&!h&&(o.os="android",o.android=!0),(u||d||c)&&(o.os="ios",o.ios=!0),o}function Yw(e={}){return cd||(cd=MM(e)),cd}let dd;function IM(){const e=ft(),t=Yw();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,u]=l.split("Version/")[1].split(" ")[0].split(".").map(c=>Number(c));n=s<16||s===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function Xw(){return dd||(dd=IM()),dd}function jM({swiper:e,on:t,emit:n}){const r=ft();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(c=>{o=r.requestAnimationFrame(()=>{const{width:d,height:h}=e;let f=d,g=h;c.forEach(({contentBoxSize:y,contentRect:S,target:p})=>{p&&p!==e.el||(f=S?S.width:(y[0]||y).inlineSize,g=S?S.height:(y[0]||y).blockSize)}),(f!==d||g!==h)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function $M({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=ft(),a=(u,c={})=>{const d=o.MutationObserver||o.WebkitMutationObserver,h=new d(f=>{if(e.__preventObserver__)return;if(f.length===1){r("observerUpdate",f[0]);return}const g=function(){r("observerUpdate",f[0])};o.requestAnimationFrame?o.requestAnimationFrame(g):o.setTimeout(g,0)});h.observe(u,{attributes:typeof c.attributes>"u"?!0:c.attributes,childList:e.isElement||(typeof c.childList>"u"?!0:c).childList,characterData:typeof c.characterData>"u"?!0:c.characterData}),i.push(h)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=Uw(e.hostEl);for(let c=0;c<u.length;c+=1)a(u[c])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var DM={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function LM(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(cr(r,"padding-left")||0,10)-parseInt(cr(r,"padding-right")||0,10),n=n-parseInt(cr(r,"padding-top")||0,10)-parseInt(cr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function RM(){const e=this;function t(I,$){return parseFloat(I.getPropertyValue(e.getDirectionLabel($))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,u=bn(i,`.${e.params.slideClass}, swiper-slide`),c=l?e.virtual.slides.length:u.length;let d=[];const h=[],f=[];let g=n.slidesOffsetBefore;typeof g=="function"&&(g=n.slidesOffsetBefore.call(e));let y=n.slidesOffsetAfter;typeof y=="function"&&(y=n.slidesOffsetAfter.call(e));const S=e.snapGrid.length,p=e.slidesGrid.length,m=e.size-g-y;let x=n.spaceBetween,w=-g,E=0,k=0;if(typeof m>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*m:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-g-y,u.forEach(I=>{o?I.style.marginLeft="":I.style.marginRight="",I.style.marginBottom="",I.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(oi(r,"--swiper-centered-offset-before",""),oi(r,"--swiper-centered-offset-after","")),n.cssMode&&(oi(r,"--swiper-slides-offset-before",`${g}px`),oi(r,"--swiper-slides-offset-after",`${y}px`));const _=n.grid&&n.grid.rows>1&&e.grid;_?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let C;const M=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(I=>typeof n.breakpoints[I].slidesPerView<"u").length>0;for(let I=0;I<c;I+=1){C=0;const $=u[I];if(!($&&(_&&e.grid.updateSlide(I,$,u),cr($,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(C=n.virtual.slidesPerViewAutoSlideSize),C&&$&&(n.roundLengths&&(C=Math.floor(C)),$.style[e.getDirectionLabel("width")]=`${C}px`);else if(n.slidesPerView==="auto"){M&&($.style[e.getDirectionLabel("width")]="");const P=getComputedStyle($),j=$.style.transform,R=$.style.webkitTransform;if(j&&($.style.transform="none"),R&&($.style.webkitTransform="none"),n.roundLengths)C=e.isHorizontal()?tp($,"width",!0):tp($,"height",!0);else{const L=t(P,"width"),F=t(P,"padding-left"),A=t(P,"padding-right"),O=t(P,"margin-left"),D=t(P,"margin-right"),N=P.getPropertyValue("box-sizing");if(N&&N==="border-box")C=L+O+D;else{const{clientWidth:B,offsetWidth:z}=$;C=L+F+A+O+D+(z-B)}}j&&($.style.transform=j),R&&($.style.webkitTransform=R),n.roundLengths&&(C=Math.floor(C))}else C=(m-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(C=Math.floor(C)),$&&($.style[e.getDirectionLabel("width")]=`${C}px`);$&&($.swiperSlideSize=C),f.push(C),n.centeredSlides?(w=w+C/2+E/2+x,E===0&&I!==0&&(w=w-m/2-x),I===0&&(w=w-m/2-x),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),k%n.slidesPerGroup===0&&d.push(w),h.push(w)):(n.roundLengths&&(w=Math.floor(w)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup===0&&d.push(w),h.push(w),w=w+C+x),e.virtualSize+=C+x,E=C,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,m)+y,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+x}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),_&&e.grid.updateWrapperSize(C,d),!n.centeredSlides){const I=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,$=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||I);let P=d.length;if($){let R;if(n.slidesPerView==="auto"){R=1;let L=0;for(let F=f.length-1;F>=0&&(L+=f[F]+(F<f.length-1?x:0),L<=m);F-=1)R=f.length-F}else R=Math.floor(n.slidesPerView);P=Math.max(c-R,0)}const j=[];for(let R=0;R<d.length;R+=1){let L=d[R];n.roundLengths&&(L=Math.floor(L)),$?R<=P&&j.push(L):d[R]<=e.virtualSize-m&&j.push(L)}d=j,Math.floor(e.virtualSize-m)-Math.floor(d[d.length-1])>1&&($||d.push(e.virtualSize-m))}if(l&&n.loop){const I=f[0]+x;if(n.slidesPerGroup>1){const $=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),P=I*n.slidesPerGroup;for(let j=0;j<$;j+=1)d.push(d[d.length-1]+P)}for(let $=0;$<e.virtual.slidesBefore+e.virtual.slidesAfter;$+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+I),h.push(h[h.length-1]+I),e.virtualSize+=I}if(d.length===0&&(d=[0]),x!==0){const I=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter(($,P)=>!n.cssMode||n.loop?!0:P!==u.length-1).forEach($=>{$.style[I]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let I=0;f.forEach(P=>{I+=P+(x||0)}),I-=x;const $=I>m?I-m:0;d=d.map(P=>P<=0?-g:P>$?$+y:P)}if(n.centerInsufficientSlides){let I=0;if(f.forEach($=>{I+=$+(x||0)}),I-=x,I<m){const $=(m-I)/2;d.forEach((P,j)=>{d[j]=P-$}),h.forEach((P,j)=>{h[j]=P+$})}}if(Object.assign(e,{slides:u,snapGrid:d,slidesGrid:h,slidesSizesGrid:f}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){oi(r,"--swiper-centered-offset-before",`${-d[0]}px`),oi(r,"--swiper-centered-offset-after",`${e.size/2-f[f.length-1]/2}px`);const I=-e.snapGrid[0],$=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(P=>P+I),e.slidesGrid=e.slidesGrid.map(P=>P+$)}if(c!==s&&e.emit("slidesLengthChange"),d.length!==S&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==p&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const I=`${n.containerModifierClass}backface-hidden`,$=e.el.classList.contains(I);c<=n.maxBackfaceHiddenSlides?$||e.el.classList.add(I):$&&e.el.classList.remove(I)}}function AM(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function FM(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Y0=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function NM(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let c=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const d=(a+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),h=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),f=-(a-c),g=f+t.slidesSizesGrid[s],y=f>=0&&f<=t.size-t.slidesSizesGrid[s],S=f>=0&&f<t.size-1||g>1&&g<=t.size||f<=0&&g>=t.size;S&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s)),Y0(u,S,n.slideVisibleClass),Y0(u,y,n.slideFullyVisibleClass),u.progress=i?-d:d,u.originalProgress=i?-h:h}}function zM(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const c=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=c||i<=0,a=d||i>=1,c&&(i=0),d&&(i=1)}if(n.loop){const c=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),h=t.slidesGrid[c],f=t.slidesGrid[d],g=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=h?l=(y-h)/g:l=(y+g-f)/g,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(s&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const fd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function VM(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=d=>bn(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let s,u,c;if(o)if(n.loop){let d=i-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${d}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(d=>d.column===i),c=t.find(d=>d.column===i+1),u=t.find(d=>d.column===i-1)):s=t[i];s&&(a||(c=CM(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=t[0]),u=EM(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(d=>{fd(d,d===s,n.slideActiveClass),fd(d,d===c,n.slideNextClass),fd(d,d===u,n.slidePrevClass)}),e.emitSlidesClasses()}const Gs=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},pd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},np=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,u)=>a+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&pd(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&pd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&pd(e,a)};function BM(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function HM(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,u;const c=f=>{let g=f-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof s>"u"&&(s=BM(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const f=Math.min(i.slidesPerGroupSkip,s);u=f+Math.floor((s-f)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=c(s);return}const d=t.grid&&i.grid&&i.grid.rows>1;let h;if(t.virtual&&i.virtual.enabled)i.loop?h=c(s):h=s;else if(d){const f=t.slides.find(y=>y.column===s);let g=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(f),0)),h=Math.floor(g/i.grid.rows)}else if(t.slides[s]){const f=t.slides[s].getAttribute("data-swiper-slide-index");f?h=parseInt(f,10):h=s}else h=s;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:a,realIndex:h,previousIndex:o,activeIndex:s}),t.initialized&&np(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==h&&t.emit("realIndexChange"),t.emit("slideChange"))}function UM(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var WM={updateSize:LM,updateSlides:RM,updateAutoHeight:AM,updateSlidesOffset:FM,updateSlidesProgress:NM,updateProgress:zM,updateSlidesClasses:VM,updateActiveIndex:HM,updateClickedSlide:UM};function GM(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=bM(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function YM(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let c;const d=n.maxTranslate()-n.minTranslate();d===0?c=0:c=(e-n.minTranslate())/d,c!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function XM(){return-this.snapGrid[0]}function qM(){return-this.snapGrid[this.snapGrid.length-1]}function KM(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),u=o.maxTranslate();let c;if(r&&e>s?c=s:r&&e<u?c=u:c=e,o.updateProgress(c),a.cssMode){const d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-c;else{if(!o.support.smoothScroll)return Hw({swiper:o,targetPosition:-c,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(h){!o||o.destroyed||h.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var ZM={getTranslate:GM,setTranslate:YM,minTranslate:XM,maxTranslate:qM,translateTo:KM};function QM(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function qw({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function JM(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),qw({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function eI(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),qw({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var tI={setTransition:QM,transitionStart:JM,transitionEnd:eI};function nI(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:c,activeIndex:d,rtlTranslate:h,wrapperEl:f,enabled:g}=o;if(!g&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const y=Math.min(o.params.slidesPerGroupSkip,a);let S=y+Math.floor((a-y)/o.params.slidesPerGroup);S>=s.length&&(S=s.length-1);const p=-s[S];if(l.normalizeSlideIndex)for(let _=0;_<u.length;_+=1){const C=-Math.floor(p*100),M=Math.floor(u[_]*100),I=Math.floor(u[_+1]*100);typeof u[_+1]<"u"?C>=M&&C<I-(I-M)/2?a=_:C>=M&&C<I&&(a=_+1):C>=M&&(a=_)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&(h?p>o.translate&&p>o.minTranslate():p<o.translate&&p<o.minTranslate())||!o.allowSlidePrev&&p>o.translate&&p>o.maxTranslate()&&(d||0)!==a))return!1;a!==(c||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(p);let m;a>d?m="next":a<d?m="prev":m="reset";const x=o.virtual&&o.params.virtual.enabled;if(!(x&&i)&&(h&&-p===o.translate||!h&&p===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(p),m!=="reset"&&(o.transitionStart(n,m),o.transitionEnd(n,m)),!1;if(l.cssMode){const _=o.isHorizontal(),C=h?p:-p;if(t===0)x&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),x&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[_?"scrollLeft":"scrollTop"]=C})):f[_?"scrollLeft":"scrollTop"]=C,x&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return Hw({swiper:o,targetPosition:C,side:_?"left":"top"}),!0;f.scrollTo({[_?"left":"top"]:C,behavior:"smooth"})}return!0}const k=Xw().isSafari;return x&&!i&&k&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(p),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,m),t===0?o.transitionEnd(n,m):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(C){!o||o.destroyed||C.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,m))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function rI(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const y=a*i.params.grid.rows;l=i.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===y).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u,slidesOffsetBefore:c,slidesOffsetAfter:d}=i.params,h=u||!!c||!!d;let f=i.params.slidesPerView;f==="auto"?f=i.slidesPerViewDynamic():(f=Math.ceil(parseFloat(i.params.slidesPerView,10)),h&&f%2===0&&(f=f+1));let g=s-l<f;if(h&&(g=g||l<Math.ceil(f/2)),r&&h&&i.params.slidesPerView!=="auto"&&!o&&(g=!1),g){const y=h?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?l+1:l-s+1,slideRealIndex:y==="next"?i.realIndex:void 0})}if(o){const y=a*i.params.grid.rows;a=i.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===y).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function iI(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function oI(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:u}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const c=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=l?r.translate:-r.translate;function h(m){return m<0?-Math.floor(Math.abs(m)):Math.floor(m)}const f=h(d),g=o.map(m=>h(m)),y=i.freeMode&&i.freeMode.enabled;let S=o[g.indexOf(f)-1];if(typeof S>"u"&&(i.cssMode||y)){let m;o.forEach((x,w)=>{f>=x&&(m=w)}),typeof m<"u"&&(S=y?o[m]:o[m>0?m-1:m])}let p=0;if(typeof S<"u"&&(p=a.indexOf(S),p<0&&(p=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(p=p-r.slidesPerViewDynamic("previous",!0)+1,p=Math.max(p,0))),i.rewind&&r.isBeginning){const m=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(m,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(p,e,t,n)}),!0;return r.slideTo(p,e,t,n)}function aI(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function sI(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],c=i.snapGrid[l+1];s-u>(c-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],c=i.snapGrid[l];s-u<=(c-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function lI(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(bn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),Bw(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var uI={slideTo:nI,slideToLoop:rI,slideNext:iI,slidePrev:oI,slideReset:aI,slideToClosest:sI,slideToClickedSlide:lI};function cI(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{bn(i,`.${r.slideClass}, swiper-slide`).forEach((g,y)=>{g.setAttribute("data-swiper-slide-index",y)})},a=()=>{const f=bn(i,`.${r.slideBlankClass}`);f.forEach(g=>{g.remove()}),f.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),u=n.slides.length%s!==0,c=l&&n.slides.length%r.grid.rows!==0,d=f=>{for(let g=0;g<f;g+=1){const y=n.isElement?$l("swiper-slide",[r.slideBlankClass]):$l("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(y)}};if(u){if(r.loopAddBlankSlides){const f=s-n.slides.length%s;d(f),n.recalcSlides(),n.updateSlides()}else jl("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(c){if(r.loopAddBlankSlides){const f=r.grid.rows-n.slides.length%r.grid.rows;d(f),n.recalcSlides(),n.updateSlides()}else jl("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const h=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:h?void 0:"next",initial:t})}function dI({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:c,allowSlideNext:d,slidesEl:h,params:f}=s,{centeredSlides:g,slidesOffsetBefore:y,slidesOffsetAfter:S,initialSlide:p}=f,m=g||!!y||!!S;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&f.virtual.enabled){t&&(!m&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):m&&s.snapIndex<f.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=c,s.allowSlideNext=d,s.emit("loopFix");return}let x=f.slidesPerView;x==="auto"?x=s.slidesPerViewDynamic():(x=Math.ceil(parseFloat(f.slidesPerView,10)),m&&x%2===0&&(x=x+1));const w=f.slidesPerGroupAuto?x:f.slidesPerGroup;let E=m?Math.max(w,Math.ceil(x/2)):w;E%w!==0&&(E+=w-E%w),E+=f.loopAdditionalSlides,s.loopedSlides=E;const k=s.grid&&f.grid&&f.grid.rows>1;u.length<x+E||s.params.effect==="cards"&&u.length<x+E*2?jl("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):k&&f.grid.fill==="row"&&jl("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const _=[],C=[],M=k?Math.ceil(u.length/f.grid.rows):u.length,I=o&&M-p<x&&!m;let $=I?p:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(u.find(O=>O.classList.contains(f.slideActiveClass))):$=i;const P=n==="next"||!n,j=n==="prev"||!n;let R=0,L=0;const A=(k?u[i].column:i)+(m&&typeof r>"u"?-x/2+.5:0);if(A<E){R=Math.max(E-A,w);for(let O=0;O<E-A;O+=1){const D=O-Math.floor(O/M)*M;if(k){const N=M-D-1;for(let B=u.length-1;B>=0;B-=1)u[B].column===N&&_.push(B)}else _.push(M-D-1)}}else if(A+x>M-E){L=Math.max(A-(M-E*2),w),I&&(L=Math.max(L,x-M+p+1));for(let O=0;O<L;O+=1){const D=O-Math.floor(O/M)*M;k?u.forEach((N,B)=>{N.column===D&&C.push(B)}):C.push(D)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&u.length<x+E*2&&(C.includes(i)&&C.splice(C.indexOf(i),1),_.includes(i)&&_.splice(_.indexOf(i),1)),j&&_.forEach(O=>{u[O].swiperLoopMoveDOM=!0,h.prepend(u[O]),u[O].swiperLoopMoveDOM=!1}),P&&C.forEach(O=>{u[O].swiperLoopMoveDOM=!0,h.append(u[O]),u[O].swiperLoopMoveDOM=!1}),s.recalcSlides(),f.slidesPerView==="auto"?s.updateSlides():k&&(_.length>0&&j||C.length>0&&P)&&s.slides.forEach((O,D)=>{s.grid.updateSlide(D,O,s.slides)}),f.watchSlidesProgress&&s.updateSlidesOffset(),t){if(_.length>0&&j){if(typeof e>"u"){const O=s.slidesGrid[$],N=s.slidesGrid[$+R]-O;l?s.setTranslate(s.translate-N):(s.slideTo($+Math.ceil(R),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else if(r){const O=k?_.length/f.grid.rows:_.length;s.slideTo(s.activeIndex+O,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(C.length>0&&P)if(typeof e>"u"){const O=s.slidesGrid[$],N=s.slidesGrid[$-L]-O;l?s.setTranslate(s.translate-N):(s.slideTo($-L,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else{const O=k?C.length/f.grid.rows:C.length;s.slideTo(s.activeIndex-O,0,!1,!0)}}if(s.allowSlidePrev=c,s.allowSlideNext=d,s.controller&&s.controller.control&&!a){const O={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(D=>{!D.destroyed&&D.params.loop&&D.loopFix({...O,slideTo:D.params.slidesPerView===f.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...O,slideTo:s.controller.control.params.slidesPerView===f.slidesPerView?t:!1})}s.emit("loopFix")}function fI(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var pI={loopCreate:cI,loopFix:dI,loopDestroy:fI};function hI(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function mI(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var gI={setGrabCursor:hI,unsetGrabCursor:mI};function vI(e,t=this){function n(r){if(!r||r===En()||r===ft())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function X0(e,t,n){const r=ft(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function yI(e){const t=this,n=En();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){X0(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!_M(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",c=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&c&&(s=c[0]);const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,h=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(h?vI(d,s):s.closest(d))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const f=a.currentX,g=a.currentY;if(!X0(t,r,f))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=f,a.startY=g,i.touchStartTime=Il(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let y=!0;s.matches(i.focusableElements)&&(y=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const S=y&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||S)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function xI(e){const t=En(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let u;if(s.type==="touchmove"){if(u=[...s.changedTouches].find(k=>k.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const c=u.pageX,d=u.pageY;if(s.preventedByNestedSwiper){o.startX=c,o.startY=d;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d}),r.touchStartTime=Il());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(c>o.startX&&-n.translate<=n.maxTranslate()||c<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(c<o.startX&&n.translate<=n.maxTranslate()||c>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=c,o.currentY=d;const h=o.currentX-o.startX,f=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(h**2+f**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let k;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:h*h+f*f>=25&&(k=Math.atan2(Math.abs(f),Math.abs(h))*180/Math.PI,r.isScrolling=n.isHorizontal()?k>i.touchAngle:90-k>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let g=n.isHorizontal()?h:f,y=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(g=Math.abs(g)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),o.diff=g,g*=i.touchRatio,a&&(g=-g,y=-y);const S=n.touchesDirection;n.swipeDirection=g>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const p=n.params.loop&&!i.cssMode,m=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(p&&m&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(k)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let x;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&S!==n.touchesDirection&&p&&m&&Math.abs(g)>=1){Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=g+r.startTranslate;let w=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),g>0?(p&&m&&!x&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+g)**E))):g<0&&(p&&m&&!x&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-g)**E))),w&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(g)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function bI(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(E=>E.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:u,enabled:c}=t;if(!c||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=Il(),h=d-n.touchStartTime;if(t.allowClick){const E=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(E&&E[0]||r.target,E),t.emit("tap click",r),h<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Il(),Bw(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let f;if(a.followFinger?f=s?t.translate:-t.translate:f=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const g=f>=-t.maxTranslate()&&!t.params.loop;let y=0,S=t.slidesSizesGrid[0];for(let E=0;E<u.length;E+=E<a.slidesPerGroupSkip?1:a.slidesPerGroup){const k=E<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[E+k]<"u"?(g||f>=u[E]&&f<u[E+k])&&(y=E,S=u[E+k]-u[E]):(g||f>=u[E])&&(y=E,S=u[u.length-1]-u[u.length-2])}let p=null,m=null;a.rewind&&(t.isBeginning?m=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(p=0));const x=(f-u[y])/S,w=y<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(h>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?p:y+w):t.slideTo(y)),t.swipeDirection==="prev"&&(x>1-a.longSwipesRatio?t.slideTo(y+w):m!==null&&x<0&&Math.abs(x)>a.longSwipesRatio?t.slideTo(m):t.slideTo(y))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+w):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(p!==null?p:y+w),t.swipeDirection==="prev"&&t.slideTo(m!==null?m:y))}}function q0(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function wI(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function SI(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function _I(e){const t=this;Gs(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function EI(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Kw=(e,t)=>{const n=En(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",q0,!0):e[u]("observerUpdate",q0,!0),i[s]("load",e.onLoad,{capture:!0}))};function CI(){const e=this,{params:t}=e;e.onTouchStart=yI.bind(e),e.onTouchMove=xI.bind(e),e.onTouchEnd=bI.bind(e),e.onDocumentTouchStart=EI.bind(e),t.cssMode&&(e.onScroll=SI.bind(e)),e.onClick=wI.bind(e),e.onLoad=_I.bind(e),Kw(e,"on")}function kI(){Kw(this,"off")}var TI={attachEvents:CI,detachEvents:kI};const K0=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function OI(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=En(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),u=e.getBreakpoint(o,l,s);if(!u||e.currentBreakpoint===u)return;const d=(u in o?o[u]:void 0)||e.originalParams,h=K0(e,r),f=K0(e,d),g=e.params.grabCursor,y=d.grabCursor,S=r.enabled;h&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!h&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),g&&!y?e.unsetGrabCursor():!g&&y&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(k=>{if(typeof d[k]>"u")return;const _=r[k]&&r[k].enabled,C=d[k]&&d[k].enabled;_&&!C&&e[k].disable(),!_&&C&&e[k].enable()});const p=d.direction&&d.direction!==r.direction,m=r.loop&&(d.slidesPerView!==r.slidesPerView||p),x=r.loop;p&&n&&e.changeDirection(),Ot(e.params,d);const w=e.params.enabled,E=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),S&&!w?e.disable():!S&&w&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",d),n&&(m?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&E?(e.loopCreate(t),e.updateSlides()):x&&!E&&e.loopDestroy()),e.emit("breakpoint",d)}function PI(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=ft(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:u}=a[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var MI={setBreakpoint:OI,getBreakpoint:PI};function II(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function jI(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=II(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function $I(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var DI={addClasses:jI,removeClasses:$I};function LI(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var RI={checkOverflow:LI},rp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function AI(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Ot(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Ot(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Ot(t,r)}}const hd={eventsEmitter:DM,update:WM,translate:ZM,transition:tI,slide:uI,loop:pI,grabCursor:gI,events:TI,breakpoints:MI,checkOverflow:RI,classes:DI},md={};let nm=class Pn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Ot({},r),n&&!r.el&&(r.el=n);const i=En();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(u=>{const c=Ot({},r,{el:u});s.push(new Pn(c))}),s}const o=this;o.__swiper__=!0,o.support=Gw(),o.device=Yw({userAgent:r.userAgent}),o.browser=Xw(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:AI(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Ot({},rp,a);return o.params=Ot({},l,md,r),o.originalParams=Ot({},o.params),o.passedParams=Ot({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=bn(n,`.${r.slideClass}, swiper-slide`),o=Dl(i[0]);return Dl(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=bn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:u}=r;let c=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=o[u]?Math.ceil(o[u].swiperSlideSize):0,h;for(let f=u+1;f<o.length;f+=1)o[f]&&!h&&(d+=Math.ceil(o[f].swiperSlideSize),c+=1,d>s&&(h=!0));for(let f=u-1;f>=0;f-=1)o[f]&&!h&&(d+=o[f].swiperSlideSize,c+=1,d>s&&(h=!0))}else if(t==="current")for(let d=u+1;d<o.length;d+=1)(n?a[d]+l[d]-a[u]<s:a[d]-a[u]<s)&&(c+=1);else for(let d=u-1;d>=0;d-=1)a[u]-a[d]<s&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Gs(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):bn(r,i())[0])();return!a&&n.params.createElements&&(a=$l("div",n.params.wrapperClass),r.append(a),bn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||cr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||cr(r,"direction")==="rtl"),wrongRTL:cr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Gs(n,o):o.addEventListener("load",a=>{Gs(n,a.target)})}),np(n),n.initialized=!0,np(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),yM(r)),r.destroyed=!0),null}static extendDefaults(t){Ot(md,t)}static get extendedDefaults(){return md}static get defaults(){return rp}static installModule(t){Pn.prototype.__modules__||(Pn.prototype.__modules__=[]);const n=Pn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Pn.installModule(n)),Pn):(Pn.installModule(t),Pn)}};Object.keys(hd).forEach(e=>{Object.keys(hd[e]).forEach(t=>{nm.prototype[t]=hd[e][t]})});nm.use([jM,$M]);const Zw=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function qr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function ji(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:qr(t[r])&&qr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:ji(e[r],t[r]):e[r]=t[r]})}function Qw(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Jw(e={}){return e.pagination&&typeof e.pagination.el>"u"}function eS(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function tS(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function FI(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function NI({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(C=>C!=="children"&&C!=="direction"&&C!=="wrapperClass"),{params:u,pagination:c,navigation:d,scrollbar:h,virtual:f,thumbs:g}=e;let y,S,p,m,x,w,E,k;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(y=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(S=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&c&&!c.el&&(p=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&h&&!h.el&&(m=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(x=!0);const _=C=>{e[C]&&(e[C].destroy(),C==="navigation"?(e.isElement&&(e[C].prevEl.remove(),e[C].nextEl.remove()),u[C].prevEl=void 0,u[C].nextEl=void 0,e[C].prevEl=void 0,e[C].nextEl=void 0):(e.isElement&&e[C].el.remove(),u[C].el=void 0,e[C].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?w=!0:!u.loop&&n.loop?E=!0:k=!0),s.forEach(C=>{if(qr(u[C])&&qr(n[C]))Object.assign(u[C],n[C]),(C==="navigation"||C==="pagination"||C==="scrollbar")&&"enabled"in n[C]&&!n[C].enabled&&_(C);else{const M=n[C];(M===!0||M===!1)&&(C==="navigation"||C==="pagination"||C==="scrollbar")?M===!1&&_(C):u[C]=n[C]}}),s.includes("controller")&&!S&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&f&&u.virtual.enabled?(f.slides=t,f.update(!0)):r.includes("virtual")&&f&&u.virtual.enabled&&(t&&(f.slides=t),f.update(!0)),r.includes("children")&&t&&u.loop&&(k=!0),y&&g.init()&&g.update(!0),S&&(e.controller.control=u.controller.control),p&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),c.init(),c.render(),c.update()),m&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),h.init(),h.updateSize(),h.setTranslate()),x&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),xa(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),xa(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(w||k)&&e.loopDestroy(),(E||k)&&e.loopCreate(),e.update()}function zI(e={},t=!0){const n={on:{}},r={},i={};ji(n,rp),n._emitClasses=!0,n.init=!1;const o={},a=Zw.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?qr(e[s])?(n[s]={},i[s]={},ji(n[s],e[s]),ji(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function VI({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){Qw(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),Jw(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),eS(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function BI(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return Zw.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(qr(e[s])&&qr(t[s])){const u=Object.keys(e[s]),c=Object.keys(t[s]);u.length!==c.length?a(s):(u.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}),c.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const HI=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Ll(){return Ll=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ll.apply(this,arguments)}function nS(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function rS(e){const t=[];return W.Children.toArray(e).forEach(n=>{nS(n)?t.push(n):n.props&&n.props.children&&rS(n.props.children).forEach(r=>t.push(r))}),t}function UI(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return W.Children.toArray(e).forEach(r=>{if(nS(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=rS(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function WI(e,t,n){if(!n)return null;const r=c=>{let d=c;return c<0?d=t.length+c:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let c=l;c<s;c+=1)c>=o&&c<=a&&u.push(t[r(c)]);return u.map((c,d)=>W.cloneElement(c,{swiper:e,style:i,key:c.props.virtualIndex||c.key||`slide-${d}`}))}function Xo(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const Z0=b.createContext(null),GI=b.createContext(null),iS=b.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,u]=b.useState("swiper"),[c,d]=b.useState(null),[h,f]=b.useState(!1),g=b.useRef(!1),y=b.useRef(null),S=b.useRef(null),p=b.useRef(null),m=b.useRef(null),x=b.useRef(null),w=b.useRef(null),E=b.useRef(null),k=b.useRef(null),{params:_,passedParams:C,rest:M,events:I}=zI(o),{slides:$,slots:P}=UI(r),j=()=>{f(!h)};Object.assign(_.on,{_containerClasses(O,D){u(D)}});const R=()=>{Object.assign(_.on,I),l=!0;const O={..._};if(delete O.wrapperClass,S.current=new nm(O),S.current.virtual&&S.current.params.virtual.enabled){S.current.virtual.slides=$;const D={cache:!1,slides:$,renderExternal:d,renderExternalUpdate:!1};ji(S.current.params.virtual,D),ji(S.current.originalParams.virtual,D)}};y.current||R(),S.current&&S.current.on("_beforeBreakpoint",j);const L=()=>{l||!I||!S.current||Object.keys(I).forEach(O=>{S.current.on(O,I[O])})},F=()=>{!I||!S.current||Object.keys(I).forEach(O=>{S.current.off(O,I[O])})};b.useEffect(()=>()=>{S.current&&S.current.off("_beforeBreakpoint",j)}),b.useEffect(()=>{!g.current&&S.current&&(S.current.emitSlidesClasses(),g.current=!0)}),Xo(()=>{if(a&&(a.current=y.current),!!y.current)return S.current.destroyed&&R(),VI({el:y.current,nextEl:x.current,prevEl:w.current,paginationEl:E.current,scrollbarEl:k.current,swiper:S.current},_),i&&!S.current.destroyed&&i(S.current),()=>{S.current&&!S.current.destroyed&&S.current.destroy(!0,!1)}},[]),Xo(()=>{L();const O=BI(C,p.current,$,m.current,D=>D.key);return p.current=C,m.current=$,O.length&&S.current&&!S.current.destroyed&&NI({swiper:S.current,slides:$,passedParams:C,changedParams:O,nextEl:x.current,prevEl:w.current,scrollbarEl:k.current,paginationEl:E.current}),()=>{F()}}),Xo(()=>{HI(S.current)},[c]);function A(){return _.virtual?WI(S.current,$,c):$.map((O,D)=>W.cloneElement(O,{swiper:S.current,swiperSlideIndex:D}))}return W.createElement(t,Ll({ref:y,className:tS(`${s}${e?` ${e}`:""}`)},M),W.createElement(GI.Provider,{value:S.current},P["container-start"],W.createElement(n,{className:FI(_.wrapperClass)},P["wrapper-start"],A(),P["wrapper-end"]),Qw(_)&&W.createElement(W.Fragment,null,W.createElement("div",{ref:w,className:"swiper-button-prev"}),W.createElement("div",{ref:x,className:"swiper-button-next"})),eS(_)&&W.createElement("div",{ref:k,className:"swiper-scrollbar"}),Jw(_)&&W.createElement("div",{ref:E,className:"swiper-pagination"}),P["container-end"]))});iS.displayName="Swiper";const oS=b.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},u)=>{const c=b.useRef(null),[d,h]=b.useState("swiper-slide"),[f,g]=b.useState(!1);function y(x,w,E){w===c.current&&h(E)}Xo(()=>{if(typeof l<"u"&&(c.current.swiperSlideIndex=l),u&&(u.current=c.current),!(!c.current||!r)){if(r.destroyed){d!=="swiper-slide"&&h("swiper-slide");return}return r.on("_slideClass",y),()=>{r&&r.off("_slideClass",y)}}}),Xo(()=>{r&&c.current&&!r.destroyed&&h(r.getSlideClasses(c.current))},[r]);const S={isActive:d.indexOf("swiper-slide-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0},p=()=>typeof t=="function"?t(S):t,m=()=>{g(!0)};return W.createElement(e,Ll({ref:c,className:tS(`${d}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:m},s),i&&W.createElement(Z0.Provider,{value:S},W.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},p(),o&&!f&&W.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}}))),!i&&W.createElement(Z0.Provider,{value:S},p(),o&&!f&&W.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}})))});oS.displayName="SwiperSlide";const YI=T.section`
  width: 100%;

  margin: 20px auto;
  border-radius: 24;
  position: relative;
  --swiper-theme-color: var(--orange-color);
  @media (max-width: 768px) {
    .swiper-button-next,
    .swiper-button-prev {
      width: 24px;
      height: 24px;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
      font-size: 12px;
    }
    .swiper-button-next {
      right: 1px;
    }

    .swiper-button-prev {
      left: 1px;
    }
  }
`,XI=T.div`
  height: 450px;
  background-image: linear-gradient(
      90deg,
      rgba(27, 26, 22, 0.85) 0%,
      rgba(44, 42, 37, 0.2) 100%
    ),
    url(${e=>e.bg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 0 60px;
  color: white;
  border-radius: 16px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    height: 350px;
    padding: 0 20px;
    text-align: center;
    justify-content: center;
  }
`,qI=T.div`
  text-align: left;
  max-width: 600px;
  padding-left:10px;

  h1 {
    color: #e6e5e2;
    font-family: var(--main-font);
    font-size: 25px;
    font-weight: 400;
    @media screen and (min-width: 768px) {
      font-size: 42px;
      font-weight: 700;
    }
    line-height: 1.1;
    margin-bottom: 20px;
  }

  p {
    font-size: 15px;
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
    font-size: 18px;
    margin-bottom: 30px;
    opacity: 0.9;
  }
`,KI=T(Oe)`
  display: inline-block;
  background-color: var(--orange-color);
  color: #fff;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #e0961d;
  }
`,ZI=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg"},{id:2,title:"Перевірені велодеталі з пробігом бла бла",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp"}],QI=()=>v.jsx(YI,{children:v.jsx(iS,{modules:[kM,OM,TM],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:ZI.map(e=>v.jsx(oS,{children:v.jsx(XI,{bg:e.img,children:v.jsxs(qI,{children:[v.jsx("h1",{children:e.title}),v.jsx("p",{children:e.desc}),v.jsx(KI,{to:"/catalog",children:"До каталогу"})]})})},e.id))})}),JI=T.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,e5=T.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
 font-size: 35px;
  }

`,t5=T.div`
 width: 100%;
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr;
      margin-bottom: 30px;

  @media screen and (min-width: 768px) {
 
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {

    grid-template-columns: repeat(4, 1fr);
  }
`,n5=T.div`
font-family: var(--second-font);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-width: 0;
  border: 2px solid #eee;
  border-radius:12px;
  padding: 10px;
  background-color:  #f5f5f5;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 26%);
   transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

    @media screen and (max-width: 768px) {
  width:100%;
      
  
  }
`,r5=T(Oe)`
  position: relative;
  display: block;

  border-radius: 15px;
  overflow: hidden;
  background: #f0f0f0;

  img {
    width: 100%;

    object-fit: fill;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.3s ease;
  }

  &:hover .overlay {
    opacity: 1;
  }
`,i5=T.span`
  position: absolute;
  top: 10px;
  left: 10px; 
  background-color:var( --orange-color); 
  color: white;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 20px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.344); 
  z-index: 1; 
  letter-spacing: 0.5px;
  pointer-events: none; 

  @media screen and (max-width: 480px) {
    font-size: 10px;
    padding: 3px 8px;
    top: 8px;
    left: 8px;
  }
`,o5=T.div`
  padding: 10px 0;
`,a5=T.h3`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,s5=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,l5=T.span`
  font-size: 17px;
  font-weight: 800;
  color: var(--black-color);
`,u5=T.button`
  background: #f5f5f5;
  border: none;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #333;
  transition: 0.2s;

  &:hover {
    background: var( --orange-color); 
    color: white;
  }
`;T(Oe)`
color: var(--white-color);
padding: 10px 20px;
 background:var( --orange-color); 
  border-radius: 15px;
  text-decoration: none;

`;const c5=T(Oe)`
display: flex;
  background: var( --orange-color); 
  border-radius: 15px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
 
  transition: transform 0.2s;

   transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #e0961d;
  }
    @media screen and (max-width: 768px) {
   padding: 20px ;
  }

`,d5=T.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,f5=T.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function Ue(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var p5=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),Q0=p5,gd=()=>Math.random().toString(36).substring(7).split("").join("."),h5={INIT:`@@redux/INIT${gd()}`,REPLACE:`@@redux/REPLACE${gd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${gd()}`},Rl=h5;function rm(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function im(e,t,n){if(typeof e!="function")throw new Error(Ue(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ue(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ue(1));return n(im)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function u(){a===o&&(a=new Map,o.forEach((S,p)=>{a.set(p,S)}))}function c(){if(s)throw new Error(Ue(3));return i}function d(S){if(typeof S!="function")throw new Error(Ue(4));if(s)throw new Error(Ue(5));let p=!0;u();const m=l++;return a.set(m,S),function(){if(p){if(s)throw new Error(Ue(6));p=!1,u(),a.delete(m),o=null}}}function h(S){if(!rm(S))throw new Error(Ue(7));if(typeof S.type>"u")throw new Error(Ue(8));if(typeof S.type!="string")throw new Error(Ue(17));if(s)throw new Error(Ue(9));try{s=!0,i=r(i,S)}finally{s=!1}return(o=a).forEach(m=>{m()}),S}function f(S){if(typeof S!="function")throw new Error(Ue(10));r=S,h({type:Rl.REPLACE})}function g(){const S=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(Ue(11));function m(){const w=p;w.next&&w.next(c())}return m(),{unsubscribe:S(m)}},[Q0](){return this}}}return h({type:Rl.INIT}),{dispatch:h,subscribe:d,getState:c,replaceReducer:f,[Q0]:g}}function m5(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Rl.INIT})>"u")throw new Error(Ue(12));if(typeof n(void 0,{type:Rl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ue(13))})}function g5(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{m5(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],h=n[d],f=a[d],g=h(f,l);if(typeof g>"u")throw l&&l.type,new Error(Ue(14));u[d]=g,s=s||g!==f}return s=s||r.length!==Object.keys(a).length,s?u:a}}function Al(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function v5(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(Ue(15))};const a={getState:i.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(a));return o=Al(...l)(i.dispatch),{...i,dispatch:o}}}function y5(e){return rm(e)&&"type"in e&&typeof e.type=="string"}var aS=Symbol.for("immer-nothing"),J0=Symbol.for("immer-draftable"),ut=Symbol.for("immer-state");function rn(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Mt=Object,Gi=Mt.getPrototypeOf,Fl="constructor",Qu="prototype",ip="configurable",Nl="enumerable",Ys="writable",ba="value",Gn=e=>!!e&&!!e[ut];function dn(e){var t;return e?sS(e)||ec(e)||!!e[J0]||!!((t=e[Fl])!=null&&t[J0])||tc(e)||nc(e):!1}var x5=Mt[Qu][Fl].toString(),ev=new WeakMap;function sS(e){if(!e||!om(e))return!1;const t=Gi(e);if(t===null||t===Mt[Qu])return!0;const n=Mt.hasOwnProperty.call(t,Fl)&&t[Fl];if(n===Object)return!0;if(!fi(n))return!1;let r=ev.get(n);return r===void 0&&(r=Function.toString.call(n),ev.set(n,r)),r===x5}function Ju(e,t,n=!0){Ra(e)===0?(n?Reflect.ownKeys(e):Mt.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Ra(e){const t=e[ut];return t?t.type_:ec(e)?1:tc(e)?2:nc(e)?3:0}var tv=(e,t,n=Ra(e))=>n===2?e.has(t):Mt[Qu].hasOwnProperty.call(e,t),op=(e,t,n=Ra(e))=>n===2?e.get(t):e[t],zl=(e,t,n,r=Ra(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function b5(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var ec=Array.isArray,tc=e=>e instanceof Map,nc=e=>e instanceof Set,om=e=>typeof e=="object",fi=e=>typeof e=="function",vd=e=>typeof e=="boolean";function w5(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Dn=e=>e.copy_||e.base_,am=e=>e.modified_?e.copy_:e.base_;function ap(e,t){if(tc(e))return new Map(e);if(nc(e))return new Set(e);if(ec(e))return Array[Qu].slice.call(e);const n=sS(e);if(t===!0||t==="class_only"&&!n){const r=Mt.getOwnPropertyDescriptors(e);delete r[ut];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[Ys]===!1&&(l[Ys]=!0,l[ip]=!0),(l.get||l.set)&&(r[a]={[ip]:!0,[Ys]:!0,[Nl]:l[Nl],[ba]:e[a]})}return Mt.create(Gi(e),r)}else{const r=Gi(e);if(r!==null&&n)return{...e};const i=Mt.create(r);return Mt.assign(i,e)}}function sm(e,t=!1){return rc(e)||Gn(e)||!dn(e)||(Ra(e)>1&&Mt.defineProperties(e,{set:ps,add:ps,clear:ps,delete:ps}),Mt.freeze(e),t&&Ju(e,(n,r)=>{sm(r,!0)},!1)),e}function S5(){rn(2)}var ps={[ba]:S5};function rc(e){return e===null||!om(e)?!0:Mt.isFrozen(e)}var Vl="MapSet",sp="Patches",nv="ArrayMethods",lS={};function Kr(e){const t=lS[e];return t||rn(0,e),t}var rv=e=>!!lS[e],wa,uS=()=>wa,_5=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:rv(Vl)?Kr(Vl):void 0,arrayMethodsPlugin_:rv(nv)?Kr(nv):void 0});function iv(e,t){t&&(e.patchPlugin_=Kr(sp),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function lp(e){up(e),e.drafts_.forEach(E5),e.drafts_=null}function up(e){e===wa&&(wa=e.parent_)}var ov=e=>wa=_5(wa,e);function E5(e){const t=e[ut];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function av(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[ut].modified_&&(lp(t),rn(4)),dn(e)&&(e=sv(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[ut].base_,e,t)}else e=sv(t,n);return C5(t,e,!0),lp(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==aS?e:void 0}function sv(e,t){if(rc(t))return t;const n=t[ut];if(!n)return Bl(t,e.handledSet_,e);if(!ic(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);fS(n,e)}return n.copy_}function C5(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&sm(t,n)}function cS(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var ic=(e,t)=>e.scope_===t,k5=[];function dS(e,t,n,r){const i=Dn(e),o=e.type_;if(r!==void 0&&op(i,r,o)===t){zl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Ju(i,(s,u)=>{if(Gn(u)){const c=l.get(u)||[];c.push(s),l.set(u,c)}})}const a=e.draftLocations_.get(t)??k5;for(const l of a)zl(i,l,n,o)}function T5(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!ic(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=am(o);dS(e,o.draft_??o,a,n),fS(o,i)})}function fS(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}cS(e)}}function O5(e,t,n){const{scope_:r}=e;if(Gn(n)){const i=n[ut];ic(i,r)&&i.callbacks_.push(function(){Xs(e);const a=am(i);dS(e,n,a,t)})}else dn(n)&&e.callbacks_.push(function(){const o=Dn(e);e.type_===3?o.has(n)&&Bl(n,r.handledSet_,r):op(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Bl(op(e.copy_,t,e.type_),r.handledSet_,r)})}function Bl(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Gn(e)||t.has(e)||!dn(e)||rc(e)||(t.add(e),Ju(e,(r,i)=>{if(Gn(i)){const o=i[ut];if(ic(o,n)){const a=am(o);zl(e,r,a,e.type_),cS(o)}}else dn(i)&&Bl(i,t,n)})),e}function P5(e,t){const n=ec(e),r={type_:n?1:0,scope_:t?t.scope_:uS(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Hl;n&&(i=[r],o=Sa);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var Hl={get(e,t){if(t===ut)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Dn(e);if(!tv(i,t,e.type_))return M5(e,i,t);const o=i[t];if(e.finalized_||!dn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&w5(t))return o;if(o===yd(e.base_,t)){Xs(e);const a=e.type_===1?+t:t,l=dp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Dn(e)},ownKeys(e){return Reflect.ownKeys(Dn(e))},set(e,t,n){const r=pS(Dn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=yd(Dn(e),t),o=i==null?void 0:i[ut];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(b5(n,i)&&(n!==void 0||tv(e.base_,t,e.type_)))return!0;Xs(e),cp(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),O5(e,t,n)),!0},deleteProperty(e,t){return Xs(e),yd(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),cp(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Dn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Ys]:!0,[ip]:e.type_!==1||t!=="length",[Nl]:r[Nl],[ba]:n[t]}},defineProperty(){rn(11)},getPrototypeOf(e){return Gi(e.base_)},setPrototypeOf(){rn(12)}},Sa={};for(let e in Hl){let t=Hl[e];Sa[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}Sa.deleteProperty=function(e,t){return Sa.set.call(this,e,t,void 0)};Sa.set=function(e,t,n){return Hl.set.call(this,e[0],t,n,e[0])};function yd(e,t){const n=e[ut];return(n?Dn(n):e)[t]}function M5(e,t,n){var i;const r=pS(t,n);return r?ba in r?r[ba]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function pS(e,t){if(!(t in e))return;let n=Gi(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Gi(n)}}function cp(e){e.modified_||(e.modified_=!0,e.parent_&&cp(e.parent_))}function Xs(e){e.copy_||(e.assigned_=new Map,e.copy_=ap(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var I5=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(fi(t)&&!fi(n)){const o=n;n=t;const a=this;return function(s=o,...u){return a.produce(s,c=>n.call(this,c,...u))}}fi(n)||rn(6),r!==void 0&&!fi(r)&&rn(7);let i;if(dn(t)){const o=ov(this),a=dp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?lp(o):up(o)}return iv(o,r),av(i,o)}else if(!t||!om(t)){if(i=n(t),i===void 0&&(i=t),i===aS&&(i=void 0),this.autoFreeze_&&sm(i,!0),r){const o=[],a=[];Kr(sp).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else rn(1,t)},this.produceWithPatches=(t,n)=>{if(fi(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},vd(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),vd(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),vd(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){dn(e)||rn(8),Gn(e)&&(e=j5(e));const t=ov(this),n=dp(t,e,void 0);return n[ut].isManual_=!0,up(t),n}finishDraft(e,t){const n=e&&e[ut];(!n||!n.isManual_)&&rn(9);const{scope_:r}=n;return iv(r,t),av(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Kr(sp).applyPatches_;return Gn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function dp(e,t,n,r){const[i,o]=tc(t)?Kr(Vl).proxyMap_(t,n):nc(t)?Kr(Vl).proxySet_(t,n):P5(t,n);return((n==null?void 0:n.scope_)??uS()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?T5(n,o,r):o.callbacks_.push(function(s){var c;(c=s.mapSetPlugin_)==null||c.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),i}function j5(e){return Gn(e)||rn(10,e),hS(e)}function hS(e){if(!dn(e)||rc(e))return e;const t=e[ut];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=ap(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=ap(e,!0);return Ju(n,(i,o)=>{zl(n,i,hS(o))},r),t&&(t.finalized_=!1),n}var $5=new I5,mS=$5.produce;function gS(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var D5=gS(),L5=gS,R5=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Al:Al.apply(null,arguments)};function lv(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(zn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>y5(r)&&r.type===e,n}var vS=class Do extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Do.prototype)}static get[Symbol.species](){return Do}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Do(...t[0].concat(this)):new Do(...t.concat(this))}};function uv(e){return dn(e)?mS(e,()=>{}):e}function hs(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function A5(e){return typeof e=="boolean"}var F5=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new vS;return n&&(A5(n)?a.push(D5):a.push(L5(n.extraArgument))),a},N5="RTK_autoBatch",cv=e=>t=>{setTimeout(t,e)},z5=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:cv(10):e.type==="callback"?e.queueNotification:cv(e.timeout),u=()=>{a=!1,o&&(o=!1,l.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),h=r.subscribe(d);return l.add(c),()=>{h(),l.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[N5]),o=!i,o&&(a||(a=!0,s(u))),r.dispatch(c)}finally{i=!0}}})},V5=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new vS(e);return r&&i.push(z5(typeof r=="object"?r:void 0)),i};function B5(e){const t=F5(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(rm(n))s=g5(n);else throw new Error(zn(1));let u;typeof r=="function"?u=r(t):u=t();let c=Al;i&&(c=R5({trace:!1,...typeof i=="object"&&i}));const d=v5(...u),h=V5(d);let f=typeof l=="function"?l(h):h();const g=c(...f);return im(s,a,g)}function yS(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(zn(28));if(l in t)throw new Error(zn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function H5(e){return typeof e=="function"}function U5(e,t){let[n,r,i]=yS(t),o;if(H5(e))o=()=>uv(e());else{const l=uv(e);o=()=>l}function a(l=o(),s){let u=[n[s.type],...r.filter(({matcher:c})=>c(s)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Gn(c)){const f=d(c,s);return f===void 0?c:f}else{if(dn(c))return mS(c,h=>d(h,s));{const h=d(c,s);if(h===void 0){if(c===null)return c;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}}return c},l)}return a.getInitialState=o,a}var W5=Symbol.for("rtk-slice-createasyncthunk");function G5(e,t){return`${e}/${t}`}function Y5({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[W5];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(zn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(q5()):i.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(w,E){const k=typeof w=="string"?w:w.type;if(!k)throw new Error(zn(12));if(k in u.sliceCaseReducersByType)throw new Error(zn(13));return u.sliceCaseReducersByType[k]=E,c},addMatcher(w,E){return u.sliceMatchers.push({matcher:w,reducer:E}),c},exposeAction(w,E){return u.actionCreators[w]=E,c},exposeCaseReducer(w,E){return u.sliceCaseReducersByName[w]=E,c}};s.forEach(w=>{const E=l[w],k={reducerName:w,type:G5(o,w),createNotation:typeof i.reducers=="function"};Z5(E)?J5(k,E,c,t):K5(k,E,c)});function d(){const[w={},E=[],k=void 0]=typeof i.extraReducers=="function"?yS(i.extraReducers):[i.extraReducers],_={...w,...u.sliceCaseReducersByType};return U5(i.initialState,C=>{for(let M in _)C.addCase(M,_[M]);for(let M of u.sliceMatchers)C.addMatcher(M.matcher,M.reducer);for(let M of E)C.addMatcher(M.matcher,M.reducer);k&&C.addDefaultCase(k)})}const h=w=>w,f=new Map,g=new WeakMap;let y;function S(w,E){return y||(y=d()),y(w,E)}function p(){return y||(y=d()),y.getInitialState()}function m(w,E=!1){function k(C){let M=C[w];return typeof M>"u"&&E&&(M=hs(g,k,p)),M}function _(C=h){const M=hs(f,E,()=>new WeakMap);return hs(M,C,()=>{const I={};for(const[$,P]of Object.entries(i.selectors??{}))I[$]=X5(P,C,()=>hs(g,C,p),E);return I})}return{reducerPath:w,getSelectors:_,get selectors(){return _(k)},selectSlice:k}}const x={name:o,reducer:S,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:p,...m(a),injectInto(w,{reducerPath:E,...k}={}){const _=E??a;return w.inject({reducerPath:_,reducer:S},k),{...x,...m(_,!0)}}};return x}}function X5(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var xS=Y5();function q5(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function K5({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!Q5(r))throw new Error(zn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?lv(e,a):lv(e))}function Z5(e){return e._reducerDefinitionType==="asyncThunk"}function Q5(e){return e._reducerDefinitionType==="reducerWithPrepare"}function J5({type:e,reducerName:t},n,r,i){if(!i)throw new Error(zn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:u,options:c}=n,d=i(e,o,c);r.exposeAction(t,d),a&&r.addCase(d.fulfilled,a),l&&r.addCase(d.pending,l),s&&r.addCase(d.rejected,s),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:a||ms,pending:l||ms,rejected:s||ms,settled:u||ms})}function ms(){}function zn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const bS=xS({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=e.items.find(r=>r.id===t.payload.id);n?n.quantity=(n.quantity||0)+1:e.items.push({...t.payload,quantity:1})},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&(n.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:oc,removeFromCart:ej,clearCart:tj,addAllToCart:nj,incrementQuantity:rj,decrementQuantity:ij}=bS.actions,oj=bS.reducer;function wS(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=wS(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Br(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=wS(e))&&(r&&(r+=" "),r+=t);return r}function aj(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}aj(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Aa=e=>typeof e=="number"&&!isNaN(e),Zr=e=>typeof e=="string",Yn=e=>typeof e=="function",sj=e=>Zr(e)||Aa(e),fp=e=>Zr(e)||Yn(e)?e:null,lj=(e,t)=>e===!1||Aa(e)&&e>0?e:t,pp=e=>b.isValidElement(e)||Zr(e)||Yn(e)||Aa(e);function uj(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function cj({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:c,playToast:d}){let h=n?`${e}--${a}`:e,f=n?`${t}--${a}`:t,g=b.useRef(0);return b.useLayoutEffect(()=>{let y=u.current,S=h.split(" "),p=m=>{m.target===u.current&&(d(),y.removeEventListener("animationend",p),y.removeEventListener("animationcancel",p),g.current===0&&m.type!=="animationcancel"&&y.classList.remove(...S))};y.classList.add(...S),y.addEventListener("animationend",p),y.addEventListener("animationcancel",p)},[]),b.useEffect(()=>{let y=u.current,S=()=>{y.removeEventListener("animationend",S),r?uj(y,s,i):s()};c||(l?S():(g.current=1,y.className+=` ${f}`,y.addEventListener("animationend",S)))},[c]),W.createElement(W.Fragment,null,o)}}function dv(e,t){return{content:SS(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function SS(e,t,n=!1){return b.isValidElement(e)&&!Zr(e.type)?b.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Yn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function dj({closeToast:e,theme:t,ariaLabel:n="close"}){return W.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},W.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},W.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function fj({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:c}){let d=i||a&&l===0,h={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(h.transform=`scaleX(${l})`);let f=Br("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${c}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),g=Yn(o)?o({rtl:s,type:r,defaultClassName:f}):Br(f,o),y={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return W.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":d},W.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${c} Toastify__progress-bar--${r}`}),W.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:g,style:h,...y}))}var pj=1,_S=()=>`${pj++}`;function hj(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,u=new Set,c=m=>(u.add(m),()=>u.delete(m)),d=()=>{a=Array.from(s.values()),u.forEach(m=>m())},h=({containerId:m,toastId:x,updateId:w})=>{let E=m?m!==e:e!==1,k=s.has(x)&&w==null;return E||k},f=(m,x)=>{s.forEach(w=>{var E;(x==null||x===w.props.toastId)&&((E=w.toggle)==null||E.call(w,m))})},g=m=>{var x,w;(w=(x=m.props)==null?void 0:x.onClose)==null||w.call(x,m.removalReason),m.isActive=!1},y=m=>{if(m==null)s.forEach(g);else{let x=s.get(m);x&&g(x)}d()},S=()=>{i-=o.length,o=[]},p=m=>{var x,w;let{toastId:E,updateId:k}=m.props,_=k==null;m.staleId&&s.delete(m.staleId),m.isActive=!0,s.set(E,m),d(),n(dv(m,_?"added":"updated")),_&&((w=(x=m.props).onOpen)==null||w.call(x))};return{id:e,props:l,observe:c,toggle:f,removeToast:y,toasts:s,clearQueue:S,buildToast:(m,x)=>{if(h(x))return;let{toastId:w,updateId:E,data:k,staleId:_,delay:C}=x,M=E==null;M&&i++;let I={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([P,j])=>j!=null)),toastId:w,updateId:E,data:k,isIn:!1,className:fp(x.className||l.toastClassName),progressClassName:fp(x.progressClassName||l.progressClassName),autoClose:x.isLoading?!1:lj(x.autoClose,l.autoClose),closeToast(P){s.get(w).removalReason=P,y(w)},deleteToast(){let P=s.get(w);if(P!=null){if(n(dv(P,"removed")),s.delete(w),i--,i<0&&(i=0),o.length>0){p(o.shift());return}d()}}};I.closeButton=l.closeButton,x.closeButton===!1||pp(x.closeButton)?I.closeButton=x.closeButton:x.closeButton===!0&&(I.closeButton=pp(l.closeButton)?l.closeButton:!0);let $={content:m,props:I,staleId:_};l.limit&&l.limit>0&&i>l.limit&&M?o.push($):Aa(C)?setTimeout(()=>{p($)},C):p($)},setProps(m){l=m},setToggle:(m,x)=>{let w=s.get(m);w&&(w.toggle=x)},isToastActive:m=>{var x;return(x=s.get(m))==null?void 0:x.isActive},getSnapshot:()=>a}}var st=new Map,_a=[],hp=new Set,mj=e=>hp.forEach(t=>t(e)),ES=()=>st.size>0;function gj(){_a.forEach(e=>kS(e.content,e.options)),_a=[]}var vj=(e,{containerId:t})=>{var n;return(n=st.get(t||1))==null?void 0:n.toasts.get(e)};function CS(e,t){var n;if(t)return!!((n=st.get(t))!=null&&n.isToastActive(e));let r=!1;return st.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function yj(e){if(!ES()){_a=_a.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||sj(e))st.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=st.get(e.containerId);t?t.removeToast(e.id):st.forEach(n=>{n.removeToast(e.id)})}}var xj=(e={})=>{st.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function kS(e,t){pp(e)&&(ES()||_a.push({content:e,options:t}),st.forEach(n=>{n.buildToast(e,t)}))}function bj(e){var t;(t=st.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function TS(e,t){st.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function wj(e){let t=e.containerId||1;return{subscribe(n){let r=hj(t,e,mj);st.set(t,r);let i=r.observe(n);return gj(),()=>{i(),st.delete(t)}},setProps(n){var r;(r=st.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=st.get(t))==null?void 0:n.getSnapshot()}}}function Sj(e){return hp.add(e),()=>{hp.delete(e)}}function _j(e){return e&&(Zr(e.toastId)||Aa(e.toastId))?e.toastId:_S()}function Fa(e,t){return kS(e,t),t.toastId}function ac(e,t){return{...t,type:t&&t.type||e,toastId:_j(t)}}function sc(e){return(t,n)=>Fa(t,ac(e,n))}function te(e,t){return Fa(e,ac("default",t))}te.loading=(e,t)=>Fa(e,ac("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function Ej(e,{pending:t,error:n,success:r},i){let o;t&&(o=Zr(t)?te.loading(t,i):te.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,c,d)=>{if(c==null){te.dismiss(o);return}let h={type:u,...a,...i,data:d},f=Zr(c)?{render:c}:c;return o?te.update(o,{...h,...f}):te(f.render,{...h,...f}),d},s=Yn(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}te.promise=Ej;te.success=sc("success");te.info=sc("info");te.error=sc("error");te.warning=sc("warning");te.warn=te.warning;te.dark=(e,t)=>Fa(e,ac("default",{theme:"dark",...t}));function Cj(e){yj(e)}te.dismiss=Cj;te.clearWaitingQueue=xj;te.isActive=CS;te.update=(e,t={})=>{let n=vj(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:_S()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Fa(a,o)}};te.done=e=>{te.update(e,{progress:1})};te.onChange=Sj;te.play=e=>TS(!0,e);te.pause=e=>TS(!1,e);function kj(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=b.useRef(wj(e)).current;i(e);let o=(t=b.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:c}=u.props;s.has(c)||s.set(c,[]),s.get(c).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:CS,count:o==null?void 0:o.length}}function Tj(e){let[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:c,closeOnClick:d}=e;bj({id:e.toastId,containerId:e.containerId,fn:n}),b.useEffect(()=>{if(e.pauseOnFocusLoss)return h(),()=>{f()}},[e.pauseOnFocusLoss]);function h(){document.hasFocus()||p(),window.addEventListener("focus",S),window.addEventListener("blur",p)}function f(){window.removeEventListener("focus",S),window.removeEventListener("blur",p)}function g(_){if(e.draggable===!0||e.draggable===_.pointerType){m();let C=o.current;a.canCloseOnClick=!0,a.canDrag=!0,C.style.transition="none",e.draggableDirection==="x"?(a.start=_.clientX,a.removalDistance=C.offsetWidth*(e.draggablePercent/100)):(a.start=_.clientY,a.removalDistance=C.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function y(_){let{top:C,bottom:M,left:I,right:$}=o.current.getBoundingClientRect();_.nativeEvent.type!=="touchend"&&e.pauseOnHover&&_.clientX>=I&&_.clientX<=$&&_.clientY>=C&&_.clientY<=M?p():S()}function S(){n(!0)}function p(){n(!1)}function m(){a.didMove=!1,document.addEventListener("pointermove",w),document.addEventListener("pointerup",E)}function x(){document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",E)}function w(_){let C=o.current;if(a.canDrag&&C){a.didMove=!0,t&&p(),e.draggableDirection==="x"?a.delta=_.clientX-a.start:a.delta=_.clientY-a.start,a.start!==_.clientX&&(a.canCloseOnClick=!1);let M=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;C.style.transform=`translate3d(${M},0)`,C.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function E(){x();let _=o.current;if(a.canDrag&&a.didMove&&_){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}_.style.transition="transform 0.2s, opacity 0.2s",_.style.removeProperty("transform"),_.style.removeProperty("opacity")}}let k={onPointerDown:g,onPointerUp:y};return l&&s&&(k.onMouseEnter=p,e.stacked||(k.onMouseLeave=S)),d&&(k.onClick=_=>{c&&c(_),a.canCloseOnClick&&u(!0)}),{playToast:S,pauseToast:p,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:k}}var Oj=typeof window<"u"?b.useLayoutEffect:b.useEffect,lc=({theme:e,type:t,isLoading:n,...r})=>W.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function Pj(e){return W.createElement(lc,{...e},W.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function Mj(e){return W.createElement(lc,{...e},W.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function Ij(e){return W.createElement(lc,{...e},W.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function jj(e){return W.createElement(lc,{...e},W.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function $j(){return W.createElement("div",{className:"Toastify__spinner"})}var mp={info:Mj,warning:Pj,success:Ij,error:jj,spinner:$j},Dj=e=>e in mp;function Lj({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Yn(r)?i=r({...o,isLoading:n}):b.isValidElement(r)?i=b.cloneElement(r,o):n?i=mp.spinner():Dj(t)&&(i=mp[t](o))),i}var Rj=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=Tj(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:c,hideProgressBar:d,closeToast:h,transition:f,position:g,className:y,style:S,progressClassName:p,updateId:m,role:x,progress:w,rtl:E,toastId:k,deleteToast:_,isIn:C,isLoading:M,closeOnClick:I,theme:$,ariaLabel:P}=e,j=Br("Toastify__toast",`Toastify__toast-theme--${$}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":I}),R=Yn(y)?y({rtl:E,position:g,type:c,defaultClassName:j}):Br(j,y),L=Lj(e),F=!!w||!s,A={closeToast:h,type:c,theme:$},O=null;return a===!1||(Yn(a)?O=a(A):b.isValidElement(a)?O=b.cloneElement(a,A):O=dj(A)),W.createElement(f,{isIn:C,done:_,position:g,preventExitTransition:n,nodeRef:r,playToast:o},W.createElement("div",{id:k,tabIndex:0,onClick:u,"data-in":C,className:R,...i,style:S,ref:r,...C&&{role:x,"aria-label":P}},L!=null&&W.createElement("div",{className:Br("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},L),SS(l,e,!t),O,!e.customProgressBar&&W.createElement(fj,{...m&&!F?{key:`p-${m}`}:{},rtl:E,theme:$,delay:s,isRunning:t,isIn:C,closeToast:h,hide:d,type:c,className:p,controlledProgress:F,progress:w||0})))},Aj=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),Fj=cj(Aj("bounce",!0)),Nj={position:"top-right",transition:Fj,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Na(e){let t={...Nj,...e},n=e.stacked,[r,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=kj(t),{className:u,style:c,rtl:d,containerId:h,hotKeys:f}=t;function g(S){let p=Br("Toastify__toast-container",`Toastify__toast-container--${S}`,{"Toastify__toast-container--rtl":d});return Yn(u)?u({position:S,rtl:d,defaultClassName:p}):Br(p,fp(u))}function y(){n&&(i(!0),te.play())}return Oj(()=>{var S;if(n){let p=o.current.querySelectorAll('[data-in="true"]'),m=12,x=(S=t.position)==null?void 0:S.includes("top"),w=0,E=0;Array.from(p).reverse().forEach((k,_)=>{let C=k;C.classList.add("Toastify__toast--stacked"),_>0&&(C.dataset.collapsed=`${r}`),C.dataset.pos||(C.dataset.pos=x?"top":"bot");let M=w*(r?.2:1)+(r?0:m*_);C.style.setProperty("--y",`${x?M:M*-1}px`),C.style.setProperty("--g",`${m}`),C.style.setProperty("--s",`${1-(r?E:0)}`),w+=C.offsetHeight,E+=.025})}},[r,s,n]),b.useEffect(()=>{function S(p){var m;let x=o.current;f(p)&&((m=x.querySelector('[tabIndex="0"]'))==null||m.focus(),i(!1),te.pause()),p.key==="Escape"&&(document.activeElement===x||x!=null&&x.contains(document.activeElement))&&(i(!0),te.play())}return document.addEventListener("keydown",S),()=>{document.removeEventListener("keydown",S)}},[f]),W.createElement("section",{ref:o,className:"Toastify",id:h,onMouseEnter:()=>{n&&(i(!1),te.pause())},onMouseLeave:y,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((S,p)=>{let m=p.length?{...c}:{...c,pointerEvents:"none"};return W.createElement("div",{tabIndex:-1,className:g(S),"data-stacked":n,style:m,key:`c-${S}`},p.map(({content:x,props:w})=>W.createElement(Rj,{...w,stacked:n,collapseAll:y,isIn:l(w.toastId,w.containerId),key:`t-${w.key}`},x)))}))}const Ea="/Didiv/assets/nofoto-2f8d9d99.png",zj=()=>{const e=no(),[t,n]=b.useState([]);b.useEffect(()=>{fetch("https://backenddidiv-production.up.railway.app/api/products?populate=*").then(o=>o.json()).then(o=>{const a=o.data,l=new Date,s=new Date(l);s.setDate(l.getDate()-1);const u=a.filter(c=>new Date(c.createdAt)>=s);n(u)})},[]),console.log(t);const r=[...t].sort(()=>Math.random()-.5).slice(0,3),i=o=>{e(oc({...o,quantity:1})),te.success(`${o.name} додано в кошик!`)};return!t||t.length===0?null:v.jsxs(JI,{children:[v.jsx(Na,{}),v.jsx(e5,{children:"Нові товари"}),v.jsxs(t5,{children:[r.map(o=>{var a,l;return v.jsxs(n5,{children:[v.jsxs(r5,{to:`/product/${o.id}`,children:[v.jsx(i5,{children:"Новинка"}),v.jsx("img",{src:((l=(a=o.images)==null?void 0:a[0])==null?void 0:l.url)||Ea,alt:o.name,onError:s=>{s.currentTarget.onerror=null,s.currentTarget.src=Ea}}),v.jsx("div",{className:"overlay"})]}),v.jsxs(o5,{children:[v.jsx(a5,{children:o.name}),v.jsxs(s5,{children:[v.jsxs(l5,{children:[o.price," грн"]}),v.jsx(u5,{onClick:()=>i(o),children:v.jsx(Eu,{size:22})})]})]})]},o.id)}),v.jsx(c5,{to:"/catalog/new",children:v.jsxs(d5,{children:[v.jsx("p",{children:"Усі новинки"}),v.jsx(f5,{children:v.jsx(bb,{size:24})})]})})]})]})},Vj=T.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,xd=T.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,bd=T.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,wd=T.div`
  font-size: 14px;
  color: #888;
`,OS=()=>v.jsxs(Vj,{children:[v.jsxs(xd,{children:[v.jsx(bd,{children:"3000+"}),v.jsx(wd,{children:"Перевірених деталей"})]}),v.jsxs(xd,{children:[v.jsx(bd,{children:"6 років"}),v.jsx(wd,{children:"Досвіду на ринку"})]}),v.jsxs(xd,{children:[v.jsx(bd,{children:"100%"}),v.jsx(wd,{children:"Контроль якості"})]})]}),Bj=Fe.div`
  background:var(--background-color);
`,Hj=Fe.div`
  width: 100%;
  max-width: 750px;

  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
 @media screen and (min-width: 1200px) {
    max-width: 1448px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;Fe.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;Fe.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;const Uj=()=>v.jsx(Bj,{children:v.jsxs(Hj,{children:[v.jsx(QI,{}),v.jsx(OS,{}),v.jsx(zj,{}),v.jsx(mM,{})]})}),Wj=T.div`
  width: 100%;
  max-width: 750px;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
   max-width: 1448px;
    padding-left: 0px;
    padding-right: 0px;
  }
`,Gj=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,Yj=T.button`
  height: 30px;
  padding: 5px;
  background: var(--second-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: var(--main-font);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`,Xj=T.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,qj=T.button`
  height: 30px;
  padding: 10px 10px;
  background: var(--second-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: var(--main-font);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`,Kj=T.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,Zj=T.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
  opacity: ${({open:e})=>e?1:0};
  visibility: ${({open:e})=>e?"visible":"hidden"};
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    display: none;
  }
`,Qj=T.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 85%;
  max-width: 400px;
  height: 100%;
  background: white;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({open:e})=>e?"translateX(0)":"translateX(100%)"};
`;T.button`
  font-size: 20px;
  border: none;
  background: none;
  margin-bottom: 20px;
`;const Jj=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #eee;

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
  }
`;T.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;const e$=T.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,t$=T.button`
  width: 100%;
  padding: 14px;
  background: var(--orange-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:active {
    transform: scale(0.98);
  }
`,PS=T.button`
  width: 100%;
  padding: 14px;
  background: var(--light-grey);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 20px;

  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    text-decoration: none;
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.7;
  }
`,n$=T.aside`

        margin-top: 42px;
  width: 240px;
  padding: 16px;
  border-radius: 16px;
  background: var(--second-background);
  @media (min-width: 768px) {
  display: block;
}

@media (max-width: 767px) {
  display: none;
}
`,r$=T.h3`
    display: flex;
    gap: 110px;
margin-bottom: 15px;
font-size: 20px;
font-family: var(--main-font);
  
`;T.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
  font-size: 14px;
`;const i$=T.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,o$=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,a$=T.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,s$=T.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,l$=T.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,u$=T.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,gp=T.input.attrs({type:"checkbox"})`
  display: none;
`,c$=T.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${gp}:checked + & {
    background-color: #85683d;
    border-color: #85683d;
  }

  &::after {
    content: "";
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }

  ${gp}:checked + &::after {
    opacity: 1;
  }
`,MS={bikes:[{type:"checkbox",name:"brand",label:"Бренд"},{type:"checkbox",name:"wheelSize",label:"Розмір колеса"},{type:"range",name:"price",label:"Ціна"}],saddles:[{type:"checkbox",name:"gender",label:"Тип (чол/жін)"},{type:"checkbox",name:"material",label:"Матеріал"},{type:"range",name:"price",label:"Ціна"}],handlebars:[{type:"checkbox",name:"width",label:"Ширина"},{type:"checkbox",name:"material",label:"Матеріал"}],wheels:[{type:"checkbox",name:"brand",label:"Бренд",options:["Shimano","Campagnolo","SRAM"]},{type:"checkbox",name:"size",label:"Розмір колеса",options:["26`","27.5`","29`"]},{type:"range",name:"price",label:"Ціна, грн",min:100,max:1e4},{type:"range",name:"weight",label:"Вага, грам",min:1,max:1e5}]};var vp={},lm={},um={},ao={};Object.defineProperty(ao,"__esModule",{value:!0});ao.Direction=void 0;var fv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(fv||(ao.Direction=fv={}));(function(e){var t=J&&J.__spreadArray||function(P,j,R){if(R||arguments.length===2)for(var L=0,F=j.length,A;L<F;L++)(A||!(L in j))&&(A||(A=Array.prototype.slice.call(j,0,L)),A[L]=j[L]);return P.concat(A||Array.prototype.slice.call(j))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=b,r=ao,i=function(P){var j=P.toString().split(".")[1];return j?j.length:0};e.getStepDecimals=i;function o(P){return P.touches&&P.touches.length||P.changedTouches&&P.changedTouches.length}e.isTouchEvent=o;function a(P,j,R){var L=(j-P)/R,F=8,A=Number(L.toFixed(F));return parseInt(A.toString(),10)===A}e.isStepDivisible=a;function l(P,j,R,L,F,A,O){var D=1e11;if(P=Math.round(P*D)/D,!A){var N=O[j-1],B=O[j+1];if(N&&N>P)return N;if(B&&B<P)return B}if(P>L)return L;if(P<R)return R;var z=Math.floor(P*D-R*D)%Math.floor(F*D),G=Math.floor(P*D-Math.abs(z)),Q=z===0?P:G/D,Z=Math.abs(z/D)<F/2?Q:Q+F,K=(0,e.getStepDecimals)(F);return parseFloat(Z.toFixed(K))}e.normalizeValue=l;function s(P,j,R){return(P-j)/(R-j)}e.relativeValue=s;function u(P){return P===r.Direction.Up||P===r.Direction.Down}e.isVertical=u;function c(P,j,R){if(j>=R)throw new RangeError("min (".concat(j,") is equal/bigger than max (").concat(R,")"));if(P<j)throw new RangeError("value (".concat(P,") is smaller than min (").concat(j,")"));if(P>R)throw new RangeError("value (".concat(P,") is bigger than max (").concat(R,")"))}e.checkBoundaries=c;function d(P,j,R){return P<j?j:P>R?R:P}e.checkValuesAgainstBoundaries=d;function h(P){if(!(P.length<2)&&!P.slice(1).every(function(j,R){return P[R]<=j}))throw new RangeError("values={[".concat(P,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=h;function f(P){var j=window.getComputedStyle(P);return{top:parseInt(j["margin-top"],10),bottom:parseInt(j["margin-bottom"],10),left:parseInt(j["margin-left"],10),right:parseInt(j["margin-right"],10)}}e.getMargin=f;function g(P){var j=window.getComputedStyle(P);return{top:parseInt(j["padding-top"],10)+parseInt(j["border-top-width"],10),bottom:parseInt(j["padding-bottom"],10)+parseInt(j["border-bottom-width"],10),left:parseInt(j["padding-left"],10)+parseInt(j["border-left-width"],10),right:parseInt(j["padding-right"],10)+parseInt(j["border-right-width"],10)}}e.getPaddingAndBorder=g;function y(P,j,R){var L=R?-1:1;P.forEach(function(F,A){return p(F,L*j[A].x,j[A].y)})}e.translateThumbs=y;function S(P,j,R,L){for(var F=0,A=I(P[0],j,R,L),O=1;O<P.length;O++){var D=I(P[O],j,R,L);D<A&&(A=D,F=O)}return F}e.getClosestThumbIndex=S;function p(P,j,R){P.style.transform="translate(".concat(j,"px, ").concat(R,"px)")}e.translate=p;var m=function(P){var j=[],R=null,L=function(){for(var F=[],A=0;A<arguments.length;A++)F[A]=arguments[A];j=F,!R&&(R=requestAnimationFrame(function(){R=null,P.apply(void 0,j)}))};return L};e.schd=m;function x(P,j,R){var L=P.slice(0);return L[j]=R,L}e.replaceAt=x;function w(P){var j=P.values,R=P.colors,L=P.min,F=P.max,A=P.direction,O=A===void 0?r.Direction.Right:A,D=P.rtl,N=D===void 0?!1:D;N&&O===r.Direction.Right?O=r.Direction.Left:N&&r.Direction.Left&&(O=r.Direction.Right);var B=j.slice(0).sort(function(G,Q){return G-Q}).map(function(G){return(G-L)/(F-L)*100}),z=B.reduce(function(G,Q,Z){return"".concat(G,", ").concat(R[Z]," ").concat(Q,"%, ").concat(R[Z+1]," ").concat(Q,"%")},"");return"linear-gradient(".concat(O,", ").concat(R[0]," 0%").concat(z,", ").concat(R[R.length-1]," 100%)")}e.getTrackBackground=w;function E(){}e.voidFn=E;function k(P){throw new Error("Didn't expect to get here")}e.assertUnreachable=k;var _=function(P,j,R,L,F){F===void 0&&(F=function(O){return O});var A=Math.ceil(t([P],Array.from(P.children),!0).reduce(function(O,D){var N=Math.ceil(D.getBoundingClientRect().width);if(D.innerText&&D.innerText.includes(R)&&D.childElementCount===0){var B=D.cloneNode(!0);B.innerHTML=F(j.toFixed(L)),B.style.visibility="hidden",document.body.appendChild(B),N=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return N>O?N:O},P.getBoundingClientRect().width));return A},C=function(P,j,R,L,F,A,O){O===void 0&&(O=function(B){return B});var D=[],N=function(B){var z=_(R[B],L[B],F,A,O),G=j[B].x;j.forEach(function(Q,Z){var K=Q.x,re=_(R[Z],L[Z],F,A,O);B!==Z&&(G>=K&&G<=K+re||G+z>=K&&G+z<=K+re)&&(D.includes(Z)||(D.push(B),D.push(Z),D=t(t([],D,!0),[B,Z],!1),N(Z)))})};return N(P),Array.from(new Set(D.sort()))},M=function(P,j,R,L,F,A){L===void 0&&(L=.1),F===void 0&&(F=" - "),A===void 0&&(A=function(Z){return Z});var O=(0,e.getStepDecimals)(L),D=(0,n.useState)({}),N=D[0],B=D[1],z=(0,n.useState)(A(j[R].toFixed(O))),G=z[0],Q=z[1];return(0,n.useEffect)(function(){if(P){var Z=P.getThumbs();if(Z.length<1)return;var K={},re=P.getOffsets(),we=C(R,re,Z,j,F,O,A),qe=A(j[R].toFixed(O));if(we.length){var Pe=we.reduce(function(pt,lo,Va,uo){return pt.length?t(t([],pt,!0),[re[uo[Va]].x],!1):[re[uo[Va]].x]},[]);if(Math.min.apply(Math,Pe)===re[R].x){var Xt=[];we.forEach(function(pt){Xt.push(j[pt].toFixed(O))}),qe=Array.from(new Set(Xt.sort(function(pt,lo){return parseFloat(pt)-parseFloat(lo)}))).map(A).join(F);var Ft=Math.min.apply(Math,Pe),kt=Math.max.apply(Math,Pe),ni=Z[we[Pe.indexOf(kt)]].getBoundingClientRect().width;K.left="".concat(Math.abs(Ft-(kt+ni))/2,"px"),K.transform="translate(-50%, 0)"}else K.visibility="hidden"}Q(qe),B(K)}},[P,j]),[G,N]};e.useThumbOverlap=M;function I(P,j,R,L){var F=P.getBoundingClientRect(),A=F.left,O=F.top,D=F.width,N=F.height;return u(L)?Math.abs(R-(O+N/2)):Math.abs(j-(A+D/2))}var $=function(){var P,j=((P=navigator.userAgentData)===null||P===void 0?void 0:P.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(j)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=$})(um);var d$=J&&J.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),f$=J&&J.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),p$=J&&J.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),h$=J&&J.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&f$(t,e,n);return p$(t,e),t},pv=J&&J.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(lm,"__esModule",{value:!0});var gs=h$(b),ie=um,De=ao,m$=["ArrowRight","ArrowUp","k","PageUp"],g$=["ArrowLeft","ArrowDown","j","PageDown"],v$=function(e){d$(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=gs.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,u=r.trackRef.current;if(!u)return console.warn("No track element found."),[];var c=u.getBoundingClientRect(),d=(0,ie.getPaddingAndBorder)(u);return r.getThumbs().map(function(h,f){var g={x:0,y:0},y=h.getBoundingClientRect(),S=(0,ie.getMargin)(h);switch(o){case De.Direction.Right:return g.x=(S.left+d.left)*-1,g.y=((y.height-c.height)/2+d.top)*-1,g.x+=c.width*(0,ie.relativeValue)(a[f],l,s)-y.width/2,g;case De.Direction.Left:return g.x=(S.right+d.right)*-1,g.y=((y.height-c.height)/2+d.top)*-1,g.x+=c.width-c.width*(0,ie.relativeValue)(a[f],l,s)-y.width/2,g;case De.Direction.Up:return g.x=((y.width-c.width)/2+S.left+d.left)*-1,g.y=-d.left,g.y+=c.height-c.height*(0,ie.relativeValue)(a[f],l,s)-y.height/2,g;case De.Direction.Down:return g.x=((y.width-c.width)/2+S.left+d.left)*-1,g.y=-d.left,g.y+=c.height*(0,ie.relativeValue)(a[f],l,s)-y.height/2,g;default:return(0,ie.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,ie.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,ie.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,ie.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,ie.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,ie.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,u=o.rtl,c=o.direction,d=r.state.isChanged,h=r.getTargetIndex(i.nativeEvent),f=u||c===De.Direction.Left||c===De.Direction.Down?-1:1;h!==-1&&(m$.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:h,isChanged:!0}),l((0,ie.replaceAt)(a,h,r.normalizeValue(a[h]+f*(i.key==="PageUp"?s*10:s),h)))):g$.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:h,isChanged:!0}),l((0,ie.replaceAt)(a,h,r.normalizeValue(a[h]-f*(i.key==="PageDown"?s*10:s),h)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){d&&r.fireOnFinalChange()}):d&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,u=r.props,c=u.direction,d=u.min,h=u.max,f=u.onChange,g=u.values,y=u.step,S=u.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var p=r.trackRef.current;if(!p)return null;var m=p.getBoundingClientRect(),x=(0,ie.isVertical)(c)?m.height:m.width;if(s[0]!==-1&&s[1]!==-1){var w=i-s[0],E=o-s[1],k=0;switch(c){case De.Direction.Right:case De.Direction.Left:k=w/x*(h-d);break;case De.Direction.Down:case De.Direction.Up:k=E/x*(h-d);break;default:(0,ie.assertUnreachable)(c)}if(S&&(k*=-1),Math.abs(k)>=y/2){for(var _=0;_<r.thumbRefs.length;_++){if(g[_]===h&&Math.sign(k)===1||g[_]===d&&Math.sign(k)===-1)return;var C=g[_]+k;C>h?k=h-g[_]:C<d&&(k=d-g[_])}for(var M=g.slice(0),_=0;_<r.thumbRefs.length;_++)M=(0,ie.replaceAt)(M,_,r.normalizeValue(g[_]+k,_));r.setState({draggedTrackPos:[i,o]}),f(M)}}else{var I=0;switch(c){case De.Direction.Right:I=(i-m.left)/x*(h-d)+d;break;case De.Direction.Left:I=(x-(i-m.left))/x*(h-d)+d;break;case De.Direction.Down:I=(o-m.top)/x*(h-d)+d;break;case De.Direction.Up:I=(x-(o-m.top))/x*(h-d)+d;break;default:(0,ie.assertUnreachable)(c)}S&&(I=h+d-I),Math.abs(g[l]-I)>=y/2&&f((0,ie.replaceAt)(g,l,r.normalizeValue(I,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,u=a.step,c=a.allowOverlap,d=a.values;return(0,ie.normalizeValue)(i,o,l,s,u,c,d)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=gs.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),u=[],c=0;c<r.numOfMarks+1;c++){var d=9999,h=9999;if(r.markRefs[c].current){var f=r.markRefs[c].current.getBoundingClientRect();d=f.height,h=f.width}r.props.direction===De.Direction.Left||r.props.direction===De.Direction.Right?u.push([Math.round(o/r.numOfMarks*c+l-h/2),-Math.round((d-a)/2)]):u.push([Math.round(a/r.numOfMarks*c+s-d/2),-Math.round((h-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,ie.schd)(r.onMouseMove),r.schdOnTouchMove=(0,ie.schd)(r.onTouchMove),r.schdOnEnd=(0,ie.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return gs.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,ie.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,ie.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,ie.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,ie.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,ie.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(c){(0,ie.isStepDivisible)(a,c,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,u=s===void 0?function(){return null}:s,c=r.values,d=r.min,h=r.max,f=r.allowOverlap,g=r.disabled,y=this.state,S=y.draggedThumbIndex,p=y.thumbZIndexes,m=y.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:S>-1?"grabbing":this.props.draggableTrack?(0,ie.isVertical)(this.props.direction)?"ns-resize":"ew-resize":c.length===1&&!g?"pointer":"inherit"},onMouseDown:g?ie.voidFn:this.onMouseDownTrack,onTouchStart:g?ie.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:g,children:pv(pv([],m.map(function(x,w,E){return u({props:{style:n.props.direction===De.Direction.Left||n.props.direction===De.Direction.Right?{position:"absolute",left:"".concat(x[0],"px"),marginTop:"".concat(x[1],"px")}:{position:"absolute",top:"".concat(x[0],"px"),marginLeft:"".concat(x[1],"px")},key:"mark".concat(w),ref:n.markRefs[w]},index:w})}),!0),c.map(function(x,w){var E=n.state.draggedThumbIndex===w;return l({index:w,value:x,isDragged:E,props:{style:{position:"absolute",zIndex:p[w],cursor:g?"inherit":E?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:w,tabIndex:g?void 0:0,"aria-valuemax":f?h:c[w+1]||h,"aria-valuemin":f?d:c[w-1]||d,"aria-valuenow":x,draggable:!1,ref:n.thumbRefs[w],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:g?ie.voidFn:n.onKeyDown,onKeyUp:g?ie.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:De.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(gs.Component);lm.default=v$;(function(e){var t=J&&J.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(lm);e.Range=n.default;var r=um;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=ao;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(vp);const y$=T.div`
  padding: 20px 0;
`,x$=T.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,hv=T.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid  #85683d;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color:  #583d2d;
  }
`;T.span`
  display: flex;
  align-items: center;
  color: #999;
`;const b$=T.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,w$=T.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,ai=1340,si=100340,ko=100,IS=()=>{const[e,t]=b.useState([ai,si]),n=(i,o)=>{const a=o===""?"":Number(o);t(l=>{const s=[...l];return s[i]=a,s})},r=i=>{t(o=>{const a=[...o];return i===0?((a[0]===""||a[0]<ai)&&(a[0]=ai),a[0]>o[1]-ko&&(a[0]=o[1]-ko)):((a[1]===""||a[1]>si)&&(a[1]=si),a[1]<o[0]+ko&&(a[1]=o[0]+ko)),a})};return v.jsxs(y$,{children:[v.jsxs(x$,{children:[v.jsx(hv,{type:"number",value:e[0],min:ai,max:e[1],onChange:i=>n(0,i.target.value),onBlur:()=>r(0)}),v.jsx(hv,{type:"number",value:e[1],min:e[0],max:si,onChange:i=>n(1,i.target.value),onBlur:()=>r(1)})]}),v.jsx(vp.Range,{values:e,step:ko,min:ai,max:si,onChange:i=>t(i),renderTrack:({props:i,children:o})=>v.jsx(b$,{...i,background:vp.getTrackBackground({values:e,colors:["#ddd","#85683d","#ddd"],min:ai,max:si}),children:o}),renderThumb:({props:i})=>v.jsx(w$,{...i})})]})},S$=({category:e,selectedFilters:t,setSelectedFilters:n})=>{const r=MS[e]||[],[i,o]=b.useState({}),a=c=>{o(d=>({...d,[c]:!d[c]}))},l=(c,d)=>{n(h=>{const f=h[c]||[];return f.includes(d)?{...h,[c]:f.filter(g=>g!==d)}:{...h,[c]:[...f,d]}})},s=Object.values(t).some(c=>Array.isArray(c)&&c.length>0),u=()=>{s&&n({})};return console.log(s),v.jsxs(n$,{children:[v.jsxs(r$,{children:["Фільтри ",v.jsx(Sb,{size:20})]}),(r||[]).map(c=>{var h;const d=!!i[c.name];return v.jsxs(i$,{children:[v.jsxs(o$,{onClick:()=>a(c.name),children:[v.jsx(a$,{children:c.label}),v.jsx(s$,{isOpen:d})]}),v.jsxs(l$,{isOpen:d,children:[c.type==="checkbox"&&((h=c.options)==null?void 0:h.map(f=>{var g;return v.jsxs(u$,{children:[v.jsx(gp,{checked:((g=t[c.name])==null?void 0:g.includes(f))||!1,onChange:()=>l(c.name,f)}),v.jsx(c$,{}),f]},f)})),c.type==="range"&&v.jsx(IS,{})]})]},c.name)}),v.jsx(PS,{onClick:u,disabled:!s,children:"Скинути обрані фільтри"})]})},_$=T.aside`
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
`;T.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;const E$=T.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,C$=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,k$=T.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,T$=T.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,O$=T.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,P$=T.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,yp=T.input.attrs({type:"checkbox"})`
  display: none;
`,M$=T.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${yp}:checked + & {
    background-color: #85683d;
    border-color: #85683d;
  }

  &::after {
    content: "";
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }

  ${yp}:checked + &::after {
    opacity: 1;
  }
`,I$=({category:e,selectedFilters:t,setSelectedFilters:n})=>{const r=MS[e]||[],[i,o]=b.useState({}),a=s=>{o(u=>({...u,[s]:!u[s]}))},l=(s,u)=>{n(c=>{const d=c[s]||[];return d.includes(u)?{...c,[s]:d.filter(h=>h!==u)}:{...c,[s]:[...d,u]}})};return v.jsx(_$,{children:(r||[]).map(s=>{var c;const u=!!i[s.name];return v.jsxs(E$,{children:[v.jsxs(C$,{onClick:()=>a(s.name),children:[v.jsx(k$,{children:s.label}),v.jsx(T$,{isOpen:u})]}),v.jsxs(O$,{isOpen:u,children:[s.type==="checkbox"&&((c=s.options)==null?void 0:c.map(d=>{var h;return v.jsxs(P$,{children:[v.jsx(yp,{checked:((h=t[s.name])==null?void 0:h.includes(d))||!1,onChange:()=>l(s.name,d)}),v.jsx(M$,{}),d]},d)})),s.type==="range"&&v.jsx(IS,{})]})]},s.name)})})};T.div``;const j$=T.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  gap: 24px;
  width: 100%;
  max-width: 750px;
  padding: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 750px;
    padding: 10px;
    grid-template-columns: repeat(2, 1fr);

    gap: 10px;
  }

  @media (min-width: 768px) {
    margin-top: 32px;
    grid-template-columns: repeat(3, 1fr);
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    padding-left: 0;
    padding-right: 0;
    margin-left: 30px;
    max-width: 1340px;
  }
`,$$=T.div`
font-family: var(--second-font);
font-weight: 500;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  padding-bottom: 30px;

  &:hover {
    @media screen and (min-width: 768px) {
      transform: scale(1.05);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    }

    div.card-buttons {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,D$=T.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,L$=T.div`
  padding: 16px;
`,R$=T.p`
font-family: var(--second-font);
font-weight: 500;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 8px;
`,A$=T.p`
  font-size: 16px;
  color: #555;
`,F$=T.p`
  font-size: 16px;
  color: #555;
`,N$=T.div.attrs({className:"card-buttons"})`
  position: static;
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  opacity: 1;

  @media screen and (min-width: 768px) {
    position: absolute;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s;
  }
`,mv=T.button`
  padding: 6px 5px;
  border: none;
  border-radius: 6px;
  background-color: transparent;
  color: white;
  font-weight: 500;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
    opacity: 0.8;
  }
`;T.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;T.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;const jS=xS({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]}}}),{toggleFavorite:uc,clearFavorite:z$}=jS.actions,V$=jS.reducer,B$=({category:e,selectedFilters:t={}})=>{const[n,r]=b.useState([]);b.useEffect(()=>{fetch("https://backenddidiv-production.up.railway.app/api/products?populate=*").then(c=>c.json()).then(c=>r(c.data))},[]),console.log(n);let i=n.filter(c=>{var d;return((d=c.category)==null?void 0:d.id_title)===e});console.log(i);const o=nu(),a=no(),l=Nn(c=>c.favorites.items),s=(c,d)=>{d.stopPropagation(),a(oc({...c,quantity:1})),te.success(`${c.name} додано в кошик!`)},u=(c,d)=>{d.stopPropagation();const h=l.some(f=>f.id===c.id);a(uc(c)),h?te.warning(`${c.name} видалено з обраного`):te.info(`${c.name} додано в обране`)};return Object.keys(t).forEach(c=>{const d=t[c];Array.isArray(d)&&d.length>0&&(i=i.filter(h=>d.includes(h[c]))),(typeof d=="string"||typeof d=="number")&&c==="price"&&(i=i.filter(h=>h.price<=Number(d)))}),v.jsxs(v.Fragment,{children:[v.jsx(Na,{autoClose:1500}),v.jsx(j$,{children:i.map(c=>{const d=l.some(h=>h.id===c.id);return v.jsxs($$,{onClick:()=>o(`/product/${c.id}`),style:{cursor:"pointer"},children:[v.jsx(D$,{src:c.images[0].url,alt:c.name,onError:h=>{h.currentTarget.onerror=null,h.currentTarget.src=Ea}}),v.jsxs(L$,{children:[v.jsx(R$,{children:c.name}),v.jsxs(A$,{children:[c.price," грн"]}),c.weight&&v.jsxs(F$,{children:[c.weight," грам"]})]}),v.jsxs(N$,{children:[v.jsx(mv,{onClick:h=>s(c,h),children:v.jsx(Eu,{size:24,color:"black"})}),v.jsx(mv,{onClick:h=>u(c,h),children:v.jsx(wb,{size:24,fill:d?"#ff4d4f":"none",color:d?"#ff4d4f":"#000000"})})]})]},c.id)})})]})},H$=()=>{const[e,t]=b.useState({});console.log(e);const{category:n}=F1(),[r,i]=b.useState(!1);console.log(n);const o=Object.values(e).some(l=>Array.isArray(l)&&l.length>0),a=()=>{o&&t({})};return v.jsxs(Wj,{children:[v.jsxs(Gj,{children:[v.jsxs(Yj,{onClick:()=>i(!0),children:["Фільтр",v.jsx(Xj,{children:v.jsx("use",{href:`${cn}#icon-filter`})})]}),v.jsxs(qj,{onClick:()=>i(!0),children:["Сортування",v.jsx(Kj,{children:v.jsx("use",{href:`${cn}#icon-sort`})})]})]}),v.jsx(S$,{category:n,selectedFilters:e,setSelectedFilters:t}),v.jsx(B$,{category:n,selectedFilters:e}),r&&v.jsx(Zj,{onClick:()=>i(!1),open:r,children:v.jsxs(Qj,{onClick:l=>l.stopPropagation(),open:r,children:[v.jsxs(Jj,{children:[v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[v.jsx(Sb,{size:20}),v.jsx("h2",{children:"Фільтри"})]}),v.jsx(Eb,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),v.jsx(I$,{category:n,selectedFilters:e,setSelectedFilters:t}),v.jsxs(e$,{children:[v.jsx(PS,{onClick:a,disabled:!o,children:"Скинути обрані фільтри"}),v.jsx(t$,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})},gv=T.div`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  padding: 20px;
  font-family: var(--main-font);
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
    padding-left: 0px;
    padding-right: 0px;
  }
`,U$=T.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,W$=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,G$=T.div``;T.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const Y$=T.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,X$=T.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,q$=T.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,K$=T.div``,Z$=T.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,Q$=T.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,J$=T.span`
  color: #27ae60;
  font-size: 17px;
`,eD=T.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,tD=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,nD=T.span`
  font-size: 32px;
  font-weight: 700;
`;T.span`
  text-decoration: line-through;
  color: #999;
  font-size: 18px;
`;const rD=T.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,iD=T.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 20px;
  overflow: hidden;
  font-family: var(--second-font);
  font-weight: 500;
  button {
    border: none;
    background: none;
    padding: 10px 15px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
  span {
    padding: 0 10px;
    min-width: 30px;
    text-align: center;
  }
`,oD=T.button`
  flex-grow: 1;
  background: var(--orange-color);
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background:var(--yellow-color);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin-left: 10px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;T.button`
  width: 100%;
  background: none;
  border: none;
  color: #2980b9;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
`;T.div`
  margin-top: 30px;
`;T.p`
  font-weight: bold;
  margin-bottom: 10px;
`;T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;T.div`
  padding: 8px 15px;
  border: 1px solid ${e=>e.active?"#27ae60":"#ddd"};
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  background: ${e=>e.active?"#f0fff4":"white"};
`;const aD=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,vs=T.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  span {
    color: #888;
    margin-bottom: 4px;
  }
  b {
    color: #333;
  }
`,sD=T.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`,lD=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,uD=T.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,vv=T.button`
  padding: 10px 0;
  cursor: pointer;
  font-weight: 500;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid #717171;

  border-bottom: ${({active:e})=>e?"2px solid var(--second-color)":"none"};
  color: ${({active:e})=>e?"var(--second-color)":"#717171"};
  cursor: pointer;
  font-weight: ${({active:e})=>e?"bold":"normal"};
`,cD=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,dD=T.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,fD=T.button`
  background: ${({$active:e})=>e?"var(--red-color)":"transparent"};
  font-weight: 500;
  color: ${({$active:e})=>e?"white":"black"};

  border: 1px solid #ddd;
  border-radius: 50px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  flex-grow: 1;
  span {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  &:hover {
    border-color: #bbb;
  }
`,pD=T.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,$S="carousel",DS="controller",hD="navigation",mD="no-scroll",cm="portal",gD="root",LS="toolbar",yv="zoom",Sd="loading",_d="error",Ed="complete",vD="placeholder",yD=e=>`active-slide-${e}`,xD="fullsize",dm="flex_center",bD="no_scroll",RS="no_scroll_padding",fm="slide",AS="slide_wrapper",wD="slide_wrapper_interactive",Dr="prev",Lr="next",xv="swipe",Yi="close",FS="onPointerDown",NS="onPointerMove",zS="onPointerUp",VS="onPointerLeave",BS="onPointerCancel",pm="onKeyDown",SD="onKeyUp",hm="onWheel",_D="Escape",ED="ArrowLeft",CD="ArrowRight",kD="button",xp="icon",HS="contain",bv="cover",US="Unknown action type",WS="yarl__";function Cn(...e){return e.filter(Boolean).join(" ")}function oe(e){return`${WS}${e}`}function gt(e){return`--${WS}${e}`}function za(e,t){return`${e}${t?`_${t}`:""}`}function mm(e){return t=>za(e,t)}function Xi(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function TD(e,t,n){return Xi(e,"{index} of {total}").replace(/\{index}/g,`${bm(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function gm(...e){return()=>{e.forEach(t=>{t()})}}function Zn(e,t,n){return()=>{const r=b.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function vm(){return typeof window<"u"}function ym(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function so(e){return e.type===void 0||e.type==="image"}function xm(e,t){return e.imageFit===bv||e.imageFit!==HS&&t===bv}function cc(e){return typeof e=="string"?Number.parseInt(e,10):e}function Ul(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=cc(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function OD(e,t){const n=Ul(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function PD(){return(vm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function bm(e,t){return t>0?(e%t+t)%t:0}function GS(e){return e.length>0}function YS(e,t){return e[bm(t,e.length)]}function bp(e,t){return GS(e)?YS(e,t):void 0}function MD(e){return so(e)?e.src:void 0}function ID(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=b.isValidElement(n)?b.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function jD(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const $D=Number(b.version.split(".")[0])>=19;function DD(e){return{inert:$D?e:e?"":void 0}}function LD(e){e.scrollTop}const wp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[Yi]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:HS,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Tr(e,t){return{name:e,component:t}}function Ne(e,t){return{module:e,children:t}}function XS(e,t,n){return e.module.name===t?n(e):e.children?[Ne(e.module,e.children.flatMap(r=>{var i;return(i=XS(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function li(e,t,n){return e.flatMap(r=>{var i;return(i=XS(r,t,n))!==null&&i!==void 0?i:[]})}function RD(e,t=[],n=[]){let r=e;const i=f=>{const g=[...r];for(;g.length>0;){const y=g.pop();if((y==null?void 0:y.module.name)===f)return!0;y!=null&&y.children&&g.push(...y.children)}return!1},o=(f,g)=>{if(f===""){r=[Ne(g,r)];return}r=li(r,f,y=>[Ne(g,[y])])},a=(f,g)=>{r=li(r,f,y=>[Ne(y.module,[Ne(g,y.children)])])},l=(f,g,y)=>{r=li(r,f,S=>{var p;return[Ne(S.module,[...y?[Ne(g)]:[],...(p=S.children)!==null&&p!==void 0?p:[],...y?[]:[Ne(g)]])]})},s=(f,g,y)=>{r=li(r,f,S=>[...y?[Ne(g)]:[],S,...y?[]:[Ne(g)]])},u=f=>{a(DS,f)},c=(f,g)=>{r=li(r,f,y=>[Ne(g,y.children)])},d=f=>{r=li(r,f,g=>g.children)},h=f=>{n.push(f)};return t.forEach(f=>{f({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:u,replace:c,remove:d,augment:h})}),{config:r,augmentation:f=>n.reduce((g,y)=>y(g),f)}}const qS=b.createContext(null),KS=Zn("useA11yContext","A11yContext",qS);function AD({children:e}){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const u=c=>d=>{var h;d.currentTarget.contains(d.relatedTarget)||n(c),(h=c?l:s)===null||h===void 0||h(d)};return{onFocus:u(!0),onBlur:u(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return b.createElement(qS.Provider,{value:o},e)}const ZS=b.createContext(null),dc=Zn("useDocument","DocumentContext",ZS);function FD({nodeRef:e,children:t}){const n=b.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return b.createElement(ZS.Provider,{value:n},t)}const QS=b.createContext(null),fc=Zn("useEvents","EventsContext",QS);function ND({children:e}){const[t]=b.useState({});b.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=b.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(u=>u!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(u=>u(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return b.createElement(QS.Provider,{value:n},e)}const JS=b.createContext(null),Yt=Zn("useLightboxProps","LightboxPropsContext",JS);function zD({children:e,...t}){return b.createElement(JS.Provider,{value:t},e)}const e_=b.createContext(null),Or=Zn("useLightboxState","LightboxStateContext",e_),t_=b.createContext(null),VD=Zn("useLightboxDispatch","LightboxDispatchContext",t_);function BD(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=bm(i,n.length),a=bp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:bp(t.slides,t.index)}:e;default:throw new Error(US)}}function HD({slides:e,index:t,children:n}){const[r,i]=b.useReducer(BD,{slides:e,currentIndex:t,globalIndex:t,currentSlide:bp(e,t)}),[o,a]=b.useState(e),[l,s]=b.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const u=b.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return b.createElement(t_.Provider,{value:i},b.createElement(e_.Provider,{value:u},n))}const n_=b.createContext(null),pc=Zn("useTimeouts","TimeoutsContext",n_);function UD({children:e}){const[t]=b.useState([]);b.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=b.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return b.createElement(n_.Provider,{value:n},e)}const wm=b.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:u,labels:c}=Yt(),d=Xi(c,t);return b.createElement("button",{ref:s,type:"button",title:d,"aria-label":d,className:Cn(oe(kD),n),onClick:o,style:{...a,...u.button},...l},i?i():b.createElement(r,{className:oe(xp),style:u.icon}))});function WD(e,t){const n=r=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function ti(e,t){return WD(e,b.createElement("g",{fill:"currentColor"},b.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const GD=ti("Close",b.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),YD=ti("Previous",b.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),XD=ti("Next",b.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),qD=ti("Loading",b.createElement(b.Fragment,null,Array.from({length:8}).map((e,t,n)=>b.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),KD=ti("Error",b.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),kn=vm()?b.useLayoutEffect:b.useEffect;function Sm(){const[e,t]=b.useState(!1);return b.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function ZD(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(cc);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function wv(e,t){const n=b.useRef(void 0),r=b.useRef(void 0),i=Sm();return kn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:u,easing:c,onfinish:d}=t(n.current,e.current.getBoundingClientRect(),ZD(e.current))||{};if(s&&u){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:u,easing:c})}catch(h){console.error(h)}r.current&&(r.current.onfinish=()=>{r.current=void 0,d==null||d()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function r_(){const e=b.useRef(null),t=b.useRef(void 0),[n,r]=b.useState();return{setContainerRef:b.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=u=>parseFloat(u)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function qs(){const e=b.useRef(void 0),{setTimeout:t,clearTimeout:n}=pc();return b.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function de(e){const t=b.useRef(e);return kn(()=>{t.current=e}),b.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Sv(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Sp(e,t){return b.useMemo(()=>e==null&&t==null?null:n=>{Sv(e,n),Sv(t,n)},[e,t])}function QD(e,t=!1){const n=b.useRef(!1);kn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=b.useCallback(()=>{n.current=!0},[]),i=b.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function _m(){const[e,t]=b.useState(!1);return kn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function JD(){const[e]=b.useState({}),t=b.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=b.useMemo(()=>({onPointerDown:i=>t(FS,i),onPointerMove:i=>t(NS,i),onPointerUp:i=>t(zS,i),onPointerLeave:i=>t(VS,i),onPointerCancel:i=>t(BS,i),onKeyDown:i=>t(pm,i),onKeyUp:i=>t(SD,i),onWheel:i=>t(hm,i)}),[t]),r=b.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function _v(e,t){const n=b.useRef(0),r=qs(),i=de((...o)=>{n.current=Date.now(),e(o)});return b.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const Cd=mm("slide"),kd=mm("slide_image");function Wl({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:u}){var c,d,h,f,g,y,S,p;const[m,x]=b.useState(Sd),{publish:w}=fc(),{setTimeout:E}=pc(),k=b.useRef(null);b.useEffect(()=>{t===0&&w(yD(m))},[t,m,w]);const _=de(z=>{("decode"in z?z.decode():Promise.resolve()).catch(()=>{}).then(()=>{z.parentNode&&(x(Ed),E(()=>{l==null||l(z)},0))})}),C=b.useCallback(z=>{k.current=z,z!=null&&z.complete&&_(z)},[_]),M=b.useCallback(z=>{_(z.currentTarget)},[_]),I=de(()=>{x(_d),s==null||s()}),$=xm(e,i),P=(z,G)=>Number.isFinite(z)?z:G,j=P(Math.max(...((d=(c=e.srcSet)===null||c===void 0?void 0:c.map(z=>z.width))!==null&&d!==void 0?d:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((h=k.current)===null||h===void 0?void 0:h.naturalWidth)||0),R=P(Math.max(...((g=(f=e.srcSet)===null||f===void 0?void 0:f.map(z=>z.height))!==null&&g!==void 0?g:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((y=k.current)===null||y===void 0?void 0:y.naturalHeight)||0),L=j&&R?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${R}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},F=(S=e.srcSet)===null||S===void 0?void 0:S.slice().sort((z,G)=>z.width-G.width).map(z=>`${z.src} ${z.width}w`).join(", "),A=()=>r&&!$&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,O=F&&r&&vm()?`${Math.round(Math.min(A(),r.width))}px`:void 0,{style:D,className:N,...B}=(typeof o=="function"?o(e):o)||{};return b.createElement(b.Fragment,null,b.createElement("img",{ref:C,onLoad:M,onError:I,onClick:a,draggable:!1,className:Cn(oe(kd()),$&&oe(kd("cover")),m!==Ed&&oe(kd("loading")),N),style:{...L,...u,...D},...B,alt:(p=e.alt)!==null&&p!==void 0?p:"",sizes:O,srcSet:F,src:e.src}),m!==Ed&&b.createElement("div",{className:oe(Cd(vD))},m===Sd&&(n!=null&&n.iconLoading?n.iconLoading():b.createElement(qD,{className:Cn(oe(xp),oe(Cd(Sd)))})),m===_d&&(n!=null&&n.iconError?n.iconError():b.createElement(KD,{className:Cn(oe(xp),oe(Cd(_d)))}))))}const eL=b.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=b.useRef(null),{trackFocusWithin:s}=KS();return b.createElement(FD,{nodeRef:l},b.createElement("div",{ref:Sp(a,l),className:Cn(oe("root"),t),...s(r,i),...o},n))});var et;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(et||(et={}));function i_(e,t,n,r,i){b.useEffect(()=>i?()=>{}:gm(e(FS,t),e(NS,n),e(zS,r),e(VS,r),e(BS,r)),[e,t,n,r,i])}var Qt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(Qt||(Qt={}));const Td=30;function tL({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,u,c,d,h,f,g,y,S){const p=b.useRef(0),m=b.useRef([]),x=b.useRef(void 0),w=b.useRef(0),E=b.useRef(Qt.NONE),k=b.useCallback(j=>{x.current===j.pointerId&&(x.current=void 0,E.current=Qt.NONE);const R=m.current;R.splice(0,R.length,...R.filter(L=>L.pointerId!==j.pointerId))},[]),_=b.useCallback(j=>{k(j),j.persist(),m.current.push(j)},[k]),C=b.useCallback(j=>m.current.find(({pointerId:R})=>j.pointerId===R),[]),M=de(j=>{_(j)}),I=(j,R)=>d&&j>R||c&&j<-R,$=de(j=>{const R=C(j);if(R)if(x.current===j.pointerId){const L=Date.now()-w.current,F=p.current;E.current===Qt.SWIPE?Math.abs(F)>.3*i||Math.abs(F)>5&&L<o?s(F,L):u(F):E.current===Qt.PULL&&(I(F,2*Td)?g(F,L):y(F)),p.current=0,E.current=Qt.NONE}else{const{target:L}=j;t&&L instanceof HTMLElement&&L===R.target&&(L.classList.contains(oe(fm))||L.classList.contains(oe(AS)))&&S()}k(j)}),P=de(j=>{const R=C(j);if(R){const L=x.current===j.pointerId;if(j.buttons===0){L&&p.current!==0?$(j):k(R);return}const F=j.clientX-R.clientX,A=j.clientY-R.clientY;if(x.current===void 0){const O=D=>{_(j),x.current=j.pointerId,w.current=Date.now(),E.current=D};Math.abs(F)>Math.abs(A)&&Math.abs(F)>Td&&r(F)?e||(O(Qt.SWIPE),a()):Math.abs(A)>Math.abs(F)&&I(A,Td)&&(O(Qt.PULL),h())}else L&&(E.current===Qt.SWIPE?(p.current=F,l(F)):E.current===Qt.PULL&&(p.current=A,f(A)))}});i_(n,M,P,$)}function nL({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=b.useRef(null),r=de(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return b.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function rL(e,t,n,r,i,o,a,l,s){const u=b.useRef(0),c=b.useRef(0),d=b.useRef(void 0),h=b.useRef(void 0),f=b.useRef(0),g=b.useRef(void 0),y=b.useRef(0),{setTimeout:S,clearTimeout:p}=pc(),m=b.useCallback(()=>{d.current&&(p(d.current),d.current=void 0)},[p]),x=b.useCallback(()=>{h.current&&(p(h.current),h.current=void 0)},[p]),w=de(()=>{e!==et.SWIPE&&(u.current=0,y.current=0,m(),x())});b.useEffect(w,[e,w]);const E=de(_=>{h.current=void 0,u.current===_&&s(u.current)}),k=de(_=>{if(_.ctrlKey||Math.abs(_.deltaY)>Math.abs(_.deltaX))return;const C=M=>{f.current=M,p(g.current),g.current=M>0?S(()=>{f.current=0,g.current=void 0},300):void 0};if(e===et.NONE){if(Math.abs(_.deltaX)<=1.2*Math.abs(f.current)){C(_.deltaX);return}if(!n(-_.deltaX))return;if(c.current+=_.deltaX,m(),Math.abs(c.current)>30)c.current=0,C(0),y.current=Date.now(),o();else{const M=c.current;d.current=S(()=>{d.current=void 0,M===c.current&&(c.current=0)},i)}}else if(e===et.SWIPE){let M=u.current-_.deltaX;if(M=Math.min(Math.abs(M),r)*Math.sign(M),u.current=M,a(M),x(),Math.abs(M)>.2*r){C(_.deltaX),l(M,Date.now()-y.current);return}h.current=S(()=>E(M),2*i)}else C(_.deltaX)});b.useEffect(()=>t(hm,k),[t,k])}const Ev=mm("container"),o_=b.createContext(null),Qn=Zn("useController","ControllerContext",o_);function iL({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:u,closeOnPullDown:c,preventDefaultWheelX:d,preventDefaultWheelY:h}=o,[f,g]=b.useState(),y=Or(),S=VD(),[p,m]=b.useState(et.NONE),x=b.useRef(0),w=b.useRef(0),E=b.useRef(1),{registerSensors:k,subscribeSensors:_}=JD(),{subscribe:C,publish:M}=fc(),I=qs(),$=qs(),P=qs(),{containerRef:j,setContainerRef:R,containerRect:L}=r_(),F=Sp(nL({preventDefaultWheelX:d,preventDefaultWheelY:h}),R),A=b.useRef(null),O=Sp(A,void 0),{getOwnerDocument:D}=dc(),N=_m(),B=U=>(N?-1:1)*(typeof U=="number"?U:1),z=de(()=>{var U;return(U=j.current)===null||U===void 0?void 0:U.focus()}),G=de(()=>t),Q=de(()=>y),Z=b.useCallback(U=>M(Dr,U),[M]),K=b.useCallback(U=>M(Lr,U),[M]),re=b.useCallback(()=>M(Yi),[M]),we=U=>!(r.finite&&(B(U)>0&&y.currentIndex===0||B(U)<0&&y.currentIndex===y.slides.length-1)),qe=U=>{var ye;x.current=U,(ye=j.current)===null||ye===void 0||ye.style.setProperty(gt("swipe_offset"),`${Math.round(U)}px`)},Pe=U=>{var ye,it;w.current=U,E.current=(()=>{const co=(()=>c&&U>0?U:u&&U<0?-U:0)();return Math.min(Math.max(ym(1-co/60*(1-.5),2),.5),1)})(),(ye=j.current)===null||ye===void 0||ye.style.setProperty(gt("pull_offset"),`${Math.round(U)}px`),(it=j.current)===null||it===void 0||it.style.setProperty(gt("pull_opacity"),`${E.current}`)},{prepareAnimation:Xt}=wv(A,(U,ye,it)=>{if(A.current&&L)return{keyframes:[{transform:`translate(0, ${U.rect.y-ye.y+it.y}px)`,opacity:U.opacity},{transform:"translate(0, 0)",opacity:1}],duration:U.duration,easing:i.easing.fade}}),Ft=(U,ye)=>{if(u||c){Pe(U);let it=0;A.current&&(it=i.fade*(ye?2:1),Xt({rect:A.current.getBoundingClientRect(),opacity:E.current,duration:it})),P(()=>{Pe(0),m(et.NONE)},it),m(et.ANIMATION),ye||re()}},{prepareAnimation:kt,isAnimationPlaying:ni}=wv(A,(U,ye,it)=>{var fn;if(A.current&&L&&(!((fn=y.animation)===null||fn===void 0)&&fn.duration)){const Nt=Ul(r.spacing),co=(Nt.percent?Nt.percent*L.width/100:Nt.pixel)||0;return{keyframes:[{transform:`translate(${B(y.globalIndex-U.index)*(L.width+co)+U.rect.x-ye.x+it.x}px, 0)`},{transform:"translate(0, 0)"}],duration:y.animation.duration,easing:y.animation.easing}}}),pt=de(U=>{var ye,it;const fn=U.offset||0,Nt=fn?i.swipe:(ye=i.navigation)!==null&&ye!==void 0?ye:i.swipe,co=!fn&&!ni()?i.easing.navigation:i.easing.swipe;let{direction:Ba}=U;const Ha=(it=U.count)!==null&&it!==void 0?it:1;let yc=et.ANIMATION,pn=Nt*Ha;if(!Ba){const fo=L==null?void 0:L.width,Am=U.duration||0,bc=fo?Nt/fo*Math.abs(fn):Nt;Ha!==0?(Am<bc?pn=pn/bc*Math.max(Am,bc/5):fo&&(pn=Nt/fo*(fo-Math.abs(fn))),Ba=B(fn)>0?Dr:Lr):pn=Nt/2}let xc=0;Ba===Dr?we(B(1))?xc=-Ha:(yc=et.NONE,pn=Nt):Ba===Lr&&(we(B(-1))?xc=Ha:(yc=et.NONE,pn=Nt)),pn=Math.round(pn),$(()=>{qe(0),m(et.NONE)},pn),A.current&&kt({rect:A.current.getBoundingClientRect(),index:y.globalIndex}),m(yc),M(xv,{type:"swipe",increment:xc,duration:pn,easing:co})});b.useEffect(()=>{var U,ye;!((U=y.animation)===null||U===void 0)&&U.increment&&(!((ye=y.animation)===null||ye===void 0)&&ye.duration)&&I(()=>S({type:"swipe",increment:0}),y.animation.duration)},[y.animation,S,I]);const lo=[_,we,(L==null?void 0:L.width)||0,i.swipe,()=>m(et.SWIPE),U=>qe(U),(U,ye)=>pt({offset:U,duration:ye,count:1}),U=>pt({offset:U,count:0})],Va=[()=>{c&&m(et.PULL)},U=>Pe(U),U=>Ft(U),U=>Ft(U,!0)];tL(o,...lo,u,c,...Va,re),rL(p,...lo);const uo=de(()=>{o.focus&&D().querySelector(`.${oe(cm)} .${oe(Ev())}`)&&z()});b.useEffect(uo,[uo]);const Rm=de(()=>{var U;(U=a.view)===null||U===void 0||U.call(a,{index:y.currentIndex})});b.useEffect(Rm,[y.globalIndex,Rm]),b.useEffect(()=>gm(C(Dr,U=>pt({direction:Dr,...U})),C(Lr,U=>pt({direction:Lr,...U})),C(xv,U=>S(U))),[C,pt,S]);const Z_=b.useMemo(()=>({prev:Z,next:K,close:re,focus:z,slideRect:L?OD(L,r.padding):{width:0,height:0},containerRect:L||{width:0,height:0},subscribeSensors:_,containerRef:j,setCarouselRef:O,toolbarWidth:f,setToolbarWidth:g}),[Z,K,re,z,_,L,j,O,f,g,r.padding]);return b.useImperativeHandle(o.ref,()=>({prev:Z,next:K,close:re,focus:z,getLightboxProps:G,getLightboxState:Q}),[Z,K,re,z,G,Q]),b.createElement("div",{ref:F,className:Cn(oe(Ev()),oe(dm)),style:{...p===et.SWIPE?{[gt("swipe_offset")]:`${Math.round(x.current)}px`}:null,...p===et.PULL?{[gt("pull_offset")]:`${Math.round(w.current)}px`,[gt("pull_opacity")]:`${E.current}`}:null,...o.touchAction!=="none"?{[gt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...k},L&&b.createElement(o_.Provider,{value:Z_},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const oL=Tr(DS,iL);function Pr(e){return za($S,e)}function Cv(e){return za(fm,e)}function aL({slide:e,offset:t}){const n=b.useRef(null),{currentIndex:r,slides:i}=Or(),{slideRect:o,focus:a}=Qn(),{render:l,carousel:{imageFit:s,imageProps:u},on:{click:c},styles:{slide:d},labels:h}=Yt(),{getOwnerDocument:f}=dc(),g=t!==0;b.useEffect(()=>{var S;g&&(!((S=n.current)===null||S===void 0)&&S.contains(f().activeElement))&&a()},[g,a,f]);const y=()=>{var S,p,m,x;let w=(S=l.slide)===null||S===void 0?void 0:S.call(l,{slide:e,offset:t,rect:o});return!w&&so(e)&&(w=b.createElement(Wl,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:u,onClick:g?void 0:()=>c==null?void 0:c({index:r})})),w?b.createElement(b.Fragment,null,(p=l.slideHeader)===null||p===void 0?void 0:p.call(l,{slide:e}),((m=l.slideContainer)!==null&&m!==void 0?m:({children:E})=>E)({slide:e,children:w}),(x=l.slideFooter)===null||x===void 0?void 0:x.call(l,{slide:e})):null};return b.createElement("div",{ref:n,className:Cn(oe(Cv()),!g&&oe(Cv("current")),oe(dm)),...DD(g),style:d,role:"group","aria-roledescription":Xi(h,"Slide"),"aria-label":TD(h,i,r+t)},y())}function sL(){const e=Yt().styles.slide;return b.createElement("div",{className:oe(fm),style:e})}function lL({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Or(),{setCarouselRef:o}=Qn(),{autoPlaying:a,focusWithin:l}=KS(),s=Ul(e.spacing),u=Ul(e.padding),c=jD(e,n,1),d=[];if(GS(n))for(let h=r-c;h<=r+c;h+=1){const f=YS(n,h),g=i-r+h,y=e.finite&&(h<0||h>n.length-1);d.push(y?{key:g}:{key:[`${g}`,MD(f)].filter(Boolean).join("|"),offset:h-r,slide:f})}return b.createElement("div",{ref:o,className:Cn(oe(Pr()),d.length>0&&oe(Pr("with_slides"))),style:{[`${gt(Pr("slides_count"))}`]:d.length,[`${gt(Pr("spacing_px"))}`]:s.pixel||0,[`${gt(Pr("spacing_percent"))}`]:s.percent||0,[`${gt(Pr("padding_px"))}`]:u.pixel||0,[`${gt(Pr("padding_percent"))}`]:u.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":Xi(t,"Carousel"),"aria-label":Xi(t,"Photo gallery")},d.map(({key:h,slide:f,offset:g})=>f?b.createElement(aL,{key:h,slide:f,offset:g}):b.createElement(sL,{key:h})))}const uL=Tr($S,lL);function a_(){const{carousel:e}=Yt(),{slides:t,currentIndex:n}=Or(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function cL(e){var t;const n=_m(),{publish:r}=fc(),{animation:i}=Yt(),{prevDisabled:o,nextDisabled:a}=a_(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=_v(()=>r(Dr),l),u=_v(()=>r(Lr),l),c=de(d=>{switch(d.key){case _D:r(Yi);break;case ED:(n?a:o)||(n?u:s)();break;case CD:(n?o:a)||(n?s:u)();break}});b.useEffect(()=>e(pm,c),[e,c])}function kv({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return b.createElement(wm,{label:e,icon:t,renderIcon:n,className:oe(`navigation_${r}`),disabled:o,onClick:i,style:a,...QD(Qn().focus,o)})}function dL({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=Qn(),{prevDisabled:s,nextDisabled:u}=a_();return cL(l),b.createElement(b.Fragment,null,e?e():b.createElement(kv,{label:"Previous",action:Dr,icon:YD,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():b.createElement(kv,{label:"Next",action:Lr,icon:XD,renderIcon:r,style:i.navigationNext,disabled:u,onClick:a}))}const fL=Tr(hD,dL),Tv=oe(bD),pL=oe(RS);function hL(e){return"style"in e}function Ov(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(cc(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function mL({noScroll:{disabled:e},children:t}){const n=_m(),{getOwnerDocument:r,getOwnerWindow:i}=dc();return b.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),u=Math.round(a.innerWidth-s.clientWidth);if(u>0){o.push(Ov(l,u,n));const c=l.getElementsByTagName("*");for(let d=0;d<c.length;d+=1){const h=c[d];hL(h)&&a.getComputedStyle(h).getPropertyValue("position")==="fixed"&&!h.classList.contains(pL)&&o.push(Ov(h,u,n))}}return l.classList.add(Tv),()=>{l.classList.remove(Tv),o.forEach(c=>c())}},[n,e,r,i]),b.createElement(b.Fragment,null,t)}const gL=Tr(mD,mL);function Pv(e){return za(cm,e)}function Mv(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function vL({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,u]=b.useState(!1),[c,d]=b.useState(!1),h=b.useRef([]),f=b.useRef(null),{setTimeout:g}=pc(),{subscribe:y}=fc(),p=Sm()?0:t.fade;b.useEffect(()=>(u(!0),()=>{u(!1),d(!1)}),[]);const m=de(()=>{h.current.forEach(k=>k()),h.current=[]}),x=de(()=>{var k;d(!1),m(),(k=i.exiting)===null||k===void 0||k.call(i),g(()=>{var _;(_=i.exited)===null||_===void 0||_.call(i),a()},p)});b.useEffect(()=>y(Yi,x),[y,x]);const w=de(k=>{var _,C,M;LD(k),d(!0),(_=i.entering)===null||_===void 0||_.call(i);const I=(M=(C=k.parentNode)===null||C===void 0?void 0:C.children)!==null&&M!==void 0?M:[];for(let $=0;$<I.length;$+=1){const P=I[$];["TEMPLATE","SCRIPT","STYLE"].indexOf(P.tagName)===-1&&P!==k&&(h.current.push(Mv(P,"inert","")),h.current.push(Mv(P,"aria-hidden","true")))}h.current.push(()=>{var $,P;(P=($=f.current)===null||$===void 0?void 0:$.focus)===null||P===void 0||P.call($)}),g(()=>{var $;($=i.entered)===null||$===void 0||$.call(i)},p)}),E=b.useCallback(k=>{k?w(k):m()},[w,m]);return s?yu.createPortal(b.createElement(eL,{ref:E,className:Cn(r,oe(Pv()),oe(RS),c&&oe(Pv("open"))),"aria-modal":!0,role:"dialog","aria-label":Xi(l,"Lightbox"),style:{...t.fade!==wp.animation.fade?{[gt("fade_animation_duration")]:`${p}ms`}:null,...t.easing.fade!==wp.animation.easing.fade?{[gt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:k=>{f.current||(f.current=k.relatedTarget)}},e),o.root||document.body):null}const yL=Tr(cm,vL);function xL({children:e}){return b.createElement(b.Fragment,null,e)}const bL=Tr(gD,xL);function wL(e){return za(LS,e)}function SL({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=Qn(),{setContainerRef:a,containerRect:l}=r_();kn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():b.createElement(wm,{key:Yi,label:"Close",icon:GD,renderIcon:n,onClick:i});return b.createElement("div",{ref:a,style:r.toolbar,className:oe(wL())},e==null?void 0:e.map(u=>u===Yi?s():u))}const _L=Tr(LS,SL);function s_(e,t){var n;return b.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>s_(r,t)))}function EL(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function CL({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:u,...c}){const{animation:d,carousel:h,render:f,toolbar:g,controller:y,noScroll:S,on:p,slides:m,index:x,plugins:w,...E}=wp,{config:k,augmentation:_}=RD([Ne(yL,[Ne(gL,[Ne(oL,[Ne(uL),Ne(_L),Ne(fL)])])])],l||w),C=_({animation:EL(d,t),carousel:{...h,...e},render:{...f,...n},toolbar:{...g,...r},controller:{...y,...i},noScroll:{...S,...o},on:{...p,...a},...E,...c});return C.open?b.createElement(zD,{...C},b.createElement(HD,{slides:s||m,index:cc(u||x)},b.createElement(UD,null,b.createElement(ND,null,b.createElement(AD,null,s_(Ne(bL,k),C)))))):null}const kL={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function TL(e){return Math.min(Math.max(e,Number.EPSILON),1)}function l_(e){const{minZoom:t,...n}={...kL,...e};return{minZoom:TL(t),...n}}function OL(e,t,n,r){const i=b.useRef(void 0),o=b.useRef(void 0),{zoom:a}=Yt().animation,l=Sm(),s=de(()=>{var u,c,d;if((u=i.current)===null||u===void 0||u.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(d=(c=r.current).animate)===null||d===void 0?void 0:d.call(c,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(h){console.error(h)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return kn(s,[e,t,n,s]),b.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function PL(e,t){const{on:n}=Yt(),r=de(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});b.useEffect(r,[e,r])}function hc(){const{zoom:e}=Yt();return l_(e)}function ML(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Or(),{imageFit:l}=Yt().carousel,{maxZoomPixelRatio:s}=hc();if(e&&a){const c={...a,...t};if(so(c)){const d=xm(c,l),h=Math.max(...(((n=c.srcSet)===null||n===void 0?void 0:n.map(g=>g.width))||[]).concat(c.width?[c.width]:[])),f=Math.max(...(((r=c.srcSet)===null||r===void 0?void 0:r.map(g=>g.height))||[]).concat(c.height?[c.height]:[]));h>0&&f>0&&e.width>0&&e.height>0&&(o=d?{width:Math.round(Math.min(h,e.width/e.height*f)),height:Math.round(Math.min(f,e.height/e.width*h))}:{width:h,height:f},o={width:o.width*s,height:o.height*s},i=d?{width:Math.min(e.width,o.width,h),height:Math.min(e.height,o.height,f)}:{width:Math.round(Math.min(e.width,e.height/f*h,h)),height:Math.round(Math.min(e.height,e.width/h*f,f))})}}const u=i.width?Math.max(ym(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:u}}function Iv(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function jv(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function IL(e,t,n,r,i,o,a,l,s){const u=b.useRef([]),c=b.useRef(0),d=b.useRef(void 0),{globalIndex:h}=Or(),{getOwnerWindow:f}=dc(),{containerRef:g,subscribeSensors:y}=Qn(),{keyboardMoveDistance:S,zoomInMultiplier:p,wheelZoomDistanceFactor:m,scrollToZoom:x,doubleTapDelay:w,doubleClickDelay:E,doubleClickMaxStops:k,pinchZoomDistanceFactor:_,pinchZoomV4:C}=hc(),M=b.useCallback(O=>{if(g.current){const{pageX:D,pageY:N}=O,{scrollX:B,scrollY:z}=f(),{left:G,top:Q,width:Z,height:K}=g.current.getBoundingClientRect();return[D-G-B-Z/2,N-Q-z-K/2]}return[]},[g,f]),I=de(O=>{const{key:D,metaKey:N,ctrlKey:B}=O,z=N||B,G=()=>{O.preventDefault(),O.stopPropagation()};if(e>1){const Q=(Z,K)=>{G(),l(Z,K)};D==="ArrowDown"?Q(0,S):D==="ArrowUp"?Q(0,-S):D==="ArrowLeft"?Q(-S,0):D==="ArrowRight"&&Q(S,0)}D==="+"||z&&D==="="?(G(),i()):D==="-"||z&&D==="_"?(G(),o()):z&&D==="0"&&(G(),a(1))}),$=de(O=>{if((O.ctrlKey||x)&&Math.abs(O.deltaY)>Math.abs(O.deltaX)){O.stopPropagation(),a(jv(e,-O.deltaY,m),!0,...M(O));return}e>1&&(O.stopPropagation(),x||l(O.deltaX,O.deltaY))}),P=b.useCallback(O=>{const D=u.current;D.splice(0,D.length,...D.filter(N=>N.pointerId!==O.pointerId))},[]),j=b.useCallback(O=>{P(O),O.persist(),u.current.push(O)},[P]),R=de(O=>{var D;const N=u.current;if(O.pointerType==="mouse"&&O.buttons>1||!(!((D=s==null?void 0:s.current)===null||D===void 0)&&D.contains(O.target)))return;e>1&&O.stopPropagation();const{timeStamp:B}=O;if(N.length===0&&B-c.current<(O.pointerType==="touch"?w:E)){c.current=0;const z=e>=1?e!==n?e*Math.max(n**(1/k),p):1:e!==t?e/Math.max(t**(-1/k),p):1;a(z,!1,...M(O))}else c.current=B;if(j(O),N.length===2){const z=Iv(N[0],N[1]);d.current={previousDistance:z,initialDistance:Math.max(z,1),initialZoom:e}}}),L=de(O=>{const D=u.current,N=D.find(B=>B.pointerId===O.pointerId);if(D.length===2&&d.current){O.stopPropagation(),j(O);const B=Iv(D[0],D[1]),z=C?d.current.initialZoom/d.current.initialDistance*B:jv(e,B-d.current.previousDistance,_);a(z,!0,...D.map(G=>M(G)).reduce((G,Q)=>Q.map((Z,K)=>G[K]+Z/2))),d.current.previousDistance=B;return}e>1&&(O.stopPropagation(),N&&(D.length===1&&l((N.clientX-O.clientX)/e,(N.clientY-O.clientY)/e),j(O)))}),F=b.useCallback(O=>{const D=u.current;D.length===2&&D.find(N=>N.pointerId===O.pointerId)&&(d.current=void 0),P(O)},[P]),A=b.useCallback(()=>{const O=u.current;O.splice(0,O.length),c.current=0,d.current=void 0},[]);i_(y,R,L,F,r),b.useEffect(A,[h,A]),b.useEffect(()=>r?()=>{}:gm(A,y(pm,I),y(hm,$)),[r,y,A,I,$])}function jL(e,t,n){const[r,i]=b.useState(1),[o,a]=b.useState(0),[l,s]=b.useState(0),u=OL(r,o,l,n),{currentSlide:c,globalIndex:d}=Or(),{containerRect:h,slideRect:f}=Qn(),{minZoom:g,zoomInMultiplier:y}=hc(),S=c&&so(c)?c.src:void 0,p=!S||!(n!=null&&n.current);kn(()=>{i(1),a(0),s(0)},[d,S]);const m=b.useCallback((_,C,M)=>{const I=M||r,$=o-(_||0),P=l-(C||0),j=(e.width*I-f.width)/2/I,R=(e.height*I-f.height)/2/I;a(Math.min(Math.abs($),Math.max(j,0))*Math.sign($)),s(Math.min(Math.abs(P),Math.max(R,0))*Math.sign(P))},[r,o,l,f,e.width,e.height]),x=b.useCallback((_,C,M,I)=>{const $=ym(_+.01<t?_-.01>g?_:g:t,5);C||u(),m(M?M*(1/r-1/$):0,I?I*(1/r-1/$):0,$),i($)},[r,g,t,m,u]),w=de(()=>{r>1&&(r>t&&x(t,!0),m())});kn(w,[h.width,h.height,w]);const E=b.useCallback(()=>{const _=r*y;x(r<1&&_>1?1:_)},[r,y,x]),k=b.useCallback(()=>{const _=r/y;x(r>1&&_<1?1:_)},[r,y,x]);return{zoom:r,offsetX:o,offsetY:l,disabled:p,changeOffsets:m,changeZoom:x,zoomIn:E,zoomOut:k}}const u_=b.createContext(null),Em=Zn("useZoom","ZoomControllerContext",u_);function $L({children:e}){const[t,n]=b.useState(),{slideRect:r}=Qn(),{ref:i,minZoom:o}=hc(),{imageRect:a,maxZoom:l}=ML(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:u,offsetY:c,disabled:d,changeZoom:h,changeOffsets:f,zoomIn:g,zoomOut:y}=jL(a,l,t==null?void 0:t.zoomWrapperRef);PL(s,d),IL(s,o,l,d,g,y,h,f,t==null?void 0:t.zoomWrapperRef);const S=b.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:u,offsetY:c,disabled:d,zoomIn:g,zoomOut:y,changeZoom:h}),[s,o,l,u,c,d,g,y,h]);b.useImperativeHandle(i,()=>S,[S]);const p=b.useMemo(()=>({...S,setZoomWrapper:n}),[S,n]);return b.createElement(u_.Provider,{value:p},e)}const DL=ti("ZoomIn",b.createElement(b.Fragment,null,b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),LL=ti("ZoomOut",b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),$v=b.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=b.useRef(!1),o=b.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:u,zoomOut:c,disabled:d}=Em(),{render:h}=Yt(),f=d||(t?a>=s:a<=l);return b.useEffect(()=>{f&&i.current&&o.current&&n(),f||(i.current=!0)},[f,n]),b.createElement(wm,{ref:r,disabled:f,label:t?"Zoom in":"Zoom out",icon:t?DL:LL,renderIcon:t?h.iconZoomIn:h.iconZoomOut,onClick:t?u:c,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function RL(){const e=b.useRef(null),t=b.useRef(null),{focus:n}=Qn(),r=b.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=b.useCallback(()=>r(e),[r]),o=b.useCallback(()=>r(t),[r]);return b.createElement(b.Fragment,null,b.createElement($v,{zoomIn:!0,ref:e,onLoseFocus:o}),b.createElement($v,{ref:t,onLoseFocus:i}))}function AL(){const{render:e}=Yt(),t=Em();return e.buttonZoom?b.createElement(b.Fragment,null,e.buttonZoom(t)):b.createElement(RL,null)}function FL(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function NL({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(US)}}function zL(e){var t,n;const[{current:r,preload:i},o]=b.useReducer(NL,{}),{slide:a,rect:l,imageFit:s,render:u,interactive:c}=e,d=a.srcSet.sort((E,k)=>E.width-k.width),h=(t=a.width)!==null&&t!==void 0?t:d[d.length-1].width,f=(n=a.height)!==null&&n!==void 0?n:d[d.length-1].height,g=xm(a,s),y=Math.max(...d.map(E=>E.width)),S=Math.min((g?Math.max:Math.min)(l.width,h*(l.height/f)),y),p=PD(),m=de(()=>{var E;const k=(E=d.find(_=>_.width>=S*p))!==null&&E!==void 0?E:d[d.length-1];(!r||d.findIndex(_=>_.src===r)<d.findIndex(_=>_===k))&&o({type:"fetch",source:k.src})});kn(m,[l.width,l.height,p,m]);const x=de(E=>o({type:"done",source:E})),w={WebkitTransform:c?"initial":"translateZ(0)"};return g||Object.assign(w,l.width/l.height<h/f?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),b.createElement(b.Fragment,null,i&&i!==r&&b.createElement(Wl,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...w},onLoad:()=>x(i),render:{...u,iconLoading:()=>null,iconError:()=>null}}),r&&b.createElement(Wl,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:w}))}function VL({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=b.useState(),l=b.useRef(null),{zoom:s,maxZoom:u,offsetX:c,offsetY:d,setZoomWrapper:h}=Em(),f=s>1,{carousel:g,on:y}=Yt(),{currentIndex:S}=Or();kn(()=>n===0?(h({zoomWrapperRef:l,imageDimensions:o}),()=>h(void 0)):()=>{},[n,o,h]);let p=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:u});if(!p&&so(t)){const m={slide:t,offset:n,rect:r,render:e,imageFit:g.imageFit,imageProps:g.imageProps,onClick:n===0?()=>{var x;return(x=y.click)===null||x===void 0?void 0:x.call(y,{index:S})}:void 0};p=FL(t)?b.createElement(zL,{...m,slide:t,interactive:f,rect:n===0?{width:r.width*s,height:r.height*s}:r}):b.createElement(Wl,{onLoad:x=>a({width:x.naturalWidth,height:x.naturalHeight}),...m})}return p?b.createElement("div",{ref:l,className:Cn(oe(xD),oe(dm),oe(AS),f&&oe(wD)),style:n===0?{transform:`scale(${s}) translateX(${c}px) translateY(${d}px)`}:void 0},p):null}const BL=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=l_(n);return{zoom:l,toolbar:ID(r,yv,b.createElement(AL,null)),render:{...i,slide:s=>{var u;return so(s.slide)?b.createElement(VL,{render:i,...s}):(u=i.slide)===null||u===void 0?void 0:u.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Tr(yv,$L))},HL=()=>{const{id:e}=F1(),[t,n]=b.useState([]),[r,i]=b.useState(1),[o,a]=b.useState("description"),[l,s]=b.useState(null),[u,c]=b.useState(!1),[d,h]=b.useState(0),f=t.find(E=>E.id===Number(e));b.useEffect(()=>{fetch("https://backenddidiv-production.up.railway.app/api/products?populate=*").then(E=>E.json()).then(E=>n(E.data))},[]),console.log(t),b.useEffect(()=>{f&&f.images&&s(f.images[0].url)},[f]);const g=f==null?void 0:f.images.map(E=>({src:E.url}));console.log(f);const y=()=>{const E=f.images.indexOf(l);h(E),c(!0)},S=no(),m=Nn(E=>E.favorites.items).some(E=>E.id===(f==null?void 0:f.id)),x=()=>{S(oc({...f,quantity:r})),te.success(`${f.name} додано в кошик!`)},w=(E,k)=>{k.stopPropagation(),S(uc(E)),m?te.warning(`${E.name} видалено з обраного`):te.info(`${E.name} додано в обране`)};return f?f?v.jsxs(gv,{children:[" ",v.jsx(Na,{autoClose:1500}),v.jsxs(U$,{children:[v.jsx(Oe,{to:"/",children:"Головна"})," / ",v.jsx(Oe,{to:"/catalog",children:"Каталог"})," /"," ",f.name]}),v.jsxs(W$,{children:[v.jsxs(G$,{children:[v.jsx(Y$,{src:l,alt:f.name,onClick:y}),v.jsx(X$,{children:f.images.map(E=>{const k=E.url;return v.jsx(q$,{src:k,onClick:()=>s(k),style:{cursor:"pointer",opacity:l===k?1:.4}},E.id)})})]}),v.jsx(CL,{open:u,close:()=>c(!1),index:d,slides:g,controller:{closeOnBackdropClick:!0},on:{view:({index:E})=>{var k,_;h(E),(_=(k=f==null?void 0:f.images)==null?void 0:k[E])!=null&&_.url&&s(`https://backenddidiv-production.up.railway.app${f.images[E].url}`)}},plugins:[BL],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),v.jsxs(K$,{children:[v.jsx(Z$,{children:f.name}),v.jsx(Q$,{children:v.jsx(J$,{children:"● Новий товар"})}),v.jsxs(eD,{children:[v.jsx(tD,{children:v.jsxs(nD,{children:[f.price.toLocaleString()," грн"]})}),v.jsxs(rD,{children:[v.jsxs(iD,{children:[v.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),v.jsx("span",{children:r}),v.jsx("button",{onClick:()=>i(r+1),children:"+"})]}),v.jsxs(oD,{onClick:x,children:[" ",v.jsx(Eu,{size:25}),v.jsx("span",{children:"В КОШИК"})]}),v.jsxs(fD,{$active:m,onClick:E=>w(f,E),children:[v.jsxs(pD,{$active:m,children:[" ",v.jsx("use",{href:`${cn}#icon-heart`})]}),v.jsx("span",{children:"В ОБРАНЕ"})]})]})]}),v.jsxs(sD,{children:[v.jsxs("p",{children:[v.jsx("strong",{children:"Ваше місто:"})," Київ"]}),v.jsx("p",{children:"🚚 Доставка по Україні (Розрахувати вартість)"})]})]})]}),v.jsxs(lD,{children:[v.jsxs(uD,{children:[v.jsx(vv,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),v.jsx(vv,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"})]}),v.jsxs(cD,{children:[o==="description"&&v.jsx(dD,{children:f.description}),o==="attributes"&&v.jsxs(aD,{children:[v.jsxs(vs,{children:[v.jsx("span",{children:"Розміри, мм"})," ",v.jsx("b",{children:f.size||""})]}),v.jsxs(vs,{children:[v.jsx("span",{children:"Тип"})," ",v.jsx("b",{children:f.type||""})]}),v.jsxs(vs,{children:[v.jsx("span",{children:"Колір"})," ",v.jsx("b",{children:f.color||""})]}),v.jsxs(vs,{children:[v.jsx("span",{children:"Колір"})," ",v.jsx("b",{children:f.color||""})]})]})]})]})]}):v.jsx(gv,{children:"Товар не знайдено"}):v.jsx("div",{children:"Завантаження..."})},UL=T.div`
  font-family: var(--main-font);
  width: 100%;
  max-width: 750px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    max-width: 994px;
     padding: 30px;
  }
  @media screen and (min-width: 1200px) {
   max-width: 1448px;
    padding-left: 0px;
    padding-right: 0px;
  }

  margin: 0 auto;

  
`,WL=T.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,GL=T.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,YL=T.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,XL=T.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,qL=T.div`
font-family: var(--second-font);
font-weight: 500;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  border-bottom: 1px solid #eee;
   transition: all 0.3s ease;

  &.removing {
    opacity: 0;
    transform: translateX(40px);
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 100px 1.5fr 1.2fr 80px; 
    align-items: center;
    gap: 20px;
  }
`,KL=T.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,ZL=T.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,QL=T.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,JL=T.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`;T.div`
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 5px;
  width: fit-content;

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    font-size: 18px;
  }

  span {
    padding: 0 10px;
  }
`;const eR=T.div`
  text-align: right;
 
`,tR=T.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,nR=T.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,rR=T.div`

  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 24px;

  top: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 750px;
    padding: 10px;
  }
   @media screen and (min-width: 768px) {
    
   width: 400px;
  
  }
`,iR=T.div`
font-family: var(--second-font);
font-weight: 400;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 14px;
  color: #666;

  &.total {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #eee;
    color: #000;
    font-size: 22px;

  }
`,oR=T(Oe)`
display: flex;
justify-content: center;
  width: 100%;
  background: #f47920;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.2s;

  &:hover {
    background: #e66a10;
  }
`,aR=T.button`
 width: 100%;
  background: var(--light-grey);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.2s;

  &:hover {
    background: #9e9e9e;
  }
  
`;T.svg`
  width: 25px;
  height: 25px;
  fill: ${({$active:e})=>e?"var(--red-color)":"var(--black-color)"};
`;const sR=T.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,lR=T.div`
   
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: #fdfaf7;
  text-align: center;
  flex: 1;
`;T.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 600;
`;const uR=T.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,cR=T.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,dR=T.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,fR=T.button`
  background-color: #f39212;
  color: white;
  padding: 15px 45px;
  border-radius: 30px;
  border: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e68a00;
  }
`,pR=()=>v.jsxs(v.Fragment,{children:[v.jsx(sR,{children:"Головна / Кошик"}),v.jsxs(lR,{children:[v.jsx(uR,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),v.jsx(cR,{children:"Ваш кошик порожній"}),v.jsx(dR,{children:"Ви ще не додали жодного товару в кошик"}),v.jsx(fR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]}),hR=T.div`
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 5px;
  width: fit-content;

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    font-size: 18px;
  }

  span {
    padding: 0 10px;
  }
`,mR=({item:e})=>{const t=no();return v.jsxs(hR,{children:[v.jsx("button",{onClick:()=>t(ij(e.id)),children:"-"}),v.jsx("span",{children:e.quantity}),v.jsx("button",{onClick:()=>t(rj(e.id)),children:"+"})]})},gR=()=>{const e=no(),[t,n]=b.useState([]),r=Nn(h=>h.cart.items),o=Nn(h=>h.cart.items).reduce((h,f)=>h+f.quantity,0),a=r.reduce((h,f)=>h+f.price*(f.quantity||1),0),l=Nn(h=>h.favorites.items),s=r.length===0,u=(h,f)=>{f.stopPropagation(),console.log(h);const g=l.some(y=>y.id===h.id);e(uc(h)),g?te.warning(`${h.name} видалено з обраного`):te.info(`${h.name} додано в обране`)},c=h=>{n(f=>[...f,h.id]),setTimeout(()=>{e(ej(h)),n(f=>f.filter(g=>g!==h.id))},300)},d=()=>{e(tj())};return v.jsx(v.Fragment,{children:s?v.jsx(pR,{}):v.jsxs(UL,{children:[v.jsx(Na,{autoClose:1500}),v.jsxs(WL,{children:[" ",v.jsx(Oe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",v.jsx(Oe,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),v.jsx(GL,{children:"Кошик"}),v.jsxs(YL,{children:[v.jsx(XL,{children:r.map((h,f)=>{var y,S;console.log(h);const g=l.some(p=>p.id===h.id);return v.jsxs(qL,{className:t.includes(h.id)?"removing":"",children:[v.jsx(KL,{src:((S=(y=h.images)==null?void 0:y[0])==null?void 0:S.url)||"/nofoto.png",alt:h.name,onError:p=>{p.currentTarget.onerror=null,p.currentTarget.src=Ea}}),v.jsx(ZL,{children:v.jsx("h3",{children:h.name})}),v.jsxs(QL,{children:[v.jsx(mR,{item:{...h,quantity:h.quantity||1}}),v.jsx(eR,{children:v.jsxs("div",{className:"current-price",children:[(h.price*(h.quantity||1)).toLocaleString()," грн"]})})]}),v.jsxs(JL,{children:[v.jsx(nR,{onClick:p=>u(h,p),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:v.jsx(wb,{size:22,fill:g?"#ff4d4f":"none",color:g?"#ff4d4f":"#999"})}),v.jsx(tR,{onClick:()=>c(h),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:v.jsx(_b,{size:22})})]})]},`${h.id}-${f}`)})}),v.jsxs(rR,{children:[v.jsxs(iR,{children:[v.jsx("span",{children:"Всього в обраному:"}),v.jsxs("strong",{children:[o," шт."]}),v.jsx("span",{children:"На суму:"}),v.jsxs("strong",{children:[a," грн"]})]}),v.jsx(oR,{to:"/checkout",children:"Оформити замовлення"}),v.jsx(aR,{onClick:d,children:"Oчистити кошик"})]})]})]})})},vR=T.div`
  color: var(-black-color);
  font-family: var(--main-font);
  width: 100%;
  max-width: 750px;
  padding: 20px;
  margin: 0 auto;
 
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding: 30px;
  }
  @media screen and (min-width: 1200px) {
   max-width: 1448px;
    padding-left: 0px;
    padding-right: 0px;
  }

  
  
`,yR=T.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,xR=T.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,bR=T.div`
  /* display: grid;
  grid-template-columns: 1fr 350px;
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  } */
   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,wR=T.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,SR=T.div`
font-family: var(--second-font);
font-weight: 500;
display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  border-bottom: 1px solid #eee;
   transition: all 0.3s ease;

  &.removing {
    opacity: 0;
    transform: translateX(40px);
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 150px 1.5fr 0.7fr; 
    align-items: center;
    gap: 20px;
  }
`;T.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;const _R=T.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,ER=T.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,CR=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
   @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,kR=T.p`
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
`,TR=T.div`
  display: flex;
  gap: 16px;
`,Dv=T.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  padding: 8px;
  
`,OR=T.div`
    font-family: var(--second-font);
    font-weight: 400;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 16px;
  padding: 30px;
  height: fit-content;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
   background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 24px;

  top: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 750px;
    padding: 10px;
  }
   @media screen and (min-width: 768px) {
    
   max-width: 400px;
  
  }
`,PR=T.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,MR=T.button`
  width: 100%;
  background-color: var(--orange-color);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;

  &:hover {
    background-color: #d96a1a;
  }
`,IR=T.button`
  width: 100%;
  background:var(--light-grey);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.2s;

  &:hover {
    background: #9e9e9e;
  }
`,jR=T.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,$R=T.div`
   
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: #fdfaf7;
  text-align: center;
  flex: 1;
`;T.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 600;
`;const DR=T.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;T.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const LR=T.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,RR=T.button`
  background-color: #f39212;
  color: white;
  padding: 15px 45px;
  border-radius: 30px;
  border: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e68a00;
  }
`,AR=()=>v.jsxs(v.Fragment,{children:[v.jsx(jR,{children:"Головна / Обране"}),v.jsxs($R,{children:[v.jsx(DR,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),v.jsx(LR,{children:"Ви ще не додали жодного товару в обране"}),v.jsx(RR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),FR=()=>{const e=no(),t=Nn(c=>c.favorites.items),[n,r]=b.useState([]),i=c=>{e(oc(c)),te.success(`${c.name} додано в кошик!`)},o=()=>{e(nj(t)),te.success("Товари додано в кошик!")};console.log(t);const a=t.reduce((c,d)=>c+d.price*(d.quantity||1),0),l=(c,d)=>{d.stopPropagation();const h=t.some(f=>f.id===c.id);r(f=>[...f,c.id]),setTimeout(()=>{e(uc(c)),r(f=>f.filter(g=>g!==c.id))},300),h?te.warning(`${c.name} видалено з обраного`):te.info(`${c.name} додано в обране`)},s=()=>{e(z$())},u=t.length===0;return v.jsx(v.Fragment,{children:u?v.jsx(AR,{}):v.jsxs(vR,{children:[v.jsx(Na,{autoClose:1500}),v.jsxs(yR,{children:[" ",v.jsx(Oe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",v.jsx(Oe,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),v.jsx(xR,{children:"Обране"}),v.jsxs(bR,{children:[v.jsx(wR,{children:t.map(c=>{var d;return v.jsxs(SR,{className:n.includes(c.id)?"removing":"",children:[v.jsx(_R,{src:((d=c.images[0])==null?void 0:d.url)||"/nofoto.png",alt:c.name,onError:h=>{h.currentTarget.onerror=null,h.currentTarget.src="/nofoto.png"}}),v.jsx(ER,{children:c.name}),v.jsxs(CR,{children:[v.jsxs(kR,{children:[c.price," грн"]}),v.jsxs(TR,{children:[v.jsx(Dv,{onClick:()=>i(c),children:v.jsx(Eu,{size:30})}),v.jsx(Dv,{onClick:h=>l(c,h),children:v.jsx(_b,{size:30})})]})]})]},c.id)})}),v.jsxs(OR,{children:[v.jsxs(PR,{children:[v.jsx("span",{children:"Всього в обраному:"}),v.jsxs("strong",{children:[t.length," шт."]}),v.jsx("span",{children:"На суму:"}),v.jsxs("strong",{children:[a," грн"]})]}),v.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),v.jsx(MR,{onClick:()=>o(),children:"Додати все до кошика"}),v.jsx(IR,{onClick:s,children:"Очистити обрані"})]})]})]})})},NR=T.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,zR=T.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,VR=T.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,BR=T.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;T.section`
  margin-bottom: 30px;
`;T.h2`
  font-size: 20px;
  color: #4a332a; // Колір як у футері для акцентів
  margin-bottom: 15px;
  font-weight: 500;
`;T.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`;T.ul`
  margin-left: 20px;
  margin-bottom: 15px;
  
  li {
    margin-bottom: 8px;
    color: #555;
    line-height: 1.5;
  }
`;const HR=({title:e,children:t,breadcrumbPath:n})=>v.jsxs(NR,{children:[v.jsxs(zR,{children:["Головна / ",n]}),v.jsxs(VR,{children:[v.jsx(BR,{children:e}),t]})]}),Lv=T.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,Rv=T.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,Av=T.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,Fv=T.ul`
  padding-left: 20px;
  margin-bottom: 20px;
  list-style: none; /* Прибираємо стандартні маркери, щоб зробити свої */

  li {
    position: relative;
    font-size: 16px;
    color: #555;
    line-height: 1.5;
    margin-bottom: 10px;

    &::before {
      content: "•";
      color: #f39212; /* Твій акцентний колір */
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }

  @media screen and (min-width: 768px) {
    li {
      font-size: 17px;
    }
  }
`,UR=()=>v.jsxs(HR,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[v.jsxs(Lv,{children:[v.jsx(Rv,{children:"Способи доставки"}),v.jsx(Av,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),v.jsxs(Fv,{children:[v.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),v.jsx("li",{children:"Самовивіз з нашого магазину"}),v.jsx("li",{children:"Укрпошта"})]})]}),v.jsxs(Lv,{children:[v.jsx(Rv,{children:"Варіанти оплати"}),v.jsx(Av,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),v.jsxs(Fv,{children:[v.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),v.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),v.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function Qr(e){"@babel/helpers - typeof";return Qr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qr(e)}function WR(e,t){if(Qr(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Qr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function c_(e){var t=WR(e,"string");return Qr(t)==="symbol"?t:String(t)}function Lo(e,t,n){return t=c_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nv(Object(n),!0).forEach(function(r){Lo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function GR(e){if(Array.isArray(e))return e}function YR(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(c){u=!0,i=c}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function _p(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d_(e,t){if(e){if(typeof e=="string")return _p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _p(e,t)}}function XR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vn(e,t){return GR(e)||YR(e,t)||d_(e,t)||XR()}function qR(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jn(e,t){if(e==null)return{};var n=qR(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var KR=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function ZR(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,c=e.onInputChange,d=e.onMenuClose,h=e.onMenuOpen,f=e.value,g=Jn(e,KR),y=b.useState(l!==void 0?l:n),S=Vn(y,2),p=S[0],m=S[1],x=b.useState(s!==void 0?s:i),w=Vn(x,2),E=w[0],k=w[1],_=b.useState(f!==void 0?f:a),C=Vn(_,2),M=C[0],I=C[1],$=b.useCallback(function(O,D){typeof u=="function"&&u(O,D),I(O)},[u]),P=b.useCallback(function(O,D){var N;typeof c=="function"&&(N=c(O,D)),m(N!==void 0?N:O)},[c]),j=b.useCallback(function(){typeof h=="function"&&h(),k(!0)},[h]),R=b.useCallback(function(){typeof d=="function"&&d(),k(!1)},[d]),L=l!==void 0?l:p,F=s!==void 0?s:E,A=f!==void 0?f:M;return X(X({},g),{},{inputValue:L,menuIsOpen:F,onChange:$,onInputChange:P,onMenuClose:R,onMenuOpen:j,value:A})}function QR(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function zv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c_(r.key),r)}}function JR(e,t,n){return t&&zv(e.prototype,t),n&&zv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ep(e,t){return Ep=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ep(e,t)}function eA(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ep(e,t)}function Gl(e){return Gl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Gl(e)}function tA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function nA(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rA(e,t){if(t&&(Qr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return nA(e)}function iA(e){var t=tA();return function(){var r=Gl(e),i;if(t){var o=Gl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return rA(this,i)}}function oA(e){if(Array.isArray(e))return _p(e)}function aA(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cm(e){return oA(e)||aA(e)||d_(e)||sA()}function lA(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const uA=Math.min,cA=Math.max,Yl=Math.round,ys=Math.floor,Xl=e=>({x:e,y:e});function dA(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function mc(){return typeof window<"u"}function f_(e){return h_(e)?(e.nodeName||"").toLowerCase():"#document"}function ln(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function p_(e){var t;return(t=(h_(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function h_(e){return mc()?e instanceof Node||e instanceof ln(e).Node:!1}function Cp(e){return mc()?e instanceof Element||e instanceof ln(e).Element:!1}function km(e){return mc()?e instanceof HTMLElement||e instanceof ln(e).HTMLElement:!1}function Vv(e){return!mc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ln(e).ShadowRoot}function m_(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Tm(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Od;function fA(){return Od==null&&(Od=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Od}function pA(e){return/^(html|body|#document)$/.test(f_(e))}function Tm(e){return ln(e).getComputedStyle(e)}function hA(e){if(f_(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Vv(e)&&e.host||p_(e);return Vv(t)?t.host:t}function g_(e){const t=hA(e);return pA(t)?e.ownerDocument?e.ownerDocument.body:e.body:km(t)&&m_(t)?t:g_(t)}function ql(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=g_(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=ln(i);if(o){const l=kp(a);return t.concat(a,a.visualViewport||[],m_(i)?i:[],l&&n?ql(l):[])}else return t.concat(i,ql(i,[],n))}function kp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function mA(e){const t=Tm(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=km(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Yl(n)!==o||Yl(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Om(e){return Cp(e)?e:e.contextElement}function Pd(e){const t=Om(e);if(!km(t))return Xl(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=mA(t);let a=(o?Yl(n.width):n.width)/r,l=(o?Yl(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const gA=Xl(0);function vA(e){const t=ln(e);return!fA()||!t.visualViewport?gA:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function yA(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==ln(e)?!1:t}function Bv(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Om(e);let a=Xl(1);t&&(r?Cp(r)&&(a=Pd(r)):a=Pd(e));const l=yA(o,n,r)?vA(o):Xl(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,c=i.width/a.x,d=i.height/a.y;if(o){const h=ln(o),f=r&&Cp(r)?ln(r):r;let g=h,y=kp(g);for(;y&&r&&f!==g;){const S=Pd(y),p=y.getBoundingClientRect(),m=Tm(y),x=p.left+(y.clientLeft+parseFloat(m.paddingLeft))*S.x,w=p.top+(y.clientTop+parseFloat(m.paddingTop))*S.y;s*=S.x,u*=S.y,c*=S.x,d*=S.y,s+=x,u+=w,g=ln(y),y=kp(g)}}return dA({width:c,height:d,x:s,y:u})}function v_(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function xA(e,t){let n=null,r;const i=p_(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:c,top:d,width:h,height:f}=u;if(l||t(),!h||!f)return;const g=ys(d),y=ys(i.clientWidth-(c+h)),S=ys(i.clientHeight-(d+f)),p=ys(c),x={rootMargin:-g+"px "+-y+"px "+-S+"px "+-p+"px",threshold:cA(0,uA(1,s))||1};let w=!0;function E(k){const _=k[0].intersectionRatio;if(_!==s){if(!w)return a();_?a(!1,_):r=setTimeout(()=>{a(!1,1e-7)},1e3)}_===1&&!v_(u,e.getBoundingClientRect())&&a(),w=!1}try{n=new IntersectionObserver(E,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,x)}n.observe(e)}return a(!0),o}function bA(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=Om(e),c=i||o?[...u?ql(u):[],...t?ql(t):[]]:[];c.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),o&&p.addEventListener("resize",n)});const d=u&&l?xA(u,n):null;let h=-1,f=null;a&&(f=new ResizeObserver(p=>{let[m]=p;m&&m.target===u&&f&&t&&(f.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(t)})),n()}),u&&!s&&f.observe(u),t&&f.observe(t));let g,y=s?Bv(e):null;s&&S();function S(){const p=Bv(e);y&&!v_(y,p)&&n(),y=p,g=requestAnimationFrame(S)}return n(),()=>{var p;c.forEach(m=>{i&&m.removeEventListener("scroll",n),o&&m.removeEventListener("resize",n)}),d==null||d(),(p=f)==null||p.disconnect(),f=null,s&&cancelAnimationFrame(g)}}var Tp=b.useLayoutEffect,wA=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Kl=function(){};function SA(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function _A(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(SA(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Hv=function(t){return jA(t)?t.filter(Boolean):Qr(t)==="object"&&t!==null?[t]:[]},y_=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=Jn(t,wA);return X({},n)},ke=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function gc(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function EA(e){return gc(e)?window.innerHeight:e.clientHeight}function x_(e){return gc(e)?window.pageYOffset:e.scrollTop}function Zl(e,t){if(gc(e)){window.scrollTo(0,t);return}e.scrollTop=t}function CA(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function kA(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function xs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Kl,i=x_(e),o=t-i,a=10,l=0;function s(){l+=a;var u=kA(l,i,o,n);Zl(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function Uv(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?Zl(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&Zl(e,Math.max(t.offsetTop-i,0))}function TA(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Wv(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function OA(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var b_=!1,PA={get passive(){return b_=!0}},bs=typeof window<"u"?window:{};bs.addEventListener&&bs.removeEventListener&&(bs.addEventListener("p",Kl,PA),bs.removeEventListener("p",Kl,!1));var MA=b_;function IA(e){return e!=null}function jA(e){return Array.isArray(e)}function ws(e,t,n){return e?t:n}var $A=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Vn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Vn(l,2),u=s[0],c=s[1];return a[u]=c,a},{})},DA=["children","innerProps"],LA=["children","innerProps"];function RA(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=CA(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var c=s.getBoundingClientRect(),d=c.height,h=n.getBoundingClientRect(),f=h.bottom,g=h.height,y=h.top,S=n.offsetParent.getBoundingClientRect(),p=S.top,m=a?window.innerHeight:EA(s),x=x_(s),w=parseInt(getComputedStyle(n).marginBottom,10),E=parseInt(getComputedStyle(n).marginTop,10),k=p-E,_=m-y,C=k+x,M=d-x-y,I=f-m+x+w,$=x+y-E,P=160;switch(i){case"auto":case"bottom":if(_>=g)return{placement:"bottom",maxHeight:t};if(M>=g&&!a)return o&&xs(s,I,P),{placement:"bottom",maxHeight:t};if(!a&&M>=r||a&&_>=r){o&&xs(s,I,P);var j=a?_-w:M-w;return{placement:"bottom",maxHeight:j}}if(i==="auto"||a){var R=t,L=a?k:C;return L>=r&&(R=Math.min(L-w-l,t)),{placement:"top",maxHeight:R}}if(i==="bottom")return o&&Zl(s,I),{placement:"bottom",maxHeight:t};break;case"top":if(k>=g)return{placement:"top",maxHeight:t};if(C>=g&&!a)return o&&xs(s,$,P),{placement:"top",maxHeight:t};if(!a&&C>=r||a&&k>=r){var F=t;return(!a&&C>=r||a&&k>=r)&&(F=a?k-E:C-E),o&&xs(s,$,P),{placement:"top",maxHeight:F}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function AA(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var w_=function(t){return t==="auto"?"bottom":t},FA=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return X((r={label:"menu"},Lo(r,AA(i),"100%"),Lo(r,"position","absolute"),Lo(r,"width","100%"),Lo(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},S_=b.createContext(null),NA=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=b.useContext(S_)||{},c=u.setPortalPlacement,d=b.useRef(null),h=b.useState(i),f=Vn(h,2),g=f[0],y=f[1],S=b.useState(null),p=Vn(S,2),m=p[0],x=p[1],w=s.spacing.controlHeight;return Tp(function(){var E=d.current;if(E){var k=a==="fixed",_=l&&!k,C=RA({maxHeight:i,menuEl:E,minHeight:r,placement:o,shouldScroll:_,isFixedPosition:k,controlHeight:w});y(C.maxHeight),x(C.placement),c==null||c(C.placement)}},[i,o,a,l,r,c,w]),n({ref:d,placerProps:X(X({},t),{},{placement:m||w_(o),maxHeight:g})})},zA=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Y("div",q({},ke(t,"menu",{menu:!0}),{ref:r},i),n)},VA=zA,BA=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return X({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},HA=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Y("div",q({},ke(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},__=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return X({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},UA=__,WA=__,GA=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=Jn(t,DA);return Y("div",q({},ke(X(X({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},YA=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=Jn(t,LA);return Y("div",q({},ke(X(X({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},XA=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},qA=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=b.useRef(null),u=b.useRef(null),c=b.useState(w_(a)),d=Vn(c,2),h=d[0],f=d[1],g=b.useMemo(function(){return{setPortalPlacement:f}},[]),y=b.useState(null),S=Vn(y,2),p=S[0],m=S[1],x=b.useCallback(function(){if(i){var _=TA(i),C=l==="fixed"?0:window.pageYOffset,M=_[h]+C;(M!==(p==null?void 0:p.offset)||_.left!==(p==null?void 0:p.rect.left)||_.width!==(p==null?void 0:p.rect.width))&&m({offset:M,rect:_})}},[i,l,h,p==null?void 0:p.offset,p==null?void 0:p.rect.left,p==null?void 0:p.rect.width]);Tp(function(){x()},[x]);var w=b.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=bA(i,s.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);Tp(function(){w()},[w]);var E=b.useCallback(function(_){s.current=_,w()},[w]);if(!n&&l!=="fixed"||!p)return null;var k=Y("div",q({ref:E},ke(X(X({},t),{},{offset:p.offset,position:l,rect:p.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Y(S_.Provider,{value:g},n?yu.createPortal(k,n):k)},KA=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},ZA=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Y("div",q({},ke(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},QA=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return X({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},JA=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Y("div",q({},ke(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},e6=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},t6=function(t){var n=t.children,r=t.innerProps;return Y("div",q({},ke(t,"indicatorsContainer",{indicators:!0}),r),n)},Gv,n6=["size"],r6=["innerProps","isRtl","size"],i6={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},E_=function(t){var n=t.size,r=Jn(t,n6);return Y("svg",q({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:i6},r))},Pm=function(t){return Y(E_,q({size:20},t),Y("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},C_=function(t){return Y(E_,q({size:20},t),Y("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},k_=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return X({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},o6=k_,a6=function(t){var n=t.children,r=t.innerProps;return Y("div",q({},ke(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Y(C_,null))},s6=k_,l6=function(t){var n=t.children,r=t.innerProps;return Y("div",q({},ke(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Y(Pm,null))},u6=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return X({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},c6=function(t){var n=t.innerProps;return Y("span",q({},n,ke(t,"indicatorSeparator",{"indicator-separator":!0})))},d6=qP(Gv||(Gv=lA([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),f6=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return X({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Md=function(t){var n=t.delay,r=t.offset;return Y("span",{css:qh({animation:"".concat(d6," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},p6=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=Jn(t,r6);return Y("div",q({},ke(X(X({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Y(Md,{delay:0,offset:r}),Y(Md,{delay:160,offset:!0}),Y(Md,{delay:320,offset:!r}))},h6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return X({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},m6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Y("div",q({ref:o},ke(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},g6=m6,v6=["data"],y6=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},x6=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,c=t.theme,d=t.selectProps;return Y("div",q({},ke(t,"group",{group:!0}),s),Y(a,q({},l,{selectProps:d,theme:c,getStyles:i,getClassNames:o,cx:r}),u),Y("div",null,n))},b6=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return X({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},w6=function(t){var n=y_(t);n.data;var r=Jn(n,v6);return Y("div",q({},ke(t,"groupHeading",{"group-heading":!0}),r))},S6=x6,_6=["innerRef","isDisabled","isHidden","inputClassName"],E6=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return X(X({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},C6),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},T_={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},C6={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":X({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},T_)},k6=function(t){return X({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},T_)},T6=function(t){var n=t.cx,r=t.value,i=y_(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=Jn(i,_6);return Y("div",q({},ke(t,"input",{"input-container":!0}),{"data-value":r||""}),Y("input",q({className:n({input:!0},s),ref:o,style:k6(l),disabled:a},u)))},O6=T6,P6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return X({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},M6=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return X({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},I6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return X({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},O_=function(t){var n=t.children,r=t.innerProps;return Y("div",r,n)},j6=O_,$6=O_;function D6(e){var t=e.children,n=e.innerProps;return Y("div",q({role:"button"},n),t||Y(Pm,{size:14}))}var L6=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,c=r.Label,d=r.Remove;return Y(u,{data:i,innerProps:X(X({},ke(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Y(c,{data:i,innerProps:X({},ke(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Y(d,{data:i,innerProps:X(X({},ke(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},R6=L6,A6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return X({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},F6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Y("div",q({},ke(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},N6=F6,z6=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return X({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},V6=function(t){var n=t.children,r=t.innerProps;return Y("div",q({},ke(t,"placeholder",{placeholder:!0}),r),n)},B6=V6,H6=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return X({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},U6=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Y("div",q({},ke(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},W6=U6,G6={ClearIndicator:l6,Control:g6,DropdownIndicator:a6,DownChevron:C_,CrossIcon:Pm,Group:S6,GroupHeading:w6,IndicatorsContainer:t6,IndicatorSeparator:c6,Input:O6,LoadingIndicator:p6,Menu:VA,MenuList:HA,MenuPortal:qA,LoadingMessage:YA,NoOptionsMessage:GA,MultiValue:R6,MultiValueContainer:j6,MultiValueLabel:$6,MultiValueRemove:D6,Option:N6,Placeholder:B6,SelectContainer:ZA,SingleValue:W6,ValueContainer:JA},Y6=function(t){return X(X({},G6),t.components)},Yv=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function X6(e,t){return!!(e===t||Yv(e)&&Yv(t))}function q6(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!X6(e[n],t[n]))return!1;return!0}function K6(e,t){t===void 0&&(t=q6);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var Z6={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Q6=function(t){return Y("span",q({css:Z6},t))},Xv=Q6,J6={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,c=t.isAppleDevice,d=function(y,S){return y&&y.length?"".concat(y.indexOf(S)+1," of ").concat(y.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(d(l,r),".");if(n==="menu"&&c){var h=s?" disabled":"",f="".concat(u?" selected":"").concat(h);return"".concat(a).concat(f,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},e8=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,c=t.isAppleDevice,d=s.ariaLiveMessages,h=s.getOptionLabel,f=s.inputValue,g=s.isMulti,y=s.isOptionDisabled,S=s.isSearchable,p=s.menuIsOpen,m=s.options,x=s.screenReaderStatus,w=s.tabSelectsValue,E=s.isLoading,k=s["aria-label"],_=s["aria-live"],C=b.useMemo(function(){return X(X({},J6),d||{})},[d]),M=b.useMemo(function(){var L="";if(n&&C.onChange){var F=n.option,A=n.options,O=n.removedValue,D=n.removedValues,N=n.value,B=function(we){return Array.isArray(we)?null:we},z=O||F||B(N),G=z?h(z):"",Q=A||D||void 0,Z=Q?Q.map(h):[],K=X({isDisabled:z&&y(z,l),label:G,labels:Z},n);L=C.onChange(K)}return L},[n,C,y,l,h]),I=b.useMemo(function(){var L="",F=r||i,A=!!(r&&l&&l.includes(r));if(F&&C.onFocus){var O={focused:F,label:h(F),isDisabled:y(F,l),isSelected:A,options:o,context:F===r?"menu":"value",selectValue:l,isAppleDevice:c};L=C.onFocus(O)}return L},[r,i,h,y,C,o,l,c]),$=b.useMemo(function(){var L="";if(p&&m.length&&!E&&C.onFilter){var F=x({count:o.length});L=C.onFilter({inputValue:f,resultsMessage:F})}return L},[o,f,p,C,m,x,E]),P=(n==null?void 0:n.action)==="initial-input-focus",j=b.useMemo(function(){var L="";if(C.guidance){var F=i?"value":p?"menu":"input";L=C.guidance({"aria-label":k,context:F,isDisabled:r&&y(r,l),isMulti:g,isSearchable:S,tabSelectsValue:w,isInitialFocus:P})}return L},[k,r,i,g,y,S,p,C,l,w,P]),R=Y(b.Fragment,null,Y("span",{id:"aria-selection"},M),Y("span",{id:"aria-focused"},I),Y("span",{id:"aria-results"},$),Y("span",{id:"aria-guidance"},j));return Y(b.Fragment,null,Y(Xv,{id:u},P&&R),Y(Xv,{"aria-live":_,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!P&&R))},t8=e8,Op=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],n8=new RegExp("["+Op.map(function(e){return e.letters}).join("")+"]","g"),P_={};for(var Id=0;Id<Op.length;Id++)for(var jd=Op[Id],$d=0;$d<jd.letters.length;$d++)P_[jd.letters[$d]]=jd.base;var M_=function(t){return t.replace(n8,function(n){return P_[n]})},r8=K6(M_),qv=function(t){return t.replace(/^\s+|\s+$/g,"")},i8=function(t){return"".concat(t.label," ").concat(t.value)},o8=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=X({ignoreCase:!0,ignoreAccents:!0,stringify:i8,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,c=s?qv(r):r,d=s?qv(l(n)):l(n);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),a&&(c=r8(c),d=M_(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},a8=["innerRef"];function s8(e){var t=e.innerRef,n=Jn(e,a8),r=$A(n,"onExited","in","enter","exit","appear");return Y("input",q({ref:t},r,{css:qh({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var l8=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function u8(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=b.useRef(!1),l=b.useRef(!1),s=b.useRef(0),u=b.useRef(null),c=b.useCallback(function(S,p){if(u.current!==null){var m=u.current,x=m.scrollTop,w=m.scrollHeight,E=m.clientHeight,k=u.current,_=p>0,C=w-E-x,M=!1;C>p&&a.current&&(r&&r(S),a.current=!1),_&&l.current&&(o&&o(S),l.current=!1),_&&p>C?(n&&!a.current&&n(S),k.scrollTop=w,M=!0,a.current=!0):!_&&-p>x&&(i&&!l.current&&i(S),k.scrollTop=0,M=!0,l.current=!0),M&&l8(S)}},[n,r,i,o]),d=b.useCallback(function(S){c(S,S.deltaY)},[c]),h=b.useCallback(function(S){s.current=S.changedTouches[0].clientY},[]),f=b.useCallback(function(S){var p=s.current-S.changedTouches[0].clientY;c(S,p)},[c]),g=b.useCallback(function(S){if(S){var p=MA?{passive:!1}:!1;S.addEventListener("wheel",d,p),S.addEventListener("touchstart",h,p),S.addEventListener("touchmove",f,p)}},[f,h,d]),y=b.useCallback(function(S){S&&(S.removeEventListener("wheel",d,!1),S.removeEventListener("touchstart",h,!1),S.removeEventListener("touchmove",f,!1))},[f,h,d]);return b.useEffect(function(){if(t){var S=u.current;return g(S),function(){y(S)}}},[t,g,y]),function(S){u.current=S}}var Kv=["boxSizing","height","overflow","paddingRight","position"],Zv={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Qv(e){e.cancelable&&e.preventDefault()}function Jv(e){e.stopPropagation()}function e1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function t1(){return"ontouchstart"in window||navigator.maxTouchPoints}var n1=!!(typeof window<"u"&&window.document&&window.document.createElement),To=0,ui={capture:!1,passive:!1};function c8(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),o=b.useRef(null),a=b.useCallback(function(s){if(n1){var u=document.body,c=u&&u.style;if(r&&Kv.forEach(function(g){var y=c&&c[g];i.current[g]=y}),r&&To<1){var d=parseInt(i.current.paddingRight,10)||0,h=document.body?document.body.clientWidth:0,f=window.innerWidth-h+d||0;Object.keys(Zv).forEach(function(g){var y=Zv[g];c&&(c[g]=y)}),c&&(c.paddingRight="".concat(f,"px"))}u&&t1()&&(u.addEventListener("touchmove",Qv,ui),s&&(s.addEventListener("touchstart",e1,ui),s.addEventListener("touchmove",Jv,ui))),To+=1}},[r]),l=b.useCallback(function(s){if(n1){var u=document.body,c=u&&u.style;To=Math.max(To-1,0),r&&To<1&&Kv.forEach(function(d){var h=i.current[d];c&&(c[d]=h)}),u&&t1()&&(u.removeEventListener("touchmove",Qv,ui),s&&(s.removeEventListener("touchstart",e1,ui),s.removeEventListener("touchmove",Jv,ui)))}},[r]);return b.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var d8=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},f8={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function p8(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=u8({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),c=c8({isEnabled:n}),d=function(f){u(f),c(f)};return Y(b.Fragment,null,n&&Y("div",{onClick:d8,css:f8}),t(d))}var h8={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},m8=function(t){var n=t.name,r=t.onFocus;return Y("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:h8,value:"",onChange:function(){}})},g8=m8;function Mm(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function v8(){return Mm(/^iPhone/i)}function I_(){return Mm(/^Mac/i)}function y8(){return Mm(/^iPad/i)||I_()&&navigator.maxTouchPoints>1}function x8(){return v8()||y8()}function b8(){return I_()||x8()}var w8=function(t){return t.label},S8=function(t){return t.label},_8=function(t){return t.value},E8=function(t){return!!t.isDisabled},C8={clearIndicator:s6,container:KA,control:h6,dropdownIndicator:o6,group:y6,groupHeading:b6,indicatorsContainer:e6,indicatorSeparator:u6,input:E6,loadingIndicator:f6,loadingMessage:WA,menu:FA,menuList:BA,menuPortal:XA,multiValue:P6,multiValueLabel:M6,multiValueRemove:I6,noOptionsMessage:UA,option:A6,placeholder:z6,singleValue:H6,valueContainer:QA},k8={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},T8=4,j_=4,O8=38,P8=j_*2,M8={baseUnit:j_,controlHeight:O8,menuGutter:P8},Dd={borderRadius:T8,colors:k8,spacing:M8},I8={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Wv(),captureMenuScroll:!Wv(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:o8(),formatGroupLabel:w8,getOptionLabel:S8,getOptionValue:_8,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:E8,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!OA(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function r1(e,t,n,r){var i=L_(e,t,n),o=R_(e,t,n),a=D_(e,t),l=Ql(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function Ks(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return r1(e,a,t,l)}).filter(function(a){return o1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=r1(e,n,t,r);return o1(e,o)?o:void 0}).filter(IA)}function $_(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,Cm(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function i1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,Cm(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function j8(e,t){return $_(Ks(e,t))}function o1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!F_(e)||!o)&&A_(e,{label:a,value:l,data:i},r)}function $8(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function D8(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Ld=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},D_=function(t,n){return t.getOptionLabel(n)},Ql=function(t,n){return t.getOptionValue(n)};function L_(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function R_(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Ql(e,t);return n.some(function(i){return Ql(e,i)===r})}function A_(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var F_=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},L8=1,N_=function(e){eA(n,e);var t=iA(n);function n(r){var i;if(QR(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var c=i.props,d=c.onChange,h=c.name;u.name=h,i.ariaOnChange(s,u),d(s,u)},i.setValue=function(s,u,c){var d=i.props,h=d.closeMenuOnSelect,f=d.isMulti,g=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:g}),h&&(i.setState({inputIsHiddenAfterUpdate:!f}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:c})},i.selectOption=function(s){var u=i.props,c=u.blurInputOnSelect,d=u.isMulti,h=u.name,f=i.state.selectValue,g=d&&i.isOptionSelected(s,f),y=i.isOptionDisabled(s,f);if(g){var S=i.getOptionValue(s);i.setValue(f.filter(function(p){return i.getOptionValue(p)!==S}),"deselect-option",s)}else if(!y)d?i.setValue([].concat(Cm(f),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:h});return}c&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,c=i.state.selectValue,d=i.getOptionValue(s),h=c.filter(function(g){return i.getOptionValue(g)!==d}),f=ws(u,h,h[0]||null);i.onChange(f,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(ws(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),h=ws(s,d,d[0]||null);c&&i.onChange(h,{action:"pop-value",removedValue:c})},i.getFocusedOptionId=function(s){return Ld(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return i1(Ks(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return _A.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return D_(i.props,s)},i.getOptionValue=function(s){return Ql(i.props,s)},i.getStyles=function(s,u){var c=i.props.unstyled,d=C8[s](u,c);d.boxSizing="border-box";var h=i.props.styles[s];return h?h(d,u):d},i.getClassNames=function(s,u){var c,d;return(c=(d=i.props.classNames)[s])===null||c===void 0?void 0:c.call(d,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return Y6(i.props)},i.buildCategorizedOptions=function(){return Ks(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return $_(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:X({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,c=u.isMulti,d=u.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!c}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&gc(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,c=u&&u.item(0);c&&(i.initialTouchX=c.clientX,i.initialTouchY=c.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-i.initialTouchX),h=Math.abs(c.clientY-i.initialTouchY),f=5;i.userIsDragging=d>f||h>f}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,c=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(c,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),c=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:c>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return F_(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,c=u.isMulti,d=u.backspaceRemovesValue,h=u.escapeClearsValue,f=u.inputValue,g=u.isClearable,y=u.isDisabled,S=u.menuIsOpen,p=u.onKeyDown,m=u.tabSelectsValue,x=u.openMenuOnFocus,w=i.state,E=w.focusedOption,k=w.focusedValue,_=w.selectValue;if(!y&&!(typeof p=="function"&&(p(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!c||f)return;i.focusValue("previous");break;case"ArrowRight":if(!c||f)return;i.focusValue("next");break;case"Delete":case"Backspace":if(f)return;if(k)i.removeValue(k);else{if(!d)return;c?i.popValue():g&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!S||!m||!E||x&&i.isOptionSelected(E,_))return;i.selectOption(E);break;case"Enter":if(s.keyCode===229)break;if(S){if(!E||i.isComposing)return;i.selectOption(E);break}return;case"Escape":S?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:f}),i.onMenuClose()):g&&h&&i.clearValue();break;case" ":if(f)return;if(!S){i.openMenu("first");break}if(!E)return;i.selectOption(E);break;case"ArrowUp":S?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":S?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!S)return;i.focusOption("pageup");break;case"PageDown":if(!S)return;i.focusOption("pagedown");break;case"Home":if(!S)return;i.focusOption("first");break;case"End":if(!S)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++L8),i.state.selectValue=Hv(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=Ld(o,a[l])}return i}return JR(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Uv(this.menuListRef,this.focusedOptionRef),b8()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Uv(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),c=i==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,c=-1;if(a.length){switch(i){case"previous":s===0?c=0:s===-1?c=u:c=s-1;break;case"next":s>-1&&s<u&&(c=s+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:a[c]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Dd):X(X({},Dd),this.props.theme):Dd}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,h=d.isMulti,f=d.isRtl,g=d.options,y=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:y,isMulti:h,isRtl:f,options:g,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return L_(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return R_(this.props,i,o)}},{key:"filterOption",value:function(i,o){return A_(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,c=i.form,d=i.menuIsOpen,h=i.required,f=this.getComponents(),g=f.Input,y=this.state,S=y.inputIsHidden,p=y.ariaSelection,m=this.commonProps,x=l||this.getElementId("input"),w=X(X(X({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":h,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(p==null?void 0:p.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?b.createElement(g,q({},m,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:S,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:s},w)):b.createElement(s8,q({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Kl,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:c,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,h=this.commonProps,f=this.props,g=f.controlShouldRenderValue,y=f.isDisabled,S=f.isMulti,p=f.inputValue,m=f.placeholder,x=this.state,w=x.selectValue,E=x.focusedValue,k=x.isFocused;if(!this.hasValue()||!g)return p?null:b.createElement(d,q({},h,{key:"placeholder",isDisabled:y,isFocused:k,innerProps:{id:this.getElementId("placeholder")}}),m);if(S)return w.map(function(C,M){var I=C===E,$="".concat(i.getOptionLabel(C),"-").concat(i.getOptionValue(C));return b.createElement(a,q({},h,{components:{Container:l,Label:s,Remove:u},isFocused:I,isDisabled:y,key:$,index:M,removeProps:{onClick:function(){return i.removeValue(C)},onTouchEnd:function(){return i.removeValue(C)},onMouseDown:function(j){j.preventDefault()}},data:C}),i.formatOptionLabel(C,"value"))});if(p)return null;var _=w[0];return b.createElement(c,q({},h,{data:_,isDisabled:y}),this.formatOptionLabel(_,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,q({},a,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!o||!u)return null;var d={"aria-hidden":"true"};return b.createElement(o,q({},a,{innerProps:d,isDisabled:s,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return b.createElement(a,q({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,q({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,h=o.NoOptionsMessage,f=o.Option,g=this.commonProps,y=this.state.focusedOption,S=this.props,p=S.captureMenuScroll,m=S.inputValue,x=S.isLoading,w=S.loadingMessage,E=S.minMenuHeight,k=S.maxMenuHeight,_=S.menuIsOpen,C=S.menuPlacement,M=S.menuPosition,I=S.menuPortalTarget,$=S.menuShouldBlockScroll,P=S.menuShouldScrollIntoView,j=S.noOptionsMessage,R=S.onMenuScrollToTop,L=S.onMenuScrollToBottom;if(!_)return null;var F=function(G,Q){var Z=G.type,K=G.data,re=G.isDisabled,we=G.isSelected,qe=G.label,Pe=G.value,Xt=y===K,Ft=re?void 0:function(){return i.onOptionHover(K)},kt=re?void 0:function(){return i.selectOption(K)},ni="".concat(i.getElementId("option"),"-").concat(Q),pt={id:ni,onClick:kt,onMouseMove:Ft,onMouseOver:Ft,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:we};return b.createElement(f,q({},g,{innerProps:pt,data:K,isDisabled:re,isSelected:we,key:ni,label:qe,type:Z,value:Pe,isFocused:Xt,innerRef:Xt?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(G.data,"menu"))},A;if(this.hasOptions())A=this.getCategorizedOptions().map(function(z){if(z.type==="group"){var G=z.data,Q=z.options,Z=z.index,K="".concat(i.getElementId("group"),"-").concat(Z),re="".concat(K,"-heading");return b.createElement(a,q({},g,{key:K,data:G,options:Q,Heading:l,headingProps:{id:re,data:z.data},label:i.formatGroupLabel(z.data)}),z.options.map(function(we){return F(we,"".concat(Z,"-").concat(we.index))}))}else if(z.type==="option")return F(z,"".concat(z.index))});else if(x){var O=w({inputValue:m});if(O===null)return null;A=b.createElement(d,g,O)}else{var D=j({inputValue:m});if(D===null)return null;A=b.createElement(h,g,D)}var N={minMenuHeight:E,maxMenuHeight:k,menuPlacement:C,menuPosition:M,menuShouldScrollIntoView:P},B=b.createElement(NA,q({},g,N),function(z){var G=z.ref,Q=z.placerProps,Z=Q.placement,K=Q.maxHeight;return b.createElement(s,q({},g,N,{innerRef:G,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:Z}),b.createElement(p8,{captureEnabled:p,onTopArrive:R,onBottomArrive:L,lockEnabled:$},function(re){return b.createElement(u,q({},g,{innerRef:function(qe){i.getMenuListRef(qe),re(qe)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:K,focusedOption:y}),A)}))});return I||M==="fixed"?b.createElement(c,q({},g,{appendTo:I,controlElement:this.controlRef,menuPlacement:C,menuPosition:M}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return b.createElement(g8,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var h=d.map(function(y){return i.getOptionValue(y)}).join(a);return b.createElement("input",{name:u,type:"hidden",value:h})}else{var f=d.length>0?d.map(function(y,S){return b.createElement("input",{key:"i-".concat(S),name:u,type:"hidden",value:i.getOptionValue(y)})}):b.createElement("input",{name:u,type:"hidden",value:""});return b.createElement("div",null,f)}else{var g=d[0]?this.getOptionValue(d[0]):"";return b.createElement("input",{name:u,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return b.createElement(t8,q({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,c=u.className,d=u.id,h=u.isDisabled,f=u.menuIsOpen,g=this.state.isFocused,y=this.commonProps=this.getCommonProps();return b.createElement(l,q({},y,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:h,isFocused:g}),this.renderLiveRegion(),b.createElement(o,q({},y,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:h,isFocused:g,menuIsOpen:f}),b.createElement(s,q({},y,{isDisabled:h}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(a,q({},y,{isDisabled:h}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,h=o.instancePrefix,f=i.options,g=i.value,y=i.menuIsOpen,S=i.inputValue,p=i.isMulti,m=Hv(g),x={};if(a&&(g!==a.value||f!==a.options||y!==a.menuIsOpen||S!==a.inputValue)){var w=y?j8(i,m):[],E=y?i1(Ks(i,m),"".concat(h,"-option")):[],k=l?$8(o,m):null,_=D8(o,w),C=Ld(E,_);x={selectValue:m,focusedOption:_,focusedOptionId:C,focusableOptionsWithIds:E,focusedValue:k,clearFocusValueOnUpdate:!1}}var M=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},I=u,$=c&&d;return c&&!$&&(I={value:ws(p,m,m[0]||null),options:m,action:"initial-input-focus"},$=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(I=null),X(X(X({},x),M),{},{prevProps:i,ariaSelection:I,prevWasFocused:$})}}]),n}(b.Component);N_.defaultProps=I8;var R8=b.forwardRef(function(e,t){var n=ZR(e);return b.createElement(N_,q({ref:t},n))}),Jl=R8;const A8=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,F8=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,N8=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>v.jsxs(A8,{children:[v.jsx(F8,{children:"Місто"}),v.jsx(Jl,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),z8=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,V8=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,B8=({options:e=[],value:t,onChange:n,selectedCity:r})=>v.jsxs(z8,{children:[v.jsx(V8,{children:"Спосіб доставки"}),v.jsx(Jl,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),Rd=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Ad=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,H8=({deliveryMethod:e,officeOptions:t,ukrOfficeOptions:n,selectedOffice:r,selectedUkrOffice:i,setSelectedOffice:o,setSelectedUkrOffice:a})=>e==="nova"?v.jsxs(Rd,{children:[v.jsx(Ad,{children:"Відділення Нової пошти"}),v.jsx(Jl,{options:t,onChange:l=>o(l),value:r,placeholder:"Оберіть відділення..."})]}):e==="ukr"?v.jsxs(Rd,{children:[v.jsx(Ad,{children:"Відділення Укрпошти"}),v.jsx(Jl,{options:n,onChange:l=>a(l),value:i,placeholder:"Оберіть відділення..."})]}):e==="pickup"?v.jsxs(Rd,{children:[v.jsx(Ad,{children:"Самовивіз"}),v.jsxs("div",{style:{backgroundColor:"#f9f9f9",padding:"10px",borderRadius:"6px",border:"1px solid #ddd",fontSize:"14px",color:"#333",lineHeight:"1.4"},children:[v.jsx("p",{children:"Ви обрали самовивіз."}),v.jsx("p",{children:"Адреса магазину: вул. Казармена 6Г, Київ"}),v.jsx("p",{children:"Графік роботи: Вт, Ср, Пт, Сб, Нд — 11:00–20:00; вихідні: Пн, Чт"}),v.jsx("p",{children:"Телефон: +380 99 999 99"})]})]}):null,U8=T.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  width: 100%;
  
  @media screen and (min-width: 1200px) {
    width: 400px;
  }

  h3 {
    margin-top: 0;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #555;
  }

  hr {
    border: 0;
    border-top: 1px solid #eee;
    margin: 20px 0;
  }

  .total {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 20px;
    color: #000;
    margin-bottom: 25px;
  }
`;T.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;const W8=T.button`
  width: 100%;
  padding: 15px;
  background-color: #f58220; /* Ваш фірмовий помаранчевий */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e67616;
  }
  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    &:hover {
      background-color: #ccc;
    }
  }
`,G8=T.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  max-height: 240px; /* Обмежуємо висоту, щоб не розтягувати сторінку */
  overflow-y: auto;  /* Додаємо внутрішню прокрутку */
  border-bottom: 1px solid #eee;

  /* Стилізація скроллбару */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`,Y8=T.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px f6f6f6 solid;

  &:last-child {
    border-bottom: none;
  }

  .item-total {
    font-weight: 600;
    font-size: 14px;
    white-space: nowrap;
  }
`,X8=T.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,q8=T.div`
  flex: 1;
  
  .item-name {
    font-size: 13px;
    font-weight: 500;
    margin: 0 0 4px 0;
    color: #333;
    /* Обрізаємо текст, якщо назва задовга */
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .item-details {
    font-size: 12px;
    color: #888;
    margin: 0;
  }
`,K8=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>v.jsxs(U8,{children:[v.jsx("h3",{children:"Ваше замовлення"}),v.jsx(G8,{children:e.map((o,a)=>{var l,s;return v.jsxs(Y8,{children:[v.jsx(X8,{src:((s=(l=o.images)==null?void 0:l[0])==null?void 0:s.url)||Ea,alt:o.name}),v.jsxs(q8,{children:[v.jsx("p",{className:"item-name",children:o.name}),v.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),v.jsxs("span",{className:"item-total",children:[o.price*o.quantity," грн"]})]},`${o.id}-${a}`)})}),v.jsxs("div",{className:"summary-row",children:[v.jsxs("span",{children:["Товари (",n,")"]}),v.jsxs("span",{children:[t," грн"]})]}),v.jsxs("div",{className:"summary-row",children:[v.jsx("span",{children:"Доставка"}),v.jsx("span",{children:"За тарифами перевізника"})]}),v.jsx("hr",{}),v.jsxs("div",{className:"total",children:[v.jsx("span",{children:"Всього до сплати:"}),v.jsxs("span",{children:[t," грн"]})]}),v.jsx(W8,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&v.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var z_={exports:{}};function Z8(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Fd=Z8(b),Q8=yu;function J8(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Pp(){return(Pp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function eF(e,t){e.prototype=Object.create(t.prototype),J8(e.prototype.constructor=e,t)}function tF(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function ci(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var nF=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],c=0;(s=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},a1=nF;function s1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function rF(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var iF={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},oF="_";function l1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=oF),n==null&&(n=iF),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Dt(e,t){return e.permanents.indexOf(t)!==-1}function vc(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Dt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function u1(e,t){return t.split("").every(function(n,r){return Dt(e,r)||!vc(e,r,n)})}function Ro(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Dt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Dt(e,o)&&vc(e,o,a)){i=o+1;break}}return i}function V_(e,t){return Ro(e,t)===e.mask.length}function Ln(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Mp(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Dt(e,t.length);)t+=r[t.length];return t}if(t)return Mp(e,Ln(e,""),t,0);for(var o=0;o<r.length;o++)Dt(e,o)?t+=r[o]:t+=n;return t}function aF(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(c,d){return d<n||i<=d?c:Dt(e,d)?a[d]:o}).join("");for(var u=i;u<s.length;u++)Dt(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Ln(e,t)}function Mp(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=V_(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;f=u,Dt(e,h=r)&&f!==i[h];){if(r>=t.length&&(t+=i[r]),c=u,d=r,o&&Dt(e,d)&&c===o)return!0;if(++r>=i.length)return!1}var c,d,h,f;return!vc(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),Ln(e,t)):o||(t+=u),++r<i.length)}),t}function sF(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;c=s,Dt(e,u=r)&&c!==i[u];)if(++r>=i.length)return!1;var u,c;return(vc(e,r,s)||s===o)&&r++,r<i.length}),r-l}function lF(e,t){for(var n=t;0<=n;--n)if(!Dt(e,n))return n;return null}function qo(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Dt(e,r))return r;return null}function Nd(e){return e||e===0?e+"":""}function uF(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",c=0,d=0,h=Math.min(i.start,n.start);return n.end>i.start?d=(c=sF(e,r,u=s.slice(i.start,n.end),h))?i.length:0:s.length<r.length&&(d=r.length-s.length),s=r,d&&(d===1&&!i.length&&(h=i.start===n.start?qo(e,n.start):lF(e,n.start)),s=aF(e,s,h,d)),s=Mp(e,s,u,h),(h+=c)>=o.length?h=o.length:h<a.length&&!c?h=a.length:h>=a.length&&h<l&&c&&(h=qo(e,h)),u||(u=null),{value:s=Ln(e,s),enteredString:u,selection:{start:h,end:h}}}function cF(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function ht(e){return typeof e=="function"}function dF(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function B_(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function c1(e){return(B_()?dF():function(){return setTimeout(e,1e3/60)})(e)}function zd(e){(B_()||clearTimeout)(e)}var fF=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=c1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(zd(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var g=Q8.findDOMNode(ci(ci(i))),y=typeof window<"u"&&g instanceof window.Element;if(g&&!y)return null;if(g.nodeName!=="INPUT"&&(g=g.querySelector("input")),!g)throw new Error("react-input-mask: inputComponent doesn't contain input node");return g},i.getInputValue=function(){var g=i.getInputDOMNode();return g?g.value:null},i.setInputValue=function(g){var y=i.getInputDOMNode();y&&(i.value=g,y.value=g)},i.setCursorToEnd=function(){var g=Ro(i.maskOptions,i.value),y=qo(i.maskOptions,g);y!==null&&i.setCursorPosition(y)},i.setSelection=function(g,y,S){S===void 0&&(S={});var p=i.getInputDOMNode(),m=i.isFocused();p&&m&&(S.deferred||s1(p,g,y),i.selectionDeferId!==null&&zd(i.selectionDeferId),i.selectionDeferId=c1(function(){i.selectionDeferId=null,s1(p,g,y)}),i.previousSelection={start:g,end:y,length:Math.abs(y-g)})},i.getSelection=function(){return rF(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(g){i.setSelection(g,g)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var g=i.maskOptions,y=g.mask,S=g.maskChar,p=g.permanents,m=g.formatChars;return{mask:y,maskChar:S,permanents:p,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:m}},i.isInputAutofilled=function(g,y,S,p){var m=i.getInputDOMNode();try{if(m.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||p.end<S.length&&y.end===g.length},i.onChange=function(g){var y=ci(ci(i)).beforePasteState,S=ci(ci(i)).previousSelection,p=i.props.beforeMaskedValueChange,m=i.getInputValue(),x=i.value,w=i.getSelection();i.isInputAutofilled(m,w,x,S)&&(x=Ln(i.maskOptions,""),S={start:0,end:0,length:0}),y&&(S=y.selection,x=y.value,w={start:S.start+m.length,end:S.start+m.length,length:0},m=x.slice(0,S.start)+m+x.slice(S.end),i.beforePasteState=null);var E=uF(i.maskOptions,m,w,x,S),k=E.enteredString,_=E.selection,C=E.value;if(ht(p)){var M=p({value:C,selection:_},{value:x,selection:S},k,i.getBeforeMaskedValueChangeConfig());C=M.value,_=M.selection}i.setInputValue(C),ht(i.props.onChange)&&i.props.onChange(g),i.isWindowsPhoneBrowser?i.setSelection(_.start,_.end,{deferred:!0}):i.setSelection(_.start,_.end)},i.onFocus=function(g){var y=i.props.beforeMaskedValueChange,S=i.maskOptions,p=S.mask,m=S.prefix;if(i.focused=!0,i.mounted=!0,p){if(i.value)Ro(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var x=Ln(i.maskOptions,m),w=Ln(i.maskOptions,x),E=Ro(i.maskOptions,w),k=qo(i.maskOptions,E),_={start:k,end:k};if(ht(y)){var C=y({value:w,selection:_},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());w=C.value,_=C.selection}var M=w!==i.getInputValue();M&&i.setInputValue(w),M&&ht(i.props.onChange)&&i.props.onChange(g),i.setSelection(_.start,_.end)}i.runSaveSelectionLoop()}ht(i.props.onFocus)&&i.props.onFocus(g)},i.onBlur=function(g){var y=i.props.beforeMaskedValueChange,S=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,S&&!i.props.alwaysShowMask&&u1(i.maskOptions,i.value)){var p="";ht(y)&&(p=y({value:p,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var m=p!==i.getInputValue();m&&i.setInputValue(p),m&&ht(i.props.onChange)&&i.props.onChange(g)}ht(i.props.onBlur)&&i.props.onBlur(g)},i.onMouseDown=function(g){if(!i.focused&&document.addEventListener){i.mouseDownX=g.clientX,i.mouseDownY=g.clientY,i.mouseDownTime=new Date().getTime();var y=function S(p){if(document.removeEventListener("mouseup",S),i.focused){var m=Math.abs(p.clientX-i.mouseDownX),x=Math.abs(p.clientY-i.mouseDownY),w=Math.max(m,x),E=new Date().getTime()-i.mouseDownTime;(w<=10&&E<=200||w<=5&&E<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",y)}ht(i.props.onMouseDown)&&i.props.onMouseDown(g)},i.onPaste=function(g){ht(i.props.onPaste)&&i.props.onPaste(g),g.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(g){i.props.children==null&&ht(i.props.inputRef)&&i.props.inputRef(g)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,c=r.defaultValue,d=r.value;i.maskOptions=l1(o,a,l),c==null&&(c=""),d==null&&(d=c);var h=Nd(d);if(i.maskOptions.mask&&(s||h)&&(h=Ln(i.maskOptions,h),ht(u))){var f=r.value;r.value==null&&(f=c),h=u({value:h,selection:null},{value:f=Nd(f),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=h,i}eF(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=cF(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,c=this.maskOptions,d=a||this.isFocused(),h=this.props.value!=null,f=h?Nd(this.props.value):this.value,g=r?r.start:null;if(this.maskOptions=l1(l,s,u),this.maskOptions.mask){!c.mask&&this.isFocused()&&this.runSaveSelectionLoop();var y=this.maskOptions.mask&&this.maskOptions.mask!==c.mask;if(c.mask||h||(f=this.getInputValue()),(y||this.maskOptions.mask&&(f||d))&&(f=Ln(this.maskOptions,f)),y){var S=Ro(this.maskOptions,f);(g===null||S<g)&&(g=V_(this.maskOptions,f)?S:qo(this.maskOptions,S))}!this.maskOptions.mask||!u1(this.maskOptions,f)||d||h&&this.props.value||(f="");var p={start:g,end:g};if(ht(o)){var m=o({value:f,selection:p},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());f=m.value,p=m.selection}this.value=f;var x=this.getInputValue()!==this.value;x?(this.setInputValue(this.value),this.forceUpdate()):y&&this.forceUpdate();var w=!1;p.start!=null&&p.end!=null&&(w=!r||r.start!==p.start||r.end!==p.end),(w||x)&&this.setSelection(p.start,p.end)}else c.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&zd(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=tF(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){ht(o)||a1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Pp({},a);l.forEach(function(c){return delete s[c]}),r=o(s),l.filter(function(c){return r.props[c]!=null&&r.props[c]!==a[c]}).length&&a1(!1)}else r=Fd.createElement("input",Pp({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Fd.cloneElement(r,u)},t}(Fd.Component),pF=fF;z_.exports=pF;var hF=z_.exports;const mF=b1(hF);T.div`
  width: 100%;
  max-width: 750px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1440px;
  }
`;T.h2`
  text-align: left;
  color: #fff;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
`;T.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;T.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  flex: 1;
`;T.form`
  h3 {
    margin-top: 0;
    margin-bottom: 20px;
    color: #333;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }

  h3:not(:first-child) {
    margin-top: 30px;
  }
`;const Vd=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Bd=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Hd=T.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #f58220; /* Помаранчевий колір з кнопки */
  }
`;T.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  width: 100%;
  
  @media screen and (min-width: 1200px) {
    width: 400px;
  }

  h3 {
    margin-top: 0;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #555;
  }

  hr {
    border: 0;
    border-top: 1px solid #eee;
    margin: 20px 0;
  }

  .total {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 20px;
    color: #000;
    margin-bottom: 25px;
  }
`;const Ud=T.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;T.button`
  width: 100%;
  padding: 15px;
  background-color: #f58220; /* Ваш фірмовий помаранчевий */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e67616;
  }
  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    &:hover {
      background-color: #ccc;
    }
  }
`;T.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  max-height: 240px; /* Обмежуємо висоту, щоб не розтягувати сторінку */
  overflow-y: auto;  /* Додаємо внутрішню прокрутку */
  border-bottom: 1px solid #eee;

  /* Стилізація скроллбару */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`;T.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px f6f6f6 solid;

  &:last-child {
    border-bottom: none;
  }

  .item-total {
    font-weight: 600;
    font-size: 14px;
    white-space: nowrap;
  }
`;T.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`;T.div`
  flex: 1;
  
  .item-name {
    font-size: 13px;
    font-weight: 500;
    margin: 0 0 4px 0;
    color: #333;
    /* Обрізаємо текст, якщо назва задовга */
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .item-details {
    font-size: 12px;
    color: #888;
    margin: 0;
  }
`;const gF=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return v.jsxs(v.Fragment,{children:[v.jsx("h3",{children:"Контактні дані"}),v.jsxs(Vd,{children:[v.jsx(Bd,{children:"Прізвище та ім’я"}),v.jsx(Hd,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&v.jsx(Ud,{children:n.fullName})]}),v.jsxs(Vd,{children:[v.jsx(Bd,{children:"Номер телефону"}),v.jsx(mF,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>v.jsx(Hd,{...i,type:"tel"})}),n.phone&&v.jsx(Ud,{children:n.phone})]}),v.jsxs(Vd,{children:[v.jsx(Bd,{children:"E-mail"}),v.jsx(Hd,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&v.jsx(Ud,{children:n.email})]})]})},vF=T.div`
  width: 100%;
  max-width: 750px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
   max-width: 1448px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;T.h2`
  text-align: left;
  color: #fff;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
`;const yF=T.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,xF=T.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  flex: 1;
`;T.form`
  h3 {
    margin-top: 0;
    margin-bottom: 20px;
    color: #333;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }

  h3:not(:first-child) {
    margin-top: 30px;
  }
`;T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;T.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #f58220; /* Помаранчевий колір з кнопки */
  }
`;T.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  width: 100%;
  
  @media screen and (min-width: 1200px) {
    width: 400px;
  }

  h3 {
    margin-top: 0;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #555;
  }

  hr {
    border: 0;
    border-top: 1px solid #eee;
    margin: 20px 0;
  }

  .total {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 20px;
    color: #000;
    margin-bottom: 25px;
  }
`;T.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;T.button`
  width: 100%;
  padding: 15px;
  background-color: #f58220; /* Ваш фірмовий помаранчевий */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e67616;
  }
  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    &:hover {
      background-color: #ccc;
    }
  }
`;T.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  max-height: 240px; /* Обмежуємо висоту, щоб не розтягувати сторінку */
  overflow-y: auto;  /* Додаємо внутрішню прокрутку */
  border-bottom: 1px solid #eee;

  /* Стилізація скроллбару */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`;T.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px f6f6f6 solid;

  &:last-child {
    border-bottom: none;
  }

  .item-total {
    font-weight: 600;
    font-size: 14px;
    white-space: nowrap;
  }
`;T.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`;T.div`
  flex: 1;
  
  .item-name {
    font-size: 13px;
    font-weight: 500;
    margin: 0 0 4px 0;
    color: #333;
    /* Обрізаємо текст, якщо назва задовга */
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .item-details {
    font-size: 12px;
    color: #888;
    margin: 0;
  }
`;const bF=[{city:"Київ",address:"вул. Хрещатик, 1"},{city:"Київ",address:"вул. Січових Стрільців, 10"},{city:"Львів",address:"просп. Свободи, 5"}],d1={}.VITE_NP_API_KEY,f1="https://api.novaposhta.ua/v2.0/json/",wF=()=>{const e=Nn(L=>L.cart.items),t=nu(),[n,r]=b.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[i,o]=b.useState(""),[a,l]=b.useState(null),[s,u]=b.useState(null),[c,d]=b.useState(null),[h,f]=b.useState(null),[g,y]=b.useState([]),[S,p]=b.useState([]),[m,x]=b.useState([]),[w,E]=b.useState(""),k=e.reduce((L,F)=>L+F.price*F.quantity,0),_=e.reduce((L,F)=>L+F.quantity,0),C=()=>{const L=new Date().getFullYear().toString().slice(-2),F=Date.now().toString().slice(-4),A=Math.floor(100+Math.random()*900);return`${L}${F}${A}`};b.useEffect(()=>{if(i.length<2)return;const L=setTimeout(async()=>{const A=await(await fetch(f1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:d1,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:i}})})).json();y(A.data.map(O=>({value:O.Ref,label:O.Description})))},500);return()=>clearTimeout(L)},[i]),b.useEffect(()=>{if(!a||s!=="nova")return;(async()=>{const A=await(await fetch(f1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:d1,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:a.value}})})).json();p(A.data.map(O=>({value:O.Ref,label:O.Description})))})()},[a,s]),b.useEffect(()=>{if(s!=="ukr"||!a)return;const L=bF.filter(F=>F.city===a.label).filter(F=>F.address.toLowerCase().includes(w.toLowerCase())).slice(0,20);x(L.map((F,A)=>({value:A,label:F.address})))},[a,s,w]);const M=L=>{l(L),r(F=>({...F,city:(L==null?void 0:L.label)||"",postOffice:""})),u(null),d(null),f(null)},I=()=>{const L={};return n.fullName.trim().split(" ").length<2&&(L.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||(L.email="Некоректний email"),n.phone.replace(/\D/g,"").length<12&&(L.phone="Номер неповний"),a||(L.city=!0),s==="nova"&&!c&&(L.postOffice=!0),s==="ukr"&&!h&&(L.postOffice=!0),s||(L.delivery=!0),L},$=b.useMemo(I,[n,s,c,h,a]),P=Object.keys($).length===0&&e.length>0,j=async L=>{L.preventDefault();const F=C();await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:n.fullName,phone:n.phone,email:n.email,city:n.city,products:e.map(O=>({id:O.id,name:O.name,quantity:O.quantity})),status_order:"pending",order_number:F,delivery_method:s==="nova"?"Нова Пошта":s==="ukr"?"УкрПошта":"Самовивіз",delivery_address:s==="nova"?c==null?void 0:c.label:s==="ukr"?h==null?void 0:h.label:"Самовивіз"}})});const A={...n,city:a.label,deliveryMethod:s==="nova"?"Нова Пошта":s==="ukr"?"УкрПошта":"Самовивіз",address:s==="nova"?c==null?void 0:c.label:s==="ukr"?h==null?void 0:h.label:"Самовивіз",items:e,total:k,orderNumer:C()};t("/order-confirmation",{state:{order:A}})},R=b.useMemo(()=>{const L=[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}];return(a==null?void 0:a.label)==="Київ"&&L.push({value:"pickup",label:"Самовивіз"}),L},[a]);return v.jsx(vF,{children:v.jsxs(yF,{children:[v.jsxs(xF,{children:[v.jsx(gF,{formData:n,setFormData:r,errors:$}),v.jsx(N8,{cityOptions:g,selectedCity:a,onChange:M,onInputChange:o}),v.jsx(B8,{options:R,value:s,onChange:u,selectedCity:a}),v.jsx(H8,{deliveryMethod:s,officeOptions:S,ukrOfficeOptions:m,selectedOffice:c,selectedUkrOffice:h,setSelectedOffice:d,setSelectedUkrOffice:f,setUkrSearch:E})]}),v.jsx(K8,{cartItems:e,totalAmount:k,totalQuantity:_,isFormValid:P,handleSubmit:j})]})})},p1=T.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,SF=T.h1`
font-family: var(--second-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,di=T.p`
font-family: var(--second-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,_F=T.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,h1=T.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,EF=T.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,CF=T.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  font-size: 15px;

  &:last-child {
    border-bottom: none;
  }

  .item-info {
    font-weight: 500;
  }

  .item-price {
    font-weight: 700;
    color: #2c3e50;
  }
`,kF=T.div`
  background: #fff4e5; 
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #ffe3c1;
`,TF=T.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,Ss=T.button`
font-family: var(--second-font);
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;


  background-color: var(--orange-color);
  color: #fff;

  &:hover {
    background-color: #c55c10;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`,OF=()=>{var r;const e=nu(),n=(r=Qi().state)==null?void 0:r.order;return n?v.jsxs(p1,{children:[v.jsx(SF,{children:"Дякуємо за ваше замовлення!"}),v.jsxs(di,{children:["Ваше замовлення ",v.jsxs("strong",{children:["№",n.orderNumer]})," успішно прийняте."]}),v.jsx(di,{children:"Ми зв’яжемось з Вами в найближчий час"}),v.jsxs(_F,{children:[v.jsx(h1,{children:"Деталі замовлення:"}),v.jsx(EF,{children:n.items.map(i=>v.jsxs(CF,{children:[v.jsxs("span",{className:"item-info",children:[i.name," (x",i.quantity,")"]}),v.jsxs("span",{className:"item-price",children:[i.price*i.quantity," грн"]})]},i.id))}),v.jsxs(di,{children:[v.jsx("strong",{children:"Спосіб доставки:"})," ",n.deliveryMethod]}),v.jsxs(di,{children:[v.jsx("strong",{children:"Адреса отримання:"})," ",n.city,", ",n.address]})]}),n.paymentMethod==="online"&&v.jsxs(kF,{children:[v.jsx(h1,{children:"Оплата"}),v.jsx(di,{style:{marginBottom:"15px"},children:"Натисніть кнопку нижче для миттєвої оплати:"}),v.jsx(Ss,{primary:!0,onClick:()=>window.location.href=n.paymentLink,children:"Оплатити зараз"})]}),v.jsxs(TF,{children:[v.jsx(Ss,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),v.jsx(Ss,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):v.jsxs(p1,{children:[v.jsx(di,{children:"Завантаження даних замовлення..."}),v.jsx(Ss,{onClick:()=>e("/"),children:"На головну"})]})},PF=T.section`
  background-color: var(--second-background);
`,MF=T.div`
  width: 100%;
  max-width: 750px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-family: var(--main-font);

  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: 1200px) {
   max-width: 1448px;
    padding-left: 0px;
    padding-right: 0px;
  }
`,IF=T.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,jF=T.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,$F=T.p`

  font-size: 16px;
  color: #666;
`,DF=T.section`
  margin-bottom: 50px;
`,LF=T.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,RF=T.section`
  margin-bottom: 60px;
`,AF=T.h2`
  margin-bottom: 30px;
`,FF=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,_s=T.div`
  background-color: ${e=>e.color};
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`,NF=()=>v.jsxs(PF,{children:[v.jsxs(MF,{children:[v.jsxs(IF,{children:[v.jsx(jF,{children:"Про Дідів Хлів"}),v.jsx($F,{children:"Даємо друге життя якісним велозапчастинам"})]}),v.jsxs(DF,{children:[v.jsx(LF,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),v.jsx(OS,{})]}),v.jsxs(RF,{children:[v.jsx(AF,{children:"Наша майстерня"}),v.jsxs(FF,{children:[v.jsx(_s,{color:"#e2e2e2",children:"Фото майстерні"}),v.jsx(_s,{color:"#d1d1d1",children:"Процес діагностики"}),v.jsx(_s,{color:"#bcbcbc",children:"Склад запчастин"}),v.jsx(_s,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),zF=()=>{const{pathname:e}=Qi();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},VF=T.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,BF=T.div`
  width: 100%;
  max-width: 750px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1448px;
    padding-left: 0px;
    padding-right: 0px;
  }
`,HF=T.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,UF=T.p`
  color: #585555;
  margin-bottom: 40px;
`,WF=T.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,GF=T.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,Es=T.div`
  h3 {
    color:  var(--orange-color);
    font-size: 18px;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  p {
    color:  var(--black-color);
    line-height: 1.5;
  }
`,YF=T.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,XF=T.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,qF=T.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,KF=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,m1=T.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  background-color: var(--second-background);
  border: 1px solid #eee;
  border-radius: 50px;
  text-decoration: none;
  color: var(--brown-color);
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--orange-color);
    color: white;
    border-color: var(--orange-color);
    transform: translateY(-2px);
  }

  span {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;T.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;const ZF=T.div`
  margin-top: 30px;
  font-style: italic;
  color: var(--orange-color);
  font-weight: 500;
  position: relative;
  
  &::before, &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 30px;
    height: 1px;
    background-color: var(--orange-color);
  }
  
  &::before { left: 0; }
  &::after { right: 0; }

 
`,QF=()=>v.jsx(VF,{children:v.jsxs(BF,{children:[v.jsx(HF,{children:"Контакти"}),v.jsx(UF,{children:"Зв’яжіться з нами для консультації або замовлення"}),v.jsxs(WF,{children:[v.jsxs(GF,{children:[v.jsxs(Es,{children:[v.jsx("h3",{children:"Адреса"}),v.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),v.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),v.jsxs(Es,{children:[v.jsx("h3",{children:"Телефон"}),v.jsx("p",{children:"+38 (097) 123-45-67"})]}),v.jsxs(Es,{children:[v.jsx("h3",{children:"Email"}),v.jsx("p",{children:"didivhliv.com"})]}),v.jsxs(Es,{children:[v.jsx("h3",{children:"Графік роботи"}),v.jsx("p",{children:"З 11:00 - 20:00"}),v.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),v.jsxs(YF,{children:[v.jsx(XF,{children:"Ми в соцмережах"}),v.jsx(qF,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),v.jsxs(KF,{children:[v.jsxs(m1,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[v.jsx("svg",{width:"20px",children:v.jsx("use",{href:`${cn}#icon-instagram`})}),v.jsx("span",{children:"Instagram"})]}),v.jsxs(m1,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[v.jsx("svg",{width:"20px",children:v.jsx("use",{href:`${cn}#icon-telegram`})}),v.jsx("span",{children:"Telegram"})]})]}),v.jsx(ZF,{children:"Приєднуйся до спільноти!"})]})]})]})}),JF="";function eN(){return console.log(JF),v.jsxs(k3,{children:[v.jsx(lM,{}),v.jsx(zF,{}),v.jsx(b.Suspense,{fallback:v.jsx(aM,{}),children:v.jsx(cE,{children:v.jsxs(mt,{path:"/",element:v.jsx(QO,{}),children:[v.jsx(mt,{index:!0,element:v.jsx(Uj,{})}),v.jsx(mt,{path:"catalog",element:v.jsx(b3,{})}),v.jsx(mt,{path:"/catalog/:category",element:v.jsx(H$,{})}),v.jsx(mt,{path:"/product/:id",element:v.jsx(HL,{})}),v.jsx(mt,{path:"cart",element:v.jsx(gR,{})}),v.jsx(mt,{path:"favorite",element:v.jsx(FR,{})}),v.jsx(mt,{path:"checkout",element:v.jsx(wF,{})}),v.jsx(mt,{path:"/order-confirmation",element:v.jsx(OF,{})}),v.jsx(mt,{path:"about",element:v.jsx(NF,{})}),v.jsx(mt,{path:"contacts",element:v.jsx(QF,{})}),v.jsx(mt,{path:"delivery",element:v.jsx(UR,{})}),v.jsx(mt,{path:"*",element:v.jsx(C3,{})})]})})})]})}var Im="persist:",H_="persist/FLUSH",jm="persist/REHYDRATE",U_="persist/PAUSE",W_="persist/PERSIST",G_="persist/PURGE",Y_="persist/REGISTER",tN=-1;function Zs(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Zs=function(n){return typeof n}:Zs=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Zs(e)}function g1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function nN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?g1(n,!0).forEach(function(r){rN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function iN(e,t,n,r){r.debug;var i=nN({},n);return e&&Zs(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function oN(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:Im).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(E){return E}:typeof e.serialize=="function"?l=e.serialize:l=aN;var s=e.writeFailHandler||null,u={},c={},d=[],h=null,f=null,g=function(E){Object.keys(E).forEach(function(k){p(k)&&u[k]!==E[k]&&d.indexOf(k)===-1&&d.push(k)}),Object.keys(u).forEach(function(k){E[k]===void 0&&p(k)&&d.indexOf(k)===-1&&u[k]!==void 0&&d.push(k)}),h===null&&(h=setInterval(y,i)),u=E};function y(){if(d.length===0){h&&clearInterval(h),h=null;return}var w=d.shift(),E=r.reduce(function(k,_){return _.in(k,w,u)},u[w]);if(E!==void 0)try{c[w]=l(E)}catch(k){console.error("redux-persist/createPersistoid: error serializing state",k)}else delete c[w];d.length===0&&S()}function S(){Object.keys(c).forEach(function(w){u[w]===void 0&&delete c[w]}),f=a.setItem(o,l(c)).catch(m)}function p(w){return!(n&&n.indexOf(w)===-1&&w!=="_persist"||t&&t.indexOf(w)!==-1)}function m(w){s&&s(w)}var x=function(){for(;d.length!==0;)y();return f||Promise.resolve()};return{update:g,flush:x}}function aN(e){return JSON.stringify(e)}function sN(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Im).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=lN,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,c){return c.out(u,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function lN(e){return JSON.parse(e)}function uN(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Im).concat(e.key);return t.removeItem(n,cN)}function cN(e){}function v1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function On(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?v1(n,!0).forEach(function(r){dN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fN(e,t){if(e==null)return{};var n=pN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function pN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var hN=5e3;function X_(e,t){var n=e.version!==void 0?e.version:tN;e.debug;var r=e.stateReconciler===void 0?iN:e.stateReconciler,i=e.getStoredState||sN,o=e.timeout!==void 0?e.timeout:hN,a=null,l=!1,s=!0,u=function(d){return d._persist.rehydrated&&a&&!s&&a.update(d),d};return function(c,d){var h=c||{},f=h._persist,g=fN(h,["_persist"]),y=g;if(d.type===W_){var S=!1,p=function(C,M){S||(d.rehydrate(e.key,C,M),S=!0)};if(o&&setTimeout(function(){!S&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=oN(e)),f)return On({},t(y,d),{_persist:f});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(_){var C=e.migrate||function(M,I){return Promise.resolve(M)};C(_,n).then(function(M){p(M)},function(M){p(void 0,M)})},function(_){p(void 0,_)}),On({},t(y,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===G_)return l=!0,d.result(uN(e)),On({},t(y,d),{_persist:f});if(d.type===H_)return d.result(a&&a.flush()),On({},t(y,d),{_persist:f});if(d.type===U_)s=!0;else if(d.type===jm){if(l)return On({},y,{_persist:On({},f,{rehydrated:!0})});if(d.key===e.key){var m=t(y,d),x=d.payload,w=r!==!1&&x!==void 0?r(x,c,m,e):m,E=On({},w,{_persist:On({},f,{rehydrated:!0})});return u(E)}}}if(!f)return t(c,d);var k=t(y,d);return k===y?c:u(On({},k,{_persist:f}))}}function y1(e){return vN(e)||gN(e)||mN()}function mN(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function gN(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function vN(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function x1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ip(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?x1(n,!0).forEach(function(r){yN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q_={registry:[],bootstrapped:!1},xN=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:q_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Y_:return Ip({},t,{registry:[].concat(y1(t.registry),[n.key])});case jm:var r=t.registry.indexOf(n.key),i=y1(t.registry);return i.splice(r,1),Ip({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function bN(e,t,n){var r=n||!1,i=im(xN,q_,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:Y_,key:u})},a=function(u,c,d){var h={type:jm,payload:c,err:d,key:u};e.dispatch(h),i.dispatch(h),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Ip({},i,{purge:function(){var u=[];return e.dispatch({type:G_,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:H_,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){e.dispatch({type:U_})},persist:function(){e.dispatch({type:W_,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var $m={},Dm={};Dm.__esModule=!0;Dm.default=_N;function Qs(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Qs=function(n){return typeof n}:Qs=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Qs(e)}function Wd(){}var wN={getItem:Wd,setItem:Wd,removeItem:Wd};function SN(e){if((typeof self>"u"?"undefined":Qs(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function _N(e){var t="".concat(e,"Storage");return SN(t)?self[t]:wN}$m.__esModule=!0;$m.default=kN;var EN=CN(Dm);function CN(e){return e&&e.__esModule?e:{default:e}}function kN(e){var t=(0,EN.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var Lm=void 0,TN=ON($m);function ON(e){return e&&e.__esModule?e:{default:e}}var PN=(0,TN.default)("local");Lm=PN;const MN={key:"cart",storage:Lm},IN={key:"favorites",storage:Lm},jN=X_(MN,oj),$N=X_(IN,V$),K_=B5({reducer:{cart:jN,favorites:$N},middleware:e=>e({serializableCheck:!1})});bN(K_);Kd.createRoot(document.getElementById("root")).render(v.jsx(cO,{store:K_,children:v.jsx(W.StrictMode,{children:v.jsx(gE,{basename:"/Didiv/",children:v.jsx(eN,{})})})}));
