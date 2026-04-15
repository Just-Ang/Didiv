function J2(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function kt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var _1={exports:{}},eu={},E1={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),e_=Symbol.for("react.portal"),t_=Symbol.for("react.fragment"),n_=Symbol.for("react.strict_mode"),r_=Symbol.for("react.profiler"),i_=Symbol.for("react.provider"),o_=Symbol.for("react.context"),a_=Symbol.for("react.forward_ref"),s_=Symbol.for("react.suspense"),l_=Symbol.for("react.memo"),u_=Symbol.for("react.lazy"),Bm=Symbol.iterator;function c_(e){return e===null||typeof e!="object"?null:(e=Bm&&e[Bm]||e["@@iterator"],typeof e=="function"?e:null)}var C1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k1=Object.assign,T1={};function qi(e,t,n){this.props=e,this.context=t,this.refs=T1,this.updater=n||C1}qi.prototype.isReactComponent={};qi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function P1(){}P1.prototype=qi.prototype;function Dp(e,t,n){this.props=e,this.context=t,this.refs=T1,this.updater=n||C1}var Lp=Dp.prototype=new P1;Lp.constructor=Dp;k1(Lp,qi.prototype);Lp.isPureReactComponent=!0;var Vm=Array.isArray,O1=Object.prototype.hasOwnProperty,Rp={current:null},M1={key:!0,ref:!0,__self:!0,__source:!0};function I1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)O1.call(t,r)&&!M1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ca,type:e,key:o,ref:a,props:i,_owner:Rp.current}}function d_(e,t){return{$$typeof:Ca,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ap(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ca}function f_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Um=/\/+/g;function yc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?f_(""+e.key):t.toString(36)}function ks(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ca:case e_:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+yc(a,0):r,Vm(i)?(n="",e!=null&&(n=e.replace(Um,"$&/")+"/"),ks(i,t,n,"",function(u){return u})):i!=null&&(Ap(i)&&(i=d_(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Um,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Vm(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+yc(o,l);a+=ks(o,t,n,s,i)}else if(s=c_(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+yc(o,l++),a+=ks(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ga(e,t,n){if(e==null)return e;var r=[],i=0;return ks(e,r,"","",function(o){return t.call(n,o,i++)}),r}function p_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},Ts={transition:null},h_={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Ts,ReactCurrentOwner:Rp};re.Children={map:Ga,forEach:function(e,t,n){Ga(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ga(e,function(){t++}),t},toArray:function(e){return Ga(e,function(t){return t})||[]},only:function(e){if(!Ap(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=qi;re.Fragment=t_;re.Profiler=r_;re.PureComponent=Dp;re.StrictMode=n_;re.Suspense=s_;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h_;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=k1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Rp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)O1.call(t,s)&&!M1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ca,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:o_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:i_,_context:e},e.Consumer=e};re.createElement=I1;re.createFactory=function(e){var t=I1.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:a_,render:e}};re.isValidElement=Ap;re.lazy=function(e){return{$$typeof:u_,_payload:{_status:-1,_result:e},_init:p_}};re.memo=function(e,t){return{$$typeof:l_,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Ts.transition;Ts.transition={};try{e()}finally{Ts.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return ht.current.useCallback(e,t)};re.useContext=function(e){return ht.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};re.useEffect=function(e,t){return ht.current.useEffect(e,t)};re.useId=function(){return ht.current.useId()};re.useImperativeHandle=function(e,t,n){return ht.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return ht.current.useMemo(e,t)};re.useReducer=function(e,t,n){return ht.current.useReducer(e,t,n)};re.useRef=function(e){return ht.current.useRef(e)};re.useState=function(e){return ht.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return ht.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return ht.current.useTransition()};re.version="18.2.0";E1.exports=re;var b=E1.exports;const X=jp(b),Gd=J2({__proto__:null,default:X},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_=b,g_=Symbol.for("react.element"),v_=Symbol.for("react.fragment"),y_=Object.prototype.hasOwnProperty,x_=m_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b_={key:!0,ref:!0,__self:!0,__source:!0};function $1(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)y_.call(t,r)&&!b_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:g_,type:e,key:o,ref:a,props:i,_owner:x_.current}}eu.Fragment=v_;eu.jsx=$1;eu.jsxs=$1;_1.exports=eu;var v=_1.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xo.apply(this,arguments)}var ar;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ar||(ar={}));const Hm="popstate";function w_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Yd("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:el(i)}return __(t,n,null,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Fp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function S_(){return Math.random().toString(36).substr(2,8)}function Wm(e,t){return{usr:e.state,key:e.key,idx:t}}function Yd(e,t,n,r){return n===void 0&&(n=null),Xo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Xi(t):t,{state:n,key:t&&t.key||r||S_()})}function el(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Xi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function __(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=ar.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(Xo({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){l=ar.Pop;let w=c(),f=w==null?null:w-u;u=w,s&&s({action:l,location:y.location,delta:f})}function h(w,f){l=ar.Push;let m=Yd(y.location,w,f);n&&n(m,w),u=c()+1;let x=Wm(m,u),S=y.createHref(m);try{a.pushState(x,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}o&&s&&s({action:l,location:y.location,delta:1})}function p(w,f){l=ar.Replace;let m=Yd(y.location,w,f);n&&n(m,w),u=c();let x=Wm(m,u),S=y.createHref(m);a.replaceState(x,"",S),o&&s&&s({action:l,location:y.location,delta:0})}function g(w){let f=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:el(w);return Le(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let y={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Hm,d),s=w,()=>{i.removeEventListener(Hm,d),s=null}},createHref(w){return t(i,w)},createURL:g,encodeLocation(w){let f=g(w);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:p,go(w){return a.go(w)}};return y}var Gm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Gm||(Gm={}));function E_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Xi(t):t,i=Np(r.pathname||"/",n);if(i==null)return null;let o=j1(e);C_(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=D_(o[l],A_(i));return a}function j1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Le(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=dr([r,s.relativePath]),c=n.concat(s);o.children&&o.children.length>0&&(Le(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),j1(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:$_(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of D1(o.path))i(o,a,s)}),t}function D1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=D1(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function C_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:j_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const k_=/^:\w+$/,T_=3,P_=2,O_=1,M_=10,I_=-2,Ym=e=>e==="*";function $_(e,t){let n=e.split("/"),r=n.length;return n.some(Ym)&&(r+=I_),t&&(r+=P_),n.filter(i=>!Ym(i)).reduce((i,o)=>i+(k_.test(o)?T_:o===""?O_:M_),r)}function j_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function D_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=L_({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;o.push({params:r,pathname:dr([i,c.pathname]),pathnameBase:B_(dr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=dr([i,c.pathnameBase]))}return o}function L_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=R_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";a=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=F_(l[d]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function R_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Fp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function A_(e){try{return decodeURI(e)}catch(t){return Fp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function F_(e,t){try{return decodeURIComponent(e)}catch(n){return Fp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Np(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function N_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Xi(e):e;return{pathname:n?n.startsWith("/")?n:z_(n,t):t,search:V_(r),hash:U_(i)}}function z_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function L1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function R1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Xi(e):(i=Xo({},e),Le(!i.pathname||!i.pathname.includes("?"),xc("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),xc("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),xc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=N_(i,l),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const dr=e=>e.join("/").replace(/\/\/+/g,"/"),B_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),V_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,U_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function H_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const A1=["post","put","patch","delete"];new Set(A1);const W_=["get",...A1];new Set(W_);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tl(){return tl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tl.apply(this,arguments)}const zp=b.createContext(null),G_=b.createContext(null),Ki=b.createContext(null),tu=b.createContext(null),qn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),F1=b.createContext(null);function Y_(e,t){let{relative:n}=t===void 0?{}:t;ka()||Le(!1);let{basename:r,navigator:i}=b.useContext(Ki),{hash:o,pathname:a,search:l}=B1(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:dr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function ka(){return b.useContext(tu)!=null}function Zi(){return ka()||Le(!1),b.useContext(tu).location}function N1(e){b.useContext(Ki).static||b.useLayoutEffect(e)}function Qi(){let{isDataRoute:e}=b.useContext(qn);return e?lE():q_()}function q_(){ka()||Le(!1);let e=b.useContext(zp),{basename:t,navigator:n}=b.useContext(Ki),{matches:r}=b.useContext(qn),{pathname:i}=Zi(),o=JSON.stringify(L1(r).map(s=>s.pathnameBase)),a=b.useRef(!1);return N1(()=>{a.current=!0}),b.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let c=R1(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:dr([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}const X_=b.createContext(null);function K_(e){let t=b.useContext(qn).outlet;return t&&b.createElement(X_.Provider,{value:e},t)}function z1(){let{matches:e}=b.useContext(qn),t=e[e.length-1];return t?t.params:{}}function B1(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(qn),{pathname:i}=Zi(),o=JSON.stringify(L1(r).map(a=>a.pathnameBase));return b.useMemo(()=>R1(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Z_(e,t){return Q_(e,t)}function Q_(e,t,n){ka()||Le(!1);let{navigator:r}=b.useContext(Ki),{matches:i}=b.useContext(qn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Zi(),u;if(t){var c;let y=typeof t=="string"?Xi(t):t;l==="/"||(c=y.pathname)!=null&&c.startsWith(l)||Le(!1),u=y}else u=s;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",p=E_(e,{pathname:h}),g=rE(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:dr([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:dr([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&g?b.createElement(tu.Provider,{value:{location:tl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ar.Pop}},g):g}function J_(){let e=sE(),t=H_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const eE=b.createElement(J_,null);class tE extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(qn.Provider,{value:this.props.routeContext},b.createElement(F1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nE(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(zp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(qn.Provider,{value:t},r)}function rE(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Le(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let c=s.route.id?a==null?void 0:a[s.route.id]:null,d=null;n&&(d=s.route.errorElement||eE);let h=t.concat(o.slice(0,u+1)),p=()=>{let g;return c?g=d:s.route.Component?g=b.createElement(s.route.Component,null):s.route.element?g=s.route.element:g=l,b.createElement(nE,{match:s,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:g})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?b.createElement(tE,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var V1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(V1||{}),nl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(nl||{});function iE(e){let t=b.useContext(zp);return t||Le(!1),t}function oE(e){let t=b.useContext(G_);return t||Le(!1),t}function aE(e){let t=b.useContext(qn);return t||Le(!1),t}function U1(e){let t=aE(),n=t.matches[t.matches.length-1];return n.route.id||Le(!1),n.route.id}function sE(){var e;let t=b.useContext(F1),n=oE(nl.UseRouteError),r=U1(nl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function lE(){let{router:e}=iE(V1.UseNavigateStable),t=U1(nl.UseNavigateStable),n=b.useRef(!1);return N1(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,tl({fromRouteId:t},o)))},[e,t])}function uE(e){return K_(e.context)}function ut(e){Le(!1)}function cE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ar.Pop,navigator:o,static:a=!1}=e;ka()&&Le(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=Xi(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:p="default"}=r,g=b.useMemo(()=>{let y=Np(u,l);return y==null?null:{location:{pathname:y,search:c,hash:d,state:h,key:p},navigationType:i}},[l,u,c,d,h,p,i]);return g==null?null:b.createElement(Ki.Provider,{value:s},b.createElement(tu.Provider,{children:n,value:g}))}function dE(e){let{children:t,location:n}=e;return Z_(qd(t),n)}new Promise(()=>{});function qd(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,qd(r.props.children,o));return}r.type!==ut&&Le(!1),!r.props.index||!r.props.children||Le(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=qd(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xd(){return Xd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xd.apply(this,arguments)}function fE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function pE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function hE(e,t){return e.button===0&&(!t||t==="_self")&&!pE(e)}function Kd(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function mE(e,t){let n=Kd(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const gE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],vE="startTransition",qm=Gd[vE];function yE(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=w_({window:i,v5Compat:!0}));let a=o.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=b.useCallback(d=>{u&&qm?qm(()=>s(d)):s(d)},[s,u]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(cE,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const xE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Me=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:c}=t,d=fE(t,gE),{basename:h}=b.useContext(Ki),p,g=!1;if(typeof u=="string"&&bE.test(u)&&(p=u,xE))try{let m=new URL(window.location.href),x=u.startsWith("//")?new URL(m.protocol+u):new URL(u),S=Np(x.pathname,h);x.origin===m.origin&&S!=null?u=S+x.search+x.hash:g=!0}catch{}let y=Y_(u,{relative:i}),w=wE(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:i});function f(m){r&&r(m),m.defaultPrevented||w(m)}return b.createElement("a",Xd({},d,{href:p||y,onClick:g||o?r:f,ref:n,target:s}))});var Xm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Xm||(Xm={}));var Km;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Km||(Km={}));function wE(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Qi(),s=Zi(),u=B1(e,{relative:a});return b.useCallback(c=>{if(hE(c,n)){c.preventDefault();let d=r!==void 0?r:el(s)===el(u);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}function SE(e){let t=b.useRef(Kd(e)),n=b.useRef(!1),r=Zi(),i=b.useMemo(()=>mE(r.search,n.current?null:t.current),[r.search]),o=Qi(),a=b.useCallback((l,s)=>{const u=Kd(typeof l=="function"?l(i):l);n.current=!0,o("?"+u,s)},[o,i]);return[i,a]}var Zd={},H1={exports:{}},At={},W1={exports:{}},G1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,j){var N=P.length;P.push(j);e:for(;0<N;){var B=N-1>>>1,z=P[B];if(0<i(z,j))P[B]=j,P[N]=z,N=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],N=P.pop();if(N!==j){P[0]=N;e:for(var B=0,z=P.length,U=z>>>1;B<U;){var H=2*(B+1)-1,Y=P[H],q=H+1,J=P[q];if(0>i(Y,N))q<z&&0>i(J,Y)?(P[B]=J,P[q]=N,B=q):(P[B]=Y,P[H]=N,B=H);else if(q<z&&0>i(J,N))P[B]=J,P[q]=N,B=q;else break e}}return j}function i(P,j){var N=P.sortIndex-j.sortIndex;return N!==0?N:P.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,d=null,h=3,p=!1,g=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=P)r(u),j.sortIndex=j.expirationTime,t(s,j);else break;j=n(u)}}function S(P){if(y=!1,x(P),!g)if(n(s)!==null)g=!0,F(E);else{var j=n(u);j!==null&&A(S,j.startTime-P)}}function E(P,j){g=!1,y&&(y=!1,f(C),C=-1),p=!0;var N=h;try{for(x(j),d=n(s);d!==null&&(!(d.expirationTime>j)||P&&!$());){var B=d.callback;if(typeof B=="function"){d.callback=null,h=d.priorityLevel;var z=B(d.expirationTime<=j);j=e.unstable_now(),typeof z=="function"?d.callback=z:d===n(s)&&r(s),x(j)}else r(s);d=n(s)}if(d!==null)var U=!0;else{var H=n(u);H!==null&&A(S,H.startTime-j),U=!1}return U}finally{d=null,h=N,p=!1}}var k=!1,_=null,C=-1,O=5,M=-1;function $(){return!(e.unstable_now()-M<O)}function I(){if(_!==null){var P=e.unstable_now();M=P;var j=!0;try{j=_(!0,P)}finally{j?L():(k=!1,_=null)}}else k=!1}var L;if(typeof m=="function")L=function(){m(I)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,D=R.port2;R.port1.onmessage=I,L=function(){D.postMessage(null)}}else L=function(){w(I,0)};function F(P){_=P,k||(k=!0,L())}function A(P,j){C=w(function(){P(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){g||p||(g=!0,F(E))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var N=h;h=j;try{return P()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var N=h;h=P;try{return j()}finally{h=N}},e.unstable_scheduleCallback=function(P,j,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,P){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=N+z,P={id:c++,callback:j,priorityLevel:P,startTime:N,expirationTime:z,sortIndex:-1},N>B?(P.sortIndex=N,t(u,P),n(s)===null&&P===n(u)&&(y?(f(C),C=-1):y=!0,A(S,N-B))):(P.sortIndex=z,t(s,P),g||p||(g=!0,F(E))),P},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(P){var j=h;return function(){var N=h;h=j;try{return P.apply(this,arguments)}finally{h=N}}}})(G1);W1.exports=G1;var _E=W1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y1=b,Lt=_E;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q1=new Set,Ko={};function ei(e,t){$i(e,t),$i(e+"Capture",t)}function $i(e,t){for(Ko[e]=t,e=0;e<t.length;e++)q1.add(t[e])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qd=Object.prototype.hasOwnProperty,EE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zm={},Qm={};function CE(e){return Qd.call(Qm,e)?!0:Qd.call(Zm,e)?!1:EE.test(e)?Qm[e]=!0:(Zm[e]=!0,!1)}function kE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function TE(e,t,n,r){if(t===null||typeof t>"u"||kE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function mt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bp=/[\-:]([a-z])/g;function Vp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bp,Vp);Qe[t]=new mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bp,Vp);Qe[t]=new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bp,Vp);Qe[t]=new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new mt(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Up(e,t,n,r){var i=Qe.hasOwnProperty(t)?Qe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(TE(t,n,i,r)&&(n=null),r||i===null?CE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xn=Y1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),fi=Symbol.for("react.portal"),pi=Symbol.for("react.fragment"),Hp=Symbol.for("react.strict_mode"),Jd=Symbol.for("react.profiler"),X1=Symbol.for("react.provider"),K1=Symbol.for("react.context"),Wp=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),tf=Symbol.for("react.suspense_list"),Gp=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),Z1=Symbol.for("react.offscreen"),Jm=Symbol.iterator;function po(e){return e===null||typeof e!="object"?null:(e=Jm&&e[Jm]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,bc;function To(e){if(bc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bc=t&&t[1]||""}return`
`+bc+e}var wc=!1;function Sc(e,t){if(!e||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?To(e):""}function PE(e){switch(e.tag){case 5:return To(e.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return e=Sc(e.type,!1),e;case 11:return e=Sc(e.type.render,!1),e;case 1:return e=Sc(e.type,!0),e;default:return""}}function nf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pi:return"Fragment";case fi:return"Portal";case Jd:return"Profiler";case Hp:return"StrictMode";case ef:return"Suspense";case tf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case K1:return(e.displayName||"Context")+".Consumer";case X1:return(e._context.displayName||"Context")+".Provider";case Wp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gp:return t=e.displayName||null,t!==null?t:nf(e.type)||"Memo";case nr:t=e._payload,e=e._init;try{return nf(e(t))}catch{}}return null}function OE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nf(t);case 8:return t===Hp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Q1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ME(e){var t=Q1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qa(e){e._valueTracker||(e._valueTracker=ME(e))}function J1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Q1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function rl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rf(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function eg(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ey(e,t){t=t.checked,t!=null&&Up(e,"checked",t,!1)}function of(e,t){ey(e,t);var n=wr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?af(e,t.type,n):t.hasOwnProperty("defaultValue")&&af(e,t.type,wr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function af(e,t,n){(t!=="number"||rl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Po=Array.isArray;function Ei(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ng(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(Po(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wr(n)}}function ty(e,t){var n=wr(t.value),r=wr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function rg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ny(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ny(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xa,ry=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IE=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(e){IE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ro[t]=Ro[e]})});function iy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ro.hasOwnProperty(e)&&Ro[e]?(""+t).trim():t+"px"}function oy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=iy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var $E=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uf(e,t){if(t){if($E[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function cf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var df=null;function Yp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ff=null,Ci=null,ki=null;function ig(e){if(e=Oa(e)){if(typeof ff!="function")throw Error(V(280));var t=e.stateNode;t&&(t=au(t),ff(e.stateNode,e.type,t))}}function ay(e){Ci?ki?ki.push(e):ki=[e]:Ci=e}function sy(){if(Ci){var e=Ci,t=ki;if(ki=Ci=null,ig(e),t)for(e=0;e<t.length;e++)ig(t[e])}}function ly(e,t){return e(t)}function uy(){}var _c=!1;function cy(e,t,n){if(_c)return e(t,n);_c=!0;try{return ly(e,t,n)}finally{_c=!1,(Ci!==null||ki!==null)&&(uy(),sy())}}function Qo(e,t){var n=e.stateNode;if(n===null)return null;var r=au(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var pf=!1;if(Vn)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){pf=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{pf=!1}function jE(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ao=!1,il=null,ol=!1,hf=null,DE={onError:function(e){Ao=!0,il=e}};function LE(e,t,n,r,i,o,a,l,s){Ao=!1,il=null,jE.apply(DE,arguments)}function RE(e,t,n,r,i,o,a,l,s){if(LE.apply(this,arguments),Ao){if(Ao){var u=il;Ao=!1,il=null}else throw Error(V(198));ol||(ol=!0,hf=u)}}function ti(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function dy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function og(e){if(ti(e)!==e)throw Error(V(188))}function AE(e){var t=e.alternate;if(!t){if(t=ti(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return og(i),e;if(o===r)return og(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function fy(e){return e=AE(e),e!==null?py(e):null}function py(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=py(e);if(t!==null)return t;e=e.sibling}return null}var hy=Lt.unstable_scheduleCallback,ag=Lt.unstable_cancelCallback,FE=Lt.unstable_shouldYield,NE=Lt.unstable_requestPaint,Oe=Lt.unstable_now,zE=Lt.unstable_getCurrentPriorityLevel,qp=Lt.unstable_ImmediatePriority,my=Lt.unstable_UserBlockingPriority,al=Lt.unstable_NormalPriority,BE=Lt.unstable_LowPriority,gy=Lt.unstable_IdlePriority,nu=null,wn=null;function VE(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(nu,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:WE,UE=Math.log,HE=Math.LN2;function WE(e){return e>>>=0,e===0?32:31-(UE(e)/HE|0)|0}var Ka=64,Za=4194304;function Oo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Oo(l):(o&=a,o!==0&&(r=Oo(o)))}else a=n&~i,a!==0?r=Oo(a):o!==0&&(r=Oo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-on(t),i=1<<n,r|=e[n],t&=~i;return r}function GE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-on(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=GE(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function mf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vy(){var e=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),e}function Ec(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ta(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-on(t),e[t]=n}function qE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-on(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Xp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-on(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var he=0;function yy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xy,Kp,by,wy,Sy,gf=!1,Qa=[],fr=null,pr=null,hr=null,Jo=new Map,ea=new Map,ir=[],XE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sg(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(t.pointerId)}}function mo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Oa(t),t!==null&&Kp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function KE(e,t,n,r,i){switch(t){case"focusin":return fr=mo(fr,e,t,n,r,i),!0;case"dragenter":return pr=mo(pr,e,t,n,r,i),!0;case"mouseover":return hr=mo(hr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Jo.set(o,mo(Jo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ea.set(o,mo(ea.get(o)||null,e,t,n,r,i)),!0}return!1}function _y(e){var t=Ar(e.target);if(t!==null){var n=ti(t);if(n!==null){if(t=n.tag,t===13){if(t=dy(n),t!==null){e.blockedOn=t,Sy(e.priority,function(){by(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ps(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);df=r,n.target.dispatchEvent(r),df=null}else return t=Oa(n),t!==null&&Kp(t),e.blockedOn=n,!1;t.shift()}return!0}function lg(e,t,n){Ps(e)&&n.delete(t)}function ZE(){gf=!1,fr!==null&&Ps(fr)&&(fr=null),pr!==null&&Ps(pr)&&(pr=null),hr!==null&&Ps(hr)&&(hr=null),Jo.forEach(lg),ea.forEach(lg)}function go(e,t){e.blockedOn===t&&(e.blockedOn=null,gf||(gf=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,ZE)))}function ta(e){function t(i){return go(i,e)}if(0<Qa.length){go(Qa[0],e);for(var n=1;n<Qa.length;n++){var r=Qa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fr!==null&&go(fr,e),pr!==null&&go(pr,e),hr!==null&&go(hr,e),Jo.forEach(t),ea.forEach(t),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)_y(n),n.blockedOn===null&&ir.shift()}var Ti=Xn.ReactCurrentBatchConfig,ll=!0;function QE(e,t,n,r){var i=he,o=Ti.transition;Ti.transition=null;try{he=1,Zp(e,t,n,r)}finally{he=i,Ti.transition=o}}function JE(e,t,n,r){var i=he,o=Ti.transition;Ti.transition=null;try{he=4,Zp(e,t,n,r)}finally{he=i,Ti.transition=o}}function Zp(e,t,n,r){if(ll){var i=vf(e,t,n,r);if(i===null)Dc(e,t,r,ul,n),sg(e,r);else if(KE(i,e,t,n,r))r.stopPropagation();else if(sg(e,r),t&4&&-1<XE.indexOf(e)){for(;i!==null;){var o=Oa(i);if(o!==null&&xy(o),o=vf(e,t,n,r),o===null&&Dc(e,t,r,ul,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Dc(e,t,r,null,n)}}var ul=null;function vf(e,t,n,r){if(ul=null,e=Yp(r),e=Ar(e),e!==null)if(t=ti(e),t===null)e=null;else if(n=t.tag,n===13){if(e=dy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ul=e,null}function Ey(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zE()){case qp:return 1;case my:return 4;case al:case BE:return 16;case gy:return 536870912;default:return 16}default:return 16}}var sr=null,Qp=null,Os=null;function Cy(){if(Os)return Os;var e,t=Qp,n=t.length,r,i="value"in sr?sr.value:sr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Os=i.slice(e,1<r?1-r:void 0)}function Ms(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ja(){return!0}function ug(){return!1}function Ft(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ja:ug,this.isPropagationStopped=ug,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),t}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jp=Ft(Ji),Pa=ke({},Ji,{view:0,detail:0}),eC=Ft(Pa),Cc,kc,vo,ru=ke({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vo&&(vo&&e.type==="mousemove"?(Cc=e.screenX-vo.screenX,kc=e.screenY-vo.screenY):kc=Cc=0,vo=e),Cc)},movementY:function(e){return"movementY"in e?e.movementY:kc}}),cg=Ft(ru),tC=ke({},ru,{dataTransfer:0}),nC=Ft(tC),rC=ke({},Pa,{relatedTarget:0}),Tc=Ft(rC),iC=ke({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),oC=Ft(iC),aC=ke({},Ji,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sC=Ft(aC),lC=ke({},Ji,{data:0}),dg=Ft(lC),uC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dC[e])?!!t[e]:!1}function eh(){return fC}var pC=ke({},Pa,{key:function(e){if(e.key){var t=uC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ms(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eh,charCode:function(e){return e.type==="keypress"?Ms(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ms(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hC=Ft(pC),mC=ke({},ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fg=Ft(mC),gC=ke({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eh}),vC=Ft(gC),yC=ke({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),xC=Ft(yC),bC=ke({},ru,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wC=Ft(bC),SC=[9,13,27,32],th=Vn&&"CompositionEvent"in window,Fo=null;Vn&&"documentMode"in document&&(Fo=document.documentMode);var _C=Vn&&"TextEvent"in window&&!Fo,ky=Vn&&(!th||Fo&&8<Fo&&11>=Fo),pg=String.fromCharCode(32),hg=!1;function Ty(e,t){switch(e){case"keyup":return SC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Py(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hi=!1;function EC(e,t){switch(e){case"compositionend":return Py(t);case"keypress":return t.which!==32?null:(hg=!0,pg);case"textInput":return e=t.data,e===pg&&hg?null:e;default:return null}}function CC(e,t){if(hi)return e==="compositionend"||!th&&Ty(e,t)?(e=Cy(),Os=Qp=sr=null,hi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ky&&t.locale!=="ko"?null:t.data;default:return null}}var kC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kC[e.type]:t==="textarea"}function Oy(e,t,n,r){ay(r),t=cl(t,"onChange"),0<t.length&&(n=new Jp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var No=null,na=null;function TC(e){zy(e,0)}function iu(e){var t=vi(e);if(J1(t))return e}function PC(e,t){if(e==="change")return t}var My=!1;if(Vn){var Pc;if(Vn){var Oc="oninput"in document;if(!Oc){var gg=document.createElement("div");gg.setAttribute("oninput","return;"),Oc=typeof gg.oninput=="function"}Pc=Oc}else Pc=!1;My=Pc&&(!document.documentMode||9<document.documentMode)}function vg(){No&&(No.detachEvent("onpropertychange",Iy),na=No=null)}function Iy(e){if(e.propertyName==="value"&&iu(na)){var t=[];Oy(t,na,e,Yp(e)),cy(TC,t)}}function OC(e,t,n){e==="focusin"?(vg(),No=t,na=n,No.attachEvent("onpropertychange",Iy)):e==="focusout"&&vg()}function MC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return iu(na)}function IC(e,t){if(e==="click")return iu(t)}function $C(e,t){if(e==="input"||e==="change")return iu(t)}function jC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var un=typeof Object.is=="function"?Object.is:jC;function ra(e,t){if(un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qd.call(t,i)||!un(e[i],t[i]))return!1}return!0}function yg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xg(e,t){var n=yg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yg(n)}}function $y(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$y(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jy(){for(var e=window,t=rl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=rl(e.document)}return t}function nh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function DC(e){var t=jy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$y(n.ownerDocument.documentElement,n)){if(r!==null&&nh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=xg(n,o);var a=xg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var LC=Vn&&"documentMode"in document&&11>=document.documentMode,mi=null,yf=null,zo=null,xf=!1;function bg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xf||mi==null||mi!==rl(r)||(r=mi,"selectionStart"in r&&nh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zo&&ra(zo,r)||(zo=r,r=cl(yf,"onSelect"),0<r.length&&(t=new Jp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mi)))}function es(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gi={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionend:es("Transition","TransitionEnd")},Mc={},Dy={};Vn&&(Dy=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function ou(e){if(Mc[e])return Mc[e];if(!gi[e])return e;var t=gi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dy)return Mc[e]=t[n];return e}var Ly=ou("animationend"),Ry=ou("animationiteration"),Ay=ou("animationstart"),Fy=ou("transitionend"),Ny=new Map,wg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(e,t){Ny.set(e,t),ei(t,[e])}for(var Ic=0;Ic<wg.length;Ic++){var $c=wg[Ic],RC=$c.toLowerCase(),AC=$c[0].toUpperCase()+$c.slice(1);Er(RC,"on"+AC)}Er(Ly,"onAnimationEnd");Er(Ry,"onAnimationIteration");Er(Ay,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(Fy,"onTransitionEnd");$i("onMouseEnter",["mouseout","mouseover"]);$i("onMouseLeave",["mouseout","mouseover"]);$i("onPointerEnter",["pointerout","pointerover"]);$i("onPointerLeave",["pointerout","pointerover"]);ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function Sg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,RE(r,t,void 0,e),e.currentTarget=null}function zy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Sg(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Sg(i,l,u),o=s}}}if(ol)throw e=hf,ol=!1,hf=null,e}function ve(e,t){var n=t[Ef];n===void 0&&(n=t[Ef]=new Set);var r=e+"__bubble";n.has(r)||(By(t,e,2,!1),n.add(r))}function jc(e,t,n){var r=0;t&&(r|=4),By(n,e,r,t)}var ts="_reactListening"+Math.random().toString(36).slice(2);function ia(e){if(!e[ts]){e[ts]=!0,q1.forEach(function(n){n!=="selectionchange"&&(FC.has(n)||jc(n,!1,e),jc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ts]||(t[ts]=!0,jc("selectionchange",!1,t))}}function By(e,t,n,r){switch(Ey(t)){case 1:var i=QE;break;case 4:i=JE;break;default:i=Zp}n=i.bind(null,t,n,e),i=void 0,!pf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Dc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Ar(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}cy(function(){var u=o,c=Yp(n),d=[];e:{var h=Ny.get(e);if(h!==void 0){var p=Jp,g=e;switch(e){case"keypress":if(Ms(n)===0)break e;case"keydown":case"keyup":p=hC;break;case"focusin":g="focus",p=Tc;break;case"focusout":g="blur",p=Tc;break;case"beforeblur":case"afterblur":p=Tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=nC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=vC;break;case Ly:case Ry:case Ay:p=oC;break;case Fy:p=xC;break;case"scroll":p=eC;break;case"wheel":p=wC;break;case"copy":case"cut":case"paste":p=sC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=fg}var y=(t&4)!==0,w=!y&&e==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var m=u,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,f!==null&&(S=Qo(m,f),S!=null&&y.push(oa(m,S,x)))),w)break;m=m.return}0<y.length&&(h=new p(h,g,null,n,c),d.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==df&&(g=n.relatedTarget||n.fromElement)&&(Ar(g)||g[Un]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Ar(g):null,g!==null&&(w=ti(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=cg,S="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=fg,S="onPointerLeave",f="onPointerEnter",m="pointer"),w=p==null?h:vi(p),x=g==null?h:vi(g),h=new y(S,m+"leave",p,n,c),h.target=w,h.relatedTarget=x,S=null,Ar(c)===u&&(y=new y(f,m+"enter",g,n,c),y.target=x,y.relatedTarget=w,S=y),w=S,p&&g)t:{for(y=p,f=g,m=0,x=y;x;x=oi(x))m++;for(x=0,S=f;S;S=oi(S))x++;for(;0<m-x;)y=oi(y),m--;for(;0<x-m;)f=oi(f),x--;for(;m--;){if(y===f||f!==null&&y===f.alternate)break t;y=oi(y),f=oi(f)}y=null}else y=null;p!==null&&_g(d,h,p,y,!1),g!==null&&w!==null&&_g(d,w,g,y,!0)}}e:{if(h=u?vi(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=PC;else if(mg(h))if(My)E=$C;else{E=MC;var k=OC}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=IC);if(E&&(E=E(e,u))){Oy(d,E,n,c);break e}k&&k(e,h,u),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&af(h,"number",h.value)}switch(k=u?vi(u):window,e){case"focusin":(mg(k)||k.contentEditable==="true")&&(mi=k,yf=u,zo=null);break;case"focusout":zo=yf=mi=null;break;case"mousedown":xf=!0;break;case"contextmenu":case"mouseup":case"dragend":xf=!1,bg(d,n,c);break;case"selectionchange":if(LC)break;case"keydown":case"keyup":bg(d,n,c)}var _;if(th)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else hi?Ty(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(ky&&n.locale!=="ko"&&(hi||C!=="onCompositionStart"?C==="onCompositionEnd"&&hi&&(_=Cy()):(sr=c,Qp="value"in sr?sr.value:sr.textContent,hi=!0)),k=cl(u,C),0<k.length&&(C=new dg(C,e,null,n,c),d.push({event:C,listeners:k}),_?C.data=_:(_=Py(n),_!==null&&(C.data=_)))),(_=_C?EC(e,n):CC(e,n))&&(u=cl(u,"onBeforeInput"),0<u.length&&(c=new dg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=_))}zy(d,t)})}function oa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Qo(e,n),o!=null&&r.unshift(oa(e,o,i)),o=Qo(e,t),o!=null&&r.push(oa(e,o,i))),e=e.return}return r}function oi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _g(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Qo(n,o),s!=null&&a.unshift(oa(n,s,l))):i||(s=Qo(n,o),s!=null&&a.push(oa(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var NC=/\r\n?/g,zC=/\u0000|\uFFFD/g;function Eg(e){return(typeof e=="string"?e:""+e).replace(NC,`
`).replace(zC,"")}function ns(e,t,n){if(t=Eg(t),Eg(e)!==t&&n)throw Error(V(425))}function dl(){}var bf=null,wf=null;function Sf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _f=typeof setTimeout=="function"?setTimeout:void 0,BC=typeof clearTimeout=="function"?clearTimeout:void 0,Cg=typeof Promise=="function"?Promise:void 0,VC=typeof queueMicrotask=="function"?queueMicrotask:typeof Cg<"u"?function(e){return Cg.resolve(null).then(e).catch(UC)}:_f;function UC(e){setTimeout(function(){throw e})}function Lc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ta(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ta(t)}function mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function kg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var eo=Math.random().toString(36).slice(2),xn="__reactFiber$"+eo,aa="__reactProps$"+eo,Un="__reactContainer$"+eo,Ef="__reactEvents$"+eo,HC="__reactListeners$"+eo,WC="__reactHandles$"+eo;function Ar(e){var t=e[xn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Un]||n[xn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=kg(e);e!==null;){if(n=e[xn])return n;e=kg(e)}return t}e=n,n=e.parentNode}return null}function Oa(e){return e=e[xn]||e[Un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function au(e){return e[aa]||null}var Cf=[],yi=-1;function Cr(e){return{current:e}}function xe(e){0>yi||(e.current=Cf[yi],Cf[yi]=null,yi--)}function ge(e,t){yi++,Cf[yi]=e.current,e.current=t}var Sr={},at=Cr(Sr),St=Cr(!1),Hr=Sr;function ji(e,t){var n=e.type.contextTypes;if(!n)return Sr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _t(e){return e=e.childContextTypes,e!=null}function fl(){xe(St),xe(at)}function Tg(e,t,n){if(at.current!==Sr)throw Error(V(168));ge(at,t),ge(St,n)}function Vy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,OE(e)||"Unknown",i));return ke({},n,r)}function pl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sr,Hr=at.current,ge(at,e),ge(St,St.current),!0}function Pg(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=Vy(e,t,Hr),r.__reactInternalMemoizedMergedChildContext=e,xe(St),xe(at),ge(at,e)):xe(St),ge(St,n)}var Dn=null,su=!1,Rc=!1;function Uy(e){Dn===null?Dn=[e]:Dn.push(e)}function GC(e){su=!0,Uy(e)}function kr(){if(!Rc&&Dn!==null){Rc=!0;var e=0,t=he;try{var n=Dn;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dn=null,su=!1}catch(i){throw Dn!==null&&(Dn=Dn.slice(e+1)),hy(qp,kr),i}finally{he=t,Rc=!1}}return null}var xi=[],bi=0,hl=null,ml=0,Bt=[],Vt=0,Wr=null,An=1,Fn="";function Ir(e,t){xi[bi++]=ml,xi[bi++]=hl,hl=e,ml=t}function Hy(e,t,n){Bt[Vt++]=An,Bt[Vt++]=Fn,Bt[Vt++]=Wr,Wr=e;var r=An;e=Fn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var o=32-on(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,An=1<<32-on(t)+i|n<<i|r,Fn=o+e}else An=1<<o|n<<i|r,Fn=e}function rh(e){e.return!==null&&(Ir(e,1),Hy(e,1,0))}function ih(e){for(;e===hl;)hl=xi[--bi],xi[bi]=null,ml=xi[--bi],xi[bi]=null;for(;e===Wr;)Wr=Bt[--Vt],Bt[Vt]=null,Fn=Bt[--Vt],Bt[Vt]=null,An=Bt[--Vt],Bt[Vt]=null}var jt=null,It=null,_e=!1,nn=null;function Wy(e,t){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Og(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,It=mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,It=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wr!==null?{id:An,overflow:Fn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,jt=e,It=null,!0):!1;default:return!1}}function kf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tf(e){if(_e){var t=It;if(t){var n=t;if(!Og(e,t)){if(kf(e))throw Error(V(418));t=mr(n.nextSibling);var r=jt;t&&Og(e,t)?Wy(r,n):(e.flags=e.flags&-4097|2,_e=!1,jt=e)}}else{if(kf(e))throw Error(V(418));e.flags=e.flags&-4097|2,_e=!1,jt=e}}}function Mg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function rs(e){if(e!==jt)return!1;if(!_e)return Mg(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sf(e.type,e.memoizedProps)),t&&(t=It)){if(kf(e))throw Gy(),Error(V(418));for(;t;)Wy(e,t),t=mr(t.nextSibling)}if(Mg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){It=mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}It=null}}else It=jt?mr(e.stateNode.nextSibling):null;return!0}function Gy(){for(var e=It;e;)e=mr(e.nextSibling)}function Di(){It=jt=null,_e=!1}function oh(e){nn===null?nn=[e]:nn.push(e)}var YC=Xn.ReactCurrentBatchConfig;function Jt(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var gl=Cr(null),vl=null,wi=null,ah=null;function sh(){ah=wi=vl=null}function lh(e){var t=gl.current;xe(gl),e._currentValue=t}function Pf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pi(e,t){vl=e,ah=wi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wt=!0),e.firstContext=null)}function Wt(e){var t=e._currentValue;if(ah!==e)if(e={context:e,memoizedValue:t,next:null},wi===null){if(vl===null)throw Error(V(308));wi=e,vl.dependencies={lanes:0,firstContext:e}}else wi=wi.next=e;return t}var Fr=null;function uh(e){Fr===null?Fr=[e]:Fr.push(e)}function Yy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,uh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Hn(e,r)}function Hn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rr=!1;function ch(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Hn(e,n)}return i=r.interleaved,i===null?(t.next=t,uh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Hn(e,n)}function Is(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xp(e,n)}}function Ig(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function yl(e,t,n,r){var i=e.updateQueue;rr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,c=u=s=null,l=o;do{var h=l.lane,p=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,y=l;switch(h=t,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(p,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(p,d,h):g,h==null)break e;d=ke({},d,h);break e;case 2:rr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else p={eventTime:p,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=p,s=d):c=c.next=p,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Yr|=a,e.lanes=a,e.memoizedState=d}}function $g(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Xy=new Y1.Component().refs;function Of(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var lu={isMounted:function(e){return(e=e._reactInternals)?ti(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),i=yr(e),o=Nn(r,i);o.payload=t,n!=null&&(o.callback=n),t=gr(e,o,i),t!==null&&(an(t,e,i,r),Is(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),i=yr(e),o=Nn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gr(e,o,i),t!==null&&(an(t,e,i,r),Is(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=yr(e),i=Nn(n,r);i.tag=2,t!=null&&(i.callback=t),t=gr(e,i,r),t!==null&&(an(t,e,r,n),Is(t,e,r))}};function jg(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ra(n,r)||!ra(i,o):!0}function Ky(e,t,n){var r=!1,i=Sr,o=t.contextType;return typeof o=="object"&&o!==null?o=Wt(o):(i=_t(t)?Hr:at.current,r=t.contextTypes,o=(r=r!=null)?ji(e,i):Sr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=lu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Dg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&lu.enqueueReplaceState(t,t.state,null)}function Mf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Xy,ch(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Wt(o):(o=_t(t)?Hr:at.current,i.context=ji(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Of(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&lu.enqueueReplaceState(i,i.state,null),yl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function yo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Xy&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function is(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lg(e){var t=e._init;return t(e._payload)}function Zy(e){function t(f,m){if(e){var x=f.deletions;x===null?(f.deletions=[m],f.flags|=16):x.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function r(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function i(f,m){return f=xr(f,m),f.index=0,f.sibling=null,f}function o(f,m,x){return f.index=x,e?(x=f.alternate,x!==null?(x=x.index,x<m?(f.flags|=2,m):x):(f.flags|=2,m)):(f.flags|=1048576,m)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,m,x,S){return m===null||m.tag!==6?(m=Uc(x,f.mode,S),m.return=f,m):(m=i(m,x),m.return=f,m)}function s(f,m,x,S){var E=x.type;return E===pi?c(f,m,x.props.children,S,x.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nr&&Lg(E)===m.type)?(S=i(m,x.props),S.ref=yo(f,m,x),S.return=f,S):(S=As(x.type,x.key,x.props,null,f.mode,S),S.ref=yo(f,m,x),S.return=f,S)}function u(f,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Hc(x,f.mode,S),m.return=f,m):(m=i(m,x.children||[]),m.return=f,m)}function c(f,m,x,S,E){return m===null||m.tag!==7?(m=Vr(x,f.mode,S,E),m.return=f,m):(m=i(m,x),m.return=f,m)}function d(f,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Uc(""+m,f.mode,x),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ya:return x=As(m.type,m.key,m.props,null,f.mode,x),x.ref=yo(f,null,m),x.return=f,x;case fi:return m=Hc(m,f.mode,x),m.return=f,m;case nr:var S=m._init;return d(f,S(m._payload),x)}if(Po(m)||po(m))return m=Vr(m,f.mode,x,null),m.return=f,m;is(f,m)}return null}function h(f,m,x,S){var E=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:l(f,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ya:return x.key===E?s(f,m,x,S):null;case fi:return x.key===E?u(f,m,x,S):null;case nr:return E=x._init,h(f,m,E(x._payload),S)}if(Po(x)||po(x))return E!==null?null:c(f,m,x,S,null);is(f,x)}return null}function p(f,m,x,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(x)||null,l(m,f,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ya:return f=f.get(S.key===null?x:S.key)||null,s(m,f,S,E);case fi:return f=f.get(S.key===null?x:S.key)||null,u(m,f,S,E);case nr:var k=S._init;return p(f,m,x,k(S._payload),E)}if(Po(S)||po(S))return f=f.get(x)||null,c(m,f,S,E,null);is(m,S)}return null}function g(f,m,x,S){for(var E=null,k=null,_=m,C=m=0,O=null;_!==null&&C<x.length;C++){_.index>C?(O=_,_=null):O=_.sibling;var M=h(f,_,x[C],S);if(M===null){_===null&&(_=O);break}e&&_&&M.alternate===null&&t(f,_),m=o(M,m,C),k===null?E=M:k.sibling=M,k=M,_=O}if(C===x.length)return n(f,_),_e&&Ir(f,C),E;if(_===null){for(;C<x.length;C++)_=d(f,x[C],S),_!==null&&(m=o(_,m,C),k===null?E=_:k.sibling=_,k=_);return _e&&Ir(f,C),E}for(_=r(f,_);C<x.length;C++)O=p(_,f,C,x[C],S),O!==null&&(e&&O.alternate!==null&&_.delete(O.key===null?C:O.key),m=o(O,m,C),k===null?E=O:k.sibling=O,k=O);return e&&_.forEach(function($){return t(f,$)}),_e&&Ir(f,C),E}function y(f,m,x,S){var E=po(x);if(typeof E!="function")throw Error(V(150));if(x=E.call(x),x==null)throw Error(V(151));for(var k=E=null,_=m,C=m=0,O=null,M=x.next();_!==null&&!M.done;C++,M=x.next()){_.index>C?(O=_,_=null):O=_.sibling;var $=h(f,_,M.value,S);if($===null){_===null&&(_=O);break}e&&_&&$.alternate===null&&t(f,_),m=o($,m,C),k===null?E=$:k.sibling=$,k=$,_=O}if(M.done)return n(f,_),_e&&Ir(f,C),E;if(_===null){for(;!M.done;C++,M=x.next())M=d(f,M.value,S),M!==null&&(m=o(M,m,C),k===null?E=M:k.sibling=M,k=M);return _e&&Ir(f,C),E}for(_=r(f,_);!M.done;C++,M=x.next())M=p(_,f,C,M.value,S),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?C:M.key),m=o(M,m,C),k===null?E=M:k.sibling=M,k=M);return e&&_.forEach(function(I){return t(f,I)}),_e&&Ir(f,C),E}function w(f,m,x,S){if(typeof x=="object"&&x!==null&&x.type===pi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ya:e:{for(var E=x.key,k=m;k!==null;){if(k.key===E){if(E=x.type,E===pi){if(k.tag===7){n(f,k.sibling),m=i(k,x.props.children),m.return=f,f=m;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nr&&Lg(E)===k.type){n(f,k.sibling),m=i(k,x.props),m.ref=yo(f,k,x),m.return=f,f=m;break e}n(f,k);break}else t(f,k);k=k.sibling}x.type===pi?(m=Vr(x.props.children,f.mode,S,x.key),m.return=f,f=m):(S=As(x.type,x.key,x.props,null,f.mode,S),S.ref=yo(f,m,x),S.return=f,f=S)}return a(f);case fi:e:{for(k=x.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(f,m.sibling),m=i(m,x.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else t(f,m);m=m.sibling}m=Hc(x,f.mode,S),m.return=f,f=m}return a(f);case nr:return k=x._init,w(f,m,k(x._payload),S)}if(Po(x))return g(f,m,x,S);if(po(x))return y(f,m,x,S);is(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(f,m.sibling),m=i(m,x),m.return=f,f=m):(n(f,m),m=Uc(x,f.mode,S),m.return=f,f=m),a(f)):n(f,m)}return w}var Li=Zy(!0),Qy=Zy(!1),Ma={},Sn=Cr(Ma),sa=Cr(Ma),la=Cr(Ma);function Nr(e){if(e===Ma)throw Error(V(174));return e}function dh(e,t){switch(ge(la,t),ge(sa,e),ge(Sn,Ma),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lf(t,e)}xe(Sn),ge(Sn,t)}function Ri(){xe(Sn),xe(sa),xe(la)}function Jy(e){Nr(la.current);var t=Nr(Sn.current),n=lf(t,e.type);t!==n&&(ge(sa,e),ge(Sn,n))}function fh(e){sa.current===e&&(xe(Sn),xe(sa))}var Ee=Cr(0);function xl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ac=[];function ph(){for(var e=0;e<Ac.length;e++)Ac[e]._workInProgressVersionPrimary=null;Ac.length=0}var $s=Xn.ReactCurrentDispatcher,Fc=Xn.ReactCurrentBatchConfig,Gr=0,Ce=null,Ae=null,We=null,bl=!1,Bo=!1,ua=0,qC=0;function Je(){throw Error(V(321))}function hh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!un(e[n],t[n]))return!1;return!0}function mh(e,t,n,r,i,o){if(Gr=o,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$s.current=e===null||e.memoizedState===null?QC:JC,e=n(r,i),Bo){o=0;do{if(Bo=!1,ua=0,25<=o)throw Error(V(301));o+=1,We=Ae=null,t.updateQueue=null,$s.current=ek,e=n(r,i)}while(Bo)}if($s.current=wl,t=Ae!==null&&Ae.next!==null,Gr=0,We=Ae=Ce=null,bl=!1,t)throw Error(V(300));return e}function gh(){var e=ua!==0;return ua=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ce.memoizedState=We=e:We=We.next=e,We}function Gt(){if(Ae===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=We===null?Ce.memoizedState:We.next;if(t!==null)We=t,Ae=e;else{if(e===null)throw Error(V(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},We===null?Ce.memoizedState=We=e:We=We.next=e}return We}function ca(e,t){return typeof t=="function"?t(e):t}function Nc(e){var t=Gt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var c=u.lane;if((Gr&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,Ce.lanes|=c,Yr|=c}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,un(r,t.memoizedState)||(wt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ce.lanes|=o,Yr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zc(e){var t=Gt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);un(o,t.memoizedState)||(wt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ex(){}function tx(e,t){var n=Ce,r=Gt(),i=t(),o=!un(r.memoizedState,i);if(o&&(r.memoizedState=i,wt=!0),r=r.queue,vh(ix.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,da(9,rx.bind(null,n,r,i,t),void 0,null),Ge===null)throw Error(V(349));Gr&30||nx(n,t,i)}return i}function nx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rx(e,t,n,r){t.value=n,t.getSnapshot=r,ox(t)&&ax(e)}function ix(e,t,n){return n(function(){ox(t)&&ax(e)})}function ox(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!un(e,n)}catch{return!0}}function ax(e){var t=Hn(e,1);t!==null&&an(t,e,1,-1)}function Rg(e){var t=gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},t.queue=e,e=e.dispatch=ZC.bind(null,Ce,e),[t.memoizedState,e]}function da(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function sx(){return Gt().memoizedState}function js(e,t,n,r){var i=gn();Ce.flags|=e,i.memoizedState=da(1|t,n,void 0,r===void 0?null:r)}function uu(e,t,n,r){var i=Gt();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var a=Ae.memoizedState;if(o=a.destroy,r!==null&&hh(r,a.deps)){i.memoizedState=da(t,n,o,r);return}}Ce.flags|=e,i.memoizedState=da(1|t,n,o,r)}function Ag(e,t){return js(8390656,8,e,t)}function vh(e,t){return uu(2048,8,e,t)}function lx(e,t){return uu(4,2,e,t)}function ux(e,t){return uu(4,4,e,t)}function cx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dx(e,t,n){return n=n!=null?n.concat([e]):null,uu(4,4,cx.bind(null,t,e),n)}function yh(){}function fx(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function px(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hx(e,t,n){return Gr&21?(un(n,t)||(n=vy(),Ce.lanes|=n,Yr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=n)}function XC(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=Fc.transition;Fc.transition={};try{e(!1),t()}finally{he=n,Fc.transition=r}}function mx(){return Gt().memoizedState}function KC(e,t,n){var r=yr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gx(e))vx(t,n);else if(n=Yy(e,t,n,r),n!==null){var i=ft();an(n,e,r,i),yx(n,t,r)}}function ZC(e,t,n){var r=yr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gx(e))vx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,un(l,a)){var s=t.interleaved;s===null?(i.next=i,uh(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Yy(e,t,i,r),n!==null&&(i=ft(),an(n,e,r,i),yx(n,t,r))}}function gx(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function vx(e,t){Bo=bl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xp(e,n)}}var wl={readContext:Wt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},QC={readContext:Wt,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:Wt,useEffect:Ag,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,js(4194308,4,cx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return js(4194308,4,e,t)},useInsertionEffect:function(e,t){return js(4,2,e,t)},useMemo:function(e,t){var n=gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=KC.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:Rg,useDebugValue:yh,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=Rg(!1),t=e[0];return e=XC.bind(null,e[1]),gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,i=gn();if(_e){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Ge===null)throw Error(V(349));Gr&30||nx(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ag(ix.bind(null,r,o,e),[e]),r.flags|=2048,da(9,rx.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=gn(),t=Ge.identifierPrefix;if(_e){var n=Fn,r=An;n=(r&~(1<<32-on(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ua++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},JC={readContext:Wt,useCallback:fx,useContext:Wt,useEffect:vh,useImperativeHandle:dx,useInsertionEffect:lx,useLayoutEffect:ux,useMemo:px,useReducer:Nc,useRef:sx,useState:function(){return Nc(ca)},useDebugValue:yh,useDeferredValue:function(e){var t=Gt();return hx(t,Ae.memoizedState,e)},useTransition:function(){var e=Nc(ca)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:ex,useSyncExternalStore:tx,useId:mx,unstable_isNewReconciler:!1},ek={readContext:Wt,useCallback:fx,useContext:Wt,useEffect:vh,useImperativeHandle:dx,useInsertionEffect:lx,useLayoutEffect:ux,useMemo:px,useReducer:zc,useRef:sx,useState:function(){return zc(ca)},useDebugValue:yh,useDeferredValue:function(e){var t=Gt();return Ae===null?t.memoizedState=e:hx(t,Ae.memoizedState,e)},useTransition:function(){var e=zc(ca)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:ex,useSyncExternalStore:tx,useId:mx,unstable_isNewReconciler:!1};function Ai(e,t){try{var n="",r=t;do n+=PE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Bc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function If(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tk=typeof WeakMap=="function"?WeakMap:Map;function xx(e,t,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_l||(_l=!0,Bf=r),If(e,t)},n}function bx(e,t,n){n=Nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){If(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){If(e,t),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Fg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tk;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=mk.bind(null,e,t,n),t.then(e,e))}function Ng(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zg(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nn(-1,1),t.tag=2,gr(n,t,1))),n.lanes|=1),e)}var nk=Xn.ReactCurrentOwner,wt=!1;function ct(e,t,n,r){t.child=e===null?Qy(t,null,n,r):Li(t,e.child,n,r)}function Bg(e,t,n,r,i){n=n.render;var o=t.ref;return Pi(t,i),r=mh(e,t,n,r,o,i),n=gh(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(_e&&n&&rh(t),t.flags|=1,ct(e,t,r,i),t.child)}function Vg(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!kh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,wx(e,t,o,r,i)):(e=As(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(a,r)&&e.ref===t.ref)return Wn(e,t,i)}return t.flags|=1,e=xr(o,r),e.ref=t.ref,e.return=t,t.child=e}function wx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ra(o,r)&&e.ref===t.ref)if(wt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(wt=!0);else return t.lanes=e.lanes,Wn(e,t,i)}return $f(e,t,n,r,i)}function Sx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(_i,Ot),Ot|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(_i,Ot),Ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ge(_i,Ot),Ot|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ge(_i,Ot),Ot|=r;return ct(e,t,i,n),t.child}function _x(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $f(e,t,n,r,i){var o=_t(n)?Hr:at.current;return o=ji(t,o),Pi(t,i),n=mh(e,t,n,r,o,i),r=gh(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(_e&&r&&rh(t),t.flags|=1,ct(e,t,n,i),t.child)}function Ug(e,t,n,r,i){if(_t(n)){var o=!0;pl(t)}else o=!1;if(Pi(t,i),t.stateNode===null)Ds(e,t),Ky(t,n,r),Mf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wt(u):(u=_t(n)?Hr:at.current,u=ji(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Dg(t,a,r,u),rr=!1;var h=t.memoizedState;a.state=h,yl(t,r,a,i),s=t.memoizedState,l!==r||h!==s||St.current||rr?(typeof c=="function"&&(Of(t,n,c,r),s=t.memoizedState),(l=rr||jg(t,n,l,r,h,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qy(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Jt(t.type,l),a.props=u,d=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Wt(s):(s=_t(n)?Hr:at.current,s=ji(t,s));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||h!==s)&&Dg(t,a,r,s),rr=!1,h=t.memoizedState,a.state=h,yl(t,r,a,i);var g=t.memoizedState;l!==d||h!==g||St.current||rr?(typeof p=="function"&&(Of(t,n,p,r),g=t.memoizedState),(u=rr||jg(t,n,u,r,h,g,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return jf(e,t,n,r,o,i)}function jf(e,t,n,r,i,o){_x(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Pg(t,n,!1),Wn(e,t,o);r=t.stateNode,nk.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Li(t,e.child,null,o),t.child=Li(t,null,l,o)):ct(e,t,l,o),t.memoizedState=r.state,i&&Pg(t,n,!0),t.child}function Ex(e){var t=e.stateNode;t.pendingContext?Tg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tg(e,t.context,!1),dh(e,t.containerInfo)}function Hg(e,t,n,r,i){return Di(),oh(i),t.flags|=256,ct(e,t,n,r),t.child}var Df={dehydrated:null,treeContext:null,retryLane:0};function Lf(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cx(e,t,n){var r=t.pendingProps,i=Ee.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(Ee,i&1),e===null)return Tf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=fu(a,r,0,null),e=Vr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Lf(n),t.memoizedState=Df,e):xh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return rk(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=xr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=xr(l,o):(o=Vr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Lf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Df,r}return o=e.child,e=o.sibling,r=xr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xh(e,t){return t=fu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function os(e,t,n,r){return r!==null&&oh(r),Li(t,e.child,null,n),e=xh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rk(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Bc(Error(V(422))),os(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=fu({mode:"visible",children:r.children},i,0,null),o=Vr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Li(t,e.child,null,a),t.child.memoizedState=Lf(a),t.memoizedState=Df,o);if(!(t.mode&1))return os(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=Bc(o,r,void 0),os(e,t,a,r)}if(l=(a&e.childLanes)!==0,wt||l){if(r=Ge,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Hn(e,i),an(r,e,i,-1))}return Ch(),r=Bc(Error(V(421))),os(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=gk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,It=mr(i.nextSibling),jt=t,_e=!0,nn=null,e!==null&&(Bt[Vt++]=An,Bt[Vt++]=Fn,Bt[Vt++]=Wr,An=e.id,Fn=e.overflow,Wr=t),t=xh(t,r.children),t.flags|=4096,t)}function Wg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pf(e.return,t,n)}function Vc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function kx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ct(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wg(e,n,t);else if(e.tag===19)Wg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&xl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&xl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vc(t,!0,n,null,o);break;case"together":Vc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ds(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=xr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ik(e,t,n){switch(t.tag){case 3:Ex(t),Di();break;case 5:Jy(t);break;case 1:_t(t.type)&&pl(t);break;case 4:dh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(gl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?Cx(e,t,n):(ge(Ee,Ee.current&1),e=Wn(e,t,n),e!==null?e.sibling:null);ge(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return kx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Sx(e,t,n)}return Wn(e,t,n)}var Tx,Rf,Px,Ox;Tx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rf=function(){};Px=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Nr(Sn.current);var o=null;switch(n){case"input":i=rf(e,i),r=rf(e,r),o=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),o=[];break;case"textarea":i=sf(e,i),r=sf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=dl)}uf(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ko.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ve("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ox=function(e,t,n,r){n!==r&&(t.flags|=4)};function xo(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ok(e,t,n){var r=t.pendingProps;switch(ih(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return _t(t.type)&&fl(),et(t),null;case 3:return r=t.stateNode,Ri(),xe(St),xe(at),ph(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(rs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nn!==null&&(Hf(nn),nn=null))),Rf(e,t),et(t),null;case 5:fh(t);var i=Nr(la.current);if(n=t.type,e!==null&&t.stateNode!=null)Px(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return et(t),null}if(e=Nr(Sn.current),rs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[xn]=t,r[aa]=o,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Mo.length;i++)ve(Mo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":eg(r,o),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ve("invalid",r);break;case"textarea":ng(r,o),ve("invalid",r)}uf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ns(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ns(r.textContent,l,e),i=["children",""+l]):Ko.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ve("scroll",r)}switch(n){case"input":qa(r),tg(r,o,!0);break;case"textarea":qa(r),rg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=dl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ny(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[xn]=t,e[aa]=r,Tx(e,t,!1,!1),t.stateNode=e;e:{switch(a=cf(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mo.length;i++)ve(Mo[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":eg(e,r),i=rf(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ve("invalid",e);break;case"textarea":ng(e,r),i=sf(e,r),ve("invalid",e);break;default:i=r}uf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?oy(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ry(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Zo(e,s):typeof s=="number"&&Zo(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ko.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ve("scroll",e):s!=null&&Up(e,o,s,a))}switch(n){case"input":qa(e),tg(e,r,!1);break;case"textarea":qa(e),rg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ei(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ei(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return et(t),null;case 6:if(e&&t.stateNode!=null)Ox(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Nr(la.current),Nr(Sn.current),rs(t)){if(r=t.stateNode,n=t.memoizedProps,r[xn]=t,(o=r.nodeValue!==n)&&(e=jt,e!==null))switch(e.tag){case 3:ns(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ns(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=t,t.stateNode=r}return et(t),null;case 13:if(xe(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&It!==null&&t.mode&1&&!(t.flags&128))Gy(),Di(),t.flags|=98560,o=!1;else if(o=rs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[xn]=t}else Di(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;et(t),o=!1}else nn!==null&&(Hf(nn),nn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?Ne===0&&(Ne=3):Ch())),t.updateQueue!==null&&(t.flags|=4),et(t),null);case 4:return Ri(),Rf(e,t),e===null&&ia(t.stateNode.containerInfo),et(t),null;case 10:return lh(t.type._context),et(t),null;case 17:return _t(t.type)&&fl(),et(t),null;case 19:if(xe(Ee),o=t.memoizedState,o===null)return et(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)xo(o,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=xl(e),a!==null){for(t.flags|=128,xo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ee,Ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&Oe()>Fi&&(t.flags|=128,r=!0,xo(o,!1),t.lanes=4194304)}else{if(!r)if(e=xl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!_e)return et(t),null}else 2*Oe()-o.renderingStartTime>Fi&&n!==1073741824&&(t.flags|=128,r=!0,xo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Oe(),t.sibling=null,n=Ee.current,ge(Ee,r?n&1|2:n&1),t):(et(t),null);case 22:case 23:return Eh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ot&1073741824&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function ak(e,t){switch(ih(t),t.tag){case 1:return _t(t.type)&&fl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ri(),xe(St),xe(at),ph(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fh(t),null;case 13:if(xe(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Di()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Ee),null;case 4:return Ri(),null;case 10:return lh(t.type._context),null;case 22:case 23:return Eh(),null;case 24:return null;default:return null}}var as=!1,it=!1,sk=typeof WeakSet=="function"?WeakSet:Set,W=null;function Si(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Af(e,t,n){try{n()}catch(r){Te(e,t,r)}}var Gg=!1;function lk(e,t){if(bf=ll,e=jy(),nh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===e)break t;if(h===n&&++u===i&&(l=a),h===o&&++c===r&&(s=a),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(wf={focusedElem:e,selectionRange:n},ll=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,w=g.memoizedState,f=t.stateNode,m=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Jt(t.type,y),w);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){Te(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return g=Gg,Gg=!1,g}function Vo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Af(t,n,o)}i=i.next}while(i!==r)}}function cu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ff(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mx(e){var t=e.alternate;t!==null&&(e.alternate=null,Mx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xn],delete t[aa],delete t[Ef],delete t[HC],delete t[WC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ix(e){return e.tag===5||e.tag===3||e.tag===4}function Yg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ix(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dl));else if(r!==4&&(e=e.child,e!==null))for(Nf(e,t,n),e=e.sibling;e!==null;)Nf(e,t,n),e=e.sibling}function zf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zf(e,t,n),e=e.sibling;e!==null;)zf(e,t,n),e=e.sibling}var Xe=null,en=!1;function er(e,t,n){for(n=n.child;n!==null;)$x(e,t,n),n=n.sibling}function $x(e,t,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(nu,n)}catch{}switch(n.tag){case 5:it||Si(n,t);case 6:var r=Xe,i=en;Xe=null,er(e,t,n),Xe=r,en=i,Xe!==null&&(en?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(en?(e=Xe,n=n.stateNode,e.nodeType===8?Lc(e.parentNode,n):e.nodeType===1&&Lc(e,n),ta(e)):Lc(Xe,n.stateNode));break;case 4:r=Xe,i=en,Xe=n.stateNode.containerInfo,en=!0,er(e,t,n),Xe=r,en=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Af(n,t,a),i=i.next}while(i!==r)}er(e,t,n);break;case 1:if(!it&&(Si(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,t,l)}er(e,t,n);break;case 21:er(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,er(e,t,n),it=r):er(e,t,n);break;default:er(e,t,n)}}function qg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sk),t.forEach(function(r){var i=vk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,en=!1;break e;case 3:Xe=l.stateNode.containerInfo,en=!0;break e;case 4:Xe=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(Xe===null)throw Error(V(160));$x(o,a,i),Xe=null,en=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jx(t,e),t=t.sibling}function jx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xt(t,e),hn(e),r&4){try{Vo(3,e,e.return),cu(3,e)}catch(y){Te(e,e.return,y)}try{Vo(5,e,e.return)}catch(y){Te(e,e.return,y)}}break;case 1:Xt(t,e),hn(e),r&512&&n!==null&&Si(n,n.return);break;case 5:if(Xt(t,e),hn(e),r&512&&n!==null&&Si(n,n.return),e.flags&32){var i=e.stateNode;try{Zo(i,"")}catch(y){Te(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&ey(i,o),cf(l,a);var u=cf(l,o);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?oy(i,d):c==="dangerouslySetInnerHTML"?ry(i,d):c==="children"?Zo(i,d):Up(i,c,d,u)}switch(l){case"input":of(i,o);break;case"textarea":ty(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Ei(i,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?Ei(i,!!o.multiple,o.defaultValue,!0):Ei(i,!!o.multiple,o.multiple?[]:"",!1))}i[aa]=o}catch(y){Te(e,e.return,y)}}break;case 6:if(Xt(t,e),hn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Te(e,e.return,y)}}break;case 3:if(Xt(t,e),hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(t.containerInfo)}catch(y){Te(e,e.return,y)}break;case 4:Xt(t,e),hn(e);break;case 13:Xt(t,e),hn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Sh=Oe())),r&4&&qg(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||c,Xt(t,e),it=u):Xt(t,e),hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(W=e,c=e.child;c!==null;){for(d=W=c;W!==null;){switch(h=W,p=h.child,h.tag){case 0:case 11:case 14:case 15:Vo(4,h,h.return);break;case 1:Si(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){Te(r,n,y)}}break;case 5:Si(h,h.return);break;case 22:if(h.memoizedState!==null){Kg(d);continue}}p!==null?(p.return=h,W=p):Kg(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=iy("display",a))}catch(y){Te(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Te(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Xt(t,e),hn(e),r&4&&qg(e);break;case 21:break;default:Xt(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ix(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zo(i,""),r.flags&=-33);var o=Yg(e);zf(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Yg(e);Nf(e,l,a);break;default:throw Error(V(161))}}catch(s){Te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uk(e,t,n){W=e,Dx(e)}function Dx(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||as;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||it;l=as;var u=it;if(as=a,(it=s)&&!u)for(W=i;W!==null;)a=W,s=a.child,a.tag===22&&a.memoizedState!==null?Zg(i):s!==null?(s.return=a,W=s):Zg(i);for(;o!==null;)W=o,Dx(o),o=o.sibling;W=i,as=l,it=u}Xg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,W=o):Xg(e)}}function Xg(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||cu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Jt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&$g(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$g(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ta(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}it||t.flags&512&&Ff(t)}catch(h){Te(t,t.return,h)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function Kg(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function Zg(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cu(4,t)}catch(s){Te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Te(t,i,s)}}var o=t.return;try{Ff(t)}catch(s){Te(t,o,s)}break;case 5:var a=t.return;try{Ff(t)}catch(s){Te(t,a,s)}}}catch(s){Te(t,t.return,s)}if(t===e){W=null;break}var l=t.sibling;if(l!==null){l.return=t.return,W=l;break}W=t.return}}var ck=Math.ceil,Sl=Xn.ReactCurrentDispatcher,bh=Xn.ReactCurrentOwner,Ht=Xn.ReactCurrentBatchConfig,se=0,Ge=null,De=null,Ze=0,Ot=0,_i=Cr(0),Ne=0,fa=null,Yr=0,du=0,wh=0,Uo=null,bt=null,Sh=0,Fi=1/0,In=null,_l=!1,Bf=null,vr=null,ss=!1,lr=null,El=0,Ho=0,Vf=null,Ls=-1,Rs=0;function ft(){return se&6?Oe():Ls!==-1?Ls:Ls=Oe()}function yr(e){return e.mode&1?se&2&&Ze!==0?Ze&-Ze:YC.transition!==null?(Rs===0&&(Rs=vy()),Rs):(e=he,e!==0||(e=window.event,e=e===void 0?16:Ey(e.type)),e):1}function an(e,t,n,r){if(50<Ho)throw Ho=0,Vf=null,Error(V(185));Ta(e,n,r),(!(se&2)||e!==Ge)&&(e===Ge&&(!(se&2)&&(du|=n),Ne===4&&or(e,Ze)),Et(e,r),n===1&&se===0&&!(t.mode&1)&&(Fi=Oe()+500,su&&kr()))}function Et(e,t){var n=e.callbackNode;YE(e,t);var r=sl(e,e===Ge?Ze:0);if(r===0)n!==null&&ag(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ag(n),t===1)e.tag===0?GC(Qg.bind(null,e)):Uy(Qg.bind(null,e)),VC(function(){!(se&6)&&kr()}),n=null;else{switch(yy(r)){case 1:n=qp;break;case 4:n=my;break;case 16:n=al;break;case 536870912:n=gy;break;default:n=al}n=Vx(n,Lx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lx(e,t){if(Ls=-1,Rs=0,se&6)throw Error(V(327));var n=e.callbackNode;if(Oi()&&e.callbackNode!==n)return null;var r=sl(e,e===Ge?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Cl(e,r);else{t=r;var i=se;se|=2;var o=Ax();(Ge!==e||Ze!==t)&&(In=null,Fi=Oe()+500,Br(e,t));do try{pk();break}catch(l){Rx(e,l)}while(1);sh(),Sl.current=o,se=i,De!==null?t=0:(Ge=null,Ze=0,t=Ne)}if(t!==0){if(t===2&&(i=mf(e),i!==0&&(r=i,t=Uf(e,i))),t===1)throw n=fa,Br(e,0),or(e,r),Et(e,Oe()),n;if(t===6)or(e,r);else{if(i=e.current.alternate,!(r&30)&&!dk(i)&&(t=Cl(e,r),t===2&&(o=mf(e),o!==0&&(r=o,t=Uf(e,o))),t===1))throw n=fa,Br(e,0),or(e,r),Et(e,Oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:$r(e,bt,In);break;case 3:if(or(e,r),(r&130023424)===r&&(t=Sh+500-Oe(),10<t)){if(sl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=_f($r.bind(null,e,bt,In),t);break}$r(e,bt,In);break;case 4:if(or(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-on(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ck(r/1960))-r,10<r){e.timeoutHandle=_f($r.bind(null,e,bt,In),r);break}$r(e,bt,In);break;case 5:$r(e,bt,In);break;default:throw Error(V(329))}}}return Et(e,Oe()),e.callbackNode===n?Lx.bind(null,e):null}function Uf(e,t){var n=Uo;return e.current.memoizedState.isDehydrated&&(Br(e,t).flags|=256),e=Cl(e,t),e!==2&&(t=bt,bt=n,t!==null&&Hf(t)),e}function Hf(e){bt===null?bt=e:bt.push.apply(bt,e)}function dk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!un(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function or(e,t){for(t&=~wh,t&=~du,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-on(t),r=1<<n;e[n]=-1,t&=~r}}function Qg(e){if(se&6)throw Error(V(327));Oi();var t=sl(e,0);if(!(t&1))return Et(e,Oe()),null;var n=Cl(e,t);if(e.tag!==0&&n===2){var r=mf(e);r!==0&&(t=r,n=Uf(e,r))}if(n===1)throw n=fa,Br(e,0),or(e,t),Et(e,Oe()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$r(e,bt,In),Et(e,Oe()),null}function _h(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Fi=Oe()+500,su&&kr())}}function qr(e){lr!==null&&lr.tag===0&&!(se&6)&&Oi();var t=se;se|=1;var n=Ht.transition,r=he;try{if(Ht.transition=null,he=1,e)return e()}finally{he=r,Ht.transition=n,se=t,!(se&6)&&kr()}}function Eh(){Ot=_i.current,xe(_i)}function Br(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,BC(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(ih(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fl();break;case 3:Ri(),xe(St),xe(at),ph();break;case 5:fh(r);break;case 4:Ri();break;case 13:xe(Ee);break;case 19:xe(Ee);break;case 10:lh(r.type._context);break;case 22:case 23:Eh()}n=n.return}if(Ge=e,De=e=xr(e.current,null),Ze=Ot=t,Ne=0,fa=null,wh=du=Yr=0,bt=Uo=null,Fr!==null){for(t=0;t<Fr.length;t++)if(n=Fr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Fr=null}return e}function Rx(e,t){do{var n=De;try{if(sh(),$s.current=wl,bl){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bl=!1}if(Gr=0,We=Ae=Ce=null,Bo=!1,ua=0,bh.current=null,n===null||n.return===null){Ne=1,fa=t,De=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Ze,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Ng(a);if(p!==null){p.flags&=-257,zg(p,a,l,o,t),p.mode&1&&Fg(o,u,t),t=p,s=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(s),t.updateQueue=y}else g.add(s);break e}else{if(!(t&1)){Fg(o,u,t),Ch();break e}s=Error(V(426))}}else if(_e&&l.mode&1){var w=Ng(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),zg(w,a,l,o,t),oh(Ai(s,l));break e}}o=s=Ai(s,l),Ne!==4&&(Ne=2),Uo===null?Uo=[o]:Uo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=xx(o,s,t);Ig(o,f);break e;case 1:l=s;var m=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(vr===null||!vr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=bx(o,l,t);Ig(o,S);break e}}o=o.return}while(o!==null)}Nx(n)}catch(E){t=E,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function Ax(){var e=Sl.current;return Sl.current=wl,e===null?wl:e}function Ch(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ge===null||!(Yr&268435455)&&!(du&268435455)||or(Ge,Ze)}function Cl(e,t){var n=se;se|=2;var r=Ax();(Ge!==e||Ze!==t)&&(In=null,Br(e,t));do try{fk();break}catch(i){Rx(e,i)}while(1);if(sh(),se=n,Sl.current=r,De!==null)throw Error(V(261));return Ge=null,Ze=0,Ne}function fk(){for(;De!==null;)Fx(De)}function pk(){for(;De!==null&&!FE();)Fx(De)}function Fx(e){var t=Bx(e.alternate,e,Ot);e.memoizedProps=e.pendingProps,t===null?Nx(e):De=t,bh.current=null}function Nx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ak(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,De=null;return}}else if(n=ok(n,t,Ot),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Ne===0&&(Ne=5)}function $r(e,t,n){var r=he,i=Ht.transition;try{Ht.transition=null,he=1,hk(e,t,n,r)}finally{Ht.transition=i,he=r}return null}function hk(e,t,n,r){do Oi();while(lr!==null);if(se&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(qE(e,o),e===Ge&&(De=Ge=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ss||(ss=!0,Vx(al,function(){return Oi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ht.transition,Ht.transition=null;var a=he;he=1;var l=se;se|=4,bh.current=null,lk(e,n),jx(n,e),DC(wf),ll=!!bf,wf=bf=null,e.current=n,uk(n),NE(),se=l,he=a,Ht.transition=o}else e.current=n;if(ss&&(ss=!1,lr=e,El=i),o=e.pendingLanes,o===0&&(vr=null),VE(n.stateNode),Et(e,Oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_l)throw _l=!1,e=Bf,Bf=null,e;return El&1&&e.tag!==0&&Oi(),o=e.pendingLanes,o&1?e===Vf?Ho++:(Ho=0,Vf=e):Ho=0,kr(),null}function Oi(){if(lr!==null){var e=yy(El),t=Ht.transition,n=he;try{if(Ht.transition=null,he=16>e?16:e,lr===null)var r=!1;else{if(e=lr,lr=null,El=0,se&6)throw Error(V(331));var i=se;for(se|=4,W=e.current;W!==null;){var o=W,a=o.child;if(W.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(W=u;W!==null;){var c=W;switch(c.tag){case 0:case 11:case 15:Vo(8,c,o)}var d=c.child;if(d!==null)d.return=c,W=d;else for(;W!==null;){c=W;var h=c.sibling,p=c.return;if(Mx(c),c===u){W=null;break}if(h!==null){h.return=p,W=h;break}W=p}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}W=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,W=a;else e:for(;W!==null;){if(o=W,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vo(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,W=f;break e}W=o.return}}var m=e.current;for(W=m;W!==null;){a=W;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,W=x;else e:for(a=m;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:cu(9,l)}}catch(E){Te(l,l.return,E)}if(l===a){W=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,W=S;break e}W=l.return}}if(se=i,kr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(nu,e)}catch{}r=!0}return r}finally{he=n,Ht.transition=t}}return!1}function Jg(e,t,n){t=Ai(n,t),t=xx(e,t,1),e=gr(e,t,1),t=ft(),e!==null&&(Ta(e,1,t),Et(e,t))}function Te(e,t,n){if(e.tag===3)Jg(e,e,n);else for(;t!==null;){if(t.tag===3){Jg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){e=Ai(n,e),e=bx(t,e,1),t=gr(t,e,1),e=ft(),t!==null&&(Ta(t,1,e),Et(t,e));break}}t=t.return}}function mk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(Ze&n)===n&&(Ne===4||Ne===3&&(Ze&130023424)===Ze&&500>Oe()-Sh?Br(e,0):wh|=n),Et(e,t)}function zx(e,t){t===0&&(e.mode&1?(t=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):t=1);var n=ft();e=Hn(e,t),e!==null&&(Ta(e,t,n),Et(e,n))}function gk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zx(e,n)}function vk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),zx(e,n)}var Bx;Bx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||St.current)wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return wt=!1,ik(e,t,n);wt=!!(e.flags&131072)}else wt=!1,_e&&t.flags&1048576&&Hy(t,ml,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ds(e,t),e=t.pendingProps;var i=ji(t,at.current);Pi(t,n),i=mh(null,t,r,e,i,n);var o=gh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_t(r)?(o=!0,pl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ch(t),i.updater=lu,t.stateNode=i,i._reactInternals=t,Mf(t,r,e,n),t=jf(null,t,r,!0,o,n)):(t.tag=0,_e&&o&&rh(t),ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ds(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=xk(r),e=Jt(r,e),i){case 0:t=$f(null,t,r,e,n);break e;case 1:t=Ug(null,t,r,e,n);break e;case 11:t=Bg(null,t,r,e,n);break e;case 14:t=Vg(null,t,r,Jt(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),$f(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Ug(e,t,r,i,n);case 3:e:{if(Ex(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,qy(e,t),yl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ai(Error(V(423)),t),t=Hg(e,t,r,n,i);break e}else if(r!==i){i=Ai(Error(V(424)),t),t=Hg(e,t,r,n,i);break e}else for(It=mr(t.stateNode.containerInfo.firstChild),jt=t,_e=!0,nn=null,n=Qy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Di(),r===i){t=Wn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return Jy(t),e===null&&Tf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Sf(r,i)?a=null:o!==null&&Sf(r,o)&&(t.flags|=32),_x(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&Tf(t),null;case 13:return Cx(e,t,n);case 4:return dh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Li(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Bg(e,t,r,i,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ge(gl,r._currentValue),r._currentValue=a,o!==null)if(un(o.value,a)){if(o.children===i.children&&!St.current){t=Wn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Nn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Pf(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Pf(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pi(t,n),i=Wt(i),r=r(i),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,i=Jt(r,t.pendingProps),i=Jt(r.type,i),Vg(e,t,r,i,n);case 15:return wx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Ds(e,t),t.tag=1,_t(r)?(e=!0,pl(t)):e=!1,Pi(t,n),Ky(t,r,i),Mf(t,r,i,n),jf(null,t,r,!0,e,n);case 19:return kx(e,t,n);case 22:return Sx(e,t,n)}throw Error(V(156,t.tag))};function Vx(e,t){return hy(e,t)}function yk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(e,t,n,r){return new yk(e,t,n,r)}function kh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xk(e){if(typeof e=="function")return kh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wp)return 11;if(e===Gp)return 14}return 2}function xr(e,t){var n=e.alternate;return n===null?(n=Ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function As(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")kh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case pi:return Vr(n.children,i,o,t);case Hp:a=8,i|=8;break;case Jd:return e=Ut(12,n,t,i|2),e.elementType=Jd,e.lanes=o,e;case ef:return e=Ut(13,n,t,i),e.elementType=ef,e.lanes=o,e;case tf:return e=Ut(19,n,t,i),e.elementType=tf,e.lanes=o,e;case Z1:return fu(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X1:a=10;break e;case K1:a=9;break e;case Wp:a=11;break e;case Gp:a=14;break e;case nr:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Ut(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Vr(e,t,n,r){return e=Ut(7,e,r,t),e.lanes=n,e}function fu(e,t,n,r){return e=Ut(22,e,r,t),e.elementType=Z1,e.lanes=n,e.stateNode={isHidden:!1},e}function Uc(e,t,n){return e=Ut(6,e,null,t),e.lanes=n,e}function Hc(e,t,n){return t=Ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Th(e,t,n,r,i,o,a,l,s){return e=new bk(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ch(o),e}function wk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ux(e){if(!e)return Sr;e=e._reactInternals;e:{if(ti(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(_t(n))return Vy(e,n,t)}return t}function Hx(e,t,n,r,i,o,a,l,s){return e=Th(n,r,!0,e,i,o,a,l,s),e.context=Ux(null),n=e.current,r=ft(),i=yr(n),o=Nn(r,i),o.callback=t??null,gr(n,o,i),e.current.lanes=i,Ta(e,i,r),Et(e,r),e}function pu(e,t,n,r){var i=t.current,o=ft(),a=yr(i);return n=Ux(n),t.context===null?t.context=n:t.pendingContext=n,t=Nn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gr(i,t,a),e!==null&&(an(e,i,a,o),Is(e,i,a)),a}function kl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function e0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ph(e,t){e0(e,t),(e=e.alternate)&&e0(e,t)}function Sk(){return null}var Wx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oh(e){this._internalRoot=e}hu.prototype.render=Oh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));pu(e,t,null,null)};hu.prototype.unmount=Oh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qr(function(){pu(null,e,null,null)}),t[Un]=null}};function hu(e){this._internalRoot=e}hu.prototype.unstable_scheduleHydration=function(e){if(e){var t=wy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ir.length&&t!==0&&t<ir[n].priority;n++);ir.splice(n,0,e),n===0&&_y(e)}};function Mh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function t0(){}function _k(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=kl(a);o.call(u)}}var a=Hx(t,r,e,0,null,!1,!1,"",t0);return e._reactRootContainer=a,e[Un]=a.current,ia(e.nodeType===8?e.parentNode:e),qr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=kl(s);l.call(u)}}var s=Th(e,0,!1,null,null,!1,!1,"",t0);return e._reactRootContainer=s,e[Un]=s.current,ia(e.nodeType===8?e.parentNode:e),qr(function(){pu(t,s,n,r)}),s}function gu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=kl(a);l.call(s)}}pu(t,a,e,i)}else a=_k(n,t,e,i,r);return kl(a)}xy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Oo(t.pendingLanes);n!==0&&(Xp(t,n|1),Et(t,Oe()),!(se&6)&&(Fi=Oe()+500,kr()))}break;case 13:qr(function(){var r=Hn(e,1);if(r!==null){var i=ft();an(r,e,1,i)}}),Ph(e,1)}};Kp=function(e){if(e.tag===13){var t=Hn(e,134217728);if(t!==null){var n=ft();an(t,e,134217728,n)}Ph(e,134217728)}};by=function(e){if(e.tag===13){var t=yr(e),n=Hn(e,t);if(n!==null){var r=ft();an(n,e,t,r)}Ph(e,t)}};wy=function(){return he};Sy=function(e,t){var n=he;try{return he=e,t()}finally{he=n}};ff=function(e,t,n){switch(t){case"input":if(of(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=au(r);if(!i)throw Error(V(90));J1(r),of(r,i)}}}break;case"textarea":ty(e,n);break;case"select":t=n.value,t!=null&&Ei(e,!!n.multiple,t,!1)}};ly=_h;uy=qr;var Ek={usingClientEntryPoint:!1,Events:[Oa,vi,au,ay,sy,_h]},bo={findFiberByHostInstance:Ar,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ck={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fy(e),e===null?null:e.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||Sk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{nu=ls.inject(Ck),wn=ls}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ek;At.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mh(t))throw Error(V(200));return wk(e,t,null,n)};At.createRoot=function(e,t){if(!Mh(e))throw Error(V(299));var n=!1,r="",i=Wx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Th(e,1,!1,null,null,n,!1,r,i),e[Un]=t.current,ia(e.nodeType===8?e.parentNode:e),new Oh(t)};At.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=fy(t),e=e===null?null:e.stateNode,e};At.flushSync=function(e){return qr(e)};At.hydrate=function(e,t,n){if(!mu(t))throw Error(V(200));return gu(null,e,t,!0,n)};At.hydrateRoot=function(e,t,n){if(!Mh(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Wx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Hx(t,null,e,1,n??null,i,!1,o,a),e[Un]=t.current,ia(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new hu(t)};At.render=function(e,t,n){if(!mu(t))throw Error(V(200));return gu(null,e,t,!1,n)};At.unmountComponentAtNode=function(e){if(!mu(e))throw Error(V(40));return e._reactRootContainer?(qr(function(){gu(null,null,e,!1,function(){e._reactRootContainer=null,e[Un]=null})}),!0):!1};At.unstable_batchedUpdates=_h;At.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!mu(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return gu(e,t,n,!1,r)};At.version="18.2.0-next-9e3b772b8-20220608";function Gx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gx)}catch(e){console.error(e)}}Gx(),H1.exports=At;var vu=H1.exports,n0=vu;Zd.createRoot=n0.createRoot,Zd.hydrateRoot=n0.hydrateRoot;var ot=function(){return ot=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ot.apply(this,arguments)};function Ni(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function kk(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Tk=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Pk=kk(function(e){return Tk.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ye="-ms-",Wo="-moz-",ue="-webkit-",Yx="comm",yu="rule",Ih="decl",Ok="@import",Mk="@namespace",qx="@keyframes",Ik="@layer",Xx=Math.abs,$h=String.fromCharCode,Wf=Object.assign;function $k(e,t){return Fe(e,0)^45?(((t<<2^Fe(e,0))<<2^Fe(e,1))<<2^Fe(e,2))<<2^Fe(e,3):0}function Kx(e){return e.trim()}function $n(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function Fs(e,t,n){return e.indexOf(t,n)}function Fe(e,t){return e.charCodeAt(t)|0}function Xr(e,t,n){return e.slice(t,n)}function tn(e){return e.length}function Zx(e){return e.length}function Io(e,t){return t.push(e),e}function jk(e,t){return e.map(t).join("")}function r0(e,t){return e.filter(function(n){return!$n(n,t)})}var xu=1,zi=1,Qx=0,Yt=0,$e=0,to="";function bu(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:xu,column:zi,length:a,return:"",siblings:l}}function tr(e,t){return Wf(bu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ai(e){for(;e.root;)e=tr(e.root,{children:[e]});Io(e,e.siblings)}function Dk(){return $e}function Lk(){return $e=Yt>0?Fe(to,--Yt):0,zi--,$e===10&&(zi=1,xu--),$e}function sn(){return $e=Yt<Qx?Fe(to,Yt++):0,zi++,$e===10&&(zi=1,xu++),$e}function ur(){return Fe(to,Yt)}function Ns(){return Yt}function wu(e,t){return Xr(to,e,t)}function pa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Rk(e){return xu=zi=1,Qx=tn(to=e),Yt=0,[]}function Ak(e){return to="",e}function Wc(e){return Kx(wu(Yt-1,Gf(e===91?e+2:e===40?e+1:e)))}function Fk(e){for(;($e=ur())&&$e<33;)sn();return pa(e)>2||pa($e)>3?"":" "}function Nk(e,t){for(;--t&&sn()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return wu(e,Ns()+(t<6&&ur()==32&&sn()==32))}function Gf(e){for(;sn();)switch($e){case e:return Yt;case 34:case 39:e!==34&&e!==39&&Gf($e);break;case 40:e===41&&Gf(e);break;case 92:sn();break}return Yt}function zk(e,t){for(;sn()&&e+$e!==47+10;)if(e+$e===42+42&&ur()===47)break;return"/*"+wu(t,Yt-1)+"*"+$h(e===47?e:sn())}function Bk(e){for(;!pa(ur());)sn();return wu(e,Yt)}function Vk(e){return Ak(zs("",null,null,null,[""],e=Rk(e),0,[0],e))}function zs(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,h=0,p=0,g=0,y=1,w=1,f=1,m=0,x="",S=i,E=o,k=r,_=x;w;)switch(g=m,m=sn()){case 40:if(g!=108&&Fe(_,d-1)==58){Fs(_+=ne(Wc(m),"&","&\f"),"&\f",Xx(u?l[u-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:_+=Wc(m);break;case 9:case 10:case 13:case 32:_+=Fk(g);break;case 92:_+=Nk(Ns()-1,7);continue;case 47:switch(ur()){case 42:case 47:Io(Uk(zk(sn(),Ns()),t,n,s),s),(pa(g||1)==5||pa(ur()||1)==5)&&tn(_)&&Xr(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*y:l[u++]=tn(_)*f;case 125*y:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+c:f==-1&&(_=ne(_,/\f/g,"")),p>0&&(tn(_)-d||y===0&&g===47)&&Io(p>32?o0(_+";",r,n,d-1,s):o0(ne(_," ","")+";",r,n,d-2,s),s);break;case 59:_+=";";default:if(Io(k=i0(_,t,n,u,c,i,l,x,S=[],E=[],d,o),o),m===123)if(c===0)zs(_,t,k,k,S,o,d,l,E);else{switch(h){case 99:if(Fe(_,3)===110)break;case 108:if(Fe(_,2)===97)break;default:c=0;case 100:case 109:case 115:}c?zs(e,k,k,r&&Io(i0(e,k,k,0,0,i,l,x,i,S=[],d,E),E),i,E,d,l,r?S:E):zs(_,k,k,k,[""],E,0,l,E)}}u=c=p=0,y=f=1,x=_="",d=a;break;case 58:d=1+tn(_),p=g;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&Lk()==125)continue}switch(_+=$h(m),m*y){case 38:f=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(tn(_)-1)*f,f=1;break;case 64:ur()===45&&(_+=Wc(sn())),h=ur(),c=d=tn(x=_+=Bk(Ns())),m++;break;case 45:g===45&&tn(_)==2&&(y=0)}}return o}function i0(e,t,n,r,i,o,a,l,s,u,c,d){for(var h=i-1,p=i===0?o:[""],g=Zx(p),y=0,w=0,f=0;y<r;++y)for(var m=0,x=Xr(e,h+1,h=Xx(w=a[y])),S=e;m<g;++m)(S=Kx(w>0?p[m]+" "+x:ne(x,/&\f/g,p[m])))&&(s[f++]=S);return bu(e,t,n,i===0?yu:l,s,u,c,d)}function Uk(e,t,n,r){return bu(e,t,n,Yx,$h(Dk()),Xr(e,2,-2),0,r)}function o0(e,t,n,r,i){return bu(e,t,n,Ih,Xr(e,0,r),Xr(e,r+1,-1),r,i)}function Jx(e,t,n){switch($k(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Wo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+Wo+e+ye+e+e;case 5936:switch(Fe(e,t+11)){case 114:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+ye+e+e;case 6165:return ue+e+ye+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return ue+e+ye+"flex-item-"+ne(e,/flex-|-self/g,"")+($n(e,/flex-|baseline/)?"":ye+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+ye+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+ye+ne(e,"shrink","negative")+e;case 5292:return ue+e+ye+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+ye+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+ye+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!$n(e,/flex-|baseline/))return ye+"grid-column-align"+Xr(e,t)+e;break;case 2592:case 3360:return ye+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,$n(r.props,/grid-\w+-end/)})?~Fs(e+(n=n[t].value),"span",0)?e:ye+ne(e,"-start","")+e+ye+"grid-row-span:"+(~Fs(n,"span",0)?$n(n,/\d+/):+$n(n,/\d+/)-+$n(e,/\d+/))+";":ye+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return $n(r.props,/grid-\w+-start/)})?e:ye+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tn(e)-1-t>6)switch(Fe(e,t+1)){case 109:if(Fe(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+Wo+(Fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Fs(e,"stretch",0)?Jx(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return ye+i+":"+o+u+(a?ye+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(Fe(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(Fe(e,Fe(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Fe(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+ye+"$2box$3")+e;case 100:return ne(e,":",":"+ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Tl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Hk(e,t,n,r){switch(e.type){case Ik:if(e.children.length)break;case Ok:case Mk:case Ih:return e.return=e.return||e.value;case Yx:return"";case qx:return e.return=e.value+"{"+Tl(e.children,r)+"}";case yu:if(!tn(e.value=e.props.join(",")))return""}return tn(n=Tl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Wk(e){var t=Zx(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function Gk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Yk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ih:e.return=Jx(e.value,e.length,n);return;case qx:return Tl([tr(e,{value:ne(e.value,"@","@"+ue)})],r);case yu:if(e.length)return jk(n=e.props,function(i){switch($n(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ai(tr(e,{props:[ne(i,/:(read-\w+)/,":"+Wo+"$1")]})),ai(tr(e,{props:[i]})),Wf(e,{props:r0(n,r)});break;case"::placeholder":ai(tr(e,{props:[ne(i,/:(plac\w+)/,":"+ue+"input-$1")]})),ai(tr(e,{props:[ne(i,/:(plac\w+)/,":"+Wo+"$1")]})),ai(tr(e,{props:[ne(i,/:(plac\w+)/,ye+"input-$1")]})),ai(tr(e,{props:[i]})),Wf(e,{props:r0(n,r)});break}return""})}}var qk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",eb="active",tb="data-styled-version",Su="6.3.11",jh=`/*!sc*/
`,Go=typeof window<"u"&&typeof document<"u",Xk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Kk={};function Ia(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Bs=new Map,Pl=new Map,Vs=1,$o=function(e){if(Bs.has(e))return Bs.get(e);for(;Pl.has(Vs);)Vs++;var t=Vs++;return Bs.set(e,t),Pl.set(t,e),t},Zk=function(e,t){Vs=t+1,Bs.set(e,t),Pl.set(t,e)},Dh=Object.freeze([]),Vi=Object.freeze({});function nb(e,t,n){return n===void 0&&(n=Vi),e.theme!==n.theme&&e.theme||t||n.theme}var rb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Qk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Jk=/(^-|-$)/g;function a0(e){return e.replace(Qk,"-").replace(Jk,"")}var eT=/(a)(d)/gi,s0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Yf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=s0(t%52)+n;return(s0(t%52)+n).replace(eT,"$1-$2")}var Gc,jr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ib=function(e){return jr(5381,e)};function Lh(e){return Yf(ib(e)>>>0)}function tT(e){return e.displayName||e.name||"Component"}function Yc(e){return typeof e=="string"&&!0}var ob=typeof Symbol=="function"&&Symbol.for,ab=ob?Symbol.for("react.memo"):60115,nT=ob?Symbol.for("react.forward_ref"):60112,rT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},iT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},oT=((Gc={})[nT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gc[ab]=sb,Gc);function l0(e){return("type"in(t=e)&&t.type.$$typeof)===ab?sb:"$$typeof"in e?oT[e.$$typeof]:rT;var t}var aT=Object.defineProperty,sT=Object.getOwnPropertyNames,u0=Object.getOwnPropertySymbols,lT=Object.getOwnPropertyDescriptor,uT=Object.getPrototypeOf,c0=Object.prototype;function lb(e,t,n){if(typeof t!="string"){if(c0){var r=uT(t);r&&r!==c0&&lb(e,r,n)}var i=sT(t);u0&&(i=i.concat(u0(t)));for(var o=l0(e),a=l0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in iT||n&&n[s]||a&&s in a||o&&s in o)){var u=lT(t,s);try{aT(e,s,u)}catch{}}}}return e}function Ui(e){return typeof e=="function"}function Rh(e){return typeof e=="object"&&"styledComponentId"in e}function zr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ol(e,t){return e.join(t||"")}function ha(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function qf(e,t,n){if(n===void 0&&(n=!1),!n&&!ha(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=qf(e[r],t[r]);else if(ha(t))for(var r in t)e[r]=qf(e[r],t[r]);return e}function Ah(e,t){Object.defineProperty(e,"toString",{value:t})}var cT=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ia(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+jh;return n},e}(),dT="style[".concat(Bi,"][").concat(tb,'="').concat(Su,'"]'),fT=new RegExp("^".concat(Bi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),d0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Xf=function(e){if(!e)return document;if(d0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(d0(t))return t}return document},pT=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},hT=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(jh),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(fT);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(Zk(c,u),pT(e,c,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},qc=function(e){for(var t=Xf(e.options.target).querySelectorAll(dT),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Bi)!==eb&&(hT(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function mT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ub=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Bi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Bi,eb),r.setAttribute(tb,Su);var a=mT();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},gT=function(){function e(t){this.element=ub(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Ia(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),vT=function(){function e(t){this.element=ub(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),yT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),f0=Go,xT={isServer:!Go,useCSSOMInjection:!Xk},Ml=function(){function e(t,n,r){t===void 0&&(t=Vi),n===void 0&&(n={});var i=this;this.options=ot(ot({},xT),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Go&&f0&&(f0=!1,qc(this)),Ah(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(d){var h=function(f){return Pl.get(f)}(d);if(h===void 0)return"continue";var p=o.names.get(h);if(p===void 0||!p.size)return"continue";var g=a.getGroup(d);if(g.length===0)return"continue";var y=Bi+".g"+d+'[id="'+h+'"]',w="";p.forEach(function(f){f.length>0&&(w+=f+",")}),s+=g+y+'{content:"'+w+'"}'+jh},c=0;c<l;c++)u(c);return s}(i)})}return e.registerId=function(t){return $o(t)},e.prototype.rehydrate=function(){!this.server&&Go&&qc(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ot(ot({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Go&&t.target!==this.options.target&&Xf(this.options.target)!==Xf(t.target)&&qc(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new yT(i):r?new gT(i):new vT(i)}(this.options),new cT(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){$o(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules($o(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup($o(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),bT=/&/g,jn=47,Dr=42;function p0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==jn||e.charCodeAt(o+1)!==Dr)if(i)a===Dr&&e.charCodeAt(o+1)===jn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function cb(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=cb(n.children,t)),n})}function wT(e){var t,n,r,i=e===void 0?Vi:e,o=i.options,a=o===void 0?Vi:o,l=i.plugins,s=l===void 0?Dh:l,u=function(g,y,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):g},c=s.slice();c.push(function(g){g.type===yu&&g.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),g.props[0]=g.props[0].replace(bT,n).replace(r,u))}),a.prefix&&c.push(Yk),c.push(Hk);var d=[],h=Wk(c.concat(Gk(function(g){return d.push(g)}))),p=function(g,y,w,f){y===void 0&&(y=""),w===void 0&&(w=""),f===void 0&&(f="&"),t=f,n=y,r=void 0;var m=function(S){if(!p0(S))return S;for(var E=S.length,k="",_=0,C=0,O=0,M=!1,$=0;$<E;$++){var I=S.charCodeAt($);if(O!==0||M||I!==jn||S.charCodeAt($+1)!==Dr)if(M)I===Dr&&S.charCodeAt($+1)===jn&&(M=!1,$++);else if(I!==34&&I!==39||$!==0&&S.charCodeAt($-1)===92){if(O===0)if(I===123)C++;else if(I===125){if(--C<0){for(var L=$+1;L<E;){var R=S.charCodeAt(L);if(R===59||R===10)break;L++}L<E&&S.charCodeAt(L)===59&&L++,C=0,$=L-1,_=L;continue}C===0&&(k+=S.substring(_,$+1),_=$+1)}else I===59&&C===0&&(k+=S.substring(_,$+1),_=$+1)}else O===0?O=I:O===I&&(O=0);else M=!0,$++}if(_<E){var D=S.substring(_);p0(D)||(k+=D)}return k}(function(S){if(S.indexOf("//")===-1)return S;for(var E=S.length,k=[],_=0,C=0,O=0,M=0;C<E;){var $=S.charCodeAt(C);if($!==34&&$!==39||C!==0&&S.charCodeAt(C-1)===92)if(O===0)if($===jn&&C+1<E&&S.charCodeAt(C+1)===Dr){for(C+=2;C+1<E&&(S.charCodeAt(C)!==Dr||S.charCodeAt(C+1)!==jn);)C++;C+=2}else if($===40&&C>=3&&(32|S.charCodeAt(C-1))==108&&(32|S.charCodeAt(C-2))==114&&(32|S.charCodeAt(C-3))==117)M=1,C++;else if(M>0)$===41?M--:$===40&&M++,C++;else if($===Dr&&C+1<E&&S.charCodeAt(C+1)===jn)C>_&&k.push(S.substring(_,C)),_=C+=2;else if($===jn&&C+1<E&&S.charCodeAt(C+1)===jn){for(C>_&&k.push(S.substring(_,C));C<E&&S.charCodeAt(C)!==10;)C++;_=C}else C++;else C++;else O===0?O=$:O===$&&(O=0),C++}return _===0?S:(_<E&&k.push(S.substring(_)),k.join(""))}(g)),x=Vk(w||y?"".concat(w," ").concat(y," { ").concat(m," }"):m);return a.namespace&&(x=cb(x,a.namespace)),d=[],Tl(x,h),d};return p.hash=s.length?s.reduce(function(g,y){return y.name||Ia(15),jr(g,y.name)},5381).toString():"",p}var ST=new Ml,Kf=wT(),db=X.createContext({shouldForwardProp:void 0,styleSheet:ST,stylis:Kf});db.Consumer;X.createContext(void 0);function Zf(){return X.useContext(db)}var fb=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Kf);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ah(this,function(){throw Ia(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Kf),this.name+t.hash},e}();function _T(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in qk||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var ET=function(e){return e>="A"&&e<="Z"};function h0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;ET(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var pb=function(e){return e==null||e===!1||e===""},hb=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!pb(r)&&(Array.isArray(r)&&r.isCss||Ui(r)?t.push("".concat(h0(n),":"),r,";"):ha(r)?t.push.apply(t,Ni(Ni(["".concat(n," {")],hb(r),!1),["}"],!1)):t.push("".concat(h0(n),": ").concat(_T(n,r),";")))}return t};function br(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(pb(e))return i;if(Rh(e))return i.push(".".concat(e.styledComponentId)),i;if(Ui(e)){if(!Ui(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return br(o,t,n,r,i)}var a;if(e instanceof fb)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(ha(e)){for(var l=hb(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)br(e[s],t,n,r,i);return i}function mb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ui(n)&&!Rh(n))return!1}return!0}var CT=ib(Su),kT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&mb(t),this.componentId=n,this.baseHash=jr(CT,n),this.baseStyle=r,Ml.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=zr(i,this.staticRulesId);else{var o=Ol(br(this.rules,t,n,r)),a=Yf(jr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=zr(i,a),this.staticRulesId=a}else{for(var s=jr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var h=Ol(br(d,t,n,r));s=jr(jr(s,String(c)),h),u+=h}}if(u){var p=Yf(s>>>0);if(!n.hasNameForId(this.componentId,p)){var g=r(u,".".concat(p),void 0,this.componentId);n.insertRules(this.componentId,p,g)}i=zr(i,p)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup($o(this.componentId)):""}},e}(),Fh=X.createContext(void 0);Fh.Consumer;var Xc={};function TT(e,t,n){var r=Rh(e),i=e,o=!Yc(e),a=t.attrs,l=a===void 0?Dh:a,s=t.componentId,u=s===void 0?function(S,E){var k=typeof S!="string"?"sc":a0(S);Xc[k]=(Xc[k]||0)+1;var _="".concat(k,"-").concat(Lh(Su+k+Xc[k]));return E?"".concat(E,"-").concat(_):_}(t.displayName,t.parentComponentId):s,c=t.displayName,d=c===void 0?function(S){return Yc(S)?"styled.".concat(S):"Styled(".concat(tT(S),")")}(e):c,h=t.displayName&&t.componentId?"".concat(a0(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;g=function(S,E){return y(S,E)&&w(S,E)}}else g=y}var f=new kT(n,h,r?i.componentStyle:void 0);function m(S,E){return function(k,_,C){var O=k.attrs,M=k.componentStyle,$=k.defaultProps,I=k.foldedComponentIds,L=k.styledComponentId,R=k.target,D=X.useContext(Fh),F=Zf(),A=k.shouldForwardProp||F.shouldForwardProp,P=nb(_,D,$)||Vi,j=function(q,J,fe){for(var be,ie=ot(ot({},J),{className:void 0,theme:fe}),Ie=0;Ie<q.length;Ie+=1){var Be=Ui(be=q[Ie])?be(ie):be;for(var Ve in Be)Ve==="className"?ie.className=zr(ie.className,Be[Ve]):Ve==="style"?ie.style=ot(ot({},ie.style),Be[Ve]):ie[Ve]=Be[Ve]}return"className"in J&&typeof J.className=="string"&&(ie.className=zr(ie.className,J.className)),ie}(O,_,P),N=j.as||R,B={};for(var z in j)j[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&j.theme===P||(z==="forwardedAs"?B.as=j.forwardedAs:A&&!A(z,N)||(B[z]=j[z]));var U=function(q,J){var fe=Zf(),be=q.generateAndInjectStyles(J,fe.styleSheet,fe.stylis);return be}(M,j),H=U.className,Y=zr(I,L);return H&&(Y+=" "+H),j.className&&(Y+=" "+j.className),B[Yc(N)&&!rb.has(N)?"class":"className"]=Y,C&&(B.ref=C),b.createElement(N,B)}(x,S,E)}m.displayName=d;var x=X.forwardRef(m);return x.attrs=p,x.componentStyle=f,x.displayName=d,x.shouldForwardProp=g,x.foldedComponentIds=r?zr(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=h,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(E){for(var k=[],_=1;_<arguments.length;_++)k[_-1]=arguments[_];for(var C=0,O=k;C<O.length;C++)qf(E,O[C],!0);return E}({},i.defaultProps,S):S}}),Ah(x,function(){return".".concat(x.styledComponentId)}),o&&lb(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function m0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var g0=function(e){return Object.assign(e,{isCss:!0})};function Nh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ui(e)||ha(e))return g0(br(m0(Dh,Ni([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?br(r):g0(br(m0(r,t)))}function Qf(e,t,n){if(n===void 0&&(n=Vi),!t)throw Ia(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Nh.apply(void 0,Ni([i],o,!1)))};return r.attrs=function(i){return Qf(e,t,ot(ot({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Qf(e,t,ot(ot({},n),i))},r}var gb=function(e){return Qf(TT,e)},T=gb;rb.forEach(function(e){T[e]=gb(e)});var PT=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=mb(t),Ml.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ol(br(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ml.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function OT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Nh.apply(void 0,Ni([e],t,!1)),i="sc-global-".concat(Lh(JSON.stringify(r))),o=new PT(r,i),a=new WeakMap,l=function(u){var c=Zf(),d=X.useContext(Fh),h=a.get(c.styleSheet);return h===void 0&&(h=c.styleSheet.allocateGSInstance(i),a.set(c.styleSheet,h)),(typeof window>"u"||!c.styleSheet.server)&&s(h,u,c.styleSheet,d,c.stylis),X.useLayoutEffect(function(){return c.styleSheet.server||s(h,u,c.styleSheet,d,c.stylis),function(){var p;o.removeStyles(h,c.styleSheet),p=c.styleSheet.options.target,typeof document<"u"&&(p??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(g){return g.remove()})}},[h,u,c.styleSheet,d,c.stylis]),null};function s(u,c,d,h,p){if(o.isStatic)o.renderStyles(u,Kk,d,p);else{var g=ot(ot({},c),{theme:nb(c,h,l.defaultProps)});o.renderStyles(u,g,d,p)}}return X.memo(l)}function zh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ol(Nh.apply(void 0,Ni([e],t,!1))),i=Lh(r);return new fb(i,r)}const MT=T.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,IT=T.div`
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
`,$T=T.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,jT=T.div`

  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`,DT=T.div`
  display: flex;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`;T(Me)`
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
`;const LT=T(Me)`
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
`;const RT=T.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,AT=T.button`
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
`;const FT=T.div`
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
`,NT=T.button`
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
`,zT=T.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,us=T(Me)`
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
`,BT=T.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,VT=T.div`
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
`,UT=T.div`
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



`,HT=T.input`
  
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
`,WT=T.button`
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
   
`,GT=T.svg`
  width: 24px;
  height: 24px;
  

`,cn="/Didiv/assets/symbol-defs-f1e4efb3.svg",YT=()=>{const[e,t]=b.useState("");return v.jsxs(UT,{children:[v.jsx(HT,{name:"site-search",value:e,onChange:n=>t(n.target.value),placeholder:"Пошук",autoComplete:"off"}),v.jsx(WT,{className:"search-button",children:v.jsx(GT,{children:v.jsx("use",{href:`${cn}#icon-search`})})})]})};var vb={exports:{}},yb={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $a=b;function qT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var XT=typeof Object.is=="function"?Object.is:qT,KT=$a.useSyncExternalStore,ZT=$a.useRef,QT=$a.useEffect,JT=$a.useMemo,eP=$a.useDebugValue;yb.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=ZT(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=JT(function(){function s(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&a.hasValue){var g=a.value;if(i(g,p))return d=g}return d=p}if(g=d,XT(c,p))return g;var y=r(p);return i!==void 0&&i(g,y)?(c=p,g):(c=p,d=y)}var u=!1,c,d,h=n===void 0?null:n;return[function(){return s(t())},h===null?void 0:function(){return s(h())}]},[t,n,r,i]);var l=KT(e,o[0],o[1]);return QT(function(){a.hasValue=!0,a.value=l},[l]),eP(l),l};vb.exports=yb;var tP=vb.exports;function nP(e){e()}function rP(){let e=null,t=null;return{clear(){e=null,t=null},notify(){nP(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var v0={notify(){},get:()=>[]};function iP(e,t){let n,r=v0,i=0,o=!1;function a(y){c();const w=r.subscribe(y);let f=!1;return()=>{f||(f=!0,w(),d())}}function l(){r.notify()}function s(){g.onStateChange&&g.onStateChange()}function u(){return o}function c(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=rP())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=v0)}function h(){o||(o=!0,c())}function p(){o&&(o=!1,d())}const g={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:h,tryUnsubscribe:p,getListeners:()=>r};return g}var oP=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aP=oP(),sP=()=>typeof navigator<"u"&&navigator.product==="ReactNative",lP=sP(),uP=()=>aP||lP?b.useLayoutEffect:b.useEffect,cP=uP(),Kc=Symbol.for("react-redux-context"),Zc=typeof globalThis<"u"?globalThis:{};function dP(){if(!b.createContext)return{};const e=Zc[Kc]??(Zc[Kc]=new Map);let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var _r=dP();function fP(e){const{children:t,context:n,serverState:r,store:i}=e,o=b.useMemo(()=>{const s=iP(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=b.useMemo(()=>i.getState(),[i]);cP(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||_r;return b.createElement(l.Provider,{value:o},t)}var pP=fP;function Bh(e=_r){return function(){return b.useContext(e)}}var xb=Bh();function bb(e=_r){const t=e===_r?xb:Bh(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var hP=bb();function mP(e=_r){const t=e===_r?hP:bb(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var ni=mP(),gP=(e,t)=>e===t;function vP(e=_r){const t=e===_r?xb:Bh(e),n=(r,i={})=>{const{equalityFn:o=gP}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:u}=a;b.useRef(!0);const c=b.useCallback({[r.name](h){return r(h)}}[r.name],[r]),d=tP.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,c,o);return b.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var _n=vP();const yP=T(Me)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,xP=T.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,bP=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,wP=T.div`
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
`,SP=({onClick:e})=>{const t=_n(n=>n.cart.items.length);return v.jsx(yP,{to:"/cart",children:v.jsxs(bP,{onClick:e,children:[v.jsx(xP,{children:v.jsx("use",{href:`${cn}#icon-cart`})}),t>0&&v.jsx(wP,{children:t})]})})},_P=T.nav`
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
`,cs=T(Me)`
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
`,EP=()=>v.jsxs(_P,{children:[v.jsx(cs,{to:"/",children:"Головна"}),v.jsx(cs,{to:"/about",children:"Про нас"}),v.jsx(cs,{to:"/catalog",children:"Каталог"}),v.jsx(cs,{to:"/contacts",children:"Контакти"})]}),CP=T.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,kP=T(Me)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
 
  }
       
`,TP=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,PP=T.div`

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
`,OP=({onClick:e})=>{const t=_n(n=>n.favorites.items.length);return v.jsx(kP,{to:"/favorite",children:v.jsxs(TP,{onClick:e,children:[v.jsx(CP,{children:v.jsx("use",{href:`${cn}#icon-heart`})}),t>0&&v.jsx(PP,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=e=>{const t=IP(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $P={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DP=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>b.createElement("svg",{ref:s,...$P,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:wb("lucide",i),...!o&&!jP(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,c])=>b.createElement(u,c)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(DP,{ref:o,iconNode:t,className:wb(`lucide-${MP(y0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=y0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Sb=Pn("arrow-right",LP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Vh=Pn("heart",RP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],FP=Pn("house",AP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],zP=Pn("info",NP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],VP=Pn("mail",BP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],HP=Pn("shopping-bag",UP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],ja=Pn("shopping-cart",WP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],_b=Pn("sliders-horizontal",GP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Eb=Pn("trash-2",YP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Cb=Pn("x",qP),XP=()=>{const[e,t]=b.useState(!1);return v.jsx(MT,{children:v.jsx(IT,{children:v.jsxs($T,{children:[v.jsxs(jT,{children:[v.jsx(LT,{to:"/",children:"Дідів хлів"}),v.jsxs(DT,{children:[v.jsx(SP,{}),v.jsx(OP,{}),v.jsx(EP,{}),v.jsx(AT,{onClick:()=>t(!e),children:v.jsx(RT,{children:v.jsx("use",{href:`${cn}#icon-menu`})})}),v.jsx(VT,{open:e,onClick:()=>t(!1)}),v.jsxs(FT,{open:e,children:[v.jsx(NT,{onClick:()=>t(!1),children:v.jsx(Cb,{size:28,strokeWidth:1.5})}),v.jsxs(zT,{children:[v.jsxs(us,{onClick:()=>t(!1),to:"/",children:[v.jsx(FP,{size:22,strokeWidth:1.5})," Головна"]}),v.jsxs(us,{onClick:()=>t(!1),to:"/about",children:[v.jsx(zP,{size:22,strokeWidth:1.5})," Про нас"]}),v.jsxs(us,{onClick:()=>t(!1),to:"/catalog",children:[v.jsx(HP,{size:22,strokeWidth:1.5})," Каталог"]}),v.jsxs(us,{onClick:()=>t(!1),to:"/contacts",children:[v.jsx(VP,{size:22,strokeWidth:1.5})," Контакти"]})]}),v.jsx(BT,{children:v.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),v.jsx(YT,{})]})})})},KP=T.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,ZP=T.footer`
 
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
`,QP=T.div`
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
`,mn=T(Me)`
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
`,JP=T.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,x0=T.a`
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
`,eO=()=>v.jsx(KP,{children:v.jsxs(ZP,{children:[v.jsxs(QP,{children:[v.jsxs(Qc,{children:[v.jsx(Jc,{children:"Навігація"}),v.jsx(mn,{to:"/",children:"Головна"}),v.jsx(mn,{to:"/about",children:"Про нас"}),v.jsx(mn,{to:"/catalog",children:"Каталог"}),v.jsx(mn,{to:"/contacts",children:"Контакти"})]}),v.jsxs(Qc,{children:[v.jsx(Jc,{children:"Інформація"}),v.jsx(mn,{to:"/delivery",children:"Оплата і доставка"}),v.jsx(mn,{children:"Повернення"}),v.jsx(mn,{children:"Гарантія"}),v.jsx(mn,{children:"Політика конфіденційності"})]})]}),v.jsxs(Qc,{children:[v.jsx(Jc,{children:"Контакти"}),v.jsx(mn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),v.jsx(mn,{href:"mailto:email@email.com",children:"email@email.com"}),v.jsxs(JP,{children:[v.jsx(x0,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:v.jsx("svg",{width:"20px",children:v.jsx("use",{href:`${cn}#icon-instagram`})})}),v.jsx(x0,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:v.jsx("svg",{width:"20px",children:v.jsx("use",{href:`${cn}#icon-telegram`})})})]})]})]})}),tO=()=>v.jsxs(v.Fragment,{children:[v.jsx(XP,{}),v.jsx("main",{className:"main-content",children:v.jsx(uE,{})}),v.jsx(eO,{})]});function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q.apply(this,arguments)}function nO(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function rO(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var iO=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(rO(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=nO(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),nt="-ms-",Il="-moz-",ce="-webkit-",kb="comm",Uh="rule",Hh="decl",oO="@import",Tb="@keyframes",aO="@layer",sO=Math.abs,_u=String.fromCharCode,lO=Object.assign;function uO(e,t){return Ke(e,0)^45?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}function Pb(e){return e.trim()}function cO(e,t){return(e=t.exec(e))?e[0]:e}function de(e,t,n){return e.replace(t,n)}function Jf(e,t){return e.indexOf(t)}function Ke(e,t){return e.charCodeAt(t)|0}function ma(e,t,n){return e.slice(t,n)}function vn(e){return e.length}function Wh(e){return e.length}function ds(e,t){return t.push(e),e}function dO(e,t){return e.map(t).join("")}var Eu=1,Hi=1,Ob=0,Ct=0,je=0,no="";function Cu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Eu,column:Hi,length:a,return:""}}function wo(e,t){return lO(Cu("",null,null,"",null,null,0),e,{length:-e.length},t)}function fO(){return je}function pO(){return je=Ct>0?Ke(no,--Ct):0,Hi--,je===10&&(Hi=1,Eu--),je}function Dt(){return je=Ct<Ob?Ke(no,Ct++):0,Hi++,je===10&&(Hi=1,Eu++),je}function En(){return Ke(no,Ct)}function Us(){return Ct}function Da(e,t){return ma(no,e,t)}function ga(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mb(e){return Eu=Hi=1,Ob=vn(no=e),Ct=0,[]}function Ib(e){return no="",e}function Hs(e){return Pb(Da(Ct-1,ep(e===91?e+2:e===40?e+1:e)))}function hO(e){for(;(je=En())&&je<33;)Dt();return ga(e)>2||ga(je)>3?"":" "}function mO(e,t){for(;--t&&Dt()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return Da(e,Us()+(t<6&&En()==32&&Dt()==32))}function ep(e){for(;Dt();)switch(je){case e:return Ct;case 34:case 39:e!==34&&e!==39&&ep(je);break;case 40:e===41&&ep(e);break;case 92:Dt();break}return Ct}function gO(e,t){for(;Dt()&&e+je!==47+10;)if(e+je===42+42&&En()===47)break;return"/*"+Da(t,Ct-1)+"*"+_u(e===47?e:Dt())}function vO(e){for(;!ga(En());)Dt();return Da(e,Ct)}function yO(e){return Ib(Ws("",null,null,null,[""],e=Mb(e),0,[0],e))}function Ws(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,h=0,p=0,g=0,y=1,w=1,f=1,m=0,x="",S=i,E=o,k=r,_=x;w;)switch(g=m,m=Dt()){case 40:if(g!=108&&Ke(_,d-1)==58){Jf(_+=de(Hs(m),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:_+=Hs(m);break;case 9:case 10:case 13:case 32:_+=hO(g);break;case 92:_+=mO(Us()-1,7);continue;case 47:switch(En()){case 42:case 47:ds(xO(gO(Dt(),Us()),t,n),s);break;default:_+="/"}break;case 123*y:l[u++]=vn(_)*f;case 125*y:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+c:f==-1&&(_=de(_,/\f/g,"")),p>0&&vn(_)-d&&ds(p>32?w0(_+";",r,n,d-1):w0(de(_," ","")+";",r,n,d-2),s);break;case 59:_+=";";default:if(ds(k=b0(_,t,n,u,c,i,l,x,S=[],E=[],d),o),m===123)if(c===0)Ws(_,t,k,k,S,o,d,l,E);else switch(h===99&&Ke(_,3)===110?100:h){case 100:case 108:case 109:case 115:Ws(e,k,k,r&&ds(b0(e,k,k,0,0,i,l,x,i,S=[],d),E),i,E,d,l,r?S:E);break;default:Ws(_,k,k,k,[""],E,0,l,E)}}u=c=p=0,y=f=1,x=_="",d=a;break;case 58:d=1+vn(_),p=g;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&pO()==125)continue}switch(_+=_u(m),m*y){case 38:f=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(vn(_)-1)*f,f=1;break;case 64:En()===45&&(_+=Hs(Dt())),h=En(),c=d=vn(x=_+=vO(Us())),m++;break;case 45:g===45&&vn(_)==2&&(y=0)}}return o}function b0(e,t,n,r,i,o,a,l,s,u,c){for(var d=i-1,h=i===0?o:[""],p=Wh(h),g=0,y=0,w=0;g<r;++g)for(var f=0,m=ma(e,d+1,d=sO(y=a[g])),x=e;f<p;++f)(x=Pb(y>0?h[f]+" "+m:de(m,/&\f/g,h[f])))&&(s[w++]=x);return Cu(e,t,n,i===0?Uh:l,s,u,c)}function xO(e,t,n){return Cu(e,t,n,kb,_u(fO()),ma(e,2,-2),0)}function w0(e,t,n,r){return Cu(e,t,n,Hh,ma(e,0,r),ma(e,r+1,-1),r)}function Mi(e,t){for(var n="",r=Wh(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function bO(e,t,n,r){switch(e.type){case aO:if(e.children.length)break;case oO:case Hh:return e.return=e.return||e.value;case kb:return"";case Tb:return e.return=e.value+"{"+Mi(e.children,r)+"}";case Uh:e.value=e.props.join(",")}return vn(n=Mi(e.children,r))?e.return=e.value+"{"+n+"}":""}function wO(e){var t=Wh(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function SO(e){return function(t){t.root||(t=t.return)&&e(t)}}function _O(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var EO=function(t,n,r){for(var i=0,o=0;i=o,o=En(),i===38&&o===12&&(n[r]=1),!ga(o);)Dt();return Da(t,Ct)},CO=function(t,n){var r=-1,i=44;do switch(ga(i)){case 0:i===38&&En()===12&&(n[r]=1),t[r]+=EO(Ct-1,n,r);break;case 2:t[r]+=Hs(i);break;case 4:if(i===44){t[++r]=En()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=_u(i)}while(i=Dt());return t},kO=function(t,n){return Ib(CO(Mb(t),n))},S0=new WeakMap,TO=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!S0.get(r))&&!i){S0.set(t,!0);for(var o=[],a=kO(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var c=0;c<l.length;c++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[c]):l[c]+" "+a[s]}}},PO=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function $b(e,t){switch(uO(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+Il+e+nt+e+e;case 6828:case 4268:return ce+e+nt+e+e;case 6165:return ce+e+nt+"flex-"+e+e;case 5187:return ce+e+de(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+nt+"flex-$1$2")+e;case 5443:return ce+e+nt+"flex-item-"+de(e,/flex-|-self/,"")+e;case 4675:return ce+e+nt+"flex-line-pack"+de(e,/align-content|flex-|-self/,"")+e;case 5548:return ce+e+nt+de(e,"shrink","negative")+e;case 5292:return ce+e+nt+de(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+de(e,"-grow","")+ce+e+nt+de(e,"grow","positive")+e;case 4554:return ce+de(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return de(de(de(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return de(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return de(de(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+nt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+e+e;case 4095:case 3583:case 4068:case 2532:return de(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(vn(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(Ke(e,t+4)!==45)break;case 102:return de(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Il+(Ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Jf(e,"stretch")?$b(de(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ke(e,t+1)!==115)break;case 6444:switch(Ke(e,vn(e)-3-(~Jf(e,"!important")&&10))){case 107:return de(e,":",":"+ce)+e;case 101:return de(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ce+(Ke(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+nt+"$2box$3")+e}break;case 5936:switch(Ke(e,t+11)){case 114:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ce+e+nt+e+e}return e}var OO=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Hh:t.return=$b(t.value,t.length);break;case Tb:return Mi([wo(t,{value:de(t.value,"@","@"+ce)})],i);case Uh:if(t.length)return dO(t.props,function(o){switch(cO(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Mi([wo(t,{props:[de(o,/:(read-\w+)/,":"+Il+"$1")]})],i);case"::placeholder":return Mi([wo(t,{props:[de(o,/:(plac\w+)/,":"+ce+"input-$1")]}),wo(t,{props:[de(o,/:(plac\w+)/,":"+Il+"$1")]}),wo(t,{props:[de(o,/:(plac\w+)/,nt+"input-$1")]})],i)}return""})}},MO=[OO],IO=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var w=y.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||MO,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var w=y.getAttribute("data-emotion").split(" "),f=1;f<w.length;f++)o[w[f]]=!0;l.push(y)});var s,u=[TO,PO];{var c,d=[bO,SO(function(y){c.insert(y)})],h=wO(u.concat(i,d)),p=function(w){return Mi(yO(w),h)};s=function(w,f,m,x){c=m,p(w?w+"{"+f.styles+"}":f.styles),x&&(g.inserted[f.name]=!0)}}var g={key:n,sheet:new iO({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return g.sheet.hydrate(l),g},jb={exports:{}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=typeof Symbol=="function"&&Symbol.for,Gh=Ye?Symbol.for("react.element"):60103,Yh=Ye?Symbol.for("react.portal"):60106,ku=Ye?Symbol.for("react.fragment"):60107,Tu=Ye?Symbol.for("react.strict_mode"):60108,Pu=Ye?Symbol.for("react.profiler"):60114,Ou=Ye?Symbol.for("react.provider"):60109,Mu=Ye?Symbol.for("react.context"):60110,qh=Ye?Symbol.for("react.async_mode"):60111,Iu=Ye?Symbol.for("react.concurrent_mode"):60111,$u=Ye?Symbol.for("react.forward_ref"):60112,ju=Ye?Symbol.for("react.suspense"):60113,$O=Ye?Symbol.for("react.suspense_list"):60120,Du=Ye?Symbol.for("react.memo"):60115,Lu=Ye?Symbol.for("react.lazy"):60116,jO=Ye?Symbol.for("react.block"):60121,DO=Ye?Symbol.for("react.fundamental"):60117,LO=Ye?Symbol.for("react.responder"):60118,RO=Ye?Symbol.for("react.scope"):60119;function Nt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gh:switch(e=e.type,e){case qh:case Iu:case ku:case Pu:case Tu:case ju:return e;default:switch(e=e&&e.$$typeof,e){case Mu:case $u:case Lu:case Du:case Ou:return e;default:return t}}case Yh:return t}}}function Db(e){return Nt(e)===Iu}me.AsyncMode=qh;me.ConcurrentMode=Iu;me.ContextConsumer=Mu;me.ContextProvider=Ou;me.Element=Gh;me.ForwardRef=$u;me.Fragment=ku;me.Lazy=Lu;me.Memo=Du;me.Portal=Yh;me.Profiler=Pu;me.StrictMode=Tu;me.Suspense=ju;me.isAsyncMode=function(e){return Db(e)||Nt(e)===qh};me.isConcurrentMode=Db;me.isContextConsumer=function(e){return Nt(e)===Mu};me.isContextProvider=function(e){return Nt(e)===Ou};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gh};me.isForwardRef=function(e){return Nt(e)===$u};me.isFragment=function(e){return Nt(e)===ku};me.isLazy=function(e){return Nt(e)===Lu};me.isMemo=function(e){return Nt(e)===Du};me.isPortal=function(e){return Nt(e)===Yh};me.isProfiler=function(e){return Nt(e)===Pu};me.isStrictMode=function(e){return Nt(e)===Tu};me.isSuspense=function(e){return Nt(e)===ju};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ku||e===Iu||e===Pu||e===Tu||e===ju||e===$O||typeof e=="object"&&e!==null&&(e.$$typeof===Lu||e.$$typeof===Du||e.$$typeof===Ou||e.$$typeof===Mu||e.$$typeof===$u||e.$$typeof===DO||e.$$typeof===LO||e.$$typeof===RO||e.$$typeof===jO)};me.typeOf=Nt;jb.exports=me;var AO=jb.exports,Lb=AO,FO={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},NO={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rb={};Rb[Lb.ForwardRef]=FO;Rb[Lb.Memo]=NO;var zO=!0;function Ab(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Xh=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||zO===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Fb=function(t,n,r){Xh(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function BO(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var VO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},UO=/[A-Z]|^ms/g,HO=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Nb=function(t){return t.charCodeAt(1)===45},_0=function(t){return t!=null&&typeof t!="boolean"},ed=_O(function(e){return Nb(e)?e:e.replace(UO,"-$&").toLowerCase()}),E0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(HO,function(r,i,o){return yn={name:i,styles:o,next:yn},i})}return VO[t]!==1&&!Nb(t)&&typeof n=="number"&&n!==0?n+"px":n};function va(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return yn={name:n.name,styles:n.styles,next:yn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)yn={name:r.name,styles:r.styles,next:yn},r=r.next;var i=n.styles+";";return i}return WO(e,t,n)}case"function":{if(e!==void 0){var o=yn,a=n(e);return yn=o,va(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function WO(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=va(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":_0(a)&&(r+=ed(o)+":"+E0(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)_0(a[l])&&(r+=ed(o)+":"+E0(o,a[l])+";");else{var s=va(e,t,a);switch(o){case"animation":case"animationName":{r+=ed(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var C0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,yn,Kh=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";yn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=va(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=va(r,n,t[l]),i&&(o+=a[l]);C0.lastIndex=0;for(var s="",u;(u=C0.exec(o))!==null;)s+="-"+u[1];var c=BO(o)+s;return{name:c,styles:o,next:yn}},GO=function(t){return t()},YO=Gd["useInsertionEffect"]?Gd["useInsertionEffect"]:!1,zb=YO||GO,Zh={}.hasOwnProperty,Bb=b.createContext(typeof HTMLElement<"u"?IO({key:"css"}):null);Bb.Provider;var Vb=function(t){return b.forwardRef(function(n,r){var i=b.useContext(Bb);return t(n,i,r)})},Ub=b.createContext({}),tp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",qO=function(t,n){var r={};for(var i in n)Zh.call(n,i)&&(r[i]=n[i]);return r[tp]=t,r},XO=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Xh(n,r,i),zb(function(){return Fb(n,r,i)}),null},KO=Vb(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[tp],o=[r],a="";typeof e.className=="string"?a=Ab(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=Kh(o,void 0,b.useContext(Ub));a+=t.key+"-"+l.name;var s={};for(var u in e)Zh.call(e,u)&&u!=="css"&&u!==tp&&(s[u]=e[u]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(XO,{cache:t,serialized:l,isStringTag:typeof i=="string"}),b.createElement(i,s))}),ZO=KO,K=function(t,n){var r=arguments;if(n==null||!Zh.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=ZO,o[1]=qO(t,n);for(var a=2;a<i;a++)o[a]=r[a];return b.createElement.apply(null,o)};function Qh(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Kh(t)}var QO=function(){var t=Qh.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},JO=Pk,eM=function(t){return t!=="theme"},k0=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?JO:eM},T0=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},tM=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Xh(n,r,i),zb(function(){return Fb(n,r,i)}),null},nM=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=T0(t,n,r),s=l||k0(i),u=!s("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var h=c.length,p=1;p<h;p++)d.push(c[p],c[0][p])}var g=Vb(function(y,w,f){var m=u&&y.as||i,x="",S=[],E=y;if(y.theme==null){E={};for(var k in y)E[k]=y[k];E.theme=b.useContext(Ub)}typeof y.className=="string"?x=Ab(w.registered,S,y.className):y.className!=null&&(x=y.className+" ");var _=Kh(d.concat(S),w.registered,E);x+=w.key+"-"+_.name,a!==void 0&&(x+=" "+a);var C=u&&l===void 0?k0(m):s,O={};for(var M in y)u&&M==="as"||C(M)&&(O[M]=y[M]);return O.className=x,O.ref=f,b.createElement(b.Fragment,null,b.createElement(tM,{cache:w,serialized:_,isStringTag:typeof m=="string"}),b.createElement(m,O))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=d,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(y,w){return e(y,Q({},n,w,{shouldForwardProp:T0(g,w,!0)})).apply(void 0,d)},g}},rM=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ze=nM.bind();rM.forEach(function(e){ze[e]=ze(e)});const iM=ze.section`
  background-color:  var(--second-background);
 
 
`,oM=ze.div`
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
  
`,aM=ze.h1`

font-size: 32px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;


`,sM=ze.div`
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
`;ze.div`
  position: absolute;
  inset: 0; /* займає всю картку */
  background: rgba(0, 0, 0, 0.622); /* чорний з прозорістю 25% */
`;const lM=ze(Me)`
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
`,uM=ze.div`
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
`,cM=ze.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
 

  display: block;
   @media screen and (max-width: 768px) {
  height: 100px;
  }

`,dM=ze.p`
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

`;var fM={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};pM(fM);function pM(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var hM="#4fa94d",mM={"aria-busy":!0,role:"progressbar"},gM=T.div`
  display: ${e=>e.$visible?"flex":"none"};
`,vM="http://www.w3.org/2000/svg",Ru=({height:e=100,width:t=100,radius:n=5,color:r=hM,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>v.jsx(gM,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...mM,children:v.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:vM,"data-testid":"ball-triangle-svg",children:[v.jsx("title",{children:"Ball Triangle"}),v.jsx("desc",{children:"Animated representation of three balls"}),v.jsx("g",{fill:"none",fillRule:"evenodd",children:v.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[v.jsxs("circle",{cx:"5",cy:"50",r:n,children:[v.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),v.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),v.jsxs("circle",{cx:"27",cy:"5",r:n,children:[v.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),v.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),v.jsxs("circle",{cx:"49",cy:"50",r:n,children:[v.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),v.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),Zt=242.776657104492,yM=1.6,xM=zh`
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
  animation: ${xM} ${yM}s linear infinite;
`;var bM=zh`
to {
   transform: rotate(360deg);
 }
`;T.svg`
  animation: ${bM} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var wM=zh`
to {
   stroke-dashoffset: 136;
 }
`;T.polygon`
  stroke-dasharray: 17;
  animation: ${wM} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;T.svg`
  transform-origin: 50% 65%;
`;const SM=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();console.log(a),t(a.data.map(l=>{var s;return{id:l.id_title,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?v.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:v.jsx(Ru,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):v.jsx(iM,{children:v.jsxs(oM,{children:[v.jsx(aM,{children:"Каталог"}),v.jsx(sM,{children:e.map(i=>v.jsxs(lM,{to:`/catalog/${i.id}`,children:[v.jsx(uM,{children:v.jsx(cM,{src:i.image,alt:i.title})}),v.jsx(dM,{children:i.title})]},i.id))})]})})},_M=ze.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,EM=ze.h1`
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
`,CM=ze.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,kM=ze(Me)`

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

  
`,TM=()=>v.jsxs(_M,{children:[v.jsxs(EM,{children:[" ",v.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),v.jsx(CM,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),v.jsx(kM,{children:" На головну"})]});const PM=T.div`
  width: 100%;
  height: 100%;
font-family: var(--main-font);
`,OM=T.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var Hb={},Wb={},Au={},Gb={exports:{}},La={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var P0=Object.getOwnPropertySymbols,MM=Object.prototype.hasOwnProperty,IM=Object.prototype.propertyIsEnumerable;function $M(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function jM(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var DM=jM()?Object.assign:function(e,t){for(var n,r=$M(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)MM.call(n,a)&&(r[a]=n[a]);if(P0){i=P0(n);for(var l=0;l<i.length;l++)IM.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},Yb={exports:{}},le={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh=DM,ro=60103,qb=60106;le.Fragment=60107;le.StrictMode=60108;le.Profiler=60114;var Xb=60109,Kb=60110,Zb=60112;le.Suspense=60113;var Qb=60115,Jb=60116;if(typeof Symbol=="function"&&Symbol.for){var Kt=Symbol.for;ro=Kt("react.element"),qb=Kt("react.portal"),le.Fragment=Kt("react.fragment"),le.StrictMode=Kt("react.strict_mode"),le.Profiler=Kt("react.profiler"),Xb=Kt("react.provider"),Kb=Kt("react.context"),Zb=Kt("react.forward_ref"),le.Suspense=Kt("react.suspense"),Qb=Kt("react.memo"),Jb=Kt("react.lazy")}var O0=typeof Symbol=="function"&&Symbol.iterator;function LM(e){return e===null||typeof e!="object"?null:(e=O0&&e[O0]||e["@@iterator"],typeof e=="function"?e:null)}function Ra(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ew={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tw={};function io(e,t,n){this.props=e,this.context=t,this.refs=tw,this.updater=n||ew}io.prototype.isReactComponent={};io.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Ra(85));this.updater.enqueueSetState(this,e,t,"setState")};io.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nw(){}nw.prototype=io.prototype;function em(e,t,n){this.props=e,this.context=t,this.refs=tw,this.updater=n||ew}var tm=em.prototype=new nw;tm.constructor=em;Jh(tm,io.prototype);tm.isPureReactComponent=!0;var nm={current:null},rw=Object.prototype.hasOwnProperty,iw={key:!0,ref:!0,__self:!0,__source:!0};function ow(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)rw.call(t,r)&&!iw.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ro,type:e,key:o,ref:a,props:i,_owner:nm.current}}function RM(e,t){return{$$typeof:ro,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rm(e){return typeof e=="object"&&e!==null&&e.$$typeof===ro}function AM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var M0=/\/+/g;function td(e,t){return typeof e=="object"&&e!==null&&e.key!=null?AM(""+e.key):t.toString(36)}function Gs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ro:case qb:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+td(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(M0,"$&/")+"/"),Gs(i,t,n,"",function(u){return u})):i!=null&&(rm(i)&&(i=RM(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(M0,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+td(o,l);a+=Gs(o,t,n,s,i)}else if(s=LM(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+td(o,l++),a+=Gs(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(Ra(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function fs(e,t,n){if(e==null)return e;var r=[],i=0;return Gs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function FM(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var aw={current:null};function Kn(){var e=aw.current;if(e===null)throw Error(Ra(321));return e}var NM={ReactCurrentDispatcher:aw,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:nm,IsSomeRendererActing:{current:!1},assign:Jh};le.Children={map:fs,forEach:function(e,t,n){fs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fs(e,function(){t++}),t},toArray:function(e){return fs(e,function(t){return t})||[]},only:function(e){if(!rm(e))throw Error(Ra(143));return e}};le.Component=io;le.PureComponent=em;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NM;le.cloneElement=function(e,t,n){if(e==null)throw Error(Ra(267,e));var r=Jh({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=nm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)rw.call(t,s)&&!iw.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ro,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Kb,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Xb,_context:e},e.Consumer=e};le.createElement=ow;le.createFactory=function(e){var t=ow.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:Zb,render:e}};le.isValidElement=rm;le.lazy=function(e){return{$$typeof:Jb,_payload:{_status:-1,_result:e},_init:FM}};le.memo=function(e,t){return{$$typeof:Qb,type:e,compare:t===void 0?null:t}};le.useCallback=function(e,t){return Kn().useCallback(e,t)};le.useContext=function(e,t){return Kn().useContext(e,t)};le.useDebugValue=function(){};le.useEffect=function(e,t){return Kn().useEffect(e,t)};le.useImperativeHandle=function(e,t,n){return Kn().useImperativeHandle(e,t,n)};le.useLayoutEffect=function(e,t){return Kn().useLayoutEffect(e,t)};le.useMemo=function(e,t){return Kn().useMemo(e,t)};le.useReducer=function(e,t,n){return Kn().useReducer(e,t,n)};le.useRef=function(e){return Kn().useRef(e)};le.useState=function(e){return Kn().useState(e)};le.version="17.0.2";Yb.exports=le;var zM=Yb.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BM=zM,sw=60103;La.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var I0=Symbol.for;sw=I0("react.element"),La.Fragment=I0("react.fragment")}var VM=BM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UM=Object.prototype.hasOwnProperty,HM={key:!0,ref:!0,__self:!0,__source:!0};function lw(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)UM.call(t,r)&&!HM.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:sw,type:e,key:o,ref:a,props:i,_owner:VM.current}}La.jsx=lw;La.jsxs=lw;Gb.exports=La;var Tt=Gb.exports,uw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(uw);var Pt=uw.exports;const WM={"lds-circle":"_lds-circle_qlxhy_1"},GM=Object.freeze(Object.defineProperty({__proto__:null,default:WM},Symbol.toStringTag,{value:"Module"})),YM=kt(GM);var cw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Au,"__esModule",{value:!0});Au.Circle=void 0;const qM=Tt,XM=cw(Pt),KM=cw(YM);function ZM({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,qM.jsx)("div",{className:(0,XM.default)(KM.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}Au.Circle=ZM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=Au;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(Wb);var dw={},Fu={};const QM={"lds-default":"_lds-default_wt1n8_1"},JM=Object.freeze(Object.defineProperty({__proto__:null,default:QM},Symbol.toStringTag,{value:"Module"})),e3=kt(JM);var fw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Fu,"__esModule",{value:!0});Fu.Default=void 0;const $0=Tt,t3=fw(Pt),n3=fw(e3);function r3({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,$0.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,$0.jsx)("div",{className:(0,t3.default)(n3.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}Fu.Default=r3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=Fu;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(dw);var pw={},Nu={};const i3={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},o3=Object.freeze(Object.defineProperty({__proto__:null,default:i3},Symbol.toStringTag,{value:"Module"})),a3=kt(o3);var hw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Nu,"__esModule",{value:!0});Nu.DualRing=void 0;const j0=Tt,D0=hw(Pt),L0=hw(a3);function s3({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,j0.jsx)("div",{className:(0,D0.default)(L0.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,j0.jsx)("div",{className:(0,D0.default)(L0.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}Nu.DualRing=s3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=Nu;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(pw);var mw={},zu={};const l3={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},u3=Object.freeze(Object.defineProperty({__proto__:null,default:l3},Symbol.toStringTag,{value:"Module"})),c3=kt(u3);var gw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(zu,"__esModule",{value:!0});zu.Ellipsis=void 0;const R0=Tt,d3=gw(Pt),f3=gw(c3);function p3({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,R0.jsx)("div",{style:{background:`${e}`}},l));return(0,R0.jsx)("div",{className:(0,d3.default)(f3.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}zu.Ellipsis=p3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=zu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(mw);var vw={},Bu={};const h3={"lds-facebook":"_lds-facebook_1ts9g_1"},m3=Object.freeze(Object.defineProperty({__proto__:null,default:h3},Symbol.toStringTag,{value:"Module"})),g3=kt(m3);var yw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Bu,"__esModule",{value:!0});Bu.Facebook=void 0;const A0=Tt,v3=yw(Pt),y3=yw(g3);function x3({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,A0.jsx)("div",{style:{background:`${e}`}},l));return(0,A0.jsx)("div",{className:(0,v3.default)(y3.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}Bu.Facebook=x3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=Bu;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(vw);var xw={},Vu={};const b3={"lds-grid":"_lds-grid_1ftub_1"},w3=Object.freeze(Object.defineProperty({__proto__:null,default:b3},Symbol.toStringTag,{value:"Module"})),S3=kt(w3);var bw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Vu,"__esModule",{value:!0});Vu.Grid=void 0;const F0=Tt,_3=bw(Pt),E3=bw(S3);function C3({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,F0.jsx)("div",{style:{background:`${e}`}},l));return(0,F0.jsx)("div",{className:(0,_3.default)(E3.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}Vu.Grid=C3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=Vu;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(xw);var ww={},Uu={};const k3={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},T3=Object.freeze(Object.defineProperty({__proto__:null,default:k3},Symbol.toStringTag,{value:"Module"})),P3=kt(T3);var Sw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Uu,"__esModule",{value:!0});Uu.Heart=void 0;const ps=Tt,nd=Sw(Pt),rd=Sw(P3);function O3({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,ps.jsx)("div",{className:(0,nd.default)(rd.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,ps.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,ps.jsx)("div",{className:(0,nd.default)(rd.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,ps.jsx)("div",{className:(0,nd.default)(rd.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}Uu.Heart=O3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=Uu;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(ww);var _w={},Hu={};const M3={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},I3=Object.freeze(Object.defineProperty({__proto__:null,default:M3},Symbol.toStringTag,{value:"Module"})),$3=kt(I3);var Ew=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Hu,"__esModule",{value:!0});Hu.Hourglass=void 0;const N0=Tt,z0=Ew(Pt),B0=Ew($3);function j3({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,N0.jsx)("div",{className:(0,z0.default)(B0.default["lds-hourglass"],n),style:{...r},children:(0,N0.jsx)("div",{className:(0,z0.default)(B0.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}Hu.Hourglass=j3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=Hu;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(_w);var Cw={},Wu={};const kw="_center_1rufi_10",Tw="_spin_1rufi_1",D3={"lds-orbitals":"_lds-orbitals_1rufi_1",center:kw,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:Tw},L3=Object.freeze(Object.defineProperty({__proto__:null,center:kw,default:D3,spin:Tw},Symbol.toStringTag,{value:"Module"})),R3=kt(L3);var Pw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Wu,"__esModule",{value:!0});Wu.Orbitals=void 0;const tt=Tt,lt=Pw(Pt),Se=Pw(R3);function A3({color:e="#7f58af",className:t,style:n}){return(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["lds-orbitals"],t),style:{...n},children:[(0,tt.jsx)("div",{className:Se.default.center,style:{background:e}}),(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["inner-spin"]),children:[(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-moon-a"]),style:{background:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-moon-b"]),style:{background:e}})]}),(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["outer-spin"]),children:[(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-moon-a"]),style:{background:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-moon-b"]),style:{background:e}})]})]})}Wu.Orbitals=A3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=Wu;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(Cw);var Ow={},Gu={};const F3={"lds-ring":"_lds-ring_xgxdp_1"},N3=Object.freeze(Object.defineProperty({__proto__:null,default:F3},Symbol.toStringTag,{value:"Module"})),z3=kt(N3);var Mw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Gu,"__esModule",{value:!0});Gu.Ring=void 0;const V0=Tt,B3=Mw(Pt),V3=Mw(z3);function U3({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,V0.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,V0.jsx)("div",{className:(0,B3.default)(V3.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}Gu.Ring=U3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=Gu;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(Ow);var Iw={},Yu={};const H3={"lds-ripple":"_lds-ripple_1lgcf_1"},W3=Object.freeze(Object.defineProperty({__proto__:null,default:H3},Symbol.toStringTag,{value:"Module"})),G3=kt(W3);var $w=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Yu,"__esModule",{value:!0});Yu.Ripple=void 0;const U0=Tt,Y3=$w(Pt),q3=$w(G3);function X3({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,U0.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,U0.jsx)("div",{className:(0,Y3.default)(q3.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}Yu.Ripple=X3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=Yu;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(Iw);var jw={},qu={};const K3={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},Z3=Object.freeze(Object.defineProperty({__proto__:null,default:K3},Symbol.toStringTag,{value:"Module"})),Q3=kt(Z3);var Dw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(qu,"__esModule",{value:!0});qu.Roller=void 0;const id=Tt,H0=Dw(Pt),W0=Dw(Q3);function J3({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,id.jsx)("div",{children:(0,id.jsx)("div",{className:(0,H0.default)(W0.default["div-after"]),style:{background:e}})},o));return(0,id.jsx)("div",{className:(0,H0.default)(W0.default["lds-roller"],t),style:{...n},children:r})}qu.Roller=J3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=qu;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(jw);var Lw={},Xu={};const e4={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},t4=Object.freeze(Object.defineProperty({__proto__:null,default:e4},Symbol.toStringTag,{value:"Module"})),n4=kt(t4);var Rw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xu,"__esModule",{value:!0});Xu.Spinner=void 0;const od=Tt,G0=Rw(Pt),Y0=Rw(n4);function r4({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,od.jsx)("div",{children:(0,od.jsx)("div",{className:(0,G0.default)(Y0.default["div-after"]),style:{background:e}})},o));return(0,od.jsx)("div",{className:(0,G0.default)(Y0.default["lds-spinner"],t),style:{...n},children:r})}Xu.Spinner=r4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=Xu;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(Lw);var Aw={},Ku={};const Fw="_left_v9vlb_30",Nw="_right_v9vlb_33",zw="_anim_v9vlb_37",i4={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:Fw,right:Nw,anim:zw,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},o4=Object.freeze(Object.defineProperty({__proto__:null,anim:zw,default:i4,left:Fw,right:Nw},Symbol.toStringTag,{value:"Module"})),a4=kt(o4);var Bw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ku,"__esModule",{value:!0});Ku.Ouroboro=void 0;const So=Tt,_o=Bw(Pt),Eo=Bw(a4);function s4({color:e="#7f58af",style:t,className:n}){return(0,So.jsxs)("div",{className:(0,_o.default)(Eo.default["lds-ouroboro"],n),style:{...t},children:[(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.left),children:(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.anim),style:{background:e}})}),(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.right),children:(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.anim),style:{background:e}})})]})}Ku.Ouroboro=s4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=Ku;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(Aw);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=Wb;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=dw;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=pw;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=mw;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=vw;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=xw;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=ww;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=_w;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const u=Cw;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return u.Orbitals}});const c=Ow;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return c.Ring}});const d=Iw;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return d.Ripple}});const h=jw;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return h.Roller}});const p=Lw;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return p.Spinner}});const g=Aw;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return g.Ouroboro}})})(Hb);const l4=()=>v.jsx(OM,{children:v.jsx(Hb.Default,{color:"#6d433da8"})});const u4="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",c4=OT`
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
  src: url(${u4}) format('truetype');
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
`,d4=T.div`
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
`,f4=T(Me)`
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
`,p4=T.h2`
  margin-top: 20px;
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,h4=T.h3`

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
`,m4=T.a`

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
`,g4=T.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,v4=()=>{const[e,t]=b.useState([]);return b.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(console.log("API response:",i),!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{id:o.id_title,title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),console.log(e),v.jsxs(v.Fragment,{children:[v.jsx(p4,{children:"Каталог"}),v.jsxs(d4,{children:[e.slice(0,6).map(n=>v.jsx(f4,{to:`catalog/${n.id}`,bg:n.image,isBig:n.big,children:v.jsx(h4,{children:n.title})},n.id)),v.jsxs(m4,{href:"catalog",children:[v.jsx("p",{children:"Весь каталог"}),v.jsx(g4,{children:v.jsx(Sb,{size:24})})]})]})]})};function q0(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function im(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:q0(t[r])&&q0(e[r])&&Object.keys(t[r]).length>0&&im(e[r],t[r])})}const Vw={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Cn(){const e=typeof document<"u"?document:{};return im(e,Vw),e}const y4={document:Vw,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function gt(){const e=typeof window<"u"?window:{};return im(e,y4),e}function x4(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function b4(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Uw(e,t=0){return setTimeout(e,t)}function $l(){return Date.now()}function w4(e){const t=gt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function S4(e,t="x"){const n=gt();let r,i,o;const a=w4(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function hs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function _4(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Mt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!_4(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(hs(t[l])&&hs(r[l])?r[l].__swiper__?t[l]=r[l]:Mt(t[l],r[l]):!hs(t[l])&&hs(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Mt(t[l],r[l])):t[l]=r[l])}}}return t}function si(e,t,n){e.style.setProperty(t,n)}function Hw({swiper:e,targetPosition:t,side:n}){const r=gt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",u=(d,h)=>s==="next"&&d>=h||s==="prev"&&d<=h,c=()=>{a=new Date().getTime(),o===null&&(o=a);const d=Math.max(Math.min((a-o)/l,1),0),h=.5-Math.cos(d*Math.PI)/2;let p=i+h*(t-i);if(u(p,t)&&(p=t),e.wrapperEl.scrollTo({[n]:p}),u(p,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:p})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(c)};c()}function bn(e,t=""){const n=gt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function E4(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function C4(e,t){const n=gt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=E4(e,t))),r}function jl(e){try{console.warn(e);return}catch{}}function Dl(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:x4(t)),n}function k4(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function T4(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function cr(e,t){return gt().getComputedStyle(e,null).getPropertyValue(t)}function Ll(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Ww(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function np(e,t,n){const r=gt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function He(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function ya(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function Gw(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=bn(e.el,`.${r[i]}`)[0];o||(o=Dl("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const X0='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function P4({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:X0};function i(p){let g;return p&&typeof p=="string"&&e.isElement&&(g=e.el.querySelector(p)||e.hostEl.querySelector(p),g)?g:(p&&(typeof p=="string"&&(g=[...document.querySelectorAll(p)]),e.params.uniqueNavElements&&typeof p=="string"&&g&&g.length>1&&e.el.querySelectorAll(p).length===1?g=e.el.querySelector(p):g&&g.length===1&&(g=g[0])),p&&!g?p:g)}function o(p,g){const y=e.params.navigation;p=He(p),p.forEach(w=>{w&&(w.classList[g?"add":"remove"](...y.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=g),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](y.lockClass))})}function a(){const{nextEl:p,prevEl:g}=e.navigation;if(e.params.loop){o(g,!1),o(p,!1);return}o(g,e.isBeginning&&!e.params.rewind),o(p,e.isEnd&&!e.params.rewind)}function l(p){p.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(p){p.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const p=e.params.navigation;if(e.params.navigation=Gw(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(p.nextEl||p.prevEl))return;let g=i(p.nextEl),y=i(p.prevEl);Object.assign(e.navigation,{nextEl:g,prevEl:y}),g=He(g),y=He(y);const w=(f,m)=>{if(f){if(p.addIcons&&f.matches(".swiper-button-next,.swiper-button-prev")&&!f.querySelector("svg")){const x=document.createElement("div");ya(x,X0),f.appendChild(x.querySelector("svg")),x.remove()}f.addEventListener("click",m==="next"?s:l)}!e.enabled&&f&&f.classList.add(...p.lockClass.split(" "))};g.forEach(f=>w(f,"next")),y.forEach(f=>w(f,"prev"))}function c(){let{nextEl:p,prevEl:g}=e.navigation;p=He(p),g=He(g);const y=(w,f)=>{w.removeEventListener("click",f==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};p.forEach(w=>y(w,"next")),g.forEach(w=>y(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?h():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{c()}),n("enable disable",()=>{let{nextEl:p,prevEl:g}=e.navigation;if(p=He(p),g=He(g),e.enabled){a();return}[...p,...g].filter(y=>!!y).forEach(y=>y.classList.add(e.params.navigation.lockClass))}),n("click",(p,g)=>{let{nextEl:y,prevEl:w}=e.navigation;y=He(y),w=He(w);const f=g.target;let m=w.includes(f)||y.includes(f);if(e.isElement&&!m){const x=g.path||g.composedPath&&g.composedPath();x&&(m=x.find(S=>y.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!m){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===f||e.pagination.el.contains(f)))return;let x;y.length?x=y[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(x=w[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...y,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},h=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),c()};Object.assign(e.navigation,{enable:d,disable:h,update:a,init:u,destroy:c})}function Co(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function O4({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(f,m){const{bulletActiveClass:x}=e.params.pagination;f&&(f=f[`${m==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${x}-${m}`),f=f[`${m==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${x}-${m}-${m}`)))}function u(f,m,x){if(f=f%x,m=m%x,m===f+1)return"next";if(m===f-1)return"previous"}function c(f){const m=f.target.closest(Co(e.params.pagination.bulletClass));if(!m)return;f.preventDefault();const x=Ll(m)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const S=u(e.realIndex,x,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function d(){const f=e.rtl,m=e.params.pagination;if(l())return;let x=e.pagination.el;x=He(x);let S,E;const k=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,_=e.params.loop?Math.ceil(k/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(E=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,E=e.previousSnapIndex):(E=e.previousIndex||0,S=e.activeIndex||0),m.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const C=e.pagination.bullets;let O,M,$;if(m.dynamicBullets&&(o=np(C[0],e.isHorizontal()?"width":"height",!0),x.forEach(I=>{I.style[e.isHorizontal()?"width":"height"]=`${o*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&E!==void 0&&(a+=S-(E||0),a>m.dynamicMainBullets-1?a=m.dynamicMainBullets-1:a<0&&(a=0)),O=Math.max(S-a,0),M=O+(Math.min(C.length,m.dynamicMainBullets)-1),$=(M+O)/2),C.forEach(I=>{const L=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(R=>`${m.bulletActiveClass}${R}`)].map(R=>typeof R=="string"&&R.includes(" ")?R.split(" "):R).flat();I.classList.remove(...L)}),x.length>1)C.forEach(I=>{const L=Ll(I);L===S?I.classList.add(...m.bulletActiveClass.split(" ")):e.isElement&&I.setAttribute("part","bullet"),m.dynamicBullets&&(L>=O&&L<=M&&I.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),L===O&&s(I,"prev"),L===M&&s(I,"next"))});else{const I=C[S];if(I&&I.classList.add(...m.bulletActiveClass.split(" ")),e.isElement&&C.forEach((L,R)=>{L.setAttribute("part",R===S?"bullet-active":"bullet")}),m.dynamicBullets){const L=C[O],R=C[M];for(let D=O;D<=M;D+=1)C[D]&&C[D].classList.add(...`${m.bulletActiveClass}-main`.split(" "));s(L,"prev"),s(R,"next")}}if(m.dynamicBullets){const I=Math.min(C.length,m.dynamicMainBullets+4),L=(o*I-o)/2-$*o,R=f?"right":"left";C.forEach(D=>{D.style[e.isHorizontal()?R:"top"]=`${L}px`})}}x.forEach((C,O)=>{if(m.type==="fraction"&&(C.querySelectorAll(Co(m.currentClass)).forEach(M=>{M.textContent=m.formatFractionCurrent(S+1)}),C.querySelectorAll(Co(m.totalClass)).forEach(M=>{M.textContent=m.formatFractionTotal(_)})),m.type==="progressbar"){let M;m.progressbarOpposite?M=e.isHorizontal()?"vertical":"horizontal":M=e.isHorizontal()?"horizontal":"vertical";const $=(S+1)/_;let I=1,L=1;M==="horizontal"?I=$:L=$,C.querySelectorAll(Co(m.progressbarFillClass)).forEach(R=>{R.style.transform=`translate3d(0,0,0) scaleX(${I}) scaleY(${L})`,R.style.transitionDuration=`${e.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(ya(C,m.renderCustom(e,S+1,_)),O===0&&r("paginationRender",C)):(O===0&&r("paginationRender",C),r("paginationUpdate",C)),e.params.watchOverflow&&e.enabled&&C.classList[e.isLocked?"add":"remove"](m.lockClass)})}function h(){const f=e.params.pagination;if(l())return;const m=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=He(x);let S="";if(f.type==="bullets"){let E=e.params.loop?Math.ceil(m/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&E>m&&(E=m);for(let k=0;k<E;k+=1)f.renderBullet?S+=f.renderBullet.call(e,k,f.bulletClass):S+=`<${f.bulletElement} ${e.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?S=f.renderFraction.call(e,f.currentClass,f.totalClass):S=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?S=f.renderProgressbar.call(e,f.progressbarFillClass):S=`<span class="${f.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(E=>{f.type!=="custom"&&ya(E,S||""),f.type==="bullets"&&e.pagination.bullets.push(...E.querySelectorAll(Co(f.bulletClass)))}),f.type!=="custom"&&r("paginationRender",x[0])}function p(){e.params.pagination=Gw(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const f=e.params.pagination;if(!f.el)return;let m;typeof f.el=="string"&&e.isElement&&(m=e.el.querySelector(f.el)),!m&&typeof f.el=="string"&&(m=[...document.querySelectorAll(f.el)]),m||(m=f.el),!(!m||m.length===0)&&(e.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...e.el.querySelectorAll(f.el)],m.length>1&&(m=m.find(x=>Ww(x,".swiper")[0]===e.el))),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(e.pagination,{el:m}),m=He(m),m.forEach(x=>{f.type==="bullets"&&f.clickable&&x.classList.add(...(f.clickableClass||"").split(" ")),x.classList.add(f.modifierClass+f.type),x.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(x.classList.add(`${f.modifierClass}${f.type}-dynamic`),a=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&x.classList.add(f.progressbarOppositeClass),f.clickable&&x.addEventListener("click",c),e.enabled||x.classList.add(f.lockClass)}))}function g(){const f=e.params.pagination;if(l())return;let m=e.pagination.el;m&&(m=He(m),m.forEach(x=>{x.classList.remove(f.hiddenClass),x.classList.remove(f.modifierClass+f.type),x.classList.remove(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&(x.classList.remove(...(f.clickableClass||"").split(" ")),x.removeEventListener("click",c))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...f.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const f=e.params.pagination;let{el:m}=e.pagination;m=He(m),m.forEach(x=>{x.classList.remove(f.horizontalClass,f.verticalClass),x.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(p(),h(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{h(),d()}),n("destroy",()=>{g()}),n("enable disable",()=>{let{el:f}=e.pagination;f&&(f=He(f),f.forEach(m=>m.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(f,m)=>{const x=m.target,S=He(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const E=S[0].classList.contains(e.params.pagination.hiddenClass);r(E===!0?"paginationShow":"paginationHide"),S.forEach(k=>k.classList.toggle(e.params.pagination.hiddenClass))}});const y=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=He(f),f.forEach(m=>m.classList.remove(e.params.pagination.paginationDisabledClass))),p(),h(),d()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=He(f),f.forEach(m=>m.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:y,disable:w,render:h,update:d,init:p,destroy:g})}function M4({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,u,c=new Date().getTime(),d,h,p,g,y,w;function f(A){!e||e.destroyed||!e.wrapperEl||A.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",f),!(w||A.detail&&A.detail.bySwiperTouchMove)&&O())}const m=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(s=u,d=!1);const A=e.autoplay.paused?u:c+s-new Date().getTime();e.autoplay.timeLeft=A,r("autoplayTimeLeft",A,A/l),a=requestAnimationFrame(()=>{m()})},x=()=>{let A;return e.virtual&&e.params.virtual.enabled?A=e.slides.find(j=>j.classList.contains("swiper-slide-active")):A=e.slides[e.activeIndex],A?parseInt(A.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let A=e.params.autoplay.delay;const P=x();return!Number.isNaN(P)&&P>0&&(A=P),A},E=A=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),m();let P=A;typeof P>"u"&&(P=S(),l=P,s=P),u=P;const j=e.params.speed,N=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(j,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,j,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(j,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,j,!0,!0),r("autoplay")),e.params.cssMode&&(c=new Date().getTime(),requestAnimationFrame(()=>{E()})))};return P>0?(clearTimeout(o),o=setTimeout(()=>{N()},P)):requestAnimationFrame(()=>{N()}),P},k=()=>{c=new Date().getTime(),e.autoplay.running=!0,E(),r("autoplayStart")},_=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},C=(A,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),A||(y=!0);const j=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",f):O()};if(e.autoplay.paused=!0,P){j();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-c),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),j())},O=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(c=new Date().getTime(),y?(y=!1,E(u)):E(),e.autoplay.paused=!1,r("autoplayResume"))},M=()=>{if(e.destroyed||!e.autoplay.running)return;const A=Cn();A.visibilityState==="hidden"&&(y=!0,C(!0)),A.visibilityState==="visible"&&O()},$=A=>{A.pointerType==="mouse"&&(y=!0,w=!0,!(e.animating||e.autoplay.paused)&&C(!0))},I=A=>{A.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&O())},L=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",$),e.el.addEventListener("pointerleave",I))},R=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",$),e.el.removeEventListener("pointerleave",I))},D=()=>{Cn().addEventListener("visibilitychange",M)},F=()=>{Cn().removeEventListener("visibilitychange",M)};n("init",()=>{e.params.autoplay.enabled&&(L(),D(),k())}),n("destroy",()=>{R(),F(),e.autoplay.running&&_()}),n("_freeModeStaticRelease",()=>{(p||y)&&O()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?_():C(!0,!0)}),n("beforeTransitionStart",(A,P,j)=>{e.destroyed||!e.autoplay.running||(j||!e.params.autoplay.disableOnInteraction?C(!0,!0):_())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){_();return}h=!0,p=!1,y=!1,g=setTimeout(()=>{y=!0,p=!0,C(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!h)){if(clearTimeout(g),clearTimeout(o),e.params.autoplay.disableOnInteraction){p=!1,h=!1;return}p&&e.params.cssMode&&O(),p=!1,h=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(u=S(),l=S())}),Object.assign(e.autoplay,{start:k,stop:_,pause:C,resume:O})}let ad;function I4(){const e=gt(),t=Cn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Yw(){return ad||(ad=I4()),ad}let sd;function $4({userAgent:e}={}){const t=Yw(),n=gt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const c=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=r==="Win32";let p=r==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&p&&t.touch&&g.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),p=!1),s&&!h&&(o.os="android",o.android=!0),(u||d||c)&&(o.os="ios",o.ios=!0),o}function qw(e={}){return sd||(sd=$4(e)),sd}let ld;function j4(){const e=gt(),t=qw();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,u]=l.split("Version/")[1].split(" ")[0].split(".").map(c=>Number(c));n=s<16||s===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function Xw(){return ld||(ld=j4()),ld}function D4({swiper:e,on:t,emit:n}){const r=gt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(c=>{o=r.requestAnimationFrame(()=>{const{width:d,height:h}=e;let p=d,g=h;c.forEach(({contentBoxSize:y,contentRect:w,target:f})=>{f&&f!==e.el||(p=w?w.width:(y[0]||y).inlineSize,g=w?w.height:(y[0]||y).blockSize)}),(p!==d||g!==h)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function L4({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=gt(),a=(u,c={})=>{const d=o.MutationObserver||o.WebkitMutationObserver,h=new d(p=>{if(e.__preventObserver__)return;if(p.length===1){r("observerUpdate",p[0]);return}const g=function(){r("observerUpdate",p[0])};o.requestAnimationFrame?o.requestAnimationFrame(g):o.setTimeout(g,0)});h.observe(u,{attributes:typeof c.attributes>"u"?!0:c.attributes,childList:e.isElement||(typeof c.childList>"u"?!0:c).childList,characterData:typeof c.characterData>"u"?!0:c.characterData}),i.push(h)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=Ww(e.hostEl);for(let c=0;c<u.length;c+=1)a(u[c])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var R4={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function A4(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(cr(r,"padding-left")||0,10)-parseInt(cr(r,"padding-right")||0,10),n=n-parseInt(cr(r,"padding-top")||0,10)-parseInt(cr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function F4(){const e=this;function t(M,$){return parseFloat(M.getPropertyValue(e.getDirectionLabel($))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,u=bn(i,`.${e.params.slideClass}, swiper-slide`),c=l?e.virtual.slides.length:u.length;let d=[];const h=[],p=[];let g=n.slidesOffsetBefore;typeof g=="function"&&(g=n.slidesOffsetBefore.call(e));let y=n.slidesOffsetAfter;typeof y=="function"&&(y=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,f=e.slidesGrid.length,m=e.size-g-y;let x=n.spaceBetween,S=-g,E=0,k=0;if(typeof m>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*m:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-g-y,u.forEach(M=>{o?M.style.marginLeft="":M.style.marginRight="",M.style.marginBottom="",M.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(si(r,"--swiper-centered-offset-before",""),si(r,"--swiper-centered-offset-after","")),n.cssMode&&(si(r,"--swiper-slides-offset-before",`${g}px`),si(r,"--swiper-slides-offset-after",`${y}px`));const _=n.grid&&n.grid.rows>1&&e.grid;_?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let C;const O=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(M=>typeof n.breakpoints[M].slidesPerView<"u").length>0;for(let M=0;M<c;M+=1){C=0;const $=u[M];if(!($&&(_&&e.grid.updateSlide(M,$,u),cr($,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(C=n.virtual.slidesPerViewAutoSlideSize),C&&$&&(n.roundLengths&&(C=Math.floor(C)),$.style[e.getDirectionLabel("width")]=`${C}px`);else if(n.slidesPerView==="auto"){O&&($.style[e.getDirectionLabel("width")]="");const I=getComputedStyle($),L=$.style.transform,R=$.style.webkitTransform;if(L&&($.style.transform="none"),R&&($.style.webkitTransform="none"),n.roundLengths)C=e.isHorizontal()?np($,"width",!0):np($,"height",!0);else{const D=t(I,"width"),F=t(I,"padding-left"),A=t(I,"padding-right"),P=t(I,"margin-left"),j=t(I,"margin-right"),N=I.getPropertyValue("box-sizing");if(N&&N==="border-box")C=D+P+j;else{const{clientWidth:B,offsetWidth:z}=$;C=D+F+A+P+j+(z-B)}}L&&($.style.transform=L),R&&($.style.webkitTransform=R),n.roundLengths&&(C=Math.floor(C))}else C=(m-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(C=Math.floor(C)),$&&($.style[e.getDirectionLabel("width")]=`${C}px`);$&&($.swiperSlideSize=C),p.push(C),n.centeredSlides?(S=S+C/2+E/2+x,E===0&&M!==0&&(S=S-m/2-x),M===0&&(S=S-m/2-x),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),k%n.slidesPerGroup===0&&d.push(S),h.push(S)):(n.roundLengths&&(S=Math.floor(S)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup===0&&d.push(S),h.push(S),S=S+C+x),e.virtualSize+=C+x,E=C,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,m)+y,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+x}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),_&&e.grid.updateWrapperSize(C,d),!n.centeredSlides){const M=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,$=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||M);let I=d.length;if($){let R;if(n.slidesPerView==="auto"){R=1;let D=0;for(let F=p.length-1;F>=0&&(D+=p[F]+(F<p.length-1?x:0),D<=m);F-=1)R=p.length-F}else R=Math.floor(n.slidesPerView);I=Math.max(c-R,0)}const L=[];for(let R=0;R<d.length;R+=1){let D=d[R];n.roundLengths&&(D=Math.floor(D)),$?R<=I&&L.push(D):d[R]<=e.virtualSize-m&&L.push(D)}d=L,Math.floor(e.virtualSize-m)-Math.floor(d[d.length-1])>1&&($||d.push(e.virtualSize-m))}if(l&&n.loop){const M=p[0]+x;if(n.slidesPerGroup>1){const $=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),I=M*n.slidesPerGroup;for(let L=0;L<$;L+=1)d.push(d[d.length-1]+I)}for(let $=0;$<e.virtual.slidesBefore+e.virtual.slidesAfter;$+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+M),h.push(h[h.length-1]+M),e.virtualSize+=M}if(d.length===0&&(d=[0]),x!==0){const M=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter(($,I)=>!n.cssMode||n.loop?!0:I!==u.length-1).forEach($=>{$.style[M]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let M=0;p.forEach(I=>{M+=I+(x||0)}),M-=x;const $=M>m?M-m:0;d=d.map(I=>I<=0?-g:I>$?$+y:I)}if(n.centerInsufficientSlides){let M=0;if(p.forEach($=>{M+=$+(x||0)}),M-=x,M<m){const $=(m-M)/2;d.forEach((I,L)=>{d[L]=I-$}),h.forEach((I,L)=>{h[L]=I+$})}}if(Object.assign(e,{slides:u,snapGrid:d,slidesGrid:h,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){si(r,"--swiper-centered-offset-before",`${-d[0]}px`),si(r,"--swiper-centered-offset-after",`${e.size/2-p[p.length-1]/2}px`);const M=-e.snapGrid[0],$=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(I=>I+M),e.slidesGrid=e.slidesGrid.map(I=>I+$)}if(c!==s&&e.emit("slidesLengthChange"),d.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==f&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const M=`${n.containerModifierClass}backface-hidden`,$=e.el.classList.contains(M);c<=n.maxBackfaceHiddenSlides?$||e.el.classList.add(M):$&&e.el.classList.remove(M)}}function N4(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function z4(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const K0=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function B4(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let c=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const d=(a+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),h=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),p=-(a-c),g=p+t.slidesSizesGrid[s],y=p>=0&&p<=t.size-t.slidesSizesGrid[s],w=p>=0&&p<t.size-1||g>1&&g<=t.size||p<=0&&g>=t.size;w&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s)),K0(u,w,n.slideVisibleClass),K0(u,y,n.slideFullyVisibleClass),u.progress=i?-d:d,u.originalProgress=i?-h:h}}function V4(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const c=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=c||i<=0,a=d||i>=1,c&&(i=0),d&&(i=1)}if(n.loop){const c=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),h=t.slidesGrid[c],p=t.slidesGrid[d],g=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=h?l=(y-h)/g:l=(y+g-p)/g,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(s&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const ud=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function U4(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=d=>bn(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let s,u,c;if(o)if(n.loop){let d=i-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${d}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(d=>d.column===i),c=t.find(d=>d.column===i+1),u=t.find(d=>d.column===i-1)):s=t[i];s&&(a||(c=T4(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=t[0]),u=k4(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(d=>{ud(d,d===s,n.slideActiveClass),ud(d,d===c,n.slideNextClass),ud(d,d===u,n.slidePrevClass)}),e.emitSlidesClasses()}const Ys=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},cd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},rp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,u)=>a+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&cd(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&cd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&cd(e,a)};function H4(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function W4(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,u;const c=p=>{let g=p-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof s>"u"&&(s=H4(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const p=Math.min(i.slidesPerGroupSkip,s);u=p+Math.floor((s-p)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=c(s);return}const d=t.grid&&i.grid&&i.grid.rows>1;let h;if(t.virtual&&i.virtual.enabled)i.loop?h=c(s):h=s;else if(d){const p=t.slides.find(y=>y.column===s);let g=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(p),0)),h=Math.floor(g/i.grid.rows)}else if(t.slides[s]){const p=t.slides[s].getAttribute("data-swiper-slide-index");p?h=parseInt(p,10):h=s}else h=s;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:a,realIndex:h,previousIndex:o,activeIndex:s}),t.initialized&&rp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==h&&t.emit("realIndexChange"),t.emit("slideChange"))}function G4(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var Y4={updateSize:A4,updateSlides:F4,updateAutoHeight:N4,updateSlidesOffset:z4,updateSlidesProgress:B4,updateProgress:V4,updateSlidesClasses:U4,updateActiveIndex:W4,updateClickedSlide:G4};function q4(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=S4(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function X4(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let c;const d=n.maxTranslate()-n.minTranslate();d===0?c=0:c=(e-n.minTranslate())/d,c!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function K4(){return-this.snapGrid[0]}function Z4(){return-this.snapGrid[this.snapGrid.length-1]}function Q4(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),u=o.maxTranslate();let c;if(r&&e>s?c=s:r&&e<u?c=u:c=e,o.updateProgress(c),a.cssMode){const d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-c;else{if(!o.support.smoothScroll)return Hw({swiper:o,targetPosition:-c,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(h){!o||o.destroyed||h.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var J4={getTranslate:q4,setTranslate:X4,minTranslate:K4,maxTranslate:Z4,translateTo:Q4};function e5(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Kw({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function t5(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Kw({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function n5(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Kw({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var r5={setTransition:e5,transitionStart:t5,transitionEnd:n5};function i5(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:c,activeIndex:d,rtlTranslate:h,wrapperEl:p,enabled:g}=o;if(!g&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const y=Math.min(o.params.slidesPerGroupSkip,a);let w=y+Math.floor((a-y)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const f=-s[w];if(l.normalizeSlideIndex)for(let _=0;_<u.length;_+=1){const C=-Math.floor(f*100),O=Math.floor(u[_]*100),M=Math.floor(u[_+1]*100);typeof u[_+1]<"u"?C>=O&&C<M-(M-O)/2?a=_:C>=O&&C<M&&(a=_+1):C>=O&&(a=_)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&(h?f>o.translate&&f>o.minTranslate():f<o.translate&&f<o.minTranslate())||!o.allowSlidePrev&&f>o.translate&&f>o.maxTranslate()&&(d||0)!==a))return!1;a!==(c||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(f);let m;a>d?m="next":a<d?m="prev":m="reset";const x=o.virtual&&o.params.virtual.enabled;if(!(x&&i)&&(h&&-f===o.translate||!h&&f===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(f),m!=="reset"&&(o.transitionStart(n,m),o.transitionEnd(n,m)),!1;if(l.cssMode){const _=o.isHorizontal(),C=h?f:-f;if(t===0)x&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),x&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[_?"scrollLeft":"scrollTop"]=C})):p[_?"scrollLeft":"scrollTop"]=C,x&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return Hw({swiper:o,targetPosition:C,side:_?"left":"top"}),!0;p.scrollTo({[_?"left":"top"]:C,behavior:"smooth"})}return!0}const k=Xw().isSafari;return x&&!i&&k&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(f),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,m),t===0?o.transitionEnd(n,m):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(C){!o||o.destroyed||C.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,m))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function o5(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const y=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u,slidesOffsetBefore:c,slidesOffsetAfter:d}=i.params,h=u||!!c||!!d;let p=i.params.slidesPerView;p==="auto"?p=i.slidesPerViewDynamic():(p=Math.ceil(parseFloat(i.params.slidesPerView,10)),h&&p%2===0&&(p=p+1));let g=s-l<p;if(h&&(g=g||l<Math.ceil(p/2)),r&&h&&i.params.slidesPerView!=="auto"&&!o&&(g=!1),g){const y=h?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?l+1:l-s+1,slideRealIndex:y==="next"?i.realIndex:void 0})}if(o){const y=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function a5(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function s5(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:u}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const c=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=l?r.translate:-r.translate;function h(m){return m<0?-Math.floor(Math.abs(m)):Math.floor(m)}const p=h(d),g=o.map(m=>h(m)),y=i.freeMode&&i.freeMode.enabled;let w=o[g.indexOf(p)-1];if(typeof w>"u"&&(i.cssMode||y)){let m;o.forEach((x,S)=>{p>=x&&(m=S)}),typeof m<"u"&&(w=y?o[m]:o[m>0?m-1:m])}let f=0;if(typeof w<"u"&&(f=a.indexOf(w),f<0&&(f=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(f=f-r.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),i.rewind&&r.isBeginning){const m=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(m,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(f,e,t,n)}),!0;return r.slideTo(f,e,t,n)}function l5(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function u5(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],c=i.snapGrid[l+1];s-u>(c-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],c=i.snapGrid[l];s-u<=(c-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function c5(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(bn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),Uw(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var d5={slideTo:i5,slideToLoop:o5,slideNext:a5,slidePrev:s5,slideReset:l5,slideToClosest:u5,slideToClickedSlide:c5};function f5(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{bn(i,`.${r.slideClass}, swiper-slide`).forEach((g,y)=>{g.setAttribute("data-swiper-slide-index",y)})},a=()=>{const p=bn(i,`.${r.slideBlankClass}`);p.forEach(g=>{g.remove()}),p.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),u=n.slides.length%s!==0,c=l&&n.slides.length%r.grid.rows!==0,d=p=>{for(let g=0;g<p;g+=1){const y=n.isElement?Dl("swiper-slide",[r.slideBlankClass]):Dl("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(y)}};if(u){if(r.loopAddBlankSlides){const p=s-n.slides.length%s;d(p),n.recalcSlides(),n.updateSlides()}else jl("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(c){if(r.loopAddBlankSlides){const p=r.grid.rows-n.slides.length%r.grid.rows;d(p),n.recalcSlides(),n.updateSlides()}else jl("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const h=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:h?void 0:"next",initial:t})}function p5({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:c,allowSlideNext:d,slidesEl:h,params:p}=s,{centeredSlides:g,slidesOffsetBefore:y,slidesOffsetAfter:w,initialSlide:f}=p,m=g||!!y||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&p.virtual.enabled){t&&(!m&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):m&&s.snapIndex<p.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=c,s.allowSlideNext=d,s.emit("loopFix");return}let x=p.slidesPerView;x==="auto"?x=s.slidesPerViewDynamic():(x=Math.ceil(parseFloat(p.slidesPerView,10)),m&&x%2===0&&(x=x+1));const S=p.slidesPerGroupAuto?x:p.slidesPerGroup;let E=m?Math.max(S,Math.ceil(x/2)):S;E%S!==0&&(E+=S-E%S),E+=p.loopAdditionalSlides,s.loopedSlides=E;const k=s.grid&&p.grid&&p.grid.rows>1;u.length<x+E||s.params.effect==="cards"&&u.length<x+E*2?jl("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):k&&p.grid.fill==="row"&&jl("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const _=[],C=[],O=k?Math.ceil(u.length/p.grid.rows):u.length,M=o&&O-f<x&&!m;let $=M?f:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(u.find(P=>P.classList.contains(p.slideActiveClass))):$=i;const I=n==="next"||!n,L=n==="prev"||!n;let R=0,D=0;const A=(k?u[i].column:i)+(m&&typeof r>"u"?-x/2+.5:0);if(A<E){R=Math.max(E-A,S);for(let P=0;P<E-A;P+=1){const j=P-Math.floor(P/O)*O;if(k){const N=O-j-1;for(let B=u.length-1;B>=0;B-=1)u[B].column===N&&_.push(B)}else _.push(O-j-1)}}else if(A+x>O-E){D=Math.max(A-(O-E*2),S),M&&(D=Math.max(D,x-O+f+1));for(let P=0;P<D;P+=1){const j=P-Math.floor(P/O)*O;k?u.forEach((N,B)=>{N.column===j&&C.push(B)}):C.push(j)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&u.length<x+E*2&&(C.includes(i)&&C.splice(C.indexOf(i),1),_.includes(i)&&_.splice(_.indexOf(i),1)),L&&_.forEach(P=>{u[P].swiperLoopMoveDOM=!0,h.prepend(u[P]),u[P].swiperLoopMoveDOM=!1}),I&&C.forEach(P=>{u[P].swiperLoopMoveDOM=!0,h.append(u[P]),u[P].swiperLoopMoveDOM=!1}),s.recalcSlides(),p.slidesPerView==="auto"?s.updateSlides():k&&(_.length>0&&L||C.length>0&&I)&&s.slides.forEach((P,j)=>{s.grid.updateSlide(j,P,s.slides)}),p.watchSlidesProgress&&s.updateSlidesOffset(),t){if(_.length>0&&L){if(typeof e>"u"){const P=s.slidesGrid[$],N=s.slidesGrid[$+R]-P;l?s.setTranslate(s.translate-N):(s.slideTo($+Math.ceil(R),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else if(r){const P=k?_.length/p.grid.rows:_.length;s.slideTo(s.activeIndex+P,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(C.length>0&&I)if(typeof e>"u"){const P=s.slidesGrid[$],N=s.slidesGrid[$-D]-P;l?s.setTranslate(s.translate-N):(s.slideTo($-D,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else{const P=k?C.length/p.grid.rows:C.length;s.slideTo(s.activeIndex-P,0,!1,!0)}}if(s.allowSlidePrev=c,s.allowSlideNext=d,s.controller&&s.controller.control&&!a){const P={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(j=>{!j.destroyed&&j.params.loop&&j.loopFix({...P,slideTo:j.params.slidesPerView===p.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...P,slideTo:s.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}s.emit("loopFix")}function h5(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var m5={loopCreate:f5,loopFix:p5,loopDestroy:h5};function g5(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function v5(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var y5={setGrabCursor:g5,unsetGrabCursor:v5};function x5(e,t=this){function n(r){if(!r||r===Cn()||r===gt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Z0(e,t,n){const r=gt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function b5(e){const t=this,n=Cn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Z0(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!C4(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",c=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&c&&(s=c[0]);const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,h=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(h?x5(d,s):s.closest(d))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const p=a.currentX,g=a.currentY;if(!Z0(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=p,a.startY=g,i.touchStartTime=$l(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let y=!0;s.matches(i.focusableElements)&&(y=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=y&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function w5(e){const t=Cn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let u;if(s.type==="touchmove"){if(u=[...s.changedTouches].find(k=>k.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const c=u.pageX,d=u.pageY;if(s.preventedByNestedSwiper){o.startX=c,o.startY=d;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d}),r.touchStartTime=$l());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(c>o.startX&&-n.translate<=n.maxTranslate()||c<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(c<o.startX&&n.translate<=n.maxTranslate()||c>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=c,o.currentY=d;const h=o.currentX-o.startX,p=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(h**2+p**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let k;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:h*h+p*p>=25&&(k=Math.atan2(Math.abs(p),Math.abs(h))*180/Math.PI,r.isScrolling=n.isHorizontal()?k>i.touchAngle:90-k>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let g=n.isHorizontal()?h:p,y=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(g=Math.abs(g)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),o.diff=g,g*=i.touchRatio,a&&(g=-g,y=-y);const w=n.touchesDirection;n.swipeDirection=g>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const f=n.params.loop&&!i.cssMode,m=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(f&&m&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(k)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let x;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&f&&m&&Math.abs(g)>=1){Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=g+r.startTranslate;let S=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),g>0?(f&&m&&!x&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+g)**E))):g<0&&(f&&m&&!x&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-g)**E))),S&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(g)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function S5(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(E=>E.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:u,enabled:c}=t;if(!c||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=$l(),h=d-n.touchStartTime;if(t.allowClick){const E=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(E&&E[0]||r.target,E),t.emit("tap click",r),h<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=$l(),Uw(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let p;if(a.followFinger?p=s?t.translate:-t.translate:p=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:p});return}const g=p>=-t.maxTranslate()&&!t.params.loop;let y=0,w=t.slidesSizesGrid[0];for(let E=0;E<u.length;E+=E<a.slidesPerGroupSkip?1:a.slidesPerGroup){const k=E<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[E+k]<"u"?(g||p>=u[E]&&p<u[E+k])&&(y=E,w=u[E+k]-u[E]):(g||p>=u[E])&&(y=E,w=u[u.length-1]-u[u.length-2])}let f=null,m=null;a.rewind&&(t.isBeginning?m=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(f=0));const x=(p-u[y])/w,S=y<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(h>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?f:y+S):t.slideTo(y)),t.swipeDirection==="prev"&&(x>1-a.longSwipesRatio?t.slideTo(y+S):m!==null&&x<0&&Math.abs(x)>a.longSwipesRatio?t.slideTo(m):t.slideTo(y))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+S):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(f!==null?f:y+S),t.swipeDirection==="prev"&&t.slideTo(m!==null?m:y))}}function Q0(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function _5(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function E5(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function C5(e){const t=this;Ys(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function k5(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Zw=(e,t)=>{const n=Cn(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Q0,!0):e[u]("observerUpdate",Q0,!0),i[s]("load",e.onLoad,{capture:!0}))};function T5(){const e=this,{params:t}=e;e.onTouchStart=b5.bind(e),e.onTouchMove=w5.bind(e),e.onTouchEnd=S5.bind(e),e.onDocumentTouchStart=k5.bind(e),t.cssMode&&(e.onScroll=E5.bind(e)),e.onClick=_5.bind(e),e.onLoad=C5.bind(e),Zw(e,"on")}function P5(){Zw(this,"off")}var O5={attachEvents:T5,detachEvents:P5};const J0=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function M5(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=Cn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),u=e.getBreakpoint(o,l,s);if(!u||e.currentBreakpoint===u)return;const d=(u in o?o[u]:void 0)||e.originalParams,h=J0(e,r),p=J0(e,d),g=e.params.grabCursor,y=d.grabCursor,w=r.enabled;h&&!p?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!h&&p&&(i.classList.add(`${r.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),g&&!y?e.unsetGrabCursor():!g&&y&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(k=>{if(typeof d[k]>"u")return;const _=r[k]&&r[k].enabled,C=d[k]&&d[k].enabled;_&&!C&&e[k].disable(),!_&&C&&e[k].enable()});const f=d.direction&&d.direction!==r.direction,m=r.loop&&(d.slidesPerView!==r.slidesPerView||f),x=r.loop;f&&n&&e.changeDirection(),Mt(e.params,d);const S=e.params.enabled,E=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",d),n&&(m?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&E?(e.loopCreate(t),e.updateSlides()):x&&!E&&e.loopDestroy()),e.emit("breakpoint",d)}function I5(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=gt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:u}=a[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var $5={setBreakpoint:M5,getBreakpoint:I5};function j5(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function D5(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=j5(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function L5(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var R5={addClasses:D5,removeClasses:L5};function A5(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var F5={checkOverflow:A5},ip={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function N5(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Mt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Mt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Mt(t,r)}}const dd={eventsEmitter:R4,update:Y4,translate:J4,transition:r5,slide:d5,loop:m5,grabCursor:y5,events:O5,breakpoints:$5,checkOverflow:F5,classes:R5},fd={};let om=class Mn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Mt({},r),n&&!r.el&&(r.el=n);const i=Cn();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(u=>{const c=Mt({},r,{el:u});s.push(new Mn(c))}),s}const o=this;o.__swiper__=!0,o.support=Yw(),o.device=qw({userAgent:r.userAgent}),o.browser=Xw(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:N5(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Mt({},ip,a);return o.params=Mt({},l,fd,r),o.originalParams=Mt({},o.params),o.passedParams=Mt({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=bn(n,`.${r.slideClass}, swiper-slide`),o=Ll(i[0]);return Ll(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=bn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:u}=r;let c=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=o[u]?Math.ceil(o[u].swiperSlideSize):0,h;for(let p=u+1;p<o.length;p+=1)o[p]&&!h&&(d+=Math.ceil(o[p].swiperSlideSize),c+=1,d>s&&(h=!0));for(let p=u-1;p>=0;p-=1)o[p]&&!h&&(d+=o[p].swiperSlideSize,c+=1,d>s&&(h=!0))}else if(t==="current")for(let d=u+1;d<o.length;d+=1)(n?a[d]+l[d]-a[u]<s:a[d]-a[u]<s)&&(c+=1);else for(let d=u-1;d>=0;d-=1)a[u]-a[d]<s&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Ys(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):bn(r,i())[0])();return!a&&n.params.createElements&&(a=Dl("div",n.params.wrapperClass),r.append(a),bn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||cr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||cr(r,"direction")==="rtl"),wrongRTL:cr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Ys(n,o):o.addEventListener("load",a=>{Ys(n,a.target)})}),rp(n),n.initialized=!0,rp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),b4(r)),r.destroyed=!0),null}static extendDefaults(t){Mt(fd,t)}static get extendedDefaults(){return fd}static get defaults(){return ip}static installModule(t){Mn.prototype.__modules__||(Mn.prototype.__modules__=[]);const n=Mn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Mn.installModule(n)),Mn):(Mn.installModule(t),Mn)}};Object.keys(dd).forEach(e=>{Object.keys(dd[e]).forEach(t=>{om.prototype[t]=dd[e][t]})});om.use([D4,L4]);const Qw=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Kr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Ii(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Kr(t[r])&&Kr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Ii(e[r],t[r]):e[r]=t[r]})}function Jw(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function eS(e={}){return e.pagination&&typeof e.pagination.el>"u"}function tS(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function nS(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function z5(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function B5({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(C=>C!=="children"&&C!=="direction"&&C!=="wrapperClass"),{params:u,pagination:c,navigation:d,scrollbar:h,virtual:p,thumbs:g}=e;let y,w,f,m,x,S,E,k;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(y=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&c&&!c.el&&(f=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&h&&!h.el&&(m=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(x=!0);const _=C=>{e[C]&&(e[C].destroy(),C==="navigation"?(e.isElement&&(e[C].prevEl.remove(),e[C].nextEl.remove()),u[C].prevEl=void 0,u[C].nextEl=void 0,e[C].prevEl=void 0,e[C].nextEl=void 0):(e.isElement&&e[C].el.remove(),u[C].el=void 0,e[C].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?S=!0:!u.loop&&n.loop?E=!0:k=!0),s.forEach(C=>{if(Kr(u[C])&&Kr(n[C]))Object.assign(u[C],n[C]),(C==="navigation"||C==="pagination"||C==="scrollbar")&&"enabled"in n[C]&&!n[C].enabled&&_(C);else{const O=n[C];(O===!0||O===!1)&&(C==="navigation"||C==="pagination"||C==="scrollbar")?O===!1&&_(C):u[C]=n[C]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&p&&u.virtual.enabled?(p.slides=t,p.update(!0)):r.includes("virtual")&&p&&u.virtual.enabled&&(t&&(p.slides=t),p.update(!0)),r.includes("children")&&t&&u.loop&&(k=!0),y&&g.init()&&g.update(!0),w&&(e.controller.control=u.controller.control),f&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),c.init(),c.render(),c.update()),m&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),h.init(),h.updateSize(),h.setTranslate()),x&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),ya(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),ya(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(S||k)&&e.loopDestroy(),(E||k)&&e.loopCreate(),e.update()}function V5(e={},t=!0){const n={on:{}},r={},i={};Ii(n,ip),n._emitClasses=!0,n.init=!1;const o={},a=Qw.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?Kr(e[s])?(n[s]={},i[s]={},Ii(n[s],e[s]),Ii(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function U5({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){Jw(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),eS(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),tS(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function H5(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return Qw.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(Kr(e[s])&&Kr(t[s])){const u=Object.keys(e[s]),c=Object.keys(t[s]);u.length!==c.length?a(s):(u.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}),c.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const W5=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Rl(){return Rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rl.apply(this,arguments)}function rS(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function iS(e){const t=[];return X.Children.toArray(e).forEach(n=>{rS(n)?t.push(n):n.props&&n.props.children&&iS(n.props.children).forEach(r=>t.push(r))}),t}function G5(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return X.Children.toArray(e).forEach(r=>{if(rS(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=iS(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function Y5(e,t,n){if(!n)return null;const r=c=>{let d=c;return c<0?d=t.length+c:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let c=l;c<s;c+=1)c>=o&&c<=a&&u.push(t[r(c)]);return u.map((c,d)=>X.cloneElement(c,{swiper:e,style:i,key:c.props.virtualIndex||c.key||`slide-${d}`}))}function Yo(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const ev=b.createContext(null),q5=b.createContext(null),oS=b.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,u]=b.useState("swiper"),[c,d]=b.useState(null),[h,p]=b.useState(!1),g=b.useRef(!1),y=b.useRef(null),w=b.useRef(null),f=b.useRef(null),m=b.useRef(null),x=b.useRef(null),S=b.useRef(null),E=b.useRef(null),k=b.useRef(null),{params:_,passedParams:C,rest:O,events:M}=V5(o),{slides:$,slots:I}=G5(r),L=()=>{p(!h)};Object.assign(_.on,{_containerClasses(P,j){u(j)}});const R=()=>{Object.assign(_.on,M),l=!0;const P={..._};if(delete P.wrapperClass,w.current=new om(P),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=$;const j={cache:!1,slides:$,renderExternal:d,renderExternalUpdate:!1};Ii(w.current.params.virtual,j),Ii(w.current.originalParams.virtual,j)}};y.current||R(),w.current&&w.current.on("_beforeBreakpoint",L);const D=()=>{l||!M||!w.current||Object.keys(M).forEach(P=>{w.current.on(P,M[P])})},F=()=>{!M||!w.current||Object.keys(M).forEach(P=>{w.current.off(P,M[P])})};b.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",L)}),b.useEffect(()=>{!g.current&&w.current&&(w.current.emitSlidesClasses(),g.current=!0)}),Yo(()=>{if(a&&(a.current=y.current),!!y.current)return w.current.destroyed&&R(),U5({el:y.current,nextEl:x.current,prevEl:S.current,paginationEl:E.current,scrollbarEl:k.current,swiper:w.current},_),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),Yo(()=>{D();const P=H5(C,f.current,$,m.current,j=>j.key);return f.current=C,m.current=$,P.length&&w.current&&!w.current.destroyed&&B5({swiper:w.current,slides:$,passedParams:C,changedParams:P,nextEl:x.current,prevEl:S.current,scrollbarEl:k.current,paginationEl:E.current}),()=>{F()}}),Yo(()=>{W5(w.current)},[c]);function A(){return _.virtual?Y5(w.current,$,c):$.map((P,j)=>X.cloneElement(P,{swiper:w.current,swiperSlideIndex:j}))}return X.createElement(t,Rl({ref:y,className:nS(`${s}${e?` ${e}`:""}`)},O),X.createElement(q5.Provider,{value:w.current},I["container-start"],X.createElement(n,{className:z5(_.wrapperClass)},I["wrapper-start"],A(),I["wrapper-end"]),Jw(_)&&X.createElement(X.Fragment,null,X.createElement("div",{ref:S,className:"swiper-button-prev"}),X.createElement("div",{ref:x,className:"swiper-button-next"})),tS(_)&&X.createElement("div",{ref:k,className:"swiper-scrollbar"}),eS(_)&&X.createElement("div",{ref:E,className:"swiper-pagination"}),I["container-end"]))});oS.displayName="Swiper";const aS=b.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},u)=>{const c=b.useRef(null),[d,h]=b.useState("swiper-slide"),[p,g]=b.useState(!1);function y(x,S,E){S===c.current&&h(E)}Yo(()=>{if(typeof l<"u"&&(c.current.swiperSlideIndex=l),u&&(u.current=c.current),!(!c.current||!r)){if(r.destroyed){d!=="swiper-slide"&&h("swiper-slide");return}return r.on("_slideClass",y),()=>{r&&r.off("_slideClass",y)}}}),Yo(()=>{r&&c.current&&!r.destroyed&&h(r.getSlideClasses(c.current))},[r]);const w={isActive:d.indexOf("swiper-slide-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0},f=()=>typeof t=="function"?t(w):t,m=()=>{g(!0)};return X.createElement(e,Rl({ref:c,className:nS(`${d}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:m},s),i&&X.createElement(ev.Provider,{value:w},X.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},f(),o&&!p&&X.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}}))),!i&&X.createElement(ev.Provider,{value:w},f(),o&&!p&&X.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}})))});aS.displayName="SwiperSlide";const X5=T.section`
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
`,K5=T.div`
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
`,Z5=T.div`
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
`,Q5=T(Me)`
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
`,J5=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg"},{id:2,title:"Перевірені велодеталі з пробігом бла бла",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp"}],eI=()=>v.jsx(X5,{children:v.jsx(oS,{modules:[P4,M4,O4],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:J5.map(e=>v.jsx(aS,{children:v.jsx(K5,{bg:e.img,children:v.jsxs(Z5,{children:[v.jsx("h1",{children:e.title}),v.jsx("p",{children:e.desc}),v.jsx(Q5,{to:"/catalog",children:"До каталогу"})]})})},e.id))})}),tI=T.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,nI=T.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
 font-size: 35px;
  }

`,rI=T.div`
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
`,iI=T.div`
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
`,oI=T(Me)`
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
`,aI=T.span`
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
`,sI=T.div`
  padding: 10px 0;
`,lI=T.h3`
  font-size: 15px;
  font-weight: 600;
 
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,uI=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,cI=T.span`
  font-size: 17px;
  font-weight: 800;
  color: var(--black-color);
`,dI=T.button`
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
`;T(Me)`
color: var(--white-color);
padding: 10px 20px;
 background:var( --orange-color); 
  border-radius: 15px;
  text-decoration: none;

`;const fI=T(Me)`
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

`,pI=T.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,hI=T.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function qe(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var mI=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),tv=mI,pd=()=>Math.random().toString(36).substring(7).split("").join("."),gI={INIT:`@@redux/INIT${pd()}`,REPLACE:`@@redux/REPLACE${pd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${pd()}`},Al=gI;function am(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function sm(e,t,n){if(typeof e!="function")throw new Error(qe(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(qe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(qe(1));return n(sm)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function u(){a===o&&(a=new Map,o.forEach((w,f)=>{a.set(f,w)}))}function c(){if(s)throw new Error(qe(3));return i}function d(w){if(typeof w!="function")throw new Error(qe(4));if(s)throw new Error(qe(5));let f=!0;u();const m=l++;return a.set(m,w),function(){if(f){if(s)throw new Error(qe(6));f=!1,u(),a.delete(m),o=null}}}function h(w){if(!am(w))throw new Error(qe(7));if(typeof w.type>"u")throw new Error(qe(8));if(typeof w.type!="string")throw new Error(qe(17));if(s)throw new Error(qe(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(m=>{m()}),w}function p(w){if(typeof w!="function")throw new Error(qe(10));r=w,h({type:Al.REPLACE})}function g(){const w=d;return{subscribe(f){if(typeof f!="object"||f===null)throw new Error(qe(11));function m(){const S=f;S.next&&S.next(c())}return m(),{unsubscribe:w(m)}},[tv](){return this}}}return h({type:Al.INIT}),{dispatch:h,subscribe:d,getState:c,replaceReducer:p,[tv]:g}}function vI(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Al.INIT})>"u")throw new Error(qe(12));if(typeof n(void 0,{type:Al.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(qe(13))})}function yI(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{vI(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],h=n[d],p=a[d],g=h(p,l);if(typeof g>"u")throw l&&l.type,new Error(qe(14));u[d]=g,s=s||g!==p}return s=s||r.length!==Object.keys(a).length,s?u:a}}function Fl(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function xI(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(qe(15))};const a={getState:i.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(a));return o=Fl(...l)(i.dispatch),{...i,dispatch:o}}}function bI(e){return am(e)&&"type"in e&&typeof e.type=="string"}var sS=Symbol.for("immer-nothing"),nv=Symbol.for("immer-draftable"),pt=Symbol.for("immer-state");function rn(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var $t=Object,Wi=$t.getPrototypeOf,Nl="constructor",Zu="prototype",op="configurable",zl="enumerable",qs="writable",xa="value",Gn=e=>!!e&&!!e[pt];function dn(e){var t;return e?lS(e)||Ju(e)||!!e[nv]||!!((t=e[Nl])!=null&&t[nv])||ec(e)||tc(e):!1}var wI=$t[Zu][Nl].toString(),rv=new WeakMap;function lS(e){if(!e||!lm(e))return!1;const t=Wi(e);if(t===null||t===$t[Zu])return!0;const n=$t.hasOwnProperty.call(t,Nl)&&t[Nl];if(n===Object)return!0;if(!di(n))return!1;let r=rv.get(n);return r===void 0&&(r=Function.toString.call(n),rv.set(n,r)),r===wI}function Qu(e,t,n=!0){Aa(e)===0?(n?Reflect.ownKeys(e):$t.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Aa(e){const t=e[pt];return t?t.type_:Ju(e)?1:ec(e)?2:tc(e)?3:0}var iv=(e,t,n=Aa(e))=>n===2?e.has(t):$t[Zu].hasOwnProperty.call(e,t),ap=(e,t,n=Aa(e))=>n===2?e.get(t):e[t],Bl=(e,t,n,r=Aa(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function SI(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Ju=Array.isArray,ec=e=>e instanceof Map,tc=e=>e instanceof Set,lm=e=>typeof e=="object",di=e=>typeof e=="function",hd=e=>typeof e=="boolean";function _I(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Ln=e=>e.copy_||e.base_,um=e=>e.modified_?e.copy_:e.base_;function sp(e,t){if(ec(e))return new Map(e);if(tc(e))return new Set(e);if(Ju(e))return Array[Zu].slice.call(e);const n=lS(e);if(t===!0||t==="class_only"&&!n){const r=$t.getOwnPropertyDescriptors(e);delete r[pt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[qs]===!1&&(l[qs]=!0,l[op]=!0),(l.get||l.set)&&(r[a]={[op]:!0,[qs]:!0,[zl]:l[zl],[xa]:e[a]})}return $t.create(Wi(e),r)}else{const r=Wi(e);if(r!==null&&n)return{...e};const i=$t.create(r);return $t.assign(i,e)}}function cm(e,t=!1){return nc(e)||Gn(e)||!dn(e)||(Aa(e)>1&&$t.defineProperties(e,{set:ms,add:ms,clear:ms,delete:ms}),$t.freeze(e),t&&Qu(e,(n,r)=>{cm(r,!0)},!1)),e}function EI(){rn(2)}var ms={[xa]:EI};function nc(e){return e===null||!lm(e)?!0:$t.isFrozen(e)}var Vl="MapSet",lp="Patches",ov="ArrayMethods",uS={};function Zr(e){const t=uS[e];return t||rn(0,e),t}var av=e=>!!uS[e],ba,cS=()=>ba,CI=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:av(Vl)?Zr(Vl):void 0,arrayMethodsPlugin_:av(ov)?Zr(ov):void 0});function sv(e,t){t&&(e.patchPlugin_=Zr(lp),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function up(e){cp(e),e.drafts_.forEach(kI),e.drafts_=null}function cp(e){e===ba&&(ba=e.parent_)}var lv=e=>ba=CI(ba,e);function kI(e){const t=e[pt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function uv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[pt].modified_&&(up(t),rn(4)),dn(e)&&(e=cv(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[pt].base_,e,t)}else e=cv(t,n);return TI(t,e,!0),up(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==sS?e:void 0}function cv(e,t){if(nc(t))return t;const n=t[pt];if(!n)return Ul(t,e.handledSet_,e);if(!rc(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);pS(n,e)}return n.copy_}function TI(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&cm(t,n)}function dS(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var rc=(e,t)=>e.scope_===t,PI=[];function fS(e,t,n,r){const i=Ln(e),o=e.type_;if(r!==void 0&&ap(i,r,o)===t){Bl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Qu(i,(s,u)=>{if(Gn(u)){const c=l.get(u)||[];c.push(s),l.set(u,c)}})}const a=e.draftLocations_.get(t)??PI;for(const l of a)Bl(i,l,n,o)}function OI(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!rc(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=um(o);fS(e,o.draft_??o,a,n),pS(o,i)})}function pS(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}dS(e)}}function MI(e,t,n){const{scope_:r}=e;if(Gn(n)){const i=n[pt];rc(i,r)&&i.callbacks_.push(function(){Xs(e);const a=um(i);fS(e,n,a,t)})}else dn(n)&&e.callbacks_.push(function(){const o=Ln(e);e.type_===3?o.has(n)&&Ul(n,r.handledSet_,r):ap(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Ul(ap(e.copy_,t,e.type_),r.handledSet_,r)})}function Ul(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Gn(e)||t.has(e)||!dn(e)||nc(e)||(t.add(e),Qu(e,(r,i)=>{if(Gn(i)){const o=i[pt];if(rc(o,n)){const a=um(o);Bl(e,r,a,e.type_),dS(o)}}else dn(i)&&Ul(i,t,n)})),e}function II(e,t){const n=Ju(e),r={type_:n?1:0,scope_:t?t.scope_:cS(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Hl;n&&(i=[r],o=wa);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var Hl={get(e,t){if(t===pt)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Ln(e);if(!iv(i,t,e.type_))return $I(e,i,t);const o=i[t];if(e.finalized_||!dn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&_I(t))return o;if(o===md(e.base_,t)){Xs(e);const a=e.type_===1?+t:t,l=fp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Ln(e)},ownKeys(e){return Reflect.ownKeys(Ln(e))},set(e,t,n){const r=hS(Ln(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=md(Ln(e),t),o=i==null?void 0:i[pt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(SI(n,i)&&(n!==void 0||iv(e.base_,t,e.type_)))return!0;Xs(e),dp(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),MI(e,t,n)),!0},deleteProperty(e,t){return Xs(e),md(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),dp(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Ln(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[qs]:!0,[op]:e.type_!==1||t!=="length",[zl]:r[zl],[xa]:n[t]}},defineProperty(){rn(11)},getPrototypeOf(e){return Wi(e.base_)},setPrototypeOf(){rn(12)}},wa={};for(let e in Hl){let t=Hl[e];wa[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}wa.deleteProperty=function(e,t){return wa.set.call(this,e,t,void 0)};wa.set=function(e,t,n){return Hl.set.call(this,e[0],t,n,e[0])};function md(e,t){const n=e[pt];return(n?Ln(n):e)[t]}function $I(e,t,n){var i;const r=hS(t,n);return r?xa in r?r[xa]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function hS(e,t){if(!(t in e))return;let n=Wi(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Wi(n)}}function dp(e){e.modified_||(e.modified_=!0,e.parent_&&dp(e.parent_))}function Xs(e){e.copy_||(e.assigned_=new Map,e.copy_=sp(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var jI=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(di(t)&&!di(n)){const o=n;n=t;const a=this;return function(s=o,...u){return a.produce(s,c=>n.call(this,c,...u))}}di(n)||rn(6),r!==void 0&&!di(r)&&rn(7);let i;if(dn(t)){const o=lv(this),a=fp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?up(o):cp(o)}return sv(o,r),uv(i,o)}else if(!t||!lm(t)){if(i=n(t),i===void 0&&(i=t),i===sS&&(i=void 0),this.autoFreeze_&&cm(i,!0),r){const o=[],a=[];Zr(lp).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else rn(1,t)},this.produceWithPatches=(t,n)=>{if(di(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},hd(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),hd(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),hd(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){dn(e)||rn(8),Gn(e)&&(e=DI(e));const t=lv(this),n=fp(t,e,void 0);return n[pt].isManual_=!0,cp(t),n}finishDraft(e,t){const n=e&&e[pt];(!n||!n.isManual_)&&rn(9);const{scope_:r}=n;return sv(r,t),uv(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Zr(lp).applyPatches_;return Gn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function fp(e,t,n,r){const[i,o]=ec(t)?Zr(Vl).proxyMap_(t,n):tc(t)?Zr(Vl).proxySet_(t,n):II(t,n);return((n==null?void 0:n.scope_)??cS()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?OI(n,o,r):o.callbacks_.push(function(s){var c;(c=s.mapSetPlugin_)==null||c.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),i}function DI(e){return Gn(e)||rn(10,e),mS(e)}function mS(e){if(!dn(e)||nc(e))return e;const t=e[pt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=sp(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=sp(e,!0);return Qu(n,(i,o)=>{Bl(n,i,mS(o))},r),t&&(t.finalized_=!1),n}var LI=new jI,gS=LI.produce;function vS(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var RI=vS(),AI=vS,FI=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Fl:Fl.apply(null,arguments)};function dv(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(zn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>bI(r)&&r.type===e,n}var yS=class jo extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,jo.prototype)}static get[Symbol.species](){return jo}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new jo(...t[0].concat(this)):new jo(...t.concat(this))}};function fv(e){return dn(e)?gS(e,()=>{}):e}function gs(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function NI(e){return typeof e=="boolean"}var zI=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new yS;return n&&(NI(n)?a.push(RI):a.push(AI(n.extraArgument))),a},BI="RTK_autoBatch",pv=e=>t=>{setTimeout(t,e)},VI=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:pv(10):e.type==="callback"?e.queueNotification:pv(e.timeout),u=()=>{a=!1,o&&(o=!1,l.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),h=r.subscribe(d);return l.add(c),()=>{h(),l.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[BI]),o=!i,o&&(a||(a=!0,s(u))),r.dispatch(c)}finally{i=!0}}})},UI=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new yS(e);return r&&i.push(VI(typeof r=="object"?r:void 0)),i};function HI(e){const t=zI(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(am(n))s=yI(n);else throw new Error(zn(1));let u;typeof r=="function"?u=r(t):u=t();let c=Fl;i&&(c=FI({trace:!1,...typeof i=="object"&&i}));const d=xI(...u),h=UI(d);let p=typeof l=="function"?l(h):h();const g=c(...p);return sm(s,a,g)}function xS(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(zn(28));if(l in t)throw new Error(zn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function WI(e){return typeof e=="function"}function GI(e,t){let[n,r,i]=xS(t),o;if(WI(e))o=()=>fv(e());else{const l=fv(e);o=()=>l}function a(l=o(),s){let u=[n[s.type],...r.filter(({matcher:c})=>c(s)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Gn(c)){const p=d(c,s);return p===void 0?c:p}else{if(dn(c))return gS(c,h=>d(h,s));{const h=d(c,s);if(h===void 0){if(c===null)return c;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}}return c},l)}return a.getInitialState=o,a}var YI=Symbol.for("rtk-slice-createasyncthunk");function qI(e,t){return`${e}/${t}`}function XI({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[YI];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(zn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(ZI()):i.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(S,E){const k=typeof S=="string"?S:S.type;if(!k)throw new Error(zn(12));if(k in u.sliceCaseReducersByType)throw new Error(zn(13));return u.sliceCaseReducersByType[k]=E,c},addMatcher(S,E){return u.sliceMatchers.push({matcher:S,reducer:E}),c},exposeAction(S,E){return u.actionCreators[S]=E,c},exposeCaseReducer(S,E){return u.sliceCaseReducersByName[S]=E,c}};s.forEach(S=>{const E=l[S],k={reducerName:S,type:qI(o,S),createNotation:typeof i.reducers=="function"};JI(E)?t$(k,E,c,t):QI(k,E,c)});function d(){const[S={},E=[],k=void 0]=typeof i.extraReducers=="function"?xS(i.extraReducers):[i.extraReducers],_={...S,...u.sliceCaseReducersByType};return GI(i.initialState,C=>{for(let O in _)C.addCase(O,_[O]);for(let O of u.sliceMatchers)C.addMatcher(O.matcher,O.reducer);for(let O of E)C.addMatcher(O.matcher,O.reducer);k&&C.addDefaultCase(k)})}const h=S=>S,p=new Map,g=new WeakMap;let y;function w(S,E){return y||(y=d()),y(S,E)}function f(){return y||(y=d()),y.getInitialState()}function m(S,E=!1){function k(C){let O=C[S];return typeof O>"u"&&E&&(O=gs(g,k,f)),O}function _(C=h){const O=gs(p,E,()=>new WeakMap);return gs(O,C,()=>{const M={};for(const[$,I]of Object.entries(i.selectors??{}))M[$]=KI(I,C,()=>gs(g,C,f),E);return M})}return{reducerPath:S,getSelectors:_,get selectors(){return _(k)},selectSlice:k}}const x={name:o,reducer:w,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:f,...m(a),injectInto(S,{reducerPath:E,...k}={}){const _=E??a;return S.inject({reducerPath:_,reducer:w},k),{...x,...m(_,!0)}}};return x}}function KI(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var bS=XI();function ZI(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function QI({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!e$(r))throw new Error(zn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?dv(e,a):dv(e))}function JI(e){return e._reducerDefinitionType==="asyncThunk"}function e$(e){return e._reducerDefinitionType==="reducerWithPrepare"}function t$({type:e,reducerName:t},n,r,i){if(!i)throw new Error(zn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:u,options:c}=n,d=i(e,o,c);r.exposeAction(t,d),a&&r.addCase(d.fulfilled,a),l&&r.addCase(d.pending,l),s&&r.addCase(d.rejected,s),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:a||vs,pending:l||vs,rejected:s||vs,settled:u||vs})}function vs(){}function zn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const wS=bS({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=e.items.find(r=>r.id===t.payload.id);n?n.quantity=(n.quantity||0)+1:e.items.push({...t.payload,quantity:1})},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&(n.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:Fa,removeFromCart:n$,clearCart:r$,addAllToCart:i$,incrementQuantity:o$,decrementQuantity:a$}=wS.actions,s$=wS.reducer;function SS(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=SS(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Ur(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=SS(e))&&(r&&(r+=" "),r+=t);return r}function l$(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}l$(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Na=e=>typeof e=="number"&&!isNaN(e),Qr=e=>typeof e=="string",Yn=e=>typeof e=="function",u$=e=>Qr(e)||Na(e),pp=e=>Qr(e)||Yn(e)?e:null,c$=(e,t)=>e===!1||Na(e)&&e>0?e:t,hp=e=>b.isValidElement(e)||Qr(e)||Yn(e)||Na(e);function d$(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function f$({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:c,playToast:d}){let h=n?`${e}--${a}`:e,p=n?`${t}--${a}`:t,g=b.useRef(0);return b.useLayoutEffect(()=>{let y=u.current,w=h.split(" "),f=m=>{m.target===u.current&&(d(),y.removeEventListener("animationend",f),y.removeEventListener("animationcancel",f),g.current===0&&m.type!=="animationcancel"&&y.classList.remove(...w))};y.classList.add(...w),y.addEventListener("animationend",f),y.addEventListener("animationcancel",f)},[]),b.useEffect(()=>{let y=u.current,w=()=>{y.removeEventListener("animationend",w),r?d$(y,s,i):s()};c||(l?w():(g.current=1,y.className+=` ${p}`,y.addEventListener("animationend",w)))},[c]),X.createElement(X.Fragment,null,o)}}function hv(e,t){return{content:_S(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function _S(e,t,n=!1){return b.isValidElement(e)&&!Qr(e.type)?b.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Yn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function p$({closeToast:e,theme:t,ariaLabel:n="close"}){return X.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},X.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},X.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function h$({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:c}){let d=i||a&&l===0,h={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(h.transform=`scaleX(${l})`);let p=Ur("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${c}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),g=Yn(o)?o({rtl:s,type:r,defaultClassName:p}):Ur(p,o),y={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return X.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":d},X.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${c} Toastify__progress-bar--${r}`}),X.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:g,style:h,...y}))}var m$=1,ES=()=>`${m$++}`;function g$(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,u=new Set,c=m=>(u.add(m),()=>u.delete(m)),d=()=>{a=Array.from(s.values()),u.forEach(m=>m())},h=({containerId:m,toastId:x,updateId:S})=>{let E=m?m!==e:e!==1,k=s.has(x)&&S==null;return E||k},p=(m,x)=>{s.forEach(S=>{var E;(x==null||x===S.props.toastId)&&((E=S.toggle)==null||E.call(S,m))})},g=m=>{var x,S;(S=(x=m.props)==null?void 0:x.onClose)==null||S.call(x,m.removalReason),m.isActive=!1},y=m=>{if(m==null)s.forEach(g);else{let x=s.get(m);x&&g(x)}d()},w=()=>{i-=o.length,o=[]},f=m=>{var x,S;let{toastId:E,updateId:k}=m.props,_=k==null;m.staleId&&s.delete(m.staleId),m.isActive=!0,s.set(E,m),d(),n(hv(m,_?"added":"updated")),_&&((S=(x=m.props).onOpen)==null||S.call(x))};return{id:e,props:l,observe:c,toggle:p,removeToast:y,toasts:s,clearQueue:w,buildToast:(m,x)=>{if(h(x))return;let{toastId:S,updateId:E,data:k,staleId:_,delay:C}=x,O=E==null;O&&i++;let M={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([I,L])=>L!=null)),toastId:S,updateId:E,data:k,isIn:!1,className:pp(x.className||l.toastClassName),progressClassName:pp(x.progressClassName||l.progressClassName),autoClose:x.isLoading?!1:c$(x.autoClose,l.autoClose),closeToast(I){s.get(S).removalReason=I,y(S)},deleteToast(){let I=s.get(S);if(I!=null){if(n(hv(I,"removed")),s.delete(S),i--,i<0&&(i=0),o.length>0){f(o.shift());return}d()}}};M.closeButton=l.closeButton,x.closeButton===!1||hp(x.closeButton)?M.closeButton=x.closeButton:x.closeButton===!0&&(M.closeButton=hp(l.closeButton)?l.closeButton:!0);let $={content:m,props:M,staleId:_};l.limit&&l.limit>0&&i>l.limit&&O?o.push($):Na(C)?setTimeout(()=>{f($)},C):f($)},setProps(m){l=m},setToggle:(m,x)=>{let S=s.get(m);S&&(S.toggle=x)},isToastActive:m=>{var x;return(x=s.get(m))==null?void 0:x.isActive},getSnapshot:()=>a}}var dt=new Map,Sa=[],mp=new Set,v$=e=>mp.forEach(t=>t(e)),CS=()=>dt.size>0;function y$(){Sa.forEach(e=>TS(e.content,e.options)),Sa=[]}var x$=(e,{containerId:t})=>{var n;return(n=dt.get(t||1))==null?void 0:n.toasts.get(e)};function kS(e,t){var n;if(t)return!!((n=dt.get(t))!=null&&n.isToastActive(e));let r=!1;return dt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function b$(e){if(!CS()){Sa=Sa.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||u$(e))dt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=dt.get(e.containerId);t?t.removeToast(e.id):dt.forEach(n=>{n.removeToast(e.id)})}}var w$=(e={})=>{dt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function TS(e,t){hp(e)&&(CS()||Sa.push({content:e,options:t}),dt.forEach(n=>{n.buildToast(e,t)}))}function S$(e){var t;(t=dt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function PS(e,t){dt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function _$(e){let t=e.containerId||1;return{subscribe(n){let r=g$(t,e,v$);dt.set(t,r);let i=r.observe(n);return y$(),()=>{i(),dt.delete(t)}},setProps(n){var r;(r=dt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=dt.get(t))==null?void 0:n.getSnapshot()}}}function E$(e){return mp.add(e),()=>{mp.delete(e)}}function C$(e){return e&&(Qr(e.toastId)||Na(e.toastId))?e.toastId:ES()}function za(e,t){return TS(e,t),t.toastId}function ic(e,t){return{...t,type:t&&t.type||e,toastId:C$(t)}}function oc(e){return(t,n)=>za(t,ic(e,n))}function ee(e,t){return za(e,ic("default",t))}ee.loading=(e,t)=>za(e,ic("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function k$(e,{pending:t,error:n,success:r},i){let o;t&&(o=Qr(t)?ee.loading(t,i):ee.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,c,d)=>{if(c==null){ee.dismiss(o);return}let h={type:u,...a,...i,data:d},p=Qr(c)?{render:c}:c;return o?ee.update(o,{...h,...p}):ee(p.render,{...h,...p}),d},s=Yn(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}ee.promise=k$;ee.success=oc("success");ee.info=oc("info");ee.error=oc("error");ee.warning=oc("warning");ee.warn=ee.warning;ee.dark=(e,t)=>za(e,ic("default",{theme:"dark",...t}));function T$(e){b$(e)}ee.dismiss=T$;ee.clearWaitingQueue=w$;ee.isActive=kS;ee.update=(e,t={})=>{let n=x$(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:ES()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,za(a,o)}};ee.done=e=>{ee.update(e,{progress:1})};ee.onChange=E$;ee.play=e=>PS(!0,e);ee.pause=e=>PS(!1,e);function P$(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=b.useRef(_$(e)).current;i(e);let o=(t=b.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:c}=u.props;s.has(c)||s.set(c,[]),s.get(c).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:kS,count:o==null?void 0:o.length}}function O$(e){let[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:c,closeOnClick:d}=e;S$({id:e.toastId,containerId:e.containerId,fn:n}),b.useEffect(()=>{if(e.pauseOnFocusLoss)return h(),()=>{p()}},[e.pauseOnFocusLoss]);function h(){document.hasFocus()||f(),window.addEventListener("focus",w),window.addEventListener("blur",f)}function p(){window.removeEventListener("focus",w),window.removeEventListener("blur",f)}function g(_){if(e.draggable===!0||e.draggable===_.pointerType){m();let C=o.current;a.canCloseOnClick=!0,a.canDrag=!0,C.style.transition="none",e.draggableDirection==="x"?(a.start=_.clientX,a.removalDistance=C.offsetWidth*(e.draggablePercent/100)):(a.start=_.clientY,a.removalDistance=C.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function y(_){let{top:C,bottom:O,left:M,right:$}=o.current.getBoundingClientRect();_.nativeEvent.type!=="touchend"&&e.pauseOnHover&&_.clientX>=M&&_.clientX<=$&&_.clientY>=C&&_.clientY<=O?f():w()}function w(){n(!0)}function f(){n(!1)}function m(){a.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",E)}function x(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",E)}function S(_){let C=o.current;if(a.canDrag&&C){a.didMove=!0,t&&f(),e.draggableDirection==="x"?a.delta=_.clientX-a.start:a.delta=_.clientY-a.start,a.start!==_.clientX&&(a.canCloseOnClick=!1);let O=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;C.style.transform=`translate3d(${O},0)`,C.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function E(){x();let _=o.current;if(a.canDrag&&a.didMove&&_){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}_.style.transition="transform 0.2s, opacity 0.2s",_.style.removeProperty("transform"),_.style.removeProperty("opacity")}}let k={onPointerDown:g,onPointerUp:y};return l&&s&&(k.onMouseEnter=f,e.stacked||(k.onMouseLeave=w)),d&&(k.onClick=_=>{c&&c(_),a.canCloseOnClick&&u(!0)}),{playToast:w,pauseToast:f,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:k}}var M$=typeof window<"u"?b.useLayoutEffect:b.useEffect,ac=({theme:e,type:t,isLoading:n,...r})=>X.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function I$(e){return X.createElement(ac,{...e},X.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function $$(e){return X.createElement(ac,{...e},X.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function j$(e){return X.createElement(ac,{...e},X.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function D$(e){return X.createElement(ac,{...e},X.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function L$(){return X.createElement("div",{className:"Toastify__spinner"})}var gp={info:$$,warning:I$,success:j$,error:D$,spinner:L$},R$=e=>e in gp;function A$({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Yn(r)?i=r({...o,isLoading:n}):b.isValidElement(r)?i=b.cloneElement(r,o):n?i=gp.spinner():R$(t)&&(i=gp[t](o))),i}var F$=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=O$(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:c,hideProgressBar:d,closeToast:h,transition:p,position:g,className:y,style:w,progressClassName:f,updateId:m,role:x,progress:S,rtl:E,toastId:k,deleteToast:_,isIn:C,isLoading:O,closeOnClick:M,theme:$,ariaLabel:I}=e,L=Ur("Toastify__toast",`Toastify__toast-theme--${$}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":M}),R=Yn(y)?y({rtl:E,position:g,type:c,defaultClassName:L}):Ur(L,y),D=A$(e),F=!!S||!s,A={closeToast:h,type:c,theme:$},P=null;return a===!1||(Yn(a)?P=a(A):b.isValidElement(a)?P=b.cloneElement(a,A):P=p$(A)),X.createElement(p,{isIn:C,done:_,position:g,preventExitTransition:n,nodeRef:r,playToast:o},X.createElement("div",{id:k,tabIndex:0,onClick:u,"data-in":C,className:R,...i,style:w,ref:r,...C&&{role:x,"aria-label":I}},D!=null&&X.createElement("div",{className:Ur("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},D),_S(l,e,!t),P,!e.customProgressBar&&X.createElement(h$,{...m&&!F?{key:`p-${m}`}:{},rtl:E,theme:$,delay:s,isRunning:t,isIn:C,closeToast:h,hide:d,type:c,className:f,controlledProgress:F,progress:S||0})))},N$=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),z$=f$(N$("bounce",!0)),B$={position:"top-right",transition:z$,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function oo(e){let t={...B$,...e},n=e.stacked,[r,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=P$(t),{className:u,style:c,rtl:d,containerId:h,hotKeys:p}=t;function g(w){let f=Ur("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":d});return Yn(u)?u({position:w,rtl:d,defaultClassName:f}):Ur(f,pp(u))}function y(){n&&(i(!0),ee.play())}return M$(()=>{var w;if(n){let f=o.current.querySelectorAll('[data-in="true"]'),m=12,x=(w=t.position)==null?void 0:w.includes("top"),S=0,E=0;Array.from(f).reverse().forEach((k,_)=>{let C=k;C.classList.add("Toastify__toast--stacked"),_>0&&(C.dataset.collapsed=`${r}`),C.dataset.pos||(C.dataset.pos=x?"top":"bot");let O=S*(r?.2:1)+(r?0:m*_);C.style.setProperty("--y",`${x?O:O*-1}px`),C.style.setProperty("--g",`${m}`),C.style.setProperty("--s",`${1-(r?E:0)}`),S+=C.offsetHeight,E+=.025})}},[r,s,n]),b.useEffect(()=>{function w(f){var m;let x=o.current;p(f)&&((m=x.querySelector('[tabIndex="0"]'))==null||m.focus(),i(!1),ee.pause()),f.key==="Escape"&&(document.activeElement===x||x!=null&&x.contains(document.activeElement))&&(i(!0),ee.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[p]),X.createElement("section",{ref:o,className:"Toastify",id:h,onMouseEnter:()=>{n&&(i(!1),ee.pause())},onMouseLeave:y,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,f)=>{let m=f.length?{...c}:{...c,pointerEvents:"none"};return X.createElement("div",{tabIndex:-1,className:g(w),"data-stacked":n,style:m,key:`c-${w}`},f.map(({content:x,props:S})=>X.createElement(F$,{...S,stacked:n,collapseAll:y,isIn:l(S.toastId,S.containerId),key:`t-${S.key}`},x)))}))}const _a="/Didiv/assets/nofoto-2f8d9d99.png",V$=()=>{const e=ni(),[t,n]=b.useState([]);b.useEffect(()=>{const o=new Date,a=new Date;a.setDate(o.getDate()-7);const l=a.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${l}`).then(s=>s.json()).then(s=>n(s.data)).catch(s=>console.error("Помилка завантаження нових товарів:",s))},[]),console.log(t);const r=[...t].sort(()=>Math.random()-.5).slice(0,3),i=o=>{e(Fa({...o,quantity:1})),ee.success(`${o.name} додано в кошик!`)};return!t||t.length===0?null:v.jsxs(tI,{children:[v.jsx(oo,{}),v.jsx(nI,{children:"Нові товари"}),v.jsxs(rI,{children:[r.map(o=>{var a;return v.jsxs(iI,{children:[v.jsxs(oI,{to:`/product/${o.id}`,children:[v.jsx(aI,{children:"Новинка"}),v.jsx("img",{src:((a=o.images)==null?void 0:a[0].url)||_a,alt:o.name,onError:l=>{l.currentTarget.onerror=null,l.currentTarget.src=_a}}),v.jsx("div",{className:"overlay"})]}),v.jsxs(sI,{children:[v.jsx(lI,{children:o.name}),v.jsxs(uI,{children:[v.jsxs(cI,{children:[o.price," грн"]}),v.jsx(dI,{onClick:()=>i(o),children:v.jsx(ja,{size:22})})]})]})]},o.id)}),v.jsx(fI,{to:"/catalog/new",children:v.jsxs(pI,{children:[v.jsx("p",{children:"Усі новинки"}),v.jsx(hI,{children:v.jsx(Sb,{size:24})})]})})]})]})},U$=T.div`
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
`,OS=()=>v.jsxs(U$,{children:[v.jsxs(gd,{children:[v.jsx(vd,{children:"3000+"}),v.jsx(yd,{children:"Перевірених деталей"})]}),v.jsxs(gd,{children:[v.jsx(vd,{children:"6 років"}),v.jsx(yd,{children:"Досвіду на ринку"})]}),v.jsxs(gd,{children:[v.jsx(vd,{children:"100%"}),v.jsx(yd,{children:"Контроль якості"})]})]}),H$=ze.div`
  background:var(--background-color);
`,W$=ze.div`
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
`;ze.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;ze.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;const G$=()=>v.jsx(H$,{children:v.jsxs(W$,{children:[v.jsx(eI,{}),v.jsx(OS,{}),v.jsx(V$,{}),v.jsx(v4,{})]})}),Y$=T.div`
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
`,q$=T.section`
  background-color:  var(--second-background);
`,X$=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,K$=T.button`
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
`,Z$=T.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,Q$=T.button`
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
`,J$=T.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,ej=T.div`
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
`,tj=T.div`
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
`;const nj=T.div`
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
`;const rj=T.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,ij=T.button`
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
`,oj=T.aside`

        margin-top: 42px;
  width: 240px;
  padding: 16px;
  border-radius: 16px;
  background: #fff;
  height: fit-content;
  @media (min-width: 768px) {
  display: block;
}

@media (max-width: 767px) {
  display: none;
}
`,aj=T.h3`
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
`;const sj=T.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,lj=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,uj=T.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,cj=T.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,dj=T.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,fj=T.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,vp=T.input.attrs({type:"checkbox"})`
  display: none;
`,pj=T.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${vp}:checked + & {
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

  ${vp}:checked + &::after {
    opacity: 1;
  }
`;var yp={},dm={},fm={},ao={};Object.defineProperty(ao,"__esModule",{value:!0});ao.Direction=void 0;var mv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(mv||(ao.Direction=mv={}));(function(e){var t=te&&te.__spreadArray||function(I,L,R){if(R||arguments.length===2)for(var D=0,F=L.length,A;D<F;D++)(A||!(D in L))&&(A||(A=Array.prototype.slice.call(L,0,D)),A[D]=L[D]);return I.concat(A||Array.prototype.slice.call(L))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=b,r=ao,i=function(I){var L=I.toString().split(".")[1];return L?L.length:0};e.getStepDecimals=i;function o(I){return I.touches&&I.touches.length||I.changedTouches&&I.changedTouches.length}e.isTouchEvent=o;function a(I,L,R){var D=(L-I)/R,F=8,A=Number(D.toFixed(F));return parseInt(A.toString(),10)===A}e.isStepDivisible=a;function l(I,L,R,D,F,A,P){var j=1e11;if(I=Math.round(I*j)/j,!A){var N=P[L-1],B=P[L+1];if(N&&N>I)return N;if(B&&B<I)return B}if(I>D)return D;if(I<R)return R;var z=Math.floor(I*j-R*j)%Math.floor(F*j),U=Math.floor(I*j-Math.abs(z)),H=z===0?I:U/j,Y=Math.abs(z/j)<F/2?H:H+F,q=(0,e.getStepDecimals)(F);return parseFloat(Y.toFixed(q))}e.normalizeValue=l;function s(I,L,R){return(I-L)/(R-L)}e.relativeValue=s;function u(I){return I===r.Direction.Up||I===r.Direction.Down}e.isVertical=u;function c(I,L,R){if(L>=R)throw new RangeError("min (".concat(L,") is equal/bigger than max (").concat(R,")"));if(I<L)throw new RangeError("value (".concat(I,") is smaller than min (").concat(L,")"));if(I>R)throw new RangeError("value (".concat(I,") is bigger than max (").concat(R,")"))}e.checkBoundaries=c;function d(I,L,R){return I<L?L:I>R?R:I}e.checkValuesAgainstBoundaries=d;function h(I){if(!(I.length<2)&&!I.slice(1).every(function(L,R){return I[R]<=L}))throw new RangeError("values={[".concat(I,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=h;function p(I){var L=window.getComputedStyle(I);return{top:parseInt(L["margin-top"],10),bottom:parseInt(L["margin-bottom"],10),left:parseInt(L["margin-left"],10),right:parseInt(L["margin-right"],10)}}e.getMargin=p;function g(I){var L=window.getComputedStyle(I);return{top:parseInt(L["padding-top"],10)+parseInt(L["border-top-width"],10),bottom:parseInt(L["padding-bottom"],10)+parseInt(L["border-bottom-width"],10),left:parseInt(L["padding-left"],10)+parseInt(L["border-left-width"],10),right:parseInt(L["padding-right"],10)+parseInt(L["border-right-width"],10)}}e.getPaddingAndBorder=g;function y(I,L,R){var D=R?-1:1;I.forEach(function(F,A){return f(F,D*L[A].x,L[A].y)})}e.translateThumbs=y;function w(I,L,R,D){for(var F=0,A=M(I[0],L,R,D),P=1;P<I.length;P++){var j=M(I[P],L,R,D);j<A&&(A=j,F=P)}return F}e.getClosestThumbIndex=w;function f(I,L,R){I.style.transform="translate(".concat(L,"px, ").concat(R,"px)")}e.translate=f;var m=function(I){var L=[],R=null,D=function(){for(var F=[],A=0;A<arguments.length;A++)F[A]=arguments[A];L=F,!R&&(R=requestAnimationFrame(function(){R=null,I.apply(void 0,L)}))};return D};e.schd=m;function x(I,L,R){var D=I.slice(0);return D[L]=R,D}e.replaceAt=x;function S(I){var L=I.values,R=I.colors,D=I.min,F=I.max,A=I.direction,P=A===void 0?r.Direction.Right:A,j=I.rtl,N=j===void 0?!1:j;N&&P===r.Direction.Right?P=r.Direction.Left:N&&r.Direction.Left&&(P=r.Direction.Right);var B=L.slice(0).sort(function(U,H){return U-H}).map(function(U){return(U-D)/(F-D)*100}),z=B.reduce(function(U,H,Y){return"".concat(U,", ").concat(R[Y]," ").concat(H,"%, ").concat(R[Y+1]," ").concat(H,"%")},"");return"linear-gradient(".concat(P,", ").concat(R[0]," 0%").concat(z,", ").concat(R[R.length-1]," 100%)")}e.getTrackBackground=S;function E(){}e.voidFn=E;function k(I){throw new Error("Didn't expect to get here")}e.assertUnreachable=k;var _=function(I,L,R,D,F){F===void 0&&(F=function(P){return P});var A=Math.ceil(t([I],Array.from(I.children),!0).reduce(function(P,j){var N=Math.ceil(j.getBoundingClientRect().width);if(j.innerText&&j.innerText.includes(R)&&j.childElementCount===0){var B=j.cloneNode(!0);B.innerHTML=F(L.toFixed(D)),B.style.visibility="hidden",document.body.appendChild(B),N=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return N>P?N:P},I.getBoundingClientRect().width));return A},C=function(I,L,R,D,F,A,P){P===void 0&&(P=function(B){return B});var j=[],N=function(B){var z=_(R[B],D[B],F,A,P),U=L[B].x;L.forEach(function(H,Y){var q=H.x,J=_(R[Y],D[Y],F,A,P);B!==Y&&(U>=q&&U<=q+J||U+z>=q&&U+z<=q+J)&&(j.includes(Y)||(j.push(B),j.push(Y),j=t(t([],j,!0),[B,Y],!1),N(Y)))})};return N(I),Array.from(new Set(j.sort()))},O=function(I,L,R,D,F,A){D===void 0&&(D=.1),F===void 0&&(F=" - "),A===void 0&&(A=function(Y){return Y});var P=(0,e.getStepDecimals)(D),j=(0,n.useState)({}),N=j[0],B=j[1],z=(0,n.useState)(A(L[R].toFixed(P))),U=z[0],H=z[1];return(0,n.useEffect)(function(){if(I){var Y=I.getThumbs();if(Y.length<1)return;var q={},J=I.getOffsets(),fe=C(R,J,Y,L,F,P,A),be=A(L[R].toFixed(P));if(fe.length){var ie=fe.reduce(function(vt,lo,Ua,uo){return vt.length?t(t([],vt,!0),[J[uo[Ua]].x],!1):[J[uo[Ua]].x]},[]);if(Math.min.apply(Math,ie)===J[R].x){var Ie=[];fe.forEach(function(vt){Ie.push(L[vt].toFixed(P))}),be=Array.from(new Set(Ie.sort(function(vt,lo){return parseFloat(vt)-parseFloat(lo)}))).map(A).join(F);var Be=Math.min.apply(Math,ie),Ve=Math.max.apply(Math,ie),ii=Y[fe[ie.indexOf(Ve)]].getBoundingClientRect().width;q.left="".concat(Math.abs(Be-(Ve+ii))/2,"px"),q.transform="translate(-50%, 0)"}else q.visibility="hidden"}H(be),B(q)}},[I,L]),[U,N]};e.useThumbOverlap=O;function M(I,L,R,D){var F=I.getBoundingClientRect(),A=F.left,P=F.top,j=F.width,N=F.height;return u(D)?Math.abs(R-(P+N/2)):Math.abs(L-(A+j/2))}var $=function(){var I,L=((I=navigator.userAgentData)===null||I===void 0?void 0:I.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(L)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=$})(fm);var hj=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),mj=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),gj=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),vj=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&mj(t,e,n);return gj(t,e),t},gv=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(dm,"__esModule",{value:!0});var ys=vj(b),oe=fm,Re=ao,yj=["ArrowRight","ArrowUp","k","PageUp"],xj=["ArrowLeft","ArrowDown","j","PageDown"],bj=function(e){hj(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=ys.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,u=r.trackRef.current;if(!u)return console.warn("No track element found."),[];var c=u.getBoundingClientRect(),d=(0,oe.getPaddingAndBorder)(u);return r.getThumbs().map(function(h,p){var g={x:0,y:0},y=h.getBoundingClientRect(),w=(0,oe.getMargin)(h);switch(o){case Re.Direction.Right:return g.x=(w.left+d.left)*-1,g.y=((y.height-c.height)/2+d.top)*-1,g.x+=c.width*(0,oe.relativeValue)(a[p],l,s)-y.width/2,g;case Re.Direction.Left:return g.x=(w.right+d.right)*-1,g.y=((y.height-c.height)/2+d.top)*-1,g.x+=c.width-c.width*(0,oe.relativeValue)(a[p],l,s)-y.width/2,g;case Re.Direction.Up:return g.x=((y.width-c.width)/2+w.left+d.left)*-1,g.y=-d.left,g.y+=c.height-c.height*(0,oe.relativeValue)(a[p],l,s)-y.height/2,g;case Re.Direction.Down:return g.x=((y.width-c.width)/2+w.left+d.left)*-1,g.y=-d.left,g.y+=c.height*(0,oe.relativeValue)(a[p],l,s)-y.height/2,g;default:return(0,oe.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,oe.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,oe.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,oe.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,u=o.rtl,c=o.direction,d=r.state.isChanged,h=r.getTargetIndex(i.nativeEvent),p=u||c===Re.Direction.Left||c===Re.Direction.Down?-1:1;h!==-1&&(yj.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:h,isChanged:!0}),l((0,oe.replaceAt)(a,h,r.normalizeValue(a[h]+p*(i.key==="PageUp"?s*10:s),h)))):xj.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:h,isChanged:!0}),l((0,oe.replaceAt)(a,h,r.normalizeValue(a[h]-p*(i.key==="PageDown"?s*10:s),h)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){d&&r.fireOnFinalChange()}):d&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,u=r.props,c=u.direction,d=u.min,h=u.max,p=u.onChange,g=u.values,y=u.step,w=u.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var f=r.trackRef.current;if(!f)return null;var m=f.getBoundingClientRect(),x=(0,oe.isVertical)(c)?m.height:m.width;if(s[0]!==-1&&s[1]!==-1){var S=i-s[0],E=o-s[1],k=0;switch(c){case Re.Direction.Right:case Re.Direction.Left:k=S/x*(h-d);break;case Re.Direction.Down:case Re.Direction.Up:k=E/x*(h-d);break;default:(0,oe.assertUnreachable)(c)}if(w&&(k*=-1),Math.abs(k)>=y/2){for(var _=0;_<r.thumbRefs.length;_++){if(g[_]===h&&Math.sign(k)===1||g[_]===d&&Math.sign(k)===-1)return;var C=g[_]+k;C>h?k=h-g[_]:C<d&&(k=d-g[_])}for(var O=g.slice(0),_=0;_<r.thumbRefs.length;_++)O=(0,oe.replaceAt)(O,_,r.normalizeValue(g[_]+k,_));r.setState({draggedTrackPos:[i,o]}),p(O)}}else{var M=0;switch(c){case Re.Direction.Right:M=(i-m.left)/x*(h-d)+d;break;case Re.Direction.Left:M=(x-(i-m.left))/x*(h-d)+d;break;case Re.Direction.Down:M=(o-m.top)/x*(h-d)+d;break;case Re.Direction.Up:M=(x-(o-m.top))/x*(h-d)+d;break;default:(0,oe.assertUnreachable)(c)}w&&(M=h+d-M),Math.abs(g[l]-M)>=y/2&&p((0,oe.replaceAt)(g,l,r.normalizeValue(M,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,u=a.step,c=a.allowOverlap,d=a.values;return(0,oe.normalizeValue)(i,o,l,s,u,c,d)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=ys.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),u=[],c=0;c<r.numOfMarks+1;c++){var d=9999,h=9999;if(r.markRefs[c].current){var p=r.markRefs[c].current.getBoundingClientRect();d=p.height,h=p.width}r.props.direction===Re.Direction.Left||r.props.direction===Re.Direction.Right?u.push([Math.round(o/r.numOfMarks*c+l-h/2),-Math.round((d-a)/2)]):u.push([Math.round(a/r.numOfMarks*c+s-d/2),-Math.round((h-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,oe.schd)(r.onMouseMove),r.schdOnTouchMove=(0,oe.schd)(r.onTouchMove),r.schdOnEnd=(0,oe.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return ys.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,oe.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,oe.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,oe.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(c){(0,oe.isStepDivisible)(a,c,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,u=s===void 0?function(){return null}:s,c=r.values,d=r.min,h=r.max,p=r.allowOverlap,g=r.disabled,y=this.state,w=y.draggedThumbIndex,f=y.thumbZIndexes,m=y.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,oe.isVertical)(this.props.direction)?"ns-resize":"ew-resize":c.length===1&&!g?"pointer":"inherit"},onMouseDown:g?oe.voidFn:this.onMouseDownTrack,onTouchStart:g?oe.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:g,children:gv(gv([],m.map(function(x,S,E){return u({props:{style:n.props.direction===Re.Direction.Left||n.props.direction===Re.Direction.Right?{position:"absolute",left:"".concat(x[0],"px"),marginTop:"".concat(x[1],"px")}:{position:"absolute",top:"".concat(x[0],"px"),marginLeft:"".concat(x[1],"px")},key:"mark".concat(S),ref:n.markRefs[S]},index:S})}),!0),c.map(function(x,S){var E=n.state.draggedThumbIndex===S;return l({index:S,value:x,isDragged:E,props:{style:{position:"absolute",zIndex:f[S],cursor:g?"inherit":E?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:g?void 0:0,"aria-valuemax":p?h:c[S+1]||h,"aria-valuemin":p?d:c[S-1]||d,"aria-valuenow":x,draggable:!1,ref:n.thumbRefs[S],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:g?oe.voidFn:n.onKeyDown,onKeyUp:g?oe.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Re.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(ys.Component);dm.default=bj;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(dm);e.Range=n.default;var r=fm;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=ao;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(yp);const wj=T.div`
  padding: 20px 0;
`,Sj=T.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,vv=T.input`
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
`;const _j=T.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,Ej=T.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,IS=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,u]=b.useState([o,a]);b.useEffect(()=>{e&&e.length===2&&(u(e),t&&t(e))},[e,t]);const c=p=>{u(p),t&&t(p)},d=(p,g)=>{const y=g===""?"":Number(g),w=[...s];w[p]=y,c(w)},h=p=>{const g=[...s];p===0?((g[0]===""||g[0]<o)&&(g[0]=o),g[0]>g[1]-50&&(g[0]=g[1]-50)):((g[1]===""||g[1]>a)&&(g[1]=a),g[1]<g[0]+50&&(g[1]=g[0]+50)),c(g)};return v.jsx(v.Fragment,{children:l&&v.jsxs(wj,{children:[v.jsxs(Sj,{children:[v.jsx(vv,{type:"number",value:s[0],min:o,max:s[1],onChange:p=>d(0,p.target.value),onBlur:()=>h(0)}),v.jsx(vv,{type:"number",value:s[1],min:s[0],max:a,onChange:p=>d(1,p.target.value),onBlur:()=>h(1)})]}),v.jsx(yp.Range,{values:s,step:50,min:o,max:a,onChange:c,renderTrack:({props:p,children:g})=>v.jsx(_j,{...p,background:yp.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:g}),renderThumb:({props:p})=>v.jsx(Ej,{...p})})]})})},Cj=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState([]);console.log(o),b.useEffect(()=>{t&&(async()=>{try{const y=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][id_title][$eq]=${encodeURIComponent(t)}`)).json();console.log("dataaaa",y.data);const w=y.data||[],f={};w.forEach(x=>{var S;(S=x.attributes)==null||S.forEach(E=>{f[E.label]||(f[E.label]=new Set),f[E.label].add(E.value)})});const m=Object.entries(f).map(([x,S])=>({type:"checkbox",label:x,name:x.toLowerCase(),options:Array.from(S)}));console.log("fillltr",m),a(m)}catch(g){console.error(g)}})()},[t]);const[l,s]=b.useState({}),u=p=>{s(g=>({...g,[p]:!g[p]}))},c=(p,g)=>{r(y=>{const w=y[p]||[];return w.includes(g)?{...y,[p]:w.filter(f=>f!==g)}:{...y,[p]:[...w,g]}})},d=Object.values(n).some(p=>Array.isArray(p)&&p.length>0),h=()=>{d&&r({})};return console.log(d),v.jsxs(oj,{children:[v.jsxs(aj,{children:["Фільтри ",v.jsx(_b,{size:20})]}),(o||[]).map(p=>{var y;const g=!!l[p.name];return v.jsxs(sj,{children:[v.jsxs(lj,{onClick:()=>u(p.name),children:[v.jsx(uj,{children:p.label}),v.jsx(cj,{isOpen:g})]}),v.jsxs(dj,{isOpen:g,children:[p.type==="checkbox"&&((y=p.options)==null?void 0:y.map(w=>{var f;return v.jsxs(fj,{children:[v.jsx(vp,{checked:((f=n[p.name])==null?void 0:f.includes(w))||!1,onChange:()=>c(p.name,w)}),v.jsx(pj,{}),w]},w)})),p.type==="range"&&v.jsx(IS,{onChange:i,childValues:e})]})]},p.name)}),v.jsx(MS,{onClick:h,disabled:!d,children:"Скинути обрані фільтри"})]})},kj=T.aside`
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
`;const Tj=T.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,Pj=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,Oj=T.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,Mj=T.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,Ij=T.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,$j=T.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,xp=T.input.attrs({type:"checkbox"})`
  display: none;
`,jj=T.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${xp}:checked + & {
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

  ${xp}:checked + &::after {
    opacity: 1;
  }
`,Dj=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState({}),[l,s]=b.useState([]);b.useEffect(()=>{t&&(async()=>{var h;try{const y=((h=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/categories?filters[id_title][$eq]=${t}&populate=filters`)).json()).data[0])==null?void 0:h.filters)||[];s(y)}catch(p){console.error(p)}})()},[t]);const u=d=>{a(h=>({...h,[d]:!h[d]}))},c=(d,h)=>{r(p=>{const g=p[d]||[];return g.includes(h)?{...p,[d]:g.filter(y=>y!==h)}:{...p,[d]:[...g,h]}})};return v.jsx(kj,{children:(l||[]).map(d=>{var p;const h=!!o[d.name];return v.jsxs(Tj,{children:[v.jsxs(Pj,{onClick:()=>u(d.name),children:[v.jsx(Oj,{children:d.label}),v.jsx(Mj,{isOpen:h})]}),v.jsxs(Ij,{isOpen:h,children:[d.type==="checkbox"&&((p=d.options)==null?void 0:p.map(g=>{var y;return v.jsxs($j,{children:[v.jsx(xp,{checked:((y=n[d.name])==null?void 0:y.includes(g))||!1,onChange:()=>c(d.name,g)}),v.jsx(jj,{}),g]},g)})),d.type==="range"&&v.jsx(IS,{onChange:i,childValues:e})]})]},d.name)})})},Lj=T.div`
`,Rj=T.div`
width: 100vw;

  @media screen and (min-width: 768px) {
  width: 70vw;
  }
      
`;T.div``;const Aj=T.div`
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
`,Fj=T.div`
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
`,Nj=T.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;
`,zj=T.div`
  padding: 16px;
`,Bj=T.p`
font-family: var(--second-font);
font-weight: 500;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 8px;
`,Vj=T.p`
     font-size: 17px;
    font-weight: 800;

`,Uj=T.div.attrs({className:"card-buttons"})`
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
`,yv=T.button`
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
`;const Hj=T.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,xd=T.button`
  padding: 6px 12px;
  border: 1px solid #ccc;
  background-color: ${e=>e.active?"#ff7a00":"#fff"};
  color: ${e=>e.active?"#fff":"#000"};
  font-weight: ${e=>e.active?"bold":"normal"};
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    background-color: #ff9c3b;
    color: #fff;
  }
`,$S=bS({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]}}}),{toggleFavorite:Ba,clearFavorite:Wj}=$S.actions,Gj=$S.reducer,Yj=({setValues:e,category:t,selectedFilters:n={},priceRange:r})=>{const[i,o]=b.useState([]),[a,l]=b.useState(!0);console.log("товари всі",i);const[s,u]=b.useState(1),c=24;let d=i;b.useEffect(()=>{(async()=>{try{l(!0);const _=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][id_title][$eq]=${encodeURIComponent(t)}`)).json();o(_.data);const C=_.data.map(O=>O.price);if(C.length>0){let O=Math.min(...C),M=Math.max(...C);e([O,M])}}catch(k){console.error("Error fetching products:",k)}finally{l(!1)}})()},[t,e]),b.useEffect(()=>{u(1)},[t,n,r]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[s]);const h=Qi(),p=ni(),g=_n(E=>E.favorites.items),y=(E,k)=>{k.stopPropagation(),p(Fa({...E,quantity:1})),ee.success(`${E.name} додано в кошик!`)},w=(E,k)=>{k.stopPropagation();const _=g.some(C=>C.id===E.id);p(Ba(E)),_?ee.warning(`${E.name} видалено з обраного`):ee.info(`${E.name} додано в обране`)};if(Object.keys(n).forEach(E=>{const k=n[E];Array.isArray(k)&&k.length>0&&(d=d.filter(_=>{var O;const C=(O=_.attributes)==null?void 0:O.find(M=>M.label.toLowerCase()===E.toLowerCase());return C&&k.includes(C.value)}))}),r&&r.length===2){const[E,k]=r;console.log(E,k)}const f=s*c,m=f-c,x=d.slice(m,f),S=Math.ceil(d.length/c);return a?v.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:v.jsx(Ru,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):(console.log(x),console.log("filteredProducts.length:",d.length),console.log("currentProducts.length:",x.length),v.jsxs(Lj,{children:[v.jsx(oo,{autoClose:1500}),d.length===0?v.jsx(Rj,{children:v.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):v.jsx(Aj,{children:x.map(E=>{const k=g.some(_=>_.id===E.id);return v.jsxs(Fj,{onClick:()=>h(`/product/${E.id}`),style:{cursor:"pointer"},children:[v.jsx(Nj,{src:E.images[0].url,alt:E.name,onError:_=>{_.currentTarget.onerror=null,_.currentTarget.src=_a}}),v.jsxs(zj,{children:[v.jsx(Bj,{children:E.name}),v.jsxs(Vj,{children:[E.price," грн"]})]}),v.jsxs(Uj,{children:[v.jsx(yv,{onClick:_=>y(E,_),children:v.jsx(ja,{size:24,color:"black"})}),v.jsx(yv,{onClick:_=>w(E,_),children:v.jsx(Vh,{size:24,fill:k?"#ff4d4f":"none",color:k?"#ff4d4f":"#000000"})})]})]},E.id)})}),d.length>c&&v.jsxs(Hj,{children:[v.jsx(xd,{onClick:()=>u(E=>Math.max(E-1,1)),disabled:s===1,children:"Назад"}),Array.from({length:S},(E,k)=>v.jsx(xd,{onClick:()=>u(k+1),active:s===k+1,children:k+1},k)),v.jsx(xd,{onClick:()=>u(E=>Math.min(E+1,S)),disabled:s===S,children:"Вперед"})]})]}))},qj=()=>{const[e,t]=b.useState({});console.log(e);const{category:n}=z1(),[r,i]=b.useState(!1),[o,a]=b.useState([]),[l,s]=b.useState([0,0]);console.log(o),console.log(n);const u=Object.values(e).some(d=>Array.isArray(d)&&d.length>0),c=()=>{u&&t({})};return v.jsxs(q$,{children:[v.jsxs(Y$,{children:[v.jsxs(X$,{children:[v.jsxs(K$,{onClick:()=>i(!0),children:["Фільтр",v.jsx(Z$,{children:v.jsx("use",{href:`${cn}#icon-filter`})})]}),v.jsxs(Q$,{onClick:()=>i(!0),children:["Сортування",v.jsx(J$,{children:v.jsx("use",{href:`${cn}#icon-sort`})})]})]}),v.jsx(Cj,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:o,priceRange:l,setPriceRange:s}),v.jsx(Yj,{priceRange:l,values:o,setValues:a,category:n,selectedFilters:e}),r&&v.jsx(ej,{onClick:()=>i(!1),open:r,children:v.jsxs(tj,{onClick:d=>d.stopPropagation(),open:r,children:[v.jsxs(nj,{children:[v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[v.jsx(_b,{size:20}),v.jsx("h2",{children:"Фільтри"})]}),v.jsx(Cb,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),v.jsx(Dj,{childValues:o,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:l,setPriceRange:s}),v.jsxs(rj,{children:[v.jsx(MS,{onClick:c,disabled:!u,children:"Скинути обрані фільтри"}),v.jsx(ij,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},xv=T.div`
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
`,Xj=T.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,Kj=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Zj=T.div``;T.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const Qj=T.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,Jj=T.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,eD=T.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,tD=T.div``,nD=T.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,rD=T.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,iD=T.span`
  color: #27ae60;
  font-size: 17px;
`,oD=T.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,aD=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,sD=T.span`
  font-size: 32px;
  font-weight: 700;
`;T.span`
  text-decoration: line-through;
  color: #999;
  font-size: 18px;
`;const lD=T.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,uD=T.div`
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
`,cD=T.button`
  flex-grow: 1;
  background: var(--orange-color);
  color: white;
  border: none;
  padding-left: 15px;
    padding-right: 15px;
  border-radius: 50px;
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
`;const dD=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
`,fD=T.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 6px;

  span {
    color: #777;
  }

  b {
    color: #222;
  }
`,pD=T.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`,hD=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,mD=T.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,bv=T.button`
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
`,gD=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,vD=T.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,yD=T.button`
  background: ${({$active:e})=>e?"var(--red-color)":"transparent"};
  font-weight: 500;
  color: ${({$active:e})=>e?"white":"black"};

  border: 1px solid #ddd;
  border-radius: 50px;
 padding-left: 15px;
    padding-right: 15px;
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
`,xD=T.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,jS="carousel",DS="controller",bD="navigation",wD="no-scroll",pm="portal",SD="root",LS="toolbar",wv="zoom",bd="loading",wd="error",Sd="complete",_D="placeholder",ED=e=>`active-slide-${e}`,CD="fullsize",hm="flex_center",kD="no_scroll",RS="no_scroll_padding",mm="slide",AS="slide_wrapper",TD="slide_wrapper_interactive",Lr="prev",Rr="next",Sv="swipe",Gi="close",FS="onPointerDown",NS="onPointerMove",zS="onPointerUp",BS="onPointerLeave",VS="onPointerCancel",gm="onKeyDown",PD="onKeyUp",vm="onWheel",OD="Escape",MD="ArrowLeft",ID="ArrowRight",$D="button",bp="icon",US="contain",_v="cover",HS="Unknown action type",WS="yarl__";function kn(...e){return e.filter(Boolean).join(" ")}function ae(e){return`${WS}${e}`}function xt(e){return`--${WS}${e}`}function Va(e,t){return`${e}${t?`_${t}`:""}`}function ym(e){return t=>Va(e,t)}function Yi(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function jD(e,t,n){return Yi(e,"{index} of {total}").replace(/\{index}/g,`${_m(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function xm(...e){return()=>{e.forEach(t=>{t()})}}function Zn(e,t,n){return()=>{const r=b.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function bm(){return typeof window<"u"}function wm(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function so(e){return e.type===void 0||e.type==="image"}function Sm(e,t){return e.imageFit===_v||e.imageFit!==US&&t===_v}function sc(e){return typeof e=="string"?Number.parseInt(e,10):e}function Wl(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=sc(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function DD(e,t){const n=Wl(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function LD(){return(bm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function _m(e,t){return t>0?(e%t+t)%t:0}function GS(e){return e.length>0}function YS(e,t){return e[_m(t,e.length)]}function wp(e,t){return GS(e)?YS(e,t):void 0}function RD(e){return so(e)?e.src:void 0}function AD(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=b.isValidElement(n)?b.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function FD(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const ND=Number(b.version.split(".")[0])>=19;function zD(e){return{inert:ND?e:e?"":void 0}}function BD(e){e.scrollTop}const Sp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[Gi]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:US,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Tr(e,t){return{name:e,component:t}}function Ue(e,t){return{module:e,children:t}}function qS(e,t,n){return e.module.name===t?n(e):e.children?[Ue(e.module,e.children.flatMap(r=>{var i;return(i=qS(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function li(e,t,n){return e.flatMap(r=>{var i;return(i=qS(r,t,n))!==null&&i!==void 0?i:[]})}function VD(e,t=[],n=[]){let r=e;const i=p=>{const g=[...r];for(;g.length>0;){const y=g.pop();if((y==null?void 0:y.module.name)===p)return!0;y!=null&&y.children&&g.push(...y.children)}return!1},o=(p,g)=>{if(p===""){r=[Ue(g,r)];return}r=li(r,p,y=>[Ue(g,[y])])},a=(p,g)=>{r=li(r,p,y=>[Ue(y.module,[Ue(g,y.children)])])},l=(p,g,y)=>{r=li(r,p,w=>{var f;return[Ue(w.module,[...y?[Ue(g)]:[],...(f=w.children)!==null&&f!==void 0?f:[],...y?[]:[Ue(g)]])]})},s=(p,g,y)=>{r=li(r,p,w=>[...y?[Ue(g)]:[],w,...y?[]:[Ue(g)]])},u=p=>{a(DS,p)},c=(p,g)=>{r=li(r,p,y=>[Ue(g,y.children)])},d=p=>{r=li(r,p,g=>g.children)},h=p=>{n.push(p)};return t.forEach(p=>{p({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:u,replace:c,remove:d,augment:h})}),{config:r,augmentation:p=>n.reduce((g,y)=>y(g),p)}}const XS=b.createContext(null),KS=Zn("useA11yContext","A11yContext",XS);function UD({children:e}){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const u=c=>d=>{var h;d.currentTarget.contains(d.relatedTarget)||n(c),(h=c?l:s)===null||h===void 0||h(d)};return{onFocus:u(!0),onBlur:u(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return b.createElement(XS.Provider,{value:o},e)}const ZS=b.createContext(null),lc=Zn("useDocument","DocumentContext",ZS);function HD({nodeRef:e,children:t}){const n=b.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return b.createElement(ZS.Provider,{value:n},t)}const QS=b.createContext(null),uc=Zn("useEvents","EventsContext",QS);function WD({children:e}){const[t]=b.useState({});b.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=b.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(u=>u!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(u=>u(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return b.createElement(QS.Provider,{value:n},e)}const JS=b.createContext(null),qt=Zn("useLightboxProps","LightboxPropsContext",JS);function GD({children:e,...t}){return b.createElement(JS.Provider,{value:t},e)}const e2=b.createContext(null),Pr=Zn("useLightboxState","LightboxStateContext",e2),t2=b.createContext(null),YD=Zn("useLightboxDispatch","LightboxDispatchContext",t2);function qD(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=_m(i,n.length),a=wp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:wp(t.slides,t.index)}:e;default:throw new Error(HS)}}function XD({slides:e,index:t,children:n}){const[r,i]=b.useReducer(qD,{slides:e,currentIndex:t,globalIndex:t,currentSlide:wp(e,t)}),[o,a]=b.useState(e),[l,s]=b.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const u=b.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return b.createElement(t2.Provider,{value:i},b.createElement(e2.Provider,{value:u},n))}const n2=b.createContext(null),cc=Zn("useTimeouts","TimeoutsContext",n2);function KD({children:e}){const[t]=b.useState([]);b.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=b.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return b.createElement(n2.Provider,{value:n},e)}const Em=b.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:u,labels:c}=qt(),d=Yi(c,t);return b.createElement("button",{ref:s,type:"button",title:d,"aria-label":d,className:kn(ae($D),n),onClick:o,style:{...a,...u.button},...l},i?i():b.createElement(r,{className:ae(bp),style:u.icon}))});function ZD(e,t){const n=r=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function ri(e,t){return ZD(e,b.createElement("g",{fill:"currentColor"},b.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const QD=ri("Close",b.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),JD=ri("Previous",b.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),eL=ri("Next",b.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),tL=ri("Loading",b.createElement(b.Fragment,null,Array.from({length:8}).map((e,t,n)=>b.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),nL=ri("Error",b.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Tn=bm()?b.useLayoutEffect:b.useEffect;function Cm(){const[e,t]=b.useState(!1);return b.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function rL(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(sc);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function Ev(e,t){const n=b.useRef(void 0),r=b.useRef(void 0),i=Cm();return Tn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:u,easing:c,onfinish:d}=t(n.current,e.current.getBoundingClientRect(),rL(e.current))||{};if(s&&u){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:u,easing:c})}catch(h){console.error(h)}r.current&&(r.current.onfinish=()=>{r.current=void 0,d==null||d()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function r2(){const e=b.useRef(null),t=b.useRef(void 0),[n,r]=b.useState();return{setContainerRef:b.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=u=>parseFloat(u)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function Ks(){const e=b.useRef(void 0),{setTimeout:t,clearTimeout:n}=cc();return b.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function pe(e){const t=b.useRef(e);return Tn(()=>{t.current=e}),b.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Cv(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function _p(e,t){return b.useMemo(()=>e==null&&t==null?null:n=>{Cv(e,n),Cv(t,n)},[e,t])}function iL(e,t=!1){const n=b.useRef(!1);Tn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=b.useCallback(()=>{n.current=!0},[]),i=b.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function km(){const[e,t]=b.useState(!1);return Tn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function oL(){const[e]=b.useState({}),t=b.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=b.useMemo(()=>({onPointerDown:i=>t(FS,i),onPointerMove:i=>t(NS,i),onPointerUp:i=>t(zS,i),onPointerLeave:i=>t(BS,i),onPointerCancel:i=>t(VS,i),onKeyDown:i=>t(gm,i),onKeyUp:i=>t(PD,i),onWheel:i=>t(vm,i)}),[t]),r=b.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function kv(e,t){const n=b.useRef(0),r=Ks(),i=pe((...o)=>{n.current=Date.now(),e(o)});return b.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const _d=ym("slide"),Ed=ym("slide_image");function Gl({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:u}){var c,d,h,p,g,y,w,f;const[m,x]=b.useState(bd),{publish:S}=uc(),{setTimeout:E}=cc(),k=b.useRef(null);b.useEffect(()=>{t===0&&S(ED(m))},[t,m,S]);const _=pe(z=>{("decode"in z?z.decode():Promise.resolve()).catch(()=>{}).then(()=>{z.parentNode&&(x(Sd),E(()=>{l==null||l(z)},0))})}),C=b.useCallback(z=>{k.current=z,z!=null&&z.complete&&_(z)},[_]),O=b.useCallback(z=>{_(z.currentTarget)},[_]),M=pe(()=>{x(wd),s==null||s()}),$=Sm(e,i),I=(z,U)=>Number.isFinite(z)?z:U,L=I(Math.max(...((d=(c=e.srcSet)===null||c===void 0?void 0:c.map(z=>z.width))!==null&&d!==void 0?d:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((h=k.current)===null||h===void 0?void 0:h.naturalWidth)||0),R=I(Math.max(...((g=(p=e.srcSet)===null||p===void 0?void 0:p.map(z=>z.height))!==null&&g!==void 0?g:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((y=k.current)===null||y===void 0?void 0:y.naturalHeight)||0),D=L&&R?{maxWidth:`min(${L}px, 100%)`,maxHeight:`min(${R}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},F=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((z,U)=>z.width-U.width).map(z=>`${z.src} ${z.width}w`).join(", "),A=()=>r&&!$&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,P=F&&r&&bm()?`${Math.round(Math.min(A(),r.width))}px`:void 0,{style:j,className:N,...B}=(typeof o=="function"?o(e):o)||{};return b.createElement(b.Fragment,null,b.createElement("img",{ref:C,onLoad:O,onError:M,onClick:a,draggable:!1,className:kn(ae(Ed()),$&&ae(Ed("cover")),m!==Sd&&ae(Ed("loading")),N),style:{...D,...u,...j},...B,alt:(f=e.alt)!==null&&f!==void 0?f:"",sizes:P,srcSet:F,src:e.src}),m!==Sd&&b.createElement("div",{className:ae(_d(_D))},m===bd&&(n!=null&&n.iconLoading?n.iconLoading():b.createElement(tL,{className:kn(ae(bp),ae(_d(bd)))})),m===wd&&(n!=null&&n.iconError?n.iconError():b.createElement(nL,{className:kn(ae(bp),ae(_d(wd)))}))))}const aL=b.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=b.useRef(null),{trackFocusWithin:s}=KS();return b.createElement(HD,{nodeRef:l},b.createElement("div",{ref:_p(a,l),className:kn(ae("root"),t),...s(r,i),...o},n))});var rt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(rt||(rt={}));function i2(e,t,n,r,i){b.useEffect(()=>i?()=>{}:xm(e(FS,t),e(NS,n),e(zS,r),e(BS,r),e(VS,r)),[e,t,n,r,i])}var Qt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(Qt||(Qt={}));const Cd=30;function sL({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,u,c,d,h,p,g,y,w){const f=b.useRef(0),m=b.useRef([]),x=b.useRef(void 0),S=b.useRef(0),E=b.useRef(Qt.NONE),k=b.useCallback(L=>{x.current===L.pointerId&&(x.current=void 0,E.current=Qt.NONE);const R=m.current;R.splice(0,R.length,...R.filter(D=>D.pointerId!==L.pointerId))},[]),_=b.useCallback(L=>{k(L),L.persist(),m.current.push(L)},[k]),C=b.useCallback(L=>m.current.find(({pointerId:R})=>L.pointerId===R),[]),O=pe(L=>{_(L)}),M=(L,R)=>d&&L>R||c&&L<-R,$=pe(L=>{const R=C(L);if(R)if(x.current===L.pointerId){const D=Date.now()-S.current,F=f.current;E.current===Qt.SWIPE?Math.abs(F)>.3*i||Math.abs(F)>5&&D<o?s(F,D):u(F):E.current===Qt.PULL&&(M(F,2*Cd)?g(F,D):y(F)),f.current=0,E.current=Qt.NONE}else{const{target:D}=L;t&&D instanceof HTMLElement&&D===R.target&&(D.classList.contains(ae(mm))||D.classList.contains(ae(AS)))&&w()}k(L)}),I=pe(L=>{const R=C(L);if(R){const D=x.current===L.pointerId;if(L.buttons===0){D&&f.current!==0?$(L):k(R);return}const F=L.clientX-R.clientX,A=L.clientY-R.clientY;if(x.current===void 0){const P=j=>{_(L),x.current=L.pointerId,S.current=Date.now(),E.current=j};Math.abs(F)>Math.abs(A)&&Math.abs(F)>Cd&&r(F)?e||(P(Qt.SWIPE),a()):Math.abs(A)>Math.abs(F)&&M(A,Cd)&&(P(Qt.PULL),h())}else D&&(E.current===Qt.SWIPE?(f.current=F,l(F)):E.current===Qt.PULL&&(f.current=A,p(A)))}});i2(n,O,I,$)}function lL({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=b.useRef(null),r=pe(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return b.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function uL(e,t,n,r,i,o,a,l,s){const u=b.useRef(0),c=b.useRef(0),d=b.useRef(void 0),h=b.useRef(void 0),p=b.useRef(0),g=b.useRef(void 0),y=b.useRef(0),{setTimeout:w,clearTimeout:f}=cc(),m=b.useCallback(()=>{d.current&&(f(d.current),d.current=void 0)},[f]),x=b.useCallback(()=>{h.current&&(f(h.current),h.current=void 0)},[f]),S=pe(()=>{e!==rt.SWIPE&&(u.current=0,y.current=0,m(),x())});b.useEffect(S,[e,S]);const E=pe(_=>{h.current=void 0,u.current===_&&s(u.current)}),k=pe(_=>{if(_.ctrlKey||Math.abs(_.deltaY)>Math.abs(_.deltaX))return;const C=O=>{p.current=O,f(g.current),g.current=O>0?w(()=>{p.current=0,g.current=void 0},300):void 0};if(e===rt.NONE){if(Math.abs(_.deltaX)<=1.2*Math.abs(p.current)){C(_.deltaX);return}if(!n(-_.deltaX))return;if(c.current+=_.deltaX,m(),Math.abs(c.current)>30)c.current=0,C(0),y.current=Date.now(),o();else{const O=c.current;d.current=w(()=>{d.current=void 0,O===c.current&&(c.current=0)},i)}}else if(e===rt.SWIPE){let O=u.current-_.deltaX;if(O=Math.min(Math.abs(O),r)*Math.sign(O),u.current=O,a(O),x(),Math.abs(O)>.2*r){C(_.deltaX),l(O,Date.now()-y.current);return}h.current=w(()=>E(O),2*i)}else C(_.deltaX)});b.useEffect(()=>t(vm,k),[t,k])}const Tv=ym("container"),o2=b.createContext(null),Qn=Zn("useController","ControllerContext",o2);function cL({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:u,closeOnPullDown:c,preventDefaultWheelX:d,preventDefaultWheelY:h}=o,[p,g]=b.useState(),y=Pr(),w=YD(),[f,m]=b.useState(rt.NONE),x=b.useRef(0),S=b.useRef(0),E=b.useRef(1),{registerSensors:k,subscribeSensors:_}=oL(),{subscribe:C,publish:O}=uc(),M=Ks(),$=Ks(),I=Ks(),{containerRef:L,setContainerRef:R,containerRect:D}=r2(),F=_p(lL({preventDefaultWheelX:d,preventDefaultWheelY:h}),R),A=b.useRef(null),P=_p(A,void 0),{getOwnerDocument:j}=lc(),N=km(),B=G=>(N?-1:1)*(typeof G=="number"?G:1),z=pe(()=>{var G;return(G=L.current)===null||G===void 0?void 0:G.focus()}),U=pe(()=>t),H=pe(()=>y),Y=b.useCallback(G=>O(Lr,G),[O]),q=b.useCallback(G=>O(Rr,G),[O]),J=b.useCallback(()=>O(Gi),[O]),fe=G=>!(r.finite&&(B(G)>0&&y.currentIndex===0||B(G)<0&&y.currentIndex===y.slides.length-1)),be=G=>{var we;x.current=G,(we=L.current)===null||we===void 0||we.style.setProperty(xt("swipe_offset"),`${Math.round(G)}px`)},ie=G=>{var we,st;S.current=G,E.current=(()=>{const co=(()=>c&&G>0?G:u&&G<0?-G:0)();return Math.min(Math.max(wm(1-co/60*(1-.5),2),.5),1)})(),(we=L.current)===null||we===void 0||we.style.setProperty(xt("pull_offset"),`${Math.round(G)}px`),(st=L.current)===null||st===void 0||st.style.setProperty(xt("pull_opacity"),`${E.current}`)},{prepareAnimation:Ie}=Ev(A,(G,we,st)=>{if(A.current&&D)return{keyframes:[{transform:`translate(0, ${G.rect.y-we.y+st.y}px)`,opacity:G.opacity},{transform:"translate(0, 0)",opacity:1}],duration:G.duration,easing:i.easing.fade}}),Be=(G,we)=>{if(u||c){ie(G);let st=0;A.current&&(st=i.fade*(we?2:1),Ie({rect:A.current.getBoundingClientRect(),opacity:E.current,duration:st})),I(()=>{ie(0),m(rt.NONE)},st),m(rt.ANIMATION),we||J()}},{prepareAnimation:Ve,isAnimationPlaying:ii}=Ev(A,(G,we,st)=>{var fn;if(A.current&&D&&(!((fn=y.animation)===null||fn===void 0)&&fn.duration)){const zt=Wl(r.spacing),co=(zt.percent?zt.percent*D.width/100:zt.pixel)||0;return{keyframes:[{transform:`translate(${B(y.globalIndex-G.index)*(D.width+co)+G.rect.x-we.x+st.x}px, 0)`},{transform:"translate(0, 0)"}],duration:y.animation.duration,easing:y.animation.easing}}}),vt=pe(G=>{var we,st;const fn=G.offset||0,zt=fn?i.swipe:(we=i.navigation)!==null&&we!==void 0?we:i.swipe,co=!fn&&!ii()?i.easing.navigation:i.easing.swipe;let{direction:Ha}=G;const Wa=(st=G.count)!==null&&st!==void 0?st:1;let mc=rt.ANIMATION,pn=zt*Wa;if(!Ha){const fo=D==null?void 0:D.width,zm=G.duration||0,vc=fo?zt/fo*Math.abs(fn):zt;Wa!==0?(zm<vc?pn=pn/vc*Math.max(zm,vc/5):fo&&(pn=zt/fo*(fo-Math.abs(fn))),Ha=B(fn)>0?Lr:Rr):pn=zt/2}let gc=0;Ha===Lr?fe(B(1))?gc=-Wa:(mc=rt.NONE,pn=zt):Ha===Rr&&(fe(B(-1))?gc=Wa:(mc=rt.NONE,pn=zt)),pn=Math.round(pn),$(()=>{be(0),m(rt.NONE)},pn),A.current&&Ve({rect:A.current.getBoundingClientRect(),index:y.globalIndex}),m(mc),O(Sv,{type:"swipe",increment:gc,duration:pn,easing:co})});b.useEffect(()=>{var G,we;!((G=y.animation)===null||G===void 0)&&G.increment&&(!((we=y.animation)===null||we===void 0)&&we.duration)&&M(()=>w({type:"swipe",increment:0}),y.animation.duration)},[y.animation,w,M]);const lo=[_,fe,(D==null?void 0:D.width)||0,i.swipe,()=>m(rt.SWIPE),G=>be(G),(G,we)=>vt({offset:G,duration:we,count:1}),G=>vt({offset:G,count:0})],Ua=[()=>{c&&m(rt.PULL)},G=>ie(G),G=>Be(G),G=>Be(G,!0)];sL(o,...lo,u,c,...Ua,J),uL(f,...lo);const uo=pe(()=>{o.focus&&j().querySelector(`.${ae(pm)} .${ae(Tv())}`)&&z()});b.useEffect(uo,[uo]);const Nm=pe(()=>{var G;(G=a.view)===null||G===void 0||G.call(a,{index:y.currentIndex})});b.useEffect(Nm,[y.globalIndex,Nm]),b.useEffect(()=>xm(C(Lr,G=>vt({direction:Lr,...G})),C(Rr,G=>vt({direction:Rr,...G})),C(Sv,G=>w(G))),[C,vt,w]);const Q2=b.useMemo(()=>({prev:Y,next:q,close:J,focus:z,slideRect:D?DD(D,r.padding):{width:0,height:0},containerRect:D||{width:0,height:0},subscribeSensors:_,containerRef:L,setCarouselRef:P,toolbarWidth:p,setToolbarWidth:g}),[Y,q,J,z,_,D,L,P,p,g,r.padding]);return b.useImperativeHandle(o.ref,()=>({prev:Y,next:q,close:J,focus:z,getLightboxProps:U,getLightboxState:H}),[Y,q,J,z,U,H]),b.createElement("div",{ref:F,className:kn(ae(Tv()),ae(hm)),style:{...f===rt.SWIPE?{[xt("swipe_offset")]:`${Math.round(x.current)}px`}:null,...f===rt.PULL?{[xt("pull_offset")]:`${Math.round(S.current)}px`,[xt("pull_opacity")]:`${E.current}`}:null,...o.touchAction!=="none"?{[xt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...k},D&&b.createElement(o2.Provider,{value:Q2},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const dL=Tr(DS,cL);function Or(e){return Va(jS,e)}function Pv(e){return Va(mm,e)}function fL({slide:e,offset:t}){const n=b.useRef(null),{currentIndex:r,slides:i}=Pr(),{slideRect:o,focus:a}=Qn(),{render:l,carousel:{imageFit:s,imageProps:u},on:{click:c},styles:{slide:d},labels:h}=qt(),{getOwnerDocument:p}=lc(),g=t!==0;b.useEffect(()=>{var w;g&&(!((w=n.current)===null||w===void 0)&&w.contains(p().activeElement))&&a()},[g,a,p]);const y=()=>{var w,f,m,x;let S=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!S&&so(e)&&(S=b.createElement(Gl,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:u,onClick:g?void 0:()=>c==null?void 0:c({index:r})})),S?b.createElement(b.Fragment,null,(f=l.slideHeader)===null||f===void 0?void 0:f.call(l,{slide:e}),((m=l.slideContainer)!==null&&m!==void 0?m:({children:E})=>E)({slide:e,children:S}),(x=l.slideFooter)===null||x===void 0?void 0:x.call(l,{slide:e})):null};return b.createElement("div",{ref:n,className:kn(ae(Pv()),!g&&ae(Pv("current")),ae(hm)),...zD(g),style:d,role:"group","aria-roledescription":Yi(h,"Slide"),"aria-label":jD(h,i,r+t)},y())}function pL(){const e=qt().styles.slide;return b.createElement("div",{className:ae(mm),style:e})}function hL({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Pr(),{setCarouselRef:o}=Qn(),{autoPlaying:a,focusWithin:l}=KS(),s=Wl(e.spacing),u=Wl(e.padding),c=FD(e,n,1),d=[];if(GS(n))for(let h=r-c;h<=r+c;h+=1){const p=YS(n,h),g=i-r+h,y=e.finite&&(h<0||h>n.length-1);d.push(y?{key:g}:{key:[`${g}`,RD(p)].filter(Boolean).join("|"),offset:h-r,slide:p})}return b.createElement("div",{ref:o,className:kn(ae(Or()),d.length>0&&ae(Or("with_slides"))),style:{[`${xt(Or("slides_count"))}`]:d.length,[`${xt(Or("spacing_px"))}`]:s.pixel||0,[`${xt(Or("spacing_percent"))}`]:s.percent||0,[`${xt(Or("padding_px"))}`]:u.pixel||0,[`${xt(Or("padding_percent"))}`]:u.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":Yi(t,"Carousel"),"aria-label":Yi(t,"Photo gallery")},d.map(({key:h,slide:p,offset:g})=>p?b.createElement(fL,{key:h,slide:p,offset:g}):b.createElement(pL,{key:h})))}const mL=Tr(jS,hL);function a2(){const{carousel:e}=qt(),{slides:t,currentIndex:n}=Pr(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function gL(e){var t;const n=km(),{publish:r}=uc(),{animation:i}=qt(),{prevDisabled:o,nextDisabled:a}=a2(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=kv(()=>r(Lr),l),u=kv(()=>r(Rr),l),c=pe(d=>{switch(d.key){case OD:r(Gi);break;case MD:(n?a:o)||(n?u:s)();break;case ID:(n?o:a)||(n?s:u)();break}});b.useEffect(()=>e(gm,c),[e,c])}function Ov({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return b.createElement(Em,{label:e,icon:t,renderIcon:n,className:ae(`navigation_${r}`),disabled:o,onClick:i,style:a,...iL(Qn().focus,o)})}function vL({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=Qn(),{prevDisabled:s,nextDisabled:u}=a2();return gL(l),b.createElement(b.Fragment,null,e?e():b.createElement(Ov,{label:"Previous",action:Lr,icon:JD,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():b.createElement(Ov,{label:"Next",action:Rr,icon:eL,renderIcon:r,style:i.navigationNext,disabled:u,onClick:a}))}const yL=Tr(bD,vL),Mv=ae(kD),xL=ae(RS);function bL(e){return"style"in e}function Iv(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(sc(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function wL({noScroll:{disabled:e},children:t}){const n=km(),{getOwnerDocument:r,getOwnerWindow:i}=lc();return b.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),u=Math.round(a.innerWidth-s.clientWidth);if(u>0){o.push(Iv(l,u,n));const c=l.getElementsByTagName("*");for(let d=0;d<c.length;d+=1){const h=c[d];bL(h)&&a.getComputedStyle(h).getPropertyValue("position")==="fixed"&&!h.classList.contains(xL)&&o.push(Iv(h,u,n))}}return l.classList.add(Mv),()=>{l.classList.remove(Mv),o.forEach(c=>c())}},[n,e,r,i]),b.createElement(b.Fragment,null,t)}const SL=Tr(wD,wL);function $v(e){return Va(pm,e)}function jv(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function _L({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,u]=b.useState(!1),[c,d]=b.useState(!1),h=b.useRef([]),p=b.useRef(null),{setTimeout:g}=cc(),{subscribe:y}=uc(),f=Cm()?0:t.fade;b.useEffect(()=>(u(!0),()=>{u(!1),d(!1)}),[]);const m=pe(()=>{h.current.forEach(k=>k()),h.current=[]}),x=pe(()=>{var k;d(!1),m(),(k=i.exiting)===null||k===void 0||k.call(i),g(()=>{var _;(_=i.exited)===null||_===void 0||_.call(i),a()},f)});b.useEffect(()=>y(Gi,x),[y,x]);const S=pe(k=>{var _,C,O;BD(k),d(!0),(_=i.entering)===null||_===void 0||_.call(i);const M=(O=(C=k.parentNode)===null||C===void 0?void 0:C.children)!==null&&O!==void 0?O:[];for(let $=0;$<M.length;$+=1){const I=M[$];["TEMPLATE","SCRIPT","STYLE"].indexOf(I.tagName)===-1&&I!==k&&(h.current.push(jv(I,"inert","")),h.current.push(jv(I,"aria-hidden","true")))}h.current.push(()=>{var $,I;(I=($=p.current)===null||$===void 0?void 0:$.focus)===null||I===void 0||I.call($)}),g(()=>{var $;($=i.entered)===null||$===void 0||$.call(i)},f)}),E=b.useCallback(k=>{k?S(k):m()},[S,m]);return s?vu.createPortal(b.createElement(aL,{ref:E,className:kn(r,ae($v()),ae(RS),c&&ae($v("open"))),"aria-modal":!0,role:"dialog","aria-label":Yi(l,"Lightbox"),style:{...t.fade!==Sp.animation.fade?{[xt("fade_animation_duration")]:`${f}ms`}:null,...t.easing.fade!==Sp.animation.easing.fade?{[xt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:k=>{p.current||(p.current=k.relatedTarget)}},e),o.root||document.body):null}const EL=Tr(pm,_L);function CL({children:e}){return b.createElement(b.Fragment,null,e)}const kL=Tr(SD,CL);function TL(e){return Va(LS,e)}function PL({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=Qn(),{setContainerRef:a,containerRect:l}=r2();Tn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():b.createElement(Em,{key:Gi,label:"Close",icon:QD,renderIcon:n,onClick:i});return b.createElement("div",{ref:a,style:r.toolbar,className:ae(TL())},e==null?void 0:e.map(u=>u===Gi?s():u))}const OL=Tr(LS,PL);function s2(e,t){var n;return b.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>s2(r,t)))}function ML(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function IL({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:u,...c}){const{animation:d,carousel:h,render:p,toolbar:g,controller:y,noScroll:w,on:f,slides:m,index:x,plugins:S,...E}=Sp,{config:k,augmentation:_}=VD([Ue(EL,[Ue(SL,[Ue(dL,[Ue(mL),Ue(OL),Ue(yL)])])])],l||S),C=_({animation:ML(d,t),carousel:{...h,...e},render:{...p,...n},toolbar:{...g,...r},controller:{...y,...i},noScroll:{...w,...o},on:{...f,...a},...E,...c});return C.open?b.createElement(GD,{...C},b.createElement(XD,{slides:s||m,index:sc(u||x)},b.createElement(KD,null,b.createElement(WD,null,b.createElement(UD,null,s2(Ue(kL,k),C)))))):null}const $L={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function jL(e){return Math.min(Math.max(e,Number.EPSILON),1)}function l2(e){const{minZoom:t,...n}={...$L,...e};return{minZoom:jL(t),...n}}function DL(e,t,n,r){const i=b.useRef(void 0),o=b.useRef(void 0),{zoom:a}=qt().animation,l=Cm(),s=pe(()=>{var u,c,d;if((u=i.current)===null||u===void 0||u.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(d=(c=r.current).animate)===null||d===void 0?void 0:d.call(c,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(h){console.error(h)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Tn(s,[e,t,n,s]),b.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function LL(e,t){const{on:n}=qt(),r=pe(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});b.useEffect(r,[e,r])}function dc(){const{zoom:e}=qt();return l2(e)}function RL(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Pr(),{imageFit:l}=qt().carousel,{maxZoomPixelRatio:s}=dc();if(e&&a){const c={...a,...t};if(so(c)){const d=Sm(c,l),h=Math.max(...(((n=c.srcSet)===null||n===void 0?void 0:n.map(g=>g.width))||[]).concat(c.width?[c.width]:[])),p=Math.max(...(((r=c.srcSet)===null||r===void 0?void 0:r.map(g=>g.height))||[]).concat(c.height?[c.height]:[]));h>0&&p>0&&e.width>0&&e.height>0&&(o=d?{width:Math.round(Math.min(h,e.width/e.height*p)),height:Math.round(Math.min(p,e.height/e.width*h))}:{width:h,height:p},o={width:o.width*s,height:o.height*s},i=d?{width:Math.min(e.width,o.width,h),height:Math.min(e.height,o.height,p)}:{width:Math.round(Math.min(e.width,e.height/p*h,h)),height:Math.round(Math.min(e.height,e.width/h*p,p))})}}const u=i.width?Math.max(wm(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:u}}function Dv(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Lv(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function AL(e,t,n,r,i,o,a,l,s){const u=b.useRef([]),c=b.useRef(0),d=b.useRef(void 0),{globalIndex:h}=Pr(),{getOwnerWindow:p}=lc(),{containerRef:g,subscribeSensors:y}=Qn(),{keyboardMoveDistance:w,zoomInMultiplier:f,wheelZoomDistanceFactor:m,scrollToZoom:x,doubleTapDelay:S,doubleClickDelay:E,doubleClickMaxStops:k,pinchZoomDistanceFactor:_,pinchZoomV4:C}=dc(),O=b.useCallback(P=>{if(g.current){const{pageX:j,pageY:N}=P,{scrollX:B,scrollY:z}=p(),{left:U,top:H,width:Y,height:q}=g.current.getBoundingClientRect();return[j-U-B-Y/2,N-H-z-q/2]}return[]},[g,p]),M=pe(P=>{const{key:j,metaKey:N,ctrlKey:B}=P,z=N||B,U=()=>{P.preventDefault(),P.stopPropagation()};if(e>1){const H=(Y,q)=>{U(),l(Y,q)};j==="ArrowDown"?H(0,w):j==="ArrowUp"?H(0,-w):j==="ArrowLeft"?H(-w,0):j==="ArrowRight"&&H(w,0)}j==="+"||z&&j==="="?(U(),i()):j==="-"||z&&j==="_"?(U(),o()):z&&j==="0"&&(U(),a(1))}),$=pe(P=>{if((P.ctrlKey||x)&&Math.abs(P.deltaY)>Math.abs(P.deltaX)){P.stopPropagation(),a(Lv(e,-P.deltaY,m),!0,...O(P));return}e>1&&(P.stopPropagation(),x||l(P.deltaX,P.deltaY))}),I=b.useCallback(P=>{const j=u.current;j.splice(0,j.length,...j.filter(N=>N.pointerId!==P.pointerId))},[]),L=b.useCallback(P=>{I(P),P.persist(),u.current.push(P)},[I]),R=pe(P=>{var j;const N=u.current;if(P.pointerType==="mouse"&&P.buttons>1||!(!((j=s==null?void 0:s.current)===null||j===void 0)&&j.contains(P.target)))return;e>1&&P.stopPropagation();const{timeStamp:B}=P;if(N.length===0&&B-c.current<(P.pointerType==="touch"?S:E)){c.current=0;const z=e>=1?e!==n?e*Math.max(n**(1/k),f):1:e!==t?e/Math.max(t**(-1/k),f):1;a(z,!1,...O(P))}else c.current=B;if(L(P),N.length===2){const z=Dv(N[0],N[1]);d.current={previousDistance:z,initialDistance:Math.max(z,1),initialZoom:e}}}),D=pe(P=>{const j=u.current,N=j.find(B=>B.pointerId===P.pointerId);if(j.length===2&&d.current){P.stopPropagation(),L(P);const B=Dv(j[0],j[1]),z=C?d.current.initialZoom/d.current.initialDistance*B:Lv(e,B-d.current.previousDistance,_);a(z,!0,...j.map(U=>O(U)).reduce((U,H)=>H.map((Y,q)=>U[q]+Y/2))),d.current.previousDistance=B;return}e>1&&(P.stopPropagation(),N&&(j.length===1&&l((N.clientX-P.clientX)/e,(N.clientY-P.clientY)/e),L(P)))}),F=b.useCallback(P=>{const j=u.current;j.length===2&&j.find(N=>N.pointerId===P.pointerId)&&(d.current=void 0),I(P)},[I]),A=b.useCallback(()=>{const P=u.current;P.splice(0,P.length),c.current=0,d.current=void 0},[]);i2(y,R,D,F,r),b.useEffect(A,[h,A]),b.useEffect(()=>r?()=>{}:xm(A,y(gm,M),y(vm,$)),[r,y,A,M,$])}function FL(e,t,n){const[r,i]=b.useState(1),[o,a]=b.useState(0),[l,s]=b.useState(0),u=DL(r,o,l,n),{currentSlide:c,globalIndex:d}=Pr(),{containerRect:h,slideRect:p}=Qn(),{minZoom:g,zoomInMultiplier:y}=dc(),w=c&&so(c)?c.src:void 0,f=!w||!(n!=null&&n.current);Tn(()=>{i(1),a(0),s(0)},[d,w]);const m=b.useCallback((_,C,O)=>{const M=O||r,$=o-(_||0),I=l-(C||0),L=(e.width*M-p.width)/2/M,R=(e.height*M-p.height)/2/M;a(Math.min(Math.abs($),Math.max(L,0))*Math.sign($)),s(Math.min(Math.abs(I),Math.max(R,0))*Math.sign(I))},[r,o,l,p,e.width,e.height]),x=b.useCallback((_,C,O,M)=>{const $=wm(_+.01<t?_-.01>g?_:g:t,5);C||u(),m(O?O*(1/r-1/$):0,M?M*(1/r-1/$):0,$),i($)},[r,g,t,m,u]),S=pe(()=>{r>1&&(r>t&&x(t,!0),m())});Tn(S,[h.width,h.height,S]);const E=b.useCallback(()=>{const _=r*y;x(r<1&&_>1?1:_)},[r,y,x]),k=b.useCallback(()=>{const _=r/y;x(r>1&&_<1?1:_)},[r,y,x]);return{zoom:r,offsetX:o,offsetY:l,disabled:f,changeOffsets:m,changeZoom:x,zoomIn:E,zoomOut:k}}const u2=b.createContext(null),Tm=Zn("useZoom","ZoomControllerContext",u2);function NL({children:e}){const[t,n]=b.useState(),{slideRect:r}=Qn(),{ref:i,minZoom:o}=dc(),{imageRect:a,maxZoom:l}=RL(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:u,offsetY:c,disabled:d,changeZoom:h,changeOffsets:p,zoomIn:g,zoomOut:y}=FL(a,l,t==null?void 0:t.zoomWrapperRef);LL(s,d),AL(s,o,l,d,g,y,h,p,t==null?void 0:t.zoomWrapperRef);const w=b.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:u,offsetY:c,disabled:d,zoomIn:g,zoomOut:y,changeZoom:h}),[s,o,l,u,c,d,g,y,h]);b.useImperativeHandle(i,()=>w,[w]);const f=b.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return b.createElement(u2.Provider,{value:f},e)}const zL=ri("ZoomIn",b.createElement(b.Fragment,null,b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),BL=ri("ZoomOut",b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),Rv=b.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=b.useRef(!1),o=b.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:u,zoomOut:c,disabled:d}=Tm(),{render:h}=qt(),p=d||(t?a>=s:a<=l);return b.useEffect(()=>{p&&i.current&&o.current&&n(),p||(i.current=!0)},[p,n]),b.createElement(Em,{ref:r,disabled:p,label:t?"Zoom in":"Zoom out",icon:t?zL:BL,renderIcon:t?h.iconZoomIn:h.iconZoomOut,onClick:t?u:c,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function VL(){const e=b.useRef(null),t=b.useRef(null),{focus:n}=Qn(),r=b.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=b.useCallback(()=>r(e),[r]),o=b.useCallback(()=>r(t),[r]);return b.createElement(b.Fragment,null,b.createElement(Rv,{zoomIn:!0,ref:e,onLoseFocus:o}),b.createElement(Rv,{ref:t,onLoseFocus:i}))}function UL(){const{render:e}=qt(),t=Tm();return e.buttonZoom?b.createElement(b.Fragment,null,e.buttonZoom(t)):b.createElement(VL,null)}function HL(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function WL({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(HS)}}function GL(e){var t,n;const[{current:r,preload:i},o]=b.useReducer(WL,{}),{slide:a,rect:l,imageFit:s,render:u,interactive:c}=e,d=a.srcSet.sort((E,k)=>E.width-k.width),h=(t=a.width)!==null&&t!==void 0?t:d[d.length-1].width,p=(n=a.height)!==null&&n!==void 0?n:d[d.length-1].height,g=Sm(a,s),y=Math.max(...d.map(E=>E.width)),w=Math.min((g?Math.max:Math.min)(l.width,h*(l.height/p)),y),f=LD(),m=pe(()=>{var E;const k=(E=d.find(_=>_.width>=w*f))!==null&&E!==void 0?E:d[d.length-1];(!r||d.findIndex(_=>_.src===r)<d.findIndex(_=>_===k))&&o({type:"fetch",source:k.src})});Tn(m,[l.width,l.height,f,m]);const x=pe(E=>o({type:"done",source:E})),S={WebkitTransform:c?"initial":"translateZ(0)"};return g||Object.assign(S,l.width/l.height<h/p?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),b.createElement(b.Fragment,null,i&&i!==r&&b.createElement(Gl,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...S},onLoad:()=>x(i),render:{...u,iconLoading:()=>null,iconError:()=>null}}),r&&b.createElement(Gl,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:S}))}function YL({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=b.useState(),l=b.useRef(null),{zoom:s,maxZoom:u,offsetX:c,offsetY:d,setZoomWrapper:h}=Tm(),p=s>1,{carousel:g,on:y}=qt(),{currentIndex:w}=Pr();Tn(()=>n===0?(h({zoomWrapperRef:l,imageDimensions:o}),()=>h(void 0)):()=>{},[n,o,h]);let f=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:u});if(!f&&so(t)){const m={slide:t,offset:n,rect:r,render:e,imageFit:g.imageFit,imageProps:g.imageProps,onClick:n===0?()=>{var x;return(x=y.click)===null||x===void 0?void 0:x.call(y,{index:w})}:void 0};f=HL(t)?b.createElement(GL,{...m,slide:t,interactive:p,rect:n===0?{width:r.width*s,height:r.height*s}:r}):b.createElement(Gl,{onLoad:x=>a({width:x.naturalWidth,height:x.naturalHeight}),...m})}return f?b.createElement("div",{ref:l,className:kn(ae(CD),ae(hm),ae(AS),p&&ae(TD)),style:n===0?{transform:`scale(${s}) translateX(${c}px) translateY(${d}px)`}:void 0},f):null}const qL=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=l2(n);return{zoom:l,toolbar:AD(r,wv,b.createElement(UL,null)),render:{...i,slide:s=>{var u;return so(s.slide)?b.createElement(YL,{render:i,...s}):(u=i.slide)===null||u===void 0?void 0:u.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Tr(wv,NL))};var c2={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",u="day",c="week",d="month",h="quarter",p="year",g="date",y="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(R){var D=["th","st","nd","rd"],F=R%100;return"["+R+(D[(F-20)%10]||D[F]||D[0])+"]"}},x=function(R,D,F){var A=String(R);return!A||A.length>=D?R:""+Array(D+1-A.length).join(F)+R},S={s:x,z:function(R){var D=-R.utcOffset(),F=Math.abs(D),A=Math.floor(F/60),P=F%60;return(D<=0?"+":"-")+x(A,2,"0")+":"+x(P,2,"0")},m:function R(D,F){if(D.date()<F.date())return-R(F,D);var A=12*(F.year()-D.year())+(F.month()-D.month()),P=D.clone().add(A,d),j=F-P<0,N=D.clone().add(A+(j?-1:1),d);return+(-(A+(F-P)/(j?P-N:N-P))||0)},a:function(R){return R<0?Math.ceil(R)||0:Math.floor(R)},p:function(R){return{M:d,y:p,w:c,d:u,D:g,h:s,m:l,s:a,ms:o,Q:h}[R]||String(R||"").toLowerCase().replace(/s$/,"")},u:function(R){return R===void 0}},E="en",k={};k[E]=m;var _="$isDayjsObject",C=function(R){return R instanceof I||!(!R||!R[_])},O=function R(D,F,A){var P;if(!D)return E;if(typeof D=="string"){var j=D.toLowerCase();k[j]&&(P=j),F&&(k[j]=F,P=j);var N=D.split("-");if(!P&&N.length>1)return R(N[0])}else{var B=D.name;k[B]=D,P=B}return!A&&P&&(E=P),P||!A&&E},M=function(R,D){if(C(R))return R.clone();var F=typeof D=="object"?D:{};return F.date=R,F.args=arguments,new I(F)},$=S;$.l=O,$.i=C,$.w=function(R,D){return M(R,{locale:D.$L,utc:D.$u,x:D.$x,$offset:D.$offset})};var I=function(){function R(F){this.$L=O(F.locale,null,!0),this.parse(F),this.$x=this.$x||F.x||{},this[_]=!0}var D=R.prototype;return D.parse=function(F){this.$d=function(A){var P=A.date,j=A.utc;if(P===null)return new Date(NaN);if($.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var N=P.match(w);if(N){var B=N[2]-1||0,z=(N[7]||"0").substring(0,3);return j?new Date(Date.UTC(N[1],B,N[3]||1,N[4]||0,N[5]||0,N[6]||0,z)):new Date(N[1],B,N[3]||1,N[4]||0,N[5]||0,N[6]||0,z)}}return new Date(P)}(F),this.init()},D.init=function(){var F=this.$d;this.$y=F.getFullYear(),this.$M=F.getMonth(),this.$D=F.getDate(),this.$W=F.getDay(),this.$H=F.getHours(),this.$m=F.getMinutes(),this.$s=F.getSeconds(),this.$ms=F.getMilliseconds()},D.$utils=function(){return $},D.isValid=function(){return this.$d.toString()!==y},D.isSame=function(F,A){var P=M(F);return this.startOf(A)<=P&&P<=this.endOf(A)},D.isAfter=function(F,A){return M(F)<this.startOf(A)},D.isBefore=function(F,A){return this.endOf(A)<M(F)},D.$g=function(F,A,P){return $.u(F)?this[A]:this.set(P,F)},D.unix=function(){return Math.floor(this.valueOf()/1e3)},D.valueOf=function(){return this.$d.getTime()},D.startOf=function(F,A){var P=this,j=!!$.u(A)||A,N=$.p(F),B=function(be,ie){var Ie=$.w(P.$u?Date.UTC(P.$y,ie,be):new Date(P.$y,ie,be),P);return j?Ie:Ie.endOf(u)},z=function(be,ie){return $.w(P.toDate()[be].apply(P.toDate("s"),(j?[0,0,0,0]:[23,59,59,999]).slice(ie)),P)},U=this.$W,H=this.$M,Y=this.$D,q="set"+(this.$u?"UTC":"");switch(N){case p:return j?B(1,0):B(31,11);case d:return j?B(1,H):B(0,H+1);case c:var J=this.$locale().weekStart||0,fe=(U<J?U+7:U)-J;return B(j?Y-fe:Y+(6-fe),H);case u:case g:return z(q+"Hours",0);case s:return z(q+"Minutes",1);case l:return z(q+"Seconds",2);case a:return z(q+"Milliseconds",3);default:return this.clone()}},D.endOf=function(F){return this.startOf(F,!1)},D.$set=function(F,A){var P,j=$.p(F),N="set"+(this.$u?"UTC":""),B=(P={},P[u]=N+"Date",P[g]=N+"Date",P[d]=N+"Month",P[p]=N+"FullYear",P[s]=N+"Hours",P[l]=N+"Minutes",P[a]=N+"Seconds",P[o]=N+"Milliseconds",P)[j],z=j===u?this.$D+(A-this.$W):A;if(j===d||j===p){var U=this.clone().set(g,1);U.$d[B](z),U.init(),this.$d=U.set(g,Math.min(this.$D,U.daysInMonth())).$d}else B&&this.$d[B](z);return this.init(),this},D.set=function(F,A){return this.clone().$set(F,A)},D.get=function(F){return this[$.p(F)]()},D.add=function(F,A){var P,j=this;F=Number(F);var N=$.p(A),B=function(H){var Y=M(j);return $.w(Y.date(Y.date()+Math.round(H*F)),j)};if(N===d)return this.set(d,this.$M+F);if(N===p)return this.set(p,this.$y+F);if(N===u)return B(1);if(N===c)return B(7);var z=(P={},P[l]=r,P[s]=i,P[a]=n,P)[N]||1,U=this.$d.getTime()+F*z;return $.w(U,this)},D.subtract=function(F,A){return this.add(-1*F,A)},D.format=function(F){var A=this,P=this.$locale();if(!this.isValid())return P.invalidDate||y;var j=F||"YYYY-MM-DDTHH:mm:ssZ",N=$.z(this),B=this.$H,z=this.$m,U=this.$M,H=P.weekdays,Y=P.months,q=P.meridiem,J=function(ie,Ie,Be,Ve){return ie&&(ie[Ie]||ie(A,j))||Be[Ie].slice(0,Ve)},fe=function(ie){return $.s(B%12||12,ie,"0")},be=q||function(ie,Ie,Be){var Ve=ie<12?"AM":"PM";return Be?Ve.toLowerCase():Ve};return j.replace(f,function(ie,Ie){return Ie||function(Be){switch(Be){case"YY":return String(A.$y).slice(-2);case"YYYY":return $.s(A.$y,4,"0");case"M":return U+1;case"MM":return $.s(U+1,2,"0");case"MMM":return J(P.monthsShort,U,Y,3);case"MMMM":return J(Y,U);case"D":return A.$D;case"DD":return $.s(A.$D,2,"0");case"d":return String(A.$W);case"dd":return J(P.weekdaysMin,A.$W,H,2);case"ddd":return J(P.weekdaysShort,A.$W,H,3);case"dddd":return H[A.$W];case"H":return String(B);case"HH":return $.s(B,2,"0");case"h":return fe(1);case"hh":return fe(2);case"a":return be(B,z,!0);case"A":return be(B,z,!1);case"m":return String(z);case"mm":return $.s(z,2,"0");case"s":return String(A.$s);case"ss":return $.s(A.$s,2,"0");case"SSS":return $.s(A.$ms,3,"0");case"Z":return N}return null}(ie)||N.replace(":","")})},D.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},D.diff=function(F,A,P){var j,N=this,B=$.p(A),z=M(F),U=(z.utcOffset()-this.utcOffset())*r,H=this-z,Y=function(){return $.m(N,z)};switch(B){case p:j=Y()/12;break;case d:j=Y();break;case h:j=Y()/3;break;case c:j=(H-U)/6048e5;break;case u:j=(H-U)/864e5;break;case s:j=H/i;break;case l:j=H/r;break;case a:j=H/n;break;default:j=H}return P?j:$.a(j)},D.daysInMonth=function(){return this.endOf(d).$D},D.$locale=function(){return k[this.$L]},D.locale=function(F,A){if(!F)return this.$L;var P=this.clone(),j=O(F,A,!0);return j&&(P.$L=j),P},D.clone=function(){return $.w(this.$d,this)},D.toDate=function(){return new Date(this.valueOf())},D.toJSON=function(){return this.isValid()?this.toISOString():null},D.toISOString=function(){return this.$d.toISOString()},D.toString=function(){return this.$d.toUTCString()},R}(),L=I.prototype;return M.prototype=L,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",u],["$M",d],["$y",p],["$D",g]].forEach(function(R){L[R[1]]=function(D){return this.$g(D,R[0],R[1])}}),M.extend=function(R,D){return R.$i||(R(D,I,M),R.$i=!0),M},M.locale=O,M.isDayjs=C,M.unix=function(R){return M(1e3*R)},M.en=k[E],M.Ls=k,M.p={},M})})(c2);var XL=c2.exports;const Av=jp(XL),KL=()=>{var C;const{id:e}=z1(),[t,n]=b.useState([]),[r,i]=b.useState(1),[o,a]=b.useState("description"),[l,s]=b.useState(null),[u,c]=b.useState(!1),[d,h]=b.useState(0);console.log("products",t);const[p,g]=b.useState(!0),y=t.find(O=>O.id===Number(e)),w=y?Av().diff(Av(y.createdAt),"day")<7:!1;b.useEffect(()=>{(async()=>{try{g(!0);const $=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[id][$eq]=${e}&populate=*`)).json();n($.data)}catch(M){console.error("Error fetching products:",M)}finally{g(!1)}})()},[e]),console.log(y),b.useEffect(()=>{var O,M;y&&y.images&&s((M=(O=y.images)==null?void 0:O[0])==null?void 0:M.url)},[y]);const f=y==null?void 0:y.images.map(O=>({src:O.url})),m=()=>{const O=y.images.findIndex(M=>M.url===l);h(O>=0?O:0),c(!0)},x=ni(),E=_n(O=>O.favorites.items).some(O=>O.id===(y==null?void 0:y.id)),k=()=>{x(Fa({...y,quantity:r})),ee.success(`${y.name} додано в кошик!`)},_=(O,M)=>{M.stopPropagation(),x(Ba(O)),E?ee.warning(`${O.name} видалено з обраного`):ee.info(`${O.name} додано в обране`)};return p?v.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:v.jsx(Ru,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):y?v.jsxs(xv,{children:[" ",v.jsx(oo,{autoClose:1500}),v.jsxs(Xj,{children:[v.jsx(Me,{to:"/",children:"Головна"})," / ",v.jsx(Me,{to:"/catalog",children:"Каталог"})," /"," ",y.name]}),v.jsxs(Kj,{children:[v.jsxs(Zj,{children:[v.jsx(Qj,{src:l,alt:y.name,onClick:m}),v.jsx(Jj,{children:y.images.map(O=>{const M=O.url;return v.jsx(eD,{src:M,onClick:()=>s(M),style:{cursor:"pointer",opacity:l===M?1:.4}},O.id)})})]}),v.jsx(IL,{open:u,close:()=>c(!1),index:d,slides:f,controller:{closeOnBackdropClick:!0},on:{view:({index:O})=>{var M,$;h(O),($=(M=y==null?void 0:y.images)==null?void 0:M[O])!=null&&$.url&&s(y.images[O].url)}},plugins:[qL],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),v.jsxs(tD,{children:[v.jsx(nD,{children:y.name}),v.jsx(rD,{children:w&&v.jsx(iD,{children:"● Новий товар"})}),v.jsxs(oD,{children:[v.jsx(aD,{children:v.jsxs(sD,{children:[y.price.toLocaleString()," грн"]})}),v.jsxs(lD,{children:[v.jsxs(uD,{children:[v.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),v.jsx("span",{children:r}),v.jsx("button",{onClick:()=>i(r+1),children:"+"})]}),v.jsxs(cD,{onClick:k,children:[" ",v.jsx(ja,{size:25}),v.jsx("span",{children:"В КОШИК"})]}),v.jsxs(yD,{$active:E,onClick:O=>_(y,O),children:[v.jsxs(xD,{$active:E,children:[" ",v.jsx("use",{href:`${cn}#icon-heart`})]}),v.jsx("span",{children:"В ОБРАНЕ"})]})]})]}),v.jsxs(pD,{children:[v.jsxs("p",{children:[v.jsx("strong",{children:"Ваше місто:"})," Київ"]}),v.jsx("p",{children:"🚚 Доставка по Україні (Розрахувати вартість)"})]})]})]}),v.jsxs(hD,{children:[v.jsxs(mD,{children:[v.jsx(bv,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),v.jsx(bv,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"})]}),v.jsxs(gD,{children:[o==="description"&&v.jsx(vD,{children:y.description}),o==="attributes"&&v.jsx(dD,{children:(C=y.attributes)!=null&&C.length?y.attributes.map(O=>v.jsxs(fD,{children:[v.jsx("span",{children:O.label}),v.jsx("b",{children:O.value})]},O.id)):v.jsx("p",{children:"Характеристики відсутні"})})]})]})]}):v.jsx(xv,{children:"Товар не знайдено"})},ZL=T.div`
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

  
`,QL=T.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,JL=T.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,eR=T.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,tR=T.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,nR=T.div`
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
`,rR=T.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,iR=T.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,oR=T.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,aR=T.div`

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
`;const sR=T.div`
  text-align: right;
 
`,lR=T.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,uR=T.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,cR=T.div`

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
`,dR=T.div`
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
`,fR=T(Me)`
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
`,pR=T.button`
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
`;const hR=T.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,mR=T.div`
   
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
`;const gR=T.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,vR=T.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,yR=T.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,xR=T.button`
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
`,bR=()=>v.jsxs(v.Fragment,{children:[v.jsx(hR,{children:"Головна / Кошик"}),v.jsxs(mR,{children:[v.jsx(gR,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),v.jsx(vR,{children:"Ваш кошик порожній"}),v.jsx(yR,{children:"Ви ще не додали жодного товару в кошик"}),v.jsx(xR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]}),wR=T.div`
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
`,SR=({item:e})=>{const t=ni();return v.jsxs(wR,{children:[v.jsx("button",{onClick:()=>t(a$(e.id)),children:"-"}),v.jsx("span",{children:e.quantity}),v.jsx("button",{onClick:()=>t(o$(e.id)),children:"+"})]})},_R=()=>{const e=ni(),[t,n]=b.useState([]),r=_n(h=>h.cart.items),o=_n(h=>h.cart.items).reduce((h,p)=>h+p.quantity,0),a=r.reduce((h,p)=>h+p.price*(p.quantity||1),0),l=_n(h=>h.favorites.items),s=r.length===0,u=(h,p)=>{p.stopPropagation(),console.log(h);const g=l.some(y=>y.id===h.id);e(Ba(h)),g?ee.warning(`${h.name} видалено з обраного`):ee.info(`${h.name} додано в обране`)},c=h=>{n(p=>[...p,h.id]),setTimeout(()=>{e(n$(h)),n(p=>p.filter(g=>g!==h.id))},300)},d=()=>{e(r$())};return v.jsx(v.Fragment,{children:s?v.jsx(bR,{}):v.jsxs(ZL,{children:[v.jsx(oo,{autoClose:1500}),v.jsxs(QL,{children:[" ",v.jsx(Me,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",v.jsx(Me,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),v.jsx(JL,{children:"Кошик"}),v.jsxs(eR,{children:[v.jsx(tR,{children:r.map((h,p)=>{var y,w;console.log(h);const g=l.some(f=>f.id===h.id);return v.jsxs(nR,{className:t.includes(h.id)?"removing":"",children:[v.jsx(rR,{src:((w=(y=h.images)==null?void 0:y[0])==null?void 0:w.url)||"/nofoto.png",alt:h.name,onError:f=>{f.currentTarget.onerror=null,f.currentTarget.src=_a}}),v.jsx(iR,{children:v.jsx("h3",{children:h.name})}),v.jsxs(oR,{children:[v.jsx(SR,{item:{...h,quantity:h.quantity||1}}),v.jsx(sR,{children:v.jsxs("div",{className:"current-price",children:[(h.price*(h.quantity||1)).toLocaleString()," грн"]})})]}),v.jsxs(aR,{children:[v.jsx(uR,{onClick:f=>u(h,f),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:v.jsx(Vh,{size:22,fill:g?"#ff4d4f":"none",color:g?"#ff4d4f":"#999"})}),v.jsx(lR,{onClick:()=>c(h),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:v.jsx(Eb,{size:22})})]})]},`${h.id}-${p}`)})}),v.jsxs(cR,{children:[v.jsxs(dR,{children:[v.jsx("span",{children:"Всього в обраному:"}),v.jsxs("strong",{children:[o," шт."]}),v.jsx("span",{children:"На суму:"}),v.jsxs("strong",{children:[a," грн"]})]}),v.jsx(fR,{to:"/checkout",children:"Оформити замовлення"}),v.jsx(pR,{onClick:d,children:"Oчистити кошик"})]})]})]})})},ER=T.div`
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

  
  
`,CR=T.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,kR=T.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,TR=T.div`
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
`,PR=T.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,OR=T.div`
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
`;const MR=T.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,IR=T.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,$R=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
   @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,jR=T.p`
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
`,DR=T.div`
  display: flex;
  gap: 16px;
`,Fv=T.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  padding: 8px;
  
`,LR=T.div`
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
`,RR=T.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,AR=T.button`
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
`,FR=T.button`
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
`,NR=T.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,zR=T.div`
   
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
`;const BR=T.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;T.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const VR=T.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,UR=T.button`
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
`,HR=()=>v.jsxs(v.Fragment,{children:[v.jsx(NR,{children:"Головна / Обране"}),v.jsxs(zR,{children:[v.jsx(BR,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),v.jsx(VR,{children:"Ви ще не додали жодного товару в обране"}),v.jsx(UR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),WR=()=>{const e=ni(),t=_n(c=>c.favorites.items),[n,r]=b.useState([]),i=c=>{e(Fa(c)),ee.success(`${c.name} додано в кошик!`)},o=()=>{e(i$(t)),ee.success("Товари додано в кошик!")};console.log(t);const a=t.reduce((c,d)=>c+d.price*(d.quantity||1),0),l=(c,d)=>{d.stopPropagation();const h=t.some(p=>p.id===c.id);r(p=>[...p,c.id]),setTimeout(()=>{e(Ba(c)),r(p=>p.filter(g=>g!==c.id))},300),h?ee.warning(`${c.name} видалено з обраного`):ee.info(`${c.name} додано в обране`)},s=()=>{e(Wj())},u=t.length===0;return v.jsx(v.Fragment,{children:u?v.jsx(HR,{}):v.jsxs(ER,{children:[v.jsx(oo,{autoClose:1500}),v.jsxs(CR,{children:[" ",v.jsx(Me,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",v.jsx(Me,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),v.jsx(kR,{children:"Обране"}),v.jsxs(TR,{children:[v.jsx(PR,{children:t.map(c=>{var d,h;return v.jsxs(OR,{className:n.includes(c.id)?"removing":"",children:[v.jsx(MR,{src:((h=(d=c.images)==null?void 0:d[0])==null?void 0:h.url)||"/nofoto.png",alt:c.name,onError:p=>{p.currentTarget.onerror=null,p.currentTarget.src="/nofoto.png"}}),v.jsx(IR,{children:c.name}),v.jsxs($R,{children:[v.jsxs(jR,{children:[c.price," грн"]}),v.jsxs(DR,{children:[v.jsx(Fv,{onClick:()=>i(c),children:v.jsx(ja,{size:30})}),v.jsx(Fv,{onClick:p=>l(c,p),children:v.jsx(Eb,{size:30})})]})]})]},c.id)})}),v.jsxs(LR,{children:[v.jsxs(RR,{children:[v.jsx("span",{children:"Всього в обраному:"}),v.jsxs("strong",{children:[t.length," шт."]}),v.jsx("span",{children:"На суму:"}),v.jsxs("strong",{children:[a," грн"]})]}),v.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),v.jsx(AR,{onClick:()=>o(),children:"Додати все до кошика"}),v.jsx(FR,{onClick:s,children:"Очистити обрані"})]})]})]})})},GR=T.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,YR=T.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,qR=T.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,XR=T.h1`
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
`;const KR=({title:e,children:t,breadcrumbPath:n})=>v.jsxs(GR,{children:[v.jsxs(YR,{children:["Головна / ",n]}),v.jsxs(qR,{children:[v.jsx(XR,{children:e}),t]})]}),Nv=T.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,zv=T.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,Bv=T.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,Vv=T.ul`
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
`,ZR=()=>v.jsxs(KR,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[v.jsxs(Nv,{children:[v.jsx(zv,{children:"Способи доставки"}),v.jsx(Bv,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),v.jsxs(Vv,{children:[v.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),v.jsx("li",{children:"Самовивіз з нашого магазину"}),v.jsx("li",{children:"Укрпошта"})]})]}),v.jsxs(Nv,{children:[v.jsx(zv,{children:"Варіанти оплати"}),v.jsx(Bv,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),v.jsxs(Vv,{children:[v.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),v.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),v.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function Jr(e){"@babel/helpers - typeof";return Jr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jr(e)}function QR(e,t){if(Jr(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Jr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function d2(e){var t=QR(e,"string");return Jr(t)==="symbol"?t:String(t)}function Do(e,t,n){return t=d2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Uv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uv(Object(n),!0).forEach(function(r){Do(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function JR(e){if(Array.isArray(e))return e}function eA(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(c){u=!0,i=c}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Ep(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f2(e,t){if(e){if(typeof e=="string")return Ep(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ep(e,t)}}function tA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bn(e,t){return JR(e)||eA(e,t)||f2(e,t)||tA()}function nA(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jn(e,t){if(e==null)return{};var n=nA(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var rA=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function iA(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,c=e.onInputChange,d=e.onMenuClose,h=e.onMenuOpen,p=e.value,g=Jn(e,rA),y=b.useState(l!==void 0?l:n),w=Bn(y,2),f=w[0],m=w[1],x=b.useState(s!==void 0?s:i),S=Bn(x,2),E=S[0],k=S[1],_=b.useState(p!==void 0?p:a),C=Bn(_,2),O=C[0],M=C[1],$=b.useCallback(function(P,j){typeof u=="function"&&u(P,j),M(P)},[u]),I=b.useCallback(function(P,j){var N;typeof c=="function"&&(N=c(P,j)),m(N!==void 0?N:P)},[c]),L=b.useCallback(function(){typeof h=="function"&&h(),k(!0)},[h]),R=b.useCallback(function(){typeof d=="function"&&d(),k(!1)},[d]),D=l!==void 0?l:f,F=s!==void 0?s:E,A=p!==void 0?p:O;return Z(Z({},g),{},{inputValue:D,menuIsOpen:F,onChange:$,onInputChange:I,onMenuClose:R,onMenuOpen:L,value:A})}function oA(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Hv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d2(r.key),r)}}function aA(e,t,n){return t&&Hv(e.prototype,t),n&&Hv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Cp(e,t){return Cp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Cp(e,t)}function sA(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Cp(e,t)}function Yl(e){return Yl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Yl(e)}function lA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function uA(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function cA(e,t){if(t&&(Jr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uA(e)}function dA(e){var t=lA();return function(){var r=Yl(e),i;if(t){var o=Yl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return cA(this,i)}}function fA(e){if(Array.isArray(e))return Ep(e)}function pA(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pm(e){return fA(e)||pA(e)||f2(e)||hA()}function mA(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const gA=Math.min,vA=Math.max,ql=Math.round,xs=Math.floor,Xl=e=>({x:e,y:e});function yA(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function fc(){return typeof window<"u"}function p2(e){return m2(e)?(e.nodeName||"").toLowerCase():"#document"}function ln(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function h2(e){var t;return(t=(m2(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function m2(e){return fc()?e instanceof Node||e instanceof ln(e).Node:!1}function kp(e){return fc()?e instanceof Element||e instanceof ln(e).Element:!1}function Om(e){return fc()?e instanceof HTMLElement||e instanceof ln(e).HTMLElement:!1}function Wv(e){return!fc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ln(e).ShadowRoot}function g2(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Mm(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let kd;function xA(){return kd==null&&(kd=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),kd}function bA(e){return/^(html|body|#document)$/.test(p2(e))}function Mm(e){return ln(e).getComputedStyle(e)}function wA(e){if(p2(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Wv(e)&&e.host||h2(e);return Wv(t)?t.host:t}function v2(e){const t=wA(e);return bA(t)?e.ownerDocument?e.ownerDocument.body:e.body:Om(t)&&g2(t)?t:v2(t)}function Kl(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=v2(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=ln(i);if(o){const l=Tp(a);return t.concat(a,a.visualViewport||[],g2(i)?i:[],l&&n?Kl(l):[])}else return t.concat(i,Kl(i,[],n))}function Tp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function SA(e){const t=Mm(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Om(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=ql(n)!==o||ql(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Im(e){return kp(e)?e:e.contextElement}function Td(e){const t=Im(e);if(!Om(t))return Xl(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=SA(t);let a=(o?ql(n.width):n.width)/r,l=(o?ql(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const _A=Xl(0);function EA(e){const t=ln(e);return!xA()||!t.visualViewport?_A:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function CA(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==ln(e)?!1:t}function Gv(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Im(e);let a=Xl(1);t&&(r?kp(r)&&(a=Td(r)):a=Td(e));const l=CA(o,n,r)?EA(o):Xl(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,c=i.width/a.x,d=i.height/a.y;if(o){const h=ln(o),p=r&&kp(r)?ln(r):r;let g=h,y=Tp(g);for(;y&&r&&p!==g;){const w=Td(y),f=y.getBoundingClientRect(),m=Mm(y),x=f.left+(y.clientLeft+parseFloat(m.paddingLeft))*w.x,S=f.top+(y.clientTop+parseFloat(m.paddingTop))*w.y;s*=w.x,u*=w.y,c*=w.x,d*=w.y,s+=x,u+=S,g=ln(y),y=Tp(g)}}return yA({width:c,height:d,x:s,y:u})}function y2(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function kA(e,t){let n=null,r;const i=h2(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:c,top:d,width:h,height:p}=u;if(l||t(),!h||!p)return;const g=xs(d),y=xs(i.clientWidth-(c+h)),w=xs(i.clientHeight-(d+p)),f=xs(c),x={rootMargin:-g+"px "+-y+"px "+-w+"px "+-f+"px",threshold:vA(0,gA(1,s))||1};let S=!0;function E(k){const _=k[0].intersectionRatio;if(_!==s){if(!S)return a();_?a(!1,_):r=setTimeout(()=>{a(!1,1e-7)},1e3)}_===1&&!y2(u,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(E,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,x)}n.observe(e)}return a(!0),o}function TA(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=Im(e),c=i||o?[...u?Kl(u):[],...t?Kl(t):[]]:[];c.forEach(f=>{i&&f.addEventListener("scroll",n,{passive:!0}),o&&f.addEventListener("resize",n)});const d=u&&l?kA(u,n):null;let h=-1,p=null;a&&(p=new ResizeObserver(f=>{let[m]=f;m&&m.target===u&&p&&t&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(t)})),n()}),u&&!s&&p.observe(u),t&&p.observe(t));let g,y=s?Gv(e):null;s&&w();function w(){const f=Gv(e);y&&!y2(y,f)&&n(),y=f,g=requestAnimationFrame(w)}return n(),()=>{var f;c.forEach(m=>{i&&m.removeEventListener("scroll",n),o&&m.removeEventListener("resize",n)}),d==null||d(),(f=p)==null||f.disconnect(),p=null,s&&cancelAnimationFrame(g)}}var Pp=b.useLayoutEffect,PA=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Zl=function(){};function OA(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function MA(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(OA(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Yv=function(t){return NA(t)?t.filter(Boolean):Jr(t)==="object"&&t!==null?[t]:[]},x2=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=Jn(t,PA);return Z({},n)},Pe=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function pc(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function IA(e){return pc(e)?window.innerHeight:e.clientHeight}function b2(e){return pc(e)?window.pageYOffset:e.scrollTop}function Ql(e,t){if(pc(e)){window.scrollTo(0,t);return}e.scrollTop=t}function $A(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function jA(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function bs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Zl,i=b2(e),o=t-i,a=10,l=0;function s(){l+=a;var u=jA(l,i,o,n);Ql(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function qv(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?Ql(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&Ql(e,Math.max(t.offsetTop-i,0))}function DA(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Xv(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function LA(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var w2=!1,RA={get passive(){return w2=!0}},ws=typeof window<"u"?window:{};ws.addEventListener&&ws.removeEventListener&&(ws.addEventListener("p",Zl,RA),ws.removeEventListener("p",Zl,!1));var AA=w2;function FA(e){return e!=null}function NA(e){return Array.isArray(e)}function Ss(e,t,n){return e?t:n}var zA=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Bn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Bn(l,2),u=s[0],c=s[1];return a[u]=c,a},{})},BA=["children","innerProps"],VA=["children","innerProps"];function UA(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=$A(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var c=s.getBoundingClientRect(),d=c.height,h=n.getBoundingClientRect(),p=h.bottom,g=h.height,y=h.top,w=n.offsetParent.getBoundingClientRect(),f=w.top,m=a?window.innerHeight:IA(s),x=b2(s),S=parseInt(getComputedStyle(n).marginBottom,10),E=parseInt(getComputedStyle(n).marginTop,10),k=f-E,_=m-y,C=k+x,O=d-x-y,M=p-m+x+S,$=x+y-E,I=160;switch(i){case"auto":case"bottom":if(_>=g)return{placement:"bottom",maxHeight:t};if(O>=g&&!a)return o&&bs(s,M,I),{placement:"bottom",maxHeight:t};if(!a&&O>=r||a&&_>=r){o&&bs(s,M,I);var L=a?_-S:O-S;return{placement:"bottom",maxHeight:L}}if(i==="auto"||a){var R=t,D=a?k:C;return D>=r&&(R=Math.min(D-S-l,t)),{placement:"top",maxHeight:R}}if(i==="bottom")return o&&Ql(s,M),{placement:"bottom",maxHeight:t};break;case"top":if(k>=g)return{placement:"top",maxHeight:t};if(C>=g&&!a)return o&&bs(s,$,I),{placement:"top",maxHeight:t};if(!a&&C>=r||a&&k>=r){var F=t;return(!a&&C>=r||a&&k>=r)&&(F=a?k-E:C-E),o&&bs(s,$,I),{placement:"top",maxHeight:F}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function HA(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var S2=function(t){return t==="auto"?"bottom":t},WA=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return Z((r={label:"menu"},Do(r,HA(i),"100%"),Do(r,"position","absolute"),Do(r,"width","100%"),Do(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},_2=b.createContext(null),GA=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=b.useContext(_2)||{},c=u.setPortalPlacement,d=b.useRef(null),h=b.useState(i),p=Bn(h,2),g=p[0],y=p[1],w=b.useState(null),f=Bn(w,2),m=f[0],x=f[1],S=s.spacing.controlHeight;return Pp(function(){var E=d.current;if(E){var k=a==="fixed",_=l&&!k,C=UA({maxHeight:i,menuEl:E,minHeight:r,placement:o,shouldScroll:_,isFixedPosition:k,controlHeight:S});y(C.maxHeight),x(C.placement),c==null||c(C.placement)}},[i,o,a,l,r,c,S]),n({ref:d,placerProps:Z(Z({},t),{},{placement:m||S2(o),maxHeight:g})})},YA=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return K("div",Q({},Pe(t,"menu",{menu:!0}),{ref:r},i),n)},qA=YA,XA=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return Z({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},KA=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return K("div",Q({},Pe(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},E2=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return Z({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},ZA=E2,QA=E2,JA=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=Jn(t,BA);return K("div",Q({},Pe(Z(Z({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},e6=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=Jn(t,VA);return K("div",Q({},Pe(Z(Z({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},t6=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},n6=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=b.useRef(null),u=b.useRef(null),c=b.useState(S2(a)),d=Bn(c,2),h=d[0],p=d[1],g=b.useMemo(function(){return{setPortalPlacement:p}},[]),y=b.useState(null),w=Bn(y,2),f=w[0],m=w[1],x=b.useCallback(function(){if(i){var _=DA(i),C=l==="fixed"?0:window.pageYOffset,O=_[h]+C;(O!==(f==null?void 0:f.offset)||_.left!==(f==null?void 0:f.rect.left)||_.width!==(f==null?void 0:f.rect.width))&&m({offset:O,rect:_})}},[i,l,h,f==null?void 0:f.offset,f==null?void 0:f.rect.left,f==null?void 0:f.rect.width]);Pp(function(){x()},[x]);var S=b.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=TA(i,s.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);Pp(function(){S()},[S]);var E=b.useCallback(function(_){s.current=_,S()},[S]);if(!n&&l!=="fixed"||!f)return null;var k=K("div",Q({ref:E},Pe(Z(Z({},t),{},{offset:f.offset,position:l,rect:f.rect}),"menuPortal",{"menu-portal":!0}),o),r);return K(_2.Provider,{value:g},n?vu.createPortal(k,n):k)},r6=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},i6=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return K("div",Q({},Pe(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},o6=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return Z({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},a6=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return K("div",Q({},Pe(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},s6=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},l6=function(t){var n=t.children,r=t.innerProps;return K("div",Q({},Pe(t,"indicatorsContainer",{indicators:!0}),r),n)},Kv,u6=["size"],c6=["innerProps","isRtl","size"],d6={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},C2=function(t){var n=t.size,r=Jn(t,u6);return K("svg",Q({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:d6},r))},$m=function(t){return K(C2,Q({size:20},t),K("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},k2=function(t){return K(C2,Q({size:20},t),K("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},T2=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},f6=T2,p6=function(t){var n=t.children,r=t.innerProps;return K("div",Q({},Pe(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||K(k2,null))},h6=T2,m6=function(t){var n=t.children,r=t.innerProps;return K("div",Q({},Pe(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||K($m,null))},g6=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},v6=function(t){var n=t.innerProps;return K("span",Q({},n,Pe(t,"indicatorSeparator",{"indicator-separator":!0})))},y6=QO(Kv||(Kv=mA([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),x6=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return Z({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Pd=function(t){var n=t.delay,r=t.offset;return K("span",{css:Qh({animation:"".concat(y6," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},b6=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=Jn(t,c6);return K("div",Q({},Pe(Z(Z({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),K(Pd,{delay:0,offset:r}),K(Pd,{delay:160,offset:!0}),K(Pd,{delay:320,offset:!r}))},w6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return Z({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},S6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return K("div",Q({ref:o},Pe(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},_6=S6,E6=["data"],C6=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},k6=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,c=t.theme,d=t.selectProps;return K("div",Q({},Pe(t,"group",{group:!0}),s),K(a,Q({},l,{selectProps:d,theme:c,getStyles:i,getClassNames:o,cx:r}),u),K("div",null,n))},T6=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return Z({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},P6=function(t){var n=x2(t);n.data;var r=Jn(n,E6);return K("div",Q({},Pe(t,"groupHeading",{"group-heading":!0}),r))},O6=k6,M6=["innerRef","isDisabled","isHidden","inputClassName"],I6=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return Z(Z({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},$6),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},P2={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},$6={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Z({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},P2)},j6=function(t){return Z({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},P2)},D6=function(t){var n=t.cx,r=t.value,i=x2(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=Jn(i,M6);return K("div",Q({},Pe(t,"input",{"input-container":!0}),{"data-value":r||""}),K("input",Q({className:n({input:!0},s),ref:o,style:j6(l),disabled:a},u)))},L6=D6,R6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return Z({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},A6=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return Z({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},F6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return Z({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},O2=function(t){var n=t.children,r=t.innerProps;return K("div",r,n)},N6=O2,z6=O2;function B6(e){var t=e.children,n=e.innerProps;return K("div",Q({role:"button"},n),t||K($m,{size:14}))}var V6=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,c=r.Label,d=r.Remove;return K(u,{data:i,innerProps:Z(Z({},Pe(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},K(c,{data:i,innerProps:Z({},Pe(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),K(d,{data:i,innerProps:Z(Z({},Pe(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},U6=V6,H6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return Z({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},W6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return K("div",Q({},Pe(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},G6=W6,Y6=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return Z({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},q6=function(t){var n=t.children,r=t.innerProps;return K("div",Q({},Pe(t,"placeholder",{placeholder:!0}),r),n)},X6=q6,K6=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return Z({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},Z6=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return K("div",Q({},Pe(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},Q6=Z6,J6={ClearIndicator:m6,Control:_6,DropdownIndicator:p6,DownChevron:k2,CrossIcon:$m,Group:O6,GroupHeading:P6,IndicatorsContainer:l6,IndicatorSeparator:v6,Input:L6,LoadingIndicator:b6,Menu:qA,MenuList:KA,MenuPortal:n6,LoadingMessage:e6,NoOptionsMessage:JA,MultiValue:U6,MultiValueContainer:N6,MultiValueLabel:z6,MultiValueRemove:B6,Option:G6,Placeholder:X6,SelectContainer:i6,SingleValue:Q6,ValueContainer:a6},e8=function(t){return Z(Z({},J6),t.components)},Zv=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function t8(e,t){return!!(e===t||Zv(e)&&Zv(t))}function n8(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!t8(e[n],t[n]))return!1;return!0}function r8(e,t){t===void 0&&(t=n8);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var i8={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},o8=function(t){return K("span",Q({css:i8},t))},Qv=o8,a8={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,c=t.isAppleDevice,d=function(y,w){return y&&y.length?"".concat(y.indexOf(w)+1," of ").concat(y.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(d(l,r),".");if(n==="menu"&&c){var h=s?" disabled":"",p="".concat(u?" selected":"").concat(h);return"".concat(a).concat(p,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},s8=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,c=t.isAppleDevice,d=s.ariaLiveMessages,h=s.getOptionLabel,p=s.inputValue,g=s.isMulti,y=s.isOptionDisabled,w=s.isSearchable,f=s.menuIsOpen,m=s.options,x=s.screenReaderStatus,S=s.tabSelectsValue,E=s.isLoading,k=s["aria-label"],_=s["aria-live"],C=b.useMemo(function(){return Z(Z({},a8),d||{})},[d]),O=b.useMemo(function(){var D="";if(n&&C.onChange){var F=n.option,A=n.options,P=n.removedValue,j=n.removedValues,N=n.value,B=function(fe){return Array.isArray(fe)?null:fe},z=P||F||B(N),U=z?h(z):"",H=A||j||void 0,Y=H?H.map(h):[],q=Z({isDisabled:z&&y(z,l),label:U,labels:Y},n);D=C.onChange(q)}return D},[n,C,y,l,h]),M=b.useMemo(function(){var D="",F=r||i,A=!!(r&&l&&l.includes(r));if(F&&C.onFocus){var P={focused:F,label:h(F),isDisabled:y(F,l),isSelected:A,options:o,context:F===r?"menu":"value",selectValue:l,isAppleDevice:c};D=C.onFocus(P)}return D},[r,i,h,y,C,o,l,c]),$=b.useMemo(function(){var D="";if(f&&m.length&&!E&&C.onFilter){var F=x({count:o.length});D=C.onFilter({inputValue:p,resultsMessage:F})}return D},[o,p,f,C,m,x,E]),I=(n==null?void 0:n.action)==="initial-input-focus",L=b.useMemo(function(){var D="";if(C.guidance){var F=i?"value":f?"menu":"input";D=C.guidance({"aria-label":k,context:F,isDisabled:r&&y(r,l),isMulti:g,isSearchable:w,tabSelectsValue:S,isInitialFocus:I})}return D},[k,r,i,g,y,w,f,C,l,S,I]),R=K(b.Fragment,null,K("span",{id:"aria-selection"},O),K("span",{id:"aria-focused"},M),K("span",{id:"aria-results"},$),K("span",{id:"aria-guidance"},L));return K(b.Fragment,null,K(Qv,{id:u},I&&R),K(Qv,{"aria-live":_,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!I&&R))},l8=s8,Op=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],u8=new RegExp("["+Op.map(function(e){return e.letters}).join("")+"]","g"),M2={};for(var Od=0;Od<Op.length;Od++)for(var Md=Op[Od],Id=0;Id<Md.letters.length;Id++)M2[Md.letters[Id]]=Md.base;var I2=function(t){return t.replace(u8,function(n){return M2[n]})},c8=r8(I2),Jv=function(t){return t.replace(/^\s+|\s+$/g,"")},d8=function(t){return"".concat(t.label," ").concat(t.value)},f8=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=Z({ignoreCase:!0,ignoreAccents:!0,stringify:d8,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,c=s?Jv(r):r,d=s?Jv(l(n)):l(n);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),a&&(c=c8(c),d=I2(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},p8=["innerRef"];function h8(e){var t=e.innerRef,n=Jn(e,p8),r=zA(n,"onExited","in","enter","exit","appear");return K("input",Q({ref:t},r,{css:Qh({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var m8=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function g8(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=b.useRef(!1),l=b.useRef(!1),s=b.useRef(0),u=b.useRef(null),c=b.useCallback(function(w,f){if(u.current!==null){var m=u.current,x=m.scrollTop,S=m.scrollHeight,E=m.clientHeight,k=u.current,_=f>0,C=S-E-x,O=!1;C>f&&a.current&&(r&&r(w),a.current=!1),_&&l.current&&(o&&o(w),l.current=!1),_&&f>C?(n&&!a.current&&n(w),k.scrollTop=S,O=!0,a.current=!0):!_&&-f>x&&(i&&!l.current&&i(w),k.scrollTop=0,O=!0,l.current=!0),O&&m8(w)}},[n,r,i,o]),d=b.useCallback(function(w){c(w,w.deltaY)},[c]),h=b.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),p=b.useCallback(function(w){var f=s.current-w.changedTouches[0].clientY;c(w,f)},[c]),g=b.useCallback(function(w){if(w){var f=AA?{passive:!1}:!1;w.addEventListener("wheel",d,f),w.addEventListener("touchstart",h,f),w.addEventListener("touchmove",p,f)}},[p,h,d]),y=b.useCallback(function(w){w&&(w.removeEventListener("wheel",d,!1),w.removeEventListener("touchstart",h,!1),w.removeEventListener("touchmove",p,!1))},[p,h,d]);return b.useEffect(function(){if(t){var w=u.current;return g(w),function(){y(w)}}},[t,g,y]),function(w){u.current=w}}var e1=["boxSizing","height","overflow","paddingRight","position"],t1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function n1(e){e.cancelable&&e.preventDefault()}function r1(e){e.stopPropagation()}function i1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function o1(){return"ontouchstart"in window||navigator.maxTouchPoints}var a1=!!(typeof window<"u"&&window.document&&window.document.createElement),ko=0,ui={capture:!1,passive:!1};function v8(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),o=b.useRef(null),a=b.useCallback(function(s){if(a1){var u=document.body,c=u&&u.style;if(r&&e1.forEach(function(g){var y=c&&c[g];i.current[g]=y}),r&&ko<1){var d=parseInt(i.current.paddingRight,10)||0,h=document.body?document.body.clientWidth:0,p=window.innerWidth-h+d||0;Object.keys(t1).forEach(function(g){var y=t1[g];c&&(c[g]=y)}),c&&(c.paddingRight="".concat(p,"px"))}u&&o1()&&(u.addEventListener("touchmove",n1,ui),s&&(s.addEventListener("touchstart",i1,ui),s.addEventListener("touchmove",r1,ui))),ko+=1}},[r]),l=b.useCallback(function(s){if(a1){var u=document.body,c=u&&u.style;ko=Math.max(ko-1,0),r&&ko<1&&e1.forEach(function(d){var h=i.current[d];c&&(c[d]=h)}),u&&o1()&&(u.removeEventListener("touchmove",n1,ui),s&&(s.removeEventListener("touchstart",i1,ui),s.removeEventListener("touchmove",r1,ui)))}},[r]);return b.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var y8=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},x8={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function b8(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=g8({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),c=v8({isEnabled:n}),d=function(p){u(p),c(p)};return K(b.Fragment,null,n&&K("div",{onClick:y8,css:x8}),t(d))}var w8={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},S8=function(t){var n=t.name,r=t.onFocus;return K("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:w8,value:"",onChange:function(){}})},_8=S8;function jm(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function E8(){return jm(/^iPhone/i)}function $2(){return jm(/^Mac/i)}function C8(){return jm(/^iPad/i)||$2()&&navigator.maxTouchPoints>1}function k8(){return E8()||C8()}function T8(){return $2()||k8()}var P8=function(t){return t.label},O8=function(t){return t.label},M8=function(t){return t.value},I8=function(t){return!!t.isDisabled},$8={clearIndicator:h6,container:r6,control:w6,dropdownIndicator:f6,group:C6,groupHeading:T6,indicatorsContainer:s6,indicatorSeparator:g6,input:I6,loadingIndicator:x6,loadingMessage:QA,menu:WA,menuList:XA,menuPortal:t6,multiValue:R6,multiValueLabel:A6,multiValueRemove:F6,noOptionsMessage:ZA,option:H6,placeholder:Y6,singleValue:K6,valueContainer:o6},j8={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},D8=4,j2=4,L8=38,R8=j2*2,A8={baseUnit:j2,controlHeight:L8,menuGutter:R8},$d={borderRadius:D8,colors:j8,spacing:A8},F8={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Xv(),captureMenuScroll:!Xv(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:f8(),formatGroupLabel:P8,getOptionLabel:O8,getOptionValue:M8,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:I8,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!LA(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function s1(e,t,n,r){var i=R2(e,t,n),o=A2(e,t,n),a=L2(e,t),l=Jl(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function Zs(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return s1(e,a,t,l)}).filter(function(a){return u1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=s1(e,n,t,r);return u1(e,o)?o:void 0}).filter(FA)}function D2(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,Pm(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function l1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,Pm(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function N8(e,t){return D2(Zs(e,t))}function u1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!N2(e)||!o)&&F2(e,{label:a,value:l,data:i},r)}function z8(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function B8(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var jd=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},L2=function(t,n){return t.getOptionLabel(n)},Jl=function(t,n){return t.getOptionValue(n)};function R2(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function A2(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Jl(e,t);return n.some(function(i){return Jl(e,i)===r})}function F2(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var N2=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},V8=1,z2=function(e){sA(n,e);var t=dA(n);function n(r){var i;if(oA(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var c=i.props,d=c.onChange,h=c.name;u.name=h,i.ariaOnChange(s,u),d(s,u)},i.setValue=function(s,u,c){var d=i.props,h=d.closeMenuOnSelect,p=d.isMulti,g=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:g}),h&&(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:c})},i.selectOption=function(s){var u=i.props,c=u.blurInputOnSelect,d=u.isMulti,h=u.name,p=i.state.selectValue,g=d&&i.isOptionSelected(s,p),y=i.isOptionDisabled(s,p);if(g){var w=i.getOptionValue(s);i.setValue(p.filter(function(f){return i.getOptionValue(f)!==w}),"deselect-option",s)}else if(!y)d?i.setValue([].concat(Pm(p),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:h});return}c&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,c=i.state.selectValue,d=i.getOptionValue(s),h=c.filter(function(g){return i.getOptionValue(g)!==d}),p=Ss(u,h,h[0]||null);i.onChange(p,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Ss(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),h=Ss(s,d,d[0]||null);c&&i.onChange(h,{action:"pop-value",removedValue:c})},i.getFocusedOptionId=function(s){return jd(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return l1(Zs(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return MA.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return L2(i.props,s)},i.getOptionValue=function(s){return Jl(i.props,s)},i.getStyles=function(s,u){var c=i.props.unstyled,d=$8[s](u,c);d.boxSizing="border-box";var h=i.props.styles[s];return h?h(d,u):d},i.getClassNames=function(s,u){var c,d;return(c=(d=i.props.classNames)[s])===null||c===void 0?void 0:c.call(d,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return e8(i.props)},i.buildCategorizedOptions=function(){return Zs(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return D2(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:Z({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,c=u.isMulti,d=u.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!c}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&pc(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,c=u&&u.item(0);c&&(i.initialTouchX=c.clientX,i.initialTouchY=c.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-i.initialTouchX),h=Math.abs(c.clientY-i.initialTouchY),p=5;i.userIsDragging=d>p||h>p}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,c=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(c,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),c=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:c>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return N2(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,c=u.isMulti,d=u.backspaceRemovesValue,h=u.escapeClearsValue,p=u.inputValue,g=u.isClearable,y=u.isDisabled,w=u.menuIsOpen,f=u.onKeyDown,m=u.tabSelectsValue,x=u.openMenuOnFocus,S=i.state,E=S.focusedOption,k=S.focusedValue,_=S.selectValue;if(!y&&!(typeof f=="function"&&(f(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!c||p)return;i.focusValue("previous");break;case"ArrowRight":if(!c||p)return;i.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(k)i.removeValue(k);else{if(!d)return;c?i.popValue():g&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!m||!E||x&&i.isOptionSelected(E,_))return;i.selectOption(E);break;case"Enter":if(s.keyCode===229)break;if(w){if(!E||i.isComposing)return;i.selectOption(E);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:p}),i.onMenuClose()):g&&h&&i.clearValue();break;case" ":if(p)return;if(!w){i.openMenu("first");break}if(!E)return;i.selectOption(E);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++V8),i.state.selectValue=Yv(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=jd(o,a[l])}return i}return aA(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&qv(this.menuListRef,this.focusedOptionRef),T8()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(qv(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),c=i==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,c=-1;if(a.length){switch(i){case"previous":s===0?c=0:s===-1?c=u:c=s-1;break;case"next":s>-1&&s<u&&(c=s+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:a[c]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme($d):Z(Z({},$d),this.props.theme):$d}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,h=d.isMulti,p=d.isRtl,g=d.options,y=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:y,isMulti:h,isRtl:p,options:g,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return R2(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return A2(this.props,i,o)}},{key:"filterOption",value:function(i,o){return F2(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,c=i.form,d=i.menuIsOpen,h=i.required,p=this.getComponents(),g=p.Input,y=this.state,w=y.inputIsHidden,f=y.ariaSelection,m=this.commonProps,x=l||this.getElementId("input"),S=Z(Z(Z({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":h,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(f==null?void 0:f.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?b.createElement(g,Q({},m,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:s},S)):b.createElement(h8,Q({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Zl,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:c,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,h=this.commonProps,p=this.props,g=p.controlShouldRenderValue,y=p.isDisabled,w=p.isMulti,f=p.inputValue,m=p.placeholder,x=this.state,S=x.selectValue,E=x.focusedValue,k=x.isFocused;if(!this.hasValue()||!g)return f?null:b.createElement(d,Q({},h,{key:"placeholder",isDisabled:y,isFocused:k,innerProps:{id:this.getElementId("placeholder")}}),m);if(w)return S.map(function(C,O){var M=C===E,$="".concat(i.getOptionLabel(C),"-").concat(i.getOptionValue(C));return b.createElement(a,Q({},h,{components:{Container:l,Label:s,Remove:u},isFocused:M,isDisabled:y,key:$,index:O,removeProps:{onClick:function(){return i.removeValue(C)},onTouchEnd:function(){return i.removeValue(C)},onMouseDown:function(L){L.preventDefault()}},data:C}),i.formatOptionLabel(C,"value"))});if(f)return null;var _=S[0];return b.createElement(c,Q({},h,{data:_,isDisabled:y}),this.formatOptionLabel(_,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,Q({},a,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!o||!u)return null;var d={"aria-hidden":"true"};return b.createElement(o,Q({},a,{innerProps:d,isDisabled:s,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return b.createElement(a,Q({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,Q({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,h=o.NoOptionsMessage,p=o.Option,g=this.commonProps,y=this.state.focusedOption,w=this.props,f=w.captureMenuScroll,m=w.inputValue,x=w.isLoading,S=w.loadingMessage,E=w.minMenuHeight,k=w.maxMenuHeight,_=w.menuIsOpen,C=w.menuPlacement,O=w.menuPosition,M=w.menuPortalTarget,$=w.menuShouldBlockScroll,I=w.menuShouldScrollIntoView,L=w.noOptionsMessage,R=w.onMenuScrollToTop,D=w.onMenuScrollToBottom;if(!_)return null;var F=function(U,H){var Y=U.type,q=U.data,J=U.isDisabled,fe=U.isSelected,be=U.label,ie=U.value,Ie=y===q,Be=J?void 0:function(){return i.onOptionHover(q)},Ve=J?void 0:function(){return i.selectOption(q)},ii="".concat(i.getElementId("option"),"-").concat(H),vt={id:ii,onClick:Ve,onMouseMove:Be,onMouseOver:Be,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:fe};return b.createElement(p,Q({},g,{innerProps:vt,data:q,isDisabled:J,isSelected:fe,key:ii,label:be,type:Y,value:ie,isFocused:Ie,innerRef:Ie?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(U.data,"menu"))},A;if(this.hasOptions())A=this.getCategorizedOptions().map(function(z){if(z.type==="group"){var U=z.data,H=z.options,Y=z.index,q="".concat(i.getElementId("group"),"-").concat(Y),J="".concat(q,"-heading");return b.createElement(a,Q({},g,{key:q,data:U,options:H,Heading:l,headingProps:{id:J,data:z.data},label:i.formatGroupLabel(z.data)}),z.options.map(function(fe){return F(fe,"".concat(Y,"-").concat(fe.index))}))}else if(z.type==="option")return F(z,"".concat(z.index))});else if(x){var P=S({inputValue:m});if(P===null)return null;A=b.createElement(d,g,P)}else{var j=L({inputValue:m});if(j===null)return null;A=b.createElement(h,g,j)}var N={minMenuHeight:E,maxMenuHeight:k,menuPlacement:C,menuPosition:O,menuShouldScrollIntoView:I},B=b.createElement(GA,Q({},g,N),function(z){var U=z.ref,H=z.placerProps,Y=H.placement,q=H.maxHeight;return b.createElement(s,Q({},g,N,{innerRef:U,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:Y}),b.createElement(b8,{captureEnabled:f,onTopArrive:R,onBottomArrive:D,lockEnabled:$},function(J){return b.createElement(u,Q({},g,{innerRef:function(be){i.getMenuListRef(be),J(be)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:q,focusedOption:y}),A)}))});return M||O==="fixed"?b.createElement(c,Q({},g,{appendTo:M,controlElement:this.controlRef,menuPlacement:C,menuPosition:O}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return b.createElement(_8,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var h=d.map(function(y){return i.getOptionValue(y)}).join(a);return b.createElement("input",{name:u,type:"hidden",value:h})}else{var p=d.length>0?d.map(function(y,w){return b.createElement("input",{key:"i-".concat(w),name:u,type:"hidden",value:i.getOptionValue(y)})}):b.createElement("input",{name:u,type:"hidden",value:""});return b.createElement("div",null,p)}else{var g=d[0]?this.getOptionValue(d[0]):"";return b.createElement("input",{name:u,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return b.createElement(l8,Q({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,c=u.className,d=u.id,h=u.isDisabled,p=u.menuIsOpen,g=this.state.isFocused,y=this.commonProps=this.getCommonProps();return b.createElement(l,Q({},y,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:h,isFocused:g}),this.renderLiveRegion(),b.createElement(o,Q({},y,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:h,isFocused:g,menuIsOpen:p}),b.createElement(s,Q({},y,{isDisabled:h}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(a,Q({},y,{isDisabled:h}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,h=o.instancePrefix,p=i.options,g=i.value,y=i.menuIsOpen,w=i.inputValue,f=i.isMulti,m=Yv(g),x={};if(a&&(g!==a.value||p!==a.options||y!==a.menuIsOpen||w!==a.inputValue)){var S=y?N8(i,m):[],E=y?l1(Zs(i,m),"".concat(h,"-option")):[],k=l?z8(o,m):null,_=B8(o,S),C=jd(E,_);x={selectValue:m,focusedOption:_,focusedOptionId:C,focusableOptionsWithIds:E,focusedValue:k,clearFocusValueOnUpdate:!1}}var O=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},M=u,$=c&&d;return c&&!$&&(M={value:Ss(f,m,m[0]||null),options:m,action:"initial-input-focus"},$=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(M=null),Z(Z(Z({},x),O),{},{prevProps:i,ariaSelection:M,prevWasFocused:$})}}]),n}(b.Component);z2.defaultProps=F8;var U8=b.forwardRef(function(e,t){var n=iA(e);return b.createElement(z2,Q({ref:t},n))}),Ea=U8;const H8=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,W8=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,G8=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>v.jsxs(H8,{children:[v.jsx(W8,{children:"Місто"}),v.jsx(Ea,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),Y8=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,q8=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,X8=({options:e=[],value:t,onChange:n,selectedCity:r})=>v.jsxs(Y8,{children:[v.jsx(q8,{children:"Спосіб доставки"}),v.jsx(Ea,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),Dd=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Ld=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,K8=({deliveryMethod:e,officeOptions:t,ukrOfficeOptions:n,selectedOffice:r,selectedUkrOffice:i,setSelectedOffice:o,setSelectedUkrOffice:a})=>e==="nova"?v.jsxs(Dd,{children:[v.jsx(Ld,{children:"Відділення Нової пошти"}),v.jsx(Ea,{options:t,onChange:l=>o(l),value:r,placeholder:"Оберіть відділення..."})]}):e==="ukr"?v.jsxs(Dd,{children:[v.jsx(Ld,{children:"Відділення Укрпошти"}),v.jsx(Ea,{options:n,onChange:l=>a(l),value:i,placeholder:"Оберіть відділення..."})]}):e==="pickup"?v.jsxs(Dd,{children:[v.jsx(Ld,{children:"Самовивіз"}),v.jsxs("div",{style:{backgroundColor:"#f9f9f9",padding:"10px",borderRadius:"6px",border:"1px solid #ddd",fontSize:"14px",color:"#333",lineHeight:"1.4"},children:[v.jsx("p",{children:"Ви обрали самовивіз."}),v.jsx("p",{children:"Адреса магазину: вул. Казармена 6Г, Київ"}),v.jsx("p",{children:"Графік роботи: Вт, Ср, Пт, Сб, Нд — 11:00–20:00; вихідні: Пн, Чт"}),v.jsx("p",{children:"Телефон: +380 99 999 99"})]})]}):null,Z8=T.div`
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
`;const Q8=T.button`
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
`,J8=T.ul`
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
`,eF=T.li`
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
`,tF=T.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,nF=T.div`
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
`,rF=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>v.jsxs(Z8,{children:[v.jsx("h3",{children:"Ваше замовлення"}),v.jsx(J8,{children:e.map((o,a)=>{var l,s;return v.jsxs(eF,{children:[v.jsx(tF,{src:((s=(l=o.images)==null?void 0:l[0])==null?void 0:s.url)||_a,alt:o.name}),v.jsxs(nF,{children:[v.jsx("p",{className:"item-name",children:o.name}),v.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),v.jsxs("span",{className:"item-total",children:[o.price*o.quantity," грн"]})]},`${o.id}-${a}`)})}),v.jsxs("div",{className:"summary-row",children:[v.jsxs("span",{children:["Товари (",n,")"]}),v.jsxs("span",{children:[t," грн"]})]}),v.jsxs("div",{className:"summary-row",children:[v.jsx("span",{children:"Доставка"}),v.jsx("span",{children:"За тарифами перевізника"})]}),v.jsx("hr",{}),v.jsxs("div",{className:"total",children:[v.jsx("span",{children:"Всього до сплати:"}),v.jsxs("span",{children:[t," грн"]})]}),v.jsx(Q8,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&v.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var B2={exports:{}};function iF(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Rd=iF(b),oF=vu;function aF(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Mp(){return(Mp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function sF(e,t){e.prototype=Object.create(t.prototype),aF(e.prototype.constructor=e,t)}function lF(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function ci(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var uF=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],c=0;(s=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},c1=uF;function d1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function cF(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var dF={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},fF="_";function f1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=fF),n==null&&(n=dF),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Rt(e,t){return e.permanents.indexOf(t)!==-1}function hc(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Rt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function p1(e,t){return t.split("").every(function(n,r){return Rt(e,r)||!hc(e,r,n)})}function Lo(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Rt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Rt(e,o)&&hc(e,o,a)){i=o+1;break}}return i}function V2(e,t){return Lo(e,t)===e.mask.length}function Rn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Ip(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Rt(e,t.length);)t+=r[t.length];return t}if(t)return Ip(e,Rn(e,""),t,0);for(var o=0;o<r.length;o++)Rt(e,o)?t+=r[o]:t+=n;return t}function pF(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(c,d){return d<n||i<=d?c:Rt(e,d)?a[d]:o}).join("");for(var u=i;u<s.length;u++)Rt(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Rn(e,t)}function Ip(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=V2(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;p=u,Rt(e,h=r)&&p!==i[h];){if(r>=t.length&&(t+=i[r]),c=u,d=r,o&&Rt(e,d)&&c===o)return!0;if(++r>=i.length)return!1}var c,d,h,p;return!hc(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),Rn(e,t)):o||(t+=u),++r<i.length)}),t}function hF(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;c=s,Rt(e,u=r)&&c!==i[u];)if(++r>=i.length)return!1;var u,c;return(hc(e,r,s)||s===o)&&r++,r<i.length}),r-l}function mF(e,t){for(var n=t;0<=n;--n)if(!Rt(e,n))return n;return null}function qo(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Rt(e,r))return r;return null}function Ad(e){return e||e===0?e+"":""}function gF(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",c=0,d=0,h=Math.min(i.start,n.start);return n.end>i.start?d=(c=hF(e,r,u=s.slice(i.start,n.end),h))?i.length:0:s.length<r.length&&(d=r.length-s.length),s=r,d&&(d===1&&!i.length&&(h=i.start===n.start?qo(e,n.start):mF(e,n.start)),s=pF(e,s,h,d)),s=Ip(e,s,u,h),(h+=c)>=o.length?h=o.length:h<a.length&&!c?h=a.length:h>=a.length&&h<l&&c&&(h=qo(e,h)),u||(u=null),{value:s=Rn(e,s),enteredString:u,selection:{start:h,end:h}}}function vF(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function yt(e){return typeof e=="function"}function yF(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function U2(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function h1(e){return(U2()?yF():function(){return setTimeout(e,1e3/60)})(e)}function Fd(e){(U2()||clearTimeout)(e)}var xF=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=h1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Fd(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var g=oF.findDOMNode(ci(ci(i))),y=typeof window<"u"&&g instanceof window.Element;if(g&&!y)return null;if(g.nodeName!=="INPUT"&&(g=g.querySelector("input")),!g)throw new Error("react-input-mask: inputComponent doesn't contain input node");return g},i.getInputValue=function(){var g=i.getInputDOMNode();return g?g.value:null},i.setInputValue=function(g){var y=i.getInputDOMNode();y&&(i.value=g,y.value=g)},i.setCursorToEnd=function(){var g=Lo(i.maskOptions,i.value),y=qo(i.maskOptions,g);y!==null&&i.setCursorPosition(y)},i.setSelection=function(g,y,w){w===void 0&&(w={});var f=i.getInputDOMNode(),m=i.isFocused();f&&m&&(w.deferred||d1(f,g,y),i.selectionDeferId!==null&&Fd(i.selectionDeferId),i.selectionDeferId=h1(function(){i.selectionDeferId=null,d1(f,g,y)}),i.previousSelection={start:g,end:y,length:Math.abs(y-g)})},i.getSelection=function(){return cF(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(g){i.setSelection(g,g)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var g=i.maskOptions,y=g.mask,w=g.maskChar,f=g.permanents,m=g.formatChars;return{mask:y,maskChar:w,permanents:f,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:m}},i.isInputAutofilled=function(g,y,w,f){var m=i.getInputDOMNode();try{if(m.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||f.end<w.length&&y.end===g.length},i.onChange=function(g){var y=ci(ci(i)).beforePasteState,w=ci(ci(i)).previousSelection,f=i.props.beforeMaskedValueChange,m=i.getInputValue(),x=i.value,S=i.getSelection();i.isInputAutofilled(m,S,x,w)&&(x=Rn(i.maskOptions,""),w={start:0,end:0,length:0}),y&&(w=y.selection,x=y.value,S={start:w.start+m.length,end:w.start+m.length,length:0},m=x.slice(0,w.start)+m+x.slice(w.end),i.beforePasteState=null);var E=gF(i.maskOptions,m,S,x,w),k=E.enteredString,_=E.selection,C=E.value;if(yt(f)){var O=f({value:C,selection:_},{value:x,selection:w},k,i.getBeforeMaskedValueChangeConfig());C=O.value,_=O.selection}i.setInputValue(C),yt(i.props.onChange)&&i.props.onChange(g),i.isWindowsPhoneBrowser?i.setSelection(_.start,_.end,{deferred:!0}):i.setSelection(_.start,_.end)},i.onFocus=function(g){var y=i.props.beforeMaskedValueChange,w=i.maskOptions,f=w.mask,m=w.prefix;if(i.focused=!0,i.mounted=!0,f){if(i.value)Lo(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var x=Rn(i.maskOptions,m),S=Rn(i.maskOptions,x),E=Lo(i.maskOptions,S),k=qo(i.maskOptions,E),_={start:k,end:k};if(yt(y)){var C=y({value:S,selection:_},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=C.value,_=C.selection}var O=S!==i.getInputValue();O&&i.setInputValue(S),O&&yt(i.props.onChange)&&i.props.onChange(g),i.setSelection(_.start,_.end)}i.runSaveSelectionLoop()}yt(i.props.onFocus)&&i.props.onFocus(g)},i.onBlur=function(g){var y=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&p1(i.maskOptions,i.value)){var f="";yt(y)&&(f=y({value:f,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var m=f!==i.getInputValue();m&&i.setInputValue(f),m&&yt(i.props.onChange)&&i.props.onChange(g)}yt(i.props.onBlur)&&i.props.onBlur(g)},i.onMouseDown=function(g){if(!i.focused&&document.addEventListener){i.mouseDownX=g.clientX,i.mouseDownY=g.clientY,i.mouseDownTime=new Date().getTime();var y=function w(f){if(document.removeEventListener("mouseup",w),i.focused){var m=Math.abs(f.clientX-i.mouseDownX),x=Math.abs(f.clientY-i.mouseDownY),S=Math.max(m,x),E=new Date().getTime()-i.mouseDownTime;(S<=10&&E<=200||S<=5&&E<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",y)}yt(i.props.onMouseDown)&&i.props.onMouseDown(g)},i.onPaste=function(g){yt(i.props.onPaste)&&i.props.onPaste(g),g.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(g){i.props.children==null&&yt(i.props.inputRef)&&i.props.inputRef(g)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,c=r.defaultValue,d=r.value;i.maskOptions=f1(o,a,l),c==null&&(c=""),d==null&&(d=c);var h=Ad(d);if(i.maskOptions.mask&&(s||h)&&(h=Rn(i.maskOptions,h),yt(u))){var p=r.value;r.value==null&&(p=c),h=u({value:h,selection:null},{value:p=Ad(p),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=h,i}sF(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=vF(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,c=this.maskOptions,d=a||this.isFocused(),h=this.props.value!=null,p=h?Ad(this.props.value):this.value,g=r?r.start:null;if(this.maskOptions=f1(l,s,u),this.maskOptions.mask){!c.mask&&this.isFocused()&&this.runSaveSelectionLoop();var y=this.maskOptions.mask&&this.maskOptions.mask!==c.mask;if(c.mask||h||(p=this.getInputValue()),(y||this.maskOptions.mask&&(p||d))&&(p=Rn(this.maskOptions,p)),y){var w=Lo(this.maskOptions,p);(g===null||w<g)&&(g=V2(this.maskOptions,p)?w:qo(this.maskOptions,w))}!this.maskOptions.mask||!p1(this.maskOptions,p)||d||h&&this.props.value||(p="");var f={start:g,end:g};if(yt(o)){var m=o({value:p,selection:f},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());p=m.value,f=m.selection}this.value=p;var x=this.getInputValue()!==this.value;x?(this.setInputValue(this.value),this.forceUpdate()):y&&this.forceUpdate();var S=!1;f.start!=null&&f.end!=null&&(S=!r||r.start!==f.start||r.end!==f.end),(S||x)&&this.setSelection(f.start,f.end)}else c.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Fd(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=lF(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){yt(o)||c1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Mp({},a);l.forEach(function(c){return delete s[c]}),r=o(s),l.filter(function(c){return r.props[c]!=null&&r.props[c]!==a[c]}).length&&c1(!1)}else r=Rd.createElement("input",Mp({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Rd.cloneElement(r,u)},t}(Rd.Component),bF=xF;B2.exports=bF;var wF=B2.exports;const SF=jp(wF);T.div`
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
`;const Nd=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,zd=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Bd=T.input`
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
`;const _F=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return v.jsxs(v.Fragment,{children:[v.jsx("h3",{children:"Контактні дані"}),v.jsxs(Nd,{children:[v.jsx(zd,{children:"Прізвище та ім’я"}),v.jsx(Bd,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&v.jsx(Vd,{children:n.fullName})]}),v.jsxs(Nd,{children:[v.jsx(zd,{children:"Номер телефону"}),v.jsx(SF,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>v.jsx(Bd,{...i,type:"tel"})}),n.phone&&v.jsx(Vd,{children:n.phone})]}),v.jsxs(Nd,{children:[v.jsx(zd,{children:"E-mail"}),v.jsx(Bd,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&v.jsx(Vd,{children:n.email})]})]})},EF=T.div`
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
`;const CF=T.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,kF=T.div`
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
`;const TF=T.button`
`,PF=[{city:"Київ",address:"вул. Хрещатик, 1"},{city:"Київ",address:"вул. Січових Стрільців, 10"},{city:"Львів",address:"просп. Свободи, 5"}],OF=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return v.jsxs("div",{style:{marginBottom:"20px"},children:[v.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),v.jsx(Ea,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&v.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},m1={}.VITE_NP_API_KEY,g1="https://api.novaposhta.ua/v2.0/json/",MF=()=>{const e=_n(B=>B.cart.items),t=Qi(),[n,r]=b.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[i,o]=b.useState(""),[a,l]=b.useState(null),[s,u]=b.useState(null),[c,d]=b.useState(null),[h,p]=b.useState(null),[g,y]=b.useState([]),[w,f]=b.useState([]),[m,x]=b.useState([]),[S,E]=b.useState(""),[k,_]=b.useState(null),C=e.reduce((B,z)=>B+z.price*z.quantity,0),O=e.reduce((B,z)=>B+z.quantity,0),$=(()=>{const B=new Date().getFullYear().toString().slice(-2),z=Date.now().toString().slice(-4),U=Math.floor(100+Math.random()*900);return`${B}${z}${U}`})();console.log($),b.useEffect(()=>{if(i.length<2)return;const B=setTimeout(async()=>{const U=await(await fetch(g1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:m1,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:i}})})).json();y(U.data.map(H=>({value:H.Ref,label:H.Description})))},500);return()=>clearTimeout(B)},[i]),b.useEffect(()=>{if(!a||s!=="nova")return;(async()=>{const U=await(await fetch(g1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:m1,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:a.value}})})).json();f(U.data.map(H=>({value:H.Ref,label:H.Description})))})()},[a,s]),b.useEffect(()=>{if(s!=="ukr"||!a)return;const B=PF.filter(z=>z.city===a.label).filter(z=>z.address.toLowerCase().includes(S.toLowerCase())).slice(0,20);x(B.map((z,U)=>({value:U,label:z.address})))},[a,s,S]);const I=B=>{l(B),r(z=>({...z,city:(B==null?void 0:B.label)||"",postOffice:""})),u(null),d(null),p(null)},L=()=>{const B={};return n.fullName.trim().split(" ").length<2&&(B.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||(B.email="Некоректний email"),n.phone.replace(/\D/g,"").length<12&&(B.phone="Номер неповний"),a||(B.city=!0),s==="nova"&&!c&&(B.postOffice=!0),s==="ukr"&&!h&&(B.postOffice=!0),s||(B.delivery=!0),k||(B.payment=!0),B},R=b.useMemo(L,[n,s,c,h,a,k]),D=Object.keys(R).length===0&&e.length>0,[F,A]=b.useState(!1),P=async B=>{if(B.preventDefault(),!k){alert("Оберіть спосіб оплати");return}try{if(A(!0),await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:n.fullName,phone:n.phone,email:n.email,city:n.city,products:e==null?void 0:e.map(U=>({id:U.id,name:U.name,quantity:U.quantity})),status_order:"pending",order_number:$,payment_method:k==="liqpay"?"Онлайн (LiqPay)":"Післяплата",delivery_method:s==="nova"?"Нова Пошта":s==="ukr"?"УкрПошта":"Самовивіз",delivery_address:s==="nova"?c==null?void 0:c.label:s==="ukr"?h==null?void 0:h.label:"Самовивіз"}})}),console.log("ORDER:",$),console.log("AMOUNT:",C),k==="liqpay"){const U=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:C,order_number:$})}),{data:H,signature:Y}=await U.json(),q=document.createElement("form");q.method="POST",q.action="https://www.liqpay.ua/api/3/checkout",q.innerHTML=`
        <input type="hidden" name="data" value="${H}" />
        <input type="hidden" name="signature" value="${Y}" />
      `,document.body.appendChild(q),q.requestSubmit();return}const z={...n,city:a.label,deliveryMethod:s==="nova"?"Нова Пошта":s==="ukr"?"УкрПошта":"Самовивіз",address:s==="nova"?c==null?void 0:c.label:s==="ukr"?h==null?void 0:h.label:"Самовивіз",items:e,total:C,orderNumber:$,paymentMethod:k};t("/order-confirmation",{state:{order:z}})}catch(z){console.error(z),alert("Помилка оформлення")}finally{A(!1)}},j=b.useMemo(()=>{const B=[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}];return(a==null?void 0:a.label)==="Київ"&&B.push({value:"pickup",label:"Самовивіз"}),B},[a]),N=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"}];return v.jsx(EF,{children:v.jsxs(CF,{children:[v.jsxs(kF,{children:[v.jsx(_F,{formData:n,setFormData:r,errors:R}),v.jsx(G8,{cityOptions:g,selectedCity:a,onChange:I,onInputChange:o}),v.jsx(X8,{options:j,value:s,onChange:u,selectedCity:a}),v.jsx(K8,{deliveryMethod:s,officeOptions:w,ukrOfficeOptions:m,selectedOffice:c,selectedUkrOffice:h,setSelectedOffice:d,setSelectedUkrOffice:p,setUkrSearch:E}),v.jsx(OF,{options:N,value:k,onChange:_,error:R.payment})]}),v.jsx(rF,{cartItems:e,totalAmount:C,totalQuantity:O,isFormValid:D,handleSubmit:P}),v.jsx(TF,{onClick:P,disabled:!D,style:{opacity:D?1:.5,cursor:D?"pointer":"not-allowed"},children:F?"Переходимо до оплати...":"Оплатити"})]})})},Ud=T.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,IF=T.h1`
font-family: var(--second-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,Mr=T.p`
font-family: var(--second-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,$F=T.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,v1=T.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,jF=T.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,DF=T.li`
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
`,LF=T.div`
  background: #fff4e5; 
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #ffe3c1;
`,RF=T.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,_s=T.button`
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
`,AF=()=>{var l;const e=Qi(),[t]=SE(),n=t.get("orderId"),[r,i]=b.useState(null),[o,a]=b.useState(!0);return console.log(r),b.useEffect(()=>{console.log("Отриманий orderId з URL:",n),n&&fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${n}&populate=*`).then(s=>s.json()).then(s=>{s.data&&s.data.length>0&&i(s.data[0]),a(!1)}).catch(()=>a(!1))},[n]),console.log(r),o?v.jsx(Ud,{children:v.jsx(Mr,{children:"Завантаження..."})}):r?v.jsxs(Ud,{children:[v.jsx(IF,{children:"Дякуємо за ваше замовлення!"}),v.jsxs(Mr,{children:["Ваше замовлення ",v.jsxs("strong",{children:["№",r.order_number]})," успішно прийняте."]}),v.jsx(Mr,{children:"Ми зв’яжемось з Вами в найближчий час"}),v.jsxs($F,{children:[v.jsx(v1,{children:"Деталі замовлення:"}),v.jsx(jF,{children:(l=r.products)==null?void 0:l.map(s=>v.jsx(DF,{children:v.jsxs("span",{className:"item-info",children:[s.name," (x",s.quantity,")"]})},s.id))}),v.jsxs(Mr,{children:[v.jsx("strong",{children:"Спосіб доставки:"})," ",r.deliveryMethod]}),v.jsxs(Mr,{children:[v.jsx("strong",{children:"Адреса отримання:"})," ",r.city,", ",r.delivery_address]})]}),r.paymentMethod==="online"&&v.jsxs(LF,{children:[v.jsx(v1,{children:"Оплата"}),v.jsx(Mr,{style:{marginBottom:"15px"},children:"Натисніть кнопку нижче для миттєвої оплати:"}),v.jsx(_s,{primary:!0,onClick:()=>window.location.href=r.paymentLink,children:"Оплатити зараз"})]}),v.jsxs(RF,{children:[v.jsx(_s,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),v.jsx(_s,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):v.jsxs(Ud,{children:[v.jsx(Mr,{children:"Замовлення не знайдено або виникла помилка."}),v.jsx(_s,{onClick:()=>e("/"),children:"На головну"})]})},FF=T.section`
  background-color: var(--second-background);
`,NF=T.div`
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
`,zF=T.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,BF=T.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,VF=T.p`

  font-size: 16px;
  color: #666;
`,UF=T.section`
  margin-bottom: 50px;
`,HF=T.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,WF=T.section`
  margin-bottom: 60px;
`,GF=T.h2`
  margin-bottom: 30px;
`,YF=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Es=T.div`
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
`,qF=()=>v.jsxs(FF,{children:[v.jsxs(NF,{children:[v.jsxs(zF,{children:[v.jsx(BF,{children:"Про Дідів Хлів"}),v.jsx(VF,{children:"Даємо друге життя якісним велозапчастинам"})]}),v.jsxs(UF,{children:[v.jsx(HF,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),v.jsx(OS,{})]}),v.jsxs(WF,{children:[v.jsx(GF,{children:"Наша майстерня"}),v.jsxs(YF,{children:[v.jsx(Es,{color:"#e2e2e2",children:"Фото майстерні"}),v.jsx(Es,{color:"#d1d1d1",children:"Процес діагностики"}),v.jsx(Es,{color:"#bcbcbc",children:"Склад запчастин"}),v.jsx(Es,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),XF=()=>{const{pathname:e}=Zi();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},KF=T.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,ZF=T.div`
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
`,QF=T.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,JF=T.p`
  color: #585555;
  margin-bottom: 40px;
`,eN=T.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,tN=T.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,Cs=T.div`
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
`,nN=T.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,rN=T.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,iN=T.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,oN=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,y1=T.a`
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
`;const aN=T.div`
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

 
`,sN=()=>v.jsx(KF,{children:v.jsxs(ZF,{children:[v.jsx(QF,{children:"Контакти"}),v.jsx(JF,{children:"Зв’яжіться з нами для консультації або замовлення"}),v.jsxs(eN,{children:[v.jsxs(tN,{children:[v.jsxs(Cs,{children:[v.jsx("h3",{children:"Адреса"}),v.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),v.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),v.jsxs(Cs,{children:[v.jsx("h3",{children:"Телефон"}),v.jsx("p",{children:"+38 (097) 123-45-67"})]}),v.jsxs(Cs,{children:[v.jsx("h3",{children:"Email"}),v.jsx("p",{children:"didivhliv.com"})]}),v.jsxs(Cs,{children:[v.jsx("h3",{children:"Графік роботи"}),v.jsx("p",{children:"З 11:00 - 20:00"}),v.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),v.jsxs(nN,{children:[v.jsx(rN,{children:"Ми в соцмережах"}),v.jsx(iN,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),v.jsxs(oN,{children:[v.jsxs(y1,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[v.jsx("svg",{width:"20px",children:v.jsx("use",{href:`${cn}#icon-instagram`})}),v.jsx("span",{children:"Instagram"})]}),v.jsxs(y1,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[v.jsx("svg",{width:"20px",children:v.jsx("use",{href:`${cn}#icon-telegram`})}),v.jsx("span",{children:"Telegram"})]})]}),v.jsx(aN,{children:"Приєднуйся до спільноти!"})]})]})]})}),lN=T.section`
  background-color:  var(--second-background);
`,uN=T.div`
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
  
`,cN=T.h1`

    font-size: 32px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
margin-bottom: 20px;

`,dN=T.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  gap: 24px;
  width: 100%;
  max-width: 750px;
  padding: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1340px;
    margin-left: 30px;
    padding-left: 0;
    padding-right: 0;
  }
`,fN=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding-bottom: 30px;
  position: relative;

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
`,pN=T.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;

`,hN=T.div`
  padding: 16px;
    
`,mN=T.p`
  font-family: var(--second-font);
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 8px;
`,gN=T.p`
  font-size: 16px;
  color: #555;
`;T.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;T.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;const vN=T.div.attrs({className:"card-buttons"})`
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
    transform: translateY(15px);
    transition: all 0.3s;
  }
`,yN=T.button`
  padding: 6px 5px;
  border-radius: 50px;
 border:none;
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
`,xN=T.button`
  padding: 6px 5px;
  border-radius: 50px;
 border:none;
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
`,bN=T.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
`,Hd=T.button`
  padding: 6px 12px;
  border: 1px solid #ccc;
  background-color: ${e=>e.active?"#ff7a00":"#fff"};
  color: ${e=>e.active?"#fff":"#000"};
  font-weight: ${e=>e.active?"bold":"normal"};
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    background-color: #ff9c3b;
    color: #fff;
  }
`,wN=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),[i,o]=b.useState(1),a=24,l=Qi(),s=ni(),u=i*a,c=u-a,d=e.slice(c,u),h=Math.ceil(e.length/a);b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[i]),b.useEffect(()=>{(async()=>{const f=new Date,m=new Date;m.setDate(f.getDate()-7);const x=m.toISOString();try{r(!0);const S=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${x}`);if(!S.ok)throw new Error(`HTTP error! Status: ${S.status}`);const E=await S.json();t(E.data)}catch(S){console.error("Помилка при завантаженні продуктів:",S)}finally{r(!1)}})()},[]);const p=_n(w=>w.favorites.items),g=(w,f)=>{f.stopPropagation(),s(Fa({...w,quantity:1})),ee.success(`${w.name} додано в кошик!`)},y=(w,f)=>{f.stopPropagation();const m=p.some(x=>x.id===w.id);s(Ba(w)),m?ee.warning(`${w.name} видалено з обраного`):ee.info(`${w.name} додано в обране`)};return n?v.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:v.jsx(Ru,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):v.jsxs(lN,{children:[v.jsxs(uN,{children:[v.jsx(oo,{autoClose:1500}),v.jsx(cN,{children:"Нові товари"}),v.jsx(dN,{children:d.map(w=>{var m,x;const f=p.some(S=>S.id===w.id);return v.jsxs(fN,{onClick:()=>l(`/product/${w.id}`),children:[v.jsx(pN,{src:(x=(m=w.images)==null?void 0:m[0])==null?void 0:x.url,alt:w.name}),v.jsxs(hN,{children:[v.jsx(mN,{children:w.name}),v.jsxs(gN,{children:[w.price," грн"]})]}),v.jsxs(vN,{children:[v.jsx(yN,{onClick:S=>g(w,S),children:v.jsx(ja,{size:24,color:"black"})}),v.jsx(xN,{onClick:S=>y(w,S),children:v.jsx(Vh,{size:24,fill:f?"#ff4d4f":"none",color:f?"#ff4d4f":"#000000"})})]})]},w.id)})}),v.jsxs(bN,{children:[v.jsx(Hd,{onClick:()=>o(w=>Math.max(w-1,1)),disabled:i===1,children:"Назад"}),Array.from({length:h},(w,f)=>v.jsx(Hd,{onClick:()=>o(f+1),active:i===f+1,children:f+1},f)),v.jsx(Hd,{onClick:()=>o(w=>Math.min(w+1,h)),disabled:i===h,children:"Вперед"})]})]})," "]})};function SN(){return v.jsxs(PM,{children:[v.jsx(c4,{}),v.jsx(XF,{}),v.jsx(b.Suspense,{fallback:v.jsx(l4,{}),children:v.jsx(dE,{children:v.jsxs(ut,{path:"/",element:v.jsx(tO,{}),children:[v.jsx(ut,{index:!0,element:v.jsx(G$,{})}),v.jsx(ut,{path:"catalog",element:v.jsx(SM,{})}),v.jsx(ut,{path:"/catalog/:category",element:v.jsx(qj,{})}),v.jsx(ut,{path:"/product/:id",element:v.jsx(KL,{})}),v.jsx(ut,{path:"cart",element:v.jsx(_R,{})}),v.jsx(ut,{path:"favorite",element:v.jsx(WR,{})}),v.jsx(ut,{path:"/catalog/new",element:v.jsx(wN,{})}),v.jsx(ut,{path:"checkout",element:v.jsx(MF,{})}),v.jsx(ut,{path:"/order-confirmation",element:v.jsx(AF,{})}),v.jsx(ut,{path:"about",element:v.jsx(qF,{})}),v.jsx(ut,{path:"contacts",element:v.jsx(sN,{})}),v.jsx(ut,{path:"delivery",element:v.jsx(ZR,{})}),v.jsx(ut,{path:"*",element:v.jsx(TM,{})})]})})})]})}var Dm="persist:",H2="persist/FLUSH",Lm="persist/REHYDRATE",W2="persist/PAUSE",G2="persist/PERSIST",Y2="persist/PURGE",q2="persist/REGISTER",_N=-1;function Qs(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Qs=function(n){return typeof n}:Qs=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Qs(e)}function x1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function EN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?x1(n,!0).forEach(function(r){CN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function CN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kN(e,t,n,r){r.debug;var i=EN({},n);return e&&Qs(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function TN(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:Dm).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(E){return E}:typeof e.serialize=="function"?l=e.serialize:l=PN;var s=e.writeFailHandler||null,u={},c={},d=[],h=null,p=null,g=function(E){Object.keys(E).forEach(function(k){f(k)&&u[k]!==E[k]&&d.indexOf(k)===-1&&d.push(k)}),Object.keys(u).forEach(function(k){E[k]===void 0&&f(k)&&d.indexOf(k)===-1&&u[k]!==void 0&&d.push(k)}),h===null&&(h=setInterval(y,i)),u=E};function y(){if(d.length===0){h&&clearInterval(h),h=null;return}var S=d.shift(),E=r.reduce(function(k,_){return _.in(k,S,u)},u[S]);if(E!==void 0)try{c[S]=l(E)}catch(k){console.error("redux-persist/createPersistoid: error serializing state",k)}else delete c[S];d.length===0&&w()}function w(){Object.keys(c).forEach(function(S){u[S]===void 0&&delete c[S]}),p=a.setItem(o,l(c)).catch(m)}function f(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function m(S){s&&s(S)}var x=function(){for(;d.length!==0;)y();return p||Promise.resolve()};return{update:g,flush:x}}function PN(e){return JSON.stringify(e)}function ON(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Dm).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=MN,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,c){return c.out(u,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function MN(e){return JSON.parse(e)}function IN(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Dm).concat(e.key);return t.removeItem(n,$N)}function $N(e){}function b1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function On(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?b1(n,!0).forEach(function(r){jN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function DN(e,t){if(e==null)return{};var n=LN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function LN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var RN=5e3;function X2(e,t){var n=e.version!==void 0?e.version:_N;e.debug;var r=e.stateReconciler===void 0?kN:e.stateReconciler,i=e.getStoredState||ON,o=e.timeout!==void 0?e.timeout:RN,a=null,l=!1,s=!0,u=function(d){return d._persist.rehydrated&&a&&!s&&a.update(d),d};return function(c,d){var h=c||{},p=h._persist,g=DN(h,["_persist"]),y=g;if(d.type===G2){var w=!1,f=function(C,O){w||(d.rehydrate(e.key,C,O),w=!0)};if(o&&setTimeout(function(){!w&&f(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=TN(e)),p)return On({},t(y,d),{_persist:p});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(_){var C=e.migrate||function(O,M){return Promise.resolve(O)};C(_,n).then(function(O){f(O)},function(O){f(void 0,O)})},function(_){f(void 0,_)}),On({},t(y,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===Y2)return l=!0,d.result(IN(e)),On({},t(y,d),{_persist:p});if(d.type===H2)return d.result(a&&a.flush()),On({},t(y,d),{_persist:p});if(d.type===W2)s=!0;else if(d.type===Lm){if(l)return On({},y,{_persist:On({},p,{rehydrated:!0})});if(d.key===e.key){var m=t(y,d),x=d.payload,S=r!==!1&&x!==void 0?r(x,c,m,e):m,E=On({},S,{_persist:On({},p,{rehydrated:!0})});return u(E)}}}if(!p)return t(c,d);var k=t(y,d);return k===y?c:u(On({},k,{_persist:p}))}}function w1(e){return NN(e)||FN(e)||AN()}function AN(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function FN(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function NN(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function S1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function $p(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?S1(n,!0).forEach(function(r){zN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K2={registry:[],bootstrapped:!1},BN=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:K2,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case q2:return $p({},t,{registry:[].concat(w1(t.registry),[n.key])});case Lm:var r=t.registry.indexOf(n.key),i=w1(t.registry);return i.splice(r,1),$p({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function VN(e,t,n){var r=n||!1,i=sm(BN,K2,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:q2,key:u})},a=function(u,c,d){var h={type:Lm,payload:c,err:d,key:u};e.dispatch(h),i.dispatch(h),r&&l.getState().bootstrapped&&(r(),r=!1)},l=$p({},i,{purge:function(){var u=[];return e.dispatch({type:Y2,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:H2,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){e.dispatch({type:W2})},persist:function(){e.dispatch({type:G2,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var Rm={},Am={};Am.__esModule=!0;Am.default=WN;function Js(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Js=function(n){return typeof n}:Js=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Js(e)}function Wd(){}var UN={getItem:Wd,setItem:Wd,removeItem:Wd};function HN(e){if((typeof self>"u"?"undefined":Js(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function WN(e){var t="".concat(e,"Storage");return HN(t)?self[t]:UN}Rm.__esModule=!0;Rm.default=qN;var GN=YN(Am);function YN(e){return e&&e.__esModule?e:{default:e}}function qN(e){var t=(0,GN.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var Fm=void 0,XN=KN(Rm);function KN(e){return e&&e.__esModule?e:{default:e}}var ZN=(0,XN.default)("local");Fm=ZN;const QN={key:"cart",storage:Fm},JN={key:"favorites",storage:Fm},ez=X2(QN,s$),tz=X2(JN,Gj),Z2=HI({reducer:{cart:ez,favorites:tz},middleware:e=>e({serializableCheck:!1})});VN(Z2);Zd.createRoot(document.getElementById("root")).render(v.jsx(pP,{store:Z2,children:v.jsx(X.StrictMode,{children:v.jsx(yE,{basename:"/Didiv/",children:v.jsx(SN,{})})})}));
