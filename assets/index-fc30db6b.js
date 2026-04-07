function q_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var J=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function y1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function _t(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var x1={exports:{}},Zl={},b1={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),K_=Symbol.for("react.portal"),Z_=Symbol.for("react.fragment"),Q_=Symbol.for("react.strict_mode"),J_=Symbol.for("react.profiler"),e2=Symbol.for("react.provider"),t2=Symbol.for("react.context"),n2=Symbol.for("react.forward_ref"),r2=Symbol.for("react.suspense"),i2=Symbol.for("react.memo"),o2=Symbol.for("react.lazy"),Rm=Symbol.iterator;function a2(e){return e===null||typeof e!="object"?null:(e=Rm&&e[Rm]||e["@@iterator"],typeof e=="function"?e:null)}var w1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S1=Object.assign,_1={};function Yi(e,t,n){this.props=e,this.context=t,this.refs=_1,this.updater=n||w1}Yi.prototype.isReactComponent={};Yi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function E1(){}E1.prototype=Yi.prototype;function Op(e,t,n){this.props=e,this.context=t,this.refs=_1,this.updater=n||w1}var Mp=Op.prototype=new E1;Mp.constructor=Op;S1(Mp,Yi.prototype);Mp.isPureReactComponent=!0;var Am=Array.isArray,C1=Object.prototype.hasOwnProperty,Ip={current:null},k1={key:!0,ref:!0,__self:!0,__source:!0};function T1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)C1.call(t,r)&&!k1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Sa,type:e,key:o,ref:a,props:i,_owner:Ip.current}}function s2(e,t){return{$$typeof:Sa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function jp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sa}function l2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fm=/\/+/g;function yc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?l2(""+e.key):t.toString(36)}function Ss(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Sa:case K_:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+yc(a,0):r,Am(i)?(n="",e!=null&&(n=e.replace(Fm,"$&/")+"/"),Ss(i,t,n,"",function(u){return u})):i!=null&&(jp(i)&&(i=s2(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Fm,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Am(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+yc(o,l);a+=Ss(o,t,n,s,i)}else if(s=a2(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+yc(o,l++),a+=Ss(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Va(e,t,n){if(e==null)return e;var r=[],i=0;return Ss(e,r,"","",function(o){return t.call(n,o,i++)}),r}function u2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ct={current:null},_s={transition:null},c2={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:_s,ReactCurrentOwner:Ip};ne.Children={map:Va,forEach:function(e,t,n){Va(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Va(e,function(){t++}),t},toArray:function(e){return Va(e,function(t){return t})||[]},only:function(e){if(!jp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ne.Component=Yi;ne.Fragment=Z_;ne.Profiler=J_;ne.PureComponent=Op;ne.StrictMode=Q_;ne.Suspense=r2;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c2;ne.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=S1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ip.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)C1.call(t,s)&&!k1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Sa,type:e.type,key:i,ref:o,props:r,_owner:a}};ne.createContext=function(e){return e={$$typeof:t2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:e2,_context:e},e.Consumer=e};ne.createElement=T1;ne.createFactory=function(e){var t=T1.bind(null,e);return t.type=e,t};ne.createRef=function(){return{current:null}};ne.forwardRef=function(e){return{$$typeof:n2,render:e}};ne.isValidElement=jp;ne.lazy=function(e){return{$$typeof:o2,_payload:{_status:-1,_result:e},_init:u2}};ne.memo=function(e,t){return{$$typeof:i2,type:e,compare:t===void 0?null:t}};ne.startTransition=function(e){var t=_s.transition;_s.transition={};try{e()}finally{_s.transition=t}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(e,t){return ct.current.useCallback(e,t)};ne.useContext=function(e){return ct.current.useContext(e)};ne.useDebugValue=function(){};ne.useDeferredValue=function(e){return ct.current.useDeferredValue(e)};ne.useEffect=function(e,t){return ct.current.useEffect(e,t)};ne.useId=function(){return ct.current.useId()};ne.useImperativeHandle=function(e,t,n){return ct.current.useImperativeHandle(e,t,n)};ne.useInsertionEffect=function(e,t){return ct.current.useInsertionEffect(e,t)};ne.useLayoutEffect=function(e,t){return ct.current.useLayoutEffect(e,t)};ne.useMemo=function(e,t){return ct.current.useMemo(e,t)};ne.useReducer=function(e,t,n){return ct.current.useReducer(e,t,n)};ne.useRef=function(e){return ct.current.useRef(e)};ne.useState=function(e){return ct.current.useState(e)};ne.useSyncExternalStore=function(e,t,n){return ct.current.useSyncExternalStore(e,t,n)};ne.useTransition=function(){return ct.current.useTransition()};ne.version="18.2.0";b1.exports=ne;var b=b1.exports;const W=y1(b),Ud=q_({__proto__:null,default:W},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d2=b,f2=Symbol.for("react.element"),p2=Symbol.for("react.fragment"),h2=Object.prototype.hasOwnProperty,m2=d2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g2={key:!0,ref:!0,__self:!0,__source:!0};function P1(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)h2.call(t,r)&&!g2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:f2,type:e,key:o,ref:a,props:i,_owner:m2.current}}Zl.Fragment=p2;Zl.jsx=P1;Zl.jsxs=P1;x1.exports=Zl;var y=x1.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yo(){return Yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yo.apply(this,arguments)}var ar;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ar||(ar={}));const Nm="popstate";function v2(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Hd("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ks(i)}return x2(t,n,null,e)}function $e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $p(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function y2(){return Math.random().toString(36).substr(2,8)}function zm(e,t){return{usr:e.state,key:e.key,idx:t}}function Hd(e,t,n,r){return n===void 0&&(n=null),Yo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Xi(t):t,{state:n,key:t&&t.key||r||y2()})}function Ks(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Xi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function x2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=ar.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(Yo({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){l=ar.Pop;let w=c(),f=w==null?null:w-u;u=w,s&&s({action:l,location:g.location,delta:f})}function p(w,f){l=ar.Push;let m=Hd(g.location,w,f);n&&n(m,w),u=c()+1;let x=zm(m,u),S=g.createHref(m);try{a.pushState(x,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}o&&s&&s({action:l,location:g.location,delta:1})}function h(w,f){l=ar.Replace;let m=Hd(g.location,w,f);n&&n(m,w),u=c();let x=zm(m,u),S=g.createHref(m);a.replaceState(x,"",S),o&&s&&s({action:l,location:g.location,delta:0})}function v(w){let f=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:Ks(w);return $e(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let g={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Nm,d),s=w,()=>{i.removeEventListener(Nm,d),s=null}},createHref(w){return t(i,w)},createURL:v,encodeLocation(w){let f=v(w);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:h,go(w){return a.go(w)}};return g}var Vm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Vm||(Vm={}));function b2(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Xi(t):t,i=Dp(r.pathname||"/",n);if(i==null)return null;let o=O1(e);w2(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=M2(o[l],$2(i));return a}function O1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&($e(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=dr([r,s.relativePath]),c=n.concat(s);o.children&&o.children.length>0&&($e(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),O1(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:P2(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of M1(o.path))i(o,a,s)}),t}function M1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=M1(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function w2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:O2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const S2=/^:\w+$/,_2=3,E2=2,C2=1,k2=10,T2=-2,Bm=e=>e==="*";function P2(e,t){let n=e.split("/"),r=n.length;return n.some(Bm)&&(r+=T2),t&&(r+=E2),n.filter(i=>!Bm(i)).reduce((i,o)=>i+(S2.test(o)?_2:o===""?C2:k2),r)}function O2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function M2(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=I2({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;o.push({params:r,pathname:dr([i,c.pathname]),pathnameBase:A2(dr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=dr([i,c.pathnameBase]))}return o}function I2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=j2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let p=l[d]||"";a=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=D2(l[d]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function j2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),$p(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function $2(e){try{return decodeURI(e)}catch(t){return $p(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function D2(e,t){try{return decodeURIComponent(e)}catch(n){return $p(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Dp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function L2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Xi(e):e;return{pathname:n?n.startsWith("/")?n:R2(n,t):t,search:F2(r),hash:N2(i)}}function R2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function I1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function j1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Xi(e):(i=Yo({},e),$e(!i.pathname||!i.pathname.includes("?"),xc("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),xc("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),xc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}l=d>=0?t[d]:"/"}let s=L2(i,l),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const dr=e=>e.join("/").replace(/\/\/+/g,"/"),A2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),F2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,N2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function z2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $1=["post","put","patch","delete"];new Set($1);const V2=["get",...$1];new Set(V2);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zs(){return Zs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zs.apply(this,arguments)}const Lp=b.createContext(null),B2=b.createContext(null),qi=b.createContext(null),Ql=b.createContext(null),Xn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),D1=b.createContext(null);function U2(e,t){let{relative:n}=t===void 0?{}:t;_a()||$e(!1);let{basename:r,navigator:i}=b.useContext(qi),{hash:o,pathname:a,search:l}=A1(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:dr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function _a(){return b.useContext(Ql)!=null}function Ki(){return _a()||$e(!1),b.useContext(Ql).location}function L1(e){b.useContext(qi).static||b.useLayoutEffect(e)}function Jl(){let{isDataRoute:e}=b.useContext(Xn);return e?iE():H2()}function H2(){_a()||$e(!1);let e=b.useContext(Lp),{basename:t,navigator:n}=b.useContext(qi),{matches:r}=b.useContext(Xn),{pathname:i}=Ki(),o=JSON.stringify(I1(r).map(s=>s.pathnameBase)),a=b.useRef(!1);return L1(()=>{a.current=!0}),b.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let c=j1(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:dr([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}const W2=b.createContext(null);function G2(e){let t=b.useContext(Xn).outlet;return t&&b.createElement(W2.Provider,{value:e},t)}function R1(){let{matches:e}=b.useContext(Xn),t=e[e.length-1];return t?t.params:{}}function A1(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(Xn),{pathname:i}=Ki(),o=JSON.stringify(I1(r).map(a=>a.pathnameBase));return b.useMemo(()=>j1(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Y2(e,t){return X2(e,t)}function X2(e,t,n){_a()||$e(!1);let{navigator:r}=b.useContext(qi),{matches:i}=b.useContext(Xn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Ki(),u;if(t){var c;let g=typeof t=="string"?Xi(t):t;l==="/"||(c=g.pathname)!=null&&c.startsWith(l)||$e(!1),u=g}else u=s;let d=u.pathname||"/",p=l==="/"?d:d.slice(l.length)||"/",h=b2(e,{pathname:p}),v=J2(h&&h.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:dr([l,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:dr([l,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,n);return t&&v?b.createElement(Ql.Provider,{value:{location:Zs({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ar.Pop}},v):v}function q2(){let e=rE(),t=z2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const K2=b.createElement(q2,null);class Z2 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(Xn.Provider,{value:this.props.routeContext},b.createElement(D1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Q2(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Lp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Xn.Provider,{value:t},r)}function J2(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||$e(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let c=s.route.id?a==null?void 0:a[s.route.id]:null,d=null;n&&(d=s.route.errorElement||K2);let p=t.concat(o.slice(0,u+1)),h=()=>{let v;return c?v=d:s.route.Component?v=b.createElement(s.route.Component,null):s.route.element?v=s.route.element:v=l,b.createElement(Q2,{match:s,routeContext:{outlet:l,matches:p,isDataRoute:n!=null},children:v})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?b.createElement(Z2,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var F1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(F1||{}),Qs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qs||{});function eE(e){let t=b.useContext(Lp);return t||$e(!1),t}function tE(e){let t=b.useContext(B2);return t||$e(!1),t}function nE(e){let t=b.useContext(Xn);return t||$e(!1),t}function N1(e){let t=nE(),n=t.matches[t.matches.length-1];return n.route.id||$e(!1),n.route.id}function rE(){var e;let t=b.useContext(D1),n=tE(Qs.UseRouteError),r=N1(Qs.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function iE(){let{router:e}=eE(F1.UseNavigateStable),t=N1(Qs.UseNavigateStable),n=b.useRef(!1);return L1(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Zs({fromRouteId:t},o)))},[e,t])}function oE(e){return G2(e.context)}function mt(e){$e(!1)}function aE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ar.Pop,navigator:o,static:a=!1}=e;_a()&&$e(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=Xi(r));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:h="default"}=r,v=b.useMemo(()=>{let g=Dp(u,l);return g==null?null:{location:{pathname:g,search:c,hash:d,state:p,key:h},navigationType:i}},[l,u,c,d,p,h,i]);return v==null?null:b.createElement(qi.Provider,{value:s},b.createElement(Ql.Provider,{children:n,value:v}))}function sE(e){let{children:t,location:n}=e;return Y2(Wd(t),n)}new Promise(()=>{});function Wd(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Wd(r.props.children,o));return}r.type!==mt&&$e(!1),!r.props.index||!r.props.children||$e(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Wd(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gd(){return Gd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gd.apply(this,arguments)}function lE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function uE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function cE(e,t){return e.button===0&&(!t||t==="_self")&&!uE(e)}const dE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],fE="startTransition",Um=Ud[fE];function pE(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=v2({window:i,v5Compat:!0}));let a=o.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=b.useCallback(d=>{u&&Um?Um(()=>s(d)):s(d)},[s,u]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(aE,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const hE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:c}=t,d=lE(t,dE),{basename:p}=b.useContext(qi),h,v=!1;if(typeof u=="string"&&mE.test(u)&&(h=u,hE))try{let m=new URL(window.location.href),x=u.startsWith("//")?new URL(m.protocol+u):new URL(u),S=Dp(x.pathname,p);x.origin===m.origin&&S!=null?u=S+x.search+x.hash:v=!0}catch{}let g=U2(u,{relative:i}),w=gE(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:i});function f(m){r&&r(m),m.defaultPrevented||w(m)}return b.createElement("a",Gd({},d,{href:h||g,onClick:v||o?r:f,ref:n,target:s}))});var Hm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Hm||(Hm={}));var Wm;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wm||(Wm={}));function gE(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Jl(),s=Ki(),u=A1(e,{relative:a});return b.useCallback(c=>{if(cE(c,n)){c.preventDefault();let d=r!==void 0?r:Ks(s)===Ks(u);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}var Yd={},z1={exports:{}},Lt={},V1={exports:{}},B1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,D){var N=P.length;P.push(D);e:for(;0<N;){var B=N-1>>>1,z=P[B];if(0<i(z,D))P[B]=D,P[N]=z,N=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],N=P.pop();if(N!==D){P[0]=N;e:for(var B=0,z=P.length,G=z>>>1;B<G;){var Q=2*(B+1)-1,Z=P[Q],K=Q+1,re=P[K];if(0>i(Z,N))K<z&&0>i(re,Z)?(P[B]=re,P[K]=N,B=K):(P[B]=Z,P[Q]=N,B=Q);else if(K<z&&0>i(re,N))P[B]=re,P[K]=N,B=K;else break e}}return D}function i(P,D){var N=P.sortIndex-D.sortIndex;return N!==0?N:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,d=null,p=3,h=!1,v=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=P)r(u),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(u)}}function S(P){if(g=!1,x(P),!v)if(n(s)!==null)v=!0,F(C);else{var D=n(u);D!==null&&A(S,D.startTime-P)}}function C(P,D){v=!1,g&&(g=!1,f(E),E=-1),h=!0;var N=p;try{for(x(D),d=n(s);d!==null&&(!(d.expirationTime>D)||P&&!$());){var B=d.callback;if(typeof B=="function"){d.callback=null,p=d.priorityLevel;var z=B(d.expirationTime<=D);D=e.unstable_now(),typeof z=="function"?d.callback=z:d===n(s)&&r(s),x(D)}else r(s);d=n(s)}if(d!==null)var G=!0;else{var Q=n(u);Q!==null&&A(S,Q.startTime-D),G=!1}return G}finally{d=null,p=N,h=!1}}var k=!1,_=null,E=-1,M=5,I=-1;function $(){return!(e.unstable_now()-I<M)}function O(){if(_!==null){var P=e.unstable_now();I=P;var D=!0;try{D=_(!0,P)}finally{D?j():(k=!1,_=null)}}else k=!1}var j;if(typeof m=="function")j=function(){m(O)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,L=R.port2;R.port1.onmessage=O,j=function(){L.postMessage(null)}}else j=function(){w(O,0)};function F(P){_=P,k||(k=!0,j())}function A(P,D){E=w(function(){P(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||h||(v=!0,F(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var N=p;p=D;try{return P()}finally{p=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var N=p;p=P;try{return D()}finally{p=N}},e.unstable_scheduleCallback=function(P,D,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,P){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=N+z,P={id:c++,callback:D,priorityLevel:P,startTime:N,expirationTime:z,sortIndex:-1},N>B?(P.sortIndex=N,t(u,P),n(s)===null&&P===n(u)&&(g?(f(E),E=-1):g=!0,A(S,N-B))):(P.sortIndex=z,t(s,P),v||h||(v=!0,F(C))),P},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(P){var D=p;return function(){var N=p;p=D;try{return P.apply(this,arguments)}finally{p=N}}}})(B1);V1.exports=B1;var vE=V1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1=b,$t=vE;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var H1=new Set,Xo={};function Jr(e,t){Ii(e,t),Ii(e+"Capture",t)}function Ii(e,t){for(Xo[e]=t,e=0;e<t.length;e++)H1.add(t[e])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xd=Object.prototype.hasOwnProperty,yE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gm={},Ym={};function xE(e){return Xd.call(Ym,e)?!0:Xd.call(Gm,e)?!1:yE.test(e)?Ym[e]=!0:(Gm[e]=!0,!1)}function bE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wE(e,t,n,r){if(t===null||typeof t>"u"||bE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function dt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Xe[e]=new dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Xe[t]=new dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Xe[e]=new dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Xe[e]=new dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Xe[e]=new dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Xe[e]=new dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Xe[e]=new dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Xe[e]=new dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Xe[e]=new dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rp=/[\-:]([a-z])/g;function Ap(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Rp,Ap);Xe[t]=new dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Rp,Ap);Xe[t]=new dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Rp,Ap);Xe[t]=new dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Xe[e]=new dt(e,1,!1,e.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Xe[e]=new dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fp(e,t,n,r){var i=Xe.hasOwnProperty(t)?Xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wE(t,n,i,r)&&(n=null),r||i===null?xE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qn=U1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ba=Symbol.for("react.element"),di=Symbol.for("react.portal"),fi=Symbol.for("react.fragment"),Np=Symbol.for("react.strict_mode"),qd=Symbol.for("react.profiler"),W1=Symbol.for("react.provider"),G1=Symbol.for("react.context"),zp=Symbol.for("react.forward_ref"),Kd=Symbol.for("react.suspense"),Zd=Symbol.for("react.suspense_list"),Vp=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),Y1=Symbol.for("react.offscreen"),Xm=Symbol.iterator;function co(e){return e===null||typeof e!="object"?null:(e=Xm&&e[Xm]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,bc;function Co(e){if(bc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bc=t&&t[1]||""}return`
`+bc+e}var wc=!1;function Sc(e,t){if(!e||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Co(e):""}function SE(e){switch(e.tag){case 5:return Co(e.type);case 16:return Co("Lazy");case 13:return Co("Suspense");case 19:return Co("SuspenseList");case 0:case 2:case 15:return e=Sc(e.type,!1),e;case 11:return e=Sc(e.type.render,!1),e;case 1:return e=Sc(e.type,!0),e;default:return""}}function Qd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fi:return"Fragment";case di:return"Portal";case qd:return"Profiler";case Np:return"StrictMode";case Kd:return"Suspense";case Zd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case G1:return(e.displayName||"Context")+".Consumer";case W1:return(e._context.displayName||"Context")+".Provider";case zp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vp:return t=e.displayName||null,t!==null?t:Qd(e.type)||"Memo";case nr:t=e._payload,e=e._init;try{return Qd(e(t))}catch{}}return null}function _E(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qd(t);case 8:return t===Np?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function X1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function EE(e){var t=X1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ua(e){e._valueTracker||(e._valueTracker=EE(e))}function q1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=X1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Js(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jd(e,t){var n=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function K1(e,t){t=t.checked,t!=null&&Fp(e,"checked",t,!1)}function ef(e,t){K1(e,t);var n=wr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?tf(e,t.type,n):t.hasOwnProperty("defaultValue")&&tf(e,t.type,wr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Km(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function tf(e,t,n){(t!=="number"||Js(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ko=Array.isArray;function _i(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function nf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(ko(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wr(n)}}function Z1(e,t){var n=wr(t.value),r=wr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Q1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Q1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ha,J1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ha.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Do={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CE=["Webkit","ms","Moz","O"];Object.keys(Do).forEach(function(e){CE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Do[t]=Do[e]})});function ey(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Do.hasOwnProperty(e)&&Do[e]?(""+t).trim():t+"px"}function ty(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ey(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var kE=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function of(e,t){if(t){if(kE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function af(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sf=null;function Bp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lf=null,Ei=null,Ci=null;function Jm(e){if(e=ka(e)){if(typeof lf!="function")throw Error(V(280));var t=e.stateNode;t&&(t=iu(t),lf(e.stateNode,e.type,t))}}function ny(e){Ei?Ci?Ci.push(e):Ci=[e]:Ei=e}function ry(){if(Ei){var e=Ei,t=Ci;if(Ci=Ei=null,Jm(e),t)for(e=0;e<t.length;e++)Jm(t[e])}}function iy(e,t){return e(t)}function oy(){}var _c=!1;function ay(e,t,n){if(_c)return e(t,n);_c=!0;try{return iy(e,t,n)}finally{_c=!1,(Ei!==null||Ci!==null)&&(oy(),ry())}}function Ko(e,t){var n=e.stateNode;if(n===null)return null;var r=iu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var uf=!1;if(Bn)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){uf=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{uf=!1}function TE(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Lo=!1,el=null,tl=!1,cf=null,PE={onError:function(e){Lo=!0,el=e}};function OE(e,t,n,r,i,o,a,l,s){Lo=!1,el=null,TE.apply(PE,arguments)}function ME(e,t,n,r,i,o,a,l,s){if(OE.apply(this,arguments),Lo){if(Lo){var u=el;Lo=!1,el=null}else throw Error(V(198));tl||(tl=!0,cf=u)}}function ei(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function eg(e){if(ei(e)!==e)throw Error(V(188))}function IE(e){var t=e.alternate;if(!t){if(t=ei(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return eg(i),e;if(o===r)return eg(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function ly(e){return e=IE(e),e!==null?uy(e):null}function uy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uy(e);if(t!==null)return t;e=e.sibling}return null}var cy=$t.unstable_scheduleCallback,tg=$t.unstable_cancelCallback,jE=$t.unstable_shouldYield,$E=$t.unstable_requestPaint,Te=$t.unstable_now,DE=$t.unstable_getCurrentPriorityLevel,Up=$t.unstable_ImmediatePriority,dy=$t.unstable_UserBlockingPriority,nl=$t.unstable_NormalPriority,LE=$t.unstable_LowPriority,fy=$t.unstable_IdlePriority,eu=null,wn=null;function RE(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(eu,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:NE,AE=Math.log,FE=Math.LN2;function NE(e){return e>>>=0,e===0?32:31-(AE(e)/FE|0)|0}var Wa=64,Ga=4194304;function To(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function rl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=To(l):(o&=a,o!==0&&(r=To(o)))}else a=n&~i,a!==0?r=To(a):o!==0&&(r=To(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-on(t),i=1<<n,r|=e[n],t&=~i;return r}function zE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-on(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=zE(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function df(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function py(){var e=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),e}function Ec(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ea(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-on(t),e[t]=n}function BE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-on(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Hp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-on(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function hy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var my,Wp,gy,vy,yy,ff=!1,Ya=[],fr=null,pr=null,hr=null,Zo=new Map,Qo=new Map,ir=[],UE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ng(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Zo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(t.pointerId)}}function po(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ka(t),t!==null&&Wp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function HE(e,t,n,r,i){switch(t){case"focusin":return fr=po(fr,e,t,n,r,i),!0;case"dragenter":return pr=po(pr,e,t,n,r,i),!0;case"mouseover":return hr=po(hr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Zo.set(o,po(Zo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Qo.set(o,po(Qo.get(o)||null,e,t,n,r,i)),!0}return!1}function xy(e){var t=Rr(e.target);if(t!==null){var n=ei(t);if(n!==null){if(t=n.tag,t===13){if(t=sy(n),t!==null){e.blockedOn=t,yy(e.priority,function(){gy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Es(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sf=r,n.target.dispatchEvent(r),sf=null}else return t=ka(n),t!==null&&Wp(t),e.blockedOn=n,!1;t.shift()}return!0}function rg(e,t,n){Es(e)&&n.delete(t)}function WE(){ff=!1,fr!==null&&Es(fr)&&(fr=null),pr!==null&&Es(pr)&&(pr=null),hr!==null&&Es(hr)&&(hr=null),Zo.forEach(rg),Qo.forEach(rg)}function ho(e,t){e.blockedOn===t&&(e.blockedOn=null,ff||(ff=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,WE)))}function Jo(e){function t(i){return ho(i,e)}if(0<Ya.length){ho(Ya[0],e);for(var n=1;n<Ya.length;n++){var r=Ya[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fr!==null&&ho(fr,e),pr!==null&&ho(pr,e),hr!==null&&ho(hr,e),Zo.forEach(t),Qo.forEach(t),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)xy(n),n.blockedOn===null&&ir.shift()}var ki=qn.ReactCurrentBatchConfig,il=!0;function GE(e,t,n,r){var i=fe,o=ki.transition;ki.transition=null;try{fe=1,Gp(e,t,n,r)}finally{fe=i,ki.transition=o}}function YE(e,t,n,r){var i=fe,o=ki.transition;ki.transition=null;try{fe=4,Gp(e,t,n,r)}finally{fe=i,ki.transition=o}}function Gp(e,t,n,r){if(il){var i=pf(e,t,n,r);if(i===null)Dc(e,t,r,ol,n),ng(e,r);else if(HE(i,e,t,n,r))r.stopPropagation();else if(ng(e,r),t&4&&-1<UE.indexOf(e)){for(;i!==null;){var o=ka(i);if(o!==null&&my(o),o=pf(e,t,n,r),o===null&&Dc(e,t,r,ol,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Dc(e,t,r,null,n)}}var ol=null;function pf(e,t,n,r){if(ol=null,e=Bp(r),e=Rr(e),e!==null)if(t=ei(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ol=e,null}function by(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DE()){case Up:return 1;case dy:return 4;case nl:case LE:return 16;case fy:return 536870912;default:return 16}default:return 16}}var sr=null,Yp=null,Cs=null;function wy(){if(Cs)return Cs;var e,t=Yp,n=t.length,r,i="value"in sr?sr.value:sr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Cs=i.slice(e,1<r?1-r:void 0)}function ks(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xa(){return!0}function ig(){return!1}function Rt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xa:ig,this.isPropagationStopped=ig,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xa)},persist:function(){},isPersistent:Xa}),t}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xp=Rt(Zi),Ca=Ee({},Zi,{view:0,detail:0}),XE=Rt(Ca),Cc,kc,mo,tu=Ee({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mo&&(mo&&e.type==="mousemove"?(Cc=e.screenX-mo.screenX,kc=e.screenY-mo.screenY):kc=Cc=0,mo=e),Cc)},movementY:function(e){return"movementY"in e?e.movementY:kc}}),og=Rt(tu),qE=Ee({},tu,{dataTransfer:0}),KE=Rt(qE),ZE=Ee({},Ca,{relatedTarget:0}),Tc=Rt(ZE),QE=Ee({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),JE=Rt(QE),eC=Ee({},Zi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tC=Rt(eC),nC=Ee({},Zi,{data:0}),ag=Rt(nC),rC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=oC[e])?!!t[e]:!1}function qp(){return aC}var sC=Ee({},Ca,{key:function(e){if(e.key){var t=rC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ks(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qp,charCode:function(e){return e.type==="keypress"?ks(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ks(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lC=Rt(sC),uC=Ee({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sg=Rt(uC),cC=Ee({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qp}),dC=Rt(cC),fC=Ee({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),pC=Rt(fC),hC=Ee({},tu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mC=Rt(hC),gC=[9,13,27,32],Kp=Bn&&"CompositionEvent"in window,Ro=null;Bn&&"documentMode"in document&&(Ro=document.documentMode);var vC=Bn&&"TextEvent"in window&&!Ro,Sy=Bn&&(!Kp||Ro&&8<Ro&&11>=Ro),lg=String.fromCharCode(32),ug=!1;function _y(e,t){switch(e){case"keyup":return gC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ey(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pi=!1;function yC(e,t){switch(e){case"compositionend":return Ey(t);case"keypress":return t.which!==32?null:(ug=!0,lg);case"textInput":return e=t.data,e===lg&&ug?null:e;default:return null}}function xC(e,t){if(pi)return e==="compositionend"||!Kp&&_y(e,t)?(e=wy(),Cs=Yp=sr=null,pi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sy&&t.locale!=="ko"?null:t.data;default:return null}}var bC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bC[e.type]:t==="textarea"}function Cy(e,t,n,r){ny(r),t=al(t,"onChange"),0<t.length&&(n=new Xp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ao=null,ea=null;function wC(e){Ry(e,0)}function nu(e){var t=gi(e);if(q1(t))return e}function SC(e,t){if(e==="change")return t}var ky=!1;if(Bn){var Pc;if(Bn){var Oc="oninput"in document;if(!Oc){var dg=document.createElement("div");dg.setAttribute("oninput","return;"),Oc=typeof dg.oninput=="function"}Pc=Oc}else Pc=!1;ky=Pc&&(!document.documentMode||9<document.documentMode)}function fg(){Ao&&(Ao.detachEvent("onpropertychange",Ty),ea=Ao=null)}function Ty(e){if(e.propertyName==="value"&&nu(ea)){var t=[];Cy(t,ea,e,Bp(e)),ay(wC,t)}}function _C(e,t,n){e==="focusin"?(fg(),Ao=t,ea=n,Ao.attachEvent("onpropertychange",Ty)):e==="focusout"&&fg()}function EC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nu(ea)}function CC(e,t){if(e==="click")return nu(t)}function kC(e,t){if(e==="input"||e==="change")return nu(t)}function TC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var un=typeof Object.is=="function"?Object.is:TC;function ta(e,t){if(un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xd.call(t,i)||!un(e[i],t[i]))return!1}return!0}function pg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hg(e,t){var n=pg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pg(n)}}function Py(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Py(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Oy(){for(var e=window,t=Js();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Js(e.document)}return t}function Zp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function PC(e){var t=Oy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Py(n.ownerDocument.documentElement,n)){if(r!==null&&Zp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=hg(n,o);var a=hg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var OC=Bn&&"documentMode"in document&&11>=document.documentMode,hi=null,hf=null,Fo=null,mf=!1;function mg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mf||hi==null||hi!==Js(r)||(r=hi,"selectionStart"in r&&Zp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fo&&ta(Fo,r)||(Fo=r,r=al(hf,"onSelect"),0<r.length&&(t=new Xp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hi)))}function qa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mi={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},Mc={},My={};Bn&&(My=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function ru(e){if(Mc[e])return Mc[e];if(!mi[e])return e;var t=mi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in My)return Mc[e]=t[n];return e}var Iy=ru("animationend"),jy=ru("animationiteration"),$y=ru("animationstart"),Dy=ru("transitionend"),Ly=new Map,gg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(e,t){Ly.set(e,t),Jr(t,[e])}for(var Ic=0;Ic<gg.length;Ic++){var jc=gg[Ic],MC=jc.toLowerCase(),IC=jc[0].toUpperCase()+jc.slice(1);Er(MC,"on"+IC)}Er(Iy,"onAnimationEnd");Er(jy,"onAnimationIteration");Er($y,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(Dy,"onTransitionEnd");Ii("onMouseEnter",["mouseout","mouseover"]);Ii("onMouseLeave",["mouseout","mouseover"]);Ii("onPointerEnter",["pointerout","pointerover"]);Ii("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function vg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ME(r,t,void 0,e),e.currentTarget=null}function Ry(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;vg(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;vg(i,l,u),o=s}}}if(tl)throw e=cf,tl=!1,cf=null,e}function me(e,t){var n=t[bf];n===void 0&&(n=t[bf]=new Set);var r=e+"__bubble";n.has(r)||(Ay(t,e,2,!1),n.add(r))}function $c(e,t,n){var r=0;t&&(r|=4),Ay(n,e,r,t)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function na(e){if(!e[Ka]){e[Ka]=!0,H1.forEach(function(n){n!=="selectionchange"&&(jC.has(n)||$c(n,!1,e),$c(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ka]||(t[Ka]=!0,$c("selectionchange",!1,t))}}function Ay(e,t,n,r){switch(by(t)){case 1:var i=GE;break;case 4:i=YE;break;default:i=Gp}n=i.bind(null,t,n,e),i=void 0,!uf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Dc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Rr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}ay(function(){var u=o,c=Bp(n),d=[];e:{var p=Ly.get(e);if(p!==void 0){var h=Xp,v=e;switch(e){case"keypress":if(ks(n)===0)break e;case"keydown":case"keyup":h=lC;break;case"focusin":v="focus",h=Tc;break;case"focusout":v="blur",h=Tc;break;case"beforeblur":case"afterblur":h=Tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=og;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=KE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=dC;break;case Iy:case jy:case $y:h=JE;break;case Dy:h=pC;break;case"scroll":h=XE;break;case"wheel":h=mC;break;case"copy":case"cut":case"paste":h=tC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=sg}var g=(t&4)!==0,w=!g&&e==="scroll",f=g?p!==null?p+"Capture":null:p;g=[];for(var m=u,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,f!==null&&(S=Ko(m,f),S!=null&&g.push(ra(m,S,x)))),w)break;m=m.return}0<g.length&&(p=new h(p,v,null,n,c),d.push({event:p,listeners:g}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==sf&&(v=n.relatedTarget||n.fromElement)&&(Rr(v)||v[Un]))break e;if((h||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,h?(v=n.relatedTarget||n.toElement,h=u,v=v?Rr(v):null,v!==null&&(w=ei(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(h=null,v=u),h!==v)){if(g=og,S="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(g=sg,S="onPointerLeave",f="onPointerEnter",m="pointer"),w=h==null?p:gi(h),x=v==null?p:gi(v),p=new g(S,m+"leave",h,n,c),p.target=w,p.relatedTarget=x,S=null,Rr(c)===u&&(g=new g(f,m+"enter",v,n,c),g.target=x,g.relatedTarget=w,S=g),w=S,h&&v)t:{for(g=h,f=v,m=0,x=g;x;x=ri(x))m++;for(x=0,S=f;S;S=ri(S))x++;for(;0<m-x;)g=ri(g),m--;for(;0<x-m;)f=ri(f),x--;for(;m--;){if(g===f||f!==null&&g===f.alternate)break t;g=ri(g),f=ri(f)}g=null}else g=null;h!==null&&yg(d,p,h,g,!1),v!==null&&w!==null&&yg(d,w,v,g,!0)}}e:{if(p=u?gi(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var C=SC;else if(cg(p))if(ky)C=kC;else{C=EC;var k=_C}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=CC);if(C&&(C=C(e,u))){Cy(d,C,n,c);break e}k&&k(e,p,u),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&tf(p,"number",p.value)}switch(k=u?gi(u):window,e){case"focusin":(cg(k)||k.contentEditable==="true")&&(hi=k,hf=u,Fo=null);break;case"focusout":Fo=hf=hi=null;break;case"mousedown":mf=!0;break;case"contextmenu":case"mouseup":case"dragend":mf=!1,mg(d,n,c);break;case"selectionchange":if(OC)break;case"keydown":case"keyup":mg(d,n,c)}var _;if(Kp)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else pi?_y(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Sy&&n.locale!=="ko"&&(pi||E!=="onCompositionStart"?E==="onCompositionEnd"&&pi&&(_=wy()):(sr=c,Yp="value"in sr?sr.value:sr.textContent,pi=!0)),k=al(u,E),0<k.length&&(E=new ag(E,e,null,n,c),d.push({event:E,listeners:k}),_?E.data=_:(_=Ey(n),_!==null&&(E.data=_)))),(_=vC?yC(e,n):xC(e,n))&&(u=al(u,"onBeforeInput"),0<u.length&&(c=new ag("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=_))}Ry(d,t)})}function ra(e,t,n){return{instance:e,listener:t,currentTarget:n}}function al(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ko(e,n),o!=null&&r.unshift(ra(e,o,i)),o=Ko(e,t),o!=null&&r.push(ra(e,o,i))),e=e.return}return r}function ri(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Ko(n,o),s!=null&&a.unshift(ra(n,s,l))):i||(s=Ko(n,o),s!=null&&a.push(ra(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var $C=/\r\n?/g,DC=/\u0000|\uFFFD/g;function xg(e){return(typeof e=="string"?e:""+e).replace($C,`
`).replace(DC,"")}function Za(e,t,n){if(t=xg(t),xg(e)!==t&&n)throw Error(V(425))}function sl(){}var gf=null,vf=null;function yf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xf=typeof setTimeout=="function"?setTimeout:void 0,LC=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,RC=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(e){return bg.resolve(null).then(e).catch(AC)}:xf;function AC(e){setTimeout(function(){throw e})}function Lc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Jo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jo(t)}function mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qi=Math.random().toString(36).slice(2),xn="__reactFiber$"+Qi,ia="__reactProps$"+Qi,Un="__reactContainer$"+Qi,bf="__reactEvents$"+Qi,FC="__reactListeners$"+Qi,NC="__reactHandles$"+Qi;function Rr(e){var t=e[xn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Un]||n[xn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wg(e);e!==null;){if(n=e[xn])return n;e=wg(e)}return t}e=n,n=e.parentNode}return null}function ka(e){return e=e[xn]||e[Un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function iu(e){return e[ia]||null}var wf=[],vi=-1;function Cr(e){return{current:e}}function ve(e){0>vi||(e.current=wf[vi],wf[vi]=null,vi--)}function he(e,t){vi++,wf[vi]=e.current,e.current=t}var Sr={},rt=Cr(Sr),xt=Cr(!1),Ur=Sr;function ji(e,t){var n=e.type.contextTypes;if(!n)return Sr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function bt(e){return e=e.childContextTypes,e!=null}function ll(){ve(xt),ve(rt)}function Sg(e,t,n){if(rt.current!==Sr)throw Error(V(168));he(rt,t),he(xt,n)}function Fy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,_E(e)||"Unknown",i));return Ee({},n,r)}function ul(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sr,Ur=rt.current,he(rt,e),he(xt,xt.current),!0}function _g(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=Fy(e,t,Ur),r.__reactInternalMemoizedMergedChildContext=e,ve(xt),ve(rt),he(rt,e)):ve(xt),he(xt,n)}var $n=null,ou=!1,Rc=!1;function Ny(e){$n===null?$n=[e]:$n.push(e)}function zC(e){ou=!0,Ny(e)}function kr(){if(!Rc&&$n!==null){Rc=!0;var e=0,t=fe;try{var n=$n;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$n=null,ou=!1}catch(i){throw $n!==null&&($n=$n.slice(e+1)),cy(Up,kr),i}finally{fe=t,Rc=!1}}return null}var yi=[],xi=0,cl=null,dl=0,zt=[],Vt=0,Hr=null,Rn=1,An="";function Mr(e,t){yi[xi++]=dl,yi[xi++]=cl,cl=e,dl=t}function zy(e,t,n){zt[Vt++]=Rn,zt[Vt++]=An,zt[Vt++]=Hr,Hr=e;var r=Rn;e=An;var i=32-on(r)-1;r&=~(1<<i),n+=1;var o=32-on(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Rn=1<<32-on(t)+i|n<<i|r,An=o+e}else Rn=1<<o|n<<i|r,An=e}function Qp(e){e.return!==null&&(Mr(e,1),zy(e,1,0))}function Jp(e){for(;e===cl;)cl=yi[--xi],yi[xi]=null,dl=yi[--xi],yi[xi]=null;for(;e===Hr;)Hr=zt[--Vt],zt[Vt]=null,An=zt[--Vt],zt[Vt]=null,Rn=zt[--Vt],zt[Vt]=null}var It=null,Ot=null,be=!1,nn=null;function Vy(e,t){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Eg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,Ot=mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,Ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hr!==null?{id:Rn,overflow:An}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,It=e,Ot=null,!0):!1;default:return!1}}function Sf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _f(e){if(be){var t=Ot;if(t){var n=t;if(!Eg(e,t)){if(Sf(e))throw Error(V(418));t=mr(n.nextSibling);var r=It;t&&Eg(e,t)?Vy(r,n):(e.flags=e.flags&-4097|2,be=!1,It=e)}}else{if(Sf(e))throw Error(V(418));e.flags=e.flags&-4097|2,be=!1,It=e}}}function Cg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function Qa(e){if(e!==It)return!1;if(!be)return Cg(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yf(e.type,e.memoizedProps)),t&&(t=Ot)){if(Sf(e))throw By(),Error(V(418));for(;t;)Vy(e,t),t=mr(t.nextSibling)}if(Cg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ot=mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ot=null}}else Ot=It?mr(e.stateNode.nextSibling):null;return!0}function By(){for(var e=Ot;e;)e=mr(e.nextSibling)}function $i(){Ot=It=null,be=!1}function eh(e){nn===null?nn=[e]:nn.push(e)}var VC=qn.ReactCurrentBatchConfig;function Jt(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var fl=Cr(null),pl=null,bi=null,th=null;function nh(){th=bi=pl=null}function rh(e){var t=fl.current;ve(fl),e._currentValue=t}function Ef(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ti(e,t){pl=e,th=bi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(yt=!0),e.firstContext=null)}function Ht(e){var t=e._currentValue;if(th!==e)if(e={context:e,memoizedValue:t,next:null},bi===null){if(pl===null)throw Error(V(308));bi=e,pl.dependencies={lanes:0,firstContext:e}}else bi=bi.next=e;return t}var Ar=null;function ih(e){Ar===null?Ar=[e]:Ar.push(e)}function Uy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ih(t)):(n.next=i.next,i.next=n),t.interleaved=n,Hn(e,r)}function Hn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rr=!1;function oh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Hn(e,n)}return i=r.interleaved,i===null?(t.next=t,ih(r)):(t.next=i.next,i.next=t),r.interleaved=t,Hn(e,n)}function Ts(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hp(e,n)}}function kg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hl(e,t,n,r){var i=e.updateQueue;rr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,c=u=s=null,l=o;do{var p=l.lane,h=l.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,g=l;switch(p=t,h=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){d=v.call(h,d,p);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,p=typeof v=="function"?v.call(h,d,p):v,p==null)break e;d=Ee({},d,p);break e;case 2:rr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else h={eventTime:h,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=h,s=d):c=c.next=h,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Gr|=a,e.lanes=a,e.memoizedState=d}}function Tg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Wy=new U1.Component().refs;function Cf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var au={isMounted:function(e){return(e=e._reactInternals)?ei(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lt(),i=yr(e),o=Fn(r,i);o.payload=t,n!=null&&(o.callback=n),t=gr(e,o,i),t!==null&&(an(t,e,i,r),Ts(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lt(),i=yr(e),o=Fn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gr(e,o,i),t!==null&&(an(t,e,i,r),Ts(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),r=yr(e),i=Fn(n,r);i.tag=2,t!=null&&(i.callback=t),t=gr(e,i,r),t!==null&&(an(t,e,r,n),Ts(t,e,r))}};function Pg(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ta(n,r)||!ta(i,o):!0}function Gy(e,t,n){var r=!1,i=Sr,o=t.contextType;return typeof o=="object"&&o!==null?o=Ht(o):(i=bt(t)?Ur:rt.current,r=t.contextTypes,o=(r=r!=null)?ji(e,i):Sr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=au,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Og(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&au.enqueueReplaceState(t,t.state,null)}function kf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Wy,oh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ht(o):(o=bt(t)?Ur:rt.current,i.context=ji(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Cf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&au.enqueueReplaceState(i,i.state,null),hl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function go(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Wy&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function Ja(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mg(e){var t=e._init;return t(e._payload)}function Yy(e){function t(f,m){if(e){var x=f.deletions;x===null?(f.deletions=[m],f.flags|=16):x.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function r(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function i(f,m){return f=xr(f,m),f.index=0,f.sibling=null,f}function o(f,m,x){return f.index=x,e?(x=f.alternate,x!==null?(x=x.index,x<m?(f.flags|=2,m):x):(f.flags|=2,m)):(f.flags|=1048576,m)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,m,x,S){return m===null||m.tag!==6?(m=Uc(x,f.mode,S),m.return=f,m):(m=i(m,x),m.return=f,m)}function s(f,m,x,S){var C=x.type;return C===fi?c(f,m,x.props.children,S,x.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===nr&&Mg(C)===m.type)?(S=i(m,x.props),S.ref=go(f,m,x),S.return=f,S):(S=$s(x.type,x.key,x.props,null,f.mode,S),S.ref=go(f,m,x),S.return=f,S)}function u(f,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Hc(x,f.mode,S),m.return=f,m):(m=i(m,x.children||[]),m.return=f,m)}function c(f,m,x,S,C){return m===null||m.tag!==7?(m=Vr(x,f.mode,S,C),m.return=f,m):(m=i(m,x),m.return=f,m)}function d(f,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Uc(""+m,f.mode,x),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ba:return x=$s(m.type,m.key,m.props,null,f.mode,x),x.ref=go(f,null,m),x.return=f,x;case di:return m=Hc(m,f.mode,x),m.return=f,m;case nr:var S=m._init;return d(f,S(m._payload),x)}if(ko(m)||co(m))return m=Vr(m,f.mode,x,null),m.return=f,m;Ja(f,m)}return null}function p(f,m,x,S){var C=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:l(f,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ba:return x.key===C?s(f,m,x,S):null;case di:return x.key===C?u(f,m,x,S):null;case nr:return C=x._init,p(f,m,C(x._payload),S)}if(ko(x)||co(x))return C!==null?null:c(f,m,x,S,null);Ja(f,x)}return null}function h(f,m,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(x)||null,l(m,f,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ba:return f=f.get(S.key===null?x:S.key)||null,s(m,f,S,C);case di:return f=f.get(S.key===null?x:S.key)||null,u(m,f,S,C);case nr:var k=S._init;return h(f,m,x,k(S._payload),C)}if(ko(S)||co(S))return f=f.get(x)||null,c(m,f,S,C,null);Ja(m,S)}return null}function v(f,m,x,S){for(var C=null,k=null,_=m,E=m=0,M=null;_!==null&&E<x.length;E++){_.index>E?(M=_,_=null):M=_.sibling;var I=p(f,_,x[E],S);if(I===null){_===null&&(_=M);break}e&&_&&I.alternate===null&&t(f,_),m=o(I,m,E),k===null?C=I:k.sibling=I,k=I,_=M}if(E===x.length)return n(f,_),be&&Mr(f,E),C;if(_===null){for(;E<x.length;E++)_=d(f,x[E],S),_!==null&&(m=o(_,m,E),k===null?C=_:k.sibling=_,k=_);return be&&Mr(f,E),C}for(_=r(f,_);E<x.length;E++)M=h(_,f,E,x[E],S),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?E:M.key),m=o(M,m,E),k===null?C=M:k.sibling=M,k=M);return e&&_.forEach(function($){return t(f,$)}),be&&Mr(f,E),C}function g(f,m,x,S){var C=co(x);if(typeof C!="function")throw Error(V(150));if(x=C.call(x),x==null)throw Error(V(151));for(var k=C=null,_=m,E=m=0,M=null,I=x.next();_!==null&&!I.done;E++,I=x.next()){_.index>E?(M=_,_=null):M=_.sibling;var $=p(f,_,I.value,S);if($===null){_===null&&(_=M);break}e&&_&&$.alternate===null&&t(f,_),m=o($,m,E),k===null?C=$:k.sibling=$,k=$,_=M}if(I.done)return n(f,_),be&&Mr(f,E),C;if(_===null){for(;!I.done;E++,I=x.next())I=d(f,I.value,S),I!==null&&(m=o(I,m,E),k===null?C=I:k.sibling=I,k=I);return be&&Mr(f,E),C}for(_=r(f,_);!I.done;E++,I=x.next())I=h(_,f,E,I.value,S),I!==null&&(e&&I.alternate!==null&&_.delete(I.key===null?E:I.key),m=o(I,m,E),k===null?C=I:k.sibling=I,k=I);return e&&_.forEach(function(O){return t(f,O)}),be&&Mr(f,E),C}function w(f,m,x,S){if(typeof x=="object"&&x!==null&&x.type===fi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ba:e:{for(var C=x.key,k=m;k!==null;){if(k.key===C){if(C=x.type,C===fi){if(k.tag===7){n(f,k.sibling),m=i(k,x.props.children),m.return=f,f=m;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===nr&&Mg(C)===k.type){n(f,k.sibling),m=i(k,x.props),m.ref=go(f,k,x),m.return=f,f=m;break e}n(f,k);break}else t(f,k);k=k.sibling}x.type===fi?(m=Vr(x.props.children,f.mode,S,x.key),m.return=f,f=m):(S=$s(x.type,x.key,x.props,null,f.mode,S),S.ref=go(f,m,x),S.return=f,f=S)}return a(f);case di:e:{for(k=x.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(f,m.sibling),m=i(m,x.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else t(f,m);m=m.sibling}m=Hc(x,f.mode,S),m.return=f,f=m}return a(f);case nr:return k=x._init,w(f,m,k(x._payload),S)}if(ko(x))return v(f,m,x,S);if(co(x))return g(f,m,x,S);Ja(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(f,m.sibling),m=i(m,x),m.return=f,f=m):(n(f,m),m=Uc(x,f.mode,S),m.return=f,f=m),a(f)):n(f,m)}return w}var Di=Yy(!0),Xy=Yy(!1),Ta={},Sn=Cr(Ta),oa=Cr(Ta),aa=Cr(Ta);function Fr(e){if(e===Ta)throw Error(V(174));return e}function ah(e,t){switch(he(aa,t),he(oa,e),he(Sn,Ta),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rf(t,e)}ve(Sn),he(Sn,t)}function Li(){ve(Sn),ve(oa),ve(aa)}function qy(e){Fr(aa.current);var t=Fr(Sn.current),n=rf(t,e.type);t!==n&&(he(oa,e),he(Sn,n))}function sh(e){oa.current===e&&(ve(Sn),ve(oa))}var Se=Cr(0);function ml(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ac=[];function lh(){for(var e=0;e<Ac.length;e++)Ac[e]._workInProgressVersionPrimary=null;Ac.length=0}var Ps=qn.ReactCurrentDispatcher,Fc=qn.ReactCurrentBatchConfig,Wr=0,_e=null,Le=null,Ve=null,gl=!1,No=!1,sa=0,BC=0;function Ke(){throw Error(V(321))}function uh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!un(e[n],t[n]))return!1;return!0}function ch(e,t,n,r,i,o){if(Wr=o,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ps.current=e===null||e.memoizedState===null?GC:YC,e=n(r,i),No){o=0;do{if(No=!1,sa=0,25<=o)throw Error(V(301));o+=1,Ve=Le=null,t.updateQueue=null,Ps.current=XC,e=n(r,i)}while(No)}if(Ps.current=vl,t=Le!==null&&Le.next!==null,Wr=0,Ve=Le=_e=null,gl=!1,t)throw Error(V(300));return e}function dh(){var e=sa!==0;return sa=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?_e.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Wt(){if(Le===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Ve===null?_e.memoizedState:Ve.next;if(t!==null)Ve=t,Le=e;else{if(e===null)throw Error(V(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ve===null?_e.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function la(e,t){return typeof t=="function"?t(e):t}function Nc(e){var t=Wt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var c=u.lane;if((Wr&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,_e.lanes|=c,Gr|=c}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,un(r,t.memoizedState)||(yt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,_e.lanes|=o,Gr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zc(e){var t=Wt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);un(o,t.memoizedState)||(yt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ky(){}function Zy(e,t){var n=_e,r=Wt(),i=t(),o=!un(r.memoizedState,i);if(o&&(r.memoizedState=i,yt=!0),r=r.queue,fh(ex.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,ua(9,Jy.bind(null,n,r,i,t),void 0,null),Be===null)throw Error(V(349));Wr&30||Qy(n,t,i)}return i}function Qy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jy(e,t,n,r){t.value=n,t.getSnapshot=r,tx(t)&&nx(e)}function ex(e,t,n){return n(function(){tx(t)&&nx(e)})}function tx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!un(e,n)}catch{return!0}}function nx(e){var t=Hn(e,1);t!==null&&an(t,e,1,-1)}function Ig(e){var t=gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},t.queue=e,e=e.dispatch=WC.bind(null,_e,e),[t.memoizedState,e]}function ua(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rx(){return Wt().memoizedState}function Os(e,t,n,r){var i=gn();_e.flags|=e,i.memoizedState=ua(1|t,n,void 0,r===void 0?null:r)}function su(e,t,n,r){var i=Wt();r=r===void 0?null:r;var o=void 0;if(Le!==null){var a=Le.memoizedState;if(o=a.destroy,r!==null&&uh(r,a.deps)){i.memoizedState=ua(t,n,o,r);return}}_e.flags|=e,i.memoizedState=ua(1|t,n,o,r)}function jg(e,t){return Os(8390656,8,e,t)}function fh(e,t){return su(2048,8,e,t)}function ix(e,t){return su(4,2,e,t)}function ox(e,t){return su(4,4,e,t)}function ax(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sx(e,t,n){return n=n!=null?n.concat([e]):null,su(4,4,ax.bind(null,t,e),n)}function ph(){}function lx(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&uh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ux(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&uh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cx(e,t,n){return Wr&21?(un(n,t)||(n=py(),_e.lanes|=n,Gr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,yt=!0),e.memoizedState=n)}function UC(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=Fc.transition;Fc.transition={};try{e(!1),t()}finally{fe=n,Fc.transition=r}}function dx(){return Wt().memoizedState}function HC(e,t,n){var r=yr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fx(e))px(t,n);else if(n=Uy(e,t,n,r),n!==null){var i=lt();an(n,e,r,i),hx(n,t,r)}}function WC(e,t,n){var r=yr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fx(e))px(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,un(l,a)){var s=t.interleaved;s===null?(i.next=i,ih(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Uy(e,t,i,r),n!==null&&(i=lt(),an(n,e,r,i),hx(n,t,r))}}function fx(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function px(e,t){No=gl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hp(e,n)}}var vl={readContext:Ht,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},GC={readContext:Ht,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:Ht,useEffect:jg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Os(4194308,4,ax.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Os(4194308,4,e,t)},useInsertionEffect:function(e,t){return Os(4,2,e,t)},useMemo:function(e,t){var n=gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=HC.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:Ig,useDebugValue:ph,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=Ig(!1),t=e[0];return e=UC.bind(null,e[1]),gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_e,i=gn();if(be){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Be===null)throw Error(V(349));Wr&30||Qy(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,jg(ex.bind(null,r,o,e),[e]),r.flags|=2048,ua(9,Jy.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=gn(),t=Be.identifierPrefix;if(be){var n=An,r=Rn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=BC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},YC={readContext:Ht,useCallback:lx,useContext:Ht,useEffect:fh,useImperativeHandle:sx,useInsertionEffect:ix,useLayoutEffect:ox,useMemo:ux,useReducer:Nc,useRef:rx,useState:function(){return Nc(la)},useDebugValue:ph,useDeferredValue:function(e){var t=Wt();return cx(t,Le.memoizedState,e)},useTransition:function(){var e=Nc(la)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Ky,useSyncExternalStore:Zy,useId:dx,unstable_isNewReconciler:!1},XC={readContext:Ht,useCallback:lx,useContext:Ht,useEffect:fh,useImperativeHandle:sx,useInsertionEffect:ix,useLayoutEffect:ox,useMemo:ux,useReducer:zc,useRef:rx,useState:function(){return zc(la)},useDebugValue:ph,useDeferredValue:function(e){var t=Wt();return Le===null?t.memoizedState=e:cx(t,Le.memoizedState,e)},useTransition:function(){var e=zc(la)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Ky,useSyncExternalStore:Zy,useId:dx,unstable_isNewReconciler:!1};function Ri(e,t){try{var n="",r=t;do n+=SE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Vc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Tf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qC=typeof WeakMap=="function"?WeakMap:Map;function mx(e,t,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xl||(xl=!0,Af=r),Tf(e,t)},n}function gx(e,t,n){n=Fn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Tf(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Tf(e,t),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function $g(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qC;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=uk.bind(null,e,t,n),t.then(e,e))}function Dg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lg(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Fn(-1,1),t.tag=2,gr(n,t,1))),n.lanes|=1),e)}var KC=qn.ReactCurrentOwner,yt=!1;function at(e,t,n,r){t.child=e===null?Xy(t,null,n,r):Di(t,e.child,n,r)}function Rg(e,t,n,r,i){n=n.render;var o=t.ref;return Ti(t,i),r=ch(e,t,n,r,o,i),n=dh(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(be&&n&&Qp(t),t.flags|=1,at(e,t,r,i),t.child)}function Ag(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!wh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,vx(e,t,o,r,i)):(e=$s(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ta,n(a,r)&&e.ref===t.ref)return Wn(e,t,i)}return t.flags|=1,e=xr(o,r),e.ref=t.ref,e.return=t,t.child=e}function vx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ta(o,r)&&e.ref===t.ref)if(yt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(yt=!0);else return t.lanes=e.lanes,Wn(e,t,i)}return Pf(e,t,n,r,i)}function yx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Si,Tt),Tt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(Si,Tt),Tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(Si,Tt),Tt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(Si,Tt),Tt|=r;return at(e,t,i,n),t.child}function xx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pf(e,t,n,r,i){var o=bt(n)?Ur:rt.current;return o=ji(t,o),Ti(t,i),n=ch(e,t,n,r,o,i),r=dh(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(be&&r&&Qp(t),t.flags|=1,at(e,t,n,i),t.child)}function Fg(e,t,n,r,i){if(bt(n)){var o=!0;ul(t)}else o=!1;if(Ti(t,i),t.stateNode===null)Ms(e,t),Gy(t,n,r),kf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ht(u):(u=bt(n)?Ur:rt.current,u=ji(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Og(t,a,r,u),rr=!1;var p=t.memoizedState;a.state=p,hl(t,r,a,i),s=t.memoizedState,l!==r||p!==s||xt.current||rr?(typeof c=="function"&&(Cf(t,n,c,r),s=t.memoizedState),(l=rr||Pg(t,n,l,r,p,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Hy(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Jt(t.type,l),a.props=u,d=t.pendingProps,p=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ht(s):(s=bt(n)?Ur:rt.current,s=ji(t,s));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||p!==s)&&Og(t,a,r,s),rr=!1,p=t.memoizedState,a.state=p,hl(t,r,a,i);var v=t.memoizedState;l!==d||p!==v||xt.current||rr?(typeof h=="function"&&(Cf(t,n,h,r),v=t.memoizedState),(u=rr||Pg(t,n,u,r,p,v,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Of(e,t,n,r,o,i)}function Of(e,t,n,r,i,o){xx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&_g(t,n,!1),Wn(e,t,o);r=t.stateNode,KC.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Di(t,e.child,null,o),t.child=Di(t,null,l,o)):at(e,t,l,o),t.memoizedState=r.state,i&&_g(t,n,!0),t.child}function bx(e){var t=e.stateNode;t.pendingContext?Sg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sg(e,t.context,!1),ah(e,t.containerInfo)}function Ng(e,t,n,r,i){return $i(),eh(i),t.flags|=256,at(e,t,n,r),t.child}var Mf={dehydrated:null,treeContext:null,retryLane:0};function If(e){return{baseLanes:e,cachePool:null,transitions:null}}function wx(e,t,n){var r=t.pendingProps,i=Se.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(Se,i&1),e===null)return _f(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=cu(a,r,0,null),e=Vr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=If(n),t.memoizedState=Mf,e):hh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ZC(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=xr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=xr(l,o):(o=Vr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?If(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Mf,r}return o=e.child,e=o.sibling,r=xr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hh(e,t){return t=cu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function es(e,t,n,r){return r!==null&&eh(r),Di(t,e.child,null,n),e=hh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ZC(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Vc(Error(V(422))),es(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=cu({mode:"visible",children:r.children},i,0,null),o=Vr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Di(t,e.child,null,a),t.child.memoizedState=If(a),t.memoizedState=Mf,o);if(!(t.mode&1))return es(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=Vc(o,r,void 0),es(e,t,a,r)}if(l=(a&e.childLanes)!==0,yt||l){if(r=Be,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Hn(e,i),an(r,e,i,-1))}return bh(),r=Vc(Error(V(421))),es(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ck.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ot=mr(i.nextSibling),It=t,be=!0,nn=null,e!==null&&(zt[Vt++]=Rn,zt[Vt++]=An,zt[Vt++]=Hr,Rn=e.id,An=e.overflow,Hr=t),t=hh(t,r.children),t.flags|=4096,t)}function zg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ef(e.return,t,n)}function Bc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Sx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(at(e,t,r.children,n),r=Se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zg(e,n,t);else if(e.tag===19)zg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(Se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ml(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ml(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bc(t,!0,n,null,o);break;case"together":Bc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ms(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=xr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function QC(e,t,n){switch(t.tag){case 3:bx(t),$i();break;case 5:qy(t);break;case 1:bt(t.type)&&ul(t);break;case 4:ah(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(fl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(Se,Se.current&1),t.flags|=128,null):n&t.child.childLanes?wx(e,t,n):(he(Se,Se.current&1),e=Wn(e,t,n),e!==null?e.sibling:null);he(Se,Se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Se,Se.current),r)break;return null;case 22:case 23:return t.lanes=0,yx(e,t,n)}return Wn(e,t,n)}var _x,jf,Ex,Cx;_x=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jf=function(){};Ex=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Fr(Sn.current);var o=null;switch(n){case"input":i=Jd(e,i),r=Jd(e,r),o=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),o=[];break;case"textarea":i=nf(e,i),r=nf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=sl)}of(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&me("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Cx=function(e,t,n,r){n!==r&&(t.flags|=4)};function vo(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function JC(e,t,n){var r=t.pendingProps;switch(Jp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return bt(t.type)&&ll(),Ze(t),null;case 3:return r=t.stateNode,Li(),ve(xt),ve(rt),lh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nn!==null&&(zf(nn),nn=null))),jf(e,t),Ze(t),null;case 5:sh(t);var i=Fr(aa.current);if(n=t.type,e!==null&&t.stateNode!=null)Ex(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return Ze(t),null}if(e=Fr(Sn.current),Qa(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[xn]=t,r[ia]=o,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Po.length;i++)me(Po[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":qm(r,o),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},me("invalid",r);break;case"textarea":Zm(r,o),me("invalid",r)}of(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Za(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Za(r.textContent,l,e),i=["children",""+l]):Xo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&me("scroll",r)}switch(n){case"input":Ua(r),Km(r,o,!0);break;case"textarea":Ua(r),Qm(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=sl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Q1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[xn]=t,e[ia]=r,_x(e,t,!1,!1),t.stateNode=e;e:{switch(a=af(n,r),n){case"dialog":me("cancel",e),me("close",e),i=r;break;case"iframe":case"object":case"embed":me("load",e),i=r;break;case"video":case"audio":for(i=0;i<Po.length;i++)me(Po[i],e);i=r;break;case"source":me("error",e),i=r;break;case"img":case"image":case"link":me("error",e),me("load",e),i=r;break;case"details":me("toggle",e),i=r;break;case"input":qm(e,r),i=Jd(e,r),me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),me("invalid",e);break;case"textarea":Zm(e,r),i=nf(e,r),me("invalid",e);break;default:i=r}of(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?ty(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&J1(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&qo(e,s):typeof s=="number"&&qo(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xo.hasOwnProperty(o)?s!=null&&o==="onScroll"&&me("scroll",e):s!=null&&Fp(e,o,s,a))}switch(n){case"input":Ua(e),Km(e,r,!1);break;case"textarea":Ua(e),Qm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?_i(e,!!r.multiple,o,!1):r.defaultValue!=null&&_i(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)Cx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Fr(aa.current),Fr(Sn.current),Qa(t)){if(r=t.stateNode,n=t.memoizedProps,r[xn]=t,(o=r.nodeValue!==n)&&(e=It,e!==null))switch(e.tag){case 3:Za(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Za(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=t,t.stateNode=r}return Ze(t),null;case 13:if(ve(Se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&Ot!==null&&t.mode&1&&!(t.flags&128))By(),$i(),t.flags|=98560,o=!1;else if(o=Qa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[xn]=t}else $i(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else nn!==null&&(zf(nn),nn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Se.current&1?Ae===0&&(Ae=3):bh())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Li(),jf(e,t),e===null&&na(t.stateNode.containerInfo),Ze(t),null;case 10:return rh(t.type._context),Ze(t),null;case 17:return bt(t.type)&&ll(),Ze(t),null;case 19:if(ve(Se),o=t.memoizedState,o===null)return Ze(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)vo(o,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ml(e),a!==null){for(t.flags|=128,vo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(Se,Se.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>Ai&&(t.flags|=128,r=!0,vo(o,!1),t.lanes=4194304)}else{if(!r)if(e=ml(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!be)return Ze(t),null}else 2*Te()-o.renderingStartTime>Ai&&n!==1073741824&&(t.flags|=128,r=!0,vo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,n=Se.current,he(Se,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return xh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Tt&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function ek(e,t){switch(Jp(t),t.tag){case 1:return bt(t.type)&&ll(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Li(),ve(xt),ve(rt),lh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return sh(t),null;case 13:if(ve(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));$i()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Se),null;case 4:return Li(),null;case 10:return rh(t.type._context),null;case 22:case 23:return xh(),null;case 24:return null;default:return null}}var ts=!1,tt=!1,tk=typeof WeakSet=="function"?WeakSet:Set,U=null;function wi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function $f(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var Vg=!1;function nk(e,t){if(gf=il,e=Oy(),Zp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===e)break t;if(p===n&&++u===i&&(l=a),p===o&&++c===r&&(s=a),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(vf={focusedElem:e,selectionRange:n},il=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,w=v.memoizedState,f=t.stateNode,m=f.getSnapshotBeforeUpdate(t.elementType===t.type?g:Jt(t.type,g),w);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){Ce(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return v=Vg,Vg=!1,v}function zo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&$f(t,n,o)}i=i.next}while(i!==r)}}function lu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Df(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function kx(e){var t=e.alternate;t!==null&&(e.alternate=null,kx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xn],delete t[ia],delete t[bf],delete t[FC],delete t[NC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tx(e){return e.tag===5||e.tag===3||e.tag===4}function Bg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sl));else if(r!==4&&(e=e.child,e!==null))for(Lf(e,t,n),e=e.sibling;e!==null;)Lf(e,t,n),e=e.sibling}function Rf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rf(e,t,n),e=e.sibling;e!==null;)Rf(e,t,n),e=e.sibling}var We=null,en=!1;function er(e,t,n){for(n=n.child;n!==null;)Px(e,t,n),n=n.sibling}function Px(e,t,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(eu,n)}catch{}switch(n.tag){case 5:tt||wi(n,t);case 6:var r=We,i=en;We=null,er(e,t,n),We=r,en=i,We!==null&&(en?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(en?(e=We,n=n.stateNode,e.nodeType===8?Lc(e.parentNode,n):e.nodeType===1&&Lc(e,n),Jo(e)):Lc(We,n.stateNode));break;case 4:r=We,i=en,We=n.stateNode.containerInfo,en=!0,er(e,t,n),We=r,en=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&$f(n,t,a),i=i.next}while(i!==r)}er(e,t,n);break;case 1:if(!tt&&(wi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,t,l)}er(e,t,n);break;case 21:er(e,t,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,er(e,t,n),tt=r):er(e,t,n);break;default:er(e,t,n)}}function Ug(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tk),t.forEach(function(r){var i=dk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:We=l.stateNode,en=!1;break e;case 3:We=l.stateNode.containerInfo,en=!0;break e;case 4:We=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(We===null)throw Error(V(160));Px(o,a,i),We=null,en=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Ce(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ox(t,e),t=t.sibling}function Ox(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qt(t,e),hn(e),r&4){try{zo(3,e,e.return),lu(3,e)}catch(g){Ce(e,e.return,g)}try{zo(5,e,e.return)}catch(g){Ce(e,e.return,g)}}break;case 1:qt(t,e),hn(e),r&512&&n!==null&&wi(n,n.return);break;case 5:if(qt(t,e),hn(e),r&512&&n!==null&&wi(n,n.return),e.flags&32){var i=e.stateNode;try{qo(i,"")}catch(g){Ce(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&K1(i,o),af(l,a);var u=af(l,o);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?ty(i,d):c==="dangerouslySetInnerHTML"?J1(i,d):c==="children"?qo(i,d):Fp(i,c,d,u)}switch(l){case"input":ef(i,o);break;case"textarea":Z1(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?_i(i,!!o.multiple,h,!1):p!==!!o.multiple&&(o.defaultValue!=null?_i(i,!!o.multiple,o.defaultValue,!0):_i(i,!!o.multiple,o.multiple?[]:"",!1))}i[ia]=o}catch(g){Ce(e,e.return,g)}}break;case 6:if(qt(t,e),hn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){Ce(e,e.return,g)}}break;case 3:if(qt(t,e),hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(t.containerInfo)}catch(g){Ce(e,e.return,g)}break;case 4:qt(t,e),hn(e);break;case 13:qt(t,e),hn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(vh=Te())),r&4&&Ug(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(u=tt)||c,qt(t,e),tt=u):qt(t,e),hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(U=e,c=e.child;c!==null;){for(d=U=c;U!==null;){switch(p=U,h=p.child,p.tag){case 0:case 11:case 14:case 15:zo(4,p,p.return);break;case 1:wi(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(g){Ce(r,n,g)}}break;case 5:wi(p,p.return);break;case 22:if(p.memoizedState!==null){Wg(d);continue}}h!==null?(h.return=p,U=h):Wg(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ey("display",a))}catch(g){Ce(e,e.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Ce(e,e.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qt(t,e),hn(e),r&4&&Ug(e);break;case 21:break;default:qt(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Tx(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qo(i,""),r.flags&=-33);var o=Bg(e);Rf(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Bg(e);Lf(e,l,a);break;default:throw Error(V(161))}}catch(s){Ce(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rk(e,t,n){U=e,Mx(e)}function Mx(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ts;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||tt;l=ts;var u=tt;if(ts=a,(tt=s)&&!u)for(U=i;U!==null;)a=U,s=a.child,a.tag===22&&a.memoizedState!==null?Gg(i):s!==null?(s.return=a,U=s):Gg(i);for(;o!==null;)U=o,Mx(o),o=o.sibling;U=i,ts=l,tt=u}Hg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):Hg(e)}}function Hg(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||lu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Jt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Tg(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tg(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Jo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}tt||t.flags&512&&Df(t)}catch(p){Ce(t,t.return,p)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Wg(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Gg(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{lu(4,t)}catch(s){Ce(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Ce(t,i,s)}}var o=t.return;try{Df(t)}catch(s){Ce(t,o,s)}break;case 5:var a=t.return;try{Df(t)}catch(s){Ce(t,a,s)}}}catch(s){Ce(t,t.return,s)}if(t===e){U=null;break}var l=t.sibling;if(l!==null){l.return=t.return,U=l;break}U=t.return}}var ik=Math.ceil,yl=qn.ReactCurrentDispatcher,mh=qn.ReactCurrentOwner,Ut=qn.ReactCurrentBatchConfig,ae=0,Be=null,je=null,Ye=0,Tt=0,Si=Cr(0),Ae=0,ca=null,Gr=0,uu=0,gh=0,Vo=null,vt=null,vh=0,Ai=1/0,Mn=null,xl=!1,Af=null,vr=null,ns=!1,lr=null,bl=0,Bo=0,Ff=null,Is=-1,js=0;function lt(){return ae&6?Te():Is!==-1?Is:Is=Te()}function yr(e){return e.mode&1?ae&2&&Ye!==0?Ye&-Ye:VC.transition!==null?(js===0&&(js=py()),js):(e=fe,e!==0||(e=window.event,e=e===void 0?16:by(e.type)),e):1}function an(e,t,n,r){if(50<Bo)throw Bo=0,Ff=null,Error(V(185));Ea(e,n,r),(!(ae&2)||e!==Be)&&(e===Be&&(!(ae&2)&&(uu|=n),Ae===4&&or(e,Ye)),wt(e,r),n===1&&ae===0&&!(t.mode&1)&&(Ai=Te()+500,ou&&kr()))}function wt(e,t){var n=e.callbackNode;VE(e,t);var r=rl(e,e===Be?Ye:0);if(r===0)n!==null&&tg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&tg(n),t===1)e.tag===0?zC(Yg.bind(null,e)):Ny(Yg.bind(null,e)),RC(function(){!(ae&6)&&kr()}),n=null;else{switch(hy(r)){case 1:n=Up;break;case 4:n=dy;break;case 16:n=nl;break;case 536870912:n=fy;break;default:n=nl}n=Fx(n,Ix.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ix(e,t){if(Is=-1,js=0,ae&6)throw Error(V(327));var n=e.callbackNode;if(Pi()&&e.callbackNode!==n)return null;var r=rl(e,e===Be?Ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wl(e,r);else{t=r;var i=ae;ae|=2;var o=$x();(Be!==e||Ye!==t)&&(Mn=null,Ai=Te()+500,zr(e,t));do try{sk();break}catch(l){jx(e,l)}while(1);nh(),yl.current=o,ae=i,je!==null?t=0:(Be=null,Ye=0,t=Ae)}if(t!==0){if(t===2&&(i=df(e),i!==0&&(r=i,t=Nf(e,i))),t===1)throw n=ca,zr(e,0),or(e,r),wt(e,Te()),n;if(t===6)or(e,r);else{if(i=e.current.alternate,!(r&30)&&!ok(i)&&(t=wl(e,r),t===2&&(o=df(e),o!==0&&(r=o,t=Nf(e,o))),t===1))throw n=ca,zr(e,0),or(e,r),wt(e,Te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Ir(e,vt,Mn);break;case 3:if(or(e,r),(r&130023424)===r&&(t=vh+500-Te(),10<t)){if(rl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){lt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xf(Ir.bind(null,e,vt,Mn),t);break}Ir(e,vt,Mn);break;case 4:if(or(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-on(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ik(r/1960))-r,10<r){e.timeoutHandle=xf(Ir.bind(null,e,vt,Mn),r);break}Ir(e,vt,Mn);break;case 5:Ir(e,vt,Mn);break;default:throw Error(V(329))}}}return wt(e,Te()),e.callbackNode===n?Ix.bind(null,e):null}function Nf(e,t){var n=Vo;return e.current.memoizedState.isDehydrated&&(zr(e,t).flags|=256),e=wl(e,t),e!==2&&(t=vt,vt=n,t!==null&&zf(t)),e}function zf(e){vt===null?vt=e:vt.push.apply(vt,e)}function ok(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!un(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function or(e,t){for(t&=~gh,t&=~uu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-on(t),r=1<<n;e[n]=-1,t&=~r}}function Yg(e){if(ae&6)throw Error(V(327));Pi();var t=rl(e,0);if(!(t&1))return wt(e,Te()),null;var n=wl(e,t);if(e.tag!==0&&n===2){var r=df(e);r!==0&&(t=r,n=Nf(e,r))}if(n===1)throw n=ca,zr(e,0),or(e,t),wt(e,Te()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ir(e,vt,Mn),wt(e,Te()),null}function yh(e,t){var n=ae;ae|=1;try{return e(t)}finally{ae=n,ae===0&&(Ai=Te()+500,ou&&kr())}}function Yr(e){lr!==null&&lr.tag===0&&!(ae&6)&&Pi();var t=ae;ae|=1;var n=Ut.transition,r=fe;try{if(Ut.transition=null,fe=1,e)return e()}finally{fe=r,Ut.transition=n,ae=t,!(ae&6)&&kr()}}function xh(){Tt=Si.current,ve(Si)}function zr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,LC(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(Jp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ll();break;case 3:Li(),ve(xt),ve(rt),lh();break;case 5:sh(r);break;case 4:Li();break;case 13:ve(Se);break;case 19:ve(Se);break;case 10:rh(r.type._context);break;case 22:case 23:xh()}n=n.return}if(Be=e,je=e=xr(e.current,null),Ye=Tt=t,Ae=0,ca=null,gh=uu=Gr=0,vt=Vo=null,Ar!==null){for(t=0;t<Ar.length;t++)if(n=Ar[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Ar=null}return e}function jx(e,t){do{var n=je;try{if(nh(),Ps.current=vl,gl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gl=!1}if(Wr=0,Ve=Le=_e=null,No=!1,sa=0,mh.current=null,n===null||n.return===null){Ae=1,ca=t,je=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Ye,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Dg(a);if(h!==null){h.flags&=-257,Lg(h,a,l,o,t),h.mode&1&&$g(o,u,t),t=h,s=u;var v=t.updateQueue;if(v===null){var g=new Set;g.add(s),t.updateQueue=g}else v.add(s);break e}else{if(!(t&1)){$g(o,u,t),bh();break e}s=Error(V(426))}}else if(be&&l.mode&1){var w=Dg(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Lg(w,a,l,o,t),eh(Ri(s,l));break e}}o=s=Ri(s,l),Ae!==4&&(Ae=2),Vo===null?Vo=[o]:Vo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=mx(o,s,t);kg(o,f);break e;case 1:l=s;var m=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(vr===null||!vr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=gx(o,l,t);kg(o,S);break e}}o=o.return}while(o!==null)}Lx(n)}catch(C){t=C,je===n&&n!==null&&(je=n=n.return);continue}break}while(1)}function $x(){var e=yl.current;return yl.current=vl,e===null?vl:e}function bh(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Be===null||!(Gr&268435455)&&!(uu&268435455)||or(Be,Ye)}function wl(e,t){var n=ae;ae|=2;var r=$x();(Be!==e||Ye!==t)&&(Mn=null,zr(e,t));do try{ak();break}catch(i){jx(e,i)}while(1);if(nh(),ae=n,yl.current=r,je!==null)throw Error(V(261));return Be=null,Ye=0,Ae}function ak(){for(;je!==null;)Dx(je)}function sk(){for(;je!==null&&!jE();)Dx(je)}function Dx(e){var t=Ax(e.alternate,e,Tt);e.memoizedProps=e.pendingProps,t===null?Lx(e):je=t,mh.current=null}function Lx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ek(n,t),n!==null){n.flags&=32767,je=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,je=null;return}}else if(n=JC(n,t,Tt),n!==null){je=n;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);Ae===0&&(Ae=5)}function Ir(e,t,n){var r=fe,i=Ut.transition;try{Ut.transition=null,fe=1,lk(e,t,n,r)}finally{Ut.transition=i,fe=r}return null}function lk(e,t,n,r){do Pi();while(lr!==null);if(ae&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(BE(e,o),e===Be&&(je=Be=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ns||(ns=!0,Fx(nl,function(){return Pi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ut.transition,Ut.transition=null;var a=fe;fe=1;var l=ae;ae|=4,mh.current=null,nk(e,n),Ox(n,e),PC(vf),il=!!gf,vf=gf=null,e.current=n,rk(n),$E(),ae=l,fe=a,Ut.transition=o}else e.current=n;if(ns&&(ns=!1,lr=e,bl=i),o=e.pendingLanes,o===0&&(vr=null),RE(n.stateNode),wt(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xl)throw xl=!1,e=Af,Af=null,e;return bl&1&&e.tag!==0&&Pi(),o=e.pendingLanes,o&1?e===Ff?Bo++:(Bo=0,Ff=e):Bo=0,kr(),null}function Pi(){if(lr!==null){var e=hy(bl),t=Ut.transition,n=fe;try{if(Ut.transition=null,fe=16>e?16:e,lr===null)var r=!1;else{if(e=lr,lr=null,bl=0,ae&6)throw Error(V(331));var i=ae;for(ae|=4,U=e.current;U!==null;){var o=U,a=o.child;if(U.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:zo(8,c,o)}var d=c.child;if(d!==null)d.return=c,U=d;else for(;U!==null;){c=U;var p=c.sibling,h=c.return;if(kx(c),c===u){U=null;break}if(p!==null){p.return=h,U=p;break}U=h}}}var v=o.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}U=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,U=a;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zo(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,U=f;break e}U=o.return}}var m=e.current;for(U=m;U!==null;){a=U;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,U=x;else e:for(a=m;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:lu(9,l)}}catch(C){Ce(l,l.return,C)}if(l===a){U=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,U=S;break e}U=l.return}}if(ae=i,kr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(eu,e)}catch{}r=!0}return r}finally{fe=n,Ut.transition=t}}return!1}function Xg(e,t,n){t=Ri(n,t),t=mx(e,t,1),e=gr(e,t,1),t=lt(),e!==null&&(Ea(e,1,t),wt(e,t))}function Ce(e,t,n){if(e.tag===3)Xg(e,e,n);else for(;t!==null;){if(t.tag===3){Xg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){e=Ri(n,e),e=gx(t,e,1),t=gr(t,e,1),e=lt(),t!==null&&(Ea(t,1,e),wt(t,e));break}}t=t.return}}function uk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(Ye&n)===n&&(Ae===4||Ae===3&&(Ye&130023424)===Ye&&500>Te()-vh?zr(e,0):gh|=n),wt(e,t)}function Rx(e,t){t===0&&(e.mode&1?(t=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):t=1);var n=lt();e=Hn(e,t),e!==null&&(Ea(e,t,n),wt(e,n))}function ck(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rx(e,n)}function dk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Rx(e,n)}var Ax;Ax=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)yt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return yt=!1,QC(e,t,n);yt=!!(e.flags&131072)}else yt=!1,be&&t.flags&1048576&&zy(t,dl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ms(e,t),e=t.pendingProps;var i=ji(t,rt.current);Ti(t,n),i=ch(null,t,r,e,i,n);var o=dh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(r)?(o=!0,ul(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,oh(t),i.updater=au,t.stateNode=i,i._reactInternals=t,kf(t,r,e,n),t=Of(null,t,r,!0,o,n)):(t.tag=0,be&&o&&Qp(t),at(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ms(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=pk(r),e=Jt(r,e),i){case 0:t=Pf(null,t,r,e,n);break e;case 1:t=Fg(null,t,r,e,n);break e;case 11:t=Rg(null,t,r,e,n);break e;case 14:t=Ag(null,t,r,Jt(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Pf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Fg(e,t,r,i,n);case 3:e:{if(bx(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Hy(e,t),hl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ri(Error(V(423)),t),t=Ng(e,t,r,n,i);break e}else if(r!==i){i=Ri(Error(V(424)),t),t=Ng(e,t,r,n,i);break e}else for(Ot=mr(t.stateNode.containerInfo.firstChild),It=t,be=!0,nn=null,n=Xy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($i(),r===i){t=Wn(e,t,n);break e}at(e,t,r,n)}t=t.child}return t;case 5:return qy(t),e===null&&_f(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,yf(r,i)?a=null:o!==null&&yf(r,o)&&(t.flags|=32),xx(e,t),at(e,t,a,n),t.child;case 6:return e===null&&_f(t),null;case 13:return wx(e,t,n);case 4:return ah(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Di(t,null,r,n):at(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Rg(e,t,r,i,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,he(fl,r._currentValue),r._currentValue=a,o!==null)if(un(o.value,a)){if(o.children===i.children&&!xt.current){t=Wn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Fn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ef(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ef(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}at(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ti(t,n),i=Ht(i),r=r(i),t.flags|=1,at(e,t,r,n),t.child;case 14:return r=t.type,i=Jt(r,t.pendingProps),i=Jt(r.type,i),Ag(e,t,r,i,n);case 15:return vx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Ms(e,t),t.tag=1,bt(r)?(e=!0,ul(t)):e=!1,Ti(t,n),Gy(t,r,i),kf(t,r,i,n),Of(null,t,r,!0,e,n);case 19:return Sx(e,t,n);case 22:return yx(e,t,n)}throw Error(V(156,t.tag))};function Fx(e,t){return cy(e,t)}function fk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(e,t,n,r){return new fk(e,t,n,r)}function wh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pk(e){if(typeof e=="function")return wh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zp)return 11;if(e===Vp)return 14}return 2}function xr(e,t){var n=e.alternate;return n===null?(n=Bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $s(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")wh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case fi:return Vr(n.children,i,o,t);case Np:a=8,i|=8;break;case qd:return e=Bt(12,n,t,i|2),e.elementType=qd,e.lanes=o,e;case Kd:return e=Bt(13,n,t,i),e.elementType=Kd,e.lanes=o,e;case Zd:return e=Bt(19,n,t,i),e.elementType=Zd,e.lanes=o,e;case Y1:return cu(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W1:a=10;break e;case G1:a=9;break e;case zp:a=11;break e;case Vp:a=14;break e;case nr:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Bt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Vr(e,t,n,r){return e=Bt(7,e,r,t),e.lanes=n,e}function cu(e,t,n,r){return e=Bt(22,e,r,t),e.elementType=Y1,e.lanes=n,e.stateNode={isHidden:!1},e}function Uc(e,t,n){return e=Bt(6,e,null,t),e.lanes=n,e}function Hc(e,t,n){return t=Bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sh(e,t,n,r,i,o,a,l,s){return e=new hk(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Bt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oh(o),e}function mk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:di,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nx(e){if(!e)return Sr;e=e._reactInternals;e:{if(ei(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(bt(n))return Fy(e,n,t)}return t}function zx(e,t,n,r,i,o,a,l,s){return e=Sh(n,r,!0,e,i,o,a,l,s),e.context=Nx(null),n=e.current,r=lt(),i=yr(n),o=Fn(r,i),o.callback=t??null,gr(n,o,i),e.current.lanes=i,Ea(e,i,r),wt(e,r),e}function du(e,t,n,r){var i=t.current,o=lt(),a=yr(i);return n=Nx(n),t.context===null?t.context=n:t.pendingContext=n,t=Fn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gr(i,t,a),e!==null&&(an(e,i,a,o),Ts(e,i,a)),a}function Sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _h(e,t){qg(e,t),(e=e.alternate)&&qg(e,t)}function gk(){return null}var Vx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Eh(e){this._internalRoot=e}fu.prototype.render=Eh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));du(e,t,null,null)};fu.prototype.unmount=Eh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yr(function(){du(null,e,null,null)}),t[Un]=null}};function fu(e){this._internalRoot=e}fu.prototype.unstable_scheduleHydration=function(e){if(e){var t=vy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ir.length&&t!==0&&t<ir[n].priority;n++);ir.splice(n,0,e),n===0&&xy(e)}};function Ch(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kg(){}function vk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Sl(a);o.call(u)}}var a=zx(t,r,e,0,null,!1,!1,"",Kg);return e._reactRootContainer=a,e[Un]=a.current,na(e.nodeType===8?e.parentNode:e),Yr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Sl(s);l.call(u)}}var s=Sh(e,0,!1,null,null,!1,!1,"",Kg);return e._reactRootContainer=s,e[Un]=s.current,na(e.nodeType===8?e.parentNode:e),Yr(function(){du(t,s,n,r)}),s}function hu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Sl(a);l.call(s)}}du(t,a,e,i)}else a=vk(n,t,e,i,r);return Sl(a)}my=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=To(t.pendingLanes);n!==0&&(Hp(t,n|1),wt(t,Te()),!(ae&6)&&(Ai=Te()+500,kr()))}break;case 13:Yr(function(){var r=Hn(e,1);if(r!==null){var i=lt();an(r,e,1,i)}}),_h(e,1)}};Wp=function(e){if(e.tag===13){var t=Hn(e,134217728);if(t!==null){var n=lt();an(t,e,134217728,n)}_h(e,134217728)}};gy=function(e){if(e.tag===13){var t=yr(e),n=Hn(e,t);if(n!==null){var r=lt();an(n,e,t,r)}_h(e,t)}};vy=function(){return fe};yy=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};lf=function(e,t,n){switch(t){case"input":if(ef(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=iu(r);if(!i)throw Error(V(90));q1(r),ef(r,i)}}}break;case"textarea":Z1(e,n);break;case"select":t=n.value,t!=null&&_i(e,!!n.multiple,t,!1)}};iy=yh;oy=Yr;var yk={usingClientEntryPoint:!1,Events:[ka,gi,iu,ny,ry,yh]},yo={findFiberByHostInstance:Rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xk={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ly(e),e===null?null:e.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||gk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rs.isDisabled&&rs.supportsFiber)try{eu=rs.inject(xk),wn=rs}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yk;Lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ch(t))throw Error(V(200));return mk(e,t,null,n)};Lt.createRoot=function(e,t){if(!Ch(e))throw Error(V(299));var n=!1,r="",i=Vx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Sh(e,1,!1,null,null,n,!1,r,i),e[Un]=t.current,na(e.nodeType===8?e.parentNode:e),new Eh(t)};Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=ly(t),e=e===null?null:e.stateNode,e};Lt.flushSync=function(e){return Yr(e)};Lt.hydrate=function(e,t,n){if(!pu(t))throw Error(V(200));return hu(null,e,t,!0,n)};Lt.hydrateRoot=function(e,t,n){if(!Ch(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Vx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=zx(t,null,e,1,n??null,i,!1,o,a),e[Un]=t.current,na(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new fu(t)};Lt.render=function(e,t,n){if(!pu(t))throw Error(V(200));return hu(null,e,t,!1,n)};Lt.unmountComponentAtNode=function(e){if(!pu(e))throw Error(V(40));return e._reactRootContainer?(Yr(function(){hu(null,null,e,!1,function(){e._reactRootContainer=null,e[Un]=null})}),!0):!1};Lt.unstable_batchedUpdates=yh;Lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pu(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return hu(e,t,n,!1,r)};Lt.version="18.2.0-next-9e3b772b8-20220608";function Bx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bx)}catch(e){console.error(e)}}Bx(),z1.exports=Lt;var mu=z1.exports,Zg=mu;Yd.createRoot=Zg.createRoot,Yd.hydrateRoot=Zg.hydrateRoot;var nt=function(){return nt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},nt.apply(this,arguments)};function Fi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function bk(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var wk=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Sk=bk(function(e){return wk.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ge="-ms-",Uo="-moz-",le="-webkit-",Ux="comm",gu="rule",kh="decl",_k="@import",Ek="@namespace",Hx="@keyframes",Ck="@layer",Wx=Math.abs,Th=String.fromCharCode,Vf=Object.assign;function kk(e,t){return Re(e,0)^45?(((t<<2^Re(e,0))<<2^Re(e,1))<<2^Re(e,2))<<2^Re(e,3):0}function Gx(e){return e.trim()}function In(e,t){return(e=t.exec(e))?e[0]:e}function ee(e,t,n){return e.replace(t,n)}function Ds(e,t,n){return e.indexOf(t,n)}function Re(e,t){return e.charCodeAt(t)|0}function Xr(e,t,n){return e.slice(t,n)}function tn(e){return e.length}function Yx(e){return e.length}function Oo(e,t){return t.push(e),e}function Tk(e,t){return e.map(t).join("")}function Qg(e,t){return e.filter(function(n){return!In(n,t)})}var vu=1,Ni=1,Xx=0,Gt=0,Me=0,Ji="";function yu(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:vu,column:Ni,length:a,return:"",siblings:l}}function tr(e,t){return Vf(yu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ii(e){for(;e.root;)e=tr(e.root,{children:[e]});Oo(e,e.siblings)}function Pk(){return Me}function Ok(){return Me=Gt>0?Re(Ji,--Gt):0,Ni--,Me===10&&(Ni=1,vu--),Me}function sn(){return Me=Gt<Xx?Re(Ji,Gt++):0,Ni++,Me===10&&(Ni=1,vu++),Me}function ur(){return Re(Ji,Gt)}function Ls(){return Gt}function xu(e,t){return Xr(Ji,e,t)}function da(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mk(e){return vu=Ni=1,Xx=tn(Ji=e),Gt=0,[]}function Ik(e){return Ji="",e}function Wc(e){return Gx(xu(Gt-1,Bf(e===91?e+2:e===40?e+1:e)))}function jk(e){for(;(Me=ur())&&Me<33;)sn();return da(e)>2||da(Me)>3?"":" "}function $k(e,t){for(;--t&&sn()&&!(Me<48||Me>102||Me>57&&Me<65||Me>70&&Me<97););return xu(e,Ls()+(t<6&&ur()==32&&sn()==32))}function Bf(e){for(;sn();)switch(Me){case e:return Gt;case 34:case 39:e!==34&&e!==39&&Bf(Me);break;case 40:e===41&&Bf(e);break;case 92:sn();break}return Gt}function Dk(e,t){for(;sn()&&e+Me!==47+10;)if(e+Me===42+42&&ur()===47)break;return"/*"+xu(t,Gt-1)+"*"+Th(e===47?e:sn())}function Lk(e){for(;!da(ur());)sn();return xu(e,Gt)}function Rk(e){return Ik(Rs("",null,null,null,[""],e=Mk(e),0,[0],e))}function Rs(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,p=0,h=0,v=0,g=1,w=1,f=1,m=0,x="",S=i,C=o,k=r,_=x;w;)switch(v=m,m=sn()){case 40:if(v!=108&&Re(_,d-1)==58){Ds(_+=ee(Wc(m),"&","&\f"),"&\f",Wx(u?l[u-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:_+=Wc(m);break;case 9:case 10:case 13:case 32:_+=jk(v);break;case 92:_+=$k(Ls()-1,7);continue;case 47:switch(ur()){case 42:case 47:Oo(Ak(Dk(sn(),Ls()),t,n,s),s),(da(v||1)==5||da(ur()||1)==5)&&tn(_)&&Xr(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*g:l[u++]=tn(_)*f;case 125*g:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+c:f==-1&&(_=ee(_,/\f/g,"")),h>0&&(tn(_)-d||g===0&&v===47)&&Oo(h>32?e0(_+";",r,n,d-1,s):e0(ee(_," ","")+";",r,n,d-2,s),s);break;case 59:_+=";";default:if(Oo(k=Jg(_,t,n,u,c,i,l,x,S=[],C=[],d,o),o),m===123)if(c===0)Rs(_,t,k,k,S,o,d,l,C);else{switch(p){case 99:if(Re(_,3)===110)break;case 108:if(Re(_,2)===97)break;default:c=0;case 100:case 109:case 115:}c?Rs(e,k,k,r&&Oo(Jg(e,k,k,0,0,i,l,x,i,S=[],d,C),C),i,C,d,l,r?S:C):Rs(_,k,k,k,[""],C,0,l,C)}}u=c=h=0,g=f=1,x=_="",d=a;break;case 58:d=1+tn(_),h=v;default:if(g<1){if(m==123)--g;else if(m==125&&g++==0&&Ok()==125)continue}switch(_+=Th(m),m*g){case 38:f=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(tn(_)-1)*f,f=1;break;case 64:ur()===45&&(_+=Wc(sn())),p=ur(),c=d=tn(x=_+=Lk(Ls())),m++;break;case 45:v===45&&tn(_)==2&&(g=0)}}return o}function Jg(e,t,n,r,i,o,a,l,s,u,c,d){for(var p=i-1,h=i===0?o:[""],v=Yx(h),g=0,w=0,f=0;g<r;++g)for(var m=0,x=Xr(e,p+1,p=Wx(w=a[g])),S=e;m<v;++m)(S=Gx(w>0?h[m]+" "+x:ee(x,/&\f/g,h[m])))&&(s[f++]=S);return yu(e,t,n,i===0?gu:l,s,u,c,d)}function Ak(e,t,n,r){return yu(e,t,n,Ux,Th(Pk()),Xr(e,2,-2),0,r)}function e0(e,t,n,r,i){return yu(e,t,n,kh,Xr(e,0,r),Xr(e,r+1,-1),r,i)}function qx(e,t,n){switch(kk(e,t)){case 5103:return le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return le+e+e;case 4855:return le+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Uo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return le+e+Uo+e+ge+e+e;case 5936:switch(Re(e,t+11)){case 114:return le+e+ge+ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return le+e+ge+ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return le+e+ge+ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return le+e+ge+e+e;case 6165:return le+e+ge+"flex-"+e+e;case 5187:return le+e+ee(e,/(\w+).+(:[^]+)/,le+"box-$1$2"+ge+"flex-$1$2")+e;case 5443:return le+e+ge+"flex-item-"+ee(e,/flex-|-self/g,"")+(In(e,/flex-|baseline/)?"":ge+"grid-row-"+ee(e,/flex-|-self/g,""))+e;case 4675:return le+e+ge+"flex-line-pack"+ee(e,/align-content|flex-|-self/g,"")+e;case 5548:return le+e+ge+ee(e,"shrink","negative")+e;case 5292:return le+e+ge+ee(e,"basis","preferred-size")+e;case 6060:return le+"box-"+ee(e,"-grow","")+le+e+ge+ee(e,"grow","positive")+e;case 4554:return le+ee(e,/([^-])(transform)/g,"$1"+le+"$2")+e;case 6187:return ee(ee(ee(e,/(zoom-|grab)/,le+"$1"),/(image-set)/,le+"$1"),e,"")+e;case 5495:case 3959:return ee(e,/(image-set\([^]*)/,le+"$1$`$1");case 4968:return ee(ee(e,/(.+:)(flex-)?(.*)/,le+"box-pack:$3"+ge+"flex-pack:$3"),/space-between/,"justify")+le+e+e;case 4200:if(!In(e,/flex-|baseline/))return ge+"grid-column-align"+Xr(e,t)+e;break;case 2592:case 3360:return ge+ee(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,In(r.props,/grid-\w+-end/)})?~Ds(e+(n=n[t].value),"span",0)?e:ge+ee(e,"-start","")+e+ge+"grid-row-span:"+(~Ds(n,"span",0)?In(n,/\d+/):+In(n,/\d+/)-+In(e,/\d+/))+";":ge+ee(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return In(r.props,/grid-\w+-start/)})?e:ge+ee(ee(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ee(e,/(.+)-inline(.+)/,le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tn(e)-1-t>6)switch(Re(e,t+1)){case 109:if(Re(e,t+4)!==45)break;case 102:return ee(e,/(.+:)(.+)-([^]+)/,"$1"+le+"$2-$3$1"+Uo+(Re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ds(e,"stretch",0)?qx(ee(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ee(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return ge+i+":"+o+u+(a?ge+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(Re(e,t+6)===121)return ee(e,":",":"+le)+e;break;case 6444:switch(Re(e,Re(e,14)===45?18:11)){case 120:return ee(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+le+(Re(e,14)===45?"inline-":"")+"box$3$1"+le+"$2$3$1"+ge+"$2box$3")+e;case 100:return ee(e,":",":"+ge)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(e,"scroll-","scroll-snap-")+e}return e}function _l(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Fk(e,t,n,r){switch(e.type){case Ck:if(e.children.length)break;case _k:case Ek:case kh:return e.return=e.return||e.value;case Ux:return"";case Hx:return e.return=e.value+"{"+_l(e.children,r)+"}";case gu:if(!tn(e.value=e.props.join(",")))return""}return tn(n=_l(e.children,r))?e.return=e.value+"{"+n+"}":""}function Nk(e){var t=Yx(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function zk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Vk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case kh:e.return=qx(e.value,e.length,n);return;case Hx:return _l([tr(e,{value:ee(e.value,"@","@"+le)})],r);case gu:if(e.length)return Tk(n=e.props,function(i){switch(In(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ii(tr(e,{props:[ee(i,/:(read-\w+)/,":"+Uo+"$1")]})),ii(tr(e,{props:[i]})),Vf(e,{props:Qg(n,r)});break;case"::placeholder":ii(tr(e,{props:[ee(i,/:(plac\w+)/,":"+le+"input-$1")]})),ii(tr(e,{props:[ee(i,/:(plac\w+)/,":"+Uo+"$1")]})),ii(tr(e,{props:[ee(i,/:(plac\w+)/,ge+"input-$1")]})),ii(tr(e,{props:[i]})),Vf(e,{props:Qg(n,r)});break}return""})}}var Bk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Kx="active",Zx="data-styled-version",bu="6.3.11",Ph=`/*!sc*/
`,Ho=typeof window<"u"&&typeof document<"u",Uk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Hk={};function Pa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var As=new Map,El=new Map,Fs=1,Mo=function(e){if(As.has(e))return As.get(e);for(;El.has(Fs);)Fs++;var t=Fs++;return As.set(e,t),El.set(t,e),t},Wk=function(e,t){Fs=t+1,As.set(e,t),El.set(t,e)},Oh=Object.freeze([]),Vi=Object.freeze({});function Qx(e,t,n){return n===void 0&&(n=Vi),e.theme!==n.theme&&e.theme||t||n.theme}var Jx=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Gk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Yk=/(^-|-$)/g;function t0(e){return e.replace(Gk,"-").replace(Yk,"")}var Xk=/(a)(d)/gi,n0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Uf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=n0(t%52)+n;return(n0(t%52)+n).replace(Xk,"$1-$2")}var Gc,jr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},eb=function(e){return jr(5381,e)};function Mh(e){return Uf(eb(e)>>>0)}function qk(e){return e.displayName||e.name||"Component"}function Yc(e){return typeof e=="string"&&!0}var tb=typeof Symbol=="function"&&Symbol.for,nb=tb?Symbol.for("react.memo"):60115,Kk=tb?Symbol.for("react.forward_ref"):60112,Zk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jk=((Gc={})[Kk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gc[nb]=rb,Gc);function r0(e){return("type"in(t=e)&&t.type.$$typeof)===nb?rb:"$$typeof"in e?Jk[e.$$typeof]:Zk;var t}var eT=Object.defineProperty,tT=Object.getOwnPropertyNames,i0=Object.getOwnPropertySymbols,nT=Object.getOwnPropertyDescriptor,rT=Object.getPrototypeOf,o0=Object.prototype;function ib(e,t,n){if(typeof t!="string"){if(o0){var r=rT(t);r&&r!==o0&&ib(e,r,n)}var i=tT(t);i0&&(i=i.concat(i0(t)));for(var o=r0(e),a=r0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in Qk||n&&n[s]||a&&s in a||o&&s in o)){var u=nT(t,s);try{eT(e,s,u)}catch{}}}}return e}function Bi(e){return typeof e=="function"}function Ih(e){return typeof e=="object"&&"styledComponentId"in e}function Nr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Cl(e,t){return e.join(t||"")}function fa(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Hf(e,t,n){if(n===void 0&&(n=!1),!n&&!fa(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Hf(e[r],t[r]);else if(fa(t))for(var r in t)e[r]=Hf(e[r],t[r]);return e}function jh(e,t){Object.defineProperty(e,"toString",{value:t})}var iT=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Pa(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+Ph;return n},e}(),oT="style[".concat(zi,"][").concat(Zx,'="').concat(bu,'"]'),aT=new RegExp("^".concat(zi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),a0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Wf=function(e){if(!e)return document;if(a0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(a0(t))return t}return document},sT=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},lT=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ph),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(aT);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(Wk(c,u),sT(e,c,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},Xc=function(e){for(var t=Wf(e.options.target).querySelectorAll(oT),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(zi)!==Kx&&(lT(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function uT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ob=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(zi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(zi,Kx),r.setAttribute(Zx,bu);var a=uT();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},cT=function(){function e(t){this.element=ob(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Pa(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),dT=function(){function e(t){this.element=ob(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),fT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),s0=Ho,pT={isServer:!Ho,useCSSOMInjection:!Uk},kl=function(){function e(t,n,r){t===void 0&&(t=Vi),n===void 0&&(n={});var i=this;this.options=nt(nt({},pT),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ho&&s0&&(s0=!1,Xc(this)),jh(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(d){var p=function(f){return El.get(f)}(d);if(p===void 0)return"continue";var h=o.names.get(p);if(h===void 0||!h.size)return"continue";var v=a.getGroup(d);if(v.length===0)return"continue";var g=zi+".g"+d+'[id="'+p+'"]',w="";h.forEach(function(f){f.length>0&&(w+=f+",")}),s+=v+g+'{content:"'+w+'"}'+Ph},c=0;c<l;c++)u(c);return s}(i)})}return e.registerId=function(t){return Mo(t)},e.prototype.rehydrate=function(){!this.server&&Ho&&Xc(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(nt(nt({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Ho&&t.target!==this.options.target&&Wf(this.options.target)!==Wf(t.target)&&Xc(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new fT(i):r?new cT(i):new dT(i)}(this.options),new iT(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Mo(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Mo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Mo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),hT=/&/g,jn=47,$r=42;function l0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==jn||e.charCodeAt(o+1)!==$r)if(i)a===$r&&e.charCodeAt(o+1)===jn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function ab(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ab(n.children,t)),n})}function mT(e){var t,n,r,i=e===void 0?Vi:e,o=i.options,a=o===void 0?Vi:o,l=i.plugins,s=l===void 0?Oh:l,u=function(v,g,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):v},c=s.slice();c.push(function(v){v.type===gu&&v.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),v.props[0]=v.props[0].replace(hT,n).replace(r,u))}),a.prefix&&c.push(Vk),c.push(Fk);var d=[],p=Nk(c.concat(zk(function(v){return d.push(v)}))),h=function(v,g,w,f){g===void 0&&(g=""),w===void 0&&(w=""),f===void 0&&(f="&"),t=f,n=g,r=void 0;var m=function(S){if(!l0(S))return S;for(var C=S.length,k="",_=0,E=0,M=0,I=!1,$=0;$<C;$++){var O=S.charCodeAt($);if(M!==0||I||O!==jn||S.charCodeAt($+1)!==$r)if(I)O===$r&&S.charCodeAt($+1)===jn&&(I=!1,$++);else if(O!==34&&O!==39||$!==0&&S.charCodeAt($-1)===92){if(M===0)if(O===123)E++;else if(O===125){if(--E<0){for(var j=$+1;j<C;){var R=S.charCodeAt(j);if(R===59||R===10)break;j++}j<C&&S.charCodeAt(j)===59&&j++,E=0,$=j-1,_=j;continue}E===0&&(k+=S.substring(_,$+1),_=$+1)}else O===59&&E===0&&(k+=S.substring(_,$+1),_=$+1)}else M===0?M=O:M===O&&(M=0);else I=!0,$++}if(_<C){var L=S.substring(_);l0(L)||(k+=L)}return k}(function(S){if(S.indexOf("//")===-1)return S;for(var C=S.length,k=[],_=0,E=0,M=0,I=0;E<C;){var $=S.charCodeAt(E);if($!==34&&$!==39||E!==0&&S.charCodeAt(E-1)===92)if(M===0)if($===jn&&E+1<C&&S.charCodeAt(E+1)===$r){for(E+=2;E+1<C&&(S.charCodeAt(E)!==$r||S.charCodeAt(E+1)!==jn);)E++;E+=2}else if($===40&&E>=3&&(32|S.charCodeAt(E-1))==108&&(32|S.charCodeAt(E-2))==114&&(32|S.charCodeAt(E-3))==117)I=1,E++;else if(I>0)$===41?I--:$===40&&I++,E++;else if($===$r&&E+1<C&&S.charCodeAt(E+1)===jn)E>_&&k.push(S.substring(_,E)),_=E+=2;else if($===jn&&E+1<C&&S.charCodeAt(E+1)===jn){for(E>_&&k.push(S.substring(_,E));E<C&&S.charCodeAt(E)!==10;)E++;_=E}else E++;else E++;else M===0?M=$:M===$&&(M=0),E++}return _===0?S:(_<C&&k.push(S.substring(_)),k.join(""))}(v)),x=Rk(w||g?"".concat(w," ").concat(g," { ").concat(m," }"):m);return a.namespace&&(x=ab(x,a.namespace)),d=[],_l(x,p),d};return h.hash=s.length?s.reduce(function(v,g){return g.name||Pa(15),jr(v,g.name)},5381).toString():"",h}var gT=new kl,Gf=mT(),sb=W.createContext({shouldForwardProp:void 0,styleSheet:gT,stylis:Gf});sb.Consumer;W.createContext(void 0);function Yf(){return W.useContext(sb)}var lb=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Gf);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,jh(this,function(){throw Pa(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Gf),this.name+t.hash},e}();function vT(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Bk||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var yT=function(e){return e>="A"&&e<="Z"};function u0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;yT(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ub=function(e){return e==null||e===!1||e===""},cb=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!ub(r)&&(Array.isArray(r)&&r.isCss||Bi(r)?t.push("".concat(u0(n),":"),r,";"):fa(r)?t.push.apply(t,Fi(Fi(["".concat(n," {")],cb(r),!1),["}"],!1)):t.push("".concat(u0(n),": ").concat(vT(n,r),";")))}return t};function br(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(ub(e))return i;if(Ih(e))return i.push(".".concat(e.styledComponentId)),i;if(Bi(e)){if(!Bi(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return br(o,t,n,r,i)}var a;if(e instanceof lb)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(fa(e)){for(var l=cb(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)br(e[s],t,n,r,i);return i}function db(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Bi(n)&&!Ih(n))return!1}return!0}var xT=eb(bu),bT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&db(t),this.componentId=n,this.baseHash=jr(xT,n),this.baseStyle=r,kl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Nr(i,this.staticRulesId);else{var o=Cl(br(this.rules,t,n,r)),a=Uf(jr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Nr(i,a),this.staticRulesId=a}else{for(var s=jr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var p=Cl(br(d,t,n,r));s=jr(jr(s,String(c)),p),u+=p}}if(u){var h=Uf(s>>>0);if(!n.hasNameForId(this.componentId,h)){var v=r(u,".".concat(h),void 0,this.componentId);n.insertRules(this.componentId,h,v)}i=Nr(i,h)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Mo(this.componentId)):""}},e}(),$h=W.createContext(void 0);$h.Consumer;var qc={};function wT(e,t,n){var r=Ih(e),i=e,o=!Yc(e),a=t.attrs,l=a===void 0?Oh:a,s=t.componentId,u=s===void 0?function(S,C){var k=typeof S!="string"?"sc":t0(S);qc[k]=(qc[k]||0)+1;var _="".concat(k,"-").concat(Mh(bu+k+qc[k]));return C?"".concat(C,"-").concat(_):_}(t.displayName,t.parentComponentId):s,c=t.displayName,d=c===void 0?function(S){return Yc(S)?"styled.".concat(S):"Styled(".concat(qk(S),")")}(e):c,p=t.displayName&&t.componentId?"".concat(t0(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;v=function(S,C){return g(S,C)&&w(S,C)}}else v=g}var f=new bT(n,p,r?i.componentStyle:void 0);function m(S,C){return function(k,_,E){var M=k.attrs,I=k.componentStyle,$=k.defaultProps,O=k.foldedComponentIds,j=k.styledComponentId,R=k.target,L=W.useContext($h),F=Yf(),A=k.shouldForwardProp||F.shouldForwardProp,P=Qx(_,L,$)||Vi,D=function(K,re,we){for(var qe,Oe=nt(nt({},re),{className:void 0,theme:we}),Xt=0;Xt<K.length;Xt+=1){var Ft=Bi(qe=K[Xt])?qe(Oe):qe;for(var kt in Ft)kt==="className"?Oe.className=Nr(Oe.className,Ft[kt]):kt==="style"?Oe.style=nt(nt({},Oe.style),Ft[kt]):Oe[kt]=Ft[kt]}return"className"in re&&typeof re.className=="string"&&(Oe.className=Nr(Oe.className,re.className)),Oe}(M,_,P),N=D.as||R,B={};for(var z in D)D[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&D.theme===P||(z==="forwardedAs"?B.as=D.forwardedAs:A&&!A(z,N)||(B[z]=D[z]));var G=function(K,re){var we=Yf(),qe=K.generateAndInjectStyles(re,we.styleSheet,we.stylis);return qe}(I,D),Q=G.className,Z=Nr(O,j);return Q&&(Z+=" "+Q),D.className&&(Z+=" "+D.className),B[Yc(N)&&!Jx.has(N)?"class":"className"]=Z,E&&(B.ref=E),b.createElement(N,B)}(x,S,C)}m.displayName=d;var x=W.forwardRef(m);return x.attrs=h,x.componentStyle=f,x.displayName=d,x.shouldForwardProp=v,x.foldedComponentIds=r?Nr(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=p,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(C){for(var k=[],_=1;_<arguments.length;_++)k[_-1]=arguments[_];for(var E=0,M=k;E<M.length;E++)Hf(C,M[E],!0);return C}({},i.defaultProps,S):S}}),jh(x,function(){return".".concat(x.styledComponentId)}),o&&ib(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function c0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var d0=function(e){return Object.assign(e,{isCss:!0})};function Dh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Bi(e)||fa(e))return d0(br(c0(Oh,Fi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?br(r):d0(br(c0(r,t)))}function Xf(e,t,n){if(n===void 0&&(n=Vi),!t)throw Pa(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Dh.apply(void 0,Fi([i],o,!1)))};return r.attrs=function(i){return Xf(e,t,nt(nt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Xf(e,t,nt(nt({},n),i))},r}var fb=function(e){return Xf(wT,e)},T=fb;Jx.forEach(function(e){T[e]=fb(e)});var ST=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=db(t),kl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Cl(br(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&kl.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function _T(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Dh.apply(void 0,Fi([e],t,!1)),i="sc-global-".concat(Mh(JSON.stringify(r))),o=new ST(r,i),a=new WeakMap,l=function(u){var c=Yf(),d=W.useContext($h),p=a.get(c.styleSheet);return p===void 0&&(p=c.styleSheet.allocateGSInstance(i),a.set(c.styleSheet,p)),(typeof window>"u"||!c.styleSheet.server)&&s(p,u,c.styleSheet,d,c.stylis),W.useLayoutEffect(function(){return c.styleSheet.server||s(p,u,c.styleSheet,d,c.stylis),function(){var h;o.removeStyles(p,c.styleSheet),h=c.styleSheet.options.target,typeof document<"u"&&(h??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(v){return v.remove()})}},[p,u,c.styleSheet,d,c.stylis]),null};function s(u,c,d,p,h){if(o.isStatic)o.renderStyles(u,Hk,d,h);else{var v=nt(nt({},c),{theme:Qx(c,p,l.defaultProps)});o.renderStyles(u,v,d,h)}}return W.memo(l)}function Lh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Cl(Dh.apply(void 0,Fi([e],t,!1))),i=Mh(r);return new lb(i,r)}const ET=T.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,CT=T.div`
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
`,kT=T.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,TT=T.div`

  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`,PT=T.div`
  display: flex;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`;T(Pe)`
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
`;const OT=T(Pe)`
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
`;const MT=T.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,IT=T.button`
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
`;const jT=T.div`
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
`,$T=T.button`
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
`,DT=T.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,is=T(Pe)`
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
`,LT=T.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,RT=T.div`
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
`,AT=T.div`
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



`,FT=T.input`
  
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
`,NT=T.button`
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
   
`,zT=T.svg`
  width: 24px;
  height: 24px;
  

`,cn="/Didiv/assets/symbol-defs-f1e4efb3.svg",VT=()=>{const[e,t]=b.useState("");return y.jsxs(AT,{children:[y.jsx(FT,{name:"site-search",value:e,onChange:n=>t(n.target.value),placeholder:"Пошук",autoComplete:"off"}),y.jsx(NT,{className:"search-button",children:y.jsx(zT,{children:y.jsx("use",{href:`${cn}#icon-search`})})})]})};var pb={exports:{}},hb={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=b;function BT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var UT=typeof Object.is=="function"?Object.is:BT,HT=Oa.useSyncExternalStore,WT=Oa.useRef,GT=Oa.useEffect,YT=Oa.useMemo,XT=Oa.useDebugValue;hb.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=WT(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=YT(function(){function s(h){if(!u){if(u=!0,c=h,h=r(h),i!==void 0&&a.hasValue){var v=a.value;if(i(v,h))return d=v}return d=h}if(v=d,UT(c,h))return v;var g=r(h);return i!==void 0&&i(v,g)?(c=h,v):(c=h,d=g)}var u=!1,c,d,p=n===void 0?null:n;return[function(){return s(t())},p===null?void 0:function(){return s(p())}]},[t,n,r,i]);var l=HT(e,o[0],o[1]);return GT(function(){a.hasValue=!0,a.value=l},[l]),XT(l),l};pb.exports=hb;var qT=pb.exports;function KT(e){e()}function ZT(){let e=null,t=null;return{clear(){e=null,t=null},notify(){KT(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var f0={notify(){},get:()=>[]};function QT(e,t){let n,r=f0,i=0,o=!1;function a(g){c();const w=r.subscribe(g);let f=!1;return()=>{f||(f=!0,w(),d())}}function l(){r.notify()}function s(){v.onStateChange&&v.onStateChange()}function u(){return o}function c(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=ZT())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=f0)}function p(){o||(o=!0,c())}function h(){o&&(o=!1,d())}const v={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:p,tryUnsubscribe:h,getListeners:()=>r};return v}var JT=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eP=JT(),tP=()=>typeof navigator<"u"&&navigator.product==="ReactNative",nP=tP(),rP=()=>eP||nP?b.useLayoutEffect:b.useEffect,iP=rP(),Kc=Symbol.for("react-redux-context"),Zc=typeof globalThis<"u"?globalThis:{};function oP(){if(!b.createContext)return{};const e=Zc[Kc]??(Zc[Kc]=new Map);let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var _r=oP();function aP(e){const{children:t,context:n,serverState:r,store:i}=e,o=b.useMemo(()=>{const s=QT(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=b.useMemo(()=>i.getState(),[i]);iP(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||_r;return b.createElement(l.Provider,{value:o},t)}var sP=aP;function Rh(e=_r){return function(){return b.useContext(e)}}var mb=Rh();function gb(e=_r){const t=e===_r?mb:Rh(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var lP=gb();function uP(e=_r){const t=e===_r?lP:gb(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var eo=uP(),cP=(e,t)=>e===t;function dP(e=_r){const t=e===_r?mb:Rh(e),n=(r,i={})=>{const{equalityFn:o=cP}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:u}=a;b.useRef(!0);const c=b.useCallback({[r.name](p){return r(p)}}[r.name],[r]),d=qT.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,c,o);return b.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Nn=dP();const fP=T(Pe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,pP=T.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,hP=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,mP=T.div`
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
`,gP=({onClick:e})=>{const t=Nn(n=>n.cart.items.length);return y.jsx(fP,{to:"/cart",children:y.jsxs(hP,{onClick:e,children:[y.jsx(pP,{children:y.jsx("use",{href:`${cn}#icon-cart`})}),t>0&&y.jsx(mP,{children:t})]})})},vP=T.nav`
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
`,os=T(Pe)`
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
`,yP=()=>y.jsxs(vP,{children:[y.jsx(os,{to:"/",children:"Головна"}),y.jsx(os,{to:"/about",children:"Про нас"}),y.jsx(os,{to:"/catalog",children:"Каталог"}),y.jsx(os,{to:"/contacts",children:"Контакти"})]}),xP=T.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,bP=T(Pe)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
 
  }
       
`,wP=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,SP=T.div`

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
`,_P=({onClick:e})=>{const t=Nn(n=>n.favorites.items.length);return y.jsx(bP,{to:"/favorite",children:y.jsxs(wP,{onClick:e,children:[y.jsx(xP,{children:y.jsx("use",{href:`${cn}#icon-heart`})}),t>0&&y.jsx(SP,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EP=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=e=>{const t=CP(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>b.createElement("svg",{ref:s,...kP,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:vb("lucide",i),...!o&&!TP(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,c])=>b.createElement(u,c)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(PP,{ref:o,iconNode:t,className:vb(`lucide-${EP(p0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=p0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OP=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],yb=Tn("arrow-right",OP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],xb=Tn("heart",MP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],jP=Tn("house",IP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $P=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],DP=Tn("info",$P);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],RP=Tn("mail",LP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],FP=Tn("shopping-bag",AP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NP=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],wu=Tn("shopping-cart",NP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],bb=Tn("sliders-horizontal",zP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],wb=Tn("trash-2",VP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Sb=Tn("x",BP),UP=()=>{const[e,t]=b.useState(!1);return y.jsx(ET,{children:y.jsx(CT,{children:y.jsxs(kT,{children:[y.jsxs(TT,{children:[y.jsx(OT,{to:"/",children:"Дідів хлів"}),y.jsxs(PT,{children:[y.jsx(gP,{}),y.jsx(_P,{}),y.jsx(yP,{}),y.jsx(IT,{onClick:()=>t(!e),children:y.jsx(MT,{children:y.jsx("use",{href:`${cn}#icon-menu`})})}),y.jsx(RT,{open:e,onClick:()=>t(!1)}),y.jsxs(jT,{open:e,children:[y.jsx($T,{onClick:()=>t(!1),children:y.jsx(Sb,{size:28,strokeWidth:1.5})}),y.jsxs(DT,{children:[y.jsxs(is,{onClick:()=>t(!1),to:"/",children:[y.jsx(jP,{size:22,strokeWidth:1.5})," Головна"]}),y.jsxs(is,{onClick:()=>t(!1),to:"/about",children:[y.jsx(DP,{size:22,strokeWidth:1.5})," Про нас"]}),y.jsxs(is,{onClick:()=>t(!1),to:"/catalog",children:[y.jsx(FP,{size:22,strokeWidth:1.5})," Каталог"]}),y.jsxs(is,{onClick:()=>t(!1),to:"/contacts",children:[y.jsx(RP,{size:22,strokeWidth:1.5})," Контакти"]})]}),y.jsx(LT,{children:y.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),y.jsx(VT,{})]})})})},HP=T.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,WP=T.footer`
 
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
`,GP=T.div`
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
`,Qc=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,Jc=T.h3`
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
`,mn=T(Pe)`
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
`,YP=T.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,h0=T.a`
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
`,XP=()=>y.jsx(HP,{children:y.jsxs(WP,{children:[y.jsxs(GP,{children:[y.jsxs(Qc,{children:[y.jsx(Jc,{children:"Навігація"}),y.jsx(mn,{to:"/",children:"Головна"}),y.jsx(mn,{to:"/about",children:"Про нас"}),y.jsx(mn,{to:"/catalog",children:"Каталог"}),y.jsx(mn,{to:"/contacts",children:"Контакти"})]}),y.jsxs(Qc,{children:[y.jsx(Jc,{children:"Інформація"}),y.jsx(mn,{to:"/delivery",children:"Оплата і доставка"}),y.jsx(mn,{children:"Повернення"}),y.jsx(mn,{children:"Гарантія"}),y.jsx(mn,{children:"Політика конфіденційності"})]})]}),y.jsxs(Qc,{children:[y.jsx(Jc,{children:"Контакти"}),y.jsx(mn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),y.jsx(mn,{href:"mailto:email@email.com",children:"email@email.com"}),y.jsxs(YP,{children:[y.jsx(h0,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${cn}#icon-instagram`})})}),y.jsx(h0,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${cn}#icon-telegram`})})})]})]})]})}),qP=()=>(console.log("rer"),y.jsxs(y.Fragment,{children:[y.jsx(UP,{}),y.jsx("main",{className:"main-content",children:y.jsx(oE,{})}),y.jsx(XP,{})]}));function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}function KP(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function ZP(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var QP=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ZP(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=KP(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Je="-ms-",Tl="-moz-",ue="-webkit-",_b="comm",Ah="rule",Fh="decl",JP="@import",Eb="@keyframes",eO="@layer",tO=Math.abs,Su=String.fromCharCode,nO=Object.assign;function rO(e,t){return Ge(e,0)^45?(((t<<2^Ge(e,0))<<2^Ge(e,1))<<2^Ge(e,2))<<2^Ge(e,3):0}function Cb(e){return e.trim()}function iO(e,t){return(e=t.exec(e))?e[0]:e}function ce(e,t,n){return e.replace(t,n)}function qf(e,t){return e.indexOf(t)}function Ge(e,t){return e.charCodeAt(t)|0}function pa(e,t,n){return e.slice(t,n)}function vn(e){return e.length}function Nh(e){return e.length}function as(e,t){return t.push(e),e}function oO(e,t){return e.map(t).join("")}var _u=1,Ui=1,kb=0,St=0,Ie=0,to="";function Eu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:_u,column:Ui,length:a,return:""}}function xo(e,t){return nO(Eu("",null,null,"",null,null,0),e,{length:-e.length},t)}function aO(){return Ie}function sO(){return Ie=St>0?Ge(to,--St):0,Ui--,Ie===10&&(Ui=1,_u--),Ie}function jt(){return Ie=St<kb?Ge(to,St++):0,Ui++,Ie===10&&(Ui=1,_u++),Ie}function _n(){return Ge(to,St)}function Ns(){return St}function Ma(e,t){return pa(to,e,t)}function ha(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Tb(e){return _u=Ui=1,kb=vn(to=e),St=0,[]}function Pb(e){return to="",e}function zs(e){return Cb(Ma(St-1,Kf(e===91?e+2:e===40?e+1:e)))}function lO(e){for(;(Ie=_n())&&Ie<33;)jt();return ha(e)>2||ha(Ie)>3?"":" "}function uO(e,t){for(;--t&&jt()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Ma(e,Ns()+(t<6&&_n()==32&&jt()==32))}function Kf(e){for(;jt();)switch(Ie){case e:return St;case 34:case 39:e!==34&&e!==39&&Kf(Ie);break;case 40:e===41&&Kf(e);break;case 92:jt();break}return St}function cO(e,t){for(;jt()&&e+Ie!==47+10;)if(e+Ie===42+42&&_n()===47)break;return"/*"+Ma(t,St-1)+"*"+Su(e===47?e:jt())}function dO(e){for(;!ha(_n());)jt();return Ma(e,St)}function fO(e){return Pb(Vs("",null,null,null,[""],e=Tb(e),0,[0],e))}function Vs(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,p=0,h=0,v=0,g=1,w=1,f=1,m=0,x="",S=i,C=o,k=r,_=x;w;)switch(v=m,m=jt()){case 40:if(v!=108&&Ge(_,d-1)==58){qf(_+=ce(zs(m),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:_+=zs(m);break;case 9:case 10:case 13:case 32:_+=lO(v);break;case 92:_+=uO(Ns()-1,7);continue;case 47:switch(_n()){case 42:case 47:as(pO(cO(jt(),Ns()),t,n),s);break;default:_+="/"}break;case 123*g:l[u++]=vn(_)*f;case 125*g:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+c:f==-1&&(_=ce(_,/\f/g,"")),h>0&&vn(_)-d&&as(h>32?g0(_+";",r,n,d-1):g0(ce(_," ","")+";",r,n,d-2),s);break;case 59:_+=";";default:if(as(k=m0(_,t,n,u,c,i,l,x,S=[],C=[],d),o),m===123)if(c===0)Vs(_,t,k,k,S,o,d,l,C);else switch(p===99&&Ge(_,3)===110?100:p){case 100:case 108:case 109:case 115:Vs(e,k,k,r&&as(m0(e,k,k,0,0,i,l,x,i,S=[],d),C),i,C,d,l,r?S:C);break;default:Vs(_,k,k,k,[""],C,0,l,C)}}u=c=h=0,g=f=1,x=_="",d=a;break;case 58:d=1+vn(_),h=v;default:if(g<1){if(m==123)--g;else if(m==125&&g++==0&&sO()==125)continue}switch(_+=Su(m),m*g){case 38:f=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(vn(_)-1)*f,f=1;break;case 64:_n()===45&&(_+=zs(jt())),p=_n(),c=d=vn(x=_+=dO(Ns())),m++;break;case 45:v===45&&vn(_)==2&&(g=0)}}return o}function m0(e,t,n,r,i,o,a,l,s,u,c){for(var d=i-1,p=i===0?o:[""],h=Nh(p),v=0,g=0,w=0;v<r;++v)for(var f=0,m=pa(e,d+1,d=tO(g=a[v])),x=e;f<h;++f)(x=Cb(g>0?p[f]+" "+m:ce(m,/&\f/g,p[f])))&&(s[w++]=x);return Eu(e,t,n,i===0?Ah:l,s,u,c)}function pO(e,t,n){return Eu(e,t,n,_b,Su(aO()),pa(e,2,-2),0)}function g0(e,t,n,r){return Eu(e,t,n,Fh,pa(e,0,r),pa(e,r+1,-1),r)}function Oi(e,t){for(var n="",r=Nh(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function hO(e,t,n,r){switch(e.type){case eO:if(e.children.length)break;case JP:case Fh:return e.return=e.return||e.value;case _b:return"";case Eb:return e.return=e.value+"{"+Oi(e.children,r)+"}";case Ah:e.value=e.props.join(",")}return vn(n=Oi(e.children,r))?e.return=e.value+"{"+n+"}":""}function mO(e){var t=Nh(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function gO(e){return function(t){t.root||(t=t.return)&&e(t)}}function vO(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var yO=function(t,n,r){for(var i=0,o=0;i=o,o=_n(),i===38&&o===12&&(n[r]=1),!ha(o);)jt();return Ma(t,St)},xO=function(t,n){var r=-1,i=44;do switch(ha(i)){case 0:i===38&&_n()===12&&(n[r]=1),t[r]+=yO(St-1,n,r);break;case 2:t[r]+=zs(i);break;case 4:if(i===44){t[++r]=_n()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Su(i)}while(i=jt());return t},bO=function(t,n){return Pb(xO(Tb(t),n))},v0=new WeakMap,wO=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!v0.get(r))&&!i){v0.set(t,!0);for(var o=[],a=bO(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var c=0;c<l.length;c++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[c]):l[c]+" "+a[s]}}},SO=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Ob(e,t){switch(rO(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+Tl+e+Je+e+e;case 6828:case 4268:return ue+e+Je+e+e;case 6165:return ue+e+Je+"flex-"+e+e;case 5187:return ue+e+ce(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+Je+"flex-$1$2")+e;case 5443:return ue+e+Je+"flex-item-"+ce(e,/flex-|-self/,"")+e;case 4675:return ue+e+Je+"flex-line-pack"+ce(e,/align-content|flex-|-self/,"")+e;case 5548:return ue+e+Je+ce(e,"shrink","negative")+e;case 5292:return ue+e+Je+ce(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ce(e,"-grow","")+ue+e+Je+ce(e,"grow","positive")+e;case 4554:return ue+ce(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ce(ce(ce(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ce(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ce(ce(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+Je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4095:case 3583:case 4068:case 2532:return ce(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(vn(e)-1-t>6)switch(Ge(e,t+1)){case 109:if(Ge(e,t+4)!==45)break;case 102:return ce(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+Tl+(Ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~qf(e,"stretch")?Ob(ce(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ge(e,t+1)!==115)break;case 6444:switch(Ge(e,vn(e)-3-(~qf(e,"!important")&&10))){case 107:return ce(e,":",":"+ue)+e;case 101:return ce(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ue+(Ge(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+Je+"$2box$3")+e}break;case 5936:switch(Ge(e,t+11)){case 114:return ue+e+Je+ce(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+Je+ce(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+Je+ce(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ue+e+Je+e+e}return e}var _O=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Fh:t.return=Ob(t.value,t.length);break;case Eb:return Oi([xo(t,{value:ce(t.value,"@","@"+ue)})],i);case Ah:if(t.length)return oO(t.props,function(o){switch(iO(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Oi([xo(t,{props:[ce(o,/:(read-\w+)/,":"+Tl+"$1")]})],i);case"::placeholder":return Oi([xo(t,{props:[ce(o,/:(plac\w+)/,":"+ue+"input-$1")]}),xo(t,{props:[ce(o,/:(plac\w+)/,":"+Tl+"$1")]}),xo(t,{props:[ce(o,/:(plac\w+)/,Je+"input-$1")]})],i)}return""})}},EO=[_O],CO=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var w=g.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var i=t.stylisPlugins||EO,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var w=g.getAttribute("data-emotion").split(" "),f=1;f<w.length;f++)o[w[f]]=!0;l.push(g)});var s,u=[wO,SO];{var c,d=[hO,gO(function(g){c.insert(g)})],p=mO(u.concat(i,d)),h=function(w){return Oi(fO(w),p)};s=function(w,f,m,x){c=m,h(w?w+"{"+f.styles+"}":f.styles),x&&(v.inserted[f.name]=!0)}}var v={key:n,sheet:new QP({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return v.sheet.hydrate(l),v},Mb={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue=typeof Symbol=="function"&&Symbol.for,zh=Ue?Symbol.for("react.element"):60103,Vh=Ue?Symbol.for("react.portal"):60106,Cu=Ue?Symbol.for("react.fragment"):60107,ku=Ue?Symbol.for("react.strict_mode"):60108,Tu=Ue?Symbol.for("react.profiler"):60114,Pu=Ue?Symbol.for("react.provider"):60109,Ou=Ue?Symbol.for("react.context"):60110,Bh=Ue?Symbol.for("react.async_mode"):60111,Mu=Ue?Symbol.for("react.concurrent_mode"):60111,Iu=Ue?Symbol.for("react.forward_ref"):60112,ju=Ue?Symbol.for("react.suspense"):60113,kO=Ue?Symbol.for("react.suspense_list"):60120,$u=Ue?Symbol.for("react.memo"):60115,Du=Ue?Symbol.for("react.lazy"):60116,TO=Ue?Symbol.for("react.block"):60121,PO=Ue?Symbol.for("react.fundamental"):60117,OO=Ue?Symbol.for("react.responder"):60118,MO=Ue?Symbol.for("react.scope"):60119;function At(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case zh:switch(e=e.type,e){case Bh:case Mu:case Cu:case Tu:case ku:case ju:return e;default:switch(e=e&&e.$$typeof,e){case Ou:case Iu:case Du:case $u:case Pu:return e;default:return t}}case Vh:return t}}}function Ib(e){return At(e)===Mu}pe.AsyncMode=Bh;pe.ConcurrentMode=Mu;pe.ContextConsumer=Ou;pe.ContextProvider=Pu;pe.Element=zh;pe.ForwardRef=Iu;pe.Fragment=Cu;pe.Lazy=Du;pe.Memo=$u;pe.Portal=Vh;pe.Profiler=Tu;pe.StrictMode=ku;pe.Suspense=ju;pe.isAsyncMode=function(e){return Ib(e)||At(e)===Bh};pe.isConcurrentMode=Ib;pe.isContextConsumer=function(e){return At(e)===Ou};pe.isContextProvider=function(e){return At(e)===Pu};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===zh};pe.isForwardRef=function(e){return At(e)===Iu};pe.isFragment=function(e){return At(e)===Cu};pe.isLazy=function(e){return At(e)===Du};pe.isMemo=function(e){return At(e)===$u};pe.isPortal=function(e){return At(e)===Vh};pe.isProfiler=function(e){return At(e)===Tu};pe.isStrictMode=function(e){return At(e)===ku};pe.isSuspense=function(e){return At(e)===ju};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Cu||e===Mu||e===Tu||e===ku||e===ju||e===kO||typeof e=="object"&&e!==null&&(e.$$typeof===Du||e.$$typeof===$u||e.$$typeof===Pu||e.$$typeof===Ou||e.$$typeof===Iu||e.$$typeof===PO||e.$$typeof===OO||e.$$typeof===MO||e.$$typeof===TO)};pe.typeOf=At;Mb.exports=pe;var IO=Mb.exports,jb=IO,jO={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$O={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$b={};$b[jb.ForwardRef]=jO;$b[jb.Memo]=$O;var DO=!0;function Db(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Uh=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||DO===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Lb=function(t,n,r){Uh(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function LO(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var RO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},AO=/[A-Z]|^ms/g,FO=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Rb=function(t){return t.charCodeAt(1)===45},y0=function(t){return t!=null&&typeof t!="boolean"},ed=vO(function(e){return Rb(e)?e:e.replace(AO,"-$&").toLowerCase()}),x0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(FO,function(r,i,o){return yn={name:i,styles:o,next:yn},i})}return RO[t]!==1&&!Rb(t)&&typeof n=="number"&&n!==0?n+"px":n};function ma(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return yn={name:n.name,styles:n.styles,next:yn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)yn={name:r.name,styles:r.styles,next:yn},r=r.next;var i=n.styles+";";return i}return NO(e,t,n)}case"function":{if(e!==void 0){var o=yn,a=n(e);return yn=o,ma(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function NO(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ma(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":y0(a)&&(r+=ed(o)+":"+x0(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)y0(a[l])&&(r+=ed(o)+":"+x0(o,a[l])+";");else{var s=ma(e,t,a);switch(o){case"animation":case"animationName":{r+=ed(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var b0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,yn,Hh=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";yn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=ma(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=ma(r,n,t[l]),i&&(o+=a[l]);b0.lastIndex=0;for(var s="",u;(u=b0.exec(o))!==null;)s+="-"+u[1];var c=LO(o)+s;return{name:c,styles:o,next:yn}},zO=function(t){return t()},VO=Ud["useInsertionEffect"]?Ud["useInsertionEffect"]:!1,Ab=VO||zO,Wh={}.hasOwnProperty,Fb=b.createContext(typeof HTMLElement<"u"?CO({key:"css"}):null);Fb.Provider;var Nb=function(t){return b.forwardRef(function(n,r){var i=b.useContext(Fb);return t(n,i,r)})},zb=b.createContext({}),Zf="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",BO=function(t,n){var r={};for(var i in n)Wh.call(n,i)&&(r[i]=n[i]);return r[Zf]=t,r},UO=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Uh(n,r,i),Ab(function(){return Lb(n,r,i)}),null},HO=Nb(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Zf],o=[r],a="";typeof e.className=="string"?a=Db(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=Hh(o,void 0,b.useContext(zb));a+=t.key+"-"+l.name;var s={};for(var u in e)Wh.call(e,u)&&u!=="css"&&u!==Zf&&(s[u]=e[u]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(UO,{cache:t,serialized:l,isStringTag:typeof i=="string"}),b.createElement(i,s))}),WO=HO,Y=function(t,n){var r=arguments;if(n==null||!Wh.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=WO,o[1]=BO(t,n);for(var a=2;a<i;a++)o[a]=r[a];return b.createElement.apply(null,o)};function Gh(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Hh(t)}var GO=function(){var t=Gh.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},YO=Sk,XO=function(t){return t!=="theme"},w0=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?YO:XO},S0=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},qO=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Uh(n,r,i),Ab(function(){return Lb(n,r,i)}),null},KO=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=S0(t,n,r),s=l||w0(i),u=!s("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var p=c.length,h=1;h<p;h++)d.push(c[h],c[0][h])}var v=Nb(function(g,w,f){var m=u&&g.as||i,x="",S=[],C=g;if(g.theme==null){C={};for(var k in g)C[k]=g[k];C.theme=b.useContext(zb)}typeof g.className=="string"?x=Db(w.registered,S,g.className):g.className!=null&&(x=g.className+" ");var _=Hh(d.concat(S),w.registered,C);x+=w.key+"-"+_.name,a!==void 0&&(x+=" "+a);var E=u&&l===void 0?w0(m):s,M={};for(var I in g)u&&I==="as"||E(I)&&(M[I]=g[I]);return M.className=x,M.ref=f,b.createElement(b.Fragment,null,b.createElement(qO,{cache:w,serialized:_,isStringTag:typeof m=="string"}),b.createElement(m,M))});return v.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",v.defaultProps=t.defaultProps,v.__emotion_real=v,v.__emotion_base=i,v.__emotion_styles=d,v.__emotion_forwardProp=l,Object.defineProperty(v,"toString",{value:function(){return"."+a}}),v.withComponent=function(g,w){return e(g,q({},n,w,{shouldForwardProp:S0(v,w,!0)})).apply(void 0,d)},v}},ZO=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Fe=KO.bind();ZO.forEach(function(e){Fe[e]=Fe(e)});const QO=Fe.section`
  background-color:  var(--second-background);
 
 
`,JO=Fe.div`
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
  
`,e3=Fe.h1`

    font-size: 32px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;

 
`,t3=Fe.div`
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
`;const n3=Fe(Pe)`
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
`,r3=Fe.div`
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
`,i3=Fe.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
 

  display: block;
   @media screen and (max-width: 768px) {
  height: 100px;
  }

`,o3=Fe.p`
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

`;var a3={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};s3(a3);function s3(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var l3="#4fa94d",u3={"aria-busy":!0,role:"progressbar"},c3=T.div`
  display: ${e=>e.$visible?"flex":"none"};
`,d3="http://www.w3.org/2000/svg",Yh=({height:e=100,width:t=100,radius:n=5,color:r=l3,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>y.jsx(c3,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...u3,children:y.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:d3,"data-testid":"ball-triangle-svg",children:[y.jsx("title",{children:"Ball Triangle"}),y.jsx("desc",{children:"Animated representation of three balls"}),y.jsx("g",{fill:"none",fillRule:"evenodd",children:y.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[y.jsxs("circle",{cx:"5",cy:"50",r:n,children:[y.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),y.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),y.jsxs("circle",{cx:"27",cy:"5",r:n,children:[y.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),y.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),y.jsxs("circle",{cx:"49",cy:"50",r:n,children:[y.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),y.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),Zt=242.776657104492,f3=1.6,p3=Lh`
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
  animation: ${p3} ${f3}s linear infinite;
`;var h3=Lh`
to {
   transform: rotate(360deg);
 }
`;T.svg`
  animation: ${h3} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var m3=Lh`
to {
   stroke-dashoffset: 136;
 }
`;T.polygon`
  stroke-dasharray: 17;
  animation: ${m3} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;T.svg`
  transform-origin: 50% 65%;
`;const g3=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*")).json();console.log(a),t(a.data.map(l=>({id:l.id_title,title:l.title,image:l.image.url})))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?y.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:y.jsx(Yh,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):y.jsx(QO,{children:y.jsxs(JO,{children:[y.jsx(e3,{children:"Каталог"}),y.jsx(t3,{children:e.map(i=>y.jsxs(n3,{to:`/catalog/${i.id}`,children:[y.jsx(r3,{children:y.jsx(i3,{src:i.image,alt:i.title})}),y.jsx(o3,{children:i.title})]},i.id))})]})})},v3=Fe.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,y3=Fe.h1`
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
`,x3=Fe.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,b3=Fe(Pe)`

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

  
`,w3=()=>y.jsxs(v3,{children:[y.jsxs(y3,{children:[" ",y.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),y.jsx(x3,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),y.jsx(b3,{children:" На головну"})]});const S3=T.div`
  width: 100%;
  height: 100%;
font-family: var(--main-font);
`,_3=T.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var Vb={},Bb={},Lu={},Ub={exports:{}},Ia={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var _0=Object.getOwnPropertySymbols,E3=Object.prototype.hasOwnProperty,C3=Object.prototype.propertyIsEnumerable;function k3(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function T3(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var P3=T3()?Object.assign:function(e,t){for(var n,r=k3(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)E3.call(n,a)&&(r[a]=n[a]);if(_0){i=_0(n);for(var l=0;l<i.length;l++)C3.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},Hb={exports:{}},se={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh=P3,no=60103,Wb=60106;se.Fragment=60107;se.StrictMode=60108;se.Profiler=60114;var Gb=60109,Yb=60110,Xb=60112;se.Suspense=60113;var qb=60115,Kb=60116;if(typeof Symbol=="function"&&Symbol.for){var Kt=Symbol.for;no=Kt("react.element"),Wb=Kt("react.portal"),se.Fragment=Kt("react.fragment"),se.StrictMode=Kt("react.strict_mode"),se.Profiler=Kt("react.profiler"),Gb=Kt("react.provider"),Yb=Kt("react.context"),Xb=Kt("react.forward_ref"),se.Suspense=Kt("react.suspense"),qb=Kt("react.memo"),Kb=Kt("react.lazy")}var E0=typeof Symbol=="function"&&Symbol.iterator;function O3(e){return e===null||typeof e!="object"?null:(e=E0&&e[E0]||e["@@iterator"],typeof e=="function"?e:null)}function ja(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qb={};function ro(e,t,n){this.props=e,this.context=t,this.refs=Qb,this.updater=n||Zb}ro.prototype.isReactComponent={};ro.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(ja(85));this.updater.enqueueSetState(this,e,t,"setState")};ro.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jb(){}Jb.prototype=ro.prototype;function qh(e,t,n){this.props=e,this.context=t,this.refs=Qb,this.updater=n||Zb}var Kh=qh.prototype=new Jb;Kh.constructor=qh;Xh(Kh,ro.prototype);Kh.isPureReactComponent=!0;var Zh={current:null},ew=Object.prototype.hasOwnProperty,tw={key:!0,ref:!0,__self:!0,__source:!0};function nw(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)ew.call(t,r)&&!tw.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:no,type:e,key:o,ref:a,props:i,_owner:Zh.current}}function M3(e,t){return{$$typeof:no,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qh(e){return typeof e=="object"&&e!==null&&e.$$typeof===no}function I3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var C0=/\/+/g;function td(e,t){return typeof e=="object"&&e!==null&&e.key!=null?I3(""+e.key):t.toString(36)}function Bs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case no:case Wb:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+td(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(C0,"$&/")+"/"),Bs(i,t,n,"",function(u){return u})):i!=null&&(Qh(i)&&(i=M3(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(C0,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+td(o,l);a+=Bs(o,t,n,s,i)}else if(s=O3(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+td(o,l++),a+=Bs(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(ja(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function ss(e,t,n){if(e==null)return e;var r=[],i=0;return Bs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function j3(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var rw={current:null};function Kn(){var e=rw.current;if(e===null)throw Error(ja(321));return e}var $3={ReactCurrentDispatcher:rw,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Zh,IsSomeRendererActing:{current:!1},assign:Xh};se.Children={map:ss,forEach:function(e,t,n){ss(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ss(e,function(){t++}),t},toArray:function(e){return ss(e,function(t){return t})||[]},only:function(e){if(!Qh(e))throw Error(ja(143));return e}};se.Component=ro;se.PureComponent=qh;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$3;se.cloneElement=function(e,t,n){if(e==null)throw Error(ja(267,e));var r=Xh({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Zh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)ew.call(t,s)&&!tw.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:no,type:e.type,key:i,ref:o,props:r,_owner:a}};se.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Yb,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Gb,_context:e},e.Consumer=e};se.createElement=nw;se.createFactory=function(e){var t=nw.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:Xb,render:e}};se.isValidElement=Qh;se.lazy=function(e){return{$$typeof:Kb,_payload:{_status:-1,_result:e},_init:j3}};se.memo=function(e,t){return{$$typeof:qb,type:e,compare:t===void 0?null:t}};se.useCallback=function(e,t){return Kn().useCallback(e,t)};se.useContext=function(e,t){return Kn().useContext(e,t)};se.useDebugValue=function(){};se.useEffect=function(e,t){return Kn().useEffect(e,t)};se.useImperativeHandle=function(e,t,n){return Kn().useImperativeHandle(e,t,n)};se.useLayoutEffect=function(e,t){return Kn().useLayoutEffect(e,t)};se.useMemo=function(e,t){return Kn().useMemo(e,t)};se.useReducer=function(e,t,n){return Kn().useReducer(e,t,n)};se.useRef=function(e){return Kn().useRef(e)};se.useState=function(e){return Kn().useState(e)};se.version="17.0.2";Hb.exports=se;var D3=Hb.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L3=D3,iw=60103;Ia.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var k0=Symbol.for;iw=k0("react.element"),Ia.Fragment=k0("react.fragment")}var R3=L3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A3=Object.prototype.hasOwnProperty,F3={key:!0,ref:!0,__self:!0,__source:!0};function ow(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)A3.call(t,r)&&!F3.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:iw,type:e,key:o,ref:a,props:i,_owner:R3.current}}Ia.jsx=ow;Ia.jsxs=ow;Ub.exports=Ia;var Et=Ub.exports,aw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(aw);var Ct=aw.exports;const N3={"lds-circle":"_lds-circle_qlxhy_1"},z3=Object.freeze(Object.defineProperty({__proto__:null,default:N3},Symbol.toStringTag,{value:"Module"})),V3=_t(z3);var sw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Lu,"__esModule",{value:!0});Lu.Circle=void 0;const B3=Et,U3=sw(Ct),H3=sw(V3);function W3({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,B3.jsx)("div",{className:(0,U3.default)(H3.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}Lu.Circle=W3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=Lu;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(Bb);var lw={},Ru={};const G3={"lds-default":"_lds-default_wt1n8_1"},Y3=Object.freeze(Object.defineProperty({__proto__:null,default:G3},Symbol.toStringTag,{value:"Module"})),X3=_t(Y3);var uw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ru,"__esModule",{value:!0});Ru.Default=void 0;const T0=Et,q3=uw(Ct),K3=uw(X3);function Z3({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,T0.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,T0.jsx)("div",{className:(0,q3.default)(K3.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}Ru.Default=Z3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=Ru;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(lw);var cw={},Au={};const Q3={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},J3=Object.freeze(Object.defineProperty({__proto__:null,default:Q3},Symbol.toStringTag,{value:"Module"})),e4=_t(J3);var dw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Au,"__esModule",{value:!0});Au.DualRing=void 0;const P0=Et,O0=dw(Ct),M0=dw(e4);function t4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,P0.jsx)("div",{className:(0,O0.default)(M0.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,P0.jsx)("div",{className:(0,O0.default)(M0.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}Au.DualRing=t4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=Au;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(cw);var fw={},Fu={};const n4={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},r4=Object.freeze(Object.defineProperty({__proto__:null,default:n4},Symbol.toStringTag,{value:"Module"})),i4=_t(r4);var pw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Fu,"__esModule",{value:!0});Fu.Ellipsis=void 0;const I0=Et,o4=pw(Ct),a4=pw(i4);function s4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,I0.jsx)("div",{style:{background:`${e}`}},l));return(0,I0.jsx)("div",{className:(0,o4.default)(a4.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}Fu.Ellipsis=s4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=Fu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(fw);var hw={},Nu={};const l4={"lds-facebook":"_lds-facebook_1ts9g_1"},u4=Object.freeze(Object.defineProperty({__proto__:null,default:l4},Symbol.toStringTag,{value:"Module"})),c4=_t(u4);var mw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Nu,"__esModule",{value:!0});Nu.Facebook=void 0;const j0=Et,d4=mw(Ct),f4=mw(c4);function p4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,j0.jsx)("div",{style:{background:`${e}`}},l));return(0,j0.jsx)("div",{className:(0,d4.default)(f4.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}Nu.Facebook=p4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=Nu;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(hw);var gw={},zu={};const h4={"lds-grid":"_lds-grid_1ftub_1"},m4=Object.freeze(Object.defineProperty({__proto__:null,default:h4},Symbol.toStringTag,{value:"Module"})),g4=_t(m4);var vw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(zu,"__esModule",{value:!0});zu.Grid=void 0;const $0=Et,v4=vw(Ct),y4=vw(g4);function x4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,$0.jsx)("div",{style:{background:`${e}`}},l));return(0,$0.jsx)("div",{className:(0,v4.default)(y4.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}zu.Grid=x4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=zu;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(gw);var yw={},Vu={};const b4={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},w4=Object.freeze(Object.defineProperty({__proto__:null,default:b4},Symbol.toStringTag,{value:"Module"})),S4=_t(w4);var xw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Vu,"__esModule",{value:!0});Vu.Heart=void 0;const ls=Et,nd=xw(Ct),rd=xw(S4);function _4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,ls.jsx)("div",{className:(0,nd.default)(rd.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,ls.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,ls.jsx)("div",{className:(0,nd.default)(rd.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,ls.jsx)("div",{className:(0,nd.default)(rd.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}Vu.Heart=_4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=Vu;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(yw);var bw={},Bu={};const E4={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},C4=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"})),k4=_t(C4);var ww=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Bu,"__esModule",{value:!0});Bu.Hourglass=void 0;const D0=Et,L0=ww(Ct),R0=ww(k4);function T4({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,D0.jsx)("div",{className:(0,L0.default)(R0.default["lds-hourglass"],n),style:{...r},children:(0,D0.jsx)("div",{className:(0,L0.default)(R0.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}Bu.Hourglass=T4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=Bu;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(bw);var Sw={},Uu={};const _w="_center_1rufi_10",Ew="_spin_1rufi_1",P4={"lds-orbitals":"_lds-orbitals_1rufi_1",center:_w,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:Ew},O4=Object.freeze(Object.defineProperty({__proto__:null,center:_w,default:P4,spin:Ew},Symbol.toStringTag,{value:"Module"})),M4=_t(O4);var Cw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Uu,"__esModule",{value:!0});Uu.Orbitals=void 0;const Qe=Et,ot=Cw(Ct),xe=Cw(M4);function I4({color:e="#7f58af",className:t,style:n}){return(0,Qe.jsxs)("div",{className:(0,ot.default)(xe.default["lds-orbitals"],t),style:{...n},children:[(0,Qe.jsx)("div",{className:xe.default.center,style:{background:e}}),(0,Qe.jsxs)("div",{className:(0,ot.default)(xe.default["inner-spin"]),children:[(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-moon-a"]),style:{background:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-moon-b"]),style:{background:e}})]}),(0,Qe.jsxs)("div",{className:(0,ot.default)(xe.default["outer-spin"]),children:[(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-moon-a"]),style:{background:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-moon-b"]),style:{background:e}})]})]})}Uu.Orbitals=I4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=Uu;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(Sw);var kw={},Hu={};const j4={"lds-ring":"_lds-ring_xgxdp_1"},$4=Object.freeze(Object.defineProperty({__proto__:null,default:j4},Symbol.toStringTag,{value:"Module"})),D4=_t($4);var Tw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Hu,"__esModule",{value:!0});Hu.Ring=void 0;const A0=Et,L4=Tw(Ct),R4=Tw(D4);function A4({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,A0.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,A0.jsx)("div",{className:(0,L4.default)(R4.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}Hu.Ring=A4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=Hu;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(kw);var Pw={},Wu={};const F4={"lds-ripple":"_lds-ripple_1lgcf_1"},N4=Object.freeze(Object.defineProperty({__proto__:null,default:F4},Symbol.toStringTag,{value:"Module"})),z4=_t(N4);var Ow=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Wu,"__esModule",{value:!0});Wu.Ripple=void 0;const F0=Et,V4=Ow(Ct),B4=Ow(z4);function U4({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,F0.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,F0.jsx)("div",{className:(0,V4.default)(B4.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}Wu.Ripple=U4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=Wu;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(Pw);var Mw={},Gu={};const H4={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},W4=Object.freeze(Object.defineProperty({__proto__:null,default:H4},Symbol.toStringTag,{value:"Module"})),G4=_t(W4);var Iw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Gu,"__esModule",{value:!0});Gu.Roller=void 0;const id=Et,N0=Iw(Ct),z0=Iw(G4);function Y4({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,id.jsx)("div",{children:(0,id.jsx)("div",{className:(0,N0.default)(z0.default["div-after"]),style:{background:e}})},o));return(0,id.jsx)("div",{className:(0,N0.default)(z0.default["lds-roller"],t),style:{...n},children:r})}Gu.Roller=Y4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=Gu;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(Mw);var jw={},Yu={};const X4={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},q4=Object.freeze(Object.defineProperty({__proto__:null,default:X4},Symbol.toStringTag,{value:"Module"})),K4=_t(q4);var $w=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Yu,"__esModule",{value:!0});Yu.Spinner=void 0;const od=Et,V0=$w(Ct),B0=$w(K4);function Z4({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,od.jsx)("div",{children:(0,od.jsx)("div",{className:(0,V0.default)(B0.default["div-after"]),style:{background:e}})},o));return(0,od.jsx)("div",{className:(0,V0.default)(B0.default["lds-spinner"],t),style:{...n},children:r})}Yu.Spinner=Z4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=Yu;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(jw);var Dw={},Xu={};const Lw="_left_v9vlb_30",Rw="_right_v9vlb_33",Aw="_anim_v9vlb_37",Q4={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:Lw,right:Rw,anim:Aw,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},J4=Object.freeze(Object.defineProperty({__proto__:null,anim:Aw,default:Q4,left:Lw,right:Rw},Symbol.toStringTag,{value:"Module"})),eM=_t(J4);var Fw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xu,"__esModule",{value:!0});Xu.Ouroboro=void 0;const bo=Et,wo=Fw(Ct),So=Fw(eM);function tM({color:e="#7f58af",style:t,className:n}){return(0,bo.jsxs)("div",{className:(0,wo.default)(So.default["lds-ouroboro"],n),style:{...t},children:[(0,bo.jsx)("span",{className:(0,wo.default)(So.default.left),children:(0,bo.jsx)("span",{className:(0,wo.default)(So.default.anim),style:{background:e}})}),(0,bo.jsx)("span",{className:(0,wo.default)(So.default.right),children:(0,bo.jsx)("span",{className:(0,wo.default)(So.default.anim),style:{background:e}})})]})}Xu.Ouroboro=tM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=Xu;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(Dw);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=Bb;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=lw;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=cw;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=fw;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=hw;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=gw;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=yw;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=bw;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const u=Sw;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return u.Orbitals}});const c=kw;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return c.Ring}});const d=Pw;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return d.Ripple}});const p=Mw;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return p.Roller}});const h=jw;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return h.Spinner}});const v=Dw;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return v.Ouroboro}})})(Vb);const nM=()=>y.jsx(_3,{children:y.jsx(Vb.Default,{color:"#6d433da8"})});const rM="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",iM=_T`
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
  src: url(${rM}) format('truetype');
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
`,oM=T.div`
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
`,aM=T(Pe)`
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
`,sM=T.h2`
  margin-top: 20px;
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,lM=T.h3`

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
`,uM=T.a`

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
`,cM=T.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,dM=()=>{const[e,t]=b.useState([]);return b.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(console.log("API response:",i),!i.data){console.error("No data field:",i);return}t(i.data.map(o=>({id:o.id,title:o.title,image:o.image.url})))}catch(r){console.error("Fetch error:",r)}}n()},[]),console.log(e),y.jsxs(y.Fragment,{children:[y.jsx(sM,{children:"Каталог"}),y.jsxs(oM,{children:[e.slice(0,6).map(n=>y.jsx(aM,{to:`catalog/${n.id}`,bg:n.image,isBig:n.big,children:y.jsx(lM,{children:n.title})},n.id)),y.jsxs(uM,{href:"catalog",children:[y.jsx("p",{children:"Весь каталог"}),y.jsx(cM,{children:y.jsx(yb,{size:24})})]})]})]})};function U0(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Jh(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:U0(t[r])&&U0(e[r])&&Object.keys(t[r]).length>0&&Jh(e[r],t[r])})}const Nw={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function En(){const e=typeof document<"u"?document:{};return Jh(e,Nw),e}const fM={document:Nw,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function ft(){const e=typeof window<"u"?window:{};return Jh(e,fM),e}function pM(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function hM(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function zw(e,t=0){return setTimeout(e,t)}function Pl(){return Date.now()}function mM(e){const t=ft();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function gM(e,t="x"){const n=ft();let r,i,o;const a=mM(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function us(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function vM(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Pt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!vM(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(us(t[l])&&us(r[l])?r[l].__swiper__?t[l]=r[l]:Pt(t[l],r[l]):!us(t[l])&&us(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Pt(t[l],r[l])):t[l]=r[l])}}}return t}function oi(e,t,n){e.style.setProperty(t,n)}function Vw({swiper:e,targetPosition:t,side:n}){const r=ft(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",u=(d,p)=>s==="next"&&d>=p||s==="prev"&&d<=p,c=()=>{a=new Date().getTime(),o===null&&(o=a);const d=Math.max(Math.min((a-o)/l,1),0),p=.5-Math.cos(d*Math.PI)/2;let h=i+p*(t-i);if(u(h,t)&&(h=t),e.wrapperEl.scrollTo({[n]:h}),u(h,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:h})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(c)};c()}function bn(e,t=""){const n=ft(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function yM(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function xM(e,t){const n=ft();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=yM(e,t))),r}function Ol(e){try{console.warn(e);return}catch{}}function Ml(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:pM(t)),n}function bM(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function wM(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function cr(e,t){return ft().getComputedStyle(e,null).getPropertyValue(t)}function Il(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Bw(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Qf(e,t,n){const r=ft();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function ze(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function ga(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function Uw(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=bn(e.el,`.${r[i]}`)[0];o||(o=Ml("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const H0='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function SM({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:H0};function i(h){let v;return h&&typeof h=="string"&&e.isElement&&(v=e.el.querySelector(h)||e.hostEl.querySelector(h),v)?v:(h&&(typeof h=="string"&&(v=[...document.querySelectorAll(h)]),e.params.uniqueNavElements&&typeof h=="string"&&v&&v.length>1&&e.el.querySelectorAll(h).length===1?v=e.el.querySelector(h):v&&v.length===1&&(v=v[0])),h&&!v?h:v)}function o(h,v){const g=e.params.navigation;h=ze(h),h.forEach(w=>{w&&(w.classList[v?"add":"remove"](...g.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=v),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](g.lockClass))})}function a(){const{nextEl:h,prevEl:v}=e.navigation;if(e.params.loop){o(v,!1),o(h,!1);return}o(v,e.isBeginning&&!e.params.rewind),o(h,e.isEnd&&!e.params.rewind)}function l(h){h.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(h){h.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const h=e.params.navigation;if(e.params.navigation=Uw(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(h.nextEl||h.prevEl))return;let v=i(h.nextEl),g=i(h.prevEl);Object.assign(e.navigation,{nextEl:v,prevEl:g}),v=ze(v),g=ze(g);const w=(f,m)=>{if(f){if(h.addIcons&&f.matches(".swiper-button-next,.swiper-button-prev")&&!f.querySelector("svg")){const x=document.createElement("div");ga(x,H0),f.appendChild(x.querySelector("svg")),x.remove()}f.addEventListener("click",m==="next"?s:l)}!e.enabled&&f&&f.classList.add(...h.lockClass.split(" "))};v.forEach(f=>w(f,"next")),g.forEach(f=>w(f,"prev"))}function c(){let{nextEl:h,prevEl:v}=e.navigation;h=ze(h),v=ze(v);const g=(w,f)=>{w.removeEventListener("click",f==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};h.forEach(w=>g(w,"next")),v.forEach(w=>g(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?p():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{c()}),n("enable disable",()=>{let{nextEl:h,prevEl:v}=e.navigation;if(h=ze(h),v=ze(v),e.enabled){a();return}[...h,...v].filter(g=>!!g).forEach(g=>g.classList.add(e.params.navigation.lockClass))}),n("click",(h,v)=>{let{nextEl:g,prevEl:w}=e.navigation;g=ze(g),w=ze(w);const f=v.target;let m=w.includes(f)||g.includes(f);if(e.isElement&&!m){const x=v.path||v.composedPath&&v.composedPath();x&&(m=x.find(S=>g.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!m){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===f||e.pagination.el.contains(f)))return;let x;g.length?x=g[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(x=w[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...g,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},p=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),c()};Object.assign(e.navigation,{enable:d,disable:p,update:a,init:u,destroy:c})}function _o(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function _M({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(f,m){const{bulletActiveClass:x}=e.params.pagination;f&&(f=f[`${m==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${x}-${m}`),f=f[`${m==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${x}-${m}-${m}`)))}function u(f,m,x){if(f=f%x,m=m%x,m===f+1)return"next";if(m===f-1)return"previous"}function c(f){const m=f.target.closest(_o(e.params.pagination.bulletClass));if(!m)return;f.preventDefault();const x=Il(m)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const S=u(e.realIndex,x,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function d(){const f=e.rtl,m=e.params.pagination;if(l())return;let x=e.pagination.el;x=ze(x);let S,C;const k=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,_=e.params.loop?Math.ceil(k/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(C=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,C=e.previousSnapIndex):(C=e.previousIndex||0,S=e.activeIndex||0),m.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const E=e.pagination.bullets;let M,I,$;if(m.dynamicBullets&&(o=Qf(E[0],e.isHorizontal()?"width":"height",!0),x.forEach(O=>{O.style[e.isHorizontal()?"width":"height"]=`${o*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&C!==void 0&&(a+=S-(C||0),a>m.dynamicMainBullets-1?a=m.dynamicMainBullets-1:a<0&&(a=0)),M=Math.max(S-a,0),I=M+(Math.min(E.length,m.dynamicMainBullets)-1),$=(I+M)/2),E.forEach(O=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(R=>`${m.bulletActiveClass}${R}`)].map(R=>typeof R=="string"&&R.includes(" ")?R.split(" "):R).flat();O.classList.remove(...j)}),x.length>1)E.forEach(O=>{const j=Il(O);j===S?O.classList.add(...m.bulletActiveClass.split(" ")):e.isElement&&O.setAttribute("part","bullet"),m.dynamicBullets&&(j>=M&&j<=I&&O.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),j===M&&s(O,"prev"),j===I&&s(O,"next"))});else{const O=E[S];if(O&&O.classList.add(...m.bulletActiveClass.split(" ")),e.isElement&&E.forEach((j,R)=>{j.setAttribute("part",R===S?"bullet-active":"bullet")}),m.dynamicBullets){const j=E[M],R=E[I];for(let L=M;L<=I;L+=1)E[L]&&E[L].classList.add(...`${m.bulletActiveClass}-main`.split(" "));s(j,"prev"),s(R,"next")}}if(m.dynamicBullets){const O=Math.min(E.length,m.dynamicMainBullets+4),j=(o*O-o)/2-$*o,R=f?"right":"left";E.forEach(L=>{L.style[e.isHorizontal()?R:"top"]=`${j}px`})}}x.forEach((E,M)=>{if(m.type==="fraction"&&(E.querySelectorAll(_o(m.currentClass)).forEach(I=>{I.textContent=m.formatFractionCurrent(S+1)}),E.querySelectorAll(_o(m.totalClass)).forEach(I=>{I.textContent=m.formatFractionTotal(_)})),m.type==="progressbar"){let I;m.progressbarOpposite?I=e.isHorizontal()?"vertical":"horizontal":I=e.isHorizontal()?"horizontal":"vertical";const $=(S+1)/_;let O=1,j=1;I==="horizontal"?O=$:j=$,E.querySelectorAll(_o(m.progressbarFillClass)).forEach(R=>{R.style.transform=`translate3d(0,0,0) scaleX(${O}) scaleY(${j})`,R.style.transitionDuration=`${e.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(ga(E,m.renderCustom(e,S+1,_)),M===0&&r("paginationRender",E)):(M===0&&r("paginationRender",E),r("paginationUpdate",E)),e.params.watchOverflow&&e.enabled&&E.classList[e.isLocked?"add":"remove"](m.lockClass)})}function p(){const f=e.params.pagination;if(l())return;const m=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=ze(x);let S="";if(f.type==="bullets"){let C=e.params.loop?Math.ceil(m/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&C>m&&(C=m);for(let k=0;k<C;k+=1)f.renderBullet?S+=f.renderBullet.call(e,k,f.bulletClass):S+=`<${f.bulletElement} ${e.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?S=f.renderFraction.call(e,f.currentClass,f.totalClass):S=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?S=f.renderProgressbar.call(e,f.progressbarFillClass):S=`<span class="${f.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(C=>{f.type!=="custom"&&ga(C,S||""),f.type==="bullets"&&e.pagination.bullets.push(...C.querySelectorAll(_o(f.bulletClass)))}),f.type!=="custom"&&r("paginationRender",x[0])}function h(){e.params.pagination=Uw(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const f=e.params.pagination;if(!f.el)return;let m;typeof f.el=="string"&&e.isElement&&(m=e.el.querySelector(f.el)),!m&&typeof f.el=="string"&&(m=[...document.querySelectorAll(f.el)]),m||(m=f.el),!(!m||m.length===0)&&(e.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...e.el.querySelectorAll(f.el)],m.length>1&&(m=m.find(x=>Bw(x,".swiper")[0]===e.el))),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(e.pagination,{el:m}),m=ze(m),m.forEach(x=>{f.type==="bullets"&&f.clickable&&x.classList.add(...(f.clickableClass||"").split(" ")),x.classList.add(f.modifierClass+f.type),x.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(x.classList.add(`${f.modifierClass}${f.type}-dynamic`),a=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&x.classList.add(f.progressbarOppositeClass),f.clickable&&x.addEventListener("click",c),e.enabled||x.classList.add(f.lockClass)}))}function v(){const f=e.params.pagination;if(l())return;let m=e.pagination.el;m&&(m=ze(m),m.forEach(x=>{x.classList.remove(f.hiddenClass),x.classList.remove(f.modifierClass+f.type),x.classList.remove(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&(x.classList.remove(...(f.clickableClass||"").split(" ")),x.removeEventListener("click",c))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...f.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const f=e.params.pagination;let{el:m}=e.pagination;m=ze(m),m.forEach(x=>{x.classList.remove(f.horizontalClass,f.verticalClass),x.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(h(),p(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{p(),d()}),n("destroy",()=>{v()}),n("enable disable",()=>{let{el:f}=e.pagination;f&&(f=ze(f),f.forEach(m=>m.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(f,m)=>{const x=m.target,S=ze(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const C=S[0].classList.contains(e.params.pagination.hiddenClass);r(C===!0?"paginationShow":"paginationHide"),S.forEach(k=>k.classList.toggle(e.params.pagination.hiddenClass))}});const g=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=ze(f),f.forEach(m=>m.classList.remove(e.params.pagination.paginationDisabledClass))),h(),p(),d()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=ze(f),f.forEach(m=>m.classList.add(e.params.pagination.paginationDisabledClass))),v()};Object.assign(e.pagination,{enable:g,disable:w,render:p,update:d,init:h,destroy:v})}function EM({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,u,c=new Date().getTime(),d,p,h,v,g,w;function f(A){!e||e.destroyed||!e.wrapperEl||A.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",f),!(w||A.detail&&A.detail.bySwiperTouchMove)&&M())}const m=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(s=u,d=!1);const A=e.autoplay.paused?u:c+s-new Date().getTime();e.autoplay.timeLeft=A,r("autoplayTimeLeft",A,A/l),a=requestAnimationFrame(()=>{m()})},x=()=>{let A;return e.virtual&&e.params.virtual.enabled?A=e.slides.find(D=>D.classList.contains("swiper-slide-active")):A=e.slides[e.activeIndex],A?parseInt(A.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let A=e.params.autoplay.delay;const P=x();return!Number.isNaN(P)&&P>0&&(A=P),A},C=A=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),m();let P=A;typeof P>"u"&&(P=S(),l=P,s=P),u=P;const D=e.params.speed,N=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(D,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,D,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(D,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,D,!0,!0),r("autoplay")),e.params.cssMode&&(c=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return P>0?(clearTimeout(o),o=setTimeout(()=>{N()},P)):requestAnimationFrame(()=>{N()}),P},k=()=>{c=new Date().getTime(),e.autoplay.running=!0,C(),r("autoplayStart")},_=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},E=(A,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),A||(g=!0);const D=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",f):M()};if(e.autoplay.paused=!0,P){D();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-c),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),D())},M=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(c=new Date().getTime(),g?(g=!1,C(u)):C(),e.autoplay.paused=!1,r("autoplayResume"))},I=()=>{if(e.destroyed||!e.autoplay.running)return;const A=En();A.visibilityState==="hidden"&&(g=!0,E(!0)),A.visibilityState==="visible"&&M()},$=A=>{A.pointerType==="mouse"&&(g=!0,w=!0,!(e.animating||e.autoplay.paused)&&E(!0))},O=A=>{A.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&M())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",$),e.el.addEventListener("pointerleave",O))},R=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",$),e.el.removeEventListener("pointerleave",O))},L=()=>{En().addEventListener("visibilitychange",I)},F=()=>{En().removeEventListener("visibilitychange",I)};n("init",()=>{e.params.autoplay.enabled&&(j(),L(),k())}),n("destroy",()=>{R(),F(),e.autoplay.running&&_()}),n("_freeModeStaticRelease",()=>{(h||g)&&M()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?_():E(!0,!0)}),n("beforeTransitionStart",(A,P,D)=>{e.destroyed||!e.autoplay.running||(D||!e.params.autoplay.disableOnInteraction?E(!0,!0):_())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){_();return}p=!0,h=!1,g=!1,v=setTimeout(()=>{g=!0,h=!0,E(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!p)){if(clearTimeout(v),clearTimeout(o),e.params.autoplay.disableOnInteraction){h=!1,p=!1;return}h&&e.params.cssMode&&M(),h=!1,p=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(u=S(),l=S())}),Object.assign(e.autoplay,{start:k,stop:_,pause:E,resume:M})}let ad;function CM(){const e=ft(),t=En();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Hw(){return ad||(ad=CM()),ad}let sd;function kM({userAgent:e}={}){const t=Hw(),n=ft(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const c=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=r==="Win32";let h=r==="MacIntel";const v=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&h&&t.touch&&v.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),h=!1),s&&!p&&(o.os="android",o.android=!0),(u||d||c)&&(o.os="ios",o.ios=!0),o}function Ww(e={}){return sd||(sd=kM(e)),sd}let ld;function TM(){const e=ft(),t=Ww();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,u]=l.split("Version/")[1].split(" ")[0].split(".").map(c=>Number(c));n=s<16||s===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function Gw(){return ld||(ld=TM()),ld}function PM({swiper:e,on:t,emit:n}){const r=ft();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(c=>{o=r.requestAnimationFrame(()=>{const{width:d,height:p}=e;let h=d,v=p;c.forEach(({contentBoxSize:g,contentRect:w,target:f})=>{f&&f!==e.el||(h=w?w.width:(g[0]||g).inlineSize,v=w?w.height:(g[0]||g).blockSize)}),(h!==d||v!==p)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function OM({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=ft(),a=(u,c={})=>{const d=o.MutationObserver||o.WebkitMutationObserver,p=new d(h=>{if(e.__preventObserver__)return;if(h.length===1){r("observerUpdate",h[0]);return}const v=function(){r("observerUpdate",h[0])};o.requestAnimationFrame?o.requestAnimationFrame(v):o.setTimeout(v,0)});p.observe(u,{attributes:typeof c.attributes>"u"?!0:c.attributes,childList:e.isElement||(typeof c.childList>"u"?!0:c).childList,characterData:typeof c.characterData>"u"?!0:c.characterData}),i.push(p)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=Bw(e.hostEl);for(let c=0;c<u.length;c+=1)a(u[c])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var MM={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function IM(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(cr(r,"padding-left")||0,10)-parseInt(cr(r,"padding-right")||0,10),n=n-parseInt(cr(r,"padding-top")||0,10)-parseInt(cr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function jM(){const e=this;function t(I,$){return parseFloat(I.getPropertyValue(e.getDirectionLabel($))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,u=bn(i,`.${e.params.slideClass}, swiper-slide`),c=l?e.virtual.slides.length:u.length;let d=[];const p=[],h=[];let v=n.slidesOffsetBefore;typeof v=="function"&&(v=n.slidesOffsetBefore.call(e));let g=n.slidesOffsetAfter;typeof g=="function"&&(g=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,f=e.slidesGrid.length,m=e.size-v-g;let x=n.spaceBetween,S=-v,C=0,k=0;if(typeof m>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*m:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-v-g,u.forEach(I=>{o?I.style.marginLeft="":I.style.marginRight="",I.style.marginBottom="",I.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(oi(r,"--swiper-centered-offset-before",""),oi(r,"--swiper-centered-offset-after","")),n.cssMode&&(oi(r,"--swiper-slides-offset-before",`${v}px`),oi(r,"--swiper-slides-offset-after",`${g}px`));const _=n.grid&&n.grid.rows>1&&e.grid;_?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let E;const M=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(I=>typeof n.breakpoints[I].slidesPerView<"u").length>0;for(let I=0;I<c;I+=1){E=0;const $=u[I];if(!($&&(_&&e.grid.updateSlide(I,$,u),cr($,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(E=n.virtual.slidesPerViewAutoSlideSize),E&&$&&(n.roundLengths&&(E=Math.floor(E)),$.style[e.getDirectionLabel("width")]=`${E}px`);else if(n.slidesPerView==="auto"){M&&($.style[e.getDirectionLabel("width")]="");const O=getComputedStyle($),j=$.style.transform,R=$.style.webkitTransform;if(j&&($.style.transform="none"),R&&($.style.webkitTransform="none"),n.roundLengths)E=e.isHorizontal()?Qf($,"width",!0):Qf($,"height",!0);else{const L=t(O,"width"),F=t(O,"padding-left"),A=t(O,"padding-right"),P=t(O,"margin-left"),D=t(O,"margin-right"),N=O.getPropertyValue("box-sizing");if(N&&N==="border-box")E=L+P+D;else{const{clientWidth:B,offsetWidth:z}=$;E=L+F+A+P+D+(z-B)}}j&&($.style.transform=j),R&&($.style.webkitTransform=R),n.roundLengths&&(E=Math.floor(E))}else E=(m-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(E=Math.floor(E)),$&&($.style[e.getDirectionLabel("width")]=`${E}px`);$&&($.swiperSlideSize=E),h.push(E),n.centeredSlides?(S=S+E/2+C/2+x,C===0&&I!==0&&(S=S-m/2-x),I===0&&(S=S-m/2-x),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),k%n.slidesPerGroup===0&&d.push(S),p.push(S)):(n.roundLengths&&(S=Math.floor(S)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup===0&&d.push(S),p.push(S),S=S+E+x),e.virtualSize+=E+x,C=E,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,m)+g,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+x}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),_&&e.grid.updateWrapperSize(E,d),!n.centeredSlides){const I=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,$=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||I);let O=d.length;if($){let R;if(n.slidesPerView==="auto"){R=1;let L=0;for(let F=h.length-1;F>=0&&(L+=h[F]+(F<h.length-1?x:0),L<=m);F-=1)R=h.length-F}else R=Math.floor(n.slidesPerView);O=Math.max(c-R,0)}const j=[];for(let R=0;R<d.length;R+=1){let L=d[R];n.roundLengths&&(L=Math.floor(L)),$?R<=O&&j.push(L):d[R]<=e.virtualSize-m&&j.push(L)}d=j,Math.floor(e.virtualSize-m)-Math.floor(d[d.length-1])>1&&($||d.push(e.virtualSize-m))}if(l&&n.loop){const I=h[0]+x;if(n.slidesPerGroup>1){const $=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),O=I*n.slidesPerGroup;for(let j=0;j<$;j+=1)d.push(d[d.length-1]+O)}for(let $=0;$<e.virtual.slidesBefore+e.virtual.slidesAfter;$+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+I),p.push(p[p.length-1]+I),e.virtualSize+=I}if(d.length===0&&(d=[0]),x!==0){const I=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter(($,O)=>!n.cssMode||n.loop?!0:O!==u.length-1).forEach($=>{$.style[I]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let I=0;h.forEach(O=>{I+=O+(x||0)}),I-=x;const $=I>m?I-m:0;d=d.map(O=>O<=0?-v:O>$?$+g:O)}if(n.centerInsufficientSlides){let I=0;if(h.forEach($=>{I+=$+(x||0)}),I-=x,I<m){const $=(m-I)/2;d.forEach((O,j)=>{d[j]=O-$}),p.forEach((O,j)=>{p[j]=O+$})}}if(Object.assign(e,{slides:u,snapGrid:d,slidesGrid:p,slidesSizesGrid:h}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){oi(r,"--swiper-centered-offset-before",`${-d[0]}px`),oi(r,"--swiper-centered-offset-after",`${e.size/2-h[h.length-1]/2}px`);const I=-e.snapGrid[0],$=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(O=>O+I),e.slidesGrid=e.slidesGrid.map(O=>O+$)}if(c!==s&&e.emit("slidesLengthChange"),d.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==f&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const I=`${n.containerModifierClass}backface-hidden`,$=e.el.classList.contains(I);c<=n.maxBackfaceHiddenSlides?$||e.el.classList.add(I):$&&e.el.classList.remove(I)}}function $M(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function DM(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const W0=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function LM(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let c=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const d=(a+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),p=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),h=-(a-c),v=h+t.slidesSizesGrid[s],g=h>=0&&h<=t.size-t.slidesSizesGrid[s],w=h>=0&&h<t.size-1||v>1&&v<=t.size||h<=0&&v>=t.size;w&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s)),W0(u,w,n.slideVisibleClass),W0(u,g,n.slideFullyVisibleClass),u.progress=i?-d:d,u.originalProgress=i?-p:p}}function RM(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const c=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=c||i<=0,a=d||i>=1,c&&(i=0),d&&(i=1)}if(n.loop){const c=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[c],h=t.slidesGrid[d],v=t.slidesGrid[t.slidesGrid.length-1],g=Math.abs(e);g>=p?l=(g-p)/v:l=(g+v-h)/v,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(s&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const ud=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function AM(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=d=>bn(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let s,u,c;if(o)if(n.loop){let d=i-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${d}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(d=>d.column===i),c=t.find(d=>d.column===i+1),u=t.find(d=>d.column===i-1)):s=t[i];s&&(a||(c=wM(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=t[0]),u=bM(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(d=>{ud(d,d===s,n.slideActiveClass),ud(d,d===c,n.slideNextClass),ud(d,d===u,n.slidePrevClass)}),e.emitSlidesClasses()}const Us=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},cd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Jf=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,u)=>a+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&cd(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&cd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&cd(e,a)};function FM(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function NM(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,u;const c=h=>{let v=h-t.virtual.slidesBefore;return v<0&&(v=t.virtual.slides.length+v),v>=t.virtual.slides.length&&(v-=t.virtual.slides.length),v};if(typeof s>"u"&&(s=FM(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const h=Math.min(i.slidesPerGroupSkip,s);u=h+Math.floor((s-h)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=c(s);return}const d=t.grid&&i.grid&&i.grid.rows>1;let p;if(t.virtual&&i.virtual.enabled)i.loop?p=c(s):p=s;else if(d){const h=t.slides.find(g=>g.column===s);let v=parseInt(h.getAttribute("data-swiper-slide-index"),10);Number.isNaN(v)&&(v=Math.max(t.slides.indexOf(h),0)),p=Math.floor(v/i.grid.rows)}else if(t.slides[s]){const h=t.slides[s].getAttribute("data-swiper-slide-index");h?p=parseInt(h,10):p=s}else p=s;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:a,realIndex:p,previousIndex:o,activeIndex:s}),t.initialized&&Jf(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function zM(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var VM={updateSize:IM,updateSlides:jM,updateAutoHeight:$M,updateSlidesOffset:DM,updateSlidesProgress:LM,updateProgress:RM,updateSlidesClasses:AM,updateActiveIndex:NM,updateClickedSlide:zM};function BM(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=gM(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function UM(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let c;const d=n.maxTranslate()-n.minTranslate();d===0?c=0:c=(e-n.minTranslate())/d,c!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function HM(){return-this.snapGrid[0]}function WM(){return-this.snapGrid[this.snapGrid.length-1]}function GM(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),u=o.maxTranslate();let c;if(r&&e>s?c=s:r&&e<u?c=u:c=e,o.updateProgress(c),a.cssMode){const d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-c;else{if(!o.support.smoothScroll)return Vw({swiper:o,targetPosition:-c,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(p){!o||o.destroyed||p.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var YM={getTranslate:BM,setTranslate:UM,minTranslate:HM,maxTranslate:WM,translateTo:GM};function XM(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Yw({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function qM(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Yw({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function KM(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Yw({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var ZM={setTransition:XM,transitionStart:qM,transitionEnd:KM};function QM(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:c,activeIndex:d,rtlTranslate:p,wrapperEl:h,enabled:v}=o;if(!v&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const g=Math.min(o.params.slidesPerGroupSkip,a);let w=g+Math.floor((a-g)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const f=-s[w];if(l.normalizeSlideIndex)for(let _=0;_<u.length;_+=1){const E=-Math.floor(f*100),M=Math.floor(u[_]*100),I=Math.floor(u[_+1]*100);typeof u[_+1]<"u"?E>=M&&E<I-(I-M)/2?a=_:E>=M&&E<I&&(a=_+1):E>=M&&(a=_)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&(p?f>o.translate&&f>o.minTranslate():f<o.translate&&f<o.minTranslate())||!o.allowSlidePrev&&f>o.translate&&f>o.maxTranslate()&&(d||0)!==a))return!1;a!==(c||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(f);let m;a>d?m="next":a<d?m="prev":m="reset";const x=o.virtual&&o.params.virtual.enabled;if(!(x&&i)&&(p&&-f===o.translate||!p&&f===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(f),m!=="reset"&&(o.transitionStart(n,m),o.transitionEnd(n,m)),!1;if(l.cssMode){const _=o.isHorizontal(),E=p?f:-f;if(t===0)x&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),x&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{h[_?"scrollLeft":"scrollTop"]=E})):h[_?"scrollLeft":"scrollTop"]=E,x&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return Vw({swiper:o,targetPosition:E,side:_?"left":"top"}),!0;h.scrollTo({[_?"left":"top"]:E,behavior:"smooth"})}return!0}const k=Gw().isSafari;return x&&!i&&k&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(f),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,m),t===0?o.transitionEnd(n,m):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(E){!o||o.destroyed||E.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,m))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function JM(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const g=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===g).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u,slidesOffsetBefore:c,slidesOffsetAfter:d}=i.params,p=u||!!c||!!d;let h=i.params.slidesPerView;h==="auto"?h=i.slidesPerViewDynamic():(h=Math.ceil(parseFloat(i.params.slidesPerView,10)),p&&h%2===0&&(h=h+1));let v=s-l<h;if(p&&(v=v||l<Math.ceil(h/2)),r&&p&&i.params.slidesPerView!=="auto"&&!o&&(v=!1),v){const g=p?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:g,slideTo:!0,activeSlideIndex:g==="next"?l+1:l-s+1,slideRealIndex:g==="next"?i.realIndex:void 0})}if(o){const g=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===g).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function eI(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function tI(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:u}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const c=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=l?r.translate:-r.translate;function p(m){return m<0?-Math.floor(Math.abs(m)):Math.floor(m)}const h=p(d),v=o.map(m=>p(m)),g=i.freeMode&&i.freeMode.enabled;let w=o[v.indexOf(h)-1];if(typeof w>"u"&&(i.cssMode||g)){let m;o.forEach((x,S)=>{h>=x&&(m=S)}),typeof m<"u"&&(w=g?o[m]:o[m>0?m-1:m])}let f=0;if(typeof w<"u"&&(f=a.indexOf(w),f<0&&(f=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(f=f-r.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),i.rewind&&r.isBeginning){const m=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(m,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(f,e,t,n)}),!0;return r.slideTo(f,e,t,n)}function nI(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function rI(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],c=i.snapGrid[l+1];s-u>(c-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],c=i.snapGrid[l];s-u<=(c-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function iI(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(bn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),zw(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var oI={slideTo:QM,slideToLoop:JM,slideNext:eI,slidePrev:tI,slideReset:nI,slideToClosest:rI,slideToClickedSlide:iI};function aI(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{bn(i,`.${r.slideClass}, swiper-slide`).forEach((v,g)=>{v.setAttribute("data-swiper-slide-index",g)})},a=()=>{const h=bn(i,`.${r.slideBlankClass}`);h.forEach(v=>{v.remove()}),h.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),u=n.slides.length%s!==0,c=l&&n.slides.length%r.grid.rows!==0,d=h=>{for(let v=0;v<h;v+=1){const g=n.isElement?Ml("swiper-slide",[r.slideBlankClass]):Ml("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(g)}};if(u){if(r.loopAddBlankSlides){const h=s-n.slides.length%s;d(h),n.recalcSlides(),n.updateSlides()}else Ol("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(c){if(r.loopAddBlankSlides){const h=r.grid.rows-n.slides.length%r.grid.rows;d(h),n.recalcSlides(),n.updateSlides()}else Ol("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const p=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:p?void 0:"next",initial:t})}function sI({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:c,allowSlideNext:d,slidesEl:p,params:h}=s,{centeredSlides:v,slidesOffsetBefore:g,slidesOffsetAfter:w,initialSlide:f}=h,m=v||!!g||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&h.virtual.enabled){t&&(!m&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):m&&s.snapIndex<h.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=c,s.allowSlideNext=d,s.emit("loopFix");return}let x=h.slidesPerView;x==="auto"?x=s.slidesPerViewDynamic():(x=Math.ceil(parseFloat(h.slidesPerView,10)),m&&x%2===0&&(x=x+1));const S=h.slidesPerGroupAuto?x:h.slidesPerGroup;let C=m?Math.max(S,Math.ceil(x/2)):S;C%S!==0&&(C+=S-C%S),C+=h.loopAdditionalSlides,s.loopedSlides=C;const k=s.grid&&h.grid&&h.grid.rows>1;u.length<x+C||s.params.effect==="cards"&&u.length<x+C*2?Ol("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):k&&h.grid.fill==="row"&&Ol("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const _=[],E=[],M=k?Math.ceil(u.length/h.grid.rows):u.length,I=o&&M-f<x&&!m;let $=I?f:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(u.find(P=>P.classList.contains(h.slideActiveClass))):$=i;const O=n==="next"||!n,j=n==="prev"||!n;let R=0,L=0;const A=(k?u[i].column:i)+(m&&typeof r>"u"?-x/2+.5:0);if(A<C){R=Math.max(C-A,S);for(let P=0;P<C-A;P+=1){const D=P-Math.floor(P/M)*M;if(k){const N=M-D-1;for(let B=u.length-1;B>=0;B-=1)u[B].column===N&&_.push(B)}else _.push(M-D-1)}}else if(A+x>M-C){L=Math.max(A-(M-C*2),S),I&&(L=Math.max(L,x-M+f+1));for(let P=0;P<L;P+=1){const D=P-Math.floor(P/M)*M;k?u.forEach((N,B)=>{N.column===D&&E.push(B)}):E.push(D)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&u.length<x+C*2&&(E.includes(i)&&E.splice(E.indexOf(i),1),_.includes(i)&&_.splice(_.indexOf(i),1)),j&&_.forEach(P=>{u[P].swiperLoopMoveDOM=!0,p.prepend(u[P]),u[P].swiperLoopMoveDOM=!1}),O&&E.forEach(P=>{u[P].swiperLoopMoveDOM=!0,p.append(u[P]),u[P].swiperLoopMoveDOM=!1}),s.recalcSlides(),h.slidesPerView==="auto"?s.updateSlides():k&&(_.length>0&&j||E.length>0&&O)&&s.slides.forEach((P,D)=>{s.grid.updateSlide(D,P,s.slides)}),h.watchSlidesProgress&&s.updateSlidesOffset(),t){if(_.length>0&&j){if(typeof e>"u"){const P=s.slidesGrid[$],N=s.slidesGrid[$+R]-P;l?s.setTranslate(s.translate-N):(s.slideTo($+Math.ceil(R),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else if(r){const P=k?_.length/h.grid.rows:_.length;s.slideTo(s.activeIndex+P,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(E.length>0&&O)if(typeof e>"u"){const P=s.slidesGrid[$],N=s.slidesGrid[$-L]-P;l?s.setTranslate(s.translate-N):(s.slideTo($-L,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else{const P=k?E.length/h.grid.rows:E.length;s.slideTo(s.activeIndex-P,0,!1,!0)}}if(s.allowSlidePrev=c,s.allowSlideNext=d,s.controller&&s.controller.control&&!a){const P={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(D=>{!D.destroyed&&D.params.loop&&D.loopFix({...P,slideTo:D.params.slidesPerView===h.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...P,slideTo:s.controller.control.params.slidesPerView===h.slidesPerView?t:!1})}s.emit("loopFix")}function lI(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var uI={loopCreate:aI,loopFix:sI,loopDestroy:lI};function cI(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function dI(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var fI={setGrabCursor:cI,unsetGrabCursor:dI};function pI(e,t=this){function n(r){if(!r||r===En()||r===ft())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function G0(e,t,n){const r=ft(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function hI(e){const t=this,n=En();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){G0(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!xM(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",c=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&c&&(s=c[0]);const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,p=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(p?pI(d,s):s.closest(d))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const h=a.currentX,v=a.currentY;if(!G0(t,r,h))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=h,a.startY=v,i.touchStartTime=Pl(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let g=!0;s.matches(i.focusableElements)&&(g=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=g&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function mI(e){const t=En(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let u;if(s.type==="touchmove"){if(u=[...s.changedTouches].find(k=>k.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const c=u.pageX,d=u.pageY;if(s.preventedByNestedSwiper){o.startX=c,o.startY=d;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d}),r.touchStartTime=Pl());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(c>o.startX&&-n.translate<=n.maxTranslate()||c<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(c<o.startX&&n.translate<=n.maxTranslate()||c>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=c,o.currentY=d;const p=o.currentX-o.startX,h=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(p**2+h**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let k;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:p*p+h*h>=25&&(k=Math.atan2(Math.abs(h),Math.abs(p))*180/Math.PI,r.isScrolling=n.isHorizontal()?k>i.touchAngle:90-k>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let v=n.isHorizontal()?p:h,g=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(v=Math.abs(v)*(a?1:-1),g=Math.abs(g)*(a?1:-1)),o.diff=v,v*=i.touchRatio,a&&(v=-v,g=-g);const w=n.touchesDirection;n.swipeDirection=v>0?"prev":"next",n.touchesDirection=g>0?"prev":"next";const f=n.params.loop&&!i.cssMode,m=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(f&&m&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(k)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let x;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&f&&m&&Math.abs(v)>=1){Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=v+r.startTranslate;let S=!0,C=i.resistanceRatio;if(i.touchReleaseOnEdges&&(C=0),v>0?(f&&m&&!x&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+v)**C))):v<0&&(f&&m&&!x&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-v)**C))),S&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(v)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function gI(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(C=>C.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:u,enabled:c}=t;if(!c||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=Pl(),p=d-n.touchStartTime;if(t.allowClick){const C=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(C&&C[0]||r.target,C),t.emit("tap click",r),p<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Pl(),zw(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let h;if(a.followFinger?h=s?t.translate:-t.translate:h=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:h});return}const v=h>=-t.maxTranslate()&&!t.params.loop;let g=0,w=t.slidesSizesGrid[0];for(let C=0;C<u.length;C+=C<a.slidesPerGroupSkip?1:a.slidesPerGroup){const k=C<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[C+k]<"u"?(v||h>=u[C]&&h<u[C+k])&&(g=C,w=u[C+k]-u[C]):(v||h>=u[C])&&(g=C,w=u[u.length-1]-u[u.length-2])}let f=null,m=null;a.rewind&&(t.isBeginning?m=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(f=0));const x=(h-u[g])/w,S=g<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(p>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?f:g+S):t.slideTo(g)),t.swipeDirection==="prev"&&(x>1-a.longSwipesRatio?t.slideTo(g+S):m!==null&&x<0&&Math.abs(x)>a.longSwipesRatio?t.slideTo(m):t.slideTo(g))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(g+S):t.slideTo(g):(t.swipeDirection==="next"&&t.slideTo(f!==null?f:g+S),t.swipeDirection==="prev"&&t.slideTo(m!==null?m:g))}}function Y0(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function vI(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function yI(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function xI(e){const t=this;Us(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function bI(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Xw=(e,t)=>{const n=En(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Y0,!0):e[u]("observerUpdate",Y0,!0),i[s]("load",e.onLoad,{capture:!0}))};function wI(){const e=this,{params:t}=e;e.onTouchStart=hI.bind(e),e.onTouchMove=mI.bind(e),e.onTouchEnd=gI.bind(e),e.onDocumentTouchStart=bI.bind(e),t.cssMode&&(e.onScroll=yI.bind(e)),e.onClick=vI.bind(e),e.onLoad=xI.bind(e),Xw(e,"on")}function SI(){Xw(this,"off")}var _I={attachEvents:wI,detachEvents:SI};const X0=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function EI(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=En(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),u=e.getBreakpoint(o,l,s);if(!u||e.currentBreakpoint===u)return;const d=(u in o?o[u]:void 0)||e.originalParams,p=X0(e,r),h=X0(e,d),v=e.params.grabCursor,g=d.grabCursor,w=r.enabled;p&&!h?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!p&&h&&(i.classList.add(`${r.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),v&&!g?e.unsetGrabCursor():!v&&g&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(k=>{if(typeof d[k]>"u")return;const _=r[k]&&r[k].enabled,E=d[k]&&d[k].enabled;_&&!E&&e[k].disable(),!_&&E&&e[k].enable()});const f=d.direction&&d.direction!==r.direction,m=r.loop&&(d.slidesPerView!==r.slidesPerView||f),x=r.loop;f&&n&&e.changeDirection(),Pt(e.params,d);const S=e.params.enabled,C=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",d),n&&(m?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&C?(e.loopCreate(t),e.updateSlides()):x&&!C&&e.loopDestroy()),e.emit("breakpoint",d)}function CI(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=ft(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:u}=a[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var kI={setBreakpoint:EI,getBreakpoint:CI};function TI(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function PI(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=TI(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function OI(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var MI={addClasses:PI,removeClasses:OI};function II(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var jI={checkOverflow:II},ep={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function $I(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Pt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Pt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Pt(t,r)}}const dd={eventsEmitter:MM,update:VM,translate:YM,transition:ZM,slide:oI,loop:uI,grabCursor:fI,events:_I,breakpoints:kI,checkOverflow:jI,classes:MI},fd={};let em=class On{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Pt({},r),n&&!r.el&&(r.el=n);const i=En();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(u=>{const c=Pt({},r,{el:u});s.push(new On(c))}),s}const o=this;o.__swiper__=!0,o.support=Hw(),o.device=Ww({userAgent:r.userAgent}),o.browser=Gw(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:$I(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Pt({},ep,a);return o.params=Pt({},l,fd,r),o.originalParams=Pt({},o.params),o.passedParams=Pt({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=bn(n,`.${r.slideClass}, swiper-slide`),o=Il(i[0]);return Il(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=bn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:u}=r;let c=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=o[u]?Math.ceil(o[u].swiperSlideSize):0,p;for(let h=u+1;h<o.length;h+=1)o[h]&&!p&&(d+=Math.ceil(o[h].swiperSlideSize),c+=1,d>s&&(p=!0));for(let h=u-1;h>=0;h-=1)o[h]&&!p&&(d+=o[h].swiperSlideSize,c+=1,d>s&&(p=!0))}else if(t==="current")for(let d=u+1;d<o.length;d+=1)(n?a[d]+l[d]-a[u]<s:a[d]-a[u]<s)&&(c+=1);else for(let d=u-1;d>=0;d-=1)a[u]-a[d]<s&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Us(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):bn(r,i())[0])();return!a&&n.params.createElements&&(a=Ml("div",n.params.wrapperClass),r.append(a),bn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||cr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||cr(r,"direction")==="rtl"),wrongRTL:cr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Us(n,o):o.addEventListener("load",a=>{Us(n,a.target)})}),Jf(n),n.initialized=!0,Jf(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),hM(r)),r.destroyed=!0),null}static extendDefaults(t){Pt(fd,t)}static get extendedDefaults(){return fd}static get defaults(){return ep}static installModule(t){On.prototype.__modules__||(On.prototype.__modules__=[]);const n=On.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>On.installModule(n)),On):(On.installModule(t),On)}};Object.keys(dd).forEach(e=>{Object.keys(dd[e]).forEach(t=>{em.prototype[t]=dd[e][t]})});em.use([PM,OM]);const qw=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function qr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Mi(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:qr(t[r])&&qr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Mi(e[r],t[r]):e[r]=t[r]})}function Kw(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Zw(e={}){return e.pagination&&typeof e.pagination.el>"u"}function Qw(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function Jw(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function DI(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function LI({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(E=>E!=="children"&&E!=="direction"&&E!=="wrapperClass"),{params:u,pagination:c,navigation:d,scrollbar:p,virtual:h,thumbs:v}=e;let g,w,f,m,x,S,C,k;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(g=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&c&&!c.el&&(f=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&p&&!p.el&&(m=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(x=!0);const _=E=>{e[E]&&(e[E].destroy(),E==="navigation"?(e.isElement&&(e[E].prevEl.remove(),e[E].nextEl.remove()),u[E].prevEl=void 0,u[E].nextEl=void 0,e[E].prevEl=void 0,e[E].nextEl=void 0):(e.isElement&&e[E].el.remove(),u[E].el=void 0,e[E].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?S=!0:!u.loop&&n.loop?C=!0:k=!0),s.forEach(E=>{if(qr(u[E])&&qr(n[E]))Object.assign(u[E],n[E]),(E==="navigation"||E==="pagination"||E==="scrollbar")&&"enabled"in n[E]&&!n[E].enabled&&_(E);else{const M=n[E];(M===!0||M===!1)&&(E==="navigation"||E==="pagination"||E==="scrollbar")?M===!1&&_(E):u[E]=n[E]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&h&&u.virtual.enabled?(h.slides=t,h.update(!0)):r.includes("virtual")&&h&&u.virtual.enabled&&(t&&(h.slides=t),h.update(!0)),r.includes("children")&&t&&u.loop&&(k=!0),g&&v.init()&&v.update(!0),w&&(e.controller.control=u.controller.control),f&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),c.init(),c.render(),c.update()),m&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),p.init(),p.updateSize(),p.setTranslate()),x&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),ga(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),ga(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(S||k)&&e.loopDestroy(),(C||k)&&e.loopCreate(),e.update()}function RI(e={},t=!0){const n={on:{}},r={},i={};Mi(n,ep),n._emitClasses=!0,n.init=!1;const o={},a=qw.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?qr(e[s])?(n[s]={},i[s]={},Mi(n[s],e[s]),Mi(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function AI({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){Kw(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),Zw(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),Qw(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function FI(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return qw.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(qr(e[s])&&qr(t[s])){const u=Object.keys(e[s]),c=Object.keys(t[s]);u.length!==c.length?a(s):(u.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}),c.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const NI=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function jl(){return jl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jl.apply(this,arguments)}function eS(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function tS(e){const t=[];return W.Children.toArray(e).forEach(n=>{eS(n)?t.push(n):n.props&&n.props.children&&tS(n.props.children).forEach(r=>t.push(r))}),t}function zI(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return W.Children.toArray(e).forEach(r=>{if(eS(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=tS(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function VI(e,t,n){if(!n)return null;const r=c=>{let d=c;return c<0?d=t.length+c:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let c=l;c<s;c+=1)c>=o&&c<=a&&u.push(t[r(c)]);return u.map((c,d)=>W.cloneElement(c,{swiper:e,style:i,key:c.props.virtualIndex||c.key||`slide-${d}`}))}function Wo(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const q0=b.createContext(null),BI=b.createContext(null),nS=b.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,u]=b.useState("swiper"),[c,d]=b.useState(null),[p,h]=b.useState(!1),v=b.useRef(!1),g=b.useRef(null),w=b.useRef(null),f=b.useRef(null),m=b.useRef(null),x=b.useRef(null),S=b.useRef(null),C=b.useRef(null),k=b.useRef(null),{params:_,passedParams:E,rest:M,events:I}=RI(o),{slides:$,slots:O}=zI(r),j=()=>{h(!p)};Object.assign(_.on,{_containerClasses(P,D){u(D)}});const R=()=>{Object.assign(_.on,I),l=!0;const P={..._};if(delete P.wrapperClass,w.current=new em(P),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=$;const D={cache:!1,slides:$,renderExternal:d,renderExternalUpdate:!1};Mi(w.current.params.virtual,D),Mi(w.current.originalParams.virtual,D)}};g.current||R(),w.current&&w.current.on("_beforeBreakpoint",j);const L=()=>{l||!I||!w.current||Object.keys(I).forEach(P=>{w.current.on(P,I[P])})},F=()=>{!I||!w.current||Object.keys(I).forEach(P=>{w.current.off(P,I[P])})};b.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",j)}),b.useEffect(()=>{!v.current&&w.current&&(w.current.emitSlidesClasses(),v.current=!0)}),Wo(()=>{if(a&&(a.current=g.current),!!g.current)return w.current.destroyed&&R(),AI({el:g.current,nextEl:x.current,prevEl:S.current,paginationEl:C.current,scrollbarEl:k.current,swiper:w.current},_),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),Wo(()=>{L();const P=FI(E,f.current,$,m.current,D=>D.key);return f.current=E,m.current=$,P.length&&w.current&&!w.current.destroyed&&LI({swiper:w.current,slides:$,passedParams:E,changedParams:P,nextEl:x.current,prevEl:S.current,scrollbarEl:k.current,paginationEl:C.current}),()=>{F()}}),Wo(()=>{NI(w.current)},[c]);function A(){return _.virtual?VI(w.current,$,c):$.map((P,D)=>W.cloneElement(P,{swiper:w.current,swiperSlideIndex:D}))}return W.createElement(t,jl({ref:g,className:Jw(`${s}${e?` ${e}`:""}`)},M),W.createElement(BI.Provider,{value:w.current},O["container-start"],W.createElement(n,{className:DI(_.wrapperClass)},O["wrapper-start"],A(),O["wrapper-end"]),Kw(_)&&W.createElement(W.Fragment,null,W.createElement("div",{ref:S,className:"swiper-button-prev"}),W.createElement("div",{ref:x,className:"swiper-button-next"})),Qw(_)&&W.createElement("div",{ref:k,className:"swiper-scrollbar"}),Zw(_)&&W.createElement("div",{ref:C,className:"swiper-pagination"}),O["container-end"]))});nS.displayName="Swiper";const rS=b.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},u)=>{const c=b.useRef(null),[d,p]=b.useState("swiper-slide"),[h,v]=b.useState(!1);function g(x,S,C){S===c.current&&p(C)}Wo(()=>{if(typeof l<"u"&&(c.current.swiperSlideIndex=l),u&&(u.current=c.current),!(!c.current||!r)){if(r.destroyed){d!=="swiper-slide"&&p("swiper-slide");return}return r.on("_slideClass",g),()=>{r&&r.off("_slideClass",g)}}}),Wo(()=>{r&&c.current&&!r.destroyed&&p(r.getSlideClasses(c.current))},[r]);const w={isActive:d.indexOf("swiper-slide-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0},f=()=>typeof t=="function"?t(w):t,m=()=>{v(!0)};return W.createElement(e,jl({ref:c,className:Jw(`${d}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:m},s),i&&W.createElement(q0.Provider,{value:w},W.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},f(),o&&!h&&W.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}}))),!i&&W.createElement(q0.Provider,{value:w},f(),o&&!h&&W.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}})))});rS.displayName="SwiperSlide";const UI=T.section`
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
`,HI=T.div`
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
`,WI=T.div`
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
`,GI=T(Pe)`
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
`,YI=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg"},{id:2,title:"Перевірені велодеталі з пробігом бла бла",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp"}],XI=()=>y.jsx(UI,{children:y.jsx(nS,{modules:[SM,EM,_M],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:YI.map(e=>y.jsx(rS,{children:y.jsx(HI,{bg:e.img,children:y.jsxs(WI,{children:[y.jsx("h1",{children:e.title}),y.jsx("p",{children:e.desc}),y.jsx(GI,{to:"/catalog",children:"До каталогу"})]})})},e.id))})}),qI=T.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,KI=T.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
 font-size: 35px;
  }

`,ZI=T.div`
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
`,QI=T.div`
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
`,JI=T(Pe)`
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
`,e5=T.span`
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
`,t5=T.div`
  padding: 10px 0;
`,n5=T.h3`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,r5=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,i5=T.span`
  font-size: 17px;
  font-weight: 800;
  color: var(--black-color);
`,o5=T.button`
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
`;T(Pe)`
color: var(--white-color);
padding: 10px 20px;
 background:var( --orange-color); 
  border-radius: 15px;
  text-decoration: none;

`;const a5=T(Pe)`
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

`,s5=T.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,l5=T.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function He(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var u5=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),K0=u5,pd=()=>Math.random().toString(36).substring(7).split("").join("."),c5={INIT:`@@redux/INIT${pd()}`,REPLACE:`@@redux/REPLACE${pd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${pd()}`},$l=c5;function tm(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function nm(e,t,n){if(typeof e!="function")throw new Error(He(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(He(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(He(1));return n(nm)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function u(){a===o&&(a=new Map,o.forEach((w,f)=>{a.set(f,w)}))}function c(){if(s)throw new Error(He(3));return i}function d(w){if(typeof w!="function")throw new Error(He(4));if(s)throw new Error(He(5));let f=!0;u();const m=l++;return a.set(m,w),function(){if(f){if(s)throw new Error(He(6));f=!1,u(),a.delete(m),o=null}}}function p(w){if(!tm(w))throw new Error(He(7));if(typeof w.type>"u")throw new Error(He(8));if(typeof w.type!="string")throw new Error(He(17));if(s)throw new Error(He(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(m=>{m()}),w}function h(w){if(typeof w!="function")throw new Error(He(10));r=w,p({type:$l.REPLACE})}function v(){const w=d;return{subscribe(f){if(typeof f!="object"||f===null)throw new Error(He(11));function m(){const S=f;S.next&&S.next(c())}return m(),{unsubscribe:w(m)}},[K0](){return this}}}return p({type:$l.INIT}),{dispatch:p,subscribe:d,getState:c,replaceReducer:h,[K0]:v}}function d5(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:$l.INIT})>"u")throw new Error(He(12));if(typeof n(void 0,{type:$l.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(He(13))})}function f5(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{d5(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],p=n[d],h=a[d],v=p(h,l);if(typeof v>"u")throw l&&l.type,new Error(He(14));u[d]=v,s=s||v!==h}return s=s||r.length!==Object.keys(a).length,s?u:a}}function Dl(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function p5(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(He(15))};const a={getState:i.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(a));return o=Dl(...l)(i.dispatch),{...i,dispatch:o}}}function h5(e){return tm(e)&&"type"in e&&typeof e.type=="string"}var iS=Symbol.for("immer-nothing"),Z0=Symbol.for("immer-draftable"),ut=Symbol.for("immer-state");function rn(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Mt=Object,Hi=Mt.getPrototypeOf,Ll="constructor",qu="prototype",tp="configurable",Rl="enumerable",Hs="writable",va="value",Gn=e=>!!e&&!!e[ut];function dn(e){var t;return e?oS(e)||Zu(e)||!!e[Z0]||!!((t=e[Ll])!=null&&t[Z0])||Qu(e)||Ju(e):!1}var m5=Mt[qu][Ll].toString(),Q0=new WeakMap;function oS(e){if(!e||!rm(e))return!1;const t=Hi(e);if(t===null||t===Mt[qu])return!0;const n=Mt.hasOwnProperty.call(t,Ll)&&t[Ll];if(n===Object)return!0;if(!ci(n))return!1;let r=Q0.get(n);return r===void 0&&(r=Function.toString.call(n),Q0.set(n,r)),r===m5}function Ku(e,t,n=!0){$a(e)===0?(n?Reflect.ownKeys(e):Mt.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function $a(e){const t=e[ut];return t?t.type_:Zu(e)?1:Qu(e)?2:Ju(e)?3:0}var J0=(e,t,n=$a(e))=>n===2?e.has(t):Mt[qu].hasOwnProperty.call(e,t),np=(e,t,n=$a(e))=>n===2?e.get(t):e[t],Al=(e,t,n,r=$a(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function g5(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Zu=Array.isArray,Qu=e=>e instanceof Map,Ju=e=>e instanceof Set,rm=e=>typeof e=="object",ci=e=>typeof e=="function",hd=e=>typeof e=="boolean";function v5(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Dn=e=>e.copy_||e.base_,im=e=>e.modified_?e.copy_:e.base_;function rp(e,t){if(Qu(e))return new Map(e);if(Ju(e))return new Set(e);if(Zu(e))return Array[qu].slice.call(e);const n=oS(e);if(t===!0||t==="class_only"&&!n){const r=Mt.getOwnPropertyDescriptors(e);delete r[ut];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[Hs]===!1&&(l[Hs]=!0,l[tp]=!0),(l.get||l.set)&&(r[a]={[tp]:!0,[Hs]:!0,[Rl]:l[Rl],[va]:e[a]})}return Mt.create(Hi(e),r)}else{const r=Hi(e);if(r!==null&&n)return{...e};const i=Mt.create(r);return Mt.assign(i,e)}}function om(e,t=!1){return ec(e)||Gn(e)||!dn(e)||($a(e)>1&&Mt.defineProperties(e,{set:cs,add:cs,clear:cs,delete:cs}),Mt.freeze(e),t&&Ku(e,(n,r)=>{om(r,!0)},!1)),e}function y5(){rn(2)}var cs={[va]:y5};function ec(e){return e===null||!rm(e)?!0:Mt.isFrozen(e)}var Fl="MapSet",ip="Patches",ev="ArrayMethods",aS={};function Kr(e){const t=aS[e];return t||rn(0,e),t}var tv=e=>!!aS[e],ya,sS=()=>ya,x5=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:tv(Fl)?Kr(Fl):void 0,arrayMethodsPlugin_:tv(ev)?Kr(ev):void 0});function nv(e,t){t&&(e.patchPlugin_=Kr(ip),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function op(e){ap(e),e.drafts_.forEach(b5),e.drafts_=null}function ap(e){e===ya&&(ya=e.parent_)}var rv=e=>ya=x5(ya,e);function b5(e){const t=e[ut];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function iv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[ut].modified_&&(op(t),rn(4)),dn(e)&&(e=ov(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[ut].base_,e,t)}else e=ov(t,n);return w5(t,e,!0),op(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==iS?e:void 0}function ov(e,t){if(ec(t))return t;const n=t[ut];if(!n)return Nl(t,e.handledSet_,e);if(!tc(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);cS(n,e)}return n.copy_}function w5(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&om(t,n)}function lS(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var tc=(e,t)=>e.scope_===t,S5=[];function uS(e,t,n,r){const i=Dn(e),o=e.type_;if(r!==void 0&&np(i,r,o)===t){Al(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Ku(i,(s,u)=>{if(Gn(u)){const c=l.get(u)||[];c.push(s),l.set(u,c)}})}const a=e.draftLocations_.get(t)??S5;for(const l of a)Al(i,l,n,o)}function _5(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!tc(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=im(o);uS(e,o.draft_??o,a,n),cS(o,i)})}function cS(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}lS(e)}}function E5(e,t,n){const{scope_:r}=e;if(Gn(n)){const i=n[ut];tc(i,r)&&i.callbacks_.push(function(){Ws(e);const a=im(i);uS(e,n,a,t)})}else dn(n)&&e.callbacks_.push(function(){const o=Dn(e);e.type_===3?o.has(n)&&Nl(n,r.handledSet_,r):np(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Nl(np(e.copy_,t,e.type_),r.handledSet_,r)})}function Nl(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Gn(e)||t.has(e)||!dn(e)||ec(e)||(t.add(e),Ku(e,(r,i)=>{if(Gn(i)){const o=i[ut];if(tc(o,n)){const a=im(o);Al(e,r,a,e.type_),lS(o)}}else dn(i)&&Nl(i,t,n)})),e}function C5(e,t){const n=Zu(e),r={type_:n?1:0,scope_:t?t.scope_:sS(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=zl;n&&(i=[r],o=xa);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var zl={get(e,t){if(t===ut)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Dn(e);if(!J0(i,t,e.type_))return k5(e,i,t);const o=i[t];if(e.finalized_||!dn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&v5(t))return o;if(o===md(e.base_,t)){Ws(e);const a=e.type_===1?+t:t,l=lp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Dn(e)},ownKeys(e){return Reflect.ownKeys(Dn(e))},set(e,t,n){const r=dS(Dn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=md(Dn(e),t),o=i==null?void 0:i[ut];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(g5(n,i)&&(n!==void 0||J0(e.base_,t,e.type_)))return!0;Ws(e),sp(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),E5(e,t,n)),!0},deleteProperty(e,t){return Ws(e),md(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),sp(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Dn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Hs]:!0,[tp]:e.type_!==1||t!=="length",[Rl]:r[Rl],[va]:n[t]}},defineProperty(){rn(11)},getPrototypeOf(e){return Hi(e.base_)},setPrototypeOf(){rn(12)}},xa={};for(let e in zl){let t=zl[e];xa[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}xa.deleteProperty=function(e,t){return xa.set.call(this,e,t,void 0)};xa.set=function(e,t,n){return zl.set.call(this,e[0],t,n,e[0])};function md(e,t){const n=e[ut];return(n?Dn(n):e)[t]}function k5(e,t,n){var i;const r=dS(t,n);return r?va in r?r[va]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function dS(e,t){if(!(t in e))return;let n=Hi(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Hi(n)}}function sp(e){e.modified_||(e.modified_=!0,e.parent_&&sp(e.parent_))}function Ws(e){e.copy_||(e.assigned_=new Map,e.copy_=rp(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var T5=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(ci(t)&&!ci(n)){const o=n;n=t;const a=this;return function(s=o,...u){return a.produce(s,c=>n.call(this,c,...u))}}ci(n)||rn(6),r!==void 0&&!ci(r)&&rn(7);let i;if(dn(t)){const o=rv(this),a=lp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?op(o):ap(o)}return nv(o,r),iv(i,o)}else if(!t||!rm(t)){if(i=n(t),i===void 0&&(i=t),i===iS&&(i=void 0),this.autoFreeze_&&om(i,!0),r){const o=[],a=[];Kr(ip).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else rn(1,t)},this.produceWithPatches=(t,n)=>{if(ci(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},hd(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),hd(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),hd(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){dn(e)||rn(8),Gn(e)&&(e=P5(e));const t=rv(this),n=lp(t,e,void 0);return n[ut].isManual_=!0,ap(t),n}finishDraft(e,t){const n=e&&e[ut];(!n||!n.isManual_)&&rn(9);const{scope_:r}=n;return nv(r,t),iv(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Kr(ip).applyPatches_;return Gn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function lp(e,t,n,r){const[i,o]=Qu(t)?Kr(Fl).proxyMap_(t,n):Ju(t)?Kr(Fl).proxySet_(t,n):C5(t,n);return((n==null?void 0:n.scope_)??sS()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?_5(n,o,r):o.callbacks_.push(function(s){var c;(c=s.mapSetPlugin_)==null||c.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),i}function P5(e){return Gn(e)||rn(10,e),fS(e)}function fS(e){if(!dn(e)||ec(e))return e;const t=e[ut];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=rp(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=rp(e,!0);return Ku(n,(i,o)=>{Al(n,i,fS(o))},r),t&&(t.finalized_=!1),n}var O5=new T5,pS=O5.produce;function hS(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var M5=hS(),I5=hS,j5=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Dl:Dl.apply(null,arguments)};function av(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(zn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>h5(r)&&r.type===e,n}var mS=class Io extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Io.prototype)}static get[Symbol.species](){return Io}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Io(...t[0].concat(this)):new Io(...t.concat(this))}};function sv(e){return dn(e)?pS(e,()=>{}):e}function ds(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function $5(e){return typeof e=="boolean"}var D5=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new mS;return n&&($5(n)?a.push(M5):a.push(I5(n.extraArgument))),a},L5="RTK_autoBatch",lv=e=>t=>{setTimeout(t,e)},R5=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:lv(10):e.type==="callback"?e.queueNotification:lv(e.timeout),u=()=>{a=!1,o&&(o=!1,l.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),p=r.subscribe(d);return l.add(c),()=>{p(),l.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[L5]),o=!i,o&&(a||(a=!0,s(u))),r.dispatch(c)}finally{i=!0}}})},A5=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new mS(e);return r&&i.push(R5(typeof r=="object"?r:void 0)),i};function F5(e){const t=D5(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(tm(n))s=f5(n);else throw new Error(zn(1));let u;typeof r=="function"?u=r(t):u=t();let c=Dl;i&&(c=j5({trace:!1,...typeof i=="object"&&i}));const d=p5(...u),p=A5(d);let h=typeof l=="function"?l(p):p();const v=c(...h);return nm(s,a,v)}function gS(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(zn(28));if(l in t)throw new Error(zn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function N5(e){return typeof e=="function"}function z5(e,t){let[n,r,i]=gS(t),o;if(N5(e))o=()=>sv(e());else{const l=sv(e);o=()=>l}function a(l=o(),s){let u=[n[s.type],...r.filter(({matcher:c})=>c(s)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Gn(c)){const h=d(c,s);return h===void 0?c:h}else{if(dn(c))return pS(c,p=>d(p,s));{const p=d(c,s);if(p===void 0){if(c===null)return c;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}}return c},l)}return a.getInitialState=o,a}var V5=Symbol.for("rtk-slice-createasyncthunk");function B5(e,t){return`${e}/${t}`}function U5({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[V5];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(zn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(W5()):i.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(S,C){const k=typeof S=="string"?S:S.type;if(!k)throw new Error(zn(12));if(k in u.sliceCaseReducersByType)throw new Error(zn(13));return u.sliceCaseReducersByType[k]=C,c},addMatcher(S,C){return u.sliceMatchers.push({matcher:S,reducer:C}),c},exposeAction(S,C){return u.actionCreators[S]=C,c},exposeCaseReducer(S,C){return u.sliceCaseReducersByName[S]=C,c}};s.forEach(S=>{const C=l[S],k={reducerName:S,type:B5(o,S),createNotation:typeof i.reducers=="function"};Y5(C)?q5(k,C,c,t):G5(k,C,c)});function d(){const[S={},C=[],k=void 0]=typeof i.extraReducers=="function"?gS(i.extraReducers):[i.extraReducers],_={...S,...u.sliceCaseReducersByType};return z5(i.initialState,E=>{for(let M in _)E.addCase(M,_[M]);for(let M of u.sliceMatchers)E.addMatcher(M.matcher,M.reducer);for(let M of C)E.addMatcher(M.matcher,M.reducer);k&&E.addDefaultCase(k)})}const p=S=>S,h=new Map,v=new WeakMap;let g;function w(S,C){return g||(g=d()),g(S,C)}function f(){return g||(g=d()),g.getInitialState()}function m(S,C=!1){function k(E){let M=E[S];return typeof M>"u"&&C&&(M=ds(v,k,f)),M}function _(E=p){const M=ds(h,C,()=>new WeakMap);return ds(M,E,()=>{const I={};for(const[$,O]of Object.entries(i.selectors??{}))I[$]=H5(O,E,()=>ds(v,E,f),C);return I})}return{reducerPath:S,getSelectors:_,get selectors(){return _(k)},selectSlice:k}}const x={name:o,reducer:w,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:f,...m(a),injectInto(S,{reducerPath:C,...k}={}){const _=C??a;return S.inject({reducerPath:_,reducer:w},k),{...x,...m(_,!0)}}};return x}}function H5(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var vS=U5();function W5(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function G5({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!X5(r))throw new Error(zn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?av(e,a):av(e))}function Y5(e){return e._reducerDefinitionType==="asyncThunk"}function X5(e){return e._reducerDefinitionType==="reducerWithPrepare"}function q5({type:e,reducerName:t},n,r,i){if(!i)throw new Error(zn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:u,options:c}=n,d=i(e,o,c);r.exposeAction(t,d),a&&r.addCase(d.fulfilled,a),l&&r.addCase(d.pending,l),s&&r.addCase(d.rejected,s),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:a||fs,pending:l||fs,rejected:s||fs,settled:u||fs})}function fs(){}function zn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const yS=vS({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=e.items.find(r=>r.id===t.payload.id);n?n.quantity=(n.quantity||0)+1:e.items.push({...t.payload,quantity:1})},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&(n.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:nc,removeFromCart:K5,clearCart:Z5,addAllToCart:Q5,incrementQuantity:J5,decrementQuantity:ej}=yS.actions,tj=yS.reducer;function xS(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=xS(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Br(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=xS(e))&&(r&&(r+=" "),r+=t);return r}function nj(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}nj(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Da=e=>typeof e=="number"&&!isNaN(e),Zr=e=>typeof e=="string",Yn=e=>typeof e=="function",rj=e=>Zr(e)||Da(e),up=e=>Zr(e)||Yn(e)?e:null,ij=(e,t)=>e===!1||Da(e)&&e>0?e:t,cp=e=>b.isValidElement(e)||Zr(e)||Yn(e)||Da(e);function oj(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function aj({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:c,playToast:d}){let p=n?`${e}--${a}`:e,h=n?`${t}--${a}`:t,v=b.useRef(0);return b.useLayoutEffect(()=>{let g=u.current,w=p.split(" "),f=m=>{m.target===u.current&&(d(),g.removeEventListener("animationend",f),g.removeEventListener("animationcancel",f),v.current===0&&m.type!=="animationcancel"&&g.classList.remove(...w))};g.classList.add(...w),g.addEventListener("animationend",f),g.addEventListener("animationcancel",f)},[]),b.useEffect(()=>{let g=u.current,w=()=>{g.removeEventListener("animationend",w),r?oj(g,s,i):s()};c||(l?w():(v.current=1,g.className+=` ${h}`,g.addEventListener("animationend",w)))},[c]),W.createElement(W.Fragment,null,o)}}function uv(e,t){return{content:bS(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function bS(e,t,n=!1){return b.isValidElement(e)&&!Zr(e.type)?b.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Yn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function sj({closeToast:e,theme:t,ariaLabel:n="close"}){return W.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},W.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},W.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function lj({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:c}){let d=i||a&&l===0,p={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(p.transform=`scaleX(${l})`);let h=Br("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${c}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),v=Yn(o)?o({rtl:s,type:r,defaultClassName:h}):Br(h,o),g={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return W.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":d},W.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${c} Toastify__progress-bar--${r}`}),W.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:v,style:p,...g}))}var uj=1,wS=()=>`${uj++}`;function cj(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,u=new Set,c=m=>(u.add(m),()=>u.delete(m)),d=()=>{a=Array.from(s.values()),u.forEach(m=>m())},p=({containerId:m,toastId:x,updateId:S})=>{let C=m?m!==e:e!==1,k=s.has(x)&&S==null;return C||k},h=(m,x)=>{s.forEach(S=>{var C;(x==null||x===S.props.toastId)&&((C=S.toggle)==null||C.call(S,m))})},v=m=>{var x,S;(S=(x=m.props)==null?void 0:x.onClose)==null||S.call(x,m.removalReason),m.isActive=!1},g=m=>{if(m==null)s.forEach(v);else{let x=s.get(m);x&&v(x)}d()},w=()=>{i-=o.length,o=[]},f=m=>{var x,S;let{toastId:C,updateId:k}=m.props,_=k==null;m.staleId&&s.delete(m.staleId),m.isActive=!0,s.set(C,m),d(),n(uv(m,_?"added":"updated")),_&&((S=(x=m.props).onOpen)==null||S.call(x))};return{id:e,props:l,observe:c,toggle:h,removeToast:g,toasts:s,clearQueue:w,buildToast:(m,x)=>{if(p(x))return;let{toastId:S,updateId:C,data:k,staleId:_,delay:E}=x,M=C==null;M&&i++;let I={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([O,j])=>j!=null)),toastId:S,updateId:C,data:k,isIn:!1,className:up(x.className||l.toastClassName),progressClassName:up(x.progressClassName||l.progressClassName),autoClose:x.isLoading?!1:ij(x.autoClose,l.autoClose),closeToast(O){s.get(S).removalReason=O,g(S)},deleteToast(){let O=s.get(S);if(O!=null){if(n(uv(O,"removed")),s.delete(S),i--,i<0&&(i=0),o.length>0){f(o.shift());return}d()}}};I.closeButton=l.closeButton,x.closeButton===!1||cp(x.closeButton)?I.closeButton=x.closeButton:x.closeButton===!0&&(I.closeButton=cp(l.closeButton)?l.closeButton:!0);let $={content:m,props:I,staleId:_};l.limit&&l.limit>0&&i>l.limit&&M?o.push($):Da(E)?setTimeout(()=>{f($)},E):f($)},setProps(m){l=m},setToggle:(m,x)=>{let S=s.get(m);S&&(S.toggle=x)},isToastActive:m=>{var x;return(x=s.get(m))==null?void 0:x.isActive},getSnapshot:()=>a}}var st=new Map,ba=[],dp=new Set,dj=e=>dp.forEach(t=>t(e)),SS=()=>st.size>0;function fj(){ba.forEach(e=>ES(e.content,e.options)),ba=[]}var pj=(e,{containerId:t})=>{var n;return(n=st.get(t||1))==null?void 0:n.toasts.get(e)};function _S(e,t){var n;if(t)return!!((n=st.get(t))!=null&&n.isToastActive(e));let r=!1;return st.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function hj(e){if(!SS()){ba=ba.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||rj(e))st.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=st.get(e.containerId);t?t.removeToast(e.id):st.forEach(n=>{n.removeToast(e.id)})}}var mj=(e={})=>{st.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function ES(e,t){cp(e)&&(SS()||ba.push({content:e,options:t}),st.forEach(n=>{n.buildToast(e,t)}))}function gj(e){var t;(t=st.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function CS(e,t){st.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function vj(e){let t=e.containerId||1;return{subscribe(n){let r=cj(t,e,dj);st.set(t,r);let i=r.observe(n);return fj(),()=>{i(),st.delete(t)}},setProps(n){var r;(r=st.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=st.get(t))==null?void 0:n.getSnapshot()}}}function yj(e){return dp.add(e),()=>{dp.delete(e)}}function xj(e){return e&&(Zr(e.toastId)||Da(e.toastId))?e.toastId:wS()}function La(e,t){return ES(e,t),t.toastId}function rc(e,t){return{...t,type:t&&t.type||e,toastId:xj(t)}}function ic(e){return(t,n)=>La(t,rc(e,n))}function te(e,t){return La(e,rc("default",t))}te.loading=(e,t)=>La(e,rc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function bj(e,{pending:t,error:n,success:r},i){let o;t&&(o=Zr(t)?te.loading(t,i):te.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,c,d)=>{if(c==null){te.dismiss(o);return}let p={type:u,...a,...i,data:d},h=Zr(c)?{render:c}:c;return o?te.update(o,{...p,...h}):te(h.render,{...p,...h}),d},s=Yn(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}te.promise=bj;te.success=ic("success");te.info=ic("info");te.error=ic("error");te.warning=ic("warning");te.warn=te.warning;te.dark=(e,t)=>La(e,rc("default",{theme:"dark",...t}));function wj(e){hj(e)}te.dismiss=wj;te.clearWaitingQueue=mj;te.isActive=_S;te.update=(e,t={})=>{let n=pj(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:wS()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,La(a,o)}};te.done=e=>{te.update(e,{progress:1})};te.onChange=yj;te.play=e=>CS(!0,e);te.pause=e=>CS(!1,e);function Sj(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=b.useRef(vj(e)).current;i(e);let o=(t=b.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:c}=u.props;s.has(c)||s.set(c,[]),s.get(c).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:_S,count:o==null?void 0:o.length}}function _j(e){let[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:c,closeOnClick:d}=e;gj({id:e.toastId,containerId:e.containerId,fn:n}),b.useEffect(()=>{if(e.pauseOnFocusLoss)return p(),()=>{h()}},[e.pauseOnFocusLoss]);function p(){document.hasFocus()||f(),window.addEventListener("focus",w),window.addEventListener("blur",f)}function h(){window.removeEventListener("focus",w),window.removeEventListener("blur",f)}function v(_){if(e.draggable===!0||e.draggable===_.pointerType){m();let E=o.current;a.canCloseOnClick=!0,a.canDrag=!0,E.style.transition="none",e.draggableDirection==="x"?(a.start=_.clientX,a.removalDistance=E.offsetWidth*(e.draggablePercent/100)):(a.start=_.clientY,a.removalDistance=E.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function g(_){let{top:E,bottom:M,left:I,right:$}=o.current.getBoundingClientRect();_.nativeEvent.type!=="touchend"&&e.pauseOnHover&&_.clientX>=I&&_.clientX<=$&&_.clientY>=E&&_.clientY<=M?f():w()}function w(){n(!0)}function f(){n(!1)}function m(){a.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",C)}function x(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",C)}function S(_){let E=o.current;if(a.canDrag&&E){a.didMove=!0,t&&f(),e.draggableDirection==="x"?a.delta=_.clientX-a.start:a.delta=_.clientY-a.start,a.start!==_.clientX&&(a.canCloseOnClick=!1);let M=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;E.style.transform=`translate3d(${M},0)`,E.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function C(){x();let _=o.current;if(a.canDrag&&a.didMove&&_){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}_.style.transition="transform 0.2s, opacity 0.2s",_.style.removeProperty("transform"),_.style.removeProperty("opacity")}}let k={onPointerDown:v,onPointerUp:g};return l&&s&&(k.onMouseEnter=f,e.stacked||(k.onMouseLeave=w)),d&&(k.onClick=_=>{c&&c(_),a.canCloseOnClick&&u(!0)}),{playToast:w,pauseToast:f,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:k}}var Ej=typeof window<"u"?b.useLayoutEffect:b.useEffect,oc=({theme:e,type:t,isLoading:n,...r})=>W.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function Cj(e){return W.createElement(oc,{...e},W.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function kj(e){return W.createElement(oc,{...e},W.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function Tj(e){return W.createElement(oc,{...e},W.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function Pj(e){return W.createElement(oc,{...e},W.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function Oj(){return W.createElement("div",{className:"Toastify__spinner"})}var fp={info:kj,warning:Cj,success:Tj,error:Pj,spinner:Oj},Mj=e=>e in fp;function Ij({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Yn(r)?i=r({...o,isLoading:n}):b.isValidElement(r)?i=b.cloneElement(r,o):n?i=fp.spinner():Mj(t)&&(i=fp[t](o))),i}var jj=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=_j(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:c,hideProgressBar:d,closeToast:p,transition:h,position:v,className:g,style:w,progressClassName:f,updateId:m,role:x,progress:S,rtl:C,toastId:k,deleteToast:_,isIn:E,isLoading:M,closeOnClick:I,theme:$,ariaLabel:O}=e,j=Br("Toastify__toast",`Toastify__toast-theme--${$}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":I}),R=Yn(g)?g({rtl:C,position:v,type:c,defaultClassName:j}):Br(j,g),L=Ij(e),F=!!S||!s,A={closeToast:p,type:c,theme:$},P=null;return a===!1||(Yn(a)?P=a(A):b.isValidElement(a)?P=b.cloneElement(a,A):P=sj(A)),W.createElement(h,{isIn:E,done:_,position:v,preventExitTransition:n,nodeRef:r,playToast:o},W.createElement("div",{id:k,tabIndex:0,onClick:u,"data-in":E,className:R,...i,style:w,ref:r,...E&&{role:x,"aria-label":O}},L!=null&&W.createElement("div",{className:Br("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},L),bS(l,e,!t),P,!e.customProgressBar&&W.createElement(lj,{...m&&!F?{key:`p-${m}`}:{},rtl:C,theme:$,delay:s,isRunning:t,isIn:E,closeToast:p,hide:d,type:c,className:f,controlledProgress:F,progress:S||0})))},$j=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),Dj=aj($j("bounce",!0)),Lj={position:"top-right",transition:Dj,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Ra(e){let t={...Lj,...e},n=e.stacked,[r,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=Sj(t),{className:u,style:c,rtl:d,containerId:p,hotKeys:h}=t;function v(w){let f=Br("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":d});return Yn(u)?u({position:w,rtl:d,defaultClassName:f}):Br(f,up(u))}function g(){n&&(i(!0),te.play())}return Ej(()=>{var w;if(n){let f=o.current.querySelectorAll('[data-in="true"]'),m=12,x=(w=t.position)==null?void 0:w.includes("top"),S=0,C=0;Array.from(f).reverse().forEach((k,_)=>{let E=k;E.classList.add("Toastify__toast--stacked"),_>0&&(E.dataset.collapsed=`${r}`),E.dataset.pos||(E.dataset.pos=x?"top":"bot");let M=S*(r?.2:1)+(r?0:m*_);E.style.setProperty("--y",`${x?M:M*-1}px`),E.style.setProperty("--g",`${m}`),E.style.setProperty("--s",`${1-(r?C:0)}`),S+=E.offsetHeight,C+=.025})}},[r,s,n]),b.useEffect(()=>{function w(f){var m;let x=o.current;h(f)&&((m=x.querySelector('[tabIndex="0"]'))==null||m.focus(),i(!1),te.pause()),f.key==="Escape"&&(document.activeElement===x||x!=null&&x.contains(document.activeElement))&&(i(!0),te.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[h]),W.createElement("section",{ref:o,className:"Toastify",id:p,onMouseEnter:()=>{n&&(i(!1),te.pause())},onMouseLeave:g,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,f)=>{let m=f.length?{...c}:{...c,pointerEvents:"none"};return W.createElement("div",{tabIndex:-1,className:v(w),"data-stacked":n,style:m,key:`c-${w}`},f.map(({content:x,props:S})=>W.createElement(jj,{...S,stacked:n,collapseAll:g,isIn:l(S.toastId,S.containerId),key:`t-${S.key}`},x)))}))}const wa="/Didiv/assets/nofoto-2f8d9d99.png",Rj=()=>{const e=eo(),[t,n]=b.useState([]);b.useEffect(()=>{fetch("https://backenddidiv-production.up.railway.app/api/products?populate=*").then(o=>o.json()).then(o=>{const a=o.data,l=new Date,s=new Date(l);s.setDate(l.getDate()-1);const u=a.filter(c=>new Date(c.createdAt)>=s);n(u)})},[]),console.log(t);const r=[...t].sort(()=>Math.random()-.5).slice(0,3),i=o=>{e(nc({...o,quantity:1})),te.success(`${o.name} додано в кошик!`)};return!t||t.length===0?null:y.jsxs(qI,{children:[y.jsx(Ra,{}),y.jsx(KI,{children:"Нові товари"}),y.jsxs(ZI,{children:[r.map(o=>{var a;return y.jsxs(QI,{children:[y.jsxs(JI,{to:`/product/${o.id}`,children:[y.jsx(e5,{children:"Новинка"}),y.jsx("img",{src:`https://backenddidiv-production.up.railway.app${(a=o.images)==null?void 0:a[0].url}`||wa,alt:o.name,onError:l=>{l.currentTarget.onerror=null,l.currentTarget.src=wa}}),y.jsx("div",{className:"overlay"})]}),y.jsxs(t5,{children:[y.jsx(n5,{children:o.name}),y.jsxs(r5,{children:[y.jsxs(i5,{children:[o.price," грн"]}),y.jsx(o5,{onClick:()=>i(o),children:y.jsx(wu,{size:22})})]})]})]},o.id)}),y.jsx(a5,{to:"/catalog/new",children:y.jsxs(s5,{children:[y.jsx("p",{children:"Усі новинки"}),y.jsx(l5,{children:y.jsx(yb,{size:24})})]})})]})]})},Aj=T.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,gd=T.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,vd=T.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,yd=T.div`
  font-size: 14px;
  color: #888;
`,kS=()=>y.jsxs(Aj,{children:[y.jsxs(gd,{children:[y.jsx(vd,{children:"3000+"}),y.jsx(yd,{children:"Перевірених деталей"})]}),y.jsxs(gd,{children:[y.jsx(vd,{children:"6 років"}),y.jsx(yd,{children:"Досвіду на ринку"})]}),y.jsxs(gd,{children:[y.jsx(vd,{children:"100%"}),y.jsx(yd,{children:"Контроль якості"})]})]}),Fj=Fe.div`
  background:var(--background-color);
`,Nj=Fe.div`
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
`;const zj=()=>y.jsx(Fj,{children:y.jsxs(Nj,{children:[y.jsx(XI,{}),y.jsx(kS,{}),y.jsx(Rj,{}),y.jsx(dM,{})]})}),Vj=T.div`
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
`,Bj=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,Uj=T.button`
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
`,Hj=T.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,Wj=T.button`
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
`,Gj=T.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,Yj=T.div`
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
`,Xj=T.div`
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
`;const qj=T.div`
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
`;const Kj=T.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,Zj=T.button`
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
`,TS=T.button`
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
`,Qj=T.aside`

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
`,Jj=T.h3`
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
`;const e$=T.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,t$=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,n$=T.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,r$=T.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,i$=T.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,o$=T.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,pp=T.input.attrs({type:"checkbox"})`
  display: none;
`,a$=T.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${pp}:checked + & {
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

  ${pp}:checked + &::after {
    opacity: 1;
  }
`;var hp={},am={},sm={},io={};Object.defineProperty(io,"__esModule",{value:!0});io.Direction=void 0;var cv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(cv||(io.Direction=cv={}));(function(e){var t=J&&J.__spreadArray||function(O,j,R){if(R||arguments.length===2)for(var L=0,F=j.length,A;L<F;L++)(A||!(L in j))&&(A||(A=Array.prototype.slice.call(j,0,L)),A[L]=j[L]);return O.concat(A||Array.prototype.slice.call(j))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=b,r=io,i=function(O){var j=O.toString().split(".")[1];return j?j.length:0};e.getStepDecimals=i;function o(O){return O.touches&&O.touches.length||O.changedTouches&&O.changedTouches.length}e.isTouchEvent=o;function a(O,j,R){var L=(j-O)/R,F=8,A=Number(L.toFixed(F));return parseInt(A.toString(),10)===A}e.isStepDivisible=a;function l(O,j,R,L,F,A,P){var D=1e11;if(O=Math.round(O*D)/D,!A){var N=P[j-1],B=P[j+1];if(N&&N>O)return N;if(B&&B<O)return B}if(O>L)return L;if(O<R)return R;var z=Math.floor(O*D-R*D)%Math.floor(F*D),G=Math.floor(O*D-Math.abs(z)),Q=z===0?O:G/D,Z=Math.abs(z/D)<F/2?Q:Q+F,K=(0,e.getStepDecimals)(F);return parseFloat(Z.toFixed(K))}e.normalizeValue=l;function s(O,j,R){return(O-j)/(R-j)}e.relativeValue=s;function u(O){return O===r.Direction.Up||O===r.Direction.Down}e.isVertical=u;function c(O,j,R){if(j>=R)throw new RangeError("min (".concat(j,") is equal/bigger than max (").concat(R,")"));if(O<j)throw new RangeError("value (".concat(O,") is smaller than min (").concat(j,")"));if(O>R)throw new RangeError("value (".concat(O,") is bigger than max (").concat(R,")"))}e.checkBoundaries=c;function d(O,j,R){return O<j?j:O>R?R:O}e.checkValuesAgainstBoundaries=d;function p(O){if(!(O.length<2)&&!O.slice(1).every(function(j,R){return O[R]<=j}))throw new RangeError("values={[".concat(O,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=p;function h(O){var j=window.getComputedStyle(O);return{top:parseInt(j["margin-top"],10),bottom:parseInt(j["margin-bottom"],10),left:parseInt(j["margin-left"],10),right:parseInt(j["margin-right"],10)}}e.getMargin=h;function v(O){var j=window.getComputedStyle(O);return{top:parseInt(j["padding-top"],10)+parseInt(j["border-top-width"],10),bottom:parseInt(j["padding-bottom"],10)+parseInt(j["border-bottom-width"],10),left:parseInt(j["padding-left"],10)+parseInt(j["border-left-width"],10),right:parseInt(j["padding-right"],10)+parseInt(j["border-right-width"],10)}}e.getPaddingAndBorder=v;function g(O,j,R){var L=R?-1:1;O.forEach(function(F,A){return f(F,L*j[A].x,j[A].y)})}e.translateThumbs=g;function w(O,j,R,L){for(var F=0,A=I(O[0],j,R,L),P=1;P<O.length;P++){var D=I(O[P],j,R,L);D<A&&(A=D,F=P)}return F}e.getClosestThumbIndex=w;function f(O,j,R){O.style.transform="translate(".concat(j,"px, ").concat(R,"px)")}e.translate=f;var m=function(O){var j=[],R=null,L=function(){for(var F=[],A=0;A<arguments.length;A++)F[A]=arguments[A];j=F,!R&&(R=requestAnimationFrame(function(){R=null,O.apply(void 0,j)}))};return L};e.schd=m;function x(O,j,R){var L=O.slice(0);return L[j]=R,L}e.replaceAt=x;function S(O){var j=O.values,R=O.colors,L=O.min,F=O.max,A=O.direction,P=A===void 0?r.Direction.Right:A,D=O.rtl,N=D===void 0?!1:D;N&&P===r.Direction.Right?P=r.Direction.Left:N&&r.Direction.Left&&(P=r.Direction.Right);var B=j.slice(0).sort(function(G,Q){return G-Q}).map(function(G){return(G-L)/(F-L)*100}),z=B.reduce(function(G,Q,Z){return"".concat(G,", ").concat(R[Z]," ").concat(Q,"%, ").concat(R[Z+1]," ").concat(Q,"%")},"");return"linear-gradient(".concat(P,", ").concat(R[0]," 0%").concat(z,", ").concat(R[R.length-1]," 100%)")}e.getTrackBackground=S;function C(){}e.voidFn=C;function k(O){throw new Error("Didn't expect to get here")}e.assertUnreachable=k;var _=function(O,j,R,L,F){F===void 0&&(F=function(P){return P});var A=Math.ceil(t([O],Array.from(O.children),!0).reduce(function(P,D){var N=Math.ceil(D.getBoundingClientRect().width);if(D.innerText&&D.innerText.includes(R)&&D.childElementCount===0){var B=D.cloneNode(!0);B.innerHTML=F(j.toFixed(L)),B.style.visibility="hidden",document.body.appendChild(B),N=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return N>P?N:P},O.getBoundingClientRect().width));return A},E=function(O,j,R,L,F,A,P){P===void 0&&(P=function(B){return B});var D=[],N=function(B){var z=_(R[B],L[B],F,A,P),G=j[B].x;j.forEach(function(Q,Z){var K=Q.x,re=_(R[Z],L[Z],F,A,P);B!==Z&&(G>=K&&G<=K+re||G+z>=K&&G+z<=K+re)&&(D.includes(Z)||(D.push(B),D.push(Z),D=t(t([],D,!0),[B,Z],!1),N(Z)))})};return N(O),Array.from(new Set(D.sort()))},M=function(O,j,R,L,F,A){L===void 0&&(L=.1),F===void 0&&(F=" - "),A===void 0&&(A=function(Z){return Z});var P=(0,e.getStepDecimals)(L),D=(0,n.useState)({}),N=D[0],B=D[1],z=(0,n.useState)(A(j[R].toFixed(P))),G=z[0],Q=z[1];return(0,n.useEffect)(function(){if(O){var Z=O.getThumbs();if(Z.length<1)return;var K={},re=O.getOffsets(),we=E(R,re,Z,j,F,P,A),qe=A(j[R].toFixed(P));if(we.length){var Oe=we.reduce(function(pt,ao,Fa,so){return pt.length?t(t([],pt,!0),[re[so[Fa]].x],!1):[re[so[Fa]].x]},[]);if(Math.min.apply(Math,Oe)===re[R].x){var Xt=[];we.forEach(function(pt){Xt.push(j[pt].toFixed(P))}),qe=Array.from(new Set(Xt.sort(function(pt,ao){return parseFloat(pt)-parseFloat(ao)}))).map(A).join(F);var Ft=Math.min.apply(Math,Oe),kt=Math.max.apply(Math,Oe),ni=Z[we[Oe.indexOf(kt)]].getBoundingClientRect().width;K.left="".concat(Math.abs(Ft-(kt+ni))/2,"px"),K.transform="translate(-50%, 0)"}else K.visibility="hidden"}Q(qe),B(K)}},[O,j]),[G,N]};e.useThumbOverlap=M;function I(O,j,R,L){var F=O.getBoundingClientRect(),A=F.left,P=F.top,D=F.width,N=F.height;return u(L)?Math.abs(R-(P+N/2)):Math.abs(j-(A+D/2))}var $=function(){var O,j=((O=navigator.userAgentData)===null||O===void 0?void 0:O.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(j)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=$})(sm);var s$=J&&J.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),l$=J&&J.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),u$=J&&J.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c$=J&&J.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&l$(t,e,n);return u$(t,e),t},dv=J&&J.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(am,"__esModule",{value:!0});var ps=c$(b),ie=sm,De=io,d$=["ArrowRight","ArrowUp","k","PageUp"],f$=["ArrowLeft","ArrowDown","j","PageDown"],p$=function(e){s$(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=ps.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,u=r.trackRef.current;if(!u)return console.warn("No track element found."),[];var c=u.getBoundingClientRect(),d=(0,ie.getPaddingAndBorder)(u);return r.getThumbs().map(function(p,h){var v={x:0,y:0},g=p.getBoundingClientRect(),w=(0,ie.getMargin)(p);switch(o){case De.Direction.Right:return v.x=(w.left+d.left)*-1,v.y=((g.height-c.height)/2+d.top)*-1,v.x+=c.width*(0,ie.relativeValue)(a[h],l,s)-g.width/2,v;case De.Direction.Left:return v.x=(w.right+d.right)*-1,v.y=((g.height-c.height)/2+d.top)*-1,v.x+=c.width-c.width*(0,ie.relativeValue)(a[h],l,s)-g.width/2,v;case De.Direction.Up:return v.x=((g.width-c.width)/2+w.left+d.left)*-1,v.y=-d.left,v.y+=c.height-c.height*(0,ie.relativeValue)(a[h],l,s)-g.height/2,v;case De.Direction.Down:return v.x=((g.width-c.width)/2+w.left+d.left)*-1,v.y=-d.left,v.y+=c.height*(0,ie.relativeValue)(a[h],l,s)-g.height/2,v;default:return(0,ie.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,ie.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,ie.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,ie.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,ie.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,ie.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,u=o.rtl,c=o.direction,d=r.state.isChanged,p=r.getTargetIndex(i.nativeEvent),h=u||c===De.Direction.Left||c===De.Direction.Down?-1:1;p!==-1&&(d$.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:p,isChanged:!0}),l((0,ie.replaceAt)(a,p,r.normalizeValue(a[p]+h*(i.key==="PageUp"?s*10:s),p)))):f$.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:p,isChanged:!0}),l((0,ie.replaceAt)(a,p,r.normalizeValue(a[p]-h*(i.key==="PageDown"?s*10:s),p)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){d&&r.fireOnFinalChange()}):d&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,u=r.props,c=u.direction,d=u.min,p=u.max,h=u.onChange,v=u.values,g=u.step,w=u.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var f=r.trackRef.current;if(!f)return null;var m=f.getBoundingClientRect(),x=(0,ie.isVertical)(c)?m.height:m.width;if(s[0]!==-1&&s[1]!==-1){var S=i-s[0],C=o-s[1],k=0;switch(c){case De.Direction.Right:case De.Direction.Left:k=S/x*(p-d);break;case De.Direction.Down:case De.Direction.Up:k=C/x*(p-d);break;default:(0,ie.assertUnreachable)(c)}if(w&&(k*=-1),Math.abs(k)>=g/2){for(var _=0;_<r.thumbRefs.length;_++){if(v[_]===p&&Math.sign(k)===1||v[_]===d&&Math.sign(k)===-1)return;var E=v[_]+k;E>p?k=p-v[_]:E<d&&(k=d-v[_])}for(var M=v.slice(0),_=0;_<r.thumbRefs.length;_++)M=(0,ie.replaceAt)(M,_,r.normalizeValue(v[_]+k,_));r.setState({draggedTrackPos:[i,o]}),h(M)}}else{var I=0;switch(c){case De.Direction.Right:I=(i-m.left)/x*(p-d)+d;break;case De.Direction.Left:I=(x-(i-m.left))/x*(p-d)+d;break;case De.Direction.Down:I=(o-m.top)/x*(p-d)+d;break;case De.Direction.Up:I=(x-(o-m.top))/x*(p-d)+d;break;default:(0,ie.assertUnreachable)(c)}w&&(I=p+d-I),Math.abs(v[l]-I)>=g/2&&h((0,ie.replaceAt)(v,l,r.normalizeValue(I,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,u=a.step,c=a.allowOverlap,d=a.values;return(0,ie.normalizeValue)(i,o,l,s,u,c,d)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=ps.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),u=[],c=0;c<r.numOfMarks+1;c++){var d=9999,p=9999;if(r.markRefs[c].current){var h=r.markRefs[c].current.getBoundingClientRect();d=h.height,p=h.width}r.props.direction===De.Direction.Left||r.props.direction===De.Direction.Right?u.push([Math.round(o/r.numOfMarks*c+l-p/2),-Math.round((d-a)/2)]):u.push([Math.round(a/r.numOfMarks*c+s-d/2),-Math.round((p-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,ie.schd)(r.onMouseMove),r.schdOnTouchMove=(0,ie.schd)(r.onTouchMove),r.schdOnEnd=(0,ie.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return ps.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,ie.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,ie.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,ie.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,ie.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,ie.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(c){(0,ie.isStepDivisible)(a,c,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,u=s===void 0?function(){return null}:s,c=r.values,d=r.min,p=r.max,h=r.allowOverlap,v=r.disabled,g=this.state,w=g.draggedThumbIndex,f=g.thumbZIndexes,m=g.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,ie.isVertical)(this.props.direction)?"ns-resize":"ew-resize":c.length===1&&!v?"pointer":"inherit"},onMouseDown:v?ie.voidFn:this.onMouseDownTrack,onTouchStart:v?ie.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:v,children:dv(dv([],m.map(function(x,S,C){return u({props:{style:n.props.direction===De.Direction.Left||n.props.direction===De.Direction.Right?{position:"absolute",left:"".concat(x[0],"px"),marginTop:"".concat(x[1],"px")}:{position:"absolute",top:"".concat(x[0],"px"),marginLeft:"".concat(x[1],"px")},key:"mark".concat(S),ref:n.markRefs[S]},index:S})}),!0),c.map(function(x,S){var C=n.state.draggedThumbIndex===S;return l({index:S,value:x,isDragged:C,props:{style:{position:"absolute",zIndex:f[S],cursor:v?"inherit":C?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:v?void 0:0,"aria-valuemax":h?p:c[S+1]||p,"aria-valuemin":h?d:c[S-1]||d,"aria-valuenow":x,draggable:!1,ref:n.thumbRefs[S],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:v?ie.voidFn:n.onKeyDown,onKeyUp:v?ie.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:De.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(ps.Component);am.default=p$;(function(e){var t=J&&J.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(am);e.Range=n.default;var r=sm;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=io;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(hp);const h$=T.div`
  padding: 20px 0;
`,m$=T.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,fv=T.input`
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
`;const g$=T.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,v$=T.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,PS=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??1340,a=(e==null?void 0:e[1])??100340,[l,s]=b.useState([o,a]);b.useEffect(()=>{e&&e.length===2&&(s(e),t&&t(e))},[e]);const u=p=>{s(p),t&&t(p)},c=(p,h)=>{const v=h===""?"":Number(h),g=[...l];g[p]=v,u(g)},d=p=>{const h=[...l];p===0?((h[0]===""||h[0]<o)&&(h[0]=o),h[0]>h[1]-100&&(h[0]=h[1]-100)):((h[1]===""||h[1]>a)&&(h[1]=a),h[1]<h[0]+100&&(h[1]=h[0]+100)),u(h)};return y.jsxs(h$,{children:[y.jsxs(m$,{children:[y.jsx(fv,{type:"number",value:l[0],min:o,max:l[1],onChange:p=>c(0,p.target.value),onBlur:()=>d(0)}),y.jsx(fv,{type:"number",value:l[1],min:l[0],max:a,onChange:p=>c(1,p.target.value),onBlur:()=>d(1)})]}),y.jsx(hp.Range,{values:l,step:100,min:o,max:a,onChange:u,renderTrack:({props:p,children:h})=>y.jsx(g$,{...p,background:hp.getTrackBackground({values:l,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:h}),renderThumb:({props:p})=>y.jsx(v$,{...p})})]})},y$=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,priceRange:i,setPriceRange:o})=>{const[a,l]=b.useState([]);console.log(a),console.log(i),b.useEffect(()=>{t&&(async()=>{var g;try{const m=((g=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/categories?filters[id_title][$eq]=${t}&populate=filters`)).json()).data[0])==null?void 0:g.filters)||[];l(m)}catch(w){console.error(w)}})()},[t]);const[s,u]=b.useState({}),c=v=>{u(g=>({...g,[v]:!g[v]}))},d=(v,g)=>{r(w=>{const f=w[v]||[];return f.includes(g)?{...w,[v]:f.filter(m=>m!==g)}:{...w,[v]:[...f,g]}})},p=Object.values(n).some(v=>Array.isArray(v)&&v.length>0),h=()=>{p&&r({})};return console.log(p),y.jsxs(Qj,{children:[y.jsxs(Jj,{children:["Фільтри ",y.jsx(bb,{size:20})]}),(a||[]).map(v=>{var w;const g=!!s[v.name];return y.jsxs(e$,{children:[y.jsxs(t$,{onClick:()=>c(v.name),children:[y.jsx(n$,{children:v.label}),y.jsx(r$,{isOpen:g})]}),y.jsxs(i$,{isOpen:g,children:[v.type==="checkbox"&&((w=v.options)==null?void 0:w.map(f=>{var m;return y.jsxs(o$,{children:[y.jsx(pp,{checked:((m=n[v.name])==null?void 0:m.includes(f))||!1,onChange:()=>d(v.name,f)}),y.jsx(a$,{}),f]},f)})),v.type==="range"&&y.jsx(PS,{onChange:o,childValues:e})]})]},v.name)}),y.jsx(TS,{onClick:h,disabled:!p,children:"Скинути обрані фільтри"})]})},x$=T.aside`
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  font-size: 20px;
font-family: var(--main-font);
`;T.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;const b$=T.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,w$=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,S$=T.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,_$=T.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,E$=T.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,C$=T.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,mp=T.input.attrs({type:"checkbox"})`
  display: none;
`,k$=T.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${mp}:checked + & {
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

  ${mp}:checked + &::after {
    opacity: 1;
  }
`,T$=({category:e,selectedFilters:t,setSelectedFilters:n})=>{const[r,i]=b.useState({}),[o,a]=b.useState([]);console.log(o),b.useEffect(()=>{e&&(async()=>{var c;try{const h=((c=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/categories?filters[id_title][$eq]=${e}&populate=filters`)).json()).data[0])==null?void 0:c.filters)||[];a(h)}catch(d){console.error(d)}})()},[e]);const l=u=>{i(c=>({...c,[u]:!c[u]}))},s=(u,c)=>{n(d=>{const p=d[u]||[];return p.includes(c)?{...d,[u]:p.filter(h=>h!==c)}:{...d,[u]:[...p,c]}})};return y.jsx(x$,{children:(o||[]).map(u=>{var d;const c=!!r[u.name];return y.jsxs(b$,{children:[y.jsxs(w$,{onClick:()=>l(u.name),children:[y.jsx(S$,{children:u.label}),y.jsx(_$,{isOpen:c})]}),y.jsxs(E$,{isOpen:c,children:[u.type==="checkbox"&&((d=u.options)==null?void 0:d.map(p=>{var h;return y.jsxs(C$,{children:[y.jsx(mp,{checked:((h=t[u.name])==null?void 0:h.includes(p))||!1,onChange:()=>s(u.name,p)}),y.jsx(k$,{}),p]},p)})),u.type==="range"&&y.jsx(PS,{})]})]},u.name)})})};T.div``;const P$=T.div`
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
`,O$=T.div`
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
`,M$=T.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,I$=T.div`
  padding: 16px;
`,j$=T.p`
font-family: var(--second-font);
font-weight: 500;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 8px;
`,$$=T.p`
  font-size: 16px;
  color: #555;
`,D$=T.p`
  font-size: 16px;
  color: #555;
`,L$=T.div.attrs({className:"card-buttons"})`
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
`,pv=T.button`
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
`;const OS=vS({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]}}}),{toggleFavorite:ac,clearFavorite:R$}=OS.actions,A$=OS.reducer,F$=({values:e,setValues:t,category:n,selectedFilters:r={},priceRange:i})=>{const[o,a]=b.useState([]),[l,s]=b.useState(!0);console.log(e),b.useEffect(()=>{(async()=>{try{s(!0);const f=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][id_title][$eq]=${encodeURIComponent(n)}`)).json();a(f.data);const m=f.data.map(x=>x.price);if(m.length>0){const x=Math.min(...m),S=Math.max(...m);t([x,S])}}catch(w){console.error("Error fetching products:",w)}finally{s(!1)}})()},[n,t]);const u=Jl(),c=eo(),d=Nn(g=>g.favorites.items),p=(g,w)=>{w.stopPropagation(),c(nc({...g,quantity:1})),te.success(`${g.name} додано в кошик!`)},h=(g,w)=>{w.stopPropagation();const f=d.some(m=>m.id===g.id);c(ac(g)),f?te.warning(`${g.name} видалено з обраного`):te.info(`${g.name} додано в обране`)};let v=o;if(Object.keys(r).forEach(g=>{const w=r[g];Array.isArray(w)&&w.length>0&&(v=v.filter(f=>w.includes(f[g])))}),i&&i.length===2){const[g,w]=i;console.log(g,w),v=v.filter(f=>f.price>=g&&f.price<=w)}return l?y.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:y.jsx(Yh,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):y.jsxs(y.Fragment,{children:[y.jsx(Ra,{autoClose:1500}),y.jsx(P$,{children:v.map(g=>{const w=d.some(f=>f.id===g.id);return y.jsxs(O$,{onClick:()=>u(`/product/${g.id}`),style:{cursor:"pointer"},children:[y.jsx(M$,{src:g.images[0].url,alt:g.name,onError:f=>{f.currentTarget.onerror=null,f.currentTarget.src=wa}}),y.jsxs(I$,{children:[y.jsx(j$,{children:g.name}),y.jsxs($$,{children:[g.price," грн"]}),g.weight&&y.jsxs(D$,{children:[g.weight," грам"]})]}),y.jsxs(L$,{children:[y.jsx(pv,{onClick:f=>p(g,f),children:y.jsx(wu,{size:24,color:"black"})}),y.jsx(pv,{onClick:f=>h(g,f),children:y.jsx(xb,{size:24,fill:w?"#ff4d4f":"none",color:w?"#ff4d4f":"#000000"})})]})]},g.id)})})]})},N$=()=>{const[e,t]=b.useState({});console.log(e);const{category:n}=R1(),[r,i]=b.useState(!1),[o,a]=b.useState([]),[l,s]=b.useState([0,0]);console.log(o),console.log(n);const u=Object.values(e).some(d=>Array.isArray(d)&&d.length>0),c=()=>{u&&t({})};return y.jsxs(Vj,{children:[y.jsxs(Bj,{children:[y.jsxs(Uj,{onClick:()=>i(!0),children:["Фільтр",y.jsx(Hj,{children:y.jsx("use",{href:`${cn}#icon-filter`})})]}),y.jsxs(Wj,{onClick:()=>i(!0),children:["Сортування",y.jsx(Gj,{children:y.jsx("use",{href:`${cn}#icon-sort`})})]})]}),y.jsx(y$,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:o,priceRange:l,setPriceRange:s}),y.jsx(F$,{priceRange:l,values:o,setValues:a,category:n,selectedFilters:e}),r&&y.jsx(Yj,{onClick:()=>i(!1),open:r,children:y.jsxs(Xj,{onClick:d=>d.stopPropagation(),open:r,children:[y.jsxs(qj,{children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[y.jsx(bb,{size:20}),y.jsx("h2",{children:"Фільтри"})]}),y.jsx(Sb,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),y.jsx(T$,{childValues:o,category:n,selectedFilters:e,setSelectedFilters:t}),y.jsxs(Kj,{children:[y.jsx(TS,{onClick:c,disabled:!u,children:"Скинути обрані фільтри"}),y.jsx(Zj,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})},hv=T.div`
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
`,z$=T.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,V$=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,B$=T.div``;T.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const U$=T.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,H$=T.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,W$=T.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,G$=T.div``,Y$=T.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,X$=T.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,q$=T.span`
  color: #27ae60;
  font-size: 17px;
`,K$=T.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,Z$=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,Q$=T.span`
  font-size: 32px;
  font-weight: 700;
`;T.span`
  text-decoration: line-through;
  color: #999;
  font-size: 18px;
`;const J$=T.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,eD=T.div`
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
`,tD=T.button`
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
`;const nD=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,hs=T.div`
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
`,rD=T.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`,iD=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,oD=T.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,mv=T.button`
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
`,aD=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,sD=T.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,lD=T.button`
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
`,uD=T.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,MS="carousel",IS="controller",cD="navigation",dD="no-scroll",lm="portal",fD="root",jS="toolbar",gv="zoom",xd="loading",bd="error",wd="complete",pD="placeholder",hD=e=>`active-slide-${e}`,mD="fullsize",um="flex_center",gD="no_scroll",$S="no_scroll_padding",cm="slide",DS="slide_wrapper",vD="slide_wrapper_interactive",Dr="prev",Lr="next",vv="swipe",Wi="close",LS="onPointerDown",RS="onPointerMove",AS="onPointerUp",FS="onPointerLeave",NS="onPointerCancel",dm="onKeyDown",yD="onKeyUp",fm="onWheel",xD="Escape",bD="ArrowLeft",wD="ArrowRight",SD="button",gp="icon",zS="contain",yv="cover",VS="Unknown action type",BS="yarl__";function Cn(...e){return e.filter(Boolean).join(" ")}function oe(e){return`${BS}${e}`}function gt(e){return`--${BS}${e}`}function Aa(e,t){return`${e}${t?`_${t}`:""}`}function pm(e){return t=>Aa(e,t)}function Gi(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function _D(e,t,n){return Gi(e,"{index} of {total}").replace(/\{index}/g,`${ym(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function hm(...e){return()=>{e.forEach(t=>{t()})}}function Zn(e,t,n){return()=>{const r=b.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function mm(){return typeof window<"u"}function gm(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function oo(e){return e.type===void 0||e.type==="image"}function vm(e,t){return e.imageFit===yv||e.imageFit!==zS&&t===yv}function sc(e){return typeof e=="string"?Number.parseInt(e,10):e}function Vl(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=sc(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function ED(e,t){const n=Vl(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function CD(){return(mm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function ym(e,t){return t>0?(e%t+t)%t:0}function US(e){return e.length>0}function HS(e,t){return e[ym(t,e.length)]}function vp(e,t){return US(e)?HS(e,t):void 0}function kD(e){return oo(e)?e.src:void 0}function TD(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=b.isValidElement(n)?b.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function PD(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const OD=Number(b.version.split(".")[0])>=19;function MD(e){return{inert:OD?e:e?"":void 0}}function ID(e){e.scrollTop}const yp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[Wi]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:zS,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Tr(e,t){return{name:e,component:t}}function Ne(e,t){return{module:e,children:t}}function WS(e,t,n){return e.module.name===t?n(e):e.children?[Ne(e.module,e.children.flatMap(r=>{var i;return(i=WS(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function ai(e,t,n){return e.flatMap(r=>{var i;return(i=WS(r,t,n))!==null&&i!==void 0?i:[]})}function jD(e,t=[],n=[]){let r=e;const i=h=>{const v=[...r];for(;v.length>0;){const g=v.pop();if((g==null?void 0:g.module.name)===h)return!0;g!=null&&g.children&&v.push(...g.children)}return!1},o=(h,v)=>{if(h===""){r=[Ne(v,r)];return}r=ai(r,h,g=>[Ne(v,[g])])},a=(h,v)=>{r=ai(r,h,g=>[Ne(g.module,[Ne(v,g.children)])])},l=(h,v,g)=>{r=ai(r,h,w=>{var f;return[Ne(w.module,[...g?[Ne(v)]:[],...(f=w.children)!==null&&f!==void 0?f:[],...g?[]:[Ne(v)]])]})},s=(h,v,g)=>{r=ai(r,h,w=>[...g?[Ne(v)]:[],w,...g?[]:[Ne(v)]])},u=h=>{a(IS,h)},c=(h,v)=>{r=ai(r,h,g=>[Ne(v,g.children)])},d=h=>{r=ai(r,h,v=>v.children)},p=h=>{n.push(h)};return t.forEach(h=>{h({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:u,replace:c,remove:d,augment:p})}),{config:r,augmentation:h=>n.reduce((v,g)=>g(v),h)}}const GS=b.createContext(null),YS=Zn("useA11yContext","A11yContext",GS);function $D({children:e}){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const u=c=>d=>{var p;d.currentTarget.contains(d.relatedTarget)||n(c),(p=c?l:s)===null||p===void 0||p(d)};return{onFocus:u(!0),onBlur:u(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return b.createElement(GS.Provider,{value:o},e)}const XS=b.createContext(null),lc=Zn("useDocument","DocumentContext",XS);function DD({nodeRef:e,children:t}){const n=b.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return b.createElement(XS.Provider,{value:n},t)}const qS=b.createContext(null),uc=Zn("useEvents","EventsContext",qS);function LD({children:e}){const[t]=b.useState({});b.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=b.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(u=>u!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(u=>u(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return b.createElement(qS.Provider,{value:n},e)}const KS=b.createContext(null),Yt=Zn("useLightboxProps","LightboxPropsContext",KS);function RD({children:e,...t}){return b.createElement(KS.Provider,{value:t},e)}const ZS=b.createContext(null),Pr=Zn("useLightboxState","LightboxStateContext",ZS),QS=b.createContext(null),AD=Zn("useLightboxDispatch","LightboxDispatchContext",QS);function FD(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=ym(i,n.length),a=vp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:vp(t.slides,t.index)}:e;default:throw new Error(VS)}}function ND({slides:e,index:t,children:n}){const[r,i]=b.useReducer(FD,{slides:e,currentIndex:t,globalIndex:t,currentSlide:vp(e,t)}),[o,a]=b.useState(e),[l,s]=b.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const u=b.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return b.createElement(QS.Provider,{value:i},b.createElement(ZS.Provider,{value:u},n))}const JS=b.createContext(null),cc=Zn("useTimeouts","TimeoutsContext",JS);function zD({children:e}){const[t]=b.useState([]);b.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=b.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return b.createElement(JS.Provider,{value:n},e)}const xm=b.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:u,labels:c}=Yt(),d=Gi(c,t);return b.createElement("button",{ref:s,type:"button",title:d,"aria-label":d,className:Cn(oe(SD),n),onClick:o,style:{...a,...u.button},...l},i?i():b.createElement(r,{className:oe(gp),style:u.icon}))});function VD(e,t){const n=r=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function ti(e,t){return VD(e,b.createElement("g",{fill:"currentColor"},b.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const BD=ti("Close",b.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),UD=ti("Previous",b.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),HD=ti("Next",b.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),WD=ti("Loading",b.createElement(b.Fragment,null,Array.from({length:8}).map((e,t,n)=>b.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),GD=ti("Error",b.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),kn=mm()?b.useLayoutEffect:b.useEffect;function bm(){const[e,t]=b.useState(!1);return b.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function YD(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(sc);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function xv(e,t){const n=b.useRef(void 0),r=b.useRef(void 0),i=bm();return kn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:u,easing:c,onfinish:d}=t(n.current,e.current.getBoundingClientRect(),YD(e.current))||{};if(s&&u){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:u,easing:c})}catch(p){console.error(p)}r.current&&(r.current.onfinish=()=>{r.current=void 0,d==null||d()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function e_(){const e=b.useRef(null),t=b.useRef(void 0),[n,r]=b.useState();return{setContainerRef:b.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=u=>parseFloat(u)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function Gs(){const e=b.useRef(void 0),{setTimeout:t,clearTimeout:n}=cc();return b.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function de(e){const t=b.useRef(e);return kn(()=>{t.current=e}),b.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function bv(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function xp(e,t){return b.useMemo(()=>e==null&&t==null?null:n=>{bv(e,n),bv(t,n)},[e,t])}function XD(e,t=!1){const n=b.useRef(!1);kn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=b.useCallback(()=>{n.current=!0},[]),i=b.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function wm(){const[e,t]=b.useState(!1);return kn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function qD(){const[e]=b.useState({}),t=b.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=b.useMemo(()=>({onPointerDown:i=>t(LS,i),onPointerMove:i=>t(RS,i),onPointerUp:i=>t(AS,i),onPointerLeave:i=>t(FS,i),onPointerCancel:i=>t(NS,i),onKeyDown:i=>t(dm,i),onKeyUp:i=>t(yD,i),onWheel:i=>t(fm,i)}),[t]),r=b.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function wv(e,t){const n=b.useRef(0),r=Gs(),i=de((...o)=>{n.current=Date.now(),e(o)});return b.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const Sd=pm("slide"),_d=pm("slide_image");function Bl({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:u}){var c,d,p,h,v,g,w,f;const[m,x]=b.useState(xd),{publish:S}=uc(),{setTimeout:C}=cc(),k=b.useRef(null);b.useEffect(()=>{t===0&&S(hD(m))},[t,m,S]);const _=de(z=>{("decode"in z?z.decode():Promise.resolve()).catch(()=>{}).then(()=>{z.parentNode&&(x(wd),C(()=>{l==null||l(z)},0))})}),E=b.useCallback(z=>{k.current=z,z!=null&&z.complete&&_(z)},[_]),M=b.useCallback(z=>{_(z.currentTarget)},[_]),I=de(()=>{x(bd),s==null||s()}),$=vm(e,i),O=(z,G)=>Number.isFinite(z)?z:G,j=O(Math.max(...((d=(c=e.srcSet)===null||c===void 0?void 0:c.map(z=>z.width))!==null&&d!==void 0?d:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((p=k.current)===null||p===void 0?void 0:p.naturalWidth)||0),R=O(Math.max(...((v=(h=e.srcSet)===null||h===void 0?void 0:h.map(z=>z.height))!==null&&v!==void 0?v:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((g=k.current)===null||g===void 0?void 0:g.naturalHeight)||0),L=j&&R?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${R}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},F=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((z,G)=>z.width-G.width).map(z=>`${z.src} ${z.width}w`).join(", "),A=()=>r&&!$&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,P=F&&r&&mm()?`${Math.round(Math.min(A(),r.width))}px`:void 0,{style:D,className:N,...B}=(typeof o=="function"?o(e):o)||{};return b.createElement(b.Fragment,null,b.createElement("img",{ref:E,onLoad:M,onError:I,onClick:a,draggable:!1,className:Cn(oe(_d()),$&&oe(_d("cover")),m!==wd&&oe(_d("loading")),N),style:{...L,...u,...D},...B,alt:(f=e.alt)!==null&&f!==void 0?f:"",sizes:P,srcSet:F,src:e.src}),m!==wd&&b.createElement("div",{className:oe(Sd(pD))},m===xd&&(n!=null&&n.iconLoading?n.iconLoading():b.createElement(WD,{className:Cn(oe(gp),oe(Sd(xd)))})),m===bd&&(n!=null&&n.iconError?n.iconError():b.createElement(GD,{className:Cn(oe(gp),oe(Sd(bd)))}))))}const KD=b.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=b.useRef(null),{trackFocusWithin:s}=YS();return b.createElement(DD,{nodeRef:l},b.createElement("div",{ref:xp(a,l),className:Cn(oe("root"),t),...s(r,i),...o},n))});var et;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(et||(et={}));function t_(e,t,n,r,i){b.useEffect(()=>i?()=>{}:hm(e(LS,t),e(RS,n),e(AS,r),e(FS,r),e(NS,r)),[e,t,n,r,i])}var Qt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(Qt||(Qt={}));const Ed=30;function ZD({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,u,c,d,p,h,v,g,w){const f=b.useRef(0),m=b.useRef([]),x=b.useRef(void 0),S=b.useRef(0),C=b.useRef(Qt.NONE),k=b.useCallback(j=>{x.current===j.pointerId&&(x.current=void 0,C.current=Qt.NONE);const R=m.current;R.splice(0,R.length,...R.filter(L=>L.pointerId!==j.pointerId))},[]),_=b.useCallback(j=>{k(j),j.persist(),m.current.push(j)},[k]),E=b.useCallback(j=>m.current.find(({pointerId:R})=>j.pointerId===R),[]),M=de(j=>{_(j)}),I=(j,R)=>d&&j>R||c&&j<-R,$=de(j=>{const R=E(j);if(R)if(x.current===j.pointerId){const L=Date.now()-S.current,F=f.current;C.current===Qt.SWIPE?Math.abs(F)>.3*i||Math.abs(F)>5&&L<o?s(F,L):u(F):C.current===Qt.PULL&&(I(F,2*Ed)?v(F,L):g(F)),f.current=0,C.current=Qt.NONE}else{const{target:L}=j;t&&L instanceof HTMLElement&&L===R.target&&(L.classList.contains(oe(cm))||L.classList.contains(oe(DS)))&&w()}k(j)}),O=de(j=>{const R=E(j);if(R){const L=x.current===j.pointerId;if(j.buttons===0){L&&f.current!==0?$(j):k(R);return}const F=j.clientX-R.clientX,A=j.clientY-R.clientY;if(x.current===void 0){const P=D=>{_(j),x.current=j.pointerId,S.current=Date.now(),C.current=D};Math.abs(F)>Math.abs(A)&&Math.abs(F)>Ed&&r(F)?e||(P(Qt.SWIPE),a()):Math.abs(A)>Math.abs(F)&&I(A,Ed)&&(P(Qt.PULL),p())}else L&&(C.current===Qt.SWIPE?(f.current=F,l(F)):C.current===Qt.PULL&&(f.current=A,h(A)))}});t_(n,M,O,$)}function QD({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=b.useRef(null),r=de(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return b.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function JD(e,t,n,r,i,o,a,l,s){const u=b.useRef(0),c=b.useRef(0),d=b.useRef(void 0),p=b.useRef(void 0),h=b.useRef(0),v=b.useRef(void 0),g=b.useRef(0),{setTimeout:w,clearTimeout:f}=cc(),m=b.useCallback(()=>{d.current&&(f(d.current),d.current=void 0)},[f]),x=b.useCallback(()=>{p.current&&(f(p.current),p.current=void 0)},[f]),S=de(()=>{e!==et.SWIPE&&(u.current=0,g.current=0,m(),x())});b.useEffect(S,[e,S]);const C=de(_=>{p.current=void 0,u.current===_&&s(u.current)}),k=de(_=>{if(_.ctrlKey||Math.abs(_.deltaY)>Math.abs(_.deltaX))return;const E=M=>{h.current=M,f(v.current),v.current=M>0?w(()=>{h.current=0,v.current=void 0},300):void 0};if(e===et.NONE){if(Math.abs(_.deltaX)<=1.2*Math.abs(h.current)){E(_.deltaX);return}if(!n(-_.deltaX))return;if(c.current+=_.deltaX,m(),Math.abs(c.current)>30)c.current=0,E(0),g.current=Date.now(),o();else{const M=c.current;d.current=w(()=>{d.current=void 0,M===c.current&&(c.current=0)},i)}}else if(e===et.SWIPE){let M=u.current-_.deltaX;if(M=Math.min(Math.abs(M),r)*Math.sign(M),u.current=M,a(M),x(),Math.abs(M)>.2*r){E(_.deltaX),l(M,Date.now()-g.current);return}p.current=w(()=>C(M),2*i)}else E(_.deltaX)});b.useEffect(()=>t(fm,k),[t,k])}const Sv=pm("container"),n_=b.createContext(null),Qn=Zn("useController","ControllerContext",n_);function eL({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:u,closeOnPullDown:c,preventDefaultWheelX:d,preventDefaultWheelY:p}=o,[h,v]=b.useState(),g=Pr(),w=AD(),[f,m]=b.useState(et.NONE),x=b.useRef(0),S=b.useRef(0),C=b.useRef(1),{registerSensors:k,subscribeSensors:_}=qD(),{subscribe:E,publish:M}=uc(),I=Gs(),$=Gs(),O=Gs(),{containerRef:j,setContainerRef:R,containerRect:L}=e_(),F=xp(QD({preventDefaultWheelX:d,preventDefaultWheelY:p}),R),A=b.useRef(null),P=xp(A,void 0),{getOwnerDocument:D}=lc(),N=wm(),B=H=>(N?-1:1)*(typeof H=="number"?H:1),z=de(()=>{var H;return(H=j.current)===null||H===void 0?void 0:H.focus()}),G=de(()=>t),Q=de(()=>g),Z=b.useCallback(H=>M(Dr,H),[M]),K=b.useCallback(H=>M(Lr,H),[M]),re=b.useCallback(()=>M(Wi),[M]),we=H=>!(r.finite&&(B(H)>0&&g.currentIndex===0||B(H)<0&&g.currentIndex===g.slides.length-1)),qe=H=>{var ye;x.current=H,(ye=j.current)===null||ye===void 0||ye.style.setProperty(gt("swipe_offset"),`${Math.round(H)}px`)},Oe=H=>{var ye,it;S.current=H,C.current=(()=>{const lo=(()=>c&&H>0?H:u&&H<0?-H:0)();return Math.min(Math.max(gm(1-lo/60*(1-.5),2),.5),1)})(),(ye=j.current)===null||ye===void 0||ye.style.setProperty(gt("pull_offset"),`${Math.round(H)}px`),(it=j.current)===null||it===void 0||it.style.setProperty(gt("pull_opacity"),`${C.current}`)},{prepareAnimation:Xt}=xv(A,(H,ye,it)=>{if(A.current&&L)return{keyframes:[{transform:`translate(0, ${H.rect.y-ye.y+it.y}px)`,opacity:H.opacity},{transform:"translate(0, 0)",opacity:1}],duration:H.duration,easing:i.easing.fade}}),Ft=(H,ye)=>{if(u||c){Oe(H);let it=0;A.current&&(it=i.fade*(ye?2:1),Xt({rect:A.current.getBoundingClientRect(),opacity:C.current,duration:it})),O(()=>{Oe(0),m(et.NONE)},it),m(et.ANIMATION),ye||re()}},{prepareAnimation:kt,isAnimationPlaying:ni}=xv(A,(H,ye,it)=>{var fn;if(A.current&&L&&(!((fn=g.animation)===null||fn===void 0)&&fn.duration)){const Nt=Vl(r.spacing),lo=(Nt.percent?Nt.percent*L.width/100:Nt.pixel)||0;return{keyframes:[{transform:`translate(${B(g.globalIndex-H.index)*(L.width+lo)+H.rect.x-ye.x+it.x}px, 0)`},{transform:"translate(0, 0)"}],duration:g.animation.duration,easing:g.animation.easing}}}),pt=de(H=>{var ye,it;const fn=H.offset||0,Nt=fn?i.swipe:(ye=i.navigation)!==null&&ye!==void 0?ye:i.swipe,lo=!fn&&!ni()?i.easing.navigation:i.easing.swipe;let{direction:Na}=H;const za=(it=H.count)!==null&&it!==void 0?it:1;let mc=et.ANIMATION,pn=Nt*za;if(!Na){const uo=L==null?void 0:L.width,Lm=H.duration||0,vc=uo?Nt/uo*Math.abs(fn):Nt;za!==0?(Lm<vc?pn=pn/vc*Math.max(Lm,vc/5):uo&&(pn=Nt/uo*(uo-Math.abs(fn))),Na=B(fn)>0?Dr:Lr):pn=Nt/2}let gc=0;Na===Dr?we(B(1))?gc=-za:(mc=et.NONE,pn=Nt):Na===Lr&&(we(B(-1))?gc=za:(mc=et.NONE,pn=Nt)),pn=Math.round(pn),$(()=>{qe(0),m(et.NONE)},pn),A.current&&kt({rect:A.current.getBoundingClientRect(),index:g.globalIndex}),m(mc),M(vv,{type:"swipe",increment:gc,duration:pn,easing:lo})});b.useEffect(()=>{var H,ye;!((H=g.animation)===null||H===void 0)&&H.increment&&(!((ye=g.animation)===null||ye===void 0)&&ye.duration)&&I(()=>w({type:"swipe",increment:0}),g.animation.duration)},[g.animation,w,I]);const ao=[_,we,(L==null?void 0:L.width)||0,i.swipe,()=>m(et.SWIPE),H=>qe(H),(H,ye)=>pt({offset:H,duration:ye,count:1}),H=>pt({offset:H,count:0})],Fa=[()=>{c&&m(et.PULL)},H=>Oe(H),H=>Ft(H),H=>Ft(H,!0)];ZD(o,...ao,u,c,...Fa,re),JD(f,...ao);const so=de(()=>{o.focus&&D().querySelector(`.${oe(lm)} .${oe(Sv())}`)&&z()});b.useEffect(so,[so]);const Dm=de(()=>{var H;(H=a.view)===null||H===void 0||H.call(a,{index:g.currentIndex})});b.useEffect(Dm,[g.globalIndex,Dm]),b.useEffect(()=>hm(E(Dr,H=>pt({direction:Dr,...H})),E(Lr,H=>pt({direction:Lr,...H})),E(vv,H=>w(H))),[E,pt,w]);const X_=b.useMemo(()=>({prev:Z,next:K,close:re,focus:z,slideRect:L?ED(L,r.padding):{width:0,height:0},containerRect:L||{width:0,height:0},subscribeSensors:_,containerRef:j,setCarouselRef:P,toolbarWidth:h,setToolbarWidth:v}),[Z,K,re,z,_,L,j,P,h,v,r.padding]);return b.useImperativeHandle(o.ref,()=>({prev:Z,next:K,close:re,focus:z,getLightboxProps:G,getLightboxState:Q}),[Z,K,re,z,G,Q]),b.createElement("div",{ref:F,className:Cn(oe(Sv()),oe(um)),style:{...f===et.SWIPE?{[gt("swipe_offset")]:`${Math.round(x.current)}px`}:null,...f===et.PULL?{[gt("pull_offset")]:`${Math.round(S.current)}px`,[gt("pull_opacity")]:`${C.current}`}:null,...o.touchAction!=="none"?{[gt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...k},L&&b.createElement(n_.Provider,{value:X_},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const tL=Tr(IS,eL);function Or(e){return Aa(MS,e)}function _v(e){return Aa(cm,e)}function nL({slide:e,offset:t}){const n=b.useRef(null),{currentIndex:r,slides:i}=Pr(),{slideRect:o,focus:a}=Qn(),{render:l,carousel:{imageFit:s,imageProps:u},on:{click:c},styles:{slide:d},labels:p}=Yt(),{getOwnerDocument:h}=lc(),v=t!==0;b.useEffect(()=>{var w;v&&(!((w=n.current)===null||w===void 0)&&w.contains(h().activeElement))&&a()},[v,a,h]);const g=()=>{var w,f,m,x;let S=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!S&&oo(e)&&(S=b.createElement(Bl,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:u,onClick:v?void 0:()=>c==null?void 0:c({index:r})})),S?b.createElement(b.Fragment,null,(f=l.slideHeader)===null||f===void 0?void 0:f.call(l,{slide:e}),((m=l.slideContainer)!==null&&m!==void 0?m:({children:C})=>C)({slide:e,children:S}),(x=l.slideFooter)===null||x===void 0?void 0:x.call(l,{slide:e})):null};return b.createElement("div",{ref:n,className:Cn(oe(_v()),!v&&oe(_v("current")),oe(um)),...MD(v),style:d,role:"group","aria-roledescription":Gi(p,"Slide"),"aria-label":_D(p,i,r+t)},g())}function rL(){const e=Yt().styles.slide;return b.createElement("div",{className:oe(cm),style:e})}function iL({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Pr(),{setCarouselRef:o}=Qn(),{autoPlaying:a,focusWithin:l}=YS(),s=Vl(e.spacing),u=Vl(e.padding),c=PD(e,n,1),d=[];if(US(n))for(let p=r-c;p<=r+c;p+=1){const h=HS(n,p),v=i-r+p,g=e.finite&&(p<0||p>n.length-1);d.push(g?{key:v}:{key:[`${v}`,kD(h)].filter(Boolean).join("|"),offset:p-r,slide:h})}return b.createElement("div",{ref:o,className:Cn(oe(Or()),d.length>0&&oe(Or("with_slides"))),style:{[`${gt(Or("slides_count"))}`]:d.length,[`${gt(Or("spacing_px"))}`]:s.pixel||0,[`${gt(Or("spacing_percent"))}`]:s.percent||0,[`${gt(Or("padding_px"))}`]:u.pixel||0,[`${gt(Or("padding_percent"))}`]:u.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":Gi(t,"Carousel"),"aria-label":Gi(t,"Photo gallery")},d.map(({key:p,slide:h,offset:v})=>h?b.createElement(nL,{key:p,slide:h,offset:v}):b.createElement(rL,{key:p})))}const oL=Tr(MS,iL);function r_(){const{carousel:e}=Yt(),{slides:t,currentIndex:n}=Pr(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function aL(e){var t;const n=wm(),{publish:r}=uc(),{animation:i}=Yt(),{prevDisabled:o,nextDisabled:a}=r_(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=wv(()=>r(Dr),l),u=wv(()=>r(Lr),l),c=de(d=>{switch(d.key){case xD:r(Wi);break;case bD:(n?a:o)||(n?u:s)();break;case wD:(n?o:a)||(n?s:u)();break}});b.useEffect(()=>e(dm,c),[e,c])}function Ev({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return b.createElement(xm,{label:e,icon:t,renderIcon:n,className:oe(`navigation_${r}`),disabled:o,onClick:i,style:a,...XD(Qn().focus,o)})}function sL({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=Qn(),{prevDisabled:s,nextDisabled:u}=r_();return aL(l),b.createElement(b.Fragment,null,e?e():b.createElement(Ev,{label:"Previous",action:Dr,icon:UD,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():b.createElement(Ev,{label:"Next",action:Lr,icon:HD,renderIcon:r,style:i.navigationNext,disabled:u,onClick:a}))}const lL=Tr(cD,sL),Cv=oe(gD),uL=oe($S);function cL(e){return"style"in e}function kv(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(sc(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function dL({noScroll:{disabled:e},children:t}){const n=wm(),{getOwnerDocument:r,getOwnerWindow:i}=lc();return b.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),u=Math.round(a.innerWidth-s.clientWidth);if(u>0){o.push(kv(l,u,n));const c=l.getElementsByTagName("*");for(let d=0;d<c.length;d+=1){const p=c[d];cL(p)&&a.getComputedStyle(p).getPropertyValue("position")==="fixed"&&!p.classList.contains(uL)&&o.push(kv(p,u,n))}}return l.classList.add(Cv),()=>{l.classList.remove(Cv),o.forEach(c=>c())}},[n,e,r,i]),b.createElement(b.Fragment,null,t)}const fL=Tr(dD,dL);function Tv(e){return Aa(lm,e)}function Pv(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function pL({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,u]=b.useState(!1),[c,d]=b.useState(!1),p=b.useRef([]),h=b.useRef(null),{setTimeout:v}=cc(),{subscribe:g}=uc(),f=bm()?0:t.fade;b.useEffect(()=>(u(!0),()=>{u(!1),d(!1)}),[]);const m=de(()=>{p.current.forEach(k=>k()),p.current=[]}),x=de(()=>{var k;d(!1),m(),(k=i.exiting)===null||k===void 0||k.call(i),v(()=>{var _;(_=i.exited)===null||_===void 0||_.call(i),a()},f)});b.useEffect(()=>g(Wi,x),[g,x]);const S=de(k=>{var _,E,M;ID(k),d(!0),(_=i.entering)===null||_===void 0||_.call(i);const I=(M=(E=k.parentNode)===null||E===void 0?void 0:E.children)!==null&&M!==void 0?M:[];for(let $=0;$<I.length;$+=1){const O=I[$];["TEMPLATE","SCRIPT","STYLE"].indexOf(O.tagName)===-1&&O!==k&&(p.current.push(Pv(O,"inert","")),p.current.push(Pv(O,"aria-hidden","true")))}p.current.push(()=>{var $,O;(O=($=h.current)===null||$===void 0?void 0:$.focus)===null||O===void 0||O.call($)}),v(()=>{var $;($=i.entered)===null||$===void 0||$.call(i)},f)}),C=b.useCallback(k=>{k?S(k):m()},[S,m]);return s?mu.createPortal(b.createElement(KD,{ref:C,className:Cn(r,oe(Tv()),oe($S),c&&oe(Tv("open"))),"aria-modal":!0,role:"dialog","aria-label":Gi(l,"Lightbox"),style:{...t.fade!==yp.animation.fade?{[gt("fade_animation_duration")]:`${f}ms`}:null,...t.easing.fade!==yp.animation.easing.fade?{[gt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:k=>{h.current||(h.current=k.relatedTarget)}},e),o.root||document.body):null}const hL=Tr(lm,pL);function mL({children:e}){return b.createElement(b.Fragment,null,e)}const gL=Tr(fD,mL);function vL(e){return Aa(jS,e)}function yL({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=Qn(),{setContainerRef:a,containerRect:l}=e_();kn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():b.createElement(xm,{key:Wi,label:"Close",icon:BD,renderIcon:n,onClick:i});return b.createElement("div",{ref:a,style:r.toolbar,className:oe(vL())},e==null?void 0:e.map(u=>u===Wi?s():u))}const xL=Tr(jS,yL);function i_(e,t){var n;return b.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>i_(r,t)))}function bL(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function wL({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:u,...c}){const{animation:d,carousel:p,render:h,toolbar:v,controller:g,noScroll:w,on:f,slides:m,index:x,plugins:S,...C}=yp,{config:k,augmentation:_}=jD([Ne(hL,[Ne(fL,[Ne(tL,[Ne(oL),Ne(xL),Ne(lL)])])])],l||S),E=_({animation:bL(d,t),carousel:{...p,...e},render:{...h,...n},toolbar:{...v,...r},controller:{...g,...i},noScroll:{...w,...o},on:{...f,...a},...C,...c});return E.open?b.createElement(RD,{...E},b.createElement(ND,{slides:s||m,index:sc(u||x)},b.createElement(zD,null,b.createElement(LD,null,b.createElement($D,null,i_(Ne(gL,k),E)))))):null}const SL={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function _L(e){return Math.min(Math.max(e,Number.EPSILON),1)}function o_(e){const{minZoom:t,...n}={...SL,...e};return{minZoom:_L(t),...n}}function EL(e,t,n,r){const i=b.useRef(void 0),o=b.useRef(void 0),{zoom:a}=Yt().animation,l=bm(),s=de(()=>{var u,c,d;if((u=i.current)===null||u===void 0||u.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(d=(c=r.current).animate)===null||d===void 0?void 0:d.call(c,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(p){console.error(p)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return kn(s,[e,t,n,s]),b.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function CL(e,t){const{on:n}=Yt(),r=de(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});b.useEffect(r,[e,r])}function dc(){const{zoom:e}=Yt();return o_(e)}function kL(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Pr(),{imageFit:l}=Yt().carousel,{maxZoomPixelRatio:s}=dc();if(e&&a){const c={...a,...t};if(oo(c)){const d=vm(c,l),p=Math.max(...(((n=c.srcSet)===null||n===void 0?void 0:n.map(v=>v.width))||[]).concat(c.width?[c.width]:[])),h=Math.max(...(((r=c.srcSet)===null||r===void 0?void 0:r.map(v=>v.height))||[]).concat(c.height?[c.height]:[]));p>0&&h>0&&e.width>0&&e.height>0&&(o=d?{width:Math.round(Math.min(p,e.width/e.height*h)),height:Math.round(Math.min(h,e.height/e.width*p))}:{width:p,height:h},o={width:o.width*s,height:o.height*s},i=d?{width:Math.min(e.width,o.width,p),height:Math.min(e.height,o.height,h)}:{width:Math.round(Math.min(e.width,e.height/h*p,p)),height:Math.round(Math.min(e.height,e.width/p*h,h))})}}const u=i.width?Math.max(gm(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:u}}function Ov(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Mv(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function TL(e,t,n,r,i,o,a,l,s){const u=b.useRef([]),c=b.useRef(0),d=b.useRef(void 0),{globalIndex:p}=Pr(),{getOwnerWindow:h}=lc(),{containerRef:v,subscribeSensors:g}=Qn(),{keyboardMoveDistance:w,zoomInMultiplier:f,wheelZoomDistanceFactor:m,scrollToZoom:x,doubleTapDelay:S,doubleClickDelay:C,doubleClickMaxStops:k,pinchZoomDistanceFactor:_,pinchZoomV4:E}=dc(),M=b.useCallback(P=>{if(v.current){const{pageX:D,pageY:N}=P,{scrollX:B,scrollY:z}=h(),{left:G,top:Q,width:Z,height:K}=v.current.getBoundingClientRect();return[D-G-B-Z/2,N-Q-z-K/2]}return[]},[v,h]),I=de(P=>{const{key:D,metaKey:N,ctrlKey:B}=P,z=N||B,G=()=>{P.preventDefault(),P.stopPropagation()};if(e>1){const Q=(Z,K)=>{G(),l(Z,K)};D==="ArrowDown"?Q(0,w):D==="ArrowUp"?Q(0,-w):D==="ArrowLeft"?Q(-w,0):D==="ArrowRight"&&Q(w,0)}D==="+"||z&&D==="="?(G(),i()):D==="-"||z&&D==="_"?(G(),o()):z&&D==="0"&&(G(),a(1))}),$=de(P=>{if((P.ctrlKey||x)&&Math.abs(P.deltaY)>Math.abs(P.deltaX)){P.stopPropagation(),a(Mv(e,-P.deltaY,m),!0,...M(P));return}e>1&&(P.stopPropagation(),x||l(P.deltaX,P.deltaY))}),O=b.useCallback(P=>{const D=u.current;D.splice(0,D.length,...D.filter(N=>N.pointerId!==P.pointerId))},[]),j=b.useCallback(P=>{O(P),P.persist(),u.current.push(P)},[O]),R=de(P=>{var D;const N=u.current;if(P.pointerType==="mouse"&&P.buttons>1||!(!((D=s==null?void 0:s.current)===null||D===void 0)&&D.contains(P.target)))return;e>1&&P.stopPropagation();const{timeStamp:B}=P;if(N.length===0&&B-c.current<(P.pointerType==="touch"?S:C)){c.current=0;const z=e>=1?e!==n?e*Math.max(n**(1/k),f):1:e!==t?e/Math.max(t**(-1/k),f):1;a(z,!1,...M(P))}else c.current=B;if(j(P),N.length===2){const z=Ov(N[0],N[1]);d.current={previousDistance:z,initialDistance:Math.max(z,1),initialZoom:e}}}),L=de(P=>{const D=u.current,N=D.find(B=>B.pointerId===P.pointerId);if(D.length===2&&d.current){P.stopPropagation(),j(P);const B=Ov(D[0],D[1]),z=E?d.current.initialZoom/d.current.initialDistance*B:Mv(e,B-d.current.previousDistance,_);a(z,!0,...D.map(G=>M(G)).reduce((G,Q)=>Q.map((Z,K)=>G[K]+Z/2))),d.current.previousDistance=B;return}e>1&&(P.stopPropagation(),N&&(D.length===1&&l((N.clientX-P.clientX)/e,(N.clientY-P.clientY)/e),j(P)))}),F=b.useCallback(P=>{const D=u.current;D.length===2&&D.find(N=>N.pointerId===P.pointerId)&&(d.current=void 0),O(P)},[O]),A=b.useCallback(()=>{const P=u.current;P.splice(0,P.length),c.current=0,d.current=void 0},[]);t_(g,R,L,F,r),b.useEffect(A,[p,A]),b.useEffect(()=>r?()=>{}:hm(A,g(dm,I),g(fm,$)),[r,g,A,I,$])}function PL(e,t,n){const[r,i]=b.useState(1),[o,a]=b.useState(0),[l,s]=b.useState(0),u=EL(r,o,l,n),{currentSlide:c,globalIndex:d}=Pr(),{containerRect:p,slideRect:h}=Qn(),{minZoom:v,zoomInMultiplier:g}=dc(),w=c&&oo(c)?c.src:void 0,f=!w||!(n!=null&&n.current);kn(()=>{i(1),a(0),s(0)},[d,w]);const m=b.useCallback((_,E,M)=>{const I=M||r,$=o-(_||0),O=l-(E||0),j=(e.width*I-h.width)/2/I,R=(e.height*I-h.height)/2/I;a(Math.min(Math.abs($),Math.max(j,0))*Math.sign($)),s(Math.min(Math.abs(O),Math.max(R,0))*Math.sign(O))},[r,o,l,h,e.width,e.height]),x=b.useCallback((_,E,M,I)=>{const $=gm(_+.01<t?_-.01>v?_:v:t,5);E||u(),m(M?M*(1/r-1/$):0,I?I*(1/r-1/$):0,$),i($)},[r,v,t,m,u]),S=de(()=>{r>1&&(r>t&&x(t,!0),m())});kn(S,[p.width,p.height,S]);const C=b.useCallback(()=>{const _=r*g;x(r<1&&_>1?1:_)},[r,g,x]),k=b.useCallback(()=>{const _=r/g;x(r>1&&_<1?1:_)},[r,g,x]);return{zoom:r,offsetX:o,offsetY:l,disabled:f,changeOffsets:m,changeZoom:x,zoomIn:C,zoomOut:k}}const a_=b.createContext(null),Sm=Zn("useZoom","ZoomControllerContext",a_);function OL({children:e}){const[t,n]=b.useState(),{slideRect:r}=Qn(),{ref:i,minZoom:o}=dc(),{imageRect:a,maxZoom:l}=kL(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:u,offsetY:c,disabled:d,changeZoom:p,changeOffsets:h,zoomIn:v,zoomOut:g}=PL(a,l,t==null?void 0:t.zoomWrapperRef);CL(s,d),TL(s,o,l,d,v,g,p,h,t==null?void 0:t.zoomWrapperRef);const w=b.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:u,offsetY:c,disabled:d,zoomIn:v,zoomOut:g,changeZoom:p}),[s,o,l,u,c,d,v,g,p]);b.useImperativeHandle(i,()=>w,[w]);const f=b.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return b.createElement(a_.Provider,{value:f},e)}const ML=ti("ZoomIn",b.createElement(b.Fragment,null,b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),IL=ti("ZoomOut",b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),Iv=b.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=b.useRef(!1),o=b.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:u,zoomOut:c,disabled:d}=Sm(),{render:p}=Yt(),h=d||(t?a>=s:a<=l);return b.useEffect(()=>{h&&i.current&&o.current&&n(),h||(i.current=!0)},[h,n]),b.createElement(xm,{ref:r,disabled:h,label:t?"Zoom in":"Zoom out",icon:t?ML:IL,renderIcon:t?p.iconZoomIn:p.iconZoomOut,onClick:t?u:c,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function jL(){const e=b.useRef(null),t=b.useRef(null),{focus:n}=Qn(),r=b.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=b.useCallback(()=>r(e),[r]),o=b.useCallback(()=>r(t),[r]);return b.createElement(b.Fragment,null,b.createElement(Iv,{zoomIn:!0,ref:e,onLoseFocus:o}),b.createElement(Iv,{ref:t,onLoseFocus:i}))}function $L(){const{render:e}=Yt(),t=Sm();return e.buttonZoom?b.createElement(b.Fragment,null,e.buttonZoom(t)):b.createElement(jL,null)}function DL(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function LL({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(VS)}}function RL(e){var t,n;const[{current:r,preload:i},o]=b.useReducer(LL,{}),{slide:a,rect:l,imageFit:s,render:u,interactive:c}=e,d=a.srcSet.sort((C,k)=>C.width-k.width),p=(t=a.width)!==null&&t!==void 0?t:d[d.length-1].width,h=(n=a.height)!==null&&n!==void 0?n:d[d.length-1].height,v=vm(a,s),g=Math.max(...d.map(C=>C.width)),w=Math.min((v?Math.max:Math.min)(l.width,p*(l.height/h)),g),f=CD(),m=de(()=>{var C;const k=(C=d.find(_=>_.width>=w*f))!==null&&C!==void 0?C:d[d.length-1];(!r||d.findIndex(_=>_.src===r)<d.findIndex(_=>_===k))&&o({type:"fetch",source:k.src})});kn(m,[l.width,l.height,f,m]);const x=de(C=>o({type:"done",source:C})),S={WebkitTransform:c?"initial":"translateZ(0)"};return v||Object.assign(S,l.width/l.height<p/h?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),b.createElement(b.Fragment,null,i&&i!==r&&b.createElement(Bl,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...S},onLoad:()=>x(i),render:{...u,iconLoading:()=>null,iconError:()=>null}}),r&&b.createElement(Bl,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:S}))}function AL({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=b.useState(),l=b.useRef(null),{zoom:s,maxZoom:u,offsetX:c,offsetY:d,setZoomWrapper:p}=Sm(),h=s>1,{carousel:v,on:g}=Yt(),{currentIndex:w}=Pr();kn(()=>n===0?(p({zoomWrapperRef:l,imageDimensions:o}),()=>p(void 0)):()=>{},[n,o,p]);let f=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:u});if(!f&&oo(t)){const m={slide:t,offset:n,rect:r,render:e,imageFit:v.imageFit,imageProps:v.imageProps,onClick:n===0?()=>{var x;return(x=g.click)===null||x===void 0?void 0:x.call(g,{index:w})}:void 0};f=DL(t)?b.createElement(RL,{...m,slide:t,interactive:h,rect:n===0?{width:r.width*s,height:r.height*s}:r}):b.createElement(Bl,{onLoad:x=>a({width:x.naturalWidth,height:x.naturalHeight}),...m})}return f?b.createElement("div",{ref:l,className:Cn(oe(mD),oe(um),oe(DS),h&&oe(vD)),style:n===0?{transform:`scale(${s}) translateX(${c}px) translateY(${d}px)`}:void 0},f):null}const FL=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=o_(n);return{zoom:l,toolbar:TD(r,gv,b.createElement($L,null)),render:{...i,slide:s=>{var u;return oo(s.slide)?b.createElement(AL,{render:i,...s}):(u=i.slide)===null||u===void 0?void 0:u.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Tr(gv,OL))},NL=()=>{const{id:e}=R1(),[t,n]=b.useState([]),[r,i]=b.useState(1),[o,a]=b.useState("description"),[l,s]=b.useState(null),[u,c]=b.useState(!1),[d,p]=b.useState(0),[h,v]=b.useState(!0),g=t.find(_=>_.id===Number(e));b.useEffect(()=>{(async()=>{try{v(!0);const M=await(await fetch("https://backenddidiv-production.up.railway.app/api/products?populate=*")).json();n(M.data)}catch(E){console.error("Error fetching products:",E)}finally{v(!1)}})()},[]),console.log(g),b.useEffect(()=>{var _,E;g&&g.images&&s((E=(_=g.images)==null?void 0:_[0])==null?void 0:E.url)},[g]);const w=g==null?void 0:g.images.map(_=>({src:_.url})),f=()=>{const _=g.images.findIndex(E=>E.url===l);p(_>=0?_:0),c(!0)},m=eo(),S=Nn(_=>_.favorites.items).some(_=>_.id===(g==null?void 0:g.id)),C=()=>{m(nc({...g,quantity:r})),te.success(`${g.name} додано в кошик!`)},k=(_,E)=>{E.stopPropagation(),m(ac(_)),S?te.warning(`${_.name} видалено з обраного`):te.info(`${_.name} додано в обране`)};return h?y.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:y.jsx(Yh,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):g?y.jsxs(hv,{children:[" ",y.jsx(Ra,{autoClose:1500}),y.jsxs(z$,{children:[y.jsx(Pe,{to:"/",children:"Головна"})," / ",y.jsx(Pe,{to:"/catalog",children:"Каталог"})," /"," ",g.name]}),y.jsxs(V$,{children:[y.jsxs(B$,{children:[y.jsx(U$,{src:l,alt:g.name,onClick:f}),y.jsx(H$,{children:g.images.map(_=>{const E=_.url;return y.jsx(W$,{src:E,onClick:()=>s(E),style:{cursor:"pointer",opacity:l===E?1:.4}},_.id)})})]}),y.jsx(wL,{open:u,close:()=>c(!1),index:d,slides:w,controller:{closeOnBackdropClick:!0},on:{view:({index:_})=>{var E,M;p(_),(M=(E=g==null?void 0:g.images)==null?void 0:E[_])!=null&&M.url&&s(g.images[_].url)}},plugins:[FL],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),y.jsxs(G$,{children:[y.jsx(Y$,{children:g.name}),y.jsx(X$,{children:y.jsx(q$,{children:"● Новий товар"})}),y.jsxs(K$,{children:[y.jsx(Z$,{children:y.jsxs(Q$,{children:[g.price.toLocaleString()," грн"]})}),y.jsxs(J$,{children:[y.jsxs(eD,{children:[y.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),y.jsx("span",{children:r}),y.jsx("button",{onClick:()=>i(r+1),children:"+"})]}),y.jsxs(tD,{onClick:C,children:[" ",y.jsx(wu,{size:25}),y.jsx("span",{children:"В КОШИК"})]}),y.jsxs(lD,{$active:S,onClick:_=>k(g,_),children:[y.jsxs(uD,{$active:S,children:[" ",y.jsx("use",{href:`${cn}#icon-heart`})]}),y.jsx("span",{children:"В ОБРАНЕ"})]})]})]}),y.jsxs(rD,{children:[y.jsxs("p",{children:[y.jsx("strong",{children:"Ваше місто:"})," Київ"]}),y.jsx("p",{children:"🚚 Доставка по Україні (Розрахувати вартість)"})]})]})]}),y.jsxs(iD,{children:[y.jsxs(oD,{children:[y.jsx(mv,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),y.jsx(mv,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"})]}),y.jsxs(aD,{children:[o==="description"&&y.jsx(sD,{children:g.description}),o==="attributes"&&y.jsxs(nD,{children:[y.jsxs(hs,{children:[y.jsx("span",{children:"Розміри, мм"})," ",y.jsx("b",{children:g.size||""})]}),y.jsxs(hs,{children:[y.jsx("span",{children:"Тип"})," ",y.jsx("b",{children:g.type||""})]}),y.jsxs(hs,{children:[y.jsx("span",{children:"Колір"})," ",y.jsx("b",{children:g.color||""})]}),y.jsxs(hs,{children:[y.jsx("span",{children:"Колір"})," ",y.jsx("b",{children:g.color||""})]})]})]})]})]}):y.jsx(hv,{children:"Товар не знайдено"})},zL=T.div`
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

  
`,VL=T.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,BL=T.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,UL=T.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,HL=T.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,WL=T.div`
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
`,GL=T.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,YL=T.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,XL=T.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,qL=T.div`

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
`;const KL=T.div`
  text-align: right;
 
`,ZL=T.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,QL=T.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,JL=T.div`

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
`,eR=T.div`
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
`,tR=T(Pe)`
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
`,nR=T.button`
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
`;const rR=T.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,iR=T.div`
   
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
`;const oR=T.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,aR=T.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,sR=T.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,lR=T.button`
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
`,uR=()=>y.jsxs(y.Fragment,{children:[y.jsx(rR,{children:"Головна / Кошик"}),y.jsxs(iR,{children:[y.jsx(oR,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),y.jsx(aR,{children:"Ваш кошик порожній"}),y.jsx(sR,{children:"Ви ще не додали жодного товару в кошик"}),y.jsx(lR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]}),cR=T.div`
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
`,dR=({item:e})=>{const t=eo();return y.jsxs(cR,{children:[y.jsx("button",{onClick:()=>t(ej(e.id)),children:"-"}),y.jsx("span",{children:e.quantity}),y.jsx("button",{onClick:()=>t(J5(e.id)),children:"+"})]})},fR=()=>{const e=eo(),[t,n]=b.useState([]),r=Nn(p=>p.cart.items),o=Nn(p=>p.cart.items).reduce((p,h)=>p+h.quantity,0),a=r.reduce((p,h)=>p+h.price*(h.quantity||1),0),l=Nn(p=>p.favorites.items),s=r.length===0,u=(p,h)=>{h.stopPropagation(),console.log(p);const v=l.some(g=>g.id===p.id);e(ac(p)),v?te.warning(`${p.name} видалено з обраного`):te.info(`${p.name} додано в обране`)},c=p=>{n(h=>[...h,p.id]),setTimeout(()=>{e(K5(p)),n(h=>h.filter(v=>v!==p.id))},300)},d=()=>{e(Z5())};return y.jsx(y.Fragment,{children:s?y.jsx(uR,{}):y.jsxs(zL,{children:[y.jsx(Ra,{autoClose:1500}),y.jsxs(VL,{children:[" ",y.jsx(Pe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",y.jsx(Pe,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),y.jsx(BL,{children:"Кошик"}),y.jsxs(UL,{children:[y.jsx(HL,{children:r.map((p,h)=>{var g,w;console.log(p);const v=l.some(f=>f.id===p.id);return y.jsxs(WL,{className:t.includes(p.id)?"removing":"",children:[y.jsx(GL,{src:((w=(g=p.images)==null?void 0:g[0])==null?void 0:w.url)||"/nofoto.png",alt:p.name,onError:f=>{f.currentTarget.onerror=null,f.currentTarget.src=wa}}),y.jsx(YL,{children:y.jsx("h3",{children:p.name})}),y.jsxs(XL,{children:[y.jsx(dR,{item:{...p,quantity:p.quantity||1}}),y.jsx(KL,{children:y.jsxs("div",{className:"current-price",children:[(p.price*(p.quantity||1)).toLocaleString()," грн"]})})]}),y.jsxs(qL,{children:[y.jsx(QL,{onClick:f=>u(p,f),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:y.jsx(xb,{size:22,fill:v?"#ff4d4f":"none",color:v?"#ff4d4f":"#999"})}),y.jsx(ZL,{onClick:()=>c(p),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:y.jsx(wb,{size:22})})]})]},`${p.id}-${h}`)})}),y.jsxs(JL,{children:[y.jsxs(eR,{children:[y.jsx("span",{children:"Всього в обраному:"}),y.jsxs("strong",{children:[o," шт."]}),y.jsx("span",{children:"На суму:"}),y.jsxs("strong",{children:[a," грн"]})]}),y.jsx(tR,{to:"/checkout",children:"Оформити замовлення"}),y.jsx(nR,{onClick:d,children:"Oчистити кошик"})]})]})]})})},pR=T.div`
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

  
  
`,hR=T.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,mR=T.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,gR=T.div`
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
`,vR=T.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,yR=T.div`
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
`;const xR=T.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,bR=T.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,wR=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
   @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,SR=T.p`
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
`,_R=T.div`
  display: flex;
  gap: 16px;
`,jv=T.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  padding: 8px;
  
`,ER=T.div`
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
`,CR=T.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,kR=T.button`
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
`,TR=T.button`
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
`,PR=T.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,OR=T.div`
   
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
`;const MR=T.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;T.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const IR=T.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,jR=T.button`
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
`,$R=()=>y.jsxs(y.Fragment,{children:[y.jsx(PR,{children:"Головна / Обране"}),y.jsxs(OR,{children:[y.jsx(MR,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),y.jsx(IR,{children:"Ви ще не додали жодного товару в обране"}),y.jsx(jR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),DR=()=>{const e=eo(),t=Nn(c=>c.favorites.items),[n,r]=b.useState([]),i=c=>{e(nc(c)),te.success(`${c.name} додано в кошик!`)},o=()=>{e(Q5(t)),te.success("Товари додано в кошик!")};console.log(t);const a=t.reduce((c,d)=>c+d.price*(d.quantity||1),0),l=(c,d)=>{d.stopPropagation();const p=t.some(h=>h.id===c.id);r(h=>[...h,c.id]),setTimeout(()=>{e(ac(c)),r(h=>h.filter(v=>v!==c.id))},300),p?te.warning(`${c.name} видалено з обраного`):te.info(`${c.name} додано в обране`)},s=()=>{e(R$())},u=t.length===0;return y.jsx(y.Fragment,{children:u?y.jsx($R,{}):y.jsxs(pR,{children:[y.jsx(Ra,{autoClose:1500}),y.jsxs(hR,{children:[" ",y.jsx(Pe,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",y.jsx(Pe,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),y.jsx(mR,{children:"Обране"}),y.jsxs(gR,{children:[y.jsx(vR,{children:t.map(c=>{var d,p;return y.jsxs(yR,{className:n.includes(c.id)?"removing":"",children:[y.jsx(xR,{src:((p=(d=c.images)==null?void 0:d[0])==null?void 0:p.url)||"/nofoto.png",alt:c.name,onError:h=>{h.currentTarget.onerror=null,h.currentTarget.src="/nofoto.png"}}),y.jsx(bR,{children:c.name}),y.jsxs(wR,{children:[y.jsxs(SR,{children:[c.price," грн"]}),y.jsxs(_R,{children:[y.jsx(jv,{onClick:()=>i(c),children:y.jsx(wu,{size:30})}),y.jsx(jv,{onClick:h=>l(c,h),children:y.jsx(wb,{size:30})})]})]})]},c.id)})}),y.jsxs(ER,{children:[y.jsxs(CR,{children:[y.jsx("span",{children:"Всього в обраному:"}),y.jsxs("strong",{children:[t.length," шт."]}),y.jsx("span",{children:"На суму:"}),y.jsxs("strong",{children:[a," грн"]})]}),y.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),y.jsx(kR,{onClick:()=>o(),children:"Додати все до кошика"}),y.jsx(TR,{onClick:s,children:"Очистити обрані"})]})]})]})})},LR=T.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,RR=T.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,AR=T.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,FR=T.h1`
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
`;const NR=({title:e,children:t,breadcrumbPath:n})=>y.jsxs(LR,{children:[y.jsxs(RR,{children:["Головна / ",n]}),y.jsxs(AR,{children:[y.jsx(FR,{children:e}),t]})]}),$v=T.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,Dv=T.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,Lv=T.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,Rv=T.ul`
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
`,zR=()=>y.jsxs(NR,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[y.jsxs($v,{children:[y.jsx(Dv,{children:"Способи доставки"}),y.jsx(Lv,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),y.jsxs(Rv,{children:[y.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),y.jsx("li",{children:"Самовивіз з нашого магазину"}),y.jsx("li",{children:"Укрпошта"})]})]}),y.jsxs($v,{children:[y.jsx(Dv,{children:"Варіанти оплати"}),y.jsx(Lv,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),y.jsxs(Rv,{children:[y.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),y.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),y.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function Qr(e){"@babel/helpers - typeof";return Qr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qr(e)}function VR(e,t){if(Qr(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Qr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function s_(e){var t=VR(e,"string");return Qr(t)==="symbol"?t:String(t)}function jo(e,t,n){return t=s_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Av(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Av(Object(n),!0).forEach(function(r){jo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Av(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function BR(e){if(Array.isArray(e))return e}function UR(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(c){u=!0,i=c}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function bp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l_(e,t){if(e){if(typeof e=="string")return bp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bp(e,t)}}function HR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vn(e,t){return BR(e)||UR(e,t)||l_(e,t)||HR()}function WR(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jn(e,t){if(e==null)return{};var n=WR(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var GR=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function YR(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,c=e.onInputChange,d=e.onMenuClose,p=e.onMenuOpen,h=e.value,v=Jn(e,GR),g=b.useState(l!==void 0?l:n),w=Vn(g,2),f=w[0],m=w[1],x=b.useState(s!==void 0?s:i),S=Vn(x,2),C=S[0],k=S[1],_=b.useState(h!==void 0?h:a),E=Vn(_,2),M=E[0],I=E[1],$=b.useCallback(function(P,D){typeof u=="function"&&u(P,D),I(P)},[u]),O=b.useCallback(function(P,D){var N;typeof c=="function"&&(N=c(P,D)),m(N!==void 0?N:P)},[c]),j=b.useCallback(function(){typeof p=="function"&&p(),k(!0)},[p]),R=b.useCallback(function(){typeof d=="function"&&d(),k(!1)},[d]),L=l!==void 0?l:f,F=s!==void 0?s:C,A=h!==void 0?h:M;return X(X({},v),{},{inputValue:L,menuIsOpen:F,onChange:$,onInputChange:O,onMenuClose:R,onMenuOpen:j,value:A})}function XR(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,s_(r.key),r)}}function qR(e,t,n){return t&&Fv(e.prototype,t),n&&Fv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function wp(e,t){return wp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},wp(e,t)}function KR(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&wp(e,t)}function Ul(e){return Ul=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ul(e)}function ZR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function QR(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function JR(e,t){if(t&&(Qr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return QR(e)}function eA(e){var t=ZR();return function(){var r=Ul(e),i;if(t){var o=Ul(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return JR(this,i)}}function tA(e){if(Array.isArray(e))return bp(e)}function nA(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _m(e){return tA(e)||nA(e)||l_(e)||rA()}function iA(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const oA=Math.min,aA=Math.max,Hl=Math.round,ms=Math.floor,Wl=e=>({x:e,y:e});function sA(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function fc(){return typeof window<"u"}function u_(e){return d_(e)?(e.nodeName||"").toLowerCase():"#document"}function ln(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function c_(e){var t;return(t=(d_(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function d_(e){return fc()?e instanceof Node||e instanceof ln(e).Node:!1}function Sp(e){return fc()?e instanceof Element||e instanceof ln(e).Element:!1}function Em(e){return fc()?e instanceof HTMLElement||e instanceof ln(e).HTMLElement:!1}function Nv(e){return!fc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ln(e).ShadowRoot}function f_(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Cm(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Cd;function lA(){return Cd==null&&(Cd=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Cd}function uA(e){return/^(html|body|#document)$/.test(u_(e))}function Cm(e){return ln(e).getComputedStyle(e)}function cA(e){if(u_(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Nv(e)&&e.host||c_(e);return Nv(t)?t.host:t}function p_(e){const t=cA(e);return uA(t)?e.ownerDocument?e.ownerDocument.body:e.body:Em(t)&&f_(t)?t:p_(t)}function Gl(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=p_(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=ln(i);if(o){const l=_p(a);return t.concat(a,a.visualViewport||[],f_(i)?i:[],l&&n?Gl(l):[])}else return t.concat(i,Gl(i,[],n))}function _p(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function dA(e){const t=Cm(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Em(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Hl(n)!==o||Hl(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function km(e){return Sp(e)?e:e.contextElement}function kd(e){const t=km(e);if(!Em(t))return Wl(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=dA(t);let a=(o?Hl(n.width):n.width)/r,l=(o?Hl(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const fA=Wl(0);function pA(e){const t=ln(e);return!lA()||!t.visualViewport?fA:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function hA(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==ln(e)?!1:t}function zv(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=km(e);let a=Wl(1);t&&(r?Sp(r)&&(a=kd(r)):a=kd(e));const l=hA(o,n,r)?pA(o):Wl(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,c=i.width/a.x,d=i.height/a.y;if(o){const p=ln(o),h=r&&Sp(r)?ln(r):r;let v=p,g=_p(v);for(;g&&r&&h!==v;){const w=kd(g),f=g.getBoundingClientRect(),m=Cm(g),x=f.left+(g.clientLeft+parseFloat(m.paddingLeft))*w.x,S=f.top+(g.clientTop+parseFloat(m.paddingTop))*w.y;s*=w.x,u*=w.y,c*=w.x,d*=w.y,s+=x,u+=S,v=ln(g),g=_p(v)}}return sA({width:c,height:d,x:s,y:u})}function h_(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function mA(e,t){let n=null,r;const i=c_(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:c,top:d,width:p,height:h}=u;if(l||t(),!p||!h)return;const v=ms(d),g=ms(i.clientWidth-(c+p)),w=ms(i.clientHeight-(d+h)),f=ms(c),x={rootMargin:-v+"px "+-g+"px "+-w+"px "+-f+"px",threshold:aA(0,oA(1,s))||1};let S=!0;function C(k){const _=k[0].intersectionRatio;if(_!==s){if(!S)return a();_?a(!1,_):r=setTimeout(()=>{a(!1,1e-7)},1e3)}_===1&&!h_(u,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(C,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,x)}n.observe(e)}return a(!0),o}function gA(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=km(e),c=i||o?[...u?Gl(u):[],...t?Gl(t):[]]:[];c.forEach(f=>{i&&f.addEventListener("scroll",n,{passive:!0}),o&&f.addEventListener("resize",n)});const d=u&&l?mA(u,n):null;let p=-1,h=null;a&&(h=new ResizeObserver(f=>{let[m]=f;m&&m.target===u&&h&&t&&(h.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var x;(x=h)==null||x.observe(t)})),n()}),u&&!s&&h.observe(u),t&&h.observe(t));let v,g=s?zv(e):null;s&&w();function w(){const f=zv(e);g&&!h_(g,f)&&n(),g=f,v=requestAnimationFrame(w)}return n(),()=>{var f;c.forEach(m=>{i&&m.removeEventListener("scroll",n),o&&m.removeEventListener("resize",n)}),d==null||d(),(f=h)==null||f.disconnect(),h=null,s&&cancelAnimationFrame(v)}}var Ep=b.useLayoutEffect,vA=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Yl=function(){};function yA(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function xA(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(yA(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Vv=function(t){return PA(t)?t.filter(Boolean):Qr(t)==="object"&&t!==null?[t]:[]},m_=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=Jn(t,vA);return X({},n)},ke=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function pc(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function bA(e){return pc(e)?window.innerHeight:e.clientHeight}function g_(e){return pc(e)?window.pageYOffset:e.scrollTop}function Xl(e,t){if(pc(e)){window.scrollTo(0,t);return}e.scrollTop=t}function wA(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function SA(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function gs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Yl,i=g_(e),o=t-i,a=10,l=0;function s(){l+=a;var u=SA(l,i,o,n);Xl(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function Bv(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?Xl(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&Xl(e,Math.max(t.offsetTop-i,0))}function _A(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Uv(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function EA(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var v_=!1,CA={get passive(){return v_=!0}},vs=typeof window<"u"?window:{};vs.addEventListener&&vs.removeEventListener&&(vs.addEventListener("p",Yl,CA),vs.removeEventListener("p",Yl,!1));var kA=v_;function TA(e){return e!=null}function PA(e){return Array.isArray(e)}function ys(e,t,n){return e?t:n}var OA=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Vn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Vn(l,2),u=s[0],c=s[1];return a[u]=c,a},{})},MA=["children","innerProps"],IA=["children","innerProps"];function jA(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=wA(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var c=s.getBoundingClientRect(),d=c.height,p=n.getBoundingClientRect(),h=p.bottom,v=p.height,g=p.top,w=n.offsetParent.getBoundingClientRect(),f=w.top,m=a?window.innerHeight:bA(s),x=g_(s),S=parseInt(getComputedStyle(n).marginBottom,10),C=parseInt(getComputedStyle(n).marginTop,10),k=f-C,_=m-g,E=k+x,M=d-x-g,I=h-m+x+S,$=x+g-C,O=160;switch(i){case"auto":case"bottom":if(_>=v)return{placement:"bottom",maxHeight:t};if(M>=v&&!a)return o&&gs(s,I,O),{placement:"bottom",maxHeight:t};if(!a&&M>=r||a&&_>=r){o&&gs(s,I,O);var j=a?_-S:M-S;return{placement:"bottom",maxHeight:j}}if(i==="auto"||a){var R=t,L=a?k:E;return L>=r&&(R=Math.min(L-S-l,t)),{placement:"top",maxHeight:R}}if(i==="bottom")return o&&Xl(s,I),{placement:"bottom",maxHeight:t};break;case"top":if(k>=v)return{placement:"top",maxHeight:t};if(E>=v&&!a)return o&&gs(s,$,O),{placement:"top",maxHeight:t};if(!a&&E>=r||a&&k>=r){var F=t;return(!a&&E>=r||a&&k>=r)&&(F=a?k-C:E-C),o&&gs(s,$,O),{placement:"top",maxHeight:F}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function $A(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var y_=function(t){return t==="auto"?"bottom":t},DA=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return X((r={label:"menu"},jo(r,$A(i),"100%"),jo(r,"position","absolute"),jo(r,"width","100%"),jo(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},x_=b.createContext(null),LA=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=b.useContext(x_)||{},c=u.setPortalPlacement,d=b.useRef(null),p=b.useState(i),h=Vn(p,2),v=h[0],g=h[1],w=b.useState(null),f=Vn(w,2),m=f[0],x=f[1],S=s.spacing.controlHeight;return Ep(function(){var C=d.current;if(C){var k=a==="fixed",_=l&&!k,E=jA({maxHeight:i,menuEl:C,minHeight:r,placement:o,shouldScroll:_,isFixedPosition:k,controlHeight:S});g(E.maxHeight),x(E.placement),c==null||c(E.placement)}},[i,o,a,l,r,c,S]),n({ref:d,placerProps:X(X({},t),{},{placement:m||y_(o),maxHeight:v})})},RA=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Y("div",q({},ke(t,"menu",{menu:!0}),{ref:r},i),n)},AA=RA,FA=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return X({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},NA=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Y("div",q({},ke(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},b_=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return X({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},zA=b_,VA=b_,BA=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=Jn(t,MA);return Y("div",q({},ke(X(X({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},UA=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=Jn(t,IA);return Y("div",q({},ke(X(X({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},HA=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},WA=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=b.useRef(null),u=b.useRef(null),c=b.useState(y_(a)),d=Vn(c,2),p=d[0],h=d[1],v=b.useMemo(function(){return{setPortalPlacement:h}},[]),g=b.useState(null),w=Vn(g,2),f=w[0],m=w[1],x=b.useCallback(function(){if(i){var _=_A(i),E=l==="fixed"?0:window.pageYOffset,M=_[p]+E;(M!==(f==null?void 0:f.offset)||_.left!==(f==null?void 0:f.rect.left)||_.width!==(f==null?void 0:f.rect.width))&&m({offset:M,rect:_})}},[i,l,p,f==null?void 0:f.offset,f==null?void 0:f.rect.left,f==null?void 0:f.rect.width]);Ep(function(){x()},[x]);var S=b.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=gA(i,s.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);Ep(function(){S()},[S]);var C=b.useCallback(function(_){s.current=_,S()},[S]);if(!n&&l!=="fixed"||!f)return null;var k=Y("div",q({ref:C},ke(X(X({},t),{},{offset:f.offset,position:l,rect:f.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Y(x_.Provider,{value:v},n?mu.createPortal(k,n):k)},GA=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},YA=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Y("div",q({},ke(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},XA=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return X({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},qA=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Y("div",q({},ke(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},KA=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},ZA=function(t){var n=t.children,r=t.innerProps;return Y("div",q({},ke(t,"indicatorsContainer",{indicators:!0}),r),n)},Hv,QA=["size"],JA=["innerProps","isRtl","size"],e6={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},w_=function(t){var n=t.size,r=Jn(t,QA);return Y("svg",q({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:e6},r))},Tm=function(t){return Y(w_,q({size:20},t),Y("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},S_=function(t){return Y(w_,q({size:20},t),Y("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},__=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return X({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},t6=__,n6=function(t){var n=t.children,r=t.innerProps;return Y("div",q({},ke(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Y(S_,null))},r6=__,i6=function(t){var n=t.children,r=t.innerProps;return Y("div",q({},ke(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Y(Tm,null))},o6=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return X({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},a6=function(t){var n=t.innerProps;return Y("span",q({},n,ke(t,"indicatorSeparator",{"indicator-separator":!0})))},s6=GO(Hv||(Hv=iA([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),l6=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return X({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Td=function(t){var n=t.delay,r=t.offset;return Y("span",{css:Gh({animation:"".concat(s6," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},u6=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=Jn(t,JA);return Y("div",q({},ke(X(X({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Y(Td,{delay:0,offset:r}),Y(Td,{delay:160,offset:!0}),Y(Td,{delay:320,offset:!r}))},c6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return X({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},d6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Y("div",q({ref:o},ke(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},f6=d6,p6=["data"],h6=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},m6=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,c=t.theme,d=t.selectProps;return Y("div",q({},ke(t,"group",{group:!0}),s),Y(a,q({},l,{selectProps:d,theme:c,getStyles:i,getClassNames:o,cx:r}),u),Y("div",null,n))},g6=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return X({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},v6=function(t){var n=m_(t);n.data;var r=Jn(n,p6);return Y("div",q({},ke(t,"groupHeading",{"group-heading":!0}),r))},y6=m6,x6=["innerRef","isDisabled","isHidden","inputClassName"],b6=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return X(X({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},w6),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},E_={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},w6={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":X({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},E_)},S6=function(t){return X({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},E_)},_6=function(t){var n=t.cx,r=t.value,i=m_(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=Jn(i,x6);return Y("div",q({},ke(t,"input",{"input-container":!0}),{"data-value":r||""}),Y("input",q({className:n({input:!0},s),ref:o,style:S6(l),disabled:a},u)))},E6=_6,C6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return X({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},k6=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return X({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},T6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return X({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},C_=function(t){var n=t.children,r=t.innerProps;return Y("div",r,n)},P6=C_,O6=C_;function M6(e){var t=e.children,n=e.innerProps;return Y("div",q({role:"button"},n),t||Y(Tm,{size:14}))}var I6=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,c=r.Label,d=r.Remove;return Y(u,{data:i,innerProps:X(X({},ke(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Y(c,{data:i,innerProps:X({},ke(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Y(d,{data:i,innerProps:X(X({},ke(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},j6=I6,$6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return X({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},D6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Y("div",q({},ke(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},L6=D6,R6=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return X({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},A6=function(t){var n=t.children,r=t.innerProps;return Y("div",q({},ke(t,"placeholder",{placeholder:!0}),r),n)},F6=A6,N6=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return X({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},z6=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Y("div",q({},ke(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},V6=z6,B6={ClearIndicator:i6,Control:f6,DropdownIndicator:n6,DownChevron:S_,CrossIcon:Tm,Group:y6,GroupHeading:v6,IndicatorsContainer:ZA,IndicatorSeparator:a6,Input:E6,LoadingIndicator:u6,Menu:AA,MenuList:NA,MenuPortal:WA,LoadingMessage:UA,NoOptionsMessage:BA,MultiValue:j6,MultiValueContainer:P6,MultiValueLabel:O6,MultiValueRemove:M6,Option:L6,Placeholder:F6,SelectContainer:YA,SingleValue:V6,ValueContainer:qA},U6=function(t){return X(X({},B6),t.components)},Wv=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function H6(e,t){return!!(e===t||Wv(e)&&Wv(t))}function W6(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!H6(e[n],t[n]))return!1;return!0}function G6(e,t){t===void 0&&(t=W6);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var Y6={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},X6=function(t){return Y("span",q({css:Y6},t))},Gv=X6,q6={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,c=t.isAppleDevice,d=function(g,w){return g&&g.length?"".concat(g.indexOf(w)+1," of ").concat(g.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(d(l,r),".");if(n==="menu"&&c){var p=s?" disabled":"",h="".concat(u?" selected":"").concat(p);return"".concat(a).concat(h,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},K6=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,c=t.isAppleDevice,d=s.ariaLiveMessages,p=s.getOptionLabel,h=s.inputValue,v=s.isMulti,g=s.isOptionDisabled,w=s.isSearchable,f=s.menuIsOpen,m=s.options,x=s.screenReaderStatus,S=s.tabSelectsValue,C=s.isLoading,k=s["aria-label"],_=s["aria-live"],E=b.useMemo(function(){return X(X({},q6),d||{})},[d]),M=b.useMemo(function(){var L="";if(n&&E.onChange){var F=n.option,A=n.options,P=n.removedValue,D=n.removedValues,N=n.value,B=function(we){return Array.isArray(we)?null:we},z=P||F||B(N),G=z?p(z):"",Q=A||D||void 0,Z=Q?Q.map(p):[],K=X({isDisabled:z&&g(z,l),label:G,labels:Z},n);L=E.onChange(K)}return L},[n,E,g,l,p]),I=b.useMemo(function(){var L="",F=r||i,A=!!(r&&l&&l.includes(r));if(F&&E.onFocus){var P={focused:F,label:p(F),isDisabled:g(F,l),isSelected:A,options:o,context:F===r?"menu":"value",selectValue:l,isAppleDevice:c};L=E.onFocus(P)}return L},[r,i,p,g,E,o,l,c]),$=b.useMemo(function(){var L="";if(f&&m.length&&!C&&E.onFilter){var F=x({count:o.length});L=E.onFilter({inputValue:h,resultsMessage:F})}return L},[o,h,f,E,m,x,C]),O=(n==null?void 0:n.action)==="initial-input-focus",j=b.useMemo(function(){var L="";if(E.guidance){var F=i?"value":f?"menu":"input";L=E.guidance({"aria-label":k,context:F,isDisabled:r&&g(r,l),isMulti:v,isSearchable:w,tabSelectsValue:S,isInitialFocus:O})}return L},[k,r,i,v,g,w,f,E,l,S,O]),R=Y(b.Fragment,null,Y("span",{id:"aria-selection"},M),Y("span",{id:"aria-focused"},I),Y("span",{id:"aria-results"},$),Y("span",{id:"aria-guidance"},j));return Y(b.Fragment,null,Y(Gv,{id:u},O&&R),Y(Gv,{"aria-live":_,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!O&&R))},Z6=K6,Cp=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Q6=new RegExp("["+Cp.map(function(e){return e.letters}).join("")+"]","g"),k_={};for(var Pd=0;Pd<Cp.length;Pd++)for(var Od=Cp[Pd],Md=0;Md<Od.letters.length;Md++)k_[Od.letters[Md]]=Od.base;var T_=function(t){return t.replace(Q6,function(n){return k_[n]})},J6=G6(T_),Yv=function(t){return t.replace(/^\s+|\s+$/g,"")},e8=function(t){return"".concat(t.label," ").concat(t.value)},t8=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=X({ignoreCase:!0,ignoreAccents:!0,stringify:e8,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,c=s?Yv(r):r,d=s?Yv(l(n)):l(n);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),a&&(c=J6(c),d=T_(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},n8=["innerRef"];function r8(e){var t=e.innerRef,n=Jn(e,n8),r=OA(n,"onExited","in","enter","exit","appear");return Y("input",q({ref:t},r,{css:Gh({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var i8=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function o8(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=b.useRef(!1),l=b.useRef(!1),s=b.useRef(0),u=b.useRef(null),c=b.useCallback(function(w,f){if(u.current!==null){var m=u.current,x=m.scrollTop,S=m.scrollHeight,C=m.clientHeight,k=u.current,_=f>0,E=S-C-x,M=!1;E>f&&a.current&&(r&&r(w),a.current=!1),_&&l.current&&(o&&o(w),l.current=!1),_&&f>E?(n&&!a.current&&n(w),k.scrollTop=S,M=!0,a.current=!0):!_&&-f>x&&(i&&!l.current&&i(w),k.scrollTop=0,M=!0,l.current=!0),M&&i8(w)}},[n,r,i,o]),d=b.useCallback(function(w){c(w,w.deltaY)},[c]),p=b.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),h=b.useCallback(function(w){var f=s.current-w.changedTouches[0].clientY;c(w,f)},[c]),v=b.useCallback(function(w){if(w){var f=kA?{passive:!1}:!1;w.addEventListener("wheel",d,f),w.addEventListener("touchstart",p,f),w.addEventListener("touchmove",h,f)}},[h,p,d]),g=b.useCallback(function(w){w&&(w.removeEventListener("wheel",d,!1),w.removeEventListener("touchstart",p,!1),w.removeEventListener("touchmove",h,!1))},[h,p,d]);return b.useEffect(function(){if(t){var w=u.current;return v(w),function(){g(w)}}},[t,v,g]),function(w){u.current=w}}var Xv=["boxSizing","height","overflow","paddingRight","position"],qv={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Kv(e){e.cancelable&&e.preventDefault()}function Zv(e){e.stopPropagation()}function Qv(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function Jv(){return"ontouchstart"in window||navigator.maxTouchPoints}var e1=!!(typeof window<"u"&&window.document&&window.document.createElement),Eo=0,si={capture:!1,passive:!1};function a8(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),o=b.useRef(null),a=b.useCallback(function(s){if(e1){var u=document.body,c=u&&u.style;if(r&&Xv.forEach(function(v){var g=c&&c[v];i.current[v]=g}),r&&Eo<1){var d=parseInt(i.current.paddingRight,10)||0,p=document.body?document.body.clientWidth:0,h=window.innerWidth-p+d||0;Object.keys(qv).forEach(function(v){var g=qv[v];c&&(c[v]=g)}),c&&(c.paddingRight="".concat(h,"px"))}u&&Jv()&&(u.addEventListener("touchmove",Kv,si),s&&(s.addEventListener("touchstart",Qv,si),s.addEventListener("touchmove",Zv,si))),Eo+=1}},[r]),l=b.useCallback(function(s){if(e1){var u=document.body,c=u&&u.style;Eo=Math.max(Eo-1,0),r&&Eo<1&&Xv.forEach(function(d){var p=i.current[d];c&&(c[d]=p)}),u&&Jv()&&(u.removeEventListener("touchmove",Kv,si),s&&(s.removeEventListener("touchstart",Qv,si),s.removeEventListener("touchmove",Zv,si)))}},[r]);return b.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var s8=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},l8={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function u8(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=o8({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),c=a8({isEnabled:n}),d=function(h){u(h),c(h)};return Y(b.Fragment,null,n&&Y("div",{onClick:s8,css:l8}),t(d))}var c8={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},d8=function(t){var n=t.name,r=t.onFocus;return Y("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:c8,value:"",onChange:function(){}})},f8=d8;function Pm(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function p8(){return Pm(/^iPhone/i)}function P_(){return Pm(/^Mac/i)}function h8(){return Pm(/^iPad/i)||P_()&&navigator.maxTouchPoints>1}function m8(){return p8()||h8()}function g8(){return P_()||m8()}var v8=function(t){return t.label},y8=function(t){return t.label},x8=function(t){return t.value},b8=function(t){return!!t.isDisabled},w8={clearIndicator:r6,container:GA,control:c6,dropdownIndicator:t6,group:h6,groupHeading:g6,indicatorsContainer:KA,indicatorSeparator:o6,input:b6,loadingIndicator:l6,loadingMessage:VA,menu:DA,menuList:FA,menuPortal:HA,multiValue:C6,multiValueLabel:k6,multiValueRemove:T6,noOptionsMessage:zA,option:$6,placeholder:R6,singleValue:N6,valueContainer:XA},S8={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},_8=4,O_=4,E8=38,C8=O_*2,k8={baseUnit:O_,controlHeight:E8,menuGutter:C8},Id={borderRadius:_8,colors:S8,spacing:k8},T8={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Uv(),captureMenuScroll:!Uv(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:t8(),formatGroupLabel:v8,getOptionLabel:y8,getOptionValue:x8,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:b8,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!EA(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function t1(e,t,n,r){var i=j_(e,t,n),o=$_(e,t,n),a=I_(e,t),l=ql(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function Ys(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return t1(e,a,t,l)}).filter(function(a){return r1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=t1(e,n,t,r);return r1(e,o)?o:void 0}).filter(TA)}function M_(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,_m(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function n1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,_m(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function P8(e,t){return M_(Ys(e,t))}function r1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!L_(e)||!o)&&D_(e,{label:a,value:l,data:i},r)}function O8(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function M8(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var jd=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},I_=function(t,n){return t.getOptionLabel(n)},ql=function(t,n){return t.getOptionValue(n)};function j_(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function $_(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=ql(e,t);return n.some(function(i){return ql(e,i)===r})}function D_(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var L_=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},I8=1,R_=function(e){KR(n,e);var t=eA(n);function n(r){var i;if(XR(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var c=i.props,d=c.onChange,p=c.name;u.name=p,i.ariaOnChange(s,u),d(s,u)},i.setValue=function(s,u,c){var d=i.props,p=d.closeMenuOnSelect,h=d.isMulti,v=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:v}),p&&(i.setState({inputIsHiddenAfterUpdate:!h}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:c})},i.selectOption=function(s){var u=i.props,c=u.blurInputOnSelect,d=u.isMulti,p=u.name,h=i.state.selectValue,v=d&&i.isOptionSelected(s,h),g=i.isOptionDisabled(s,h);if(v){var w=i.getOptionValue(s);i.setValue(h.filter(function(f){return i.getOptionValue(f)!==w}),"deselect-option",s)}else if(!g)d?i.setValue([].concat(_m(h),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:p});return}c&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,c=i.state.selectValue,d=i.getOptionValue(s),p=c.filter(function(v){return i.getOptionValue(v)!==d}),h=ys(u,p,p[0]||null);i.onChange(h,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(ys(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),p=ys(s,d,d[0]||null);c&&i.onChange(p,{action:"pop-value",removedValue:c})},i.getFocusedOptionId=function(s){return jd(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return n1(Ys(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return xA.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return I_(i.props,s)},i.getOptionValue=function(s){return ql(i.props,s)},i.getStyles=function(s,u){var c=i.props.unstyled,d=w8[s](u,c);d.boxSizing="border-box";var p=i.props.styles[s];return p?p(d,u):d},i.getClassNames=function(s,u){var c,d;return(c=(d=i.props.classNames)[s])===null||c===void 0?void 0:c.call(d,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return U6(i.props)},i.buildCategorizedOptions=function(){return Ys(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return M_(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:X({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,c=u.isMulti,d=u.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!c}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&pc(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,c=u&&u.item(0);c&&(i.initialTouchX=c.clientX,i.initialTouchY=c.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-i.initialTouchX),p=Math.abs(c.clientY-i.initialTouchY),h=5;i.userIsDragging=d>h||p>h}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,c=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(c,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),c=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:c>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return L_(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,c=u.isMulti,d=u.backspaceRemovesValue,p=u.escapeClearsValue,h=u.inputValue,v=u.isClearable,g=u.isDisabled,w=u.menuIsOpen,f=u.onKeyDown,m=u.tabSelectsValue,x=u.openMenuOnFocus,S=i.state,C=S.focusedOption,k=S.focusedValue,_=S.selectValue;if(!g&&!(typeof f=="function"&&(f(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!c||h)return;i.focusValue("previous");break;case"ArrowRight":if(!c||h)return;i.focusValue("next");break;case"Delete":case"Backspace":if(h)return;if(k)i.removeValue(k);else{if(!d)return;c?i.popValue():v&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!m||!C||x&&i.isOptionSelected(C,_))return;i.selectOption(C);break;case"Enter":if(s.keyCode===229)break;if(w){if(!C||i.isComposing)return;i.selectOption(C);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:h}),i.onMenuClose()):v&&p&&i.clearValue();break;case" ":if(h)return;if(!w){i.openMenu("first");break}if(!C)return;i.selectOption(C);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++I8),i.state.selectValue=Vv(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=jd(o,a[l])}return i}return qR(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Bv(this.menuListRef,this.focusedOptionRef),g8()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Bv(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),c=i==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,c=-1;if(a.length){switch(i){case"previous":s===0?c=0:s===-1?c=u:c=s-1;break;case"next":s>-1&&s<u&&(c=s+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:a[c]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Id):X(X({},Id),this.props.theme):Id}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,p=d.isMulti,h=d.isRtl,v=d.options,g=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:g,isMulti:p,isRtl:h,options:v,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return j_(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return $_(this.props,i,o)}},{key:"filterOption",value:function(i,o){return D_(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,c=i.form,d=i.menuIsOpen,p=i.required,h=this.getComponents(),v=h.Input,g=this.state,w=g.inputIsHidden,f=g.ariaSelection,m=this.commonProps,x=l||this.getElementId("input"),S=X(X(X({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":p,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(f==null?void 0:f.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?b.createElement(v,q({},m,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:s},S)):b.createElement(r8,q({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Yl,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:c,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,p=this.commonProps,h=this.props,v=h.controlShouldRenderValue,g=h.isDisabled,w=h.isMulti,f=h.inputValue,m=h.placeholder,x=this.state,S=x.selectValue,C=x.focusedValue,k=x.isFocused;if(!this.hasValue()||!v)return f?null:b.createElement(d,q({},p,{key:"placeholder",isDisabled:g,isFocused:k,innerProps:{id:this.getElementId("placeholder")}}),m);if(w)return S.map(function(E,M){var I=E===C,$="".concat(i.getOptionLabel(E),"-").concat(i.getOptionValue(E));return b.createElement(a,q({},p,{components:{Container:l,Label:s,Remove:u},isFocused:I,isDisabled:g,key:$,index:M,removeProps:{onClick:function(){return i.removeValue(E)},onTouchEnd:function(){return i.removeValue(E)},onMouseDown:function(j){j.preventDefault()}},data:E}),i.formatOptionLabel(E,"value"))});if(f)return null;var _=S[0];return b.createElement(c,q({},p,{data:_,isDisabled:g}),this.formatOptionLabel(_,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,q({},a,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!o||!u)return null;var d={"aria-hidden":"true"};return b.createElement(o,q({},a,{innerProps:d,isDisabled:s,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return b.createElement(a,q({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,q({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,p=o.NoOptionsMessage,h=o.Option,v=this.commonProps,g=this.state.focusedOption,w=this.props,f=w.captureMenuScroll,m=w.inputValue,x=w.isLoading,S=w.loadingMessage,C=w.minMenuHeight,k=w.maxMenuHeight,_=w.menuIsOpen,E=w.menuPlacement,M=w.menuPosition,I=w.menuPortalTarget,$=w.menuShouldBlockScroll,O=w.menuShouldScrollIntoView,j=w.noOptionsMessage,R=w.onMenuScrollToTop,L=w.onMenuScrollToBottom;if(!_)return null;var F=function(G,Q){var Z=G.type,K=G.data,re=G.isDisabled,we=G.isSelected,qe=G.label,Oe=G.value,Xt=g===K,Ft=re?void 0:function(){return i.onOptionHover(K)},kt=re?void 0:function(){return i.selectOption(K)},ni="".concat(i.getElementId("option"),"-").concat(Q),pt={id:ni,onClick:kt,onMouseMove:Ft,onMouseOver:Ft,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:we};return b.createElement(h,q({},v,{innerProps:pt,data:K,isDisabled:re,isSelected:we,key:ni,label:qe,type:Z,value:Oe,isFocused:Xt,innerRef:Xt?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(G.data,"menu"))},A;if(this.hasOptions())A=this.getCategorizedOptions().map(function(z){if(z.type==="group"){var G=z.data,Q=z.options,Z=z.index,K="".concat(i.getElementId("group"),"-").concat(Z),re="".concat(K,"-heading");return b.createElement(a,q({},v,{key:K,data:G,options:Q,Heading:l,headingProps:{id:re,data:z.data},label:i.formatGroupLabel(z.data)}),z.options.map(function(we){return F(we,"".concat(Z,"-").concat(we.index))}))}else if(z.type==="option")return F(z,"".concat(z.index))});else if(x){var P=S({inputValue:m});if(P===null)return null;A=b.createElement(d,v,P)}else{var D=j({inputValue:m});if(D===null)return null;A=b.createElement(p,v,D)}var N={minMenuHeight:C,maxMenuHeight:k,menuPlacement:E,menuPosition:M,menuShouldScrollIntoView:O},B=b.createElement(LA,q({},v,N),function(z){var G=z.ref,Q=z.placerProps,Z=Q.placement,K=Q.maxHeight;return b.createElement(s,q({},v,N,{innerRef:G,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:Z}),b.createElement(u8,{captureEnabled:f,onTopArrive:R,onBottomArrive:L,lockEnabled:$},function(re){return b.createElement(u,q({},v,{innerRef:function(qe){i.getMenuListRef(qe),re(qe)},innerProps:{role:"listbox","aria-multiselectable":v.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:K,focusedOption:g}),A)}))});return I||M==="fixed"?b.createElement(c,q({},v,{appendTo:I,controlElement:this.controlRef,menuPlacement:E,menuPosition:M}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return b.createElement(f8,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var p=d.map(function(g){return i.getOptionValue(g)}).join(a);return b.createElement("input",{name:u,type:"hidden",value:p})}else{var h=d.length>0?d.map(function(g,w){return b.createElement("input",{key:"i-".concat(w),name:u,type:"hidden",value:i.getOptionValue(g)})}):b.createElement("input",{name:u,type:"hidden",value:""});return b.createElement("div",null,h)}else{var v=d[0]?this.getOptionValue(d[0]):"";return b.createElement("input",{name:u,type:"hidden",value:v})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return b.createElement(Z6,q({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,c=u.className,d=u.id,p=u.isDisabled,h=u.menuIsOpen,v=this.state.isFocused,g=this.commonProps=this.getCommonProps();return b.createElement(l,q({},g,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:p,isFocused:v}),this.renderLiveRegion(),b.createElement(o,q({},g,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:p,isFocused:v,menuIsOpen:h}),b.createElement(s,q({},g,{isDisabled:p}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(a,q({},g,{isDisabled:p}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,p=o.instancePrefix,h=i.options,v=i.value,g=i.menuIsOpen,w=i.inputValue,f=i.isMulti,m=Vv(v),x={};if(a&&(v!==a.value||h!==a.options||g!==a.menuIsOpen||w!==a.inputValue)){var S=g?P8(i,m):[],C=g?n1(Ys(i,m),"".concat(p,"-option")):[],k=l?O8(o,m):null,_=M8(o,S),E=jd(C,_);x={selectValue:m,focusedOption:_,focusedOptionId:E,focusableOptionsWithIds:C,focusedValue:k,clearFocusValueOnUpdate:!1}}var M=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},I=u,$=c&&d;return c&&!$&&(I={value:ys(f,m,m[0]||null),options:m,action:"initial-input-focus"},$=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(I=null),X(X(X({},x),M),{},{prevProps:i,ariaSelection:I,prevWasFocused:$})}}]),n}(b.Component);R_.defaultProps=T8;var j8=b.forwardRef(function(e,t){var n=YR(e);return b.createElement(R_,q({ref:t},n))}),Kl=j8;const $8=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,D8=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,L8=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>y.jsxs($8,{children:[y.jsx(D8,{children:"Місто"}),y.jsx(Kl,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),R8=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,A8=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,F8=({options:e=[],value:t,onChange:n,selectedCity:r})=>y.jsxs(R8,{children:[y.jsx(A8,{children:"Спосіб доставки"}),y.jsx(Kl,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),$d=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Dd=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,N8=({deliveryMethod:e,officeOptions:t,ukrOfficeOptions:n,selectedOffice:r,selectedUkrOffice:i,setSelectedOffice:o,setSelectedUkrOffice:a})=>e==="nova"?y.jsxs($d,{children:[y.jsx(Dd,{children:"Відділення Нової пошти"}),y.jsx(Kl,{options:t,onChange:l=>o(l),value:r,placeholder:"Оберіть відділення..."})]}):e==="ukr"?y.jsxs($d,{children:[y.jsx(Dd,{children:"Відділення Укрпошти"}),y.jsx(Kl,{options:n,onChange:l=>a(l),value:i,placeholder:"Оберіть відділення..."})]}):e==="pickup"?y.jsxs($d,{children:[y.jsx(Dd,{children:"Самовивіз"}),y.jsxs("div",{style:{backgroundColor:"#f9f9f9",padding:"10px",borderRadius:"6px",border:"1px solid #ddd",fontSize:"14px",color:"#333",lineHeight:"1.4"},children:[y.jsx("p",{children:"Ви обрали самовивіз."}),y.jsx("p",{children:"Адреса магазину: вул. Казармена 6Г, Київ"}),y.jsx("p",{children:"Графік роботи: Вт, Ср, Пт, Сб, Нд — 11:00–20:00; вихідні: Пн, Чт"}),y.jsx("p",{children:"Телефон: +380 99 999 99"})]})]}):null,z8=T.div`
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
`;const V8=T.button`
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
`,B8=T.ul`
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
`,U8=T.li`
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
`,H8=T.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,W8=T.div`
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
`,G8=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>y.jsxs(z8,{children:[y.jsx("h3",{children:"Ваше замовлення"}),y.jsx(B8,{children:e.map((o,a)=>{var l,s;return y.jsxs(U8,{children:[y.jsx(H8,{src:((s=(l=o.images)==null?void 0:l[0])==null?void 0:s.url)||wa,alt:o.name}),y.jsxs(W8,{children:[y.jsx("p",{className:"item-name",children:o.name}),y.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),y.jsxs("span",{className:"item-total",children:[o.price*o.quantity," грн"]})]},`${o.id}-${a}`)})}),y.jsxs("div",{className:"summary-row",children:[y.jsxs("span",{children:["Товари (",n,")"]}),y.jsxs("span",{children:[t," грн"]})]}),y.jsxs("div",{className:"summary-row",children:[y.jsx("span",{children:"Доставка"}),y.jsx("span",{children:"За тарифами перевізника"})]}),y.jsx("hr",{}),y.jsxs("div",{className:"total",children:[y.jsx("span",{children:"Всього до сплати:"}),y.jsxs("span",{children:[t," грн"]})]}),y.jsx(V8,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&y.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var A_={exports:{}};function Y8(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ld=Y8(b),X8=mu;function q8(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function kp(){return(kp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function K8(e,t){e.prototype=Object.create(t.prototype),q8(e.prototype.constructor=e,t)}function Z8(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function li(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Q8=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],c=0;(s=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},i1=Q8;function o1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function J8(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var eF={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},tF="_";function a1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=tF),n==null&&(n=eF),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Dt(e,t){return e.permanents.indexOf(t)!==-1}function hc(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Dt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function s1(e,t){return t.split("").every(function(n,r){return Dt(e,r)||!hc(e,r,n)})}function $o(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Dt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Dt(e,o)&&hc(e,o,a)){i=o+1;break}}return i}function F_(e,t){return $o(e,t)===e.mask.length}function Ln(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Tp(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Dt(e,t.length);)t+=r[t.length];return t}if(t)return Tp(e,Ln(e,""),t,0);for(var o=0;o<r.length;o++)Dt(e,o)?t+=r[o]:t+=n;return t}function nF(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(c,d){return d<n||i<=d?c:Dt(e,d)?a[d]:o}).join("");for(var u=i;u<s.length;u++)Dt(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Ln(e,t)}function Tp(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=F_(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;h=u,Dt(e,p=r)&&h!==i[p];){if(r>=t.length&&(t+=i[r]),c=u,d=r,o&&Dt(e,d)&&c===o)return!0;if(++r>=i.length)return!1}var c,d,p,h;return!hc(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),Ln(e,t)):o||(t+=u),++r<i.length)}),t}function rF(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;c=s,Dt(e,u=r)&&c!==i[u];)if(++r>=i.length)return!1;var u,c;return(hc(e,r,s)||s===o)&&r++,r<i.length}),r-l}function iF(e,t){for(var n=t;0<=n;--n)if(!Dt(e,n))return n;return null}function Go(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Dt(e,r))return r;return null}function Rd(e){return e||e===0?e+"":""}function oF(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",c=0,d=0,p=Math.min(i.start,n.start);return n.end>i.start?d=(c=rF(e,r,u=s.slice(i.start,n.end),p))?i.length:0:s.length<r.length&&(d=r.length-s.length),s=r,d&&(d===1&&!i.length&&(p=i.start===n.start?Go(e,n.start):iF(e,n.start)),s=nF(e,s,p,d)),s=Tp(e,s,u,p),(p+=c)>=o.length?p=o.length:p<a.length&&!c?p=a.length:p>=a.length&&p<l&&c&&(p=Go(e,p)),u||(u=null),{value:s=Ln(e,s),enteredString:u,selection:{start:p,end:p}}}function aF(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function ht(e){return typeof e=="function"}function sF(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function N_(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function l1(e){return(N_()?sF():function(){return setTimeout(e,1e3/60)})(e)}function Ad(e){(N_()||clearTimeout)(e)}var lF=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=l1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Ad(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var v=X8.findDOMNode(li(li(i))),g=typeof window<"u"&&v instanceof window.Element;if(v&&!g)return null;if(v.nodeName!=="INPUT"&&(v=v.querySelector("input")),!v)throw new Error("react-input-mask: inputComponent doesn't contain input node");return v},i.getInputValue=function(){var v=i.getInputDOMNode();return v?v.value:null},i.setInputValue=function(v){var g=i.getInputDOMNode();g&&(i.value=v,g.value=v)},i.setCursorToEnd=function(){var v=$o(i.maskOptions,i.value),g=Go(i.maskOptions,v);g!==null&&i.setCursorPosition(g)},i.setSelection=function(v,g,w){w===void 0&&(w={});var f=i.getInputDOMNode(),m=i.isFocused();f&&m&&(w.deferred||o1(f,v,g),i.selectionDeferId!==null&&Ad(i.selectionDeferId),i.selectionDeferId=l1(function(){i.selectionDeferId=null,o1(f,v,g)}),i.previousSelection={start:v,end:g,length:Math.abs(g-v)})},i.getSelection=function(){return J8(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(v){i.setSelection(v,v)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var v=i.maskOptions,g=v.mask,w=v.maskChar,f=v.permanents,m=v.formatChars;return{mask:g,maskChar:w,permanents:f,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:m}},i.isInputAutofilled=function(v,g,w,f){var m=i.getInputDOMNode();try{if(m.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||f.end<w.length&&g.end===v.length},i.onChange=function(v){var g=li(li(i)).beforePasteState,w=li(li(i)).previousSelection,f=i.props.beforeMaskedValueChange,m=i.getInputValue(),x=i.value,S=i.getSelection();i.isInputAutofilled(m,S,x,w)&&(x=Ln(i.maskOptions,""),w={start:0,end:0,length:0}),g&&(w=g.selection,x=g.value,S={start:w.start+m.length,end:w.start+m.length,length:0},m=x.slice(0,w.start)+m+x.slice(w.end),i.beforePasteState=null);var C=oF(i.maskOptions,m,S,x,w),k=C.enteredString,_=C.selection,E=C.value;if(ht(f)){var M=f({value:E,selection:_},{value:x,selection:w},k,i.getBeforeMaskedValueChangeConfig());E=M.value,_=M.selection}i.setInputValue(E),ht(i.props.onChange)&&i.props.onChange(v),i.isWindowsPhoneBrowser?i.setSelection(_.start,_.end,{deferred:!0}):i.setSelection(_.start,_.end)},i.onFocus=function(v){var g=i.props.beforeMaskedValueChange,w=i.maskOptions,f=w.mask,m=w.prefix;if(i.focused=!0,i.mounted=!0,f){if(i.value)$o(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var x=Ln(i.maskOptions,m),S=Ln(i.maskOptions,x),C=$o(i.maskOptions,S),k=Go(i.maskOptions,C),_={start:k,end:k};if(ht(g)){var E=g({value:S,selection:_},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=E.value,_=E.selection}var M=S!==i.getInputValue();M&&i.setInputValue(S),M&&ht(i.props.onChange)&&i.props.onChange(v),i.setSelection(_.start,_.end)}i.runSaveSelectionLoop()}ht(i.props.onFocus)&&i.props.onFocus(v)},i.onBlur=function(v){var g=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&s1(i.maskOptions,i.value)){var f="";ht(g)&&(f=g({value:f,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var m=f!==i.getInputValue();m&&i.setInputValue(f),m&&ht(i.props.onChange)&&i.props.onChange(v)}ht(i.props.onBlur)&&i.props.onBlur(v)},i.onMouseDown=function(v){if(!i.focused&&document.addEventListener){i.mouseDownX=v.clientX,i.mouseDownY=v.clientY,i.mouseDownTime=new Date().getTime();var g=function w(f){if(document.removeEventListener("mouseup",w),i.focused){var m=Math.abs(f.clientX-i.mouseDownX),x=Math.abs(f.clientY-i.mouseDownY),S=Math.max(m,x),C=new Date().getTime()-i.mouseDownTime;(S<=10&&C<=200||S<=5&&C<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",g)}ht(i.props.onMouseDown)&&i.props.onMouseDown(v)},i.onPaste=function(v){ht(i.props.onPaste)&&i.props.onPaste(v),v.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(v){i.props.children==null&&ht(i.props.inputRef)&&i.props.inputRef(v)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,c=r.defaultValue,d=r.value;i.maskOptions=a1(o,a,l),c==null&&(c=""),d==null&&(d=c);var p=Rd(d);if(i.maskOptions.mask&&(s||p)&&(p=Ln(i.maskOptions,p),ht(u))){var h=r.value;r.value==null&&(h=c),p=u({value:p,selection:null},{value:h=Rd(h),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=p,i}K8(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=aF(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,c=this.maskOptions,d=a||this.isFocused(),p=this.props.value!=null,h=p?Rd(this.props.value):this.value,v=r?r.start:null;if(this.maskOptions=a1(l,s,u),this.maskOptions.mask){!c.mask&&this.isFocused()&&this.runSaveSelectionLoop();var g=this.maskOptions.mask&&this.maskOptions.mask!==c.mask;if(c.mask||p||(h=this.getInputValue()),(g||this.maskOptions.mask&&(h||d))&&(h=Ln(this.maskOptions,h)),g){var w=$o(this.maskOptions,h);(v===null||w<v)&&(v=F_(this.maskOptions,h)?w:Go(this.maskOptions,w))}!this.maskOptions.mask||!s1(this.maskOptions,h)||d||p&&this.props.value||(h="");var f={start:v,end:v};if(ht(o)){var m=o({value:h,selection:f},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());h=m.value,f=m.selection}this.value=h;var x=this.getInputValue()!==this.value;x?(this.setInputValue(this.value),this.forceUpdate()):g&&this.forceUpdate();var S=!1;f.start!=null&&f.end!=null&&(S=!r||r.start!==f.start||r.end!==f.end),(S||x)&&this.setSelection(f.start,f.end)}else c.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Ad(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=Z8(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){ht(o)||i1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=kp({},a);l.forEach(function(c){return delete s[c]}),r=o(s),l.filter(function(c){return r.props[c]!=null&&r.props[c]!==a[c]}).length&&i1(!1)}else r=Ld.createElement("input",kp({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Ld.cloneElement(r,u)},t}(Ld.Component),uF=lF;A_.exports=uF;var cF=A_.exports;const dF=y1(cF);T.div`
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
`;const Fd=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Nd=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,zd=T.input`
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
`;const Vd=T.span`
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
`;const fF=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return y.jsxs(y.Fragment,{children:[y.jsx("h3",{children:"Контактні дані"}),y.jsxs(Fd,{children:[y.jsx(Nd,{children:"Прізвище та ім’я"}),y.jsx(zd,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&y.jsx(Vd,{children:n.fullName})]}),y.jsxs(Fd,{children:[y.jsx(Nd,{children:"Номер телефону"}),y.jsx(dF,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>y.jsx(zd,{...i,type:"tel"})}),n.phone&&y.jsx(Vd,{children:n.phone})]}),y.jsxs(Fd,{children:[y.jsx(Nd,{children:"E-mail"}),y.jsx(zd,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&y.jsx(Vd,{children:n.email})]})]})},pF=T.div`
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
`;const hF=T.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,mF=T.div`
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
`;const gF=[{city:"Київ",address:"вул. Хрещатик, 1"},{city:"Київ",address:"вул. Січових Стрільців, 10"},{city:"Львів",address:"просп. Свободи, 5"}],u1={}.VITE_NP_API_KEY,c1="https://api.novaposhta.ua/v2.0/json/",vF=()=>{const e=Nn(L=>L.cart.items),t=Jl(),[n,r]=b.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[i,o]=b.useState(""),[a,l]=b.useState(null),[s,u]=b.useState(null),[c,d]=b.useState(null),[p,h]=b.useState(null),[v,g]=b.useState([]),[w,f]=b.useState([]),[m,x]=b.useState([]),[S,C]=b.useState(""),k=e.reduce((L,F)=>L+F.price*F.quantity,0),_=e.reduce((L,F)=>L+F.quantity,0),E=()=>{const L=new Date().getFullYear().toString().slice(-2),F=Date.now().toString().slice(-4),A=Math.floor(100+Math.random()*900);return`${L}${F}${A}`};b.useEffect(()=>{if(i.length<2)return;const L=setTimeout(async()=>{const A=await(await fetch(c1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:u1,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:i}})})).json();g(A.data.map(P=>({value:P.Ref,label:P.Description})))},500);return()=>clearTimeout(L)},[i]),b.useEffect(()=>{if(!a||s!=="nova")return;(async()=>{const A=await(await fetch(c1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:u1,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:a.value}})})).json();f(A.data.map(P=>({value:P.Ref,label:P.Description})))})()},[a,s]),b.useEffect(()=>{if(s!=="ukr"||!a)return;const L=gF.filter(F=>F.city===a.label).filter(F=>F.address.toLowerCase().includes(S.toLowerCase())).slice(0,20);x(L.map((F,A)=>({value:A,label:F.address})))},[a,s,S]);const M=L=>{l(L),r(F=>({...F,city:(L==null?void 0:L.label)||"",postOffice:""})),u(null),d(null),h(null)},I=()=>{const L={};return n.fullName.trim().split(" ").length<2&&(L.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||(L.email="Некоректний email"),n.phone.replace(/\D/g,"").length<12&&(L.phone="Номер неповний"),a||(L.city=!0),s==="nova"&&!c&&(L.postOffice=!0),s==="ukr"&&!p&&(L.postOffice=!0),s||(L.delivery=!0),L},$=b.useMemo(I,[n,s,c,p,a]),O=Object.keys($).length===0&&e.length>0,j=async L=>{L.preventDefault();const F=E();await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:n.fullName,phone:n.phone,email:n.email,city:n.city,products:e.map(P=>({id:P.id,name:P.name,quantity:P.quantity})),status_order:"pending",order_number:F,delivery_method:s==="nova"?"Нова Пошта":s==="ukr"?"УкрПошта":"Самовивіз",delivery_address:s==="nova"?c==null?void 0:c.label:s==="ukr"?p==null?void 0:p.label:"Самовивіз"}})});const A={...n,city:a.label,deliveryMethod:s==="nova"?"Нова Пошта":s==="ukr"?"УкрПошта":"Самовивіз",address:s==="nova"?c==null?void 0:c.label:s==="ukr"?p==null?void 0:p.label:"Самовивіз",items:e,total:k,orderNumer:E()};t("/order-confirmation",{state:{order:A}})},R=b.useMemo(()=>{const L=[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}];return(a==null?void 0:a.label)==="Київ"&&L.push({value:"pickup",label:"Самовивіз"}),L},[a]);return y.jsx(pF,{children:y.jsxs(hF,{children:[y.jsxs(mF,{children:[y.jsx(fF,{formData:n,setFormData:r,errors:$}),y.jsx(L8,{cityOptions:v,selectedCity:a,onChange:M,onInputChange:o}),y.jsx(F8,{options:R,value:s,onChange:u,selectedCity:a}),y.jsx(N8,{deliveryMethod:s,officeOptions:w,ukrOfficeOptions:m,selectedOffice:c,selectedUkrOffice:p,setSelectedOffice:d,setSelectedUkrOffice:h,setUkrSearch:C})]}),y.jsx(G8,{cartItems:e,totalAmount:k,totalQuantity:_,isFormValid:O,handleSubmit:j})]})})},d1=T.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,yF=T.h1`
font-family: var(--second-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,ui=T.p`
font-family: var(--second-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,xF=T.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,f1=T.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,bF=T.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,wF=T.li`
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
`,SF=T.div`
  background: #fff4e5; 
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #ffe3c1;
`,_F=T.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,xs=T.button`
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
`,EF=()=>{var r;const e=Jl(),n=(r=Ki().state)==null?void 0:r.order;return n?y.jsxs(d1,{children:[y.jsx(yF,{children:"Дякуємо за ваше замовлення!"}),y.jsxs(ui,{children:["Ваше замовлення ",y.jsxs("strong",{children:["№",n.orderNumer]})," успішно прийняте."]}),y.jsx(ui,{children:"Ми зв’яжемось з Вами в найближчий час"}),y.jsxs(xF,{children:[y.jsx(f1,{children:"Деталі замовлення:"}),y.jsx(bF,{children:n.items.map(i=>y.jsxs(wF,{children:[y.jsxs("span",{className:"item-info",children:[i.name," (x",i.quantity,")"]}),y.jsxs("span",{className:"item-price",children:[i.price*i.quantity," грн"]})]},i.id))}),y.jsxs(ui,{children:[y.jsx("strong",{children:"Спосіб доставки:"})," ",n.deliveryMethod]}),y.jsxs(ui,{children:[y.jsx("strong",{children:"Адреса отримання:"})," ",n.city,", ",n.address]})]}),n.paymentMethod==="online"&&y.jsxs(SF,{children:[y.jsx(f1,{children:"Оплата"}),y.jsx(ui,{style:{marginBottom:"15px"},children:"Натисніть кнопку нижче для миттєвої оплати:"}),y.jsx(xs,{primary:!0,onClick:()=>window.location.href=n.paymentLink,children:"Оплатити зараз"})]}),y.jsxs(_F,{children:[y.jsx(xs,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),y.jsx(xs,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):y.jsxs(d1,{children:[y.jsx(ui,{children:"Завантаження даних замовлення..."}),y.jsx(xs,{onClick:()=>e("/"),children:"На головну"})]})},CF=T.section`
  background-color: var(--second-background);
`,kF=T.div`
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
`,TF=T.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,PF=T.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,OF=T.p`

  font-size: 16px;
  color: #666;
`,MF=T.section`
  margin-bottom: 50px;
`,IF=T.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,jF=T.section`
  margin-bottom: 60px;
`,$F=T.h2`
  margin-bottom: 30px;
`,DF=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,bs=T.div`
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
`,LF=()=>y.jsxs(CF,{children:[y.jsxs(kF,{children:[y.jsxs(TF,{children:[y.jsx(PF,{children:"Про Дідів Хлів"}),y.jsx(OF,{children:"Даємо друге життя якісним велозапчастинам"})]}),y.jsxs(MF,{children:[y.jsx(IF,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),y.jsx(kS,{})]}),y.jsxs(jF,{children:[y.jsx($F,{children:"Наша майстерня"}),y.jsxs(DF,{children:[y.jsx(bs,{color:"#e2e2e2",children:"Фото майстерні"}),y.jsx(bs,{color:"#d1d1d1",children:"Процес діагностики"}),y.jsx(bs,{color:"#bcbcbc",children:"Склад запчастин"}),y.jsx(bs,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),RF=()=>{const{pathname:e}=Ki();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},AF=T.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,FF=T.div`
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
`,NF=T.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,zF=T.p`
  color: #585555;
  margin-bottom: 40px;
`,VF=T.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,BF=T.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,ws=T.div`
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
`,UF=T.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,HF=T.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,WF=T.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,GF=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,p1=T.a`
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
`;const YF=T.div`
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

 
`,XF=()=>y.jsx(AF,{children:y.jsxs(FF,{children:[y.jsx(NF,{children:"Контакти"}),y.jsx(zF,{children:"Зв’яжіться з нами для консультації або замовлення"}),y.jsxs(VF,{children:[y.jsxs(BF,{children:[y.jsxs(ws,{children:[y.jsx("h3",{children:"Адреса"}),y.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),y.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),y.jsxs(ws,{children:[y.jsx("h3",{children:"Телефон"}),y.jsx("p",{children:"+38 (097) 123-45-67"})]}),y.jsxs(ws,{children:[y.jsx("h3",{children:"Email"}),y.jsx("p",{children:"didivhliv.com"})]}),y.jsxs(ws,{children:[y.jsx("h3",{children:"Графік роботи"}),y.jsx("p",{children:"З 11:00 - 20:00"}),y.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),y.jsxs(UF,{children:[y.jsx(HF,{children:"Ми в соцмережах"}),y.jsx(WF,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),y.jsxs(GF,{children:[y.jsxs(p1,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${cn}#icon-instagram`})}),y.jsx("span",{children:"Instagram"})]}),y.jsxs(p1,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${cn}#icon-telegram`})}),y.jsx("span",{children:"Telegram"})]})]}),y.jsx(YF,{children:"Приєднуйся до спільноти!"})]})]})]})}),qF="";function KF(){return console.log(qF),y.jsxs(S3,{children:[y.jsx(iM,{}),y.jsx(RF,{}),y.jsx(b.Suspense,{fallback:y.jsx(nM,{}),children:y.jsx(sE,{children:y.jsxs(mt,{path:"/",element:y.jsx(qP,{}),children:[y.jsx(mt,{index:!0,element:y.jsx(zj,{})}),y.jsx(mt,{path:"catalog",element:y.jsx(g3,{})}),y.jsx(mt,{path:"/catalog/:category",element:y.jsx(N$,{})}),y.jsx(mt,{path:"/product/:id",element:y.jsx(NL,{})}),y.jsx(mt,{path:"cart",element:y.jsx(fR,{})}),y.jsx(mt,{path:"favorite",element:y.jsx(DR,{})}),y.jsx(mt,{path:"checkout",element:y.jsx(vF,{})}),y.jsx(mt,{path:"/order-confirmation",element:y.jsx(EF,{})}),y.jsx(mt,{path:"about",element:y.jsx(LF,{})}),y.jsx(mt,{path:"contacts",element:y.jsx(XF,{})}),y.jsx(mt,{path:"delivery",element:y.jsx(zR,{})}),y.jsx(mt,{path:"*",element:y.jsx(w3,{})})]})})})]})}var Om="persist:",z_="persist/FLUSH",Mm="persist/REHYDRATE",V_="persist/PAUSE",B_="persist/PERSIST",U_="persist/PURGE",H_="persist/REGISTER",ZF=-1;function Xs(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xs=function(n){return typeof n}:Xs=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Xs(e)}function h1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function QF(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?h1(n,!0).forEach(function(r){JF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function JF(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eN(e,t,n,r){r.debug;var i=QF({},n);return e&&Xs(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function tN(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:Om).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(C){return C}:typeof e.serialize=="function"?l=e.serialize:l=nN;var s=e.writeFailHandler||null,u={},c={},d=[],p=null,h=null,v=function(C){Object.keys(C).forEach(function(k){f(k)&&u[k]!==C[k]&&d.indexOf(k)===-1&&d.push(k)}),Object.keys(u).forEach(function(k){C[k]===void 0&&f(k)&&d.indexOf(k)===-1&&u[k]!==void 0&&d.push(k)}),p===null&&(p=setInterval(g,i)),u=C};function g(){if(d.length===0){p&&clearInterval(p),p=null;return}var S=d.shift(),C=r.reduce(function(k,_){return _.in(k,S,u)},u[S]);if(C!==void 0)try{c[S]=l(C)}catch(k){console.error("redux-persist/createPersistoid: error serializing state",k)}else delete c[S];d.length===0&&w()}function w(){Object.keys(c).forEach(function(S){u[S]===void 0&&delete c[S]}),h=a.setItem(o,l(c)).catch(m)}function f(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function m(S){s&&s(S)}var x=function(){for(;d.length!==0;)g();return h||Promise.resolve()};return{update:v,flush:x}}function nN(e){return JSON.stringify(e)}function rN(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Om).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=iN,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,c){return c.out(u,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function iN(e){return JSON.parse(e)}function oN(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Om).concat(e.key);return t.removeItem(n,aN)}function aN(e){}function m1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Pn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?m1(n,!0).forEach(function(r){sN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lN(e,t){if(e==null)return{};var n=uN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function uN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var cN=5e3;function W_(e,t){var n=e.version!==void 0?e.version:ZF;e.debug;var r=e.stateReconciler===void 0?eN:e.stateReconciler,i=e.getStoredState||rN,o=e.timeout!==void 0?e.timeout:cN,a=null,l=!1,s=!0,u=function(d){return d._persist.rehydrated&&a&&!s&&a.update(d),d};return function(c,d){var p=c||{},h=p._persist,v=lN(p,["_persist"]),g=v;if(d.type===B_){var w=!1,f=function(E,M){w||(d.rehydrate(e.key,E,M),w=!0)};if(o&&setTimeout(function(){!w&&f(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=tN(e)),h)return Pn({},t(g,d),{_persist:h});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(_){var E=e.migrate||function(M,I){return Promise.resolve(M)};E(_,n).then(function(M){f(M)},function(M){f(void 0,M)})},function(_){f(void 0,_)}),Pn({},t(g,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===U_)return l=!0,d.result(oN(e)),Pn({},t(g,d),{_persist:h});if(d.type===z_)return d.result(a&&a.flush()),Pn({},t(g,d),{_persist:h});if(d.type===V_)s=!0;else if(d.type===Mm){if(l)return Pn({},g,{_persist:Pn({},h,{rehydrated:!0})});if(d.key===e.key){var m=t(g,d),x=d.payload,S=r!==!1&&x!==void 0?r(x,c,m,e):m,C=Pn({},S,{_persist:Pn({},h,{rehydrated:!0})});return u(C)}}}if(!h)return t(c,d);var k=t(g,d);return k===g?c:u(Pn({},k,{_persist:h}))}}function g1(e){return pN(e)||fN(e)||dN()}function dN(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function fN(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function pN(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function v1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Pp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?v1(n,!0).forEach(function(r){hN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G_={registry:[],bootstrapped:!1},mN=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:G_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case H_:return Pp({},t,{registry:[].concat(g1(t.registry),[n.key])});case Mm:var r=t.registry.indexOf(n.key),i=g1(t.registry);return i.splice(r,1),Pp({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function gN(e,t,n){var r=n||!1,i=nm(mN,G_,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:H_,key:u})},a=function(u,c,d){var p={type:Mm,payload:c,err:d,key:u};e.dispatch(p),i.dispatch(p),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Pp({},i,{purge:function(){var u=[];return e.dispatch({type:U_,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:z_,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){e.dispatch({type:V_})},persist:function(){e.dispatch({type:B_,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var Im={},jm={};jm.__esModule=!0;jm.default=xN;function qs(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?qs=function(n){return typeof n}:qs=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},qs(e)}function Bd(){}var vN={getItem:Bd,setItem:Bd,removeItem:Bd};function yN(e){if((typeof self>"u"?"undefined":qs(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function xN(e){var t="".concat(e,"Storage");return yN(t)?self[t]:vN}Im.__esModule=!0;Im.default=SN;var bN=wN(jm);function wN(e){return e&&e.__esModule?e:{default:e}}function SN(e){var t=(0,bN.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var $m=void 0,_N=EN(Im);function EN(e){return e&&e.__esModule?e:{default:e}}var CN=(0,_N.default)("local");$m=CN;const kN={key:"cart",storage:$m},TN={key:"favorites",storage:$m},PN=W_(kN,tj),ON=W_(TN,A$),Y_=F5({reducer:{cart:PN,favorites:ON},middleware:e=>e({serializableCheck:!1})});gN(Y_);Yd.createRoot(document.getElementById("root")).render(y.jsx(sP,{store:Y_,children:y.jsx(W.StrictMode,{children:y.jsx(pE,{basename:"/Didiv/",children:y.jsx(KF,{})})})}));
