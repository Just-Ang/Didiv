function Q2(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function kt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var w1={exports:{}},Jl={},S1={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),J2=Symbol.for("react.portal"),e_=Symbol.for("react.fragment"),t_=Symbol.for("react.strict_mode"),n_=Symbol.for("react.profiler"),r_=Symbol.for("react.provider"),i_=Symbol.for("react.context"),o_=Symbol.for("react.forward_ref"),a_=Symbol.for("react.suspense"),s_=Symbol.for("react.memo"),l_=Symbol.for("react.lazy"),Nm=Symbol.iterator;function u_(e){return e===null||typeof e!="object"?null:(e=Nm&&e[Nm]||e["@@iterator"],typeof e=="function"?e:null)}var _1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E1=Object.assign,C1={};function Xi(e,t,n){this.props=e,this.context=t,this.refs=C1,this.updater=n||_1}Xi.prototype.isReactComponent={};Xi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function k1(){}k1.prototype=Xi.prototype;function Ip(e,t,n){this.props=e,this.context=t,this.refs=C1,this.updater=n||_1}var jp=Ip.prototype=new k1;jp.constructor=Ip;E1(jp,Xi.prototype);jp.isPureReactComponent=!0;var zm=Array.isArray,T1=Object.prototype.hasOwnProperty,Dp={current:null},P1={key:!0,ref:!0,__self:!0,__source:!0};function O1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)T1.call(t,r)&&!P1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ca,type:e,key:o,ref:a,props:i,_owner:Dp.current}}function c_(e,t){return{$$typeof:Ca,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ca}function d_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bm=/\/+/g;function vc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?d_(""+e.key):t.toString(36)}function Cs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ca:case J2:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+vc(a,0):r,zm(i)?(n="",e!=null&&(n=e.replace(Bm,"$&/")+"/"),Cs(i,t,n,"",function(u){return u})):i!=null&&(Lp(i)&&(i=c_(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Bm,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",zm(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+vc(o,l);a+=Cs(o,t,n,s,i)}else if(s=u_(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+vc(o,l++),a+=Cs(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ga(e,t,n){if(e==null)return e;var r=[],i=0;return Cs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function f_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},ks={transition:null},p_={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:ks,ReactCurrentOwner:Dp};re.Children={map:Ga,forEach:function(e,t,n){Ga(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ga(e,function(){t++}),t},toArray:function(e){return Ga(e,function(t){return t})||[]},only:function(e){if(!Lp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Xi;re.Fragment=e_;re.Profiler=n_;re.PureComponent=Ip;re.StrictMode=t_;re.Suspense=a_;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p_;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=E1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Dp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)T1.call(t,s)&&!P1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ca,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:i_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:r_,_context:e},e.Consumer=e};re.createElement=O1;re.createFactory=function(e){var t=O1.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:o_,render:e}};re.isValidElement=Lp;re.lazy=function(e){return{$$typeof:l_,_payload:{_status:-1,_result:e},_init:f_}};re.memo=function(e,t){return{$$typeof:s_,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=ks.transition;ks.transition={};try{e()}finally{ks.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return ht.current.useCallback(e,t)};re.useContext=function(e){return ht.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};re.useEffect=function(e,t){return ht.current.useEffect(e,t)};re.useId=function(){return ht.current.useId()};re.useImperativeHandle=function(e,t,n){return ht.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return ht.current.useMemo(e,t)};re.useReducer=function(e,t,n){return ht.current.useReducer(e,t,n)};re.useRef=function(e){return ht.current.useRef(e)};re.useState=function(e){return ht.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return ht.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return ht.current.useTransition()};re.version="18.2.0";S1.exports=re;var b=S1.exports;const q=$p(b),Ud=Q2({__proto__:null,default:q},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_=b,m_=Symbol.for("react.element"),g_=Symbol.for("react.fragment"),v_=Object.prototype.hasOwnProperty,y_=h_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x_={key:!0,ref:!0,__self:!0,__source:!0};function M1(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)v_.call(t,r)&&!x_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:m_,type:e,key:o,ref:a,props:i,_owner:y_.current}}Jl.Fragment=g_;Jl.jsx=M1;Jl.jsxs=M1;w1.exports=Jl;var y=w1.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xo.apply(this,arguments)}var ar;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ar||(ar={}));const Vm="popstate";function b_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Wd("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Js(i)}return S_(t,n,null,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function w_(){return Math.random().toString(36).substr(2,8)}function Hm(e,t){return{usr:e.state,key:e.key,idx:t}}function Wd(e,t,n,r){return n===void 0&&(n=null),Xo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ki(t):t,{state:n,key:t&&t.key||r||w_()})}function Js(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ki(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function S_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=ar.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(Xo({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){l=ar.Pop;let w=c(),p=w==null?null:w-u;u=w,s&&s({action:l,location:v.location,delta:p})}function m(w,p){l=ar.Push;let g=Wd(v.location,w,p);n&&n(g,w),u=c()+1;let x=Hm(g,u),S=v.createHref(g);try{a.pushState(x,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}o&&s&&s({action:l,location:v.location,delta:1})}function f(w,p){l=ar.Replace;let g=Wd(v.location,w,p);n&&n(g,w),u=c();let x=Hm(g,u),S=v.createHref(g);a.replaceState(x,"",S),o&&s&&s({action:l,location:v.location,delta:0})}function h(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof w=="string"?w:Js(w);return Le(p,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,p)}let v={get action(){return l},get location(){return e(i,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Vm,d),s=w,()=>{i.removeEventListener(Vm,d),s=null}},createHref(w){return t(i,w)},createURL:h,encodeLocation(w){let p=h(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:f,go(w){return a.go(w)}};return v}var Um;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Um||(Um={}));function __(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ki(t):t,i=Ap(r.pathname||"/",n);if(i==null)return null;let o=$1(e);E_(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=j_(o[l],R_(i));return a}function $1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Le(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=dr([r,s.relativePath]),c=n.concat(s);o.children&&o.children.length>0&&(Le(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),$1(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:$_(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of I1(o.path))i(o,a,s)}),t}function I1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=I1(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function E_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:I_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const C_=/^:\w+$/,k_=3,T_=2,P_=1,O_=10,M_=-2,Wm=e=>e==="*";function $_(e,t){let n=e.split("/"),r=n.length;return n.some(Wm)&&(r+=M_),t&&(r+=T_),n.filter(i=>!Wm(i)).reduce((i,o)=>i+(C_.test(o)?k_:o===""?P_:O_),r)}function I_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function j_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=D_({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;o.push({params:r,pathname:dr([i,c.pathname]),pathnameBase:z_(dr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=dr([i,c.pathnameBase]))}return o}function D_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=L_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let m=l[d]||"";a=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[c]=A_(l[d]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function L_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Rp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function R_(e){try{return decodeURI(e)}catch(t){return Rp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function A_(e,t){try{return decodeURIComponent(e)}catch(n){return Rp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ap(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function F_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ki(e):e;return{pathname:n?n.startsWith("/")?n:N_(n,t):t,search:B_(r),hash:V_(i)}}function N_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function j1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function D1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ki(e):(i=Xo({},e),Le(!i.pathname||!i.pathname.includes("?"),yc("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),yc("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),yc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),d-=1;i.pathname=m.join("/")}l=d>=0?t[d]:"/"}let s=F_(i,l),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const dr=e=>e.join("/").replace(/\/\/+/g,"/"),z_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),B_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,V_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function H_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const L1=["post","put","patch","delete"];new Set(L1);const U_=["get",...L1];new Set(U_);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},el.apply(this,arguments)}const Fp=b.createContext(null),W_=b.createContext(null),Zi=b.createContext(null),eu=b.createContext(null),qn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),R1=b.createContext(null);function G_(e,t){let{relative:n}=t===void 0?{}:t;ka()||Le(!1);let{basename:r,navigator:i}=b.useContext(Zi),{hash:o,pathname:a,search:l}=N1(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:dr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function ka(){return b.useContext(eu)!=null}function ei(){return ka()||Le(!1),b.useContext(eu).location}function A1(e){b.useContext(Zi).static||b.useLayoutEffect(e)}function Qi(){let{isDataRoute:e}=b.useContext(qn);return e?sE():Y_()}function Y_(){ka()||Le(!1);let e=b.useContext(Fp),{basename:t,navigator:n}=b.useContext(Zi),{matches:r}=b.useContext(qn),{pathname:i}=ei(),o=JSON.stringify(j1(r).map(s=>s.pathnameBase)),a=b.useRef(!1);return A1(()=>{a.current=!0}),b.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let c=D1(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:dr([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}const q_=b.createContext(null);function X_(e){let t=b.useContext(qn).outlet;return t&&b.createElement(q_.Provider,{value:e},t)}function F1(){let{matches:e}=b.useContext(qn),t=e[e.length-1];return t?t.params:{}}function N1(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(qn),{pathname:i}=ei(),o=JSON.stringify(j1(r).map(a=>a.pathnameBase));return b.useMemo(()=>D1(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function K_(e,t){return Z_(e,t)}function Z_(e,t,n){ka()||Le(!1);let{navigator:r}=b.useContext(Zi),{matches:i}=b.useContext(qn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=ei(),u;if(t){var c;let v=typeof t=="string"?Ki(t):t;l==="/"||(c=v.pathname)!=null&&c.startsWith(l)||Le(!1),u=v}else u=s;let d=u.pathname||"/",m=l==="/"?d:d.slice(l.length)||"/",f=__(e,{pathname:m}),h=nE(f&&f.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:dr([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:dr([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&h?b.createElement(eu.Provider,{value:{location:el({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ar.Pop}},h):h}function Q_(){let e=aE(),t=H_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const J_=b.createElement(Q_,null);class eE extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(qn.Provider,{value:this.props.routeContext},b.createElement(R1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tE(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Fp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(qn.Provider,{value:t},r)}function nE(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||Le(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let c=s.route.id?a==null?void 0:a[s.route.id]:null,d=null;n&&(d=s.route.errorElement||J_);let m=t.concat(o.slice(0,u+1)),f=()=>{let h;return c?h=d:s.route.Component?h=b.createElement(s.route.Component,null):s.route.element?h=s.route.element:h=l,b.createElement(tE,{match:s,routeContext:{outlet:l,matches:m,isDataRoute:n!=null},children:h})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?b.createElement(eE,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var z1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(z1||{}),tl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(tl||{});function rE(e){let t=b.useContext(Fp);return t||Le(!1),t}function iE(e){let t=b.useContext(W_);return t||Le(!1),t}function oE(e){let t=b.useContext(qn);return t||Le(!1),t}function B1(e){let t=oE(),n=t.matches[t.matches.length-1];return n.route.id||Le(!1),n.route.id}function aE(){var e;let t=b.useContext(R1),n=iE(tl.UseRouteError),r=B1(tl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function sE(){let{router:e}=rE(z1.UseNavigateStable),t=B1(tl.UseNavigateStable),n=b.useRef(!1);return A1(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,el({fromRouteId:t},o)))},[e,t])}function lE(e){return X_(e.context)}function ut(e){Le(!1)}function uE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ar.Pop,navigator:o,static:a=!1}=e;ka()&&Le(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=Ki(r));let{pathname:u="/",search:c="",hash:d="",state:m=null,key:f="default"}=r,h=b.useMemo(()=>{let v=Ap(u,l);return v==null?null:{location:{pathname:v,search:c,hash:d,state:m,key:f},navigationType:i}},[l,u,c,d,m,f,i]);return h==null?null:b.createElement(Zi.Provider,{value:s},b.createElement(eu.Provider,{children:n,value:h}))}function cE(e){let{children:t,location:n}=e;return K_(Gd(t),n)}new Promise(()=>{});function Gd(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Gd(r.props.children,o));return}r.type!==ut&&Le(!1),!r.props.index||!r.props.children||Le(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Gd(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yd(){return Yd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yd.apply(this,arguments)}function dE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function fE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function pE(e,t){return e.button===0&&(!t||t==="_self")&&!fE(e)}function qd(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function hE(e,t){let n=qd(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const mE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],gE="startTransition",Gm=Ud[gE];function vE(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=b_({window:i,v5Compat:!0}));let a=o.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=b.useCallback(d=>{u&&Gm?Gm(()=>s(d)):s(d)},[s,u]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(uE,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const yE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Me=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:c}=t,d=dE(t,mE),{basename:m}=b.useContext(Zi),f,h=!1;if(typeof u=="string"&&xE.test(u)&&(f=u,yE))try{let g=new URL(window.location.href),x=u.startsWith("//")?new URL(g.protocol+u):new URL(u),S=Ap(x.pathname,m);x.origin===g.origin&&S!=null?u=S+x.search+x.hash:h=!0}catch{}let v=G_(u,{relative:i}),w=bE(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:i});function p(g){r&&r(g),g.defaultPrevented||w(g)}return b.createElement("a",Yd({},d,{href:f||v,onClick:h||o?r:p,ref:n,target:s}))});var Ym;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Ym||(Ym={}));var qm;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qm||(qm={}));function bE(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Qi(),s=ei(),u=N1(e,{relative:a});return b.useCallback(c=>{if(pE(c,n)){c.preventDefault();let d=r!==void 0?r:Js(s)===Js(u);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}function wE(e){let t=b.useRef(qd(e)),n=b.useRef(!1),r=ei(),i=b.useMemo(()=>hE(r.search,n.current?null:t.current),[r.search]),o=Qi(),a=b.useCallback((l,s)=>{const u=qd(typeof l=="function"?l(i):l);n.current=!0,o("?"+u,s)},[o,i]);return[i,a]}var Xd={},V1={exports:{}},Ft={},H1={exports:{}},U1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,M){var N=P.length;P.push(M);e:for(;0<N;){var B=N-1>>>1,z=P[B];if(0<i(z,M))P[B]=M,P[N]=z,N=B;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var M=P[0],N=P.pop();if(N!==M){P[0]=N;e:for(var B=0,z=P.length,H=z>>>1;B<H;){var U=2*(B+1)-1,Y=P[U],X=U+1,ee=P[X];if(0>i(Y,N))X<z&&0>i(ee,Y)?(P[B]=ee,P[X]=N,B=X):(P[B]=Y,P[U]=N,B=U);else if(X<z&&0>i(ee,N))P[B]=ee,P[X]=N,B=X;else break e}}return M}function i(P,M){var N=P.sortIndex-M.sortIndex;return N!==0?N:P.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,d=null,m=3,f=!1,h=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=P)r(u),M.sortIndex=M.expirationTime,t(s,M);else break;M=n(u)}}function S(P){if(v=!1,x(P),!h)if(n(s)!==null)h=!0,F(E);else{var M=n(u);M!==null&&A(S,M.startTime-P)}}function E(P,M){h=!1,v&&(v=!1,p(C),C=-1),f=!0;var N=m;try{for(x(M),d=n(s);d!==null&&(!(d.expirationTime>M)||P&&!j());){var B=d.callback;if(typeof B=="function"){d.callback=null,m=d.priorityLevel;var z=B(d.expirationTime<=M);M=e.unstable_now(),typeof z=="function"?d.callback=z:d===n(s)&&r(s),x(M)}else r(s);d=n(s)}if(d!==null)var H=!0;else{var U=n(u);U!==null&&A(S,U.startTime-M),H=!1}return H}finally{d=null,m=N,f=!1}}var k=!1,_=null,C=-1,O=5,$=-1;function j(){return!(e.unstable_now()-$<O)}function I(){if(_!==null){var P=e.unstable_now();$=P;var M=!0;try{M=_(!0,P)}finally{M?D():(k=!1,_=null)}}else k=!1}var D;if(typeof g=="function")D=function(){g(I)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,L=R.port2;R.port1.onmessage=I,D=function(){L.postMessage(null)}}else D=function(){w(I,0)};function F(P){_=P,k||(k=!0,D())}function A(P,M){C=w(function(){P(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){h||f||(h=!0,F(E))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var N=m;m=M;try{return P()}finally{m=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,M){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var N=m;m=P;try{return M()}finally{m=N}},e.unstable_scheduleCallback=function(P,M,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,P){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=N+z,P={id:c++,callback:M,priorityLevel:P,startTime:N,expirationTime:z,sortIndex:-1},N>B?(P.sortIndex=N,t(u,P),n(s)===null&&P===n(u)&&(v?(p(C),C=-1):v=!0,A(S,N-B))):(P.sortIndex=z,t(s,P),h||f||(h=!0,F(E))),P},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(P){var M=m;return function(){var N=m;m=M;try{return P.apply(this,arguments)}finally{m=N}}}})(U1);H1.exports=U1;var SE=H1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W1=b,Rt=SE;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var G1=new Set,Ko={};function ti(e,t){ji(e,t),ji(e+"Capture",t)}function ji(e,t){for(Ko[e]=t,e=0;e<t.length;e++)G1.add(t[e])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kd=Object.prototype.hasOwnProperty,_E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xm={},Km={};function EE(e){return Kd.call(Km,e)?!0:Kd.call(Xm,e)?!1:_E.test(e)?Km[e]=!0:(Xm[e]=!0,!1)}function CE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kE(e,t,n,r){if(t===null||typeof t>"u"||CE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function mt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qe[e]=new mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Qe[t]=new mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qe[e]=new mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qe[e]=new mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qe[e]=new mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qe[e]=new mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qe[e]=new mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qe[e]=new mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qe[e]=new mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Np=/[\-:]([a-z])/g;function zp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Np,zp);Qe[t]=new mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Np,zp);Qe[t]=new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Np,zp);Qe[t]=new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qe[e]=new mt(e,1,!1,e.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qe[e]=new mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bp(e,t,n,r){var i=Qe.hasOwnProperty(t)?Qe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(kE(t,n,i,r)&&(n=null),r||i===null?EE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xn=W1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),pi=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),Vp=Symbol.for("react.strict_mode"),Zd=Symbol.for("react.profiler"),Y1=Symbol.for("react.provider"),q1=Symbol.for("react.context"),Hp=Symbol.for("react.forward_ref"),Qd=Symbol.for("react.suspense"),Jd=Symbol.for("react.suspense_list"),Up=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),X1=Symbol.for("react.offscreen"),Zm=Symbol.iterator;function po(e){return e===null||typeof e!="object"?null:(e=Zm&&e[Zm]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,xc;function To(e){if(xc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xc=t&&t[1]||""}return`
`+xc+e}var bc=!1;function wc(e,t){if(!e||bc)return"";bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{bc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?To(e):""}function TE(e){switch(e.tag){case 5:return To(e.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return e=wc(e.type,!1),e;case 11:return e=wc(e.type.render,!1),e;case 1:return e=wc(e.type,!0),e;default:return""}}function ef(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hi:return"Fragment";case pi:return"Portal";case Zd:return"Profiler";case Vp:return"StrictMode";case Qd:return"Suspense";case Jd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case q1:return(e.displayName||"Context")+".Consumer";case Y1:return(e._context.displayName||"Context")+".Provider";case Hp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Up:return t=e.displayName||null,t!==null?t:ef(e.type)||"Memo";case nr:t=e._payload,e=e._init;try{return ef(e(t))}catch{}}return null}function PE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ef(t);case 8:return t===Vp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function K1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function OE(e){var t=K1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qa(e){e._valueTracker||(e._valueTracker=OE(e))}function Z1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=K1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function tf(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Q1(e,t){t=t.checked,t!=null&&Bp(e,"checked",t,!1)}function nf(e,t){Q1(e,t);var n=wr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?rf(e,t.type,n):t.hasOwnProperty("defaultValue")&&rf(e,t.type,wr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Jm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function rf(e,t,n){(t!=="number"||nl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Po=Array.isArray;function Ci(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function of(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function eg(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(Po(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wr(n)}}function J1(e,t){var n=wr(t.value),r=wr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function tg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ey(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function af(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ey(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xa,ty=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ME=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(e){ME.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ro[t]=Ro[e]})});function ny(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ro.hasOwnProperty(e)&&Ro[e]?(""+t).trim():t+"px"}function ry(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ny(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var $E=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sf(e,t){if(t){if($E[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function lf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uf=null;function Wp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cf=null,ki=null,Ti=null;function ng(e){if(e=Oa(e)){if(typeof cf!="function")throw Error(V(280));var t=e.stateNode;t&&(t=ou(t),cf(e.stateNode,e.type,t))}}function iy(e){ki?Ti?Ti.push(e):Ti=[e]:ki=e}function oy(){if(ki){var e=ki,t=Ti;if(Ti=ki=null,ng(e),t)for(e=0;e<t.length;e++)ng(t[e])}}function ay(e,t){return e(t)}function sy(){}var Sc=!1;function ly(e,t,n){if(Sc)return e(t,n);Sc=!0;try{return ay(e,t,n)}finally{Sc=!1,(ki!==null||Ti!==null)&&(sy(),oy())}}function Qo(e,t){var n=e.stateNode;if(n===null)return null;var r=ou(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var df=!1;if(Vn)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){df=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{df=!1}function IE(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ao=!1,rl=null,il=!1,ff=null,jE={onError:function(e){Ao=!0,rl=e}};function DE(e,t,n,r,i,o,a,l,s){Ao=!1,rl=null,IE.apply(jE,arguments)}function LE(e,t,n,r,i,o,a,l,s){if(DE.apply(this,arguments),Ao){if(Ao){var u=rl;Ao=!1,rl=null}else throw Error(V(198));il||(il=!0,ff=u)}}function ni(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function uy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rg(e){if(ni(e)!==e)throw Error(V(188))}function RE(e){var t=e.alternate;if(!t){if(t=ni(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return rg(i),e;if(o===r)return rg(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function cy(e){return e=RE(e),e!==null?dy(e):null}function dy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=dy(e);if(t!==null)return t;e=e.sibling}return null}var fy=Rt.unstable_scheduleCallback,ig=Rt.unstable_cancelCallback,AE=Rt.unstable_shouldYield,FE=Rt.unstable_requestPaint,Oe=Rt.unstable_now,NE=Rt.unstable_getCurrentPriorityLevel,Gp=Rt.unstable_ImmediatePriority,py=Rt.unstable_UserBlockingPriority,ol=Rt.unstable_NormalPriority,zE=Rt.unstable_LowPriority,hy=Rt.unstable_IdlePriority,tu=null,Sn=null;function BE(e){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(tu,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:UE,VE=Math.log,HE=Math.LN2;function UE(e){return e>>>=0,e===0?32:31-(VE(e)/HE|0)|0}var Ka=64,Za=4194304;function Oo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function al(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Oo(l):(o&=a,o!==0&&(r=Oo(o)))}else a=n&~i,a!==0?r=Oo(a):o!==0&&(r=Oo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-an(t),i=1<<n,r|=e[n],t&=~i;return r}function WE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-an(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=WE(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function pf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function my(){var e=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),e}function _c(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ta(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=n}function YE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-an(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Yp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var he=0;function gy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vy,qp,yy,xy,by,hf=!1,Qa=[],fr=null,pr=null,hr=null,Jo=new Map,ea=new Map,ir=[],qE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function og(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(t.pointerId)}}function mo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Oa(t),t!==null&&qp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function XE(e,t,n,r,i){switch(t){case"focusin":return fr=mo(fr,e,t,n,r,i),!0;case"dragenter":return pr=mo(pr,e,t,n,r,i),!0;case"mouseover":return hr=mo(hr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Jo.set(o,mo(Jo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ea.set(o,mo(ea.get(o)||null,e,t,n,r,i)),!0}return!1}function wy(e){var t=Ar(e.target);if(t!==null){var n=ni(t);if(n!==null){if(t=n.tag,t===13){if(t=uy(n),t!==null){e.blockedOn=t,by(e.priority,function(){yy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);uf=r,n.target.dispatchEvent(r),uf=null}else return t=Oa(n),t!==null&&qp(t),e.blockedOn=n,!1;t.shift()}return!0}function ag(e,t,n){Ts(e)&&n.delete(t)}function KE(){hf=!1,fr!==null&&Ts(fr)&&(fr=null),pr!==null&&Ts(pr)&&(pr=null),hr!==null&&Ts(hr)&&(hr=null),Jo.forEach(ag),ea.forEach(ag)}function go(e,t){e.blockedOn===t&&(e.blockedOn=null,hf||(hf=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,KE)))}function ta(e){function t(i){return go(i,e)}if(0<Qa.length){go(Qa[0],e);for(var n=1;n<Qa.length;n++){var r=Qa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fr!==null&&go(fr,e),pr!==null&&go(pr,e),hr!==null&&go(hr,e),Jo.forEach(t),ea.forEach(t),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)wy(n),n.blockedOn===null&&ir.shift()}var Pi=Xn.ReactCurrentBatchConfig,sl=!0;function ZE(e,t,n,r){var i=he,o=Pi.transition;Pi.transition=null;try{he=1,Xp(e,t,n,r)}finally{he=i,Pi.transition=o}}function QE(e,t,n,r){var i=he,o=Pi.transition;Pi.transition=null;try{he=4,Xp(e,t,n,r)}finally{he=i,Pi.transition=o}}function Xp(e,t,n,r){if(sl){var i=mf(e,t,n,r);if(i===null)jc(e,t,r,ll,n),og(e,r);else if(XE(i,e,t,n,r))r.stopPropagation();else if(og(e,r),t&4&&-1<qE.indexOf(e)){for(;i!==null;){var o=Oa(i);if(o!==null&&vy(o),o=mf(e,t,n,r),o===null&&jc(e,t,r,ll,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else jc(e,t,r,null,n)}}var ll=null;function mf(e,t,n,r){if(ll=null,e=Wp(r),e=Ar(e),e!==null)if(t=ni(e),t===null)e=null;else if(n=t.tag,n===13){if(e=uy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ll=e,null}function Sy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NE()){case Gp:return 1;case py:return 4;case ol:case zE:return 16;case hy:return 536870912;default:return 16}default:return 16}}var sr=null,Kp=null,Ps=null;function _y(){if(Ps)return Ps;var e,t=Kp,n=t.length,r,i="value"in sr?sr.value:sr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ps=i.slice(e,1<r?1-r:void 0)}function Os(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ja(){return!0}function sg(){return!1}function Nt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ja:sg,this.isPropagationStopped=sg,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),t}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zp=Nt(Ji),Pa=ke({},Ji,{view:0,detail:0}),JE=Nt(Pa),Ec,Cc,vo,nu=ke({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vo&&(vo&&e.type==="mousemove"?(Ec=e.screenX-vo.screenX,Cc=e.screenY-vo.screenY):Cc=Ec=0,vo=e),Ec)},movementY:function(e){return"movementY"in e?e.movementY:Cc}}),lg=Nt(nu),eC=ke({},nu,{dataTransfer:0}),tC=Nt(eC),nC=ke({},Pa,{relatedTarget:0}),kc=Nt(nC),rC=ke({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),iC=Nt(rC),oC=ke({},Ji,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),aC=Nt(oC),sC=ke({},Ji,{data:0}),ug=Nt(sC),lC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cC[e])?!!t[e]:!1}function Qp(){return dC}var fC=ke({},Pa,{key:function(e){if(e.key){var t=lC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qp,charCode:function(e){return e.type==="keypress"?Os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pC=Nt(fC),hC=ke({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cg=Nt(hC),mC=ke({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qp}),gC=Nt(mC),vC=ke({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),yC=Nt(vC),xC=ke({},nu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bC=Nt(xC),wC=[9,13,27,32],Jp=Vn&&"CompositionEvent"in window,Fo=null;Vn&&"documentMode"in document&&(Fo=document.documentMode);var SC=Vn&&"TextEvent"in window&&!Fo,Ey=Vn&&(!Jp||Fo&&8<Fo&&11>=Fo),dg=String.fromCharCode(32),fg=!1;function Cy(e,t){switch(e){case"keyup":return wC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ky(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mi=!1;function _C(e,t){switch(e){case"compositionend":return ky(t);case"keypress":return t.which!==32?null:(fg=!0,dg);case"textInput":return e=t.data,e===dg&&fg?null:e;default:return null}}function EC(e,t){if(mi)return e==="compositionend"||!Jp&&Cy(e,t)?(e=_y(),Ps=Kp=sr=null,mi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ey&&t.locale!=="ko"?null:t.data;default:return null}}var CC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!CC[e.type]:t==="textarea"}function Ty(e,t,n,r){iy(r),t=ul(t,"onChange"),0<t.length&&(n=new Zp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var No=null,na=null;function kC(e){Fy(e,0)}function ru(e){var t=yi(e);if(Z1(t))return e}function TC(e,t){if(e==="change")return t}var Py=!1;if(Vn){var Tc;if(Vn){var Pc="oninput"in document;if(!Pc){var hg=document.createElement("div");hg.setAttribute("oninput","return;"),Pc=typeof hg.oninput=="function"}Tc=Pc}else Tc=!1;Py=Tc&&(!document.documentMode||9<document.documentMode)}function mg(){No&&(No.detachEvent("onpropertychange",Oy),na=No=null)}function Oy(e){if(e.propertyName==="value"&&ru(na)){var t=[];Ty(t,na,e,Wp(e)),ly(kC,t)}}function PC(e,t,n){e==="focusin"?(mg(),No=t,na=n,No.attachEvent("onpropertychange",Oy)):e==="focusout"&&mg()}function OC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ru(na)}function MC(e,t){if(e==="click")return ru(t)}function $C(e,t){if(e==="input"||e==="change")return ru(t)}function IC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var cn=typeof Object.is=="function"?Object.is:IC;function ra(e,t){if(cn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kd.call(t,i)||!cn(e[i],t[i]))return!1}return!0}function gg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vg(e,t){var n=gg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gg(n)}}function My(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?My(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $y(){for(var e=window,t=nl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nl(e.document)}return t}function eh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jC(e){var t=$y(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&My(n.ownerDocument.documentElement,n)){if(r!==null&&eh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=vg(n,o);var a=vg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var DC=Vn&&"documentMode"in document&&11>=document.documentMode,gi=null,gf=null,zo=null,vf=!1;function yg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vf||gi==null||gi!==nl(r)||(r=gi,"selectionStart"in r&&eh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zo&&ra(zo,r)||(zo=r,r=ul(gf,"onSelect"),0<r.length&&(t=new Zp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gi)))}function es(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vi={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionend:es("Transition","TransitionEnd")},Oc={},Iy={};Vn&&(Iy=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function iu(e){if(Oc[e])return Oc[e];if(!vi[e])return e;var t=vi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Iy)return Oc[e]=t[n];return e}var jy=iu("animationend"),Dy=iu("animationiteration"),Ly=iu("animationstart"),Ry=iu("transitionend"),Ay=new Map,xg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(e,t){Ay.set(e,t),ti(t,[e])}for(var Mc=0;Mc<xg.length;Mc++){var $c=xg[Mc],LC=$c.toLowerCase(),RC=$c[0].toUpperCase()+$c.slice(1);Er(LC,"on"+RC)}Er(jy,"onAnimationEnd");Er(Dy,"onAnimationIteration");Er(Ly,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(Ry,"onTransitionEnd");ji("onMouseEnter",["mouseout","mouseover"]);ji("onMouseLeave",["mouseout","mouseover"]);ji("onPointerEnter",["pointerout","pointerover"]);ji("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function bg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,LE(r,t,void 0,e),e.currentTarget=null}function Fy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;bg(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;bg(i,l,u),o=s}}}if(il)throw e=ff,il=!1,ff=null,e}function ve(e,t){var n=t[Sf];n===void 0&&(n=t[Sf]=new Set);var r=e+"__bubble";n.has(r)||(Ny(t,e,2,!1),n.add(r))}function Ic(e,t,n){var r=0;t&&(r|=4),Ny(n,e,r,t)}var ts="_reactListening"+Math.random().toString(36).slice(2);function ia(e){if(!e[ts]){e[ts]=!0,G1.forEach(function(n){n!=="selectionchange"&&(AC.has(n)||Ic(n,!1,e),Ic(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ts]||(t[ts]=!0,Ic("selectionchange",!1,t))}}function Ny(e,t,n,r){switch(Sy(t)){case 1:var i=ZE;break;case 4:i=QE;break;default:i=Xp}n=i.bind(null,t,n,e),i=void 0,!df||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function jc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Ar(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}ly(function(){var u=o,c=Wp(n),d=[];e:{var m=Ay.get(e);if(m!==void 0){var f=Zp,h=e;switch(e){case"keypress":if(Os(n)===0)break e;case"keydown":case"keyup":f=pC;break;case"focusin":h="focus",f=kc;break;case"focusout":h="blur",f=kc;break;case"beforeblur":case"afterblur":f=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=lg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=tC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=gC;break;case jy:case Dy:case Ly:f=iC;break;case Ry:f=yC;break;case"scroll":f=JE;break;case"wheel":f=bC;break;case"copy":case"cut":case"paste":f=aC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=cg}var v=(t&4)!==0,w=!v&&e==="scroll",p=v?m!==null?m+"Capture":null:m;v=[];for(var g=u,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,p!==null&&(S=Qo(g,p),S!=null&&v.push(oa(g,S,x)))),w)break;g=g.return}0<v.length&&(m=new f(m,h,null,n,c),d.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",m&&n!==uf&&(h=n.relatedTarget||n.fromElement)&&(Ar(h)||h[Hn]))break e;if((f||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,f?(h=n.relatedTarget||n.toElement,f=u,h=h?Ar(h):null,h!==null&&(w=ni(h),h!==w||h.tag!==5&&h.tag!==6)&&(h=null)):(f=null,h=u),f!==h)){if(v=lg,S="onMouseLeave",p="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=cg,S="onPointerLeave",p="onPointerEnter",g="pointer"),w=f==null?m:yi(f),x=h==null?m:yi(h),m=new v(S,g+"leave",f,n,c),m.target=w,m.relatedTarget=x,S=null,Ar(c)===u&&(v=new v(p,g+"enter",h,n,c),v.target=x,v.relatedTarget=w,S=v),w=S,f&&h)t:{for(v=f,p=h,g=0,x=v;x;x=ai(x))g++;for(x=0,S=p;S;S=ai(S))x++;for(;0<g-x;)v=ai(v),g--;for(;0<x-g;)p=ai(p),x--;for(;g--;){if(v===p||p!==null&&v===p.alternate)break t;v=ai(v),p=ai(p)}v=null}else v=null;f!==null&&wg(d,m,f,v,!1),h!==null&&w!==null&&wg(d,w,h,v,!0)}}e:{if(m=u?yi(u):window,f=m.nodeName&&m.nodeName.toLowerCase(),f==="select"||f==="input"&&m.type==="file")var E=TC;else if(pg(m))if(Py)E=$C;else{E=OC;var k=PC}else(f=m.nodeName)&&f.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=MC);if(E&&(E=E(e,u))){Ty(d,E,n,c);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&rf(m,"number",m.value)}switch(k=u?yi(u):window,e){case"focusin":(pg(k)||k.contentEditable==="true")&&(gi=k,gf=u,zo=null);break;case"focusout":zo=gf=gi=null;break;case"mousedown":vf=!0;break;case"contextmenu":case"mouseup":case"dragend":vf=!1,yg(d,n,c);break;case"selectionchange":if(DC)break;case"keydown":case"keyup":yg(d,n,c)}var _;if(Jp)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else mi?Cy(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Ey&&n.locale!=="ko"&&(mi||C!=="onCompositionStart"?C==="onCompositionEnd"&&mi&&(_=_y()):(sr=c,Kp="value"in sr?sr.value:sr.textContent,mi=!0)),k=ul(u,C),0<k.length&&(C=new ug(C,e,null,n,c),d.push({event:C,listeners:k}),_?C.data=_:(_=ky(n),_!==null&&(C.data=_)))),(_=SC?_C(e,n):EC(e,n))&&(u=ul(u,"onBeforeInput"),0<u.length&&(c=new ug("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=_))}Fy(d,t)})}function oa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ul(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Qo(e,n),o!=null&&r.unshift(oa(e,o,i)),o=Qo(e,t),o!=null&&r.push(oa(e,o,i))),e=e.return}return r}function ai(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Qo(n,o),s!=null&&a.unshift(oa(n,s,l))):i||(s=Qo(n,o),s!=null&&a.push(oa(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var FC=/\r\n?/g,NC=/\u0000|\uFFFD/g;function Sg(e){return(typeof e=="string"?e:""+e).replace(FC,`
`).replace(NC,"")}function ns(e,t,n){if(t=Sg(t),Sg(e)!==t&&n)throw Error(V(425))}function cl(){}var yf=null,xf=null;function bf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wf=typeof setTimeout=="function"?setTimeout:void 0,zC=typeof clearTimeout=="function"?clearTimeout:void 0,_g=typeof Promise=="function"?Promise:void 0,BC=typeof queueMicrotask=="function"?queueMicrotask:typeof _g<"u"?function(e){return _g.resolve(null).then(e).catch(VC)}:wf;function VC(e){setTimeout(function(){throw e})}function Dc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ta(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ta(t)}function mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Eg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var eo=Math.random().toString(36).slice(2),bn="__reactFiber$"+eo,aa="__reactProps$"+eo,Hn="__reactContainer$"+eo,Sf="__reactEvents$"+eo,HC="__reactListeners$"+eo,UC="__reactHandles$"+eo;function Ar(e){var t=e[bn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hn]||n[bn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Eg(e);e!==null;){if(n=e[bn])return n;e=Eg(e)}return t}e=n,n=e.parentNode}return null}function Oa(e){return e=e[bn]||e[Hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function ou(e){return e[aa]||null}var _f=[],xi=-1;function Cr(e){return{current:e}}function xe(e){0>xi||(e.current=_f[xi],_f[xi]=null,xi--)}function ge(e,t){xi++,_f[xi]=e.current,e.current=t}var Sr={},at=Cr(Sr),St=Cr(!1),Ur=Sr;function Di(e,t){var n=e.type.contextTypes;if(!n)return Sr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _t(e){return e=e.childContextTypes,e!=null}function dl(){xe(St),xe(at)}function Cg(e,t,n){if(at.current!==Sr)throw Error(V(168));ge(at,t),ge(St,n)}function zy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,PE(e)||"Unknown",i));return ke({},n,r)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sr,Ur=at.current,ge(at,e),ge(St,St.current),!0}function kg(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=zy(e,t,Ur),r.__reactInternalMemoizedMergedChildContext=e,xe(St),xe(at),ge(at,e)):xe(St),ge(St,n)}var Dn=null,au=!1,Lc=!1;function By(e){Dn===null?Dn=[e]:Dn.push(e)}function WC(e){au=!0,By(e)}function kr(){if(!Lc&&Dn!==null){Lc=!0;var e=0,t=he;try{var n=Dn;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dn=null,au=!1}catch(i){throw Dn!==null&&(Dn=Dn.slice(e+1)),fy(Gp,kr),i}finally{he=t,Lc=!1}}return null}var bi=[],wi=0,pl=null,hl=0,Vt=[],Ht=0,Wr=null,An=1,Fn="";function $r(e,t){bi[wi++]=hl,bi[wi++]=pl,pl=e,hl=t}function Vy(e,t,n){Vt[Ht++]=An,Vt[Ht++]=Fn,Vt[Ht++]=Wr,Wr=e;var r=An;e=Fn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var o=32-an(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,An=1<<32-an(t)+i|n<<i|r,Fn=o+e}else An=1<<o|n<<i|r,Fn=e}function th(e){e.return!==null&&($r(e,1),Vy(e,1,0))}function nh(e){for(;e===pl;)pl=bi[--wi],bi[wi]=null,hl=bi[--wi],bi[wi]=null;for(;e===Wr;)Wr=Vt[--Ht],Vt[Ht]=null,Fn=Vt[--Ht],Vt[Ht]=null,An=Vt[--Ht],Vt[Ht]=null}var jt=null,$t=null,_e=!1,rn=null;function Hy(e,t){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Tg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,$t=mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,$t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wr!==null?{id:An,overflow:Fn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,jt=e,$t=null,!0):!1;default:return!1}}function Ef(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cf(e){if(_e){var t=$t;if(t){var n=t;if(!Tg(e,t)){if(Ef(e))throw Error(V(418));t=mr(n.nextSibling);var r=jt;t&&Tg(e,t)?Hy(r,n):(e.flags=e.flags&-4097|2,_e=!1,jt=e)}}else{if(Ef(e))throw Error(V(418));e.flags=e.flags&-4097|2,_e=!1,jt=e}}}function Pg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function rs(e){if(e!==jt)return!1;if(!_e)return Pg(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bf(e.type,e.memoizedProps)),t&&(t=$t)){if(Ef(e))throw Uy(),Error(V(418));for(;t;)Hy(e,t),t=mr(t.nextSibling)}if(Pg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$t=mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$t=null}}else $t=jt?mr(e.stateNode.nextSibling):null;return!0}function Uy(){for(var e=$t;e;)e=mr(e.nextSibling)}function Li(){$t=jt=null,_e=!1}function rh(e){rn===null?rn=[e]:rn.push(e)}var GC=Xn.ReactCurrentBatchConfig;function en(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ml=Cr(null),gl=null,Si=null,ih=null;function oh(){ih=Si=gl=null}function ah(e){var t=ml.current;xe(ml),e._currentValue=t}function kf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Oi(e,t){gl=e,ih=Si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wt=!0),e.firstContext=null)}function Gt(e){var t=e._currentValue;if(ih!==e)if(e={context:e,memoizedValue:t,next:null},Si===null){if(gl===null)throw Error(V(308));Si=e,gl.dependencies={lanes:0,firstContext:e}}else Si=Si.next=e;return t}var Fr=null;function sh(e){Fr===null?Fr=[e]:Fr.push(e)}function Wy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,sh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Un(e,r)}function Un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rr=!1;function lh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Un(e,n)}return i=r.interleaved,i===null?(t.next=t,sh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Un(e,n)}function Ms(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yp(e,n)}}function Og(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vl(e,t,n,r){var i=e.updateQueue;rr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,c=u=s=null,l=o;do{var m=l.lane,f=l.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,v=l;switch(m=t,f=n,v.tag){case 1:if(h=v.payload,typeof h=="function"){d=h.call(f,d,m);break e}d=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=v.payload,m=typeof h=="function"?h.call(f,d,m):h,m==null)break e;d=ke({},d,m);break e;case 2:rr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else f={eventTime:f,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=f,s=d):c=c.next=f,a|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Yr|=a,e.lanes=a,e.memoizedState=d}}function Mg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Yy=new W1.Component().refs;function Tf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var su={isMounted:function(e){return(e=e._reactInternals)?ni(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),i=yr(e),o=Nn(r,i);o.payload=t,n!=null&&(o.callback=n),t=gr(e,o,i),t!==null&&(sn(t,e,i,r),Ms(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),i=yr(e),o=Nn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gr(e,o,i),t!==null&&(sn(t,e,i,r),Ms(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=yr(e),i=Nn(n,r);i.tag=2,t!=null&&(i.callback=t),t=gr(e,i,r),t!==null&&(sn(t,e,r,n),Ms(t,e,r))}};function $g(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ra(n,r)||!ra(i,o):!0}function qy(e,t,n){var r=!1,i=Sr,o=t.contextType;return typeof o=="object"&&o!==null?o=Gt(o):(i=_t(t)?Ur:at.current,r=t.contextTypes,o=(r=r!=null)?Di(e,i):Sr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=su,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ig(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&su.enqueueReplaceState(t,t.state,null)}function Pf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Yy,lh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Gt(o):(o=_t(t)?Ur:at.current,i.context=Di(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Tf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&su.enqueueReplaceState(i,i.state,null),vl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function yo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Yy&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function is(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jg(e){var t=e._init;return t(e._payload)}function Xy(e){function t(p,g){if(e){var x=p.deletions;x===null?(p.deletions=[g],p.flags|=16):x.push(g)}}function n(p,g){if(!e)return null;for(;g!==null;)t(p,g),g=g.sibling;return null}function r(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function i(p,g){return p=xr(p,g),p.index=0,p.sibling=null,p}function o(p,g,x){return p.index=x,e?(x=p.alternate,x!==null?(x=x.index,x<g?(p.flags|=2,g):x):(p.flags|=2,g)):(p.flags|=1048576,g)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,g,x,S){return g===null||g.tag!==6?(g=Vc(x,p.mode,S),g.return=p,g):(g=i(g,x),g.return=p,g)}function s(p,g,x,S){var E=x.type;return E===hi?c(p,g,x.props.children,S,x.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nr&&jg(E)===g.type)?(S=i(g,x.props),S.ref=yo(p,g,x),S.return=p,S):(S=Rs(x.type,x.key,x.props,null,p.mode,S),S.ref=yo(p,g,x),S.return=p,S)}function u(p,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Hc(x,p.mode,S),g.return=p,g):(g=i(g,x.children||[]),g.return=p,g)}function c(p,g,x,S,E){return g===null||g.tag!==7?(g=Vr(x,p.mode,S,E),g.return=p,g):(g=i(g,x),g.return=p,g)}function d(p,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Vc(""+g,p.mode,x),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ya:return x=Rs(g.type,g.key,g.props,null,p.mode,x),x.ref=yo(p,null,g),x.return=p,x;case pi:return g=Hc(g,p.mode,x),g.return=p,g;case nr:var S=g._init;return d(p,S(g._payload),x)}if(Po(g)||po(g))return g=Vr(g,p.mode,x,null),g.return=p,g;is(p,g)}return null}function m(p,g,x,S){var E=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:l(p,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ya:return x.key===E?s(p,g,x,S):null;case pi:return x.key===E?u(p,g,x,S):null;case nr:return E=x._init,m(p,g,E(x._payload),S)}if(Po(x)||po(x))return E!==null?null:c(p,g,x,S,null);is(p,x)}return null}function f(p,g,x,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(x)||null,l(g,p,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ya:return p=p.get(S.key===null?x:S.key)||null,s(g,p,S,E);case pi:return p=p.get(S.key===null?x:S.key)||null,u(g,p,S,E);case nr:var k=S._init;return f(p,g,x,k(S._payload),E)}if(Po(S)||po(S))return p=p.get(x)||null,c(g,p,S,E,null);is(g,S)}return null}function h(p,g,x,S){for(var E=null,k=null,_=g,C=g=0,O=null;_!==null&&C<x.length;C++){_.index>C?(O=_,_=null):O=_.sibling;var $=m(p,_,x[C],S);if($===null){_===null&&(_=O);break}e&&_&&$.alternate===null&&t(p,_),g=o($,g,C),k===null?E=$:k.sibling=$,k=$,_=O}if(C===x.length)return n(p,_),_e&&$r(p,C),E;if(_===null){for(;C<x.length;C++)_=d(p,x[C],S),_!==null&&(g=o(_,g,C),k===null?E=_:k.sibling=_,k=_);return _e&&$r(p,C),E}for(_=r(p,_);C<x.length;C++)O=f(_,p,C,x[C],S),O!==null&&(e&&O.alternate!==null&&_.delete(O.key===null?C:O.key),g=o(O,g,C),k===null?E=O:k.sibling=O,k=O);return e&&_.forEach(function(j){return t(p,j)}),_e&&$r(p,C),E}function v(p,g,x,S){var E=po(x);if(typeof E!="function")throw Error(V(150));if(x=E.call(x),x==null)throw Error(V(151));for(var k=E=null,_=g,C=g=0,O=null,$=x.next();_!==null&&!$.done;C++,$=x.next()){_.index>C?(O=_,_=null):O=_.sibling;var j=m(p,_,$.value,S);if(j===null){_===null&&(_=O);break}e&&_&&j.alternate===null&&t(p,_),g=o(j,g,C),k===null?E=j:k.sibling=j,k=j,_=O}if($.done)return n(p,_),_e&&$r(p,C),E;if(_===null){for(;!$.done;C++,$=x.next())$=d(p,$.value,S),$!==null&&(g=o($,g,C),k===null?E=$:k.sibling=$,k=$);return _e&&$r(p,C),E}for(_=r(p,_);!$.done;C++,$=x.next())$=f(_,p,C,$.value,S),$!==null&&(e&&$.alternate!==null&&_.delete($.key===null?C:$.key),g=o($,g,C),k===null?E=$:k.sibling=$,k=$);return e&&_.forEach(function(I){return t(p,I)}),_e&&$r(p,C),E}function w(p,g,x,S){if(typeof x=="object"&&x!==null&&x.type===hi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ya:e:{for(var E=x.key,k=g;k!==null;){if(k.key===E){if(E=x.type,E===hi){if(k.tag===7){n(p,k.sibling),g=i(k,x.props.children),g.return=p,p=g;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nr&&jg(E)===k.type){n(p,k.sibling),g=i(k,x.props),g.ref=yo(p,k,x),g.return=p,p=g;break e}n(p,k);break}else t(p,k);k=k.sibling}x.type===hi?(g=Vr(x.props.children,p.mode,S,x.key),g.return=p,p=g):(S=Rs(x.type,x.key,x.props,null,p.mode,S),S.ref=yo(p,g,x),S.return=p,p=S)}return a(p);case pi:e:{for(k=x.key;g!==null;){if(g.key===k)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(p,g.sibling),g=i(g,x.children||[]),g.return=p,p=g;break e}else{n(p,g);break}else t(p,g);g=g.sibling}g=Hc(x,p.mode,S),g.return=p,p=g}return a(p);case nr:return k=x._init,w(p,g,k(x._payload),S)}if(Po(x))return h(p,g,x,S);if(po(x))return v(p,g,x,S);is(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(p,g.sibling),g=i(g,x),g.return=p,p=g):(n(p,g),g=Vc(x,p.mode,S),g.return=p,p=g),a(p)):n(p,g)}return w}var Ri=Xy(!0),Ky=Xy(!1),Ma={},_n=Cr(Ma),sa=Cr(Ma),la=Cr(Ma);function Nr(e){if(e===Ma)throw Error(V(174));return e}function uh(e,t){switch(ge(la,t),ge(sa,e),ge(_n,Ma),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:af(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=af(t,e)}xe(_n),ge(_n,t)}function Ai(){xe(_n),xe(sa),xe(la)}function Zy(e){Nr(la.current);var t=Nr(_n.current),n=af(t,e.type);t!==n&&(ge(sa,e),ge(_n,n))}function ch(e){sa.current===e&&(xe(_n),xe(sa))}var Ee=Cr(0);function yl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rc=[];function dh(){for(var e=0;e<Rc.length;e++)Rc[e]._workInProgressVersionPrimary=null;Rc.length=0}var $s=Xn.ReactCurrentDispatcher,Ac=Xn.ReactCurrentBatchConfig,Gr=0,Ce=null,Ae=null,We=null,xl=!1,Bo=!1,ua=0,YC=0;function Je(){throw Error(V(321))}function fh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!cn(e[n],t[n]))return!1;return!0}function ph(e,t,n,r,i,o){if(Gr=o,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$s.current=e===null||e.memoizedState===null?ZC:QC,e=n(r,i),Bo){o=0;do{if(Bo=!1,ua=0,25<=o)throw Error(V(301));o+=1,We=Ae=null,t.updateQueue=null,$s.current=JC,e=n(r,i)}while(Bo)}if($s.current=bl,t=Ae!==null&&Ae.next!==null,Gr=0,We=Ae=Ce=null,xl=!1,t)throw Error(V(300));return e}function hh(){var e=ua!==0;return ua=0,e}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ce.memoizedState=We=e:We=We.next=e,We}function Yt(){if(Ae===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=We===null?Ce.memoizedState:We.next;if(t!==null)We=t,Ae=e;else{if(e===null)throw Error(V(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},We===null?Ce.memoizedState=We=e:We=We.next=e}return We}function ca(e,t){return typeof t=="function"?t(e):t}function Fc(e){var t=Yt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var c=u.lane;if((Gr&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,Ce.lanes|=c,Yr|=c}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,cn(r,t.memoizedState)||(wt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ce.lanes|=o,Yr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Nc(e){var t=Yt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);cn(o,t.memoizedState)||(wt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qy(){}function Jy(e,t){var n=Ce,r=Yt(),i=t(),o=!cn(r.memoizedState,i);if(o&&(r.memoizedState=i,wt=!0),r=r.queue,mh(nx.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,da(9,tx.bind(null,n,r,i,t),void 0,null),Ge===null)throw Error(V(349));Gr&30||ex(n,t,i)}return i}function ex(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tx(e,t,n,r){t.value=n,t.getSnapshot=r,rx(t)&&ix(e)}function nx(e,t,n){return n(function(){rx(t)&&ix(e)})}function rx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!cn(e,n)}catch{return!0}}function ix(e){var t=Un(e,1);t!==null&&sn(t,e,1,-1)}function Dg(e){var t=vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},t.queue=e,e=e.dispatch=KC.bind(null,Ce,e),[t.memoizedState,e]}function da(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ox(){return Yt().memoizedState}function Is(e,t,n,r){var i=vn();Ce.flags|=e,i.memoizedState=da(1|t,n,void 0,r===void 0?null:r)}function lu(e,t,n,r){var i=Yt();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var a=Ae.memoizedState;if(o=a.destroy,r!==null&&fh(r,a.deps)){i.memoizedState=da(t,n,o,r);return}}Ce.flags|=e,i.memoizedState=da(1|t,n,o,r)}function Lg(e,t){return Is(8390656,8,e,t)}function mh(e,t){return lu(2048,8,e,t)}function ax(e,t){return lu(4,2,e,t)}function sx(e,t){return lu(4,4,e,t)}function lx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ux(e,t,n){return n=n!=null?n.concat([e]):null,lu(4,4,lx.bind(null,t,e),n)}function gh(){}function cx(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function dx(e,t){var n=Yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fx(e,t,n){return Gr&21?(cn(n,t)||(n=my(),Ce.lanes|=n,Yr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=n)}function qC(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=Ac.transition;Ac.transition={};try{e(!1),t()}finally{he=n,Ac.transition=r}}function px(){return Yt().memoizedState}function XC(e,t,n){var r=yr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hx(e))mx(t,n);else if(n=Wy(e,t,n,r),n!==null){var i=ft();sn(n,e,r,i),gx(n,t,r)}}function KC(e,t,n){var r=yr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hx(e))mx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,cn(l,a)){var s=t.interleaved;s===null?(i.next=i,sh(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Wy(e,t,i,r),n!==null&&(i=ft(),sn(n,e,r,i),gx(n,t,r))}}function hx(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function mx(e,t){Bo=xl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yp(e,n)}}var bl={readContext:Gt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},ZC={readContext:Gt,useCallback:function(e,t){return vn().memoizedState=[e,t===void 0?null:t],e},useContext:Gt,useEffect:Lg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Is(4194308,4,lx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Is(4194308,4,e,t)},useInsertionEffect:function(e,t){return Is(4,2,e,t)},useMemo:function(e,t){var n=vn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=XC.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=vn();return e={current:e},t.memoizedState=e},useState:Dg,useDebugValue:gh,useDeferredValue:function(e){return vn().memoizedState=e},useTransition:function(){var e=Dg(!1),t=e[0];return e=qC.bind(null,e[1]),vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,i=vn();if(_e){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Ge===null)throw Error(V(349));Gr&30||ex(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Lg(nx.bind(null,r,o,e),[e]),r.flags|=2048,da(9,tx.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=vn(),t=Ge.identifierPrefix;if(_e){var n=Fn,r=An;n=(r&~(1<<32-an(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ua++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=YC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},QC={readContext:Gt,useCallback:cx,useContext:Gt,useEffect:mh,useImperativeHandle:ux,useInsertionEffect:ax,useLayoutEffect:sx,useMemo:dx,useReducer:Fc,useRef:ox,useState:function(){return Fc(ca)},useDebugValue:gh,useDeferredValue:function(e){var t=Yt();return fx(t,Ae.memoizedState,e)},useTransition:function(){var e=Fc(ca)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:Qy,useSyncExternalStore:Jy,useId:px,unstable_isNewReconciler:!1},JC={readContext:Gt,useCallback:cx,useContext:Gt,useEffect:mh,useImperativeHandle:ux,useInsertionEffect:ax,useLayoutEffect:sx,useMemo:dx,useReducer:Nc,useRef:ox,useState:function(){return Nc(ca)},useDebugValue:gh,useDeferredValue:function(e){var t=Yt();return Ae===null?t.memoizedState=e:fx(t,Ae.memoizedState,e)},useTransition:function(){var e=Nc(ca)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:Qy,useSyncExternalStore:Jy,useId:px,unstable_isNewReconciler:!1};function Fi(e,t){try{var n="",r=t;do n+=TE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function zc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Of(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ek=typeof WeakMap=="function"?WeakMap:Map;function vx(e,t,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Sl||(Sl=!0,Nf=r),Of(e,t)},n}function yx(e,t,n){n=Nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Of(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Of(e,t),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Rg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ek;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=hk.bind(null,e,t,n),t.then(e,e))}function Ag(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fg(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nn(-1,1),t.tag=2,gr(n,t,1))),n.lanes|=1),e)}var tk=Xn.ReactCurrentOwner,wt=!1;function ct(e,t,n,r){t.child=e===null?Ky(t,null,n,r):Ri(t,e.child,n,r)}function Ng(e,t,n,r,i){n=n.render;var o=t.ref;return Oi(t,i),r=ph(e,t,n,r,o,i),n=hh(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(_e&&n&&th(t),t.flags|=1,ct(e,t,r,i),t.child)}function zg(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Eh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,xx(e,t,o,r,i)):(e=Rs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(a,r)&&e.ref===t.ref)return Wn(e,t,i)}return t.flags|=1,e=xr(o,r),e.ref=t.ref,e.return=t,t.child=e}function xx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ra(o,r)&&e.ref===t.ref)if(wt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(wt=!0);else return t.lanes=e.lanes,Wn(e,t,i)}return Mf(e,t,n,r,i)}function bx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ei,Ot),Ot|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Ei,Ot),Ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ge(Ei,Ot),Ot|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ge(Ei,Ot),Ot|=r;return ct(e,t,i,n),t.child}function wx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mf(e,t,n,r,i){var o=_t(n)?Ur:at.current;return o=Di(t,o),Oi(t,i),n=ph(e,t,n,r,o,i),r=hh(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wn(e,t,i)):(_e&&r&&th(t),t.flags|=1,ct(e,t,n,i),t.child)}function Bg(e,t,n,r,i){if(_t(n)){var o=!0;fl(t)}else o=!1;if(Oi(t,i),t.stateNode===null)js(e,t),qy(t,n,r),Pf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gt(u):(u=_t(n)?Ur:at.current,u=Di(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Ig(t,a,r,u),rr=!1;var m=t.memoizedState;a.state=m,vl(t,r,a,i),s=t.memoizedState,l!==r||m!==s||St.current||rr?(typeof c=="function"&&(Tf(t,n,c,r),s=t.memoizedState),(l=rr||$g(t,n,l,r,m,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Gy(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:en(t.type,l),a.props=u,d=t.pendingProps,m=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Gt(s):(s=_t(n)?Ur:at.current,s=Di(t,s));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||m!==s)&&Ig(t,a,r,s),rr=!1,m=t.memoizedState,a.state=m,vl(t,r,a,i);var h=t.memoizedState;l!==d||m!==h||St.current||rr?(typeof f=="function"&&(Tf(t,n,f,r),h=t.memoizedState),(u=rr||$g(t,n,u,r,m,h,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return $f(e,t,n,r,o,i)}function $f(e,t,n,r,i,o){wx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&kg(t,n,!1),Wn(e,t,o);r=t.stateNode,tk.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ri(t,e.child,null,o),t.child=Ri(t,null,l,o)):ct(e,t,l,o),t.memoizedState=r.state,i&&kg(t,n,!0),t.child}function Sx(e){var t=e.stateNode;t.pendingContext?Cg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cg(e,t.context,!1),uh(e,t.containerInfo)}function Vg(e,t,n,r,i){return Li(),rh(i),t.flags|=256,ct(e,t,n,r),t.child}var If={dehydrated:null,treeContext:null,retryLane:0};function jf(e){return{baseLanes:e,cachePool:null,transitions:null}}function _x(e,t,n){var r=t.pendingProps,i=Ee.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(Ee,i&1),e===null)return Cf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=du(a,r,0,null),e=Vr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=jf(n),t.memoizedState=If,e):vh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return nk(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=xr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=xr(l,o):(o=Vr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?jf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=If,r}return o=e.child,e=o.sibling,r=xr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vh(e,t){return t=du({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function os(e,t,n,r){return r!==null&&rh(r),Ri(t,e.child,null,n),e=vh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nk(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=zc(Error(V(422))),os(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=du({mode:"visible",children:r.children},i,0,null),o=Vr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ri(t,e.child,null,a),t.child.memoizedState=jf(a),t.memoizedState=If,o);if(!(t.mode&1))return os(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=zc(o,r,void 0),os(e,t,a,r)}if(l=(a&e.childLanes)!==0,wt||l){if(r=Ge,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Un(e,i),sn(r,e,i,-1))}return _h(),r=zc(Error(V(421))),os(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=mk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,$t=mr(i.nextSibling),jt=t,_e=!0,rn=null,e!==null&&(Vt[Ht++]=An,Vt[Ht++]=Fn,Vt[Ht++]=Wr,An=e.id,Fn=e.overflow,Wr=t),t=vh(t,r.children),t.flags|=4096,t)}function Hg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),kf(e.return,t,n)}function Bc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ex(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ct(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hg(e,n,t);else if(e.tag===19)Hg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&yl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bc(t,!0,n,null,o);break;case"together":Bc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function js(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=xr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rk(e,t,n){switch(t.tag){case 3:Sx(t),Li();break;case 5:Zy(t);break;case 1:_t(t.type)&&fl(t);break;case 4:uh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(ml,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?_x(e,t,n):(ge(Ee,Ee.current&1),e=Wn(e,t,n),e!==null?e.sibling:null);ge(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ex(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,bx(e,t,n)}return Wn(e,t,n)}var Cx,Df,kx,Tx;Cx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Df=function(){};kx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Nr(_n.current);var o=null;switch(n){case"input":i=tf(e,i),r=tf(e,r),o=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),o=[];break;case"textarea":i=of(e,i),r=of(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cl)}sf(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ko.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ve("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Tx=function(e,t,n,r){n!==r&&(t.flags|=4)};function xo(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ik(e,t,n){var r=t.pendingProps;switch(nh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return _t(t.type)&&dl(),et(t),null;case 3:return r=t.stateNode,Ai(),xe(St),xe(at),dh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(rs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rn!==null&&(Vf(rn),rn=null))),Df(e,t),et(t),null;case 5:ch(t);var i=Nr(la.current);if(n=t.type,e!==null&&t.stateNode!=null)kx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return et(t),null}if(e=Nr(_n.current),rs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[bn]=t,r[aa]=o,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Mo.length;i++)ve(Mo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Qm(r,o),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ve("invalid",r);break;case"textarea":eg(r,o),ve("invalid",r)}sf(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ns(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ns(r.textContent,l,e),i=["children",""+l]):Ko.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ve("scroll",r)}switch(n){case"input":qa(r),Jm(r,o,!0);break;case"textarea":qa(r),tg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=cl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ey(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[bn]=t,e[aa]=r,Cx(e,t,!1,!1),t.stateNode=e;e:{switch(a=lf(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mo.length;i++)ve(Mo[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":Qm(e,r),i=tf(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),ve("invalid",e);break;case"textarea":eg(e,r),i=of(e,r),ve("invalid",e);break;default:i=r}sf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?ry(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ty(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Zo(e,s):typeof s=="number"&&Zo(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ko.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ve("scroll",e):s!=null&&Bp(e,o,s,a))}switch(n){case"input":qa(e),Jm(e,r,!1);break;case"textarea":qa(e),tg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ci(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return et(t),null;case 6:if(e&&t.stateNode!=null)Tx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Nr(la.current),Nr(_n.current),rs(t)){if(r=t.stateNode,n=t.memoizedProps,r[bn]=t,(o=r.nodeValue!==n)&&(e=jt,e!==null))switch(e.tag){case 3:ns(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ns(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bn]=t,t.stateNode=r}return et(t),null;case 13:if(xe(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&$t!==null&&t.mode&1&&!(t.flags&128))Uy(),Li(),t.flags|=98560,o=!1;else if(o=rs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[bn]=t}else Li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;et(t),o=!1}else rn!==null&&(Vf(rn),rn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?Ne===0&&(Ne=3):_h())),t.updateQueue!==null&&(t.flags|=4),et(t),null);case 4:return Ai(),Df(e,t),e===null&&ia(t.stateNode.containerInfo),et(t),null;case 10:return ah(t.type._context),et(t),null;case 17:return _t(t.type)&&dl(),et(t),null;case 19:if(xe(Ee),o=t.memoizedState,o===null)return et(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)xo(o,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=yl(e),a!==null){for(t.flags|=128,xo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ee,Ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&Oe()>Ni&&(t.flags|=128,r=!0,xo(o,!1),t.lanes=4194304)}else{if(!r)if(e=yl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!_e)return et(t),null}else 2*Oe()-o.renderingStartTime>Ni&&n!==1073741824&&(t.flags|=128,r=!0,xo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Oe(),t.sibling=null,n=Ee.current,ge(Ee,r?n&1|2:n&1),t):(et(t),null);case 22:case 23:return Sh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ot&1073741824&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function ok(e,t){switch(nh(t),t.tag){case 1:return _t(t.type)&&dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ai(),xe(St),xe(at),dh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ch(t),null;case 13:if(xe(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Ee),null;case 4:return Ai(),null;case 10:return ah(t.type._context),null;case 22:case 23:return Sh(),null;case 24:return null;default:return null}}var as=!1,it=!1,ak=typeof WeakSet=="function"?WeakSet:Set,W=null;function _i(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Lf(e,t,n){try{n()}catch(r){Te(e,t,r)}}var Ug=!1;function sk(e,t){if(yf=sl,e=$y(),eh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,d=e,m=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(f=d.firstChild)!==null;)m=d,d=f;for(;;){if(d===e)break t;if(m===n&&++u===i&&(l=a),m===o&&++c===r&&(s=a),(f=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=f}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(xf={focusedElem:e,selectionRange:n},sl=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var v=h.memoizedProps,w=h.memoizedState,p=t.stateNode,g=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:en(t.type,v),w);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(S){Te(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return h=Ug,Ug=!1,h}function Vo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Lf(t,n,o)}i=i.next}while(i!==r)}}function uu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Px(e){var t=e.alternate;t!==null&&(e.alternate=null,Px(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bn],delete t[aa],delete t[Sf],delete t[HC],delete t[UC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ox(e){return e.tag===5||e.tag===3||e.tag===4}function Wg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ox(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Af(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cl));else if(r!==4&&(e=e.child,e!==null))for(Af(e,t,n),e=e.sibling;e!==null;)Af(e,t,n),e=e.sibling}function Ff(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ff(e,t,n),e=e.sibling;e!==null;)Ff(e,t,n),e=e.sibling}var Xe=null,tn=!1;function er(e,t,n){for(n=n.child;n!==null;)Mx(e,t,n),n=n.sibling}function Mx(e,t,n){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(tu,n)}catch{}switch(n.tag){case 5:it||_i(n,t);case 6:var r=Xe,i=tn;Xe=null,er(e,t,n),Xe=r,tn=i,Xe!==null&&(tn?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(tn?(e=Xe,n=n.stateNode,e.nodeType===8?Dc(e.parentNode,n):e.nodeType===1&&Dc(e,n),ta(e)):Dc(Xe,n.stateNode));break;case 4:r=Xe,i=tn,Xe=n.stateNode.containerInfo,tn=!0,er(e,t,n),Xe=r,tn=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Lf(n,t,a),i=i.next}while(i!==r)}er(e,t,n);break;case 1:if(!it&&(_i(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,t,l)}er(e,t,n);break;case 21:er(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,er(e,t,n),it=r):er(e,t,n);break;default:er(e,t,n)}}function Gg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ak),t.forEach(function(r){var i=gk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,tn=!1;break e;case 3:Xe=l.stateNode.containerInfo,tn=!0;break e;case 4:Xe=l.stateNode.containerInfo,tn=!0;break e}l=l.return}if(Xe===null)throw Error(V(160));Mx(o,a,i),Xe=null,tn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$x(t,e),t=t.sibling}function $x(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),mn(e),r&4){try{Vo(3,e,e.return),uu(3,e)}catch(v){Te(e,e.return,v)}try{Vo(5,e,e.return)}catch(v){Te(e,e.return,v)}}break;case 1:Kt(t,e),mn(e),r&512&&n!==null&&_i(n,n.return);break;case 5:if(Kt(t,e),mn(e),r&512&&n!==null&&_i(n,n.return),e.flags&32){var i=e.stateNode;try{Zo(i,"")}catch(v){Te(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Q1(i,o),lf(l,a);var u=lf(l,o);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?ry(i,d):c==="dangerouslySetInnerHTML"?ty(i,d):c==="children"?Zo(i,d):Bp(i,c,d,u)}switch(l){case"input":nf(i,o);break;case"textarea":J1(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;f!=null?Ci(i,!!o.multiple,f,!1):m!==!!o.multiple&&(o.defaultValue!=null?Ci(i,!!o.multiple,o.defaultValue,!0):Ci(i,!!o.multiple,o.multiple?[]:"",!1))}i[aa]=o}catch(v){Te(e,e.return,v)}}break;case 6:if(Kt(t,e),mn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Te(e,e.return,v)}}break;case 3:if(Kt(t,e),mn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(t.containerInfo)}catch(v){Te(e,e.return,v)}break;case 4:Kt(t,e),mn(e);break;case 13:Kt(t,e),mn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(bh=Oe())),r&4&&Gg(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||c,Kt(t,e),it=u):Kt(t,e),mn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(W=e,c=e.child;c!==null;){for(d=W=c;W!==null;){switch(m=W,f=m.child,m.tag){case 0:case 11:case 14:case 15:Vo(4,m,m.return);break;case 1:_i(m,m.return);var h=m.stateNode;if(typeof h.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(v){Te(r,n,v)}}break;case 5:_i(m,m.return);break;case 22:if(m.memoizedState!==null){qg(d);continue}}f!==null?(f.return=m,W=f):qg(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ny("display",a))}catch(v){Te(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Te(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kt(t,e),mn(e),r&4&&Gg(e);break;case 21:break;default:Kt(t,e),mn(e)}}function mn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ox(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zo(i,""),r.flags&=-33);var o=Wg(e);Ff(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Wg(e);Af(e,l,a);break;default:throw Error(V(161))}}catch(s){Te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lk(e,t,n){W=e,Ix(e)}function Ix(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||as;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||it;l=as;var u=it;if(as=a,(it=s)&&!u)for(W=i;W!==null;)a=W,s=a.child,a.tag===22&&a.memoizedState!==null?Xg(i):s!==null?(s.return=a,W=s):Xg(i);for(;o!==null;)W=o,Ix(o),o=o.sibling;W=i,as=l,it=u}Yg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,W=o):Yg(e)}}function Yg(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||uu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:en(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Mg(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mg(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ta(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}it||t.flags&512&&Rf(t)}catch(m){Te(t,t.return,m)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function qg(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function Xg(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{uu(4,t)}catch(s){Te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Te(t,i,s)}}var o=t.return;try{Rf(t)}catch(s){Te(t,o,s)}break;case 5:var a=t.return;try{Rf(t)}catch(s){Te(t,a,s)}}}catch(s){Te(t,t.return,s)}if(t===e){W=null;break}var l=t.sibling;if(l!==null){l.return=t.return,W=l;break}W=t.return}}var uk=Math.ceil,wl=Xn.ReactCurrentDispatcher,yh=Xn.ReactCurrentOwner,Wt=Xn.ReactCurrentBatchConfig,se=0,Ge=null,De=null,Ze=0,Ot=0,Ei=Cr(0),Ne=0,fa=null,Yr=0,cu=0,xh=0,Ho=null,bt=null,bh=0,Ni=1/0,$n=null,Sl=!1,Nf=null,vr=null,ss=!1,lr=null,_l=0,Uo=0,zf=null,Ds=-1,Ls=0;function ft(){return se&6?Oe():Ds!==-1?Ds:Ds=Oe()}function yr(e){return e.mode&1?se&2&&Ze!==0?Ze&-Ze:GC.transition!==null?(Ls===0&&(Ls=my()),Ls):(e=he,e!==0||(e=window.event,e=e===void 0?16:Sy(e.type)),e):1}function sn(e,t,n,r){if(50<Uo)throw Uo=0,zf=null,Error(V(185));Ta(e,n,r),(!(se&2)||e!==Ge)&&(e===Ge&&(!(se&2)&&(cu|=n),Ne===4&&or(e,Ze)),Et(e,r),n===1&&se===0&&!(t.mode&1)&&(Ni=Oe()+500,au&&kr()))}function Et(e,t){var n=e.callbackNode;GE(e,t);var r=al(e,e===Ge?Ze:0);if(r===0)n!==null&&ig(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ig(n),t===1)e.tag===0?WC(Kg.bind(null,e)):By(Kg.bind(null,e)),BC(function(){!(se&6)&&kr()}),n=null;else{switch(gy(r)){case 1:n=Gp;break;case 4:n=py;break;case 16:n=ol;break;case 536870912:n=hy;break;default:n=ol}n=zx(n,jx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jx(e,t){if(Ds=-1,Ls=0,se&6)throw Error(V(327));var n=e.callbackNode;if(Mi()&&e.callbackNode!==n)return null;var r=al(e,e===Ge?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=El(e,r);else{t=r;var i=se;se|=2;var o=Lx();(Ge!==e||Ze!==t)&&($n=null,Ni=Oe()+500,Br(e,t));do try{fk();break}catch(l){Dx(e,l)}while(1);oh(),wl.current=o,se=i,De!==null?t=0:(Ge=null,Ze=0,t=Ne)}if(t!==0){if(t===2&&(i=pf(e),i!==0&&(r=i,t=Bf(e,i))),t===1)throw n=fa,Br(e,0),or(e,r),Et(e,Oe()),n;if(t===6)or(e,r);else{if(i=e.current.alternate,!(r&30)&&!ck(i)&&(t=El(e,r),t===2&&(o=pf(e),o!==0&&(r=o,t=Bf(e,o))),t===1))throw n=fa,Br(e,0),or(e,r),Et(e,Oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Ir(e,bt,$n);break;case 3:if(or(e,r),(r&130023424)===r&&(t=bh+500-Oe(),10<t)){if(al(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wf(Ir.bind(null,e,bt,$n),t);break}Ir(e,bt,$n);break;case 4:if(or(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-an(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uk(r/1960))-r,10<r){e.timeoutHandle=wf(Ir.bind(null,e,bt,$n),r);break}Ir(e,bt,$n);break;case 5:Ir(e,bt,$n);break;default:throw Error(V(329))}}}return Et(e,Oe()),e.callbackNode===n?jx.bind(null,e):null}function Bf(e,t){var n=Ho;return e.current.memoizedState.isDehydrated&&(Br(e,t).flags|=256),e=El(e,t),e!==2&&(t=bt,bt=n,t!==null&&Vf(t)),e}function Vf(e){bt===null?bt=e:bt.push.apply(bt,e)}function ck(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!cn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function or(e,t){for(t&=~xh,t&=~cu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function Kg(e){if(se&6)throw Error(V(327));Mi();var t=al(e,0);if(!(t&1))return Et(e,Oe()),null;var n=El(e,t);if(e.tag!==0&&n===2){var r=pf(e);r!==0&&(t=r,n=Bf(e,r))}if(n===1)throw n=fa,Br(e,0),or(e,t),Et(e,Oe()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ir(e,bt,$n),Et(e,Oe()),null}function wh(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Ni=Oe()+500,au&&kr())}}function qr(e){lr!==null&&lr.tag===0&&!(se&6)&&Mi();var t=se;se|=1;var n=Wt.transition,r=he;try{if(Wt.transition=null,he=1,e)return e()}finally{he=r,Wt.transition=n,se=t,!(se&6)&&kr()}}function Sh(){Ot=Ei.current,xe(Ei)}function Br(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zC(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(nh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:Ai(),xe(St),xe(at),dh();break;case 5:ch(r);break;case 4:Ai();break;case 13:xe(Ee);break;case 19:xe(Ee);break;case 10:ah(r.type._context);break;case 22:case 23:Sh()}n=n.return}if(Ge=e,De=e=xr(e.current,null),Ze=Ot=t,Ne=0,fa=null,xh=cu=Yr=0,bt=Ho=null,Fr!==null){for(t=0;t<Fr.length;t++)if(n=Fr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Fr=null}return e}function Dx(e,t){do{var n=De;try{if(oh(),$s.current=bl,xl){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xl=!1}if(Gr=0,We=Ae=Ce=null,Bo=!1,ua=0,yh.current=null,n===null||n.return===null){Ne=1,fa=t,De=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Ze,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Ag(a);if(f!==null){f.flags&=-257,Fg(f,a,l,o,t),f.mode&1&&Rg(o,u,t),t=f,s=u;var h=t.updateQueue;if(h===null){var v=new Set;v.add(s),t.updateQueue=v}else h.add(s);break e}else{if(!(t&1)){Rg(o,u,t),_h();break e}s=Error(V(426))}}else if(_e&&l.mode&1){var w=Ag(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Fg(w,a,l,o,t),rh(Fi(s,l));break e}}o=s=Fi(s,l),Ne!==4&&(Ne=2),Ho===null?Ho=[o]:Ho.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=vx(o,s,t);Og(o,p);break e;case 1:l=s;var g=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(vr===null||!vr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=yx(o,l,t);Og(o,S);break e}}o=o.return}while(o!==null)}Ax(n)}catch(E){t=E,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function Lx(){var e=wl.current;return wl.current=bl,e===null?bl:e}function _h(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ge===null||!(Yr&268435455)&&!(cu&268435455)||or(Ge,Ze)}function El(e,t){var n=se;se|=2;var r=Lx();(Ge!==e||Ze!==t)&&($n=null,Br(e,t));do try{dk();break}catch(i){Dx(e,i)}while(1);if(oh(),se=n,wl.current=r,De!==null)throw Error(V(261));return Ge=null,Ze=0,Ne}function dk(){for(;De!==null;)Rx(De)}function fk(){for(;De!==null&&!AE();)Rx(De)}function Rx(e){var t=Nx(e.alternate,e,Ot);e.memoizedProps=e.pendingProps,t===null?Ax(e):De=t,yh.current=null}function Ax(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ok(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,De=null;return}}else if(n=ik(n,t,Ot),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Ne===0&&(Ne=5)}function Ir(e,t,n){var r=he,i=Wt.transition;try{Wt.transition=null,he=1,pk(e,t,n,r)}finally{Wt.transition=i,he=r}return null}function pk(e,t,n,r){do Mi();while(lr!==null);if(se&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(YE(e,o),e===Ge&&(De=Ge=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ss||(ss=!0,zx(ol,function(){return Mi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Wt.transition,Wt.transition=null;var a=he;he=1;var l=se;se|=4,yh.current=null,sk(e,n),$x(n,e),jC(xf),sl=!!yf,xf=yf=null,e.current=n,lk(n),FE(),se=l,he=a,Wt.transition=o}else e.current=n;if(ss&&(ss=!1,lr=e,_l=i),o=e.pendingLanes,o===0&&(vr=null),BE(n.stateNode),Et(e,Oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sl)throw Sl=!1,e=Nf,Nf=null,e;return _l&1&&e.tag!==0&&Mi(),o=e.pendingLanes,o&1?e===zf?Uo++:(Uo=0,zf=e):Uo=0,kr(),null}function Mi(){if(lr!==null){var e=gy(_l),t=Wt.transition,n=he;try{if(Wt.transition=null,he=16>e?16:e,lr===null)var r=!1;else{if(e=lr,lr=null,_l=0,se&6)throw Error(V(331));var i=se;for(se|=4,W=e.current;W!==null;){var o=W,a=o.child;if(W.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(W=u;W!==null;){var c=W;switch(c.tag){case 0:case 11:case 15:Vo(8,c,o)}var d=c.child;if(d!==null)d.return=c,W=d;else for(;W!==null;){c=W;var m=c.sibling,f=c.return;if(Px(c),c===u){W=null;break}if(m!==null){m.return=f,W=m;break}W=f}}}var h=o.alternate;if(h!==null){var v=h.child;if(v!==null){h.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}W=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,W=a;else e:for(;W!==null;){if(o=W,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vo(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,W=p;break e}W=o.return}}var g=e.current;for(W=g;W!==null;){a=W;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,W=x;else e:for(a=g;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:uu(9,l)}}catch(E){Te(l,l.return,E)}if(l===a){W=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,W=S;break e}W=l.return}}if(se=i,kr(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(tu,e)}catch{}r=!0}return r}finally{he=n,Wt.transition=t}}return!1}function Zg(e,t,n){t=Fi(n,t),t=vx(e,t,1),e=gr(e,t,1),t=ft(),e!==null&&(Ta(e,1,t),Et(e,t))}function Te(e,t,n){if(e.tag===3)Zg(e,e,n);else for(;t!==null;){if(t.tag===3){Zg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){e=Fi(n,e),e=yx(t,e,1),t=gr(t,e,1),e=ft(),t!==null&&(Ta(t,1,e),Et(t,e));break}}t=t.return}}function hk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(Ze&n)===n&&(Ne===4||Ne===3&&(Ze&130023424)===Ze&&500>Oe()-bh?Br(e,0):xh|=n),Et(e,t)}function Fx(e,t){t===0&&(e.mode&1?(t=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):t=1);var n=ft();e=Un(e,t),e!==null&&(Ta(e,t,n),Et(e,n))}function mk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fx(e,n)}function gk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Fx(e,n)}var Nx;Nx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||St.current)wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return wt=!1,rk(e,t,n);wt=!!(e.flags&131072)}else wt=!1,_e&&t.flags&1048576&&Vy(t,hl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;js(e,t),e=t.pendingProps;var i=Di(t,at.current);Oi(t,n),i=ph(null,t,r,e,i,n);var o=hh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_t(r)?(o=!0,fl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lh(t),i.updater=su,t.stateNode=i,i._reactInternals=t,Pf(t,r,e,n),t=$f(null,t,r,!0,o,n)):(t.tag=0,_e&&o&&th(t),ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(js(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=yk(r),e=en(r,e),i){case 0:t=Mf(null,t,r,e,n);break e;case 1:t=Bg(null,t,r,e,n);break e;case 11:t=Ng(null,t,r,e,n);break e;case 14:t=zg(null,t,r,en(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Mf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Bg(e,t,r,i,n);case 3:e:{if(Sx(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Gy(e,t),vl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Fi(Error(V(423)),t),t=Vg(e,t,r,n,i);break e}else if(r!==i){i=Fi(Error(V(424)),t),t=Vg(e,t,r,n,i);break e}else for($t=mr(t.stateNode.containerInfo.firstChild),jt=t,_e=!0,rn=null,n=Ky(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Li(),r===i){t=Wn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return Zy(t),e===null&&Cf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,bf(r,i)?a=null:o!==null&&bf(r,o)&&(t.flags|=32),wx(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&Cf(t),null;case 13:return _x(e,t,n);case 4:return uh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ri(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Ng(e,t,r,i,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ge(ml,r._currentValue),r._currentValue=a,o!==null)if(cn(o.value,a)){if(o.children===i.children&&!St.current){t=Wn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Nn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),kf(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),kf(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Oi(t,n),i=Gt(i),r=r(i),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,i=en(r,t.pendingProps),i=en(r.type,i),zg(e,t,r,i,n);case 15:return xx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),js(e,t),t.tag=1,_t(r)?(e=!0,fl(t)):e=!1,Oi(t,n),qy(t,r,i),Pf(t,r,i,n),$f(null,t,r,!0,e,n);case 19:return Ex(e,t,n);case 22:return bx(e,t,n)}throw Error(V(156,t.tag))};function zx(e,t){return fy(e,t)}function vk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(e,t,n,r){return new vk(e,t,n,r)}function Eh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yk(e){if(typeof e=="function")return Eh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hp)return 11;if(e===Up)return 14}return 2}function xr(e,t){var n=e.alternate;return n===null?(n=Ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Eh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case hi:return Vr(n.children,i,o,t);case Vp:a=8,i|=8;break;case Zd:return e=Ut(12,n,t,i|2),e.elementType=Zd,e.lanes=o,e;case Qd:return e=Ut(13,n,t,i),e.elementType=Qd,e.lanes=o,e;case Jd:return e=Ut(19,n,t,i),e.elementType=Jd,e.lanes=o,e;case X1:return du(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y1:a=10;break e;case q1:a=9;break e;case Hp:a=11;break e;case Up:a=14;break e;case nr:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Ut(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Vr(e,t,n,r){return e=Ut(7,e,r,t),e.lanes=n,e}function du(e,t,n,r){return e=Ut(22,e,r,t),e.elementType=X1,e.lanes=n,e.stateNode={isHidden:!1},e}function Vc(e,t,n){return e=Ut(6,e,null,t),e.lanes=n,e}function Hc(e,t,n){return t=Ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ch(e,t,n,r,i,o,a,l,s){return e=new xk(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lh(o),e}function bk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Bx(e){if(!e)return Sr;e=e._reactInternals;e:{if(ni(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(_t(n))return zy(e,n,t)}return t}function Vx(e,t,n,r,i,o,a,l,s){return e=Ch(n,r,!0,e,i,o,a,l,s),e.context=Bx(null),n=e.current,r=ft(),i=yr(n),o=Nn(r,i),o.callback=t??null,gr(n,o,i),e.current.lanes=i,Ta(e,i,r),Et(e,r),e}function fu(e,t,n,r){var i=t.current,o=ft(),a=yr(i);return n=Bx(n),t.context===null?t.context=n:t.pendingContext=n,t=Nn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gr(i,t,a),e!==null&&(sn(e,i,a,o),Ms(e,i,a)),a}function Cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kh(e,t){Qg(e,t),(e=e.alternate)&&Qg(e,t)}function wk(){return null}var Hx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Th(e){this._internalRoot=e}pu.prototype.render=Th.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));fu(e,t,null,null)};pu.prototype.unmount=Th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qr(function(){fu(null,e,null,null)}),t[Hn]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=xy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ir.length&&t!==0&&t<ir[n].priority;n++);ir.splice(n,0,e),n===0&&wy(e)}};function Ph(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Jg(){}function Sk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Cl(a);o.call(u)}}var a=Vx(t,r,e,0,null,!1,!1,"",Jg);return e._reactRootContainer=a,e[Hn]=a.current,ia(e.nodeType===8?e.parentNode:e),qr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Cl(s);l.call(u)}}var s=Ch(e,0,!1,null,null,!1,!1,"",Jg);return e._reactRootContainer=s,e[Hn]=s.current,ia(e.nodeType===8?e.parentNode:e),qr(function(){fu(t,s,n,r)}),s}function mu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Cl(a);l.call(s)}}fu(t,a,e,i)}else a=Sk(n,t,e,i,r);return Cl(a)}vy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Oo(t.pendingLanes);n!==0&&(Yp(t,n|1),Et(t,Oe()),!(se&6)&&(Ni=Oe()+500,kr()))}break;case 13:qr(function(){var r=Un(e,1);if(r!==null){var i=ft();sn(r,e,1,i)}}),kh(e,1)}};qp=function(e){if(e.tag===13){var t=Un(e,134217728);if(t!==null){var n=ft();sn(t,e,134217728,n)}kh(e,134217728)}};yy=function(e){if(e.tag===13){var t=yr(e),n=Un(e,t);if(n!==null){var r=ft();sn(n,e,t,r)}kh(e,t)}};xy=function(){return he};by=function(e,t){var n=he;try{return he=e,t()}finally{he=n}};cf=function(e,t,n){switch(t){case"input":if(nf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ou(r);if(!i)throw Error(V(90));Z1(r),nf(r,i)}}}break;case"textarea":J1(e,n);break;case"select":t=n.value,t!=null&&Ci(e,!!n.multiple,t,!1)}};ay=wh;sy=qr;var _k={usingClientEntryPoint:!1,Events:[Oa,yi,ou,iy,oy,wh]},bo={findFiberByHostInstance:Ar,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ek={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cy(e),e===null?null:e.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||wk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{tu=ls.inject(Ek),Sn=ls}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_k;Ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ph(t))throw Error(V(200));return bk(e,t,null,n)};Ft.createRoot=function(e,t){if(!Ph(e))throw Error(V(299));var n=!1,r="",i=Hx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ch(e,1,!1,null,null,n,!1,r,i),e[Hn]=t.current,ia(e.nodeType===8?e.parentNode:e),new Th(t)};Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=cy(t),e=e===null?null:e.stateNode,e};Ft.flushSync=function(e){return qr(e)};Ft.hydrate=function(e,t,n){if(!hu(t))throw Error(V(200));return mu(null,e,t,!0,n)};Ft.hydrateRoot=function(e,t,n){if(!Ph(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Hx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Vx(t,null,e,1,n??null,i,!1,o,a),e[Hn]=t.current,ia(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new pu(t)};Ft.render=function(e,t,n){if(!hu(t))throw Error(V(200));return mu(null,e,t,!1,n)};Ft.unmountComponentAtNode=function(e){if(!hu(e))throw Error(V(40));return e._reactRootContainer?(qr(function(){mu(null,null,e,!1,function(){e._reactRootContainer=null,e[Hn]=null})}),!0):!1};Ft.unstable_batchedUpdates=wh;Ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hu(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return mu(e,t,n,!1,r)};Ft.version="18.2.0-next-9e3b772b8-20220608";function Ux(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ux)}catch(e){console.error(e)}}Ux(),V1.exports=Ft;var gu=V1.exports,e0=gu;Xd.createRoot=e0.createRoot,Xd.hydrateRoot=e0.hydrateRoot;var ot=function(){return ot=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ot.apply(this,arguments)};function zi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function Ck(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var kk=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Tk=Ck(function(e){return kk.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ye="-ms-",Wo="-moz-",ue="-webkit-",Wx="comm",vu="rule",Oh="decl",Pk="@import",Ok="@namespace",Gx="@keyframes",Mk="@layer",Yx=Math.abs,Mh=String.fromCharCode,Hf=Object.assign;function $k(e,t){return Fe(e,0)^45?(((t<<2^Fe(e,0))<<2^Fe(e,1))<<2^Fe(e,2))<<2^Fe(e,3):0}function qx(e){return e.trim()}function In(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function As(e,t,n){return e.indexOf(t,n)}function Fe(e,t){return e.charCodeAt(t)|0}function Xr(e,t,n){return e.slice(t,n)}function nn(e){return e.length}function Xx(e){return e.length}function $o(e,t){return t.push(e),e}function Ik(e,t){return e.map(t).join("")}function t0(e,t){return e.filter(function(n){return!In(n,t)})}var yu=1,Bi=1,Kx=0,qt=0,Ie=0,to="";function xu(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:yu,column:Bi,length:a,return:"",siblings:l}}function tr(e,t){return Hf(xu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function si(e){for(;e.root;)e=tr(e.root,{children:[e]});$o(e,e.siblings)}function jk(){return Ie}function Dk(){return Ie=qt>0?Fe(to,--qt):0,Bi--,Ie===10&&(Bi=1,yu--),Ie}function ln(){return Ie=qt<Kx?Fe(to,qt++):0,Bi++,Ie===10&&(Bi=1,yu++),Ie}function ur(){return Fe(to,qt)}function Fs(){return qt}function bu(e,t){return Xr(to,e,t)}function pa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Lk(e){return yu=Bi=1,Kx=nn(to=e),qt=0,[]}function Rk(e){return to="",e}function Uc(e){return qx(bu(qt-1,Uf(e===91?e+2:e===40?e+1:e)))}function Ak(e){for(;(Ie=ur())&&Ie<33;)ln();return pa(e)>2||pa(Ie)>3?"":" "}function Fk(e,t){for(;--t&&ln()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return bu(e,Fs()+(t<6&&ur()==32&&ln()==32))}function Uf(e){for(;ln();)switch(Ie){case e:return qt;case 34:case 39:e!==34&&e!==39&&Uf(Ie);break;case 40:e===41&&Uf(e);break;case 92:ln();break}return qt}function Nk(e,t){for(;ln()&&e+Ie!==47+10;)if(e+Ie===42+42&&ur()===47)break;return"/*"+bu(t,qt-1)+"*"+Mh(e===47?e:ln())}function zk(e){for(;!pa(ur());)ln();return bu(e,qt)}function Bk(e){return Rk(Ns("",null,null,null,[""],e=Lk(e),0,[0],e))}function Ns(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,m=0,f=0,h=0,v=1,w=1,p=1,g=0,x="",S=i,E=o,k=r,_=x;w;)switch(h=g,g=ln()){case 40:if(h!=108&&Fe(_,d-1)==58){As(_+=ne(Uc(g),"&","&\f"),"&\f",Yx(u?l[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:_+=Uc(g);break;case 9:case 10:case 13:case 32:_+=Ak(h);break;case 92:_+=Fk(Fs()-1,7);continue;case 47:switch(ur()){case 42:case 47:$o(Vk(Nk(ln(),Fs()),t,n,s),s),(pa(h||1)==5||pa(ur()||1)==5)&&nn(_)&&Xr(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*v:l[u++]=nn(_)*p;case 125*v:case 59:case 0:switch(g){case 0:case 125:w=0;case 59+c:p==-1&&(_=ne(_,/\f/g,"")),f>0&&(nn(_)-d||v===0&&h===47)&&$o(f>32?r0(_+";",r,n,d-1,s):r0(ne(_," ","")+";",r,n,d-2,s),s);break;case 59:_+=";";default:if($o(k=n0(_,t,n,u,c,i,l,x,S=[],E=[],d,o),o),g===123)if(c===0)Ns(_,t,k,k,S,o,d,l,E);else{switch(m){case 99:if(Fe(_,3)===110)break;case 108:if(Fe(_,2)===97)break;default:c=0;case 100:case 109:case 115:}c?Ns(e,k,k,r&&$o(n0(e,k,k,0,0,i,l,x,i,S=[],d,E),E),i,E,d,l,r?S:E):Ns(_,k,k,k,[""],E,0,l,E)}}u=c=f=0,v=p=1,x=_="",d=a;break;case 58:d=1+nn(_),f=h;default:if(v<1){if(g==123)--v;else if(g==125&&v++==0&&Dk()==125)continue}switch(_+=Mh(g),g*v){case 38:p=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(nn(_)-1)*p,p=1;break;case 64:ur()===45&&(_+=Uc(ln())),m=ur(),c=d=nn(x=_+=zk(Fs())),g++;break;case 45:h===45&&nn(_)==2&&(v=0)}}return o}function n0(e,t,n,r,i,o,a,l,s,u,c,d){for(var m=i-1,f=i===0?o:[""],h=Xx(f),v=0,w=0,p=0;v<r;++v)for(var g=0,x=Xr(e,m+1,m=Yx(w=a[v])),S=e;g<h;++g)(S=qx(w>0?f[g]+" "+x:ne(x,/&\f/g,f[g])))&&(s[p++]=S);return xu(e,t,n,i===0?vu:l,s,u,c,d)}function Vk(e,t,n,r){return xu(e,t,n,Wx,Mh(jk()),Xr(e,2,-2),0,r)}function r0(e,t,n,r,i){return xu(e,t,n,Oh,Xr(e,0,r),Xr(e,r+1,-1),r,i)}function Zx(e,t,n){switch($k(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Wo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+Wo+e+ye+e+e;case 5936:switch(Fe(e,t+11)){case 114:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+ye+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+ye+e+e;case 6165:return ue+e+ye+"flex-"+e+e;case 5187:return ue+e+ne(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return ue+e+ye+"flex-item-"+ne(e,/flex-|-self/g,"")+(In(e,/flex-|baseline/)?"":ye+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ue+e+ye+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+ye+ne(e,"shrink","negative")+e;case 5292:return ue+e+ye+ne(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ne(e,"-grow","")+ue+e+ye+ne(e,"grow","positive")+e;case 4554:return ue+ne(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+ye+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!In(e,/flex-|baseline/))return ye+"grid-column-align"+Xr(e,t)+e;break;case 2592:case 3360:return ye+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,In(r.props,/grid-\w+-end/)})?~As(e+(n=n[t].value),"span",0)?e:ye+ne(e,"-start","")+e+ye+"grid-row-span:"+(~As(n,"span",0)?In(n,/\d+/):+In(n,/\d+/)-+In(e,/\d+/))+";":ye+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return In(r.props,/grid-\w+-start/)})?e:ye+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nn(e)-1-t>6)switch(Fe(e,t+1)){case 109:if(Fe(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+Wo+(Fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~As(e,"stretch",0)?Zx(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return ye+i+":"+o+u+(a?ye+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(Fe(e,t+6)===121)return ne(e,":",":"+ue)+e;break;case 6444:switch(Fe(e,Fe(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Fe(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+ye+"$2box$3")+e;case 100:return ne(e,":",":"+ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function kl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Hk(e,t,n,r){switch(e.type){case Mk:if(e.children.length)break;case Pk:case Ok:case Oh:return e.return=e.return||e.value;case Wx:return"";case Gx:return e.return=e.value+"{"+kl(e.children,r)+"}";case vu:if(!nn(e.value=e.props.join(",")))return""}return nn(n=kl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Uk(e){var t=Xx(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function Wk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Gk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Oh:e.return=Zx(e.value,e.length,n);return;case Gx:return kl([tr(e,{value:ne(e.value,"@","@"+ue)})],r);case vu:if(e.length)return Ik(n=e.props,function(i){switch(In(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":si(tr(e,{props:[ne(i,/:(read-\w+)/,":"+Wo+"$1")]})),si(tr(e,{props:[i]})),Hf(e,{props:t0(n,r)});break;case"::placeholder":si(tr(e,{props:[ne(i,/:(plac\w+)/,":"+ue+"input-$1")]})),si(tr(e,{props:[ne(i,/:(plac\w+)/,":"+Wo+"$1")]})),si(tr(e,{props:[ne(i,/:(plac\w+)/,ye+"input-$1")]})),si(tr(e,{props:[i]})),Hf(e,{props:t0(n,r)});break}return""})}}var Yk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Qx="active",Jx="data-styled-version",wu="6.3.11",$h=`/*!sc*/
`,Go=typeof window<"u"&&typeof document<"u",qk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Xk={};function $a(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var zs=new Map,Tl=new Map,Bs=1,Io=function(e){if(zs.has(e))return zs.get(e);for(;Tl.has(Bs);)Bs++;var t=Bs++;return zs.set(e,t),Tl.set(t,e),t},Kk=function(e,t){Bs=t+1,zs.set(e,t),Tl.set(t,e)},Ih=Object.freeze([]),Hi=Object.freeze({});function eb(e,t,n){return n===void 0&&(n=Hi),e.theme!==n.theme&&e.theme||t||n.theme}var tb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Zk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Qk=/(^-|-$)/g;function i0(e){return e.replace(Zk,"-").replace(Qk,"")}var Jk=/(a)(d)/gi,o0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Wf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=o0(t%52)+n;return(o0(t%52)+n).replace(Jk,"$1-$2")}var Wc,jr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},nb=function(e){return jr(5381,e)};function jh(e){return Wf(nb(e)>>>0)}function eT(e){return e.displayName||e.name||"Component"}function Gc(e){return typeof e=="string"&&!0}var rb=typeof Symbol=="function"&&Symbol.for,ib=rb?Symbol.for("react.memo"):60115,tT=rb?Symbol.for("react.forward_ref"):60112,nT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},rT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ob={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},iT=((Wc={})[tT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wc[ib]=ob,Wc);function a0(e){return("type"in(t=e)&&t.type.$$typeof)===ib?ob:"$$typeof"in e?iT[e.$$typeof]:nT;var t}var oT=Object.defineProperty,aT=Object.getOwnPropertyNames,s0=Object.getOwnPropertySymbols,sT=Object.getOwnPropertyDescriptor,lT=Object.getPrototypeOf,l0=Object.prototype;function ab(e,t,n){if(typeof t!="string"){if(l0){var r=lT(t);r&&r!==l0&&ab(e,r,n)}var i=aT(t);s0&&(i=i.concat(s0(t)));for(var o=a0(e),a=a0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in rT||n&&n[s]||a&&s in a||o&&s in o)){var u=sT(t,s);try{oT(e,s,u)}catch{}}}}return e}function Ui(e){return typeof e=="function"}function Dh(e){return typeof e=="object"&&"styledComponentId"in e}function zr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Pl(e,t){return e.join(t||"")}function ha(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Gf(e,t,n){if(n===void 0&&(n=!1),!n&&!ha(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Gf(e[r],t[r]);else if(ha(t))for(var r in t)e[r]=Gf(e[r],t[r]);return e}function Lh(e,t){Object.defineProperty(e,"toString",{value:t})}var uT=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw $a(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+$h;return n},e}(),cT="style[".concat(Vi,"][").concat(Jx,'="').concat(wu,'"]'),dT=new RegExp("^".concat(Vi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),u0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Yf=function(e){if(!e)return document;if(u0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(u0(t))return t}return document},fT=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},pT=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split($h),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(dT);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(Kk(c,u),fT(e,c,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},Yc=function(e){for(var t=Yf(e.options.target).querySelectorAll(cT),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Vi)!==Qx&&(pT(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function hT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sb=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Vi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Vi,Qx),r.setAttribute(Jx,wu);var a=hT();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},mT=function(){function e(t){this.element=sb(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw $a(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),gT=function(){function e(t){this.element=sb(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),vT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),c0=Go,yT={isServer:!Go,useCSSOMInjection:!qk},Ol=function(){function e(t,n,r){t===void 0&&(t=Hi),n===void 0&&(n={});var i=this;this.options=ot(ot({},yT),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Go&&c0&&(c0=!1,Yc(this)),Lh(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(d){var m=function(p){return Tl.get(p)}(d);if(m===void 0)return"continue";var f=o.names.get(m);if(f===void 0||!f.size)return"continue";var h=a.getGroup(d);if(h.length===0)return"continue";var v=Vi+".g"+d+'[id="'+m+'"]',w="";f.forEach(function(p){p.length>0&&(w+=p+",")}),s+=h+v+'{content:"'+w+'"}'+$h},c=0;c<l;c++)u(c);return s}(i)})}return e.registerId=function(t){return Io(t)},e.prototype.rehydrate=function(){!this.server&&Go&&Yc(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ot(ot({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Go&&t.target!==this.options.target&&Yf(this.options.target)!==Yf(t.target)&&Yc(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new vT(i):r?new mT(i):new gT(i)}(this.options),new uT(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Io(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Io(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Io(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),xT=/&/g,jn=47,Dr=42;function d0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==jn||e.charCodeAt(o+1)!==Dr)if(i)a===Dr&&e.charCodeAt(o+1)===jn&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function lb(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=lb(n.children,t)),n})}function bT(e){var t,n,r,i=e===void 0?Hi:e,o=i.options,a=o===void 0?Hi:o,l=i.plugins,s=l===void 0?Ih:l,u=function(h,v,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):h},c=s.slice();c.push(function(h){h.type===vu&&h.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),h.props[0]=h.props[0].replace(xT,n).replace(r,u))}),a.prefix&&c.push(Gk),c.push(Hk);var d=[],m=Uk(c.concat(Wk(function(h){return d.push(h)}))),f=function(h,v,w,p){v===void 0&&(v=""),w===void 0&&(w=""),p===void 0&&(p="&"),t=p,n=v,r=void 0;var g=function(S){if(!d0(S))return S;for(var E=S.length,k="",_=0,C=0,O=0,$=!1,j=0;j<E;j++){var I=S.charCodeAt(j);if(O!==0||$||I!==jn||S.charCodeAt(j+1)!==Dr)if($)I===Dr&&S.charCodeAt(j+1)===jn&&($=!1,j++);else if(I!==34&&I!==39||j!==0&&S.charCodeAt(j-1)===92){if(O===0)if(I===123)C++;else if(I===125){if(--C<0){for(var D=j+1;D<E;){var R=S.charCodeAt(D);if(R===59||R===10)break;D++}D<E&&S.charCodeAt(D)===59&&D++,C=0,j=D-1,_=D;continue}C===0&&(k+=S.substring(_,j+1),_=j+1)}else I===59&&C===0&&(k+=S.substring(_,j+1),_=j+1)}else O===0?O=I:O===I&&(O=0);else $=!0,j++}if(_<E){var L=S.substring(_);d0(L)||(k+=L)}return k}(function(S){if(S.indexOf("//")===-1)return S;for(var E=S.length,k=[],_=0,C=0,O=0,$=0;C<E;){var j=S.charCodeAt(C);if(j!==34&&j!==39||C!==0&&S.charCodeAt(C-1)===92)if(O===0)if(j===jn&&C+1<E&&S.charCodeAt(C+1)===Dr){for(C+=2;C+1<E&&(S.charCodeAt(C)!==Dr||S.charCodeAt(C+1)!==jn);)C++;C+=2}else if(j===40&&C>=3&&(32|S.charCodeAt(C-1))==108&&(32|S.charCodeAt(C-2))==114&&(32|S.charCodeAt(C-3))==117)$=1,C++;else if($>0)j===41?$--:j===40&&$++,C++;else if(j===Dr&&C+1<E&&S.charCodeAt(C+1)===jn)C>_&&k.push(S.substring(_,C)),_=C+=2;else if(j===jn&&C+1<E&&S.charCodeAt(C+1)===jn){for(C>_&&k.push(S.substring(_,C));C<E&&S.charCodeAt(C)!==10;)C++;_=C}else C++;else C++;else O===0?O=j:O===j&&(O=0),C++}return _===0?S:(_<E&&k.push(S.substring(_)),k.join(""))}(h)),x=Bk(w||v?"".concat(w," ").concat(v," { ").concat(g," }"):g);return a.namespace&&(x=lb(x,a.namespace)),d=[],kl(x,m),d};return f.hash=s.length?s.reduce(function(h,v){return v.name||$a(15),jr(h,v.name)},5381).toString():"",f}var wT=new Ol,qf=bT(),ub=q.createContext({shouldForwardProp:void 0,styleSheet:wT,stylis:qf});ub.Consumer;q.createContext(void 0);function Xf(){return q.useContext(ub)}var cb=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=qf);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Lh(this,function(){throw $a(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=qf),this.name+t.hash},e}();function ST(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Yk||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var _T=function(e){return e>="A"&&e<="Z"};function f0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;_T(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var db=function(e){return e==null||e===!1||e===""},fb=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!db(r)&&(Array.isArray(r)&&r.isCss||Ui(r)?t.push("".concat(f0(n),":"),r,";"):ha(r)?t.push.apply(t,zi(zi(["".concat(n," {")],fb(r),!1),["}"],!1)):t.push("".concat(f0(n),": ").concat(ST(n,r),";")))}return t};function br(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(db(e))return i;if(Dh(e))return i.push(".".concat(e.styledComponentId)),i;if(Ui(e)){if(!Ui(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return br(o,t,n,r,i)}var a;if(e instanceof cb)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(ha(e)){for(var l=fb(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)br(e[s],t,n,r,i);return i}function pb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ui(n)&&!Dh(n))return!1}return!0}var ET=nb(wu),CT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&pb(t),this.componentId=n,this.baseHash=jr(ET,n),this.baseStyle=r,Ol.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=zr(i,this.staticRulesId);else{var o=Pl(br(this.rules,t,n,r)),a=Wf(jr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=zr(i,a),this.staticRulesId=a}else{for(var s=jr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var m=Pl(br(d,t,n,r));s=jr(jr(s,String(c)),m),u+=m}}if(u){var f=Wf(s>>>0);if(!n.hasNameForId(this.componentId,f)){var h=r(u,".".concat(f),void 0,this.componentId);n.insertRules(this.componentId,f,h)}i=zr(i,f)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Io(this.componentId)):""}},e}(),Rh=q.createContext(void 0);Rh.Consumer;var qc={};function kT(e,t,n){var r=Dh(e),i=e,o=!Gc(e),a=t.attrs,l=a===void 0?Ih:a,s=t.componentId,u=s===void 0?function(S,E){var k=typeof S!="string"?"sc":i0(S);qc[k]=(qc[k]||0)+1;var _="".concat(k,"-").concat(jh(wu+k+qc[k]));return E?"".concat(E,"-").concat(_):_}(t.displayName,t.parentComponentId):s,c=t.displayName,d=c===void 0?function(S){return Gc(S)?"styled.".concat(S):"Styled(".concat(eT(S),")")}(e):c,m=t.displayName&&t.componentId?"".concat(i0(t.displayName),"-").concat(t.componentId):t.componentId||u,f=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,h=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;h=function(S,E){return v(S,E)&&w(S,E)}}else h=v}var p=new CT(n,m,r?i.componentStyle:void 0);function g(S,E){return function(k,_,C){var O=k.attrs,$=k.componentStyle,j=k.defaultProps,I=k.foldedComponentIds,D=k.styledComponentId,R=k.target,L=q.useContext(Rh),F=Xf(),A=k.shouldForwardProp||F.shouldForwardProp,P=eb(_,L,j)||Hi,M=function(X,ee,fe){for(var be,ie=ot(ot({},ee),{className:void 0,theme:fe}),$e=0;$e<X.length;$e+=1){var Be=Ui(be=X[$e])?be(ie):be;for(var Ve in Be)Ve==="className"?ie.className=zr(ie.className,Be[Ve]):Ve==="style"?ie.style=ot(ot({},ie.style),Be[Ve]):ie[Ve]=Be[Ve]}return"className"in ee&&typeof ee.className=="string"&&(ie.className=zr(ie.className,ee.className)),ie}(O,_,P),N=M.as||R,B={};for(var z in M)M[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&M.theme===P||(z==="forwardedAs"?B.as=M.forwardedAs:A&&!A(z,N)||(B[z]=M[z]));var H=function(X,ee){var fe=Xf(),be=X.generateAndInjectStyles(ee,fe.styleSheet,fe.stylis);return be}($,M),U=H.className,Y=zr(I,D);return U&&(Y+=" "+U),M.className&&(Y+=" "+M.className),B[Gc(N)&&!tb.has(N)?"class":"className"]=Y,C&&(B.ref=C),b.createElement(N,B)}(x,S,E)}g.displayName=d;var x=q.forwardRef(g);return x.attrs=f,x.componentStyle=p,x.displayName=d,x.shouldForwardProp=h,x.foldedComponentIds=r?zr(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=m,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(E){for(var k=[],_=1;_<arguments.length;_++)k[_-1]=arguments[_];for(var C=0,O=k;C<O.length;C++)Gf(E,O[C],!0);return E}({},i.defaultProps,S):S}}),Lh(x,function(){return".".concat(x.styledComponentId)}),o&&ab(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function p0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var h0=function(e){return Object.assign(e,{isCss:!0})};function Ah(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ui(e)||ha(e))return h0(br(p0(Ih,zi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?br(r):h0(br(p0(r,t)))}function Kf(e,t,n){if(n===void 0&&(n=Hi),!t)throw $a(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Ah.apply(void 0,zi([i],o,!1)))};return r.attrs=function(i){return Kf(e,t,ot(ot({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Kf(e,t,ot(ot({},n),i))},r}var hb=function(e){return Kf(kT,e)},T=hb;tb.forEach(function(e){T[e]=hb(e)});var TT=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=pb(t),Ol.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Pl(br(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ol.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function PT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ah.apply(void 0,zi([e],t,!1)),i="sc-global-".concat(jh(JSON.stringify(r))),o=new TT(r,i),a=new WeakMap,l=function(u){var c=Xf(),d=q.useContext(Rh),m=a.get(c.styleSheet);return m===void 0&&(m=c.styleSheet.allocateGSInstance(i),a.set(c.styleSheet,m)),(typeof window>"u"||!c.styleSheet.server)&&s(m,u,c.styleSheet,d,c.stylis),q.useLayoutEffect(function(){return c.styleSheet.server||s(m,u,c.styleSheet,d,c.stylis),function(){var f;o.removeStyles(m,c.styleSheet),f=c.styleSheet.options.target,typeof document<"u"&&(f??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(h){return h.remove()})}},[m,u,c.styleSheet,d,c.stylis]),null};function s(u,c,d,m,f){if(o.isStatic)o.renderStyles(u,Xk,d,f);else{var h=ot(ot({},c),{theme:eb(c,m,l.defaultProps)});o.renderStyles(u,h,d,f)}}return q.memo(l)}function Fh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Pl(Ah.apply(void 0,zi([e],t,!1))),i=jh(r);return new cb(i,r)}const OT=T.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,MT=T.div`
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
`,$T=T.div`
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
`;const DT=T(Me)`
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
`;const LT=T.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,RT=T.button`
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
`;const AT=T.div`
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
`,FT=T.button`
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
`,NT=T.nav`
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
`,zT=T.div`
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 14px;
  color: #888;
  text-align: center;
`,BT=T.div`
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
   
`,WT=T.svg`
  width: 24px;
  height: 24px;
  

`,dn="/Didiv/assets/symbol-defs-f1e4efb3.svg",GT=()=>{const[e,t]=b.useState("");return y.jsxs(VT,{children:[y.jsx(HT,{name:"site-search",value:e,onChange:n=>t(n.target.value),placeholder:"Пошук",autoComplete:"off"}),y.jsx(UT,{className:"search-button",children:y.jsx(WT,{children:y.jsx("use",{href:`${dn}#icon-search`})})})]})};var mb={exports:{}},gb={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=b;function YT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qT=typeof Object.is=="function"?Object.is:YT,XT=Ia.useSyncExternalStore,KT=Ia.useRef,ZT=Ia.useEffect,QT=Ia.useMemo,JT=Ia.useDebugValue;gb.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=KT(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=QT(function(){function s(f){if(!u){if(u=!0,c=f,f=r(f),i!==void 0&&a.hasValue){var h=a.value;if(i(h,f))return d=h}return d=f}if(h=d,qT(c,f))return h;var v=r(f);return i!==void 0&&i(h,v)?(c=f,h):(c=f,d=v)}var u=!1,c,d,m=n===void 0?null:n;return[function(){return s(t())},m===null?void 0:function(){return s(m())}]},[t,n,r,i]);var l=XT(e,o[0],o[1]);return ZT(function(){a.hasValue=!0,a.value=l},[l]),JT(l),l};mb.exports=gb;var eP=mb.exports;function tP(e){e()}function nP(){let e=null,t=null;return{clear(){e=null,t=null},notify(){tP(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var m0={notify(){},get:()=>[]};function rP(e,t){let n,r=m0,i=0,o=!1;function a(v){c();const w=r.subscribe(v);let p=!1;return()=>{p||(p=!0,w(),d())}}function l(){r.notify()}function s(){h.onStateChange&&h.onStateChange()}function u(){return o}function c(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=nP())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=m0)}function m(){o||(o=!0,c())}function f(){o&&(o=!1,d())}const h={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:m,tryUnsubscribe:f,getListeners:()=>r};return h}var iP=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",oP=iP(),aP=()=>typeof navigator<"u"&&navigator.product==="ReactNative",sP=aP(),lP=()=>oP||sP?b.useLayoutEffect:b.useEffect,uP=lP(),Xc=Symbol.for("react-redux-context"),Kc=typeof globalThis<"u"?globalThis:{};function cP(){if(!b.createContext)return{};const e=Kc[Xc]??(Kc[Xc]=new Map);let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var _r=cP();function dP(e){const{children:t,context:n,serverState:r,store:i}=e,o=b.useMemo(()=>{const s=rP(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=b.useMemo(()=>i.getState(),[i]);uP(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||_r;return b.createElement(l.Provider,{value:o},t)}var fP=dP;function Nh(e=_r){return function(){return b.useContext(e)}}var vb=Nh();function yb(e=_r){const t=e===_r?vb:Nh(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var pP=yb();function hP(e=_r){const t=e===_r?pP:yb(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var ri=hP(),mP=(e,t)=>e===t;function gP(e=_r){const t=e===_r?vb:Nh(e),n=(r,i={})=>{const{equalityFn:o=mP}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:u}=a;b.useRef(!0);const c=b.useCallback({[r.name](m){return r(m)}}[r.name],[r]),d=eP.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,c,o);return b.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Dt=gP();const vP=T(Me)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,yP=T.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,xP=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,bP=T.div`
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
`,wP=({onClick:e})=>{const t=Dt(n=>n.cart.items.length);return y.jsx(vP,{to:"/cart",children:y.jsxs(xP,{onClick:e,children:[y.jsx(yP,{children:y.jsx("use",{href:`${dn}#icon-cart`})}),t>0&&y.jsx(bP,{children:t})]})})},SP=T.nav`
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
`,_P=()=>y.jsxs(SP,{children:[y.jsx(cs,{to:"/",children:"Головна"}),y.jsx(cs,{to:"/about",children:"Про нас"}),y.jsx(cs,{to:"/catalog",children:"Каталог"}),y.jsx(cs,{to:"/contacts",children:"Контакти"})]}),EP=T.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,CP=T(Me)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
 
  }
       
`,kP=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,TP=T.div`

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
`,PP=({onClick:e})=>{const t=Dt(n=>n.favorites.items.length);return y.jsx(CP,{to:"/favorite",children:y.jsxs(kP,{onClick:e,children:[y.jsx(EP,{children:y.jsx("use",{href:`${dn}#icon-heart`})}),t>0&&y.jsx(TP,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OP=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=e=>{const t=MP(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $P={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>b.createElement("svg",{ref:s,...$P,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:xb("lucide",i),...!o&&!IP(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,c])=>b.createElement(u,c)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(jP,{ref:o,iconNode:t,className:xb(`lucide-${OP(g0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=g0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DP=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],bb=Pn("arrow-right",DP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],zh=Pn("heart",LP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],AP=Pn("house",RP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],NP=Pn("info",FP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],BP=Pn("mail",zP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],HP=Pn("shopping-bag",VP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],ja=Pn("shopping-cart",UP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],wb=Pn("sliders-horizontal",WP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Sb=Pn("trash-2",GP);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_b=Pn("x",YP),qP=()=>{const[e,t]=b.useState(!1);return y.jsx(OT,{children:y.jsx(MT,{children:y.jsxs($T,{children:[y.jsxs(IT,{children:[y.jsx(DT,{to:"/",children:"Дідів хлів"}),y.jsxs(jT,{children:[y.jsx(wP,{}),y.jsx(PP,{}),y.jsx(_P,{}),y.jsx(RT,{onClick:()=>t(!e),children:y.jsx(LT,{children:y.jsx("use",{href:`${dn}#icon-menu`})})}),y.jsx(BT,{open:e,onClick:()=>t(!1)}),y.jsxs(AT,{open:e,children:[y.jsx(FT,{onClick:()=>t(!1),children:y.jsx(_b,{size:28,strokeWidth:1.5})}),y.jsxs(NT,{children:[y.jsxs(us,{onClick:()=>t(!1),to:"/",children:[y.jsx(AP,{size:22,strokeWidth:1.5})," Головна"]}),y.jsxs(us,{onClick:()=>t(!1),to:"/about",children:[y.jsx(NP,{size:22,strokeWidth:1.5})," Про нас"]}),y.jsxs(us,{onClick:()=>t(!1),to:"/catalog",children:[y.jsx(HP,{size:22,strokeWidth:1.5})," Каталог"]}),y.jsxs(us,{onClick:()=>t(!1),to:"/contacts",children:[y.jsx(BP,{size:22,strokeWidth:1.5})," Контакти"]})]}),y.jsx(zT,{children:y.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),y.jsx(GT,{})]})})})},XP=T.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,KP=T.footer`
 
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
`,ZP=T.div`
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
`,QP=T.div`
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
`,JP=()=>y.jsx(XP,{children:y.jsxs(KP,{children:[y.jsxs(ZP,{children:[y.jsxs(Zc,{children:[y.jsx(Qc,{children:"Навігація"}),y.jsx(gn,{to:"/",children:"Головна"}),y.jsx(gn,{to:"/about",children:"Про нас"}),y.jsx(gn,{to:"/catalog",children:"Каталог"}),y.jsx(gn,{to:"/contacts",children:"Контакти"})]}),y.jsxs(Zc,{children:[y.jsx(Qc,{children:"Інформація"}),y.jsx(gn,{to:"/delivery",children:"Оплата і доставка"}),y.jsx(gn,{children:"Повернення"}),y.jsx(gn,{children:"Гарантія"}),y.jsx(gn,{children:"Політика конфіденційності"})]})]}),y.jsxs(Zc,{children:[y.jsx(Qc,{children:"Контакти"}),y.jsx(gn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),y.jsx(gn,{href:"mailto:email@email.com",children:"email@email.com"}),y.jsxs(QP,{children:[y.jsx(v0,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${dn}#icon-instagram`})})}),y.jsx(v0,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${dn}#icon-telegram`})})})]})]})]})}),eO=()=>y.jsxs(y.Fragment,{children:[y.jsx(qP,{}),y.jsx("main",{className:"main-content",children:y.jsx(lE,{})}),y.jsx(JP,{})]});function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q.apply(this,arguments)}function tO(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function nO(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var rO=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(nO(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=tO(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),nt="-ms-",Ml="-moz-",ce="-webkit-",Eb="comm",Bh="rule",Vh="decl",iO="@import",Cb="@keyframes",oO="@layer",aO=Math.abs,Su=String.fromCharCode,sO=Object.assign;function lO(e,t){return Ke(e,0)^45?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}function kb(e){return e.trim()}function uO(e,t){return(e=t.exec(e))?e[0]:e}function de(e,t,n){return e.replace(t,n)}function Zf(e,t){return e.indexOf(t)}function Ke(e,t){return e.charCodeAt(t)|0}function ma(e,t,n){return e.slice(t,n)}function yn(e){return e.length}function Hh(e){return e.length}function ds(e,t){return t.push(e),e}function cO(e,t){return e.map(t).join("")}var _u=1,Wi=1,Tb=0,Ct=0,je=0,no="";function Eu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:_u,column:Wi,length:a,return:""}}function wo(e,t){return sO(Eu("",null,null,"",null,null,0),e,{length:-e.length},t)}function dO(){return je}function fO(){return je=Ct>0?Ke(no,--Ct):0,Wi--,je===10&&(Wi=1,_u--),je}function Lt(){return je=Ct<Tb?Ke(no,Ct++):0,Wi++,je===10&&(Wi=1,_u++),je}function En(){return Ke(no,Ct)}function Vs(){return Ct}function Da(e,t){return ma(no,e,t)}function ga(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pb(e){return _u=Wi=1,Tb=yn(no=e),Ct=0,[]}function Ob(e){return no="",e}function Hs(e){return kb(Da(Ct-1,Qf(e===91?e+2:e===40?e+1:e)))}function pO(e){for(;(je=En())&&je<33;)Lt();return ga(e)>2||ga(je)>3?"":" "}function hO(e,t){for(;--t&&Lt()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return Da(e,Vs()+(t<6&&En()==32&&Lt()==32))}function Qf(e){for(;Lt();)switch(je){case e:return Ct;case 34:case 39:e!==34&&e!==39&&Qf(je);break;case 40:e===41&&Qf(e);break;case 92:Lt();break}return Ct}function mO(e,t){for(;Lt()&&e+je!==47+10;)if(e+je===42+42&&En()===47)break;return"/*"+Da(t,Ct-1)+"*"+Su(e===47?e:Lt())}function gO(e){for(;!ga(En());)Lt();return Da(e,Ct)}function vO(e){return Ob(Us("",null,null,null,[""],e=Pb(e),0,[0],e))}function Us(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,m=0,f=0,h=0,v=1,w=1,p=1,g=0,x="",S=i,E=o,k=r,_=x;w;)switch(h=g,g=Lt()){case 40:if(h!=108&&Ke(_,d-1)==58){Zf(_+=de(Hs(g),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:_+=Hs(g);break;case 9:case 10:case 13:case 32:_+=pO(h);break;case 92:_+=hO(Vs()-1,7);continue;case 47:switch(En()){case 42:case 47:ds(yO(mO(Lt(),Vs()),t,n),s);break;default:_+="/"}break;case 123*v:l[u++]=yn(_)*p;case 125*v:case 59:case 0:switch(g){case 0:case 125:w=0;case 59+c:p==-1&&(_=de(_,/\f/g,"")),f>0&&yn(_)-d&&ds(f>32?x0(_+";",r,n,d-1):x0(de(_," ","")+";",r,n,d-2),s);break;case 59:_+=";";default:if(ds(k=y0(_,t,n,u,c,i,l,x,S=[],E=[],d),o),g===123)if(c===0)Us(_,t,k,k,S,o,d,l,E);else switch(m===99&&Ke(_,3)===110?100:m){case 100:case 108:case 109:case 115:Us(e,k,k,r&&ds(y0(e,k,k,0,0,i,l,x,i,S=[],d),E),i,E,d,l,r?S:E);break;default:Us(_,k,k,k,[""],E,0,l,E)}}u=c=f=0,v=p=1,x=_="",d=a;break;case 58:d=1+yn(_),f=h;default:if(v<1){if(g==123)--v;else if(g==125&&v++==0&&fO()==125)continue}switch(_+=Su(g),g*v){case 38:p=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(yn(_)-1)*p,p=1;break;case 64:En()===45&&(_+=Hs(Lt())),m=En(),c=d=yn(x=_+=gO(Vs())),g++;break;case 45:h===45&&yn(_)==2&&(v=0)}}return o}function y0(e,t,n,r,i,o,a,l,s,u,c){for(var d=i-1,m=i===0?o:[""],f=Hh(m),h=0,v=0,w=0;h<r;++h)for(var p=0,g=ma(e,d+1,d=aO(v=a[h])),x=e;p<f;++p)(x=kb(v>0?m[p]+" "+g:de(g,/&\f/g,m[p])))&&(s[w++]=x);return Eu(e,t,n,i===0?Bh:l,s,u,c)}function yO(e,t,n){return Eu(e,t,n,Eb,Su(dO()),ma(e,2,-2),0)}function x0(e,t,n,r){return Eu(e,t,n,Vh,ma(e,0,r),ma(e,r+1,-1),r)}function $i(e,t){for(var n="",r=Hh(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function xO(e,t,n,r){switch(e.type){case oO:if(e.children.length)break;case iO:case Vh:return e.return=e.return||e.value;case Eb:return"";case Cb:return e.return=e.value+"{"+$i(e.children,r)+"}";case Bh:e.value=e.props.join(",")}return yn(n=$i(e.children,r))?e.return=e.value+"{"+n+"}":""}function bO(e){var t=Hh(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function wO(e){return function(t){t.root||(t=t.return)&&e(t)}}function SO(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var _O=function(t,n,r){for(var i=0,o=0;i=o,o=En(),i===38&&o===12&&(n[r]=1),!ga(o);)Lt();return Da(t,Ct)},EO=function(t,n){var r=-1,i=44;do switch(ga(i)){case 0:i===38&&En()===12&&(n[r]=1),t[r]+=_O(Ct-1,n,r);break;case 2:t[r]+=Hs(i);break;case 4:if(i===44){t[++r]=En()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Su(i)}while(i=Lt());return t},CO=function(t,n){return Ob(EO(Pb(t),n))},b0=new WeakMap,kO=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!b0.get(r))&&!i){b0.set(t,!0);for(var o=[],a=CO(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var c=0;c<l.length;c++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[c]):l[c]+" "+a[s]}}},TO=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Mb(e,t){switch(lO(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+Ml+e+nt+e+e;case 6828:case 4268:return ce+e+nt+e+e;case 6165:return ce+e+nt+"flex-"+e+e;case 5187:return ce+e+de(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+nt+"flex-$1$2")+e;case 5443:return ce+e+nt+"flex-item-"+de(e,/flex-|-self/,"")+e;case 4675:return ce+e+nt+"flex-line-pack"+de(e,/align-content|flex-|-self/,"")+e;case 5548:return ce+e+nt+de(e,"shrink","negative")+e;case 5292:return ce+e+nt+de(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+de(e,"-grow","")+ce+e+nt+de(e,"grow","positive")+e;case 4554:return ce+de(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return de(de(de(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return de(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return de(de(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+nt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+e+e;case 4095:case 3583:case 4068:case 2532:return de(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yn(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(Ke(e,t+4)!==45)break;case 102:return de(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Ml+(Ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Zf(e,"stretch")?Mb(de(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ke(e,t+1)!==115)break;case 6444:switch(Ke(e,yn(e)-3-(~Zf(e,"!important")&&10))){case 107:return de(e,":",":"+ce)+e;case 101:return de(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ce+(Ke(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+nt+"$2box$3")+e}break;case 5936:switch(Ke(e,t+11)){case 114:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+nt+de(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ce+e+nt+e+e}return e}var PO=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Vh:t.return=Mb(t.value,t.length);break;case Cb:return $i([wo(t,{value:de(t.value,"@","@"+ce)})],i);case Bh:if(t.length)return cO(t.props,function(o){switch(uO(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return $i([wo(t,{props:[de(o,/:(read-\w+)/,":"+Ml+"$1")]})],i);case"::placeholder":return $i([wo(t,{props:[de(o,/:(plac\w+)/,":"+ce+"input-$1")]}),wo(t,{props:[de(o,/:(plac\w+)/,":"+Ml+"$1")]}),wo(t,{props:[de(o,/:(plac\w+)/,nt+"input-$1")]})],i)}return""})}},OO=[PO],MO=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var w=v.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||OO,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var w=v.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)o[w[p]]=!0;l.push(v)});var s,u=[kO,TO];{var c,d=[xO,wO(function(v){c.insert(v)})],m=bO(u.concat(i,d)),f=function(w){return $i(vO(w),m)};s=function(w,p,g,x){c=g,f(w?w+"{"+p.styles+"}":p.styles),x&&(h.inserted[p.name]=!0)}}var h={key:n,sheet:new rO({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return h.sheet.hydrate(l),h},$b={exports:{}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=typeof Symbol=="function"&&Symbol.for,Uh=Ye?Symbol.for("react.element"):60103,Wh=Ye?Symbol.for("react.portal"):60106,Cu=Ye?Symbol.for("react.fragment"):60107,ku=Ye?Symbol.for("react.strict_mode"):60108,Tu=Ye?Symbol.for("react.profiler"):60114,Pu=Ye?Symbol.for("react.provider"):60109,Ou=Ye?Symbol.for("react.context"):60110,Gh=Ye?Symbol.for("react.async_mode"):60111,Mu=Ye?Symbol.for("react.concurrent_mode"):60111,$u=Ye?Symbol.for("react.forward_ref"):60112,Iu=Ye?Symbol.for("react.suspense"):60113,$O=Ye?Symbol.for("react.suspense_list"):60120,ju=Ye?Symbol.for("react.memo"):60115,Du=Ye?Symbol.for("react.lazy"):60116,IO=Ye?Symbol.for("react.block"):60121,jO=Ye?Symbol.for("react.fundamental"):60117,DO=Ye?Symbol.for("react.responder"):60118,LO=Ye?Symbol.for("react.scope"):60119;function zt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Uh:switch(e=e.type,e){case Gh:case Mu:case Cu:case Tu:case ku:case Iu:return e;default:switch(e=e&&e.$$typeof,e){case Ou:case $u:case Du:case ju:case Pu:return e;default:return t}}case Wh:return t}}}function Ib(e){return zt(e)===Mu}me.AsyncMode=Gh;me.ConcurrentMode=Mu;me.ContextConsumer=Ou;me.ContextProvider=Pu;me.Element=Uh;me.ForwardRef=$u;me.Fragment=Cu;me.Lazy=Du;me.Memo=ju;me.Portal=Wh;me.Profiler=Tu;me.StrictMode=ku;me.Suspense=Iu;me.isAsyncMode=function(e){return Ib(e)||zt(e)===Gh};me.isConcurrentMode=Ib;me.isContextConsumer=function(e){return zt(e)===Ou};me.isContextProvider=function(e){return zt(e)===Pu};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Uh};me.isForwardRef=function(e){return zt(e)===$u};me.isFragment=function(e){return zt(e)===Cu};me.isLazy=function(e){return zt(e)===Du};me.isMemo=function(e){return zt(e)===ju};me.isPortal=function(e){return zt(e)===Wh};me.isProfiler=function(e){return zt(e)===Tu};me.isStrictMode=function(e){return zt(e)===ku};me.isSuspense=function(e){return zt(e)===Iu};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Cu||e===Mu||e===Tu||e===ku||e===Iu||e===$O||typeof e=="object"&&e!==null&&(e.$$typeof===Du||e.$$typeof===ju||e.$$typeof===Pu||e.$$typeof===Ou||e.$$typeof===$u||e.$$typeof===jO||e.$$typeof===DO||e.$$typeof===LO||e.$$typeof===IO)};me.typeOf=zt;$b.exports=me;var RO=$b.exports,jb=RO,AO={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},FO={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Db={};Db[jb.ForwardRef]=AO;Db[jb.Memo]=FO;var NO=!0;function Lb(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Yh=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||NO===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Rb=function(t,n,r){Yh(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function zO(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var BO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},VO=/[A-Z]|^ms/g,HO=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ab=function(t){return t.charCodeAt(1)===45},w0=function(t){return t!=null&&typeof t!="boolean"},Jc=SO(function(e){return Ab(e)?e:e.replace(VO,"-$&").toLowerCase()}),S0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(HO,function(r,i,o){return xn={name:i,styles:o,next:xn},i})}return BO[t]!==1&&!Ab(t)&&typeof n=="number"&&n!==0?n+"px":n};function va(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return xn={name:n.name,styles:n.styles,next:xn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)xn={name:r.name,styles:r.styles,next:xn},r=r.next;var i=n.styles+";";return i}return UO(e,t,n)}case"function":{if(e!==void 0){var o=xn,a=n(e);return xn=o,va(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function UO(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=va(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":w0(a)&&(r+=Jc(o)+":"+S0(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)w0(a[l])&&(r+=Jc(o)+":"+S0(o,a[l])+";");else{var s=va(e,t,a);switch(o){case"animation":case"animationName":{r+=Jc(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var _0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,xn,qh=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";xn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=va(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=va(r,n,t[l]),i&&(o+=a[l]);_0.lastIndex=0;for(var s="",u;(u=_0.exec(o))!==null;)s+="-"+u[1];var c=zO(o)+s;return{name:c,styles:o,next:xn}},WO=function(t){return t()},GO=Ud["useInsertionEffect"]?Ud["useInsertionEffect"]:!1,Fb=GO||WO,Xh={}.hasOwnProperty,Nb=b.createContext(typeof HTMLElement<"u"?MO({key:"css"}):null);Nb.Provider;var zb=function(t){return b.forwardRef(function(n,r){var i=b.useContext(Nb);return t(n,i,r)})},Bb=b.createContext({}),Jf="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",YO=function(t,n){var r={};for(var i in n)Xh.call(n,i)&&(r[i]=n[i]);return r[Jf]=t,r},qO=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Yh(n,r,i),Fb(function(){return Rb(n,r,i)}),null},XO=zb(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Jf],o=[r],a="";typeof e.className=="string"?a=Lb(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=qh(o,void 0,b.useContext(Bb));a+=t.key+"-"+l.name;var s={};for(var u in e)Xh.call(e,u)&&u!=="css"&&u!==Jf&&(s[u]=e[u]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(qO,{cache:t,serialized:l,isStringTag:typeof i=="string"}),b.createElement(i,s))}),KO=XO,K=function(t,n){var r=arguments;if(n==null||!Xh.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=KO,o[1]=YO(t,n);for(var a=2;a<i;a++)o[a]=r[a];return b.createElement.apply(null,o)};function Kh(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return qh(t)}var ZO=function(){var t=Kh.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},QO=Tk,JO=function(t){return t!=="theme"},E0=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?QO:JO},C0=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},eM=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Yh(n,r,i),Fb(function(){return Rb(n,r,i)}),null},tM=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=C0(t,n,r),s=l||E0(i),u=!s("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var m=c.length,f=1;f<m;f++)d.push(c[f],c[0][f])}var h=zb(function(v,w,p){var g=u&&v.as||i,x="",S=[],E=v;if(v.theme==null){E={};for(var k in v)E[k]=v[k];E.theme=b.useContext(Bb)}typeof v.className=="string"?x=Lb(w.registered,S,v.className):v.className!=null&&(x=v.className+" ");var _=qh(d.concat(S),w.registered,E);x+=w.key+"-"+_.name,a!==void 0&&(x+=" "+a);var C=u&&l===void 0?E0(g):s,O={};for(var $ in v)u&&$==="as"||C($)&&(O[$]=v[$]);return O.className=x,O.ref=p,b.createElement(b.Fragment,null,b.createElement(eM,{cache:w,serialized:_,isStringTag:typeof g=="string"}),b.createElement(g,O))});return h.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=l,Object.defineProperty(h,"toString",{value:function(){return"."+a}}),h.withComponent=function(v,w){return e(v,Q({},n,w,{shouldForwardProp:C0(h,w,!0)})).apply(void 0,d)},h}},nM=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ze=tM.bind();nM.forEach(function(e){ze[e]=ze(e)});const rM=ze.section`
  background-color:  var(--second-background);
 
 
`,iM=ze.div`
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
   
  }
  
`,oM=ze.h1`

font-size: 32px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;


`,aM=ze.div`
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
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    padding-left: 0;
    padding-right: 0;
    margin-left: 30px;
    max-width: 1000px;
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
`;const sM=ze(Me)`
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
`,lM=ze.div`
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
`,uM=ze.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
 

  display: block;
   @media screen and (max-width: 768px) {
  height: 100px;
  }

`,cM=ze.p`
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

`;var dM={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};fM(dM);function fM(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}var pM="#4fa94d",hM={"aria-busy":!0,role:"progressbar"},mM=T.div`
  display: ${e=>e.$visible?"flex":"none"};
`,gM="http://www.w3.org/2000/svg",Lu=({height:e=100,width:t=100,radius:n=5,color:r=pM,ariaLabel:i="ball-triangle-loading",wrapperClass:o,wrapperStyle:a,visible:l=!0})=>y.jsx(mM,{style:{...a},$visible:l,className:o,"data-testid":"ball-triangle-loading","aria-label":i,...hM,children:y.jsxs("svg",{height:e,width:t,stroke:r,viewBox:"0 0 57 57",xmlns:gM,"data-testid":"ball-triangle-svg",children:[y.jsx("title",{children:"Ball Triangle"}),y.jsx("desc",{children:"Animated representation of three balls"}),y.jsx("g",{fill:"none",fillRule:"evenodd",children:y.jsxs("g",{transform:"translate(1 1)",strokeWidth:"2",children:[y.jsxs("circle",{cx:"5",cy:"50",r:n,children:[y.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),y.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})]}),y.jsxs("circle",{cx:"27",cy:"5",r:n,children:[y.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),y.jsx("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})]}),y.jsxs("circle",{cx:"49",cy:"50",r:n,children:[y.jsx("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),y.jsx("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"})]})]})})]})}),Qt=242.776657104492,vM=1.6,yM=Fh`
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
  animation: ${yM} ${vM}s linear infinite;
`;var xM=Fh`
to {
   transform: rotate(360deg);
 }
`;T.svg`
  animation: ${xM} ${e=>String(e.$animationDuration).endsWith("s")?String(e.$animationDuration):`${e.$animationDuration}s`} steps(12, end) infinite;
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
`;var bM=Fh`
to {
   stroke-dashoffset: 136;
 }
`;T.polygon`
  stroke-dasharray: 17;
  animation: ${bM} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;T.svg`
  transform-origin: 50% 65%;
`;const wM=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{async function i(){try{r(!0);const a=await(await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=*&pagination[limit]=50&sort=title:asc")).json();console.log(a),t(a.data.map(l=>{var s;return{id:l.id_title,title:l.title,image:(s=l.image)==null?void 0:s.url}}))}catch(o){console.log(o)}finally{r(!1)}}i()},[]),n?y.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:y.jsx(Lu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):y.jsx(rM,{children:y.jsxs(iM,{children:[y.jsx(oM,{children:"Каталог"}),y.jsx(aM,{children:e.map(i=>y.jsxs(sM,{to:`/catalog/${i.title}`,children:[y.jsx(lM,{children:y.jsx(uM,{src:i.image,alt:i.title})}),y.jsx(cM,{children:i.title})]},i.id))})]})})},SM=ze.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,_M=ze.h1`
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
`,EM=ze.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,CM=ze(Me)`

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

  
`,kM=()=>y.jsxs(SM,{children:[y.jsxs(_M,{children:[" ",y.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),y.jsx(EM,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),y.jsx(CM,{children:" На головну"})]});const TM=T.div`
  width: 100%;
  height: 100%;
font-family: var(--main-font);
`,PM=T.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var Vb={},Hb={},Ru={},Ub={exports:{}},La={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var k0=Object.getOwnPropertySymbols,OM=Object.prototype.hasOwnProperty,MM=Object.prototype.propertyIsEnumerable;function $M(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function IM(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var jM=IM()?Object.assign:function(e,t){for(var n,r=$M(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)OM.call(n,a)&&(r[a]=n[a]);if(k0){i=k0(n);for(var l=0;l<i.length;l++)MM.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},Wb={exports:{}},le={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh=jM,ro=60103,Gb=60106;le.Fragment=60107;le.StrictMode=60108;le.Profiler=60114;var Yb=60109,qb=60110,Xb=60112;le.Suspense=60113;var Kb=60115,Zb=60116;if(typeof Symbol=="function"&&Symbol.for){var Zt=Symbol.for;ro=Zt("react.element"),Gb=Zt("react.portal"),le.Fragment=Zt("react.fragment"),le.StrictMode=Zt("react.strict_mode"),le.Profiler=Zt("react.profiler"),Yb=Zt("react.provider"),qb=Zt("react.context"),Xb=Zt("react.forward_ref"),le.Suspense=Zt("react.suspense"),Kb=Zt("react.memo"),Zb=Zt("react.lazy")}var T0=typeof Symbol=="function"&&Symbol.iterator;function DM(e){return e===null||typeof e!="object"?null:(e=T0&&e[T0]||e["@@iterator"],typeof e=="function"?e:null)}function Ra(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jb={};function io(e,t,n){this.props=e,this.context=t,this.refs=Jb,this.updater=n||Qb}io.prototype.isReactComponent={};io.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Ra(85));this.updater.enqueueSetState(this,e,t,"setState")};io.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ew(){}ew.prototype=io.prototype;function Qh(e,t,n){this.props=e,this.context=t,this.refs=Jb,this.updater=n||Qb}var Jh=Qh.prototype=new ew;Jh.constructor=Qh;Zh(Jh,io.prototype);Jh.isPureReactComponent=!0;var em={current:null},tw=Object.prototype.hasOwnProperty,nw={key:!0,ref:!0,__self:!0,__source:!0};function rw(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)tw.call(t,r)&&!nw.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ro,type:e,key:o,ref:a,props:i,_owner:em.current}}function LM(e,t){return{$$typeof:ro,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tm(e){return typeof e=="object"&&e!==null&&e.$$typeof===ro}function RM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var P0=/\/+/g;function ed(e,t){return typeof e=="object"&&e!==null&&e.key!=null?RM(""+e.key):t.toString(36)}function Ws(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ro:case Gb:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ed(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(P0,"$&/")+"/"),Ws(i,t,n,"",function(u){return u})):i!=null&&(tm(i)&&(i=LM(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(P0,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+ed(o,l);a+=Ws(o,t,n,s,i)}else if(s=DM(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+ed(o,l++),a+=Ws(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(Ra(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function fs(e,t,n){if(e==null)return e;var r=[],i=0;return Ws(e,r,"","",function(o){return t.call(n,o,i++)}),r}function AM(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var iw={current:null};function Kn(){var e=iw.current;if(e===null)throw Error(Ra(321));return e}var FM={ReactCurrentDispatcher:iw,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:em,IsSomeRendererActing:{current:!1},assign:Zh};le.Children={map:fs,forEach:function(e,t,n){fs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fs(e,function(){t++}),t},toArray:function(e){return fs(e,function(t){return t})||[]},only:function(e){if(!tm(e))throw Error(Ra(143));return e}};le.Component=io;le.PureComponent=Qh;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FM;le.cloneElement=function(e,t,n){if(e==null)throw Error(Ra(267,e));var r=Zh({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=em.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)tw.call(t,s)&&!nw.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ro,type:e.type,key:i,ref:o,props:r,_owner:a}};le.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:qb,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Yb,_context:e},e.Consumer=e};le.createElement=rw;le.createFactory=function(e){var t=rw.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:Xb,render:e}};le.isValidElement=tm;le.lazy=function(e){return{$$typeof:Zb,_payload:{_status:-1,_result:e},_init:AM}};le.memo=function(e,t){return{$$typeof:Kb,type:e,compare:t===void 0?null:t}};le.useCallback=function(e,t){return Kn().useCallback(e,t)};le.useContext=function(e,t){return Kn().useContext(e,t)};le.useDebugValue=function(){};le.useEffect=function(e,t){return Kn().useEffect(e,t)};le.useImperativeHandle=function(e,t,n){return Kn().useImperativeHandle(e,t,n)};le.useLayoutEffect=function(e,t){return Kn().useLayoutEffect(e,t)};le.useMemo=function(e,t){return Kn().useMemo(e,t)};le.useReducer=function(e,t,n){return Kn().useReducer(e,t,n)};le.useRef=function(e){return Kn().useRef(e)};le.useState=function(e){return Kn().useState(e)};le.version="17.0.2";Wb.exports=le;var NM=Wb.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zM=NM,ow=60103;La.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var O0=Symbol.for;ow=O0("react.element"),La.Fragment=O0("react.fragment")}var BM=zM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,VM=Object.prototype.hasOwnProperty,HM={key:!0,ref:!0,__self:!0,__source:!0};function aw(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)VM.call(t,r)&&!HM.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ow,type:e,key:o,ref:a,props:i,_owner:BM.current}}La.jsx=aw;La.jsxs=aw;Ub.exports=La;var Tt=Ub.exports,sw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(sw);var Pt=sw.exports;const UM={"lds-circle":"_lds-circle_qlxhy_1"},WM=Object.freeze(Object.defineProperty({__proto__:null,default:UM},Symbol.toStringTag,{value:"Module"})),GM=kt(WM);var lw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ru,"__esModule",{value:!0});Ru.Circle=void 0;const YM=Tt,qM=lw(Pt),XM=lw(GM);function KM({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,YM.jsx)("div",{className:(0,qM.default)(XM.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}Ru.Circle=KM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=Ru;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(Hb);var uw={},Au={};const ZM={"lds-default":"_lds-default_wt1n8_1"},QM=Object.freeze(Object.defineProperty({__proto__:null,default:ZM},Symbol.toStringTag,{value:"Module"})),JM=kt(QM);var cw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Au,"__esModule",{value:!0});Au.Default=void 0;const M0=Tt,e4=cw(Pt),t4=cw(JM);function n4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,M0.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,M0.jsx)("div",{className:(0,e4.default)(t4.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}Au.Default=n4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=Au;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(uw);var dw={},Fu={};const r4={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},i4=Object.freeze(Object.defineProperty({__proto__:null,default:r4},Symbol.toStringTag,{value:"Module"})),o4=kt(i4);var fw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Fu,"__esModule",{value:!0});Fu.DualRing=void 0;const $0=Tt,I0=fw(Pt),j0=fw(o4);function a4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,$0.jsx)("div",{className:(0,I0.default)(j0.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,$0.jsx)("div",{className:(0,I0.default)(j0.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}Fu.DualRing=a4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=Fu;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(dw);var pw={},Nu={};const s4={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},l4=Object.freeze(Object.defineProperty({__proto__:null,default:s4},Symbol.toStringTag,{value:"Module"})),u4=kt(l4);var hw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Nu,"__esModule",{value:!0});Nu.Ellipsis=void 0;const D0=Tt,c4=hw(Pt),d4=hw(u4);function f4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,D0.jsx)("div",{style:{background:`${e}`}},l));return(0,D0.jsx)("div",{className:(0,c4.default)(d4.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}Nu.Ellipsis=f4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=Nu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(pw);var mw={},zu={};const p4={"lds-facebook":"_lds-facebook_1ts9g_1"},h4=Object.freeze(Object.defineProperty({__proto__:null,default:p4},Symbol.toStringTag,{value:"Module"})),m4=kt(h4);var gw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(zu,"__esModule",{value:!0});zu.Facebook=void 0;const L0=Tt,g4=gw(Pt),v4=gw(m4);function y4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,L0.jsx)("div",{style:{background:`${e}`}},l));return(0,L0.jsx)("div",{className:(0,g4.default)(v4.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}zu.Facebook=y4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=zu;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(mw);var vw={},Bu={};const x4={"lds-grid":"_lds-grid_1ftub_1"},b4=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),w4=kt(b4);var yw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Bu,"__esModule",{value:!0});Bu.Grid=void 0;const R0=Tt,S4=yw(Pt),_4=yw(w4);function E4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,R0.jsx)("div",{style:{background:`${e}`}},l));return(0,R0.jsx)("div",{className:(0,S4.default)(_4.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}Bu.Grid=E4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=Bu;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(vw);var xw={},Vu={};const C4={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},k4=Object.freeze(Object.defineProperty({__proto__:null,default:C4},Symbol.toStringTag,{value:"Module"})),T4=kt(k4);var bw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Vu,"__esModule",{value:!0});Vu.Heart=void 0;const ps=Tt,td=bw(Pt),nd=bw(T4);function P4({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,ps.jsx)("div",{className:(0,td.default)(nd.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,ps.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,ps.jsx)("div",{className:(0,td.default)(nd.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,ps.jsx)("div",{className:(0,td.default)(nd.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}Vu.Heart=P4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=Vu;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(xw);var ww={},Hu={};const O4={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},M4=Object.freeze(Object.defineProperty({__proto__:null,default:O4},Symbol.toStringTag,{value:"Module"})),$4=kt(M4);var Sw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Hu,"__esModule",{value:!0});Hu.Hourglass=void 0;const A0=Tt,F0=Sw(Pt),N0=Sw($4);function I4({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,A0.jsx)("div",{className:(0,F0.default)(N0.default["lds-hourglass"],n),style:{...r},children:(0,A0.jsx)("div",{className:(0,F0.default)(N0.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}Hu.Hourglass=I4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=Hu;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(ww);var _w={},Uu={};const Ew="_center_1rufi_10",Cw="_spin_1rufi_1",j4={"lds-orbitals":"_lds-orbitals_1rufi_1",center:Ew,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:Cw},D4=Object.freeze(Object.defineProperty({__proto__:null,center:Ew,default:j4,spin:Cw},Symbol.toStringTag,{value:"Module"})),L4=kt(D4);var kw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Uu,"__esModule",{value:!0});Uu.Orbitals=void 0;const tt=Tt,lt=kw(Pt),Se=kw(L4);function R4({color:e="#7f58af",className:t,style:n}){return(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["lds-orbitals"],t),style:{...n},children:[(0,tt.jsx)("div",{className:Se.default.center,style:{background:e}}),(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["inner-spin"]),children:[(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-arc"],Se.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-moon-a"]),style:{background:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["inner-moon-b"]),style:{background:e}})]}),(0,tt.jsxs)("div",{className:(0,lt.default)(Se.default["outer-spin"]),children:[(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-arc"],Se.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-moon-a"]),style:{background:e}}),(0,tt.jsx)("div",{className:(0,lt.default)(Se.default["outer-moon-b"]),style:{background:e}})]})]})}Uu.Orbitals=R4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=Uu;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(_w);var Tw={},Wu={};const A4={"lds-ring":"_lds-ring_xgxdp_1"},F4=Object.freeze(Object.defineProperty({__proto__:null,default:A4},Symbol.toStringTag,{value:"Module"})),N4=kt(F4);var Pw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Wu,"__esModule",{value:!0});Wu.Ring=void 0;const z0=Tt,z4=Pw(Pt),B4=Pw(N4);function V4({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,z0.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,z0.jsx)("div",{className:(0,z4.default)(B4.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}Wu.Ring=V4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=Wu;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(Tw);var Ow={},Gu={};const H4={"lds-ripple":"_lds-ripple_1lgcf_1"},U4=Object.freeze(Object.defineProperty({__proto__:null,default:H4},Symbol.toStringTag,{value:"Module"})),W4=kt(U4);var Mw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Gu,"__esModule",{value:!0});Gu.Ripple=void 0;const B0=Tt,G4=Mw(Pt),Y4=Mw(W4);function q4({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,B0.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,B0.jsx)("div",{className:(0,G4.default)(Y4.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}Gu.Ripple=q4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=Gu;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(Ow);var $w={},Yu={};const X4={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},K4=Object.freeze(Object.defineProperty({__proto__:null,default:X4},Symbol.toStringTag,{value:"Module"})),Z4=kt(K4);var Iw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Yu,"__esModule",{value:!0});Yu.Roller=void 0;const rd=Tt,V0=Iw(Pt),H0=Iw(Z4);function Q4({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,rd.jsx)("div",{children:(0,rd.jsx)("div",{className:(0,V0.default)(H0.default["div-after"]),style:{background:e}})},o));return(0,rd.jsx)("div",{className:(0,V0.default)(H0.default["lds-roller"],t),style:{...n},children:r})}Yu.Roller=Q4;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=Yu;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})($w);var jw={},qu={};const J4={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},e3=Object.freeze(Object.defineProperty({__proto__:null,default:J4},Symbol.toStringTag,{value:"Module"})),t3=kt(e3);var Dw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(qu,"__esModule",{value:!0});qu.Spinner=void 0;const id=Tt,U0=Dw(Pt),W0=Dw(t3);function n3({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,id.jsx)("div",{children:(0,id.jsx)("div",{className:(0,U0.default)(W0.default["div-after"]),style:{background:e}})},o));return(0,id.jsx)("div",{className:(0,U0.default)(W0.default["lds-spinner"],t),style:{...n},children:r})}qu.Spinner=n3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=qu;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(jw);var Lw={},Xu={};const Rw="_left_v9vlb_30",Aw="_right_v9vlb_33",Fw="_anim_v9vlb_37",r3={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:Rw,right:Aw,anim:Fw,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},i3=Object.freeze(Object.defineProperty({__proto__:null,anim:Fw,default:r3,left:Rw,right:Aw},Symbol.toStringTag,{value:"Module"})),o3=kt(i3);var Nw=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xu,"__esModule",{value:!0});Xu.Ouroboro=void 0;const So=Tt,_o=Nw(Pt),Eo=Nw(o3);function a3({color:e="#7f58af",style:t,className:n}){return(0,So.jsxs)("div",{className:(0,_o.default)(Eo.default["lds-ouroboro"],n),style:{...t},children:[(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.left),children:(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.anim),style:{background:e}})}),(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.right),children:(0,So.jsx)("span",{className:(0,_o.default)(Eo.default.anim),style:{background:e}})})]})}Xu.Ouroboro=a3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=Xu;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})(Lw);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=Hb;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=uw;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=dw;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=pw;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=mw;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=vw;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=xw;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=ww;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const u=_w;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return u.Orbitals}});const c=Tw;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return c.Ring}});const d=Ow;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return d.Ripple}});const m=$w;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return m.Roller}});const f=jw;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return f.Spinner}});const h=Lw;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return h.Ouroboro}})})(Vb);const s3=()=>y.jsx(PM,{children:y.jsx(Vb.Default,{color:"#6d433da8"})});const l3="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",u3=PT`
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
  src: url(${l3}) format('truetype');
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
`,c3=T.div`
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
`,d3=T(Me)`
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
`,f3=T.h2`
  margin-top: 20px;
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,p3=T.h3`

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
`,h3=T.a`

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
`,m3=T.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,g3=()=>{const[e,t]=b.useState([]);return b.useEffect(()=>{async function n(){try{const r=await fetch("https://backenddidiv-production.up.railway.app/api/categories?populate=image&sort=title:asc",{credentials:"omit"});if(!r.ok){console.error("Server error:",r.status);return}const i=await r.json();if(console.log("API response:",i),!i.data){console.error("No data field:",i);return}t(i.data.map(o=>{var a;return{id:o.id_title,title:o.title,image:(a=o.image)==null?void 0:a.url}}))}catch(r){console.error("Fetch error:",r)}}n()},[]),console.log(e),y.jsxs(y.Fragment,{children:[y.jsx(f3,{children:"Каталог"}),y.jsxs(c3,{children:[e.slice(0,6).map(n=>y.jsx(d3,{to:`catalog/${n.id}`,bg:n.image,isBig:n.big,children:y.jsx(p3,{children:n.title})},n.id)),y.jsxs(h3,{href:"catalog",children:[y.jsx("p",{children:"Весь каталог"}),y.jsx(m3,{children:y.jsx(bb,{size:24})})]})]})]})};function G0(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function nm(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:G0(t[r])&&G0(e[r])&&Object.keys(t[r]).length>0&&nm(e[r],t[r])})}const zw={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Cn(){const e=typeof document<"u"?document:{};return nm(e,zw),e}const v3={document:zw,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function gt(){const e=typeof window<"u"?window:{};return nm(e,v3),e}function y3(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function x3(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Bw(e,t=0){return setTimeout(e,t)}function $l(){return Date.now()}function b3(e){const t=gt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function w3(e,t="x"){const n=gt();let r,i,o;const a=b3(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function hs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function S3(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Mt(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!S3(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(hs(t[l])&&hs(r[l])?r[l].__swiper__?t[l]=r[l]:Mt(t[l],r[l]):!hs(t[l])&&hs(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Mt(t[l],r[l])):t[l]=r[l])}}}return t}function li(e,t,n){e.style.setProperty(t,n)}function Vw({swiper:e,targetPosition:t,side:n}){const r=gt(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",u=(d,m)=>s==="next"&&d>=m||s==="prev"&&d<=m,c=()=>{a=new Date().getTime(),o===null&&(o=a);const d=Math.max(Math.min((a-o)/l,1),0),m=.5-Math.cos(d*Math.PI)/2;let f=i+m*(t-i);if(u(f,t)&&(f=t),e.wrapperEl.scrollTo({[n]:f}),u(f,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:f})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(c)};c()}function wn(e,t=""){const n=gt(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function _3(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function E3(e,t){const n=gt();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=_3(e,t))),r}function Il(e){try{console.warn(e);return}catch{}}function jl(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:y3(t)),n}function C3(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function k3(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function cr(e,t){return gt().getComputedStyle(e,null).getPropertyValue(t)}function Dl(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Hw(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function ep(e,t,n){const r=gt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function Ue(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function ya(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function Uw(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=wn(e.el,`.${r[i]}`)[0];o||(o=jl("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const Y0='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function T3({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:Y0};function i(f){let h;return f&&typeof f=="string"&&e.isElement&&(h=e.el.querySelector(f)||e.hostEl.querySelector(f),h)?h:(f&&(typeof f=="string"&&(h=[...document.querySelectorAll(f)]),e.params.uniqueNavElements&&typeof f=="string"&&h&&h.length>1&&e.el.querySelectorAll(f).length===1?h=e.el.querySelector(f):h&&h.length===1&&(h=h[0])),f&&!h?f:h)}function o(f,h){const v=e.params.navigation;f=Ue(f),f.forEach(w=>{w&&(w.classList[h?"add":"remove"](...v.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=h),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](v.lockClass))})}function a(){const{nextEl:f,prevEl:h}=e.navigation;if(e.params.loop){o(h,!1),o(f,!1);return}o(h,e.isBeginning&&!e.params.rewind),o(f,e.isEnd&&!e.params.rewind)}function l(f){f.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(f){f.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const f=e.params.navigation;if(e.params.navigation=Uw(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(f.nextEl||f.prevEl))return;let h=i(f.nextEl),v=i(f.prevEl);Object.assign(e.navigation,{nextEl:h,prevEl:v}),h=Ue(h),v=Ue(v);const w=(p,g)=>{if(p){if(f.addIcons&&p.matches(".swiper-button-next,.swiper-button-prev")&&!p.querySelector("svg")){const x=document.createElement("div");ya(x,Y0),p.appendChild(x.querySelector("svg")),x.remove()}p.addEventListener("click",g==="next"?s:l)}!e.enabled&&p&&p.classList.add(...f.lockClass.split(" "))};h.forEach(p=>w(p,"next")),v.forEach(p=>w(p,"prev"))}function c(){let{nextEl:f,prevEl:h}=e.navigation;f=Ue(f),h=Ue(h);const v=(w,p)=>{w.removeEventListener("click",p==="next"?s:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};f.forEach(w=>v(w,"next")),h.forEach(w=>v(w,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?m():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{c()}),n("enable disable",()=>{let{nextEl:f,prevEl:h}=e.navigation;if(f=Ue(f),h=Ue(h),e.enabled){a();return}[...f,...h].filter(v=>!!v).forEach(v=>v.classList.add(e.params.navigation.lockClass))}),n("click",(f,h)=>{let{nextEl:v,prevEl:w}=e.navigation;v=Ue(v),w=Ue(w);const p=h.target;let g=w.includes(p)||v.includes(p);if(e.isElement&&!g){const x=h.path||h.composedPath&&h.composedPath();x&&(g=x.find(S=>v.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!g){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===p||e.pagination.el.contains(p)))return;let x;v.length?x=v[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(x=w[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...v,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},m=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),c()};Object.assign(e.navigation,{enable:d,disable:m,update:a,init:u,destroy:c})}function Co(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function P3({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:p=>p,formatFractionTotal:p=>p,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(p,g){const{bulletActiveClass:x}=e.params.pagination;p&&(p=p[`${g==="prev"?"previous":"next"}ElementSibling`],p&&(p.classList.add(`${x}-${g}`),p=p[`${g==="prev"?"previous":"next"}ElementSibling`],p&&p.classList.add(`${x}-${g}-${g}`)))}function u(p,g,x){if(p=p%x,g=g%x,g===p+1)return"next";if(g===p-1)return"previous"}function c(p){const g=p.target.closest(Co(e.params.pagination.bulletClass));if(!g)return;p.preventDefault();const x=Dl(g)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const S=u(e.realIndex,x,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function d(){const p=e.rtl,g=e.params.pagination;if(l())return;let x=e.pagination.el;x=Ue(x);let S,E;const k=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,_=e.params.loop?Math.ceil(k/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(E=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,E=e.previousSnapIndex):(E=e.previousIndex||0,S=e.activeIndex||0),g.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const C=e.pagination.bullets;let O,$,j;if(g.dynamicBullets&&(o=ep(C[0],e.isHorizontal()?"width":"height",!0),x.forEach(I=>{I.style[e.isHorizontal()?"width":"height"]=`${o*(g.dynamicMainBullets+4)}px`}),g.dynamicMainBullets>1&&E!==void 0&&(a+=S-(E||0),a>g.dynamicMainBullets-1?a=g.dynamicMainBullets-1:a<0&&(a=0)),O=Math.max(S-a,0),$=O+(Math.min(C.length,g.dynamicMainBullets)-1),j=($+O)/2),C.forEach(I=>{const D=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(R=>`${g.bulletActiveClass}${R}`)].map(R=>typeof R=="string"&&R.includes(" ")?R.split(" "):R).flat();I.classList.remove(...D)}),x.length>1)C.forEach(I=>{const D=Dl(I);D===S?I.classList.add(...g.bulletActiveClass.split(" ")):e.isElement&&I.setAttribute("part","bullet"),g.dynamicBullets&&(D>=O&&D<=$&&I.classList.add(...`${g.bulletActiveClass}-main`.split(" ")),D===O&&s(I,"prev"),D===$&&s(I,"next"))});else{const I=C[S];if(I&&I.classList.add(...g.bulletActiveClass.split(" ")),e.isElement&&C.forEach((D,R)=>{D.setAttribute("part",R===S?"bullet-active":"bullet")}),g.dynamicBullets){const D=C[O],R=C[$];for(let L=O;L<=$;L+=1)C[L]&&C[L].classList.add(...`${g.bulletActiveClass}-main`.split(" "));s(D,"prev"),s(R,"next")}}if(g.dynamicBullets){const I=Math.min(C.length,g.dynamicMainBullets+4),D=(o*I-o)/2-j*o,R=p?"right":"left";C.forEach(L=>{L.style[e.isHorizontal()?R:"top"]=`${D}px`})}}x.forEach((C,O)=>{if(g.type==="fraction"&&(C.querySelectorAll(Co(g.currentClass)).forEach($=>{$.textContent=g.formatFractionCurrent(S+1)}),C.querySelectorAll(Co(g.totalClass)).forEach($=>{$.textContent=g.formatFractionTotal(_)})),g.type==="progressbar"){let $;g.progressbarOpposite?$=e.isHorizontal()?"vertical":"horizontal":$=e.isHorizontal()?"horizontal":"vertical";const j=(S+1)/_;let I=1,D=1;$==="horizontal"?I=j:D=j,C.querySelectorAll(Co(g.progressbarFillClass)).forEach(R=>{R.style.transform=`translate3d(0,0,0) scaleX(${I}) scaleY(${D})`,R.style.transitionDuration=`${e.params.speed}ms`})}g.type==="custom"&&g.renderCustom?(ya(C,g.renderCustom(e,S+1,_)),O===0&&r("paginationRender",C)):(O===0&&r("paginationRender",C),r("paginationUpdate",C)),e.params.watchOverflow&&e.enabled&&C.classList[e.isLocked?"add":"remove"](g.lockClass)})}function m(){const p=e.params.pagination;if(l())return;const g=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=Ue(x);let S="";if(p.type==="bullets"){let E=e.params.loop?Math.ceil(g/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&E>g&&(E=g);for(let k=0;k<E;k+=1)p.renderBullet?S+=p.renderBullet.call(e,k,p.bulletClass):S+=`<${p.bulletElement} ${e.isElement?'part="bullet"':""} class="${p.bulletClass}"></${p.bulletElement}>`}p.type==="fraction"&&(p.renderFraction?S=p.renderFraction.call(e,p.currentClass,p.totalClass):S=`<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),p.type==="progressbar"&&(p.renderProgressbar?S=p.renderProgressbar.call(e,p.progressbarFillClass):S=`<span class="${p.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(E=>{p.type!=="custom"&&ya(E,S||""),p.type==="bullets"&&e.pagination.bullets.push(...E.querySelectorAll(Co(p.bulletClass)))}),p.type!=="custom"&&r("paginationRender",x[0])}function f(){e.params.pagination=Uw(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const p=e.params.pagination;if(!p.el)return;let g;typeof p.el=="string"&&e.isElement&&(g=e.el.querySelector(p.el)),!g&&typeof p.el=="string"&&(g=[...document.querySelectorAll(p.el)]),g||(g=p.el),!(!g||g.length===0)&&(e.params.uniqueNavElements&&typeof p.el=="string"&&Array.isArray(g)&&g.length>1&&(g=[...e.el.querySelectorAll(p.el)],g.length>1&&(g=g.find(x=>Hw(x,".swiper")[0]===e.el))),Array.isArray(g)&&g.length===1&&(g=g[0]),Object.assign(e.pagination,{el:g}),g=Ue(g),g.forEach(x=>{p.type==="bullets"&&p.clickable&&x.classList.add(...(p.clickableClass||"").split(" ")),x.classList.add(p.modifierClass+p.type),x.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.type==="bullets"&&p.dynamicBullets&&(x.classList.add(`${p.modifierClass}${p.type}-dynamic`),a=0,p.dynamicMainBullets<1&&(p.dynamicMainBullets=1)),p.type==="progressbar"&&p.progressbarOpposite&&x.classList.add(p.progressbarOppositeClass),p.clickable&&x.addEventListener("click",c),e.enabled||x.classList.add(p.lockClass)}))}function h(){const p=e.params.pagination;if(l())return;let g=e.pagination.el;g&&(g=Ue(g),g.forEach(x=>{x.classList.remove(p.hiddenClass),x.classList.remove(p.modifierClass+p.type),x.classList.remove(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.clickable&&(x.classList.remove(...(p.clickableClass||"").split(" ")),x.removeEventListener("click",c))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...p.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const p=e.params.pagination;let{el:g}=e.pagination;g=Ue(g),g.forEach(x=>{x.classList.remove(p.horizontalClass,p.verticalClass),x.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?w():(f(),m(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{m(),d()}),n("destroy",()=>{h()}),n("enable disable",()=>{let{el:p}=e.pagination;p&&(p=Ue(p),p.forEach(g=>g.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(p,g)=>{const x=g.target,S=Ue(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const E=S[0].classList.contains(e.params.pagination.hiddenClass);r(E===!0?"paginationShow":"paginationHide"),S.forEach(k=>k.classList.toggle(e.params.pagination.hiddenClass))}});const v=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=Ue(p),p.forEach(g=>g.classList.remove(e.params.pagination.paginationDisabledClass))),f(),m(),d()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=Ue(p),p.forEach(g=>g.classList.add(e.params.pagination.paginationDisabledClass))),h()};Object.assign(e.pagination,{enable:v,disable:w,render:m,update:d,init:f,destroy:h})}function O3({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,u,c=new Date().getTime(),d,m,f,h,v,w;function p(A){!e||e.destroyed||!e.wrapperEl||A.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",p),!(w||A.detail&&A.detail.bySwiperTouchMove)&&O())}const g=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(s=u,d=!1);const A=e.autoplay.paused?u:c+s-new Date().getTime();e.autoplay.timeLeft=A,r("autoplayTimeLeft",A,A/l),a=requestAnimationFrame(()=>{g()})},x=()=>{let A;return e.virtual&&e.params.virtual.enabled?A=e.slides.find(M=>M.classList.contains("swiper-slide-active")):A=e.slides[e.activeIndex],A?parseInt(A.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let A=e.params.autoplay.delay;const P=x();return!Number.isNaN(P)&&P>0&&(A=P),A},E=A=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),g();let P=A;typeof P>"u"&&(P=S(),l=P,s=P),u=P;const M=e.params.speed,N=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(M,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,M,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(M,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,M,!0,!0),r("autoplay")),e.params.cssMode&&(c=new Date().getTime(),requestAnimationFrame(()=>{E()})))};return P>0?(clearTimeout(o),o=setTimeout(()=>{N()},P)):requestAnimationFrame(()=>{N()}),P},k=()=>{c=new Date().getTime(),e.autoplay.running=!0,E(),r("autoplayStart")},_=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},C=(A,P)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),A||(v=!0);const M=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",p):O()};if(e.autoplay.paused=!0,P){M();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-c),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),M())},O=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(c=new Date().getTime(),v?(v=!1,E(u)):E(),e.autoplay.paused=!1,r("autoplayResume"))},$=()=>{if(e.destroyed||!e.autoplay.running)return;const A=Cn();A.visibilityState==="hidden"&&(v=!0,C(!0)),A.visibilityState==="visible"&&O()},j=A=>{A.pointerType==="mouse"&&(v=!0,w=!0,!(e.animating||e.autoplay.paused)&&C(!0))},I=A=>{A.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&O())},D=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",j),e.el.addEventListener("pointerleave",I))},R=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",j),e.el.removeEventListener("pointerleave",I))},L=()=>{Cn().addEventListener("visibilitychange",$)},F=()=>{Cn().removeEventListener("visibilitychange",$)};n("init",()=>{e.params.autoplay.enabled&&(D(),L(),k())}),n("destroy",()=>{R(),F(),e.autoplay.running&&_()}),n("_freeModeStaticRelease",()=>{(f||v)&&O()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?_():C(!0,!0)}),n("beforeTransitionStart",(A,P,M)=>{e.destroyed||!e.autoplay.running||(M||!e.params.autoplay.disableOnInteraction?C(!0,!0):_())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){_();return}m=!0,f=!1,v=!1,h=setTimeout(()=>{v=!0,f=!0,C(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!m)){if(clearTimeout(h),clearTimeout(o),e.params.autoplay.disableOnInteraction){f=!1,m=!1;return}f&&e.params.cssMode&&O(),f=!1,m=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(u=S(),l=S())}),Object.assign(e.autoplay,{start:k,stop:_,pause:C,resume:O})}let od;function M3(){const e=gt(),t=Cn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Ww(){return od||(od=M3()),od}let ad;function $3({userAgent:e}={}){const t=Ww(),n=gt(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const c=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m=r==="Win32";let f=r==="MacIntel";const h=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&f&&t.touch&&h.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),f=!1),s&&!m&&(o.os="android",o.android=!0),(u||d||c)&&(o.os="ios",o.ios=!0),o}function Gw(e={}){return ad||(ad=$3(e)),ad}let sd;function I3(){const e=gt(),t=Gw();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,u]=l.split("Version/")[1].split(" ")[0].split(".").map(c=>Number(c));n=s<16||s===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function Yw(){return sd||(sd=I3()),sd}function j3({swiper:e,on:t,emit:n}){const r=gt();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(c=>{o=r.requestAnimationFrame(()=>{const{width:d,height:m}=e;let f=d,h=m;c.forEach(({contentBoxSize:v,contentRect:w,target:p})=>{p&&p!==e.el||(f=w?w.width:(v[0]||v).inlineSize,h=w?w.height:(v[0]||v).blockSize)}),(f!==d||h!==m)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function D3({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=gt(),a=(u,c={})=>{const d=o.MutationObserver||o.WebkitMutationObserver,m=new d(f=>{if(e.__preventObserver__)return;if(f.length===1){r("observerUpdate",f[0]);return}const h=function(){r("observerUpdate",f[0])};o.requestAnimationFrame?o.requestAnimationFrame(h):o.setTimeout(h,0)});m.observe(u,{attributes:typeof c.attributes>"u"?!0:c.attributes,childList:e.isElement||(typeof c.childList>"u"?!0:c).childList,characterData:typeof c.characterData>"u"?!0:c.characterData}),i.push(m)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=Hw(e.hostEl);for(let c=0;c<u.length;c+=1)a(u[c])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var L3={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function R3(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(cr(r,"padding-left")||0,10)-parseInt(cr(r,"padding-right")||0,10),n=n-parseInt(cr(r,"padding-top")||0,10)-parseInt(cr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function A3(){const e=this;function t($,j){return parseFloat($.getPropertyValue(e.getDirectionLabel(j))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,u=wn(i,`.${e.params.slideClass}, swiper-slide`),c=l?e.virtual.slides.length:u.length;let d=[];const m=[],f=[];let h=n.slidesOffsetBefore;typeof h=="function"&&(h=n.slidesOffsetBefore.call(e));let v=n.slidesOffsetAfter;typeof v=="function"&&(v=n.slidesOffsetAfter.call(e));const w=e.snapGrid.length,p=e.slidesGrid.length,g=e.size-h-v;let x=n.spaceBetween,S=-h,E=0,k=0;if(typeof g>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*g:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-h-v,u.forEach($=>{o?$.style.marginLeft="":$.style.marginRight="",$.style.marginBottom="",$.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(li(r,"--swiper-centered-offset-before",""),li(r,"--swiper-centered-offset-after","")),n.cssMode&&(li(r,"--swiper-slides-offset-before",`${h}px`),li(r,"--swiper-slides-offset-after",`${v}px`));const _=n.grid&&n.grid.rows>1&&e.grid;_?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let C;const O=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter($=>typeof n.breakpoints[$].slidesPerView<"u").length>0;for(let $=0;$<c;$+=1){C=0;const j=u[$];if(!(j&&(_&&e.grid.updateSlide($,j,u),cr(j,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(C=n.virtual.slidesPerViewAutoSlideSize),C&&j&&(n.roundLengths&&(C=Math.floor(C)),j.style[e.getDirectionLabel("width")]=`${C}px`);else if(n.slidesPerView==="auto"){O&&(j.style[e.getDirectionLabel("width")]="");const I=getComputedStyle(j),D=j.style.transform,R=j.style.webkitTransform;if(D&&(j.style.transform="none"),R&&(j.style.webkitTransform="none"),n.roundLengths)C=e.isHorizontal()?ep(j,"width",!0):ep(j,"height",!0);else{const L=t(I,"width"),F=t(I,"padding-left"),A=t(I,"padding-right"),P=t(I,"margin-left"),M=t(I,"margin-right"),N=I.getPropertyValue("box-sizing");if(N&&N==="border-box")C=L+P+M;else{const{clientWidth:B,offsetWidth:z}=j;C=L+F+A+P+M+(z-B)}}D&&(j.style.transform=D),R&&(j.style.webkitTransform=R),n.roundLengths&&(C=Math.floor(C))}else C=(g-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(C=Math.floor(C)),j&&(j.style[e.getDirectionLabel("width")]=`${C}px`);j&&(j.swiperSlideSize=C),f.push(C),n.centeredSlides?(S=S+C/2+E/2+x,E===0&&$!==0&&(S=S-g/2-x),$===0&&(S=S-g/2-x),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),k%n.slidesPerGroup===0&&d.push(S),m.push(S)):(n.roundLengths&&(S=Math.floor(S)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup===0&&d.push(S),m.push(S),S=S+C+x),e.virtualSize+=C+x,E=C,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,g)+v,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+x}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),_&&e.grid.updateWrapperSize(C,d),!n.centeredSlides){const $=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,j=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||$);let I=d.length;if(j){let R;if(n.slidesPerView==="auto"){R=1;let L=0;for(let F=f.length-1;F>=0&&(L+=f[F]+(F<f.length-1?x:0),L<=g);F-=1)R=f.length-F}else R=Math.floor(n.slidesPerView);I=Math.max(c-R,0)}const D=[];for(let R=0;R<d.length;R+=1){let L=d[R];n.roundLengths&&(L=Math.floor(L)),j?R<=I&&D.push(L):d[R]<=e.virtualSize-g&&D.push(L)}d=D,Math.floor(e.virtualSize-g)-Math.floor(d[d.length-1])>1&&(j||d.push(e.virtualSize-g))}if(l&&n.loop){const $=f[0]+x;if(n.slidesPerGroup>1){const j=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),I=$*n.slidesPerGroup;for(let D=0;D<j;D+=1)d.push(d[d.length-1]+I)}for(let j=0;j<e.virtual.slidesBefore+e.virtual.slidesAfter;j+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+$),m.push(m[m.length-1]+$),e.virtualSize+=$}if(d.length===0&&(d=[0]),x!==0){const $=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter((j,I)=>!n.cssMode||n.loop?!0:I!==u.length-1).forEach(j=>{j.style[$]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let $=0;f.forEach(I=>{$+=I+(x||0)}),$-=x;const j=$>g?$-g:0;d=d.map(I=>I<=0?-h:I>j?j+v:I)}if(n.centerInsufficientSlides){let $=0;if(f.forEach(j=>{$+=j+(x||0)}),$-=x,$<g){const j=(g-$)/2;d.forEach((I,D)=>{d[D]=I-j}),m.forEach((I,D)=>{m[D]=I+j})}}if(Object.assign(e,{slides:u,snapGrid:d,slidesGrid:m,slidesSizesGrid:f}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){li(r,"--swiper-centered-offset-before",`${-d[0]}px`),li(r,"--swiper-centered-offset-after",`${e.size/2-f[f.length-1]/2}px`);const $=-e.snapGrid[0],j=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(I=>I+$),e.slidesGrid=e.slidesGrid.map(I=>I+j)}if(c!==s&&e.emit("slidesLengthChange"),d.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),m.length!==p&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const $=`${n.containerModifierClass}backface-hidden`,j=e.el.classList.contains($);c<=n.maxBackfaceHiddenSlides?j||e.el.classList.add($):j&&e.el.classList.remove($)}}function F3(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function N3(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const q0=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function z3(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let c=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const d=(a+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),m=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),f=-(a-c),h=f+t.slidesSizesGrid[s],v=f>=0&&f<=t.size-t.slidesSizesGrid[s],w=f>=0&&f<t.size-1||h>1&&h<=t.size||f<=0&&h>=t.size;w&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s)),q0(u,w,n.slideVisibleClass),q0(u,v,n.slideFullyVisibleClass),u.progress=i?-d:d,u.originalProgress=i?-m:m}}function B3(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const c=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=c||i<=0,a=d||i>=1,c&&(i=0),d&&(i=1)}if(n.loop){const c=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),m=t.slidesGrid[c],f=t.slidesGrid[d],h=t.slidesGrid[t.slidesGrid.length-1],v=Math.abs(e);v>=m?l=(v-m)/h:l=(v+h-f)/h,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(s&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const ld=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function V3(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=d=>wn(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let s,u,c;if(o)if(n.loop){let d=i-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${d}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(d=>d.column===i),c=t.find(d=>d.column===i+1),u=t.find(d=>d.column===i-1)):s=t[i];s&&(a||(c=k3(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=t[0]),u=C3(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(d=>{ld(d,d===s,n.slideActiveClass),ld(d,d===c,n.slideNextClass),ld(d,d===u,n.slidePrevClass)}),e.emitSlidesClasses()}const Gs=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},ud=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},tp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,u)=>a+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&ud(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&ud(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&ud(e,a)};function H3(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function U3(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,u;const c=f=>{let h=f-t.virtual.slidesBefore;return h<0&&(h=t.virtual.slides.length+h),h>=t.virtual.slides.length&&(h-=t.virtual.slides.length),h};if(typeof s>"u"&&(s=H3(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const f=Math.min(i.slidesPerGroupSkip,s);u=f+Math.floor((s-f)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=c(s);return}const d=t.grid&&i.grid&&i.grid.rows>1;let m;if(t.virtual&&i.virtual.enabled)i.loop?m=c(s):m=s;else if(d){const f=t.slides.find(v=>v.column===s);let h=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(h)&&(h=Math.max(t.slides.indexOf(f),0)),m=Math.floor(h/i.grid.rows)}else if(t.slides[s]){const f=t.slides[s].getAttribute("data-swiper-slide-index");f?m=parseInt(f,10):m=s}else m=s;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:a,realIndex:m,previousIndex:o,activeIndex:s}),t.initialized&&tp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==m&&t.emit("realIndexChange"),t.emit("slideChange"))}function W3(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var G3={updateSize:R3,updateSlides:A3,updateAutoHeight:F3,updateSlidesOffset:N3,updateSlidesProgress:z3,updateProgress:B3,updateSlidesClasses:V3,updateActiveIndex:U3,updateClickedSlide:W3};function Y3(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=w3(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function q3(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let c;const d=n.maxTranslate()-n.minTranslate();d===0?c=0:c=(e-n.minTranslate())/d,c!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function X3(){return-this.snapGrid[0]}function K3(){return-this.snapGrid[this.snapGrid.length-1]}function Z3(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),u=o.maxTranslate();let c;if(r&&e>s?c=s:r&&e<u?c=u:c=e,o.updateProgress(c),a.cssMode){const d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-c;else{if(!o.support.smoothScroll)return Vw({swiper:o,targetPosition:-c,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(m){!o||o.destroyed||m.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var Q3={getTranslate:Y3,setTranslate:q3,minTranslate:X3,maxTranslate:K3,translateTo:Z3};function J3(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function qw({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function e5(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),qw({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function t5(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),qw({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var n5={setTransition:J3,transitionStart:e5,transitionEnd:t5};function r5(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:c,activeIndex:d,rtlTranslate:m,wrapperEl:f,enabled:h}=o;if(!h&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const v=Math.min(o.params.slidesPerGroupSkip,a);let w=v+Math.floor((a-v)/o.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const p=-s[w];if(l.normalizeSlideIndex)for(let _=0;_<u.length;_+=1){const C=-Math.floor(p*100),O=Math.floor(u[_]*100),$=Math.floor(u[_+1]*100);typeof u[_+1]<"u"?C>=O&&C<$-($-O)/2?a=_:C>=O&&C<$&&(a=_+1):C>=O&&(a=_)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&(m?p>o.translate&&p>o.minTranslate():p<o.translate&&p<o.minTranslate())||!o.allowSlidePrev&&p>o.translate&&p>o.maxTranslate()&&(d||0)!==a))return!1;a!==(c||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(p);let g;a>d?g="next":a<d?g="prev":g="reset";const x=o.virtual&&o.params.virtual.enabled;if(!(x&&i)&&(m&&-p===o.translate||!m&&p===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(p),g!=="reset"&&(o.transitionStart(n,g),o.transitionEnd(n,g)),!1;if(l.cssMode){const _=o.isHorizontal(),C=m?p:-p;if(t===0)x&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),x&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[_?"scrollLeft":"scrollTop"]=C})):f[_?"scrollLeft":"scrollTop"]=C,x&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return Vw({swiper:o,targetPosition:C,side:_?"left":"top"}),!0;f.scrollTo({[_?"left":"top"]:C,behavior:"smooth"})}return!0}const k=Yw().isSafari;return x&&!i&&k&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(p),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,g),t===0?o.transitionEnd(n,g):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(C){!o||o.destroyed||C.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,g))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function i5(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const v=a*i.params.grid.rows;l=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===v).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u,slidesOffsetBefore:c,slidesOffsetAfter:d}=i.params,m=u||!!c||!!d;let f=i.params.slidesPerView;f==="auto"?f=i.slidesPerViewDynamic():(f=Math.ceil(parseFloat(i.params.slidesPerView,10)),m&&f%2===0&&(f=f+1));let h=s-l<f;if(m&&(h=h||l<Math.ceil(f/2)),r&&m&&i.params.slidesPerView!=="auto"&&!o&&(h=!1),h){const v=m?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?l+1:l-s+1,slideRealIndex:v==="next"?i.realIndex:void 0})}if(o){const v=a*i.params.grid.rows;a=i.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===v).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function o5(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function a5(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:u}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const c=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=l?r.translate:-r.translate;function m(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const f=m(d),h=o.map(g=>m(g)),v=i.freeMode&&i.freeMode.enabled;let w=o[h.indexOf(f)-1];if(typeof w>"u"&&(i.cssMode||v)){let g;o.forEach((x,S)=>{f>=x&&(g=S)}),typeof g<"u"&&(w=v?o[g]:o[g>0?g-1:g])}let p=0;if(typeof w<"u"&&(p=a.indexOf(w),p<0&&(p=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(p=p-r.slidesPerViewDynamic("previous",!0)+1,p=Math.max(p,0))),i.rewind&&r.isBeginning){const g=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(g,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(p,e,t,n)}),!0;return r.slideTo(p,e,t,n)}function s5(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function l5(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],c=i.snapGrid[l+1];s-u>(c-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],c=i.snapGrid[l];s-u<=(c-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function u5(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(wn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),Bw(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var c5={slideTo:r5,slideToLoop:i5,slideNext:o5,slidePrev:a5,slideReset:s5,slideToClosest:l5,slideToClickedSlide:u5};function d5(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{wn(i,`.${r.slideClass}, swiper-slide`).forEach((h,v)=>{h.setAttribute("data-swiper-slide-index",v)})},a=()=>{const f=wn(i,`.${r.slideBlankClass}`);f.forEach(h=>{h.remove()}),f.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),u=n.slides.length%s!==0,c=l&&n.slides.length%r.grid.rows!==0,d=f=>{for(let h=0;h<f;h+=1){const v=n.isElement?jl("swiper-slide",[r.slideBlankClass]):jl("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(v)}};if(u){if(r.loopAddBlankSlides){const f=s-n.slides.length%s;d(f),n.recalcSlides(),n.updateSlides()}else Il("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(c){if(r.loopAddBlankSlides){const f=r.grid.rows-n.slides.length%r.grid.rows;d(f),n.recalcSlides(),n.updateSlides()}else Il("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const m=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:m?void 0:"next",initial:t})}function f5({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:c,allowSlideNext:d,slidesEl:m,params:f}=s,{centeredSlides:h,slidesOffsetBefore:v,slidesOffsetAfter:w,initialSlide:p}=f,g=h||!!v||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&f.virtual.enabled){t&&(!g&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):g&&s.snapIndex<f.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=c,s.allowSlideNext=d,s.emit("loopFix");return}let x=f.slidesPerView;x==="auto"?x=s.slidesPerViewDynamic():(x=Math.ceil(parseFloat(f.slidesPerView,10)),g&&x%2===0&&(x=x+1));const S=f.slidesPerGroupAuto?x:f.slidesPerGroup;let E=g?Math.max(S,Math.ceil(x/2)):S;E%S!==0&&(E+=S-E%S),E+=f.loopAdditionalSlides,s.loopedSlides=E;const k=s.grid&&f.grid&&f.grid.rows>1;u.length<x+E||s.params.effect==="cards"&&u.length<x+E*2?Il("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):k&&f.grid.fill==="row"&&Il("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const _=[],C=[],O=k?Math.ceil(u.length/f.grid.rows):u.length,$=o&&O-p<x&&!g;let j=$?p:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(u.find(P=>P.classList.contains(f.slideActiveClass))):j=i;const I=n==="next"||!n,D=n==="prev"||!n;let R=0,L=0;const A=(k?u[i].column:i)+(g&&typeof r>"u"?-x/2+.5:0);if(A<E){R=Math.max(E-A,S);for(let P=0;P<E-A;P+=1){const M=P-Math.floor(P/O)*O;if(k){const N=O-M-1;for(let B=u.length-1;B>=0;B-=1)u[B].column===N&&_.push(B)}else _.push(O-M-1)}}else if(A+x>O-E){L=Math.max(A-(O-E*2),S),$&&(L=Math.max(L,x-O+p+1));for(let P=0;P<L;P+=1){const M=P-Math.floor(P/O)*O;k?u.forEach((N,B)=>{N.column===M&&C.push(B)}):C.push(M)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&u.length<x+E*2&&(C.includes(i)&&C.splice(C.indexOf(i),1),_.includes(i)&&_.splice(_.indexOf(i),1)),D&&_.forEach(P=>{u[P].swiperLoopMoveDOM=!0,m.prepend(u[P]),u[P].swiperLoopMoveDOM=!1}),I&&C.forEach(P=>{u[P].swiperLoopMoveDOM=!0,m.append(u[P]),u[P].swiperLoopMoveDOM=!1}),s.recalcSlides(),f.slidesPerView==="auto"?s.updateSlides():k&&(_.length>0&&D||C.length>0&&I)&&s.slides.forEach((P,M)=>{s.grid.updateSlide(M,P,s.slides)}),f.watchSlidesProgress&&s.updateSlidesOffset(),t){if(_.length>0&&D){if(typeof e>"u"){const P=s.slidesGrid[j],N=s.slidesGrid[j+R]-P;l?s.setTranslate(s.translate-N):(s.slideTo(j+Math.ceil(R),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else if(r){const P=k?_.length/f.grid.rows:_.length;s.slideTo(s.activeIndex+P,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(C.length>0&&I)if(typeof e>"u"){const P=s.slidesGrid[j],N=s.slidesGrid[j-L]-P;l?s.setTranslate(s.translate-N):(s.slideTo(j-L,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else{const P=k?C.length/f.grid.rows:C.length;s.slideTo(s.activeIndex-P,0,!1,!0)}}if(s.allowSlidePrev=c,s.allowSlideNext=d,s.controller&&s.controller.control&&!a){const P={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(M=>{!M.destroyed&&M.params.loop&&M.loopFix({...P,slideTo:M.params.slidesPerView===f.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...P,slideTo:s.controller.control.params.slidesPerView===f.slidesPerView?t:!1})}s.emit("loopFix")}function p5(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var h5={loopCreate:d5,loopFix:f5,loopDestroy:p5};function m5(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function g5(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var v5={setGrabCursor:m5,unsetGrabCursor:g5};function y5(e,t=this){function n(r){if(!r||r===Cn()||r===gt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function X0(e,t,n){const r=gt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function x5(e){const t=this,n=Cn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){X0(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!E3(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",c=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&c&&(s=c[0]);const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,m=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(m?y5(d,s):s.closest(d))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const f=a.currentX,h=a.currentY;if(!X0(t,r,f))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=f,a.startY=h,i.touchStartTime=$l(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let v=!0;s.matches(i.focusableElements)&&(v=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const w=v&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||w)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function b5(e){const t=Cn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let u;if(s.type==="touchmove"){if(u=[...s.changedTouches].find(k=>k.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const c=u.pageX,d=u.pageY;if(s.preventedByNestedSwiper){o.startX=c,o.startY=d;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d}),r.touchStartTime=$l());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(c>o.startX&&-n.translate<=n.maxTranslate()||c<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(c<o.startX&&n.translate<=n.maxTranslate()||c>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=c,o.currentY=d;const m=o.currentX-o.startX,f=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(m**2+f**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let k;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:m*m+f*f>=25&&(k=Math.atan2(Math.abs(f),Math.abs(m))*180/Math.PI,r.isScrolling=n.isHorizontal()?k>i.touchAngle:90-k>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let h=n.isHorizontal()?m:f,v=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(h=Math.abs(h)*(a?1:-1),v=Math.abs(v)*(a?1:-1)),o.diff=h,h*=i.touchRatio,a&&(h=-h,v=-v);const w=n.touchesDirection;n.swipeDirection=h>0?"prev":"next",n.touchesDirection=v>0?"prev":"next";const p=n.params.loop&&!i.cssMode,g=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(p&&g&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(k)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let x;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&p&&g&&Math.abs(h)>=1){Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=h+r.startTranslate;let S=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),h>0?(p&&g&&!x&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+h)**E))):h<0&&(p&&g&&!x&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-h)**E))),S&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(h)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function w5(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(E=>E.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:u,enabled:c}=t;if(!c||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=$l(),m=d-n.touchStartTime;if(t.allowClick){const E=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(E&&E[0]||r.target,E),t.emit("tap click",r),m<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=$l(),Bw(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let f;if(a.followFinger?f=s?t.translate:-t.translate:f=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const h=f>=-t.maxTranslate()&&!t.params.loop;let v=0,w=t.slidesSizesGrid[0];for(let E=0;E<u.length;E+=E<a.slidesPerGroupSkip?1:a.slidesPerGroup){const k=E<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[E+k]<"u"?(h||f>=u[E]&&f<u[E+k])&&(v=E,w=u[E+k]-u[E]):(h||f>=u[E])&&(v=E,w=u[u.length-1]-u[u.length-2])}let p=null,g=null;a.rewind&&(t.isBeginning?g=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(p=0));const x=(f-u[v])/w,S=v<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(m>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?p:v+S):t.slideTo(v)),t.swipeDirection==="prev"&&(x>1-a.longSwipesRatio?t.slideTo(v+S):g!==null&&x<0&&Math.abs(x)>a.longSwipesRatio?t.slideTo(g):t.slideTo(v))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(v+S):t.slideTo(v):(t.swipeDirection==="next"&&t.slideTo(p!==null?p:v+S),t.swipeDirection==="prev"&&t.slideTo(g!==null?g:v))}}function K0(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function S5(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function _5(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function E5(e){const t=this;Gs(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function C5(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Xw=(e,t)=>{const n=Cn(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",K0,!0):e[u]("observerUpdate",K0,!0),i[s]("load",e.onLoad,{capture:!0}))};function k5(){const e=this,{params:t}=e;e.onTouchStart=x5.bind(e),e.onTouchMove=b5.bind(e),e.onTouchEnd=w5.bind(e),e.onDocumentTouchStart=C5.bind(e),t.cssMode&&(e.onScroll=_5.bind(e)),e.onClick=S5.bind(e),e.onLoad=E5.bind(e),Xw(e,"on")}function T5(){Xw(this,"off")}var P5={attachEvents:k5,detachEvents:T5};const Z0=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function O5(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=Cn(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),u=e.getBreakpoint(o,l,s);if(!u||e.currentBreakpoint===u)return;const d=(u in o?o[u]:void 0)||e.originalParams,m=Z0(e,r),f=Z0(e,d),h=e.params.grabCursor,v=d.grabCursor,w=r.enabled;m&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!m&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),h&&!v?e.unsetGrabCursor():!h&&v&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(k=>{if(typeof d[k]>"u")return;const _=r[k]&&r[k].enabled,C=d[k]&&d[k].enabled;_&&!C&&e[k].disable(),!_&&C&&e[k].enable()});const p=d.direction&&d.direction!==r.direction,g=r.loop&&(d.slidesPerView!==r.slidesPerView||p),x=r.loop;p&&n&&e.changeDirection(),Mt(e.params,d);const S=e.params.enabled,E=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",d),n&&(g?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&E?(e.loopCreate(t),e.updateSlides()):x&&!E&&e.loopDestroy()),e.emit("breakpoint",d)}function M5(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=gt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:u}=a[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var $5={setBreakpoint:O5,getBreakpoint:M5};function I5(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function j5(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=I5(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function D5(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var L5={addClasses:j5,removeClasses:D5};function R5(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var A5={checkOverflow:R5},np={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function F5(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Mt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Mt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Mt(t,r)}}const cd={eventsEmitter:L3,update:G3,translate:Q3,transition:n5,slide:c5,loop:h5,grabCursor:v5,events:P5,breakpoints:$5,checkOverflow:A5,classes:L5},dd={};let rm=class Mn{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Mt({},r),n&&!r.el&&(r.el=n);const i=Cn();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(u=>{const c=Mt({},r,{el:u});s.push(new Mn(c))}),s}const o=this;o.__swiper__=!0,o.support=Ww(),o.device=Gw({userAgent:r.userAgent}),o.browser=Yw(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:F5(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Mt({},np,a);return o.params=Mt({},l,dd,r),o.originalParams=Mt({},o.params),o.passedParams=Mt({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=wn(n,`.${r.slideClass}, swiper-slide`),o=Dl(i[0]);return Dl(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=wn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:u}=r;let c=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=o[u]?Math.ceil(o[u].swiperSlideSize):0,m;for(let f=u+1;f<o.length;f+=1)o[f]&&!m&&(d+=Math.ceil(o[f].swiperSlideSize),c+=1,d>s&&(m=!0));for(let f=u-1;f>=0;f-=1)o[f]&&!m&&(d+=o[f].swiperSlideSize,c+=1,d>s&&(m=!0))}else if(t==="current")for(let d=u+1;d<o.length;d+=1)(n?a[d]+l[d]-a[u]<s:a[d]-a[u]<s)&&(c+=1);else for(let d=u-1;d>=0;d-=1)a[u]-a[d]<s&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Gs(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):wn(r,i())[0])();return!a&&n.params.createElements&&(a=jl("div",n.params.wrapperClass),r.append(a),wn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||cr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||cr(r,"direction")==="rtl"),wrongRTL:cr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Gs(n,o):o.addEventListener("load",a=>{Gs(n,a.target)})}),tp(n),n.initialized=!0,tp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),x3(r)),r.destroyed=!0),null}static extendDefaults(t){Mt(dd,t)}static get extendedDefaults(){return dd}static get defaults(){return np}static installModule(t){Mn.prototype.__modules__||(Mn.prototype.__modules__=[]);const n=Mn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Mn.installModule(n)),Mn):(Mn.installModule(t),Mn)}};Object.keys(cd).forEach(e=>{Object.keys(cd[e]).forEach(t=>{rm.prototype[t]=cd[e][t]})});rm.use([j3,D3]);const Kw=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Kr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Ii(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Kr(t[r])&&Kr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Ii(e[r],t[r]):e[r]=t[r]})}function Zw(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Qw(e={}){return e.pagination&&typeof e.pagination.el>"u"}function Jw(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function eS(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function N5(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function z5({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(C=>C!=="children"&&C!=="direction"&&C!=="wrapperClass"),{params:u,pagination:c,navigation:d,scrollbar:m,virtual:f,thumbs:h}=e;let v,w,p,g,x,S,E,k;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(v=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&c&&!c.el&&(p=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&m&&!m.el&&(g=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(x=!0);const _=C=>{e[C]&&(e[C].destroy(),C==="navigation"?(e.isElement&&(e[C].prevEl.remove(),e[C].nextEl.remove()),u[C].prevEl=void 0,u[C].nextEl=void 0,e[C].prevEl=void 0,e[C].nextEl=void 0):(e.isElement&&e[C].el.remove(),u[C].el=void 0,e[C].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?S=!0:!u.loop&&n.loop?E=!0:k=!0),s.forEach(C=>{if(Kr(u[C])&&Kr(n[C]))Object.assign(u[C],n[C]),(C==="navigation"||C==="pagination"||C==="scrollbar")&&"enabled"in n[C]&&!n[C].enabled&&_(C);else{const O=n[C];(O===!0||O===!1)&&(C==="navigation"||C==="pagination"||C==="scrollbar")?O===!1&&_(C):u[C]=n[C]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&f&&u.virtual.enabled?(f.slides=t,f.update(!0)):r.includes("virtual")&&f&&u.virtual.enabled&&(t&&(f.slides=t),f.update(!0)),r.includes("children")&&t&&u.loop&&(k=!0),v&&h.init()&&h.update(!0),w&&(e.controller.control=u.controller.control),p&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),c.init(),c.render(),c.update()),g&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),m.init(),m.updateSize(),m.setTranslate()),x&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),ya(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),ya(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(S||k)&&e.loopDestroy(),(E||k)&&e.loopCreate(),e.update()}function B5(e={},t=!0){const n={on:{}},r={},i={};Ii(n,np),n._emitClasses=!0,n.init=!1;const o={},a=Kw.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?Kr(e[s])?(n[s]={},i[s]={},Ii(n[s],e[s]),Ii(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function V5({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){Zw(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),Qw(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),Jw(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function H5(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return Kw.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(Kr(e[s])&&Kr(t[s])){const u=Object.keys(e[s]),c=Object.keys(t[s]);u.length!==c.length?a(s):(u.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}),c.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const U5=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Ll(){return Ll=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ll.apply(this,arguments)}function tS(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function nS(e){const t=[];return q.Children.toArray(e).forEach(n=>{tS(n)?t.push(n):n.props&&n.props.children&&nS(n.props.children).forEach(r=>t.push(r))}),t}function W5(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return q.Children.toArray(e).forEach(r=>{if(tS(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=nS(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function G5(e,t,n){if(!n)return null;const r=c=>{let d=c;return c<0?d=t.length+c:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let c=l;c<s;c+=1)c>=o&&c<=a&&u.push(t[r(c)]);return u.map((c,d)=>q.cloneElement(c,{swiper:e,style:i,key:c.props.virtualIndex||c.key||`slide-${d}`}))}function Yo(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const Q0=b.createContext(null),Y5=b.createContext(null),rS=b.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,u]=b.useState("swiper"),[c,d]=b.useState(null),[m,f]=b.useState(!1),h=b.useRef(!1),v=b.useRef(null),w=b.useRef(null),p=b.useRef(null),g=b.useRef(null),x=b.useRef(null),S=b.useRef(null),E=b.useRef(null),k=b.useRef(null),{params:_,passedParams:C,rest:O,events:$}=B5(o),{slides:j,slots:I}=W5(r),D=()=>{f(!m)};Object.assign(_.on,{_containerClasses(P,M){u(M)}});const R=()=>{Object.assign(_.on,$),l=!0;const P={..._};if(delete P.wrapperClass,w.current=new rm(P),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=j;const M={cache:!1,slides:j,renderExternal:d,renderExternalUpdate:!1};Ii(w.current.params.virtual,M),Ii(w.current.originalParams.virtual,M)}};v.current||R(),w.current&&w.current.on("_beforeBreakpoint",D);const L=()=>{l||!$||!w.current||Object.keys($).forEach(P=>{w.current.on(P,$[P])})},F=()=>{!$||!w.current||Object.keys($).forEach(P=>{w.current.off(P,$[P])})};b.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",D)}),b.useEffect(()=>{!h.current&&w.current&&(w.current.emitSlidesClasses(),h.current=!0)}),Yo(()=>{if(a&&(a.current=v.current),!!v.current)return w.current.destroyed&&R(),V5({el:v.current,nextEl:x.current,prevEl:S.current,paginationEl:E.current,scrollbarEl:k.current,swiper:w.current},_),i&&!w.current.destroyed&&i(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),Yo(()=>{L();const P=H5(C,p.current,j,g.current,M=>M.key);return p.current=C,g.current=j,P.length&&w.current&&!w.current.destroyed&&z5({swiper:w.current,slides:j,passedParams:C,changedParams:P,nextEl:x.current,prevEl:S.current,scrollbarEl:k.current,paginationEl:E.current}),()=>{F()}}),Yo(()=>{U5(w.current)},[c]);function A(){return _.virtual?G5(w.current,j,c):j.map((P,M)=>q.cloneElement(P,{swiper:w.current,swiperSlideIndex:M}))}return q.createElement(t,Ll({ref:v,className:eS(`${s}${e?` ${e}`:""}`)},O),q.createElement(Y5.Provider,{value:w.current},I["container-start"],q.createElement(n,{className:N5(_.wrapperClass)},I["wrapper-start"],A(),I["wrapper-end"]),Zw(_)&&q.createElement(q.Fragment,null,q.createElement("div",{ref:S,className:"swiper-button-prev"}),q.createElement("div",{ref:x,className:"swiper-button-next"})),Jw(_)&&q.createElement("div",{ref:k,className:"swiper-scrollbar"}),Qw(_)&&q.createElement("div",{ref:E,className:"swiper-pagination"}),I["container-end"]))});rS.displayName="Swiper";const iS=b.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},u)=>{const c=b.useRef(null),[d,m]=b.useState("swiper-slide"),[f,h]=b.useState(!1);function v(x,S,E){S===c.current&&m(E)}Yo(()=>{if(typeof l<"u"&&(c.current.swiperSlideIndex=l),u&&(u.current=c.current),!(!c.current||!r)){if(r.destroyed){d!=="swiper-slide"&&m("swiper-slide");return}return r.on("_slideClass",v),()=>{r&&r.off("_slideClass",v)}}}),Yo(()=>{r&&c.current&&!r.destroyed&&m(r.getSlideClasses(c.current))},[r]);const w={isActive:d.indexOf("swiper-slide-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0},p=()=>typeof t=="function"?t(w):t,g=()=>{h(!0)};return q.createElement(e,Ll({ref:c,className:eS(`${d}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:g},s),i&&q.createElement(Q0.Provider,{value:w},q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},p(),o&&!f&&q.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}}))),!i&&q.createElement(Q0.Provider,{value:w},p(),o&&!f&&q.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}})))});iS.displayName="SwiperSlide";const q5=T.section`
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
`,X5=T.div`
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
`,K5=T.div`
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
`,Z5=T(Me)`
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
`,Q5=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg"},{id:2,title:"Перевірені велодеталі з пробігом бла бла",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp"}],J5=()=>y.jsx(q5,{children:y.jsx(rS,{modules:[T3,O3,P3],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:Q5.map(e=>y.jsx(iS,{children:y.jsx(X5,{bg:e.img,children:y.jsxs(K5,{children:[y.jsx("h1",{children:e.title}),y.jsx("p",{children:e.desc}),y.jsx(Z5,{to:"/catalog",children:"До каталогу"})]})})},e.id))})}),e$=T.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,t$=T.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
 font-size: 35px;
  }

`,n$=T.div`
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
`,r$=T.div`
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
`,i$=T(Me)`
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
`,o$=T.span`
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
`,a$=T.div`
  padding: 10px 0;
`,s$=T.h3`
  font-size: 15px;
  font-weight: 600;
 
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,l$=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,u$=T.span`
  font-size: 17px;
  font-weight: 800;
  color: var(--black-color);
`,c$=T.button`
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

`;const d$=T(Me)`
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

`,f$=T.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,p$=T.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function qe(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var h$=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),J0=h$,fd=()=>Math.random().toString(36).substring(7).split("").join("."),m$={INIT:`@@redux/INIT${fd()}`,REPLACE:`@@redux/REPLACE${fd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${fd()}`},Rl=m$;function im(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function om(e,t,n){if(typeof e!="function")throw new Error(qe(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(qe(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(qe(1));return n(om)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function u(){a===o&&(a=new Map,o.forEach((w,p)=>{a.set(p,w)}))}function c(){if(s)throw new Error(qe(3));return i}function d(w){if(typeof w!="function")throw new Error(qe(4));if(s)throw new Error(qe(5));let p=!0;u();const g=l++;return a.set(g,w),function(){if(p){if(s)throw new Error(qe(6));p=!1,u(),a.delete(g),o=null}}}function m(w){if(!im(w))throw new Error(qe(7));if(typeof w.type>"u")throw new Error(qe(8));if(typeof w.type!="string")throw new Error(qe(17));if(s)throw new Error(qe(9));try{s=!0,i=r(i,w)}finally{s=!1}return(o=a).forEach(g=>{g()}),w}function f(w){if(typeof w!="function")throw new Error(qe(10));r=w,m({type:Rl.REPLACE})}function h(){const w=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(qe(11));function g(){const S=p;S.next&&S.next(c())}return g(),{unsubscribe:w(g)}},[J0](){return this}}}return m({type:Rl.INIT}),{dispatch:m,subscribe:d,getState:c,replaceReducer:f,[J0]:h}}function g$(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Rl.INIT})>"u")throw new Error(qe(12));if(typeof n(void 0,{type:Rl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(qe(13))})}function v$(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{g$(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],m=n[d],f=a[d],h=m(f,l);if(typeof h>"u")throw l&&l.type,new Error(qe(14));u[d]=h,s=s||h!==f}return s=s||r.length!==Object.keys(a).length,s?u:a}}function Al(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function y$(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(qe(15))};const a={getState:i.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(a));return o=Al(...l)(i.dispatch),{...i,dispatch:o}}}function x$(e){return im(e)&&"type"in e&&typeof e.type=="string"}var oS=Symbol.for("immer-nothing"),ev=Symbol.for("immer-draftable"),pt=Symbol.for("immer-state");function on(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var It=Object,Gi=It.getPrototypeOf,Fl="constructor",Ku="prototype",rp="configurable",Nl="enumerable",Ys="writable",xa="value",Gn=e=>!!e&&!!e[pt];function fn(e){var t;return e?aS(e)||Qu(e)||!!e[ev]||!!((t=e[Fl])!=null&&t[ev])||Ju(e)||ec(e):!1}var b$=It[Ku][Fl].toString(),tv=new WeakMap;function aS(e){if(!e||!am(e))return!1;const t=Gi(e);if(t===null||t===It[Ku])return!0;const n=It.hasOwnProperty.call(t,Fl)&&t[Fl];if(n===Object)return!0;if(!fi(n))return!1;let r=tv.get(n);return r===void 0&&(r=Function.toString.call(n),tv.set(n,r)),r===b$}function Zu(e,t,n=!0){Aa(e)===0?(n?Reflect.ownKeys(e):It.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Aa(e){const t=e[pt];return t?t.type_:Qu(e)?1:Ju(e)?2:ec(e)?3:0}var nv=(e,t,n=Aa(e))=>n===2?e.has(t):It[Ku].hasOwnProperty.call(e,t),ip=(e,t,n=Aa(e))=>n===2?e.get(t):e[t],zl=(e,t,n,r=Aa(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function w$(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Qu=Array.isArray,Ju=e=>e instanceof Map,ec=e=>e instanceof Set,am=e=>typeof e=="object",fi=e=>typeof e=="function",pd=e=>typeof e=="boolean";function S$(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Ln=e=>e.copy_||e.base_,sm=e=>e.modified_?e.copy_:e.base_;function op(e,t){if(Ju(e))return new Map(e);if(ec(e))return new Set(e);if(Qu(e))return Array[Ku].slice.call(e);const n=aS(e);if(t===!0||t==="class_only"&&!n){const r=It.getOwnPropertyDescriptors(e);delete r[pt];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[Ys]===!1&&(l[Ys]=!0,l[rp]=!0),(l.get||l.set)&&(r[a]={[rp]:!0,[Ys]:!0,[Nl]:l[Nl],[xa]:e[a]})}return It.create(Gi(e),r)}else{const r=Gi(e);if(r!==null&&n)return{...e};const i=It.create(r);return It.assign(i,e)}}function lm(e,t=!1){return tc(e)||Gn(e)||!fn(e)||(Aa(e)>1&&It.defineProperties(e,{set:ms,add:ms,clear:ms,delete:ms}),It.freeze(e),t&&Zu(e,(n,r)=>{lm(r,!0)},!1)),e}function _$(){on(2)}var ms={[xa]:_$};function tc(e){return e===null||!am(e)?!0:It.isFrozen(e)}var Bl="MapSet",ap="Patches",rv="ArrayMethods",sS={};function Zr(e){const t=sS[e];return t||on(0,e),t}var iv=e=>!!sS[e],ba,lS=()=>ba,E$=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:iv(Bl)?Zr(Bl):void 0,arrayMethodsPlugin_:iv(rv)?Zr(rv):void 0});function ov(e,t){t&&(e.patchPlugin_=Zr(ap),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function sp(e){lp(e),e.drafts_.forEach(C$),e.drafts_=null}function lp(e){e===ba&&(ba=e.parent_)}var av=e=>ba=E$(ba,e);function C$(e){const t=e[pt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function sv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[pt].modified_&&(sp(t),on(4)),fn(e)&&(e=lv(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[pt].base_,e,t)}else e=lv(t,n);return k$(t,e,!0),sp(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==oS?e:void 0}function lv(e,t){if(tc(t))return t;const n=t[pt];if(!n)return Vl(t,e.handledSet_,e);if(!nc(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);dS(n,e)}return n.copy_}function k$(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&lm(t,n)}function uS(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var nc=(e,t)=>e.scope_===t,T$=[];function cS(e,t,n,r){const i=Ln(e),o=e.type_;if(r!==void 0&&ip(i,r,o)===t){zl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Zu(i,(s,u)=>{if(Gn(u)){const c=l.get(u)||[];c.push(s),l.set(u,c)}})}const a=e.draftLocations_.get(t)??T$;for(const l of a)zl(i,l,n,o)}function P$(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!nc(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=sm(o);cS(e,o.draft_??o,a,n),dS(o,i)})}function dS(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}uS(e)}}function O$(e,t,n){const{scope_:r}=e;if(Gn(n)){const i=n[pt];nc(i,r)&&i.callbacks_.push(function(){qs(e);const a=sm(i);cS(e,n,a,t)})}else fn(n)&&e.callbacks_.push(function(){const o=Ln(e);e.type_===3?o.has(n)&&Vl(n,r.handledSet_,r):ip(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Vl(ip(e.copy_,t,e.type_),r.handledSet_,r)})}function Vl(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Gn(e)||t.has(e)||!fn(e)||tc(e)||(t.add(e),Zu(e,(r,i)=>{if(Gn(i)){const o=i[pt];if(nc(o,n)){const a=sm(o);zl(e,r,a,e.type_),uS(o)}}else fn(i)&&Vl(i,t,n)})),e}function M$(e,t){const n=Qu(e),r={type_:n?1:0,scope_:t?t.scope_:lS(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Hl;n&&(i=[r],o=wa);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var Hl={get(e,t){if(t===pt)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=Ln(e);if(!nv(i,t,e.type_))return $$(e,i,t);const o=i[t];if(e.finalized_||!fn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&S$(t))return o;if(o===hd(e.base_,t)){qs(e);const a=e.type_===1?+t:t,l=cp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in Ln(e)},ownKeys(e){return Reflect.ownKeys(Ln(e))},set(e,t,n){const r=fS(Ln(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=hd(Ln(e),t),o=i==null?void 0:i[pt];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(w$(n,i)&&(n!==void 0||nv(e.base_,t,e.type_)))return!0;qs(e),up(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),O$(e,t,n)),!0},deleteProperty(e,t){return qs(e),hd(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),up(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Ln(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Ys]:!0,[rp]:e.type_!==1||t!=="length",[Nl]:r[Nl],[xa]:n[t]}},defineProperty(){on(11)},getPrototypeOf(e){return Gi(e.base_)},setPrototypeOf(){on(12)}},wa={};for(let e in Hl){let t=Hl[e];wa[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}wa.deleteProperty=function(e,t){return wa.set.call(this,e,t,void 0)};wa.set=function(e,t,n){return Hl.set.call(this,e[0],t,n,e[0])};function hd(e,t){const n=e[pt];return(n?Ln(n):e)[t]}function $$(e,t,n){var i;const r=fS(t,n);return r?xa in r?r[xa]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function fS(e,t){if(!(t in e))return;let n=Gi(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Gi(n)}}function up(e){e.modified_||(e.modified_=!0,e.parent_&&up(e.parent_))}function qs(e){e.copy_||(e.assigned_=new Map,e.copy_=op(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var I$=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(fi(t)&&!fi(n)){const o=n;n=t;const a=this;return function(s=o,...u){return a.produce(s,c=>n.call(this,c,...u))}}fi(n)||on(6),r!==void 0&&!fi(r)&&on(7);let i;if(fn(t)){const o=av(this),a=cp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?sp(o):lp(o)}return ov(o,r),sv(i,o)}else if(!t||!am(t)){if(i=n(t),i===void 0&&(i=t),i===oS&&(i=void 0),this.autoFreeze_&&lm(i,!0),r){const o=[],a=[];Zr(ap).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else on(1,t)},this.produceWithPatches=(t,n)=>{if(fi(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},pd(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),pd(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),pd(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){fn(e)||on(8),Gn(e)&&(e=j$(e));const t=av(this),n=cp(t,e,void 0);return n[pt].isManual_=!0,lp(t),n}finishDraft(e,t){const n=e&&e[pt];(!n||!n.isManual_)&&on(9);const{scope_:r}=n;return ov(r,t),sv(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Zr(ap).applyPatches_;return Gn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function cp(e,t,n,r){const[i,o]=Ju(t)?Zr(Bl).proxyMap_(t,n):ec(t)?Zr(Bl).proxySet_(t,n):M$(t,n);return((n==null?void 0:n.scope_)??lS()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?P$(n,o,r):o.callbacks_.push(function(s){var c;(c=s.mapSetPlugin_)==null||c.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),i}function j$(e){return Gn(e)||on(10,e),pS(e)}function pS(e){if(!fn(e)||tc(e))return e;const t=e[pt];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=op(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=op(e,!0);return Zu(n,(i,o)=>{zl(n,i,pS(o))},r),t&&(t.finalized_=!1),n}var D$=new I$,hS=D$.produce;function mS(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var L$=mS(),R$=mS,A$=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Al:Al.apply(null,arguments)};function uv(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(zn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>x$(r)&&r.type===e,n}var gS=class jo extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,jo.prototype)}static get[Symbol.species](){return jo}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new jo(...t[0].concat(this)):new jo(...t.concat(this))}};function cv(e){return fn(e)?hS(e,()=>{}):e}function gs(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function F$(e){return typeof e=="boolean"}var N$=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new gS;return n&&(F$(n)?a.push(L$):a.push(R$(n.extraArgument))),a},z$="RTK_autoBatch",dv=e=>t=>{setTimeout(t,e)},B$=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:dv(10):e.type==="callback"?e.queueNotification:dv(e.timeout),u=()=>{a=!1,o&&(o=!1,l.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),m=r.subscribe(d);return l.add(c),()=>{m(),l.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[z$]),o=!i,o&&(a||(a=!0,s(u))),r.dispatch(c)}finally{i=!0}}})},V$=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new gS(e);return r&&i.push(B$(typeof r=="object"?r:void 0)),i};function H$(e){const t=N$(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(im(n))s=v$(n);else throw new Error(zn(1));let u;typeof r=="function"?u=r(t):u=t();let c=Al;i&&(c=A$({trace:!1,...typeof i=="object"&&i}));const d=y$(...u),m=V$(d);let f=typeof l=="function"?l(m):m();const h=c(...f);return om(s,a,h)}function vS(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(zn(28));if(l in t)throw new Error(zn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function U$(e){return typeof e=="function"}function W$(e,t){let[n,r,i]=vS(t),o;if(U$(e))o=()=>cv(e());else{const l=cv(e);o=()=>l}function a(l=o(),s){let u=[n[s.type],...r.filter(({matcher:c})=>c(s)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Gn(c)){const f=d(c,s);return f===void 0?c:f}else{if(fn(c))return hS(c,m=>d(m,s));{const m=d(c,s);if(m===void 0){if(c===null)return c;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}}return c},l)}return a.getInitialState=o,a}var G$=Symbol.for("rtk-slice-createasyncthunk");function Y$(e,t){return`${e}/${t}`}function q$({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[G$];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(zn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(K$()):i.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(S,E){const k=typeof S=="string"?S:S.type;if(!k)throw new Error(zn(12));if(k in u.sliceCaseReducersByType)throw new Error(zn(13));return u.sliceCaseReducersByType[k]=E,c},addMatcher(S,E){return u.sliceMatchers.push({matcher:S,reducer:E}),c},exposeAction(S,E){return u.actionCreators[S]=E,c},exposeCaseReducer(S,E){return u.sliceCaseReducersByName[S]=E,c}};s.forEach(S=>{const E=l[S],k={reducerName:S,type:Y$(o,S),createNotation:typeof i.reducers=="function"};Q$(E)?eI(k,E,c,t):Z$(k,E,c)});function d(){const[S={},E=[],k=void 0]=typeof i.extraReducers=="function"?vS(i.extraReducers):[i.extraReducers],_={...S,...u.sliceCaseReducersByType};return W$(i.initialState,C=>{for(let O in _)C.addCase(O,_[O]);for(let O of u.sliceMatchers)C.addMatcher(O.matcher,O.reducer);for(let O of E)C.addMatcher(O.matcher,O.reducer);k&&C.addDefaultCase(k)})}const m=S=>S,f=new Map,h=new WeakMap;let v;function w(S,E){return v||(v=d()),v(S,E)}function p(){return v||(v=d()),v.getInitialState()}function g(S,E=!1){function k(C){let O=C[S];return typeof O>"u"&&E&&(O=gs(h,k,p)),O}function _(C=m){const O=gs(f,E,()=>new WeakMap);return gs(O,C,()=>{const $={};for(const[j,I]of Object.entries(i.selectors??{}))$[j]=X$(I,C,()=>gs(h,C,p),E);return $})}return{reducerPath:S,getSelectors:_,get selectors(){return _(k)},selectSlice:k}}const x={name:o,reducer:w,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:p,...g(a),injectInto(S,{reducerPath:E,...k}={}){const _=E??a;return S.inject({reducerPath:_,reducer:w},k),{...x,...g(_,!0)}}};return x}}function X$(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var yS=q$();function K$(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function Z$({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!J$(r))throw new Error(zn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?uv(e,a):uv(e))}function Q$(e){return e._reducerDefinitionType==="asyncThunk"}function J$(e){return e._reducerDefinitionType==="reducerWithPrepare"}function eI({type:e,reducerName:t},n,r,i){if(!i)throw new Error(zn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:u,options:c}=n,d=i(e,o,c);r.exposeAction(t,d),a&&r.addCase(d.fulfilled,a),l&&r.addCase(d.pending,l),s&&r.addCase(d.rejected,s),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:a||vs,pending:l||vs,rejected:s||vs,settled:u||vs})}function vs(){}function zn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const xS=yS({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=t.payload,r=e.items.find(i=>i.id===t.payload.id);r&&r.quantity>=n.stock||(r?r.quantity=(r.quantity||0)+1:e.items.push({...t.payload,quantity:1}))},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const{id:n,stock:r}=t.payload,i=e.items.find(o=>o.id===n);i&&i.quantity<r&&(i.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:Fa,removeFromCart:tI,clearCart:nI,addAllToCart:rI,incrementQuantity:iI,decrementQuantity:oI}=xS.actions,aI=xS.reducer;function bS(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=bS(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Hr(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=bS(e))&&(r&&(r+=" "),r+=t);return r}function sI(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}sI(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Na=e=>typeof e=="number"&&!isNaN(e),Qr=e=>typeof e=="string",Yn=e=>typeof e=="function",lI=e=>Qr(e)||Na(e),dp=e=>Qr(e)||Yn(e)?e:null,uI=(e,t)=>e===!1||Na(e)&&e>0?e:t,fp=e=>b.isValidElement(e)||Qr(e)||Yn(e)||Na(e);function cI(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function dI({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:c,playToast:d}){let m=n?`${e}--${a}`:e,f=n?`${t}--${a}`:t,h=b.useRef(0);return b.useLayoutEffect(()=>{let v=u.current,w=m.split(" "),p=g=>{g.target===u.current&&(d(),v.removeEventListener("animationend",p),v.removeEventListener("animationcancel",p),h.current===0&&g.type!=="animationcancel"&&v.classList.remove(...w))};v.classList.add(...w),v.addEventListener("animationend",p),v.addEventListener("animationcancel",p)},[]),b.useEffect(()=>{let v=u.current,w=()=>{v.removeEventListener("animationend",w),r?cI(v,s,i):s()};c||(l?w():(h.current=1,v.className+=` ${f}`,v.addEventListener("animationend",w)))},[c]),q.createElement(q.Fragment,null,o)}}function fv(e,t){return{content:wS(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function wS(e,t,n=!1){return b.isValidElement(e)&&!Qr(e.type)?b.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Yn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function fI({closeToast:e,theme:t,ariaLabel:n="close"}){return q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function pI({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:c}){let d=i||a&&l===0,m={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(m.transform=`scaleX(${l})`);let f=Hr("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${c}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),h=Yn(o)?o({rtl:s,type:r,defaultClassName:f}):Hr(f,o),v={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return q.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":d},q.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${c} Toastify__progress-bar--${r}`}),q.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:h,style:m,...v}))}var hI=1,SS=()=>`${hI++}`;function mI(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,u=new Set,c=g=>(u.add(g),()=>u.delete(g)),d=()=>{a=Array.from(s.values()),u.forEach(g=>g())},m=({containerId:g,toastId:x,updateId:S})=>{let E=g?g!==e:e!==1,k=s.has(x)&&S==null;return E||k},f=(g,x)=>{s.forEach(S=>{var E;(x==null||x===S.props.toastId)&&((E=S.toggle)==null||E.call(S,g))})},h=g=>{var x,S;(S=(x=g.props)==null?void 0:x.onClose)==null||S.call(x,g.removalReason),g.isActive=!1},v=g=>{if(g==null)s.forEach(h);else{let x=s.get(g);x&&h(x)}d()},w=()=>{i-=o.length,o=[]},p=g=>{var x,S;let{toastId:E,updateId:k}=g.props,_=k==null;g.staleId&&s.delete(g.staleId),g.isActive=!0,s.set(E,g),d(),n(fv(g,_?"added":"updated")),_&&((S=(x=g.props).onOpen)==null||S.call(x))};return{id:e,props:l,observe:c,toggle:f,removeToast:v,toasts:s,clearQueue:w,buildToast:(g,x)=>{if(m(x))return;let{toastId:S,updateId:E,data:k,staleId:_,delay:C}=x,O=E==null;O&&i++;let $={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([I,D])=>D!=null)),toastId:S,updateId:E,data:k,isIn:!1,className:dp(x.className||l.toastClassName),progressClassName:dp(x.progressClassName||l.progressClassName),autoClose:x.isLoading?!1:uI(x.autoClose,l.autoClose),closeToast(I){s.get(S).removalReason=I,v(S)},deleteToast(){let I=s.get(S);if(I!=null){if(n(fv(I,"removed")),s.delete(S),i--,i<0&&(i=0),o.length>0){p(o.shift());return}d()}}};$.closeButton=l.closeButton,x.closeButton===!1||fp(x.closeButton)?$.closeButton=x.closeButton:x.closeButton===!0&&($.closeButton=fp(l.closeButton)?l.closeButton:!0);let j={content:g,props:$,staleId:_};l.limit&&l.limit>0&&i>l.limit&&O?o.push(j):Na(C)?setTimeout(()=>{p(j)},C):p(j)},setProps(g){l=g},setToggle:(g,x)=>{let S=s.get(g);S&&(S.toggle=x)},isToastActive:g=>{var x;return(x=s.get(g))==null?void 0:x.isActive},getSnapshot:()=>a}}var dt=new Map,Sa=[],pp=new Set,gI=e=>pp.forEach(t=>t(e)),_S=()=>dt.size>0;function vI(){Sa.forEach(e=>CS(e.content,e.options)),Sa=[]}var yI=(e,{containerId:t})=>{var n;return(n=dt.get(t||1))==null?void 0:n.toasts.get(e)};function ES(e,t){var n;if(t)return!!((n=dt.get(t))!=null&&n.isToastActive(e));let r=!1;return dt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function xI(e){if(!_S()){Sa=Sa.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||lI(e))dt.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=dt.get(e.containerId);t?t.removeToast(e.id):dt.forEach(n=>{n.removeToast(e.id)})}}var bI=(e={})=>{dt.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function CS(e,t){fp(e)&&(_S()||Sa.push({content:e,options:t}),dt.forEach(n=>{n.buildToast(e,t)}))}function wI(e){var t;(t=dt.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function kS(e,t){dt.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function SI(e){let t=e.containerId||1;return{subscribe(n){let r=mI(t,e,gI);dt.set(t,r);let i=r.observe(n);return vI(),()=>{i(),dt.delete(t)}},setProps(n){var r;(r=dt.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=dt.get(t))==null?void 0:n.getSnapshot()}}}function _I(e){return pp.add(e),()=>{pp.delete(e)}}function EI(e){return e&&(Qr(e.toastId)||Na(e.toastId))?e.toastId:SS()}function za(e,t){return CS(e,t),t.toastId}function rc(e,t){return{...t,type:t&&t.type||e,toastId:EI(t)}}function ic(e){return(t,n)=>za(t,rc(e,n))}function J(e,t){return za(e,rc("default",t))}J.loading=(e,t)=>za(e,rc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function CI(e,{pending:t,error:n,success:r},i){let o;t&&(o=Qr(t)?J.loading(t,i):J.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,c,d)=>{if(c==null){J.dismiss(o);return}let m={type:u,...a,...i,data:d},f=Qr(c)?{render:c}:c;return o?J.update(o,{...m,...f}):J(f.render,{...m,...f}),d},s=Yn(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}J.promise=CI;J.success=ic("success");J.info=ic("info");J.error=ic("error");J.warning=ic("warning");J.warn=J.warning;J.dark=(e,t)=>za(e,rc("default",{theme:"dark",...t}));function kI(e){xI(e)}J.dismiss=kI;J.clearWaitingQueue=bI;J.isActive=ES;J.update=(e,t={})=>{let n=yI(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:SS()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,za(a,o)}};J.done=e=>{J.update(e,{progress:1})};J.onChange=_I;J.play=e=>kS(!0,e);J.pause=e=>kS(!1,e);function TI(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=b.useRef(SI(e)).current;i(e);let o=(t=b.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:c}=u.props;s.has(c)||s.set(c,[]),s.get(c).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:ES,count:o==null?void 0:o.length}}function PI(e){let[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:c,closeOnClick:d}=e;wI({id:e.toastId,containerId:e.containerId,fn:n}),b.useEffect(()=>{if(e.pauseOnFocusLoss)return m(),()=>{f()}},[e.pauseOnFocusLoss]);function m(){document.hasFocus()||p(),window.addEventListener("focus",w),window.addEventListener("blur",p)}function f(){window.removeEventListener("focus",w),window.removeEventListener("blur",p)}function h(_){if(e.draggable===!0||e.draggable===_.pointerType){g();let C=o.current;a.canCloseOnClick=!0,a.canDrag=!0,C.style.transition="none",e.draggableDirection==="x"?(a.start=_.clientX,a.removalDistance=C.offsetWidth*(e.draggablePercent/100)):(a.start=_.clientY,a.removalDistance=C.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function v(_){let{top:C,bottom:O,left:$,right:j}=o.current.getBoundingClientRect();_.nativeEvent.type!=="touchend"&&e.pauseOnHover&&_.clientX>=$&&_.clientX<=j&&_.clientY>=C&&_.clientY<=O?p():w()}function w(){n(!0)}function p(){n(!1)}function g(){a.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",E)}function x(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",E)}function S(_){let C=o.current;if(a.canDrag&&C){a.didMove=!0,t&&p(),e.draggableDirection==="x"?a.delta=_.clientX-a.start:a.delta=_.clientY-a.start,a.start!==_.clientX&&(a.canCloseOnClick=!1);let O=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;C.style.transform=`translate3d(${O},0)`,C.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function E(){x();let _=o.current;if(a.canDrag&&a.didMove&&_){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}_.style.transition="transform 0.2s, opacity 0.2s",_.style.removeProperty("transform"),_.style.removeProperty("opacity")}}let k={onPointerDown:h,onPointerUp:v};return l&&s&&(k.onMouseEnter=p,e.stacked||(k.onMouseLeave=w)),d&&(k.onClick=_=>{c&&c(_),a.canCloseOnClick&&u(!0)}),{playToast:w,pauseToast:p,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:k}}var OI=typeof window<"u"?b.useLayoutEffect:b.useEffect,oc=({theme:e,type:t,isLoading:n,...r})=>q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function MI(e){return q.createElement(oc,{...e},q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function $I(e){return q.createElement(oc,{...e},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function II(e){return q.createElement(oc,{...e},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function jI(e){return q.createElement(oc,{...e},q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function DI(){return q.createElement("div",{className:"Toastify__spinner"})}var hp={info:$I,warning:MI,success:II,error:jI,spinner:DI},LI=e=>e in hp;function RI({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Yn(r)?i=r({...o,isLoading:n}):b.isValidElement(r)?i=b.cloneElement(r,o):n?i=hp.spinner():LI(t)&&(i=hp[t](o))),i}var AI=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=PI(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:c,hideProgressBar:d,closeToast:m,transition:f,position:h,className:v,style:w,progressClassName:p,updateId:g,role:x,progress:S,rtl:E,toastId:k,deleteToast:_,isIn:C,isLoading:O,closeOnClick:$,theme:j,ariaLabel:I}=e,D=Hr("Toastify__toast",`Toastify__toast-theme--${j}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":$}),R=Yn(v)?v({rtl:E,position:h,type:c,defaultClassName:D}):Hr(D,v),L=RI(e),F=!!S||!s,A={closeToast:m,type:c,theme:j},P=null;return a===!1||(Yn(a)?P=a(A):b.isValidElement(a)?P=b.cloneElement(a,A):P=fI(A)),q.createElement(f,{isIn:C,done:_,position:h,preventExitTransition:n,nodeRef:r,playToast:o},q.createElement("div",{id:k,tabIndex:0,onClick:u,"data-in":C,className:R,...i,style:w,ref:r,...C&&{role:x,"aria-label":I}},L!=null&&q.createElement("div",{className:Hr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},L),wS(l,e,!t),P,!e.customProgressBar&&q.createElement(pI,{...g&&!F?{key:`p-${g}`}:{},rtl:E,theme:j,delay:s,isRunning:t,isIn:C,closeToast:m,hide:d,type:c,className:p,controlledProgress:F,progress:S||0})))},FI=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),NI=dI(FI("bounce",!0)),zI={position:"top-right",transition:NI,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function oo(e){let t={...zI,...e},n=e.stacked,[r,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=TI(t),{className:u,style:c,rtl:d,containerId:m,hotKeys:f}=t;function h(w){let p=Hr("Toastify__toast-container",`Toastify__toast-container--${w}`,{"Toastify__toast-container--rtl":d});return Yn(u)?u({position:w,rtl:d,defaultClassName:p}):Hr(p,dp(u))}function v(){n&&(i(!0),J.play())}return OI(()=>{var w;if(n){let p=o.current.querySelectorAll('[data-in="true"]'),g=12,x=(w=t.position)==null?void 0:w.includes("top"),S=0,E=0;Array.from(p).reverse().forEach((k,_)=>{let C=k;C.classList.add("Toastify__toast--stacked"),_>0&&(C.dataset.collapsed=`${r}`),C.dataset.pos||(C.dataset.pos=x?"top":"bot");let O=S*(r?.2:1)+(r?0:g*_);C.style.setProperty("--y",`${x?O:O*-1}px`),C.style.setProperty("--g",`${g}`),C.style.setProperty("--s",`${1-(r?E:0)}`),S+=C.offsetHeight,E+=.025})}},[r,s,n]),b.useEffect(()=>{function w(p){var g;let x=o.current;f(p)&&((g=x.querySelector('[tabIndex="0"]'))==null||g.focus(),i(!1),J.pause()),p.key==="Escape"&&(document.activeElement===x||x!=null&&x.contains(document.activeElement))&&(i(!0),J.play())}return document.addEventListener("keydown",w),()=>{document.removeEventListener("keydown",w)}},[f]),q.createElement("section",{ref:o,className:"Toastify",id:m,onMouseEnter:()=>{n&&(i(!1),J.pause())},onMouseLeave:v,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((w,p)=>{let g=p.length?{...c}:{...c,pointerEvents:"none"};return q.createElement("div",{tabIndex:-1,className:h(w),"data-stacked":n,style:g,key:`c-${w}`},p.map(({content:x,props:S})=>q.createElement(AI,{...S,stacked:n,collapseAll:v,isIn:l(S.toastId,S.containerId),key:`t-${S.key}`},x)))}))}const _a="/Didiv/assets/nofoto-2f8d9d99.png",BI=()=>{const e=ri(),[t,n]=b.useState([]);b.useEffect(()=>{const o=new Date,a=new Date;a.setDate(o.getDate()-7);const l=a.toISOString();fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${l}`).then(s=>s.json()).then(s=>n(s.data)).catch(s=>console.error("Помилка завантаження нових товарів:",s))},[]),console.log(t);const r=[...t].sort(()=>Math.random()-.5).slice(0,3),i=o=>{e(Fa({...o,quantity:1})),J.success(`${o.name} додано в кошик!`)};return!t||t.length===0?null:y.jsxs(e$,{children:[y.jsx(oo,{}),y.jsx(t$,{children:"Нові товари"}),y.jsxs(n$,{children:[r.map(o=>{var a;return y.jsxs(r$,{children:[y.jsxs(i$,{to:`/product/${o.id}`,children:[y.jsx(o$,{children:"Новинка"}),y.jsx("img",{src:((a=o.images)==null?void 0:a[0].url)||_a,alt:o.name,onError:l=>{l.currentTarget.onerror=null,l.currentTarget.src=_a}}),y.jsx("div",{className:"overlay"})]}),y.jsxs(a$,{children:[y.jsx(s$,{children:o.name}),y.jsxs(l$,{children:[y.jsxs(u$,{children:[o.price," грн"]}),y.jsx(c$,{onClick:()=>i(o),children:y.jsx(ja,{size:22})})]})]})]},o.id)}),y.jsx(d$,{to:"/catalog/new",children:y.jsxs(f$,{children:[y.jsx("p",{children:"Усі новинки"}),y.jsx(p$,{children:y.jsx(bb,{size:24})})]})})]})]})},VI=T.div`
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
`,TS=()=>y.jsxs(VI,{children:[y.jsxs(md,{children:[y.jsx(gd,{children:"3000+"}),y.jsx(vd,{children:"Перевірених деталей"})]}),y.jsxs(md,{children:[y.jsx(gd,{children:"6 років"}),y.jsx(vd,{children:"Досвіду на ринку"})]}),y.jsxs(md,{children:[y.jsx(gd,{children:"100%"}),y.jsx(vd,{children:"Контроль якості"})]})]}),HI=ze.div`
  background:var(--background-color);
`,UI=ze.div`
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
`;const WI=()=>y.jsx(HI,{children:y.jsxs(UI,{children:[y.jsx(J5,{}),y.jsx(TS,{}),y.jsx(BI,{}),y.jsx(g3,{})]})}),GI=T.div`
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
`,YI=T.section`
  background-color:  var(--second-background);
`,qI=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,XI=T.button`
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
`,KI=T.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,ZI=T.button`
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
`,QI=T.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,JI=T.div`
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
`,ej=T.div`
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
`;const tj=T.div`
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
`;const nj=T.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,rj=T.button`
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
`,ij=T.aside`

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
`,oj=T.h3`
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
`;const aj=T.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,sj=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,lj=T.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,uj=T.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,cj=T.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,dj=T.label`
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
`,fj=T.span`
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
`;var gp={},um={},cm={},ao={};Object.defineProperty(ao,"__esModule",{value:!0});ao.Direction=void 0;var pv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(pv||(ao.Direction=pv={}));(function(e){var t=te&&te.__spreadArray||function(I,D,R){if(R||arguments.length===2)for(var L=0,F=D.length,A;L<F;L++)(A||!(L in D))&&(A||(A=Array.prototype.slice.call(D,0,L)),A[L]=D[L]);return I.concat(A||Array.prototype.slice.call(D))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=b,r=ao,i=function(I){var D=I.toString().split(".")[1];return D?D.length:0};e.getStepDecimals=i;function o(I){return I.touches&&I.touches.length||I.changedTouches&&I.changedTouches.length}e.isTouchEvent=o;function a(I,D,R){var L=(D-I)/R,F=8,A=Number(L.toFixed(F));return parseInt(A.toString(),10)===A}e.isStepDivisible=a;function l(I,D,R,L,F,A,P){var M=1e11;if(I=Math.round(I*M)/M,!A){var N=P[D-1],B=P[D+1];if(N&&N>I)return N;if(B&&B<I)return B}if(I>L)return L;if(I<R)return R;var z=Math.floor(I*M-R*M)%Math.floor(F*M),H=Math.floor(I*M-Math.abs(z)),U=z===0?I:H/M,Y=Math.abs(z/M)<F/2?U:U+F,X=(0,e.getStepDecimals)(F);return parseFloat(Y.toFixed(X))}e.normalizeValue=l;function s(I,D,R){return(I-D)/(R-D)}e.relativeValue=s;function u(I){return I===r.Direction.Up||I===r.Direction.Down}e.isVertical=u;function c(I,D,R){if(D>=R)throw new RangeError("min (".concat(D,") is equal/bigger than max (").concat(R,")"));if(I<D)throw new RangeError("value (".concat(I,") is smaller than min (").concat(D,")"));if(I>R)throw new RangeError("value (".concat(I,") is bigger than max (").concat(R,")"))}e.checkBoundaries=c;function d(I,D,R){return I<D?D:I>R?R:I}e.checkValuesAgainstBoundaries=d;function m(I){if(!(I.length<2)&&!I.slice(1).every(function(D,R){return I[R]<=D}))throw new RangeError("values={[".concat(I,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=m;function f(I){var D=window.getComputedStyle(I);return{top:parseInt(D["margin-top"],10),bottom:parseInt(D["margin-bottom"],10),left:parseInt(D["margin-left"],10),right:parseInt(D["margin-right"],10)}}e.getMargin=f;function h(I){var D=window.getComputedStyle(I);return{top:parseInt(D["padding-top"],10)+parseInt(D["border-top-width"],10),bottom:parseInt(D["padding-bottom"],10)+parseInt(D["border-bottom-width"],10),left:parseInt(D["padding-left"],10)+parseInt(D["border-left-width"],10),right:parseInt(D["padding-right"],10)+parseInt(D["border-right-width"],10)}}e.getPaddingAndBorder=h;function v(I,D,R){var L=R?-1:1;I.forEach(function(F,A){return p(F,L*D[A].x,D[A].y)})}e.translateThumbs=v;function w(I,D,R,L){for(var F=0,A=$(I[0],D,R,L),P=1;P<I.length;P++){var M=$(I[P],D,R,L);M<A&&(A=M,F=P)}return F}e.getClosestThumbIndex=w;function p(I,D,R){I.style.transform="translate(".concat(D,"px, ").concat(R,"px)")}e.translate=p;var g=function(I){var D=[],R=null,L=function(){for(var F=[],A=0;A<arguments.length;A++)F[A]=arguments[A];D=F,!R&&(R=requestAnimationFrame(function(){R=null,I.apply(void 0,D)}))};return L};e.schd=g;function x(I,D,R){var L=I.slice(0);return L[D]=R,L}e.replaceAt=x;function S(I){var D=I.values,R=I.colors,L=I.min,F=I.max,A=I.direction,P=A===void 0?r.Direction.Right:A,M=I.rtl,N=M===void 0?!1:M;N&&P===r.Direction.Right?P=r.Direction.Left:N&&r.Direction.Left&&(P=r.Direction.Right);var B=D.slice(0).sort(function(H,U){return H-U}).map(function(H){return(H-L)/(F-L)*100}),z=B.reduce(function(H,U,Y){return"".concat(H,", ").concat(R[Y]," ").concat(U,"%, ").concat(R[Y+1]," ").concat(U,"%")},"");return"linear-gradient(".concat(P,", ").concat(R[0]," 0%").concat(z,", ").concat(R[R.length-1]," 100%)")}e.getTrackBackground=S;function E(){}e.voidFn=E;function k(I){throw new Error("Didn't expect to get here")}e.assertUnreachable=k;var _=function(I,D,R,L,F){F===void 0&&(F=function(P){return P});var A=Math.ceil(t([I],Array.from(I.children),!0).reduce(function(P,M){var N=Math.ceil(M.getBoundingClientRect().width);if(M.innerText&&M.innerText.includes(R)&&M.childElementCount===0){var B=M.cloneNode(!0);B.innerHTML=F(D.toFixed(L)),B.style.visibility="hidden",document.body.appendChild(B),N=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return N>P?N:P},I.getBoundingClientRect().width));return A},C=function(I,D,R,L,F,A,P){P===void 0&&(P=function(B){return B});var M=[],N=function(B){var z=_(R[B],L[B],F,A,P),H=D[B].x;D.forEach(function(U,Y){var X=U.x,ee=_(R[Y],L[Y],F,A,P);B!==Y&&(H>=X&&H<=X+ee||H+z>=X&&H+z<=X+ee)&&(M.includes(Y)||(M.push(B),M.push(Y),M=t(t([],M,!0),[B,Y],!1),N(Y)))})};return N(I),Array.from(new Set(M.sort()))},O=function(I,D,R,L,F,A){L===void 0&&(L=.1),F===void 0&&(F=" - "),A===void 0&&(A=function(Y){return Y});var P=(0,e.getStepDecimals)(L),M=(0,n.useState)({}),N=M[0],B=M[1],z=(0,n.useState)(A(D[R].toFixed(P))),H=z[0],U=z[1];return(0,n.useEffect)(function(){if(I){var Y=I.getThumbs();if(Y.length<1)return;var X={},ee=I.getOffsets(),fe=C(R,ee,Y,D,F,P,A),be=A(D[R].toFixed(P));if(fe.length){var ie=fe.reduce(function(vt,lo,Ha,uo){return vt.length?t(t([],vt,!0),[ee[uo[Ha]].x],!1):[ee[uo[Ha]].x]},[]);if(Math.min.apply(Math,ie)===ee[R].x){var $e=[];fe.forEach(function(vt){$e.push(D[vt].toFixed(P))}),be=Array.from(new Set($e.sort(function(vt,lo){return parseFloat(vt)-parseFloat(lo)}))).map(A).join(F);var Be=Math.min.apply(Math,ie),Ve=Math.max.apply(Math,ie),oi=Y[fe[ie.indexOf(Ve)]].getBoundingClientRect().width;X.left="".concat(Math.abs(Be-(Ve+oi))/2,"px"),X.transform="translate(-50%, 0)"}else X.visibility="hidden"}U(be),B(X)}},[I,D]),[H,N]};e.useThumbOverlap=O;function $(I,D,R,L){var F=I.getBoundingClientRect(),A=F.left,P=F.top,M=F.width,N=F.height;return u(L)?Math.abs(R-(P+N/2)):Math.abs(D-(A+M/2))}var j=function(){var I,D=((I=navigator.userAgentData)===null||I===void 0?void 0:I.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(D)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=j})(cm);var pj=te&&te.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),hj=te&&te.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),mj=te&&te.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),gj=te&&te.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&hj(t,e,n);return mj(t,e),t},hv=te&&te.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(um,"__esModule",{value:!0});var ys=gj(b),oe=cm,Re=ao,vj=["ArrowRight","ArrowUp","k","PageUp"],yj=["ArrowLeft","ArrowDown","j","PageDown"],xj=function(e){pj(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=ys.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,u=r.trackRef.current;if(!u)return console.warn("No track element found."),[];var c=u.getBoundingClientRect(),d=(0,oe.getPaddingAndBorder)(u);return r.getThumbs().map(function(m,f){var h={x:0,y:0},v=m.getBoundingClientRect(),w=(0,oe.getMargin)(m);switch(o){case Re.Direction.Right:return h.x=(w.left+d.left)*-1,h.y=((v.height-c.height)/2+d.top)*-1,h.x+=c.width*(0,oe.relativeValue)(a[f],l,s)-v.width/2,h;case Re.Direction.Left:return h.x=(w.right+d.right)*-1,h.y=((v.height-c.height)/2+d.top)*-1,h.x+=c.width-c.width*(0,oe.relativeValue)(a[f],l,s)-v.width/2,h;case Re.Direction.Up:return h.x=((v.width-c.width)/2+w.left+d.left)*-1,h.y=-d.left,h.y+=c.height-c.height*(0,oe.relativeValue)(a[f],l,s)-v.height/2,h;case Re.Direction.Down:return h.x=((v.width-c.width)/2+w.left+d.left)*-1,h.y=-d.left,h.y+=c.height*(0,oe.relativeValue)(a[f],l,s)-v.height/2,h;default:return(0,oe.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,oe.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,oe.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,oe.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,oe.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,u=o.rtl,c=o.direction,d=r.state.isChanged,m=r.getTargetIndex(i.nativeEvent),f=u||c===Re.Direction.Left||c===Re.Direction.Down?-1:1;m!==-1&&(vj.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:m,isChanged:!0}),l((0,oe.replaceAt)(a,m,r.normalizeValue(a[m]+f*(i.key==="PageUp"?s*10:s),m)))):yj.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:m,isChanged:!0}),l((0,oe.replaceAt)(a,m,r.normalizeValue(a[m]-f*(i.key==="PageDown"?s*10:s),m)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){d&&r.fireOnFinalChange()}):d&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,u=r.props,c=u.direction,d=u.min,m=u.max,f=u.onChange,h=u.values,v=u.step,w=u.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var p=r.trackRef.current;if(!p)return null;var g=p.getBoundingClientRect(),x=(0,oe.isVertical)(c)?g.height:g.width;if(s[0]!==-1&&s[1]!==-1){var S=i-s[0],E=o-s[1],k=0;switch(c){case Re.Direction.Right:case Re.Direction.Left:k=S/x*(m-d);break;case Re.Direction.Down:case Re.Direction.Up:k=E/x*(m-d);break;default:(0,oe.assertUnreachable)(c)}if(w&&(k*=-1),Math.abs(k)>=v/2){for(var _=0;_<r.thumbRefs.length;_++){if(h[_]===m&&Math.sign(k)===1||h[_]===d&&Math.sign(k)===-1)return;var C=h[_]+k;C>m?k=m-h[_]:C<d&&(k=d-h[_])}for(var O=h.slice(0),_=0;_<r.thumbRefs.length;_++)O=(0,oe.replaceAt)(O,_,r.normalizeValue(h[_]+k,_));r.setState({draggedTrackPos:[i,o]}),f(O)}}else{var $=0;switch(c){case Re.Direction.Right:$=(i-g.left)/x*(m-d)+d;break;case Re.Direction.Left:$=(x-(i-g.left))/x*(m-d)+d;break;case Re.Direction.Down:$=(o-g.top)/x*(m-d)+d;break;case Re.Direction.Up:$=(x-(o-g.top))/x*(m-d)+d;break;default:(0,oe.assertUnreachable)(c)}w&&($=m+d-$),Math.abs(h[l]-$)>=v/2&&f((0,oe.replaceAt)(h,l,r.normalizeValue($,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,u=a.step,c=a.allowOverlap,d=a.values;return(0,oe.normalizeValue)(i,o,l,s,u,c,d)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=ys.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),u=[],c=0;c<r.numOfMarks+1;c++){var d=9999,m=9999;if(r.markRefs[c].current){var f=r.markRefs[c].current.getBoundingClientRect();d=f.height,m=f.width}r.props.direction===Re.Direction.Left||r.props.direction===Re.Direction.Right?u.push([Math.round(o/r.numOfMarks*c+l-m/2),-Math.round((d-a)/2)]):u.push([Math.round(a/r.numOfMarks*c+s-d/2),-Math.round((m-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,oe.schd)(r.onMouseMove),r.schdOnTouchMove=(0,oe.schd)(r.onTouchMove),r.schdOnEnd=(0,oe.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return ys.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,oe.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,oe.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,oe.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,oe.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(c){(0,oe.isStepDivisible)(a,c,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,u=s===void 0?function(){return null}:s,c=r.values,d=r.min,m=r.max,f=r.allowOverlap,h=r.disabled,v=this.state,w=v.draggedThumbIndex,p=v.thumbZIndexes,g=v.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:w>-1?"grabbing":this.props.draggableTrack?(0,oe.isVertical)(this.props.direction)?"ns-resize":"ew-resize":c.length===1&&!h?"pointer":"inherit"},onMouseDown:h?oe.voidFn:this.onMouseDownTrack,onTouchStart:h?oe.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:h,children:hv(hv([],g.map(function(x,S,E){return u({props:{style:n.props.direction===Re.Direction.Left||n.props.direction===Re.Direction.Right?{position:"absolute",left:"".concat(x[0],"px"),marginTop:"".concat(x[1],"px")}:{position:"absolute",top:"".concat(x[0],"px"),marginLeft:"".concat(x[1],"px")},key:"mark".concat(S),ref:n.markRefs[S]},index:S})}),!0),c.map(function(x,S){var E=n.state.draggedThumbIndex===S;return l({index:S,value:x,isDragged:E,props:{style:{position:"absolute",zIndex:p[S],cursor:h?"inherit":E?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:S,tabIndex:h?void 0:0,"aria-valuemax":f?m:c[S+1]||m,"aria-valuemin":f?d:c[S-1]||d,"aria-valuenow":x,draggable:!1,ref:n.thumbRefs[S],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:h?oe.voidFn:n.onKeyDown,onKeyUp:h?oe.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:Re.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(ys.Component);um.default=xj;(function(e){var t=te&&te.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(um);e.Range=n.default;var r=cm;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=ao;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(gp);const bj=T.div`
  padding: 20px 0;
`,wj=T.div`
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
`;const Sj=T.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,_j=T.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,OS=({childValues:e,onChange:t})=>{const o=(e==null?void 0:e[0])??10,a=(e==null?void 0:e[1])??1e4,l=o!==a,[s,u]=b.useState([o,a]);b.useEffect(()=>{e&&e.length===2&&(u(e),t&&t(e))},[e,t]);const c=f=>{u(f),t&&t(f)},d=(f,h)=>{const v=h===""?"":Number(h),w=[...s];w[f]=v,c(w)},m=f=>{const h=[...s];f===0?((h[0]===""||h[0]<o)&&(h[0]=o),h[0]>h[1]-50&&(h[0]=h[1]-50)):((h[1]===""||h[1]>a)&&(h[1]=a),h[1]<h[0]+50&&(h[1]=h[0]+50)),c(h)};return y.jsx(y.Fragment,{children:l&&y.jsxs(bj,{children:[y.jsxs(wj,{children:[y.jsx(mv,{type:"number",value:s[0],min:o,max:s[1],onChange:f=>d(0,f.target.value),onBlur:()=>m(0)}),y.jsx(mv,{type:"number",value:s[1],min:s[0],max:a,onChange:f=>d(1,f.target.value),onBlur:()=>m(1)})]}),y.jsx(gp.Range,{values:s,step:50,min:o,max:a,onChange:c,renderTrack:({props:f,children:h})=>y.jsx(Sj,{...f,background:gp.getTrackBackground({values:s,colors:["#ddd","#85683d","#ddd"],min:o,max:a}),children:h}),renderThumb:({props:f})=>y.jsx(_j,{...f})})]})})},Ej=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState([]);b.useEffect(()=>{t&&(async()=>{try{const h=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=200`);console.log(t);const v=await h.json();console.log("dataaaa",v.data);const w=v.data||[],p={};w.forEach(x=>{var S;(S=x.attributes)==null||S.forEach(E=>{p[E.label]||(p[E.label]=new Set),p[E.label].add(E.value)})});const g=Object.entries(p).map(([x,S])=>({type:"checkbox",label:x,name:x.toLowerCase(),options:Array.from(S)}));console.log("fillltr",g),a(g)}catch(h){console.error(h)}})()},[t]);const[l,s]=b.useState({}),u=f=>{s(h=>({...h,[f]:!h[f]}))},c=(f,h)=>{r(v=>{const w=v[f]||[];return w.includes(h)?{...v,[f]:w.filter(p=>p!==h)}:{...v,[f]:[...w,h]}})},d=Object.values(n).some(f=>Array.isArray(f)&&f.length>0),m=()=>{d&&r({})};return console.log(d),y.jsxs(ij,{children:[y.jsxs(oj,{children:["Фільтри ",y.jsx(wb,{size:20})]}),(o||[]).map(f=>{var v;const h=!!l[f.name];return y.jsxs(aj,{children:[y.jsxs(sj,{onClick:()=>u(f.name),children:[y.jsx(lj,{children:f.label}),y.jsx(uj,{isOpen:h})]}),y.jsxs(cj,{isOpen:h,children:[f.type==="checkbox"&&((v=f.options)==null?void 0:v.map(w=>{var p;return y.jsxs(dj,{children:[y.jsx(mp,{checked:((p=n[f.name])==null?void 0:p.includes(w))||!1,onChange:()=>c(f.name,w)}),y.jsx(fj,{}),w]},w)})),f.type==="range"&&y.jsx(OS,{onChange:i,childValues:e})]})]},f.name)}),y.jsx(PS,{onClick:m,disabled:!d,children:"Скинути обрані фільтри"})]})},Cj=T.aside`
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
`;const kj=T.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,Tj=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,Pj=T.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,Oj=T.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,Mj=T.div`
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
`,vp=T.input.attrs({type:"checkbox"})`
  display: none;
`,Ij=T.span`
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
`,jj=({childValues:e,category:t,selectedFilters:n,setSelectedFilters:r,setPriceRange:i})=>{const[o,a]=b.useState({}),[l,s]=b.useState([]);b.useEffect(()=>{t&&(async()=>{var m;try{const v=((m=(await(await fetch(`https://backenddidiv-production.up.railway.app/api/categories?filters[title][$eq]=${t}&populate=filters`)).json()).data[0])==null?void 0:m.filters)||[];s(v)}catch(f){console.error(f)}})()},[t]);const u=d=>{a(m=>({...m,[d]:!m[d]}))},c=(d,m)=>{r(f=>{const h=f[d]||[];return h.includes(m)?{...f,[d]:h.filter(v=>v!==m)}:{...f,[d]:[...h,m]}})};return y.jsx(Cj,{children:(l||[]).map(d=>{var f;const m=!!o[d.name];return y.jsxs(kj,{children:[y.jsxs(Tj,{onClick:()=>u(d.name),children:[y.jsx(Pj,{children:d.label}),y.jsx(Oj,{isOpen:m})]}),y.jsxs(Mj,{isOpen:m,children:[d.type==="checkbox"&&((f=d.options)==null?void 0:f.map(h=>{var v;return y.jsxs($j,{children:[y.jsx(vp,{checked:((v=n[d.name])==null?void 0:v.includes(h))||!1,onChange:()=>c(d.name,h)}),y.jsx(Ij,{}),h]},h)})),d.type==="range"&&y.jsx(OS,{onChange:i,childValues:e})]})]},d.name)})})},Dj=T.div`
`,Lj=T.h2`
  text-align: center;
  font-size:34px;
  font-weight:600px;
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
`,Nj=T.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;
`,zj=T.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,Bj=T.p`
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
`,Vj=T.p`
     font-size: 17px;
    font-weight: 800;

`,Hj=T.div.attrs({className:"card-buttons"})`
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
`;const Uj=T.div`
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
`,MS=yS({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]}}}),{toggleFavorite:Ba,clearFavorite:Wj}=MS.actions,Gj=MS.reducer,Yj=({setValues:e,category:t,selectedFilters:n={},priceRange:r})=>{const[i,o]=b.useState([]),[a,l]=b.useState(!0);console.log(t);const[s,u]=b.useState(1),c=24;let d=i;b.useEffect(()=>{(async()=>{try{l(!0);const _=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(t)}&pagination[pageSize]=500`)).json();o(_.data);const C=_.data.map(O=>O.price);if(C.length>0){let O=Math.min(...C),$=Math.max(...C);e([O,$])}}catch(k){console.error("Error fetching products:",k)}finally{l(!1)}})()},[t,e]),b.useEffect(()=>{u(1)},[t,n,r]),b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[s]);const m=Qi(),f=ri(),h=Dt(E=>E.favorites.items),v=Dt(E=>E.cart.items),w=(E,k)=>{k.stopPropagation();const _=h.some(C=>C.id===E.id);f(Ba(E)),_?J.warning(`${E.name} видалено з обраного`):J.info(`${E.name} додано в обране`)};if(Object.keys(n).forEach(E=>{const k=n[E];Array.isArray(k)&&k.length>0&&(d=d.filter(_=>{var O;const C=(O=_.attributes)==null?void 0:O.find($=>$.label.toLowerCase()===E.toLowerCase());return C&&k.includes(C.value)}))}),r&&r.length===2){const[E,k]=r;console.log(E,k)}const p=s*c,g=p-c,x=d.slice(g,p),S=Math.ceil(d.length/c);return a?y.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:y.jsx(Lu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):(console.log(x),console.log("filteredProducts.length:",d.length),console.log("currentProducts.length:",x.length),y.jsxs(Dj,{children:[y.jsx(Lj,{children:t}),y.jsx(oo,{autoClose:1500}),d.length===0?y.jsx(Rj,{children:y.jsx("p",{style:{textAlign:"center",fontSize:"30px",marginTop:"50px",marginLeft:"auto",marginRight:"auto"},children:"Нічого не знайдено 😢"})}):y.jsx(Aj,{children:x.map(E=>{var j,I;const k=h.some(D=>D.id===E.id),_=v.find(D=>D.id===E.id),O=(_?_.quantity:0)>=(E.stock||0),$=(D,R)=>{if(R.stopPropagation(),O){J.error(`Вибачте, доступно лише ${D.stock} шт.`);return}f(Fa({...D,quantity:1})),J.success(`${D.name} додано в кошик!`)};return y.jsxs(Fj,{onClick:()=>m(`/product/${E.id}`),style:{cursor:"pointer"},children:[y.jsx(Nj,{src:((I=(j=E.images)==null?void 0:j[0])==null?void 0:I.url)||"/placeholder.jpg",alt:E.name,onError:D=>{D.currentTarget.onerror=null,D.currentTarget.src=_a}}),y.jsx(Bj,{children:E.name}),y.jsxs(zj,{children:[y.jsxs(Vj,{children:[E.price," грн"]}),y.jsxs(Hj,{children:[y.jsx(gv,{onClick:D=>$(E,D),children:y.jsx(ja,{size:24,color:"black"})}),y.jsx(gv,{onClick:D=>w(E,D),children:y.jsx(zh,{size:24,fill:k?"#ff4d4f":"none",color:k?"#ff4d4f":"#000000"})})]})]})]},E.id)})}),d.length>c&&y.jsxs(Uj,{children:[y.jsx(yd,{onClick:()=>u(E=>Math.max(E-1,1)),disabled:s===1,children:"Назад"}),Array.from({length:S},(E,k)=>y.jsx(yd,{onClick:()=>u(k+1),active:s===k+1,children:k+1},k)),y.jsx(yd,{onClick:()=>u(E=>Math.min(E+1,S)),disabled:s===S,children:"Вперед"})]})]}))},qj=()=>{const[e,t]=b.useState({});console.log(e);const{category:n}=F1(),[r,i]=b.useState(!1),[o,a]=b.useState([]),[l,s]=b.useState([0,0]);console.log(o),console.log(n);const u=Object.values(e).some(d=>Array.isArray(d)&&d.length>0),c=()=>{u&&t({})};return y.jsxs(YI,{children:[y.jsxs(GI,{children:[y.jsxs(qI,{children:[y.jsxs(XI,{onClick:()=>i(!0),children:["Фільтр",y.jsx(KI,{children:y.jsx("use",{href:`${dn}#icon-filter`})})]}),y.jsxs(ZI,{onClick:()=>i(!0),children:["Сортування",y.jsx(QI,{children:y.jsx("use",{href:`${dn}#icon-sort`})})]})]}),y.jsx(Ej,{category:n,selectedFilters:e,setSelectedFilters:t,childValues:o,priceRange:l,setPriceRange:s}),y.jsx(Yj,{priceRange:l,values:o,setValues:a,category:n,selectedFilters:e}),r&&y.jsx(JI,{onClick:()=>i(!1),open:r,children:y.jsxs(ej,{onClick:d=>d.stopPropagation(),open:r,children:[y.jsxs(tj,{children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[y.jsx(wb,{size:20}),y.jsx("h2",{children:"Фільтри"})]}),y.jsx(_b,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),y.jsx(jj,{childValues:o,category:n,selectedFilters:e,setSelectedFilters:t,priceRange:l,setPriceRange:s}),y.jsxs(nj,{children:[y.jsx(PS,{onClick:c,disabled:!u,children:"Скинути обрані фільтри"}),y.jsx(rj,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})," "]})},vv=T.div`
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
`,$S=T.span`

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
`,bD=T.div`
  position: relative;
  display: inline-block;

  &:hover ${$S} {
  opacity: ${({$active:e})=>e?1:0};
    transform: translateX(-50%) translateY(0);
  }
`,IS="carousel",jS="controller",wD="navigation",SD="no-scroll",dm="portal",_D="root",DS="toolbar",xv="zoom",xd="loading",bd="error",wd="complete",ED="placeholder",CD=e=>`active-slide-${e}`,kD="fullsize",fm="flex_center",TD="no_scroll",LS="no_scroll_padding",pm="slide",RS="slide_wrapper",PD="slide_wrapper_interactive",Lr="prev",Rr="next",bv="swipe",Yi="close",AS="onPointerDown",FS="onPointerMove",NS="onPointerUp",zS="onPointerLeave",BS="onPointerCancel",hm="onKeyDown",OD="onKeyUp",mm="onWheel",MD="Escape",$D="ArrowLeft",ID="ArrowRight",jD="button",yp="icon",VS="contain",wv="cover",HS="Unknown action type",US="yarl__";function kn(...e){return e.filter(Boolean).join(" ")}function ae(e){return`${US}${e}`}function xt(e){return`--${US}${e}`}function Va(e,t){return`${e}${t?`_${t}`:""}`}function gm(e){return t=>Va(e,t)}function qi(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function DD(e,t,n){return qi(e,"{index} of {total}").replace(/\{index}/g,`${wm(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function vm(...e){return()=>{e.forEach(t=>{t()})}}function Zn(e,t,n){return()=>{const r=b.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function ym(){return typeof window<"u"}function xm(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function so(e){return e.type===void 0||e.type==="image"}function bm(e,t){return e.imageFit===wv||e.imageFit!==VS&&t===wv}function ac(e){return typeof e=="string"?Number.parseInt(e,10):e}function Ul(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=ac(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function LD(e,t){const n=Ul(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function RD(){return(ym()?window==null?void 0:window.devicePixelRatio:void 0)||1}function wm(e,t){return t>0?(e%t+t)%t:0}function WS(e){return e.length>0}function GS(e,t){return e[wm(t,e.length)]}function xp(e,t){return WS(e)?GS(e,t):void 0}function AD(e){return so(e)?e.src:void 0}function FD(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=b.isValidElement(n)?b.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function ND(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const zD=Number(b.version.split(".")[0])>=19;function BD(e){return{inert:zD?e:e?"":void 0}}function VD(e){e.scrollTop}const bp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[Yi]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:VS,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Tr(e,t){return{name:e,component:t}}function He(e,t){return{module:e,children:t}}function YS(e,t,n){return e.module.name===t?n(e):e.children?[He(e.module,e.children.flatMap(r=>{var i;return(i=YS(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function ui(e,t,n){return e.flatMap(r=>{var i;return(i=YS(r,t,n))!==null&&i!==void 0?i:[]})}function HD(e,t=[],n=[]){let r=e;const i=f=>{const h=[...r];for(;h.length>0;){const v=h.pop();if((v==null?void 0:v.module.name)===f)return!0;v!=null&&v.children&&h.push(...v.children)}return!1},o=(f,h)=>{if(f===""){r=[He(h,r)];return}r=ui(r,f,v=>[He(h,[v])])},a=(f,h)=>{r=ui(r,f,v=>[He(v.module,[He(h,v.children)])])},l=(f,h,v)=>{r=ui(r,f,w=>{var p;return[He(w.module,[...v?[He(h)]:[],...(p=w.children)!==null&&p!==void 0?p:[],...v?[]:[He(h)]])]})},s=(f,h,v)=>{r=ui(r,f,w=>[...v?[He(h)]:[],w,...v?[]:[He(h)]])},u=f=>{a(jS,f)},c=(f,h)=>{r=ui(r,f,v=>[He(h,v.children)])},d=f=>{r=ui(r,f,h=>h.children)},m=f=>{n.push(f)};return t.forEach(f=>{f({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:u,replace:c,remove:d,augment:m})}),{config:r,augmentation:f=>n.reduce((h,v)=>v(h),f)}}const qS=b.createContext(null),XS=Zn("useA11yContext","A11yContext",qS);function UD({children:e}){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const u=c=>d=>{var m;d.currentTarget.contains(d.relatedTarget)||n(c),(m=c?l:s)===null||m===void 0||m(d)};return{onFocus:u(!0),onBlur:u(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return b.createElement(qS.Provider,{value:o},e)}const KS=b.createContext(null),sc=Zn("useDocument","DocumentContext",KS);function WD({nodeRef:e,children:t}){const n=b.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return b.createElement(KS.Provider,{value:n},t)}const ZS=b.createContext(null),lc=Zn("useEvents","EventsContext",ZS);function GD({children:e}){const[t]=b.useState({});b.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=b.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(u=>u!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(u=>u(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return b.createElement(ZS.Provider,{value:n},e)}const QS=b.createContext(null),Xt=Zn("useLightboxProps","LightboxPropsContext",QS);function YD({children:e,...t}){return b.createElement(QS.Provider,{value:t},e)}const JS=b.createContext(null),Pr=Zn("useLightboxState","LightboxStateContext",JS),e2=b.createContext(null),qD=Zn("useLightboxDispatch","LightboxDispatchContext",e2);function XD(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=wm(i,n.length),a=xp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:xp(t.slides,t.index)}:e;default:throw new Error(HS)}}function KD({slides:e,index:t,children:n}){const[r,i]=b.useReducer(XD,{slides:e,currentIndex:t,globalIndex:t,currentSlide:xp(e,t)}),[o,a]=b.useState(e),[l,s]=b.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const u=b.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return b.createElement(e2.Provider,{value:i},b.createElement(JS.Provider,{value:u},n))}const t2=b.createContext(null),uc=Zn("useTimeouts","TimeoutsContext",t2);function ZD({children:e}){const[t]=b.useState([]);b.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=b.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return b.createElement(t2.Provider,{value:n},e)}const Sm=b.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:u,labels:c}=Xt(),d=qi(c,t);return b.createElement("button",{ref:s,type:"button",title:d,"aria-label":d,className:kn(ae(jD),n),onClick:o,style:{...a,...u.button},...l},i?i():b.createElement(r,{className:ae(yp),style:u.icon}))});function QD(e,t){const n=r=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function ii(e,t){return QD(e,b.createElement("g",{fill:"currentColor"},b.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const JD=ii("Close",b.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),eL=ii("Previous",b.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),tL=ii("Next",b.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),nL=ii("Loading",b.createElement(b.Fragment,null,Array.from({length:8}).map((e,t,n)=>b.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),rL=ii("Error",b.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Tn=ym()?b.useLayoutEffect:b.useEffect;function _m(){const[e,t]=b.useState(!1);return b.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function iL(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(ac);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function Sv(e,t){const n=b.useRef(void 0),r=b.useRef(void 0),i=_m();return Tn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:u,easing:c,onfinish:d}=t(n.current,e.current.getBoundingClientRect(),iL(e.current))||{};if(s&&u){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:u,easing:c})}catch(m){console.error(m)}r.current&&(r.current.onfinish=()=>{r.current=void 0,d==null||d()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function n2(){const e=b.useRef(null),t=b.useRef(void 0),[n,r]=b.useState();return{setContainerRef:b.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=u=>parseFloat(u)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function Xs(){const e=b.useRef(void 0),{setTimeout:t,clearTimeout:n}=uc();return b.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function pe(e){const t=b.useRef(e);return Tn(()=>{t.current=e}),b.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function _v(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function wp(e,t){return b.useMemo(()=>e==null&&t==null?null:n=>{_v(e,n),_v(t,n)},[e,t])}function oL(e,t=!1){const n=b.useRef(!1);Tn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=b.useCallback(()=>{n.current=!0},[]),i=b.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function Em(){const[e,t]=b.useState(!1);return Tn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function aL(){const[e]=b.useState({}),t=b.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=b.useMemo(()=>({onPointerDown:i=>t(AS,i),onPointerMove:i=>t(FS,i),onPointerUp:i=>t(NS,i),onPointerLeave:i=>t(zS,i),onPointerCancel:i=>t(BS,i),onKeyDown:i=>t(hm,i),onKeyUp:i=>t(OD,i),onWheel:i=>t(mm,i)}),[t]),r=b.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function Ev(e,t){const n=b.useRef(0),r=Xs(),i=pe((...o)=>{n.current=Date.now(),e(o)});return b.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const Sd=gm("slide"),_d=gm("slide_image");function Wl({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:u}){var c,d,m,f,h,v,w,p;const[g,x]=b.useState(xd),{publish:S}=lc(),{setTimeout:E}=uc(),k=b.useRef(null);b.useEffect(()=>{t===0&&S(CD(g))},[t,g,S]);const _=pe(z=>{("decode"in z?z.decode():Promise.resolve()).catch(()=>{}).then(()=>{z.parentNode&&(x(wd),E(()=>{l==null||l(z)},0))})}),C=b.useCallback(z=>{k.current=z,z!=null&&z.complete&&_(z)},[_]),O=b.useCallback(z=>{_(z.currentTarget)},[_]),$=pe(()=>{x(bd),s==null||s()}),j=bm(e,i),I=(z,H)=>Number.isFinite(z)?z:H,D=I(Math.max(...((d=(c=e.srcSet)===null||c===void 0?void 0:c.map(z=>z.width))!==null&&d!==void 0?d:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((m=k.current)===null||m===void 0?void 0:m.naturalWidth)||0),R=I(Math.max(...((h=(f=e.srcSet)===null||f===void 0?void 0:f.map(z=>z.height))!==null&&h!==void 0?h:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((v=k.current)===null||v===void 0?void 0:v.naturalHeight)||0),L=D&&R?{maxWidth:`min(${D}px, 100%)`,maxHeight:`min(${R}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},F=(w=e.srcSet)===null||w===void 0?void 0:w.slice().sort((z,H)=>z.width-H.width).map(z=>`${z.src} ${z.width}w`).join(", "),A=()=>r&&!j&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,P=F&&r&&ym()?`${Math.round(Math.min(A(),r.width))}px`:void 0,{style:M,className:N,...B}=(typeof o=="function"?o(e):o)||{};return b.createElement(b.Fragment,null,b.createElement("img",{ref:C,onLoad:O,onError:$,onClick:a,draggable:!1,className:kn(ae(_d()),j&&ae(_d("cover")),g!==wd&&ae(_d("loading")),N),style:{...L,...u,...M},...B,alt:(p=e.alt)!==null&&p!==void 0?p:"",sizes:P,srcSet:F,src:e.src}),g!==wd&&b.createElement("div",{className:ae(Sd(ED))},g===xd&&(n!=null&&n.iconLoading?n.iconLoading():b.createElement(nL,{className:kn(ae(yp),ae(Sd(xd)))})),g===bd&&(n!=null&&n.iconError?n.iconError():b.createElement(rL,{className:kn(ae(yp),ae(Sd(bd)))}))))}const sL=b.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=b.useRef(null),{trackFocusWithin:s}=XS();return b.createElement(WD,{nodeRef:l},b.createElement("div",{ref:wp(a,l),className:kn(ae("root"),t),...s(r,i),...o},n))});var rt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(rt||(rt={}));function r2(e,t,n,r,i){b.useEffect(()=>i?()=>{}:vm(e(AS,t),e(FS,n),e(NS,r),e(zS,r),e(BS,r)),[e,t,n,r,i])}var Jt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(Jt||(Jt={}));const Ed=30;function lL({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,u,c,d,m,f,h,v,w){const p=b.useRef(0),g=b.useRef([]),x=b.useRef(void 0),S=b.useRef(0),E=b.useRef(Jt.NONE),k=b.useCallback(D=>{x.current===D.pointerId&&(x.current=void 0,E.current=Jt.NONE);const R=g.current;R.splice(0,R.length,...R.filter(L=>L.pointerId!==D.pointerId))},[]),_=b.useCallback(D=>{k(D),D.persist(),g.current.push(D)},[k]),C=b.useCallback(D=>g.current.find(({pointerId:R})=>D.pointerId===R),[]),O=pe(D=>{_(D)}),$=(D,R)=>d&&D>R||c&&D<-R,j=pe(D=>{const R=C(D);if(R)if(x.current===D.pointerId){const L=Date.now()-S.current,F=p.current;E.current===Jt.SWIPE?Math.abs(F)>.3*i||Math.abs(F)>5&&L<o?s(F,L):u(F):E.current===Jt.PULL&&($(F,2*Ed)?h(F,L):v(F)),p.current=0,E.current=Jt.NONE}else{const{target:L}=D;t&&L instanceof HTMLElement&&L===R.target&&(L.classList.contains(ae(pm))||L.classList.contains(ae(RS)))&&w()}k(D)}),I=pe(D=>{const R=C(D);if(R){const L=x.current===D.pointerId;if(D.buttons===0){L&&p.current!==0?j(D):k(R);return}const F=D.clientX-R.clientX,A=D.clientY-R.clientY;if(x.current===void 0){const P=M=>{_(D),x.current=D.pointerId,S.current=Date.now(),E.current=M};Math.abs(F)>Math.abs(A)&&Math.abs(F)>Ed&&r(F)?e||(P(Jt.SWIPE),a()):Math.abs(A)>Math.abs(F)&&$(A,Ed)&&(P(Jt.PULL),m())}else L&&(E.current===Jt.SWIPE?(p.current=F,l(F)):E.current===Jt.PULL&&(p.current=A,f(A)))}});r2(n,O,I,j)}function uL({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=b.useRef(null),r=pe(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return b.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function cL(e,t,n,r,i,o,a,l,s){const u=b.useRef(0),c=b.useRef(0),d=b.useRef(void 0),m=b.useRef(void 0),f=b.useRef(0),h=b.useRef(void 0),v=b.useRef(0),{setTimeout:w,clearTimeout:p}=uc(),g=b.useCallback(()=>{d.current&&(p(d.current),d.current=void 0)},[p]),x=b.useCallback(()=>{m.current&&(p(m.current),m.current=void 0)},[p]),S=pe(()=>{e!==rt.SWIPE&&(u.current=0,v.current=0,g(),x())});b.useEffect(S,[e,S]);const E=pe(_=>{m.current=void 0,u.current===_&&s(u.current)}),k=pe(_=>{if(_.ctrlKey||Math.abs(_.deltaY)>Math.abs(_.deltaX))return;const C=O=>{f.current=O,p(h.current),h.current=O>0?w(()=>{f.current=0,h.current=void 0},300):void 0};if(e===rt.NONE){if(Math.abs(_.deltaX)<=1.2*Math.abs(f.current)){C(_.deltaX);return}if(!n(-_.deltaX))return;if(c.current+=_.deltaX,g(),Math.abs(c.current)>30)c.current=0,C(0),v.current=Date.now(),o();else{const O=c.current;d.current=w(()=>{d.current=void 0,O===c.current&&(c.current=0)},i)}}else if(e===rt.SWIPE){let O=u.current-_.deltaX;if(O=Math.min(Math.abs(O),r)*Math.sign(O),u.current=O,a(O),x(),Math.abs(O)>.2*r){C(_.deltaX),l(O,Date.now()-v.current);return}m.current=w(()=>E(O),2*i)}else C(_.deltaX)});b.useEffect(()=>t(mm,k),[t,k])}const Cv=gm("container"),i2=b.createContext(null),Qn=Zn("useController","ControllerContext",i2);function dL({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:u,closeOnPullDown:c,preventDefaultWheelX:d,preventDefaultWheelY:m}=o,[f,h]=b.useState(),v=Pr(),w=qD(),[p,g]=b.useState(rt.NONE),x=b.useRef(0),S=b.useRef(0),E=b.useRef(1),{registerSensors:k,subscribeSensors:_}=aL(),{subscribe:C,publish:O}=lc(),$=Xs(),j=Xs(),I=Xs(),{containerRef:D,setContainerRef:R,containerRect:L}=n2(),F=wp(uL({preventDefaultWheelX:d,preventDefaultWheelY:m}),R),A=b.useRef(null),P=wp(A,void 0),{getOwnerDocument:M}=sc(),N=Em(),B=G=>(N?-1:1)*(typeof G=="number"?G:1),z=pe(()=>{var G;return(G=D.current)===null||G===void 0?void 0:G.focus()}),H=pe(()=>t),U=pe(()=>v),Y=b.useCallback(G=>O(Lr,G),[O]),X=b.useCallback(G=>O(Rr,G),[O]),ee=b.useCallback(()=>O(Yi),[O]),fe=G=>!(r.finite&&(B(G)>0&&v.currentIndex===0||B(G)<0&&v.currentIndex===v.slides.length-1)),be=G=>{var we;x.current=G,(we=D.current)===null||we===void 0||we.style.setProperty(xt("swipe_offset"),`${Math.round(G)}px`)},ie=G=>{var we,st;S.current=G,E.current=(()=>{const co=(()=>c&&G>0?G:u&&G<0?-G:0)();return Math.min(Math.max(xm(1-co/60*(1-.5),2),.5),1)})(),(we=D.current)===null||we===void 0||we.style.setProperty(xt("pull_offset"),`${Math.round(G)}px`),(st=D.current)===null||st===void 0||st.style.setProperty(xt("pull_opacity"),`${E.current}`)},{prepareAnimation:$e}=Sv(A,(G,we,st)=>{if(A.current&&L)return{keyframes:[{transform:`translate(0, ${G.rect.y-we.y+st.y}px)`,opacity:G.opacity},{transform:"translate(0, 0)",opacity:1}],duration:G.duration,easing:i.easing.fade}}),Be=(G,we)=>{if(u||c){ie(G);let st=0;A.current&&(st=i.fade*(we?2:1),$e({rect:A.current.getBoundingClientRect(),opacity:E.current,duration:st})),I(()=>{ie(0),g(rt.NONE)},st),g(rt.ANIMATION),we||ee()}},{prepareAnimation:Ve,isAnimationPlaying:oi}=Sv(A,(G,we,st)=>{var pn;if(A.current&&L&&(!((pn=v.animation)===null||pn===void 0)&&pn.duration)){const Bt=Ul(r.spacing),co=(Bt.percent?Bt.percent*L.width/100:Bt.pixel)||0;return{keyframes:[{transform:`translate(${B(v.globalIndex-G.index)*(L.width+co)+G.rect.x-we.x+st.x}px, 0)`},{transform:"translate(0, 0)"}],duration:v.animation.duration,easing:v.animation.easing}}}),vt=pe(G=>{var we,st;const pn=G.offset||0,Bt=pn?i.swipe:(we=i.navigation)!==null&&we!==void 0?we:i.swipe,co=!pn&&!oi()?i.easing.navigation:i.easing.swipe;let{direction:Ua}=G;const Wa=(st=G.count)!==null&&st!==void 0?st:1;let hc=rt.ANIMATION,hn=Bt*Wa;if(!Ua){const fo=L==null?void 0:L.width,Fm=G.duration||0,gc=fo?Bt/fo*Math.abs(pn):Bt;Wa!==0?(Fm<gc?hn=hn/gc*Math.max(Fm,gc/5):fo&&(hn=Bt/fo*(fo-Math.abs(pn))),Ua=B(pn)>0?Lr:Rr):hn=Bt/2}let mc=0;Ua===Lr?fe(B(1))?mc=-Wa:(hc=rt.NONE,hn=Bt):Ua===Rr&&(fe(B(-1))?mc=Wa:(hc=rt.NONE,hn=Bt)),hn=Math.round(hn),j(()=>{be(0),g(rt.NONE)},hn),A.current&&Ve({rect:A.current.getBoundingClientRect(),index:v.globalIndex}),g(hc),O(bv,{type:"swipe",increment:mc,duration:hn,easing:co})});b.useEffect(()=>{var G,we;!((G=v.animation)===null||G===void 0)&&G.increment&&(!((we=v.animation)===null||we===void 0)&&we.duration)&&$(()=>w({type:"swipe",increment:0}),v.animation.duration)},[v.animation,w,$]);const lo=[_,fe,(L==null?void 0:L.width)||0,i.swipe,()=>g(rt.SWIPE),G=>be(G),(G,we)=>vt({offset:G,duration:we,count:1}),G=>vt({offset:G,count:0})],Ha=[()=>{c&&g(rt.PULL)},G=>ie(G),G=>Be(G),G=>Be(G,!0)];lL(o,...lo,u,c,...Ha,ee),cL(p,...lo);const uo=pe(()=>{o.focus&&M().querySelector(`.${ae(dm)} .${ae(Cv())}`)&&z()});b.useEffect(uo,[uo]);const Am=pe(()=>{var G;(G=a.view)===null||G===void 0||G.call(a,{index:v.currentIndex})});b.useEffect(Am,[v.globalIndex,Am]),b.useEffect(()=>vm(C(Lr,G=>vt({direction:Lr,...G})),C(Rr,G=>vt({direction:Rr,...G})),C(bv,G=>w(G))),[C,vt,w]);const Z2=b.useMemo(()=>({prev:Y,next:X,close:ee,focus:z,slideRect:L?LD(L,r.padding):{width:0,height:0},containerRect:L||{width:0,height:0},subscribeSensors:_,containerRef:D,setCarouselRef:P,toolbarWidth:f,setToolbarWidth:h}),[Y,X,ee,z,_,L,D,P,f,h,r.padding]);return b.useImperativeHandle(o.ref,()=>({prev:Y,next:X,close:ee,focus:z,getLightboxProps:H,getLightboxState:U}),[Y,X,ee,z,H,U]),b.createElement("div",{ref:F,className:kn(ae(Cv()),ae(fm)),style:{...p===rt.SWIPE?{[xt("swipe_offset")]:`${Math.round(x.current)}px`}:null,...p===rt.PULL?{[xt("pull_offset")]:`${Math.round(S.current)}px`,[xt("pull_opacity")]:`${E.current}`}:null,...o.touchAction!=="none"?{[xt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...k},L&&b.createElement(i2.Provider,{value:Z2},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const fL=Tr(jS,dL);function Or(e){return Va(IS,e)}function kv(e){return Va(pm,e)}function pL({slide:e,offset:t}){const n=b.useRef(null),{currentIndex:r,slides:i}=Pr(),{slideRect:o,focus:a}=Qn(),{render:l,carousel:{imageFit:s,imageProps:u},on:{click:c},styles:{slide:d},labels:m}=Xt(),{getOwnerDocument:f}=sc(),h=t!==0;b.useEffect(()=>{var w;h&&(!((w=n.current)===null||w===void 0)&&w.contains(f().activeElement))&&a()},[h,a,f]);const v=()=>{var w,p,g,x;let S=(w=l.slide)===null||w===void 0?void 0:w.call(l,{slide:e,offset:t,rect:o});return!S&&so(e)&&(S=b.createElement(Wl,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:u,onClick:h?void 0:()=>c==null?void 0:c({index:r})})),S?b.createElement(b.Fragment,null,(p=l.slideHeader)===null||p===void 0?void 0:p.call(l,{slide:e}),((g=l.slideContainer)!==null&&g!==void 0?g:({children:E})=>E)({slide:e,children:S}),(x=l.slideFooter)===null||x===void 0?void 0:x.call(l,{slide:e})):null};return b.createElement("div",{ref:n,className:kn(ae(kv()),!h&&ae(kv("current")),ae(fm)),...BD(h),style:d,role:"group","aria-roledescription":qi(m,"Slide"),"aria-label":DD(m,i,r+t)},v())}function hL(){const e=Xt().styles.slide;return b.createElement("div",{className:ae(pm),style:e})}function mL({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Pr(),{setCarouselRef:o}=Qn(),{autoPlaying:a,focusWithin:l}=XS(),s=Ul(e.spacing),u=Ul(e.padding),c=ND(e,n,1),d=[];if(WS(n))for(let m=r-c;m<=r+c;m+=1){const f=GS(n,m),h=i-r+m,v=e.finite&&(m<0||m>n.length-1);d.push(v?{key:h}:{key:[`${h}`,AD(f)].filter(Boolean).join("|"),offset:m-r,slide:f})}return b.createElement("div",{ref:o,className:kn(ae(Or()),d.length>0&&ae(Or("with_slides"))),style:{[`${xt(Or("slides_count"))}`]:d.length,[`${xt(Or("spacing_px"))}`]:s.pixel||0,[`${xt(Or("spacing_percent"))}`]:s.percent||0,[`${xt(Or("padding_px"))}`]:u.pixel||0,[`${xt(Or("padding_percent"))}`]:u.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":qi(t,"Carousel"),"aria-label":qi(t,"Photo gallery")},d.map(({key:m,slide:f,offset:h})=>f?b.createElement(pL,{key:m,slide:f,offset:h}):b.createElement(hL,{key:m})))}const gL=Tr(IS,mL);function o2(){const{carousel:e}=Xt(),{slides:t,currentIndex:n}=Pr(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function vL(e){var t;const n=Em(),{publish:r}=lc(),{animation:i}=Xt(),{prevDisabled:o,nextDisabled:a}=o2(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=Ev(()=>r(Lr),l),u=Ev(()=>r(Rr),l),c=pe(d=>{switch(d.key){case MD:r(Yi);break;case $D:(n?a:o)||(n?u:s)();break;case ID:(n?o:a)||(n?s:u)();break}});b.useEffect(()=>e(hm,c),[e,c])}function Tv({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return b.createElement(Sm,{label:e,icon:t,renderIcon:n,className:ae(`navigation_${r}`),disabled:o,onClick:i,style:a,...oL(Qn().focus,o)})}function yL({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=Qn(),{prevDisabled:s,nextDisabled:u}=o2();return vL(l),b.createElement(b.Fragment,null,e?e():b.createElement(Tv,{label:"Previous",action:Lr,icon:eL,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():b.createElement(Tv,{label:"Next",action:Rr,icon:tL,renderIcon:r,style:i.navigationNext,disabled:u,onClick:a}))}const xL=Tr(wD,yL),Pv=ae(TD),bL=ae(LS);function wL(e){return"style"in e}function Ov(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(ac(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function SL({noScroll:{disabled:e},children:t}){const n=Em(),{getOwnerDocument:r,getOwnerWindow:i}=sc();return b.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),u=Math.round(a.innerWidth-s.clientWidth);if(u>0){o.push(Ov(l,u,n));const c=l.getElementsByTagName("*");for(let d=0;d<c.length;d+=1){const m=c[d];wL(m)&&a.getComputedStyle(m).getPropertyValue("position")==="fixed"&&!m.classList.contains(bL)&&o.push(Ov(m,u,n))}}return l.classList.add(Pv),()=>{l.classList.remove(Pv),o.forEach(c=>c())}},[n,e,r,i]),b.createElement(b.Fragment,null,t)}const _L=Tr(SD,SL);function Mv(e){return Va(dm,e)}function $v(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function EL({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,u]=b.useState(!1),[c,d]=b.useState(!1),m=b.useRef([]),f=b.useRef(null),{setTimeout:h}=uc(),{subscribe:v}=lc(),p=_m()?0:t.fade;b.useEffect(()=>(u(!0),()=>{u(!1),d(!1)}),[]);const g=pe(()=>{m.current.forEach(k=>k()),m.current=[]}),x=pe(()=>{var k;d(!1),g(),(k=i.exiting)===null||k===void 0||k.call(i),h(()=>{var _;(_=i.exited)===null||_===void 0||_.call(i),a()},p)});b.useEffect(()=>v(Yi,x),[v,x]);const S=pe(k=>{var _,C,O;VD(k),d(!0),(_=i.entering)===null||_===void 0||_.call(i);const $=(O=(C=k.parentNode)===null||C===void 0?void 0:C.children)!==null&&O!==void 0?O:[];for(let j=0;j<$.length;j+=1){const I=$[j];["TEMPLATE","SCRIPT","STYLE"].indexOf(I.tagName)===-1&&I!==k&&(m.current.push($v(I,"inert","")),m.current.push($v(I,"aria-hidden","true")))}m.current.push(()=>{var j,I;(I=(j=f.current)===null||j===void 0?void 0:j.focus)===null||I===void 0||I.call(j)}),h(()=>{var j;(j=i.entered)===null||j===void 0||j.call(i)},p)}),E=b.useCallback(k=>{k?S(k):g()},[S,g]);return s?gu.createPortal(b.createElement(sL,{ref:E,className:kn(r,ae(Mv()),ae(LS),c&&ae(Mv("open"))),"aria-modal":!0,role:"dialog","aria-label":qi(l,"Lightbox"),style:{...t.fade!==bp.animation.fade?{[xt("fade_animation_duration")]:`${p}ms`}:null,...t.easing.fade!==bp.animation.easing.fade?{[xt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:k=>{f.current||(f.current=k.relatedTarget)}},e),o.root||document.body):null}const CL=Tr(dm,EL);function kL({children:e}){return b.createElement(b.Fragment,null,e)}const TL=Tr(_D,kL);function PL(e){return Va(DS,e)}function OL({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=Qn(),{setContainerRef:a,containerRect:l}=n2();Tn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():b.createElement(Sm,{key:Yi,label:"Close",icon:JD,renderIcon:n,onClick:i});return b.createElement("div",{ref:a,style:r.toolbar,className:ae(PL())},e==null?void 0:e.map(u=>u===Yi?s():u))}const ML=Tr(DS,OL);function a2(e,t){var n;return b.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>a2(r,t)))}function $L(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function IL({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:u,...c}){const{animation:d,carousel:m,render:f,toolbar:h,controller:v,noScroll:w,on:p,slides:g,index:x,plugins:S,...E}=bp,{config:k,augmentation:_}=HD([He(CL,[He(_L,[He(fL,[He(gL),He(ML),He(xL)])])])],l||S),C=_({animation:$L(d,t),carousel:{...m,...e},render:{...f,...n},toolbar:{...h,...r},controller:{...v,...i},noScroll:{...w,...o},on:{...p,...a},...E,...c});return C.open?b.createElement(YD,{...C},b.createElement(KD,{slides:s||g,index:ac(u||x)},b.createElement(ZD,null,b.createElement(GD,null,b.createElement(UD,null,a2(He(TL,k),C)))))):null}const jL={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function DL(e){return Math.min(Math.max(e,Number.EPSILON),1)}function s2(e){const{minZoom:t,...n}={...jL,...e};return{minZoom:DL(t),...n}}function LL(e,t,n,r){const i=b.useRef(void 0),o=b.useRef(void 0),{zoom:a}=Xt().animation,l=_m(),s=pe(()=>{var u,c,d;if((u=i.current)===null||u===void 0||u.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(d=(c=r.current).animate)===null||d===void 0?void 0:d.call(c,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(m){console.error(m)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Tn(s,[e,t,n,s]),b.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function RL(e,t){const{on:n}=Xt(),r=pe(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});b.useEffect(r,[e,r])}function cc(){const{zoom:e}=Xt();return s2(e)}function AL(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Pr(),{imageFit:l}=Xt().carousel,{maxZoomPixelRatio:s}=cc();if(e&&a){const c={...a,...t};if(so(c)){const d=bm(c,l),m=Math.max(...(((n=c.srcSet)===null||n===void 0?void 0:n.map(h=>h.width))||[]).concat(c.width?[c.width]:[])),f=Math.max(...(((r=c.srcSet)===null||r===void 0?void 0:r.map(h=>h.height))||[]).concat(c.height?[c.height]:[]));m>0&&f>0&&e.width>0&&e.height>0&&(o=d?{width:Math.round(Math.min(m,e.width/e.height*f)),height:Math.round(Math.min(f,e.height/e.width*m))}:{width:m,height:f},o={width:o.width*s,height:o.height*s},i=d?{width:Math.min(e.width,o.width,m),height:Math.min(e.height,o.height,f)}:{width:Math.round(Math.min(e.width,e.height/f*m,m)),height:Math.round(Math.min(e.height,e.width/m*f,f))})}}const u=i.width?Math.max(xm(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:u}}function Iv(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function jv(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function FL(e,t,n,r,i,o,a,l,s){const u=b.useRef([]),c=b.useRef(0),d=b.useRef(void 0),{globalIndex:m}=Pr(),{getOwnerWindow:f}=sc(),{containerRef:h,subscribeSensors:v}=Qn(),{keyboardMoveDistance:w,zoomInMultiplier:p,wheelZoomDistanceFactor:g,scrollToZoom:x,doubleTapDelay:S,doubleClickDelay:E,doubleClickMaxStops:k,pinchZoomDistanceFactor:_,pinchZoomV4:C}=cc(),O=b.useCallback(P=>{if(h.current){const{pageX:M,pageY:N}=P,{scrollX:B,scrollY:z}=f(),{left:H,top:U,width:Y,height:X}=h.current.getBoundingClientRect();return[M-H-B-Y/2,N-U-z-X/2]}return[]},[h,f]),$=pe(P=>{const{key:M,metaKey:N,ctrlKey:B}=P,z=N||B,H=()=>{P.preventDefault(),P.stopPropagation()};if(e>1){const U=(Y,X)=>{H(),l(Y,X)};M==="ArrowDown"?U(0,w):M==="ArrowUp"?U(0,-w):M==="ArrowLeft"?U(-w,0):M==="ArrowRight"&&U(w,0)}M==="+"||z&&M==="="?(H(),i()):M==="-"||z&&M==="_"?(H(),o()):z&&M==="0"&&(H(),a(1))}),j=pe(P=>{if((P.ctrlKey||x)&&Math.abs(P.deltaY)>Math.abs(P.deltaX)){P.stopPropagation(),a(jv(e,-P.deltaY,g),!0,...O(P));return}e>1&&(P.stopPropagation(),x||l(P.deltaX,P.deltaY))}),I=b.useCallback(P=>{const M=u.current;M.splice(0,M.length,...M.filter(N=>N.pointerId!==P.pointerId))},[]),D=b.useCallback(P=>{I(P),P.persist(),u.current.push(P)},[I]),R=pe(P=>{var M;const N=u.current;if(P.pointerType==="mouse"&&P.buttons>1||!(!((M=s==null?void 0:s.current)===null||M===void 0)&&M.contains(P.target)))return;e>1&&P.stopPropagation();const{timeStamp:B}=P;if(N.length===0&&B-c.current<(P.pointerType==="touch"?S:E)){c.current=0;const z=e>=1?e!==n?e*Math.max(n**(1/k),p):1:e!==t?e/Math.max(t**(-1/k),p):1;a(z,!1,...O(P))}else c.current=B;if(D(P),N.length===2){const z=Iv(N[0],N[1]);d.current={previousDistance:z,initialDistance:Math.max(z,1),initialZoom:e}}}),L=pe(P=>{const M=u.current,N=M.find(B=>B.pointerId===P.pointerId);if(M.length===2&&d.current){P.stopPropagation(),D(P);const B=Iv(M[0],M[1]),z=C?d.current.initialZoom/d.current.initialDistance*B:jv(e,B-d.current.previousDistance,_);a(z,!0,...M.map(H=>O(H)).reduce((H,U)=>U.map((Y,X)=>H[X]+Y/2))),d.current.previousDistance=B;return}e>1&&(P.stopPropagation(),N&&(M.length===1&&l((N.clientX-P.clientX)/e,(N.clientY-P.clientY)/e),D(P)))}),F=b.useCallback(P=>{const M=u.current;M.length===2&&M.find(N=>N.pointerId===P.pointerId)&&(d.current=void 0),I(P)},[I]),A=b.useCallback(()=>{const P=u.current;P.splice(0,P.length),c.current=0,d.current=void 0},[]);r2(v,R,L,F,r),b.useEffect(A,[m,A]),b.useEffect(()=>r?()=>{}:vm(A,v(hm,$),v(mm,j)),[r,v,A,$,j])}function NL(e,t,n){const[r,i]=b.useState(1),[o,a]=b.useState(0),[l,s]=b.useState(0),u=LL(r,o,l,n),{currentSlide:c,globalIndex:d}=Pr(),{containerRect:m,slideRect:f}=Qn(),{minZoom:h,zoomInMultiplier:v}=cc(),w=c&&so(c)?c.src:void 0,p=!w||!(n!=null&&n.current);Tn(()=>{i(1),a(0),s(0)},[d,w]);const g=b.useCallback((_,C,O)=>{const $=O||r,j=o-(_||0),I=l-(C||0),D=(e.width*$-f.width)/2/$,R=(e.height*$-f.height)/2/$;a(Math.min(Math.abs(j),Math.max(D,0))*Math.sign(j)),s(Math.min(Math.abs(I),Math.max(R,0))*Math.sign(I))},[r,o,l,f,e.width,e.height]),x=b.useCallback((_,C,O,$)=>{const j=xm(_+.01<t?_-.01>h?_:h:t,5);C||u(),g(O?O*(1/r-1/j):0,$?$*(1/r-1/j):0,j),i(j)},[r,h,t,g,u]),S=pe(()=>{r>1&&(r>t&&x(t,!0),g())});Tn(S,[m.width,m.height,S]);const E=b.useCallback(()=>{const _=r*v;x(r<1&&_>1?1:_)},[r,v,x]),k=b.useCallback(()=>{const _=r/v;x(r>1&&_<1?1:_)},[r,v,x]);return{zoom:r,offsetX:o,offsetY:l,disabled:p,changeOffsets:g,changeZoom:x,zoomIn:E,zoomOut:k}}const l2=b.createContext(null),Cm=Zn("useZoom","ZoomControllerContext",l2);function zL({children:e}){const[t,n]=b.useState(),{slideRect:r}=Qn(),{ref:i,minZoom:o}=cc(),{imageRect:a,maxZoom:l}=AL(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:u,offsetY:c,disabled:d,changeZoom:m,changeOffsets:f,zoomIn:h,zoomOut:v}=NL(a,l,t==null?void 0:t.zoomWrapperRef);RL(s,d),FL(s,o,l,d,h,v,m,f,t==null?void 0:t.zoomWrapperRef);const w=b.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:u,offsetY:c,disabled:d,zoomIn:h,zoomOut:v,changeZoom:m}),[s,o,l,u,c,d,h,v,m]);b.useImperativeHandle(i,()=>w,[w]);const p=b.useMemo(()=>({...w,setZoomWrapper:n}),[w,n]);return b.createElement(l2.Provider,{value:p},e)}const BL=ii("ZoomIn",b.createElement(b.Fragment,null,b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),VL=ii("ZoomOut",b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),Dv=b.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=b.useRef(!1),o=b.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:u,zoomOut:c,disabled:d}=Cm(),{render:m}=Xt(),f=d||(t?a>=s:a<=l);return b.useEffect(()=>{f&&i.current&&o.current&&n(),f||(i.current=!0)},[f,n]),b.createElement(Sm,{ref:r,disabled:f,label:t?"Zoom in":"Zoom out",icon:t?BL:VL,renderIcon:t?m.iconZoomIn:m.iconZoomOut,onClick:t?u:c,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function HL(){const e=b.useRef(null),t=b.useRef(null),{focus:n}=Qn(),r=b.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=b.useCallback(()=>r(e),[r]),o=b.useCallback(()=>r(t),[r]);return b.createElement(b.Fragment,null,b.createElement(Dv,{zoomIn:!0,ref:e,onLoseFocus:o}),b.createElement(Dv,{ref:t,onLoseFocus:i}))}function UL(){const{render:e}=Xt(),t=Cm();return e.buttonZoom?b.createElement(b.Fragment,null,e.buttonZoom(t)):b.createElement(HL,null)}function WL(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function GL({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(HS)}}function YL(e){var t,n;const[{current:r,preload:i},o]=b.useReducer(GL,{}),{slide:a,rect:l,imageFit:s,render:u,interactive:c}=e,d=a.srcSet.sort((E,k)=>E.width-k.width),m=(t=a.width)!==null&&t!==void 0?t:d[d.length-1].width,f=(n=a.height)!==null&&n!==void 0?n:d[d.length-1].height,h=bm(a,s),v=Math.max(...d.map(E=>E.width)),w=Math.min((h?Math.max:Math.min)(l.width,m*(l.height/f)),v),p=RD(),g=pe(()=>{var E;const k=(E=d.find(_=>_.width>=w*p))!==null&&E!==void 0?E:d[d.length-1];(!r||d.findIndex(_=>_.src===r)<d.findIndex(_=>_===k))&&o({type:"fetch",source:k.src})});Tn(g,[l.width,l.height,p,g]);const x=pe(E=>o({type:"done",source:E})),S={WebkitTransform:c?"initial":"translateZ(0)"};return h||Object.assign(S,l.width/l.height<m/f?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),b.createElement(b.Fragment,null,i&&i!==r&&b.createElement(Wl,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...S},onLoad:()=>x(i),render:{...u,iconLoading:()=>null,iconError:()=>null}}),r&&b.createElement(Wl,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:S}))}function qL({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=b.useState(),l=b.useRef(null),{zoom:s,maxZoom:u,offsetX:c,offsetY:d,setZoomWrapper:m}=Cm(),f=s>1,{carousel:h,on:v}=Xt(),{currentIndex:w}=Pr();Tn(()=>n===0?(m({zoomWrapperRef:l,imageDimensions:o}),()=>m(void 0)):()=>{},[n,o,m]);let p=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:u});if(!p&&so(t)){const g={slide:t,offset:n,rect:r,render:e,imageFit:h.imageFit,imageProps:h.imageProps,onClick:n===0?()=>{var x;return(x=v.click)===null||x===void 0?void 0:x.call(v,{index:w})}:void 0};p=WL(t)?b.createElement(YL,{...g,slide:t,interactive:f,rect:n===0?{width:r.width*s,height:r.height*s}:r}):b.createElement(Wl,{onLoad:x=>a({width:x.naturalWidth,height:x.naturalHeight}),...g})}return p?b.createElement("div",{ref:l,className:kn(ae(kD),ae(fm),ae(RS),f&&ae(PD)),style:n===0?{transform:`scale(${s}) translateX(${c}px) translateY(${d}px)`}:void 0},p):null}const XL=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=s2(n);return{zoom:l,toolbar:FD(r,xv,b.createElement(UL,null)),render:{...i,slide:s=>{var u;return so(s.slide)?b.createElement(qL,{render:i,...s}):(u=i.slide)===null||u===void 0?void 0:u.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Tr(xv,zL))};var u2={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(te,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",s="hour",u="day",c="week",d="month",m="quarter",f="year",h="date",v="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(R){var L=["th","st","nd","rd"],F=R%100;return"["+R+(L[(F-20)%10]||L[F]||L[0])+"]"}},x=function(R,L,F){var A=String(R);return!A||A.length>=L?R:""+Array(L+1-A.length).join(F)+R},S={s:x,z:function(R){var L=-R.utcOffset(),F=Math.abs(L),A=Math.floor(F/60),P=F%60;return(L<=0?"+":"-")+x(A,2,"0")+":"+x(P,2,"0")},m:function R(L,F){if(L.date()<F.date())return-R(F,L);var A=12*(F.year()-L.year())+(F.month()-L.month()),P=L.clone().add(A,d),M=F-P<0,N=L.clone().add(A+(M?-1:1),d);return+(-(A+(F-P)/(M?P-N:N-P))||0)},a:function(R){return R<0?Math.ceil(R)||0:Math.floor(R)},p:function(R){return{M:d,y:f,w:c,d:u,D:h,h:s,m:l,s:a,ms:o,Q:m}[R]||String(R||"").toLowerCase().replace(/s$/,"")},u:function(R){return R===void 0}},E="en",k={};k[E]=g;var _="$isDayjsObject",C=function(R){return R instanceof I||!(!R||!R[_])},O=function R(L,F,A){var P;if(!L)return E;if(typeof L=="string"){var M=L.toLowerCase();k[M]&&(P=M),F&&(k[M]=F,P=M);var N=L.split("-");if(!P&&N.length>1)return R(N[0])}else{var B=L.name;k[B]=L,P=B}return!A&&P&&(E=P),P||!A&&E},$=function(R,L){if(C(R))return R.clone();var F=typeof L=="object"?L:{};return F.date=R,F.args=arguments,new I(F)},j=S;j.l=O,j.i=C,j.w=function(R,L){return $(R,{locale:L.$L,utc:L.$u,x:L.$x,$offset:L.$offset})};var I=function(){function R(F){this.$L=O(F.locale,null,!0),this.parse(F),this.$x=this.$x||F.x||{},this[_]=!0}var L=R.prototype;return L.parse=function(F){this.$d=function(A){var P=A.date,M=A.utc;if(P===null)return new Date(NaN);if(j.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var N=P.match(w);if(N){var B=N[2]-1||0,z=(N[7]||"0").substring(0,3);return M?new Date(Date.UTC(N[1],B,N[3]||1,N[4]||0,N[5]||0,N[6]||0,z)):new Date(N[1],B,N[3]||1,N[4]||0,N[5]||0,N[6]||0,z)}}return new Date(P)}(F),this.init()},L.init=function(){var F=this.$d;this.$y=F.getFullYear(),this.$M=F.getMonth(),this.$D=F.getDate(),this.$W=F.getDay(),this.$H=F.getHours(),this.$m=F.getMinutes(),this.$s=F.getSeconds(),this.$ms=F.getMilliseconds()},L.$utils=function(){return j},L.isValid=function(){return this.$d.toString()!==v},L.isSame=function(F,A){var P=$(F);return this.startOf(A)<=P&&P<=this.endOf(A)},L.isAfter=function(F,A){return $(F)<this.startOf(A)},L.isBefore=function(F,A){return this.endOf(A)<$(F)},L.$g=function(F,A,P){return j.u(F)?this[A]:this.set(P,F)},L.unix=function(){return Math.floor(this.valueOf()/1e3)},L.valueOf=function(){return this.$d.getTime()},L.startOf=function(F,A){var P=this,M=!!j.u(A)||A,N=j.p(F),B=function(be,ie){var $e=j.w(P.$u?Date.UTC(P.$y,ie,be):new Date(P.$y,ie,be),P);return M?$e:$e.endOf(u)},z=function(be,ie){return j.w(P.toDate()[be].apply(P.toDate("s"),(M?[0,0,0,0]:[23,59,59,999]).slice(ie)),P)},H=this.$W,U=this.$M,Y=this.$D,X="set"+(this.$u?"UTC":"");switch(N){case f:return M?B(1,0):B(31,11);case d:return M?B(1,U):B(0,U+1);case c:var ee=this.$locale().weekStart||0,fe=(H<ee?H+7:H)-ee;return B(M?Y-fe:Y+(6-fe),U);case u:case h:return z(X+"Hours",0);case s:return z(X+"Minutes",1);case l:return z(X+"Seconds",2);case a:return z(X+"Milliseconds",3);default:return this.clone()}},L.endOf=function(F){return this.startOf(F,!1)},L.$set=function(F,A){var P,M=j.p(F),N="set"+(this.$u?"UTC":""),B=(P={},P[u]=N+"Date",P[h]=N+"Date",P[d]=N+"Month",P[f]=N+"FullYear",P[s]=N+"Hours",P[l]=N+"Minutes",P[a]=N+"Seconds",P[o]=N+"Milliseconds",P)[M],z=M===u?this.$D+(A-this.$W):A;if(M===d||M===f){var H=this.clone().set(h,1);H.$d[B](z),H.init(),this.$d=H.set(h,Math.min(this.$D,H.daysInMonth())).$d}else B&&this.$d[B](z);return this.init(),this},L.set=function(F,A){return this.clone().$set(F,A)},L.get=function(F){return this[j.p(F)]()},L.add=function(F,A){var P,M=this;F=Number(F);var N=j.p(A),B=function(U){var Y=$(M);return j.w(Y.date(Y.date()+Math.round(U*F)),M)};if(N===d)return this.set(d,this.$M+F);if(N===f)return this.set(f,this.$y+F);if(N===u)return B(1);if(N===c)return B(7);var z=(P={},P[l]=r,P[s]=i,P[a]=n,P)[N]||1,H=this.$d.getTime()+F*z;return j.w(H,this)},L.subtract=function(F,A){return this.add(-1*F,A)},L.format=function(F){var A=this,P=this.$locale();if(!this.isValid())return P.invalidDate||v;var M=F||"YYYY-MM-DDTHH:mm:ssZ",N=j.z(this),B=this.$H,z=this.$m,H=this.$M,U=P.weekdays,Y=P.months,X=P.meridiem,ee=function(ie,$e,Be,Ve){return ie&&(ie[$e]||ie(A,M))||Be[$e].slice(0,Ve)},fe=function(ie){return j.s(B%12||12,ie,"0")},be=X||function(ie,$e,Be){var Ve=ie<12?"AM":"PM";return Be?Ve.toLowerCase():Ve};return M.replace(p,function(ie,$e){return $e||function(Be){switch(Be){case"YY":return String(A.$y).slice(-2);case"YYYY":return j.s(A.$y,4,"0");case"M":return H+1;case"MM":return j.s(H+1,2,"0");case"MMM":return ee(P.monthsShort,H,Y,3);case"MMMM":return ee(Y,H);case"D":return A.$D;case"DD":return j.s(A.$D,2,"0");case"d":return String(A.$W);case"dd":return ee(P.weekdaysMin,A.$W,U,2);case"ddd":return ee(P.weekdaysShort,A.$W,U,3);case"dddd":return U[A.$W];case"H":return String(B);case"HH":return j.s(B,2,"0");case"h":return fe(1);case"hh":return fe(2);case"a":return be(B,z,!0);case"A":return be(B,z,!1);case"m":return String(z);case"mm":return j.s(z,2,"0");case"s":return String(A.$s);case"ss":return j.s(A.$s,2,"0");case"SSS":return j.s(A.$ms,3,"0");case"Z":return N}return null}(ie)||N.replace(":","")})},L.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},L.diff=function(F,A,P){var M,N=this,B=j.p(A),z=$(F),H=(z.utcOffset()-this.utcOffset())*r,U=this-z,Y=function(){return j.m(N,z)};switch(B){case f:M=Y()/12;break;case d:M=Y();break;case m:M=Y()/3;break;case c:M=(U-H)/6048e5;break;case u:M=(U-H)/864e5;break;case s:M=U/i;break;case l:M=U/r;break;case a:M=U/n;break;default:M=U}return P?M:j.a(M)},L.daysInMonth=function(){return this.endOf(d).$D},L.$locale=function(){return k[this.$L]},L.locale=function(F,A){if(!F)return this.$L;var P=this.clone(),M=O(F,A,!0);return M&&(P.$L=M),P},L.clone=function(){return j.w(this.$d,this)},L.toDate=function(){return new Date(this.valueOf())},L.toJSON=function(){return this.isValid()?this.toISOString():null},L.toISOString=function(){return this.$d.toISOString()},L.toString=function(){return this.$d.toUTCString()},R}(),D=I.prototype;return $.prototype=D,[["$ms",o],["$s",a],["$m",l],["$H",s],["$W",u],["$M",d],["$y",f],["$D",h]].forEach(function(R){D[R[1]]=function(L){return this.$g(L,R[0],R[1])}}),$.extend=function(R,L){return R.$i||(R(L,I,$),R.$i=!0),$},$.locale=O,$.isDayjs=C,$.unix=function(R){return $(1e3*R)},$.en=k[E],$.Ls=k,$.p={},$})})(u2);var KL=u2.exports;const Lv=$p(KL),ZL=()=>{var C;const{id:e}=F1(),[t,n]=b.useState([]),[r,i]=b.useState(1),[o,a]=b.useState("description"),[l,s]=b.useState(null),[u,c]=b.useState(!1),[d,m]=b.useState(0);console.log("products",t);const[f,h]=b.useState(!0),v=t.find(O=>O.id===Number(e)),w=v?Lv().diff(Lv(v.createdAt),"day")<7:!1;b.useEffect(()=>{(async()=>{try{h(!0);const j=await(await fetch(`https://backenddidiv-production.up.railway.app/api/products?filters[id][$eq]=${e}&populate=*`)).json();n(j.data)}catch($){console.error("Error fetching products:",$)}finally{h(!1)}})()},[e]),console.log(v),b.useEffect(()=>{var O,$;v&&v.images&&s(($=(O=v.images)==null?void 0:O[0])==null?void 0:$.url)},[v]);const p=((v==null?void 0:v.images)??[]).map(O=>({src:O.url})),g=()=>{const O=v.images.findIndex($=>$.url===l);m(O>=0?O:0),c(!0)},x=ri(),E=Dt(O=>O.favorites.items).some(O=>O.id===(v==null?void 0:v.id)),k=()=>{x(Fa({...v,quantity:r})),J.success(`${v.name} додано в кошик!`)},_=(O,$)=>{$.stopPropagation(),x(Ba(O)),E?J.warning(`${O.name} видалено з обраного`):J.info(`${O.name} додано в обране`)};return f?y.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:y.jsx(Lu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):v?y.jsxs(vv,{children:[" ",y.jsx(oo,{autoClose:1500}),y.jsxs(Xj,{children:[y.jsx(Me,{to:"/",children:"Головна"})," / ",y.jsx(Me,{to:"/catalog",children:"Каталог"})," /"," ",v.name]}),y.jsxs(Kj,{children:[y.jsxs(Zj,{children:[y.jsx(Qj,{src:l,alt:v.name,onClick:g}),y.jsx(Jj,{children:(v.images??[]).map(O=>{const $=O.url;return y.jsx(eD,{src:$,onClick:()=>s($),style:{cursor:"pointer",opacity:l===$?1:.4}},O.id)})})]}),y.jsx(IL,{open:u,close:()=>c(!1),index:d,slides:p,controller:{closeOnBackdropClick:!0},on:{view:({index:O})=>{var $,j;m(O),(j=($=v==null?void 0:v.images)==null?void 0:$[O])!=null&&j.url&&s(v.images[O].url)}},plugins:[XL],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),y.jsxs(tD,{children:[y.jsx(nD,{children:v.name}),y.jsx(rD,{children:w&&y.jsx(iD,{children:"● Новий товар"})}),y.jsxs(oD,{children:[y.jsx(aD,{children:y.jsxs(sD,{children:[v.price.toLocaleString()," грн"]})}),y.jsxs(lD,{children:[y.jsxs(uD,{children:[y.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),y.jsx("span",{children:r}),y.jsxs(bD,{$active:r>=v.stock,children:[y.jsx("button",{onClick:()=>i(Math.min(v.stock,r+1)),disabled:r>=v.stock,children:"+"}),y.jsxs($S,{children:["Максимум: ",v.stock]})]})]}),y.jsxs(cD,{onClick:k,children:[" ",y.jsx(ja,{size:25}),y.jsx("span",{children:"В КОШИК"})]}),y.jsxs(yD,{$active:E,onClick:O=>_(v,O),children:[y.jsxs(xD,{$active:E,children:[" ",y.jsx("use",{href:`${dn}#icon-heart`})]}),y.jsx("span",{children:"В ОБРАНЕ"})]})]})]}),y.jsxs(pD,{children:[y.jsxs("p",{children:[y.jsx("strong",{children:"Ваше місто:"})," Київ"]}),y.jsx("p",{children:"🚚 Доставка по Україні (Розрахувати вартість)"})]})]})]}),y.jsxs(hD,{children:[y.jsxs(mD,{children:[y.jsx(yv,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),y.jsx(yv,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"})]}),y.jsxs(gD,{children:[o==="description"&&y.jsx(vD,{children:v.description}),o==="attributes"&&y.jsx(dD,{children:(C=v.attributes)!=null&&C.length?v.attributes.map(O=>y.jsxs(fD,{children:[y.jsx("span",{children:O.label}),y.jsx("b",{children:O.value})]},O.id)):y.jsx("p",{children:"Характеристики відсутні"})})]})]})]}):y.jsx(vv,{children:"Товар не знайдено"})},QL=T.div`
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

  
`,JL=T.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,eR=T.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,tR=T.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,nR=T.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,rR=T.div`
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
`,iR=T.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,oR=T.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,aR=T.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,sR=T.div`

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
`;const lR=T.div`
  text-align: center;
  width: 100px;
 
`,uR=T.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,cR=T.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,dR=T.div`

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
`,fR=T.div`
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
`,pR=T(Me)`
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
`,hR=T.button`
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
`;const mR=T.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,gR=T.div`
   
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
`;const vR=T.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,yR=T.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,xR=T.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,bR=T.button`
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
`,wR=()=>y.jsxs(y.Fragment,{children:[y.jsx(mR,{children:"Головна / Кошик"}),y.jsxs(gR,{children:[y.jsx(vR,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),y.jsx(yR,{children:"Ваш кошик порожній"}),y.jsx(xR,{children:"Ви ще не додали жодного товару в кошик"}),y.jsx(bR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]}),SR=T.div`
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
`,_R=({item:e})=>{const t=ri();return y.jsxs(SR,{children:[y.jsx("button",{onClick:()=>t(oI(e.id)),children:"-"}),y.jsx("span",{children:e.quantity}),y.jsx("button",{onClick:()=>t(iI({id:e.id,stock:e.stock})),disabled:e.quantity>=e.stock,children:"+"})]})},ER=()=>{const e=ri(),[t,n]=b.useState([]),r=Dt(m=>m.cart.items),o=Dt(m=>m.cart.items).reduce((m,f)=>m+f.quantity,0),a=r.reduce((m,f)=>m+f.price*(f.quantity||1),0),l=Dt(m=>m.favorites.items),s=r.length===0,u=(m,f)=>{f.stopPropagation(),console.log(m);const h=l.some(v=>v.id===m.id);e(Ba(m)),h?J.warning(`${m.name} видалено з обраного`):J.info(`${m.name} додано в обране`)},c=m=>{n(f=>[...f,m.id]),setTimeout(()=>{e(tI(m)),n(f=>f.filter(h=>h!==m.id))},300)},d=()=>{e(nI())};return y.jsx(y.Fragment,{children:s?y.jsx(wR,{}):y.jsxs(QL,{children:[y.jsx(oo,{autoClose:1500}),y.jsxs(JL,{children:[" ",y.jsx(Me,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",y.jsx(Me,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),y.jsx(eR,{children:"Кошик"}),y.jsxs(tR,{children:[y.jsx(nR,{children:r.map((m,f)=>{var v,w;console.log(m);const h=l.some(p=>p.id===m.id);return y.jsxs(rR,{className:t.includes(m.id)?"removing":"",children:[y.jsx(iR,{src:((w=(v=m.images)==null?void 0:v[0])==null?void 0:w.url)||"/nofoto.png",alt:m.name,onError:p=>{p.currentTarget.onerror=null,p.currentTarget.src=_a}}),y.jsx(oR,{children:y.jsx("h3",{children:m.name})}),y.jsxs(aR,{children:[y.jsx(_R,{item:{...m,quantity:m.quantity||1}}),y.jsx(lR,{children:y.jsxs("div",{className:"current-price",children:[(m.price*(m.quantity||1)).toLocaleString()," грн"]})})]}),y.jsxs(sR,{children:[y.jsx(cR,{onClick:p=>u(m,p),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:y.jsx(zh,{size:22,fill:h?"#ff4d4f":"none",color:h?"#ff4d4f":"#999"})}),y.jsx(uR,{onClick:()=>c(m),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:y.jsx(Sb,{size:22})})]})]},`${m.id}-${f}`)})}),y.jsxs(dR,{children:[y.jsxs(fR,{children:[y.jsx("span",{children:"Всього в обраному:"}),y.jsxs("strong",{children:[o," шт."]}),y.jsx("span",{children:"На суму:"}),y.jsxs("strong",{children:[a," грн"]})]}),y.jsx(pR,{to:"/checkout",children:"Оформити замовлення"}),y.jsx(hR,{onClick:d,children:"Oчистити кошик"})]})]})]})})},CR=T.div`
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
`,kR=T.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,TR=T.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,PR=T.div`

   display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,OR=T.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,MR=T.div`
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
`;const $R=T.img`
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
    
`,jR=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
   @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,DR=T.p`
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  width: 100px;
  text-align: center;
`,LR=T.div`
  display: flex;
  gap: 16px;
`,Rv=T.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  padding: 8px;
  
`,RR=T.div`
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
`,AR=T.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,FR=T.button`
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
`,NR=T.button`
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
`,zR=T.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,BR=T.div`
   
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
`;const VR=T.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;T.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const HR=T.p`
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
`,WR=()=>y.jsxs(y.Fragment,{children:[y.jsx(zR,{children:"Головна / Обране"}),y.jsxs(BR,{children:[y.jsx(VR,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),y.jsx(HR,{children:"Ви ще не додали жодного товару в обране"}),y.jsx(UR,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),GR=()=>{const e=ri(),t=Dt(c=>c.favorites.items),[n,r]=b.useState([]),i=Dt(c=>c.cart.items),o=()=>{e(rI(t)),J.success("Товари додано в кошик!")};console.log(t);const a=t.reduce((c,d)=>c+d.price*(d.quantity||1),0),l=(c,d)=>{d.stopPropagation();const m=t.some(f=>f.id===c.id);r(f=>[...f,c.id]),setTimeout(()=>{e(Ba(c)),r(f=>f.filter(h=>h!==c.id))},300),m?J.warning(`${c.name} видалено з обраного`):J.info(`${c.name} додано в обране`)},s=()=>{e(Wj())},u=t.length===0;return y.jsx(y.Fragment,{children:u?y.jsx(WR,{}):y.jsxs(CR,{children:[y.jsx(oo,{autoClose:1500}),y.jsxs(kR,{children:[" ",y.jsx(Me,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",y.jsx(Me,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),y.jsx(TR,{children:"Обране"}),y.jsxs(PR,{children:[y.jsx(OR,{children:t.map(c=>{var v,w;const d=i.find(p=>p.id===c.id),f=(d?d.quantity:0)>=c.stock,h=p=>{if(f){J.error(`Вибачте, доступно лише ${p.stock} шт.`);return}e(Fa(p)),J.success(`${p.name} додано в кошик!`)};return y.jsxs(MR,{className:n.includes(c.id)?"removing":"",children:[y.jsx($R,{src:((w=(v=c.images)==null?void 0:v[0])==null?void 0:w.url)||"/nofoto.png",alt:c.name,onError:p=>{p.currentTarget.onerror=null,p.currentTarget.src="/nofoto.png"}}),y.jsx(IR,{children:c.name}),y.jsxs(jR,{children:[y.jsxs(DR,{children:[c.price," грн"]}),y.jsxs(LR,{children:[y.jsx(Rv,{onClick:()=>h(c),children:y.jsx(ja,{size:30})}),y.jsx(Rv,{onClick:p=>l(c,p),children:y.jsx(Sb,{size:30})})]})]})]},c.id)})}),y.jsxs(RR,{children:[y.jsxs(AR,{children:[y.jsx("span",{children:"Всього в обраному:"}),y.jsxs("strong",{children:[t.length," шт."]}),y.jsx("span",{children:"На суму:"}),y.jsxs("strong",{children:[a," грн"]})]}),y.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),y.jsx(FR,{onClick:()=>o(),children:"Додати все до кошика"}),y.jsx(NR,{onClick:s,children:"Очистити обрані"})]})]})]})})},YR=T.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,qR=T.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,XR=T.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,KR=T.h1`
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
`;const ZR=({title:e,children:t,breadcrumbPath:n})=>y.jsxs(YR,{children:[y.jsxs(qR,{children:["Головна / ",n]}),y.jsxs(XR,{children:[y.jsx(KR,{children:e}),t]})]}),Av=T.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,Fv=T.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,Nv=T.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,zv=T.ul`
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
`,QR=()=>y.jsxs(ZR,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[y.jsxs(Av,{children:[y.jsx(Fv,{children:"Способи доставки"}),y.jsx(Nv,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),y.jsxs(zv,{children:[y.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),y.jsx("li",{children:"Самовивіз з нашого магазину"}),y.jsx("li",{children:"Укрпошта"})]})]}),y.jsxs(Av,{children:[y.jsx(Fv,{children:"Варіанти оплати"}),y.jsx(Nv,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),y.jsxs(zv,{children:[y.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),y.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),y.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function Jr(e){"@babel/helpers - typeof";return Jr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jr(e)}function JR(e,t){if(Jr(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Jr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function c2(e){var t=JR(e,"string");return Jr(t)==="symbol"?t:String(t)}function Do(e,t,n){return t=c2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bv(Object(n),!0).forEach(function(r){Do(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function eA(e){if(Array.isArray(e))return e}function tA(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(c){u=!0,i=c}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Sp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d2(e,t){if(e){if(typeof e=="string")return Sp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sp(e,t)}}function nA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bn(e,t){return eA(e)||tA(e,t)||d2(e,t)||nA()}function rA(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jn(e,t){if(e==null)return{};var n=rA(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var iA=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function oA(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,c=e.onInputChange,d=e.onMenuClose,m=e.onMenuOpen,f=e.value,h=Jn(e,iA),v=b.useState(l!==void 0?l:n),w=Bn(v,2),p=w[0],g=w[1],x=b.useState(s!==void 0?s:i),S=Bn(x,2),E=S[0],k=S[1],_=b.useState(f!==void 0?f:a),C=Bn(_,2),O=C[0],$=C[1],j=b.useCallback(function(P,M){typeof u=="function"&&u(P,M),$(P)},[u]),I=b.useCallback(function(P,M){var N;typeof c=="function"&&(N=c(P,M)),g(N!==void 0?N:P)},[c]),D=b.useCallback(function(){typeof m=="function"&&m(),k(!0)},[m]),R=b.useCallback(function(){typeof d=="function"&&d(),k(!1)},[d]),L=l!==void 0?l:p,F=s!==void 0?s:E,A=f!==void 0?f:O;return Z(Z({},h),{},{inputValue:L,menuIsOpen:F,onChange:j,onInputChange:I,onMenuClose:R,onMenuOpen:D,value:A})}function aA(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Vv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c2(r.key),r)}}function sA(e,t,n){return t&&Vv(e.prototype,t),n&&Vv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _p(e,t){return _p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},_p(e,t)}function lA(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_p(e,t)}function Gl(e){return Gl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Gl(e)}function uA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function cA(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dA(e,t){if(t&&(Jr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return cA(e)}function fA(e){var t=uA();return function(){var r=Gl(e),i;if(t){var o=Gl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return dA(this,i)}}function pA(e){if(Array.isArray(e))return Sp(e)}function hA(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function mA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function km(e){return pA(e)||hA(e)||d2(e)||mA()}function gA(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const vA=Math.min,yA=Math.max,Yl=Math.round,xs=Math.floor,ql=e=>({x:e,y:e});function xA(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function dc(){return typeof window<"u"}function f2(e){return h2(e)?(e.nodeName||"").toLowerCase():"#document"}function un(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function p2(e){var t;return(t=(h2(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function h2(e){return dc()?e instanceof Node||e instanceof un(e).Node:!1}function Ep(e){return dc()?e instanceof Element||e instanceof un(e).Element:!1}function Tm(e){return dc()?e instanceof HTMLElement||e instanceof un(e).HTMLElement:!1}function Hv(e){return!dc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof un(e).ShadowRoot}function m2(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Pm(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let Cd;function bA(){return Cd==null&&(Cd=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Cd}function wA(e){return/^(html|body|#document)$/.test(f2(e))}function Pm(e){return un(e).getComputedStyle(e)}function SA(e){if(f2(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Hv(e)&&e.host||p2(e);return Hv(t)?t.host:t}function g2(e){const t=SA(e);return wA(t)?e.ownerDocument?e.ownerDocument.body:e.body:Tm(t)&&m2(t)?t:g2(t)}function Xl(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=g2(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=un(i);if(o){const l=Cp(a);return t.concat(a,a.visualViewport||[],m2(i)?i:[],l&&n?Xl(l):[])}else return t.concat(i,Xl(i,[],n))}function Cp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function _A(e){const t=Pm(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Tm(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Yl(n)!==o||Yl(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Om(e){return Ep(e)?e:e.contextElement}function kd(e){const t=Om(e);if(!Tm(t))return ql(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=_A(t);let a=(o?Yl(n.width):n.width)/r,l=(o?Yl(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const EA=ql(0);function CA(e){const t=un(e);return!bA()||!t.visualViewport?EA:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function kA(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==un(e)?!1:t}function Uv(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Om(e);let a=ql(1);t&&(r?Ep(r)&&(a=kd(r)):a=kd(e));const l=kA(o,n,r)?CA(o):ql(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,c=i.width/a.x,d=i.height/a.y;if(o){const m=un(o),f=r&&Ep(r)?un(r):r;let h=m,v=Cp(h);for(;v&&r&&f!==h;){const w=kd(v),p=v.getBoundingClientRect(),g=Pm(v),x=p.left+(v.clientLeft+parseFloat(g.paddingLeft))*w.x,S=p.top+(v.clientTop+parseFloat(g.paddingTop))*w.y;s*=w.x,u*=w.y,c*=w.x,d*=w.y,s+=x,u+=S,h=un(v),v=Cp(h)}}return xA({width:c,height:d,x:s,y:u})}function v2(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function TA(e,t){let n=null,r;const i=p2(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:c,top:d,width:m,height:f}=u;if(l||t(),!m||!f)return;const h=xs(d),v=xs(i.clientWidth-(c+m)),w=xs(i.clientHeight-(d+f)),p=xs(c),x={rootMargin:-h+"px "+-v+"px "+-w+"px "+-p+"px",threshold:yA(0,vA(1,s))||1};let S=!0;function E(k){const _=k[0].intersectionRatio;if(_!==s){if(!S)return a();_?a(!1,_):r=setTimeout(()=>{a(!1,1e-7)},1e3)}_===1&&!v2(u,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(E,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,x)}n.observe(e)}return a(!0),o}function PA(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=Om(e),c=i||o?[...u?Xl(u):[],...t?Xl(t):[]]:[];c.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),o&&p.addEventListener("resize",n)});const d=u&&l?TA(u,n):null;let m=-1,f=null;a&&(f=new ResizeObserver(p=>{let[g]=p;g&&g.target===u&&f&&t&&(f.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(t)})),n()}),u&&!s&&f.observe(u),t&&f.observe(t));let h,v=s?Uv(e):null;s&&w();function w(){const p=Uv(e);v&&!v2(v,p)&&n(),v=p,h=requestAnimationFrame(w)}return n(),()=>{var p;c.forEach(g=>{i&&g.removeEventListener("scroll",n),o&&g.removeEventListener("resize",n)}),d==null||d(),(p=f)==null||p.disconnect(),f=null,s&&cancelAnimationFrame(h)}}var kp=b.useLayoutEffect,OA=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Kl=function(){};function MA(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function $A(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(MA(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Wv=function(t){return zA(t)?t.filter(Boolean):Jr(t)==="object"&&t!==null?[t]:[]},y2=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=Jn(t,OA);return Z({},n)},Pe=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function fc(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function IA(e){return fc(e)?window.innerHeight:e.clientHeight}function x2(e){return fc(e)?window.pageYOffset:e.scrollTop}function Zl(e,t){if(fc(e)){window.scrollTo(0,t);return}e.scrollTop=t}function jA(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function DA(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function bs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Kl,i=x2(e),o=t-i,a=10,l=0;function s(){l+=a;var u=DA(l,i,o,n);Zl(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function Gv(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?Zl(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&Zl(e,Math.max(t.offsetTop-i,0))}function LA(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Yv(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function RA(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var b2=!1,AA={get passive(){return b2=!0}},ws=typeof window<"u"?window:{};ws.addEventListener&&ws.removeEventListener&&(ws.addEventListener("p",Kl,AA),ws.removeEventListener("p",Kl,!1));var FA=b2;function NA(e){return e!=null}function zA(e){return Array.isArray(e)}function Ss(e,t,n){return e?t:n}var BA=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=Bn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=Bn(l,2),u=s[0],c=s[1];return a[u]=c,a},{})},VA=["children","innerProps"],HA=["children","innerProps"];function UA(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=jA(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var c=s.getBoundingClientRect(),d=c.height,m=n.getBoundingClientRect(),f=m.bottom,h=m.height,v=m.top,w=n.offsetParent.getBoundingClientRect(),p=w.top,g=a?window.innerHeight:IA(s),x=x2(s),S=parseInt(getComputedStyle(n).marginBottom,10),E=parseInt(getComputedStyle(n).marginTop,10),k=p-E,_=g-v,C=k+x,O=d-x-v,$=f-g+x+S,j=x+v-E,I=160;switch(i){case"auto":case"bottom":if(_>=h)return{placement:"bottom",maxHeight:t};if(O>=h&&!a)return o&&bs(s,$,I),{placement:"bottom",maxHeight:t};if(!a&&O>=r||a&&_>=r){o&&bs(s,$,I);var D=a?_-S:O-S;return{placement:"bottom",maxHeight:D}}if(i==="auto"||a){var R=t,L=a?k:C;return L>=r&&(R=Math.min(L-S-l,t)),{placement:"top",maxHeight:R}}if(i==="bottom")return o&&Zl(s,$),{placement:"bottom",maxHeight:t};break;case"top":if(k>=h)return{placement:"top",maxHeight:t};if(C>=h&&!a)return o&&bs(s,j,I),{placement:"top",maxHeight:t};if(!a&&C>=r||a&&k>=r){var F=t;return(!a&&C>=r||a&&k>=r)&&(F=a?k-E:C-E),o&&bs(s,j,I),{placement:"top",maxHeight:F}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function WA(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var w2=function(t){return t==="auto"?"bottom":t},GA=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return Z((r={label:"menu"},Do(r,WA(i),"100%"),Do(r,"position","absolute"),Do(r,"width","100%"),Do(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},S2=b.createContext(null),YA=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=b.useContext(S2)||{},c=u.setPortalPlacement,d=b.useRef(null),m=b.useState(i),f=Bn(m,2),h=f[0],v=f[1],w=b.useState(null),p=Bn(w,2),g=p[0],x=p[1],S=s.spacing.controlHeight;return kp(function(){var E=d.current;if(E){var k=a==="fixed",_=l&&!k,C=UA({maxHeight:i,menuEl:E,minHeight:r,placement:o,shouldScroll:_,isFixedPosition:k,controlHeight:S});v(C.maxHeight),x(C.placement),c==null||c(C.placement)}},[i,o,a,l,r,c,S]),n({ref:d,placerProps:Z(Z({},t),{},{placement:g||w2(o),maxHeight:h})})},qA=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return K("div",Q({},Pe(t,"menu",{menu:!0}),{ref:r},i),n)},XA=qA,KA=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return Z({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},ZA=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return K("div",Q({},Pe(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},_2=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return Z({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},QA=_2,JA=_2,e6=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=Jn(t,VA);return K("div",Q({},Pe(Z(Z({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},t6=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=Jn(t,HA);return K("div",Q({},Pe(Z(Z({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},n6=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},r6=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=b.useRef(null),u=b.useRef(null),c=b.useState(w2(a)),d=Bn(c,2),m=d[0],f=d[1],h=b.useMemo(function(){return{setPortalPlacement:f}},[]),v=b.useState(null),w=Bn(v,2),p=w[0],g=w[1],x=b.useCallback(function(){if(i){var _=LA(i),C=l==="fixed"?0:window.pageYOffset,O=_[m]+C;(O!==(p==null?void 0:p.offset)||_.left!==(p==null?void 0:p.rect.left)||_.width!==(p==null?void 0:p.rect.width))&&g({offset:O,rect:_})}},[i,l,m,p==null?void 0:p.offset,p==null?void 0:p.rect.left,p==null?void 0:p.rect.width]);kp(function(){x()},[x]);var S=b.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=PA(i,s.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);kp(function(){S()},[S]);var E=b.useCallback(function(_){s.current=_,S()},[S]);if(!n&&l!=="fixed"||!p)return null;var k=K("div",Q({ref:E},Pe(Z(Z({},t),{},{offset:p.offset,position:l,rect:p.rect}),"menuPortal",{"menu-portal":!0}),o),r);return K(S2.Provider,{value:h},n?gu.createPortal(k,n):k)},i6=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},o6=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return K("div",Q({},Pe(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},a6=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return Z({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},s6=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return K("div",Q({},Pe(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},l6=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},u6=function(t){var n=t.children,r=t.innerProps;return K("div",Q({},Pe(t,"indicatorsContainer",{indicators:!0}),r),n)},qv,c6=["size"],d6=["innerProps","isRtl","size"],f6={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},E2=function(t){var n=t.size,r=Jn(t,c6);return K("svg",Q({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:f6},r))},Mm=function(t){return K(E2,Q({size:20},t),K("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},C2=function(t){return K(E2,Q({size:20},t),K("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},k2=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},p6=k2,h6=function(t){var n=t.children,r=t.innerProps;return K("div",Q({},Pe(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||K(C2,null))},m6=k2,g6=function(t){var n=t.children,r=t.innerProps;return K("div",Q({},Pe(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||K(Mm,null))},v6=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return Z({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},y6=function(t){var n=t.innerProps;return K("span",Q({},n,Pe(t,"indicatorSeparator",{"indicator-separator":!0})))},x6=ZO(qv||(qv=gA([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),b6=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return Z({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Td=function(t){var n=t.delay,r=t.offset;return K("span",{css:Kh({animation:"".concat(x6," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},w6=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=Jn(t,d6);return K("div",Q({},Pe(Z(Z({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),K(Td,{delay:0,offset:r}),K(Td,{delay:160,offset:!0}),K(Td,{delay:320,offset:!r}))},S6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return Z({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},_6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return K("div",Q({ref:o},Pe(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},E6=_6,C6=["data"],k6=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},T6=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,c=t.theme,d=t.selectProps;return K("div",Q({},Pe(t,"group",{group:!0}),s),K(a,Q({},l,{selectProps:d,theme:c,getStyles:i,getClassNames:o,cx:r}),u),K("div",null,n))},P6=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return Z({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},O6=function(t){var n=y2(t);n.data;var r=Jn(n,C6);return K("div",Q({},Pe(t,"groupHeading",{"group-heading":!0}),r))},M6=T6,$6=["innerRef","isDisabled","isHidden","inputClassName"],I6=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return Z(Z({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},j6),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},T2={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},j6={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Z({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},T2)},D6=function(t){return Z({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},T2)},L6=function(t){var n=t.cx,r=t.value,i=y2(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=Jn(i,$6);return K("div",Q({},Pe(t,"input",{"input-container":!0}),{"data-value":r||""}),K("input",Q({className:n({input:!0},s),ref:o,style:D6(l),disabled:a},u)))},R6=L6,A6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return Z({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},F6=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return Z({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},N6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return Z({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},P2=function(t){var n=t.children,r=t.innerProps;return K("div",r,n)},z6=P2,B6=P2;function V6(e){var t=e.children,n=e.innerProps;return K("div",Q({role:"button"},n),t||K(Mm,{size:14}))}var H6=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,c=r.Label,d=r.Remove;return K(u,{data:i,innerProps:Z(Z({},Pe(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},K(c,{data:i,innerProps:Z({},Pe(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),K(d,{data:i,innerProps:Z(Z({},Pe(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},U6=H6,W6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return Z({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},G6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return K("div",Q({},Pe(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},Y6=G6,q6=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return Z({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},X6=function(t){var n=t.children,r=t.innerProps;return K("div",Q({},Pe(t,"placeholder",{placeholder:!0}),r),n)},K6=X6,Z6=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return Z({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},Q6=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return K("div",Q({},Pe(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},J6=Q6,e8={ClearIndicator:g6,Control:E6,DropdownIndicator:h6,DownChevron:C2,CrossIcon:Mm,Group:M6,GroupHeading:O6,IndicatorsContainer:u6,IndicatorSeparator:y6,Input:R6,LoadingIndicator:w6,Menu:XA,MenuList:ZA,MenuPortal:r6,LoadingMessage:t6,NoOptionsMessage:e6,MultiValue:U6,MultiValueContainer:z6,MultiValueLabel:B6,MultiValueRemove:V6,Option:Y6,Placeholder:K6,SelectContainer:o6,SingleValue:J6,ValueContainer:s6},t8=function(t){return Z(Z({},e8),t.components)},Xv=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function n8(e,t){return!!(e===t||Xv(e)&&Xv(t))}function r8(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!n8(e[n],t[n]))return!1;return!0}function i8(e,t){t===void 0&&(t=r8);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var o8={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},a8=function(t){return K("span",Q({css:o8},t))},Kv=a8,s8={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,c=t.isAppleDevice,d=function(v,w){return v&&v.length?"".concat(v.indexOf(w)+1," of ").concat(v.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(d(l,r),".");if(n==="menu"&&c){var m=s?" disabled":"",f="".concat(u?" selected":"").concat(m);return"".concat(a).concat(f,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},l8=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,c=t.isAppleDevice,d=s.ariaLiveMessages,m=s.getOptionLabel,f=s.inputValue,h=s.isMulti,v=s.isOptionDisabled,w=s.isSearchable,p=s.menuIsOpen,g=s.options,x=s.screenReaderStatus,S=s.tabSelectsValue,E=s.isLoading,k=s["aria-label"],_=s["aria-live"],C=b.useMemo(function(){return Z(Z({},s8),d||{})},[d]),O=b.useMemo(function(){var L="";if(n&&C.onChange){var F=n.option,A=n.options,P=n.removedValue,M=n.removedValues,N=n.value,B=function(fe){return Array.isArray(fe)?null:fe},z=P||F||B(N),H=z?m(z):"",U=A||M||void 0,Y=U?U.map(m):[],X=Z({isDisabled:z&&v(z,l),label:H,labels:Y},n);L=C.onChange(X)}return L},[n,C,v,l,m]),$=b.useMemo(function(){var L="",F=r||i,A=!!(r&&l&&l.includes(r));if(F&&C.onFocus){var P={focused:F,label:m(F),isDisabled:v(F,l),isSelected:A,options:o,context:F===r?"menu":"value",selectValue:l,isAppleDevice:c};L=C.onFocus(P)}return L},[r,i,m,v,C,o,l,c]),j=b.useMemo(function(){var L="";if(p&&g.length&&!E&&C.onFilter){var F=x({count:o.length});L=C.onFilter({inputValue:f,resultsMessage:F})}return L},[o,f,p,C,g,x,E]),I=(n==null?void 0:n.action)==="initial-input-focus",D=b.useMemo(function(){var L="";if(C.guidance){var F=i?"value":p?"menu":"input";L=C.guidance({"aria-label":k,context:F,isDisabled:r&&v(r,l),isMulti:h,isSearchable:w,tabSelectsValue:S,isInitialFocus:I})}return L},[k,r,i,h,v,w,p,C,l,S,I]),R=K(b.Fragment,null,K("span",{id:"aria-selection"},O),K("span",{id:"aria-focused"},$),K("span",{id:"aria-results"},j),K("span",{id:"aria-guidance"},D));return K(b.Fragment,null,K(Kv,{id:u},I&&R),K(Kv,{"aria-live":_,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!I&&R))},u8=l8,Tp=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],c8=new RegExp("["+Tp.map(function(e){return e.letters}).join("")+"]","g"),O2={};for(var Pd=0;Pd<Tp.length;Pd++)for(var Od=Tp[Pd],Md=0;Md<Od.letters.length;Md++)O2[Od.letters[Md]]=Od.base;var M2=function(t){return t.replace(c8,function(n){return O2[n]})},d8=i8(M2),Zv=function(t){return t.replace(/^\s+|\s+$/g,"")},f8=function(t){return"".concat(t.label," ").concat(t.value)},p8=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=Z({ignoreCase:!0,ignoreAccents:!0,stringify:f8,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,c=s?Zv(r):r,d=s?Zv(l(n)):l(n);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),a&&(c=d8(c),d=M2(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},h8=["innerRef"];function m8(e){var t=e.innerRef,n=Jn(e,h8),r=BA(n,"onExited","in","enter","exit","appear");return K("input",Q({ref:t},r,{css:Kh({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var g8=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function v8(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=b.useRef(!1),l=b.useRef(!1),s=b.useRef(0),u=b.useRef(null),c=b.useCallback(function(w,p){if(u.current!==null){var g=u.current,x=g.scrollTop,S=g.scrollHeight,E=g.clientHeight,k=u.current,_=p>0,C=S-E-x,O=!1;C>p&&a.current&&(r&&r(w),a.current=!1),_&&l.current&&(o&&o(w),l.current=!1),_&&p>C?(n&&!a.current&&n(w),k.scrollTop=S,O=!0,a.current=!0):!_&&-p>x&&(i&&!l.current&&i(w),k.scrollTop=0,O=!0,l.current=!0),O&&g8(w)}},[n,r,i,o]),d=b.useCallback(function(w){c(w,w.deltaY)},[c]),m=b.useCallback(function(w){s.current=w.changedTouches[0].clientY},[]),f=b.useCallback(function(w){var p=s.current-w.changedTouches[0].clientY;c(w,p)},[c]),h=b.useCallback(function(w){if(w){var p=FA?{passive:!1}:!1;w.addEventListener("wheel",d,p),w.addEventListener("touchstart",m,p),w.addEventListener("touchmove",f,p)}},[f,m,d]),v=b.useCallback(function(w){w&&(w.removeEventListener("wheel",d,!1),w.removeEventListener("touchstart",m,!1),w.removeEventListener("touchmove",f,!1))},[f,m,d]);return b.useEffect(function(){if(t){var w=u.current;return h(w),function(){v(w)}}},[t,h,v]),function(w){u.current=w}}var Qv=["boxSizing","height","overflow","paddingRight","position"],Jv={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function e1(e){e.cancelable&&e.preventDefault()}function t1(e){e.stopPropagation()}function n1(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function r1(){return"ontouchstart"in window||navigator.maxTouchPoints}var i1=!!(typeof window<"u"&&window.document&&window.document.createElement),ko=0,ci={capture:!1,passive:!1};function y8(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),o=b.useRef(null),a=b.useCallback(function(s){if(i1){var u=document.body,c=u&&u.style;if(r&&Qv.forEach(function(h){var v=c&&c[h];i.current[h]=v}),r&&ko<1){var d=parseInt(i.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,f=window.innerWidth-m+d||0;Object.keys(Jv).forEach(function(h){var v=Jv[h];c&&(c[h]=v)}),c&&(c.paddingRight="".concat(f,"px"))}u&&r1()&&(u.addEventListener("touchmove",e1,ci),s&&(s.addEventListener("touchstart",n1,ci),s.addEventListener("touchmove",t1,ci))),ko+=1}},[r]),l=b.useCallback(function(s){if(i1){var u=document.body,c=u&&u.style;ko=Math.max(ko-1,0),r&&ko<1&&Qv.forEach(function(d){var m=i.current[d];c&&(c[d]=m)}),u&&r1()&&(u.removeEventListener("touchmove",e1,ci),s&&(s.removeEventListener("touchstart",n1,ci),s.removeEventListener("touchmove",t1,ci)))}},[r]);return b.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var x8=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},b8={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function w8(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=v8({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),c=y8({isEnabled:n}),d=function(f){u(f),c(f)};return K(b.Fragment,null,n&&K("div",{onClick:x8,css:b8}),t(d))}var S8={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},_8=function(t){var n=t.name,r=t.onFocus;return K("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:S8,value:"",onChange:function(){}})},E8=_8;function $m(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function C8(){return $m(/^iPhone/i)}function $2(){return $m(/^Mac/i)}function k8(){return $m(/^iPad/i)||$2()&&navigator.maxTouchPoints>1}function T8(){return C8()||k8()}function P8(){return $2()||T8()}var O8=function(t){return t.label},M8=function(t){return t.label},$8=function(t){return t.value},I8=function(t){return!!t.isDisabled},j8={clearIndicator:m6,container:i6,control:S6,dropdownIndicator:p6,group:k6,groupHeading:P6,indicatorsContainer:l6,indicatorSeparator:v6,input:I6,loadingIndicator:b6,loadingMessage:JA,menu:GA,menuList:KA,menuPortal:n6,multiValue:A6,multiValueLabel:F6,multiValueRemove:N6,noOptionsMessage:QA,option:W6,placeholder:q6,singleValue:Z6,valueContainer:a6},D8={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},L8=4,I2=4,R8=38,A8=I2*2,F8={baseUnit:I2,controlHeight:R8,menuGutter:A8},$d={borderRadius:L8,colors:D8,spacing:F8},N8={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Yv(),captureMenuScroll:!Yv(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:p8(),formatGroupLabel:O8,getOptionLabel:M8,getOptionValue:$8,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:I8,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!RA(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function o1(e,t,n,r){var i=L2(e,t,n),o=R2(e,t,n),a=D2(e,t),l=Ql(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function Ks(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return o1(e,a,t,l)}).filter(function(a){return s1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=o1(e,n,t,r);return s1(e,o)?o:void 0}).filter(NA)}function j2(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,km(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function a1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,km(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function z8(e,t){return j2(Ks(e,t))}function s1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!F2(e)||!o)&&A2(e,{label:a,value:l,data:i},r)}function B8(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function V8(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Id=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},D2=function(t,n){return t.getOptionLabel(n)},Ql=function(t,n){return t.getOptionValue(n)};function L2(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function R2(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Ql(e,t);return n.some(function(i){return Ql(e,i)===r})}function A2(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var F2=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},H8=1,N2=function(e){lA(n,e);var t=fA(n);function n(r){var i;if(aA(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var c=i.props,d=c.onChange,m=c.name;u.name=m,i.ariaOnChange(s,u),d(s,u)},i.setValue=function(s,u,c){var d=i.props,m=d.closeMenuOnSelect,f=d.isMulti,h=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:h}),m&&(i.setState({inputIsHiddenAfterUpdate:!f}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:c})},i.selectOption=function(s){var u=i.props,c=u.blurInputOnSelect,d=u.isMulti,m=u.name,f=i.state.selectValue,h=d&&i.isOptionSelected(s,f),v=i.isOptionDisabled(s,f);if(h){var w=i.getOptionValue(s);i.setValue(f.filter(function(p){return i.getOptionValue(p)!==w}),"deselect-option",s)}else if(!v)d?i.setValue([].concat(km(f),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:m});return}c&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,c=i.state.selectValue,d=i.getOptionValue(s),m=c.filter(function(h){return i.getOptionValue(h)!==d}),f=Ss(u,m,m[0]||null);i.onChange(f,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Ss(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),m=Ss(s,d,d[0]||null);c&&i.onChange(m,{action:"pop-value",removedValue:c})},i.getFocusedOptionId=function(s){return Id(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return a1(Ks(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return $A.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return D2(i.props,s)},i.getOptionValue=function(s){return Ql(i.props,s)},i.getStyles=function(s,u){var c=i.props.unstyled,d=j8[s](u,c);d.boxSizing="border-box";var m=i.props.styles[s];return m?m(d,u):d},i.getClassNames=function(s,u){var c,d;return(c=(d=i.props.classNames)[s])===null||c===void 0?void 0:c.call(d,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return t8(i.props)},i.buildCategorizedOptions=function(){return Ks(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return j2(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:Z({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,c=u.isMulti,d=u.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!c}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&fc(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,c=u&&u.item(0);c&&(i.initialTouchX=c.clientX,i.initialTouchY=c.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-i.initialTouchX),m=Math.abs(c.clientY-i.initialTouchY),f=5;i.userIsDragging=d>f||m>f}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,c=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(c,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),c=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:c>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return F2(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,c=u.isMulti,d=u.backspaceRemovesValue,m=u.escapeClearsValue,f=u.inputValue,h=u.isClearable,v=u.isDisabled,w=u.menuIsOpen,p=u.onKeyDown,g=u.tabSelectsValue,x=u.openMenuOnFocus,S=i.state,E=S.focusedOption,k=S.focusedValue,_=S.selectValue;if(!v&&!(typeof p=="function"&&(p(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!c||f)return;i.focusValue("previous");break;case"ArrowRight":if(!c||f)return;i.focusValue("next");break;case"Delete":case"Backspace":if(f)return;if(k)i.removeValue(k);else{if(!d)return;c?i.popValue():h&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!w||!g||!E||x&&i.isOptionSelected(E,_))return;i.selectOption(E);break;case"Enter":if(s.keyCode===229)break;if(w){if(!E||i.isComposing)return;i.selectOption(E);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:f}),i.onMenuClose()):h&&m&&i.clearValue();break;case" ":if(f)return;if(!w){i.openMenu("first");break}if(!E)return;i.selectOption(E);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++H8),i.state.selectValue=Wv(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=Id(o,a[l])}return i}return sA(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Gv(this.menuListRef,this.focusedOptionRef),P8()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Gv(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),c=i==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,c=-1;if(a.length){switch(i){case"previous":s===0?c=0:s===-1?c=u:c=s-1;break;case"next":s>-1&&s<u&&(c=s+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:a[c]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme($d):Z(Z({},$d),this.props.theme):$d}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,m=d.isMulti,f=d.isRtl,h=d.options,v=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:v,isMulti:m,isRtl:f,options:h,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return L2(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return R2(this.props,i,o)}},{key:"filterOption",value:function(i,o){return A2(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,c=i.form,d=i.menuIsOpen,m=i.required,f=this.getComponents(),h=f.Input,v=this.state,w=v.inputIsHidden,p=v.ariaSelection,g=this.commonProps,x=l||this.getElementId("input"),S=Z(Z(Z({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(p==null?void 0:p.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?b.createElement(h,Q({},g,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:s},S)):b.createElement(m8,Q({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Kl,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:c,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,m=this.commonProps,f=this.props,h=f.controlShouldRenderValue,v=f.isDisabled,w=f.isMulti,p=f.inputValue,g=f.placeholder,x=this.state,S=x.selectValue,E=x.focusedValue,k=x.isFocused;if(!this.hasValue()||!h)return p?null:b.createElement(d,Q({},m,{key:"placeholder",isDisabled:v,isFocused:k,innerProps:{id:this.getElementId("placeholder")}}),g);if(w)return S.map(function(C,O){var $=C===E,j="".concat(i.getOptionLabel(C),"-").concat(i.getOptionValue(C));return b.createElement(a,Q({},m,{components:{Container:l,Label:s,Remove:u},isFocused:$,isDisabled:v,key:j,index:O,removeProps:{onClick:function(){return i.removeValue(C)},onTouchEnd:function(){return i.removeValue(C)},onMouseDown:function(D){D.preventDefault()}},data:C}),i.formatOptionLabel(C,"value"))});if(p)return null;var _=S[0];return b.createElement(c,Q({},m,{data:_,isDisabled:v}),this.formatOptionLabel(_,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,Q({},a,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!o||!u)return null;var d={"aria-hidden":"true"};return b.createElement(o,Q({},a,{innerProps:d,isDisabled:s,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return b.createElement(a,Q({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,Q({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,m=o.NoOptionsMessage,f=o.Option,h=this.commonProps,v=this.state.focusedOption,w=this.props,p=w.captureMenuScroll,g=w.inputValue,x=w.isLoading,S=w.loadingMessage,E=w.minMenuHeight,k=w.maxMenuHeight,_=w.menuIsOpen,C=w.menuPlacement,O=w.menuPosition,$=w.menuPortalTarget,j=w.menuShouldBlockScroll,I=w.menuShouldScrollIntoView,D=w.noOptionsMessage,R=w.onMenuScrollToTop,L=w.onMenuScrollToBottom;if(!_)return null;var F=function(H,U){var Y=H.type,X=H.data,ee=H.isDisabled,fe=H.isSelected,be=H.label,ie=H.value,$e=v===X,Be=ee?void 0:function(){return i.onOptionHover(X)},Ve=ee?void 0:function(){return i.selectOption(X)},oi="".concat(i.getElementId("option"),"-").concat(U),vt={id:oi,onClick:Ve,onMouseMove:Be,onMouseOver:Be,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:fe};return b.createElement(f,Q({},h,{innerProps:vt,data:X,isDisabled:ee,isSelected:fe,key:oi,label:be,type:Y,value:ie,isFocused:$e,innerRef:$e?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(H.data,"menu"))},A;if(this.hasOptions())A=this.getCategorizedOptions().map(function(z){if(z.type==="group"){var H=z.data,U=z.options,Y=z.index,X="".concat(i.getElementId("group"),"-").concat(Y),ee="".concat(X,"-heading");return b.createElement(a,Q({},h,{key:X,data:H,options:U,Heading:l,headingProps:{id:ee,data:z.data},label:i.formatGroupLabel(z.data)}),z.options.map(function(fe){return F(fe,"".concat(Y,"-").concat(fe.index))}))}else if(z.type==="option")return F(z,"".concat(z.index))});else if(x){var P=S({inputValue:g});if(P===null)return null;A=b.createElement(d,h,P)}else{var M=D({inputValue:g});if(M===null)return null;A=b.createElement(m,h,M)}var N={minMenuHeight:E,maxMenuHeight:k,menuPlacement:C,menuPosition:O,menuShouldScrollIntoView:I},B=b.createElement(YA,Q({},h,N),function(z){var H=z.ref,U=z.placerProps,Y=U.placement,X=U.maxHeight;return b.createElement(s,Q({},h,N,{innerRef:H,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:Y}),b.createElement(w8,{captureEnabled:p,onTopArrive:R,onBottomArrive:L,lockEnabled:j},function(ee){return b.createElement(u,Q({},h,{innerRef:function(be){i.getMenuListRef(be),ee(be)},innerProps:{role:"listbox","aria-multiselectable":h.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:X,focusedOption:v}),A)}))});return $||O==="fixed"?b.createElement(c,Q({},h,{appendTo:$,controlElement:this.controlRef,menuPlacement:C,menuPosition:O}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return b.createElement(E8,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var m=d.map(function(v){return i.getOptionValue(v)}).join(a);return b.createElement("input",{name:u,type:"hidden",value:m})}else{var f=d.length>0?d.map(function(v,w){return b.createElement("input",{key:"i-".concat(w),name:u,type:"hidden",value:i.getOptionValue(v)})}):b.createElement("input",{name:u,type:"hidden",value:""});return b.createElement("div",null,f)}else{var h=d[0]?this.getOptionValue(d[0]):"";return b.createElement("input",{name:u,type:"hidden",value:h})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return b.createElement(u8,Q({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,c=u.className,d=u.id,m=u.isDisabled,f=u.menuIsOpen,h=this.state.isFocused,v=this.commonProps=this.getCommonProps();return b.createElement(l,Q({},v,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:h}),this.renderLiveRegion(),b.createElement(o,Q({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:h,menuIsOpen:f}),b.createElement(s,Q({},v,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(a,Q({},v,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,m=o.instancePrefix,f=i.options,h=i.value,v=i.menuIsOpen,w=i.inputValue,p=i.isMulti,g=Wv(h),x={};if(a&&(h!==a.value||f!==a.options||v!==a.menuIsOpen||w!==a.inputValue)){var S=v?z8(i,g):[],E=v?a1(Ks(i,g),"".concat(m,"-option")):[],k=l?B8(o,g):null,_=V8(o,S),C=Id(E,_);x={selectValue:g,focusedOption:_,focusedOptionId:C,focusableOptionsWithIds:E,focusedValue:k,clearFocusValueOnUpdate:!1}}var O=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},$=u,j=c&&d;return c&&!j&&($={value:Ss(p,g,g[0]||null),options:g,action:"initial-input-focus"},j=!d),(u==null?void 0:u.action)==="initial-input-focus"&&($=null),Z(Z(Z({},x),O),{},{prevProps:i,ariaSelection:$,prevWasFocused:j})}}]),n}(b.Component);N2.defaultProps=N8;var U8=b.forwardRef(function(e,t){var n=oA(e);return b.createElement(N2,Q({ref:t},n))}),Ea=U8;const W8=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,G8=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Y8=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>y.jsxs(W8,{children:[y.jsx(G8,{children:"Місто"}),y.jsx(Ea,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),q8=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,X8=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,K8=({options:e=[],value:t,onChange:n,selectedCity:r})=>y.jsxs(q8,{children:[y.jsx(X8,{children:"Спосіб доставки"}),y.jsx(Ea,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),jd=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Dd=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,Z8=({deliveryMethod:e,officeOptions:t,ukrOfficeOptions:n,selectedOffice:r,selectedUkrOffice:i,setSelectedOffice:o,setSelectedUkrOffice:a})=>e==="nova"?y.jsxs(jd,{children:[y.jsx(Dd,{children:"Відділення Нової пошти"}),y.jsx(Ea,{options:t,onChange:l=>o(l),value:r,placeholder:"Оберіть відділення..."})]}):e==="ukr"?y.jsxs(jd,{children:[y.jsx(Dd,{children:"Відділення Укрпошти"}),y.jsx(Ea,{options:n,onChange:l=>a(l),value:i,placeholder:"Оберіть відділення..."})]}):e==="pickup"?y.jsxs(jd,{children:[y.jsx(Dd,{children:"Самовивіз"}),y.jsxs("div",{style:{backgroundColor:"#f9f9f9",padding:"10px",borderRadius:"6px",border:"1px solid #ddd",fontSize:"14px",color:"#333",lineHeight:"1.4"},children:[y.jsx("p",{children:"Ви обрали самовивіз."}),y.jsx("p",{children:"Адреса магазину: вул. Казармена 6Г, Київ"}),y.jsx("p",{children:"Графік роботи: Вт, Ср, Пт, Сб, Нд — 11:00–20:00; вихідні: Пн, Чт"}),y.jsx("p",{children:"Телефон: +380 99 999 99"})]})]}):null,Q8=T.div`
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
`;const J8=T.button`
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
`,eF=T.ul`
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
`,tF=T.li`
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
`,nF=T.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,rF=T.div`
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
`,iF=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>y.jsxs(Q8,{children:[y.jsx("h3",{children:"Ваше замовлення"}),y.jsx(eF,{children:e.map((o,a)=>{var l,s;return y.jsxs(tF,{children:[y.jsx(nF,{src:((s=(l=o.images)==null?void 0:l[0])==null?void 0:s.url)||_a,alt:o.name}),y.jsxs(rF,{children:[y.jsx("p",{className:"item-name",children:o.name}),y.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),y.jsxs("span",{className:"item-total",children:[o.price*o.quantity," грн"]})]},`${o.id}-${a}`)})}),y.jsxs("div",{className:"summary-row",children:[y.jsxs("span",{children:["Товари (",n,")"]}),y.jsxs("span",{children:[t," грн"]})]}),y.jsxs("div",{className:"summary-row",children:[y.jsx("span",{children:"Доставка"}),y.jsx("span",{children:"За тарифами перевізника"})]}),y.jsx("hr",{}),y.jsxs("div",{className:"total",children:[y.jsx("span",{children:"Всього до сплати:"}),y.jsxs("span",{children:[t," грн"]})]}),y.jsx(J8,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&y.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var z2={exports:{}};function oF(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ld=oF(b),aF=gu;function sF(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Pp(){return(Pp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function lF(e,t){e.prototype=Object.create(t.prototype),sF(e.prototype.constructor=e,t)}function uF(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function di(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var cF=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],c=0;(s=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},l1=cF;function u1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function dF(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var fF={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},pF="_";function c1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=pF),n==null&&(n=fF),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function At(e,t){return e.permanents.indexOf(t)!==-1}function pc(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(At(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function d1(e,t){return t.split("").every(function(n,r){return At(e,r)||!pc(e,r,n)})}function Lo(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&At(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!At(e,o)&&pc(e,o,a)){i=o+1;break}}return i}function B2(e,t){return Lo(e,t)===e.mask.length}function Rn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Op(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&At(e,t.length);)t+=r[t.length];return t}if(t)return Op(e,Rn(e,""),t,0);for(var o=0;o<r.length;o++)At(e,o)?t+=r[o]:t+=n;return t}function hF(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(c,d){return d<n||i<=d?c:At(e,d)?a[d]:o}).join("");for(var u=i;u<s.length;u++)At(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Rn(e,t)}function Op(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=B2(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;f=u,At(e,m=r)&&f!==i[m];){if(r>=t.length&&(t+=i[r]),c=u,d=r,o&&At(e,d)&&c===o)return!0;if(++r>=i.length)return!1}var c,d,m,f;return!pc(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),Rn(e,t)):o||(t+=u),++r<i.length)}),t}function mF(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;c=s,At(e,u=r)&&c!==i[u];)if(++r>=i.length)return!1;var u,c;return(pc(e,r,s)||s===o)&&r++,r<i.length}),r-l}function gF(e,t){for(var n=t;0<=n;--n)if(!At(e,n))return n;return null}function qo(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!At(e,r))return r;return null}function Rd(e){return e||e===0?e+"":""}function vF(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",c=0,d=0,m=Math.min(i.start,n.start);return n.end>i.start?d=(c=mF(e,r,u=s.slice(i.start,n.end),m))?i.length:0:s.length<r.length&&(d=r.length-s.length),s=r,d&&(d===1&&!i.length&&(m=i.start===n.start?qo(e,n.start):gF(e,n.start)),s=hF(e,s,m,d)),s=Op(e,s,u,m),(m+=c)>=o.length?m=o.length:m<a.length&&!c?m=a.length:m>=a.length&&m<l&&c&&(m=qo(e,m)),u||(u=null),{value:s=Rn(e,s),enteredString:u,selection:{start:m,end:m}}}function yF(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function yt(e){return typeof e=="function"}function xF(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function V2(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function f1(e){return(V2()?xF():function(){return setTimeout(e,1e3/60)})(e)}function Ad(e){(V2()||clearTimeout)(e)}var bF=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=f1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Ad(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var h=aF.findDOMNode(di(di(i))),v=typeof window<"u"&&h instanceof window.Element;if(h&&!v)return null;if(h.nodeName!=="INPUT"&&(h=h.querySelector("input")),!h)throw new Error("react-input-mask: inputComponent doesn't contain input node");return h},i.getInputValue=function(){var h=i.getInputDOMNode();return h?h.value:null},i.setInputValue=function(h){var v=i.getInputDOMNode();v&&(i.value=h,v.value=h)},i.setCursorToEnd=function(){var h=Lo(i.maskOptions,i.value),v=qo(i.maskOptions,h);v!==null&&i.setCursorPosition(v)},i.setSelection=function(h,v,w){w===void 0&&(w={});var p=i.getInputDOMNode(),g=i.isFocused();p&&g&&(w.deferred||u1(p,h,v),i.selectionDeferId!==null&&Ad(i.selectionDeferId),i.selectionDeferId=f1(function(){i.selectionDeferId=null,u1(p,h,v)}),i.previousSelection={start:h,end:v,length:Math.abs(v-h)})},i.getSelection=function(){return dF(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(h){i.setSelection(h,h)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var h=i.maskOptions,v=h.mask,w=h.maskChar,p=h.permanents,g=h.formatChars;return{mask:v,maskChar:w,permanents:p,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:g}},i.isInputAutofilled=function(h,v,w,p){var g=i.getInputDOMNode();try{if(g.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||p.end<w.length&&v.end===h.length},i.onChange=function(h){var v=di(di(i)).beforePasteState,w=di(di(i)).previousSelection,p=i.props.beforeMaskedValueChange,g=i.getInputValue(),x=i.value,S=i.getSelection();i.isInputAutofilled(g,S,x,w)&&(x=Rn(i.maskOptions,""),w={start:0,end:0,length:0}),v&&(w=v.selection,x=v.value,S={start:w.start+g.length,end:w.start+g.length,length:0},g=x.slice(0,w.start)+g+x.slice(w.end),i.beforePasteState=null);var E=vF(i.maskOptions,g,S,x,w),k=E.enteredString,_=E.selection,C=E.value;if(yt(p)){var O=p({value:C,selection:_},{value:x,selection:w},k,i.getBeforeMaskedValueChangeConfig());C=O.value,_=O.selection}i.setInputValue(C),yt(i.props.onChange)&&i.props.onChange(h),i.isWindowsPhoneBrowser?i.setSelection(_.start,_.end,{deferred:!0}):i.setSelection(_.start,_.end)},i.onFocus=function(h){var v=i.props.beforeMaskedValueChange,w=i.maskOptions,p=w.mask,g=w.prefix;if(i.focused=!0,i.mounted=!0,p){if(i.value)Lo(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var x=Rn(i.maskOptions,g),S=Rn(i.maskOptions,x),E=Lo(i.maskOptions,S),k=qo(i.maskOptions,E),_={start:k,end:k};if(yt(v)){var C=v({value:S,selection:_},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=C.value,_=C.selection}var O=S!==i.getInputValue();O&&i.setInputValue(S),O&&yt(i.props.onChange)&&i.props.onChange(h),i.setSelection(_.start,_.end)}i.runSaveSelectionLoop()}yt(i.props.onFocus)&&i.props.onFocus(h)},i.onBlur=function(h){var v=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&d1(i.maskOptions,i.value)){var p="";yt(v)&&(p=v({value:p,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var g=p!==i.getInputValue();g&&i.setInputValue(p),g&&yt(i.props.onChange)&&i.props.onChange(h)}yt(i.props.onBlur)&&i.props.onBlur(h)},i.onMouseDown=function(h){if(!i.focused&&document.addEventListener){i.mouseDownX=h.clientX,i.mouseDownY=h.clientY,i.mouseDownTime=new Date().getTime();var v=function w(p){if(document.removeEventListener("mouseup",w),i.focused){var g=Math.abs(p.clientX-i.mouseDownX),x=Math.abs(p.clientY-i.mouseDownY),S=Math.max(g,x),E=new Date().getTime()-i.mouseDownTime;(S<=10&&E<=200||S<=5&&E<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",v)}yt(i.props.onMouseDown)&&i.props.onMouseDown(h)},i.onPaste=function(h){yt(i.props.onPaste)&&i.props.onPaste(h),h.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(h){i.props.children==null&&yt(i.props.inputRef)&&i.props.inputRef(h)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,c=r.defaultValue,d=r.value;i.maskOptions=c1(o,a,l),c==null&&(c=""),d==null&&(d=c);var m=Rd(d);if(i.maskOptions.mask&&(s||m)&&(m=Rn(i.maskOptions,m),yt(u))){var f=r.value;r.value==null&&(f=c),m=u({value:m,selection:null},{value:f=Rd(f),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=m,i}lF(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=yF(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,c=this.maskOptions,d=a||this.isFocused(),m=this.props.value!=null,f=m?Rd(this.props.value):this.value,h=r?r.start:null;if(this.maskOptions=c1(l,s,u),this.maskOptions.mask){!c.mask&&this.isFocused()&&this.runSaveSelectionLoop();var v=this.maskOptions.mask&&this.maskOptions.mask!==c.mask;if(c.mask||m||(f=this.getInputValue()),(v||this.maskOptions.mask&&(f||d))&&(f=Rn(this.maskOptions,f)),v){var w=Lo(this.maskOptions,f);(h===null||w<h)&&(h=B2(this.maskOptions,f)?w:qo(this.maskOptions,w))}!this.maskOptions.mask||!d1(this.maskOptions,f)||d||m&&this.props.value||(f="");var p={start:h,end:h};if(yt(o)){var g=o({value:f,selection:p},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());f=g.value,p=g.selection}this.value=f;var x=this.getInputValue()!==this.value;x?(this.setInputValue(this.value),this.forceUpdate()):v&&this.forceUpdate();var S=!1;p.start!=null&&p.end!=null&&(S=!r||r.start!==p.start||r.end!==p.end),(S||x)&&this.setSelection(p.start,p.end)}else c.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Ad(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=uF(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){yt(o)||l1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Pp({},a);l.forEach(function(c){return delete s[c]}),r=o(s),l.filter(function(c){return r.props[c]!=null&&r.props[c]!==a[c]}).length&&l1(!1)}else r=Ld.createElement("input",Pp({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Ld.cloneElement(r,u)},t}(Ld.Component),wF=bF;z2.exports=wF;var SF=z2.exports;const _F=$p(SF);T.div`
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
`;const EF=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return y.jsxs(y.Fragment,{children:[y.jsx("h3",{children:"Контактні дані"}),y.jsxs(Fd,{children:[y.jsx(Nd,{children:"Прізвище та ім’я"}),y.jsx(zd,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&y.jsx(Bd,{children:n.fullName})]}),y.jsxs(Fd,{children:[y.jsx(Nd,{children:"Номер телефону"}),y.jsx(_F,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>y.jsx(zd,{...i,type:"tel"})}),n.phone&&y.jsx(Bd,{children:n.phone})]}),y.jsxs(Fd,{children:[y.jsx(Nd,{children:"E-mail"}),y.jsx(zd,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&y.jsx(Bd,{children:n.email})]})]})},CF=T.div`
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
`;const kF=T.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,TF=T.div`
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
`;const PF=[{city:"Київ",address:"вул. Хрещатик, 1"},{city:"Київ",address:"вул. Січових Стрільців, 10"},{city:"Львів",address:"просп. Свободи, 5"}],OF=({options:e,value:t,onChange:n,error:r})=>{const i=e.find(o=>o.value===t)||null;return y.jsxs("div",{style:{marginBottom:"20px"},children:[y.jsx("label",{style:{display:"block",marginBottom:"8px"},children:"Спосіб оплати"}),y.jsx(Ea,{options:e,value:i,onChange:o=>n(o==null?void 0:o.value),placeholder:"Оберіть спосіб оплати",styles:{control:o=>({...o,borderColor:r?"red":o.borderColor})}}),r&&y.jsx("span",{style:{color:"red",fontSize:"12px"},children:"Оберіть спосіб оплати"})]})},p1={}.VITE_NP_API_KEY,h1="https://api.novaposhta.ua/v2.0/json/",MF=()=>{const e=Dt(M=>M.cart.items),t=Qi(),[n,r]=b.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[i,o]=b.useState(""),[a,l]=b.useState(null),[s,u]=b.useState(null),[c,d]=b.useState(null),[m,f]=b.useState(null),[h,v]=b.useState([]),[w,p]=b.useState([]),[g,x]=b.useState([]),[S,E]=b.useState(""),[k,_]=b.useState(null),C=e.reduce((M,N)=>M+N.price*N.quantity,0),O=e.reduce((M,N)=>M+N.quantity,0),j=(()=>{const M=new Date().getFullYear().toString().slice(-2),N=Date.now().toString().slice(-4),B=Math.floor(100+Math.random()*900);return`${M}${N}${B}`})();console.log(j),b.useEffect(()=>{if(i.length<2)return;const M=setTimeout(async()=>{const B=await(await fetch(h1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:p1,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:i}})})).json();v(B.data.map(z=>({value:z.Ref,label:z.Description})))},500);return()=>clearTimeout(M)},[i]),b.useEffect(()=>{if(!a||s!=="nova")return;(async()=>{const B=await(await fetch(h1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:p1,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:a.value}})})).json();p(B.data.map(z=>({value:z.Ref,label:z.Description})))})()},[a,s]),b.useEffect(()=>{if(s!=="ukr"||!a)return;const M=PF.filter(N=>N.city===a.label).filter(N=>N.address.toLowerCase().includes(S.toLowerCase())).slice(0,20);x(M.map((N,B)=>({value:B,label:N.address})))},[a,s,S]);const I=M=>{l(M),r(N=>({...N,city:(M==null?void 0:M.label)||"",postOffice:""})),u(null),d(null),f(null)},D=()=>{const M={};return n.fullName.trim().split(" ").length<2&&(M.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||(M.email="Некоректний email"),n.phone.replace(/\D/g,"").length<12&&(M.phone="Номер неповний"),a||(M.city=!0),s==="nova"&&!c&&(M.postOffice=!0),s==="ukr"&&!m&&(M.postOffice=!0),s||(M.delivery=!0),k||(M.payment=!0),M},R=b.useMemo(D,[n,s,c,m,a,k]),L=Object.keys(R).length===0&&e.length>0,F=async M=>{if(M.preventDefault(),!k){alert("Оберіть спосіб оплати");return}try{if(await fetch("https://backenddidiv-production.up.railway.app/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:n.fullName,phone:n.phone,email:n.email,city:n.city,products:e==null?void 0:e.map(B=>({id:B.id,name:B.name,quantity:B.quantity,price:B.price})),status_order:"pending",order_number:j,payment_method:k==="liqpay"?"Онлайн (LiqPay)":"Післяплата",delivery_method:s==="nova"?"Нова Пошта":s==="ukr"?"УкрПошта":"Самовивіз",delivery_address:s==="nova"?c==null?void 0:c.label:s==="ukr"?m==null?void 0:m.label:"Самовивіз"}})}),console.log("ORDER:",j),console.log("AMOUNT:",C),k==="liqpay"){const B=await fetch("https://backenddidiv-production.up.railway.app/api/liqpay/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:C,order_number:j})}),{data:z,signature:H}=await B.json(),U=document.createElement("form");U.method="POST",U.action="https://www.liqpay.ua/api/3/checkout",U.innerHTML=`
        <input type="hidden" name="data" value="${z}" />
        <input type="hidden" name="signature" value="${H}" />
      `,document.body.appendChild(U),U.requestSubmit();return}const N={...n,city:a.label,deliveryMethod:s==="nova"?"Нова Пошта":s==="ukr"?"УкрПошта":"Самовивіз",address:s==="nova"?c==null?void 0:c.label:s==="ukr"?m==null?void 0:m.label:"Самовивіз",products:e==null?void 0:e.map(B=>({id:B.id,name:B.name,quantity:B.quantity,price:B.price})),total:C,order_number:j,delivery_address:s==="nova"?c==null?void 0:c.label:s==="ukr"?m==null?void 0:m.label:"Самовивіз",payment_method:k==="liqpay"?"Онлайн (LiqPay)":"Післяплата"};t("/order-confirmation",{state:{order:N}})}catch(N){console.error(N),alert("Помилка оформлення")}},A=b.useMemo(()=>{const M=[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}];return(a==null?void 0:a.label)==="Київ"&&M.push({value:"pickup",label:"Самовивіз"}),M},[a]),P=[{value:"liqpay",label:"Онлайн оплата (LiqPay)"},{value:"cod",label:"Післяплата"}];return y.jsx(CF,{children:y.jsxs(kF,{children:[y.jsxs(TF,{children:[y.jsx(EF,{formData:n,setFormData:r,errors:R}),y.jsx(Y8,{cityOptions:h,selectedCity:a,onChange:I,onInputChange:o}),y.jsx(K8,{options:A,value:s,onChange:u,selectedCity:a}),y.jsx(Z8,{deliveryMethod:s,officeOptions:w,ukrOfficeOptions:g,selectedOffice:c,selectedUkrOffice:m,setSelectedOffice:d,setSelectedUkrOffice:f,setUkrSearch:E}),y.jsx(OF,{options:P,value:k,onChange:_,error:R.payment})]}),y.jsx(iF,{cartItems:e,totalAmount:C,totalQuantity:O,isFormValid:L,handleSubmit:F})]})})},$F=T.div`
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
`,jF=T.div`
font-family: var(--second-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,DF=T.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,LF=T.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,RF=T.li`
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
`;const AF=T.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,m1=T.button`
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
`,FF=()=>{var c,d,m;const e=Qi(),t=ei(),[n]=wE(),r=(c=t.state)==null?void 0:c.order,i=n.get("orderId"),[o,a]=b.useState(r||null),[l,s]=b.useState(!r);b.useEffect(()=>{r||(i?fetch(`https://backenddidiv-production.up.railway.app/api/orders?filters[order_number][$eq]=${i}&populate=*`).then(f=>f.json()).then(f=>{var h;((h=f.data)==null?void 0:h.length)>0&&(console.log(f.data),a(f.data[0])),s(!1)}).catch(()=>s(!1)):s(!1))},[i,r]),console.log(o);const u=((d=o==null?void 0:o.products)==null?void 0:d.reduce((f,h)=>f+Number(h.price)*h.quantity,0))||0;return l?y.jsx("div",{children:"Завантаження..."}):o?y.jsxs($F,{children:[y.jsx(IF,{children:"Дякуємо за ваше замовлення!"}),y.jsxs(Mr,{children:["Ваше замовлення ",y.jsxs("strong",{children:["№",o.order_number]})," успішно прийняте."]}),y.jsx(Mr,{children:"Ми зв’яжемось з Вами в найближчий час"}),y.jsxs(jF,{children:[y.jsx(DF,{children:"Деталі замовлення:"}),y.jsx(LF,{children:(m=o.products)==null?void 0:m.map(f=>y.jsxs(RF,{children:[y.jsxs("span",{className:"item-info",children:[f.name," (x",f.quantity,")"]}),y.jsxs("span",{className:"item-price",children:[f.price*f.quantity," грн"]})]},f.id))}),y.jsxs(Mr,{children:[y.jsx("strong",{children:"На суму:"})," ",u," грн."]}),y.jsxs(Mr,{children:[y.jsx("strong",{children:"Отрмувач:"})," ",o.fullName,", ",o.phone,"."]}),y.jsxs(Mr,{children:[y.jsx("strong",{children:"Спосіб доставки:"})," ",o.deliveryMethod,"."]}),y.jsxs(Mr,{children:[y.jsx("strong",{children:"Адреса отримання:"})," ",o.city,", ",o.delivery_address,"."]}),y.jsxs(Mr,{children:[y.jsx("strong",{children:"Спосіб оплати:"})," ",o.payment_method,"."]})]}),y.jsxs(AF,{children:[y.jsx(m1,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),y.jsx(m1,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):y.jsxs("div",{children:["Замовлення не знайдено",y.jsx("button",{onClick:()=>e("/"),children:"На головну"})]})},NF=T.section`
  background-color: var(--second-background);
`,zF=T.div`
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
`,BF=T.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,VF=T.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,HF=T.p`

  font-size: 16px;
  color: #666;
`,UF=T.section`
  margin-bottom: 50px;
`,WF=T.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,GF=T.section`
  margin-bottom: 60px;
`,YF=T.h2`
  margin-bottom: 30px;
`,qF=T.div`
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
`,XF=()=>y.jsxs(NF,{children:[y.jsxs(zF,{children:[y.jsxs(BF,{children:[y.jsx(VF,{children:"Про Дідів Хлів"}),y.jsx(HF,{children:"Даємо друге життя якісним велозапчастинам"})]}),y.jsxs(UF,{children:[y.jsx(WF,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),y.jsx(TS,{})]}),y.jsxs(GF,{children:[y.jsx(YF,{children:"Наша майстерня"}),y.jsxs(qF,{children:[y.jsx(_s,{color:"#e2e2e2",children:"Фото майстерні"}),y.jsx(_s,{color:"#d1d1d1",children:"Процес діагностики"}),y.jsx(_s,{color:"#bcbcbc",children:"Склад запчастин"}),y.jsx(_s,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),KF=()=>{const{pathname:e}=ei();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},ZF=T.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,QF=T.div`
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
`,JF=T.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,eN=T.p`
  color: #585555;
  margin-bottom: 40px;
`,tN=T.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,nN=T.div`
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
`,rN=T.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,iN=T.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,oN=T.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,aN=T.div`
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
`;const sN=T.div`
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

 
`,lN=()=>y.jsx(ZF,{children:y.jsxs(QF,{children:[y.jsx(JF,{children:"Контакти"}),y.jsx(eN,{children:"Зв’яжіться з нами для консультації або замовлення"}),y.jsxs(tN,{children:[y.jsxs(nN,{children:[y.jsxs(Es,{children:[y.jsx("h3",{children:"Адреса"}),y.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),y.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),y.jsxs(Es,{children:[y.jsx("h3",{children:"Телефон"}),y.jsx("p",{children:"+38 (097) 123-45-67"})]}),y.jsxs(Es,{children:[y.jsx("h3",{children:"Email"}),y.jsx("p",{children:"didivhliv.com"})]}),y.jsxs(Es,{children:[y.jsx("h3",{children:"Графік роботи"}),y.jsx("p",{children:"З 11:00 - 20:00"}),y.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),y.jsxs(rN,{children:[y.jsx(iN,{children:"Ми в соцмережах"}),y.jsx(oN,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),y.jsxs(aN,{children:[y.jsxs(g1,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${dn}#icon-instagram`})}),y.jsx("span",{children:"Instagram"})]}),y.jsxs(g1,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[y.jsx("svg",{width:"20px",children:y.jsx("use",{href:`${dn}#icon-telegram`})}),y.jsx("span",{children:"Telegram"})]})]}),y.jsx(sN,{children:"Приєднуйся до спільноти!"})]})]})]})}),uN=T.section`
  background-color:  var(--second-background);
`,cN=T.div`
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
   
  }
  
`,dN=T.h1`

    font-size: 32px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;
margin-bottom: 20px;

`,fN=T.div`
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
`,pN=T.div`
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
`,hN=T.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding:20px;

`,mN=T.div`
  padding: 16px;
      display: flex;
    align-content: center;
    align-items: center;
        justify-content: space-between;
`,gN=T.p`
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
 
`,vN=T.p`
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
`;const yN=T.div.attrs({className:"card-buttons"})`
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
`,wN=T.div`
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
`,SN=()=>{const[e,t]=b.useState([]),[n,r]=b.useState(!0),i=Dt(h=>h.favorites.items),o=Dt(h=>h.cart.items),[a,l]=b.useState(1),[s,u]=b.useState(1),c=Qi(),d=ri();b.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[a]),b.useEffect(()=>{(async()=>{const v=new Date,w=new Date;w.setDate(v.getDate()-7);const p=w.toISOString();try{r(!0);const g=await fetch(`https://backenddidiv-production.up.railway.app/api/products?populate=*&filters[createdAt][$gte]=${p}&pagination[page]=${a}&pagination[pageSize]=24`);if(!g.ok)throw new Error(`HTTP error! Status: ${g.status}`);const x=await g.json();t(x.data),u(x.meta.pagination.pageCount)}catch(g){console.error("Помилка при завантаженні продуктів:",g)}finally{r(!1)}})()},[a]);const m=(h,v)=>{v.stopPropagation();const w=o.find(g=>g.id===h.id);if((w?w.quantity:0)>=h.stock){J.error(`Вибачте, доступно лише ${h.stock} шт.`);return}d(Fa({...h,quantity:1})),J.success(`${h.name} додано в кошик!`)},f=(h,v)=>{v.stopPropagation();const w=i.some(p=>p.id===h.id);d(Ba(h)),w?J.warning(`${h.name} видалено з обраного`):J.info(`${h.name} додано в обране`)};return n?y.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"},children:y.jsx(Lu,{height:100,width:100,radius:5,color:"var(--orange-color)",ariaLabel:"ball-triangle-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):y.jsxs(uN,{children:[y.jsxs(cN,{children:[y.jsx(oo,{autoClose:1500}),y.jsx(dN,{children:"Нові товари"}),y.jsx(fN,{children:e.map(h=>{var w,p;const v=i.some(g=>g.id===h.id);return y.jsxs(pN,{onClick:()=>c(`/product/${h.id}`),children:[y.jsx(hN,{src:(p=(w=h.images)==null?void 0:w[0])==null?void 0:p.url,alt:h.name}),y.jsx(gN,{children:h.name}),y.jsxs(mN,{children:[y.jsxs(vN,{children:[h.price," грн"]}),y.jsxs(yN,{children:[y.jsx(xN,{onClick:g=>m(h,g),children:y.jsx(ja,{size:24,color:"black"})}),y.jsx(bN,{onClick:g=>f(h,g),children:y.jsx(zh,{size:24,fill:v?"#ff4d4f":"none",color:v?"#ff4d4f":"#000000"})})]})]})]},h.id)})}),y.jsxs(wN,{children:[y.jsx(Vd,{onClick:()=>l(h=>Math.max(h-1,1)),disabled:a===1,children:"Назад"}),Array.from({length:s},(h,v)=>y.jsx(Vd,{onClick:()=>l(v+1),active:a===v+1,children:v+1},v)),y.jsx(Vd,{onClick:()=>l(h=>Math.min(h+1,s)),disabled:a===s,children:"Вперед"})]})]})," "]})};function _N(){return y.jsxs(TM,{children:[y.jsx(u3,{}),y.jsx(KF,{}),y.jsx(b.Suspense,{fallback:y.jsx(s3,{}),children:y.jsx(cE,{children:y.jsxs(ut,{path:"/",element:y.jsx(eO,{}),children:[y.jsx(ut,{index:!0,element:y.jsx(WI,{})}),y.jsx(ut,{path:"catalog",element:y.jsx(wM,{})}),y.jsx(ut,{path:"/catalog/:category",element:y.jsx(qj,{})}),y.jsx(ut,{path:"/product/:id",element:y.jsx(ZL,{})}),y.jsx(ut,{path:"cart",element:y.jsx(ER,{})}),y.jsx(ut,{path:"favorite",element:y.jsx(GR,{})}),y.jsx(ut,{path:"/catalog/new",element:y.jsx(SN,{})}),y.jsx(ut,{path:"checkout",element:y.jsx(MF,{})}),y.jsx(ut,{path:"/order-confirmation",element:y.jsx(FF,{})}),y.jsx(ut,{path:"about",element:y.jsx(XF,{})}),y.jsx(ut,{path:"contacts",element:y.jsx(lN,{})}),y.jsx(ut,{path:"delivery",element:y.jsx(QR,{})}),y.jsx(ut,{path:"*",element:y.jsx(kM,{})})]})})})]})}var Im="persist:",H2="persist/FLUSH",jm="persist/REHYDRATE",U2="persist/PAUSE",W2="persist/PERSIST",G2="persist/PURGE",Y2="persist/REGISTER",EN=-1;function Zs(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Zs=function(n){return typeof n}:Zs=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Zs(e)}function v1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function CN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?v1(n,!0).forEach(function(r){kN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function kN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function TN(e,t,n,r){r.debug;var i=CN({},n);return e&&Zs(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function PN(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:Im).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(E){return E}:typeof e.serialize=="function"?l=e.serialize:l=ON;var s=e.writeFailHandler||null,u={},c={},d=[],m=null,f=null,h=function(E){Object.keys(E).forEach(function(k){p(k)&&u[k]!==E[k]&&d.indexOf(k)===-1&&d.push(k)}),Object.keys(u).forEach(function(k){E[k]===void 0&&p(k)&&d.indexOf(k)===-1&&u[k]!==void 0&&d.push(k)}),m===null&&(m=setInterval(v,i)),u=E};function v(){if(d.length===0){m&&clearInterval(m),m=null;return}var S=d.shift(),E=r.reduce(function(k,_){return _.in(k,S,u)},u[S]);if(E!==void 0)try{c[S]=l(E)}catch(k){console.error("redux-persist/createPersistoid: error serializing state",k)}else delete c[S];d.length===0&&w()}function w(){Object.keys(c).forEach(function(S){u[S]===void 0&&delete c[S]}),f=a.setItem(o,l(c)).catch(g)}function p(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function g(S){s&&s(S)}var x=function(){for(;d.length!==0;)v();return f||Promise.resolve()};return{update:h,flush:x}}function ON(e){return JSON.stringify(e)}function MN(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Im).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=$N,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,c){return c.out(u,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function $N(e){return JSON.parse(e)}function IN(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Im).concat(e.key);return t.removeItem(n,jN)}function jN(e){}function y1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function On(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?y1(n,!0).forEach(function(r){DN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function DN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function LN(e,t){if(e==null)return{};var n=RN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function RN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var AN=5e3;function q2(e,t){var n=e.version!==void 0?e.version:EN;e.debug;var r=e.stateReconciler===void 0?TN:e.stateReconciler,i=e.getStoredState||MN,o=e.timeout!==void 0?e.timeout:AN,a=null,l=!1,s=!0,u=function(d){return d._persist.rehydrated&&a&&!s&&a.update(d),d};return function(c,d){var m=c||{},f=m._persist,h=LN(m,["_persist"]),v=h;if(d.type===W2){var w=!1,p=function(C,O){w||(d.rehydrate(e.key,C,O),w=!0)};if(o&&setTimeout(function(){!w&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=PN(e)),f)return On({},t(v,d),{_persist:f});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(_){var C=e.migrate||function(O,$){return Promise.resolve(O)};C(_,n).then(function(O){p(O)},function(O){p(void 0,O)})},function(_){p(void 0,_)}),On({},t(v,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===G2)return l=!0,d.result(IN(e)),On({},t(v,d),{_persist:f});if(d.type===H2)return d.result(a&&a.flush()),On({},t(v,d),{_persist:f});if(d.type===U2)s=!0;else if(d.type===jm){if(l)return On({},v,{_persist:On({},f,{rehydrated:!0})});if(d.key===e.key){var g=t(v,d),x=d.payload,S=r!==!1&&x!==void 0?r(x,c,g,e):g,E=On({},S,{_persist:On({},f,{rehydrated:!0})});return u(E)}}}if(!f)return t(c,d);var k=t(v,d);return k===v?c:u(On({},k,{_persist:f}))}}function x1(e){return zN(e)||NN(e)||FN()}function FN(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function NN(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function zN(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function b1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Mp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?b1(n,!0).forEach(function(r){BN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function BN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X2={registry:[],bootstrapped:!1},VN=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:X2,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Y2:return Mp({},t,{registry:[].concat(x1(t.registry),[n.key])});case jm:var r=t.registry.indexOf(n.key),i=x1(t.registry);return i.splice(r,1),Mp({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function HN(e,t,n){var r=n||!1,i=om(VN,X2,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:Y2,key:u})},a=function(u,c,d){var m={type:jm,payload:c,err:d,key:u};e.dispatch(m),i.dispatch(m),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Mp({},i,{purge:function(){var u=[];return e.dispatch({type:G2,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:H2,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){e.dispatch({type:U2})},persist:function(){e.dispatch({type:W2,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var Dm={},Lm={};Lm.__esModule=!0;Lm.default=GN;function Qs(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Qs=function(n){return typeof n}:Qs=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Qs(e)}function Hd(){}var UN={getItem:Hd,setItem:Hd,removeItem:Hd};function WN(e){if((typeof self>"u"?"undefined":Qs(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function GN(e){var t="".concat(e,"Storage");return WN(t)?self[t]:UN}Dm.__esModule=!0;Dm.default=XN;var YN=qN(Lm);function qN(e){return e&&e.__esModule?e:{default:e}}function XN(e){var t=(0,YN.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var Rm=void 0,KN=ZN(Dm);function ZN(e){return e&&e.__esModule?e:{default:e}}var QN=(0,KN.default)("local");Rm=QN;const JN={key:"cart",storage:Rm},ez={key:"favorites",storage:Rm},tz=q2(JN,aI),nz=q2(ez,Gj),K2=H$({reducer:{cart:tz,favorites:nz},middleware:e=>e({serializableCheck:!1})});HN(K2);Xd.createRoot(document.getElementById("root")).render(y.jsx(fP,{store:K2,children:y.jsx(q.StrictMode,{children:y.jsx(vE,{basename:"/Didiv/",children:y.jsx(_N,{})})})}));
