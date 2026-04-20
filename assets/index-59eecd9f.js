function e_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function kt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var S1={exports:{}},Jl={},_1={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),t_=Symbol.for("react.portal"),n_=Symbol.for("react.fragment"),r_=Symbol.for("react.strict_mode"),i_=Symbol.for("react.profiler"),o_=Symbol.for("react.provider"),a_=Symbol.for("react.context"),s_=Symbol.for("react.forward_ref"),l_=Symbol.for("react.suspense"),u_=Symbol.for("react.memo"),c_=Symbol.for("react.lazy"),zm=Symbol.iterator;function d_(e){return e===null||typeof e!="object"?null:(e=zm&&e[zm]||e["@@iterator"],typeof e=="function"?e:null)}var E1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C1=Object.assign,k1={};function Xi(e,t,n){this.props=e,this.context=t,this.refs=k1,this.updater=n||E1}Xi.prototype.isReactComponent={};Xi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function T1(){}T1.prototype=Xi.prototype;function Ip(e,t,n){this.props=e,this.context=t,this.refs=k1,this.updater=n||E1}var jp=Ip.prototype=new T1;jp.constructor=Ip;C1(jp,Xi.prototype);jp.isPureReactComponent=!0;var Bm=Array.isArray,P1=Object.prototype.hasOwnProperty,Dp={current:null},O1={key:!0,ref:!0,__self:!0,__source:!0};function M1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)P1.call(t,r)&&!O1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ca,type:e,key:o,ref:a,props:i,_owner:Dp.current}}function f_(e,t){return{$$typeof:Ca,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ca}function p_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vm=/\/+/g;function vc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?p_(""+e.key):t.toString(36)}function Cs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ca:case t_:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+vc(a,0):r,Bm(i)?(n="",e!=null&&(n=e.replace(Vm,"$&/")+"/"),Cs(i,t,n,"",function(u){return u})):i!=null&&(Lp(i)&&(i=f_(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Vm,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Bm(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+vc(o,l);a+=Cs(o,t,n,s,i)}else if(s=d_(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+vc(o,l++),a+=Cs(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ga(e,t,n){if(e==null)return e;var r=[],i=0;return Cs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function h_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},ks={transition:null},m_={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:ks,ReactCurrentOwner:Dp};re.Children={map:Ga,forEach:function(e,t,n){Ga(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ga(e,function(){t++}),t},toArray:function(e){return Ga(e,function(t){return t})||[]},only:function(e){if(!Lp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Xi;re.Fragment=n_;re.Profiler=i_;re.PureComponent=Ip;re.StrictMode=r_;re.Suspense=l_;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m_;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=C1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Dp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)P1.call(t,s)&&!O1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ca,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:a_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o_,_context:e},e.Consumer=e};re.createElement=M1;re.createFactory=function(e){var t=M1.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:s_,render:e}};re.isValidElement=Lp;re.lazy=function(e){return{$$typeof:c_,_payload:{_status:-1,_result:e},_init:h_}};re.memo=function(e,t){return{$$typeof:u_,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=ks.transition;ks.transition={};try{e()}finally{ks.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return ht.current.useCallback(e,t)};re.useContext=function(e){return ht.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};re.useEffect=function(e,t){return ht.current.useEffect(e,t)};re.useId=function(){return ht.current.useId()};re.useImperativeHandle=function(e,t,n){return ht.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return ht.current.useMemo(e,t)};re.useReducer=function(e,t,n){return ht.current.useReducer(e,t,n)};re.useRef=function(e){return ht.current.useRef(e)};re.useState=function(e){return ht.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return ht.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return ht.current.useTransition()};re.version="18.2.0";_1.exports=re;var b=_1.exports;const q=$p(b),Ud=e_({__proto__:null,default:q},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_=b,v_=Symbol.for("react.element"),y_=Symbol.for("react.fragment"),x_=Object.prototype.hasOwnProperty,b_=g_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w_={key:!0,ref:!0,__self:!0,__source:!0};function $1(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)x_.call(t,r)&&!w_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:v_,type:e,key:o,ref:a,props:i,_owner:b_.current}}Jl.Fragment=y_;Jl.jsx=$1;Jl.jsxs=$1;S1.exports=Jl;var y=S1.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xo.apply(this,arguments)}var sr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sr||(sr={}));const Hm="popstate";function S_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Wd("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Js(i)}return E_(t,n,null,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function __(){return Math.random().toString(36).substr(2,8)}function Um(e,t){return{usr:e.state,key:e.key,idx:t}}function Wd(e,t,n,r){return n===void 0&&(n=null),Xo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ki(t):t,{state:n,key:t&&t.key||r||__()})}function Js(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ki(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function E_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=sr.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(Xo({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){l=sr.Pop;let w=c(),f=w==null?null:w-u;u=w,s&&s({action:l,location:v.location,delta:f})}function g(w,f){l=sr.Push;let m=Wd(v.location,w,f);n&&n(m,w),u=c()+1;let x=Um(m,u),S=v.createHref(m);try{a.pushState(x,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}o&&s&&s({action:l,location:v.location,delta:1})}function p(w,f){l=sr.Replace;let m=Wd(v.location,w,f);n&&n(m,w),u=c();let x=Um(m,u),S=v.createHref(m);a.replaceState(x,"",S),o&&s&&s({action:l,location:v.location,delta:0})}function h(w){let f=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:Js(w);return Le(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let v={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Hm,d),s=w,()=>{i.removeEventListener(Hm,d),s=null}},createHref(w){return t(i,w)},createURL:h,encodeLocation(w){let f=h(w);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:p,go(w){return a.go(w)}};return v}var Wm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Wm||(Wm={}));function C_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ki(t):t,i=Ap(r.pathname||"/",n);if(i==null)return null;let o=I1(e);k_(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=L_(o[l],F_(i));return a}function I1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Le(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=fr([r,s.relativePath]),c=n.concat(s);o.children&&o.children.length>0&&(Le(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),I1(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:j_(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of j1(o.path))i(o,a,s)}),t}function j1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=j1(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function k_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:D_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const T_=/^:\w+$/,P_=3,O_=2,M_=1,$_=10,I_=-2,Gm=e=>e==="*";function j_(e,t){let n=e.split("/"),r=n.length;return n.some(Gm)&&(r+=I_),t&&(r+=O_),n.filter(i=>!Gm(i)).reduce((i,o)=>i+(T_.test(o)?P_:o===""?M_:$_),r)}function D_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function L_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=R_({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;o.push({params:r,pathname:fr([i,c.pathname]),pathnameBase:V_(fr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=fr([i,c.pathnameBase]))}return o}function R_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=A_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let g=l[d]||"";a=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}return u[c]=N_(l[d]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function A_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Rp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function F_(e){try{return decodeURI(e)}catch(t){return Rp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function N_(e,t){try{return decodeURIComponent(e)}catch(n){return Rp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ap(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function z_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ki(e):e;return{pathname:n?n.startsWith("/")?n:B_(n,t):t,search:H_(r),hash:U_(i)}}function B_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function D1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function L1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ki(e):(i=Xo({},e),Le(!i.pathname||!i.pathname.includes("?"),yc("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),yc("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),yc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}l=d>=0?t[d]:"/"}let s=z_(i,l),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const fr=e=>e.join("/").replace(/\/\/+/g,"/"),V_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),H_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,U_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function W_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const R1=["post","put","patch","delete"];new Set(R1);const G_=["get",...R1];new Set(G_);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},el.apply(this,arguments)}const Fp=b.createContext(null),Y_=b.createContext(null),Zi=b.createContext(null),eu=b.createContext(null),qn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),A1=b.createContext(null);function q_(e,t){let{relative:n}=t===void 0?{}:t;ka()||Le(!1);let{basename:r,navigator:i}=b.useContext(Zi),{hash:o,pathname:a,search:l}=z1(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:fr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function ka(){return b.useContext(eu)!=null}function ti(){return ka()||Le(!1),b.useContext(eu).location}function F1(e){b.useContext(Zi).static||b.useLayoutEffect(e)}function Qi(){let{isDataRoute:e}=b.useContext(qn);return e?uE():X_()}function X_(){ka()||Le(!1);let e=b.useContext(Fp),{basename:t,navigator:n}=b.useContext(Zi),{matches:r}=b.useContext(qn),{pathname:i}=ti(),o=JSON.stringify(D1(r).map(s=>s.pathnameBase)),a=b.useRef(!1);return F1(()=>{a.current=!0}),b.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let c=L1(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:fr([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}const K_=b.createContext(null);function Z_(e){let t=b.useContext(qn).outlet;return t&&b.createElement(K_.Provider,{value:e},t)}function N1(){let{matches:e}=b.useContext(qn),t=e[e.length-1];return t?t.params:{}}function z1(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(qn),{pathname:i}=ti(),o=JSON.stringify(D1(r).map(a=>a.pathnameBase));return b.useMemo(()=>L1(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Q_(e,t){return J_(e,t)}function J_(e,t,n){ka()||Le(!1);let{navigator:r}=b.useContext(Zi),{matches:i}=b.useContext(qn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=ti(),u;if(t){var c;let v=typeof t=="string"?Ki(t):t;l==="/"||(c=v.pathname)!=null&&c.startsWith(l)||Le(!1),u=v}else u=s;let d=u.pathname||"/",g=l==="/"?d:d.slice(l.length)||"/",p=C_(e,{pathname:g}),h=iE(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:fr([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:fr([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&h?b.createElement(eu.Provider,{value:{location:el({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:sr.Pop}},h):h}function eE(){let e=lE(),t=W_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const tE=b.createElement(eE,null);class nE extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(qn.Provider,{value:this.props.routeContext},b.createElement(A1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rE(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Fp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(qn.Provider,{value:t},r)}function iE(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Le(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let c=s.route.id?a==null?void 0:a[s.route.id]:null,d=null;n&&(d=s.route.errorElement||tE);let g=t.concat(o.slice(0,u+1)),p=()=>{let h;return c?h=d:s.route.Component?h=b.createElement(s.route.Component,null):s.route.element?h=s.route.element:h=l,b.createElement(rE,{match:s,routeContext:{outlet:l,matches:g,isDataRoute:n!=null},children:h})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?b.createElement(nE,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var B1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(B1||{}),tl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(tl||{});function oE(e){let t=b.useContext(Fp);return t||Le(!1),t}function aE(e){let t=b.useContext(Y_);return t||Le(!1),t}function sE(e){let t=b.useContext(qn);return t||Le(!1),t}function V1(e){let t=sE(),n=t.matches[t.matches.length-1];return n.route.id||Le(!1),n.route.id}function lE(){var e;let t=b.useContext(A1),n=aE(tl.UseRouteError),r=V1(tl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function uE(){let{router:e}=oE(B1.UseNavigateStable),t=V1(tl.UseNavigateStable),n=b.useRef(!1);return F1(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,el({fromRouteId:t},o)))},[e,t])}function cE(e){return Z_(e.context)}function ut(e){Le(!1)}function dE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=sr.Pop,navigator:o,static:a=!1}=e;ka()&&Le(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=Ki(r));let{pathname:u="/",search:c="",hash:d="",state:g=null,key:p="default"}=r,h=b.useMemo(()=>{let v=Ap(u,l);return v==null?null:{location:{pathname:v,search:c,hash:d,state:g,key:p},navigationType:i}},[l,u,c,d,g,p,i]);return h==null?null:b.createElement(Zi.Provider,{value:s},b.createElement(eu.Provider,{children:n,value:h}))}function fE(e){let{children:t,location:n}=e;return Q_(Gd(t),n)}new Promise(()=>{});function Gd(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Gd(r.props.children,o));return}r.type!==ut&&Le(!1),!r.props.index||!r.props.children||Le(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Gd(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yd(){return Yd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yd.apply(this,arguments)}function pE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function hE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mE(e,t){return e.button===0&&(!t||t==="_self")&&!hE(e)}function qd(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function gE(e,t){let n=qd(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const vE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],yE="startTransition",Ym=Ud[yE];function xE(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=S_({window:i,v5Compat:!0}));let a=o.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=b.useCallback(d=>{u&&Ym?Ym(()=>s(d)):s(d)},[s,u]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(dE,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const bE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Me=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:c}=t,d=pE(t,vE),{basename:g}=b.useContext(Zi),p,h=!1;if(typeof u=="string"&&wE.test(u)&&(p=u,bE))try{let m=new URL(window.location.href),x=u.startsWith("//")?new URL(m.protocol+u):new URL(u),S=Ap(x.pathname,g);x.origin===m.origin&&S!=null?u=S+x.search+x.hash:h=!0}catch{}let v=q_(u,{relative:i}),w=SE(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:i});function f(m){r&&r(m),m.defaultPrevented||w(m)}return b.createElement("a",Yd({},d,{href:p||v,onClick:h||o?r:f,ref:n,target:s}))});var qm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(qm||(qm={}));var Xm;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Xm||(Xm={}));function SE(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Qi(),s=ti(),u=z1(e,{relative:a});return b.useCallback(c=>{if(mE(c,n)){c.preventDefault();let d=r!==void 0?r:Js(s)===Js(u);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}function _E(e){let t=b.useRef(qd(e)),n=b.useRef(!1),r=ti(),i=b.useMemo(()=>gE(r.search,n.current?null:t.current),[r.search]),o=Qi(),a=b.useCallback((l,s)=>{const u=qd(typeof l=="function"?l(i):l);n.current=!0,o("?"+u,s)},[o,i]);return[i,a]}var Xd={},H1={exports:{}},Ft={},U1={exports:{}},W1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,j){var A=P.length;P.push(j);e:for(;0<A;){var B=A-1>>>1,z=P[B];if(0<i(z,j))P[B]=j,P[A]=z,A=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],A=P.pop();if(A!==j){P[0]=A;e:for(var B=0,z=P.length,H=z>>>1;B<H;){var G=2*(B+1)-1,W=P[G],X=G+1,ee=P[X];if(0>i(W,A))X<z&&0>i(ee,W)?(P[B]=ee,P[X]=A,B=X):(P[B]=W,P[G]=A,B=G);else if(X<z&&0>i(ee,A))P[B]=ee,P[X]=A,B=X;else break e}}return j}function i(P,j){var A=P.sortIndex-j.sortIndex;return A!==0?A:P.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,d=null,g=3,p=!1,h=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=P)r(u),j.sortIndex=j.expirationTime,t(s,j);else break;j=n(u)}}function S(P){if(v=!1,x(P),!h)if(n(s)!==null)h=!0,N(E);else{var j=n(u);j!==null&&F(S,j.startTime-P)}}function E(P,j){h=!1,v&&(v=!1,f(C),C=-1),p=!0;var A=g;try{for(x(j),d=n(s);d!==null&&(!(d.expirationTime>j)||P&&!I());){var B=d.callback;if(typeof B=="function"){d.callback=null,g=d.priorityLevel;var z=B(d.expirationTime<=j);j=e.unstable_now(),typeof z=="function"?d.callback=z:d===n(s)&&r(s),x(j)}else r(s);d=n(s)}if(d!==null)var H=!0;else{var G=n(u);G!==null&&F(S,G.startTime-j),H=!1}return H}finally{d=null,g=A,p=!1}}var k=!1,_=null,C=-1,O=5,M=-1;function I(){return!(e.unstable_now()-M<O)}function $(){if(_!==null){var P=e.unstable_now();M=P;var j=!0;try{j=_(!0,P)}finally{j?D():(k=!1,_=null)}}else k=!1}var D;if(typeof m=="function")D=function(){m($)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,L=R.port2;R.port1.onmessage=$,D=function(){L.postMessage(null)}}else D=function(){w($,0)};function N(P){_=P,k||(k=!0,D())}function F(P,j){C=w(function(){P(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){h||p||(h=!0,N(E))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var j=3;break;default:j=g}var A=g;g=j;try{return P()}finally{g=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var A=g;g=P;try{return j()}finally{g=A}},e.unstable_scheduleCallback=function(P,j,A){var B=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?B+A:B):A=B,P){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=A+z,P={id:c++,callback:j,priorityLevel:P,startTime:A,expirationTime:z,sortIndex:-1},A>B?(P.sortIndex=A,t(u,P),n(s)===null&&P===n(u)&&(v?(f(C),C=-1):v=!0,F(S,A-B))):(P.sortIndex=z,t(s,P),h||p||(h=!0,N(E))),P},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(P){var j=g;return function(){var A=g;g=j;try{return P.apply(this,arguments)}finally{g=A}}}})(W1);U1.exports=W1;var EE=U1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1=b,Rt=EE;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y1=new Set,Ko={};function ni(e,t){ji(e,t),ji(e+"Capture",t)}function ji(e,t){for(Ko[e]=t,e=0;e<t.length;e++)Y1.add(t[e])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kd=Object.prototype.hasOwnProperty,CE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Km={},Zm={};function kE(e){return Kd.call(Zm,e)?!0:Kd.call(Km,e)?!1:CE.test(e)?Zm[e]=!0:(Km[e]=!0,!1)}function TE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function PE(e,t,n,r){if(t===null||typeof t>"u"||TE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function mt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Np=/[\-:]([a-z])/g;function zp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Np,zp);Qe[t]=new mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Np,zp);Qe[t]=new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Np,zp);Qe[t]=new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new mt(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bp(e,t,n,r){var i=Qe.hasOwnProperty(t)?Qe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(PE(t,n,i,r)&&(n=null),r||i===null?kE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xn=G1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),pi=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),Vp=Symbol.for("react.strict_mode"),Zd=Symbol.for("react.profiler"),q1=Symbol.for("react.provider"),X1=Symbol.for("react.context"),Hp=Symbol.for("react.forward_ref"),Qd=Symbol.for("react.suspense"),Jd=Symbol.for("react.suspense_list"),Up=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),K1=Symbol.for("react.offscreen"),Qm=Symbol.iterator;function po(e){return e===null||typeof e!="object"?null:(e=Qm&&e[Qm]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,xc;function To(e){if(xc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xc=t&&t[1]||""}return`
`+xc+e}var bc=!1;function wc(e,t){if(!e||bc)return"";bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{bc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?To(e):""}function OE(e){switch(e.tag){case 5:return To(e.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return e=wc(e.type,!1),e;case 11:return e=wc(e.type.render,!1),e;case 1:return e=wc(e.type,!0),e;default:return""}}function ef(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hi:return"Fragment";case pi:return"Portal";case Zd:return"Profiler";case Vp:return"StrictMode";case Qd:return"Suspense";case Jd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case X1:return(e.displayName||"Context")+".Consumer";case q1:return(e._context.displayName||"Context")+".Provider";case Hp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Up:return t=e.displayName||null,t!==null?t:ef(e.type)||"Memo";case rr:t=e._payload,e=e._init;try{return ef(e(t))}catch{}}return null}function ME(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ef(t);case 8:return t===Vp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Z1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $E(e){var t=Z1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qa(e){e._valueTracker||(e._valueTracker=$E(e))}function Q1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Z1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function tf(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Jm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Sr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function J1(e,t){t=t.checked,t!=null&&Bp(e,"checked",t,!1)}function nf(e,t){J1(e,t);var n=Sr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?rf(e,t.type,n):t.hasOwnProperty("defaultValue")&&rf(e,t.type,Sr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function eg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function rf(e,t,n){(t!=="number"||nl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Po=Array.isArray;function Ci(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Sr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function of(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tg(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(Po(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sr(n)}}function ey(e,t){var n=Sr(t.value),r=Sr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ng(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ty(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function af(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ty(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xa,ny=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IE=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(e){IE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ro[t]=Ro[e]})});function ry(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ro.hasOwnProperty(e)&&Ro[e]?(""+t).trim():t+"px"}function iy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ry(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var jE=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sf(e,t){if(t){if(jE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function lf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uf=null;function Wp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cf=null,ki=null,Ti=null;function rg(e){if(e=Oa(e)){if(typeof cf!="function")throw Error(V(280));var t=e.stateNode;t&&(t=ou(t),cf(e.stateNode,e.type,t))}}function oy(e){ki?Ti?Ti.push(e):Ti=[e]:ki=e}function ay(){if(ki){var e=ki,t=Ti;if(Ti=ki=null,rg(e),t)for(e=0;e<t.length;e++)rg(t[e])}}function sy(e,t){return e(t)}function ly(){}var Sc=!1;function uy(e,t,n){if(Sc)return e(t,n);Sc=!0;try{return sy(e,t,n)}finally{Sc=!1,(ki!==null||Ti!==null)&&(ly(),ay())}}function Qo(e,t){var n=e.stateNode;if(n===null)return null;var r=ou(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var df=!1;if(Vn)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){df=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{df=!1}function DE(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ao=!1,rl=null,il=!1,ff=null,LE={onError:function(e){Ao=!0,rl=e}};function RE(e,t,n,r,i,o,a,l,s){Ao=!1,rl=null,DE.apply(LE,arguments)}function AE(e,t,n,r,i,o,a,l,s){if(RE.apply(this,arguments),Ao){if(Ao){var u=rl;Ao=!1,rl=null}else throw Error(V(198));il||(il=!0,ff=u)}}function ri(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ig(e){if(ri(e)!==e)throw Error(V(188))}function FE(e){var t=e.alternate;if(!t){if(t=ri(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ig(i),e;if(o===r)return ig(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function dy(e){return e=FE(e),e!==null?fy(e):null}function fy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fy(e);if(t!==null)return t;e=e.sibling}return null}var py=Rt.unstable_scheduleCallback,og=Rt.unstable_cancelCallback,NE=Rt.unstable_shouldYield,zE=Rt.unstable_requestPaint,Oe=Rt.unstable_now,BE=Rt.unstable_getCurrentPriorityLevel,Gp=Rt.unstable_ImmediatePriority,hy=Rt.unstable_UserBlockingPriority,ol=Rt.unstable_NormalPriority,VE=Rt.unstable_LowPriority,my=Rt.unstable_IdlePriority,tu=null,Sn=null;function HE(e){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(tu,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:GE,UE=Math.log,WE=Math.LN2;function GE(e){return e>>>=0,e===0?32:31-(UE(e)/WE|0)|0}var Ka=64,Za=4194304;function Oo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function al(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Oo(l):(o&=a,o!==0&&(r=Oo(o)))}else a=n&~i,a!==0?r=Oo(a):o!==0&&(r=Oo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-an(t),i=1<<n,r|=e[n],t&=~i;return r}function YE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-an(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=YE(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function pf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gy(){var e=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),e}function _c(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ta(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=n}function XE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-an(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Yp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var he=0;function vy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yy,qp,xy,by,wy,hf=!1,Qa=[],pr=null,hr=null,mr=null,Jo=new Map,ea=new Map,or=[],KE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ag(e,t){switch(e){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(t.pointerId)}}function mo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Oa(t),t!==null&&qp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ZE(e,t,n,r,i){switch(t){case"focusin":return pr=mo(pr,e,t,n,r,i),!0;case"dragenter":return hr=mo(hr,e,t,n,r,i),!0;case"mouseover":return mr=mo(mr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Jo.set(o,mo(Jo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ea.set(o,mo(ea.get(o)||null,e,t,n,r,i)),!0}return!1}function Sy(e){var t=Fr(e.target);if(t!==null){var n=ri(t);if(n!==null){if(t=n.tag,t===13){if(t=cy(n),t!==null){e.blockedOn=t,wy(e.priority,function(){xy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);uf=r,n.target.dispatchEvent(r),uf=null}else return t=Oa(n),t!==null&&qp(t),e.blockedOn=n,!1;t.shift()}return!0}function sg(e,t,n){Ts(e)&&n.delete(t)}function QE(){hf=!1,pr!==null&&Ts(pr)&&(pr=null),hr!==null&&Ts(hr)&&(hr=null),mr!==null&&Ts(mr)&&(mr=null),Jo.forEach(sg),ea.forEach(sg)}function go(e,t){e.blockedOn===t&&(e.blockedOn=null,hf||(hf=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,QE)))}function ta(e){function t(i){return go(i,e)}if(0<Qa.length){go(Qa[0],e);for(var n=1;n<Qa.length;n++){var r=Qa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pr!==null&&go(pr,e),hr!==null&&go(hr,e),mr!==null&&go(mr,e),Jo.forEach(t),ea.forEach(t),n=0;n<or.length;n++)r=or[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)Sy(n),n.blockedOn===null&&or.shift()}var Pi=Xn.ReactCurrentBatchConfig,sl=!0;function JE(e,t,n,r){var i=he,o=Pi.transition;Pi.transition=null;try{he=1,Xp(e,t,n,r)}finally{he=i,Pi.transition=o}}function eC(e,t,n,r){var i=he,o=Pi.transition;Pi.transition=null;try{he=4,Xp(e,t,n,r)}finally{he=i,Pi.transition=o}}function Xp(e,t,n,r){if(sl){var i=mf(e,t,n,r);if(i===null)jc(e,t,r,ll,n),ag(e,r);else if(ZE(i,e,t,n,r))r.stopPropagation();else if(ag(e,r),t&4&&-1<KE.indexOf(e)){for(;i!==null;){var o=Oa(i);if(o!==null&&yy(o),o=mf(e,t,n,r),o===null&&jc(e,t,r,ll,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else jc(e,t,r,null,n)}}var ll=null;function mf(e,t,n,r){if(ll=null,e=Wp(r),e=Fr(e),e!==null)if(t=ri(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ll=e,null}function _y(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BE()){case Gp:return 1;case hy:return 4;case ol:case VE:return 16;case my:return 536870912;default:return 16}default:return 16}}var lr=null,Kp=null,Ps=null;function Ey(){if(Ps)return Ps;var e,t=Kp,n=t.length,r,i="value"in lr?lr.value:lr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ps=i.slice(e,1<r?1-r:void 0)}function Os(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ja(){return!0}function lg(){return!1}function Nt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ja:lg,this.isPropagationStopped=lg,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),t}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zp=Nt(Ji),Pa=ke({},Ji,{view:0,detail:0}),tC=Nt(Pa),Ec,Cc,vo,nu=ke({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vo&&(vo&&e.type==="mousemove"?(Ec=e.screenX-vo.screenX,Cc=e.screenY-vo.screenY):Cc=Ec=0,vo=e),Ec)},movementY:function(e){return"movementY"in e?e.movementY:Cc}}),ug=Nt(nu),nC=ke({},nu,{dataTransfer:0}),rC=Nt(nC),iC=ke({},Pa,{relatedTarget:0}),kc=Nt(iC),oC=ke({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),aC=Nt(oC),sC=ke({},Ji,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lC=Nt(sC),uC=ke({},Ji,{data:0}),cg=Nt(uC),cC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fC[e])?!!t[e]:!1}function Qp(){return pC}var hC=ke({},Pa,{key:function(e){if(e.key){var t=cC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qp,charCode:function(e){return e.type==="keypress"?Os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mC=Nt(hC),gC=ke({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dg=Nt(gC),vC=ke({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qp}),yC=Nt(vC),xC=ke({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),bC=Nt(xC),wC=ke({},nu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),SC=Nt(wC),_C=[9,13,27,32],Jp=Vn&&"CompositionEvent"in window,Fo=null;Vn&&"documentMode"in document&&(Fo=document.documentMode);var EC=Vn&&"TextEvent"in window&&!Fo,Cy=Vn&&(!Jp||Fo&&8<Fo&&11>=Fo),fg=String.fromCharCode(32),pg=!1;function ky(e,t){switch(e){case"keyup":return _C.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ty(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mi=!1;function CC(e,t){switch(e){case"compositionend":return Ty(t);case"keypress":return t.which!==32?null:(pg=!0,fg);case"textInput":return e=t.data,e===fg&&pg?null:e;default:return null}}function kC(e,t){if(mi)return e==="compositionend"||!Jp&&ky(e,t)?(e=Ey(),Ps=Kp=lr=null,mi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cy&&t.locale!=="ko"?null:t.data;default:return null}}var TC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!TC[e.type]:t==="textarea"}function Py(e,t,n,r){oy(r),t=ul(t,"onChange"),0<t.length&&(n=new Zp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var No=null,na=null;function PC(e){Ny(e,0)}function ru(e){var t=yi(e);if(Q1(t))return e}function OC(e,t){if(e==="change")return t}var Oy=!1;if(Vn){var Tc;if(Vn){var Pc="oninput"in document;if(!Pc){var mg=document.createElement("div");mg.setAttribute("oninput","return;"),Pc=typeof mg.oninput=="function"}Tc=Pc}else Tc=!1;Oy=Tc&&(!document.documentMode||9<document.documentMode)}function gg(){No&&(No.detachEvent("onpropertychange",My),na=No=null)}function My(e){if(e.propertyName==="value"&&ru(na)){var t=[];Py(t,na,e,Wp(e)),uy(PC,t)}}function MC(e,t,n){e==="focusin"?(gg(),No=t,na=n,No.attachEvent("onpropertychange",My)):e==="focusout"&&gg()}function $C(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ru(na)}function IC(e,t){if(e==="click")return ru(t)}function jC(e,t){if(e==="input"||e==="change")return ru(t)}function DC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var cn=typeof Object.is=="function"?Object.is:DC;function ra(e,t){if(cn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kd.call(t,i)||!cn(e[i],t[i]))return!1}return!0}function vg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yg(e,t){var n=vg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vg(n)}}function $y(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$y(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Iy(){for(var e=window,t=nl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nl(e.document)}return t}function eh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function LC(e){var t=Iy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$y(n.ownerDocument.documentElement,n)){if(r!==null&&eh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=yg(n,o);var a=yg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var RC=Vn&&"documentMode"in document&&11>=document.documentMode,gi=null,gf=null,zo=null,vf=!1;function xg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vf||gi==null||gi!==nl(r)||(r=gi,"selectionStart"in r&&eh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zo&&ra(zo,r)||(zo=r,r=ul(gf,"onSelect"),0<r.length&&(t=new Zp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gi)))}function es(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vi={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionend:es("Transition","TransitionEnd")},Oc={},jy={};Vn&&(jy=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function iu(e){if(Oc[e])return Oc[e];if(!vi[e])return e;var t=vi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jy)return Oc[e]=t[n];return e}var Dy=iu("animationend"),Ly=iu("animationiteration"),Ry=iu("animationstart"),Ay=iu("transitionend"),Fy=new Map,bg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(e,t){Fy.set(e,t),ni(t,[e])}for(var Mc=0;Mc<bg.length;Mc++){var $c=bg[Mc],AC=$c.toLowerCase(),FC=$c[0].toUpperCase()+$c.slice(1);Cr(AC,"on"+FC)}Cr(Dy,"onAnimationEnd");Cr(Ly,"onAnimationIteration");Cr(Ry,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(Ay,"onTransitionEnd");ji("onMouseEnter",["mouseout","mouseover"]);ji("onMouseLeave",["mouseout","mouseover"]);ji("onPointerEnter",["pointerout","pointerover"]);ji("onPointerLeave",["pointerout","pointerover"]);ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function wg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,AE(r,t,void 0,e),e.currentTarget=null}function Ny(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;wg(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;wg(i,l,u),o=s}}}if(il)throw e=ff,il=!1,ff=null,e}function ve(e,t){var n=t[Sf];n===void 0&&(n=t[Sf]=new Set);var r=e+"__bubble";n.has(r)||(zy(t,e,2,!1),n.add(r))}function Ic(e,t,n){var r=0;t&&(r|=4),zy(n,e,r,t)}var ts="_reactListening"+Math.random().toString(36).slice(2);function ia(e){if(!e[ts]){e[ts]=!0,Y1.forEach(function(n){n!=="selectionchange"&&(NC.has(n)||Ic(n,!1,e),Ic(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ts]||(t[ts]=!0,Ic("selectionchange",!1,t))}}function zy(e,t,n,r){switch(_y(t)){case 1:var i=JE;break;case 4:i=eC;break;default:i=Xp}n=i.bind(null,t,n,e),i=void 0,!df||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function jc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Fr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}uy(function(){var u=o,c=Wp(n),d=[];e:{var g=Fy.get(e);if(g!==void 0){var p=Zp,h=e;switch(e){case"keypress":if(Os(n)===0)break e;case"keydown":case"keyup":p=mC;break;case"focusin":h="focus",p=kc;break;case"focusout":h="blur",p=kc;break;case"beforeblur":case"afterblur":p=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=rC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=yC;break;case Dy:case Ly:case Ry:p=aC;break;case Ay:p=bC;break;case"scroll":p=tC;break;case"wheel":p=SC;break;case"copy":case"cut":case"paste":p=lC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=dg}var v=(t&4)!==0,w=!v&&e==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var m=u,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,f!==null&&(S=Qo(m,f),S!=null&&v.push(oa(m,S,x)))),w)break;m=m.return}0<v.length&&(g=new p(g,h,null,n,c),d.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",g&&n!==uf&&(h=n.relatedTarget||n.fromElement)&&(Fr(h)||h[Hn]))break e;if((p||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,p?(h=n.relatedTarget||n.toElement,p=u,h=h?Fr(h):null,h!==null&&(w=ri(h),h!==w||h.tag!==5&&h.tag!==6)&&(h=null)):(p=null,h=u),p!==h)){if(v=ug,S="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=dg,S="onPointerLeave",f="onPointerEnter",m="pointer"),w=p==null?g:yi(p),x=h==null?g:yi(h),g=new v(S,m+"leave",p,n,c),g.target=w,g.relatedTarget=x,S=null,Fr(c)===u&&(v=new v(f,m+"enter",h,n,c),v.target=x,v.relatedTarget=w,S=v),w=S,p&&h)t:{for(v=p,f=h,m=0,x=v;x;x=ai(x))m++;for(x=0,S=f;S;S=ai(S))x++;for(;0<m-x;)v=ai(v),m--;for(;0<x-m;)f=ai(f),x--;for(;m--;){if(v===f||f!==null&&v===f.alternate)break t;v=ai(v),f=ai(f)}v=null}else v=null;p!==null&&Sg(d,g,p,v,!1),h!==null&&w!==null&&Sg(d,w,h,v,!0)}}e:{if(g=u?yi(u):window,p=g.nodeName&&g.nodeName.toLowerCase(),p==="select"||p==="input"&&g.type==="file")var E=OC;else if(hg(g))if(Oy)E=jC;else{E=$C;var k=MC}else(p=g.nodeName)&&p.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=IC);if(E&&(E=E(e,u))){Py(d,E,n,c);break e}k&&k(e,g,u),e==="focusout"&&(k=g._wrapperState)&&k.controlled&&g.type==="number"&&rf(g,"number",g.value)}switch(k=u?yi(u):window,e){case"focusin":(hg(k)||k.contentEditable==="true")&&(gi=k,gf=u,zo=null);break;case"focusout":zo=gf=gi=null;break;case"mousedown":vf=!0;break;case"contextmenu":case"mouseup":case"dragend":vf=!1,xg(d,n,c);break;case"selectionchange":if(RC)break;case"keydown":case"keyup":xg(d,n,c)}var _;if(Jp)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else mi?ky(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Cy&&n.locale!=="ko"&&(mi||C!=="onCompositionStart"?C==="onCompositionEnd"&&mi&&(_=Ey()):(lr=c,Kp="value"in lr?lr.value:lr.textContent,mi=!0)),k=ul(u,C),0<k.length&&(C=new cg(C,e,null,n,c),d.push({event:C,listeners:k}),_?C.data=_:(_=Ty(n),_!==null&&(C.data=_)))),(_=EC?CC(e,n):kC(e,n))&&(u=ul(u,"onBeforeInput"),0<u.length&&(c=new cg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=_))}Ny(d,t)})}function oa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ul(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Qo(e,n),o!=null&&r.unshift(oa(e,o,i)),o=Qo(e,t),o!=null&&r.push(oa(e,o,i))),e=e.return}return r}function ai(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Qo(n,o),s!=null&&a.unshift(oa(n,s,l))):i||(s=Qo(n,o),s!=null&&a.push(oa(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var zC=/\r\n?/g,BC=/\u0000|\uFFFD/g;function _g(e){return(typeof e=="string"?e:""+e).replace(zC,`
`).replace(BC,"")}function ns(e,t,n){if(t=_g(t),_g(e)!==t&&n)throw Error(V(425))}function cl(){}var yf=null,xf=null;function bf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wf=typeof setTimeout=="function"?setTimeout:void 0,VC=typeof clearTimeout=="function"?clearTimeout:void 0,Eg=typeof Promise=="function"?Promise:void 0,HC=typeof queueMicrotask=="function"?queueMicrotask:typeof Eg<"u"?function(e){return Eg.resolve(null).then(e).catch(UC)}:wf;function UC(e){setTimeout(function(){throw e})}function Dc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ta(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ta(t)}function gr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var eo=Math.random().toString(36).slice(2),bn="__reactFiber$"+eo,aa="__reactProps$"+eo,Hn="__reactContainer$"+eo,Sf="__reactEvents$"+eo,WC="__reactListeners$"+eo,GC="__reactHandles$"+eo;function Fr(e){var t=e[bn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hn]||n[bn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cg(e);e!==null;){if(n=e[bn])return n;e=Cg(e)}return t}e=n,n=e.parentNode}return null}function Oa(e){return e=e[bn]||e[Hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function ou(e){return e[aa]||null}var _f=[],xi=-1;function kr(e){return{current:e}}function xe(e){0>xi||(e.current=_f[xi],_f[xi]=null,xi--)}function ge(e,t){xi++,_f[xi]=e.current,e.current=t}var _r={},at=kr(_r),St=kr(!1),Wr=_r;function Di(e,t){var n=e.type.contextTypes;if(!n)return _r;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _t(e){return e=e.childContextTypes,e!=null}function dl(){xe(St),xe(at)}function kg(e,t,n){if(at.current!==_r)throw Error(V(168));ge(at,t),ge(St,n)}function By(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,ME(e)||"Unknown",i));return ke({},n,r)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_r,Wr=at.current,ge(at,e),ge(St,St.current),!0}function Tg(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=By(e,t,Wr),r.__reactInternalMemoizedMergedChildContext=e,xe(St),xe(at),ge(at,e)):xe(St),ge(St,n)}var Dn=null,au=!1,Lc=!1;function Vy(e){Dn===null?Dn=[e]:Dn.push(e)}function YC(e){au=!0,Vy(e)}function Tr(){if(!Lc&&Dn!==null){Lc=!0;var e=0,t=he;try{var n=Dn;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dn=null,au=!1}catch(i){throw Dn!==null&&(Dn=Dn.slice(e+1)),py(Gp,Tr),i}finally{he=t,Lc=!1}}return null}var bi=[],wi=0,pl=null,hl=0,Vt=[],Ht=0,Gr=null,An=1,Fn="";function Ir(e,t){bi[wi++]=hl,bi[wi++]=pl,pl=e,hl=t}function Hy(e,t,n){Vt[Ht++]=An,Vt[Ht++]=Fn,Vt[Ht++]=Gr,Gr=e;var r=An;e=Fn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var o=32-an(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,An=1<<32-an(t)+i|n<<i|r,Fn=o+e}else An=1<<o|n<<i|r,Fn=e}function th(e){e.return!==null&&(Ir(e,1),Hy(e,1,0))}function nh(e){for(;e===pl;)pl=bi[--wi],bi[wi]=null,hl=bi[--wi],bi[wi]=null;for(;e===Gr;)Gr=Vt[--Ht],Vt[Ht]=null,Fn=Vt[--Ht],Vt[Ht]=null,An=Vt[--Ht],Vt[Ht]=null}var jt=null,$t=null,_e=!1,rn=null;function Uy(e,t){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,$t=gr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,$t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gr!==null?{id:An,overflow:Fn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,jt=e,$t=null,!0):!1;default:return!1}}function Ef(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cf(e){if(_e){var t=$t;if(t){var n=t;if(!Pg(e,t)){if(Ef(e))throw Error(V(418));t=gr(n.nextSibling);var r=jt;t&&Pg(e,t)?Uy(r,n):(e.flags=e.flags&-4097|2,_e=!1,jt=e)}}else{if(Ef(e))throw Error(V(418));e.flags=e.flags&-4097|2,_e=!1,jt=e}}}function Og(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function rs(e){if(e!==jt)return!1;if(!_e)return Og(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bf(e.type,e.memoizedProps)),t&&(t=$t)){if(Ef(e))throw Wy(),Error(V(418));for(;t;)Uy(e,t),t=gr(t.nextSibling)}if(Og(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$t=gr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$t=null}}else $t=jt?gr(e.stateNode.nextSibling):null;return!0}function Wy(){for(var e=$t;e;)e=gr(e.nextSibling)}function Li(){$t=jt=null,_e=!1}function rh(e){rn===null?rn=[e]:rn.push(e)}var qC=Xn.ReactCurrentBatchConfig;function en(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ml=kr(null),gl=null,Si=null,ih=null;function oh(){ih=Si=gl=null}function ah(e){var t=ml.current;xe(ml),e._currentValue=t}function kf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Oi(e,t){gl=e,ih=Si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wt=!0),e.firstContext=null)}function Gt(e){var t=e._currentValue;if(ih!==e)if(e={context:e,memoizedValue:t,next:null},Si===null){if(gl===null)throw Error(V(308));Si=e,gl.dependencies={lanes:0,firstContext:e}}else Si=Si.next=e;return t}var Nr=null;function sh(e){Nr===null?Nr=[e]:Nr.push(e)}function Gy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,sh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Un(e,r)}function Un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ir=!1;function lh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Un(e,n)}return i=r.interleaved,i===null?(t.next=t,sh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Un(e,n)}function Ms(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yp(e,n)}}function Mg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vl(e,t,n,r){var i=e.updateQueue;ir=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,c=u=s=null,l=o;do{var g=l.lane,p=l.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,v=l;switch(g=t,p=n,v.tag){case 1:if(h=v.payload,typeof h=="function"){d=h.call(p,d,g);break e}d=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=v.payload,g=typeof h=="function"?h.call(p,d,g):h,g==null)break e;d=ke({},d,g);break e;case 2:ir=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else p={eventTime:p,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=p,s=d):c=c.next=p,a|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);qr|=a,e.lanes=a,e.memoizedState=d}}function $g(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var qy=new G1.Component().refs;function Tf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var su={isMounted:function(e){return(e=e._reactInternals)?ri(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),i=xr(e),o=Nn(r,i);o.payload=t,n!=null&&(o.callback=n),t=vr(e,o,i),t!==null&&(sn(t,e,i,r),Ms(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),i=xr(e),o=Nn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=vr(e,o,i),t!==null&&(sn(t,e,i,r),Ms(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=xr(e),i=Nn(n,r);i.tag=2,t!=null&&(i.callback=t),t=vr(e,i,r),t!==null&&(sn(t,e,r,n),Ms(t,e,r))}};function Ig(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ra(n,r)||!ra(i,o):!0}function Xy(e,t,n){var r=!1,i=_r,o=t.contextType;return typeof o=="object"&&o!==null?o=Gt(o):(i=_t(t)?Wr:at.current,r=t.contextTypes,o=(r=r!=null)?Di(e,i):_r),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=su,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function jg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&su.enqueueReplaceState(t,t.state,null)}function Pf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=qy,lh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Gt(o):(o=_t(t)?Wr:at.current,i.context=Di(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Tf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&su.enqueueReplaceState(i,i.state,null),vl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function yo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===qy&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function is(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dg(e){var t=e._init;return t(e._payload)}function Ky(e){function t(f,m){if(e){var x=f.deletions;x===null?(f.deletions=[m],f.flags|=16):x.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function r(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function i(f,m){return f=br(f,m),f.index=0,f.sibling=null,f}function o(f,m,x){return f.index=x,e?(x=f.alternate,x!==null?(x=x.index,x<m?(f.flags|=2,m):x):(f.flags|=2,m)):(f.flags|=1048576,m)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,m,x,S){return m===null||m.tag!==6?(m=Vc(x,f.mode,S),m.return=f,m):(m=i(m,x),m.return=f,m)}function s(f,m,x,S){var E=x.type;return E===hi?c(f,m,x.props.children,S,x.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===rr&&Dg(E)===m.type)?(S=i(m,x.props),S.ref=yo(f,m,x),S.return=f,S):(S=Rs(x.type,x.key,x.props,null,f.mode,S),S.ref=yo(f,m,x),S.return=f,S)}function u(f,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Hc(x,f.mode,S),m.return=f,m):(m=i(m,x.children||[]),m.return=f,m)}function c(f,m,x,S,E){return m===null||m.tag!==7?(m=Hr(x,f.mode,S,E),m.return=f,m):(m=i(m,x),m.return=f,m)}function d(f,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Vc(""+m,f.mode,x),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ya:return x=Rs(m.type,m.key,m.props,null,f.mode,x),x.ref=yo(f,null,m),x.return=f,x;case pi:return m=Hc(m,f.mode,x),m.return=f,m;case rr:var S=m._init;return d(f,S(m._payload),x)}if(Po(m)||po(m))return m=Hr(m,f.mode,x,null),m.return=f,m;is(f,m)}return null}function g(f,m,x,S){var E=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:l(f,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ya:return x.key===E?s(f,m,x,S):null;case pi:return x.key===E?u(f,m,x,S):null;case rr:return E=x._init,g(f,m,E(x._payload),S)}if(Po(x)||po(x))return E!==null?null:c(f,m,x,S,null);is(f,x)}return null}function p(f,m,x,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(x)||null,l(m,f,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ya:return f=f.get(S.key===null?x:S.key)||null,s(m,f,S,E);case pi:return f=f.get(S.key===null?x:S.key)||null,u(m,f,S,E);case rr:var k=S._init;return p(f,m,x,k(S._payload),E)}if(Po(S)||po(S))return f=f.get(x)||null,c(m,f,S,E,null);is(m,S)}return null}function h(f,m,x,S){for(var E=null,k=null,_=m,C=m=0,O=null;_!==null&&C<x.length;C++){_.index>C?(O=_,_=null):O=_.sibling;var M=g(f,_,x[C],S);if(M===null){_===null&&(_=O);break}e&&_&&M.alternate===null&&t(f,_),m=o(M,m,C),k===null?E=M:k.sibling=M,k=M,_=O}if(C===x.length)return n(f,_),_e&&Ir(f,C),E;if(_===null){for(;C<x.length;C++)_=d(f,x[C],S),_!==null&&(m=o(_,m,C),k===null?E=_:k.sibling=_,k=_);return _e&&Ir(f,C),E}for(_=r(f,_);C<x.length;C++)O=p(_,f,C,x[C],S),O!==null&&(e&&O.alternate!==null&&_.delete(O.key===null?C:O.key),m=o(O,m,C),k===null?E=O:k.sibling=O,k=O);return e&&_.forEach(function(I){return t(f,I)}),_e&&Ir(f,C),E}function v(f,m,x,S){var E=po(x);if(typeof E!="function")throw Error(V(150));if(x=E.call(x),x==null)throw Error(V(151));for(var k=E=null,_=m,C=m=0,O=null,M=x.next();_!==null&&!M.done;C++,M=x.next()){_.index>C?(O=_,_=null):O=_.sibling;var I=g(f,_,M.value,S);if(I===null){_===null&&(_=O);break}e&&_&&I.alternate===null&&t(f,_),m=o(I,m,C),k===null?E=I:k.sibling=I,k=I,_=O}if(M.done)return n(f,_),_e&&Ir(f,C),E;if(_===null){for(;!M.done;C++,M=x.next())M=d(f,M.value,S),M!==null&&(m=o(M,m,C),k===null?E=M:k.sibling=M,k=M);return _e&&Ir(f,C),E}for(_=r(f,_);!M.done;C++,M=x.next())M=p(_,f,C,M.value,S),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?C:M.key),m=o(M,m,C),k===null?E=M:k.sibling=M,k=M);return e&&_.forEach(function($){return t(f,$)}),_e&&Ir(f,C),E}function w(f,m,x,S){if(typeof x=="object"&&x!==null&&x.type===hi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ya:e:{for(var E=x.key,k=m;k!==null;){if(k.key===E){if(E=x.type,E===hi){if(k.tag===7){n(f,k.sibling),m=i(k,x.props.children),m.return=f,f=m;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===rr&&Dg(E)===k.type){n(f,k.sibling),m=i(k,x.props),m.ref=yo(f,k,x),m.return=f,f=m;break e}n(f,k);break}else t(f,k);k=k.sibling}x.type===hi?(m=Hr(x.props.children,f.mode,S,x.key),m.return=f,f=m):(S=Rs(x.type,x.key,x.props,null,f.mode,S),S.ref=yo(f,m,x),S.return=f,f=S)}return a(f);case pi:e:{for(k=x.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(f,m.sibling),m=i(m,x.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else t(f,m);m=m.sibling}m=Hc(x,f.mode,S),m.return=f,f=m}return a(f);case rr:return k=x._init,w(f,m,k(x._payload),S)}if(Po(x))return h(f,m,x,S);if(po(x))return v(f,m,x,S);is(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(f,m.sibling),m=i(m,x),m.return=f,f=m):(n(f,m),m=Vc(x,f.mode,S),m.return=f,f=m),a(f)):n(f,m)}return w}var Ri=Ky(!0),Zy=Ky(!1),Ma={},_n=kr(Ma),sa=kr(Ma),la=kr(Ma);function zr(e){if(e===Ma)throw Error(V(174));return e}function uh(e,t){switch(ge(la,t),ge(sa,e),ge(_n,Ma),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:af(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=af(t,e)}xe(_n),ge(_n,t)}function Ai(){xe(_n),xe(sa),xe(la)}function Qy(e){zr(la.current);var t=zr(_n.current),n=af(t,e.type);t!==n&&(ge(sa,e),ge(_n,n))}function ch(e){sa.current===e&&(xe(_n),xe(sa))}var Ee=kr(0);function yl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rc=[];function dh(){for(var e=0;e<Rc.length;e++)Rc[e]._workInProgressVersionPrimary=null;Rc.length=0}var $s=Xn.ReactCurrentDispatcher,Ac=Xn.ReactCurrentBatchConfig,Yr=0,Ce=null,Fe=null,We=null,xl=!1,Bo=!1,ua=0,XC=0;function Je(){throw Error(V(321))}function fh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!cn(e[n],t[n]))return!1;return!0}function ph(e,t,n,r,i,o){if(Yr=o,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$s.current=e===null||e.memoizedState===null?JC:ek,e=n(r,i),Bo){o=0;do{if(Bo=!1,ua=0,25<=o)throw Error(V(301));o+=1,We=Fe=null,t.updateQueue=null,$s.current=tk,e=n(r,i)}while(Bo)}if($s.current=bl,t=Fe!==null&&Fe.next!==null,Yr=0,We=Fe=Ce=null,xl=!1,t)throw Error(V(300));return e}function hh(){var e=ua!==0;return ua=0,e}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ce.memoizedState=We=e:We=We.next=e,We}function Yt(){if(Fe===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=We===null?Ce.memoizedState:We.next;if(t!==null)We=t,Fe=e;else{if(e===null)throw Error(V(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?Ce.memoizedState=We=e:We=We.next=e}return We}function ca(e,t){return typeof t=="function"?t(e):t}function Fc(e){var t=Yt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var c=u.lane;if((Yr&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,Ce.lanes|=c,qr|=c}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,cn(r,t.memoizedState)||(wt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ce.lanes|=o,qr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Nc(e){var t=Yt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);cn(o,t.memoizedState)||(wt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Jy(){}function ex(e,t){var n=Ce,r=Yt(),i=t(),o=!cn(r.memoizedState,i);if(o&&(r.memoizedState=i,wt=!0),r=r.queue,mh(rx.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,da(9,nx.bind(null,n,r,i,t),void 0,null),Ge===null)throw Error(V(349));Yr&30||tx(n,t,i)}return i}function tx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nx(e,t,n,r){t.value=n,t.getSnapshot=r,ix(t)&&ox(e)}function rx(e,t,n){return n(function(){ix(t)&&ox(e)})}function ix(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!cn(e,n)}catch{return!0}}function ox(e){var t=Un(e,1);t!==null&&sn(t,e,1,-1)}function Lg(e){var t=vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},t.queue=e,e=e.dispatch=QC.bind(null,Ce,e),[t.memoizedState,e]}function da(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ax(){return Yt().memoizedState}function Is(e,t,n,r){var i=vn();Ce.flags|=e,i.memoizedState=da(1|t,n,void 0,r===void 0?null:r)}function lu(e,t,n,r){var i=Yt();r=r===void 0?null:r;var o=void 0;if(Fe!==null){var a=Fe.memoizedState;if(o=a.destroy,r!==null&&fh(r,a.deps)){i.memoizedState=da(t,n,o,r);return}}Ce.flags|=e,i.memoizedState=da(1|t,n,o,r)}function Rg(e,t){return Is(8390656,8,e,t)}function mh(e,t){return lu(2048,8,e,t)}function sx(e,t){return lu(4,2,e,t)}function lx(e,t){return lu(4,4,e,t)}function ux(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cx(e,t,n){return n=n!=null?n.concat([e]):null,lu(4,4,ux.bind(null,t,e),n)}function gh(){}function dx(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fx(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function px(e,t,n){return Yr&21?(cn(n,t)||(n=gy(),Ce.lanes|=n,qr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=n)}function KC(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=Ac.transition;Ac.transition={};try{e(!1),t()}finally{he=n,Ac.transition=r}}function hx(){return Yt().memoizedState}function ZC(e,t,n){var r=xr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mx(e))gx(t,n);else if(n=Gy(e,t,n,r),n!==null){var i=ft();sn(n,e,r,i),vx(n,t,r)}}function QC(e,t,n){var r=xr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mx(e))gx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,cn(l,a)){var s=t.interleaved;s===null?(i.next=i,sh(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Gy(e,t,i,r),n!==null&&(i=ft(),sn(n,e,r,i),vx(n,t,r))}}function mx(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function gx(e,t){Bo=xl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yp(e,n)}}var bl={readContext:Gt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},JC={readContext:Gt,useCallback:function(e,t){return vn().memoizedState=[e,t===void 0?null:t],e},useContext:Gt,useEffect:Rg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Is(4194308,4,ux.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Is(4194308,4,e,t)},useInsertionEffect:function(e,t){return Is(4,2,e,t)},useMemo:function(e,t){var n=vn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ZC.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=vn();return e={current:e},t.memoizedState=e},useState:Lg,useDebugValue:gh,useDeferredValue:function(e){return vn().memoizedState=e},useTransition:function(){var e=Lg(!1),t=e[0];return e=KC.bind(null,e[1]),vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,i=vn();if(_e){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Ge===null)throw Error(V(349));Yr&30||tx(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Rg(rx.bind(null,r,o,e),[e]),r.flags|=2048,da(9,nx.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=vn(),t=Ge.identifierPrefix;if(_e){var n=Fn,r=An;n=(r&~(1<<32-an(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ua++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=XC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ek={readContext:Gt,useCallback:dx,useContext:Gt,useEffect:mh,useImperativeHandle:cx,useInsertionEffect:sx,useLayoutEffect:lx,useMemo:fx,useReducer:Fc,useRef:ax,useState:function(){return Fc(ca)},useDebugValue:gh,useDeferredValue:function(e){var t=Yt();return px(t,Fe.memoizedState,e)},useTransition:function(){var e=Fc(ca)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:Jy,useSyncExternalStore:ex,useId:hx,unstable_isNewReconciler:!1},tk={readContext:Gt,useCallback:dx,useContext:Gt,useEffect:mh,useImperativeHandle:cx,useInsertionEffect:sx,useLayoutEffect:lx,useMemo:fx,useReducer:Nc,useRef:ax,useState:function(){return Nc(ca)},useDebugValue:gh,useDeferredValue:function(e){var t=Yt();return Fe===null?t.memoizedState=e:px(t,Fe.memoizedState,e)},useTransition:function(){var e=Nc(ca)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:Jy,useSyncExternalStore:ex,useId:hx,unstable_isNewReconciler:!1};function Fi(e,t){try{var n="",r=t;do n+=OE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function zc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Of(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var nk=typeof WeakMap=="function"?WeakMap:Map;function yx(e,t,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Sl||(Sl=!0,Nf=r),Of(e,t)},n}function xx(e,t,n){n=Nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Of(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Of(e,t),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ag(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new nk;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=gk.bind(null,e,t,n),t.then(e,e))}function Fg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ng(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nn(-1,1),t.tag=2,vr(n,t,1))),n.lanes|=1),e)}var rk=Xn.ReactCurrentOwner,wt=!1;function ct(e,t,n,r){t.child=e===null?Zy(t,null,n,r):Ri(t,e.child,n,r)}function zg(e,t,n,r,i){n=n.render;var o=t.ref;return Oi(t,i),r=ph(e,t,n,r,o,i),n=hh(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(_e&&n&&th(t),t.flags|=1,ct(e,t,r,i),t.child)}function Bg(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Eh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,bx(e,t,o,r,i)):(e=Rs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(a,r)&&e.ref===t.ref)return Wn(e,t,i)}return t.flags|=1,e=br(o,r),e.ref=t.ref,e.return=t,t.child=e}function bx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ra(o,r)&&e.ref===t.ref)if(wt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(wt=!0);else return t.lanes=e.lanes,Wn(e,t,i)}return Mf(e,t,n,r,i)}function wx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ei,Ot),Ot|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Ei,Ot),Ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ge(Ei,Ot),Ot|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ge(Ei,Ot),Ot|=r;return ct(e,t,i,n),t.child}function Sx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mf(e,t,n,r,i){var o=_t(n)?Wr:at.current;return o=Di(t,o),Oi(t,i),n=ph(e,t,n,r,o,i),r=hh(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(_e&&r&&th(t),t.flags|=1,ct(e,t,n,i),t.child)}function Vg(e,t,n,r,i){if(_t(n)){var o=!0;fl(t)}else o=!1;if(Oi(t,i),t.stateNode===null)js(e,t),Xy(t,n,r),Pf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gt(u):(u=_t(n)?Wr:at.current,u=Di(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&jg(t,a,r,u),ir=!1;var g=t.memoizedState;a.state=g,vl(t,r,a,i),s=t.memoizedState,l!==r||g!==s||St.current||ir?(typeof c=="function"&&(Tf(t,n,c,r),s=t.memoizedState),(l=ir||Ig(t,n,l,r,g,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Yy(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:en(t.type,l),a.props=u,d=t.pendingProps,g=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Gt(s):(s=_t(n)?Wr:at.current,s=Di(t,s));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||g!==s)&&jg(t,a,r,s),ir=!1,g=t.memoizedState,a.state=g,vl(t,r,a,i);var h=t.memoizedState;l!==d||g!==h||St.current||ir?(typeof p=="function"&&(Tf(t,n,p,r),h=t.memoizedState),(u=ir||Ig(t,n,u,r,g,h,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return $f(e,t,n,r,o,i)}function $f(e,t,n,r,i,o){Sx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Tg(t,n,!1),Wn(e,t,o);r=t.stateNode,rk.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ri(t,e.child,null,o),t.child=Ri(t,null,l,o)):ct(e,t,l,o),t.memoizedState=r.state,i&&Tg(t,n,!0),t.child}function _x(e){var t=e.stateNode;t.pendingContext?kg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kg(e,t.context,!1),uh(e,t.containerInfo)}function Hg(e,t,n,r,i){return Li(),rh(i),t.flags|=256,ct(e,t,n,r),t.child}var If={dehydrated:null,treeContext:null,retryLane:0};function jf(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ex(e,t,n){var r=t.pendingProps,i=Ee.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(Ee,i&1),e===null)return Cf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=du(a,r,0,null),e=Hr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=jf(n),t.memoizedState=If,e):vh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ik(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=br(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=br(l,o):(o=Hr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?jf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=If,r}return o=e.child,e=o.sibling,r=br(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vh(e,t){return t=du({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function os(e,t,n,r){return r!==null&&rh(r),Ri(t,e.child,null,n),e=vh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ik(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=zc(Error(V(422))),os(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=du({mode:"visible",children:r.children},i,0,null),o=Hr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ri(t,e.child,null,a),t.child.memoizedState=jf(a),t.memoizedState=If,o);if(!(t.mode&1))return os(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=zc(o,r,void 0),os(e,t,a,r)}if(l=(a&e.childLanes)!==0,wt||l){if(r=Ge,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Un(e,i),sn(r,e,i,-1))}return _h(),r=zc(Error(V(421))),os(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,$t=gr(i.nextSibling),jt=t,_e=!0,rn=null,e!==null&&(Vt[Ht++]=An,Vt[Ht++]=Fn,Vt[Ht++]=Gr,An=e.id,Fn=e.overflow,Gr=t),t=vh(t,r.children),t.flags|=4096,t)}function Ug(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),kf(e.return,t,n)}function Bc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Cx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ct(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ug(e,n,t);else if(e.tag===19)Ug(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&yl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bc(t,!0,n,null,o);break;case"together":Bc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function js(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=br(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=br(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ok(e,t,n){switch(t.tag){case 3:_x(t),Li();break;case 5:Qy(t);break;case 1:_t(t.type)&&fl(t);break;case 4:uh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(ml,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?Ex(e,t,n):(ge(Ee,Ee.current&1),e=Wn(e,t,n),e!==null?e.sibling:null);ge(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Cx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,wx(e,t,n)}return Wn(e,t,n)}var kx,Df,Tx,Px;kx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Df=function(){};Tx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zr(_n.current);var o=null;switch(n){case"input":i=tf(e,i),r=tf(e,r),o=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),o=[];break;case"textarea":i=of(e,i),r=of(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cl)}sf(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ko.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ve("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Px=function(e,t,n,r){n!==r&&(t.flags|=4)};function xo(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ak(e,t,n){var r=t.pendingProps;switch(nh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return _t(t.type)&&dl(),et(t),null;case 3:return r=t.stateNode,Ai(),xe(St),xe(at),dh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(rs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rn!==null&&(Vf(rn),rn=null))),Df(e,t),et(t),null;case 5:ch(t);var i=zr(la.current);if(n=t.type,e!==null&&t.stateNode!=null)Tx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return et(t),null}if(e=zr(_n.current),rs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[bn]=t,r[aa]=o,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Mo.length;i++)ve(Mo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Jm(r,o),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ve("invalid",r);break;case"textarea":tg(r,o),ve("invalid",r)}sf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ns(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ns(r.textContent,l,e),i=["children",""+l]):Ko.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ve("scroll",r)}switch(n){case"input":qa(r),eg(r,o,!0);break;case"textarea":qa(r),ng(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=cl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ty(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[bn]=t,e[aa]=r,kx(e,t,!1,!1),t.stateNode=e;e:{switch(a=lf(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mo.length;i++)ve(Mo[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":Jm(e,r),i=tf(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ve("invalid",e);break;case"textarea":tg(e,r),i=of(e,r),ve("invalid",e);break;default:i=r}sf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?iy(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ny(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Zo(e,s):typeof s=="number"&&Zo(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ko.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ve("scroll",e):s!=null&&Bp(e,o,s,a))}switch(n){case"input":qa(e),eg(e,r,!1);break;case"textarea":qa(e),ng(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ci(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return et(t),null;case 6:if(e&&t.stateNode!=null)Px(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=zr(la.current),zr(_n.current),rs(t)){if(r=t.stateNode,n=t.memoizedProps,r[bn]=t,(o=r.nodeValue!==n)&&(e=jt,e!==null))switch(e.tag){case 3:ns(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ns(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bn]=t,t.stateNode=r}return et(t),null;case 13:if(xe(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&$t!==null&&t.mode&1&&!(t.flags&128))Wy(),Li(),t.flags|=98560,o=!1;else if(o=rs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[bn]=t}else Li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;et(t),o=!1}else rn!==null&&(Vf(rn),rn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?ze===0&&(ze=3):_h())),t.updateQueue!==null&&(t.flags|=4),et(t),null);case 4:return Ai(),Df(e,t),e===null&&ia(t.stateNode.containerInfo),et(t),null;case 10:return ah(t.type._context),et(t),null;case 17:return _t(t.type)&&dl(),et(t),null;case 19:if(xe(Ee),o=t.memoizedState,o===null)return et(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)xo(o,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=yl(e),a!==null){for(t.flags|=128,xo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ee,Ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&Oe()>Ni&&(t.flags|=128,r=!0,xo(o,!1),t.lanes=4194304)}else{if(!r)if(e=yl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!_e)return et(t),null}else 2*Oe()-o.renderingStartTime>Ni&&n!==1073741824&&(t.flags|=128,r=!0,xo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Oe(),t.sibling=null,n=Ee.current,ge(Ee,r?n&1|2:n&1),t):(et(t),null);case 22:case 23:return Sh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ot&1073741824&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function sk(e,t){switch(nh(t),t.tag){case 1:return _t(t.type)&&dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ai(),xe(St),xe(at),dh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ch(t),null;case 13:if(xe(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Ee),null;case 4:return Ai(),null;case 10:return ah(t.type._context),null;case 22:case 23:return Sh(),null;case 24:return null;default:return null}}var as=!1,it=!1,lk=typeof WeakSet=="function"?WeakSet:Set,U=null;function _i(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Lf(e,t,n){try{n()}catch(r){Te(e,t,r)}}var Wg=!1;function uk(e,t){if(yf=sl,e=Iy(),eh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,d=e,g=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)g=d,d=p;for(;;){if(d===e)break t;if(g===n&&++u===i&&(l=a),g===o&&++c===r&&(s=a),(p=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=p}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(xf={focusedElem:e,selectionRange:n},sl=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var v=h.memoizedProps,w=h.memoizedState,f=t.stateNode,m=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:en(t.type,v),w);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){Te(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return h=Wg,Wg=!1,h}function Vo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Lf(t,n,o)}i=i.next}while(i!==r)}}function uu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ox(e){var t=e.alternate;t!==null&&(e.alternate=null,Ox(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bn],delete t[aa],delete t[Sf],delete t[WC],delete t[GC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mx(e){return e.tag===5||e.tag===3||e.tag===4}function Gg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Af(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cl));else if(r!==4&&(e=e.child,e!==null))for(Af(e,t,n),e=e.sibling;e!==null;)Af(e,t,n),e=e.sibling}function Ff(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ff(e,t,n),e=e.sibling;e!==null;)Ff(e,t,n),e=e.sibling}var Xe=null,tn=!1;function tr(e,t,n){for(n=n.child;n!==null;)$x(e,t,n),n=n.sibling}function $x(e,t,n){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(tu,n)}catch{}switch(n.tag){case 5:it||_i(n,t);case 6:var r=Xe,i=tn;Xe=null,tr(e,t,n),Xe=r,tn=i,Xe!==null&&(tn?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(tn?(e=Xe,n=n.stateNode,e.nodeType===8?Dc(e.parentNode,n):e.nodeType===1&&Dc(e,n),ta(e)):Dc(Xe,n.stateNode));break;case 4:r=Xe,i=tn,Xe=n.stateNode.containerInfo,tn=!0,tr(e,t,n),Xe=r,tn=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Lf(n,t,a),i=i.next}while(i!==r)}tr(e,t,n);break;case 1:if(!it&&(_i(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,t,l)}tr(e,t,n);break;case 21:tr(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,tr(e,t,n),it=r):tr(e,t,n);break;default:tr(e,t,n)}}function Yg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lk),t.forEach(function(r){var i=yk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,tn=!1;break e;case 3:Xe=l.stateNode.containerInfo,tn=!0;break e;case 4:Xe=l.stateNode.containerInfo,tn=!0;break e}l=l.return}if(Xe===null)throw Error(V(160));$x(o,a,i),Xe=null,tn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ix(t,e),t=t.sibling}function Ix(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),mn(e),r&4){try{Vo(3,e,e.return),uu(3,e)}catch(v){Te(e,e.return,v)}try{Vo(5,e,e.return)}catch(v){Te(e,e.return,v)}}break;case 1:Kt(t,e),mn(e),r&512&&n!==null&&_i(n,n.return);break;case 5:if(Kt(t,e),mn(e),r&512&&n!==null&&_i(n,n.return),e.flags&32){var i=e.stateNode;try{Zo(i,"")}catch(v){Te(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&J1(i,o),lf(l,a);var u=lf(l,o);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?iy(i,d):c==="dangerouslySetInnerHTML"?ny(i,d):c==="children"?Zo(i,d):Bp(i,c,d,u)}switch(l){case"input":nf(i,o);break;case"textarea":ey(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Ci(i,!!o.multiple,p,!1):g!==!!o.multiple&&(o.defaultValue!=null?Ci(i,!!o.multiple,o.defaultValue,!0):Ci(i,!!o.multiple,o.multiple?[]:"",!1))}i[aa]=o}catch(v){Te(e,e.return,v)}}break;case 6:if(Kt(t,e),mn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Te(e,e.return,v)}}break;case 3:if(Kt(t,e),mn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(t.containerInfo)}catch(v){Te(e,e.return,v)}break;case 4:Kt(t,e),mn(e);break;case 13:Kt(t,e),mn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(bh=Oe())),r&4&&Yg(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||c,Kt(t,e),it=u):Kt(t,e),mn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(U=e,c=e.child;c!==null;){for(d=U=c;U!==null;){switch(g=U,p=g.child,g.tag){case 0:case 11:case 14:case 15:Vo(4,g,g.return);break;case 1:_i(g,g.return);var h=g.stateNode;if(typeof h.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(v){Te(r,n,v)}}break;case 5:_i(g,g.return);break;case 22:if(g.memoizedState!==null){Xg(d);continue}}p!==null?(p.return=g,U=p):Xg(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ry("display",a))}catch(v){Te(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Te(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kt(t,e),mn(e),r&4&&Yg(e);break;case 21:break;default:Kt(t,e),mn(e)}}function mn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Mx(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zo(i,""),r.flags&=-33);var o=Gg(e);Ff(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Gg(e);Af(e,l,a);break;default:throw Error(V(161))}}catch(s){Te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ck(e,t,n){U=e,jx(e)}function jx(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||as;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||it;l=as;var u=it;if(as=a,(it=s)&&!u)for(U=i;U!==null;)a=U,s=a.child,a.tag===22&&a.memoizedState!==null?Kg(i):s!==null?(s.return=a,U=s):Kg(i);for(;o!==null;)U=o,jx(o),o=o.sibling;U=i,as=l,it=u}qg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):qg(e)}}function qg(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||uu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:en(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&$g(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$g(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ta(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}it||t.flags&512&&Rf(t)}catch(g){Te(t,t.return,g)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Xg(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Kg(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{uu(4,t)}catch(s){Te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Te(t,i,s)}}var o=t.return;try{Rf(t)}catch(s){Te(t,o,s)}break;case 5:var a=t.return;try{Rf(t)}catch(s){Te(t,a,s)}}}catch(s){Te(t,t.return,s)}if(t===e){U=null;break}var l=t.sibling;if(l!==null){l.return=t.return,U=l;break}U=t.return}}var dk=Math.ceil,wl=Xn.ReactCurrentDispatcher,yh=Xn.ReactCurrentOwner,Wt=Xn.ReactCurrentBatchConfig,se=0,Ge=null,De=null,Ze=0,Ot=0,Ei=kr(0),ze=0,fa=null,qr=0,cu=0,xh=0,Ho=null,bt=null,bh=0,Ni=1/0,$n=null,Sl=!1,Nf=null,yr=null,ss=!1,ur=null,_l=0,Uo=0,zf=null,Ds=-1,Ls=0;function ft(){return se&6?Oe():Ds!==-1?Ds:Ds=Oe()}function xr(e){return e.mode&1?se&2&&Ze!==0?Ze&-Ze:qC.transition!==null?(Ls===0&&(Ls=gy()),Ls):(e=he,e!==0||(e=window.event,e=e===void 0?16:_y(e.type)),e):1}function sn(e,t,n,r){if(50<Uo)throw Uo=0,zf=null,Error(V(185));Ta(e,n,r),(!(se&2)||e!==Ge)&&(e===Ge&&(!(se&2)&&(cu|=n),ze===4&&ar(e,Ze)),Et(e,r),n===1&&se===0&&!(t.mode&1)&&(Ni=Oe()+500,au&&Tr()))}function Et(e,t){var n=e.callbackNode;qE(e,t);var r=al(e,e===Ge?Ze:0);if(r===0)n!==null&&og(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&og(n),t===1)e.tag===0?YC(Zg.bind(null,e)):Vy(Zg.bind(null,e)),HC(function(){!(se&6)&&Tr()}),n=null;else{switch(vy(r)){case 1:n=Gp;break;case 4:n=hy;break;case 16:n=ol;break;case 536870912:n=my;break;default:n=ol}n=Bx(n,Dx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Dx(e,t){if(Ds=-1,Ls=0,se&6)throw Error(V(327));var n=e.callbackNode;if(Mi()&&e.callbackNode!==n)return null;var r=al(e,e===Ge?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=El(e,r);else{t=r;var i=se;se|=2;var o=Rx();(Ge!==e||Ze!==t)&&($n=null,Ni=Oe()+500,Vr(e,t));do try{hk();break}catch(l){Lx(e,l)}while(1);oh(),wl.current=o,se=i,De!==null?t=0:(Ge=null,Ze=0,t=ze)}if(t!==0){if(t===2&&(i=pf(e),i!==0&&(r=i,t=Bf(e,i))),t===1)throw n=fa,Vr(e,0),ar(e,r),Et(e,Oe()),n;if(t===6)ar(e,r);else{if(i=e.current.alternate,!(r&30)&&!fk(i)&&(t=El(e,r),t===2&&(o=pf(e),o!==0&&(r=o,t=Bf(e,o))),t===1))throw n=fa,Vr(e,0),ar(e,r),Et(e,Oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:jr(e,bt,$n);break;case 3:if(ar(e,r),(r&130023424)===r&&(t=bh+500-Oe(),10<t)){if(al(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wf(jr.bind(null,e,bt,$n),t);break}jr(e,bt,$n);break;case 4:if(ar(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-an(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dk(r/1960))-r,10<r){e.timeoutHandle=wf(jr.bind(null,e,bt,$n),r);break}jr(e,bt,$n);break;case 5:jr(e,bt,$n);break;default:throw Error(V(329))}}}return Et(e,Oe()),e.callbackNode===n?Dx.bind(null,e):null}function Bf(e,t){var n=Ho;return e.current.memoizedState.isDehydrated&&(Vr(e,t).flags|=256),e=El(e,t),e!==2&&(t=bt,bt=n,t!==null&&Vf(t)),e}function Vf(e){bt===null?bt=e:bt.push.apply(bt,e)}function fk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!cn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ar(e,t){for(t&=~xh,t&=~cu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function Zg(e){if(se&6)throw Error(V(327));Mi();var t=al(e,0);if(!(t&1))return Et(e,Oe()),null;var n=El(e,t);if(e.tag!==0&&n===2){var r=pf(e);r!==0&&(t=r,n=Bf(e,r))}if(n===1)throw n=fa,Vr(e,0),ar(e,t),Et(e,Oe()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jr(e,bt,$n),Et(e,Oe()),null}function wh(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Ni=Oe()+500,au&&Tr())}}function Xr(e){ur!==null&&ur.tag===0&&!(se&6)&&Mi();var t=se;se|=1;var n=Wt.transition,r=he;try{if(Wt.transition=null,he=1,e)return e()}finally{he=r,Wt.transition=n,se=t,!(se&6)&&Tr()}}function Sh(){Ot=Ei.current,xe(Ei)}function Vr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,VC(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(nh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:Ai(),xe(St),xe(at),dh();break;case 5:ch(r);break;case 4:Ai();break;case 13:xe(Ee);break;case 19:xe(Ee);break;case 10:ah(r.type._context);break;case 22:case 23:Sh()}n=n.return}if(Ge=e,De=e=br(e.current,null),Ze=Ot=t,ze=0,fa=null,xh=cu=qr=0,bt=Ho=null,Nr!==null){for(t=0;t<Nr.length;t++)if(n=Nr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Nr=null}return e}function Lx(e,t){do{var n=De;try{if(oh(),$s.current=bl,xl){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xl=!1}if(Yr=0,We=Fe=Ce=null,Bo=!1,ua=0,yh.current=null,n===null||n.return===null){ze=1,fa=t,De=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Ze,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Fg(a);if(p!==null){p.flags&=-257,Ng(p,a,l,o,t),p.mode&1&&Ag(o,u,t),t=p,s=u;var h=t.updateQueue;if(h===null){var v=new Set;v.add(s),t.updateQueue=v}else h.add(s);break e}else{if(!(t&1)){Ag(o,u,t),_h();break e}s=Error(V(426))}}else if(_e&&l.mode&1){var w=Fg(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Ng(w,a,l,o,t),rh(Fi(s,l));break e}}o=s=Fi(s,l),ze!==4&&(ze=2),Ho===null?Ho=[o]:Ho.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=yx(o,s,t);Mg(o,f);break e;case 1:l=s;var m=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(yr===null||!yr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=xx(o,l,t);Mg(o,S);break e}}o=o.return}while(o!==null)}Fx(n)}catch(E){t=E,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function Rx(){var e=wl.current;return wl.current=bl,e===null?bl:e}function _h(){(ze===0||ze===3||ze===2)&&(ze=4),Ge===null||!(qr&268435455)&&!(cu&268435455)||ar(Ge,Ze)}function El(e,t){var n=se;se|=2;var r=Rx();(Ge!==e||Ze!==t)&&($n=null,Vr(e,t));do try{pk();break}catch(i){Lx(e,i)}while(1);if(oh(),se=n,wl.current=r,De!==null)throw Error(V(261));return Ge=null,Ze=0,ze}function pk(){for(;De!==null;)Ax(De)}function hk(){for(;De!==null&&!NE();)Ax(De)}function Ax(e){var t=zx(e.alternate,e,Ot);e.memoizedProps=e.pendingProps,t===null?Fx(e):De=t,yh.current=null}function Fx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=sk(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,De=null;return}}else if(n=ak(n,t,Ot),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);ze===0&&(ze=5)}function jr(e,t,n){var r=he,i=Wt.transition;try{Wt.transition=null,he=1,mk(e,t,n,r)}finally{Wt.transition=i,he=r}return null}function mk(e,t,n,r){do Mi();while(ur!==null);if(se&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(XE(e,o),e===Ge&&(De=Ge=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ss||(ss=!0,Bx(ol,function(){return Mi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Wt.transition,Wt.transition=null;var a=he;he=1;var l=se;se|=4,yh.current=null,uk(e,n),Ix(n,e),LC(xf),sl=!!yf,xf=yf=null,e.current=n,ck(n),zE(),se=l,he=a,Wt.transition=o}else e.current=n;if(ss&&(ss=!1,ur=e,_l=i),o=e.pendingLanes,o===0&&(yr=null),HE(n.stateNode),Et(e,Oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sl)throw Sl=!1,e=Nf,Nf=null,e;return _l&1&&e.tag!==0&&Mi(),o=e.pendingLanes,o&1?e===zf?Uo++:(Uo=0,zf=e):Uo=0,Tr(),null}function Mi(){if(ur!==null){var e=vy(_l),t=Wt.transition,n=he;try{if(Wt.transition=null,he=16>e?16:e,ur===null)var r=!1;else{if(e=ur,ur=null,_l=0,se&6)throw Error(V(331));var i=se;for(se|=4,U=e.current;U!==null;){var o=U,a=o.child;if(U.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Vo(8,c,o)}var d=c.child;if(d!==null)d.return=c,U=d;else for(;U!==null;){c=U;var g=c.sibling,p=c.return;if(Ox(c),c===u){U=null;break}if(g!==null){g.return=p,U=g;break}U=p}}}var h=o.alternate;if(h!==null){var v=h.child;if(v!==null){h.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}U=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,U=a;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vo(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,U=f;break e}U=o.return}}var m=e.current;for(U=m;U!==null;){a=U;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,U=x;else e:for(a=m;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:uu(9,l)}}catch(E){Te(l,l.return,E)}if(l===a){U=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,U=S;break e}U=l.return}}if(se=i,Tr(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(tu,e)}catch{}r=!0}return r}finally{he=n,Wt.transition=t}}return!1}function Qg(e,t,n){t=Fi(n,t),t=yx(e,t,1),e=vr(e,t,1),t=ft(),e!==null&&(Ta(e,1,t),Et(e,t))}function Te(e,t,n){if(e.tag===3)Qg(e,e,n);else for(;t!==null;){if(t.tag===3){Qg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){e=Fi(n,e),e=xx(t,e,1),t=vr(t,e,1),e=ft(),t!==null&&(Ta(t,1,e),Et(t,e));break}}t=t.return}}function gk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(Ze&n)===n&&(ze===4||ze===3&&(Ze&130023424)===Ze&&500>Oe()-bh?Vr(e,0):xh|=n),Et(e,t)}function Nx(e,t){t===0&&(e.mode&1?(t=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):t=1);var n=ft();e=Un(e,t),e!==null&&(Ta(e,t,n),Et(e,n))}function vk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nx(e,n)}function yk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Nx(e,n)}var zx;zx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||St.current)wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return wt=!1,ok(e,t,n);wt=!!(e.flags&131072)}else wt=!1,_e&&t.flags&1048576&&Hy(t,hl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;js(e,t),e=t.pendingProps;var i=Di(t,at.current);Oi(t,n),i=ph(null,t,r,e,i,n);var o=hh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_t(r)?(o=!0,fl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lh(t),i.updater=su,t.stateNode=i,i._reactInternals=t,Pf(t,r,e,n),t=$f(null,t,r,!0,o,n)):(t.tag=0,_e&&o&&th(t),ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(js(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=bk(r),e=en(r,e),i){case 0:t=Mf(null,t,r,e,n);break e;case 1:t=Vg(null,t,r,e,n);break e;case 11:t=zg(null,t,r,e,n);break e;case 14:t=Bg(null,t,r,en(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Mf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Vg(e,t,r,i,n);case 3:e:{if(_x(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Yy(e,t),vl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Fi(Error(V(423)),t),t=Hg(e,t,r,n,i);break e}else if(r!==i){i=Fi(Error(V(424)),t),t=Hg(e,t,r,n,i);break e}else for($t=gr(t.stateNode.containerInfo.firstChild),jt=t,_e=!0,rn=null,n=Zy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Li(),r===i){t=Wn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return Qy(t),e===null&&Cf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,bf(r,i)?a=null:o!==null&&bf(r,o)&&(t.flags|=32),Sx(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&Cf(t),null;case 13:return Ex(e,t,n);case 4:return uh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ri(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),zg(e,t,r,i,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ge(ml,r._currentValue),r._currentValue=a,o!==null)if(cn(o.value,a)){if(o.children===i.children&&!St.current){t=Wn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Nn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),kf(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),kf(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Oi(t,n),i=Gt(i),r=r(i),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,i=en(r,t.pendingProps),i=en(r.type,i),Bg(e,t,r,i,n);case 15:return bx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),js(e,t),t.tag=1,_t(r)?(e=!0,fl(t)):e=!1,Oi(t,n),Xy(t,r,i),Pf(t,r,i,n),$f(null,t,r,!0,e,n);case 19:return Cx(e,t,n);case 22:return wx(e,t,n)}throw Error(V(156,t.tag))};function Bx(e,t){return py(e,t)}function xk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(e,t,n,r){return new xk(e,t,n,r)}function Eh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bk(e){if(typeof e=="function")return Eh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hp)return 11;if(e===Up)return 14}return 2}function br(e,t){var n=e.alternate;return n===null?(n=Ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Eh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case hi:return Hr(n.children,i,o,t);case Vp:a=8,i|=8;break;case Zd:return e=Ut(12,n,t,i|2),e.elementType=Zd,e.lanes=o,e;case Qd:return e=Ut(13,n,t,i),e.elementType=Qd,e.lanes=o,e;case Jd:return e=Ut(19,n,t,i),e.elementType=Jd,e.lanes=o,e;case K1:return du(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q1:a=10;break e;case X1:a=9;break e;case Hp:a=11;break e;case Up:a=14;break e;case rr:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Ut(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Hr(e,t,n,r){return e=Ut(7,e,r,t),e.lanes=n,e}function du(e,t,n,r){return e=Ut(22,e,r,t),e.elementType=K1,e.lanes=n,e.stateNode={isHidden:!1},e}function Vc(e,t,n){return e=Ut(6,e,null,t),e.lanes=n,e}function Hc(e,t,n){return t=Ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ch(e,t,n,r,i,o,a,l,s){return e=new wk(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lh(o),e}function Sk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vx(e){if(!e)return _r;e=e._reactInternals;e:{if(ri(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(_t(n))return By(e,n,t)}return t}function Hx(e,t,n,r,i,o,a,l,s){return e=Ch(n,r,!0,e,i,o,a,l,s),e.context=Vx(null),n=e.current,r=ft(),i=xr(n),o=Nn(r,i),o.callback=t??null,vr(n,o,i),e.current.lanes=i,Ta(e,i,r),Et(e,r),e}function fu(e,t,n,r){var i=t.current,o=ft(),a=xr(i);return n=Vx(n),t.context===null?t.context=n:t.pendingContext=n,t=Nn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vr(i,t,a),e!==null&&(sn(e,i,a,o),Ms(e,i,a)),a}function Cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kh(e,t){Jg(e,t),(e=e.alternate)&&Jg(e,t)}function _k(){return null}var Ux=typeof reportError=="function"?reportError:function(e){console.error(e)};function Th(e){this._internalRoot=e}pu.prototype.render=Th.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));fu(e,t,null,null)};pu.prototype.unmount=Th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xr(function(){fu(null,e,null,null)}),t[Hn]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=by();e={blockedOn:null,target:e,priority:t};for(var n=0;n<or.length&&t!==0&&t<or[n].priority;n++);or.splice(n,0,e),n===0&&Sy(e)}};function Ph(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function e0(){}function Ek(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Cl(a);o.call(u)}}var a=Hx(t,r,e,0,null,!1,!1,"",e0);return e._reactRootContainer=a,e[Hn]=a.current,ia(e.nodeType===8?e.parentNode:e),Xr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Cl(s);l.call(u)}}var s=Ch(e,0,!1,null,null,!1,!1,"",e0);return e._reactRootContainer=s,e[Hn]=s.current,ia(e.nodeType===8?e.parentNode:e),Xr(function(){fu(t,s,n,r)}),s}function mu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Cl(a);l.call(s)}}fu(t,a,e,i)}else a=Ek(n,t,e,i,r);return Cl(a)}yy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Oo(t.pendingLanes);n!==0&&(Yp(t,n|1),Et(t,Oe()),!(se&6)&&(Ni=Oe()+500,Tr()))}break;case 13:Xr(function(){var r=Un(e,1);if(r!==null){var i=ft();sn(r,e,1,i)}}),kh(e,1)}};qp=function(e){if(e.tag===13){var t=Un(e,134217728);if(t!==null){var n=ft();sn(t,e,134217728,n)}kh(e,134217728)}};xy=function(e){if(e.tag===13){var t=xr(e),n=Un(e,t);if(n!==null){var r=ft();sn(n,e,t,r)}kh(e,t)}};by=function(){return he};wy=function(e,t){var n=he;try{return he=e,t()}finally{he=n}};cf=function(e,t,n){switch(t){case"input":if(nf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ou(r);if(!i)throw Error(V(90));Q1(r),nf(r,i)}}}break;case"textarea":ey(e,n);break;case"select":t=n.value,t!=null&&Ci(e,!!n.multiple,t,!1)}};sy=wh;ly=Xr;var Ck={usingClientEntryPoint:!1,Events:[Oa,yi,ou,oy,ay,wh]},bo={findFiberByHostInstance:Fr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},kk={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dy(e),e===null?null:e.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||_k,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{tu=ls.inject(kk),Sn=ls}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ck;Ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ph(t))throw Error(V(200));return Sk(e,t,null,n)};Ft.createRoot=function(e,t){if(!Ph(e))throw Error(V(299));var n=!1,r="",i=Ux;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ch(e,1,!1,null,null,n,!1,r,i),e[Hn]=t.current,ia(e.nodeType===8?e.parentNode:e),new Th(t)};Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=dy(t),e=e===null?null:e.stateNode,e};Ft.flushSync=function(e){return Xr(e)};Ft.hydrate=function(e,t,n){if(!hu(t))throw Error(V(200));return mu(null,e,t,!0,n)};Ft.hydrateRoot=function(e,t,n){if(!Ph(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Ux;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Hx(t,null,e,1,n??null,i,!1,o,a),e[Hn]=t.current,ia(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new pu(t)};Ft.render=function(e,t,n){if(!hu(t))throw Error(V(200));return mu(null,e,t,!1,n)};Ft.unmountComponentAtNode=function(e){if(!hu(e))throw Error(V(40));return e._reactRootContainer?(Xr(function(){mu(null,null,e,!1,function(){e._reactRootContainer=null,e[Hn]=null})}),!0):!1};Ft.unstable_batchedUpdates=wh;Ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hu(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return mu(e,t,n,!1,r)};Ft.version="18.2.0-next-9e3b772b8-20220608";function Wx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wx)}catch(e){console.error(e)}}Wx(),H1.exports=Ft;var gu=H1.exports,t0=gu;Xd.createRoot=t0.createRoot,Xd.hydrateRoot=t0.hydrateRoot;var ot=function(){return ot=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ot.apply(this,arguments)};function zi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function Tk(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Pk=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ok=Tk(function(e){return Pk.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ye="-ms-",Wo="-moz-",ue="-webkit-",Gx="comm",vu="rule",Oh="decl",Mk="@import",$k="@namespace",Yx="@keyframes",Ik="@layer",qx=Math.abs,Mh=String.fromCharCode,Hf=Object.assign;function jk(e,t){return Ne(e,0)^45?(((t<<2^Ne(e,0))<<2^Ne(e,1))<<2^Ne(e,2))<<2^Ne(e,3):0}function Xx(e){return e.trim()}function In(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function As(e,t,n){return e.indexOf(t,n)}function Ne(e,t){return e.charCodeAt(t)|0}function Kr(e,t,n){return e.slice(t,n)}function nn(e){return e.length}function Kx(e){return e.length}function $o(e,t){return t.push(e),e}function Dk(e,t){return e.map(t).join("")}function n0(e,t){return e.filter(function(n){return!In(n,t)})}var yu=1,Bi=1,Zx=0,qt=0,Ie=0,to="";function xu(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:yu,column:Bi,length:a,return:"",siblings:l}}function nr(e,t){return Hf(xu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function si(e){for(;e.root;)e=nr(e.root,{children:[e]});$o(e,e.siblings)}function Lk(){return Ie}function Rk(){return Ie=qt>0?Ne(to,--qt):0,Bi--,Ie===10&&(Bi=1,yu--),Ie}function ln(){return Ie=qt<Zx?Ne(to,qt++):0,Bi++,Ie===10&&(Bi=1,yu++),Ie}function cr(){return Ne(to,qt)}function Fs(){return qt}function bu(e,t){return Kr(to,e,t)}function pa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ak(e){return yu=Bi=1,Zx=nn(to=e),qt=0,[]}function Fk(e){return to="",e}function Uc(e){return Xx(bu(qt-1,Uf(e===91?e+2:e===40?e+1:e)))}function Nk(e){for(;(Ie=cr())&&Ie<33;)ln();return pa(e)>2||pa(Ie)>3?"":" "}function zk(e,t){for(;--t&&ln()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return bu(e,Fs()+(t<6&&cr()==32&&ln()==32))}function Uf(e){for(;ln();)switch(Ie){case e:return qt;case 34:case 39:e!==34&&e!==39&&Uf(Ie);break;case 40:e===41&&Uf(e);break;case 92:ln();break}return qt}function Bk(e,t){for(;ln()&&e+Ie!==47+10;)if(e+Ie===42+42&&cr()===47)break;return"/*"+bu(t,qt-1)+"*"+Mh(e===47?e:ln())}function Vk(e){for(;!pa(cr());)ln();return bu(e,qt)}function Hk(e){return Fk(Ns("",null,null,null,[""],e=Ak(e),0,[0],e))}function Ns(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,g=0,p=0,h=0,v=1,w=1,f=1,m=0,x="",S=i,E=o,k=r,_=x;w;)switch(h=m,m=ln()){case 40:if(h!=108&&Ne(_,d-1)==58){As(_+=ne(Uc(m),"&","&\f"),"&\f",qx(u?l[u-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:_+=Uc(m);break;case 9:case 10:case 13:case 32:_+=Nk(h);break;case 92:_+=zk(Fs()-1,7);continue;case 47:switch(cr()){case 42:case 47:$o(Uk(Bk(ln(),Fs()),t,n,s),s),(pa(h||1)==5||pa(cr()||1)==5)&&nn(_)&&Kr(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*v:l[u++]=nn(_)*f;case 125*v:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+c:f==-1&&(_=ne(_,/\f/g,"")),p>0&&(nn(_)-d||v===0&&h===47)&&$o(p>32?i0(_+";",r,n,d-1,s):i0(ne(_," ","")+";",r,n,d-2,s),s);break;case 59:_+=";";default:if($o(k=r0(_,t,n,u,c,i,l,x,S=[],E=[],d,o),o),m===123)if(c===0)Ns(_,t,k,k,S,o,d,l,E);else{switch(g){case 99:if(Ne(_,3)===110)break;case 108:if(Ne(_,2)===97)break;default:c=0;case 100:case 109:case 115:}c?Ns(e,k,k,r&&$o(r0(e,k,k,0,0,i,l,x,i,S=[],d,E),E),i,E,d,l,r?S:E):Ns(_,k,k,k,[""],E,0,l,E)}}u=c=p=0,v=f=1,x=_="",d=a;break;case 58:d=1+nn(_),p=h;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&Rk()==125)continue}switch(_+=Mh(m),m*v){case 38:f=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(nn(_)-1)*f,f=1;break;case 64:cr()===45&&(_+=Uc(ln())),g=cr(),c=d=nn(x=_+=Vk(Fs())),m++;break;case 45:h===45&&nn(_)==2&&(v=0)}}return o}function r0(e,t,n,r,i,o,a,l,s,u,c,d){for(var g=i-1,p=i===0?o:[""],h=Kx(p),v=0,w=0,f=0;v<r;++v)for(var m=0,x=Kr(e,g+1,g=qx(w=a[v])),S=e;m<h;++m)(S=Xx(w>0?p[m]+" "+x:ne(x,/&\f/g,p[m])))&&(s[f++]=S);return xu(e,t,n,i===0?vu:l,s,u,c,d)}function Uk(e,t,n,r){return xu(e,t,n,Gx,Mh(Lk()),Kr(e,2,-2),0,r)}function i0(e,t,n,r,i){return xu(e,t,n,Oh,Kr(e,0,r),Kr(e,r+1,-1),r,i)}function Qx(e,t,n){switch(jk(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Wo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+Wo+e+ye+e+e;case 5936:switch(Ne(e,t+11)){case 114:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+ye+e+e;case 6165:return ue+e+ye+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return ue+e+ye+"flex-item-"+ne(e,/flex-|-self/g,"")+(In(e,/flex-|baseline/)?"":ye+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+ye+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+ye+ne(e,"shrink","negative")+e;case 5292:return ue+e+ye+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+ye+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+ye+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!In(e,/flex-|baseline/))return ye+"grid-column-align"+Kr(e,t)+e;break;case 2592:case 3360:return ye+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,In(r.props,/grid-\w+-end/)})?~As(e+(n=n[t].value),"span",0)?e:ye+ne(e,"-start","")+e+ye+"grid-row-span:"+(~As(n,"span",0)?In(n,/\d+/):+In(n,/\d+/)-+In(e,/\d+/))+";":ye+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return In(r.props,/grid-\w+-start/)})?e:ye+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nn(e)-1-t>6)switch(Ne(e,t+1)){case 109:if(Ne(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+Wo+(Ne(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~As(e,"stretch",0)?Qx(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return ye+i+":"+o+u+(a?ye+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(Ne(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(Ne(e,Ne(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Ne(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+ye+"$2box$3")+e;case 100:return ne(e,":",":"+ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function kl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Wk(e,t,n,r){switch(e.type){case Ik:if(e.children.length)break;case Mk:case $k:case Oh:return e.return=e.return||e.value;case Gx:return"";case Yx:return e.return=e.value+"{"+kl(e.children,r)+"}";case vu:if(!nn(e.value=e.props.join(",")))return""}return nn(n=kl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Gk(e){var t=Kx(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function Yk(e){return function(t){t.root||(t=t.return)&&e(t)}}function qk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Oh:e.return=Qx(e.value,e.length,n);return;case Yx:return kl([nr(e,{value:ne(e.value,"@","@"+ue)})],r);case vu:if(e.length)return Dk(n=e.props,function(i){switch(In(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":si(nr(e,{props:[ne(i,/:(read-\w+)/,":"+Wo+"$1")]})),si(nr(e,{props:[i]})),Hf(e,{props:n0(n,r)});break;case"::placeholder":si(nr(e,{props:[ne(i,/:(plac\w+)/,":"+ue+"input-$1")]})),si(nr(e,{props:[ne(i,/:(plac\w+)/,":"+Wo+"$1")]})),si(nr(e,{props:[ne(i,/:(plac\w+)/,ye+"input-$1")]})),si(nr(e,{props:[i]})),Hf(e,{props:n0(n,r)});break}return""})}}var Xk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Jx="active",eb="data-styled-version",wu="6.3.11",$h=`/*!sc*/
`,Go=typeof window<"u"&&typeof document<"u",Kk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Zk={};function $a(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var zs=new Map,Tl=new Map,Bs=1,Io=function(e){if(zs.has(e))return zs.get(e);for(;Tl.has(Bs);)Bs++;var t=Bs++;return zs.set(e,t),Tl.set(t,e),t},Qk=function(e,t){Bs=t+1,zs.set(e,t),Tl.set(t,e)},Ih=Object.freeze([]),Hi=Object.freeze({});function tb(e,t,n){return n===void 0&&(n=Hi),e.theme!==n.theme&&e.theme||t||n.theme}var nb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Jk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,eT=/(^-|-$)/g;function o0(e){return e.replace(Jk,"-").replace(eT,"")}var tT=/(a)(d)/gi,a0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Wf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=a0(t%52)+n;return(a0(t%52)+n).replace(tT,"$1-$2")}var Wc,Dr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},rb=function(e){return Dr(5381,e)};function jh(e){return Wf(rb(e)>>>0)}function nT(e){return e.displayName||e.name||"Component"}function Gc(e){return typeof e=="string"&&!0}var ib=typeof Symbol=="function"&&Symbol.for,ob=ib?Symbol.for("react.memo"):60115,rT=ib?Symbol.for("react.forward_ref"):60112,iT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},oT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ab={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},aT=((Wc={})[rT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wc[ob]=ab,Wc);function s0(e){return("type"in(t=e)&&t.type.$$typeof)===ob?ab:"$$typeof"in e?aT[e.$$typeof]:iT;var t}var sT=Object.defineProperty,lT=Object.getOwnPropertyNames,l0=Object.getOwnPropertySymbols,uT=Object.getOwnPropertyDescriptor,cT=Object.getPrototypeOf,u0=Object.prototype;function sb(e,t,n){if(typeof t!="string"){if(u0){var r=cT(t);r&&r!==u0&&sb(e,r,n)}var i=lT(t);l0&&(i=i.concat(l0(t)));for(var o=s0(e),a=s0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in oT||n&&n[s]||a&&s in a||o&&s in o)){var u=uT(t,s);try{sT(e,s,u)}catch{}}}}return e}function Ui(e){return typeof e=="function"}function Dh(e){return typeof e=="object"&&"styledComponentId"in e}function Br(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Pl(e,t){return e.join(t||"")}function ha(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Gf(e,t,n){if(n===void 0&&(n=!1),!n&&!ha(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Gf(e[r],t[r]);else if(ha(t))for(var r in t)e[r]=Gf(e[r],t[r]);return e}function Lh(e,t){Object.defineProperty(e,"toString",{value:t})}var dT=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw $a(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+$h;return n},e}(),fT="style[".concat(Vi,"][").concat(eb,'="').concat(wu,'"]'),pT=new RegExp("^".concat(Vi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),c0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Yf=function(e){if(!e)return document;if(c0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(c0(t))return t}return document},hT=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},mT=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split($h),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(pT);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(Qk(c,u),hT(e,c,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},Yc=function(e){for(var t=Yf(e.options.target).querySelectorAll(fT),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Vi)!==Jx&&(mT(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function gT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var lb=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Vi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Vi,Jx),r.setAttribute(eb,wu);var a=gT();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},vT=function(){function e(t){this.element=lb(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw $a(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),yT=function(){function e(t){this.element=lb(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),xT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),d0=Go,bT={isServer:!Go,useCSSOMInjection:!Kk},Ol=function(){function e(t,n,r){t===void 0&&(t=Hi),n===void 0&&(n={});var i=this;this.options=ot(ot({},bT),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Go&&d0&&(d0=!1,Yc(this)),Lh(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(d){var g=function(f){return Tl.get(f)}(d);if(g===void 0)return"continue";var p=o.names.get(g);if(p===void 0||!p.size)return"continue";var h=a.getGroup(d);if(h.length===0)return"continue";var v=Vi+".g"+d+'[id="'+g+'"]',w="";p.forEach(function(f){f.length>0&&(w+=f+",")}),s+=h+v+'{content:"'+w+'"}'+$h},c=0;c<l;c++)u(c);return s}(i)})}return e.registerId=function(t){return Io(t)},e.prototype.rehydrate=function(){!this.server&&Go&&Yc(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ot(ot({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Go&&t.target!==this.options.target&&Yf(this.options.target)!==Yf(t.target)&&Yc(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new xT(i):r?new vT(i):new yT(i)}(this.options),new dT(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Io(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Io(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Io(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wT=/&/g,jn=47,Lr=42;function f0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==jn||e.charCodeAt(o+1)!==Lr)if(i)a===Lr&&e.charCodeAt(o+1)===jn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function ub(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ub(n.children,t)),n})}function ST(e){var t,n,r,i=e===void 0?Hi:e,o=i.options,a=o===void 0?Hi:o,l=i.plugins,s=l===void 0?Ih:l,u=function(h,v,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):h},c=s.slice();c.push(function(h){h.type===vu&&h.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),h.props[0]=h.props[0].replace(wT,n).replace(r,u))}),a.prefix&&c.push(qk),c.push(Wk);var d=[],g=Gk(c.concat(Yk(function(h){return d.push(h)}))),p=function(h,v,w,f){v===void 0&&(v=""),w===void 0&&(w=""),f===void 0&&(f="&"),t=f,n=v,r=void 0;var m=function(S){if(!f0(S))return S;for(var E=S.length,k="",_=0,C=0,O=0,M=!1,I=0;I<E;I++){var $=S.charCodeAt(I);if(O!==0||M||$!==jn||S.charCodeAt(I+1)!==Lr)if(M)$===Lr&&S.charCodeAt(I+1)===jn&&(M=!1,I++);else if($!==34&&$!==39||I!==0&&S.charCodeAt(I-1)===92){if(O===0)if($===123)C++;else if($===125){if(--C<0){for(var D=I+1;D<E;){var R=S.charCodeAt(D);if(R===59||R===10)break;D++}D<E&&S.charCodeAt(D)===59&&D++,C=0,I=D-1,_=D;continue}C===0&&(k+=S.substring(_,I+1),_=I+1)}else $===59&&C===0&&(k+=S.substring(_,I+1),_=I+1)}else O===0?O=$:O===$&&(O=0);else M=!0,I++}if(_<E){var L=S.substring(_);f0(L)||(k+=L)}return k}(function(S){if(S.indexOf("//")===-1)return S;for(var E=S.length,k=[],_=0,C=0,O=0,M=0;C<E;){var I=S.charCodeAt(C);if(I!==34&&I!==39||C!==0&&S.charCodeAt(C-1)===92)if(O===0)if(I===jn&&C+1<E&&S.charCodeAt(C+1)===Lr){for(C+=2;C+1<E&&(S.charCodeAt(C)!==Lr||S.charCodeAt(C+1)!==jn);)C++;C+=2}else if(I===40&&C>=3&&(32|S.charCodeAt(C-1))==108&&(32|S.charCodeAt(C-2))==114&&(32|S.charCodeAt(C-3))==117)M=1,C++;else if(M>0)I===41?M--:I===40&&M++,C++;else if(I===Lr&&C+1<E&&S.charCodeAt(C+1)===jn)C>_&&k.push(S.substring(_,C)),_=C+=2;else if(I===jn&&C+1<E&&S.charCodeAt(C+1)===jn){for(C>_&&k.push(S.substring(_,C));C<E&&S.charCodeAt(C)!==10;)C++;_=C}else C++;else C++;else O===0?O=I:O===I&&(O=0),C++}return _===0?S:(_<E&&k.push(S.substring(_)),k.join(""))}(h)),x=Hk(w||v?"".concat(w," ").concat(v," { ").concat(m," }"):m);return a.namespace&&(x=ub(x,a.namespace)),d=[],kl(x,g),d};return p.hash=s.length?s.reduce(function(h,v){return v.name||$a(15),Dr(h,v.name)},5381).toString():"",p}var _T=new Ol,qf=ST(),cb=q.createContext({shouldForwardProp:void 0,styleSheet:_T,stylis:qf});cb.Consumer;q.createContext(void 0);function Xf(){return q.useContext(cb)}var db=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=qf);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Lh(this,function(){throw $a(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=qf),this.name+t.hash},e}();function ET(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Xk||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var CT=function(e){return e>="A"&&e<="Z"};function p0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;CT(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var fb=function(e){return e==null||e===!1||e===""},pb=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!fb(r)&&(Array.isArray(r)&&r.isCss||Ui(r)?t.push("".concat(p0(n),":"),r,";"):ha(r)?t.push.apply(t,zi(zi(["".concat(n," {")],pb(r),!1),["}"],!1)):t.push("".concat(p0(n),": ").concat(ET(n,r),";")))}return t};function wr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(fb(e))return i;if(Dh(e))return i.push(".".concat(e.styledComponentId)),i;if(Ui(e)){if(!Ui(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return wr(o,t,n,r,i)}var a;if(e instanceof db)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(ha(e)){for(var l=pb(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)wr(e[s],t,n,r,i);return i}function hb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ui(n)&&!Dh(n))return!1}return!0}var kT=rb(wu),TT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&hb(t),this.componentId=n,this.baseHash=Dr(kT,n),this.baseStyle=r,Ol.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Br(i,this.staticRulesId);else{var o=Pl(wr(this.rules,t,n,r)),a=Wf(Dr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Br(i,a),this.staticRulesId=a}else{for(var s=Dr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var g=Pl(wr(d,t,n,r));s=Dr(Dr(s,String(c)),g),u+=g}}if(u){var p=Wf(s>>>0);if(!n.hasNameForId(this.componentId,p)){var h=r(u,".".concat(p),void 0,this.componentId);n.insertRules(this.componentId,p,h)}i=Br(i,p)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Io(this.componentId)):""}},e}(),Rh=q.createContext(void 0);Rh.Consumer;var qc={};function PT(e,t,n){var r=Dh(e),i=e,o=!Gc(e),a=t.attrs,l=a===void 0?Ih:a,s=t.componentId,u=s===void 0?function(S,E){var k=typeof S!="string"?"sc":o0(S);qc[k]=(qc[k]||0)+1;var _="".concat(k,"-").concat(jh(wu+k+qc[k]));return E?"".concat(E,"-").concat(_):_}(t.displayName,t.parentComponentId):s,c=t.displayName,d=c===void 0?function(S){return Gc(S)?"styled.".concat(S):"Styled(".concat(nT(S),")")}(e):c,g=t.displayName&&t.componentId?"".concat(o0(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,h=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;h=function(S,E){return v(S,E)&&w(S,E)}}else h=v}var f=new TT(n,g,r?i.componentStyle:void 0);function m(S,E){return function(k,_,C){var O=k.attrs,M=k.componentStyle,I=k.defaultProps,$=k.foldedComponentIds,D=k.styledComponentId,R=k.target,L=q.useContext(Rh),N=Xf(),F=k.shouldForwardProp||N.shouldForwardProp,P=tb(_,L,I)||Hi,j=function(X,ee,fe){for(var be,ie=ot(ot({},ee),{className:void 0,theme:fe}),$e=0;$e<X.length;$e+=1){var Be=Ui(be=X[$e])?be(ie):be;for(var Ve in Be)Ve==="className"?ie.className=Br(ie.className,Be[Ve]):Ve==="style"?ie.style=ot(ot({},ie.style),Be[Ve]):ie[Ve]=Be[Ve]}return"className"in ee&&typeof ee.className=="string"&&(ie.className=Br(ie.className,ee.className)),ie}(O,_,P),A=j.as||R,B={};for(var z in j)j[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&j.theme===P||(z==="forwardedAs"?B.as=j.forwardedAs:F&&!F(z,A)||(B[z]=j[z]));var H=function(X,ee){var fe=Xf(),be=X.generateAndInjectStyles(ee,fe.styleSheet,fe.stylis);return be}(M,j),G=H.className,W=Br($,D);return G&&(W+=" "+G),j.className&&(W+=" "+j.className),B[Gc(A)&&!nb.has(A)?"class":"className"]=W,C&&(B.ref=C),b.createElement(A,B)}(x,S,E)}m.displayName=d;var x=q.forwardRef(m);return x.attrs=p,x.componentStyle=f,x.displayName=d,x.shouldForwardProp=h,x.foldedComponentIds=r?Br(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=g,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(E){for(var k=[],_=1;_<arguments.length;_++)k[_-1]=arguments[_];for(var C=0,O=k;C<O.length;C++)Gf(E,O[C],!0);return E}({},i.defaultProps,S):S}}),Lh(x,function(){return".".concat(x.styledComponentId)}),o&&sb(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function h0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var m0=function(e){return Object.assign(e,{isCss:!0})};function Ah(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ui(e)||ha(e))return m0(wr(h0(Ih,zi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?wr(r):m0(wr(h0(r,t)))}function Kf(e,t,n){if(n===void 0&&(n=Hi),!t)throw $a(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Ah.apply(void 0,zi([i],o,!1)))};return r.attrs=function(i){return Kf(e,t,ot(ot({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Kf(e,t,ot(ot({},n),i))},r}var mb=function(e){return Kf(PT,e)},T=mb;nb.forEach(function(e){T[e]=mb(e)});var OT=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=hb(t),Ol.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Pl(wr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ol.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function MT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ah.apply(void 0,zi([e],t,!1)),i="sc-global-".concat(jh(JSON.stringify(r))),o=new OT(r,i),a=new WeakMap,l=function(u){var c=Xf(),d=q.useContext(Rh),g=a.get(c.styleSheet);return g===void 0&&(g=c.styleSheet.allocateGSInstance(i),a.set(c.styleSheet,g)),(typeof window>"u"||!c.styleSheet.server)&&s(g,u,c.styleSheet,d,c.stylis),q.useLayoutEffect(function(){return c.styleSheet.server||s(g,u,c.styleSheet,d,c.stylis),function(){var p;o.removeStyles(g,c.styleSheet),p=c.styleSheet.options.target,typeof document<"u"&&(p??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(h){return h.remove()})}},[g,u,c.styleSheet,d,c.stylis]),null};function s(u,c,d,g,p){if(o.isStatic)o.renderStyles(u,Zk,d,p);else{var h=ot(ot({},c),{theme:tb(c,g,l.defaultProps)});o.renderStyles(u,h,d,p)}}return q.memo(l)}function Fh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Pl(Ah.apply(void 0,zi([e],t,!1))),i=jh(r);return new db(i,r)}const $T=T.div`
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
   
  }
`,jT=T.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,DT=T.div`

  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`,LT=T.div`
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
`;const RT=T(Me)`
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
`;const AT=T.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,FT=T.button`
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
`;const NT=T.div`
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
`,zT=T.button`
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
`,BT=T.nav`
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
`,VT=T.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,HT=T.div`
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



`,WT=T.input`
  
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
`,GT=T.button`
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
   
`,YT=T.svg`
  width: 24px;
  height: 24px;
  

`,dn="/Didiv/assets/symbol-defs-f1e4efb3.svg",qT=()=>{const[e,t]=b.useState("");return y.jsxs(UT,{children:[y.jsx(WT,{name:"site-search",value:e,onChange:n=>t(n.target.value),placeholder:"Пошук",autoComplete:"off"}),y.jsx(GT,{className:"search-button",children:y.jsx(YT,{children:y.jsx("use",{href:`${dn}#icon-search`})})})]})};var gb={exports:{}},vb={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=b;function XT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var KT=typeof Object.is=="function"?Object.is:XT,ZT=Ia.useSyncExternalStore,QT=Ia.useRef,JT=Ia.useEffect,eP=Ia.useMemo,tP=Ia.useDebugValue;vb.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=QT(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=eP(function(){function s(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&a.hasValue){var h=a.value;if(i(h,p))return d=h}return d=p}if(h=d,KT(c,p))return h;var v=r(p);return i!==void 0&&i(h,v)?(c=p,h):(c=p,d=v)}var u=!1,c,d,g=n===void 0?null:n;return[function(){return s(t())},g===null?void 0:function(){return s(g())}]},[t,n,r,i]);var l=ZT(e,o[0],o[1]);return JT(function(){a.hasValue=!0,a.value=l},[l]),tP(l),l};gb.exports=vb;var nP=gb.exports;function rP(e){e()}function iP(){let e=null,t=null;return{clear(){e=null,t=null},notify(){rP(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var g0={notify(){},get:()=>[]};function oP(e,t){let n,r=g0,i=0,o=!1;function a(v){c();const w=r.subscribe(v);let f=!1;return()=>{f||(f=!0,w(),d())}}function l(){r.notify()}function s(){h.onStateChange&&h.onStateChange()}function u(){return o}function c(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=iP())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=g0)}function g(){o||(o=!0,c())}function p(){o&&(o=!1,d())}const h={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:g,tryUnsubscribe:p,getListeners:()=>r};return h}var aP=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sP=aP(),lP=()=>typeof navigator<"u"&&navigator.product==="ReactNative",uP=lP(),cP=()=>sP||uP?b.useLayoutEffect:b.useEffect,dP=cP(),Xc=Symbol.for("react-redux-context"),Kc=typeof globalThis<"u"?globalThis:{};function fP(){if(!b.createContext)return{};const e=Kc[Xc]??(Kc[Xc]=new Map);let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var Er=fP();function pP(e){const{children:t,context:n,serverState:r,store:i}=e,o=b.useMemo(()=>{const s=oP(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=b.useMemo(()=>i.getState(),[i]);dP(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||Er;return b.createElement(l.Provider,{value:o},t)}var hP=pP;function Nh(e=Er){return function(){return b.useContext(e)}}var yb=Nh();function xb(e=Er){const t=e===Er?yb:Nh(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var mP=xb();function gP(e=Er){const t=e===Er?mP:xb(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Kn=gP(),vP=(e,t)=>e===t;function yP(e=Er){const t=e===Er?yb:Nh(e),n=(r,i={})=>{const{equalityFn:o=vP}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:u}=a;b.useRef(!0);const c=b.useCallback({[r.name](g){return r(g)}}[r.name],[r]),d=nP.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,c,o);return b.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Dt=yP();const xP=T(Me)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,bP=T.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,wP=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
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
`,_P=({onClick:e})=>{const t=Dt(n=>n.cart.items.length);return y.jsx(xP,{to:"/cart",children:y.jsxs(wP,{onClick:e,children:[y.jsx(bP,{children:y.jsx("use",{href:`${dn}#icon-cart`})}),t>0&&y.jsx(SP,{children:t})]})})},EP=T.nav`
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
`,CP=()=>y.jsxs(EP,{children:[y.jsx(cs,{to:"/",children:"Головна"}),y.jsx(cs,{to:"/about",children:"Про нас"}),y.jsx(cs,{to:"/catalog",children:"Каталог"}),y.jsx(cs,{to:"/contacts",children:"Контакти"})]}),kP=T.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,TP=T(Me)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
 
  }
       
`,PP=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,OP=T.div`

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
`,MP=({onClick:e})=>{const t=Dt(n=>n.favorites.items.length);return y.jsx(TP,{to:"/favorite",children:y.jsxs(PP,{onClick:e,children:[y.jsx(kP,{children:y.jsx("use",{href:`${dn}#icon-heart`})}),t>0&&y.jsx(OP,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $P=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=e=>{const t=IP(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DP=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>b.createElement("svg",{ref:s,...jP,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:bb("lucide",i),...!o&&!DP(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,c])=>b.createElement(u,c)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(LP,{ref:o,iconNode:t,className:bb(`lucide-${$P(v0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=v0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],wb=Pn("arrow-right",RP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],zh=Pn("heart",AP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],NP=Pn("house",FP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],BP=Pn("info",zP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],HP=Pn("mail",VP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],WP=Pn("shopping-bag",UP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],ja=Pn("shopping-cart",GP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Sb=Pn("sliders-horizontal",YP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],_b=Pn("trash-2",qP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Eb=Pn("x",XP),KP=()=>{const[e,t]=b.useState(!1);return y.jsx($T,{children:y.jsx(IT,{children:y.jsxs(jT,{children:[y.jsxs(DT,{children:[y.jsx(RT,{to:"/",children:"Дідів хлів"}),y.jsxs(LT,{children:[y.jsx(_P,{}),y.jsx(MP,{}),y.jsx(CP,{}),y.jsx(FT,{onClick:()=>t(!e),children:y.jsx(AT,{children:y.jsx("use",{href:`${dn}#icon-menu`})})}),y.jsx(HT,{open:e,onClick:()=>t(!1)}),y.jsxs(NT,{open:e,children:[y.jsx(zT,{onClick:()=>t(!1),children:y.jsx(Eb,{size:28,strokeWidth:1.5})}),y.jsxs(BT,{children:[y.jsxs(us,{onClick:()=>t(!1),to:"/",children:[y.jsx(NP,{size:22,strokeWidth:1.5})," Головна"]}),y.jsxs(us,{onClick:()=>t(!1),to:"/about",children:[y.jsx(BP,{size:22,strokeWidth:1.5})," Про нас"]}),y.jsxs(us,{onClick:()=>t(!1),to:"/catalog",children:[y.jsx(WP,{size:22,strokeWidth:1.5})," Каталог"]}),y.jsxs(us,{onClick:()=>t(!1),to:"/contacts",children:[y.jsx(HP,{size:22,strokeWidth:1.5})," Контакти"]})]}),y.jsx(VT,{children:y.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),y.jsx(qT,{})]})})})},ZP=T.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,QP=T.footer`
 
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
`,JP=T.div`
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
`,Zc=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,Qc=T.h3`
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
`,eO=T.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,y0=T.a`
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
`,tO=()=>y.jsx(ZP,{children:y.jsxs(QP,{children:[y.jsxs(JP,{children:[y.jsxs(Zc,{children:[y.jsx(Qc,{children:"Навігація"}),y.jsx(gn,{to:"/",children:"Головна"}),y.jsx(gn,{to:"/about",children:"Про нас"}),y.jsx(gn,{to:"/catalog",children:"Каталог"}),y.jsx(gn,{to:"/contacts",children:"Контакти"})]}),y.jsxs(Zc,{children:[y.jsx(Qc,{children:"Інформація"}),y.jsx(gn,{to:"/delivery",children:"Оплата і доставка"}),y.jsx(gn,{children:"Повернення"}),y.jsx(gn,{children:"Гарантія"}),y.jsx(gn,{children:"Політика конфіденційності"})]})]}),y.jsxs(Zc,{children:[y.jsx(Qc,{children:"Контакти"}),y.jsx(gn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),y.jsx(gn,{href:"mailto:email@email.com",children:"email@email.com"}),y.jsxs(eO,{children:[y.jsx(y0,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${dn}#icon-instagram`})})}),y.jsx(y0,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${dn}#icon-telegram`})})})]})]})]})}),nO=()=>y.jsxs(y.Fragment,{children:[y.jsx(KP,{}),y.jsx("main",{className:"main-content",children:y.jsx(cE,{})}),y.jsx(tO,{})]}),rO=T.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,iO=T.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
      text-align: center;

  @media screen and (min-width: 768px) {
 font-size: 35px;

  }

`,oO=T.div`
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
`,aO=T.div`
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
`,sO=T(Me)`
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
`,lO=T.span`
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
`,uO=T.div`
  padding: 10px 0;
`,cO=T.h3`
  font-size: 15px;
  font-weight: 600;
 
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,dO=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,fO=T.span`
  font-size: 17px;
  font-weight: 800;
  color: var(--black-color);
`,pO=T.button`
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

`;const hO=T(Me)`
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

`,mO=T.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,gO=T.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function qe(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var vO=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),x0=vO,Jc=()=>Math.random().toString(36).substring(7).split("").join("."),yO={INIT:`@@redux/INIT${Jc()}`,REPLACE:`@@redux/REPLACE${Jc()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Jc()}`},Ml=yO;function Bh(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Vh(e,t,n){if(typeof e!="function")throw new Error(qe(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(qe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(qe(1));return n(Vh)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function u(){a===o&&(a=new Map,o.forEach((w,f)=>{a.set(f,w)}))}function c(){if(s)throw new Error(qe(3));return i}function d(w){if(typeof w!="function")throw new Error(qe(4));if(s)throw new Error(qe(5));let f=!0;u();const m=l++;return a.set(m,w),function(){if(f){if(s)throw new Error(qe(6));f=!1,u(),a.delete(m),o=null}}}function g(w){if(!Bh(w))throw new Error(qe(7));if(typeof w.type>"u")throw new Error(qe(8));if(typeof w.type!="string")throw new Error(qe(17));if(s)throw new Error(qe(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(m=>{m()}),w}function p(w){if(typeof w!="function")throw new Error(qe(10));r=w,g({type:Ml.REPLACE})}function h(){const w=d;return{subscribe(f){if(typeof f!="object"||f===null)throw new Error(qe(11));function m(){const S=f;S.next&&S.next(c())}return m(),{unsubscribe:w(m)}},[x0](){return this}}}return g({type:Ml.INIT}),{dispatch:g,subscribe:d,getState:c,replaceReducer:p,[x0]:h}}function xO(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Ml.INIT})>"u")throw new Error(qe(12));if(typeof n(void 0,{type:Ml.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(qe(13))})}function bO(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{xO(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],g=n[d],p=a[d],h=g(p,l);if(typeof h>"u")throw l&&l.type,new Error(qe(14));u[d]=h,s=s||h!==p}return s=s||r.length!==Object.keys(a).length,s?u:a}}function $l(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function wO(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(qe(15))};const a={getState:i.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(a));return o=$l(...l)(i.dispatch),{...i,dispatch:o}}}function SO(e){return Bh(e)&&"type"in e&&typeof e.type=="string"}var Cb=Symbol.for("immer-nothing"),b0=Symbol.for("immer-draftable"),pt=Symbol.for("immer-state");function on(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var It=Object,Wi=It.getPrototypeOf,Il="constructor",Su="prototype",Zf="configurable",jl="enumerable",Vs="writable",ma="value",Gn=e=>!!e&&!!e[pt];function fn(e){var t;return e?kb(e)||Eu(e)||!!e[b0]||!!((t=e[Il])!=null&&t[b0])||Cu(e)||ku(e):!1}var _O=It[Su][Il].toString(),w0=new WeakMap;function kb(e){if(!e||!Hh(e))return!1;const t=Wi(e);if(t===null||t===It[Su])return!0;const n=It.hasOwnProperty.call(t,Il)&&t[Il];if(n===Object)return!0;if(!fi(n))return!1;let r=w0.get(n);return r===void 0&&(r=Function.toString.call(n),w0.set(n,r)),r===_O}function _u(e,t,n=!0){Da(e)===0?(n?Reflect.ownKeys(e):It.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Da(e){const t=e[pt];return t?t.type_:Eu(e)?1:Cu(e)?2:ku(e)?3:0}var S0=(e,t,n=Da(e))=>n===2?e.has(t):It[Su].hasOwnProperty.call(e,t),Qf=(e,t,n=Da(e))=>n===2?e.get(t):e[t],Dl=(e,t,n,r=Da(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function EO(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Eu=Array.isArray,Cu=e=>e instanceof Map,ku=e=>e instanceof Set,Hh=e=>typeof e=="object",fi=e=>typeof e=="function",ed=e=>typeof e=="boolean";function CO(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Ln=e=>e.copy_||e.base_,Uh=e=>e.modified_?e.copy_:e.base_;function Jf(e,t){if(Cu(e))return new Map(e);if(ku(e))return new Set(e);if(Eu(e))return Array[Su].slice.call(e);const n=kb(e);if(t===!0||t==="class_only"&&!n){const r=It.getOwnPropertyDescriptors(e);delete r[pt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[Vs]===!1&&(l[Vs]=!0,l[Zf]=!0),(l.get||l.set)&&(r[a]={[Zf]:!0,[Vs]:!0,[jl]:l[jl],[ma]:e[a]})}return It.create(Wi(e),r)}else{const r=Wi(e);if(r!==null&&n)return{...e};const i=It.create(r);return It.assign(i,e)}}function Wh(e,t=!1){return Tu(e)||Gn(e)||!fn(e)||(Da(e)>1&&It.defineProperties(e,{set:ds,add:ds,clear:ds,delete:ds}),It.freeze(e),t&&_u(e,(n,r)=>{Wh(r,!0)},!1)),e}function kO(){on(2)}var ds={[ma]:kO};function Tu(e){return e===null||!Hh(e)?!0:It.isFrozen(e)}var Ll="MapSet",ep="Patches",_0="ArrayMethods",Tb={};function Zr(e){const t=Tb[e];return t||on(0,e),t}var E0=e=>!!Tb[e],ga,Pb=()=>ga,TO=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:E0(Ll)?Zr(Ll):void 0,arrayMethodsPlugin_:E0(_0)?Zr(_0):void 0});function C0(e,t){t&&(e.patchPlugin_=Zr(ep),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function tp(e){np(e),e.drafts_.forEach(PO),e.drafts_=null}function np(e){e===ga&&(ga=e.parent_)}var k0=e=>ga=TO(ga,e);function PO(e){const t=e[pt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function T0(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[pt].modified_&&(tp(t),on(4)),fn(e)&&(e=P0(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[pt].base_,e,t)}else e=P0(t,n);return OO(t,e,!0),tp(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Cb?e:void 0}function P0(e,t){if(Tu(t))return t;const n=t[pt];if(!n)return Rl(t,e.handledSet_,e);if(!Pu(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);$b(n,e)}return n.copy_}function OO(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Wh(t,n)}function Ob(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var Pu=(e,t)=>e.scope_===t,MO=[];function Mb(e,t,n,r){const i=Ln(e),o=e.type_;if(r!==void 0&&Qf(i,r,o)===t){Dl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;_u(i,(s,u)=>{if(Gn(u)){const c=l.get(u)||[];c.push(s),l.set(u,c)}})}const a=e.draftLocations_.get(t)??MO;for(const l of a)Dl(i,l,n,o)}function $O(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!Pu(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=Uh(o);Mb(e,o.draft_??o,a,n),$b(o,i)})}function $b(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}Ob(e)}}function IO(e,t,n){const{scope_:r}=e;if(Gn(n)){const i=n[pt];Pu(i,r)&&i.callbacks_.push(function(){Hs(e);const a=Uh(i);Mb(e,n,a,t)})}else fn(n)&&e.callbacks_.push(function(){const o=Ln(e);e.type_===3?o.has(n)&&Rl(n,r.handledSet_,r):Qf(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Rl(Qf(e.copy_,t,e.type_),r.handledSet_,r)})}function Rl(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Gn(e)||t.has(e)||!fn(e)||Tu(e)||(t.add(e),_u(e,(r,i)=>{if(Gn(i)){const o=i[pt];if(Pu(o,n)){const a=Uh(o);Dl(e,r,a,e.type_),Ob(o)}}else fn(i)&&Rl(i,t,n)})),e}function jO(e,t){const n=Eu(e),r={type_:n?1:0,scope_:t?t.scope_:Pb(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Al;n&&(i=[r],o=va);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var Al={get(e,t){if(t===pt)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Ln(e);if(!S0(i,t,e.type_))return DO(e,i,t);const o=i[t];if(e.finalized_||!fn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&CO(t))return o;if(o===td(e.base_,t)){Hs(e);const a=e.type_===1?+t:t,l=ip(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Ln(e)},ownKeys(e){return Reflect.ownKeys(Ln(e))},set(e,t,n){const r=Ib(Ln(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=td(Ln(e),t),o=i==null?void 0:i[pt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(EO(n,i)&&(n!==void 0||S0(e.base_,t,e.type_)))return!0;Hs(e),rp(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),IO(e,t,n)),!0},deleteProperty(e,t){return Hs(e),td(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),rp(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Ln(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Vs]:!0,[Zf]:e.type_!==1||t!=="length",[jl]:r[jl],[ma]:n[t]}},defineProperty(){on(11)},getPrototypeOf(e){return Wi(e.base_)},setPrototypeOf(){on(12)}},va={};for(let e in Al){let t=Al[e];va[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}va.deleteProperty=function(e,t){return va.set.call(this,e,t,void 0)};va.set=function(e,t,n){return Al.set.call(this,e[0],t,n,e[0])};function td(e,t){const n=e[pt];return(n?Ln(n):e)[t]}function DO(e,t,n){var i;const r=Ib(t,n);return r?ma in r?r[ma]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function Ib(e,t){if(!(t in e))return;let n=Wi(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Wi(n)}}function rp(e){e.modified_||(e.modified_=!0,e.parent_&&rp(e.parent_))}function Hs(e){e.copy_||(e.assigned_=new Map,e.copy_=Jf(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var LO=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(fi(t)&&!fi(n)){const o=n;n=t;const a=this;return function(s=o,...u){return a.produce(s,c=>n.call(this,c,...u))}}fi(n)||on(6),r!==void 0&&!fi(r)&&on(7);let i;if(fn(t)){const o=k0(this),a=ip(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?tp(o):np(o)}return C0(o,r),T0(i,o)}else if(!t||!Hh(t)){if(i=n(t),i===void 0&&(i=t),i===Cb&&(i=void 0),this.autoFreeze_&&Wh(i,!0),r){const o=[],a=[];Zr(ep).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else on(1,t)},this.produceWithPatches=(t,n)=>{if(fi(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},ed(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),ed(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),ed(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){fn(e)||on(8),Gn(e)&&(e=RO(e));const t=k0(this),n=ip(t,e,void 0);return n[pt].isManual_=!0,np(t),n}finishDraft(e,t){const n=e&&e[pt];(!n||!n.isManual_)&&on(9);const{scope_:r}=n;return C0(r,t),T0(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Zr(ep).applyPatches_;return Gn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function ip(e,t,n,r){const[i,o]=Cu(t)?Zr(Ll).proxyMap_(t,n):ku(t)?Zr(Ll).proxySet_(t,n):jO(t,n);return((n==null?void 0:n.scope_)??Pb()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?$O(n,o,r):o.callbacks_.push(function(s){var c;(c=s.mapSetPlugin_)==null||c.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),i}function RO(e){return Gn(e)||on(10,e),jb(e)}function jb(e){if(!fn(e)||Tu(e))return e;const t=e[pt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Jf(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=Jf(e,!0);return _u(n,(i,o)=>{Dl(n,i,jb(o))},r),t&&(t.finalized_=!1),n}var AO=new LO,Db=AO.produce;function Lb(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var FO=Lb(),NO=Lb,zO=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?$l:$l.apply(null,arguments)};function O0(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(zn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>SO(r)&&r.type===e,n}var Rb=class jo extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,jo.prototype)}static get[Symbol.species](){return jo}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new jo(...t[0].concat(this)):new jo(...t.concat(this))}};function M0(e){return fn(e)?Db(e,()=>{}):e}function fs(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function BO(e){return typeof e=="boolean"}var VO=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new Rb;return n&&(BO(n)?a.push(FO):a.push(NO(n.extraArgument))),a},HO="RTK_autoBatch",$0=e=>t=>{setTimeout(t,e)},UO=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:$0(10):e.type==="callback"?e.queueNotification:$0(e.timeout),u=()=>{a=!1,o&&(o=!1,l.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),g=r.subscribe(d);return l.add(c),()=>{g(),l.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[HO]),o=!i,o&&(a||(a=!0,s(u))),r.dispatch(c)}finally{i=!0}}})},WO=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new Rb(e);return r&&i.push(UO(typeof r=="object"?r:void 0)),i};function GO(e){const t=VO(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(Bh(n))s=bO(n);else throw new Error(zn(1));let u;typeof r=="function"?u=r(t):u=t();let c=$l;i&&(c=zO({trace:!1,...typeof i=="object"&&i}));const d=wO(...u),g=WO(d);let p=typeof l=="function"?l(g):g();const h=c(...p);return Vh(s,a,h)}function Ab(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(zn(28));if(l in t)throw new Error(zn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function YO(e){return typeof e=="function"}function qO(e,t){let[n,r,i]=Ab(t),o;if(YO(e))o=()=>M0(e());else{const l=M0(e);o=()=>l}function a(l=o(),s){let u=[n[s.type],...r.filter(({matcher:c})=>c(s)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Gn(c)){const p=d(c,s);return p===void 0?c:p}else{if(fn(c))return Db(c,g=>d(g,s));{const g=d(c,s);if(g===void 0){if(c===null)return c;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}}return c},l)}return a.getInitialState=o,a}var XO=Symbol.for("rtk-slice-createasyncthunk");function KO(e,t){return`${e}/${t}`}function ZO({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[XO];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(zn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(JO()):i.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(S,E){const k=typeof S=="string"?S:S.type;if(!k)throw new Error(zn(12));if(k in u.sliceCaseReducersByType)throw new Error(zn(13));return u.sliceCaseReducersByType[k]=E,c},addMatcher(S,E){return u.sliceMatchers.push({matcher:S,reducer:E}),c},exposeAction(S,E){return u.actionCreators[S]=E,c},exposeCaseReducer(S,E){return u.sliceCaseReducersByName[S]=E,c}};s.forEach(S=>{const E=l[S],k={reducerName:S,type:KO(o,S),createNotation:typeof i.reducers=="function"};tM(E)?rM(k,E,c,t):eM(k,E,c)});function d(){const[S={},E=[],k=void 0]=typeof i.extraReducers=="function"?Ab(i.extraReducers):[i.extraReducers],_={...S,...u.sliceCaseReducersByType};return qO(i.initialState,C=>{for(let O in _)C.addCase(O,_[O]);for(let O of u.sliceMatchers)C.addMatcher(O.matcher,O.reducer);for(let O of E)C.addMatcher(O.matcher,O.reducer);k&&C.addDefaultCase(k)})}const g=S=>S,p=new Map,h=new WeakMap;let v;function w(S,E){return v||(v=d()),v(S,E)}function f(){return v||(v=d()),v.getInitialState()}function m(S,E=!1){function k(C){let O=C[S];return typeof O>"u"&&E&&(O=fs(h,k,f)),O}function _(C=g){const O=fs(p,E,()=>new WeakMap);return fs(O,C,()=>{const M={};for(const[I,$]of Object.entries(i.selectors??{}))M[I]=QO($,C,()=>fs(h,C,f),E);return M})}return{reducerPath:S,getSelectors:_,get selectors(){return _(k)},selectSlice:k}}const x={name:o,reducer:w,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:f,...m(a),injectInto(S,{reducerPath:E,...k}={}){const _=E??a;return S.inject({reducerPath:_,reducer:w},k),{...x,...m(_,!0)}}};return x}}function QO(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var Fb=ZO();function JO(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function eM({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!nM(r))throw new Error(zn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?O0(e,a):O0(e))}function tM(e){return e._reducerDefinitionType==="asyncThunk"}function nM(e){return e._reducerDefinitionType==="reducerWithPrepare"}function rM({type:e,reducerName:t},n,r,i){if(!i)throw new Error(zn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:u,options:c}=n,d=i(e,o,c);r.exposeAction(t,d),a&&r.addCase(d.fulfilled,a),l&&r.addCase(d.pending,l),s&&r.addCase(d.rejected,s),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:a||ps,pending:l||ps,rejected:s||ps,settled:u||ps})}function ps(){}function zn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Nb=Fb({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===t.payload.id);r&&r.quantity>=n.stock||(r?r.quantity=(r.quantity||0)+1:e.items.push({...t.payload,quantity:1}))},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:La,removeFromCart:iM,clearCart:Gh,addAllToCart:oM,incrementQuantity:aM,decrementQuantity:sM}=Nb.actions,lM=Nb.reducer;function zb(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=zb(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Ur(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=zb(e))&&(r&&(r+=" "),r+=t);return r}function uM(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}uM(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Ra=e=>typeof e=="number"&&!isNaN(e),Qr=e=>typeof e=="string",Yn=e=>typeof e=="function",cM=e=>Qr(e)||Ra(e),op=e=>Qr(e)||Yn(e)?e:null,dM=(e,t)=>e===!1||Ra(e)&&e>0?e:t,ap=e=>b.isValidElement(e)||Qr(e)||Yn(e)||Ra(e);function fM(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function pM({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:c,playToast:d}){let g=n?`${e}--${a}`:e,p=n?`${t}--${a}`:t,h=b.useRef(0);return b.useLayoutEffect(()=>{let v=u.current,w=g.split(" "),f=m=>{m.target===u.current&&(d(),v.removeEventListener("animationend",f),v.removeEventListener("animationcancel",f),h.current===0&&m.type!=="animationcancel"&&v.classList.remove(...w))};v.classList.add(...w),v.addEventListener("animationend",f),v.addEventListener("animationcancel",f)},[]),b.useEffect(()=>{let v=u.current,w=()=>{v.removeEventListener("animationend",w),r?fM(v,s,i):s()};c||(l?w():(h.current=1,v.className+=` ${p}`,v.addEventListener("animationend",w)))},[c]),q.createElement(q.Fragment,null,o)}}function I0(e,t){return{content:Bb(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Bb(e,t,n=!1){return b.isValidElement(e)&&!Qr(e.type)?b.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Yn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function hM({closeToast:e,theme:t,ariaLabel:n="close"}){return q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function mM({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:c}){let d=i||a&&l===0,g={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(g.transform=`scaleX(${l})`);let p=Ur("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${c}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),h=Yn(o)?o({rtl:s,type:r,defaultClassName:p}):Ur(p,o),v={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return q.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":d},q.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${c} Toastify__progress-bar--${r}`}),q.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:h,style:g,...v}))}var gM=1,Vb=()=>`${gM++}`;function vM(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,u=new Set,c=m=>(u.add(m),()=>u.delete(m)),d=()=>{a=Array.from(s.values()),u.forEach(m=>m())},g=({containerId:m,toastId:x,updateId:S})=>{let E=m?m!==e:e!==1,k=s.has(x)&&S==null;return E||k},p=(m,x)=>{s.forEach(S=>{var E;(x==null||x===S.props.toastId)&&((E=S.toggle)==null||E.call(S,m))})},h=m=>{var x,S;(S=(x=m.props)==null?void 0:x.onClose)==null||S.call(x,m.removalReason),m.isActive=!1},v=m=>{if(m==null)s.forEach(h);else{let x=s.get(m);x&&h(x)}d()},w=()=>{i-=o.length,o=[]},f=m=>{var x,S;let{toastId:E,updateId:k}=m.props,_=k==null;m.staleId&&s.delete(m.staleId),m.isActive=!0,s.set(E,m),d(),n(I0(m,_?"added":"updated")),_&&((S=(x=m.props).onOpen)==null||S.call(x))};return{id:e,props:l,observe:c,toggle:p,removeToast:v,toasts:s,clearQueue:w,buildToast:(m,x)=>{if(g(x))return;let{toastId:S,updateId:E,data:k,staleId:_,delay:C}=x,O=E==null;O&&i++;let M={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([$,D])=>D!=null)),toastId:S,updateId:E,data:k,isIn:!1,className:op(x.className||l.toastClassName),progressClassName:op(x.progressClassName||l.progressClassName),autoClose:x.isLoading?!1:dM(x.autoClose,l.autoClose),closeToast($){s.get(S).removalReason=$,v(S)},deleteToast(){let $=s.get(S);if($!=null){if(n(I0($,"removed")),s.delete(S),i--,i<0&&(i=0),o.length>0){f(o.shift());return}d()}}};M.closeButton=l.closeButton,x.closeButton===!1||ap(x.closeButton)?M.closeButton=x.closeButton:x.closeButton===!0&&(M.closeButton=ap(l.closeButton)?l.closeButton:!0);let I={content:m,props:M,staleId:_};l.limit&&l.limit>0&&i>l.limit&&O?o.push(I):Ra(C)?setTimeout(()=>{f(I)},C):f(I)},setProps(m){l=m},setToggle:(m,x)=>{let S=s.get(m);S&&(S.toggle=x)},isToastActive:m=>{var x;return(x=s.get(m))==null?void 0:x.isActive},getSnapshot:()=>a}}var dt=new Map,ya=[],sp=new Set,yM=e=>sp.forEach(t=>t(e)),Hb=()=>dt.size>0;function xM(){ya.forEach(e=>Wb(e.content,e.options)),ya=[]}var bM=(e,{containerId:t})=>{var n;return(n=dt.get(t||1))==null?void 0:n.toasts.get(e)};function Ub(e,t){var n;if(t)return!!((n=dt.get(t))!=null&&n.isToastActive(e));let r=!1;return dt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function wM(e){if(!Hb()){ya=ya.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||cM(e))dt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=dt.get(e.containerId);t?t.removeToast(e.id):dt.forEach(n=>{n.removeToast(e.id)})}}var SM=(e={})=>{dt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function Wb(e,t){ap(e)&&(Hb()||ya.push({content:e,options:t}),dt.forEach(n=>{n.buildToast(e,t)}))}function _M(e){var t;(t=dt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function Gb(e,t){dt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function EM(e){let t=e.containerId||1;return{subscribe(n){let r=vM(t,e,yM);dt.set(t,r);let i=r.observe(n);return xM(),()=>{i(),dt.delete(t)}},setProps(n){var r;(r=dt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=dt.get(t))==null?void 0:n.getSnapshot()}}}function CM(e){return sp.add(e),()=>{sp.delete(e)}}function kM(e){return e&&(Qr(e.toastId)||Ra(e.toastId))?e.toastId:Vb()}function Aa(e,t){return Wb(e,t),t.toastId}function Ou(e,t){return{...t,type:t&&t.type||e,toastId:kM(t)}}function Mu(e){return(t,n)=>Aa(t,Ou(e,n))}function J(e,t){return Aa(e,Ou("default",t))}J.loading=(e,t)=>Aa(e,Ou("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function TM(e,{pending:t,error:n,success:r},i){let o;t&&(o=Qr(t)?J.loading(t,i):J.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,c,d)=>{if(c==null){J.dismiss(o);return}let g={type:u,...a,...i,data:d},p=Qr(c)?{render:c}:c;return o?J.update(o,{...g,...p}):J(p.render,{...g,...p}),d},s=Yn(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}J.promise=TM;J.success=Mu("success");J.info=Mu("info");J.error=Mu("error");J.warning=Mu("warning");J.warn=J.warning;J.dark=(e,t)=>Aa(e,Ou("default",{theme:"dark",...t}));function PM(e){wM(e)}J.dismiss=PM;J.clearWaitingQueue=SM;J.isActive=Ub;J.update=(e,t={})=>{let n=bM(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:Vb()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Aa(a,o)}};J.done=e=>{J.update(e,{progress:1})};J.onChange=CM;J.play=e=>Gb(!0,e);J.pause=e=>Gb(!1,e);function OM(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=b.useRef(EM(e)).current;i(e);let o=(t=b.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:c}=u.props;s.has(c)||s.set(c,[]),s.get(c).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:Ub,count:o==null?void 0:o.length}}function MM(e){let[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:c,closeOnClick:d}=e;_M({id:e.toastId,containerId:e.containerId,fn:n}),b.useEffect(()=>{if(e.pauseOnFocusLoss)return g(),()=>{p()}},[e.pauseOnFocusLoss]);function g(){document.hasFocus()||f(),window.addEventListener("focus",w),window.addEventListener("blur",f)}function p(){window.removeEventListener("focus",w),window.removeEventListener("blur",f)}function h(_){if(e.draggable===!0||e.draggable===_.pointerType){m();let C=o.current;a.canCloseOnClick=!0,a.canDrag=!0,C.style.transition="none",e.draggableDirection==="x"?(a.start=_.clientX,a.removalDistance=C.offsetWidth*(e.draggablePercent/100)):(a.start=_.clientY,a.removalDistance=C.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function v(_){let{top:C,bottom:O,left:M,right:I}=o.current.getBoundingClientRect();_.nativeEvent.type!=="touchend"&&e.pauseOnHover&&_.clientX>=M&&_.clientX<=I&&_.clientY>=C&&_.clientY<=O?f():w()}function w(){n(!0)}function f(){n(!1)}function m(){a.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",E)}function x(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",E)}function S(_){let C=o.current;if(a.canDrag&&C){a.didMove=!0,t&&f(),e.draggableDirection==="x"?a.delta=_.clientX-a.start:a.delta=_.clientY-a.start,a.start!==_.clientX&&(a.canCloseOnClick=!1);let O=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;C.style.transform=`translate3d(${O},0)`,C.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function E(){x();let _=o.current;if(a.canDrag&&a.didMove&&_){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}_.style.transition="transform 0.2s, opacity 0.2s",_.style.removeProperty("transform"),_.style.removeProperty("opacity")}}let k={onPointerDown:h,onPointerUp:v};return l&&s&&(k.onMouseEnter=f,e.stacked||(k.onMouseLeave=w)),d&&(k.onClick=_=>{c&&c(_),a.canCloseOnClick&&u(!0)}),{playToast:w,pauseToast:f,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:k}}var $M=typeof window<"u"?b.useLayoutEffect:b.useEffect,$u=({theme:e,type:t,isLoading:n,...r})=>q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function IM(e){return q.createElement($u,{...e},q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function jM(e){return q.createElement($u,{...e},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function DM(e){return q.createElement($u,{...e},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function LM(e){return q.createElement($u,{...e},q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function RM(){return q.createElement("div",{className:"Toastify__spinner"})}var lp={info:jM,warning:IM,success:DM,error:LM,spinner:RM},AM=e=>e in lp;function FM({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Yn(r)?i=r({...o,isLoading:n}):b.isValidElement(r)?i=b.cloneElement(r,o):n?i=lp.spinner():AM(t)&&(i=lp[t](o))),i}var NM=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=MM(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:c,hideProgressBar:d,closeToast:g,transition:p,position:h,className:v,style:w,progressClassName:f,updateId:m,role:x,progress:S,rtl:E,toastId:k,deleteToast:_,isIn:C,isLoading:O,closeOnClick:M,theme:I,ariaLabel:$}=e,D=Ur("Toastify__toast",`Toastify__toast-theme--${I}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":M}),R=Yn(v)?v({rtl:E,position:h,type:c,defaultClassName:D}):Ur(D,v),L=FM(e),N=!!S||!s,F={closeToast:g,type:c,theme:I},P=null;return a===!1||(Yn(a)?P=a(F):b.isValidElement(a)?P=b.cloneElement(a,F):P=hM(F)),q.createElement(p,{isIn:C,done:_,position:h,preventExitTransition:n,nodeRef:r,playToast:o},q.createElement("div",{id:k,tabIndex:0,onClick:u,"data-in":C,className:R,...i,style:w,ref:r,...C&&{role:x,"aria-label":$}},L!=null&&q.createElement("div",{className:Ur("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},L),Bb(l,e,!t),P,!e.customProgressBar&&q.createElement(mM,{...m&&!N?{key:`p-${m}`}:{},rtl:E,theme:I,delay:s,isRunning:t,isIn:C,closeToast:g,hide:d,type:c,className:f,controlledProgress:N,progress:S||0})))},zM=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),BM=pM(zM("bounce",!0)),VM={position:"top-right",transition:BM,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function no(e){let t={...VM,...e},n=e.stacked,[r,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=OM(t),{className:u,style:c,rtl:d,containerId:g,hotKeys:p}=t;function h(w){let f=Ur("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":d});return Yn(u)?u({position:w,rtl:d,defaultClassName:f}):Ur(f,op(u))}function v(){n&&(i(!0),J.play())}return $M(()=>{var w;if(n){let f=o.current.querySelectorAll('[data-in="true"]'),m=12,x=(w=t.position)==null?void 0:w.includes("top"),S=0,E=0;Array.from(f).reverse().forEach((k,_)=>{let C=k;C.classList.add("Toastify__toast--stacked"),_>0&&(C.dataset.collapsed=`${r}`),C.dataset.pos||(C.dataset.pos=x?"top":"bot");let O=S*(r?.2:1)+(r?0:m*_);C.style.setProperty("--y",`${x?O:O*-1}px`),C.style.setProperty("--g",`${m}`),C.style.setProperty("--s",`${1-(r?E:0)}`),S+=C.offsetHeight,E+=.025})}},[r,s,n]),b.useEffect(()=>{function w(f){var m;let x=o.current;p(f)&&((m=x.querySelector('[tabIndex="0"]'))==null||m.focus(),i(!1),J.pause()),f.key==="Escape"&&(document.activeElement===x||x!=null&&x.contains(document.activeElement))&&(i(!0),J.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[p]),q.createElement("section",{ref:o,className:"Toastify",id:g,onMouseEnter:()=>{n&&(i(!1),J.pause())},onMouseLeave:v,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,f)=>{let m=f.length?{...c}:{...c,pointerEvents:"none"};return q.createElement("div",{tabIndex:-1,className:h(w),"data-stacked":n,style:m,key:`c-${w}`},f.map(({content:x,props:S})=>q.createElement(NM,{...S,stacked:n,collapseAll:v,isIn:l(S.toastId,S.containerId),key:`t-${S.key}`},x)))}))}const xa="/Didiv/assets/nofoto-2f8d9d99.png",Yb=()=>{const e=Kn(),[t,n]=b.useState([]);b.useEffect(()=>{const o=new Date,a=new Date;a.setDate(o.getDate()-7);const l=a.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${l}`).then(s=>s.json()).then(s=>n(s.data)).catch(s=>console.error("Помилка завантаження нових товарів:",s))},[]),console.log(t);const r=[...t].sort(()=>Math.random()-.5).slice(0,3),i=o=>{e(La({...o,quantity:1})),J.success(`${o.name} додано в кошик!`)};return!t||t.length===0?null:y.jsxs(rO,{children:[y.jsx(no,{}),y.jsx(iO,{children:"Нові товари"}),y.jsxs(oO,{children:[r.map(o=>{var a;return y.jsxs(aO,{children:[y.jsxs(sO,{to:`/product/${o.id}`,children:[y.jsx(lO,{children:"Новинка"}),y.jsx("img",{src:((a=o.images)==null?void 0:a[0].url)||xa,alt:o.name,onError:l=>{l.currentTarget.onerror=null,l.currentTarget.src=xa}}),y.jsx("div",{className:"overlay"})]}),y.jsxs(uO,{children:[y.jsx(cO,{children:o.name}),y.jsxs(dO,{children:[y.jsxs(fO,{children:[o.price," грн"]}),y.jsx(pO,{onClick:()=>i(o),children:y.jsx(ja,{size:22})})]})]})]},o.id)}),y.jsx(hO,{to:"/catalog/new",children:y.jsxs(mO,{children:[y.jsx("p",{children:"Усі новинки"}),y.jsx(gO,{children:y.jsx(wb,{size:24})})]})})]})]})};function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q.apply(this,arguments)}function HM(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function UM(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var WM=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(UM(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=HM(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),nt="-ms-",Fl="-moz-",ce="-webkit-",qb="comm",Yh="rule",qh="decl",GM="@import",Xb="@keyframes",YM="@layer",qM=Math.abs,Iu=String.fromCharCode,XM=Object.assign;function KM(e,t){return Ke(e,0)^45?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}function Kb(e){return e.trim()}function ZM(e,t){return(e=t.exec(e))?e[0]:e}function de(e,t,n){return e.replace(t,n)}function up(e,t){return e.indexOf(t)}function Ke(e,t){return e.charCodeAt(t)|0}function ba(e,t,n){return e.slice(t,n)}function yn(e){return e.length}function Xh(e){return e.length}function hs(e,t){return t.push(e),e}function QM(e,t){return e.map(t).join("")}var ju=1,Gi=1,Zb=0,Ct=0,je=0,ro="";function Du(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ju,column:Gi,length:a,return:""}}function wo(e,t){return XM(Du("",null,null,"",null,null,0),e,{length:-e.length},t)}function JM(){return je}function e4(){return je=Ct>0?Ke(ro,--Ct):0,Gi--,je===10&&(Gi=1,ju--),je}function Lt(){return je=Ct<Zb?Ke(ro,Ct++):0,Gi++,je===10&&(Gi=1,ju++),je}function En(){return Ke(ro,Ct)}function Us(){return Ct}function Fa(e,t){return ba(ro,e,t)}function wa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Qb(e){return ju=Gi=1,Zb=yn(ro=e),Ct=0,[]}function Jb(e){return ro="",e}function Ws(e){return Kb(Fa(Ct-1,cp(e===91?e+2:e===40?e+1:e)))}function t4(e){for(;(je=En())&&je<33;)Lt();return wa(e)>2||wa(je)>3?"":" "}function n4(e,t){for(;--t&&Lt()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return Fa(e,Us()+(t<6&&En()==32&&Lt()==32))}function cp(e){for(;Lt();)switch(je){case e:return Ct;case 34:case 39:e!==34&&e!==39&&cp(je);break;case 40:e===41&&cp(e);break;case 92:Lt();break}return Ct}function r4(e,t){for(;Lt()&&e+je!==47+10;)if(e+je===42+42&&En()===47)break;return"/*"+Fa(t,Ct-1)+"*"+Iu(e===47?e:Lt())}function i4(e){for(;!wa(En());)Lt();return Fa(e,Ct)}function o4(e){return Jb(Gs("",null,null,null,[""],e=Qb(e),0,[0],e))}function Gs(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,g=0,p=0,h=0,v=1,w=1,f=1,m=0,x="",S=i,E=o,k=r,_=x;w;)switch(h=m,m=Lt()){case 40:if(h!=108&&Ke(_,d-1)==58){up(_+=de(Ws(m),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:_+=Ws(m);break;case 9:case 10:case 13:case 32:_+=t4(h);break;case 92:_+=n4(Us()-1,7);continue;case 47:switch(En()){case 42:case 47:hs(a4(r4(Lt(),Us()),t,n),s);break;default:_+="/"}break;case 123*v:l[u++]=yn(_)*f;case 125*v:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+c:f==-1&&(_=de(_,/\f/g,"")),p>0&&yn(_)-d&&hs(p>32?D0(_+";",r,n,d-1):D0(de(_," ","")+";",r,n,d-2),s);break;case 59:_+=";";default:if(hs(k=j0(_,t,n,u,c,i,l,x,S=[],E=[],d),o),m===123)if(c===0)Gs(_,t,k,k,S,o,d,l,E);else switch(g===99&&Ke(_,3)===110?100:g){case 100:case 108:case 109:case 115:Gs(e,k,k,r&&hs(j0(e,k,k,0,0,i,l,x,i,S=[],d),E),i,E,d,l,r?S:E);break;default:Gs(_,k,k,k,[""],E,0,l,E)}}u=c=p=0,v=f=1,x=_="",d=a;break;case 58:d=1+yn(_),p=h;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&e4()==125)continue}switch(_+=Iu(m),m*v){case 38:f=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(yn(_)-1)*f,f=1;break;case 64:En()===45&&(_+=Ws(Lt())),g=En(),c=d=yn(x=_+=i4(Us())),m++;break;case 45:h===45&&yn(_)==2&&(v=0)}}return o}function j0(e,t,n,r,i,o,a,l,s,u,c){for(var d=i-1,g=i===0?o:[""],p=Xh(g),h=0,v=0,w=0;h<r;++h)for(var f=0,m=ba(e,d+1,d=qM(v=a[h])),x=e;f<p;++f)(x=Kb(v>0?g[f]+" "+m:de(m,/&\f/g,g[f])))&&(s[w++]=x);return Du(e,t,n,i===0?Yh:l,s,u,c)}function a4(e,t,n){return Du(e,t,n,qb,Iu(JM()),ba(e,2,-2),0)}function D0(e,t,n,r){return Du(e,t,n,qh,ba(e,0,r),ba(e,r+1,-1),r)}function $i(e,t){for(var n="",r=Xh(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function s4(e,t,n,r){switch(e.type){case YM:if(e.children.length)break;case GM:case qh:return e.return=e.return||e.value;case qb:return"";case Xb:return e.return=e.value+"{"+$i(e.children,r)+"}";case Yh:e.value=e.props.join(",")}return yn(n=$i(e.children,r))?e.return=e.value+"{"+n+"}":""}function l4(e){var t=Xh(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function u4(e){return function(t){t.root||(t=t.return)&&e(t)}}function c4(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var d4=function(t,n,r){for(var i=0,o=0;i=o,o=En(),i===38&&o===12&&(n[r]=1),!wa(o);)Lt();return Fa(t,Ct)},f4=function(t,n){var r=-1,i=44;do switch(wa(i)){case 0:i===38&&En()===12&&(n[r]=1),t[r]+=d4(Ct-1,n,r);break;case 2:t[r]+=Ws(i);break;case 4:if(i===44){t[++r]=En()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Iu(i)}while(i=Lt());return t},p4=function(t,n){return Jb(f4(Qb(t),n))},L0=new WeakMap,h4=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!L0.get(r))&&!i){L0.set(t,!0);for(var o=[],a=p4(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var c=0;c<l.length;c++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[c]):l[c]+" "+a[s]}}},m4=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function ew(e,t){switch(KM(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+Fl+e+nt+e+e;case 6828:case 4268:return ce+e+nt+e+e;case 6165:return ce+e+nt+"flex-"+e+e;case 5187:return ce+e+de(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+nt+"flex-$1$2")+e;case 5443:return ce+e+nt+"flex-item-"+de(e,/flex-|-self/,"")+e;case 4675:return ce+e+nt+"flex-line-pack"+de(e,/align-content|flex-|-self/,"")+e;case 5548:return ce+e+nt+de(e,"shrink","negative")+e;case 5292:return ce+e+nt+de(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+de(e,"-grow","")+ce+e+nt+de(e,"grow","positive")+e;case 4554:return ce+de(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return de(de(de(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return de(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return de(de(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+nt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+e+e;case 4095:case 3583:case 4068:case 2532:return de(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yn(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(Ke(e,t+4)!==45)break;case 102:return de(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Fl+(Ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~up(e,"stretch")?ew(de(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ke(e,t+1)!==115)break;case 6444:switch(Ke(e,yn(e)-3-(~up(e,"!important")&&10))){case 107:return de(e,":",":"+ce)+e;case 101:return de(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ce+(Ke(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+nt+"$2box$3")+e}break;case 5936:switch(Ke(e,t+11)){case 114:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ce+e+nt+e+e}return e}var g4=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case qh:t.return=ew(t.value,t.length);break;case Xb:return $i([wo(t,{value:de(t.value,"@","@"+ce)})],i);case Yh:if(t.length)return QM(t.props,function(o){switch(ZM(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return $i([wo(t,{props:[de(o,/:(read-\w+)/,":"+Fl+"$1")]})],i);case"::placeholder":return $i([wo(t,{props:[de(o,/:(plac\w+)/,":"+ce+"input-$1")]}),wo(t,{props:[de(o,/:(plac\w+)/,":"+Fl+"$1")]}),wo(t,{props:[de(o,/:(plac\w+)/,nt+"input-$1")]})],i)}return""})}},v4=[g4],y4=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var w=v.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||v4,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var w=v.getAttribute("data-emotion").split(" "),f=1;f<w.length;f++)o[w[f]]=!0;l.push(v)});var s,u=[h4,m4];{var c,d=[s4,u4(function(v){c.insert(v)})],g=l4(u.concat(i,d)),p=function(w){return $i(o4(w),g)};s=function(w,f,m,x){c=m,p(w?w+"{"+f.styles+"}":f.styles),x&&(h.inserted[f.name]=!0)}}var h={key:n,sheet:new WM({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return h.sheet.hydrate(l),h},tw={exports:{}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=typeof Symbol=="function"&&Symbol.for,Kh=Ye?Symbol.for("react.element"):60103,Zh=Ye?Symbol.for("react.portal"):60106,Lu=Ye?Symbol.for("react.fragment"):60107,Ru=Ye?Symbol.for("react.strict_mode"):60108,Au=Ye?Symbol.for("react.profiler"):60114,Fu=Ye?Symbol.for("react.provider"):60109,Nu=Ye?Symbol.for("react.context"):60110,Qh=Ye?Symbol.for("react.async_mode"):60111,zu=Ye?Symbol.for("react.concurrent_mode"):60111,Bu=Ye?Symbol.for("react.forward_ref"):60112,Vu=Ye?Symbol.for("react.suspense"):60113,x4=Ye?Symbol.for("react.suspense_list"):60120,Hu=Ye?Symbol.for("react.memo"):60115,Uu=Ye?Symbol.for("react.lazy"):60116,b4=Ye?Symbol.for("react.block"):60121,w4=Ye?Symbol.for("react.fundamental"):60117,S4=Ye?Symbol.for("react.responder"):60118,_4=Ye?Symbol.for("react.scope"):60119;function zt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Kh:switch(e=e.type,e){case Qh:case zu:case Lu:case Au:case Ru:case Vu:return e;default:switch(e=e&&e.$$typeof,e){case Nu:case Bu:case Uu:case Hu:case Fu:return e;default:return t}}case Zh:return t}}}function nw(e){return zt(e)===zu}me.AsyncMode=Qh;me.ConcurrentMode=zu;me.ContextConsumer=Nu;me.ContextProvider=Fu;me.Element=Kh;me.ForwardRef=Bu;me.Fragment=Lu;me.Lazy=Uu;me.Memo=Hu;me.Portal=Zh;me.Profiler=Au;me.StrictMode=Ru;me.Suspense=Vu;me.isAsyncMode=function(e){return nw(e)||zt(e)===Qh};me.isConcurrentMode=nw;me.isContextConsumer=function(e){return zt(e)===Nu};me.isContextProvider=function(e){return zt(e)===Fu};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kh};me.isForwardRef=function(e){return zt(e)===Bu};me.isFragment=function(e){return zt(e)===Lu};me.isLazy=function(e){return zt(e)===Uu};me.isMemo=function(e){return zt(e)===Hu};me.isPortal=function(e){return zt(e)===Zh};me.isProfiler=function(e){return zt(e)===Au};me.isStrictMode=function(e){return zt(e)===Ru};me.isSuspense=function(e){return zt(e)===Vu};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Lu||e===zu||e===Au||e===Ru||e===Vu||e===x4||typeof e=="object"&&e!==null&&(e.$$typeof===Uu||e.$$typeof===Hu||e.$$typeof===Fu||e.$$typeof===Nu||e.$$typeof===Bu||e.$$typeof===w4||e.$$typeof===S4||e.$$typeof===_4||e.$$typeof===b4)};me.typeOf=zt;tw.exports=me;var E4=tw.exports,rw=E4,C4={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},k4={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},iw={};iw[rw.ForwardRef]=C4;iw[rw.Memo]=k4;var T4=!0;function ow(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Jh=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||T4===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},aw=function(t,n,r){Jh(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function P4(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var O4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},M4=/[A-Z]|^ms/g,$4=/_EMO_([^_]+?)_([^]*?)_EMO_/g,sw=function(t){return t.charCodeAt(1)===45},R0=function(t){return t!=null&&typeof t!="boolean"},nd=c4(function(e){return sw(e)?e:e.replace(M4,"-$&").toLowerCase()}),A0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace($4,function(r,i,o){return xn={name:i,styles:o,next:xn},i})}return O4[t]!==1&&!sw(t)&&typeof n=="number"&&n!==0?n+"px":n};function Sa(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return xn={name:n.name,styles:n.styles,next:xn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)xn={name:r.name,styles:r.styles,next:xn},r=r.next;var i=n.styles+";";return i}return I4(e,t,n)}case"function":{if(e!==void 0){var o=xn,a=n(e);return xn=o,Sa(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function I4(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Sa(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":R0(a)&&(r+=nd(o)+":"+A0(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)R0(a[l])&&(r+=nd(o)+":"+A0(o,a[l])+";");else{var s=Sa(e,t,a);switch(o){case"animation":case"animationName":{r+=nd(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var F0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,xn,em=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";xn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Sa(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Sa(r,n,t[l]),i&&(o+=a[l]);F0.lastIndex=0;for(var s="",u;(u=F0.exec(o))!==null;)s+="-"+u[1];var c=P4(o)+s;return{name:c,styles:o,next:xn}},j4=function(t){return t()},D4=Ud["useInsertionEffect"]?Ud["useInsertionEffect"]:!1,lw=D4||j4,tm={}.hasOwnProperty,uw=b.createContext(typeof HTMLElement<"u"?y4({key:"css"}):null);uw.Provider;var cw=function(t){return b.forwardRef(function(n,r){var i=b.useContext(uw);return t(n,i,r)})},dw=b.createContext({}),dp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",L4=function(t,n){var r={};for(var i in n)tm.call(n,i)&&(r[i]=n[i]);return r[dp]=t,r},R4=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Jh(n,r,i),lw(function(){return aw(n,r,i)}),null},A4=cw(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[dp],o=[r],a="";typeof e.className=="string"?a=ow(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=em(o,void 0,b.useContext(dw));a+=t.key+"-"+l.name;var s={};for(var u in e)tm.call(e,u)&&u!=="css"&&u!==dp&&(s[u]=e[u]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(R4,{cache:t,serialized:l,isStringTag:typeof i=="string"}),b.createElement(i,s))}),F4=A4,K=function(t,n){var r=arguments;if(n==null||!tm.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=F4,o[1]=L4(t,n);for(var a=2;a<i;a++)o[a]=r[a];return b.createElement.apply(null,o)};function nm(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return em(t)}var N4=function(){var t=nm.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},z4=Ok,B4=function(t){return t!=="theme"},N0=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?z4:B4},z0=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},V4=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Jh(n,r,i),lw(function(){return aw(n,r,i)}),null},H4=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=z0(t,n,r),s=l||N0(i),u=!s("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var g=c.length,p=1;p<g;p++)d.push(c[p],c[0][p])}var h=cw(function(v,w,f){var m=u&&v.as||i,x="",S=[],E=v;if(v.theme==null){E={};for(var k in v)E[k]=v[k];E.theme=b.useContext(dw)}typeof v.className=="string"?x=ow(w.registered,S,v.className):v.className!=null&&(x=v.className+" ");var _=em(d.concat(S),w.registered,E);x+=w.key+"-"+_.name,a!==void 0&&(x+=" "+a);var C=u&&l===void 0?N0(m):s,O={};for(var M in v)u&&M==="as"||C(M)&&(O[M]=v[M]);return O.className=x,O.ref=f,b.createElement(b.Fragment,null,b.createElement(V4,{cache:w,serialized:_,isStringTag:typeof m=="string"}),b.createElement(m,O))});return h.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=l,Object.defineProperty(h,"toString",{value:function(){return"."+a}}),h.withComponent=function(v,w){return e(v,Q({},n,w,{shouldForwardProp:z0(h,w,!0)})).apply(void 0,d)},h}},U4=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Re=H4.bind();U4.forEach(function(e){Re[e]=Re(e)});const W4=Re.section`
  background-color: var(--second-background);
`,G4=Re.div`
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
`,Y4=Re.div`

`,q4=Re.h1`
  font-size: 32px;
  font-family: var(--main-font);
  color: var(--black-color);
  text-transform: uppercase;
  margin-bottom: 20px;
`,X4=Re.div`
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
`;const K4=Re(Me)`
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
`,Z4=Re.div`
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
`,Q4=Re.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  display: block;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`,J4=Re.p`
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
`;var e3={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};t3(e3);function t3(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var n3="#4fa94d",r3={"aria-busy":!0,role:"progressbar"},i3=T.div`
  display: ${e=>e.$visible?"flex":"none"};
`,o3="http://www.w3.org/2000/svg",Wu=({height:e=100,width:t=100,radius:n=5,color:r=n3,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>y.jsx(i3,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...r3,children:y.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:o3,"data-testid":"ball-triangle-svg",children:[y.jsx("title",{children:"Ball Triangle"}),y.jsx("desc",{children:"Animated representation of three balls"}),y.jsx("g",{fill:"none",fillRule:"evenodd",children:y.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[y.jsxs("circle",{cx:"5",cy:"50",r:n,children:[y.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),y.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),y.jsxs("circle",{cx:"27",cy:"5",r:n,children:[y.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),y.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),y.jsxs("circle",{cx:"49",cy:"50",r:n,children:[y.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),y.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),Qt=242.776657104492,a3=1.6,s3=Fh`
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
  animation: ${s3} ${a3}s linear infinite;
`;var l3=Fh`
to {
   transform: rotate(360deg);
 }
`;T.svg`
  animation: ${l3} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var u3=Fh`
to {
   stroke-dashoffset: 136;
 }
`;T.polygon`
  stroke-dasharray: 17;
  animation: ${u3} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;T.svg`
  transform-origin: 50% 65%;
`;const c3=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();console.log(a),t(a.data.map(l=>{var s;return{id:l.id_title,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?y.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:y.jsx(Wu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):y.jsx(W4,{children:y.jsxs(G4,{children:[y.jsx(Y4,{children:y.jsx(Yb,{})}),y.jsx(q4,{children:"Каталог"}),y.jsx(X4,{children:e.map(i=>y.jsxs(K4,{to:`/catalog/${i.title}`,children:[y.jsx(Z4,{children:y.jsx(Q4,{src:i.image,alt:i.title})}),y.jsx(J4,{children:i.title})]},i.id))})]})})},d3=Re.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,f3=Re.h1`
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
`,p3=Re.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,h3=Re(Me)`

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

  
`,m3=()=>y.jsxs(d3,{children:[y.jsxs(f3,{children:[" ",y.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),y.jsx(p3,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),y.jsx(h3,{children:" На головну"})]});const g3=T.div`
  width: 100%;
  height: 100%;
font-family: var(--main-font);
`,v3=T.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var fw={},pw={},Gu={},hw={exports:{}},Na={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var B0=Object.getOwnPropertySymbols,y3=Object.prototype.hasOwnProperty,x3=Object.prototype.propertyIsEnumerable;function b3(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function w3(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var S3=w3()?Object.assign:function(e,t){for(var n,r=b3(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)y3.call(n,a)&&(r[a]=n[a]);if(B0){i=B0(n);for(var l=0;l<i.length;l++)x3.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},mw={exports:{}},le={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm=S3,io=60103,gw=60106;le.Fragment=60107;le.StrictMode=60108;le.Profiler=60114;var vw=60109,yw=60110,xw=60112;le.Suspense=60113;var bw=60115,ww=60116;if(typeof Symbol=="function"&&Symbol.for){var Zt=Symbol.for;io=Zt("react.element"),gw=Zt("react.portal"),le.Fragment=Zt("react.fragment"),le.StrictMode=Zt("react.strict_mode"),le.Profiler=Zt("react.profiler"),vw=Zt("react.provider"),yw=Zt("react.context"),xw=Zt("react.forward_ref"),le.Suspense=Zt("react.suspense"),bw=Zt("react.memo"),ww=Zt("react.lazy")}var V0=typeof Symbol=="function"&&Symbol.iterator;function _3(e){return e===null||typeof e!="object"?null:(e=V0&&e[V0]||e["@@iterator"],typeof e=="function"?e:null)}function za(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_w={};function oo(e,t,n){this.props=e,this.context=t,this.refs=_w,this.updater=n||Sw}oo.prototype.isReactComponent={};oo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(za(85));this.updater.enqueueSetState(this,e,t,"setState")};oo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ew(){}Ew.prototype=oo.prototype;function im(e,t,n){this.props=e,this.context=t,this.refs=_w,this.updater=n||Sw}var om=im.prototype=new Ew;om.constructor=im;rm(om,oo.prototype);om.isPureReactComponent=!0;var am={current:null},Cw=Object.prototype.hasOwnProperty,kw={key:!0,ref:!0,__self:!0,__source:!0};function Tw(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Cw.call(t,r)&&!kw.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:io,type:e,key:o,ref:a,props:i,_owner:am.current}}function E3(e,t){return{$$typeof:io,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sm(e){return typeof e=="object"&&e!==null&&e.$$typeof===io}function C3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var H0=/\/+/g;function rd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?C3(""+e.key):t.toString(36)}function Ys(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case io:case gw:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+rd(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(H0,"$&/")+"/"),Ys(i,t,n,"",function(u){return u})):i!=null&&(sm(i)&&(i=E3(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(H0,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+rd(o,l);a+=Ys(o,t,n,s,i)}else if(s=_3(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+rd(o,l++),a+=Ys(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(za(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function ms(e,t,n){if(e==null)return e;var r=[],i=0;return Ys(e,r,"","",function(o){return t.call(n,o,i++)}),r}function k3(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var Pw={current:null};function Zn(){var e=Pw.current;if(e===null)throw Error(za(321));return e}var T3={ReactCurrentDispatcher:Pw,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:am,IsSomeRendererActing:{current:!1},assign:rm};le.Children={map:ms,forEach:function(e,t,n){ms(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ms(e,function(){t++}),t},toArray:function(e){return ms(e,function(t){return t})||[]},only:function(e){if(!sm(e))throw Error(za(143));return e}};le.Component=oo;le.PureComponent=im;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T3;le.cloneElement=function(e,t,n){if(e==null)throw Error(za(267,e));var r=rm({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=am.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Cw.call(t,s)&&!kw.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:io,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:yw,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:vw,_context:e},e.Consumer=e};le.createElement=Tw;le.createFactory=function(e){var t=Tw.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:xw,render:e}};le.isValidElement=sm;le.lazy=function(e){return{$$typeof:ww,_payload:{_status:-1,_result:e},_init:k3}};le.memo=function(e,t){return{$$typeof:bw,type:e,compare:t===void 0?null:t}};le.useCallback=function(e,t){return Zn().useCallback(e,t)};le.useContext=function(e,t){return Zn().useContext(e,t)};le.useDebugValue=function(){};le.useEffect=function(e,t){return Zn().useEffect(e,t)};le.useImperativeHandle=function(e,t,n){return Zn().useImperativeHandle(e,t,n)};le.useLayoutEffect=function(e,t){return Zn().useLayoutEffect(e,t)};le.useMemo=function(e,t){return Zn().useMemo(e,t)};le.useReducer=function(e,t,n){return Zn().useReducer(e,t,n)};le.useRef=function(e){return Zn().useRef(e)};le.useState=function(e){return Zn().useState(e)};le.version="17.0.2";mw.exports=le;var P3=mw.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O3=P3,Ow=60103;Na.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var U0=Symbol.for;Ow=U0("react.element"),Na.Fragment=U0("react.fragment")}var M3=O3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$3=Object.prototype.hasOwnProperty,I3={key:!0,ref:!0,__self:!0,__source:!0};function Mw(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)$3.call(t,r)&&!I3.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ow,type:e,key:o,ref:a,props:i,_owner:M3.current}}Na.jsx=Mw;Na.jsxs=Mw;hw.exports=Na;var Tt=hw.exports,$w={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})($w);var Pt=$w.exports;const j3={"lds-circle":"_lds-circle_qlxhy_1"},D3=Object.freeze(Object.defineProperty({__proto__:null,default:j3},Symbol.toStringTag,{value:"Module"})),L3=kt(D3);var Iw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Gu,"__esModule",{value:!0});Gu.Circle=void 0;const R3=Tt,A3=Iw(Pt),F3=Iw(L3);function N3({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,R3.jsx)("div",{className:(0,A3.default)(F3.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}Gu.Circle=N3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=Gu;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(pw);var jw={},Yu={};const z3={"lds-default":"_lds-default_wt1n8_1"},B3=Object.freeze(Object.defineProperty({__proto__:null,default:z3},Symbol.toStringTag,{value:"Module"})),V3=kt(B3);var Dw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Yu,"__esModule",{value:!0});Yu.Default=void 0;const W0=Tt,H3=Dw(Pt),U3=Dw(V3);function W3({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,W0.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,W0.jsx)("div",{className:(0,H3.default)(U3.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}Yu.Default=W3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=Yu;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(jw);var Lw={},qu={};const G3={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},Y3=Object.freeze(Object.defineProperty({__proto__:null,default:G3},Symbol.toStringTag,{value:"Module"})),q3=kt(Y3);var Rw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(qu,"__esModule",{value:!0});qu.DualRing=void 0;const G0=Tt,Y0=Rw(Pt),q0=Rw(q3);function X3({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,G0.jsx)("div",{className:(0,Y0.default)(q0.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,G0.jsx)("div",{className:(0,Y0.default)(q0.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}qu.DualRing=X3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=qu;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(Lw);var Aw={},Xu={};const K3={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},Z3=Object.freeze(Object.defineProperty({__proto__:null,default:K3},Symbol.toStringTag,{value:"Module"})),Q3=kt(Z3);var Fw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xu,"__esModule",{value:!0});Xu.Ellipsis=void 0;const X0=Tt,J3=Fw(Pt),e5=Fw(Q3);function t5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,X0.jsx)("div",{style:{background:`${e}`}},l));return(0,X0.jsx)("div",{className:(0,J3.default)(e5.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}Xu.Ellipsis=t5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=Xu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(Aw);var Nw={},Ku={};const n5={"lds-facebook":"_lds-facebook_1ts9g_1"},r5=Object.freeze(Object.defineProperty({__proto__:null,default:n5},Symbol.toStringTag,{value:"Module"})),i5=kt(r5);var zw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ku,"__esModule",{value:!0});Ku.Facebook=void 0;const K0=Tt,o5=zw(Pt),a5=zw(i5);function s5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,K0.jsx)("div",{style:{background:`${e}`}},l));return(0,K0.jsx)("div",{className:(0,o5.default)(a5.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}Ku.Facebook=s5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=Ku;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(Nw);var Bw={},Zu={};const l5={"lds-grid":"_lds-grid_1ftub_1"},u5=Object.freeze(Object.defineProperty({__proto__:null,default:l5},Symbol.toStringTag,{value:"Module"})),c5=kt(u5);var Vw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Zu,"__esModule",{value:!0});Zu.Grid=void 0;const Z0=Tt,d5=Vw(Pt),f5=Vw(c5);function p5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,Z0.jsx)("div",{style:{background:`${e}`}},l));return(0,Z0.jsx)("div",{className:(0,d5.default)(f5.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}Zu.Grid=p5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=Zu;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(Bw);var Hw={},Qu={};const h5={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},m5=Object.freeze(Object.defineProperty({__proto__:null,default:h5},Symbol.toStringTag,{value:"Module"})),g5=kt(m5);var Uw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Qu,"__esModule",{value:!0});Qu.Heart=void 0;const gs=Tt,id=Uw(Pt),od=Uw(g5);function v5({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,gs.jsx)("div",{className:(0,id.default)(od.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,gs.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,gs.jsx)("div",{className:(0,id.default)(od.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,gs.jsx)("div",{className:(0,id.default)(od.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}Qu.Heart=v5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=Qu;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(Hw);var Ww={},Ju={};const y5={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},x5=Object.freeze(Object.defineProperty({__proto__:null,default:y5},Symbol.toStringTag,{value:"Module"})),b5=kt(x5);var Gw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ju,"__esModule",{value:!0});Ju.Hourglass=void 0;const Q0=Tt,J0=Gw(Pt),ev=Gw(b5);function w5({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,Q0.jsx)("div",{className:(0,J0.default)(ev.default["lds-hourglass"],n),style:{...r},children:(0,Q0.jsx)("div",{className:(0,J0.default)(ev.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}Ju.Hourglass=w5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=Ju;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(Ww);var Yw={},ec={};const qw="_center_1rufi_10",Xw="_spin_1rufi_1",S5={"lds-orbitals":"_lds-orbitals_1rufi_1",center:qw,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:Xw},_5=Object.freeze(Object.defineProperty({__proto__:null,center:qw,default:S5,spin:Xw},Symbol.toStringTag,{value:"Module"})),E5=kt(_5);var Kw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ec,"__esModule",{value:!0});ec.Orbitals=void 0;const tt=Tt,lt=Kw(Pt),Se=Kw(E5);function C5({color:e="#7f58af",className:t,style:n}){return(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["lds-orbitals"],t),style:{...n},children:[(0,tt.jsx)("div",{className:Se.default.center,style:{background:e}}),(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["inner-spin"]),children:[(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-moon-a"]),style:{background:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-moon-b"]),style:{background:e}})]}),(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["outer-spin"]),children:[(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-moon-a"]),style:{background:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-moon-b"]),style:{background:e}})]})]})}ec.Orbitals=C5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=ec;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(Yw);var Zw={},tc={};const k5={"lds-ring":"_lds-ring_xgxdp_1"},T5=Object.freeze(Object.defineProperty({__proto__:null,default:k5},Symbol.toStringTag,{value:"Module"})),P5=kt(T5);var Qw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(tc,"__esModule",{value:!0});tc.Ring=void 0;const tv=Tt,O5=Qw(Pt),M5=Qw(P5);function $5({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,tv.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,tv.jsx)("div",{className:(0,O5.default)(M5.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}tc.Ring=$5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=tc;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(Zw);var Jw={},nc={};const I5={"lds-ripple":"_lds-ripple_1lgcf_1"},j5=Object.freeze(Object.defineProperty({__proto__:null,default:I5},Symbol.toStringTag,{value:"Module"})),D5=kt(j5);var eS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(nc,"__esModule",{value:!0});nc.Ripple=void 0;const nv=Tt,L5=eS(Pt),R5=eS(D5);function A5({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,nv.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,nv.jsx)("div",{className:(0,L5.default)(R5.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}nc.Ripple=A5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=nc;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(Jw);var tS={},rc={};const F5={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},N5=Object.freeze(Object.defineProperty({__proto__:null,default:F5},Symbol.toStringTag,{value:"Module"})),z5=kt(N5);var nS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(rc,"__esModule",{value:!0});rc.Roller=void 0;const ad=Tt,rv=nS(Pt),iv=nS(z5);function B5({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,ad.jsx)("div",{children:(0,ad.jsx)("div",{className:(0,rv.default)(iv.default["div-after"]),style:{background:e}})},o));return(0,ad.jsx)("div",{className:(0,rv.default)(iv.default["lds-roller"],t),style:{...n},children:r})}rc.Roller=B5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=rc;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(tS);var rS={},ic={};const V5={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},H5=Object.freeze(Object.defineProperty({__proto__:null,default:V5},Symbol.toStringTag,{value:"Module"})),U5=kt(H5);var iS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ic,"__esModule",{value:!0});ic.Spinner=void 0;const sd=Tt,ov=iS(Pt),av=iS(U5);function W5({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,sd.jsx)("div",{children:(0,sd.jsx)("div",{className:(0,ov.default)(av.default["div-after"]),style:{background:e}})},o));return(0,sd.jsx)("div",{className:(0,ov.default)(av.default["lds-spinner"],t),style:{...n},children:r})}ic.Spinner=W5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=ic;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(rS);var oS={},oc={};const aS="_left_v9vlb_30",sS="_right_v9vlb_33",lS="_anim_v9vlb_37",G5={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:aS,right:sS,anim:lS,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},Y5=Object.freeze(Object.defineProperty({__proto__:null,anim:lS,default:G5,left:aS,right:sS},Symbol.toStringTag,{value:"Module"})),q5=kt(Y5);var uS=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(oc,"__esModule",{value:!0});oc.Ouroboro=void 0;const So=Tt,_o=uS(Pt),Eo=uS(q5);function X5({color:e="#7f58af",style:t,className:n}){return(0,So.jsxs)("div",{className:(0,_o.default)(Eo.default["lds-ouroboro"],n),style:{...t},children:[(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.left),children:(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.anim),style:{background:e}})}),(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.right),children:(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.anim),style:{background:e}})})]})}oc.Ouroboro=X5;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=oc;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(oS);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=pw;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=jw;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=Lw;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=Aw;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=Nw;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=Bw;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=Hw;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=Ww;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const u=Yw;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return u.Orbitals}});const c=Zw;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return c.Ring}});const d=Jw;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return d.Ripple}});const g=tS;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return g.Roller}});const p=rS;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return p.Spinner}});const h=oS;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return h.Ouroboro}})})(fw);const K5=()=>y.jsx(v3,{children:y.jsx(fw.Default,{color:"#6d433da8"})});const Z5="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",Q5=MT`
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
  src: url(${Z5}) format('truetype');
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
`,J5=T.div`
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
`,e$=T(Me)`
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
`,t$=T.h2`
  margin-top: 20px;
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,n$=T.h3`

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
`,r$=T.a`

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
`,i$=T.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,o$=()=>{const[e,t]=b.useState([]);return b.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(console.log("API response:",i),!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{id:o.id_title,title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),console.log(e),y.jsxs(y.Fragment,{children:[y.jsx(t$,{children:"Каталог"}),y.jsxs(J5,{children:[e.slice(0,6).map(n=>y.jsx(e$,{to:`catalog/${n.id}`,bg:n.image,isBig:n.big,children:y.jsx(n$,{children:n.title})},n.id)),y.jsxs(r$,{href:"catalog",children:[y.jsx("p",{children:"Весь каталог"}),y.jsx(i$,{children:y.jsx(wb,{size:24})})]})]})]})};function sv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function lm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:sv(t[r])&&sv(e[r])&&Object.keys(t[r]).length>0&&lm(e[r],t[r])})}const cS={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Cn(){const e=typeof document<"u"?document:{};return lm(e,cS),e}const a$={document:cS,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function gt(){const e=typeof window<"u"?window:{};return lm(e,a$),e}function s$(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function l$(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function dS(e,t=0){return setTimeout(e,t)}function Nl(){return Date.now()}function u$(e){const t=gt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function c$(e,t="x"){const n=gt();let r,i,o;const a=u$(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function vs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function d$(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Mt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!d$(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(vs(t[l])&&vs(r[l])?r[l].__swiper__?t[l]=r[l]:Mt(t[l],r[l]):!vs(t[l])&&vs(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Mt(t[l],r[l])):t[l]=r[l])}}}return t}function li(e,t,n){e.style.setProperty(t,n)}function fS({swiper:e,targetPosition:t,side:n}){const r=gt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",u=(d,g)=>s==="next"&&d>=g||s==="prev"&&d<=g,c=()=>{a=new Date().getTime(),o===null&&(o=a);const d=Math.max(Math.min((a-o)/l,1),0),g=.5-Math.cos(d*Math.PI)/2;let p=i+g*(t-i);if(u(p,t)&&(p=t),e.wrapperEl.scrollTo({[n]:p}),u(p,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:p})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(c)};c()}function wn(e,t=""){const n=gt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function f$(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function p$(e,t){const n=gt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=f$(e,t))),r}function zl(e){try{console.warn(e);return}catch{}}function Bl(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:s$(t)),n}function h$(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function m$(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function dr(e,t){return gt().getComputedStyle(e,null).getPropertyValue(t)}function Vl(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function pS(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function fp(e,t,n){const r=gt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function Ue(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function _a(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function hS(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=wn(e.el,`.${r[i]}`)[0];o||(o=Bl("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const lv='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function g$({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:lv};function i(p){let h;return p&&typeof p=="string"&&e.isElement&&(h=e.el.querySelector(p)||e.hostEl.querySelector(p),h)?h:(p&&(typeof p=="string"&&(h=[...document.querySelectorAll(p)]),e.params.uniqueNavElements&&typeof p=="string"&&h&&h.length>1&&e.el.querySelectorAll(p).length===1?h=e.el.querySelector(p):h&&h.length===1&&(h=h[0])),p&&!h?p:h)}function o(p,h){const v=e.params.navigation;p=Ue(p),p.forEach(w=>{w&&(w.classList[h?"add":"remove"](...v.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=h),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](v.lockClass))})}function a(){const{nextEl:p,prevEl:h}=e.navigation;if(e.params.loop){o(h,!1),o(p,!1);return}o(h,e.isBeginning&&!e.params.rewind),o(p,e.isEnd&&!e.params.rewind)}function l(p){p.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(p){p.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const p=e.params.navigation;if(e.params.navigation=hS(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(p.nextEl||p.prevEl))return;let h=i(p.nextEl),v=i(p.prevEl);Object.assign(e.navigation,{nextEl:h,prevEl:v}),h=Ue(h),v=Ue(v);const w=(f,m)=>{if(f){if(p.addIcons&&f.matches(".swiper-button-next,.swiper-button-prev")&&!f.querySelector("svg")){const x=document.createElement("div");_a(x,lv),f.appendChild(x.querySelector("svg")),x.remove()}f.addEventListener("click",m==="next"?s:l)}!e.enabled&&f&&f.classList.add(...p.lockClass.split(" "))};h.forEach(f=>w(f,"next")),v.forEach(f=>w(f,"prev"))}function c(){let{nextEl:p,prevEl:h}=e.navigation;p=Ue(p),h=Ue(h);const v=(w,f)=>{w.removeEventListener("click",f==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};p.forEach(w=>v(w,"next")),h.forEach(w=>v(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?g():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{c()}),n("enable disable",()=>{let{nextEl:p,prevEl:h}=e.navigation;if(p=Ue(p),h=Ue(h),e.enabled){a();return}[...p,...h].filter(v=>!!v).forEach(v=>v.classList.add(e.params.navigation.lockClass))}),n("click",(p,h)=>{let{nextEl:v,prevEl:w}=e.navigation;v=Ue(v),w=Ue(w);const f=h.target;let m=w.includes(f)||v.includes(f);if(e.isElement&&!m){const x=h.path||h.composedPath&&h.composedPath();x&&(m=x.find(S=>v.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!m){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===f||e.pagination.el.contains(f)))return;let x;v.length?x=v[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(x=w[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...v,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},g=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),c()};Object.assign(e.navigation,{enable:d,disable:g,update:a,init:u,destroy:c})}function Co(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function v$({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(f,m){const{bulletActiveClass:x}=e.params.pagination;f&&(f=f[`${m==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${x}-${m}`),f=f[`${m==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${x}-${m}-${m}`)))}function u(f,m,x){if(f=f%x,m=m%x,m===f+1)return"next";if(m===f-1)return"previous"}function c(f){const m=f.target.closest(Co(e.params.pagination.bulletClass));if(!m)return;f.preventDefault();const x=Vl(m)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const S=u(e.realIndex,x,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function d(){const f=e.rtl,m=e.params.pagination;if(l())return;let x=e.pagination.el;x=Ue(x);let S,E;const k=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,_=e.params.loop?Math.ceil(k/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(E=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,E=e.previousSnapIndex):(E=e.previousIndex||0,S=e.activeIndex||0),m.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const C=e.pagination.bullets;let O,M,I;if(m.dynamicBullets&&(o=fp(C[0],e.isHorizontal()?"width":"height",!0),x.forEach($=>{$.style[e.isHorizontal()?"width":"height"]=`${o*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&E!==void 0&&(a+=S-(E||0),a>m.dynamicMainBullets-1?a=m.dynamicMainBullets-1:a<0&&(a=0)),O=Math.max(S-a,0),M=O+(Math.min(C.length,m.dynamicMainBullets)-1),I=(M+O)/2),C.forEach($=>{const D=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(R=>`${m.bulletActiveClass}${R}`)].map(R=>typeof R=="string"&&R.includes(" ")?R.split(" "):R).flat();$.classList.remove(...D)}),x.length>1)C.forEach($=>{const D=Vl($);D===S?$.classList.add(...m.bulletActiveClass.split(" ")):e.isElement&&$.setAttribute("part","bullet"),m.dynamicBullets&&(D>=O&&D<=M&&$.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),D===O&&s($,"prev"),D===M&&s($,"next"))});else{const $=C[S];if($&&$.classList.add(...m.bulletActiveClass.split(" ")),e.isElement&&C.forEach((D,R)=>{D.setAttribute("part",R===S?"bullet-active":"bullet")}),m.dynamicBullets){const D=C[O],R=C[M];for(let L=O;L<=M;L+=1)C[L]&&C[L].classList.add(...`${m.bulletActiveClass}-main`.split(" "));s(D,"prev"),s(R,"next")}}if(m.dynamicBullets){const $=Math.min(C.length,m.dynamicMainBullets+4),D=(o*$-o)/2-I*o,R=f?"right":"left";C.forEach(L=>{L.style[e.isHorizontal()?R:"top"]=`${D}px`})}}x.forEach((C,O)=>{if(m.type==="fraction"&&(C.querySelectorAll(Co(m.currentClass)).forEach(M=>{M.textContent=m.formatFractionCurrent(S+1)}),C.querySelectorAll(Co(m.totalClass)).forEach(M=>{M.textContent=m.formatFractionTotal(_)})),m.type==="progressbar"){let M;m.progressbarOpposite?M=e.isHorizontal()?"vertical":"horizontal":M=e.isHorizontal()?"horizontal":"vertical";const I=(S+1)/_;let $=1,D=1;M==="horizontal"?$=I:D=I,C.querySelectorAll(Co(m.progressbarFillClass)).forEach(R=>{R.style.transform=`translate3d(0,0,0) scaleX(${$}) scaleY(${D})`,R.style.transitionDuration=`${e.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(_a(C,m.renderCustom(e,S+1,_)),O===0&&r("paginationRender",C)):(O===0&&r("paginationRender",C),r("paginationUpdate",C)),e.params.watchOverflow&&e.enabled&&C.classList[e.isLocked?"add":"remove"](m.lockClass)})}function g(){const f=e.params.pagination;if(l())return;const m=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=Ue(x);let S="";if(f.type==="bullets"){let E=e.params.loop?Math.ceil(m/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&E>m&&(E=m);for(let k=0;k<E;k+=1)f.renderBullet?S+=f.renderBullet.call(e,k,f.bulletClass):S+=`<${f.bulletElement} ${e.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?S=f.renderFraction.call(e,f.currentClass,f.totalClass):S=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?S=f.renderProgressbar.call(e,f.progressbarFillClass):S=`<span class="${f.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(E=>{f.type!=="custom"&&_a(E,S||""),f.type==="bullets"&&e.pagination.bullets.push(...E.querySelectorAll(Co(f.bulletClass)))}),f.type!=="custom"&&r("paginationRender",x[0])}function p(){e.params.pagination=hS(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const f=e.params.pagination;if(!f.el)return;let m;typeof f.el=="string"&&e.isElement&&(m=e.el.querySelector(f.el)),!m&&typeof f.el=="string"&&(m=[...document.querySelectorAll(f.el)]),m||(m=f.el),!(!m||m.length===0)&&(e.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...e.el.querySelectorAll(f.el)],m.length>1&&(m=m.find(x=>pS(x,".swiper")[0]===e.el))),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(e.pagination,{el:m}),m=Ue(m),m.forEach(x=>{f.type==="bullets"&&f.clickable&&x.classList.add(...(f.clickableClass||"").split(" ")),x.classList.add(f.modifierClass+f.type),x.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(x.classList.add(`${f.modifierClass}${f.type}-dynamic`),a=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&x.classList.add(f.progressbarOppositeClass),f.clickable&&x.addEventListener("click",c),e.enabled||x.classList.add(f.lockClass)}))}function h(){const f=e.params.pagination;if(l())return;let m=e.pagination.el;m&&(m=Ue(m),m.forEach(x=>{x.classList.remove(f.hiddenClass),x.classList.remove(f.modifierClass+f.type),x.classList.remove(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&(x.classList.remove(...(f.clickableClass||"").split(" ")),x.removeEventListener("click",c))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...f.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const f=e.params.pagination;let{el:m}=e.pagination;m=Ue(m),m.forEach(x=>{x.classList.remove(f.horizontalClass,f.verticalClass),x.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(p(),g(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{g(),d()}),n("destroy",()=>{h()}),n("enable disable",()=>{let{el:f}=e.pagination;f&&(f=Ue(f),f.forEach(m=>m.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(f,m)=>{const x=m.target,S=Ue(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const E=S[0].classList.contains(e.params.pagination.hiddenClass);r(E===!0?"paginationShow":"paginationHide"),S.forEach(k=>k.classList.toggle(e.params.pagination.hiddenClass))}});const v=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=Ue(f),f.forEach(m=>m.classList.remove(e.params.pagination.paginationDisabledClass))),p(),g(),d()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=Ue(f),f.forEach(m=>m.classList.add(e.params.pagination.paginationDisabledClass))),h()};Object.assign(e.pagination,{enable:v,disable:w,render:g,update:d,init:p,destroy:h})}function y$({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,u,c=new Date().getTime(),d,g,p,h,v,w;function f(F){!e||e.destroyed||!e.wrapperEl||F.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",f),!(w||F.detail&&F.detail.bySwiperTouchMove)&&O())}const m=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(s=u,d=!1);const F=e.autoplay.paused?u:c+s-new Date().getTime();e.autoplay.timeLeft=F,r("autoplayTimeLeft",F,F/l),a=requestAnimationFrame(()=>{m()})},x=()=>{let F;return e.virtual&&e.params.virtual.enabled?F=e.slides.find(j=>j.classList.contains("swiper-slide-active")):F=e.slides[e.activeIndex],F?parseInt(F.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let F=e.params.autoplay.delay;const P=x();return!Number.isNaN(P)&&P>0&&(F=P),F},E=F=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),m();let P=F;typeof P>"u"&&(P=S(),l=P,s=P),u=P;const j=e.params.speed,A=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(j,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,j,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(j,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,j,!0,!0),r("autoplay")),e.params.cssMode&&(c=new Date().getTime(),requestAnimationFrame(()=>{E()})))};return P>0?(clearTimeout(o),o=setTimeout(()=>{A()},P)):requestAnimationFrame(()=>{A()}),P},k=()=>{c=new Date().getTime(),e.autoplay.running=!0,E(),r("autoplayStart")},_=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},C=(F,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),F||(v=!0);const j=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",f):O()};if(e.autoplay.paused=!0,P){j();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-c),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),j())},O=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(c=new Date().getTime(),v?(v=!1,E(u)):E(),e.autoplay.paused=!1,r("autoplayResume"))},M=()=>{if(e.destroyed||!e.autoplay.running)return;const F=Cn();F.visibilityState==="hidden"&&(v=!0,C(!0)),F.visibilityState==="visible"&&O()},I=F=>{F.pointerType==="mouse"&&(v=!0,w=!0,!(e.animating||e.autoplay.paused)&&C(!0))},$=F=>{F.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&O())},D=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",I),e.el.addEventListener("pointerleave",$))},R=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",I),e.el.removeEventListener("pointerleave",$))},L=()=>{Cn().addEventListener("visibilitychange",M)},N=()=>{Cn().removeEventListener("visibilitychange",M)};n("init",()=>{e.params.autoplay.enabled&&(D(),L(),k())}),n("destroy",()=>{R(),N(),e.autoplay.running&&_()}),n("_freeModeStaticRelease",()=>{(p||v)&&O()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?_():C(!0,!0)}),n("beforeTransitionStart",(F,P,j)=>{e.destroyed||!e.autoplay.running||(j||!e.params.autoplay.disableOnInteraction?C(!0,!0):_())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){_();return}g=!0,p=!1,v=!1,h=setTimeout(()=>{v=!0,p=!0,C(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!g)){if(clearTimeout(h),clearTimeout(o),e.params.autoplay.disableOnInteraction){p=!1,g=!1;return}p&&e.params.cssMode&&O(),p=!1,g=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(u=S(),l=S())}),Object.assign(e.autoplay,{start:k,stop:_,pause:C,resume:O})}let ld;function x$(){const e=gt(),t=Cn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function mS(){return ld||(ld=x$()),ld}let ud;function b$({userAgent:e}={}){const t=mS(),n=gt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const c=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=r==="Win32";let p=r==="MacIntel";const h=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&p&&t.touch&&h.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),p=!1),s&&!g&&(o.os="android",o.android=!0),(u||d||c)&&(o.os="ios",o.ios=!0),o}function gS(e={}){return ud||(ud=b$(e)),ud}let cd;function w$(){const e=gt(),t=gS();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,u]=l.split("Version/")[1].split(" ")[0].split(".").map(c=>Number(c));n=s<16||s===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function vS(){return cd||(cd=w$()),cd}function S$({swiper:e,on:t,emit:n}){const r=gt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(c=>{o=r.requestAnimationFrame(()=>{const{width:d,height:g}=e;let p=d,h=g;c.forEach(({contentBoxSize:v,contentRect:w,target:f})=>{f&&f!==e.el||(p=w?w.width:(v[0]||v).inlineSize,h=w?w.height:(v[0]||v).blockSize)}),(p!==d||h!==g)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function _$({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=gt(),a=(u,c={})=>{const d=o.MutationObserver||o.WebkitMutationObserver,g=new d(p=>{if(e.__preventObserver__)return;if(p.length===1){r("observerUpdate",p[0]);return}const h=function(){r("observerUpdate",p[0])};o.requestAnimationFrame?o.requestAnimationFrame(h):o.setTimeout(h,0)});g.observe(u,{attributes:typeof c.attributes>"u"?!0:c.attributes,childList:e.isElement||(typeof c.childList>"u"?!0:c).childList,characterData:typeof c.characterData>"u"?!0:c.characterData}),i.push(g)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=pS(e.hostEl);for(let c=0;c<u.length;c+=1)a(u[c])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var E$={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function C$(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(dr(r,"padding-left")||0,10)-parseInt(dr(r,"padding-right")||0,10),n=n-parseInt(dr(r,"padding-top")||0,10)-parseInt(dr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function k$(){const e=this;function t(M,I){return parseFloat(M.getPropertyValue(e.getDirectionLabel(I))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,u=wn(i,`.${e.params.slideClass}, swiper-slide`),c=l?e.virtual.slides.length:u.length;let d=[];const g=[],p=[];let h=n.slidesOffsetBefore;typeof h=="function"&&(h=n.slidesOffsetBefore.call(e));let v=n.slidesOffsetAfter;typeof v=="function"&&(v=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,f=e.slidesGrid.length,m=e.size-h-v;let x=n.spaceBetween,S=-h,E=0,k=0;if(typeof m>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*m:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-h-v,u.forEach(M=>{o?M.style.marginLeft="":M.style.marginRight="",M.style.marginBottom="",M.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(li(r,"--swiper-centered-offset-before",""),li(r,"--swiper-centered-offset-after","")),n.cssMode&&(li(r,"--swiper-slides-offset-before",`${h}px`),li(r,"--swiper-slides-offset-after",`${v}px`));const _=n.grid&&n.grid.rows>1&&e.grid;_?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let C;const O=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(M=>typeof n.breakpoints[M].slidesPerView<"u").length>0;for(let M=0;M<c;M+=1){C=0;const I=u[M];if(!(I&&(_&&e.grid.updateSlide(M,I,u),dr(I,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(C=n.virtual.slidesPerViewAutoSlideSize),C&&I&&(n.roundLengths&&(C=Math.floor(C)),I.style[e.getDirectionLabel("width")]=`${C}px`);else if(n.slidesPerView==="auto"){O&&(I.style[e.getDirectionLabel("width")]="");const $=getComputedStyle(I),D=I.style.transform,R=I.style.webkitTransform;if(D&&(I.style.transform="none"),R&&(I.style.webkitTransform="none"),n.roundLengths)C=e.isHorizontal()?fp(I,"width",!0):fp(I,"height",!0);else{const L=t($,"width"),N=t($,"padding-left"),F=t($,"padding-right"),P=t($,"margin-left"),j=t($,"margin-right"),A=$.getPropertyValue("box-sizing");if(A&&A==="border-box")C=L+P+j;else{const{clientWidth:B,offsetWidth:z}=I;C=L+N+F+P+j+(z-B)}}D&&(I.style.transform=D),R&&(I.style.webkitTransform=R),n.roundLengths&&(C=Math.floor(C))}else C=(m-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(C=Math.floor(C)),I&&(I.style[e.getDirectionLabel("width")]=`${C}px`);I&&(I.swiperSlideSize=C),p.push(C),n.centeredSlides?(S=S+C/2+E/2+x,E===0&&M!==0&&(S=S-m/2-x),M===0&&(S=S-m/2-x),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),k%n.slidesPerGroup===0&&d.push(S),g.push(S)):(n.roundLengths&&(S=Math.floor(S)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup===0&&d.push(S),g.push(S),S=S+C+x),e.virtualSize+=C+x,E=C,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,m)+v,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+x}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),_&&e.grid.updateWrapperSize(C,d),!n.centeredSlides){const M=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,I=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||M);let $=d.length;if(I){let R;if(n.slidesPerView==="auto"){R=1;let L=0;for(let N=p.length-1;N>=0&&(L+=p[N]+(N<p.length-1?x:0),L<=m);N-=1)R=p.length-N}else R=Math.floor(n.slidesPerView);$=Math.max(c-R,0)}const D=[];for(let R=0;R<d.length;R+=1){let L=d[R];n.roundLengths&&(L=Math.floor(L)),I?R<=$&&D.push(L):d[R]<=e.virtualSize-m&&D.push(L)}d=D,Math.floor(e.virtualSize-m)-Math.floor(d[d.length-1])>1&&(I||d.push(e.virtualSize-m))}if(l&&n.loop){const M=p[0]+x;if(n.slidesPerGroup>1){const I=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),$=M*n.slidesPerGroup;for(let D=0;D<I;D+=1)d.push(d[d.length-1]+$)}for(let I=0;I<e.virtual.slidesBefore+e.virtual.slidesAfter;I+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+M),g.push(g[g.length-1]+M),e.virtualSize+=M}if(d.length===0&&(d=[0]),x!==0){const M=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter((I,$)=>!n.cssMode||n.loop?!0:$!==u.length-1).forEach(I=>{I.style[M]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let M=0;p.forEach($=>{M+=$+(x||0)}),M-=x;const I=M>m?M-m:0;d=d.map($=>$<=0?-h:$>I?I+v:$)}if(n.centerInsufficientSlides){let M=0;if(p.forEach(I=>{M+=I+(x||0)}),M-=x,M<m){const I=(m-M)/2;d.forEach(($,D)=>{d[D]=$-I}),g.forEach(($,D)=>{g[D]=$+I})}}if(Object.assign(e,{slides:u,snapGrid:d,slidesGrid:g,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){li(r,"--swiper-centered-offset-before",`${-d[0]}px`),li(r,"--swiper-centered-offset-after",`${e.size/2-p[p.length-1]/2}px`);const M=-e.snapGrid[0],I=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map($=>$+M),e.slidesGrid=e.slidesGrid.map($=>$+I)}if(c!==s&&e.emit("slidesLengthChange"),d.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==f&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const M=`${n.containerModifierClass}backface-hidden`,I=e.el.classList.contains(M);c<=n.maxBackfaceHiddenSlides?I||e.el.classList.add(M):I&&e.el.classList.remove(M)}}function T$(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function P$(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const uv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function O$(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let c=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const d=(a+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),g=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),p=-(a-c),h=p+t.slidesSizesGrid[s],v=p>=0&&p<=t.size-t.slidesSizesGrid[s],w=p>=0&&p<t.size-1||h>1&&h<=t.size||p<=0&&h>=t.size;w&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s)),uv(u,w,n.slideVisibleClass),uv(u,v,n.slideFullyVisibleClass),u.progress=i?-d:d,u.originalProgress=i?-g:g}}function M$(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const c=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=c||i<=0,a=d||i>=1,c&&(i=0),d&&(i=1)}if(n.loop){const c=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),g=t.slidesGrid[c],p=t.slidesGrid[d],h=t.slidesGrid[t.slidesGrid.length-1],v=Math.abs(e);v>=g?l=(v-g)/h:l=(v+h-p)/h,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(s&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const dd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function $$(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=d=>wn(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let s,u,c;if(o)if(n.loop){let d=i-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${d}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(d=>d.column===i),c=t.find(d=>d.column===i+1),u=t.find(d=>d.column===i-1)):s=t[i];s&&(a||(c=m$(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=t[0]),u=h$(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(d=>{dd(d,d===s,n.slideActiveClass),dd(d,d===c,n.slideNextClass),dd(d,d===u,n.slidePrevClass)}),e.emitSlidesClasses()}const qs=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},fd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},pp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,u)=>a+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&fd(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&fd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&fd(e,a)};function I$(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function j$(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,u;const c=p=>{let h=p-t.virtual.slidesBefore;return h<0&&(h=t.virtual.slides.length+h),h>=t.virtual.slides.length&&(h-=t.virtual.slides.length),h};if(typeof s>"u"&&(s=I$(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const p=Math.min(i.slidesPerGroupSkip,s);u=p+Math.floor((s-p)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=c(s);return}const d=t.grid&&i.grid&&i.grid.rows>1;let g;if(t.virtual&&i.virtual.enabled)i.loop?g=c(s):g=s;else if(d){const p=t.slides.find(v=>v.column===s);let h=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(h)&&(h=Math.max(t.slides.indexOf(p),0)),g=Math.floor(h/i.grid.rows)}else if(t.slides[s]){const p=t.slides[s].getAttribute("data-swiper-slide-index");p?g=parseInt(p,10):g=s}else g=s;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:a,realIndex:g,previousIndex:o,activeIndex:s}),t.initialized&&pp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==g&&t.emit("realIndexChange"),t.emit("slideChange"))}function D$(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var L$={updateSize:C$,updateSlides:k$,updateAutoHeight:T$,updateSlidesOffset:P$,updateSlidesProgress:O$,updateProgress:M$,updateSlidesClasses:$$,updateActiveIndex:j$,updateClickedSlide:D$};function R$(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=c$(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function A$(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let c;const d=n.maxTranslate()-n.minTranslate();d===0?c=0:c=(e-n.minTranslate())/d,c!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function F$(){return-this.snapGrid[0]}function N$(){return-this.snapGrid[this.snapGrid.length-1]}function z$(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),u=o.maxTranslate();let c;if(r&&e>s?c=s:r&&e<u?c=u:c=e,o.updateProgress(c),a.cssMode){const d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-c;else{if(!o.support.smoothScroll)return fS({swiper:o,targetPosition:-c,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(g){!o||o.destroyed||g.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var B$={getTranslate:R$,setTranslate:A$,minTranslate:F$,maxTranslate:N$,translateTo:z$};function V$(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function yS({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function H$(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),yS({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function U$(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),yS({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var W$={setTransition:V$,transitionStart:H$,transitionEnd:U$};function G$(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:c,activeIndex:d,rtlTranslate:g,wrapperEl:p,enabled:h}=o;if(!h&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const v=Math.min(o.params.slidesPerGroupSkip,a);let w=v+Math.floor((a-v)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const f=-s[w];if(l.normalizeSlideIndex)for(let _=0;_<u.length;_+=1){const C=-Math.floor(f*100),O=Math.floor(u[_]*100),M=Math.floor(u[_+1]*100);typeof u[_+1]<"u"?C>=O&&C<M-(M-O)/2?a=_:C>=O&&C<M&&(a=_+1):C>=O&&(a=_)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&(g?f>o.translate&&f>o.minTranslate():f<o.translate&&f<o.minTranslate())||!o.allowSlidePrev&&f>o.translate&&f>o.maxTranslate()&&(d||0)!==a))return!1;a!==(c||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(f);let m;a>d?m="next":a<d?m="prev":m="reset";const x=o.virtual&&o.params.virtual.enabled;if(!(x&&i)&&(g&&-f===o.translate||!g&&f===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(f),m!=="reset"&&(o.transitionStart(n,m),o.transitionEnd(n,m)),!1;if(l.cssMode){const _=o.isHorizontal(),C=g?f:-f;if(t===0)x&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),x&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[_?"scrollLeft":"scrollTop"]=C})):p[_?"scrollLeft":"scrollTop"]=C,x&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return fS({swiper:o,targetPosition:C,side:_?"left":"top"}),!0;p.scrollTo({[_?"left":"top"]:C,behavior:"smooth"})}return!0}const k=vS().isSafari;return x&&!i&&k&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(f),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,m),t===0?o.transitionEnd(n,m):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(C){!o||o.destroyed||C.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,m))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function Y$(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const v=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===v).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u,slidesOffsetBefore:c,slidesOffsetAfter:d}=i.params,g=u||!!c||!!d;let p=i.params.slidesPerView;p==="auto"?p=i.slidesPerViewDynamic():(p=Math.ceil(parseFloat(i.params.slidesPerView,10)),g&&p%2===0&&(p=p+1));let h=s-l<p;if(g&&(h=h||l<Math.ceil(p/2)),r&&g&&i.params.slidesPerView!=="auto"&&!o&&(h=!1),h){const v=g?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?l+1:l-s+1,slideRealIndex:v==="next"?i.realIndex:void 0})}if(o){const v=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===v).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function q$(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function X$(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:u}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const c=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=l?r.translate:-r.translate;function g(m){return m<0?-Math.floor(Math.abs(m)):Math.floor(m)}const p=g(d),h=o.map(m=>g(m)),v=i.freeMode&&i.freeMode.enabled;let w=o[h.indexOf(p)-1];if(typeof w>"u"&&(i.cssMode||v)){let m;o.forEach((x,S)=>{p>=x&&(m=S)}),typeof m<"u"&&(w=v?o[m]:o[m>0?m-1:m])}let f=0;if(typeof w<"u"&&(f=a.indexOf(w),f<0&&(f=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(f=f-r.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),i.rewind&&r.isBeginning){const m=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(m,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(f,e,t,n)}),!0;return r.slideTo(f,e,t,n)}function K$(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function Z$(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],c=i.snapGrid[l+1];s-u>(c-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],c=i.snapGrid[l];s-u<=(c-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function Q$(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(wn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),dS(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var J$={slideTo:G$,slideToLoop:Y$,slideNext:q$,slidePrev:X$,slideReset:K$,slideToClosest:Z$,slideToClickedSlide:Q$};function eI(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{wn(i,`.${r.slideClass}, swiper-slide`).forEach((h,v)=>{h.setAttribute("data-swiper-slide-index",v)})},a=()=>{const p=wn(i,`.${r.slideBlankClass}`);p.forEach(h=>{h.remove()}),p.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),u=n.slides.length%s!==0,c=l&&n.slides.length%r.grid.rows!==0,d=p=>{for(let h=0;h<p;h+=1){const v=n.isElement?Bl("swiper-slide",[r.slideBlankClass]):Bl("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(v)}};if(u){if(r.loopAddBlankSlides){const p=s-n.slides.length%s;d(p),n.recalcSlides(),n.updateSlides()}else zl("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(c){if(r.loopAddBlankSlides){const p=r.grid.rows-n.slides.length%r.grid.rows;d(p),n.recalcSlides(),n.updateSlides()}else zl("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const g=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:g?void 0:"next",initial:t})}function tI({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:c,allowSlideNext:d,slidesEl:g,params:p}=s,{centeredSlides:h,slidesOffsetBefore:v,slidesOffsetAfter:w,initialSlide:f}=p,m=h||!!v||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&p.virtual.enabled){t&&(!m&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):m&&s.snapIndex<p.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=c,s.allowSlideNext=d,s.emit("loopFix");return}let x=p.slidesPerView;x==="auto"?x=s.slidesPerViewDynamic():(x=Math.ceil(parseFloat(p.slidesPerView,10)),m&&x%2===0&&(x=x+1));const S=p.slidesPerGroupAuto?x:p.slidesPerGroup;let E=m?Math.max(S,Math.ceil(x/2)):S;E%S!==0&&(E+=S-E%S),E+=p.loopAdditionalSlides,s.loopedSlides=E;const k=s.grid&&p.grid&&p.grid.rows>1;u.length<x+E||s.params.effect==="cards"&&u.length<x+E*2?zl("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):k&&p.grid.fill==="row"&&zl("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const _=[],C=[],O=k?Math.ceil(u.length/p.grid.rows):u.length,M=o&&O-f<x&&!m;let I=M?f:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(u.find(P=>P.classList.contains(p.slideActiveClass))):I=i;const $=n==="next"||!n,D=n==="prev"||!n;let R=0,L=0;const F=(k?u[i].column:i)+(m&&typeof r>"u"?-x/2+.5:0);if(F<E){R=Math.max(E-F,S);for(let P=0;P<E-F;P+=1){const j=P-Math.floor(P/O)*O;if(k){const A=O-j-1;for(let B=u.length-1;B>=0;B-=1)u[B].column===A&&_.push(B)}else _.push(O-j-1)}}else if(F+x>O-E){L=Math.max(F-(O-E*2),S),M&&(L=Math.max(L,x-O+f+1));for(let P=0;P<L;P+=1){const j=P-Math.floor(P/O)*O;k?u.forEach((A,B)=>{A.column===j&&C.push(B)}):C.push(j)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&u.length<x+E*2&&(C.includes(i)&&C.splice(C.indexOf(i),1),_.includes(i)&&_.splice(_.indexOf(i),1)),D&&_.forEach(P=>{u[P].swiperLoopMoveDOM=!0,g.prepend(u[P]),u[P].swiperLoopMoveDOM=!1}),$&&C.forEach(P=>{u[P].swiperLoopMoveDOM=!0,g.append(u[P]),u[P].swiperLoopMoveDOM=!1}),s.recalcSlides(),p.slidesPerView==="auto"?s.updateSlides():k&&(_.length>0&&D||C.length>0&&$)&&s.slides.forEach((P,j)=>{s.grid.updateSlide(j,P,s.slides)}),p.watchSlidesProgress&&s.updateSlidesOffset(),t){if(_.length>0&&D){if(typeof e>"u"){const P=s.slidesGrid[I],A=s.slidesGrid[I+R]-P;l?s.setTranslate(s.translate-A):(s.slideTo(I+Math.ceil(R),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-A,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-A))}else if(r){const P=k?_.length/p.grid.rows:_.length;s.slideTo(s.activeIndex+P,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(C.length>0&&$)if(typeof e>"u"){const P=s.slidesGrid[I],A=s.slidesGrid[I-L]-P;l?s.setTranslate(s.translate-A):(s.slideTo(I-L,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-A,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-A))}else{const P=k?C.length/p.grid.rows:C.length;s.slideTo(s.activeIndex-P,0,!1,!0)}}if(s.allowSlidePrev=c,s.allowSlideNext=d,s.controller&&s.controller.control&&!a){const P={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(j=>{!j.destroyed&&j.params.loop&&j.loopFix({...P,slideTo:j.params.slidesPerView===p.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...P,slideTo:s.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}s.emit("loopFix")}function nI(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var rI={loopCreate:eI,loopFix:tI,loopDestroy:nI};function iI(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function oI(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var aI={setGrabCursor:iI,unsetGrabCursor:oI};function sI(e,t=this){function n(r){if(!r||r===Cn()||r===gt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function cv(e,t,n){const r=gt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function lI(e){const t=this,n=Cn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){cv(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!p$(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",c=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&c&&(s=c[0]);const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,g=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(g?sI(d,s):s.closest(d))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const p=a.currentX,h=a.currentY;if(!cv(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=p,a.startY=h,i.touchStartTime=Nl(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let v=!0;s.matches(i.focusableElements)&&(v=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=v&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function uI(e){const t=Cn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let u;if(s.type==="touchmove"){if(u=[...s.changedTouches].find(k=>k.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const c=u.pageX,d=u.pageY;if(s.preventedByNestedSwiper){o.startX=c,o.startY=d;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d}),r.touchStartTime=Nl());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(c>o.startX&&-n.translate<=n.maxTranslate()||c<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(c<o.startX&&n.translate<=n.maxTranslate()||c>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=c,o.currentY=d;const g=o.currentX-o.startX,p=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(g**2+p**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let k;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:g*g+p*p>=25&&(k=Math.atan2(Math.abs(p),Math.abs(g))*180/Math.PI,r.isScrolling=n.isHorizontal()?k>i.touchAngle:90-k>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let h=n.isHorizontal()?g:p,v=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(h=Math.abs(h)*(a?1:-1),v=Math.abs(v)*(a?1:-1)),o.diff=h,h*=i.touchRatio,a&&(h=-h,v=-v);const w=n.touchesDirection;n.swipeDirection=h>0?"prev":"next",n.touchesDirection=v>0?"prev":"next";const f=n.params.loop&&!i.cssMode,m=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(f&&m&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(k)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let x;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&f&&m&&Math.abs(h)>=1){Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=h+r.startTranslate;let S=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),h>0?(f&&m&&!x&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+h)**E))):h<0&&(f&&m&&!x&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-h)**E))),S&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(h)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function cI(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(E=>E.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:u,enabled:c}=t;if(!c||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=Nl(),g=d-n.touchStartTime;if(t.allowClick){const E=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(E&&E[0]||r.target,E),t.emit("tap click",r),g<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Nl(),dS(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let p;if(a.followFinger?p=s?t.translate:-t.translate:p=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:p});return}const h=p>=-t.maxTranslate()&&!t.params.loop;let v=0,w=t.slidesSizesGrid[0];for(let E=0;E<u.length;E+=E<a.slidesPerGroupSkip?1:a.slidesPerGroup){const k=E<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[E+k]<"u"?(h||p>=u[E]&&p<u[E+k])&&(v=E,w=u[E+k]-u[E]):(h||p>=u[E])&&(v=E,w=u[u.length-1]-u[u.length-2])}let f=null,m=null;a.rewind&&(t.isBeginning?m=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(f=0));const x=(p-u[v])/w,S=v<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(g>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?f:v+S):t.slideTo(v)),t.swipeDirection==="prev"&&(x>1-a.longSwipesRatio?t.slideTo(v+S):m!==null&&x<0&&Math.abs(x)>a.longSwipesRatio?t.slideTo(m):t.slideTo(v))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(v+S):t.slideTo(v):(t.swipeDirection==="next"&&t.slideTo(f!==null?f:v+S),t.swipeDirection==="prev"&&t.slideTo(m!==null?m:v))}}function dv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function dI(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function fI(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function pI(e){const t=this;qs(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function hI(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const xS=(e,t)=>{const n=Cn(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",dv,!0):e[u]("observerUpdate",dv,!0),i[s]("load",e.onLoad,{capture:!0}))};function mI(){const e=this,{params:t}=e;e.onTouchStart=lI.bind(e),e.onTouchMove=uI.bind(e),e.onTouchEnd=cI.bind(e),e.onDocumentTouchStart=hI.bind(e),t.cssMode&&(e.onScroll=fI.bind(e)),e.onClick=dI.bind(e),e.onLoad=pI.bind(e),xS(e,"on")}function gI(){xS(this,"off")}var vI={attachEvents:mI,detachEvents:gI};const fv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function yI(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=Cn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),u=e.getBreakpoint(o,l,s);if(!u||e.currentBreakpoint===u)return;const d=(u in o?o[u]:void 0)||e.originalParams,g=fv(e,r),p=fv(e,d),h=e.params.grabCursor,v=d.grabCursor,w=r.enabled;g&&!p?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!g&&p&&(i.classList.add(`${r.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),h&&!v?e.unsetGrabCursor():!h&&v&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(k=>{if(typeof d[k]>"u")return;const _=r[k]&&r[k].enabled,C=d[k]&&d[k].enabled;_&&!C&&e[k].disable(),!_&&C&&e[k].enable()});const f=d.direction&&d.direction!==r.direction,m=r.loop&&(d.slidesPerView!==r.slidesPerView||f),x=r.loop;f&&n&&e.changeDirection(),Mt(e.params,d);const S=e.params.enabled,E=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",d),n&&(m?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&E?(e.loopCreate(t),e.updateSlides()):x&&!E&&e.loopDestroy()),e.emit("breakpoint",d)}function xI(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=gt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:u}=a[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var bI={setBreakpoint:yI,getBreakpoint:xI};function wI(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function SI(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=wI(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function _I(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var EI={addClasses:SI,removeClasses:_I};function CI(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var kI={checkOverflow:CI},hp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function TI(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Mt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Mt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Mt(t,r)}}const pd={eventsEmitter:E$,update:L$,translate:B$,transition:W$,slide:J$,loop:rI,grabCursor:aI,events:vI,breakpoints:bI,checkOverflow:kI,classes:EI},hd={};let um=class Mn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Mt({},r),n&&!r.el&&(r.el=n);const i=Cn();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(u=>{const c=Mt({},r,{el:u});s.push(new Mn(c))}),s}const o=this;o.__swiper__=!0,o.support=mS(),o.device=gS({userAgent:r.userAgent}),o.browser=vS(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:TI(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Mt({},hp,a);return o.params=Mt({},l,hd,r),o.originalParams=Mt({},o.params),o.passedParams=Mt({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=wn(n,`.${r.slideClass}, swiper-slide`),o=Vl(i[0]);return Vl(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=wn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:u}=r;let c=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=o[u]?Math.ceil(o[u].swiperSlideSize):0,g;for(let p=u+1;p<o.length;p+=1)o[p]&&!g&&(d+=Math.ceil(o[p].swiperSlideSize),c+=1,d>s&&(g=!0));for(let p=u-1;p>=0;p-=1)o[p]&&!g&&(d+=o[p].swiperSlideSize,c+=1,d>s&&(g=!0))}else if(t==="current")for(let d=u+1;d<o.length;d+=1)(n?a[d]+l[d]-a[u]<s:a[d]-a[u]<s)&&(c+=1);else for(let d=u-1;d>=0;d-=1)a[u]-a[d]<s&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&qs(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):wn(r,i())[0])();return!a&&n.params.createElements&&(a=Bl("div",n.params.wrapperClass),r.append(a),wn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||dr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||dr(r,"direction")==="rtl"),wrongRTL:dr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?qs(n,o):o.addEventListener("load",a=>{qs(n,a.target)})}),pp(n),n.initialized=!0,pp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),l$(r)),r.destroyed=!0),null}static extendDefaults(t){Mt(hd,t)}static get extendedDefaults(){return hd}static get defaults(){return hp}static installModule(t){Mn.prototype.__modules__||(Mn.prototype.__modules__=[]);const n=Mn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Mn.installModule(n)),Mn):(Mn.installModule(t),Mn)}};Object.keys(pd).forEach(e=>{Object.keys(pd[e]).forEach(t=>{um.prototype[t]=pd[e][t]})});um.use([S$,_$]);const bS=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Jr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Ii(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Jr(t[r])&&Jr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Ii(e[r],t[r]):e[r]=t[r]})}function wS(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function SS(e={}){return e.pagination&&typeof e.pagination.el>"u"}function _S(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function ES(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function PI(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function OI({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(C=>C!=="children"&&C!=="direction"&&C!=="wrapperClass"),{params:u,pagination:c,navigation:d,scrollbar:g,virtual:p,thumbs:h}=e;let v,w,f,m,x,S,E,k;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(v=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&c&&!c.el&&(f=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&g&&!g.el&&(m=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(x=!0);const _=C=>{e[C]&&(e[C].destroy(),C==="navigation"?(e.isElement&&(e[C].prevEl.remove(),e[C].nextEl.remove()),u[C].prevEl=void 0,u[C].nextEl=void 0,e[C].prevEl=void 0,e[C].nextEl=void 0):(e.isElement&&e[C].el.remove(),u[C].el=void 0,e[C].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?S=!0:!u.loop&&n.loop?E=!0:k=!0),s.forEach(C=>{if(Jr(u[C])&&Jr(n[C]))Object.assign(u[C],n[C]),(C==="navigation"||C==="pagination"||C==="scrollbar")&&"enabled"in n[C]&&!n[C].enabled&&_(C);else{const O=n[C];(O===!0||O===!1)&&(C==="navigation"||C==="pagination"||C==="scrollbar")?O===!1&&_(C):u[C]=n[C]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&p&&u.virtual.enabled?(p.slides=t,p.update(!0)):r.includes("virtual")&&p&&u.virtual.enabled&&(t&&(p.slides=t),p.update(!0)),r.includes("children")&&t&&u.loop&&(k=!0),v&&h.init()&&h.update(!0),w&&(e.controller.control=u.controller.control),f&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),c.init(),c.render(),c.update()),m&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),g.init(),g.updateSize(),g.setTranslate()),x&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),_a(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),_a(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(S||k)&&e.loopDestroy(),(E||k)&&e.loopCreate(),e.update()}function MI(e={},t=!0){const n={on:{}},r={},i={};Ii(n,hp),n._emitClasses=!0,n.init=!1;const o={},a=bS.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?Jr(e[s])?(n[s]={},i[s]={},Ii(n[s],e[s]),Ii(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function $I({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){wS(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),SS(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),_S(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function II(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return bS.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(Jr(e[s])&&Jr(t[s])){const u=Object.keys(e[s]),c=Object.keys(t[s]);u.length!==c.length?a(s):(u.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}),c.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const jI=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Hl(){return Hl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hl.apply(this,arguments)}function CS(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function kS(e){const t=[];return q.Children.toArray(e).forEach(n=>{CS(n)?t.push(n):n.props&&n.props.children&&kS(n.props.children).forEach(r=>t.push(r))}),t}function DI(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return q.Children.toArray(e).forEach(r=>{if(CS(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=kS(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function LI(e,t,n){if(!n)return null;const r=c=>{let d=c;return c<0?d=t.length+c:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let c=l;c<s;c+=1)c>=o&&c<=a&&u.push(t[r(c)]);return u.map((c,d)=>q.cloneElement(c,{swiper:e,style:i,key:c.props.virtualIndex||c.key||`slide-${d}`}))}function Yo(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const pv=b.createContext(null),RI=b.createContext(null),TS=b.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,u]=b.useState("swiper"),[c,d]=b.useState(null),[g,p]=b.useState(!1),h=b.useRef(!1),v=b.useRef(null),w=b.useRef(null),f=b.useRef(null),m=b.useRef(null),x=b.useRef(null),S=b.useRef(null),E=b.useRef(null),k=b.useRef(null),{params:_,passedParams:C,rest:O,events:M}=MI(o),{slides:I,slots:$}=DI(r),D=()=>{p(!g)};Object.assign(_.on,{_containerClasses(P,j){u(j)}});const R=()=>{Object.assign(_.on,M),l=!0;const P={..._};if(delete P.wrapperClass,w.current=new um(P),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=I;const j={cache:!1,slides:I,renderExternal:d,renderExternalUpdate:!1};Ii(w.current.params.virtual,j),Ii(w.current.originalParams.virtual,j)}};v.current||R(),w.current&&w.current.on("_beforeBreakpoint",D);const L=()=>{l||!M||!w.current||Object.keys(M).forEach(P=>{w.current.on(P,M[P])})},N=()=>{!M||!w.current||Object.keys(M).forEach(P=>{w.current.off(P,M[P])})};b.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",D)}),b.useEffect(()=>{!h.current&&w.current&&(w.current.emitSlidesClasses(),h.current=!0)}),Yo(()=>{if(a&&(a.current=v.current),!!v.current)return w.current.destroyed&&R(),$I({el:v.current,nextEl:x.current,prevEl:S.current,paginationEl:E.current,scrollbarEl:k.current,swiper:w.current},_),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),Yo(()=>{L();const P=II(C,f.current,I,m.current,j=>j.key);return f.current=C,m.current=I,P.length&&w.current&&!w.current.destroyed&&OI({swiper:w.current,slides:I,passedParams:C,changedParams:P,nextEl:x.current,prevEl:S.current,scrollbarEl:k.current,paginationEl:E.current}),()=>{N()}}),Yo(()=>{jI(w.current)},[c]);function F(){return _.virtual?LI(w.current,I,c):I.map((P,j)=>q.cloneElement(P,{swiper:w.current,swiperSlideIndex:j}))}return q.createElement(t,Hl({ref:v,className:ES(`${s}${e?` ${e}`:""}`)},O),q.createElement(RI.Provider,{value:w.current},$["container-start"],q.createElement(n,{className:PI(_.wrapperClass)},$["wrapper-start"],F(),$["wrapper-end"]),wS(_)&&q.createElement(q.Fragment,null,q.createElement("div",{ref:S,className:"swiper-button-prev"}),q.createElement("div",{ref:x,className:"swiper-button-next"})),_S(_)&&q.createElement("div",{ref:k,className:"swiper-scrollbar"}),SS(_)&&q.createElement("div",{ref:E,className:"swiper-pagination"}),$["container-end"]))});TS.displayName="Swiper";const PS=b.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},u)=>{const c=b.useRef(null),[d,g]=b.useState("swiper-slide"),[p,h]=b.useState(!1);function v(x,S,E){S===c.current&&g(E)}Yo(()=>{if(typeof l<"u"&&(c.current.swiperSlideIndex=l),u&&(u.current=c.current),!(!c.current||!r)){if(r.destroyed){d!=="swiper-slide"&&g("swiper-slide");return}return r.on("_slideClass",v),()=>{r&&r.off("_slideClass",v)}}}),Yo(()=>{r&&c.current&&!r.destroyed&&g(r.getSlideClasses(c.current))},[r]);const w={isActive:d.indexOf("swiper-slide-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0},f=()=>typeof t=="function"?t(w):t,m=()=>{h(!0)};return q.createElement(e,Hl({ref:c,className:ES(`${d}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:m},s),i&&q.createElement(pv.Provider,{value:w},q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},f(),o&&!p&&q.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}}))),!i&&q.createElement(pv.Provider,{value:w},f(),o&&!p&&q.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}})))});PS.displayName="SwiperSlide";const AI=T.section`
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
`,FI=T.div`
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
`,NI=T.div`
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
`,zI=T(Me)`
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
`,BI=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg",btn:"До каталогу",url:"/catalog"},{id:2,title:"Постійне оновлення товару",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp",btn:"До новинок",url:"/catalog/new"}],VI=()=>y.jsx(AI,{children:y.jsx(TS,{modules:[g$,y$,v$],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:BI.map(e=>y.jsx(PS,{children:y.jsx(FI,{bg:e.img,children:y.jsxs(NI,{children:[y.jsx("h1",{children:e.title}),y.jsx("p",{children:e.desc}),y.jsx(zI,{to:e.url,children:e.btn})]})})},e.id))})}),HI=T.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,md=T.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,gd=T.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,vd=T.div`
  font-size: 14px;
  color: #888;
`,OS=()=>y.jsxs(HI,{children:[y.jsxs(md,{children:[y.jsx(gd,{children:"3000+"}),y.jsx(vd,{children:"Перевірених деталей"})]}),y.jsxs(md,{children:[y.jsx(gd,{children:"6 років"}),y.jsx(vd,{children:"Досвіду на ринку"})]}),y.jsxs(md,{children:[y.jsx(gd,{children:"100%"}),y.jsx(vd,{children:"Контроль якості"})]})]}),UI=Re.div`
  background:var(--background-color);
`,WI=Re.div`
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
`;const GI=()=>y.jsx(UI,{children:y.jsxs(WI,{children:[y.jsx(VI,{}),y.jsx(OS,{}),y.jsx(Yb,{}),y.jsx(o$,{})]})}),YI=T.div`
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
`,qI=T.section`
  background-color:  var(--second-background);
`,XI=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,KI=T.button`
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
`,ZI=T.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,QI=T.button`
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
`,JI=T.svg`
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
`,mp=T.input.attrs({type:"checkbox"})`
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
`;var gp={},cm={},dm={},ao={};Object.defineProperty(ao,"__esModule",{value:!0});ao.Direction=void 0;var hv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(hv||(ao.Direction=hv={}));(function(e){var t=te&&te.__spreadArray||function($,D,R){if(R||arguments.length===2)for(var L=0,N=D.length,F;L<N;L++)(F||!(L in D))&&(F||(F=Array.prototype.slice.call(D,0,L)),F[L]=D[L]);return $.concat(F||Array.prototype.slice.call(D))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=b,r=ao,i=function($){var D=$.toString().split(".")[1];return D?D.length:0};e.getStepDecimals=i;function o($){return $.touches&&$.touches.length||$.changedTouches&&$.changedTouches.length}e.isTouchEvent=o;function a($,D,R){var L=(D-$)/R,N=8,F=Number(L.toFixed(N));return parseInt(F.toString(),10)===F}e.isStepDivisible=a;function l($,D,R,L,N,F,P){var j=1e11;if($=Math.round($*j)/j,!F){var A=P[D-1],B=P[D+1];if(A&&A>$)return A;if(B&&B<$)return B}if($>L)return L;if($<R)return R;var z=Math.floor($*j-R*j)%Math.floor(N*j),H=Math.floor($*j-Math.abs(z)),G=z===0?$:H/j,W=Math.abs(z/j)<N/2?G:G+N,X=(0,e.getStepDecimals)(N);return parseFloat(W.toFixed(X))}e.normalizeValue=l;function s($,D,R){return($-D)/(R-D)}e.relativeValue=s;function u($){return $===r.Direction.Up||$===r.Direction.Down}e.isVertical=u;function c($,D,R){if(D>=R)throw new RangeError("min (".concat(D,") is equal/bigger than max (").concat(R,")"));if($<D)throw new RangeError("value (".concat($,") is smaller than min (").concat(D,")"));if($>R)throw new RangeError("value (".concat($,") is bigger than max (").concat(R,")"))}e.checkBoundaries=c;function d($,D,R){return $<D?D:$>R?R:$}e.checkValuesAgainstBoundaries=d;function g($){if(!($.length<2)&&!$.slice(1).every(function(D,R){return $[R]<=D}))throw new RangeError("values={[".concat($,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=g;function p($){var D=window.getComputedStyle($);return{top:parseInt(D["margin-top"],10),bottom:parseInt(D["margin-bottom"],10),left:parseInt(D["margin-left"],10),right:parseInt(D["margin-right"],10)}}e.getMargin=p;function h($){var D=window.getComputedStyle($);return{top:parseInt(D["padding-top"],10)+parseInt(D["border-top-width"],10),bottom:parseInt(D["padding-bottom"],10)+parseInt(D["border-bottom-width"],10),left:parseInt(D["padding-left"],10)+parseInt(D["border-left-width"],10),right:parseInt(D["padding-right"],10)+parseInt(D["border-right-width"],10)}}e.getPaddingAndBorder=h;function v($,D,R){var L=R?-1:1;$.forEach(function(N,F){return f(N,L*D[F].x,D[F].y)})}e.translateThumbs=v;function w($,D,R,L){for(var N=0,F=M($[0],D,R,L),P=1;P<$.length;P++){var j=M($[P],D,R,L);j<F&&(F=j,N=P)}return N}e.getClosestThumbIndex=w;function f($,D,R){$.style.transform="translate(".concat(D,"px, ").concat(R,"px)")}e.translate=f;var m=function($){var D=[],R=null,L=function(){for(var N=[],F=0;F<arguments.length;F++)N[F]=arguments[F];D=N,!R&&(R=requestAnimationFrame(function(){R=null,$.apply(void 0,D)}))};return L};e.schd=m;function x($,D,R){var L=$.slice(0);return L[D]=R,L}e.replaceAt=x;function S($){var D=$.values,R=$.colors,L=$.min,N=$.max,F=$.direction,P=F===void 0?r.Direction.Right:F,j=$.rtl,A=j===void 0?!1:j;A&&P===r.Direction.Right?P=r.Direction.Left:A&&r.Direction.Left&&(P=r.Direction.Right);var B=D.slice(0).sort(function(H,G){return H-G}).map(function(H){return(H-L)/(N-L)*100}),z=B.reduce(function(H,G,W){return"".concat(H,", ").concat(R[W]," ").concat(G,"%, ").concat(R[W+1]," ").concat(G,"%")},"");return"linear-gradient(".concat(P,", ").concat(R[0]," 0%").concat(z,", ").concat(R[R.length-1]," 100%)")}e.getTrackBackground=S;function E(){}e.voidFn=E;function k($){throw new Error("Didn't expect to get here")}e.assertUnreachable=k;var _=function($,D,R,L,N){N===void 0&&(N=function(P){return P});var F=Math.ceil(t([$],Array.from($.children),!0).reduce(function(P,j){var A=Math.ceil(j.getBoundingClientRect().width);if(j.innerText&&j.innerText.includes(R)&&j.childElementCount===0){var B=j.cloneNode(!0);B.innerHTML=N(D.toFixed(L)),B.style.visibility="hidden",document.body.appendChild(B),A=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return A>P?A:P},$.getBoundingClientRect().width));return F},C=function($,D,R,L,N,F,P){P===void 0&&(P=function(B){return B});var j=[],A=function(B){var z=_(R[B],L[B],N,F,P),H=D[B].x;D.forEach(function(G,W){var X=G.x,ee=_(R[W],L[W],N,F,P);B!==W&&(H>=X&&H<=X+ee||H+z>=X&&H+z<=X+ee)&&(j.includes(W)||(j.push(B),j.push(W),j=t(t([],j,!0),[B,W],!1),A(W)))})};return A($),Array.from(new Set(j.sort()))},O=function($,D,R,L,N,F){L===void 0&&(L=.1),N===void 0&&(N=" - "),F===void 0&&(F=function(W){return W});var P=(0,e.getStepDecimals)(L),j=(0,n.useState)({}),A=j[0],B=j[1],z=(0,n.useState)(F(D[R].toFixed(P))),H=z[0],G=z[1];return(0,n.useEffect)(function(){if($){var W=$.getThumbs();if(W.length<1)return;var X={},ee=$.getOffsets(),fe=C(R,ee,W,D,N,P,F),be=F(D[R].toFixed(P));if(fe.length){var ie=fe.reduce(function(vt,lo,Ha,uo){return vt.length?t(t([],vt,!0),[ee[uo[Ha]].x],!1):[ee[uo[Ha]].x]},[]);if(Math.min.apply(Math,ie)===ee[R].x){var $e=[];fe.forEach(function(vt){$e.push(D[vt].toFixed(P))}),be=Array.from(new Set($e.sort(function(vt,lo){return parseFloat(vt)-parseFloat(lo)}))).map(F).join(N);var Be=Math.min.apply(Math,ie),Ve=Math.max.apply(Math,ie),oi=W[fe[ie.indexOf(Ve)]].getBoundingClientRect().width;X.left="".concat(Math.abs(Be-(Ve+oi))/2,"px"),X.transform="translate(-50%, 0)"}else X.visibility="hidden"}G(be),B(X)}},[$,D]),[H,A]};e.useThumbOverlap=O;function M($,D,R,L){var N=$.getBoundingClientRect(),F=N.left,P=N.top,j=N.width,A=N.height;return u(L)?Math.abs(R-(P+A/2)):Math.abs(D-(F+j/2))}var I=function(){var $,D=(($=navigator.userAgentData)===null||$===void 0?void 0:$.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(D)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=I})(dm);var hj=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),mj=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),gj=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),vj=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&mj(t,e,n);return gj(t,e),t},mv=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(cm,"__esModule",{value:!0});var ys=vj(b),oe=dm,Ae=ao,yj=["ArrowRight","ArrowUp","k","PageUp"],xj=["ArrowLeft","ArrowDown","j","PageDown"],bj=function(e){hj(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=ys.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,u=r.trackRef.current;if(!u)return console.warn("No track element found."),[];var c=u.getBoundingClientRect(),d=(0,oe.getPaddingAndBorder)(u);return r.getThumbs().map(function(g,p){var h={x:0,y:0},v=g.getBoundingClientRect(),w=(0,oe.getMargin)(g);switch(o){case Ae.Direction.Right:return h.x=(w.left+d.left)*-1,h.y=((v.height-c.height)/2+d.top)*-1,h.x+=c.width*(0,oe.relativeValue)(a[p],l,s)-v.width/2,h;case Ae.Direction.Left:return h.x=(w.right+d.right)*-1,h.y=((v.height-c.height)/2+d.top)*-1,h.x+=c.width-c.width*(0,oe.relativeValue)(a[p],l,s)-v.width/2,h;case Ae.Direction.Up:return h.x=((v.width-c.width)/2+w.left+d.left)*-1,h.y=-d.left,h.y+=c.height-c.height*(0,oe.relativeValue)(a[p],l,s)-v.height/2,h;case Ae.Direction.Down:return h.x=((v.width-c.width)/2+w.left+d.left)*-1,h.y=-d.left,h.y+=c.height*(0,oe.relativeValue)(a[p],l,s)-v.height/2,h;default:return(0,oe.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,oe.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,oe.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,oe.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,u=o.rtl,c=o.direction,d=r.state.isChanged,g=r.getTargetIndex(i.nativeEvent),p=u||c===Ae.Direction.Left||c===Ae.Direction.Down?-1:1;g!==-1&&(yj.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:g,isChanged:!0}),l((0,oe.replaceAt)(a,g,r.normalizeValue(a[g]+p*(i.key==="PageUp"?s*10:s),g)))):xj.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:g,isChanged:!0}),l((0,oe.replaceAt)(a,g,r.normalizeValue(a[g]-p*(i.key==="PageDown"?s*10:s),g)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){d&&r.fireOnFinalChange()}):d&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,u=r.props,c=u.direction,d=u.min,g=u.max,p=u.onChange,h=u.values,v=u.step,w=u.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var f=r.trackRef.current;if(!f)return null;var m=f.getBoundingClientRect(),x=(0,oe.isVertical)(c)?m.height:m.width;if(s[0]!==-1&&s[1]!==-1){var S=i-s[0],E=o-s[1],k=0;switch(c){case Ae.Direction.Right:case Ae.Direction.Left:k=S/x*(g-d);break;case Ae.Direction.Down:case Ae.Direction.Up:k=E/x*(g-d);break;default:(0,oe.assertUnreachable)(c)}if(w&&(k*=-1),Math.abs(k)>=v/2){for(var _=0;_<r.thumbRefs.length;_++){if(h[_]===g&&Math.sign(k)===1||h[_]===d&&Math.sign(k)===-1)return;var C=h[_]+k;C>g?k=g-h[_]:C<d&&(k=d-h[_])}for(var O=h.slice(0),_=0;_<r.thumbRefs.length;_++)O=(0,oe.replaceAt)(O,_,r.normalizeValue(h[_]+k,_));r.setState({draggedTrackPos:[i,o]}),p(O)}}else{var M=0;switch(c){case Ae.Direction.Right:M=(i-m.left)/x*(g-d)+d;break;case Ae.Direction.Left:M=(x-(i-m.left))/x*(g-d)+d;break;case Ae.Direction.Down:M=(o-m.top)/x*(g-d)+d;break;case Ae.Direction.Up:M=(x-(o-m.top))/x*(g-d)+d;break;default:(0,oe.assertUnreachable)(c)}w&&(M=g+d-M),Math.abs(h[l]-M)>=v/2&&p((0,oe.replaceAt)(h,l,r.normalizeValue(M,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,u=a.step,c=a.allowOverlap,d=a.values;return(0,oe.normalizeValue)(i,o,l,s,u,c,d)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=ys.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),u=[],c=0;c<r.numOfMarks+1;c++){var d=9999,g=9999;if(r.markRefs[c].current){var p=r.markRefs[c].current.getBoundingClientRect();d=p.height,g=p.width}r.props.direction===Ae.Direction.Left||r.props.direction===Ae.Direction.Right?u.push([Math.round(o/r.numOfMarks*c+l-g/2),-Math.round((d-a)/2)]):u.push([Math.round(a/r.numOfMarks*c+s-d/2),-Math.round((g-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,oe.schd)(r.onMouseMove),r.schdOnTouchMove=(0,oe.schd)(r.onTouchMove),r.schdOnEnd=(0,oe.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return ys.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,oe.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,oe.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,oe.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(c){(0,oe.isStepDivisible)(a,c,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,u=s===void 0?function(){return null}:s,c=r.values,d=r.min,g=r.max,p=r.allowOverlap,h=r.disabled,v=this.state,w=v.draggedThumbIndex,f=v.thumbZIndexes,m=v.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,oe.isVertical)(this.props.direction)?"ns-resize":"ew-resize":c.length===1&&!h?"pointer":"inherit"},onMouseDown:h?oe.voidFn:this.onMouseDownTrack,onTouchStart:h?oe.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:h,children:mv(mv([],m.map(function(x,S,E){return u({props:{style:n.props.direction===Ae.Direction.Left||n.props.direction===Ae.Direction.Right?{position:"absolute",left:"".concat(x[0],"px"),marginTop:"".concat(x[1],"px")}:{position:"absolute",top:"".concat(x[0],"px"),marginLeft:"".concat(x[1],"px")},key:"mark".concat(S),ref:n.markRefs[S]},index:S})}),!0),c.map(function(x,S){var E=n.state.draggedThumbIndex===S;return l({index:S,value:x,isDragged:E,props:{style:{position:"absolute",zIndex:f[S],cursor:h?"inherit":E?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:h?void 0:0,"aria-valuemax":p?g:c[S+1]||g,"aria-valuemin":p?d:c[S-1]||d,"aria-valuenow":x,draggable:!1,ref:n.thumbRefs[S],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:h?oe.voidFn:n.onKeyDown,onKeyUp:h?oe.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Ae.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(ys.Component);cm.default=bj;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(cm);e.Range=n.default;var r=dm;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=ao;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(gp);const wj=T.div`
  padding: 20px 0;
`,Sj=T.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,gv=T.input`
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
`,$S=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,u]=b.useState([o,a]);b.useEffect(()=>{e&&e.length===2&&(u(e),t&&t(e))},[e,t]);const c=p=>{u(p),t&&t(p)},d=(p,h)=>{const v=h===""?"":Number(h),w=[...s];w[p]=v,c(w)},g=p=>{const h=[...s];p===0?((h[0]===""||h[0]<o)&&(h[0]=o),h[0]>h[1]-50&&(h[0]=h[1]-50)):((h[1]===""||h[1]>a)&&(h[1]=a),h[1]<h[0]+50&&(h[1]=h[0]+50)),c(h)};return y.jsx(y.Fragment,{children:l&&y.jsxs(wj,{children:[y.jsxs(Sj,{children:[y.jsx(gv,{type:"number",value:s[0],min:o,max:s[1],onChange:p=>d(0,p.target.value),onBlur:()=>g(0)}),y.jsx(gv,{type:"number",value:s[1],min:s[0],max:a,onChange:p=>d(1,p.target.value),onBlur:()=>g(1)})]}),y.jsx(gp.Range,{values:s,step:50,min:o,max:a,onChange:c,renderTrack:({props:p,children:h})=>y.jsx(_j,{...p,background:gp.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:h}),renderThumb:({props:p})=>y.jsx(Ej,{...p})})]})})},Cj=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState([]);b.useEffect(()=>{t&&(async()=>{try{const h=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const v=await h.json();console.log("dataaaa",v.data);const w=v.data||[],f={};w.forEach(x=>{var S;(S=x.attributes)==null||S.forEach(E=>{f[E.label]||(f[E.label]=new Set),f[E.label].add(E.value)})});const m=Object.entries(f).map(([x,S])=>({type:"checkbox",label:x,name:x.toLowerCase(),options:Array.from(S)}));console.log("fillltr",m),a(m)}catch(h){console.error(h)}})()},[t]);const[l,s]=b.useState({}),u=p=>{s(h=>({...h,[p]:!h[p]}))},c=(p,h)=>{r(v=>{const w=v[p]||[];return w.includes(h)?{...v,[p]:w.filter(f=>f!==h)}:{...v,[p]:[...w,h]}})},d=Object.values(n).some(p=>Array.isArray(p)&&p.length>0),g=()=>{d&&r({})};return console.log(d),y.jsxs(oj,{children:[y.jsxs(aj,{children:["Фільтри ",y.jsx(Sb,{size:20})]}),(o||[]).map(p=>{var v;const h=!!l[p.name];return y.jsxs(sj,{children:[y.jsxs(lj,{onClick:()=>u(p.name),children:[y.jsx(uj,{children:p.label}),y.jsx(cj,{isOpen:h})]}),y.jsxs(dj,{isOpen:h,children:[p.type==="checkbox"&&((v=p.options)==null?void 0:v.map(w=>{var f;return y.jsxs(fj,{children:[y.jsx(mp,{checked:((f=n[p.name])==null?void 0:f.includes(w))||!1,onChange:()=>c(p.name,w)}),y.jsx(pj,{}),w]},w)})),p.type==="range"&&y.jsx($S,{onChange:i,childValues:e})]})]},p.name)}),y.jsx(MS,{onClick:g,disabled:!d,children:"Скинути обрані фільтри"})]})},kj=T.aside`
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
`,$j=T.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,Ij=T.label`
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
`,jj=T.span`
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
`,Dj=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState({}),[l,s]=b.useState([]);b.useEffect(()=>{t&&(async()=>{var g;try{const v=((g=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/categories?filters[title][$eq]=${t}&populate=filters`)).json()).data[0])==null?void 0:g.filters)||[];s(v)}catch(p){console.error(p)}})()},[t]);const u=d=>{a(g=>({...g,[d]:!g[d]}))},c=(d,g)=>{r(p=>{const h=p[d]||[];return h.includes(g)?{...p,[d]:h.filter(v=>v!==g)}:{...p,[d]:[...h,g]}})};return y.jsx(kj,{children:(l||[]).map(d=>{var p;const g=!!o[d.name];return y.jsxs(Tj,{children:[y.jsxs(Pj,{onClick:()=>u(d.name),children:[y.jsx(Oj,{children:d.label}),y.jsx(Mj,{isOpen:g})]}),y.jsxs($j,{isOpen:g,children:[d.type==="checkbox"&&((p=d.options)==null?void 0:p.map(h=>{var v;return y.jsxs(Ij,{children:[y.jsx(vp,{checked:((v=n[d.name])==null?void 0:v.includes(h))||!1,onChange:()=>c(d.name,h)}),y.jsx(jj,{}),h]},h)})),d.type==="range"&&y.jsx($S,{onChange:i,childValues:e})]})]},d.name)})})},Lj=T.div`
`,Rj=T.h2`
  text-align: center;
  font-size:34px;
  font-weight:600px;
`,Aj=T.div`
width: 100vw;

  @media screen and (min-width: 768px) {
  width: 70vw;
  }
      
`;T.div``;const Fj=T.div`
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
    padding-right: 20px;
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
    padding-right: 0;
    margin-left: 30px;
    max-width: 1340px;
  }
`,Nj=T.div`
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
`,zj=T.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;
`,Bj=T.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,Vj=T.p`
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
`,Hj=T.p`
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

  }
`,vv=T.button`
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
`;const Wj=T.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
`,yd=T.button`
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
`,IS=Fb({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]}}}),{toggleFavorite:Ba,clearFavorite:Gj}=IS.actions,Yj=IS.reducer,qj=({setValues:e,category:t,selectedFilters:n={},priceRange:r})=>{const[i,o]=b.useState([]),[a,l]=b.useState(!0);console.log(t);const[s,u]=b.useState(1),c=24;let d=i;b.useEffect(()=>{(async()=>{try{l(!0);const _=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();o(_.data);const C=_.data.map(O=>O.price);if(C.length>0){let O=Math.min(...C),M=Math.max(...C);e([O,M])}}catch(k){console.error("Error fetching products:",k)}finally{l(!1)}})()},[t,e]),b.useEffect(()=>{u(1)},[t,n,r]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[s]);const g=Qi(),p=Kn(),h=Dt(E=>E.favorites.items),v=Dt(E=>E.cart.items),w=(E,k)=>{k.stopPropagation();const _=h.some(C=>C.id===E.id);p(Ba(E)),_?J.warning(`${E.name} видалено з обраного`):J.info(`${E.name} додано в обране`)};if(Object.keys(n).forEach(E=>{const k=n[E];Array.isArray(k)&&k.length>0&&(d=d.filter(_=>{var O;const C=(O=_.attributes)==null?void 0:O.find(M=>M.label.toLowerCase()===E.toLowerCase());return C&&k.includes(C.value)}))}),r&&r.length===2){const[E,k]=r;console.log(E,k)}const f=s*c,m=f-c,x=d.slice(m,f),S=Math.ceil(d.length/c);return a?y.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:y.jsx(Wu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):(console.log(x),console.log("filteredProducts.length:",d.length),console.log("currentProducts.length:",x.length),y.jsxs(Lj,{children:[y.jsx(Rj,{children:t}),y.jsx(no,{autoClose:1500}),d.length===0?y.jsx(Aj,{children:y.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):y.jsx(Fj,{children:x.map(E=>{var I,$;const k=h.some(D=>D.id===E.id),_=v.find(D=>D.id===E.id),O=(_?_.quantity:0)>=(E.stock||0),M=(D,R)=>{if(R.stopPropagation(),O){J.error(`Вибачте, доступно лише ${D.stock} шт.`);return}p(La({...D,quantity:1})),J.success(`${D.name} додано в кошик!`)};return y.jsxs(Nj,{onClick:()=>g(`/product/${E.id}`),style:{cursor:"pointer"},children:[y.jsx(zj,{src:(($=(I=E.images)==null?void 0:I[0])==null?void 0:$.url)||"/placeholder.jpg",alt:E.name,onError:D=>{D.currentTarget.onerror=null,D.currentTarget.src=xa}}),y.jsx(Vj,{children:E.name}),y.jsxs(Bj,{children:[y.jsxs(Hj,{children:[E.price," грн"]}),y.jsxs(Uj,{children:[y.jsx(vv,{onClick:D=>M(E,D),children:y.jsx(ja,{size:24,color:"black"})}),y.jsx(vv,{onClick:D=>w(E,D),children:y.jsx(zh,{size:24,fill:k?"#ff4d4f":"none",color:k?"#ff4d4f":"#000000"})})]})]})]},E.id)})}),d.length>c&&y.jsxs(Wj,{children:[y.jsx(yd,{onClick:()=>u(E=>Math.max(E-1,1)),disabled:s===1,children:"Назад"}),Array.from({length:S},(E,k)=>y.jsx(yd,{onClick:()=>u(k+1),active:s===k+1,children:k+1},k)),y.jsx(yd,{onClick:()=>u(E=>Math.min(E+1,S)),disabled:s===S,children:"Вперед"})]})]}))},Xj=()=>{const[e,t]=b.useState({});console.log(e);const{category:n}=N1(),[r,i]=b.useState(!1),[o,a]=b.useState([]),[l,s]=b.useState([0,0]);console.log(o),console.log(n);const u=Object.values(e).some(d=>Array.isArray(d)&&d.length>0),c=()=>{u&&t({})};return y.jsxs(qI,{children:[y.jsxs(YI,{children:[y.jsxs(XI,{children:[y.jsxs(KI,{onClick:()=>i(!0),children:["Фільтр",y.jsx(ZI,{children:y.jsx("use",{href:`${dn}#icon-filter`})})]}),y.jsxs(QI,{onClick:()=>i(!0),children:["Сортування",y.jsx(JI,{children:y.jsx("use",{href:`${dn}#icon-sort`})})]})]}),y.jsx(Cj,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:o,priceRange:l,setPriceRange:s}),y.jsx(qj,{priceRange:l,values:o,setValues:a,category:n,selectedFilters:e}),r&&y.jsx(ej,{onClick:()=>i(!1),open:r,children:y.jsxs(tj,{onClick:d=>d.stopPropagation(),open:r,children:[y.jsxs(nj,{children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[y.jsx(Sb,{size:20}),y.jsx("h2",{children:"Фільтри"})]}),y.jsx(Eb,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),y.jsx(Dj,{childValues:o,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:l,setPriceRange:s}),y.jsxs(rj,{children:[y.jsx(MS,{onClick:c,disabled:!u,children:"Скинути обрані фільтри"}),y.jsx(ij,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},yv=T.div`
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
`,Kj=T.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,Zj=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Qj=T.div``;T.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const Jj=T.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,eD=T.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
      flex-wrap: wrap;
`,tD=T.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,nD=T.div``,rD=T.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,iD=T.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,oD=T.span`
  color: #27ae60;
  font-size: 17px;
`,aD=T.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
   @media screen and (max-width: 300px) {
   width: 260px;
  }
`,sD=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,lD=T.span`
  font-size: 32px;
  font-weight: 700;
`;T.span`
  text-decoration: line-through;
  color: #999;
  font-size: 18px;
`;const uD=T.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,cD=T.div`
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
`,dD=T.button`
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
`;const fD=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* max-width: 800px; */
`,pD=T.div`
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
`,hD=T.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`,mD=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,gD=T.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,xv=T.button`
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
`,vD=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,yD=T.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,xD=T.button`
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
`,bD=T.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,jS=T.span`

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
`,wD=T.div`
  position: relative;
  display: inline-block;

  &:hover ${jS} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,DS="carousel",LS="controller",SD="navigation",_D="no-scroll",fm="portal",ED="root",RS="toolbar",bv="zoom",xd="loading",bd="error",wd="complete",CD="placeholder",kD=e=>`active-slide-${e}`,TD="fullsize",pm="flex_center",PD="no_scroll",AS="no_scroll_padding",hm="slide",FS="slide_wrapper",OD="slide_wrapper_interactive",Rr="prev",Ar="next",wv="swipe",Yi="close",NS="onPointerDown",zS="onPointerMove",BS="onPointerUp",VS="onPointerLeave",HS="onPointerCancel",mm="onKeyDown",MD="onKeyUp",gm="onWheel",$D="Escape",ID="ArrowLeft",jD="ArrowRight",DD="button",yp="icon",US="contain",Sv="cover",WS="Unknown action type",GS="yarl__";function kn(...e){return e.filter(Boolean).join(" ")}function ae(e){return`${GS}${e}`}function xt(e){return`--${GS}${e}`}function Va(e,t){return`${e}${t?`_${t}`:""}`}function vm(e){return t=>Va(e,t)}function qi(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function LD(e,t,n){return qi(e,"{index} of {total}").replace(/\{index}/g,`${Sm(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function ym(...e){return()=>{e.forEach(t=>{t()})}}function Qn(e,t,n){return()=>{const r=b.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function xm(){return typeof window<"u"}function bm(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function so(e){return e.type===void 0||e.type==="image"}function wm(e,t){return e.imageFit===Sv||e.imageFit!==US&&t===Sv}function ac(e){return typeof e=="string"?Number.parseInt(e,10):e}function Ul(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=ac(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function RD(e,t){const n=Ul(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function AD(){return(xm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function Sm(e,t){return t>0?(e%t+t)%t:0}function YS(e){return e.length>0}function qS(e,t){return e[Sm(t,e.length)]}function xp(e,t){return YS(e)?qS(e,t):void 0}function FD(e){return so(e)?e.src:void 0}function ND(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=b.isValidElement(n)?b.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function zD(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const BD=Number(b.version.split(".")[0])>=19;function VD(e){return{inert:BD?e:e?"":void 0}}function HD(e){e.scrollTop}const bp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[Yi]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:US,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Pr(e,t){return{name:e,component:t}}function He(e,t){return{module:e,children:t}}function XS(e,t,n){return e.module.name===t?n(e):e.children?[He(e.module,e.children.flatMap(r=>{var i;return(i=XS(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function ui(e,t,n){return e.flatMap(r=>{var i;return(i=XS(r,t,n))!==null&&i!==void 0?i:[]})}function UD(e,t=[],n=[]){let r=e;const i=p=>{const h=[...r];for(;h.length>0;){const v=h.pop();if((v==null?void 0:v.module.name)===p)return!0;v!=null&&v.children&&h.push(...v.children)}return!1},o=(p,h)=>{if(p===""){r=[He(h,r)];return}r=ui(r,p,v=>[He(h,[v])])},a=(p,h)=>{r=ui(r,p,v=>[He(v.module,[He(h,v.children)])])},l=(p,h,v)=>{r=ui(r,p,w=>{var f;return[He(w.module,[...v?[He(h)]:[],...(f=w.children)!==null&&f!==void 0?f:[],...v?[]:[He(h)]])]})},s=(p,h,v)=>{r=ui(r,p,w=>[...v?[He(h)]:[],w,...v?[]:[He(h)]])},u=p=>{a(LS,p)},c=(p,h)=>{r=ui(r,p,v=>[He(h,v.children)])},d=p=>{r=ui(r,p,h=>h.children)},g=p=>{n.push(p)};return t.forEach(p=>{p({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:u,replace:c,remove:d,augment:g})}),{config:r,augmentation:p=>n.reduce((h,v)=>v(h),p)}}const KS=b.createContext(null),ZS=Qn("useA11yContext","A11yContext",KS);function WD({children:e}){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const u=c=>d=>{var g;d.currentTarget.contains(d.relatedTarget)||n(c),(g=c?l:s)===null||g===void 0||g(d)};return{onFocus:u(!0),onBlur:u(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return b.createElement(KS.Provider,{value:o},e)}const QS=b.createContext(null),sc=Qn("useDocument","DocumentContext",QS);function GD({nodeRef:e,children:t}){const n=b.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return b.createElement(QS.Provider,{value:n},t)}const JS=b.createContext(null),lc=Qn("useEvents","EventsContext",JS);function YD({children:e}){const[t]=b.useState({});b.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=b.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(u=>u!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(u=>u(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return b.createElement(JS.Provider,{value:n},e)}const e2=b.createContext(null),Xt=Qn("useLightboxProps","LightboxPropsContext",e2);function qD({children:e,...t}){return b.createElement(e2.Provider,{value:t},e)}const t2=b.createContext(null),Or=Qn("useLightboxState","LightboxStateContext",t2),n2=b.createContext(null),XD=Qn("useLightboxDispatch","LightboxDispatchContext",n2);function KD(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=Sm(i,n.length),a=xp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:xp(t.slides,t.index)}:e;default:throw new Error(WS)}}function ZD({slides:e,index:t,children:n}){const[r,i]=b.useReducer(KD,{slides:e,currentIndex:t,globalIndex:t,currentSlide:xp(e,t)}),[o,a]=b.useState(e),[l,s]=b.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const u=b.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return b.createElement(n2.Provider,{value:i},b.createElement(t2.Provider,{value:u},n))}const r2=b.createContext(null),uc=Qn("useTimeouts","TimeoutsContext",r2);function QD({children:e}){const[t]=b.useState([]);b.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=b.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return b.createElement(r2.Provider,{value:n},e)}const _m=b.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:u,labels:c}=Xt(),d=qi(c,t);return b.createElement("button",{ref:s,type:"button",title:d,"aria-label":d,className:kn(ae(DD),n),onClick:o,style:{...a,...u.button},...l},i?i():b.createElement(r,{className:ae(yp),style:u.icon}))});function JD(e,t){const n=r=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function ii(e,t){return JD(e,b.createElement("g",{fill:"currentColor"},b.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const eL=ii("Close",b.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),tL=ii("Previous",b.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),nL=ii("Next",b.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),rL=ii("Loading",b.createElement(b.Fragment,null,Array.from({length:8}).map((e,t,n)=>b.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),iL=ii("Error",b.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Tn=xm()?b.useLayoutEffect:b.useEffect;function Em(){const[e,t]=b.useState(!1);return b.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function oL(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(ac);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function _v(e,t){const n=b.useRef(void 0),r=b.useRef(void 0),i=Em();return Tn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:u,easing:c,onfinish:d}=t(n.current,e.current.getBoundingClientRect(),oL(e.current))||{};if(s&&u){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:u,easing:c})}catch(g){console.error(g)}r.current&&(r.current.onfinish=()=>{r.current=void 0,d==null||d()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function i2(){const e=b.useRef(null),t=b.useRef(void 0),[n,r]=b.useState();return{setContainerRef:b.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=u=>parseFloat(u)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function Xs(){const e=b.useRef(void 0),{setTimeout:t,clearTimeout:n}=uc();return b.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function pe(e){const t=b.useRef(e);return Tn(()=>{t.current=e}),b.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Ev(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function wp(e,t){return b.useMemo(()=>e==null&&t==null?null:n=>{Ev(e,n),Ev(t,n)},[e,t])}function aL(e,t=!1){const n=b.useRef(!1);Tn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=b.useCallback(()=>{n.current=!0},[]),i=b.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function Cm(){const[e,t]=b.useState(!1);return Tn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function sL(){const[e]=b.useState({}),t=b.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=b.useMemo(()=>({onPointerDown:i=>t(NS,i),onPointerMove:i=>t(zS,i),onPointerUp:i=>t(BS,i),onPointerLeave:i=>t(VS,i),onPointerCancel:i=>t(HS,i),onKeyDown:i=>t(mm,i),onKeyUp:i=>t(MD,i),onWheel:i=>t(gm,i)}),[t]),r=b.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function Cv(e,t){const n=b.useRef(0),r=Xs(),i=pe((...o)=>{n.current=Date.now(),e(o)});return b.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const Sd=vm("slide"),_d=vm("slide_image");function Wl({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:u}){var c,d,g,p,h,v,w,f;const[m,x]=b.useState(xd),{publish:S}=lc(),{setTimeout:E}=uc(),k=b.useRef(null);b.useEffect(()=>{t===0&&S(kD(m))},[t,m,S]);const _=pe(z=>{("decode"in z?z.decode():Promise.resolve()).catch(()=>{}).then(()=>{z.parentNode&&(x(wd),E(()=>{l==null||l(z)},0))})}),C=b.useCallback(z=>{k.current=z,z!=null&&z.complete&&_(z)},[_]),O=b.useCallback(z=>{_(z.currentTarget)},[_]),M=pe(()=>{x(bd),s==null||s()}),I=wm(e,i),$=(z,H)=>Number.isFinite(z)?z:H,D=$(Math.max(...((d=(c=e.srcSet)===null||c===void 0?void 0:c.map(z=>z.width))!==null&&d!==void 0?d:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((g=k.current)===null||g===void 0?void 0:g.naturalWidth)||0),R=$(Math.max(...((h=(p=e.srcSet)===null||p===void 0?void 0:p.map(z=>z.height))!==null&&h!==void 0?h:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((v=k.current)===null||v===void 0?void 0:v.naturalHeight)||0),L=D&&R?{maxWidth:`min(${D}px, 100%)`,maxHeight:`min(${R}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},N=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((z,H)=>z.width-H.width).map(z=>`${z.src} ${z.width}w`).join(", "),F=()=>r&&!I&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,P=N&&r&&xm()?`${Math.round(Math.min(F(),r.width))}px`:void 0,{style:j,className:A,...B}=(typeof o=="function"?o(e):o)||{};return b.createElement(b.Fragment,null,b.createElement("img",{ref:C,onLoad:O,onError:M,onClick:a,draggable:!1,className:kn(ae(_d()),I&&ae(_d("cover")),m!==wd&&ae(_d("loading")),A),style:{...L,...u,...j},...B,alt:(f=e.alt)!==null&&f!==void 0?f:"",sizes:P,srcSet:N,src:e.src}),m!==wd&&b.createElement("div",{className:ae(Sd(CD))},m===xd&&(n!=null&&n.iconLoading?n.iconLoading():b.createElement(rL,{className:kn(ae(yp),ae(Sd(xd)))})),m===bd&&(n!=null&&n.iconError?n.iconError():b.createElement(iL,{className:kn(ae(yp),ae(Sd(bd)))}))))}const lL=b.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=b.useRef(null),{trackFocusWithin:s}=ZS();return b.createElement(GD,{nodeRef:l},b.createElement("div",{ref:wp(a,l),className:kn(ae("root"),t),...s(r,i),...o},n))});var rt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(rt||(rt={}));function o2(e,t,n,r,i){b.useEffect(()=>i?()=>{}:ym(e(NS,t),e(zS,n),e(BS,r),e(VS,r),e(HS,r)),[e,t,n,r,i])}var Jt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(Jt||(Jt={}));const Ed=30;function uL({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,u,c,d,g,p,h,v,w){const f=b.useRef(0),m=b.useRef([]),x=b.useRef(void 0),S=b.useRef(0),E=b.useRef(Jt.NONE),k=b.useCallback(D=>{x.current===D.pointerId&&(x.current=void 0,E.current=Jt.NONE);const R=m.current;R.splice(0,R.length,...R.filter(L=>L.pointerId!==D.pointerId))},[]),_=b.useCallback(D=>{k(D),D.persist(),m.current.push(D)},[k]),C=b.useCallback(D=>m.current.find(({pointerId:R})=>D.pointerId===R),[]),O=pe(D=>{_(D)}),M=(D,R)=>d&&D>R||c&&D<-R,I=pe(D=>{const R=C(D);if(R)if(x.current===D.pointerId){const L=Date.now()-S.current,N=f.current;E.current===Jt.SWIPE?Math.abs(N)>.3*i||Math.abs(N)>5&&L<o?s(N,L):u(N):E.current===Jt.PULL&&(M(N,2*Ed)?h(N,L):v(N)),f.current=0,E.current=Jt.NONE}else{const{target:L}=D;t&&L instanceof HTMLElement&&L===R.target&&(L.classList.contains(ae(hm))||L.classList.contains(ae(FS)))&&w()}k(D)}),$=pe(D=>{const R=C(D);if(R){const L=x.current===D.pointerId;if(D.buttons===0){L&&f.current!==0?I(D):k(R);return}const N=D.clientX-R.clientX,F=D.clientY-R.clientY;if(x.current===void 0){const P=j=>{_(D),x.current=D.pointerId,S.current=Date.now(),E.current=j};Math.abs(N)>Math.abs(F)&&Math.abs(N)>Ed&&r(N)?e||(P(Jt.SWIPE),a()):Math.abs(F)>Math.abs(N)&&M(F,Ed)&&(P(Jt.PULL),g())}else L&&(E.current===Jt.SWIPE?(f.current=N,l(N)):E.current===Jt.PULL&&(f.current=F,p(F)))}});o2(n,O,$,I)}function cL({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=b.useRef(null),r=pe(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return b.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function dL(e,t,n,r,i,o,a,l,s){const u=b.useRef(0),c=b.useRef(0),d=b.useRef(void 0),g=b.useRef(void 0),p=b.useRef(0),h=b.useRef(void 0),v=b.useRef(0),{setTimeout:w,clearTimeout:f}=uc(),m=b.useCallback(()=>{d.current&&(f(d.current),d.current=void 0)},[f]),x=b.useCallback(()=>{g.current&&(f(g.current),g.current=void 0)},[f]),S=pe(()=>{e!==rt.SWIPE&&(u.current=0,v.current=0,m(),x())});b.useEffect(S,[e,S]);const E=pe(_=>{g.current=void 0,u.current===_&&s(u.current)}),k=pe(_=>{if(_.ctrlKey||Math.abs(_.deltaY)>Math.abs(_.deltaX))return;const C=O=>{p.current=O,f(h.current),h.current=O>0?w(()=>{p.current=0,h.current=void 0},300):void 0};if(e===rt.NONE){if(Math.abs(_.deltaX)<=1.2*Math.abs(p.current)){C(_.deltaX);return}if(!n(-_.deltaX))return;if(c.current+=_.deltaX,m(),Math.abs(c.current)>30)c.current=0,C(0),v.current=Date.now(),o();else{const O=c.current;d.current=w(()=>{d.current=void 0,O===c.current&&(c.current=0)},i)}}else if(e===rt.SWIPE){let O=u.current-_.deltaX;if(O=Math.min(Math.abs(O),r)*Math.sign(O),u.current=O,a(O),x(),Math.abs(O)>.2*r){C(_.deltaX),l(O,Date.now()-v.current);return}g.current=w(()=>E(O),2*i)}else C(_.deltaX)});b.useEffect(()=>t(gm,k),[t,k])}const kv=vm("container"),a2=b.createContext(null),Jn=Qn("useController","ControllerContext",a2);function fL({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:u,closeOnPullDown:c,preventDefaultWheelX:d,preventDefaultWheelY:g}=o,[p,h]=b.useState(),v=Or(),w=XD(),[f,m]=b.useState(rt.NONE),x=b.useRef(0),S=b.useRef(0),E=b.useRef(1),{registerSensors:k,subscribeSensors:_}=sL(),{subscribe:C,publish:O}=lc(),M=Xs(),I=Xs(),$=Xs(),{containerRef:D,setContainerRef:R,containerRect:L}=i2(),N=wp(cL({preventDefaultWheelX:d,preventDefaultWheelY:g}),R),F=b.useRef(null),P=wp(F,void 0),{getOwnerDocument:j}=sc(),A=Cm(),B=Y=>(A?-1:1)*(typeof Y=="number"?Y:1),z=pe(()=>{var Y;return(Y=D.current)===null||Y===void 0?void 0:Y.focus()}),H=pe(()=>t),G=pe(()=>v),W=b.useCallback(Y=>O(Rr,Y),[O]),X=b.useCallback(Y=>O(Ar,Y),[O]),ee=b.useCallback(()=>O(Yi),[O]),fe=Y=>!(r.finite&&(B(Y)>0&&v.currentIndex===0||B(Y)<0&&v.currentIndex===v.slides.length-1)),be=Y=>{var we;x.current=Y,(we=D.current)===null||we===void 0||we.style.setProperty(xt("swipe_offset"),`${Math.round(Y)}px`)},ie=Y=>{var we,st;S.current=Y,E.current=(()=>{const co=(()=>c&&Y>0?Y:u&&Y<0?-Y:0)();return Math.min(Math.max(bm(1-co/60*(1-.5),2),.5),1)})(),(we=D.current)===null||we===void 0||we.style.setProperty(xt("pull_offset"),`${Math.round(Y)}px`),(st=D.current)===null||st===void 0||st.style.setProperty(xt("pull_opacity"),`${E.current}`)},{prepareAnimation:$e}=_v(F,(Y,we,st)=>{if(F.current&&L)return{keyframes:[{transform:`translate(0, ${Y.rect.y-we.y+st.y}px)`,opacity:Y.opacity},{transform:"translate(0, 0)",opacity:1}],duration:Y.duration,easing:i.easing.fade}}),Be=(Y,we)=>{if(u||c){ie(Y);let st=0;F.current&&(st=i.fade*(we?2:1),$e({rect:F.current.getBoundingClientRect(),opacity:E.current,duration:st})),$(()=>{ie(0),m(rt.NONE)},st),m(rt.ANIMATION),we||ee()}},{prepareAnimation:Ve,isAnimationPlaying:oi}=_v(F,(Y,we,st)=>{var pn;if(F.current&&L&&(!((pn=v.animation)===null||pn===void 0)&&pn.duration)){const Bt=Ul(r.spacing),co=(Bt.percent?Bt.percent*L.width/100:Bt.pixel)||0;return{keyframes:[{transform:`translate(${B(v.globalIndex-Y.index)*(L.width+co)+Y.rect.x-we.x+st.x}px, 0)`},{transform:"translate(0, 0)"}],duration:v.animation.duration,easing:v.animation.easing}}}),vt=pe(Y=>{var we,st;const pn=Y.offset||0,Bt=pn?i.swipe:(we=i.navigation)!==null&&we!==void 0?we:i.swipe,co=!pn&&!oi()?i.easing.navigation:i.easing.swipe;let{direction:Ua}=Y;const Wa=(st=Y.count)!==null&&st!==void 0?st:1;let hc=rt.ANIMATION,hn=Bt*Wa;if(!Ua){const fo=L==null?void 0:L.width,Nm=Y.duration||0,gc=fo?Bt/fo*Math.abs(pn):Bt;Wa!==0?(Nm<gc?hn=hn/gc*Math.max(Nm,gc/5):fo&&(hn=Bt/fo*(fo-Math.abs(pn))),Ua=B(pn)>0?Rr:Ar):hn=Bt/2}let mc=0;Ua===Rr?fe(B(1))?mc=-Wa:(hc=rt.NONE,hn=Bt):Ua===Ar&&(fe(B(-1))?mc=Wa:(hc=rt.NONE,hn=Bt)),hn=Math.round(hn),I(()=>{be(0),m(rt.NONE)},hn),F.current&&Ve({rect:F.current.getBoundingClientRect(),index:v.globalIndex}),m(hc),O(wv,{type:"swipe",increment:mc,duration:hn,easing:co})});b.useEffect(()=>{var Y,we;!((Y=v.animation)===null||Y===void 0)&&Y.increment&&(!((we=v.animation)===null||we===void 0)&&we.duration)&&M(()=>w({type:"swipe",increment:0}),v.animation.duration)},[v.animation,w,M]);const lo=[_,fe,(L==null?void 0:L.width)||0,i.swipe,()=>m(rt.SWIPE),Y=>be(Y),(Y,we)=>vt({offset:Y,duration:we,count:1}),Y=>vt({offset:Y,count:0})],Ha=[()=>{c&&m(rt.PULL)},Y=>ie(Y),Y=>Be(Y),Y=>Be(Y,!0)];uL(o,...lo,u,c,...Ha,ee),dL(f,...lo);const uo=pe(()=>{o.focus&&j().querySelector(`.${ae(fm)} .${ae(kv())}`)&&z()});b.useEffect(uo,[uo]);const Fm=pe(()=>{var Y;(Y=a.view)===null||Y===void 0||Y.call(a,{index:v.currentIndex})});b.useEffect(Fm,[v.globalIndex,Fm]),b.useEffect(()=>ym(C(Rr,Y=>vt({direction:Rr,...Y})),C(Ar,Y=>vt({direction:Ar,...Y})),C(wv,Y=>w(Y))),[C,vt,w]);const J2=b.useMemo(()=>({prev:W,next:X,close:ee,focus:z,slideRect:L?RD(L,r.padding):{width:0,height:0},containerRect:L||{width:0,height:0},subscribeSensors:_,containerRef:D,setCarouselRef:P,toolbarWidth:p,setToolbarWidth:h}),[W,X,ee,z,_,L,D,P,p,h,r.padding]);return b.useImperativeHandle(o.ref,()=>({prev:W,next:X,close:ee,focus:z,getLightboxProps:H,getLightboxState:G}),[W,X,ee,z,H,G]),b.createElement("div",{ref:N,className:kn(ae(kv()),ae(pm)),style:{...f===rt.SWIPE?{[xt("swipe_offset")]:`${Math.round(x.current)}px`}:null,...f===rt.PULL?{[xt("pull_offset")]:`${Math.round(S.current)}px`,[xt("pull_opacity")]:`${E.current}`}:null,...o.touchAction!=="none"?{[xt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...k},L&&b.createElement(a2.Provider,{value:J2},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const pL=Pr(LS,fL);function Mr(e){return Va(DS,e)}function Tv(e){return Va(hm,e)}function hL({slide:e,offset:t}){const n=b.useRef(null),{currentIndex:r,slides:i}=Or(),{slideRect:o,focus:a}=Jn(),{render:l,carousel:{imageFit:s,imageProps:u},on:{click:c},styles:{slide:d},labels:g}=Xt(),{getOwnerDocument:p}=sc(),h=t!==0;b.useEffect(()=>{var w;h&&(!((w=n.current)===null||w===void 0)&&w.contains(p().activeElement))&&a()},[h,a,p]);const v=()=>{var w,f,m,x;let S=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!S&&so(e)&&(S=b.createElement(Wl,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:u,onClick:h?void 0:()=>c==null?void 0:c({index:r})})),S?b.createElement(b.Fragment,null,(f=l.slideHeader)===null||f===void 0?void 0:f.call(l,{slide:e}),((m=l.slideContainer)!==null&&m!==void 0?m:({children:E})=>E)({slide:e,children:S}),(x=l.slideFooter)===null||x===void 0?void 0:x.call(l,{slide:e})):null};return b.createElement("div",{ref:n,className:kn(ae(Tv()),!h&&ae(Tv("current")),ae(pm)),...VD(h),style:d,role:"group","aria-roledescription":qi(g,"Slide"),"aria-label":LD(g,i,r+t)},v())}function mL(){const e=Xt().styles.slide;return b.createElement("div",{className:ae(hm),style:e})}function gL({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Or(),{setCarouselRef:o}=Jn(),{autoPlaying:a,focusWithin:l}=ZS(),s=Ul(e.spacing),u=Ul(e.padding),c=zD(e,n,1),d=[];if(YS(n))for(let g=r-c;g<=r+c;g+=1){const p=qS(n,g),h=i-r+g,v=e.finite&&(g<0||g>n.length-1);d.push(v?{key:h}:{key:[`${h}`,FD(p)].filter(Boolean).join("|"),offset:g-r,slide:p})}return b.createElement("div",{ref:o,className:kn(ae(Mr()),d.length>0&&ae(Mr("with_slides"))),style:{[`${xt(Mr("slides_count"))}`]:d.length,[`${xt(Mr("spacing_px"))}`]:s.pixel||0,[`${xt(Mr("spacing_percent"))}`]:s.percent||0,[`${xt(Mr("padding_px"))}`]:u.pixel||0,[`${xt(Mr("padding_percent"))}`]:u.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":qi(t,"Carousel"),"aria-label":qi(t,"Photo gallery")},d.map(({key:g,slide:p,offset:h})=>p?b.createElement(hL,{key:g,slide:p,offset:h}):b.createElement(mL,{key:g})))}const vL=Pr(DS,gL);function s2(){const{carousel:e}=Xt(),{slides:t,currentIndex:n}=Or(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function yL(e){var t;const n=Cm(),{publish:r}=lc(),{animation:i}=Xt(),{prevDisabled:o,nextDisabled:a}=s2(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=Cv(()=>r(Rr),l),u=Cv(()=>r(Ar),l),c=pe(d=>{switch(d.key){case $D:r(Yi);break;case ID:(n?a:o)||(n?u:s)();break;case jD:(n?o:a)||(n?s:u)();break}});b.useEffect(()=>e(mm,c),[e,c])}function Pv({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return b.createElement(_m,{label:e,icon:t,renderIcon:n,className:ae(`navigation_${r}`),disabled:o,onClick:i,style:a,...aL(Jn().focus,o)})}function xL({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=Jn(),{prevDisabled:s,nextDisabled:u}=s2();return yL(l),b.createElement(b.Fragment,null,e?e():b.createElement(Pv,{label:"Previous",action:Rr,icon:tL,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():b.createElement(Pv,{label:"Next",action:Ar,icon:nL,renderIcon:r,style:i.navigationNext,disabled:u,onClick:a}))}const bL=Pr(SD,xL),Ov=ae(PD),wL=ae(AS);function SL(e){return"style"in e}function Mv(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(ac(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function _L({noScroll:{disabled:e},children:t}){const n=Cm(),{getOwnerDocument:r,getOwnerWindow:i}=sc();return b.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),u=Math.round(a.innerWidth-s.clientWidth);if(u>0){o.push(Mv(l,u,n));const c=l.getElementsByTagName("*");for(let d=0;d<c.length;d+=1){const g=c[d];SL(g)&&a.getComputedStyle(g).getPropertyValue("position")==="fixed"&&!g.classList.contains(wL)&&o.push(Mv(g,u,n))}}return l.classList.add(Ov),()=>{l.classList.remove(Ov),o.forEach(c=>c())}},[n,e,r,i]),b.createElement(b.Fragment,null,t)}const EL=Pr(_D,_L);function $v(e){return Va(fm,e)}function Iv(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function CL({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,u]=b.useState(!1),[c,d]=b.useState(!1),g=b.useRef([]),p=b.useRef(null),{setTimeout:h}=uc(),{subscribe:v}=lc(),f=Em()?0:t.fade;b.useEffect(()=>(u(!0),()=>{u(!1),d(!1)}),[]);const m=pe(()=>{g.current.forEach(k=>k()),g.current=[]}),x=pe(()=>{var k;d(!1),m(),(k=i.exiting)===null||k===void 0||k.call(i),h(()=>{var _;(_=i.exited)===null||_===void 0||_.call(i),a()},f)});b.useEffect(()=>v(Yi,x),[v,x]);const S=pe(k=>{var _,C,O;HD(k),d(!0),(_=i.entering)===null||_===void 0||_.call(i);const M=(O=(C=k.parentNode)===null||C===void 0?void 0:C.children)!==null&&O!==void 0?O:[];for(let I=0;I<M.length;I+=1){const $=M[I];["TEMPLATE","SCRIPT","STYLE"].indexOf($.tagName)===-1&&$!==k&&(g.current.push(Iv($,"inert","")),g.current.push(Iv($,"aria-hidden","true")))}g.current.push(()=>{var I,$;($=(I=p.current)===null||I===void 0?void 0:I.focus)===null||$===void 0||$.call(I)}),h(()=>{var I;(I=i.entered)===null||I===void 0||I.call(i)},f)}),E=b.useCallback(k=>{k?S(k):m()},[S,m]);return s?gu.createPortal(b.createElement(lL,{ref:E,className:kn(r,ae($v()),ae(AS),c&&ae($v("open"))),"aria-modal":!0,role:"dialog","aria-label":qi(l,"Lightbox"),style:{...t.fade!==bp.animation.fade?{[xt("fade_animation_duration")]:`${f}ms`}:null,...t.easing.fade!==bp.animation.easing.fade?{[xt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:k=>{p.current||(p.current=k.relatedTarget)}},e),o.root||document.body):null}const kL=Pr(fm,CL);function TL({children:e}){return b.createElement(b.Fragment,null,e)}const PL=Pr(ED,TL);function OL(e){return Va(RS,e)}function ML({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=Jn(),{setContainerRef:a,containerRect:l}=i2();Tn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():b.createElement(_m,{key:Yi,label:"Close",icon:eL,renderIcon:n,onClick:i});return b.createElement("div",{ref:a,style:r.toolbar,className:ae(OL())},e==null?void 0:e.map(u=>u===Yi?s():u))}const $L=Pr(RS,ML);function l2(e,t){var n;return b.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>l2(r,t)))}function IL(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function jL({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:u,...c}){const{animation:d,carousel:g,render:p,toolbar:h,controller:v,noScroll:w,on:f,slides:m,index:x,plugins:S,...E}=bp,{config:k,augmentation:_}=UD([He(kL,[He(EL,[He(pL,[He(vL),He($L),He(bL)])])])],l||S),C=_({animation:IL(d,t),carousel:{...g,...e},render:{...p,...n},toolbar:{...h,...r},controller:{...v,...i},noScroll:{...w,...o},on:{...f,...a},...E,...c});return C.open?b.createElement(qD,{...C},b.createElement(ZD,{slides:s||m,index:ac(u||x)},b.createElement(QD,null,b.createElement(YD,null,b.createElement(WD,null,l2(He(PL,k),C)))))):null}const DL={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function LL(e){return Math.min(Math.max(e,Number.EPSILON),1)}function u2(e){const{minZoom:t,...n}={...DL,...e};return{minZoom:LL(t),...n}}function RL(e,t,n,r){const i=b.useRef(void 0),o=b.useRef(void 0),{zoom:a}=Xt().animation,l=Em(),s=pe(()=>{var u,c,d;if((u=i.current)===null||u===void 0||u.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(d=(c=r.current).animate)===null||d===void 0?void 0:d.call(c,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(g){console.error(g)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Tn(s,[e,t,n,s]),b.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function AL(e,t){const{on:n}=Xt(),r=pe(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});b.useEffect(r,[e,r])}function cc(){const{zoom:e}=Xt();return u2(e)}function FL(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Or(),{imageFit:l}=Xt().carousel,{maxZoomPixelRatio:s}=cc();if(e&&a){const c={...a,...t};if(so(c)){const d=wm(c,l),g=Math.max(...(((n=c.srcSet)===null||n===void 0?void 0:n.map(h=>h.width))||[]).concat(c.width?[c.width]:[])),p=Math.max(...(((r=c.srcSet)===null||r===void 0?void 0:r.map(h=>h.height))||[]).concat(c.height?[c.height]:[]));g>0&&p>0&&e.width>0&&e.height>0&&(o=d?{width:Math.round(Math.min(g,e.width/e.height*p)),height:Math.round(Math.min(p,e.height/e.width*g))}:{width:g,height:p},o={width:o.width*s,height:o.height*s},i=d?{width:Math.min(e.width,o.width,g),height:Math.min(e.height,o.height,p)}:{width:Math.round(Math.min(e.width,e.height/p*g,g)),height:Math.round(Math.min(e.height,e.width/g*p,p))})}}const u=i.width?Math.max(bm(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:u}}function jv(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Dv(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function NL(e,t,n,r,i,o,a,l,s){const u=b.useRef([]),c=b.useRef(0),d=b.useRef(void 0),{globalIndex:g}=Or(),{getOwnerWindow:p}=sc(),{containerRef:h,subscribeSensors:v}=Jn(),{keyboardMoveDistance:w,zoomInMultiplier:f,wheelZoomDistanceFactor:m,scrollToZoom:x,doubleTapDelay:S,doubleClickDelay:E,doubleClickMaxStops:k,pinchZoomDistanceFactor:_,pinchZoomV4:C}=cc(),O=b.useCallback(P=>{if(h.current){const{pageX:j,pageY:A}=P,{scrollX:B,scrollY:z}=p(),{left:H,top:G,width:W,height:X}=h.current.getBoundingClientRect();return[j-H-B-W/2,A-G-z-X/2]}return[]},[h,p]),M=pe(P=>{const{key:j,metaKey:A,ctrlKey:B}=P,z=A||B,H=()=>{P.preventDefault(),P.stopPropagation()};if(e>1){const G=(W,X)=>{H(),l(W,X)};j==="ArrowDown"?G(0,w):j==="ArrowUp"?G(0,-w):j==="ArrowLeft"?G(-w,0):j==="ArrowRight"&&G(w,0)}j==="+"||z&&j==="="?(H(),i()):j==="-"||z&&j==="_"?(H(),o()):z&&j==="0"&&(H(),a(1))}),I=pe(P=>{if((P.ctrlKey||x)&&Math.abs(P.deltaY)>Math.abs(P.deltaX)){P.stopPropagation(),a(Dv(e,-P.deltaY,m),!0,...O(P));return}e>1&&(P.stopPropagation(),x||l(P.deltaX,P.deltaY))}),$=b.useCallback(P=>{const j=u.current;j.splice(0,j.length,...j.filter(A=>A.pointerId!==P.pointerId))},[]),D=b.useCallback(P=>{$(P),P.persist(),u.current.push(P)},[$]),R=pe(P=>{var j;const A=u.current;if(P.pointerType==="mouse"&&P.buttons>1||!(!((j=s==null?void 0:s.current)===null||j===void 0)&&j.contains(P.target)))return;e>1&&P.stopPropagation();const{timeStamp:B}=P;if(A.length===0&&B-c.current<(P.pointerType==="touch"?S:E)){c.current=0;const z=e>=1?e!==n?e*Math.max(n**(1/k),f):1:e!==t?e/Math.max(t**(-1/k),f):1;a(z,!1,...O(P))}else c.current=B;if(D(P),A.length===2){const z=jv(A[0],A[1]);d.current={previousDistance:z,initialDistance:Math.max(z,1),initialZoom:e}}}),L=pe(P=>{const j=u.current,A=j.find(B=>B.pointerId===P.pointerId);if(j.length===2&&d.current){P.stopPropagation(),D(P);const B=jv(j[0],j[1]),z=C?d.current.initialZoom/d.current.initialDistance*B:Dv(e,B-d.current.previousDistance,_);a(z,!0,...j.map(H=>O(H)).reduce((H,G)=>G.map((W,X)=>H[X]+W/2))),d.current.previousDistance=B;return}e>1&&(P.stopPropagation(),A&&(j.length===1&&l((A.clientX-P.clientX)/e,(A.clientY-P.clientY)/e),D(P)))}),N=b.useCallback(P=>{const j=u.current;j.length===2&&j.find(A=>A.pointerId===P.pointerId)&&(d.current=void 0),$(P)},[$]),F=b.useCallback(()=>{const P=u.current;P.splice(0,P.length),c.current=0,d.current=void 0},[]);o2(v,R,L,N,r),b.useEffect(F,[g,F]),b.useEffect(()=>r?()=>{}:ym(F,v(mm,M),v(gm,I)),[r,v,F,M,I])}function zL(e,t,n){const[r,i]=b.useState(1),[o,a]=b.useState(0),[l,s]=b.useState(0),u=RL(r,o,l,n),{currentSlide:c,globalIndex:d}=Or(),{containerRect:g,slideRect:p}=Jn(),{minZoom:h,zoomInMultiplier:v}=cc(),w=c&&so(c)?c.src:void 0,f=!w||!(n!=null&&n.current);Tn(()=>{i(1),a(0),s(0)},[d,w]);const m=b.useCallback((_,C,O)=>{const M=O||r,I=o-(_||0),$=l-(C||0),D=(e.width*M-p.width)/2/M,R=(e.height*M-p.height)/2/M;a(Math.min(Math.abs(I),Math.max(D,0))*Math.sign(I)),s(Math.min(Math.abs($),Math.max(R,0))*Math.sign($))},[r,o,l,p,e.width,e.height]),x=b.useCallback((_,C,O,M)=>{const I=bm(_+.01<t?_-.01>h?_:h:t,5);C||u(),m(O?O*(1/r-1/I):0,M?M*(1/r-1/I):0,I),i(I)},[r,h,t,m,u]),S=pe(()=>{r>1&&(r>t&&x(t,!0),m())});Tn(S,[g.width,g.height,S]);const E=b.useCallback(()=>{const _=r*v;x(r<1&&_>1?1:_)},[r,v,x]),k=b.useCallback(()=>{const _=r/v;x(r>1&&_<1?1:_)},[r,v,x]);return{zoom:r,offsetX:o,offsetY:l,disabled:f,changeOffsets:m,changeZoom:x,zoomIn:E,zoomOut:k}}const c2=b.createContext(null),km=Qn("useZoom","ZoomControllerContext",c2);function BL({children:e}){const[t,n]=b.useState(),{slideRect:r}=Jn(),{ref:i,minZoom:o}=cc(),{imageRect:a,maxZoom:l}=FL(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:u,offsetY:c,disabled:d,changeZoom:g,changeOffsets:p,zoomIn:h,zoomOut:v}=zL(a,l,t==null?void 0:t.zoomWrapperRef);AL(s,d),NL(s,o,l,d,h,v,g,p,t==null?void 0:t.zoomWrapperRef);const w=b.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:u,offsetY:c,disabled:d,zoomIn:h,zoomOut:v,changeZoom:g}),[s,o,l,u,c,d,h,v,g]);b.useImperativeHandle(i,()=>w,[w]);const f=b.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return b.createElement(c2.Provider,{value:f},e)}const VL=ii("ZoomIn",b.createElement(b.Fragment,null,b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),HL=ii("ZoomOut",b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),Lv=b.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=b.useRef(!1),o=b.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:u,zoomOut:c,disabled:d}=km(),{render:g}=Xt(),p=d||(t?a>=s:a<=l);return b.useEffect(()=>{p&&i.current&&o.current&&n(),p||(i.current=!0)},[p,n]),b.createElement(_m,{ref:r,disabled:p,label:t?"Zoom in":"Zoom out",icon:t?VL:HL,renderIcon:t?g.iconZoomIn:g.iconZoomOut,onClick:t?u:c,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function UL(){const e=b.useRef(null),t=b.useRef(null),{focus:n}=Jn(),r=b.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=b.useCallback(()=>r(e),[r]),o=b.useCallback(()=>r(t),[r]);return b.createElement(b.Fragment,null,b.createElement(Lv,{zoomIn:!0,ref:e,onLoseFocus:o}),b.createElement(Lv,{ref:t,onLoseFocus:i}))}function WL(){const{render:e}=Xt(),t=km();return e.buttonZoom?b.createElement(b.Fragment,null,e.buttonZoom(t)):b.createElement(UL,null)}function GL(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function YL({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(WS)}}function qL(e){var t,n;const[{current:r,preload:i},o]=b.useReducer(YL,{}),{slide:a,rect:l,imageFit:s,render:u,interactive:c}=e,d=a.srcSet.sort((E,k)=>E.width-k.width),g=(t=a.width)!==null&&t!==void 0?t:d[d.length-1].width,p=(n=a.height)!==null&&n!==void 0?n:d[d.length-1].height,h=wm(a,s),v=Math.max(...d.map(E=>E.width)),w=Math.min((h?Math.max:Math.min)(l.width,g*(l.height/p)),v),f=AD(),m=pe(()=>{var E;const k=(E=d.find(_=>_.width>=w*f))!==null&&E!==void 0?E:d[d.length-1];(!r||d.findIndex(_=>_.src===r)<d.findIndex(_=>_===k))&&o({type:"fetch",source:k.src})});Tn(m,[l.width,l.height,f,m]);const x=pe(E=>o({type:"done",source:E})),S={WebkitTransform:c?"initial":"translateZ(0)"};return h||Object.assign(S,l.width/l.height<g/p?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),b.createElement(b.Fragment,null,i&&i!==r&&b.createElement(Wl,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...S},onLoad:()=>x(i),render:{...u,iconLoading:()=>null,iconError:()=>null}}),r&&b.createElement(Wl,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:S}))}function XL({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=b.useState(),l=b.useRef(null),{zoom:s,maxZoom:u,offsetX:c,offsetY:d,setZoomWrapper:g}=km(),p=s>1,{carousel:h,on:v}=Xt(),{currentIndex:w}=Or();Tn(()=>n===0?(g({zoomWrapperRef:l,imageDimensions:o}),()=>g(void 0)):()=>{},[n,o,g]);let f=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:u});if(!f&&so(t)){const m={slide:t,offset:n,rect:r,render:e,imageFit:h.imageFit,imageProps:h.imageProps,onClick:n===0?()=>{var x;return(x=v.click)===null||x===void 0?void 0:x.call(v,{index:w})}:void 0};f=GL(t)?b.createElement(qL,{...m,slide:t,interactive:p,rect:n===0?{width:r.width*s,height:r.height*s}:r}):b.createElement(Wl,{onLoad:x=>a({width:x.naturalWidth,height:x.naturalHeight}),...m})}return f?b.createElement("div",{ref:l,className:kn(ae(TD),ae(pm),ae(FS),p&&ae(OD)),style:n===0?{transform:`scale(${s}) translateX(${c}px) translateY(${d}px)`}:void 0},f):null}const KL=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=u2(n);return{zoom:l,toolbar:ND(r,bv,b.createElement(WL,null)),render:{...i,slide:s=>{var u;return so(s.slide)?b.createElement(XL,{render:i,...s}):(u=i.slide)===null||u===void 0?void 0:u.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Pr(bv,BL))};var d2={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",u="day",c="week",d="month",g="quarter",p="year",h="date",v="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(R){var L=["th","st","nd","rd"],N=R%100;return"["+R+(L[(N-20)%10]||L[N]||L[0])+"]"}},x=function(R,L,N){var F=String(R);return!F||F.length>=L?R:""+Array(L+1-F.length).join(N)+R},S={s:x,z:function(R){var L=-R.utcOffset(),N=Math.abs(L),F=Math.floor(N/60),P=N%60;return(L<=0?"+":"-")+x(F,2,"0")+":"+x(P,2,"0")},m:function R(L,N){if(L.date()<N.date())return-R(N,L);var F=12*(N.year()-L.year())+(N.month()-L.month()),P=L.clone().add(F,d),j=N-P<0,A=L.clone().add(F+(j?-1:1),d);return+(-(F+(N-P)/(j?P-A:A-P))||0)},a:function(R){return R<0?Math.ceil(R)||0:Math.floor(R)},p:function(R){return{M:d,y:p,w:c,d:u,D:h,h:s,m:l,s:a,ms:o,Q:g}[R]||String(R||"").toLowerCase().replace(/s$/,"")},u:function(R){return R===void 0}},E="en",k={};k[E]=m;var _="$isDayjsObject",C=function(R){return R instanceof $||!(!R||!R[_])},O=function R(L,N,F){var P;if(!L)return E;if(typeof L=="string"){var j=L.toLowerCase();k[j]&&(P=j),N&&(k[j]=N,P=j);var A=L.split("-");if(!P&&A.length>1)return R(A[0])}else{var B=L.name;k[B]=L,P=B}return!F&&P&&(E=P),P||!F&&E},M=function(R,L){if(C(R))return R.clone();var N=typeof L=="object"?L:{};return N.date=R,N.args=arguments,new $(N)},I=S;I.l=O,I.i=C,I.w=function(R,L){return M(R,{locale:L.$L,utc:L.$u,x:L.$x,$offset:L.$offset})};var $=function(){function R(N){this.$L=O(N.locale,null,!0),this.parse(N),this.$x=this.$x||N.x||{},this[_]=!0}var L=R.prototype;return L.parse=function(N){this.$d=function(F){var P=F.date,j=F.utc;if(P===null)return new Date(NaN);if(I.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var A=P.match(w);if(A){var B=A[2]-1||0,z=(A[7]||"0").substring(0,3);return j?new Date(Date.UTC(A[1],B,A[3]||1,A[4]||0,A[5]||0,A[6]||0,z)):new Date(A[1],B,A[3]||1,A[4]||0,A[5]||0,A[6]||0,z)}}return new Date(P)}(N),this.init()},L.init=function(){var N=this.$d;this.$y=N.getFullYear(),this.$M=N.getMonth(),this.$D=N.getDate(),this.$W=N.getDay(),this.$H=N.getHours(),this.$m=N.getMinutes(),this.$s=N.getSeconds(),this.$ms=N.getMilliseconds()},L.$utils=function(){return I},L.isValid=function(){return this.$d.toString()!==v},L.isSame=function(N,F){var P=M(N);return this.startOf(F)<=P&&P<=this.endOf(F)},L.isAfter=function(N,F){return M(N)<this.startOf(F)},L.isBefore=function(N,F){return this.endOf(F)<M(N)},L.$g=function(N,F,P){return I.u(N)?this[F]:this.set(P,N)},L.unix=function(){return Math.floor(this.valueOf()/1e3)},L.valueOf=function(){return this.$d.getTime()},L.startOf=function(N,F){var P=this,j=!!I.u(F)||F,A=I.p(N),B=function(be,ie){var $e=I.w(P.$u?Date.UTC(P.$y,ie,be):new Date(P.$y,ie,be),P);return j?$e:$e.endOf(u)},z=function(be,ie){return I.w(P.toDate()[be].apply(P.toDate("s"),(j?[0,0,0,0]:[23,59,59,999]).slice(ie)),P)},H=this.$W,G=this.$M,W=this.$D,X="set"+(this.$u?"UTC":"");switch(A){case p:return j?B(1,0):B(31,11);case d:return j?B(1,G):B(0,G+1);case c:var ee=this.$locale().weekStart||0,fe=(H<ee?H+7:H)-ee;return B(j?W-fe:W+(6-fe),G);case u:case h:return z(X+"Hours",0);case s:return z(X+"Minutes",1);case l:return z(X+"Seconds",2);case a:return z(X+"Milliseconds",3);default:return this.clone()}},L.endOf=function(N){return this.startOf(N,!1)},L.$set=function(N,F){var P,j=I.p(N),A="set"+(this.$u?"UTC":""),B=(P={},P[u]=A+"Date",P[h]=A+"Date",P[d]=A+"Month",P[p]=A+"FullYear",P[s]=A+"Hours",P[l]=A+"Minutes",P[a]=A+"Seconds",P[o]=A+"Milliseconds",P)[j],z=j===u?this.$D+(F-this.$W):F;if(j===d||j===p){var H=this.clone().set(h,1);H.$d[B](z),H.init(),this.$d=H.set(h,Math.min(this.$D,H.daysInMonth())).$d}else B&&this.$d[B](z);return this.init(),this},L.set=function(N,F){return this.clone().$set(N,F)},L.get=function(N){return this[I.p(N)]()},L.add=function(N,F){var P,j=this;N=Number(N);var A=I.p(F),B=function(G){var W=M(j);return I.w(W.date(W.date()+Math.round(G*N)),j)};if(A===d)return this.set(d,this.$M+N);if(A===p)return this.set(p,this.$y+N);if(A===u)return B(1);if(A===c)return B(7);var z=(P={},P[l]=r,P[s]=i,P[a]=n,P)[A]||1,H=this.$d.getTime()+N*z;return I.w(H,this)},L.subtract=function(N,F){return this.add(-1*N,F)},L.format=function(N){var F=this,P=this.$locale();if(!this.isValid())return P.invalidDate||v;var j=N||"YYYY-MM-DDTHH:mm:ssZ",A=I.z(this),B=this.$H,z=this.$m,H=this.$M,G=P.weekdays,W=P.months,X=P.meridiem,ee=function(ie,$e,Be,Ve){return ie&&(ie[$e]||ie(F,j))||Be[$e].slice(0,Ve)},fe=function(ie){return I.s(B%12||12,ie,"0")},be=X||function(ie,$e,Be){var Ve=ie<12?"AM":"PM";return Be?Ve.toLowerCase():Ve};return j.replace(f,function(ie,$e){return $e||function(Be){switch(Be){case"YY":return String(F.$y).slice(-2);case"YYYY":return I.s(F.$y,4,"0");case"M":return H+1;case"MM":return I.s(H+1,2,"0");case"MMM":return ee(P.monthsShort,H,W,3);case"MMMM":return ee(W,H);case"D":return F.$D;case"DD":return I.s(F.$D,2,"0");case"d":return String(F.$W);case"dd":return ee(P.weekdaysMin,F.$W,G,2);case"ddd":return ee(P.weekdaysShort,F.$W,G,3);case"dddd":return G[F.$W];case"H":return String(B);case"HH":return I.s(B,2,"0");case"h":return fe(1);case"hh":return fe(2);case"a":return be(B,z,!0);case"A":return be(B,z,!1);case"m":return String(z);case"mm":return I.s(z,2,"0");case"s":return String(F.$s);case"ss":return I.s(F.$s,2,"0");case"SSS":return I.s(F.$ms,3,"0");case"Z":return A}return null}(ie)||A.replace(":","")})},L.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},L.diff=function(N,F,P){var j,A=this,B=I.p(F),z=M(N),H=(z.utcOffset()-this.utcOffset())*r,G=this-z,W=function(){return I.m(A,z)};switch(B){case p:j=W()/12;break;case d:j=W();break;case g:j=W()/3;break;case c:j=(G-H)/6048e5;break;case u:j=(G-H)/864e5;break;case s:j=G/i;break;case l:j=G/r;break;case a:j=G/n;break;default:j=G}return P?j:I.a(j)},L.daysInMonth=function(){return this.endOf(d).$D},L.$locale=function(){return k[this.$L]},L.locale=function(N,F){if(!N)return this.$L;var P=this.clone(),j=O(N,F,!0);return j&&(P.$L=j),P},L.clone=function(){return I.w(this.$d,this)},L.toDate=function(){return new Date(this.valueOf())},L.toJSON=function(){return this.isValid()?this.toISOString():null},L.toISOString=function(){return this.$d.toISOString()},L.toString=function(){return this.$d.toUTCString()},R}(),D=$.prototype;return M.prototype=D,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",u],["$M",d],["$y",p],["$D",h]].forEach(function(R){D[R[1]]=function(L){return this.$g(L,R[0],R[1])}}),M.extend=function(R,L){return R.$i||(R(L,$,M),R.$i=!0),M},M.locale=O,M.isDayjs=C,M.unix=function(R){return M(1e3*R)},M.en=k[E],M.Ls=k,M.p={},M})})(d2);var ZL=d2.exports;const Rv=$p(ZL),QL=()=>{var C;const{id:e}=N1(),[t,n]=b.useState([]),[r,i]=b.useState(1),[o,a]=b.useState("description"),[l,s]=b.useState(null),[u,c]=b.useState(!1),[d,g]=b.useState(0);console.log("products",t);const[p,h]=b.useState(!0),v=t.find(O=>O.id===Number(e)),w=v?Rv().diff(Rv(v.createdAt),"day")<7:!1;b.useEffect(()=>{(async()=>{try{h(!0);const I=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[id][$eq]=${e}&populate=*`)).json();n(I.data)}catch(M){console.error("Error fetching products:",M)}finally{h(!1)}})()},[e]),console.log(v),b.useEffect(()=>{var O,M;v&&v.images&&s((M=(O=v.images)==null?void 0:O[0])==null?void 0:M.url)},[v]);const f=((v==null?void 0:v.images)??[]).map(O=>({src:O.url})),m=()=>{const O=v.images.findIndex(M=>M.url===l);g(O>=0?O:0),c(!0)},x=Kn(),E=Dt(O=>O.favorites.items).some(O=>O.id===(v==null?void 0:v.id)),k=()=>{x(La({...v,quantity:r})),J.success(`${v.name} додано в кошик!`)},_=(O,M)=>{M.stopPropagation(),x(Ba(O)),E?J.warning(`${O.name} видалено з обраного`):J.info(`${O.name} додано в обране`)};return p?y.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:y.jsx(Wu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):v?y.jsxs(yv,{children:[" ",y.jsx(no,{autoClose:1500}),y.jsxs(Kj,{children:[y.jsx(Me,{to:"/",children:"Головна"})," / ",y.jsx(Me,{to:"/catalog",children:"Каталог"})," /"," ",v.name]}),y.jsxs(Zj,{children:[y.jsxs(Qj,{children:[y.jsx(Jj,{src:l,alt:v.name,onClick:m}),y.jsx(eD,{children:(v.images??[]).map(O=>{const M=O.url;return y.jsx(tD,{src:M,onClick:()=>s(M),style:{cursor:"pointer",opacity:l===M?1:.4}},O.id)})})]}),y.jsx(jL,{open:u,close:()=>c(!1),index:d,slides:f,controller:{closeOnBackdropClick:!0},on:{view:({index:O})=>{var M,I;g(O),(I=(M=v==null?void 0:v.images)==null?void 0:M[O])!=null&&I.url&&s(v.images[O].url)}},plugins:[KL],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),y.jsxs(nD,{children:[y.jsx(rD,{children:v.name}),y.jsx(iD,{children:w&&y.jsx(oD,{children:"● Новий товар"})}),y.jsxs(aD,{children:[y.jsx(sD,{children:y.jsxs(lD,{children:[v.price.toLocaleString()," грн"]})}),y.jsxs(uD,{children:[y.jsxs(cD,{children:[y.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),y.jsx("span",{children:r}),y.jsxs(wD,{$active:r>=v.stock,children:[y.jsx("button",{onClick:()=>i(Math.min(v.stock,r+1)),disabled:r>=v.stock,children:"+"}),y.jsxs(jS,{children:["Максимум: ",v.stock]})]})]}),y.jsxs(dD,{onClick:k,children:[" ",y.jsx(ja,{size:25}),y.jsx("span",{children:"В КОШИК"})]}),y.jsxs(xD,{$active:E,onClick:O=>_(v,O),children:[y.jsxs(bD,{$active:E,children:[" ",y.jsx("use",{href:`${dn}#icon-heart`})]}),y.jsx("span",{children:"В ОБРАНЕ"})]})]})]}),y.jsxs(hD,{children:[y.jsxs("p",{children:[y.jsx("strong",{children:"Ваше місто:"})," Київ"]}),y.jsx("p",{children:"🚚 Доставка по Україні (Розрахувати вартість)"})]})]})]}),y.jsxs(mD,{children:[y.jsxs(gD,{children:[y.jsx(xv,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),y.jsx(xv,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"})]}),y.jsxs(vD,{children:[o==="description"&&y.jsx(yD,{children:v.description}),o==="attributes"&&y.jsx(fD,{children:(C=v.attributes)!=null&&C.length?v.attributes.map(O=>y.jsxs(pD,{children:[y.jsx("span",{children:O.label}),y.jsx("b",{children:O.value})]},O.id)):y.jsx("p",{children:"Характеристики відсутні"})})]})]})]}):y.jsx(yv,{children:"Товар не знайдено"})},JL=T.div`
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

  
`,eR=T.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,tR=T.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,nR=T.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,rR=T.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,iR=T.div`
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
`,oR=T.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,aR=T.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,sR=T.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,lR=T.div`

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
`;const uR=T.div`
  text-align: center;
  width: 100px;
 
`,cR=T.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,dR=T.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,fR=T.div`

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
`,pR=T.div`
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
`,hR=T(Me)`
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
`,mR=T.button`
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
`;const gR=T.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,vR=T.div`
   
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
`;const yR=T.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,xR=T.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,bR=T.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,wR=T.button`
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
`,SR=()=>y.jsxs(y.Fragment,{children:[y.jsx(gR,{children:"Головна / Кошик"}),y.jsxs(vR,{children:[y.jsx(yR,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),y.jsx(xR,{children:"Ваш кошик порожній"}),y.jsx(bR,{children:"Ви ще не додали жодного товару в кошик"}),y.jsx(wR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]}),_R=T.div`
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
`,ER=({item:e})=>{const t=Kn();return y.jsxs(_R,{children:[y.jsx("button",{onClick:()=>t(sM(e.id)),children:"-"}),y.jsx("span",{children:e.quantity}),y.jsx("button",{onClick:()=>t(aM({id:e.id,stock:e.stock})),disabled:e.quantity>=e.stock,children:"+"})]})},CR=()=>{const e=Kn(),[t,n]=b.useState([]),r=Dt(g=>g.cart.items),o=Dt(g=>g.cart.items).reduce((g,p)=>g+p.quantity,0),a=r.reduce((g,p)=>g+p.price*(p.quantity||1),0),l=Dt(g=>g.favorites.items),s=r.length===0,u=(g,p)=>{p.stopPropagation(),console.log(g);const h=l.some(v=>v.id===g.id);e(Ba(g)),h?J.warning(`${g.name} видалено з обраного`):J.info(`${g.name} додано в обране`)},c=g=>{n(p=>[...p,g.id]),setTimeout(()=>{e(iM(g)),n(p=>p.filter(h=>h!==g.id))},300)},d=()=>{e(Gh())};return y.jsx(y.Fragment,{children:s?y.jsx(SR,{}):y.jsxs(JL,{children:[y.jsx(no,{autoClose:1500}),y.jsxs(eR,{children:[" ",y.jsx(Me,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",y.jsx(Me,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),y.jsx(tR,{children:"Кошик"}),y.jsxs(nR,{children:[y.jsx(rR,{children:r.map((g,p)=>{var v,w;console.log(g);const h=l.some(f=>f.id===g.id);return y.jsxs(iR,{className:t.includes(g.id)?"removing":"",children:[y.jsx(oR,{src:((w=(v=g.images)==null?void 0:v[0])==null?void 0:w.url)||"/nofoto.png",alt:g.name,onError:f=>{f.currentTarget.onerror=null,f.currentTarget.src=xa}}),y.jsx(aR,{children:y.jsx("h3",{children:g.name})}),y.jsxs(sR,{children:[y.jsx(ER,{item:{...g,quantity:g.quantity||1}}),y.jsx(uR,{children:y.jsxs("div",{className:"current-price",children:[(g.price*(g.quantity||1)).toLocaleString()," грн"]})})]}),y.jsxs(lR,{children:[y.jsx(dR,{onClick:f=>u(g,f),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:y.jsx(zh,{size:22,fill:h?"#ff4d4f":"none",color:h?"#ff4d4f":"#999"})}),y.jsx(cR,{onClick:()=>c(g),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:y.jsx(_b,{size:22})})]})]},`${g.id}-${p}`)})}),y.jsxs(fR,{children:[y.jsxs(pR,{children:[y.jsx("span",{children:"Всього в обраному:"}),y.jsxs("strong",{children:[o," шт."]}),y.jsx("span",{children:"На суму:"}),y.jsxs("strong",{children:[a," грн"]})]}),y.jsx(hR,{to:"/checkout",children:"Оформити замовлення"}),y.jsx(mR,{onClick:d,children:"Oчистити кошик"})]})]})]})})},kR=T.div`
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
`,TR=T.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,PR=T.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,OR=T.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,MR=T.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,$R=T.div`
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
`;const IR=T.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,jR=T.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,DR=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
   @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,LR=T.p`
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  width: 100px;
  text-align: center;
`,RR=T.div`
  display: flex;
  gap: 16px;
`,Av=T.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  padding: 8px;
  
`,AR=T.div`
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
`,FR=T.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,NR=T.button`
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
`,zR=T.button`
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
`,BR=T.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,VR=T.div`
   
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
`;const HR=T.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;T.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const UR=T.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,WR=T.button`
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
`,GR=()=>y.jsxs(y.Fragment,{children:[y.jsx(BR,{children:"Головна / Обране"}),y.jsxs(VR,{children:[y.jsx(HR,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),y.jsx(UR,{children:"Ви ще не додали жодного товару в обране"}),y.jsx(WR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),YR=()=>{const e=Kn(),t=Dt(c=>c.favorites.items),[n,r]=b.useState([]),i=Dt(c=>c.cart.items),o=()=>{e(oM(t)),J.success("Товари додано в кошик!")};console.log(t);const a=t.reduce((c,d)=>c+d.price*(d.quantity||1),0),l=(c,d)=>{d.stopPropagation();const g=t.some(p=>p.id===c.id);r(p=>[...p,c.id]),setTimeout(()=>{e(Ba(c)),r(p=>p.filter(h=>h!==c.id))},300),g?J.warning(`${c.name} видалено з обраного`):J.info(`${c.name} додано в обране`)},s=()=>{e(Gj())},u=t.length===0;return y.jsx(y.Fragment,{children:u?y.jsx(GR,{}):y.jsxs(kR,{children:[y.jsx(no,{autoClose:1500}),y.jsxs(TR,{children:[" ",y.jsx(Me,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",y.jsx(Me,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),y.jsx(PR,{children:"Обране"}),y.jsxs(OR,{children:[y.jsx(MR,{children:t.map(c=>{var v,w;const d=i.find(f=>f.id===c.id),p=(d?d.quantity:0)>=c.stock,h=f=>{if(p){J.error(`Вибачте, доступно лише ${f.stock} шт.`);return}e(La(f)),J.success(`${f.name} додано в кошик!`)};return y.jsxs($R,{className:n.includes(c.id)?"removing":"",children:[y.jsx(IR,{src:((w=(v=c.images)==null?void 0:v[0])==null?void 0:w.url)||"/nofoto.png",alt:c.name,onError:f=>{f.currentTarget.onerror=null,f.currentTarget.src="/nofoto.png"}}),y.jsx(jR,{children:c.name}),y.jsxs(DR,{children:[y.jsxs(LR,{children:[c.price," грн"]}),y.jsxs(RR,{children:[y.jsx(Av,{onClick:()=>h(c),children:y.jsx(ja,{size:30})}),y.jsx(Av,{onClick:f=>l(c,f),children:y.jsx(_b,{size:30})})]})]})]},c.id)})}),y.jsxs(AR,{children:[y.jsxs(FR,{children:[y.jsx("span",{children:"Всього в обраному:"}),y.jsxs("strong",{children:[t.length," шт."]}),y.jsx("span",{children:"На суму:"}),y.jsxs("strong",{children:[a," грн"]})]}),y.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),y.jsx(NR,{onClick:()=>o(),children:"Додати все до кошика"}),y.jsx(zR,{onClick:s,children:"Очистити обрані"})]})]})]})})},qR=T.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,XR=T.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,KR=T.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,ZR=T.h1`
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
`;const QR=({title:e,children:t,breadcrumbPath:n})=>y.jsxs(qR,{children:[y.jsxs(XR,{children:["Головна / ",n]}),y.jsxs(KR,{children:[y.jsx(ZR,{children:e}),t]})]}),Fv=T.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,Nv=T.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,zv=T.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,Bv=T.ul`
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
`,JR=()=>y.jsxs(QR,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[y.jsxs(Fv,{children:[y.jsx(Nv,{children:"Способи доставки"}),y.jsx(zv,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),y.jsxs(Bv,{children:[y.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),y.jsx("li",{children:"Самовивіз з нашого магазину"}),y.jsx("li",{children:"Укрпошта"})]})]}),y.jsxs(Fv,{children:[y.jsx(Nv,{children:"Варіанти оплати"}),y.jsx(zv,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),y.jsxs(Bv,{children:[y.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),y.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),y.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function ei(e){"@babel/helpers - typeof";return ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ei(e)}function eA(e,t){if(ei(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ei(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function f2(e){var t=eA(e,"string");return ei(t)==="symbol"?t:String(t)}function Do(e,t,n){return t=f2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vv(Object(n),!0).forEach(function(r){Do(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tA(e){if(Array.isArray(e))return e}function nA(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(c){u=!0,i=c}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Sp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p2(e,t){if(e){if(typeof e=="string")return Sp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sp(e,t)}}function rA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bn(e,t){return tA(e)||nA(e,t)||p2(e,t)||rA()}function iA(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function er(e,t){if(e==null)return{};var n=iA(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var oA=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function aA(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,c=e.onInputChange,d=e.onMenuClose,g=e.onMenuOpen,p=e.value,h=er(e,oA),v=b.useState(l!==void 0?l:n),w=Bn(v,2),f=w[0],m=w[1],x=b.useState(s!==void 0?s:i),S=Bn(x,2),E=S[0],k=S[1],_=b.useState(p!==void 0?p:a),C=Bn(_,2),O=C[0],M=C[1],I=b.useCallback(function(P,j){typeof u=="function"&&u(P,j),M(P)},[u]),$=b.useCallback(function(P,j){var A;typeof c=="function"&&(A=c(P,j)),m(A!==void 0?A:P)},[c]),D=b.useCallback(function(){typeof g=="function"&&g(),k(!0)},[g]),R=b.useCallback(function(){typeof d=="function"&&d(),k(!1)},[d]),L=l!==void 0?l:f,N=s!==void 0?s:E,F=p!==void 0?p:O;return Z(Z({},h),{},{inputValue:L,menuIsOpen:N,onChange:I,onInputChange:$,onMenuClose:R,onMenuOpen:D,value:F})}function sA(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Hv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f2(r.key),r)}}function lA(e,t,n){return t&&Hv(e.prototype,t),n&&Hv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _p(e,t){return _p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},_p(e,t)}function uA(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_p(e,t)}function Gl(e){return Gl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Gl(e)}function cA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function dA(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fA(e,t){if(t&&(ei(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dA(e)}function pA(e){var t=cA();return function(){var r=Gl(e),i;if(t){var o=Gl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return fA(this,i)}}function hA(e){if(Array.isArray(e))return Sp(e)}function mA(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tm(e){return hA(e)||mA(e)||p2(e)||gA()}function vA(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const yA=Math.min,xA=Math.max,Yl=Math.round,xs=Math.floor,ql=e=>({x:e,y:e});function bA(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function dc(){return typeof window<"u"}function h2(e){return g2(e)?(e.nodeName||"").toLowerCase():"#document"}function un(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function m2(e){var t;return(t=(g2(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function g2(e){return dc()?e instanceof Node||e instanceof un(e).Node:!1}function Ep(e){return dc()?e instanceof Element||e instanceof un(e).Element:!1}function Pm(e){return dc()?e instanceof HTMLElement||e instanceof un(e).HTMLElement:!1}function Uv(e){return!dc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof un(e).ShadowRoot}function v2(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Om(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Cd;function wA(){return Cd==null&&(Cd=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Cd}function SA(e){return/^(html|body|#document)$/.test(h2(e))}function Om(e){return un(e).getComputedStyle(e)}function _A(e){if(h2(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Uv(e)&&e.host||m2(e);return Uv(t)?t.host:t}function y2(e){const t=_A(e);return SA(t)?e.ownerDocument?e.ownerDocument.body:e.body:Pm(t)&&v2(t)?t:y2(t)}function Xl(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=y2(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=un(i);if(o){const l=Cp(a);return t.concat(a,a.visualViewport||[],v2(i)?i:[],l&&n?Xl(l):[])}else return t.concat(i,Xl(i,[],n))}function Cp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function EA(e){const t=Om(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Pm(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Yl(n)!==o||Yl(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Mm(e){return Ep(e)?e:e.contextElement}function kd(e){const t=Mm(e);if(!Pm(t))return ql(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=EA(t);let a=(o?Yl(n.width):n.width)/r,l=(o?Yl(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const CA=ql(0);function kA(e){const t=un(e);return!wA()||!t.visualViewport?CA:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function TA(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==un(e)?!1:t}function Wv(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Mm(e);let a=ql(1);t&&(r?Ep(r)&&(a=kd(r)):a=kd(e));const l=TA(o,n,r)?kA(o):ql(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,c=i.width/a.x,d=i.height/a.y;if(o){const g=un(o),p=r&&Ep(r)?un(r):r;let h=g,v=Cp(h);for(;v&&r&&p!==h;){const w=kd(v),f=v.getBoundingClientRect(),m=Om(v),x=f.left+(v.clientLeft+parseFloat(m.paddingLeft))*w.x,S=f.top+(v.clientTop+parseFloat(m.paddingTop))*w.y;s*=w.x,u*=w.y,c*=w.x,d*=w.y,s+=x,u+=S,h=un(v),v=Cp(h)}}return bA({width:c,height:d,x:s,y:u})}function x2(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function PA(e,t){let n=null,r;const i=m2(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:c,top:d,width:g,height:p}=u;if(l||t(),!g||!p)return;const h=xs(d),v=xs(i.clientWidth-(c+g)),w=xs(i.clientHeight-(d+p)),f=xs(c),x={rootMargin:-h+"px "+-v+"px "+-w+"px "+-f+"px",threshold:xA(0,yA(1,s))||1};let S=!0;function E(k){const _=k[0].intersectionRatio;if(_!==s){if(!S)return a();_?a(!1,_):r=setTimeout(()=>{a(!1,1e-7)},1e3)}_===1&&!x2(u,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(E,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,x)}n.observe(e)}return a(!0),o}function OA(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=Mm(e),c=i||o?[...u?Xl(u):[],...t?Xl(t):[]]:[];c.forEach(f=>{i&&f.addEventListener("scroll",n,{passive:!0}),o&&f.addEventListener("resize",n)});const d=u&&l?PA(u,n):null;let g=-1,p=null;a&&(p=new ResizeObserver(f=>{let[m]=f;m&&m.target===u&&p&&t&&(p.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(t)})),n()}),u&&!s&&p.observe(u),t&&p.observe(t));let h,v=s?Wv(e):null;s&&w();function w(){const f=Wv(e);v&&!x2(v,f)&&n(),v=f,h=requestAnimationFrame(w)}return n(),()=>{var f;c.forEach(m=>{i&&m.removeEventListener("scroll",n),o&&m.removeEventListener("resize",n)}),d==null||d(),(f=p)==null||f.disconnect(),p=null,s&&cancelAnimationFrame(h)}}var kp=b.useLayoutEffect,MA=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Kl=function(){};function $A(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function IA(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat($A(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Gv=function(t){return BA(t)?t.filter(Boolean):ei(t)==="object"&&t!==null?[t]:[]},b2=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=er(t,MA);return Z({},n)},Pe=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function fc(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function jA(e){return fc(e)?window.innerHeight:e.clientHeight}function w2(e){return fc(e)?window.pageYOffset:e.scrollTop}function Zl(e,t){if(fc(e)){window.scrollTo(0,t);return}e.scrollTop=t}function DA(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function LA(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function bs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Kl,i=w2(e),o=t-i,a=10,l=0;function s(){l+=a;var u=LA(l,i,o,n);Zl(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function Yv(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?Zl(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&Zl(e,Math.max(t.offsetTop-i,0))}function RA(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function qv(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function AA(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var S2=!1,FA={get passive(){return S2=!0}},ws=typeof window<"u"?window:{};ws.addEventListener&&ws.removeEventListener&&(ws.addEventListener("p",Kl,FA),ws.removeEventListener("p",Kl,!1));var NA=S2;function zA(e){return e!=null}function BA(e){return Array.isArray(e)}function Ss(e,t,n){return e?t:n}var VA=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Bn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Bn(l,2),u=s[0],c=s[1];return a[u]=c,a},{})},HA=["children","innerProps"],UA=["children","innerProps"];function WA(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=DA(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var c=s.getBoundingClientRect(),d=c.height,g=n.getBoundingClientRect(),p=g.bottom,h=g.height,v=g.top,w=n.offsetParent.getBoundingClientRect(),f=w.top,m=a?window.innerHeight:jA(s),x=w2(s),S=parseInt(getComputedStyle(n).marginBottom,10),E=parseInt(getComputedStyle(n).marginTop,10),k=f-E,_=m-v,C=k+x,O=d-x-v,M=p-m+x+S,I=x+v-E,$=160;switch(i){case"auto":case"bottom":if(_>=h)return{placement:"bottom",maxHeight:t};if(O>=h&&!a)return o&&bs(s,M,$),{placement:"bottom",maxHeight:t};if(!a&&O>=r||a&&_>=r){o&&bs(s,M,$);var D=a?_-S:O-S;return{placement:"bottom",maxHeight:D}}if(i==="auto"||a){var R=t,L=a?k:C;return L>=r&&(R=Math.min(L-S-l,t)),{placement:"top",maxHeight:R}}if(i==="bottom")return o&&Zl(s,M),{placement:"bottom",maxHeight:t};break;case"top":if(k>=h)return{placement:"top",maxHeight:t};if(C>=h&&!a)return o&&bs(s,I,$),{placement:"top",maxHeight:t};if(!a&&C>=r||a&&k>=r){var N=t;return(!a&&C>=r||a&&k>=r)&&(N=a?k-E:C-E),o&&bs(s,I,$),{placement:"top",maxHeight:N}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function GA(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var _2=function(t){return t==="auto"?"bottom":t},YA=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return Z((r={label:"menu"},Do(r,GA(i),"100%"),Do(r,"position","absolute"),Do(r,"width","100%"),Do(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},E2=b.createContext(null),qA=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=b.useContext(E2)||{},c=u.setPortalPlacement,d=b.useRef(null),g=b.useState(i),p=Bn(g,2),h=p[0],v=p[1],w=b.useState(null),f=Bn(w,2),m=f[0],x=f[1],S=s.spacing.controlHeight;return kp(function(){var E=d.current;if(E){var k=a==="fixed",_=l&&!k,C=WA({maxHeight:i,menuEl:E,minHeight:r,placement:o,shouldScroll:_,isFixedPosition:k,controlHeight:S});v(C.maxHeight),x(C.placement),c==null||c(C.placement)}},[i,o,a,l,r,c,S]),n({ref:d,placerProps:Z(Z({},t),{},{placement:m||_2(o),maxHeight:h})})},XA=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return K("div",Q({},Pe(t,"menu",{menu:!0}),{ref:r},i),n)},KA=XA,ZA=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return Z({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},QA=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return K("div",Q({},Pe(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},C2=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return Z({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},JA=C2,e6=C2,t6=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=er(t,HA);return K("div",Q({},Pe(Z(Z({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},n6=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=er(t,UA);return K("div",Q({},Pe(Z(Z({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},r6=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},i6=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=b.useRef(null),u=b.useRef(null),c=b.useState(_2(a)),d=Bn(c,2),g=d[0],p=d[1],h=b.useMemo(function(){return{setPortalPlacement:p}},[]),v=b.useState(null),w=Bn(v,2),f=w[0],m=w[1],x=b.useCallback(function(){if(i){var _=RA(i),C=l==="fixed"?0:window.pageYOffset,O=_[g]+C;(O!==(f==null?void 0:f.offset)||_.left!==(f==null?void 0:f.rect.left)||_.width!==(f==null?void 0:f.rect.width))&&m({offset:O,rect:_})}},[i,l,g,f==null?void 0:f.offset,f==null?void 0:f.rect.left,f==null?void 0:f.rect.width]);kp(function(){x()},[x]);var S=b.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=OA(i,s.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);kp(function(){S()},[S]);var E=b.useCallback(function(_){s.current=_,S()},[S]);if(!n&&l!=="fixed"||!f)return null;var k=K("div",Q({ref:E},Pe(Z(Z({},t),{},{offset:f.offset,position:l,rect:f.rect}),"menuPortal",{"menu-portal":!0}),o),r);return K(E2.Provider,{value:h},n?gu.createPortal(k,n):k)},o6=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},a6=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return K("div",Q({},Pe(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},s6=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return Z({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},l6=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return K("div",Q({},Pe(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},u6=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},c6=function(t){var n=t.children,r=t.innerProps;return K("div",Q({},Pe(t,"indicatorsContainer",{indicators:!0}),r),n)},Xv,d6=["size"],f6=["innerProps","isRtl","size"],p6={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},k2=function(t){var n=t.size,r=er(t,d6);return K("svg",Q({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:p6},r))},$m=function(t){return K(k2,Q({size:20},t),K("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},T2=function(t){return K(k2,Q({size:20},t),K("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},P2=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},h6=P2,m6=function(t){var n=t.children,r=t.innerProps;return K("div",Q({},Pe(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||K(T2,null))},g6=P2,v6=function(t){var n=t.children,r=t.innerProps;return K("div",Q({},Pe(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||K($m,null))},y6=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},x6=function(t){var n=t.innerProps;return K("span",Q({},n,Pe(t,"indicatorSeparator",{"indicator-separator":!0})))},b6=N4(Xv||(Xv=vA([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),w6=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return Z({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Td=function(t){var n=t.delay,r=t.offset;return K("span",{css:nm({animation:"".concat(b6," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},S6=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=er(t,f6);return K("div",Q({},Pe(Z(Z({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),K(Td,{delay:0,offset:r}),K(Td,{delay:160,offset:!0}),K(Td,{delay:320,offset:!r}))},_6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return Z({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},E6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return K("div",Q({ref:o},Pe(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},C6=E6,k6=["data"],T6=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},P6=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,c=t.theme,d=t.selectProps;return K("div",Q({},Pe(t,"group",{group:!0}),s),K(a,Q({},l,{selectProps:d,theme:c,getStyles:i,getClassNames:o,cx:r}),u),K("div",null,n))},O6=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return Z({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},M6=function(t){var n=b2(t);n.data;var r=er(n,k6);return K("div",Q({},Pe(t,"groupHeading",{"group-heading":!0}),r))},$6=P6,I6=["innerRef","isDisabled","isHidden","inputClassName"],j6=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return Z(Z({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},D6),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},O2={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},D6={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Z({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},O2)},L6=function(t){return Z({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},O2)},R6=function(t){var n=t.cx,r=t.value,i=b2(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=er(i,I6);return K("div",Q({},Pe(t,"input",{"input-container":!0}),{"data-value":r||""}),K("input",Q({className:n({input:!0},s),ref:o,style:L6(l),disabled:a},u)))},A6=R6,F6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return Z({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},N6=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return Z({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},z6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return Z({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},M2=function(t){var n=t.children,r=t.innerProps;return K("div",r,n)},B6=M2,V6=M2;function H6(e){var t=e.children,n=e.innerProps;return K("div",Q({role:"button"},n),t||K($m,{size:14}))}var U6=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,c=r.Label,d=r.Remove;return K(u,{data:i,innerProps:Z(Z({},Pe(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},K(c,{data:i,innerProps:Z({},Pe(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),K(d,{data:i,innerProps:Z(Z({},Pe(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},W6=U6,G6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return Z({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},Y6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return K("div",Q({},Pe(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},q6=Y6,X6=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return Z({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},K6=function(t){var n=t.children,r=t.innerProps;return K("div",Q({},Pe(t,"placeholder",{placeholder:!0}),r),n)},Z6=K6,Q6=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return Z({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},J6=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return K("div",Q({},Pe(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},e8=J6,t8={ClearIndicator:v6,Control:C6,DropdownIndicator:m6,DownChevron:T2,CrossIcon:$m,Group:$6,GroupHeading:M6,IndicatorsContainer:c6,IndicatorSeparator:x6,Input:A6,LoadingIndicator:S6,Menu:KA,MenuList:QA,MenuPortal:i6,LoadingMessage:n6,NoOptionsMessage:t6,MultiValue:W6,MultiValueContainer:B6,MultiValueLabel:V6,MultiValueRemove:H6,Option:q6,Placeholder:Z6,SelectContainer:a6,SingleValue:e8,ValueContainer:l6},n8=function(t){return Z(Z({},t8),t.components)},Kv=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function r8(e,t){return!!(e===t||Kv(e)&&Kv(t))}function i8(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!r8(e[n],t[n]))return!1;return!0}function o8(e,t){t===void 0&&(t=i8);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var a8={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},s8=function(t){return K("span",Q({css:a8},t))},Zv=s8,l8={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,c=t.isAppleDevice,d=function(v,w){return v&&v.length?"".concat(v.indexOf(w)+1," of ").concat(v.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(d(l,r),".");if(n==="menu"&&c){var g=s?" disabled":"",p="".concat(u?" selected":"").concat(g);return"".concat(a).concat(p,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},u8=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,c=t.isAppleDevice,d=s.ariaLiveMessages,g=s.getOptionLabel,p=s.inputValue,h=s.isMulti,v=s.isOptionDisabled,w=s.isSearchable,f=s.menuIsOpen,m=s.options,x=s.screenReaderStatus,S=s.tabSelectsValue,E=s.isLoading,k=s["aria-label"],_=s["aria-live"],C=b.useMemo(function(){return Z(Z({},l8),d||{})},[d]),O=b.useMemo(function(){var L="";if(n&&C.onChange){var N=n.option,F=n.options,P=n.removedValue,j=n.removedValues,A=n.value,B=function(fe){return Array.isArray(fe)?null:fe},z=P||N||B(A),H=z?g(z):"",G=F||j||void 0,W=G?G.map(g):[],X=Z({isDisabled:z&&v(z,l),label:H,labels:W},n);L=C.onChange(X)}return L},[n,C,v,l,g]),M=b.useMemo(function(){var L="",N=r||i,F=!!(r&&l&&l.includes(r));if(N&&C.onFocus){var P={focused:N,label:g(N),isDisabled:v(N,l),isSelected:F,options:o,context:N===r?"menu":"value",selectValue:l,isAppleDevice:c};L=C.onFocus(P)}return L},[r,i,g,v,C,o,l,c]),I=b.useMemo(function(){var L="";if(f&&m.length&&!E&&C.onFilter){var N=x({count:o.length});L=C.onFilter({inputValue:p,resultsMessage:N})}return L},[o,p,f,C,m,x,E]),$=(n==null?void 0:n.action)==="initial-input-focus",D=b.useMemo(function(){var L="";if(C.guidance){var N=i?"value":f?"menu":"input";L=C.guidance({"aria-label":k,context:N,isDisabled:r&&v(r,l),isMulti:h,isSearchable:w,tabSelectsValue:S,isInitialFocus:$})}return L},[k,r,i,h,v,w,f,C,l,S,$]),R=K(b.Fragment,null,K("span",{id:"aria-selection"},O),K("span",{id:"aria-focused"},M),K("span",{id:"aria-results"},I),K("span",{id:"aria-guidance"},D));return K(b.Fragment,null,K(Zv,{id:u},$&&R),K(Zv,{"aria-live":_,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!$&&R))},c8=u8,Tp=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],d8=new RegExp("["+Tp.map(function(e){return e.letters}).join("")+"]","g"),$2={};for(var Pd=0;Pd<Tp.length;Pd++)for(var Od=Tp[Pd],Md=0;Md<Od.letters.length;Md++)$2[Od.letters[Md]]=Od.base;var I2=function(t){return t.replace(d8,function(n){return $2[n]})},f8=o8(I2),Qv=function(t){return t.replace(/^\s+|\s+$/g,"")},p8=function(t){return"".concat(t.label," ").concat(t.value)},h8=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=Z({ignoreCase:!0,ignoreAccents:!0,stringify:p8,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,c=s?Qv(r):r,d=s?Qv(l(n)):l(n);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),a&&(c=f8(c),d=I2(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},m8=["innerRef"];function g8(e){var t=e.innerRef,n=er(e,m8),r=VA(n,"onExited","in","enter","exit","appear");return K("input",Q({ref:t},r,{css:nm({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var v8=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function y8(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=b.useRef(!1),l=b.useRef(!1),s=b.useRef(0),u=b.useRef(null),c=b.useCallback(function(w,f){if(u.current!==null){var m=u.current,x=m.scrollTop,S=m.scrollHeight,E=m.clientHeight,k=u.current,_=f>0,C=S-E-x,O=!1;C>f&&a.current&&(r&&r(w),a.current=!1),_&&l.current&&(o&&o(w),l.current=!1),_&&f>C?(n&&!a.current&&n(w),k.scrollTop=S,O=!0,a.current=!0):!_&&-f>x&&(i&&!l.current&&i(w),k.scrollTop=0,O=!0,l.current=!0),O&&v8(w)}},[n,r,i,o]),d=b.useCallback(function(w){c(w,w.deltaY)},[c]),g=b.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),p=b.useCallback(function(w){var f=s.current-w.changedTouches[0].clientY;c(w,f)},[c]),h=b.useCallback(function(w){if(w){var f=NA?{passive:!1}:!1;w.addEventListener("wheel",d,f),w.addEventListener("touchstart",g,f),w.addEventListener("touchmove",p,f)}},[p,g,d]),v=b.useCallback(function(w){w&&(w.removeEventListener("wheel",d,!1),w.removeEventListener("touchstart",g,!1),w.removeEventListener("touchmove",p,!1))},[p,g,d]);return b.useEffect(function(){if(t){var w=u.current;return h(w),function(){v(w)}}},[t,h,v]),function(w){u.current=w}}var Jv=["boxSizing","height","overflow","paddingRight","position"],e1={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function t1(e){e.cancelable&&e.preventDefault()}function n1(e){e.stopPropagation()}function r1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function i1(){return"ontouchstart"in window||navigator.maxTouchPoints}var o1=!!(typeof window<"u"&&window.document&&window.document.createElement),ko=0,ci={capture:!1,passive:!1};function x8(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),o=b.useRef(null),a=b.useCallback(function(s){if(o1){var u=document.body,c=u&&u.style;if(r&&Jv.forEach(function(h){var v=c&&c[h];i.current[h]=v}),r&&ko<1){var d=parseInt(i.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,p=window.innerWidth-g+d||0;Object.keys(e1).forEach(function(h){var v=e1[h];c&&(c[h]=v)}),c&&(c.paddingRight="".concat(p,"px"))}u&&i1()&&(u.addEventListener("touchmove",t1,ci),s&&(s.addEventListener("touchstart",r1,ci),s.addEventListener("touchmove",n1,ci))),ko+=1}},[r]),l=b.useCallback(function(s){if(o1){var u=document.body,c=u&&u.style;ko=Math.max(ko-1,0),r&&ko<1&&Jv.forEach(function(d){var g=i.current[d];c&&(c[d]=g)}),u&&i1()&&(u.removeEventListener("touchmove",t1,ci),s&&(s.removeEventListener("touchstart",r1,ci),s.removeEventListener("touchmove",n1,ci)))}},[r]);return b.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var b8=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},w8={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function S8(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=y8({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),c=x8({isEnabled:n}),d=function(p){u(p),c(p)};return K(b.Fragment,null,n&&K("div",{onClick:b8,css:w8}),t(d))}var _8={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},E8=function(t){var n=t.name,r=t.onFocus;return K("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:_8,value:"",onChange:function(){}})},C8=E8;function Im(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function k8(){return Im(/^iPhone/i)}function j2(){return Im(/^Mac/i)}function T8(){return Im(/^iPad/i)||j2()&&navigator.maxTouchPoints>1}function P8(){return k8()||T8()}function O8(){return j2()||P8()}var M8=function(t){return t.label},$8=function(t){return t.label},I8=function(t){return t.value},j8=function(t){return!!t.isDisabled},D8={clearIndicator:g6,container:o6,control:_6,dropdownIndicator:h6,group:T6,groupHeading:O6,indicatorsContainer:u6,indicatorSeparator:y6,input:j6,loadingIndicator:w6,loadingMessage:e6,menu:YA,menuList:ZA,menuPortal:r6,multiValue:F6,multiValueLabel:N6,multiValueRemove:z6,noOptionsMessage:JA,option:G6,placeholder:X6,singleValue:Q6,valueContainer:s6},L8={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},R8=4,D2=4,A8=38,F8=D2*2,N8={baseUnit:D2,controlHeight:A8,menuGutter:F8},$d={borderRadius:R8,colors:L8,spacing:N8},z8={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:qv(),captureMenuScroll:!qv(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:h8(),formatGroupLabel:M8,getOptionLabel:$8,getOptionValue:I8,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:j8,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!AA(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function a1(e,t,n,r){var i=A2(e,t,n),o=F2(e,t,n),a=R2(e,t),l=Ql(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function Ks(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return a1(e,a,t,l)}).filter(function(a){return l1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=a1(e,n,t,r);return l1(e,o)?o:void 0}).filter(zA)}function L2(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,Tm(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function s1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,Tm(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function B8(e,t){return L2(Ks(e,t))}function l1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!z2(e)||!o)&&N2(e,{label:a,value:l,data:i},r)}function V8(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function H8(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Id=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},R2=function(t,n){return t.getOptionLabel(n)},Ql=function(t,n){return t.getOptionValue(n)};function A2(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function F2(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Ql(e,t);return n.some(function(i){return Ql(e,i)===r})}function N2(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var z2=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},U8=1,B2=function(e){uA(n,e);var t=pA(n);function n(r){var i;if(sA(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var c=i.props,d=c.onChange,g=c.name;u.name=g,i.ariaOnChange(s,u),d(s,u)},i.setValue=function(s,u,c){var d=i.props,g=d.closeMenuOnSelect,p=d.isMulti,h=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:h}),g&&(i.setState({inputIsHiddenAfterUpdate:!p}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:c})},i.selectOption=function(s){var u=i.props,c=u.blurInputOnSelect,d=u.isMulti,g=u.name,p=i.state.selectValue,h=d&&i.isOptionSelected(s,p),v=i.isOptionDisabled(s,p);if(h){var w=i.getOptionValue(s);i.setValue(p.filter(function(f){return i.getOptionValue(f)!==w}),"deselect-option",s)}else if(!v)d?i.setValue([].concat(Tm(p),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:g});return}c&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,c=i.state.selectValue,d=i.getOptionValue(s),g=c.filter(function(h){return i.getOptionValue(h)!==d}),p=Ss(u,g,g[0]||null);i.onChange(p,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Ss(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),g=Ss(s,d,d[0]||null);c&&i.onChange(g,{action:"pop-value",removedValue:c})},i.getFocusedOptionId=function(s){return Id(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return s1(Ks(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return IA.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return R2(i.props,s)},i.getOptionValue=function(s){return Ql(i.props,s)},i.getStyles=function(s,u){var c=i.props.unstyled,d=D8[s](u,c);d.boxSizing="border-box";var g=i.props.styles[s];return g?g(d,u):d},i.getClassNames=function(s,u){var c,d;return(c=(d=i.props.classNames)[s])===null||c===void 0?void 0:c.call(d,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return n8(i.props)},i.buildCategorizedOptions=function(){return Ks(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return L2(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:Z({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,c=u.isMulti,d=u.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!c}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&fc(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,c=u&&u.item(0);c&&(i.initialTouchX=c.clientX,i.initialTouchY=c.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-i.initialTouchX),g=Math.abs(c.clientY-i.initialTouchY),p=5;i.userIsDragging=d>p||g>p}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,c=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(c,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),c=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:c>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return z2(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,c=u.isMulti,d=u.backspaceRemovesValue,g=u.escapeClearsValue,p=u.inputValue,h=u.isClearable,v=u.isDisabled,w=u.menuIsOpen,f=u.onKeyDown,m=u.tabSelectsValue,x=u.openMenuOnFocus,S=i.state,E=S.focusedOption,k=S.focusedValue,_=S.selectValue;if(!v&&!(typeof f=="function"&&(f(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!c||p)return;i.focusValue("previous");break;case"ArrowRight":if(!c||p)return;i.focusValue("next");break;case"Delete":case"Backspace":if(p)return;if(k)i.removeValue(k);else{if(!d)return;c?i.popValue():h&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!m||!E||x&&i.isOptionSelected(E,_))return;i.selectOption(E);break;case"Enter":if(s.keyCode===229)break;if(w){if(!E||i.isComposing)return;i.selectOption(E);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:p}),i.onMenuClose()):h&&g&&i.clearValue();break;case" ":if(p)return;if(!w){i.openMenu("first");break}if(!E)return;i.selectOption(E);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++U8),i.state.selectValue=Gv(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=Id(o,a[l])}return i}return lA(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Yv(this.menuListRef,this.focusedOptionRef),O8()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Yv(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),c=i==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,c=-1;if(a.length){switch(i){case"previous":s===0?c=0:s===-1?c=u:c=s-1;break;case"next":s>-1&&s<u&&(c=s+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:a[c]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme($d):Z(Z({},$d),this.props.theme):$d}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,g=d.isMulti,p=d.isRtl,h=d.options,v=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:v,isMulti:g,isRtl:p,options:h,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return A2(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return F2(this.props,i,o)}},{key:"filterOption",value:function(i,o){return N2(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,c=i.form,d=i.menuIsOpen,g=i.required,p=this.getComponents(),h=p.Input,v=this.state,w=v.inputIsHidden,f=v.ariaSelection,m=this.commonProps,x=l||this.getElementId("input"),S=Z(Z(Z({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(f==null?void 0:f.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?b.createElement(h,Q({},m,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:s},S)):b.createElement(g8,Q({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Kl,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:c,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,g=this.commonProps,p=this.props,h=p.controlShouldRenderValue,v=p.isDisabled,w=p.isMulti,f=p.inputValue,m=p.placeholder,x=this.state,S=x.selectValue,E=x.focusedValue,k=x.isFocused;if(!this.hasValue()||!h)return f?null:b.createElement(d,Q({},g,{key:"placeholder",isDisabled:v,isFocused:k,innerProps:{id:this.getElementId("placeholder")}}),m);if(w)return S.map(function(C,O){var M=C===E,I="".concat(i.getOptionLabel(C),"-").concat(i.getOptionValue(C));return b.createElement(a,Q({},g,{components:{Container:l,Label:s,Remove:u},isFocused:M,isDisabled:v,key:I,index:O,removeProps:{onClick:function(){return i.removeValue(C)},onTouchEnd:function(){return i.removeValue(C)},onMouseDown:function(D){D.preventDefault()}},data:C}),i.formatOptionLabel(C,"value"))});if(f)return null;var _=S[0];return b.createElement(c,Q({},g,{data:_,isDisabled:v}),this.formatOptionLabel(_,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,Q({},a,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!o||!u)return null;var d={"aria-hidden":"true"};return b.createElement(o,Q({},a,{innerProps:d,isDisabled:s,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return b.createElement(a,Q({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,Q({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,g=o.NoOptionsMessage,p=o.Option,h=this.commonProps,v=this.state.focusedOption,w=this.props,f=w.captureMenuScroll,m=w.inputValue,x=w.isLoading,S=w.loadingMessage,E=w.minMenuHeight,k=w.maxMenuHeight,_=w.menuIsOpen,C=w.menuPlacement,O=w.menuPosition,M=w.menuPortalTarget,I=w.menuShouldBlockScroll,$=w.menuShouldScrollIntoView,D=w.noOptionsMessage,R=w.onMenuScrollToTop,L=w.onMenuScrollToBottom;if(!_)return null;var N=function(H,G){var W=H.type,X=H.data,ee=H.isDisabled,fe=H.isSelected,be=H.label,ie=H.value,$e=v===X,Be=ee?void 0:function(){return i.onOptionHover(X)},Ve=ee?void 0:function(){return i.selectOption(X)},oi="".concat(i.getElementId("option"),"-").concat(G),vt={id:oi,onClick:Ve,onMouseMove:Be,onMouseOver:Be,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:fe};return b.createElement(p,Q({},h,{innerProps:vt,data:X,isDisabled:ee,isSelected:fe,key:oi,label:be,type:W,value:ie,isFocused:$e,innerRef:$e?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(H.data,"menu"))},F;if(this.hasOptions())F=this.getCategorizedOptions().map(function(z){if(z.type==="group"){var H=z.data,G=z.options,W=z.index,X="".concat(i.getElementId("group"),"-").concat(W),ee="".concat(X,"-heading");return b.createElement(a,Q({},h,{key:X,data:H,options:G,Heading:l,headingProps:{id:ee,data:z.data},label:i.formatGroupLabel(z.data)}),z.options.map(function(fe){return N(fe,"".concat(W,"-").concat(fe.index))}))}else if(z.type==="option")return N(z,"".concat(z.index))});else if(x){var P=S({inputValue:m});if(P===null)return null;F=b.createElement(d,h,P)}else{var j=D({inputValue:m});if(j===null)return null;F=b.createElement(g,h,j)}var A={minMenuHeight:E,maxMenuHeight:k,menuPlacement:C,menuPosition:O,menuShouldScrollIntoView:$},B=b.createElement(qA,Q({},h,A),function(z){var H=z.ref,G=z.placerProps,W=G.placement,X=G.maxHeight;return b.createElement(s,Q({},h,A,{innerRef:H,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:W}),b.createElement(S8,{captureEnabled:f,onTopArrive:R,onBottomArrive:L,lockEnabled:I},function(ee){return b.createElement(u,Q({},h,{innerRef:function(be){i.getMenuListRef(be),ee(be)},innerProps:{role:"listbox","aria-multiselectable":h.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:X,focusedOption:v}),F)}))});return M||O==="fixed"?b.createElement(c,Q({},h,{appendTo:M,controlElement:this.controlRef,menuPlacement:C,menuPosition:O}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return b.createElement(C8,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var g=d.map(function(v){return i.getOptionValue(v)}).join(a);return b.createElement("input",{name:u,type:"hidden",value:g})}else{var p=d.length>0?d.map(function(v,w){return b.createElement("input",{key:"i-".concat(w),name:u,type:"hidden",value:i.getOptionValue(v)})}):b.createElement("input",{name:u,type:"hidden",value:""});return b.createElement("div",null,p)}else{var h=d[0]?this.getOptionValue(d[0]):"";return b.createElement("input",{name:u,type:"hidden",value:h})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return b.createElement(c8,Q({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,c=u.className,d=u.id,g=u.isDisabled,p=u.menuIsOpen,h=this.state.isFocused,v=this.commonProps=this.getCommonProps();return b.createElement(l,Q({},v,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:h}),this.renderLiveRegion(),b.createElement(o,Q({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:h,menuIsOpen:p}),b.createElement(s,Q({},v,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(a,Q({},v,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,g=o.instancePrefix,p=i.options,h=i.value,v=i.menuIsOpen,w=i.inputValue,f=i.isMulti,m=Gv(h),x={};if(a&&(h!==a.value||p!==a.options||v!==a.menuIsOpen||w!==a.inputValue)){var S=v?B8(i,m):[],E=v?s1(Ks(i,m),"".concat(g,"-option")):[],k=l?V8(o,m):null,_=H8(o,S),C=Id(E,_);x={selectValue:m,focusedOption:_,focusedOptionId:C,focusableOptionsWithIds:E,focusedValue:k,clearFocusValueOnUpdate:!1}}var O=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},M=u,I=c&&d;return c&&!I&&(M={value:Ss(f,m,m[0]||null),options:m,action:"initial-input-focus"},I=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(M=null),Z(Z(Z({},x),O),{},{prevProps:i,ariaSelection:M,prevWasFocused:I})}}]),n}(b.Component);B2.defaultProps=z8;var W8=b.forwardRef(function(e,t){var n=aA(e);return b.createElement(B2,Q({ref:t},n))}),Ea=W8;const G8=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Y8=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,q8=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>y.jsxs(G8,{children:[y.jsx(Y8,{children:"Місто"}),y.jsx(Ea,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),X8=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,K8=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Z8=({options:e=[],value:t,onChange:n,selectedCity:r})=>y.jsxs(X8,{children:[y.jsx(K8,{children:"Спосіб доставки"}),y.jsx(Ea,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),jd=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Dd=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Q8=({deliveryMethod:e,officeOptions:t,ukrOfficeOptions:n,selectedOffice:r,selectedUkrOffice:i,setSelectedOffice:o,setSelectedUkrOffice:a})=>e==="nova"?y.jsxs(jd,{children:[y.jsx(Dd,{children:"Відділення Нової пошти"}),y.jsx(Ea,{options:t,onChange:l=>o(l),value:r,placeholder:"Оберіть відділення..."})]}):e==="ukr"?y.jsxs(jd,{children:[y.jsx(Dd,{children:"Відділення Укрпошти"}),y.jsx(Ea,{options:n,onChange:l=>a(l),value:i,placeholder:"Оберіть відділення..."})]}):e==="pickup"?y.jsxs(jd,{children:[y.jsx(Dd,{children:"Самовивіз"}),y.jsxs("div",{style:{backgroundColor:"#f9f9f9",padding:"10px",borderRadius:"6px",border:"1px solid #ddd",fontSize:"14px",color:"#333",lineHeight:"1.4"},children:[y.jsx("p",{children:"Ви обрали самовивіз."}),y.jsx("p",{children:"Адреса магазину: вул. Казармена 6Г, Київ"}),y.jsx("p",{children:"Графік роботи: Вт, Ср, Пт, Сб, Нд — 11:00–20:00; вихідні: Пн, Чт"}),y.jsx("p",{children:"Телефон: +380 99 999 99"})]})]}):null,J8=T.div`
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
`;const eF=T.button`
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
`,tF=T.ul`
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
`,nF=T.li`
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
`,rF=T.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,iF=T.div`
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
`,oF=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>y.jsxs(J8,{children:[y.jsx("h3",{children:"Ваше замовлення"}),y.jsx(tF,{children:e.map((o,a)=>{var l,s;return y.jsxs(nF,{children:[y.jsx(rF,{src:((s=(l=o.images)==null?void 0:l[0])==null?void 0:s.url)||xa,alt:o.name}),y.jsxs(iF,{children:[y.jsx("p",{className:"item-name",children:o.name}),y.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),y.jsxs("span",{className:"item-total",children:[o.price*o.quantity," грн"]})]},`${o.id}-${a}`)})}),y.jsxs("div",{className:"summary-row",children:[y.jsxs("span",{children:["Товари (",n,")"]}),y.jsxs("span",{children:[t," грн"]})]}),y.jsxs("div",{className:"summary-row",children:[y.jsx("span",{children:"Доставка"}),y.jsx("span",{children:"За тарифами перевізника"})]}),y.jsx("hr",{}),y.jsxs("div",{className:"total",children:[y.jsx("span",{children:"Всього до сплати:"}),y.jsxs("span",{children:[t," грн"]})]}),y.jsx(eF,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&y.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var V2={exports:{}};function aF(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ld=aF(b),sF=gu;function lF(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Pp(){return(Pp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function uF(e,t){e.prototype=Object.create(t.prototype),lF(e.prototype.constructor=e,t)}function cF(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function di(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var dF=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],c=0;(s=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},u1=dF;function c1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function fF(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var pF={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},hF="_";function d1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=hF),n==null&&(n=pF),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function At(e,t){return e.permanents.indexOf(t)!==-1}function pc(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(At(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function f1(e,t){return t.split("").every(function(n,r){return At(e,r)||!pc(e,r,n)})}function Lo(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&At(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!At(e,o)&&pc(e,o,a)){i=o+1;break}}return i}function H2(e,t){return Lo(e,t)===e.mask.length}function Rn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Op(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&At(e,t.length);)t+=r[t.length];return t}if(t)return Op(e,Rn(e,""),t,0);for(var o=0;o<r.length;o++)At(e,o)?t+=r[o]:t+=n;return t}function mF(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(c,d){return d<n||i<=d?c:At(e,d)?a[d]:o}).join("");for(var u=i;u<s.length;u++)At(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Rn(e,t)}function Op(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=H2(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;p=u,At(e,g=r)&&p!==i[g];){if(r>=t.length&&(t+=i[r]),c=u,d=r,o&&At(e,d)&&c===o)return!0;if(++r>=i.length)return!1}var c,d,g,p;return!pc(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),Rn(e,t)):o||(t+=u),++r<i.length)}),t}function gF(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;c=s,At(e,u=r)&&c!==i[u];)if(++r>=i.length)return!1;var u,c;return(pc(e,r,s)||s===o)&&r++,r<i.length}),r-l}function vF(e,t){for(var n=t;0<=n;--n)if(!At(e,n))return n;return null}function qo(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!At(e,r))return r;return null}function Rd(e){return e||e===0?e+"":""}function yF(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",c=0,d=0,g=Math.min(i.start,n.start);return n.end>i.start?d=(c=gF(e,r,u=s.slice(i.start,n.end),g))?i.length:0:s.length<r.length&&(d=r.length-s.length),s=r,d&&(d===1&&!i.length&&(g=i.start===n.start?qo(e,n.start):vF(e,n.start)),s=mF(e,s,g,d)),s=Op(e,s,u,g),(g+=c)>=o.length?g=o.length:g<a.length&&!c?g=a.length:g>=a.length&&g<l&&c&&(g=qo(e,g)),u||(u=null),{value:s=Rn(e,s),enteredString:u,selection:{start:g,end:g}}}function xF(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function yt(e){return typeof e=="function"}function bF(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function U2(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function p1(e){return(U2()?bF():function(){return setTimeout(e,1e3/60)})(e)}function Ad(e){(U2()||clearTimeout)(e)}var wF=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=p1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Ad(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var h=sF.findDOMNode(di(di(i))),v=typeof window<"u"&&h instanceof window.Element;if(h&&!v)return null;if(h.nodeName!=="INPUT"&&(h=h.querySelector("input")),!h)throw new Error("react-input-mask: inputComponent doesn't contain input node");return h},i.getInputValue=function(){var h=i.getInputDOMNode();return h?h.value:null},i.setInputValue=function(h){var v=i.getInputDOMNode();v&&(i.value=h,v.value=h)},i.setCursorToEnd=function(){var h=Lo(i.maskOptions,i.value),v=qo(i.maskOptions,h);v!==null&&i.setCursorPosition(v)},i.setSelection=function(h,v,w){w===void 0&&(w={});var f=i.getInputDOMNode(),m=i.isFocused();f&&m&&(w.deferred||c1(f,h,v),i.selectionDeferId!==null&&Ad(i.selectionDeferId),i.selectionDeferId=p1(function(){i.selectionDeferId=null,c1(f,h,v)}),i.previousSelection={start:h,end:v,length:Math.abs(v-h)})},i.getSelection=function(){return fF(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(h){i.setSelection(h,h)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var h=i.maskOptions,v=h.mask,w=h.maskChar,f=h.permanents,m=h.formatChars;return{mask:v,maskChar:w,permanents:f,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:m}},i.isInputAutofilled=function(h,v,w,f){var m=i.getInputDOMNode();try{if(m.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||f.end<w.length&&v.end===h.length},i.onChange=function(h){var v=di(di(i)).beforePasteState,w=di(di(i)).previousSelection,f=i.props.beforeMaskedValueChange,m=i.getInputValue(),x=i.value,S=i.getSelection();i.isInputAutofilled(m,S,x,w)&&(x=Rn(i.maskOptions,""),w={start:0,end:0,length:0}),v&&(w=v.selection,x=v.value,S={start:w.start+m.length,end:w.start+m.length,length:0},m=x.slice(0,w.start)+m+x.slice(w.end),i.beforePasteState=null);var E=yF(i.maskOptions,m,S,x,w),k=E.enteredString,_=E.selection,C=E.value;if(yt(f)){var O=f({value:C,selection:_},{value:x,selection:w},k,i.getBeforeMaskedValueChangeConfig());C=O.value,_=O.selection}i.setInputValue(C),yt(i.props.onChange)&&i.props.onChange(h),i.isWindowsPhoneBrowser?i.setSelection(_.start,_.end,{deferred:!0}):i.setSelection(_.start,_.end)},i.onFocus=function(h){var v=i.props.beforeMaskedValueChange,w=i.maskOptions,f=w.mask,m=w.prefix;if(i.focused=!0,i.mounted=!0,f){if(i.value)Lo(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var x=Rn(i.maskOptions,m),S=Rn(i.maskOptions,x),E=Lo(i.maskOptions,S),k=qo(i.maskOptions,E),_={start:k,end:k};if(yt(v)){var C=v({value:S,selection:_},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=C.value,_=C.selection}var O=S!==i.getInputValue();O&&i.setInputValue(S),O&&yt(i.props.onChange)&&i.props.onChange(h),i.setSelection(_.start,_.end)}i.runSaveSelectionLoop()}yt(i.props.onFocus)&&i.props.onFocus(h)},i.onBlur=function(h){var v=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&f1(i.maskOptions,i.value)){var f="";yt(v)&&(f=v({value:f,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var m=f!==i.getInputValue();m&&i.setInputValue(f),m&&yt(i.props.onChange)&&i.props.onChange(h)}yt(i.props.onBlur)&&i.props.onBlur(h)},i.onMouseDown=function(h){if(!i.focused&&document.addEventListener){i.mouseDownX=h.clientX,i.mouseDownY=h.clientY,i.mouseDownTime=new Date().getTime();var v=function w(f){if(document.removeEventListener("mouseup",w),i.focused){var m=Math.abs(f.clientX-i.mouseDownX),x=Math.abs(f.clientY-i.mouseDownY),S=Math.max(m,x),E=new Date().getTime()-i.mouseDownTime;(S<=10&&E<=200||S<=5&&E<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",v)}yt(i.props.onMouseDown)&&i.props.onMouseDown(h)},i.onPaste=function(h){yt(i.props.onPaste)&&i.props.onPaste(h),h.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(h){i.props.children==null&&yt(i.props.inputRef)&&i.props.inputRef(h)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,c=r.defaultValue,d=r.value;i.maskOptions=d1(o,a,l),c==null&&(c=""),d==null&&(d=c);var g=Rd(d);if(i.maskOptions.mask&&(s||g)&&(g=Rn(i.maskOptions,g),yt(u))){var p=r.value;r.value==null&&(p=c),g=u({value:g,selection:null},{value:p=Rd(p),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=g,i}uF(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=xF(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,c=this.maskOptions,d=a||this.isFocused(),g=this.props.value!=null,p=g?Rd(this.props.value):this.value,h=r?r.start:null;if(this.maskOptions=d1(l,s,u),this.maskOptions.mask){!c.mask&&this.isFocused()&&this.runSaveSelectionLoop();var v=this.maskOptions.mask&&this.maskOptions.mask!==c.mask;if(c.mask||g||(p=this.getInputValue()),(v||this.maskOptions.mask&&(p||d))&&(p=Rn(this.maskOptions,p)),v){var w=Lo(this.maskOptions,p);(h===null||w<h)&&(h=H2(this.maskOptions,p)?w:qo(this.maskOptions,w))}!this.maskOptions.mask||!f1(this.maskOptions,p)||d||g&&this.props.value||(p="");var f={start:h,end:h};if(yt(o)){var m=o({value:p,selection:f},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());p=m.value,f=m.selection}this.value=p;var x=this.getInputValue()!==this.value;x?(this.setInputValue(this.value),this.forceUpdate()):v&&this.forceUpdate();var S=!1;f.start!=null&&f.end!=null&&(S=!r||r.start!==f.start||r.end!==f.end),(S||x)&&this.setSelection(f.start,f.end)}else c.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Ad(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=cF(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){yt(o)||u1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Pp({},a);l.forEach(function(c){return delete s[c]}),r=o(s),l.filter(function(c){return r.props[c]!=null&&r.props[c]!==a[c]}).length&&u1(!1)}else r=Ld.createElement("input",Pp({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Ld.cloneElement(r,u)},t}(Ld.Component),SF=wF;V2.exports=SF;var _F=V2.exports;const EF=$p(_F);T.div`
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
`;const Bd=T.span`
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
`;const CF=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return y.jsxs(y.Fragment,{children:[y.jsx("h3",{children:"Контактні дані"}),y.jsxs(Fd,{children:[y.jsx(Nd,{children:"Прізвище та ім’я"}),y.jsx(zd,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&y.jsx(Bd,{children:n.fullName})]}),y.jsxs(Fd,{children:[y.jsx(Nd,{children:"Номер телефону"}),y.jsx(EF,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>y.jsx(zd,{...i,type:"tel"})}),n.phone&&y.jsx(Bd,{children:n.phone})]}),y.jsxs(Fd,{children:[y.jsx(Nd,{children:"E-mail"}),y.jsx(zd,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&y.jsx(Bd,{children:n.email})]})]})},kF=T.div`
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
`;const TF=T.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,PF=T.div`
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
`;const OF=[{city:"Київ",address:"вул. Хрещатик, 1"},{city:"Київ",address:"вул. Січових Стрільців, 10"},{city:"Львів",address:"просп. Свободи, 5"}],MF=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return y.jsxs("div",{style:{marginBottom:"20px"},children:[y.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),y.jsx(Ea,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&y.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},h1={}.VITE_NP_API_KEY,m1="https://api.novaposhta.ua/v2.0/json/",$F=()=>{const e=Dt(A=>A.cart.items),t=Qi(),n=Kn(),[r,i]=b.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[o,a]=b.useState(""),[l,s]=b.useState(null),[u,c]=b.useState(null),[d,g]=b.useState(null),[p,h]=b.useState(null),[v,w]=b.useState([]),[f,m]=b.useState([]),[x,S]=b.useState([]),[E,k]=b.useState(""),[_,C]=b.useState(null),O=e.reduce((A,B)=>A+B.price*B.quantity,0),M=e.reduce((A,B)=>A+B.quantity,0),$=(()=>{const A=new Date().getFullYear().toString().slice(-2),B=Date.now().toString().slice(-4),z=Math.floor(100+Math.random()*900);return`${A}${B}${z}`})();console.log($),b.useEffect(()=>{if(o.length<2)return;const A=setTimeout(async()=>{const z=await(await fetch(m1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:h1,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:o}})})).json();w(z.data.map(H=>({value:H.Ref,label:H.Description})))},500);return()=>clearTimeout(A)},[o]),b.useEffect(()=>{if(!l||u!=="nova")return;(async()=>{const z=await(await fetch(m1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:h1,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:l.value}})})).json();m(z.data.map(H=>({value:H.Ref,label:H.Description})))})()},[l,u]),b.useEffect(()=>{if(u!=="ukr"||!l)return;const A=OF.filter(B=>B.city===l.label).filter(B=>B.address.toLowerCase().includes(E.toLowerCase())).slice(0,20);S(A.map((B,z)=>({value:z,label:B.address})))},[l,u,E]);const D=A=>{s(A),i(B=>({...B,city:(A==null?void 0:A.label)||"",postOffice:""})),c(null),g(null),h(null)},R=()=>{const A={};return r.fullName.trim().split(" ").length<2&&(A.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)||(A.email="Некоректний email"),r.phone.replace(/\D/g,"").length<12&&(A.phone="Номер неповний"),l||(A.city=!0),u==="nova"&&!d&&(A.postOffice=!0),u==="ukr"&&!p&&(A.postOffice=!0),u||(A.delivery=!0),_||(A.payment=!0),A},L=b.useMemo(R,[r,u,d,p,l,_]),N=Object.keys(L).length===0&&e.length>0,F=async A=>{if(A.preventDefault(),!_){alert("Оберіть спосіб оплати");return}try{if(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:r.fullName,phone:r.phone,email:r.email,city:r.city,products:e==null?void 0:e.map(z=>({id:z.id,name:z.name,quantity:z.quantity,price:z.price})),status_order:"pending",order_number:$,payment_method:_==="liqpay"?"Онлайн (LiqPay)":"Післяплата",delivery_method:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",delivery_address:u==="nova"?d==null?void 0:d.label:u==="ukr"?p==null?void 0:p.label:"Самовивіз"}})}),_==="liqpay"){const z=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:O,order_number:$})}),{data:H,signature:G}=await z.json(),W=document.createElement("form");W.method="POST",W.action="https://www.liqpay.ua/api/3/checkout",W.innerHTML=`
        <input type="hidden" name="data" value="${H}" />
        <input type="hidden" name="signature" value="${G}" />
      `,document.body.appendChild(W),W.requestSubmit();return}const B={...r,name:r.fullName,city:l.label,deliveryMethod:u==="nova"?"Нова Пошта":u==="ukr"?"УкрПошта":"Самовивіз",address:u==="nova"?d==null?void 0:d.label:u==="ukr"?p==null?void 0:p.label:"Самовивіз",products:e==null?void 0:e.map(z=>({id:z.id,name:z.name,quantity:z.quantity,price:z.price})),total:O,order_number:$,delivery_address:u==="nova"?d==null?void 0:d.label:u==="ukr"?p==null?void 0:p.label:"Самовивіз",payment_method:_==="liqpay"?"Онлайн (LiqPay)":"Післяплата"};n(Gh()),t("/order-confirmation",{state:{order:B}})}catch(B){console.error(B),alert("Помилка оформлення")}},P=b.useMemo(()=>{const A=[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}];return(l==null?void 0:l.label)==="Київ"&&A.push({value:"pickup",label:"Самовивіз"}),A},[l]),j=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"}];return y.jsx(kF,{children:y.jsxs(TF,{children:[y.jsxs(PF,{children:[y.jsx(CF,{formData:r,setFormData:i,errors:L}),y.jsx(q8,{cityOptions:v,selectedCity:l,onChange:D,onInputChange:a}),y.jsx(Z8,{options:P,value:u,onChange:c,selectedCity:l}),y.jsx(Q8,{deliveryMethod:u,officeOptions:f,ukrOfficeOptions:x,selectedOffice:d,selectedUkrOffice:p,setSelectedOffice:g,setSelectedUkrOffice:h,setUkrSearch:k}),y.jsx(MF,{options:j,value:_,onChange:C,error:L.payment})]}),y.jsx(oF,{cartItems:e,totalAmount:O,totalQuantity:M,isFormValid:N,handleSubmit:F})]})})},IF=T.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,jF=T.h1`
font-family: var(--second-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,$r=T.p`
font-family: var(--second-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,DF=T.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,LF=T.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,RF=T.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,AF=T.li`
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
`;const FF=T.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,g1=T.button`
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
`,NF=()=>{var g,p;const e=Qi(),t=ti(),[n]=_E(),r=Kn(),i=(g=t.state)==null?void 0:g.order,o=n.get("orderId"),[a,l]=b.useState(i||null),[s,u]=b.useState(!i);b.useEffect(()=>{r(Gh())},[r]),b.useEffect(()=>{i||(o?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${o}&populate=*`).then(h=>h.json()).then(h=>{var v;((v=h.data)==null?void 0:v.length)>0&&l(h.data[0]),u(!1)}).catch(()=>u(!1)):u(!1))},[o,i]),console.log(a);const d=((a==null?void 0:a.products)??[]).reduce((h,v)=>h+Number(v.price||0)*(v.quantity||1),0);return s?y.jsx("div",{children:"Завантаження..."}):a?y.jsxs(IF,{children:[y.jsx(jF,{children:"Дякуємо за ваше замовлення!"}),y.jsxs($r,{children:["Ваше замовлення ",y.jsxs("strong",{children:["№",a.order_number]})," успішно прийняте."]}),y.jsx($r,{children:"Ми зв’яжемось з Вами в найближчий час"}),y.jsxs(DF,{children:[y.jsx(LF,{children:"Деталі замовлення:"}),y.jsx(RF,{children:(p=a.products)==null?void 0:p.map(h=>y.jsxs(AF,{children:[y.jsxs("span",{className:"item-info",children:[h.name," (x",h.quantity,")"]}),y.jsxs("span",{className:"item-price",children:[h.price*h.quantity," грн"]})]},h.id))}),y.jsxs($r,{children:[y.jsx("strong",{children:"На суму:"})," ",d," грн."]}),y.jsxs($r,{children:[y.jsx("strong",{children:"Отрмувач:"})," ",a.name,", ",a.phone,"."]}),y.jsxs($r,{children:[y.jsx("strong",{children:"Спосіб доставки:"})," ",a.deliveryMethod,"."]}),y.jsxs($r,{children:[y.jsx("strong",{children:"Адреса отримання:"})," ",a.city,","," ",a.delivery_address,"."]}),y.jsxs($r,{children:[y.jsx("strong",{children:"Спосіб оплати:"})," ",a.payment_method,"."]})]}),y.jsxs(FF,{children:[y.jsx(g1,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),y.jsx(g1,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):y.jsxs("div",{children:["Замовлення не знайдено",y.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},zF=T.section`
  background-color: var(--second-background);
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
  font-family: var(--main-font);

  @media screen and (min-width: 768px) {
    max-width: 994px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: 1200px) {
   max-width: 1448px;
   
  }
`,VF=T.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,HF=T.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,UF=T.p`

  font-size: 16px;
  color: #666;
`,WF=T.section`
  margin-bottom: 50px;
`,GF=T.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,YF=T.section`
  margin-bottom: 60px;
`,qF=T.h2`
  margin-bottom: 30px;
`,XF=T.div`
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
`,KF=()=>y.jsxs(zF,{children:[y.jsxs(BF,{children:[y.jsxs(VF,{children:[y.jsx(HF,{children:"Про Дідів Хлів"}),y.jsx(UF,{children:"Даємо друге життя якісним велозапчастинам"})]}),y.jsxs(WF,{children:[y.jsx(GF,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),y.jsx(OS,{})]}),y.jsxs(YF,{children:[y.jsx(qF,{children:"Наша майстерня"}),y.jsxs(XF,{children:[y.jsx(_s,{color:"#e2e2e2",children:"Фото майстерні"}),y.jsx(_s,{color:"#d1d1d1",children:"Процес діагностики"}),y.jsx(_s,{color:"#bcbcbc",children:"Склад запчастин"}),y.jsx(_s,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),ZF=()=>{const{pathname:e}=ti();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},QF=T.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,JF=T.div`
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
`,eN=T.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,tN=T.p`
  color: #585555;
  margin-bottom: 40px;
`,nN=T.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,rN=T.div`
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
`,iN=T.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,oN=T.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,aN=T.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,sN=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,v1=T.a`
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
`;const lN=T.div`
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

 
`,uN=()=>y.jsx(QF,{children:y.jsxs(JF,{children:[y.jsx(eN,{children:"Контакти"}),y.jsx(tN,{children:"Зв’яжіться з нами для консультації або замовлення"}),y.jsxs(nN,{children:[y.jsxs(rN,{children:[y.jsxs(Es,{children:[y.jsx("h3",{children:"Адреса"}),y.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),y.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),y.jsxs(Es,{children:[y.jsx("h3",{children:"Телефон"}),y.jsx("p",{children:"+38 (097) 123-45-67"})]}),y.jsxs(Es,{children:[y.jsx("h3",{children:"Email"}),y.jsx("p",{children:"didivhliv.com"})]}),y.jsxs(Es,{children:[y.jsx("h3",{children:"Графік роботи"}),y.jsx("p",{children:"З 11:00 - 20:00"}),y.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),y.jsxs(iN,{children:[y.jsx(oN,{children:"Ми в соцмережах"}),y.jsx(aN,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),y.jsxs(sN,{children:[y.jsxs(v1,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${dn}#icon-instagram`})}),y.jsx("span",{children:"Instagram"})]}),y.jsxs(v1,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${dn}#icon-telegram`})}),y.jsx("span",{children:"Telegram"})]})]}),y.jsx(lN,{children:"Приєднуйся до спільноти!"})]})]})]})}),cN=T.section`
  background-color:  var(--second-background);
`,dN=T.div`
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
  
`,fN=T.h1`

    font-size: 32px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
margin-bottom: 20px;

`,pN=T.div`
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
`,hN=T.div`
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
`,mN=T.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;

`,gN=T.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,vN=T.p`
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
 
`,yN=T.p`
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
`;const xN=T.div.attrs({className:"card-buttons"})`
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
`,bN=T.button`
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
`,wN=T.button`
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
`,SN=T.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
`,Vd=T.button`
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
`,_N=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),i=Dt(h=>h.favorites.items),o=Dt(h=>h.cart.items),[a,l]=b.useState(1),[s,u]=b.useState(1),c=Qi(),d=Kn();b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[a]),b.useEffect(()=>{(async()=>{const v=new Date,w=new Date;w.setDate(v.getDate()-7);const f=w.toISOString();try{r(!0);const m=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${f}&pagination[page]=${a}&pagination[pageSize]=24`);if(!m.ok)throw new Error(`HTTP error! Status: ${m.status}`);const x=await m.json();t(x.data),u(x.meta.pagination.pageCount)}catch(m){console.error("Помилка при завантаженні продуктів:",m)}finally{r(!1)}})()},[a]);const g=(h,v)=>{v.stopPropagation();const w=o.find(m=>m.id===h.id);if((w?w.quantity:0)>=h.stock){J.error(`Вибачте, доступно лише ${h.stock} шт.`);return}d(La({...h,quantity:1})),J.success(`${h.name} додано в кошик!`)},p=(h,v)=>{v.stopPropagation();const w=i.some(f=>f.id===h.id);d(Ba(h)),w?J.warning(`${h.name} видалено з обраного`):J.info(`${h.name} додано в обране`)};return n?y.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:y.jsx(Wu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):y.jsxs(cN,{children:[y.jsxs(dN,{children:[y.jsx(no,{autoClose:1500}),y.jsx(fN,{children:"Нові товари"}),y.jsx(pN,{children:e.map(h=>{var w,f;const v=i.some(m=>m.id===h.id);return y.jsxs(hN,{onClick:()=>c(`/product/${h.id}`),children:[y.jsx(mN,{src:(f=(w=h.images)==null?void 0:w[0])==null?void 0:f.url,alt:h.name}),y.jsx(vN,{children:h.name}),y.jsxs(gN,{children:[y.jsxs(yN,{children:[h.price," грн"]}),y.jsxs(xN,{children:[y.jsx(bN,{onClick:m=>g(h,m),children:y.jsx(ja,{size:24,color:"black"})}),y.jsx(wN,{onClick:m=>p(h,m),children:y.jsx(zh,{size:24,fill:v?"#ff4d4f":"none",color:v?"#ff4d4f":"#000000"})})]})]})]},h.id)})}),y.jsxs(SN,{children:[y.jsx(Vd,{onClick:()=>l(h=>Math.max(h-1,1)),disabled:a===1,children:"Назад"}),Array.from({length:s},(h,v)=>y.jsx(Vd,{onClick:()=>l(v+1),active:a===v+1,children:v+1},v)),y.jsx(Vd,{onClick:()=>l(h=>Math.min(h+1,s)),disabled:a===s,children:"Вперед"})]})]})," "]})};function EN(){return y.jsxs(g3,{children:[y.jsx(Q5,{}),y.jsx(ZF,{}),y.jsx(b.Suspense,{fallback:y.jsx(K5,{}),children:y.jsx(fE,{children:y.jsxs(ut,{path:"/",element:y.jsx(nO,{}),children:[y.jsx(ut,{index:!0,element:y.jsx(GI,{})}),y.jsx(ut,{path:"catalog",element:y.jsx(c3,{})}),y.jsx(ut,{path:"/catalog/:category",element:y.jsx(Xj,{})}),y.jsx(ut,{path:"/product/:id",element:y.jsx(QL,{})}),y.jsx(ut,{path:"cart",element:y.jsx(CR,{})}),y.jsx(ut,{path:"favorite",element:y.jsx(YR,{})}),y.jsx(ut,{path:"/catalog/new",element:y.jsx(_N,{})}),y.jsx(ut,{path:"checkout",element:y.jsx($F,{})}),y.jsx(ut,{path:"/order-confirmation",element:y.jsx(NF,{})}),y.jsx(ut,{path:"about",element:y.jsx(KF,{})}),y.jsx(ut,{path:"contacts",element:y.jsx(uN,{})}),y.jsx(ut,{path:"delivery",element:y.jsx(JR,{})}),y.jsx(ut,{path:"*",element:y.jsx(m3,{})})]})})})]})}var jm="persist:",W2="persist/FLUSH",Dm="persist/REHYDRATE",G2="persist/PAUSE",Y2="persist/PERSIST",q2="persist/PURGE",X2="persist/REGISTER",CN=-1;function Zs(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Zs=function(n){return typeof n}:Zs=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Zs(e)}function y1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function kN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?y1(n,!0).forEach(function(r){TN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function TN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function PN(e,t,n,r){r.debug;var i=kN({},n);return e&&Zs(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function ON(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:jm).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(E){return E}:typeof e.serialize=="function"?l=e.serialize:l=MN;var s=e.writeFailHandler||null,u={},c={},d=[],g=null,p=null,h=function(E){Object.keys(E).forEach(function(k){f(k)&&u[k]!==E[k]&&d.indexOf(k)===-1&&d.push(k)}),Object.keys(u).forEach(function(k){E[k]===void 0&&f(k)&&d.indexOf(k)===-1&&u[k]!==void 0&&d.push(k)}),g===null&&(g=setInterval(v,i)),u=E};function v(){if(d.length===0){g&&clearInterval(g),g=null;return}var S=d.shift(),E=r.reduce(function(k,_){return _.in(k,S,u)},u[S]);if(E!==void 0)try{c[S]=l(E)}catch(k){console.error("redux-persist/createPersistoid: error serializing state",k)}else delete c[S];d.length===0&&w()}function w(){Object.keys(c).forEach(function(S){u[S]===void 0&&delete c[S]}),p=a.setItem(o,l(c)).catch(m)}function f(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function m(S){s&&s(S)}var x=function(){for(;d.length!==0;)v();return p||Promise.resolve()};return{update:h,flush:x}}function MN(e){return JSON.stringify(e)}function $N(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:jm).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=IN,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,c){return c.out(u,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function IN(e){return JSON.parse(e)}function jN(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:jm).concat(e.key);return t.removeItem(n,DN)}function DN(e){}function x1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function On(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?x1(n,!0).forEach(function(r){LN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function LN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function RN(e,t){if(e==null)return{};var n=AN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function AN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var FN=5e3;function K2(e,t){var n=e.version!==void 0?e.version:CN;e.debug;var r=e.stateReconciler===void 0?PN:e.stateReconciler,i=e.getStoredState||$N,o=e.timeout!==void 0?e.timeout:FN,a=null,l=!1,s=!0,u=function(d){return d._persist.rehydrated&&a&&!s&&a.update(d),d};return function(c,d){var g=c||{},p=g._persist,h=RN(g,["_persist"]),v=h;if(d.type===Y2){var w=!1,f=function(C,O){w||(d.rehydrate(e.key,C,O),w=!0)};if(o&&setTimeout(function(){!w&&f(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=ON(e)),p)return On({},t(v,d),{_persist:p});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(_){var C=e.migrate||function(O,M){return Promise.resolve(O)};C(_,n).then(function(O){f(O)},function(O){f(void 0,O)})},function(_){f(void 0,_)}),On({},t(v,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===q2)return l=!0,d.result(jN(e)),On({},t(v,d),{_persist:p});if(d.type===W2)return d.result(a&&a.flush()),On({},t(v,d),{_persist:p});if(d.type===G2)s=!0;else if(d.type===Dm){if(l)return On({},v,{_persist:On({},p,{rehydrated:!0})});if(d.key===e.key){var m=t(v,d),x=d.payload,S=r!==!1&&x!==void 0?r(x,c,m,e):m,E=On({},S,{_persist:On({},p,{rehydrated:!0})});return u(E)}}}if(!p)return t(c,d);var k=t(v,d);return k===v?c:u(On({},k,{_persist:p}))}}function b1(e){return BN(e)||zN(e)||NN()}function NN(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function zN(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function BN(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function w1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Mp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?w1(n,!0).forEach(function(r){VN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function VN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z2={registry:[],bootstrapped:!1},HN=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Z2,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case X2:return Mp({},t,{registry:[].concat(b1(t.registry),[n.key])});case Dm:var r=t.registry.indexOf(n.key),i=b1(t.registry);return i.splice(r,1),Mp({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function UN(e,t,n){var r=n||!1,i=Vh(HN,Z2,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:X2,key:u})},a=function(u,c,d){var g={type:Dm,payload:c,err:d,key:u};e.dispatch(g),i.dispatch(g),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Mp({},i,{purge:function(){var u=[];return e.dispatch({type:q2,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:W2,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){e.dispatch({type:G2})},persist:function(){e.dispatch({type:Y2,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var Lm={},Rm={};Rm.__esModule=!0;Rm.default=YN;function Qs(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Qs=function(n){return typeof n}:Qs=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Qs(e)}function Hd(){}var WN={getItem:Hd,setItem:Hd,removeItem:Hd};function GN(e){if((typeof self>"u"?"undefined":Qs(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function YN(e){var t="".concat(e,"Storage");return GN(t)?self[t]:WN}Lm.__esModule=!0;Lm.default=KN;var qN=XN(Rm);function XN(e){return e&&e.__esModule?e:{default:e}}function KN(e){var t=(0,qN.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var Am=void 0,ZN=QN(Lm);function QN(e){return e&&e.__esModule?e:{default:e}}var JN=(0,ZN.default)("local");Am=JN;const ez={key:"cart",storage:Am},tz={key:"favorites",storage:Am},nz=K2(ez,lM),rz=K2(tz,Yj),Q2=GO({reducer:{cart:nz,favorites:rz},middleware:e=>e({serializableCheck:!1})});UN(Q2);Xd.createRoot(document.getElementById("root")).render(y.jsx(hP,{store:Q2,children:y.jsx(q.StrictMode,{children:y.jsx(xE,{basename:"/Didiv/",children:y.jsx(EN,{})})})}));
