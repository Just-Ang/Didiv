function i_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Tt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var T1={exports:{}},tu={},P1={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=Symbol.for("react.element"),o_=Symbol.for("react.portal"),a_=Symbol.for("react.fragment"),s_=Symbol.for("react.strict_mode"),l_=Symbol.for("react.profiler"),u_=Symbol.for("react.provider"),c_=Symbol.for("react.context"),d_=Symbol.for("react.forward_ref"),f_=Symbol.for("react.suspense"),p_=Symbol.for("react.memo"),h_=Symbol.for("react.lazy"),Wm=Symbol.iterator;function m_(e){return e===null||typeof e!="object"?null:(e=Wm&&e[Wm]||e["@@iterator"],typeof e=="function"?e:null)}var O1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M1=Object.assign,j1={};function Ji(e,t,n){this.props=e,this.context=t,this.refs=j1,this.updater=n||O1}Ji.prototype.isReactComponent={};Ji.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ji.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $1(){}$1.prototype=Ji.prototype;function Lp(e,t,n){this.props=e,this.context=t,this.refs=j1,this.updater=n||O1}var Rp=Lp.prototype=new $1;Rp.constructor=Lp;M1(Rp,Ji.prototype);Rp.isPureReactComponent=!0;var Gm=Array.isArray,I1=Object.prototype.hasOwnProperty,Ap={current:null},D1={key:!0,ref:!0,__self:!0,__source:!0};function L1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)I1.call(t,r)&&!D1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ta,type:e,key:o,ref:a,props:i,_owner:Ap.current}}function g_(e,t){return{$$typeof:Ta,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ta}function v_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ym=/\/+/g;function bc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?v_(""+e.key):t.toString(36)}function Ts(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ta:case o_:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+bc(a,0):r,Gm(i)?(n="",e!=null&&(n=e.replace(Ym,"$&/")+"/"),Ts(i,t,n,"",function(u){return u})):i!=null&&(Fp(i)&&(i=g_(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ym,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Gm(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+bc(o,l);a+=Ts(o,t,n,s,i)}else if(s=m_(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+bc(o,l++),a+=Ts(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function qa(e,t,n){if(e==null)return e;var r=[],i=0;return Ts(e,r,"","",function(o){return t.call(n,o,i++)}),r}function y_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},Ps={transition:null},x_={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Ps,ReactCurrentOwner:Ap};re.Children={map:qa,forEach:function(e,t,n){qa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qa(e,function(){t++}),t},toArray:function(e){return qa(e,function(t){return t})||[]},only:function(e){if(!Fp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Ji;re.Fragment=a_;re.Profiler=l_;re.PureComponent=Lp;re.StrictMode=s_;re.Suspense=f_;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x_;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=M1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ap.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)I1.call(t,s)&&!D1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ta,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:c_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:u_,_context:e},e.Consumer=e};re.createElement=L1;re.createFactory=function(e){var t=L1.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:d_,render:e}};re.isValidElement=Fp;re.lazy=function(e){return{$$typeof:h_,_payload:{_status:-1,_result:e},_init:y_}};re.memo=function(e,t){return{$$typeof:p_,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Ps.transition;Ps.transition={};try{e()}finally{Ps.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return ht.current.useCallback(e,t)};re.useContext=function(e){return ht.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};re.useEffect=function(e,t){return ht.current.useEffect(e,t)};re.useId=function(){return ht.current.useId()};re.useImperativeHandle=function(e,t,n){return ht.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return ht.current.useMemo(e,t)};re.useReducer=function(e,t,n){return ht.current.useReducer(e,t,n)};re.useRef=function(e){return ht.current.useRef(e)};re.useState=function(e){return ht.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return ht.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return ht.current.useTransition()};re.version="18.2.0";P1.exports=re;var b=P1.exports;const q=Dp(b),Yd=i_({__proto__:null,default:q},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_=b,w_=Symbol.for("react.element"),S_=Symbol.for("react.fragment"),__=Object.prototype.hasOwnProperty,C_=b_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E_={key:!0,ref:!0,__self:!0,__source:!0};function R1(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)__.call(t,r)&&!E_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:w_,type:e,key:o,ref:a,props:i,_owner:C_.current}}tu.Fragment=S_;tu.jsx=R1;tu.jsxs=R1;T1.exports=tu;var g=T1.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zo.apply(this,arguments)}var sr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sr||(sr={}));const qm="popstate";function k_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return qd("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:tl(i)}return P_(t,n,null,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Np(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function T_(){return Math.random().toString(36).substr(2,8)}function Xm(e,t){return{usr:e.state,key:e.key,idx:t}}function qd(e,t,n,r){return n===void 0&&(n=null),Zo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?eo(t):t,{state:n,key:t&&t.key||r||T_()})}function tl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function eo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function P_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=sr.Pop,s=null,u=d();u==null&&(u=0,a.replaceState(Zo({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function c(){l=sr.Pop;let w=d(),p=w==null?null:w-u;u=w,s&&s({action:l,location:v.location,delta:p})}function y(w,p){l=sr.Push;let m=qd(v.location,w,p);n&&n(m,w),u=d()+1;let x=Xm(m,u),S=v.createHref(m);try{a.pushState(x,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}o&&s&&s({action:l,location:v.location,delta:1})}function f(w,p){l=sr.Replace;let m=qd(v.location,w,p);n&&n(m,w),u=d();let x=Xm(m,u),S=v.createHref(m);a.replaceState(x,"",S),o&&s&&s({action:l,location:v.location,delta:0})}function h(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:tl(w);return Le(p,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,p)}let v={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(qm,c),s=w,()=>{i.removeEventListener(qm,c),s=null}},createHref(w){return t(i,w)},createURL:h,encodeLocation(w){let p=h(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:y,replace:f,go(w){return a.go(w)}};return v}var Km;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Km||(Km={}));function O_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?eo(t):t,i=zp(r.pathname||"/",n);if(i==null)return null;let o=A1(e);M_(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=N_(o[l],V_(i));return a}function A1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Le(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=fr([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&(Le(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),A1(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:A_(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of F1(o.path))i(o,a,s)}),t}function F1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=F1(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function M_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:F_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const j_=/^:\w+$/,$_=3,I_=2,D_=1,L_=10,R_=-2,Qm=e=>e==="*";function A_(e,t){let n=e.split("/"),r=n.length;return n.some(Qm)&&(r+=R_),t&&(r+=I_),n.filter(i=>!Qm(i)).reduce((i,o)=>i+(j_.test(o)?$_:o===""?D_:L_),r)}function F_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function N_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=z_({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let c=l.route;o.push({params:r,pathname:fr([i,d.pathname]),pathnameBase:G_(fr([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=fr([i,d.pathnameBase]))}return o}function z_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=B_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let y=l[c]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}return u[d]=U_(l[c]||"",d),u},{}),pathname:o,pathnameBase:a,pattern:e}}function B_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Np(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function V_(e){try{return decodeURI(e)}catch(t){return Np(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function U_(e,t){try{return decodeURIComponent(e)}catch(n){return Np(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function zp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function H_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?eo(e):e;return{pathname:n?n.startsWith("/")?n:W_(n,t):t,search:Y_(r),hash:q_(i)}}function W_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function N1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function z1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=eo(e):(i=Zo({},e),Le(!i.pathname||!i.pathname.includes("?"),wc("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),wc("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),wc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let c=t.length-1;if(a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),c-=1;i.pathname=y.join("/")}l=c>=0?t[c]:"/"}let s=H_(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const fr=e=>e.join("/").replace(/\/\/+/g,"/"),G_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Y_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,q_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function X_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const B1=["post","put","patch","delete"];new Set(B1);const K_=["get",...B1];new Set(K_);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nl.apply(this,arguments)}const Bp=b.createContext(null),Q_=b.createContext(null),to=b.createContext(null),nu=b.createContext(null),qn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),V1=b.createContext(null);function Z_(e,t){let{relative:n}=t===void 0?{}:t;Pa()||Le(!1);let{basename:r,navigator:i}=b.useContext(to),{hash:o,pathname:a,search:l}=W1(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:fr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Pa(){return b.useContext(nu)!=null}function ni(){return Pa()||Le(!1),b.useContext(nu).location}function U1(e){b.useContext(to).static||b.useLayoutEffect(e)}function Er(){let{isDataRoute:e}=b.useContext(qn);return e?pC():J_()}function J_(){Pa()||Le(!1);let e=b.useContext(Bp),{basename:t,navigator:n}=b.useContext(to),{matches:r}=b.useContext(qn),{pathname:i}=ni(),o=JSON.stringify(N1(r).map(s=>s.pathnameBase)),a=b.useRef(!1);return U1(()=>{a.current=!0}),b.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let d=z1(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:fr([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}const eC=b.createContext(null);function tC(e){let t=b.useContext(qn).outlet;return t&&b.createElement(eC.Provider,{value:e},t)}function H1(){let{matches:e}=b.useContext(qn),t=e[e.length-1];return t?t.params:{}}function W1(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(qn),{pathname:i}=ni(),o=JSON.stringify(N1(r).map(a=>a.pathnameBase));return b.useMemo(()=>z1(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function nC(e,t){return rC(e,t)}function rC(e,t,n){Pa()||Le(!1);let{navigator:r}=b.useContext(to),{matches:i}=b.useContext(qn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=ni(),u;if(t){var d;let v=typeof t=="string"?eo(t):t;l==="/"||(d=v.pathname)!=null&&d.startsWith(l)||Le(!1),u=v}else u=s;let c=u.pathname||"/",y=l==="/"?c:c.slice(l.length)||"/",f=O_(e,{pathname:y}),h=lC(f&&f.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:fr([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:fr([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&h?b.createElement(nu.Provider,{value:{location:nl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:sr.Pop}},h):h}function iC(){let e=fC(),t=X_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const oC=b.createElement(iC,null);class aC extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(qn.Provider,{value:this.props.routeContext},b.createElement(V1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sC(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Bp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(qn.Provider,{value:t},r)}function lC(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Le(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let d=s.route.id?a==null?void 0:a[s.route.id]:null,c=null;n&&(c=s.route.errorElement||oC);let y=t.concat(o.slice(0,u+1)),f=()=>{let h;return d?h=c:s.route.Component?h=b.createElement(s.route.Component,null):s.route.element?h=s.route.element:h=l,b.createElement(sC,{match:s,routeContext:{outlet:l,matches:y,isDataRoute:n!=null},children:h})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?b.createElement(aC,{location:n.location,revalidation:n.revalidation,component:c,error:d,children:f(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):f()},null)}var G1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(G1||{}),rl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(rl||{});function uC(e){let t=b.useContext(Bp);return t||Le(!1),t}function cC(e){let t=b.useContext(Q_);return t||Le(!1),t}function dC(e){let t=b.useContext(qn);return t||Le(!1),t}function Y1(e){let t=dC(),n=t.matches[t.matches.length-1];return n.route.id||Le(!1),n.route.id}function fC(){var e;let t=b.useContext(V1),n=cC(rl.UseRouteError),r=Y1(rl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function pC(){let{router:e}=uC(G1.UseNavigateStable),t=Y1(rl.UseNavigateStable),n=b.useRef(!1);return U1(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,nl({fromRouteId:t},o)))},[e,t])}function hC(e){return tC(e.context)}function ut(e){Le(!1)}function mC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=sr.Pop,navigator:o,static:a=!1}=e;Pa()&&Le(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=eo(r));let{pathname:u="/",search:d="",hash:c="",state:y=null,key:f="default"}=r,h=b.useMemo(()=>{let v=zp(u,l);return v==null?null:{location:{pathname:v,search:d,hash:c,state:y,key:f},navigationType:i}},[l,u,d,c,y,f,i]);return h==null?null:b.createElement(to.Provider,{value:s},b.createElement(nu.Provider,{children:n,value:h}))}function gC(e){let{children:t,location:n}=e;return nC(Xd(t),n)}new Promise(()=>{});function Xd(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Xd(r.props.children,o));return}r.type!==ut&&Le(!1),!r.props.index||!r.props.children||Le(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Xd(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kd(){return Kd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kd.apply(this,arguments)}function vC(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function yC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xC(e,t){return e.button===0&&(!t||t==="_self")&&!yC(e)}function Qd(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function bC(e,t){let n=Qd(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const wC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],SC="startTransition",Zm=Yd[SC];function _C(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=k_({window:i,v5Compat:!0}));let a=o.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=b.useCallback(c=>{u&&Zm?Zm(()=>s(c)):s(c)},[s,u]);return b.useLayoutEffect(()=>a.listen(d),[a,d]),b.createElement(mC,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const CC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",EC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Me=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:d}=t,c=vC(t,wC),{basename:y}=b.useContext(to),f,h=!1;if(typeof u=="string"&&EC.test(u)&&(f=u,CC))try{let m=new URL(window.location.href),x=u.startsWith("//")?new URL(m.protocol+u):new URL(u),S=zp(x.pathname,y);x.origin===m.origin&&S!=null?u=S+x.search+x.hash:h=!0}catch{}let v=Z_(u,{relative:i}),w=kC(u,{replace:a,state:l,target:s,preventScrollReset:d,relative:i});function p(m){r&&r(m),m.defaultPrevented||w(m)}return b.createElement("a",Kd({},c,{href:f||v,onClick:h||o?r:p,ref:n,target:s}))});var Jm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Jm||(Jm={}));var eg;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(eg||(eg={}));function kC(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Er(),s=ni(),u=W1(e,{relative:a});return b.useCallback(d=>{if(xC(d,n)){d.preventDefault();let c=r!==void 0?r:tl(s)===tl(u);l(e,{replace:c,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}function TC(e){let t=b.useRef(Qd(e)),n=b.useRef(!1),r=ni(),i=b.useMemo(()=>bC(r.search,n.current?null:t.current),[r.search]),o=Er(),a=b.useCallback((l,s)=>{const u=Qd(typeof l=="function"?l(i):l);n.current=!0,o("?"+u,s)},[o,i]);return[i,a]}var Zd={},q1={exports:{}},Ft={},X1={exports:{}},K1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,$){var N=P.length;P.push($);e:for(;0<N;){var B=N-1>>>1,z=P[B];if(0<i(z,$))P[B]=$,P[N]=z,N=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var $=P[0],N=P.pop();if(N!==$){P[0]=N;e:for(var B=0,z=P.length,U=z>>>1;B<U;){var G=2*(B+1)-1,Y=P[G],X=G+1,ee=P[X];if(0>i(Y,N))X<z&&0>i(ee,Y)?(P[B]=ee,P[X]=N,B=X):(P[B]=Y,P[G]=N,B=G);else if(X<z&&0>i(ee,N))P[B]=ee,P[X]=N,B=X;else break e}}return $}function i(P,$){var N=P.sortIndex-$.sortIndex;return N!==0?N:P.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],d=1,c=null,y=3,f=!1,h=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=P)r(u),$.sortIndex=$.expirationTime,t(s,$);else break;$=n(u)}}function S(P){if(v=!1,x(P),!h)if(n(s)!==null)h=!0,R(C);else{var $=n(u);$!==null&&F(S,$.startTime-P)}}function C(P,$){h=!1,v&&(v=!1,p(E),E=-1),f=!0;var N=y;try{for(x($),c=n(s);c!==null&&(!(c.expirationTime>$)||P&&!D());){var B=c.callback;if(typeof B=="function"){c.callback=null,y=c.priorityLevel;var z=B(c.expirationTime<=$);$=e.unstable_now(),typeof z=="function"?c.callback=z:c===n(s)&&r(s),x($)}else r(s);c=n(s)}if(c!==null)var U=!0;else{var G=n(u);G!==null&&F(S,G.startTime-$),U=!1}return U}finally{c=null,y=N,f=!1}}var T=!1,_=null,E=-1,j=5,I=-1;function D(){return!(e.unstable_now()-I<j)}function O(){if(_!==null){var P=e.unstable_now();I=P;var $=!0;try{$=_(!0,P)}finally{$?M():(T=!1,_=null)}}else T=!1}var M;if(typeof m=="function")M=function(){m(O)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,A=L.port2;L.port1.onmessage=O,M=function(){A.postMessage(null)}}else M=function(){w(O,0)};function R(P){_=P,T||(T=!0,M())}function F(P,$){E=w(function(){P(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){h||f||(h=!0,R(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(y){case 1:case 2:case 3:var $=3;break;default:$=y}var N=y;y=$;try{return P()}finally{y=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,$){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var N=y;y=P;try{return $()}finally{y=N}},e.unstable_scheduleCallback=function(P,$,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,P){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=N+z,P={id:d++,callback:$,priorityLevel:P,startTime:N,expirationTime:z,sortIndex:-1},N>B?(P.sortIndex=N,t(u,P),n(s)===null&&P===n(u)&&(v?(p(E),E=-1):v=!0,F(S,N-B))):(P.sortIndex=z,t(s,P),h||f||(h=!0,R(C))),P},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(P){var $=y;return function(){var N=y;y=$;try{return P.apply(this,arguments)}finally{y=N}}}})(K1);X1.exports=K1;var PC=X1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q1=b,Rt=PC;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Z1=new Set,Jo={};function ri(e,t){Ai(e,t),Ai(e+"Capture",t)}function Ai(e,t){for(Jo[e]=t,e=0;e<t.length;e++)Z1.add(t[e])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jd=Object.prototype.hasOwnProperty,OC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tg={},ng={};function MC(e){return Jd.call(ng,e)?!0:Jd.call(tg,e)?!1:OC.test(e)?ng[e]=!0:(tg[e]=!0,!1)}function jC(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $C(e,t,n,r){if(t===null||typeof t>"u"||jC(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function mt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ze[e]=new mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ze[t]=new mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ze[e]=new mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ze[e]=new mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ze[e]=new mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ze[e]=new mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ze[e]=new mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ze[e]=new mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ze[e]=new mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vp=/[\-:]([a-z])/g;function Up(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vp,Up);Ze[t]=new mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vp,Up);Ze[t]=new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vp,Up);Ze[t]=new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ze[e]=new mt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ze[e]=new mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hp(e,t,n,r){var i=Ze.hasOwnProperty(t)?Ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($C(t,n,i,r)&&(n=null),r||i===null?MC(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xn=Q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),vi=Symbol.for("react.portal"),yi=Symbol.for("react.fragment"),Wp=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),J1=Symbol.for("react.provider"),ey=Symbol.for("react.context"),Gp=Symbol.for("react.forward_ref"),tf=Symbol.for("react.suspense"),nf=Symbol.for("react.suspense_list"),Yp=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),ty=Symbol.for("react.offscreen"),rg=Symbol.iterator;function go(e){return e===null||typeof e!="object"?null:(e=rg&&e[rg]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,Sc;function Mo(e){if(Sc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sc=t&&t[1]||""}return`
`+Sc+e}var _c=!1;function Cc(e,t){if(!e||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mo(e):""}function IC(e){switch(e.tag){case 5:return Mo(e.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return e=Cc(e.type,!1),e;case 11:return e=Cc(e.type.render,!1),e;case 1:return e=Cc(e.type,!0),e;default:return""}}function rf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yi:return"Fragment";case vi:return"Portal";case ef:return"Profiler";case Wp:return"StrictMode";case tf:return"Suspense";case nf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ey:return(e.displayName||"Context")+".Consumer";case J1:return(e._context.displayName||"Context")+".Provider";case Gp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yp:return t=e.displayName||null,t!==null?t:rf(e.type)||"Memo";case rr:t=e._payload,e=e._init;try{return rf(e(t))}catch{}}return null}function DC(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rf(t);case 8:return t===Wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ny(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function LC(e){var t=ny(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ka(e){e._valueTracker||(e._valueTracker=LC(e))}function ry(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ny(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function of(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ig(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Sr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function iy(e,t){t=t.checked,t!=null&&Hp(e,"checked",t,!1)}function af(e,t){iy(e,t);var n=Sr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sf(e,t.type,n):t.hasOwnProperty("defaultValue")&&sf(e,t.type,Sr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function og(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sf(e,t,n){(t!=="number"||il(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jo=Array.isArray;function Oi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Sr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function lf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ag(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(jo(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sr(n)}}function oy(e,t){var n=Sr(t.value),r=Sr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ay(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ay(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qa,sy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ea(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RC=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(e){RC.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),No[t]=No[e]})});function ly(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||No.hasOwnProperty(e)&&No[e]?(""+t).trim():t+"px"}function uy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ly(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var AC=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cf(e,t){if(t){if(AC[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function df(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=null;function qp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pf=null,Mi=null,ji=null;function lg(e){if(e=ja(e)){if(typeof pf!="function")throw Error(V(280));var t=e.stateNode;t&&(t=su(t),pf(e.stateNode,e.type,t))}}function cy(e){Mi?ji?ji.push(e):ji=[e]:Mi=e}function dy(){if(Mi){var e=Mi,t=ji;if(ji=Mi=null,lg(e),t)for(e=0;e<t.length;e++)lg(t[e])}}function fy(e,t){return e(t)}function py(){}var Ec=!1;function hy(e,t,n){if(Ec)return e(t,n);Ec=!0;try{return fy(e,t,n)}finally{Ec=!1,(Mi!==null||ji!==null)&&(py(),dy())}}function ta(e,t){var n=e.stateNode;if(n===null)return null;var r=su(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var hf=!1;if(Vn)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){hf=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{hf=!1}function FC(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var zo=!1,ol=null,al=!1,mf=null,NC={onError:function(e){zo=!0,ol=e}};function zC(e,t,n,r,i,o,a,l,s){zo=!1,ol=null,FC.apply(NC,arguments)}function BC(e,t,n,r,i,o,a,l,s){if(zC.apply(this,arguments),zo){if(zo){var u=ol;zo=!1,ol=null}else throw Error(V(198));al||(al=!0,mf=u)}}function ii(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function my(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ug(e){if(ii(e)!==e)throw Error(V(188))}function VC(e){var t=e.alternate;if(!t){if(t=ii(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ug(i),e;if(o===r)return ug(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function gy(e){return e=VC(e),e!==null?vy(e):null}function vy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vy(e);if(t!==null)return t;e=e.sibling}return null}var yy=Rt.unstable_scheduleCallback,cg=Rt.unstable_cancelCallback,UC=Rt.unstable_shouldYield,HC=Rt.unstable_requestPaint,Oe=Rt.unstable_now,WC=Rt.unstable_getCurrentPriorityLevel,Xp=Rt.unstable_ImmediatePriority,xy=Rt.unstable_UserBlockingPriority,sl=Rt.unstable_NormalPriority,GC=Rt.unstable_LowPriority,by=Rt.unstable_IdlePriority,ru=null,_n=null;function YC(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(ru,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:KC,qC=Math.log,XC=Math.LN2;function KC(e){return e>>>=0,e===0?32:31-(qC(e)/XC|0)|0}var Za=64,Ja=4194304;function $o(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ll(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=$o(l):(o&=a,o!==0&&(r=$o(o)))}else a=n&~i,a!==0?r=$o(a):o!==0&&(r=$o(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-an(t),i=1<<n,r|=e[n],t&=~i;return r}function QC(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZC(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-an(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=QC(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function gf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wy(){var e=Za;return Za<<=1,!(Za&4194240)&&(Za=64),e}function kc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=n}function JC(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-an(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Kp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var he=0;function Sy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _y,Qp,Cy,Ey,ky,vf=!1,es=[],pr=null,hr=null,mr=null,na=new Map,ra=new Map,or=[],eE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dg(e,t){switch(e){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":na.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(t.pointerId)}}function yo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ja(t),t!==null&&Qp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function tE(e,t,n,r,i){switch(t){case"focusin":return pr=yo(pr,e,t,n,r,i),!0;case"dragenter":return hr=yo(hr,e,t,n,r,i),!0;case"mouseover":return mr=yo(mr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return na.set(o,yo(na.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ra.set(o,yo(ra.get(o)||null,e,t,n,r,i)),!0}return!1}function Ty(e){var t=Nr(e.target);if(t!==null){var n=ii(t);if(n!==null){if(t=n.tag,t===13){if(t=my(n),t!==null){e.blockedOn=t,ky(e.priority,function(){Cy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Os(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ff=r,n.target.dispatchEvent(r),ff=null}else return t=ja(n),t!==null&&Qp(t),e.blockedOn=n,!1;t.shift()}return!0}function fg(e,t,n){Os(e)&&n.delete(t)}function nE(){vf=!1,pr!==null&&Os(pr)&&(pr=null),hr!==null&&Os(hr)&&(hr=null),mr!==null&&Os(mr)&&(mr=null),na.forEach(fg),ra.forEach(fg)}function xo(e,t){e.blockedOn===t&&(e.blockedOn=null,vf||(vf=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,nE)))}function ia(e){function t(i){return xo(i,e)}if(0<es.length){xo(es[0],e);for(var n=1;n<es.length;n++){var r=es[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pr!==null&&xo(pr,e),hr!==null&&xo(hr,e),mr!==null&&xo(mr,e),na.forEach(t),ra.forEach(t),n=0;n<or.length;n++)r=or[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)Ty(n),n.blockedOn===null&&or.shift()}var $i=Xn.ReactCurrentBatchConfig,ul=!0;function rE(e,t,n,r){var i=he,o=$i.transition;$i.transition=null;try{he=1,Zp(e,t,n,r)}finally{he=i,$i.transition=o}}function iE(e,t,n,r){var i=he,o=$i.transition;$i.transition=null;try{he=4,Zp(e,t,n,r)}finally{he=i,$i.transition=o}}function Zp(e,t,n,r){if(ul){var i=yf(e,t,n,r);if(i===null)Rc(e,t,r,cl,n),dg(e,r);else if(tE(i,e,t,n,r))r.stopPropagation();else if(dg(e,r),t&4&&-1<eE.indexOf(e)){for(;i!==null;){var o=ja(i);if(o!==null&&_y(o),o=yf(e,t,n,r),o===null&&Rc(e,t,r,cl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Rc(e,t,r,null,n)}}var cl=null;function yf(e,t,n,r){if(cl=null,e=qp(r),e=Nr(e),e!==null)if(t=ii(e),t===null)e=null;else if(n=t.tag,n===13){if(e=my(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return cl=e,null}function Py(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WC()){case Xp:return 1;case xy:return 4;case sl:case GC:return 16;case by:return 536870912;default:return 16}default:return 16}}var lr=null,Jp=null,Ms=null;function Oy(){if(Ms)return Ms;var e,t=Jp,n=t.length,r,i="value"in lr?lr.value:lr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ms=i.slice(e,1<r?1-r:void 0)}function js(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ts(){return!0}function pg(){return!1}function Nt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ts:pg,this.isPropagationStopped=pg,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),t}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eh=Nt(no),Ma=ke({},no,{view:0,detail:0}),oE=Nt(Ma),Tc,Pc,bo,iu=ke({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:th,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bo&&(bo&&e.type==="mousemove"?(Tc=e.screenX-bo.screenX,Pc=e.screenY-bo.screenY):Pc=Tc=0,bo=e),Tc)},movementY:function(e){return"movementY"in e?e.movementY:Pc}}),hg=Nt(iu),aE=ke({},iu,{dataTransfer:0}),sE=Nt(aE),lE=ke({},Ma,{relatedTarget:0}),Oc=Nt(lE),uE=ke({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),cE=Nt(uE),dE=ke({},no,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fE=Nt(dE),pE=ke({},no,{data:0}),mg=Nt(pE),hE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gE[e])?!!t[e]:!1}function th(){return vE}var yE=ke({},Ma,{key:function(e){if(e.key){var t=hE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=js(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:th,charCode:function(e){return e.type==="keypress"?js(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?js(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xE=Nt(yE),bE=ke({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gg=Nt(bE),wE=ke({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:th}),SE=Nt(wE),_E=ke({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),CE=Nt(_E),EE=ke({},iu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kE=Nt(EE),TE=[9,13,27,32],nh=Vn&&"CompositionEvent"in window,Bo=null;Vn&&"documentMode"in document&&(Bo=document.documentMode);var PE=Vn&&"TextEvent"in window&&!Bo,My=Vn&&(!nh||Bo&&8<Bo&&11>=Bo),vg=String.fromCharCode(32),yg=!1;function jy(e,t){switch(e){case"keyup":return TE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $y(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xi=!1;function OE(e,t){switch(e){case"compositionend":return $y(t);case"keypress":return t.which!==32?null:(yg=!0,vg);case"textInput":return e=t.data,e===vg&&yg?null:e;default:return null}}function ME(e,t){if(xi)return e==="compositionend"||!nh&&jy(e,t)?(e=Oy(),Ms=Jp=lr=null,xi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return My&&t.locale!=="ko"?null:t.data;default:return null}}var jE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jE[e.type]:t==="textarea"}function Iy(e,t,n,r){cy(r),t=dl(t,"onChange"),0<t.length&&(n=new eh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vo=null,oa=null;function $E(e){Hy(e,0)}function ou(e){var t=Si(e);if(ry(t))return e}function IE(e,t){if(e==="change")return t}var Dy=!1;if(Vn){var Mc;if(Vn){var jc="oninput"in document;if(!jc){var bg=document.createElement("div");bg.setAttribute("oninput","return;"),jc=typeof bg.oninput=="function"}Mc=jc}else Mc=!1;Dy=Mc&&(!document.documentMode||9<document.documentMode)}function wg(){Vo&&(Vo.detachEvent("onpropertychange",Ly),oa=Vo=null)}function Ly(e){if(e.propertyName==="value"&&ou(oa)){var t=[];Iy(t,oa,e,qp(e)),hy($E,t)}}function DE(e,t,n){e==="focusin"?(wg(),Vo=t,oa=n,Vo.attachEvent("onpropertychange",Ly)):e==="focusout"&&wg()}function LE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ou(oa)}function RE(e,t){if(e==="click")return ou(t)}function AE(e,t){if(e==="input"||e==="change")return ou(t)}function FE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dn=typeof Object.is=="function"?Object.is:FE;function aa(e,t){if(dn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jd.call(t,i)||!dn(e[i],t[i]))return!1}return!0}function Sg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _g(e,t){var n=Sg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sg(n)}}function Ry(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ry(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ay(){for(var e=window,t=il();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=il(e.document)}return t}function rh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function NE(e){var t=Ay(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ry(n.ownerDocument.documentElement,n)){if(r!==null&&rh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=_g(n,o);var a=_g(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zE=Vn&&"documentMode"in document&&11>=document.documentMode,bi=null,xf=null,Uo=null,bf=!1;function Cg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bf||bi==null||bi!==il(r)||(r=bi,"selectionStart"in r&&rh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Uo&&aa(Uo,r)||(Uo=r,r=dl(xf,"onSelect"),0<r.length&&(t=new eh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bi)))}function ns(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wi={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionend:ns("Transition","TransitionEnd")},$c={},Fy={};Vn&&(Fy=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function au(e){if($c[e])return $c[e];if(!wi[e])return e;var t=wi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fy)return $c[e]=t[n];return e}var Ny=au("animationend"),zy=au("animationiteration"),By=au("animationstart"),Vy=au("transitionend"),Uy=new Map,Eg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(e,t){Uy.set(e,t),ri(t,[e])}for(var Ic=0;Ic<Eg.length;Ic++){var Dc=Eg[Ic],BE=Dc.toLowerCase(),VE=Dc[0].toUpperCase()+Dc.slice(1);kr(BE,"on"+VE)}kr(Ny,"onAnimationEnd");kr(zy,"onAnimationIteration");kr(By,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(Vy,"onTransitionEnd");Ai("onMouseEnter",["mouseout","mouseover"]);Ai("onMouseLeave",["mouseout","mouseover"]);Ai("onPointerEnter",["pointerout","pointerover"]);Ai("onPointerLeave",["pointerout","pointerover"]);ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function kg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,BC(r,t,void 0,e),e.currentTarget=null}function Hy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;kg(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;kg(i,l,u),o=s}}}if(al)throw e=mf,al=!1,mf=null,e}function ve(e,t){var n=t[Ef];n===void 0&&(n=t[Ef]=new Set);var r=e+"__bubble";n.has(r)||(Wy(t,e,2,!1),n.add(r))}function Lc(e,t,n){var r=0;t&&(r|=4),Wy(n,e,r,t)}var rs="_reactListening"+Math.random().toString(36).slice(2);function sa(e){if(!e[rs]){e[rs]=!0,Z1.forEach(function(n){n!=="selectionchange"&&(UE.has(n)||Lc(n,!1,e),Lc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rs]||(t[rs]=!0,Lc("selectionchange",!1,t))}}function Wy(e,t,n,r){switch(Py(t)){case 1:var i=rE;break;case 4:i=iE;break;default:i=Zp}n=i.bind(null,t,n,e),i=void 0,!hf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Rc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Nr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}hy(function(){var u=o,d=qp(n),c=[];e:{var y=Uy.get(e);if(y!==void 0){var f=eh,h=e;switch(e){case"keypress":if(js(n)===0)break e;case"keydown":case"keyup":f=xE;break;case"focusin":h="focus",f=Oc;break;case"focusout":h="blur",f=Oc;break;case"beforeblur":case"afterblur":f=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=hg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=sE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=SE;break;case Ny:case zy:case By:f=cE;break;case Vy:f=CE;break;case"scroll":f=oE;break;case"wheel":f=kE;break;case"copy":case"cut":case"paste":f=fE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=gg}var v=(t&4)!==0,w=!v&&e==="scroll",p=v?y!==null?y+"Capture":null:y;v=[];for(var m=u,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,p!==null&&(S=ta(m,p),S!=null&&v.push(la(m,S,x)))),w)break;m=m.return}0<v.length&&(y=new f(y,h,null,n,d),c.push({event:y,listeners:v}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",y&&n!==ff&&(h=n.relatedTarget||n.fromElement)&&(Nr(h)||h[Un]))break e;if((f||y)&&(y=d.window===d?d:(y=d.ownerDocument)?y.defaultView||y.parentWindow:window,f?(h=n.relatedTarget||n.toElement,f=u,h=h?Nr(h):null,h!==null&&(w=ii(h),h!==w||h.tag!==5&&h.tag!==6)&&(h=null)):(f=null,h=u),f!==h)){if(v=hg,S="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=gg,S="onPointerLeave",p="onPointerEnter",m="pointer"),w=f==null?y:Si(f),x=h==null?y:Si(h),y=new v(S,m+"leave",f,n,d),y.target=w,y.relatedTarget=x,S=null,Nr(d)===u&&(v=new v(p,m+"enter",h,n,d),v.target=x,v.relatedTarget=w,S=v),w=S,f&&h)t:{for(v=f,p=h,m=0,x=v;x;x=si(x))m++;for(x=0,S=p;S;S=si(S))x++;for(;0<m-x;)v=si(v),m--;for(;0<x-m;)p=si(p),x--;for(;m--;){if(v===p||p!==null&&v===p.alternate)break t;v=si(v),p=si(p)}v=null}else v=null;f!==null&&Tg(c,y,f,v,!1),h!==null&&w!==null&&Tg(c,w,h,v,!0)}}e:{if(y=u?Si(u):window,f=y.nodeName&&y.nodeName.toLowerCase(),f==="select"||f==="input"&&y.type==="file")var C=IE;else if(xg(y))if(Dy)C=AE;else{C=LE;var T=DE}else(f=y.nodeName)&&f.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(C=RE);if(C&&(C=C(e,u))){Iy(c,C,n,d);break e}T&&T(e,y,u),e==="focusout"&&(T=y._wrapperState)&&T.controlled&&y.type==="number"&&sf(y,"number",y.value)}switch(T=u?Si(u):window,e){case"focusin":(xg(T)||T.contentEditable==="true")&&(bi=T,xf=u,Uo=null);break;case"focusout":Uo=xf=bi=null;break;case"mousedown":bf=!0;break;case"contextmenu":case"mouseup":case"dragend":bf=!1,Cg(c,n,d);break;case"selectionchange":if(zE)break;case"keydown":case"keyup":Cg(c,n,d)}var _;if(nh)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else xi?jy(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(My&&n.locale!=="ko"&&(xi||E!=="onCompositionStart"?E==="onCompositionEnd"&&xi&&(_=Oy()):(lr=d,Jp="value"in lr?lr.value:lr.textContent,xi=!0)),T=dl(u,E),0<T.length&&(E=new mg(E,e,null,n,d),c.push({event:E,listeners:T}),_?E.data=_:(_=$y(n),_!==null&&(E.data=_)))),(_=PE?OE(e,n):ME(e,n))&&(u=dl(u,"onBeforeInput"),0<u.length&&(d=new mg("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=_))}Hy(c,t)})}function la(e,t,n){return{instance:e,listener:t,currentTarget:n}}function dl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ta(e,n),o!=null&&r.unshift(la(e,o,i)),o=ta(e,t),o!=null&&r.push(la(e,o,i))),e=e.return}return r}function si(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=ta(n,o),s!=null&&a.unshift(la(n,s,l))):i||(s=ta(n,o),s!=null&&a.push(la(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var HE=/\r\n?/g,WE=/\u0000|\uFFFD/g;function Pg(e){return(typeof e=="string"?e:""+e).replace(HE,`
`).replace(WE,"")}function is(e,t,n){if(t=Pg(t),Pg(e)!==t&&n)throw Error(V(425))}function fl(){}var wf=null,Sf=null;function _f(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cf=typeof setTimeout=="function"?setTimeout:void 0,GE=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,YE=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(e){return Og.resolve(null).then(e).catch(qE)}:Cf;function qE(e){setTimeout(function(){throw e})}function Ac(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ia(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ia(t)}function gr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Mg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ro=Math.random().toString(36).slice(2),wn="__reactFiber$"+ro,ua="__reactProps$"+ro,Un="__reactContainer$"+ro,Ef="__reactEvents$"+ro,XE="__reactListeners$"+ro,KE="__reactHandles$"+ro;function Nr(e){var t=e[wn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Un]||n[wn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mg(e);e!==null;){if(n=e[wn])return n;e=Mg(e)}return t}e=n,n=e.parentNode}return null}function ja(e){return e=e[wn]||e[Un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Si(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function su(e){return e[ua]||null}var kf=[],_i=-1;function Tr(e){return{current:e}}function xe(e){0>_i||(e.current=kf[_i],kf[_i]=null,_i--)}function ge(e,t){_i++,kf[_i]=e.current,e.current=t}var _r={},at=Tr(_r),St=Tr(!1),Gr=_r;function Fi(e,t){var n=e.type.contextTypes;if(!n)return _r;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _t(e){return e=e.childContextTypes,e!=null}function pl(){xe(St),xe(at)}function jg(e,t,n){if(at.current!==_r)throw Error(V(168));ge(at,t),ge(St,n)}function Gy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,DC(e)||"Unknown",i));return ke({},n,r)}function hl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_r,Gr=at.current,ge(at,e),ge(St,St.current),!0}function $g(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=Gy(e,t,Gr),r.__reactInternalMemoizedMergedChildContext=e,xe(St),xe(at),ge(at,e)):xe(St),ge(St,n)}var Dn=null,lu=!1,Fc=!1;function Yy(e){Dn===null?Dn=[e]:Dn.push(e)}function QE(e){lu=!0,Yy(e)}function Pr(){if(!Fc&&Dn!==null){Fc=!0;var e=0,t=he;try{var n=Dn;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dn=null,lu=!1}catch(i){throw Dn!==null&&(Dn=Dn.slice(e+1)),yy(Xp,Pr),i}finally{he=t,Fc=!1}}return null}var Ci=[],Ei=0,ml=null,gl=0,Vt=[],Ut=0,Yr=null,An=1,Fn="";function Ir(e,t){Ci[Ei++]=gl,Ci[Ei++]=ml,ml=e,gl=t}function qy(e,t,n){Vt[Ut++]=An,Vt[Ut++]=Fn,Vt[Ut++]=Yr,Yr=e;var r=An;e=Fn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var o=32-an(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,An=1<<32-an(t)+i|n<<i|r,Fn=o+e}else An=1<<o|n<<i|r,Fn=e}function ih(e){e.return!==null&&(Ir(e,1),qy(e,1,0))}function oh(e){for(;e===ml;)ml=Ci[--Ei],Ci[Ei]=null,gl=Ci[--Ei],Ci[Ei]=null;for(;e===Yr;)Yr=Vt[--Ut],Vt[Ut]=null,Fn=Vt[--Ut],Vt[Ut]=null,An=Vt[--Ut],Vt[Ut]=null}var Dt=null,$t=null,_e=!1,rn=null;function Xy(e,t){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ig(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Dt=e,$t=gr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Dt=e,$t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yr!==null?{id:An,overflow:Fn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Dt=e,$t=null,!0):!1;default:return!1}}function Tf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pf(e){if(_e){var t=$t;if(t){var n=t;if(!Ig(e,t)){if(Tf(e))throw Error(V(418));t=gr(n.nextSibling);var r=Dt;t&&Ig(e,t)?Xy(r,n):(e.flags=e.flags&-4097|2,_e=!1,Dt=e)}}else{if(Tf(e))throw Error(V(418));e.flags=e.flags&-4097|2,_e=!1,Dt=e}}}function Dg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Dt=e}function os(e){if(e!==Dt)return!1;if(!_e)return Dg(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_f(e.type,e.memoizedProps)),t&&(t=$t)){if(Tf(e))throw Ky(),Error(V(418));for(;t;)Xy(e,t),t=gr(t.nextSibling)}if(Dg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$t=gr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$t=null}}else $t=Dt?gr(e.stateNode.nextSibling):null;return!0}function Ky(){for(var e=$t;e;)e=gr(e.nextSibling)}function Ni(){$t=Dt=null,_e=!1}function ah(e){rn===null?rn=[e]:rn.push(e)}var ZE=Xn.ReactCurrentBatchConfig;function en(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var vl=Tr(null),yl=null,ki=null,sh=null;function lh(){sh=ki=yl=null}function uh(e){var t=vl.current;xe(vl),e._currentValue=t}function Of(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ii(e,t){yl=e,sh=ki=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wt=!0),e.firstContext=null)}function Gt(e){var t=e._currentValue;if(sh!==e)if(e={context:e,memoizedValue:t,next:null},ki===null){if(yl===null)throw Error(V(308));ki=e,yl.dependencies={lanes:0,firstContext:e}}else ki=ki.next=e;return t}var zr=null;function ch(e){zr===null?zr=[e]:zr.push(e)}function Qy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ch(t)):(n.next=i.next,i.next=n),t.interleaved=n,Hn(e,r)}function Hn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ir=!1;function dh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Hn(e,n)}return i=r.interleaved,i===null?(t.next=t,ch(r)):(t.next=i.next,i.next=t),r.interleaved=t,Hn(e,n)}function $s(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kp(e,n)}}function Lg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xl(e,t,n,r){var i=e.updateQueue;ir=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;a=0,d=u=s=null,l=o;do{var y=l.lane,f=l.eventTime;if((r&y)===y){d!==null&&(d=d.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,v=l;switch(y=t,f=n,v.tag){case 1:if(h=v.payload,typeof h=="function"){c=h.call(f,c,y);break e}c=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=v.payload,y=typeof h=="function"?h.call(f,c,y):h,y==null)break e;c=ke({},c,y);break e;case 2:ir=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else f={eventTime:f,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=f,s=c):d=d.next=f,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(d===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Xr|=a,e.lanes=a,e.memoizedState=c}}function Rg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Jy=new Q1.Component().refs;function Mf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var uu={isMounted:function(e){return(e=e._reactInternals)?ii(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),i=xr(e),o=Nn(r,i);o.payload=t,n!=null&&(o.callback=n),t=vr(e,o,i),t!==null&&(sn(t,e,i,r),$s(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),i=xr(e),o=Nn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=vr(e,o,i),t!==null&&(sn(t,e,i,r),$s(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=xr(e),i=Nn(n,r);i.tag=2,t!=null&&(i.callback=t),t=vr(e,i,r),t!==null&&(sn(t,e,r,n),$s(t,e,r))}};function Ag(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!aa(n,r)||!aa(i,o):!0}function ex(e,t,n){var r=!1,i=_r,o=t.contextType;return typeof o=="object"&&o!==null?o=Gt(o):(i=_t(t)?Gr:at.current,r=t.contextTypes,o=(r=r!=null)?Fi(e,i):_r),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=uu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Fg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&uu.enqueueReplaceState(t,t.state,null)}function jf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Jy,dh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Gt(o):(o=_t(t)?Gr:at.current,i.context=Fi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Mf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&uu.enqueueReplaceState(i,i.state,null),xl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function wo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Jy&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function as(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ng(e){var t=e._init;return t(e._payload)}function tx(e){function t(p,m){if(e){var x=p.deletions;x===null?(p.deletions=[m],p.flags|=16):x.push(m)}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=br(p,m),p.index=0,p.sibling=null,p}function o(p,m,x){return p.index=x,e?(x=p.alternate,x!==null?(x=x.index,x<m?(p.flags|=2,m):x):(p.flags|=2,m)):(p.flags|=1048576,m)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,m,x,S){return m===null||m.tag!==6?(m=Wc(x,p.mode,S),m.return=p,m):(m=i(m,x),m.return=p,m)}function s(p,m,x,S){var C=x.type;return C===yi?d(p,m,x.props.children,S,x.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rr&&Ng(C)===m.type)?(S=i(m,x.props),S.ref=wo(p,m,x),S.return=p,S):(S=Fs(x.type,x.key,x.props,null,p.mode,S),S.ref=wo(p,m,x),S.return=p,S)}function u(p,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Gc(x,p.mode,S),m.return=p,m):(m=i(m,x.children||[]),m.return=p,m)}function d(p,m,x,S,C){return m===null||m.tag!==7?(m=Hr(x,p.mode,S,C),m.return=p,m):(m=i(m,x),m.return=p,m)}function c(p,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Wc(""+m,p.mode,x),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Xa:return x=Fs(m.type,m.key,m.props,null,p.mode,x),x.ref=wo(p,null,m),x.return=p,x;case vi:return m=Gc(m,p.mode,x),m.return=p,m;case rr:var S=m._init;return c(p,S(m._payload),x)}if(jo(m)||go(m))return m=Hr(m,p.mode,x,null),m.return=p,m;as(p,m)}return null}function y(p,m,x,S){var C=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:l(p,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Xa:return x.key===C?s(p,m,x,S):null;case vi:return x.key===C?u(p,m,x,S):null;case rr:return C=x._init,y(p,m,C(x._payload),S)}if(jo(x)||go(x))return C!==null?null:d(p,m,x,S,null);as(p,x)}return null}function f(p,m,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(x)||null,l(m,p,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Xa:return p=p.get(S.key===null?x:S.key)||null,s(m,p,S,C);case vi:return p=p.get(S.key===null?x:S.key)||null,u(m,p,S,C);case rr:var T=S._init;return f(p,m,x,T(S._payload),C)}if(jo(S)||go(S))return p=p.get(x)||null,d(m,p,S,C,null);as(m,S)}return null}function h(p,m,x,S){for(var C=null,T=null,_=m,E=m=0,j=null;_!==null&&E<x.length;E++){_.index>E?(j=_,_=null):j=_.sibling;var I=y(p,_,x[E],S);if(I===null){_===null&&(_=j);break}e&&_&&I.alternate===null&&t(p,_),m=o(I,m,E),T===null?C=I:T.sibling=I,T=I,_=j}if(E===x.length)return n(p,_),_e&&Ir(p,E),C;if(_===null){for(;E<x.length;E++)_=c(p,x[E],S),_!==null&&(m=o(_,m,E),T===null?C=_:T.sibling=_,T=_);return _e&&Ir(p,E),C}for(_=r(p,_);E<x.length;E++)j=f(_,p,E,x[E],S),j!==null&&(e&&j.alternate!==null&&_.delete(j.key===null?E:j.key),m=o(j,m,E),T===null?C=j:T.sibling=j,T=j);return e&&_.forEach(function(D){return t(p,D)}),_e&&Ir(p,E),C}function v(p,m,x,S){var C=go(x);if(typeof C!="function")throw Error(V(150));if(x=C.call(x),x==null)throw Error(V(151));for(var T=C=null,_=m,E=m=0,j=null,I=x.next();_!==null&&!I.done;E++,I=x.next()){_.index>E?(j=_,_=null):j=_.sibling;var D=y(p,_,I.value,S);if(D===null){_===null&&(_=j);break}e&&_&&D.alternate===null&&t(p,_),m=o(D,m,E),T===null?C=D:T.sibling=D,T=D,_=j}if(I.done)return n(p,_),_e&&Ir(p,E),C;if(_===null){for(;!I.done;E++,I=x.next())I=c(p,I.value,S),I!==null&&(m=o(I,m,E),T===null?C=I:T.sibling=I,T=I);return _e&&Ir(p,E),C}for(_=r(p,_);!I.done;E++,I=x.next())I=f(_,p,E,I.value,S),I!==null&&(e&&I.alternate!==null&&_.delete(I.key===null?E:I.key),m=o(I,m,E),T===null?C=I:T.sibling=I,T=I);return e&&_.forEach(function(O){return t(p,O)}),_e&&Ir(p,E),C}function w(p,m,x,S){if(typeof x=="object"&&x!==null&&x.type===yi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Xa:e:{for(var C=x.key,T=m;T!==null;){if(T.key===C){if(C=x.type,C===yi){if(T.tag===7){n(p,T.sibling),m=i(T,x.props.children),m.return=p,p=m;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rr&&Ng(C)===T.type){n(p,T.sibling),m=i(T,x.props),m.ref=wo(p,T,x),m.return=p,p=m;break e}n(p,T);break}else t(p,T);T=T.sibling}x.type===yi?(m=Hr(x.props.children,p.mode,S,x.key),m.return=p,p=m):(S=Fs(x.type,x.key,x.props,null,p.mode,S),S.ref=wo(p,m,x),S.return=p,p=S)}return a(p);case vi:e:{for(T=x.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(p,m.sibling),m=i(m,x.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else t(p,m);m=m.sibling}m=Gc(x,p.mode,S),m.return=p,p=m}return a(p);case rr:return T=x._init,w(p,m,T(x._payload),S)}if(jo(x))return h(p,m,x,S);if(go(x))return v(p,m,x,S);as(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(p,m.sibling),m=i(m,x),m.return=p,p=m):(n(p,m),m=Wc(x,p.mode,S),m.return=p,p=m),a(p)):n(p,m)}return w}var zi=tx(!0),nx=tx(!1),$a={},Cn=Tr($a),ca=Tr($a),da=Tr($a);function Br(e){if(e===$a)throw Error(V(174));return e}function fh(e,t){switch(ge(da,t),ge(ca,e),ge(Cn,$a),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:uf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=uf(t,e)}xe(Cn),ge(Cn,t)}function Bi(){xe(Cn),xe(ca),xe(da)}function rx(e){Br(da.current);var t=Br(Cn.current),n=uf(t,e.type);t!==n&&(ge(ca,e),ge(Cn,n))}function ph(e){ca.current===e&&(xe(Cn),xe(ca))}var Ce=Tr(0);function bl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nc=[];function hh(){for(var e=0;e<Nc.length;e++)Nc[e]._workInProgressVersionPrimary=null;Nc.length=0}var Is=Xn.ReactCurrentDispatcher,zc=Xn.ReactCurrentBatchConfig,qr=0,Ee=null,Fe=null,We=null,wl=!1,Ho=!1,fa=0,JE=0;function Je(){throw Error(V(321))}function mh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dn(e[n],t[n]))return!1;return!0}function gh(e,t,n,r,i,o){if(qr=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Is.current=e===null||e.memoizedState===null?rk:ik,e=n(r,i),Ho){o=0;do{if(Ho=!1,fa=0,25<=o)throw Error(V(301));o+=1,We=Fe=null,t.updateQueue=null,Is.current=ok,e=n(r,i)}while(Ho)}if(Is.current=Sl,t=Fe!==null&&Fe.next!==null,qr=0,We=Fe=Ee=null,wl=!1,t)throw Error(V(300));return e}function vh(){var e=fa!==0;return fa=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ee.memoizedState=We=e:We=We.next=e,We}function Yt(){if(Fe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=We===null?Ee.memoizedState:We.next;if(t!==null)We=t,Fe=e;else{if(e===null)throw Error(V(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?Ee.memoizedState=We=e:We=We.next=e}return We}function pa(e,t){return typeof t=="function"?t(e):t}function Bc(e){var t=Yt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var d=u.lane;if((qr&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=c,a=r):s=s.next=c,Ee.lanes|=d,Xr|=d}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,dn(r,t.memoizedState)||(wt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,Xr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vc(e){var t=Yt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);dn(o,t.memoizedState)||(wt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ix(){}function ox(e,t){var n=Ee,r=Yt(),i=t(),o=!dn(r.memoizedState,i);if(o&&(r.memoizedState=i,wt=!0),r=r.queue,yh(lx.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,ha(9,sx.bind(null,n,r,i,t),void 0,null),Ge===null)throw Error(V(349));qr&30||ax(n,t,i)}return i}function ax(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sx(e,t,n,r){t.value=n,t.getSnapshot=r,ux(t)&&cx(e)}function lx(e,t,n){return n(function(){ux(t)&&cx(e)})}function ux(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dn(e,n)}catch{return!0}}function cx(e){var t=Hn(e,1);t!==null&&sn(t,e,1,-1)}function zg(e){var t=yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},t.queue=e,e=e.dispatch=nk.bind(null,Ee,e),[t.memoizedState,e]}function ha(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function dx(){return Yt().memoizedState}function Ds(e,t,n,r){var i=yn();Ee.flags|=e,i.memoizedState=ha(1|t,n,void 0,r===void 0?null:r)}function cu(e,t,n,r){var i=Yt();r=r===void 0?null:r;var o=void 0;if(Fe!==null){var a=Fe.memoizedState;if(o=a.destroy,r!==null&&mh(r,a.deps)){i.memoizedState=ha(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=ha(1|t,n,o,r)}function Bg(e,t){return Ds(8390656,8,e,t)}function yh(e,t){return cu(2048,8,e,t)}function fx(e,t){return cu(4,2,e,t)}function px(e,t){return cu(4,4,e,t)}function hx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mx(e,t,n){return n=n!=null?n.concat([e]):null,cu(4,4,hx.bind(null,t,e),n)}function xh(){}function gx(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vx(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yx(e,t,n){return qr&21?(dn(n,t)||(n=wy(),Ee.lanes|=n,Xr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=n)}function ek(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=zc.transition;zc.transition={};try{e(!1),t()}finally{he=n,zc.transition=r}}function xx(){return Yt().memoizedState}function tk(e,t,n){var r=xr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bx(e))wx(t,n);else if(n=Qy(e,t,n,r),n!==null){var i=ft();sn(n,e,r,i),Sx(n,t,r)}}function nk(e,t,n){var r=xr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bx(e))wx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,dn(l,a)){var s=t.interleaved;s===null?(i.next=i,ch(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Qy(e,t,i,r),n!==null&&(i=ft(),sn(n,e,r,i),Sx(n,t,r))}}function bx(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function wx(e,t){Ho=wl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kp(e,n)}}var Sl={readContext:Gt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},rk={readContext:Gt,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:Gt,useEffect:Bg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ds(4194308,4,hx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ds(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ds(4,2,e,t)},useMemo:function(e,t){var n=yn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tk.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:zg,useDebugValue:xh,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=zg(!1),t=e[0];return e=ek.bind(null,e[1]),yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=yn();if(_e){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Ge===null)throw Error(V(349));qr&30||ax(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bg(lx.bind(null,r,o,e),[e]),r.flags|=2048,ha(9,sx.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yn(),t=Ge.identifierPrefix;if(_e){var n=Fn,r=An;n=(r&~(1<<32-an(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=JE++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ik={readContext:Gt,useCallback:gx,useContext:Gt,useEffect:yh,useImperativeHandle:mx,useInsertionEffect:fx,useLayoutEffect:px,useMemo:vx,useReducer:Bc,useRef:dx,useState:function(){return Bc(pa)},useDebugValue:xh,useDeferredValue:function(e){var t=Yt();return yx(t,Fe.memoizedState,e)},useTransition:function(){var e=Bc(pa)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:ix,useSyncExternalStore:ox,useId:xx,unstable_isNewReconciler:!1},ok={readContext:Gt,useCallback:gx,useContext:Gt,useEffect:yh,useImperativeHandle:mx,useInsertionEffect:fx,useLayoutEffect:px,useMemo:vx,useReducer:Vc,useRef:dx,useState:function(){return Vc(pa)},useDebugValue:xh,useDeferredValue:function(e){var t=Yt();return Fe===null?t.memoizedState=e:yx(t,Fe.memoizedState,e)},useTransition:function(){var e=Vc(pa)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:ix,useSyncExternalStore:ox,useId:xx,unstable_isNewReconciler:!1};function Vi(e,t){try{var n="",r=t;do n+=IC(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Uc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $f(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ak=typeof WeakMap=="function"?WeakMap:Map;function _x(e,t,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Cl||(Cl=!0,Vf=r),$f(e,t)},n}function Cx(e,t,n){n=Nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){$f(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){$f(e,t),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Vg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ak;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=bk.bind(null,e,t,n),t.then(e,e))}function Ug(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hg(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nn(-1,1),t.tag=2,vr(n,t,1))),n.lanes|=1),e)}var sk=Xn.ReactCurrentOwner,wt=!1;function ct(e,t,n,r){t.child=e===null?nx(t,null,n,r):zi(t,e.child,n,r)}function Wg(e,t,n,r,i){n=n.render;var o=t.ref;return Ii(t,i),r=gh(e,t,n,r,o,i),n=vh(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(_e&&n&&ih(t),t.flags|=1,ct(e,t,r,i),t.child)}function Gg(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Th(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ex(e,t,o,r,i)):(e=Fs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(a,r)&&e.ref===t.ref)return Wn(e,t,i)}return t.flags|=1,e=br(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ex(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(aa(o,r)&&e.ref===t.ref)if(wt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(wt=!0);else return t.lanes=e.lanes,Wn(e,t,i)}return If(e,t,n,r,i)}function kx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Pi,Mt),Mt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Pi,Mt),Mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ge(Pi,Mt),Mt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ge(Pi,Mt),Mt|=r;return ct(e,t,i,n),t.child}function Tx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function If(e,t,n,r,i){var o=_t(n)?Gr:at.current;return o=Fi(t,o),Ii(t,i),n=gh(e,t,n,r,o,i),r=vh(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(_e&&r&&ih(t),t.flags|=1,ct(e,t,n,i),t.child)}function Yg(e,t,n,r,i){if(_t(n)){var o=!0;hl(t)}else o=!1;if(Ii(t,i),t.stateNode===null)Ls(e,t),ex(t,n,r),jf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gt(u):(u=_t(n)?Gr:at.current,u=Fi(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Fg(t,a,r,u),ir=!1;var y=t.memoizedState;a.state=y,xl(t,r,a,i),s=t.memoizedState,l!==r||y!==s||St.current||ir?(typeof d=="function"&&(Mf(t,n,d,r),s=t.memoizedState),(l=ir||Ag(t,n,l,r,y,s,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Zy(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:en(t.type,l),a.props=u,c=t.pendingProps,y=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Gt(s):(s=_t(n)?Gr:at.current,s=Fi(t,s));var f=n.getDerivedStateFromProps;(d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==c||y!==s)&&Fg(t,a,r,s),ir=!1,y=t.memoizedState,a.state=y,xl(t,r,a,i);var h=t.memoizedState;l!==c||y!==h||St.current||ir?(typeof f=="function"&&(Mf(t,n,f,r),h=t.memoizedState),(u=ir||Ag(t,n,u,r,y,h,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return Df(e,t,n,r,o,i)}function Df(e,t,n,r,i,o){Tx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&$g(t,n,!1),Wn(e,t,o);r=t.stateNode,sk.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=zi(t,e.child,null,o),t.child=zi(t,null,l,o)):ct(e,t,l,o),t.memoizedState=r.state,i&&$g(t,n,!0),t.child}function Px(e){var t=e.stateNode;t.pendingContext?jg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jg(e,t.context,!1),fh(e,t.containerInfo)}function qg(e,t,n,r,i){return Ni(),ah(i),t.flags|=256,ct(e,t,n,r),t.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function Rf(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ox(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(Ce,i&1),e===null)return Pf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=pu(a,r,0,null),e=Hr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Rf(n),t.memoizedState=Lf,e):bh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return lk(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=br(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=br(l,o):(o=Hr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Rf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Lf,r}return o=e.child,e=o.sibling,r=br(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bh(e,t){return t=pu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ss(e,t,n,r){return r!==null&&ah(r),zi(t,e.child,null,n),e=bh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lk(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Uc(Error(V(422))),ss(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=pu({mode:"visible",children:r.children},i,0,null),o=Hr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&zi(t,e.child,null,a),t.child.memoizedState=Rf(a),t.memoizedState=Lf,o);if(!(t.mode&1))return ss(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=Uc(o,r,void 0),ss(e,t,a,r)}if(l=(a&e.childLanes)!==0,wt||l){if(r=Ge,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Hn(e,i),sn(r,e,i,-1))}return kh(),r=Uc(Error(V(421))),ss(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=wk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,$t=gr(i.nextSibling),Dt=t,_e=!0,rn=null,e!==null&&(Vt[Ut++]=An,Vt[Ut++]=Fn,Vt[Ut++]=Yr,An=e.id,Fn=e.overflow,Yr=t),t=bh(t,r.children),t.flags|=4096,t)}function Xg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Of(e.return,t,n)}function Hc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Mx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ct(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xg(e,n,t);else if(e.tag===19)Xg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Hc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Hc(t,!0,n,null,o);break;case"together":Hc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ls(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=br(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=br(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uk(e,t,n){switch(t.tag){case 3:Px(t),Ni();break;case 5:rx(t);break;case 1:_t(t.type)&&hl(t);break;case 4:fh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(vl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?Ox(e,t,n):(ge(Ce,Ce.current&1),e=Wn(e,t,n),e!==null?e.sibling:null);ge(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Mx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,kx(e,t,n)}return Wn(e,t,n)}var jx,Af,$x,Ix;jx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Af=function(){};$x=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Br(Cn.current);var o=null;switch(n){case"input":i=of(e,i),r=of(e,r),o=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),o=[];break;case"textarea":i=lf(e,i),r=lf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fl)}cf(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ve("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ix=function(e,t,n,r){n!==r&&(t.flags|=4)};function So(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ck(e,t,n){var r=t.pendingProps;switch(oh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return _t(t.type)&&pl(),et(t),null;case 3:return r=t.stateNode,Bi(),xe(St),xe(at),hh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(os(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rn!==null&&(Wf(rn),rn=null))),Af(e,t),et(t),null;case 5:ph(t);var i=Br(da.current);if(n=t.type,e!==null&&t.stateNode!=null)$x(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return et(t),null}if(e=Br(Cn.current),os(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[wn]=t,r[ua]=o,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Io.length;i++)ve(Io[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":ig(r,o),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ve("invalid",r);break;case"textarea":ag(r,o),ve("invalid",r)}cf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&is(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&is(r.textContent,l,e),i=["children",""+l]):Jo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ve("scroll",r)}switch(n){case"input":Ka(r),og(r,o,!0);break;case"textarea":Ka(r),sg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=fl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ay(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[wn]=t,e[ua]=r,jx(e,t,!1,!1),t.stateNode=e;e:{switch(a=df(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<Io.length;i++)ve(Io[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":ig(e,r),i=of(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ve("invalid",e);break;case"textarea":ag(e,r),i=lf(e,r),ve("invalid",e);break;default:i=r}cf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?uy(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&sy(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ea(e,s):typeof s=="number"&&ea(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Jo.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ve("scroll",e):s!=null&&Hp(e,o,s,a))}switch(n){case"input":Ka(e),og(e,r,!1);break;case"textarea":Ka(e),sg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Oi(e,!!r.multiple,o,!1):r.defaultValue!=null&&Oi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return et(t),null;case 6:if(e&&t.stateNode!=null)Ix(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Br(da.current),Br(Cn.current),os(t)){if(r=t.stateNode,n=t.memoizedProps,r[wn]=t,(o=r.nodeValue!==n)&&(e=Dt,e!==null))switch(e.tag){case 3:is(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&is(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=t,t.stateNode=r}return et(t),null;case 13:if(xe(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&$t!==null&&t.mode&1&&!(t.flags&128))Ky(),Ni(),t.flags|=98560,o=!1;else if(o=os(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[wn]=t}else Ni(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;et(t),o=!1}else rn!==null&&(Wf(rn),rn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?ze===0&&(ze=3):kh())),t.updateQueue!==null&&(t.flags|=4),et(t),null);case 4:return Bi(),Af(e,t),e===null&&sa(t.stateNode.containerInfo),et(t),null;case 10:return uh(t.type._context),et(t),null;case 17:return _t(t.type)&&pl(),et(t),null;case 19:if(xe(Ce),o=t.memoizedState,o===null)return et(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)So(o,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=bl(e),a!==null){for(t.flags|=128,So(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&Oe()>Ui&&(t.flags|=128,r=!0,So(o,!1),t.lanes=4194304)}else{if(!r)if(e=bl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),So(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!_e)return et(t),null}else 2*Oe()-o.renderingStartTime>Ui&&n!==1073741824&&(t.flags|=128,r=!0,So(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Oe(),t.sibling=null,n=Ce.current,ge(Ce,r?n&1|2:n&1),t):(et(t),null);case 22:case 23:return Eh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Mt&1073741824&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function dk(e,t){switch(oh(t),t.tag){case 1:return _t(t.type)&&pl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bi(),xe(St),xe(at),hh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ph(t),null;case 13:if(xe(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Ce),null;case 4:return Bi(),null;case 10:return uh(t.type._context),null;case 22:case 23:return Eh(),null;case 24:return null;default:return null}}var ls=!1,it=!1,fk=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ti(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Ff(e,t,n){try{n()}catch(r){Te(e,t,r)}}var Kg=!1;function pk(e,t){if(wf=ul,e=Ay(),rh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,d=0,c=e,y=null;t:for(;;){for(var f;c!==n||i!==0&&c.nodeType!==3||(l=a+i),c!==o||r!==0&&c.nodeType!==3||(s=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(f=c.firstChild)!==null;)y=c,c=f;for(;;){if(c===e)break t;if(y===n&&++u===i&&(l=a),y===o&&++d===r&&(s=a),(f=c.nextSibling)!==null)break;c=y,y=c.parentNode}c=f}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sf={focusedElem:e,selectionRange:n},ul=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var v=h.memoizedProps,w=h.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:en(t.type,v),w);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){Te(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return h=Kg,Kg=!1,h}function Wo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ff(t,n,o)}i=i.next}while(i!==r)}}function du(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Dx(e){var t=e.alternate;t!==null&&(e.alternate=null,Dx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wn],delete t[ua],delete t[Ef],delete t[XE],delete t[KE])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lx(e){return e.tag===5||e.tag===3||e.tag===4}function Qg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fl));else if(r!==4&&(e=e.child,e!==null))for(zf(e,t,n),e=e.sibling;e!==null;)zf(e,t,n),e=e.sibling}function Bf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bf(e,t,n),e=e.sibling;e!==null;)Bf(e,t,n),e=e.sibling}var Xe=null,tn=!1;function tr(e,t,n){for(n=n.child;n!==null;)Rx(e,t,n),n=n.sibling}function Rx(e,t,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(ru,n)}catch{}switch(n.tag){case 5:it||Ti(n,t);case 6:var r=Xe,i=tn;Xe=null,tr(e,t,n),Xe=r,tn=i,Xe!==null&&(tn?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(tn?(e=Xe,n=n.stateNode,e.nodeType===8?Ac(e.parentNode,n):e.nodeType===1&&Ac(e,n),ia(e)):Ac(Xe,n.stateNode));break;case 4:r=Xe,i=tn,Xe=n.stateNode.containerInfo,tn=!0,tr(e,t,n),Xe=r,tn=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ff(n,t,a),i=i.next}while(i!==r)}tr(e,t,n);break;case 1:if(!it&&(Ti(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,t,l)}tr(e,t,n);break;case 21:tr(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,tr(e,t,n),it=r):tr(e,t,n);break;default:tr(e,t,n)}}function Zg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fk),t.forEach(function(r){var i=Sk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,tn=!1;break e;case 3:Xe=l.stateNode.containerInfo,tn=!0;break e;case 4:Xe=l.stateNode.containerInfo,tn=!0;break e}l=l.return}if(Xe===null)throw Error(V(160));Rx(o,a,i),Xe=null,tn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ax(t,e),t=t.sibling}function Ax(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),gn(e),r&4){try{Wo(3,e,e.return),du(3,e)}catch(v){Te(e,e.return,v)}try{Wo(5,e,e.return)}catch(v){Te(e,e.return,v)}}break;case 1:Kt(t,e),gn(e),r&512&&n!==null&&Ti(n,n.return);break;case 5:if(Kt(t,e),gn(e),r&512&&n!==null&&Ti(n,n.return),e.flags&32){var i=e.stateNode;try{ea(i,"")}catch(v){Te(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&iy(i,o),df(l,a);var u=df(l,o);for(a=0;a<s.length;a+=2){var d=s[a],c=s[a+1];d==="style"?uy(i,c):d==="dangerouslySetInnerHTML"?sy(i,c):d==="children"?ea(i,c):Hp(i,d,c,u)}switch(l){case"input":af(i,o);break;case"textarea":oy(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;f!=null?Oi(i,!!o.multiple,f,!1):y!==!!o.multiple&&(o.defaultValue!=null?Oi(i,!!o.multiple,o.defaultValue,!0):Oi(i,!!o.multiple,o.multiple?[]:"",!1))}i[ua]=o}catch(v){Te(e,e.return,v)}}break;case 6:if(Kt(t,e),gn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Te(e,e.return,v)}}break;case 3:if(Kt(t,e),gn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ia(t.containerInfo)}catch(v){Te(e,e.return,v)}break;case 4:Kt(t,e),gn(e);break;case 13:Kt(t,e),gn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(_h=Oe())),r&4&&Zg(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||d,Kt(t,e),it=u):Kt(t,e),gn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(H=e,d=e.child;d!==null;){for(c=H=d;H!==null;){switch(y=H,f=y.child,y.tag){case 0:case 11:case 14:case 15:Wo(4,y,y.return);break;case 1:Ti(y,y.return);var h=y.stateNode;if(typeof h.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(v){Te(r,n,v)}}break;case 5:Ti(y,y.return);break;case 22:if(y.memoizedState!==null){e0(c);continue}}f!==null?(f.return=y,H=f):e0(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=c.stateNode,s=c.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ly("display",a))}catch(v){Te(e,e.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){Te(e,e.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Kt(t,e),gn(e),r&4&&Zg(e);break;case 21:break;default:Kt(t,e),gn(e)}}function gn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lx(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ea(i,""),r.flags&=-33);var o=Qg(e);Bf(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Qg(e);zf(e,l,a);break;default:throw Error(V(161))}}catch(s){Te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hk(e,t,n){H=e,Fx(e)}function Fx(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ls;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||it;l=ls;var u=it;if(ls=a,(it=s)&&!u)for(H=i;H!==null;)a=H,s=a.child,a.tag===22&&a.memoizedState!==null?t0(i):s!==null?(s.return=a,H=s):t0(i);for(;o!==null;)H=o,Fx(o),o=o.sibling;H=i,ls=l,it=u}Jg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,H=o):Jg(e)}}function Jg(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||du(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:en(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Rg(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Rg(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ia(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}it||t.flags&512&&Nf(t)}catch(y){Te(t,t.return,y)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function e0(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function t0(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{du(4,t)}catch(s){Te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Te(t,i,s)}}var o=t.return;try{Nf(t)}catch(s){Te(t,o,s)}break;case 5:var a=t.return;try{Nf(t)}catch(s){Te(t,a,s)}}}catch(s){Te(t,t.return,s)}if(t===e){H=null;break}var l=t.sibling;if(l!==null){l.return=t.return,H=l;break}H=t.return}}var mk=Math.ceil,_l=Xn.ReactCurrentDispatcher,wh=Xn.ReactCurrentOwner,Wt=Xn.ReactCurrentBatchConfig,se=0,Ge=null,De=null,Qe=0,Mt=0,Pi=Tr(0),ze=0,ma=null,Xr=0,fu=0,Sh=0,Go=null,bt=null,_h=0,Ui=1/0,jn=null,Cl=!1,Vf=null,yr=null,us=!1,ur=null,El=0,Yo=0,Uf=null,Rs=-1,As=0;function ft(){return se&6?Oe():Rs!==-1?Rs:Rs=Oe()}function xr(e){return e.mode&1?se&2&&Qe!==0?Qe&-Qe:ZE.transition!==null?(As===0&&(As=wy()),As):(e=he,e!==0||(e=window.event,e=e===void 0?16:Py(e.type)),e):1}function sn(e,t,n,r){if(50<Yo)throw Yo=0,Uf=null,Error(V(185));Oa(e,n,r),(!(se&2)||e!==Ge)&&(e===Ge&&(!(se&2)&&(fu|=n),ze===4&&ar(e,Qe)),Ct(e,r),n===1&&se===0&&!(t.mode&1)&&(Ui=Oe()+500,lu&&Pr()))}function Ct(e,t){var n=e.callbackNode;ZC(e,t);var r=ll(e,e===Ge?Qe:0);if(r===0)n!==null&&cg(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cg(n),t===1)e.tag===0?QE(n0.bind(null,e)):Yy(n0.bind(null,e)),YE(function(){!(se&6)&&Pr()}),n=null;else{switch(Sy(r)){case 1:n=Xp;break;case 4:n=xy;break;case 16:n=sl;break;case 536870912:n=by;break;default:n=sl}n=Gx(n,Nx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nx(e,t){if(Rs=-1,As=0,se&6)throw Error(V(327));var n=e.callbackNode;if(Di()&&e.callbackNode!==n)return null;var r=ll(e,e===Ge?Qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=kl(e,r);else{t=r;var i=se;se|=2;var o=Bx();(Ge!==e||Qe!==t)&&(jn=null,Ui=Oe()+500,Ur(e,t));do try{yk();break}catch(l){zx(e,l)}while(1);lh(),_l.current=o,se=i,De!==null?t=0:(Ge=null,Qe=0,t=ze)}if(t!==0){if(t===2&&(i=gf(e),i!==0&&(r=i,t=Hf(e,i))),t===1)throw n=ma,Ur(e,0),ar(e,r),Ct(e,Oe()),n;if(t===6)ar(e,r);else{if(i=e.current.alternate,!(r&30)&&!gk(i)&&(t=kl(e,r),t===2&&(o=gf(e),o!==0&&(r=o,t=Hf(e,o))),t===1))throw n=ma,Ur(e,0),ar(e,r),Ct(e,Oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Dr(e,bt,jn);break;case 3:if(ar(e,r),(r&130023424)===r&&(t=_h+500-Oe(),10<t)){if(ll(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Cf(Dr.bind(null,e,bt,jn),t);break}Dr(e,bt,jn);break;case 4:if(ar(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-an(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mk(r/1960))-r,10<r){e.timeoutHandle=Cf(Dr.bind(null,e,bt,jn),r);break}Dr(e,bt,jn);break;case 5:Dr(e,bt,jn);break;default:throw Error(V(329))}}}return Ct(e,Oe()),e.callbackNode===n?Nx.bind(null,e):null}function Hf(e,t){var n=Go;return e.current.memoizedState.isDehydrated&&(Ur(e,t).flags|=256),e=kl(e,t),e!==2&&(t=bt,bt=n,t!==null&&Wf(t)),e}function Wf(e){bt===null?bt=e:bt.push.apply(bt,e)}function gk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!dn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ar(e,t){for(t&=~Sh,t&=~fu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function n0(e){if(se&6)throw Error(V(327));Di();var t=ll(e,0);if(!(t&1))return Ct(e,Oe()),null;var n=kl(e,t);if(e.tag!==0&&n===2){var r=gf(e);r!==0&&(t=r,n=Hf(e,r))}if(n===1)throw n=ma,Ur(e,0),ar(e,t),Ct(e,Oe()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dr(e,bt,jn),Ct(e,Oe()),null}function Ch(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Ui=Oe()+500,lu&&Pr())}}function Kr(e){ur!==null&&ur.tag===0&&!(se&6)&&Di();var t=se;se|=1;var n=Wt.transition,r=he;try{if(Wt.transition=null,he=1,e)return e()}finally{he=r,Wt.transition=n,se=t,!(se&6)&&Pr()}}function Eh(){Mt=Pi.current,xe(Pi)}function Ur(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,GE(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(oh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pl();break;case 3:Bi(),xe(St),xe(at),hh();break;case 5:ph(r);break;case 4:Bi();break;case 13:xe(Ce);break;case 19:xe(Ce);break;case 10:uh(r.type._context);break;case 22:case 23:Eh()}n=n.return}if(Ge=e,De=e=br(e.current,null),Qe=Mt=t,ze=0,ma=null,Sh=fu=Xr=0,bt=Go=null,zr!==null){for(t=0;t<zr.length;t++)if(n=zr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}zr=null}return e}function zx(e,t){do{var n=De;try{if(lh(),Is.current=Sl,wl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wl=!1}if(qr=0,We=Fe=Ee=null,Ho=!1,fa=0,wh.current=null,n===null||n.return===null){ze=1,ma=t,De=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Qe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var y=d.alternate;y?(d.updateQueue=y.updateQueue,d.memoizedState=y.memoizedState,d.lanes=y.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=Ug(a);if(f!==null){f.flags&=-257,Hg(f,a,l,o,t),f.mode&1&&Vg(o,u,t),t=f,s=u;var h=t.updateQueue;if(h===null){var v=new Set;v.add(s),t.updateQueue=v}else h.add(s);break e}else{if(!(t&1)){Vg(o,u,t),kh();break e}s=Error(V(426))}}else if(_e&&l.mode&1){var w=Ug(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Hg(w,a,l,o,t),ah(Vi(s,l));break e}}o=s=Vi(s,l),ze!==4&&(ze=2),Go===null?Go=[o]:Go.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=_x(o,s,t);Lg(o,p);break e;case 1:l=s;var m=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(yr===null||!yr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Cx(o,l,t);Lg(o,S);break e}}o=o.return}while(o!==null)}Ux(n)}catch(C){t=C,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function Bx(){var e=_l.current;return _l.current=Sl,e===null?Sl:e}function kh(){(ze===0||ze===3||ze===2)&&(ze=4),Ge===null||!(Xr&268435455)&&!(fu&268435455)||ar(Ge,Qe)}function kl(e,t){var n=se;se|=2;var r=Bx();(Ge!==e||Qe!==t)&&(jn=null,Ur(e,t));do try{vk();break}catch(i){zx(e,i)}while(1);if(lh(),se=n,_l.current=r,De!==null)throw Error(V(261));return Ge=null,Qe=0,ze}function vk(){for(;De!==null;)Vx(De)}function yk(){for(;De!==null&&!UC();)Vx(De)}function Vx(e){var t=Wx(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,t===null?Ux(e):De=t,wh.current=null}function Ux(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=dk(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,De=null;return}}else if(n=ck(n,t,Mt),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);ze===0&&(ze=5)}function Dr(e,t,n){var r=he,i=Wt.transition;try{Wt.transition=null,he=1,xk(e,t,n,r)}finally{Wt.transition=i,he=r}return null}function xk(e,t,n,r){do Di();while(ur!==null);if(se&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(JC(e,o),e===Ge&&(De=Ge=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||us||(us=!0,Gx(sl,function(){return Di(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Wt.transition,Wt.transition=null;var a=he;he=1;var l=se;se|=4,wh.current=null,pk(e,n),Ax(n,e),NE(Sf),ul=!!wf,Sf=wf=null,e.current=n,hk(n),HC(),se=l,he=a,Wt.transition=o}else e.current=n;if(us&&(us=!1,ur=e,El=i),o=e.pendingLanes,o===0&&(yr=null),YC(n.stateNode),Ct(e,Oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cl)throw Cl=!1,e=Vf,Vf=null,e;return El&1&&e.tag!==0&&Di(),o=e.pendingLanes,o&1?e===Uf?Yo++:(Yo=0,Uf=e):Yo=0,Pr(),null}function Di(){if(ur!==null){var e=Sy(El),t=Wt.transition,n=he;try{if(Wt.transition=null,he=16>e?16:e,ur===null)var r=!1;else{if(e=ur,ur=null,El=0,se&6)throw Error(V(331));var i=se;for(se|=4,H=e.current;H!==null;){var o=H,a=o.child;if(H.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(H=u;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:Wo(8,d,o)}var c=d.child;if(c!==null)c.return=d,H=c;else for(;H!==null;){d=H;var y=d.sibling,f=d.return;if(Dx(d),d===u){H=null;break}if(y!==null){y.return=f,H=y;break}H=f}}}var h=o.alternate;if(h!==null){var v=h.child;if(v!==null){h.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}H=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,H=a;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Wo(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,H=p;break e}H=o.return}}var m=e.current;for(H=m;H!==null;){a=H;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,H=x;else e:for(a=m;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:du(9,l)}}catch(C){Te(l,l.return,C)}if(l===a){H=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,H=S;break e}H=l.return}}if(se=i,Pr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(ru,e)}catch{}r=!0}return r}finally{he=n,Wt.transition=t}}return!1}function r0(e,t,n){t=Vi(n,t),t=_x(e,t,1),e=vr(e,t,1),t=ft(),e!==null&&(Oa(e,1,t),Ct(e,t))}function Te(e,t,n){if(e.tag===3)r0(e,e,n);else for(;t!==null;){if(t.tag===3){r0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){e=Vi(n,e),e=Cx(t,e,1),t=vr(t,e,1),e=ft(),t!==null&&(Oa(t,1,e),Ct(t,e));break}}t=t.return}}function bk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(Qe&n)===n&&(ze===4||ze===3&&(Qe&130023424)===Qe&&500>Oe()-_h?Ur(e,0):Sh|=n),Ct(e,t)}function Hx(e,t){t===0&&(e.mode&1?(t=Ja,Ja<<=1,!(Ja&130023424)&&(Ja=4194304)):t=1);var n=ft();e=Hn(e,t),e!==null&&(Oa(e,t,n),Ct(e,n))}function wk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hx(e,n)}function Sk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Hx(e,n)}var Wx;Wx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||St.current)wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return wt=!1,uk(e,t,n);wt=!!(e.flags&131072)}else wt=!1,_e&&t.flags&1048576&&qy(t,gl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ls(e,t),e=t.pendingProps;var i=Fi(t,at.current);Ii(t,n),i=gh(null,t,r,e,i,n);var o=vh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_t(r)?(o=!0,hl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dh(t),i.updater=uu,t.stateNode=i,i._reactInternals=t,jf(t,r,e,n),t=Df(null,t,r,!0,o,n)):(t.tag=0,_e&&o&&ih(t),ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ls(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ck(r),e=en(r,e),i){case 0:t=If(null,t,r,e,n);break e;case 1:t=Yg(null,t,r,e,n);break e;case 11:t=Wg(null,t,r,e,n);break e;case 14:t=Gg(null,t,r,en(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),If(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Yg(e,t,r,i,n);case 3:e:{if(Px(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Zy(e,t),xl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Vi(Error(V(423)),t),t=qg(e,t,r,n,i);break e}else if(r!==i){i=Vi(Error(V(424)),t),t=qg(e,t,r,n,i);break e}else for($t=gr(t.stateNode.containerInfo.firstChild),Dt=t,_e=!0,rn=null,n=nx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ni(),r===i){t=Wn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return rx(t),e===null&&Pf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,_f(r,i)?a=null:o!==null&&_f(r,o)&&(t.flags|=32),Tx(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&Pf(t),null;case 13:return Ox(e,t,n);case 4:return fh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zi(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Wg(e,t,r,i,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ge(vl,r._currentValue),r._currentValue=a,o!==null)if(dn(o.value,a)){if(o.children===i.children&&!St.current){t=Wn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Nn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Of(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Of(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ii(t,n),i=Gt(i),r=r(i),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,i=en(r,t.pendingProps),i=en(r.type,i),Gg(e,t,r,i,n);case 15:return Ex(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Ls(e,t),t.tag=1,_t(r)?(e=!0,hl(t)):e=!1,Ii(t,n),ex(t,r,i),jf(t,r,i,n),Df(null,t,r,!0,e,n);case 19:return Mx(e,t,n);case 22:return kx(e,t,n)}throw Error(V(156,t.tag))};function Gx(e,t){return yy(e,t)}function _k(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,n,r){return new _k(e,t,n,r)}function Th(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ck(e){if(typeof e=="function")return Th(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gp)return 11;if(e===Yp)return 14}return 2}function br(e,t){var n=e.alternate;return n===null?(n=Ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Th(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case yi:return Hr(n.children,i,o,t);case Wp:a=8,i|=8;break;case ef:return e=Ht(12,n,t,i|2),e.elementType=ef,e.lanes=o,e;case tf:return e=Ht(13,n,t,i),e.elementType=tf,e.lanes=o,e;case nf:return e=Ht(19,n,t,i),e.elementType=nf,e.lanes=o,e;case ty:return pu(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J1:a=10;break e;case ey:a=9;break e;case Gp:a=11;break e;case Yp:a=14;break e;case rr:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Ht(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Hr(e,t,n,r){return e=Ht(7,e,r,t),e.lanes=n,e}function pu(e,t,n,r){return e=Ht(22,e,r,t),e.elementType=ty,e.lanes=n,e.stateNode={isHidden:!1},e}function Wc(e,t,n){return e=Ht(6,e,null,t),e.lanes=n,e}function Gc(e,t,n){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ek(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ph(e,t,n,r,i,o,a,l,s){return e=new Ek(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ht(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dh(o),e}function kk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yx(e){if(!e)return _r;e=e._reactInternals;e:{if(ii(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(_t(n))return Gy(e,n,t)}return t}function qx(e,t,n,r,i,o,a,l,s){return e=Ph(n,r,!0,e,i,o,a,l,s),e.context=Yx(null),n=e.current,r=ft(),i=xr(n),o=Nn(r,i),o.callback=t??null,vr(n,o,i),e.current.lanes=i,Oa(e,i,r),Ct(e,r),e}function hu(e,t,n,r){var i=t.current,o=ft(),a=xr(i);return n=Yx(n),t.context===null?t.context=n:t.pendingContext=n,t=Nn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vr(i,t,a),e!==null&&(sn(e,i,a,o),$s(e,i,a)),a}function Tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function i0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oh(e,t){i0(e,t),(e=e.alternate)&&i0(e,t)}function Tk(){return null}var Xx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mh(e){this._internalRoot=e}mu.prototype.render=Mh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));hu(e,t,null,null)};mu.prototype.unmount=Mh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kr(function(){hu(null,e,null,null)}),t[Un]=null}};function mu(e){this._internalRoot=e}mu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ey();e={blockedOn:null,target:e,priority:t};for(var n=0;n<or.length&&t!==0&&t<or[n].priority;n++);or.splice(n,0,e),n===0&&Ty(e)}};function jh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function o0(){}function Pk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Tl(a);o.call(u)}}var a=qx(t,r,e,0,null,!1,!1,"",o0);return e._reactRootContainer=a,e[Un]=a.current,sa(e.nodeType===8?e.parentNode:e),Kr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Tl(s);l.call(u)}}var s=Ph(e,0,!1,null,null,!1,!1,"",o0);return e._reactRootContainer=s,e[Un]=s.current,sa(e.nodeType===8?e.parentNode:e),Kr(function(){hu(t,s,n,r)}),s}function vu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Tl(a);l.call(s)}}hu(t,a,e,i)}else a=Pk(n,t,e,i,r);return Tl(a)}_y=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$o(t.pendingLanes);n!==0&&(Kp(t,n|1),Ct(t,Oe()),!(se&6)&&(Ui=Oe()+500,Pr()))}break;case 13:Kr(function(){var r=Hn(e,1);if(r!==null){var i=ft();sn(r,e,1,i)}}),Oh(e,1)}};Qp=function(e){if(e.tag===13){var t=Hn(e,134217728);if(t!==null){var n=ft();sn(t,e,134217728,n)}Oh(e,134217728)}};Cy=function(e){if(e.tag===13){var t=xr(e),n=Hn(e,t);if(n!==null){var r=ft();sn(n,e,t,r)}Oh(e,t)}};Ey=function(){return he};ky=function(e,t){var n=he;try{return he=e,t()}finally{he=n}};pf=function(e,t,n){switch(t){case"input":if(af(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=su(r);if(!i)throw Error(V(90));ry(r),af(r,i)}}}break;case"textarea":oy(e,n);break;case"select":t=n.value,t!=null&&Oi(e,!!n.multiple,t,!1)}};fy=Ch;py=Kr;var Ok={usingClientEntryPoint:!1,Events:[ja,Si,su,cy,dy,Ch]},_o={findFiberByHostInstance:Nr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Mk={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gy(e),e===null?null:e.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||Tk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{ru=cs.inject(Mk),_n=cs}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ok;Ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jh(t))throw Error(V(200));return kk(e,t,null,n)};Ft.createRoot=function(e,t){if(!jh(e))throw Error(V(299));var n=!1,r="",i=Xx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ph(e,1,!1,null,null,n,!1,r,i),e[Un]=t.current,sa(e.nodeType===8?e.parentNode:e),new Mh(t)};Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=gy(t),e=e===null?null:e.stateNode,e};Ft.flushSync=function(e){return Kr(e)};Ft.hydrate=function(e,t,n){if(!gu(t))throw Error(V(200));return vu(null,e,t,!0,n)};Ft.hydrateRoot=function(e,t,n){if(!jh(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Xx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=qx(t,null,e,1,n??null,i,!1,o,a),e[Un]=t.current,sa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new mu(t)};Ft.render=function(e,t,n){if(!gu(t))throw Error(V(200));return vu(null,e,t,!1,n)};Ft.unmountComponentAtNode=function(e){if(!gu(e))throw Error(V(40));return e._reactRootContainer?(Kr(function(){vu(null,null,e,!1,function(){e._reactRootContainer=null,e[Un]=null})}),!0):!1};Ft.unstable_batchedUpdates=Ch;Ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gu(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return vu(e,t,n,!1,r)};Ft.version="18.2.0-next-9e3b772b8-20220608";function Kx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kx)}catch(e){console.error(e)}}Kx(),q1.exports=Ft;var yu=q1.exports,a0=yu;Zd.createRoot=a0.createRoot,Zd.hydrateRoot=a0.hydrateRoot;var ot=function(){return ot=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ot.apply(this,arguments)};function Hi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function jk(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var $k=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ik=jk(function(e){return $k.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ye="-ms-",qo="-moz-",ue="-webkit-",Qx="comm",xu="rule",$h="decl",Dk="@import",Lk="@namespace",Zx="@keyframes",Rk="@layer",Jx=Math.abs,Ih=String.fromCharCode,Gf=Object.assign;function Ak(e,t){return Ne(e,0)^45?(((t<<2^Ne(e,0))<<2^Ne(e,1))<<2^Ne(e,2))<<2^Ne(e,3):0}function eb(e){return e.trim()}function $n(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function Ns(e,t,n){return e.indexOf(t,n)}function Ne(e,t){return e.charCodeAt(t)|0}function Qr(e,t,n){return e.slice(t,n)}function nn(e){return e.length}function tb(e){return e.length}function Do(e,t){return t.push(e),e}function Fk(e,t){return e.map(t).join("")}function s0(e,t){return e.filter(function(n){return!$n(n,t)})}var bu=1,Wi=1,nb=0,qt=0,$e=0,io="";function wu(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:bu,column:Wi,length:a,return:"",siblings:l}}function nr(e,t){return Gf(wu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function li(e){for(;e.root;)e=nr(e.root,{children:[e]});Do(e,e.siblings)}function Nk(){return $e}function zk(){return $e=qt>0?Ne(io,--qt):0,Wi--,$e===10&&(Wi=1,bu--),$e}function ln(){return $e=qt<nb?Ne(io,qt++):0,Wi++,$e===10&&(Wi=1,bu++),$e}function cr(){return Ne(io,qt)}function zs(){return qt}function Su(e,t){return Qr(io,e,t)}function ga(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Bk(e){return bu=Wi=1,nb=nn(io=e),qt=0,[]}function Vk(e){return io="",e}function Yc(e){return eb(Su(qt-1,Yf(e===91?e+2:e===40?e+1:e)))}function Uk(e){for(;($e=cr())&&$e<33;)ln();return ga(e)>2||ga($e)>3?"":" "}function Hk(e,t){for(;--t&&ln()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return Su(e,zs()+(t<6&&cr()==32&&ln()==32))}function Yf(e){for(;ln();)switch($e){case e:return qt;case 34:case 39:e!==34&&e!==39&&Yf($e);break;case 40:e===41&&Yf(e);break;case 92:ln();break}return qt}function Wk(e,t){for(;ln()&&e+$e!==47+10;)if(e+$e===42+42&&cr()===47)break;return"/*"+Su(t,qt-1)+"*"+Ih(e===47?e:ln())}function Gk(e){for(;!ga(cr());)ln();return Su(e,qt)}function Yk(e){return Vk(Bs("",null,null,null,[""],e=Bk(e),0,[0],e))}function Bs(e,t,n,r,i,o,a,l,s){for(var u=0,d=0,c=a,y=0,f=0,h=0,v=1,w=1,p=1,m=0,x="",S=i,C=o,T=r,_=x;w;)switch(h=m,m=ln()){case 40:if(h!=108&&Ne(_,c-1)==58){Ns(_+=ne(Yc(m),"&","&\f"),"&\f",Jx(u?l[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:_+=Yc(m);break;case 9:case 10:case 13:case 32:_+=Uk(h);break;case 92:_+=Hk(zs()-1,7);continue;case 47:switch(cr()){case 42:case 47:Do(qk(Wk(ln(),zs()),t,n,s),s),(ga(h||1)==5||ga(cr()||1)==5)&&nn(_)&&Qr(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*v:l[u++]=nn(_)*p;case 125*v:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+d:p==-1&&(_=ne(_,/\f/g,"")),f>0&&(nn(_)-c||v===0&&h===47)&&Do(f>32?u0(_+";",r,n,c-1,s):u0(ne(_," ","")+";",r,n,c-2,s),s);break;case 59:_+=";";default:if(Do(T=l0(_,t,n,u,d,i,l,x,S=[],C=[],c,o),o),m===123)if(d===0)Bs(_,t,T,T,S,o,c,l,C);else{switch(y){case 99:if(Ne(_,3)===110)break;case 108:if(Ne(_,2)===97)break;default:d=0;case 100:case 109:case 115:}d?Bs(e,T,T,r&&Do(l0(e,T,T,0,0,i,l,x,i,S=[],c,C),C),i,C,c,l,r?S:C):Bs(_,T,T,T,[""],C,0,l,C)}}u=d=f=0,v=p=1,x=_="",c=a;break;case 58:c=1+nn(_),f=h;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&zk()==125)continue}switch(_+=Ih(m),m*v){case 38:p=d>0?1:(_+="\f",-1);break;case 44:l[u++]=(nn(_)-1)*p,p=1;break;case 64:cr()===45&&(_+=Yc(ln())),y=cr(),d=c=nn(x=_+=Gk(zs())),m++;break;case 45:h===45&&nn(_)==2&&(v=0)}}return o}function l0(e,t,n,r,i,o,a,l,s,u,d,c){for(var y=i-1,f=i===0?o:[""],h=tb(f),v=0,w=0,p=0;v<r;++v)for(var m=0,x=Qr(e,y+1,y=Jx(w=a[v])),S=e;m<h;++m)(S=eb(w>0?f[m]+" "+x:ne(x,/&\f/g,f[m])))&&(s[p++]=S);return wu(e,t,n,i===0?xu:l,s,u,d,c)}function qk(e,t,n,r){return wu(e,t,n,Qx,Ih(Nk()),Qr(e,2,-2),0,r)}function u0(e,t,n,r,i){return wu(e,t,n,$h,Qr(e,0,r),Qr(e,r+1,-1),r,i)}function rb(e,t,n){switch(Ak(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return qo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+qo+e+ye+e+e;case 5936:switch(Ne(e,t+11)){case 114:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+ye+e+e;case 6165:return ue+e+ye+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return ue+e+ye+"flex-item-"+ne(e,/flex-|-self/g,"")+($n(e,/flex-|baseline/)?"":ye+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+ye+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+ye+ne(e,"shrink","negative")+e;case 5292:return ue+e+ye+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+ye+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+ye+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!$n(e,/flex-|baseline/))return ye+"grid-column-align"+Qr(e,t)+e;break;case 2592:case 3360:return ye+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,$n(r.props,/grid-\w+-end/)})?~Ns(e+(n=n[t].value),"span",0)?e:ye+ne(e,"-start","")+e+ye+"grid-row-span:"+(~Ns(n,"span",0)?$n(n,/\d+/):+$n(n,/\d+/)-+$n(e,/\d+/))+";":ye+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return $n(r.props,/grid-\w+-start/)})?e:ye+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nn(e)-1-t>6)switch(Ne(e,t+1)){case 109:if(Ne(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+qo+(Ne(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ns(e,"stretch",0)?rb(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return ye+i+":"+o+u+(a?ye+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(Ne(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(Ne(e,Ne(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Ne(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+ye+"$2box$3")+e;case 100:return ne(e,":",":"+ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Pl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Xk(e,t,n,r){switch(e.type){case Rk:if(e.children.length)break;case Dk:case Lk:case $h:return e.return=e.return||e.value;case Qx:return"";case Zx:return e.return=e.value+"{"+Pl(e.children,r)+"}";case xu:if(!nn(e.value=e.props.join(",")))return""}return nn(n=Pl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Kk(e){var t=tb(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function Qk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Zk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case $h:e.return=rb(e.value,e.length,n);return;case Zx:return Pl([nr(e,{value:ne(e.value,"@","@"+ue)})],r);case xu:if(e.length)return Fk(n=e.props,function(i){switch($n(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":li(nr(e,{props:[ne(i,/:(read-\w+)/,":"+qo+"$1")]})),li(nr(e,{props:[i]})),Gf(e,{props:s0(n,r)});break;case"::placeholder":li(nr(e,{props:[ne(i,/:(plac\w+)/,":"+ue+"input-$1")]})),li(nr(e,{props:[ne(i,/:(plac\w+)/,":"+qo+"$1")]})),li(nr(e,{props:[ne(i,/:(plac\w+)/,ye+"input-$1")]})),li(nr(e,{props:[i]})),Gf(e,{props:s0(n,r)});break}return""})}}var Jk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ib="active",ob="data-styled-version",_u="6.3.11",Dh=`/*!sc*/
`,Xo=typeof window<"u"&&typeof document<"u",eT=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),tT={};function Ia(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Vs=new Map,Ol=new Map,Us=1,Lo=function(e){if(Vs.has(e))return Vs.get(e);for(;Ol.has(Us);)Us++;var t=Us++;return Vs.set(e,t),Ol.set(t,e),t},nT=function(e,t){Us=t+1,Vs.set(e,t),Ol.set(t,e)},Lh=Object.freeze([]),Yi=Object.freeze({});function ab(e,t,n){return n===void 0&&(n=Yi),e.theme!==n.theme&&e.theme||t||n.theme}var sb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),rT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,iT=/(^-|-$)/g;function c0(e){return e.replace(rT,"-").replace(iT,"")}var oT=/(a)(d)/gi,d0=function(e){return String.fromCharCode(e+(e>25?39:97))};function qf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=d0(t%52)+n;return(d0(t%52)+n).replace(oT,"$1-$2")}var qc,Lr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},lb=function(e){return Lr(5381,e)};function Rh(e){return qf(lb(e)>>>0)}function aT(e){return e.displayName||e.name||"Component"}function Xc(e){return typeof e=="string"&&!0}var ub=typeof Symbol=="function"&&Symbol.for,cb=ub?Symbol.for("react.memo"):60115,sT=ub?Symbol.for("react.forward_ref"):60112,lT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},db={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cT=((qc={})[sT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qc[cb]=db,qc);function f0(e){return("type"in(t=e)&&t.type.$$typeof)===cb?db:"$$typeof"in e?cT[e.$$typeof]:lT;var t}var dT=Object.defineProperty,fT=Object.getOwnPropertyNames,p0=Object.getOwnPropertySymbols,pT=Object.getOwnPropertyDescriptor,hT=Object.getPrototypeOf,h0=Object.prototype;function fb(e,t,n){if(typeof t!="string"){if(h0){var r=hT(t);r&&r!==h0&&fb(e,r,n)}var i=fT(t);p0&&(i=i.concat(p0(t)));for(var o=f0(e),a=f0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in uT||n&&n[s]||a&&s in a||o&&s in o)){var u=pT(t,s);try{dT(e,s,u)}catch{}}}}return e}function qi(e){return typeof e=="function"}function Ah(e){return typeof e=="object"&&"styledComponentId"in e}function Vr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ml(e,t){return e.join(t||"")}function va(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xf(e,t,n){if(n===void 0&&(n=!1),!n&&!va(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xf(e[r],t[r]);else if(va(t))for(var r in t)e[r]=Xf(e[r],t[r]);return e}function Fh(e,t){Object.defineProperty(e,"toString",{value:t})}var mT=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ia(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+Dh;return n},e}(),gT="style[".concat(Gi,"][").concat(ob,'="').concat(_u,'"]'),vT=new RegExp("^".concat(Gi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),m0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Kf=function(e){if(!e)return document;if(m0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(m0(t))return t}return document},yT=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},xT=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Dh),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(vT);if(s){var u=0|parseInt(s[1],10),d=s[2];u!==0&&(nT(d,u),yT(e,d,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},Kc=function(e){for(var t=Kf(e.options.target).querySelectorAll(gT),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Gi)!==ib&&(xT(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function bT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var pb=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Gi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Gi,ib),r.setAttribute(ob,_u);var a=bT();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},wT=function(){function e(t){this.element=pb(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Ia(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ST=function(){function e(t){this.element=pb(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),_T=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),g0=Xo,CT={isServer:!Xo,useCSSOMInjection:!eT},jl=function(){function e(t,n,r){t===void 0&&(t=Yi),n===void 0&&(n={});var i=this;this.options=ot(ot({},CT),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Xo&&g0&&(g0=!1,Kc(this)),Fh(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(c){var y=function(p){return Ol.get(p)}(c);if(y===void 0)return"continue";var f=o.names.get(y);if(f===void 0||!f.size)return"continue";var h=a.getGroup(c);if(h.length===0)return"continue";var v=Gi+".g"+c+'[id="'+y+'"]',w="";f.forEach(function(p){p.length>0&&(w+=p+",")}),s+=h+v+'{content:"'+w+'"}'+Dh},d=0;d<l;d++)u(d);return s}(i)})}return e.registerId=function(t){return Lo(t)},e.prototype.rehydrate=function(){!this.server&&Xo&&Kc(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ot(ot({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Xo&&t.target!==this.options.target&&Kf(this.options.target)!==Kf(t.target)&&Kc(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new _T(i):r?new wT(i):new ST(i)}(this.options),new mT(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Lo(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Lo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Lo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ET=/&/g,In=47,Rr=42;function v0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==In||e.charCodeAt(o+1)!==Rr)if(i)a===Rr&&e.charCodeAt(o+1)===In&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function hb(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=hb(n.children,t)),n})}function kT(e){var t,n,r,i=e===void 0?Yi:e,o=i.options,a=o===void 0?Yi:o,l=i.plugins,s=l===void 0?Lh:l,u=function(h,v,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):h},d=s.slice();d.push(function(h){h.type===xu&&h.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),h.props[0]=h.props[0].replace(ET,n).replace(r,u))}),a.prefix&&d.push(Zk),d.push(Xk);var c=[],y=Kk(d.concat(Qk(function(h){return c.push(h)}))),f=function(h,v,w,p){v===void 0&&(v=""),w===void 0&&(w=""),p===void 0&&(p="&"),t=p,n=v,r=void 0;var m=function(S){if(!v0(S))return S;for(var C=S.length,T="",_=0,E=0,j=0,I=!1,D=0;D<C;D++){var O=S.charCodeAt(D);if(j!==0||I||O!==In||S.charCodeAt(D+1)!==Rr)if(I)O===Rr&&S.charCodeAt(D+1)===In&&(I=!1,D++);else if(O!==34&&O!==39||D!==0&&S.charCodeAt(D-1)===92){if(j===0)if(O===123)E++;else if(O===125){if(--E<0){for(var M=D+1;M<C;){var L=S.charCodeAt(M);if(L===59||L===10)break;M++}M<C&&S.charCodeAt(M)===59&&M++,E=0,D=M-1,_=M;continue}E===0&&(T+=S.substring(_,D+1),_=D+1)}else O===59&&E===0&&(T+=S.substring(_,D+1),_=D+1)}else j===0?j=O:j===O&&(j=0);else I=!0,D++}if(_<C){var A=S.substring(_);v0(A)||(T+=A)}return T}(function(S){if(S.indexOf("//")===-1)return S;for(var C=S.length,T=[],_=0,E=0,j=0,I=0;E<C;){var D=S.charCodeAt(E);if(D!==34&&D!==39||E!==0&&S.charCodeAt(E-1)===92)if(j===0)if(D===In&&E+1<C&&S.charCodeAt(E+1)===Rr){for(E+=2;E+1<C&&(S.charCodeAt(E)!==Rr||S.charCodeAt(E+1)!==In);)E++;E+=2}else if(D===40&&E>=3&&(32|S.charCodeAt(E-1))==108&&(32|S.charCodeAt(E-2))==114&&(32|S.charCodeAt(E-3))==117)I=1,E++;else if(I>0)D===41?I--:D===40&&I++,E++;else if(D===Rr&&E+1<C&&S.charCodeAt(E+1)===In)E>_&&T.push(S.substring(_,E)),_=E+=2;else if(D===In&&E+1<C&&S.charCodeAt(E+1)===In){for(E>_&&T.push(S.substring(_,E));E<C&&S.charCodeAt(E)!==10;)E++;_=E}else E++;else E++;else j===0?j=D:j===D&&(j=0),E++}return _===0?S:(_<C&&T.push(S.substring(_)),T.join(""))}(h)),x=Yk(w||v?"".concat(w," ").concat(v," { ").concat(m," }"):m);return a.namespace&&(x=hb(x,a.namespace)),c=[],Pl(x,y),c};return f.hash=s.length?s.reduce(function(h,v){return v.name||Ia(15),Lr(h,v.name)},5381).toString():"",f}var TT=new jl,Qf=kT(),mb=q.createContext({shouldForwardProp:void 0,styleSheet:TT,stylis:Qf});mb.Consumer;q.createContext(void 0);function Zf(){return q.useContext(mb)}var gb=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Qf);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Fh(this,function(){throw Ia(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Qf),this.name+t.hash},e}();function PT(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Jk||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var OT=function(e){return e>="A"&&e<="Z"};function y0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;OT(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var vb=function(e){return e==null||e===!1||e===""},yb=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!vb(r)&&(Array.isArray(r)&&r.isCss||qi(r)?t.push("".concat(y0(n),":"),r,";"):va(r)?t.push.apply(t,Hi(Hi(["".concat(n," {")],yb(r),!1),["}"],!1)):t.push("".concat(y0(n),": ").concat(PT(n,r),";")))}return t};function wr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(vb(e))return i;if(Ah(e))return i.push(".".concat(e.styledComponentId)),i;if(qi(e)){if(!qi(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return wr(o,t,n,r,i)}var a;if(e instanceof gb)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(va(e)){for(var l=yb(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)wr(e[s],t,n,r,i);return i}function xb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(qi(n)&&!Ah(n))return!1}return!0}var MT=lb(_u),jT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xb(t),this.componentId=n,this.baseHash=Lr(MT,n),this.baseStyle=r,jl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Vr(i,this.staticRulesId);else{var o=Ml(wr(this.rules,t,n,r)),a=qf(Lr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Vr(i,a),this.staticRulesId=a}else{for(var s=Lr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var y=Ml(wr(c,t,n,r));s=Lr(Lr(s,String(d)),y),u+=y}}if(u){var f=qf(s>>>0);if(!n.hasNameForId(this.componentId,f)){var h=r(u,".".concat(f),void 0,this.componentId);n.insertRules(this.componentId,f,h)}i=Vr(i,f)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Lo(this.componentId)):""}},e}(),Nh=q.createContext(void 0);Nh.Consumer;var Qc={};function $T(e,t,n){var r=Ah(e),i=e,o=!Xc(e),a=t.attrs,l=a===void 0?Lh:a,s=t.componentId,u=s===void 0?function(S,C){var T=typeof S!="string"?"sc":c0(S);Qc[T]=(Qc[T]||0)+1;var _="".concat(T,"-").concat(Rh(_u+T+Qc[T]));return C?"".concat(C,"-").concat(_):_}(t.displayName,t.parentComponentId):s,d=t.displayName,c=d===void 0?function(S){return Xc(S)?"styled.".concat(S):"Styled(".concat(aT(S),")")}(e):d,y=t.displayName&&t.componentId?"".concat(c0(t.displayName),"-").concat(t.componentId):t.componentId||u,f=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,h=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;h=function(S,C){return v(S,C)&&w(S,C)}}else h=v}var p=new jT(n,y,r?i.componentStyle:void 0);function m(S,C){return function(T,_,E){var j=T.attrs,I=T.componentStyle,D=T.defaultProps,O=T.foldedComponentIds,M=T.styledComponentId,L=T.target,A=q.useContext(Nh),R=Zf(),F=T.shouldForwardProp||R.shouldForwardProp,P=ab(_,A,D)||Yi,$=function(X,ee,fe){for(var be,ie=ot(ot({},ee),{className:void 0,theme:fe}),je=0;je<X.length;je+=1){var Be=qi(be=X[je])?be(ie):be;for(var Ve in Be)Ve==="className"?ie.className=Vr(ie.className,Be[Ve]):Ve==="style"?ie.style=ot(ot({},ie.style),Be[Ve]):ie[Ve]=Be[Ve]}return"className"in ee&&typeof ee.className=="string"&&(ie.className=Vr(ie.className,ee.className)),ie}(j,_,P),N=$.as||L,B={};for(var z in $)$[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&$.theme===P||(z==="forwardedAs"?B.as=$.forwardedAs:F&&!F(z,N)||(B[z]=$[z]));var U=function(X,ee){var fe=Zf(),be=X.generateAndInjectStyles(ee,fe.styleSheet,fe.stylis);return be}(I,$),G=U.className,Y=Vr(O,M);return G&&(Y+=" "+G),$.className&&(Y+=" "+$.className),B[Xc(N)&&!sb.has(N)?"class":"className"]=Y,E&&(B.ref=E),b.createElement(N,B)}(x,S,C)}m.displayName=c;var x=q.forwardRef(m);return x.attrs=f,x.componentStyle=p,x.displayName=c,x.shouldForwardProp=h,x.foldedComponentIds=r?Vr(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=y,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(C){for(var T=[],_=1;_<arguments.length;_++)T[_-1]=arguments[_];for(var E=0,j=T;E<j.length;E++)Xf(C,j[E],!0);return C}({},i.defaultProps,S):S}}),Fh(x,function(){return".".concat(x.styledComponentId)}),o&&fb(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function x0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var b0=function(e){return Object.assign(e,{isCss:!0})};function zh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(qi(e)||va(e))return b0(wr(x0(Lh,Hi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?wr(r):b0(wr(x0(r,t)))}function Jf(e,t,n){if(n===void 0&&(n=Yi),!t)throw Ia(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,zh.apply(void 0,Hi([i],o,!1)))};return r.attrs=function(i){return Jf(e,t,ot(ot({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Jf(e,t,ot(ot({},n),i))},r}var bb=function(e){return Jf($T,e)},k=bb;sb.forEach(function(e){k[e]=bb(e)});var IT=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=xb(t),jl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ml(wr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&jl.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function DT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=zh.apply(void 0,Hi([e],t,!1)),i="sc-global-".concat(Rh(JSON.stringify(r))),o=new IT(r,i),a=new WeakMap,l=function(u){var d=Zf(),c=q.useContext(Nh),y=a.get(d.styleSheet);return y===void 0&&(y=d.styleSheet.allocateGSInstance(i),a.set(d.styleSheet,y)),(typeof window>"u"||!d.styleSheet.server)&&s(y,u,d.styleSheet,c,d.stylis),q.useLayoutEffect(function(){return d.styleSheet.server||s(y,u,d.styleSheet,c,d.stylis),function(){var f;o.removeStyles(y,d.styleSheet),f=d.styleSheet.options.target,typeof document<"u"&&(f??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(h){return h.remove()})}},[y,u,d.styleSheet,c,d.stylis]),null};function s(u,d,c,y,f){if(o.isStatic)o.renderStyles(u,tT,c,f);else{var h=ot(ot({},d),{theme:ab(d,y,l.defaultProps)});o.renderStyles(u,h,c,f)}}return q.memo(l)}function Bh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ml(zh.apply(void 0,Hi([e],t,!1))),i=Rh(r);return new gb(i,r)}const LT=k.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,RT=k.div`
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
`,AT=k.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,FT=k.div`

  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`,NT=k.div`
  display: flex;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
  }
`;k(Me)`
  color: var(--main-brand-color);
  display: none;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;k.img`
  display: flex;
  width: 50px;
  height: 50px;

  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;k.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100px;
    height: 100px;

    justify-content: center;
    align-items: center;
  }
`;const zT=k(Me)`
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
`;k.h1`
  color: var(--white-color);
  font-family: DM Serif Display;
  margin-left: 70px;
`;const BT=k.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,VT=k.button`
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
`;k.div`
  z-index: 9999;
`;k.a`
  color: var(--black-color);
`;const UT=k.div`
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
`,HT=k.button`
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
`,WT=k.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,ds=k(Me)`
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
`,GT=k.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,YT=k.div`
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
`,qT=k.div`
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



`,XT=k.input`
  
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
`,KT=k.button`
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
   
`,QT=k.svg`
  width: 24px;
  height: 24px;
  

`,un="/Didiv/assets/symbol-defs-fb9ce9f0.svg",ZT=()=>{const[e,t]=b.useState("");return g.jsxs(qT,{children:[g.jsx(XT,{name:"site-search",value:e,onChange:n=>t(n.target.value),placeholder:"Пошук",autoComplete:"off"}),g.jsx(KT,{className:"search-button",children:g.jsx(QT,{children:g.jsx("use",{href:`${un}#icon-search`})})})]})};var wb={exports:{}},Sb={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Da=b;function JT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var eP=typeof Object.is=="function"?Object.is:JT,tP=Da.useSyncExternalStore,nP=Da.useRef,rP=Da.useEffect,iP=Da.useMemo,oP=Da.useDebugValue;Sb.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=nP(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=iP(function(){function s(f){if(!u){if(u=!0,d=f,f=r(f),i!==void 0&&a.hasValue){var h=a.value;if(i(h,f))return c=h}return c=f}if(h=c,eP(d,f))return h;var v=r(f);return i!==void 0&&i(h,v)?(d=f,h):(d=f,c=v)}var u=!1,d,c,y=n===void 0?null:n;return[function(){return s(t())},y===null?void 0:function(){return s(y())}]},[t,n,r,i]);var l=tP(e,o[0],o[1]);return rP(function(){a.hasValue=!0,a.value=l},[l]),oP(l),l};wb.exports=Sb;var aP=wb.exports;function sP(e){e()}function lP(){let e=null,t=null;return{clear(){e=null,t=null},notify(){sP(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var w0={notify(){},get:()=>[]};function uP(e,t){let n,r=w0,i=0,o=!1;function a(v){d();const w=r.subscribe(v);let p=!1;return()=>{p||(p=!0,w(),c())}}function l(){r.notify()}function s(){h.onStateChange&&h.onStateChange()}function u(){return o}function d(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=lP())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=w0)}function y(){o||(o=!0,d())}function f(){o&&(o=!1,c())}const h={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:y,tryUnsubscribe:f,getListeners:()=>r};return h}var cP=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dP=cP(),fP=()=>typeof navigator<"u"&&navigator.product==="ReactNative",pP=fP(),hP=()=>dP||pP?b.useLayoutEffect:b.useEffect,mP=hP(),Zc=Symbol.for("react-redux-context"),Jc=typeof globalThis<"u"?globalThis:{};function gP(){if(!b.createContext)return{};const e=Jc[Zc]??(Jc[Zc]=new Map);let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var Cr=gP();function vP(e){const{children:t,context:n,serverState:r,store:i}=e,o=b.useMemo(()=>{const s=uP(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=b.useMemo(()=>i.getState(),[i]);mP(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||Cr;return b.createElement(l.Provider,{value:o},t)}var yP=vP;function Vh(e=Cr){return function(){return b.useContext(e)}}var _b=Vh();function Cb(e=Cr){const t=e===Cr?_b:Vh(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var xP=Cb();function bP(e=Cr){const t=e===Cr?xP:Cb(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Kn=bP(),wP=(e,t)=>e===t;function SP(e=Cr){const t=e===Cr?_b:Vh(e),n=(r,i={})=>{const{equalityFn:o=wP}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:u}=a;b.useRef(!0);const d=b.useCallback({[r.name](y){return r(y)}}[r.name],[r]),c=aP.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,d,o);return b.useDebugValue(c),c};return Object.assign(n,{withTypes:()=>n}),n}var Et=SP();const _P=k(Me)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,CP=k.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,EP=k.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,kP=k.div`
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
`,TP=({onClick:e})=>{const t=Et(n=>n.cart.items.length);return g.jsx(_P,{to:"/cart",children:g.jsxs(EP,{onClick:e,children:[g.jsx(CP,{children:g.jsx("use",{href:`${un}#icon-cart`})}),t>0&&g.jsx(kP,{children:t})]})})},PP=k.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; 
  }
   @media (min-width: 768px) {
   order:1;
    gap: 30px;
    margin-right: auto;
    margin-left: auto;
 
  }
  @media (min-width: 920px) {
 
    gap: 80px;
 
  }
`,fs=k(Me)`
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
`,OP=()=>g.jsxs(PP,{children:[g.jsx(fs,{to:"/",children:"Головна"}),g.jsx(fs,{to:"/about",children:"Про нас"}),g.jsx(fs,{to:"/catalog",children:"Каталог"}),g.jsx(fs,{to:"/contacts",children:"Контакти"})]}),MP=k.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,jP=k(Me)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
 
  }
       
`,$P=k.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,IP=k.div`

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
`,DP=({onClick:e})=>{const t=Et(n=>n.favorites.items.length);return g.jsx(jP,{to:"/favorite",children:g.jsxs($P,{onClick:e,children:[g.jsx(MP,{children:g.jsx("use",{href:`${un}#icon-heart`})}),t>0&&g.jsx(IP,{children:t})]})})};/**
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
 */const NP=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>b.createElement("svg",{ref:s,...AP,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Eb("lucide",i),...!o&&!FP(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,d])=>b.createElement(u,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(NP,{ref:o,iconNode:t,className:Eb(`lucide-${LP(S0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=S0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],Uh=pn("arrow-down-narrow-wide",zP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Hh=pn("arrow-right",BP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Wh=pn("heart",VP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],HP=pn("house",UP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],GP=pn("info",WP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],qP=pn("mail",YP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],KP=pn("shopping-bag",XP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],La=pn("shopping-cart",QP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],kb=pn("sliders-horizontal",ZP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Tb=pn("trash-2",JP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Pb=pn("x",eO),tO=()=>{const[e,t]=b.useState(!1);return g.jsx(LT,{children:g.jsx(RT,{children:g.jsxs(AT,{children:[g.jsxs(FT,{children:[g.jsx(zT,{to:"/",children:"Дідів хлів"}),g.jsxs(NT,{children:[g.jsx(TP,{}),g.jsx(DP,{}),g.jsx(OP,{}),g.jsx(VT,{onClick:()=>t(!e),children:g.jsx(BT,{children:g.jsx("use",{href:`${un}#icon-menu`})})}),g.jsx(YT,{open:e,onClick:()=>t(!1)}),g.jsxs(UT,{open:e,children:[g.jsx(HT,{onClick:()=>t(!1),children:g.jsx(Pb,{size:28,strokeWidth:1.5})}),g.jsxs(WT,{children:[g.jsxs(ds,{onClick:()=>t(!1),to:"/",children:[g.jsx(HP,{size:22,strokeWidth:1.5})," Головна"]}),g.jsxs(ds,{onClick:()=>t(!1),to:"/about",children:[g.jsx(GP,{size:22,strokeWidth:1.5})," Про нас"]}),g.jsxs(ds,{onClick:()=>t(!1),to:"/catalog",children:[g.jsx(KP,{size:22,strokeWidth:1.5})," Каталог"]}),g.jsxs(ds,{onClick:()=>t(!1),to:"/contacts",children:[g.jsx(qP,{size:22,strokeWidth:1.5})," Контакти"]})]}),g.jsx(GT,{children:g.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),g.jsx(ZT,{})]})})})},nO=k.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,rO=k.footer`
 
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
`,iO=k.div`
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
`,ed=k.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,td=k.h3`
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
`,vn=k(Me)`
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
`,oO=k.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,nd=k.a`
  width: 44px; 
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
`,aO=()=>g.jsx(nO,{children:g.jsxs(rO,{children:[g.jsxs(iO,{children:[g.jsxs(ed,{children:[g.jsx(td,{children:"Навігація"}),g.jsx(vn,{to:"/",children:"Головна"}),g.jsx(vn,{to:"/about",children:"Про нас"}),g.jsx(vn,{to:"/catalog",children:"Каталог"}),g.jsx(vn,{to:"/contacts",children:"Контакти"})]}),g.jsxs(ed,{children:[g.jsx(td,{children:"Інформація"}),g.jsx(vn,{to:"/delivery",children:"Оплата і доставка"}),g.jsx(vn,{children:"Повернення"}),g.jsx(vn,{children:"Гарантія"}),g.jsx(vn,{children:"Політика конфіденційності"})]})]}),g.jsxs(ed,{children:[g.jsx(td,{children:"Контакти"}),g.jsx(vn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),g.jsx(vn,{href:"mailto:email@email.com",children:"email@email.com"}),g.jsxs(oO,{children:[g.jsx(nd,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:g.jsx("svg",{width:"20px",children:g.jsx("use",{href:`${un}#icon-instagram`})})}),g.jsx(nd,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:g.jsx("svg",{width:"20px",children:g.jsx("use",{href:`${un}#icon-telegram`})})}),g.jsx(nd,{href:"https://www.olx.ua/uk/hobbi-otdyh-i-sport/velo/q-%D0%B4%D1%96%D0%B4%D1%96%D0%B2-%D1%85%D0%BB%D1%96%D0%B2/?srsltid=AfmBOoqjzHkKNGxhNyAXVf2_KVV6h3JQFklEk0AjrDFh7tlO2-HZJPSS",target:"_blank",rel:"noopener noreferrer",children:g.jsx("svg",{width:"27px",height:"27px",style:{marginTop:"5px"},children:g.jsx("use",{href:`${un}#icon-olx`})})})]})]})]})}),sO=()=>g.jsxs(g.Fragment,{children:[g.jsx(tO,{}),g.jsx("main",{className:"main-content",children:g.jsx(hC,{})}),g.jsx(aO,{})]}),lO=k.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,uO=k.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
      text-align: center;

  @media screen and (min-width: 768px) {
 font-size: 35px;

  }

`,cO=k.div`
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
`,dO=k.div`
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
`,fO=k(Me)`
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
`,pO=k.span`
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
`,hO=k.div`
  padding: 10px 0;
`,mO=k.h3`
  font-size: 15px;
  font-weight: 600;
 
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,gO=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,vO=k.span`
  font-size: 17px;
  font-weight: 800;
  color: var(--black-color);
`,yO=k.button`
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
`;k(Me)`
color: var(--white-color);
padding: 10px 20px;
 background:var( --orange-color); 
  border-radius: 15px;
  text-decoration: none;

`;const xO=k(Me)`
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

`,bO=k.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,wO=k.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function qe(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var SO=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),_0=SO,rd=()=>Math.random().toString(36).substring(7).split("").join("."),_O={INIT:`@@redux/INIT${rd()}`,REPLACE:`@@redux/REPLACE${rd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${rd()}`},$l=_O;function Gh(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Yh(e,t,n){if(typeof e!="function")throw new Error(qe(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(qe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(qe(1));return n(Yh)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function u(){a===o&&(a=new Map,o.forEach((w,p)=>{a.set(p,w)}))}function d(){if(s)throw new Error(qe(3));return i}function c(w){if(typeof w!="function")throw new Error(qe(4));if(s)throw new Error(qe(5));let p=!0;u();const m=l++;return a.set(m,w),function(){if(p){if(s)throw new Error(qe(6));p=!1,u(),a.delete(m),o=null}}}function y(w){if(!Gh(w))throw new Error(qe(7));if(typeof w.type>"u")throw new Error(qe(8));if(typeof w.type!="string")throw new Error(qe(17));if(s)throw new Error(qe(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(m=>{m()}),w}function f(w){if(typeof w!="function")throw new Error(qe(10));r=w,y({type:$l.REPLACE})}function h(){const w=c;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(qe(11));function m(){const S=p;S.next&&S.next(d())}return m(),{unsubscribe:w(m)}},[_0](){return this}}}return y({type:$l.INIT}),{dispatch:y,subscribe:c,getState:d,replaceReducer:f,[_0]:h}}function CO(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:$l.INIT})>"u")throw new Error(qe(12));if(typeof n(void 0,{type:$l.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(qe(13))})}function EO(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{CO(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const u={};for(let d=0;d<r.length;d++){const c=r[d],y=n[c],f=a[c],h=y(f,l);if(typeof h>"u")throw l&&l.type,new Error(qe(14));u[c]=h,s=s||h!==f}return s=s||r.length!==Object.keys(a).length,s?u:a}}function Il(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function kO(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(qe(15))};const a={getState:i.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(a));return o=Il(...l)(i.dispatch),{...i,dispatch:o}}}function TO(e){return Gh(e)&&"type"in e&&typeof e.type=="string"}var Ob=Symbol.for("immer-nothing"),C0=Symbol.for("immer-draftable"),pt=Symbol.for("immer-state");function on(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var It=Object,Xi=It.getPrototypeOf,Dl="constructor",Cu="prototype",ep="configurable",Ll="enumerable",Hs="writable",ya="value",Gn=e=>!!e&&!!e[pt];function fn(e){var t;return e?Mb(e)||ku(e)||!!e[C0]||!!((t=e[Dl])!=null&&t[C0])||Tu(e)||Pu(e):!1}var PO=It[Cu][Dl].toString(),E0=new WeakMap;function Mb(e){if(!e||!qh(e))return!1;const t=Xi(e);if(t===null||t===It[Cu])return!0;const n=It.hasOwnProperty.call(t,Dl)&&t[Dl];if(n===Object)return!0;if(!gi(n))return!1;let r=E0.get(n);return r===void 0&&(r=Function.toString.call(n),E0.set(n,r)),r===PO}function Eu(e,t,n=!0){Ra(e)===0?(n?Reflect.ownKeys(e):It.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Ra(e){const t=e[pt];return t?t.type_:ku(e)?1:Tu(e)?2:Pu(e)?3:0}var k0=(e,t,n=Ra(e))=>n===2?e.has(t):It[Cu].hasOwnProperty.call(e,t),tp=(e,t,n=Ra(e))=>n===2?e.get(t):e[t],Rl=(e,t,n,r=Ra(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function OO(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var ku=Array.isArray,Tu=e=>e instanceof Map,Pu=e=>e instanceof Set,qh=e=>typeof e=="object",gi=e=>typeof e=="function",id=e=>typeof e=="boolean";function MO(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Ln=e=>e.copy_||e.base_,Xh=e=>e.modified_?e.copy_:e.base_;function np(e,t){if(Tu(e))return new Map(e);if(Pu(e))return new Set(e);if(ku(e))return Array[Cu].slice.call(e);const n=Mb(e);if(t===!0||t==="class_only"&&!n){const r=It.getOwnPropertyDescriptors(e);delete r[pt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[Hs]===!1&&(l[Hs]=!0,l[ep]=!0),(l.get||l.set)&&(r[a]={[ep]:!0,[Hs]:!0,[Ll]:l[Ll],[ya]:e[a]})}return It.create(Xi(e),r)}else{const r=Xi(e);if(r!==null&&n)return{...e};const i=It.create(r);return It.assign(i,e)}}function Kh(e,t=!1){return Ou(e)||Gn(e)||!fn(e)||(Ra(e)>1&&It.defineProperties(e,{set:ps,add:ps,clear:ps,delete:ps}),It.freeze(e),t&&Eu(e,(n,r)=>{Kh(r,!0)},!1)),e}function jO(){on(2)}var ps={[ya]:jO};function Ou(e){return e===null||!qh(e)?!0:It.isFrozen(e)}var Al="MapSet",rp="Patches",T0="ArrayMethods",jb={};function Zr(e){const t=jb[e];return t||on(0,e),t}var P0=e=>!!jb[e],xa,$b=()=>xa,$O=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:P0(Al)?Zr(Al):void 0,arrayMethodsPlugin_:P0(T0)?Zr(T0):void 0});function O0(e,t){t&&(e.patchPlugin_=Zr(rp),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function ip(e){op(e),e.drafts_.forEach(IO),e.drafts_=null}function op(e){e===xa&&(xa=e.parent_)}var M0=e=>xa=$O(xa,e);function IO(e){const t=e[pt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function j0(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[pt].modified_&&(ip(t),on(4)),fn(e)&&(e=$0(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[pt].base_,e,t)}else e=$0(t,n);return DO(t,e,!0),ip(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Ob?e:void 0}function $0(e,t){if(Ou(t))return t;const n=t[pt];if(!n)return Fl(t,e.handledSet_,e);if(!Mu(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);Lb(n,e)}return n.copy_}function DO(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Kh(t,n)}function Ib(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var Mu=(e,t)=>e.scope_===t,LO=[];function Db(e,t,n,r){const i=Ln(e),o=e.type_;if(r!==void 0&&tp(i,r,o)===t){Rl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Eu(i,(s,u)=>{if(Gn(u)){const d=l.get(u)||[];d.push(s),l.set(u,d)}})}const a=e.draftLocations_.get(t)??LO;for(const l of a)Rl(i,l,n,o)}function RO(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!Mu(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=Xh(o);Db(e,o.draft_??o,a,n),Lb(o,i)})}function Lb(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}Ib(e)}}function AO(e,t,n){const{scope_:r}=e;if(Gn(n)){const i=n[pt];Mu(i,r)&&i.callbacks_.push(function(){Ws(e);const a=Xh(i);Db(e,n,a,t)})}else fn(n)&&e.callbacks_.push(function(){const o=Ln(e);e.type_===3?o.has(n)&&Fl(n,r.handledSet_,r):tp(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Fl(tp(e.copy_,t,e.type_),r.handledSet_,r)})}function Fl(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Gn(e)||t.has(e)||!fn(e)||Ou(e)||(t.add(e),Eu(e,(r,i)=>{if(Gn(i)){const o=i[pt];if(Mu(o,n)){const a=Xh(o);Rl(e,r,a,e.type_),Ib(o)}}else fn(i)&&Fl(i,t,n)})),e}function FO(e,t){const n=ku(e),r={type_:n?1:0,scope_:t?t.scope_:$b(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Nl;n&&(i=[r],o=ba);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var Nl={get(e,t){if(t===pt)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Ln(e);if(!k0(i,t,e.type_))return NO(e,i,t);const o=i[t];if(e.finalized_||!fn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&MO(t))return o;if(o===od(e.base_,t)){Ws(e);const a=e.type_===1?+t:t,l=sp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Ln(e)},ownKeys(e){return Reflect.ownKeys(Ln(e))},set(e,t,n){const r=Rb(Ln(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=od(Ln(e),t),o=i==null?void 0:i[pt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(OO(n,i)&&(n!==void 0||k0(e.base_,t,e.type_)))return!0;Ws(e),ap(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),AO(e,t,n)),!0},deleteProperty(e,t){return Ws(e),od(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),ap(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Ln(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Hs]:!0,[ep]:e.type_!==1||t!=="length",[Ll]:r[Ll],[ya]:n[t]}},defineProperty(){on(11)},getPrototypeOf(e){return Xi(e.base_)},setPrototypeOf(){on(12)}},ba={};for(let e in Nl){let t=Nl[e];ba[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}ba.deleteProperty=function(e,t){return ba.set.call(this,e,t,void 0)};ba.set=function(e,t,n){return Nl.set.call(this,e[0],t,n,e[0])};function od(e,t){const n=e[pt];return(n?Ln(n):e)[t]}function NO(e,t,n){var i;const r=Rb(t,n);return r?ya in r?r[ya]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function Rb(e,t){if(!(t in e))return;let n=Xi(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Xi(n)}}function ap(e){e.modified_||(e.modified_=!0,e.parent_&&ap(e.parent_))}function Ws(e){e.copy_||(e.assigned_=new Map,e.copy_=np(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var zO=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(gi(t)&&!gi(n)){const o=n;n=t;const a=this;return function(s=o,...u){return a.produce(s,d=>n.call(this,d,...u))}}gi(n)||on(6),r!==void 0&&!gi(r)&&on(7);let i;if(fn(t)){const o=M0(this),a=sp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?ip(o):op(o)}return O0(o,r),j0(i,o)}else if(!t||!qh(t)){if(i=n(t),i===void 0&&(i=t),i===Ob&&(i=void 0),this.autoFreeze_&&Kh(i,!0),r){const o=[],a=[];Zr(rp).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else on(1,t)},this.produceWithPatches=(t,n)=>{if(gi(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},id(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),id(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),id(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){fn(e)||on(8),Gn(e)&&(e=BO(e));const t=M0(this),n=sp(t,e,void 0);return n[pt].isManual_=!0,op(t),n}finishDraft(e,t){const n=e&&e[pt];(!n||!n.isManual_)&&on(9);const{scope_:r}=n;return O0(r,t),j0(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Zr(rp).applyPatches_;return Gn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function sp(e,t,n,r){const[i,o]=Tu(t)?Zr(Al).proxyMap_(t,n):Pu(t)?Zr(Al).proxySet_(t,n):FO(t,n);return((n==null?void 0:n.scope_)??$b()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?RO(n,o,r):o.callbacks_.push(function(s){var d;(d=s.mapSetPlugin_)==null||d.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),i}function BO(e){return Gn(e)||on(10,e),Ab(e)}function Ab(e){if(!fn(e)||Ou(e))return e;const t=e[pt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=np(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=np(e,!0);return Eu(n,(i,o)=>{Rl(n,i,Ab(o))},r),t&&(t.finalized_=!1),n}var VO=new zO,Fb=VO.produce;function Nb(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var UO=Nb(),HO=Nb,WO=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Il:Il.apply(null,arguments)};function I0(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(zn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>TO(r)&&r.type===e,n}var zb=class Ro extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Ro.prototype)}static get[Symbol.species](){return Ro}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Ro(...t[0].concat(this)):new Ro(...t.concat(this))}};function D0(e){return fn(e)?Fb(e,()=>{}):e}function hs(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function GO(e){return typeof e=="boolean"}var YO=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new zb;return n&&(GO(n)?a.push(UO):a.push(HO(n.extraArgument))),a},qO="RTK_autoBatch",L0=e=>t=>{setTimeout(t,e)},XO=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:L0(10):e.type==="callback"?e.queueNotification:L0(e.timeout),u=()=>{a=!1,o&&(o=!1,l.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const c=()=>i&&d(),y=r.subscribe(c);return l.add(d),()=>{y(),l.delete(d)}},dispatch(d){var c;try{return i=!((c=d==null?void 0:d.meta)!=null&&c[qO]),o=!i,o&&(a||(a=!0,s(u))),r.dispatch(d)}finally{i=!0}}})},KO=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new zb(e);return r&&i.push(XO(typeof r=="object"?r:void 0)),i};function QO(e){const t=YO(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(Gh(n))s=EO(n);else throw new Error(zn(1));let u;typeof r=="function"?u=r(t):u=t();let d=Il;i&&(d=WO({trace:!1,...typeof i=="object"&&i}));const c=kO(...u),y=KO(c);let f=typeof l=="function"?l(y):y();const h=d(...f);return Yh(s,a,h)}function Bb(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(zn(28));if(l in t)throw new Error(zn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function ZO(e){return typeof e=="function"}function JO(e,t){let[n,r,i]=Bb(t),o;if(ZO(e))o=()=>D0(e());else{const l=D0(e);o=()=>l}function a(l=o(),s){let u=[n[s.type],...r.filter(({matcher:d})=>d(s)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,c)=>{if(c)if(Gn(d)){const f=c(d,s);return f===void 0?d:f}else{if(fn(d))return Fb(d,y=>c(y,s));{const y=c(d,s);if(y===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}}return d},l)}return a.getInitialState=o,a}var e4=Symbol.for("rtk-slice-createasyncthunk");function t4(e,t){return`${e}/${t}`}function n4({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[e4];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(zn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(i4()):i.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(S,C){const T=typeof S=="string"?S:S.type;if(!T)throw new Error(zn(12));if(T in u.sliceCaseReducersByType)throw new Error(zn(13));return u.sliceCaseReducersByType[T]=C,d},addMatcher(S,C){return u.sliceMatchers.push({matcher:S,reducer:C}),d},exposeAction(S,C){return u.actionCreators[S]=C,d},exposeCaseReducer(S,C){return u.sliceCaseReducersByName[S]=C,d}};s.forEach(S=>{const C=l[S],T={reducerName:S,type:t4(o,S),createNotation:typeof i.reducers=="function"};a4(C)?l4(T,C,d,t):o4(T,C,d)});function c(){const[S={},C=[],T=void 0]=typeof i.extraReducers=="function"?Bb(i.extraReducers):[i.extraReducers],_={...S,...u.sliceCaseReducersByType};return JO(i.initialState,E=>{for(let j in _)E.addCase(j,_[j]);for(let j of u.sliceMatchers)E.addMatcher(j.matcher,j.reducer);for(let j of C)E.addMatcher(j.matcher,j.reducer);T&&E.addDefaultCase(T)})}const y=S=>S,f=new Map,h=new WeakMap;let v;function w(S,C){return v||(v=c()),v(S,C)}function p(){return v||(v=c()),v.getInitialState()}function m(S,C=!1){function T(E){let j=E[S];return typeof j>"u"&&C&&(j=hs(h,T,p)),j}function _(E=y){const j=hs(f,C,()=>new WeakMap);return hs(j,E,()=>{const I={};for(const[D,O]of Object.entries(i.selectors??{}))I[D]=r4(O,E,()=>hs(h,E,p),C);return I})}return{reducerPath:S,getSelectors:_,get selectors(){return _(T)},selectSlice:T}}const x={name:o,reducer:w,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:p,...m(a),injectInto(S,{reducerPath:C,...T}={}){const _=C??a;return S.inject({reducerPath:_,reducer:w},T),{...x,...m(_,!0)}}};return x}}function r4(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var Vb=n4();function i4(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function o4({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!s4(r))throw new Error(zn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?I0(e,a):I0(e))}function a4(e){return e._reducerDefinitionType==="asyncThunk"}function s4(e){return e._reducerDefinitionType==="reducerWithPrepare"}function l4({type:e,reducerName:t},n,r,i){if(!i)throw new Error(zn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:u,options:d}=n,c=i(e,o,d);r.exposeAction(t,c),a&&r.addCase(c.fulfilled,a),l&&r.addCase(c.pending,l),s&&r.addCase(c.rejected,s),u&&r.addMatcher(c.settled,u),r.exposeCaseReducer(t,{fulfilled:a||ms,pending:l||ms,rejected:s||ms,settled:u||ms})}function ms(){}function zn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Ub=Vb({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===t.payload.id);r&&r.quantity>=n.stock||(r?r.quantity=(r.quantity||0)+1:e.items.push({...t.payload,quantity:1}))},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:Aa,removeFromCart:u4,clearCart:Qh,addAllToCart:c4,incrementQuantity:d4,decrementQuantity:f4}=Ub.actions,p4=Ub.reducer;function Hb(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Hb(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Wr(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Hb(e))&&(r&&(r+=" "),r+=t);return r}function h4(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}h4(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Fa=e=>typeof e=="number"&&!isNaN(e),Jr=e=>typeof e=="string",Yn=e=>typeof e=="function",m4=e=>Jr(e)||Fa(e),lp=e=>Jr(e)||Yn(e)?e:null,g4=(e,t)=>e===!1||Fa(e)&&e>0?e:t,up=e=>b.isValidElement(e)||Jr(e)||Yn(e)||Fa(e);function v4(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function y4({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:d,playToast:c}){let y=n?`${e}--${a}`:e,f=n?`${t}--${a}`:t,h=b.useRef(0);return b.useLayoutEffect(()=>{let v=u.current,w=y.split(" "),p=m=>{m.target===u.current&&(c(),v.removeEventListener("animationend",p),v.removeEventListener("animationcancel",p),h.current===0&&m.type!=="animationcancel"&&v.classList.remove(...w))};v.classList.add(...w),v.addEventListener("animationend",p),v.addEventListener("animationcancel",p)},[]),b.useEffect(()=>{let v=u.current,w=()=>{v.removeEventListener("animationend",w),r?v4(v,s,i):s()};d||(l?w():(h.current=1,v.className+=` ${f}`,v.addEventListener("animationend",w)))},[d]),q.createElement(q.Fragment,null,o)}}function R0(e,t){return{content:Wb(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Wb(e,t,n=!1){return b.isValidElement(e)&&!Jr(e.type)?b.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Yn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function x4({closeToast:e,theme:t,ariaLabel:n="close"}){return q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function b4({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:d}){let c=i||a&&l===0,y={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(y.transform=`scaleX(${l})`);let f=Wr("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),h=Yn(o)?o({rtl:s,type:r,defaultClassName:f}):Wr(f,o),v={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return q.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":c},q.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${r}`}),q.createElement("div",{role:"progressbar","aria-hidden":c?"true":"false","aria-label":"notification timer",className:h,style:y,...v}))}var w4=1,Gb=()=>`${w4++}`;function S4(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,u=new Set,d=m=>(u.add(m),()=>u.delete(m)),c=()=>{a=Array.from(s.values()),u.forEach(m=>m())},y=({containerId:m,toastId:x,updateId:S})=>{let C=m?m!==e:e!==1,T=s.has(x)&&S==null;return C||T},f=(m,x)=>{s.forEach(S=>{var C;(x==null||x===S.props.toastId)&&((C=S.toggle)==null||C.call(S,m))})},h=m=>{var x,S;(S=(x=m.props)==null?void 0:x.onClose)==null||S.call(x,m.removalReason),m.isActive=!1},v=m=>{if(m==null)s.forEach(h);else{let x=s.get(m);x&&h(x)}c()},w=()=>{i-=o.length,o=[]},p=m=>{var x,S;let{toastId:C,updateId:T}=m.props,_=T==null;m.staleId&&s.delete(m.staleId),m.isActive=!0,s.set(C,m),c(),n(R0(m,_?"added":"updated")),_&&((S=(x=m.props).onOpen)==null||S.call(x))};return{id:e,props:l,observe:d,toggle:f,removeToast:v,toasts:s,clearQueue:w,buildToast:(m,x)=>{if(y(x))return;let{toastId:S,updateId:C,data:T,staleId:_,delay:E}=x,j=C==null;j&&i++;let I={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([O,M])=>M!=null)),toastId:S,updateId:C,data:T,isIn:!1,className:lp(x.className||l.toastClassName),progressClassName:lp(x.progressClassName||l.progressClassName),autoClose:x.isLoading?!1:g4(x.autoClose,l.autoClose),closeToast(O){s.get(S).removalReason=O,v(S)},deleteToast(){let O=s.get(S);if(O!=null){if(n(R0(O,"removed")),s.delete(S),i--,i<0&&(i=0),o.length>0){p(o.shift());return}c()}}};I.closeButton=l.closeButton,x.closeButton===!1||up(x.closeButton)?I.closeButton=x.closeButton:x.closeButton===!0&&(I.closeButton=up(l.closeButton)?l.closeButton:!0);let D={content:m,props:I,staleId:_};l.limit&&l.limit>0&&i>l.limit&&j?o.push(D):Fa(E)?setTimeout(()=>{p(D)},E):p(D)},setProps(m){l=m},setToggle:(m,x)=>{let S=s.get(m);S&&(S.toggle=x)},isToastActive:m=>{var x;return(x=s.get(m))==null?void 0:x.isActive},getSnapshot:()=>a}}var dt=new Map,wa=[],cp=new Set,_4=e=>cp.forEach(t=>t(e)),Yb=()=>dt.size>0;function C4(){wa.forEach(e=>Xb(e.content,e.options)),wa=[]}var E4=(e,{containerId:t})=>{var n;return(n=dt.get(t||1))==null?void 0:n.toasts.get(e)};function qb(e,t){var n;if(t)return!!((n=dt.get(t))!=null&&n.isToastActive(e));let r=!1;return dt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function k4(e){if(!Yb()){wa=wa.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||m4(e))dt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=dt.get(e.containerId);t?t.removeToast(e.id):dt.forEach(n=>{n.removeToast(e.id)})}}var T4=(e={})=>{dt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function Xb(e,t){up(e)&&(Yb()||wa.push({content:e,options:t}),dt.forEach(n=>{n.buildToast(e,t)}))}function P4(e){var t;(t=dt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function Kb(e,t){dt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function O4(e){let t=e.containerId||1;return{subscribe(n){let r=S4(t,e,_4);dt.set(t,r);let i=r.observe(n);return C4(),()=>{i(),dt.delete(t)}},setProps(n){var r;(r=dt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=dt.get(t))==null?void 0:n.getSnapshot()}}}function M4(e){return cp.add(e),()=>{cp.delete(e)}}function j4(e){return e&&(Jr(e.toastId)||Fa(e.toastId))?e.toastId:Gb()}function Na(e,t){return Xb(e,t),t.toastId}function ju(e,t){return{...t,type:t&&t.type||e,toastId:j4(t)}}function $u(e){return(t,n)=>Na(t,ju(e,n))}function J(e,t){return Na(e,ju("default",t))}J.loading=(e,t)=>Na(e,ju("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function $4(e,{pending:t,error:n,success:r},i){let o;t&&(o=Jr(t)?J.loading(t,i):J.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,d,c)=>{if(d==null){J.dismiss(o);return}let y={type:u,...a,...i,data:c},f=Jr(d)?{render:d}:d;return o?J.update(o,{...y,...f}):J(f.render,{...y,...f}),c},s=Yn(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}J.promise=$4;J.success=$u("success");J.info=$u("info");J.error=$u("error");J.warning=$u("warning");J.warn=J.warning;J.dark=(e,t)=>Na(e,ju("default",{theme:"dark",...t}));function I4(e){k4(e)}J.dismiss=I4;J.clearWaitingQueue=T4;J.isActive=qb;J.update=(e,t={})=>{let n=E4(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:Gb()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Na(a,o)}};J.done=e=>{J.update(e,{progress:1})};J.onChange=M4;J.play=e=>Kb(!0,e);J.pause=e=>Kb(!1,e);function D4(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=b.useRef(O4(e)).current;i(e);let o=(t=b.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:d}=u.props;s.has(d)||s.set(d,[]),s.get(d).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:qb,count:o==null?void 0:o.length}}function L4(e){let[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:d,closeOnClick:c}=e;P4({id:e.toastId,containerId:e.containerId,fn:n}),b.useEffect(()=>{if(e.pauseOnFocusLoss)return y(),()=>{f()}},[e.pauseOnFocusLoss]);function y(){document.hasFocus()||p(),window.addEventListener("focus",w),window.addEventListener("blur",p)}function f(){window.removeEventListener("focus",w),window.removeEventListener("blur",p)}function h(_){if(e.draggable===!0||e.draggable===_.pointerType){m();let E=o.current;a.canCloseOnClick=!0,a.canDrag=!0,E.style.transition="none",e.draggableDirection==="x"?(a.start=_.clientX,a.removalDistance=E.offsetWidth*(e.draggablePercent/100)):(a.start=_.clientY,a.removalDistance=E.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function v(_){let{top:E,bottom:j,left:I,right:D}=o.current.getBoundingClientRect();_.nativeEvent.type!=="touchend"&&e.pauseOnHover&&_.clientX>=I&&_.clientX<=D&&_.clientY>=E&&_.clientY<=j?p():w()}function w(){n(!0)}function p(){n(!1)}function m(){a.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",C)}function x(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",C)}function S(_){let E=o.current;if(a.canDrag&&E){a.didMove=!0,t&&p(),e.draggableDirection==="x"?a.delta=_.clientX-a.start:a.delta=_.clientY-a.start,a.start!==_.clientX&&(a.canCloseOnClick=!1);let j=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;E.style.transform=`translate3d(${j},0)`,E.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function C(){x();let _=o.current;if(a.canDrag&&a.didMove&&_){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}_.style.transition="transform 0.2s, opacity 0.2s",_.style.removeProperty("transform"),_.style.removeProperty("opacity")}}let T={onPointerDown:h,onPointerUp:v};return l&&s&&(T.onMouseEnter=p,e.stacked||(T.onMouseLeave=w)),c&&(T.onClick=_=>{d&&d(_),a.canCloseOnClick&&u(!0)}),{playToast:w,pauseToast:p,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:T}}var R4=typeof window<"u"?b.useLayoutEffect:b.useEffect,Iu=({theme:e,type:t,isLoading:n,...r})=>q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function A4(e){return q.createElement(Iu,{...e},q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function F4(e){return q.createElement(Iu,{...e},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function N4(e){return q.createElement(Iu,{...e},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function z4(e){return q.createElement(Iu,{...e},q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function B4(){return q.createElement("div",{className:"Toastify__spinner"})}var dp={info:F4,warning:A4,success:N4,error:z4,spinner:B4},V4=e=>e in dp;function U4({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Yn(r)?i=r({...o,isLoading:n}):b.isValidElement(r)?i=b.cloneElement(r,o):n?i=dp.spinner():V4(t)&&(i=dp[t](o))),i}var H4=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=L4(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:d,hideProgressBar:c,closeToast:y,transition:f,position:h,className:v,style:w,progressClassName:p,updateId:m,role:x,progress:S,rtl:C,toastId:T,deleteToast:_,isIn:E,isLoading:j,closeOnClick:I,theme:D,ariaLabel:O}=e,M=Wr("Toastify__toast",`Toastify__toast-theme--${D}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":I}),L=Yn(v)?v({rtl:C,position:h,type:d,defaultClassName:M}):Wr(M,v),A=U4(e),R=!!S||!s,F={closeToast:y,type:d,theme:D},P=null;return a===!1||(Yn(a)?P=a(F):b.isValidElement(a)?P=b.cloneElement(a,F):P=x4(F)),q.createElement(f,{isIn:E,done:_,position:h,preventExitTransition:n,nodeRef:r,playToast:o},q.createElement("div",{id:T,tabIndex:0,onClick:u,"data-in":E,className:L,...i,style:w,ref:r,...E&&{role:x,"aria-label":O}},A!=null&&q.createElement("div",{className:Wr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},A),Wb(l,e,!t),P,!e.customProgressBar&&q.createElement(b4,{...m&&!R?{key:`p-${m}`}:{},rtl:C,theme:D,delay:s,isRunning:t,isIn:E,closeToast:y,hide:c,type:d,className:p,controlledProgress:R,progress:S||0})))},W4=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),G4=y4(W4("bounce",!0)),Y4={position:"top-right",transition:G4,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function oo(e){let t={...Y4,...e},n=e.stacked,[r,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=D4(t),{className:u,style:d,rtl:c,containerId:y,hotKeys:f}=t;function h(w){let p=Wr("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":c});return Yn(u)?u({position:w,rtl:c,defaultClassName:p}):Wr(p,lp(u))}function v(){n&&(i(!0),J.play())}return R4(()=>{var w;if(n){let p=o.current.querySelectorAll('[data-in="true"]'),m=12,x=(w=t.position)==null?void 0:w.includes("top"),S=0,C=0;Array.from(p).reverse().forEach((T,_)=>{let E=T;E.classList.add("Toastify__toast--stacked"),_>0&&(E.dataset.collapsed=`${r}`),E.dataset.pos||(E.dataset.pos=x?"top":"bot");let j=S*(r?.2:1)+(r?0:m*_);E.style.setProperty("--y",`${x?j:j*-1}px`),E.style.setProperty("--g",`${m}`),E.style.setProperty("--s",`${1-(r?C:0)}`),S+=E.offsetHeight,C+=.025})}},[r,s,n]),b.useEffect(()=>{function w(p){var m;let x=o.current;f(p)&&((m=x.querySelector('[tabIndex="0"]'))==null||m.focus(),i(!1),J.pause()),p.key==="Escape"&&(document.activeElement===x||x!=null&&x.contains(document.activeElement))&&(i(!0),J.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[f]),q.createElement("section",{ref:o,className:"Toastify",id:y,onMouseEnter:()=>{n&&(i(!1),J.pause())},onMouseLeave:v,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,p)=>{let m=p.length?{...d}:{...d,pointerEvents:"none"};return q.createElement("div",{tabIndex:-1,className:h(w),"data-stacked":n,style:m,key:`c-${w}`},p.map(({content:x,props:S})=>q.createElement(H4,{...S,stacked:n,collapseAll:v,isIn:l(S.toastId,S.containerId),key:`t-${S.key}`},x)))}))}const Sa="/Didiv/assets/nofoto-2f8d9d99.png",Qb=()=>{const e=Kn(),[t,n]=b.useState([]);b.useEffect(()=>{const o=new Date,a=new Date;a.setDate(o.getDate()-7);const l=a.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${l}`).then(s=>s.json()).then(s=>n(s.data)).catch(s=>console.error("Помилка завантаження нових товарів:",s))},[]),console.log(t);const r=[...t].sort(()=>Math.random()-.5).slice(0,3),i=o=>{e(Aa({...o,quantity:1})),J.success(`${o.name} додано в кошик!`)};return!t||t.length===0?null:g.jsxs(lO,{children:[g.jsx(oo,{}),g.jsx(uO,{children:"Нові товари"}),g.jsxs(cO,{children:[r.map(o=>{var a;return g.jsxs(dO,{children:[g.jsxs(fO,{to:`/product/${o.id}`,children:[g.jsx(pO,{children:"Новинка"}),g.jsx("img",{src:((a=o.images)==null?void 0:a[0].url)||Sa,alt:o.name,onError:l=>{l.currentTarget.onerror=null,l.currentTarget.src=Sa}}),g.jsx("div",{className:"overlay"})]}),g.jsxs(hO,{children:[g.jsx(mO,{children:o.name}),g.jsxs(gO,{children:[g.jsxs(vO,{children:[o.price," грн"]}),g.jsx(yO,{onClick:()=>i(o),children:g.jsx(La,{size:22})})]})]})]},o.id)}),g.jsx(xO,{to:"/catalog/new",children:g.jsxs(bO,{children:[g.jsx("p",{children:"Усі новинки"}),g.jsx(wO,{children:g.jsx(Hh,{size:24})})]})})]})]})};function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function q4(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function X4(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var K4=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(X4(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=q4(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),nt="-ms-",zl="-moz-",ce="-webkit-",Zb="comm",Zh="rule",Jh="decl",Q4="@import",Jb="@keyframes",Z4="@layer",J4=Math.abs,Du=String.fromCharCode,e3=Object.assign;function t3(e,t){return Ke(e,0)^45?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}function ew(e){return e.trim()}function n3(e,t){return(e=t.exec(e))?e[0]:e}function de(e,t,n){return e.replace(t,n)}function fp(e,t){return e.indexOf(t)}function Ke(e,t){return e.charCodeAt(t)|0}function _a(e,t,n){return e.slice(t,n)}function xn(e){return e.length}function em(e){return e.length}function gs(e,t){return t.push(e),e}function r3(e,t){return e.map(t).join("")}var Lu=1,Ki=1,tw=0,kt=0,Ie=0,ao="";function Ru(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Lu,column:Ki,length:a,return:""}}function Co(e,t){return e3(Ru("",null,null,"",null,null,0),e,{length:-e.length},t)}function i3(){return Ie}function o3(){return Ie=kt>0?Ke(ao,--kt):0,Ki--,Ie===10&&(Ki=1,Lu--),Ie}function Lt(){return Ie=kt<tw?Ke(ao,kt++):0,Ki++,Ie===10&&(Ki=1,Lu++),Ie}function En(){return Ke(ao,kt)}function Gs(){return kt}function za(e,t){return _a(ao,e,t)}function Ca(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nw(e){return Lu=Ki=1,tw=xn(ao=e),kt=0,[]}function rw(e){return ao="",e}function Ys(e){return ew(za(kt-1,pp(e===91?e+2:e===40?e+1:e)))}function a3(e){for(;(Ie=En())&&Ie<33;)Lt();return Ca(e)>2||Ca(Ie)>3?"":" "}function s3(e,t){for(;--t&&Lt()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return za(e,Gs()+(t<6&&En()==32&&Lt()==32))}function pp(e){for(;Lt();)switch(Ie){case e:return kt;case 34:case 39:e!==34&&e!==39&&pp(Ie);break;case 40:e===41&&pp(e);break;case 92:Lt();break}return kt}function l3(e,t){for(;Lt()&&e+Ie!==47+10;)if(e+Ie===42+42&&En()===47)break;return"/*"+za(t,kt-1)+"*"+Du(e===47?e:Lt())}function u3(e){for(;!Ca(En());)Lt();return za(e,kt)}function c3(e){return rw(qs("",null,null,null,[""],e=nw(e),0,[0],e))}function qs(e,t,n,r,i,o,a,l,s){for(var u=0,d=0,c=a,y=0,f=0,h=0,v=1,w=1,p=1,m=0,x="",S=i,C=o,T=r,_=x;w;)switch(h=m,m=Lt()){case 40:if(h!=108&&Ke(_,c-1)==58){fp(_+=de(Ys(m),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:_+=Ys(m);break;case 9:case 10:case 13:case 32:_+=a3(h);break;case 92:_+=s3(Gs()-1,7);continue;case 47:switch(En()){case 42:case 47:gs(d3(l3(Lt(),Gs()),t,n),s);break;default:_+="/"}break;case 123*v:l[u++]=xn(_)*p;case 125*v:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+d:p==-1&&(_=de(_,/\f/g,"")),f>0&&xn(_)-c&&gs(f>32?F0(_+";",r,n,c-1):F0(de(_," ","")+";",r,n,c-2),s);break;case 59:_+=";";default:if(gs(T=A0(_,t,n,u,d,i,l,x,S=[],C=[],c),o),m===123)if(d===0)qs(_,t,T,T,S,o,c,l,C);else switch(y===99&&Ke(_,3)===110?100:y){case 100:case 108:case 109:case 115:qs(e,T,T,r&&gs(A0(e,T,T,0,0,i,l,x,i,S=[],c),C),i,C,c,l,r?S:C);break;default:qs(_,T,T,T,[""],C,0,l,C)}}u=d=f=0,v=p=1,x=_="",c=a;break;case 58:c=1+xn(_),f=h;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&o3()==125)continue}switch(_+=Du(m),m*v){case 38:p=d>0?1:(_+="\f",-1);break;case 44:l[u++]=(xn(_)-1)*p,p=1;break;case 64:En()===45&&(_+=Ys(Lt())),y=En(),d=c=xn(x=_+=u3(Gs())),m++;break;case 45:h===45&&xn(_)==2&&(v=0)}}return o}function A0(e,t,n,r,i,o,a,l,s,u,d){for(var c=i-1,y=i===0?o:[""],f=em(y),h=0,v=0,w=0;h<r;++h)for(var p=0,m=_a(e,c+1,c=J4(v=a[h])),x=e;p<f;++p)(x=ew(v>0?y[p]+" "+m:de(m,/&\f/g,y[p])))&&(s[w++]=x);return Ru(e,t,n,i===0?Zh:l,s,u,d)}function d3(e,t,n){return Ru(e,t,n,Zb,Du(i3()),_a(e,2,-2),0)}function F0(e,t,n,r){return Ru(e,t,n,Jh,_a(e,0,r),_a(e,r+1,-1),r)}function Li(e,t){for(var n="",r=em(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function f3(e,t,n,r){switch(e.type){case Z4:if(e.children.length)break;case Q4:case Jh:return e.return=e.return||e.value;case Zb:return"";case Jb:return e.return=e.value+"{"+Li(e.children,r)+"}";case Zh:e.value=e.props.join(",")}return xn(n=Li(e.children,r))?e.return=e.value+"{"+n+"}":""}function p3(e){var t=em(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function h3(e){return function(t){t.root||(t=t.return)&&e(t)}}function m3(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var g3=function(t,n,r){for(var i=0,o=0;i=o,o=En(),i===38&&o===12&&(n[r]=1),!Ca(o);)Lt();return za(t,kt)},v3=function(t,n){var r=-1,i=44;do switch(Ca(i)){case 0:i===38&&En()===12&&(n[r]=1),t[r]+=g3(kt-1,n,r);break;case 2:t[r]+=Ys(i);break;case 4:if(i===44){t[++r]=En()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Du(i)}while(i=Lt());return t},y3=function(t,n){return rw(v3(nw(t),n))},N0=new WeakMap,x3=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!N0.get(r))&&!i){N0.set(t,!0);for(var o=[],a=y3(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var d=0;d<l.length;d++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[d]):l[d]+" "+a[s]}}},b3=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function iw(e,t){switch(t3(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+zl+e+nt+e+e;case 6828:case 4268:return ce+e+nt+e+e;case 6165:return ce+e+nt+"flex-"+e+e;case 5187:return ce+e+de(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+nt+"flex-$1$2")+e;case 5443:return ce+e+nt+"flex-item-"+de(e,/flex-|-self/,"")+e;case 4675:return ce+e+nt+"flex-line-pack"+de(e,/align-content|flex-|-self/,"")+e;case 5548:return ce+e+nt+de(e,"shrink","negative")+e;case 5292:return ce+e+nt+de(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+de(e,"-grow","")+ce+e+nt+de(e,"grow","positive")+e;case 4554:return ce+de(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return de(de(de(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return de(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return de(de(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+nt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+e+e;case 4095:case 3583:case 4068:case 2532:return de(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(Ke(e,t+4)!==45)break;case 102:return de(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+zl+(Ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~fp(e,"stretch")?iw(de(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ke(e,t+1)!==115)break;case 6444:switch(Ke(e,xn(e)-3-(~fp(e,"!important")&&10))){case 107:return de(e,":",":"+ce)+e;case 101:return de(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ce+(Ke(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+nt+"$2box$3")+e}break;case 5936:switch(Ke(e,t+11)){case 114:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ce+e+nt+e+e}return e}var w3=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Jh:t.return=iw(t.value,t.length);break;case Jb:return Li([Co(t,{value:de(t.value,"@","@"+ce)})],i);case Zh:if(t.length)return r3(t.props,function(o){switch(n3(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Li([Co(t,{props:[de(o,/:(read-\w+)/,":"+zl+"$1")]})],i);case"::placeholder":return Li([Co(t,{props:[de(o,/:(plac\w+)/,":"+ce+"input-$1")]}),Co(t,{props:[de(o,/:(plac\w+)/,":"+zl+"$1")]}),Co(t,{props:[de(o,/:(plac\w+)/,nt+"input-$1")]})],i)}return""})}},S3=[w3],_3=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var w=v.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||S3,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var w=v.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)o[w[p]]=!0;l.push(v)});var s,u=[x3,b3];{var d,c=[f3,h3(function(v){d.insert(v)})],y=p3(u.concat(i,c)),f=function(w){return Li(c3(w),y)};s=function(w,p,m,x){d=m,f(w?w+"{"+p.styles+"}":p.styles),x&&(h.inserted[p.name]=!0)}}var h={key:n,sheet:new K4({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return h.sheet.hydrate(l),h},ow={exports:{}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=typeof Symbol=="function"&&Symbol.for,tm=Ye?Symbol.for("react.element"):60103,nm=Ye?Symbol.for("react.portal"):60106,Au=Ye?Symbol.for("react.fragment"):60107,Fu=Ye?Symbol.for("react.strict_mode"):60108,Nu=Ye?Symbol.for("react.profiler"):60114,zu=Ye?Symbol.for("react.provider"):60109,Bu=Ye?Symbol.for("react.context"):60110,rm=Ye?Symbol.for("react.async_mode"):60111,Vu=Ye?Symbol.for("react.concurrent_mode"):60111,Uu=Ye?Symbol.for("react.forward_ref"):60112,Hu=Ye?Symbol.for("react.suspense"):60113,C3=Ye?Symbol.for("react.suspense_list"):60120,Wu=Ye?Symbol.for("react.memo"):60115,Gu=Ye?Symbol.for("react.lazy"):60116,E3=Ye?Symbol.for("react.block"):60121,k3=Ye?Symbol.for("react.fundamental"):60117,T3=Ye?Symbol.for("react.responder"):60118,P3=Ye?Symbol.for("react.scope"):60119;function zt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case tm:switch(e=e.type,e){case rm:case Vu:case Au:case Nu:case Fu:case Hu:return e;default:switch(e=e&&e.$$typeof,e){case Bu:case Uu:case Gu:case Wu:case zu:return e;default:return t}}case nm:return t}}}function aw(e){return zt(e)===Vu}me.AsyncMode=rm;me.ConcurrentMode=Vu;me.ContextConsumer=Bu;me.ContextProvider=zu;me.Element=tm;me.ForwardRef=Uu;me.Fragment=Au;me.Lazy=Gu;me.Memo=Wu;me.Portal=nm;me.Profiler=Nu;me.StrictMode=Fu;me.Suspense=Hu;me.isAsyncMode=function(e){return aw(e)||zt(e)===rm};me.isConcurrentMode=aw;me.isContextConsumer=function(e){return zt(e)===Bu};me.isContextProvider=function(e){return zt(e)===zu};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===tm};me.isForwardRef=function(e){return zt(e)===Uu};me.isFragment=function(e){return zt(e)===Au};me.isLazy=function(e){return zt(e)===Gu};me.isMemo=function(e){return zt(e)===Wu};me.isPortal=function(e){return zt(e)===nm};me.isProfiler=function(e){return zt(e)===Nu};me.isStrictMode=function(e){return zt(e)===Fu};me.isSuspense=function(e){return zt(e)===Hu};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Au||e===Vu||e===Nu||e===Fu||e===Hu||e===C3||typeof e=="object"&&e!==null&&(e.$$typeof===Gu||e.$$typeof===Wu||e.$$typeof===zu||e.$$typeof===Bu||e.$$typeof===Uu||e.$$typeof===k3||e.$$typeof===T3||e.$$typeof===P3||e.$$typeof===E3)};me.typeOf=zt;ow.exports=me;var O3=ow.exports,sw=O3,M3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},j3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lw={};lw[sw.ForwardRef]=M3;lw[sw.Memo]=j3;var $3=!0;function uw(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var im=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||$3===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},cw=function(t,n,r){im(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function I3(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var D3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},L3=/[A-Z]|^ms/g,R3=/_EMO_([^_]+?)_([^]*?)_EMO_/g,dw=function(t){return t.charCodeAt(1)===45},z0=function(t){return t!=null&&typeof t!="boolean"},ad=m3(function(e){return dw(e)?e:e.replace(L3,"-$&").toLowerCase()}),B0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(R3,function(r,i,o){return bn={name:i,styles:o,next:bn},i})}return D3[t]!==1&&!dw(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ea(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return bn={name:n.name,styles:n.styles,next:bn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)bn={name:r.name,styles:r.styles,next:bn},r=r.next;var i=n.styles+";";return i}return A3(e,t,n)}case"function":{if(e!==void 0){var o=bn,a=n(e);return bn=o,Ea(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function A3(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ea(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":z0(a)&&(r+=ad(o)+":"+B0(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)z0(a[l])&&(r+=ad(o)+":"+B0(o,a[l])+";");else{var s=Ea(e,t,a);switch(o){case"animation":case"animationName":{r+=ad(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var V0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,bn,om=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";bn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Ea(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Ea(r,n,t[l]),i&&(o+=a[l]);V0.lastIndex=0;for(var s="",u;(u=V0.exec(o))!==null;)s+="-"+u[1];var d=I3(o)+s;return{name:d,styles:o,next:bn}},F3=function(t){return t()},N3=Yd["useInsertionEffect"]?Yd["useInsertionEffect"]:!1,fw=N3||F3,am={}.hasOwnProperty,pw=b.createContext(typeof HTMLElement<"u"?_3({key:"css"}):null);pw.Provider;var hw=function(t){return b.forwardRef(function(n,r){var i=b.useContext(pw);return t(n,i,r)})},mw=b.createContext({}),hp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",z3=function(t,n){var r={};for(var i in n)am.call(n,i)&&(r[i]=n[i]);return r[hp]=t,r},B3=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return im(n,r,i),fw(function(){return cw(n,r,i)}),null},V3=hw(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[hp],o=[r],a="";typeof e.className=="string"?a=uw(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=om(o,void 0,b.useContext(mw));a+=t.key+"-"+l.name;var s={};for(var u in e)am.call(e,u)&&u!=="css"&&u!==hp&&(s[u]=e[u]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(B3,{cache:t,serialized:l,isStringTag:typeof i=="string"}),b.createElement(i,s))}),U3=V3,K=function(t,n){var r=arguments;if(n==null||!am.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=U3,o[1]=z3(t,n);for(var a=2;a<i;a++)o[a]=r[a];return b.createElement.apply(null,o)};function sm(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return om(t)}var H3=function(){var t=sm.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},W3=Ik,G3=function(t){return t!=="theme"},U0=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?W3:G3},H0=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},Y3=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return im(n,r,i),fw(function(){return cw(n,r,i)}),null},q3=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=H0(t,n,r),s=l||U0(i),u=!s("as");return function(){var d=arguments,c=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&c.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)c.push.apply(c,d);else{c.push(d[0][0]);for(var y=d.length,f=1;f<y;f++)c.push(d[f],d[0][f])}var h=hw(function(v,w,p){var m=u&&v.as||i,x="",S=[],C=v;if(v.theme==null){C={};for(var T in v)C[T]=v[T];C.theme=b.useContext(mw)}typeof v.className=="string"?x=uw(w.registered,S,v.className):v.className!=null&&(x=v.className+" ");var _=om(c.concat(S),w.registered,C);x+=w.key+"-"+_.name,a!==void 0&&(x+=" "+a);var E=u&&l===void 0?U0(m):s,j={};for(var I in v)u&&I==="as"||E(I)&&(j[I]=v[I]);return j.className=x,j.ref=p,b.createElement(b.Fragment,null,b.createElement(Y3,{cache:w,serialized:_,isStringTag:typeof m=="string"}),b.createElement(m,j))});return h.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=c,h.__emotion_forwardProp=l,Object.defineProperty(h,"toString",{value:function(){return"."+a}}),h.withComponent=function(v,w){return e(v,Z({},n,w,{shouldForwardProp:H0(h,w,!0)})).apply(void 0,c)},h}},X3=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Re=q3.bind();X3.forEach(function(e){Re[e]=Re(e)});const K3=Re.section`
  background-color: var(--second-background);
`,Q3=Re.div`
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
`,Z3=Re.div`

`,J3=Re.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,eM=Re.div`
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
`;const tM=Re(Me)`
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
`,nM=Re.div`
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
`,rM=Re.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,iM=Re.p`
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
`;var oM={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};aM(oM);function aM(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var sM="#4fa94d",lM={"aria-busy":!0,role:"progressbar"},uM=k.div`
  display: ${e=>e.$visible?"flex":"none"};
`,cM="http://www.w3.org/2000/svg",Yu=({height:e=100,width:t=100,radius:n=5,color:r=sM,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>g.jsx(uM,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...lM,children:g.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:cM,"data-testid":"ball-triangle-svg",children:[g.jsx("title",{children:"Ball Triangle"}),g.jsx("desc",{children:"Animated representation of three balls"}),g.jsx("g",{fill:"none",fillRule:"evenodd",children:g.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[g.jsxs("circle",{cx:"5",cy:"50",r:n,children:[g.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),g.jsxs("circle",{cx:"27",cy:"5",r:n,children:[g.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),g.jsxs("circle",{cx:"49",cy:"50",r:n,children:[g.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),Zt=242.776657104492,dM=1.6,fM=Bh`
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
`;k.path`
  stroke-dasharray: ${Zt*.01}px, ${Zt};
  stroke-dashoffset: 0;
  animation: ${fM} ${dM}s linear infinite;
`;var pM=Bh`
to {
   transform: rotate(360deg);
 }
`;k.svg`
  animation: ${pM} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
`;k.polyline`
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
`;var hM=Bh`
to {
   stroke-dashoffset: 136;
 }
`;k.polygon`
  stroke-dasharray: 17;
  animation: ${hM} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;k.svg`
  transform-origin: 50% 65%;
`;const mM=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();console.log(a),t(a.data.map(l=>{var s;return{id:l.id_title,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?g.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:g.jsx(Yu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):g.jsx(K3,{children:g.jsxs(Q3,{children:[g.jsx(Z3,{children:g.jsx(Qb,{})}),g.jsx(J3,{children:"Каталог"}),g.jsx(eM,{children:e.map(i=>g.jsxs(tM,{to:`/catalog/${i.title}`,children:[g.jsx(nM,{children:g.jsx(rM,{src:i.image,alt:i.title})}),g.jsx(iM,{children:i.title})]},i.id))})]})})},gM=Re.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,vM=Re.h1`
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
`,yM=Re.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,xM=Re(Me)`

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

  
`,bM=()=>g.jsxs(gM,{children:[g.jsxs(vM,{children:[" ",g.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),g.jsx(yM,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),g.jsx(xM,{children:" На головну"})]});const wM=k.div`
  width: 100%;
  height: 100%;
font-family: var(--main-font);
`,SM=k.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var gw={},vw={},qu={},yw={exports:{}},Ba={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var W0=Object.getOwnPropertySymbols,_M=Object.prototype.hasOwnProperty,CM=Object.prototype.propertyIsEnumerable;function EM(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function kM(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var TM=kM()?Object.assign:function(e,t){for(var n,r=EM(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)_M.call(n,a)&&(r[a]=n[a]);if(W0){i=W0(n);for(var l=0;l<i.length;l++)CM.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},xw={exports:{}},le={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm=TM,so=60103,bw=60106;le.Fragment=60107;le.StrictMode=60108;le.Profiler=60114;var ww=60109,Sw=60110,_w=60112;le.Suspense=60113;var Cw=60115,Ew=60116;if(typeof Symbol=="function"&&Symbol.for){var Qt=Symbol.for;so=Qt("react.element"),bw=Qt("react.portal"),le.Fragment=Qt("react.fragment"),le.StrictMode=Qt("react.strict_mode"),le.Profiler=Qt("react.profiler"),ww=Qt("react.provider"),Sw=Qt("react.context"),_w=Qt("react.forward_ref"),le.Suspense=Qt("react.suspense"),Cw=Qt("react.memo"),Ew=Qt("react.lazy")}var G0=typeof Symbol=="function"&&Symbol.iterator;function PM(e){return e===null||typeof e!="object"?null:(e=G0&&e[G0]||e["@@iterator"],typeof e=="function"?e:null)}function Va(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tw={};function lo(e,t,n){this.props=e,this.context=t,this.refs=Tw,this.updater=n||kw}lo.prototype.isReactComponent={};lo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Va(85));this.updater.enqueueSetState(this,e,t,"setState")};lo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pw(){}Pw.prototype=lo.prototype;function um(e,t,n){this.props=e,this.context=t,this.refs=Tw,this.updater=n||kw}var cm=um.prototype=new Pw;cm.constructor=um;lm(cm,lo.prototype);cm.isPureReactComponent=!0;var dm={current:null},Ow=Object.prototype.hasOwnProperty,Mw={key:!0,ref:!0,__self:!0,__source:!0};function jw(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Ow.call(t,r)&&!Mw.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:so,type:e,key:o,ref:a,props:i,_owner:dm.current}}function OM(e,t){return{$$typeof:so,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fm(e){return typeof e=="object"&&e!==null&&e.$$typeof===so}function MM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Y0=/\/+/g;function sd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?MM(""+e.key):t.toString(36)}function Xs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case so:case bw:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+sd(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(Y0,"$&/")+"/"),Xs(i,t,n,"",function(u){return u})):i!=null&&(fm(i)&&(i=OM(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Y0,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+sd(o,l);a+=Xs(o,t,n,s,i)}else if(s=PM(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+sd(o,l++),a+=Xs(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(Va(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function vs(e,t,n){if(e==null)return e;var r=[],i=0;return Xs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function jM(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var $w={current:null};function Qn(){var e=$w.current;if(e===null)throw Error(Va(321));return e}var $M={ReactCurrentDispatcher:$w,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:dm,IsSomeRendererActing:{current:!1},assign:lm};le.Children={map:vs,forEach:function(e,t,n){vs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vs(e,function(){t++}),t},toArray:function(e){return vs(e,function(t){return t})||[]},only:function(e){if(!fm(e))throw Error(Va(143));return e}};le.Component=lo;le.PureComponent=um;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$M;le.cloneElement=function(e,t,n){if(e==null)throw Error(Va(267,e));var r=lm({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=dm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Ow.call(t,s)&&!Mw.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:so,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Sw,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:ww,_context:e},e.Consumer=e};le.createElement=jw;le.createFactory=function(e){var t=jw.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:_w,render:e}};le.isValidElement=fm;le.lazy=function(e){return{$$typeof:Ew,_payload:{_status:-1,_result:e},_init:jM}};le.memo=function(e,t){return{$$typeof:Cw,type:e,compare:t===void 0?null:t}};le.useCallback=function(e,t){return Qn().useCallback(e,t)};le.useContext=function(e,t){return Qn().useContext(e,t)};le.useDebugValue=function(){};le.useEffect=function(e,t){return Qn().useEffect(e,t)};le.useImperativeHandle=function(e,t,n){return Qn().useImperativeHandle(e,t,n)};le.useLayoutEffect=function(e,t){return Qn().useLayoutEffect(e,t)};le.useMemo=function(e,t){return Qn().useMemo(e,t)};le.useReducer=function(e,t,n){return Qn().useReducer(e,t,n)};le.useRef=function(e){return Qn().useRef(e)};le.useState=function(e){return Qn().useState(e)};le.version="17.0.2";xw.exports=le;var IM=xw.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DM=IM,Iw=60103;Ba.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var q0=Symbol.for;Iw=q0("react.element"),Ba.Fragment=q0("react.fragment")}var LM=DM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RM=Object.prototype.hasOwnProperty,AM={key:!0,ref:!0,__self:!0,__source:!0};function Dw(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)RM.call(t,r)&&!AM.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Iw,type:e,key:o,ref:a,props:i,_owner:LM.current}}Ba.jsx=Dw;Ba.jsxs=Dw;yw.exports=Ba;var Pt=yw.exports,Lw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Lw);var Ot=Lw.exports;const FM={"lds-circle":"_lds-circle_qlxhy_1"},NM=Object.freeze(Object.defineProperty({__proto__:null,default:FM},Symbol.toStringTag,{value:"Module"})),zM=Tt(NM);var Rw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(qu,"__esModule",{value:!0});qu.Circle=void 0;const BM=Pt,VM=Rw(Ot),UM=Rw(zM);function HM({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,BM.jsx)("div",{className:(0,VM.default)(UM.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}qu.Circle=HM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=qu;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(vw);var Aw={},Xu={};const WM={"lds-default":"_lds-default_wt1n8_1"},GM=Object.freeze(Object.defineProperty({__proto__:null,default:WM},Symbol.toStringTag,{value:"Module"})),YM=Tt(GM);var Fw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xu,"__esModule",{value:!0});Xu.Default=void 0;const X0=Pt,qM=Fw(Ot),XM=Fw(YM);function KM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,X0.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,X0.jsx)("div",{className:(0,qM.default)(XM.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}Xu.Default=KM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=Xu;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(Aw);var Nw={},Ku={};const QM={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},ZM=Object.freeze(Object.defineProperty({__proto__:null,default:QM},Symbol.toStringTag,{value:"Module"})),JM=Tt(ZM);var zw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ku,"__esModule",{value:!0});Ku.DualRing=void 0;const K0=Pt,Q0=zw(Ot),Z0=zw(JM);function ej({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,K0.jsx)("div",{className:(0,Q0.default)(Z0.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,K0.jsx)("div",{className:(0,Q0.default)(Z0.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}Ku.DualRing=ej;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=Ku;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(Nw);var Bw={},Qu={};const tj={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},nj=Object.freeze(Object.defineProperty({__proto__:null,default:tj},Symbol.toStringTag,{value:"Module"})),rj=Tt(nj);var Vw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Qu,"__esModule",{value:!0});Qu.Ellipsis=void 0;const J0=Pt,ij=Vw(Ot),oj=Vw(rj);function aj({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,J0.jsx)("div",{style:{background:`${e}`}},l));return(0,J0.jsx)("div",{className:(0,ij.default)(oj.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}Qu.Ellipsis=aj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=Qu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(Bw);var Uw={},Zu={};const sj={"lds-facebook":"_lds-facebook_1ts9g_1"},lj=Object.freeze(Object.defineProperty({__proto__:null,default:sj},Symbol.toStringTag,{value:"Module"})),uj=Tt(lj);var Hw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Zu,"__esModule",{value:!0});Zu.Facebook=void 0;const ev=Pt,cj=Hw(Ot),dj=Hw(uj);function fj({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,ev.jsx)("div",{style:{background:`${e}`}},l));return(0,ev.jsx)("div",{className:(0,cj.default)(dj.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}Zu.Facebook=fj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=Zu;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(Uw);var Ww={},Ju={};const pj={"lds-grid":"_lds-grid_1ftub_1"},hj=Object.freeze(Object.defineProperty({__proto__:null,default:pj},Symbol.toStringTag,{value:"Module"})),mj=Tt(hj);var Gw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ju,"__esModule",{value:!0});Ju.Grid=void 0;const tv=Pt,gj=Gw(Ot),vj=Gw(mj);function yj({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,tv.jsx)("div",{style:{background:`${e}`}},l));return(0,tv.jsx)("div",{className:(0,gj.default)(vj.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}Ju.Grid=yj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=Ju;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(Ww);var Yw={},ec={};const xj={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},bj=Object.freeze(Object.defineProperty({__proto__:null,default:xj},Symbol.toStringTag,{value:"Module"})),wj=Tt(bj);var qw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ec,"__esModule",{value:!0});ec.Heart=void 0;const ys=Pt,ld=qw(Ot),ud=qw(wj);function Sj({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,ys.jsx)("div",{className:(0,ld.default)(ud.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,ys.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,ys.jsx)("div",{className:(0,ld.default)(ud.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,ys.jsx)("div",{className:(0,ld.default)(ud.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}ec.Heart=Sj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=ec;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(Yw);var Xw={},tc={};const _j={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},Cj=Object.freeze(Object.defineProperty({__proto__:null,default:_j},Symbol.toStringTag,{value:"Module"})),Ej=Tt(Cj);var Kw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(tc,"__esModule",{value:!0});tc.Hourglass=void 0;const nv=Pt,rv=Kw(Ot),iv=Kw(Ej);function kj({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,nv.jsx)("div",{className:(0,rv.default)(iv.default["lds-hourglass"],n),style:{...r},children:(0,nv.jsx)("div",{className:(0,rv.default)(iv.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}tc.Hourglass=kj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=tc;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(Xw);var Qw={},nc={};const Zw="_center_1rufi_10",Jw="_spin_1rufi_1",Tj={"lds-orbitals":"_lds-orbitals_1rufi_1",center:Zw,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:Jw},Pj=Object.freeze(Object.defineProperty({__proto__:null,center:Zw,default:Tj,spin:Jw},Symbol.toStringTag,{value:"Module"})),Oj=Tt(Pj);var eS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(nc,"__esModule",{value:!0});nc.Orbitals=void 0;const tt=Pt,lt=eS(Ot),Se=eS(Oj);function Mj({color:e="#7f58af",className:t,style:n}){return(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["lds-orbitals"],t),style:{...n},children:[(0,tt.jsx)("div",{className:Se.default.center,style:{background:e}}),(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["inner-spin"]),children:[(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-moon-a"]),style:{background:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-moon-b"]),style:{background:e}})]}),(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["outer-spin"]),children:[(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-moon-a"]),style:{background:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-moon-b"]),style:{background:e}})]})]})}nc.Orbitals=Mj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=nc;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(Qw);var tS={},rc={};const jj={"lds-ring":"_lds-ring_xgxdp_1"},$j=Object.freeze(Object.defineProperty({__proto__:null,default:jj},Symbol.toStringTag,{value:"Module"})),Ij=Tt($j);var nS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(rc,"__esModule",{value:!0});rc.Ring=void 0;const ov=Pt,Dj=nS(Ot),Lj=nS(Ij);function Rj({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,ov.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,ov.jsx)("div",{className:(0,Dj.default)(Lj.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}rc.Ring=Rj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=rc;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(tS);var rS={},ic={};const Aj={"lds-ripple":"_lds-ripple_1lgcf_1"},Fj=Object.freeze(Object.defineProperty({__proto__:null,default:Aj},Symbol.toStringTag,{value:"Module"})),Nj=Tt(Fj);var iS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ic,"__esModule",{value:!0});ic.Ripple=void 0;const av=Pt,zj=iS(Ot),Bj=iS(Nj);function Vj({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,av.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,av.jsx)("div",{className:(0,zj.default)(Bj.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}ic.Ripple=Vj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=ic;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(rS);var oS={},oc={};const Uj={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},Hj=Object.freeze(Object.defineProperty({__proto__:null,default:Uj},Symbol.toStringTag,{value:"Module"})),Wj=Tt(Hj);var aS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(oc,"__esModule",{value:!0});oc.Roller=void 0;const cd=Pt,sv=aS(Ot),lv=aS(Wj);function Gj({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,cd.jsx)("div",{children:(0,cd.jsx)("div",{className:(0,sv.default)(lv.default["div-after"]),style:{background:e}})},o));return(0,cd.jsx)("div",{className:(0,sv.default)(lv.default["lds-roller"],t),style:{...n},children:r})}oc.Roller=Gj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=oc;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(oS);var sS={},ac={};const Yj={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},qj=Object.freeze(Object.defineProperty({__proto__:null,default:Yj},Symbol.toStringTag,{value:"Module"})),Xj=Tt(qj);var lS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ac,"__esModule",{value:!0});ac.Spinner=void 0;const dd=Pt,uv=lS(Ot),cv=lS(Xj);function Kj({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,dd.jsx)("div",{children:(0,dd.jsx)("div",{className:(0,uv.default)(cv.default["div-after"]),style:{background:e}})},o));return(0,dd.jsx)("div",{className:(0,uv.default)(cv.default["lds-spinner"],t),style:{...n},children:r})}ac.Spinner=Kj;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=ac;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(sS);var uS={},sc={};const cS="_left_v9vlb_30",dS="_right_v9vlb_33",fS="_anim_v9vlb_37",Qj={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:cS,right:dS,anim:fS,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},Zj=Object.freeze(Object.defineProperty({__proto__:null,anim:fS,default:Qj,left:cS,right:dS},Symbol.toStringTag,{value:"Module"})),Jj=Tt(Zj);var pS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(sc,"__esModule",{value:!0});sc.Ouroboro=void 0;const Eo=Pt,ko=pS(Ot),To=pS(Jj);function e5({color:e="#7f58af",style:t,className:n}){return(0,Eo.jsxs)("div",{className:(0,ko.default)(To.default["lds-ouroboro"],n),style:{...t},children:[(0,Eo.jsx)("span",{className:(0,ko.default)(To.default.left),children:(0,Eo.jsx)("span",{className:(0,ko.default)(To.default.anim),style:{background:e}})}),(0,Eo.jsx)("span",{className:(0,ko.default)(To.default.right),children:(0,Eo.jsx)("span",{className:(0,ko.default)(To.default.anim),style:{background:e}})})]})}sc.Ouroboro=e5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=sc;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(uS);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=vw;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=Aw;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=Nw;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=Bw;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=Uw;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=Ww;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=Yw;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=Xw;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const u=Qw;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return u.Orbitals}});const d=tS;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return d.Ring}});const c=rS;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return c.Ripple}});const y=oS;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return y.Roller}});const f=sS;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return f.Spinner}});const h=uS;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return h.Ouroboro}})})(gw);const t5=()=>g.jsx(SM,{children:g.jsx(gw.Default,{color:"#6d433da8"})});const n5="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",r5=DT`
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
`,i5=k.div`
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
`,o5=k(Me)`
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
`,a5=k.h2`

  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,s5=k.h3`

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
`,l5=k.a`

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
`,u5=k.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,c5=()=>{const[e,t]=b.useState([]);return b.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(console.log("API response:",i),!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),console.log(e),g.jsxs(g.Fragment,{children:[g.jsx(a5,{children:"Каталог"}),g.jsxs(i5,{children:[e.slice(0,7).map(n=>g.jsx(o5,{to:`catalog/${n.title}`,bg:n.image,isBig:n.big,children:g.jsx(s5,{children:n.title})},n.title)),g.jsxs(l5,{href:"catalog",children:[g.jsx("p",{children:"Весь каталог"}),g.jsx(u5,{children:g.jsx(Hh,{size:24})})]})]})]})};function dv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function pm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:dv(t[r])&&dv(e[r])&&Object.keys(t[r]).length>0&&pm(e[r],t[r])})}const hS={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function kn(){const e=typeof document<"u"?document:{};return pm(e,hS),e}const d5={document:hS,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function gt(){const e=typeof window<"u"?window:{};return pm(e,d5),e}function f5(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function p5(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function mS(e,t=0){return setTimeout(e,t)}function Bl(){return Date.now()}function h5(e){const t=gt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function m5(e,t="x"){const n=gt();let r,i,o;const a=h5(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function xs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function g5(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function jt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!g5(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(xs(t[l])&&xs(r[l])?r[l].__swiper__?t[l]=r[l]:jt(t[l],r[l]):!xs(t[l])&&xs(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:jt(t[l],r[l])):t[l]=r[l])}}}return t}function ui(e,t,n){e.style.setProperty(t,n)}function gS({swiper:e,targetPosition:t,side:n}){const r=gt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",u=(c,y)=>s==="next"&&c>=y||s==="prev"&&c<=y,d=()=>{a=new Date().getTime(),o===null&&(o=a);const c=Math.max(Math.min((a-o)/l,1),0),y=.5-Math.cos(c*Math.PI)/2;let f=i+y*(t-i);if(u(f,t)&&(f=t),e.wrapperEl.scrollTo({[n]:f}),u(f,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:f})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(d)};d()}function Sn(e,t=""){const n=gt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function v5(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function y5(e,t){const n=gt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=v5(e,t))),r}function Vl(e){try{console.warn(e);return}catch{}}function Ul(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:f5(t)),n}function x5(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function b5(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function dr(e,t){return gt().getComputedStyle(e,null).getPropertyValue(t)}function Hl(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function vS(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function mp(e,t,n){const r=gt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function He(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function ka(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function yS(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=Sn(e.el,`.${r[i]}`)[0];o||(o=Ul("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const fv='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function w5({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:fv};function i(f){let h;return f&&typeof f=="string"&&e.isElement&&(h=e.el.querySelector(f)||e.hostEl.querySelector(f),h)?h:(f&&(typeof f=="string"&&(h=[...document.querySelectorAll(f)]),e.params.uniqueNavElements&&typeof f=="string"&&h&&h.length>1&&e.el.querySelectorAll(f).length===1?h=e.el.querySelector(f):h&&h.length===1&&(h=h[0])),f&&!h?f:h)}function o(f,h){const v=e.params.navigation;f=He(f),f.forEach(w=>{w&&(w.classList[h?"add":"remove"](...v.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=h),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](v.lockClass))})}function a(){const{nextEl:f,prevEl:h}=e.navigation;if(e.params.loop){o(h,!1),o(f,!1);return}o(h,e.isBeginning&&!e.params.rewind),o(f,e.isEnd&&!e.params.rewind)}function l(f){f.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(f){f.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const f=e.params.navigation;if(e.params.navigation=yS(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(f.nextEl||f.prevEl))return;let h=i(f.nextEl),v=i(f.prevEl);Object.assign(e.navigation,{nextEl:h,prevEl:v}),h=He(h),v=He(v);const w=(p,m)=>{if(p){if(f.addIcons&&p.matches(".swiper-button-next,.swiper-button-prev")&&!p.querySelector("svg")){const x=document.createElement("div");ka(x,fv),p.appendChild(x.querySelector("svg")),x.remove()}p.addEventListener("click",m==="next"?s:l)}!e.enabled&&p&&p.classList.add(...f.lockClass.split(" "))};h.forEach(p=>w(p,"next")),v.forEach(p=>w(p,"prev"))}function d(){let{nextEl:f,prevEl:h}=e.navigation;f=He(f),h=He(h);const v=(w,p)=>{w.removeEventListener("click",p==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};f.forEach(w=>v(w,"next")),h.forEach(w=>v(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?y():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{d()}),n("enable disable",()=>{let{nextEl:f,prevEl:h}=e.navigation;if(f=He(f),h=He(h),e.enabled){a();return}[...f,...h].filter(v=>!!v).forEach(v=>v.classList.add(e.params.navigation.lockClass))}),n("click",(f,h)=>{let{nextEl:v,prevEl:w}=e.navigation;v=He(v),w=He(w);const p=h.target;let m=w.includes(p)||v.includes(p);if(e.isElement&&!m){const x=h.path||h.composedPath&&h.composedPath();x&&(m=x.find(S=>v.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!m){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===p||e.pagination.el.contains(p)))return;let x;v.length?x=v[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(x=w[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...v,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const c=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},y=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:c,disable:y,update:a,init:u,destroy:d})}function Po(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function S5({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:p=>p,formatFractionTotal:p=>p,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(p,m){const{bulletActiveClass:x}=e.params.pagination;p&&(p=p[`${m==="prev"?"previous":"next"}ElementSibling`],p&&(p.classList.add(`${x}-${m}`),p=p[`${m==="prev"?"previous":"next"}ElementSibling`],p&&p.classList.add(`${x}-${m}-${m}`)))}function u(p,m,x){if(p=p%x,m=m%x,m===p+1)return"next";if(m===p-1)return"previous"}function d(p){const m=p.target.closest(Po(e.params.pagination.bulletClass));if(!m)return;p.preventDefault();const x=Hl(m)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const S=u(e.realIndex,x,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function c(){const p=e.rtl,m=e.params.pagination;if(l())return;let x=e.pagination.el;x=He(x);let S,C;const T=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,_=e.params.loop?Math.ceil(T/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(C=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,C=e.previousSnapIndex):(C=e.previousIndex||0,S=e.activeIndex||0),m.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const E=e.pagination.bullets;let j,I,D;if(m.dynamicBullets&&(o=mp(E[0],e.isHorizontal()?"width":"height",!0),x.forEach(O=>{O.style[e.isHorizontal()?"width":"height"]=`${o*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&C!==void 0&&(a+=S-(C||0),a>m.dynamicMainBullets-1?a=m.dynamicMainBullets-1:a<0&&(a=0)),j=Math.max(S-a,0),I=j+(Math.min(E.length,m.dynamicMainBullets)-1),D=(I+j)/2),E.forEach(O=>{const M=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(L=>`${m.bulletActiveClass}${L}`)].map(L=>typeof L=="string"&&L.includes(" ")?L.split(" "):L).flat();O.classList.remove(...M)}),x.length>1)E.forEach(O=>{const M=Hl(O);M===S?O.classList.add(...m.bulletActiveClass.split(" ")):e.isElement&&O.setAttribute("part","bullet"),m.dynamicBullets&&(M>=j&&M<=I&&O.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),M===j&&s(O,"prev"),M===I&&s(O,"next"))});else{const O=E[S];if(O&&O.classList.add(...m.bulletActiveClass.split(" ")),e.isElement&&E.forEach((M,L)=>{M.setAttribute("part",L===S?"bullet-active":"bullet")}),m.dynamicBullets){const M=E[j],L=E[I];for(let A=j;A<=I;A+=1)E[A]&&E[A].classList.add(...`${m.bulletActiveClass}-main`.split(" "));s(M,"prev"),s(L,"next")}}if(m.dynamicBullets){const O=Math.min(E.length,m.dynamicMainBullets+4),M=(o*O-o)/2-D*o,L=p?"right":"left";E.forEach(A=>{A.style[e.isHorizontal()?L:"top"]=`${M}px`})}}x.forEach((E,j)=>{if(m.type==="fraction"&&(E.querySelectorAll(Po(m.currentClass)).forEach(I=>{I.textContent=m.formatFractionCurrent(S+1)}),E.querySelectorAll(Po(m.totalClass)).forEach(I=>{I.textContent=m.formatFractionTotal(_)})),m.type==="progressbar"){let I;m.progressbarOpposite?I=e.isHorizontal()?"vertical":"horizontal":I=e.isHorizontal()?"horizontal":"vertical";const D=(S+1)/_;let O=1,M=1;I==="horizontal"?O=D:M=D,E.querySelectorAll(Po(m.progressbarFillClass)).forEach(L=>{L.style.transform=`translate3d(0,0,0) scaleX(${O}) scaleY(${M})`,L.style.transitionDuration=`${e.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(ka(E,m.renderCustom(e,S+1,_)),j===0&&r("paginationRender",E)):(j===0&&r("paginationRender",E),r("paginationUpdate",E)),e.params.watchOverflow&&e.enabled&&E.classList[e.isLocked?"add":"remove"](m.lockClass)})}function y(){const p=e.params.pagination;if(l())return;const m=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=He(x);let S="";if(p.type==="bullets"){let C=e.params.loop?Math.ceil(m/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&C>m&&(C=m);for(let T=0;T<C;T+=1)p.renderBullet?S+=p.renderBullet.call(e,T,p.bulletClass):S+=`<${p.bulletElement} ${e.isElement?'part="bullet"':""} class="${p.bulletClass}"></${p.bulletElement}>`}p.type==="fraction"&&(p.renderFraction?S=p.renderFraction.call(e,p.currentClass,p.totalClass):S=`<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),p.type==="progressbar"&&(p.renderProgressbar?S=p.renderProgressbar.call(e,p.progressbarFillClass):S=`<span class="${p.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(C=>{p.type!=="custom"&&ka(C,S||""),p.type==="bullets"&&e.pagination.bullets.push(...C.querySelectorAll(Po(p.bulletClass)))}),p.type!=="custom"&&r("paginationRender",x[0])}function f(){e.params.pagination=yS(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const p=e.params.pagination;if(!p.el)return;let m;typeof p.el=="string"&&e.isElement&&(m=e.el.querySelector(p.el)),!m&&typeof p.el=="string"&&(m=[...document.querySelectorAll(p.el)]),m||(m=p.el),!(!m||m.length===0)&&(e.params.uniqueNavElements&&typeof p.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...e.el.querySelectorAll(p.el)],m.length>1&&(m=m.find(x=>vS(x,".swiper")[0]===e.el))),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(e.pagination,{el:m}),m=He(m),m.forEach(x=>{p.type==="bullets"&&p.clickable&&x.classList.add(...(p.clickableClass||"").split(" ")),x.classList.add(p.modifierClass+p.type),x.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.type==="bullets"&&p.dynamicBullets&&(x.classList.add(`${p.modifierClass}${p.type}-dynamic`),a=0,p.dynamicMainBullets<1&&(p.dynamicMainBullets=1)),p.type==="progressbar"&&p.progressbarOpposite&&x.classList.add(p.progressbarOppositeClass),p.clickable&&x.addEventListener("click",d),e.enabled||x.classList.add(p.lockClass)}))}function h(){const p=e.params.pagination;if(l())return;let m=e.pagination.el;m&&(m=He(m),m.forEach(x=>{x.classList.remove(p.hiddenClass),x.classList.remove(p.modifierClass+p.type),x.classList.remove(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.clickable&&(x.classList.remove(...(p.clickableClass||"").split(" ")),x.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...p.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const p=e.params.pagination;let{el:m}=e.pagination;m=He(m),m.forEach(x=>{x.classList.remove(p.horizontalClass,p.verticalClass),x.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(f(),y(),c())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&c()}),n("snapIndexChange",()=>{c()}),n("snapGridLengthChange",()=>{y(),c()}),n("destroy",()=>{h()}),n("enable disable",()=>{let{el:p}=e.pagination;p&&(p=He(p),p.forEach(m=>m.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{c()}),n("click",(p,m)=>{const x=m.target,S=He(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const C=S[0].classList.contains(e.params.pagination.hiddenClass);r(C===!0?"paginationShow":"paginationHide"),S.forEach(T=>T.classList.toggle(e.params.pagination.hiddenClass))}});const v=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=He(p),p.forEach(m=>m.classList.remove(e.params.pagination.paginationDisabledClass))),f(),y(),c()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=He(p),p.forEach(m=>m.classList.add(e.params.pagination.paginationDisabledClass))),h()};Object.assign(e.pagination,{enable:v,disable:w,render:y,update:c,init:f,destroy:h})}function _5({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,u,d=new Date().getTime(),c,y,f,h,v,w;function p(F){!e||e.destroyed||!e.wrapperEl||F.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",p),!(w||F.detail&&F.detail.bySwiperTouchMove)&&j())}const m=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?c=!0:c&&(s=u,c=!1);const F=e.autoplay.paused?u:d+s-new Date().getTime();e.autoplay.timeLeft=F,r("autoplayTimeLeft",F,F/l),a=requestAnimationFrame(()=>{m()})},x=()=>{let F;return e.virtual&&e.params.virtual.enabled?F=e.slides.find($=>$.classList.contains("swiper-slide-active")):F=e.slides[e.activeIndex],F?parseInt(F.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let F=e.params.autoplay.delay;const P=x();return!Number.isNaN(P)&&P>0&&(F=P),F},C=F=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),m();let P=F;typeof P>"u"&&(P=S(),l=P,s=P),u=P;const $=e.params.speed,N=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev($,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,$,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext($,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,$,!0,!0),r("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return P>0?(clearTimeout(o),o=setTimeout(()=>{N()},P)):requestAnimationFrame(()=>{N()}),P},T=()=>{d=new Date().getTime(),e.autoplay.running=!0,C(),r("autoplayStart")},_=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},E=(F,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),F||(v=!0);const $=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",p):j()};if(e.autoplay.paused=!0,P){$();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),$())},j=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),v?(v=!1,C(u)):C(),e.autoplay.paused=!1,r("autoplayResume"))},I=()=>{if(e.destroyed||!e.autoplay.running)return;const F=kn();F.visibilityState==="hidden"&&(v=!0,E(!0)),F.visibilityState==="visible"&&j()},D=F=>{F.pointerType==="mouse"&&(v=!0,w=!0,!(e.animating||e.autoplay.paused)&&E(!0))},O=F=>{F.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&j())},M=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",D),e.el.addEventListener("pointerleave",O))},L=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",D),e.el.removeEventListener("pointerleave",O))},A=()=>{kn().addEventListener("visibilitychange",I)},R=()=>{kn().removeEventListener("visibilitychange",I)};n("init",()=>{e.params.autoplay.enabled&&(M(),A(),T())}),n("destroy",()=>{L(),R(),e.autoplay.running&&_()}),n("_freeModeStaticRelease",()=>{(f||v)&&j()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?_():E(!0,!0)}),n("beforeTransitionStart",(F,P,$)=>{e.destroyed||!e.autoplay.running||($||!e.params.autoplay.disableOnInteraction?E(!0,!0):_())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){_();return}y=!0,f=!1,v=!1,h=setTimeout(()=>{v=!0,f=!0,E(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!y)){if(clearTimeout(h),clearTimeout(o),e.params.autoplay.disableOnInteraction){f=!1,y=!1;return}f&&e.params.cssMode&&j(),f=!1,y=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(u=S(),l=S())}),Object.assign(e.autoplay,{start:T,stop:_,pause:E,resume:j})}let fd;function C5(){const e=gt(),t=kn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function xS(){return fd||(fd=C5()),fd}let pd;function E5({userAgent:e}={}){const t=xS(),n=gt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=i.match(/(iPod)(.*OS\s([\d_]+))?/),c=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),y=r==="Win32";let f=r==="MacIntel";const h=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&f&&t.touch&&h.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),f=!1),s&&!y&&(o.os="android",o.android=!0),(u||c||d)&&(o.os="ios",o.ios=!0),o}function bS(e={}){return pd||(pd=E5(e)),pd}let hd;function k5(){const e=gt(),t=bS();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,u]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=s<16||s===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function wS(){return hd||(hd=k5()),hd}function T5({swiper:e,on:t,emit:n}){const r=gt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(d=>{o=r.requestAnimationFrame(()=>{const{width:c,height:y}=e;let f=c,h=y;d.forEach(({contentBoxSize:v,contentRect:w,target:p})=>{p&&p!==e.el||(f=w?w.width:(v[0]||v).inlineSize,h=w?w.height:(v[0]||v).blockSize)}),(f!==c||h!==y)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function P5({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=gt(),a=(u,d={})=>{const c=o.MutationObserver||o.WebkitMutationObserver,y=new c(f=>{if(e.__preventObserver__)return;if(f.length===1){r("observerUpdate",f[0]);return}const h=function(){r("observerUpdate",f[0])};o.requestAnimationFrame?o.requestAnimationFrame(h):o.setTimeout(h,0)});y.observe(u,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),i.push(y)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=vS(e.hostEl);for(let d=0;d<u.length;d+=1)a(u[d])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var O5={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function M5(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(dr(r,"padding-left")||0,10)-parseInt(dr(r,"padding-right")||0,10),n=n-parseInt(dr(r,"padding-top")||0,10)-parseInt(dr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function j5(){const e=this;function t(I,D){return parseFloat(I.getPropertyValue(e.getDirectionLabel(D))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,u=Sn(i,`.${e.params.slideClass}, swiper-slide`),d=l?e.virtual.slides.length:u.length;let c=[];const y=[],f=[];let h=n.slidesOffsetBefore;typeof h=="function"&&(h=n.slidesOffsetBefore.call(e));let v=n.slidesOffsetAfter;typeof v=="function"&&(v=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,p=e.slidesGrid.length,m=e.size-h-v;let x=n.spaceBetween,S=-h,C=0,T=0;if(typeof m>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*m:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-h-v,u.forEach(I=>{o?I.style.marginLeft="":I.style.marginRight="",I.style.marginBottom="",I.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(ui(r,"--swiper-centered-offset-before",""),ui(r,"--swiper-centered-offset-after","")),n.cssMode&&(ui(r,"--swiper-slides-offset-before",`${h}px`),ui(r,"--swiper-slides-offset-after",`${v}px`));const _=n.grid&&n.grid.rows>1&&e.grid;_?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let E;const j=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(I=>typeof n.breakpoints[I].slidesPerView<"u").length>0;for(let I=0;I<d;I+=1){E=0;const D=u[I];if(!(D&&(_&&e.grid.updateSlide(I,D,u),dr(D,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(E=n.virtual.slidesPerViewAutoSlideSize),E&&D&&(n.roundLengths&&(E=Math.floor(E)),D.style[e.getDirectionLabel("width")]=`${E}px`);else if(n.slidesPerView==="auto"){j&&(D.style[e.getDirectionLabel("width")]="");const O=getComputedStyle(D),M=D.style.transform,L=D.style.webkitTransform;if(M&&(D.style.transform="none"),L&&(D.style.webkitTransform="none"),n.roundLengths)E=e.isHorizontal()?mp(D,"width",!0):mp(D,"height",!0);else{const A=t(O,"width"),R=t(O,"padding-left"),F=t(O,"padding-right"),P=t(O,"margin-left"),$=t(O,"margin-right"),N=O.getPropertyValue("box-sizing");if(N&&N==="border-box")E=A+P+$;else{const{clientWidth:B,offsetWidth:z}=D;E=A+R+F+P+$+(z-B)}}M&&(D.style.transform=M),L&&(D.style.webkitTransform=L),n.roundLengths&&(E=Math.floor(E))}else E=(m-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(E=Math.floor(E)),D&&(D.style[e.getDirectionLabel("width")]=`${E}px`);D&&(D.swiperSlideSize=E),f.push(E),n.centeredSlides?(S=S+E/2+C/2+x,C===0&&I!==0&&(S=S-m/2-x),I===0&&(S=S-m/2-x),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),T%n.slidesPerGroup===0&&c.push(S),y.push(S)):(n.roundLengths&&(S=Math.floor(S)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&c.push(S),y.push(S),S=S+E+x),e.virtualSize+=E+x,C=E,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,m)+v,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+x}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),_&&e.grid.updateWrapperSize(E,c),!n.centeredSlides){const I=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,D=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||I);let O=c.length;if(D){let L;if(n.slidesPerView==="auto"){L=1;let A=0;for(let R=f.length-1;R>=0&&(A+=f[R]+(R<f.length-1?x:0),A<=m);R-=1)L=f.length-R}else L=Math.floor(n.slidesPerView);O=Math.max(d-L,0)}const M=[];for(let L=0;L<c.length;L+=1){let A=c[L];n.roundLengths&&(A=Math.floor(A)),D?L<=O&&M.push(A):c[L]<=e.virtualSize-m&&M.push(A)}c=M,Math.floor(e.virtualSize-m)-Math.floor(c[c.length-1])>1&&(D||c.push(e.virtualSize-m))}if(l&&n.loop){const I=f[0]+x;if(n.slidesPerGroup>1){const D=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),O=I*n.slidesPerGroup;for(let M=0;M<D;M+=1)c.push(c[c.length-1]+O)}for(let D=0;D<e.virtual.slidesBefore+e.virtual.slidesAfter;D+=1)n.slidesPerGroup===1&&c.push(c[c.length-1]+I),y.push(y[y.length-1]+I),e.virtualSize+=I}if(c.length===0&&(c=[0]),x!==0){const I=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter((D,O)=>!n.cssMode||n.loop?!0:O!==u.length-1).forEach(D=>{D.style[I]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let I=0;f.forEach(O=>{I+=O+(x||0)}),I-=x;const D=I>m?I-m:0;c=c.map(O=>O<=0?-h:O>D?D+v:O)}if(n.centerInsufficientSlides){let I=0;if(f.forEach(D=>{I+=D+(x||0)}),I-=x,I<m){const D=(m-I)/2;c.forEach((O,M)=>{c[M]=O-D}),y.forEach((O,M)=>{y[M]=O+D})}}if(Object.assign(e,{slides:u,snapGrid:c,slidesGrid:y,slidesSizesGrid:f}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){ui(r,"--swiper-centered-offset-before",`${-c[0]}px`),ui(r,"--swiper-centered-offset-after",`${e.size/2-f[f.length-1]/2}px`);const I=-e.snapGrid[0],D=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(O=>O+I),e.slidesGrid=e.slidesGrid.map(O=>O+D)}if(d!==s&&e.emit("slidesLengthChange"),c.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),y.length!==p&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const I=`${n.containerModifierClass}backface-hidden`,D=e.el.classList.contains(I);d<=n.maxBackfaceHiddenSlides?D||e.el.classList.add(I):D&&e.el.classList.remove(I)}}function $5(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function I5(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const pv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function D5(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const c=(a+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+l),y=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+l),f=-(a-d),h=f+t.slidesSizesGrid[s],v=f>=0&&f<=t.size-t.slidesSizesGrid[s],w=f>=0&&f<t.size-1||h>1&&h<=t.size||f<=0&&h>=t.size;w&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s)),pv(u,w,n.slideVisibleClass),pv(u,v,n.slideFullyVisibleClass),u.progress=i?-c:c,u.originalProgress=i?-y:y}}function L5(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,c=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,a=c||i>=1,d&&(i=0),c&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),c=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[d],f=t.slidesGrid[c],h=t.slidesGrid[t.slidesGrid.length-1],v=Math.abs(e);v>=y?l=(v-y)/h:l=(v+h-f)/h,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(s&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const md=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function R5(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=c=>Sn(r,`.${n.slideClass}${c}, swiper-slide${c}`)[0];let s,u,d;if(o)if(n.loop){let c=i-e.virtual.slidesBefore;c<0&&(c=e.virtual.slides.length+c),c>=e.virtual.slides.length&&(c-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${c}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(c=>c.column===i),d=t.find(c=>c.column===i+1),u=t.find(c=>c.column===i-1)):s=t[i];s&&(a||(d=b5(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),u=x5(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(c=>{md(c,c===s,n.slideActiveClass),md(c,c===d,n.slideNextClass),md(c,c===u,n.slidePrevClass)}),e.emitSlidesClasses()}const Ks=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},gd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},gp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,u)=>a+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&gd(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&gd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&gd(e,a)};function A5(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function F5(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,u;const d=f=>{let h=f-t.virtual.slidesBefore;return h<0&&(h=t.virtual.slides.length+h),h>=t.virtual.slides.length&&(h-=t.virtual.slides.length),h};if(typeof s>"u"&&(s=A5(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const f=Math.min(i.slidesPerGroupSkip,s);u=f+Math.floor((s-f)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(s);return}const c=t.grid&&i.grid&&i.grid.rows>1;let y;if(t.virtual&&i.virtual.enabled)i.loop?y=d(s):y=s;else if(c){const f=t.slides.find(v=>v.column===s);let h=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(h)&&(h=Math.max(t.slides.indexOf(f),0)),y=Math.floor(h/i.grid.rows)}else if(t.slides[s]){const f=t.slides[s].getAttribute("data-swiper-slide-index");f?y=parseInt(f,10):y=s}else y=s;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:a,realIndex:y,previousIndex:o,activeIndex:s}),t.initialized&&gp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==y&&t.emit("realIndexChange"),t.emit("slideChange"))}function N5(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var z5={updateSize:M5,updateSlides:j5,updateAutoHeight:$5,updateSlidesOffset:I5,updateSlidesProgress:D5,updateProgress:L5,updateSlidesClasses:R5,updateActiveIndex:F5,updateClickedSlide:N5};function B5(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=m5(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function V5(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let d;const c=n.maxTranslate()-n.minTranslate();c===0?d=0:d=(e-n.minTranslate())/c,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function U5(){return-this.snapGrid[0]}function H5(){return-this.snapGrid[this.snapGrid.length-1]}function W5(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),u=o.maxTranslate();let d;if(r&&e>s?d=s:r&&e<u?d=u:d=e,o.updateProgress(d),a.cssMode){const c=o.isHorizontal();if(t===0)l[c?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return gS({swiper:o,targetPosition:-d,side:c?"left":"top"}),!0;l.scrollTo({[c?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(y){!o||o.destroyed||y.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var G5={getTranslate:B5,setTranslate:V5,minTranslate:U5,maxTranslate:H5,translateTo:W5};function Y5(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function SS({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function q5(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),SS({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function X5(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),SS({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var K5={setTransition:Y5,transitionStart:q5,transitionEnd:X5};function Q5(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:d,activeIndex:c,rtlTranslate:y,wrapperEl:f,enabled:h}=o;if(!h&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const v=Math.min(o.params.slidesPerGroupSkip,a);let w=v+Math.floor((a-v)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const p=-s[w];if(l.normalizeSlideIndex)for(let _=0;_<u.length;_+=1){const E=-Math.floor(p*100),j=Math.floor(u[_]*100),I=Math.floor(u[_+1]*100);typeof u[_+1]<"u"?E>=j&&E<I-(I-j)/2?a=_:E>=j&&E<I&&(a=_+1):E>=j&&(a=_)}if(o.initialized&&a!==c&&(!o.allowSlideNext&&(y?p>o.translate&&p>o.minTranslate():p<o.translate&&p<o.minTranslate())||!o.allowSlidePrev&&p>o.translate&&p>o.maxTranslate()&&(c||0)!==a))return!1;a!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(p);let m;a>c?m="next":a<c?m="prev":m="reset";const x=o.virtual&&o.params.virtual.enabled;if(!(x&&i)&&(y&&-p===o.translate||!y&&p===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(p),m!=="reset"&&(o.transitionStart(n,m),o.transitionEnd(n,m)),!1;if(l.cssMode){const _=o.isHorizontal(),E=y?p:-p;if(t===0)x&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),x&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[_?"scrollLeft":"scrollTop"]=E})):f[_?"scrollLeft":"scrollTop"]=E,x&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return gS({swiper:o,targetPosition:E,side:_?"left":"top"}),!0;f.scrollTo({[_?"left":"top"]:E,behavior:"smooth"})}return!0}const T=wS().isSafari;return x&&!i&&T&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(p),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,m),t===0?o.transitionEnd(n,m):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(E){!o||o.destroyed||E.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,m))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function Z5(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const v=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===v).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u,slidesOffsetBefore:d,slidesOffsetAfter:c}=i.params,y=u||!!d||!!c;let f=i.params.slidesPerView;f==="auto"?f=i.slidesPerViewDynamic():(f=Math.ceil(parseFloat(i.params.slidesPerView,10)),y&&f%2===0&&(f=f+1));let h=s-l<f;if(y&&(h=h||l<Math.ceil(f/2)),r&&y&&i.params.slidesPerView!=="auto"&&!o&&(h=!1),h){const v=y?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?l+1:l-s+1,slideRealIndex:v==="next"?i.realIndex:void 0})}if(o){const v=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===v).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function J5(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function e$(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:u}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const c=l?r.translate:-r.translate;function y(m){return m<0?-Math.floor(Math.abs(m)):Math.floor(m)}const f=y(c),h=o.map(m=>y(m)),v=i.freeMode&&i.freeMode.enabled;let w=o[h.indexOf(f)-1];if(typeof w>"u"&&(i.cssMode||v)){let m;o.forEach((x,S)=>{f>=x&&(m=S)}),typeof m<"u"&&(w=v?o[m]:o[m>0?m-1:m])}let p=0;if(typeof w<"u"&&(p=a.indexOf(w),p<0&&(p=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(p=p-r.slidesPerViewDynamic("previous",!0)+1,p=Math.max(p,0))),i.rewind&&r.isBeginning){const m=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(m,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(p,e,t,n)}),!0;return r.slideTo(p,e,t,n)}function t$(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function n$(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],d=i.snapGrid[l+1];s-u>(d-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],d=i.snapGrid[l];s-u<=(d-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function r$(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(Sn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),mS(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var i$={slideTo:Q5,slideToLoop:Z5,slideNext:J5,slidePrev:e$,slideReset:t$,slideToClosest:n$,slideToClickedSlide:r$};function o$(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{Sn(i,`.${r.slideClass}, swiper-slide`).forEach((h,v)=>{h.setAttribute("data-swiper-slide-index",v)})},a=()=>{const f=Sn(i,`.${r.slideBlankClass}`);f.forEach(h=>{h.remove()}),f.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),u=n.slides.length%s!==0,d=l&&n.slides.length%r.grid.rows!==0,c=f=>{for(let h=0;h<f;h+=1){const v=n.isElement?Ul("swiper-slide",[r.slideBlankClass]):Ul("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(v)}};if(u){if(r.loopAddBlankSlides){const f=s-n.slides.length%s;c(f),n.recalcSlides(),n.updateSlides()}else Vl("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(d){if(r.loopAddBlankSlides){const f=r.grid.rows-n.slides.length%r.grid.rows;c(f),n.recalcSlides(),n.updateSlides()}else Vl("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const y=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:y?void 0:"next",initial:t})}function a$({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:c,slidesEl:y,params:f}=s,{centeredSlides:h,slidesOffsetBefore:v,slidesOffsetAfter:w,initialSlide:p}=f,m=h||!!v||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&f.virtual.enabled){t&&(!m&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):m&&s.snapIndex<f.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=d,s.allowSlideNext=c,s.emit("loopFix");return}let x=f.slidesPerView;x==="auto"?x=s.slidesPerViewDynamic():(x=Math.ceil(parseFloat(f.slidesPerView,10)),m&&x%2===0&&(x=x+1));const S=f.slidesPerGroupAuto?x:f.slidesPerGroup;let C=m?Math.max(S,Math.ceil(x/2)):S;C%S!==0&&(C+=S-C%S),C+=f.loopAdditionalSlides,s.loopedSlides=C;const T=s.grid&&f.grid&&f.grid.rows>1;u.length<x+C||s.params.effect==="cards"&&u.length<x+C*2?Vl("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):T&&f.grid.fill==="row"&&Vl("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const _=[],E=[],j=T?Math.ceil(u.length/f.grid.rows):u.length,I=o&&j-p<x&&!m;let D=I?p:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(u.find(P=>P.classList.contains(f.slideActiveClass))):D=i;const O=n==="next"||!n,M=n==="prev"||!n;let L=0,A=0;const F=(T?u[i].column:i)+(m&&typeof r>"u"?-x/2+.5:0);if(F<C){L=Math.max(C-F,S);for(let P=0;P<C-F;P+=1){const $=P-Math.floor(P/j)*j;if(T){const N=j-$-1;for(let B=u.length-1;B>=0;B-=1)u[B].column===N&&_.push(B)}else _.push(j-$-1)}}else if(F+x>j-C){A=Math.max(F-(j-C*2),S),I&&(A=Math.max(A,x-j+p+1));for(let P=0;P<A;P+=1){const $=P-Math.floor(P/j)*j;T?u.forEach((N,B)=>{N.column===$&&E.push(B)}):E.push($)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&u.length<x+C*2&&(E.includes(i)&&E.splice(E.indexOf(i),1),_.includes(i)&&_.splice(_.indexOf(i),1)),M&&_.forEach(P=>{u[P].swiperLoopMoveDOM=!0,y.prepend(u[P]),u[P].swiperLoopMoveDOM=!1}),O&&E.forEach(P=>{u[P].swiperLoopMoveDOM=!0,y.append(u[P]),u[P].swiperLoopMoveDOM=!1}),s.recalcSlides(),f.slidesPerView==="auto"?s.updateSlides():T&&(_.length>0&&M||E.length>0&&O)&&s.slides.forEach((P,$)=>{s.grid.updateSlide($,P,s.slides)}),f.watchSlidesProgress&&s.updateSlidesOffset(),t){if(_.length>0&&M){if(typeof e>"u"){const P=s.slidesGrid[D],N=s.slidesGrid[D+L]-P;l?s.setTranslate(s.translate-N):(s.slideTo(D+Math.ceil(L),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else if(r){const P=T?_.length/f.grid.rows:_.length;s.slideTo(s.activeIndex+P,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(E.length>0&&O)if(typeof e>"u"){const P=s.slidesGrid[D],N=s.slidesGrid[D-A]-P;l?s.setTranslate(s.translate-N):(s.slideTo(D-A,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else{const P=T?E.length/f.grid.rows:E.length;s.slideTo(s.activeIndex-P,0,!1,!0)}}if(s.allowSlidePrev=d,s.allowSlideNext=c,s.controller&&s.controller.control&&!a){const P={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach($=>{!$.destroyed&&$.params.loop&&$.loopFix({...P,slideTo:$.params.slidesPerView===f.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...P,slideTo:s.controller.control.params.slidesPerView===f.slidesPerView?t:!1})}s.emit("loopFix")}function s$(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var l$={loopCreate:o$,loopFix:a$,loopDestroy:s$};function u$(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function c$(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var d$={setGrabCursor:u$,unsetGrabCursor:c$};function f$(e,t=this){function n(r){if(!r||r===kn()||r===gt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function hv(e,t,n){const r=gt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function p$(e){const t=this,n=kn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){hv(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!y5(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&d&&(s=d[0]);const c=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,y=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(y?f$(c,s):s.closest(c))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const f=a.currentX,h=a.currentY;if(!hv(t,r,f))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=f,a.startY=h,i.touchStartTime=Bl(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let v=!0;s.matches(i.focusableElements)&&(v=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=v&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function h$(e){const t=kn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let u;if(s.type==="touchmove"){if(u=[...s.changedTouches].find(T=>T.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const d=u.pageX,c=u.pageY;if(s.preventedByNestedSwiper){o.startX=d,o.startY=c;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:c,currentX:d,currentY:c}),r.touchStartTime=Bl());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(c<o.startY&&n.translate<=n.maxTranslate()||c>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(d>o.startX&&-n.translate<=n.maxTranslate()||d<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=c;const y=o.currentX-o.startX,f=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(y**2+f**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let T;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:y*y+f*f>=25&&(T=Math.atan2(Math.abs(f),Math.abs(y))*180/Math.PI,r.isScrolling=n.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let h=n.isHorizontal()?y:f,v=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(h=Math.abs(h)*(a?1:-1),v=Math.abs(v)*(a?1:-1)),o.diff=h,h*=i.touchRatio,a&&(h=-h,v=-v);const w=n.touchesDirection;n.swipeDirection=h>0?"prev":"next",n.touchesDirection=v>0?"prev":"next";const p=n.params.loop&&!i.cssMode,m=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(p&&m&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(T)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let x;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&p&&m&&Math.abs(h)>=1){Object.assign(o,{startX:d,startY:c,currentX:d,currentY:c,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=h+r.startTranslate;let S=!0,C=i.resistanceRatio;if(i.touchReleaseOnEdges&&(C=0),h>0?(p&&m&&!x&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+h)**C))):h<0&&(p&&m&&!x&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-h)**C))),S&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(h)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function m$(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(C=>C.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:u,enabled:d}=t;if(!d||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const c=Bl(),y=c-n.touchStartTime;if(t.allowClick){const C=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(C&&C[0]||r.target,C),t.emit("tap click",r),y<300&&c-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Bl(),mS(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let f;if(a.followFinger?f=s?t.translate:-t.translate:f=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const h=f>=-t.maxTranslate()&&!t.params.loop;let v=0,w=t.slidesSizesGrid[0];for(let C=0;C<u.length;C+=C<a.slidesPerGroupSkip?1:a.slidesPerGroup){const T=C<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[C+T]<"u"?(h||f>=u[C]&&f<u[C+T])&&(v=C,w=u[C+T]-u[C]):(h||f>=u[C])&&(v=C,w=u[u.length-1]-u[u.length-2])}let p=null,m=null;a.rewind&&(t.isBeginning?m=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(p=0));const x=(f-u[v])/w,S=v<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(y>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?p:v+S):t.slideTo(v)),t.swipeDirection==="prev"&&(x>1-a.longSwipesRatio?t.slideTo(v+S):m!==null&&x<0&&Math.abs(x)>a.longSwipesRatio?t.slideTo(m):t.slideTo(v))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(v+S):t.slideTo(v):(t.swipeDirection==="next"&&t.slideTo(p!==null?p:v+S),t.swipeDirection==="prev"&&t.slideTo(m!==null?m:v))}}function mv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function g$(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function v$(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function y$(e){const t=this;Ks(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function x$(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const _S=(e,t)=>{const n=kn(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",mv,!0):e[u]("observerUpdate",mv,!0),i[s]("load",e.onLoad,{capture:!0}))};function b$(){const e=this,{params:t}=e;e.onTouchStart=p$.bind(e),e.onTouchMove=h$.bind(e),e.onTouchEnd=m$.bind(e),e.onDocumentTouchStart=x$.bind(e),t.cssMode&&(e.onScroll=v$.bind(e)),e.onClick=g$.bind(e),e.onLoad=y$.bind(e),_S(e,"on")}function w$(){_S(this,"off")}var S$={attachEvents:b$,detachEvents:w$};const gv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function _$(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=kn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),u=e.getBreakpoint(o,l,s);if(!u||e.currentBreakpoint===u)return;const c=(u in o?o[u]:void 0)||e.originalParams,y=gv(e,r),f=gv(e,c),h=e.params.grabCursor,v=c.grabCursor,w=r.enabled;y&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!y&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),h&&!v?e.unsetGrabCursor():!h&&v&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(T=>{if(typeof c[T]>"u")return;const _=r[T]&&r[T].enabled,E=c[T]&&c[T].enabled;_&&!E&&e[T].disable(),!_&&E&&e[T].enable()});const p=c.direction&&c.direction!==r.direction,m=r.loop&&(c.slidesPerView!==r.slidesPerView||p),x=r.loop;p&&n&&e.changeDirection(),jt(e.params,c);const S=e.params.enabled,C=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",c),n&&(m?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&C?(e.loopCreate(t),e.updateSlides()):x&&!C&&e.loopDestroy()),e.emit("breakpoint",c)}function C$(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=gt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:u}=a[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var E$={setBreakpoint:_$,getBreakpoint:C$};function k$(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function T$(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=k$(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function P$(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var O$={addClasses:T$,removeClasses:P$};function M$(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var j$={checkOverflow:M$},vp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function $$(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){jt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){jt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),jt(t,r)}}const vd={eventsEmitter:O5,update:z5,translate:G5,transition:K5,slide:i$,loop:l$,grabCursor:d$,events:S$,breakpoints:E$,checkOverflow:j$,classes:O$},yd={};let hm=class Mn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=jt({},r),n&&!r.el&&(r.el=n);const i=kn();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(u=>{const d=jt({},r,{el:u});s.push(new Mn(d))}),s}const o=this;o.__swiper__=!0,o.support=xS(),o.device=bS({userAgent:r.userAgent}),o.browser=wS(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:$$(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=jt({},vp,a);return o.params=jt({},l,yd,r),o.originalParams=jt({},o.params),o.passedParams=jt({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=Sn(n,`.${r.slideClass}, swiper-slide`),o=Hl(i[0]);return Hl(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=Sn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:u}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let c=o[u]?Math.ceil(o[u].swiperSlideSize):0,y;for(let f=u+1;f<o.length;f+=1)o[f]&&!y&&(c+=Math.ceil(o[f].swiperSlideSize),d+=1,c>s&&(y=!0));for(let f=u-1;f>=0;f-=1)o[f]&&!y&&(c+=o[f].swiperSlideSize,d+=1,c>s&&(y=!0))}else if(t==="current")for(let c=u+1;c<o.length;c+=1)(n?a[c]+l[c]-a[u]<s:a[c]-a[u]<s)&&(d+=1);else for(let c=u-1;c>=0;c-=1)a[u]-a[c]<s&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Ks(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Sn(r,i())[0])();return!a&&n.params.createElements&&(a=Ul("div",n.params.wrapperClass),r.append(a),Sn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||dr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||dr(r,"direction")==="rtl"),wrongRTL:dr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Ks(n,o):o.addEventListener("load",a=>{Ks(n,a.target)})}),gp(n),n.initialized=!0,gp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),p5(r)),r.destroyed=!0),null}static extendDefaults(t){jt(yd,t)}static get extendedDefaults(){return yd}static get defaults(){return vp}static installModule(t){Mn.prototype.__modules__||(Mn.prototype.__modules__=[]);const n=Mn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Mn.installModule(n)),Mn):(Mn.installModule(t),Mn)}};Object.keys(vd).forEach(e=>{Object.keys(vd[e]).forEach(t=>{hm.prototype[t]=vd[e][t]})});hm.use([T5,P5]);const CS=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function ei(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Ri(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:ei(t[r])&&ei(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Ri(e[r],t[r]):e[r]=t[r]})}function ES(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function kS(e={}){return e.pagination&&typeof e.pagination.el>"u"}function TS(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function PS(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function I$(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function D$({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(E=>E!=="children"&&E!=="direction"&&E!=="wrapperClass"),{params:u,pagination:d,navigation:c,scrollbar:y,virtual:f,thumbs:h}=e;let v,w,p,m,x,S,C,T;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(v=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&d&&!d.el&&(p=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&y&&!y.el&&(m=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&c&&!c.prevEl&&!c.nextEl&&(x=!0);const _=E=>{e[E]&&(e[E].destroy(),E==="navigation"?(e.isElement&&(e[E].prevEl.remove(),e[E].nextEl.remove()),u[E].prevEl=void 0,u[E].nextEl=void 0,e[E].prevEl=void 0,e[E].nextEl=void 0):(e.isElement&&e[E].el.remove(),u[E].el=void 0,e[E].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?S=!0:!u.loop&&n.loop?C=!0:T=!0),s.forEach(E=>{if(ei(u[E])&&ei(n[E]))Object.assign(u[E],n[E]),(E==="navigation"||E==="pagination"||E==="scrollbar")&&"enabled"in n[E]&&!n[E].enabled&&_(E);else{const j=n[E];(j===!0||j===!1)&&(E==="navigation"||E==="pagination"||E==="scrollbar")?j===!1&&_(E):u[E]=n[E]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&f&&u.virtual.enabled?(f.slides=t,f.update(!0)):r.includes("virtual")&&f&&u.virtual.enabled&&(t&&(f.slides=t),f.update(!0)),r.includes("children")&&t&&u.loop&&(T=!0),v&&h.init()&&h.update(!0),w&&(e.controller.control=u.controller.control),p&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),d.init(),d.render(),d.update()),m&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),y.init(),y.updateSize(),y.setTranslate()),x&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),ka(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),ka(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),c.init(),c.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(S||T)&&e.loopDestroy(),(C||T)&&e.loopCreate(),e.update()}function L$(e={},t=!0){const n={on:{}},r={},i={};Ri(n,vp),n._emitClasses=!0,n.init=!1;const o={},a=CS.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?ei(e[s])?(n[s]={},i[s]={},Ri(n[s],e[s]),Ri(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function R$({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){ES(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),kS(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),TS(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function A$(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return CS.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(ei(e[s])&&ei(t[s])){const u=Object.keys(e[s]),d=Object.keys(t[s]);u.length!==d.length?a(s):(u.forEach(c=>{e[s][c]!==t[s][c]&&a(s)}),d.forEach(c=>{e[s][c]!==t[s][c]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const F$=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Wl(){return Wl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wl.apply(this,arguments)}function OS(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function MS(e){const t=[];return q.Children.toArray(e).forEach(n=>{OS(n)?t.push(n):n.props&&n.props.children&&MS(n.props.children).forEach(r=>t.push(r))}),t}function N$(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return q.Children.toArray(e).forEach(r=>{if(OS(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=MS(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function z$(e,t,n){if(!n)return null;const r=d=>{let c=d;return d<0?c=t.length+d:c>=t.length&&(c=c-t.length),c},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let d=l;d<s;d+=1)d>=o&&d<=a&&u.push(t[r(d)]);return u.map((d,c)=>q.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${c}`}))}function Ko(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const vv=b.createContext(null),B$=b.createContext(null),jS=b.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,u]=b.useState("swiper"),[d,c]=b.useState(null),[y,f]=b.useState(!1),h=b.useRef(!1),v=b.useRef(null),w=b.useRef(null),p=b.useRef(null),m=b.useRef(null),x=b.useRef(null),S=b.useRef(null),C=b.useRef(null),T=b.useRef(null),{params:_,passedParams:E,rest:j,events:I}=L$(o),{slides:D,slots:O}=N$(r),M=()=>{f(!y)};Object.assign(_.on,{_containerClasses(P,$){u($)}});const L=()=>{Object.assign(_.on,I),l=!0;const P={..._};if(delete P.wrapperClass,w.current=new hm(P),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=D;const $={cache:!1,slides:D,renderExternal:c,renderExternalUpdate:!1};Ri(w.current.params.virtual,$),Ri(w.current.originalParams.virtual,$)}};v.current||L(),w.current&&w.current.on("_beforeBreakpoint",M);const A=()=>{l||!I||!w.current||Object.keys(I).forEach(P=>{w.current.on(P,I[P])})},R=()=>{!I||!w.current||Object.keys(I).forEach(P=>{w.current.off(P,I[P])})};b.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",M)}),b.useEffect(()=>{!h.current&&w.current&&(w.current.emitSlidesClasses(),h.current=!0)}),Ko(()=>{if(a&&(a.current=v.current),!!v.current)return w.current.destroyed&&L(),R$({el:v.current,nextEl:x.current,prevEl:S.current,paginationEl:C.current,scrollbarEl:T.current,swiper:w.current},_),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),Ko(()=>{A();const P=A$(E,p.current,D,m.current,$=>$.key);return p.current=E,m.current=D,P.length&&w.current&&!w.current.destroyed&&D$({swiper:w.current,slides:D,passedParams:E,changedParams:P,nextEl:x.current,prevEl:S.current,scrollbarEl:T.current,paginationEl:C.current}),()=>{R()}}),Ko(()=>{F$(w.current)},[d]);function F(){return _.virtual?z$(w.current,D,d):D.map((P,$)=>q.cloneElement(P,{swiper:w.current,swiperSlideIndex:$}))}return q.createElement(t,Wl({ref:v,className:PS(`${s}${e?` ${e}`:""}`)},j),q.createElement(B$.Provider,{value:w.current},O["container-start"],q.createElement(n,{className:I$(_.wrapperClass)},O["wrapper-start"],F(),O["wrapper-end"]),ES(_)&&q.createElement(q.Fragment,null,q.createElement("div",{ref:S,className:"swiper-button-prev"}),q.createElement("div",{ref:x,className:"swiper-button-next"})),TS(_)&&q.createElement("div",{ref:T,className:"swiper-scrollbar"}),kS(_)&&q.createElement("div",{ref:C,className:"swiper-pagination"}),O["container-end"]))});jS.displayName="Swiper";const $S=b.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},u)=>{const d=b.useRef(null),[c,y]=b.useState("swiper-slide"),[f,h]=b.useState(!1);function v(x,S,C){S===d.current&&y(C)}Ko(()=>{if(typeof l<"u"&&(d.current.swiperSlideIndex=l),u&&(u.current=d.current),!(!d.current||!r)){if(r.destroyed){c!=="swiper-slide"&&y("swiper-slide");return}return r.on("_slideClass",v),()=>{r&&r.off("_slideClass",v)}}}),Ko(()=>{r&&d.current&&!r.destroyed&&y(r.getSlideClasses(d.current))},[r]);const w={isActive:c.indexOf("swiper-slide-active")>=0,isVisible:c.indexOf("swiper-slide-visible")>=0,isPrev:c.indexOf("swiper-slide-prev")>=0,isNext:c.indexOf("swiper-slide-next")>=0},p=()=>typeof t=="function"?t(w):t,m=()=>{h(!0)};return q.createElement(e,Wl({ref:d,className:PS(`${c}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:m},s),i&&q.createElement(vv.Provider,{value:w},q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},p(),o&&!f&&q.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}}))),!i&&q.createElement(vv.Provider,{value:w},p(),o&&!f&&q.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}})))});$S.displayName="SwiperSlide";const V$=k.section`
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
`,U$=k.div`
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
`,H$=k.div`
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
`,W$=k(Me)`
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
`,G$=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],Y$=()=>g.jsx(V$,{children:g.jsx(jS,{modules:[w5,_5,S5],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:G$.map(e=>g.jsx($S,{children:g.jsx(U$,{bg:e.img,children:g.jsxs(H$,{children:[g.jsx("h1",{children:e.title}),g.jsx("p",{children:e.desc}),g.jsx(W$,{to:e.url,children:e.btn})]})})},e.id))})}),q$=k.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom:30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,xd=k.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,bd=k.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,wd=k.div`
  font-size: 14px;
  color: #888;
`,IS=()=>g.jsxs(q$,{children:[g.jsxs(xd,{children:[g.jsx(bd,{children:"3000+"}),g.jsx(wd,{children:"Перевірених деталей"})]}),g.jsxs(xd,{children:[g.jsx(bd,{children:"6 років"}),g.jsx(wd,{children:"Досвіду на ринку"})]}),g.jsxs(xd,{children:[g.jsx(bd,{children:"100%"}),g.jsx(wd,{children:"Контроль якості"})]})]}),X$=Re.div`
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
`;const Q$=()=>g.jsx(X$,{children:g.jsxs(K$,{children:[g.jsx(Y$,{}),g.jsx(Qb,{}),g.jsx(c5,{}),g.jsx(IS,{})]})}),Z$=k.div`
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
`,J$=k.section`
  background-color:  var(--second-background);
`,eI=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,tI=k.button`
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
`,nI=k.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,rI=k.button`
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
`;k.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`;const iI=k.div`
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
`,oI=k.div`
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
`;k.button`
  font-size: 20px;
  border: none;
  background: none;
  margin-bottom: 20px;
`;const aI=k.div`
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
`;k.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;const sI=k.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,lI=k.button`
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
`,DS=k.button`
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
`,uI=k.div`
  position: relative;
  display: inline-block;

`,cI=k.div`
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
`,ci=k.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,dI=k.aside`

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
`,fI=k.h3`
    display: flex;
    gap: 110px;
margin-bottom: 15px;
font-size: 20px;
font-family: var(--main-font);
  
`;k.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
  font-size: 14px;
`;const pI=k.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,hI=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,mI=k.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,gI=k.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,vI=k.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,yI=k.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,yp=k.input.attrs({type:"checkbox"})`
  display: none;
`,xI=k.span`
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
`;var xp={},mm={},gm={},uo={};Object.defineProperty(uo,"__esModule",{value:!0});uo.Direction=void 0;var yv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(yv||(uo.Direction=yv={}));(function(e){var t=te&&te.__spreadArray||function(O,M,L){if(L||arguments.length===2)for(var A=0,R=M.length,F;A<R;A++)(F||!(A in M))&&(F||(F=Array.prototype.slice.call(M,0,A)),F[A]=M[A]);return O.concat(F||Array.prototype.slice.call(M))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=b,r=uo,i=function(O){var M=O.toString().split(".")[1];return M?M.length:0};e.getStepDecimals=i;function o(O){return O.touches&&O.touches.length||O.changedTouches&&O.changedTouches.length}e.isTouchEvent=o;function a(O,M,L){var A=(M-O)/L,R=8,F=Number(A.toFixed(R));return parseInt(F.toString(),10)===F}e.isStepDivisible=a;function l(O,M,L,A,R,F,P){var $=1e11;if(O=Math.round(O*$)/$,!F){var N=P[M-1],B=P[M+1];if(N&&N>O)return N;if(B&&B<O)return B}if(O>A)return A;if(O<L)return L;var z=Math.floor(O*$-L*$)%Math.floor(R*$),U=Math.floor(O*$-Math.abs(z)),G=z===0?O:U/$,Y=Math.abs(z/$)<R/2?G:G+R,X=(0,e.getStepDecimals)(R);return parseFloat(Y.toFixed(X))}e.normalizeValue=l;function s(O,M,L){return(O-M)/(L-M)}e.relativeValue=s;function u(O){return O===r.Direction.Up||O===r.Direction.Down}e.isVertical=u;function d(O,M,L){if(M>=L)throw new RangeError("min (".concat(M,") is equal/bigger than max (").concat(L,")"));if(O<M)throw new RangeError("value (".concat(O,") is smaller than min (").concat(M,")"));if(O>L)throw new RangeError("value (".concat(O,") is bigger than max (").concat(L,")"))}e.checkBoundaries=d;function c(O,M,L){return O<M?M:O>L?L:O}e.checkValuesAgainstBoundaries=c;function y(O){if(!(O.length<2)&&!O.slice(1).every(function(M,L){return O[L]<=M}))throw new RangeError("values={[".concat(O,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=y;function f(O){var M=window.getComputedStyle(O);return{top:parseInt(M["margin-top"],10),bottom:parseInt(M["margin-bottom"],10),left:parseInt(M["margin-left"],10),right:parseInt(M["margin-right"],10)}}e.getMargin=f;function h(O){var M=window.getComputedStyle(O);return{top:parseInt(M["padding-top"],10)+parseInt(M["border-top-width"],10),bottom:parseInt(M["padding-bottom"],10)+parseInt(M["border-bottom-width"],10),left:parseInt(M["padding-left"],10)+parseInt(M["border-left-width"],10),right:parseInt(M["padding-right"],10)+parseInt(M["border-right-width"],10)}}e.getPaddingAndBorder=h;function v(O,M,L){var A=L?-1:1;O.forEach(function(R,F){return p(R,A*M[F].x,M[F].y)})}e.translateThumbs=v;function w(O,M,L,A){for(var R=0,F=I(O[0],M,L,A),P=1;P<O.length;P++){var $=I(O[P],M,L,A);$<F&&(F=$,R=P)}return R}e.getClosestThumbIndex=w;function p(O,M,L){O.style.transform="translate(".concat(M,"px, ").concat(L,"px)")}e.translate=p;var m=function(O){var M=[],L=null,A=function(){for(var R=[],F=0;F<arguments.length;F++)R[F]=arguments[F];M=R,!L&&(L=requestAnimationFrame(function(){L=null,O.apply(void 0,M)}))};return A};e.schd=m;function x(O,M,L){var A=O.slice(0);return A[M]=L,A}e.replaceAt=x;function S(O){var M=O.values,L=O.colors,A=O.min,R=O.max,F=O.direction,P=F===void 0?r.Direction.Right:F,$=O.rtl,N=$===void 0?!1:$;N&&P===r.Direction.Right?P=r.Direction.Left:N&&r.Direction.Left&&(P=r.Direction.Right);var B=M.slice(0).sort(function(U,G){return U-G}).map(function(U){return(U-A)/(R-A)*100}),z=B.reduce(function(U,G,Y){return"".concat(U,", ").concat(L[Y]," ").concat(G,"%, ").concat(L[Y+1]," ").concat(G,"%")},"");return"linear-gradient(".concat(P,", ").concat(L[0]," 0%").concat(z,", ").concat(L[L.length-1]," 100%)")}e.getTrackBackground=S;function C(){}e.voidFn=C;function T(O){throw new Error("Didn't expect to get here")}e.assertUnreachable=T;var _=function(O,M,L,A,R){R===void 0&&(R=function(P){return P});var F=Math.ceil(t([O],Array.from(O.children),!0).reduce(function(P,$){var N=Math.ceil($.getBoundingClientRect().width);if($.innerText&&$.innerText.includes(L)&&$.childElementCount===0){var B=$.cloneNode(!0);B.innerHTML=R(M.toFixed(A)),B.style.visibility="hidden",document.body.appendChild(B),N=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return N>P?N:P},O.getBoundingClientRect().width));return F},E=function(O,M,L,A,R,F,P){P===void 0&&(P=function(B){return B});var $=[],N=function(B){var z=_(L[B],A[B],R,F,P),U=M[B].x;M.forEach(function(G,Y){var X=G.x,ee=_(L[Y],A[Y],R,F,P);B!==Y&&(U>=X&&U<=X+ee||U+z>=X&&U+z<=X+ee)&&($.includes(Y)||($.push(B),$.push(Y),$=t(t([],$,!0),[B,Y],!1),N(Y)))})};return N(O),Array.from(new Set($.sort()))},j=function(O,M,L,A,R,F){A===void 0&&(A=.1),R===void 0&&(R=" - "),F===void 0&&(F=function(Y){return Y});var P=(0,e.getStepDecimals)(A),$=(0,n.useState)({}),N=$[0],B=$[1],z=(0,n.useState)(F(M[L].toFixed(P))),U=z[0],G=z[1];return(0,n.useEffect)(function(){if(O){var Y=O.getThumbs();if(Y.length<1)return;var X={},ee=O.getOffsets(),fe=E(L,ee,Y,M,R,P,F),be=F(M[L].toFixed(P));if(fe.length){var ie=fe.reduce(function(vt,fo,Wa,po){return vt.length?t(t([],vt,!0),[ee[po[Wa]].x],!1):[ee[po[Wa]].x]},[]);if(Math.min.apply(Math,ie)===ee[L].x){var je=[];fe.forEach(function(vt){je.push(M[vt].toFixed(P))}),be=Array.from(new Set(je.sort(function(vt,fo){return parseFloat(vt)-parseFloat(fo)}))).map(F).join(R);var Be=Math.min.apply(Math,ie),Ve=Math.max.apply(Math,ie),ai=Y[fe[ie.indexOf(Ve)]].getBoundingClientRect().width;X.left="".concat(Math.abs(Be-(Ve+ai))/2,"px"),X.transform="translate(-50%, 0)"}else X.visibility="hidden"}G(be),B(X)}},[O,M]),[U,N]};e.useThumbOverlap=j;function I(O,M,L,A){var R=O.getBoundingClientRect(),F=R.left,P=R.top,$=R.width,N=R.height;return u(A)?Math.abs(L-(P+N/2)):Math.abs(M-(F+$/2))}var D=function(){var O,M=((O=navigator.userAgentData)===null||O===void 0?void 0:O.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(M)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=D})(gm);var bI=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),wI=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),SI=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),_I=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&wI(t,e,n);return SI(t,e),t},xv=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(mm,"__esModule",{value:!0});var bs=_I(b),oe=gm,Ae=uo,CI=["ArrowRight","ArrowUp","k","PageUp"],EI=["ArrowLeft","ArrowDown","j","PageDown"],kI=function(e){bI(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=bs.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,u=r.trackRef.current;if(!u)return console.warn("No track element found."),[];var d=u.getBoundingClientRect(),c=(0,oe.getPaddingAndBorder)(u);return r.getThumbs().map(function(y,f){var h={x:0,y:0},v=y.getBoundingClientRect(),w=(0,oe.getMargin)(y);switch(o){case Ae.Direction.Right:return h.x=(w.left+c.left)*-1,h.y=((v.height-d.height)/2+c.top)*-1,h.x+=d.width*(0,oe.relativeValue)(a[f],l,s)-v.width/2,h;case Ae.Direction.Left:return h.x=(w.right+c.right)*-1,h.y=((v.height-d.height)/2+c.top)*-1,h.x+=d.width-d.width*(0,oe.relativeValue)(a[f],l,s)-v.width/2,h;case Ae.Direction.Up:return h.x=((v.width-d.width)/2+w.left+c.left)*-1,h.y=-c.left,h.y+=d.height-d.height*(0,oe.relativeValue)(a[f],l,s)-v.height/2,h;case Ae.Direction.Down:return h.x=((v.width-d.width)/2+w.left+c.left)*-1,h.y=-c.left,h.y+=d.height*(0,oe.relativeValue)(a[f],l,s)-v.height/2,h;default:return(0,oe.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,oe.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,oe.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,oe.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,u=o.rtl,d=o.direction,c=r.state.isChanged,y=r.getTargetIndex(i.nativeEvent),f=u||d===Ae.Direction.Left||d===Ae.Direction.Down?-1:1;y!==-1&&(CI.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]+f*(i.key==="PageUp"?s*10:s),y)))):EI.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:y,isChanged:!0}),l((0,oe.replaceAt)(a,y,r.normalizeValue(a[y]-f*(i.key==="PageDown"?s*10:s),y)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){c&&r.fireOnFinalChange()}):c&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,u=r.props,d=u.direction,c=u.min,y=u.max,f=u.onChange,h=u.values,v=u.step,w=u.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var p=r.trackRef.current;if(!p)return null;var m=p.getBoundingClientRect(),x=(0,oe.isVertical)(d)?m.height:m.width;if(s[0]!==-1&&s[1]!==-1){var S=i-s[0],C=o-s[1],T=0;switch(d){case Ae.Direction.Right:case Ae.Direction.Left:T=S/x*(y-c);break;case Ae.Direction.Down:case Ae.Direction.Up:T=C/x*(y-c);break;default:(0,oe.assertUnreachable)(d)}if(w&&(T*=-1),Math.abs(T)>=v/2){for(var _=0;_<r.thumbRefs.length;_++){if(h[_]===y&&Math.sign(T)===1||h[_]===c&&Math.sign(T)===-1)return;var E=h[_]+T;E>y?T=y-h[_]:E<c&&(T=c-h[_])}for(var j=h.slice(0),_=0;_<r.thumbRefs.length;_++)j=(0,oe.replaceAt)(j,_,r.normalizeValue(h[_]+T,_));r.setState({draggedTrackPos:[i,o]}),f(j)}}else{var I=0;switch(d){case Ae.Direction.Right:I=(i-m.left)/x*(y-c)+c;break;case Ae.Direction.Left:I=(x-(i-m.left))/x*(y-c)+c;break;case Ae.Direction.Down:I=(o-m.top)/x*(y-c)+c;break;case Ae.Direction.Up:I=(x-(o-m.top))/x*(y-c)+c;break;default:(0,oe.assertUnreachable)(d)}w&&(I=y+c-I),Math.abs(h[l]-I)>=v/2&&f((0,oe.replaceAt)(h,l,r.normalizeValue(I,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,u=a.step,d=a.allowOverlap,c=a.values;return(0,oe.normalizeValue)(i,o,l,s,u,d,c)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=bs.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),u=[],d=0;d<r.numOfMarks+1;d++){var c=9999,y=9999;if(r.markRefs[d].current){var f=r.markRefs[d].current.getBoundingClientRect();c=f.height,y=f.width}r.props.direction===Ae.Direction.Left||r.props.direction===Ae.Direction.Right?u.push([Math.round(o/r.numOfMarks*d+l-y/2),-Math.round((c-a)/2)]):u.push([Math.round(a/r.numOfMarks*d+s-c/2),-Math.round((y-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,oe.schd)(r.onMouseMove),r.schdOnTouchMove=(0,oe.schd)(r.onTouchMove),r.schdOnEnd=(0,oe.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return bs.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,oe.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,oe.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,oe.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(d){(0,oe.isStepDivisible)(a,d,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,u=s===void 0?function(){return null}:s,d=r.values,c=r.min,y=r.max,f=r.allowOverlap,h=r.disabled,v=this.state,w=v.draggedThumbIndex,p=v.thumbZIndexes,m=v.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,oe.isVertical)(this.props.direction)?"ns-resize":"ew-resize":d.length===1&&!h?"pointer":"inherit"},onMouseDown:h?oe.voidFn:this.onMouseDownTrack,onTouchStart:h?oe.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:h,children:xv(xv([],m.map(function(x,S,C){return u({props:{style:n.props.direction===Ae.Direction.Left||n.props.direction===Ae.Direction.Right?{position:"absolute",left:"".concat(x[0],"px"),marginTop:"".concat(x[1],"px")}:{position:"absolute",top:"".concat(x[0],"px"),marginLeft:"".concat(x[1],"px")},key:"mark".concat(S),ref:n.markRefs[S]},index:S})}),!0),d.map(function(x,S){var C=n.state.draggedThumbIndex===S;return l({index:S,value:x,isDragged:C,props:{style:{position:"absolute",zIndex:p[S],cursor:h?"inherit":C?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:h?void 0:0,"aria-valuemax":f?y:d[S+1]||y,"aria-valuemin":f?c:d[S-1]||c,"aria-valuenow":x,draggable:!1,ref:n.thumbRefs[S],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:h?oe.voidFn:n.onKeyDown,onKeyUp:h?oe.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Ae.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(bs.Component);mm.default=kI;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(mm);e.Range=n.default;var r=gm;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=uo;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(xp);const TI=k.div`
  padding: 20px 0;
`,PI=k.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,bv=k.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid  #85683d;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color:  #583d2d;
  }
`;k.span`
  display: flex;
  align-items: center;
  color: #999;
`;const OI=k.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,MI=k.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,LS=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,u]=b.useState([o,a]);b.useEffect(()=>{e&&e.length===2&&(u(e),t&&t(e))},[e,t]);const d=f=>{u(f),t&&t(f)},c=(f,h)=>{const v=h===""?"":Number(h),w=[...s];w[f]=v,d(w)},y=f=>{const h=[...s];f===0?((h[0]===""||h[0]<o)&&(h[0]=o),h[0]>h[1]-50&&(h[0]=h[1]-50)):((h[1]===""||h[1]>a)&&(h[1]=a),h[1]<h[0]+50&&(h[1]=h[0]+50)),d(h)};return g.jsx(g.Fragment,{children:l&&g.jsxs(TI,{children:[g.jsxs(PI,{children:[g.jsx(bv,{type:"number",value:s[0],min:o,max:s[1],onChange:f=>c(0,f.target.value),onBlur:()=>y(0)}),g.jsx(bv,{type:"number",value:s[1],min:s[0],max:a,onChange:f=>c(1,f.target.value),onBlur:()=>y(1)})]}),g.jsx(xp.Range,{values:s,step:50,min:o,max:a,onChange:d,renderTrack:({props:f,children:h})=>g.jsx(OI,{...f,background:xp.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:h}),renderThumb:({props:f})=>g.jsx(MI,{...f})})]})})},jI=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState([]),[l,s]=b.useState({});b.useEffect(()=>{t&&(async()=>{try{const h=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const v=await h.json();console.log("dataaaa",v.data);const w=v.data||[],p={};w.forEach(x=>{var S;(S=x.attributes)==null||S.forEach(C=>{p[C.label]||(p[C.label]=new Set),p[C.label].add(C.value)})});const m=Object.entries(p).map(([x,S])=>({type:"checkbox",label:x,name:x.toLowerCase(),options:Array.from(S)}));console.log("fillltr",m),a(m)}catch(h){console.error(h)}})()},[t]);const u=f=>{s(h=>({...h,[f]:!h[f]}))},d=(f,h)=>{r(v=>{const w=v[f]||[];return w.includes(h)?{...v,[f]:w.filter(p=>p!==h)}:{...v,[f]:[...w,h]}})},c=Object.values(n).some(f=>Array.isArray(f)&&f.length>0),y=()=>{c&&r({})};return console.log(c),g.jsxs(dI,{children:[g.jsxs(fI,{children:["Фільтри ",g.jsx(kb,{size:20})]}),(o||[]).map(f=>{var v;const h=!!l[f.name];return g.jsxs(pI,{children:[g.jsxs(hI,{onClick:()=>u(f.name),children:[g.jsx(mI,{children:f.label}),g.jsx(gI,{isOpen:h})]}),g.jsxs(vI,{isOpen:h,children:[f.type==="checkbox"&&((v=f.options)==null?void 0:v.map(w=>{var p;return g.jsxs(yI,{children:[g.jsx(yp,{checked:((p=n[f.name])==null?void 0:p.includes(w))||!1,onChange:()=>d(f.name,w)}),g.jsx(xI,{}),w]},w)})),f.type==="range"&&g.jsx(LS,{onChange:i,childValues:e})]})]},f.name)}),g.jsx(DS,{onClick:y,disabled:!c,children:"Скинути обрані фільтри"})]})},$I=k.aside`
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  font-size: 20px;
font-family: var(--main-font);
`;k.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;const II=k.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,DI=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,LI=k.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,RI=k.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,AI=k.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,FI=k.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #444;

  &:hover span:first-of-type {
    border-color: #85683d;
  }
`,bp=k.input.attrs({type:"checkbox"})`
  display: none;
`,NI=k.span`
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
`,zI=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState({}),[l,s]=b.useState([]);b.useEffect(()=>{t&&(async()=>{try{const y=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const f=await y.json();console.log("dataaaa",f.data);const h=f.data||[],v={};h.forEach(p=>{var m;(m=p.attributes)==null||m.forEach(x=>{v[x.label]||(v[x.label]=new Set),v[x.label].add(x.value)})});const w=Object.entries(v).map(([p,m])=>({type:"checkbox",label:p,name:p.toLowerCase(),options:Array.from(m)}));console.log("fillltr",w),s(w)}catch(y){console.error(y)}})()},[t]);const u=c=>{a(y=>({...y,[c]:!y[c]}))},d=(c,y)=>{r(f=>{const h=f[c]||[];return h.includes(y)?{...f,[c]:h.filter(v=>v!==y)}:{...f,[c]:[...h,y]}})};return g.jsx($I,{children:(l||[]).map(c=>{var f;const y=!!o[c.name];return g.jsxs(II,{children:[g.jsxs(DI,{onClick:()=>u(c.name),children:[g.jsx(LI,{children:c.label}),g.jsx(RI,{isOpen:y})]}),g.jsxs(AI,{isOpen:y,children:[c.type==="checkbox"&&((f=c.options)==null?void 0:f.map(h=>{var v;return g.jsxs(FI,{children:[g.jsx(bp,{checked:((v=n[c.name])==null?void 0:v.includes(h))||!1,onChange:()=>d(c.name,h)}),g.jsx(NI,{}),h]},h)})),c.type==="range"&&g.jsx(LS,{onChange:i,childValues:e})]})]},c.name)})})},BI=k.div`
`,VI=k.div`
display: flex;
    justify-content: space-between;
    align-items: center;
    
`,UI=k.h2`
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

`,HI=k.div`
width: 100vw;
height:30vw;

  @media screen and (min-width: 768px) {
  width: 60vw;
  height:80vw;
  }
   @media screen and (min-width: 1200px) {
 
  height:40vw;
  }
      
`;k.div``;const WI=k.div`
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
`,GI=k.div`
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
`,YI=k.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;
`,qI=k.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,XI=k.p`
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
`,KI=k.p`
     font-size: 17px;
    font-weight: 800;

`,QI=k.div.attrs({className:"card-buttons"})`
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
`,wv=k.button`
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
`;k.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;k.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;const ZI=k.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,Sd=k.button`
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
`,JI=k.div`
  position: relative;
  display: inline-block;
   @media screen and (max-width: 768px) {
  display:none;
  }

`,eD=k.button`
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
`,tD=k.div`
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
`,di=k.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,RS=Vb({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]}}}),{toggleFavorite:Ua,clearFavorite:nD}=RS.actions,rD=RS.reducer,iD=({setValues:e,category:t,selectedFilters:n={},priceRange:r,sortType:i,setIsSortOpen:o,isSortOpen:a,setSortType:l,sortOrder:s,setSortOrder:u})=>{const[d,c]=b.useState([]),[y,f]=b.useState(!0),[h,v]=b.useState(1),w=24;let p=d;b.useEffect(()=>{(async()=>{try{f(!0);const L=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();c(L.data);const A=L.data.map(R=>R.price);if(A.length>0){let R=Math.min(...A),F=Math.max(...A);e([R,F])}}catch(M){console.error("Error fetching products:",M)}finally{f(!1)}})()},[t,e]),b.useEffect(()=>{v(1)},[t,n,r]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[h]);const m=Er(),x=Kn(),S=Et(O=>O.favorites.items),C=Et(O=>O.cart.items),T=(O,M)=>{M.stopPropagation();const L=S.some(A=>A.id===O.id);x(Ua(O)),L?J.warning(`${O.name} видалено з обраного`):J.info(`${O.name} додано в обране`)};if(Object.keys(n).forEach(O=>{const M=n[O];Array.isArray(M)&&M.length>0&&(p=p.filter(L=>{var R;const A=(R=L.attributes)==null?void 0:R.find(F=>F.label.toLowerCase()===O.toLowerCase());return A&&M.includes(A.value)}))}),r&&r.length===2){const[O,M]=r;console.log(O,M)}const _=b.useMemo(()=>{const O=[...p];switch(i){case"name":return O.sort((M,L)=>s==="asc"?M.name.localeCompare(L.name):L.name.localeCompare(M.name));case"price":return O.sort((M,L)=>s==="asc"?M.price-L.price:L.price-M.price);case"date":return O.sort((M,L)=>s==="asc"?new Date(M.createdAt)-new Date(L.createdAt):new Date(L.createdAt)-new Date(M.createdAt));default:return O}},[i,p,s]),E=h*w,j=E-w,I=_.slice(j,E),D=Math.ceil(p.length/w);return y?g.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:g.jsx(Yu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):(console.log(I),console.log("filteredProducts.length:",p.length),console.log("currentProducts.length:",I.length),g.jsxs(BI,{children:[g.jsxs(VI,{children:[g.jsx(UI,{children:t}),g.jsxs(JI,{children:[g.jsxs(eD,{onClick:()=>o(O=>!O),children:["Сортування",g.jsx(Uh,{strokeWidth:.9,size:22})]}),a&&g.jsxs(tD,{children:[g.jsx(di,{onClick:()=>{l("name"),u("asc"),o(!1)},children:"А-Я"}),g.jsx(di,{onClick:()=>{l("name"),u("desc"),o(!1)},children:"Я-А"}),g.jsx(di,{onClick:()=>{l("price"),u("asc"),o(!1)},children:"Ціна ↑"}),g.jsx(di,{onClick:()=>{l("price"),u("desc"),o(!1)},children:"Ціна ↓"}),g.jsx(di,{onClick:()=>{l("date"),u("desc"),o(!1)},children:"Спочатку новіші"}),g.jsx(di,{onClick:()=>{l("date"),u("asc"),o(!1)},children:"Спочатку старіші"})]})]})]}),g.jsx(oo,{autoClose:1500}),p.length===0?g.jsx(HI,{children:g.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):g.jsx(WI,{children:I.map(O=>{var P,$;const M=S.some(N=>N.id===O.id),L=C.find(N=>N.id===O.id),R=(L?L.quantity:0)>=(O.stock||0),F=(N,B)=>{if(B.stopPropagation(),R){J.error("Товар уже у кошику");return}x(Aa({...N,quantity:1})),J.success(`${N.name} додано в кошик!`)};return g.jsxs(GI,{onClick:()=>m(`/product/${O.id}`),style:{cursor:"pointer"},children:[g.jsx(YI,{src:(($=(P=O.images)==null?void 0:P[0])==null?void 0:$.url)||"/placeholder.jpg",alt:O.name,onError:N=>{N.currentTarget.onerror=null,N.currentTarget.src=Sa}}),g.jsx(XI,{children:O.name}),g.jsxs(qI,{children:[g.jsxs(KI,{children:[O.price," грн"]}),g.jsxs(QI,{children:[g.jsx(wv,{onClick:N=>F(O,N),children:g.jsx(La,{size:24,color:L?"var(--orange-color)":"black",fill:L?"var(--orange-color)":"none",strokeWidth:L?1:2})}),g.jsx(wv,{onClick:N=>T(O,N),children:g.jsx(Wh,{size:24,fill:M?"#ff4d4f":"none",color:M?"#ff4d4f":"#000000",strokeWidth:M?1:2})})]})]})]},O.id)})}),p.length>w&&g.jsxs(ZI,{children:[g.jsx(Sd,{onClick:()=>v(O=>Math.max(O-1,1)),disabled:h===1,children:"Назад"}),Array.from({length:D},(O,M)=>g.jsx(Sd,{onClick:()=>v(M+1),active:h===M+1,children:M+1},M)),g.jsx(Sd,{onClick:()=>v(O=>Math.min(O+1,D)),disabled:h===D,children:"Вперед"})]})]}))},oD=()=>{const[e,t]=b.useState({});console.log(e);const{category:n}=H1(),[r,i]=b.useState(!1),[o,a]=b.useState(!1),[l,s]=b.useState("date"),[u,d]=b.useState("desc"),[c,y]=b.useState([]),[f,h]=b.useState([0,0]);console.log(c),console.log(n);const v=Object.values(e).some(p=>Array.isArray(p)&&p.length>0),w=()=>{v&&t({})};return g.jsxs(J$,{children:[g.jsxs(Z$,{children:[g.jsxs(eI,{children:[g.jsxs(tI,{onClick:()=>i(!0),children:["Фільтр",g.jsx(nI,{children:g.jsx("use",{href:`${un}#icon-filter`})})]}),g.jsxs(uI,{children:[g.jsxs(rI,{onClick:()=>a(p=>!p),children:["Сортування",g.jsx(Uh,{strokeWidth:.9,size:22})]}),o&&g.jsxs(cI,{children:[g.jsx(ci,{onClick:()=>{s("name"),d("asc"),a(!1)},children:"А-Я"}),g.jsx(ci,{onClick:()=>{s("name"),d("desc"),a(!1)},children:"Я-А"}),g.jsx(ci,{onClick:()=>{s("price"),d("asc"),a(!1)},children:"Ціна ↑"}),g.jsx(ci,{onClick:()=>{s("price"),d("desc"),a(!1)},children:"Ціна ↓"}),g.jsx(ci,{onClick:()=>{s("date"),d("desc"),a(!1)},children:"Спочатку новіші"}),g.jsx(ci,{onClick:()=>{s("date"),d("asc"),a(!1)},children:"Спочатку старіші"})]})]})]}),g.jsx(jI,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:c,priceRange:f,setPriceRange:h}),g.jsx(iD,{priceRange:f,values:c,setValues:y,category:n,selectedFilters:e,sortType:l,setIsSortOpen:a,isSortOpen:o,setSortType:s,sortOrder:u,setSortOrder:d}),r&&g.jsx(iI,{onClick:()=>i(!1),open:r,children:g.jsxs(oI,{onClick:p=>p.stopPropagation(),open:r,children:[g.jsxs(aI,{children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[g.jsx(kb,{size:20}),g.jsx("h2",{children:"Фільтри"})]}),g.jsx(Pb,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),g.jsx(zI,{childValues:c,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:f,setPriceRange:h}),g.jsxs(sI,{children:[g.jsx(DS,{onClick:w,disabled:!v,children:"Скинути обрані фільтри"}),g.jsx(lI,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},Sv=k.div`
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
`,aD=k.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,sD=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,lD=k.div``;k.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const uD=k.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,cD=k.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,dD=k.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,fD=k.div``,pD=k.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,hD=k.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,mD=k.span`
  color: #27ae60;
  font-size: 17px;
`,gD=k.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,vD=k.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,yD=k.span`
  font-size: 32px;
  font-weight: 700;
`;k.span`
  text-decoration: line-through;
  color: #999;
  font-size: 18px;
`;const xD=k.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,bD=k.div`
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
`,wD=k.button`
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
`;k.div`
  margin-top: 30px;
`;k.p`
  font-weight: bold;
  margin-bottom: 10px;
`;k.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;k.div`
  padding: 8px 15px;
  border: 1px solid ${e=>e.active?"#27ae60":"#ddd"};
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  background: ${e=>e.active?"#f0fff4":"white"};
`;const SD=k.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
`,_D=k.div`
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
`,CD=k.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`,ED=k.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,kD=k.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,_d=k.button`
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
`,TD=k.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,PD=k.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,OD=k.button`
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
`,MD=k.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,AS=k.span`

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
`,jD=k.div`
  position: relative;
  display: inline-block;

  &:hover ${AS} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,FS="carousel",NS="controller",$D="navigation",ID="no-scroll",vm="portal",DD="root",zS="toolbar",_v="zoom",Cd="loading",Ed="error",kd="complete",LD="placeholder",RD=e=>`active-slide-${e}`,AD="fullsize",ym="flex_center",FD="no_scroll",BS="no_scroll_padding",xm="slide",VS="slide_wrapper",ND="slide_wrapper_interactive",Ar="prev",Fr="next",Cv="swipe",Qi="close",US="onPointerDown",HS="onPointerMove",WS="onPointerUp",GS="onPointerLeave",YS="onPointerCancel",bm="onKeyDown",zD="onKeyUp",wm="onWheel",BD="Escape",VD="ArrowLeft",UD="ArrowRight",HD="button",wp="icon",qS="contain",Ev="cover",XS="Unknown action type",KS="yarl__";function Tn(...e){return e.filter(Boolean).join(" ")}function ae(e){return`${KS}${e}`}function xt(e){return`--${KS}${e}`}function Ha(e,t){return`${e}${t?`_${t}`:""}`}function Sm(e){return t=>Ha(e,t)}function Zi(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function WD(e,t,n){return Zi(e,"{index} of {total}").replace(/\{index}/g,`${Tm(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function _m(...e){return()=>{e.forEach(t=>{t()})}}function Zn(e,t,n){return()=>{const r=b.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function Cm(){return typeof window<"u"}function Em(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function co(e){return e.type===void 0||e.type==="image"}function km(e,t){return e.imageFit===Ev||e.imageFit!==qS&&t===Ev}function lc(e){return typeof e=="string"?Number.parseInt(e,10):e}function Gl(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=lc(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function GD(e,t){const n=Gl(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function YD(){return(Cm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function Tm(e,t){return t>0?(e%t+t)%t:0}function QS(e){return e.length>0}function ZS(e,t){return e[Tm(t,e.length)]}function Sp(e,t){return QS(e)?ZS(e,t):void 0}function qD(e){return co(e)?e.src:void 0}function XD(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=b.isValidElement(n)?b.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function KD(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const QD=Number(b.version.split(".")[0])>=19;function ZD(e){return{inert:QD?e:e?"":void 0}}function JD(e){e.scrollTop}const _p={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[Qi]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:qS,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Or(e,t){return{name:e,component:t}}function Ue(e,t){return{module:e,children:t}}function JS(e,t,n){return e.module.name===t?n(e):e.children?[Ue(e.module,e.children.flatMap(r=>{var i;return(i=JS(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function fi(e,t,n){return e.flatMap(r=>{var i;return(i=JS(r,t,n))!==null&&i!==void 0?i:[]})}function eL(e,t=[],n=[]){let r=e;const i=f=>{const h=[...r];for(;h.length>0;){const v=h.pop();if((v==null?void 0:v.module.name)===f)return!0;v!=null&&v.children&&h.push(...v.children)}return!1},o=(f,h)=>{if(f===""){r=[Ue(h,r)];return}r=fi(r,f,v=>[Ue(h,[v])])},a=(f,h)=>{r=fi(r,f,v=>[Ue(v.module,[Ue(h,v.children)])])},l=(f,h,v)=>{r=fi(r,f,w=>{var p;return[Ue(w.module,[...v?[Ue(h)]:[],...(p=w.children)!==null&&p!==void 0?p:[],...v?[]:[Ue(h)]])]})},s=(f,h,v)=>{r=fi(r,f,w=>[...v?[Ue(h)]:[],w,...v?[]:[Ue(h)]])},u=f=>{a(NS,f)},d=(f,h)=>{r=fi(r,f,v=>[Ue(h,v.children)])},c=f=>{r=fi(r,f,h=>h.children)},y=f=>{n.push(f)};return t.forEach(f=>{f({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:u,replace:d,remove:c,augment:y})}),{config:r,augmentation:f=>n.reduce((h,v)=>v(h),f)}}const e2=b.createContext(null),t2=Zn("useA11yContext","A11yContext",e2);function tL({children:e}){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const u=d=>c=>{var y;c.currentTarget.contains(c.relatedTarget)||n(d),(y=d?l:s)===null||y===void 0||y(c)};return{onFocus:u(!0),onBlur:u(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return b.createElement(e2.Provider,{value:o},e)}const n2=b.createContext(null),uc=Zn("useDocument","DocumentContext",n2);function nL({nodeRef:e,children:t}){const n=b.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return b.createElement(n2.Provider,{value:n},t)}const r2=b.createContext(null),cc=Zn("useEvents","EventsContext",r2);function rL({children:e}){const[t]=b.useState({});b.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=b.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(u=>u!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(u=>u(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return b.createElement(r2.Provider,{value:n},e)}const i2=b.createContext(null),Xt=Zn("useLightboxProps","LightboxPropsContext",i2);function iL({children:e,...t}){return b.createElement(i2.Provider,{value:t},e)}const o2=b.createContext(null),Mr=Zn("useLightboxState","LightboxStateContext",o2),a2=b.createContext(null),oL=Zn("useLightboxDispatch","LightboxDispatchContext",a2);function aL(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=Tm(i,n.length),a=Sp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:Sp(t.slides,t.index)}:e;default:throw new Error(XS)}}function sL({slides:e,index:t,children:n}){const[r,i]=b.useReducer(aL,{slides:e,currentIndex:t,globalIndex:t,currentSlide:Sp(e,t)}),[o,a]=b.useState(e),[l,s]=b.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const u=b.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return b.createElement(a2.Provider,{value:i},b.createElement(o2.Provider,{value:u},n))}const s2=b.createContext(null),dc=Zn("useTimeouts","TimeoutsContext",s2);function lL({children:e}){const[t]=b.useState([]);b.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=b.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return b.createElement(s2.Provider,{value:n},e)}const Pm=b.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:u,labels:d}=Xt(),c=Zi(d,t);return b.createElement("button",{ref:s,type:"button",title:c,"aria-label":c,className:Tn(ae(HD),n),onClick:o,style:{...a,...u.button},...l},i?i():b.createElement(r,{className:ae(wp),style:u.icon}))});function uL(e,t){const n=r=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function oi(e,t){return uL(e,b.createElement("g",{fill:"currentColor"},b.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const cL=oi("Close",b.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),dL=oi("Previous",b.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),fL=oi("Next",b.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),pL=oi("Loading",b.createElement(b.Fragment,null,Array.from({length:8}).map((e,t,n)=>b.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),hL=oi("Error",b.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Pn=Cm()?b.useLayoutEffect:b.useEffect;function Om(){const[e,t]=b.useState(!1);return b.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function mL(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(lc);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function kv(e,t){const n=b.useRef(void 0),r=b.useRef(void 0),i=Om();return Pn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:u,easing:d,onfinish:c}=t(n.current,e.current.getBoundingClientRect(),mL(e.current))||{};if(s&&u){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:u,easing:d})}catch(y){console.error(y)}r.current&&(r.current.onfinish=()=>{r.current=void 0,c==null||c()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function l2(){const e=b.useRef(null),t=b.useRef(void 0),[n,r]=b.useState();return{setContainerRef:b.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=u=>parseFloat(u)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function Qs(){const e=b.useRef(void 0),{setTimeout:t,clearTimeout:n}=dc();return b.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function pe(e){const t=b.useRef(e);return Pn(()=>{t.current=e}),b.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Tv(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Cp(e,t){return b.useMemo(()=>e==null&&t==null?null:n=>{Tv(e,n),Tv(t,n)},[e,t])}function gL(e,t=!1){const n=b.useRef(!1);Pn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=b.useCallback(()=>{n.current=!0},[]),i=b.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function Mm(){const[e,t]=b.useState(!1);return Pn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function vL(){const[e]=b.useState({}),t=b.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=b.useMemo(()=>({onPointerDown:i=>t(US,i),onPointerMove:i=>t(HS,i),onPointerUp:i=>t(WS,i),onPointerLeave:i=>t(GS,i),onPointerCancel:i=>t(YS,i),onKeyDown:i=>t(bm,i),onKeyUp:i=>t(zD,i),onWheel:i=>t(wm,i)}),[t]),r=b.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function Pv(e,t){const n=b.useRef(0),r=Qs(),i=pe((...o)=>{n.current=Date.now(),e(o)});return b.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const Td=Sm("slide"),Pd=Sm("slide_image");function Yl({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:u}){var d,c,y,f,h,v,w,p;const[m,x]=b.useState(Cd),{publish:S}=cc(),{setTimeout:C}=dc(),T=b.useRef(null);b.useEffect(()=>{t===0&&S(RD(m))},[t,m,S]);const _=pe(z=>{("decode"in z?z.decode():Promise.resolve()).catch(()=>{}).then(()=>{z.parentNode&&(x(kd),C(()=>{l==null||l(z)},0))})}),E=b.useCallback(z=>{T.current=z,z!=null&&z.complete&&_(z)},[_]),j=b.useCallback(z=>{_(z.currentTarget)},[_]),I=pe(()=>{x(Ed),s==null||s()}),D=km(e,i),O=(z,U)=>Number.isFinite(z)?z:U,M=O(Math.max(...((c=(d=e.srcSet)===null||d===void 0?void 0:d.map(z=>z.width))!==null&&c!==void 0?c:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((y=T.current)===null||y===void 0?void 0:y.naturalWidth)||0),L=O(Math.max(...((h=(f=e.srcSet)===null||f===void 0?void 0:f.map(z=>z.height))!==null&&h!==void 0?h:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((v=T.current)===null||v===void 0?void 0:v.naturalHeight)||0),A=M&&L?{maxWidth:`min(${M}px, 100%)`,maxHeight:`min(${L}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},R=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((z,U)=>z.width-U.width).map(z=>`${z.src} ${z.width}w`).join(", "),F=()=>r&&!D&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,P=R&&r&&Cm()?`${Math.round(Math.min(F(),r.width))}px`:void 0,{style:$,className:N,...B}=(typeof o=="function"?o(e):o)||{};return b.createElement(b.Fragment,null,b.createElement("img",{ref:E,onLoad:j,onError:I,onClick:a,draggable:!1,className:Tn(ae(Pd()),D&&ae(Pd("cover")),m!==kd&&ae(Pd("loading")),N),style:{...A,...u,...$},...B,alt:(p=e.alt)!==null&&p!==void 0?p:"",sizes:P,srcSet:R,src:e.src}),m!==kd&&b.createElement("div",{className:ae(Td(LD))},m===Cd&&(n!=null&&n.iconLoading?n.iconLoading():b.createElement(pL,{className:Tn(ae(wp),ae(Td(Cd)))})),m===Ed&&(n!=null&&n.iconError?n.iconError():b.createElement(hL,{className:Tn(ae(wp),ae(Td(Ed)))}))))}const yL=b.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=b.useRef(null),{trackFocusWithin:s}=t2();return b.createElement(nL,{nodeRef:l},b.createElement("div",{ref:Cp(a,l),className:Tn(ae("root"),t),...s(r,i),...o},n))});var rt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(rt||(rt={}));function u2(e,t,n,r,i){b.useEffect(()=>i?()=>{}:_m(e(US,t),e(HS,n),e(WS,r),e(GS,r),e(YS,r)),[e,t,n,r,i])}var Jt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(Jt||(Jt={}));const Od=30;function xL({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,u,d,c,y,f,h,v,w){const p=b.useRef(0),m=b.useRef([]),x=b.useRef(void 0),S=b.useRef(0),C=b.useRef(Jt.NONE),T=b.useCallback(M=>{x.current===M.pointerId&&(x.current=void 0,C.current=Jt.NONE);const L=m.current;L.splice(0,L.length,...L.filter(A=>A.pointerId!==M.pointerId))},[]),_=b.useCallback(M=>{T(M),M.persist(),m.current.push(M)},[T]),E=b.useCallback(M=>m.current.find(({pointerId:L})=>M.pointerId===L),[]),j=pe(M=>{_(M)}),I=(M,L)=>c&&M>L||d&&M<-L,D=pe(M=>{const L=E(M);if(L)if(x.current===M.pointerId){const A=Date.now()-S.current,R=p.current;C.current===Jt.SWIPE?Math.abs(R)>.3*i||Math.abs(R)>5&&A<o?s(R,A):u(R):C.current===Jt.PULL&&(I(R,2*Od)?h(R,A):v(R)),p.current=0,C.current=Jt.NONE}else{const{target:A}=M;t&&A instanceof HTMLElement&&A===L.target&&(A.classList.contains(ae(xm))||A.classList.contains(ae(VS)))&&w()}T(M)}),O=pe(M=>{const L=E(M);if(L){const A=x.current===M.pointerId;if(M.buttons===0){A&&p.current!==0?D(M):T(L);return}const R=M.clientX-L.clientX,F=M.clientY-L.clientY;if(x.current===void 0){const P=$=>{_(M),x.current=M.pointerId,S.current=Date.now(),C.current=$};Math.abs(R)>Math.abs(F)&&Math.abs(R)>Od&&r(R)?e||(P(Jt.SWIPE),a()):Math.abs(F)>Math.abs(R)&&I(F,Od)&&(P(Jt.PULL),y())}else A&&(C.current===Jt.SWIPE?(p.current=R,l(R)):C.current===Jt.PULL&&(p.current=F,f(F)))}});u2(n,j,O,D)}function bL({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=b.useRef(null),r=pe(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return b.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function wL(e,t,n,r,i,o,a,l,s){const u=b.useRef(0),d=b.useRef(0),c=b.useRef(void 0),y=b.useRef(void 0),f=b.useRef(0),h=b.useRef(void 0),v=b.useRef(0),{setTimeout:w,clearTimeout:p}=dc(),m=b.useCallback(()=>{c.current&&(p(c.current),c.current=void 0)},[p]),x=b.useCallback(()=>{y.current&&(p(y.current),y.current=void 0)},[p]),S=pe(()=>{e!==rt.SWIPE&&(u.current=0,v.current=0,m(),x())});b.useEffect(S,[e,S]);const C=pe(_=>{y.current=void 0,u.current===_&&s(u.current)}),T=pe(_=>{if(_.ctrlKey||Math.abs(_.deltaY)>Math.abs(_.deltaX))return;const E=j=>{f.current=j,p(h.current),h.current=j>0?w(()=>{f.current=0,h.current=void 0},300):void 0};if(e===rt.NONE){if(Math.abs(_.deltaX)<=1.2*Math.abs(f.current)){E(_.deltaX);return}if(!n(-_.deltaX))return;if(d.current+=_.deltaX,m(),Math.abs(d.current)>30)d.current=0,E(0),v.current=Date.now(),o();else{const j=d.current;c.current=w(()=>{c.current=void 0,j===d.current&&(d.current=0)},i)}}else if(e===rt.SWIPE){let j=u.current-_.deltaX;if(j=Math.min(Math.abs(j),r)*Math.sign(j),u.current=j,a(j),x(),Math.abs(j)>.2*r){E(_.deltaX),l(j,Date.now()-v.current);return}y.current=w(()=>C(j),2*i)}else E(_.deltaX)});b.useEffect(()=>t(wm,T),[t,T])}const Ov=Sm("container"),c2=b.createContext(null),Jn=Zn("useController","ControllerContext",c2);function SL({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:u,closeOnPullDown:d,preventDefaultWheelX:c,preventDefaultWheelY:y}=o,[f,h]=b.useState(),v=Mr(),w=oL(),[p,m]=b.useState(rt.NONE),x=b.useRef(0),S=b.useRef(0),C=b.useRef(1),{registerSensors:T,subscribeSensors:_}=vL(),{subscribe:E,publish:j}=cc(),I=Qs(),D=Qs(),O=Qs(),{containerRef:M,setContainerRef:L,containerRect:A}=l2(),R=Cp(bL({preventDefaultWheelX:c,preventDefaultWheelY:y}),L),F=b.useRef(null),P=Cp(F,void 0),{getOwnerDocument:$}=uc(),N=Mm(),B=W=>(N?-1:1)*(typeof W=="number"?W:1),z=pe(()=>{var W;return(W=M.current)===null||W===void 0?void 0:W.focus()}),U=pe(()=>t),G=pe(()=>v),Y=b.useCallback(W=>j(Ar,W),[j]),X=b.useCallback(W=>j(Fr,W),[j]),ee=b.useCallback(()=>j(Qi),[j]),fe=W=>!(r.finite&&(B(W)>0&&v.currentIndex===0||B(W)<0&&v.currentIndex===v.slides.length-1)),be=W=>{var we;x.current=W,(we=M.current)===null||we===void 0||we.style.setProperty(xt("swipe_offset"),`${Math.round(W)}px`)},ie=W=>{var we,st;S.current=W,C.current=(()=>{const ho=(()=>d&&W>0?W:u&&W<0?-W:0)();return Math.min(Math.max(Em(1-ho/60*(1-.5),2),.5),1)})(),(we=M.current)===null||we===void 0||we.style.setProperty(xt("pull_offset"),`${Math.round(W)}px`),(st=M.current)===null||st===void 0||st.style.setProperty(xt("pull_opacity"),`${C.current}`)},{prepareAnimation:je}=kv(F,(W,we,st)=>{if(F.current&&A)return{keyframes:[{transform:`translate(0, ${W.rect.y-we.y+st.y}px)`,opacity:W.opacity},{transform:"translate(0, 0)",opacity:1}],duration:W.duration,easing:i.easing.fade}}),Be=(W,we)=>{if(u||d){ie(W);let st=0;F.current&&(st=i.fade*(we?2:1),je({rect:F.current.getBoundingClientRect(),opacity:C.current,duration:st})),O(()=>{ie(0),m(rt.NONE)},st),m(rt.ANIMATION),we||ee()}},{prepareAnimation:Ve,isAnimationPlaying:ai}=kv(F,(W,we,st)=>{var hn;if(F.current&&A&&(!((hn=v.animation)===null||hn===void 0)&&hn.duration)){const Bt=Gl(r.spacing),ho=(Bt.percent?Bt.percent*A.width/100:Bt.pixel)||0;return{keyframes:[{transform:`translate(${B(v.globalIndex-W.index)*(A.width+ho)+W.rect.x-we.x+st.x}px, 0)`},{transform:"translate(0, 0)"}],duration:v.animation.duration,easing:v.animation.easing}}}),vt=pe(W=>{var we,st;const hn=W.offset||0,Bt=hn?i.swipe:(we=i.navigation)!==null&&we!==void 0?we:i.swipe,ho=!hn&&!ai()?i.easing.navigation:i.easing.swipe;let{direction:Ga}=W;const Ya=(st=W.count)!==null&&st!==void 0?st:1;let vc=rt.ANIMATION,mn=Bt*Ya;if(!Ga){const mo=A==null?void 0:A.width,Hm=W.duration||0,xc=mo?Bt/mo*Math.abs(hn):Bt;Ya!==0?(Hm<xc?mn=mn/xc*Math.max(Hm,xc/5):mo&&(mn=Bt/mo*(mo-Math.abs(hn))),Ga=B(hn)>0?Ar:Fr):mn=Bt/2}let yc=0;Ga===Ar?fe(B(1))?yc=-Ya:(vc=rt.NONE,mn=Bt):Ga===Fr&&(fe(B(-1))?yc=Ya:(vc=rt.NONE,mn=Bt)),mn=Math.round(mn),D(()=>{be(0),m(rt.NONE)},mn),F.current&&Ve({rect:F.current.getBoundingClientRect(),index:v.globalIndex}),m(vc),j(Cv,{type:"swipe",increment:yc,duration:mn,easing:ho})});b.useEffect(()=>{var W,we;!((W=v.animation)===null||W===void 0)&&W.increment&&(!((we=v.animation)===null||we===void 0)&&we.duration)&&I(()=>w({type:"swipe",increment:0}),v.animation.duration)},[v.animation,w,I]);const fo=[_,fe,(A==null?void 0:A.width)||0,i.swipe,()=>m(rt.SWIPE),W=>be(W),(W,we)=>vt({offset:W,duration:we,count:1}),W=>vt({offset:W,count:0})],Wa=[()=>{d&&m(rt.PULL)},W=>ie(W),W=>Be(W),W=>Be(W,!0)];xL(o,...fo,u,d,...Wa,ee),wL(p,...fo);const po=pe(()=>{o.focus&&$().querySelector(`.${ae(vm)} .${ae(Ov())}`)&&z()});b.useEffect(po,[po]);const Um=pe(()=>{var W;(W=a.view)===null||W===void 0||W.call(a,{index:v.currentIndex})});b.useEffect(Um,[v.globalIndex,Um]),b.useEffect(()=>_m(E(Ar,W=>vt({direction:Ar,...W})),E(Fr,W=>vt({direction:Fr,...W})),E(Cv,W=>w(W))),[E,vt,w]);const r_=b.useMemo(()=>({prev:Y,next:X,close:ee,focus:z,slideRect:A?GD(A,r.padding):{width:0,height:0},containerRect:A||{width:0,height:0},subscribeSensors:_,containerRef:M,setCarouselRef:P,toolbarWidth:f,setToolbarWidth:h}),[Y,X,ee,z,_,A,M,P,f,h,r.padding]);return b.useImperativeHandle(o.ref,()=>({prev:Y,next:X,close:ee,focus:z,getLightboxProps:U,getLightboxState:G}),[Y,X,ee,z,U,G]),b.createElement("div",{ref:R,className:Tn(ae(Ov()),ae(ym)),style:{...p===rt.SWIPE?{[xt("swipe_offset")]:`${Math.round(x.current)}px`}:null,...p===rt.PULL?{[xt("pull_offset")]:`${Math.round(S.current)}px`,[xt("pull_opacity")]:`${C.current}`}:null,...o.touchAction!=="none"?{[xt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...T},A&&b.createElement(c2.Provider,{value:r_},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const _L=Or(NS,SL);function jr(e){return Ha(FS,e)}function Mv(e){return Ha(xm,e)}function CL({slide:e,offset:t}){const n=b.useRef(null),{currentIndex:r,slides:i}=Mr(),{slideRect:o,focus:a}=Jn(),{render:l,carousel:{imageFit:s,imageProps:u},on:{click:d},styles:{slide:c},labels:y}=Xt(),{getOwnerDocument:f}=uc(),h=t!==0;b.useEffect(()=>{var w;h&&(!((w=n.current)===null||w===void 0)&&w.contains(f().activeElement))&&a()},[h,a,f]);const v=()=>{var w,p,m,x;let S=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!S&&co(e)&&(S=b.createElement(Yl,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:u,onClick:h?void 0:()=>d==null?void 0:d({index:r})})),S?b.createElement(b.Fragment,null,(p=l.slideHeader)===null||p===void 0?void 0:p.call(l,{slide:e}),((m=l.slideContainer)!==null&&m!==void 0?m:({children:C})=>C)({slide:e,children:S}),(x=l.slideFooter)===null||x===void 0?void 0:x.call(l,{slide:e})):null};return b.createElement("div",{ref:n,className:Tn(ae(Mv()),!h&&ae(Mv("current")),ae(ym)),...ZD(h),style:c,role:"group","aria-roledescription":Zi(y,"Slide"),"aria-label":WD(y,i,r+t)},v())}function EL(){const e=Xt().styles.slide;return b.createElement("div",{className:ae(xm),style:e})}function kL({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Mr(),{setCarouselRef:o}=Jn(),{autoPlaying:a,focusWithin:l}=t2(),s=Gl(e.spacing),u=Gl(e.padding),d=KD(e,n,1),c=[];if(QS(n))for(let y=r-d;y<=r+d;y+=1){const f=ZS(n,y),h=i-r+y,v=e.finite&&(y<0||y>n.length-1);c.push(v?{key:h}:{key:[`${h}`,qD(f)].filter(Boolean).join("|"),offset:y-r,slide:f})}return b.createElement("div",{ref:o,className:Tn(ae(jr()),c.length>0&&ae(jr("with_slides"))),style:{[`${xt(jr("slides_count"))}`]:c.length,[`${xt(jr("spacing_px"))}`]:s.pixel||0,[`${xt(jr("spacing_percent"))}`]:s.percent||0,[`${xt(jr("padding_px"))}`]:u.pixel||0,[`${xt(jr("padding_percent"))}`]:u.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":Zi(t,"Carousel"),"aria-label":Zi(t,"Photo gallery")},c.map(({key:y,slide:f,offset:h})=>f?b.createElement(CL,{key:y,slide:f,offset:h}):b.createElement(EL,{key:y})))}const TL=Or(FS,kL);function d2(){const{carousel:e}=Xt(),{slides:t,currentIndex:n}=Mr(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function PL(e){var t;const n=Mm(),{publish:r}=cc(),{animation:i}=Xt(),{prevDisabled:o,nextDisabled:a}=d2(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=Pv(()=>r(Ar),l),u=Pv(()=>r(Fr),l),d=pe(c=>{switch(c.key){case BD:r(Qi);break;case VD:(n?a:o)||(n?u:s)();break;case UD:(n?o:a)||(n?s:u)();break}});b.useEffect(()=>e(bm,d),[e,d])}function jv({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return b.createElement(Pm,{label:e,icon:t,renderIcon:n,className:ae(`navigation_${r}`),disabled:o,onClick:i,style:a,...gL(Jn().focus,o)})}function OL({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=Jn(),{prevDisabled:s,nextDisabled:u}=d2();return PL(l),b.createElement(b.Fragment,null,e?e():b.createElement(jv,{label:"Previous",action:Ar,icon:dL,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():b.createElement(jv,{label:"Next",action:Fr,icon:fL,renderIcon:r,style:i.navigationNext,disabled:u,onClick:a}))}const ML=Or($D,OL),$v=ae(FD),jL=ae(BS);function $L(e){return"style"in e}function Iv(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(lc(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function IL({noScroll:{disabled:e},children:t}){const n=Mm(),{getOwnerDocument:r,getOwnerWindow:i}=uc();return b.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),u=Math.round(a.innerWidth-s.clientWidth);if(u>0){o.push(Iv(l,u,n));const d=l.getElementsByTagName("*");for(let c=0;c<d.length;c+=1){const y=d[c];$L(y)&&a.getComputedStyle(y).getPropertyValue("position")==="fixed"&&!y.classList.contains(jL)&&o.push(Iv(y,u,n))}}return l.classList.add($v),()=>{l.classList.remove($v),o.forEach(d=>d())}},[n,e,r,i]),b.createElement(b.Fragment,null,t)}const DL=Or(ID,IL);function Dv(e){return Ha(vm,e)}function Lv(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function LL({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,u]=b.useState(!1),[d,c]=b.useState(!1),y=b.useRef([]),f=b.useRef(null),{setTimeout:h}=dc(),{subscribe:v}=cc(),p=Om()?0:t.fade;b.useEffect(()=>(u(!0),()=>{u(!1),c(!1)}),[]);const m=pe(()=>{y.current.forEach(T=>T()),y.current=[]}),x=pe(()=>{var T;c(!1),m(),(T=i.exiting)===null||T===void 0||T.call(i),h(()=>{var _;(_=i.exited)===null||_===void 0||_.call(i),a()},p)});b.useEffect(()=>v(Qi,x),[v,x]);const S=pe(T=>{var _,E,j;JD(T),c(!0),(_=i.entering)===null||_===void 0||_.call(i);const I=(j=(E=T.parentNode)===null||E===void 0?void 0:E.children)!==null&&j!==void 0?j:[];for(let D=0;D<I.length;D+=1){const O=I[D];["TEMPLATE","SCRIPT","STYLE"].indexOf(O.tagName)===-1&&O!==T&&(y.current.push(Lv(O,"inert","")),y.current.push(Lv(O,"aria-hidden","true")))}y.current.push(()=>{var D,O;(O=(D=f.current)===null||D===void 0?void 0:D.focus)===null||O===void 0||O.call(D)}),h(()=>{var D;(D=i.entered)===null||D===void 0||D.call(i)},p)}),C=b.useCallback(T=>{T?S(T):m()},[S,m]);return s?yu.createPortal(b.createElement(yL,{ref:C,className:Tn(r,ae(Dv()),ae(BS),d&&ae(Dv("open"))),"aria-modal":!0,role:"dialog","aria-label":Zi(l,"Lightbox"),style:{...t.fade!==_p.animation.fade?{[xt("fade_animation_duration")]:`${p}ms`}:null,...t.easing.fade!==_p.animation.easing.fade?{[xt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:T=>{f.current||(f.current=T.relatedTarget)}},e),o.root||document.body):null}const RL=Or(vm,LL);function AL({children:e}){return b.createElement(b.Fragment,null,e)}const FL=Or(DD,AL);function NL(e){return Ha(zS,e)}function zL({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=Jn(),{setContainerRef:a,containerRect:l}=l2();Pn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():b.createElement(Pm,{key:Qi,label:"Close",icon:cL,renderIcon:n,onClick:i});return b.createElement("div",{ref:a,style:r.toolbar,className:ae(NL())},e==null?void 0:e.map(u=>u===Qi?s():u))}const BL=Or(zS,zL);function f2(e,t){var n;return b.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>f2(r,t)))}function VL(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function UL({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:u,...d}){const{animation:c,carousel:y,render:f,toolbar:h,controller:v,noScroll:w,on:p,slides:m,index:x,plugins:S,...C}=_p,{config:T,augmentation:_}=eL([Ue(RL,[Ue(DL,[Ue(_L,[Ue(TL),Ue(BL),Ue(ML)])])])],l||S),E=_({animation:VL(c,t),carousel:{...y,...e},render:{...f,...n},toolbar:{...h,...r},controller:{...v,...i},noScroll:{...w,...o},on:{...p,...a},...C,...d});return E.open?b.createElement(iL,{...E},b.createElement(sL,{slides:s||m,index:lc(u||x)},b.createElement(lL,null,b.createElement(rL,null,b.createElement(tL,null,f2(Ue(FL,T),E)))))):null}const HL={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function WL(e){return Math.min(Math.max(e,Number.EPSILON),1)}function p2(e){const{minZoom:t,...n}={...HL,...e};return{minZoom:WL(t),...n}}function GL(e,t,n,r){const i=b.useRef(void 0),o=b.useRef(void 0),{zoom:a}=Xt().animation,l=Om(),s=pe(()=>{var u,d,c;if((u=i.current)===null||u===void 0||u.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(c=(d=r.current).animate)===null||c===void 0?void 0:c.call(d,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(y){console.error(y)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Pn(s,[e,t,n,s]),b.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function YL(e,t){const{on:n}=Xt(),r=pe(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});b.useEffect(r,[e,r])}function fc(){const{zoom:e}=Xt();return p2(e)}function qL(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Mr(),{imageFit:l}=Xt().carousel,{maxZoomPixelRatio:s}=fc();if(e&&a){const d={...a,...t};if(co(d)){const c=km(d,l),y=Math.max(...(((n=d.srcSet)===null||n===void 0?void 0:n.map(h=>h.width))||[]).concat(d.width?[d.width]:[])),f=Math.max(...(((r=d.srcSet)===null||r===void 0?void 0:r.map(h=>h.height))||[]).concat(d.height?[d.height]:[]));y>0&&f>0&&e.width>0&&e.height>0&&(o=c?{width:Math.round(Math.min(y,e.width/e.height*f)),height:Math.round(Math.min(f,e.height/e.width*y))}:{width:y,height:f},o={width:o.width*s,height:o.height*s},i=c?{width:Math.min(e.width,o.width,y),height:Math.min(e.height,o.height,f)}:{width:Math.round(Math.min(e.width,e.height/f*y,y)),height:Math.round(Math.min(e.height,e.width/y*f,f))})}}const u=i.width?Math.max(Em(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:u}}function Rv(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Av(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function XL(e,t,n,r,i,o,a,l,s){const u=b.useRef([]),d=b.useRef(0),c=b.useRef(void 0),{globalIndex:y}=Mr(),{getOwnerWindow:f}=uc(),{containerRef:h,subscribeSensors:v}=Jn(),{keyboardMoveDistance:w,zoomInMultiplier:p,wheelZoomDistanceFactor:m,scrollToZoom:x,doubleTapDelay:S,doubleClickDelay:C,doubleClickMaxStops:T,pinchZoomDistanceFactor:_,pinchZoomV4:E}=fc(),j=b.useCallback(P=>{if(h.current){const{pageX:$,pageY:N}=P,{scrollX:B,scrollY:z}=f(),{left:U,top:G,width:Y,height:X}=h.current.getBoundingClientRect();return[$-U-B-Y/2,N-G-z-X/2]}return[]},[h,f]),I=pe(P=>{const{key:$,metaKey:N,ctrlKey:B}=P,z=N||B,U=()=>{P.preventDefault(),P.stopPropagation()};if(e>1){const G=(Y,X)=>{U(),l(Y,X)};$==="ArrowDown"?G(0,w):$==="ArrowUp"?G(0,-w):$==="ArrowLeft"?G(-w,0):$==="ArrowRight"&&G(w,0)}$==="+"||z&&$==="="?(U(),i()):$==="-"||z&&$==="_"?(U(),o()):z&&$==="0"&&(U(),a(1))}),D=pe(P=>{if((P.ctrlKey||x)&&Math.abs(P.deltaY)>Math.abs(P.deltaX)){P.stopPropagation(),a(Av(e,-P.deltaY,m),!0,...j(P));return}e>1&&(P.stopPropagation(),x||l(P.deltaX,P.deltaY))}),O=b.useCallback(P=>{const $=u.current;$.splice(0,$.length,...$.filter(N=>N.pointerId!==P.pointerId))},[]),M=b.useCallback(P=>{O(P),P.persist(),u.current.push(P)},[O]),L=pe(P=>{var $;const N=u.current;if(P.pointerType==="mouse"&&P.buttons>1||!(!(($=s==null?void 0:s.current)===null||$===void 0)&&$.contains(P.target)))return;e>1&&P.stopPropagation();const{timeStamp:B}=P;if(N.length===0&&B-d.current<(P.pointerType==="touch"?S:C)){d.current=0;const z=e>=1?e!==n?e*Math.max(n**(1/T),p):1:e!==t?e/Math.max(t**(-1/T),p):1;a(z,!1,...j(P))}else d.current=B;if(M(P),N.length===2){const z=Rv(N[0],N[1]);c.current={previousDistance:z,initialDistance:Math.max(z,1),initialZoom:e}}}),A=pe(P=>{const $=u.current,N=$.find(B=>B.pointerId===P.pointerId);if($.length===2&&c.current){P.stopPropagation(),M(P);const B=Rv($[0],$[1]),z=E?c.current.initialZoom/c.current.initialDistance*B:Av(e,B-c.current.previousDistance,_);a(z,!0,...$.map(U=>j(U)).reduce((U,G)=>G.map((Y,X)=>U[X]+Y/2))),c.current.previousDistance=B;return}e>1&&(P.stopPropagation(),N&&($.length===1&&l((N.clientX-P.clientX)/e,(N.clientY-P.clientY)/e),M(P)))}),R=b.useCallback(P=>{const $=u.current;$.length===2&&$.find(N=>N.pointerId===P.pointerId)&&(c.current=void 0),O(P)},[O]),F=b.useCallback(()=>{const P=u.current;P.splice(0,P.length),d.current=0,c.current=void 0},[]);u2(v,L,A,R,r),b.useEffect(F,[y,F]),b.useEffect(()=>r?()=>{}:_m(F,v(bm,I),v(wm,D)),[r,v,F,I,D])}function KL(e,t,n){const[r,i]=b.useState(1),[o,a]=b.useState(0),[l,s]=b.useState(0),u=GL(r,o,l,n),{currentSlide:d,globalIndex:c}=Mr(),{containerRect:y,slideRect:f}=Jn(),{minZoom:h,zoomInMultiplier:v}=fc(),w=d&&co(d)?d.src:void 0,p=!w||!(n!=null&&n.current);Pn(()=>{i(1),a(0),s(0)},[c,w]);const m=b.useCallback((_,E,j)=>{const I=j||r,D=o-(_||0),O=l-(E||0),M=(e.width*I-f.width)/2/I,L=(e.height*I-f.height)/2/I;a(Math.min(Math.abs(D),Math.max(M,0))*Math.sign(D)),s(Math.min(Math.abs(O),Math.max(L,0))*Math.sign(O))},[r,o,l,f,e.width,e.height]),x=b.useCallback((_,E,j,I)=>{const D=Em(_+.01<t?_-.01>h?_:h:t,5);E||u(),m(j?j*(1/r-1/D):0,I?I*(1/r-1/D):0,D),i(D)},[r,h,t,m,u]),S=pe(()=>{r>1&&(r>t&&x(t,!0),m())});Pn(S,[y.width,y.height,S]);const C=b.useCallback(()=>{const _=r*v;x(r<1&&_>1?1:_)},[r,v,x]),T=b.useCallback(()=>{const _=r/v;x(r>1&&_<1?1:_)},[r,v,x]);return{zoom:r,offsetX:o,offsetY:l,disabled:p,changeOffsets:m,changeZoom:x,zoomIn:C,zoomOut:T}}const h2=b.createContext(null),jm=Zn("useZoom","ZoomControllerContext",h2);function QL({children:e}){const[t,n]=b.useState(),{slideRect:r}=Jn(),{ref:i,minZoom:o}=fc(),{imageRect:a,maxZoom:l}=qL(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:u,offsetY:d,disabled:c,changeZoom:y,changeOffsets:f,zoomIn:h,zoomOut:v}=KL(a,l,t==null?void 0:t.zoomWrapperRef);YL(s,c),XL(s,o,l,c,h,v,y,f,t==null?void 0:t.zoomWrapperRef);const w=b.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:u,offsetY:d,disabled:c,zoomIn:h,zoomOut:v,changeZoom:y}),[s,o,l,u,d,c,h,v,y]);b.useImperativeHandle(i,()=>w,[w]);const p=b.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return b.createElement(h2.Provider,{value:p},e)}const ZL=oi("ZoomIn",b.createElement(b.Fragment,null,b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),JL=oi("ZoomOut",b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),Fv=b.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=b.useRef(!1),o=b.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:u,zoomOut:d,disabled:c}=jm(),{render:y}=Xt(),f=c||(t?a>=s:a<=l);return b.useEffect(()=>{f&&i.current&&o.current&&n(),f||(i.current=!0)},[f,n]),b.createElement(Pm,{ref:r,disabled:f,label:t?"Zoom in":"Zoom out",icon:t?ZL:JL,renderIcon:t?y.iconZoomIn:y.iconZoomOut,onClick:t?u:d,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function eR(){const e=b.useRef(null),t=b.useRef(null),{focus:n}=Jn(),r=b.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=b.useCallback(()=>r(e),[r]),o=b.useCallback(()=>r(t),[r]);return b.createElement(b.Fragment,null,b.createElement(Fv,{zoomIn:!0,ref:e,onLoseFocus:o}),b.createElement(Fv,{ref:t,onLoseFocus:i}))}function tR(){const{render:e}=Xt(),t=jm();return e.buttonZoom?b.createElement(b.Fragment,null,e.buttonZoom(t)):b.createElement(eR,null)}function nR(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function rR({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(XS)}}function iR(e){var t,n;const[{current:r,preload:i},o]=b.useReducer(rR,{}),{slide:a,rect:l,imageFit:s,render:u,interactive:d}=e,c=a.srcSet.sort((C,T)=>C.width-T.width),y=(t=a.width)!==null&&t!==void 0?t:c[c.length-1].width,f=(n=a.height)!==null&&n!==void 0?n:c[c.length-1].height,h=km(a,s),v=Math.max(...c.map(C=>C.width)),w=Math.min((h?Math.max:Math.min)(l.width,y*(l.height/f)),v),p=YD(),m=pe(()=>{var C;const T=(C=c.find(_=>_.width>=w*p))!==null&&C!==void 0?C:c[c.length-1];(!r||c.findIndex(_=>_.src===r)<c.findIndex(_=>_===T))&&o({type:"fetch",source:T.src})});Pn(m,[l.width,l.height,p,m]);const x=pe(C=>o({type:"done",source:C})),S={WebkitTransform:d?"initial":"translateZ(0)"};return h||Object.assign(S,l.width/l.height<y/f?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),b.createElement(b.Fragment,null,i&&i!==r&&b.createElement(Yl,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...S},onLoad:()=>x(i),render:{...u,iconLoading:()=>null,iconError:()=>null}}),r&&b.createElement(Yl,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:S}))}function oR({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=b.useState(),l=b.useRef(null),{zoom:s,maxZoom:u,offsetX:d,offsetY:c,setZoomWrapper:y}=jm(),f=s>1,{carousel:h,on:v}=Xt(),{currentIndex:w}=Mr();Pn(()=>n===0?(y({zoomWrapperRef:l,imageDimensions:o}),()=>y(void 0)):()=>{},[n,o,y]);let p=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:u});if(!p&&co(t)){const m={slide:t,offset:n,rect:r,render:e,imageFit:h.imageFit,imageProps:h.imageProps,onClick:n===0?()=>{var x;return(x=v.click)===null||x===void 0?void 0:x.call(v,{index:w})}:void 0};p=nR(t)?b.createElement(iR,{...m,slide:t,interactive:f,rect:n===0?{width:r.width*s,height:r.height*s}:r}):b.createElement(Yl,{onLoad:x=>a({width:x.naturalWidth,height:x.naturalHeight}),...m})}return p?b.createElement("div",{ref:l,className:Tn(ae(AD),ae(ym),ae(VS),f&&ae(ND)),style:n===0?{transform:`scale(${s}) translateX(${d}px) translateY(${c}px)`}:void 0},p):null}const aR=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=p2(n);return{zoom:l,toolbar:XD(r,_v,b.createElement(tR,null)),render:{...i,slide:s=>{var u;return co(s.slide)?b.createElement(oR,{render:i,...s}):(u=i.slide)===null||u===void 0?void 0:u.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Or(_v,QL))};var m2={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",u="day",d="week",c="month",y="quarter",f="year",h="date",v="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(L){var A=["th","st","nd","rd"],R=L%100;return"["+L+(A[(R-20)%10]||A[R]||A[0])+"]"}},x=function(L,A,R){var F=String(L);return!F||F.length>=A?L:""+Array(A+1-F.length).join(R)+L},S={s:x,z:function(L){var A=-L.utcOffset(),R=Math.abs(A),F=Math.floor(R/60),P=R%60;return(A<=0?"+":"-")+x(F,2,"0")+":"+x(P,2,"0")},m:function L(A,R){if(A.date()<R.date())return-L(R,A);var F=12*(R.year()-A.year())+(R.month()-A.month()),P=A.clone().add(F,c),$=R-P<0,N=A.clone().add(F+($?-1:1),c);return+(-(F+(R-P)/($?P-N:N-P))||0)},a:function(L){return L<0?Math.ceil(L)||0:Math.floor(L)},p:function(L){return{M:c,y:f,w:d,d:u,D:h,h:s,m:l,s:a,ms:o,Q:y}[L]||String(L||"").toLowerCase().replace(/s$/,"")},u:function(L){return L===void 0}},C="en",T={};T[C]=m;var _="$isDayjsObject",E=function(L){return L instanceof O||!(!L||!L[_])},j=function L(A,R,F){var P;if(!A)return C;if(typeof A=="string"){var $=A.toLowerCase();T[$]&&(P=$),R&&(T[$]=R,P=$);var N=A.split("-");if(!P&&N.length>1)return L(N[0])}else{var B=A.name;T[B]=A,P=B}return!F&&P&&(C=P),P||!F&&C},I=function(L,A){if(E(L))return L.clone();var R=typeof A=="object"?A:{};return R.date=L,R.args=arguments,new O(R)},D=S;D.l=j,D.i=E,D.w=function(L,A){return I(L,{locale:A.$L,utc:A.$u,x:A.$x,$offset:A.$offset})};var O=function(){function L(R){this.$L=j(R.locale,null,!0),this.parse(R),this.$x=this.$x||R.x||{},this[_]=!0}var A=L.prototype;return A.parse=function(R){this.$d=function(F){var P=F.date,$=F.utc;if(P===null)return new Date(NaN);if(D.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var N=P.match(w);if(N){var B=N[2]-1||0,z=(N[7]||"0").substring(0,3);return $?new Date(Date.UTC(N[1],B,N[3]||1,N[4]||0,N[5]||0,N[6]||0,z)):new Date(N[1],B,N[3]||1,N[4]||0,N[5]||0,N[6]||0,z)}}return new Date(P)}(R),this.init()},A.init=function(){var R=this.$d;this.$y=R.getFullYear(),this.$M=R.getMonth(),this.$D=R.getDate(),this.$W=R.getDay(),this.$H=R.getHours(),this.$m=R.getMinutes(),this.$s=R.getSeconds(),this.$ms=R.getMilliseconds()},A.$utils=function(){return D},A.isValid=function(){return this.$d.toString()!==v},A.isSame=function(R,F){var P=I(R);return this.startOf(F)<=P&&P<=this.endOf(F)},A.isAfter=function(R,F){return I(R)<this.startOf(F)},A.isBefore=function(R,F){return this.endOf(F)<I(R)},A.$g=function(R,F,P){return D.u(R)?this[F]:this.set(P,R)},A.unix=function(){return Math.floor(this.valueOf()/1e3)},A.valueOf=function(){return this.$d.getTime()},A.startOf=function(R,F){var P=this,$=!!D.u(F)||F,N=D.p(R),B=function(be,ie){var je=D.w(P.$u?Date.UTC(P.$y,ie,be):new Date(P.$y,ie,be),P);return $?je:je.endOf(u)},z=function(be,ie){return D.w(P.toDate()[be].apply(P.toDate("s"),($?[0,0,0,0]:[23,59,59,999]).slice(ie)),P)},U=this.$W,G=this.$M,Y=this.$D,X="set"+(this.$u?"UTC":"");switch(N){case f:return $?B(1,0):B(31,11);case c:return $?B(1,G):B(0,G+1);case d:var ee=this.$locale().weekStart||0,fe=(U<ee?U+7:U)-ee;return B($?Y-fe:Y+(6-fe),G);case u:case h:return z(X+"Hours",0);case s:return z(X+"Minutes",1);case l:return z(X+"Seconds",2);case a:return z(X+"Milliseconds",3);default:return this.clone()}},A.endOf=function(R){return this.startOf(R,!1)},A.$set=function(R,F){var P,$=D.p(R),N="set"+(this.$u?"UTC":""),B=(P={},P[u]=N+"Date",P[h]=N+"Date",P[c]=N+"Month",P[f]=N+"FullYear",P[s]=N+"Hours",P[l]=N+"Minutes",P[a]=N+"Seconds",P[o]=N+"Milliseconds",P)[$],z=$===u?this.$D+(F-this.$W):F;if($===c||$===f){var U=this.clone().set(h,1);U.$d[B](z),U.init(),this.$d=U.set(h,Math.min(this.$D,U.daysInMonth())).$d}else B&&this.$d[B](z);return this.init(),this},A.set=function(R,F){return this.clone().$set(R,F)},A.get=function(R){return this[D.p(R)]()},A.add=function(R,F){var P,$=this;R=Number(R);var N=D.p(F),B=function(G){var Y=I($);return D.w(Y.date(Y.date()+Math.round(G*R)),$)};if(N===c)return this.set(c,this.$M+R);if(N===f)return this.set(f,this.$y+R);if(N===u)return B(1);if(N===d)return B(7);var z=(P={},P[l]=r,P[s]=i,P[a]=n,P)[N]||1,U=this.$d.getTime()+R*z;return D.w(U,this)},A.subtract=function(R,F){return this.add(-1*R,F)},A.format=function(R){var F=this,P=this.$locale();if(!this.isValid())return P.invalidDate||v;var $=R||"YYYY-MM-DDTHH:mm:ssZ",N=D.z(this),B=this.$H,z=this.$m,U=this.$M,G=P.weekdays,Y=P.months,X=P.meridiem,ee=function(ie,je,Be,Ve){return ie&&(ie[je]||ie(F,$))||Be[je].slice(0,Ve)},fe=function(ie){return D.s(B%12||12,ie,"0")},be=X||function(ie,je,Be){var Ve=ie<12?"AM":"PM";return Be?Ve.toLowerCase():Ve};return $.replace(p,function(ie,je){return je||function(Be){switch(Be){case"YY":return String(F.$y).slice(-2);case"YYYY":return D.s(F.$y,4,"0");case"M":return U+1;case"MM":return D.s(U+1,2,"0");case"MMM":return ee(P.monthsShort,U,Y,3);case"MMMM":return ee(Y,U);case"D":return F.$D;case"DD":return D.s(F.$D,2,"0");case"d":return String(F.$W);case"dd":return ee(P.weekdaysMin,F.$W,G,2);case"ddd":return ee(P.weekdaysShort,F.$W,G,3);case"dddd":return G[F.$W];case"H":return String(B);case"HH":return D.s(B,2,"0");case"h":return fe(1);case"hh":return fe(2);case"a":return be(B,z,!0);case"A":return be(B,z,!1);case"m":return String(z);case"mm":return D.s(z,2,"0");case"s":return String(F.$s);case"ss":return D.s(F.$s,2,"0");case"SSS":return D.s(F.$ms,3,"0");case"Z":return N}return null}(ie)||N.replace(":","")})},A.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},A.diff=function(R,F,P){var $,N=this,B=D.p(F),z=I(R),U=(z.utcOffset()-this.utcOffset())*r,G=this-z,Y=function(){return D.m(N,z)};switch(B){case f:$=Y()/12;break;case c:$=Y();break;case y:$=Y()/3;break;case d:$=(G-U)/6048e5;break;case u:$=(G-U)/864e5;break;case s:$=G/i;break;case l:$=G/r;break;case a:$=G/n;break;default:$=G}return P?$:D.a($)},A.daysInMonth=function(){return this.endOf(c).$D},A.$locale=function(){return T[this.$L]},A.locale=function(R,F){if(!R)return this.$L;var P=this.clone(),$=j(R,F,!0);return $&&(P.$L=$),P},A.clone=function(){return D.w(this.$d,this)},A.toDate=function(){return new Date(this.valueOf())},A.toJSON=function(){return this.isValid()?this.toISOString():null},A.toISOString=function(){return this.$d.toISOString()},A.toString=function(){return this.$d.toUTCString()},L}(),M=O.prototype;return I.prototype=M,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",u],["$M",c],["$y",f],["$D",h]].forEach(function(L){M[L[1]]=function(A){return this.$g(A,L[0],L[1])}}),I.extend=function(L,A){return L.$i||(L(A,O,I),L.$i=!0),I},I.locale=j,I.isDayjs=E,I.unix=function(L){return I(1e3*L)},I.en=T[C],I.Ls=T,I.p={},I})})(m2);var sR=m2.exports;const Nv=Dp(sR),lR=k.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 0 15px;
  font-family: 'Inter', sans-serif; // або той, що у тебе основний
`;k.h3`
  font-size: 18px;
  color: #4a3632; // Темний колір з твого футера
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;const uR=k.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`,cR=k.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #4a3632;
  }
`,dR=k.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  min-height: 100px;
  resize: vertical;
  outline: none;

  &:focus {
    border-color: #4a3632;
  }
`,fR=k.button`
  background-color: #4a3632;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`,pR=k.div`
  margin-top: 30px;
`,hR=k.div`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
`,mR=k.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,gR=k.span`
  font-weight: bold;
  color: #333;
`,vR=k.span`
  font-size: 12px;
  color: #999;
`,yR=k.p`
  font-size: 15px;
  color: #555;
  margin: 5px 0;
`,xR=k.div`
  margin-top: 15px;
  padding: 15px;
  background: #f0f0f0;
  border-left: 3px solid #4a3632;
  font-size: 14px;
`,bR=k.div`
  font-weight: bold;
  color: #4a3632;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &::before {
    content: '●';
    font-size: 10px;
  }
`,wR=({productId:e,questions:t})=>{const[n,r]=b.useState(""),[i,o]=b.useState(""),a=async l=>{l.preventDefault();const u=await fetch("https://backenddidiv-production.up.railway.app/api/questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{question:n,userName:i,product:e}})});console.log(e),u.ok&&(alert("Запитання надіслано! Воно з’явиться після модерації."),r(""),o(""))};return g.jsxs(lR,{children:[g.jsxs(uR,{onSubmit:a,children:[g.jsx(cR,{placeholder:"Ваше ім'я",value:i,onChange:l=>o(l.target.value),required:!0}),g.jsx(dR,{placeholder:"Запитайте нас про цей товар...",value:n,onChange:l=>r(l.target.value),required:!0}),g.jsx(fR,{children:"Надіслати запитання"})]}),g.jsx(pR,{children:t&&t.length>0?t.map(l=>g.jsxs(hR,{children:[g.jsxs(mR,{children:[g.jsx(gR,{children:l.userName||"Гість"}),g.jsx(vR,{children:new Date(l.createdAt).toLocaleDateString()})]}),g.jsx(yR,{children:l.question}),l.answer&&g.jsxs(xR,{children:[g.jsx(bR,{children:"Адміністратор"}),g.jsx("p",{children:l.answer})]})]},l.id)):g.jsx("p",{style:{textAlign:"center",color:"#999"},children:"Запитань поки немає. Будьте першим!"})})]})},SR=()=>{var D;const{id:e}=H1(),[t,n]=b.useState([]),[r,i]=b.useState(1),[o,a]=b.useState("description"),[l,s]=b.useState(null),[u,d]=b.useState(!1),[c,y]=b.useState(0);console.log("products",t);const[f,h]=b.useState(!0),v=t.find(O=>O.id===Number(e)),w=v?Nv().diff(Nv(v.createdAt),"day")<7:!1,p=Et(O=>O.cart.items),m=v?p.find(O=>O.id===v.id):null,x=(m==null?void 0:m.quantity)||0;b.useEffect(()=>{(async()=>{try{h(!0);const L=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[id][$eq]=${e}&populate=*`)).json();n(L.data)}catch(M){console.error("Error fetching products:",M)}finally{h(!1)}})()},[e]),console.log(v),b.useEffect(()=>{var O,M;v&&v.images&&s((M=(O=v.images)==null?void 0:O[0])==null?void 0:M.url)},[v]);const S=((v==null?void 0:v.images)??[]).map(O=>({src:O.url})),C=()=>{const O=v.images.findIndex(M=>M.url===l);y(O>=0?O:0),d(!0)},T=Kn(),E=Et(O=>O.favorites.items).some(O=>O.id===(v==null?void 0:v.id)),j=()=>{if(x>=v.stock){J.warning("Товар вже в кошику (досягнуто максимум)");return}if(x+r>v.stock){J.warning(`Доступно лише ${v.stock} шт.`);return}T(Aa({...v,quantity:r})),J.success(`${v.name} додано в кошик!`)},I=(O,M)=>{M.stopPropagation(),T(Ua(O)),E?J.warning(`${O.name} видалено з обраного`):J.info(`${O.name} додано в обране`)};return f?g.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:g.jsx(Yu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):v?g.jsxs(Sv,{children:[" ",g.jsx(oo,{autoClose:1500}),g.jsxs(aD,{children:[g.jsx(Me,{to:"/",children:"Головна"})," / ",g.jsx(Me,{to:"/catalog",children:"Каталог"})," /"," ",v.name]}),g.jsxs(sD,{children:[g.jsxs(lD,{children:[g.jsx(uD,{src:l,alt:v.name,onClick:C}),g.jsx(cD,{children:(v.images??[]).map(O=>{const M=O.url;return g.jsx(dD,{src:M,onClick:()=>s(M),style:{cursor:"pointer",opacity:l===M?1:.4}},O.id)})})]}),g.jsx(UL,{open:u,close:()=>d(!1),index:c,slides:S,controller:{closeOnBackdropClick:!0},on:{view:({index:O})=>{var M,L;y(O),(L=(M=v==null?void 0:v.images)==null?void 0:M[O])!=null&&L.url&&s(v.images[O].url)}},plugins:[aR],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),g.jsxs(fD,{children:[g.jsx(pD,{children:v.name}),g.jsx(hD,{children:w&&g.jsx(mD,{children:"● Новий товар"})}),g.jsxs(gD,{children:[g.jsx(vD,{children:g.jsxs(yD,{children:[v.price.toLocaleString()," грн"]})}),g.jsxs(xD,{children:[g.jsxs(bD,{children:[g.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),g.jsx("span",{children:r}),g.jsxs(jD,{$active:r>=v.stock,children:[g.jsx("button",{onClick:()=>i(Math.min(v.stock,r+1)),disabled:r>=v.stock,children:"+"}),g.jsxs(AS,{children:["Максимум: ",v.stock]})]})]}),g.jsxs(wD,{onClick:j,children:[" ",g.jsx(La,{size:25}),g.jsx("span",{children:"В КОШИК"})]}),g.jsxs(OD,{$active:E,onClick:O=>I(v,O),children:[g.jsxs(MD,{$active:E,children:[" ",g.jsx("use",{href:`${un}#icon-heart`})]}),g.jsx("span",{children:"В ОБРАНЕ"})]})]})]}),g.jsxs(CD,{children:[g.jsxs("p",{children:[g.jsx("strong",{children:"Ваше місто:"})," Київ"]}),g.jsx("p",{children:"🚚 Доставка по Україні (Розрахувати вартість)"})]})]})]}),g.jsxs(ED,{children:[g.jsxs(kD,{children:[g.jsx(_d,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),g.jsx(_d,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"}),g.jsx(_d,{active:o==="FAQ",onClick:()=>a("FAQ"),children:"Питання та відповіді"})]}),g.jsxs(TD,{children:[o==="description"&&g.jsx(PD,{children:v.description}),o==="attributes"&&g.jsx(SD,{children:(D=v.attributes)!=null&&D.length?v.attributes.map(O=>g.jsxs(_D,{children:[g.jsx("span",{children:O.label}),g.jsx("b",{children:O.value})]},O.id)):g.jsx("p",{children:"Характеристики відсутні"})}),o==="FAQ"&&g.jsx(wR,{productId:v.documentId,questions:v.questions})]})]})]}):g.jsx(Sv,{children:"Товар не знайдено"})},_R=k.div`
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

  
`,CR=k.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,ER=k.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,kR=k.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,TR=k.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,PR=k.div`
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
`,OR=k.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,MR=k.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,jR=k.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,$R=k.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`;k.div`
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
`;const IR=k.div`
  text-align: center;
  width: 100px;
 
`,DR=k.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,LR=k.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,RR=k.div`

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
`,AR=k.div`
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
`,FR=k(Me)`
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
`,NR=k.button`
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
  
`;k.svg`
  width: 25px;
  height: 25px;
  fill: ${({$active:e})=>e?"var(--red-color)":"var(--black-color)"};
`;const zR=k.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,BR=k.div`
   
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: #fdfaf7;
  text-align: center;
  flex: 1;
`;k.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 600;
`;const VR=k.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,UR=k.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,HR=k.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,WR=k.button`
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
`,GR=()=>g.jsxs(g.Fragment,{children:[g.jsx(zR,{children:"Головна / Кошик"}),g.jsxs(BR,{children:[g.jsx(VR,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),g.jsx(UR,{children:"Ваш кошик порожній"}),g.jsx(HR,{children:"Ви ще не додали жодного товару в кошик"}),g.jsx(WR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]}),YR=k.div`
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
`,qR=({item:e})=>{const t=Kn();return g.jsxs(YR,{children:[g.jsx("button",{onClick:()=>t(f4(e.id)),children:"-"}),g.jsx("span",{children:e.quantity}),g.jsx("button",{onClick:()=>t(d4({id:e.id,stock:e.stock})),disabled:e.quantity>=e.stock,children:"+"})]})},XR=()=>{const e=Kn(),t=Er(),[n,r]=b.useState([]),i=Et(f=>f.cart.items),a=Et(f=>f.cart.items).reduce((f,h)=>f+h.quantity,0),l=i.reduce((f,h)=>f+h.price*(h.quantity||1),0),s=Et(f=>f.favorites.items),u=i.length===0,d=(f,h)=>{h.stopPropagation(),console.log(f);const v=s.some(w=>w.id===f.id);e(Ua(f)),v?J.warning(`${f.name} видалено з обраного`):J.info(`${f.name} додано в обране`)},c=f=>{r(h=>[...h,f.id]),setTimeout(()=>{e(u4(f)),r(h=>h.filter(v=>v!==f.id))},300)},y=()=>{e(Qh())};return g.jsx(g.Fragment,{children:u?g.jsx(GR,{}):g.jsxs(_R,{children:[g.jsx(oo,{autoClose:1500}),g.jsxs(CR,{children:[" ",g.jsx(Me,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",g.jsx(Me,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),g.jsx(ER,{children:"Кошик"}),g.jsxs(kR,{children:[g.jsx(TR,{children:i.map((f,h)=>{var w,p;console.log(f);const v=s.some(m=>m.id===f.id);return g.jsxs(PR,{className:n.includes(f.id)?"removing":"",children:[g.jsx(OR,{src:((p=(w=f.images)==null?void 0:w[0])==null?void 0:p.url)||"/nofoto.png",alt:f.name,onClick:()=>t(`/product/${f.id}`),onError:m=>{m.currentTarget.onerror=null,m.currentTarget.src=Sa}}),g.jsx(MR,{children:g.jsx("h3",{children:f.name})}),g.jsxs(jR,{children:[g.jsx(qR,{item:{...f,quantity:f.quantity||1}}),g.jsx(IR,{children:g.jsxs("div",{className:"current-price",children:[(f.price*(f.quantity||1)).toLocaleString()," грн"]})})]}),g.jsxs($R,{children:[g.jsx(LR,{onClick:m=>d(f,m),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:g.jsx(Wh,{size:22,fill:v?"#ff4d4f":"none",color:v?"#ff4d4f":"#999"})}),g.jsx(DR,{onClick:()=>c(f),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:g.jsx(Tb,{size:22})})]})]},`${f.id}-${h}`)})}),g.jsxs(RR,{children:[g.jsxs(AR,{children:[g.jsx("span",{children:"Всього в обраному:"}),g.jsxs("strong",{children:[a," шт."]}),g.jsx("span",{children:"На суму:"}),g.jsxs("strong",{children:[l," грн"]})]}),g.jsx(FR,{to:"/checkout",children:"Оформити замовлення"}),g.jsx(NR,{onClick:y,children:"Oчистити кошик"})]})]})]})})},KR=k.div`
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
`,QR=k.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,ZR=k.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,JR=k.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,eA=k.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,tA=k.div`
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
`;k.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
`;const nA=k.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,rA=k.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,iA=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
   @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,oA=k.p`
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  width: 100px;
  text-align: center;
`,aA=k.div`
  display: flex;
  gap: 16px;
`,zv=k.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  padding: 8px;
  
`,sA=k.div`
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
`,lA=k.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,uA=k.button`
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
`,cA=k.button`
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
`,dA=k.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,fA=k.div`
   
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: #fdfaf7;
  text-align: center;
  flex: 1;
`;k.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 600;
`;const pA=k.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;k.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const hA=k.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,mA=k.button`
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
`,gA=()=>g.jsxs(g.Fragment,{children:[g.jsx(dA,{children:"Головна / Обране"}),g.jsxs(fA,{children:[g.jsx(pA,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),g.jsx(hA,{children:"Ви ще не додали жодного товару в обране"}),g.jsx(mA,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),vA=()=>{const e=Kn(),t=Er(),n=Et(c=>c.favorites.items),[r,i]=b.useState([]),o=Et(c=>c.cart.items),a=()=>{e(c4(n)),J.success("Товари додано в кошик!")};console.log(n);const l=n.reduce((c,y)=>c+y.price*(y.quantity||1),0),s=(c,y)=>{y.stopPropagation();const f=n.some(h=>h.id===c.id);i(h=>[...h,c.id]),setTimeout(()=>{e(Ua(c)),i(h=>h.filter(v=>v!==c.id))},300),f?J.warning(`${c.name} видалено з обраного`):J.info(`${c.name} додано в обране`)},u=()=>{e(nD())},d=n.length===0;return g.jsx(g.Fragment,{children:d?g.jsx(gA,{}):g.jsxs(KR,{children:[g.jsx(oo,{autoClose:1500}),g.jsxs(QR,{children:[" ",g.jsx(Me,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",g.jsx(Me,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),g.jsx(ZR,{children:"Обране"}),g.jsxs(JR,{children:[g.jsx(eA,{children:n.map(c=>{var w,p;const y=o.find(m=>m.id===c.id),h=(y?y.quantity:0)>=c.stock,v=m=>{if(h){J.error(`Вибачте, доступно лише ${m.stock} шт.`);return}e(Aa(m)),J.success(`${m.name} додано в кошик!`)};return g.jsxs(tA,{className:r.includes(c.id)?"removing":"",children:[g.jsx(nA,{src:((p=(w=c.images)==null?void 0:w[0])==null?void 0:p.url)||"/nofoto.png",alt:c.name,onClick:()=>t(`/product/${c.id}`),onError:m=>{m.currentTarget.onerror=null,m.currentTarget.src="/nofoto.png"}}),g.jsx(rA,{children:c.name}),g.jsxs(iA,{children:[g.jsxs(oA,{children:[c.price," грн"]}),g.jsxs(aA,{children:[g.jsx(zv,{onClick:()=>v(c),children:g.jsx(La,{size:30})}),g.jsx(zv,{onClick:m=>s(c,m),children:g.jsx(Tb,{size:30})})]})]})]},c.id)})}),g.jsxs(sA,{children:[g.jsxs(lA,{children:[g.jsx("span",{children:"Всього в обраному:"}),g.jsxs("strong",{children:[n.length," шт."]}),g.jsx("span",{children:"На суму:"}),g.jsxs("strong",{children:[l," грн"]})]}),g.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),g.jsx(uA,{onClick:()=>a(),children:"Додати все до кошика"}),g.jsx(cA,{onClick:u,children:"Очистити обрані"})]})]})]})})},yA=k.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,xA=k.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,bA=k.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,wA=k.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;k.section`
  margin-bottom: 30px;
`;k.h2`
  font-size: 20px;
  color: #4a332a; // Колір як у футері для акцентів
  margin-bottom: 15px;
  font-weight: 500;
`;k.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`;k.ul`
  margin-left: 20px;
  margin-bottom: 15px;
  
  li {
    margin-bottom: 8px;
    color: #555;
    line-height: 1.5;
  }
`;const SA=({title:e,children:t,breadcrumbPath:n})=>g.jsxs(yA,{children:[g.jsxs(xA,{children:["Головна / ",n]}),g.jsxs(bA,{children:[g.jsx(wA,{children:e}),t]})]}),Bv=k.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,Vv=k.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,Uv=k.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,Hv=k.ul`
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
`,_A=()=>g.jsxs(SA,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[g.jsxs(Bv,{children:[g.jsx(Vv,{children:"Способи доставки"}),g.jsx(Uv,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),g.jsxs(Hv,{children:[g.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),g.jsx("li",{children:"Самовивіз з нашого магазину"}),g.jsx("li",{children:"Укрпошта"})]})]}),g.jsxs(Bv,{children:[g.jsx(Vv,{children:"Варіанти оплати"}),g.jsx(Uv,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),g.jsxs(Hv,{children:[g.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),g.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),g.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function ti(e){"@babel/helpers - typeof";return ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ti(e)}function CA(e,t){if(ti(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ti(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function g2(e){var t=CA(e,"string");return ti(t)==="symbol"?t:String(t)}function Ao(e,t,n){return t=g2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wv(Object(n),!0).forEach(function(r){Ao(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function EA(e){if(Array.isArray(e))return e}function kA(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(d){u=!0,i=d}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Ep(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v2(e,t){if(e){if(typeof e=="string")return Ep(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ep(e,t)}}function TA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bn(e,t){return EA(e)||kA(e,t)||v2(e,t)||TA()}function PA(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function er(e,t){if(e==null)return{};var n=PA(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var OA=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function MA(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,d=e.onInputChange,c=e.onMenuClose,y=e.onMenuOpen,f=e.value,h=er(e,OA),v=b.useState(l!==void 0?l:n),w=Bn(v,2),p=w[0],m=w[1],x=b.useState(s!==void 0?s:i),S=Bn(x,2),C=S[0],T=S[1],_=b.useState(f!==void 0?f:a),E=Bn(_,2),j=E[0],I=E[1],D=b.useCallback(function(P,$){typeof u=="function"&&u(P,$),I(P)},[u]),O=b.useCallback(function(P,$){var N;typeof d=="function"&&(N=d(P,$)),m(N!==void 0?N:P)},[d]),M=b.useCallback(function(){typeof y=="function"&&y(),T(!0)},[y]),L=b.useCallback(function(){typeof c=="function"&&c(),T(!1)},[c]),A=l!==void 0?l:p,R=s!==void 0?s:C,F=f!==void 0?f:j;return Q(Q({},h),{},{inputValue:A,menuIsOpen:R,onChange:D,onInputChange:O,onMenuClose:L,onMenuOpen:M,value:F})}function jA(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Gv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g2(r.key),r)}}function $A(e,t,n){return t&&Gv(e.prototype,t),n&&Gv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function kp(e,t){return kp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},kp(e,t)}function IA(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&kp(e,t)}function ql(e){return ql=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ql(e)}function DA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function LA(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function RA(e,t){if(t&&(ti(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return LA(e)}function AA(e){var t=DA();return function(){var r=ql(e),i;if(t){var o=ql(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return RA(this,i)}}function FA(e){if(Array.isArray(e))return Ep(e)}function NA(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $m(e){return FA(e)||NA(e)||v2(e)||zA()}function BA(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const VA=Math.min,UA=Math.max,Xl=Math.round,ws=Math.floor,Kl=e=>({x:e,y:e});function HA(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function pc(){return typeof window<"u"}function y2(e){return b2(e)?(e.nodeName||"").toLowerCase():"#document"}function cn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function x2(e){var t;return(t=(b2(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function b2(e){return pc()?e instanceof Node||e instanceof cn(e).Node:!1}function Tp(e){return pc()?e instanceof Element||e instanceof cn(e).Element:!1}function Im(e){return pc()?e instanceof HTMLElement||e instanceof cn(e).HTMLElement:!1}function Yv(e){return!pc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof cn(e).ShadowRoot}function w2(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Dm(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Md;function WA(){return Md==null&&(Md=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Md}function GA(e){return/^(html|body|#document)$/.test(y2(e))}function Dm(e){return cn(e).getComputedStyle(e)}function YA(e){if(y2(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Yv(e)&&e.host||x2(e);return Yv(t)?t.host:t}function S2(e){const t=YA(e);return GA(t)?e.ownerDocument?e.ownerDocument.body:e.body:Im(t)&&w2(t)?t:S2(t)}function Ql(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=S2(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=cn(i);if(o){const l=Pp(a);return t.concat(a,a.visualViewport||[],w2(i)?i:[],l&&n?Ql(l):[])}else return t.concat(i,Ql(i,[],n))}function Pp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function qA(e){const t=Dm(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Im(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Xl(n)!==o||Xl(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Lm(e){return Tp(e)?e:e.contextElement}function jd(e){const t=Lm(e);if(!Im(t))return Kl(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=qA(t);let a=(o?Xl(n.width):n.width)/r,l=(o?Xl(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const XA=Kl(0);function KA(e){const t=cn(e);return!WA()||!t.visualViewport?XA:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function QA(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==cn(e)?!1:t}function qv(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Lm(e);let a=Kl(1);t&&(r?Tp(r)&&(a=jd(r)):a=jd(e));const l=QA(o,n,r)?KA(o):Kl(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,d=i.width/a.x,c=i.height/a.y;if(o){const y=cn(o),f=r&&Tp(r)?cn(r):r;let h=y,v=Pp(h);for(;v&&r&&f!==h;){const w=jd(v),p=v.getBoundingClientRect(),m=Dm(v),x=p.left+(v.clientLeft+parseFloat(m.paddingLeft))*w.x,S=p.top+(v.clientTop+parseFloat(m.paddingTop))*w.y;s*=w.x,u*=w.y,d*=w.x,c*=w.y,s+=x,u+=S,h=cn(v),v=Pp(h)}}return HA({width:d,height:c,x:s,y:u})}function _2(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ZA(e,t){let n=null,r;const i=x2(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:d,top:c,width:y,height:f}=u;if(l||t(),!y||!f)return;const h=ws(c),v=ws(i.clientWidth-(d+y)),w=ws(i.clientHeight-(c+f)),p=ws(d),x={rootMargin:-h+"px "+-v+"px "+-w+"px "+-p+"px",threshold:UA(0,VA(1,s))||1};let S=!0;function C(T){const _=T[0].intersectionRatio;if(_!==s){if(!S)return a();_?a(!1,_):r=setTimeout(()=>{a(!1,1e-7)},1e3)}_===1&&!_2(u,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(C,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,x)}n.observe(e)}return a(!0),o}function JA(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=Lm(e),d=i||o?[...u?Ql(u):[],...t?Ql(t):[]]:[];d.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),o&&p.addEventListener("resize",n)});const c=u&&l?ZA(u,n):null;let y=-1,f=null;a&&(f=new ResizeObserver(p=>{let[m]=p;m&&m.target===u&&f&&t&&(f.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(t)})),n()}),u&&!s&&f.observe(u),t&&f.observe(t));let h,v=s?qv(e):null;s&&w();function w(){const p=qv(e);v&&!_2(v,p)&&n(),v=p,h=requestAnimationFrame(w)}return n(),()=>{var p;d.forEach(m=>{i&&m.removeEventListener("scroll",n),o&&m.removeEventListener("resize",n)}),c==null||c(),(p=f)==null||p.disconnect(),f=null,s&&cancelAnimationFrame(h)}}var Op=b.useLayoutEffect,e6=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Zl=function(){};function t6(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function n6(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(t6(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Xv=function(t){return d6(t)?t.filter(Boolean):ti(t)==="object"&&t!==null?[t]:[]},C2=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=er(t,e6);return Q({},n)},Pe=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function hc(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function r6(e){return hc(e)?window.innerHeight:e.clientHeight}function E2(e){return hc(e)?window.pageYOffset:e.scrollTop}function Jl(e,t){if(hc(e)){window.scrollTo(0,t);return}e.scrollTop=t}function i6(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function o6(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Ss(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Zl,i=E2(e),o=t-i,a=10,l=0;function s(){l+=a;var u=o6(l,i,o,n);Jl(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function Kv(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?Jl(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&Jl(e,Math.max(t.offsetTop-i,0))}function a6(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Qv(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function s6(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var k2=!1,l6={get passive(){return k2=!0}},_s=typeof window<"u"?window:{};_s.addEventListener&&_s.removeEventListener&&(_s.addEventListener("p",Zl,l6),_s.removeEventListener("p",Zl,!1));var u6=k2;function c6(e){return e!=null}function d6(e){return Array.isArray(e)}function Cs(e,t,n){return e?t:n}var f6=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Bn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Bn(l,2),u=s[0],d=s[1];return a[u]=d,a},{})},p6=["children","innerProps"],h6=["children","innerProps"];function m6(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=i6(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var d=s.getBoundingClientRect(),c=d.height,y=n.getBoundingClientRect(),f=y.bottom,h=y.height,v=y.top,w=n.offsetParent.getBoundingClientRect(),p=w.top,m=a?window.innerHeight:r6(s),x=E2(s),S=parseInt(getComputedStyle(n).marginBottom,10),C=parseInt(getComputedStyle(n).marginTop,10),T=p-C,_=m-v,E=T+x,j=c-x-v,I=f-m+x+S,D=x+v-C,O=160;switch(i){case"auto":case"bottom":if(_>=h)return{placement:"bottom",maxHeight:t};if(j>=h&&!a)return o&&Ss(s,I,O),{placement:"bottom",maxHeight:t};if(!a&&j>=r||a&&_>=r){o&&Ss(s,I,O);var M=a?_-S:j-S;return{placement:"bottom",maxHeight:M}}if(i==="auto"||a){var L=t,A=a?T:E;return A>=r&&(L=Math.min(A-S-l,t)),{placement:"top",maxHeight:L}}if(i==="bottom")return o&&Jl(s,I),{placement:"bottom",maxHeight:t};break;case"top":if(T>=h)return{placement:"top",maxHeight:t};if(E>=h&&!a)return o&&Ss(s,D,O),{placement:"top",maxHeight:t};if(!a&&E>=r||a&&T>=r){var R=t;return(!a&&E>=r||a&&T>=r)&&(R=a?T-C:E-C),o&&Ss(s,D,O),{placement:"top",maxHeight:R}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function g6(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var T2=function(t){return t==="auto"?"bottom":t},v6=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return Q((r={label:"menu"},Ao(r,g6(i),"100%"),Ao(r,"position","absolute"),Ao(r,"width","100%"),Ao(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},P2=b.createContext(null),y6=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=b.useContext(P2)||{},d=u.setPortalPlacement,c=b.useRef(null),y=b.useState(i),f=Bn(y,2),h=f[0],v=f[1],w=b.useState(null),p=Bn(w,2),m=p[0],x=p[1],S=s.spacing.controlHeight;return Op(function(){var C=c.current;if(C){var T=a==="fixed",_=l&&!T,E=m6({maxHeight:i,menuEl:C,minHeight:r,placement:o,shouldScroll:_,isFixedPosition:T,controlHeight:S});v(E.maxHeight),x(E.placement),d==null||d(E.placement)}},[i,o,a,l,r,d,S]),n({ref:c,placerProps:Q(Q({},t),{},{placement:m||T2(o),maxHeight:h})})},x6=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return K("div",Z({},Pe(t,"menu",{menu:!0}),{ref:r},i),n)},b6=x6,w6=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return Q({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},S6=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return K("div",Z({},Pe(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},O2=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return Q({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},_6=O2,C6=O2,E6=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=er(t,p6);return K("div",Z({},Pe(Q(Q({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},k6=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=er(t,h6);return K("div",Z({},Pe(Q(Q({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},T6=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},P6=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=b.useRef(null),u=b.useRef(null),d=b.useState(T2(a)),c=Bn(d,2),y=c[0],f=c[1],h=b.useMemo(function(){return{setPortalPlacement:f}},[]),v=b.useState(null),w=Bn(v,2),p=w[0],m=w[1],x=b.useCallback(function(){if(i){var _=a6(i),E=l==="fixed"?0:window.pageYOffset,j=_[y]+E;(j!==(p==null?void 0:p.offset)||_.left!==(p==null?void 0:p.rect.left)||_.width!==(p==null?void 0:p.rect.width))&&m({offset:j,rect:_})}},[i,l,y,p==null?void 0:p.offset,p==null?void 0:p.rect.left,p==null?void 0:p.rect.width]);Op(function(){x()},[x]);var S=b.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=JA(i,s.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);Op(function(){S()},[S]);var C=b.useCallback(function(_){s.current=_,S()},[S]);if(!n&&l!=="fixed"||!p)return null;var T=K("div",Z({ref:C},Pe(Q(Q({},t),{},{offset:p.offset,position:l,rect:p.rect}),"menuPortal",{"menu-portal":!0}),o),r);return K(P2.Provider,{value:h},n?yu.createPortal(T,n):T)},O6=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},M6=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return K("div",Z({},Pe(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},j6=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return Q({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},$6=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return K("div",Z({},Pe(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},I6=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},D6=function(t){var n=t.children,r=t.innerProps;return K("div",Z({},Pe(t,"indicatorsContainer",{indicators:!0}),r),n)},Zv,L6=["size"],R6=["innerProps","isRtl","size"],A6={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},M2=function(t){var n=t.size,r=er(t,L6);return K("svg",Z({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:A6},r))},Rm=function(t){return K(M2,Z({size:20},t),K("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},j2=function(t){return K(M2,Z({size:20},t),K("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},$2=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Q({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},F6=$2,N6=function(t){var n=t.children,r=t.innerProps;return K("div",Z({},Pe(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||K(j2,null))},z6=$2,B6=function(t){var n=t.children,r=t.innerProps;return K("div",Z({},Pe(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||K(Rm,null))},V6=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Q({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},U6=function(t){var n=t.innerProps;return K("span",Z({},n,Pe(t,"indicatorSeparator",{"indicator-separator":!0})))},H6=H3(Zv||(Zv=BA([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),W6=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return Q({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},$d=function(t){var n=t.delay,r=t.offset;return K("span",{css:sm({animation:"".concat(H6," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},G6=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=er(t,R6);return K("div",Z({},Pe(Q(Q({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),K($d,{delay:0,offset:r}),K($d,{delay:160,offset:!0}),K($d,{delay:320,offset:!r}))},Y6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return Q({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},q6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return K("div",Z({ref:o},Pe(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},X6=q6,K6=["data"],Q6=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Z6=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,d=t.theme,c=t.selectProps;return K("div",Z({},Pe(t,"group",{group:!0}),s),K(a,Z({},l,{selectProps:c,theme:d,getStyles:i,getClassNames:o,cx:r}),u),K("div",null,n))},J6=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return Q({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},e8=function(t){var n=C2(t);n.data;var r=er(n,K6);return K("div",Z({},Pe(t,"groupHeading",{"group-heading":!0}),r))},t8=Z6,n8=["innerRef","isDisabled","isHidden","inputClassName"],r8=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return Q(Q({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},i8),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},I2={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},i8={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Q({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},I2)},o8=function(t){return Q({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},I2)},a8=function(t){var n=t.cx,r=t.value,i=C2(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=er(i,n8);return K("div",Z({},Pe(t,"input",{"input-container":!0}),{"data-value":r||""}),K("input",Z({className:n({input:!0},s),ref:o,style:o8(l),disabled:a},u)))},s8=a8,l8=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return Q({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},u8=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return Q({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},c8=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return Q({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},D2=function(t){var n=t.children,r=t.innerProps;return K("div",r,n)},d8=D2,f8=D2;function p8(e){var t=e.children,n=e.innerProps;return K("div",Z({role:"button"},n),t||K(Rm,{size:14}))}var h8=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,d=r.Label,c=r.Remove;return K(u,{data:i,innerProps:Q(Q({},Pe(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},K(d,{data:i,innerProps:Q({},Pe(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),K(c,{data:i,innerProps:Q(Q({},Pe(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},m8=h8,g8=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return Q({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},v8=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return K("div",Z({},Pe(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},y8=v8,x8=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return Q({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},b8=function(t){var n=t.children,r=t.innerProps;return K("div",Z({},Pe(t,"placeholder",{placeholder:!0}),r),n)},w8=b8,S8=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return Q({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},_8=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return K("div",Z({},Pe(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},C8=_8,E8={ClearIndicator:B6,Control:X6,DropdownIndicator:N6,DownChevron:j2,CrossIcon:Rm,Group:t8,GroupHeading:e8,IndicatorsContainer:D6,IndicatorSeparator:U6,Input:s8,LoadingIndicator:G6,Menu:b6,MenuList:S6,MenuPortal:P6,LoadingMessage:k6,NoOptionsMessage:E6,MultiValue:m8,MultiValueContainer:d8,MultiValueLabel:f8,MultiValueRemove:p8,Option:y8,Placeholder:w8,SelectContainer:M6,SingleValue:C8,ValueContainer:$6},k8=function(t){return Q(Q({},E8),t.components)},Jv=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function T8(e,t){return!!(e===t||Jv(e)&&Jv(t))}function P8(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!T8(e[n],t[n]))return!1;return!0}function O8(e,t){t===void 0&&(t=P8);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var M8={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},j8=function(t){return K("span",Z({css:M8},t))},e1=j8,$8={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,d=t.isAppleDevice,c=function(v,w){return v&&v.length?"".concat(v.indexOf(w)+1," of ").concat(v.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(c(l,r),".");if(n==="menu"&&d){var y=s?" disabled":"",f="".concat(u?" selected":"").concat(y);return"".concat(a).concat(f,", ").concat(c(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},I8=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,d=t.isAppleDevice,c=s.ariaLiveMessages,y=s.getOptionLabel,f=s.inputValue,h=s.isMulti,v=s.isOptionDisabled,w=s.isSearchable,p=s.menuIsOpen,m=s.options,x=s.screenReaderStatus,S=s.tabSelectsValue,C=s.isLoading,T=s["aria-label"],_=s["aria-live"],E=b.useMemo(function(){return Q(Q({},$8),c||{})},[c]),j=b.useMemo(function(){var A="";if(n&&E.onChange){var R=n.option,F=n.options,P=n.removedValue,$=n.removedValues,N=n.value,B=function(fe){return Array.isArray(fe)?null:fe},z=P||R||B(N),U=z?y(z):"",G=F||$||void 0,Y=G?G.map(y):[],X=Q({isDisabled:z&&v(z,l),label:U,labels:Y},n);A=E.onChange(X)}return A},[n,E,v,l,y]),I=b.useMemo(function(){var A="",R=r||i,F=!!(r&&l&&l.includes(r));if(R&&E.onFocus){var P={focused:R,label:y(R),isDisabled:v(R,l),isSelected:F,options:o,context:R===r?"menu":"value",selectValue:l,isAppleDevice:d};A=E.onFocus(P)}return A},[r,i,y,v,E,o,l,d]),D=b.useMemo(function(){var A="";if(p&&m.length&&!C&&E.onFilter){var R=x({count:o.length});A=E.onFilter({inputValue:f,resultsMessage:R})}return A},[o,f,p,E,m,x,C]),O=(n==null?void 0:n.action)==="initial-input-focus",M=b.useMemo(function(){var A="";if(E.guidance){var R=i?"value":p?"menu":"input";A=E.guidance({"aria-label":T,context:R,isDisabled:r&&v(r,l),isMulti:h,isSearchable:w,tabSelectsValue:S,isInitialFocus:O})}return A},[T,r,i,h,v,w,p,E,l,S,O]),L=K(b.Fragment,null,K("span",{id:"aria-selection"},j),K("span",{id:"aria-focused"},I),K("span",{id:"aria-results"},D),K("span",{id:"aria-guidance"},M));return K(b.Fragment,null,K(e1,{id:u},O&&L),K(e1,{"aria-live":_,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!O&&L))},D8=I8,Mp=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],L8=new RegExp("["+Mp.map(function(e){return e.letters}).join("")+"]","g"),L2={};for(var Id=0;Id<Mp.length;Id++)for(var Dd=Mp[Id],Ld=0;Ld<Dd.letters.length;Ld++)L2[Dd.letters[Ld]]=Dd.base;var R2=function(t){return t.replace(L8,function(n){return L2[n]})},R8=O8(R2),t1=function(t){return t.replace(/^\s+|\s+$/g,"")},A8=function(t){return"".concat(t.label," ").concat(t.value)},F8=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=Q({ignoreCase:!0,ignoreAccents:!0,stringify:A8,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,d=s?t1(r):r,c=s?t1(l(n)):l(n);return o&&(d=d.toLowerCase(),c=c.toLowerCase()),a&&(d=R8(d),c=R2(c)),u==="start"?c.substr(0,d.length)===d:c.indexOf(d)>-1}},N8=["innerRef"];function z8(e){var t=e.innerRef,n=er(e,N8),r=f6(n,"onExited","in","enter","exit","appear");return K("input",Z({ref:t},r,{css:sm({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var B8=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function V8(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=b.useRef(!1),l=b.useRef(!1),s=b.useRef(0),u=b.useRef(null),d=b.useCallback(function(w,p){if(u.current!==null){var m=u.current,x=m.scrollTop,S=m.scrollHeight,C=m.clientHeight,T=u.current,_=p>0,E=S-C-x,j=!1;E>p&&a.current&&(r&&r(w),a.current=!1),_&&l.current&&(o&&o(w),l.current=!1),_&&p>E?(n&&!a.current&&n(w),T.scrollTop=S,j=!0,a.current=!0):!_&&-p>x&&(i&&!l.current&&i(w),T.scrollTop=0,j=!0,l.current=!0),j&&B8(w)}},[n,r,i,o]),c=b.useCallback(function(w){d(w,w.deltaY)},[d]),y=b.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),f=b.useCallback(function(w){var p=s.current-w.changedTouches[0].clientY;d(w,p)},[d]),h=b.useCallback(function(w){if(w){var p=u6?{passive:!1}:!1;w.addEventListener("wheel",c,p),w.addEventListener("touchstart",y,p),w.addEventListener("touchmove",f,p)}},[f,y,c]),v=b.useCallback(function(w){w&&(w.removeEventListener("wheel",c,!1),w.removeEventListener("touchstart",y,!1),w.removeEventListener("touchmove",f,!1))},[f,y,c]);return b.useEffect(function(){if(t){var w=u.current;return h(w),function(){v(w)}}},[t,h,v]),function(w){u.current=w}}var n1=["boxSizing","height","overflow","paddingRight","position"],r1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function i1(e){e.cancelable&&e.preventDefault()}function o1(e){e.stopPropagation()}function a1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function s1(){return"ontouchstart"in window||navigator.maxTouchPoints}var l1=!!(typeof window<"u"&&window.document&&window.document.createElement),Oo=0,pi={capture:!1,passive:!1};function U8(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),o=b.useRef(null),a=b.useCallback(function(s){if(l1){var u=document.body,d=u&&u.style;if(r&&n1.forEach(function(h){var v=d&&d[h];i.current[h]=v}),r&&Oo<1){var c=parseInt(i.current.paddingRight,10)||0,y=document.body?document.body.clientWidth:0,f=window.innerWidth-y+c||0;Object.keys(r1).forEach(function(h){var v=r1[h];d&&(d[h]=v)}),d&&(d.paddingRight="".concat(f,"px"))}u&&s1()&&(u.addEventListener("touchmove",i1,pi),s&&(s.addEventListener("touchstart",a1,pi),s.addEventListener("touchmove",o1,pi))),Oo+=1}},[r]),l=b.useCallback(function(s){if(l1){var u=document.body,d=u&&u.style;Oo=Math.max(Oo-1,0),r&&Oo<1&&n1.forEach(function(c){var y=i.current[c];d&&(d[c]=y)}),u&&s1()&&(u.removeEventListener("touchmove",i1,pi),s&&(s.removeEventListener("touchstart",a1,pi),s.removeEventListener("touchmove",o1,pi)))}},[r]);return b.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var H8=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},W8={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function G8(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=V8({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),d=U8({isEnabled:n}),c=function(f){u(f),d(f)};return K(b.Fragment,null,n&&K("div",{onClick:H8,css:W8}),t(c))}var Y8={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},q8=function(t){var n=t.name,r=t.onFocus;return K("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:Y8,value:"",onChange:function(){}})},X8=q8;function Am(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function K8(){return Am(/^iPhone/i)}function A2(){return Am(/^Mac/i)}function Q8(){return Am(/^iPad/i)||A2()&&navigator.maxTouchPoints>1}function Z8(){return K8()||Q8()}function J8(){return A2()||Z8()}var eF=function(t){return t.label},tF=function(t){return t.label},nF=function(t){return t.value},rF=function(t){return!!t.isDisabled},iF={clearIndicator:z6,container:O6,control:Y6,dropdownIndicator:F6,group:Q6,groupHeading:J6,indicatorsContainer:I6,indicatorSeparator:V6,input:r8,loadingIndicator:W6,loadingMessage:C6,menu:v6,menuList:w6,menuPortal:T6,multiValue:l8,multiValueLabel:u8,multiValueRemove:c8,noOptionsMessage:_6,option:g8,placeholder:x8,singleValue:S8,valueContainer:j6},oF={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},aF=4,F2=4,sF=38,lF=F2*2,uF={baseUnit:F2,controlHeight:sF,menuGutter:lF},Rd={borderRadius:aF,colors:oF,spacing:uF},cF={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Qv(),captureMenuScroll:!Qv(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:F8(),formatGroupLabel:eF,getOptionLabel:tF,getOptionValue:nF,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:rF,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!s6(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function u1(e,t,n,r){var i=B2(e,t,n),o=V2(e,t,n),a=z2(e,t),l=eu(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function Zs(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return u1(e,a,t,l)}).filter(function(a){return d1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=u1(e,n,t,r);return d1(e,o)?o:void 0}).filter(c6)}function N2(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,$m(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function c1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,$m(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function dF(e,t){return N2(Zs(e,t))}function d1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!H2(e)||!o)&&U2(e,{label:a,value:l,data:i},r)}function fF(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function pF(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Ad=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},z2=function(t,n){return t.getOptionLabel(n)},eu=function(t,n){return t.getOptionValue(n)};function B2(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function V2(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=eu(e,t);return n.some(function(i){return eu(e,i)===r})}function U2(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var H2=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},hF=1,W2=function(e){IA(n,e);var t=AA(n);function n(r){var i;if(jA(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var d=i.props,c=d.onChange,y=d.name;u.name=y,i.ariaOnChange(s,u),c(s,u)},i.setValue=function(s,u,d){var c=i.props,y=c.closeMenuOnSelect,f=c.isMulti,h=c.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:h}),y&&(i.setState({inputIsHiddenAfterUpdate:!f}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:d})},i.selectOption=function(s){var u=i.props,d=u.blurInputOnSelect,c=u.isMulti,y=u.name,f=i.state.selectValue,h=c&&i.isOptionSelected(s,f),v=i.isOptionDisabled(s,f);if(h){var w=i.getOptionValue(s);i.setValue(f.filter(function(p){return i.getOptionValue(p)!==w}),"deselect-option",s)}else if(!v)c?i.setValue([].concat($m(f),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:y});return}d&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,d=i.state.selectValue,c=i.getOptionValue(s),y=d.filter(function(h){return i.getOptionValue(h)!==c}),f=Cs(u,y,y[0]||null);i.onChange(f,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Cs(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,d=u[u.length-1],c=u.slice(0,u.length-1),y=Cs(s,c,c[0]||null);d&&i.onChange(y,{action:"pop-value",removedValue:d})},i.getFocusedOptionId=function(s){return Ad(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return c1(Zs(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),d=0;d<s;d++)u[d]=arguments[d];return n6.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return z2(i.props,s)},i.getOptionValue=function(s){return eu(i.props,s)},i.getStyles=function(s,u){var d=i.props.unstyled,c=iF[s](u,d);c.boxSizing="border-box";var y=i.props.styles[s];return y?y(c,u):c},i.getClassNames=function(s,u){var d,c;return(d=(c=i.props.classNames)[s])===null||d===void 0?void 0:d.call(c,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return k8(i.props)},i.buildCategorizedOptions=function(){return Zs(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return N2(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:Q({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,d=u.isMulti,c=u.menuIsOpen;i.focusInput(),c?(i.setState({inputIsHiddenAfterUpdate:!d}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&hc(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,d=u&&u.item(0);d&&(i.initialTouchX=d.clientX,i.initialTouchY=d.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,d=u&&u.item(0);if(d){var c=Math.abs(d.clientX-i.initialTouchX),y=Math.abs(d.clientY-i.initialTouchY),f=5;i.userIsDragging=c>f||y>f}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,d=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(d,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),d=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:d>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return H2(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,d=u.isMulti,c=u.backspaceRemovesValue,y=u.escapeClearsValue,f=u.inputValue,h=u.isClearable,v=u.isDisabled,w=u.menuIsOpen,p=u.onKeyDown,m=u.tabSelectsValue,x=u.openMenuOnFocus,S=i.state,C=S.focusedOption,T=S.focusedValue,_=S.selectValue;if(!v&&!(typeof p=="function"&&(p(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!d||f)return;i.focusValue("previous");break;case"ArrowRight":if(!d||f)return;i.focusValue("next");break;case"Delete":case"Backspace":if(f)return;if(T)i.removeValue(T);else{if(!c)return;d?i.popValue():h&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!m||!C||x&&i.isOptionSelected(C,_))return;i.selectOption(C);break;case"Enter":if(s.keyCode===229)break;if(w){if(!C||i.isComposing)return;i.selectOption(C);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:f}),i.onMenuClose()):h&&y&&i.clearValue();break;case" ":if(f)return;if(!w){i.openMenu("first");break}if(!C)return;i.selectOption(C);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++hF),i.state.selectValue=Xv(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=Ad(o,a[l])}return i}return $A(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Kv(this.menuListRef,this.focusedOptionRef),J8()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Kv(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),d=i==="first"?0:u.length-1;if(!this.props.isMulti){var c=u.indexOf(l[0]);c>-1&&(d=c)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[d],focusedOptionId:this.getFocusedOptionId(u[d])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,d=-1;if(a.length){switch(i){case"previous":s===0?d=0:s===-1?d=u:d=s-1;break;case"next":s>-1&&s<u&&(d=s+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:a[d]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Rd):Q(Q({},Rd),this.props.theme):Rd}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,d=this.setValue,c=this.props,y=c.isMulti,f=c.isRtl,h=c.options,v=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:v,isMulti:y,isRtl:f,options:h,selectOption:u,selectProps:c,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return B2(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return V2(this.props,i,o)}},{key:"filterOption",value:function(i,o){return U2(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,d=i.form,c=i.menuIsOpen,y=i.required,f=this.getComponents(),h=f.Input,v=this.state,w=v.inputIsHidden,p=v.ariaSelection,m=this.commonProps,x=l||this.getElementId("input"),S=Q(Q(Q({"aria-autocomplete":"list","aria-expanded":c,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":y,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},c&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(p==null?void 0:p.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?b.createElement(h,Z({},m,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:d,type:"text",value:s},S)):b.createElement(z8,Z({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Zl,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:d,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,d=o.SingleValue,c=o.Placeholder,y=this.commonProps,f=this.props,h=f.controlShouldRenderValue,v=f.isDisabled,w=f.isMulti,p=f.inputValue,m=f.placeholder,x=this.state,S=x.selectValue,C=x.focusedValue,T=x.isFocused;if(!this.hasValue()||!h)return p?null:b.createElement(c,Z({},y,{key:"placeholder",isDisabled:v,isFocused:T,innerProps:{id:this.getElementId("placeholder")}}),m);if(w)return S.map(function(E,j){var I=E===C,D="".concat(i.getOptionLabel(E),"-").concat(i.getOptionValue(E));return b.createElement(a,Z({},y,{components:{Container:l,Label:s,Remove:u},isFocused:I,isDisabled:v,key:D,index:j,removeProps:{onClick:function(){return i.removeValue(E)},onTouchEnd:function(){return i.removeValue(E)},onMouseDown:function(M){M.preventDefault()}},data:E}),i.formatOptionLabel(E,"value"))});if(p)return null;var _=S[0];return b.createElement(d,Z({},y,{data:_,isDisabled:v}),this.formatOptionLabel(_,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var c={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,Z({},a,{innerProps:c,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!o||!u)return null;var c={"aria-hidden":"true"};return b.createElement(o,Z({},a,{innerProps:c,isDisabled:s,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return b.createElement(a,Z({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,Z({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,d=o.MenuPortal,c=o.LoadingMessage,y=o.NoOptionsMessage,f=o.Option,h=this.commonProps,v=this.state.focusedOption,w=this.props,p=w.captureMenuScroll,m=w.inputValue,x=w.isLoading,S=w.loadingMessage,C=w.minMenuHeight,T=w.maxMenuHeight,_=w.menuIsOpen,E=w.menuPlacement,j=w.menuPosition,I=w.menuPortalTarget,D=w.menuShouldBlockScroll,O=w.menuShouldScrollIntoView,M=w.noOptionsMessage,L=w.onMenuScrollToTop,A=w.onMenuScrollToBottom;if(!_)return null;var R=function(U,G){var Y=U.type,X=U.data,ee=U.isDisabled,fe=U.isSelected,be=U.label,ie=U.value,je=v===X,Be=ee?void 0:function(){return i.onOptionHover(X)},Ve=ee?void 0:function(){return i.selectOption(X)},ai="".concat(i.getElementId("option"),"-").concat(G),vt={id:ai,onClick:Ve,onMouseMove:Be,onMouseOver:Be,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:fe};return b.createElement(f,Z({},h,{innerProps:vt,data:X,isDisabled:ee,isSelected:fe,key:ai,label:be,type:Y,value:ie,isFocused:je,innerRef:je?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(U.data,"menu"))},F;if(this.hasOptions())F=this.getCategorizedOptions().map(function(z){if(z.type==="group"){var U=z.data,G=z.options,Y=z.index,X="".concat(i.getElementId("group"),"-").concat(Y),ee="".concat(X,"-heading");return b.createElement(a,Z({},h,{key:X,data:U,options:G,Heading:l,headingProps:{id:ee,data:z.data},label:i.formatGroupLabel(z.data)}),z.options.map(function(fe){return R(fe,"".concat(Y,"-").concat(fe.index))}))}else if(z.type==="option")return R(z,"".concat(z.index))});else if(x){var P=S({inputValue:m});if(P===null)return null;F=b.createElement(c,h,P)}else{var $=M({inputValue:m});if($===null)return null;F=b.createElement(y,h,$)}var N={minMenuHeight:C,maxMenuHeight:T,menuPlacement:E,menuPosition:j,menuShouldScrollIntoView:O},B=b.createElement(y6,Z({},h,N),function(z){var U=z.ref,G=z.placerProps,Y=G.placement,X=G.maxHeight;return b.createElement(s,Z({},h,N,{innerRef:U,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:Y}),b.createElement(G8,{captureEnabled:p,onTopArrive:L,onBottomArrive:A,lockEnabled:D},function(ee){return b.createElement(u,Z({},h,{innerRef:function(be){i.getMenuListRef(be),ee(be)},innerProps:{role:"listbox","aria-multiselectable":h.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:X,focusedOption:v}),F)}))});return I||j==="fixed"?b.createElement(d,Z({},h,{appendTo:I,controlElement:this.controlRef,menuPlacement:E,menuPosition:j}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,d=o.required,c=this.state.selectValue;if(d&&!this.hasValue()&&!l)return b.createElement(X8,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var y=c.map(function(v){return i.getOptionValue(v)}).join(a);return b.createElement("input",{name:u,type:"hidden",value:y})}else{var f=c.length>0?c.map(function(v,w){return b.createElement("input",{key:"i-".concat(w),name:u,type:"hidden",value:i.getOptionValue(v)})}):b.createElement("input",{name:u,type:"hidden",value:""});return b.createElement("div",null,f)}else{var h=c[0]?this.getOptionValue(c[0]):"";return b.createElement("input",{name:u,type:"hidden",value:h})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,d=o.selectValue,c=this.getFocusableOptions();return b.createElement(D8,Z({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:d,focusableOptions:c,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,d=u.className,c=u.id,y=u.isDisabled,f=u.menuIsOpen,h=this.state.isFocused,v=this.commonProps=this.getCommonProps();return b.createElement(l,Z({},v,{className:d,innerProps:{id:c,onKeyDown:this.onKeyDown},isDisabled:y,isFocused:h}),this.renderLiveRegion(),b.createElement(o,Z({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:y,isFocused:h,menuIsOpen:f}),b.createElement(s,Z({},v,{isDisabled:y}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(a,Z({},v,{isDisabled:y}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,d=o.isFocused,c=o.prevWasFocused,y=o.instancePrefix,f=i.options,h=i.value,v=i.menuIsOpen,w=i.inputValue,p=i.isMulti,m=Xv(h),x={};if(a&&(h!==a.value||f!==a.options||v!==a.menuIsOpen||w!==a.inputValue)){var S=v?dF(i,m):[],C=v?c1(Zs(i,m),"".concat(y,"-option")):[],T=l?fF(o,m):null,_=pF(o,S),E=Ad(C,_);x={selectValue:m,focusedOption:_,focusedOptionId:E,focusableOptionsWithIds:C,focusedValue:T,clearFocusValueOnUpdate:!1}}var j=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},I=u,D=d&&c;return d&&!D&&(I={value:Cs(p,m,m[0]||null),options:m,action:"initial-input-focus"},D=!c),(u==null?void 0:u.action)==="initial-input-focus"&&(I=null),Q(Q(Q({},x),j),{},{prevProps:i,ariaSelection:I,prevWasFocused:D})}}]),n}(b.Component);W2.defaultProps=cF;var mF=b.forwardRef(function(e,t){var n=MA(e);return b.createElement(W2,Z({ref:t},n))}),mc=mF;const gF=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,vF=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,yF=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>g.jsxs(gF,{children:[g.jsx(vF,{children:"Місто"}),g.jsx(mc,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),xF=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,bF=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,wF=({options:e=[],value:t,onChange:n,selectedCity:r})=>g.jsxs(xF,{children:[g.jsx(bF,{children:"Спосіб доставки"}),g.jsx(mc,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),f1=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,p1=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,SF=({deliveryMethod:e,officeOptions:t,selectedOffice:n,selectedUkrOffice:r,setSelectedOffice:i,setSelectedUkrOffice:o})=>e==="nova"?g.jsxs(f1,{children:[g.jsx(p1,{children:"Відділення Нової пошти"}),g.jsx(mc,{options:t,onChange:a=>i(a),value:n,placeholder:"Оберіть відділення..."})]}):e==="ukr"?g.jsxs(f1,{children:[g.jsx(p1,{children:"Адреса доставки (Укрпошта)"}),g.jsx("input",{type:"text",value:r,onChange:a=>o(a.target.value),placeholder:"Наприклад:  вул. Шевченка, 10, індекс 01001",style:{padding:"8px 12px",border:"1px solid #c6c5c5",borderRadius:"4px",outline:"none"}})]}):null,_F=k.div`
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
`;k.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;const CF=k.button`
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
`,EF=k.ul`
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
`,kF=k.li`
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
`,TF=k.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,PF=k.div`
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
`,OF=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>g.jsxs(_F,{children:[g.jsx("h3",{children:"Ваше замовлення"}),g.jsx(EF,{children:e.map((o,a)=>{var l,s;return g.jsxs(kF,{children:[g.jsx(TF,{src:((s=(l=o.images)==null?void 0:l[0])==null?void 0:s.url)||Sa,alt:o.name}),g.jsxs(PF,{children:[g.jsx("p",{className:"item-name",children:o.name}),g.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),g.jsxs("span",{className:"item-total",children:[o.price*o.quantity," грн"]})]},`${o.id}-${a}`)})}),g.jsxs("div",{className:"summary-row",children:[g.jsxs("span",{children:["Товари (",n,")"]}),g.jsxs("span",{children:[t," грн"]})]}),g.jsxs("div",{className:"summary-row",children:[g.jsx("span",{children:"Доставка"}),g.jsx("span",{children:"За тарифами перевізника"})]}),g.jsx("hr",{}),g.jsxs("div",{className:"total",children:[g.jsx("span",{children:"Всього до сплати:"}),g.jsxs("span",{children:[t," грн"]})]}),g.jsx(CF,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&g.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var G2={exports:{}};function MF(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Fd=MF(b),jF=yu;function $F(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function jp(){return(jp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function IF(e,t){e.prototype=Object.create(t.prototype),$F(e.prototype.constructor=e,t)}function DF(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function hi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var LF=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],d=0;(s=new Error(t.replace(/%s/g,function(){return u[d++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},h1=LF;function m1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function RF(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var AF={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},FF="_";function g1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=FF),n==null&&(n=AF),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function At(e,t){return e.permanents.indexOf(t)!==-1}function gc(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(At(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function v1(e,t){return t.split("").every(function(n,r){return At(e,r)||!gc(e,r,n)})}function Fo(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&At(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!At(e,o)&&gc(e,o,a)){i=o+1;break}}return i}function Y2(e,t){return Fo(e,t)===e.mask.length}function Rn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=$p(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&At(e,t.length);)t+=r[t.length];return t}if(t)return $p(e,Rn(e,""),t,0);for(var o=0;o<r.length;o++)At(e,o)?t+=r[o]:t+=n;return t}function NF(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(d,c){return c<n||i<=c?d:At(e,c)?a[c]:o}).join("");for(var u=i;u<s.length;u++)At(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Rn(e,t)}function $p(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=Y2(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;f=u,At(e,y=r)&&f!==i[y];){if(r>=t.length&&(t+=i[r]),d=u,c=r,o&&At(e,c)&&d===o)return!0;if(++r>=i.length)return!1}var d,c,y,f;return!gc(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),Rn(e,t)):o||(t+=u),++r<i.length)}),t}function zF(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;d=s,At(e,u=r)&&d!==i[u];)if(++r>=i.length)return!1;var u,d;return(gc(e,r,s)||s===o)&&r++,r<i.length}),r-l}function BF(e,t){for(var n=t;0<=n;--n)if(!At(e,n))return n;return null}function Qo(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!At(e,r))return r;return null}function Nd(e){return e||e===0?e+"":""}function VF(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",d=0,c=0,y=Math.min(i.start,n.start);return n.end>i.start?c=(d=zF(e,r,u=s.slice(i.start,n.end),y))?i.length:0:s.length<r.length&&(c=r.length-s.length),s=r,c&&(c===1&&!i.length&&(y=i.start===n.start?Qo(e,n.start):BF(e,n.start)),s=NF(e,s,y,c)),s=$p(e,s,u,y),(y+=d)>=o.length?y=o.length:y<a.length&&!d?y=a.length:y>=a.length&&y<l&&d&&(y=Qo(e,y)),u||(u=null),{value:s=Rn(e,s),enteredString:u,selection:{start:y,end:y}}}function UF(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function yt(e){return typeof e=="function"}function HF(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function q2(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function y1(e){return(q2()?HF():function(){return setTimeout(e,1e3/60)})(e)}function zd(e){(q2()||clearTimeout)(e)}var WF=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=y1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(zd(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var h=jF.findDOMNode(hi(hi(i))),v=typeof window<"u"&&h instanceof window.Element;if(h&&!v)return null;if(h.nodeName!=="INPUT"&&(h=h.querySelector("input")),!h)throw new Error("react-input-mask: inputComponent doesn't contain input node");return h},i.getInputValue=function(){var h=i.getInputDOMNode();return h?h.value:null},i.setInputValue=function(h){var v=i.getInputDOMNode();v&&(i.value=h,v.value=h)},i.setCursorToEnd=function(){var h=Fo(i.maskOptions,i.value),v=Qo(i.maskOptions,h);v!==null&&i.setCursorPosition(v)},i.setSelection=function(h,v,w){w===void 0&&(w={});var p=i.getInputDOMNode(),m=i.isFocused();p&&m&&(w.deferred||m1(p,h,v),i.selectionDeferId!==null&&zd(i.selectionDeferId),i.selectionDeferId=y1(function(){i.selectionDeferId=null,m1(p,h,v)}),i.previousSelection={start:h,end:v,length:Math.abs(v-h)})},i.getSelection=function(){return RF(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(h){i.setSelection(h,h)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var h=i.maskOptions,v=h.mask,w=h.maskChar,p=h.permanents,m=h.formatChars;return{mask:v,maskChar:w,permanents:p,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:m}},i.isInputAutofilled=function(h,v,w,p){var m=i.getInputDOMNode();try{if(m.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||p.end<w.length&&v.end===h.length},i.onChange=function(h){var v=hi(hi(i)).beforePasteState,w=hi(hi(i)).previousSelection,p=i.props.beforeMaskedValueChange,m=i.getInputValue(),x=i.value,S=i.getSelection();i.isInputAutofilled(m,S,x,w)&&(x=Rn(i.maskOptions,""),w={start:0,end:0,length:0}),v&&(w=v.selection,x=v.value,S={start:w.start+m.length,end:w.start+m.length,length:0},m=x.slice(0,w.start)+m+x.slice(w.end),i.beforePasteState=null);var C=VF(i.maskOptions,m,S,x,w),T=C.enteredString,_=C.selection,E=C.value;if(yt(p)){var j=p({value:E,selection:_},{value:x,selection:w},T,i.getBeforeMaskedValueChangeConfig());E=j.value,_=j.selection}i.setInputValue(E),yt(i.props.onChange)&&i.props.onChange(h),i.isWindowsPhoneBrowser?i.setSelection(_.start,_.end,{deferred:!0}):i.setSelection(_.start,_.end)},i.onFocus=function(h){var v=i.props.beforeMaskedValueChange,w=i.maskOptions,p=w.mask,m=w.prefix;if(i.focused=!0,i.mounted=!0,p){if(i.value)Fo(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var x=Rn(i.maskOptions,m),S=Rn(i.maskOptions,x),C=Fo(i.maskOptions,S),T=Qo(i.maskOptions,C),_={start:T,end:T};if(yt(v)){var E=v({value:S,selection:_},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=E.value,_=E.selection}var j=S!==i.getInputValue();j&&i.setInputValue(S),j&&yt(i.props.onChange)&&i.props.onChange(h),i.setSelection(_.start,_.end)}i.runSaveSelectionLoop()}yt(i.props.onFocus)&&i.props.onFocus(h)},i.onBlur=function(h){var v=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&v1(i.maskOptions,i.value)){var p="";yt(v)&&(p=v({value:p,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var m=p!==i.getInputValue();m&&i.setInputValue(p),m&&yt(i.props.onChange)&&i.props.onChange(h)}yt(i.props.onBlur)&&i.props.onBlur(h)},i.onMouseDown=function(h){if(!i.focused&&document.addEventListener){i.mouseDownX=h.clientX,i.mouseDownY=h.clientY,i.mouseDownTime=new Date().getTime();var v=function w(p){if(document.removeEventListener("mouseup",w),i.focused){var m=Math.abs(p.clientX-i.mouseDownX),x=Math.abs(p.clientY-i.mouseDownY),S=Math.max(m,x),C=new Date().getTime()-i.mouseDownTime;(S<=10&&C<=200||S<=5&&C<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",v)}yt(i.props.onMouseDown)&&i.props.onMouseDown(h)},i.onPaste=function(h){yt(i.props.onPaste)&&i.props.onPaste(h),h.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(h){i.props.children==null&&yt(i.props.inputRef)&&i.props.inputRef(h)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,d=r.defaultValue,c=r.value;i.maskOptions=g1(o,a,l),d==null&&(d=""),c==null&&(c=d);var y=Nd(c);if(i.maskOptions.mask&&(s||y)&&(y=Rn(i.maskOptions,y),yt(u))){var f=r.value;r.value==null&&(f=d),y=u({value:y,selection:null},{value:f=Nd(f),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=y,i}IF(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=UF(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,d=this.maskOptions,c=a||this.isFocused(),y=this.props.value!=null,f=y?Nd(this.props.value):this.value,h=r?r.start:null;if(this.maskOptions=g1(l,s,u),this.maskOptions.mask){!d.mask&&this.isFocused()&&this.runSaveSelectionLoop();var v=this.maskOptions.mask&&this.maskOptions.mask!==d.mask;if(d.mask||y||(f=this.getInputValue()),(v||this.maskOptions.mask&&(f||c))&&(f=Rn(this.maskOptions,f)),v){var w=Fo(this.maskOptions,f);(h===null||w<h)&&(h=Y2(this.maskOptions,f)?w:Qo(this.maskOptions,w))}!this.maskOptions.mask||!v1(this.maskOptions,f)||c||y&&this.props.value||(f="");var p={start:h,end:h};if(yt(o)){var m=o({value:f,selection:p},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());f=m.value,p=m.selection}this.value=f;var x=this.getInputValue()!==this.value;x?(this.setInputValue(this.value),this.forceUpdate()):v&&this.forceUpdate();var S=!1;p.start!=null&&p.end!=null&&(S=!r||r.start!==p.start||r.end!==p.end),(S||x)&&this.setSelection(p.start,p.end)}else d.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&zd(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=DF(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){yt(o)||h1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=jp({},a);l.forEach(function(d){return delete s[d]}),r=o(s),l.filter(function(d){return r.props[d]!=null&&r.props[d]!==a[d]}).length&&h1(!1)}else r=Fd.createElement("input",jp({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Fd.cloneElement(r,u)},t}(Fd.Component),GF=WF;G2.exports=GF;var YF=G2.exports;const qF=Dp(YF);k.div`
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
`;k.h2`
  text-align: left;
  color: #fff;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
`;k.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;k.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  flex: 1;
`;k.form`
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
`;const Bd=k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Vd=k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Ud=k.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #f58220; /* Помаранчевий колір з кнопки */
  }
`;k.div`
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
`;const Hd=k.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;k.button`
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
`;k.ul`
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
`;k.li`
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
`;k.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`;k.div`
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
`;const XF=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return g.jsxs(g.Fragment,{children:[g.jsx("h3",{children:"Контактні дані"}),g.jsxs(Bd,{children:[g.jsx(Vd,{children:"Прізвище та ім’я"}),g.jsx(Ud,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&g.jsx(Hd,{children:n.fullName})]}),g.jsxs(Bd,{children:[g.jsx(Vd,{children:"Номер телефону"}),g.jsx(qF,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>g.jsx(Ud,{...i,type:"tel"})}),n.phone&&g.jsx(Hd,{children:n.phone})]}),g.jsxs(Bd,{children:[g.jsx(Vd,{children:"E-mail"}),g.jsx(Ud,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&g.jsx(Hd,{children:n.email})]})]})},KF=k.div`
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
`;k.h2`
  text-align: left;
  color: #fff;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
`;const QF=k.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,ZF=k.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  flex: 1;
`;k.form`
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
`;k.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;k.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;k.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #f58220; /* Помаранчевий колір з кнопки */
  }
`;k.div`
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
`;k.span`
  color: #e74c3c;
  font-size: 11px;
  margin-top: 4px;
  text-align: left;
  font-weight: 500;
`;k.button`
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
`;k.ul`
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
`;k.li`
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
`;k.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`;k.div`
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
`;k.button`
`;const JF=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return g.jsxs("div",{style:{marginBottom:"20px"},children:[g.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),g.jsx(mc,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&g.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},x1={}.VITE_NP_API_KEY,b1="https://api.novaposhta.ua/v2.0/json/",eN=()=>{const e=Et(R=>R.cart.items),t=Er(),n=Kn(),[r,i]=b.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[o,a]=b.useState(""),[l,s]=b.useState(null),[u,d]=b.useState(null),[c,y]=b.useState(null),[f,h]=b.useState(null),[v,w]=b.useState([]),[p,m]=b.useState([]),[x,S]=b.useState(null);console.log(x);const C=e.reduce((R,F)=>R+F.price*F.quantity,0),T=e.reduce((R,F)=>R+F.quantity,0),E=(()=>{const R=new Date().getFullYear().toString().slice(-2),F=Date.now().toString().slice(-4),P=Math.floor(100+Math.random()*900);return`${R}${F}${P}`})();console.log(E),b.useEffect(()=>{if(o.length<2)return;const R=setTimeout(async()=>{const P=await(await fetch(b1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:x1,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:o}})})).json();w(P.data.map($=>({value:$.Ref,label:$.Description})))},500);return()=>clearTimeout(R)},[o]),b.useEffect(()=>{if(!l||u!=="nova")return;(async()=>{const P=await(await fetch(b1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:x1,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:l.value}})})).json();m(P.data.map($=>({value:$.Ref,label:$.Description})))})()},[l,u]);const j=R=>{s(R),i(F=>({...F,city:(R==null?void 0:R.label)||"",postOffice:""})),d(null),y(null),h(null)},I=()=>{const R={};return r.fullName.trim().split(" ").length<2&&(R.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)||(R.email="Некоректний email"),r.phone.replace(/\D/g,"").length<12&&(R.phone="Номер неповний"),l||(R.city=!0),u==="nova"&&!c&&(R.postOffice=!0),u==="ukr"&&!f&&(R.postOffice=!0),u||(R.delivery=!0),x||(R.payment=!0),R},D=b.useMemo(I,[r,u,c,f,l,x]),O=Object.keys(D).length===0&&e.length>0,M=async R=>{if(R.preventDefault(),!x){alert("Оберіть спосіб оплати");return}try{if(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:r.fullName,phone:r.phone,email:r.email,city:r.city,products:e==null?void 0:e.map(P=>({id:P.id,name:P.name,quantity:P.quantity,price:P.price})),status_order:"pending",order_number:E,payment_method:x==="liqpay"?"Онлайн (LiqPay)":x==="cod"?"Післяплата":x==="bank_transfer"?"Оплата за реквізитами":"",delivery_method:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",delivery_address:u==="nova"?c==null?void 0:c.label:u==="ukr"?f:"Самовивіз"}})}),x==="liqpay"){const P=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:C,order_number:E})}),{data:$,signature:N}=await P.json(),B=document.createElement("form");B.method="POST",B.action="https://www.liqpay.ua/api/3/checkout",B.innerHTML=`
        <input type="hidden" name="data" value="${$}" />
        <input type="hidden" name="signature" value="${N}" />
      `,document.body.appendChild(B),B.requestSubmit();return}const F={...r,name:r.fullName,city:l.label,deliveryMethod:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",address:u==="nova"?c==null?void 0:c.label:u==="ukr"?f:"Самовивіз",products:e==null?void 0:e.map(P=>({id:P.id,name:P.name,quantity:P.quantity,price:P.price})),total:C,order_number:E,delivery_address:u==="nova"?c==null?void 0:c.label:u==="ukr"?f:"Самовивіз",payment_method:x==="liqpay"?"Онлайн (LiqPay)":x==="cod"?"Післяплата":x==="bank_transfer"?"Оплата за реквізитами":""};n(Qh()),t("/order-confirmation",{state:{order:F}})}catch(F){console.error(F),alert("Помилка оформлення")}},L=b.useMemo(()=>[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}],[]),A=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"},{value:"bank_transfer",label:"Оплата за реквізитами"}];return g.jsx(KF,{children:g.jsxs(QF,{children:[g.jsxs(ZF,{children:[g.jsx(XF,{formData:r,setFormData:i,errors:D}),g.jsx(yF,{cityOptions:v,selectedCity:l,onChange:j,onInputChange:a}),g.jsx(wF,{options:L,value:u,onChange:d,selectedCity:l}),g.jsx(SF,{deliveryMethod:u,officeOptions:p,selectedOffice:c,selectedUkrOffice:f,setSelectedOffice:y,setSelectedUkrOffice:h}),g.jsx(JF,{options:A,value:x,onChange:S,error:D.payment})]}),g.jsx(OF,{cartItems:e,totalAmount:C,totalQuantity:T,isFormValid:O,handleSubmit:M})]})})},tN=k.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,nN=k.h1`
font-family: var(--second-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,$r=k.p`
font-family: var(--second-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,rN=k.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,iN=k.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,oN=k.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,aN=k.li`
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
`;k.div`
  background: #fff4e5; 
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #ffe3c1;
`;const sN=k.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,w1=k.button`
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
`,lN=()=>{var y,f;const e=Er(),t=ni(),[n]=TC(),r=Kn(),i=(y=t.state)==null?void 0:y.order,o=n.get("orderId"),[a,l]=b.useState(i||null),[s,u]=b.useState(!i);b.useEffect(()=>{r(Qh())},[r]),b.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(h=>h.json()).then(h=>{var v;((v=h.data)==null?void 0:v.length)>0&&l(h.data[0]),u(!1)}).catch(()=>u(!1)):u(!1))},[o,i]),console.log(a);const c=((a==null?void 0:a.products)??[]).reduce((h,v)=>h+Number(v.price||0)*(v.quantity||1),0);return s?g.jsx("div",{children:"Завантаження..."}):a?g.jsxs(tN,{children:[g.jsx(nN,{children:"Дякуємо за ваше замовлення!"}),g.jsxs($r,{children:["Ваше замовлення ",g.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),g.jsx($r,{children:"Ми зв’яжемось з Вами в найближчий час"}),g.jsxs(rN,{children:[g.jsx(iN,{children:"Деталі замовлення:"}),g.jsx(oN,{children:(f=a.products)==null?void 0:f.map(h=>g.jsxs(aN,{children:[g.jsxs("span",{className:"item-info",children:[h.name," (x",h.quantity,")"]}),g.jsxs("span",{className:"item-price",children:[h.price*h.quantity," грн"]})]},h.id))}),g.jsxs($r,{children:[g.jsx("strong",{children:"На суму:"})," ",c," грн."]}),g.jsxs($r,{children:[g.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),g.jsxs($r,{children:[g.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),g.jsxs($r,{children:[g.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),g.jsxs($r,{children:[g.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),g.jsxs(sN,{children:[g.jsx(w1,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),g.jsx(w1,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):g.jsxs("div",{children:["Замовлення не знайдено",g.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},uN=k.section`
  background-color: var(--second-background);
`,cN=k.div`
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
`,dN=k.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,fN=k.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,pN=k.p`

  font-size: 16px;
  color: #666;
`,hN=k.section`
  margin-bottom: 50px;
`,mN=k.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,gN=k.section`
  margin-bottom: 60px;
`,vN=k.h2`
  margin-bottom: 30px;
`,yN=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Es=k.div`
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
`,xN=()=>g.jsxs(uN,{children:[g.jsxs(cN,{children:[g.jsxs(dN,{children:[g.jsx(fN,{children:"Про Дідів Хлів"}),g.jsx(pN,{children:"Даємо друге життя якісним велозапчастинам"})]}),g.jsxs(hN,{children:[g.jsx(mN,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),g.jsx(IS,{})]}),g.jsxs(gN,{children:[g.jsx(vN,{children:"Наша майстерня"}),g.jsxs(yN,{children:[g.jsx(Es,{color:"#e2e2e2",children:"Фото майстерні"}),g.jsx(Es,{color:"#d1d1d1",children:"Процес діагностики"}),g.jsx(Es,{color:"#bcbcbc",children:"Склад запчастин"}),g.jsx(Es,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),bN=()=>{const{pathname:e}=ni();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},wN=k.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,SN=k.div`
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
`,_N=k.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,CN=k.p`
  color: #585555;
  margin-bottom: 40px;
`,EN=k.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,kN=k.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,ks=k.div`
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
`,TN=k.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,PN=k.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,ON=k.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,MN=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,S1=k.a`
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
`;k.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;const jN=k.div`
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

 
`,$N=()=>g.jsx(wN,{children:g.jsxs(SN,{children:[g.jsx(_N,{children:"Контакти"}),g.jsx(CN,{children:"Зв’яжіться з нами для консультації або замовлення"}),g.jsxs(EN,{children:[g.jsxs(kN,{children:[g.jsxs(ks,{children:[g.jsx("h3",{children:"Адреса"}),g.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),g.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),g.jsxs(ks,{children:[g.jsx("h3",{children:"Телефон"}),g.jsx("p",{children:"+38 (097) 123-45-67"})]}),g.jsxs(ks,{children:[g.jsx("h3",{children:"Email"}),g.jsx("p",{children:"didivhliv.com"})]}),g.jsxs(ks,{children:[g.jsx("h3",{children:"Графік роботи"}),g.jsx("p",{children:"З 11:00 - 20:00"}),g.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),g.jsxs(TN,{children:[g.jsx(PN,{children:"Ми в соцмережах"}),g.jsx(ON,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),g.jsxs(MN,{children:[g.jsxs(S1,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[g.jsx("svg",{width:"20px",children:g.jsx("use",{href:`${un}#icon-instagram`})}),g.jsx("span",{children:"Instagram"})]}),g.jsxs(S1,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[g.jsx("svg",{width:"20px",children:g.jsx("use",{href:`${un}#icon-telegram`})}),g.jsx("span",{children:"Telegram"})]})]}),g.jsx(jN,{children:"Приєднуйся до спільноти!"})]})]})]})}),IN=k.section`
  background-color:  var(--second-background);
`,DN=k.div`
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
  
`,LN=k.div`
      display: flex;
    width: 100%;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
  
`,RN=k.h1`

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

`,AN=k.div`
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
`,FN=k.div`
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
`,NN=k.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;

`,zN=k.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,BN=k.p`
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
 
`,VN=k.p`
 font-size: 17px;
    font-weight: 800;
 
`;k.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;k.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`;const UN=k.div.attrs({className:"card-buttons"})`
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
`,HN=k.button`
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
`,WN=k.button`
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
`,GN=k.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
`,Wd=k.button`
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
`,YN=k.div`
  position: relative;
  display: inline-block;
  

`,qN=k.button`
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
`,XN=k.div`
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
`,mi=k.div`
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`,KN=k.div`
  height: 80vh;
          display: flex;
          flex-direction:
          column;
          justify-content: center;
          align-items: center;
          font-size: 30px;
`,QN=k.button`
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
  
`,ZN=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),i=Et(C=>C.favorites.items),o=Et(C=>C.cart.items),[a,l]=b.useState(!1),[s,u]=b.useState("date"),[d,c]=b.useState("asc"),[y,f]=b.useState(1),[h,v]=b.useState(1),w=Er(),p=Kn();b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[y]),b.useEffect(()=>{(async()=>{const T=new Date,_=new Date;_.setDate(T.getDate()-7);const E=_.toISOString();try{r(!0);const j=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${E}&pagination[page]=${y}&pagination[pageSize]=24`);if(!j.ok)throw new Error(`HTTP error! Status: ${j.status}`);const I=await j.json();t(I.data),v(I.meta.pagination.pageCount)}catch(j){console.error("Помилка при завантаженні продуктів:",j)}finally{r(!1)}})()},[y]);const m=b.useMemo(()=>{const C=[...e];switch(s){case"name":return C.sort((T,_)=>d==="asc"?T.name.localeCompare(_.name):_.name.localeCompare(T.name));case"price":return C.sort((T,_)=>d==="asc"?T.price-_.price:_.price-T.price);case"date":return C.sort((T,_)=>d==="asc"?new Date(T.createdAt)-new Date(_.createdAt):new Date(_.createdAt)-new Date(T.createdAt));default:return C}},[s,e,d]),x=(C,T)=>{T.stopPropagation();const _=o.find(j=>j.id===C.id);if((_?_.quantity:0)>=C.stock){J.error(`Вибачте, доступно лише ${C.stock} шт.`);return}p(Aa({...C,quantity:1})),J.success(`${C.name} додано в кошик!`)},S=(C,T)=>{T.stopPropagation();const _=i.some(E=>E.id===C.id);p(Ua(C)),_?J.warning(`${C.name} видалено з обраного`):J.info(`${C.name} додано в обране`)};return n?g.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:g.jsx(Yu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):m.length===0?g.jsxs(KN,{children:[g.jsx("p",{style:{textAlign:"center"},children:"Нажаль, нічого нового за останній тиждень"}),g.jsxs(QN,{href:"catalog",children:[g.jsx("p",{children:"Весь каталог"}),g.jsx(Hh,{size:24})]})]}):g.jsxs(IN,{children:[g.jsxs(DN,{children:[g.jsx(oo,{autoClose:1500}),g.jsxs(LN,{children:[g.jsx(RN,{children:"Нові товари"}),g.jsxs(YN,{children:[g.jsxs(qN,{onClick:()=>l(C=>!C),children:["Сортування",g.jsx(Uh,{strokeWidth:.9,size:22})]}),a&&g.jsxs(XN,{children:[g.jsx(mi,{onClick:()=>{u("name"),c("asc"),l(!1)},children:"А-Я"}),g.jsx(mi,{onClick:()=>{u("name"),c("desc"),l(!1)},children:"Я-А"}),g.jsx(mi,{onClick:()=>{u("price"),c("asc"),l(!1)},children:"Ціна ↑"}),g.jsx(mi,{onClick:()=>{u("price"),c("desc"),l(!1)},children:"Ціна ↓"}),g.jsx(mi,{onClick:()=>{u("date"),c("desc"),l(!1)},children:"Спочатку новіші"}),g.jsx(mi,{onClick:()=>{u("date"),c("asc"),l(!1)},children:"Спочатку старіші"})]})]})]}),g.jsx(AN,{children:m.map(C=>{var _,E;const T=i.some(j=>j.id===C.id);return g.jsxs(FN,{onClick:()=>w(`/product/${C.id}`),children:[g.jsx(NN,{src:(E=(_=C.images)==null?void 0:_[0])==null?void 0:E.url,alt:C.name}),g.jsx(BN,{children:C.name}),g.jsxs(zN,{children:[g.jsxs(VN,{children:[C.price," грн"]}),g.jsxs(UN,{children:[g.jsx(HN,{onClick:j=>x(C,j),children:g.jsx(La,{size:24,color:"black"})}),g.jsx(WN,{onClick:j=>S(C,j),children:g.jsx(Wh,{size:24,fill:T?"#ff4d4f":"none",color:T?"#ff4d4f":"#000000"})})]})]})]},C.id)})}),g.jsxs(GN,{children:[g.jsx(Wd,{onClick:()=>f(C=>Math.max(C-1,1)),disabled:y===1,children:"Назад"}),Array.from({length:h},(C,T)=>g.jsx(Wd,{onClick:()=>f(T+1),active:y===T+1,children:T+1},T)),g.jsx(Wd,{onClick:()=>f(C=>Math.min(C+1,h)),disabled:y===h,children:"Вперед"})]})]})," "]})};function JN(){return g.jsxs(wM,{children:[g.jsx(r5,{}),g.jsx(bN,{}),g.jsx(b.Suspense,{fallback:g.jsx(t5,{}),children:g.jsx(gC,{children:g.jsxs(ut,{path:"/",element:g.jsx(sO,{}),children:[g.jsx(ut,{index:!0,element:g.jsx(Q$,{})}),g.jsx(ut,{path:"catalog",element:g.jsx(mM,{})}),g.jsx(ut,{path:"/catalog/:category",element:g.jsx(oD,{})}),g.jsx(ut,{path:"/product/:id",element:g.jsx(SR,{})}),g.jsx(ut,{path:"cart",element:g.jsx(XR,{})}),g.jsx(ut,{path:"favorite",element:g.jsx(vA,{})}),g.jsx(ut,{path:"/catalog/new",element:g.jsx(ZN,{})}),g.jsx(ut,{path:"checkout",element:g.jsx(eN,{})}),g.jsx(ut,{path:"/order-confirmation",element:g.jsx(lN,{})}),g.jsx(ut,{path:"about",element:g.jsx(xN,{})}),g.jsx(ut,{path:"contacts",element:g.jsx($N,{})}),g.jsx(ut,{path:"delivery",element:g.jsx(_A,{})}),g.jsx(ut,{path:"*",element:g.jsx(bM,{})})]})})})]})}var Fm="persist:",X2="persist/FLUSH",Nm="persist/REHYDRATE",K2="persist/PAUSE",Q2="persist/PERSIST",Z2="persist/PURGE",J2="persist/REGISTER",ez=-1;function Js(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Js=function(n){return typeof n}:Js=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Js(e)}function _1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function tz(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_1(n,!0).forEach(function(r){nz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nz(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rz(e,t,n,r){r.debug;var i=tz({},n);return e&&Js(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function iz(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:Fm).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(C){return C}:typeof e.serialize=="function"?l=e.serialize:l=oz;var s=e.writeFailHandler||null,u={},d={},c=[],y=null,f=null,h=function(C){Object.keys(C).forEach(function(T){p(T)&&u[T]!==C[T]&&c.indexOf(T)===-1&&c.push(T)}),Object.keys(u).forEach(function(T){C[T]===void 0&&p(T)&&c.indexOf(T)===-1&&u[T]!==void 0&&c.push(T)}),y===null&&(y=setInterval(v,i)),u=C};function v(){if(c.length===0){y&&clearInterval(y),y=null;return}var S=c.shift(),C=r.reduce(function(T,_){return _.in(T,S,u)},u[S]);if(C!==void 0)try{d[S]=l(C)}catch(T){console.error("redux-persist/createPersistoid: error serializing state",T)}else delete d[S];c.length===0&&w()}function w(){Object.keys(d).forEach(function(S){u[S]===void 0&&delete d[S]}),f=a.setItem(o,l(d)).catch(m)}function p(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function m(S){s&&s(S)}var x=function(){for(;c.length!==0;)v();return f||Promise.resolve()};return{update:h,flush:x}}function oz(e){return JSON.stringify(e)}function az(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Fm).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=sz,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,d){return d.out(u,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function sz(e){return JSON.parse(e)}function lz(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Fm).concat(e.key);return t.removeItem(n,uz)}function uz(e){}function C1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function On(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?C1(n,!0).forEach(function(r){cz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cz(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dz(e,t){if(e==null)return{};var n=fz(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function fz(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var pz=5e3;function e_(e,t){var n=e.version!==void 0?e.version:ez;e.debug;var r=e.stateReconciler===void 0?rz:e.stateReconciler,i=e.getStoredState||az,o=e.timeout!==void 0?e.timeout:pz,a=null,l=!1,s=!0,u=function(c){return c._persist.rehydrated&&a&&!s&&a.update(c),c};return function(d,c){var y=d||{},f=y._persist,h=dz(y,["_persist"]),v=h;if(c.type===Q2){var w=!1,p=function(E,j){w||(c.rehydrate(e.key,E,j),w=!0)};if(o&&setTimeout(function(){!w&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=iz(e)),f)return On({},t(v,c),{_persist:f});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(e.key),i(e).then(function(_){var E=e.migrate||function(j,I){return Promise.resolve(j)};E(_,n).then(function(j){p(j)},function(j){p(void 0,j)})},function(_){p(void 0,_)}),On({},t(v,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===Z2)return l=!0,c.result(lz(e)),On({},t(v,c),{_persist:f});if(c.type===X2)return c.result(a&&a.flush()),On({},t(v,c),{_persist:f});if(c.type===K2)s=!0;else if(c.type===Nm){if(l)return On({},v,{_persist:On({},f,{rehydrated:!0})});if(c.key===e.key){var m=t(v,c),x=c.payload,S=r!==!1&&x!==void 0?r(x,d,m,e):m,C=On({},S,{_persist:On({},f,{rehydrated:!0})});return u(C)}}}if(!f)return t(d,c);var T=t(v,c);return T===v?d:u(On({},T,{_persist:f}))}}function E1(e){return gz(e)||mz(e)||hz()}function hz(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function mz(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function gz(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function k1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ip(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?k1(n,!0).forEach(function(r){vz(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vz(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var t_={registry:[],bootstrapped:!1},yz=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:t_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case J2:return Ip({},t,{registry:[].concat(E1(t.registry),[n.key])});case Nm:var r=t.registry.indexOf(n.key),i=E1(t.registry);return i.splice(r,1),Ip({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function xz(e,t,n){var r=n||!1,i=Yh(yz,t_,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:J2,key:u})},a=function(u,d,c){var y={type:Nm,payload:d,err:c,key:u};e.dispatch(y),i.dispatch(y),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Ip({},i,{purge:function(){var u=[];return e.dispatch({type:Z2,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:X2,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){e.dispatch({type:K2})},persist:function(){e.dispatch({type:Q2,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var zm={},Bm={};Bm.__esModule=!0;Bm.default=Sz;function el(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?el=function(n){return typeof n}:el=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},el(e)}function Gd(){}var bz={getItem:Gd,setItem:Gd,removeItem:Gd};function wz(e){if((typeof self>"u"?"undefined":el(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function Sz(e){var t="".concat(e,"Storage");return wz(t)?self[t]:bz}zm.__esModule=!0;zm.default=Ez;var _z=Cz(Bm);function Cz(e){return e&&e.__esModule?e:{default:e}}function Ez(e){var t=(0,_z.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var Vm=void 0,kz=Tz(zm);function Tz(e){return e&&e.__esModule?e:{default:e}}var Pz=(0,kz.default)("local");Vm=Pz;const Oz={key:"cart",storage:Vm},Mz={key:"favorites",storage:Vm},jz=e_(Oz,p4),$z=e_(Mz,rD),n_=QO({reducer:{cart:jz,favorites:$z},middleware:e=>e({serializableCheck:!1})});xz(n_);Zd.createRoot(document.getElementById("root")).render(g.jsx(yP,{store:n_,children:g.jsx(q.StrictMode,{children:g.jsx(_C,{basename:"/Didiv/",children:g.jsx(JN,{})})})}));
