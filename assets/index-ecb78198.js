function J_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var J=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function w1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function _t(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var S1={exports:{}},eu={},_1={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),e2=Symbol.for("react.portal"),t2=Symbol.for("react.fragment"),n2=Symbol.for("react.strict_mode"),r2=Symbol.for("react.profiler"),i2=Symbol.for("react.provider"),o2=Symbol.for("react.context"),a2=Symbol.for("react.forward_ref"),s2=Symbol.for("react.suspense"),l2=Symbol.for("react.memo"),u2=Symbol.for("react.lazy"),Nm=Symbol.iterator;function c2(e){return e===null||typeof e!="object"?null:(e=Nm&&e[Nm]||e["@@iterator"],typeof e=="function"?e:null)}var E1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C1=Object.assign,k1={};function Xi(e,t,n){this.props=e,this.context=t,this.refs=k1,this.updater=n||E1}Xi.prototype.isReactComponent={};Xi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function T1(){}T1.prototype=Xi.prototype;function jp(e,t,n){this.props=e,this.context=t,this.refs=k1,this.updater=n||E1}var $p=jp.prototype=new T1;$p.constructor=jp;C1($p,Xi.prototype);$p.isPureReactComponent=!0;var zm=Array.isArray,O1=Object.prototype.hasOwnProperty,Dp={current:null},P1={key:!0,ref:!0,__self:!0,__source:!0};function M1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)O1.call(t,r)&&!P1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ca,type:e,key:o,ref:a,props:i,_owner:Dp.current}}function d2(e,t){return{$$typeof:Ca,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ca}function f2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vm=/\/+/g;function wc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?f2(""+e.key):t.toString(36)}function Cs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ca:case e2:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+wc(a,0):r,zm(i)?(n="",e!=null&&(n=e.replace(Vm,"$&/")+"/"),Cs(i,t,n,"",function(u){return u})):i!=null&&(Lp(i)&&(i=d2(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Vm,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",zm(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+wc(o,l);a+=Cs(o,t,n,s,i)}else if(s=c2(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+wc(o,l++),a+=Cs(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ha(e,t,n){if(e==null)return e;var r=[],i=0;return Cs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function p2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ct={current:null},ks={transition:null},h2={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:ks,ReactCurrentOwner:Dp};ne.Children={map:Ha,forEach:function(e,t,n){Ha(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ha(e,function(){t++}),t},toArray:function(e){return Ha(e,function(t){return t})||[]},only:function(e){if(!Lp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ne.Component=Xi;ne.Fragment=t2;ne.Profiler=r2;ne.PureComponent=jp;ne.StrictMode=n2;ne.Suspense=s2;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h2;ne.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=C1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Dp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)O1.call(t,s)&&!P1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ca,type:e.type,key:i,ref:o,props:r,_owner:a}};ne.createContext=function(e){return e={$$typeof:o2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:i2,_context:e},e.Consumer=e};ne.createElement=M1;ne.createFactory=function(e){var t=M1.bind(null,e);return t.type=e,t};ne.createRef=function(){return{current:null}};ne.forwardRef=function(e){return{$$typeof:a2,render:e}};ne.isValidElement=Lp;ne.lazy=function(e){return{$$typeof:u2,_payload:{_status:-1,_result:e},_init:p2}};ne.memo=function(e,t){return{$$typeof:l2,type:e,compare:t===void 0?null:t}};ne.startTransition=function(e){var t=ks.transition;ks.transition={};try{e()}finally{ks.transition=t}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(e,t){return ct.current.useCallback(e,t)};ne.useContext=function(e){return ct.current.useContext(e)};ne.useDebugValue=function(){};ne.useDeferredValue=function(e){return ct.current.useDeferredValue(e)};ne.useEffect=function(e,t){return ct.current.useEffect(e,t)};ne.useId=function(){return ct.current.useId()};ne.useImperativeHandle=function(e,t,n){return ct.current.useImperativeHandle(e,t,n)};ne.useInsertionEffect=function(e,t){return ct.current.useInsertionEffect(e,t)};ne.useLayoutEffect=function(e,t){return ct.current.useLayoutEffect(e,t)};ne.useMemo=function(e,t){return ct.current.useMemo(e,t)};ne.useReducer=function(e,t,n){return ct.current.useReducer(e,t,n)};ne.useRef=function(e){return ct.current.useRef(e)};ne.useState=function(e){return ct.current.useState(e)};ne.useSyncExternalStore=function(e,t,n){return ct.current.useSyncExternalStore(e,t,n)};ne.useTransition=function(){return ct.current.useTransition()};ne.version="18.2.0";_1.exports=ne;var b=_1.exports;const W=w1(b),Gd=J_({__proto__:null,default:W},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m2=b,g2=Symbol.for("react.element"),v2=Symbol.for("react.fragment"),y2=Object.prototype.hasOwnProperty,x2=m2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b2={key:!0,ref:!0,__self:!0,__source:!0};function I1(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)y2.call(t,r)&&!b2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:g2,type:e,key:o,ref:a,props:i,_owner:x2.current}}eu.Fragment=v2;eu.jsx=I1;eu.jsxs=I1;S1.exports=eu;var y=S1.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ko.apply(this,arguments)}var ar;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ar||(ar={}));const Bm="popstate";function w2(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Yd("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Js(i)}return _2(t,n,null,e)}function $e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function S2(){return Math.random().toString(36).substr(2,8)}function Um(e,t){return{usr:e.state,key:e.key,idx:t}}function Yd(e,t,n,r){return n===void 0&&(n=null),Ko({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ki(t):t,{state:n,key:t&&t.key||r||S2()})}function Js(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ki(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function _2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=ar.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(Ko({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){l=ar.Pop;let S=c(),p=S==null?null:S-u;u=S,s&&s({action:l,location:v.location,delta:p})}function f(S,p){l=ar.Push;let m=Yd(v.location,S,p);n&&n(m,S),u=c()+1;let x=Um(m,u),w=v.createHref(m);try{a.pushState(x,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(w)}o&&s&&s({action:l,location:v.location,delta:1})}function h(S,p){l=ar.Replace;let m=Yd(v.location,S,p);n&&n(m,S),u=c();let x=Um(m,u),w=v.createHref(m);a.replaceState(x,"",w),o&&s&&s({action:l,location:v.location,delta:0})}function g(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof S=="string"?S:Js(S);return $e(p,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,p)}let v={get action(){return l},get location(){return e(i,a)},listen(S){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Bm,d),s=S,()=>{i.removeEventListener(Bm,d),s=null}},createHref(S){return t(i,S)},createURL:g,encodeLocation(S){let p=g(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:h,go(S){return a.go(S)}};return v}var Hm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hm||(Hm={}));function E2(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ki(t):t,i=Ap(r.pathname||"/",n);if(i==null)return null;let o=j1(e);C2(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=D2(o[l],A2(i));return a}function j1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&($e(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=dr([r,s.relativePath]),c=n.concat(s);o.children&&o.children.length>0&&($e(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),j1(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:j2(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of $1(o.path))i(o,a,s)}),t}function $1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=$1(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function C2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const k2=/^:\w+$/,T2=3,O2=2,P2=1,M2=10,I2=-2,Wm=e=>e==="*";function j2(e,t){let n=e.split("/"),r=n.length;return n.some(Wm)&&(r+=I2),t&&(r+=O2),n.filter(i=>!Wm(i)).reduce((i,o)=>i+(k2.test(o)?T2:o===""?P2:M2),r)}function $2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function D2(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=L2({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;o.push({params:r,pathname:dr([i,c.pathname]),pathnameBase:V2(dr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=dr([i,c.pathnameBase]))}return o}function L2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=R2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=l[d]||"";a=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=F2(l[d]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function R2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Rp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function A2(e){try{return decodeURI(e)}catch(t){return Rp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function F2(e,t){try{return decodeURIComponent(e)}catch(n){return Rp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ap(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function N2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ki(e):e;return{pathname:n?n.startsWith("/")?n:z2(n,t):t,search:B2(r),hash:U2(i)}}function z2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function D1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function L1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ki(e):(i=Ko({},e),$e(!i.pathname||!i.pathname.includes("?"),Sc("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),Sc("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),Sc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}l=d>=0?t[d]:"/"}let s=N2(i,l),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const dr=e=>e.join("/").replace(/\/\/+/g,"/"),V2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),B2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,U2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function H2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const R1=["post","put","patch","delete"];new Set(R1);const W2=["get",...R1];new Set(W2);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},el.apply(this,arguments)}const Fp=b.createContext(null),G2=b.createContext(null),Zi=b.createContext(null),tu=b.createContext(null),qn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),A1=b.createContext(null);function Y2(e,t){let{relative:n}=t===void 0?{}:t;ka()||$e(!1);let{basename:r,navigator:i}=b.useContext(Zi),{hash:o,pathname:a,search:l}=z1(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:dr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function ka(){return b.useContext(tu)!=null}function Qi(){return ka()||$e(!1),b.useContext(tu).location}function F1(e){b.useContext(Zi).static||b.useLayoutEffect(e)}function nu(){let{isDataRoute:e}=b.useContext(qn);return e?lE():q2()}function q2(){ka()||$e(!1);let e=b.useContext(Fp),{basename:t,navigator:n}=b.useContext(Zi),{matches:r}=b.useContext(qn),{pathname:i}=Qi(),o=JSON.stringify(D1(r).map(s=>s.pathnameBase)),a=b.useRef(!1);return F1(()=>{a.current=!0}),b.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let c=L1(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:dr([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}const X2=b.createContext(null);function K2(e){let t=b.useContext(qn).outlet;return t&&b.createElement(X2.Provider,{value:e},t)}function N1(){let{matches:e}=b.useContext(qn),t=e[e.length-1];return t?t.params:{}}function z1(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(qn),{pathname:i}=Qi(),o=JSON.stringify(D1(r).map(a=>a.pathnameBase));return b.useMemo(()=>L1(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Z2(e,t){return Q2(e,t)}function Q2(e,t,n){ka()||$e(!1);let{navigator:r}=b.useContext(Zi),{matches:i}=b.useContext(qn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Qi(),u;if(t){var c;let v=typeof t=="string"?Ki(t):t;l==="/"||(c=v.pathname)!=null&&c.startsWith(l)||$e(!1),u=v}else u=s;let d=u.pathname||"/",f=l==="/"?d:d.slice(l.length)||"/",h=E2(e,{pathname:f}),g=rE(h&&h.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:dr([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:dr([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&g?b.createElement(tu.Provider,{value:{location:el({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ar.Pop}},g):g}function J2(){let e=sE(),t=H2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const eE=b.createElement(J2,null);class tE extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(qn.Provider,{value:this.props.routeContext},b.createElement(A1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nE(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Fp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(qn.Provider,{value:t},r)}function rE(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||$e(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let c=s.route.id?a==null?void 0:a[s.route.id]:null,d=null;n&&(d=s.route.errorElement||eE);let f=t.concat(o.slice(0,u+1)),h=()=>{let g;return c?g=d:s.route.Component?g=b.createElement(s.route.Component,null):s.route.element?g=s.route.element:g=l,b.createElement(nE,{match:s,routeContext:{outlet:l,matches:f,isDataRoute:n!=null},children:g})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?b.createElement(tE,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:h(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):h()},null)}var V1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(V1||{}),tl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(tl||{});function iE(e){let t=b.useContext(Fp);return t||$e(!1),t}function oE(e){let t=b.useContext(G2);return t||$e(!1),t}function aE(e){let t=b.useContext(qn);return t||$e(!1),t}function B1(e){let t=aE(),n=t.matches[t.matches.length-1];return n.route.id||$e(!1),n.route.id}function sE(){var e;let t=b.useContext(A1),n=oE(tl.UseRouteError),r=B1(tl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function lE(){let{router:e}=iE(V1.UseNavigateStable),t=B1(tl.UseNavigateStable),n=b.useRef(!1);return F1(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,el({fromRouteId:t},o)))},[e,t])}function uE(e){return K2(e.context)}function mt(e){$e(!1)}function cE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ar.Pop,navigator:o,static:a=!1}=e;ka()&&$e(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=Ki(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:h="default"}=r,g=b.useMemo(()=>{let v=Ap(u,l);return v==null?null:{location:{pathname:v,search:c,hash:d,state:f,key:h},navigationType:i}},[l,u,c,d,f,h,i]);return g==null?null:b.createElement(Zi.Provider,{value:s},b.createElement(tu.Provider,{children:n,value:g}))}function dE(e){let{children:t,location:n}=e;return Z2(qd(t),n)}new Promise(()=>{});function qd(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,qd(r.props.children,o));return}r.type!==mt&&$e(!1),!r.props.index||!r.props.children||$e(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=qd(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xd(){return Xd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xd.apply(this,arguments)}function fE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function pE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function hE(e,t){return e.button===0&&(!t||t==="_self")&&!pE(e)}const mE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],gE="startTransition",Gm=Gd[gE];function vE(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=w2({window:i,v5Compat:!0}));let a=o.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=b.useCallback(d=>{u&&Gm?Gm(()=>s(d)):s(d)},[s,u]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(cE,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const yE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oe=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:c}=t,d=fE(t,mE),{basename:f}=b.useContext(Zi),h,g=!1;if(typeof u=="string"&&xE.test(u)&&(h=u,yE))try{let m=new URL(window.location.href),x=u.startsWith("//")?new URL(m.protocol+u):new URL(u),w=Ap(x.pathname,f);x.origin===m.origin&&w!=null?u=w+x.search+x.hash:g=!0}catch{}let v=Y2(u,{relative:i}),S=bE(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:i});function p(m){r&&r(m),m.defaultPrevented||S(m)}return b.createElement("a",Xd({},d,{href:h||v,onClick:g||o?r:p,ref:n,target:s}))});var Ym;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Ym||(Ym={}));var qm;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qm||(qm={}));function bE(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=nu(),s=Qi(),u=z1(e,{relative:a});return b.useCallback(c=>{if(hE(c,n)){c.preventDefault();let d=r!==void 0?r:Js(s)===Js(u);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}var Kd={},U1={exports:{}},Lt={},H1={exports:{}},W1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,D){var N=O.length;O.push(D);e:for(;0<N;){var B=N-1>>>1,z=O[B];if(0<i(z,D))O[B]=D,O[N]=z,N=B;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var D=O[0],N=O.pop();if(N!==D){O[0]=N;e:for(var B=0,z=O.length,G=z>>>1;B<G;){var Q=2*(B+1)-1,Z=O[Q],K=Q+1,re=O[K];if(0>i(Z,N))K<z&&0>i(re,Z)?(O[B]=re,O[K]=N,B=K):(O[B]=Z,O[Q]=N,B=Q);else if(K<z&&0>i(re,N))O[B]=re,O[K]=N,B=K;else break e}}return D}function i(O,D){var N=O.sortIndex-D.sortIndex;return N!==0?N:O.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,d=null,f=3,h=!1,g=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(O){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=O)r(u),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(u)}}function w(O){if(v=!1,x(O),!g)if(n(s)!==null)g=!0,F(C);else{var D=n(u);D!==null&&A(w,D.startTime-O)}}function C(O,D){g=!1,v&&(v=!1,p(E),E=-1),h=!0;var N=f;try{for(x(D),d=n(s);d!==null&&(!(d.expirationTime>D)||O&&!$());){var B=d.callback;if(typeof B=="function"){d.callback=null,f=d.priorityLevel;var z=B(d.expirationTime<=D);D=e.unstable_now(),typeof z=="function"?d.callback=z:d===n(s)&&r(s),x(D)}else r(s);d=n(s)}if(d!==null)var G=!0;else{var Q=n(u);Q!==null&&A(w,Q.startTime-D),G=!1}return G}finally{d=null,f=N,h=!1}}var k=!1,_=null,E=-1,M=5,I=-1;function $(){return!(e.unstable_now()-I<M)}function P(){if(_!==null){var O=e.unstable_now();I=O;var D=!0;try{D=_(!0,O)}finally{D?j():(k=!1,_=null)}}else k=!1}var j;if(typeof m=="function")j=function(){m(P)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,L=R.port2;R.port1.onmessage=P,j=function(){L.postMessage(null)}}else j=function(){S(P,0)};function F(O){_=O,k||(k=!0,j())}function A(O,D){E=S(function(){O(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,F(C))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var N=f;f=D;try{return O()}finally{f=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,D){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var N=f;f=O;try{return D()}finally{f=N}},e.unstable_scheduleCallback=function(O,D,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,O){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=N+z,O={id:c++,callback:D,priorityLevel:O,startTime:N,expirationTime:z,sortIndex:-1},N>B?(O.sortIndex=N,t(u,O),n(s)===null&&O===n(u)&&(v?(p(E),E=-1):v=!0,A(w,N-B))):(O.sortIndex=z,t(s,O),g||h||(g=!0,F(C))),O},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(O){var D=f;return function(){var N=f;f=D;try{return O.apply(this,arguments)}finally{f=N}}}})(W1);H1.exports=W1;var wE=H1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1=b,$t=wE;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y1=new Set,Zo={};function Jr(e,t){$i(e,t),$i(e+"Capture",t)}function $i(e,t){for(Zo[e]=t,e=0;e<t.length;e++)Y1.add(t[e])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zd=Object.prototype.hasOwnProperty,SE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xm={},Km={};function _E(e){return Zd.call(Km,e)?!0:Zd.call(Xm,e)?!1:SE.test(e)?Km[e]=!0:(Xm[e]=!0,!1)}function EE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function CE(e,t,n,r){if(t===null||typeof t>"u"||EE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function dt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){qe[e]=new dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];qe[t]=new dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){qe[e]=new dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){qe[e]=new dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){qe[e]=new dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){qe[e]=new dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){qe[e]=new dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){qe[e]=new dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){qe[e]=new dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Np=/[\-:]([a-z])/g;function zp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Np,zp);qe[t]=new dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Np,zp);qe[t]=new dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Np,zp);qe[t]=new dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){qe[e]=new dt(e,1,!1,e.toLowerCase(),null,!1,!1)});qe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){qe[e]=new dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vp(e,t,n,r){var i=qe.hasOwnProperty(t)?qe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(CE(t,n,i,r)&&(n=null),r||i===null?_E(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xn=G1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),pi=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),Bp=Symbol.for("react.strict_mode"),Qd=Symbol.for("react.profiler"),q1=Symbol.for("react.provider"),X1=Symbol.for("react.context"),Up=Symbol.for("react.forward_ref"),Jd=Symbol.for("react.suspense"),ef=Symbol.for("react.suspense_list"),Hp=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),K1=Symbol.for("react.offscreen"),Zm=Symbol.iterator;function po(e){return e===null||typeof e!="object"?null:(e=Zm&&e[Zm]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,_c;function Oo(e){if(_c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_c=t&&t[1]||""}return`
`+_c+e}var Ec=!1;function Cc(e,t){if(!e||Ec)return"";Ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ec=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Oo(e):""}function kE(e){switch(e.tag){case 5:return Oo(e.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return e=Cc(e.type,!1),e;case 11:return e=Cc(e.type.render,!1),e;case 1:return e=Cc(e.type,!0),e;default:return""}}function tf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hi:return"Fragment";case pi:return"Portal";case Qd:return"Profiler";case Bp:return"StrictMode";case Jd:return"Suspense";case ef:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case X1:return(e.displayName||"Context")+".Consumer";case q1:return(e._context.displayName||"Context")+".Provider";case Up:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hp:return t=e.displayName||null,t!==null?t:tf(e.type)||"Memo";case nr:t=e._payload,e=e._init;try{return tf(e(t))}catch{}}return null}function TE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tf(t);case 8:return t===Bp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Z1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function OE(e){var t=Z1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ga(e){e._valueTracker||(e._valueTracker=OE(e))}function Q1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Z1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nf(e,t){var n=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function J1(e,t){t=t.checked,t!=null&&Vp(e,"checked",t,!1)}function rf(e,t){J1(e,t);var n=wr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?of(e,t.type,n):t.hasOwnProperty("defaultValue")&&of(e,t.type,wr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Jm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function of(e,t,n){(t!=="number"||nl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Po=Array.isArray;function Ci(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function af(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function eg(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(Po(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wr(n)}}function ey(e,t){var n=wr(t.value),r=wr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function tg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ty(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ty(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ya,ny=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ya=Ya||document.createElement("div"),Ya.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ya.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PE=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(e){PE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ao[t]=Ao[e]})});function ry(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ao.hasOwnProperty(e)&&Ao[e]?(""+t).trim():t+"px"}function iy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ry(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ME=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lf(e,t){if(t){if(ME[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function uf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cf=null;function Wp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var df=null,ki=null,Ti=null;function ng(e){if(e=Pa(e)){if(typeof df!="function")throw Error(V(280));var t=e.stateNode;t&&(t=su(t),df(e.stateNode,e.type,t))}}function oy(e){ki?Ti?Ti.push(e):Ti=[e]:ki=e}function ay(){if(ki){var e=ki,t=Ti;if(Ti=ki=null,ng(e),t)for(e=0;e<t.length;e++)ng(t[e])}}function sy(e,t){return e(t)}function ly(){}var kc=!1;function uy(e,t,n){if(kc)return e(t,n);kc=!0;try{return sy(e,t,n)}finally{kc=!1,(ki!==null||Ti!==null)&&(ly(),ay())}}function Jo(e,t){var n=e.stateNode;if(n===null)return null;var r=su(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var ff=!1;if(Bn)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){ff=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{ff=!1}function IE(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Fo=!1,rl=null,il=!1,pf=null,jE={onError:function(e){Fo=!0,rl=e}};function $E(e,t,n,r,i,o,a,l,s){Fo=!1,rl=null,IE.apply(jE,arguments)}function DE(e,t,n,r,i,o,a,l,s){if($E.apply(this,arguments),Fo){if(Fo){var u=rl;Fo=!1,rl=null}else throw Error(V(198));il||(il=!0,pf=u)}}function ei(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rg(e){if(ei(e)!==e)throw Error(V(188))}function LE(e){var t=e.alternate;if(!t){if(t=ei(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return rg(i),e;if(o===r)return rg(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function dy(e){return e=LE(e),e!==null?fy(e):null}function fy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fy(e);if(t!==null)return t;e=e.sibling}return null}var py=$t.unstable_scheduleCallback,ig=$t.unstable_cancelCallback,RE=$t.unstable_shouldYield,AE=$t.unstable_requestPaint,Te=$t.unstable_now,FE=$t.unstable_getCurrentPriorityLevel,Gp=$t.unstable_ImmediatePriority,hy=$t.unstable_UserBlockingPriority,ol=$t.unstable_NormalPriority,NE=$t.unstable_LowPriority,my=$t.unstable_IdlePriority,ru=null,wn=null;function zE(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(ru,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:UE,VE=Math.log,BE=Math.LN2;function UE(e){return e>>>=0,e===0?32:31-(VE(e)/BE|0)|0}var qa=64,Xa=4194304;function Mo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function al(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Mo(l):(o&=a,o!==0&&(r=Mo(o)))}else a=n&~i,a!==0?r=Mo(a):o!==0&&(r=Mo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-on(t),i=1<<n,r|=e[n],t&=~i;return r}function HE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function WE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-on(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=HE(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function hf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gy(){var e=qa;return qa<<=1,!(qa&4194240)&&(qa=64),e}function Tc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ta(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-on(t),e[t]=n}function GE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-on(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Yp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-on(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function vy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yy,qp,xy,by,wy,mf=!1,Ka=[],fr=null,pr=null,hr=null,ea=new Map,ta=new Map,ir=[],YE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function og(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":ea.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(t.pointerId)}}function mo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Pa(t),t!==null&&qp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qE(e,t,n,r,i){switch(t){case"focusin":return fr=mo(fr,e,t,n,r,i),!0;case"dragenter":return pr=mo(pr,e,t,n,r,i),!0;case"mouseover":return hr=mo(hr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ea.set(o,mo(ea.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ta.set(o,mo(ta.get(o)||null,e,t,n,r,i)),!0}return!1}function Sy(e){var t=Rr(e.target);if(t!==null){var n=ei(t);if(n!==null){if(t=n.tag,t===13){if(t=cy(n),t!==null){e.blockedOn=t,wy(e.priority,function(){xy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cf=r,n.target.dispatchEvent(r),cf=null}else return t=Pa(n),t!==null&&qp(t),e.blockedOn=n,!1;t.shift()}return!0}function ag(e,t,n){Ts(e)&&n.delete(t)}function XE(){mf=!1,fr!==null&&Ts(fr)&&(fr=null),pr!==null&&Ts(pr)&&(pr=null),hr!==null&&Ts(hr)&&(hr=null),ea.forEach(ag),ta.forEach(ag)}function go(e,t){e.blockedOn===t&&(e.blockedOn=null,mf||(mf=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,XE)))}function na(e){function t(i){return go(i,e)}if(0<Ka.length){go(Ka[0],e);for(var n=1;n<Ka.length;n++){var r=Ka[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fr!==null&&go(fr,e),pr!==null&&go(pr,e),hr!==null&&go(hr,e),ea.forEach(t),ta.forEach(t),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)Sy(n),n.blockedOn===null&&ir.shift()}var Oi=Xn.ReactCurrentBatchConfig,sl=!0;function KE(e,t,n,r){var i=fe,o=Oi.transition;Oi.transition=null;try{fe=1,Xp(e,t,n,r)}finally{fe=i,Oi.transition=o}}function ZE(e,t,n,r){var i=fe,o=Oi.transition;Oi.transition=null;try{fe=4,Xp(e,t,n,r)}finally{fe=i,Oi.transition=o}}function Xp(e,t,n,r){if(sl){var i=gf(e,t,n,r);if(i===null)Ac(e,t,r,ll,n),og(e,r);else if(qE(i,e,t,n,r))r.stopPropagation();else if(og(e,r),t&4&&-1<YE.indexOf(e)){for(;i!==null;){var o=Pa(i);if(o!==null&&yy(o),o=gf(e,t,n,r),o===null&&Ac(e,t,r,ll,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ac(e,t,r,null,n)}}var ll=null;function gf(e,t,n,r){if(ll=null,e=Wp(r),e=Rr(e),e!==null)if(t=ei(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ll=e,null}function _y(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FE()){case Gp:return 1;case hy:return 4;case ol:case NE:return 16;case my:return 536870912;default:return 16}default:return 16}}var sr=null,Kp=null,Os=null;function Ey(){if(Os)return Os;var e,t=Kp,n=t.length,r,i="value"in sr?sr.value:sr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Os=i.slice(e,1<r?1-r:void 0)}function Ps(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Za(){return!0}function sg(){return!1}function Rt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Za:sg,this.isPropagationStopped=sg,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),t}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zp=Rt(Ji),Oa=Ee({},Ji,{view:0,detail:0}),QE=Rt(Oa),Oc,Pc,vo,iu=Ee({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vo&&(vo&&e.type==="mousemove"?(Oc=e.screenX-vo.screenX,Pc=e.screenY-vo.screenY):Pc=Oc=0,vo=e),Oc)},movementY:function(e){return"movementY"in e?e.movementY:Pc}}),lg=Rt(iu),JE=Ee({},iu,{dataTransfer:0}),eC=Rt(JE),tC=Ee({},Oa,{relatedTarget:0}),Mc=Rt(tC),nC=Ee({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),rC=Rt(nC),iC=Ee({},Ji,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oC=Rt(iC),aC=Ee({},Ji,{data:0}),ug=Rt(aC),sC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uC[e])?!!t[e]:!1}function Qp(){return cC}var dC=Ee({},Oa,{key:function(e){if(e.key){var t=sC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ps(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qp,charCode:function(e){return e.type==="keypress"?Ps(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ps(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fC=Rt(dC),pC=Ee({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cg=Rt(pC),hC=Ee({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qp}),mC=Rt(hC),gC=Ee({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),vC=Rt(gC),yC=Ee({},iu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xC=Rt(yC),bC=[9,13,27,32],Jp=Bn&&"CompositionEvent"in window,No=null;Bn&&"documentMode"in document&&(No=document.documentMode);var wC=Bn&&"TextEvent"in window&&!No,Cy=Bn&&(!Jp||No&&8<No&&11>=No),dg=String.fromCharCode(32),fg=!1;function ky(e,t){switch(e){case"keyup":return bC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ty(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mi=!1;function SC(e,t){switch(e){case"compositionend":return Ty(t);case"keypress":return t.which!==32?null:(fg=!0,dg);case"textInput":return e=t.data,e===dg&&fg?null:e;default:return null}}function _C(e,t){if(mi)return e==="compositionend"||!Jp&&ky(e,t)?(e=Ey(),Os=Kp=sr=null,mi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cy&&t.locale!=="ko"?null:t.data;default:return null}}var EC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!EC[e.type]:t==="textarea"}function Oy(e,t,n,r){oy(r),t=ul(t,"onChange"),0<t.length&&(n=new Zp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zo=null,ra=null;function CC(e){Ny(e,0)}function ou(e){var t=yi(e);if(Q1(t))return e}function kC(e,t){if(e==="change")return t}var Py=!1;if(Bn){var Ic;if(Bn){var jc="oninput"in document;if(!jc){var hg=document.createElement("div");hg.setAttribute("oninput","return;"),jc=typeof hg.oninput=="function"}Ic=jc}else Ic=!1;Py=Ic&&(!document.documentMode||9<document.documentMode)}function mg(){zo&&(zo.detachEvent("onpropertychange",My),ra=zo=null)}function My(e){if(e.propertyName==="value"&&ou(ra)){var t=[];Oy(t,ra,e,Wp(e)),uy(CC,t)}}function TC(e,t,n){e==="focusin"?(mg(),zo=t,ra=n,zo.attachEvent("onpropertychange",My)):e==="focusout"&&mg()}function OC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ou(ra)}function PC(e,t){if(e==="click")return ou(t)}function MC(e,t){if(e==="input"||e==="change")return ou(t)}function IC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var un=typeof Object.is=="function"?Object.is:IC;function ia(e,t){if(un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zd.call(t,i)||!un(e[i],t[i]))return!1}return!0}function gg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vg(e,t){var n=gg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gg(n)}}function Iy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Iy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jy(){for(var e=window,t=nl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nl(e.document)}return t}function eh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jC(e){var t=jy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Iy(n.ownerDocument.documentElement,n)){if(r!==null&&eh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=vg(n,o);var a=vg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $C=Bn&&"documentMode"in document&&11>=document.documentMode,gi=null,vf=null,Vo=null,yf=!1;function yg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yf||gi==null||gi!==nl(r)||(r=gi,"selectionStart"in r&&eh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vo&&ia(Vo,r)||(Vo=r,r=ul(vf,"onSelect"),0<r.length&&(t=new Zp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gi)))}function Qa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vi={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},$c={},$y={};Bn&&($y=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function au(e){if($c[e])return $c[e];if(!vi[e])return e;var t=vi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $y)return $c[e]=t[n];return e}var Dy=au("animationend"),Ly=au("animationiteration"),Ry=au("animationstart"),Ay=au("transitionend"),Fy=new Map,xg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(e,t){Fy.set(e,t),Jr(t,[e])}for(var Dc=0;Dc<xg.length;Dc++){var Lc=xg[Dc],DC=Lc.toLowerCase(),LC=Lc[0].toUpperCase()+Lc.slice(1);Er(DC,"on"+LC)}Er(Dy,"onAnimationEnd");Er(Ly,"onAnimationIteration");Er(Ry,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(Ay,"onTransitionEnd");$i("onMouseEnter",["mouseout","mouseover"]);$i("onMouseLeave",["mouseout","mouseover"]);$i("onPointerEnter",["pointerout","pointerover"]);$i("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function bg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,DE(r,t,void 0,e),e.currentTarget=null}function Ny(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;bg(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;bg(i,l,u),o=s}}}if(il)throw e=pf,il=!1,pf=null,e}function me(e,t){var n=t[_f];n===void 0&&(n=t[_f]=new Set);var r=e+"__bubble";n.has(r)||(zy(t,e,2,!1),n.add(r))}function Rc(e,t,n){var r=0;t&&(r|=4),zy(n,e,r,t)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function oa(e){if(!e[Ja]){e[Ja]=!0,Y1.forEach(function(n){n!=="selectionchange"&&(RC.has(n)||Rc(n,!1,e),Rc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ja]||(t[Ja]=!0,Rc("selectionchange",!1,t))}}function zy(e,t,n,r){switch(_y(t)){case 1:var i=KE;break;case 4:i=ZE;break;default:i=Xp}n=i.bind(null,t,n,e),i=void 0,!ff||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ac(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Rr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}uy(function(){var u=o,c=Wp(n),d=[];e:{var f=Fy.get(e);if(f!==void 0){var h=Zp,g=e;switch(e){case"keypress":if(Ps(n)===0)break e;case"keydown":case"keyup":h=fC;break;case"focusin":g="focus",h=Mc;break;case"focusout":g="blur",h=Mc;break;case"beforeblur":case"afterblur":h=Mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=lg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=eC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=mC;break;case Dy:case Ly:case Ry:h=rC;break;case Ay:h=vC;break;case"scroll":h=QE;break;case"wheel":h=xC;break;case"copy":case"cut":case"paste":h=oC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=cg}var v=(t&4)!==0,S=!v&&e==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var m=u,x;m!==null;){x=m;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,p!==null&&(w=Jo(m,p),w!=null&&v.push(aa(m,w,x)))),S)break;m=m.return}0<v.length&&(f=new h(f,g,null,n,c),d.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==cf&&(g=n.relatedTarget||n.fromElement)&&(Rr(g)||g[Un]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?Rr(g):null,g!==null&&(S=ei(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(v=lg,w="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=cg,w="onPointerLeave",p="onPointerEnter",m="pointer"),S=h==null?f:yi(h),x=g==null?f:yi(g),f=new v(w,m+"leave",h,n,c),f.target=S,f.relatedTarget=x,w=null,Rr(c)===u&&(v=new v(p,m+"enter",g,n,c),v.target=x,v.relatedTarget=S,w=v),S=w,h&&g)t:{for(v=h,p=g,m=0,x=v;x;x=ri(x))m++;for(x=0,w=p;w;w=ri(w))x++;for(;0<m-x;)v=ri(v),m--;for(;0<x-m;)p=ri(p),x--;for(;m--;){if(v===p||p!==null&&v===p.alternate)break t;v=ri(v),p=ri(p)}v=null}else v=null;h!==null&&wg(d,f,h,v,!1),g!==null&&S!==null&&wg(d,S,g,v,!0)}}e:{if(f=u?yi(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var C=kC;else if(pg(f))if(Py)C=MC;else{C=OC;var k=TC}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=PC);if(C&&(C=C(e,u))){Oy(d,C,n,c);break e}k&&k(e,f,u),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&of(f,"number",f.value)}switch(k=u?yi(u):window,e){case"focusin":(pg(k)||k.contentEditable==="true")&&(gi=k,vf=u,Vo=null);break;case"focusout":Vo=vf=gi=null;break;case"mousedown":yf=!0;break;case"contextmenu":case"mouseup":case"dragend":yf=!1,yg(d,n,c);break;case"selectionchange":if($C)break;case"keydown":case"keyup":yg(d,n,c)}var _;if(Jp)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else mi?ky(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Cy&&n.locale!=="ko"&&(mi||E!=="onCompositionStart"?E==="onCompositionEnd"&&mi&&(_=Ey()):(sr=c,Kp="value"in sr?sr.value:sr.textContent,mi=!0)),k=ul(u,E),0<k.length&&(E=new ug(E,e,null,n,c),d.push({event:E,listeners:k}),_?E.data=_:(_=Ty(n),_!==null&&(E.data=_)))),(_=wC?SC(e,n):_C(e,n))&&(u=ul(u,"onBeforeInput"),0<u.length&&(c=new ug("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=_))}Ny(d,t)})}function aa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ul(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Jo(e,n),o!=null&&r.unshift(aa(e,o,i)),o=Jo(e,t),o!=null&&r.push(aa(e,o,i))),e=e.return}return r}function ri(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Jo(n,o),s!=null&&a.unshift(aa(n,s,l))):i||(s=Jo(n,o),s!=null&&a.push(aa(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var AC=/\r\n?/g,FC=/\u0000|\uFFFD/g;function Sg(e){return(typeof e=="string"?e:""+e).replace(AC,`
`).replace(FC,"")}function es(e,t,n){if(t=Sg(t),Sg(e)!==t&&n)throw Error(V(425))}function cl(){}var xf=null,bf=null;function wf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sf=typeof setTimeout=="function"?setTimeout:void 0,NC=typeof clearTimeout=="function"?clearTimeout:void 0,_g=typeof Promise=="function"?Promise:void 0,zC=typeof queueMicrotask=="function"?queueMicrotask:typeof _g<"u"?function(e){return _g.resolve(null).then(e).catch(VC)}:Sf;function VC(e){setTimeout(function(){throw e})}function Fc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),na(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);na(t)}function mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Eg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var eo=Math.random().toString(36).slice(2),xn="__reactFiber$"+eo,sa="__reactProps$"+eo,Un="__reactContainer$"+eo,_f="__reactEvents$"+eo,BC="__reactListeners$"+eo,UC="__reactHandles$"+eo;function Rr(e){var t=e[xn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Un]||n[xn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Eg(e);e!==null;){if(n=e[xn])return n;e=Eg(e)}return t}e=n,n=e.parentNode}return null}function Pa(e){return e=e[xn]||e[Un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function su(e){return e[sa]||null}var Ef=[],xi=-1;function Cr(e){return{current:e}}function ve(e){0>xi||(e.current=Ef[xi],Ef[xi]=null,xi--)}function he(e,t){xi++,Ef[xi]=e.current,e.current=t}var Sr={},rt=Cr(Sr),xt=Cr(!1),Ur=Sr;function Di(e,t){var n=e.type.contextTypes;if(!n)return Sr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function bt(e){return e=e.childContextTypes,e!=null}function dl(){ve(xt),ve(rt)}function Cg(e,t,n){if(rt.current!==Sr)throw Error(V(168));he(rt,t),he(xt,n)}function Vy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,TE(e)||"Unknown",i));return Ee({},n,r)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sr,Ur=rt.current,he(rt,e),he(xt,xt.current),!0}function kg(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=Vy(e,t,Ur),r.__reactInternalMemoizedMergedChildContext=e,ve(xt),ve(rt),he(rt,e)):ve(xt),he(xt,n)}var $n=null,lu=!1,Nc=!1;function By(e){$n===null?$n=[e]:$n.push(e)}function HC(e){lu=!0,By(e)}function kr(){if(!Nc&&$n!==null){Nc=!0;var e=0,t=fe;try{var n=$n;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$n=null,lu=!1}catch(i){throw $n!==null&&($n=$n.slice(e+1)),py(Gp,kr),i}finally{fe=t,Nc=!1}}return null}var bi=[],wi=0,pl=null,hl=0,zt=[],Vt=0,Hr=null,Rn=1,An="";function Mr(e,t){bi[wi++]=hl,bi[wi++]=pl,pl=e,hl=t}function Uy(e,t,n){zt[Vt++]=Rn,zt[Vt++]=An,zt[Vt++]=Hr,Hr=e;var r=Rn;e=An;var i=32-on(r)-1;r&=~(1<<i),n+=1;var o=32-on(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Rn=1<<32-on(t)+i|n<<i|r,An=o+e}else Rn=1<<o|n<<i|r,An=e}function th(e){e.return!==null&&(Mr(e,1),Uy(e,1,0))}function nh(e){for(;e===pl;)pl=bi[--wi],bi[wi]=null,hl=bi[--wi],bi[wi]=null;for(;e===Hr;)Hr=zt[--Vt],zt[Vt]=null,An=zt[--Vt],zt[Vt]=null,Rn=zt[--Vt],zt[Vt]=null}var It=null,Pt=null,be=!1,nn=null;function Hy(e,t){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Tg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,Pt=mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,Pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hr!==null?{id:Rn,overflow:An}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,It=e,Pt=null,!0):!1;default:return!1}}function Cf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kf(e){if(be){var t=Pt;if(t){var n=t;if(!Tg(e,t)){if(Cf(e))throw Error(V(418));t=mr(n.nextSibling);var r=It;t&&Tg(e,t)?Hy(r,n):(e.flags=e.flags&-4097|2,be=!1,It=e)}}else{if(Cf(e))throw Error(V(418));e.flags=e.flags&-4097|2,be=!1,It=e}}}function Og(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function ts(e){if(e!==It)return!1;if(!be)return Og(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wf(e.type,e.memoizedProps)),t&&(t=Pt)){if(Cf(e))throw Wy(),Error(V(418));for(;t;)Hy(e,t),t=mr(t.nextSibling)}if(Og(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pt=mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pt=null}}else Pt=It?mr(e.stateNode.nextSibling):null;return!0}function Wy(){for(var e=Pt;e;)e=mr(e.nextSibling)}function Li(){Pt=It=null,be=!1}function rh(e){nn===null?nn=[e]:nn.push(e)}var WC=Xn.ReactCurrentBatchConfig;function Jt(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ml=Cr(null),gl=null,Si=null,ih=null;function oh(){ih=Si=gl=null}function ah(e){var t=ml.current;ve(ml),e._currentValue=t}function Tf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pi(e,t){gl=e,ih=Si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(yt=!0),e.firstContext=null)}function Ht(e){var t=e._currentValue;if(ih!==e)if(e={context:e,memoizedValue:t,next:null},Si===null){if(gl===null)throw Error(V(308));Si=e,gl.dependencies={lanes:0,firstContext:e}}else Si=Si.next=e;return t}var Ar=null;function sh(e){Ar===null?Ar=[e]:Ar.push(e)}function Gy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,sh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Hn(e,r)}function Hn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rr=!1;function lh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Hn(e,n)}return i=r.interleaved,i===null?(t.next=t,sh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Hn(e,n)}function Ms(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yp(e,n)}}function Pg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vl(e,t,n,r){var i=e.updateQueue;rr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,c=u=s=null,l=o;do{var f=l.lane,h=l.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(f=t,h=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(h,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(h,d,f):g,f==null)break e;d=Ee({},d,f);break e;case 2:rr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=h,s=d):c=c.next=h,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Gr|=a,e.lanes=a,e.memoizedState=d}}function Mg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var qy=new G1.Component().refs;function Of(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var uu={isMounted:function(e){return(e=e._reactInternals)?ei(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lt(),i=yr(e),o=Fn(r,i);o.payload=t,n!=null&&(o.callback=n),t=gr(e,o,i),t!==null&&(an(t,e,i,r),Ms(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lt(),i=yr(e),o=Fn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gr(e,o,i),t!==null&&(an(t,e,i,r),Ms(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),r=yr(e),i=Fn(n,r);i.tag=2,t!=null&&(i.callback=t),t=gr(e,i,r),t!==null&&(an(t,e,r,n),Ms(t,e,r))}};function Ig(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ia(n,r)||!ia(i,o):!0}function Xy(e,t,n){var r=!1,i=Sr,o=t.contextType;return typeof o=="object"&&o!==null?o=Ht(o):(i=bt(t)?Ur:rt.current,r=t.contextTypes,o=(r=r!=null)?Di(e,i):Sr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=uu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function jg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&uu.enqueueReplaceState(t,t.state,null)}function Pf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=qy,lh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ht(o):(o=bt(t)?Ur:rt.current,i.context=Di(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Of(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&uu.enqueueReplaceState(i,i.state,null),vl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function yo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===qy&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function ns(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $g(e){var t=e._init;return t(e._payload)}function Ky(e){function t(p,m){if(e){var x=p.deletions;x===null?(p.deletions=[m],p.flags|=16):x.push(m)}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=xr(p,m),p.index=0,p.sibling=null,p}function o(p,m,x){return p.index=x,e?(x=p.alternate,x!==null?(x=x.index,x<m?(p.flags|=2,m):x):(p.flags|=2,m)):(p.flags|=1048576,m)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,m,x,w){return m===null||m.tag!==6?(m=Gc(x,p.mode,w),m.return=p,m):(m=i(m,x),m.return=p,m)}function s(p,m,x,w){var C=x.type;return C===hi?c(p,m,x.props.children,w,x.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===nr&&$g(C)===m.type)?(w=i(m,x.props),w.ref=yo(p,m,x),w.return=p,w):(w=Rs(x.type,x.key,x.props,null,p.mode,w),w.ref=yo(p,m,x),w.return=p,w)}function u(p,m,x,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Yc(x,p.mode,w),m.return=p,m):(m=i(m,x.children||[]),m.return=p,m)}function c(p,m,x,w,C){return m===null||m.tag!==7?(m=Vr(x,p.mode,w,C),m.return=p,m):(m=i(m,x),m.return=p,m)}function d(p,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Gc(""+m,p.mode,x),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Wa:return x=Rs(m.type,m.key,m.props,null,p.mode,x),x.ref=yo(p,null,m),x.return=p,x;case pi:return m=Yc(m,p.mode,x),m.return=p,m;case nr:var w=m._init;return d(p,w(m._payload),x)}if(Po(m)||po(m))return m=Vr(m,p.mode,x,null),m.return=p,m;ns(p,m)}return null}function f(p,m,x,w){var C=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:l(p,m,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wa:return x.key===C?s(p,m,x,w):null;case pi:return x.key===C?u(p,m,x,w):null;case nr:return C=x._init,f(p,m,C(x._payload),w)}if(Po(x)||po(x))return C!==null?null:c(p,m,x,w,null);ns(p,x)}return null}function h(p,m,x,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(x)||null,l(m,p,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Wa:return p=p.get(w.key===null?x:w.key)||null,s(m,p,w,C);case pi:return p=p.get(w.key===null?x:w.key)||null,u(m,p,w,C);case nr:var k=w._init;return h(p,m,x,k(w._payload),C)}if(Po(w)||po(w))return p=p.get(x)||null,c(m,p,w,C,null);ns(m,w)}return null}function g(p,m,x,w){for(var C=null,k=null,_=m,E=m=0,M=null;_!==null&&E<x.length;E++){_.index>E?(M=_,_=null):M=_.sibling;var I=f(p,_,x[E],w);if(I===null){_===null&&(_=M);break}e&&_&&I.alternate===null&&t(p,_),m=o(I,m,E),k===null?C=I:k.sibling=I,k=I,_=M}if(E===x.length)return n(p,_),be&&Mr(p,E),C;if(_===null){for(;E<x.length;E++)_=d(p,x[E],w),_!==null&&(m=o(_,m,E),k===null?C=_:k.sibling=_,k=_);return be&&Mr(p,E),C}for(_=r(p,_);E<x.length;E++)M=h(_,p,E,x[E],w),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?E:M.key),m=o(M,m,E),k===null?C=M:k.sibling=M,k=M);return e&&_.forEach(function($){return t(p,$)}),be&&Mr(p,E),C}function v(p,m,x,w){var C=po(x);if(typeof C!="function")throw Error(V(150));if(x=C.call(x),x==null)throw Error(V(151));for(var k=C=null,_=m,E=m=0,M=null,I=x.next();_!==null&&!I.done;E++,I=x.next()){_.index>E?(M=_,_=null):M=_.sibling;var $=f(p,_,I.value,w);if($===null){_===null&&(_=M);break}e&&_&&$.alternate===null&&t(p,_),m=o($,m,E),k===null?C=$:k.sibling=$,k=$,_=M}if(I.done)return n(p,_),be&&Mr(p,E),C;if(_===null){for(;!I.done;E++,I=x.next())I=d(p,I.value,w),I!==null&&(m=o(I,m,E),k===null?C=I:k.sibling=I,k=I);return be&&Mr(p,E),C}for(_=r(p,_);!I.done;E++,I=x.next())I=h(_,p,E,I.value,w),I!==null&&(e&&I.alternate!==null&&_.delete(I.key===null?E:I.key),m=o(I,m,E),k===null?C=I:k.sibling=I,k=I);return e&&_.forEach(function(P){return t(p,P)}),be&&Mr(p,E),C}function S(p,m,x,w){if(typeof x=="object"&&x!==null&&x.type===hi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Wa:e:{for(var C=x.key,k=m;k!==null;){if(k.key===C){if(C=x.type,C===hi){if(k.tag===7){n(p,k.sibling),m=i(k,x.props.children),m.return=p,p=m;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===nr&&$g(C)===k.type){n(p,k.sibling),m=i(k,x.props),m.ref=yo(p,k,x),m.return=p,p=m;break e}n(p,k);break}else t(p,k);k=k.sibling}x.type===hi?(m=Vr(x.props.children,p.mode,w,x.key),m.return=p,p=m):(w=Rs(x.type,x.key,x.props,null,p.mode,w),w.ref=yo(p,m,x),w.return=p,p=w)}return a(p);case pi:e:{for(k=x.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(p,m.sibling),m=i(m,x.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else t(p,m);m=m.sibling}m=Yc(x,p.mode,w),m.return=p,p=m}return a(p);case nr:return k=x._init,S(p,m,k(x._payload),w)}if(Po(x))return g(p,m,x,w);if(po(x))return v(p,m,x,w);ns(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(p,m.sibling),m=i(m,x),m.return=p,p=m):(n(p,m),m=Gc(x,p.mode,w),m.return=p,p=m),a(p)):n(p,m)}return S}var Ri=Ky(!0),Zy=Ky(!1),Ma={},Sn=Cr(Ma),la=Cr(Ma),ua=Cr(Ma);function Fr(e){if(e===Ma)throw Error(V(174));return e}function uh(e,t){switch(he(ua,t),he(la,e),he(Sn,Ma),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sf(t,e)}ve(Sn),he(Sn,t)}function Ai(){ve(Sn),ve(la),ve(ua)}function Qy(e){Fr(ua.current);var t=Fr(Sn.current),n=sf(t,e.type);t!==n&&(he(la,e),he(Sn,n))}function ch(e){la.current===e&&(ve(Sn),ve(la))}var Se=Cr(0);function yl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zc=[];function dh(){for(var e=0;e<zc.length;e++)zc[e]._workInProgressVersionPrimary=null;zc.length=0}var Is=Xn.ReactCurrentDispatcher,Vc=Xn.ReactCurrentBatchConfig,Wr=0,_e=null,Le=null,Ve=null,xl=!1,Bo=!1,ca=0,GC=0;function Ke(){throw Error(V(321))}function fh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!un(e[n],t[n]))return!1;return!0}function ph(e,t,n,r,i,o){if(Wr=o,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Is.current=e===null||e.memoizedState===null?KC:ZC,e=n(r,i),Bo){o=0;do{if(Bo=!1,ca=0,25<=o)throw Error(V(301));o+=1,Ve=Le=null,t.updateQueue=null,Is.current=QC,e=n(r,i)}while(Bo)}if(Is.current=bl,t=Le!==null&&Le.next!==null,Wr=0,Ve=Le=_e=null,xl=!1,t)throw Error(V(300));return e}function hh(){var e=ca!==0;return ca=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?_e.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Wt(){if(Le===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Ve===null?_e.memoizedState:Ve.next;if(t!==null)Ve=t,Le=e;else{if(e===null)throw Error(V(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ve===null?_e.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function da(e,t){return typeof t=="function"?t(e):t}function Bc(e){var t=Wt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var c=u.lane;if((Wr&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,_e.lanes|=c,Gr|=c}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,un(r,t.memoizedState)||(yt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,_e.lanes|=o,Gr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Uc(e){var t=Wt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);un(o,t.memoizedState)||(yt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Jy(){}function ex(e,t){var n=_e,r=Wt(),i=t(),o=!un(r.memoizedState,i);if(o&&(r.memoizedState=i,yt=!0),r=r.queue,mh(rx.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,fa(9,nx.bind(null,n,r,i,t),void 0,null),Be===null)throw Error(V(349));Wr&30||tx(n,t,i)}return i}function tx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nx(e,t,n,r){t.value=n,t.getSnapshot=r,ix(t)&&ox(e)}function rx(e,t,n){return n(function(){ix(t)&&ox(e)})}function ix(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!un(e,n)}catch{return!0}}function ox(e){var t=Hn(e,1);t!==null&&an(t,e,1,-1)}function Dg(e){var t=gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:e},t.queue=e,e=e.dispatch=XC.bind(null,_e,e),[t.memoizedState,e]}function fa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ax(){return Wt().memoizedState}function js(e,t,n,r){var i=gn();_e.flags|=e,i.memoizedState=fa(1|t,n,void 0,r===void 0?null:r)}function cu(e,t,n,r){var i=Wt();r=r===void 0?null:r;var o=void 0;if(Le!==null){var a=Le.memoizedState;if(o=a.destroy,r!==null&&fh(r,a.deps)){i.memoizedState=fa(t,n,o,r);return}}_e.flags|=e,i.memoizedState=fa(1|t,n,o,r)}function Lg(e,t){return js(8390656,8,e,t)}function mh(e,t){return cu(2048,8,e,t)}function sx(e,t){return cu(4,2,e,t)}function lx(e,t){return cu(4,4,e,t)}function ux(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cx(e,t,n){return n=n!=null?n.concat([e]):null,cu(4,4,ux.bind(null,t,e),n)}function gh(){}function dx(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fx(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function px(e,t,n){return Wr&21?(un(n,t)||(n=gy(),_e.lanes|=n,Gr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,yt=!0),e.memoizedState=n)}function YC(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=Vc.transition;Vc.transition={};try{e(!1),t()}finally{fe=n,Vc.transition=r}}function hx(){return Wt().memoizedState}function qC(e,t,n){var r=yr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mx(e))gx(t,n);else if(n=Gy(e,t,n,r),n!==null){var i=lt();an(n,e,r,i),vx(n,t,r)}}function XC(e,t,n){var r=yr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mx(e))gx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,un(l,a)){var s=t.interleaved;s===null?(i.next=i,sh(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Gy(e,t,i,r),n!==null&&(i=lt(),an(n,e,r,i),vx(n,t,r))}}function mx(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function gx(e,t){Bo=xl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yp(e,n)}}var bl={readContext:Ht,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},KC={readContext:Ht,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:Ht,useEffect:Lg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,js(4194308,4,ux.bind(null,t,e),n)},useLayoutEffect:function(e,t){return js(4194308,4,e,t)},useInsertionEffect:function(e,t){return js(4,2,e,t)},useMemo:function(e,t){var n=gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qC.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:Dg,useDebugValue:gh,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=Dg(!1),t=e[0];return e=YC.bind(null,e[1]),gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_e,i=gn();if(be){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Be===null)throw Error(V(349));Wr&30||tx(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Lg(rx.bind(null,r,o,e),[e]),r.flags|=2048,fa(9,nx.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=gn(),t=Be.identifierPrefix;if(be){var n=An,r=Rn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ca++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=GC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ZC={readContext:Ht,useCallback:dx,useContext:Ht,useEffect:mh,useImperativeHandle:cx,useInsertionEffect:sx,useLayoutEffect:lx,useMemo:fx,useReducer:Bc,useRef:ax,useState:function(){return Bc(da)},useDebugValue:gh,useDeferredValue:function(e){var t=Wt();return px(t,Le.memoizedState,e)},useTransition:function(){var e=Bc(da)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Jy,useSyncExternalStore:ex,useId:hx,unstable_isNewReconciler:!1},QC={readContext:Ht,useCallback:dx,useContext:Ht,useEffect:mh,useImperativeHandle:cx,useInsertionEffect:sx,useLayoutEffect:lx,useMemo:fx,useReducer:Uc,useRef:ax,useState:function(){return Uc(da)},useDebugValue:gh,useDeferredValue:function(e){var t=Wt();return Le===null?t.memoizedState=e:px(t,Le.memoizedState,e)},useTransition:function(){var e=Uc(da)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Jy,useSyncExternalStore:ex,useId:hx,unstable_isNewReconciler:!1};function Fi(e,t){try{var n="",r=t;do n+=kE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Hc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Mf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var JC=typeof WeakMap=="function"?WeakMap:Map;function yx(e,t,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Sl||(Sl=!0,zf=r),Mf(e,t)},n}function xx(e,t,n){n=Fn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Mf(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Mf(e,t),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Rg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new JC;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=pk.bind(null,e,t,n),t.then(e,e))}function Ag(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fg(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Fn(-1,1),t.tag=2,gr(n,t,1))),n.lanes|=1),e)}var ek=Xn.ReactCurrentOwner,yt=!1;function at(e,t,n,r){t.child=e===null?Zy(t,null,n,r):Ri(t,e.child,n,r)}function Ng(e,t,n,r,i){n=n.render;var o=t.ref;return Pi(t,i),r=ph(e,t,n,r,o,i),n=hh(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(be&&n&&th(t),t.flags|=1,at(e,t,r,i),t.child)}function zg(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Eh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,bx(e,t,o,r,i)):(e=Rs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(a,r)&&e.ref===t.ref)return Wn(e,t,i)}return t.flags|=1,e=xr(o,r),e.ref=t.ref,e.return=t,t.child=e}function bx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ia(o,r)&&e.ref===t.ref)if(yt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(yt=!0);else return t.lanes=e.lanes,Wn(e,t,i)}return If(e,t,n,r,i)}function wx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Ei,Tt),Tt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(Ei,Tt),Tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(Ei,Tt),Tt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(Ei,Tt),Tt|=r;return at(e,t,i,n),t.child}function Sx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function If(e,t,n,r,i){var o=bt(n)?Ur:rt.current;return o=Di(t,o),Pi(t,i),n=ph(e,t,n,r,o,i),r=hh(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(be&&r&&th(t),t.flags|=1,at(e,t,n,i),t.child)}function Vg(e,t,n,r,i){if(bt(n)){var o=!0;fl(t)}else o=!1;if(Pi(t,i),t.stateNode===null)$s(e,t),Xy(t,n,r),Pf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ht(u):(u=bt(n)?Ur:rt.current,u=Di(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&jg(t,a,r,u),rr=!1;var f=t.memoizedState;a.state=f,vl(t,r,a,i),s=t.memoizedState,l!==r||f!==s||xt.current||rr?(typeof c=="function"&&(Of(t,n,c,r),s=t.memoizedState),(l=rr||Ig(t,n,l,r,f,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Yy(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Jt(t.type,l),a.props=u,d=t.pendingProps,f=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ht(s):(s=bt(n)?Ur:rt.current,s=Di(t,s));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||f!==s)&&jg(t,a,r,s),rr=!1,f=t.memoizedState,a.state=f,vl(t,r,a,i);var g=t.memoizedState;l!==d||f!==g||xt.current||rr?(typeof h=="function"&&(Of(t,n,h,r),g=t.memoizedState),(u=rr||Ig(t,n,u,r,f,g,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return jf(e,t,n,r,o,i)}function jf(e,t,n,r,i,o){Sx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&kg(t,n,!1),Wn(e,t,o);r=t.stateNode,ek.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ri(t,e.child,null,o),t.child=Ri(t,null,l,o)):at(e,t,l,o),t.memoizedState=r.state,i&&kg(t,n,!0),t.child}function _x(e){var t=e.stateNode;t.pendingContext?Cg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cg(e,t.context,!1),uh(e,t.containerInfo)}function Bg(e,t,n,r,i){return Li(),rh(i),t.flags|=256,at(e,t,n,r),t.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function Df(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ex(e,t,n){var r=t.pendingProps,i=Se.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(Se,i&1),e===null)return kf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=pu(a,r,0,null),e=Vr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Df(n),t.memoizedState=$f,e):vh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return tk(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=xr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=xr(l,o):(o=Vr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Df(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=$f,r}return o=e.child,e=o.sibling,r=xr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vh(e,t){return t=pu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function rs(e,t,n,r){return r!==null&&rh(r),Ri(t,e.child,null,n),e=vh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tk(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Hc(Error(V(422))),rs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=pu({mode:"visible",children:r.children},i,0,null),o=Vr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ri(t,e.child,null,a),t.child.memoizedState=Df(a),t.memoizedState=$f,o);if(!(t.mode&1))return rs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=Hc(o,r,void 0),rs(e,t,a,r)}if(l=(a&e.childLanes)!==0,yt||l){if(r=Be,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Hn(e,i),an(r,e,i,-1))}return _h(),r=Hc(Error(V(421))),rs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=hk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Pt=mr(i.nextSibling),It=t,be=!0,nn=null,e!==null&&(zt[Vt++]=Rn,zt[Vt++]=An,zt[Vt++]=Hr,Rn=e.id,An=e.overflow,Hr=t),t=vh(t,r.children),t.flags|=4096,t)}function Ug(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Tf(e.return,t,n)}function Wc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Cx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(at(e,t,r.children,n),r=Se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ug(e,n,t);else if(e.tag===19)Ug(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(Se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&yl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Wc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Wc(t,!0,n,null,o);break;case"together":Wc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $s(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=xr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nk(e,t,n){switch(t.tag){case 3:_x(t),Li();break;case 5:Qy(t);break;case 1:bt(t.type)&&fl(t);break;case 4:uh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(ml,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(Se,Se.current&1),t.flags|=128,null):n&t.child.childLanes?Ex(e,t,n):(he(Se,Se.current&1),e=Wn(e,t,n),e!==null?e.sibling:null);he(Se,Se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Cx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Se,Se.current),r)break;return null;case 22:case 23:return t.lanes=0,wx(e,t,n)}return Wn(e,t,n)}var kx,Lf,Tx,Ox;kx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lf=function(){};Tx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Fr(Sn.current);var o=null;switch(n){case"input":i=nf(e,i),r=nf(e,r),o=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),o=[];break;case"textarea":i=af(e,i),r=af(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cl)}lf(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&me("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ox=function(e,t,n,r){n!==r&&(t.flags|=4)};function xo(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rk(e,t,n){var r=t.pendingProps;switch(nh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return bt(t.type)&&dl(),Ze(t),null;case 3:return r=t.stateNode,Ai(),ve(xt),ve(rt),dh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nn!==null&&(Uf(nn),nn=null))),Lf(e,t),Ze(t),null;case 5:ch(t);var i=Fr(ua.current);if(n=t.type,e!==null&&t.stateNode!=null)Tx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return Ze(t),null}if(e=Fr(Sn.current),ts(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[xn]=t,r[sa]=o,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Io.length;i++)me(Io[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Qm(r,o),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},me("invalid",r);break;case"textarea":eg(r,o),me("invalid",r)}lf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&es(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&es(r.textContent,l,e),i=["children",""+l]):Zo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&me("scroll",r)}switch(n){case"input":Ga(r),Jm(r,o,!0);break;case"textarea":Ga(r),tg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=cl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ty(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[xn]=t,e[sa]=r,kx(e,t,!1,!1),t.stateNode=e;e:{switch(a=uf(n,r),n){case"dialog":me("cancel",e),me("close",e),i=r;break;case"iframe":case"object":case"embed":me("load",e),i=r;break;case"video":case"audio":for(i=0;i<Io.length;i++)me(Io[i],e);i=r;break;case"source":me("error",e),i=r;break;case"img":case"image":case"link":me("error",e),me("load",e),i=r;break;case"details":me("toggle",e),i=r;break;case"input":Qm(e,r),i=nf(e,r),me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),me("invalid",e);break;case"textarea":eg(e,r),i=af(e,r),me("invalid",e);break;default:i=r}lf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?iy(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ny(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Qo(e,s):typeof s=="number"&&Qo(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Zo.hasOwnProperty(o)?s!=null&&o==="onScroll"&&me("scroll",e):s!=null&&Vp(e,o,s,a))}switch(n){case"input":Ga(e),Jm(e,r,!1);break;case"textarea":Ga(e),tg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ci(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)Ox(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Fr(ua.current),Fr(Sn.current),ts(t)){if(r=t.stateNode,n=t.memoizedProps,r[xn]=t,(o=r.nodeValue!==n)&&(e=It,e!==null))switch(e.tag){case 3:es(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&es(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=t,t.stateNode=r}return Ze(t),null;case 13:if(ve(Se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&Pt!==null&&t.mode&1&&!(t.flags&128))Wy(),Li(),t.flags|=98560,o=!1;else if(o=ts(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[xn]=t}else Li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else nn!==null&&(Uf(nn),nn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Se.current&1?Ae===0&&(Ae=3):_h())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Ai(),Lf(e,t),e===null&&oa(t.stateNode.containerInfo),Ze(t),null;case 10:return ah(t.type._context),Ze(t),null;case 17:return bt(t.type)&&dl(),Ze(t),null;case 19:if(ve(Se),o=t.memoizedState,o===null)return Ze(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)xo(o,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=yl(e),a!==null){for(t.flags|=128,xo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(Se,Se.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>Ni&&(t.flags|=128,r=!0,xo(o,!1),t.lanes=4194304)}else{if(!r)if(e=yl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!be)return Ze(t),null}else 2*Te()-o.renderingStartTime>Ni&&n!==1073741824&&(t.flags|=128,r=!0,xo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,n=Se.current,he(Se,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return Sh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Tt&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function ik(e,t){switch(nh(t),t.tag){case 1:return bt(t.type)&&dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ai(),ve(xt),ve(rt),dh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ch(t),null;case 13:if(ve(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Se),null;case 4:return Ai(),null;case 10:return ah(t.type._context),null;case 22:case 23:return Sh(),null;case 24:return null;default:return null}}var is=!1,tt=!1,ok=typeof WeakSet=="function"?WeakSet:Set,U=null;function _i(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function Rf(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var Hg=!1;function ak(e,t){if(xf=sl,e=jy(),eh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===e)break t;if(f===n&&++u===i&&(l=a),f===o&&++c===r&&(s=a),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(bf={focusedElem:e,selectionRange:n},sl=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,S=g.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Jt(t.type,v),S);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(w){Ce(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return g=Hg,Hg=!1,g}function Uo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Rf(t,n,o)}i=i.next}while(i!==r)}}function du(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Af(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Px(e){var t=e.alternate;t!==null&&(e.alternate=null,Px(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xn],delete t[sa],delete t[_f],delete t[BC],delete t[UC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mx(e){return e.tag===5||e.tag===3||e.tag===4}function Wg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ff(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cl));else if(r!==4&&(e=e.child,e!==null))for(Ff(e,t,n),e=e.sibling;e!==null;)Ff(e,t,n),e=e.sibling}function Nf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nf(e,t,n),e=e.sibling;e!==null;)Nf(e,t,n),e=e.sibling}var We=null,en=!1;function er(e,t,n){for(n=n.child;n!==null;)Ix(e,t,n),n=n.sibling}function Ix(e,t,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(ru,n)}catch{}switch(n.tag){case 5:tt||_i(n,t);case 6:var r=We,i=en;We=null,er(e,t,n),We=r,en=i,We!==null&&(en?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(en?(e=We,n=n.stateNode,e.nodeType===8?Fc(e.parentNode,n):e.nodeType===1&&Fc(e,n),na(e)):Fc(We,n.stateNode));break;case 4:r=We,i=en,We=n.stateNode.containerInfo,en=!0,er(e,t,n),We=r,en=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Rf(n,t,a),i=i.next}while(i!==r)}er(e,t,n);break;case 1:if(!tt&&(_i(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,t,l)}er(e,t,n);break;case 21:er(e,t,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,er(e,t,n),tt=r):er(e,t,n);break;default:er(e,t,n)}}function Gg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ok),t.forEach(function(r){var i=mk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:We=l.stateNode,en=!1;break e;case 3:We=l.stateNode.containerInfo,en=!0;break e;case 4:We=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(We===null)throw Error(V(160));Ix(o,a,i),We=null,en=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Ce(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jx(t,e),t=t.sibling}function jx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xt(t,e),hn(e),r&4){try{Uo(3,e,e.return),du(3,e)}catch(v){Ce(e,e.return,v)}try{Uo(5,e,e.return)}catch(v){Ce(e,e.return,v)}}break;case 1:Xt(t,e),hn(e),r&512&&n!==null&&_i(n,n.return);break;case 5:if(Xt(t,e),hn(e),r&512&&n!==null&&_i(n,n.return),e.flags&32){var i=e.stateNode;try{Qo(i,"")}catch(v){Ce(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&J1(i,o),uf(l,a);var u=uf(l,o);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?iy(i,d):c==="dangerouslySetInnerHTML"?ny(i,d):c==="children"?Qo(i,d):Vp(i,c,d,u)}switch(l){case"input":rf(i,o);break;case"textarea":ey(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Ci(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?Ci(i,!!o.multiple,o.defaultValue,!0):Ci(i,!!o.multiple,o.multiple?[]:"",!1))}i[sa]=o}catch(v){Ce(e,e.return,v)}}break;case 6:if(Xt(t,e),hn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Ce(e,e.return,v)}}break;case 3:if(Xt(t,e),hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{na(t.containerInfo)}catch(v){Ce(e,e.return,v)}break;case 4:Xt(t,e),hn(e);break;case 13:Xt(t,e),hn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(bh=Te())),r&4&&Gg(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(u=tt)||c,Xt(t,e),tt=u):Xt(t,e),hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(U=e,c=e.child;c!==null;){for(d=U=c;U!==null;){switch(f=U,h=f.child,f.tag){case 0:case 11:case 14:case 15:Uo(4,f,f.return);break;case 1:_i(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){Ce(r,n,v)}}break;case 5:_i(f,f.return);break;case 22:if(f.memoizedState!==null){qg(d);continue}}h!==null?(h.return=f,U=h):qg(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ry("display",a))}catch(v){Ce(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Ce(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Xt(t,e),hn(e),r&4&&Gg(e);break;case 21:break;default:Xt(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Mx(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qo(i,""),r.flags&=-33);var o=Wg(e);Nf(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Wg(e);Ff(e,l,a);break;default:throw Error(V(161))}}catch(s){Ce(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sk(e,t,n){U=e,$x(e)}function $x(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||is;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||tt;l=is;var u=tt;if(is=a,(tt=s)&&!u)for(U=i;U!==null;)a=U,s=a.child,a.tag===22&&a.memoizedState!==null?Xg(i):s!==null?(s.return=a,U=s):Xg(i);for(;o!==null;)U=o,$x(o),o=o.sibling;U=i,is=l,tt=u}Yg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):Yg(e)}}function Yg(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||du(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Jt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Mg(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mg(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&na(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}tt||t.flags&512&&Af(t)}catch(f){Ce(t,t.return,f)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function qg(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Xg(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{du(4,t)}catch(s){Ce(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Ce(t,i,s)}}var o=t.return;try{Af(t)}catch(s){Ce(t,o,s)}break;case 5:var a=t.return;try{Af(t)}catch(s){Ce(t,a,s)}}}catch(s){Ce(t,t.return,s)}if(t===e){U=null;break}var l=t.sibling;if(l!==null){l.return=t.return,U=l;break}U=t.return}}var lk=Math.ceil,wl=Xn.ReactCurrentDispatcher,yh=Xn.ReactCurrentOwner,Ut=Xn.ReactCurrentBatchConfig,ae=0,Be=null,je=null,Ye=0,Tt=0,Ei=Cr(0),Ae=0,pa=null,Gr=0,fu=0,xh=0,Ho=null,vt=null,bh=0,Ni=1/0,Mn=null,Sl=!1,zf=null,vr=null,os=!1,lr=null,_l=0,Wo=0,Vf=null,Ds=-1,Ls=0;function lt(){return ae&6?Te():Ds!==-1?Ds:Ds=Te()}function yr(e){return e.mode&1?ae&2&&Ye!==0?Ye&-Ye:WC.transition!==null?(Ls===0&&(Ls=gy()),Ls):(e=fe,e!==0||(e=window.event,e=e===void 0?16:_y(e.type)),e):1}function an(e,t,n,r){if(50<Wo)throw Wo=0,Vf=null,Error(V(185));Ta(e,n,r),(!(ae&2)||e!==Be)&&(e===Be&&(!(ae&2)&&(fu|=n),Ae===4&&or(e,Ye)),wt(e,r),n===1&&ae===0&&!(t.mode&1)&&(Ni=Te()+500,lu&&kr()))}function wt(e,t){var n=e.callbackNode;WE(e,t);var r=al(e,e===Be?Ye:0);if(r===0)n!==null&&ig(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ig(n),t===1)e.tag===0?HC(Kg.bind(null,e)):By(Kg.bind(null,e)),zC(function(){!(ae&6)&&kr()}),n=null;else{switch(vy(r)){case 1:n=Gp;break;case 4:n=hy;break;case 16:n=ol;break;case 536870912:n=my;break;default:n=ol}n=Vx(n,Dx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Dx(e,t){if(Ds=-1,Ls=0,ae&6)throw Error(V(327));var n=e.callbackNode;if(Mi()&&e.callbackNode!==n)return null;var r=al(e,e===Be?Ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=El(e,r);else{t=r;var i=ae;ae|=2;var o=Rx();(Be!==e||Ye!==t)&&(Mn=null,Ni=Te()+500,zr(e,t));do try{dk();break}catch(l){Lx(e,l)}while(1);oh(),wl.current=o,ae=i,je!==null?t=0:(Be=null,Ye=0,t=Ae)}if(t!==0){if(t===2&&(i=hf(e),i!==0&&(r=i,t=Bf(e,i))),t===1)throw n=pa,zr(e,0),or(e,r),wt(e,Te()),n;if(t===6)or(e,r);else{if(i=e.current.alternate,!(r&30)&&!uk(i)&&(t=El(e,r),t===2&&(o=hf(e),o!==0&&(r=o,t=Bf(e,o))),t===1))throw n=pa,zr(e,0),or(e,r),wt(e,Te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Ir(e,vt,Mn);break;case 3:if(or(e,r),(r&130023424)===r&&(t=bh+500-Te(),10<t)){if(al(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){lt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Sf(Ir.bind(null,e,vt,Mn),t);break}Ir(e,vt,Mn);break;case 4:if(or(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-on(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lk(r/1960))-r,10<r){e.timeoutHandle=Sf(Ir.bind(null,e,vt,Mn),r);break}Ir(e,vt,Mn);break;case 5:Ir(e,vt,Mn);break;default:throw Error(V(329))}}}return wt(e,Te()),e.callbackNode===n?Dx.bind(null,e):null}function Bf(e,t){var n=Ho;return e.current.memoizedState.isDehydrated&&(zr(e,t).flags|=256),e=El(e,t),e!==2&&(t=vt,vt=n,t!==null&&Uf(t)),e}function Uf(e){vt===null?vt=e:vt.push.apply(vt,e)}function uk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!un(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function or(e,t){for(t&=~xh,t&=~fu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-on(t),r=1<<n;e[n]=-1,t&=~r}}function Kg(e){if(ae&6)throw Error(V(327));Mi();var t=al(e,0);if(!(t&1))return wt(e,Te()),null;var n=El(e,t);if(e.tag!==0&&n===2){var r=hf(e);r!==0&&(t=r,n=Bf(e,r))}if(n===1)throw n=pa,zr(e,0),or(e,t),wt(e,Te()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ir(e,vt,Mn),wt(e,Te()),null}function wh(e,t){var n=ae;ae|=1;try{return e(t)}finally{ae=n,ae===0&&(Ni=Te()+500,lu&&kr())}}function Yr(e){lr!==null&&lr.tag===0&&!(ae&6)&&Mi();var t=ae;ae|=1;var n=Ut.transition,r=fe;try{if(Ut.transition=null,fe=1,e)return e()}finally{fe=r,Ut.transition=n,ae=t,!(ae&6)&&kr()}}function Sh(){Tt=Ei.current,ve(Ei)}function zr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,NC(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(nh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:Ai(),ve(xt),ve(rt),dh();break;case 5:ch(r);break;case 4:Ai();break;case 13:ve(Se);break;case 19:ve(Se);break;case 10:ah(r.type._context);break;case 22:case 23:Sh()}n=n.return}if(Be=e,je=e=xr(e.current,null),Ye=Tt=t,Ae=0,pa=null,xh=fu=Gr=0,vt=Ho=null,Ar!==null){for(t=0;t<Ar.length;t++)if(n=Ar[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Ar=null}return e}function Lx(e,t){do{var n=je;try{if(oh(),Is.current=bl,xl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xl=!1}if(Wr=0,Ve=Le=_e=null,Bo=!1,ca=0,yh.current=null,n===null||n.return===null){Ae=1,pa=t,je=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Ye,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Ag(a);if(h!==null){h.flags&=-257,Fg(h,a,l,o,t),h.mode&1&&Rg(o,u,t),t=h,s=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(s),t.updateQueue=v}else g.add(s);break e}else{if(!(t&1)){Rg(o,u,t),_h();break e}s=Error(V(426))}}else if(be&&l.mode&1){var S=Ag(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Fg(S,a,l,o,t),rh(Fi(s,l));break e}}o=s=Fi(s,l),Ae!==4&&(Ae=2),Ho===null?Ho=[o]:Ho.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=yx(o,s,t);Pg(o,p);break e;case 1:l=s;var m=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(vr===null||!vr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=xx(o,l,t);Pg(o,w);break e}}o=o.return}while(o!==null)}Fx(n)}catch(C){t=C,je===n&&n!==null&&(je=n=n.return);continue}break}while(1)}function Rx(){var e=wl.current;return wl.current=bl,e===null?bl:e}function _h(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Be===null||!(Gr&268435455)&&!(fu&268435455)||or(Be,Ye)}function El(e,t){var n=ae;ae|=2;var r=Rx();(Be!==e||Ye!==t)&&(Mn=null,zr(e,t));do try{ck();break}catch(i){Lx(e,i)}while(1);if(oh(),ae=n,wl.current=r,je!==null)throw Error(V(261));return Be=null,Ye=0,Ae}function ck(){for(;je!==null;)Ax(je)}function dk(){for(;je!==null&&!RE();)Ax(je)}function Ax(e){var t=zx(e.alternate,e,Tt);e.memoizedProps=e.pendingProps,t===null?Fx(e):je=t,yh.current=null}function Fx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ik(n,t),n!==null){n.flags&=32767,je=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,je=null;return}}else if(n=rk(n,t,Tt),n!==null){je=n;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);Ae===0&&(Ae=5)}function Ir(e,t,n){var r=fe,i=Ut.transition;try{Ut.transition=null,fe=1,fk(e,t,n,r)}finally{Ut.transition=i,fe=r}return null}function fk(e,t,n,r){do Mi();while(lr!==null);if(ae&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(GE(e,o),e===Be&&(je=Be=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||os||(os=!0,Vx(ol,function(){return Mi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ut.transition,Ut.transition=null;var a=fe;fe=1;var l=ae;ae|=4,yh.current=null,ak(e,n),jx(n,e),jC(bf),sl=!!xf,bf=xf=null,e.current=n,sk(n),AE(),ae=l,fe=a,Ut.transition=o}else e.current=n;if(os&&(os=!1,lr=e,_l=i),o=e.pendingLanes,o===0&&(vr=null),zE(n.stateNode),wt(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sl)throw Sl=!1,e=zf,zf=null,e;return _l&1&&e.tag!==0&&Mi(),o=e.pendingLanes,o&1?e===Vf?Wo++:(Wo=0,Vf=e):Wo=0,kr(),null}function Mi(){if(lr!==null){var e=vy(_l),t=Ut.transition,n=fe;try{if(Ut.transition=null,fe=16>e?16:e,lr===null)var r=!1;else{if(e=lr,lr=null,_l=0,ae&6)throw Error(V(331));var i=ae;for(ae|=4,U=e.current;U!==null;){var o=U,a=o.child;if(U.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Uo(8,c,o)}var d=c.child;if(d!==null)d.return=c,U=d;else for(;U!==null;){c=U;var f=c.sibling,h=c.return;if(Px(c),c===u){U=null;break}if(f!==null){f.return=h,U=f;break}U=h}}}var g=o.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}U=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,U=a;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Uo(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,U=p;break e}U=o.return}}var m=e.current;for(U=m;U!==null;){a=U;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,U=x;else e:for(a=m;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:du(9,l)}}catch(C){Ce(l,l.return,C)}if(l===a){U=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,U=w;break e}U=l.return}}if(ae=i,kr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(ru,e)}catch{}r=!0}return r}finally{fe=n,Ut.transition=t}}return!1}function Zg(e,t,n){t=Fi(n,t),t=yx(e,t,1),e=gr(e,t,1),t=lt(),e!==null&&(Ta(e,1,t),wt(e,t))}function Ce(e,t,n){if(e.tag===3)Zg(e,e,n);else for(;t!==null;){if(t.tag===3){Zg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){e=Fi(n,e),e=xx(t,e,1),t=gr(t,e,1),e=lt(),t!==null&&(Ta(t,1,e),wt(t,e));break}}t=t.return}}function pk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(Ye&n)===n&&(Ae===4||Ae===3&&(Ye&130023424)===Ye&&500>Te()-bh?zr(e,0):xh|=n),wt(e,t)}function Nx(e,t){t===0&&(e.mode&1?(t=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):t=1);var n=lt();e=Hn(e,t),e!==null&&(Ta(e,t,n),wt(e,n))}function hk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nx(e,n)}function mk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Nx(e,n)}var zx;zx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)yt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return yt=!1,nk(e,t,n);yt=!!(e.flags&131072)}else yt=!1,be&&t.flags&1048576&&Uy(t,hl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$s(e,t),e=t.pendingProps;var i=Di(t,rt.current);Pi(t,n),i=ph(null,t,r,e,i,n);var o=hh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(r)?(o=!0,fl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lh(t),i.updater=uu,t.stateNode=i,i._reactInternals=t,Pf(t,r,e,n),t=jf(null,t,r,!0,o,n)):(t.tag=0,be&&o&&th(t),at(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($s(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=vk(r),e=Jt(r,e),i){case 0:t=If(null,t,r,e,n);break e;case 1:t=Vg(null,t,r,e,n);break e;case 11:t=Ng(null,t,r,e,n);break e;case 14:t=zg(null,t,r,Jt(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),If(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Vg(e,t,r,i,n);case 3:e:{if(_x(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Yy(e,t),vl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Fi(Error(V(423)),t),t=Bg(e,t,r,n,i);break e}else if(r!==i){i=Fi(Error(V(424)),t),t=Bg(e,t,r,n,i);break e}else for(Pt=mr(t.stateNode.containerInfo.firstChild),It=t,be=!0,nn=null,n=Zy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Li(),r===i){t=Wn(e,t,n);break e}at(e,t,r,n)}t=t.child}return t;case 5:return Qy(t),e===null&&kf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,wf(r,i)?a=null:o!==null&&wf(r,o)&&(t.flags|=32),Sx(e,t),at(e,t,a,n),t.child;case 6:return e===null&&kf(t),null;case 13:return Ex(e,t,n);case 4:return uh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ri(t,null,r,n):at(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Ng(e,t,r,i,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,he(ml,r._currentValue),r._currentValue=a,o!==null)if(un(o.value,a)){if(o.children===i.children&&!xt.current){t=Wn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Fn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Tf(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Tf(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}at(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pi(t,n),i=Ht(i),r=r(i),t.flags|=1,at(e,t,r,n),t.child;case 14:return r=t.type,i=Jt(r,t.pendingProps),i=Jt(r.type,i),zg(e,t,r,i,n);case 15:return bx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),$s(e,t),t.tag=1,bt(r)?(e=!0,fl(t)):e=!1,Pi(t,n),Xy(t,r,i),Pf(t,r,i,n),jf(null,t,r,!0,e,n);case 19:return Cx(e,t,n);case 22:return wx(e,t,n)}throw Error(V(156,t.tag))};function Vx(e,t){return py(e,t)}function gk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(e,t,n,r){return new gk(e,t,n,r)}function Eh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vk(e){if(typeof e=="function")return Eh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Up)return 11;if(e===Hp)return 14}return 2}function xr(e,t){var n=e.alternate;return n===null?(n=Bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Eh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case hi:return Vr(n.children,i,o,t);case Bp:a=8,i|=8;break;case Qd:return e=Bt(12,n,t,i|2),e.elementType=Qd,e.lanes=o,e;case Jd:return e=Bt(13,n,t,i),e.elementType=Jd,e.lanes=o,e;case ef:return e=Bt(19,n,t,i),e.elementType=ef,e.lanes=o,e;case K1:return pu(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q1:a=10;break e;case X1:a=9;break e;case Up:a=11;break e;case Hp:a=14;break e;case nr:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Bt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Vr(e,t,n,r){return e=Bt(7,e,r,t),e.lanes=n,e}function pu(e,t,n,r){return e=Bt(22,e,r,t),e.elementType=K1,e.lanes=n,e.stateNode={isHidden:!1},e}function Gc(e,t,n){return e=Bt(6,e,null,t),e.lanes=n,e}function Yc(e,t,n){return t=Bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ch(e,t,n,r,i,o,a,l,s){return e=new yk(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Bt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lh(o),e}function xk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Bx(e){if(!e)return Sr;e=e._reactInternals;e:{if(ei(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(bt(n))return Vy(e,n,t)}return t}function Ux(e,t,n,r,i,o,a,l,s){return e=Ch(n,r,!0,e,i,o,a,l,s),e.context=Bx(null),n=e.current,r=lt(),i=yr(n),o=Fn(r,i),o.callback=t??null,gr(n,o,i),e.current.lanes=i,Ta(e,i,r),wt(e,r),e}function hu(e,t,n,r){var i=t.current,o=lt(),a=yr(i);return n=Bx(n),t.context===null?t.context=n:t.pendingContext=n,t=Fn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gr(i,t,a),e!==null&&(an(e,i,a,o),Ms(e,i,a)),a}function Cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kh(e,t){Qg(e,t),(e=e.alternate)&&Qg(e,t)}function bk(){return null}var Hx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Th(e){this._internalRoot=e}mu.prototype.render=Th.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));hu(e,t,null,null)};mu.prototype.unmount=Th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yr(function(){hu(null,e,null,null)}),t[Un]=null}};function mu(e){this._internalRoot=e}mu.prototype.unstable_scheduleHydration=function(e){if(e){var t=by();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ir.length&&t!==0&&t<ir[n].priority;n++);ir.splice(n,0,e),n===0&&Sy(e)}};function Oh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Jg(){}function wk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Cl(a);o.call(u)}}var a=Ux(t,r,e,0,null,!1,!1,"",Jg);return e._reactRootContainer=a,e[Un]=a.current,oa(e.nodeType===8?e.parentNode:e),Yr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Cl(s);l.call(u)}}var s=Ch(e,0,!1,null,null,!1,!1,"",Jg);return e._reactRootContainer=s,e[Un]=s.current,oa(e.nodeType===8?e.parentNode:e),Yr(function(){hu(t,s,n,r)}),s}function vu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Cl(a);l.call(s)}}hu(t,a,e,i)}else a=wk(n,t,e,i,r);return Cl(a)}yy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mo(t.pendingLanes);n!==0&&(Yp(t,n|1),wt(t,Te()),!(ae&6)&&(Ni=Te()+500,kr()))}break;case 13:Yr(function(){var r=Hn(e,1);if(r!==null){var i=lt();an(r,e,1,i)}}),kh(e,1)}};qp=function(e){if(e.tag===13){var t=Hn(e,134217728);if(t!==null){var n=lt();an(t,e,134217728,n)}kh(e,134217728)}};xy=function(e){if(e.tag===13){var t=yr(e),n=Hn(e,t);if(n!==null){var r=lt();an(n,e,t,r)}kh(e,t)}};by=function(){return fe};wy=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};df=function(e,t,n){switch(t){case"input":if(rf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=su(r);if(!i)throw Error(V(90));Q1(r),rf(r,i)}}}break;case"textarea":ey(e,n);break;case"select":t=n.value,t!=null&&Ci(e,!!n.multiple,t,!1)}};sy=wh;ly=Yr;var Sk={usingClientEntryPoint:!1,Events:[Pa,yi,su,oy,ay,wh]},bo={findFiberByHostInstance:Rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_k={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dy(e),e===null?null:e.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||bk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var as=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!as.isDisabled&&as.supportsFiber)try{ru=as.inject(_k),wn=as}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sk;Lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oh(t))throw Error(V(200));return xk(e,t,null,n)};Lt.createRoot=function(e,t){if(!Oh(e))throw Error(V(299));var n=!1,r="",i=Hx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ch(e,1,!1,null,null,n,!1,r,i),e[Un]=t.current,oa(e.nodeType===8?e.parentNode:e),new Th(t)};Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=dy(t),e=e===null?null:e.stateNode,e};Lt.flushSync=function(e){return Yr(e)};Lt.hydrate=function(e,t,n){if(!gu(t))throw Error(V(200));return vu(null,e,t,!0,n)};Lt.hydrateRoot=function(e,t,n){if(!Oh(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Hx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ux(t,null,e,1,n??null,i,!1,o,a),e[Un]=t.current,oa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new mu(t)};Lt.render=function(e,t,n){if(!gu(t))throw Error(V(200));return vu(null,e,t,!1,n)};Lt.unmountComponentAtNode=function(e){if(!gu(e))throw Error(V(40));return e._reactRootContainer?(Yr(function(){vu(null,null,e,!1,function(){e._reactRootContainer=null,e[Un]=null})}),!0):!1};Lt.unstable_batchedUpdates=wh;Lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gu(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return vu(e,t,n,!1,r)};Lt.version="18.2.0-next-9e3b772b8-20220608";function Wx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wx)}catch(e){console.error(e)}}Wx(),U1.exports=Lt;var yu=U1.exports,e0=yu;Kd.createRoot=e0.createRoot,Kd.hydrateRoot=e0.hydrateRoot;var nt=function(){return nt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},nt.apply(this,arguments)};function zi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function Ek(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ck=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,kk=Ek(function(e){return Ck.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ge="-ms-",Go="-moz-",le="-webkit-",Gx="comm",xu="rule",Ph="decl",Tk="@import",Ok="@namespace",Yx="@keyframes",Pk="@layer",qx=Math.abs,Mh=String.fromCharCode,Hf=Object.assign;function Mk(e,t){return Re(e,0)^45?(((t<<2^Re(e,0))<<2^Re(e,1))<<2^Re(e,2))<<2^Re(e,3):0}function Xx(e){return e.trim()}function In(e,t){return(e=t.exec(e))?e[0]:e}function ee(e,t,n){return e.replace(t,n)}function As(e,t,n){return e.indexOf(t,n)}function Re(e,t){return e.charCodeAt(t)|0}function qr(e,t,n){return e.slice(t,n)}function tn(e){return e.length}function Kx(e){return e.length}function jo(e,t){return t.push(e),e}function Ik(e,t){return e.map(t).join("")}function t0(e,t){return e.filter(function(n){return!In(n,t)})}var bu=1,Vi=1,Zx=0,Gt=0,Me=0,to="";function wu(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:bu,column:Vi,length:a,return:"",siblings:l}}function tr(e,t){return Hf(wu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ii(e){for(;e.root;)e=tr(e.root,{children:[e]});jo(e,e.siblings)}function jk(){return Me}function $k(){return Me=Gt>0?Re(to,--Gt):0,Vi--,Me===10&&(Vi=1,bu--),Me}function sn(){return Me=Gt<Zx?Re(to,Gt++):0,Vi++,Me===10&&(Vi=1,bu++),Me}function ur(){return Re(to,Gt)}function Fs(){return Gt}function Su(e,t){return qr(to,e,t)}function ha(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Dk(e){return bu=Vi=1,Zx=tn(to=e),Gt=0,[]}function Lk(e){return to="",e}function qc(e){return Xx(Su(Gt-1,Wf(e===91?e+2:e===40?e+1:e)))}function Rk(e){for(;(Me=ur())&&Me<33;)sn();return ha(e)>2||ha(Me)>3?"":" "}function Ak(e,t){for(;--t&&sn()&&!(Me<48||Me>102||Me>57&&Me<65||Me>70&&Me<97););return Su(e,Fs()+(t<6&&ur()==32&&sn()==32))}function Wf(e){for(;sn();)switch(Me){case e:return Gt;case 34:case 39:e!==34&&e!==39&&Wf(Me);break;case 40:e===41&&Wf(e);break;case 92:sn();break}return Gt}function Fk(e,t){for(;sn()&&e+Me!==47+10;)if(e+Me===42+42&&ur()===47)break;return"/*"+Su(t,Gt-1)+"*"+Mh(e===47?e:sn())}function Nk(e){for(;!ha(ur());)sn();return Su(e,Gt)}function zk(e){return Lk(Ns("",null,null,null,[""],e=Dk(e),0,[0],e))}function Ns(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,f=0,h=0,g=0,v=1,S=1,p=1,m=0,x="",w=i,C=o,k=r,_=x;S;)switch(g=m,m=sn()){case 40:if(g!=108&&Re(_,d-1)==58){As(_+=ee(qc(m),"&","&\f"),"&\f",qx(u?l[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:_+=qc(m);break;case 9:case 10:case 13:case 32:_+=Rk(g);break;case 92:_+=Ak(Fs()-1,7);continue;case 47:switch(ur()){case 42:case 47:jo(Vk(Fk(sn(),Fs()),t,n,s),s),(ha(g||1)==5||ha(ur()||1)==5)&&tn(_)&&qr(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*v:l[u++]=tn(_)*p;case 125*v:case 59:case 0:switch(m){case 0:case 125:S=0;case 59+c:p==-1&&(_=ee(_,/\f/g,"")),h>0&&(tn(_)-d||v===0&&g===47)&&jo(h>32?r0(_+";",r,n,d-1,s):r0(ee(_," ","")+";",r,n,d-2,s),s);break;case 59:_+=";";default:if(jo(k=n0(_,t,n,u,c,i,l,x,w=[],C=[],d,o),o),m===123)if(c===0)Ns(_,t,k,k,w,o,d,l,C);else{switch(f){case 99:if(Re(_,3)===110)break;case 108:if(Re(_,2)===97)break;default:c=0;case 100:case 109:case 115:}c?Ns(e,k,k,r&&jo(n0(e,k,k,0,0,i,l,x,i,w=[],d,C),C),i,C,d,l,r?w:C):Ns(_,k,k,k,[""],C,0,l,C)}}u=c=h=0,v=p=1,x=_="",d=a;break;case 58:d=1+tn(_),h=g;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&$k()==125)continue}switch(_+=Mh(m),m*v){case 38:p=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(tn(_)-1)*p,p=1;break;case 64:ur()===45&&(_+=qc(sn())),f=ur(),c=d=tn(x=_+=Nk(Fs())),m++;break;case 45:g===45&&tn(_)==2&&(v=0)}}return o}function n0(e,t,n,r,i,o,a,l,s,u,c,d){for(var f=i-1,h=i===0?o:[""],g=Kx(h),v=0,S=0,p=0;v<r;++v)for(var m=0,x=qr(e,f+1,f=qx(S=a[v])),w=e;m<g;++m)(w=Xx(S>0?h[m]+" "+x:ee(x,/&\f/g,h[m])))&&(s[p++]=w);return wu(e,t,n,i===0?xu:l,s,u,c,d)}function Vk(e,t,n,r){return wu(e,t,n,Gx,Mh(jk()),qr(e,2,-2),0,r)}function r0(e,t,n,r,i){return wu(e,t,n,Ph,qr(e,0,r),qr(e,r+1,-1),r,i)}function Qx(e,t,n){switch(Mk(e,t)){case 5103:return le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return le+e+e;case 4855:return le+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Go+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return le+e+Go+e+ge+e+e;case 5936:switch(Re(e,t+11)){case 114:return le+e+ge+ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return le+e+ge+ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return le+e+ge+ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return le+e+ge+e+e;case 6165:return le+e+ge+"flex-"+e+e;case 5187:return le+e+ee(e,/(\w+).+(:[^]+)/,le+"box-$1$2"+ge+"flex-$1$2")+e;case 5443:return le+e+ge+"flex-item-"+ee(e,/flex-|-self/g,"")+(In(e,/flex-|baseline/)?"":ge+"grid-row-"+ee(e,/flex-|-self/g,""))+e;case 4675:return le+e+ge+"flex-line-pack"+ee(e,/align-content|flex-|-self/g,"")+e;case 5548:return le+e+ge+ee(e,"shrink","negative")+e;case 5292:return le+e+ge+ee(e,"basis","preferred-size")+e;case 6060:return le+"box-"+ee(e,"-grow","")+le+e+ge+ee(e,"grow","positive")+e;case 4554:return le+ee(e,/([^-])(transform)/g,"$1"+le+"$2")+e;case 6187:return ee(ee(ee(e,/(zoom-|grab)/,le+"$1"),/(image-set)/,le+"$1"),e,"")+e;case 5495:case 3959:return ee(e,/(image-set\([^]*)/,le+"$1$`$1");case 4968:return ee(ee(e,/(.+:)(flex-)?(.*)/,le+"box-pack:$3"+ge+"flex-pack:$3"),/space-between/,"justify")+le+e+e;case 4200:if(!In(e,/flex-|baseline/))return ge+"grid-column-align"+qr(e,t)+e;break;case 2592:case 3360:return ge+ee(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,In(r.props,/grid-\w+-end/)})?~As(e+(n=n[t].value),"span",0)?e:ge+ee(e,"-start","")+e+ge+"grid-row-span:"+(~As(n,"span",0)?In(n,/\d+/):+In(n,/\d+/)-+In(e,/\d+/))+";":ge+ee(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return In(r.props,/grid-\w+-start/)})?e:ge+ee(ee(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ee(e,/(.+)-inline(.+)/,le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tn(e)-1-t>6)switch(Re(e,t+1)){case 109:if(Re(e,t+4)!==45)break;case 102:return ee(e,/(.+:)(.+)-([^]+)/,"$1"+le+"$2-$3$1"+Go+(Re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~As(e,"stretch",0)?Qx(ee(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ee(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return ge+i+":"+o+u+(a?ge+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(Re(e,t+6)===121)return ee(e,":",":"+le)+e;break;case 6444:switch(Re(e,Re(e,14)===45?18:11)){case 120:return ee(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+le+(Re(e,14)===45?"inline-":"")+"box$3$1"+le+"$2$3$1"+ge+"$2box$3")+e;case 100:return ee(e,":",":"+ge)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(e,"scroll-","scroll-snap-")+e}return e}function kl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Bk(e,t,n,r){switch(e.type){case Pk:if(e.children.length)break;case Tk:case Ok:case Ph:return e.return=e.return||e.value;case Gx:return"";case Yx:return e.return=e.value+"{"+kl(e.children,r)+"}";case xu:if(!tn(e.value=e.props.join(",")))return""}return tn(n=kl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Uk(e){var t=Kx(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function Hk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Wk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ph:e.return=Qx(e.value,e.length,n);return;case Yx:return kl([tr(e,{value:ee(e.value,"@","@"+le)})],r);case xu:if(e.length)return Ik(n=e.props,function(i){switch(In(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ii(tr(e,{props:[ee(i,/:(read-\w+)/,":"+Go+"$1")]})),ii(tr(e,{props:[i]})),Hf(e,{props:t0(n,r)});break;case"::placeholder":ii(tr(e,{props:[ee(i,/:(plac\w+)/,":"+le+"input-$1")]})),ii(tr(e,{props:[ee(i,/:(plac\w+)/,":"+Go+"$1")]})),ii(tr(e,{props:[ee(i,/:(plac\w+)/,ge+"input-$1")]})),ii(tr(e,{props:[i]})),Hf(e,{props:t0(n,r)});break}return""})}}var Gk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Jx="active",eb="data-styled-version",_u="6.3.11",Ih=`/*!sc*/
`,Yo=typeof window<"u"&&typeof document<"u",Yk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),qk={};function Ia(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var zs=new Map,Tl=new Map,Vs=1,$o=function(e){if(zs.has(e))return zs.get(e);for(;Tl.has(Vs);)Vs++;var t=Vs++;return zs.set(e,t),Tl.set(t,e),t},Xk=function(e,t){Vs=t+1,zs.set(e,t),Tl.set(t,e)},jh=Object.freeze([]),Ui=Object.freeze({});function tb(e,t,n){return n===void 0&&(n=Ui),e.theme!==n.theme&&e.theme||t||n.theme}var nb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Kk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zk=/(^-|-$)/g;function i0(e){return e.replace(Kk,"-").replace(Zk,"")}var Qk=/(a)(d)/gi,o0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Gf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=o0(t%52)+n;return(o0(t%52)+n).replace(Qk,"$1-$2")}var Xc,jr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},rb=function(e){return jr(5381,e)};function $h(e){return Gf(rb(e)>>>0)}function Jk(e){return e.displayName||e.name||"Component"}function Kc(e){return typeof e=="string"&&!0}var ib=typeof Symbol=="function"&&Symbol.for,ob=ib?Symbol.for("react.memo"):60115,eT=ib?Symbol.for("react.forward_ref"):60112,tT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ab={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rT=((Xc={})[eT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xc[ob]=ab,Xc);function a0(e){return("type"in(t=e)&&t.type.$$typeof)===ob?ab:"$$typeof"in e?rT[e.$$typeof]:tT;var t}var iT=Object.defineProperty,oT=Object.getOwnPropertyNames,s0=Object.getOwnPropertySymbols,aT=Object.getOwnPropertyDescriptor,sT=Object.getPrototypeOf,l0=Object.prototype;function sb(e,t,n){if(typeof t!="string"){if(l0){var r=sT(t);r&&r!==l0&&sb(e,r,n)}var i=oT(t);s0&&(i=i.concat(s0(t)));for(var o=a0(e),a=a0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in nT||n&&n[s]||a&&s in a||o&&s in o)){var u=aT(t,s);try{iT(e,s,u)}catch{}}}}return e}function Hi(e){return typeof e=="function"}function Dh(e){return typeof e=="object"&&"styledComponentId"in e}function Nr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ol(e,t){return e.join(t||"")}function ma(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Yf(e,t,n){if(n===void 0&&(n=!1),!n&&!ma(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Yf(e[r],t[r]);else if(ma(t))for(var r in t)e[r]=Yf(e[r],t[r]);return e}function Lh(e,t){Object.defineProperty(e,"toString",{value:t})}var lT=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ia(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+Ih;return n},e}(),uT="style[".concat(Bi,"][").concat(eb,'="').concat(_u,'"]'),cT=new RegExp("^".concat(Bi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),u0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},qf=function(e){if(!e)return document;if(u0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(u0(t))return t}return document},dT=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},fT=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ih),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(cT);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(Xk(c,u),dT(e,c,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},Zc=function(e){for(var t=qf(e.options.target).querySelectorAll(uT),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Bi)!==Jx&&(fT(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function pT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var lb=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Bi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Bi,Jx),r.setAttribute(eb,_u);var a=pT();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},hT=function(){function e(t){this.element=lb(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Ia(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),mT=function(){function e(t){this.element=lb(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),gT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),c0=Yo,vT={isServer:!Yo,useCSSOMInjection:!Yk},Pl=function(){function e(t,n,r){t===void 0&&(t=Ui),n===void 0&&(n={});var i=this;this.options=nt(nt({},vT),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Yo&&c0&&(c0=!1,Zc(this)),Lh(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(d){var f=function(p){return Tl.get(p)}(d);if(f===void 0)return"continue";var h=o.names.get(f);if(h===void 0||!h.size)return"continue";var g=a.getGroup(d);if(g.length===0)return"continue";var v=Bi+".g"+d+'[id="'+f+'"]',S="";h.forEach(function(p){p.length>0&&(S+=p+",")}),s+=g+v+'{content:"'+S+'"}'+Ih},c=0;c<l;c++)u(c);return s}(i)})}return e.registerId=function(t){return $o(t)},e.prototype.rehydrate=function(){!this.server&&Yo&&Zc(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(nt(nt({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Yo&&t.target!==this.options.target&&qf(this.options.target)!==qf(t.target)&&Zc(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new gT(i):r?new hT(i):new mT(i)}(this.options),new lT(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){$o(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules($o(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup($o(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),yT=/&/g,jn=47,$r=42;function d0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==jn||e.charCodeAt(o+1)!==$r)if(i)a===$r&&e.charCodeAt(o+1)===jn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function ub(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ub(n.children,t)),n})}function xT(e){var t,n,r,i=e===void 0?Ui:e,o=i.options,a=o===void 0?Ui:o,l=i.plugins,s=l===void 0?jh:l,u=function(g,v,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):g},c=s.slice();c.push(function(g){g.type===xu&&g.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),g.props[0]=g.props[0].replace(yT,n).replace(r,u))}),a.prefix&&c.push(Wk),c.push(Bk);var d=[],f=Uk(c.concat(Hk(function(g){return d.push(g)}))),h=function(g,v,S,p){v===void 0&&(v=""),S===void 0&&(S=""),p===void 0&&(p="&"),t=p,n=v,r=void 0;var m=function(w){if(!d0(w))return w;for(var C=w.length,k="",_=0,E=0,M=0,I=!1,$=0;$<C;$++){var P=w.charCodeAt($);if(M!==0||I||P!==jn||w.charCodeAt($+1)!==$r)if(I)P===$r&&w.charCodeAt($+1)===jn&&(I=!1,$++);else if(P!==34&&P!==39||$!==0&&w.charCodeAt($-1)===92){if(M===0)if(P===123)E++;else if(P===125){if(--E<0){for(var j=$+1;j<C;){var R=w.charCodeAt(j);if(R===59||R===10)break;j++}j<C&&w.charCodeAt(j)===59&&j++,E=0,$=j-1,_=j;continue}E===0&&(k+=w.substring(_,$+1),_=$+1)}else P===59&&E===0&&(k+=w.substring(_,$+1),_=$+1)}else M===0?M=P:M===P&&(M=0);else I=!0,$++}if(_<C){var L=w.substring(_);d0(L)||(k+=L)}return k}(function(w){if(w.indexOf("//")===-1)return w;for(var C=w.length,k=[],_=0,E=0,M=0,I=0;E<C;){var $=w.charCodeAt(E);if($!==34&&$!==39||E!==0&&w.charCodeAt(E-1)===92)if(M===0)if($===jn&&E+1<C&&w.charCodeAt(E+1)===$r){for(E+=2;E+1<C&&(w.charCodeAt(E)!==$r||w.charCodeAt(E+1)!==jn);)E++;E+=2}else if($===40&&E>=3&&(32|w.charCodeAt(E-1))==108&&(32|w.charCodeAt(E-2))==114&&(32|w.charCodeAt(E-3))==117)I=1,E++;else if(I>0)$===41?I--:$===40&&I++,E++;else if($===$r&&E+1<C&&w.charCodeAt(E+1)===jn)E>_&&k.push(w.substring(_,E)),_=E+=2;else if($===jn&&E+1<C&&w.charCodeAt(E+1)===jn){for(E>_&&k.push(w.substring(_,E));E<C&&w.charCodeAt(E)!==10;)E++;_=E}else E++;else E++;else M===0?M=$:M===$&&(M=0),E++}return _===0?w:(_<C&&k.push(w.substring(_)),k.join(""))}(g)),x=zk(S||v?"".concat(S," ").concat(v," { ").concat(m," }"):m);return a.namespace&&(x=ub(x,a.namespace)),d=[],kl(x,f),d};return h.hash=s.length?s.reduce(function(g,v){return v.name||Ia(15),jr(g,v.name)},5381).toString():"",h}var bT=new Pl,Xf=xT(),cb=W.createContext({shouldForwardProp:void 0,styleSheet:bT,stylis:Xf});cb.Consumer;W.createContext(void 0);function Kf(){return W.useContext(cb)}var db=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Xf);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Lh(this,function(){throw Ia(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Xf),this.name+t.hash},e}();function wT(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Gk||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var ST=function(e){return e>="A"&&e<="Z"};function f0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;ST(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var fb=function(e){return e==null||e===!1||e===""},pb=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!fb(r)&&(Array.isArray(r)&&r.isCss||Hi(r)?t.push("".concat(f0(n),":"),r,";"):ma(r)?t.push.apply(t,zi(zi(["".concat(n," {")],pb(r),!1),["}"],!1)):t.push("".concat(f0(n),": ").concat(wT(n,r),";")))}return t};function br(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(fb(e))return i;if(Dh(e))return i.push(".".concat(e.styledComponentId)),i;if(Hi(e)){if(!Hi(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return br(o,t,n,r,i)}var a;if(e instanceof db)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(ma(e)){for(var l=pb(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)br(e[s],t,n,r,i);return i}function hb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Hi(n)&&!Dh(n))return!1}return!0}var _T=rb(_u),ET=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&hb(t),this.componentId=n,this.baseHash=jr(_T,n),this.baseStyle=r,Pl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Nr(i,this.staticRulesId);else{var o=Ol(br(this.rules,t,n,r)),a=Gf(jr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Nr(i,a),this.staticRulesId=a}else{for(var s=jr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=Ol(br(d,t,n,r));s=jr(jr(s,String(c)),f),u+=f}}if(u){var h=Gf(s>>>0);if(!n.hasNameForId(this.componentId,h)){var g=r(u,".".concat(h),void 0,this.componentId);n.insertRules(this.componentId,h,g)}i=Nr(i,h)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup($o(this.componentId)):""}},e}(),Rh=W.createContext(void 0);Rh.Consumer;var Qc={};function CT(e,t,n){var r=Dh(e),i=e,o=!Kc(e),a=t.attrs,l=a===void 0?jh:a,s=t.componentId,u=s===void 0?function(w,C){var k=typeof w!="string"?"sc":i0(w);Qc[k]=(Qc[k]||0)+1;var _="".concat(k,"-").concat($h(_u+k+Qc[k]));return C?"".concat(C,"-").concat(_):_}(t.displayName,t.parentComponentId):s,c=t.displayName,d=c===void 0?function(w){return Kc(w)?"styled.".concat(w):"Styled(".concat(Jk(w),")")}(e):c,f=t.displayName&&t.componentId?"".concat(i0(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;g=function(w,C){return v(w,C)&&S(w,C)}}else g=v}var p=new ET(n,f,r?i.componentStyle:void 0);function m(w,C){return function(k,_,E){var M=k.attrs,I=k.componentStyle,$=k.defaultProps,P=k.foldedComponentIds,j=k.styledComponentId,R=k.target,L=W.useContext(Rh),F=Kf(),A=k.shouldForwardProp||F.shouldForwardProp,O=tb(_,L,$)||Ui,D=function(K,re,we){for(var Xe,Pe=nt(nt({},re),{className:void 0,theme:we}),qt=0;qt<K.length;qt+=1){var Ft=Hi(Xe=K[qt])?Xe(Pe):Xe;for(var kt in Ft)kt==="className"?Pe.className=Nr(Pe.className,Ft[kt]):kt==="style"?Pe.style=nt(nt({},Pe.style),Ft[kt]):Pe[kt]=Ft[kt]}return"className"in re&&typeof re.className=="string"&&(Pe.className=Nr(Pe.className,re.className)),Pe}(M,_,O),N=D.as||R,B={};for(var z in D)D[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&D.theme===O||(z==="forwardedAs"?B.as=D.forwardedAs:A&&!A(z,N)||(B[z]=D[z]));var G=function(K,re){var we=Kf(),Xe=K.generateAndInjectStyles(re,we.styleSheet,we.stylis);return Xe}(I,D),Q=G.className,Z=Nr(P,j);return Q&&(Z+=" "+Q),D.className&&(Z+=" "+D.className),B[Kc(N)&&!nb.has(N)?"class":"className"]=Z,E&&(B.ref=E),b.createElement(N,B)}(x,w,C)}m.displayName=d;var x=W.forwardRef(m);return x.attrs=h,x.componentStyle=p,x.displayName=d,x.shouldForwardProp=g,x.foldedComponentIds=r?Nr(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=f,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(C){for(var k=[],_=1;_<arguments.length;_++)k[_-1]=arguments[_];for(var E=0,M=k;E<M.length;E++)Yf(C,M[E],!0);return C}({},i.defaultProps,w):w}}),Lh(x,function(){return".".concat(x.styledComponentId)}),o&&sb(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function p0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var h0=function(e){return Object.assign(e,{isCss:!0})};function Ah(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Hi(e)||ma(e))return h0(br(p0(jh,zi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?br(r):h0(br(p0(r,t)))}function Zf(e,t,n){if(n===void 0&&(n=Ui),!t)throw Ia(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Ah.apply(void 0,zi([i],o,!1)))};return r.attrs=function(i){return Zf(e,t,nt(nt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Zf(e,t,nt(nt({},n),i))},r}var mb=function(e){return Zf(CT,e)},T=mb;nb.forEach(function(e){T[e]=mb(e)});var kT=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=hb(t),Pl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ol(br(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Pl.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function TT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ah.apply(void 0,zi([e],t,!1)),i="sc-global-".concat($h(JSON.stringify(r))),o=new kT(r,i),a=new WeakMap,l=function(u){var c=Kf(),d=W.useContext(Rh),f=a.get(c.styleSheet);return f===void 0&&(f=c.styleSheet.allocateGSInstance(i),a.set(c.styleSheet,f)),(typeof window>"u"||!c.styleSheet.server)&&s(f,u,c.styleSheet,d,c.stylis),W.useLayoutEffect(function(){return c.styleSheet.server||s(f,u,c.styleSheet,d,c.stylis),function(){var h;o.removeStyles(f,c.styleSheet),h=c.styleSheet.options.target,typeof document<"u"&&(h??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(g){return g.remove()})}},[f,u,c.styleSheet,d,c.stylis]),null};function s(u,c,d,f,h){if(o.isStatic)o.renderStyles(u,qk,d,h);else{var g=nt(nt({},c),{theme:tb(c,f,l.defaultProps)});o.renderStyles(u,g,d,h)}}return W.memo(l)}function Fh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ol(Ah.apply(void 0,zi([e],t,!1))),i=$h(r);return new db(i,r)}const OT=T.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,PT=T.div`
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
`,MT=T.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,IT=T.div`

  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`,jT=T.div`
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
`;const $T=T(Oe)`
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
`;const DT=T.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,LT=T.button`
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
`;const RT=T.div`
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
`,AT=T.button`
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
`,FT=T.nav`
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
`,NT=T.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,zT=T.div`
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
`,VT=T.div`
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



`,BT=T.input`
  
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
`,UT=T.button`
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
  

`,cn="/Didiv/assets/symbol-defs-f1e4efb3.svg",WT=()=>{const[e,t]=b.useState("");return y.jsxs(VT,{children:[y.jsx(BT,{name:"site-search",value:e,onChange:n=>t(n.target.value),placeholder:"Пошук",autoComplete:"off"}),y.jsx(UT,{className:"search-button",children:y.jsx(HT,{children:y.jsx("use",{href:`${cn}#icon-search`})})})]})};var gb={exports:{}},vb={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=b;function GT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var YT=typeof Object.is=="function"?Object.is:GT,qT=ja.useSyncExternalStore,XT=ja.useRef,KT=ja.useEffect,ZT=ja.useMemo,QT=ja.useDebugValue;vb.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=XT(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=ZT(function(){function s(h){if(!u){if(u=!0,c=h,h=r(h),i!==void 0&&a.hasValue){var g=a.value;if(i(g,h))return d=g}return d=h}if(g=d,YT(c,h))return g;var v=r(h);return i!==void 0&&i(g,v)?(c=h,g):(c=h,d=v)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return s(t())},f===null?void 0:function(){return s(f())}]},[t,n,r,i]);var l=qT(e,o[0],o[1]);return KT(function(){a.hasValue=!0,a.value=l},[l]),QT(l),l};gb.exports=vb;var JT=gb.exports;function eO(e){e()}function tO(){let e=null,t=null;return{clear(){e=null,t=null},notify(){eO(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var m0={notify(){},get:()=>[]};function nO(e,t){let n,r=m0,i=0,o=!1;function a(v){c();const S=r.subscribe(v);let p=!1;return()=>{p||(p=!0,S(),d())}}function l(){r.notify()}function s(){g.onStateChange&&g.onStateChange()}function u(){return o}function c(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=tO())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=m0)}function f(){o||(o=!0,c())}function h(){o&&(o=!1,d())}const g={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:f,tryUnsubscribe:h,getListeners:()=>r};return g}var rO=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",iO=rO(),oO=()=>typeof navigator<"u"&&navigator.product==="ReactNative",aO=oO(),sO=()=>iO||aO?b.useLayoutEffect:b.useEffect,lO=sO(),Jc=Symbol.for("react-redux-context"),ed=typeof globalThis<"u"?globalThis:{};function uO(){if(!b.createContext)return{};const e=ed[Jc]??(ed[Jc]=new Map);let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var _r=uO();function cO(e){const{children:t,context:n,serverState:r,store:i}=e,o=b.useMemo(()=>{const s=nO(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=b.useMemo(()=>i.getState(),[i]);lO(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||_r;return b.createElement(l.Provider,{value:o},t)}var dO=cO;function Nh(e=_r){return function(){return b.useContext(e)}}var yb=Nh();function xb(e=_r){const t=e===_r?yb:Nh(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var fO=xb();function pO(e=_r){const t=e===_r?fO:xb(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var no=pO(),hO=(e,t)=>e===t;function mO(e=_r){const t=e===_r?yb:Nh(e),n=(r,i={})=>{const{equalityFn:o=hO}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:u}=a;b.useRef(!0);const c=b.useCallback({[r.name](f){return r(f)}}[r.name],[r]),d=JT.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,c,o);return b.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Nn=mO();const gO=T(Oe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,vO=T.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,yO=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,xO=T.div`
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
`,bO=({onClick:e})=>{const t=Nn(n=>n.cart.items.length);return y.jsx(gO,{to:"/cart",children:y.jsxs(yO,{onClick:e,children:[y.jsx(vO,{children:y.jsx("use",{href:`${cn}#icon-cart`})}),t>0&&y.jsx(xO,{children:t})]})})},wO=T.nav`
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
`,SO=()=>y.jsxs(wO,{children:[y.jsx(ls,{to:"/",children:"Головна"}),y.jsx(ls,{to:"/about",children:"Про нас"}),y.jsx(ls,{to:"/catalog",children:"Каталог"}),y.jsx(ls,{to:"/contacts",children:"Контакти"})]}),_O=T.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,EO=T(Oe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
 
  }
       
`,CO=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,kO=T.div`

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
`,TO=({onClick:e})=>{const t=Nn(n=>n.favorites.items.length);return y.jsx(EO,{to:"/favorite",children:y.jsxs(CO,{onClick:e,children:[y.jsx(_O,{children:y.jsx("use",{href:`${cn}#icon-heart`})}),t>0&&y.jsx(kO,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OO=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PO=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=e=>{const t=PO(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var MO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jO=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>b.createElement("svg",{ref:s,...MO,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:bb("lucide",i),...!o&&!IO(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,c])=>b.createElement(u,c)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(jO,{ref:o,iconNode:t,className:bb(`lucide-${OO(g0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=g0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $O=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],wb=Tn("arrow-right",$O);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Sb=Tn("heart",DO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LO=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],RO=Tn("house",LO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],FO=Tn("info",AO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NO=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],zO=Tn("mail",NO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VO=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],BO=Tn("shopping-bag",VO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UO=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Eu=Tn("shopping-cart",UO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HO=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],_b=Tn("sliders-horizontal",HO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WO=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Eb=Tn("trash-2",WO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Cb=Tn("x",GO),YO=()=>{const[e,t]=b.useState(!1);return y.jsx(OT,{children:y.jsx(PT,{children:y.jsxs(MT,{children:[y.jsxs(IT,{children:[y.jsx($T,{to:"/",children:"Дідів хлів"}),y.jsxs(jT,{children:[y.jsx(bO,{}),y.jsx(TO,{}),y.jsx(SO,{}),y.jsx(LT,{onClick:()=>t(!e),children:y.jsx(DT,{children:y.jsx("use",{href:`${cn}#icon-menu`})})}),y.jsx(zT,{open:e,onClick:()=>t(!1)}),y.jsxs(RT,{open:e,children:[y.jsx(AT,{onClick:()=>t(!1),children:y.jsx(Cb,{size:28,strokeWidth:1.5})}),y.jsxs(FT,{children:[y.jsxs(ss,{onClick:()=>t(!1),to:"/",children:[y.jsx(RO,{size:22,strokeWidth:1.5})," Головна"]}),y.jsxs(ss,{onClick:()=>t(!1),to:"/about",children:[y.jsx(FO,{size:22,strokeWidth:1.5})," Про нас"]}),y.jsxs(ss,{onClick:()=>t(!1),to:"/catalog",children:[y.jsx(BO,{size:22,strokeWidth:1.5})," Каталог"]}),y.jsxs(ss,{onClick:()=>t(!1),to:"/contacts",children:[y.jsx(zO,{size:22,strokeWidth:1.5})," Контакти"]})]}),y.jsx(NT,{children:y.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),y.jsx(WT,{})]})})})},qO=T.div`

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
`,KO=T.div`
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
`,ZO=T.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,v0=T.a`
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
`,QO=()=>y.jsx(qO,{children:y.jsxs(XO,{children:[y.jsxs(KO,{children:[y.jsxs(td,{children:[y.jsx(nd,{children:"Навігація"}),y.jsx(mn,{to:"/",children:"Головна"}),y.jsx(mn,{to:"/about",children:"Про нас"}),y.jsx(mn,{to:"/catalog",children:"Каталог"}),y.jsx(mn,{to:"/contacts",children:"Контакти"})]}),y.jsxs(td,{children:[y.jsx(nd,{children:"Інформація"}),y.jsx(mn,{to:"/delivery",children:"Оплата і доставка"}),y.jsx(mn,{children:"Повернення"}),y.jsx(mn,{children:"Гарантія"}),y.jsx(mn,{children:"Політика конфіденційності"})]})]}),y.jsxs(td,{children:[y.jsx(nd,{children:"Контакти"}),y.jsx(mn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),y.jsx(mn,{href:"mailto:email@email.com",children:"email@email.com"}),y.jsxs(ZO,{children:[y.jsx(v0,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${cn}#icon-instagram`})})}),y.jsx(v0,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${cn}#icon-telegram`})})})]})]})]})}),JO=()=>(console.log("rer"),y.jsxs(y.Fragment,{children:[y.jsx(YO,{}),y.jsx("main",{className:"main-content",children:y.jsx(uE,{})}),y.jsx(QO,{})]}));function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X.apply(this,arguments)}function eP(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function tP(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var nP=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(tP(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=eP(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Je="-ms-",Ml="-moz-",ue="-webkit-",kb="comm",zh="rule",Vh="decl",rP="@import",Tb="@keyframes",iP="@layer",oP=Math.abs,Cu=String.fromCharCode,aP=Object.assign;function sP(e,t){return Ge(e,0)^45?(((t<<2^Ge(e,0))<<2^Ge(e,1))<<2^Ge(e,2))<<2^Ge(e,3):0}function Ob(e){return e.trim()}function lP(e,t){return(e=t.exec(e))?e[0]:e}function ce(e,t,n){return e.replace(t,n)}function Qf(e,t){return e.indexOf(t)}function Ge(e,t){return e.charCodeAt(t)|0}function ga(e,t,n){return e.slice(t,n)}function vn(e){return e.length}function Bh(e){return e.length}function us(e,t){return t.push(e),e}function uP(e,t){return e.map(t).join("")}var ku=1,Wi=1,Pb=0,St=0,Ie=0,ro="";function Tu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ku,column:Wi,length:a,return:""}}function wo(e,t){return aP(Tu("",null,null,"",null,null,0),e,{length:-e.length},t)}function cP(){return Ie}function dP(){return Ie=St>0?Ge(ro,--St):0,Wi--,Ie===10&&(Wi=1,ku--),Ie}function jt(){return Ie=St<Pb?Ge(ro,St++):0,Wi++,Ie===10&&(Wi=1,ku++),Ie}function _n(){return Ge(ro,St)}function Bs(){return St}function $a(e,t){return ga(ro,e,t)}function va(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mb(e){return ku=Wi=1,Pb=vn(ro=e),St=0,[]}function Ib(e){return ro="",e}function Us(e){return Ob($a(St-1,Jf(e===91?e+2:e===40?e+1:e)))}function fP(e){for(;(Ie=_n())&&Ie<33;)jt();return va(e)>2||va(Ie)>3?"":" "}function pP(e,t){for(;--t&&jt()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return $a(e,Bs()+(t<6&&_n()==32&&jt()==32))}function Jf(e){for(;jt();)switch(Ie){case e:return St;case 34:case 39:e!==34&&e!==39&&Jf(Ie);break;case 40:e===41&&Jf(e);break;case 92:jt();break}return St}function hP(e,t){for(;jt()&&e+Ie!==47+10;)if(e+Ie===42+42&&_n()===47)break;return"/*"+$a(t,St-1)+"*"+Cu(e===47?e:jt())}function mP(e){for(;!va(_n());)jt();return $a(e,St)}function gP(e){return Ib(Hs("",null,null,null,[""],e=Mb(e),0,[0],e))}function Hs(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,f=0,h=0,g=0,v=1,S=1,p=1,m=0,x="",w=i,C=o,k=r,_=x;S;)switch(g=m,m=jt()){case 40:if(g!=108&&Ge(_,d-1)==58){Qf(_+=ce(Us(m),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:_+=Us(m);break;case 9:case 10:case 13:case 32:_+=fP(g);break;case 92:_+=pP(Bs()-1,7);continue;case 47:switch(_n()){case 42:case 47:us(vP(hP(jt(),Bs()),t,n),s);break;default:_+="/"}break;case 123*v:l[u++]=vn(_)*p;case 125*v:case 59:case 0:switch(m){case 0:case 125:S=0;case 59+c:p==-1&&(_=ce(_,/\f/g,"")),h>0&&vn(_)-d&&us(h>32?x0(_+";",r,n,d-1):x0(ce(_," ","")+";",r,n,d-2),s);break;case 59:_+=";";default:if(us(k=y0(_,t,n,u,c,i,l,x,w=[],C=[],d),o),m===123)if(c===0)Hs(_,t,k,k,w,o,d,l,C);else switch(f===99&&Ge(_,3)===110?100:f){case 100:case 108:case 109:case 115:Hs(e,k,k,r&&us(y0(e,k,k,0,0,i,l,x,i,w=[],d),C),i,C,d,l,r?w:C);break;default:Hs(_,k,k,k,[""],C,0,l,C)}}u=c=h=0,v=p=1,x=_="",d=a;break;case 58:d=1+vn(_),h=g;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&dP()==125)continue}switch(_+=Cu(m),m*v){case 38:p=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(vn(_)-1)*p,p=1;break;case 64:_n()===45&&(_+=Us(jt())),f=_n(),c=d=vn(x=_+=mP(Bs())),m++;break;case 45:g===45&&vn(_)==2&&(v=0)}}return o}function y0(e,t,n,r,i,o,a,l,s,u,c){for(var d=i-1,f=i===0?o:[""],h=Bh(f),g=0,v=0,S=0;g<r;++g)for(var p=0,m=ga(e,d+1,d=oP(v=a[g])),x=e;p<h;++p)(x=Ob(v>0?f[p]+" "+m:ce(m,/&\f/g,f[p])))&&(s[S++]=x);return Tu(e,t,n,i===0?zh:l,s,u,c)}function vP(e,t,n){return Tu(e,t,n,kb,Cu(cP()),ga(e,2,-2),0)}function x0(e,t,n,r){return Tu(e,t,n,Vh,ga(e,0,r),ga(e,r+1,-1),r)}function Ii(e,t){for(var n="",r=Bh(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function yP(e,t,n,r){switch(e.type){case iP:if(e.children.length)break;case rP:case Vh:return e.return=e.return||e.value;case kb:return"";case Tb:return e.return=e.value+"{"+Ii(e.children,r)+"}";case zh:e.value=e.props.join(",")}return vn(n=Ii(e.children,r))?e.return=e.value+"{"+n+"}":""}function xP(e){var t=Bh(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function bP(e){return function(t){t.root||(t=t.return)&&e(t)}}function wP(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var SP=function(t,n,r){for(var i=0,o=0;i=o,o=_n(),i===38&&o===12&&(n[r]=1),!va(o);)jt();return $a(t,St)},_P=function(t,n){var r=-1,i=44;do switch(va(i)){case 0:i===38&&_n()===12&&(n[r]=1),t[r]+=SP(St-1,n,r);break;case 2:t[r]+=Us(i);break;case 4:if(i===44){t[++r]=_n()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Cu(i)}while(i=jt());return t},EP=function(t,n){return Ib(_P(Mb(t),n))},b0=new WeakMap,CP=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!b0.get(r))&&!i){b0.set(t,!0);for(var o=[],a=EP(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var c=0;c<l.length;c++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[c]):l[c]+" "+a[s]}}},kP=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function jb(e,t){switch(sP(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+Ml+e+Je+e+e;case 6828:case 4268:return ue+e+Je+e+e;case 6165:return ue+e+Je+"flex-"+e+e;case 5187:return ue+e+ce(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+Je+"flex-$1$2")+e;case 5443:return ue+e+Je+"flex-item-"+ce(e,/flex-|-self/,"")+e;case 4675:return ue+e+Je+"flex-line-pack"+ce(e,/align-content|flex-|-self/,"")+e;case 5548:return ue+e+Je+ce(e,"shrink","negative")+e;case 5292:return ue+e+Je+ce(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ce(e,"-grow","")+ue+e+Je+ce(e,"grow","positive")+e;case 4554:return ue+ce(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ce(ce(ce(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ce(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ce(ce(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+Je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4095:case 3583:case 4068:case 2532:return ce(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(vn(e)-1-t>6)switch(Ge(e,t+1)){case 109:if(Ge(e,t+4)!==45)break;case 102:return ce(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+Ml+(Ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Qf(e,"stretch")?jb(ce(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ge(e,t+1)!==115)break;case 6444:switch(Ge(e,vn(e)-3-(~Qf(e,"!important")&&10))){case 107:return ce(e,":",":"+ue)+e;case 101:return ce(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ue+(Ge(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+Je+"$2box$3")+e}break;case 5936:switch(Ge(e,t+11)){case 114:return ue+e+Je+ce(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+Je+ce(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+Je+ce(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ue+e+Je+e+e}return e}var TP=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Vh:t.return=jb(t.value,t.length);break;case Tb:return Ii([wo(t,{value:ce(t.value,"@","@"+ue)})],i);case zh:if(t.length)return uP(t.props,function(o){switch(lP(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ii([wo(t,{props:[ce(o,/:(read-\w+)/,":"+Ml+"$1")]})],i);case"::placeholder":return Ii([wo(t,{props:[ce(o,/:(plac\w+)/,":"+ue+"input-$1")]}),wo(t,{props:[ce(o,/:(plac\w+)/,":"+Ml+"$1")]}),wo(t,{props:[ce(o,/:(plac\w+)/,Je+"input-$1")]})],i)}return""})}},OP=[TP],PP=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var S=v.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||OP,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var S=v.getAttribute("data-emotion").split(" "),p=1;p<S.length;p++)o[S[p]]=!0;l.push(v)});var s,u=[CP,kP];{var c,d=[yP,bP(function(v){c.insert(v)})],f=xP(u.concat(i,d)),h=function(S){return Ii(gP(S),f)};s=function(S,p,m,x){c=m,h(S?S+"{"+p.styles+"}":p.styles),x&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new nP({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return g.sheet.hydrate(l),g},$b={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue=typeof Symbol=="function"&&Symbol.for,Uh=Ue?Symbol.for("react.element"):60103,Hh=Ue?Symbol.for("react.portal"):60106,Ou=Ue?Symbol.for("react.fragment"):60107,Pu=Ue?Symbol.for("react.strict_mode"):60108,Mu=Ue?Symbol.for("react.profiler"):60114,Iu=Ue?Symbol.for("react.provider"):60109,ju=Ue?Symbol.for("react.context"):60110,Wh=Ue?Symbol.for("react.async_mode"):60111,$u=Ue?Symbol.for("react.concurrent_mode"):60111,Du=Ue?Symbol.for("react.forward_ref"):60112,Lu=Ue?Symbol.for("react.suspense"):60113,MP=Ue?Symbol.for("react.suspense_list"):60120,Ru=Ue?Symbol.for("react.memo"):60115,Au=Ue?Symbol.for("react.lazy"):60116,IP=Ue?Symbol.for("react.block"):60121,jP=Ue?Symbol.for("react.fundamental"):60117,$P=Ue?Symbol.for("react.responder"):60118,DP=Ue?Symbol.for("react.scope"):60119;function At(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Uh:switch(e=e.type,e){case Wh:case $u:case Ou:case Mu:case Pu:case Lu:return e;default:switch(e=e&&e.$$typeof,e){case ju:case Du:case Au:case Ru:case Iu:return e;default:return t}}case Hh:return t}}}function Db(e){return At(e)===$u}pe.AsyncMode=Wh;pe.ConcurrentMode=$u;pe.ContextConsumer=ju;pe.ContextProvider=Iu;pe.Element=Uh;pe.ForwardRef=Du;pe.Fragment=Ou;pe.Lazy=Au;pe.Memo=Ru;pe.Portal=Hh;pe.Profiler=Mu;pe.StrictMode=Pu;pe.Suspense=Lu;pe.isAsyncMode=function(e){return Db(e)||At(e)===Wh};pe.isConcurrentMode=Db;pe.isContextConsumer=function(e){return At(e)===ju};pe.isContextProvider=function(e){return At(e)===Iu};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Uh};pe.isForwardRef=function(e){return At(e)===Du};pe.isFragment=function(e){return At(e)===Ou};pe.isLazy=function(e){return At(e)===Au};pe.isMemo=function(e){return At(e)===Ru};pe.isPortal=function(e){return At(e)===Hh};pe.isProfiler=function(e){return At(e)===Mu};pe.isStrictMode=function(e){return At(e)===Pu};pe.isSuspense=function(e){return At(e)===Lu};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ou||e===$u||e===Mu||e===Pu||e===Lu||e===MP||typeof e=="object"&&e!==null&&(e.$$typeof===Au||e.$$typeof===Ru||e.$$typeof===Iu||e.$$typeof===ju||e.$$typeof===Du||e.$$typeof===jP||e.$$typeof===$P||e.$$typeof===DP||e.$$typeof===IP)};pe.typeOf=At;$b.exports=pe;var LP=$b.exports,Lb=LP,RP={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},AP={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rb={};Rb[Lb.ForwardRef]=RP;Rb[Lb.Memo]=AP;var FP=!0;function Ab(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Gh=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||FP===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Fb=function(t,n,r){Gh(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function NP(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var zP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},VP=/[A-Z]|^ms/g,BP=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Nb=function(t){return t.charCodeAt(1)===45},w0=function(t){return t!=null&&typeof t!="boolean"},rd=wP(function(e){return Nb(e)?e:e.replace(VP,"-$&").toLowerCase()}),S0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(BP,function(r,i,o){return yn={name:i,styles:o,next:yn},i})}return zP[t]!==1&&!Nb(t)&&typeof n=="number"&&n!==0?n+"px":n};function ya(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return yn={name:n.name,styles:n.styles,next:yn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)yn={name:r.name,styles:r.styles,next:yn},r=r.next;var i=n.styles+";";return i}return UP(e,t,n)}case"function":{if(e!==void 0){var o=yn,a=n(e);return yn=o,ya(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function UP(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ya(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":w0(a)&&(r+=rd(o)+":"+S0(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)w0(a[l])&&(r+=rd(o)+":"+S0(o,a[l])+";");else{var s=ya(e,t,a);switch(o){case"animation":case"animationName":{r+=rd(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var _0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,yn,Yh=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";yn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=ya(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=ya(r,n,t[l]),i&&(o+=a[l]);_0.lastIndex=0;for(var s="",u;(u=_0.exec(o))!==null;)s+="-"+u[1];var c=NP(o)+s;return{name:c,styles:o,next:yn}},HP=function(t){return t()},WP=Gd["useInsertionEffect"]?Gd["useInsertionEffect"]:!1,zb=WP||HP,qh={}.hasOwnProperty,Vb=b.createContext(typeof HTMLElement<"u"?PP({key:"css"}):null);Vb.Provider;var Bb=function(t){return b.forwardRef(function(n,r){var i=b.useContext(Vb);return t(n,i,r)})},Ub=b.createContext({}),ep="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",GP=function(t,n){var r={};for(var i in n)qh.call(n,i)&&(r[i]=n[i]);return r[ep]=t,r},YP=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Gh(n,r,i),zb(function(){return Fb(n,r,i)}),null},qP=Bb(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[ep],o=[r],a="";typeof e.className=="string"?a=Ab(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=Yh(o,void 0,b.useContext(Ub));a+=t.key+"-"+l.name;var s={};for(var u in e)qh.call(e,u)&&u!=="css"&&u!==ep&&(s[u]=e[u]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(YP,{cache:t,serialized:l,isStringTag:typeof i=="string"}),b.createElement(i,s))}),XP=qP,Y=function(t,n){var r=arguments;if(n==null||!qh.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=XP,o[1]=GP(t,n);for(var a=2;a<i;a++)o[a]=r[a];return b.createElement.apply(null,o)};function Xh(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Yh(t)}var KP=function(){var t=Xh.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},ZP=kk,QP=function(t){return t!=="theme"},E0=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?ZP:QP},C0=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},JP=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Gh(n,r,i),zb(function(){return Fb(n,r,i)}),null},e3=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=C0(t,n,r),s=l||E0(i),u=!s("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var f=c.length,h=1;h<f;h++)d.push(c[h],c[0][h])}var g=Bb(function(v,S,p){var m=u&&v.as||i,x="",w=[],C=v;if(v.theme==null){C={};for(var k in v)C[k]=v[k];C.theme=b.useContext(Ub)}typeof v.className=="string"?x=Ab(S.registered,w,v.className):v.className!=null&&(x=v.className+" ");var _=Yh(d.concat(w),S.registered,C);x+=S.key+"-"+_.name,a!==void 0&&(x+=" "+a);var E=u&&l===void 0?E0(m):s,M={};for(var I in v)u&&I==="as"||E(I)&&(M[I]=v[I]);return M.className=x,M.ref=p,b.createElement(b.Fragment,null,b.createElement(JP,{cache:S,serialized:_,isStringTag:typeof m=="string"}),b.createElement(m,M))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=d,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(v,S){return e(v,X({},n,S,{shouldForwardProp:C0(g,S,!0)})).apply(void 0,d)},g}},t3=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Fe=e3.bind();t3.forEach(function(e){Fe[e]=Fe(e)});const n3=Fe.section`
  background-color:  var(--second-background);
 
 
`,r3=Fe.div`
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
  
`,i3=Fe.h1`

    font-size: 32px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;

 
`,o3=Fe.div`
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
`;const a3=Fe(Oe)`
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
`,s3=Fe.div`
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
`,l3=Fe.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
 

  display: block;
   @media screen and (max-width: 768px) {
  height: 100px;
  }

`,u3=Fe.p`
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

`;var c3={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};d3(c3);function d3(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var f3="#4fa94d",p3={"aria-busy":!0,role:"progressbar"},h3=T.div`
  display: ${e=>e.$visible?"flex":"none"};
`,m3="http://www.w3.org/2000/svg",Kh=({height:e=100,width:t=100,radius:n=5,color:r=f3,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>y.jsx(h3,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...p3,children:y.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:m3,"data-testid":"ball-triangle-svg",children:[y.jsx("title",{children:"Ball Triangle"}),y.jsx("desc",{children:"Animated representation of three balls"}),y.jsx("g",{fill:"none",fillRule:"evenodd",children:y.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[y.jsxs("circle",{cx:"5",cy:"50",r:n,children:[y.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),y.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),y.jsxs("circle",{cx:"27",cy:"5",r:n,children:[y.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),y.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),y.jsxs("circle",{cx:"49",cy:"50",r:n,children:[y.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),y.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),Zt=242.776657104492,g3=1.6,v3=Fh`
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
  animation: ${v3} ${g3}s linear infinite;
`;var y3=Fh`
to {
   transform: rotate(360deg);
 }
`;T.svg`
  animation: ${y3} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var x3=Fh`
to {
   stroke-dashoffset: 136;
 }
`;T.polygon`
  stroke-dasharray: 17;
  animation: ${x3} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;T.svg`
  transform-origin: 50% 65%;
`;const b3=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image")).json();console.log(a),t(a.data.map(l=>({id:l.id_title,title:l.title,image:l.image.url})))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?y.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:y.jsx(Kh,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):y.jsx(n3,{children:y.jsxs(r3,{children:[y.jsx(i3,{children:"Каталог"}),y.jsx(o3,{children:e.map(i=>y.jsxs(a3,{to:`/catalog/${i.id}`,children:[y.jsx(s3,{children:y.jsx(l3,{src:i.image,alt:i.title})}),y.jsx(u3,{children:i.title})]},i.id))})]})})},w3=Fe.div`

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

  
`,C3=()=>y.jsxs(w3,{children:[y.jsxs(S3,{children:[" ",y.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),y.jsx(_3,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),y.jsx(E3,{children:" На головну"})]});const k3=T.div`
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
`;var Hb={},Wb={},Fu={},Gb={exports:{}},Da={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var k0=Object.getOwnPropertySymbols,O3=Object.prototype.hasOwnProperty,P3=Object.prototype.propertyIsEnumerable;function M3(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function I3(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var j3=I3()?Object.assign:function(e,t){for(var n,r=M3(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)O3.call(n,a)&&(r[a]=n[a]);if(k0){i=k0(n);for(var l=0;l<i.length;l++)P3.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},Yb={exports:{}},se={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh=j3,io=60103,qb=60106;se.Fragment=60107;se.StrictMode=60108;se.Profiler=60114;var Xb=60109,Kb=60110,Zb=60112;se.Suspense=60113;var Qb=60115,Jb=60116;if(typeof Symbol=="function"&&Symbol.for){var Kt=Symbol.for;io=Kt("react.element"),qb=Kt("react.portal"),se.Fragment=Kt("react.fragment"),se.StrictMode=Kt("react.strict_mode"),se.Profiler=Kt("react.profiler"),Xb=Kt("react.provider"),Kb=Kt("react.context"),Zb=Kt("react.forward_ref"),se.Suspense=Kt("react.suspense"),Qb=Kt("react.memo"),Jb=Kt("react.lazy")}var T0=typeof Symbol=="function"&&Symbol.iterator;function $3(e){return e===null||typeof e!="object"?null:(e=T0&&e[T0]||e["@@iterator"],typeof e=="function"?e:null)}function La(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ew={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tw={};function oo(e,t,n){this.props=e,this.context=t,this.refs=tw,this.updater=n||ew}oo.prototype.isReactComponent={};oo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(La(85));this.updater.enqueueSetState(this,e,t,"setState")};oo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nw(){}nw.prototype=oo.prototype;function Qh(e,t,n){this.props=e,this.context=t,this.refs=tw,this.updater=n||ew}var Jh=Qh.prototype=new nw;Jh.constructor=Qh;Zh(Jh,oo.prototype);Jh.isPureReactComponent=!0;var em={current:null},rw=Object.prototype.hasOwnProperty,iw={key:!0,ref:!0,__self:!0,__source:!0};function ow(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)rw.call(t,r)&&!iw.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:io,type:e,key:o,ref:a,props:i,_owner:em.current}}function D3(e,t){return{$$typeof:io,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tm(e){return typeof e=="object"&&e!==null&&e.$$typeof===io}function L3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var O0=/\/+/g;function id(e,t){return typeof e=="object"&&e!==null&&e.key!=null?L3(""+e.key):t.toString(36)}function Ws(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case io:case qb:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+id(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(O0,"$&/")+"/"),Ws(i,t,n,"",function(u){return u})):i!=null&&(tm(i)&&(i=D3(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(O0,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+id(o,l);a+=Ws(o,t,n,s,i)}else if(s=$3(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+id(o,l++),a+=Ws(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(La(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function cs(e,t,n){if(e==null)return e;var r=[],i=0;return Ws(e,r,"","",function(o){return t.call(n,o,i++)}),r}function R3(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var aw={current:null};function Kn(){var e=aw.current;if(e===null)throw Error(La(321));return e}var A3={ReactCurrentDispatcher:aw,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:em,IsSomeRendererActing:{current:!1},assign:Zh};se.Children={map:cs,forEach:function(e,t,n){cs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cs(e,function(){t++}),t},toArray:function(e){return cs(e,function(t){return t})||[]},only:function(e){if(!tm(e))throw Error(La(143));return e}};se.Component=oo;se.PureComponent=Qh;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A3;se.cloneElement=function(e,t,n){if(e==null)throw Error(La(267,e));var r=Zh({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=em.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)rw.call(t,s)&&!iw.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:io,type:e.type,key:i,ref:o,props:r,_owner:a}};se.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Kb,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Xb,_context:e},e.Consumer=e};se.createElement=ow;se.createFactory=function(e){var t=ow.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:Zb,render:e}};se.isValidElement=tm;se.lazy=function(e){return{$$typeof:Jb,_payload:{_status:-1,_result:e},_init:R3}};se.memo=function(e,t){return{$$typeof:Qb,type:e,compare:t===void 0?null:t}};se.useCallback=function(e,t){return Kn().useCallback(e,t)};se.useContext=function(e,t){return Kn().useContext(e,t)};se.useDebugValue=function(){};se.useEffect=function(e,t){return Kn().useEffect(e,t)};se.useImperativeHandle=function(e,t,n){return Kn().useImperativeHandle(e,t,n)};se.useLayoutEffect=function(e,t){return Kn().useLayoutEffect(e,t)};se.useMemo=function(e,t){return Kn().useMemo(e,t)};se.useReducer=function(e,t,n){return Kn().useReducer(e,t,n)};se.useRef=function(e){return Kn().useRef(e)};se.useState=function(e){return Kn().useState(e)};se.version="17.0.2";Yb.exports=se;var F3=Yb.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N3=F3,sw=60103;Da.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var P0=Symbol.for;sw=P0("react.element"),Da.Fragment=P0("react.fragment")}var z3=N3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V3=Object.prototype.hasOwnProperty,B3={key:!0,ref:!0,__self:!0,__source:!0};function lw(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)V3.call(t,r)&&!B3.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:sw,type:e,key:o,ref:a,props:i,_owner:z3.current}}Da.jsx=lw;Da.jsxs=lw;Gb.exports=Da;var Et=Gb.exports,uw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(uw);var Ct=uw.exports;const U3={"lds-circle":"_lds-circle_qlxhy_1"},H3=Object.freeze(Object.defineProperty({__proto__:null,default:U3},Symbol.toStringTag,{value:"Module"})),W3=_t(H3);var cw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Fu,"__esModule",{value:!0});Fu.Circle=void 0;const G3=Et,Y3=cw(Ct),q3=cw(W3);function X3({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,G3.jsx)("div",{className:(0,Y3.default)(q3.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}Fu.Circle=X3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=Fu;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(Wb);var dw={},Nu={};const K3={"lds-default":"_lds-default_wt1n8_1"},Z3=Object.freeze(Object.defineProperty({__proto__:null,default:K3},Symbol.toStringTag,{value:"Module"})),Q3=_t(Z3);var fw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Nu,"__esModule",{value:!0});Nu.Default=void 0;const M0=Et,J3=fw(Ct),e4=fw(Q3);function t4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,M0.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,M0.jsx)("div",{className:(0,J3.default)(e4.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}Nu.Default=t4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=Nu;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(dw);var pw={},zu={};const n4={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},r4=Object.freeze(Object.defineProperty({__proto__:null,default:n4},Symbol.toStringTag,{value:"Module"})),i4=_t(r4);var hw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(zu,"__esModule",{value:!0});zu.DualRing=void 0;const I0=Et,j0=hw(Ct),$0=hw(i4);function o4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,I0.jsx)("div",{className:(0,j0.default)($0.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,I0.jsx)("div",{className:(0,j0.default)($0.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}zu.DualRing=o4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=zu;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(pw);var mw={},Vu={};const a4={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},s4=Object.freeze(Object.defineProperty({__proto__:null,default:a4},Symbol.toStringTag,{value:"Module"})),l4=_t(s4);var gw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Vu,"__esModule",{value:!0});Vu.Ellipsis=void 0;const D0=Et,u4=gw(Ct),c4=gw(l4);function d4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,D0.jsx)("div",{style:{background:`${e}`}},l));return(0,D0.jsx)("div",{className:(0,u4.default)(c4.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}Vu.Ellipsis=d4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=Vu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(mw);var vw={},Bu={};const f4={"lds-facebook":"_lds-facebook_1ts9g_1"},p4=Object.freeze(Object.defineProperty({__proto__:null,default:f4},Symbol.toStringTag,{value:"Module"})),h4=_t(p4);var yw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Bu,"__esModule",{value:!0});Bu.Facebook=void 0;const L0=Et,m4=yw(Ct),g4=yw(h4);function v4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,L0.jsx)("div",{style:{background:`${e}`}},l));return(0,L0.jsx)("div",{className:(0,m4.default)(g4.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}Bu.Facebook=v4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=Bu;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(vw);var xw={},Uu={};const y4={"lds-grid":"_lds-grid_1ftub_1"},x4=Object.freeze(Object.defineProperty({__proto__:null,default:y4},Symbol.toStringTag,{value:"Module"})),b4=_t(x4);var bw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Uu,"__esModule",{value:!0});Uu.Grid=void 0;const R0=Et,w4=bw(Ct),S4=bw(b4);function _4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,R0.jsx)("div",{style:{background:`${e}`}},l));return(0,R0.jsx)("div",{className:(0,w4.default)(S4.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}Uu.Grid=_4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=Uu;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(xw);var ww={},Hu={};const E4={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},C4=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"})),k4=_t(C4);var Sw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Hu,"__esModule",{value:!0});Hu.Heart=void 0;const ds=Et,od=Sw(Ct),ad=Sw(k4);function T4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,ds.jsx)("div",{className:(0,od.default)(ad.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,ds.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,ds.jsx)("div",{className:(0,od.default)(ad.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,ds.jsx)("div",{className:(0,od.default)(ad.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}Hu.Heart=T4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=Hu;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(ww);var _w={},Wu={};const O4={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},P4=Object.freeze(Object.defineProperty({__proto__:null,default:O4},Symbol.toStringTag,{value:"Module"})),M4=_t(P4);var Ew=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Wu,"__esModule",{value:!0});Wu.Hourglass=void 0;const A0=Et,F0=Ew(Ct),N0=Ew(M4);function I4({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,A0.jsx)("div",{className:(0,F0.default)(N0.default["lds-hourglass"],n),style:{...r},children:(0,A0.jsx)("div",{className:(0,F0.default)(N0.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}Wu.Hourglass=I4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=Wu;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(_w);var Cw={},Gu={};const kw="_center_1rufi_10",Tw="_spin_1rufi_1",j4={"lds-orbitals":"_lds-orbitals_1rufi_1",center:kw,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:Tw},$4=Object.freeze(Object.defineProperty({__proto__:null,center:kw,default:j4,spin:Tw},Symbol.toStringTag,{value:"Module"})),D4=_t($4);var Ow=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Gu,"__esModule",{value:!0});Gu.Orbitals=void 0;const Qe=Et,ot=Ow(Ct),xe=Ow(D4);function L4({color:e="#7f58af",className:t,style:n}){return(0,Qe.jsxs)("div",{className:(0,ot.default)(xe.default["lds-orbitals"],t),style:{...n},children:[(0,Qe.jsx)("div",{className:xe.default.center,style:{background:e}}),(0,Qe.jsxs)("div",{className:(0,ot.default)(xe.default["inner-spin"]),children:[(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-moon-a"]),style:{background:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-moon-b"]),style:{background:e}})]}),(0,Qe.jsxs)("div",{className:(0,ot.default)(xe.default["outer-spin"]),children:[(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-moon-a"]),style:{background:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-moon-b"]),style:{background:e}})]})]})}Gu.Orbitals=L4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=Gu;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(Cw);var Pw={},Yu={};const R4={"lds-ring":"_lds-ring_xgxdp_1"},A4=Object.freeze(Object.defineProperty({__proto__:null,default:R4},Symbol.toStringTag,{value:"Module"})),F4=_t(A4);var Mw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Yu,"__esModule",{value:!0});Yu.Ring=void 0;const z0=Et,N4=Mw(Ct),z4=Mw(F4);function V4({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,z0.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,z0.jsx)("div",{className:(0,N4.default)(z4.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}Yu.Ring=V4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=Yu;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(Pw);var Iw={},qu={};const B4={"lds-ripple":"_lds-ripple_1lgcf_1"},U4=Object.freeze(Object.defineProperty({__proto__:null,default:B4},Symbol.toStringTag,{value:"Module"})),H4=_t(U4);var jw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(qu,"__esModule",{value:!0});qu.Ripple=void 0;const V0=Et,W4=jw(Ct),G4=jw(H4);function Y4({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,V0.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,V0.jsx)("div",{className:(0,W4.default)(G4.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}qu.Ripple=Y4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=qu;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(Iw);var $w={},Xu={};const q4={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},X4=Object.freeze(Object.defineProperty({__proto__:null,default:q4},Symbol.toStringTag,{value:"Module"})),K4=_t(X4);var Dw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xu,"__esModule",{value:!0});Xu.Roller=void 0;const sd=Et,B0=Dw(Ct),U0=Dw(K4);function Z4({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,sd.jsx)("div",{children:(0,sd.jsx)("div",{className:(0,B0.default)(U0.default["div-after"]),style:{background:e}})},o));return(0,sd.jsx)("div",{className:(0,B0.default)(U0.default["lds-roller"],t),style:{...n},children:r})}Xu.Roller=Z4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=Xu;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})($w);var Lw={},Ku={};const Q4={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},J4=Object.freeze(Object.defineProperty({__proto__:null,default:Q4},Symbol.toStringTag,{value:"Module"})),eM=_t(J4);var Rw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ku,"__esModule",{value:!0});Ku.Spinner=void 0;const ld=Et,H0=Rw(Ct),W0=Rw(eM);function tM({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,ld.jsx)("div",{children:(0,ld.jsx)("div",{className:(0,H0.default)(W0.default["div-after"]),style:{background:e}})},o));return(0,ld.jsx)("div",{className:(0,H0.default)(W0.default["lds-spinner"],t),style:{...n},children:r})}Ku.Spinner=tM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=Ku;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(Lw);var Aw={},Zu={};const Fw="_left_v9vlb_30",Nw="_right_v9vlb_33",zw="_anim_v9vlb_37",nM={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:Fw,right:Nw,anim:zw,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},rM=Object.freeze(Object.defineProperty({__proto__:null,anim:zw,default:nM,left:Fw,right:Nw},Symbol.toStringTag,{value:"Module"})),iM=_t(rM);var Vw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Zu,"__esModule",{value:!0});Zu.Ouroboro=void 0;const So=Et,_o=Vw(Ct),Eo=Vw(iM);function oM({color:e="#7f58af",style:t,className:n}){return(0,So.jsxs)("div",{className:(0,_o.default)(Eo.default["lds-ouroboro"],n),style:{...t},children:[(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.left),children:(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.anim),style:{background:e}})}),(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.right),children:(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.anim),style:{background:e}})})]})}Zu.Ouroboro=oM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=Zu;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(Aw);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=Wb;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=dw;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=pw;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=mw;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=vw;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=xw;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=ww;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=_w;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const u=Cw;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return u.Orbitals}});const c=Pw;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return c.Ring}});const d=Iw;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return d.Ripple}});const f=$w;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return f.Roller}});const h=Lw;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return h.Spinner}});const g=Aw;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return g.Ouroboro}})})(Hb);const aM=()=>y.jsx(T3,{children:y.jsx(Hb.Default,{color:"#6d433da8"})});const sM="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",lM=TT`
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
`,mM=()=>{const[e,t]=b.useState([]);return b.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(console.log("API response:",i),!i.data){console.error("No data field:",i);return}t(i.data.map(o=>({id:o.id,title:o.title,image:o.image.url})))}catch(r){console.error("Fetch error:",r)}}n()},[]),console.log(e),y.jsxs(y.Fragment,{children:[y.jsx(dM,{children:"Каталог"}),y.jsxs(uM,{children:[e.slice(0,6).map(n=>y.jsx(cM,{to:`catalog/${n.id}`,bg:n.image,isBig:n.big,children:y.jsx(fM,{children:n.title})},n.id)),y.jsxs(pM,{href:"catalog",children:[y.jsx("p",{children:"Весь каталог"}),y.jsx(hM,{children:y.jsx(wb,{size:24})})]})]})]})};function G0(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function nm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:G0(t[r])&&G0(e[r])&&Object.keys(t[r]).length>0&&nm(e[r],t[r])})}const Bw={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function En(){const e=typeof document<"u"?document:{};return nm(e,Bw),e}const gM={document:Bw,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function ft(){const e=typeof window<"u"?window:{};return nm(e,gM),e}function vM(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function yM(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Uw(e,t=0){return setTimeout(e,t)}function Il(){return Date.now()}function xM(e){const t=ft();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function bM(e,t="x"){const n=ft();let r,i,o;const a=xM(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function fs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function wM(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ot(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!wM(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(fs(t[l])&&fs(r[l])?r[l].__swiper__?t[l]=r[l]:Ot(t[l],r[l]):!fs(t[l])&&fs(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Ot(t[l],r[l])):t[l]=r[l])}}}return t}function oi(e,t,n){e.style.setProperty(t,n)}function Hw({swiper:e,targetPosition:t,side:n}){const r=ft(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",u=(d,f)=>s==="next"&&d>=f||s==="prev"&&d<=f,c=()=>{a=new Date().getTime(),o===null&&(o=a);const d=Math.max(Math.min((a-o)/l,1),0),f=.5-Math.cos(d*Math.PI)/2;let h=i+f*(t-i);if(u(h,t)&&(h=t),e.wrapperEl.scrollTo({[n]:h}),u(h,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:h})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(c)};c()}function bn(e,t=""){const n=ft(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function SM(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function _M(e,t){const n=ft();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=SM(e,t))),r}function jl(e){try{console.warn(e);return}catch{}}function $l(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:vM(t)),n}function EM(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function CM(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function cr(e,t){return ft().getComputedStyle(e,null).getPropertyValue(t)}function Dl(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Ww(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function tp(e,t,n){const r=ft();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function ze(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function xa(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function Gw(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=bn(e.el,`.${r[i]}`)[0];o||(o=$l("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const Y0='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function kM({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:Y0};function i(h){let g;return h&&typeof h=="string"&&e.isElement&&(g=e.el.querySelector(h)||e.hostEl.querySelector(h),g)?g:(h&&(typeof h=="string"&&(g=[...document.querySelectorAll(h)]),e.params.uniqueNavElements&&typeof h=="string"&&g&&g.length>1&&e.el.querySelectorAll(h).length===1?g=e.el.querySelector(h):g&&g.length===1&&(g=g[0])),h&&!g?h:g)}function o(h,g){const v=e.params.navigation;h=ze(h),h.forEach(S=>{S&&(S.classList[g?"add":"remove"](...v.disabledClass.split(" ")),S.tagName==="BUTTON"&&(S.disabled=g),e.params.watchOverflow&&e.enabled&&S.classList[e.isLocked?"add":"remove"](v.lockClass))})}function a(){const{nextEl:h,prevEl:g}=e.navigation;if(e.params.loop){o(g,!1),o(h,!1);return}o(g,e.isBeginning&&!e.params.rewind),o(h,e.isEnd&&!e.params.rewind)}function l(h){h.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(h){h.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const h=e.params.navigation;if(e.params.navigation=Gw(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(h.nextEl||h.prevEl))return;let g=i(h.nextEl),v=i(h.prevEl);Object.assign(e.navigation,{nextEl:g,prevEl:v}),g=ze(g),v=ze(v);const S=(p,m)=>{if(p){if(h.addIcons&&p.matches(".swiper-button-next,.swiper-button-prev")&&!p.querySelector("svg")){const x=document.createElement("div");xa(x,Y0),p.appendChild(x.querySelector("svg")),x.remove()}p.addEventListener("click",m==="next"?s:l)}!e.enabled&&p&&p.classList.add(...h.lockClass.split(" "))};g.forEach(p=>S(p,"next")),v.forEach(p=>S(p,"prev"))}function c(){let{nextEl:h,prevEl:g}=e.navigation;h=ze(h),g=ze(g);const v=(S,p)=>{S.removeEventListener("click",p==="next"?s:l),S.classList.remove(...e.params.navigation.disabledClass.split(" "))};h.forEach(S=>v(S,"next")),g.forEach(S=>v(S,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?f():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{c()}),n("enable disable",()=>{let{nextEl:h,prevEl:g}=e.navigation;if(h=ze(h),g=ze(g),e.enabled){a();return}[...h,...g].filter(v=>!!v).forEach(v=>v.classList.add(e.params.navigation.lockClass))}),n("click",(h,g)=>{let{nextEl:v,prevEl:S}=e.navigation;v=ze(v),S=ze(S);const p=g.target;let m=S.includes(p)||v.includes(p);if(e.isElement&&!m){const x=g.path||g.composedPath&&g.composedPath();x&&(m=x.find(w=>v.includes(w)||S.includes(w)))}if(e.params.navigation.hideOnClick&&!m){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===p||e.pagination.el.contains(p)))return;let x;v.length?x=v[0].classList.contains(e.params.navigation.hiddenClass):S.length&&(x=S[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...v,...S].filter(w=>!!w).forEach(w=>w.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},f=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),c()};Object.assign(e.navigation,{enable:d,disable:f,update:a,init:u,destroy:c})}function Co(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function TM({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:p=>p,formatFractionTotal:p=>p,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(p,m){const{bulletActiveClass:x}=e.params.pagination;p&&(p=p[`${m==="prev"?"previous":"next"}ElementSibling`],p&&(p.classList.add(`${x}-${m}`),p=p[`${m==="prev"?"previous":"next"}ElementSibling`],p&&p.classList.add(`${x}-${m}-${m}`)))}function u(p,m,x){if(p=p%x,m=m%x,m===p+1)return"next";if(m===p-1)return"previous"}function c(p){const m=p.target.closest(Co(e.params.pagination.bulletClass));if(!m)return;p.preventDefault();const x=Dl(m)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const w=u(e.realIndex,x,e.slides.length);w==="next"?e.slideNext():w==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function d(){const p=e.rtl,m=e.params.pagination;if(l())return;let x=e.pagination.el;x=ze(x);let w,C;const k=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,_=e.params.loop?Math.ceil(k/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(C=e.previousRealIndex||0,w=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(w=e.snapIndex,C=e.previousSnapIndex):(C=e.previousIndex||0,w=e.activeIndex||0),m.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const E=e.pagination.bullets;let M,I,$;if(m.dynamicBullets&&(o=tp(E[0],e.isHorizontal()?"width":"height",!0),x.forEach(P=>{P.style[e.isHorizontal()?"width":"height"]=`${o*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&C!==void 0&&(a+=w-(C||0),a>m.dynamicMainBullets-1?a=m.dynamicMainBullets-1:a<0&&(a=0)),M=Math.max(w-a,0),I=M+(Math.min(E.length,m.dynamicMainBullets)-1),$=(I+M)/2),E.forEach(P=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(R=>`${m.bulletActiveClass}${R}`)].map(R=>typeof R=="string"&&R.includes(" ")?R.split(" "):R).flat();P.classList.remove(...j)}),x.length>1)E.forEach(P=>{const j=Dl(P);j===w?P.classList.add(...m.bulletActiveClass.split(" ")):e.isElement&&P.setAttribute("part","bullet"),m.dynamicBullets&&(j>=M&&j<=I&&P.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),j===M&&s(P,"prev"),j===I&&s(P,"next"))});else{const P=E[w];if(P&&P.classList.add(...m.bulletActiveClass.split(" ")),e.isElement&&E.forEach((j,R)=>{j.setAttribute("part",R===w?"bullet-active":"bullet")}),m.dynamicBullets){const j=E[M],R=E[I];for(let L=M;L<=I;L+=1)E[L]&&E[L].classList.add(...`${m.bulletActiveClass}-main`.split(" "));s(j,"prev"),s(R,"next")}}if(m.dynamicBullets){const P=Math.min(E.length,m.dynamicMainBullets+4),j=(o*P-o)/2-$*o,R=p?"right":"left";E.forEach(L=>{L.style[e.isHorizontal()?R:"top"]=`${j}px`})}}x.forEach((E,M)=>{if(m.type==="fraction"&&(E.querySelectorAll(Co(m.currentClass)).forEach(I=>{I.textContent=m.formatFractionCurrent(w+1)}),E.querySelectorAll(Co(m.totalClass)).forEach(I=>{I.textContent=m.formatFractionTotal(_)})),m.type==="progressbar"){let I;m.progressbarOpposite?I=e.isHorizontal()?"vertical":"horizontal":I=e.isHorizontal()?"horizontal":"vertical";const $=(w+1)/_;let P=1,j=1;I==="horizontal"?P=$:j=$,E.querySelectorAll(Co(m.progressbarFillClass)).forEach(R=>{R.style.transform=`translate3d(0,0,0) scaleX(${P}) scaleY(${j})`,R.style.transitionDuration=`${e.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(xa(E,m.renderCustom(e,w+1,_)),M===0&&r("paginationRender",E)):(M===0&&r("paginationRender",E),r("paginationUpdate",E)),e.params.watchOverflow&&e.enabled&&E.classList[e.isLocked?"add":"remove"](m.lockClass)})}function f(){const p=e.params.pagination;if(l())return;const m=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=ze(x);let w="";if(p.type==="bullets"){let C=e.params.loop?Math.ceil(m/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&C>m&&(C=m);for(let k=0;k<C;k+=1)p.renderBullet?w+=p.renderBullet.call(e,k,p.bulletClass):w+=`<${p.bulletElement} ${e.isElement?'part="bullet"':""} class="${p.bulletClass}"></${p.bulletElement}>`}p.type==="fraction"&&(p.renderFraction?w=p.renderFraction.call(e,p.currentClass,p.totalClass):w=`<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),p.type==="progressbar"&&(p.renderProgressbar?w=p.renderProgressbar.call(e,p.progressbarFillClass):w=`<span class="${p.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(C=>{p.type!=="custom"&&xa(C,w||""),p.type==="bullets"&&e.pagination.bullets.push(...C.querySelectorAll(Co(p.bulletClass)))}),p.type!=="custom"&&r("paginationRender",x[0])}function h(){e.params.pagination=Gw(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const p=e.params.pagination;if(!p.el)return;let m;typeof p.el=="string"&&e.isElement&&(m=e.el.querySelector(p.el)),!m&&typeof p.el=="string"&&(m=[...document.querySelectorAll(p.el)]),m||(m=p.el),!(!m||m.length===0)&&(e.params.uniqueNavElements&&typeof p.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...e.el.querySelectorAll(p.el)],m.length>1&&(m=m.find(x=>Ww(x,".swiper")[0]===e.el))),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(e.pagination,{el:m}),m=ze(m),m.forEach(x=>{p.type==="bullets"&&p.clickable&&x.classList.add(...(p.clickableClass||"").split(" ")),x.classList.add(p.modifierClass+p.type),x.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.type==="bullets"&&p.dynamicBullets&&(x.classList.add(`${p.modifierClass}${p.type}-dynamic`),a=0,p.dynamicMainBullets<1&&(p.dynamicMainBullets=1)),p.type==="progressbar"&&p.progressbarOpposite&&x.classList.add(p.progressbarOppositeClass),p.clickable&&x.addEventListener("click",c),e.enabled||x.classList.add(p.lockClass)}))}function g(){const p=e.params.pagination;if(l())return;let m=e.pagination.el;m&&(m=ze(m),m.forEach(x=>{x.classList.remove(p.hiddenClass),x.classList.remove(p.modifierClass+p.type),x.classList.remove(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.clickable&&(x.classList.remove(...(p.clickableClass||"").split(" ")),x.removeEventListener("click",c))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...p.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const p=e.params.pagination;let{el:m}=e.pagination;m=ze(m),m.forEach(x=>{x.classList.remove(p.horizontalClass,p.verticalClass),x.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?S():(h(),f(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{f(),d()}),n("destroy",()=>{g()}),n("enable disable",()=>{let{el:p}=e.pagination;p&&(p=ze(p),p.forEach(m=>m.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(p,m)=>{const x=m.target,w=ze(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&w&&w.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const C=w[0].classList.contains(e.params.pagination.hiddenClass);r(C===!0?"paginationShow":"paginationHide"),w.forEach(k=>k.classList.toggle(e.params.pagination.hiddenClass))}});const v=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=ze(p),p.forEach(m=>m.classList.remove(e.params.pagination.paginationDisabledClass))),h(),f(),d()},S=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=ze(p),p.forEach(m=>m.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:v,disable:S,render:f,update:d,init:h,destroy:g})}function OM({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,u,c=new Date().getTime(),d,f,h,g,v,S;function p(A){!e||e.destroyed||!e.wrapperEl||A.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",p),!(S||A.detail&&A.detail.bySwiperTouchMove)&&M())}const m=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(s=u,d=!1);const A=e.autoplay.paused?u:c+s-new Date().getTime();e.autoplay.timeLeft=A,r("autoplayTimeLeft",A,A/l),a=requestAnimationFrame(()=>{m()})},x=()=>{let A;return e.virtual&&e.params.virtual.enabled?A=e.slides.find(D=>D.classList.contains("swiper-slide-active")):A=e.slides[e.activeIndex],A?parseInt(A.getAttribute("data-swiper-autoplay"),10):void 0},w=()=>{let A=e.params.autoplay.delay;const O=x();return!Number.isNaN(O)&&O>0&&(A=O),A},C=A=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),m();let O=A;typeof O>"u"&&(O=w(),l=O,s=O),u=O;const D=e.params.speed,N=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(D,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,D,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(D,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,D,!0,!0),r("autoplay")),e.params.cssMode&&(c=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return O>0?(clearTimeout(o),o=setTimeout(()=>{N()},O)):requestAnimationFrame(()=>{N()}),O},k=()=>{c=new Date().getTime(),e.autoplay.running=!0,C(),r("autoplayStart")},_=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},E=(A,O)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),A||(v=!0);const D=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",p):M()};if(e.autoplay.paused=!0,O){D();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-c),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),D())},M=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(c=new Date().getTime(),v?(v=!1,C(u)):C(),e.autoplay.paused=!1,r("autoplayResume"))},I=()=>{if(e.destroyed||!e.autoplay.running)return;const A=En();A.visibilityState==="hidden"&&(v=!0,E(!0)),A.visibilityState==="visible"&&M()},$=A=>{A.pointerType==="mouse"&&(v=!0,S=!0,!(e.animating||e.autoplay.paused)&&E(!0))},P=A=>{A.pointerType==="mouse"&&(S=!1,e.autoplay.paused&&M())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",$),e.el.addEventListener("pointerleave",P))},R=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",$),e.el.removeEventListener("pointerleave",P))},L=()=>{En().addEventListener("visibilitychange",I)},F=()=>{En().removeEventListener("visibilitychange",I)};n("init",()=>{e.params.autoplay.enabled&&(j(),L(),k())}),n("destroy",()=>{R(),F(),e.autoplay.running&&_()}),n("_freeModeStaticRelease",()=>{(h||v)&&M()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?_():E(!0,!0)}),n("beforeTransitionStart",(A,O,D)=>{e.destroyed||!e.autoplay.running||(D||!e.params.autoplay.disableOnInteraction?E(!0,!0):_())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){_();return}f=!0,h=!1,v=!1,g=setTimeout(()=>{v=!0,h=!0,E(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!f)){if(clearTimeout(g),clearTimeout(o),e.params.autoplay.disableOnInteraction){h=!1,f=!1;return}h&&e.params.cssMode&&M(),h=!1,f=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(u=w(),l=w())}),Object.assign(e.autoplay,{start:k,stop:_,pause:E,resume:M})}let ud;function PM(){const e=ft(),t=En();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Yw(){return ud||(ud=PM()),ud}let cd;function MM({userAgent:e}={}){const t=Yw(),n=ft(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const c=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=r==="Win32";let h=r==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&h&&t.touch&&g.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),h=!1),s&&!f&&(o.os="android",o.android=!0),(u||d||c)&&(o.os="ios",o.ios=!0),o}function qw(e={}){return cd||(cd=MM(e)),cd}let dd;function IM(){const e=ft(),t=qw();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,u]=l.split("Version/")[1].split(" ")[0].split(".").map(c=>Number(c));n=s<16||s===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function Xw(){return dd||(dd=IM()),dd}function jM({swiper:e,on:t,emit:n}){const r=ft();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(c=>{o=r.requestAnimationFrame(()=>{const{width:d,height:f}=e;let h=d,g=f;c.forEach(({contentBoxSize:v,contentRect:S,target:p})=>{p&&p!==e.el||(h=S?S.width:(v[0]||v).inlineSize,g=S?S.height:(v[0]||v).blockSize)}),(h!==d||g!==f)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function $M({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=ft(),a=(u,c={})=>{const d=o.MutationObserver||o.WebkitMutationObserver,f=new d(h=>{if(e.__preventObserver__)return;if(h.length===1){r("observerUpdate",h[0]);return}const g=function(){r("observerUpdate",h[0])};o.requestAnimationFrame?o.requestAnimationFrame(g):o.setTimeout(g,0)});f.observe(u,{attributes:typeof c.attributes>"u"?!0:c.attributes,childList:e.isElement||(typeof c.childList>"u"?!0:c).childList,characterData:typeof c.characterData>"u"?!0:c.characterData}),i.push(f)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=Ww(e.hostEl);for(let c=0;c<u.length;c+=1)a(u[c])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var DM={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function LM(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(cr(r,"padding-left")||0,10)-parseInt(cr(r,"padding-right")||0,10),n=n-parseInt(cr(r,"padding-top")||0,10)-parseInt(cr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function RM(){const e=this;function t(I,$){return parseFloat(I.getPropertyValue(e.getDirectionLabel($))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,u=bn(i,`.${e.params.slideClass}, swiper-slide`),c=l?e.virtual.slides.length:u.length;let d=[];const f=[],h=[];let g=n.slidesOffsetBefore;typeof g=="function"&&(g=n.slidesOffsetBefore.call(e));let v=n.slidesOffsetAfter;typeof v=="function"&&(v=n.slidesOffsetAfter.call(e));const S=e.snapGrid.length,p=e.slidesGrid.length,m=e.size-g-v;let x=n.spaceBetween,w=-g,C=0,k=0;if(typeof m>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*m:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-g-v,u.forEach(I=>{o?I.style.marginLeft="":I.style.marginRight="",I.style.marginBottom="",I.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(oi(r,"--swiper-centered-offset-before",""),oi(r,"--swiper-centered-offset-after","")),n.cssMode&&(oi(r,"--swiper-slides-offset-before",`${g}px`),oi(r,"--swiper-slides-offset-after",`${v}px`));const _=n.grid&&n.grid.rows>1&&e.grid;_?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let E;const M=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(I=>typeof n.breakpoints[I].slidesPerView<"u").length>0;for(let I=0;I<c;I+=1){E=0;const $=u[I];if(!($&&(_&&e.grid.updateSlide(I,$,u),cr($,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(E=n.virtual.slidesPerViewAutoSlideSize),E&&$&&(n.roundLengths&&(E=Math.floor(E)),$.style[e.getDirectionLabel("width")]=`${E}px`);else if(n.slidesPerView==="auto"){M&&($.style[e.getDirectionLabel("width")]="");const P=getComputedStyle($),j=$.style.transform,R=$.style.webkitTransform;if(j&&($.style.transform="none"),R&&($.style.webkitTransform="none"),n.roundLengths)E=e.isHorizontal()?tp($,"width",!0):tp($,"height",!0);else{const L=t(P,"width"),F=t(P,"padding-left"),A=t(P,"padding-right"),O=t(P,"margin-left"),D=t(P,"margin-right"),N=P.getPropertyValue("box-sizing");if(N&&N==="border-box")E=L+O+D;else{const{clientWidth:B,offsetWidth:z}=$;E=L+F+A+O+D+(z-B)}}j&&($.style.transform=j),R&&($.style.webkitTransform=R),n.roundLengths&&(E=Math.floor(E))}else E=(m-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(E=Math.floor(E)),$&&($.style[e.getDirectionLabel("width")]=`${E}px`);$&&($.swiperSlideSize=E),h.push(E),n.centeredSlides?(w=w+E/2+C/2+x,C===0&&I!==0&&(w=w-m/2-x),I===0&&(w=w-m/2-x),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),k%n.slidesPerGroup===0&&d.push(w),f.push(w)):(n.roundLengths&&(w=Math.floor(w)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup===0&&d.push(w),f.push(w),w=w+E+x),e.virtualSize+=E+x,C=E,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,m)+v,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+x}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),_&&e.grid.updateWrapperSize(E,d),!n.centeredSlides){const I=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,$=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||I);let P=d.length;if($){let R;if(n.slidesPerView==="auto"){R=1;let L=0;for(let F=h.length-1;F>=0&&(L+=h[F]+(F<h.length-1?x:0),L<=m);F-=1)R=h.length-F}else R=Math.floor(n.slidesPerView);P=Math.max(c-R,0)}const j=[];for(let R=0;R<d.length;R+=1){let L=d[R];n.roundLengths&&(L=Math.floor(L)),$?R<=P&&j.push(L):d[R]<=e.virtualSize-m&&j.push(L)}d=j,Math.floor(e.virtualSize-m)-Math.floor(d[d.length-1])>1&&($||d.push(e.virtualSize-m))}if(l&&n.loop){const I=h[0]+x;if(n.slidesPerGroup>1){const $=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),P=I*n.slidesPerGroup;for(let j=0;j<$;j+=1)d.push(d[d.length-1]+P)}for(let $=0;$<e.virtual.slidesBefore+e.virtual.slidesAfter;$+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+I),f.push(f[f.length-1]+I),e.virtualSize+=I}if(d.length===0&&(d=[0]),x!==0){const I=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter(($,P)=>!n.cssMode||n.loop?!0:P!==u.length-1).forEach($=>{$.style[I]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let I=0;h.forEach(P=>{I+=P+(x||0)}),I-=x;const $=I>m?I-m:0;d=d.map(P=>P<=0?-g:P>$?$+v:P)}if(n.centerInsufficientSlides){let I=0;if(h.forEach($=>{I+=$+(x||0)}),I-=x,I<m){const $=(m-I)/2;d.forEach((P,j)=>{d[j]=P-$}),f.forEach((P,j)=>{f[j]=P+$})}}if(Object.assign(e,{slides:u,snapGrid:d,slidesGrid:f,slidesSizesGrid:h}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){oi(r,"--swiper-centered-offset-before",`${-d[0]}px`),oi(r,"--swiper-centered-offset-after",`${e.size/2-h[h.length-1]/2}px`);const I=-e.snapGrid[0],$=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(P=>P+I),e.slidesGrid=e.slidesGrid.map(P=>P+$)}if(c!==s&&e.emit("slidesLengthChange"),d.length!==S&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),f.length!==p&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const I=`${n.containerModifierClass}backface-hidden`,$=e.el.classList.contains(I);c<=n.maxBackfaceHiddenSlides?$||e.el.classList.add(I):$&&e.el.classList.remove(I)}}function AM(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function FM(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const q0=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function NM(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let c=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const d=(a+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),f=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),h=-(a-c),g=h+t.slidesSizesGrid[s],v=h>=0&&h<=t.size-t.slidesSizesGrid[s],S=h>=0&&h<t.size-1||g>1&&g<=t.size||h<=0&&g>=t.size;S&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s)),q0(u,S,n.slideVisibleClass),q0(u,v,n.slideFullyVisibleClass),u.progress=i?-d:d,u.originalProgress=i?-f:f}}function zM(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const c=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=c||i<=0,a=d||i>=1,c&&(i=0),d&&(i=1)}if(n.loop){const c=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),f=t.slidesGrid[c],h=t.slidesGrid[d],g=t.slidesGrid[t.slidesGrid.length-1],v=Math.abs(e);v>=f?l=(v-f)/g:l=(v+g-h)/g,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(s&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const fd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function VM(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=d=>bn(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let s,u,c;if(o)if(n.loop){let d=i-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${d}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(d=>d.column===i),c=t.find(d=>d.column===i+1),u=t.find(d=>d.column===i-1)):s=t[i];s&&(a||(c=CM(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=t[0]),u=EM(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(d=>{fd(d,d===s,n.slideActiveClass),fd(d,d===c,n.slideNextClass),fd(d,d===u,n.slidePrevClass)}),e.emitSlidesClasses()}const Gs=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},pd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},np=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,u)=>a+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&pd(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&pd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&pd(e,a)};function BM(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function UM(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,u;const c=h=>{let g=h-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof s>"u"&&(s=BM(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const h=Math.min(i.slidesPerGroupSkip,s);u=h+Math.floor((s-h)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=c(s);return}const d=t.grid&&i.grid&&i.grid.rows>1;let f;if(t.virtual&&i.virtual.enabled)i.loop?f=c(s):f=s;else if(d){const h=t.slides.find(v=>v.column===s);let g=parseInt(h.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(h),0)),f=Math.floor(g/i.grid.rows)}else if(t.slides[s]){const h=t.slides[s].getAttribute("data-swiper-slide-index");h?f=parseInt(h,10):f=s}else f=s;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:a,realIndex:f,previousIndex:o,activeIndex:s}),t.initialized&&np(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==f&&t.emit("realIndexChange"),t.emit("slideChange"))}function HM(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var WM={updateSize:LM,updateSlides:RM,updateAutoHeight:AM,updateSlidesOffset:FM,updateSlidesProgress:NM,updateProgress:zM,updateSlidesClasses:VM,updateActiveIndex:UM,updateClickedSlide:HM};function GM(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=bM(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function YM(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let c;const d=n.maxTranslate()-n.minTranslate();d===0?c=0:c=(e-n.minTranslate())/d,c!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function qM(){return-this.snapGrid[0]}function XM(){return-this.snapGrid[this.snapGrid.length-1]}function KM(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),u=o.maxTranslate();let c;if(r&&e>s?c=s:r&&e<u?c=u:c=e,o.updateProgress(c),a.cssMode){const d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-c;else{if(!o.support.smoothScroll)return Hw({swiper:o,targetPosition:-c,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(f){!o||o.destroyed||f.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var ZM={getTranslate:GM,setTranslate:YM,minTranslate:qM,maxTranslate:XM,translateTo:KM};function QM(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Kw({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function JM(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Kw({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function eI(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Kw({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var tI={setTransition:QM,transitionStart:JM,transitionEnd:eI};function nI(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:c,activeIndex:d,rtlTranslate:f,wrapperEl:h,enabled:g}=o;if(!g&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const v=Math.min(o.params.slidesPerGroupSkip,a);let S=v+Math.floor((a-v)/o.params.slidesPerGroup);S>=s.length&&(S=s.length-1);const p=-s[S];if(l.normalizeSlideIndex)for(let _=0;_<u.length;_+=1){const E=-Math.floor(p*100),M=Math.floor(u[_]*100),I=Math.floor(u[_+1]*100);typeof u[_+1]<"u"?E>=M&&E<I-(I-M)/2?a=_:E>=M&&E<I&&(a=_+1):E>=M&&(a=_)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&(f?p>o.translate&&p>o.minTranslate():p<o.translate&&p<o.minTranslate())||!o.allowSlidePrev&&p>o.translate&&p>o.maxTranslate()&&(d||0)!==a))return!1;a!==(c||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(p);let m;a>d?m="next":a<d?m="prev":m="reset";const x=o.virtual&&o.params.virtual.enabled;if(!(x&&i)&&(f&&-p===o.translate||!f&&p===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(p),m!=="reset"&&(o.transitionStart(n,m),o.transitionEnd(n,m)),!1;if(l.cssMode){const _=o.isHorizontal(),E=f?p:-p;if(t===0)x&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),x&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{h[_?"scrollLeft":"scrollTop"]=E})):h[_?"scrollLeft":"scrollTop"]=E,x&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return Hw({swiper:o,targetPosition:E,side:_?"left":"top"}),!0;h.scrollTo({[_?"left":"top"]:E,behavior:"smooth"})}return!0}const k=Xw().isSafari;return x&&!i&&k&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(p),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,m),t===0?o.transitionEnd(n,m):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(E){!o||o.destroyed||E.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,m))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function rI(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const v=a*i.params.grid.rows;l=i.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===v).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u,slidesOffsetBefore:c,slidesOffsetAfter:d}=i.params,f=u||!!c||!!d;let h=i.params.slidesPerView;h==="auto"?h=i.slidesPerViewDynamic():(h=Math.ceil(parseFloat(i.params.slidesPerView,10)),f&&h%2===0&&(h=h+1));let g=s-l<h;if(f&&(g=g||l<Math.ceil(h/2)),r&&f&&i.params.slidesPerView!=="auto"&&!o&&(g=!1),g){const v=f?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?l+1:l-s+1,slideRealIndex:v==="next"?i.realIndex:void 0})}if(o){const v=a*i.params.grid.rows;a=i.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===v).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function iI(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function oI(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:u}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const c=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=l?r.translate:-r.translate;function f(m){return m<0?-Math.floor(Math.abs(m)):Math.floor(m)}const h=f(d),g=o.map(m=>f(m)),v=i.freeMode&&i.freeMode.enabled;let S=o[g.indexOf(h)-1];if(typeof S>"u"&&(i.cssMode||v)){let m;o.forEach((x,w)=>{h>=x&&(m=w)}),typeof m<"u"&&(S=v?o[m]:o[m>0?m-1:m])}let p=0;if(typeof S<"u"&&(p=a.indexOf(S),p<0&&(p=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(p=p-r.slidesPerViewDynamic("previous",!0)+1,p=Math.max(p,0))),i.rewind&&r.isBeginning){const m=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(m,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(p,e,t,n)}),!0;return r.slideTo(p,e,t,n)}function aI(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function sI(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],c=i.snapGrid[l+1];s-u>(c-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],c=i.snapGrid[l];s-u<=(c-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function lI(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(bn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),Uw(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var uI={slideTo:nI,slideToLoop:rI,slideNext:iI,slidePrev:oI,slideReset:aI,slideToClosest:sI,slideToClickedSlide:lI};function cI(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{bn(i,`.${r.slideClass}, swiper-slide`).forEach((g,v)=>{g.setAttribute("data-swiper-slide-index",v)})},a=()=>{const h=bn(i,`.${r.slideBlankClass}`);h.forEach(g=>{g.remove()}),h.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),u=n.slides.length%s!==0,c=l&&n.slides.length%r.grid.rows!==0,d=h=>{for(let g=0;g<h;g+=1){const v=n.isElement?$l("swiper-slide",[r.slideBlankClass]):$l("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(v)}};if(u){if(r.loopAddBlankSlides){const h=s-n.slides.length%s;d(h),n.recalcSlides(),n.updateSlides()}else jl("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(c){if(r.loopAddBlankSlides){const h=r.grid.rows-n.slides.length%r.grid.rows;d(h),n.recalcSlides(),n.updateSlides()}else jl("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const f=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:f?void 0:"next",initial:t})}function dI({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:c,allowSlideNext:d,slidesEl:f,params:h}=s,{centeredSlides:g,slidesOffsetBefore:v,slidesOffsetAfter:S,initialSlide:p}=h,m=g||!!v||!!S;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&h.virtual.enabled){t&&(!m&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):m&&s.snapIndex<h.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=c,s.allowSlideNext=d,s.emit("loopFix");return}let x=h.slidesPerView;x==="auto"?x=s.slidesPerViewDynamic():(x=Math.ceil(parseFloat(h.slidesPerView,10)),m&&x%2===0&&(x=x+1));const w=h.slidesPerGroupAuto?x:h.slidesPerGroup;let C=m?Math.max(w,Math.ceil(x/2)):w;C%w!==0&&(C+=w-C%w),C+=h.loopAdditionalSlides,s.loopedSlides=C;const k=s.grid&&h.grid&&h.grid.rows>1;u.length<x+C||s.params.effect==="cards"&&u.length<x+C*2?jl("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):k&&h.grid.fill==="row"&&jl("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const _=[],E=[],M=k?Math.ceil(u.length/h.grid.rows):u.length,I=o&&M-p<x&&!m;let $=I?p:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(u.find(O=>O.classList.contains(h.slideActiveClass))):$=i;const P=n==="next"||!n,j=n==="prev"||!n;let R=0,L=0;const A=(k?u[i].column:i)+(m&&typeof r>"u"?-x/2+.5:0);if(A<C){R=Math.max(C-A,w);for(let O=0;O<C-A;O+=1){const D=O-Math.floor(O/M)*M;if(k){const N=M-D-1;for(let B=u.length-1;B>=0;B-=1)u[B].column===N&&_.push(B)}else _.push(M-D-1)}}else if(A+x>M-C){L=Math.max(A-(M-C*2),w),I&&(L=Math.max(L,x-M+p+1));for(let O=0;O<L;O+=1){const D=O-Math.floor(O/M)*M;k?u.forEach((N,B)=>{N.column===D&&E.push(B)}):E.push(D)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&u.length<x+C*2&&(E.includes(i)&&E.splice(E.indexOf(i),1),_.includes(i)&&_.splice(_.indexOf(i),1)),j&&_.forEach(O=>{u[O].swiperLoopMoveDOM=!0,f.prepend(u[O]),u[O].swiperLoopMoveDOM=!1}),P&&E.forEach(O=>{u[O].swiperLoopMoveDOM=!0,f.append(u[O]),u[O].swiperLoopMoveDOM=!1}),s.recalcSlides(),h.slidesPerView==="auto"?s.updateSlides():k&&(_.length>0&&j||E.length>0&&P)&&s.slides.forEach((O,D)=>{s.grid.updateSlide(D,O,s.slides)}),h.watchSlidesProgress&&s.updateSlidesOffset(),t){if(_.length>0&&j){if(typeof e>"u"){const O=s.slidesGrid[$],N=s.slidesGrid[$+R]-O;l?s.setTranslate(s.translate-N):(s.slideTo($+Math.ceil(R),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else if(r){const O=k?_.length/h.grid.rows:_.length;s.slideTo(s.activeIndex+O,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(E.length>0&&P)if(typeof e>"u"){const O=s.slidesGrid[$],N=s.slidesGrid[$-L]-O;l?s.setTranslate(s.translate-N):(s.slideTo($-L,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else{const O=k?E.length/h.grid.rows:E.length;s.slideTo(s.activeIndex-O,0,!1,!0)}}if(s.allowSlidePrev=c,s.allowSlideNext=d,s.controller&&s.controller.control&&!a){const O={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(D=>{!D.destroyed&&D.params.loop&&D.loopFix({...O,slideTo:D.params.slidesPerView===h.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...O,slideTo:s.controller.control.params.slidesPerView===h.slidesPerView?t:!1})}s.emit("loopFix")}function fI(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var pI={loopCreate:cI,loopFix:dI,loopDestroy:fI};function hI(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function mI(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var gI={setGrabCursor:hI,unsetGrabCursor:mI};function vI(e,t=this){function n(r){if(!r||r===En()||r===ft())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function X0(e,t,n){const r=ft(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function yI(e){const t=this,n=En();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){X0(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!_M(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",c=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&c&&(s=c[0]);const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,f=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(f?vI(d,s):s.closest(d))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const h=a.currentX,g=a.currentY;if(!X0(t,r,h))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=h,a.startY=g,i.touchStartTime=Il(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let v=!0;s.matches(i.focusableElements)&&(v=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const S=v&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||S)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function xI(e){const t=En(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let u;if(s.type==="touchmove"){if(u=[...s.changedTouches].find(k=>k.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const c=u.pageX,d=u.pageY;if(s.preventedByNestedSwiper){o.startX=c,o.startY=d;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d}),r.touchStartTime=Il());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(c>o.startX&&-n.translate<=n.maxTranslate()||c<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(c<o.startX&&n.translate<=n.maxTranslate()||c>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=c,o.currentY=d;const f=o.currentX-o.startX,h=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(f**2+h**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let k;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:f*f+h*h>=25&&(k=Math.atan2(Math.abs(h),Math.abs(f))*180/Math.PI,r.isScrolling=n.isHorizontal()?k>i.touchAngle:90-k>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let g=n.isHorizontal()?f:h,v=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(g=Math.abs(g)*(a?1:-1),v=Math.abs(v)*(a?1:-1)),o.diff=g,g*=i.touchRatio,a&&(g=-g,v=-v);const S=n.touchesDirection;n.swipeDirection=g>0?"prev":"next",n.touchesDirection=v>0?"prev":"next";const p=n.params.loop&&!i.cssMode,m=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(p&&m&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(k)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let x;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&S!==n.touchesDirection&&p&&m&&Math.abs(g)>=1){Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=g+r.startTranslate;let w=!0,C=i.resistanceRatio;if(i.touchReleaseOnEdges&&(C=0),g>0?(p&&m&&!x&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+g)**C))):g<0&&(p&&m&&!x&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-g)**C))),w&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(g)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function bI(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(C=>C.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:u,enabled:c}=t;if(!c||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=Il(),f=d-n.touchStartTime;if(t.allowClick){const C=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(C&&C[0]||r.target,C),t.emit("tap click",r),f<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Il(),Uw(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let h;if(a.followFinger?h=s?t.translate:-t.translate:h=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:h});return}const g=h>=-t.maxTranslate()&&!t.params.loop;let v=0,S=t.slidesSizesGrid[0];for(let C=0;C<u.length;C+=C<a.slidesPerGroupSkip?1:a.slidesPerGroup){const k=C<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[C+k]<"u"?(g||h>=u[C]&&h<u[C+k])&&(v=C,S=u[C+k]-u[C]):(g||h>=u[C])&&(v=C,S=u[u.length-1]-u[u.length-2])}let p=null,m=null;a.rewind&&(t.isBeginning?m=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(p=0));const x=(h-u[v])/S,w=v<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(f>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?p:v+w):t.slideTo(v)),t.swipeDirection==="prev"&&(x>1-a.longSwipesRatio?t.slideTo(v+w):m!==null&&x<0&&Math.abs(x)>a.longSwipesRatio?t.slideTo(m):t.slideTo(v))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(v+w):t.slideTo(v):(t.swipeDirection==="next"&&t.slideTo(p!==null?p:v+w),t.swipeDirection==="prev"&&t.slideTo(m!==null?m:v))}}function K0(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function wI(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function SI(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function _I(e){const t=this;Gs(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function EI(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Zw=(e,t)=>{const n=En(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",K0,!0):e[u]("observerUpdate",K0,!0),i[s]("load",e.onLoad,{capture:!0}))};function CI(){const e=this,{params:t}=e;e.onTouchStart=yI.bind(e),e.onTouchMove=xI.bind(e),e.onTouchEnd=bI.bind(e),e.onDocumentTouchStart=EI.bind(e),t.cssMode&&(e.onScroll=SI.bind(e)),e.onClick=wI.bind(e),e.onLoad=_I.bind(e),Zw(e,"on")}function kI(){Zw(this,"off")}var TI={attachEvents:CI,detachEvents:kI};const Z0=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function OI(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=En(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),u=e.getBreakpoint(o,l,s);if(!u||e.currentBreakpoint===u)return;const d=(u in o?o[u]:void 0)||e.originalParams,f=Z0(e,r),h=Z0(e,d),g=e.params.grabCursor,v=d.grabCursor,S=r.enabled;f&&!h?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!f&&h&&(i.classList.add(`${r.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),g&&!v?e.unsetGrabCursor():!g&&v&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(k=>{if(typeof d[k]>"u")return;const _=r[k]&&r[k].enabled,E=d[k]&&d[k].enabled;_&&!E&&e[k].disable(),!_&&E&&e[k].enable()});const p=d.direction&&d.direction!==r.direction,m=r.loop&&(d.slidesPerView!==r.slidesPerView||p),x=r.loop;p&&n&&e.changeDirection(),Ot(e.params,d);const w=e.params.enabled,C=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),S&&!w?e.disable():!S&&w&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",d),n&&(m?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&C?(e.loopCreate(t),e.updateSlides()):x&&!C&&e.loopDestroy()),e.emit("breakpoint",d)}function PI(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=ft(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:u}=a[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var MI={setBreakpoint:OI,getBreakpoint:PI};function II(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function jI(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=II(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function $I(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var DI={addClasses:jI,removeClasses:$I};function LI(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var RI={checkOverflow:LI},rp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function AI(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Ot(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Ot(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Ot(t,r)}}const hd={eventsEmitter:DM,update:WM,translate:ZM,transition:tI,slide:uI,loop:pI,grabCursor:gI,events:TI,breakpoints:MI,checkOverflow:RI,classes:DI},md={};let rm=class Pn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Ot({},r),n&&!r.el&&(r.el=n);const i=En();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(u=>{const c=Ot({},r,{el:u});s.push(new Pn(c))}),s}const o=this;o.__swiper__=!0,o.support=Yw(),o.device=qw({userAgent:r.userAgent}),o.browser=Xw(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:AI(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Ot({},rp,a);return o.params=Ot({},l,md,r),o.originalParams=Ot({},o.params),o.passedParams=Ot({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=bn(n,`.${r.slideClass}, swiper-slide`),o=Dl(i[0]);return Dl(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=bn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:u}=r;let c=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=o[u]?Math.ceil(o[u].swiperSlideSize):0,f;for(let h=u+1;h<o.length;h+=1)o[h]&&!f&&(d+=Math.ceil(o[h].swiperSlideSize),c+=1,d>s&&(f=!0));for(let h=u-1;h>=0;h-=1)o[h]&&!f&&(d+=o[h].swiperSlideSize,c+=1,d>s&&(f=!0))}else if(t==="current")for(let d=u+1;d<o.length;d+=1)(n?a[d]+l[d]-a[u]<s:a[d]-a[u]<s)&&(c+=1);else for(let d=u-1;d>=0;d-=1)a[u]-a[d]<s&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Gs(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):bn(r,i())[0])();return!a&&n.params.createElements&&(a=$l("div",n.params.wrapperClass),r.append(a),bn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||cr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||cr(r,"direction")==="rtl"),wrongRTL:cr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Gs(n,o):o.addEventListener("load",a=>{Gs(n,a.target)})}),np(n),n.initialized=!0,np(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),yM(r)),r.destroyed=!0),null}static extendDefaults(t){Ot(md,t)}static get extendedDefaults(){return md}static get defaults(){return rp}static installModule(t){Pn.prototype.__modules__||(Pn.prototype.__modules__=[]);const n=Pn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Pn.installModule(n)),Pn):(Pn.installModule(t),Pn)}};Object.keys(hd).forEach(e=>{Object.keys(hd[e]).forEach(t=>{rm.prototype[t]=hd[e][t]})});rm.use([jM,$M]);const Qw=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Xr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function ji(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Xr(t[r])&&Xr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:ji(e[r],t[r]):e[r]=t[r]})}function Jw(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function eS(e={}){return e.pagination&&typeof e.pagination.el>"u"}function tS(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function nS(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function FI(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function NI({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(E=>E!=="children"&&E!=="direction"&&E!=="wrapperClass"),{params:u,pagination:c,navigation:d,scrollbar:f,virtual:h,thumbs:g}=e;let v,S,p,m,x,w,C,k;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(v=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(S=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&c&&!c.el&&(p=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&f&&!f.el&&(m=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(x=!0);const _=E=>{e[E]&&(e[E].destroy(),E==="navigation"?(e.isElement&&(e[E].prevEl.remove(),e[E].nextEl.remove()),u[E].prevEl=void 0,u[E].nextEl=void 0,e[E].prevEl=void 0,e[E].nextEl=void 0):(e.isElement&&e[E].el.remove(),u[E].el=void 0,e[E].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?w=!0:!u.loop&&n.loop?C=!0:k=!0),s.forEach(E=>{if(Xr(u[E])&&Xr(n[E]))Object.assign(u[E],n[E]),(E==="navigation"||E==="pagination"||E==="scrollbar")&&"enabled"in n[E]&&!n[E].enabled&&_(E);else{const M=n[E];(M===!0||M===!1)&&(E==="navigation"||E==="pagination"||E==="scrollbar")?M===!1&&_(E):u[E]=n[E]}}),s.includes("controller")&&!S&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&h&&u.virtual.enabled?(h.slides=t,h.update(!0)):r.includes("virtual")&&h&&u.virtual.enabled&&(t&&(h.slides=t),h.update(!0)),r.includes("children")&&t&&u.loop&&(k=!0),v&&g.init()&&g.update(!0),S&&(e.controller.control=u.controller.control),p&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),c.init(),c.render(),c.update()),m&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),f.init(),f.updateSize(),f.setTranslate()),x&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),xa(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),xa(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(w||k)&&e.loopDestroy(),(C||k)&&e.loopCreate(),e.update()}function zI(e={},t=!0){const n={on:{}},r={},i={};ji(n,rp),n._emitClasses=!0,n.init=!1;const o={},a=Qw.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?Xr(e[s])?(n[s]={},i[s]={},ji(n[s],e[s]),ji(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function VI({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){Jw(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),eS(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),tS(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function BI(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return Qw.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(Xr(e[s])&&Xr(t[s])){const u=Object.keys(e[s]),c=Object.keys(t[s]);u.length!==c.length?a(s):(u.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}),c.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const UI=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Ll(){return Ll=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ll.apply(this,arguments)}function rS(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function iS(e){const t=[];return W.Children.toArray(e).forEach(n=>{rS(n)?t.push(n):n.props&&n.props.children&&iS(n.props.children).forEach(r=>t.push(r))}),t}function HI(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return W.Children.toArray(e).forEach(r=>{if(rS(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=iS(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function WI(e,t,n){if(!n)return null;const r=c=>{let d=c;return c<0?d=t.length+c:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let c=l;c<s;c+=1)c>=o&&c<=a&&u.push(t[r(c)]);return u.map((c,d)=>W.cloneElement(c,{swiper:e,style:i,key:c.props.virtualIndex||c.key||`slide-${d}`}))}function qo(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const Q0=b.createContext(null),GI=b.createContext(null),oS=b.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,u]=b.useState("swiper"),[c,d]=b.useState(null),[f,h]=b.useState(!1),g=b.useRef(!1),v=b.useRef(null),S=b.useRef(null),p=b.useRef(null),m=b.useRef(null),x=b.useRef(null),w=b.useRef(null),C=b.useRef(null),k=b.useRef(null),{params:_,passedParams:E,rest:M,events:I}=zI(o),{slides:$,slots:P}=HI(r),j=()=>{h(!f)};Object.assign(_.on,{_containerClasses(O,D){u(D)}});const R=()=>{Object.assign(_.on,I),l=!0;const O={..._};if(delete O.wrapperClass,S.current=new rm(O),S.current.virtual&&S.current.params.virtual.enabled){S.current.virtual.slides=$;const D={cache:!1,slides:$,renderExternal:d,renderExternalUpdate:!1};ji(S.current.params.virtual,D),ji(S.current.originalParams.virtual,D)}};v.current||R(),S.current&&S.current.on("_beforeBreakpoint",j);const L=()=>{l||!I||!S.current||Object.keys(I).forEach(O=>{S.current.on(O,I[O])})},F=()=>{!I||!S.current||Object.keys(I).forEach(O=>{S.current.off(O,I[O])})};b.useEffect(()=>()=>{S.current&&S.current.off("_beforeBreakpoint",j)}),b.useEffect(()=>{!g.current&&S.current&&(S.current.emitSlidesClasses(),g.current=!0)}),qo(()=>{if(a&&(a.current=v.current),!!v.current)return S.current.destroyed&&R(),VI({el:v.current,nextEl:x.current,prevEl:w.current,paginationEl:C.current,scrollbarEl:k.current,swiper:S.current},_),i&&!S.current.destroyed&&i(S.current),()=>{S.current&&!S.current.destroyed&&S.current.destroy(!0,!1)}},[]),qo(()=>{L();const O=BI(E,p.current,$,m.current,D=>D.key);return p.current=E,m.current=$,O.length&&S.current&&!S.current.destroyed&&NI({swiper:S.current,slides:$,passedParams:E,changedParams:O,nextEl:x.current,prevEl:w.current,scrollbarEl:k.current,paginationEl:C.current}),()=>{F()}}),qo(()=>{UI(S.current)},[c]);function A(){return _.virtual?WI(S.current,$,c):$.map((O,D)=>W.cloneElement(O,{swiper:S.current,swiperSlideIndex:D}))}return W.createElement(t,Ll({ref:v,className:nS(`${s}${e?` ${e}`:""}`)},M),W.createElement(GI.Provider,{value:S.current},P["container-start"],W.createElement(n,{className:FI(_.wrapperClass)},P["wrapper-start"],A(),P["wrapper-end"]),Jw(_)&&W.createElement(W.Fragment,null,W.createElement("div",{ref:w,className:"swiper-button-prev"}),W.createElement("div",{ref:x,className:"swiper-button-next"})),tS(_)&&W.createElement("div",{ref:k,className:"swiper-scrollbar"}),eS(_)&&W.createElement("div",{ref:C,className:"swiper-pagination"}),P["container-end"]))});oS.displayName="Swiper";const aS=b.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},u)=>{const c=b.useRef(null),[d,f]=b.useState("swiper-slide"),[h,g]=b.useState(!1);function v(x,w,C){w===c.current&&f(C)}qo(()=>{if(typeof l<"u"&&(c.current.swiperSlideIndex=l),u&&(u.current=c.current),!(!c.current||!r)){if(r.destroyed){d!=="swiper-slide"&&f("swiper-slide");return}return r.on("_slideClass",v),()=>{r&&r.off("_slideClass",v)}}}),qo(()=>{r&&c.current&&!r.destroyed&&f(r.getSlideClasses(c.current))},[r]);const S={isActive:d.indexOf("swiper-slide-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0},p=()=>typeof t=="function"?t(S):t,m=()=>{g(!0)};return W.createElement(e,Ll({ref:c,className:nS(`${d}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:m},s),i&&W.createElement(Q0.Provider,{value:S},W.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},p(),o&&!h&&W.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}}))),!i&&W.createElement(Q0.Provider,{value:S},p(),o&&!h&&W.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}})))});aS.displayName="SwiperSlide";const YI=T.section`
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
`,qI=T.div`
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
`,XI=T.div`
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
`,ZI=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg"},{id:2,title:"Перевірені велодеталі з пробігом бла бла",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp"}],QI=()=>y.jsx(YI,{children:y.jsx(oS,{modules:[kM,OM,TM],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:ZI.map(e=>y.jsx(aS,{children:y.jsx(qI,{bg:e.img,children:y.jsxs(XI,{children:[y.jsx("h1",{children:e.title}),y.jsx("p",{children:e.desc}),y.jsx(KI,{to:"/catalog",children:"До каталогу"})]})})},e.id))})}),JI=T.section`

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
`;function He(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var p5=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),J0=p5,gd=()=>Math.random().toString(36).substring(7).split("").join("."),h5={INIT:`@@redux/INIT${gd()}`,REPLACE:`@@redux/REPLACE${gd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${gd()}`},Rl=h5;function im(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function om(e,t,n){if(typeof e!="function")throw new Error(He(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(He(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(He(1));return n(om)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function u(){a===o&&(a=new Map,o.forEach((S,p)=>{a.set(p,S)}))}function c(){if(s)throw new Error(He(3));return i}function d(S){if(typeof S!="function")throw new Error(He(4));if(s)throw new Error(He(5));let p=!0;u();const m=l++;return a.set(m,S),function(){if(p){if(s)throw new Error(He(6));p=!1,u(),a.delete(m),o=null}}}function f(S){if(!im(S))throw new Error(He(7));if(typeof S.type>"u")throw new Error(He(8));if(typeof S.type!="string")throw new Error(He(17));if(s)throw new Error(He(9));try{s=!0,i=r(i,S)}finally{s=!1}return(o=a).forEach(m=>{m()}),S}function h(S){if(typeof S!="function")throw new Error(He(10));r=S,f({type:Rl.REPLACE})}function g(){const S=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(He(11));function m(){const w=p;w.next&&w.next(c())}return m(),{unsubscribe:S(m)}},[J0](){return this}}}return f({type:Rl.INIT}),{dispatch:f,subscribe:d,getState:c,replaceReducer:h,[J0]:g}}function m5(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Rl.INIT})>"u")throw new Error(He(12));if(typeof n(void 0,{type:Rl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(He(13))})}function g5(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{m5(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],f=n[d],h=a[d],g=f(h,l);if(typeof g>"u")throw l&&l.type,new Error(He(14));u[d]=g,s=s||g!==h}return s=s||r.length!==Object.keys(a).length,s?u:a}}function Al(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function v5(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(He(15))};const a={getState:i.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(a));return o=Al(...l)(i.dispatch),{...i,dispatch:o}}}function y5(e){return im(e)&&"type"in e&&typeof e.type=="string"}var sS=Symbol.for("immer-nothing"),ev=Symbol.for("immer-draftable"),ut=Symbol.for("immer-state");function rn(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Mt=Object,Gi=Mt.getPrototypeOf,Fl="constructor",Qu="prototype",ip="configurable",Nl="enumerable",Ys="writable",ba="value",Gn=e=>!!e&&!!e[ut];function dn(e){var t;return e?lS(e)||ec(e)||!!e[ev]||!!((t=e[Fl])!=null&&t[ev])||tc(e)||nc(e):!1}var x5=Mt[Qu][Fl].toString(),tv=new WeakMap;function lS(e){if(!e||!am(e))return!1;const t=Gi(e);if(t===null||t===Mt[Qu])return!0;const n=Mt.hasOwnProperty.call(t,Fl)&&t[Fl];if(n===Object)return!0;if(!fi(n))return!1;let r=tv.get(n);return r===void 0&&(r=Function.toString.call(n),tv.set(n,r)),r===x5}function Ju(e,t,n=!0){Ra(e)===0?(n?Reflect.ownKeys(e):Mt.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Ra(e){const t=e[ut];return t?t.type_:ec(e)?1:tc(e)?2:nc(e)?3:0}var nv=(e,t,n=Ra(e))=>n===2?e.has(t):Mt[Qu].hasOwnProperty.call(e,t),op=(e,t,n=Ra(e))=>n===2?e.get(t):e[t],zl=(e,t,n,r=Ra(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function b5(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var ec=Array.isArray,tc=e=>e instanceof Map,nc=e=>e instanceof Set,am=e=>typeof e=="object",fi=e=>typeof e=="function",vd=e=>typeof e=="boolean";function w5(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Dn=e=>e.copy_||e.base_,sm=e=>e.modified_?e.copy_:e.base_;function ap(e,t){if(tc(e))return new Map(e);if(nc(e))return new Set(e);if(ec(e))return Array[Qu].slice.call(e);const n=lS(e);if(t===!0||t==="class_only"&&!n){const r=Mt.getOwnPropertyDescriptors(e);delete r[ut];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[Ys]===!1&&(l[Ys]=!0,l[ip]=!0),(l.get||l.set)&&(r[a]={[ip]:!0,[Ys]:!0,[Nl]:l[Nl],[ba]:e[a]})}return Mt.create(Gi(e),r)}else{const r=Gi(e);if(r!==null&&n)return{...e};const i=Mt.create(r);return Mt.assign(i,e)}}function lm(e,t=!1){return rc(e)||Gn(e)||!dn(e)||(Ra(e)>1&&Mt.defineProperties(e,{set:ps,add:ps,clear:ps,delete:ps}),Mt.freeze(e),t&&Ju(e,(n,r)=>{lm(r,!0)},!1)),e}function S5(){rn(2)}var ps={[ba]:S5};function rc(e){return e===null||!am(e)?!0:Mt.isFrozen(e)}var Vl="MapSet",sp="Patches",rv="ArrayMethods",uS={};function Kr(e){const t=uS[e];return t||rn(0,e),t}var iv=e=>!!uS[e],wa,cS=()=>wa,_5=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:iv(Vl)?Kr(Vl):void 0,arrayMethodsPlugin_:iv(rv)?Kr(rv):void 0});function ov(e,t){t&&(e.patchPlugin_=Kr(sp),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function lp(e){up(e),e.drafts_.forEach(E5),e.drafts_=null}function up(e){e===wa&&(wa=e.parent_)}var av=e=>wa=_5(wa,e);function E5(e){const t=e[ut];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function sv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[ut].modified_&&(lp(t),rn(4)),dn(e)&&(e=lv(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[ut].base_,e,t)}else e=lv(t,n);return C5(t,e,!0),lp(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==sS?e:void 0}function lv(e,t){if(rc(t))return t;const n=t[ut];if(!n)return Bl(t,e.handledSet_,e);if(!ic(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);pS(n,e)}return n.copy_}function C5(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&lm(t,n)}function dS(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var ic=(e,t)=>e.scope_===t,k5=[];function fS(e,t,n,r){const i=Dn(e),o=e.type_;if(r!==void 0&&op(i,r,o)===t){zl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Ju(i,(s,u)=>{if(Gn(u)){const c=l.get(u)||[];c.push(s),l.set(u,c)}})}const a=e.draftLocations_.get(t)??k5;for(const l of a)zl(i,l,n,o)}function T5(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!ic(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=sm(o);fS(e,o.draft_??o,a,n),pS(o,i)})}function pS(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}dS(e)}}function O5(e,t,n){const{scope_:r}=e;if(Gn(n)){const i=n[ut];ic(i,r)&&i.callbacks_.push(function(){qs(e);const a=sm(i);fS(e,n,a,t)})}else dn(n)&&e.callbacks_.push(function(){const o=Dn(e);e.type_===3?o.has(n)&&Bl(n,r.handledSet_,r):op(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Bl(op(e.copy_,t,e.type_),r.handledSet_,r)})}function Bl(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Gn(e)||t.has(e)||!dn(e)||rc(e)||(t.add(e),Ju(e,(r,i)=>{if(Gn(i)){const o=i[ut];if(ic(o,n)){const a=sm(o);zl(e,r,a,e.type_),dS(o)}}else dn(i)&&Bl(i,t,n)})),e}function P5(e,t){const n=ec(e),r={type_:n?1:0,scope_:t?t.scope_:cS(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Ul;n&&(i=[r],o=Sa);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var Ul={get(e,t){if(t===ut)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Dn(e);if(!nv(i,t,e.type_))return M5(e,i,t);const o=i[t];if(e.finalized_||!dn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&w5(t))return o;if(o===yd(e.base_,t)){qs(e);const a=e.type_===1?+t:t,l=dp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Dn(e)},ownKeys(e){return Reflect.ownKeys(Dn(e))},set(e,t,n){const r=hS(Dn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=yd(Dn(e),t),o=i==null?void 0:i[ut];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(b5(n,i)&&(n!==void 0||nv(e.base_,t,e.type_)))return!0;qs(e),cp(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),O5(e,t,n)),!0},deleteProperty(e,t){return qs(e),yd(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),cp(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Dn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Ys]:!0,[ip]:e.type_!==1||t!=="length",[Nl]:r[Nl],[ba]:n[t]}},defineProperty(){rn(11)},getPrototypeOf(e){return Gi(e.base_)},setPrototypeOf(){rn(12)}},Sa={};for(let e in Ul){let t=Ul[e];Sa[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}Sa.deleteProperty=function(e,t){return Sa.set.call(this,e,t,void 0)};Sa.set=function(e,t,n){return Ul.set.call(this,e[0],t,n,e[0])};function yd(e,t){const n=e[ut];return(n?Dn(n):e)[t]}function M5(e,t,n){var i;const r=hS(t,n);return r?ba in r?r[ba]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function hS(e,t){if(!(t in e))return;let n=Gi(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Gi(n)}}function cp(e){e.modified_||(e.modified_=!0,e.parent_&&cp(e.parent_))}function qs(e){e.copy_||(e.assigned_=new Map,e.copy_=ap(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var I5=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(fi(t)&&!fi(n)){const o=n;n=t;const a=this;return function(s=o,...u){return a.produce(s,c=>n.call(this,c,...u))}}fi(n)||rn(6),r!==void 0&&!fi(r)&&rn(7);let i;if(dn(t)){const o=av(this),a=dp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?lp(o):up(o)}return ov(o,r),sv(i,o)}else if(!t||!am(t)){if(i=n(t),i===void 0&&(i=t),i===sS&&(i=void 0),this.autoFreeze_&&lm(i,!0),r){const o=[],a=[];Kr(sp).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else rn(1,t)},this.produceWithPatches=(t,n)=>{if(fi(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},vd(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),vd(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),vd(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){dn(e)||rn(8),Gn(e)&&(e=j5(e));const t=av(this),n=dp(t,e,void 0);return n[ut].isManual_=!0,up(t),n}finishDraft(e,t){const n=e&&e[ut];(!n||!n.isManual_)&&rn(9);const{scope_:r}=n;return ov(r,t),sv(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Kr(sp).applyPatches_;return Gn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function dp(e,t,n,r){const[i,o]=tc(t)?Kr(Vl).proxyMap_(t,n):nc(t)?Kr(Vl).proxySet_(t,n):P5(t,n);return((n==null?void 0:n.scope_)??cS()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?T5(n,o,r):o.callbacks_.push(function(s){var c;(c=s.mapSetPlugin_)==null||c.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),i}function j5(e){return Gn(e)||rn(10,e),mS(e)}function mS(e){if(!dn(e)||rc(e))return e;const t=e[ut];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=ap(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=ap(e,!0);return Ju(n,(i,o)=>{zl(n,i,mS(o))},r),t&&(t.finalized_=!1),n}var $5=new I5,gS=$5.produce;function vS(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var D5=vS(),L5=vS,R5=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Al:Al.apply(null,arguments)};function uv(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(zn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>y5(r)&&r.type===e,n}var yS=class Do extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Do.prototype)}static get[Symbol.species](){return Do}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Do(...t[0].concat(this)):new Do(...t.concat(this))}};function cv(e){return dn(e)?gS(e,()=>{}):e}function hs(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function A5(e){return typeof e=="boolean"}var F5=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new yS;return n&&(A5(n)?a.push(D5):a.push(L5(n.extraArgument))),a},N5="RTK_autoBatch",dv=e=>t=>{setTimeout(t,e)},z5=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:dv(10):e.type==="callback"?e.queueNotification:dv(e.timeout),u=()=>{a=!1,o&&(o=!1,l.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),f=r.subscribe(d);return l.add(c),()=>{f(),l.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[N5]),o=!i,o&&(a||(a=!0,s(u))),r.dispatch(c)}finally{i=!0}}})},V5=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new yS(e);return r&&i.push(z5(typeof r=="object"?r:void 0)),i};function B5(e){const t=F5(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(im(n))s=g5(n);else throw new Error(zn(1));let u;typeof r=="function"?u=r(t):u=t();let c=Al;i&&(c=R5({trace:!1,...typeof i=="object"&&i}));const d=v5(...u),f=V5(d);let h=typeof l=="function"?l(f):f();const g=c(...h);return om(s,a,g)}function xS(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(zn(28));if(l in t)throw new Error(zn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function U5(e){return typeof e=="function"}function H5(e,t){let[n,r,i]=xS(t),o;if(U5(e))o=()=>cv(e());else{const l=cv(e);o=()=>l}function a(l=o(),s){let u=[n[s.type],...r.filter(({matcher:c})=>c(s)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Gn(c)){const h=d(c,s);return h===void 0?c:h}else{if(dn(c))return gS(c,f=>d(f,s));{const f=d(c,s);if(f===void 0){if(c===null)return c;throw Error("A case reducer on a non-draftable value must not return undefined")}return f}}return c},l)}return a.getInitialState=o,a}var W5=Symbol.for("rtk-slice-createasyncthunk");function G5(e,t){return`${e}/${t}`}function Y5({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[W5];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(zn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(X5()):i.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(w,C){const k=typeof w=="string"?w:w.type;if(!k)throw new Error(zn(12));if(k in u.sliceCaseReducersByType)throw new Error(zn(13));return u.sliceCaseReducersByType[k]=C,c},addMatcher(w,C){return u.sliceMatchers.push({matcher:w,reducer:C}),c},exposeAction(w,C){return u.actionCreators[w]=C,c},exposeCaseReducer(w,C){return u.sliceCaseReducersByName[w]=C,c}};s.forEach(w=>{const C=l[w],k={reducerName:w,type:G5(o,w),createNotation:typeof i.reducers=="function"};Z5(C)?J5(k,C,c,t):K5(k,C,c)});function d(){const[w={},C=[],k=void 0]=typeof i.extraReducers=="function"?xS(i.extraReducers):[i.extraReducers],_={...w,...u.sliceCaseReducersByType};return H5(i.initialState,E=>{for(let M in _)E.addCase(M,_[M]);for(let M of u.sliceMatchers)E.addMatcher(M.matcher,M.reducer);for(let M of C)E.addMatcher(M.matcher,M.reducer);k&&E.addDefaultCase(k)})}const f=w=>w,h=new Map,g=new WeakMap;let v;function S(w,C){return v||(v=d()),v(w,C)}function p(){return v||(v=d()),v.getInitialState()}function m(w,C=!1){function k(E){let M=E[w];return typeof M>"u"&&C&&(M=hs(g,k,p)),M}function _(E=f){const M=hs(h,C,()=>new WeakMap);return hs(M,E,()=>{const I={};for(const[$,P]of Object.entries(i.selectors??{}))I[$]=q5(P,E,()=>hs(g,E,p),C);return I})}return{reducerPath:w,getSelectors:_,get selectors(){return _(k)},selectSlice:k}}const x={name:o,reducer:S,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:p,...m(a),injectInto(w,{reducerPath:C,...k}={}){const _=C??a;return w.inject({reducerPath:_,reducer:S},k),{...x,...m(_,!0)}}};return x}}function q5(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var bS=Y5();function X5(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function K5({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!Q5(r))throw new Error(zn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?uv(e,a):uv(e))}function Z5(e){return e._reducerDefinitionType==="asyncThunk"}function Q5(e){return e._reducerDefinitionType==="reducerWithPrepare"}function J5({type:e,reducerName:t},n,r,i){if(!i)throw new Error(zn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:u,options:c}=n,d=i(e,o,c);r.exposeAction(t,d),a&&r.addCase(d.fulfilled,a),l&&r.addCase(d.pending,l),s&&r.addCase(d.rejected,s),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:a||ms,pending:l||ms,rejected:s||ms,settled:u||ms})}function ms(){}function zn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const wS=bS({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=e.items.find(r=>r.id===t.payload.id);n?n.quantity=(n.quantity||0)+1:e.items.push({...t.payload,quantity:1})},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&(n.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:oc,removeFromCart:ej,clearCart:tj,addAllToCart:nj,incrementQuantity:rj,decrementQuantity:ij}=wS.actions,oj=wS.reducer;function SS(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=SS(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Br(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=SS(e))&&(r&&(r+=" "),r+=t);return r}function aj(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}aj(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Aa=e=>typeof e=="number"&&!isNaN(e),Zr=e=>typeof e=="string",Yn=e=>typeof e=="function",sj=e=>Zr(e)||Aa(e),fp=e=>Zr(e)||Yn(e)?e:null,lj=(e,t)=>e===!1||Aa(e)&&e>0?e:t,pp=e=>b.isValidElement(e)||Zr(e)||Yn(e)||Aa(e);function uj(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function cj({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:c,playToast:d}){let f=n?`${e}--${a}`:e,h=n?`${t}--${a}`:t,g=b.useRef(0);return b.useLayoutEffect(()=>{let v=u.current,S=f.split(" "),p=m=>{m.target===u.current&&(d(),v.removeEventListener("animationend",p),v.removeEventListener("animationcancel",p),g.current===0&&m.type!=="animationcancel"&&v.classList.remove(...S))};v.classList.add(...S),v.addEventListener("animationend",p),v.addEventListener("animationcancel",p)},[]),b.useEffect(()=>{let v=u.current,S=()=>{v.removeEventListener("animationend",S),r?uj(v,s,i):s()};c||(l?S():(g.current=1,v.className+=` ${h}`,v.addEventListener("animationend",S)))},[c]),W.createElement(W.Fragment,null,o)}}function fv(e,t){return{content:_S(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function _S(e,t,n=!1){return b.isValidElement(e)&&!Zr(e.type)?b.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Yn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function dj({closeToast:e,theme:t,ariaLabel:n="close"}){return W.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},W.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},W.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function fj({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:c}){let d=i||a&&l===0,f={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(f.transform=`scaleX(${l})`);let h=Br("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${c}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),g=Yn(o)?o({rtl:s,type:r,defaultClassName:h}):Br(h,o),v={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return W.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":d},W.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${c} Toastify__progress-bar--${r}`}),W.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:g,style:f,...v}))}var pj=1,ES=()=>`${pj++}`;function hj(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,u=new Set,c=m=>(u.add(m),()=>u.delete(m)),d=()=>{a=Array.from(s.values()),u.forEach(m=>m())},f=({containerId:m,toastId:x,updateId:w})=>{let C=m?m!==e:e!==1,k=s.has(x)&&w==null;return C||k},h=(m,x)=>{s.forEach(w=>{var C;(x==null||x===w.props.toastId)&&((C=w.toggle)==null||C.call(w,m))})},g=m=>{var x,w;(w=(x=m.props)==null?void 0:x.onClose)==null||w.call(x,m.removalReason),m.isActive=!1},v=m=>{if(m==null)s.forEach(g);else{let x=s.get(m);x&&g(x)}d()},S=()=>{i-=o.length,o=[]},p=m=>{var x,w;let{toastId:C,updateId:k}=m.props,_=k==null;m.staleId&&s.delete(m.staleId),m.isActive=!0,s.set(C,m),d(),n(fv(m,_?"added":"updated")),_&&((w=(x=m.props).onOpen)==null||w.call(x))};return{id:e,props:l,observe:c,toggle:h,removeToast:v,toasts:s,clearQueue:S,buildToast:(m,x)=>{if(f(x))return;let{toastId:w,updateId:C,data:k,staleId:_,delay:E}=x,M=C==null;M&&i++;let I={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([P,j])=>j!=null)),toastId:w,updateId:C,data:k,isIn:!1,className:fp(x.className||l.toastClassName),progressClassName:fp(x.progressClassName||l.progressClassName),autoClose:x.isLoading?!1:lj(x.autoClose,l.autoClose),closeToast(P){s.get(w).removalReason=P,v(w)},deleteToast(){let P=s.get(w);if(P!=null){if(n(fv(P,"removed")),s.delete(w),i--,i<0&&(i=0),o.length>0){p(o.shift());return}d()}}};I.closeButton=l.closeButton,x.closeButton===!1||pp(x.closeButton)?I.closeButton=x.closeButton:x.closeButton===!0&&(I.closeButton=pp(l.closeButton)?l.closeButton:!0);let $={content:m,props:I,staleId:_};l.limit&&l.limit>0&&i>l.limit&&M?o.push($):Aa(E)?setTimeout(()=>{p($)},E):p($)},setProps(m){l=m},setToggle:(m,x)=>{let w=s.get(m);w&&(w.toggle=x)},isToastActive:m=>{var x;return(x=s.get(m))==null?void 0:x.isActive},getSnapshot:()=>a}}var st=new Map,_a=[],hp=new Set,mj=e=>hp.forEach(t=>t(e)),CS=()=>st.size>0;function gj(){_a.forEach(e=>TS(e.content,e.options)),_a=[]}var vj=(e,{containerId:t})=>{var n;return(n=st.get(t||1))==null?void 0:n.toasts.get(e)};function kS(e,t){var n;if(t)return!!((n=st.get(t))!=null&&n.isToastActive(e));let r=!1;return st.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function yj(e){if(!CS()){_a=_a.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||sj(e))st.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=st.get(e.containerId);t?t.removeToast(e.id):st.forEach(n=>{n.removeToast(e.id)})}}var xj=(e={})=>{st.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function TS(e,t){pp(e)&&(CS()||_a.push({content:e,options:t}),st.forEach(n=>{n.buildToast(e,t)}))}function bj(e){var t;(t=st.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function OS(e,t){st.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function wj(e){let t=e.containerId||1;return{subscribe(n){let r=hj(t,e,mj);st.set(t,r);let i=r.observe(n);return gj(),()=>{i(),st.delete(t)}},setProps(n){var r;(r=st.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=st.get(t))==null?void 0:n.getSnapshot()}}}function Sj(e){return hp.add(e),()=>{hp.delete(e)}}function _j(e){return e&&(Zr(e.toastId)||Aa(e.toastId))?e.toastId:ES()}function Fa(e,t){return TS(e,t),t.toastId}function ac(e,t){return{...t,type:t&&t.type||e,toastId:_j(t)}}function sc(e){return(t,n)=>Fa(t,ac(e,n))}function te(e,t){return Fa(e,ac("default",t))}te.loading=(e,t)=>Fa(e,ac("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function Ej(e,{pending:t,error:n,success:r},i){let o;t&&(o=Zr(t)?te.loading(t,i):te.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,c,d)=>{if(c==null){te.dismiss(o);return}let f={type:u,...a,...i,data:d},h=Zr(c)?{render:c}:c;return o?te.update(o,{...f,...h}):te(h.render,{...f,...h}),d},s=Yn(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}te.promise=Ej;te.success=sc("success");te.info=sc("info");te.error=sc("error");te.warning=sc("warning");te.warn=te.warning;te.dark=(e,t)=>Fa(e,ac("default",{theme:"dark",...t}));function Cj(e){yj(e)}te.dismiss=Cj;te.clearWaitingQueue=xj;te.isActive=kS;te.update=(e,t={})=>{let n=vj(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:ES()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Fa(a,o)}};te.done=e=>{te.update(e,{progress:1})};te.onChange=Sj;te.play=e=>OS(!0,e);te.pause=e=>OS(!1,e);function kj(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=b.useRef(wj(e)).current;i(e);let o=(t=b.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:c}=u.props;s.has(c)||s.set(c,[]),s.get(c).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:kS,count:o==null?void 0:o.length}}function Tj(e){let[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:c,closeOnClick:d}=e;bj({id:e.toastId,containerId:e.containerId,fn:n}),b.useEffect(()=>{if(e.pauseOnFocusLoss)return f(),()=>{h()}},[e.pauseOnFocusLoss]);function f(){document.hasFocus()||p(),window.addEventListener("focus",S),window.addEventListener("blur",p)}function h(){window.removeEventListener("focus",S),window.removeEventListener("blur",p)}function g(_){if(e.draggable===!0||e.draggable===_.pointerType){m();let E=o.current;a.canCloseOnClick=!0,a.canDrag=!0,E.style.transition="none",e.draggableDirection==="x"?(a.start=_.clientX,a.removalDistance=E.offsetWidth*(e.draggablePercent/100)):(a.start=_.clientY,a.removalDistance=E.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function v(_){let{top:E,bottom:M,left:I,right:$}=o.current.getBoundingClientRect();_.nativeEvent.type!=="touchend"&&e.pauseOnHover&&_.clientX>=I&&_.clientX<=$&&_.clientY>=E&&_.clientY<=M?p():S()}function S(){n(!0)}function p(){n(!1)}function m(){a.didMove=!1,document.addEventListener("pointermove",w),document.addEventListener("pointerup",C)}function x(){document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",C)}function w(_){let E=o.current;if(a.canDrag&&E){a.didMove=!0,t&&p(),e.draggableDirection==="x"?a.delta=_.clientX-a.start:a.delta=_.clientY-a.start,a.start!==_.clientX&&(a.canCloseOnClick=!1);let M=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;E.style.transform=`translate3d(${M},0)`,E.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function C(){x();let _=o.current;if(a.canDrag&&a.didMove&&_){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}_.style.transition="transform 0.2s, opacity 0.2s",_.style.removeProperty("transform"),_.style.removeProperty("opacity")}}let k={onPointerDown:g,onPointerUp:v};return l&&s&&(k.onMouseEnter=p,e.stacked||(k.onMouseLeave=S)),d&&(k.onClick=_=>{c&&c(_),a.canCloseOnClick&&u(!0)}),{playToast:S,pauseToast:p,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:k}}var Oj=typeof window<"u"?b.useLayoutEffect:b.useEffect,lc=({theme:e,type:t,isLoading:n,...r})=>W.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function Pj(e){return W.createElement(lc,{...e},W.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function Mj(e){return W.createElement(lc,{...e},W.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function Ij(e){return W.createElement(lc,{...e},W.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function jj(e){return W.createElement(lc,{...e},W.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function $j(){return W.createElement("div",{className:"Toastify__spinner"})}var mp={info:Mj,warning:Pj,success:Ij,error:jj,spinner:$j},Dj=e=>e in mp;function Lj({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Yn(r)?i=r({...o,isLoading:n}):b.isValidElement(r)?i=b.cloneElement(r,o):n?i=mp.spinner():Dj(t)&&(i=mp[t](o))),i}var Rj=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=Tj(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:c,hideProgressBar:d,closeToast:f,transition:h,position:g,className:v,style:S,progressClassName:p,updateId:m,role:x,progress:w,rtl:C,toastId:k,deleteToast:_,isIn:E,isLoading:M,closeOnClick:I,theme:$,ariaLabel:P}=e,j=Br("Toastify__toast",`Toastify__toast-theme--${$}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":I}),R=Yn(v)?v({rtl:C,position:g,type:c,defaultClassName:j}):Br(j,v),L=Lj(e),F=!!w||!s,A={closeToast:f,type:c,theme:$},O=null;return a===!1||(Yn(a)?O=a(A):b.isValidElement(a)?O=b.cloneElement(a,A):O=dj(A)),W.createElement(h,{isIn:E,done:_,position:g,preventExitTransition:n,nodeRef:r,playToast:o},W.createElement("div",{id:k,tabIndex:0,onClick:u,"data-in":E,className:R,...i,style:S,ref:r,...E&&{role:x,"aria-label":P}},L!=null&&W.createElement("div",{className:Br("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},L),_S(l,e,!t),O,!e.customProgressBar&&W.createElement(fj,{...m&&!F?{key:`p-${m}`}:{},rtl:C,theme:$,delay:s,isRunning:t,isIn:E,closeToast:f,hide:d,type:c,className:p,controlledProgress:F,progress:w||0})))},Aj=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),Fj=cj(Aj("bounce",!0)),Nj={position:"top-right",transition:Fj,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Na(e){let t={...Nj,...e},n=e.stacked,[r,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=kj(t),{className:u,style:c,rtl:d,containerId:f,hotKeys:h}=t;function g(S){let p=Br("Toastify__toast-container",`Toastify__toast-container--${S}`,{"Toastify__toast-container--rtl":d});return Yn(u)?u({position:S,rtl:d,defaultClassName:p}):Br(p,fp(u))}function v(){n&&(i(!0),te.play())}return Oj(()=>{var S;if(n){let p=o.current.querySelectorAll('[data-in="true"]'),m=12,x=(S=t.position)==null?void 0:S.includes("top"),w=0,C=0;Array.from(p).reverse().forEach((k,_)=>{let E=k;E.classList.add("Toastify__toast--stacked"),_>0&&(E.dataset.collapsed=`${r}`),E.dataset.pos||(E.dataset.pos=x?"top":"bot");let M=w*(r?.2:1)+(r?0:m*_);E.style.setProperty("--y",`${x?M:M*-1}px`),E.style.setProperty("--g",`${m}`),E.style.setProperty("--s",`${1-(r?C:0)}`),w+=E.offsetHeight,C+=.025})}},[r,s,n]),b.useEffect(()=>{function S(p){var m;let x=o.current;h(p)&&((m=x.querySelector('[tabIndex="0"]'))==null||m.focus(),i(!1),te.pause()),p.key==="Escape"&&(document.activeElement===x||x!=null&&x.contains(document.activeElement))&&(i(!0),te.play())}return document.addEventListener("keydown",S),()=>{document.removeEventListener("keydown",S)}},[h]),W.createElement("section",{ref:o,className:"Toastify",id:f,onMouseEnter:()=>{n&&(i(!1),te.pause())},onMouseLeave:v,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((S,p)=>{let m=p.length?{...c}:{...c,pointerEvents:"none"};return W.createElement("div",{tabIndex:-1,className:g(S),"data-stacked":n,style:m,key:`c-${S}`},p.map(({content:x,props:w})=>W.createElement(Rj,{...w,stacked:n,collapseAll:v,isIn:l(w.toastId,w.containerId),key:`t-${w.key}`},x)))}))}const Ea="/Didiv/assets/nofoto-2f8d9d99.png",zj=()=>{const e=no(),[t,n]=b.useState([]);b.useEffect(()=>{fetch("https://backenddidiv-production.up.railway.app/api/products?populate=*").then(o=>o.json()).then(o=>{const a=o.data,l=new Date,s=new Date(l);s.setDate(l.getDate()-1);const u=a.filter(c=>new Date(c.createdAt)>=s);n(u)})},[]),console.log(t);const r=[...t].sort(()=>Math.random()-.5).slice(0,3),i=o=>{e(oc({...o,quantity:1})),te.success(`${o.name} додано в кошик!`)};return!t||t.length===0?null:y.jsxs(JI,{children:[y.jsx(Na,{}),y.jsx(e5,{children:"Нові товари"}),y.jsxs(t5,{children:[r.map(o=>{var a;return y.jsxs(n5,{children:[y.jsxs(r5,{to:`/product/${o.id}`,children:[y.jsx(i5,{children:"Новинка"}),y.jsx("img",{src:`https://backenddidiv-production.up.railway.app${(a=o.images)==null?void 0:a[0].url}`||Ea,alt:o.name,onError:l=>{l.currentTarget.onerror=null,l.currentTarget.src=Ea}}),y.jsx("div",{className:"overlay"})]}),y.jsxs(o5,{children:[y.jsx(a5,{children:o.name}),y.jsxs(s5,{children:[y.jsxs(l5,{children:[o.price," грн"]}),y.jsx(u5,{onClick:()=>i(o),children:y.jsx(Eu,{size:22})})]})]})]},o.id)}),y.jsx(c5,{to:"/catalog/new",children:y.jsxs(d5,{children:[y.jsx("p",{children:"Усі новинки"}),y.jsx(f5,{children:y.jsx(wb,{size:24})})]})})]})]})},Vj=T.div`
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
`,PS=()=>y.jsxs(Vj,{children:[y.jsxs(xd,{children:[y.jsx(bd,{children:"3000+"}),y.jsx(wd,{children:"Перевірених деталей"})]}),y.jsxs(xd,{children:[y.jsx(bd,{children:"6 років"}),y.jsx(wd,{children:"Досвіду на ринку"})]}),y.jsxs(xd,{children:[y.jsx(bd,{children:"100%"}),y.jsx(wd,{children:"Контроль якості"})]})]}),Bj=Fe.div`
  background:var(--background-color);
`,Uj=Fe.div`
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
`;const Hj=()=>y.jsx(Bj,{children:y.jsxs(Uj,{children:[y.jsx(QI,{}),y.jsx(PS,{}),y.jsx(zj,{}),y.jsx(mM,{})]})}),Wj=T.div`
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
`,qj=T.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,Xj=T.button`
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
`,MS=T.button`
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
`,IS={bikes:[{type:"checkbox",name:"brand",label:"Бренд"},{type:"checkbox",name:"wheelSize",label:"Розмір колеса"},{type:"range",name:"price",label:"Ціна"}],saddles:[{type:"checkbox",name:"gender",label:"Тип (чол/жін)"},{type:"checkbox",name:"material",label:"Матеріал"},{type:"range",name:"price",label:"Ціна"}],handlebars:[{type:"checkbox",name:"width",label:"Ширина"},{type:"checkbox",name:"material",label:"Матеріал"}],wheels:[{type:"checkbox",name:"brand",label:"Бренд",options:["Shimano","Campagnolo","SRAM"]},{type:"checkbox",name:"size",label:"Розмір колеса",options:["26`","27.5`","29`"]},{type:"range",name:"price",label:"Ціна, грн",min:100,max:1e4},{type:"range",name:"weight",label:"Вага, грам",min:1,max:1e5}]};var vp={},um={},cm={},ao={};Object.defineProperty(ao,"__esModule",{value:!0});ao.Direction=void 0;var pv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(pv||(ao.Direction=pv={}));(function(e){var t=J&&J.__spreadArray||function(P,j,R){if(R||arguments.length===2)for(var L=0,F=j.length,A;L<F;L++)(A||!(L in j))&&(A||(A=Array.prototype.slice.call(j,0,L)),A[L]=j[L]);return P.concat(A||Array.prototype.slice.call(j))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=b,r=ao,i=function(P){var j=P.toString().split(".")[1];return j?j.length:0};e.getStepDecimals=i;function o(P){return P.touches&&P.touches.length||P.changedTouches&&P.changedTouches.length}e.isTouchEvent=o;function a(P,j,R){var L=(j-P)/R,F=8,A=Number(L.toFixed(F));return parseInt(A.toString(),10)===A}e.isStepDivisible=a;function l(P,j,R,L,F,A,O){var D=1e11;if(P=Math.round(P*D)/D,!A){var N=O[j-1],B=O[j+1];if(N&&N>P)return N;if(B&&B<P)return B}if(P>L)return L;if(P<R)return R;var z=Math.floor(P*D-R*D)%Math.floor(F*D),G=Math.floor(P*D-Math.abs(z)),Q=z===0?P:G/D,Z=Math.abs(z/D)<F/2?Q:Q+F,K=(0,e.getStepDecimals)(F);return parseFloat(Z.toFixed(K))}e.normalizeValue=l;function s(P,j,R){return(P-j)/(R-j)}e.relativeValue=s;function u(P){return P===r.Direction.Up||P===r.Direction.Down}e.isVertical=u;function c(P,j,R){if(j>=R)throw new RangeError("min (".concat(j,") is equal/bigger than max (").concat(R,")"));if(P<j)throw new RangeError("value (".concat(P,") is smaller than min (").concat(j,")"));if(P>R)throw new RangeError("value (".concat(P,") is bigger than max (").concat(R,")"))}e.checkBoundaries=c;function d(P,j,R){return P<j?j:P>R?R:P}e.checkValuesAgainstBoundaries=d;function f(P){if(!(P.length<2)&&!P.slice(1).every(function(j,R){return P[R]<=j}))throw new RangeError("values={[".concat(P,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=f;function h(P){var j=window.getComputedStyle(P);return{top:parseInt(j["margin-top"],10),bottom:parseInt(j["margin-bottom"],10),left:parseInt(j["margin-left"],10),right:parseInt(j["margin-right"],10)}}e.getMargin=h;function g(P){var j=window.getComputedStyle(P);return{top:parseInt(j["padding-top"],10)+parseInt(j["border-top-width"],10),bottom:parseInt(j["padding-bottom"],10)+parseInt(j["border-bottom-width"],10),left:parseInt(j["padding-left"],10)+parseInt(j["border-left-width"],10),right:parseInt(j["padding-right"],10)+parseInt(j["border-right-width"],10)}}e.getPaddingAndBorder=g;function v(P,j,R){var L=R?-1:1;P.forEach(function(F,A){return p(F,L*j[A].x,j[A].y)})}e.translateThumbs=v;function S(P,j,R,L){for(var F=0,A=I(P[0],j,R,L),O=1;O<P.length;O++){var D=I(P[O],j,R,L);D<A&&(A=D,F=O)}return F}e.getClosestThumbIndex=S;function p(P,j,R){P.style.transform="translate(".concat(j,"px, ").concat(R,"px)")}e.translate=p;var m=function(P){var j=[],R=null,L=function(){for(var F=[],A=0;A<arguments.length;A++)F[A]=arguments[A];j=F,!R&&(R=requestAnimationFrame(function(){R=null,P.apply(void 0,j)}))};return L};e.schd=m;function x(P,j,R){var L=P.slice(0);return L[j]=R,L}e.replaceAt=x;function w(P){var j=P.values,R=P.colors,L=P.min,F=P.max,A=P.direction,O=A===void 0?r.Direction.Right:A,D=P.rtl,N=D===void 0?!1:D;N&&O===r.Direction.Right?O=r.Direction.Left:N&&r.Direction.Left&&(O=r.Direction.Right);var B=j.slice(0).sort(function(G,Q){return G-Q}).map(function(G){return(G-L)/(F-L)*100}),z=B.reduce(function(G,Q,Z){return"".concat(G,", ").concat(R[Z]," ").concat(Q,"%, ").concat(R[Z+1]," ").concat(Q,"%")},"");return"linear-gradient(".concat(O,", ").concat(R[0]," 0%").concat(z,", ").concat(R[R.length-1]," 100%)")}e.getTrackBackground=w;function C(){}e.voidFn=C;function k(P){throw new Error("Didn't expect to get here")}e.assertUnreachable=k;var _=function(P,j,R,L,F){F===void 0&&(F=function(O){return O});var A=Math.ceil(t([P],Array.from(P.children),!0).reduce(function(O,D){var N=Math.ceil(D.getBoundingClientRect().width);if(D.innerText&&D.innerText.includes(R)&&D.childElementCount===0){var B=D.cloneNode(!0);B.innerHTML=F(j.toFixed(L)),B.style.visibility="hidden",document.body.appendChild(B),N=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return N>O?N:O},P.getBoundingClientRect().width));return A},E=function(P,j,R,L,F,A,O){O===void 0&&(O=function(B){return B});var D=[],N=function(B){var z=_(R[B],L[B],F,A,O),G=j[B].x;j.forEach(function(Q,Z){var K=Q.x,re=_(R[Z],L[Z],F,A,O);B!==Z&&(G>=K&&G<=K+re||G+z>=K&&G+z<=K+re)&&(D.includes(Z)||(D.push(B),D.push(Z),D=t(t([],D,!0),[B,Z],!1),N(Z)))})};return N(P),Array.from(new Set(D.sort()))},M=function(P,j,R,L,F,A){L===void 0&&(L=.1),F===void 0&&(F=" - "),A===void 0&&(A=function(Z){return Z});var O=(0,e.getStepDecimals)(L),D=(0,n.useState)({}),N=D[0],B=D[1],z=(0,n.useState)(A(j[R].toFixed(O))),G=z[0],Q=z[1];return(0,n.useEffect)(function(){if(P){var Z=P.getThumbs();if(Z.length<1)return;var K={},re=P.getOffsets(),we=E(R,re,Z,j,F,O,A),Xe=A(j[R].toFixed(O));if(we.length){var Pe=we.reduce(function(pt,lo,Va,uo){return pt.length?t(t([],pt,!0),[re[uo[Va]].x],!1):[re[uo[Va]].x]},[]);if(Math.min.apply(Math,Pe)===re[R].x){var qt=[];we.forEach(function(pt){qt.push(j[pt].toFixed(O))}),Xe=Array.from(new Set(qt.sort(function(pt,lo){return parseFloat(pt)-parseFloat(lo)}))).map(A).join(F);var Ft=Math.min.apply(Math,Pe),kt=Math.max.apply(Math,Pe),ni=Z[we[Pe.indexOf(kt)]].getBoundingClientRect().width;K.left="".concat(Math.abs(Ft-(kt+ni))/2,"px"),K.transform="translate(-50%, 0)"}else K.visibility="hidden"}Q(Xe),B(K)}},[P,j]),[G,N]};e.useThumbOverlap=M;function I(P,j,R,L){var F=P.getBoundingClientRect(),A=F.left,O=F.top,D=F.width,N=F.height;return u(L)?Math.abs(R-(O+N/2)):Math.abs(j-(A+D/2))}var $=function(){var P,j=((P=navigator.userAgentData)===null||P===void 0?void 0:P.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(j)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=$})(cm);var d$=J&&J.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),f$=J&&J.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),p$=J&&J.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),h$=J&&J.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&f$(t,e,n);return p$(t,e),t},hv=J&&J.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(um,"__esModule",{value:!0});var gs=h$(b),ie=cm,De=ao,m$=["ArrowRight","ArrowUp","k","PageUp"],g$=["ArrowLeft","ArrowDown","j","PageDown"],v$=function(e){d$(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=gs.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,u=r.trackRef.current;if(!u)return console.warn("No track element found."),[];var c=u.getBoundingClientRect(),d=(0,ie.getPaddingAndBorder)(u);return r.getThumbs().map(function(f,h){var g={x:0,y:0},v=f.getBoundingClientRect(),S=(0,ie.getMargin)(f);switch(o){case De.Direction.Right:return g.x=(S.left+d.left)*-1,g.y=((v.height-c.height)/2+d.top)*-1,g.x+=c.width*(0,ie.relativeValue)(a[h],l,s)-v.width/2,g;case De.Direction.Left:return g.x=(S.right+d.right)*-1,g.y=((v.height-c.height)/2+d.top)*-1,g.x+=c.width-c.width*(0,ie.relativeValue)(a[h],l,s)-v.width/2,g;case De.Direction.Up:return g.x=((v.width-c.width)/2+S.left+d.left)*-1,g.y=-d.left,g.y+=c.height-c.height*(0,ie.relativeValue)(a[h],l,s)-v.height/2,g;case De.Direction.Down:return g.x=((v.width-c.width)/2+S.left+d.left)*-1,g.y=-d.left,g.y+=c.height*(0,ie.relativeValue)(a[h],l,s)-v.height/2,g;default:return(0,ie.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,ie.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,ie.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,ie.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,ie.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,ie.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,u=o.rtl,c=o.direction,d=r.state.isChanged,f=r.getTargetIndex(i.nativeEvent),h=u||c===De.Direction.Left||c===De.Direction.Down?-1:1;f!==-1&&(m$.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:f,isChanged:!0}),l((0,ie.replaceAt)(a,f,r.normalizeValue(a[f]+h*(i.key==="PageUp"?s*10:s),f)))):g$.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:f,isChanged:!0}),l((0,ie.replaceAt)(a,f,r.normalizeValue(a[f]-h*(i.key==="PageDown"?s*10:s),f)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){d&&r.fireOnFinalChange()}):d&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,u=r.props,c=u.direction,d=u.min,f=u.max,h=u.onChange,g=u.values,v=u.step,S=u.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var p=r.trackRef.current;if(!p)return null;var m=p.getBoundingClientRect(),x=(0,ie.isVertical)(c)?m.height:m.width;if(s[0]!==-1&&s[1]!==-1){var w=i-s[0],C=o-s[1],k=0;switch(c){case De.Direction.Right:case De.Direction.Left:k=w/x*(f-d);break;case De.Direction.Down:case De.Direction.Up:k=C/x*(f-d);break;default:(0,ie.assertUnreachable)(c)}if(S&&(k*=-1),Math.abs(k)>=v/2){for(var _=0;_<r.thumbRefs.length;_++){if(g[_]===f&&Math.sign(k)===1||g[_]===d&&Math.sign(k)===-1)return;var E=g[_]+k;E>f?k=f-g[_]:E<d&&(k=d-g[_])}for(var M=g.slice(0),_=0;_<r.thumbRefs.length;_++)M=(0,ie.replaceAt)(M,_,r.normalizeValue(g[_]+k,_));r.setState({draggedTrackPos:[i,o]}),h(M)}}else{var I=0;switch(c){case De.Direction.Right:I=(i-m.left)/x*(f-d)+d;break;case De.Direction.Left:I=(x-(i-m.left))/x*(f-d)+d;break;case De.Direction.Down:I=(o-m.top)/x*(f-d)+d;break;case De.Direction.Up:I=(x-(o-m.top))/x*(f-d)+d;break;default:(0,ie.assertUnreachable)(c)}S&&(I=f+d-I),Math.abs(g[l]-I)>=v/2&&h((0,ie.replaceAt)(g,l,r.normalizeValue(I,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,u=a.step,c=a.allowOverlap,d=a.values;return(0,ie.normalizeValue)(i,o,l,s,u,c,d)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=gs.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),u=[],c=0;c<r.numOfMarks+1;c++){var d=9999,f=9999;if(r.markRefs[c].current){var h=r.markRefs[c].current.getBoundingClientRect();d=h.height,f=h.width}r.props.direction===De.Direction.Left||r.props.direction===De.Direction.Right?u.push([Math.round(o/r.numOfMarks*c+l-f/2),-Math.round((d-a)/2)]):u.push([Math.round(a/r.numOfMarks*c+s-d/2),-Math.round((f-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,ie.schd)(r.onMouseMove),r.schdOnTouchMove=(0,ie.schd)(r.onTouchMove),r.schdOnEnd=(0,ie.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return gs.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,ie.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,ie.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,ie.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,ie.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,ie.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(c){(0,ie.isStepDivisible)(a,c,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,u=s===void 0?function(){return null}:s,c=r.values,d=r.min,f=r.max,h=r.allowOverlap,g=r.disabled,v=this.state,S=v.draggedThumbIndex,p=v.thumbZIndexes,m=v.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:S>-1?"grabbing":this.props.draggableTrack?(0,ie.isVertical)(this.props.direction)?"ns-resize":"ew-resize":c.length===1&&!g?"pointer":"inherit"},onMouseDown:g?ie.voidFn:this.onMouseDownTrack,onTouchStart:g?ie.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:g,children:hv(hv([],m.map(function(x,w,C){return u({props:{style:n.props.direction===De.Direction.Left||n.props.direction===De.Direction.Right?{position:"absolute",left:"".concat(x[0],"px"),marginTop:"".concat(x[1],"px")}:{position:"absolute",top:"".concat(x[0],"px"),marginLeft:"".concat(x[1],"px")},key:"mark".concat(w),ref:n.markRefs[w]},index:w})}),!0),c.map(function(x,w){var C=n.state.draggedThumbIndex===w;return l({index:w,value:x,isDragged:C,props:{style:{position:"absolute",zIndex:p[w],cursor:g?"inherit":C?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:w,tabIndex:g?void 0:0,"aria-valuemax":h?f:c[w+1]||f,"aria-valuemin":h?d:c[w-1]||d,"aria-valuenow":x,draggable:!1,ref:n.thumbRefs[w],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:g?ie.voidFn:n.onKeyDown,onKeyUp:g?ie.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:De.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(gs.Component);um.default=v$;(function(e){var t=J&&J.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(um);e.Range=n.default;var r=cm;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=ao;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(vp);const y$=T.div`
  padding: 20px 0;
`,x$=T.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,mv=T.input`
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
`,ai=1340,si=100340,ko=100,jS=()=>{const[e,t]=b.useState([ai,si]),n=(i,o)=>{const a=o===""?"":Number(o);t(l=>{const s=[...l];return s[i]=a,s})},r=i=>{t(o=>{const a=[...o];return i===0?((a[0]===""||a[0]<ai)&&(a[0]=ai),a[0]>o[1]-ko&&(a[0]=o[1]-ko)):((a[1]===""||a[1]>si)&&(a[1]=si),a[1]<o[0]+ko&&(a[1]=o[0]+ko)),a})};return y.jsxs(y$,{children:[y.jsxs(x$,{children:[y.jsx(mv,{type:"number",value:e[0],min:ai,max:e[1],onChange:i=>n(0,i.target.value),onBlur:()=>r(0)}),y.jsx(mv,{type:"number",value:e[1],min:e[0],max:si,onChange:i=>n(1,i.target.value),onBlur:()=>r(1)})]}),y.jsx(vp.Range,{values:e,step:ko,min:ai,max:si,onChange:i=>t(i),renderTrack:({props:i,children:o})=>y.jsx(b$,{...i,background:vp.getTrackBackground({values:e,colors:["#ddd","#85683d","#ddd"],min:ai,max:si}),children:o}),renderThumb:({props:i})=>y.jsx(w$,{...i})})]})},S$=({category:e,selectedFilters:t,setSelectedFilters:n})=>{const r=IS[e]||[],[i,o]=b.useState({}),a=c=>{o(d=>({...d,[c]:!d[c]}))},l=(c,d)=>{n(f=>{const h=f[c]||[];return h.includes(d)?{...f,[c]:h.filter(g=>g!==d)}:{...f,[c]:[...h,d]}})},s=Object.values(t).some(c=>Array.isArray(c)&&c.length>0),u=()=>{s&&n({})};return console.log(s),y.jsxs(n$,{children:[y.jsxs(r$,{children:["Фільтри ",y.jsx(_b,{size:20})]}),(r||[]).map(c=>{var f;const d=!!i[c.name];return y.jsxs(i$,{children:[y.jsxs(o$,{onClick:()=>a(c.name),children:[y.jsx(a$,{children:c.label}),y.jsx(s$,{isOpen:d})]}),y.jsxs(l$,{isOpen:d,children:[c.type==="checkbox"&&((f=c.options)==null?void 0:f.map(h=>{var g;return y.jsxs(u$,{children:[y.jsx(gp,{checked:((g=t[c.name])==null?void 0:g.includes(h))||!1,onChange:()=>l(c.name,h)}),y.jsx(c$,{}),h]},h)})),c.type==="range"&&y.jsx(jS,{})]})]},c.name)}),y.jsx(MS,{onClick:u,disabled:!s,children:"Скинути обрані фільтри"})]})},_$=T.aside`
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
`,I$=({category:e,selectedFilters:t,setSelectedFilters:n})=>{const r=IS[e]||[],[i,o]=b.useState({}),a=s=>{o(u=>({...u,[s]:!u[s]}))},l=(s,u)=>{n(c=>{const d=c[s]||[];return d.includes(u)?{...c,[s]:d.filter(f=>f!==u)}:{...c,[s]:[...d,u]}})};return y.jsx(_$,{children:(r||[]).map(s=>{var c;const u=!!i[s.name];return y.jsxs(E$,{children:[y.jsxs(C$,{onClick:()=>a(s.name),children:[y.jsx(k$,{children:s.label}),y.jsx(T$,{isOpen:u})]}),y.jsxs(O$,{isOpen:u,children:[s.type==="checkbox"&&((c=s.options)==null?void 0:c.map(d=>{var f;return y.jsxs(P$,{children:[y.jsx(yp,{checked:((f=t[s.name])==null?void 0:f.includes(d))||!1,onChange:()=>l(s.name,d)}),y.jsx(M$,{}),d]},d)})),s.type==="range"&&y.jsx(jS,{})]})]},s.name)})})};T.div``;const j$=T.div`
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
`,gv=T.button`
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
`;const $S=bS({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]}}}),{toggleFavorite:uc,clearFavorite:z$}=$S.actions,V$=$S.reducer,B$=({category:e,selectedFilters:t={}})=>{const[n,r]=b.useState([]),[i,o]=b.useState(!0);b.useEffect(()=>{(async()=>{try{o(!0);const g=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][id_title][$eq]=${encodeURIComponent(e)}`)).json();r(g.data)}catch(h){console.error("Error fetching products:",h)}finally{o(!1)}})()},[e]);let a=n;const l=nu(),s=no(),u=Nn(f=>f.favorites.items),c=(f,h)=>{h.stopPropagation(),s(oc({...f,quantity:1})),te.success(`${f.name} додано в кошик!`)},d=(f,h)=>{h.stopPropagation();const g=u.some(v=>v.id===f.id);s(uc(f)),g?te.warning(`${f.name} видалено з обраного`):te.info(`${f.name} додано в обране`)};return Object.keys(t).forEach(f=>{const h=t[f];Array.isArray(h)&&h.length>0&&(a=a.filter(g=>h.includes(g[f]))),(typeof h=="string"||typeof h=="number")&&f==="price"&&(a=a.filter(g=>g.price<=Number(h)))}),i?y.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:y.jsx(Kh,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):y.jsxs(y.Fragment,{children:[y.jsx(Na,{autoClose:1500}),y.jsx(j$,{children:a.map(f=>{const h=u.some(g=>g.id===f.id);return y.jsxs($$,{onClick:()=>l(`/product/${f.id}`),style:{cursor:"pointer"},children:[y.jsx(D$,{src:f.images[0].url,alt:f.name,onError:g=>{g.currentTarget.onerror=null,g.currentTarget.src=Ea}}),y.jsxs(L$,{children:[y.jsx(R$,{children:f.name}),y.jsxs(A$,{children:[f.price," грн"]}),f.weight&&y.jsxs(F$,{children:[f.weight," грам"]})]}),y.jsxs(N$,{children:[y.jsx(gv,{onClick:g=>c(f,g),children:y.jsx(Eu,{size:24,color:"black"})}),y.jsx(gv,{onClick:g=>d(f,g),children:y.jsx(Sb,{size:24,fill:h?"#ff4d4f":"none",color:h?"#ff4d4f":"#000000"})})]})]},f.id)})})]})},U$=()=>{const[e,t]=b.useState({});console.log(e);const{category:n}=N1(),[r,i]=b.useState(!1);console.log(n);const o=Object.values(e).some(l=>Array.isArray(l)&&l.length>0),a=()=>{o&&t({})};return y.jsxs(Wj,{children:[y.jsxs(Gj,{children:[y.jsxs(Yj,{onClick:()=>i(!0),children:["Фільтр",y.jsx(qj,{children:y.jsx("use",{href:`${cn}#icon-filter`})})]}),y.jsxs(Xj,{onClick:()=>i(!0),children:["Сортування",y.jsx(Kj,{children:y.jsx("use",{href:`${cn}#icon-sort`})})]})]}),y.jsx(S$,{category:n,selectedFilters:e,setSelectedFilters:t}),y.jsx(B$,{category:n,selectedFilters:e}),r&&y.jsx(Zj,{onClick:()=>i(!1),open:r,children:y.jsxs(Qj,{onClick:l=>l.stopPropagation(),open:r,children:[y.jsxs(Jj,{children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[y.jsx(_b,{size:20}),y.jsx("h2",{children:"Фільтри"})]}),y.jsx(Cb,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),y.jsx(I$,{category:n,selectedFilters:e,setSelectedFilters:t}),y.jsxs(e$,{children:[y.jsx(MS,{onClick:a,disabled:!o,children:"Скинути обрані фільтри"}),y.jsx(t$,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})},vv=T.div`
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
`,H$=T.div`
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
`,q$=T.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,X$=T.img`
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
`,yv=T.button`
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
`,DS="carousel",LS="controller",hD="navigation",mD="no-scroll",dm="portal",gD="root",RS="toolbar",xv="zoom",Sd="loading",_d="error",Ed="complete",vD="placeholder",yD=e=>`active-slide-${e}`,xD="fullsize",fm="flex_center",bD="no_scroll",AS="no_scroll_padding",pm="slide",FS="slide_wrapper",wD="slide_wrapper_interactive",Dr="prev",Lr="next",bv="swipe",Yi="close",NS="onPointerDown",zS="onPointerMove",VS="onPointerUp",BS="onPointerLeave",US="onPointerCancel",hm="onKeyDown",SD="onKeyUp",mm="onWheel",_D="Escape",ED="ArrowLeft",CD="ArrowRight",kD="button",xp="icon",HS="contain",wv="cover",WS="Unknown action type",GS="yarl__";function Cn(...e){return e.filter(Boolean).join(" ")}function oe(e){return`${GS}${e}`}function gt(e){return`--${GS}${e}`}function za(e,t){return`${e}${t?`_${t}`:""}`}function gm(e){return t=>za(e,t)}function qi(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function TD(e,t,n){return qi(e,"{index} of {total}").replace(/\{index}/g,`${wm(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function vm(...e){return()=>{e.forEach(t=>{t()})}}function Zn(e,t,n){return()=>{const r=b.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function ym(){return typeof window<"u"}function xm(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function so(e){return e.type===void 0||e.type==="image"}function bm(e,t){return e.imageFit===wv||e.imageFit!==HS&&t===wv}function cc(e){return typeof e=="string"?Number.parseInt(e,10):e}function Hl(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=cc(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function OD(e,t){const n=Hl(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function PD(){return(ym()?window==null?void 0:window.devicePixelRatio:void 0)||1}function wm(e,t){return t>0?(e%t+t)%t:0}function YS(e){return e.length>0}function qS(e,t){return e[wm(t,e.length)]}function bp(e,t){return YS(e)?qS(e,t):void 0}function MD(e){return so(e)?e.src:void 0}function ID(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=b.isValidElement(n)?b.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function jD(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const $D=Number(b.version.split(".")[0])>=19;function DD(e){return{inert:$D?e:e?"":void 0}}function LD(e){e.scrollTop}const wp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[Yi]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:HS,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Tr(e,t){return{name:e,component:t}}function Ne(e,t){return{module:e,children:t}}function XS(e,t,n){return e.module.name===t?n(e):e.children?[Ne(e.module,e.children.flatMap(r=>{var i;return(i=XS(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function li(e,t,n){return e.flatMap(r=>{var i;return(i=XS(r,t,n))!==null&&i!==void 0?i:[]})}function RD(e,t=[],n=[]){let r=e;const i=h=>{const g=[...r];for(;g.length>0;){const v=g.pop();if((v==null?void 0:v.module.name)===h)return!0;v!=null&&v.children&&g.push(...v.children)}return!1},o=(h,g)=>{if(h===""){r=[Ne(g,r)];return}r=li(r,h,v=>[Ne(g,[v])])},a=(h,g)=>{r=li(r,h,v=>[Ne(v.module,[Ne(g,v.children)])])},l=(h,g,v)=>{r=li(r,h,S=>{var p;return[Ne(S.module,[...v?[Ne(g)]:[],...(p=S.children)!==null&&p!==void 0?p:[],...v?[]:[Ne(g)]])]})},s=(h,g,v)=>{r=li(r,h,S=>[...v?[Ne(g)]:[],S,...v?[]:[Ne(g)]])},u=h=>{a(LS,h)},c=(h,g)=>{r=li(r,h,v=>[Ne(g,v.children)])},d=h=>{r=li(r,h,g=>g.children)},f=h=>{n.push(h)};return t.forEach(h=>{h({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:u,replace:c,remove:d,augment:f})}),{config:r,augmentation:h=>n.reduce((g,v)=>v(g),h)}}const KS=b.createContext(null),ZS=Zn("useA11yContext","A11yContext",KS);function AD({children:e}){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const u=c=>d=>{var f;d.currentTarget.contains(d.relatedTarget)||n(c),(f=c?l:s)===null||f===void 0||f(d)};return{onFocus:u(!0),onBlur:u(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return b.createElement(KS.Provider,{value:o},e)}const QS=b.createContext(null),dc=Zn("useDocument","DocumentContext",QS);function FD({nodeRef:e,children:t}){const n=b.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return b.createElement(QS.Provider,{value:n},t)}const JS=b.createContext(null),fc=Zn("useEvents","EventsContext",JS);function ND({children:e}){const[t]=b.useState({});b.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=b.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(u=>u!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(u=>u(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return b.createElement(JS.Provider,{value:n},e)}const e_=b.createContext(null),Yt=Zn("useLightboxProps","LightboxPropsContext",e_);function zD({children:e,...t}){return b.createElement(e_.Provider,{value:t},e)}const t_=b.createContext(null),Or=Zn("useLightboxState","LightboxStateContext",t_),n_=b.createContext(null),VD=Zn("useLightboxDispatch","LightboxDispatchContext",n_);function BD(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=wm(i,n.length),a=bp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:bp(t.slides,t.index)}:e;default:throw new Error(WS)}}function UD({slides:e,index:t,children:n}){const[r,i]=b.useReducer(BD,{slides:e,currentIndex:t,globalIndex:t,currentSlide:bp(e,t)}),[o,a]=b.useState(e),[l,s]=b.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const u=b.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return b.createElement(n_.Provider,{value:i},b.createElement(t_.Provider,{value:u},n))}const r_=b.createContext(null),pc=Zn("useTimeouts","TimeoutsContext",r_);function HD({children:e}){const[t]=b.useState([]);b.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=b.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return b.createElement(r_.Provider,{value:n},e)}const Sm=b.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:u,labels:c}=Yt(),d=qi(c,t);return b.createElement("button",{ref:s,type:"button",title:d,"aria-label":d,className:Cn(oe(kD),n),onClick:o,style:{...a,...u.button},...l},i?i():b.createElement(r,{className:oe(xp),style:u.icon}))});function WD(e,t){const n=r=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function ti(e,t){return WD(e,b.createElement("g",{fill:"currentColor"},b.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const GD=ti("Close",b.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),YD=ti("Previous",b.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),qD=ti("Next",b.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),XD=ti("Loading",b.createElement(b.Fragment,null,Array.from({length:8}).map((e,t,n)=>b.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),KD=ti("Error",b.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),kn=ym()?b.useLayoutEffect:b.useEffect;function _m(){const[e,t]=b.useState(!1);return b.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function ZD(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(cc);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function Sv(e,t){const n=b.useRef(void 0),r=b.useRef(void 0),i=_m();return kn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:u,easing:c,onfinish:d}=t(n.current,e.current.getBoundingClientRect(),ZD(e.current))||{};if(s&&u){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:u,easing:c})}catch(f){console.error(f)}r.current&&(r.current.onfinish=()=>{r.current=void 0,d==null||d()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function i_(){const e=b.useRef(null),t=b.useRef(void 0),[n,r]=b.useState();return{setContainerRef:b.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=u=>parseFloat(u)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function Xs(){const e=b.useRef(void 0),{setTimeout:t,clearTimeout:n}=pc();return b.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function de(e){const t=b.useRef(e);return kn(()=>{t.current=e}),b.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function _v(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Sp(e,t){return b.useMemo(()=>e==null&&t==null?null:n=>{_v(e,n),_v(t,n)},[e,t])}function QD(e,t=!1){const n=b.useRef(!1);kn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=b.useCallback(()=>{n.current=!0},[]),i=b.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function Em(){const[e,t]=b.useState(!1);return kn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function JD(){const[e]=b.useState({}),t=b.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=b.useMemo(()=>({onPointerDown:i=>t(NS,i),onPointerMove:i=>t(zS,i),onPointerUp:i=>t(VS,i),onPointerLeave:i=>t(BS,i),onPointerCancel:i=>t(US,i),onKeyDown:i=>t(hm,i),onKeyUp:i=>t(SD,i),onWheel:i=>t(mm,i)}),[t]),r=b.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function Ev(e,t){const n=b.useRef(0),r=Xs(),i=de((...o)=>{n.current=Date.now(),e(o)});return b.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const Cd=gm("slide"),kd=gm("slide_image");function Wl({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:u}){var c,d,f,h,g,v,S,p;const[m,x]=b.useState(Sd),{publish:w}=fc(),{setTimeout:C}=pc(),k=b.useRef(null);b.useEffect(()=>{t===0&&w(yD(m))},[t,m,w]);const _=de(z=>{("decode"in z?z.decode():Promise.resolve()).catch(()=>{}).then(()=>{z.parentNode&&(x(Ed),C(()=>{l==null||l(z)},0))})}),E=b.useCallback(z=>{k.current=z,z!=null&&z.complete&&_(z)},[_]),M=b.useCallback(z=>{_(z.currentTarget)},[_]),I=de(()=>{x(_d),s==null||s()}),$=bm(e,i),P=(z,G)=>Number.isFinite(z)?z:G,j=P(Math.max(...((d=(c=e.srcSet)===null||c===void 0?void 0:c.map(z=>z.width))!==null&&d!==void 0?d:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((f=k.current)===null||f===void 0?void 0:f.naturalWidth)||0),R=P(Math.max(...((g=(h=e.srcSet)===null||h===void 0?void 0:h.map(z=>z.height))!==null&&g!==void 0?g:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((v=k.current)===null||v===void 0?void 0:v.naturalHeight)||0),L=j&&R?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${R}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},F=(S=e.srcSet)===null||S===void 0?void 0:S.slice().sort((z,G)=>z.width-G.width).map(z=>`${z.src} ${z.width}w`).join(", "),A=()=>r&&!$&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,O=F&&r&&ym()?`${Math.round(Math.min(A(),r.width))}px`:void 0,{style:D,className:N,...B}=(typeof o=="function"?o(e):o)||{};return b.createElement(b.Fragment,null,b.createElement("img",{ref:E,onLoad:M,onError:I,onClick:a,draggable:!1,className:Cn(oe(kd()),$&&oe(kd("cover")),m!==Ed&&oe(kd("loading")),N),style:{...L,...u,...D},...B,alt:(p=e.alt)!==null&&p!==void 0?p:"",sizes:O,srcSet:F,src:e.src}),m!==Ed&&b.createElement("div",{className:oe(Cd(vD))},m===Sd&&(n!=null&&n.iconLoading?n.iconLoading():b.createElement(XD,{className:Cn(oe(xp),oe(Cd(Sd)))})),m===_d&&(n!=null&&n.iconError?n.iconError():b.createElement(KD,{className:Cn(oe(xp),oe(Cd(_d)))}))))}const eL=b.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=b.useRef(null),{trackFocusWithin:s}=ZS();return b.createElement(FD,{nodeRef:l},b.createElement("div",{ref:Sp(a,l),className:Cn(oe("root"),t),...s(r,i),...o},n))});var et;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(et||(et={}));function o_(e,t,n,r,i){b.useEffect(()=>i?()=>{}:vm(e(NS,t),e(zS,n),e(VS,r),e(BS,r),e(US,r)),[e,t,n,r,i])}var Qt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(Qt||(Qt={}));const Td=30;function tL({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,u,c,d,f,h,g,v,S){const p=b.useRef(0),m=b.useRef([]),x=b.useRef(void 0),w=b.useRef(0),C=b.useRef(Qt.NONE),k=b.useCallback(j=>{x.current===j.pointerId&&(x.current=void 0,C.current=Qt.NONE);const R=m.current;R.splice(0,R.length,...R.filter(L=>L.pointerId!==j.pointerId))},[]),_=b.useCallback(j=>{k(j),j.persist(),m.current.push(j)},[k]),E=b.useCallback(j=>m.current.find(({pointerId:R})=>j.pointerId===R),[]),M=de(j=>{_(j)}),I=(j,R)=>d&&j>R||c&&j<-R,$=de(j=>{const R=E(j);if(R)if(x.current===j.pointerId){const L=Date.now()-w.current,F=p.current;C.current===Qt.SWIPE?Math.abs(F)>.3*i||Math.abs(F)>5&&L<o?s(F,L):u(F):C.current===Qt.PULL&&(I(F,2*Td)?g(F,L):v(F)),p.current=0,C.current=Qt.NONE}else{const{target:L}=j;t&&L instanceof HTMLElement&&L===R.target&&(L.classList.contains(oe(pm))||L.classList.contains(oe(FS)))&&S()}k(j)}),P=de(j=>{const R=E(j);if(R){const L=x.current===j.pointerId;if(j.buttons===0){L&&p.current!==0?$(j):k(R);return}const F=j.clientX-R.clientX,A=j.clientY-R.clientY;if(x.current===void 0){const O=D=>{_(j),x.current=j.pointerId,w.current=Date.now(),C.current=D};Math.abs(F)>Math.abs(A)&&Math.abs(F)>Td&&r(F)?e||(O(Qt.SWIPE),a()):Math.abs(A)>Math.abs(F)&&I(A,Td)&&(O(Qt.PULL),f())}else L&&(C.current===Qt.SWIPE?(p.current=F,l(F)):C.current===Qt.PULL&&(p.current=A,h(A)))}});o_(n,M,P,$)}function nL({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=b.useRef(null),r=de(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return b.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function rL(e,t,n,r,i,o,a,l,s){const u=b.useRef(0),c=b.useRef(0),d=b.useRef(void 0),f=b.useRef(void 0),h=b.useRef(0),g=b.useRef(void 0),v=b.useRef(0),{setTimeout:S,clearTimeout:p}=pc(),m=b.useCallback(()=>{d.current&&(p(d.current),d.current=void 0)},[p]),x=b.useCallback(()=>{f.current&&(p(f.current),f.current=void 0)},[p]),w=de(()=>{e!==et.SWIPE&&(u.current=0,v.current=0,m(),x())});b.useEffect(w,[e,w]);const C=de(_=>{f.current=void 0,u.current===_&&s(u.current)}),k=de(_=>{if(_.ctrlKey||Math.abs(_.deltaY)>Math.abs(_.deltaX))return;const E=M=>{h.current=M,p(g.current),g.current=M>0?S(()=>{h.current=0,g.current=void 0},300):void 0};if(e===et.NONE){if(Math.abs(_.deltaX)<=1.2*Math.abs(h.current)){E(_.deltaX);return}if(!n(-_.deltaX))return;if(c.current+=_.deltaX,m(),Math.abs(c.current)>30)c.current=0,E(0),v.current=Date.now(),o();else{const M=c.current;d.current=S(()=>{d.current=void 0,M===c.current&&(c.current=0)},i)}}else if(e===et.SWIPE){let M=u.current-_.deltaX;if(M=Math.min(Math.abs(M),r)*Math.sign(M),u.current=M,a(M),x(),Math.abs(M)>.2*r){E(_.deltaX),l(M,Date.now()-v.current);return}f.current=S(()=>C(M),2*i)}else E(_.deltaX)});b.useEffect(()=>t(mm,k),[t,k])}const Cv=gm("container"),a_=b.createContext(null),Qn=Zn("useController","ControllerContext",a_);function iL({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:u,closeOnPullDown:c,preventDefaultWheelX:d,preventDefaultWheelY:f}=o,[h,g]=b.useState(),v=Or(),S=VD(),[p,m]=b.useState(et.NONE),x=b.useRef(0),w=b.useRef(0),C=b.useRef(1),{registerSensors:k,subscribeSensors:_}=JD(),{subscribe:E,publish:M}=fc(),I=Xs(),$=Xs(),P=Xs(),{containerRef:j,setContainerRef:R,containerRect:L}=i_(),F=Sp(nL({preventDefaultWheelX:d,preventDefaultWheelY:f}),R),A=b.useRef(null),O=Sp(A,void 0),{getOwnerDocument:D}=dc(),N=Em(),B=H=>(N?-1:1)*(typeof H=="number"?H:1),z=de(()=>{var H;return(H=j.current)===null||H===void 0?void 0:H.focus()}),G=de(()=>t),Q=de(()=>v),Z=b.useCallback(H=>M(Dr,H),[M]),K=b.useCallback(H=>M(Lr,H),[M]),re=b.useCallback(()=>M(Yi),[M]),we=H=>!(r.finite&&(B(H)>0&&v.currentIndex===0||B(H)<0&&v.currentIndex===v.slides.length-1)),Xe=H=>{var ye;x.current=H,(ye=j.current)===null||ye===void 0||ye.style.setProperty(gt("swipe_offset"),`${Math.round(H)}px`)},Pe=H=>{var ye,it;w.current=H,C.current=(()=>{const co=(()=>c&&H>0?H:u&&H<0?-H:0)();return Math.min(Math.max(xm(1-co/60*(1-.5),2),.5),1)})(),(ye=j.current)===null||ye===void 0||ye.style.setProperty(gt("pull_offset"),`${Math.round(H)}px`),(it=j.current)===null||it===void 0||it.style.setProperty(gt("pull_opacity"),`${C.current}`)},{prepareAnimation:qt}=Sv(A,(H,ye,it)=>{if(A.current&&L)return{keyframes:[{transform:`translate(0, ${H.rect.y-ye.y+it.y}px)`,opacity:H.opacity},{transform:"translate(0, 0)",opacity:1}],duration:H.duration,easing:i.easing.fade}}),Ft=(H,ye)=>{if(u||c){Pe(H);let it=0;A.current&&(it=i.fade*(ye?2:1),qt({rect:A.current.getBoundingClientRect(),opacity:C.current,duration:it})),P(()=>{Pe(0),m(et.NONE)},it),m(et.ANIMATION),ye||re()}},{prepareAnimation:kt,isAnimationPlaying:ni}=Sv(A,(H,ye,it)=>{var fn;if(A.current&&L&&(!((fn=v.animation)===null||fn===void 0)&&fn.duration)){const Nt=Hl(r.spacing),co=(Nt.percent?Nt.percent*L.width/100:Nt.pixel)||0;return{keyframes:[{transform:`translate(${B(v.globalIndex-H.index)*(L.width+co)+H.rect.x-ye.x+it.x}px, 0)`},{transform:"translate(0, 0)"}],duration:v.animation.duration,easing:v.animation.easing}}}),pt=de(H=>{var ye,it;const fn=H.offset||0,Nt=fn?i.swipe:(ye=i.navigation)!==null&&ye!==void 0?ye:i.swipe,co=!fn&&!ni()?i.easing.navigation:i.easing.swipe;let{direction:Ba}=H;const Ua=(it=H.count)!==null&&it!==void 0?it:1;let yc=et.ANIMATION,pn=Nt*Ua;if(!Ba){const fo=L==null?void 0:L.width,Fm=H.duration||0,bc=fo?Nt/fo*Math.abs(fn):Nt;Ua!==0?(Fm<bc?pn=pn/bc*Math.max(Fm,bc/5):fo&&(pn=Nt/fo*(fo-Math.abs(fn))),Ba=B(fn)>0?Dr:Lr):pn=Nt/2}let xc=0;Ba===Dr?we(B(1))?xc=-Ua:(yc=et.NONE,pn=Nt):Ba===Lr&&(we(B(-1))?xc=Ua:(yc=et.NONE,pn=Nt)),pn=Math.round(pn),$(()=>{Xe(0),m(et.NONE)},pn),A.current&&kt({rect:A.current.getBoundingClientRect(),index:v.globalIndex}),m(yc),M(bv,{type:"swipe",increment:xc,duration:pn,easing:co})});b.useEffect(()=>{var H,ye;!((H=v.animation)===null||H===void 0)&&H.increment&&(!((ye=v.animation)===null||ye===void 0)&&ye.duration)&&I(()=>S({type:"swipe",increment:0}),v.animation.duration)},[v.animation,S,I]);const lo=[_,we,(L==null?void 0:L.width)||0,i.swipe,()=>m(et.SWIPE),H=>Xe(H),(H,ye)=>pt({offset:H,duration:ye,count:1}),H=>pt({offset:H,count:0})],Va=[()=>{c&&m(et.PULL)},H=>Pe(H),H=>Ft(H),H=>Ft(H,!0)];tL(o,...lo,u,c,...Va,re),rL(p,...lo);const uo=de(()=>{o.focus&&D().querySelector(`.${oe(dm)} .${oe(Cv())}`)&&z()});b.useEffect(uo,[uo]);const Am=de(()=>{var H;(H=a.view)===null||H===void 0||H.call(a,{index:v.currentIndex})});b.useEffect(Am,[v.globalIndex,Am]),b.useEffect(()=>vm(E(Dr,H=>pt({direction:Dr,...H})),E(Lr,H=>pt({direction:Lr,...H})),E(bv,H=>S(H))),[E,pt,S]);const Q_=b.useMemo(()=>({prev:Z,next:K,close:re,focus:z,slideRect:L?OD(L,r.padding):{width:0,height:0},containerRect:L||{width:0,height:0},subscribeSensors:_,containerRef:j,setCarouselRef:O,toolbarWidth:h,setToolbarWidth:g}),[Z,K,re,z,_,L,j,O,h,g,r.padding]);return b.useImperativeHandle(o.ref,()=>({prev:Z,next:K,close:re,focus:z,getLightboxProps:G,getLightboxState:Q}),[Z,K,re,z,G,Q]),b.createElement("div",{ref:F,className:Cn(oe(Cv()),oe(fm)),style:{...p===et.SWIPE?{[gt("swipe_offset")]:`${Math.round(x.current)}px`}:null,...p===et.PULL?{[gt("pull_offset")]:`${Math.round(w.current)}px`,[gt("pull_opacity")]:`${C.current}`}:null,...o.touchAction!=="none"?{[gt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...k},L&&b.createElement(a_.Provider,{value:Q_},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const oL=Tr(LS,iL);function Pr(e){return za(DS,e)}function kv(e){return za(pm,e)}function aL({slide:e,offset:t}){const n=b.useRef(null),{currentIndex:r,slides:i}=Or(),{slideRect:o,focus:a}=Qn(),{render:l,carousel:{imageFit:s,imageProps:u},on:{click:c},styles:{slide:d},labels:f}=Yt(),{getOwnerDocument:h}=dc(),g=t!==0;b.useEffect(()=>{var S;g&&(!((S=n.current)===null||S===void 0)&&S.contains(h().activeElement))&&a()},[g,a,h]);const v=()=>{var S,p,m,x;let w=(S=l.slide)===null||S===void 0?void 0:S.call(l,{slide:e,offset:t,rect:o});return!w&&so(e)&&(w=b.createElement(Wl,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:u,onClick:g?void 0:()=>c==null?void 0:c({index:r})})),w?b.createElement(b.Fragment,null,(p=l.slideHeader)===null||p===void 0?void 0:p.call(l,{slide:e}),((m=l.slideContainer)!==null&&m!==void 0?m:({children:C})=>C)({slide:e,children:w}),(x=l.slideFooter)===null||x===void 0?void 0:x.call(l,{slide:e})):null};return b.createElement("div",{ref:n,className:Cn(oe(kv()),!g&&oe(kv("current")),oe(fm)),...DD(g),style:d,role:"group","aria-roledescription":qi(f,"Slide"),"aria-label":TD(f,i,r+t)},v())}function sL(){const e=Yt().styles.slide;return b.createElement("div",{className:oe(pm),style:e})}function lL({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Or(),{setCarouselRef:o}=Qn(),{autoPlaying:a,focusWithin:l}=ZS(),s=Hl(e.spacing),u=Hl(e.padding),c=jD(e,n,1),d=[];if(YS(n))for(let f=r-c;f<=r+c;f+=1){const h=qS(n,f),g=i-r+f,v=e.finite&&(f<0||f>n.length-1);d.push(v?{key:g}:{key:[`${g}`,MD(h)].filter(Boolean).join("|"),offset:f-r,slide:h})}return b.createElement("div",{ref:o,className:Cn(oe(Pr()),d.length>0&&oe(Pr("with_slides"))),style:{[`${gt(Pr("slides_count"))}`]:d.length,[`${gt(Pr("spacing_px"))}`]:s.pixel||0,[`${gt(Pr("spacing_percent"))}`]:s.percent||0,[`${gt(Pr("padding_px"))}`]:u.pixel||0,[`${gt(Pr("padding_percent"))}`]:u.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":qi(t,"Carousel"),"aria-label":qi(t,"Photo gallery")},d.map(({key:f,slide:h,offset:g})=>h?b.createElement(aL,{key:f,slide:h,offset:g}):b.createElement(sL,{key:f})))}const uL=Tr(DS,lL);function s_(){const{carousel:e}=Yt(),{slides:t,currentIndex:n}=Or(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function cL(e){var t;const n=Em(),{publish:r}=fc(),{animation:i}=Yt(),{prevDisabled:o,nextDisabled:a}=s_(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=Ev(()=>r(Dr),l),u=Ev(()=>r(Lr),l),c=de(d=>{switch(d.key){case _D:r(Yi);break;case ED:(n?a:o)||(n?u:s)();break;case CD:(n?o:a)||(n?s:u)();break}});b.useEffect(()=>e(hm,c),[e,c])}function Tv({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return b.createElement(Sm,{label:e,icon:t,renderIcon:n,className:oe(`navigation_${r}`),disabled:o,onClick:i,style:a,...QD(Qn().focus,o)})}function dL({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=Qn(),{prevDisabled:s,nextDisabled:u}=s_();return cL(l),b.createElement(b.Fragment,null,e?e():b.createElement(Tv,{label:"Previous",action:Dr,icon:YD,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():b.createElement(Tv,{label:"Next",action:Lr,icon:qD,renderIcon:r,style:i.navigationNext,disabled:u,onClick:a}))}const fL=Tr(hD,dL),Ov=oe(bD),pL=oe(AS);function hL(e){return"style"in e}function Pv(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(cc(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function mL({noScroll:{disabled:e},children:t}){const n=Em(),{getOwnerDocument:r,getOwnerWindow:i}=dc();return b.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),u=Math.round(a.innerWidth-s.clientWidth);if(u>0){o.push(Pv(l,u,n));const c=l.getElementsByTagName("*");for(let d=0;d<c.length;d+=1){const f=c[d];hL(f)&&a.getComputedStyle(f).getPropertyValue("position")==="fixed"&&!f.classList.contains(pL)&&o.push(Pv(f,u,n))}}return l.classList.add(Ov),()=>{l.classList.remove(Ov),o.forEach(c=>c())}},[n,e,r,i]),b.createElement(b.Fragment,null,t)}const gL=Tr(mD,mL);function Mv(e){return za(dm,e)}function Iv(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function vL({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,u]=b.useState(!1),[c,d]=b.useState(!1),f=b.useRef([]),h=b.useRef(null),{setTimeout:g}=pc(),{subscribe:v}=fc(),p=_m()?0:t.fade;b.useEffect(()=>(u(!0),()=>{u(!1),d(!1)}),[]);const m=de(()=>{f.current.forEach(k=>k()),f.current=[]}),x=de(()=>{var k;d(!1),m(),(k=i.exiting)===null||k===void 0||k.call(i),g(()=>{var _;(_=i.exited)===null||_===void 0||_.call(i),a()},p)});b.useEffect(()=>v(Yi,x),[v,x]);const w=de(k=>{var _,E,M;LD(k),d(!0),(_=i.entering)===null||_===void 0||_.call(i);const I=(M=(E=k.parentNode)===null||E===void 0?void 0:E.children)!==null&&M!==void 0?M:[];for(let $=0;$<I.length;$+=1){const P=I[$];["TEMPLATE","SCRIPT","STYLE"].indexOf(P.tagName)===-1&&P!==k&&(f.current.push(Iv(P,"inert","")),f.current.push(Iv(P,"aria-hidden","true")))}f.current.push(()=>{var $,P;(P=($=h.current)===null||$===void 0?void 0:$.focus)===null||P===void 0||P.call($)}),g(()=>{var $;($=i.entered)===null||$===void 0||$.call(i)},p)}),C=b.useCallback(k=>{k?w(k):m()},[w,m]);return s?yu.createPortal(b.createElement(eL,{ref:C,className:Cn(r,oe(Mv()),oe(AS),c&&oe(Mv("open"))),"aria-modal":!0,role:"dialog","aria-label":qi(l,"Lightbox"),style:{...t.fade!==wp.animation.fade?{[gt("fade_animation_duration")]:`${p}ms`}:null,...t.easing.fade!==wp.animation.easing.fade?{[gt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:k=>{h.current||(h.current=k.relatedTarget)}},e),o.root||document.body):null}const yL=Tr(dm,vL);function xL({children:e}){return b.createElement(b.Fragment,null,e)}const bL=Tr(gD,xL);function wL(e){return za(RS,e)}function SL({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=Qn(),{setContainerRef:a,containerRect:l}=i_();kn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():b.createElement(Sm,{key:Yi,label:"Close",icon:GD,renderIcon:n,onClick:i});return b.createElement("div",{ref:a,style:r.toolbar,className:oe(wL())},e==null?void 0:e.map(u=>u===Yi?s():u))}const _L=Tr(RS,SL);function l_(e,t){var n;return b.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>l_(r,t)))}function EL(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function CL({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:u,...c}){const{animation:d,carousel:f,render:h,toolbar:g,controller:v,noScroll:S,on:p,slides:m,index:x,plugins:w,...C}=wp,{config:k,augmentation:_}=RD([Ne(yL,[Ne(gL,[Ne(oL,[Ne(uL),Ne(_L),Ne(fL)])])])],l||w),E=_({animation:EL(d,t),carousel:{...f,...e},render:{...h,...n},toolbar:{...g,...r},controller:{...v,...i},noScroll:{...S,...o},on:{...p,...a},...C,...c});return E.open?b.createElement(zD,{...E},b.createElement(UD,{slides:s||m,index:cc(u||x)},b.createElement(HD,null,b.createElement(ND,null,b.createElement(AD,null,l_(Ne(bL,k),E)))))):null}const kL={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function TL(e){return Math.min(Math.max(e,Number.EPSILON),1)}function u_(e){const{minZoom:t,...n}={...kL,...e};return{minZoom:TL(t),...n}}function OL(e,t,n,r){const i=b.useRef(void 0),o=b.useRef(void 0),{zoom:a}=Yt().animation,l=_m(),s=de(()=>{var u,c,d;if((u=i.current)===null||u===void 0||u.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(d=(c=r.current).animate)===null||d===void 0?void 0:d.call(c,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(f){console.error(f)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return kn(s,[e,t,n,s]),b.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function PL(e,t){const{on:n}=Yt(),r=de(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});b.useEffect(r,[e,r])}function hc(){const{zoom:e}=Yt();return u_(e)}function ML(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Or(),{imageFit:l}=Yt().carousel,{maxZoomPixelRatio:s}=hc();if(e&&a){const c={...a,...t};if(so(c)){const d=bm(c,l),f=Math.max(...(((n=c.srcSet)===null||n===void 0?void 0:n.map(g=>g.width))||[]).concat(c.width?[c.width]:[])),h=Math.max(...(((r=c.srcSet)===null||r===void 0?void 0:r.map(g=>g.height))||[]).concat(c.height?[c.height]:[]));f>0&&h>0&&e.width>0&&e.height>0&&(o=d?{width:Math.round(Math.min(f,e.width/e.height*h)),height:Math.round(Math.min(h,e.height/e.width*f))}:{width:f,height:h},o={width:o.width*s,height:o.height*s},i=d?{width:Math.min(e.width,o.width,f),height:Math.min(e.height,o.height,h)}:{width:Math.round(Math.min(e.width,e.height/h*f,f)),height:Math.round(Math.min(e.height,e.width/f*h,h))})}}const u=i.width?Math.max(xm(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:u}}function jv(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function $v(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function IL(e,t,n,r,i,o,a,l,s){const u=b.useRef([]),c=b.useRef(0),d=b.useRef(void 0),{globalIndex:f}=Or(),{getOwnerWindow:h}=dc(),{containerRef:g,subscribeSensors:v}=Qn(),{keyboardMoveDistance:S,zoomInMultiplier:p,wheelZoomDistanceFactor:m,scrollToZoom:x,doubleTapDelay:w,doubleClickDelay:C,doubleClickMaxStops:k,pinchZoomDistanceFactor:_,pinchZoomV4:E}=hc(),M=b.useCallback(O=>{if(g.current){const{pageX:D,pageY:N}=O,{scrollX:B,scrollY:z}=h(),{left:G,top:Q,width:Z,height:K}=g.current.getBoundingClientRect();return[D-G-B-Z/2,N-Q-z-K/2]}return[]},[g,h]),I=de(O=>{const{key:D,metaKey:N,ctrlKey:B}=O,z=N||B,G=()=>{O.preventDefault(),O.stopPropagation()};if(e>1){const Q=(Z,K)=>{G(),l(Z,K)};D==="ArrowDown"?Q(0,S):D==="ArrowUp"?Q(0,-S):D==="ArrowLeft"?Q(-S,0):D==="ArrowRight"&&Q(S,0)}D==="+"||z&&D==="="?(G(),i()):D==="-"||z&&D==="_"?(G(),o()):z&&D==="0"&&(G(),a(1))}),$=de(O=>{if((O.ctrlKey||x)&&Math.abs(O.deltaY)>Math.abs(O.deltaX)){O.stopPropagation(),a($v(e,-O.deltaY,m),!0,...M(O));return}e>1&&(O.stopPropagation(),x||l(O.deltaX,O.deltaY))}),P=b.useCallback(O=>{const D=u.current;D.splice(0,D.length,...D.filter(N=>N.pointerId!==O.pointerId))},[]),j=b.useCallback(O=>{P(O),O.persist(),u.current.push(O)},[P]),R=de(O=>{var D;const N=u.current;if(O.pointerType==="mouse"&&O.buttons>1||!(!((D=s==null?void 0:s.current)===null||D===void 0)&&D.contains(O.target)))return;e>1&&O.stopPropagation();const{timeStamp:B}=O;if(N.length===0&&B-c.current<(O.pointerType==="touch"?w:C)){c.current=0;const z=e>=1?e!==n?e*Math.max(n**(1/k),p):1:e!==t?e/Math.max(t**(-1/k),p):1;a(z,!1,...M(O))}else c.current=B;if(j(O),N.length===2){const z=jv(N[0],N[1]);d.current={previousDistance:z,initialDistance:Math.max(z,1),initialZoom:e}}}),L=de(O=>{const D=u.current,N=D.find(B=>B.pointerId===O.pointerId);if(D.length===2&&d.current){O.stopPropagation(),j(O);const B=jv(D[0],D[1]),z=E?d.current.initialZoom/d.current.initialDistance*B:$v(e,B-d.current.previousDistance,_);a(z,!0,...D.map(G=>M(G)).reduce((G,Q)=>Q.map((Z,K)=>G[K]+Z/2))),d.current.previousDistance=B;return}e>1&&(O.stopPropagation(),N&&(D.length===1&&l((N.clientX-O.clientX)/e,(N.clientY-O.clientY)/e),j(O)))}),F=b.useCallback(O=>{const D=u.current;D.length===2&&D.find(N=>N.pointerId===O.pointerId)&&(d.current=void 0),P(O)},[P]),A=b.useCallback(()=>{const O=u.current;O.splice(0,O.length),c.current=0,d.current=void 0},[]);o_(v,R,L,F,r),b.useEffect(A,[f,A]),b.useEffect(()=>r?()=>{}:vm(A,v(hm,I),v(mm,$)),[r,v,A,I,$])}function jL(e,t,n){const[r,i]=b.useState(1),[o,a]=b.useState(0),[l,s]=b.useState(0),u=OL(r,o,l,n),{currentSlide:c,globalIndex:d}=Or(),{containerRect:f,slideRect:h}=Qn(),{minZoom:g,zoomInMultiplier:v}=hc(),S=c&&so(c)?c.src:void 0,p=!S||!(n!=null&&n.current);kn(()=>{i(1),a(0),s(0)},[d,S]);const m=b.useCallback((_,E,M)=>{const I=M||r,$=o-(_||0),P=l-(E||0),j=(e.width*I-h.width)/2/I,R=(e.height*I-h.height)/2/I;a(Math.min(Math.abs($),Math.max(j,0))*Math.sign($)),s(Math.min(Math.abs(P),Math.max(R,0))*Math.sign(P))},[r,o,l,h,e.width,e.height]),x=b.useCallback((_,E,M,I)=>{const $=xm(_+.01<t?_-.01>g?_:g:t,5);E||u(),m(M?M*(1/r-1/$):0,I?I*(1/r-1/$):0,$),i($)},[r,g,t,m,u]),w=de(()=>{r>1&&(r>t&&x(t,!0),m())});kn(w,[f.width,f.height,w]);const C=b.useCallback(()=>{const _=r*v;x(r<1&&_>1?1:_)},[r,v,x]),k=b.useCallback(()=>{const _=r/v;x(r>1&&_<1?1:_)},[r,v,x]);return{zoom:r,offsetX:o,offsetY:l,disabled:p,changeOffsets:m,changeZoom:x,zoomIn:C,zoomOut:k}}const c_=b.createContext(null),Cm=Zn("useZoom","ZoomControllerContext",c_);function $L({children:e}){const[t,n]=b.useState(),{slideRect:r}=Qn(),{ref:i,minZoom:o}=hc(),{imageRect:a,maxZoom:l}=ML(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:u,offsetY:c,disabled:d,changeZoom:f,changeOffsets:h,zoomIn:g,zoomOut:v}=jL(a,l,t==null?void 0:t.zoomWrapperRef);PL(s,d),IL(s,o,l,d,g,v,f,h,t==null?void 0:t.zoomWrapperRef);const S=b.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:u,offsetY:c,disabled:d,zoomIn:g,zoomOut:v,changeZoom:f}),[s,o,l,u,c,d,g,v,f]);b.useImperativeHandle(i,()=>S,[S]);const p=b.useMemo(()=>({...S,setZoomWrapper:n}),[S,n]);return b.createElement(c_.Provider,{value:p},e)}const DL=ti("ZoomIn",b.createElement(b.Fragment,null,b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),LL=ti("ZoomOut",b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),Dv=b.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=b.useRef(!1),o=b.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:u,zoomOut:c,disabled:d}=Cm(),{render:f}=Yt(),h=d||(t?a>=s:a<=l);return b.useEffect(()=>{h&&i.current&&o.current&&n(),h||(i.current=!0)},[h,n]),b.createElement(Sm,{ref:r,disabled:h,label:t?"Zoom in":"Zoom out",icon:t?DL:LL,renderIcon:t?f.iconZoomIn:f.iconZoomOut,onClick:t?u:c,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function RL(){const e=b.useRef(null),t=b.useRef(null),{focus:n}=Qn(),r=b.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=b.useCallback(()=>r(e),[r]),o=b.useCallback(()=>r(t),[r]);return b.createElement(b.Fragment,null,b.createElement(Dv,{zoomIn:!0,ref:e,onLoseFocus:o}),b.createElement(Dv,{ref:t,onLoseFocus:i}))}function AL(){const{render:e}=Yt(),t=Cm();return e.buttonZoom?b.createElement(b.Fragment,null,e.buttonZoom(t)):b.createElement(RL,null)}function FL(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function NL({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(WS)}}function zL(e){var t,n;const[{current:r,preload:i},o]=b.useReducer(NL,{}),{slide:a,rect:l,imageFit:s,render:u,interactive:c}=e,d=a.srcSet.sort((C,k)=>C.width-k.width),f=(t=a.width)!==null&&t!==void 0?t:d[d.length-1].width,h=(n=a.height)!==null&&n!==void 0?n:d[d.length-1].height,g=bm(a,s),v=Math.max(...d.map(C=>C.width)),S=Math.min((g?Math.max:Math.min)(l.width,f*(l.height/h)),v),p=PD(),m=de(()=>{var C;const k=(C=d.find(_=>_.width>=S*p))!==null&&C!==void 0?C:d[d.length-1];(!r||d.findIndex(_=>_.src===r)<d.findIndex(_=>_===k))&&o({type:"fetch",source:k.src})});kn(m,[l.width,l.height,p,m]);const x=de(C=>o({type:"done",source:C})),w={WebkitTransform:c?"initial":"translateZ(0)"};return g||Object.assign(w,l.width/l.height<f/h?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),b.createElement(b.Fragment,null,i&&i!==r&&b.createElement(Wl,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...w},onLoad:()=>x(i),render:{...u,iconLoading:()=>null,iconError:()=>null}}),r&&b.createElement(Wl,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:w}))}function VL({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=b.useState(),l=b.useRef(null),{zoom:s,maxZoom:u,offsetX:c,offsetY:d,setZoomWrapper:f}=Cm(),h=s>1,{carousel:g,on:v}=Yt(),{currentIndex:S}=Or();kn(()=>n===0?(f({zoomWrapperRef:l,imageDimensions:o}),()=>f(void 0)):()=>{},[n,o,f]);let p=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:u});if(!p&&so(t)){const m={slide:t,offset:n,rect:r,render:e,imageFit:g.imageFit,imageProps:g.imageProps,onClick:n===0?()=>{var x;return(x=v.click)===null||x===void 0?void 0:x.call(v,{index:S})}:void 0};p=FL(t)?b.createElement(zL,{...m,slide:t,interactive:h,rect:n===0?{width:r.width*s,height:r.height*s}:r}):b.createElement(Wl,{onLoad:x=>a({width:x.naturalWidth,height:x.naturalHeight}),...m})}return p?b.createElement("div",{ref:l,className:Cn(oe(xD),oe(fm),oe(FS),h&&oe(wD)),style:n===0?{transform:`scale(${s}) translateX(${c}px) translateY(${d}px)`}:void 0},p):null}const BL=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=u_(n);return{zoom:l,toolbar:ID(r,xv,b.createElement(AL,null)),render:{...i,slide:s=>{var u;return so(s.slide)?b.createElement(VL,{render:i,...s}):(u=i.slide)===null||u===void 0?void 0:u.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Tr(xv,$L))},UL=()=>{const{id:e}=N1(),[t,n]=b.useState([]),[r,i]=b.useState(1),[o,a]=b.useState("description"),[l,s]=b.useState(null),[u,c]=b.useState(!1),[d,f]=b.useState(0),[h,g]=b.useState(!0),v=t.find(_=>_.id===Number(e));b.useEffect(()=>{(async()=>{try{g(!0);const M=await(await fetch("https://backenddidiv-production.up.railway.app/api/products?populate=*")).json();n(M.data)}catch(E){console.error("Error fetching products:",E)}finally{g(!1)}})()},[]),console.log(v),b.useEffect(()=>{var _,E;v&&v.images&&s((E=(_=v.images)==null?void 0:_[0])==null?void 0:E.url)},[v]);const S=v==null?void 0:v.images.map(_=>({src:_.url}));console.log(v);const p=()=>{const _=v.images.findIndex(E=>E.url===l);f(_>=0?_:0),c(!0)},m=no(),w=Nn(_=>_.favorites.items).some(_=>_.id===(v==null?void 0:v.id)),C=()=>{m(oc({...v,quantity:r})),te.success(`${v.name} додано в кошик!`)},k=(_,E)=>{E.stopPropagation(),m(uc(_)),w?te.warning(`${_.name} видалено з обраного`):te.info(`${_.name} додано в обране`)};return h?y.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:y.jsx(Kh,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):v?y.jsxs(vv,{children:[" ",y.jsx(Na,{autoClose:1500}),y.jsxs(H$,{children:[y.jsx(Oe,{to:"/",children:"Головна"})," / ",y.jsx(Oe,{to:"/catalog",children:"Каталог"})," /"," ",v.name]}),y.jsxs(W$,{children:[y.jsxs(G$,{children:[y.jsx(Y$,{src:l,alt:v.name,onClick:p}),y.jsx(q$,{children:v.images.map(_=>{const E=_.url;return y.jsx(X$,{src:E,onClick:()=>s(E),style:{cursor:"pointer",opacity:l===E?1:.4}},_.id)})})]}),y.jsx(CL,{open:u,close:()=>c(!1),index:d,slides:S,controller:{closeOnBackdropClick:!0},on:{view:({index:_})=>{var E,M;f(_),(M=(E=v==null?void 0:v.images)==null?void 0:E[_])!=null&&M.url&&s(v.images[_].url)}},plugins:[BL],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),y.jsxs(K$,{children:[y.jsx(Z$,{children:v.name}),y.jsx(Q$,{children:y.jsx(J$,{children:"● Новий товар"})}),y.jsxs(eD,{children:[y.jsx(tD,{children:y.jsxs(nD,{children:[v.price.toLocaleString()," грн"]})}),y.jsxs(rD,{children:[y.jsxs(iD,{children:[y.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),y.jsx("span",{children:r}),y.jsx("button",{onClick:()=>i(r+1),children:"+"})]}),y.jsxs(oD,{onClick:C,children:[" ",y.jsx(Eu,{size:25}),y.jsx("span",{children:"В КОШИК"})]}),y.jsxs(fD,{$active:w,onClick:_=>k(v,_),children:[y.jsxs(pD,{$active:w,children:[" ",y.jsx("use",{href:`${cn}#icon-heart`})]}),y.jsx("span",{children:"В ОБРАНЕ"})]})]})]}),y.jsxs(sD,{children:[y.jsxs("p",{children:[y.jsx("strong",{children:"Ваше місто:"})," Київ"]}),y.jsx("p",{children:"🚚 Доставка по Україні (Розрахувати вартість)"})]})]})]}),y.jsxs(lD,{children:[y.jsxs(uD,{children:[y.jsx(yv,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),y.jsx(yv,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"})]}),y.jsxs(cD,{children:[o==="description"&&y.jsx(dD,{children:v.description}),o==="attributes"&&y.jsxs(aD,{children:[y.jsxs(vs,{children:[y.jsx("span",{children:"Розміри, мм"})," ",y.jsx("b",{children:v.size||""})]}),y.jsxs(vs,{children:[y.jsx("span",{children:"Тип"})," ",y.jsx("b",{children:v.type||""})]}),y.jsxs(vs,{children:[y.jsx("span",{children:"Колір"})," ",y.jsx("b",{children:v.color||""})]}),y.jsxs(vs,{children:[y.jsx("span",{children:"Колір"})," ",y.jsx("b",{children:v.color||""})]})]})]})]})]}):y.jsx(vv,{children:"Товар не знайдено"})},HL=T.div`
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
`,qL=T.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,XL=T.div`
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
`,pR=()=>y.jsxs(y.Fragment,{children:[y.jsx(sR,{children:"Головна / Кошик"}),y.jsxs(lR,{children:[y.jsx(uR,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),y.jsx(cR,{children:"Ваш кошик порожній"}),y.jsx(dR,{children:"Ви ще не додали жодного товару в кошик"}),y.jsx(fR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]}),hR=T.div`
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
`,mR=({item:e})=>{const t=no();return y.jsxs(hR,{children:[y.jsx("button",{onClick:()=>t(ij(e.id)),children:"-"}),y.jsx("span",{children:e.quantity}),y.jsx("button",{onClick:()=>t(rj(e.id)),children:"+"})]})},gR=()=>{const e=no(),[t,n]=b.useState([]),r=Nn(f=>f.cart.items),o=Nn(f=>f.cart.items).reduce((f,h)=>f+h.quantity,0),a=r.reduce((f,h)=>f+h.price*(h.quantity||1),0),l=Nn(f=>f.favorites.items),s=r.length===0,u=(f,h)=>{h.stopPropagation(),console.log(f);const g=l.some(v=>v.id===f.id);e(uc(f)),g?te.warning(`${f.name} видалено з обраного`):te.info(`${f.name} додано в обране`)},c=f=>{n(h=>[...h,f.id]),setTimeout(()=>{e(ej(f)),n(h=>h.filter(g=>g!==f.id))},300)},d=()=>{e(tj())};return y.jsx(y.Fragment,{children:s?y.jsx(pR,{}):y.jsxs(HL,{children:[y.jsx(Na,{autoClose:1500}),y.jsxs(WL,{children:[" ",y.jsx(Oe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",y.jsx(Oe,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),y.jsx(GL,{children:"Кошик"}),y.jsxs(YL,{children:[y.jsx(qL,{children:r.map((f,h)=>{var v,S;console.log(f);const g=l.some(p=>p.id===f.id);return y.jsxs(XL,{className:t.includes(f.id)?"removing":"",children:[y.jsx(KL,{src:((S=(v=f.images)==null?void 0:v[0])==null?void 0:S.url)||"/nofoto.png",alt:f.name,onError:p=>{p.currentTarget.onerror=null,p.currentTarget.src=Ea}}),y.jsx(ZL,{children:y.jsx("h3",{children:f.name})}),y.jsxs(QL,{children:[y.jsx(mR,{item:{...f,quantity:f.quantity||1}}),y.jsx(eR,{children:y.jsxs("div",{className:"current-price",children:[(f.price*(f.quantity||1)).toLocaleString()," грн"]})})]}),y.jsxs(JL,{children:[y.jsx(nR,{onClick:p=>u(f,p),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:y.jsx(Sb,{size:22,fill:g?"#ff4d4f":"none",color:g?"#ff4d4f":"#999"})}),y.jsx(tR,{onClick:()=>c(f),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:y.jsx(Eb,{size:22})})]})]},`${f.id}-${h}`)})}),y.jsxs(rR,{children:[y.jsxs(iR,{children:[y.jsx("span",{children:"Всього в обраному:"}),y.jsxs("strong",{children:[o," шт."]}),y.jsx("span",{children:"На суму:"}),y.jsxs("strong",{children:[a," грн"]})]}),y.jsx(oR,{to:"/checkout",children:"Оформити замовлення"}),y.jsx(aR,{onClick:d,children:"Oчистити кошик"})]})]})]})})},vR=T.div`
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
`,Lv=T.button`
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
`,AR=()=>y.jsxs(y.Fragment,{children:[y.jsx(jR,{children:"Головна / Обране"}),y.jsxs($R,{children:[y.jsx(DR,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),y.jsx(LR,{children:"Ви ще не додали жодного товару в обране"}),y.jsx(RR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),FR=()=>{const e=no(),t=Nn(c=>c.favorites.items),[n,r]=b.useState([]),i=c=>{e(oc(c)),te.success(`${c.name} додано в кошик!`)},o=()=>{e(nj(t)),te.success("Товари додано в кошик!")};console.log(t);const a=t.reduce((c,d)=>c+d.price*(d.quantity||1),0),l=(c,d)=>{d.stopPropagation();const f=t.some(h=>h.id===c.id);r(h=>[...h,c.id]),setTimeout(()=>{e(uc(c)),r(h=>h.filter(g=>g!==c.id))},300),f?te.warning(`${c.name} видалено з обраного`):te.info(`${c.name} додано в обране`)},s=()=>{e(z$())},u=t.length===0;return y.jsx(y.Fragment,{children:u?y.jsx(AR,{}):y.jsxs(vR,{children:[y.jsx(Na,{autoClose:1500}),y.jsxs(yR,{children:[" ",y.jsx(Oe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",y.jsx(Oe,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),y.jsx(xR,{children:"Обране"}),y.jsxs(bR,{children:[y.jsx(wR,{children:t.map(c=>{var d,f;return y.jsxs(SR,{className:n.includes(c.id)?"removing":"",children:[y.jsx(_R,{src:((f=(d=c.images)==null?void 0:d[0])==null?void 0:f.url)||"/nofoto.png",alt:c.name,onError:h=>{h.currentTarget.onerror=null,h.currentTarget.src="/nofoto.png"}}),y.jsx(ER,{children:c.name}),y.jsxs(CR,{children:[y.jsxs(kR,{children:[c.price," грн"]}),y.jsxs(TR,{children:[y.jsx(Lv,{onClick:()=>i(c),children:y.jsx(Eu,{size:30})}),y.jsx(Lv,{onClick:h=>l(c,h),children:y.jsx(Eb,{size:30})})]})]})]},c.id)})}),y.jsxs(OR,{children:[y.jsxs(PR,{children:[y.jsx("span",{children:"Всього в обраному:"}),y.jsxs("strong",{children:[t.length," шт."]}),y.jsx("span",{children:"На суму:"}),y.jsxs("strong",{children:[a," грн"]})]}),y.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),y.jsx(MR,{onClick:()=>o(),children:"Додати все до кошика"}),y.jsx(IR,{onClick:s,children:"Очистити обрані"})]})]})]})})},NR=T.div`
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
`;const UR=({title:e,children:t,breadcrumbPath:n})=>y.jsxs(NR,{children:[y.jsxs(zR,{children:["Головна / ",n]}),y.jsxs(VR,{children:[y.jsx(BR,{children:e}),t]})]}),Rv=T.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,Av=T.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,Fv=T.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,Nv=T.ul`
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
`,HR=()=>y.jsxs(UR,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[y.jsxs(Rv,{children:[y.jsx(Av,{children:"Способи доставки"}),y.jsx(Fv,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),y.jsxs(Nv,{children:[y.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),y.jsx("li",{children:"Самовивіз з нашого магазину"}),y.jsx("li",{children:"Укрпошта"})]})]}),y.jsxs(Rv,{children:[y.jsx(Av,{children:"Варіанти оплати"}),y.jsx(Fv,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),y.jsxs(Nv,{children:[y.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),y.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),y.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function Qr(e){"@babel/helpers - typeof";return Qr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qr(e)}function WR(e,t){if(Qr(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Qr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function d_(e){var t=WR(e,"string");return Qr(t)==="symbol"?t:String(t)}function Lo(e,t,n){return t=d_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zv(Object(n),!0).forEach(function(r){Lo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function GR(e){if(Array.isArray(e))return e}function YR(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(c){u=!0,i=c}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function _p(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f_(e,t){if(e){if(typeof e=="string")return _p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _p(e,t)}}function qR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vn(e,t){return GR(e)||YR(e,t)||f_(e,t)||qR()}function XR(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jn(e,t){if(e==null)return{};var n=XR(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var KR=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function ZR(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,c=e.onInputChange,d=e.onMenuClose,f=e.onMenuOpen,h=e.value,g=Jn(e,KR),v=b.useState(l!==void 0?l:n),S=Vn(v,2),p=S[0],m=S[1],x=b.useState(s!==void 0?s:i),w=Vn(x,2),C=w[0],k=w[1],_=b.useState(h!==void 0?h:a),E=Vn(_,2),M=E[0],I=E[1],$=b.useCallback(function(O,D){typeof u=="function"&&u(O,D),I(O)},[u]),P=b.useCallback(function(O,D){var N;typeof c=="function"&&(N=c(O,D)),m(N!==void 0?N:O)},[c]),j=b.useCallback(function(){typeof f=="function"&&f(),k(!0)},[f]),R=b.useCallback(function(){typeof d=="function"&&d(),k(!1)},[d]),L=l!==void 0?l:p,F=s!==void 0?s:C,A=h!==void 0?h:M;return q(q({},g),{},{inputValue:L,menuIsOpen:F,onChange:$,onInputChange:P,onMenuClose:R,onMenuOpen:j,value:A})}function QR(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Vv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d_(r.key),r)}}function JR(e,t,n){return t&&Vv(e.prototype,t),n&&Vv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ep(e,t){return Ep=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ep(e,t)}function eA(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ep(e,t)}function Gl(e){return Gl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Gl(e)}function tA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function nA(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rA(e,t){if(t&&(Qr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return nA(e)}function iA(e){var t=tA();return function(){var r=Gl(e),i;if(t){var o=Gl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return rA(this,i)}}function oA(e){if(Array.isArray(e))return _p(e)}function aA(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function km(e){return oA(e)||aA(e)||f_(e)||sA()}function lA(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const uA=Math.min,cA=Math.max,Yl=Math.round,ys=Math.floor,ql=e=>({x:e,y:e});function dA(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function mc(){return typeof window<"u"}function p_(e){return m_(e)?(e.nodeName||"").toLowerCase():"#document"}function ln(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function h_(e){var t;return(t=(m_(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function m_(e){return mc()?e instanceof Node||e instanceof ln(e).Node:!1}function Cp(e){return mc()?e instanceof Element||e instanceof ln(e).Element:!1}function Tm(e){return mc()?e instanceof HTMLElement||e instanceof ln(e).HTMLElement:!1}function Bv(e){return!mc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ln(e).ShadowRoot}function g_(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Om(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Od;function fA(){return Od==null&&(Od=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Od}function pA(e){return/^(html|body|#document)$/.test(p_(e))}function Om(e){return ln(e).getComputedStyle(e)}function hA(e){if(p_(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Bv(e)&&e.host||h_(e);return Bv(t)?t.host:t}function v_(e){const t=hA(e);return pA(t)?e.ownerDocument?e.ownerDocument.body:e.body:Tm(t)&&g_(t)?t:v_(t)}function Xl(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=v_(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=ln(i);if(o){const l=kp(a);return t.concat(a,a.visualViewport||[],g_(i)?i:[],l&&n?Xl(l):[])}else return t.concat(i,Xl(i,[],n))}function kp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function mA(e){const t=Om(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Tm(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Yl(n)!==o||Yl(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Pm(e){return Cp(e)?e:e.contextElement}function Pd(e){const t=Pm(e);if(!Tm(t))return ql(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=mA(t);let a=(o?Yl(n.width):n.width)/r,l=(o?Yl(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const gA=ql(0);function vA(e){const t=ln(e);return!fA()||!t.visualViewport?gA:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function yA(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==ln(e)?!1:t}function Uv(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Pm(e);let a=ql(1);t&&(r?Cp(r)&&(a=Pd(r)):a=Pd(e));const l=yA(o,n,r)?vA(o):ql(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,c=i.width/a.x,d=i.height/a.y;if(o){const f=ln(o),h=r&&Cp(r)?ln(r):r;let g=f,v=kp(g);for(;v&&r&&h!==g;){const S=Pd(v),p=v.getBoundingClientRect(),m=Om(v),x=p.left+(v.clientLeft+parseFloat(m.paddingLeft))*S.x,w=p.top+(v.clientTop+parseFloat(m.paddingTop))*S.y;s*=S.x,u*=S.y,c*=S.x,d*=S.y,s+=x,u+=w,g=ln(v),v=kp(g)}}return dA({width:c,height:d,x:s,y:u})}function y_(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function xA(e,t){let n=null,r;const i=h_(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:c,top:d,width:f,height:h}=u;if(l||t(),!f||!h)return;const g=ys(d),v=ys(i.clientWidth-(c+f)),S=ys(i.clientHeight-(d+h)),p=ys(c),x={rootMargin:-g+"px "+-v+"px "+-S+"px "+-p+"px",threshold:cA(0,uA(1,s))||1};let w=!0;function C(k){const _=k[0].intersectionRatio;if(_!==s){if(!w)return a();_?a(!1,_):r=setTimeout(()=>{a(!1,1e-7)},1e3)}_===1&&!y_(u,e.getBoundingClientRect())&&a(),w=!1}try{n=new IntersectionObserver(C,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,x)}n.observe(e)}return a(!0),o}function bA(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=Pm(e),c=i||o?[...u?Xl(u):[],...t?Xl(t):[]]:[];c.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),o&&p.addEventListener("resize",n)});const d=u&&l?xA(u,n):null;let f=-1,h=null;a&&(h=new ResizeObserver(p=>{let[m]=p;m&&m.target===u&&h&&t&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var x;(x=h)==null||x.observe(t)})),n()}),u&&!s&&h.observe(u),t&&h.observe(t));let g,v=s?Uv(e):null;s&&S();function S(){const p=Uv(e);v&&!y_(v,p)&&n(),v=p,g=requestAnimationFrame(S)}return n(),()=>{var p;c.forEach(m=>{i&&m.removeEventListener("scroll",n),o&&m.removeEventListener("resize",n)}),d==null||d(),(p=h)==null||p.disconnect(),h=null,s&&cancelAnimationFrame(g)}}var Tp=b.useLayoutEffect,wA=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Kl=function(){};function SA(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function _A(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(SA(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Hv=function(t){return jA(t)?t.filter(Boolean):Qr(t)==="object"&&t!==null?[t]:[]},x_=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=Jn(t,wA);return q({},n)},ke=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function gc(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function EA(e){return gc(e)?window.innerHeight:e.clientHeight}function b_(e){return gc(e)?window.pageYOffset:e.scrollTop}function Zl(e,t){if(gc(e)){window.scrollTo(0,t);return}e.scrollTop=t}function CA(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function kA(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function xs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Kl,i=b_(e),o=t-i,a=10,l=0;function s(){l+=a;var u=kA(l,i,o,n);Zl(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function Wv(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?Zl(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&Zl(e,Math.max(t.offsetTop-i,0))}function TA(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Gv(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function OA(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var w_=!1,PA={get passive(){return w_=!0}},bs=typeof window<"u"?window:{};bs.addEventListener&&bs.removeEventListener&&(bs.addEventListener("p",Kl,PA),bs.removeEventListener("p",Kl,!1));var MA=w_;function IA(e){return e!=null}function jA(e){return Array.isArray(e)}function ws(e,t,n){return e?t:n}var $A=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Vn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Vn(l,2),u=s[0],c=s[1];return a[u]=c,a},{})},DA=["children","innerProps"],LA=["children","innerProps"];function RA(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=CA(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var c=s.getBoundingClientRect(),d=c.height,f=n.getBoundingClientRect(),h=f.bottom,g=f.height,v=f.top,S=n.offsetParent.getBoundingClientRect(),p=S.top,m=a?window.innerHeight:EA(s),x=b_(s),w=parseInt(getComputedStyle(n).marginBottom,10),C=parseInt(getComputedStyle(n).marginTop,10),k=p-C,_=m-v,E=k+x,M=d-x-v,I=h-m+x+w,$=x+v-C,P=160;switch(i){case"auto":case"bottom":if(_>=g)return{placement:"bottom",maxHeight:t};if(M>=g&&!a)return o&&xs(s,I,P),{placement:"bottom",maxHeight:t};if(!a&&M>=r||a&&_>=r){o&&xs(s,I,P);var j=a?_-w:M-w;return{placement:"bottom",maxHeight:j}}if(i==="auto"||a){var R=t,L=a?k:E;return L>=r&&(R=Math.min(L-w-l,t)),{placement:"top",maxHeight:R}}if(i==="bottom")return o&&Zl(s,I),{placement:"bottom",maxHeight:t};break;case"top":if(k>=g)return{placement:"top",maxHeight:t};if(E>=g&&!a)return o&&xs(s,$,P),{placement:"top",maxHeight:t};if(!a&&E>=r||a&&k>=r){var F=t;return(!a&&E>=r||a&&k>=r)&&(F=a?k-C:E-C),o&&xs(s,$,P),{placement:"top",maxHeight:F}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function AA(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var S_=function(t){return t==="auto"?"bottom":t},FA=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return q((r={label:"menu"},Lo(r,AA(i),"100%"),Lo(r,"position","absolute"),Lo(r,"width","100%"),Lo(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},__=b.createContext(null),NA=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=b.useContext(__)||{},c=u.setPortalPlacement,d=b.useRef(null),f=b.useState(i),h=Vn(f,2),g=h[0],v=h[1],S=b.useState(null),p=Vn(S,2),m=p[0],x=p[1],w=s.spacing.controlHeight;return Tp(function(){var C=d.current;if(C){var k=a==="fixed",_=l&&!k,E=RA({maxHeight:i,menuEl:C,minHeight:r,placement:o,shouldScroll:_,isFixedPosition:k,controlHeight:w});v(E.maxHeight),x(E.placement),c==null||c(E.placement)}},[i,o,a,l,r,c,w]),n({ref:d,placerProps:q(q({},t),{},{placement:m||S_(o),maxHeight:g})})},zA=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Y("div",X({},ke(t,"menu",{menu:!0}),{ref:r},i),n)},VA=zA,BA=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return q({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},UA=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Y("div",X({},ke(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},E_=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return q({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},HA=E_,WA=E_,GA=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=Jn(t,DA);return Y("div",X({},ke(q(q({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},YA=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=Jn(t,LA);return Y("div",X({},ke(q(q({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},qA=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},XA=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=b.useRef(null),u=b.useRef(null),c=b.useState(S_(a)),d=Vn(c,2),f=d[0],h=d[1],g=b.useMemo(function(){return{setPortalPlacement:h}},[]),v=b.useState(null),S=Vn(v,2),p=S[0],m=S[1],x=b.useCallback(function(){if(i){var _=TA(i),E=l==="fixed"?0:window.pageYOffset,M=_[f]+E;(M!==(p==null?void 0:p.offset)||_.left!==(p==null?void 0:p.rect.left)||_.width!==(p==null?void 0:p.rect.width))&&m({offset:M,rect:_})}},[i,l,f,p==null?void 0:p.offset,p==null?void 0:p.rect.left,p==null?void 0:p.rect.width]);Tp(function(){x()},[x]);var w=b.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=bA(i,s.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);Tp(function(){w()},[w]);var C=b.useCallback(function(_){s.current=_,w()},[w]);if(!n&&l!=="fixed"||!p)return null;var k=Y("div",X({ref:C},ke(q(q({},t),{},{offset:p.offset,position:l,rect:p.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Y(__.Provider,{value:g},n?yu.createPortal(k,n):k)},KA=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},ZA=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Y("div",X({},ke(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},QA=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return q({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},JA=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Y("div",X({},ke(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},e6=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},t6=function(t){var n=t.children,r=t.innerProps;return Y("div",X({},ke(t,"indicatorsContainer",{indicators:!0}),r),n)},Yv,n6=["size"],r6=["innerProps","isRtl","size"],i6={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},C_=function(t){var n=t.size,r=Jn(t,n6);return Y("svg",X({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:i6},r))},Mm=function(t){return Y(C_,X({size:20},t),Y("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},k_=function(t){return Y(C_,X({size:20},t),Y("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},T_=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return q({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},o6=T_,a6=function(t){var n=t.children,r=t.innerProps;return Y("div",X({},ke(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Y(k_,null))},s6=T_,l6=function(t){var n=t.children,r=t.innerProps;return Y("div",X({},ke(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Y(Mm,null))},u6=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return q({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},c6=function(t){var n=t.innerProps;return Y("span",X({},n,ke(t,"indicatorSeparator",{"indicator-separator":!0})))},d6=KP(Yv||(Yv=lA([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),f6=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return q({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Md=function(t){var n=t.delay,r=t.offset;return Y("span",{css:Xh({animation:"".concat(d6," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},p6=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=Jn(t,r6);return Y("div",X({},ke(q(q({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Y(Md,{delay:0,offset:r}),Y(Md,{delay:160,offset:!0}),Y(Md,{delay:320,offset:!r}))},h6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return q({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},m6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Y("div",X({ref:o},ke(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},g6=m6,v6=["data"],y6=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},x6=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,c=t.theme,d=t.selectProps;return Y("div",X({},ke(t,"group",{group:!0}),s),Y(a,X({},l,{selectProps:d,theme:c,getStyles:i,getClassNames:o,cx:r}),u),Y("div",null,n))},b6=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return q({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},w6=function(t){var n=x_(t);n.data;var r=Jn(n,v6);return Y("div",X({},ke(t,"groupHeading",{"group-heading":!0}),r))},S6=x6,_6=["innerRef","isDisabled","isHidden","inputClassName"],E6=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return q(q({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},C6),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},O_={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},C6={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":q({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},O_)},k6=function(t){return q({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},O_)},T6=function(t){var n=t.cx,r=t.value,i=x_(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=Jn(i,_6);return Y("div",X({},ke(t,"input",{"input-container":!0}),{"data-value":r||""}),Y("input",X({className:n({input:!0},s),ref:o,style:k6(l),disabled:a},u)))},O6=T6,P6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return q({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},M6=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return q({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},I6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return q({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},P_=function(t){var n=t.children,r=t.innerProps;return Y("div",r,n)},j6=P_,$6=P_;function D6(e){var t=e.children,n=e.innerProps;return Y("div",X({role:"button"},n),t||Y(Mm,{size:14}))}var L6=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,c=r.Label,d=r.Remove;return Y(u,{data:i,innerProps:q(q({},ke(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Y(c,{data:i,innerProps:q({},ke(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Y(d,{data:i,innerProps:q(q({},ke(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},R6=L6,A6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return q({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},F6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Y("div",X({},ke(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},N6=F6,z6=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return q({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},V6=function(t){var n=t.children,r=t.innerProps;return Y("div",X({},ke(t,"placeholder",{placeholder:!0}),r),n)},B6=V6,U6=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return q({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},H6=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Y("div",X({},ke(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},W6=H6,G6={ClearIndicator:l6,Control:g6,DropdownIndicator:a6,DownChevron:k_,CrossIcon:Mm,Group:S6,GroupHeading:w6,IndicatorsContainer:t6,IndicatorSeparator:c6,Input:O6,LoadingIndicator:p6,Menu:VA,MenuList:UA,MenuPortal:XA,LoadingMessage:YA,NoOptionsMessage:GA,MultiValue:R6,MultiValueContainer:j6,MultiValueLabel:$6,MultiValueRemove:D6,Option:N6,Placeholder:B6,SelectContainer:ZA,SingleValue:W6,ValueContainer:JA},Y6=function(t){return q(q({},G6),t.components)},qv=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function q6(e,t){return!!(e===t||qv(e)&&qv(t))}function X6(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!q6(e[n],t[n]))return!1;return!0}function K6(e,t){t===void 0&&(t=X6);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var Z6={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Q6=function(t){return Y("span",X({css:Z6},t))},Xv=Q6,J6={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,c=t.isAppleDevice,d=function(v,S){return v&&v.length?"".concat(v.indexOf(S)+1," of ").concat(v.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(d(l,r),".");if(n==="menu"&&c){var f=s?" disabled":"",h="".concat(u?" selected":"").concat(f);return"".concat(a).concat(h,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},e8=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,c=t.isAppleDevice,d=s.ariaLiveMessages,f=s.getOptionLabel,h=s.inputValue,g=s.isMulti,v=s.isOptionDisabled,S=s.isSearchable,p=s.menuIsOpen,m=s.options,x=s.screenReaderStatus,w=s.tabSelectsValue,C=s.isLoading,k=s["aria-label"],_=s["aria-live"],E=b.useMemo(function(){return q(q({},J6),d||{})},[d]),M=b.useMemo(function(){var L="";if(n&&E.onChange){var F=n.option,A=n.options,O=n.removedValue,D=n.removedValues,N=n.value,B=function(we){return Array.isArray(we)?null:we},z=O||F||B(N),G=z?f(z):"",Q=A||D||void 0,Z=Q?Q.map(f):[],K=q({isDisabled:z&&v(z,l),label:G,labels:Z},n);L=E.onChange(K)}return L},[n,E,v,l,f]),I=b.useMemo(function(){var L="",F=r||i,A=!!(r&&l&&l.includes(r));if(F&&E.onFocus){var O={focused:F,label:f(F),isDisabled:v(F,l),isSelected:A,options:o,context:F===r?"menu":"value",selectValue:l,isAppleDevice:c};L=E.onFocus(O)}return L},[r,i,f,v,E,o,l,c]),$=b.useMemo(function(){var L="";if(p&&m.length&&!C&&E.onFilter){var F=x({count:o.length});L=E.onFilter({inputValue:h,resultsMessage:F})}return L},[o,h,p,E,m,x,C]),P=(n==null?void 0:n.action)==="initial-input-focus",j=b.useMemo(function(){var L="";if(E.guidance){var F=i?"value":p?"menu":"input";L=E.guidance({"aria-label":k,context:F,isDisabled:r&&v(r,l),isMulti:g,isSearchable:S,tabSelectsValue:w,isInitialFocus:P})}return L},[k,r,i,g,v,S,p,E,l,w,P]),R=Y(b.Fragment,null,Y("span",{id:"aria-selection"},M),Y("span",{id:"aria-focused"},I),Y("span",{id:"aria-results"},$),Y("span",{id:"aria-guidance"},j));return Y(b.Fragment,null,Y(Xv,{id:u},P&&R),Y(Xv,{"aria-live":_,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!P&&R))},t8=e8,Op=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],n8=new RegExp("["+Op.map(function(e){return e.letters}).join("")+"]","g"),M_={};for(var Id=0;Id<Op.length;Id++)for(var jd=Op[Id],$d=0;$d<jd.letters.length;$d++)M_[jd.letters[$d]]=jd.base;var I_=function(t){return t.replace(n8,function(n){return M_[n]})},r8=K6(I_),Kv=function(t){return t.replace(/^\s+|\s+$/g,"")},i8=function(t){return"".concat(t.label," ").concat(t.value)},o8=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=q({ignoreCase:!0,ignoreAccents:!0,stringify:i8,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,c=s?Kv(r):r,d=s?Kv(l(n)):l(n);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),a&&(c=r8(c),d=I_(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},a8=["innerRef"];function s8(e){var t=e.innerRef,n=Jn(e,a8),r=$A(n,"onExited","in","enter","exit","appear");return Y("input",X({ref:t},r,{css:Xh({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var l8=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function u8(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=b.useRef(!1),l=b.useRef(!1),s=b.useRef(0),u=b.useRef(null),c=b.useCallback(function(S,p){if(u.current!==null){var m=u.current,x=m.scrollTop,w=m.scrollHeight,C=m.clientHeight,k=u.current,_=p>0,E=w-C-x,M=!1;E>p&&a.current&&(r&&r(S),a.current=!1),_&&l.current&&(o&&o(S),l.current=!1),_&&p>E?(n&&!a.current&&n(S),k.scrollTop=w,M=!0,a.current=!0):!_&&-p>x&&(i&&!l.current&&i(S),k.scrollTop=0,M=!0,l.current=!0),M&&l8(S)}},[n,r,i,o]),d=b.useCallback(function(S){c(S,S.deltaY)},[c]),f=b.useCallback(function(S){s.current=S.changedTouches[0].clientY},[]),h=b.useCallback(function(S){var p=s.current-S.changedTouches[0].clientY;c(S,p)},[c]),g=b.useCallback(function(S){if(S){var p=MA?{passive:!1}:!1;S.addEventListener("wheel",d,p),S.addEventListener("touchstart",f,p),S.addEventListener("touchmove",h,p)}},[h,f,d]),v=b.useCallback(function(S){S&&(S.removeEventListener("wheel",d,!1),S.removeEventListener("touchstart",f,!1),S.removeEventListener("touchmove",h,!1))},[h,f,d]);return b.useEffect(function(){if(t){var S=u.current;return g(S),function(){v(S)}}},[t,g,v]),function(S){u.current=S}}var Zv=["boxSizing","height","overflow","paddingRight","position"],Qv={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Jv(e){e.cancelable&&e.preventDefault()}function e1(e){e.stopPropagation()}function t1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function n1(){return"ontouchstart"in window||navigator.maxTouchPoints}var r1=!!(typeof window<"u"&&window.document&&window.document.createElement),To=0,ui={capture:!1,passive:!1};function c8(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),o=b.useRef(null),a=b.useCallback(function(s){if(r1){var u=document.body,c=u&&u.style;if(r&&Zv.forEach(function(g){var v=c&&c[g];i.current[g]=v}),r&&To<1){var d=parseInt(i.current.paddingRight,10)||0,f=document.body?document.body.clientWidth:0,h=window.innerWidth-f+d||0;Object.keys(Qv).forEach(function(g){var v=Qv[g];c&&(c[g]=v)}),c&&(c.paddingRight="".concat(h,"px"))}u&&n1()&&(u.addEventListener("touchmove",Jv,ui),s&&(s.addEventListener("touchstart",t1,ui),s.addEventListener("touchmove",e1,ui))),To+=1}},[r]),l=b.useCallback(function(s){if(r1){var u=document.body,c=u&&u.style;To=Math.max(To-1,0),r&&To<1&&Zv.forEach(function(d){var f=i.current[d];c&&(c[d]=f)}),u&&n1()&&(u.removeEventListener("touchmove",Jv,ui),s&&(s.removeEventListener("touchstart",t1,ui),s.removeEventListener("touchmove",e1,ui)))}},[r]);return b.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var d8=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},f8={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function p8(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=u8({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),c=c8({isEnabled:n}),d=function(h){u(h),c(h)};return Y(b.Fragment,null,n&&Y("div",{onClick:d8,css:f8}),t(d))}var h8={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},m8=function(t){var n=t.name,r=t.onFocus;return Y("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:h8,value:"",onChange:function(){}})},g8=m8;function Im(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function v8(){return Im(/^iPhone/i)}function j_(){return Im(/^Mac/i)}function y8(){return Im(/^iPad/i)||j_()&&navigator.maxTouchPoints>1}function x8(){return v8()||y8()}function b8(){return j_()||x8()}var w8=function(t){return t.label},S8=function(t){return t.label},_8=function(t){return t.value},E8=function(t){return!!t.isDisabled},C8={clearIndicator:s6,container:KA,control:h6,dropdownIndicator:o6,group:y6,groupHeading:b6,indicatorsContainer:e6,indicatorSeparator:u6,input:E6,loadingIndicator:f6,loadingMessage:WA,menu:FA,menuList:BA,menuPortal:qA,multiValue:P6,multiValueLabel:M6,multiValueRemove:I6,noOptionsMessage:HA,option:A6,placeholder:z6,singleValue:U6,valueContainer:QA},k8={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},T8=4,$_=4,O8=38,P8=$_*2,M8={baseUnit:$_,controlHeight:O8,menuGutter:P8},Dd={borderRadius:T8,colors:k8,spacing:M8},I8={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Gv(),captureMenuScroll:!Gv(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:o8(),formatGroupLabel:w8,getOptionLabel:S8,getOptionValue:_8,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:E8,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!OA(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function i1(e,t,n,r){var i=R_(e,t,n),o=A_(e,t,n),a=L_(e,t),l=Ql(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function Ks(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return i1(e,a,t,l)}).filter(function(a){return a1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=i1(e,n,t,r);return a1(e,o)?o:void 0}).filter(IA)}function D_(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,km(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function o1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,km(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function j8(e,t){return D_(Ks(e,t))}function a1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!N_(e)||!o)&&F_(e,{label:a,value:l,data:i},r)}function $8(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function D8(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Ld=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},L_=function(t,n){return t.getOptionLabel(n)},Ql=function(t,n){return t.getOptionValue(n)};function R_(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function A_(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Ql(e,t);return n.some(function(i){return Ql(e,i)===r})}function F_(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var N_=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},L8=1,z_=function(e){eA(n,e);var t=iA(n);function n(r){var i;if(QR(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var c=i.props,d=c.onChange,f=c.name;u.name=f,i.ariaOnChange(s,u),d(s,u)},i.setValue=function(s,u,c){var d=i.props,f=d.closeMenuOnSelect,h=d.isMulti,g=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:g}),f&&(i.setState({inputIsHiddenAfterUpdate:!h}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:c})},i.selectOption=function(s){var u=i.props,c=u.blurInputOnSelect,d=u.isMulti,f=u.name,h=i.state.selectValue,g=d&&i.isOptionSelected(s,h),v=i.isOptionDisabled(s,h);if(g){var S=i.getOptionValue(s);i.setValue(h.filter(function(p){return i.getOptionValue(p)!==S}),"deselect-option",s)}else if(!v)d?i.setValue([].concat(km(h),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:f});return}c&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,c=i.state.selectValue,d=i.getOptionValue(s),f=c.filter(function(g){return i.getOptionValue(g)!==d}),h=ws(u,f,f[0]||null);i.onChange(h,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(ws(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),f=ws(s,d,d[0]||null);c&&i.onChange(f,{action:"pop-value",removedValue:c})},i.getFocusedOptionId=function(s){return Ld(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return o1(Ks(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return _A.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return L_(i.props,s)},i.getOptionValue=function(s){return Ql(i.props,s)},i.getStyles=function(s,u){var c=i.props.unstyled,d=C8[s](u,c);d.boxSizing="border-box";var f=i.props.styles[s];return f?f(d,u):d},i.getClassNames=function(s,u){var c,d;return(c=(d=i.props.classNames)[s])===null||c===void 0?void 0:c.call(d,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return Y6(i.props)},i.buildCategorizedOptions=function(){return Ks(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return D_(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:q({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,c=u.isMulti,d=u.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!c}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&gc(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,c=u&&u.item(0);c&&(i.initialTouchX=c.clientX,i.initialTouchY=c.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-i.initialTouchX),f=Math.abs(c.clientY-i.initialTouchY),h=5;i.userIsDragging=d>h||f>h}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,c=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(c,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),c=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:c>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return N_(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,c=u.isMulti,d=u.backspaceRemovesValue,f=u.escapeClearsValue,h=u.inputValue,g=u.isClearable,v=u.isDisabled,S=u.menuIsOpen,p=u.onKeyDown,m=u.tabSelectsValue,x=u.openMenuOnFocus,w=i.state,C=w.focusedOption,k=w.focusedValue,_=w.selectValue;if(!v&&!(typeof p=="function"&&(p(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!c||h)return;i.focusValue("previous");break;case"ArrowRight":if(!c||h)return;i.focusValue("next");break;case"Delete":case"Backspace":if(h)return;if(k)i.removeValue(k);else{if(!d)return;c?i.popValue():g&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!S||!m||!C||x&&i.isOptionSelected(C,_))return;i.selectOption(C);break;case"Enter":if(s.keyCode===229)break;if(S){if(!C||i.isComposing)return;i.selectOption(C);break}return;case"Escape":S?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:h}),i.onMenuClose()):g&&f&&i.clearValue();break;case" ":if(h)return;if(!S){i.openMenu("first");break}if(!C)return;i.selectOption(C);break;case"ArrowUp":S?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":S?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!S)return;i.focusOption("pageup");break;case"PageDown":if(!S)return;i.focusOption("pagedown");break;case"Home":if(!S)return;i.focusOption("first");break;case"End":if(!S)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++L8),i.state.selectValue=Hv(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=Ld(o,a[l])}return i}return JR(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Wv(this.menuListRef,this.focusedOptionRef),b8()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Wv(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),c=i==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,c=-1;if(a.length){switch(i){case"previous":s===0?c=0:s===-1?c=u:c=s-1;break;case"next":s>-1&&s<u&&(c=s+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:a[c]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Dd):q(q({},Dd),this.props.theme):Dd}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,f=d.isMulti,h=d.isRtl,g=d.options,v=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:v,isMulti:f,isRtl:h,options:g,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return R_(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return A_(this.props,i,o)}},{key:"filterOption",value:function(i,o){return F_(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,c=i.form,d=i.menuIsOpen,f=i.required,h=this.getComponents(),g=h.Input,v=this.state,S=v.inputIsHidden,p=v.ariaSelection,m=this.commonProps,x=l||this.getElementId("input"),w=q(q(q({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":f,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(p==null?void 0:p.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?b.createElement(g,X({},m,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:S,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:s},w)):b.createElement(s8,X({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Kl,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:c,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,f=this.commonProps,h=this.props,g=h.controlShouldRenderValue,v=h.isDisabled,S=h.isMulti,p=h.inputValue,m=h.placeholder,x=this.state,w=x.selectValue,C=x.focusedValue,k=x.isFocused;if(!this.hasValue()||!g)return p?null:b.createElement(d,X({},f,{key:"placeholder",isDisabled:v,isFocused:k,innerProps:{id:this.getElementId("placeholder")}}),m);if(S)return w.map(function(E,M){var I=E===C,$="".concat(i.getOptionLabel(E),"-").concat(i.getOptionValue(E));return b.createElement(a,X({},f,{components:{Container:l,Label:s,Remove:u},isFocused:I,isDisabled:v,key:$,index:M,removeProps:{onClick:function(){return i.removeValue(E)},onTouchEnd:function(){return i.removeValue(E)},onMouseDown:function(j){j.preventDefault()}},data:E}),i.formatOptionLabel(E,"value"))});if(p)return null;var _=w[0];return b.createElement(c,X({},f,{data:_,isDisabled:v}),this.formatOptionLabel(_,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,X({},a,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!o||!u)return null;var d={"aria-hidden":"true"};return b.createElement(o,X({},a,{innerProps:d,isDisabled:s,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return b.createElement(a,X({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,X({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,f=o.NoOptionsMessage,h=o.Option,g=this.commonProps,v=this.state.focusedOption,S=this.props,p=S.captureMenuScroll,m=S.inputValue,x=S.isLoading,w=S.loadingMessage,C=S.minMenuHeight,k=S.maxMenuHeight,_=S.menuIsOpen,E=S.menuPlacement,M=S.menuPosition,I=S.menuPortalTarget,$=S.menuShouldBlockScroll,P=S.menuShouldScrollIntoView,j=S.noOptionsMessage,R=S.onMenuScrollToTop,L=S.onMenuScrollToBottom;if(!_)return null;var F=function(G,Q){var Z=G.type,K=G.data,re=G.isDisabled,we=G.isSelected,Xe=G.label,Pe=G.value,qt=v===K,Ft=re?void 0:function(){return i.onOptionHover(K)},kt=re?void 0:function(){return i.selectOption(K)},ni="".concat(i.getElementId("option"),"-").concat(Q),pt={id:ni,onClick:kt,onMouseMove:Ft,onMouseOver:Ft,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:we};return b.createElement(h,X({},g,{innerProps:pt,data:K,isDisabled:re,isSelected:we,key:ni,label:Xe,type:Z,value:Pe,isFocused:qt,innerRef:qt?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(G.data,"menu"))},A;if(this.hasOptions())A=this.getCategorizedOptions().map(function(z){if(z.type==="group"){var G=z.data,Q=z.options,Z=z.index,K="".concat(i.getElementId("group"),"-").concat(Z),re="".concat(K,"-heading");return b.createElement(a,X({},g,{key:K,data:G,options:Q,Heading:l,headingProps:{id:re,data:z.data},label:i.formatGroupLabel(z.data)}),z.options.map(function(we){return F(we,"".concat(Z,"-").concat(we.index))}))}else if(z.type==="option")return F(z,"".concat(z.index))});else if(x){var O=w({inputValue:m});if(O===null)return null;A=b.createElement(d,g,O)}else{var D=j({inputValue:m});if(D===null)return null;A=b.createElement(f,g,D)}var N={minMenuHeight:C,maxMenuHeight:k,menuPlacement:E,menuPosition:M,menuShouldScrollIntoView:P},B=b.createElement(NA,X({},g,N),function(z){var G=z.ref,Q=z.placerProps,Z=Q.placement,K=Q.maxHeight;return b.createElement(s,X({},g,N,{innerRef:G,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:Z}),b.createElement(p8,{captureEnabled:p,onTopArrive:R,onBottomArrive:L,lockEnabled:$},function(re){return b.createElement(u,X({},g,{innerRef:function(Xe){i.getMenuListRef(Xe),re(Xe)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:K,focusedOption:v}),A)}))});return I||M==="fixed"?b.createElement(c,X({},g,{appendTo:I,controlElement:this.controlRef,menuPlacement:E,menuPosition:M}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return b.createElement(g8,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var f=d.map(function(v){return i.getOptionValue(v)}).join(a);return b.createElement("input",{name:u,type:"hidden",value:f})}else{var h=d.length>0?d.map(function(v,S){return b.createElement("input",{key:"i-".concat(S),name:u,type:"hidden",value:i.getOptionValue(v)})}):b.createElement("input",{name:u,type:"hidden",value:""});return b.createElement("div",null,h)}else{var g=d[0]?this.getOptionValue(d[0]):"";return b.createElement("input",{name:u,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return b.createElement(t8,X({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,c=u.className,d=u.id,f=u.isDisabled,h=u.menuIsOpen,g=this.state.isFocused,v=this.commonProps=this.getCommonProps();return b.createElement(l,X({},v,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:f,isFocused:g}),this.renderLiveRegion(),b.createElement(o,X({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:f,isFocused:g,menuIsOpen:h}),b.createElement(s,X({},v,{isDisabled:f}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(a,X({},v,{isDisabled:f}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,f=o.instancePrefix,h=i.options,g=i.value,v=i.menuIsOpen,S=i.inputValue,p=i.isMulti,m=Hv(g),x={};if(a&&(g!==a.value||h!==a.options||v!==a.menuIsOpen||S!==a.inputValue)){var w=v?j8(i,m):[],C=v?o1(Ks(i,m),"".concat(f,"-option")):[],k=l?$8(o,m):null,_=D8(o,w),E=Ld(C,_);x={selectValue:m,focusedOption:_,focusedOptionId:E,focusableOptionsWithIds:C,focusedValue:k,clearFocusValueOnUpdate:!1}}var M=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},I=u,$=c&&d;return c&&!$&&(I={value:ws(p,m,m[0]||null),options:m,action:"initial-input-focus"},$=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(I=null),q(q(q({},x),M),{},{prevProps:i,ariaSelection:I,prevWasFocused:$})}}]),n}(b.Component);z_.defaultProps=I8;var R8=b.forwardRef(function(e,t){var n=ZR(e);return b.createElement(z_,X({ref:t},n))}),Jl=R8;const A8=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,F8=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,N8=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>y.jsxs(A8,{children:[y.jsx(F8,{children:"Місто"}),y.jsx(Jl,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),z8=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,V8=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,B8=({options:e=[],value:t,onChange:n,selectedCity:r})=>y.jsxs(z8,{children:[y.jsx(V8,{children:"Спосіб доставки"}),y.jsx(Jl,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),Rd=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Ad=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,U8=({deliveryMethod:e,officeOptions:t,ukrOfficeOptions:n,selectedOffice:r,selectedUkrOffice:i,setSelectedOffice:o,setSelectedUkrOffice:a})=>e==="nova"?y.jsxs(Rd,{children:[y.jsx(Ad,{children:"Відділення Нової пошти"}),y.jsx(Jl,{options:t,onChange:l=>o(l),value:r,placeholder:"Оберіть відділення..."})]}):e==="ukr"?y.jsxs(Rd,{children:[y.jsx(Ad,{children:"Відділення Укрпошти"}),y.jsx(Jl,{options:n,onChange:l=>a(l),value:i,placeholder:"Оберіть відділення..."})]}):e==="pickup"?y.jsxs(Rd,{children:[y.jsx(Ad,{children:"Самовивіз"}),y.jsxs("div",{style:{backgroundColor:"#f9f9f9",padding:"10px",borderRadius:"6px",border:"1px solid #ddd",fontSize:"14px",color:"#333",lineHeight:"1.4"},children:[y.jsx("p",{children:"Ви обрали самовивіз."}),y.jsx("p",{children:"Адреса магазину: вул. Казармена 6Г, Київ"}),y.jsx("p",{children:"Графік роботи: Вт, Ср, Пт, Сб, Нд — 11:00–20:00; вихідні: Пн, Чт"}),y.jsx("p",{children:"Телефон: +380 99 999 99"})]})]}):null,H8=T.div`
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
`,q8=T.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,X8=T.div`
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
`,K8=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>y.jsxs(H8,{children:[y.jsx("h3",{children:"Ваше замовлення"}),y.jsx(G8,{children:e.map((o,a)=>{var l,s;return y.jsxs(Y8,{children:[y.jsx(q8,{src:((s=(l=o.images)==null?void 0:l[0])==null?void 0:s.url)||Ea,alt:o.name}),y.jsxs(X8,{children:[y.jsx("p",{className:"item-name",children:o.name}),y.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),y.jsxs("span",{className:"item-total",children:[o.price*o.quantity," грн"]})]},`${o.id}-${a}`)})}),y.jsxs("div",{className:"summary-row",children:[y.jsxs("span",{children:["Товари (",n,")"]}),y.jsxs("span",{children:[t," грн"]})]}),y.jsxs("div",{className:"summary-row",children:[y.jsx("span",{children:"Доставка"}),y.jsx("span",{children:"За тарифами перевізника"})]}),y.jsx("hr",{}),y.jsxs("div",{className:"total",children:[y.jsx("span",{children:"Всього до сплати:"}),y.jsxs("span",{children:[t," грн"]})]}),y.jsx(W8,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&y.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var V_={exports:{}};function Z8(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Fd=Z8(b),Q8=yu;function J8(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Pp(){return(Pp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function eF(e,t){e.prototype=Object.create(t.prototype),J8(e.prototype.constructor=e,t)}function tF(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function ci(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var nF=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],c=0;(s=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},s1=nF;function l1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function rF(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var iF={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},oF="_";function u1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=oF),n==null&&(n=iF),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Dt(e,t){return e.permanents.indexOf(t)!==-1}function vc(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Dt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function c1(e,t){return t.split("").every(function(n,r){return Dt(e,r)||!vc(e,r,n)})}function Ro(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Dt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Dt(e,o)&&vc(e,o,a)){i=o+1;break}}return i}function B_(e,t){return Ro(e,t)===e.mask.length}function Ln(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Mp(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Dt(e,t.length);)t+=r[t.length];return t}if(t)return Mp(e,Ln(e,""),t,0);for(var o=0;o<r.length;o++)Dt(e,o)?t+=r[o]:t+=n;return t}function aF(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(c,d){return d<n||i<=d?c:Dt(e,d)?a[d]:o}).join("");for(var u=i;u<s.length;u++)Dt(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Ln(e,t)}function Mp(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=B_(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;h=u,Dt(e,f=r)&&h!==i[f];){if(r>=t.length&&(t+=i[r]),c=u,d=r,o&&Dt(e,d)&&c===o)return!0;if(++r>=i.length)return!1}var c,d,f,h;return!vc(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),Ln(e,t)):o||(t+=u),++r<i.length)}),t}function sF(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;c=s,Dt(e,u=r)&&c!==i[u];)if(++r>=i.length)return!1;var u,c;return(vc(e,r,s)||s===o)&&r++,r<i.length}),r-l}function lF(e,t){for(var n=t;0<=n;--n)if(!Dt(e,n))return n;return null}function Xo(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Dt(e,r))return r;return null}function Nd(e){return e||e===0?e+"":""}function uF(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",c=0,d=0,f=Math.min(i.start,n.start);return n.end>i.start?d=(c=sF(e,r,u=s.slice(i.start,n.end),f))?i.length:0:s.length<r.length&&(d=r.length-s.length),s=r,d&&(d===1&&!i.length&&(f=i.start===n.start?Xo(e,n.start):lF(e,n.start)),s=aF(e,s,f,d)),s=Mp(e,s,u,f),(f+=c)>=o.length?f=o.length:f<a.length&&!c?f=a.length:f>=a.length&&f<l&&c&&(f=Xo(e,f)),u||(u=null),{value:s=Ln(e,s),enteredString:u,selection:{start:f,end:f}}}function cF(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function ht(e){return typeof e=="function"}function dF(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function U_(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function d1(e){return(U_()?dF():function(){return setTimeout(e,1e3/60)})(e)}function zd(e){(U_()||clearTimeout)(e)}var fF=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=d1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(zd(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var g=Q8.findDOMNode(ci(ci(i))),v=typeof window<"u"&&g instanceof window.Element;if(g&&!v)return null;if(g.nodeName!=="INPUT"&&(g=g.querySelector("input")),!g)throw new Error("react-input-mask: inputComponent doesn't contain input node");return g},i.getInputValue=function(){var g=i.getInputDOMNode();return g?g.value:null},i.setInputValue=function(g){var v=i.getInputDOMNode();v&&(i.value=g,v.value=g)},i.setCursorToEnd=function(){var g=Ro(i.maskOptions,i.value),v=Xo(i.maskOptions,g);v!==null&&i.setCursorPosition(v)},i.setSelection=function(g,v,S){S===void 0&&(S={});var p=i.getInputDOMNode(),m=i.isFocused();p&&m&&(S.deferred||l1(p,g,v),i.selectionDeferId!==null&&zd(i.selectionDeferId),i.selectionDeferId=d1(function(){i.selectionDeferId=null,l1(p,g,v)}),i.previousSelection={start:g,end:v,length:Math.abs(v-g)})},i.getSelection=function(){return rF(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(g){i.setSelection(g,g)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var g=i.maskOptions,v=g.mask,S=g.maskChar,p=g.permanents,m=g.formatChars;return{mask:v,maskChar:S,permanents:p,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:m}},i.isInputAutofilled=function(g,v,S,p){var m=i.getInputDOMNode();try{if(m.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||p.end<S.length&&v.end===g.length},i.onChange=function(g){var v=ci(ci(i)).beforePasteState,S=ci(ci(i)).previousSelection,p=i.props.beforeMaskedValueChange,m=i.getInputValue(),x=i.value,w=i.getSelection();i.isInputAutofilled(m,w,x,S)&&(x=Ln(i.maskOptions,""),S={start:0,end:0,length:0}),v&&(S=v.selection,x=v.value,w={start:S.start+m.length,end:S.start+m.length,length:0},m=x.slice(0,S.start)+m+x.slice(S.end),i.beforePasteState=null);var C=uF(i.maskOptions,m,w,x,S),k=C.enteredString,_=C.selection,E=C.value;if(ht(p)){var M=p({value:E,selection:_},{value:x,selection:S},k,i.getBeforeMaskedValueChangeConfig());E=M.value,_=M.selection}i.setInputValue(E),ht(i.props.onChange)&&i.props.onChange(g),i.isWindowsPhoneBrowser?i.setSelection(_.start,_.end,{deferred:!0}):i.setSelection(_.start,_.end)},i.onFocus=function(g){var v=i.props.beforeMaskedValueChange,S=i.maskOptions,p=S.mask,m=S.prefix;if(i.focused=!0,i.mounted=!0,p){if(i.value)Ro(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var x=Ln(i.maskOptions,m),w=Ln(i.maskOptions,x),C=Ro(i.maskOptions,w),k=Xo(i.maskOptions,C),_={start:k,end:k};if(ht(v)){var E=v({value:w,selection:_},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());w=E.value,_=E.selection}var M=w!==i.getInputValue();M&&i.setInputValue(w),M&&ht(i.props.onChange)&&i.props.onChange(g),i.setSelection(_.start,_.end)}i.runSaveSelectionLoop()}ht(i.props.onFocus)&&i.props.onFocus(g)},i.onBlur=function(g){var v=i.props.beforeMaskedValueChange,S=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,S&&!i.props.alwaysShowMask&&c1(i.maskOptions,i.value)){var p="";ht(v)&&(p=v({value:p,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var m=p!==i.getInputValue();m&&i.setInputValue(p),m&&ht(i.props.onChange)&&i.props.onChange(g)}ht(i.props.onBlur)&&i.props.onBlur(g)},i.onMouseDown=function(g){if(!i.focused&&document.addEventListener){i.mouseDownX=g.clientX,i.mouseDownY=g.clientY,i.mouseDownTime=new Date().getTime();var v=function S(p){if(document.removeEventListener("mouseup",S),i.focused){var m=Math.abs(p.clientX-i.mouseDownX),x=Math.abs(p.clientY-i.mouseDownY),w=Math.max(m,x),C=new Date().getTime()-i.mouseDownTime;(w<=10&&C<=200||w<=5&&C<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",v)}ht(i.props.onMouseDown)&&i.props.onMouseDown(g)},i.onPaste=function(g){ht(i.props.onPaste)&&i.props.onPaste(g),g.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(g){i.props.children==null&&ht(i.props.inputRef)&&i.props.inputRef(g)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,c=r.defaultValue,d=r.value;i.maskOptions=u1(o,a,l),c==null&&(c=""),d==null&&(d=c);var f=Nd(d);if(i.maskOptions.mask&&(s||f)&&(f=Ln(i.maskOptions,f),ht(u))){var h=r.value;r.value==null&&(h=c),f=u({value:f,selection:null},{value:h=Nd(h),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=f,i}eF(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=cF(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,c=this.maskOptions,d=a||this.isFocused(),f=this.props.value!=null,h=f?Nd(this.props.value):this.value,g=r?r.start:null;if(this.maskOptions=u1(l,s,u),this.maskOptions.mask){!c.mask&&this.isFocused()&&this.runSaveSelectionLoop();var v=this.maskOptions.mask&&this.maskOptions.mask!==c.mask;if(c.mask||f||(h=this.getInputValue()),(v||this.maskOptions.mask&&(h||d))&&(h=Ln(this.maskOptions,h)),v){var S=Ro(this.maskOptions,h);(g===null||S<g)&&(g=B_(this.maskOptions,h)?S:Xo(this.maskOptions,S))}!this.maskOptions.mask||!c1(this.maskOptions,h)||d||f&&this.props.value||(h="");var p={start:g,end:g};if(ht(o)){var m=o({value:h,selection:p},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());h=m.value,p=m.selection}this.value=h;var x=this.getInputValue()!==this.value;x?(this.setInputValue(this.value),this.forceUpdate()):v&&this.forceUpdate();var w=!1;p.start!=null&&p.end!=null&&(w=!r||r.start!==p.start||r.end!==p.end),(w||x)&&this.setSelection(p.start,p.end)}else c.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&zd(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=tF(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){ht(o)||s1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Pp({},a);l.forEach(function(c){return delete s[c]}),r=o(s),l.filter(function(c){return r.props[c]!=null&&r.props[c]!==a[c]}).length&&s1(!1)}else r=Fd.createElement("input",Pp({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Fd.cloneElement(r,u)},t}(Fd.Component),pF=fF;V_.exports=pF;var hF=V_.exports;const mF=w1(hF);T.div`
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
`,Ud=T.input`
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
`;const Hd=T.span`
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
`;const gF=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return y.jsxs(y.Fragment,{children:[y.jsx("h3",{children:"Контактні дані"}),y.jsxs(Vd,{children:[y.jsx(Bd,{children:"Прізвище та ім’я"}),y.jsx(Ud,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&y.jsx(Hd,{children:n.fullName})]}),y.jsxs(Vd,{children:[y.jsx(Bd,{children:"Номер телефону"}),y.jsx(mF,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>y.jsx(Ud,{...i,type:"tel"})}),n.phone&&y.jsx(Hd,{children:n.phone})]}),y.jsxs(Vd,{children:[y.jsx(Bd,{children:"E-mail"}),y.jsx(Ud,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&y.jsx(Hd,{children:n.email})]})]})},vF=T.div`
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
`;const bF=[{city:"Київ",address:"вул. Хрещатик, 1"},{city:"Київ",address:"вул. Січових Стрільців, 10"},{city:"Львів",address:"просп. Свободи, 5"}],f1={}.VITE_NP_API_KEY,p1="https://api.novaposhta.ua/v2.0/json/",wF=()=>{const e=Nn(L=>L.cart.items),t=nu(),[n,r]=b.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[i,o]=b.useState(""),[a,l]=b.useState(null),[s,u]=b.useState(null),[c,d]=b.useState(null),[f,h]=b.useState(null),[g,v]=b.useState([]),[S,p]=b.useState([]),[m,x]=b.useState([]),[w,C]=b.useState(""),k=e.reduce((L,F)=>L+F.price*F.quantity,0),_=e.reduce((L,F)=>L+F.quantity,0),E=()=>{const L=new Date().getFullYear().toString().slice(-2),F=Date.now().toString().slice(-4),A=Math.floor(100+Math.random()*900);return`${L}${F}${A}`};b.useEffect(()=>{if(i.length<2)return;const L=setTimeout(async()=>{const A=await(await fetch(p1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:f1,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:i}})})).json();v(A.data.map(O=>({value:O.Ref,label:O.Description})))},500);return()=>clearTimeout(L)},[i]),b.useEffect(()=>{if(!a||s!=="nova")return;(async()=>{const A=await(await fetch(p1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:f1,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:a.value}})})).json();p(A.data.map(O=>({value:O.Ref,label:O.Description})))})()},[a,s]),b.useEffect(()=>{if(s!=="ukr"||!a)return;const L=bF.filter(F=>F.city===a.label).filter(F=>F.address.toLowerCase().includes(w.toLowerCase())).slice(0,20);x(L.map((F,A)=>({value:A,label:F.address})))},[a,s,w]);const M=L=>{l(L),r(F=>({...F,city:(L==null?void 0:L.label)||"",postOffice:""})),u(null),d(null),h(null)},I=()=>{const L={};return n.fullName.trim().split(" ").length<2&&(L.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||(L.email="Некоректний email"),n.phone.replace(/\D/g,"").length<12&&(L.phone="Номер неповний"),a||(L.city=!0),s==="nova"&&!c&&(L.postOffice=!0),s==="ukr"&&!f&&(L.postOffice=!0),s||(L.delivery=!0),L},$=b.useMemo(I,[n,s,c,f,a]),P=Object.keys($).length===0&&e.length>0,j=async L=>{L.preventDefault();const F=E();await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:n.fullName,phone:n.phone,email:n.email,city:n.city,products:e.map(O=>({id:O.id,name:O.name,quantity:O.quantity})),status_order:"pending",order_number:F,delivery_method:s==="nova"?"Нова Пошта":s==="ukr"?"УкрПошта":"Самовивіз",delivery_address:s==="nova"?c==null?void 0:c.label:s==="ukr"?f==null?void 0:f.label:"Самовивіз"}})});const A={...n,city:a.label,deliveryMethod:s==="nova"?"Нова Пошта":s==="ukr"?"УкрПошта":"Самовивіз",address:s==="nova"?c==null?void 0:c.label:s==="ukr"?f==null?void 0:f.label:"Самовивіз",items:e,total:k,orderNumer:E()};t("/order-confirmation",{state:{order:A}})},R=b.useMemo(()=>{const L=[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}];return(a==null?void 0:a.label)==="Київ"&&L.push({value:"pickup",label:"Самовивіз"}),L},[a]);return y.jsx(vF,{children:y.jsxs(yF,{children:[y.jsxs(xF,{children:[y.jsx(gF,{formData:n,setFormData:r,errors:$}),y.jsx(N8,{cityOptions:g,selectedCity:a,onChange:M,onInputChange:o}),y.jsx(B8,{options:R,value:s,onChange:u,selectedCity:a}),y.jsx(U8,{deliveryMethod:s,officeOptions:S,ukrOfficeOptions:m,selectedOffice:c,selectedUkrOffice:f,setSelectedOffice:d,setSelectedUkrOffice:h,setUkrSearch:C})]}),y.jsx(K8,{cartItems:e,totalAmount:k,totalQuantity:_,isFormValid:P,handleSubmit:j})]})})},h1=T.div`
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
`,m1=T.h3`
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
`,OF=()=>{var r;const e=nu(),n=(r=Qi().state)==null?void 0:r.order;return n?y.jsxs(h1,{children:[y.jsx(SF,{children:"Дякуємо за ваше замовлення!"}),y.jsxs(di,{children:["Ваше замовлення ",y.jsxs("strong",{children:["№",n.orderNumer]})," успішно прийняте."]}),y.jsx(di,{children:"Ми зв’яжемось з Вами в найближчий час"}),y.jsxs(_F,{children:[y.jsx(m1,{children:"Деталі замовлення:"}),y.jsx(EF,{children:n.items.map(i=>y.jsxs(CF,{children:[y.jsxs("span",{className:"item-info",children:[i.name," (x",i.quantity,")"]}),y.jsxs("span",{className:"item-price",children:[i.price*i.quantity," грн"]})]},i.id))}),y.jsxs(di,{children:[y.jsx("strong",{children:"Спосіб доставки:"})," ",n.deliveryMethod]}),y.jsxs(di,{children:[y.jsx("strong",{children:"Адреса отримання:"})," ",n.city,", ",n.address]})]}),n.paymentMethod==="online"&&y.jsxs(kF,{children:[y.jsx(m1,{children:"Оплата"}),y.jsx(di,{style:{marginBottom:"15px"},children:"Натисніть кнопку нижче для миттєвої оплати:"}),y.jsx(Ss,{primary:!0,onClick:()=>window.location.href=n.paymentLink,children:"Оплатити зараз"})]}),y.jsxs(TF,{children:[y.jsx(Ss,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),y.jsx(Ss,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):y.jsxs(h1,{children:[y.jsx(di,{children:"Завантаження даних замовлення..."}),y.jsx(Ss,{onClick:()=>e("/"),children:"На головну"})]})},PF=T.section`
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
`,NF=()=>y.jsxs(PF,{children:[y.jsxs(MF,{children:[y.jsxs(IF,{children:[y.jsx(jF,{children:"Про Дідів Хлів"}),y.jsx($F,{children:"Даємо друге життя якісним велозапчастинам"})]}),y.jsxs(DF,{children:[y.jsx(LF,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),y.jsx(PS,{})]}),y.jsxs(RF,{children:[y.jsx(AF,{children:"Наша майстерня"}),y.jsxs(FF,{children:[y.jsx(_s,{color:"#e2e2e2",children:"Фото майстерні"}),y.jsx(_s,{color:"#d1d1d1",children:"Процес діагностики"}),y.jsx(_s,{color:"#bcbcbc",children:"Склад запчастин"}),y.jsx(_s,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),zF=()=>{const{pathname:e}=Qi();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},VF=T.section`
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
`,UF=T.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,HF=T.p`
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
`,qF=T.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,XF=T.p`
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
`,g1=T.a`
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

 
`,QF=()=>y.jsx(VF,{children:y.jsxs(BF,{children:[y.jsx(UF,{children:"Контакти"}),y.jsx(HF,{children:"Зв’яжіться з нами для консультації або замовлення"}),y.jsxs(WF,{children:[y.jsxs(GF,{children:[y.jsxs(Es,{children:[y.jsx("h3",{children:"Адреса"}),y.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),y.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),y.jsxs(Es,{children:[y.jsx("h3",{children:"Телефон"}),y.jsx("p",{children:"+38 (097) 123-45-67"})]}),y.jsxs(Es,{children:[y.jsx("h3",{children:"Email"}),y.jsx("p",{children:"didivhliv.com"})]}),y.jsxs(Es,{children:[y.jsx("h3",{children:"Графік роботи"}),y.jsx("p",{children:"З 11:00 - 20:00"}),y.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),y.jsxs(YF,{children:[y.jsx(qF,{children:"Ми в соцмережах"}),y.jsx(XF,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),y.jsxs(KF,{children:[y.jsxs(g1,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${cn}#icon-instagram`})}),y.jsx("span",{children:"Instagram"})]}),y.jsxs(g1,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${cn}#icon-telegram`})}),y.jsx("span",{children:"Telegram"})]})]}),y.jsx(ZF,{children:"Приєднуйся до спільноти!"})]})]})]})}),JF="";function eN(){return console.log(JF),y.jsxs(k3,{children:[y.jsx(lM,{}),y.jsx(zF,{}),y.jsx(b.Suspense,{fallback:y.jsx(aM,{}),children:y.jsx(dE,{children:y.jsxs(mt,{path:"/",element:y.jsx(JO,{}),children:[y.jsx(mt,{index:!0,element:y.jsx(Hj,{})}),y.jsx(mt,{path:"catalog",element:y.jsx(b3,{})}),y.jsx(mt,{path:"/catalog/:category",element:y.jsx(U$,{})}),y.jsx(mt,{path:"/product/:id",element:y.jsx(UL,{})}),y.jsx(mt,{path:"cart",element:y.jsx(gR,{})}),y.jsx(mt,{path:"favorite",element:y.jsx(FR,{})}),y.jsx(mt,{path:"checkout",element:y.jsx(wF,{})}),y.jsx(mt,{path:"/order-confirmation",element:y.jsx(OF,{})}),y.jsx(mt,{path:"about",element:y.jsx(NF,{})}),y.jsx(mt,{path:"contacts",element:y.jsx(QF,{})}),y.jsx(mt,{path:"delivery",element:y.jsx(HR,{})}),y.jsx(mt,{path:"*",element:y.jsx(C3,{})})]})})})]})}var jm="persist:",H_="persist/FLUSH",$m="persist/REHYDRATE",W_="persist/PAUSE",G_="persist/PERSIST",Y_="persist/PURGE",q_="persist/REGISTER",tN=-1;function Zs(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Zs=function(n){return typeof n}:Zs=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Zs(e)}function v1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function nN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?v1(n,!0).forEach(function(r){rN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function iN(e,t,n,r){r.debug;var i=nN({},n);return e&&Zs(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function oN(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:jm).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(C){return C}:typeof e.serialize=="function"?l=e.serialize:l=aN;var s=e.writeFailHandler||null,u={},c={},d=[],f=null,h=null,g=function(C){Object.keys(C).forEach(function(k){p(k)&&u[k]!==C[k]&&d.indexOf(k)===-1&&d.push(k)}),Object.keys(u).forEach(function(k){C[k]===void 0&&p(k)&&d.indexOf(k)===-1&&u[k]!==void 0&&d.push(k)}),f===null&&(f=setInterval(v,i)),u=C};function v(){if(d.length===0){f&&clearInterval(f),f=null;return}var w=d.shift(),C=r.reduce(function(k,_){return _.in(k,w,u)},u[w]);if(C!==void 0)try{c[w]=l(C)}catch(k){console.error("redux-persist/createPersistoid: error serializing state",k)}else delete c[w];d.length===0&&S()}function S(){Object.keys(c).forEach(function(w){u[w]===void 0&&delete c[w]}),h=a.setItem(o,l(c)).catch(m)}function p(w){return!(n&&n.indexOf(w)===-1&&w!=="_persist"||t&&t.indexOf(w)!==-1)}function m(w){s&&s(w)}var x=function(){for(;d.length!==0;)v();return h||Promise.resolve()};return{update:g,flush:x}}function aN(e){return JSON.stringify(e)}function sN(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:jm).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=lN,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,c){return c.out(u,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function lN(e){return JSON.parse(e)}function uN(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:jm).concat(e.key);return t.removeItem(n,cN)}function cN(e){}function y1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function On(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?y1(n,!0).forEach(function(r){dN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fN(e,t){if(e==null)return{};var n=pN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function pN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var hN=5e3;function X_(e,t){var n=e.version!==void 0?e.version:tN;e.debug;var r=e.stateReconciler===void 0?iN:e.stateReconciler,i=e.getStoredState||sN,o=e.timeout!==void 0?e.timeout:hN,a=null,l=!1,s=!0,u=function(d){return d._persist.rehydrated&&a&&!s&&a.update(d),d};return function(c,d){var f=c||{},h=f._persist,g=fN(f,["_persist"]),v=g;if(d.type===G_){var S=!1,p=function(E,M){S||(d.rehydrate(e.key,E,M),S=!0)};if(o&&setTimeout(function(){!S&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=oN(e)),h)return On({},t(v,d),{_persist:h});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(_){var E=e.migrate||function(M,I){return Promise.resolve(M)};E(_,n).then(function(M){p(M)},function(M){p(void 0,M)})},function(_){p(void 0,_)}),On({},t(v,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===Y_)return l=!0,d.result(uN(e)),On({},t(v,d),{_persist:h});if(d.type===H_)return d.result(a&&a.flush()),On({},t(v,d),{_persist:h});if(d.type===W_)s=!0;else if(d.type===$m){if(l)return On({},v,{_persist:On({},h,{rehydrated:!0})});if(d.key===e.key){var m=t(v,d),x=d.payload,w=r!==!1&&x!==void 0?r(x,c,m,e):m,C=On({},w,{_persist:On({},h,{rehydrated:!0})});return u(C)}}}if(!h)return t(c,d);var k=t(v,d);return k===v?c:u(On({},k,{_persist:h}))}}function x1(e){return vN(e)||gN(e)||mN()}function mN(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function gN(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function vN(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function b1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ip(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?b1(n,!0).forEach(function(r){yN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K_={registry:[],bootstrapped:!1},xN=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:K_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case q_:return Ip({},t,{registry:[].concat(x1(t.registry),[n.key])});case $m:var r=t.registry.indexOf(n.key),i=x1(t.registry);return i.splice(r,1),Ip({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function bN(e,t,n){var r=n||!1,i=om(xN,K_,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:q_,key:u})},a=function(u,c,d){var f={type:$m,payload:c,err:d,key:u};e.dispatch(f),i.dispatch(f),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Ip({},i,{purge:function(){var u=[];return e.dispatch({type:Y_,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:H_,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){e.dispatch({type:W_})},persist:function(){e.dispatch({type:G_,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var Dm={},Lm={};Lm.__esModule=!0;Lm.default=_N;function Qs(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Qs=function(n){return typeof n}:Qs=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Qs(e)}function Wd(){}var wN={getItem:Wd,setItem:Wd,removeItem:Wd};function SN(e){if((typeof self>"u"?"undefined":Qs(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function _N(e){var t="".concat(e,"Storage");return SN(t)?self[t]:wN}Dm.__esModule=!0;Dm.default=kN;var EN=CN(Lm);function CN(e){return e&&e.__esModule?e:{default:e}}function kN(e){var t=(0,EN.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var Rm=void 0,TN=ON(Dm);function ON(e){return e&&e.__esModule?e:{default:e}}var PN=(0,TN.default)("local");Rm=PN;const MN={key:"cart",storage:Rm},IN={key:"favorites",storage:Rm},jN=X_(MN,oj),$N=X_(IN,V$),Z_=B5({reducer:{cart:jN,favorites:$N},middleware:e=>e({serializableCheck:!1})});bN(Z_);Kd.createRoot(document.getElementById("root")).render(y.jsx(dO,{store:Z_,children:y.jsx(W.StrictMode,{children:y.jsx(vE,{basename:"/Didiv/",children:y.jsx(eN,{})})})}));
