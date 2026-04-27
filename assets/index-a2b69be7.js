function i_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function kt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var T1={exports:{}},nu={},P1={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pa=Symbol.for("react.element"),o_=Symbol.for("react.portal"),a_=Symbol.for("react.fragment"),s_=Symbol.for("react.strict_mode"),l_=Symbol.for("react.profiler"),u_=Symbol.for("react.provider"),c_=Symbol.for("react.context"),d_=Symbol.for("react.forward_ref"),f_=Symbol.for("react.suspense"),p_=Symbol.for("react.memo"),h_=Symbol.for("react.lazy"),Wm=Symbol.iterator;function m_(e){return e===null||typeof e!="object"?null:(e=Wm&&e[Wm]||e["@@iterator"],typeof e=="function"?e:null)}var O1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M1=Object.assign,j1={};function Qi(e,t,n){this.props=e,this.context=t,this.refs=j1,this.updater=n||O1}Qi.prototype.isReactComponent={};Qi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $1(){}$1.prototype=Qi.prototype;function Lp(e,t,n){this.props=e,this.context=t,this.refs=j1,this.updater=n||O1}var Rp=Lp.prototype=new $1;Rp.constructor=Lp;M1(Rp,Qi.prototype);Rp.isPureReactComponent=!0;var Gm=Array.isArray,I1=Object.prototype.hasOwnProperty,Ap={current:null},D1={key:!0,ref:!0,__self:!0,__source:!0};function L1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)I1.call(t,r)&&!D1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Pa,type:e,key:o,ref:a,props:i,_owner:Ap.current}}function g_(e,t){return{$$typeof:Pa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pa}function v_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ym=/\/+/g;function bc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?v_(""+e.key):t.toString(36)}function Ps(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Pa:case o_:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+bc(a,0):r,Gm(i)?(n="",e!=null&&(n=e.replace(Ym,"$&/")+"/"),Ps(i,t,n,"",function(u){return u})):i!=null&&(Fp(i)&&(i=g_(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ym,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Gm(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+bc(o,l);a+=Ps(o,t,n,s,i)}else if(s=m_(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+bc(o,l++),a+=Ps(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Xa(e,t,n){if(e==null)return e;var r=[],i=0;return Ps(e,r,"","",function(o){return t.call(n,o,i++)}),r}function y_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},Os={transition:null},x_={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Os,ReactCurrentOwner:Ap};re.Children={map:Xa,forEach:function(e,t,n){Xa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xa(e,function(){t++}),t},toArray:function(e){return Xa(e,function(t){return t})||[]},only:function(e){if(!Fp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Qi;re.Fragment=a_;re.Profiler=l_;re.PureComponent=Lp;re.StrictMode=s_;re.Suspense=f_;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x_;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=M1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ap.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)I1.call(t,s)&&!D1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Pa,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:c_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:u_,_context:e},e.Consumer=e};re.createElement=L1;re.createFactory=function(e){var t=L1.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:d_,render:e}};re.isValidElement=Fp;re.lazy=function(e){return{$$typeof:h_,_payload:{_status:-1,_result:e},_init:y_}};re.memo=function(e,t){return{$$typeof:p_,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Os.transition;Os.transition={};try{e()}finally{Os.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return ht.current.useCallback(e,t)};re.useContext=function(e){return ht.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};re.useEffect=function(e,t){return ht.current.useEffect(e,t)};re.useId=function(){return ht.current.useId()};re.useImperativeHandle=function(e,t,n){return ht.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return ht.current.useMemo(e,t)};re.useReducer=function(e,t,n){return ht.current.useReducer(e,t,n)};re.useRef=function(e){return ht.current.useRef(e)};re.useState=function(e){return ht.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return ht.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return ht.current.useTransition()};re.version="18.2.0";P1.exports=re;var b=P1.exports;const q=Dp(b),Yd=i_({__proto__:null,default:q},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_=b,w_=Symbol.for("react.element"),S_=Symbol.for("react.fragment"),__=Object.prototype.hasOwnProperty,C_=b_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E_={key:!0,ref:!0,__self:!0,__source:!0};function R1(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)__.call(t,r)&&!E_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:w_,type:e,key:o,ref:a,props:i,_owner:C_.current}}nu.Fragment=S_;nu.jsx=R1;nu.jsxs=R1;T1.exports=nu;var g=T1.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qo.apply(this,arguments)}var sr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sr||(sr={}));const qm="popstate";function k_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return qd("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:nl(i)}return P_(t,n,null,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Np(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function T_(){return Math.random().toString(36).substr(2,8)}function Xm(e,t){return{usr:e.state,key:e.key,idx:t}}function qd(e,t,n,r){return n===void 0&&(n=null),Qo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ji(t):t,{state:n,key:t&&t.key||r||T_()})}function nl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ji(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function P_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=sr.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(Qo({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){l=sr.Pop;let w=c(),f=w==null?null:w-u;u=w,s&&s({action:l,location:y.location,delta:f})}function m(w,f){l=sr.Push;let v=qd(y.location,w,f);n&&n(v,w),u=c()+1;let x=Xm(v,u),S=y.createHref(v);try{a.pushState(x,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}o&&s&&s({action:l,location:y.location,delta:1})}function p(w,f){l=sr.Replace;let v=qd(y.location,w,f);n&&n(v,w),u=c();let x=Xm(v,u),S=y.createHref(v);a.replaceState(x,"",S),o&&s&&s({action:l,location:y.location,delta:0})}function h(w){let f=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof w=="string"?w:nl(w);return Le(f,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,f)}let y={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(qm,d),s=w,()=>{i.removeEventListener(qm,d),s=null}},createHref(w){return t(i,w)},createURL:h,encodeLocation(w){let f=h(w);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:p,go(w){return a.go(w)}};return y}var Km;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Km||(Km={}));function O_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ji(t):t,i=zp(r.pathname||"/",n);if(i==null)return null;let o=A1(e);M_(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=N_(o[l],V_(i));return a}function A1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Le(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=fr([r,s.relativePath]),c=n.concat(s);o.children&&o.children.length>0&&(Le(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),A1(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:A_(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of F1(o.path))i(o,a,s)}),t}function F1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=F1(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function M_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:F_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const j_=/^:\w+$/,$_=3,I_=2,D_=1,L_=10,R_=-2,Zm=e=>e==="*";function A_(e,t){let n=e.split("/"),r=n.length;return n.some(Zm)&&(r+=R_),t&&(r+=I_),n.filter(i=>!Zm(i)).reduce((i,o)=>i+(j_.test(o)?$_:o===""?D_:L_),r)}function F_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function N_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=z_({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;o.push({params:r,pathname:fr([i,c.pathname]),pathnameBase:G_(fr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=fr([i,c.pathnameBase]))}return o}function z_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=B_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let m=l[d]||"";a=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[c]=H_(l[d]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function B_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Np(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function V_(e){try{return decodeURI(e)}catch(t){return Np(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function H_(e,t){try{return decodeURIComponent(e)}catch(n){return Np(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function zp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function U_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ji(e):e;return{pathname:n?n.startsWith("/")?n:W_(n,t):t,search:Y_(r),hash:q_(i)}}function W_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function N1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function z1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ji(e):(i=Qo({},e),Le(!i.pathname||!i.pathname.includes("?"),wc("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),wc("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),wc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),d-=1;i.pathname=m.join("/")}l=d>=0?t[d]:"/"}let s=U_(i,l),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const fr=e=>e.join("/").replace(/\/\/+/g,"/"),G_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Y_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,q_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function X_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const B1=["post","put","patch","delete"];new Set(B1);const K_=["get",...B1];new Set(K_);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rl(){return rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rl.apply(this,arguments)}const Bp=b.createContext(null),Z_=b.createContext(null),eo=b.createContext(null),ru=b.createContext(null),qn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),V1=b.createContext(null);function Q_(e,t){let{relative:n}=t===void 0?{}:t;Oa()||Le(!1);let{basename:r,navigator:i}=b.useContext(eo),{hash:o,pathname:a,search:l}=W1(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:fr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Oa(){return b.useContext(ru)!=null}function ti(){return Oa()||Le(!1),b.useContext(ru).location}function H1(e){b.useContext(eo).static||b.useLayoutEffect(e)}function to(){let{isDataRoute:e}=b.useContext(qn);return e?pC():J_()}function J_(){Oa()||Le(!1);let e=b.useContext(Bp),{basename:t,navigator:n}=b.useContext(eo),{matches:r}=b.useContext(qn),{pathname:i}=ti(),o=JSON.stringify(N1(r).map(s=>s.pathnameBase)),a=b.useRef(!1);return H1(()=>{a.current=!0}),b.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let c=z1(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:fr([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}const eC=b.createContext(null);function tC(e){let t=b.useContext(qn).outlet;return t&&b.createElement(eC.Provider,{value:e},t)}function U1(){let{matches:e}=b.useContext(qn),t=e[e.length-1];return t?t.params:{}}function W1(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(qn),{pathname:i}=ti(),o=JSON.stringify(N1(r).map(a=>a.pathnameBase));return b.useMemo(()=>z1(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function nC(e,t){return rC(e,t)}function rC(e,t,n){Oa()||Le(!1);let{navigator:r}=b.useContext(eo),{matches:i}=b.useContext(qn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=ti(),u;if(t){var c;let y=typeof t=="string"?Ji(t):t;l==="/"||(c=y.pathname)!=null&&c.startsWith(l)||Le(!1),u=y}else u=s;let d=u.pathname||"/",m=l==="/"?d:d.slice(l.length)||"/",p=O_(e,{pathname:m}),h=lC(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:fr([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:fr([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&h?b.createElement(ru.Provider,{value:{location:rl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:sr.Pop}},h):h}function iC(){let e=fC(),t=X_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const oC=b.createElement(iC,null);class aC extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(qn.Provider,{value:this.props.routeContext},b.createElement(V1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sC(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Bp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(qn.Provider,{value:t},r)}function lC(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Le(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let c=s.route.id?a==null?void 0:a[s.route.id]:null,d=null;n&&(d=s.route.errorElement||oC);let m=t.concat(o.slice(0,u+1)),p=()=>{let h;return c?h=d:s.route.Component?h=b.createElement(s.route.Component,null):s.route.element?h=s.route.element:h=l,b.createElement(sC,{match:s,routeContext:{outlet:l,matches:m,isDataRoute:n!=null},children:h})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?b.createElement(aC,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var G1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(G1||{}),il=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(il||{});function uC(e){let t=b.useContext(Bp);return t||Le(!1),t}function cC(e){let t=b.useContext(Z_);return t||Le(!1),t}function dC(e){let t=b.useContext(qn);return t||Le(!1),t}function Y1(e){let t=dC(),n=t.matches[t.matches.length-1];return n.route.id||Le(!1),n.route.id}function fC(){var e;let t=b.useContext(V1),n=cC(il.UseRouteError),r=Y1(il.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function pC(){let{router:e}=uC(G1.UseNavigateStable),t=Y1(il.UseNavigateStable),n=b.useRef(!1);return H1(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,rl({fromRouteId:t},o)))},[e,t])}function hC(e){return tC(e.context)}function ut(e){Le(!1)}function mC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=sr.Pop,navigator:o,static:a=!1}=e;Oa()&&Le(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=Ji(r));let{pathname:u="/",search:c="",hash:d="",state:m=null,key:p="default"}=r,h=b.useMemo(()=>{let y=zp(u,l);return y==null?null:{location:{pathname:y,search:c,hash:d,state:m,key:p},navigationType:i}},[l,u,c,d,m,p,i]);return h==null?null:b.createElement(eo.Provider,{value:s},b.createElement(ru.Provider,{children:n,value:h}))}function gC(e){let{children:t,location:n}=e;return nC(Xd(t),n)}new Promise(()=>{});function Xd(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Xd(r.props.children,o));return}r.type!==ut&&Le(!1),!r.props.index||!r.props.children||Le(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Xd(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kd(){return Kd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kd.apply(this,arguments)}function vC(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function yC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xC(e,t){return e.button===0&&(!t||t==="_self")&&!yC(e)}function Zd(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function bC(e,t){let n=Zd(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const wC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],SC="startTransition",Qm=Yd[SC];function _C(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=k_({window:i,v5Compat:!0}));let a=o.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=b.useCallback(d=>{u&&Qm?Qm(()=>s(d)):s(d)},[s,u]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(mC,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const CC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",EC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Me=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:c}=t,d=vC(t,wC),{basename:m}=b.useContext(eo),p,h=!1;if(typeof u=="string"&&EC.test(u)&&(p=u,CC))try{let v=new URL(window.location.href),x=u.startsWith("//")?new URL(v.protocol+u):new URL(u),S=zp(x.pathname,m);x.origin===v.origin&&S!=null?u=S+x.search+x.hash:h=!0}catch{}let y=Q_(u,{relative:i}),w=kC(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:i});function f(v){r&&r(v),v.defaultPrevented||w(v)}return b.createElement("a",Kd({},d,{href:p||y,onClick:h||o?r:f,ref:n,target:s}))});var Jm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Jm||(Jm={}));var eg;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(eg||(eg={}));function kC(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=to(),s=ti(),u=W1(e,{relative:a});return b.useCallback(c=>{if(xC(c,n)){c.preventDefault();let d=r!==void 0?r:nl(s)===nl(u);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}function TC(e){let t=b.useRef(Zd(e)),n=b.useRef(!1),r=ti(),i=b.useMemo(()=>bC(r.search,n.current?null:t.current),[r.search]),o=to(),a=b.useCallback((l,s)=>{const u=Zd(typeof l=="function"?l(i):l);n.current=!0,o("?"+u,s)},[o,i]);return[i,a]}var Qd={},q1={exports:{}},Ft={},X1={exports:{}},K1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,I){var A=P.length;P.push(I);e:for(;0<A;){var B=A-1>>>1,z=P[B];if(0<i(z,I))P[B]=I,P[A]=z,A=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var I=P[0],A=P.pop();if(A!==I){P[0]=A;e:for(var B=0,z=P.length,H=z>>>1;B<H;){var G=2*(B+1)-1,W=P[G],X=G+1,ee=P[X];if(0>i(W,A))X<z&&0>i(ee,W)?(P[B]=ee,P[X]=A,B=X):(P[B]=W,P[G]=A,B=G);else if(X<z&&0>i(ee,A))P[B]=ee,P[X]=A,B=X;else break e}}return I}function i(P,I){var A=P.sortIndex-I.sortIndex;return A!==0?A:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,d=null,m=3,p=!1,h=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=P)r(u),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(u)}}function S(P){if(y=!1,x(P),!h)if(n(s)!==null)h=!0,N(C);else{var I=n(u);I!==null&&F(S,I.startTime-P)}}function C(P,I){h=!1,y&&(y=!1,f(E),E=-1),p=!0;var A=m;try{for(x(I),d=n(s);d!==null&&(!(d.expirationTime>I)||P&&!D());){var B=d.callback;if(typeof B=="function"){d.callback=null,m=d.priorityLevel;var z=B(d.expirationTime<=I);I=e.unstable_now(),typeof z=="function"?d.callback=z:d===n(s)&&r(s),x(I)}else r(s);d=n(s)}if(d!==null)var H=!0;else{var G=n(u);G!==null&&F(S,G.startTime-I),H=!1}return H}finally{d=null,m=A,p=!1}}var k=!1,_=null,E=-1,M=5,j=-1;function D(){return!(e.unstable_now()-j<M)}function O(){if(_!==null){var P=e.unstable_now();j=P;var I=!0;try{I=_(!0,P)}finally{I?$():(k=!1,_=null)}}else k=!1}var $;if(typeof v=="function")$=function(){v(O)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,L=R.port2;R.port1.onmessage=O,$=function(){L.postMessage(null)}}else $=function(){w(O,0)};function N(P){_=P,k||(k=!0,$())}function F(P,I){E=w(function(){P(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){h||p||(h=!0,N(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var I=3;break;default:I=m}var A=m;m=I;try{return P()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var A=m;m=P;try{return I()}finally{m=A}},e.unstable_scheduleCallback=function(P,I,A){var B=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?B+A:B):A=B,P){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=A+z,P={id:c++,callback:I,priorityLevel:P,startTime:A,expirationTime:z,sortIndex:-1},A>B?(P.sortIndex=A,t(u,P),n(s)===null&&P===n(u)&&(y?(f(E),E=-1):y=!0,F(S,A-B))):(P.sortIndex=z,t(s,P),h||p||(h=!0,N(C))),P},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(P){var I=m;return function(){var A=m;m=I;try{return P.apply(this,arguments)}finally{m=A}}}})(K1);X1.exports=K1;var PC=X1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z1=b,Rt=PC;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q1=new Set,Jo={};function ni(e,t){Ri(e,t),Ri(e+"Capture",t)}function Ri(e,t){for(Jo[e]=t,e=0;e<t.length;e++)Q1.add(t[e])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jd=Object.prototype.hasOwnProperty,OC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tg={},ng={};function MC(e){return Jd.call(ng,e)?!0:Jd.call(tg,e)?!1:OC.test(e)?ng[e]=!0:(tg[e]=!0,!1)}function jC(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $C(e,t,n,r){if(t===null||typeof t>"u"||jC(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function mt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vp=/[\-:]([a-z])/g;function Hp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vp,Hp);Qe[t]=new mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vp,Hp);Qe[t]=new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vp,Hp);Qe[t]=new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new mt(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Up(e,t,n,r){var i=Qe.hasOwnProperty(t)?Qe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($C(t,n,i,r)&&(n=null),r||i===null?MC(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xn=Z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),gi=Symbol.for("react.portal"),vi=Symbol.for("react.fragment"),Wp=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),J1=Symbol.for("react.provider"),ey=Symbol.for("react.context"),Gp=Symbol.for("react.forward_ref"),tf=Symbol.for("react.suspense"),nf=Symbol.for("react.suspense_list"),Yp=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),ty=Symbol.for("react.offscreen"),rg=Symbol.iterator;function go(e){return e===null||typeof e!="object"?null:(e=rg&&e[rg]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,Sc;function Mo(e){if(Sc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sc=t&&t[1]||""}return`
`+Sc+e}var _c=!1;function Cc(e,t){if(!e||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mo(e):""}function IC(e){switch(e.tag){case 5:return Mo(e.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return e=Cc(e.type,!1),e;case 11:return e=Cc(e.type.render,!1),e;case 1:return e=Cc(e.type,!0),e;default:return""}}function rf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vi:return"Fragment";case gi:return"Portal";case ef:return"Profiler";case Wp:return"StrictMode";case tf:return"Suspense";case nf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ey:return(e.displayName||"Context")+".Consumer";case J1:return(e._context.displayName||"Context")+".Provider";case Gp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yp:return t=e.displayName||null,t!==null?t:rf(e.type)||"Memo";case rr:t=e._payload,e=e._init;try{return rf(e(t))}catch{}}return null}function DC(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rf(t);case 8:return t===Wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ny(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function LC(e){var t=ny(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Za(e){e._valueTracker||(e._valueTracker=LC(e))}function ry(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ny(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ol(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function of(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ig(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Sr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function iy(e,t){t=t.checked,t!=null&&Up(e,"checked",t,!1)}function af(e,t){iy(e,t);var n=Sr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sf(e,t.type,n):t.hasOwnProperty("defaultValue")&&sf(e,t.type,Sr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function og(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sf(e,t,n){(t!=="number"||ol(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jo=Array.isArray;function Pi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Sr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function lf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ag(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(jo(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sr(n)}}function oy(e,t){var n=Sr(t.value),r=Sr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ay(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ay(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qa,sy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ea(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RC=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(e){RC.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),No[t]=No[e]})});function ly(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||No.hasOwnProperty(e)&&No[e]?(""+t).trim():t+"px"}function uy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ly(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var AC=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cf(e,t){if(t){if(AC[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function df(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=null;function qp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pf=null,Oi=null,Mi=null;function lg(e){if(e=$a(e)){if(typeof pf!="function")throw Error(V(280));var t=e.stateNode;t&&(t=lu(t),pf(e.stateNode,e.type,t))}}function cy(e){Oi?Mi?Mi.push(e):Mi=[e]:Oi=e}function dy(){if(Oi){var e=Oi,t=Mi;if(Mi=Oi=null,lg(e),t)for(e=0;e<t.length;e++)lg(t[e])}}function fy(e,t){return e(t)}function py(){}var Ec=!1;function hy(e,t,n){if(Ec)return e(t,n);Ec=!0;try{return fy(e,t,n)}finally{Ec=!1,(Oi!==null||Mi!==null)&&(py(),dy())}}function ta(e,t){var n=e.stateNode;if(n===null)return null;var r=lu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var hf=!1;if(Vn)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){hf=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{hf=!1}function FC(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var zo=!1,al=null,sl=!1,mf=null,NC={onError:function(e){zo=!0,al=e}};function zC(e,t,n,r,i,o,a,l,s){zo=!1,al=null,FC.apply(NC,arguments)}function BC(e,t,n,r,i,o,a,l,s){if(zC.apply(this,arguments),zo){if(zo){var u=al;zo=!1,al=null}else throw Error(V(198));sl||(sl=!0,mf=u)}}function ri(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function my(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ug(e){if(ri(e)!==e)throw Error(V(188))}function VC(e){var t=e.alternate;if(!t){if(t=ri(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ug(i),e;if(o===r)return ug(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function gy(e){return e=VC(e),e!==null?vy(e):null}function vy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vy(e);if(t!==null)return t;e=e.sibling}return null}var yy=Rt.unstable_scheduleCallback,cg=Rt.unstable_cancelCallback,HC=Rt.unstable_shouldYield,UC=Rt.unstable_requestPaint,Oe=Rt.unstable_now,WC=Rt.unstable_getCurrentPriorityLevel,Xp=Rt.unstable_ImmediatePriority,xy=Rt.unstable_UserBlockingPriority,ll=Rt.unstable_NormalPriority,GC=Rt.unstable_LowPriority,by=Rt.unstable_IdlePriority,iu=null,Sn=null;function YC(e){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(iu,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:KC,qC=Math.log,XC=Math.LN2;function KC(e){return e>>>=0,e===0?32:31-(qC(e)/XC|0)|0}var Ja=64,es=4194304;function $o(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ul(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=$o(l):(o&=a,o!==0&&(r=$o(o)))}else a=n&~i,a!==0?r=$o(a):o!==0&&(r=$o(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-an(t),i=1<<n,r|=e[n],t&=~i;return r}function ZC(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QC(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-an(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=ZC(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function gf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wy(){var e=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),e}function kc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ma(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=n}function JC(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-an(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Kp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var he=0;function Sy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _y,Zp,Cy,Ey,ky,vf=!1,ts=[],pr=null,hr=null,mr=null,na=new Map,ra=new Map,or=[],eE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dg(e,t){switch(e){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":na.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(t.pointerId)}}function yo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=$a(t),t!==null&&Zp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function tE(e,t,n,r,i){switch(t){case"focusin":return pr=yo(pr,e,t,n,r,i),!0;case"dragenter":return hr=yo(hr,e,t,n,r,i),!0;case"mouseover":return mr=yo(mr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return na.set(o,yo(na.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ra.set(o,yo(ra.get(o)||null,e,t,n,r,i)),!0}return!1}function Ty(e){var t=Fr(e.target);if(t!==null){var n=ri(t);if(n!==null){if(t=n.tag,t===13){if(t=my(n),t!==null){e.blockedOn=t,ky(e.priority,function(){Cy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ms(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ff=r,n.target.dispatchEvent(r),ff=null}else return t=$a(n),t!==null&&Zp(t),e.blockedOn=n,!1;t.shift()}return!0}function fg(e,t,n){Ms(e)&&n.delete(t)}function nE(){vf=!1,pr!==null&&Ms(pr)&&(pr=null),hr!==null&&Ms(hr)&&(hr=null),mr!==null&&Ms(mr)&&(mr=null),na.forEach(fg),ra.forEach(fg)}function xo(e,t){e.blockedOn===t&&(e.blockedOn=null,vf||(vf=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,nE)))}function ia(e){function t(i){return xo(i,e)}if(0<ts.length){xo(ts[0],e);for(var n=1;n<ts.length;n++){var r=ts[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pr!==null&&xo(pr,e),hr!==null&&xo(hr,e),mr!==null&&xo(mr,e),na.forEach(t),ra.forEach(t),n=0;n<or.length;n++)r=or[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)Ty(n),n.blockedOn===null&&or.shift()}var ji=Xn.ReactCurrentBatchConfig,cl=!0;function rE(e,t,n,r){var i=he,o=ji.transition;ji.transition=null;try{he=1,Qp(e,t,n,r)}finally{he=i,ji.transition=o}}function iE(e,t,n,r){var i=he,o=ji.transition;ji.transition=null;try{he=4,Qp(e,t,n,r)}finally{he=i,ji.transition=o}}function Qp(e,t,n,r){if(cl){var i=yf(e,t,n,r);if(i===null)Rc(e,t,r,dl,n),dg(e,r);else if(tE(i,e,t,n,r))r.stopPropagation();else if(dg(e,r),t&4&&-1<eE.indexOf(e)){for(;i!==null;){var o=$a(i);if(o!==null&&_y(o),o=yf(e,t,n,r),o===null&&Rc(e,t,r,dl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Rc(e,t,r,null,n)}}var dl=null;function yf(e,t,n,r){if(dl=null,e=qp(r),e=Fr(e),e!==null)if(t=ri(e),t===null)e=null;else if(n=t.tag,n===13){if(e=my(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return dl=e,null}function Py(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WC()){case Xp:return 1;case xy:return 4;case ll:case GC:return 16;case by:return 536870912;default:return 16}default:return 16}}var lr=null,Jp=null,js=null;function Oy(){if(js)return js;var e,t=Jp,n=t.length,r,i="value"in lr?lr.value:lr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return js=i.slice(e,1<r?1-r:void 0)}function $s(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ns(){return!0}function pg(){return!1}function Nt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ns:pg,this.isPropagationStopped=pg,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ns)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ns)},persist:function(){},isPersistent:ns}),t}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eh=Nt(no),ja=ke({},no,{view:0,detail:0}),oE=Nt(ja),Tc,Pc,bo,ou=ke({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:th,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bo&&(bo&&e.type==="mousemove"?(Tc=e.screenX-bo.screenX,Pc=e.screenY-bo.screenY):Pc=Tc=0,bo=e),Tc)},movementY:function(e){return"movementY"in e?e.movementY:Pc}}),hg=Nt(ou),aE=ke({},ou,{dataTransfer:0}),sE=Nt(aE),lE=ke({},ja,{relatedTarget:0}),Oc=Nt(lE),uE=ke({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),cE=Nt(uE),dE=ke({},no,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fE=Nt(dE),pE=ke({},no,{data:0}),mg=Nt(pE),hE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gE[e])?!!t[e]:!1}function th(){return vE}var yE=ke({},ja,{key:function(e){if(e.key){var t=hE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$s(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:th,charCode:function(e){return e.type==="keypress"?$s(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$s(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xE=Nt(yE),bE=ke({},ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gg=Nt(bE),wE=ke({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:th}),SE=Nt(wE),_E=ke({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),CE=Nt(_E),EE=ke({},ou,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kE=Nt(EE),TE=[9,13,27,32],nh=Vn&&"CompositionEvent"in window,Bo=null;Vn&&"documentMode"in document&&(Bo=document.documentMode);var PE=Vn&&"TextEvent"in window&&!Bo,My=Vn&&(!nh||Bo&&8<Bo&&11>=Bo),vg=String.fromCharCode(32),yg=!1;function jy(e,t){switch(e){case"keyup":return TE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $y(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yi=!1;function OE(e,t){switch(e){case"compositionend":return $y(t);case"keypress":return t.which!==32?null:(yg=!0,vg);case"textInput":return e=t.data,e===vg&&yg?null:e;default:return null}}function ME(e,t){if(yi)return e==="compositionend"||!nh&&jy(e,t)?(e=Oy(),js=Jp=lr=null,yi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return My&&t.locale!=="ko"?null:t.data;default:return null}}var jE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jE[e.type]:t==="textarea"}function Iy(e,t,n,r){cy(r),t=fl(t,"onChange"),0<t.length&&(n=new eh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vo=null,oa=null;function $E(e){Uy(e,0)}function au(e){var t=wi(e);if(ry(t))return e}function IE(e,t){if(e==="change")return t}var Dy=!1;if(Vn){var Mc;if(Vn){var jc="oninput"in document;if(!jc){var bg=document.createElement("div");bg.setAttribute("oninput","return;"),jc=typeof bg.oninput=="function"}Mc=jc}else Mc=!1;Dy=Mc&&(!document.documentMode||9<document.documentMode)}function wg(){Vo&&(Vo.detachEvent("onpropertychange",Ly),oa=Vo=null)}function Ly(e){if(e.propertyName==="value"&&au(oa)){var t=[];Iy(t,oa,e,qp(e)),hy($E,t)}}function DE(e,t,n){e==="focusin"?(wg(),Vo=t,oa=n,Vo.attachEvent("onpropertychange",Ly)):e==="focusout"&&wg()}function LE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return au(oa)}function RE(e,t){if(e==="click")return au(t)}function AE(e,t){if(e==="input"||e==="change")return au(t)}function FE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var cn=typeof Object.is=="function"?Object.is:FE;function aa(e,t){if(cn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jd.call(t,i)||!cn(e[i],t[i]))return!1}return!0}function Sg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _g(e,t){var n=Sg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sg(n)}}function Ry(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ry(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ay(){for(var e=window,t=ol();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ol(e.document)}return t}function rh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function NE(e){var t=Ay(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ry(n.ownerDocument.documentElement,n)){if(r!==null&&rh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=_g(n,o);var a=_g(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zE=Vn&&"documentMode"in document&&11>=document.documentMode,xi=null,xf=null,Ho=null,bf=!1;function Cg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bf||xi==null||xi!==ol(r)||(r=xi,"selectionStart"in r&&rh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ho&&aa(Ho,r)||(Ho=r,r=fl(xf,"onSelect"),0<r.length&&(t=new eh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xi)))}function rs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bi={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionend:rs("Transition","TransitionEnd")},$c={},Fy={};Vn&&(Fy=document.createElement("div").style,"AnimationEvent"in window||(delete bi.animationend.animation,delete bi.animationiteration.animation,delete bi.animationstart.animation),"TransitionEvent"in window||delete bi.transitionend.transition);function su(e){if($c[e])return $c[e];if(!bi[e])return e;var t=bi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fy)return $c[e]=t[n];return e}var Ny=su("animationend"),zy=su("animationiteration"),By=su("animationstart"),Vy=su("transitionend"),Hy=new Map,Eg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(e,t){Hy.set(e,t),ni(t,[e])}for(var Ic=0;Ic<Eg.length;Ic++){var Dc=Eg[Ic],BE=Dc.toLowerCase(),VE=Dc[0].toUpperCase()+Dc.slice(1);Er(BE,"on"+VE)}Er(Ny,"onAnimationEnd");Er(zy,"onAnimationIteration");Er(By,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(Vy,"onTransitionEnd");Ri("onMouseEnter",["mouseout","mouseover"]);Ri("onMouseLeave",["mouseout","mouseover"]);Ri("onPointerEnter",["pointerout","pointerover"]);Ri("onPointerLeave",["pointerout","pointerover"]);ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function kg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,BC(r,t,void 0,e),e.currentTarget=null}function Uy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;kg(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;kg(i,l,u),o=s}}}if(sl)throw e=mf,sl=!1,mf=null,e}function ve(e,t){var n=t[Ef];n===void 0&&(n=t[Ef]=new Set);var r=e+"__bubble";n.has(r)||(Wy(t,e,2,!1),n.add(r))}function Lc(e,t,n){var r=0;t&&(r|=4),Wy(n,e,r,t)}var is="_reactListening"+Math.random().toString(36).slice(2);function sa(e){if(!e[is]){e[is]=!0,Q1.forEach(function(n){n!=="selectionchange"&&(HE.has(n)||Lc(n,!1,e),Lc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[is]||(t[is]=!0,Lc("selectionchange",!1,t))}}function Wy(e,t,n,r){switch(Py(t)){case 1:var i=rE;break;case 4:i=iE;break;default:i=Qp}n=i.bind(null,t,n,e),i=void 0,!hf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Rc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Fr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}hy(function(){var u=o,c=qp(n),d=[];e:{var m=Hy.get(e);if(m!==void 0){var p=eh,h=e;switch(e){case"keypress":if($s(n)===0)break e;case"keydown":case"keyup":p=xE;break;case"focusin":h="focus",p=Oc;break;case"focusout":h="blur",p=Oc;break;case"beforeblur":case"afterblur":p=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=hg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=SE;break;case Ny:case zy:case By:p=cE;break;case Vy:p=CE;break;case"scroll":p=oE;break;case"wheel":p=kE;break;case"copy":case"cut":case"paste":p=fE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=gg}var y=(t&4)!==0,w=!y&&e==="scroll",f=y?m!==null?m+"Capture":null:m;y=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,f!==null&&(S=ta(v,f),S!=null&&y.push(la(v,S,x)))),w)break;v=v.return}0<y.length&&(m=new p(m,h,null,n,c),d.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",m&&n!==ff&&(h=n.relatedTarget||n.fromElement)&&(Fr(h)||h[Hn]))break e;if((p||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,p?(h=n.relatedTarget||n.toElement,p=u,h=h?Fr(h):null,h!==null&&(w=ri(h),h!==w||h.tag!==5&&h.tag!==6)&&(h=null)):(p=null,h=u),p!==h)){if(y=hg,S="onMouseLeave",f="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(y=gg,S="onPointerLeave",f="onPointerEnter",v="pointer"),w=p==null?m:wi(p),x=h==null?m:wi(h),m=new y(S,v+"leave",p,n,c),m.target=w,m.relatedTarget=x,S=null,Fr(c)===u&&(y=new y(f,v+"enter",h,n,c),y.target=x,y.relatedTarget=w,S=y),w=S,p&&h)t:{for(y=p,f=h,v=0,x=y;x;x=ai(x))v++;for(x=0,S=f;S;S=ai(S))x++;for(;0<v-x;)y=ai(y),v--;for(;0<x-v;)f=ai(f),x--;for(;v--;){if(y===f||f!==null&&y===f.alternate)break t;y=ai(y),f=ai(f)}y=null}else y=null;p!==null&&Tg(d,m,p,y,!1),h!==null&&w!==null&&Tg(d,w,h,y,!0)}}e:{if(m=u?wi(u):window,p=m.nodeName&&m.nodeName.toLowerCase(),p==="select"||p==="input"&&m.type==="file")var C=IE;else if(xg(m))if(Dy)C=AE;else{C=LE;var k=DE}else(p=m.nodeName)&&p.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=RE);if(C&&(C=C(e,u))){Iy(d,C,n,c);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&sf(m,"number",m.value)}switch(k=u?wi(u):window,e){case"focusin":(xg(k)||k.contentEditable==="true")&&(xi=k,xf=u,Ho=null);break;case"focusout":Ho=xf=xi=null;break;case"mousedown":bf=!0;break;case"contextmenu":case"mouseup":case"dragend":bf=!1,Cg(d,n,c);break;case"selectionchange":if(zE)break;case"keydown":case"keyup":Cg(d,n,c)}var _;if(nh)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else yi?jy(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(My&&n.locale!=="ko"&&(yi||E!=="onCompositionStart"?E==="onCompositionEnd"&&yi&&(_=Oy()):(lr=c,Jp="value"in lr?lr.value:lr.textContent,yi=!0)),k=fl(u,E),0<k.length&&(E=new mg(E,e,null,n,c),d.push({event:E,listeners:k}),_?E.data=_:(_=$y(n),_!==null&&(E.data=_)))),(_=PE?OE(e,n):ME(e,n))&&(u=fl(u,"onBeforeInput"),0<u.length&&(c=new mg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=_))}Uy(d,t)})}function la(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ta(e,n),o!=null&&r.unshift(la(e,o,i)),o=ta(e,t),o!=null&&r.push(la(e,o,i))),e=e.return}return r}function ai(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=ta(n,o),s!=null&&a.unshift(la(n,s,l))):i||(s=ta(n,o),s!=null&&a.push(la(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var UE=/\r\n?/g,WE=/\u0000|\uFFFD/g;function Pg(e){return(typeof e=="string"?e:""+e).replace(UE,`
`).replace(WE,"")}function os(e,t,n){if(t=Pg(t),Pg(e)!==t&&n)throw Error(V(425))}function pl(){}var wf=null,Sf=null;function _f(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cf=typeof setTimeout=="function"?setTimeout:void 0,GE=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,YE=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(e){return Og.resolve(null).then(e).catch(qE)}:Cf;function qE(e){setTimeout(function(){throw e})}function Ac(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ia(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ia(t)}function gr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Mg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ro=Math.random().toString(36).slice(2),bn="__reactFiber$"+ro,ua="__reactProps$"+ro,Hn="__reactContainer$"+ro,Ef="__reactEvents$"+ro,XE="__reactListeners$"+ro,KE="__reactHandles$"+ro;function Fr(e){var t=e[bn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hn]||n[bn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mg(e);e!==null;){if(n=e[bn])return n;e=Mg(e)}return t}e=n,n=e.parentNode}return null}function $a(e){return e=e[bn]||e[Hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function lu(e){return e[ua]||null}var kf=[],Si=-1;function kr(e){return{current:e}}function xe(e){0>Si||(e.current=kf[Si],kf[Si]=null,Si--)}function ge(e,t){Si++,kf[Si]=e.current,e.current=t}var _r={},at=kr(_r),St=kr(!1),Wr=_r;function Ai(e,t){var n=e.type.contextTypes;if(!n)return _r;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _t(e){return e=e.childContextTypes,e!=null}function hl(){xe(St),xe(at)}function jg(e,t,n){if(at.current!==_r)throw Error(V(168));ge(at,t),ge(St,n)}function Gy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,DC(e)||"Unknown",i));return ke({},n,r)}function ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_r,Wr=at.current,ge(at,e),ge(St,St.current),!0}function $g(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=Gy(e,t,Wr),r.__reactInternalMemoizedMergedChildContext=e,xe(St),xe(at),ge(at,e)):xe(St),ge(St,n)}var Dn=null,uu=!1,Fc=!1;function Yy(e){Dn===null?Dn=[e]:Dn.push(e)}function ZE(e){uu=!0,Yy(e)}function Tr(){if(!Fc&&Dn!==null){Fc=!0;var e=0,t=he;try{var n=Dn;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dn=null,uu=!1}catch(i){throw Dn!==null&&(Dn=Dn.slice(e+1)),yy(Xp,Tr),i}finally{he=t,Fc=!1}}return null}var _i=[],Ci=0,gl=null,vl=0,Vt=[],Ht=0,Gr=null,An=1,Fn="";function $r(e,t){_i[Ci++]=vl,_i[Ci++]=gl,gl=e,vl=t}function qy(e,t,n){Vt[Ht++]=An,Vt[Ht++]=Fn,Vt[Ht++]=Gr,Gr=e;var r=An;e=Fn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var o=32-an(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,An=1<<32-an(t)+i|n<<i|r,Fn=o+e}else An=1<<o|n<<i|r,Fn=e}function ih(e){e.return!==null&&($r(e,1),qy(e,1,0))}function oh(e){for(;e===gl;)gl=_i[--Ci],_i[Ci]=null,vl=_i[--Ci],_i[Ci]=null;for(;e===Gr;)Gr=Vt[--Ht],Vt[Ht]=null,Fn=Vt[--Ht],Vt[Ht]=null,An=Vt[--Ht],Vt[Ht]=null}var It=null,jt=null,_e=!1,rn=null;function Xy(e,t){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ig(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,jt=gr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,jt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gr!==null?{id:An,overflow:Fn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,It=e,jt=null,!0):!1;default:return!1}}function Tf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pf(e){if(_e){var t=jt;if(t){var n=t;if(!Ig(e,t)){if(Tf(e))throw Error(V(418));t=gr(n.nextSibling);var r=It;t&&Ig(e,t)?Xy(r,n):(e.flags=e.flags&-4097|2,_e=!1,It=e)}}else{if(Tf(e))throw Error(V(418));e.flags=e.flags&-4097|2,_e=!1,It=e}}}function Dg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function as(e){if(e!==It)return!1;if(!_e)return Dg(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_f(e.type,e.memoizedProps)),t&&(t=jt)){if(Tf(e))throw Ky(),Error(V(418));for(;t;)Xy(e,t),t=gr(t.nextSibling)}if(Dg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){jt=gr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}jt=null}}else jt=It?gr(e.stateNode.nextSibling):null;return!0}function Ky(){for(var e=jt;e;)e=gr(e.nextSibling)}function Fi(){jt=It=null,_e=!1}function ah(e){rn===null?rn=[e]:rn.push(e)}var QE=Xn.ReactCurrentBatchConfig;function en(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var yl=kr(null),xl=null,Ei=null,sh=null;function lh(){sh=Ei=xl=null}function uh(e){var t=yl.current;xe(yl),e._currentValue=t}function Of(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $i(e,t){xl=e,sh=Ei=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wt=!0),e.firstContext=null)}function Gt(e){var t=e._currentValue;if(sh!==e)if(e={context:e,memoizedValue:t,next:null},Ei===null){if(xl===null)throw Error(V(308));Ei=e,xl.dependencies={lanes:0,firstContext:e}}else Ei=Ei.next=e;return t}var Nr=null;function ch(e){Nr===null?Nr=[e]:Nr.push(e)}function Zy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ch(t)):(n.next=i.next,i.next=n),t.interleaved=n,Un(e,r)}function Un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ir=!1;function dh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Un(e,n)}return i=r.interleaved,i===null?(t.next=t,ch(r)):(t.next=i.next,i.next=t),r.interleaved=t,Un(e,n)}function Is(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kp(e,n)}}function Lg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bl(e,t,n,r){var i=e.updateQueue;ir=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,c=u=s=null,l=o;do{var m=l.lane,p=l.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,y=l;switch(m=t,p=n,y.tag){case 1:if(h=y.payload,typeof h=="function"){d=h.call(p,d,m);break e}d=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=y.payload,m=typeof h=="function"?h.call(p,d,m):h,m==null)break e;d=ke({},d,m);break e;case 2:ir=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else p={eventTime:p,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=p,s=d):c=c.next=p,a|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);qr|=a,e.lanes=a,e.memoizedState=d}}function Rg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Jy=new Z1.Component().refs;function Mf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cu={isMounted:function(e){return(e=e._reactInternals)?ri(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),i=xr(e),o=Nn(r,i);o.payload=t,n!=null&&(o.callback=n),t=vr(e,o,i),t!==null&&(sn(t,e,i,r),Is(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),i=xr(e),o=Nn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=vr(e,o,i),t!==null&&(sn(t,e,i,r),Is(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=xr(e),i=Nn(n,r);i.tag=2,t!=null&&(i.callback=t),t=vr(e,i,r),t!==null&&(sn(t,e,r,n),Is(t,e,r))}};function Ag(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!aa(n,r)||!aa(i,o):!0}function ex(e,t,n){var r=!1,i=_r,o=t.contextType;return typeof o=="object"&&o!==null?o=Gt(o):(i=_t(t)?Wr:at.current,r=t.contextTypes,o=(r=r!=null)?Ai(e,i):_r),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Fg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cu.enqueueReplaceState(t,t.state,null)}function jf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Jy,dh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Gt(o):(o=_t(t)?Wr:at.current,i.context=Ai(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Mf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&cu.enqueueReplaceState(i,i.state,null),bl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function wo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Jy&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function ss(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ng(e){var t=e._init;return t(e._payload)}function tx(e){function t(f,v){if(e){var x=f.deletions;x===null?(f.deletions=[v],f.flags|=16):x.push(v)}}function n(f,v){if(!e)return null;for(;v!==null;)t(f,v),v=v.sibling;return null}function r(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function i(f,v){return f=br(f,v),f.index=0,f.sibling=null,f}function o(f,v,x){return f.index=x,e?(x=f.alternate,x!==null?(x=x.index,x<v?(f.flags|=2,v):x):(f.flags|=2,v)):(f.flags|=1048576,v)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,v,x,S){return v===null||v.tag!==6?(v=Wc(x,f.mode,S),v.return=f,v):(v=i(v,x),v.return=f,v)}function s(f,v,x,S){var C=x.type;return C===vi?c(f,v,x.props.children,S,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rr&&Ng(C)===v.type)?(S=i(v,x.props),S.ref=wo(f,v,x),S.return=f,S):(S=Ns(x.type,x.key,x.props,null,f.mode,S),S.ref=wo(f,v,x),S.return=f,S)}function u(f,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Gc(x,f.mode,S),v.return=f,v):(v=i(v,x.children||[]),v.return=f,v)}function c(f,v,x,S,C){return v===null||v.tag!==7?(v=Hr(x,f.mode,S,C),v.return=f,v):(v=i(v,x),v.return=f,v)}function d(f,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Wc(""+v,f.mode,x),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ka:return x=Ns(v.type,v.key,v.props,null,f.mode,x),x.ref=wo(f,null,v),x.return=f,x;case gi:return v=Gc(v,f.mode,x),v.return=f,v;case rr:var S=v._init;return d(f,S(v._payload),x)}if(jo(v)||go(v))return v=Hr(v,f.mode,x,null),v.return=f,v;ss(f,v)}return null}function m(f,v,x,S){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:l(f,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ka:return x.key===C?s(f,v,x,S):null;case gi:return x.key===C?u(f,v,x,S):null;case rr:return C=x._init,m(f,v,C(x._payload),S)}if(jo(x)||go(x))return C!==null?null:c(f,v,x,S,null);ss(f,x)}return null}function p(f,v,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(x)||null,l(v,f,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ka:return f=f.get(S.key===null?x:S.key)||null,s(v,f,S,C);case gi:return f=f.get(S.key===null?x:S.key)||null,u(v,f,S,C);case rr:var k=S._init;return p(f,v,x,k(S._payload),C)}if(jo(S)||go(S))return f=f.get(x)||null,c(v,f,S,C,null);ss(v,S)}return null}function h(f,v,x,S){for(var C=null,k=null,_=v,E=v=0,M=null;_!==null&&E<x.length;E++){_.index>E?(M=_,_=null):M=_.sibling;var j=m(f,_,x[E],S);if(j===null){_===null&&(_=M);break}e&&_&&j.alternate===null&&t(f,_),v=o(j,v,E),k===null?C=j:k.sibling=j,k=j,_=M}if(E===x.length)return n(f,_),_e&&$r(f,E),C;if(_===null){for(;E<x.length;E++)_=d(f,x[E],S),_!==null&&(v=o(_,v,E),k===null?C=_:k.sibling=_,k=_);return _e&&$r(f,E),C}for(_=r(f,_);E<x.length;E++)M=p(_,f,E,x[E],S),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?E:M.key),v=o(M,v,E),k===null?C=M:k.sibling=M,k=M);return e&&_.forEach(function(D){return t(f,D)}),_e&&$r(f,E),C}function y(f,v,x,S){var C=go(x);if(typeof C!="function")throw Error(V(150));if(x=C.call(x),x==null)throw Error(V(151));for(var k=C=null,_=v,E=v=0,M=null,j=x.next();_!==null&&!j.done;E++,j=x.next()){_.index>E?(M=_,_=null):M=_.sibling;var D=m(f,_,j.value,S);if(D===null){_===null&&(_=M);break}e&&_&&D.alternate===null&&t(f,_),v=o(D,v,E),k===null?C=D:k.sibling=D,k=D,_=M}if(j.done)return n(f,_),_e&&$r(f,E),C;if(_===null){for(;!j.done;E++,j=x.next())j=d(f,j.value,S),j!==null&&(v=o(j,v,E),k===null?C=j:k.sibling=j,k=j);return _e&&$r(f,E),C}for(_=r(f,_);!j.done;E++,j=x.next())j=p(_,f,E,j.value,S),j!==null&&(e&&j.alternate!==null&&_.delete(j.key===null?E:j.key),v=o(j,v,E),k===null?C=j:k.sibling=j,k=j);return e&&_.forEach(function(O){return t(f,O)}),_e&&$r(f,E),C}function w(f,v,x,S){if(typeof x=="object"&&x!==null&&x.type===vi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ka:e:{for(var C=x.key,k=v;k!==null;){if(k.key===C){if(C=x.type,C===vi){if(k.tag===7){n(f,k.sibling),v=i(k,x.props.children),v.return=f,f=v;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rr&&Ng(C)===k.type){n(f,k.sibling),v=i(k,x.props),v.ref=wo(f,k,x),v.return=f,f=v;break e}n(f,k);break}else t(f,k);k=k.sibling}x.type===vi?(v=Hr(x.props.children,f.mode,S,x.key),v.return=f,f=v):(S=Ns(x.type,x.key,x.props,null,f.mode,S),S.ref=wo(f,v,x),S.return=f,f=S)}return a(f);case gi:e:{for(k=x.key;v!==null;){if(v.key===k)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(f,v.sibling),v=i(v,x.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else t(f,v);v=v.sibling}v=Gc(x,f.mode,S),v.return=f,f=v}return a(f);case rr:return k=x._init,w(f,v,k(x._payload),S)}if(jo(x))return h(f,v,x,S);if(go(x))return y(f,v,x,S);ss(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(f,v.sibling),v=i(v,x),v.return=f,f=v):(n(f,v),v=Wc(x,f.mode,S),v.return=f,f=v),a(f)):n(f,v)}return w}var Ni=tx(!0),nx=tx(!1),Ia={},_n=kr(Ia),ca=kr(Ia),da=kr(Ia);function zr(e){if(e===Ia)throw Error(V(174));return e}function fh(e,t){switch(ge(da,t),ge(ca,e),ge(_n,Ia),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:uf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=uf(t,e)}xe(_n),ge(_n,t)}function zi(){xe(_n),xe(ca),xe(da)}function rx(e){zr(da.current);var t=zr(_n.current),n=uf(t,e.type);t!==n&&(ge(ca,e),ge(_n,n))}function ph(e){ca.current===e&&(xe(_n),xe(ca))}var Ce=kr(0);function wl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nc=[];function hh(){for(var e=0;e<Nc.length;e++)Nc[e]._workInProgressVersionPrimary=null;Nc.length=0}var Ds=Xn.ReactCurrentDispatcher,zc=Xn.ReactCurrentBatchConfig,Yr=0,Ee=null,Fe=null,We=null,Sl=!1,Uo=!1,fa=0,JE=0;function Je(){throw Error(V(321))}function mh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!cn(e[n],t[n]))return!1;return!0}function gh(e,t,n,r,i,o){if(Yr=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ds.current=e===null||e.memoizedState===null?rk:ik,e=n(r,i),Uo){o=0;do{if(Uo=!1,fa=0,25<=o)throw Error(V(301));o+=1,We=Fe=null,t.updateQueue=null,Ds.current=ok,e=n(r,i)}while(Uo)}if(Ds.current=_l,t=Fe!==null&&Fe.next!==null,Yr=0,We=Fe=Ee=null,Sl=!1,t)throw Error(V(300));return e}function vh(){var e=fa!==0;return fa=0,e}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ee.memoizedState=We=e:We=We.next=e,We}function Yt(){if(Fe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=We===null?Ee.memoizedState:We.next;if(t!==null)We=t,Fe=e;else{if(e===null)throw Error(V(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?Ee.memoizedState=We=e:We=We.next=e}return We}function pa(e,t){return typeof t=="function"?t(e):t}function Bc(e){var t=Yt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var c=u.lane;if((Yr&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,Ee.lanes|=c,qr|=c}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,cn(r,t.memoizedState)||(wt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,qr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vc(e){var t=Yt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);cn(o,t.memoizedState)||(wt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ix(){}function ox(e,t){var n=Ee,r=Yt(),i=t(),o=!cn(r.memoizedState,i);if(o&&(r.memoizedState=i,wt=!0),r=r.queue,yh(lx.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,ha(9,sx.bind(null,n,r,i,t),void 0,null),Ge===null)throw Error(V(349));Yr&30||ax(n,t,i)}return i}function ax(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sx(e,t,n,r){t.value=n,t.getSnapshot=r,ux(t)&&cx(e)}function lx(e,t,n){return n(function(){ux(t)&&cx(e)})}function ux(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!cn(e,n)}catch{return!0}}function cx(e){var t=Un(e,1);t!==null&&sn(t,e,1,-1)}function zg(e){var t=vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},t.queue=e,e=e.dispatch=nk.bind(null,Ee,e),[t.memoizedState,e]}function ha(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function dx(){return Yt().memoizedState}function Ls(e,t,n,r){var i=vn();Ee.flags|=e,i.memoizedState=ha(1|t,n,void 0,r===void 0?null:r)}function du(e,t,n,r){var i=Yt();r=r===void 0?null:r;var o=void 0;if(Fe!==null){var a=Fe.memoizedState;if(o=a.destroy,r!==null&&mh(r,a.deps)){i.memoizedState=ha(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=ha(1|t,n,o,r)}function Bg(e,t){return Ls(8390656,8,e,t)}function yh(e,t){return du(2048,8,e,t)}function fx(e,t){return du(4,2,e,t)}function px(e,t){return du(4,4,e,t)}function hx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mx(e,t,n){return n=n!=null?n.concat([e]):null,du(4,4,hx.bind(null,t,e),n)}function xh(){}function gx(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vx(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yx(e,t,n){return Yr&21?(cn(n,t)||(n=wy(),Ee.lanes|=n,qr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=n)}function ek(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=zc.transition;zc.transition={};try{e(!1),t()}finally{he=n,zc.transition=r}}function xx(){return Yt().memoizedState}function tk(e,t,n){var r=xr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bx(e))wx(t,n);else if(n=Zy(e,t,n,r),n!==null){var i=ft();sn(n,e,r,i),Sx(n,t,r)}}function nk(e,t,n){var r=xr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bx(e))wx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,cn(l,a)){var s=t.interleaved;s===null?(i.next=i,ch(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Zy(e,t,i,r),n!==null&&(i=ft(),sn(n,e,r,i),Sx(n,t,r))}}function bx(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function wx(e,t){Uo=Sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kp(e,n)}}var _l={readContext:Gt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},rk={readContext:Gt,useCallback:function(e,t){return vn().memoizedState=[e,t===void 0?null:t],e},useContext:Gt,useEffect:Bg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ls(4194308,4,hx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ls(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ls(4,2,e,t)},useMemo:function(e,t){var n=vn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tk.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=vn();return e={current:e},t.memoizedState=e},useState:zg,useDebugValue:xh,useDeferredValue:function(e){return vn().memoizedState=e},useTransition:function(){var e=zg(!1),t=e[0];return e=ek.bind(null,e[1]),vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=vn();if(_e){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Ge===null)throw Error(V(349));Yr&30||ax(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bg(lx.bind(null,r,o,e),[e]),r.flags|=2048,ha(9,sx.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=vn(),t=Ge.identifierPrefix;if(_e){var n=Fn,r=An;n=(r&~(1<<32-an(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=JE++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ik={readContext:Gt,useCallback:gx,useContext:Gt,useEffect:yh,useImperativeHandle:mx,useInsertionEffect:fx,useLayoutEffect:px,useMemo:vx,useReducer:Bc,useRef:dx,useState:function(){return Bc(pa)},useDebugValue:xh,useDeferredValue:function(e){var t=Yt();return yx(t,Fe.memoizedState,e)},useTransition:function(){var e=Bc(pa)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:ix,useSyncExternalStore:ox,useId:xx,unstable_isNewReconciler:!1},ok={readContext:Gt,useCallback:gx,useContext:Gt,useEffect:yh,useImperativeHandle:mx,useInsertionEffect:fx,useLayoutEffect:px,useMemo:vx,useReducer:Vc,useRef:dx,useState:function(){return Vc(pa)},useDebugValue:xh,useDeferredValue:function(e){var t=Yt();return Fe===null?t.memoizedState=e:yx(t,Fe.memoizedState,e)},useTransition:function(){var e=Vc(pa)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:ix,useSyncExternalStore:ox,useId:xx,unstable_isNewReconciler:!1};function Bi(e,t){try{var n="",r=t;do n+=IC(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Hc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $f(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ak=typeof WeakMap=="function"?WeakMap:Map;function _x(e,t,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){El||(El=!0,Vf=r),$f(e,t)},n}function Cx(e,t,n){n=Nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){$f(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){$f(e,t),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Vg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ak;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=bk.bind(null,e,t,n),t.then(e,e))}function Hg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ug(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nn(-1,1),t.tag=2,vr(n,t,1))),n.lanes|=1),e)}var sk=Xn.ReactCurrentOwner,wt=!1;function ct(e,t,n,r){t.child=e===null?nx(t,null,n,r):Ni(t,e.child,n,r)}function Wg(e,t,n,r,i){n=n.render;var o=t.ref;return $i(t,i),r=gh(e,t,n,r,o,i),n=vh(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(_e&&n&&ih(t),t.flags|=1,ct(e,t,r,i),t.child)}function Gg(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Th(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ex(e,t,o,r,i)):(e=Ns(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(a,r)&&e.ref===t.ref)return Wn(e,t,i)}return t.flags|=1,e=br(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ex(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(aa(o,r)&&e.ref===t.ref)if(wt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(wt=!0);else return t.lanes=e.lanes,Wn(e,t,i)}return If(e,t,n,r,i)}function kx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ti,Ot),Ot|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Ti,Ot),Ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ge(Ti,Ot),Ot|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ge(Ti,Ot),Ot|=r;return ct(e,t,i,n),t.child}function Tx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function If(e,t,n,r,i){var o=_t(n)?Wr:at.current;return o=Ai(t,o),$i(t,i),n=gh(e,t,n,r,o,i),r=vh(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(_e&&r&&ih(t),t.flags|=1,ct(e,t,n,i),t.child)}function Yg(e,t,n,r,i){if(_t(n)){var o=!0;ml(t)}else o=!1;if($i(t,i),t.stateNode===null)Rs(e,t),ex(t,n,r),jf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gt(u):(u=_t(n)?Wr:at.current,u=Ai(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Fg(t,a,r,u),ir=!1;var m=t.memoizedState;a.state=m,bl(t,r,a,i),s=t.memoizedState,l!==r||m!==s||St.current||ir?(typeof c=="function"&&(Mf(t,n,c,r),s=t.memoizedState),(l=ir||Ag(t,n,l,r,m,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Qy(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:en(t.type,l),a.props=u,d=t.pendingProps,m=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Gt(s):(s=_t(n)?Wr:at.current,s=Ai(t,s));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||m!==s)&&Fg(t,a,r,s),ir=!1,m=t.memoizedState,a.state=m,bl(t,r,a,i);var h=t.memoizedState;l!==d||m!==h||St.current||ir?(typeof p=="function"&&(Mf(t,n,p,r),h=t.memoizedState),(u=ir||Ag(t,n,u,r,m,h,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Df(e,t,n,r,o,i)}function Df(e,t,n,r,i,o){Tx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&$g(t,n,!1),Wn(e,t,o);r=t.stateNode,sk.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ni(t,e.child,null,o),t.child=Ni(t,null,l,o)):ct(e,t,l,o),t.memoizedState=r.state,i&&$g(t,n,!0),t.child}function Px(e){var t=e.stateNode;t.pendingContext?jg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jg(e,t.context,!1),fh(e,t.containerInfo)}function qg(e,t,n,r,i){return Fi(),ah(i),t.flags|=256,ct(e,t,n,r),t.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function Rf(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ox(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(Ce,i&1),e===null)return Pf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=hu(a,r,0,null),e=Hr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Rf(n),t.memoizedState=Lf,e):bh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return lk(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=br(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=br(l,o):(o=Hr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Rf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Lf,r}return o=e.child,e=o.sibling,r=br(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bh(e,t){return t=hu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ls(e,t,n,r){return r!==null&&ah(r),Ni(t,e.child,null,n),e=bh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lk(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Hc(Error(V(422))),ls(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=hu({mode:"visible",children:r.children},i,0,null),o=Hr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ni(t,e.child,null,a),t.child.memoizedState=Rf(a),t.memoizedState=Lf,o);if(!(t.mode&1))return ls(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=Hc(o,r,void 0),ls(e,t,a,r)}if(l=(a&e.childLanes)!==0,wt||l){if(r=Ge,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Un(e,i),sn(r,e,i,-1))}return kh(),r=Hc(Error(V(421))),ls(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=wk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,jt=gr(i.nextSibling),It=t,_e=!0,rn=null,e!==null&&(Vt[Ht++]=An,Vt[Ht++]=Fn,Vt[Ht++]=Gr,An=e.id,Fn=e.overflow,Gr=t),t=bh(t,r.children),t.flags|=4096,t)}function Xg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Of(e.return,t,n)}function Uc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Mx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ct(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xg(e,n,t);else if(e.tag===19)Xg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&wl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Uc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Uc(t,!0,n,null,o);break;case"together":Uc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Rs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=br(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=br(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uk(e,t,n){switch(t.tag){case 3:Px(t),Fi();break;case 5:rx(t);break;case 1:_t(t.type)&&ml(t);break;case 4:fh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(yl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?Ox(e,t,n):(ge(Ce,Ce.current&1),e=Wn(e,t,n),e!==null?e.sibling:null);ge(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Mx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,kx(e,t,n)}return Wn(e,t,n)}var jx,Af,$x,Ix;jx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Af=function(){};$x=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zr(_n.current);var o=null;switch(n){case"input":i=of(e,i),r=of(e,r),o=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),o=[];break;case"textarea":i=lf(e,i),r=lf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pl)}cf(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ve("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ix=function(e,t,n,r){n!==r&&(t.flags|=4)};function So(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ck(e,t,n){var r=t.pendingProps;switch(oh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return _t(t.type)&&hl(),et(t),null;case 3:return r=t.stateNode,zi(),xe(St),xe(at),hh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(as(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rn!==null&&(Wf(rn),rn=null))),Af(e,t),et(t),null;case 5:ph(t);var i=zr(da.current);if(n=t.type,e!==null&&t.stateNode!=null)$x(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return et(t),null}if(e=zr(_n.current),as(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[bn]=t,r[ua]=o,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Io.length;i++)ve(Io[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":ig(r,o),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ve("invalid",r);break;case"textarea":ag(r,o),ve("invalid",r)}cf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&os(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&os(r.textContent,l,e),i=["children",""+l]):Jo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ve("scroll",r)}switch(n){case"input":Za(r),og(r,o,!0);break;case"textarea":Za(r),sg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=pl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ay(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[bn]=t,e[ua]=r,jx(e,t,!1,!1),t.stateNode=e;e:{switch(a=df(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<Io.length;i++)ve(Io[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":ig(e,r),i=of(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ve("invalid",e);break;case"textarea":ag(e,r),i=lf(e,r),ve("invalid",e);break;default:i=r}cf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?uy(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&sy(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ea(e,s):typeof s=="number"&&ea(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Jo.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ve("scroll",e):s!=null&&Up(e,o,s,a))}switch(n){case"input":Za(e),og(e,r,!1);break;case"textarea":Za(e),sg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Pi(e,!!r.multiple,o,!1):r.defaultValue!=null&&Pi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=pl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return et(t),null;case 6:if(e&&t.stateNode!=null)Ix(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=zr(da.current),zr(_n.current),as(t)){if(r=t.stateNode,n=t.memoizedProps,r[bn]=t,(o=r.nodeValue!==n)&&(e=It,e!==null))switch(e.tag){case 3:os(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&os(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bn]=t,t.stateNode=r}return et(t),null;case 13:if(xe(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&jt!==null&&t.mode&1&&!(t.flags&128))Ky(),Fi(),t.flags|=98560,o=!1;else if(o=as(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[bn]=t}else Fi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;et(t),o=!1}else rn!==null&&(Wf(rn),rn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?ze===0&&(ze=3):kh())),t.updateQueue!==null&&(t.flags|=4),et(t),null);case 4:return zi(),Af(e,t),e===null&&sa(t.stateNode.containerInfo),et(t),null;case 10:return uh(t.type._context),et(t),null;case 17:return _t(t.type)&&hl(),et(t),null;case 19:if(xe(Ce),o=t.memoizedState,o===null)return et(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)So(o,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=wl(e),a!==null){for(t.flags|=128,So(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&Oe()>Vi&&(t.flags|=128,r=!0,So(o,!1),t.lanes=4194304)}else{if(!r)if(e=wl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),So(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!_e)return et(t),null}else 2*Oe()-o.renderingStartTime>Vi&&n!==1073741824&&(t.flags|=128,r=!0,So(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Oe(),t.sibling=null,n=Ce.current,ge(Ce,r?n&1|2:n&1),t):(et(t),null);case 22:case 23:return Eh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ot&1073741824&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function dk(e,t){switch(oh(t),t.tag){case 1:return _t(t.type)&&hl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zi(),xe(St),xe(at),hh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ph(t),null;case 13:if(xe(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Ce),null;case 4:return zi(),null;case 10:return uh(t.type._context),null;case 22:case 23:return Eh(),null;case 24:return null;default:return null}}var us=!1,it=!1,fk=typeof WeakSet=="function"?WeakSet:Set,U=null;function ki(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Ff(e,t,n){try{n()}catch(r){Te(e,t,r)}}var Kg=!1;function pk(e,t){if(wf=cl,e=Ay(),rh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,d=e,m=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)m=d,d=p;for(;;){if(d===e)break t;if(m===n&&++u===i&&(l=a),m===o&&++c===r&&(s=a),(p=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=p}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sf={focusedElem:e,selectionRange:n},cl=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var y=h.memoizedProps,w=h.memoizedState,f=t.stateNode,v=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:en(t.type,y),w);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){Te(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return h=Kg,Kg=!1,h}function Wo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ff(t,n,o)}i=i.next}while(i!==r)}}function fu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Dx(e){var t=e.alternate;t!==null&&(e.alternate=null,Dx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bn],delete t[ua],delete t[Ef],delete t[XE],delete t[KE])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lx(e){return e.tag===5||e.tag===3||e.tag===4}function Zg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pl));else if(r!==4&&(e=e.child,e!==null))for(zf(e,t,n),e=e.sibling;e!==null;)zf(e,t,n),e=e.sibling}function Bf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bf(e,t,n),e=e.sibling;e!==null;)Bf(e,t,n),e=e.sibling}var Xe=null,tn=!1;function tr(e,t,n){for(n=n.child;n!==null;)Rx(e,t,n),n=n.sibling}function Rx(e,t,n){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(iu,n)}catch{}switch(n.tag){case 5:it||ki(n,t);case 6:var r=Xe,i=tn;Xe=null,tr(e,t,n),Xe=r,tn=i,Xe!==null&&(tn?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(tn?(e=Xe,n=n.stateNode,e.nodeType===8?Ac(e.parentNode,n):e.nodeType===1&&Ac(e,n),ia(e)):Ac(Xe,n.stateNode));break;case 4:r=Xe,i=tn,Xe=n.stateNode.containerInfo,tn=!0,tr(e,t,n),Xe=r,tn=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ff(n,t,a),i=i.next}while(i!==r)}tr(e,t,n);break;case 1:if(!it&&(ki(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,t,l)}tr(e,t,n);break;case 21:tr(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,tr(e,t,n),it=r):tr(e,t,n);break;default:tr(e,t,n)}}function Qg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fk),t.forEach(function(r){var i=Sk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,tn=!1;break e;case 3:Xe=l.stateNode.containerInfo,tn=!0;break e;case 4:Xe=l.stateNode.containerInfo,tn=!0;break e}l=l.return}if(Xe===null)throw Error(V(160));Rx(o,a,i),Xe=null,tn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ax(t,e),t=t.sibling}function Ax(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),mn(e),r&4){try{Wo(3,e,e.return),fu(3,e)}catch(y){Te(e,e.return,y)}try{Wo(5,e,e.return)}catch(y){Te(e,e.return,y)}}break;case 1:Kt(t,e),mn(e),r&512&&n!==null&&ki(n,n.return);break;case 5:if(Kt(t,e),mn(e),r&512&&n!==null&&ki(n,n.return),e.flags&32){var i=e.stateNode;try{ea(i,"")}catch(y){Te(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&iy(i,o),df(l,a);var u=df(l,o);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?uy(i,d):c==="dangerouslySetInnerHTML"?sy(i,d):c==="children"?ea(i,d):Up(i,c,d,u)}switch(l){case"input":af(i,o);break;case"textarea":oy(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Pi(i,!!o.multiple,p,!1):m!==!!o.multiple&&(o.defaultValue!=null?Pi(i,!!o.multiple,o.defaultValue,!0):Pi(i,!!o.multiple,o.multiple?[]:"",!1))}i[ua]=o}catch(y){Te(e,e.return,y)}}break;case 6:if(Kt(t,e),mn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Te(e,e.return,y)}}break;case 3:if(Kt(t,e),mn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ia(t.containerInfo)}catch(y){Te(e,e.return,y)}break;case 4:Kt(t,e),mn(e);break;case 13:Kt(t,e),mn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(_h=Oe())),r&4&&Qg(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||c,Kt(t,e),it=u):Kt(t,e),mn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(U=e,c=e.child;c!==null;){for(d=U=c;U!==null;){switch(m=U,p=m.child,m.tag){case 0:case 11:case 14:case 15:Wo(4,m,m.return);break;case 1:ki(m,m.return);var h=m.stateNode;if(typeof h.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(y){Te(r,n,y)}}break;case 5:ki(m,m.return);break;case 22:if(m.memoizedState!==null){e0(d);continue}}p!==null?(p.return=m,U=p):e0(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ly("display",a))}catch(y){Te(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Te(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kt(t,e),mn(e),r&4&&Qg(e);break;case 21:break;default:Kt(t,e),mn(e)}}function mn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lx(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ea(i,""),r.flags&=-33);var o=Zg(e);Bf(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Zg(e);zf(e,l,a);break;default:throw Error(V(161))}}catch(s){Te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hk(e,t,n){U=e,Fx(e)}function Fx(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||us;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||it;l=us;var u=it;if(us=a,(it=s)&&!u)for(U=i;U!==null;)a=U,s=a.child,a.tag===22&&a.memoizedState!==null?t0(i):s!==null?(s.return=a,U=s):t0(i);for(;o!==null;)U=o,Fx(o),o=o.sibling;U=i,us=l,it=u}Jg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):Jg(e)}}function Jg(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||fu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:en(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Rg(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Rg(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ia(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}it||t.flags&512&&Nf(t)}catch(m){Te(t,t.return,m)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function e0(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function t0(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fu(4,t)}catch(s){Te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Te(t,i,s)}}var o=t.return;try{Nf(t)}catch(s){Te(t,o,s)}break;case 5:var a=t.return;try{Nf(t)}catch(s){Te(t,a,s)}}}catch(s){Te(t,t.return,s)}if(t===e){U=null;break}var l=t.sibling;if(l!==null){l.return=t.return,U=l;break}U=t.return}}var mk=Math.ceil,Cl=Xn.ReactCurrentDispatcher,wh=Xn.ReactCurrentOwner,Wt=Xn.ReactCurrentBatchConfig,se=0,Ge=null,De=null,Ze=0,Ot=0,Ti=kr(0),ze=0,ma=null,qr=0,pu=0,Sh=0,Go=null,bt=null,_h=0,Vi=1/0,jn=null,El=!1,Vf=null,yr=null,cs=!1,ur=null,kl=0,Yo=0,Hf=null,As=-1,Fs=0;function ft(){return se&6?Oe():As!==-1?As:As=Oe()}function xr(e){return e.mode&1?se&2&&Ze!==0?Ze&-Ze:QE.transition!==null?(Fs===0&&(Fs=wy()),Fs):(e=he,e!==0||(e=window.event,e=e===void 0?16:Py(e.type)),e):1}function sn(e,t,n,r){if(50<Yo)throw Yo=0,Hf=null,Error(V(185));Ma(e,n,r),(!(se&2)||e!==Ge)&&(e===Ge&&(!(se&2)&&(pu|=n),ze===4&&ar(e,Ze)),Ct(e,r),n===1&&se===0&&!(t.mode&1)&&(Vi=Oe()+500,uu&&Tr()))}function Ct(e,t){var n=e.callbackNode;QC(e,t);var r=ul(e,e===Ge?Ze:0);if(r===0)n!==null&&cg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cg(n),t===1)e.tag===0?ZE(n0.bind(null,e)):Yy(n0.bind(null,e)),YE(function(){!(se&6)&&Tr()}),n=null;else{switch(Sy(r)){case 1:n=Xp;break;case 4:n=xy;break;case 16:n=ll;break;case 536870912:n=by;break;default:n=ll}n=Gx(n,Nx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nx(e,t){if(As=-1,Fs=0,se&6)throw Error(V(327));var n=e.callbackNode;if(Ii()&&e.callbackNode!==n)return null;var r=ul(e,e===Ge?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Tl(e,r);else{t=r;var i=se;se|=2;var o=Bx();(Ge!==e||Ze!==t)&&(jn=null,Vi=Oe()+500,Vr(e,t));do try{yk();break}catch(l){zx(e,l)}while(1);lh(),Cl.current=o,se=i,De!==null?t=0:(Ge=null,Ze=0,t=ze)}if(t!==0){if(t===2&&(i=gf(e),i!==0&&(r=i,t=Uf(e,i))),t===1)throw n=ma,Vr(e,0),ar(e,r),Ct(e,Oe()),n;if(t===6)ar(e,r);else{if(i=e.current.alternate,!(r&30)&&!gk(i)&&(t=Tl(e,r),t===2&&(o=gf(e),o!==0&&(r=o,t=Uf(e,o))),t===1))throw n=ma,Vr(e,0),ar(e,r),Ct(e,Oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Ir(e,bt,jn);break;case 3:if(ar(e,r),(r&130023424)===r&&(t=_h+500-Oe(),10<t)){if(ul(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Cf(Ir.bind(null,e,bt,jn),t);break}Ir(e,bt,jn);break;case 4:if(ar(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-an(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mk(r/1960))-r,10<r){e.timeoutHandle=Cf(Ir.bind(null,e,bt,jn),r);break}Ir(e,bt,jn);break;case 5:Ir(e,bt,jn);break;default:throw Error(V(329))}}}return Ct(e,Oe()),e.callbackNode===n?Nx.bind(null,e):null}function Uf(e,t){var n=Go;return e.current.memoizedState.isDehydrated&&(Vr(e,t).flags|=256),e=Tl(e,t),e!==2&&(t=bt,bt=n,t!==null&&Wf(t)),e}function Wf(e){bt===null?bt=e:bt.push.apply(bt,e)}function gk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!cn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ar(e,t){for(t&=~Sh,t&=~pu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function n0(e){if(se&6)throw Error(V(327));Ii();var t=ul(e,0);if(!(t&1))return Ct(e,Oe()),null;var n=Tl(e,t);if(e.tag!==0&&n===2){var r=gf(e);r!==0&&(t=r,n=Uf(e,r))}if(n===1)throw n=ma,Vr(e,0),ar(e,t),Ct(e,Oe()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ir(e,bt,jn),Ct(e,Oe()),null}function Ch(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Vi=Oe()+500,uu&&Tr())}}function Xr(e){ur!==null&&ur.tag===0&&!(se&6)&&Ii();var t=se;se|=1;var n=Wt.transition,r=he;try{if(Wt.transition=null,he=1,e)return e()}finally{he=r,Wt.transition=n,se=t,!(se&6)&&Tr()}}function Eh(){Ot=Ti.current,xe(Ti)}function Vr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,GE(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(oh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hl();break;case 3:zi(),xe(St),xe(at),hh();break;case 5:ph(r);break;case 4:zi();break;case 13:xe(Ce);break;case 19:xe(Ce);break;case 10:uh(r.type._context);break;case 22:case 23:Eh()}n=n.return}if(Ge=e,De=e=br(e.current,null),Ze=Ot=t,ze=0,ma=null,Sh=pu=qr=0,bt=Go=null,Nr!==null){for(t=0;t<Nr.length;t++)if(n=Nr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Nr=null}return e}function zx(e,t){do{var n=De;try{if(lh(),Ds.current=_l,Sl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sl=!1}if(Yr=0,We=Fe=Ee=null,Uo=!1,fa=0,wh.current=null,n===null||n.return===null){ze=1,ma=t,De=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Ze,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Hg(a);if(p!==null){p.flags&=-257,Ug(p,a,l,o,t),p.mode&1&&Vg(o,u,t),t=p,s=u;var h=t.updateQueue;if(h===null){var y=new Set;y.add(s),t.updateQueue=y}else h.add(s);break e}else{if(!(t&1)){Vg(o,u,t),kh();break e}s=Error(V(426))}}else if(_e&&l.mode&1){var w=Hg(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Ug(w,a,l,o,t),ah(Bi(s,l));break e}}o=s=Bi(s,l),ze!==4&&(ze=2),Go===null?Go=[o]:Go.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=_x(o,s,t);Lg(o,f);break e;case 1:l=s;var v=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(yr===null||!yr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Cx(o,l,t);Lg(o,S);break e}}o=o.return}while(o!==null)}Hx(n)}catch(C){t=C,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function Bx(){var e=Cl.current;return Cl.current=_l,e===null?_l:e}function kh(){(ze===0||ze===3||ze===2)&&(ze=4),Ge===null||!(qr&268435455)&&!(pu&268435455)||ar(Ge,Ze)}function Tl(e,t){var n=se;se|=2;var r=Bx();(Ge!==e||Ze!==t)&&(jn=null,Vr(e,t));do try{vk();break}catch(i){zx(e,i)}while(1);if(lh(),se=n,Cl.current=r,De!==null)throw Error(V(261));return Ge=null,Ze=0,ze}function vk(){for(;De!==null;)Vx(De)}function yk(){for(;De!==null&&!HC();)Vx(De)}function Vx(e){var t=Wx(e.alternate,e,Ot);e.memoizedProps=e.pendingProps,t===null?Hx(e):De=t,wh.current=null}function Hx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=dk(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,De=null;return}}else if(n=ck(n,t,Ot),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);ze===0&&(ze=5)}function Ir(e,t,n){var r=he,i=Wt.transition;try{Wt.transition=null,he=1,xk(e,t,n,r)}finally{Wt.transition=i,he=r}return null}function xk(e,t,n,r){do Ii();while(ur!==null);if(se&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(JC(e,o),e===Ge&&(De=Ge=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cs||(cs=!0,Gx(ll,function(){return Ii(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Wt.transition,Wt.transition=null;var a=he;he=1;var l=se;se|=4,wh.current=null,pk(e,n),Ax(n,e),NE(Sf),cl=!!wf,Sf=wf=null,e.current=n,hk(n),UC(),se=l,he=a,Wt.transition=o}else e.current=n;if(cs&&(cs=!1,ur=e,kl=i),o=e.pendingLanes,o===0&&(yr=null),YC(n.stateNode),Ct(e,Oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(El)throw El=!1,e=Vf,Vf=null,e;return kl&1&&e.tag!==0&&Ii(),o=e.pendingLanes,o&1?e===Hf?Yo++:(Yo=0,Hf=e):Yo=0,Tr(),null}function Ii(){if(ur!==null){var e=Sy(kl),t=Wt.transition,n=he;try{if(Wt.transition=null,he=16>e?16:e,ur===null)var r=!1;else{if(e=ur,ur=null,kl=0,se&6)throw Error(V(331));var i=se;for(se|=4,U=e.current;U!==null;){var o=U,a=o.child;if(U.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Wo(8,c,o)}var d=c.child;if(d!==null)d.return=c,U=d;else for(;U!==null;){c=U;var m=c.sibling,p=c.return;if(Dx(c),c===u){U=null;break}if(m!==null){m.return=p,U=m;break}U=p}}}var h=o.alternate;if(h!==null){var y=h.child;if(y!==null){h.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}U=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,U=a;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Wo(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,U=f;break e}U=o.return}}var v=e.current;for(U=v;U!==null;){a=U;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,U=x;else e:for(a=v;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fu(9,l)}}catch(C){Te(l,l.return,C)}if(l===a){U=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,U=S;break e}U=l.return}}if(se=i,Tr(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(iu,e)}catch{}r=!0}return r}finally{he=n,Wt.transition=t}}return!1}function r0(e,t,n){t=Bi(n,t),t=_x(e,t,1),e=vr(e,t,1),t=ft(),e!==null&&(Ma(e,1,t),Ct(e,t))}function Te(e,t,n){if(e.tag===3)r0(e,e,n);else for(;t!==null;){if(t.tag===3){r0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){e=Bi(n,e),e=Cx(t,e,1),t=vr(t,e,1),e=ft(),t!==null&&(Ma(t,1,e),Ct(t,e));break}}t=t.return}}function bk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(Ze&n)===n&&(ze===4||ze===3&&(Ze&130023424)===Ze&&500>Oe()-_h?Vr(e,0):Sh|=n),Ct(e,t)}function Ux(e,t){t===0&&(e.mode&1?(t=es,es<<=1,!(es&130023424)&&(es=4194304)):t=1);var n=ft();e=Un(e,t),e!==null&&(Ma(e,t,n),Ct(e,n))}function wk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ux(e,n)}function Sk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Ux(e,n)}var Wx;Wx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||St.current)wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return wt=!1,uk(e,t,n);wt=!!(e.flags&131072)}else wt=!1,_e&&t.flags&1048576&&qy(t,vl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Rs(e,t),e=t.pendingProps;var i=Ai(t,at.current);$i(t,n),i=gh(null,t,r,e,i,n);var o=vh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_t(r)?(o=!0,ml(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dh(t),i.updater=cu,t.stateNode=i,i._reactInternals=t,jf(t,r,e,n),t=Df(null,t,r,!0,o,n)):(t.tag=0,_e&&o&&ih(t),ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Rs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ck(r),e=en(r,e),i){case 0:t=If(null,t,r,e,n);break e;case 1:t=Yg(null,t,r,e,n);break e;case 11:t=Wg(null,t,r,e,n);break e;case 14:t=Gg(null,t,r,en(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),If(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Yg(e,t,r,i,n);case 3:e:{if(Px(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Qy(e,t),bl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Bi(Error(V(423)),t),t=qg(e,t,r,n,i);break e}else if(r!==i){i=Bi(Error(V(424)),t),t=qg(e,t,r,n,i);break e}else for(jt=gr(t.stateNode.containerInfo.firstChild),It=t,_e=!0,rn=null,n=nx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fi(),r===i){t=Wn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return rx(t),e===null&&Pf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,_f(r,i)?a=null:o!==null&&_f(r,o)&&(t.flags|=32),Tx(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&Pf(t),null;case 13:return Ox(e,t,n);case 4:return fh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ni(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Wg(e,t,r,i,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ge(yl,r._currentValue),r._currentValue=a,o!==null)if(cn(o.value,a)){if(o.children===i.children&&!St.current){t=Wn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Nn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Of(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Of(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$i(t,n),i=Gt(i),r=r(i),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,i=en(r,t.pendingProps),i=en(r.type,i),Gg(e,t,r,i,n);case 15:return Ex(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Rs(e,t),t.tag=1,_t(r)?(e=!0,ml(t)):e=!1,$i(t,n),ex(t,r,i),jf(t,r,i,n),Df(null,t,r,!0,e,n);case 19:return Mx(e,t,n);case 22:return kx(e,t,n)}throw Error(V(156,t.tag))};function Gx(e,t){return yy(e,t)}function _k(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(e,t,n,r){return new _k(e,t,n,r)}function Th(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ck(e){if(typeof e=="function")return Th(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gp)return 11;if(e===Yp)return 14}return 2}function br(e,t){var n=e.alternate;return n===null?(n=Ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ns(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Th(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case vi:return Hr(n.children,i,o,t);case Wp:a=8,i|=8;break;case ef:return e=Ut(12,n,t,i|2),e.elementType=ef,e.lanes=o,e;case tf:return e=Ut(13,n,t,i),e.elementType=tf,e.lanes=o,e;case nf:return e=Ut(19,n,t,i),e.elementType=nf,e.lanes=o,e;case ty:return hu(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J1:a=10;break e;case ey:a=9;break e;case Gp:a=11;break e;case Yp:a=14;break e;case rr:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Ut(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Hr(e,t,n,r){return e=Ut(7,e,r,t),e.lanes=n,e}function hu(e,t,n,r){return e=Ut(22,e,r,t),e.elementType=ty,e.lanes=n,e.stateNode={isHidden:!1},e}function Wc(e,t,n){return e=Ut(6,e,null,t),e.lanes=n,e}function Gc(e,t,n){return t=Ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ek(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ph(e,t,n,r,i,o,a,l,s){return e=new Ek(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dh(o),e}function kk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yx(e){if(!e)return _r;e=e._reactInternals;e:{if(ri(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(_t(n))return Gy(e,n,t)}return t}function qx(e,t,n,r,i,o,a,l,s){return e=Ph(n,r,!0,e,i,o,a,l,s),e.context=Yx(null),n=e.current,r=ft(),i=xr(n),o=Nn(r,i),o.callback=t??null,vr(n,o,i),e.current.lanes=i,Ma(e,i,r),Ct(e,r),e}function mu(e,t,n,r){var i=t.current,o=ft(),a=xr(i);return n=Yx(n),t.context===null?t.context=n:t.pendingContext=n,t=Nn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vr(i,t,a),e!==null&&(sn(e,i,a,o),Is(e,i,a)),a}function Pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function i0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oh(e,t){i0(e,t),(e=e.alternate)&&i0(e,t)}function Tk(){return null}var Xx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mh(e){this._internalRoot=e}gu.prototype.render=Mh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));mu(e,t,null,null)};gu.prototype.unmount=Mh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xr(function(){mu(null,e,null,null)}),t[Hn]=null}};function gu(e){this._internalRoot=e}gu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ey();e={blockedOn:null,target:e,priority:t};for(var n=0;n<or.length&&t!==0&&t<or[n].priority;n++);or.splice(n,0,e),n===0&&Ty(e)}};function jh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function o0(){}function Pk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Pl(a);o.call(u)}}var a=qx(t,r,e,0,null,!1,!1,"",o0);return e._reactRootContainer=a,e[Hn]=a.current,sa(e.nodeType===8?e.parentNode:e),Xr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Pl(s);l.call(u)}}var s=Ph(e,0,!1,null,null,!1,!1,"",o0);return e._reactRootContainer=s,e[Hn]=s.current,sa(e.nodeType===8?e.parentNode:e),Xr(function(){mu(t,s,n,r)}),s}function yu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Pl(a);l.call(s)}}mu(t,a,e,i)}else a=Pk(n,t,e,i,r);return Pl(a)}_y=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$o(t.pendingLanes);n!==0&&(Kp(t,n|1),Ct(t,Oe()),!(se&6)&&(Vi=Oe()+500,Tr()))}break;case 13:Xr(function(){var r=Un(e,1);if(r!==null){var i=ft();sn(r,e,1,i)}}),Oh(e,1)}};Zp=function(e){if(e.tag===13){var t=Un(e,134217728);if(t!==null){var n=ft();sn(t,e,134217728,n)}Oh(e,134217728)}};Cy=function(e){if(e.tag===13){var t=xr(e),n=Un(e,t);if(n!==null){var r=ft();sn(n,e,t,r)}Oh(e,t)}};Ey=function(){return he};ky=function(e,t){var n=he;try{return he=e,t()}finally{he=n}};pf=function(e,t,n){switch(t){case"input":if(af(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=lu(r);if(!i)throw Error(V(90));ry(r),af(r,i)}}}break;case"textarea":oy(e,n);break;case"select":t=n.value,t!=null&&Pi(e,!!n.multiple,t,!1)}};fy=Ch;py=Xr;var Ok={usingClientEntryPoint:!1,Events:[$a,wi,lu,cy,dy,Ch]},_o={findFiberByHostInstance:Fr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Mk={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gy(e),e===null?null:e.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||Tk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ds.isDisabled&&ds.supportsFiber)try{iu=ds.inject(Mk),Sn=ds}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ok;Ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jh(t))throw Error(V(200));return kk(e,t,null,n)};Ft.createRoot=function(e,t){if(!jh(e))throw Error(V(299));var n=!1,r="",i=Xx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ph(e,1,!1,null,null,n,!1,r,i),e[Hn]=t.current,sa(e.nodeType===8?e.parentNode:e),new Mh(t)};Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=gy(t),e=e===null?null:e.stateNode,e};Ft.flushSync=function(e){return Xr(e)};Ft.hydrate=function(e,t,n){if(!vu(t))throw Error(V(200));return yu(null,e,t,!0,n)};Ft.hydrateRoot=function(e,t,n){if(!jh(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Xx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=qx(t,null,e,1,n??null,i,!1,o,a),e[Hn]=t.current,sa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new gu(t)};Ft.render=function(e,t,n){if(!vu(t))throw Error(V(200));return yu(null,e,t,!1,n)};Ft.unmountComponentAtNode=function(e){if(!vu(e))throw Error(V(40));return e._reactRootContainer?(Xr(function(){yu(null,null,e,!1,function(){e._reactRootContainer=null,e[Hn]=null})}),!0):!1};Ft.unstable_batchedUpdates=Ch;Ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vu(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return yu(e,t,n,!1,r)};Ft.version="18.2.0-next-9e3b772b8-20220608";function Kx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kx)}catch(e){console.error(e)}}Kx(),q1.exports=Ft;var xu=q1.exports,a0=xu;Qd.createRoot=a0.createRoot,Qd.hydrateRoot=a0.hydrateRoot;var ot=function(){return ot=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ot.apply(this,arguments)};function Hi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function jk(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var $k=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ik=jk(function(e){return $k.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ye="-ms-",qo="-moz-",ue="-webkit-",Zx="comm",bu="rule",$h="decl",Dk="@import",Lk="@namespace",Qx="@keyframes",Rk="@layer",Jx=Math.abs,Ih=String.fromCharCode,Gf=Object.assign;function Ak(e,t){return Ne(e,0)^45?(((t<<2^Ne(e,0))<<2^Ne(e,1))<<2^Ne(e,2))<<2^Ne(e,3):0}function eb(e){return e.trim()}function $n(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function zs(e,t,n){return e.indexOf(t,n)}function Ne(e,t){return e.charCodeAt(t)|0}function Kr(e,t,n){return e.slice(t,n)}function nn(e){return e.length}function tb(e){return e.length}function Do(e,t){return t.push(e),e}function Fk(e,t){return e.map(t).join("")}function s0(e,t){return e.filter(function(n){return!$n(n,t)})}var wu=1,Ui=1,nb=0,qt=0,$e=0,io="";function Su(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:wu,column:Ui,length:a,return:"",siblings:l}}function nr(e,t){return Gf(Su("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function si(e){for(;e.root;)e=nr(e.root,{children:[e]});Do(e,e.siblings)}function Nk(){return $e}function zk(){return $e=qt>0?Ne(io,--qt):0,Ui--,$e===10&&(Ui=1,wu--),$e}function ln(){return $e=qt<nb?Ne(io,qt++):0,Ui++,$e===10&&(Ui=1,wu++),$e}function cr(){return Ne(io,qt)}function Bs(){return qt}function _u(e,t){return Kr(io,e,t)}function ga(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Bk(e){return wu=Ui=1,nb=nn(io=e),qt=0,[]}function Vk(e){return io="",e}function Yc(e){return eb(_u(qt-1,Yf(e===91?e+2:e===40?e+1:e)))}function Hk(e){for(;($e=cr())&&$e<33;)ln();return ga(e)>2||ga($e)>3?"":" "}function Uk(e,t){for(;--t&&ln()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return _u(e,Bs()+(t<6&&cr()==32&&ln()==32))}function Yf(e){for(;ln();)switch($e){case e:return qt;case 34:case 39:e!==34&&e!==39&&Yf($e);break;case 40:e===41&&Yf(e);break;case 92:ln();break}return qt}function Wk(e,t){for(;ln()&&e+$e!==47+10;)if(e+$e===42+42&&cr()===47)break;return"/*"+_u(t,qt-1)+"*"+Ih(e===47?e:ln())}function Gk(e){for(;!ga(cr());)ln();return _u(e,qt)}function Yk(e){return Vk(Vs("",null,null,null,[""],e=Bk(e),0,[0],e))}function Vs(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,m=0,p=0,h=0,y=1,w=1,f=1,v=0,x="",S=i,C=o,k=r,_=x;w;)switch(h=v,v=ln()){case 40:if(h!=108&&Ne(_,d-1)==58){zs(_+=ne(Yc(v),"&","&\f"),"&\f",Jx(u?l[u-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:_+=Yc(v);break;case 9:case 10:case 13:case 32:_+=Hk(h);break;case 92:_+=Uk(Bs()-1,7);continue;case 47:switch(cr()){case 42:case 47:Do(qk(Wk(ln(),Bs()),t,n,s),s),(ga(h||1)==5||ga(cr()||1)==5)&&nn(_)&&Kr(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*y:l[u++]=nn(_)*f;case 125*y:case 59:case 0:switch(v){case 0:case 125:w=0;case 59+c:f==-1&&(_=ne(_,/\f/g,"")),p>0&&(nn(_)-d||y===0&&h===47)&&Do(p>32?u0(_+";",r,n,d-1,s):u0(ne(_," ","")+";",r,n,d-2,s),s);break;case 59:_+=";";default:if(Do(k=l0(_,t,n,u,c,i,l,x,S=[],C=[],d,o),o),v===123)if(c===0)Vs(_,t,k,k,S,o,d,l,C);else{switch(m){case 99:if(Ne(_,3)===110)break;case 108:if(Ne(_,2)===97)break;default:c=0;case 100:case 109:case 115:}c?Vs(e,k,k,r&&Do(l0(e,k,k,0,0,i,l,x,i,S=[],d,C),C),i,C,d,l,r?S:C):Vs(_,k,k,k,[""],C,0,l,C)}}u=c=p=0,y=f=1,x=_="",d=a;break;case 58:d=1+nn(_),p=h;default:if(y<1){if(v==123)--y;else if(v==125&&y++==0&&zk()==125)continue}switch(_+=Ih(v),v*y){case 38:f=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(nn(_)-1)*f,f=1;break;case 64:cr()===45&&(_+=Yc(ln())),m=cr(),c=d=nn(x=_+=Gk(Bs())),v++;break;case 45:h===45&&nn(_)==2&&(y=0)}}return o}function l0(e,t,n,r,i,o,a,l,s,u,c,d){for(var m=i-1,p=i===0?o:[""],h=tb(p),y=0,w=0,f=0;y<r;++y)for(var v=0,x=Kr(e,m+1,m=Jx(w=a[y])),S=e;v<h;++v)(S=eb(w>0?p[v]+" "+x:ne(x,/&\f/g,p[v])))&&(s[f++]=S);return Su(e,t,n,i===0?bu:l,s,u,c,d)}function qk(e,t,n,r){return Su(e,t,n,Zx,Ih(Nk()),Kr(e,2,-2),0,r)}function u0(e,t,n,r,i){return Su(e,t,n,$h,Kr(e,0,r),Kr(e,r+1,-1),r,i)}function rb(e,t,n){switch(Ak(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return qo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+qo+e+ye+e+e;case 5936:switch(Ne(e,t+11)){case 114:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+ye+e+e;case 6165:return ue+e+ye+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return ue+e+ye+"flex-item-"+ne(e,/flex-|-self/g,"")+($n(e,/flex-|baseline/)?"":ye+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+ye+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+ye+ne(e,"shrink","negative")+e;case 5292:return ue+e+ye+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+ye+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+ye+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!$n(e,/flex-|baseline/))return ye+"grid-column-align"+Kr(e,t)+e;break;case 2592:case 3360:return ye+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,$n(r.props,/grid-\w+-end/)})?~zs(e+(n=n[t].value),"span",0)?e:ye+ne(e,"-start","")+e+ye+"grid-row-span:"+(~zs(n,"span",0)?$n(n,/\d+/):+$n(n,/\d+/)-+$n(e,/\d+/))+";":ye+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return $n(r.props,/grid-\w+-start/)})?e:ye+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nn(e)-1-t>6)switch(Ne(e,t+1)){case 109:if(Ne(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+qo+(Ne(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~zs(e,"stretch",0)?rb(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return ye+i+":"+o+u+(a?ye+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(Ne(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(Ne(e,Ne(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Ne(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+ye+"$2box$3")+e;case 100:return ne(e,":",":"+ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Ol(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Xk(e,t,n,r){switch(e.type){case Rk:if(e.children.length)break;case Dk:case Lk:case $h:return e.return=e.return||e.value;case Zx:return"";case Qx:return e.return=e.value+"{"+Ol(e.children,r)+"}";case bu:if(!nn(e.value=e.props.join(",")))return""}return nn(n=Ol(e.children,r))?e.return=e.value+"{"+n+"}":""}function Kk(e){var t=tb(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function Zk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Qk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case $h:e.return=rb(e.value,e.length,n);return;case Qx:return Ol([nr(e,{value:ne(e.value,"@","@"+ue)})],r);case bu:if(e.length)return Fk(n=e.props,function(i){switch($n(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":si(nr(e,{props:[ne(i,/:(read-\w+)/,":"+qo+"$1")]})),si(nr(e,{props:[i]})),Gf(e,{props:s0(n,r)});break;case"::placeholder":si(nr(e,{props:[ne(i,/:(plac\w+)/,":"+ue+"input-$1")]})),si(nr(e,{props:[ne(i,/:(plac\w+)/,":"+qo+"$1")]})),si(nr(e,{props:[ne(i,/:(plac\w+)/,ye+"input-$1")]})),si(nr(e,{props:[i]})),Gf(e,{props:s0(n,r)});break}return""})}}var Jk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ib="active",ob="data-styled-version",Cu="6.3.11",Dh=`/*!sc*/
`,Xo=typeof window<"u"&&typeof document<"u",eT=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),tT={};function Da(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Hs=new Map,Ml=new Map,Us=1,Lo=function(e){if(Hs.has(e))return Hs.get(e);for(;Ml.has(Us);)Us++;var t=Us++;return Hs.set(e,t),Ml.set(t,e),t},nT=function(e,t){Us=t+1,Hs.set(e,t),Ml.set(t,e)},Lh=Object.freeze([]),Gi=Object.freeze({});function ab(e,t,n){return n===void 0&&(n=Gi),e.theme!==n.theme&&e.theme||t||n.theme}var sb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),rT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,iT=/(^-|-$)/g;function c0(e){return e.replace(rT,"-").replace(iT,"")}var oT=/(a)(d)/gi,d0=function(e){return String.fromCharCode(e+(e>25?39:97))};function qf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=d0(t%52)+n;return(d0(t%52)+n).replace(oT,"$1-$2")}var qc,Dr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},lb=function(e){return Dr(5381,e)};function Rh(e){return qf(lb(e)>>>0)}function aT(e){return e.displayName||e.name||"Component"}function Xc(e){return typeof e=="string"&&!0}var ub=typeof Symbol=="function"&&Symbol.for,cb=ub?Symbol.for("react.memo"):60115,sT=ub?Symbol.for("react.forward_ref"):60112,lT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},db={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cT=((qc={})[sT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qc[cb]=db,qc);function f0(e){return("type"in(t=e)&&t.type.$$typeof)===cb?db:"$$typeof"in e?cT[e.$$typeof]:lT;var t}var dT=Object.defineProperty,fT=Object.getOwnPropertyNames,p0=Object.getOwnPropertySymbols,pT=Object.getOwnPropertyDescriptor,hT=Object.getPrototypeOf,h0=Object.prototype;function fb(e,t,n){if(typeof t!="string"){if(h0){var r=hT(t);r&&r!==h0&&fb(e,r,n)}var i=fT(t);p0&&(i=i.concat(p0(t)));for(var o=f0(e),a=f0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in uT||n&&n[s]||a&&s in a||o&&s in o)){var u=pT(t,s);try{dT(e,s,u)}catch{}}}}return e}function Yi(e){return typeof e=="function"}function Ah(e){return typeof e=="object"&&"styledComponentId"in e}function Br(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function jl(e,t){return e.join(t||"")}function va(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xf(e,t,n){if(n===void 0&&(n=!1),!n&&!va(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xf(e[r],t[r]);else if(va(t))for(var r in t)e[r]=Xf(e[r],t[r]);return e}function Fh(e,t){Object.defineProperty(e,"toString",{value:t})}var mT=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Da(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+Dh;return n},e}(),gT="style[".concat(Wi,"][").concat(ob,'="').concat(Cu,'"]'),vT=new RegExp("^".concat(Wi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),m0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Kf=function(e){if(!e)return document;if(m0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(m0(t))return t}return document},yT=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},xT=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Dh),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(vT);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(nT(c,u),yT(e,c,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},Kc=function(e){for(var t=Kf(e.options.target).querySelectorAll(gT),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Wi)!==ib&&(xT(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function bT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var pb=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Wi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Wi,ib),r.setAttribute(ob,Cu);var a=bT();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},wT=function(){function e(t){this.element=pb(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Da(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ST=function(){function e(t){this.element=pb(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),_T=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),g0=Xo,CT={isServer:!Xo,useCSSOMInjection:!eT},$l=function(){function e(t,n,r){t===void 0&&(t=Gi),n===void 0&&(n={});var i=this;this.options=ot(ot({},CT),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Xo&&g0&&(g0=!1,Kc(this)),Fh(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(d){var m=function(f){return Ml.get(f)}(d);if(m===void 0)return"continue";var p=o.names.get(m);if(p===void 0||!p.size)return"continue";var h=a.getGroup(d);if(h.length===0)return"continue";var y=Wi+".g"+d+'[id="'+m+'"]',w="";p.forEach(function(f){f.length>0&&(w+=f+",")}),s+=h+y+'{content:"'+w+'"}'+Dh},c=0;c<l;c++)u(c);return s}(i)})}return e.registerId=function(t){return Lo(t)},e.prototype.rehydrate=function(){!this.server&&Xo&&Kc(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ot(ot({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Xo&&t.target!==this.options.target&&Kf(this.options.target)!==Kf(t.target)&&Kc(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new _T(i):r?new wT(i):new ST(i)}(this.options),new mT(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Lo(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Lo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Lo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ET=/&/g,In=47,Lr=42;function v0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==In||e.charCodeAt(o+1)!==Lr)if(i)a===Lr&&e.charCodeAt(o+1)===In&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function hb(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=hb(n.children,t)),n})}function kT(e){var t,n,r,i=e===void 0?Gi:e,o=i.options,a=o===void 0?Gi:o,l=i.plugins,s=l===void 0?Lh:l,u=function(h,y,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):h},c=s.slice();c.push(function(h){h.type===bu&&h.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),h.props[0]=h.props[0].replace(ET,n).replace(r,u))}),a.prefix&&c.push(Qk),c.push(Xk);var d=[],m=Kk(c.concat(Zk(function(h){return d.push(h)}))),p=function(h,y,w,f){y===void 0&&(y=""),w===void 0&&(w=""),f===void 0&&(f="&"),t=f,n=y,r=void 0;var v=function(S){if(!v0(S))return S;for(var C=S.length,k="",_=0,E=0,M=0,j=!1,D=0;D<C;D++){var O=S.charCodeAt(D);if(M!==0||j||O!==In||S.charCodeAt(D+1)!==Lr)if(j)O===Lr&&S.charCodeAt(D+1)===In&&(j=!1,D++);else if(O!==34&&O!==39||D!==0&&S.charCodeAt(D-1)===92){if(M===0)if(O===123)E++;else if(O===125){if(--E<0){for(var $=D+1;$<C;){var R=S.charCodeAt($);if(R===59||R===10)break;$++}$<C&&S.charCodeAt($)===59&&$++,E=0,D=$-1,_=$;continue}E===0&&(k+=S.substring(_,D+1),_=D+1)}else O===59&&E===0&&(k+=S.substring(_,D+1),_=D+1)}else M===0?M=O:M===O&&(M=0);else j=!0,D++}if(_<C){var L=S.substring(_);v0(L)||(k+=L)}return k}(function(S){if(S.indexOf("//")===-1)return S;for(var C=S.length,k=[],_=0,E=0,M=0,j=0;E<C;){var D=S.charCodeAt(E);if(D!==34&&D!==39||E!==0&&S.charCodeAt(E-1)===92)if(M===0)if(D===In&&E+1<C&&S.charCodeAt(E+1)===Lr){for(E+=2;E+1<C&&(S.charCodeAt(E)!==Lr||S.charCodeAt(E+1)!==In);)E++;E+=2}else if(D===40&&E>=3&&(32|S.charCodeAt(E-1))==108&&(32|S.charCodeAt(E-2))==114&&(32|S.charCodeAt(E-3))==117)j=1,E++;else if(j>0)D===41?j--:D===40&&j++,E++;else if(D===Lr&&E+1<C&&S.charCodeAt(E+1)===In)E>_&&k.push(S.substring(_,E)),_=E+=2;else if(D===In&&E+1<C&&S.charCodeAt(E+1)===In){for(E>_&&k.push(S.substring(_,E));E<C&&S.charCodeAt(E)!==10;)E++;_=E}else E++;else E++;else M===0?M=D:M===D&&(M=0),E++}return _===0?S:(_<C&&k.push(S.substring(_)),k.join(""))}(h)),x=Yk(w||y?"".concat(w," ").concat(y," { ").concat(v," }"):v);return a.namespace&&(x=hb(x,a.namespace)),d=[],Ol(x,m),d};return p.hash=s.length?s.reduce(function(h,y){return y.name||Da(15),Dr(h,y.name)},5381).toString():"",p}var TT=new $l,Zf=kT(),mb=q.createContext({shouldForwardProp:void 0,styleSheet:TT,stylis:Zf});mb.Consumer;q.createContext(void 0);function Qf(){return q.useContext(mb)}var gb=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Zf);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Fh(this,function(){throw Da(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Zf),this.name+t.hash},e}();function PT(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Jk||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var OT=function(e){return e>="A"&&e<="Z"};function y0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;OT(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var vb=function(e){return e==null||e===!1||e===""},yb=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!vb(r)&&(Array.isArray(r)&&r.isCss||Yi(r)?t.push("".concat(y0(n),":"),r,";"):va(r)?t.push.apply(t,Hi(Hi(["".concat(n," {")],yb(r),!1),["}"],!1)):t.push("".concat(y0(n),": ").concat(PT(n,r),";")))}return t};function wr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(vb(e))return i;if(Ah(e))return i.push(".".concat(e.styledComponentId)),i;if(Yi(e)){if(!Yi(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return wr(o,t,n,r,i)}var a;if(e instanceof gb)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(va(e)){for(var l=yb(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)wr(e[s],t,n,r,i);return i}function xb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Yi(n)&&!Ah(n))return!1}return!0}var MT=lb(Cu),jT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xb(t),this.componentId=n,this.baseHash=Dr(MT,n),this.baseStyle=r,$l.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Br(i,this.staticRulesId);else{var o=jl(wr(this.rules,t,n,r)),a=qf(Dr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Br(i,a),this.staticRulesId=a}else{for(var s=Dr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var m=jl(wr(d,t,n,r));s=Dr(Dr(s,String(c)),m),u+=m}}if(u){var p=qf(s>>>0);if(!n.hasNameForId(this.componentId,p)){var h=r(u,".".concat(p),void 0,this.componentId);n.insertRules(this.componentId,p,h)}i=Br(i,p)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Lo(this.componentId)):""}},e}(),Nh=q.createContext(void 0);Nh.Consumer;var Zc={};function $T(e,t,n){var r=Ah(e),i=e,o=!Xc(e),a=t.attrs,l=a===void 0?Lh:a,s=t.componentId,u=s===void 0?function(S,C){var k=typeof S!="string"?"sc":c0(S);Zc[k]=(Zc[k]||0)+1;var _="".concat(k,"-").concat(Rh(Cu+k+Zc[k]));return C?"".concat(C,"-").concat(_):_}(t.displayName,t.parentComponentId):s,c=t.displayName,d=c===void 0?function(S){return Xc(S)?"styled.".concat(S):"Styled(".concat(aT(S),")")}(e):c,m=t.displayName&&t.componentId?"".concat(c0(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,h=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;h=function(S,C){return y(S,C)&&w(S,C)}}else h=y}var f=new jT(n,m,r?i.componentStyle:void 0);function v(S,C){return function(k,_,E){var M=k.attrs,j=k.componentStyle,D=k.defaultProps,O=k.foldedComponentIds,$=k.styledComponentId,R=k.target,L=q.useContext(Nh),N=Qf(),F=k.shouldForwardProp||N.shouldForwardProp,P=ab(_,L,D)||Gi,I=function(X,ee,fe){for(var be,ie=ot(ot({},ee),{className:void 0,theme:fe}),je=0;je<X.length;je+=1){var Be=Yi(be=X[je])?be(ie):be;for(var Ve in Be)Ve==="className"?ie.className=Br(ie.className,Be[Ve]):Ve==="style"?ie.style=ot(ot({},ie.style),Be[Ve]):ie[Ve]=Be[Ve]}return"className"in ee&&typeof ee.className=="string"&&(ie.className=Br(ie.className,ee.className)),ie}(M,_,P),A=I.as||R,B={};for(var z in I)I[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&I.theme===P||(z==="forwardedAs"?B.as=I.forwardedAs:F&&!F(z,A)||(B[z]=I[z]));var H=function(X,ee){var fe=Qf(),be=X.generateAndInjectStyles(ee,fe.styleSheet,fe.stylis);return be}(j,I),G=H.className,W=Br(O,$);return G&&(W+=" "+G),I.className&&(W+=" "+I.className),B[Xc(A)&&!sb.has(A)?"class":"className"]=W,E&&(B.ref=E),b.createElement(A,B)}(x,S,C)}v.displayName=d;var x=q.forwardRef(v);return x.attrs=p,x.componentStyle=f,x.displayName=d,x.shouldForwardProp=h,x.foldedComponentIds=r?Br(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=m,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(C){for(var k=[],_=1;_<arguments.length;_++)k[_-1]=arguments[_];for(var E=0,M=k;E<M.length;E++)Xf(C,M[E],!0);return C}({},i.defaultProps,S):S}}),Fh(x,function(){return".".concat(x.styledComponentId)}),o&&fb(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function x0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var b0=function(e){return Object.assign(e,{isCss:!0})};function zh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Yi(e)||va(e))return b0(wr(x0(Lh,Hi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?wr(r):b0(wr(x0(r,t)))}function Jf(e,t,n){if(n===void 0&&(n=Gi),!t)throw Da(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,zh.apply(void 0,Hi([i],o,!1)))};return r.attrs=function(i){return Jf(e,t,ot(ot({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Jf(e,t,ot(ot({},n),i))},r}var bb=function(e){return Jf($T,e)},T=bb;sb.forEach(function(e){T[e]=bb(e)});var IT=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=xb(t),$l.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(jl(wr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&$l.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function DT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=zh.apply(void 0,Hi([e],t,!1)),i="sc-global-".concat(Rh(JSON.stringify(r))),o=new IT(r,i),a=new WeakMap,l=function(u){var c=Qf(),d=q.useContext(Nh),m=a.get(c.styleSheet);return m===void 0&&(m=c.styleSheet.allocateGSInstance(i),a.set(c.styleSheet,m)),(typeof window>"u"||!c.styleSheet.server)&&s(m,u,c.styleSheet,d,c.stylis),q.useLayoutEffect(function(){return c.styleSheet.server||s(m,u,c.styleSheet,d,c.stylis),function(){var p;o.removeStyles(m,c.styleSheet),p=c.styleSheet.options.target,typeof document<"u"&&(p??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(h){return h.remove()})}},[m,u,c.styleSheet,d,c.stylis]),null};function s(u,c,d,m,p){if(o.isStatic)o.renderStyles(u,tT,d,p);else{var h=ot(ot({},c),{theme:ab(c,m,l.defaultProps)});o.renderStyles(u,h,d,p)}}return q.memo(l)}function Bh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=jl(zh.apply(void 0,Hi([e],t,!1))),i=Rh(r);return new gb(i,r)}const LT=T.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,RT=T.div`
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
   
  }
`,AT=T.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,FT=T.div`

  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`,NT=T.div`
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
`;const zT=T(Me)`
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
`;const BT=T.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,VT=T.button`
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
`;const HT=T.div`
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
`,UT=T.button`
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
`,WT=T.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,fs=T(Me)`
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
`,GT=T.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,YT=T.div`
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
`,qT=T.div`
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



`,XT=T.input`
  
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
`,KT=T.button`
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
   
`,ZT=T.svg`
  width: 24px;
  height: 24px;
  

`,Tn="/Didiv/assets/symbol-defs-f1e4efb3.svg",QT=()=>{const[e,t]=b.useState("");return g.jsxs(qT,{children:[g.jsx(XT,{name:"site-search",value:e,onChange:n=>t(n.target.value),placeholder:"Пошук",autoComplete:"off"}),g.jsx(KT,{className:"search-button",children:g.jsx(ZT,{children:g.jsx("use",{href:`${Tn}#icon-search`})})})]})};var wb={exports:{}},Sb={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=b;function JT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var eP=typeof Object.is=="function"?Object.is:JT,tP=La.useSyncExternalStore,nP=La.useRef,rP=La.useEffect,iP=La.useMemo,oP=La.useDebugValue;Sb.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=nP(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=iP(function(){function s(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&a.hasValue){var h=a.value;if(i(h,p))return d=h}return d=p}if(h=d,eP(c,p))return h;var y=r(p);return i!==void 0&&i(h,y)?(c=p,h):(c=p,d=y)}var u=!1,c,d,m=n===void 0?null:n;return[function(){return s(t())},m===null?void 0:function(){return s(m())}]},[t,n,r,i]);var l=tP(e,o[0],o[1]);return rP(function(){a.hasValue=!0,a.value=l},[l]),oP(l),l};wb.exports=Sb;var aP=wb.exports;function sP(e){e()}function lP(){let e=null,t=null;return{clear(){e=null,t=null},notify(){sP(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var w0={notify(){},get:()=>[]};function uP(e,t){let n,r=w0,i=0,o=!1;function a(y){c();const w=r.subscribe(y);let f=!1;return()=>{f||(f=!0,w(),d())}}function l(){r.notify()}function s(){h.onStateChange&&h.onStateChange()}function u(){return o}function c(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=lP())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=w0)}function m(){o||(o=!0,c())}function p(){o&&(o=!1,d())}const h={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:m,tryUnsubscribe:p,getListeners:()=>r};return h}var cP=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dP=cP(),fP=()=>typeof navigator<"u"&&navigator.product==="ReactNative",pP=fP(),hP=()=>dP||pP?b.useLayoutEffect:b.useEffect,mP=hP(),Qc=Symbol.for("react-redux-context"),Jc=typeof globalThis<"u"?globalThis:{};function gP(){if(!b.createContext)return{};const e=Jc[Qc]??(Jc[Qc]=new Map);let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var Cr=gP();function vP(e){const{children:t,context:n,serverState:r,store:i}=e,o=b.useMemo(()=>{const s=uP(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=b.useMemo(()=>i.getState(),[i]);mP(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||Cr;return b.createElement(l.Provider,{value:o},t)}var yP=vP;function Vh(e=Cr){return function(){return b.useContext(e)}}var _b=Vh();function Cb(e=Cr){const t=e===Cr?_b:Vh(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var xP=Cb();function bP(e=Cr){const t=e===Cr?xP:Cb(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Kn=bP(),wP=(e,t)=>e===t;function SP(e=Cr){const t=e===Cr?_b:Vh(e),n=(r,i={})=>{const{equalityFn:o=wP}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:u}=a;b.useRef(!0);const c=b.useCallback({[r.name](m){return r(m)}}[r.name],[r]),d=aP.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,c,o);return b.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Dt=SP();const _P=T(Me)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,CP=T.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,EP=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,kP=T.div`
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
`,TP=({onClick:e})=>{const t=Dt(n=>n.cart.items.length);return g.jsx(_P,{to:"/cart",children:g.jsxs(EP,{onClick:e,children:[g.jsx(CP,{children:g.jsx("use",{href:`${Tn}#icon-cart`})}),t>0&&g.jsx(kP,{children:t})]})})},PP=T.nav`
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
`,ps=T(Me)`
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
`,OP=()=>g.jsxs(PP,{children:[g.jsx(ps,{to:"/",children:"Головна"}),g.jsx(ps,{to:"/about",children:"Про нас"}),g.jsx(ps,{to:"/catalog",children:"Каталог"}),g.jsx(ps,{to:"/contacts",children:"Контакти"})]}),MP=T.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,jP=T(Me)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
 
  }
       
`,$P=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,IP=T.div`

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
`,DP=({onClick:e})=>{const t=Dt(n=>n.favorites.items.length);return g.jsx(jP,{to:"/favorite",children:g.jsxs($P,{onClick:e,children:[g.jsx(MP,{children:g.jsx("use",{href:`${Tn}#icon-heart`})}),t>0&&g.jsx(IP,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=e=>{const t=RP(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var AP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NP=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>b.createElement("svg",{ref:s,...AP,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Eb("lucide",i),...!o&&!FP(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,c])=>b.createElement(u,c)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(NP,{ref:o,iconNode:t,className:Eb(`lucide-${LP(S0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=S0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Hh=fn("arrow-down-narrow-wide",zP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Uh=fn("arrow-right",BP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Wh=fn("heart",VP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],UP=fn("house",HP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],GP=fn("info",WP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],qP=fn("mail",YP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],KP=fn("shopping-bag",XP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Ra=fn("shopping-cart",ZP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],kb=fn("sliders-horizontal",QP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Tb=fn("trash-2",JP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Pb=fn("x",eO),tO=()=>{const[e,t]=b.useState(!1);return g.jsx(LT,{children:g.jsx(RT,{children:g.jsxs(AT,{children:[g.jsxs(FT,{children:[g.jsx(zT,{to:"/",children:"Дідів хлів"}),g.jsxs(NT,{children:[g.jsx(TP,{}),g.jsx(DP,{}),g.jsx(OP,{}),g.jsx(VT,{onClick:()=>t(!e),children:g.jsx(BT,{children:g.jsx("use",{href:`${Tn}#icon-menu`})})}),g.jsx(YT,{open:e,onClick:()=>t(!1)}),g.jsxs(HT,{open:e,children:[g.jsx(UT,{onClick:()=>t(!1),children:g.jsx(Pb,{size:28,strokeWidth:1.5})}),g.jsxs(WT,{children:[g.jsxs(fs,{onClick:()=>t(!1),to:"/",children:[g.jsx(UP,{size:22,strokeWidth:1.5})," Головна"]}),g.jsxs(fs,{onClick:()=>t(!1),to:"/about",children:[g.jsx(GP,{size:22,strokeWidth:1.5})," Про нас"]}),g.jsxs(fs,{onClick:()=>t(!1),to:"/catalog",children:[g.jsx(KP,{size:22,strokeWidth:1.5})," Каталог"]}),g.jsxs(fs,{onClick:()=>t(!1),to:"/contacts",children:[g.jsx(qP,{size:22,strokeWidth:1.5})," Контакти"]})]}),g.jsx(GT,{children:g.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),g.jsx(QT,{})]})})})},nO=T.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,rO=T.footer`
 
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
`,iO=T.div`
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
`,ed=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,td=T.h3`
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
`,gn=T(Me)`
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
`,oO=T.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,_0=T.a`
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
`,aO=()=>g.jsx(nO,{children:g.jsxs(rO,{children:[g.jsxs(iO,{children:[g.jsxs(ed,{children:[g.jsx(td,{children:"Навігація"}),g.jsx(gn,{to:"/",children:"Головна"}),g.jsx(gn,{to:"/about",children:"Про нас"}),g.jsx(gn,{to:"/catalog",children:"Каталог"}),g.jsx(gn,{to:"/contacts",children:"Контакти"})]}),g.jsxs(ed,{children:[g.jsx(td,{children:"Інформація"}),g.jsx(gn,{to:"/delivery",children:"Оплата і доставка"}),g.jsx(gn,{children:"Повернення"}),g.jsx(gn,{children:"Гарантія"}),g.jsx(gn,{children:"Політика конфіденційності"})]})]}),g.jsxs(ed,{children:[g.jsx(td,{children:"Контакти"}),g.jsx(gn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),g.jsx(gn,{href:"mailto:email@email.com",children:"email@email.com"}),g.jsxs(oO,{children:[g.jsx(_0,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:g.jsx("svg",{width:"20px",children:g.jsx("use",{href:`${Tn}#icon-instagram`})})}),g.jsx(_0,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:g.jsx("svg",{width:"20px",children:g.jsx("use",{href:`${Tn}#icon-telegram`})})})]})]})]})}),sO=()=>g.jsxs(g.Fragment,{children:[g.jsx(tO,{}),g.jsx("main",{className:"main-content",children:g.jsx(hC,{})}),g.jsx(aO,{})]}),lO=T.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,uO=T.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
      text-align: center;

  @media screen and (min-width: 768px) {
 font-size: 35px;

  }

`,cO=T.div`
 width: 100%;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);
      margin-bottom: 30px;

  @media screen and (min-width: 768px) {
 
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {

    grid-template-columns: repeat(4, 1fr);
  }
`,dO=T.div`
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
`,fO=T(Me)`
  position: relative;
  display: block;
/* 
  border-radius: 15px; */
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
`,pO=T.span`
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
`,hO=T.div`
  padding: 10px 0;
`,mO=T.h3`
  font-size: 15px;
  font-weight: 600;
 
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,gO=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,vO=T.span`
  font-size: 17px;
  font-weight: 800;
  color: var(--black-color);
`,yO=T.button`
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

`;const xO=T(Me)`
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

`,bO=T.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,wO=T.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function qe(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var SO=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),C0=SO,nd=()=>Math.random().toString(36).substring(7).split("").join("."),_O={INIT:`@@redux/INIT${nd()}`,REPLACE:`@@redux/REPLACE${nd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${nd()}`},Il=_O;function Gh(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Yh(e,t,n){if(typeof e!="function")throw new Error(qe(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(qe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(qe(1));return n(Yh)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function u(){a===o&&(a=new Map,o.forEach((w,f)=>{a.set(f,w)}))}function c(){if(s)throw new Error(qe(3));return i}function d(w){if(typeof w!="function")throw new Error(qe(4));if(s)throw new Error(qe(5));let f=!0;u();const v=l++;return a.set(v,w),function(){if(f){if(s)throw new Error(qe(6));f=!1,u(),a.delete(v),o=null}}}function m(w){if(!Gh(w))throw new Error(qe(7));if(typeof w.type>"u")throw new Error(qe(8));if(typeof w.type!="string")throw new Error(qe(17));if(s)throw new Error(qe(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(v=>{v()}),w}function p(w){if(typeof w!="function")throw new Error(qe(10));r=w,m({type:Il.REPLACE})}function h(){const w=d;return{subscribe(f){if(typeof f!="object"||f===null)throw new Error(qe(11));function v(){const S=f;S.next&&S.next(c())}return v(),{unsubscribe:w(v)}},[C0](){return this}}}return m({type:Il.INIT}),{dispatch:m,subscribe:d,getState:c,replaceReducer:p,[C0]:h}}function CO(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Il.INIT})>"u")throw new Error(qe(12));if(typeof n(void 0,{type:Il.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(qe(13))})}function EO(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{CO(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],m=n[d],p=a[d],h=m(p,l);if(typeof h>"u")throw l&&l.type,new Error(qe(14));u[d]=h,s=s||h!==p}return s=s||r.length!==Object.keys(a).length,s?u:a}}function Dl(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function kO(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(qe(15))};const a={getState:i.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(a));return o=Dl(...l)(i.dispatch),{...i,dispatch:o}}}function TO(e){return Gh(e)&&"type"in e&&typeof e.type=="string"}var Ob=Symbol.for("immer-nothing"),E0=Symbol.for("immer-draftable"),pt=Symbol.for("immer-state");function on(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var $t=Object,qi=$t.getPrototypeOf,Ll="constructor",Eu="prototype",ep="configurable",Rl="enumerable",Ws="writable",ya="value",Gn=e=>!!e&&!!e[pt];function dn(e){var t;return e?Mb(e)||Tu(e)||!!e[E0]||!!((t=e[Ll])!=null&&t[E0])||Pu(e)||Ou(e):!1}var PO=$t[Eu][Ll].toString(),k0=new WeakMap;function Mb(e){if(!e||!qh(e))return!1;const t=qi(e);if(t===null||t===$t[Eu])return!0;const n=$t.hasOwnProperty.call(t,Ll)&&t[Ll];if(n===Object)return!0;if(!mi(n))return!1;let r=k0.get(n);return r===void 0&&(r=Function.toString.call(n),k0.set(n,r)),r===PO}function ku(e,t,n=!0){Aa(e)===0?(n?Reflect.ownKeys(e):$t.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Aa(e){const t=e[pt];return t?t.type_:Tu(e)?1:Pu(e)?2:Ou(e)?3:0}var T0=(e,t,n=Aa(e))=>n===2?e.has(t):$t[Eu].hasOwnProperty.call(e,t),tp=(e,t,n=Aa(e))=>n===2?e.get(t):e[t],Al=(e,t,n,r=Aa(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function OO(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Tu=Array.isArray,Pu=e=>e instanceof Map,Ou=e=>e instanceof Set,qh=e=>typeof e=="object",mi=e=>typeof e=="function",rd=e=>typeof e=="boolean";function MO(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Ln=e=>e.copy_||e.base_,Xh=e=>e.modified_?e.copy_:e.base_;function np(e,t){if(Pu(e))return new Map(e);if(Ou(e))return new Set(e);if(Tu(e))return Array[Eu].slice.call(e);const n=Mb(e);if(t===!0||t==="class_only"&&!n){const r=$t.getOwnPropertyDescriptors(e);delete r[pt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[Ws]===!1&&(l[Ws]=!0,l[ep]=!0),(l.get||l.set)&&(r[a]={[ep]:!0,[Ws]:!0,[Rl]:l[Rl],[ya]:e[a]})}return $t.create(qi(e),r)}else{const r=qi(e);if(r!==null&&n)return{...e};const i=$t.create(r);return $t.assign(i,e)}}function Kh(e,t=!1){return Mu(e)||Gn(e)||!dn(e)||(Aa(e)>1&&$t.defineProperties(e,{set:hs,add:hs,clear:hs,delete:hs}),$t.freeze(e),t&&ku(e,(n,r)=>{Kh(r,!0)},!1)),e}function jO(){on(2)}var hs={[ya]:jO};function Mu(e){return e===null||!qh(e)?!0:$t.isFrozen(e)}var Fl="MapSet",rp="Patches",P0="ArrayMethods",jb={};function Zr(e){const t=jb[e];return t||on(0,e),t}var O0=e=>!!jb[e],xa,$b=()=>xa,$O=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:O0(Fl)?Zr(Fl):void 0,arrayMethodsPlugin_:O0(P0)?Zr(P0):void 0});function M0(e,t){t&&(e.patchPlugin_=Zr(rp),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function ip(e){op(e),e.drafts_.forEach(IO),e.drafts_=null}function op(e){e===xa&&(xa=e.parent_)}var j0=e=>xa=$O(xa,e);function IO(e){const t=e[pt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function $0(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[pt].modified_&&(ip(t),on(4)),dn(e)&&(e=I0(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[pt].base_,e,t)}else e=I0(t,n);return DO(t,e,!0),ip(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Ob?e:void 0}function I0(e,t){if(Mu(t))return t;const n=t[pt];if(!n)return Nl(t,e.handledSet_,e);if(!ju(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);Lb(n,e)}return n.copy_}function DO(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Kh(t,n)}function Ib(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var ju=(e,t)=>e.scope_===t,LO=[];function Db(e,t,n,r){const i=Ln(e),o=e.type_;if(r!==void 0&&tp(i,r,o)===t){Al(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;ku(i,(s,u)=>{if(Gn(u)){const c=l.get(u)||[];c.push(s),l.set(u,c)}})}const a=e.draftLocations_.get(t)??LO;for(const l of a)Al(i,l,n,o)}function RO(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!ju(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=Xh(o);Db(e,o.draft_??o,a,n),Lb(o,i)})}function Lb(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}Ib(e)}}function AO(e,t,n){const{scope_:r}=e;if(Gn(n)){const i=n[pt];ju(i,r)&&i.callbacks_.push(function(){Gs(e);const a=Xh(i);Db(e,n,a,t)})}else dn(n)&&e.callbacks_.push(function(){const o=Ln(e);e.type_===3?o.has(n)&&Nl(n,r.handledSet_,r):tp(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Nl(tp(e.copy_,t,e.type_),r.handledSet_,r)})}function Nl(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Gn(e)||t.has(e)||!dn(e)||Mu(e)||(t.add(e),ku(e,(r,i)=>{if(Gn(i)){const o=i[pt];if(ju(o,n)){const a=Xh(o);Al(e,r,a,e.type_),Ib(o)}}else dn(i)&&Nl(i,t,n)})),e}function FO(e,t){const n=Tu(e),r={type_:n?1:0,scope_:t?t.scope_:$b(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=zl;n&&(i=[r],o=ba);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var zl={get(e,t){if(t===pt)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Ln(e);if(!T0(i,t,e.type_))return NO(e,i,t);const o=i[t];if(e.finalized_||!dn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&MO(t))return o;if(o===id(e.base_,t)){Gs(e);const a=e.type_===1?+t:t,l=sp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Ln(e)},ownKeys(e){return Reflect.ownKeys(Ln(e))},set(e,t,n){const r=Rb(Ln(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=id(Ln(e),t),o=i==null?void 0:i[pt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(OO(n,i)&&(n!==void 0||T0(e.base_,t,e.type_)))return!0;Gs(e),ap(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),AO(e,t,n)),!0},deleteProperty(e,t){return Gs(e),id(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),ap(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Ln(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Ws]:!0,[ep]:e.type_!==1||t!=="length",[Rl]:r[Rl],[ya]:n[t]}},defineProperty(){on(11)},getPrototypeOf(e){return qi(e.base_)},setPrototypeOf(){on(12)}},ba={};for(let e in zl){let t=zl[e];ba[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}ba.deleteProperty=function(e,t){return ba.set.call(this,e,t,void 0)};ba.set=function(e,t,n){return zl.set.call(this,e[0],t,n,e[0])};function id(e,t){const n=e[pt];return(n?Ln(n):e)[t]}function NO(e,t,n){var i;const r=Rb(t,n);return r?ya in r?r[ya]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function Rb(e,t){if(!(t in e))return;let n=qi(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=qi(n)}}function ap(e){e.modified_||(e.modified_=!0,e.parent_&&ap(e.parent_))}function Gs(e){e.copy_||(e.assigned_=new Map,e.copy_=np(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var zO=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(mi(t)&&!mi(n)){const o=n;n=t;const a=this;return function(s=o,...u){return a.produce(s,c=>n.call(this,c,...u))}}mi(n)||on(6),r!==void 0&&!mi(r)&&on(7);let i;if(dn(t)){const o=j0(this),a=sp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?ip(o):op(o)}return M0(o,r),$0(i,o)}else if(!t||!qh(t)){if(i=n(t),i===void 0&&(i=t),i===Ob&&(i=void 0),this.autoFreeze_&&Kh(i,!0),r){const o=[],a=[];Zr(rp).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else on(1,t)},this.produceWithPatches=(t,n)=>{if(mi(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},rd(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),rd(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),rd(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){dn(e)||on(8),Gn(e)&&(e=BO(e));const t=j0(this),n=sp(t,e,void 0);return n[pt].isManual_=!0,op(t),n}finishDraft(e,t){const n=e&&e[pt];(!n||!n.isManual_)&&on(9);const{scope_:r}=n;return M0(r,t),$0(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Zr(rp).applyPatches_;return Gn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function sp(e,t,n,r){const[i,o]=Pu(t)?Zr(Fl).proxyMap_(t,n):Ou(t)?Zr(Fl).proxySet_(t,n):FO(t,n);return((n==null?void 0:n.scope_)??$b()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?RO(n,o,r):o.callbacks_.push(function(s){var c;(c=s.mapSetPlugin_)==null||c.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),i}function BO(e){return Gn(e)||on(10,e),Ab(e)}function Ab(e){if(!dn(e)||Mu(e))return e;const t=e[pt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=np(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=np(e,!0);return ku(n,(i,o)=>{Al(n,i,Ab(o))},r),t&&(t.finalized_=!1),n}var VO=new zO,Fb=VO.produce;function Nb(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var HO=Nb(),UO=Nb,WO=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Dl:Dl.apply(null,arguments)};function D0(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(zn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>TO(r)&&r.type===e,n}var zb=class Ro extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Ro.prototype)}static get[Symbol.species](){return Ro}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Ro(...t[0].concat(this)):new Ro(...t.concat(this))}};function L0(e){return dn(e)?Fb(e,()=>{}):e}function ms(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function GO(e){return typeof e=="boolean"}var YO=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new zb;return n&&(GO(n)?a.push(HO):a.push(UO(n.extraArgument))),a},qO="RTK_autoBatch",R0=e=>t=>{setTimeout(t,e)},XO=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:R0(10):e.type==="callback"?e.queueNotification:R0(e.timeout),u=()=>{a=!1,o&&(o=!1,l.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),m=r.subscribe(d);return l.add(c),()=>{m(),l.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[qO]),o=!i,o&&(a||(a=!0,s(u))),r.dispatch(c)}finally{i=!0}}})},KO=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new zb(e);return r&&i.push(XO(typeof r=="object"?r:void 0)),i};function ZO(e){const t=YO(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(Gh(n))s=EO(n);else throw new Error(zn(1));let u;typeof r=="function"?u=r(t):u=t();let c=Dl;i&&(c=WO({trace:!1,...typeof i=="object"&&i}));const d=kO(...u),m=KO(d);let p=typeof l=="function"?l(m):m();const h=c(...p);return Yh(s,a,h)}function Bb(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(zn(28));if(l in t)throw new Error(zn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function QO(e){return typeof e=="function"}function JO(e,t){let[n,r,i]=Bb(t),o;if(QO(e))o=()=>L0(e());else{const l=L0(e);o=()=>l}function a(l=o(),s){let u=[n[s.type],...r.filter(({matcher:c})=>c(s)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Gn(c)){const p=d(c,s);return p===void 0?c:p}else{if(dn(c))return Fb(c,m=>d(m,s));{const m=d(c,s);if(m===void 0){if(c===null)return c;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}}return c},l)}return a.getInitialState=o,a}var e4=Symbol.for("rtk-slice-createasyncthunk");function t4(e,t){return`${e}/${t}`}function n4({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[e4];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(zn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(i4()):i.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(S,C){const k=typeof S=="string"?S:S.type;if(!k)throw new Error(zn(12));if(k in u.sliceCaseReducersByType)throw new Error(zn(13));return u.sliceCaseReducersByType[k]=C,c},addMatcher(S,C){return u.sliceMatchers.push({matcher:S,reducer:C}),c},exposeAction(S,C){return u.actionCreators[S]=C,c},exposeCaseReducer(S,C){return u.sliceCaseReducersByName[S]=C,c}};s.forEach(S=>{const C=l[S],k={reducerName:S,type:t4(o,S),createNotation:typeof i.reducers=="function"};a4(C)?l4(k,C,c,t):o4(k,C,c)});function d(){const[S={},C=[],k=void 0]=typeof i.extraReducers=="function"?Bb(i.extraReducers):[i.extraReducers],_={...S,...u.sliceCaseReducersByType};return JO(i.initialState,E=>{for(let M in _)E.addCase(M,_[M]);for(let M of u.sliceMatchers)E.addMatcher(M.matcher,M.reducer);for(let M of C)E.addMatcher(M.matcher,M.reducer);k&&E.addDefaultCase(k)})}const m=S=>S,p=new Map,h=new WeakMap;let y;function w(S,C){return y||(y=d()),y(S,C)}function f(){return y||(y=d()),y.getInitialState()}function v(S,C=!1){function k(E){let M=E[S];return typeof M>"u"&&C&&(M=ms(h,k,f)),M}function _(E=m){const M=ms(p,C,()=>new WeakMap);return ms(M,E,()=>{const j={};for(const[D,O]of Object.entries(i.selectors??{}))j[D]=r4(O,E,()=>ms(h,E,f),C);return j})}return{reducerPath:S,getSelectors:_,get selectors(){return _(k)},selectSlice:k}}const x={name:o,reducer:w,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:f,...v(a),injectInto(S,{reducerPath:C,...k}={}){const _=C??a;return S.inject({reducerPath:_,reducer:w},k),{...x,...v(_,!0)}}};return x}}function r4(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var Vb=n4();function i4(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function o4({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!s4(r))throw new Error(zn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?D0(e,a):D0(e))}function a4(e){return e._reducerDefinitionType==="asyncThunk"}function s4(e){return e._reducerDefinitionType==="reducerWithPrepare"}function l4({type:e,reducerName:t},n,r,i){if(!i)throw new Error(zn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:u,options:c}=n,d=i(e,o,c);r.exposeAction(t,d),a&&r.addCase(d.fulfilled,a),l&&r.addCase(d.pending,l),s&&r.addCase(d.rejected,s),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:a||gs,pending:l||gs,rejected:s||gs,settled:u||gs})}function gs(){}function zn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Hb=Vb({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===t.payload.id);r&&r.quantity>=n.stock||(r?r.quantity=(r.quantity||0)+1:e.items.push({...t.payload,quantity:1}))},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:Fa,removeFromCart:u4,clearCart:Zh,addAllToCart:c4,incrementQuantity:d4,decrementQuantity:f4}=Hb.actions,p4=Hb.reducer;function Ub(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Ub(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Ur(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Ub(e))&&(r&&(r+=" "),r+=t);return r}function h4(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}h4(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Na=e=>typeof e=="number"&&!isNaN(e),Qr=e=>typeof e=="string",Yn=e=>typeof e=="function",m4=e=>Qr(e)||Na(e),lp=e=>Qr(e)||Yn(e)?e:null,g4=(e,t)=>e===!1||Na(e)&&e>0?e:t,up=e=>b.isValidElement(e)||Qr(e)||Yn(e)||Na(e);function v4(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function y4({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:c,playToast:d}){let m=n?`${e}--${a}`:e,p=n?`${t}--${a}`:t,h=b.useRef(0);return b.useLayoutEffect(()=>{let y=u.current,w=m.split(" "),f=v=>{v.target===u.current&&(d(),y.removeEventListener("animationend",f),y.removeEventListener("animationcancel",f),h.current===0&&v.type!=="animationcancel"&&y.classList.remove(...w))};y.classList.add(...w),y.addEventListener("animationend",f),y.addEventListener("animationcancel",f)},[]),b.useEffect(()=>{let y=u.current,w=()=>{y.removeEventListener("animationend",w),r?v4(y,s,i):s()};c||(l?w():(h.current=1,y.className+=` ${p}`,y.addEventListener("animationend",w)))},[c]),q.createElement(q.Fragment,null,o)}}function A0(e,t){return{content:Wb(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Wb(e,t,n=!1){return b.isValidElement(e)&&!Qr(e.type)?b.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Yn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function x4({closeToast:e,theme:t,ariaLabel:n="close"}){return q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function b4({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:c}){let d=i||a&&l===0,m={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(m.transform=`scaleX(${l})`);let p=Ur("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${c}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),h=Yn(o)?o({rtl:s,type:r,defaultClassName:p}):Ur(p,o),y={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return q.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":d},q.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${c} Toastify__progress-bar--${r}`}),q.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:h,style:m,...y}))}var w4=1,Gb=()=>`${w4++}`;function S4(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,u=new Set,c=v=>(u.add(v),()=>u.delete(v)),d=()=>{a=Array.from(s.values()),u.forEach(v=>v())},m=({containerId:v,toastId:x,updateId:S})=>{let C=v?v!==e:e!==1,k=s.has(x)&&S==null;return C||k},p=(v,x)=>{s.forEach(S=>{var C;(x==null||x===S.props.toastId)&&((C=S.toggle)==null||C.call(S,v))})},h=v=>{var x,S;(S=(x=v.props)==null?void 0:x.onClose)==null||S.call(x,v.removalReason),v.isActive=!1},y=v=>{if(v==null)s.forEach(h);else{let x=s.get(v);x&&h(x)}d()},w=()=>{i-=o.length,o=[]},f=v=>{var x,S;let{toastId:C,updateId:k}=v.props,_=k==null;v.staleId&&s.delete(v.staleId),v.isActive=!0,s.set(C,v),d(),n(A0(v,_?"added":"updated")),_&&((S=(x=v.props).onOpen)==null||S.call(x))};return{id:e,props:l,observe:c,toggle:p,removeToast:y,toasts:s,clearQueue:w,buildToast:(v,x)=>{if(m(x))return;let{toastId:S,updateId:C,data:k,staleId:_,delay:E}=x,M=C==null;M&&i++;let j={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([O,$])=>$!=null)),toastId:S,updateId:C,data:k,isIn:!1,className:lp(x.className||l.toastClassName),progressClassName:lp(x.progressClassName||l.progressClassName),autoClose:x.isLoading?!1:g4(x.autoClose,l.autoClose),closeToast(O){s.get(S).removalReason=O,y(S)},deleteToast(){let O=s.get(S);if(O!=null){if(n(A0(O,"removed")),s.delete(S),i--,i<0&&(i=0),o.length>0){f(o.shift());return}d()}}};j.closeButton=l.closeButton,x.closeButton===!1||up(x.closeButton)?j.closeButton=x.closeButton:x.closeButton===!0&&(j.closeButton=up(l.closeButton)?l.closeButton:!0);let D={content:v,props:j,staleId:_};l.limit&&l.limit>0&&i>l.limit&&M?o.push(D):Na(E)?setTimeout(()=>{f(D)},E):f(D)},setProps(v){l=v},setToggle:(v,x)=>{let S=s.get(v);S&&(S.toggle=x)},isToastActive:v=>{var x;return(x=s.get(v))==null?void 0:x.isActive},getSnapshot:()=>a}}var dt=new Map,wa=[],cp=new Set,_4=e=>cp.forEach(t=>t(e)),Yb=()=>dt.size>0;function C4(){wa.forEach(e=>Xb(e.content,e.options)),wa=[]}var E4=(e,{containerId:t})=>{var n;return(n=dt.get(t||1))==null?void 0:n.toasts.get(e)};function qb(e,t){var n;if(t)return!!((n=dt.get(t))!=null&&n.isToastActive(e));let r=!1;return dt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function k4(e){if(!Yb()){wa=wa.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||m4(e))dt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=dt.get(e.containerId);t?t.removeToast(e.id):dt.forEach(n=>{n.removeToast(e.id)})}}var T4=(e={})=>{dt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function Xb(e,t){up(e)&&(Yb()||wa.push({content:e,options:t}),dt.forEach(n=>{n.buildToast(e,t)}))}function P4(e){var t;(t=dt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function Kb(e,t){dt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function O4(e){let t=e.containerId||1;return{subscribe(n){let r=S4(t,e,_4);dt.set(t,r);let i=r.observe(n);return C4(),()=>{i(),dt.delete(t)}},setProps(n){var r;(r=dt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=dt.get(t))==null?void 0:n.getSnapshot()}}}function M4(e){return cp.add(e),()=>{cp.delete(e)}}function j4(e){return e&&(Qr(e.toastId)||Na(e.toastId))?e.toastId:Gb()}function za(e,t){return Xb(e,t),t.toastId}function $u(e,t){return{...t,type:t&&t.type||e,toastId:j4(t)}}function Iu(e){return(t,n)=>za(t,$u(e,n))}function J(e,t){return za(e,$u("default",t))}J.loading=(e,t)=>za(e,$u("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function $4(e,{pending:t,error:n,success:r},i){let o;t&&(o=Qr(t)?J.loading(t,i):J.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,c,d)=>{if(c==null){J.dismiss(o);return}let m={type:u,...a,...i,data:d},p=Qr(c)?{render:c}:c;return o?J.update(o,{...m,...p}):J(p.render,{...m,...p}),d},s=Yn(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}J.promise=$4;J.success=Iu("success");J.info=Iu("info");J.error=Iu("error");J.warning=Iu("warning");J.warn=J.warning;J.dark=(e,t)=>za(e,$u("default",{theme:"dark",...t}));function I4(e){k4(e)}J.dismiss=I4;J.clearWaitingQueue=T4;J.isActive=qb;J.update=(e,t={})=>{let n=E4(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:Gb()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,za(a,o)}};J.done=e=>{J.update(e,{progress:1})};J.onChange=M4;J.play=e=>Kb(!0,e);J.pause=e=>Kb(!1,e);function D4(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=b.useRef(O4(e)).current;i(e);let o=(t=b.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:c}=u.props;s.has(c)||s.set(c,[]),s.get(c).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:qb,count:o==null?void 0:o.length}}function L4(e){let[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:c,closeOnClick:d}=e;P4({id:e.toastId,containerId:e.containerId,fn:n}),b.useEffect(()=>{if(e.pauseOnFocusLoss)return m(),()=>{p()}},[e.pauseOnFocusLoss]);function m(){document.hasFocus()||f(),window.addEventListener("focus",w),window.addEventListener("blur",f)}function p(){window.removeEventListener("focus",w),window.removeEventListener("blur",f)}function h(_){if(e.draggable===!0||e.draggable===_.pointerType){v();let E=o.current;a.canCloseOnClick=!0,a.canDrag=!0,E.style.transition="none",e.draggableDirection==="x"?(a.start=_.clientX,a.removalDistance=E.offsetWidth*(e.draggablePercent/100)):(a.start=_.clientY,a.removalDistance=E.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function y(_){let{top:E,bottom:M,left:j,right:D}=o.current.getBoundingClientRect();_.nativeEvent.type!=="touchend"&&e.pauseOnHover&&_.clientX>=j&&_.clientX<=D&&_.clientY>=E&&_.clientY<=M?f():w()}function w(){n(!0)}function f(){n(!1)}function v(){a.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",C)}function x(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",C)}function S(_){let E=o.current;if(a.canDrag&&E){a.didMove=!0,t&&f(),e.draggableDirection==="x"?a.delta=_.clientX-a.start:a.delta=_.clientY-a.start,a.start!==_.clientX&&(a.canCloseOnClick=!1);let M=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;E.style.transform=`translate3d(${M},0)`,E.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function C(){x();let _=o.current;if(a.canDrag&&a.didMove&&_){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}_.style.transition="transform 0.2s, opacity 0.2s",_.style.removeProperty("transform"),_.style.removeProperty("opacity")}}let k={onPointerDown:h,onPointerUp:y};return l&&s&&(k.onMouseEnter=f,e.stacked||(k.onMouseLeave=w)),d&&(k.onClick=_=>{c&&c(_),a.canCloseOnClick&&u(!0)}),{playToast:w,pauseToast:f,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:k}}var R4=typeof window<"u"?b.useLayoutEffect:b.useEffect,Du=({theme:e,type:t,isLoading:n,...r})=>q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function A4(e){return q.createElement(Du,{...e},q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function F4(e){return q.createElement(Du,{...e},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function N4(e){return q.createElement(Du,{...e},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function z4(e){return q.createElement(Du,{...e},q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function B4(){return q.createElement("div",{className:"Toastify__spinner"})}var dp={info:F4,warning:A4,success:N4,error:z4,spinner:B4},V4=e=>e in dp;function H4({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Yn(r)?i=r({...o,isLoading:n}):b.isValidElement(r)?i=b.cloneElement(r,o):n?i=dp.spinner():V4(t)&&(i=dp[t](o))),i}var U4=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=L4(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:c,hideProgressBar:d,closeToast:m,transition:p,position:h,className:y,style:w,progressClassName:f,updateId:v,role:x,progress:S,rtl:C,toastId:k,deleteToast:_,isIn:E,isLoading:M,closeOnClick:j,theme:D,ariaLabel:O}=e,$=Ur("Toastify__toast",`Toastify__toast-theme--${D}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":j}),R=Yn(y)?y({rtl:C,position:h,type:c,defaultClassName:$}):Ur($,y),L=H4(e),N=!!S||!s,F={closeToast:m,type:c,theme:D},P=null;return a===!1||(Yn(a)?P=a(F):b.isValidElement(a)?P=b.cloneElement(a,F):P=x4(F)),q.createElement(p,{isIn:E,done:_,position:h,preventExitTransition:n,nodeRef:r,playToast:o},q.createElement("div",{id:k,tabIndex:0,onClick:u,"data-in":E,className:R,...i,style:w,ref:r,...E&&{role:x,"aria-label":O}},L!=null&&q.createElement("div",{className:Ur("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},L),Wb(l,e,!t),P,!e.customProgressBar&&q.createElement(b4,{...v&&!N?{key:`p-${v}`}:{},rtl:C,theme:D,delay:s,isRunning:t,isIn:E,closeToast:m,hide:d,type:c,className:f,controlledProgress:N,progress:S||0})))},W4=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),G4=y4(W4("bounce",!0)),Y4={position:"top-right",transition:G4,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function oo(e){let t={...Y4,...e},n=e.stacked,[r,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=D4(t),{className:u,style:c,rtl:d,containerId:m,hotKeys:p}=t;function h(w){let f=Ur("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":d});return Yn(u)?u({position:w,rtl:d,defaultClassName:f}):Ur(f,lp(u))}function y(){n&&(i(!0),J.play())}return R4(()=>{var w;if(n){let f=o.current.querySelectorAll('[data-in="true"]'),v=12,x=(w=t.position)==null?void 0:w.includes("top"),S=0,C=0;Array.from(f).reverse().forEach((k,_)=>{let E=k;E.classList.add("Toastify__toast--stacked"),_>0&&(E.dataset.collapsed=`${r}`),E.dataset.pos||(E.dataset.pos=x?"top":"bot");let M=S*(r?.2:1)+(r?0:v*_);E.style.setProperty("--y",`${x?M:M*-1}px`),E.style.setProperty("--g",`${v}`),E.style.setProperty("--s",`${1-(r?C:0)}`),S+=E.offsetHeight,C+=.025})}},[r,s,n]),b.useEffect(()=>{function w(f){var v;let x=o.current;p(f)&&((v=x.querySelector('[tabIndex="0"]'))==null||v.focus(),i(!1),J.pause()),f.key==="Escape"&&(document.activeElement===x||x!=null&&x.contains(document.activeElement))&&(i(!0),J.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[p]),q.createElement("section",{ref:o,className:"Toastify",id:m,onMouseEnter:()=>{n&&(i(!1),J.pause())},onMouseLeave:y,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,f)=>{let v=f.length?{...c}:{...c,pointerEvents:"none"};return q.createElement("div",{tabIndex:-1,className:h(w),"data-stacked":n,style:v,key:`c-${w}`},f.map(({content:x,props:S})=>q.createElement(U4,{...S,stacked:n,collapseAll:y,isIn:l(S.toastId,S.containerId),key:`t-${S.key}`},x)))}))}const Sa="/Didiv/assets/nofoto-2f8d9d99.png",Zb=()=>{const e=Kn(),[t,n]=b.useState([]);b.useEffect(()=>{const o=new Date,a=new Date;a.setDate(o.getDate()-7);const l=a.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${l}`).then(s=>s.json()).then(s=>n(s.data)).catch(s=>console.error("Помилка завантаження нових товарів:",s))},[]),console.log(t);const r=[...t].sort(()=>Math.random()-.5).slice(0,3),i=o=>{e(Fa({...o,quantity:1})),J.success(`${o.name} додано в кошик!`)};return!t||t.length===0?null:g.jsxs(lO,{children:[g.jsx(oo,{}),g.jsx(uO,{children:"Нові товари"}),g.jsxs(cO,{children:[r.map(o=>{var a;return g.jsxs(dO,{children:[g.jsxs(fO,{to:`/product/${o.id}`,children:[g.jsx(pO,{children:"Новинка"}),g.jsx("img",{src:((a=o.images)==null?void 0:a[0].url)||Sa,alt:o.name,onError:l=>{l.currentTarget.onerror=null,l.currentTarget.src=Sa}}),g.jsx("div",{className:"overlay"})]}),g.jsxs(hO,{children:[g.jsx(mO,{children:o.name}),g.jsxs(gO,{children:[g.jsxs(vO,{children:[o.price," грн"]}),g.jsx(yO,{onClick:()=>i(o),children:g.jsx(Ra,{size:22})})]})]})]},o.id)}),g.jsx(xO,{to:"/catalog/new",children:g.jsxs(bO,{children:[g.jsx("p",{children:"Усі новинки"}),g.jsx(wO,{children:g.jsx(Uh,{size:24})})]})})]})]})};function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q.apply(this,arguments)}function q4(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function X4(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var K4=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(X4(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=q4(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),nt="-ms-",Bl="-moz-",ce="-webkit-",Qb="comm",Qh="rule",Jh="decl",Z4="@import",Jb="@keyframes",Q4="@layer",J4=Math.abs,Lu=String.fromCharCode,eM=Object.assign;function tM(e,t){return Ke(e,0)^45?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}function ew(e){return e.trim()}function nM(e,t){return(e=t.exec(e))?e[0]:e}function de(e,t,n){return e.replace(t,n)}function fp(e,t){return e.indexOf(t)}function Ke(e,t){return e.charCodeAt(t)|0}function _a(e,t,n){return e.slice(t,n)}function yn(e){return e.length}function em(e){return e.length}function vs(e,t){return t.push(e),e}function rM(e,t){return e.map(t).join("")}var Ru=1,Xi=1,tw=0,Et=0,Ie=0,ao="";function Au(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ru,column:Xi,length:a,return:""}}function Co(e,t){return eM(Au("",null,null,"",null,null,0),e,{length:-e.length},t)}function iM(){return Ie}function oM(){return Ie=Et>0?Ke(ao,--Et):0,Xi--,Ie===10&&(Xi=1,Ru--),Ie}function Lt(){return Ie=Et<tw?Ke(ao,Et++):0,Xi++,Ie===10&&(Xi=1,Ru++),Ie}function Cn(){return Ke(ao,Et)}function Ys(){return Et}function Ba(e,t){return _a(ao,e,t)}function Ca(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nw(e){return Ru=Xi=1,tw=yn(ao=e),Et=0,[]}function rw(e){return ao="",e}function qs(e){return ew(Ba(Et-1,pp(e===91?e+2:e===40?e+1:e)))}function aM(e){for(;(Ie=Cn())&&Ie<33;)Lt();return Ca(e)>2||Ca(Ie)>3?"":" "}function sM(e,t){for(;--t&&Lt()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Ba(e,Ys()+(t<6&&Cn()==32&&Lt()==32))}function pp(e){for(;Lt();)switch(Ie){case e:return Et;case 34:case 39:e!==34&&e!==39&&pp(Ie);break;case 40:e===41&&pp(e);break;case 92:Lt();break}return Et}function lM(e,t){for(;Lt()&&e+Ie!==47+10;)if(e+Ie===42+42&&Cn()===47)break;return"/*"+Ba(t,Et-1)+"*"+Lu(e===47?e:Lt())}function uM(e){for(;!Ca(Cn());)Lt();return Ba(e,Et)}function cM(e){return rw(Xs("",null,null,null,[""],e=nw(e),0,[0],e))}function Xs(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,m=0,p=0,h=0,y=1,w=1,f=1,v=0,x="",S=i,C=o,k=r,_=x;w;)switch(h=v,v=Lt()){case 40:if(h!=108&&Ke(_,d-1)==58){fp(_+=de(qs(v),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:_+=qs(v);break;case 9:case 10:case 13:case 32:_+=aM(h);break;case 92:_+=sM(Ys()-1,7);continue;case 47:switch(Cn()){case 42:case 47:vs(dM(lM(Lt(),Ys()),t,n),s);break;default:_+="/"}break;case 123*y:l[u++]=yn(_)*f;case 125*y:case 59:case 0:switch(v){case 0:case 125:w=0;case 59+c:f==-1&&(_=de(_,/\f/g,"")),p>0&&yn(_)-d&&vs(p>32?N0(_+";",r,n,d-1):N0(de(_," ","")+";",r,n,d-2),s);break;case 59:_+=";";default:if(vs(k=F0(_,t,n,u,c,i,l,x,S=[],C=[],d),o),v===123)if(c===0)Xs(_,t,k,k,S,o,d,l,C);else switch(m===99&&Ke(_,3)===110?100:m){case 100:case 108:case 109:case 115:Xs(e,k,k,r&&vs(F0(e,k,k,0,0,i,l,x,i,S=[],d),C),i,C,d,l,r?S:C);break;default:Xs(_,k,k,k,[""],C,0,l,C)}}u=c=p=0,y=f=1,x=_="",d=a;break;case 58:d=1+yn(_),p=h;default:if(y<1){if(v==123)--y;else if(v==125&&y++==0&&oM()==125)continue}switch(_+=Lu(v),v*y){case 38:f=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(yn(_)-1)*f,f=1;break;case 64:Cn()===45&&(_+=qs(Lt())),m=Cn(),c=d=yn(x=_+=uM(Ys())),v++;break;case 45:h===45&&yn(_)==2&&(y=0)}}return o}function F0(e,t,n,r,i,o,a,l,s,u,c){for(var d=i-1,m=i===0?o:[""],p=em(m),h=0,y=0,w=0;h<r;++h)for(var f=0,v=_a(e,d+1,d=J4(y=a[h])),x=e;f<p;++f)(x=ew(y>0?m[f]+" "+v:de(v,/&\f/g,m[f])))&&(s[w++]=x);return Au(e,t,n,i===0?Qh:l,s,u,c)}function dM(e,t,n){return Au(e,t,n,Qb,Lu(iM()),_a(e,2,-2),0)}function N0(e,t,n,r){return Au(e,t,n,Jh,_a(e,0,r),_a(e,r+1,-1),r)}function Di(e,t){for(var n="",r=em(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function fM(e,t,n,r){switch(e.type){case Q4:if(e.children.length)break;case Z4:case Jh:return e.return=e.return||e.value;case Qb:return"";case Jb:return e.return=e.value+"{"+Di(e.children,r)+"}";case Qh:e.value=e.props.join(",")}return yn(n=Di(e.children,r))?e.return=e.value+"{"+n+"}":""}function pM(e){var t=em(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function hM(e){return function(t){t.root||(t=t.return)&&e(t)}}function mM(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var gM=function(t,n,r){for(var i=0,o=0;i=o,o=Cn(),i===38&&o===12&&(n[r]=1),!Ca(o);)Lt();return Ba(t,Et)},vM=function(t,n){var r=-1,i=44;do switch(Ca(i)){case 0:i===38&&Cn()===12&&(n[r]=1),t[r]+=gM(Et-1,n,r);break;case 2:t[r]+=qs(i);break;case 4:if(i===44){t[++r]=Cn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Lu(i)}while(i=Lt());return t},yM=function(t,n){return rw(vM(nw(t),n))},z0=new WeakMap,xM=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!z0.get(r))&&!i){z0.set(t,!0);for(var o=[],a=yM(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var c=0;c<l.length;c++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[c]):l[c]+" "+a[s]}}},bM=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function iw(e,t){switch(tM(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+Bl+e+nt+e+e;case 6828:case 4268:return ce+e+nt+e+e;case 6165:return ce+e+nt+"flex-"+e+e;case 5187:return ce+e+de(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+nt+"flex-$1$2")+e;case 5443:return ce+e+nt+"flex-item-"+de(e,/flex-|-self/,"")+e;case 4675:return ce+e+nt+"flex-line-pack"+de(e,/align-content|flex-|-self/,"")+e;case 5548:return ce+e+nt+de(e,"shrink","negative")+e;case 5292:return ce+e+nt+de(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+de(e,"-grow","")+ce+e+nt+de(e,"grow","positive")+e;case 4554:return ce+de(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return de(de(de(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return de(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return de(de(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+nt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+e+e;case 4095:case 3583:case 4068:case 2532:return de(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yn(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(Ke(e,t+4)!==45)break;case 102:return de(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Bl+(Ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~fp(e,"stretch")?iw(de(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ke(e,t+1)!==115)break;case 6444:switch(Ke(e,yn(e)-3-(~fp(e,"!important")&&10))){case 107:return de(e,":",":"+ce)+e;case 101:return de(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ce+(Ke(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+nt+"$2box$3")+e}break;case 5936:switch(Ke(e,t+11)){case 114:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ce+e+nt+e+e}return e}var wM=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Jh:t.return=iw(t.value,t.length);break;case Jb:return Di([Co(t,{value:de(t.value,"@","@"+ce)})],i);case Qh:if(t.length)return rM(t.props,function(o){switch(nM(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Di([Co(t,{props:[de(o,/:(read-\w+)/,":"+Bl+"$1")]})],i);case"::placeholder":return Di([Co(t,{props:[de(o,/:(plac\w+)/,":"+ce+"input-$1")]}),Co(t,{props:[de(o,/:(plac\w+)/,":"+Bl+"$1")]}),Co(t,{props:[de(o,/:(plac\w+)/,nt+"input-$1")]})],i)}return""})}},SM=[wM],_M=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var w=y.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||SM,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var w=y.getAttribute("data-emotion").split(" "),f=1;f<w.length;f++)o[w[f]]=!0;l.push(y)});var s,u=[xM,bM];{var c,d=[fM,hM(function(y){c.insert(y)})],m=pM(u.concat(i,d)),p=function(w){return Di(cM(w),m)};s=function(w,f,v,x){c=v,p(w?w+"{"+f.styles+"}":f.styles),x&&(h.inserted[f.name]=!0)}}var h={key:n,sheet:new K4({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return h.sheet.hydrate(l),h},ow={exports:{}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=typeof Symbol=="function"&&Symbol.for,tm=Ye?Symbol.for("react.element"):60103,nm=Ye?Symbol.for("react.portal"):60106,Fu=Ye?Symbol.for("react.fragment"):60107,Nu=Ye?Symbol.for("react.strict_mode"):60108,zu=Ye?Symbol.for("react.profiler"):60114,Bu=Ye?Symbol.for("react.provider"):60109,Vu=Ye?Symbol.for("react.context"):60110,rm=Ye?Symbol.for("react.async_mode"):60111,Hu=Ye?Symbol.for("react.concurrent_mode"):60111,Uu=Ye?Symbol.for("react.forward_ref"):60112,Wu=Ye?Symbol.for("react.suspense"):60113,CM=Ye?Symbol.for("react.suspense_list"):60120,Gu=Ye?Symbol.for("react.memo"):60115,Yu=Ye?Symbol.for("react.lazy"):60116,EM=Ye?Symbol.for("react.block"):60121,kM=Ye?Symbol.for("react.fundamental"):60117,TM=Ye?Symbol.for("react.responder"):60118,PM=Ye?Symbol.for("react.scope"):60119;function zt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case tm:switch(e=e.type,e){case rm:case Hu:case Fu:case zu:case Nu:case Wu:return e;default:switch(e=e&&e.$$typeof,e){case Vu:case Uu:case Yu:case Gu:case Bu:return e;default:return t}}case nm:return t}}}function aw(e){return zt(e)===Hu}me.AsyncMode=rm;me.ConcurrentMode=Hu;me.ContextConsumer=Vu;me.ContextProvider=Bu;me.Element=tm;me.ForwardRef=Uu;me.Fragment=Fu;me.Lazy=Yu;me.Memo=Gu;me.Portal=nm;me.Profiler=zu;me.StrictMode=Nu;me.Suspense=Wu;me.isAsyncMode=function(e){return aw(e)||zt(e)===rm};me.isConcurrentMode=aw;me.isContextConsumer=function(e){return zt(e)===Vu};me.isContextProvider=function(e){return zt(e)===Bu};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===tm};me.isForwardRef=function(e){return zt(e)===Uu};me.isFragment=function(e){return zt(e)===Fu};me.isLazy=function(e){return zt(e)===Yu};me.isMemo=function(e){return zt(e)===Gu};me.isPortal=function(e){return zt(e)===nm};me.isProfiler=function(e){return zt(e)===zu};me.isStrictMode=function(e){return zt(e)===Nu};me.isSuspense=function(e){return zt(e)===Wu};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Fu||e===Hu||e===zu||e===Nu||e===Wu||e===CM||typeof e=="object"&&e!==null&&(e.$$typeof===Yu||e.$$typeof===Gu||e.$$typeof===Bu||e.$$typeof===Vu||e.$$typeof===Uu||e.$$typeof===kM||e.$$typeof===TM||e.$$typeof===PM||e.$$typeof===EM)};me.typeOf=zt;ow.exports=me;var OM=ow.exports,sw=OM,MM={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jM={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lw={};lw[sw.ForwardRef]=MM;lw[sw.Memo]=jM;var $M=!0;function uw(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var im=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||$M===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},cw=function(t,n,r){im(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function IM(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var DM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},LM=/[A-Z]|^ms/g,RM=/_EMO_([^_]+?)_([^]*?)_EMO_/g,dw=function(t){return t.charCodeAt(1)===45},B0=function(t){return t!=null&&typeof t!="boolean"},od=mM(function(e){return dw(e)?e:e.replace(LM,"-$&").toLowerCase()}),V0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(RM,function(r,i,o){return xn={name:i,styles:o,next:xn},i})}return DM[t]!==1&&!dw(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ea(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return xn={name:n.name,styles:n.styles,next:xn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)xn={name:r.name,styles:r.styles,next:xn},r=r.next;var i=n.styles+";";return i}return AM(e,t,n)}case"function":{if(e!==void 0){var o=xn,a=n(e);return xn=o,Ea(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function AM(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ea(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":B0(a)&&(r+=od(o)+":"+V0(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)B0(a[l])&&(r+=od(o)+":"+V0(o,a[l])+";");else{var s=Ea(e,t,a);switch(o){case"animation":case"animationName":{r+=od(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var H0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,xn,om=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";xn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Ea(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Ea(r,n,t[l]),i&&(o+=a[l]);H0.lastIndex=0;for(var s="",u;(u=H0.exec(o))!==null;)s+="-"+u[1];var c=IM(o)+s;return{name:c,styles:o,next:xn}},FM=function(t){return t()},NM=Yd["useInsertionEffect"]?Yd["useInsertionEffect"]:!1,fw=NM||FM,am={}.hasOwnProperty,pw=b.createContext(typeof HTMLElement<"u"?_M({key:"css"}):null);pw.Provider;var hw=function(t){return b.forwardRef(function(n,r){var i=b.useContext(pw);return t(n,i,r)})},mw=b.createContext({}),hp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",zM=function(t,n){var r={};for(var i in n)am.call(n,i)&&(r[i]=n[i]);return r[hp]=t,r},BM=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return im(n,r,i),fw(function(){return cw(n,r,i)}),null},VM=hw(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[hp],o=[r],a="";typeof e.className=="string"?a=uw(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=om(o,void 0,b.useContext(mw));a+=t.key+"-"+l.name;var s={};for(var u in e)am.call(e,u)&&u!=="css"&&u!==hp&&(s[u]=e[u]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(BM,{cache:t,serialized:l,isStringTag:typeof i=="string"}),b.createElement(i,s))}),HM=VM,K=function(t,n){var r=arguments;if(n==null||!am.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=HM,o[1]=zM(t,n);for(var a=2;a<i;a++)o[a]=r[a];return b.createElement.apply(null,o)};function sm(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return om(t)}var UM=function(){var t=sm.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},WM=Ik,GM=function(t){return t!=="theme"},U0=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?WM:GM},W0=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},YM=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return im(n,r,i),fw(function(){return cw(n,r,i)}),null},qM=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=W0(t,n,r),s=l||U0(i),u=!s("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var m=c.length,p=1;p<m;p++)d.push(c[p],c[0][p])}var h=hw(function(y,w,f){var v=u&&y.as||i,x="",S=[],C=y;if(y.theme==null){C={};for(var k in y)C[k]=y[k];C.theme=b.useContext(mw)}typeof y.className=="string"?x=uw(w.registered,S,y.className):y.className!=null&&(x=y.className+" ");var _=om(d.concat(S),w.registered,C);x+=w.key+"-"+_.name,a!==void 0&&(x+=" "+a);var E=u&&l===void 0?U0(v):s,M={};for(var j in y)u&&j==="as"||E(j)&&(M[j]=y[j]);return M.className=x,M.ref=f,b.createElement(b.Fragment,null,b.createElement(YM,{cache:w,serialized:_,isStringTag:typeof v=="string"}),b.createElement(v,M))});return h.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=l,Object.defineProperty(h,"toString",{value:function(){return"."+a}}),h.withComponent=function(y,w){return e(y,Q({},n,w,{shouldForwardProp:W0(h,w,!0)})).apply(void 0,d)},h}},XM=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Re=qM.bind();XM.forEach(function(e){Re[e]=Re(e)});const KM=Re.section`
  background-color: var(--second-background);
`,ZM=Re.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding-top: 30px;
   padding-left: 20px;
    padding-right: 20px;
  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
  }
`,QM=Re.div`

`,JM=Re.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,e3=Re.div`
   width: 100%;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);
      margin-bottom: 30px;

  @media screen and (min-width: 768px) {
 
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {

    grid-template-columns: repeat(4, 1fr);
  }
`;Re.div`
  position: absolute;
  inset: 0; /* займає всю картку */
  background: rgba(0, 0, 0, 0.622); /* чорний з прозорістю 25% */
`;const t3=Re(Me)`
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
`,n3=Re.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 250px;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.309);
    z-index: 1;
  }
`,r3=Re.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,i3=Re.p`
  color: var(--black-color);
  padding: 16px;
  font-size: 18px;

  font-family: var(--second-font);
  font-weight: 400;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 10px;
    font-size: 15px;
    font-weight: 400;
  }
`;var o3={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};a3(o3);function a3(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var s3="#4fa94d",l3={"aria-busy":!0,role:"progressbar"},u3=T.div`
  display: ${e=>e.$visible?"flex":"none"};
`,c3="http://www.w3.org/2000/svg",qu=({height:e=100,width:t=100,radius:n=5,color:r=s3,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>g.jsx(u3,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...l3,children:g.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:c3,"data-testid":"ball-triangle-svg",children:[g.jsx("title",{children:"Ball Triangle"}),g.jsx("desc",{children:"Animated representation of three balls"}),g.jsx("g",{fill:"none",fillRule:"evenodd",children:g.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[g.jsxs("circle",{cx:"5",cy:"50",r:n,children:[g.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),g.jsxs("circle",{cx:"27",cy:"5",r:n,children:[g.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),g.jsxs("circle",{cx:"49",cy:"50",r:n,children:[g.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),Qt=242.776657104492,d3=1.6,f3=Bh`
12.5% {
  stroke-dasharray: ${Qt*.14}px, ${Qt}px;
  stroke-dashoffset: -${Qt*.11}px;
}
43.75% {
  stroke-dasharray: ${Qt*.35}px, ${Qt}px;
  stroke-dashoffset: -${Qt*.35}px;
}
100% {
  stroke-dasharray: ${Qt*.01}px, ${Qt}px;
  stroke-dashoffset: -${Qt*.99}px;
}
`;T.path`
  stroke-dasharray: ${Qt*.01}px, ${Qt};
  stroke-dashoffset: 0;
  animation: ${f3} ${d3}s linear infinite;
`;var p3=Bh`
to {
   transform: rotate(360deg);
 }
`;T.svg`
  animation: ${p3} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var h3=Bh`
to {
   stroke-dashoffset: 136;
 }
`;T.polygon`
  stroke-dasharray: 17;
  animation: ${h3} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;T.svg`
  transform-origin: 50% 65%;
`;const m3=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();console.log(a),t(a.data.map(l=>{var s;return{id:l.id_title,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?g.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:g.jsx(qu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):g.jsx(KM,{children:g.jsxs(ZM,{children:[g.jsx(QM,{children:g.jsx(Zb,{})}),g.jsx(JM,{children:"Каталог"}),g.jsx(e3,{children:e.map(i=>g.jsxs(t3,{to:`/catalog/${i.title}`,children:[g.jsx(n3,{children:g.jsx(r3,{src:i.image,alt:i.title})}),g.jsx(i3,{children:i.title})]},i.id))})]})})},g3=Re.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,v3=Re.h1`
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
`,y3=Re.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,x3=Re(Me)`

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

  
`,b3=()=>g.jsxs(g3,{children:[g.jsxs(v3,{children:[" ",g.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),g.jsx(y3,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),g.jsx(x3,{children:" На головну"})]});const w3=T.div`
  width: 100%;
  height: 100%;
font-family: var(--main-font);
`,S3=T.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var gw={},vw={},Xu={},yw={exports:{}},Va={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var G0=Object.getOwnPropertySymbols,_3=Object.prototype.hasOwnProperty,C3=Object.prototype.propertyIsEnumerable;function E3(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function k3(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var T3=k3()?Object.assign:function(e,t){for(var n,r=E3(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)_3.call(n,a)&&(r[a]=n[a]);if(G0){i=G0(n);for(var l=0;l<i.length;l++)C3.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},xw={exports:{}},le={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm=T3,so=60103,bw=60106;le.Fragment=60107;le.StrictMode=60108;le.Profiler=60114;var ww=60109,Sw=60110,_w=60112;le.Suspense=60113;var Cw=60115,Ew=60116;if(typeof Symbol=="function"&&Symbol.for){var Zt=Symbol.for;so=Zt("react.element"),bw=Zt("react.portal"),le.Fragment=Zt("react.fragment"),le.StrictMode=Zt("react.strict_mode"),le.Profiler=Zt("react.profiler"),ww=Zt("react.provider"),Sw=Zt("react.context"),_w=Zt("react.forward_ref"),le.Suspense=Zt("react.suspense"),Cw=Zt("react.memo"),Ew=Zt("react.lazy")}var Y0=typeof Symbol=="function"&&Symbol.iterator;function P3(e){return e===null||typeof e!="object"?null:(e=Y0&&e[Y0]||e["@@iterator"],typeof e=="function"?e:null)}function Ha(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tw={};function lo(e,t,n){this.props=e,this.context=t,this.refs=Tw,this.updater=n||kw}lo.prototype.isReactComponent={};lo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Ha(85));this.updater.enqueueSetState(this,e,t,"setState")};lo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pw(){}Pw.prototype=lo.prototype;function um(e,t,n){this.props=e,this.context=t,this.refs=Tw,this.updater=n||kw}var cm=um.prototype=new Pw;cm.constructor=um;lm(cm,lo.prototype);cm.isPureReactComponent=!0;var dm={current:null},Ow=Object.prototype.hasOwnProperty,Mw={key:!0,ref:!0,__self:!0,__source:!0};function jw(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Ow.call(t,r)&&!Mw.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:so,type:e,key:o,ref:a,props:i,_owner:dm.current}}function O3(e,t){return{$$typeof:so,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fm(e){return typeof e=="object"&&e!==null&&e.$$typeof===so}function M3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var q0=/\/+/g;function ad(e,t){return typeof e=="object"&&e!==null&&e.key!=null?M3(""+e.key):t.toString(36)}function Ks(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case so:case bw:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ad(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(q0,"$&/")+"/"),Ks(i,t,n,"",function(u){return u})):i!=null&&(fm(i)&&(i=O3(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(q0,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+ad(o,l);a+=Ks(o,t,n,s,i)}else if(s=P3(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+ad(o,l++),a+=Ks(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(Ha(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function ys(e,t,n){if(e==null)return e;var r=[],i=0;return Ks(e,r,"","",function(o){return t.call(n,o,i++)}),r}function j3(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var $w={current:null};function Zn(){var e=$w.current;if(e===null)throw Error(Ha(321));return e}var $3={ReactCurrentDispatcher:$w,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:dm,IsSomeRendererActing:{current:!1},assign:lm};le.Children={map:ys,forEach:function(e,t,n){ys(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ys(e,function(){t++}),t},toArray:function(e){return ys(e,function(t){return t})||[]},only:function(e){if(!fm(e))throw Error(Ha(143));return e}};le.Component=lo;le.PureComponent=um;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$3;le.cloneElement=function(e,t,n){if(e==null)throw Error(Ha(267,e));var r=lm({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=dm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Ow.call(t,s)&&!Mw.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:so,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Sw,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:ww,_context:e},e.Consumer=e};le.createElement=jw;le.createFactory=function(e){var t=jw.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:_w,render:e}};le.isValidElement=fm;le.lazy=function(e){return{$$typeof:Ew,_payload:{_status:-1,_result:e},_init:j3}};le.memo=function(e,t){return{$$typeof:Cw,type:e,compare:t===void 0?null:t}};le.useCallback=function(e,t){return Zn().useCallback(e,t)};le.useContext=function(e,t){return Zn().useContext(e,t)};le.useDebugValue=function(){};le.useEffect=function(e,t){return Zn().useEffect(e,t)};le.useImperativeHandle=function(e,t,n){return Zn().useImperativeHandle(e,t,n)};le.useLayoutEffect=function(e,t){return Zn().useLayoutEffect(e,t)};le.useMemo=function(e,t){return Zn().useMemo(e,t)};le.useReducer=function(e,t,n){return Zn().useReducer(e,t,n)};le.useRef=function(e){return Zn().useRef(e)};le.useState=function(e){return Zn().useState(e)};le.version="17.0.2";xw.exports=le;var I3=xw.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D3=I3,Iw=60103;Va.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var X0=Symbol.for;Iw=X0("react.element"),Va.Fragment=X0("react.fragment")}var L3=D3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R3=Object.prototype.hasOwnProperty,A3={key:!0,ref:!0,__self:!0,__source:!0};function Dw(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)R3.call(t,r)&&!A3.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Iw,type:e,key:o,ref:a,props:i,_owner:L3.current}}Va.jsx=Dw;Va.jsxs=Dw;yw.exports=Va;var Tt=yw.exports,Lw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Lw);var Pt=Lw.exports;const F3={"lds-circle":"_lds-circle_qlxhy_1"},N3=Object.freeze(Object.defineProperty({__proto__:null,default:F3},Symbol.toStringTag,{value:"Module"})),z3=kt(N3);var Rw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xu,"__esModule",{value:!0});Xu.Circle=void 0;const B3=Tt,V3=Rw(Pt),H3=Rw(z3);function U3({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,B3.jsx)("div",{className:(0,V3.default)(H3.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}Xu.Circle=U3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=Xu;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(vw);var Aw={},Ku={};const W3={"lds-default":"_lds-default_wt1n8_1"},G3=Object.freeze(Object.defineProperty({__proto__:null,default:W3},Symbol.toStringTag,{value:"Module"})),Y3=kt(G3);var Fw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ku,"__esModule",{value:!0});Ku.Default=void 0;const K0=Tt,q3=Fw(Pt),X3=Fw(Y3);function K3({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,K0.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,K0.jsx)("div",{className:(0,q3.default)(X3.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}Ku.Default=K3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=Ku;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(Aw);var Nw={},Zu={};const Z3={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},Q3=Object.freeze(Object.defineProperty({__proto__:null,default:Z3},Symbol.toStringTag,{value:"Module"})),J3=kt(Q3);var zw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Zu,"__esModule",{value:!0});Zu.DualRing=void 0;const Z0=Tt,Q0=zw(Pt),J0=zw(J3);function ej({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,Z0.jsx)("div",{className:(0,Q0.default)(J0.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,Z0.jsx)("div",{className:(0,Q0.default)(J0.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}Zu.DualRing=ej;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=Zu;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(Nw);var Bw={},Qu={};const tj={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},nj=Object.freeze(Object.defineProperty({__proto__:null,default:tj},Symbol.toStringTag,{value:"Module"})),rj=kt(nj);var Vw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Qu,"__esModule",{value:!0});Qu.Ellipsis=void 0;const ev=Tt,ij=Vw(Pt),oj=Vw(rj);function aj({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,ev.jsx)("div",{style:{background:`${e}`}},l));return(0,ev.jsx)("div",{className:(0,ij.default)(oj.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}Qu.Ellipsis=aj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=Qu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(Bw);var Hw={},Ju={};const sj={"lds-facebook":"_lds-facebook_1ts9g_1"},lj=Object.freeze(Object.defineProperty({__proto__:null,default:sj},Symbol.toStringTag,{value:"Module"})),uj=kt(lj);var Uw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ju,"__esModule",{value:!0});Ju.Facebook=void 0;const tv=Tt,cj=Uw(Pt),dj=Uw(uj);function fj({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,tv.jsx)("div",{style:{background:`${e}`}},l));return(0,tv.jsx)("div",{className:(0,cj.default)(dj.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}Ju.Facebook=fj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=Ju;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(Hw);var Ww={},ec={};const pj={"lds-grid":"_lds-grid_1ftub_1"},hj=Object.freeze(Object.defineProperty({__proto__:null,default:pj},Symbol.toStringTag,{value:"Module"})),mj=kt(hj);var Gw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ec,"__esModule",{value:!0});ec.Grid=void 0;const nv=Tt,gj=Gw(Pt),vj=Gw(mj);function yj({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,nv.jsx)("div",{style:{background:`${e}`}},l));return(0,nv.jsx)("div",{className:(0,gj.default)(vj.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}ec.Grid=yj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=ec;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(Ww);var Yw={},tc={};const xj={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},bj=Object.freeze(Object.defineProperty({__proto__:null,default:xj},Symbol.toStringTag,{value:"Module"})),wj=kt(bj);var qw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(tc,"__esModule",{value:!0});tc.Heart=void 0;const xs=Tt,sd=qw(Pt),ld=qw(wj);function Sj({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,xs.jsx)("div",{className:(0,sd.default)(ld.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,xs.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,xs.jsx)("div",{className:(0,sd.default)(ld.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,xs.jsx)("div",{className:(0,sd.default)(ld.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}tc.Heart=Sj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=tc;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(Yw);var Xw={},nc={};const _j={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},Cj=Object.freeze(Object.defineProperty({__proto__:null,default:_j},Symbol.toStringTag,{value:"Module"})),Ej=kt(Cj);var Kw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(nc,"__esModule",{value:!0});nc.Hourglass=void 0;const rv=Tt,iv=Kw(Pt),ov=Kw(Ej);function kj({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,rv.jsx)("div",{className:(0,iv.default)(ov.default["lds-hourglass"],n),style:{...r},children:(0,rv.jsx)("div",{className:(0,iv.default)(ov.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}nc.Hourglass=kj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=nc;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(Xw);var Zw={},rc={};const Qw="_center_1rufi_10",Jw="_spin_1rufi_1",Tj={"lds-orbitals":"_lds-orbitals_1rufi_1",center:Qw,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:Jw},Pj=Object.freeze(Object.defineProperty({__proto__:null,center:Qw,default:Tj,spin:Jw},Symbol.toStringTag,{value:"Module"})),Oj=kt(Pj);var eS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(rc,"__esModule",{value:!0});rc.Orbitals=void 0;const tt=Tt,lt=eS(Pt),Se=eS(Oj);function Mj({color:e="#7f58af",className:t,style:n}){return(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["lds-orbitals"],t),style:{...n},children:[(0,tt.jsx)("div",{className:Se.default.center,style:{background:e}}),(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["inner-spin"]),children:[(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-moon-a"]),style:{background:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-moon-b"]),style:{background:e}})]}),(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["outer-spin"]),children:[(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-moon-a"]),style:{background:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-moon-b"]),style:{background:e}})]})]})}rc.Orbitals=Mj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=rc;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(Zw);var tS={},ic={};const jj={"lds-ring":"_lds-ring_xgxdp_1"},$j=Object.freeze(Object.defineProperty({__proto__:null,default:jj},Symbol.toStringTag,{value:"Module"})),Ij=kt($j);var nS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ic,"__esModule",{value:!0});ic.Ring=void 0;const av=Tt,Dj=nS(Pt),Lj=nS(Ij);function Rj({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,av.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,av.jsx)("div",{className:(0,Dj.default)(Lj.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}ic.Ring=Rj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=ic;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(tS);var rS={},oc={};const Aj={"lds-ripple":"_lds-ripple_1lgcf_1"},Fj=Object.freeze(Object.defineProperty({__proto__:null,default:Aj},Symbol.toStringTag,{value:"Module"})),Nj=kt(Fj);var iS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(oc,"__esModule",{value:!0});oc.Ripple=void 0;const sv=Tt,zj=iS(Pt),Bj=iS(Nj);function Vj({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,sv.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,sv.jsx)("div",{className:(0,zj.default)(Bj.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}oc.Ripple=Vj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=oc;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(rS);var oS={},ac={};const Hj={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},Uj=Object.freeze(Object.defineProperty({__proto__:null,default:Hj},Symbol.toStringTag,{value:"Module"})),Wj=kt(Uj);var aS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ac,"__esModule",{value:!0});ac.Roller=void 0;const ud=Tt,lv=aS(Pt),uv=aS(Wj);function Gj({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,ud.jsx)("div",{children:(0,ud.jsx)("div",{className:(0,lv.default)(uv.default["div-after"]),style:{background:e}})},o));return(0,ud.jsx)("div",{className:(0,lv.default)(uv.default["lds-roller"],t),style:{...n},children:r})}ac.Roller=Gj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=ac;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(oS);var sS={},sc={};const Yj={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},qj=Object.freeze(Object.defineProperty({__proto__:null,default:Yj},Symbol.toStringTag,{value:"Module"})),Xj=kt(qj);var lS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(sc,"__esModule",{value:!0});sc.Spinner=void 0;const cd=Tt,cv=lS(Pt),dv=lS(Xj);function Kj({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,cd.jsx)("div",{children:(0,cd.jsx)("div",{className:(0,cv.default)(dv.default["div-after"]),style:{background:e}})},o));return(0,cd.jsx)("div",{className:(0,cv.default)(dv.default["lds-spinner"],t),style:{...n},children:r})}sc.Spinner=Kj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=sc;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(sS);var uS={},lc={};const cS="_left_v9vlb_30",dS="_right_v9vlb_33",fS="_anim_v9vlb_37",Zj={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:cS,right:dS,anim:fS,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},Qj=Object.freeze(Object.defineProperty({__proto__:null,anim:fS,default:Zj,left:cS,right:dS},Symbol.toStringTag,{value:"Module"})),Jj=kt(Qj);var pS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lc,"__esModule",{value:!0});lc.Ouroboro=void 0;const Eo=Tt,ko=pS(Pt),To=pS(Jj);function e5({color:e="#7f58af",style:t,className:n}){return(0,Eo.jsxs)("div",{className:(0,ko.default)(To.default["lds-ouroboro"],n),style:{...t},children:[(0,Eo.jsx)("span",{className:(0,ko.default)(To.default.left),children:(0,Eo.jsx)("span",{className:(0,ko.default)(To.default.anim),style:{background:e}})}),(0,Eo.jsx)("span",{className:(0,ko.default)(To.default.right),children:(0,Eo.jsx)("span",{className:(0,ko.default)(To.default.anim),style:{background:e}})})]})}lc.Ouroboro=e5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=lc;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(uS);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=vw;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=Aw;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=Nw;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=Bw;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=Hw;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=Ww;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=Yw;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=Xw;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const u=Zw;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return u.Orbitals}});const c=tS;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return c.Ring}});const d=rS;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return d.Ripple}});const m=oS;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return m.Roller}});const p=sS;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return p.Spinner}});const h=uS;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return h.Ouroboro}})})(gw);const t5=()=>g.jsx(S3,{children:g.jsx(gw.Default,{color:"#6d433da8"})});const n5="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",r5=DT`
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
  src: url(${n5}) format('truetype');
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
`,i5=T.div`
  width: 100%;
  display: grid;
  gap: 15px;

 grid-template-columns: repeat(2, 1fr);
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);

    grid-template-rows: repeat(2, 280px);
  }
`,o5=T(Me)`
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
`,a5=T.h2`
  margin-top: 20px;
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,s5=T.h3`

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
`,l5=T.a`

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
`,u5=T.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,c5=()=>{const[e,t]=b.useState([]);return b.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(console.log("API response:",i),!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{id:o.id_title,title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),console.log(e),g.jsxs(g.Fragment,{children:[g.jsx(a5,{children:"Каталог"}),g.jsxs(i5,{children:[e.slice(0,6).map(n=>g.jsx(o5,{to:`catalog/${n.id}`,bg:n.image,isBig:n.big,children:g.jsx(s5,{children:n.title})},n.id)),g.jsxs(l5,{href:"catalog",children:[g.jsx("p",{children:"Весь каталог"}),g.jsx(u5,{children:g.jsx(Uh,{size:24})})]})]})]})};function fv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function pm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:fv(t[r])&&fv(e[r])&&Object.keys(t[r]).length>0&&pm(e[r],t[r])})}const hS={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function En(){const e=typeof document<"u"?document:{};return pm(e,hS),e}const d5={document:hS,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function gt(){const e=typeof window<"u"?window:{};return pm(e,d5),e}function f5(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function p5(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function mS(e,t=0){return setTimeout(e,t)}function Vl(){return Date.now()}function h5(e){const t=gt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function m5(e,t="x"){const n=gt();let r,i,o;const a=h5(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function bs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function g5(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Mt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!g5(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(bs(t[l])&&bs(r[l])?r[l].__swiper__?t[l]=r[l]:Mt(t[l],r[l]):!bs(t[l])&&bs(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Mt(t[l],r[l])):t[l]=r[l])}}}return t}function li(e,t,n){e.style.setProperty(t,n)}function gS({swiper:e,targetPosition:t,side:n}){const r=gt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",u=(d,m)=>s==="next"&&d>=m||s==="prev"&&d<=m,c=()=>{a=new Date().getTime(),o===null&&(o=a);const d=Math.max(Math.min((a-o)/l,1),0),m=.5-Math.cos(d*Math.PI)/2;let p=i+m*(t-i);if(u(p,t)&&(p=t),e.wrapperEl.scrollTo({[n]:p}),u(p,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:p})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(c)};c()}function wn(e,t=""){const n=gt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function v5(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function y5(e,t){const n=gt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=v5(e,t))),r}function Hl(e){try{console.warn(e);return}catch{}}function Ul(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:f5(t)),n}function x5(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function b5(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function dr(e,t){return gt().getComputedStyle(e,null).getPropertyValue(t)}function Wl(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function vS(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function mp(e,t,n){const r=gt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function Ue(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function ka(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function yS(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=wn(e.el,`.${r[i]}`)[0];o||(o=Ul("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const pv='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function w5({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:pv};function i(p){let h;return p&&typeof p=="string"&&e.isElement&&(h=e.el.querySelector(p)||e.hostEl.querySelector(p),h)?h:(p&&(typeof p=="string"&&(h=[...document.querySelectorAll(p)]),e.params.uniqueNavElements&&typeof p=="string"&&h&&h.length>1&&e.el.querySelectorAll(p).length===1?h=e.el.querySelector(p):h&&h.length===1&&(h=h[0])),p&&!h?p:h)}function o(p,h){const y=e.params.navigation;p=Ue(p),p.forEach(w=>{w&&(w.classList[h?"add":"remove"](...y.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=h),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](y.lockClass))})}function a(){const{nextEl:p,prevEl:h}=e.navigation;if(e.params.loop){o(h,!1),o(p,!1);return}o(h,e.isBeginning&&!e.params.rewind),o(p,e.isEnd&&!e.params.rewind)}function l(p){p.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(p){p.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const p=e.params.navigation;if(e.params.navigation=yS(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(p.nextEl||p.prevEl))return;let h=i(p.nextEl),y=i(p.prevEl);Object.assign(e.navigation,{nextEl:h,prevEl:y}),h=Ue(h),y=Ue(y);const w=(f,v)=>{if(f){if(p.addIcons&&f.matches(".swiper-button-next,.swiper-button-prev")&&!f.querySelector("svg")){const x=document.createElement("div");ka(x,pv),f.appendChild(x.querySelector("svg")),x.remove()}f.addEventListener("click",v==="next"?s:l)}!e.enabled&&f&&f.classList.add(...p.lockClass.split(" "))};h.forEach(f=>w(f,"next")),y.forEach(f=>w(f,"prev"))}function c(){let{nextEl:p,prevEl:h}=e.navigation;p=Ue(p),h=Ue(h);const y=(w,f)=>{w.removeEventListener("click",f==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};p.forEach(w=>y(w,"next")),h.forEach(w=>y(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?m():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{c()}),n("enable disable",()=>{let{nextEl:p,prevEl:h}=e.navigation;if(p=Ue(p),h=Ue(h),e.enabled){a();return}[...p,...h].filter(y=>!!y).forEach(y=>y.classList.add(e.params.navigation.lockClass))}),n("click",(p,h)=>{let{nextEl:y,prevEl:w}=e.navigation;y=Ue(y),w=Ue(w);const f=h.target;let v=w.includes(f)||y.includes(f);if(e.isElement&&!v){const x=h.path||h.composedPath&&h.composedPath();x&&(v=x.find(S=>y.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!v){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===f||e.pagination.el.contains(f)))return;let x;y.length?x=y[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(x=w[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...y,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},m=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),c()};Object.assign(e.navigation,{enable:d,disable:m,update:a,init:u,destroy:c})}function Po(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function S5({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(f,v){const{bulletActiveClass:x}=e.params.pagination;f&&(f=f[`${v==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${x}-${v}`),f=f[`${v==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${x}-${v}-${v}`)))}function u(f,v,x){if(f=f%x,v=v%x,v===f+1)return"next";if(v===f-1)return"previous"}function c(f){const v=f.target.closest(Po(e.params.pagination.bulletClass));if(!v)return;f.preventDefault();const x=Wl(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const S=u(e.realIndex,x,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function d(){const f=e.rtl,v=e.params.pagination;if(l())return;let x=e.pagination.el;x=Ue(x);let S,C;const k=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,_=e.params.loop?Math.ceil(k/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(C=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,C=e.previousSnapIndex):(C=e.previousIndex||0,S=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const E=e.pagination.bullets;let M,j,D;if(v.dynamicBullets&&(o=mp(E[0],e.isHorizontal()?"width":"height",!0),x.forEach(O=>{O.style[e.isHorizontal()?"width":"height"]=`${o*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&C!==void 0&&(a+=S-(C||0),a>v.dynamicMainBullets-1?a=v.dynamicMainBullets-1:a<0&&(a=0)),M=Math.max(S-a,0),j=M+(Math.min(E.length,v.dynamicMainBullets)-1),D=(j+M)/2),E.forEach(O=>{const $=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(R=>`${v.bulletActiveClass}${R}`)].map(R=>typeof R=="string"&&R.includes(" ")?R.split(" "):R).flat();O.classList.remove(...$)}),x.length>1)E.forEach(O=>{const $=Wl(O);$===S?O.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&O.setAttribute("part","bullet"),v.dynamicBullets&&($>=M&&$<=j&&O.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),$===M&&s(O,"prev"),$===j&&s(O,"next"))});else{const O=E[S];if(O&&O.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&E.forEach(($,R)=>{$.setAttribute("part",R===S?"bullet-active":"bullet")}),v.dynamicBullets){const $=E[M],R=E[j];for(let L=M;L<=j;L+=1)E[L]&&E[L].classList.add(...`${v.bulletActiveClass}-main`.split(" "));s($,"prev"),s(R,"next")}}if(v.dynamicBullets){const O=Math.min(E.length,v.dynamicMainBullets+4),$=(o*O-o)/2-D*o,R=f?"right":"left";E.forEach(L=>{L.style[e.isHorizontal()?R:"top"]=`${$}px`})}}x.forEach((E,M)=>{if(v.type==="fraction"&&(E.querySelectorAll(Po(v.currentClass)).forEach(j=>{j.textContent=v.formatFractionCurrent(S+1)}),E.querySelectorAll(Po(v.totalClass)).forEach(j=>{j.textContent=v.formatFractionTotal(_)})),v.type==="progressbar"){let j;v.progressbarOpposite?j=e.isHorizontal()?"vertical":"horizontal":j=e.isHorizontal()?"horizontal":"vertical";const D=(S+1)/_;let O=1,$=1;j==="horizontal"?O=D:$=D,E.querySelectorAll(Po(v.progressbarFillClass)).forEach(R=>{R.style.transform=`translate3d(0,0,0) scaleX(${O}) scaleY(${$})`,R.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(ka(E,v.renderCustom(e,S+1,_)),M===0&&r("paginationRender",E)):(M===0&&r("paginationRender",E),r("paginationUpdate",E)),e.params.watchOverflow&&e.enabled&&E.classList[e.isLocked?"add":"remove"](v.lockClass)})}function m(){const f=e.params.pagination;if(l())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=Ue(x);let S="";if(f.type==="bullets"){let C=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&C>v&&(C=v);for(let k=0;k<C;k+=1)f.renderBullet?S+=f.renderBullet.call(e,k,f.bulletClass):S+=`<${f.bulletElement} ${e.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?S=f.renderFraction.call(e,f.currentClass,f.totalClass):S=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?S=f.renderProgressbar.call(e,f.progressbarFillClass):S=`<span class="${f.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(C=>{f.type!=="custom"&&ka(C,S||""),f.type==="bullets"&&e.pagination.bullets.push(...C.querySelectorAll(Po(f.bulletClass)))}),f.type!=="custom"&&r("paginationRender",x[0])}function p(){e.params.pagination=yS(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const f=e.params.pagination;if(!f.el)return;let v;typeof f.el=="string"&&e.isElement&&(v=e.el.querySelector(f.el)),!v&&typeof f.el=="string"&&(v=[...document.querySelectorAll(f.el)]),v||(v=f.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(f.el)],v.length>1&&(v=v.find(x=>vS(x,".swiper")[0]===e.el))),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=Ue(v),v.forEach(x=>{f.type==="bullets"&&f.clickable&&x.classList.add(...(f.clickableClass||"").split(" ")),x.classList.add(f.modifierClass+f.type),x.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(x.classList.add(`${f.modifierClass}${f.type}-dynamic`),a=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&x.classList.add(f.progressbarOppositeClass),f.clickable&&x.addEventListener("click",c),e.enabled||x.classList.add(f.lockClass)}))}function h(){const f=e.params.pagination;if(l())return;let v=e.pagination.el;v&&(v=Ue(v),v.forEach(x=>{x.classList.remove(f.hiddenClass),x.classList.remove(f.modifierClass+f.type),x.classList.remove(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&(x.classList.remove(...(f.clickableClass||"").split(" ")),x.removeEventListener("click",c))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...f.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const f=e.params.pagination;let{el:v}=e.pagination;v=Ue(v),v.forEach(x=>{x.classList.remove(f.horizontalClass,f.verticalClass),x.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(p(),m(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{m(),d()}),n("destroy",()=>{h()}),n("enable disable",()=>{let{el:f}=e.pagination;f&&(f=Ue(f),f.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(f,v)=>{const x=v.target,S=Ue(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const C=S[0].classList.contains(e.params.pagination.hiddenClass);r(C===!0?"paginationShow":"paginationHide"),S.forEach(k=>k.classList.toggle(e.params.pagination.hiddenClass))}});const y=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=Ue(f),f.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),p(),m(),d()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=Ue(f),f.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),h()};Object.assign(e.pagination,{enable:y,disable:w,render:m,update:d,init:p,destroy:h})}function _5({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,u,c=new Date().getTime(),d,m,p,h,y,w;function f(F){!e||e.destroyed||!e.wrapperEl||F.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",f),!(w||F.detail&&F.detail.bySwiperTouchMove)&&M())}const v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(s=u,d=!1);const F=e.autoplay.paused?u:c+s-new Date().getTime();e.autoplay.timeLeft=F,r("autoplayTimeLeft",F,F/l),a=requestAnimationFrame(()=>{v()})},x=()=>{let F;return e.virtual&&e.params.virtual.enabled?F=e.slides.find(I=>I.classList.contains("swiper-slide-active")):F=e.slides[e.activeIndex],F?parseInt(F.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let F=e.params.autoplay.delay;const P=x();return!Number.isNaN(P)&&P>0&&(F=P),F},C=F=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),v();let P=F;typeof P>"u"&&(P=S(),l=P,s=P),u=P;const I=e.params.speed,A=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(I,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,I,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(I,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,I,!0,!0),r("autoplay")),e.params.cssMode&&(c=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return P>0?(clearTimeout(o),o=setTimeout(()=>{A()},P)):requestAnimationFrame(()=>{A()}),P},k=()=>{c=new Date().getTime(),e.autoplay.running=!0,C(),r("autoplayStart")},_=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},E=(F,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),F||(y=!0);const I=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",f):M()};if(e.autoplay.paused=!0,P){I();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-c),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),I())},M=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(c=new Date().getTime(),y?(y=!1,C(u)):C(),e.autoplay.paused=!1,r("autoplayResume"))},j=()=>{if(e.destroyed||!e.autoplay.running)return;const F=En();F.visibilityState==="hidden"&&(y=!0,E(!0)),F.visibilityState==="visible"&&M()},D=F=>{F.pointerType==="mouse"&&(y=!0,w=!0,!(e.animating||e.autoplay.paused)&&E(!0))},O=F=>{F.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&M())},$=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",D),e.el.addEventListener("pointerleave",O))},R=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",D),e.el.removeEventListener("pointerleave",O))},L=()=>{En().addEventListener("visibilitychange",j)},N=()=>{En().removeEventListener("visibilitychange",j)};n("init",()=>{e.params.autoplay.enabled&&($(),L(),k())}),n("destroy",()=>{R(),N(),e.autoplay.running&&_()}),n("_freeModeStaticRelease",()=>{(p||y)&&M()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?_():E(!0,!0)}),n("beforeTransitionStart",(F,P,I)=>{e.destroyed||!e.autoplay.running||(I||!e.params.autoplay.disableOnInteraction?E(!0,!0):_())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){_();return}m=!0,p=!1,y=!1,h=setTimeout(()=>{y=!0,p=!0,E(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!m)){if(clearTimeout(h),clearTimeout(o),e.params.autoplay.disableOnInteraction){p=!1,m=!1;return}p&&e.params.cssMode&&M(),p=!1,m=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(u=S(),l=S())}),Object.assign(e.autoplay,{start:k,stop:_,pause:E,resume:M})}let dd;function C5(){const e=gt(),t=En();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function xS(){return dd||(dd=C5()),dd}let fd;function E5({userAgent:e}={}){const t=xS(),n=gt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const c=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m=r==="Win32";let p=r==="MacIntel";const h=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&p&&t.touch&&h.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),p=!1),s&&!m&&(o.os="android",o.android=!0),(u||d||c)&&(o.os="ios",o.ios=!0),o}function bS(e={}){return fd||(fd=E5(e)),fd}let pd;function k5(){const e=gt(),t=bS();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,u]=l.split("Version/")[1].split(" ")[0].split(".").map(c=>Number(c));n=s<16||s===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function wS(){return pd||(pd=k5()),pd}function T5({swiper:e,on:t,emit:n}){const r=gt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(c=>{o=r.requestAnimationFrame(()=>{const{width:d,height:m}=e;let p=d,h=m;c.forEach(({contentBoxSize:y,contentRect:w,target:f})=>{f&&f!==e.el||(p=w?w.width:(y[0]||y).inlineSize,h=w?w.height:(y[0]||y).blockSize)}),(p!==d||h!==m)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function P5({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=gt(),a=(u,c={})=>{const d=o.MutationObserver||o.WebkitMutationObserver,m=new d(p=>{if(e.__preventObserver__)return;if(p.length===1){r("observerUpdate",p[0]);return}const h=function(){r("observerUpdate",p[0])};o.requestAnimationFrame?o.requestAnimationFrame(h):o.setTimeout(h,0)});m.observe(u,{attributes:typeof c.attributes>"u"?!0:c.attributes,childList:e.isElement||(typeof c.childList>"u"?!0:c).childList,characterData:typeof c.characterData>"u"?!0:c.characterData}),i.push(m)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=vS(e.hostEl);for(let c=0;c<u.length;c+=1)a(u[c])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var O5={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function M5(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(dr(r,"padding-left")||0,10)-parseInt(dr(r,"padding-right")||0,10),n=n-parseInt(dr(r,"padding-top")||0,10)-parseInt(dr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function j5(){const e=this;function t(j,D){return parseFloat(j.getPropertyValue(e.getDirectionLabel(D))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,u=wn(i,`.${e.params.slideClass}, swiper-slide`),c=l?e.virtual.slides.length:u.length;let d=[];const m=[],p=[];let h=n.slidesOffsetBefore;typeof h=="function"&&(h=n.slidesOffsetBefore.call(e));let y=n.slidesOffsetAfter;typeof y=="function"&&(y=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,f=e.slidesGrid.length,v=e.size-h-y;let x=n.spaceBetween,S=-h,C=0,k=0;if(typeof v>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*v:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-h-y,u.forEach(j=>{o?j.style.marginLeft="":j.style.marginRight="",j.style.marginBottom="",j.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(li(r,"--swiper-centered-offset-before",""),li(r,"--swiper-centered-offset-after","")),n.cssMode&&(li(r,"--swiper-slides-offset-before",`${h}px`),li(r,"--swiper-slides-offset-after",`${y}px`));const _=n.grid&&n.grid.rows>1&&e.grid;_?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let E;const M=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(j=>typeof n.breakpoints[j].slidesPerView<"u").length>0;for(let j=0;j<c;j+=1){E=0;const D=u[j];if(!(D&&(_&&e.grid.updateSlide(j,D,u),dr(D,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(E=n.virtual.slidesPerViewAutoSlideSize),E&&D&&(n.roundLengths&&(E=Math.floor(E)),D.style[e.getDirectionLabel("width")]=`${E}px`);else if(n.slidesPerView==="auto"){M&&(D.style[e.getDirectionLabel("width")]="");const O=getComputedStyle(D),$=D.style.transform,R=D.style.webkitTransform;if($&&(D.style.transform="none"),R&&(D.style.webkitTransform="none"),n.roundLengths)E=e.isHorizontal()?mp(D,"width",!0):mp(D,"height",!0);else{const L=t(O,"width"),N=t(O,"padding-left"),F=t(O,"padding-right"),P=t(O,"margin-left"),I=t(O,"margin-right"),A=O.getPropertyValue("box-sizing");if(A&&A==="border-box")E=L+P+I;else{const{clientWidth:B,offsetWidth:z}=D;E=L+N+F+P+I+(z-B)}}$&&(D.style.transform=$),R&&(D.style.webkitTransform=R),n.roundLengths&&(E=Math.floor(E))}else E=(v-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(E=Math.floor(E)),D&&(D.style[e.getDirectionLabel("width")]=`${E}px`);D&&(D.swiperSlideSize=E),p.push(E),n.centeredSlides?(S=S+E/2+C/2+x,C===0&&j!==0&&(S=S-v/2-x),j===0&&(S=S-v/2-x),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),k%n.slidesPerGroup===0&&d.push(S),m.push(S)):(n.roundLengths&&(S=Math.floor(S)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup===0&&d.push(S),m.push(S),S=S+E+x),e.virtualSize+=E+x,C=E,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,v)+y,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+x}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),_&&e.grid.updateWrapperSize(E,d),!n.centeredSlides){const j=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,D=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||j);let O=d.length;if(D){let R;if(n.slidesPerView==="auto"){R=1;let L=0;for(let N=p.length-1;N>=0&&(L+=p[N]+(N<p.length-1?x:0),L<=v);N-=1)R=p.length-N}else R=Math.floor(n.slidesPerView);O=Math.max(c-R,0)}const $=[];for(let R=0;R<d.length;R+=1){let L=d[R];n.roundLengths&&(L=Math.floor(L)),D?R<=O&&$.push(L):d[R]<=e.virtualSize-v&&$.push(L)}d=$,Math.floor(e.virtualSize-v)-Math.floor(d[d.length-1])>1&&(D||d.push(e.virtualSize-v))}if(l&&n.loop){const j=p[0]+x;if(n.slidesPerGroup>1){const D=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),O=j*n.slidesPerGroup;for(let $=0;$<D;$+=1)d.push(d[d.length-1]+O)}for(let D=0;D<e.virtual.slidesBefore+e.virtual.slidesAfter;D+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+j),m.push(m[m.length-1]+j),e.virtualSize+=j}if(d.length===0&&(d=[0]),x!==0){const j=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter((D,O)=>!n.cssMode||n.loop?!0:O!==u.length-1).forEach(D=>{D.style[j]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let j=0;p.forEach(O=>{j+=O+(x||0)}),j-=x;const D=j>v?j-v:0;d=d.map(O=>O<=0?-h:O>D?D+y:O)}if(n.centerInsufficientSlides){let j=0;if(p.forEach(D=>{j+=D+(x||0)}),j-=x,j<v){const D=(v-j)/2;d.forEach((O,$)=>{d[$]=O-D}),m.forEach((O,$)=>{m[$]=O+D})}}if(Object.assign(e,{slides:u,snapGrid:d,slidesGrid:m,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){li(r,"--swiper-centered-offset-before",`${-d[0]}px`),li(r,"--swiper-centered-offset-after",`${e.size/2-p[p.length-1]/2}px`);const j=-e.snapGrid[0],D=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(O=>O+j),e.slidesGrid=e.slidesGrid.map(O=>O+D)}if(c!==s&&e.emit("slidesLengthChange"),d.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),m.length!==f&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const j=`${n.containerModifierClass}backface-hidden`,D=e.el.classList.contains(j);c<=n.maxBackfaceHiddenSlides?D||e.el.classList.add(j):D&&e.el.classList.remove(j)}}function $5(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function I5(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const hv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function D5(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let c=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const d=(a+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),m=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),p=-(a-c),h=p+t.slidesSizesGrid[s],y=p>=0&&p<=t.size-t.slidesSizesGrid[s],w=p>=0&&p<t.size-1||h>1&&h<=t.size||p<=0&&h>=t.size;w&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s)),hv(u,w,n.slideVisibleClass),hv(u,y,n.slideFullyVisibleClass),u.progress=i?-d:d,u.originalProgress=i?-m:m}}function L5(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const c=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=c||i<=0,a=d||i>=1,c&&(i=0),d&&(i=1)}if(n.loop){const c=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),m=t.slidesGrid[c],p=t.slidesGrid[d],h=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=m?l=(y-m)/h:l=(y+h-p)/h,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(s&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const hd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function R5(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=d=>wn(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let s,u,c;if(o)if(n.loop){let d=i-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${d}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(d=>d.column===i),c=t.find(d=>d.column===i+1),u=t.find(d=>d.column===i-1)):s=t[i];s&&(a||(c=b5(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=t[0]),u=x5(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(d=>{hd(d,d===s,n.slideActiveClass),hd(d,d===c,n.slideNextClass),hd(d,d===u,n.slidePrevClass)}),e.emitSlidesClasses()}const Zs=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},md=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},gp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,u)=>a+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&md(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&md(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&md(e,a)};function A5(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function F5(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,u;const c=p=>{let h=p-t.virtual.slidesBefore;return h<0&&(h=t.virtual.slides.length+h),h>=t.virtual.slides.length&&(h-=t.virtual.slides.length),h};if(typeof s>"u"&&(s=A5(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const p=Math.min(i.slidesPerGroupSkip,s);u=p+Math.floor((s-p)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=c(s);return}const d=t.grid&&i.grid&&i.grid.rows>1;let m;if(t.virtual&&i.virtual.enabled)i.loop?m=c(s):m=s;else if(d){const p=t.slides.find(y=>y.column===s);let h=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(h)&&(h=Math.max(t.slides.indexOf(p),0)),m=Math.floor(h/i.grid.rows)}else if(t.slides[s]){const p=t.slides[s].getAttribute("data-swiper-slide-index");p?m=parseInt(p,10):m=s}else m=s;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:a,realIndex:m,previousIndex:o,activeIndex:s}),t.initialized&&gp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==m&&t.emit("realIndexChange"),t.emit("slideChange"))}function N5(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var z5={updateSize:M5,updateSlides:j5,updateAutoHeight:$5,updateSlidesOffset:I5,updateSlidesProgress:D5,updateProgress:L5,updateSlidesClasses:R5,updateActiveIndex:F5,updateClickedSlide:N5};function B5(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=m5(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function V5(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let c;const d=n.maxTranslate()-n.minTranslate();d===0?c=0:c=(e-n.minTranslate())/d,c!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function H5(){return-this.snapGrid[0]}function U5(){return-this.snapGrid[this.snapGrid.length-1]}function W5(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),u=o.maxTranslate();let c;if(r&&e>s?c=s:r&&e<u?c=u:c=e,o.updateProgress(c),a.cssMode){const d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-c;else{if(!o.support.smoothScroll)return gS({swiper:o,targetPosition:-c,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(m){!o||o.destroyed||m.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var G5={getTranslate:B5,setTranslate:V5,minTranslate:H5,maxTranslate:U5,translateTo:W5};function Y5(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function SS({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function q5(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),SS({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function X5(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),SS({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var K5={setTransition:Y5,transitionStart:q5,transitionEnd:X5};function Z5(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:c,activeIndex:d,rtlTranslate:m,wrapperEl:p,enabled:h}=o;if(!h&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const y=Math.min(o.params.slidesPerGroupSkip,a);let w=y+Math.floor((a-y)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const f=-s[w];if(l.normalizeSlideIndex)for(let _=0;_<u.length;_+=1){const E=-Math.floor(f*100),M=Math.floor(u[_]*100),j=Math.floor(u[_+1]*100);typeof u[_+1]<"u"?E>=M&&E<j-(j-M)/2?a=_:E>=M&&E<j&&(a=_+1):E>=M&&(a=_)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&(m?f>o.translate&&f>o.minTranslate():f<o.translate&&f<o.minTranslate())||!o.allowSlidePrev&&f>o.translate&&f>o.maxTranslate()&&(d||0)!==a))return!1;a!==(c||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(f);let v;a>d?v="next":a<d?v="prev":v="reset";const x=o.virtual&&o.params.virtual.enabled;if(!(x&&i)&&(m&&-f===o.translate||!m&&f===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(f),v!=="reset"&&(o.transitionStart(n,v),o.transitionEnd(n,v)),!1;if(l.cssMode){const _=o.isHorizontal(),E=m?f:-f;if(t===0)x&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),x&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[_?"scrollLeft":"scrollTop"]=E})):p[_?"scrollLeft":"scrollTop"]=E,x&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return gS({swiper:o,targetPosition:E,side:_?"left":"top"}),!0;p.scrollTo({[_?"left":"top"]:E,behavior:"smooth"})}return!0}const k=wS().isSafari;return x&&!i&&k&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(f),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,v),t===0?o.transitionEnd(n,v):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(E){!o||o.destroyed||E.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,v))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function Q5(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const y=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u,slidesOffsetBefore:c,slidesOffsetAfter:d}=i.params,m=u||!!c||!!d;let p=i.params.slidesPerView;p==="auto"?p=i.slidesPerViewDynamic():(p=Math.ceil(parseFloat(i.params.slidesPerView,10)),m&&p%2===0&&(p=p+1));let h=s-l<p;if(m&&(h=h||l<Math.ceil(p/2)),r&&m&&i.params.slidesPerView!=="auto"&&!o&&(h=!1),h){const y=m?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?l+1:l-s+1,slideRealIndex:y==="next"?i.realIndex:void 0})}if(o){const y=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function J5(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function e$(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:u}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const c=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=l?r.translate:-r.translate;function m(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const p=m(d),h=o.map(v=>m(v)),y=i.freeMode&&i.freeMode.enabled;let w=o[h.indexOf(p)-1];if(typeof w>"u"&&(i.cssMode||y)){let v;o.forEach((x,S)=>{p>=x&&(v=S)}),typeof v<"u"&&(w=y?o[v]:o[v>0?v-1:v])}let f=0;if(typeof w<"u"&&(f=a.indexOf(w),f<0&&(f=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(f=f-r.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),i.rewind&&r.isBeginning){const v=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(v,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(f,e,t,n)}),!0;return r.slideTo(f,e,t,n)}function t$(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function n$(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],c=i.snapGrid[l+1];s-u>(c-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],c=i.snapGrid[l];s-u<=(c-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function r$(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(wn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),mS(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var i$={slideTo:Z5,slideToLoop:Q5,slideNext:J5,slidePrev:e$,slideReset:t$,slideToClosest:n$,slideToClickedSlide:r$};function o$(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{wn(i,`.${r.slideClass}, swiper-slide`).forEach((h,y)=>{h.setAttribute("data-swiper-slide-index",y)})},a=()=>{const p=wn(i,`.${r.slideBlankClass}`);p.forEach(h=>{h.remove()}),p.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),u=n.slides.length%s!==0,c=l&&n.slides.length%r.grid.rows!==0,d=p=>{for(let h=0;h<p;h+=1){const y=n.isElement?Ul("swiper-slide",[r.slideBlankClass]):Ul("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(y)}};if(u){if(r.loopAddBlankSlides){const p=s-n.slides.length%s;d(p),n.recalcSlides(),n.updateSlides()}else Hl("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(c){if(r.loopAddBlankSlides){const p=r.grid.rows-n.slides.length%r.grid.rows;d(p),n.recalcSlides(),n.updateSlides()}else Hl("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const m=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:m?void 0:"next",initial:t})}function a$({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:c,allowSlideNext:d,slidesEl:m,params:p}=s,{centeredSlides:h,slidesOffsetBefore:y,slidesOffsetAfter:w,initialSlide:f}=p,v=h||!!y||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&p.virtual.enabled){t&&(!v&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):v&&s.snapIndex<p.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=c,s.allowSlideNext=d,s.emit("loopFix");return}let x=p.slidesPerView;x==="auto"?x=s.slidesPerViewDynamic():(x=Math.ceil(parseFloat(p.slidesPerView,10)),v&&x%2===0&&(x=x+1));const S=p.slidesPerGroupAuto?x:p.slidesPerGroup;let C=v?Math.max(S,Math.ceil(x/2)):S;C%S!==0&&(C+=S-C%S),C+=p.loopAdditionalSlides,s.loopedSlides=C;const k=s.grid&&p.grid&&p.grid.rows>1;u.length<x+C||s.params.effect==="cards"&&u.length<x+C*2?Hl("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):k&&p.grid.fill==="row"&&Hl("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const _=[],E=[],M=k?Math.ceil(u.length/p.grid.rows):u.length,j=o&&M-f<x&&!v;let D=j?f:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(u.find(P=>P.classList.contains(p.slideActiveClass))):D=i;const O=n==="next"||!n,$=n==="prev"||!n;let R=0,L=0;const F=(k?u[i].column:i)+(v&&typeof r>"u"?-x/2+.5:0);if(F<C){R=Math.max(C-F,S);for(let P=0;P<C-F;P+=1){const I=P-Math.floor(P/M)*M;if(k){const A=M-I-1;for(let B=u.length-1;B>=0;B-=1)u[B].column===A&&_.push(B)}else _.push(M-I-1)}}else if(F+x>M-C){L=Math.max(F-(M-C*2),S),j&&(L=Math.max(L,x-M+f+1));for(let P=0;P<L;P+=1){const I=P-Math.floor(P/M)*M;k?u.forEach((A,B)=>{A.column===I&&E.push(B)}):E.push(I)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&u.length<x+C*2&&(E.includes(i)&&E.splice(E.indexOf(i),1),_.includes(i)&&_.splice(_.indexOf(i),1)),$&&_.forEach(P=>{u[P].swiperLoopMoveDOM=!0,m.prepend(u[P]),u[P].swiperLoopMoveDOM=!1}),O&&E.forEach(P=>{u[P].swiperLoopMoveDOM=!0,m.append(u[P]),u[P].swiperLoopMoveDOM=!1}),s.recalcSlides(),p.slidesPerView==="auto"?s.updateSlides():k&&(_.length>0&&$||E.length>0&&O)&&s.slides.forEach((P,I)=>{s.grid.updateSlide(I,P,s.slides)}),p.watchSlidesProgress&&s.updateSlidesOffset(),t){if(_.length>0&&$){if(typeof e>"u"){const P=s.slidesGrid[D],A=s.slidesGrid[D+R]-P;l?s.setTranslate(s.translate-A):(s.slideTo(D+Math.ceil(R),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-A,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-A))}else if(r){const P=k?_.length/p.grid.rows:_.length;s.slideTo(s.activeIndex+P,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(E.length>0&&O)if(typeof e>"u"){const P=s.slidesGrid[D],A=s.slidesGrid[D-L]-P;l?s.setTranslate(s.translate-A):(s.slideTo(D-L,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-A,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-A))}else{const P=k?E.length/p.grid.rows:E.length;s.slideTo(s.activeIndex-P,0,!1,!0)}}if(s.allowSlidePrev=c,s.allowSlideNext=d,s.controller&&s.controller.control&&!a){const P={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(I=>{!I.destroyed&&I.params.loop&&I.loopFix({...P,slideTo:I.params.slidesPerView===p.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...P,slideTo:s.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}s.emit("loopFix")}function s$(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var l$={loopCreate:o$,loopFix:a$,loopDestroy:s$};function u$(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function c$(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var d$={setGrabCursor:u$,unsetGrabCursor:c$};function f$(e,t=this){function n(r){if(!r||r===En()||r===gt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function mv(e,t,n){const r=gt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function p$(e){const t=this,n=En();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){mv(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!y5(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",c=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&c&&(s=c[0]);const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,m=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(m?f$(d,s):s.closest(d))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const p=a.currentX,h=a.currentY;if(!mv(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=p,a.startY=h,i.touchStartTime=Vl(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let y=!0;s.matches(i.focusableElements)&&(y=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=y&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function h$(e){const t=En(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let u;if(s.type==="touchmove"){if(u=[...s.changedTouches].find(k=>k.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const c=u.pageX,d=u.pageY;if(s.preventedByNestedSwiper){o.startX=c,o.startY=d;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d}),r.touchStartTime=Vl());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(c>o.startX&&-n.translate<=n.maxTranslate()||c<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(c<o.startX&&n.translate<=n.maxTranslate()||c>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=c,o.currentY=d;const m=o.currentX-o.startX,p=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(m**2+p**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let k;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:m*m+p*p>=25&&(k=Math.atan2(Math.abs(p),Math.abs(m))*180/Math.PI,r.isScrolling=n.isHorizontal()?k>i.touchAngle:90-k>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let h=n.isHorizontal()?m:p,y=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(h=Math.abs(h)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),o.diff=h,h*=i.touchRatio,a&&(h=-h,y=-y);const w=n.touchesDirection;n.swipeDirection=h>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const f=n.params.loop&&!i.cssMode,v=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(f&&v&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(k)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let x;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&f&&v&&Math.abs(h)>=1){Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=h+r.startTranslate;let S=!0,C=i.resistanceRatio;if(i.touchReleaseOnEdges&&(C=0),h>0?(f&&v&&!x&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+h)**C))):h<0&&(f&&v&&!x&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-h)**C))),S&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(h)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function m$(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(C=>C.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:u,enabled:c}=t;if(!c||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=Vl(),m=d-n.touchStartTime;if(t.allowClick){const C=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(C&&C[0]||r.target,C),t.emit("tap click",r),m<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Vl(),mS(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let p;if(a.followFinger?p=s?t.translate:-t.translate:p=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:p});return}const h=p>=-t.maxTranslate()&&!t.params.loop;let y=0,w=t.slidesSizesGrid[0];for(let C=0;C<u.length;C+=C<a.slidesPerGroupSkip?1:a.slidesPerGroup){const k=C<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[C+k]<"u"?(h||p>=u[C]&&p<u[C+k])&&(y=C,w=u[C+k]-u[C]):(h||p>=u[C])&&(y=C,w=u[u.length-1]-u[u.length-2])}let f=null,v=null;a.rewind&&(t.isBeginning?v=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(f=0));const x=(p-u[y])/w,S=y<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(m>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?f:y+S):t.slideTo(y)),t.swipeDirection==="prev"&&(x>1-a.longSwipesRatio?t.slideTo(y+S):v!==null&&x<0&&Math.abs(x)>a.longSwipesRatio?t.slideTo(v):t.slideTo(y))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+S):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(f!==null?f:y+S),t.swipeDirection==="prev"&&t.slideTo(v!==null?v:y))}}function gv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function g$(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function v$(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function y$(e){const t=this;Zs(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function x$(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const _S=(e,t)=>{const n=En(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",gv,!0):e[u]("observerUpdate",gv,!0),i[s]("load",e.onLoad,{capture:!0}))};function b$(){const e=this,{params:t}=e;e.onTouchStart=p$.bind(e),e.onTouchMove=h$.bind(e),e.onTouchEnd=m$.bind(e),e.onDocumentTouchStart=x$.bind(e),t.cssMode&&(e.onScroll=v$.bind(e)),e.onClick=g$.bind(e),e.onLoad=y$.bind(e),_S(e,"on")}function w$(){_S(this,"off")}var S$={attachEvents:b$,detachEvents:w$};const vv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function _$(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=En(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),u=e.getBreakpoint(o,l,s);if(!u||e.currentBreakpoint===u)return;const d=(u in o?o[u]:void 0)||e.originalParams,m=vv(e,r),p=vv(e,d),h=e.params.grabCursor,y=d.grabCursor,w=r.enabled;m&&!p?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!m&&p&&(i.classList.add(`${r.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),h&&!y?e.unsetGrabCursor():!h&&y&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(k=>{if(typeof d[k]>"u")return;const _=r[k]&&r[k].enabled,E=d[k]&&d[k].enabled;_&&!E&&e[k].disable(),!_&&E&&e[k].enable()});const f=d.direction&&d.direction!==r.direction,v=r.loop&&(d.slidesPerView!==r.slidesPerView||f),x=r.loop;f&&n&&e.changeDirection(),Mt(e.params,d);const S=e.params.enabled,C=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",d),n&&(v?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&C?(e.loopCreate(t),e.updateSlides()):x&&!C&&e.loopDestroy()),e.emit("breakpoint",d)}function C$(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=gt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:u}=a[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var E$={setBreakpoint:_$,getBreakpoint:C$};function k$(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function T$(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=k$(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function P$(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var O$={addClasses:T$,removeClasses:P$};function M$(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var j$={checkOverflow:M$},vp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function $$(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Mt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Mt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Mt(t,r)}}const gd={eventsEmitter:O5,update:z5,translate:G5,transition:K5,slide:i$,loop:l$,grabCursor:d$,events:S$,breakpoints:E$,checkOverflow:j$,classes:O$},vd={};let hm=class Mn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Mt({},r),n&&!r.el&&(r.el=n);const i=En();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(u=>{const c=Mt({},r,{el:u});s.push(new Mn(c))}),s}const o=this;o.__swiper__=!0,o.support=xS(),o.device=bS({userAgent:r.userAgent}),o.browser=wS(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:$$(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Mt({},vp,a);return o.params=Mt({},l,vd,r),o.originalParams=Mt({},o.params),o.passedParams=Mt({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=wn(n,`.${r.slideClass}, swiper-slide`),o=Wl(i[0]);return Wl(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=wn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:u}=r;let c=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=o[u]?Math.ceil(o[u].swiperSlideSize):0,m;for(let p=u+1;p<o.length;p+=1)o[p]&&!m&&(d+=Math.ceil(o[p].swiperSlideSize),c+=1,d>s&&(m=!0));for(let p=u-1;p>=0;p-=1)o[p]&&!m&&(d+=o[p].swiperSlideSize,c+=1,d>s&&(m=!0))}else if(t==="current")for(let d=u+1;d<o.length;d+=1)(n?a[d]+l[d]-a[u]<s:a[d]-a[u]<s)&&(c+=1);else for(let d=u-1;d>=0;d-=1)a[u]-a[d]<s&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Zs(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):wn(r,i())[0])();return!a&&n.params.createElements&&(a=Ul("div",n.params.wrapperClass),r.append(a),wn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||dr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||dr(r,"direction")==="rtl"),wrongRTL:dr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Zs(n,o):o.addEventListener("load",a=>{Zs(n,a.target)})}),gp(n),n.initialized=!0,gp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),p5(r)),r.destroyed=!0),null}static extendDefaults(t){Mt(vd,t)}static get extendedDefaults(){return vd}static get defaults(){return vp}static installModule(t){Mn.prototype.__modules__||(Mn.prototype.__modules__=[]);const n=Mn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Mn.installModule(n)),Mn):(Mn.installModule(t),Mn)}};Object.keys(gd).forEach(e=>{Object.keys(gd[e]).forEach(t=>{hm.prototype[t]=gd[e][t]})});hm.use([T5,P5]);const CS=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Jr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Li(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Jr(t[r])&&Jr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Li(e[r],t[r]):e[r]=t[r]})}function ES(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function kS(e={}){return e.pagination&&typeof e.pagination.el>"u"}function TS(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function PS(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function I$(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function D$({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(E=>E!=="children"&&E!=="direction"&&E!=="wrapperClass"),{params:u,pagination:c,navigation:d,scrollbar:m,virtual:p,thumbs:h}=e;let y,w,f,v,x,S,C,k;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(y=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&c&&!c.el&&(f=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&m&&!m.el&&(v=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(x=!0);const _=E=>{e[E]&&(e[E].destroy(),E==="navigation"?(e.isElement&&(e[E].prevEl.remove(),e[E].nextEl.remove()),u[E].prevEl=void 0,u[E].nextEl=void 0,e[E].prevEl=void 0,e[E].nextEl=void 0):(e.isElement&&e[E].el.remove(),u[E].el=void 0,e[E].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?S=!0:!u.loop&&n.loop?C=!0:k=!0),s.forEach(E=>{if(Jr(u[E])&&Jr(n[E]))Object.assign(u[E],n[E]),(E==="navigation"||E==="pagination"||E==="scrollbar")&&"enabled"in n[E]&&!n[E].enabled&&_(E);else{const M=n[E];(M===!0||M===!1)&&(E==="navigation"||E==="pagination"||E==="scrollbar")?M===!1&&_(E):u[E]=n[E]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&p&&u.virtual.enabled?(p.slides=t,p.update(!0)):r.includes("virtual")&&p&&u.virtual.enabled&&(t&&(p.slides=t),p.update(!0)),r.includes("children")&&t&&u.loop&&(k=!0),y&&h.init()&&h.update(!0),w&&(e.controller.control=u.controller.control),f&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),c.init(),c.render(),c.update()),v&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),m.init(),m.updateSize(),m.setTranslate()),x&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),ka(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),ka(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(S||k)&&e.loopDestroy(),(C||k)&&e.loopCreate(),e.update()}function L$(e={},t=!0){const n={on:{}},r={},i={};Li(n,vp),n._emitClasses=!0,n.init=!1;const o={},a=CS.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?Jr(e[s])?(n[s]={},i[s]={},Li(n[s],e[s]),Li(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function R$({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){ES(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),kS(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),TS(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function A$(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return CS.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(Jr(e[s])&&Jr(t[s])){const u=Object.keys(e[s]),c=Object.keys(t[s]);u.length!==c.length?a(s):(u.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}),c.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const F$=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Gl(){return Gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gl.apply(this,arguments)}function OS(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function MS(e){const t=[];return q.Children.toArray(e).forEach(n=>{OS(n)?t.push(n):n.props&&n.props.children&&MS(n.props.children).forEach(r=>t.push(r))}),t}function N$(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return q.Children.toArray(e).forEach(r=>{if(OS(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=MS(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function z$(e,t,n){if(!n)return null;const r=c=>{let d=c;return c<0?d=t.length+c:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let c=l;c<s;c+=1)c>=o&&c<=a&&u.push(t[r(c)]);return u.map((c,d)=>q.cloneElement(c,{swiper:e,style:i,key:c.props.virtualIndex||c.key||`slide-${d}`}))}function Ko(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const yv=b.createContext(null),B$=b.createContext(null),jS=b.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,u]=b.useState("swiper"),[c,d]=b.useState(null),[m,p]=b.useState(!1),h=b.useRef(!1),y=b.useRef(null),w=b.useRef(null),f=b.useRef(null),v=b.useRef(null),x=b.useRef(null),S=b.useRef(null),C=b.useRef(null),k=b.useRef(null),{params:_,passedParams:E,rest:M,events:j}=L$(o),{slides:D,slots:O}=N$(r),$=()=>{p(!m)};Object.assign(_.on,{_containerClasses(P,I){u(I)}});const R=()=>{Object.assign(_.on,j),l=!0;const P={..._};if(delete P.wrapperClass,w.current=new hm(P),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=D;const I={cache:!1,slides:D,renderExternal:d,renderExternalUpdate:!1};Li(w.current.params.virtual,I),Li(w.current.originalParams.virtual,I)}};y.current||R(),w.current&&w.current.on("_beforeBreakpoint",$);const L=()=>{l||!j||!w.current||Object.keys(j).forEach(P=>{w.current.on(P,j[P])})},N=()=>{!j||!w.current||Object.keys(j).forEach(P=>{w.current.off(P,j[P])})};b.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",$)}),b.useEffect(()=>{!h.current&&w.current&&(w.current.emitSlidesClasses(),h.current=!0)}),Ko(()=>{if(a&&(a.current=y.current),!!y.current)return w.current.destroyed&&R(),R$({el:y.current,nextEl:x.current,prevEl:S.current,paginationEl:C.current,scrollbarEl:k.current,swiper:w.current},_),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),Ko(()=>{L();const P=A$(E,f.current,D,v.current,I=>I.key);return f.current=E,v.current=D,P.length&&w.current&&!w.current.destroyed&&D$({swiper:w.current,slides:D,passedParams:E,changedParams:P,nextEl:x.current,prevEl:S.current,scrollbarEl:k.current,paginationEl:C.current}),()=>{N()}}),Ko(()=>{F$(w.current)},[c]);function F(){return _.virtual?z$(w.current,D,c):D.map((P,I)=>q.cloneElement(P,{swiper:w.current,swiperSlideIndex:I}))}return q.createElement(t,Gl({ref:y,className:PS(`${s}${e?` ${e}`:""}`)},M),q.createElement(B$.Provider,{value:w.current},O["container-start"],q.createElement(n,{className:I$(_.wrapperClass)},O["wrapper-start"],F(),O["wrapper-end"]),ES(_)&&q.createElement(q.Fragment,null,q.createElement("div",{ref:S,className:"swiper-button-prev"}),q.createElement("div",{ref:x,className:"swiper-button-next"})),TS(_)&&q.createElement("div",{ref:k,className:"swiper-scrollbar"}),kS(_)&&q.createElement("div",{ref:C,className:"swiper-pagination"}),O["container-end"]))});jS.displayName="Swiper";const $S=b.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},u)=>{const c=b.useRef(null),[d,m]=b.useState("swiper-slide"),[p,h]=b.useState(!1);function y(x,S,C){S===c.current&&m(C)}Ko(()=>{if(typeof l<"u"&&(c.current.swiperSlideIndex=l),u&&(u.current=c.current),!(!c.current||!r)){if(r.destroyed){d!=="swiper-slide"&&m("swiper-slide");return}return r.on("_slideClass",y),()=>{r&&r.off("_slideClass",y)}}}),Ko(()=>{r&&c.current&&!r.destroyed&&m(r.getSlideClasses(c.current))},[r]);const w={isActive:d.indexOf("swiper-slide-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0},f=()=>typeof t=="function"?t(w):t,v=()=>{h(!0)};return q.createElement(e,Gl({ref:c,className:PS(`${d}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:v},s),i&&q.createElement(yv.Provider,{value:w},q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},f(),o&&!p&&q.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}}))),!i&&q.createElement(yv.Provider,{value:w},f(),o&&!p&&q.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}})))});$S.displayName="SwiperSlide";const V$=T.section`
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
`,H$=T.div`
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
`,U$=T.div`
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
`,W$=T(Me)`
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
`,G$=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],Y$=()=>g.jsx(V$,{children:g.jsx(jS,{modules:[w5,_5,S5],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:G$.map(e=>g.jsx($S,{children:g.jsx(H$,{bg:e.img,children:g.jsxs(U$,{children:[g.jsx("h1",{children:e.title}),g.jsx("p",{children:e.desc}),g.jsx(W$,{to:e.url,children:e.btn})]})})},e.id))})}),q$=T.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,yd=T.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,xd=T.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,bd=T.div`
  font-size: 14px;
  color: #888;
`,IS=()=>g.jsxs(q$,{children:[g.jsxs(yd,{children:[g.jsx(xd,{children:"3000+"}),g.jsx(bd,{children:"Перевірених деталей"})]}),g.jsxs(yd,{children:[g.jsx(xd,{children:"6 років"}),g.jsx(bd,{children:"Досвіду на ринку"})]}),g.jsxs(yd,{children:[g.jsx(xd,{children:"100%"}),g.jsx(bd,{children:"Контроль якості"})]})]}),X$=Re.div`
  background:var(--background-color);
`,K$=Re.div`
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
  
  }
`;Re.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;Re.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;const Z$=()=>g.jsx(X$,{children:g.jsxs(K$,{children:[g.jsx(Y$,{}),g.jsx(IS,{}),g.jsx(Zb,{}),g.jsx(c5,{})]})}),Q$=T.div`
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
  }
`,J$=T.section`
  background-color:  var(--second-background);
`,eI=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,tI=T.button`
  height: 30px;
  padding: 5px;
  background: #625244;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: var(--main-font);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`,nI=T.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,rI=T.button`
  width: 100%;
  height: 30px;
  padding: 10px 10px;
  background: #625244;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: var(--main-font);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  transition: all 0.2s ease, transform 0.1s ease;

  &:hover {
  background: #4e4136;
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

  &:active {
    transform: scale(0.97);
  }
`;T.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`;const iI=T.div`
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
`,oI=T.div`
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
`;const aI=T.div`
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
`;const sI=T.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,lI=T.button`
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
`,DS=T.button`
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
`,uI=T.div`
  position: relative;
  display: inline-block;

`,cI=T.div`
  position: absolute;
  top: 110%;
  right: 0;

  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;

  min-width: 160px;
  padding: 6px 0;

  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 10;
`,ui=T.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,dI=T.aside`

        margin-top: 56px;
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
`,fI=T.h3`
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
`;const pI=T.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,hI=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,mI=T.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,gI=T.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,vI=T.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,yI=T.label`
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
`,xI=T.span`
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
`;var xp={},mm={},gm={},uo={};Object.defineProperty(uo,"__esModule",{value:!0});uo.Direction=void 0;var xv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(xv||(uo.Direction=xv={}));(function(e){var t=te&&te.__spreadArray||function(O,$,R){if(R||arguments.length===2)for(var L=0,N=$.length,F;L<N;L++)(F||!(L in $))&&(F||(F=Array.prototype.slice.call($,0,L)),F[L]=$[L]);return O.concat(F||Array.prototype.slice.call($))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=b,r=uo,i=function(O){var $=O.toString().split(".")[1];return $?$.length:0};e.getStepDecimals=i;function o(O){return O.touches&&O.touches.length||O.changedTouches&&O.changedTouches.length}e.isTouchEvent=o;function a(O,$,R){var L=($-O)/R,N=8,F=Number(L.toFixed(N));return parseInt(F.toString(),10)===F}e.isStepDivisible=a;function l(O,$,R,L,N,F,P){var I=1e11;if(O=Math.round(O*I)/I,!F){var A=P[$-1],B=P[$+1];if(A&&A>O)return A;if(B&&B<O)return B}if(O>L)return L;if(O<R)return R;var z=Math.floor(O*I-R*I)%Math.floor(N*I),H=Math.floor(O*I-Math.abs(z)),G=z===0?O:H/I,W=Math.abs(z/I)<N/2?G:G+N,X=(0,e.getStepDecimals)(N);return parseFloat(W.toFixed(X))}e.normalizeValue=l;function s(O,$,R){return(O-$)/(R-$)}e.relativeValue=s;function u(O){return O===r.Direction.Up||O===r.Direction.Down}e.isVertical=u;function c(O,$,R){if($>=R)throw new RangeError("min (".concat($,") is equal/bigger than max (").concat(R,")"));if(O<$)throw new RangeError("value (".concat(O,") is smaller than min (").concat($,")"));if(O>R)throw new RangeError("value (".concat(O,") is bigger than max (").concat(R,")"))}e.checkBoundaries=c;function d(O,$,R){return O<$?$:O>R?R:O}e.checkValuesAgainstBoundaries=d;function m(O){if(!(O.length<2)&&!O.slice(1).every(function($,R){return O[R]<=$}))throw new RangeError("values={[".concat(O,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=m;function p(O){var $=window.getComputedStyle(O);return{top:parseInt($["margin-top"],10),bottom:parseInt($["margin-bottom"],10),left:parseInt($["margin-left"],10),right:parseInt($["margin-right"],10)}}e.getMargin=p;function h(O){var $=window.getComputedStyle(O);return{top:parseInt($["padding-top"],10)+parseInt($["border-top-width"],10),bottom:parseInt($["padding-bottom"],10)+parseInt($["border-bottom-width"],10),left:parseInt($["padding-left"],10)+parseInt($["border-left-width"],10),right:parseInt($["padding-right"],10)+parseInt($["border-right-width"],10)}}e.getPaddingAndBorder=h;function y(O,$,R){var L=R?-1:1;O.forEach(function(N,F){return f(N,L*$[F].x,$[F].y)})}e.translateThumbs=y;function w(O,$,R,L){for(var N=0,F=j(O[0],$,R,L),P=1;P<O.length;P++){var I=j(O[P],$,R,L);I<F&&(F=I,N=P)}return N}e.getClosestThumbIndex=w;function f(O,$,R){O.style.transform="translate(".concat($,"px, ").concat(R,"px)")}e.translate=f;var v=function(O){var $=[],R=null,L=function(){for(var N=[],F=0;F<arguments.length;F++)N[F]=arguments[F];$=N,!R&&(R=requestAnimationFrame(function(){R=null,O.apply(void 0,$)}))};return L};e.schd=v;function x(O,$,R){var L=O.slice(0);return L[$]=R,L}e.replaceAt=x;function S(O){var $=O.values,R=O.colors,L=O.min,N=O.max,F=O.direction,P=F===void 0?r.Direction.Right:F,I=O.rtl,A=I===void 0?!1:I;A&&P===r.Direction.Right?P=r.Direction.Left:A&&r.Direction.Left&&(P=r.Direction.Right);var B=$.slice(0).sort(function(H,G){return H-G}).map(function(H){return(H-L)/(N-L)*100}),z=B.reduce(function(H,G,W){return"".concat(H,", ").concat(R[W]," ").concat(G,"%, ").concat(R[W+1]," ").concat(G,"%")},"");return"linear-gradient(".concat(P,", ").concat(R[0]," 0%").concat(z,", ").concat(R[R.length-1]," 100%)")}e.getTrackBackground=S;function C(){}e.voidFn=C;function k(O){throw new Error("Didn't expect to get here")}e.assertUnreachable=k;var _=function(O,$,R,L,N){N===void 0&&(N=function(P){return P});var F=Math.ceil(t([O],Array.from(O.children),!0).reduce(function(P,I){var A=Math.ceil(I.getBoundingClientRect().width);if(I.innerText&&I.innerText.includes(R)&&I.childElementCount===0){var B=I.cloneNode(!0);B.innerHTML=N($.toFixed(L)),B.style.visibility="hidden",document.body.appendChild(B),A=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return A>P?A:P},O.getBoundingClientRect().width));return F},E=function(O,$,R,L,N,F,P){P===void 0&&(P=function(B){return B});var I=[],A=function(B){var z=_(R[B],L[B],N,F,P),H=$[B].x;$.forEach(function(G,W){var X=G.x,ee=_(R[W],L[W],N,F,P);B!==W&&(H>=X&&H<=X+ee||H+z>=X&&H+z<=X+ee)&&(I.includes(W)||(I.push(B),I.push(W),I=t(t([],I,!0),[B,W],!1),A(W)))})};return A(O),Array.from(new Set(I.sort()))},M=function(O,$,R,L,N,F){L===void 0&&(L=.1),N===void 0&&(N=" - "),F===void 0&&(F=function(W){return W});var P=(0,e.getStepDecimals)(L),I=(0,n.useState)({}),A=I[0],B=I[1],z=(0,n.useState)(F($[R].toFixed(P))),H=z[0],G=z[1];return(0,n.useEffect)(function(){if(O){var W=O.getThumbs();if(W.length<1)return;var X={},ee=O.getOffsets(),fe=E(R,ee,W,$,N,P,F),be=F($[R].toFixed(P));if(fe.length){var ie=fe.reduce(function(vt,fo,Ga,po){return vt.length?t(t([],vt,!0),[ee[po[Ga]].x],!1):[ee[po[Ga]].x]},[]);if(Math.min.apply(Math,ie)===ee[R].x){var je=[];fe.forEach(function(vt){je.push($[vt].toFixed(P))}),be=Array.from(new Set(je.sort(function(vt,fo){return parseFloat(vt)-parseFloat(fo)}))).map(F).join(N);var Be=Math.min.apply(Math,ie),Ve=Math.max.apply(Math,ie),oi=W[fe[ie.indexOf(Ve)]].getBoundingClientRect().width;X.left="".concat(Math.abs(Be-(Ve+oi))/2,"px"),X.transform="translate(-50%, 0)"}else X.visibility="hidden"}G(be),B(X)}},[O,$]),[H,A]};e.useThumbOverlap=M;function j(O,$,R,L){var N=O.getBoundingClientRect(),F=N.left,P=N.top,I=N.width,A=N.height;return u(L)?Math.abs(R-(P+A/2)):Math.abs($-(F+I/2))}var D=function(){var O,$=((O=navigator.userAgentData)===null||O===void 0?void 0:O.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes($)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=D})(gm);var bI=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),wI=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),SI=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),_I=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&wI(t,e,n);return SI(t,e),t},bv=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(mm,"__esModule",{value:!0});var ws=_I(b),oe=gm,Ae=uo,CI=["ArrowRight","ArrowUp","k","PageUp"],EI=["ArrowLeft","ArrowDown","j","PageDown"],kI=function(e){bI(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=ws.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,u=r.trackRef.current;if(!u)return console.warn("No track element found."),[];var c=u.getBoundingClientRect(),d=(0,oe.getPaddingAndBorder)(u);return r.getThumbs().map(function(m,p){var h={x:0,y:0},y=m.getBoundingClientRect(),w=(0,oe.getMargin)(m);switch(o){case Ae.Direction.Right:return h.x=(w.left+d.left)*-1,h.y=((y.height-c.height)/2+d.top)*-1,h.x+=c.width*(0,oe.relativeValue)(a[p],l,s)-y.width/2,h;case Ae.Direction.Left:return h.x=(w.right+d.right)*-1,h.y=((y.height-c.height)/2+d.top)*-1,h.x+=c.width-c.width*(0,oe.relativeValue)(a[p],l,s)-y.width/2,h;case Ae.Direction.Up:return h.x=((y.width-c.width)/2+w.left+d.left)*-1,h.y=-d.left,h.y+=c.height-c.height*(0,oe.relativeValue)(a[p],l,s)-y.height/2,h;case Ae.Direction.Down:return h.x=((y.width-c.width)/2+w.left+d.left)*-1,h.y=-d.left,h.y+=c.height*(0,oe.relativeValue)(a[p],l,s)-y.height/2,h;default:return(0,oe.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,oe.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,oe.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,oe.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,u=o.rtl,c=o.direction,d=r.state.isChanged,m=r.getTargetIndex(i.nativeEvent),p=u||c===Ae.Direction.Left||c===Ae.Direction.Down?-1:1;m!==-1&&(CI.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:m,isChanged:!0}),l((0,oe.replaceAt)(a,m,r.normalizeValue(a[m]+p*(i.key==="PageUp"?s*10:s),m)))):EI.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:m,isChanged:!0}),l((0,oe.replaceAt)(a,m,r.normalizeValue(a[m]-p*(i.key==="PageDown"?s*10:s),m)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){d&&r.fireOnFinalChange()}):d&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,u=r.props,c=u.direction,d=u.min,m=u.max,p=u.onChange,h=u.values,y=u.step,w=u.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var f=r.trackRef.current;if(!f)return null;var v=f.getBoundingClientRect(),x=(0,oe.isVertical)(c)?v.height:v.width;if(s[0]!==-1&&s[1]!==-1){var S=i-s[0],C=o-s[1],k=0;switch(c){case Ae.Direction.Right:case Ae.Direction.Left:k=S/x*(m-d);break;case Ae.Direction.Down:case Ae.Direction.Up:k=C/x*(m-d);break;default:(0,oe.assertUnreachable)(c)}if(w&&(k*=-1),Math.abs(k)>=y/2){for(var _=0;_<r.thumbRefs.length;_++){if(h[_]===m&&Math.sign(k)===1||h[_]===d&&Math.sign(k)===-1)return;var E=h[_]+k;E>m?k=m-h[_]:E<d&&(k=d-h[_])}for(var M=h.slice(0),_=0;_<r.thumbRefs.length;_++)M=(0,oe.replaceAt)(M,_,r.normalizeValue(h[_]+k,_));r.setState({draggedTrackPos:[i,o]}),p(M)}}else{var j=0;switch(c){case Ae.Direction.Right:j=(i-v.left)/x*(m-d)+d;break;case Ae.Direction.Left:j=(x-(i-v.left))/x*(m-d)+d;break;case Ae.Direction.Down:j=(o-v.top)/x*(m-d)+d;break;case Ae.Direction.Up:j=(x-(o-v.top))/x*(m-d)+d;break;default:(0,oe.assertUnreachable)(c)}w&&(j=m+d-j),Math.abs(h[l]-j)>=y/2&&p((0,oe.replaceAt)(h,l,r.normalizeValue(j,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,u=a.step,c=a.allowOverlap,d=a.values;return(0,oe.normalizeValue)(i,o,l,s,u,c,d)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=ws.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),u=[],c=0;c<r.numOfMarks+1;c++){var d=9999,m=9999;if(r.markRefs[c].current){var p=r.markRefs[c].current.getBoundingClientRect();d=p.height,m=p.width}r.props.direction===Ae.Direction.Left||r.props.direction===Ae.Direction.Right?u.push([Math.round(o/r.numOfMarks*c+l-m/2),-Math.round((d-a)/2)]):u.push([Math.round(a/r.numOfMarks*c+s-d/2),-Math.round((m-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,oe.schd)(r.onMouseMove),r.schdOnTouchMove=(0,oe.schd)(r.onTouchMove),r.schdOnEnd=(0,oe.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return ws.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,oe.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,oe.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,oe.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(c){(0,oe.isStepDivisible)(a,c,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,u=s===void 0?function(){return null}:s,c=r.values,d=r.min,m=r.max,p=r.allowOverlap,h=r.disabled,y=this.state,w=y.draggedThumbIndex,f=y.thumbZIndexes,v=y.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,oe.isVertical)(this.props.direction)?"ns-resize":"ew-resize":c.length===1&&!h?"pointer":"inherit"},onMouseDown:h?oe.voidFn:this.onMouseDownTrack,onTouchStart:h?oe.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:h,children:bv(bv([],v.map(function(x,S,C){return u({props:{style:n.props.direction===Ae.Direction.Left||n.props.direction===Ae.Direction.Right?{position:"absolute",left:"".concat(x[0],"px"),marginTop:"".concat(x[1],"px")}:{position:"absolute",top:"".concat(x[0],"px"),marginLeft:"".concat(x[1],"px")},key:"mark".concat(S),ref:n.markRefs[S]},index:S})}),!0),c.map(function(x,S){var C=n.state.draggedThumbIndex===S;return l({index:S,value:x,isDragged:C,props:{style:{position:"absolute",zIndex:f[S],cursor:h?"inherit":C?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:h?void 0:0,"aria-valuemax":p?m:c[S+1]||m,"aria-valuemin":p?d:c[S-1]||d,"aria-valuenow":x,draggable:!1,ref:n.thumbRefs[S],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:h?oe.voidFn:n.onKeyDown,onKeyUp:h?oe.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Ae.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(ws.Component);mm.default=kI;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(mm);e.Range=n.default;var r=gm;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=uo;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(xp);const TI=T.div`
  padding: 20px 0;
`,PI=T.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,wv=T.input`
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
`;const OI=T.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,MI=T.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,LS=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,u]=b.useState([o,a]);b.useEffect(()=>{e&&e.length===2&&(u(e),t&&t(e))},[e,t]);const c=p=>{u(p),t&&t(p)},d=(p,h)=>{const y=h===""?"":Number(h),w=[...s];w[p]=y,c(w)},m=p=>{const h=[...s];p===0?((h[0]===""||h[0]<o)&&(h[0]=o),h[0]>h[1]-50&&(h[0]=h[1]-50)):((h[1]===""||h[1]>a)&&(h[1]=a),h[1]<h[0]+50&&(h[1]=h[0]+50)),c(h)};return g.jsx(g.Fragment,{children:l&&g.jsxs(TI,{children:[g.jsxs(PI,{children:[g.jsx(wv,{type:"number",value:s[0],min:o,max:s[1],onChange:p=>d(0,p.target.value),onBlur:()=>m(0)}),g.jsx(wv,{type:"number",value:s[1],min:s[0],max:a,onChange:p=>d(1,p.target.value),onBlur:()=>m(1)})]}),g.jsx(xp.Range,{values:s,step:50,min:o,max:a,onChange:c,renderTrack:({props:p,children:h})=>g.jsx(OI,{...p,background:xp.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:h}),renderThumb:({props:p})=>g.jsx(MI,{...p})})]})})},jI=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState([]),[l,s]=b.useState({});b.useEffect(()=>{t&&(async()=>{try{const h=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const y=await h.json();console.log("dataaaa",y.data);const w=y.data||[],f={};w.forEach(x=>{var S;(S=x.attributes)==null||S.forEach(C=>{f[C.label]||(f[C.label]=new Set),f[C.label].add(C.value)})});const v=Object.entries(f).map(([x,S])=>({type:"checkbox",label:x,name:x.toLowerCase(),options:Array.from(S)}));console.log("fillltr",v),a(v)}catch(h){console.error(h)}})()},[t]);const u=p=>{s(h=>({...h,[p]:!h[p]}))},c=(p,h)=>{r(y=>{const w=y[p]||[];return w.includes(h)?{...y,[p]:w.filter(f=>f!==h)}:{...y,[p]:[...w,h]}})},d=Object.values(n).some(p=>Array.isArray(p)&&p.length>0),m=()=>{d&&r({})};return console.log(d),g.jsxs(dI,{children:[g.jsxs(fI,{children:["Фільтри ",g.jsx(kb,{size:20})]}),(o||[]).map(p=>{var y;const h=!!l[p.name];return g.jsxs(pI,{children:[g.jsxs(hI,{onClick:()=>u(p.name),children:[g.jsx(mI,{children:p.label}),g.jsx(gI,{isOpen:h})]}),g.jsxs(vI,{isOpen:h,children:[p.type==="checkbox"&&((y=p.options)==null?void 0:y.map(w=>{var f;return g.jsxs(yI,{children:[g.jsx(yp,{checked:((f=n[p.name])==null?void 0:f.includes(w))||!1,onChange:()=>c(p.name,w)}),g.jsx(xI,{}),w]},w)})),p.type==="range"&&g.jsx(LS,{onChange:i,childValues:e})]})]},p.name)}),g.jsx(DS,{onClick:m,disabled:!d,children:"Скинути обрані фільтри"})]})},$I=T.aside`
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
`;const II=T.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,DI=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,LI=T.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,RI=T.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,AI=T.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,FI=T.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,bp=T.input.attrs({type:"checkbox"})`
  display: none;
`,NI=T.span`
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${bp}:checked + & {
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

  ${bp}:checked + &::after {
    opacity: 1;
  }
`,zI=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState({}),[l,s]=b.useState([]);b.useEffect(()=>{t&&(async()=>{try{const m=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const p=await m.json();console.log("dataaaa",p.data);const h=p.data||[],y={};h.forEach(f=>{var v;(v=f.attributes)==null||v.forEach(x=>{y[x.label]||(y[x.label]=new Set),y[x.label].add(x.value)})});const w=Object.entries(y).map(([f,v])=>({type:"checkbox",label:f,name:f.toLowerCase(),options:Array.from(v)}));console.log("fillltr",w),s(w)}catch(m){console.error(m)}})()},[t]);const u=d=>{a(m=>({...m,[d]:!m[d]}))},c=(d,m)=>{r(p=>{const h=p[d]||[];return h.includes(m)?{...p,[d]:h.filter(y=>y!==m)}:{...p,[d]:[...h,m]}})};return g.jsx($I,{children:(l||[]).map(d=>{var p;const m=!!o[d.name];return g.jsxs(II,{children:[g.jsxs(DI,{onClick:()=>u(d.name),children:[g.jsx(LI,{children:d.label}),g.jsx(RI,{isOpen:m})]}),g.jsxs(AI,{isOpen:m,children:[d.type==="checkbox"&&((p=d.options)==null?void 0:p.map(h=>{var y;return g.jsxs(FI,{children:[g.jsx(bp,{checked:((y=n[d.name])==null?void 0:y.includes(h))||!1,onChange:()=>c(d.name,h)}),g.jsx(NI,{}),h]},h)})),d.type==="range"&&g.jsx(LS,{onChange:i,childValues:e})]})]},d.name)})})},BI=T.div`
`,VI=T.div`
display: flex;
    justify-content: space-between;
    align-items: center;
    
`,HI=T.h2`
  text-align: center;
  font-size:34px;
  font-weight:600px;
      margin-right: auto;
    margin-left: auto;
     
          @media screen and (min-width: 768px) {
 margin-left: 20%;
   font-size:40px;
  }
       @media screen and (min-width: 890px) {
 margin-left: 40%;
  }

`,UI=T.div`
width: 100vw;

  @media screen and (min-width: 768px) {
  width: 70vw;
  }
      
`;T.div``;const WI=T.div`
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
    
    grid-template-columns: repeat(3, 1fr);
    padding-left: 20px;
    padding-right: 0px;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    padding-left: 0;
    padding-right: 0;
    margin-left: 30px;
    max-width: 950px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    padding-left: 0;
    padding-right: 30px;
    margin-left: 30px;
    max-width: 1340px;
  }
`,GI=T.div`
font-family: var(--second-font);
font-weight: 500;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
    height: 100%;


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
`,YI=T.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;
`,qI=T.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,XI=T.p`
font-family: var(--second-font);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2; 
  padding-left:16px;
  padding-right: 16px;
  
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis; 

  min-height: 2.4em; 
  margin-bottom: 8px;
`,KI=T.p`
     font-size: 17px;
    font-weight: 800;

`,ZI=T.div.attrs({className:"card-buttons"})`
  position: static;
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  opacity: 1;

  @media screen and (min-width: 768px) {

  }
`,Sv=T.button`
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
`;const QI=T.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,wd=T.button`
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
`,JI=T.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,eD=T.button`
  width: 100%;
      min-width: 160px;
  height: 30px;
  padding: 10px 10px;
  background: #625244;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: var(--main-font);
  font-weight: 900;
  display: flex;
  gap:15px;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  transition: all 0.2s ease, transform 0.1s ease;

  &:hover {
  background: #4e4136;
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

  &:active {
    transform: scale(0.97);
  }
`,tD=T.div`
  position: absolute;
  top: 110%;
  right: 0;

  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;

  min-width: 160px;
  padding: 6px 0;

  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 10;
`,ci=T.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,RS=Vb({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]}}}),{toggleFavorite:Ua,clearFavorite:nD}=RS.actions,rD=RS.reducer,iD=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:u})=>{const[c,d]=b.useState([]),[m,p]=b.useState(!0),[h,y]=b.useState(1),w=24;let f=c;b.useEffect(()=>{(async()=>{try{p(!0);const R=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();d(R.data);const L=R.data.map(N=>N.price);if(L.length>0){let N=Math.min(...L),F=Math.max(...L);e([N,F])}}catch($){console.error("Error fetching products:",$)}finally{p(!1)}})()},[t,e]),b.useEffect(()=>{y(1)},[t,n,r]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[h]);const v=to(),x=Kn(),S=Dt(O=>O.favorites.items),C=Dt(O=>O.cart.items),k=(O,$)=>{$.stopPropagation();const R=S.some(L=>L.id===O.id);x(Ua(O)),R?J.warning(`${O.name} видалено з обраного`):J.info(`${O.name} додано в обране`)};if(Object.keys(n).forEach(O=>{const $=n[O];Array.isArray($)&&$.length>0&&(f=f.filter(R=>{var N;const L=(N=R.attributes)==null?void 0:N.find(F=>F.label.toLowerCase()===O.toLowerCase());return L&&$.includes(L.value)}))}),r&&r.length===2){const[O,$]=r;console.log(O,$)}const _=b.useMemo(()=>{const O=[...f];switch(i){case"name":return O.sort(($,R)=>s==="asc"?$.name.localeCompare(R.name):R.name.localeCompare($.name));case"price":return O.sort(($,R)=>s==="asc"?$.price-R.price:R.price-$.price);case"date":return O.sort(($,R)=>s==="asc"?new Date($.createdAt)-new Date(R.createdAt):new Date(R.createdAt)-new Date($.createdAt));default:return O}},[i,f,s]),E=h*w,M=E-w,j=_.slice(M,E),D=Math.ceil(f.length/w);return m?g.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:g.jsx(qu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):(console.log(j),console.log("filteredProducts.length:",f.length),console.log("currentProducts.length:",j.length),g.jsxs(BI,{children:[g.jsxs(VI,{children:[g.jsx(HI,{children:t}),g.jsxs(JI,{children:[g.jsxs(eD,{onClick:()=>o(O=>!O),children:["Сортування",g.jsx(Hh,{strokeWidth:.9,size:22})]}),a&&g.jsxs(tD,{children:[g.jsx(ci,{onClick:()=>{l("name"),u("asc"),o(!1)},children:"А-Я"}),g.jsx(ci,{onClick:()=>{l("name"),u("desc"),o(!1)},children:"Я-А"}),g.jsx(ci,{onClick:()=>{l("price"),u("asc"),o(!1)},children:"Ціна ↑"}),g.jsx(ci,{onClick:()=>{l("price"),u("desc"),o(!1)},children:"Ціна ↓"}),g.jsx(ci,{onClick:()=>{l("date"),u("desc"),o(!1)},children:"Спочатку новіші"}),g.jsx(ci,{onClick:()=>{l("date"),u("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),g.jsx(oo,{autoClose:1500}),f.length===0?g.jsx(UI,{children:g.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):g.jsx(WI,{children:j.map(O=>{var P,I;const $=S.some(A=>A.id===O.id),R=C.find(A=>A.id===O.id),N=(R?R.quantity:0)>=(O.stock||0),F=(A,B)=>{if(B.stopPropagation(),N){J.error(`Вибачте, доступно лише ${A.stock} шт.`);return}x(Fa({...A,quantity:1})),J.success(`${A.name} додано в кошик!`)};return g.jsxs(GI,{onClick:()=>v(`/product/${O.id}`),style:{cursor:"pointer"},children:[g.jsx(YI,{src:((I=(P=O.images)==null?void 0:P[0])==null?void 0:I.url)||"/placeholder.jpg",alt:O.name,onError:A=>{A.currentTarget.onerror=null,A.currentTarget.src=Sa}}),g.jsx(XI,{children:O.name}),g.jsxs(qI,{children:[g.jsxs(KI,{children:[O.price," грн"]}),g.jsxs(ZI,{children:[g.jsx(Sv,{onClick:A=>F(O,A),children:g.jsx(Ra,{size:24,color:"black"})}),g.jsx(Sv,{onClick:A=>k(O,A),children:g.jsx(Wh,{size:24,fill:$?"#ff4d4f":"none",color:$?"#ff4d4f":"#000000"})})]})]})]},O.id)})}),f.length>w&&g.jsxs(QI,{children:[g.jsx(wd,{onClick:()=>y(O=>Math.max(O-1,1)),disabled:h===1,children:"Назад"}),Array.from({length:D},(O,$)=>g.jsx(wd,{onClick:()=>y($+1),active:h===$+1,children:$+1},$)),g.jsx(wd,{onClick:()=>y(O=>Math.min(O+1,D)),disabled:h===D,children:"Вперед"})]})]}))},oD=()=>{const[e,t]=b.useState({});console.log(e);const{category:n}=U1(),[r,i]=b.useState(!1),[o,a]=b.useState(!1),[l,s]=b.useState("date"),[u,c]=b.useState("desc"),[d,m]=b.useState([]),[p,h]=b.useState([0,0]);console.log(d),console.log(n);const y=Object.values(e).some(f=>Array.isArray(f)&&f.length>0),w=()=>{y&&t({})};return g.jsxs(J$,{children:[g.jsxs(Q$,{children:[g.jsxs(eI,{children:[g.jsxs(tI,{onClick:()=>i(!0),children:["Фільтр",g.jsx(nI,{children:g.jsx("use",{href:`${Tn}#icon-filter`})})]}),g.jsxs(uI,{children:[g.jsxs(rI,{onClick:()=>a(f=>!f),children:["Сортування",g.jsx(Hh,{strokeWidth:.9,size:22})]}),o&&g.jsxs(cI,{children:[g.jsx(ui,{onClick:()=>{s("name"),c("asc"),a(!1)},children:"А-Я"}),g.jsx(ui,{onClick:()=>{s("name"),c("desc"),a(!1)},children:"Я-А"}),g.jsx(ui,{onClick:()=>{s("price"),c("asc"),a(!1)},children:"Ціна ↑"}),g.jsx(ui,{onClick:()=>{s("price"),c("desc"),a(!1)},children:"Ціна ↓"}),g.jsx(ui,{onClick:()=>{s("date"),c("desc"),a(!1)},children:"Спочатку новіші"}),g.jsx(ui,{onClick:()=>{s("date"),c("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),g.jsx(jI,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:d,priceRange:p,setPriceRange:h}),g.jsx(iD,{priceRange:p,values:d,setValues:m,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:u,setSortOrder:c}),r&&g.jsx(iI,{onClick:()=>i(!1),open:r,children:g.jsxs(oI,{onClick:f=>f.stopPropagation(),open:r,children:[g.jsxs(aI,{children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[g.jsx(kb,{size:20}),g.jsx("h2",{children:"Фільтри"})]}),g.jsx(Pb,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),g.jsx(zI,{childValues:d,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:p,setPriceRange:h}),g.jsxs(sI,{children:[g.jsx(DS,{onClick:w,disabled:!y,children:"Скинути обрані фільтри"}),g.jsx(lI,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},_v=T.div`
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
    
  }
`,aD=T.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,sD=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,lD=T.div``;T.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const uD=T.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,cD=T.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,dD=T.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,fD=T.div``,pD=T.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,hD=T.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,mD=T.span`
  color: #27ae60;
  font-size: 17px;
`,gD=T.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,vD=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,yD=T.span`
  font-size: 32px;
  font-weight: 700;
`;T.span`
  text-decoration: line-through;
  color: #999;
  font-size: 18px;
`;const xD=T.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,bD=T.div`
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
`,wD=T.button`
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
`;const SD=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
`,_D=T.div`
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
`,CD=T.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`,ED=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,kD=T.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,Cv=T.button`
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
`,TD=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,PD=T.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,OD=T.button`
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
`,MD=T.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,AS=T.span`

  position: absolute;
  bottom: 120%;
  left: 50%;

  transform: translateX(-50%) translateY(5px);

  background: black;
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;

  opacity: 0;
  pointer-events: none;
  transition: 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);

    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`,jD=T.div`
  position: relative;
  display: inline-block;

  &:hover ${AS} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,FS="carousel",NS="controller",$D="navigation",ID="no-scroll",vm="portal",DD="root",zS="toolbar",Ev="zoom",Sd="loading",_d="error",Cd="complete",LD="placeholder",RD=e=>`active-slide-${e}`,AD="fullsize",ym="flex_center",FD="no_scroll",BS="no_scroll_padding",xm="slide",VS="slide_wrapper",ND="slide_wrapper_interactive",Rr="prev",Ar="next",kv="swipe",Ki="close",HS="onPointerDown",US="onPointerMove",WS="onPointerUp",GS="onPointerLeave",YS="onPointerCancel",bm="onKeyDown",zD="onKeyUp",wm="onWheel",BD="Escape",VD="ArrowLeft",HD="ArrowRight",UD="button",wp="icon",qS="contain",Tv="cover",XS="Unknown action type",KS="yarl__";function kn(...e){return e.filter(Boolean).join(" ")}function ae(e){return`${KS}${e}`}function xt(e){return`--${KS}${e}`}function Wa(e,t){return`${e}${t?`_${t}`:""}`}function Sm(e){return t=>Wa(e,t)}function Zi(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function WD(e,t,n){return Zi(e,"{index} of {total}").replace(/\{index}/g,`${Tm(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function _m(...e){return()=>{e.forEach(t=>{t()})}}function Qn(e,t,n){return()=>{const r=b.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function Cm(){return typeof window<"u"}function Em(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function co(e){return e.type===void 0||e.type==="image"}function km(e,t){return e.imageFit===Tv||e.imageFit!==qS&&t===Tv}function uc(e){return typeof e=="string"?Number.parseInt(e,10):e}function Yl(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=uc(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function GD(e,t){const n=Yl(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function YD(){return(Cm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function Tm(e,t){return t>0?(e%t+t)%t:0}function ZS(e){return e.length>0}function QS(e,t){return e[Tm(t,e.length)]}function Sp(e,t){return ZS(e)?QS(e,t):void 0}function qD(e){return co(e)?e.src:void 0}function XD(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=b.isValidElement(n)?b.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function KD(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const ZD=Number(b.version.split(".")[0])>=19;function QD(e){return{inert:ZD?e:e?"":void 0}}function JD(e){e.scrollTop}const _p={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[Ki]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:qS,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Pr(e,t){return{name:e,component:t}}function He(e,t){return{module:e,children:t}}function JS(e,t,n){return e.module.name===t?n(e):e.children?[He(e.module,e.children.flatMap(r=>{var i;return(i=JS(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function di(e,t,n){return e.flatMap(r=>{var i;return(i=JS(r,t,n))!==null&&i!==void 0?i:[]})}function eL(e,t=[],n=[]){let r=e;const i=p=>{const h=[...r];for(;h.length>0;){const y=h.pop();if((y==null?void 0:y.module.name)===p)return!0;y!=null&&y.children&&h.push(...y.children)}return!1},o=(p,h)=>{if(p===""){r=[He(h,r)];return}r=di(r,p,y=>[He(h,[y])])},a=(p,h)=>{r=di(r,p,y=>[He(y.module,[He(h,y.children)])])},l=(p,h,y)=>{r=di(r,p,w=>{var f;return[He(w.module,[...y?[He(h)]:[],...(f=w.children)!==null&&f!==void 0?f:[],...y?[]:[He(h)]])]})},s=(p,h,y)=>{r=di(r,p,w=>[...y?[He(h)]:[],w,...y?[]:[He(h)]])},u=p=>{a(NS,p)},c=(p,h)=>{r=di(r,p,y=>[He(h,y.children)])},d=p=>{r=di(r,p,h=>h.children)},m=p=>{n.push(p)};return t.forEach(p=>{p({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:u,replace:c,remove:d,augment:m})}),{config:r,augmentation:p=>n.reduce((h,y)=>y(h),p)}}const e2=b.createContext(null),t2=Qn("useA11yContext","A11yContext",e2);function tL({children:e}){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const u=c=>d=>{var m;d.currentTarget.contains(d.relatedTarget)||n(c),(m=c?l:s)===null||m===void 0||m(d)};return{onFocus:u(!0),onBlur:u(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return b.createElement(e2.Provider,{value:o},e)}const n2=b.createContext(null),cc=Qn("useDocument","DocumentContext",n2);function nL({nodeRef:e,children:t}){const n=b.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return b.createElement(n2.Provider,{value:n},t)}const r2=b.createContext(null),dc=Qn("useEvents","EventsContext",r2);function rL({children:e}){const[t]=b.useState({});b.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=b.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(u=>u!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(u=>u(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return b.createElement(r2.Provider,{value:n},e)}const i2=b.createContext(null),Xt=Qn("useLightboxProps","LightboxPropsContext",i2);function iL({children:e,...t}){return b.createElement(i2.Provider,{value:t},e)}const o2=b.createContext(null),Or=Qn("useLightboxState","LightboxStateContext",o2),a2=b.createContext(null),oL=Qn("useLightboxDispatch","LightboxDispatchContext",a2);function aL(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=Tm(i,n.length),a=Sp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Sp(t.slides,t.index)}:e;default:throw new Error(XS)}}function sL({slides:e,index:t,children:n}){const[r,i]=b.useReducer(aL,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Sp(e,t)}),[o,a]=b.useState(e),[l,s]=b.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const u=b.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return b.createElement(a2.Provider,{value:i},b.createElement(o2.Provider,{value:u},n))}const s2=b.createContext(null),fc=Qn("useTimeouts","TimeoutsContext",s2);function lL({children:e}){const[t]=b.useState([]);b.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=b.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return b.createElement(s2.Provider,{value:n},e)}const Pm=b.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:u,labels:c}=Xt(),d=Zi(c,t);return b.createElement("button",{ref:s,type:"button",title:d,"aria-label":d,className:kn(ae(UD),n),onClick:o,style:{...a,...u.button},...l},i?i():b.createElement(r,{className:ae(wp),style:u.icon}))});function uL(e,t){const n=r=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function ii(e,t){return uL(e,b.createElement("g",{fill:"currentColor"},b.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const cL=ii("Close",b.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),dL=ii("Previous",b.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),fL=ii("Next",b.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),pL=ii("Loading",b.createElement(b.Fragment,null,Array.from({length:8}).map((e,t,n)=>b.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),hL=ii("Error",b.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Pn=Cm()?b.useLayoutEffect:b.useEffect;function Om(){const[e,t]=b.useState(!1);return b.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function mL(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(uc);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function Pv(e,t){const n=b.useRef(void 0),r=b.useRef(void 0),i=Om();return Pn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:u,easing:c,onfinish:d}=t(n.current,e.current.getBoundingClientRect(),mL(e.current))||{};if(s&&u){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:u,easing:c})}catch(m){console.error(m)}r.current&&(r.current.onfinish=()=>{r.current=void 0,d==null||d()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function l2(){const e=b.useRef(null),t=b.useRef(void 0),[n,r]=b.useState();return{setContainerRef:b.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=u=>parseFloat(u)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function Qs(){const e=b.useRef(void 0),{setTimeout:t,clearTimeout:n}=fc();return b.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function pe(e){const t=b.useRef(e);return Pn(()=>{t.current=e}),b.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Ov(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Cp(e,t){return b.useMemo(()=>e==null&&t==null?null:n=>{Ov(e,n),Ov(t,n)},[e,t])}function gL(e,t=!1){const n=b.useRef(!1);Pn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=b.useCallback(()=>{n.current=!0},[]),i=b.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function Mm(){const[e,t]=b.useState(!1);return Pn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function vL(){const[e]=b.useState({}),t=b.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=b.useMemo(()=>({onPointerDown:i=>t(HS,i),onPointerMove:i=>t(US,i),onPointerUp:i=>t(WS,i),onPointerLeave:i=>t(GS,i),onPointerCancel:i=>t(YS,i),onKeyDown:i=>t(bm,i),onKeyUp:i=>t(zD,i),onWheel:i=>t(wm,i)}),[t]),r=b.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function Mv(e,t){const n=b.useRef(0),r=Qs(),i=pe((...o)=>{n.current=Date.now(),e(o)});return b.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const Ed=Sm("slide"),kd=Sm("slide_image");function ql({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:u}){var c,d,m,p,h,y,w,f;const[v,x]=b.useState(Sd),{publish:S}=dc(),{setTimeout:C}=fc(),k=b.useRef(null);b.useEffect(()=>{t===0&&S(RD(v))},[t,v,S]);const _=pe(z=>{("decode"in z?z.decode():Promise.resolve()).catch(()=>{}).then(()=>{z.parentNode&&(x(Cd),C(()=>{l==null||l(z)},0))})}),E=b.useCallback(z=>{k.current=z,z!=null&&z.complete&&_(z)},[_]),M=b.useCallback(z=>{_(z.currentTarget)},[_]),j=pe(()=>{x(_d),s==null||s()}),D=km(e,i),O=(z,H)=>Number.isFinite(z)?z:H,$=O(Math.max(...((d=(c=e.srcSet)===null||c===void 0?void 0:c.map(z=>z.width))!==null&&d!==void 0?d:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((m=k.current)===null||m===void 0?void 0:m.naturalWidth)||0),R=O(Math.max(...((h=(p=e.srcSet)===null||p===void 0?void 0:p.map(z=>z.height))!==null&&h!==void 0?h:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((y=k.current)===null||y===void 0?void 0:y.naturalHeight)||0),L=$&&R?{maxWidth:`min(${$}px, 100%)`,maxHeight:`min(${R}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},N=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((z,H)=>z.width-H.width).map(z=>`${z.src} ${z.width}w`).join(", "),F=()=>r&&!D&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,P=N&&r&&Cm()?`${Math.round(Math.min(F(),r.width))}px`:void 0,{style:I,className:A,...B}=(typeof o=="function"?o(e):o)||{};return b.createElement(b.Fragment,null,b.createElement("img",{ref:E,onLoad:M,onError:j,onClick:a,draggable:!1,className:kn(ae(kd()),D&&ae(kd("cover")),v!==Cd&&ae(kd("loading")),A),style:{...L,...u,...I},...B,alt:(f=e.alt)!==null&&f!==void 0?f:"",sizes:P,srcSet:N,src:e.src}),v!==Cd&&b.createElement("div",{className:ae(Ed(LD))},v===Sd&&(n!=null&&n.iconLoading?n.iconLoading():b.createElement(pL,{className:kn(ae(wp),ae(Ed(Sd)))})),v===_d&&(n!=null&&n.iconError?n.iconError():b.createElement(hL,{className:kn(ae(wp),ae(Ed(_d)))}))))}const yL=b.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=b.useRef(null),{trackFocusWithin:s}=t2();return b.createElement(nL,{nodeRef:l},b.createElement("div",{ref:Cp(a,l),className:kn(ae("root"),t),...s(r,i),...o},n))});var rt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(rt||(rt={}));function u2(e,t,n,r,i){b.useEffect(()=>i?()=>{}:_m(e(HS,t),e(US,n),e(WS,r),e(GS,r),e(YS,r)),[e,t,n,r,i])}var Jt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(Jt||(Jt={}));const Td=30;function xL({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,u,c,d,m,p,h,y,w){const f=b.useRef(0),v=b.useRef([]),x=b.useRef(void 0),S=b.useRef(0),C=b.useRef(Jt.NONE),k=b.useCallback($=>{x.current===$.pointerId&&(x.current=void 0,C.current=Jt.NONE);const R=v.current;R.splice(0,R.length,...R.filter(L=>L.pointerId!==$.pointerId))},[]),_=b.useCallback($=>{k($),$.persist(),v.current.push($)},[k]),E=b.useCallback($=>v.current.find(({pointerId:R})=>$.pointerId===R),[]),M=pe($=>{_($)}),j=($,R)=>d&&$>R||c&&$<-R,D=pe($=>{const R=E($);if(R)if(x.current===$.pointerId){const L=Date.now()-S.current,N=f.current;C.current===Jt.SWIPE?Math.abs(N)>.3*i||Math.abs(N)>5&&L<o?s(N,L):u(N):C.current===Jt.PULL&&(j(N,2*Td)?h(N,L):y(N)),f.current=0,C.current=Jt.NONE}else{const{target:L}=$;t&&L instanceof HTMLElement&&L===R.target&&(L.classList.contains(ae(xm))||L.classList.contains(ae(VS)))&&w()}k($)}),O=pe($=>{const R=E($);if(R){const L=x.current===$.pointerId;if($.buttons===0){L&&f.current!==0?D($):k(R);return}const N=$.clientX-R.clientX,F=$.clientY-R.clientY;if(x.current===void 0){const P=I=>{_($),x.current=$.pointerId,S.current=Date.now(),C.current=I};Math.abs(N)>Math.abs(F)&&Math.abs(N)>Td&&r(N)?e||(P(Jt.SWIPE),a()):Math.abs(F)>Math.abs(N)&&j(F,Td)&&(P(Jt.PULL),m())}else L&&(C.current===Jt.SWIPE?(f.current=N,l(N)):C.current===Jt.PULL&&(f.current=F,p(F)))}});u2(n,M,O,D)}function bL({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=b.useRef(null),r=pe(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return b.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function wL(e,t,n,r,i,o,a,l,s){const u=b.useRef(0),c=b.useRef(0),d=b.useRef(void 0),m=b.useRef(void 0),p=b.useRef(0),h=b.useRef(void 0),y=b.useRef(0),{setTimeout:w,clearTimeout:f}=fc(),v=b.useCallback(()=>{d.current&&(f(d.current),d.current=void 0)},[f]),x=b.useCallback(()=>{m.current&&(f(m.current),m.current=void 0)},[f]),S=pe(()=>{e!==rt.SWIPE&&(u.current=0,y.current=0,v(),x())});b.useEffect(S,[e,S]);const C=pe(_=>{m.current=void 0,u.current===_&&s(u.current)}),k=pe(_=>{if(_.ctrlKey||Math.abs(_.deltaY)>Math.abs(_.deltaX))return;const E=M=>{p.current=M,f(h.current),h.current=M>0?w(()=>{p.current=0,h.current=void 0},300):void 0};if(e===rt.NONE){if(Math.abs(_.deltaX)<=1.2*Math.abs(p.current)){E(_.deltaX);return}if(!n(-_.deltaX))return;if(c.current+=_.deltaX,v(),Math.abs(c.current)>30)c.current=0,E(0),y.current=Date.now(),o();else{const M=c.current;d.current=w(()=>{d.current=void 0,M===c.current&&(c.current=0)},i)}}else if(e===rt.SWIPE){let M=u.current-_.deltaX;if(M=Math.min(Math.abs(M),r)*Math.sign(M),u.current=M,a(M),x(),Math.abs(M)>.2*r){E(_.deltaX),l(M,Date.now()-y.current);return}m.current=w(()=>C(M),2*i)}else E(_.deltaX)});b.useEffect(()=>t(wm,k),[t,k])}const jv=Sm("container"),c2=b.createContext(null),Jn=Qn("useController","ControllerContext",c2);function SL({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:u,closeOnPullDown:c,preventDefaultWheelX:d,preventDefaultWheelY:m}=o,[p,h]=b.useState(),y=Or(),w=oL(),[f,v]=b.useState(rt.NONE),x=b.useRef(0),S=b.useRef(0),C=b.useRef(1),{registerSensors:k,subscribeSensors:_}=vL(),{subscribe:E,publish:M}=dc(),j=Qs(),D=Qs(),O=Qs(),{containerRef:$,setContainerRef:R,containerRect:L}=l2(),N=Cp(bL({preventDefaultWheelX:d,preventDefaultWheelY:m}),R),F=b.useRef(null),P=Cp(F,void 0),{getOwnerDocument:I}=cc(),A=Mm(),B=Y=>(A?-1:1)*(typeof Y=="number"?Y:1),z=pe(()=>{var Y;return(Y=$.current)===null||Y===void 0?void 0:Y.focus()}),H=pe(()=>t),G=pe(()=>y),W=b.useCallback(Y=>M(Rr,Y),[M]),X=b.useCallback(Y=>M(Ar,Y),[M]),ee=b.useCallback(()=>M(Ki),[M]),fe=Y=>!(r.finite&&(B(Y)>0&&y.currentIndex===0||B(Y)<0&&y.currentIndex===y.slides.length-1)),be=Y=>{var we;x.current=Y,(we=$.current)===null||we===void 0||we.style.setProperty(xt("swipe_offset"),`${Math.round(Y)}px`)},ie=Y=>{var we,st;S.current=Y,C.current=(()=>{const ho=(()=>c&&Y>0?Y:u&&Y<0?-Y:0)();return Math.min(Math.max(Em(1-ho/60*(1-.5),2),.5),1)})(),(we=$.current)===null||we===void 0||we.style.setProperty(xt("pull_offset"),`${Math.round(Y)}px`),(st=$.current)===null||st===void 0||st.style.setProperty(xt("pull_opacity"),`${C.current}`)},{prepareAnimation:je}=Pv(F,(Y,we,st)=>{if(F.current&&L)return{keyframes:[{transform:`translate(0, ${Y.rect.y-we.y+st.y}px)`,opacity:Y.opacity},{transform:"translate(0, 0)",opacity:1}],duration:Y.duration,easing:i.easing.fade}}),Be=(Y,we)=>{if(u||c){ie(Y);let st=0;F.current&&(st=i.fade*(we?2:1),je({rect:F.current.getBoundingClientRect(),opacity:C.current,duration:st})),O(()=>{ie(0),v(rt.NONE)},st),v(rt.ANIMATION),we||ee()}},{prepareAnimation:Ve,isAnimationPlaying:oi}=Pv(F,(Y,we,st)=>{var pn;if(F.current&&L&&(!((pn=y.animation)===null||pn===void 0)&&pn.duration)){const Bt=Yl(r.spacing),ho=(Bt.percent?Bt.percent*L.width/100:Bt.pixel)||0;return{keyframes:[{transform:`translate(${B(y.globalIndex-Y.index)*(L.width+ho)+Y.rect.x-we.x+st.x}px, 0)`},{transform:"translate(0, 0)"}],duration:y.animation.duration,easing:y.animation.easing}}}),vt=pe(Y=>{var we,st;const pn=Y.offset||0,Bt=pn?i.swipe:(we=i.navigation)!==null&&we!==void 0?we:i.swipe,ho=!pn&&!oi()?i.easing.navigation:i.easing.swipe;let{direction:Ya}=Y;const qa=(st=Y.count)!==null&&st!==void 0?st:1;let vc=rt.ANIMATION,hn=Bt*qa;if(!Ya){const mo=L==null?void 0:L.width,Um=Y.duration||0,xc=mo?Bt/mo*Math.abs(pn):Bt;qa!==0?(Um<xc?hn=hn/xc*Math.max(Um,xc/5):mo&&(hn=Bt/mo*(mo-Math.abs(pn))),Ya=B(pn)>0?Rr:Ar):hn=Bt/2}let yc=0;Ya===Rr?fe(B(1))?yc=-qa:(vc=rt.NONE,hn=Bt):Ya===Ar&&(fe(B(-1))?yc=qa:(vc=rt.NONE,hn=Bt)),hn=Math.round(hn),D(()=>{be(0),v(rt.NONE)},hn),F.current&&Ve({rect:F.current.getBoundingClientRect(),index:y.globalIndex}),v(vc),M(kv,{type:"swipe",increment:yc,duration:hn,easing:ho})});b.useEffect(()=>{var Y,we;!((Y=y.animation)===null||Y===void 0)&&Y.increment&&(!((we=y.animation)===null||we===void 0)&&we.duration)&&j(()=>w({type:"swipe",increment:0}),y.animation.duration)},[y.animation,w,j]);const fo=[_,fe,(L==null?void 0:L.width)||0,i.swipe,()=>v(rt.SWIPE),Y=>be(Y),(Y,we)=>vt({offset:Y,duration:we,count:1}),Y=>vt({offset:Y,count:0})],Ga=[()=>{c&&v(rt.PULL)},Y=>ie(Y),Y=>Be(Y),Y=>Be(Y,!0)];xL(o,...fo,u,c,...Ga,ee),wL(f,...fo);const po=pe(()=>{o.focus&&I().querySelector(`.${ae(vm)} .${ae(jv())}`)&&z()});b.useEffect(po,[po]);const Hm=pe(()=>{var Y;(Y=a.view)===null||Y===void 0||Y.call(a,{index:y.currentIndex})});b.useEffect(Hm,[y.globalIndex,Hm]),b.useEffect(()=>_m(E(Rr,Y=>vt({direction:Rr,...Y})),E(Ar,Y=>vt({direction:Ar,...Y})),E(kv,Y=>w(Y))),[E,vt,w]);const r_=b.useMemo(()=>({prev:W,next:X,close:ee,focus:z,slideRect:L?GD(L,r.padding):{width:0,height:0},containerRect:L||{width:0,height:0},subscribeSensors:_,containerRef:$,setCarouselRef:P,toolbarWidth:p,setToolbarWidth:h}),[W,X,ee,z,_,L,$,P,p,h,r.padding]);return b.useImperativeHandle(o.ref,()=>({prev:W,next:X,close:ee,focus:z,getLightboxProps:H,getLightboxState:G}),[W,X,ee,z,H,G]),b.createElement("div",{ref:N,className:kn(ae(jv()),ae(ym)),style:{...f===rt.SWIPE?{[xt("swipe_offset")]:`${Math.round(x.current)}px`}:null,...f===rt.PULL?{[xt("pull_offset")]:`${Math.round(S.current)}px`,[xt("pull_opacity")]:`${C.current}`}:null,...o.touchAction!=="none"?{[xt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...k},L&&b.createElement(c2.Provider,{value:r_},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const _L=Pr(NS,SL);function Mr(e){return Wa(FS,e)}function $v(e){return Wa(xm,e)}function CL({slide:e,offset:t}){const n=b.useRef(null),{currentIndex:r,slides:i}=Or(),{slideRect:o,focus:a}=Jn(),{render:l,carousel:{imageFit:s,imageProps:u},on:{click:c},styles:{slide:d},labels:m}=Xt(),{getOwnerDocument:p}=cc(),h=t!==0;b.useEffect(()=>{var w;h&&(!((w=n.current)===null||w===void 0)&&w.contains(p().activeElement))&&a()},[h,a,p]);const y=()=>{var w,f,v,x;let S=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!S&&co(e)&&(S=b.createElement(ql,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:u,onClick:h?void 0:()=>c==null?void 0:c({index:r})})),S?b.createElement(b.Fragment,null,(f=l.slideHeader)===null||f===void 0?void 0:f.call(l,{slide:e}),((v=l.slideContainer)!==null&&v!==void 0?v:({children:C})=>C)({slide:e,children:S}),(x=l.slideFooter)===null||x===void 0?void 0:x.call(l,{slide:e})):null};return b.createElement("div",{ref:n,className:kn(ae($v()),!h&&ae($v("current")),ae(ym)),...QD(h),style:d,role:"group","aria-roledescription":Zi(m,"Slide"),"aria-label":WD(m,i,r+t)},y())}function EL(){const e=Xt().styles.slide;return b.createElement("div",{className:ae(xm),style:e})}function kL({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Or(),{setCarouselRef:o}=Jn(),{autoPlaying:a,focusWithin:l}=t2(),s=Yl(e.spacing),u=Yl(e.padding),c=KD(e,n,1),d=[];if(ZS(n))for(let m=r-c;m<=r+c;m+=1){const p=QS(n,m),h=i-r+m,y=e.finite&&(m<0||m>n.length-1);d.push(y?{key:h}:{key:[`${h}`,qD(p)].filter(Boolean).join("|"),offset:m-r,slide:p})}return b.createElement("div",{ref:o,className:kn(ae(Mr()),d.length>0&&ae(Mr("with_slides"))),style:{[`${xt(Mr("slides_count"))}`]:d.length,[`${xt(Mr("spacing_px"))}`]:s.pixel||0,[`${xt(Mr("spacing_percent"))}`]:s.percent||0,[`${xt(Mr("padding_px"))}`]:u.pixel||0,[`${xt(Mr("padding_percent"))}`]:u.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":Zi(t,"Carousel"),"aria-label":Zi(t,"Photo gallery")},d.map(({key:m,slide:p,offset:h})=>p?b.createElement(CL,{key:m,slide:p,offset:h}):b.createElement(EL,{key:m})))}const TL=Pr(FS,kL);function d2(){const{carousel:e}=Xt(),{slides:t,currentIndex:n}=Or(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function PL(e){var t;const n=Mm(),{publish:r}=dc(),{animation:i}=Xt(),{prevDisabled:o,nextDisabled:a}=d2(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=Mv(()=>r(Rr),l),u=Mv(()=>r(Ar),l),c=pe(d=>{switch(d.key){case BD:r(Ki);break;case VD:(n?a:o)||(n?u:s)();break;case HD:(n?o:a)||(n?s:u)();break}});b.useEffect(()=>e(bm,c),[e,c])}function Iv({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return b.createElement(Pm,{label:e,icon:t,renderIcon:n,className:ae(`navigation_${r}`),disabled:o,onClick:i,style:a,...gL(Jn().focus,o)})}function OL({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=Jn(),{prevDisabled:s,nextDisabled:u}=d2();return PL(l),b.createElement(b.Fragment,null,e?e():b.createElement(Iv,{label:"Previous",action:Rr,icon:dL,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():b.createElement(Iv,{label:"Next",action:Ar,icon:fL,renderIcon:r,style:i.navigationNext,disabled:u,onClick:a}))}const ML=Pr($D,OL),Dv=ae(FD),jL=ae(BS);function $L(e){return"style"in e}function Lv(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(uc(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function IL({noScroll:{disabled:e},children:t}){const n=Mm(),{getOwnerDocument:r,getOwnerWindow:i}=cc();return b.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),u=Math.round(a.innerWidth-s.clientWidth);if(u>0){o.push(Lv(l,u,n));const c=l.getElementsByTagName("*");for(let d=0;d<c.length;d+=1){const m=c[d];$L(m)&&a.getComputedStyle(m).getPropertyValue("position")==="fixed"&&!m.classList.contains(jL)&&o.push(Lv(m,u,n))}}return l.classList.add(Dv),()=>{l.classList.remove(Dv),o.forEach(c=>c())}},[n,e,r,i]),b.createElement(b.Fragment,null,t)}const DL=Pr(ID,IL);function Rv(e){return Wa(vm,e)}function Av(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function LL({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,u]=b.useState(!1),[c,d]=b.useState(!1),m=b.useRef([]),p=b.useRef(null),{setTimeout:h}=fc(),{subscribe:y}=dc(),f=Om()?0:t.fade;b.useEffect(()=>(u(!0),()=>{u(!1),d(!1)}),[]);const v=pe(()=>{m.current.forEach(k=>k()),m.current=[]}),x=pe(()=>{var k;d(!1),v(),(k=i.exiting)===null||k===void 0||k.call(i),h(()=>{var _;(_=i.exited)===null||_===void 0||_.call(i),a()},f)});b.useEffect(()=>y(Ki,x),[y,x]);const S=pe(k=>{var _,E,M;JD(k),d(!0),(_=i.entering)===null||_===void 0||_.call(i);const j=(M=(E=k.parentNode)===null||E===void 0?void 0:E.children)!==null&&M!==void 0?M:[];for(let D=0;D<j.length;D+=1){const O=j[D];["TEMPLATE","SCRIPT","STYLE"].indexOf(O.tagName)===-1&&O!==k&&(m.current.push(Av(O,"inert","")),m.current.push(Av(O,"aria-hidden","true")))}m.current.push(()=>{var D,O;(O=(D=p.current)===null||D===void 0?void 0:D.focus)===null||O===void 0||O.call(D)}),h(()=>{var D;(D=i.entered)===null||D===void 0||D.call(i)},f)}),C=b.useCallback(k=>{k?S(k):v()},[S,v]);return s?xu.createPortal(b.createElement(yL,{ref:C,className:kn(r,ae(Rv()),ae(BS),c&&ae(Rv("open"))),"aria-modal":!0,role:"dialog","aria-label":Zi(l,"Lightbox"),style:{...t.fade!==_p.animation.fade?{[xt("fade_animation_duration")]:`${f}ms`}:null,...t.easing.fade!==_p.animation.easing.fade?{[xt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:k=>{p.current||(p.current=k.relatedTarget)}},e),o.root||document.body):null}const RL=Pr(vm,LL);function AL({children:e}){return b.createElement(b.Fragment,null,e)}const FL=Pr(DD,AL);function NL(e){return Wa(zS,e)}function zL({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=Jn(),{setContainerRef:a,containerRect:l}=l2();Pn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():b.createElement(Pm,{key:Ki,label:"Close",icon:cL,renderIcon:n,onClick:i});return b.createElement("div",{ref:a,style:r.toolbar,className:ae(NL())},e==null?void 0:e.map(u=>u===Ki?s():u))}const BL=Pr(zS,zL);function f2(e,t){var n;return b.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>f2(r,t)))}function VL(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function HL({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:u,...c}){const{animation:d,carousel:m,render:p,toolbar:h,controller:y,noScroll:w,on:f,slides:v,index:x,plugins:S,...C}=_p,{config:k,augmentation:_}=eL([He(RL,[He(DL,[He(_L,[He(TL),He(BL),He(ML)])])])],l||S),E=_({animation:VL(d,t),carousel:{...m,...e},render:{...p,...n},toolbar:{...h,...r},controller:{...y,...i},noScroll:{...w,...o},on:{...f,...a},...C,...c});return E.open?b.createElement(iL,{...E},b.createElement(sL,{slides:s||v,index:uc(u||x)},b.createElement(lL,null,b.createElement(rL,null,b.createElement(tL,null,f2(He(FL,k),E)))))):null}const UL={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function WL(e){return Math.min(Math.max(e,Number.EPSILON),1)}function p2(e){const{minZoom:t,...n}={...UL,...e};return{minZoom:WL(t),...n}}function GL(e,t,n,r){const i=b.useRef(void 0),o=b.useRef(void 0),{zoom:a}=Xt().animation,l=Om(),s=pe(()=>{var u,c,d;if((u=i.current)===null||u===void 0||u.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(d=(c=r.current).animate)===null||d===void 0?void 0:d.call(c,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(m){console.error(m)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Pn(s,[e,t,n,s]),b.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function YL(e,t){const{on:n}=Xt(),r=pe(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});b.useEffect(r,[e,r])}function pc(){const{zoom:e}=Xt();return p2(e)}function qL(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Or(),{imageFit:l}=Xt().carousel,{maxZoomPixelRatio:s}=pc();if(e&&a){const c={...a,...t};if(co(c)){const d=km(c,l),m=Math.max(...(((n=c.srcSet)===null||n===void 0?void 0:n.map(h=>h.width))||[]).concat(c.width?[c.width]:[])),p=Math.max(...(((r=c.srcSet)===null||r===void 0?void 0:r.map(h=>h.height))||[]).concat(c.height?[c.height]:[]));m>0&&p>0&&e.width>0&&e.height>0&&(o=d?{width:Math.round(Math.min(m,e.width/e.height*p)),height:Math.round(Math.min(p,e.height/e.width*m))}:{width:m,height:p},o={width:o.width*s,height:o.height*s},i=d?{width:Math.min(e.width,o.width,m),height:Math.min(e.height,o.height,p)}:{width:Math.round(Math.min(e.width,e.height/p*m,m)),height:Math.round(Math.min(e.height,e.width/m*p,p))})}}const u=i.width?Math.max(Em(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:u}}function Fv(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Nv(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function XL(e,t,n,r,i,o,a,l,s){const u=b.useRef([]),c=b.useRef(0),d=b.useRef(void 0),{globalIndex:m}=Or(),{getOwnerWindow:p}=cc(),{containerRef:h,subscribeSensors:y}=Jn(),{keyboardMoveDistance:w,zoomInMultiplier:f,wheelZoomDistanceFactor:v,scrollToZoom:x,doubleTapDelay:S,doubleClickDelay:C,doubleClickMaxStops:k,pinchZoomDistanceFactor:_,pinchZoomV4:E}=pc(),M=b.useCallback(P=>{if(h.current){const{pageX:I,pageY:A}=P,{scrollX:B,scrollY:z}=p(),{left:H,top:G,width:W,height:X}=h.current.getBoundingClientRect();return[I-H-B-W/2,A-G-z-X/2]}return[]},[h,p]),j=pe(P=>{const{key:I,metaKey:A,ctrlKey:B}=P,z=A||B,H=()=>{P.preventDefault(),P.stopPropagation()};if(e>1){const G=(W,X)=>{H(),l(W,X)};I==="ArrowDown"?G(0,w):I==="ArrowUp"?G(0,-w):I==="ArrowLeft"?G(-w,0):I==="ArrowRight"&&G(w,0)}I==="+"||z&&I==="="?(H(),i()):I==="-"||z&&I==="_"?(H(),o()):z&&I==="0"&&(H(),a(1))}),D=pe(P=>{if((P.ctrlKey||x)&&Math.abs(P.deltaY)>Math.abs(P.deltaX)){P.stopPropagation(),a(Nv(e,-P.deltaY,v),!0,...M(P));return}e>1&&(P.stopPropagation(),x||l(P.deltaX,P.deltaY))}),O=b.useCallback(P=>{const I=u.current;I.splice(0,I.length,...I.filter(A=>A.pointerId!==P.pointerId))},[]),$=b.useCallback(P=>{O(P),P.persist(),u.current.push(P)},[O]),R=pe(P=>{var I;const A=u.current;if(P.pointerType==="mouse"&&P.buttons>1||!(!((I=s==null?void 0:s.current)===null||I===void 0)&&I.contains(P.target)))return;e>1&&P.stopPropagation();const{timeStamp:B}=P;if(A.length===0&&B-c.current<(P.pointerType==="touch"?S:C)){c.current=0;const z=e>=1?e!==n?e*Math.max(n**(1/k),f):1:e!==t?e/Math.max(t**(-1/k),f):1;a(z,!1,...M(P))}else c.current=B;if($(P),A.length===2){const z=Fv(A[0],A[1]);d.current={previousDistance:z,initialDistance:Math.max(z,1),initialZoom:e}}}),L=pe(P=>{const I=u.current,A=I.find(B=>B.pointerId===P.pointerId);if(I.length===2&&d.current){P.stopPropagation(),$(P);const B=Fv(I[0],I[1]),z=E?d.current.initialZoom/d.current.initialDistance*B:Nv(e,B-d.current.previousDistance,_);a(z,!0,...I.map(H=>M(H)).reduce((H,G)=>G.map((W,X)=>H[X]+W/2))),d.current.previousDistance=B;return}e>1&&(P.stopPropagation(),A&&(I.length===1&&l((A.clientX-P.clientX)/e,(A.clientY-P.clientY)/e),$(P)))}),N=b.useCallback(P=>{const I=u.current;I.length===2&&I.find(A=>A.pointerId===P.pointerId)&&(d.current=void 0),O(P)},[O]),F=b.useCallback(()=>{const P=u.current;P.splice(0,P.length),c.current=0,d.current=void 0},[]);u2(y,R,L,N,r),b.useEffect(F,[m,F]),b.useEffect(()=>r?()=>{}:_m(F,y(bm,j),y(wm,D)),[r,y,F,j,D])}function KL(e,t,n){const[r,i]=b.useState(1),[o,a]=b.useState(0),[l,s]=b.useState(0),u=GL(r,o,l,n),{currentSlide:c,globalIndex:d}=Or(),{containerRect:m,slideRect:p}=Jn(),{minZoom:h,zoomInMultiplier:y}=pc(),w=c&&co(c)?c.src:void 0,f=!w||!(n!=null&&n.current);Pn(()=>{i(1),a(0),s(0)},[d,w]);const v=b.useCallback((_,E,M)=>{const j=M||r,D=o-(_||0),O=l-(E||0),$=(e.width*j-p.width)/2/j,R=(e.height*j-p.height)/2/j;a(Math.min(Math.abs(D),Math.max($,0))*Math.sign(D)),s(Math.min(Math.abs(O),Math.max(R,0))*Math.sign(O))},[r,o,l,p,e.width,e.height]),x=b.useCallback((_,E,M,j)=>{const D=Em(_+.01<t?_-.01>h?_:h:t,5);E||u(),v(M?M*(1/r-1/D):0,j?j*(1/r-1/D):0,D),i(D)},[r,h,t,v,u]),S=pe(()=>{r>1&&(r>t&&x(t,!0),v())});Pn(S,[m.width,m.height,S]);const C=b.useCallback(()=>{const _=r*y;x(r<1&&_>1?1:_)},[r,y,x]),k=b.useCallback(()=>{const _=r/y;x(r>1&&_<1?1:_)},[r,y,x]);return{zoom:r,offsetX:o,offsetY:l,disabled:f,changeOffsets:v,changeZoom:x,zoomIn:C,zoomOut:k}}const h2=b.createContext(null),jm=Qn("useZoom","ZoomControllerContext",h2);function ZL({children:e}){const[t,n]=b.useState(),{slideRect:r}=Jn(),{ref:i,minZoom:o}=pc(),{imageRect:a,maxZoom:l}=qL(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:u,offsetY:c,disabled:d,changeZoom:m,changeOffsets:p,zoomIn:h,zoomOut:y}=KL(a,l,t==null?void 0:t.zoomWrapperRef);YL(s,d),XL(s,o,l,d,h,y,m,p,t==null?void 0:t.zoomWrapperRef);const w=b.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:u,offsetY:c,disabled:d,zoomIn:h,zoomOut:y,changeZoom:m}),[s,o,l,u,c,d,h,y,m]);b.useImperativeHandle(i,()=>w,[w]);const f=b.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return b.createElement(h2.Provider,{value:f},e)}const QL=ii("ZoomIn",b.createElement(b.Fragment,null,b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),JL=ii("ZoomOut",b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),zv=b.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=b.useRef(!1),o=b.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:u,zoomOut:c,disabled:d}=jm(),{render:m}=Xt(),p=d||(t?a>=s:a<=l);return b.useEffect(()=>{p&&i.current&&o.current&&n(),p||(i.current=!0)},[p,n]),b.createElement(Pm,{ref:r,disabled:p,label:t?"Zoom in":"Zoom out",icon:t?QL:JL,renderIcon:t?m.iconZoomIn:m.iconZoomOut,onClick:t?u:c,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function eR(){const e=b.useRef(null),t=b.useRef(null),{focus:n}=Jn(),r=b.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=b.useCallback(()=>r(e),[r]),o=b.useCallback(()=>r(t),[r]);return b.createElement(b.Fragment,null,b.createElement(zv,{zoomIn:!0,ref:e,onLoseFocus:o}),b.createElement(zv,{ref:t,onLoseFocus:i}))}function tR(){const{render:e}=Xt(),t=jm();return e.buttonZoom?b.createElement(b.Fragment,null,e.buttonZoom(t)):b.createElement(eR,null)}function nR(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function rR({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(XS)}}function iR(e){var t,n;const[{current:r,preload:i},o]=b.useReducer(rR,{}),{slide:a,rect:l,imageFit:s,render:u,interactive:c}=e,d=a.srcSet.sort((C,k)=>C.width-k.width),m=(t=a.width)!==null&&t!==void 0?t:d[d.length-1].width,p=(n=a.height)!==null&&n!==void 0?n:d[d.length-1].height,h=km(a,s),y=Math.max(...d.map(C=>C.width)),w=Math.min((h?Math.max:Math.min)(l.width,m*(l.height/p)),y),f=YD(),v=pe(()=>{var C;const k=(C=d.find(_=>_.width>=w*f))!==null&&C!==void 0?C:d[d.length-1];(!r||d.findIndex(_=>_.src===r)<d.findIndex(_=>_===k))&&o({type:"fetch",source:k.src})});Pn(v,[l.width,l.height,f,v]);const x=pe(C=>o({type:"done",source:C})),S={WebkitTransform:c?"initial":"translateZ(0)"};return h||Object.assign(S,l.width/l.height<m/p?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),b.createElement(b.Fragment,null,i&&i!==r&&b.createElement(ql,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...S},onLoad:()=>x(i),render:{...u,iconLoading:()=>null,iconError:()=>null}}),r&&b.createElement(ql,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:S}))}function oR({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=b.useState(),l=b.useRef(null),{zoom:s,maxZoom:u,offsetX:c,offsetY:d,setZoomWrapper:m}=jm(),p=s>1,{carousel:h,on:y}=Xt(),{currentIndex:w}=Or();Pn(()=>n===0?(m({zoomWrapperRef:l,imageDimensions:o}),()=>m(void 0)):()=>{},[n,o,m]);let f=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:u});if(!f&&co(t)){const v={slide:t,offset:n,rect:r,render:e,imageFit:h.imageFit,imageProps:h.imageProps,onClick:n===0?()=>{var x;return(x=y.click)===null||x===void 0?void 0:x.call(y,{index:w})}:void 0};f=nR(t)?b.createElement(iR,{...v,slide:t,interactive:p,rect:n===0?{width:r.width*s,height:r.height*s}:r}):b.createElement(ql,{onLoad:x=>a({width:x.naturalWidth,height:x.naturalHeight}),...v})}return f?b.createElement("div",{ref:l,className:kn(ae(AD),ae(ym),ae(VS),p&&ae(ND)),style:n===0?{transform:`scale(${s}) translateX(${c}px) translateY(${d}px)`}:void 0},f):null}const aR=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=p2(n);return{zoom:l,toolbar:XD(r,Ev,b.createElement(tR,null)),render:{...i,slide:s=>{var u;return co(s.slide)?b.createElement(oR,{render:i,...s}):(u=i.slide)===null||u===void 0?void 0:u.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Pr(Ev,ZL))};var m2={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",u="day",c="week",d="month",m="quarter",p="year",h="date",y="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(R){var L=["th","st","nd","rd"],N=R%100;return"["+R+(L[(N-20)%10]||L[N]||L[0])+"]"}},x=function(R,L,N){var F=String(R);return!F||F.length>=L?R:""+Array(L+1-F.length).join(N)+R},S={s:x,z:function(R){var L=-R.utcOffset(),N=Math.abs(L),F=Math.floor(N/60),P=N%60;return(L<=0?"+":"-")+x(F,2,"0")+":"+x(P,2,"0")},m:function R(L,N){if(L.date()<N.date())return-R(N,L);var F=12*(N.year()-L.year())+(N.month()-L.month()),P=L.clone().add(F,d),I=N-P<0,A=L.clone().add(F+(I?-1:1),d);return+(-(F+(N-P)/(I?P-A:A-P))||0)},a:function(R){return R<0?Math.ceil(R)||0:Math.floor(R)},p:function(R){return{M:d,y:p,w:c,d:u,D:h,h:s,m:l,s:a,ms:o,Q:m}[R]||String(R||"").toLowerCase().replace(/s$/,"")},u:function(R){return R===void 0}},C="en",k={};k[C]=v;var _="$isDayjsObject",E=function(R){return R instanceof O||!(!R||!R[_])},M=function R(L,N,F){var P;if(!L)return C;if(typeof L=="string"){var I=L.toLowerCase();k[I]&&(P=I),N&&(k[I]=N,P=I);var A=L.split("-");if(!P&&A.length>1)return R(A[0])}else{var B=L.name;k[B]=L,P=B}return!F&&P&&(C=P),P||!F&&C},j=function(R,L){if(E(R))return R.clone();var N=typeof L=="object"?L:{};return N.date=R,N.args=arguments,new O(N)},D=S;D.l=M,D.i=E,D.w=function(R,L){return j(R,{locale:L.$L,utc:L.$u,x:L.$x,$offset:L.$offset})};var O=function(){function R(N){this.$L=M(N.locale,null,!0),this.parse(N),this.$x=this.$x||N.x||{},this[_]=!0}var L=R.prototype;return L.parse=function(N){this.$d=function(F){var P=F.date,I=F.utc;if(P===null)return new Date(NaN);if(D.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var A=P.match(w);if(A){var B=A[2]-1||0,z=(A[7]||"0").substring(0,3);return I?new Date(Date.UTC(A[1],B,A[3]||1,A[4]||0,A[5]||0,A[6]||0,z)):new Date(A[1],B,A[3]||1,A[4]||0,A[5]||0,A[6]||0,z)}}return new Date(P)}(N),this.init()},L.init=function(){var N=this.$d;this.$y=N.getFullYear(),this.$M=N.getMonth(),this.$D=N.getDate(),this.$W=N.getDay(),this.$H=N.getHours(),this.$m=N.getMinutes(),this.$s=N.getSeconds(),this.$ms=N.getMilliseconds()},L.$utils=function(){return D},L.isValid=function(){return this.$d.toString()!==y},L.isSame=function(N,F){var P=j(N);return this.startOf(F)<=P&&P<=this.endOf(F)},L.isAfter=function(N,F){return j(N)<this.startOf(F)},L.isBefore=function(N,F){return this.endOf(F)<j(N)},L.$g=function(N,F,P){return D.u(N)?this[F]:this.set(P,N)},L.unix=function(){return Math.floor(this.valueOf()/1e3)},L.valueOf=function(){return this.$d.getTime()},L.startOf=function(N,F){var P=this,I=!!D.u(F)||F,A=D.p(N),B=function(be,ie){var je=D.w(P.$u?Date.UTC(P.$y,ie,be):new Date(P.$y,ie,be),P);return I?je:je.endOf(u)},z=function(be,ie){return D.w(P.toDate()[be].apply(P.toDate("s"),(I?[0,0,0,0]:[23,59,59,999]).slice(ie)),P)},H=this.$W,G=this.$M,W=this.$D,X="set"+(this.$u?"UTC":"");switch(A){case p:return I?B(1,0):B(31,11);case d:return I?B(1,G):B(0,G+1);case c:var ee=this.$locale().weekStart||0,fe=(H<ee?H+7:H)-ee;return B(I?W-fe:W+(6-fe),G);case u:case h:return z(X+"Hours",0);case s:return z(X+"Minutes",1);case l:return z(X+"Seconds",2);case a:return z(X+"Milliseconds",3);default:return this.clone()}},L.endOf=function(N){return this.startOf(N,!1)},L.$set=function(N,F){var P,I=D.p(N),A="set"+(this.$u?"UTC":""),B=(P={},P[u]=A+"Date",P[h]=A+"Date",P[d]=A+"Month",P[p]=A+"FullYear",P[s]=A+"Hours",P[l]=A+"Minutes",P[a]=A+"Seconds",P[o]=A+"Milliseconds",P)[I],z=I===u?this.$D+(F-this.$W):F;if(I===d||I===p){var H=this.clone().set(h,1);H.$d[B](z),H.init(),this.$d=H.set(h,Math.min(this.$D,H.daysInMonth())).$d}else B&&this.$d[B](z);return this.init(),this},L.set=function(N,F){return this.clone().$set(N,F)},L.get=function(N){return this[D.p(N)]()},L.add=function(N,F){var P,I=this;N=Number(N);var A=D.p(F),B=function(G){var W=j(I);return D.w(W.date(W.date()+Math.round(G*N)),I)};if(A===d)return this.set(d,this.$M+N);if(A===p)return this.set(p,this.$y+N);if(A===u)return B(1);if(A===c)return B(7);var z=(P={},P[l]=r,P[s]=i,P[a]=n,P)[A]||1,H=this.$d.getTime()+N*z;return D.w(H,this)},L.subtract=function(N,F){return this.add(-1*N,F)},L.format=function(N){var F=this,P=this.$locale();if(!this.isValid())return P.invalidDate||y;var I=N||"YYYY-MM-DDTHH:mm:ssZ",A=D.z(this),B=this.$H,z=this.$m,H=this.$M,G=P.weekdays,W=P.months,X=P.meridiem,ee=function(ie,je,Be,Ve){return ie&&(ie[je]||ie(F,I))||Be[je].slice(0,Ve)},fe=function(ie){return D.s(B%12||12,ie,"0")},be=X||function(ie,je,Be){var Ve=ie<12?"AM":"PM";return Be?Ve.toLowerCase():Ve};return I.replace(f,function(ie,je){return je||function(Be){switch(Be){case"YY":return String(F.$y).slice(-2);case"YYYY":return D.s(F.$y,4,"0");case"M":return H+1;case"MM":return D.s(H+1,2,"0");case"MMM":return ee(P.monthsShort,H,W,3);case"MMMM":return ee(W,H);case"D":return F.$D;case"DD":return D.s(F.$D,2,"0");case"d":return String(F.$W);case"dd":return ee(P.weekdaysMin,F.$W,G,2);case"ddd":return ee(P.weekdaysShort,F.$W,G,3);case"dddd":return G[F.$W];case"H":return String(B);case"HH":return D.s(B,2,"0");case"h":return fe(1);case"hh":return fe(2);case"a":return be(B,z,!0);case"A":return be(B,z,!1);case"m":return String(z);case"mm":return D.s(z,2,"0");case"s":return String(F.$s);case"ss":return D.s(F.$s,2,"0");case"SSS":return D.s(F.$ms,3,"0");case"Z":return A}return null}(ie)||A.replace(":","")})},L.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},L.diff=function(N,F,P){var I,A=this,B=D.p(F),z=j(N),H=(z.utcOffset()-this.utcOffset())*r,G=this-z,W=function(){return D.m(A,z)};switch(B){case p:I=W()/12;break;case d:I=W();break;case m:I=W()/3;break;case c:I=(G-H)/6048e5;break;case u:I=(G-H)/864e5;break;case s:I=G/i;break;case l:I=G/r;break;case a:I=G/n;break;default:I=G}return P?I:D.a(I)},L.daysInMonth=function(){return this.endOf(d).$D},L.$locale=function(){return k[this.$L]},L.locale=function(N,F){if(!N)return this.$L;var P=this.clone(),I=M(N,F,!0);return I&&(P.$L=I),P},L.clone=function(){return D.w(this.$d,this)},L.toDate=function(){return new Date(this.valueOf())},L.toJSON=function(){return this.isValid()?this.toISOString():null},L.toISOString=function(){return this.$d.toISOString()},L.toString=function(){return this.$d.toUTCString()},R}(),$=O.prototype;return j.prototype=$,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",u],["$M",d],["$y",p],["$D",h]].forEach(function(R){$[R[1]]=function(L){return this.$g(L,R[0],R[1])}}),j.extend=function(R,L){return R.$i||(R(L,O,j),R.$i=!0),j},j.locale=M,j.isDayjs=E,j.unix=function(R){return j(1e3*R)},j.en=k[C],j.Ls=k,j.p={},j})})(m2);var sR=m2.exports;const Bv=Dp(sR),lR=()=>{var E;const{id:e}=U1(),[t,n]=b.useState([]),[r,i]=b.useState(1),[o,a]=b.useState("description"),[l,s]=b.useState(null),[u,c]=b.useState(!1),[d,m]=b.useState(0);console.log("products",t);const[p,h]=b.useState(!0),y=t.find(M=>M.id===Number(e)),w=y?Bv().diff(Bv(y.createdAt),"day")<7:!1;b.useEffect(()=>{(async()=>{try{h(!0);const D=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[id][$eq]=${e}&populate=*`)).json();n(D.data)}catch(j){console.error("Error fetching products:",j)}finally{h(!1)}})()},[e]),console.log(y),b.useEffect(()=>{var M,j;y&&y.images&&s((j=(M=y.images)==null?void 0:M[0])==null?void 0:j.url)},[y]);const f=((y==null?void 0:y.images)??[]).map(M=>({src:M.url})),v=()=>{const M=y.images.findIndex(j=>j.url===l);m(M>=0?M:0),c(!0)},x=Kn(),C=Dt(M=>M.favorites.items).some(M=>M.id===(y==null?void 0:y.id)),k=()=>{x(Fa({...y,quantity:r})),J.success(`${y.name} додано в кошик!`)},_=(M,j)=>{j.stopPropagation(),x(Ua(M)),C?J.warning(`${M.name} видалено з обраного`):J.info(`${M.name} додано в обране`)};return p?g.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:g.jsx(qu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):y?g.jsxs(_v,{children:[" ",g.jsx(oo,{autoClose:1500}),g.jsxs(aD,{children:[g.jsx(Me,{to:"/",children:"Головна"})," / ",g.jsx(Me,{to:"/catalog",children:"Каталог"})," /"," ",y.name]}),g.jsxs(sD,{children:[g.jsxs(lD,{children:[g.jsx(uD,{src:l,alt:y.name,onClick:v}),g.jsx(cD,{children:(y.images??[]).map(M=>{const j=M.url;return g.jsx(dD,{src:j,onClick:()=>s(j),style:{cursor:"pointer",opacity:l===j?1:.4}},M.id)})})]}),g.jsx(HL,{open:u,close:()=>c(!1),index:d,slides:f,controller:{closeOnBackdropClick:!0},on:{view:({index:M})=>{var j,D;m(M),(D=(j=y==null?void 0:y.images)==null?void 0:j[M])!=null&&D.url&&s(y.images[M].url)}},plugins:[aR],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),g.jsxs(fD,{children:[g.jsx(pD,{children:y.name}),g.jsx(hD,{children:w&&g.jsx(mD,{children:"● Новий товар"})}),g.jsxs(gD,{children:[g.jsx(vD,{children:g.jsxs(yD,{children:[y.price.toLocaleString()," грн"]})}),g.jsxs(xD,{children:[g.jsxs(bD,{children:[g.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),g.jsx("span",{children:r}),g.jsxs(jD,{$active:r>=y.stock,children:[g.jsx("button",{onClick:()=>i(Math.min(y.stock,r+1)),disabled:r>=y.stock,children:"+"}),g.jsxs(AS,{children:["Максимум: ",y.stock]})]})]}),g.jsxs(wD,{onClick:k,children:[" ",g.jsx(Ra,{size:25}),g.jsx("span",{children:"В КОШИК"})]}),g.jsxs(OD,{$active:C,onClick:M=>_(y,M),children:[g.jsxs(MD,{$active:C,children:[" ",g.jsx("use",{href:`${Tn}#icon-heart`})]}),g.jsx("span",{children:"В ОБРАНЕ"})]})]})]}),g.jsxs(CD,{children:[g.jsxs("p",{children:[g.jsx("strong",{children:"Ваше місто:"})," Київ"]}),g.jsx("p",{children:"🚚 Доставка по Україні (Розрахувати вартість)"})]})]})]}),g.jsxs(ED,{children:[g.jsxs(kD,{children:[g.jsx(Cv,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),g.jsx(Cv,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"})]}),g.jsxs(TD,{children:[o==="description"&&g.jsx(PD,{children:y.description}),o==="attributes"&&g.jsx(SD,{children:(E=y.attributes)!=null&&E.length?y.attributes.map(M=>g.jsxs(_D,{children:[g.jsx("span",{children:M.label}),g.jsx("b",{children:M.value})]},M.id)):g.jsx("p",{children:"Характеристики відсутні"})})]})]})]}):g.jsx(_v,{children:"Товар не знайдено"})},uR=T.div`
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
  
  }

  margin: 0 auto;

  
`,cR=T.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,dR=T.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,fR=T.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,pR=T.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,hR=T.div`
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
    grid-template-columns: 100px 1.5fr 230px 80px; 
    align-items: center;
    gap: 20px;
  }
`,mR=T.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,gR=T.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,vR=T.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,yR=T.div`

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
`;const xR=T.div`
  text-align: center;
  width: 100px;
 
`,bR=T.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,wR=T.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,SR=T.div`

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
`,_R=T.div`
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
`,CR=T(Me)`
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
`,ER=T.button`
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
`;const kR=T.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,TR=T.div`
   
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
`;const PR=T.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,OR=T.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,MR=T.p`
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
`,$R=()=>g.jsxs(g.Fragment,{children:[g.jsx(kR,{children:"Головна / Кошик"}),g.jsxs(TR,{children:[g.jsx(PR,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),g.jsx(OR,{children:"Ваш кошик порожній"}),g.jsx(MR,{children:"Ви ще не додали жодного товару в кошик"}),g.jsx(jR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]}),IR=T.div`
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
`,DR=({item:e})=>{const t=Kn();return g.jsxs(IR,{children:[g.jsx("button",{onClick:()=>t(f4(e.id)),children:"-"}),g.jsx("span",{children:e.quantity}),g.jsx("button",{onClick:()=>t(d4({id:e.id,stock:e.stock})),disabled:e.quantity>=e.stock,children:"+"})]})},LR=()=>{const e=Kn(),[t,n]=b.useState([]),r=Dt(m=>m.cart.items),o=Dt(m=>m.cart.items).reduce((m,p)=>m+p.quantity,0),a=r.reduce((m,p)=>m+p.price*(p.quantity||1),0),l=Dt(m=>m.favorites.items),s=r.length===0,u=(m,p)=>{p.stopPropagation(),console.log(m);const h=l.some(y=>y.id===m.id);e(Ua(m)),h?J.warning(`${m.name} видалено з обраного`):J.info(`${m.name} додано в обране`)},c=m=>{n(p=>[...p,m.id]),setTimeout(()=>{e(u4(m)),n(p=>p.filter(h=>h!==m.id))},300)},d=()=>{e(Zh())};return g.jsx(g.Fragment,{children:s?g.jsx($R,{}):g.jsxs(uR,{children:[g.jsx(oo,{autoClose:1500}),g.jsxs(cR,{children:[" ",g.jsx(Me,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",g.jsx(Me,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),g.jsx(dR,{children:"Кошик"}),g.jsxs(fR,{children:[g.jsx(pR,{children:r.map((m,p)=>{var y,w;console.log(m);const h=l.some(f=>f.id===m.id);return g.jsxs(hR,{className:t.includes(m.id)?"removing":"",children:[g.jsx(mR,{src:((w=(y=m.images)==null?void 0:y[0])==null?void 0:w.url)||"/nofoto.png",alt:m.name,onError:f=>{f.currentTarget.onerror=null,f.currentTarget.src=Sa}}),g.jsx(gR,{children:g.jsx("h3",{children:m.name})}),g.jsxs(vR,{children:[g.jsx(DR,{item:{...m,quantity:m.quantity||1}}),g.jsx(xR,{children:g.jsxs("div",{className:"current-price",children:[(m.price*(m.quantity||1)).toLocaleString()," грн"]})})]}),g.jsxs(yR,{children:[g.jsx(wR,{onClick:f=>u(m,f),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:g.jsx(Wh,{size:22,fill:h?"#ff4d4f":"none",color:h?"#ff4d4f":"#999"})}),g.jsx(bR,{onClick:()=>c(m),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:g.jsx(Tb,{size:22})})]})]},`${m.id}-${p}`)})}),g.jsxs(SR,{children:[g.jsxs(_R,{children:[g.jsx("span",{children:"Всього в обраному:"}),g.jsxs("strong",{children:[o," шт."]}),g.jsx("span",{children:"На суму:"}),g.jsxs("strong",{children:[a," грн"]})]}),g.jsx(CR,{to:"/checkout",children:"Оформити замовлення"}),g.jsx(ER,{onClick:d,children:"Oчистити кошик"})]})]})]})})},RR=T.div`
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
  
  }
`,AR=T.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,FR=T.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,NR=T.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,zR=T.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,BR=T.div`
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
`;const VR=T.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,HR=T.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,UR=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
   @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,WR=T.p`
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  width: 100px;
  text-align: center;
`,GR=T.div`
  display: flex;
  gap: 16px;
`,Vv=T.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  padding: 8px;
  
`,YR=T.div`
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
`,qR=T.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,XR=T.button`
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
`,KR=T.button`
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
`,ZR=T.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,QR=T.div`
   
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
`;const JR=T.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;T.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const eA=T.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,tA=T.button`
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
`,nA=()=>g.jsxs(g.Fragment,{children:[g.jsx(ZR,{children:"Головна / Обране"}),g.jsxs(QR,{children:[g.jsx(JR,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),g.jsx(eA,{children:"Ви ще не додали жодного товару в обране"}),g.jsx(tA,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),rA=()=>{const e=Kn(),t=Dt(c=>c.favorites.items),[n,r]=b.useState([]),i=Dt(c=>c.cart.items),o=()=>{e(c4(t)),J.success("Товари додано в кошик!")};console.log(t);const a=t.reduce((c,d)=>c+d.price*(d.quantity||1),0),l=(c,d)=>{d.stopPropagation();const m=t.some(p=>p.id===c.id);r(p=>[...p,c.id]),setTimeout(()=>{e(Ua(c)),r(p=>p.filter(h=>h!==c.id))},300),m?J.warning(`${c.name} видалено з обраного`):J.info(`${c.name} додано в обране`)},s=()=>{e(nD())},u=t.length===0;return g.jsx(g.Fragment,{children:u?g.jsx(nA,{}):g.jsxs(RR,{children:[g.jsx(oo,{autoClose:1500}),g.jsxs(AR,{children:[" ",g.jsx(Me,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",g.jsx(Me,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),g.jsx(FR,{children:"Обране"}),g.jsxs(NR,{children:[g.jsx(zR,{children:t.map(c=>{var y,w;const d=i.find(f=>f.id===c.id),p=(d?d.quantity:0)>=c.stock,h=f=>{if(p){J.error(`Вибачте, доступно лише ${f.stock} шт.`);return}e(Fa(f)),J.success(`${f.name} додано в кошик!`)};return g.jsxs(BR,{className:n.includes(c.id)?"removing":"",children:[g.jsx(VR,{src:((w=(y=c.images)==null?void 0:y[0])==null?void 0:w.url)||"/nofoto.png",alt:c.name,onError:f=>{f.currentTarget.onerror=null,f.currentTarget.src="/nofoto.png"}}),g.jsx(HR,{children:c.name}),g.jsxs(UR,{children:[g.jsxs(WR,{children:[c.price," грн"]}),g.jsxs(GR,{children:[g.jsx(Vv,{onClick:()=>h(c),children:g.jsx(Ra,{size:30})}),g.jsx(Vv,{onClick:f=>l(c,f),children:g.jsx(Tb,{size:30})})]})]})]},c.id)})}),g.jsxs(YR,{children:[g.jsxs(qR,{children:[g.jsx("span",{children:"Всього в обраному:"}),g.jsxs("strong",{children:[t.length," шт."]}),g.jsx("span",{children:"На суму:"}),g.jsxs("strong",{children:[a," грн"]})]}),g.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),g.jsx(XR,{onClick:()=>o(),children:"Додати все до кошика"}),g.jsx(KR,{onClick:s,children:"Очистити обрані"})]})]})]})})},iA=T.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,oA=T.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,aA=T.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,sA=T.h1`
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
`;const lA=({title:e,children:t,breadcrumbPath:n})=>g.jsxs(iA,{children:[g.jsxs(oA,{children:["Головна / ",n]}),g.jsxs(aA,{children:[g.jsx(sA,{children:e}),t]})]}),Hv=T.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,Uv=T.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,Wv=T.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,Gv=T.ul`
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
`,uA=()=>g.jsxs(lA,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[g.jsxs(Hv,{children:[g.jsx(Uv,{children:"Способи доставки"}),g.jsx(Wv,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),g.jsxs(Gv,{children:[g.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),g.jsx("li",{children:"Самовивіз з нашого магазину"}),g.jsx("li",{children:"Укрпошта"})]})]}),g.jsxs(Hv,{children:[g.jsx(Uv,{children:"Варіанти оплати"}),g.jsx(Wv,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),g.jsxs(Gv,{children:[g.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),g.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),g.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function ei(e){"@babel/helpers - typeof";return ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ei(e)}function cA(e,t){if(ei(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ei(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function g2(e){var t=cA(e,"string");return ei(t)==="symbol"?t:String(t)}function Ao(e,t,n){return t=g2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yv(Object(n),!0).forEach(function(r){Ao(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dA(e){if(Array.isArray(e))return e}function fA(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(c){u=!0,i=c}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Ep(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v2(e,t){if(e){if(typeof e=="string")return Ep(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ep(e,t)}}function pA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bn(e,t){return dA(e)||fA(e,t)||v2(e,t)||pA()}function hA(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function er(e,t){if(e==null)return{};var n=hA(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var mA=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function gA(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,c=e.onInputChange,d=e.onMenuClose,m=e.onMenuOpen,p=e.value,h=er(e,mA),y=b.useState(l!==void 0?l:n),w=Bn(y,2),f=w[0],v=w[1],x=b.useState(s!==void 0?s:i),S=Bn(x,2),C=S[0],k=S[1],_=b.useState(p!==void 0?p:a),E=Bn(_,2),M=E[0],j=E[1],D=b.useCallback(function(P,I){typeof u=="function"&&u(P,I),j(P)},[u]),O=b.useCallback(function(P,I){var A;typeof c=="function"&&(A=c(P,I)),v(A!==void 0?A:P)},[c]),$=b.useCallback(function(){typeof m=="function"&&m(),k(!0)},[m]),R=b.useCallback(function(){typeof d=="function"&&d(),k(!1)},[d]),L=l!==void 0?l:f,N=s!==void 0?s:C,F=p!==void 0?p:M;return Z(Z({},h),{},{inputValue:L,menuIsOpen:N,onChange:D,onInputChange:O,onMenuClose:R,onMenuOpen:$,value:F})}function vA(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g2(r.key),r)}}function yA(e,t,n){return t&&qv(e.prototype,t),n&&qv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function kp(e,t){return kp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},kp(e,t)}function xA(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&kp(e,t)}function Xl(e){return Xl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Xl(e)}function bA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function wA(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function SA(e,t){if(t&&(ei(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wA(e)}function _A(e){var t=bA();return function(){var r=Xl(e),i;if(t){var o=Xl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return SA(this,i)}}function CA(e){if(Array.isArray(e))return Ep(e)}function EA(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $m(e){return CA(e)||EA(e)||v2(e)||kA()}function TA(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const PA=Math.min,OA=Math.max,Kl=Math.round,Ss=Math.floor,Zl=e=>({x:e,y:e});function MA(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function hc(){return typeof window<"u"}function y2(e){return b2(e)?(e.nodeName||"").toLowerCase():"#document"}function un(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function x2(e){var t;return(t=(b2(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function b2(e){return hc()?e instanceof Node||e instanceof un(e).Node:!1}function Tp(e){return hc()?e instanceof Element||e instanceof un(e).Element:!1}function Im(e){return hc()?e instanceof HTMLElement||e instanceof un(e).HTMLElement:!1}function Xv(e){return!hc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof un(e).ShadowRoot}function w2(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Dm(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Pd;function jA(){return Pd==null&&(Pd=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Pd}function $A(e){return/^(html|body|#document)$/.test(y2(e))}function Dm(e){return un(e).getComputedStyle(e)}function IA(e){if(y2(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Xv(e)&&e.host||x2(e);return Xv(t)?t.host:t}function S2(e){const t=IA(e);return $A(t)?e.ownerDocument?e.ownerDocument.body:e.body:Im(t)&&w2(t)?t:S2(t)}function Ql(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=S2(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=un(i);if(o){const l=Pp(a);return t.concat(a,a.visualViewport||[],w2(i)?i:[],l&&n?Ql(l):[])}else return t.concat(i,Ql(i,[],n))}function Pp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function DA(e){const t=Dm(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Im(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Kl(n)!==o||Kl(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Lm(e){return Tp(e)?e:e.contextElement}function Od(e){const t=Lm(e);if(!Im(t))return Zl(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=DA(t);let a=(o?Kl(n.width):n.width)/r,l=(o?Kl(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const LA=Zl(0);function RA(e){const t=un(e);return!jA()||!t.visualViewport?LA:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function AA(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==un(e)?!1:t}function Kv(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Lm(e);let a=Zl(1);t&&(r?Tp(r)&&(a=Od(r)):a=Od(e));const l=AA(o,n,r)?RA(o):Zl(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,c=i.width/a.x,d=i.height/a.y;if(o){const m=un(o),p=r&&Tp(r)?un(r):r;let h=m,y=Pp(h);for(;y&&r&&p!==h;){const w=Od(y),f=y.getBoundingClientRect(),v=Dm(y),x=f.left+(y.clientLeft+parseFloat(v.paddingLeft))*w.x,S=f.top+(y.clientTop+parseFloat(v.paddingTop))*w.y;s*=w.x,u*=w.y,c*=w.x,d*=w.y,s+=x,u+=S,h=un(y),y=Pp(h)}}return MA({width:c,height:d,x:s,y:u})}function _2(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function FA(e,t){let n=null,r;const i=x2(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:c,top:d,width:m,height:p}=u;if(l||t(),!m||!p)return;const h=Ss(d),y=Ss(i.clientWidth-(c+m)),w=Ss(i.clientHeight-(d+p)),f=Ss(c),x={rootMargin:-h+"px "+-y+"px "+-w+"px "+-f+"px",threshold:OA(0,PA(1,s))||1};let S=!0;function C(k){const _=k[0].intersectionRatio;if(_!==s){if(!S)return a();_?a(!1,_):r=setTimeout(()=>{a(!1,1e-7)},1e3)}_===1&&!_2(u,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(C,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,x)}n.observe(e)}return a(!0),o}function NA(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=Lm(e),c=i||o?[...u?Ql(u):[],...t?Ql(t):[]]:[];c.forEach(f=>{i&&f.addEventListener("scroll",n,{passive:!0}),o&&f.addEventListener("resize",n)});const d=u&&l?FA(u,n):null;let m=-1,p=null;a&&(p=new ResizeObserver(f=>{let[v]=f;v&&v.target===u&&p&&t&&(p.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(t)})),n()}),u&&!s&&p.observe(u),t&&p.observe(t));let h,y=s?Kv(e):null;s&&w();function w(){const f=Kv(e);y&&!_2(y,f)&&n(),y=f,h=requestAnimationFrame(w)}return n(),()=>{var f;c.forEach(v=>{i&&v.removeEventListener("scroll",n),o&&v.removeEventListener("resize",n)}),d==null||d(),(f=p)==null||f.disconnect(),p=null,s&&cancelAnimationFrame(h)}}var Op=b.useLayoutEffect,zA=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Jl=function(){};function BA(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function VA(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(BA(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Zv=function(t){return ZA(t)?t.filter(Boolean):ei(t)==="object"&&t!==null?[t]:[]},C2=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=er(t,zA);return Z({},n)},Pe=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function mc(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function HA(e){return mc(e)?window.innerHeight:e.clientHeight}function E2(e){return mc(e)?window.pageYOffset:e.scrollTop}function eu(e,t){if(mc(e)){window.scrollTo(0,t);return}e.scrollTop=t}function UA(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function WA(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function _s(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Jl,i=E2(e),o=t-i,a=10,l=0;function s(){l+=a;var u=WA(l,i,o,n);eu(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function Qv(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?eu(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&eu(e,Math.max(t.offsetTop-i,0))}function GA(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Jv(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function YA(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var k2=!1,qA={get passive(){return k2=!0}},Cs=typeof window<"u"?window:{};Cs.addEventListener&&Cs.removeEventListener&&(Cs.addEventListener("p",Jl,qA),Cs.removeEventListener("p",Jl,!1));var XA=k2;function KA(e){return e!=null}function ZA(e){return Array.isArray(e)}function Es(e,t,n){return e?t:n}var QA=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Bn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Bn(l,2),u=s[0],c=s[1];return a[u]=c,a},{})},JA=["children","innerProps"],e6=["children","innerProps"];function t6(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=UA(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var c=s.getBoundingClientRect(),d=c.height,m=n.getBoundingClientRect(),p=m.bottom,h=m.height,y=m.top,w=n.offsetParent.getBoundingClientRect(),f=w.top,v=a?window.innerHeight:HA(s),x=E2(s),S=parseInt(getComputedStyle(n).marginBottom,10),C=parseInt(getComputedStyle(n).marginTop,10),k=f-C,_=v-y,E=k+x,M=d-x-y,j=p-v+x+S,D=x+y-C,O=160;switch(i){case"auto":case"bottom":if(_>=h)return{placement:"bottom",maxHeight:t};if(M>=h&&!a)return o&&_s(s,j,O),{placement:"bottom",maxHeight:t};if(!a&&M>=r||a&&_>=r){o&&_s(s,j,O);var $=a?_-S:M-S;return{placement:"bottom",maxHeight:$}}if(i==="auto"||a){var R=t,L=a?k:E;return L>=r&&(R=Math.min(L-S-l,t)),{placement:"top",maxHeight:R}}if(i==="bottom")return o&&eu(s,j),{placement:"bottom",maxHeight:t};break;case"top":if(k>=h)return{placement:"top",maxHeight:t};if(E>=h&&!a)return o&&_s(s,D,O),{placement:"top",maxHeight:t};if(!a&&E>=r||a&&k>=r){var N=t;return(!a&&E>=r||a&&k>=r)&&(N=a?k-C:E-C),o&&_s(s,D,O),{placement:"top",maxHeight:N}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function n6(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var T2=function(t){return t==="auto"?"bottom":t},r6=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return Z((r={label:"menu"},Ao(r,n6(i),"100%"),Ao(r,"position","absolute"),Ao(r,"width","100%"),Ao(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},P2=b.createContext(null),i6=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=b.useContext(P2)||{},c=u.setPortalPlacement,d=b.useRef(null),m=b.useState(i),p=Bn(m,2),h=p[0],y=p[1],w=b.useState(null),f=Bn(w,2),v=f[0],x=f[1],S=s.spacing.controlHeight;return Op(function(){var C=d.current;if(C){var k=a==="fixed",_=l&&!k,E=t6({maxHeight:i,menuEl:C,minHeight:r,placement:o,shouldScroll:_,isFixedPosition:k,controlHeight:S});y(E.maxHeight),x(E.placement),c==null||c(E.placement)}},[i,o,a,l,r,c,S]),n({ref:d,placerProps:Z(Z({},t),{},{placement:v||T2(o),maxHeight:h})})},o6=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return K("div",Q({},Pe(t,"menu",{menu:!0}),{ref:r},i),n)},a6=o6,s6=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return Z({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},l6=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return K("div",Q({},Pe(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},O2=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return Z({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},u6=O2,c6=O2,d6=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=er(t,JA);return K("div",Q({},Pe(Z(Z({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},f6=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=er(t,e6);return K("div",Q({},Pe(Z(Z({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},p6=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},h6=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=b.useRef(null),u=b.useRef(null),c=b.useState(T2(a)),d=Bn(c,2),m=d[0],p=d[1],h=b.useMemo(function(){return{setPortalPlacement:p}},[]),y=b.useState(null),w=Bn(y,2),f=w[0],v=w[1],x=b.useCallback(function(){if(i){var _=GA(i),E=l==="fixed"?0:window.pageYOffset,M=_[m]+E;(M!==(f==null?void 0:f.offset)||_.left!==(f==null?void 0:f.rect.left)||_.width!==(f==null?void 0:f.rect.width))&&v({offset:M,rect:_})}},[i,l,m,f==null?void 0:f.offset,f==null?void 0:f.rect.left,f==null?void 0:f.rect.width]);Op(function(){x()},[x]);var S=b.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=NA(i,s.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);Op(function(){S()},[S]);var C=b.useCallback(function(_){s.current=_,S()},[S]);if(!n&&l!=="fixed"||!f)return null;var k=K("div",Q({ref:C},Pe(Z(Z({},t),{},{offset:f.offset,position:l,rect:f.rect}),"menuPortal",{"menu-portal":!0}),o),r);return K(P2.Provider,{value:h},n?xu.createPortal(k,n):k)},m6=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},g6=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return K("div",Q({},Pe(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},v6=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return Z({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},y6=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return K("div",Q({},Pe(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},x6=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},b6=function(t){var n=t.children,r=t.innerProps;return K("div",Q({},Pe(t,"indicatorsContainer",{indicators:!0}),r),n)},e1,w6=["size"],S6=["innerProps","isRtl","size"],_6={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},M2=function(t){var n=t.size,r=er(t,w6);return K("svg",Q({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:_6},r))},Rm=function(t){return K(M2,Q({size:20},t),K("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},j2=function(t){return K(M2,Q({size:20},t),K("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},$2=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},C6=$2,E6=function(t){var n=t.children,r=t.innerProps;return K("div",Q({},Pe(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||K(j2,null))},k6=$2,T6=function(t){var n=t.children,r=t.innerProps;return K("div",Q({},Pe(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||K(Rm,null))},P6=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},O6=function(t){var n=t.innerProps;return K("span",Q({},n,Pe(t,"indicatorSeparator",{"indicator-separator":!0})))},M6=UM(e1||(e1=TA([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),j6=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return Z({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Md=function(t){var n=t.delay,r=t.offset;return K("span",{css:sm({animation:"".concat(M6," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},$6=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=er(t,S6);return K("div",Q({},Pe(Z(Z({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),K(Md,{delay:0,offset:r}),K(Md,{delay:160,offset:!0}),K(Md,{delay:320,offset:!r}))},I6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return Z({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},D6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return K("div",Q({ref:o},Pe(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},L6=D6,R6=["data"],A6=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},F6=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,c=t.theme,d=t.selectProps;return K("div",Q({},Pe(t,"group",{group:!0}),s),K(a,Q({},l,{selectProps:d,theme:c,getStyles:i,getClassNames:o,cx:r}),u),K("div",null,n))},N6=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return Z({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},z6=function(t){var n=C2(t);n.data;var r=er(n,R6);return K("div",Q({},Pe(t,"groupHeading",{"group-heading":!0}),r))},B6=F6,V6=["innerRef","isDisabled","isHidden","inputClassName"],H6=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return Z(Z({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},U6),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},I2={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},U6={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Z({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},I2)},W6=function(t){return Z({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},I2)},G6=function(t){var n=t.cx,r=t.value,i=C2(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=er(i,V6);return K("div",Q({},Pe(t,"input",{"input-container":!0}),{"data-value":r||""}),K("input",Q({className:n({input:!0},s),ref:o,style:W6(l),disabled:a},u)))},Y6=G6,q6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return Z({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},X6=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return Z({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},K6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return Z({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},D2=function(t){var n=t.children,r=t.innerProps;return K("div",r,n)},Z6=D2,Q6=D2;function J6(e){var t=e.children,n=e.innerProps;return K("div",Q({role:"button"},n),t||K(Rm,{size:14}))}var e8=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,c=r.Label,d=r.Remove;return K(u,{data:i,innerProps:Z(Z({},Pe(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},K(c,{data:i,innerProps:Z({},Pe(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),K(d,{data:i,innerProps:Z(Z({},Pe(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},t8=e8,n8=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return Z({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},r8=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return K("div",Q({},Pe(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},i8=r8,o8=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return Z({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},a8=function(t){var n=t.children,r=t.innerProps;return K("div",Q({},Pe(t,"placeholder",{placeholder:!0}),r),n)},s8=a8,l8=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return Z({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},u8=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return K("div",Q({},Pe(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},c8=u8,d8={ClearIndicator:T6,Control:L6,DropdownIndicator:E6,DownChevron:j2,CrossIcon:Rm,Group:B6,GroupHeading:z6,IndicatorsContainer:b6,IndicatorSeparator:O6,Input:Y6,LoadingIndicator:$6,Menu:a6,MenuList:l6,MenuPortal:h6,LoadingMessage:f6,NoOptionsMessage:d6,MultiValue:t8,MultiValueContainer:Z6,MultiValueLabel:Q6,MultiValueRemove:J6,Option:i8,Placeholder:s8,SelectContainer:g6,SingleValue:c8,ValueContainer:y6},f8=function(t){return Z(Z({},d8),t.components)},t1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function p8(e,t){return!!(e===t||t1(e)&&t1(t))}function h8(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!p8(e[n],t[n]))return!1;return!0}function m8(e,t){t===void 0&&(t=h8);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var g8={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},v8=function(t){return K("span",Q({css:g8},t))},n1=v8,y8={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,c=t.isAppleDevice,d=function(y,w){return y&&y.length?"".concat(y.indexOf(w)+1," of ").concat(y.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(d(l,r),".");if(n==="menu"&&c){var m=s?" disabled":"",p="".concat(u?" selected":"").concat(m);return"".concat(a).concat(p,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},x8=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,c=t.isAppleDevice,d=s.ariaLiveMessages,m=s.getOptionLabel,p=s.inputValue,h=s.isMulti,y=s.isOptionDisabled,w=s.isSearchable,f=s.menuIsOpen,v=s.options,x=s.screenReaderStatus,S=s.tabSelectsValue,C=s.isLoading,k=s["aria-label"],_=s["aria-live"],E=b.useMemo(function(){return Z(Z({},y8),d||{})},[d]),M=b.useMemo(function(){var L="";if(n&&E.onChange){var N=n.option,F=n.options,P=n.removedValue,I=n.removedValues,A=n.value,B=function(fe){return Array.isArray(fe)?null:fe},z=P||N||B(A),H=z?m(z):"",G=F||I||void 0,W=G?G.map(m):[],X=Z({isDisabled:z&&y(z,l),label:H,labels:W},n);L=E.onChange(X)}return L},[n,E,y,l,m]),j=b.useMemo(function(){var L="",N=r||i,F=!!(r&&l&&l.includes(r));if(N&&E.onFocus){var P={focused:N,label:m(N),isDisabled:y(N,l),isSelected:F,options:o,context:N===r?"menu":"value",selectValue:l,isAppleDevice:c};L=E.onFocus(P)}return L},[r,i,m,y,E,o,l,c]),D=b.useMemo(function(){var L="";if(f&&v.length&&!C&&E.onFilter){var N=x({count:o.length});L=E.onFilter({inputValue:p,resultsMessage:N})}return L},[o,p,f,E,v,x,C]),O=(n==null?void 0:n.action)==="initial-input-focus",$=b.useMemo(function(){var L="";if(E.guidance){var N=i?"value":f?"menu":"input";L=E.guidance({"aria-label":k,context:N,isDisabled:r&&y(r,l),isMulti:h,isSearchable:w,tabSelectsValue:S,isInitialFocus:O})}return L},[k,r,i,h,y,w,f,E,l,S,O]),R=K(b.Fragment,null,K("span",{id:"aria-selection"},M),K("span",{id:"aria-focused"},j),K("span",{id:"aria-results"},D),K("span",{id:"aria-guidance"},$));return K(b.Fragment,null,K(n1,{id:u},O&&R),K(n1,{"aria-live":_,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!O&&R))},b8=x8,Mp=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],w8=new RegExp("["+Mp.map(function(e){return e.letters}).join("")+"]","g"),L2={};for(var jd=0;jd<Mp.length;jd++)for(var $d=Mp[jd],Id=0;Id<$d.letters.length;Id++)L2[$d.letters[Id]]=$d.base;var R2=function(t){return t.replace(w8,function(n){return L2[n]})},S8=m8(R2),r1=function(t){return t.replace(/^\s+|\s+$/g,"")},_8=function(t){return"".concat(t.label," ").concat(t.value)},C8=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=Z({ignoreCase:!0,ignoreAccents:!0,stringify:_8,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,c=s?r1(r):r,d=s?r1(l(n)):l(n);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),a&&(c=S8(c),d=R2(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},E8=["innerRef"];function k8(e){var t=e.innerRef,n=er(e,E8),r=QA(n,"onExited","in","enter","exit","appear");return K("input",Q({ref:t},r,{css:sm({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var T8=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function P8(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=b.useRef(!1),l=b.useRef(!1),s=b.useRef(0),u=b.useRef(null),c=b.useCallback(function(w,f){if(u.current!==null){var v=u.current,x=v.scrollTop,S=v.scrollHeight,C=v.clientHeight,k=u.current,_=f>0,E=S-C-x,M=!1;E>f&&a.current&&(r&&r(w),a.current=!1),_&&l.current&&(o&&o(w),l.current=!1),_&&f>E?(n&&!a.current&&n(w),k.scrollTop=S,M=!0,a.current=!0):!_&&-f>x&&(i&&!l.current&&i(w),k.scrollTop=0,M=!0,l.current=!0),M&&T8(w)}},[n,r,i,o]),d=b.useCallback(function(w){c(w,w.deltaY)},[c]),m=b.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),p=b.useCallback(function(w){var f=s.current-w.changedTouches[0].clientY;c(w,f)},[c]),h=b.useCallback(function(w){if(w){var f=XA?{passive:!1}:!1;w.addEventListener("wheel",d,f),w.addEventListener("touchstart",m,f),w.addEventListener("touchmove",p,f)}},[p,m,d]),y=b.useCallback(function(w){w&&(w.removeEventListener("wheel",d,!1),w.removeEventListener("touchstart",m,!1),w.removeEventListener("touchmove",p,!1))},[p,m,d]);return b.useEffect(function(){if(t){var w=u.current;return h(w),function(){y(w)}}},[t,h,y]),function(w){u.current=w}}var i1=["boxSizing","height","overflow","paddingRight","position"],o1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function a1(e){e.cancelable&&e.preventDefault()}function s1(e){e.stopPropagation()}function l1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function u1(){return"ontouchstart"in window||navigator.maxTouchPoints}var c1=!!(typeof window<"u"&&window.document&&window.document.createElement),Oo=0,fi={capture:!1,passive:!1};function O8(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),o=b.useRef(null),a=b.useCallback(function(s){if(c1){var u=document.body,c=u&&u.style;if(r&&i1.forEach(function(h){var y=c&&c[h];i.current[h]=y}),r&&Oo<1){var d=parseInt(i.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,p=window.innerWidth-m+d||0;Object.keys(o1).forEach(function(h){var y=o1[h];c&&(c[h]=y)}),c&&(c.paddingRight="".concat(p,"px"))}u&&u1()&&(u.addEventListener("touchmove",a1,fi),s&&(s.addEventListener("touchstart",l1,fi),s.addEventListener("touchmove",s1,fi))),Oo+=1}},[r]),l=b.useCallback(function(s){if(c1){var u=document.body,c=u&&u.style;Oo=Math.max(Oo-1,0),r&&Oo<1&&i1.forEach(function(d){var m=i.current[d];c&&(c[d]=m)}),u&&u1()&&(u.removeEventListener("touchmove",a1,fi),s&&(s.removeEventListener("touchstart",l1,fi),s.removeEventListener("touchmove",s1,fi)))}},[r]);return b.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var M8=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},j8={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function $8(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=P8({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),c=O8({isEnabled:n}),d=function(p){u(p),c(p)};return K(b.Fragment,null,n&&K("div",{onClick:M8,css:j8}),t(d))}var I8={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},D8=function(t){var n=t.name,r=t.onFocus;return K("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:I8,value:"",onChange:function(){}})},L8=D8;function Am(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function R8(){return Am(/^iPhone/i)}function A2(){return Am(/^Mac/i)}function A8(){return Am(/^iPad/i)||A2()&&navigator.maxTouchPoints>1}function F8(){return R8()||A8()}function N8(){return A2()||F8()}var z8=function(t){return t.label},B8=function(t){return t.label},V8=function(t){return t.value},H8=function(t){return!!t.isDisabled},U8={clearIndicator:k6,container:m6,control:I6,dropdownIndicator:C6,group:A6,groupHeading:N6,indicatorsContainer:x6,indicatorSeparator:P6,input:H6,loadingIndicator:j6,loadingMessage:c6,menu:r6,menuList:s6,menuPortal:p6,multiValue:q6,multiValueLabel:X6,multiValueRemove:K6,noOptionsMessage:u6,option:n8,placeholder:o8,singleValue:l8,valueContainer:v6},W8={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},G8=4,F2=4,Y8=38,q8=F2*2,X8={baseUnit:F2,controlHeight:Y8,menuGutter:q8},Dd={borderRadius:G8,colors:W8,spacing:X8},K8={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Jv(),captureMenuScroll:!Jv(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:C8(),formatGroupLabel:z8,getOptionLabel:B8,getOptionValue:V8,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:H8,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!YA(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function d1(e,t,n,r){var i=B2(e,t,n),o=V2(e,t,n),a=z2(e,t),l=tu(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function Js(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return d1(e,a,t,l)}).filter(function(a){return p1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=d1(e,n,t,r);return p1(e,o)?o:void 0}).filter(KA)}function N2(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,$m(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function f1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,$m(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function Z8(e,t){return N2(Js(e,t))}function p1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!U2(e)||!o)&&H2(e,{label:a,value:l,data:i},r)}function Q8(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function J8(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Ld=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},z2=function(t,n){return t.getOptionLabel(n)},tu=function(t,n){return t.getOptionValue(n)};function B2(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function V2(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=tu(e,t);return n.some(function(i){return tu(e,i)===r})}function H2(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var U2=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},eF=1,W2=function(e){xA(n,e);var t=_A(n);function n(r){var i;if(vA(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var c=i.props,d=c.onChange,m=c.name;u.name=m,i.ariaOnChange(s,u),d(s,u)},i.setValue=function(s,u,c){var d=i.props,m=d.closeMenuOnSelect,p=d.isMulti,h=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:h}),m&&(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:c})},i.selectOption=function(s){var u=i.props,c=u.blurInputOnSelect,d=u.isMulti,m=u.name,p=i.state.selectValue,h=d&&i.isOptionSelected(s,p),y=i.isOptionDisabled(s,p);if(h){var w=i.getOptionValue(s);i.setValue(p.filter(function(f){return i.getOptionValue(f)!==w}),"deselect-option",s)}else if(!y)d?i.setValue([].concat($m(p),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:m});return}c&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,c=i.state.selectValue,d=i.getOptionValue(s),m=c.filter(function(h){return i.getOptionValue(h)!==d}),p=Es(u,m,m[0]||null);i.onChange(p,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Es(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),m=Es(s,d,d[0]||null);c&&i.onChange(m,{action:"pop-value",removedValue:c})},i.getFocusedOptionId=function(s){return Ld(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return f1(Js(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return VA.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return z2(i.props,s)},i.getOptionValue=function(s){return tu(i.props,s)},i.getStyles=function(s,u){var c=i.props.unstyled,d=U8[s](u,c);d.boxSizing="border-box";var m=i.props.styles[s];return m?m(d,u):d},i.getClassNames=function(s,u){var c,d;return(c=(d=i.props.classNames)[s])===null||c===void 0?void 0:c.call(d,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return f8(i.props)},i.buildCategorizedOptions=function(){return Js(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return N2(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:Z({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,c=u.isMulti,d=u.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!c}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&mc(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,c=u&&u.item(0);c&&(i.initialTouchX=c.clientX,i.initialTouchY=c.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-i.initialTouchX),m=Math.abs(c.clientY-i.initialTouchY),p=5;i.userIsDragging=d>p||m>p}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,c=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(c,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),c=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:c>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return U2(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,c=u.isMulti,d=u.backspaceRemovesValue,m=u.escapeClearsValue,p=u.inputValue,h=u.isClearable,y=u.isDisabled,w=u.menuIsOpen,f=u.onKeyDown,v=u.tabSelectsValue,x=u.openMenuOnFocus,S=i.state,C=S.focusedOption,k=S.focusedValue,_=S.selectValue;if(!y&&!(typeof f=="function"&&(f(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!c||p)return;i.focusValue("previous");break;case"ArrowRight":if(!c||p)return;i.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(k)i.removeValue(k);else{if(!d)return;c?i.popValue():h&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!v||!C||x&&i.isOptionSelected(C,_))return;i.selectOption(C);break;case"Enter":if(s.keyCode===229)break;if(w){if(!C||i.isComposing)return;i.selectOption(C);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:p}),i.onMenuClose()):h&&m&&i.clearValue();break;case" ":if(p)return;if(!w){i.openMenu("first");break}if(!C)return;i.selectOption(C);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++eF),i.state.selectValue=Zv(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=Ld(o,a[l])}return i}return yA(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Qv(this.menuListRef,this.focusedOptionRef),N8()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Qv(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),c=i==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,c=-1;if(a.length){switch(i){case"previous":s===0?c=0:s===-1?c=u:c=s-1;break;case"next":s>-1&&s<u&&(c=s+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:a[c]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Dd):Z(Z({},Dd),this.props.theme):Dd}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,m=d.isMulti,p=d.isRtl,h=d.options,y=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:y,isMulti:m,isRtl:p,options:h,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return B2(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return V2(this.props,i,o)}},{key:"filterOption",value:function(i,o){return H2(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,c=i.form,d=i.menuIsOpen,m=i.required,p=this.getComponents(),h=p.Input,y=this.state,w=y.inputIsHidden,f=y.ariaSelection,v=this.commonProps,x=l||this.getElementId("input"),S=Z(Z(Z({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(f==null?void 0:f.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?b.createElement(h,Q({},v,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:s},S)):b.createElement(k8,Q({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Jl,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:c,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,m=this.commonProps,p=this.props,h=p.controlShouldRenderValue,y=p.isDisabled,w=p.isMulti,f=p.inputValue,v=p.placeholder,x=this.state,S=x.selectValue,C=x.focusedValue,k=x.isFocused;if(!this.hasValue()||!h)return f?null:b.createElement(d,Q({},m,{key:"placeholder",isDisabled:y,isFocused:k,innerProps:{id:this.getElementId("placeholder")}}),v);if(w)return S.map(function(E,M){var j=E===C,D="".concat(i.getOptionLabel(E),"-").concat(i.getOptionValue(E));return b.createElement(a,Q({},m,{components:{Container:l,Label:s,Remove:u},isFocused:j,isDisabled:y,key:D,index:M,removeProps:{onClick:function(){return i.removeValue(E)},onTouchEnd:function(){return i.removeValue(E)},onMouseDown:function($){$.preventDefault()}},data:E}),i.formatOptionLabel(E,"value"))});if(f)return null;var _=S[0];return b.createElement(c,Q({},m,{data:_,isDisabled:y}),this.formatOptionLabel(_,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,Q({},a,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!o||!u)return null;var d={"aria-hidden":"true"};return b.createElement(o,Q({},a,{innerProps:d,isDisabled:s,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return b.createElement(a,Q({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,Q({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,m=o.NoOptionsMessage,p=o.Option,h=this.commonProps,y=this.state.focusedOption,w=this.props,f=w.captureMenuScroll,v=w.inputValue,x=w.isLoading,S=w.loadingMessage,C=w.minMenuHeight,k=w.maxMenuHeight,_=w.menuIsOpen,E=w.menuPlacement,M=w.menuPosition,j=w.menuPortalTarget,D=w.menuShouldBlockScroll,O=w.menuShouldScrollIntoView,$=w.noOptionsMessage,R=w.onMenuScrollToTop,L=w.onMenuScrollToBottom;if(!_)return null;var N=function(H,G){var W=H.type,X=H.data,ee=H.isDisabled,fe=H.isSelected,be=H.label,ie=H.value,je=y===X,Be=ee?void 0:function(){return i.onOptionHover(X)},Ve=ee?void 0:function(){return i.selectOption(X)},oi="".concat(i.getElementId("option"),"-").concat(G),vt={id:oi,onClick:Ve,onMouseMove:Be,onMouseOver:Be,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:fe};return b.createElement(p,Q({},h,{innerProps:vt,data:X,isDisabled:ee,isSelected:fe,key:oi,label:be,type:W,value:ie,isFocused:je,innerRef:je?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(H.data,"menu"))},F;if(this.hasOptions())F=this.getCategorizedOptions().map(function(z){if(z.type==="group"){var H=z.data,G=z.options,W=z.index,X="".concat(i.getElementId("group"),"-").concat(W),ee="".concat(X,"-heading");return b.createElement(a,Q({},h,{key:X,data:H,options:G,Heading:l,headingProps:{id:ee,data:z.data},label:i.formatGroupLabel(z.data)}),z.options.map(function(fe){return N(fe,"".concat(W,"-").concat(fe.index))}))}else if(z.type==="option")return N(z,"".concat(z.index))});else if(x){var P=S({inputValue:v});if(P===null)return null;F=b.createElement(d,h,P)}else{var I=$({inputValue:v});if(I===null)return null;F=b.createElement(m,h,I)}var A={minMenuHeight:C,maxMenuHeight:k,menuPlacement:E,menuPosition:M,menuShouldScrollIntoView:O},B=b.createElement(i6,Q({},h,A),function(z){var H=z.ref,G=z.placerProps,W=G.placement,X=G.maxHeight;return b.createElement(s,Q({},h,A,{innerRef:H,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:W}),b.createElement($8,{captureEnabled:f,onTopArrive:R,onBottomArrive:L,lockEnabled:D},function(ee){return b.createElement(u,Q({},h,{innerRef:function(be){i.getMenuListRef(be),ee(be)},innerProps:{role:"listbox","aria-multiselectable":h.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:X,focusedOption:y}),F)}))});return j||M==="fixed"?b.createElement(c,Q({},h,{appendTo:j,controlElement:this.controlRef,menuPlacement:E,menuPosition:M}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return b.createElement(L8,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var m=d.map(function(y){return i.getOptionValue(y)}).join(a);return b.createElement("input",{name:u,type:"hidden",value:m})}else{var p=d.length>0?d.map(function(y,w){return b.createElement("input",{key:"i-".concat(w),name:u,type:"hidden",value:i.getOptionValue(y)})}):b.createElement("input",{name:u,type:"hidden",value:""});return b.createElement("div",null,p)}else{var h=d[0]?this.getOptionValue(d[0]):"";return b.createElement("input",{name:u,type:"hidden",value:h})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return b.createElement(b8,Q({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,c=u.className,d=u.id,m=u.isDisabled,p=u.menuIsOpen,h=this.state.isFocused,y=this.commonProps=this.getCommonProps();return b.createElement(l,Q({},y,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:h}),this.renderLiveRegion(),b.createElement(o,Q({},y,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:h,menuIsOpen:p}),b.createElement(s,Q({},y,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(a,Q({},y,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,m=o.instancePrefix,p=i.options,h=i.value,y=i.menuIsOpen,w=i.inputValue,f=i.isMulti,v=Zv(h),x={};if(a&&(h!==a.value||p!==a.options||y!==a.menuIsOpen||w!==a.inputValue)){var S=y?Z8(i,v):[],C=y?f1(Js(i,v),"".concat(m,"-option")):[],k=l?Q8(o,v):null,_=J8(o,S),E=Ld(C,_);x={selectValue:v,focusedOption:_,focusedOptionId:E,focusableOptionsWithIds:C,focusedValue:k,clearFocusValueOnUpdate:!1}}var M=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},j=u,D=c&&d;return c&&!D&&(j={value:Es(f,v,v[0]||null),options:v,action:"initial-input-focus"},D=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(j=null),Z(Z(Z({},x),M),{},{prevProps:i,ariaSelection:j,prevWasFocused:D})}}]),n}(b.Component);W2.defaultProps=K8;var tF=b.forwardRef(function(e,t){var n=gA(e);return b.createElement(W2,Q({ref:t},n))}),Ta=tF;const nF=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,rF=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,iF=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>g.jsxs(nF,{children:[g.jsx(rF,{children:"Місто"}),g.jsx(Ta,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),oF=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,aF=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,sF=({options:e=[],value:t,onChange:n,selectedCity:r})=>g.jsxs(oF,{children:[g.jsx(aF,{children:"Спосіб доставки"}),g.jsx(Ta,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),Rd=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Ad=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,lF=({deliveryMethod:e,officeOptions:t,ukrOfficeOptions:n,selectedOffice:r,selectedUkrOffice:i,setSelectedOffice:o,setSelectedUkrOffice:a})=>e==="nova"?g.jsxs(Rd,{children:[g.jsx(Ad,{children:"Відділення Нової пошти"}),g.jsx(Ta,{options:t,onChange:l=>o(l),value:r,placeholder:"Оберіть відділення..."})]}):e==="ukr"?g.jsxs(Rd,{children:[g.jsx(Ad,{children:"Відділення Укрпошти"}),g.jsx(Ta,{options:n,onChange:l=>a(l),value:i,placeholder:"Оберіть відділення..."})]}):e==="pickup"?g.jsxs(Rd,{children:[g.jsx(Ad,{children:"Самовивіз"}),g.jsxs("div",{style:{backgroundColor:"#f9f9f9",padding:"10px",borderRadius:"6px",border:"1px solid #ddd",fontSize:"14px",color:"#333",lineHeight:"1.4"},children:[g.jsx("p",{children:"Ви обрали самовивіз."}),g.jsx("p",{children:"Адреса магазину: вул. Казармена 6Г, Київ"}),g.jsx("p",{children:"Графік роботи: Вт, Ср, Пт, Сб, Нд — 11:00–20:00; вихідні: Пн, Чт"}),g.jsx("p",{children:"Телефон: +380 99 999 99"})]})]}):null,uF=T.div`
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
`;const cF=T.button`
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
`,dF=T.ul`
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
`,fF=T.li`
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
`,pF=T.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,hF=T.div`
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
`,mF=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>g.jsxs(uF,{children:[g.jsx("h3",{children:"Ваше замовлення"}),g.jsx(dF,{children:e.map((o,a)=>{var l,s;return g.jsxs(fF,{children:[g.jsx(pF,{src:((s=(l=o.images)==null?void 0:l[0])==null?void 0:s.url)||Sa,alt:o.name}),g.jsxs(hF,{children:[g.jsx("p",{className:"item-name",children:o.name}),g.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),g.jsxs("span",{className:"item-total",children:[o.price*o.quantity," грн"]})]},`${o.id}-${a}`)})}),g.jsxs("div",{className:"summary-row",children:[g.jsxs("span",{children:["Товари (",n,")"]}),g.jsxs("span",{children:[t," грн"]})]}),g.jsxs("div",{className:"summary-row",children:[g.jsx("span",{children:"Доставка"}),g.jsx("span",{children:"За тарифами перевізника"})]}),g.jsx("hr",{}),g.jsxs("div",{className:"total",children:[g.jsx("span",{children:"Всього до сплати:"}),g.jsxs("span",{children:[t," грн"]})]}),g.jsx(cF,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&g.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var G2={exports:{}};function gF(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Fd=gF(b),vF=xu;function yF(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function jp(){return(jp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function xF(e,t){e.prototype=Object.create(t.prototype),yF(e.prototype.constructor=e,t)}function bF(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function pi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var wF=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],c=0;(s=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},h1=wF;function m1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function SF(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var _F={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},CF="_";function g1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=CF),n==null&&(n=_F),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function At(e,t){return e.permanents.indexOf(t)!==-1}function gc(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(At(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function v1(e,t){return t.split("").every(function(n,r){return At(e,r)||!gc(e,r,n)})}function Fo(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&At(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!At(e,o)&&gc(e,o,a)){i=o+1;break}}return i}function Y2(e,t){return Fo(e,t)===e.mask.length}function Rn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=$p(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&At(e,t.length);)t+=r[t.length];return t}if(t)return $p(e,Rn(e,""),t,0);for(var o=0;o<r.length;o++)At(e,o)?t+=r[o]:t+=n;return t}function EF(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(c,d){return d<n||i<=d?c:At(e,d)?a[d]:o}).join("");for(var u=i;u<s.length;u++)At(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Rn(e,t)}function $p(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=Y2(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;p=u,At(e,m=r)&&p!==i[m];){if(r>=t.length&&(t+=i[r]),c=u,d=r,o&&At(e,d)&&c===o)return!0;if(++r>=i.length)return!1}var c,d,m,p;return!gc(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),Rn(e,t)):o||(t+=u),++r<i.length)}),t}function kF(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;c=s,At(e,u=r)&&c!==i[u];)if(++r>=i.length)return!1;var u,c;return(gc(e,r,s)||s===o)&&r++,r<i.length}),r-l}function TF(e,t){for(var n=t;0<=n;--n)if(!At(e,n))return n;return null}function Zo(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!At(e,r))return r;return null}function Nd(e){return e||e===0?e+"":""}function PF(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",c=0,d=0,m=Math.min(i.start,n.start);return n.end>i.start?d=(c=kF(e,r,u=s.slice(i.start,n.end),m))?i.length:0:s.length<r.length&&(d=r.length-s.length),s=r,d&&(d===1&&!i.length&&(m=i.start===n.start?Zo(e,n.start):TF(e,n.start)),s=EF(e,s,m,d)),s=$p(e,s,u,m),(m+=c)>=o.length?m=o.length:m<a.length&&!c?m=a.length:m>=a.length&&m<l&&c&&(m=Zo(e,m)),u||(u=null),{value:s=Rn(e,s),enteredString:u,selection:{start:m,end:m}}}function OF(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function yt(e){return typeof e=="function"}function MF(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function q2(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function y1(e){return(q2()?MF():function(){return setTimeout(e,1e3/60)})(e)}function zd(e){(q2()||clearTimeout)(e)}var jF=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=y1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(zd(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var h=vF.findDOMNode(pi(pi(i))),y=typeof window<"u"&&h instanceof window.Element;if(h&&!y)return null;if(h.nodeName!=="INPUT"&&(h=h.querySelector("input")),!h)throw new Error("react-input-mask: inputComponent doesn't contain input node");return h},i.getInputValue=function(){var h=i.getInputDOMNode();return h?h.value:null},i.setInputValue=function(h){var y=i.getInputDOMNode();y&&(i.value=h,y.value=h)},i.setCursorToEnd=function(){var h=Fo(i.maskOptions,i.value),y=Zo(i.maskOptions,h);y!==null&&i.setCursorPosition(y)},i.setSelection=function(h,y,w){w===void 0&&(w={});var f=i.getInputDOMNode(),v=i.isFocused();f&&v&&(w.deferred||m1(f,h,y),i.selectionDeferId!==null&&zd(i.selectionDeferId),i.selectionDeferId=y1(function(){i.selectionDeferId=null,m1(f,h,y)}),i.previousSelection={start:h,end:y,length:Math.abs(y-h)})},i.getSelection=function(){return SF(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(h){i.setSelection(h,h)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var h=i.maskOptions,y=h.mask,w=h.maskChar,f=h.permanents,v=h.formatChars;return{mask:y,maskChar:w,permanents:f,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:v}},i.isInputAutofilled=function(h,y,w,f){var v=i.getInputDOMNode();try{if(v.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||f.end<w.length&&y.end===h.length},i.onChange=function(h){var y=pi(pi(i)).beforePasteState,w=pi(pi(i)).previousSelection,f=i.props.beforeMaskedValueChange,v=i.getInputValue(),x=i.value,S=i.getSelection();i.isInputAutofilled(v,S,x,w)&&(x=Rn(i.maskOptions,""),w={start:0,end:0,length:0}),y&&(w=y.selection,x=y.value,S={start:w.start+v.length,end:w.start+v.length,length:0},v=x.slice(0,w.start)+v+x.slice(w.end),i.beforePasteState=null);var C=PF(i.maskOptions,v,S,x,w),k=C.enteredString,_=C.selection,E=C.value;if(yt(f)){var M=f({value:E,selection:_},{value:x,selection:w},k,i.getBeforeMaskedValueChangeConfig());E=M.value,_=M.selection}i.setInputValue(E),yt(i.props.onChange)&&i.props.onChange(h),i.isWindowsPhoneBrowser?i.setSelection(_.start,_.end,{deferred:!0}):i.setSelection(_.start,_.end)},i.onFocus=function(h){var y=i.props.beforeMaskedValueChange,w=i.maskOptions,f=w.mask,v=w.prefix;if(i.focused=!0,i.mounted=!0,f){if(i.value)Fo(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var x=Rn(i.maskOptions,v),S=Rn(i.maskOptions,x),C=Fo(i.maskOptions,S),k=Zo(i.maskOptions,C),_={start:k,end:k};if(yt(y)){var E=y({value:S,selection:_},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=E.value,_=E.selection}var M=S!==i.getInputValue();M&&i.setInputValue(S),M&&yt(i.props.onChange)&&i.props.onChange(h),i.setSelection(_.start,_.end)}i.runSaveSelectionLoop()}yt(i.props.onFocus)&&i.props.onFocus(h)},i.onBlur=function(h){var y=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&v1(i.maskOptions,i.value)){var f="";yt(y)&&(f=y({value:f,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var v=f!==i.getInputValue();v&&i.setInputValue(f),v&&yt(i.props.onChange)&&i.props.onChange(h)}yt(i.props.onBlur)&&i.props.onBlur(h)},i.onMouseDown=function(h){if(!i.focused&&document.addEventListener){i.mouseDownX=h.clientX,i.mouseDownY=h.clientY,i.mouseDownTime=new Date().getTime();var y=function w(f){if(document.removeEventListener("mouseup",w),i.focused){var v=Math.abs(f.clientX-i.mouseDownX),x=Math.abs(f.clientY-i.mouseDownY),S=Math.max(v,x),C=new Date().getTime()-i.mouseDownTime;(S<=10&&C<=200||S<=5&&C<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",y)}yt(i.props.onMouseDown)&&i.props.onMouseDown(h)},i.onPaste=function(h){yt(i.props.onPaste)&&i.props.onPaste(h),h.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(h){i.props.children==null&&yt(i.props.inputRef)&&i.props.inputRef(h)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,c=r.defaultValue,d=r.value;i.maskOptions=g1(o,a,l),c==null&&(c=""),d==null&&(d=c);var m=Nd(d);if(i.maskOptions.mask&&(s||m)&&(m=Rn(i.maskOptions,m),yt(u))){var p=r.value;r.value==null&&(p=c),m=u({value:m,selection:null},{value:p=Nd(p),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=m,i}xF(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=OF(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,c=this.maskOptions,d=a||this.isFocused(),m=this.props.value!=null,p=m?Nd(this.props.value):this.value,h=r?r.start:null;if(this.maskOptions=g1(l,s,u),this.maskOptions.mask){!c.mask&&this.isFocused()&&this.runSaveSelectionLoop();var y=this.maskOptions.mask&&this.maskOptions.mask!==c.mask;if(c.mask||m||(p=this.getInputValue()),(y||this.maskOptions.mask&&(p||d))&&(p=Rn(this.maskOptions,p)),y){var w=Fo(this.maskOptions,p);(h===null||w<h)&&(h=Y2(this.maskOptions,p)?w:Zo(this.maskOptions,w))}!this.maskOptions.mask||!v1(this.maskOptions,p)||d||m&&this.props.value||(p="");var f={start:h,end:h};if(yt(o)){var v=o({value:p,selection:f},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());p=v.value,f=v.selection}this.value=p;var x=this.getInputValue()!==this.value;x?(this.setInputValue(this.value),this.forceUpdate()):y&&this.forceUpdate();var S=!1;f.start!=null&&f.end!=null&&(S=!r||r.start!==f.start||r.end!==f.end),(S||x)&&this.setSelection(f.start,f.end)}else c.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&zd(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=bF(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){yt(o)||h1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=jp({},a);l.forEach(function(c){return delete s[c]}),r=o(s),l.filter(function(c){return r.props[c]!=null&&r.props[c]!==a[c]}).length&&h1(!1)}else r=Fd.createElement("input",jp({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Fd.cloneElement(r,u)},t}(Fd.Component),$F=jF;G2.exports=$F;var IF=G2.exports;const DF=Dp(IF);T.div`
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
`;const Bd=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Vd=T.label`
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
`;const LF=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return g.jsxs(g.Fragment,{children:[g.jsx("h3",{children:"Контактні дані"}),g.jsxs(Bd,{children:[g.jsx(Vd,{children:"Прізвище та ім’я"}),g.jsx(Hd,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&g.jsx(Ud,{children:n.fullName})]}),g.jsxs(Bd,{children:[g.jsx(Vd,{children:"Номер телефону"}),g.jsx(DF,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>g.jsx(Hd,{...i,type:"tel"})}),n.phone&&g.jsx(Ud,{children:n.phone})]}),g.jsxs(Bd,{children:[g.jsx(Vd,{children:"E-mail"}),g.jsx(Hd,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&g.jsx(Ud,{children:n.email})]})]})},RF=T.div`
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
  }
`;T.h2`
  text-align: left;
  color: #fff;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
`;const AF=T.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,FF=T.div`
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
`;T.button`
`;const NF=[{city:"Київ",address:"вул. Хрещатик, 1"},{city:"Київ",address:"вул. Січових Стрільців, 10"},{city:"Львів",address:"просп. Свободи, 5"}],zF=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return g.jsxs("div",{style:{marginBottom:"20px"},children:[g.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),g.jsx(Ta,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&g.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},x1={}.VITE_NP_API_KEY,b1="https://api.novaposhta.ua/v2.0/json/",BF=()=>{const e=Dt(A=>A.cart.items),t=to(),n=Kn(),[r,i]=b.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[o,a]=b.useState(""),[l,s]=b.useState(null),[u,c]=b.useState(null),[d,m]=b.useState(null),[p,h]=b.useState(null),[y,w]=b.useState([]),[f,v]=b.useState([]),[x,S]=b.useState([]),[C,k]=b.useState(""),[_,E]=b.useState(null),M=e.reduce((A,B)=>A+B.price*B.quantity,0),j=e.reduce((A,B)=>A+B.quantity,0),O=(()=>{const A=new Date().getFullYear().toString().slice(-2),B=Date.now().toString().slice(-4),z=Math.floor(100+Math.random()*900);return`${A}${B}${z}`})();console.log(O),b.useEffect(()=>{if(o.length<2)return;const A=setTimeout(async()=>{const z=await(await fetch(b1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:x1,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:o}})})).json();w(z.data.map(H=>({value:H.Ref,label:H.Description})))},500);return()=>clearTimeout(A)},[o]),b.useEffect(()=>{if(!l||u!=="nova")return;(async()=>{const z=await(await fetch(b1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:x1,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:l.value}})})).json();v(z.data.map(H=>({value:H.Ref,label:H.Description})))})()},[l,u]),b.useEffect(()=>{if(u!=="ukr"||!l)return;const A=NF.filter(B=>B.city===l.label).filter(B=>B.address.toLowerCase().includes(C.toLowerCase())).slice(0,20);S(A.map((B,z)=>({value:z,label:B.address})))},[l,u,C]);const $=A=>{s(A),i(B=>({...B,city:(A==null?void 0:A.label)||"",postOffice:""})),c(null),m(null),h(null)},R=()=>{const A={};return r.fullName.trim().split(" ").length<2&&(A.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)||(A.email="Некоректний email"),r.phone.replace(/\D/g,"").length<12&&(A.phone="Номер неповний"),l||(A.city=!0),u==="nova"&&!d&&(A.postOffice=!0),u==="ukr"&&!p&&(A.postOffice=!0),u||(A.delivery=!0),_||(A.payment=!0),A},L=b.useMemo(R,[r,u,d,p,l,_]),N=Object.keys(L).length===0&&e.length>0,F=async A=>{if(A.preventDefault(),!_){alert("Оберіть спосіб оплати");return}try{if(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:r.fullName,phone:r.phone,email:r.email,city:r.city,products:e==null?void 0:e.map(z=>({id:z.id,name:z.name,quantity:z.quantity,price:z.price})),status_order:"pending",order_number:O,payment_method:_==="liqpay"?"Онлайн (LiqPay)":"Післяплата",delivery_method:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",delivery_address:u==="nova"?d==null?void 0:d.label:u==="ukr"?p==null?void 0:p.label:"Самовивіз"}})}),_==="liqpay"){const z=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:M,order_number:O})}),{data:H,signature:G}=await z.json(),W=document.createElement("form");W.method="POST",W.action="https://www.liqpay.ua/api/3/checkout",W.innerHTML=`
        <input type="hidden" name="data" value="${H}" />
        <input type="hidden" name="signature" value="${G}" />
      `,document.body.appendChild(W),W.requestSubmit();return}const B={...r,name:r.fullName,city:l.label,deliveryMethod:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",address:u==="nova"?d==null?void 0:d.label:u==="ukr"?p==null?void 0:p.label:"Самовивіз",products:e==null?void 0:e.map(z=>({id:z.id,name:z.name,quantity:z.quantity,price:z.price})),total:M,order_number:O,delivery_address:u==="nova"?d==null?void 0:d.label:u==="ukr"?p==null?void 0:p.label:"Самовивіз",payment_method:_==="liqpay"?"Онлайн (LiqPay)":"Післяплата"};n(Zh()),t("/order-confirmation",{state:{order:B}})}catch(B){console.error(B),alert("Помилка оформлення")}},P=b.useMemo(()=>{const A=[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}];return(l==null?void 0:l.label)==="Київ"&&A.push({value:"pickup",label:"Самовивіз"}),A},[l]),I=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"}];return g.jsx(RF,{children:g.jsxs(AF,{children:[g.jsxs(FF,{children:[g.jsx(LF,{formData:r,setFormData:i,errors:L}),g.jsx(iF,{cityOptions:y,selectedCity:l,onChange:$,onInputChange:a}),g.jsx(sF,{options:P,value:u,onChange:c,selectedCity:l}),g.jsx(lF,{deliveryMethod:u,officeOptions:f,ukrOfficeOptions:x,selectedOffice:d,selectedUkrOffice:p,setSelectedOffice:m,setSelectedUkrOffice:h,setUkrSearch:k}),g.jsx(zF,{options:I,value:_,onChange:E,error:L.payment})]}),g.jsx(mF,{cartItems:e,totalAmount:M,totalQuantity:j,isFormValid:N,handleSubmit:F})]})})},VF=T.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,HF=T.h1`
font-family: var(--second-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,jr=T.p`
font-family: var(--second-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,UF=T.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,WF=T.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,GF=T.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,YF=T.li`
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
`;T.div`
  background: #fff4e5; 
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #ffe3c1;
`;const qF=T.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,w1=T.button`
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
`,XF=()=>{var m,p;const e=to(),t=ti(),[n]=TC(),r=Kn(),i=(m=t.state)==null?void 0:m.order,o=n.get("orderId"),[a,l]=b.useState(i||null),[s,u]=b.useState(!i);b.useEffect(()=>{r(Zh())},[r]),b.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(h=>h.json()).then(h=>{var y;((y=h.data)==null?void 0:y.length)>0&&l(h.data[0]),u(!1)}).catch(()=>u(!1)):u(!1))},[o,i]),console.log(a);const d=((a==null?void 0:a.products)??[]).reduce((h,y)=>h+Number(y.price||0)*(y.quantity||1),0);return s?g.jsx("div",{children:"Завантаження..."}):a?g.jsxs(VF,{children:[g.jsx(HF,{children:"Дякуємо за ваше замовлення!"}),g.jsxs(jr,{children:["Ваше замовлення ",g.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),g.jsx(jr,{children:"Ми зв’яжемось з Вами в найближчий час"}),g.jsxs(UF,{children:[g.jsx(WF,{children:"Деталі замовлення:"}),g.jsx(GF,{children:(p=a.products)==null?void 0:p.map(h=>g.jsxs(YF,{children:[g.jsxs("span",{className:"item-info",children:[h.name," (x",h.quantity,")"]}),g.jsxs("span",{className:"item-price",children:[h.price*h.quantity," грн"]})]},h.id))}),g.jsxs(jr,{children:[g.jsx("strong",{children:"На суму:"})," ",d," грн."]}),g.jsxs(jr,{children:[g.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),g.jsxs(jr,{children:[g.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),g.jsxs(jr,{children:[g.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),g.jsxs(jr,{children:[g.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),g.jsxs(qF,{children:[g.jsx(w1,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),g.jsx(w1,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):g.jsxs("div",{children:["Замовлення не знайдено",g.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},KF=T.section`
  background-color: var(--second-background);
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
  font-family: var(--main-font);

  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: 1200px) {
   max-width: 1448px;
   
  }
`,QF=T.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,JF=T.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,eN=T.p`

  font-size: 16px;
  color: #666;
`,tN=T.section`
  margin-bottom: 50px;
`,nN=T.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,rN=T.section`
  margin-bottom: 60px;
`,iN=T.h2`
  margin-bottom: 30px;
`,oN=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,ks=T.div`
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
`,aN=()=>g.jsxs(KF,{children:[g.jsxs(ZF,{children:[g.jsxs(QF,{children:[g.jsx(JF,{children:"Про Дідів Хлів"}),g.jsx(eN,{children:"Даємо друге життя якісним велозапчастинам"})]}),g.jsxs(tN,{children:[g.jsx(nN,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),g.jsx(IS,{})]}),g.jsxs(rN,{children:[g.jsx(iN,{children:"Наша майстерня"}),g.jsxs(oN,{children:[g.jsx(ks,{color:"#e2e2e2",children:"Фото майстерні"}),g.jsx(ks,{color:"#d1d1d1",children:"Процес діагностики"}),g.jsx(ks,{color:"#bcbcbc",children:"Склад запчастин"}),g.jsx(ks,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),sN=()=>{const{pathname:e}=ti();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},lN=T.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,uN=T.div`
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
   
  }
`,cN=T.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,dN=T.p`
  color: #585555;
  margin-bottom: 40px;
`,fN=T.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,pN=T.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,Ts=T.div`
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
`,hN=T.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,mN=T.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,gN=T.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,vN=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,S1=T.a`
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
`;const yN=T.div`
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

 
`,xN=()=>g.jsx(lN,{children:g.jsxs(uN,{children:[g.jsx(cN,{children:"Контакти"}),g.jsx(dN,{children:"Зв’яжіться з нами для консультації або замовлення"}),g.jsxs(fN,{children:[g.jsxs(pN,{children:[g.jsxs(Ts,{children:[g.jsx("h3",{children:"Адреса"}),g.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),g.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),g.jsxs(Ts,{children:[g.jsx("h3",{children:"Телефон"}),g.jsx("p",{children:"+38 (097) 123-45-67"})]}),g.jsxs(Ts,{children:[g.jsx("h3",{children:"Email"}),g.jsx("p",{children:"didivhliv.com"})]}),g.jsxs(Ts,{children:[g.jsx("h3",{children:"Графік роботи"}),g.jsx("p",{children:"З 11:00 - 20:00"}),g.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),g.jsxs(hN,{children:[g.jsx(mN,{children:"Ми в соцмережах"}),g.jsx(gN,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),g.jsxs(vN,{children:[g.jsxs(S1,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[g.jsx("svg",{width:"20px",children:g.jsx("use",{href:`${Tn}#icon-instagram`})}),g.jsx("span",{children:"Instagram"})]}),g.jsxs(S1,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[g.jsx("svg",{width:"20px",children:g.jsx("use",{href:`${Tn}#icon-telegram`})}),g.jsx("span",{children:"Telegram"})]})]}),g.jsx(yN,{children:"Приєднуйся до спільноти!"})]})]})]})}),bN=T.section`
  background-color:  var(--second-background);
`,wN=T.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
    margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding-top: 30px;
  padding-left: 20px;
    padding-right: 20px;

 @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1448px;
   
  }
  
`,SN=T.div`
      display: flex;
    width: 100%;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
  
`,_N=T.h1`

    font-size: 25px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
 @media screen and (min-width: 360px) {
  font-size: 32px;
  }


@media screen and (min-width: 768px) {
   margin-left: 40%;
  }

`,CN=T.div`
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
`,EN=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  position: relative;
  height: 100%;

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
`,kN=T.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;

`,TN=T.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,PN=T.p`
flex-grow: 1;
font-family: var(--second-font);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2; 
    padding-left:16px;
  padding-right: 16px;
  
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis; 

  min-height: 2.4em; 
  margin-bottom: 8px;
 
`,ON=T.p`
 font-size: 17px;
    font-weight: 800;
 
`;T.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;T.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;const MN=T.div.attrs({className:"card-buttons"})`
  position: static;
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  opacity: 1;

  @media screen and (min-width: 768px) {

  }
`,jN=T.button`
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
`,$N=T.button`
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
`,IN=T.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
`,Wd=T.button`
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
`,DN=T.div`
  position: relative;
  display: inline-block;
  

`,LN=T.button`
  width: 100%;
      min-width: 130px;
      @media screen and (min-width: 360px) {
  min-width: 160px;
  }
  height: 30px;
  padding: 10px 10px;
  background: #625244;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: var(--main-font);
  font-weight: 900;
  display: flex;
  gap:15px;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;

   transition: all 0.2s ease, transform 0.1s ease;

  &:hover {
  background: #4e4136;
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

  &:active {
    transform: scale(0.97);
  }
`,RN=T.div`
  position: absolute;
  top: 110%;
  right: 0;

  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;

  min-width: 130px;
      @media screen and (min-width: 360px) {
  min-width: 160px;
  }
  padding: 6px 0;

  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 10;
`,hi=T.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,AN=T.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,FN=T.button`
    display: flex;
    justify-content: center;
    width: 200px;
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
  
`,NN=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),i=Dt(C=>C.favorites.items),o=Dt(C=>C.cart.items),[a,l]=b.useState(!1),[s,u]=b.useState("date"),[c,d]=b.useState("asc"),[m,p]=b.useState(1),[h,y]=b.useState(1),w=to(),f=Kn();b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[m]),b.useEffect(()=>{(async()=>{const k=new Date,_=new Date;_.setDate(k.getDate()-7);const E=_.toISOString();try{r(!0);const M=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${E}&pagination[page]=${m}&pagination[pageSize]=24`);if(!M.ok)throw new Error(`HTTP error! Status: ${M.status}`);const j=await M.json();t(j.data),y(j.meta.pagination.pageCount)}catch(M){console.error("Помилка при завантаженні продуктів:",M)}finally{r(!1)}})()},[m]);const v=b.useMemo(()=>{const C=[...e];switch(s){case"name":return C.sort((k,_)=>c==="asc"?k.name.localeCompare(_.name):_.name.localeCompare(k.name));case"price":return C.sort((k,_)=>c==="asc"?k.price-_.price:_.price-k.price);case"date":return C.sort((k,_)=>c==="asc"?new Date(k.createdAt)-new Date(_.createdAt):new Date(_.createdAt)-new Date(k.createdAt));default:return C}},[s,e,c]),x=(C,k)=>{k.stopPropagation();const _=o.find(M=>M.id===C.id);if((_?_.quantity:0)>=C.stock){J.error(`Вибачте, доступно лише ${C.stock} шт.`);return}f(Fa({...C,quantity:1})),J.success(`${C.name} додано в кошик!`)},S=(C,k)=>{k.stopPropagation();const _=i.some(E=>E.id===C.id);f(Ua(C)),_?J.warning(`${C.name} видалено з обраного`):J.info(`${C.name} додано в обране`)};return n?g.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:g.jsx(qu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):v.length===0?g.jsxs(AN,{children:[g.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),g.jsxs(FN,{href:"catalog",children:[g.jsx("p",{children:"Весь каталог"}),g.jsx(Uh,{size:24})]})]}):g.jsxs(bN,{children:[g.jsxs(wN,{children:[g.jsx(oo,{autoClose:1500}),g.jsxs(SN,{children:[g.jsx(_N,{children:"Нові товари"}),g.jsxs(DN,{children:[g.jsxs(LN,{onClick:()=>l(C=>!C),children:["Сортування",g.jsx(Hh,{strokeWidth:.9,size:22})]}),a&&g.jsxs(RN,{children:[g.jsx(hi,{onClick:()=>{u("name"),d("asc"),l(!1)},children:"А-Я"}),g.jsx(hi,{onClick:()=>{u("name"),d("desc"),l(!1)},children:"Я-А"}),g.jsx(hi,{onClick:()=>{u("price"),d("asc"),l(!1)},children:"Ціна ↑"}),g.jsx(hi,{onClick:()=>{u("price"),d("desc"),l(!1)},children:"Ціна ↓"}),g.jsx(hi,{onClick:()=>{u("date"),d("desc"),l(!1)},children:"Спочатку новіші"}),g.jsx(hi,{onClick:()=>{u("date"),d("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),g.jsx(CN,{children:v.map(C=>{var _,E;const k=i.some(M=>M.id===C.id);return g.jsxs(EN,{onClick:()=>w(`/product/${C.id}`),children:[g.jsx(kN,{src:(E=(_=C.images)==null?void 0:_[0])==null?void 0:E.url,alt:C.name}),g.jsx(PN,{children:C.name}),g.jsxs(TN,{children:[g.jsxs(ON,{children:[C.price," грн"]}),g.jsxs(MN,{children:[g.jsx(jN,{onClick:M=>x(C,M),children:g.jsx(Ra,{size:24,color:"black"})}),g.jsx($N,{onClick:M=>S(C,M),children:g.jsx(Wh,{size:24,fill:k?"#ff4d4f":"none",color:k?"#ff4d4f":"#000000"})})]})]})]},C.id)})}),g.jsxs(IN,{children:[g.jsx(Wd,{onClick:()=>p(C=>Math.max(C-1,1)),disabled:m===1,children:"Назад"}),Array.from({length:h},(C,k)=>g.jsx(Wd,{onClick:()=>p(k+1),active:m===k+1,children:k+1},k)),g.jsx(Wd,{onClick:()=>p(C=>Math.min(C+1,h)),disabled:m===h,children:"Вперед"})]})]})," "]})};function zN(){return g.jsxs(w3,{children:[g.jsx(r5,{}),g.jsx(sN,{}),g.jsx(b.Suspense,{fallback:g.jsx(t5,{}),children:g.jsx(gC,{children:g.jsxs(ut,{path:"/",element:g.jsx(sO,{}),children:[g.jsx(ut,{index:!0,element:g.jsx(Z$,{})}),g.jsx(ut,{path:"catalog",element:g.jsx(m3,{})}),g.jsx(ut,{path:"/catalog/:category",element:g.jsx(oD,{})}),g.jsx(ut,{path:"/product/:id",element:g.jsx(lR,{})}),g.jsx(ut,{path:"cart",element:g.jsx(LR,{})}),g.jsx(ut,{path:"favorite",element:g.jsx(rA,{})}),g.jsx(ut,{path:"/catalog/new",element:g.jsx(NN,{})}),g.jsx(ut,{path:"checkout",element:g.jsx(BF,{})}),g.jsx(ut,{path:"/order-confirmation",element:g.jsx(XF,{})}),g.jsx(ut,{path:"about",element:g.jsx(aN,{})}),g.jsx(ut,{path:"contacts",element:g.jsx(xN,{})}),g.jsx(ut,{path:"delivery",element:g.jsx(uA,{})}),g.jsx(ut,{path:"*",element:g.jsx(b3,{})})]})})})]})}var Fm="persist:",X2="persist/FLUSH",Nm="persist/REHYDRATE",K2="persist/PAUSE",Z2="persist/PERSIST",Q2="persist/PURGE",J2="persist/REGISTER",BN=-1;function el(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?el=function(n){return typeof n}:el=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},el(e)}function _1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function VN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_1(n,!0).forEach(function(r){HN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function HN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function UN(e,t,n,r){r.debug;var i=VN({},n);return e&&el(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function WN(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:Fm).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(C){return C}:typeof e.serialize=="function"?l=e.serialize:l=GN;var s=e.writeFailHandler||null,u={},c={},d=[],m=null,p=null,h=function(C){Object.keys(C).forEach(function(k){f(k)&&u[k]!==C[k]&&d.indexOf(k)===-1&&d.push(k)}),Object.keys(u).forEach(function(k){C[k]===void 0&&f(k)&&d.indexOf(k)===-1&&u[k]!==void 0&&d.push(k)}),m===null&&(m=setInterval(y,i)),u=C};function y(){if(d.length===0){m&&clearInterval(m),m=null;return}var S=d.shift(),C=r.reduce(function(k,_){return _.in(k,S,u)},u[S]);if(C!==void 0)try{c[S]=l(C)}catch(k){console.error("redux-persist/createPersistoid: error serializing state",k)}else delete c[S];d.length===0&&w()}function w(){Object.keys(c).forEach(function(S){u[S]===void 0&&delete c[S]}),p=a.setItem(o,l(c)).catch(v)}function f(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function v(S){s&&s(S)}var x=function(){for(;d.length!==0;)y();return p||Promise.resolve()};return{update:h,flush:x}}function GN(e){return JSON.stringify(e)}function YN(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Fm).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=qN,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,c){return c.out(u,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function qN(e){return JSON.parse(e)}function XN(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Fm).concat(e.key);return t.removeItem(n,KN)}function KN(e){}function C1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function On(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?C1(n,!0).forEach(function(r){ZN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ZN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QN(e,t){if(e==null)return{};var n=JN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function JN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var ez=5e3;function e_(e,t){var n=e.version!==void 0?e.version:BN;e.debug;var r=e.stateReconciler===void 0?UN:e.stateReconciler,i=e.getStoredState||YN,o=e.timeout!==void 0?e.timeout:ez,a=null,l=!1,s=!0,u=function(d){return d._persist.rehydrated&&a&&!s&&a.update(d),d};return function(c,d){var m=c||{},p=m._persist,h=QN(m,["_persist"]),y=h;if(d.type===Z2){var w=!1,f=function(E,M){w||(d.rehydrate(e.key,E,M),w=!0)};if(o&&setTimeout(function(){!w&&f(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=WN(e)),p)return On({},t(y,d),{_persist:p});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(_){var E=e.migrate||function(M,j){return Promise.resolve(M)};E(_,n).then(function(M){f(M)},function(M){f(void 0,M)})},function(_){f(void 0,_)}),On({},t(y,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===Q2)return l=!0,d.result(XN(e)),On({},t(y,d),{_persist:p});if(d.type===X2)return d.result(a&&a.flush()),On({},t(y,d),{_persist:p});if(d.type===K2)s=!0;else if(d.type===Nm){if(l)return On({},y,{_persist:On({},p,{rehydrated:!0})});if(d.key===e.key){var v=t(y,d),x=d.payload,S=r!==!1&&x!==void 0?r(x,c,v,e):v,C=On({},S,{_persist:On({},p,{rehydrated:!0})});return u(C)}}}if(!p)return t(c,d);var k=t(y,d);return k===y?c:u(On({},k,{_persist:p}))}}function E1(e){return rz(e)||nz(e)||tz()}function tz(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function nz(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function rz(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function k1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ip(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?k1(n,!0).forEach(function(r){iz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function iz(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var t_={registry:[],bootstrapped:!1},oz=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:t_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case J2:return Ip({},t,{registry:[].concat(E1(t.registry),[n.key])});case Nm:var r=t.registry.indexOf(n.key),i=E1(t.registry);return i.splice(r,1),Ip({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function az(e,t,n){var r=n||!1,i=Yh(oz,t_,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:J2,key:u})},a=function(u,c,d){var m={type:Nm,payload:c,err:d,key:u};e.dispatch(m),i.dispatch(m),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Ip({},i,{purge:function(){var u=[];return e.dispatch({type:Q2,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:X2,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){e.dispatch({type:K2})},persist:function(){e.dispatch({type:Z2,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var zm={},Bm={};Bm.__esModule=!0;Bm.default=uz;function tl(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?tl=function(n){return typeof n}:tl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},tl(e)}function Gd(){}var sz={getItem:Gd,setItem:Gd,removeItem:Gd};function lz(e){if((typeof self>"u"?"undefined":tl(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function uz(e){var t="".concat(e,"Storage");return lz(t)?self[t]:sz}zm.__esModule=!0;zm.default=fz;var cz=dz(Bm);function dz(e){return e&&e.__esModule?e:{default:e}}function fz(e){var t=(0,cz.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var Vm=void 0,pz=hz(zm);function hz(e){return e&&e.__esModule?e:{default:e}}var mz=(0,pz.default)("local");Vm=mz;const gz={key:"cart",storage:Vm},vz={key:"favorites",storage:Vm},yz=e_(gz,p4),xz=e_(vz,rD),n_=ZO({reducer:{cart:yz,favorites:xz},middleware:e=>e({serializableCheck:!1})});az(n_);Qd.createRoot(document.getElementById("root")).render(g.jsx(yP,{store:n_,children:g.jsx(q.StrictMode,{children:g.jsx(_C,{basename:"/Didiv/",children:g.jsx(zN,{})})})}));
