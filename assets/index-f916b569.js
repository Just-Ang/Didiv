function q_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var J=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function g1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function _t(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var v1={exports:{}},Ql={},y1={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),K_=Symbol.for("react.portal"),Z_=Symbol.for("react.fragment"),Q_=Symbol.for("react.strict_mode"),J_=Symbol.for("react.profiler"),eE=Symbol.for("react.provider"),tE=Symbol.for("react.context"),nE=Symbol.for("react.forward_ref"),rE=Symbol.for("react.suspense"),iE=Symbol.for("react.memo"),oE=Symbol.for("react.lazy"),Dm=Symbol.iterator;function aE(e){return e===null||typeof e!="object"?null:(e=Dm&&e[Dm]||e["@@iterator"],typeof e=="function"?e:null)}var x1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b1=Object.assign,w1={};function Xi(e,t,n){this.props=e,this.context=t,this.refs=w1,this.updater=n||x1}Xi.prototype.isReactComponent={};Xi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function S1(){}S1.prototype=Xi.prototype;function Ip(e,t,n){this.props=e,this.context=t,this.refs=w1,this.updater=n||x1}var jp=Ip.prototype=new S1;jp.constructor=Ip;b1(jp,Xi.prototype);jp.isPureReactComponent=!0;var Rm=Array.isArray,_1=Object.prototype.hasOwnProperty,$p={current:null},E1={key:!0,ref:!0,__self:!0,__source:!0};function C1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)_1.call(t,r)&&!E1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ea,type:e,key:o,ref:a,props:i,_owner:$p.current}}function sE(e,t){return{$$typeof:Ea,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Dp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ea}function lE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Lm=/\/+/g;function xc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lE(""+e.key):t.toString(36)}function Es(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ea:case K_:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+xc(a,0):r,Rm(i)?(n="",e!=null&&(n=e.replace(Lm,"$&/")+"/"),Es(i,t,n,"",function(u){return u})):i!=null&&(Dp(i)&&(i=sE(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Lm,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Rm(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+xc(o,l);a+=Es(o,t,n,s,i)}else if(s=aE(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+xc(o,l++),a+=Es(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ua(e,t,n){if(e==null)return e;var r=[],i=0;return Es(e,r,"","",function(o){return t.call(n,o,i++)}),r}function uE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ct={current:null},Cs={transition:null},cE={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:Cs,ReactCurrentOwner:$p};ne.Children={map:Ua,forEach:function(e,t,n){Ua(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ua(e,function(){t++}),t},toArray:function(e){return Ua(e,function(t){return t})||[]},only:function(e){if(!Dp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ne.Component=Xi;ne.Fragment=Z_;ne.Profiler=J_;ne.PureComponent=Ip;ne.StrictMode=Q_;ne.Suspense=rE;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cE;ne.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=b1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=$p.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)_1.call(t,s)&&!E1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ea,type:e.type,key:i,ref:o,props:r,_owner:a}};ne.createContext=function(e){return e={$$typeof:tE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:eE,_context:e},e.Consumer=e};ne.createElement=C1;ne.createFactory=function(e){var t=C1.bind(null,e);return t.type=e,t};ne.createRef=function(){return{current:null}};ne.forwardRef=function(e){return{$$typeof:nE,render:e}};ne.isValidElement=Dp;ne.lazy=function(e){return{$$typeof:oE,_payload:{_status:-1,_result:e},_init:uE}};ne.memo=function(e,t){return{$$typeof:iE,type:e,compare:t===void 0?null:t}};ne.startTransition=function(e){var t=Cs.transition;Cs.transition={};try{e()}finally{Cs.transition=t}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(e,t){return ct.current.useCallback(e,t)};ne.useContext=function(e){return ct.current.useContext(e)};ne.useDebugValue=function(){};ne.useDeferredValue=function(e){return ct.current.useDeferredValue(e)};ne.useEffect=function(e,t){return ct.current.useEffect(e,t)};ne.useId=function(){return ct.current.useId()};ne.useImperativeHandle=function(e,t,n){return ct.current.useImperativeHandle(e,t,n)};ne.useInsertionEffect=function(e,t){return ct.current.useInsertionEffect(e,t)};ne.useLayoutEffect=function(e,t){return ct.current.useLayoutEffect(e,t)};ne.useMemo=function(e,t){return ct.current.useMemo(e,t)};ne.useReducer=function(e,t,n){return ct.current.useReducer(e,t,n)};ne.useRef=function(e){return ct.current.useRef(e)};ne.useState=function(e){return ct.current.useState(e)};ne.useSyncExternalStore=function(e,t,n){return ct.current.useSyncExternalStore(e,t,n)};ne.useTransition=function(){return ct.current.useTransition()};ne.version="18.2.0";y1.exports=ne;var b=y1.exports;const W=g1(b),Hd=q_({__proto__:null,default:W},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dE=b,fE=Symbol.for("react.element"),pE=Symbol.for("react.fragment"),hE=Object.prototype.hasOwnProperty,mE=dE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gE={key:!0,ref:!0,__self:!0,__source:!0};function k1(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)hE.call(t,r)&&!gE.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:fE,type:e,key:o,ref:a,props:i,_owner:mE.current}}Ql.Fragment=pE;Ql.jsx=k1;Ql.jsxs=k1;v1.exports=Ql;var v=v1.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qo(){return qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qo.apply(this,arguments)}var ar;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ar||(ar={}));const Am="popstate";function vE(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Wd("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Qs(i)}return xE(t,n,null,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function yE(){return Math.random().toString(36).substr(2,8)}function Fm(e,t){return{usr:e.state,key:e.key,idx:t}}function Wd(e,t,n,r){return n===void 0&&(n=null),qo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?qi(t):t,{state:n,key:t&&t.key||r||yE()})}function Qs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function qi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function xE(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=ar.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(qo({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){l=ar.Pop;let S=c(),p=S==null?null:S-u;u=S,s&&s({action:l,location:y.location,delta:p})}function h(S,p){l=ar.Push;let m=Wd(y.location,S,p);n&&n(m,S),u=c()+1;let x=Fm(m,u),w=y.createHref(m);try{a.pushState(x,"",w)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(w)}o&&s&&s({action:l,location:y.location,delta:1})}function f(S,p){l=ar.Replace;let m=Wd(y.location,S,p);n&&n(m,S),u=c();let x=Fm(m,u),w=y.createHref(m);a.replaceState(x,"",w),o&&s&&s({action:l,location:y.location,delta:0})}function g(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof S=="string"?S:Qs(S);return je(p,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,p)}let y={get action(){return l},get location(){return e(i,a)},listen(S){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Am,d),s=S,()=>{i.removeEventListener(Am,d),s=null}},createHref(S){return t(i,S)},createURL:g,encodeLocation(S){let p=g(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:f,go(S){return a.go(S)}};return y}var Nm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Nm||(Nm={}));function bE(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?qi(t):t,i=Lp(r.pathname||"/",n);if(i==null)return null;let o=T1(e);wE(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=ME(o[l],$E(i));return a}function T1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(je(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=dr([r,s.relativePath]),c=n.concat(s);o.children&&o.children.length>0&&(je(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),T1(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:OE(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of O1(o.path))i(o,a,s)}),t}function O1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=O1(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function wE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:PE(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const SE=/^:\w+$/,_E=3,EE=2,CE=1,kE=10,TE=-2,zm=e=>e==="*";function OE(e,t){let n=e.split("/"),r=n.length;return n.some(zm)&&(r+=TE),t&&(r+=EE),n.filter(i=>!zm(i)).reduce((i,o)=>i+(SE.test(o)?_E:o===""?CE:kE),r)}function PE(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ME(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=IE({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;o.push({params:r,pathname:dr([i,c.pathname]),pathnameBase:AE(dr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=dr([i,c.pathnameBase]))}return o}function IE(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=jE(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";a=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=DE(l[d]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:e}}function jE(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Rp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function $E(e){try{return decodeURI(e)}catch(t){return Rp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function DE(e,t){try{return decodeURIComponent(e)}catch(n){return Rp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Lp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function RE(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?qi(e):e;return{pathname:n?n.startsWith("/")?n:LE(n,t):t,search:FE(r),hash:NE(i)}}function LE(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function P1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function M1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=qi(e):(i=qo({},e),je(!i.pathname||!i.pathname.includes("?"),bc("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),bc("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),bc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=RE(i,l),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const dr=e=>e.join("/").replace(/\/\/+/g,"/"),AE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),FE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,NE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const I1=["post","put","patch","delete"];new Set(I1);const VE=["get",...I1];new Set(VE);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Js(){return Js=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Js.apply(this,arguments)}const Ap=b.createContext(null),BE=b.createContext(null),Ki=b.createContext(null),Jl=b.createContext(null),Xn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),j1=b.createContext(null);function UE(e,t){let{relative:n}=t===void 0?{}:t;Ca()||je(!1);let{basename:r,navigator:i}=b.useContext(Ki),{hash:o,pathname:a,search:l}=R1(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:dr([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Ca(){return b.useContext(Jl)!=null}function Zi(){return Ca()||je(!1),b.useContext(Jl).location}function $1(e){b.useContext(Ki).static||b.useLayoutEffect(e)}function eu(){let{isDataRoute:e}=b.useContext(Xn);return e?i2():HE()}function HE(){Ca()||je(!1);let e=b.useContext(Ap),{basename:t,navigator:n}=b.useContext(Ki),{matches:r}=b.useContext(Xn),{pathname:i}=Zi(),o=JSON.stringify(P1(r).map(s=>s.pathnameBase)),a=b.useRef(!1);return $1(()=>{a.current=!0}),b.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let c=M1(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:dr([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}const WE=b.createContext(null);function GE(e){let t=b.useContext(Xn).outlet;return t&&b.createElement(WE.Provider,{value:e},t)}function D1(){let{matches:e}=b.useContext(Xn),t=e[e.length-1];return t?t.params:{}}function R1(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.useContext(Xn),{pathname:i}=Zi(),o=JSON.stringify(P1(r).map(a=>a.pathnameBase));return b.useMemo(()=>M1(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function YE(e,t){return XE(e,t)}function XE(e,t,n){Ca()||je(!1);let{navigator:r}=b.useContext(Ki),{matches:i}=b.useContext(Xn),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Zi(),u;if(t){var c;let y=typeof t=="string"?qi(t):t;l==="/"||(c=y.pathname)!=null&&c.startsWith(l)||je(!1),u=y}else u=s;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",f=bE(e,{pathname:h}),g=JE(f&&f.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:dr([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:dr([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&g?b.createElement(Jl.Provider,{value:{location:Js({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ar.Pop}},g):g}function qE(){let e=r2(),t=zE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,o)}const KE=b.createElement(qE,null);class ZE extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?b.createElement(Xn.Provider,{value:this.props.routeContext},b.createElement(j1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function QE(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Ap);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Xn.Provider,{value:t},r)}function JE(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||je(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let c=s.route.id?a==null?void 0:a[s.route.id]:null,d=null;n&&(d=s.route.errorElement||KE);let h=t.concat(o.slice(0,u+1)),f=()=>{let g;return c?g=d:s.route.Component?g=b.createElement(s.route.Component,null):s.route.element?g=s.route.element:g=l,b.createElement(QE,{match:s,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:g})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?b.createElement(ZE,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var L1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(L1||{}),el=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(el||{});function e2(e){let t=b.useContext(Ap);return t||je(!1),t}function t2(e){let t=b.useContext(BE);return t||je(!1),t}function n2(e){let t=b.useContext(Xn);return t||je(!1),t}function A1(e){let t=n2(),n=t.matches[t.matches.length-1];return n.route.id||je(!1),n.route.id}function r2(){var e;let t=b.useContext(j1),n=t2(el.UseRouteError),r=A1(el.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function i2(){let{router:e}=e2(L1.UseNavigateStable),t=A1(el.UseNavigateStable),n=b.useRef(!1);return $1(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Js({fromRouteId:t},o)))},[e,t])}function o2(e){return GE(e.context)}function mt(e){je(!1)}function a2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ar.Pop,navigator:o,static:a=!1}=e;Ca()&&je(!1);let l=t.replace(/^\/*/,"/"),s=b.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=qi(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:f="default"}=r,g=b.useMemo(()=>{let y=Lp(u,l);return y==null?null:{location:{pathname:y,search:c,hash:d,state:h,key:f},navigationType:i}},[l,u,c,d,h,f,i]);return g==null?null:b.createElement(Ki.Provider,{value:s},b.createElement(Jl.Provider,{children:n,value:g}))}function s2(e){let{children:t,location:n}=e;return YE(Gd(t),n)}new Promise(()=>{});function Gd(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Gd(r.props.children,o));return}r.type!==mt&&je(!1),!r.props.index||!r.props.children||je(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Gd(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yd(){return Yd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yd.apply(this,arguments)}function l2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function u2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function c2(e,t){return e.button===0&&(!t||t==="_self")&&!u2(e)}const d2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],f2="startTransition",Vm=Hd[f2];function p2(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=vE({window:i,v5Compat:!0}));let a=o.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=b.useCallback(d=>{u&&Vm?Vm(()=>s(d)):s(d)},[s,u]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(a2,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const h2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",m2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$e=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:c}=t,d=l2(t,d2),{basename:h}=b.useContext(Ki),f,g=!1;if(typeof u=="string"&&m2.test(u)&&(f=u,h2))try{let m=new URL(window.location.href),x=u.startsWith("//")?new URL(m.protocol+u):new URL(u),w=Lp(x.pathname,h);x.origin===m.origin&&w!=null?u=w+x.search+x.hash:g=!0}catch{}let y=UE(u,{relative:i}),S=g2(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:i});function p(m){r&&r(m),m.defaultPrevented||S(m)}return b.createElement("a",Yd({},d,{href:f||y,onClick:g||o?r:p,ref:n,target:s}))});var Bm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Bm||(Bm={}));var Um;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Um||(Um={}));function g2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=eu(),s=Zi(),u=R1(e,{relative:a});return b.useCallback(c=>{if(c2(c,n)){c.preventDefault();let d=r!==void 0?r:Qs(s)===Qs(u);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}var Xd={},F1={exports:{}},Rt={},N1={exports:{}},z1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,D){var N=O.length;O.push(D);e:for(;0<N;){var B=N-1>>>1,z=O[B];if(0<i(z,D))O[B]=D,O[N]=z,N=B;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var D=O[0],N=O.pop();if(N!==D){O[0]=N;e:for(var B=0,z=O.length,G=z>>>1;B<G;){var Q=2*(B+1)-1,Z=O[Q],K=Q+1,re=O[K];if(0>i(Z,N))K<z&&0>i(re,Z)?(O[B]=re,O[K]=N,B=K):(O[B]=Z,O[Q]=N,B=Q);else if(K<z&&0>i(re,N))O[B]=re,O[K]=N,B=K;else break e}}return D}function i(O,D){var N=O.sortIndex-D.sortIndex;return N!==0?N:O.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,d=null,h=3,f=!1,g=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(O){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=O)r(u),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(u)}}function w(O){if(y=!1,x(O),!g)if(n(s)!==null)g=!0,F(E);else{var D=n(u);D!==null&&A(w,D.startTime-O)}}function E(O,D){g=!1,y&&(y=!1,p(C),C=-1),f=!0;var N=h;try{for(x(D),d=n(s);d!==null&&(!(d.expirationTime>D)||O&&!$());){var B=d.callback;if(typeof B=="function"){d.callback=null,h=d.priorityLevel;var z=B(d.expirationTime<=D);D=e.unstable_now(),typeof z=="function"?d.callback=z:d===n(s)&&r(s),x(D)}else r(s);d=n(s)}if(d!==null)var G=!0;else{var Q=n(u);Q!==null&&A(w,Q.startTime-D),G=!1}return G}finally{d=null,h=N,f=!1}}var k=!1,_=null,C=-1,M=5,I=-1;function $(){return!(e.unstable_now()-I<M)}function P(){if(_!==null){var O=e.unstable_now();I=O;var D=!0;try{D=_(!0,O)}finally{D?j():(k=!1,_=null)}}else k=!1}var j;if(typeof m=="function")j=function(){m(P)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,R=L.port2;L.port1.onmessage=P,j=function(){R.postMessage(null)}}else j=function(){S(P,0)};function F(O){_=O,k||(k=!0,j())}function A(O,D){C=S(function(){O(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||f||(g=!0,F(E))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var N=h;h=D;try{return O()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,D){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var N=h;h=O;try{return D()}finally{h=N}},e.unstable_scheduleCallback=function(O,D,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,O){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=N+z,O={id:c++,callback:D,priorityLevel:O,startTime:N,expirationTime:z,sortIndex:-1},N>B?(O.sortIndex=N,t(u,O),n(s)===null&&O===n(u)&&(y?(p(C),C=-1):y=!0,A(w,N-B))):(O.sortIndex=z,t(s,O),g||f||(g=!0,F(E))),O},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(O){var D=h;return function(){var N=h;h=D;try{return O.apply(this,arguments)}finally{h=N}}}})(z1);N1.exports=z1;var v2=N1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V1=b,$t=v2;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var B1=new Set,Ko={};function Jr(e,t){$i(e,t),$i(e+"Capture",t)}function $i(e,t){for(Ko[e]=t,e=0;e<t.length;e++)B1.add(t[e])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qd=Object.prototype.hasOwnProperty,y2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hm={},Wm={};function x2(e){return qd.call(Wm,e)?!0:qd.call(Hm,e)?!1:y2.test(e)?Wm[e]=!0:(Hm[e]=!0,!1)}function b2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function w2(e,t,n,r){if(t===null||typeof t>"u"||b2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function dt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Xe[e]=new dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Xe[t]=new dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Xe[e]=new dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Xe[e]=new dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Xe[e]=new dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Xe[e]=new dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Xe[e]=new dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Xe[e]=new dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Xe[e]=new dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fp=/[\-:]([a-z])/g;function Np(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fp,Np);Xe[t]=new dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fp,Np);Xe[t]=new dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fp,Np);Xe[t]=new dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Xe[e]=new dt(e,1,!1,e.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Xe[e]=new dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function zp(e,t,n,r){var i=Xe.hasOwnProperty(t)?Xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(w2(t,n,i,r)&&(n=null),r||i===null?x2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qn=V1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ha=Symbol.for("react.element"),pi=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),Vp=Symbol.for("react.strict_mode"),Kd=Symbol.for("react.profiler"),U1=Symbol.for("react.provider"),H1=Symbol.for("react.context"),Bp=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),Qd=Symbol.for("react.suspense_list"),Up=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),W1=Symbol.for("react.offscreen"),Gm=Symbol.iterator;function fo(e){return e===null||typeof e!="object"?null:(e=Gm&&e[Gm]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,wc;function To(e){if(wc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wc=t&&t[1]||""}return`
`+wc+e}var Sc=!1;function _c(e,t){if(!e||Sc)return"";Sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Sc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?To(e):""}function S2(e){switch(e.tag){case 5:return To(e.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return e=_c(e.type,!1),e;case 11:return e=_c(e.type.render,!1),e;case 1:return e=_c(e.type,!0),e;default:return""}}function Jd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hi:return"Fragment";case pi:return"Portal";case Kd:return"Profiler";case Vp:return"StrictMode";case Zd:return"Suspense";case Qd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case H1:return(e.displayName||"Context")+".Consumer";case U1:return(e._context.displayName||"Context")+".Provider";case Bp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Up:return t=e.displayName||null,t!==null?t:Jd(e.type)||"Memo";case nr:t=e._payload,e=e._init;try{return Jd(e(t))}catch{}}return null}function _2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jd(t);case 8:return t===Vp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function G1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function E2(e){var t=G1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wa(e){e._valueTracker||(e._valueTracker=E2(e))}function Y1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=G1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function tl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ef(e,t){var n=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ym(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function X1(e,t){t=t.checked,t!=null&&zp(e,"checked",t,!1)}function tf(e,t){X1(e,t);var n=wr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nf(e,t.type,n):t.hasOwnProperty("defaultValue")&&nf(e,t.type,wr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nf(e,t,n){(t!=="number"||tl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Oo=Array.isArray;function Ci(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(Oo(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wr(n)}}function q1(e,t){var n=wr(t.value),r=wr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Km(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function K1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function of(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?K1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ga,Z1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ga.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},C2=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(e){C2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lo[t]=Lo[e]})});function Q1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Lo.hasOwnProperty(e)&&Lo[e]?(""+t).trim():t+"px"}function J1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Q1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var k2=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function af(e,t){if(t){if(k2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function sf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lf=null;function Hp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uf=null,ki=null,Ti=null;function Zm(e){if(e=Oa(e)){if(typeof uf!="function")throw Error(V(280));var t=e.stateNode;t&&(t=ou(t),uf(e.stateNode,e.type,t))}}function ey(e){ki?Ti?Ti.push(e):Ti=[e]:ki=e}function ty(){if(ki){var e=ki,t=Ti;if(Ti=ki=null,Zm(e),t)for(e=0;e<t.length;e++)Zm(t[e])}}function ny(e,t){return e(t)}function ry(){}var Ec=!1;function iy(e,t,n){if(Ec)return e(t,n);Ec=!0;try{return ny(e,t,n)}finally{Ec=!1,(ki!==null||Ti!==null)&&(ry(),ty())}}function Qo(e,t){var n=e.stateNode;if(n===null)return null;var r=ou(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var cf=!1;if(Vn)try{var po={};Object.defineProperty(po,"passive",{get:function(){cf=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{cf=!1}function T2(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ao=!1,nl=null,rl=!1,df=null,O2={onError:function(e){Ao=!0,nl=e}};function P2(e,t,n,r,i,o,a,l,s){Ao=!1,nl=null,T2.apply(O2,arguments)}function M2(e,t,n,r,i,o,a,l,s){if(P2.apply(this,arguments),Ao){if(Ao){var u=nl;Ao=!1,nl=null}else throw Error(V(198));rl||(rl=!0,df=u)}}function ei(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function oy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qm(e){if(ei(e)!==e)throw Error(V(188))}function I2(e){var t=e.alternate;if(!t){if(t=ei(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Qm(i),e;if(o===r)return Qm(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function ay(e){return e=I2(e),e!==null?sy(e):null}function sy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sy(e);if(t!==null)return t;e=e.sibling}return null}var ly=$t.unstable_scheduleCallback,Jm=$t.unstable_cancelCallback,j2=$t.unstable_shouldYield,$2=$t.unstable_requestPaint,Te=$t.unstable_now,D2=$t.unstable_getCurrentPriorityLevel,Wp=$t.unstable_ImmediatePriority,uy=$t.unstable_UserBlockingPriority,il=$t.unstable_NormalPriority,R2=$t.unstable_LowPriority,cy=$t.unstable_IdlePriority,tu=null,bn=null;function L2(e){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(tu,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:N2,A2=Math.log,F2=Math.LN2;function N2(e){return e>>>=0,e===0?32:31-(A2(e)/F2|0)|0}var Ya=64,Xa=4194304;function Po(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ol(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Po(l):(o&=a,o!==0&&(r=Po(o)))}else a=n&~i,a!==0?r=Po(a):o!==0&&(r=Po(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rn(t),i=1<<n,r|=e[n],t&=~i;return r}function z2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-rn(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=z2(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function ff(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dy(){var e=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),e}function Cc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ka(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rn(t),e[t]=n}function B2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-rn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Gp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function fy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var py,Yp,hy,my,gy,pf=!1,qa=[],fr=null,pr=null,hr=null,Jo=new Map,ea=new Map,ir=[],U2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eg(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(t.pointerId)}}function ho(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Oa(t),t!==null&&Yp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function H2(e,t,n,r,i){switch(t){case"focusin":return fr=ho(fr,e,t,n,r,i),!0;case"dragenter":return pr=ho(pr,e,t,n,r,i),!0;case"mouseover":return hr=ho(hr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Jo.set(o,ho(Jo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ea.set(o,ho(ea.get(o)||null,e,t,n,r,i)),!0}return!1}function vy(e){var t=Lr(e.target);if(t!==null){var n=ei(t);if(n!==null){if(t=n.tag,t===13){if(t=oy(n),t!==null){e.blockedOn=t,gy(e.priority,function(){hy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);lf=r,n.target.dispatchEvent(r),lf=null}else return t=Oa(n),t!==null&&Yp(t),e.blockedOn=n,!1;t.shift()}return!0}function tg(e,t,n){ks(e)&&n.delete(t)}function W2(){pf=!1,fr!==null&&ks(fr)&&(fr=null),pr!==null&&ks(pr)&&(pr=null),hr!==null&&ks(hr)&&(hr=null),Jo.forEach(tg),ea.forEach(tg)}function mo(e,t){e.blockedOn===t&&(e.blockedOn=null,pf||(pf=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,W2)))}function ta(e){function t(i){return mo(i,e)}if(0<qa.length){mo(qa[0],e);for(var n=1;n<qa.length;n++){var r=qa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fr!==null&&mo(fr,e),pr!==null&&mo(pr,e),hr!==null&&mo(hr,e),Jo.forEach(t),ea.forEach(t),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)vy(n),n.blockedOn===null&&ir.shift()}var Oi=qn.ReactCurrentBatchConfig,al=!0;function G2(e,t,n,r){var i=fe,o=Oi.transition;Oi.transition=null;try{fe=1,Xp(e,t,n,r)}finally{fe=i,Oi.transition=o}}function Y2(e,t,n,r){var i=fe,o=Oi.transition;Oi.transition=null;try{fe=4,Xp(e,t,n,r)}finally{fe=i,Oi.transition=o}}function Xp(e,t,n,r){if(al){var i=hf(e,t,n,r);if(i===null)Rc(e,t,r,sl,n),eg(e,r);else if(H2(i,e,t,n,r))r.stopPropagation();else if(eg(e,r),t&4&&-1<U2.indexOf(e)){for(;i!==null;){var o=Oa(i);if(o!==null&&py(o),o=hf(e,t,n,r),o===null&&Rc(e,t,r,sl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Rc(e,t,r,null,n)}}var sl=null;function hf(e,t,n,r){if(sl=null,e=Hp(r),e=Lr(e),e!==null)if(t=ei(e),t===null)e=null;else if(n=t.tag,n===13){if(e=oy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return sl=e,null}function yy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D2()){case Wp:return 1;case uy:return 4;case il:case R2:return 16;case cy:return 536870912;default:return 16}default:return 16}}var sr=null,qp=null,Ts=null;function xy(){if(Ts)return Ts;var e,t=qp,n=t.length,r,i="value"in sr?sr.value:sr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ts=i.slice(e,1<r?1-r:void 0)}function Os(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ka(){return!0}function ng(){return!1}function Lt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ka:ng,this.isPropagationStopped=ng,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),t}var Qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kp=Lt(Qi),Ta=Ee({},Qi,{view:0,detail:0}),X2=Lt(Ta),kc,Tc,go,nu=Ee({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==go&&(go&&e.type==="mousemove"?(kc=e.screenX-go.screenX,Tc=e.screenY-go.screenY):Tc=kc=0,go=e),kc)},movementY:function(e){return"movementY"in e?e.movementY:Tc}}),rg=Lt(nu),q2=Ee({},nu,{dataTransfer:0}),K2=Lt(q2),Z2=Ee({},Ta,{relatedTarget:0}),Oc=Lt(Z2),Q2=Ee({},Qi,{animationName:0,elapsedTime:0,pseudoElement:0}),J2=Lt(Q2),eC=Ee({},Qi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tC=Lt(eC),nC=Ee({},Qi,{data:0}),ig=Lt(nC),rC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=oC[e])?!!t[e]:!1}function Zp(){return aC}var sC=Ee({},Ta,{key:function(e){if(e.key){var t=rC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zp,charCode:function(e){return e.type==="keypress"?Os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lC=Lt(sC),uC=Ee({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),og=Lt(uC),cC=Ee({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zp}),dC=Lt(cC),fC=Ee({},Qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),pC=Lt(fC),hC=Ee({},nu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mC=Lt(hC),gC=[9,13,27,32],Qp=Vn&&"CompositionEvent"in window,Fo=null;Vn&&"documentMode"in document&&(Fo=document.documentMode);var vC=Vn&&"TextEvent"in window&&!Fo,by=Vn&&(!Qp||Fo&&8<Fo&&11>=Fo),ag=String.fromCharCode(32),sg=!1;function wy(e,t){switch(e){case"keyup":return gC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mi=!1;function yC(e,t){switch(e){case"compositionend":return Sy(t);case"keypress":return t.which!==32?null:(sg=!0,ag);case"textInput":return e=t.data,e===ag&&sg?null:e;default:return null}}function xC(e,t){if(mi)return e==="compositionend"||!Qp&&wy(e,t)?(e=xy(),Ts=qp=sr=null,mi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return by&&t.locale!=="ko"?null:t.data;default:return null}}var bC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bC[e.type]:t==="textarea"}function _y(e,t,n,r){ey(r),t=ll(t,"onChange"),0<t.length&&(n=new Kp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var No=null,na=null;function wC(e){Dy(e,0)}function ru(e){var t=yi(e);if(Y1(t))return e}function SC(e,t){if(e==="change")return t}var Ey=!1;if(Vn){var Pc;if(Vn){var Mc="oninput"in document;if(!Mc){var ug=document.createElement("div");ug.setAttribute("oninput","return;"),Mc=typeof ug.oninput=="function"}Pc=Mc}else Pc=!1;Ey=Pc&&(!document.documentMode||9<document.documentMode)}function cg(){No&&(No.detachEvent("onpropertychange",Cy),na=No=null)}function Cy(e){if(e.propertyName==="value"&&ru(na)){var t=[];_y(t,na,e,Hp(e)),iy(wC,t)}}function _C(e,t,n){e==="focusin"?(cg(),No=t,na=n,No.attachEvent("onpropertychange",Cy)):e==="focusout"&&cg()}function EC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ru(na)}function CC(e,t){if(e==="click")return ru(t)}function kC(e,t){if(e==="input"||e==="change")return ru(t)}function TC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ln=typeof Object.is=="function"?Object.is:TC;function ra(e,t){if(ln(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qd.call(t,i)||!ln(e[i],t[i]))return!1}return!0}function dg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fg(e,t){var n=dg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dg(n)}}function ky(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ky(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ty(){for(var e=window,t=tl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=tl(e.document)}return t}function Jp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function OC(e){var t=Ty(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ky(n.ownerDocument.documentElement,n)){if(r!==null&&Jp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=fg(n,o);var a=fg(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var PC=Vn&&"documentMode"in document&&11>=document.documentMode,gi=null,mf=null,zo=null,gf=!1;function pg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gf||gi==null||gi!==tl(r)||(r=gi,"selectionStart"in r&&Jp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zo&&ra(zo,r)||(zo=r,r=ll(mf,"onSelect"),0<r.length&&(t=new Kp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gi)))}function Za(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vi={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},Ic={},Oy={};Vn&&(Oy=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function iu(e){if(Ic[e])return Ic[e];if(!vi[e])return e;var t=vi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Oy)return Ic[e]=t[n];return e}var Py=iu("animationend"),My=iu("animationiteration"),Iy=iu("animationstart"),jy=iu("transitionend"),$y=new Map,hg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(e,t){$y.set(e,t),Jr(t,[e])}for(var jc=0;jc<hg.length;jc++){var $c=hg[jc],MC=$c.toLowerCase(),IC=$c[0].toUpperCase()+$c.slice(1);Er(MC,"on"+IC)}Er(Py,"onAnimationEnd");Er(My,"onAnimationIteration");Er(Iy,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(jy,"onTransitionEnd");$i("onMouseEnter",["mouseout","mouseover"]);$i("onMouseLeave",["mouseout","mouseover"]);$i("onPointerEnter",["pointerout","pointerover"]);$i("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function mg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,M2(r,t,void 0,e),e.currentTarget=null}function Dy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;mg(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;mg(i,l,u),o=s}}}if(rl)throw e=df,rl=!1,df=null,e}function me(e,t){var n=t[wf];n===void 0&&(n=t[wf]=new Set);var r=e+"__bubble";n.has(r)||(Ry(t,e,2,!1),n.add(r))}function Dc(e,t,n){var r=0;t&&(r|=4),Ry(n,e,r,t)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function ia(e){if(!e[Qa]){e[Qa]=!0,B1.forEach(function(n){n!=="selectionchange"&&(jC.has(n)||Dc(n,!1,e),Dc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qa]||(t[Qa]=!0,Dc("selectionchange",!1,t))}}function Ry(e,t,n,r){switch(yy(t)){case 1:var i=G2;break;case 4:i=Y2;break;default:i=Xp}n=i.bind(null,t,n,e),i=void 0,!cf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Rc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Lr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}iy(function(){var u=o,c=Hp(n),d=[];e:{var h=$y.get(e);if(h!==void 0){var f=Kp,g=e;switch(e){case"keypress":if(Os(n)===0)break e;case"keydown":case"keyup":f=lC;break;case"focusin":g="focus",f=Oc;break;case"focusout":g="blur",f=Oc;break;case"beforeblur":case"afterblur":f=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=rg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=K2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=dC;break;case Py:case My:case Iy:f=J2;break;case jy:f=pC;break;case"scroll":f=X2;break;case"wheel":f=mC;break;case"copy":case"cut":case"paste":f=tC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=og}var y=(t&4)!==0,S=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var m=u,x;m!==null;){x=m;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,p!==null&&(w=Qo(m,p),w!=null&&y.push(oa(m,w,x)))),S)break;m=m.return}0<y.length&&(h=new f(h,g,null,n,c),d.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",h&&n!==lf&&(g=n.relatedTarget||n.fromElement)&&(Lr(g)||g[Bn]))break e;if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(g=n.relatedTarget||n.toElement,f=u,g=g?Lr(g):null,g!==null&&(S=ei(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(f=null,g=u),f!==g)){if(y=rg,w="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=og,w="onPointerLeave",p="onPointerEnter",m="pointer"),S=f==null?h:yi(f),x=g==null?h:yi(g),h=new y(w,m+"leave",f,n,c),h.target=S,h.relatedTarget=x,w=null,Lr(c)===u&&(y=new y(p,m+"enter",g,n,c),y.target=x,y.relatedTarget=S,w=y),S=w,f&&g)t:{for(y=f,p=g,m=0,x=y;x;x=ri(x))m++;for(x=0,w=p;w;w=ri(w))x++;for(;0<m-x;)y=ri(y),m--;for(;0<x-m;)p=ri(p),x--;for(;m--;){if(y===p||p!==null&&y===p.alternate)break t;y=ri(y),p=ri(p)}y=null}else y=null;f!==null&&gg(d,h,f,y,!1),g!==null&&S!==null&&gg(d,S,g,y,!0)}}e:{if(h=u?yi(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var E=SC;else if(lg(h))if(Ey)E=kC;else{E=EC;var k=_C}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=CC);if(E&&(E=E(e,u))){_y(d,E,n,c);break e}k&&k(e,h,u),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&nf(h,"number",h.value)}switch(k=u?yi(u):window,e){case"focusin":(lg(k)||k.contentEditable==="true")&&(gi=k,mf=u,zo=null);break;case"focusout":zo=mf=gi=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,pg(d,n,c);break;case"selectionchange":if(PC)break;case"keydown":case"keyup":pg(d,n,c)}var _;if(Qp)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else mi?wy(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(by&&n.locale!=="ko"&&(mi||C!=="onCompositionStart"?C==="onCompositionEnd"&&mi&&(_=xy()):(sr=c,qp="value"in sr?sr.value:sr.textContent,mi=!0)),k=ll(u,C),0<k.length&&(C=new ig(C,e,null,n,c),d.push({event:C,listeners:k}),_?C.data=_:(_=Sy(n),_!==null&&(C.data=_)))),(_=vC?yC(e,n):xC(e,n))&&(u=ll(u,"onBeforeInput"),0<u.length&&(c=new ig("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=_))}Dy(d,t)})}function oa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ll(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Qo(e,n),o!=null&&r.unshift(oa(e,o,i)),o=Qo(e,t),o!=null&&r.push(oa(e,o,i))),e=e.return}return r}function ri(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gg(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Qo(n,o),s!=null&&a.unshift(oa(n,s,l))):i||(s=Qo(n,o),s!=null&&a.push(oa(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var $C=/\r\n?/g,DC=/\u0000|\uFFFD/g;function vg(e){return(typeof e=="string"?e:""+e).replace($C,`
`).replace(DC,"")}function Ja(e,t,n){if(t=vg(t),vg(e)!==t&&n)throw Error(V(425))}function ul(){}var vf=null,yf=null;function xf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bf=typeof setTimeout=="function"?setTimeout:void 0,RC=typeof clearTimeout=="function"?clearTimeout:void 0,yg=typeof Promise=="function"?Promise:void 0,LC=typeof queueMicrotask=="function"?queueMicrotask:typeof yg<"u"?function(e){return yg.resolve(null).then(e).catch(AC)}:bf;function AC(e){setTimeout(function(){throw e})}function Lc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ta(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ta(t)}function mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ji=Math.random().toString(36).slice(2),yn="__reactFiber$"+Ji,aa="__reactProps$"+Ji,Bn="__reactContainer$"+Ji,wf="__reactEvents$"+Ji,FC="__reactListeners$"+Ji,NC="__reactHandles$"+Ji;function Lr(e){var t=e[yn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bn]||n[yn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xg(e);e!==null;){if(n=e[yn])return n;e=xg(e)}return t}e=n,n=e.parentNode}return null}function Oa(e){return e=e[yn]||e[Bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function ou(e){return e[aa]||null}var Sf=[],xi=-1;function Cr(e){return{current:e}}function ve(e){0>xi||(e.current=Sf[xi],Sf[xi]=null,xi--)}function he(e,t){xi++,Sf[xi]=e.current,e.current=t}var Sr={},rt=Cr(Sr),xt=Cr(!1),Ur=Sr;function Di(e,t){var n=e.type.contextTypes;if(!n)return Sr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function bt(e){return e=e.childContextTypes,e!=null}function cl(){ve(xt),ve(rt)}function bg(e,t,n){if(rt.current!==Sr)throw Error(V(168));he(rt,t),he(xt,n)}function Ly(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,_2(e)||"Unknown",i));return Ee({},n,r)}function dl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sr,Ur=rt.current,he(rt,e),he(xt,xt.current),!0}function wg(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=Ly(e,t,Ur),r.__reactInternalMemoizedMergedChildContext=e,ve(xt),ve(rt),he(rt,e)):ve(xt),he(xt,n)}var jn=null,au=!1,Ac=!1;function Ay(e){jn===null?jn=[e]:jn.push(e)}function zC(e){au=!0,Ay(e)}function kr(){if(!Ac&&jn!==null){Ac=!0;var e=0,t=fe;try{var n=jn;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jn=null,au=!1}catch(i){throw jn!==null&&(jn=jn.slice(e+1)),ly(Wp,kr),i}finally{fe=t,Ac=!1}}return null}var bi=[],wi=0,fl=null,pl=0,zt=[],Vt=0,Hr=null,Rn=1,Ln="";function Mr(e,t){bi[wi++]=pl,bi[wi++]=fl,fl=e,pl=t}function Fy(e,t,n){zt[Vt++]=Rn,zt[Vt++]=Ln,zt[Vt++]=Hr,Hr=e;var r=Rn;e=Ln;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var o=32-rn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Rn=1<<32-rn(t)+i|n<<i|r,Ln=o+e}else Rn=1<<o|n<<i|r,Ln=e}function eh(e){e.return!==null&&(Mr(e,1),Fy(e,1,0))}function th(e){for(;e===fl;)fl=bi[--wi],bi[wi]=null,pl=bi[--wi],bi[wi]=null;for(;e===Hr;)Hr=zt[--Vt],zt[Vt]=null,Ln=zt[--Vt],zt[Vt]=null,Rn=zt[--Vt],zt[Vt]=null}var It=null,Pt=null,be=!1,tn=null;function Ny(e,t){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,Pt=mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,Pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hr!==null?{id:Rn,overflow:Ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,It=e,Pt=null,!0):!1;default:return!1}}function _f(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ef(e){if(be){var t=Pt;if(t){var n=t;if(!Sg(e,t)){if(_f(e))throw Error(V(418));t=mr(n.nextSibling);var r=It;t&&Sg(e,t)?Ny(r,n):(e.flags=e.flags&-4097|2,be=!1,It=e)}}else{if(_f(e))throw Error(V(418));e.flags=e.flags&-4097|2,be=!1,It=e}}}function _g(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function es(e){if(e!==It)return!1;if(!be)return _g(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xf(e.type,e.memoizedProps)),t&&(t=Pt)){if(_f(e))throw zy(),Error(V(418));for(;t;)Ny(e,t),t=mr(t.nextSibling)}if(_g(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pt=mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pt=null}}else Pt=It?mr(e.stateNode.nextSibling):null;return!0}function zy(){for(var e=Pt;e;)e=mr(e.nextSibling)}function Ri(){Pt=It=null,be=!1}function nh(e){tn===null?tn=[e]:tn.push(e)}var VC=qn.ReactCurrentBatchConfig;function Qt(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var hl=Cr(null),ml=null,Si=null,rh=null;function ih(){rh=Si=ml=null}function oh(e){var t=hl.current;ve(hl),e._currentValue=t}function Cf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pi(e,t){ml=e,rh=Si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(yt=!0),e.firstContext=null)}function Ht(e){var t=e._currentValue;if(rh!==e)if(e={context:e,memoizedValue:t,next:null},Si===null){if(ml===null)throw Error(V(308));Si=e,ml.dependencies={lanes:0,firstContext:e}}else Si=Si.next=e;return t}var Ar=null;function ah(e){Ar===null?Ar=[e]:Ar.push(e)}function Vy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ah(t)):(n.next=i.next,i.next=n),t.interleaved=n,Un(e,r)}function Un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rr=!1;function sh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function By(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function An(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Un(e,n)}return i=r.interleaved,i===null?(t.next=t,ah(r)):(t.next=i.next,i.next=t),r.interleaved=t,Un(e,n)}function Ps(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gp(e,n)}}function Eg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function gl(e,t,n,r){var i=e.updateQueue;rr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,c=u=s=null,l=o;do{var h=l.lane,f=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,y=l;switch(h=t,f=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(f,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(f,d,h):g,h==null)break e;d=Ee({},d,h);break e;case 2:rr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else f={eventTime:f,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=f,s=d):c=c.next=f,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Gr|=a,e.lanes=a,e.memoizedState=d}}function Cg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Uy=new V1.Component().refs;function kf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var su={isMounted:function(e){return(e=e._reactInternals)?ei(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lt(),i=yr(e),o=An(r,i);o.payload=t,n!=null&&(o.callback=n),t=gr(e,o,i),t!==null&&(on(t,e,i,r),Ps(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lt(),i=yr(e),o=An(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gr(e,o,i),t!==null&&(on(t,e,i,r),Ps(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),r=yr(e),i=An(n,r);i.tag=2,t!=null&&(i.callback=t),t=gr(e,i,r),t!==null&&(on(t,e,r,n),Ps(t,e,r))}};function kg(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ra(n,r)||!ra(i,o):!0}function Hy(e,t,n){var r=!1,i=Sr,o=t.contextType;return typeof o=="object"&&o!==null?o=Ht(o):(i=bt(t)?Ur:rt.current,r=t.contextTypes,o=(r=r!=null)?Di(e,i):Sr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=su,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Tg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&su.enqueueReplaceState(t,t.state,null)}function Tf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Uy,sh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ht(o):(o=bt(t)?Ur:rt.current,i.context=Di(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(kf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&su.enqueueReplaceState(i,i.state,null),gl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Uy&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function ts(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Og(e){var t=e._init;return t(e._payload)}function Wy(e){function t(p,m){if(e){var x=p.deletions;x===null?(p.deletions=[m],p.flags|=16):x.push(m)}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=xr(p,m),p.index=0,p.sibling=null,p}function o(p,m,x){return p.index=x,e?(x=p.alternate,x!==null?(x=x.index,x<m?(p.flags|=2,m):x):(p.flags|=2,m)):(p.flags|=1048576,m)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,m,x,w){return m===null||m.tag!==6?(m=Hc(x,p.mode,w),m.return=p,m):(m=i(m,x),m.return=p,m)}function s(p,m,x,w){var E=x.type;return E===hi?c(p,m,x.props.children,w,x.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nr&&Og(E)===m.type)?(w=i(m,x.props),w.ref=vo(p,m,x),w.return=p,w):(w=Rs(x.type,x.key,x.props,null,p.mode,w),w.ref=vo(p,m,x),w.return=p,w)}function u(p,m,x,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Wc(x,p.mode,w),m.return=p,m):(m=i(m,x.children||[]),m.return=p,m)}function c(p,m,x,w,E){return m===null||m.tag!==7?(m=Vr(x,p.mode,w,E),m.return=p,m):(m=i(m,x),m.return=p,m)}function d(p,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Hc(""+m,p.mode,x),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ha:return x=Rs(m.type,m.key,m.props,null,p.mode,x),x.ref=vo(p,null,m),x.return=p,x;case pi:return m=Wc(m,p.mode,x),m.return=p,m;case nr:var w=m._init;return d(p,w(m._payload),x)}if(Oo(m)||fo(m))return m=Vr(m,p.mode,x,null),m.return=p,m;ts(p,m)}return null}function h(p,m,x,w){var E=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:l(p,m,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ha:return x.key===E?s(p,m,x,w):null;case pi:return x.key===E?u(p,m,x,w):null;case nr:return E=x._init,h(p,m,E(x._payload),w)}if(Oo(x)||fo(x))return E!==null?null:c(p,m,x,w,null);ts(p,x)}return null}function f(p,m,x,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(x)||null,l(m,p,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ha:return p=p.get(w.key===null?x:w.key)||null,s(m,p,w,E);case pi:return p=p.get(w.key===null?x:w.key)||null,u(m,p,w,E);case nr:var k=w._init;return f(p,m,x,k(w._payload),E)}if(Oo(w)||fo(w))return p=p.get(x)||null,c(m,p,w,E,null);ts(m,w)}return null}function g(p,m,x,w){for(var E=null,k=null,_=m,C=m=0,M=null;_!==null&&C<x.length;C++){_.index>C?(M=_,_=null):M=_.sibling;var I=h(p,_,x[C],w);if(I===null){_===null&&(_=M);break}e&&_&&I.alternate===null&&t(p,_),m=o(I,m,C),k===null?E=I:k.sibling=I,k=I,_=M}if(C===x.length)return n(p,_),be&&Mr(p,C),E;if(_===null){for(;C<x.length;C++)_=d(p,x[C],w),_!==null&&(m=o(_,m,C),k===null?E=_:k.sibling=_,k=_);return be&&Mr(p,C),E}for(_=r(p,_);C<x.length;C++)M=f(_,p,C,x[C],w),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?C:M.key),m=o(M,m,C),k===null?E=M:k.sibling=M,k=M);return e&&_.forEach(function($){return t(p,$)}),be&&Mr(p,C),E}function y(p,m,x,w){var E=fo(x);if(typeof E!="function")throw Error(V(150));if(x=E.call(x),x==null)throw Error(V(151));for(var k=E=null,_=m,C=m=0,M=null,I=x.next();_!==null&&!I.done;C++,I=x.next()){_.index>C?(M=_,_=null):M=_.sibling;var $=h(p,_,I.value,w);if($===null){_===null&&(_=M);break}e&&_&&$.alternate===null&&t(p,_),m=o($,m,C),k===null?E=$:k.sibling=$,k=$,_=M}if(I.done)return n(p,_),be&&Mr(p,C),E;if(_===null){for(;!I.done;C++,I=x.next())I=d(p,I.value,w),I!==null&&(m=o(I,m,C),k===null?E=I:k.sibling=I,k=I);return be&&Mr(p,C),E}for(_=r(p,_);!I.done;C++,I=x.next())I=f(_,p,C,I.value,w),I!==null&&(e&&I.alternate!==null&&_.delete(I.key===null?C:I.key),m=o(I,m,C),k===null?E=I:k.sibling=I,k=I);return e&&_.forEach(function(P){return t(p,P)}),be&&Mr(p,C),E}function S(p,m,x,w){if(typeof x=="object"&&x!==null&&x.type===hi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ha:e:{for(var E=x.key,k=m;k!==null;){if(k.key===E){if(E=x.type,E===hi){if(k.tag===7){n(p,k.sibling),m=i(k,x.props.children),m.return=p,p=m;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nr&&Og(E)===k.type){n(p,k.sibling),m=i(k,x.props),m.ref=vo(p,k,x),m.return=p,p=m;break e}n(p,k);break}else t(p,k);k=k.sibling}x.type===hi?(m=Vr(x.props.children,p.mode,w,x.key),m.return=p,p=m):(w=Rs(x.type,x.key,x.props,null,p.mode,w),w.ref=vo(p,m,x),w.return=p,p=w)}return a(p);case pi:e:{for(k=x.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(p,m.sibling),m=i(m,x.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else t(p,m);m=m.sibling}m=Wc(x,p.mode,w),m.return=p,p=m}return a(p);case nr:return k=x._init,S(p,m,k(x._payload),w)}if(Oo(x))return g(p,m,x,w);if(fo(x))return y(p,m,x,w);ts(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(p,m.sibling),m=i(m,x),m.return=p,p=m):(n(p,m),m=Hc(x,p.mode,w),m.return=p,p=m),a(p)):n(p,m)}return S}var Li=Wy(!0),Gy=Wy(!1),Pa={},wn=Cr(Pa),sa=Cr(Pa),la=Cr(Pa);function Fr(e){if(e===Pa)throw Error(V(174));return e}function lh(e,t){switch(he(la,t),he(sa,e),he(wn,Pa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:of(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=of(t,e)}ve(wn),he(wn,t)}function Ai(){ve(wn),ve(sa),ve(la)}function Yy(e){Fr(la.current);var t=Fr(wn.current),n=of(t,e.type);t!==n&&(he(sa,e),he(wn,n))}function uh(e){sa.current===e&&(ve(wn),ve(sa))}var Se=Cr(0);function vl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fc=[];function ch(){for(var e=0;e<Fc.length;e++)Fc[e]._workInProgressVersionPrimary=null;Fc.length=0}var Ms=qn.ReactCurrentDispatcher,Nc=qn.ReactCurrentBatchConfig,Wr=0,_e=null,Re=null,Ve=null,yl=!1,Vo=!1,ua=0,BC=0;function Ke(){throw Error(V(321))}function dh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ln(e[n],t[n]))return!1;return!0}function fh(e,t,n,r,i,o){if(Wr=o,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ms.current=e===null||e.memoizedState===null?GC:YC,e=n(r,i),Vo){o=0;do{if(Vo=!1,ua=0,25<=o)throw Error(V(301));o+=1,Ve=Re=null,t.updateQueue=null,Ms.current=XC,e=n(r,i)}while(Vo)}if(Ms.current=xl,t=Re!==null&&Re.next!==null,Wr=0,Ve=Re=_e=null,yl=!1,t)throw Error(V(300));return e}function ph(){var e=ua!==0;return ua=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?_e.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Wt(){if(Re===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Ve===null?_e.memoizedState:Ve.next;if(t!==null)Ve=t,Re=e;else{if(e===null)throw Error(V(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Ve===null?_e.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function ca(e,t){return typeof t=="function"?t(e):t}function zc(e){var t=Wt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var c=u.lane;if((Wr&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,_e.lanes|=c,Gr|=c}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,ln(r,t.memoizedState)||(yt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,_e.lanes|=o,Gr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vc(e){var t=Wt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);ln(o,t.memoizedState)||(yt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Xy(){}function qy(e,t){var n=_e,r=Wt(),i=t(),o=!ln(r.memoizedState,i);if(o&&(r.memoizedState=i,yt=!0),r=r.queue,hh(Qy.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,da(9,Zy.bind(null,n,r,i,t),void 0,null),Be===null)throw Error(V(349));Wr&30||Ky(n,t,i)}return i}function Ky(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zy(e,t,n,r){t.value=n,t.getSnapshot=r,Jy(t)&&ex(e)}function Qy(e,t,n){return n(function(){Jy(t)&&ex(e)})}function Jy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ln(e,n)}catch{return!0}}function ex(e){var t=Un(e,1);t!==null&&on(t,e,1,-1)}function Pg(e){var t=mn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},t.queue=e,e=e.dispatch=WC.bind(null,_e,e),[t.memoizedState,e]}function da(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tx(){return Wt().memoizedState}function Is(e,t,n,r){var i=mn();_e.flags|=e,i.memoizedState=da(1|t,n,void 0,r===void 0?null:r)}function lu(e,t,n,r){var i=Wt();r=r===void 0?null:r;var o=void 0;if(Re!==null){var a=Re.memoizedState;if(o=a.destroy,r!==null&&dh(r,a.deps)){i.memoizedState=da(t,n,o,r);return}}_e.flags|=e,i.memoizedState=da(1|t,n,o,r)}function Mg(e,t){return Is(8390656,8,e,t)}function hh(e,t){return lu(2048,8,e,t)}function nx(e,t){return lu(4,2,e,t)}function rx(e,t){return lu(4,4,e,t)}function ix(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ox(e,t,n){return n=n!=null?n.concat([e]):null,lu(4,4,ix.bind(null,t,e),n)}function mh(){}function ax(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sx(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lx(e,t,n){return Wr&21?(ln(n,t)||(n=dy(),_e.lanes|=n,Gr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,yt=!0),e.memoizedState=n)}function UC(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=Nc.transition;Nc.transition={};try{e(!1),t()}finally{fe=n,Nc.transition=r}}function ux(){return Wt().memoizedState}function HC(e,t,n){var r=yr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cx(e))dx(t,n);else if(n=Vy(e,t,n,r),n!==null){var i=lt();on(n,e,r,i),fx(n,t,r)}}function WC(e,t,n){var r=yr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cx(e))dx(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,ln(l,a)){var s=t.interleaved;s===null?(i.next=i,ah(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Vy(e,t,i,r),n!==null&&(i=lt(),on(n,e,r,i),fx(n,t,r))}}function cx(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function dx(e,t){Vo=yl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gp(e,n)}}var xl={readContext:Ht,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},GC={readContext:Ht,useCallback:function(e,t){return mn().memoizedState=[e,t===void 0?null:t],e},useContext:Ht,useEffect:Mg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Is(4194308,4,ix.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Is(4194308,4,e,t)},useInsertionEffect:function(e,t){return Is(4,2,e,t)},useMemo:function(e,t){var n=mn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=HC.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var t=mn();return e={current:e},t.memoizedState=e},useState:Pg,useDebugValue:mh,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=Pg(!1),t=e[0];return e=UC.bind(null,e[1]),mn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_e,i=mn();if(be){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Be===null)throw Error(V(349));Wr&30||Ky(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Mg(Qy.bind(null,r,o,e),[e]),r.flags|=2048,da(9,Zy.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=mn(),t=Be.identifierPrefix;if(be){var n=Ln,r=Rn;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ua++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=BC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},YC={readContext:Ht,useCallback:ax,useContext:Ht,useEffect:hh,useImperativeHandle:ox,useInsertionEffect:nx,useLayoutEffect:rx,useMemo:sx,useReducer:zc,useRef:tx,useState:function(){return zc(ca)},useDebugValue:mh,useDeferredValue:function(e){var t=Wt();return lx(t,Re.memoizedState,e)},useTransition:function(){var e=zc(ca)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Xy,useSyncExternalStore:qy,useId:ux,unstable_isNewReconciler:!1},XC={readContext:Ht,useCallback:ax,useContext:Ht,useEffect:hh,useImperativeHandle:ox,useInsertionEffect:nx,useLayoutEffect:rx,useMemo:sx,useReducer:Vc,useRef:tx,useState:function(){return Vc(ca)},useDebugValue:mh,useDeferredValue:function(e){var t=Wt();return Re===null?t.memoizedState=e:lx(t,Re.memoizedState,e)},useTransition:function(){var e=Vc(ca)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:Xy,useSyncExternalStore:qy,useId:ux,unstable_isNewReconciler:!1};function Fi(e,t){try{var n="",r=t;do n+=S2(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Bc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Of(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qC=typeof WeakMap=="function"?WeakMap:Map;function px(e,t,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wl||(wl=!0,Ff=r),Of(e,t)},n}function hx(e,t,n){n=An(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Of(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Of(e,t),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ig(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qC;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=uk.bind(null,e,t,n),t.then(e,e))}function jg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $g(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=An(-1,1),t.tag=2,gr(n,t,1))),n.lanes|=1),e)}var KC=qn.ReactCurrentOwner,yt=!1;function at(e,t,n,r){t.child=e===null?Gy(t,null,n,r):Li(t,e.child,n,r)}function Dg(e,t,n,r,i){n=n.render;var o=t.ref;return Pi(t,i),r=fh(e,t,n,r,o,i),n=ph(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hn(e,t,i)):(be&&n&&eh(t),t.flags|=1,at(e,t,r,i),t.child)}function Rg(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!_h(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,mx(e,t,o,r,i)):(e=Rs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(a,r)&&e.ref===t.ref)return Hn(e,t,i)}return t.flags|=1,e=xr(o,r),e.ref=t.ref,e.return=t,t.child=e}function mx(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ra(o,r)&&e.ref===t.ref)if(yt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(yt=!0);else return t.lanes=e.lanes,Hn(e,t,i)}return Pf(e,t,n,r,i)}function gx(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Ei,Tt),Tt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(Ei,Tt),Tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(Ei,Tt),Tt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(Ei,Tt),Tt|=r;return at(e,t,i,n),t.child}function vx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pf(e,t,n,r,i){var o=bt(n)?Ur:rt.current;return o=Di(t,o),Pi(t,i),n=fh(e,t,n,r,o,i),r=ph(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hn(e,t,i)):(be&&r&&eh(t),t.flags|=1,at(e,t,n,i),t.child)}function Lg(e,t,n,r,i){if(bt(n)){var o=!0;dl(t)}else o=!1;if(Pi(t,i),t.stateNode===null)js(e,t),Hy(t,n,r),Tf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ht(u):(u=bt(n)?Ur:rt.current,u=Di(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Tg(t,a,r,u),rr=!1;var h=t.memoizedState;a.state=h,gl(t,r,a,i),s=t.memoizedState,l!==r||h!==s||xt.current||rr?(typeof c=="function"&&(kf(t,n,c,r),s=t.memoizedState),(l=rr||kg(t,n,l,r,h,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,By(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Qt(t.type,l),a.props=u,d=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ht(s):(s=bt(n)?Ur:rt.current,s=Di(t,s));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||h!==s)&&Tg(t,a,r,s),rr=!1,h=t.memoizedState,a.state=h,gl(t,r,a,i);var g=t.memoizedState;l!==d||h!==g||xt.current||rr?(typeof f=="function"&&(kf(t,n,f,r),g=t.memoizedState),(u=rr||kg(t,n,u,r,h,g,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Mf(e,t,n,r,o,i)}function Mf(e,t,n,r,i,o){vx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&wg(t,n,!1),Hn(e,t,o);r=t.stateNode,KC.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Li(t,e.child,null,o),t.child=Li(t,null,l,o)):at(e,t,l,o),t.memoizedState=r.state,i&&wg(t,n,!0),t.child}function yx(e){var t=e.stateNode;t.pendingContext?bg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bg(e,t.context,!1),lh(e,t.containerInfo)}function Ag(e,t,n,r,i){return Ri(),nh(i),t.flags|=256,at(e,t,n,r),t.child}var If={dehydrated:null,treeContext:null,retryLane:0};function jf(e){return{baseLanes:e,cachePool:null,transitions:null}}function xx(e,t,n){var r=t.pendingProps,i=Se.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(Se,i&1),e===null)return Ef(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=du(a,r,0,null),e=Vr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=jf(n),t.memoizedState=If,e):gh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ZC(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=xr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=xr(l,o):(o=Vr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?jf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=If,r}return o=e.child,e=o.sibling,r=xr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function gh(e,t){return t=du({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ns(e,t,n,r){return r!==null&&nh(r),Li(t,e.child,null,n),e=gh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ZC(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Bc(Error(V(422))),ns(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=du({mode:"visible",children:r.children},i,0,null),o=Vr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Li(t,e.child,null,a),t.child.memoizedState=jf(a),t.memoizedState=If,o);if(!(t.mode&1))return ns(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=Bc(o,r,void 0),ns(e,t,a,r)}if(l=(a&e.childLanes)!==0,yt||l){if(r=Be,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Un(e,i),on(r,e,i,-1))}return Sh(),r=Bc(Error(V(421))),ns(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ck.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Pt=mr(i.nextSibling),It=t,be=!0,tn=null,e!==null&&(zt[Vt++]=Rn,zt[Vt++]=Ln,zt[Vt++]=Hr,Rn=e.id,Ln=e.overflow,Hr=t),t=gh(t,r.children),t.flags|=4096,t)}function Fg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cf(e.return,t,n)}function Uc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function bx(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(at(e,t,r.children,n),r=Se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fg(e,n,t);else if(e.tag===19)Fg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(Se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Uc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Uc(t,!0,n,null,o);break;case"together":Uc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function js(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=xr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function QC(e,t,n){switch(t.tag){case 3:yx(t),Ri();break;case 5:Yy(t);break;case 1:bt(t.type)&&dl(t);break;case 4:lh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(hl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(Se,Se.current&1),t.flags|=128,null):n&t.child.childLanes?xx(e,t,n):(he(Se,Se.current&1),e=Hn(e,t,n),e!==null?e.sibling:null);he(Se,Se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return bx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Se,Se.current),r)break;return null;case 22:case 23:return t.lanes=0,gx(e,t,n)}return Hn(e,t,n)}var wx,$f,Sx,_x;wx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$f=function(){};Sx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Fr(wn.current);var o=null;switch(n){case"input":i=ef(e,i),r=ef(e,r),o=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),o=[];break;case"textarea":i=rf(e,i),r=rf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ul)}af(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ko.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&me("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};_x=function(e,t,n,r){n!==r&&(t.flags|=4)};function yo(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function JC(e,t,n){var r=t.pendingProps;switch(th(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return bt(t.type)&&cl(),Ze(t),null;case 3:return r=t.stateNode,Ai(),ve(xt),ve(rt),ch(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(es(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tn!==null&&(Vf(tn),tn=null))),$f(e,t),Ze(t),null;case 5:uh(t);var i=Fr(la.current);if(n=t.type,e!==null&&t.stateNode!=null)Sx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return Ze(t),null}if(e=Fr(wn.current),es(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[yn]=t,r[aa]=o,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Mo.length;i++)me(Mo[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Ym(r,o),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},me("invalid",r);break;case"textarea":qm(r,o),me("invalid",r)}af(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ja(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ja(r.textContent,l,e),i=["children",""+l]):Ko.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&me("scroll",r)}switch(n){case"input":Wa(r),Xm(r,o,!0);break;case"textarea":Wa(r),Km(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ul)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=K1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[yn]=t,e[aa]=r,wx(e,t,!1,!1),t.stateNode=e;e:{switch(a=sf(n,r),n){case"dialog":me("cancel",e),me("close",e),i=r;break;case"iframe":case"object":case"embed":me("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mo.length;i++)me(Mo[i],e);i=r;break;case"source":me("error",e),i=r;break;case"img":case"image":case"link":me("error",e),me("load",e),i=r;break;case"details":me("toggle",e),i=r;break;case"input":Ym(e,r),i=ef(e,r),me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),me("invalid",e);break;case"textarea":qm(e,r),i=rf(e,r),me("invalid",e);break;default:i=r}af(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?J1(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Z1(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Zo(e,s):typeof s=="number"&&Zo(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ko.hasOwnProperty(o)?s!=null&&o==="onScroll"&&me("scroll",e):s!=null&&zp(e,o,s,a))}switch(n){case"input":Wa(e),Xm(e,r,!1);break;case"textarea":Wa(e),Km(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ci(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)_x(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Fr(la.current),Fr(wn.current),es(t)){if(r=t.stateNode,n=t.memoizedProps,r[yn]=t,(o=r.nodeValue!==n)&&(e=It,e!==null))switch(e.tag){case 3:Ja(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ja(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=t,t.stateNode=r}return Ze(t),null;case 13:if(ve(Se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&Pt!==null&&t.mode&1&&!(t.flags&128))zy(),Ri(),t.flags|=98560,o=!1;else if(o=es(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[yn]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else tn!==null&&(Vf(tn),tn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Se.current&1?Ae===0&&(Ae=3):Sh())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Ai(),$f(e,t),e===null&&ia(t.stateNode.containerInfo),Ze(t),null;case 10:return oh(t.type._context),Ze(t),null;case 17:return bt(t.type)&&cl(),Ze(t),null;case 19:if(ve(Se),o=t.memoizedState,o===null)return Ze(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)yo(o,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=vl(e),a!==null){for(t.flags|=128,yo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(Se,Se.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>Ni&&(t.flags|=128,r=!0,yo(o,!1),t.lanes=4194304)}else{if(!r)if(e=vl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!be)return Ze(t),null}else 2*Te()-o.renderingStartTime>Ni&&n!==1073741824&&(t.flags|=128,r=!0,yo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,n=Se.current,he(Se,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return wh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Tt&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function ek(e,t){switch(th(t),t.tag){case 1:return bt(t.type)&&cl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ai(),ve(xt),ve(rt),ch(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return uh(t),null;case 13:if(ve(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Se),null;case 4:return Ai(),null;case 10:return oh(t.type._context),null;case 22:case 23:return wh(),null;case 24:return null;default:return null}}var rs=!1,tt=!1,tk=typeof WeakSet=="function"?WeakSet:Set,U=null;function _i(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function Df(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var Ng=!1;function nk(e,t){if(vf=al,e=Ty(),Jp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===e)break t;if(h===n&&++u===i&&(l=a),h===o&&++c===r&&(s=a),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(yf={focusedElem:e,selectionRange:n},al=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,S=g.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:Qt(t.type,y),S);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(w){Ce(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return g=Ng,Ng=!1,g}function Bo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Df(t,n,o)}i=i.next}while(i!==r)}}function uu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ex(e){var t=e.alternate;t!==null&&(e.alternate=null,Ex(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yn],delete t[aa],delete t[wf],delete t[FC],delete t[NC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cx(e){return e.tag===5||e.tag===3||e.tag===4}function zg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ul));else if(r!==4&&(e=e.child,e!==null))for(Lf(e,t,n),e=e.sibling;e!==null;)Lf(e,t,n),e=e.sibling}function Af(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Af(e,t,n),e=e.sibling;e!==null;)Af(e,t,n),e=e.sibling}var We=null,Jt=!1;function er(e,t,n){for(n=n.child;n!==null;)kx(e,t,n),n=n.sibling}function kx(e,t,n){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(tu,n)}catch{}switch(n.tag){case 5:tt||_i(n,t);case 6:var r=We,i=Jt;We=null,er(e,t,n),We=r,Jt=i,We!==null&&(Jt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Jt?(e=We,n=n.stateNode,e.nodeType===8?Lc(e.parentNode,n):e.nodeType===1&&Lc(e,n),ta(e)):Lc(We,n.stateNode));break;case 4:r=We,i=Jt,We=n.stateNode.containerInfo,Jt=!0,er(e,t,n),We=r,Jt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Df(n,t,a),i=i.next}while(i!==r)}er(e,t,n);break;case 1:if(!tt&&(_i(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,t,l)}er(e,t,n);break;case 21:er(e,t,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,er(e,t,n),tt=r):er(e,t,n);break;default:er(e,t,n)}}function Vg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tk),t.forEach(function(r){var i=dk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:We=l.stateNode,Jt=!1;break e;case 3:We=l.stateNode.containerInfo,Jt=!0;break e;case 4:We=l.stateNode.containerInfo,Jt=!0;break e}l=l.return}if(We===null)throw Error(V(160));kx(o,a,i),We=null,Jt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Ce(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tx(t,e),t=t.sibling}function Tx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qt(t,e),pn(e),r&4){try{Bo(3,e,e.return),uu(3,e)}catch(y){Ce(e,e.return,y)}try{Bo(5,e,e.return)}catch(y){Ce(e,e.return,y)}}break;case 1:qt(t,e),pn(e),r&512&&n!==null&&_i(n,n.return);break;case 5:if(qt(t,e),pn(e),r&512&&n!==null&&_i(n,n.return),e.flags&32){var i=e.stateNode;try{Zo(i,"")}catch(y){Ce(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&X1(i,o),sf(l,a);var u=sf(l,o);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?J1(i,d):c==="dangerouslySetInnerHTML"?Z1(i,d):c==="children"?Zo(i,d):zp(i,c,d,u)}switch(l){case"input":tf(i,o);break;case"textarea":q1(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;f!=null?Ci(i,!!o.multiple,f,!1):h!==!!o.multiple&&(o.defaultValue!=null?Ci(i,!!o.multiple,o.defaultValue,!0):Ci(i,!!o.multiple,o.multiple?[]:"",!1))}i[aa]=o}catch(y){Ce(e,e.return,y)}}break;case 6:if(qt(t,e),pn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Ce(e,e.return,y)}}break;case 3:if(qt(t,e),pn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(t.containerInfo)}catch(y){Ce(e,e.return,y)}break;case 4:qt(t,e),pn(e);break;case 13:qt(t,e),pn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(xh=Te())),r&4&&Vg(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(u=tt)||c,qt(t,e),tt=u):qt(t,e),pn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(U=e,c=e.child;c!==null;){for(d=U=c;U!==null;){switch(h=U,f=h.child,h.tag){case 0:case 11:case 14:case 15:Bo(4,h,h.return);break;case 1:_i(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){Ce(r,n,y)}}break;case 5:_i(h,h.return);break;case 22:if(h.memoizedState!==null){Ug(d);continue}}f!==null?(f.return=h,U=f):Ug(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Q1("display",a))}catch(y){Ce(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Ce(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qt(t,e),pn(e),r&4&&Vg(e);break;case 21:break;default:qt(t,e),pn(e)}}function pn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cx(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zo(i,""),r.flags&=-33);var o=zg(e);Af(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=zg(e);Lf(e,l,a);break;default:throw Error(V(161))}}catch(s){Ce(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rk(e,t,n){U=e,Ox(e)}function Ox(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||rs;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||tt;l=rs;var u=tt;if(rs=a,(tt=s)&&!u)for(U=i;U!==null;)a=U,s=a.child,a.tag===22&&a.memoizedState!==null?Hg(i):s!==null?(s.return=a,U=s):Hg(i);for(;o!==null;)U=o,Ox(o),o=o.sibling;U=i,rs=l,tt=u}Bg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):Bg(e)}}function Bg(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||uu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Cg(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cg(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ta(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}tt||t.flags&512&&Rf(t)}catch(h){Ce(t,t.return,h)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Ug(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Hg(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{uu(4,t)}catch(s){Ce(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Ce(t,i,s)}}var o=t.return;try{Rf(t)}catch(s){Ce(t,o,s)}break;case 5:var a=t.return;try{Rf(t)}catch(s){Ce(t,a,s)}}}catch(s){Ce(t,t.return,s)}if(t===e){U=null;break}var l=t.sibling;if(l!==null){l.return=t.return,U=l;break}U=t.return}}var ik=Math.ceil,bl=qn.ReactCurrentDispatcher,vh=qn.ReactCurrentOwner,Ut=qn.ReactCurrentBatchConfig,ae=0,Be=null,Ie=null,Ye=0,Tt=0,Ei=Cr(0),Ae=0,fa=null,Gr=0,cu=0,yh=0,Uo=null,vt=null,xh=0,Ni=1/0,Pn=null,wl=!1,Ff=null,vr=null,is=!1,lr=null,Sl=0,Ho=0,Nf=null,$s=-1,Ds=0;function lt(){return ae&6?Te():$s!==-1?$s:$s=Te()}function yr(e){return e.mode&1?ae&2&&Ye!==0?Ye&-Ye:VC.transition!==null?(Ds===0&&(Ds=dy()),Ds):(e=fe,e!==0||(e=window.event,e=e===void 0?16:yy(e.type)),e):1}function on(e,t,n,r){if(50<Ho)throw Ho=0,Nf=null,Error(V(185));ka(e,n,r),(!(ae&2)||e!==Be)&&(e===Be&&(!(ae&2)&&(cu|=n),Ae===4&&or(e,Ye)),wt(e,r),n===1&&ae===0&&!(t.mode&1)&&(Ni=Te()+500,au&&kr()))}function wt(e,t){var n=e.callbackNode;V2(e,t);var r=ol(e,e===Be?Ye:0);if(r===0)n!==null&&Jm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Jm(n),t===1)e.tag===0?zC(Wg.bind(null,e)):Ay(Wg.bind(null,e)),LC(function(){!(ae&6)&&kr()}),n=null;else{switch(fy(r)){case 1:n=Wp;break;case 4:n=uy;break;case 16:n=il;break;case 536870912:n=cy;break;default:n=il}n=Lx(n,Px.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Px(e,t){if($s=-1,Ds=0,ae&6)throw Error(V(327));var n=e.callbackNode;if(Mi()&&e.callbackNode!==n)return null;var r=ol(e,e===Be?Ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_l(e,r);else{t=r;var i=ae;ae|=2;var o=Ix();(Be!==e||Ye!==t)&&(Pn=null,Ni=Te()+500,zr(e,t));do try{sk();break}catch(l){Mx(e,l)}while(1);ih(),bl.current=o,ae=i,Ie!==null?t=0:(Be=null,Ye=0,t=Ae)}if(t!==0){if(t===2&&(i=ff(e),i!==0&&(r=i,t=zf(e,i))),t===1)throw n=fa,zr(e,0),or(e,r),wt(e,Te()),n;if(t===6)or(e,r);else{if(i=e.current.alternate,!(r&30)&&!ok(i)&&(t=_l(e,r),t===2&&(o=ff(e),o!==0&&(r=o,t=zf(e,o))),t===1))throw n=fa,zr(e,0),or(e,r),wt(e,Te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Ir(e,vt,Pn);break;case 3:if(or(e,r),(r&130023424)===r&&(t=xh+500-Te(),10<t)){if(ol(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){lt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bf(Ir.bind(null,e,vt,Pn),t);break}Ir(e,vt,Pn);break;case 4:if(or(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-rn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ik(r/1960))-r,10<r){e.timeoutHandle=bf(Ir.bind(null,e,vt,Pn),r);break}Ir(e,vt,Pn);break;case 5:Ir(e,vt,Pn);break;default:throw Error(V(329))}}}return wt(e,Te()),e.callbackNode===n?Px.bind(null,e):null}function zf(e,t){var n=Uo;return e.current.memoizedState.isDehydrated&&(zr(e,t).flags|=256),e=_l(e,t),e!==2&&(t=vt,vt=n,t!==null&&Vf(t)),e}function Vf(e){vt===null?vt=e:vt.push.apply(vt,e)}function ok(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ln(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function or(e,t){for(t&=~yh,t&=~cu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rn(t),r=1<<n;e[n]=-1,t&=~r}}function Wg(e){if(ae&6)throw Error(V(327));Mi();var t=ol(e,0);if(!(t&1))return wt(e,Te()),null;var n=_l(e,t);if(e.tag!==0&&n===2){var r=ff(e);r!==0&&(t=r,n=zf(e,r))}if(n===1)throw n=fa,zr(e,0),or(e,t),wt(e,Te()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ir(e,vt,Pn),wt(e,Te()),null}function bh(e,t){var n=ae;ae|=1;try{return e(t)}finally{ae=n,ae===0&&(Ni=Te()+500,au&&kr())}}function Yr(e){lr!==null&&lr.tag===0&&!(ae&6)&&Mi();var t=ae;ae|=1;var n=Ut.transition,r=fe;try{if(Ut.transition=null,fe=1,e)return e()}finally{fe=r,Ut.transition=n,ae=t,!(ae&6)&&kr()}}function wh(){Tt=Ei.current,ve(Ei)}function zr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,RC(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(th(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cl();break;case 3:Ai(),ve(xt),ve(rt),ch();break;case 5:uh(r);break;case 4:Ai();break;case 13:ve(Se);break;case 19:ve(Se);break;case 10:oh(r.type._context);break;case 22:case 23:wh()}n=n.return}if(Be=e,Ie=e=xr(e.current,null),Ye=Tt=t,Ae=0,fa=null,yh=cu=Gr=0,vt=Uo=null,Ar!==null){for(t=0;t<Ar.length;t++)if(n=Ar[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Ar=null}return e}function Mx(e,t){do{var n=Ie;try{if(ih(),Ms.current=xl,yl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yl=!1}if(Wr=0,Ve=Re=_e=null,Vo=!1,ua=0,vh.current=null,n===null||n.return===null){Ae=1,fa=t,Ie=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Ye,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=jg(a);if(f!==null){f.flags&=-257,$g(f,a,l,o,t),f.mode&1&&Ig(o,u,t),t=f,s=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(s),t.updateQueue=y}else g.add(s);break e}else{if(!(t&1)){Ig(o,u,t),Sh();break e}s=Error(V(426))}}else if(be&&l.mode&1){var S=jg(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),$g(S,a,l,o,t),nh(Fi(s,l));break e}}o=s=Fi(s,l),Ae!==4&&(Ae=2),Uo===null?Uo=[o]:Uo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=px(o,s,t);Eg(o,p);break e;case 1:l=s;var m=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(vr===null||!vr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=hx(o,l,t);Eg(o,w);break e}}o=o.return}while(o!==null)}$x(n)}catch(E){t=E,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(1)}function Ix(){var e=bl.current;return bl.current=xl,e===null?xl:e}function Sh(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Be===null||!(Gr&268435455)&&!(cu&268435455)||or(Be,Ye)}function _l(e,t){var n=ae;ae|=2;var r=Ix();(Be!==e||Ye!==t)&&(Pn=null,zr(e,t));do try{ak();break}catch(i){Mx(e,i)}while(1);if(ih(),ae=n,bl.current=r,Ie!==null)throw Error(V(261));return Be=null,Ye=0,Ae}function ak(){for(;Ie!==null;)jx(Ie)}function sk(){for(;Ie!==null&&!j2();)jx(Ie)}function jx(e){var t=Rx(e.alternate,e,Tt);e.memoizedProps=e.pendingProps,t===null?$x(e):Ie=t,vh.current=null}function $x(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ek(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Ie=null;return}}else if(n=JC(n,t,Tt),n!==null){Ie=n;return}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Ae===0&&(Ae=5)}function Ir(e,t,n){var r=fe,i=Ut.transition;try{Ut.transition=null,fe=1,lk(e,t,n,r)}finally{Ut.transition=i,fe=r}return null}function lk(e,t,n,r){do Mi();while(lr!==null);if(ae&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(B2(e,o),e===Be&&(Ie=Be=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||is||(is=!0,Lx(il,function(){return Mi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ut.transition,Ut.transition=null;var a=fe;fe=1;var l=ae;ae|=4,vh.current=null,nk(e,n),Tx(n,e),OC(yf),al=!!vf,yf=vf=null,e.current=n,rk(n),$2(),ae=l,fe=a,Ut.transition=o}else e.current=n;if(is&&(is=!1,lr=e,Sl=i),o=e.pendingLanes,o===0&&(vr=null),L2(n.stateNode),wt(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wl)throw wl=!1,e=Ff,Ff=null,e;return Sl&1&&e.tag!==0&&Mi(),o=e.pendingLanes,o&1?e===Nf?Ho++:(Ho=0,Nf=e):Ho=0,kr(),null}function Mi(){if(lr!==null){var e=fy(Sl),t=Ut.transition,n=fe;try{if(Ut.transition=null,fe=16>e?16:e,lr===null)var r=!1;else{if(e=lr,lr=null,Sl=0,ae&6)throw Error(V(331));var i=ae;for(ae|=4,U=e.current;U!==null;){var o=U,a=o.child;if(U.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Bo(8,c,o)}var d=c.child;if(d!==null)d.return=c,U=d;else for(;U!==null;){c=U;var h=c.sibling,f=c.return;if(Ex(c),c===u){U=null;break}if(h!==null){h.return=f,U=h;break}U=f}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}U=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,U=a;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Bo(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,U=p;break e}U=o.return}}var m=e.current;for(U=m;U!==null;){a=U;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,U=x;else e:for(a=m;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:uu(9,l)}}catch(E){Ce(l,l.return,E)}if(l===a){U=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,U=w;break e}U=l.return}}if(ae=i,kr(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(tu,e)}catch{}r=!0}return r}finally{fe=n,Ut.transition=t}}return!1}function Gg(e,t,n){t=Fi(n,t),t=px(e,t,1),e=gr(e,t,1),t=lt(),e!==null&&(ka(e,1,t),wt(e,t))}function Ce(e,t,n){if(e.tag===3)Gg(e,e,n);else for(;t!==null;){if(t.tag===3){Gg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){e=Fi(n,e),e=hx(t,e,1),t=gr(t,e,1),e=lt(),t!==null&&(ka(t,1,e),wt(t,e));break}}t=t.return}}function uk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(Ye&n)===n&&(Ae===4||Ae===3&&(Ye&130023424)===Ye&&500>Te()-xh?zr(e,0):yh|=n),wt(e,t)}function Dx(e,t){t===0&&(e.mode&1?(t=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):t=1);var n=lt();e=Un(e,t),e!==null&&(ka(e,t,n),wt(e,n))}function ck(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dx(e,n)}function dk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Dx(e,n)}var Rx;Rx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)yt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return yt=!1,QC(e,t,n);yt=!!(e.flags&131072)}else yt=!1,be&&t.flags&1048576&&Fy(t,pl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;js(e,t),e=t.pendingProps;var i=Di(t,rt.current);Pi(t,n),i=fh(null,t,r,e,i,n);var o=ph();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(r)?(o=!0,dl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sh(t),i.updater=su,t.stateNode=i,i._reactInternals=t,Tf(t,r,e,n),t=Mf(null,t,r,!0,o,n)):(t.tag=0,be&&o&&eh(t),at(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(js(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=pk(r),e=Qt(r,e),i){case 0:t=Pf(null,t,r,e,n);break e;case 1:t=Lg(null,t,r,e,n);break e;case 11:t=Dg(null,t,r,e,n);break e;case 14:t=Rg(null,t,r,Qt(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),Pf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),Lg(e,t,r,i,n);case 3:e:{if(yx(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,By(e,t),gl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Fi(Error(V(423)),t),t=Ag(e,t,r,n,i);break e}else if(r!==i){i=Fi(Error(V(424)),t),t=Ag(e,t,r,n,i);break e}else for(Pt=mr(t.stateNode.containerInfo.firstChild),It=t,be=!0,tn=null,n=Gy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ri(),r===i){t=Hn(e,t,n);break e}at(e,t,r,n)}t=t.child}return t;case 5:return Yy(t),e===null&&Ef(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,xf(r,i)?a=null:o!==null&&xf(r,o)&&(t.flags|=32),vx(e,t),at(e,t,a,n),t.child;case 6:return e===null&&Ef(t),null;case 13:return xx(e,t,n);case 4:return lh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Li(t,null,r,n):at(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),Dg(e,t,r,i,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,he(hl,r._currentValue),r._currentValue=a,o!==null)if(ln(o.value,a)){if(o.children===i.children&&!xt.current){t=Hn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=An(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Cf(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Cf(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}at(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pi(t,n),i=Ht(i),r=r(i),t.flags|=1,at(e,t,r,n),t.child;case 14:return r=t.type,i=Qt(r,t.pendingProps),i=Qt(r.type,i),Rg(e,t,r,i,n);case 15:return mx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qt(r,i),js(e,t),t.tag=1,bt(r)?(e=!0,dl(t)):e=!1,Pi(t,n),Hy(t,r,i),Tf(t,r,i,n),Mf(null,t,r,!0,e,n);case 19:return bx(e,t,n);case 22:return gx(e,t,n)}throw Error(V(156,t.tag))};function Lx(e,t){return ly(e,t)}function fk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(e,t,n,r){return new fk(e,t,n,r)}function _h(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pk(e){if(typeof e=="function")return _h(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bp)return 11;if(e===Up)return 14}return 2}function xr(e,t){var n=e.alternate;return n===null?(n=Bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")_h(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case hi:return Vr(n.children,i,o,t);case Vp:a=8,i|=8;break;case Kd:return e=Bt(12,n,t,i|2),e.elementType=Kd,e.lanes=o,e;case Zd:return e=Bt(13,n,t,i),e.elementType=Zd,e.lanes=o,e;case Qd:return e=Bt(19,n,t,i),e.elementType=Qd,e.lanes=o,e;case W1:return du(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U1:a=10;break e;case H1:a=9;break e;case Bp:a=11;break e;case Up:a=14;break e;case nr:a=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Bt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Vr(e,t,n,r){return e=Bt(7,e,r,t),e.lanes=n,e}function du(e,t,n,r){return e=Bt(22,e,r,t),e.elementType=W1,e.lanes=n,e.stateNode={isHidden:!1},e}function Hc(e,t,n){return e=Bt(6,e,null,t),e.lanes=n,e}function Wc(e,t,n){return t=Bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cc(0),this.expirationTimes=Cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Eh(e,t,n,r,i,o,a,l,s){return e=new hk(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Bt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sh(o),e}function mk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ax(e){if(!e)return Sr;e=e._reactInternals;e:{if(ei(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(bt(n))return Ly(e,n,t)}return t}function Fx(e,t,n,r,i,o,a,l,s){return e=Eh(n,r,!0,e,i,o,a,l,s),e.context=Ax(null),n=e.current,r=lt(),i=yr(n),o=An(r,i),o.callback=t??null,gr(n,o,i),e.current.lanes=i,ka(e,i,r),wt(e,r),e}function fu(e,t,n,r){var i=t.current,o=lt(),a=yr(i);return n=Ax(n),t.context===null?t.context=n:t.pendingContext=n,t=An(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gr(i,t,a),e!==null&&(on(e,i,a,o),Ps(e,i,a)),a}function El(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ch(e,t){Yg(e,t),(e=e.alternate)&&Yg(e,t)}function gk(){return null}var Nx=typeof reportError=="function"?reportError:function(e){console.error(e)};function kh(e){this._internalRoot=e}pu.prototype.render=kh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));fu(e,t,null,null)};pu.prototype.unmount=kh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yr(function(){fu(null,e,null,null)}),t[Bn]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=my();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ir.length&&t!==0&&t<ir[n].priority;n++);ir.splice(n,0,e),n===0&&vy(e)}};function Th(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xg(){}function vk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=El(a);o.call(u)}}var a=Fx(t,r,e,0,null,!1,!1,"",Xg);return e._reactRootContainer=a,e[Bn]=a.current,ia(e.nodeType===8?e.parentNode:e),Yr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=El(s);l.call(u)}}var s=Eh(e,0,!1,null,null,!1,!1,"",Xg);return e._reactRootContainer=s,e[Bn]=s.current,ia(e.nodeType===8?e.parentNode:e),Yr(function(){fu(t,s,n,r)}),s}function mu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=El(a);l.call(s)}}fu(t,a,e,i)}else a=vk(n,t,e,i,r);return El(a)}py=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Po(t.pendingLanes);n!==0&&(Gp(t,n|1),wt(t,Te()),!(ae&6)&&(Ni=Te()+500,kr()))}break;case 13:Yr(function(){var r=Un(e,1);if(r!==null){var i=lt();on(r,e,1,i)}}),Ch(e,1)}};Yp=function(e){if(e.tag===13){var t=Un(e,134217728);if(t!==null){var n=lt();on(t,e,134217728,n)}Ch(e,134217728)}};hy=function(e){if(e.tag===13){var t=yr(e),n=Un(e,t);if(n!==null){var r=lt();on(n,e,t,r)}Ch(e,t)}};my=function(){return fe};gy=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};uf=function(e,t,n){switch(t){case"input":if(tf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ou(r);if(!i)throw Error(V(90));Y1(r),tf(r,i)}}}break;case"textarea":q1(e,n);break;case"select":t=n.value,t!=null&&Ci(e,!!n.multiple,t,!1)}};ny=bh;ry=Yr;var yk={usingClientEntryPoint:!1,Events:[Oa,yi,ou,ey,ty,bh]},xo={findFiberByHostInstance:Lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xk={bundleType:xo.bundleType,version:xo.version,rendererPackageName:xo.rendererPackageName,rendererConfig:xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ay(e),e===null?null:e.stateNode},findFiberByHostInstance:xo.findFiberByHostInstance||gk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!os.isDisabled&&os.supportsFiber)try{tu=os.inject(xk),bn=os}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yk;Rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Th(t))throw Error(V(200));return mk(e,t,null,n)};Rt.createRoot=function(e,t){if(!Th(e))throw Error(V(299));var n=!1,r="",i=Nx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Eh(e,1,!1,null,null,n,!1,r,i),e[Bn]=t.current,ia(e.nodeType===8?e.parentNode:e),new kh(t)};Rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=ay(t),e=e===null?null:e.stateNode,e};Rt.flushSync=function(e){return Yr(e)};Rt.hydrate=function(e,t,n){if(!hu(t))throw Error(V(200));return mu(null,e,t,!0,n)};Rt.hydrateRoot=function(e,t,n){if(!Th(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Nx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Fx(t,null,e,1,n??null,i,!1,o,a),e[Bn]=t.current,ia(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new pu(t)};Rt.render=function(e,t,n){if(!hu(t))throw Error(V(200));return mu(null,e,t,!1,n)};Rt.unmountComponentAtNode=function(e){if(!hu(e))throw Error(V(40));return e._reactRootContainer?(Yr(function(){mu(null,null,e,!1,function(){e._reactRootContainer=null,e[Bn]=null})}),!0):!1};Rt.unstable_batchedUpdates=bh;Rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hu(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return mu(e,t,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";function zx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zx)}catch(e){console.error(e)}}zx(),F1.exports=Rt;var gu=F1.exports,qg=gu;Xd.createRoot=qg.createRoot,Xd.hydrateRoot=qg.hydrateRoot;var nt=function(){return nt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},nt.apply(this,arguments)};function pa(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function bk(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var wk=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Sk=bk(function(e){return wk.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ge="-ms-",Wo="-moz-",le="-webkit-",Vx="comm",vu="rule",Oh="decl",_k="@import",Ek="@namespace",Bx="@keyframes",Ck="@layer",Ux=Math.abs,Ph=String.fromCharCode,Bf=Object.assign;function kk(e,t){return Le(e,0)^45?(((t<<2^Le(e,0))<<2^Le(e,1))<<2^Le(e,2))<<2^Le(e,3):0}function Hx(e){return e.trim()}function Mn(e,t){return(e=t.exec(e))?e[0]:e}function ee(e,t,n){return e.replace(t,n)}function Ls(e,t,n){return e.indexOf(t,n)}function Le(e,t){return e.charCodeAt(t)|0}function Xr(e,t,n){return e.slice(t,n)}function en(e){return e.length}function Wx(e){return e.length}function Io(e,t){return t.push(e),e}function Tk(e,t){return e.map(t).join("")}function Kg(e,t){return e.filter(function(n){return!Mn(n,t)})}var yu=1,zi=1,Gx=0,Gt=0,Pe=0,eo="";function xu(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:yu,column:zi,length:a,return:"",siblings:l}}function tr(e,t){return Bf(xu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ii(e){for(;e.root;)e=tr(e.root,{children:[e]});Io(e,e.siblings)}function Ok(){return Pe}function Pk(){return Pe=Gt>0?Le(eo,--Gt):0,zi--,Pe===10&&(zi=1,yu--),Pe}function an(){return Pe=Gt<Gx?Le(eo,Gt++):0,zi++,Pe===10&&(zi=1,yu++),Pe}function ur(){return Le(eo,Gt)}function As(){return Gt}function bu(e,t){return Xr(eo,e,t)}function ha(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mk(e){return yu=zi=1,Gx=en(eo=e),Gt=0,[]}function Ik(e){return eo="",e}function Gc(e){return Hx(bu(Gt-1,Uf(e===91?e+2:e===40?e+1:e)))}function jk(e){for(;(Pe=ur())&&Pe<33;)an();return ha(e)>2||ha(Pe)>3?"":" "}function $k(e,t){for(;--t&&an()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return bu(e,As()+(t<6&&ur()==32&&an()==32))}function Uf(e){for(;an();)switch(Pe){case e:return Gt;case 34:case 39:e!==34&&e!==39&&Uf(Pe);break;case 40:e===41&&Uf(e);break;case 92:an();break}return Gt}function Dk(e,t){for(;an()&&e+Pe!==47+10;)if(e+Pe===42+42&&ur()===47)break;return"/*"+bu(t,Gt-1)+"*"+Ph(e===47?e:an())}function Rk(e){for(;!ha(ur());)an();return bu(e,Gt)}function Lk(e){return Ik(Fs("",null,null,null,[""],e=Mk(e),0,[0],e))}function Fs(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,h=0,f=0,g=0,y=1,S=1,p=1,m=0,x="",w=i,E=o,k=r,_=x;S;)switch(g=m,m=an()){case 40:if(g!=108&&Le(_,d-1)==58){Ls(_+=ee(Gc(m),"&","&\f"),"&\f",Ux(u?l[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:_+=Gc(m);break;case 9:case 10:case 13:case 32:_+=jk(g);break;case 92:_+=$k(As()-1,7);continue;case 47:switch(ur()){case 42:case 47:Io(Ak(Dk(an(),As()),t,n,s),s),(ha(g||1)==5||ha(ur()||1)==5)&&en(_)&&Xr(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*y:l[u++]=en(_)*p;case 125*y:case 59:case 0:switch(m){case 0:case 125:S=0;case 59+c:p==-1&&(_=ee(_,/\f/g,"")),f>0&&(en(_)-d||y===0&&g===47)&&Io(f>32?Qg(_+";",r,n,d-1,s):Qg(ee(_," ","")+";",r,n,d-2,s),s);break;case 59:_+=";";default:if(Io(k=Zg(_,t,n,u,c,i,l,x,w=[],E=[],d,o),o),m===123)if(c===0)Fs(_,t,k,k,w,o,d,l,E);else{switch(h){case 99:if(Le(_,3)===110)break;case 108:if(Le(_,2)===97)break;default:c=0;case 100:case 109:case 115:}c?Fs(e,k,k,r&&Io(Zg(e,k,k,0,0,i,l,x,i,w=[],d,E),E),i,E,d,l,r?w:E):Fs(_,k,k,k,[""],E,0,l,E)}}u=c=f=0,y=p=1,x=_="",d=a;break;case 58:d=1+en(_),f=g;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&Pk()==125)continue}switch(_+=Ph(m),m*y){case 38:p=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(en(_)-1)*p,p=1;break;case 64:ur()===45&&(_+=Gc(an())),h=ur(),c=d=en(x=_+=Rk(As())),m++;break;case 45:g===45&&en(_)==2&&(y=0)}}return o}function Zg(e,t,n,r,i,o,a,l,s,u,c,d){for(var h=i-1,f=i===0?o:[""],g=Wx(f),y=0,S=0,p=0;y<r;++y)for(var m=0,x=Xr(e,h+1,h=Ux(S=a[y])),w=e;m<g;++m)(w=Hx(S>0?f[m]+" "+x:ee(x,/&\f/g,f[m])))&&(s[p++]=w);return xu(e,t,n,i===0?vu:l,s,u,c,d)}function Ak(e,t,n,r){return xu(e,t,n,Vx,Ph(Ok()),Xr(e,2,-2),0,r)}function Qg(e,t,n,r,i){return xu(e,t,n,Oh,Xr(e,0,r),Xr(e,r+1,-1),r,i)}function Yx(e,t,n){switch(kk(e,t)){case 5103:return le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return le+e+e;case 4855:return le+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Wo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return le+e+Wo+e+ge+e+e;case 5936:switch(Le(e,t+11)){case 114:return le+e+ge+ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return le+e+ge+ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return le+e+ge+ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return le+e+ge+e+e;case 6165:return le+e+ge+"flex-"+e+e;case 5187:return le+e+ee(e,/(\w+).+(:[^]+)/,le+"box-$1$2"+ge+"flex-$1$2")+e;case 5443:return le+e+ge+"flex-item-"+ee(e,/flex-|-self/g,"")+(Mn(e,/flex-|baseline/)?"":ge+"grid-row-"+ee(e,/flex-|-self/g,""))+e;case 4675:return le+e+ge+"flex-line-pack"+ee(e,/align-content|flex-|-self/g,"")+e;case 5548:return le+e+ge+ee(e,"shrink","negative")+e;case 5292:return le+e+ge+ee(e,"basis","preferred-size")+e;case 6060:return le+"box-"+ee(e,"-grow","")+le+e+ge+ee(e,"grow","positive")+e;case 4554:return le+ee(e,/([^-])(transform)/g,"$1"+le+"$2")+e;case 6187:return ee(ee(ee(e,/(zoom-|grab)/,le+"$1"),/(image-set)/,le+"$1"),e,"")+e;case 5495:case 3959:return ee(e,/(image-set\([^]*)/,le+"$1$`$1");case 4968:return ee(ee(e,/(.+:)(flex-)?(.*)/,le+"box-pack:$3"+ge+"flex-pack:$3"),/space-between/,"justify")+le+e+e;case 4200:if(!Mn(e,/flex-|baseline/))return ge+"grid-column-align"+Xr(e,t)+e;break;case 2592:case 3360:return ge+ee(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Mn(r.props,/grid-\w+-end/)})?~Ls(e+(n=n[t].value),"span",0)?e:ge+ee(e,"-start","")+e+ge+"grid-row-span:"+(~Ls(n,"span",0)?Mn(n,/\d+/):+Mn(n,/\d+/)-+Mn(e,/\d+/))+";":ge+ee(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Mn(r.props,/grid-\w+-start/)})?e:ge+ee(ee(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ee(e,/(.+)-inline(.+)/,le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(en(e)-1-t>6)switch(Le(e,t+1)){case 109:if(Le(e,t+4)!==45)break;case 102:return ee(e,/(.+:)(.+)-([^]+)/,"$1"+le+"$2-$3$1"+Wo+(Le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ls(e,"stretch",0)?Yx(ee(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ee(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return ge+i+":"+o+u+(a?ge+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(Le(e,t+6)===121)return ee(e,":",":"+le)+e;break;case 6444:switch(Le(e,Le(e,14)===45?18:11)){case 120:return ee(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+le+(Le(e,14)===45?"inline-":"")+"box$3$1"+le+"$2$3$1"+ge+"$2box$3")+e;case 100:return ee(e,":",":"+ge)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(e,"scroll-","scroll-snap-")+e}return e}function Cl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Fk(e,t,n,r){switch(e.type){case Ck:if(e.children.length)break;case _k:case Ek:case Oh:return e.return=e.return||e.value;case Vx:return"";case Bx:return e.return=e.value+"{"+Cl(e.children,r)+"}";case vu:if(!en(e.value=e.props.join(",")))return""}return en(n=Cl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Nk(e){var t=Wx(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function zk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Vk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Oh:e.return=Yx(e.value,e.length,n);return;case Bx:return Cl([tr(e,{value:ee(e.value,"@","@"+le)})],r);case vu:if(e.length)return Tk(n=e.props,function(i){switch(Mn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ii(tr(e,{props:[ee(i,/:(read-\w+)/,":"+Wo+"$1")]})),ii(tr(e,{props:[i]})),Bf(e,{props:Kg(n,r)});break;case"::placeholder":ii(tr(e,{props:[ee(i,/:(plac\w+)/,":"+le+"input-$1")]})),ii(tr(e,{props:[ee(i,/:(plac\w+)/,":"+Wo+"$1")]})),ii(tr(e,{props:[ee(i,/:(plac\w+)/,ge+"input-$1")]})),ii(tr(e,{props:[i]})),Bf(e,{props:Kg(n,r)});break}return""})}}var Bk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Xx="active",qx="data-styled-version",wu="6.3.11",Mh=`/*!sc*/
`,Go=typeof window<"u"&&typeof document<"u",Uk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Hk={};function Ma(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ns=new Map,kl=new Map,zs=1,jo=function(e){if(Ns.has(e))return Ns.get(e);for(;kl.has(zs);)zs++;var t=zs++;return Ns.set(e,t),kl.set(t,e),t},Wk=function(e,t){zs=t+1,Ns.set(e,t),kl.set(t,e)},Ih=Object.freeze([]),Bi=Object.freeze({});function Kx(e,t,n){return n===void 0&&(n=Bi),e.theme!==n.theme&&e.theme||t||n.theme}var Zx=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Gk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Yk=/(^-|-$)/g;function Jg(e){return e.replace(Gk,"-").replace(Yk,"")}var Xk=/(a)(d)/gi,e0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Hf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=e0(t%52)+n;return(e0(t%52)+n).replace(Xk,"$1-$2")}var Yc,jr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Qx=function(e){return jr(5381,e)};function Jx(e){return Hf(Qx(e)>>>0)}function qk(e){return e.displayName||e.name||"Component"}function Xc(e){return typeof e=="string"&&!0}var eb=typeof Symbol=="function"&&Symbol.for,tb=eb?Symbol.for("react.memo"):60115,Kk=eb?Symbol.for("react.forward_ref"):60112,Zk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jk=((Yc={})[Kk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yc[tb]=nb,Yc);function t0(e){return("type"in(t=e)&&t.type.$$typeof)===tb?nb:"$$typeof"in e?Jk[e.$$typeof]:Zk;var t}var eT=Object.defineProperty,tT=Object.getOwnPropertyNames,n0=Object.getOwnPropertySymbols,nT=Object.getOwnPropertyDescriptor,rT=Object.getPrototypeOf,r0=Object.prototype;function rb(e,t,n){if(typeof t!="string"){if(r0){var r=rT(t);r&&r!==r0&&rb(e,r,n)}var i=tT(t);n0&&(i=i.concat(n0(t)));for(var o=t0(e),a=t0(t),l=0;l<i.length;++l){var s=i[l];if(!(s in Qk||n&&n[s]||a&&s in a||o&&s in o)){var u=nT(t,s);try{eT(e,s,u)}catch{}}}}return e}function Ui(e){return typeof e=="function"}function jh(e){return typeof e=="object"&&"styledComponentId"in e}function Nr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Wf(e,t){return e.join(t||"")}function ma(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Gf(e,t,n){if(n===void 0&&(n=!1),!n&&!ma(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Gf(e[r],t[r]);else if(ma(t))for(var r in t)e[r]=Gf(e[r],t[r]);return e}function $h(e,t){Object.defineProperty(e,"toString",{value:t})}var iT=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Ma(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=0,u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+=this.tag.getRule(a)+Mh;return n},e}(),oT="style[".concat(Vi,"][").concat(qx,'="').concat(wu,'"]'),aT=new RegExp("^".concat(Vi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),i0=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Yf=function(e){if(!e)return document;if(i0(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(i0(t))return t}return document},sT=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},lT=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Mh),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(aT);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(Wk(c,u),sT(e,c,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},qc=function(e){for(var t=Yf(e.options.target).querySelectorAll(oT),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Vi)!==Xx&&(lT(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function uT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ib=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Vi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Vi,Xx),r.setAttribute(qx,wu);var a=uT();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},cT=function(){function e(t){this.element=ib(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,a=i.length;o<a;o++){var l=i[o];if(l.ownerNode===n)return l}throw Ma(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),dT=function(){function e(t){this.element=ib(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),fT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),o0=Go,pT={isServer:!Go,useCSSOMInjection:!Uk},Tl=function(){function e(t,n,r){t===void 0&&(t=Bi),n===void 0&&(n={});var i=this;this.options=nt(nt({},pT),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Go&&o0&&(o0=!1,qc(this)),$h(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(d){var h=function(p){return kl.get(p)}(d);if(h===void 0)return"continue";var f=o.names.get(h);if(f===void 0||!f.size)return"continue";var g=a.getGroup(d);if(g.length===0)return"continue";var y=Vi+".g"+d+'[id="'+h+'"]',S="";f.forEach(function(p){p.length>0&&(S+=p+",")}),s+=g+y+'{content:"'+S+'"}'+Mh},c=0;c<l;c++)u(c);return s}(i)})}return e.registerId=function(t){return jo(t)},e.prototype.rehydrate=function(){!this.server&&Go&&qc(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(nt(nt({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Go&&t.target!==this.options.target&&Yf(this.options.target)!==Yf(t.target)&&qc(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new fT(i):r?new cT(i):new dT(i)}(this.options),new iT(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){jo(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(jo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(jo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),hT=/&/g,In=47,$r=42;function a0(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(r!==0||i||a!==In||e.charCodeAt(o+1)!==$r)if(i)a===$r&&e.charCodeAt(o+1)===In&&(i=!1,o++);else if(a!==34&&a!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else i=!0,o++}return n!==0||r!==0}function ob(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ob(n.children,t)),n})}function mT(e){var t,n,r,i=e===void 0?Bi:e,o=i.options,a=o===void 0?Bi:o,l=i.plugins,s=l===void 0?Ih:l,u=function(g,y,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):g},c=s.slice();c.push(function(g){g.type===vu&&g.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),g.props[0]=g.props[0].replace(hT,n).replace(r,u))}),a.prefix&&c.push(Vk),c.push(Fk);var d=[],h=Nk(c.concat(zk(function(g){return d.push(g)}))),f=function(g,y,S,p){y===void 0&&(y=""),S===void 0&&(S=""),p===void 0&&(p="&"),t=p,n=y,r=void 0;var m=function(w){if(!a0(w))return w;for(var E=w.length,k="",_=0,C=0,M=0,I=!1,$=0;$<E;$++){var P=w.charCodeAt($);if(M!==0||I||P!==In||w.charCodeAt($+1)!==$r)if(I)P===$r&&w.charCodeAt($+1)===In&&(I=!1,$++);else if(P!==34&&P!==39||$!==0&&w.charCodeAt($-1)===92){if(M===0)if(P===123)C++;else if(P===125){if(--C<0){for(var j=$+1;j<E;){var L=w.charCodeAt(j);if(L===59||L===10)break;j++}j<E&&w.charCodeAt(j)===59&&j++,C=0,$=j-1,_=j;continue}C===0&&(k+=w.substring(_,$+1),_=$+1)}else P===59&&C===0&&(k+=w.substring(_,$+1),_=$+1)}else M===0?M=P:M===P&&(M=0);else I=!0,$++}if(_<E){var R=w.substring(_);a0(R)||(k+=R)}return k}(function(w){if(w.indexOf("//")===-1)return w;for(var E=w.length,k=[],_=0,C=0,M=0,I=0;C<E;){var $=w.charCodeAt(C);if($!==34&&$!==39||C!==0&&w.charCodeAt(C-1)===92)if(M===0)if($===In&&C+1<E&&w.charCodeAt(C+1)===$r){for(C+=2;C+1<E&&(w.charCodeAt(C)!==$r||w.charCodeAt(C+1)!==In);)C++;C+=2}else if($===40&&C>=3&&(32|w.charCodeAt(C-1))==108&&(32|w.charCodeAt(C-2))==114&&(32|w.charCodeAt(C-3))==117)I=1,C++;else if(I>0)$===41?I--:$===40&&I++,C++;else if($===$r&&C+1<E&&w.charCodeAt(C+1)===In)C>_&&k.push(w.substring(_,C)),_=C+=2;else if($===In&&C+1<E&&w.charCodeAt(C+1)===In){for(C>_&&k.push(w.substring(_,C));C<E&&w.charCodeAt(C)!==10;)C++;_=C}else C++;else C++;else M===0?M=$:M===$&&(M=0),C++}return _===0?w:(_<E&&k.push(w.substring(_)),k.join(""))}(g)),x=Lk(S||y?"".concat(S," ").concat(y," { ").concat(m," }"):m);return a.namespace&&(x=ob(x,a.namespace)),d=[],Cl(x,h),d};return f.hash=s.length?s.reduce(function(g,y){return y.name||Ma(15),jr(g,y.name)},5381).toString():"",f}var gT=new Tl,Xf=mT(),ab=W.createContext({shouldForwardProp:void 0,styleSheet:gT,stylis:Xf});ab.Consumer;W.createContext(void 0);function qf(){return W.useContext(ab)}var vT=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Xf);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,$h(this,function(){throw Ma(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Xf),this.name+t.hash},e}();function yT(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Bk||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var xT=function(e){return e>="A"&&e<="Z"};function s0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;xT(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var sb=function(e){return e==null||e===!1||e===""},lb=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!sb(r)&&(Array.isArray(r)&&r.isCss||Ui(r)?t.push("".concat(s0(n),":"),r,";"):ma(r)?t.push.apply(t,pa(pa(["".concat(n," {")],lb(r),!1),["}"],!1)):t.push("".concat(s0(n),": ").concat(yT(n,r),";")))}return t};function br(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(sb(e))return i;if(jh(e))return i.push(".".concat(e.styledComponentId)),i;if(Ui(e)){if(!Ui(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return br(o,t,n,r,i)}var a;if(e instanceof vT)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(ma(e)){for(var l=lb(e),s=0;s<l.length;s++)i.push(l[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)br(e[s],t,n,r,i);return i}function ub(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ui(n)&&!jh(n))return!1}return!0}var bT=Qx(wu),wT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ub(t),this.componentId=n,this.baseHash=jr(bT,n),this.baseStyle=r,Tl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Nr(i,this.staticRulesId);else{var o=Wf(br(this.rules,t,n,r)),a=Hf(jr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Nr(i,a),this.staticRulesId=a}else{for(var s=jr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var h=Wf(br(d,t,n,r));s=jr(jr(s,String(c)),h),u+=h}}if(u){var f=Hf(s>>>0);if(!n.hasNameForId(this.componentId,f)){var g=r(u,".".concat(f),void 0,this.componentId);n.insertRules(this.componentId,f,g)}i=Nr(i,f)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(jo(this.componentId)):""}},e}(),Dh=W.createContext(void 0);Dh.Consumer;var Kc={};function ST(e,t,n){var r=jh(e),i=e,o=!Xc(e),a=t.attrs,l=a===void 0?Ih:a,s=t.componentId,u=s===void 0?function(w,E){var k=typeof w!="string"?"sc":Jg(w);Kc[k]=(Kc[k]||0)+1;var _="".concat(k,"-").concat(Jx(wu+k+Kc[k]));return E?"".concat(E,"-").concat(_):_}(t.displayName,t.parentComponentId):s,c=t.displayName,d=c===void 0?function(w){return Xc(w)?"styled.".concat(w):"Styled(".concat(qk(w),")")}(e):c,h=t.displayName&&t.componentId?"".concat(Jg(t.displayName),"-").concat(t.componentId):t.componentId||u,f=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;g=function(w,E){return y(w,E)&&S(w,E)}}else g=y}var p=new wT(n,h,r?i.componentStyle:void 0);function m(w,E){return function(k,_,C){var M=k.attrs,I=k.componentStyle,$=k.defaultProps,P=k.foldedComponentIds,j=k.styledComponentId,L=k.target,R=W.useContext(Dh),F=qf(),A=k.shouldForwardProp||F.shouldForwardProp,O=Kx(_,R,$)||Bi,D=function(K,re,we){for(var qe,Oe=nt(nt({},re),{className:void 0,theme:we}),Xt=0;Xt<K.length;Xt+=1){var Ft=Ui(qe=K[Xt])?qe(Oe):qe;for(var kt in Ft)kt==="className"?Oe.className=Nr(Oe.className,Ft[kt]):kt==="style"?Oe.style=nt(nt({},Oe.style),Ft[kt]):Oe[kt]=Ft[kt]}return"className"in re&&typeof re.className=="string"&&(Oe.className=Nr(Oe.className,re.className)),Oe}(M,_,O),N=D.as||L,B={};for(var z in D)D[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&D.theme===O||(z==="forwardedAs"?B.as=D.forwardedAs:A&&!A(z,N)||(B[z]=D[z]));var G=function(K,re){var we=qf(),qe=K.generateAndInjectStyles(re,we.styleSheet,we.stylis);return qe}(I,D),Q=G.className,Z=Nr(P,j);return Q&&(Z+=" "+Q),D.className&&(Z+=" "+D.className),B[Xc(N)&&!Zx.has(N)?"class":"className"]=Z,C&&(B.ref=C),b.createElement(N,B)}(x,w,E)}m.displayName=d;var x=W.forwardRef(m);return x.attrs=f,x.componentStyle=p,x.displayName=d,x.shouldForwardProp=g,x.foldedComponentIds=r?Nr(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=h,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(E){for(var k=[],_=1;_<arguments.length;_++)k[_-1]=arguments[_];for(var C=0,M=k;C<M.length;C++)Gf(E,M[C],!0);return E}({},i.defaultProps,w):w}}),$h(x,function(){return".".concat(x.styledComponentId)}),o&&rb(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function l0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var u0=function(e){return Object.assign(e,{isCss:!0})};function cb(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ui(e)||ma(e))return u0(br(l0(Ih,pa([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?br(r):u0(br(l0(r,t)))}function Kf(e,t,n){if(n===void 0&&(n=Bi),!t)throw Ma(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,cb.apply(void 0,pa([i],o,!1)))};return r.attrs=function(i){return Kf(e,t,nt(nt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Kf(e,t,nt(nt({},n),i))},r}var db=function(e){return Kf(ST,e)},T=db;Zx.forEach(function(e){T[e]=db(e)});var _T=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=ub(t),Tl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Wf(br(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Tl.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function ET(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=cb.apply(void 0,pa([e],t,!1)),i="sc-global-".concat(Jx(JSON.stringify(r))),o=new _T(r,i),a=new WeakMap,l=function(u){var c=qf(),d=W.useContext(Dh),h=a.get(c.styleSheet);return h===void 0&&(h=c.styleSheet.allocateGSInstance(i),a.set(c.styleSheet,h)),(typeof window>"u"||!c.styleSheet.server)&&s(h,u,c.styleSheet,d,c.stylis),W.useLayoutEffect(function(){return c.styleSheet.server||s(h,u,c.styleSheet,d,c.stylis),function(){var f;o.removeStyles(h,c.styleSheet),f=c.styleSheet.options.target,typeof document<"u"&&(f??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(g){return g.remove()})}},[h,u,c.styleSheet,d,c.stylis]),null};function s(u,c,d,h,f){if(o.isStatic)o.renderStyles(u,Hk,d,f);else{var g=nt(nt({},c),{theme:Kx(c,h,l.defaultProps)});o.renderStyles(u,g,d,f)}}return W.memo(l)}const CT=T.div`
position: sticky;
  top: 0;
  z-index: 1000;
      background: radial-gradient(circle at 50% 45%, #5c5149 0%, #4b3c34 35%, #352b25 65%, #1b1412 100%);


`,kT=T.div`
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
`,TT=T.div`
width: 100%;
  display: flex;
      gap: 10px;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`,OT=T.div`

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
`;T($e)`
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
`;const MT=T($e)`
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
`;const IT=T.svg`
  width: 30px;
  height: 30px;
  fill: var(--white-color);
`,jT=T.button`
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
`;const $T=T.div`
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
`,DT=T.button`
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
`,RT=T.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,as=T($e)`
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
`,AT=T.div`
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
`,FT=T.div`
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



`,NT=T.input`
  
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
`,zT=T.button`
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
   
`,VT=T.svg`
  width: 24px;
  height: 24px;
  

`,un="/Didiv/assets/symbol-defs-f1e4efb3.svg",BT=()=>{const[e,t]=b.useState("");return v.jsxs(FT,{children:[v.jsx(NT,{name:"site-search",value:e,onChange:n=>t(n.target.value),placeholder:"Пошук",autoComplete:"off"}),v.jsx(zT,{className:"search-button",children:v.jsx(VT,{children:v.jsx("use",{href:`${un}#icon-search`})})})]})};var fb={exports:{}},pb={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=b;function UT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var HT=typeof Object.is=="function"?Object.is:UT,WT=Ia.useSyncExternalStore,GT=Ia.useRef,YT=Ia.useEffect,XT=Ia.useMemo,qT=Ia.useDebugValue;pb.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=GT(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=XT(function(){function s(f){if(!u){if(u=!0,c=f,f=r(f),i!==void 0&&a.hasValue){var g=a.value;if(i(g,f))return d=g}return d=f}if(g=d,HT(c,f))return g;var y=r(f);return i!==void 0&&i(g,y)?(c=f,g):(c=f,d=y)}var u=!1,c,d,h=n===void 0?null:n;return[function(){return s(t())},h===null?void 0:function(){return s(h())}]},[t,n,r,i]);var l=WT(e,o[0],o[1]);return YT(function(){a.hasValue=!0,a.value=l},[l]),qT(l),l};fb.exports=pb;var KT=fb.exports;function ZT(e){e()}function QT(){let e=null,t=null;return{clear(){e=null,t=null},notify(){ZT(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var c0={notify(){},get:()=>[]};function JT(e,t){let n,r=c0,i=0,o=!1;function a(y){c();const S=r.subscribe(y);let p=!1;return()=>{p||(p=!0,S(),d())}}function l(){r.notify()}function s(){g.onStateChange&&g.onStateChange()}function u(){return o}function c(){i++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=QT())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=c0)}function h(){o||(o=!0,c())}function f(){o&&(o=!1,d())}const g={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:h,tryUnsubscribe:f,getListeners:()=>r};return g}var eO=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tO=eO(),nO=()=>typeof navigator<"u"&&navigator.product==="ReactNative",rO=nO(),iO=()=>tO||rO?b.useLayoutEffect:b.useEffect,oO=iO(),Zc=Symbol.for("react-redux-context"),Qc=typeof globalThis<"u"?globalThis:{};function aO(){if(!b.createContext)return{};const e=Qc[Zc]??(Qc[Zc]=new Map);let t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var _r=aO();function sO(e){const{children:t,context:n,serverState:r,store:i}=e,o=b.useMemo(()=>{const s=JT(i);return{store:i,subscription:s,getServerState:r?()=>r:void 0}},[i,r]),a=b.useMemo(()=>i.getState(),[i]);oO(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,a]);const l=n||_r;return b.createElement(l.Provider,{value:o},t)}var lO=sO;function Rh(e=_r){return function(){return b.useContext(e)}}var hb=Rh();function mb(e=_r){const t=e===_r?hb:Rh(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var uO=mb();function cO(e=_r){const t=e===_r?uO:mb(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var to=cO(),dO=(e,t)=>e===t;function fO(e=_r){const t=e===_r?hb:Rh(e),n=(r,i={})=>{const{equalityFn:o=dO}=typeof i=="function"?{equalityFn:i}:i,a=t(),{store:l,subscription:s,getServerState:u}=a;b.useRef(!0);const c=b.useCallback({[r.name](h){return r(h)}}[r.name],[r]),d=KT.useSyncExternalStoreWithSelector(s.addNestedSub,l.getState,u||l.getState,c,o);return b.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Fn=fO();const pO=T($e)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
  margin-right: 10px;
  
  }
       
`,hO=T.svg`
  width: 30px;
  height: 30px;
 fill: var(--white-color);
`,mO=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; 
  cursor: pointer;
`,gO=T.div`
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
`,vO=({onClick:e})=>{const t=Fn(n=>n.cart.items.length);return v.jsx(pO,{to:"/cart",children:v.jsxs(mO,{onClick:e,children:[v.jsx(hO,{children:v.jsx("use",{href:`${un}#icon-cart`})}),t>0&&v.jsx(gO,{children:t})]})})},yO=T.nav`
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
`,ss=T($e)`
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
`,xO=()=>v.jsxs(yO,{children:[v.jsx(ss,{to:"/",children:"Головна"}),v.jsx(ss,{to:"/about",children:"Про нас"}),v.jsx(ss,{to:"/catalog",children:"Каталог"}),v.jsx(ss,{to:"/contacts",children:"Контакти"})]}),bO=T.svg`
  width: 24px;
  height: 24px;
  fill: var(--white-color);
`,wO=T($e)`
      display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
   order: 2;
 
  }
       
`,SO=T.div`

width:30px;
height:30px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px; /* розмір іконки */
  cursor: pointer;
`,_O=T.div`

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
`,EO=({onClick:e})=>{const t=Fn(n=>n.favorites.items.length);return v.jsx(wO,{to:"/favorite",children:v.jsxs(SO,{onClick:e,children:[v.jsx(bO,{children:v.jsx("use",{href:`${un}#icon-heart`})}),t>0&&v.jsx(_O,{children:t})]})})};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kO=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=e=>{const t=kO(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var TO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OO=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PO=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},s)=>b.createElement("svg",{ref:s,...TO,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:gb("lucide",i),...!o&&!OO(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,c])=>b.createElement(u,c)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=(e,t)=>{const n=b.forwardRef(({className:r,...i},o)=>b.createElement(PO,{ref:o,iconNode:t,className:gb(`lucide-${CO(d0(e))}`,`lucide-${e}`,r),...i}));return n.displayName=d0(e),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MO=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],vb=kn("arrow-right",MO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],yb=kn("heart",IO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jO=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],$O=kn("house",jO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],RO=kn("info",DO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LO=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],AO=kn("mail",LO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FO=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],NO=kn("shopping-bag",FO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zO=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Su=kn("shopping-cart",zO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VO=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],xb=kn("sliders-horizontal",VO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BO=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],bb=kn("trash-2",BO);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],wb=kn("x",UO),HO=()=>{const[e,t]=b.useState(!1);return v.jsx(CT,{children:v.jsx(kT,{children:v.jsxs(TT,{children:[v.jsxs(OT,{children:[v.jsx(MT,{to:"/",children:"Дідів хлів"}),v.jsxs(PT,{children:[v.jsx(vO,{}),v.jsx(EO,{}),v.jsx(xO,{}),v.jsx(jT,{onClick:()=>t(!e),children:v.jsx(IT,{children:v.jsx("use",{href:`${un}#icon-menu`})})}),v.jsx(AT,{open:e,onClick:()=>t(!1)}),v.jsxs($T,{open:e,children:[v.jsx(DT,{onClick:()=>t(!1),children:v.jsx(wb,{size:28,strokeWidth:1.5})}),v.jsxs(RT,{children:[v.jsxs(as,{onClick:()=>t(!1),to:"/",children:[v.jsx($O,{size:22,strokeWidth:1.5})," Головна"]}),v.jsxs(as,{onClick:()=>t(!1),to:"/about",children:[v.jsx(RO,{size:22,strokeWidth:1.5})," Про нас"]}),v.jsxs(as,{onClick:()=>t(!1),to:"/catalog",children:[v.jsx(NO,{size:22,strokeWidth:1.5})," Каталог"]}),v.jsxs(as,{onClick:()=>t(!1),to:"/contacts",children:[v.jsx(AO,{size:22,strokeWidth:1.5})," Контакти"]})]}),v.jsx(LT,{children:v.jsx("p",{children:"© 2020 Дідів Хлів"})})]})]})]}),v.jsx(BT,{})]})})})},WO=T.div`

   background: radial-gradient(
    circle at 50% 45%,
    #5c5149 0%,
    #4b3c34 35%,
    #352b25 65%,
    #1b1412 100%
  );
`,GO=T.footer`
 
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
`,YO=T.div`
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
`,Jc=T.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center; /* Центруємо контент всередині колонки */

  @media screen and (min-width: 768px) {
    align-items: flex-start; /* На десктопі — по лівому краю */
    min-width: 150px;
    flex: 1;
  }
`,ed=T.h3`
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
`,hn=T($e)`
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
`,XO=T.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`,f0=T.a`
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
`,qO=()=>v.jsx(WO,{children:v.jsxs(GO,{children:[v.jsxs(YO,{children:[v.jsxs(Jc,{children:[v.jsx(ed,{children:"Навігація"}),v.jsx(hn,{to:"/",children:"Головна"}),v.jsx(hn,{to:"/about",children:"Про нас"}),v.jsx(hn,{to:"/catalog",children:"Каталог"}),v.jsx(hn,{to:"/contacts",children:"Контакти"})]}),v.jsxs(Jc,{children:[v.jsx(ed,{children:"Інформація"}),v.jsx(hn,{to:"/delivery",children:"Оплата і доставка"}),v.jsx(hn,{children:"Повернення"}),v.jsx(hn,{children:"Гарантія"}),v.jsx(hn,{children:"Політика конфіденційності"})]})]}),v.jsxs(Jc,{children:[v.jsx(ed,{children:"Контакти"}),v.jsx(hn,{href:"tel:+380979999999",children:"+38 (097) 999-99-99"}),v.jsx(hn,{href:"mailto:email@email.com",children:"email@email.com"}),v.jsxs(XO,{children:[v.jsx(f0,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:v.jsx("svg",{width:"20px",children:v.jsx("use",{href:`${un}#icon-instagram`})})}),v.jsx(f0,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:v.jsx("svg",{width:"20px",children:v.jsx("use",{href:`${un}#icon-telegram`})})})]})]})]})}),KO=()=>(console.log("rer"),v.jsxs(v.Fragment,{children:[v.jsx(HO,{}),v.jsx("main",{className:"main-content",children:v.jsx(o2,{})}),v.jsx(qO,{})]}));function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}function ZO(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function QO(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var JO=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(QO(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=ZO(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Je="-ms-",Ol="-moz-",ue="-webkit-",Sb="comm",Lh="rule",Ah="decl",eP="@import",_b="@keyframes",tP="@layer",nP=Math.abs,_u=String.fromCharCode,rP=Object.assign;function iP(e,t){return Ge(e,0)^45?(((t<<2^Ge(e,0))<<2^Ge(e,1))<<2^Ge(e,2))<<2^Ge(e,3):0}function Eb(e){return e.trim()}function oP(e,t){return(e=t.exec(e))?e[0]:e}function ce(e,t,n){return e.replace(t,n)}function Zf(e,t){return e.indexOf(t)}function Ge(e,t){return e.charCodeAt(t)|0}function ga(e,t,n){return e.slice(t,n)}function gn(e){return e.length}function Fh(e){return e.length}function ls(e,t){return t.push(e),e}function aP(e,t){return e.map(t).join("")}var Eu=1,Hi=1,Cb=0,St=0,Me=0,no="";function Cu(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Eu,column:Hi,length:a,return:""}}function bo(e,t){return rP(Cu("",null,null,"",null,null,0),e,{length:-e.length},t)}function sP(){return Me}function lP(){return Me=St>0?Ge(no,--St):0,Hi--,Me===10&&(Hi=1,Eu--),Me}function jt(){return Me=St<Cb?Ge(no,St++):0,Hi++,Me===10&&(Hi=1,Eu++),Me}function Sn(){return Ge(no,St)}function Vs(){return St}function ja(e,t){return ga(no,e,t)}function va(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kb(e){return Eu=Hi=1,Cb=gn(no=e),St=0,[]}function Tb(e){return no="",e}function Bs(e){return Eb(ja(St-1,Qf(e===91?e+2:e===40?e+1:e)))}function uP(e){for(;(Me=Sn())&&Me<33;)jt();return va(e)>2||va(Me)>3?"":" "}function cP(e,t){for(;--t&&jt()&&!(Me<48||Me>102||Me>57&&Me<65||Me>70&&Me<97););return ja(e,Vs()+(t<6&&Sn()==32&&jt()==32))}function Qf(e){for(;jt();)switch(Me){case e:return St;case 34:case 39:e!==34&&e!==39&&Qf(Me);break;case 40:e===41&&Qf(e);break;case 92:jt();break}return St}function dP(e,t){for(;jt()&&e+Me!==47+10;)if(e+Me===42+42&&Sn()===47)break;return"/*"+ja(t,St-1)+"*"+_u(e===47?e:jt())}function fP(e){for(;!va(Sn());)jt();return ja(e,St)}function pP(e){return Tb(Us("",null,null,null,[""],e=kb(e),0,[0],e))}function Us(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,h=0,f=0,g=0,y=1,S=1,p=1,m=0,x="",w=i,E=o,k=r,_=x;S;)switch(g=m,m=jt()){case 40:if(g!=108&&Ge(_,d-1)==58){Zf(_+=ce(Bs(m),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:_+=Bs(m);break;case 9:case 10:case 13:case 32:_+=uP(g);break;case 92:_+=cP(Vs()-1,7);continue;case 47:switch(Sn()){case 42:case 47:ls(hP(dP(jt(),Vs()),t,n),s);break;default:_+="/"}break;case 123*y:l[u++]=gn(_)*p;case 125*y:case 59:case 0:switch(m){case 0:case 125:S=0;case 59+c:p==-1&&(_=ce(_,/\f/g,"")),f>0&&gn(_)-d&&ls(f>32?h0(_+";",r,n,d-1):h0(ce(_," ","")+";",r,n,d-2),s);break;case 59:_+=";";default:if(ls(k=p0(_,t,n,u,c,i,l,x,w=[],E=[],d),o),m===123)if(c===0)Us(_,t,k,k,w,o,d,l,E);else switch(h===99&&Ge(_,3)===110?100:h){case 100:case 108:case 109:case 115:Us(e,k,k,r&&ls(p0(e,k,k,0,0,i,l,x,i,w=[],d),E),i,E,d,l,r?w:E);break;default:Us(_,k,k,k,[""],E,0,l,E)}}u=c=f=0,y=p=1,x=_="",d=a;break;case 58:d=1+gn(_),f=g;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&lP()==125)continue}switch(_+=_u(m),m*y){case 38:p=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(gn(_)-1)*p,p=1;break;case 64:Sn()===45&&(_+=Bs(jt())),h=Sn(),c=d=gn(x=_+=fP(Vs())),m++;break;case 45:g===45&&gn(_)==2&&(y=0)}}return o}function p0(e,t,n,r,i,o,a,l,s,u,c){for(var d=i-1,h=i===0?o:[""],f=Fh(h),g=0,y=0,S=0;g<r;++g)for(var p=0,m=ga(e,d+1,d=nP(y=a[g])),x=e;p<f;++p)(x=Eb(y>0?h[p]+" "+m:ce(m,/&\f/g,h[p])))&&(s[S++]=x);return Cu(e,t,n,i===0?Lh:l,s,u,c)}function hP(e,t,n){return Cu(e,t,n,Sb,_u(sP()),ga(e,2,-2),0)}function h0(e,t,n,r){return Cu(e,t,n,Ah,ga(e,0,r),ga(e,r+1,-1),r)}function Ii(e,t){for(var n="",r=Fh(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function mP(e,t,n,r){switch(e.type){case tP:if(e.children.length)break;case eP:case Ah:return e.return=e.return||e.value;case Sb:return"";case _b:return e.return=e.value+"{"+Ii(e.children,r)+"}";case Lh:e.value=e.props.join(",")}return gn(n=Ii(e.children,r))?e.return=e.value+"{"+n+"}":""}function gP(e){var t=Fh(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function vP(e){return function(t){t.root||(t=t.return)&&e(t)}}function yP(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var xP=function(t,n,r){for(var i=0,o=0;i=o,o=Sn(),i===38&&o===12&&(n[r]=1),!va(o);)jt();return ja(t,St)},bP=function(t,n){var r=-1,i=44;do switch(va(i)){case 0:i===38&&Sn()===12&&(n[r]=1),t[r]+=xP(St-1,n,r);break;case 2:t[r]+=Bs(i);break;case 4:if(i===44){t[++r]=Sn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=_u(i)}while(i=jt());return t},wP=function(t,n){return Tb(bP(kb(t),n))},m0=new WeakMap,SP=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!m0.get(r))&&!i){m0.set(t,!0);for(var o=[],a=wP(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var c=0;c<l.length;c++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[c]):l[c]+" "+a[s]}}},_P=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Ob(e,t){switch(iP(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+Ol+e+Je+e+e;case 6828:case 4268:return ue+e+Je+e+e;case 6165:return ue+e+Je+"flex-"+e+e;case 5187:return ue+e+ce(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+Je+"flex-$1$2")+e;case 5443:return ue+e+Je+"flex-item-"+ce(e,/flex-|-self/,"")+e;case 4675:return ue+e+Je+"flex-line-pack"+ce(e,/align-content|flex-|-self/,"")+e;case 5548:return ue+e+Je+ce(e,"shrink","negative")+e;case 5292:return ue+e+Je+ce(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ce(e,"-grow","")+ue+e+Je+ce(e,"grow","positive")+e;case 4554:return ue+ce(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ce(ce(ce(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ce(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ce(ce(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+Je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4095:case 3583:case 4068:case 2532:return ce(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gn(e)-1-t>6)switch(Ge(e,t+1)){case 109:if(Ge(e,t+4)!==45)break;case 102:return ce(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+Ol+(Ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Zf(e,"stretch")?Ob(ce(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ge(e,t+1)!==115)break;case 6444:switch(Ge(e,gn(e)-3-(~Zf(e,"!important")&&10))){case 107:return ce(e,":",":"+ue)+e;case 101:return ce(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ue+(Ge(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+Je+"$2box$3")+e}break;case 5936:switch(Ge(e,t+11)){case 114:return ue+e+Je+ce(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+Je+ce(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+Je+ce(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ue+e+Je+e+e}return e}var EP=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Ah:t.return=Ob(t.value,t.length);break;case _b:return Ii([bo(t,{value:ce(t.value,"@","@"+ue)})],i);case Lh:if(t.length)return aP(t.props,function(o){switch(oP(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ii([bo(t,{props:[ce(o,/:(read-\w+)/,":"+Ol+"$1")]})],i);case"::placeholder":return Ii([bo(t,{props:[ce(o,/:(plac\w+)/,":"+ue+"input-$1")]}),bo(t,{props:[ce(o,/:(plac\w+)/,":"+Ol+"$1")]}),bo(t,{props:[ce(o,/:(plac\w+)/,Je+"input-$1")]})],i)}return""})}},CP=[EP],kP=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var S=y.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||CP,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var S=y.getAttribute("data-emotion").split(" "),p=1;p<S.length;p++)o[S[p]]=!0;l.push(y)});var s,u=[SP,_P];{var c,d=[mP,vP(function(y){c.insert(y)})],h=gP(u.concat(i,d)),f=function(S){return Ii(pP(S),h)};s=function(S,p,m,x){c=m,f(S?S+"{"+p.styles+"}":p.styles),x&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new JO({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return g.sheet.hydrate(l),g},Pb={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue=typeof Symbol=="function"&&Symbol.for,Nh=Ue?Symbol.for("react.element"):60103,zh=Ue?Symbol.for("react.portal"):60106,ku=Ue?Symbol.for("react.fragment"):60107,Tu=Ue?Symbol.for("react.strict_mode"):60108,Ou=Ue?Symbol.for("react.profiler"):60114,Pu=Ue?Symbol.for("react.provider"):60109,Mu=Ue?Symbol.for("react.context"):60110,Vh=Ue?Symbol.for("react.async_mode"):60111,Iu=Ue?Symbol.for("react.concurrent_mode"):60111,ju=Ue?Symbol.for("react.forward_ref"):60112,$u=Ue?Symbol.for("react.suspense"):60113,TP=Ue?Symbol.for("react.suspense_list"):60120,Du=Ue?Symbol.for("react.memo"):60115,Ru=Ue?Symbol.for("react.lazy"):60116,OP=Ue?Symbol.for("react.block"):60121,PP=Ue?Symbol.for("react.fundamental"):60117,MP=Ue?Symbol.for("react.responder"):60118,IP=Ue?Symbol.for("react.scope"):60119;function At(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Nh:switch(e=e.type,e){case Vh:case Iu:case ku:case Ou:case Tu:case $u:return e;default:switch(e=e&&e.$$typeof,e){case Mu:case ju:case Ru:case Du:case Pu:return e;default:return t}}case zh:return t}}}function Mb(e){return At(e)===Iu}pe.AsyncMode=Vh;pe.ConcurrentMode=Iu;pe.ContextConsumer=Mu;pe.ContextProvider=Pu;pe.Element=Nh;pe.ForwardRef=ju;pe.Fragment=ku;pe.Lazy=Ru;pe.Memo=Du;pe.Portal=zh;pe.Profiler=Ou;pe.StrictMode=Tu;pe.Suspense=$u;pe.isAsyncMode=function(e){return Mb(e)||At(e)===Vh};pe.isConcurrentMode=Mb;pe.isContextConsumer=function(e){return At(e)===Mu};pe.isContextProvider=function(e){return At(e)===Pu};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nh};pe.isForwardRef=function(e){return At(e)===ju};pe.isFragment=function(e){return At(e)===ku};pe.isLazy=function(e){return At(e)===Ru};pe.isMemo=function(e){return At(e)===Du};pe.isPortal=function(e){return At(e)===zh};pe.isProfiler=function(e){return At(e)===Ou};pe.isStrictMode=function(e){return At(e)===Tu};pe.isSuspense=function(e){return At(e)===$u};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ku||e===Iu||e===Ou||e===Tu||e===$u||e===TP||typeof e=="object"&&e!==null&&(e.$$typeof===Ru||e.$$typeof===Du||e.$$typeof===Pu||e.$$typeof===Mu||e.$$typeof===ju||e.$$typeof===PP||e.$$typeof===MP||e.$$typeof===IP||e.$$typeof===OP)};pe.typeOf=At;Pb.exports=pe;var jP=Pb.exports,Ib=jP,$P={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},DP={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jb={};jb[Ib.ForwardRef]=$P;jb[Ib.Memo]=DP;var RP=!0;function $b(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Bh=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||RP===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Db=function(t,n,r){Bh(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function LP(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var AP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},FP=/[A-Z]|^ms/g,NP=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Rb=function(t){return t.charCodeAt(1)===45},g0=function(t){return t!=null&&typeof t!="boolean"},td=yP(function(e){return Rb(e)?e:e.replace(FP,"-$&").toLowerCase()}),v0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(NP,function(r,i,o){return vn={name:i,styles:o,next:vn},i})}return AP[t]!==1&&!Rb(t)&&typeof n=="number"&&n!==0?n+"px":n};function ya(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return vn={name:n.name,styles:n.styles,next:vn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)vn={name:r.name,styles:r.styles,next:vn},r=r.next;var i=n.styles+";";return i}return zP(e,t,n)}case"function":{if(e!==void 0){var o=vn,a=n(e);return vn=o,ya(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function zP(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ya(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":g0(a)&&(r+=td(o)+":"+v0(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)g0(a[l])&&(r+=td(o)+":"+v0(o,a[l])+";");else{var s=ya(e,t,a);switch(o){case"animation":case"animationName":{r+=td(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var y0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,vn,Uh=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";vn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=ya(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=ya(r,n,t[l]),i&&(o+=a[l]);y0.lastIndex=0;for(var s="",u;(u=y0.exec(o))!==null;)s+="-"+u[1];var c=LP(o)+s;return{name:c,styles:o,next:vn}},VP=function(t){return t()},BP=Hd["useInsertionEffect"]?Hd["useInsertionEffect"]:!1,Lb=BP||VP,Hh={}.hasOwnProperty,Ab=b.createContext(typeof HTMLElement<"u"?kP({key:"css"}):null);Ab.Provider;var Fb=function(t){return b.forwardRef(function(n,r){var i=b.useContext(Ab);return t(n,i,r)})},Nb=b.createContext({}),Jf="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",UP=function(t,n){var r={};for(var i in n)Hh.call(n,i)&&(r[i]=n[i]);return r[Jf]=t,r},HP=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Bh(n,r,i),Lb(function(){return Db(n,r,i)}),null},WP=Fb(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Jf],o=[r],a="";typeof e.className=="string"?a=$b(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=Uh(o,void 0,b.useContext(Nb));a+=t.key+"-"+l.name;var s={};for(var u in e)Hh.call(e,u)&&u!=="css"&&u!==Jf&&(s[u]=e[u]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(HP,{cache:t,serialized:l,isStringTag:typeof i=="string"}),b.createElement(i,s))}),GP=WP,Y=function(t,n){var r=arguments;if(n==null||!Hh.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=GP,o[1]=UP(t,n);for(var a=2;a<i;a++)o[a]=r[a];return b.createElement.apply(null,o)};function Wh(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Uh(t)}var YP=function(){var t=Wh.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},XP=Sk,qP=function(t){return t!=="theme"},x0=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?XP:qP},b0=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},KP=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Bh(n,r,i),Lb(function(){return Db(n,r,i)}),null},ZP=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=b0(t,n,r),s=l||x0(i),u=!s("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var h=c.length,f=1;f<h;f++)d.push(c[f],c[0][f])}var g=Fb(function(y,S,p){var m=u&&y.as||i,x="",w=[],E=y;if(y.theme==null){E={};for(var k in y)E[k]=y[k];E.theme=b.useContext(Nb)}typeof y.className=="string"?x=$b(S.registered,w,y.className):y.className!=null&&(x=y.className+" ");var _=Uh(d.concat(w),S.registered,E);x+=S.key+"-"+_.name,a!==void 0&&(x+=" "+a);var C=u&&l===void 0?x0(m):s,M={};for(var I in y)u&&I==="as"||C(I)&&(M[I]=y[I]);return M.className=x,M.ref=p,b.createElement(b.Fragment,null,b.createElement(KP,{cache:S,serialized:_,isStringTag:typeof m=="string"}),b.createElement(m,M))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=d,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(y,S){return e(y,q({},n,S,{shouldForwardProp:b0(g,S,!0)})).apply(void 0,d)},g}},QP=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Fe=ZP.bind();QP.forEach(function(e){Fe[e]=Fe(e)});const JP=Fe.section`
  background-color:  var(--second-background);
 
 
`,e3=Fe.div`
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
  
`,t3=Fe.h1`

    font-size: 32px;
font-family: var(--main-font);
color: var( --black-color);
text-transform: uppercase;

 
`,n3=Fe.div`
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
`;const r3=Fe($e)`
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
`,i3=Fe.div`
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
`,o3=Fe.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
 

  display: block;
   @media screen and (max-width: 768px) {
  height: 100px;
  }

`,a3=Fe.p`
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

`,s3=()=>{const[e,t]=b.useState([]);return b.useEffect(()=>{async function n(){const i=await(await fetch(`${{}.VITE_API_URL}/api/categories?populate=image`)).json();console.log(i),t(i.data.map(o=>({id:o.id_title,title:o.title,image:`${{}.VITE_API_URL}${o.image.url}`})))}n()},[]),v.jsx(JP,{children:v.jsxs(e3,{children:[v.jsx(t3,{children:"Каталог"}),v.jsx(n3,{children:e.map(n=>v.jsxs(r3,{to:`/catalog/${n.id}`,children:[v.jsx(i3,{children:v.jsx(o3,{src:n.image,alt:n.title})}),v.jsx(a3,{children:n.title})]},n.id))})]})})},l3=Fe.div`

padding-top: 100px;
padding-bottom: 250px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,u3=Fe.h1`
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
`,c3=Fe.p`
  color: #191919;
  font-size: 18px;
  max-width: 600px;
      text-align: center;
      margin-bottom: 50px;
      @media screen and (min-width: 768px) {
 font-size: 25px;
  }
`,d3=Fe($e)`

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

  
`,f3=()=>v.jsxs(l3,{children:[v.jsxs(u3,{children:[" ",v.jsx("span",{children:"404"}),"  PAGE NOT FOUND"]}),v.jsx(c3,{children:" Ой, схоже, ти збився з маршруту! На жаль, ця сторінка безслідно зникла десь на бездоріжжі. Спробуй повернутися на головну "}),v.jsx(d3,{children:" На головну"})]});const p3=T.div`
  width: 100%;
  height: 100%;
font-family: var(--main-font);
`,h3=T.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;var zb={},Vb={},Lu={},Bb={exports:{}},$a={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var w0=Object.getOwnPropertySymbols,m3=Object.prototype.hasOwnProperty,g3=Object.prototype.propertyIsEnumerable;function v3(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function y3(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var x3=y3()?Object.assign:function(e,t){for(var n,r=v3(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)m3.call(n,a)&&(r[a]=n[a]);if(w0){i=w0(n);for(var l=0;l<i.length;l++)g3.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},Ub={exports:{}},se={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh=x3,ro=60103,Hb=60106;se.Fragment=60107;se.StrictMode=60108;se.Profiler=60114;var Wb=60109,Gb=60110,Yb=60112;se.Suspense=60113;var Xb=60115,qb=60116;if(typeof Symbol=="function"&&Symbol.for){var Kt=Symbol.for;ro=Kt("react.element"),Hb=Kt("react.portal"),se.Fragment=Kt("react.fragment"),se.StrictMode=Kt("react.strict_mode"),se.Profiler=Kt("react.profiler"),Wb=Kt("react.provider"),Gb=Kt("react.context"),Yb=Kt("react.forward_ref"),se.Suspense=Kt("react.suspense"),Xb=Kt("react.memo"),qb=Kt("react.lazy")}var S0=typeof Symbol=="function"&&Symbol.iterator;function b3(e){return e===null||typeof e!="object"?null:(e=S0&&e[S0]||e["@@iterator"],typeof e=="function"?e:null)}function Da(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zb={};function io(e,t,n){this.props=e,this.context=t,this.refs=Zb,this.updater=n||Kb}io.prototype.isReactComponent={};io.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Da(85));this.updater.enqueueSetState(this,e,t,"setState")};io.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qb(){}Qb.prototype=io.prototype;function Yh(e,t,n){this.props=e,this.context=t,this.refs=Zb,this.updater=n||Kb}var Xh=Yh.prototype=new Qb;Xh.constructor=Yh;Gh(Xh,io.prototype);Xh.isPureReactComponent=!0;var qh={current:null},Jb=Object.prototype.hasOwnProperty,ew={key:!0,ref:!0,__self:!0,__source:!0};function tw(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Jb.call(t,r)&&!ew.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ro,type:e,key:o,ref:a,props:i,_owner:qh.current}}function w3(e,t){return{$$typeof:ro,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Kh(e){return typeof e=="object"&&e!==null&&e.$$typeof===ro}function S3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _0=/\/+/g;function nd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?S3(""+e.key):t.toString(36)}function Hs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ro:case Hb:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+nd(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(_0,"$&/")+"/"),Hs(i,t,n,"",function(u){return u})):i!=null&&(Kh(i)&&(i=w3(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(_0,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+nd(o,l);a+=Hs(o,t,n,s,i)}else if(s=b3(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+nd(o,l++),a+=Hs(o,t,n,s,i);else if(o==="object")throw t=""+e,Error(Da(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function us(e,t,n){if(e==null)return e;var r=[],i=0;return Hs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function _3(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var nw={current:null};function Kn(){var e=nw.current;if(e===null)throw Error(Da(321));return e}var E3={ReactCurrentDispatcher:nw,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:qh,IsSomeRendererActing:{current:!1},assign:Gh};se.Children={map:us,forEach:function(e,t,n){us(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return us(e,function(){t++}),t},toArray:function(e){return us(e,function(t){return t})||[]},only:function(e){if(!Kh(e))throw Error(Da(143));return e}};se.Component=io;se.PureComponent=Yh;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E3;se.cloneElement=function(e,t,n){if(e==null)throw Error(Da(267,e));var r=Gh({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=qh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Jb.call(t,s)&&!ew.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ro,type:e.type,key:i,ref:o,props:r,_owner:a}};se.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Gb,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Wb,_context:e},e.Consumer=e};se.createElement=tw;se.createFactory=function(e){var t=tw.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:Yb,render:e}};se.isValidElement=Kh;se.lazy=function(e){return{$$typeof:qb,_payload:{_status:-1,_result:e},_init:_3}};se.memo=function(e,t){return{$$typeof:Xb,type:e,compare:t===void 0?null:t}};se.useCallback=function(e,t){return Kn().useCallback(e,t)};se.useContext=function(e,t){return Kn().useContext(e,t)};se.useDebugValue=function(){};se.useEffect=function(e,t){return Kn().useEffect(e,t)};se.useImperativeHandle=function(e,t,n){return Kn().useImperativeHandle(e,t,n)};se.useLayoutEffect=function(e,t){return Kn().useLayoutEffect(e,t)};se.useMemo=function(e,t){return Kn().useMemo(e,t)};se.useReducer=function(e,t,n){return Kn().useReducer(e,t,n)};se.useRef=function(e){return Kn().useRef(e)};se.useState=function(e){return Kn().useState(e)};se.version="17.0.2";Ub.exports=se;var C3=Ub.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k3=C3,rw=60103;$a.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var E0=Symbol.for;rw=E0("react.element"),$a.Fragment=E0("react.fragment")}var T3=k3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O3=Object.prototype.hasOwnProperty,P3={key:!0,ref:!0,__self:!0,__source:!0};function iw(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)O3.call(t,r)&&!P3.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:rw,type:e,key:o,ref:a,props:i,_owner:T3.current}}$a.jsx=iw;$a.jsxs=iw;Bb.exports=$a;var Et=Bb.exports,ow={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var l=arguments[a];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var l in o)t.call(o,l)&&o[l]&&(a=i(a,l));return a}function i(o,a){return a?o?o+" "+a:o+a:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(ow);var Ct=ow.exports;const M3={"lds-circle":"_lds-circle_qlxhy_1"},I3=Object.freeze(Object.defineProperty({__proto__:null,default:M3},Symbol.toStringTag,{value:"Module"})),j3=_t(I3);var aw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Lu,"__esModule",{value:!0});Lu.Circle=void 0;const $3=Et,D3=aw(Ct),R3=aw(j3);function L3({color:e="#7f58af",size:t=64,className:n,style:r,...i}){return(0,$3.jsx)("div",{className:(0,D3.default)(R3.default["lds-circle"],n),style:{background:e,width:t,height:t,...r},...i})}Lu.Circle=L3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var t=Lu;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}})})(Vb);var sw={},Au={};const A3={"lds-default":"_lds-default_wt1n8_1"},F3=Object.freeze(Object.defineProperty({__proto__:null,default:A3},Symbol.toStringTag,{value:"Module"})),N3=_t(F3);var lw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Au,"__esModule",{value:!0});Au.Default=void 0;const C0=Et,z3=lw(Ct),V3=lw(N3);function B3({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(12)].map((a,l)=>(0,C0.jsx)("div",{style:{background:`${e}`,width:t*.075,height:t*.075}},l));return(0,C0.jsx)("div",{className:(0,z3.default)(V3.default["lds-default"],n),style:{height:t,width:t,...r},...i,children:o})}Au.Default=B3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Default=void 0;var t=Au;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return t.Default}})})(sw);var uw={},Fu={};const U3={"lds-dual-ring":"_lds-dual-ring_pbai0_1","lds-dual-ring-after":"_lds-dual-ring-after_pbai0_6"},H3=Object.freeze(Object.defineProperty({__proto__:null,default:U3},Symbol.toStringTag,{value:"Module"})),W3=_t(H3);var cw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Fu,"__esModule",{value:!0});Fu.DualRing=void 0;const k0=Et,T0=cw(Ct),O0=cw(W3);function G3({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,k0.jsx)("div",{className:(0,T0.default)(O0.default["lds-dual-ring"],n),style:{width:t,height:t,...r},...i,children:(0,k0.jsx)("div",{className:(0,T0.default)(O0.default["lds-dual-ring-after"]),style:{borderColor:`${e} transparent`,borderWidth:t*.1,width:t*.7-6,height:t*.7-6}})})}Fu.DualRing=G3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DualRing=void 0;var t=Fu;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return t.DualRing}})})(uw);var dw={},Nu={};const Y3={"lds-ellipsis":"_lds-ellipsis_1fzd3_1","lds-ellipsis1":"_lds-ellipsis1_1fzd3_1","lds-ellipsis2":"_lds-ellipsis2_1fzd3_1","lds-ellipsis3":"_lds-ellipsis3_1fzd3_1"},X3=Object.freeze(Object.defineProperty({__proto__:null,default:Y3},Symbol.toStringTag,{value:"Module"})),q3=_t(X3);var fw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Nu,"__esModule",{value:!0});Nu.Ellipsis=void 0;const P0=Et,K3=fw(Ct),Z3=fw(q3);function Q3({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(4)].map((a,l)=>(0,P0.jsx)("div",{style:{background:`${e}`}},l));return(0,P0.jsx)("div",{className:(0,K3.default)(Z3.default["lds-ellipsis"],n),style:{...r,width:t,height:t},...i,children:o})}Nu.Ellipsis=Q3;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipsis=void 0;var t=Nu;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return t.Ellipsis}})})(dw);var pw={},zu={};const J3={"lds-facebook":"_lds-facebook_1ts9g_1"},eM=Object.freeze(Object.defineProperty({__proto__:null,default:J3},Symbol.toStringTag,{value:"Module"})),tM=_t(eM);var hw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(zu,"__esModule",{value:!0});zu.Facebook=void 0;const M0=Et,nM=hw(Ct),rM=hw(tM);function iM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(3)].map((a,l)=>(0,M0.jsx)("div",{style:{background:`${e}`}},l));return(0,M0.jsx)("div",{className:(0,nM.default)(rM.default["lds-facebook"],n),style:{width:t,height:t,...r},...i,children:o})}zu.Facebook=iM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var t=zu;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return t.Facebook}})})(pw);var mw={},Vu={};const oM={"lds-grid":"_lds-grid_1ftub_1"},aM=Object.freeze(Object.defineProperty({__proto__:null,default:oM},Symbol.toStringTag,{value:"Module"})),sM=_t(aM);var gw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Vu,"__esModule",{value:!0});Vu.Grid=void 0;const I0=Et,lM=gw(Ct),uM=gw(sM);function cM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){const o=[...Array(9)].map((a,l)=>(0,I0.jsx)("div",{style:{background:`${e}`}},l));return(0,I0.jsx)("div",{className:(0,lM.default)(uM.default["lds-grid"],n),style:{width:t,height:t,...r},...i,children:o})}Vu.Grid=cM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Grid=void 0;var t=Vu;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return t.Grid}})})(mw);var vw={},Bu={};const dM={"lds-heart":"_lds-heart_e4yfg_1","div-after":"_div-after_e4yfg_18","div-before":"_div-before_e4yfg_19"},fM=Object.freeze(Object.defineProperty({__proto__:null,default:dM},Symbol.toStringTag,{value:"Module"})),pM=_t(fM);var yw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Bu,"__esModule",{value:!0});Bu.Heart=void 0;const cs=Et,rd=yw(Ct),id=yw(pM);function hM({color:e="#7f58af",size:t=80,className:n,style:r,...i}){return(0,cs.jsx)("div",{className:(0,rd.default)(id.default["lds-heart"],n),style:{width:t,height:t,...r},...i,children:(0,cs.jsxs)("div",{style:{background:e,width:t*.4,height:t*.4,left:t*.3,top:t*.3},children:[(0,cs.jsx)("div",{className:(0,rd.default)(id.default["div-before"]),style:{background:e,width:t*.4,height:t*.4,left:-t*.3}}),(0,cs.jsx)("div",{className:(0,rd.default)(id.default["div-after"]),style:{background:e,width:t*.4,height:t*.4,top:-t*.3}})]})})}Bu.Heart=hM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Heart=void 0;var t=Bu;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return t.Heart}})})(vw);var xw={},Uu={};const mM={"lds-hourglass":"_lds-hourglass_mn3qi_1","lds-hourglass-after":"_lds-hourglass-after_mn3qi_7"},gM=Object.freeze(Object.defineProperty({__proto__:null,default:mM},Symbol.toStringTag,{value:"Module"})),vM=_t(gM);var bw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Uu,"__esModule",{value:!0});Uu.Hourglass=void 0;const j0=Et,$0=bw(Ct),D0=bw(vM);function yM({color:e="#7f58af",size:t=32,className:n,style:r}){return(0,j0.jsx)("div",{className:(0,$0.default)(D0.default["lds-hourglass"],n),style:{...r},children:(0,j0.jsx)("div",{className:(0,$0.default)(D0.default["lds-hourglass-after"]),style:{background:e,borderWidth:t,borderHeight:t}})})}Uu.Hourglass=yM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hourglass=void 0;var t=Uu;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return t.Hourglass}})})(xw);var ww={},Hu={};const Sw="_center_1rufi_10",_w="_spin_1rufi_1",xM={"lds-orbitals":"_lds-orbitals_1rufi_1",center:Sw,"outer-spin":"_outer-spin_1rufi_19","inner-spin":"_inner-spin_1rufi_20","inner-arc":"_inner-arc_1rufi_25","inner-arc_start-a":"_inner-arc_start-a_1rufi_32","inner-arc_end-a":"_inner-arc_end-a_1rufi_36","inner-moon-a":"_inner-moon-a_1rufi_40","inner-moon-b":"_inner-moon-b_1rufi_49","inner-arc_start-b":"_inner-arc_start-b_1rufi_58","inner-arc_end-b":"_inner-arc_end-b_1rufi_62","outer-arc":"_outer-arc_1rufi_66","outer-arc_start-a":"_outer-arc_start-a_1rufi_73","outer-arc_end-a":"_outer-arc_end-a_1rufi_77","outer-moon-a":"_outer-moon-a_1rufi_81","outer-moon-b":"_outer-moon-b_1rufi_90","outer-arc_start-b":"_outer-arc_start-b_1rufi_99","outer-arc_end-b":"_outer-arc_end-b_1rufi_103",spin:_w},bM=Object.freeze(Object.defineProperty({__proto__:null,center:Sw,default:xM,spin:_w},Symbol.toStringTag,{value:"Module"})),wM=_t(bM);var Ew=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Hu,"__esModule",{value:!0});Hu.Orbitals=void 0;const Qe=Et,ot=Ew(Ct),xe=Ew(wM);function SM({color:e="#7f58af",className:t,style:n}){return(0,Qe.jsxs)("div",{className:(0,ot.default)(xe.default["lds-orbitals"],t),style:{...n},children:[(0,Qe.jsx)("div",{className:xe.default.center,style:{background:e}}),(0,Qe.jsxs)("div",{className:(0,ot.default)(xe.default["inner-spin"]),children:[(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_start-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_end-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_start-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-arc"],xe.default["inner-arc_end-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-moon-a"]),style:{background:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["inner-moon-b"]),style:{background:e}})]}),(0,Qe.jsxs)("div",{className:(0,ot.default)(xe.default["outer-spin"]),children:[(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_start-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_end-a"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_start-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-arc"],xe.default["outer-arc_end-b"]),style:{borderColor:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-moon-a"]),style:{background:e}}),(0,Qe.jsx)("div",{className:(0,ot.default)(xe.default["outer-moon-b"]),style:{background:e}})]})]})}Hu.Orbitals=SM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Orbitals=void 0;var t=Hu;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return t.Orbitals}})})(ww);var Cw={},Wu={};const _M={"lds-ring":"_lds-ring_xgxdp_1"},EM=Object.freeze(Object.defineProperty({__proto__:null,default:_M},Symbol.toStringTag,{value:"Module"})),CM=_t(EM);var kw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Wu,"__esModule",{value:!0});Wu.Ring=void 0;const R0=Et,kM=kw(Ct),TM=kw(CM);function OM({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(4)].map((o,a)=>(0,R0.jsx)("div",{style:{borderColor:`${e} transparent transparent transparent`,width:t*.8,height:t*.8,margin:t*.1,borderWidth:t*.1}},a));return(0,R0.jsx)("div",{className:(0,kM.default)(TM.default["lds-ring"],n),style:{width:t,height:t,...r},children:i})}Wu.Ring=OM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ring=void 0;var t=Wu;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return t.Ring}})})(Cw);var Tw={},Gu={};const PM={"lds-ripple":"_lds-ripple_1lgcf_1"},MM=Object.freeze(Object.defineProperty({__proto__:null,default:PM},Symbol.toStringTag,{value:"Module"})),IM=_t(MM);var Ow=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Gu,"__esModule",{value:!0});Gu.Ripple=void 0;const L0=Et,jM=Ow(Ct),$M=Ow(IM);function DM({color:e="#7f58af",size:t=80,className:n,style:r}){const i=[...Array(2)].map((o,a)=>(0,L0.jsx)("div",{style:{borderColor:`${e}`,borderWidth:t*.05}},a));return(0,L0.jsx)("div",{className:(0,jM.default)($M.default["lds-ripple"],n),style:{width:t,height:t,...r},children:i})}Gu.Ripple=DM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ripple=void 0;var t=Gu;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return t.Ripple}})})(Tw);var Pw={},Yu={};const RM={"lds-roller":"_lds-roller_ks1ij_1","div-after":"_div-after_ks1ij_11"},LM=Object.freeze(Object.defineProperty({__proto__:null,default:RM},Symbol.toStringTag,{value:"Module"})),AM=_t(LM);var Mw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Yu,"__esModule",{value:!0});Yu.Roller=void 0;const od=Et,A0=Mw(Ct),F0=Mw(AM);function FM({color:e="#7f58af",className:t,style:n}){const r=[...Array(8)].map((i,o)=>(0,od.jsx)("div",{children:(0,od.jsx)("div",{className:(0,A0.default)(F0.default["div-after"]),style:{background:e}})},o));return(0,od.jsx)("div",{className:(0,A0.default)(F0.default["lds-roller"],t),style:{...n},children:r})}Yu.Roller=FM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Roller=void 0;var t=Yu;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return t.Roller}})})(Pw);var Iw={},Xu={};const NM={"lds-spinner":"_lds-spinner_flf3t_1","div-after":"_div-after_flf3t_12"},zM=Object.freeze(Object.defineProperty({__proto__:null,default:NM},Symbol.toStringTag,{value:"Module"})),VM=_t(zM);var jw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Xu,"__esModule",{value:!0});Xu.Spinner=void 0;const ad=Et,N0=jw(Ct),z0=jw(VM);function BM({color:e="#7f58af",className:t,style:n}){const r=[...Array(12)].map((i,o)=>(0,ad.jsx)("div",{children:(0,ad.jsx)("div",{className:(0,N0.default)(z0.default["div-after"]),style:{background:e}})},o));return(0,ad.jsx)("div",{className:(0,N0.default)(z0.default["lds-spinner"],t),style:{...n},children:r})}Xu.Spinner=BM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Spinner=void 0;var t=Xu;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return t.Spinner}})})(Iw);var $w={},qu={};const Dw="_left_v9vlb_30",Rw="_right_v9vlb_33",Lw="_anim_v9vlb_37",UM={"lds-ouroboro":"_lds-ouroboro_v9vlb_1",left:Dw,right:Rw,anim:Lw,"lds-ouroboro-rotate":"_lds-ouroboro-rotate_v9vlb_1"},HM=Object.freeze(Object.defineProperty({__proto__:null,anim:Lw,default:UM,left:Dw,right:Rw},Symbol.toStringTag,{value:"Module"})),WM=_t(HM);var Aw=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(qu,"__esModule",{value:!0});qu.Ouroboro=void 0;const wo=Et,So=Aw(Ct),_o=Aw(WM);function GM({color:e="#7f58af",style:t,className:n}){return(0,wo.jsxs)("div",{className:(0,So.default)(_o.default["lds-ouroboro"],n),style:{...t},children:[(0,wo.jsx)("span",{className:(0,So.default)(_o.default.left),children:(0,wo.jsx)("span",{className:(0,So.default)(_o.default.anim),style:{background:e}})}),(0,wo.jsx)("span",{className:(0,So.default)(_o.default.right),children:(0,wo.jsx)("span",{className:(0,So.default)(_o.default.anim),style:{background:e}})})]})}qu.Ouroboro=GM;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=void 0;var t=qu;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return t.Ouroboro}})})($w);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Ouroboro=e.Spinner=e.Roller=e.Ripple=e.Ring=e.Orbitals=e.Hourglass=e.Heart=e.Grid=e.Facebook=e.Ellipsis=e.DualRing=e.Default=e.Circle=void 0;const t=Vb;Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.Circle}});const n=sw;Object.defineProperty(e,"Default",{enumerable:!0,get:function(){return n.Default}});const r=uw;Object.defineProperty(e,"DualRing",{enumerable:!0,get:function(){return r.DualRing}});const i=dw;Object.defineProperty(e,"Ellipsis",{enumerable:!0,get:function(){return i.Ellipsis}});const o=pw;Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return o.Facebook}});const a=mw;Object.defineProperty(e,"Grid",{enumerable:!0,get:function(){return a.Grid}});const l=vw;Object.defineProperty(e,"Heart",{enumerable:!0,get:function(){return l.Heart}});const s=xw;Object.defineProperty(e,"Hourglass",{enumerable:!0,get:function(){return s.Hourglass}});const u=ww;Object.defineProperty(e,"Orbitals",{enumerable:!0,get:function(){return u.Orbitals}});const c=Cw;Object.defineProperty(e,"Ring",{enumerable:!0,get:function(){return c.Ring}});const d=Tw;Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return d.Ripple}});const h=Pw;Object.defineProperty(e,"Roller",{enumerable:!0,get:function(){return h.Roller}});const f=Iw;Object.defineProperty(e,"Spinner",{enumerable:!0,get:function(){return f.Spinner}});const g=$w;Object.defineProperty(e,"Ouroboro",{enumerable:!0,get:function(){return g.Ouroboro}})})(zb);const YM=()=>v.jsx(h3,{children:v.jsx(zb.Default,{color:"#6d433da8"})}),XM="/Didiv/assets/Ancient_Kyiv-2153f7e6.ttf",qM=ET`
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
  src: url(${XM}) format('truetype');
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
`,KM=T.div`
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
`,ZM=T.a`
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
`,QM=T.h2`
  margin-top: 20px;
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`,JM=T.h3`

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
`,eI=T.a`

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
`,tI=T.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,nI=[{id:"bikes",title:"Велосипеди",image:"/Didiv/catalog/bikes.jpeg",big:!0},{id:"saddles",title:"Сідла",image:"/Didiv/catalog/saddles.jpeg"},{id:"wheels",title:"Колеса",image:"/Didiv/catalog/wheels.jpeg"},{id:"frames",title:"Рами",image:"/Didiv/catalog/frames.jpeg"},{id:"handlebars",title:"Керма",image:"/Didiv/catalog/handlebars.jpeg"},{id:"stems",title:"Виноси",image:"/Didiv/catalog/stems.jpeg"}],rI=()=>v.jsxs(v.Fragment,{children:[v.jsx(QM,{children:"Каталог"}),v.jsxs(KM,{children:[nI.map(e=>v.jsx(ZM,{href:`Didiv/catalog/${e.id}`,bg:e.image,isBig:e.big,children:v.jsx(JM,{children:e.title})},e.id)),v.jsxs(eI,{href:"catalog",children:[v.jsx("p",{children:"Весь каталог"}),v.jsx(tI,{children:v.jsx(vb,{size:24})})]})]})]});function V0(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Zh(e={},t={}){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:V0(t[r])&&V0(e[r])&&Object.keys(t[r]).length>0&&Zh(e[r],t[r])})}const Fw={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function _n(){const e=typeof document<"u"?document:{};return Zh(e,Fw),e}const iI={document:Fw,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function ft(){const e=typeof window<"u"?window:{};return Zh(e,iI),e}function oI(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function aI(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Nw(e,t=0){return setTimeout(e,t)}function Pl(){return Date.now()}function sI(e){const t=ft();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function lI(e,t="x"){const n=ft();let r,i,o;const a=sI(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function ds(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function uI(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ot(...e){const t=Object(e[0]);for(let n=1;n<e.length;n+=1){const r=e[n];if(r!=null&&!uI(r)){const i=Object.keys(Object(r)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(ds(t[l])&&ds(r[l])?r[l].__swiper__?t[l]=r[l]:Ot(t[l],r[l]):!ds(t[l])&&ds(r[l])?(t[l]={},r[l].__swiper__?t[l]=r[l]:Ot(t[l],r[l])):t[l]=r[l])}}}return t}function oi(e,t,n){e.style.setProperty(t,n)}function zw({swiper:e,targetPosition:t,side:n}){const r=ft(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const s=t>i?"next":"prev",u=(d,h)=>s==="next"&&d>=h||s==="prev"&&d<=h,c=()=>{a=new Date().getTime(),o===null&&(o=a);const d=Math.max(Math.min((a-o)/l,1),0),h=.5-Math.cos(d*Math.PI)/2;let f=i+h*(t-i);if(u(f,t)&&(f=t),e.wrapperEl.scrollTo({[n]:f}),u(f,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:f})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(c)};c()}function xn(e,t=""){const n=ft(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(i=>i.matches(t)):r}function cI(e,t){const n=[t];for(;n.length>0;){const r=n.shift();if(e===r)return!0;n.push(...r.children,...r.shadowRoot?r.shadowRoot.children:[],...r.assignedElements?r.assignedElements():[])}}function dI(e,t){const n=ft();let r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||(r=cI(e,t))),r}function Ml(e){try{console.warn(e);return}catch{}}function Il(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:oI(t)),n}function fI(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function pI(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function cr(e,t){return ft().getComputedStyle(e,null).getPropertyValue(t)}function jl(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Vw(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function ep(e,t,n){const r=ft();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function ze(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function xa(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function Bw(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=xn(e.el,`.${r[i]}`)[0];o||(o=Il("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}const B0='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function hI({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:B0};function i(f){let g;return f&&typeof f=="string"&&e.isElement&&(g=e.el.querySelector(f)||e.hostEl.querySelector(f),g)?g:(f&&(typeof f=="string"&&(g=[...document.querySelectorAll(f)]),e.params.uniqueNavElements&&typeof f=="string"&&g&&g.length>1&&e.el.querySelectorAll(f).length===1?g=e.el.querySelector(f):g&&g.length===1&&(g=g[0])),f&&!g?f:g)}function o(f,g){const y=e.params.navigation;f=ze(f),f.forEach(S=>{S&&(S.classList[g?"add":"remove"](...y.disabledClass.split(" ")),S.tagName==="BUTTON"&&(S.disabled=g),e.params.watchOverflow&&e.enabled&&S.classList[e.isLocked?"add":"remove"](y.lockClass))})}function a(){const{nextEl:f,prevEl:g}=e.navigation;if(e.params.loop){o(g,!1),o(f,!1);return}o(g,e.isBeginning&&!e.params.rewind),o(f,e.isEnd&&!e.params.rewind)}function l(f){f.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function s(f){f.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const f=e.params.navigation;if(e.params.navigation=Bw(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(f.nextEl||f.prevEl))return;let g=i(f.nextEl),y=i(f.prevEl);Object.assign(e.navigation,{nextEl:g,prevEl:y}),g=ze(g),y=ze(y);const S=(p,m)=>{if(p){if(f.addIcons&&p.matches(".swiper-button-next,.swiper-button-prev")&&!p.querySelector("svg")){const x=document.createElement("div");xa(x,B0),p.appendChild(x.querySelector("svg")),x.remove()}p.addEventListener("click",m==="next"?s:l)}!e.enabled&&p&&p.classList.add(...f.lockClass.split(" "))};g.forEach(p=>S(p,"next")),y.forEach(p=>S(p,"prev"))}function c(){let{nextEl:f,prevEl:g}=e.navigation;f=ze(f),g=ze(g);const y=(S,p)=>{S.removeEventListener("click",p==="next"?s:l),S.classList.remove(...e.params.navigation.disabledClass.split(" "))};f.forEach(S=>y(S,"next")),g.forEach(S=>y(S,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?h():(u(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{c()}),n("enable disable",()=>{let{nextEl:f,prevEl:g}=e.navigation;if(f=ze(f),g=ze(g),e.enabled){a();return}[...f,...g].filter(y=>!!y).forEach(y=>y.classList.add(e.params.navigation.lockClass))}),n("click",(f,g)=>{let{nextEl:y,prevEl:S}=e.navigation;y=ze(y),S=ze(S);const p=g.target;let m=S.includes(p)||y.includes(p);if(e.isElement&&!m){const x=g.path||g.composedPath&&g.composedPath();x&&(m=x.find(w=>y.includes(w)||S.includes(w)))}if(e.params.navigation.hideOnClick&&!m){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===p||e.pagination.el.contains(p)))return;let x;y.length?x=y[0].classList.contains(e.params.navigation.hiddenClass):S.length&&(x=S[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...y,...S].filter(w=>!!w).forEach(w=>w.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},h=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),c()};Object.assign(e.navigation,{enable:d,disable:h,update:a,init:u,destroy:c})}function Eo(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function mI({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:p=>p,formatFractionTotal:p=>p,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(p,m){const{bulletActiveClass:x}=e.params.pagination;p&&(p=p[`${m==="prev"?"previous":"next"}ElementSibling`],p&&(p.classList.add(`${x}-${m}`),p=p[`${m==="prev"?"previous":"next"}ElementSibling`],p&&p.classList.add(`${x}-${m}-${m}`)))}function u(p,m,x){if(p=p%x,m=m%x,m===p+1)return"next";if(m===p-1)return"previous"}function c(p){const m=p.target.closest(Eo(e.params.pagination.bulletClass));if(!m)return;p.preventDefault();const x=jl(m)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const w=u(e.realIndex,x,e.slides.length);w==="next"?e.slideNext():w==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function d(){const p=e.rtl,m=e.params.pagination;if(l())return;let x=e.pagination.el;x=ze(x);let w,E;const k=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,_=e.params.loop?Math.ceil(k/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(E=e.previousRealIndex||0,w=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(w=e.snapIndex,E=e.previousSnapIndex):(E=e.previousIndex||0,w=e.activeIndex||0),m.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const C=e.pagination.bullets;let M,I,$;if(m.dynamicBullets&&(o=ep(C[0],e.isHorizontal()?"width":"height",!0),x.forEach(P=>{P.style[e.isHorizontal()?"width":"height"]=`${o*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&E!==void 0&&(a+=w-(E||0),a>m.dynamicMainBullets-1?a=m.dynamicMainBullets-1:a<0&&(a=0)),M=Math.max(w-a,0),I=M+(Math.min(C.length,m.dynamicMainBullets)-1),$=(I+M)/2),C.forEach(P=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(L=>`${m.bulletActiveClass}${L}`)].map(L=>typeof L=="string"&&L.includes(" ")?L.split(" "):L).flat();P.classList.remove(...j)}),x.length>1)C.forEach(P=>{const j=jl(P);j===w?P.classList.add(...m.bulletActiveClass.split(" ")):e.isElement&&P.setAttribute("part","bullet"),m.dynamicBullets&&(j>=M&&j<=I&&P.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),j===M&&s(P,"prev"),j===I&&s(P,"next"))});else{const P=C[w];if(P&&P.classList.add(...m.bulletActiveClass.split(" ")),e.isElement&&C.forEach((j,L)=>{j.setAttribute("part",L===w?"bullet-active":"bullet")}),m.dynamicBullets){const j=C[M],L=C[I];for(let R=M;R<=I;R+=1)C[R]&&C[R].classList.add(...`${m.bulletActiveClass}-main`.split(" "));s(j,"prev"),s(L,"next")}}if(m.dynamicBullets){const P=Math.min(C.length,m.dynamicMainBullets+4),j=(o*P-o)/2-$*o,L=p?"right":"left";C.forEach(R=>{R.style[e.isHorizontal()?L:"top"]=`${j}px`})}}x.forEach((C,M)=>{if(m.type==="fraction"&&(C.querySelectorAll(Eo(m.currentClass)).forEach(I=>{I.textContent=m.formatFractionCurrent(w+1)}),C.querySelectorAll(Eo(m.totalClass)).forEach(I=>{I.textContent=m.formatFractionTotal(_)})),m.type==="progressbar"){let I;m.progressbarOpposite?I=e.isHorizontal()?"vertical":"horizontal":I=e.isHorizontal()?"horizontal":"vertical";const $=(w+1)/_;let P=1,j=1;I==="horizontal"?P=$:j=$,C.querySelectorAll(Eo(m.progressbarFillClass)).forEach(L=>{L.style.transform=`translate3d(0,0,0) scaleX(${P}) scaleY(${j})`,L.style.transitionDuration=`${e.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(xa(C,m.renderCustom(e,w+1,_)),M===0&&r("paginationRender",C)):(M===0&&r("paginationRender",C),r("paginationUpdate",C)),e.params.watchOverflow&&e.enabled&&C.classList[e.isLocked?"add":"remove"](m.lockClass)})}function h(){const p=e.params.pagination;if(l())return;const m=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=ze(x);let w="";if(p.type==="bullets"){let E=e.params.loop?Math.ceil(m/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&E>m&&(E=m);for(let k=0;k<E;k+=1)p.renderBullet?w+=p.renderBullet.call(e,k,p.bulletClass):w+=`<${p.bulletElement} ${e.isElement?'part="bullet"':""} class="${p.bulletClass}"></${p.bulletElement}>`}p.type==="fraction"&&(p.renderFraction?w=p.renderFraction.call(e,p.currentClass,p.totalClass):w=`<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),p.type==="progressbar"&&(p.renderProgressbar?w=p.renderProgressbar.call(e,p.progressbarFillClass):w=`<span class="${p.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(E=>{p.type!=="custom"&&xa(E,w||""),p.type==="bullets"&&e.pagination.bullets.push(...E.querySelectorAll(Eo(p.bulletClass)))}),p.type!=="custom"&&r("paginationRender",x[0])}function f(){e.params.pagination=Bw(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const p=e.params.pagination;if(!p.el)return;let m;typeof p.el=="string"&&e.isElement&&(m=e.el.querySelector(p.el)),!m&&typeof p.el=="string"&&(m=[...document.querySelectorAll(p.el)]),m||(m=p.el),!(!m||m.length===0)&&(e.params.uniqueNavElements&&typeof p.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...e.el.querySelectorAll(p.el)],m.length>1&&(m=m.find(x=>Vw(x,".swiper")[0]===e.el))),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(e.pagination,{el:m}),m=ze(m),m.forEach(x=>{p.type==="bullets"&&p.clickable&&x.classList.add(...(p.clickableClass||"").split(" ")),x.classList.add(p.modifierClass+p.type),x.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.type==="bullets"&&p.dynamicBullets&&(x.classList.add(`${p.modifierClass}${p.type}-dynamic`),a=0,p.dynamicMainBullets<1&&(p.dynamicMainBullets=1)),p.type==="progressbar"&&p.progressbarOpposite&&x.classList.add(p.progressbarOppositeClass),p.clickable&&x.addEventListener("click",c),e.enabled||x.classList.add(p.lockClass)}))}function g(){const p=e.params.pagination;if(l())return;let m=e.pagination.el;m&&(m=ze(m),m.forEach(x=>{x.classList.remove(p.hiddenClass),x.classList.remove(p.modifierClass+p.type),x.classList.remove(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.clickable&&(x.classList.remove(...(p.clickableClass||"").split(" ")),x.removeEventListener("click",c))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...p.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const p=e.params.pagination;let{el:m}=e.pagination;m=ze(m),m.forEach(x=>{x.classList.remove(p.horizontalClass,p.verticalClass),x.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?S():(f(),h(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{h(),d()}),n("destroy",()=>{g()}),n("enable disable",()=>{let{el:p}=e.pagination;p&&(p=ze(p),p.forEach(m=>m.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(p,m)=>{const x=m.target,w=ze(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&w&&w.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const E=w[0].classList.contains(e.params.pagination.hiddenClass);r(E===!0?"paginationShow":"paginationHide"),w.forEach(k=>k.classList.toggle(e.params.pagination.hiddenClass))}});const y=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=ze(p),p.forEach(m=>m.classList.remove(e.params.pagination.paginationDisabledClass))),f(),h(),d()},S=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=ze(p),p.forEach(m=>m.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:y,disable:S,render:h,update:d,init:f,destroy:g})}function gI({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=i&&i.autoplay?i.autoplay.delay:3e3,s=i&&i.autoplay?i.autoplay.delay:3e3,u,c=new Date().getTime(),d,h,f,g,y,S;function p(A){!e||e.destroyed||!e.wrapperEl||A.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",p),!(S||A.detail&&A.detail.bySwiperTouchMove)&&M())}const m=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(s=u,d=!1);const A=e.autoplay.paused?u:c+s-new Date().getTime();e.autoplay.timeLeft=A,r("autoplayTimeLeft",A,A/l),a=requestAnimationFrame(()=>{m()})},x=()=>{let A;return e.virtual&&e.params.virtual.enabled?A=e.slides.find(D=>D.classList.contains("swiper-slide-active")):A=e.slides[e.activeIndex],A?parseInt(A.getAttribute("data-swiper-autoplay"),10):void 0},w=()=>{let A=e.params.autoplay.delay;const O=x();return!Number.isNaN(O)&&O>0&&(A=O),A},E=A=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),m();let O=A;typeof O>"u"&&(O=w(),l=O,s=O),u=O;const D=e.params.speed,N=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(D,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,D,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(D,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,D,!0,!0),r("autoplay")),e.params.cssMode&&(c=new Date().getTime(),requestAnimationFrame(()=>{E()})))};return O>0?(clearTimeout(o),o=setTimeout(()=>{N()},O)):requestAnimationFrame(()=>{N()}),O},k=()=>{c=new Date().getTime(),e.autoplay.running=!0,E(),r("autoplayStart")},_=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},C=(A,O)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),A||(y=!0);const D=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",p):M()};if(e.autoplay.paused=!0,O){D();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-c),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),D())},M=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(c=new Date().getTime(),y?(y=!1,E(u)):E(),e.autoplay.paused=!1,r("autoplayResume"))},I=()=>{if(e.destroyed||!e.autoplay.running)return;const A=_n();A.visibilityState==="hidden"&&(y=!0,C(!0)),A.visibilityState==="visible"&&M()},$=A=>{A.pointerType==="mouse"&&(y=!0,S=!0,!(e.animating||e.autoplay.paused)&&C(!0))},P=A=>{A.pointerType==="mouse"&&(S=!1,e.autoplay.paused&&M())},j=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",$),e.el.addEventListener("pointerleave",P))},L=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",$),e.el.removeEventListener("pointerleave",P))},R=()=>{_n().addEventListener("visibilitychange",I)},F=()=>{_n().removeEventListener("visibilitychange",I)};n("init",()=>{e.params.autoplay.enabled&&(j(),R(),k())}),n("destroy",()=>{L(),F(),e.autoplay.running&&_()}),n("_freeModeStaticRelease",()=>{(f||y)&&M()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?_():C(!0,!0)}),n("beforeTransitionStart",(A,O,D)=>{e.destroyed||!e.autoplay.running||(D||!e.params.autoplay.disableOnInteraction?C(!0,!0):_())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){_();return}h=!0,f=!1,y=!1,g=setTimeout(()=>{y=!0,f=!0,C(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!h)){if(clearTimeout(g),clearTimeout(o),e.params.autoplay.disableOnInteraction){f=!1,h=!1;return}f&&e.params.cssMode&&M(),f=!1,h=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(u=w(),l=w())}),Object.assign(e.autoplay,{start:k,stop:_,pause:C,resume:M})}let sd;function vI(){const e=ft(),t=_n();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Uw(){return sd||(sd=vI()),sd}let ld;function yI({userAgent:e}={}){const t=Uw(),n=ft(),r=n.navigator.platform,i=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const c=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=r==="Win32";let f=r==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&f&&t.touch&&g.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),f=!1),s&&!h&&(o.os="android",o.android=!0),(u||d||c)&&(o.os="ios",o.ios=!0),o}function Hw(e={}){return ld||(ld=yI(e)),ld}let ud;function xI(){const e=ft(),t=Hw();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[s,u]=l.split("Version/")[1].split(" ")[0].split(".").map(c=>Number(c));n=s<16||s===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function Ww(){return ud||(ud=xI()),ud}function bI({swiper:e,on:t,emit:n}){const r=ft();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(c=>{o=r.requestAnimationFrame(()=>{const{width:d,height:h}=e;let f=d,g=h;c.forEach(({contentBoxSize:y,contentRect:S,target:p})=>{p&&p!==e.el||(f=S?S.width:(y[0]||y).inlineSize,g=S?S.height:(y[0]||y).blockSize)}),(f!==d||g!==h)&&a()})}),i.observe(e.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function wI({swiper:e,extendParams:t,on:n,emit:r}){const i=[],o=ft(),a=(u,c={})=>{const d=o.MutationObserver||o.WebkitMutationObserver,h=new d(f=>{if(e.__preventObserver__)return;if(f.length===1){r("observerUpdate",f[0]);return}const g=function(){r("observerUpdate",f[0])};o.requestAnimationFrame?o.requestAnimationFrame(g):o.setTimeout(g,0)});h.observe(u,{attributes:typeof c.attributes>"u"?!0:c.attributes,childList:e.isElement||(typeof c.childList>"u"?!0:c).childList,characterData:typeof c.characterData>"u"?!0:c.characterData}),i.push(h)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=Vw(e.hostEl);for(let c=0;c<u.length;c+=1)a(u[c])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},s=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var SI={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...o){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),t}};function _I(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(cr(r,"padding-left")||0,10)-parseInt(cr(r,"padding-right")||0,10),n=n-parseInt(cr(r,"padding-top")||0,10)-parseInt(cr(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function EI(){const e=this;function t(I,$){return parseFloat(I.getPropertyValue(e.getDirectionLabel($))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,s=l?e.virtual.slides.length:e.slides.length,u=xn(i,`.${e.params.slideClass}, swiper-slide`),c=l?e.virtual.slides.length:u.length;let d=[];const h=[],f=[];let g=n.slidesOffsetBefore;typeof g=="function"&&(g=n.slidesOffsetBefore.call(e));let y=n.slidesOffsetAfter;typeof y=="function"&&(y=n.slidesOffsetAfter.call(e));const S=e.snapGrid.length,p=e.slidesGrid.length,m=e.size-g-y;let x=n.spaceBetween,w=-g,E=0,k=0;if(typeof m>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*m:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-g-y,u.forEach(I=>{o?I.style.marginLeft="":I.style.marginRight="",I.style.marginBottom="",I.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(oi(r,"--swiper-centered-offset-before",""),oi(r,"--swiper-centered-offset-after","")),n.cssMode&&(oi(r,"--swiper-slides-offset-before",`${g}px`),oi(r,"--swiper-slides-offset-after",`${y}px`));const _=n.grid&&n.grid.rows>1&&e.grid;_?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let C;const M=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(I=>typeof n.breakpoints[I].slidesPerView<"u").length>0;for(let I=0;I<c;I+=1){C=0;const $=u[I];if(!($&&(_&&e.grid.updateSlide(I,$,u),cr($,"display")==="none"))){if(l&&n.slidesPerView==="auto")n.virtual.slidesPerViewAutoSlideSize&&(C=n.virtual.slidesPerViewAutoSlideSize),C&&$&&(n.roundLengths&&(C=Math.floor(C)),$.style[e.getDirectionLabel("width")]=`${C}px`);else if(n.slidesPerView==="auto"){M&&($.style[e.getDirectionLabel("width")]="");const P=getComputedStyle($),j=$.style.transform,L=$.style.webkitTransform;if(j&&($.style.transform="none"),L&&($.style.webkitTransform="none"),n.roundLengths)C=e.isHorizontal()?ep($,"width",!0):ep($,"height",!0);else{const R=t(P,"width"),F=t(P,"padding-left"),A=t(P,"padding-right"),O=t(P,"margin-left"),D=t(P,"margin-right"),N=P.getPropertyValue("box-sizing");if(N&&N==="border-box")C=R+O+D;else{const{clientWidth:B,offsetWidth:z}=$;C=R+F+A+O+D+(z-B)}}j&&($.style.transform=j),L&&($.style.webkitTransform=L),n.roundLengths&&(C=Math.floor(C))}else C=(m-(n.slidesPerView-1)*x)/n.slidesPerView,n.roundLengths&&(C=Math.floor(C)),$&&($.style[e.getDirectionLabel("width")]=`${C}px`);$&&($.swiperSlideSize=C),f.push(C),n.centeredSlides?(w=w+C/2+E/2+x,E===0&&I!==0&&(w=w-m/2-x),I===0&&(w=w-m/2-x),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),k%n.slidesPerGroup===0&&d.push(w),h.push(w)):(n.roundLengths&&(w=Math.floor(w)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup===0&&d.push(w),h.push(w),w=w+C+x),e.virtualSize+=C+x,E=C,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,m)+y,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+x}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),_&&e.grid.updateWrapperSize(C,d),!n.centeredSlides){const I=n.slidesPerView!=="auto"&&n.slidesPerView%1!==0,$=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView==="auto"||I);let P=d.length;if($){let L;if(n.slidesPerView==="auto"){L=1;let R=0;for(let F=f.length-1;F>=0&&(R+=f[F]+(F<f.length-1?x:0),R<=m);F-=1)L=f.length-F}else L=Math.floor(n.slidesPerView);P=Math.max(c-L,0)}const j=[];for(let L=0;L<d.length;L+=1){let R=d[L];n.roundLengths&&(R=Math.floor(R)),$?L<=P&&j.push(R):d[L]<=e.virtualSize-m&&j.push(R)}d=j,Math.floor(e.virtualSize-m)-Math.floor(d[d.length-1])>1&&($||d.push(e.virtualSize-m))}if(l&&n.loop){const I=f[0]+x;if(n.slidesPerGroup>1){const $=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),P=I*n.slidesPerGroup;for(let j=0;j<$;j+=1)d.push(d[d.length-1]+P)}for(let $=0;$<e.virtual.slidesBefore+e.virtual.slidesAfter;$+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+I),h.push(h[h.length-1]+I),e.virtualSize+=I}if(d.length===0&&(d=[0]),x!==0){const I=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter(($,P)=>!n.cssMode||n.loop?!0:P!==u.length-1).forEach($=>{$.style[I]=`${x}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let I=0;f.forEach(P=>{I+=P+(x||0)}),I-=x;const $=I>m?I-m:0;d=d.map(P=>P<=0?-g:P>$?$+y:P)}if(n.centerInsufficientSlides){let I=0;if(f.forEach($=>{I+=$+(x||0)}),I-=x,I<m){const $=(m-I)/2;d.forEach((P,j)=>{d[j]=P-$}),h.forEach((P,j)=>{h[j]=P+$})}}if(Object.assign(e,{slides:u,snapGrid:d,slidesGrid:h,slidesSizesGrid:f}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){oi(r,"--swiper-centered-offset-before",`${-d[0]}px`),oi(r,"--swiper-centered-offset-after",`${e.size/2-f[f.length-1]/2}px`);const I=-e.snapGrid[0],$=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(P=>P+I),e.slidesGrid=e.slidesGrid.map(P=>P+$)}if(c!==s&&e.emit("slidesLengthChange"),d.length!==S&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==p&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const I=`${n.containerModifierClass}backface-hidden`,$=e.el.classList.contains(I);c<=n.maxBackfaceHiddenSlides?$||e.el.classList.add(I):$&&e.el.classList.remove(I)}}function CI(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function kI(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const U0=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function TI(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const u=r[s];let c=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const d=(a+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),h=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+l),f=-(a-c),g=f+t.slidesSizesGrid[s],y=f>=0&&f<=t.size-t.slidesSizesGrid[s],S=f>=0&&f<t.size-1||g>1&&g<=t.size||f<=0&&g>=t.size;S&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(s)),U0(u,S,n.slideVisibleClass),U0(u,y,n.slideFullyVisibleClass),u.progress=i?-d:d,u.originalProgress=i?-h:h}}function OI(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const c=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=c||i<=0,a=d||i>=1,c&&(i=0),d&&(i=1)}if(n.loop){const c=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),h=t.slidesGrid[c],f=t.slidesGrid[d],g=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=h?l=(y-h)/g:l=(y+g-f)/g,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(s&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const cd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function PI(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,l=d=>xn(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];let s,u,c;if(o)if(n.loop){let d=i-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${d}"]`)}else s=l(`[data-swiper-slide-index="${i}"]`);else a?(s=t.find(d=>d.column===i),c=t.find(d=>d.column===i+1),u=t.find(d=>d.column===i-1)):s=t[i];s&&(a||(c=pI(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=t[0]),u=fI(s,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(d=>{cd(d,d===s,n.slideActiveClass),cd(d,d===c,n.slideNextClass),cd(d,d===u,n.slidePrevClass)}),e.emitSlidesClasses()}const Ws=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},dd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},tp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,u)=>a+r+u)),e.slides.forEach((s,u)=>{l.includes(s.column)&&dd(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&dd(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&dd(e,a)};function MI(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function II(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,u;const c=f=>{let g=f-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof s>"u"&&(s=MI(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const f=Math.min(i.slidesPerGroupSkip,s);u=f+Math.floor((s-f)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),s===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(s===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=c(s);return}const d=t.grid&&i.grid&&i.grid.rows>1;let h;if(t.virtual&&i.virtual.enabled)i.loop?h=c(s):h=s;else if(d){const f=t.slides.find(y=>y.column===s);let g=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(f),0)),h=Math.floor(g/i.grid.rows)}else if(t.slides[s]){const f=t.slides[s].getAttribute("data-swiper-slide-index");f?h=parseInt(f,10):h=s}else h=s;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:a,realIndex:h,previousIndex:o,activeIndex:s}),t.initialized&&tp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==h&&t.emit("realIndexChange"),t.emit("slideChange"))}function jI(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,a;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,a=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var $I={updateSize:_I,updateSlides:EI,updateAutoHeight:CI,updateSlidesOffset:kI,updateSlidesProgress:TI,updateProgress:OI,updateSlidesClasses:PI,updateActiveIndex:II,updateClickedSlide:jI};function DI(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=lI(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function RI(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const u=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${u}px)`);let c;const d=n.maxTranslate()-n.minTranslate();d===0?c=0:c=(e-n.minTranslate())/d,c!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function LI(){return-this.snapGrid[0]}function AI(){return-this.snapGrid[this.snapGrid.length-1]}function FI(e=0,t=this.params.speed,n=!0,r=!0,i){const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),u=o.maxTranslate();let c;if(r&&e>s?c=s:r&&e<u?c=u:c=e,o.updateProgress(c),a.cssMode){const d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-c;else{if(!o.support.smoothScroll)return zw({swiper:o,targetPosition:-c,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(h){!o||o.destroyed||h.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var NI={getTranslate:DI,setTranslate:RI,minTranslate:LI,maxTranslate:AI,translateTo:FI};function zI(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Gw({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:o}=e;let a=n;a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&a==="reset"?e.emit(`slideResetTransition${r}`):t&&i!==o&&(e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function VI(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Gw({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function BI(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Gw({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var UI={setTransition:zI,transitionStart:VI,transitionEnd:BI};function HI(e=0,t,n=!0,r,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:u,previousIndex:c,activeIndex:d,rtlTranslate:h,wrapperEl:f,enabled:g}=o;if(!g&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const y=Math.min(o.params.slidesPerGroupSkip,a);let S=y+Math.floor((a-y)/o.params.slidesPerGroup);S>=s.length&&(S=s.length-1);const p=-s[S];if(l.normalizeSlideIndex)for(let _=0;_<u.length;_+=1){const C=-Math.floor(p*100),M=Math.floor(u[_]*100),I=Math.floor(u[_+1]*100);typeof u[_+1]<"u"?C>=M&&C<I-(I-M)/2?a=_:C>=M&&C<I&&(a=_+1):C>=M&&(a=_)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&(h?p>o.translate&&p>o.minTranslate():p<o.translate&&p<o.minTranslate())||!o.allowSlidePrev&&p>o.translate&&p>o.maxTranslate()&&(d||0)!==a))return!1;a!==(c||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(p);let m;a>d?m="next":a<d?m="prev":m="reset";const x=o.virtual&&o.params.virtual.enabled;if(!(x&&i)&&(h&&-p===o.translate||!h&&p===o.translate))return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(p),m!=="reset"&&(o.transitionStart(n,m),o.transitionEnd(n,m)),!1;if(l.cssMode){const _=o.isHorizontal(),C=h?p:-p;if(t===0)x&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),x&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[_?"scrollLeft":"scrollTop"]=C})):f[_?"scrollLeft":"scrollTop"]=C,x&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return zw({swiper:o,targetPosition:C,side:_?"left":"top"}),!0;f.scrollTo({[_?"left":"top"]:C,behavior:"smooth"})}return!0}const k=Ww().isSafari;return x&&!i&&k&&o.isElement&&o.virtual.update(!1,!1,a),o.setTransition(t),o.setTranslate(p),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,m),t===0?o.transitionEnd(n,m):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(C){!o||o.destroyed||C.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,m))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function WI(e=0,t,n=!0,r){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(o){const y=a*i.params.grid.rows;l=i.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===y).column}else l=i.getSlideIndexByData(a);const s=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u,slidesOffsetBefore:c,slidesOffsetAfter:d}=i.params,h=u||!!c||!!d;let f=i.params.slidesPerView;f==="auto"?f=i.slidesPerViewDynamic():(f=Math.ceil(parseFloat(i.params.slidesPerView,10)),h&&f%2===0&&(f=f+1));let g=s-l<f;if(h&&(g=g||l<Math.ceil(f/2)),r&&h&&i.params.slidesPerView!=="auto"&&!o&&(g=!1),g){const y=h?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?l+1:l-s+1,slideRealIndex:y==="next"?i.realIndex:void 0})}if(o){const y=a*i.params.grid.rows;a=i.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===y).column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function GI(e,t=!0,n){const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+s,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function YI(e,t=!0,n){const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:u}=r;if(!s||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const c=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=l?r.translate:-r.translate;function h(m){return m<0?-Math.floor(Math.abs(m)):Math.floor(m)}const f=h(d),g=o.map(m=>h(m)),y=i.freeMode&&i.freeMode.enabled;let S=o[g.indexOf(f)-1];if(typeof S>"u"&&(i.cssMode||y)){let m;o.forEach((x,w)=>{f>=x&&(m=w)}),typeof m<"u"&&(S=y?o[m]:o[m>0?m-1:m])}let p=0;if(typeof S<"u"&&(p=a.indexOf(S),p<0&&(p=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(p=p-r.slidesPerViewDynamic("previous",!0)+1,p=Math.max(p,0))),i.rewind&&r.isBeginning){const m=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(m,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(p,e,t,n)}),!0;return r.slideTo(p,e,t,n)}function XI(e,t=!0,n){const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function qI(e,t=!0,n,r=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const u=i.snapGrid[l],c=i.snapGrid[l+1];s-u>(c-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],c=i.snapGrid[l];s-u<=(c-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function KI(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):i>(l?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(xn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),Nw(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var ZI={slideTo:HI,slideToLoop:WI,slideNext:GI,slidePrev:YI,slideReset:XI,slideToClosest:qI,slideToClickedSlide:KI};function QI(e,t){const n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{xn(i,`.${r.slideClass}, swiper-slide`).forEach((g,y)=>{g.setAttribute("data-swiper-slide-index",y)})},a=()=>{const f=xn(i,`.${r.slideBlankClass}`);f.forEach(g=>{g.remove()}),f.length>0&&(n.recalcSlides(),n.updateSlides())},l=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||l)&&a();const s=r.slidesPerGroup*(l?r.grid.rows:1),u=n.slides.length%s!==0,c=l&&n.slides.length%r.grid.rows!==0,d=f=>{for(let g=0;g<f;g+=1){const y=n.isElement?Il("swiper-slide",[r.slideBlankClass]):Il("div",[r.slideClass,r.slideBlankClass]);n.slidesEl.append(y)}};if(u){if(r.loopAddBlankSlides){const f=s-n.slides.length%s;d(f),n.recalcSlides(),n.updateSlides()}else Ml("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(c){if(r.loopAddBlankSlides){const f=r.grid.rows-n.slides.length%r.grid.rows;d(f),n.recalcSlides(),n.updateSlides()}else Ml("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const h=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:h?void 0:"next",initial:t})}function JI({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:o,byController:a,byMousewheel:l}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:u,allowSlidePrev:c,allowSlideNext:d,slidesEl:h,params:f}=s,{centeredSlides:g,slidesOffsetBefore:y,slidesOffsetAfter:S,initialSlide:p}=f,m=g||!!y||!!S;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&f.virtual.enabled){t&&(!m&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):m&&s.snapIndex<f.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=c,s.allowSlideNext=d,s.emit("loopFix");return}let x=f.slidesPerView;x==="auto"?x=s.slidesPerViewDynamic():(x=Math.ceil(parseFloat(f.slidesPerView,10)),m&&x%2===0&&(x=x+1));const w=f.slidesPerGroupAuto?x:f.slidesPerGroup;let E=m?Math.max(w,Math.ceil(x/2)):w;E%w!==0&&(E+=w-E%w),E+=f.loopAdditionalSlides,s.loopedSlides=E;const k=s.grid&&f.grid&&f.grid.rows>1;u.length<x+E||s.params.effect==="cards"&&u.length<x+E*2?Ml("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):k&&f.grid.fill==="row"&&Ml("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const _=[],C=[],M=k?Math.ceil(u.length/f.grid.rows):u.length,I=o&&M-p<x&&!m;let $=I?p:s.activeIndex;typeof i>"u"?i=s.getSlideIndex(u.find(O=>O.classList.contains(f.slideActiveClass))):$=i;const P=n==="next"||!n,j=n==="prev"||!n;let L=0,R=0;const A=(k?u[i].column:i)+(m&&typeof r>"u"?-x/2+.5:0);if(A<E){L=Math.max(E-A,w);for(let O=0;O<E-A;O+=1){const D=O-Math.floor(O/M)*M;if(k){const N=M-D-1;for(let B=u.length-1;B>=0;B-=1)u[B].column===N&&_.push(B)}else _.push(M-D-1)}}else if(A+x>M-E){R=Math.max(A-(M-E*2),w),I&&(R=Math.max(R,x-M+p+1));for(let O=0;O<R;O+=1){const D=O-Math.floor(O/M)*M;k?u.forEach((N,B)=>{N.column===D&&C.push(B)}):C.push(D)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&u.length<x+E*2&&(C.includes(i)&&C.splice(C.indexOf(i),1),_.includes(i)&&_.splice(_.indexOf(i),1)),j&&_.forEach(O=>{u[O].swiperLoopMoveDOM=!0,h.prepend(u[O]),u[O].swiperLoopMoveDOM=!1}),P&&C.forEach(O=>{u[O].swiperLoopMoveDOM=!0,h.append(u[O]),u[O].swiperLoopMoveDOM=!1}),s.recalcSlides(),f.slidesPerView==="auto"?s.updateSlides():k&&(_.length>0&&j||C.length>0&&P)&&s.slides.forEach((O,D)=>{s.grid.updateSlide(D,O,s.slides)}),f.watchSlidesProgress&&s.updateSlidesOffset(),t){if(_.length>0&&j){if(typeof e>"u"){const O=s.slidesGrid[$],N=s.slidesGrid[$+L]-O;l?s.setTranslate(s.translate-N):(s.slideTo($+Math.ceil(L),0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else if(r){const O=k?_.length/f.grid.rows:_.length;s.slideTo(s.activeIndex+O,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(C.length>0&&P)if(typeof e>"u"){const O=s.slidesGrid[$],N=s.slidesGrid[$-R]-O;l?s.setTranslate(s.translate-N):(s.slideTo($-R,0,!1,!0),r&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-N,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-N))}else{const O=k?C.length/f.grid.rows:C.length;s.slideTo(s.activeIndex-O,0,!1,!0)}}if(s.allowSlidePrev=c,s.allowSlideNext=d,s.controller&&s.controller.control&&!a){const O={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(D=>{!D.destroyed&&D.params.loop&&D.loopFix({...O,slideTo:D.params.slidesPerView===f.slidesPerView?t:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...O,slideTo:s.controller.control.params.slidesPerView===f.slidesPerView?t:!1})}s.emit("loopFix")}function e4(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var t4={loopCreate:QI,loopFix:JI,loopDestroy:e4};function n4(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function r4(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var i4={setGrabCursor:n4,unsetGrabCursor:r4};function o4(e,t=this){function n(r){if(!r||r===_n()||r===ft())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function H0(e,t,n){const r=ft(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function a4(e){const t=this,n=_n();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){H0(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=r.target;if(o.touchEventsTarget==="wrapper"&&!dI(s,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",c=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&c&&(s=c[0]);const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,h=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(h?o4(d,s):s.closest(d))){t.allowClick=!0;return}if(o.swipeHandler&&!s.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const f=a.currentX,g=a.currentY;if(!H0(t,r,f))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=f,a.startY=g,i.touchStartTime=Pl(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let y=!0;s.matches(i.focusableElements)&&(y=!1,s.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!s.matches(i.focusableElements))&&n.activeElement.blur();const S=y&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||S)&&!s.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function s4(e){const t=_n(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(r.touchId!==null||s.pointerId!==r.pointerId))return;let u;if(s.type==="touchmove"){if(u=[...s.changedTouches].find(k=>k.identifier===r.touchId),!u||u.identifier!==r.touchId)return}else u=s;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const c=u.pageX,d=u.pageY;if(s.preventedByNestedSwiper){o.startX=c,o.startY=d;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d}),r.touchStartTime=Pl());return}if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else{if(a&&(c>o.startX&&-n.translate<=n.maxTranslate()||c<o.startX&&-n.translate>=n.minTranslate()))return;if(!a&&(c<o.startX&&n.translate<=n.maxTranslate()||c>o.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==s.target&&s.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",s),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=c,o.currentY=d;const h=o.currentX-o.startX,f=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(h**2+f**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let k;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:h*h+f*f>=25&&(k=Math.atan2(Math.abs(f),Math.abs(h))*180/Math.PI,r.isScrolling=n.isHorizontal()?k>i.touchAngle:90-k>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||s.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let g=n.isHorizontal()?h:f,y=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(g=Math.abs(g)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),o.diff=g,g*=i.touchRatio,a&&(g=-g,y=-y);const S=n.touchesDirection;n.swipeDirection=g>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const p=n.params.loop&&!i.cssMode,m=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(p&&m&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(k)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let x;if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&S!==n.touchesDirection&&p&&m&&Math.abs(g)>=1){Object.assign(o,{startX:c,startY:d,currentX:c,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=g+r.startTranslate;let w=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),g>0?(p&&m&&!x&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+g)**E))):g<0&&(p&&m&&!x&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-g)**E))),w&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(g)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function l4(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].find(E=>E.identifier===n.touchId),!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:l,rtlTranslate:s,slidesGrid:u,enabled:c}=t;if(!c||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=Pl(),h=d-n.touchStartTime;if(t.allowClick){const E=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(E&&E[0]||r.target,E),t.emit("tap click",r),h<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Pl(),Nw(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let f;if(a.followFinger?f=s?t.translate:-t.translate:f=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const g=f>=-t.maxTranslate()&&!t.params.loop;let y=0,S=t.slidesSizesGrid[0];for(let E=0;E<u.length;E+=E<a.slidesPerGroupSkip?1:a.slidesPerGroup){const k=E<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[E+k]<"u"?(g||f>=u[E]&&f<u[E+k])&&(y=E,S=u[E+k]-u[E]):(g||f>=u[E])&&(y=E,S=u[u.length-1]-u[u.length-2])}let p=null,m=null;a.rewind&&(t.isBeginning?m=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(p=0));const x=(f-u[y])/S,w=y<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(h>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?p:y+w):t.slideTo(y)),t.swipeDirection==="prev"&&(x>1-a.longSwipesRatio?t.slideTo(y+w):m!==null&&x<0&&Math.abs(x)>a.longSwipesRatio?t.slideTo(m):t.slideTo(y))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+w):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(p!==null?p:y+w),t.swipeDirection==="prev"&&t.slideTo(m!==null?m:y))}}function W0(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function u4(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function c4(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function d4(e){const t=this;Ws(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function f4(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Yw=(e,t)=>{const n=_n(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[s]("touchstart",e.onTouchStart,{passive:!1}),i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("touchend",e.onTouchEnd,{passive:!0}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("touchcancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),n[s]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",W0,!0):e[u]("observerUpdate",W0,!0),i[s]("load",e.onLoad,{capture:!0}))};function p4(){const e=this,{params:t}=e;e.onTouchStart=a4.bind(e),e.onTouchMove=s4.bind(e),e.onTouchEnd=l4.bind(e),e.onDocumentTouchStart=f4.bind(e),t.cssMode&&(e.onScroll=c4.bind(e)),e.onClick=u4.bind(e),e.onLoad=d4.bind(e),Yw(e,"on")}function h4(){Yw(this,"off")}var m4={attachEvents:p4,detachEvents:h4};const G0=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function g4(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=_n(),l=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",s=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:a.querySelector(r.breakpointsBase),u=e.getBreakpoint(o,l,s);if(!u||e.currentBreakpoint===u)return;const d=(u in o?o[u]:void 0)||e.originalParams,h=G0(e,r),f=G0(e,d),g=e.params.grabCursor,y=d.grabCursor,S=r.enabled;h&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!h&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),g&&!y?e.unsetGrabCursor():!g&&y&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(k=>{if(typeof d[k]>"u")return;const _=r[k]&&r[k].enabled,C=d[k]&&d[k].enabled;_&&!C&&e[k].disable(),!_&&C&&e[k].enable()});const p=d.direction&&d.direction!==r.direction,m=r.loop&&(d.slidesPerView!==r.slidesPerView||p),x=r.loop;p&&n&&e.changeDirection(),Ot(e.params,d);const w=e.params.enabled,E=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),S&&!w?e.disable():!S&&w&&e.enable(),e.currentBreakpoint=u,e.emit("_beforeBreakpoint",d),n&&(m?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&E?(e.loopCreate(t),e.updateSlides()):x&&!E&&e.loopDestroy()),e.emit("breakpoint",d)}function v4(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=ft(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:u}=a[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=s):u<=n.clientWidth&&(r=s)}return r||"max"}var y4={setBreakpoint:g4,getBreakpoint:v4};function x4(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function b4(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=x4(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function w4(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var S4={addClasses:b4,removeClasses:w4};function _4(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var E4={checkOverflow:_4},np={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function C4(e,t){return function(r={}){const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Ot(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Ot(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Ot(t,r)}}const fd={eventsEmitter:SI,update:$I,translate:NI,transition:UI,slide:ZI,loop:t4,grabCursor:i4,events:m4,breakpoints:y4,checkOverflow:E4,classes:S4},pd={};let Qh=class On{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Ot({},r),n&&!r.el&&(r.el=n);const i=_n();if(r.el&&typeof r.el=="string"&&i.querySelectorAll(r.el).length>1){const s=[];return i.querySelectorAll(r.el).forEach(u=>{const c=Ot({},r,{el:u});s.push(new On(c))}),s}const o=this;o.__swiper__=!0,o.support=Uw(),o.device=Hw({userAgent:r.userAgent}),o.browser=Ww(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(s=>{typeof s=="function"&&o.modules.indexOf(s)<0&&o.modules.push(s)});const a={};o.modules.forEach(s=>{s({params:r,swiper:o,extendParams:C4(r,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=Ot({},np,a);return o.params=Ot({},l,pd,r),o.originalParams=Ot({},o.params),o.passedParams=Ot({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(s=>{o.on(s,o.params.on[s])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=xn(n,`.${r.slideClass}, swiper-slide`),o=jl(i[0]);return jl(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=xn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:u}=r;let c=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let d=o[u]?Math.ceil(o[u].swiperSlideSize):0,h;for(let f=u+1;f<o.length;f+=1)o[f]&&!h&&(d+=Math.ceil(o[f].swiperSlideSize),c+=1,d>s&&(h=!0));for(let f=u-1;f>=0;f-=1)o[f]&&!h&&(d+=o[f].swiperSlideSize,c+=1,d>s&&(h=!0))}else if(t==="current")for(let d=u+1;d<o.length;d+=1)(n?a[d]+l[d]-a[u]<s:a[d]-a[u]<s)&&(c+=1);else for(let d=u-1;d>=0;d-=1)a[u]-a[d]<s&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Ws(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):xn(r,i())[0])();return!a&&n.params.createElements&&(a=Il("div",n.params.wrapperClass),r.append(a),xn(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||cr(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||cr(r,"direction")==="rtl"),wrongRTL:cr(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Ws(n,o):o.addEventListener("load",a=>{Ws(n,a.target)})}),tp(n),n.initialized=!0,tp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t=!0,n=!0){const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),aI(r)),r.destroyed=!0),null}static extendDefaults(t){Ot(pd,t)}static get extendedDefaults(){return pd}static get defaults(){return np}static installModule(t){On.prototype.__modules__||(On.prototype.__modules__=[]);const n=On.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>On.installModule(n)),On):(On.installModule(t),On)}};Object.keys(fd).forEach(e=>{Object.keys(fd[e]).forEach(t=>{Qh.prototype[t]=fd[e][t]})});Qh.use([bI,wI]);const Xw=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function qr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function ji(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:qr(t[r])&&qr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:ji(e[r],t[r]):e[r]=t[r]})}function qw(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Kw(e={}){return e.pagination&&typeof e.pagination.el>"u"}function Zw(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function Qw(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function k4(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function T4({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}){const s=r.filter(C=>C!=="children"&&C!=="direction"&&C!=="wrapperClass"),{params:u,pagination:c,navigation:d,scrollbar:h,virtual:f,thumbs:g}=e;let y,S,p,m,x,w,E,k;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&u.thumbs&&(!u.thumbs.swiper||u.thumbs.swiper.destroyed)&&(y=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(S=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&c&&!c.el&&(p=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&h&&!h.el&&(m=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(x=!0);const _=C=>{e[C]&&(e[C].destroy(),C==="navigation"?(e.isElement&&(e[C].prevEl.remove(),e[C].nextEl.remove()),u[C].prevEl=void 0,u[C].nextEl=void 0,e[C].prevEl=void 0,e[C].nextEl=void 0):(e.isElement&&e[C].el.remove(),u[C].el=void 0,e[C].el=void 0))};r.includes("loop")&&e.isElement&&(u.loop&&!n.loop?w=!0:!u.loop&&n.loop?E=!0:k=!0),s.forEach(C=>{if(qr(u[C])&&qr(n[C]))Object.assign(u[C],n[C]),(C==="navigation"||C==="pagination"||C==="scrollbar")&&"enabled"in n[C]&&!n[C].enabled&&_(C);else{const M=n[C];(M===!0||M===!1)&&(C==="navigation"||C==="pagination"||C==="scrollbar")?M===!1&&_(C):u[C]=n[C]}}),s.includes("controller")&&!S&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&f&&u.virtual.enabled?(f.slides=t,f.update(!0)):r.includes("virtual")&&f&&u.virtual.enabled&&(t&&(f.slides=t),f.update(!0)),r.includes("children")&&t&&u.loop&&(k=!0),y&&g.init()&&g.update(!0),S&&(e.controller.control=u.controller.control),p&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),c.init(),c.render(),c.update()),m&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),h.init(),h.updateSize(),h.setTranslate()),x&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),xa(i,e.navigation.arrowSvg),i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),xa(o,e.navigation.arrowSvg),o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),d.init(),d.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(w||k)&&e.loopDestroy(),(E||k)&&e.loopCreate(),e.update()}function O4(e={},t=!0){const n={on:{}},r={},i={};ji(n,np),n._emitClasses=!0,n.init=!1;const o={},a=Xw.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?qr(e[s])?(n[s]={},i[s]={},ji(n[s],e[s]),ji(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function P4({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:o},a){qw(a)&&t&&n&&(o.params.navigation.nextEl=t,o.originalParams.navigation.nextEl=t,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),Kw(a)&&r&&(o.params.pagination.el=r,o.originalParams.pagination.el=r),Zw(a)&&i&&(o.params.scrollbar.el=i,o.originalParams.scrollbar.el=i),o.init(e)}function M4(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),u=n.map(i);s.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return Xw.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(qr(e[s])&&qr(t[s])){const u=Object.keys(e[s]),c=Object.keys(t[s]);u.length!==c.length?a(s):(u.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}),c.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const I4=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function $l(){return $l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$l.apply(this,arguments)}function Jw(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function eS(e){const t=[];return W.Children.toArray(e).forEach(n=>{Jw(n)?t.push(n):n.props&&n.props.children&&eS(n.props.children).forEach(r=>t.push(r))}),t}function j4(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return W.Children.toArray(e).forEach(r=>{if(Jw(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=eS(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function $4(e,t,n){if(!n)return null;const r=c=>{let d=c;return c<0?d=t.length+c:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,u=[];for(let c=l;c<s;c+=1)c>=o&&c<=a&&u.push(t[r(c)]);return u.map((c,d)=>W.cloneElement(c,{swiper:e,style:i,key:c.props.virtualIndex||c.key||`slide-${d}`}))}function Yo(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const Y0=b.createContext(null),D4=b.createContext(null),tS=b.forwardRef(({className:e,tag:t="div",wrapperTag:n="div",children:r,onSwiper:i,...o}={},a)=>{let l=!1;const[s,u]=b.useState("swiper"),[c,d]=b.useState(null),[h,f]=b.useState(!1),g=b.useRef(!1),y=b.useRef(null),S=b.useRef(null),p=b.useRef(null),m=b.useRef(null),x=b.useRef(null),w=b.useRef(null),E=b.useRef(null),k=b.useRef(null),{params:_,passedParams:C,rest:M,events:I}=O4(o),{slides:$,slots:P}=j4(r),j=()=>{f(!h)};Object.assign(_.on,{_containerClasses(O,D){u(D)}});const L=()=>{Object.assign(_.on,I),l=!0;const O={..._};if(delete O.wrapperClass,S.current=new Qh(O),S.current.virtual&&S.current.params.virtual.enabled){S.current.virtual.slides=$;const D={cache:!1,slides:$,renderExternal:d,renderExternalUpdate:!1};ji(S.current.params.virtual,D),ji(S.current.originalParams.virtual,D)}};y.current||L(),S.current&&S.current.on("_beforeBreakpoint",j);const R=()=>{l||!I||!S.current||Object.keys(I).forEach(O=>{S.current.on(O,I[O])})},F=()=>{!I||!S.current||Object.keys(I).forEach(O=>{S.current.off(O,I[O])})};b.useEffect(()=>()=>{S.current&&S.current.off("_beforeBreakpoint",j)}),b.useEffect(()=>{!g.current&&S.current&&(S.current.emitSlidesClasses(),g.current=!0)}),Yo(()=>{if(a&&(a.current=y.current),!!y.current)return S.current.destroyed&&L(),P4({el:y.current,nextEl:x.current,prevEl:w.current,paginationEl:E.current,scrollbarEl:k.current,swiper:S.current},_),i&&!S.current.destroyed&&i(S.current),()=>{S.current&&!S.current.destroyed&&S.current.destroy(!0,!1)}},[]),Yo(()=>{R();const O=M4(C,p.current,$,m.current,D=>D.key);return p.current=C,m.current=$,O.length&&S.current&&!S.current.destroyed&&T4({swiper:S.current,slides:$,passedParams:C,changedParams:O,nextEl:x.current,prevEl:w.current,scrollbarEl:k.current,paginationEl:E.current}),()=>{F()}}),Yo(()=>{I4(S.current)},[c]);function A(){return _.virtual?$4(S.current,$,c):$.map((O,D)=>W.cloneElement(O,{swiper:S.current,swiperSlideIndex:D}))}return W.createElement(t,$l({ref:y,className:Qw(`${s}${e?` ${e}`:""}`)},M),W.createElement(D4.Provider,{value:S.current},P["container-start"],W.createElement(n,{className:k4(_.wrapperClass)},P["wrapper-start"],A(),P["wrapper-end"]),qw(_)&&W.createElement(W.Fragment,null,W.createElement("div",{ref:w,className:"swiper-button-prev"}),W.createElement("div",{ref:x,className:"swiper-button-next"})),Zw(_)&&W.createElement("div",{ref:k,className:"swiper-scrollbar"}),Kw(_)&&W.createElement("div",{ref:E,className:"swiper-pagination"}),P["container-end"]))});tS.displayName="Swiper";const nS=b.forwardRef(({tag:e="div",children:t,className:n="",swiper:r,zoom:i,lazy:o,virtualIndex:a,swiperSlideIndex:l,...s}={},u)=>{const c=b.useRef(null),[d,h]=b.useState("swiper-slide"),[f,g]=b.useState(!1);function y(x,w,E){w===c.current&&h(E)}Yo(()=>{if(typeof l<"u"&&(c.current.swiperSlideIndex=l),u&&(u.current=c.current),!(!c.current||!r)){if(r.destroyed){d!=="swiper-slide"&&h("swiper-slide");return}return r.on("_slideClass",y),()=>{r&&r.off("_slideClass",y)}}}),Yo(()=>{r&&c.current&&!r.destroyed&&h(r.getSlideClasses(c.current))},[r]);const S={isActive:d.indexOf("swiper-slide-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0},p=()=>typeof t=="function"?t(S):t,m=()=>{g(!0)};return W.createElement(e,$l({ref:c,className:Qw(`${d}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:m},s),i&&W.createElement(Y0.Provider,{value:S},W.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof i=="number"?i:void 0},p(),o&&!f&&W.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}}))),!i&&W.createElement(Y0.Provider,{value:S},p(),o&&!f&&W.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}})))});nS.displayName="SwiperSlide";const R4=T.section`
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
`,L4=T.div`
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
`,A4=T.div`
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
`,F4=T($e)`
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
`,N4=[{id:1,title:"Дідів хлів - найкращий вибір для Вашого велосипеда",desc:"Якісні запчастини, професійний серевіс та індивідуальний підхід. Створюйте ідеальний байк разом з нами",img:"/Didiv/bike2-hero.jpeg"},{id:2,title:"Перевірені велодеталі з пробігом бла бла",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam reprehenderit obcaecati molestias est alias vitae laboriosam nulla perferendis officia incidunt aliquid voluptatem iste libero, officiis ex modi enim repellat. Consectetur!",img:"/Didiv/inside.webp"}],z4=()=>v.jsx(R4,{children:v.jsx(tS,{modules:[hI,gI,mI],spaceBetween:0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3},loop:!0,children:N4.map(e=>v.jsx(nS,{children:v.jsx(L4,{bg:e.img,children:v.jsxs(A4,{children:[v.jsx("h1",{children:e.title}),v.jsx("p",{children:e.desc}),v.jsx(F4,{to:"/catalog",children:"До каталогу"})]})})},e.id))})}),V4=[{id:1,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",brand:"Shimano",color:"чорні",type:"Шосейні",size:"29`",weight:1622,price:2800,inStock:!0,description:"Вага 1633 грами без ексцентриків (945+688), крутять ідеально, дуже довгий накат, барабан під 11-12 шв. шосе касети, рідні ексцентрики, ширина 16.3/21.3, обода без отворів для ніпелів, не потребують стрічки, без корозії, рівні. Мінус - знос, спереду сильний, ззаду менше, вживу не такий страшний, як показали на фото, короче кажучи, їздити можна сміливо.",image:["/Didiv/catalog/wheels.jpeg"]},{id:2,name:"Сідло Selle San Marco Aspide Superleggera",category:"saddles",price:800,inStock:!0,size:"29`",description:"140 мм, вага 171 гр, рейки алюміній, корпус пластик, підкладка Pebax, оббивка Microfeel.",image:[]},{id:3,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,weight:1622,inStock:!0,description:"Вага 1633 грами без ексцентриків (945+688), крутять ідеально...",image:["/Didiv/catalog/wheels.jpeg"]},{id:4,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,weight:1622,inStock:!0,description:"Вага 1633 грами без ексцентриків...",image:["/Didiv/catalog/wheels.jpeg"]},{id:5,name:'Рама MTB 17"',category:"Рами",price:4500,inStock:!0,image:"/Didiv/catalog/frame_mtb_17.jpg"},{id:6,name:'Рама Road 19"',category:"Рами",price:5200,inStock:!0,image:"/Didiv/catalog/frame_road_19.jpg"},{id:7,name:"Винос керма Alu",category:"Виноси",price:800,inStock:!0,image:"/Didiv/catalog/stem_alu.jpg"},{id:8,name:"Винос керма Carbon",category:"Виноси",price:1800,inStock:!1,image:"/Didiv/catalog/stem_carbon.jpg"},{id:9,name:"Кермо MTB 680мм",category:"Керма",price:1200,inStock:!0,image:"/Didiv/catalog/handlebar_mtb.jpg"},{id:10,name:"Кермо Road 420мм",category:"Керма",price:1400,inStock:!0,image:"/Didiv/catalog/handlebar_road.jpg"},{id:11,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,inStock:!0,description:"Вага 1633 грами без ексцентриків...",image:["/Didiv/catalog/wheels.jpeg","/Didiv/catalog/bikes.jpeg"]},{id:12,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,inStock:!0,description:"Вага 1633 грами...",image:["/Didiv/catalog/wheels.jpeg"]},{id:13,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,inStock:!0,description:"Вага 1633 грами...",image:["/Didiv/catalog/wheels.jpeg"]},{id:14,name:"Шосейні безкамерні колеса Shimano Ultegra WH-6800",category:"wheels",price:2800,inStock:!0,description:"Вага 1633 грами...",image:["/Didiv/catalog/wheels.jpeg"]}],B4=T.section`

  width: 100%;
  font-family: var(--main-font);
  padding-top: 30px;
  
  
`,U4=T.h2`
   font-size: 30px;
      text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
  @media screen and (min-width: 768px) {
 font-size: 35px;
  }

`,H4=T.div`
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
`,W4=T.div`
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
`,G4=T($e)`
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
`,Y4=T.span`
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
`,X4=T.div`
  padding: 10px 0;
`,q4=T.h3`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,K4=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Z4=T.span`
  font-size: 17px;
  font-weight: 800;
  color: var(--black-color);
`,Q4=T.button`
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
`;T($e)`
color: var(--white-color);
padding: 10px 20px;
 background:var( --orange-color); 
  border-radius: 15px;
  text-decoration: none;

`;const J4=T($e)`
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

`,ej=T.div`
  text-align: center;
  color: white;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 12px;
  }
  
`,tj=T.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;function He(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var nj=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),X0=nj,hd=()=>Math.random().toString(36).substring(7).split("").join("."),rj={INIT:`@@redux/INIT${hd()}`,REPLACE:`@@redux/REPLACE${hd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${hd()}`},Dl=rj;function Jh(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function em(e,t,n){if(typeof e!="function")throw new Error(He(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(He(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(He(1));return n(em)(e,t)}let r=e,i=t,o=new Map,a=o,l=0,s=!1;function u(){a===o&&(a=new Map,o.forEach((S,p)=>{a.set(p,S)}))}function c(){if(s)throw new Error(He(3));return i}function d(S){if(typeof S!="function")throw new Error(He(4));if(s)throw new Error(He(5));let p=!0;u();const m=l++;return a.set(m,S),function(){if(p){if(s)throw new Error(He(6));p=!1,u(),a.delete(m),o=null}}}function h(S){if(!Jh(S))throw new Error(He(7));if(typeof S.type>"u")throw new Error(He(8));if(typeof S.type!="string")throw new Error(He(17));if(s)throw new Error(He(9));try{s=!0,i=r(i,S)}finally{s=!1}return(o=a).forEach(m=>{m()}),S}function f(S){if(typeof S!="function")throw new Error(He(10));r=S,h({type:Dl.REPLACE})}function g(){const S=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(He(11));function m(){const w=p;w.next&&w.next(c())}return m(),{unsubscribe:S(m)}},[X0](){return this}}}return h({type:Dl.INIT}),{dispatch:h,subscribe:d,getState:c,replaceReducer:f,[X0]:g}}function ij(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Dl.INIT})>"u")throw new Error(He(12));if(typeof n(void 0,{type:Dl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(He(13))})}function oj(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const a=t[o];typeof e[a]=="function"&&(n[a]=e[a])}const r=Object.keys(n);let i;try{ij(n)}catch(o){i=o}return function(a={},l){if(i)throw i;let s=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],h=n[d],f=a[d],g=h(f,l);if(typeof g>"u")throw l&&l.type,new Error(He(14));u[d]=g,s=s||g!==f}return s=s||r.length!==Object.keys(a).length,s?u:a}}function Rl(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function aj(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(He(15))};const a={getState:i.getState,dispatch:(s,...u)=>o(s,...u)},l=e.map(s=>s(a));return o=Rl(...l)(i.dispatch),{...i,dispatch:o}}}function sj(e){return Jh(e)&&"type"in e&&typeof e.type=="string"}var rS=Symbol.for("immer-nothing"),q0=Symbol.for("immer-draftable"),ut=Symbol.for("immer-state");function nn(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Mt=Object,Wi=Mt.getPrototypeOf,Ll="constructor",Ku="prototype",rp="configurable",Al="enumerable",Gs="writable",ba="value",Wn=e=>!!e&&!!e[ut];function cn(e){var t;return e?iS(e)||Qu(e)||!!e[q0]||!!((t=e[Ll])!=null&&t[q0])||Ju(e)||ec(e):!1}var lj=Mt[Ku][Ll].toString(),K0=new WeakMap;function iS(e){if(!e||!tm(e))return!1;const t=Wi(e);if(t===null||t===Mt[Ku])return!0;const n=Mt.hasOwnProperty.call(t,Ll)&&t[Ll];if(n===Object)return!0;if(!fi(n))return!1;let r=K0.get(n);return r===void 0&&(r=Function.toString.call(n),K0.set(n,r)),r===lj}function Zu(e,t,n=!0){Ra(e)===0?(n?Reflect.ownKeys(e):Mt.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((r,i)=>t(i,r,e))}function Ra(e){const t=e[ut];return t?t.type_:Qu(e)?1:Ju(e)?2:ec(e)?3:0}var Z0=(e,t,n=Ra(e))=>n===2?e.has(t):Mt[Ku].hasOwnProperty.call(e,t),ip=(e,t,n=Ra(e))=>n===2?e.get(t):e[t],Fl=(e,t,n,r=Ra(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function uj(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Qu=Array.isArray,Ju=e=>e instanceof Map,ec=e=>e instanceof Set,tm=e=>typeof e=="object",fi=e=>typeof e=="function",md=e=>typeof e=="boolean";function cj(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var $n=e=>e.copy_||e.base_,nm=e=>e.modified_?e.copy_:e.base_;function op(e,t){if(Ju(e))return new Map(e);if(ec(e))return new Set(e);if(Qu(e))return Array[Ku].slice.call(e);const n=iS(e);if(t===!0||t==="class_only"&&!n){const r=Mt.getOwnPropertyDescriptors(e);delete r[ut];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const a=i[o],l=r[a];l[Gs]===!1&&(l[Gs]=!0,l[rp]=!0),(l.get||l.set)&&(r[a]={[rp]:!0,[Gs]:!0,[Al]:l[Al],[ba]:e[a]})}return Mt.create(Wi(e),r)}else{const r=Wi(e);if(r!==null&&n)return{...e};const i=Mt.create(r);return Mt.assign(i,e)}}function rm(e,t=!1){return tc(e)||Wn(e)||!cn(e)||(Ra(e)>1&&Mt.defineProperties(e,{set:fs,add:fs,clear:fs,delete:fs}),Mt.freeze(e),t&&Zu(e,(n,r)=>{rm(r,!0)},!1)),e}function dj(){nn(2)}var fs={[ba]:dj};function tc(e){return e===null||!tm(e)?!0:Mt.isFrozen(e)}var Nl="MapSet",ap="Patches",Q0="ArrayMethods",oS={};function Kr(e){const t=oS[e];return t||nn(0,e),t}var J0=e=>!!oS[e],wa,aS=()=>wa,fj=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:J0(Nl)?Kr(Nl):void 0,arrayMethodsPlugin_:J0(Q0)?Kr(Q0):void 0});function ev(e,t){t&&(e.patchPlugin_=Kr(ap),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function sp(e){lp(e),e.drafts_.forEach(pj),e.drafts_=null}function lp(e){e===wa&&(wa=e.parent_)}var tv=e=>wa=fj(wa,e);function pj(e){const t=e[ut];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function nv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];if(e!==void 0&&e!==n){n[ut].modified_&&(sp(t),nn(4)),cn(e)&&(e=rv(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(n[ut].base_,e,t)}else e=rv(t,n);return hj(t,e,!0),sp(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==rS?e:void 0}function rv(e,t){if(tc(t))return t;const n=t[ut];if(!n)return zl(t,e.handledSet_,e);if(!nc(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(e);uS(n,e)}return n.copy_}function hj(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&rm(t,n)}function sS(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var nc=(e,t)=>e.scope_===t,mj=[];function lS(e,t,n,r){const i=$n(e),o=e.type_;if(r!==void 0&&ip(i,r,o)===t){Fl(i,r,n,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;Zu(i,(s,u)=>{if(Wn(u)){const c=l.get(u)||[];c.push(s),l.set(u,c)}})}const a=e.draftLocations_.get(t)??mj;for(const l of a)Fl(i,l,n,o)}function gj(e,t,n){e.callbacks_.push(function(i){var l;const o=t;if(!o||!nc(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const a=nm(o);lS(e,o.draft_??o,a,n),uS(o,i)})}function uS(e,t){var r;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((r=e.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}sS(e)}}function vj(e,t,n){const{scope_:r}=e;if(Wn(n)){const i=n[ut];nc(i,r)&&i.callbacks_.push(function(){Ys(e);const a=nm(i);lS(e,n,a,t)})}else cn(n)&&e.callbacks_.push(function(){const o=$n(e);e.type_===3?o.has(n)&&zl(n,r.handledSet_,r):ip(o,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&zl(ip(e.copy_,t,e.type_),r.handledSet_,r)})}function zl(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Wn(e)||t.has(e)||!cn(e)||tc(e)||(t.add(e),Zu(e,(r,i)=>{if(Wn(i)){const o=i[ut];if(nc(o,n)){const a=nm(o);Fl(e,r,a,e.type_),sS(o)}}else cn(i)&&zl(i,t,n)})),e}function yj(e,t){const n=Qu(e),r={type_:n?1:0,scope_:t?t.scope_:aS(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,o=Vl;n&&(i=[r],o=Sa);const{revoke:a,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=a,[l,r]}var Vl={get(e,t){if(t===ut)return e;let n=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof t=="string";if(r&&n!=null&&n.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);const i=$n(e);if(!Z0(i,t,e.type_))return xj(e,i,t);const o=i[t];if(e.finalized_||!cn(o)||r&&e.operationMethod&&(n!=null&&n.isMutatingArrayMethod(e.operationMethod))&&cj(t))return o;if(o===gd(e.base_,t)){Ys(e);const a=e.type_===1?+t:t,l=cp(e.scope_,o,e,a);return e.copy_[a]=l}return o},has(e,t){return t in $n(e)},ownKeys(e){return Reflect.ownKeys($n(e))},set(e,t,n){const r=cS($n(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=gd($n(e),t),o=i==null?void 0:i[ut];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(uj(n,i)&&(n!==void 0||Z0(e.base_,t,e.type_)))return!0;Ys(e),up(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_.set(t,!0),vj(e,t,n)),!0},deleteProperty(e,t){return Ys(e),gd(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),up(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=$n(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Gs]:!0,[rp]:e.type_!==1||t!=="length",[Al]:r[Al],[ba]:n[t]}},defineProperty(){nn(11)},getPrototypeOf(e){return Wi(e.base_)},setPrototypeOf(){nn(12)}},Sa={};for(let e in Vl){let t=Vl[e];Sa[e]=function(){const n=arguments;return n[0]=n[0][0],t.apply(this,n)}}Sa.deleteProperty=function(e,t){return Sa.set.call(this,e,t,void 0)};Sa.set=function(e,t,n){return Vl.set.call(this,e[0],t,n,e[0])};function gd(e,t){const n=e[ut];return(n?$n(n):e)[t]}function xj(e,t,n){var i;const r=cS(t,n);return r?ba in r?r[ba]:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function cS(e,t){if(!(t in e))return;let n=Wi(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Wi(n)}}function up(e){e.modified_||(e.modified_=!0,e.parent_&&up(e.parent_))}function Ys(e){e.copy_||(e.assigned_=new Map,e.copy_=op(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var bj=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,n,r)=>{if(fi(t)&&!fi(n)){const o=n;n=t;const a=this;return function(s=o,...u){return a.produce(s,c=>n.call(this,c,...u))}}fi(n)||nn(6),r!==void 0&&!fi(r)&&nn(7);let i;if(cn(t)){const o=tv(this),a=cp(o,t,void 0);let l=!0;try{i=n(a),l=!1}finally{l?sp(o):lp(o)}return ev(o,r),nv(i,o)}else if(!t||!tm(t)){if(i=n(t),i===void 0&&(i=t),i===rS&&(i=void 0),this.autoFreeze_&&rm(i,!0),r){const o=[],a=[];Kr(ap).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:a}),r(o,a)}return i}else nn(1,t)},this.produceWithPatches=(t,n)=>{if(fi(t))return(a,...l)=>this.produceWithPatches(a,s=>t(s,...l));let r,i;return[this.produce(t,n,(a,l)=>{r=a,i=l}),r,i]},md(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),md(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),md(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){cn(e)||nn(8),Wn(e)&&(e=wj(e));const t=tv(this),n=cp(t,e,void 0);return n[ut].isManual_=!0,lp(t),n}finishDraft(e,t){const n=e&&e[ut];(!n||!n.isManual_)&&nn(9);const{scope_:r}=n;return ev(r,t),nv(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Kr(ap).applyPatches_;return Wn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function cp(e,t,n,r){const[i,o]=Ju(t)?Kr(Nl).proxyMap_(t,n):ec(t)?Kr(Nl).proxySet_(t,n):yj(t,n);return((n==null?void 0:n.scope_)??aS()).drafts_.push(i),o.callbacks_=(n==null?void 0:n.callbacks_)??[],o.key_=r,n&&r!==void 0?gj(n,o,r):o.callbacks_.push(function(s){var c;(c=s.mapSetPlugin_)==null||c.fixSetContents(o);const{patchPlugin_:u}=s;o.modified_&&u&&u.generatePatches_(o,[],s)}),i}function wj(e){return Wn(e)||nn(10,e),dS(e)}function dS(e){if(!cn(e)||tc(e))return e;const t=e[ut];let n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=op(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=op(e,!0);return Zu(n,(i,o)=>{Fl(n,i,dS(o))},r),t&&(t.finalized_=!1),n}var Sj=new bj,fS=Sj.produce;function pS(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var _j=pS(),Ej=pS,Cj=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Rl:Rl.apply(null,arguments)};function iv(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(Nn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>sj(r)&&r.type===e,n}var hS=class $o extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,$o.prototype)}static get[Symbol.species](){return $o}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new $o(...t[0].concat(this)):new $o(...t.concat(this))}};function ov(e){return cn(e)?fS(e,()=>{}):e}function ps(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function kj(e){return typeof e=="boolean"}var Tj=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let a=new hS;return n&&(kj(n)?a.push(_j):a.push(Ej(n.extraArgument))),a},Oj="RTK_autoBatch",av=e=>t=>{setTimeout(t,e)},Pj=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,a=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:av(10):e.type==="callback"?e.queueNotification:av(e.timeout),u=()=>{a=!1,o&&(o=!1,l.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),h=r.subscribe(d);return l.add(c),()=>{h(),l.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[Oj]),o=!i,o&&(a||(a=!0,s(u))),r.dispatch(c)}finally{i=!0}}})},Mj=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new hS(e);return r&&i.push(Pj(typeof r=="object"?r:void 0)),i};function Ij(e){const t=Tj(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:o=!0,preloadedState:a=void 0,enhancers:l=void 0}=e||{};let s;if(typeof n=="function")s=n;else if(Jh(n))s=oj(n);else throw new Error(Nn(1));let u;typeof r=="function"?u=r(t):u=t();let c=Rl;i&&(c=Cj({trace:!1,...typeof i=="object"&&i}));const d=aj(...u),h=Mj(d);let f=typeof l=="function"?l(h):h();const g=c(...f);return em(s,a,g)}function mS(e){const t={},n=[];let r;const i={addCase(o,a){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(Nn(28));if(l in t)throw new Error(Nn(29));return t[l]=a,i},addAsyncThunk(o,a){return a.pending&&(t[o.pending.type]=a.pending),a.rejected&&(t[o.rejected.type]=a.rejected),a.fulfilled&&(t[o.fulfilled.type]=a.fulfilled),a.settled&&n.push({matcher:o.settled,reducer:a.settled}),i},addMatcher(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function jj(e){return typeof e=="function"}function $j(e,t){let[n,r,i]=mS(t),o;if(jj(e))o=()=>ov(e());else{const l=ov(e);o=()=>l}function a(l=o(),s){let u=[n[s.type],...r.filter(({matcher:c})=>c(s)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(Wn(c)){const f=d(c,s);return f===void 0?c:f}else{if(cn(c))return fS(c,h=>d(h,s));{const h=d(c,s);if(h===void 0){if(c===null)return c;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}}return c},l)}return a.getInitialState=o,a}var Dj=Symbol.for("rtk-slice-createasyncthunk");function Rj(e,t){return`${e}/${t}`}function Lj({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[Dj];return function(i){const{name:o,reducerPath:a=o}=i;if(!o)throw new Error(Nn(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(Fj()):i.reducers)||{},s=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(w,E){const k=typeof w=="string"?w:w.type;if(!k)throw new Error(Nn(12));if(k in u.sliceCaseReducersByType)throw new Error(Nn(13));return u.sliceCaseReducersByType[k]=E,c},addMatcher(w,E){return u.sliceMatchers.push({matcher:w,reducer:E}),c},exposeAction(w,E){return u.actionCreators[w]=E,c},exposeCaseReducer(w,E){return u.sliceCaseReducersByName[w]=E,c}};s.forEach(w=>{const E=l[w],k={reducerName:w,type:Rj(o,w),createNotation:typeof i.reducers=="function"};zj(E)?Bj(k,E,c,t):Nj(k,E,c)});function d(){const[w={},E=[],k=void 0]=typeof i.extraReducers=="function"?mS(i.extraReducers):[i.extraReducers],_={...w,...u.sliceCaseReducersByType};return $j(i.initialState,C=>{for(let M in _)C.addCase(M,_[M]);for(let M of u.sliceMatchers)C.addMatcher(M.matcher,M.reducer);for(let M of E)C.addMatcher(M.matcher,M.reducer);k&&C.addDefaultCase(k)})}const h=w=>w,f=new Map,g=new WeakMap;let y;function S(w,E){return y||(y=d()),y(w,E)}function p(){return y||(y=d()),y.getInitialState()}function m(w,E=!1){function k(C){let M=C[w];return typeof M>"u"&&E&&(M=ps(g,k,p)),M}function _(C=h){const M=ps(f,E,()=>new WeakMap);return ps(M,C,()=>{const I={};for(const[$,P]of Object.entries(i.selectors??{}))I[$]=Aj(P,C,()=>ps(g,C,p),E);return I})}return{reducerPath:w,getSelectors:_,get selectors(){return _(k)},selectSlice:k}}const x={name:o,reducer:S,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:p,...m(a),injectInto(w,{reducerPath:E,...k}={}){const _=E??a;return w.inject({reducerPath:_,reducer:S},k),{...x,...m(_,!0)}}};return x}}function Aj(e,t,n,r){function i(o,...a){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...a)}return i.unwrapped=e,i}var gS=Lj();function Fj(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function Nj({type:e,reducerName:t,createNotation:n},r,i){let o,a;if("reducer"in r){if(n&&!Vj(r))throw new Error(Nn(17));o=r.reducer,a=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?iv(e,a):iv(e))}function zj(e){return e._reducerDefinitionType==="asyncThunk"}function Vj(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Bj({type:e,reducerName:t},n,r,i){if(!i)throw new Error(Nn(18));const{payloadCreator:o,fulfilled:a,pending:l,rejected:s,settled:u,options:c}=n,d=i(e,o,c);r.exposeAction(t,d),a&&r.addCase(d.fulfilled,a),l&&r.addCase(d.pending,l),s&&r.addCase(d.rejected,s),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(t,{fulfilled:a||hs,pending:l||hs,rejected:s||hs,settled:u||hs})}function hs(){}function Nn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const vS=gS({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,t)=>{const n=e.items.find(r=>r.id===t.payload.id);n?n.quantity=(n.quantity||0)+1:e.items.push({...t.payload,quantity:1})},removeFromCart:(e,t)=>{const n=t.payload;e.items=e.items.filter(r=>r.id!==n.id)},clearCart:e=>{e.items=[]},addAllToCart:(e,t)=>{const n=t.payload.map(r=>({...r,quantity:r.quantity||1}));e.items.push(...n)},incrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&(n.quantity+=1)},decrementQuantity:(e,t)=>{const n=e.items.find(r=>r.id===t.payload);n&&n.quantity>1&&(n.quantity-=1)}}}),{addToCart:rc,removeFromCart:Uj,clearCart:Hj,addAllToCart:Wj,incrementQuantity:Gj,decrementQuantity:Yj}=vS.actions,Xj=vS.reducer;function yS(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=yS(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Br(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=yS(e))&&(r&&(r+=" "),r+=t);return r}function qj(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}qj(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var La=e=>typeof e=="number"&&!isNaN(e),Zr=e=>typeof e=="string",Gn=e=>typeof e=="function",Kj=e=>Zr(e)||La(e),dp=e=>Zr(e)||Gn(e)?e:null,Zj=(e,t)=>e===!1||La(e)&&e>0?e:t,fp=e=>b.isValidElement(e)||Zr(e)||Gn(e)||La(e);function Qj(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function Jj({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:o,position:a,preventExitTransition:l,done:s,nodeRef:u,isIn:c,playToast:d}){let h=n?`${e}--${a}`:e,f=n?`${t}--${a}`:t,g=b.useRef(0);return b.useLayoutEffect(()=>{let y=u.current,S=h.split(" "),p=m=>{m.target===u.current&&(d(),y.removeEventListener("animationend",p),y.removeEventListener("animationcancel",p),g.current===0&&m.type!=="animationcancel"&&y.classList.remove(...S))};y.classList.add(...S),y.addEventListener("animationend",p),y.addEventListener("animationcancel",p)},[]),b.useEffect(()=>{let y=u.current,S=()=>{y.removeEventListener("animationend",S),r?Qj(y,s,i):s()};c||(l?S():(g.current=1,y.className+=` ${f}`,y.addEventListener("animationend",S)))},[c]),W.createElement(W.Fragment,null,o)}}function sv(e,t){return{content:xS(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function xS(e,t,n=!1){return b.isValidElement(e)&&!Zr(e.type)?b.cloneElement(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):Gn(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function e5({closeToast:e,theme:t,ariaLabel:n="close"}){return W.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":n},W.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},W.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function t5({delay:e,isRunning:t,closeToast:n,type:r="default",hide:i,className:o,controlledProgress:a,progress:l,rtl:s,isIn:u,theme:c}){let d=i||a&&l===0,h={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};a&&(h.transform=`scaleX(${l})`);let f=Br("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${c}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":s}),g=Gn(o)?o({rtl:s,type:r,defaultClassName:f}):Br(f,o),y={[a&&l>=1?"onTransitionEnd":"onAnimationEnd"]:a&&l<1?null:()=>{u&&n()}};return W.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":d},W.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${c} Toastify__progress-bar--${r}`}),W.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:g,style:h,...y}))}var n5=1,bS=()=>`${n5++}`;function r5(e,t,n){let r=1,i=0,o=[],a=[],l=t,s=new Map,u=new Set,c=m=>(u.add(m),()=>u.delete(m)),d=()=>{a=Array.from(s.values()),u.forEach(m=>m())},h=({containerId:m,toastId:x,updateId:w})=>{let E=m?m!==e:e!==1,k=s.has(x)&&w==null;return E||k},f=(m,x)=>{s.forEach(w=>{var E;(x==null||x===w.props.toastId)&&((E=w.toggle)==null||E.call(w,m))})},g=m=>{var x,w;(w=(x=m.props)==null?void 0:x.onClose)==null||w.call(x,m.removalReason),m.isActive=!1},y=m=>{if(m==null)s.forEach(g);else{let x=s.get(m);x&&g(x)}d()},S=()=>{i-=o.length,o=[]},p=m=>{var x,w;let{toastId:E,updateId:k}=m.props,_=k==null;m.staleId&&s.delete(m.staleId),m.isActive=!0,s.set(E,m),d(),n(sv(m,_?"added":"updated")),_&&((w=(x=m.props).onOpen)==null||w.call(x))};return{id:e,props:l,observe:c,toggle:f,removeToast:y,toasts:s,clearQueue:S,buildToast:(m,x)=>{if(h(x))return;let{toastId:w,updateId:E,data:k,staleId:_,delay:C}=x,M=E==null;M&&i++;let I={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([P,j])=>j!=null)),toastId:w,updateId:E,data:k,isIn:!1,className:dp(x.className||l.toastClassName),progressClassName:dp(x.progressClassName||l.progressClassName),autoClose:x.isLoading?!1:Zj(x.autoClose,l.autoClose),closeToast(P){s.get(w).removalReason=P,y(w)},deleteToast(){let P=s.get(w);if(P!=null){if(n(sv(P,"removed")),s.delete(w),i--,i<0&&(i=0),o.length>0){p(o.shift());return}d()}}};I.closeButton=l.closeButton,x.closeButton===!1||fp(x.closeButton)?I.closeButton=x.closeButton:x.closeButton===!0&&(I.closeButton=fp(l.closeButton)?l.closeButton:!0);let $={content:m,props:I,staleId:_};l.limit&&l.limit>0&&i>l.limit&&M?o.push($):La(C)?setTimeout(()=>{p($)},C):p($)},setProps(m){l=m},setToggle:(m,x)=>{let w=s.get(m);w&&(w.toggle=x)},isToastActive:m=>{var x;return(x=s.get(m))==null?void 0:x.isActive},getSnapshot:()=>a}}var st=new Map,_a=[],pp=new Set,i5=e=>pp.forEach(t=>t(e)),wS=()=>st.size>0;function o5(){_a.forEach(e=>_S(e.content,e.options)),_a=[]}var a5=(e,{containerId:t})=>{var n;return(n=st.get(t||1))==null?void 0:n.toasts.get(e)};function SS(e,t){var n;if(t)return!!((n=st.get(t))!=null&&n.isToastActive(e));let r=!1;return st.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function s5(e){if(!wS()){_a=_a.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||Kj(e))st.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=st.get(e.containerId);t?t.removeToast(e.id):st.forEach(n=>{n.removeToast(e.id)})}}var l5=(e={})=>{st.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function _S(e,t){fp(e)&&(wS()||_a.push({content:e,options:t}),st.forEach(n=>{n.buildToast(e,t)}))}function u5(e){var t;(t=st.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function ES(e,t){st.forEach(n=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===n.id)&&n.toggle(e,t==null?void 0:t.id)})}function c5(e){let t=e.containerId||1;return{subscribe(n){let r=r5(t,e,i5);st.set(t,r);let i=r.observe(n);return o5(),()=>{i(),st.delete(t)}},setProps(n){var r;(r=st.get(t))==null||r.setProps(n)},getSnapshot(){var n;return(n=st.get(t))==null?void 0:n.getSnapshot()}}}function d5(e){return pp.add(e),()=>{pp.delete(e)}}function f5(e){return e&&(Zr(e.toastId)||La(e.toastId))?e.toastId:bS()}function Aa(e,t){return _S(e,t),t.toastId}function ic(e,t){return{...t,type:t&&t.type||e,toastId:f5(t)}}function oc(e){return(t,n)=>Aa(t,ic(e,n))}function te(e,t){return Aa(e,ic("default",t))}te.loading=(e,t)=>Aa(e,ic("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function p5(e,{pending:t,error:n,success:r},i){let o;t&&(o=Zr(t)?te.loading(t,i):te.loading(t.render,{...i,...t}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,c,d)=>{if(c==null){te.dismiss(o);return}let h={type:u,...a,...i,data:d},f=Zr(c)?{render:c}:c;return o?te.update(o,{...h,...f}):te(f.render,{...h,...f}),d},s=Gn(e)?e():e;return s.then(u=>l("success",r,u)).catch(u=>l("error",n,u)),s}te.promise=p5;te.success=oc("success");te.info=oc("info");te.error=oc("error");te.warning=oc("warning");te.warn=te.warning;te.dark=(e,t)=>Aa(e,ic("default",{theme:"dark",...t}));function h5(e){s5(e)}te.dismiss=h5;te.clearWaitingQueue=l5;te.isActive=SS;te.update=(e,t={})=>{let n=a5(e,t);if(n){let{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:bS()};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,Aa(a,o)}};te.done=e=>{te.update(e,{progress:1})};te.onChange=d5;te.play=e=>ES(!0,e);te.pause=e=>ES(!1,e);function m5(e){var t;let{subscribe:n,getSnapshot:r,setProps:i}=b.useRef(c5(e)).current;i(e);let o=(t=b.useSyncExternalStore(n,r,r))==null?void 0:t.slice();function a(l){if(!o)return[];let s=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:c}=u.props;s.has(c)||s.set(c,[]),s.get(c).push(u)}),Array.from(s,u=>l(u[0],u[1]))}return{getToastToRender:a,isToastActive:SS,count:o==null?void 0:o.length}}function g5(e){let[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useRef(null),a=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:s,closeToast:u,onClick:c,closeOnClick:d}=e;u5({id:e.toastId,containerId:e.containerId,fn:n}),b.useEffect(()=>{if(e.pauseOnFocusLoss)return h(),()=>{f()}},[e.pauseOnFocusLoss]);function h(){document.hasFocus()||p(),window.addEventListener("focus",S),window.addEventListener("blur",p)}function f(){window.removeEventListener("focus",S),window.removeEventListener("blur",p)}function g(_){if(e.draggable===!0||e.draggable===_.pointerType){m();let C=o.current;a.canCloseOnClick=!0,a.canDrag=!0,C.style.transition="none",e.draggableDirection==="x"?(a.start=_.clientX,a.removalDistance=C.offsetWidth*(e.draggablePercent/100)):(a.start=_.clientY,a.removalDistance=C.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function y(_){let{top:C,bottom:M,left:I,right:$}=o.current.getBoundingClientRect();_.nativeEvent.type!=="touchend"&&e.pauseOnHover&&_.clientX>=I&&_.clientX<=$&&_.clientY>=C&&_.clientY<=M?p():S()}function S(){n(!0)}function p(){n(!1)}function m(){a.didMove=!1,document.addEventListener("pointermove",w),document.addEventListener("pointerup",E)}function x(){document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",E)}function w(_){let C=o.current;if(a.canDrag&&C){a.didMove=!0,t&&p(),e.draggableDirection==="x"?a.delta=_.clientX-a.start:a.delta=_.clientY-a.start,a.start!==_.clientX&&(a.canCloseOnClick=!1);let M=e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;C.style.transform=`translate3d(${M},0)`,C.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function E(){x();let _=o.current;if(a.canDrag&&a.didMove&&_){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}_.style.transition="transform 0.2s, opacity 0.2s",_.style.removeProperty("transform"),_.style.removeProperty("opacity")}}let k={onPointerDown:g,onPointerUp:y};return l&&s&&(k.onMouseEnter=p,e.stacked||(k.onMouseLeave=S)),d&&(k.onClick=_=>{c&&c(_),a.canCloseOnClick&&u(!0)}),{playToast:S,pauseToast:p,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:k}}var v5=typeof window<"u"?b.useLayoutEffect:b.useEffect,ac=({theme:e,type:t,isLoading:n,...r})=>W.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function y5(e){return W.createElement(ac,{...e},W.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function x5(e){return W.createElement(ac,{...e},W.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function b5(e){return W.createElement(ac,{...e},W.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function w5(e){return W.createElement(ac,{...e},W.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function S5(){return W.createElement("div",{className:"Toastify__spinner"})}var hp={info:x5,warning:y5,success:b5,error:w5,spinner:S5},_5=e=>e in hp;function E5({theme:e,type:t,isLoading:n,icon:r}){let i=null,o={theme:e,type:t};return r===!1||(Gn(r)?i=r({...o,isLoading:n}):b.isValidElement(r)?i=b.cloneElement(r,o):n?i=hp.spinner():_5(t)&&(i=hp[t](o))),i}var C5=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:o}=g5(e),{closeButton:a,children:l,autoClose:s,onClick:u,type:c,hideProgressBar:d,closeToast:h,transition:f,position:g,className:y,style:S,progressClassName:p,updateId:m,role:x,progress:w,rtl:E,toastId:k,deleteToast:_,isIn:C,isLoading:M,closeOnClick:I,theme:$,ariaLabel:P}=e,j=Br("Toastify__toast",`Toastify__toast-theme--${$}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":I}),L=Gn(y)?y({rtl:E,position:g,type:c,defaultClassName:j}):Br(j,y),R=E5(e),F=!!w||!s,A={closeToast:h,type:c,theme:$},O=null;return a===!1||(Gn(a)?O=a(A):b.isValidElement(a)?O=b.cloneElement(a,A):O=e5(A)),W.createElement(f,{isIn:C,done:_,position:g,preventExitTransition:n,nodeRef:r,playToast:o},W.createElement("div",{id:k,tabIndex:0,onClick:u,"data-in":C,className:L,...i,style:S,ref:r,...C&&{role:x,"aria-label":P}},R!=null&&W.createElement("div",{className:Br("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},R),xS(l,e,!t),O,!e.customProgressBar&&W.createElement(t5,{...m&&!F?{key:`p-${m}`}:{},rtl:E,theme:$,delay:s,isRunning:t,isIn:C,closeToast:h,hide:d,type:c,className:p,controlledProgress:F,progress:w||0})))},k5=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),T5=Jj(k5("bounce",!0)),O5={position:"top-right",transition:T5,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Fa(e){let t={...O5,...e},n=e.stacked,[r,i]=b.useState(!0),o=b.useRef(null),{getToastToRender:a,isToastActive:l,count:s}=m5(t),{className:u,style:c,rtl:d,containerId:h,hotKeys:f}=t;function g(S){let p=Br("Toastify__toast-container",`Toastify__toast-container--${S}`,{"Toastify__toast-container--rtl":d});return Gn(u)?u({position:S,rtl:d,defaultClassName:p}):Br(p,dp(u))}function y(){n&&(i(!0),te.play())}return v5(()=>{var S;if(n){let p=o.current.querySelectorAll('[data-in="true"]'),m=12,x=(S=t.position)==null?void 0:S.includes("top"),w=0,E=0;Array.from(p).reverse().forEach((k,_)=>{let C=k;C.classList.add("Toastify__toast--stacked"),_>0&&(C.dataset.collapsed=`${r}`),C.dataset.pos||(C.dataset.pos=x?"top":"bot");let M=w*(r?.2:1)+(r?0:m*_);C.style.setProperty("--y",`${x?M:M*-1}px`),C.style.setProperty("--g",`${m}`),C.style.setProperty("--s",`${1-(r?E:0)}`),w+=C.offsetHeight,E+=.025})}},[r,s,n]),b.useEffect(()=>{function S(p){var m;let x=o.current;f(p)&&((m=x.querySelector('[tabIndex="0"]'))==null||m.focus(),i(!1),te.pause()),p.key==="Escape"&&(document.activeElement===x||x!=null&&x.contains(document.activeElement))&&(i(!0),te.play())}return document.addEventListener("keydown",S),()=>{document.removeEventListener("keydown",S)}},[f]),W.createElement("section",{ref:o,className:"Toastify",id:h,onMouseEnter:()=>{n&&(i(!1),te.pause())},onMouseLeave:y,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},a((S,p)=>{let m=p.length?{...c}:{...c,pointerEvents:"none"};return W.createElement("div",{tabIndex:-1,className:g(S),"data-stacked":n,style:m,key:`c-${S}`},p.map(({content:x,props:w})=>W.createElement(C5,{...w,stacked:n,collapseAll:y,isIn:l(w.toastId,w.containerId),key:`t-${w.key}`},x)))}))}const Yn="/Didiv/assets/nofoto-2f8d9d99.png",P5=()=>{const e=to(),t=[...V4].sort(()=>Math.random()-.5).slice(0,3),n=r=>{e(rc({...r,quantity:1})),te.success(`${r.name} додано в кошик!`)};return v.jsxs(B4,{children:[v.jsx(Fa,{}),v.jsx(U4,{children:"Нові товари"}),v.jsxs(H4,{children:[t.map(r=>{var i;return v.jsxs(W4,{children:[v.jsxs(G4,{to:`/product/${r.id}`,children:[v.jsx(Y4,{children:"Новинка"}),v.jsx("img",{src:((i=r.image)==null?void 0:i[0])||Yn,alt:r.name,onError:o=>{o.currentTarget.onerror=null,o.currentTarget.src=Yn}}),v.jsx("div",{className:"overlay"})]}),v.jsxs(X4,{children:[v.jsx(q4,{children:r.name}),v.jsxs(K4,{children:[v.jsxs(Z4,{children:[r.price," грн"]}),v.jsx(Q4,{onClick:()=>n(r),children:v.jsx(Su,{size:22})})]})]})]},r.id)}),v.jsx(J4,{to:"/catalog/new",children:v.jsxs(ej,{children:[v.jsx("p",{children:"Усі новинки"}),v.jsx(tj,{children:v.jsx(vb,{size:24})})]})})]})]})},M5=T.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,vd=T.div`
  background-color: #ffffffde;
  padding: 20px;
  border: 1px solid #e3e2e2;
  border-radius: 8px;
`,yd=T.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--orange-color);
`,xd=T.div`
  font-size: 14px;
  color: #888;
`,CS=()=>v.jsxs(M5,{children:[v.jsxs(vd,{children:[v.jsx(yd,{children:"3000+"}),v.jsx(xd,{children:"Перевірених деталей"})]}),v.jsxs(vd,{children:[v.jsx(yd,{children:"6 років"}),v.jsx(xd,{children:"Досвіду на ринку"})]}),v.jsxs(vd,{children:[v.jsx(yd,{children:"100%"}),v.jsx(xd,{children:"Контроль якості"})]})]}),I5=Fe.div`
  background:var(--background-color);
`,j5=Fe.div`
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
`;const $5=()=>v.jsx(I5,{children:v.jsxs(j5,{children:[v.jsx(z4,{}),v.jsx(CS,{}),v.jsx(P5,{}),v.jsx(rI,{})]})}),D5=T.div`
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
`,R5=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`,L5=T.button`
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
`,A5=T.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,F5=T.button`
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
`,N5=T.svg`
  width: 20px;
  height: 20px;
  fill: var(--white-color);
`,z5=T.div`
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
`,V5=T.div`
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
`;const B5=T.div`
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
`;const U5=T.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background: white;
`,H5=T.button`
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
`,kS=T.button`
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
`,W5=T.aside`

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
`,G5=T.h3`
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
`;const Y5=T.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,X5=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,q5=T.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,K5=T.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,Z5=T.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,Q5=T.label`
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
`,J5=T.span`
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
`,TS={bikes:[{type:"checkbox",name:"brand",label:"Бренд"},{type:"checkbox",name:"wheelSize",label:"Розмір колеса"},{type:"range",name:"price",label:"Ціна"}],saddles:[{type:"checkbox",name:"gender",label:"Тип (чол/жін)"},{type:"checkbox",name:"material",label:"Матеріал"},{type:"range",name:"price",label:"Ціна"}],handlebars:[{type:"checkbox",name:"width",label:"Ширина"},{type:"checkbox",name:"material",label:"Матеріал"}],wheels:[{type:"checkbox",name:"brand",label:"Бренд",options:["Shimano","Campagnolo","SRAM"]},{type:"checkbox",name:"size",label:"Розмір колеса",options:["26`","27.5`","29`"]},{type:"range",name:"price",label:"Ціна, грн",min:100,max:1e4},{type:"range",name:"weight",label:"Вага, грам",min:1,max:1e5}]};var gp={},im={},om={},oo={};Object.defineProperty(oo,"__esModule",{value:!0});oo.Direction=void 0;var lv;(function(e){e.Right="to right",e.Left="to left",e.Down="to bottom",e.Up="to top"})(lv||(oo.Direction=lv={}));(function(e){var t=J&&J.__spreadArray||function(P,j,L){if(L||arguments.length===2)for(var R=0,F=j.length,A;R<F;R++)(A||!(R in j))&&(A||(A=Array.prototype.slice.call(j,0,R)),A[R]=j[R]);return P.concat(A||Array.prototype.slice.call(j))};Object.defineProperty(e,"__esModule",{value:!0}),e.isIOS=e.useThumbOverlap=e.assertUnreachable=e.voidFn=e.getTrackBackground=e.replaceAt=e.schd=e.translate=e.getClosestThumbIndex=e.translateThumbs=e.getPaddingAndBorder=e.getMargin=e.checkInitialOverlap=e.checkValuesAgainstBoundaries=e.checkBoundaries=e.isVertical=e.relativeValue=e.normalizeValue=e.isStepDivisible=e.isTouchEvent=e.getStepDecimals=void 0;var n=b,r=oo,i=function(P){var j=P.toString().split(".")[1];return j?j.length:0};e.getStepDecimals=i;function o(P){return P.touches&&P.touches.length||P.changedTouches&&P.changedTouches.length}e.isTouchEvent=o;function a(P,j,L){var R=(j-P)/L,F=8,A=Number(R.toFixed(F));return parseInt(A.toString(),10)===A}e.isStepDivisible=a;function l(P,j,L,R,F,A,O){var D=1e11;if(P=Math.round(P*D)/D,!A){var N=O[j-1],B=O[j+1];if(N&&N>P)return N;if(B&&B<P)return B}if(P>R)return R;if(P<L)return L;var z=Math.floor(P*D-L*D)%Math.floor(F*D),G=Math.floor(P*D-Math.abs(z)),Q=z===0?P:G/D,Z=Math.abs(z/D)<F/2?Q:Q+F,K=(0,e.getStepDecimals)(F);return parseFloat(Z.toFixed(K))}e.normalizeValue=l;function s(P,j,L){return(P-j)/(L-j)}e.relativeValue=s;function u(P){return P===r.Direction.Up||P===r.Direction.Down}e.isVertical=u;function c(P,j,L){if(j>=L)throw new RangeError("min (".concat(j,") is equal/bigger than max (").concat(L,")"));if(P<j)throw new RangeError("value (".concat(P,") is smaller than min (").concat(j,")"));if(P>L)throw new RangeError("value (".concat(P,") is bigger than max (").concat(L,")"))}e.checkBoundaries=c;function d(P,j,L){return P<j?j:P>L?L:P}e.checkValuesAgainstBoundaries=d;function h(P){if(!(P.length<2)&&!P.slice(1).every(function(j,L){return P[L]<=j}))throw new RangeError("values={[".concat(P,"]} needs to be sorted when allowOverlap={false}"))}e.checkInitialOverlap=h;function f(P){var j=window.getComputedStyle(P);return{top:parseInt(j["margin-top"],10),bottom:parseInt(j["margin-bottom"],10),left:parseInt(j["margin-left"],10),right:parseInt(j["margin-right"],10)}}e.getMargin=f;function g(P){var j=window.getComputedStyle(P);return{top:parseInt(j["padding-top"],10)+parseInt(j["border-top-width"],10),bottom:parseInt(j["padding-bottom"],10)+parseInt(j["border-bottom-width"],10),left:parseInt(j["padding-left"],10)+parseInt(j["border-left-width"],10),right:parseInt(j["padding-right"],10)+parseInt(j["border-right-width"],10)}}e.getPaddingAndBorder=g;function y(P,j,L){var R=L?-1:1;P.forEach(function(F,A){return p(F,R*j[A].x,j[A].y)})}e.translateThumbs=y;function S(P,j,L,R){for(var F=0,A=I(P[0],j,L,R),O=1;O<P.length;O++){var D=I(P[O],j,L,R);D<A&&(A=D,F=O)}return F}e.getClosestThumbIndex=S;function p(P,j,L){P.style.transform="translate(".concat(j,"px, ").concat(L,"px)")}e.translate=p;var m=function(P){var j=[],L=null,R=function(){for(var F=[],A=0;A<arguments.length;A++)F[A]=arguments[A];j=F,!L&&(L=requestAnimationFrame(function(){L=null,P.apply(void 0,j)}))};return R};e.schd=m;function x(P,j,L){var R=P.slice(0);return R[j]=L,R}e.replaceAt=x;function w(P){var j=P.values,L=P.colors,R=P.min,F=P.max,A=P.direction,O=A===void 0?r.Direction.Right:A,D=P.rtl,N=D===void 0?!1:D;N&&O===r.Direction.Right?O=r.Direction.Left:N&&r.Direction.Left&&(O=r.Direction.Right);var B=j.slice(0).sort(function(G,Q){return G-Q}).map(function(G){return(G-R)/(F-R)*100}),z=B.reduce(function(G,Q,Z){return"".concat(G,", ").concat(L[Z]," ").concat(Q,"%, ").concat(L[Z+1]," ").concat(Q,"%")},"");return"linear-gradient(".concat(O,", ").concat(L[0]," 0%").concat(z,", ").concat(L[L.length-1]," 100%)")}e.getTrackBackground=w;function E(){}e.voidFn=E;function k(P){throw new Error("Didn't expect to get here")}e.assertUnreachable=k;var _=function(P,j,L,R,F){F===void 0&&(F=function(O){return O});var A=Math.ceil(t([P],Array.from(P.children),!0).reduce(function(O,D){var N=Math.ceil(D.getBoundingClientRect().width);if(D.innerText&&D.innerText.includes(L)&&D.childElementCount===0){var B=D.cloneNode(!0);B.innerHTML=F(j.toFixed(R)),B.style.visibility="hidden",document.body.appendChild(B),N=Math.ceil(B.getBoundingClientRect().width),document.body.removeChild(B)}return N>O?N:O},P.getBoundingClientRect().width));return A},C=function(P,j,L,R,F,A,O){O===void 0&&(O=function(B){return B});var D=[],N=function(B){var z=_(L[B],R[B],F,A,O),G=j[B].x;j.forEach(function(Q,Z){var K=Q.x,re=_(L[Z],R[Z],F,A,O);B!==Z&&(G>=K&&G<=K+re||G+z>=K&&G+z<=K+re)&&(D.includes(Z)||(D.push(B),D.push(Z),D=t(t([],D,!0),[B,Z],!1),N(Z)))})};return N(P),Array.from(new Set(D.sort()))},M=function(P,j,L,R,F,A){R===void 0&&(R=.1),F===void 0&&(F=" - "),A===void 0&&(A=function(Z){return Z});var O=(0,e.getStepDecimals)(R),D=(0,n.useState)({}),N=D[0],B=D[1],z=(0,n.useState)(A(j[L].toFixed(O))),G=z[0],Q=z[1];return(0,n.useEffect)(function(){if(P){var Z=P.getThumbs();if(Z.length<1)return;var K={},re=P.getOffsets(),we=C(L,re,Z,j,F,O,A),qe=A(j[L].toFixed(O));if(we.length){var Oe=we.reduce(function(pt,so,za,lo){return pt.length?t(t([],pt,!0),[re[lo[za]].x],!1):[re[lo[za]].x]},[]);if(Math.min.apply(Math,Oe)===re[L].x){var Xt=[];we.forEach(function(pt){Xt.push(j[pt].toFixed(O))}),qe=Array.from(new Set(Xt.sort(function(pt,so){return parseFloat(pt)-parseFloat(so)}))).map(A).join(F);var Ft=Math.min.apply(Math,Oe),kt=Math.max.apply(Math,Oe),ni=Z[we[Oe.indexOf(kt)]].getBoundingClientRect().width;K.left="".concat(Math.abs(Ft-(kt+ni))/2,"px"),K.transform="translate(-50%, 0)"}else K.visibility="hidden"}Q(qe),B(K)}},[P,j]),[G,N]};e.useThumbOverlap=M;function I(P,j,L,R){var F=P.getBoundingClientRect(),A=F.left,O=F.top,D=F.width,N=F.height;return u(R)?Math.abs(L-(O+N/2)):Math.abs(j-(A+D/2))}var $=function(){var P,j=((P=navigator.userAgentData)===null||P===void 0?void 0:P.platform)||navigator.platform;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(j)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};e.isIOS=$})(om);var e$=J&&J.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),t$=J&&J.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n$=J&&J.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r$=J&&J.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&t$(t,e,n);return n$(t,e),t},uv=J&&J.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(im,"__esModule",{value:!0});var ms=r$(b),ie=om,De=oo,i$=["ArrowRight","ArrowUp","k","PageUp"],o$=["ArrowLeft","ArrowDown","j","PageDown"],a$=function(e){e$(t,e);function t(n){var r=e.call(this,n)||this;if(r.trackRef=ms.createRef(),r.thumbRefs=[],r.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(r.props.values.length).fill(0).map(function(i,o){return o}),isChanged:!1,markOffsets:[]},r.getOffsets=function(){var i=r.props,o=i.direction,a=i.values,l=i.min,s=i.max,u=r.trackRef.current;if(!u)return console.warn("No track element found."),[];var c=u.getBoundingClientRect(),d=(0,ie.getPaddingAndBorder)(u);return r.getThumbs().map(function(h,f){var g={x:0,y:0},y=h.getBoundingClientRect(),S=(0,ie.getMargin)(h);switch(o){case De.Direction.Right:return g.x=(S.left+d.left)*-1,g.y=((y.height-c.height)/2+d.top)*-1,g.x+=c.width*(0,ie.relativeValue)(a[f],l,s)-y.width/2,g;case De.Direction.Left:return g.x=(S.right+d.right)*-1,g.y=((y.height-c.height)/2+d.top)*-1,g.x+=c.width-c.width*(0,ie.relativeValue)(a[f],l,s)-y.width/2,g;case De.Direction.Up:return g.x=((y.width-c.width)/2+S.left+d.left)*-1,g.y=-d.left,g.y+=c.height-c.height*(0,ie.relativeValue)(a[f],l,s)-y.height/2,g;case De.Direction.Down:return g.x=((y.width-c.width)/2+S.left+d.left)*-1,g.y=-d.left,g.y+=c.height*(0,ie.relativeValue)(a[f],l,s)-y.height/2,g;default:return(0,ie.assertUnreachable)(o)}})},r.getThumbs=function(){return r.trackRef&&r.trackRef.current?Array.from(r.trackRef.current.children).filter(function(i){return i.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},r.getTargetIndex=function(i){return r.getThumbs().findIndex(function(o){return o===i.target||o.contains(i.target)})},r.addTouchEvents=function(i){document.addEventListener("touchmove",r.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",r.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",r.schdOnEnd,{passive:!1})},r.addMouseEvents=function(i){document.addEventListener("mousemove",r.schdOnMouseMove),document.addEventListener("mouseup",r.schdOnEnd)},r.onMouseDownTrack=function(i){var o;if(!(i.button!==0||(0,ie.isIOS)()))if(i.persist(),i.preventDefault(),r.addMouseEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.clientX,i.clientY]},function(){return r.onMove(i.clientX,i.clientY)})}else{var a=(0,ie.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.clientX,i.clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.clientX,i.clientY)})}},r.onResize=function(){(0,ie.translateThumbs)(r.getThumbs(),r.getOffsets(),r.props.rtl),r.calculateMarkOffsets()},r.onTouchStartTrack=function(i){var o;if(i.persist(),r.addTouchEvents(i.nativeEvent),r.props.values.length>1&&r.props.draggableTrack){if(r.thumbRefs.some(function(l){var s;return(s=l.current)===null||s===void 0?void 0:s.contains(i.target)}))return;r.setState({draggedTrackPos:[i.touches[0].clientX,i.touches[0].clientY]},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}else{var a=(0,ie.getClosestThumbIndex)(r.thumbRefs.map(function(l){return l.current}),i.touches[0].clientX,i.touches[0].clientY,r.props.direction);(o=r.thumbRefs[a].current)===null||o===void 0||o.focus(),r.setState({draggedThumbIndex:a},function(){return r.onMove(i.touches[0].clientX,i.touches[0].clientY)})}},r.onMouseOrTouchStart=function(i){if(!r.props.disabled){var o=(0,ie.isTouchEvent)(i);if(!(!o&&i.button!==0)){var a=r.getTargetIndex(i);a!==-1&&(o?r.addTouchEvents(i):r.addMouseEvents(i),r.setState({draggedThumbIndex:a,thumbZIndexes:r.state.thumbZIndexes.map(function(l,s){return s===a?Math.max.apply(Math,r.state.thumbZIndexes):l<=r.state.thumbZIndexes[a]?l:l-1})}))}}},r.onMouseMove=function(i){i.preventDefault(),r.onMove(i.clientX,i.clientY)},r.onTouchMove=function(i){i.preventDefault(),r.onMove(i.touches[0].clientX,i.touches[0].clientY)},r.onKeyDown=function(i){var o=r.props,a=o.values,l=o.onChange,s=o.step,u=o.rtl,c=o.direction,d=r.state.isChanged,h=r.getTargetIndex(i.nativeEvent),f=u||c===De.Direction.Left||c===De.Direction.Down?-1:1;h!==-1&&(i$.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:h,isChanged:!0}),l((0,ie.replaceAt)(a,h,r.normalizeValue(a[h]+f*(i.key==="PageUp"?s*10:s),h)))):o$.includes(i.key)?(i.preventDefault(),r.setState({draggedThumbIndex:h,isChanged:!0}),l((0,ie.replaceAt)(a,h,r.normalizeValue(a[h]-f*(i.key==="PageDown"?s*10:s),h)))):i.key==="Tab"?r.setState({draggedThumbIndex:-1},function(){d&&r.fireOnFinalChange()}):d&&r.fireOnFinalChange())},r.onKeyUp=function(i){var o=r.state.isChanged;r.setState({draggedThumbIndex:-1},function(){o&&r.fireOnFinalChange()})},r.onMove=function(i,o){var a=r.state,l=a.draggedThumbIndex,s=a.draggedTrackPos,u=r.props,c=u.direction,d=u.min,h=u.max,f=u.onChange,g=u.values,y=u.step,S=u.rtl;if(l===-1&&s[0]===-1&&s[1]===-1)return null;var p=r.trackRef.current;if(!p)return null;var m=p.getBoundingClientRect(),x=(0,ie.isVertical)(c)?m.height:m.width;if(s[0]!==-1&&s[1]!==-1){var w=i-s[0],E=o-s[1],k=0;switch(c){case De.Direction.Right:case De.Direction.Left:k=w/x*(h-d);break;case De.Direction.Down:case De.Direction.Up:k=E/x*(h-d);break;default:(0,ie.assertUnreachable)(c)}if(S&&(k*=-1),Math.abs(k)>=y/2){for(var _=0;_<r.thumbRefs.length;_++){if(g[_]===h&&Math.sign(k)===1||g[_]===d&&Math.sign(k)===-1)return;var C=g[_]+k;C>h?k=h-g[_]:C<d&&(k=d-g[_])}for(var M=g.slice(0),_=0;_<r.thumbRefs.length;_++)M=(0,ie.replaceAt)(M,_,r.normalizeValue(g[_]+k,_));r.setState({draggedTrackPos:[i,o]}),f(M)}}else{var I=0;switch(c){case De.Direction.Right:I=(i-m.left)/x*(h-d)+d;break;case De.Direction.Left:I=(x-(i-m.left))/x*(h-d)+d;break;case De.Direction.Down:I=(o-m.top)/x*(h-d)+d;break;case De.Direction.Up:I=(x-(o-m.top))/x*(h-d)+d;break;default:(0,ie.assertUnreachable)(c)}S&&(I=h+d-I),Math.abs(g[l]-I)>=y/2&&f((0,ie.replaceAt)(g,l,r.normalizeValue(I,l)))}},r.normalizeValue=function(i,o){var a=r.props,l=a.min,s=a.max,u=a.step,c=a.allowOverlap,d=a.values;return(0,ie.normalizeValue)(i,o,l,s,u,c,d)},r.onEnd=function(i){if(i.preventDefault(),document.removeEventListener("mousemove",r.schdOnMouseMove),document.removeEventListener("touchmove",r.schdOnTouchMove),document.removeEventListener("mouseup",r.schdOnEnd),document.removeEventListener("touchend",r.schdOnEnd),document.removeEventListener("touchcancel",r.schdOnEnd),r.state.draggedThumbIndex===-1&&r.state.draggedTrackPos[0]===-1&&r.state.draggedTrackPos[1]===-1)return null;r.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){r.fireOnFinalChange()})},r.fireOnFinalChange=function(){r.setState({isChanged:!1});var i=r.props,o=i.onFinalChange,a=i.values;o&&o(a)},r.updateMarkRefs=function(i){if(!i.renderMark){r.numOfMarks=void 0,r.markRefs=void 0;return}r.numOfMarks=(i.max-i.min)/r.props.step,r.markRefs=[];for(var o=0;o<r.numOfMarks+1;o++)r.markRefs[o]=ms.createRef()},r.calculateMarkOffsets=function(){if(!(!r.props.renderMark||!r.trackRef||!r.numOfMarks||!r.markRefs||r.trackRef.current===null)){for(var i=window.getComputedStyle(r.trackRef.current),o=parseInt(i.width,10),a=parseInt(i.height,10),l=parseInt(i.paddingLeft,10),s=parseInt(i.paddingTop,10),u=[],c=0;c<r.numOfMarks+1;c++){var d=9999,h=9999;if(r.markRefs[c].current){var f=r.markRefs[c].current.getBoundingClientRect();d=f.height,h=f.width}r.props.direction===De.Direction.Left||r.props.direction===De.Direction.Right?u.push([Math.round(o/r.numOfMarks*c+l-h/2),-Math.round((d-a)/2)]):u.push([Math.round(a/r.numOfMarks*c+s-d/2),-Math.round((h-o)/2)])}r.setState({markOffsets:u})}},n.step===0)throw new Error('"step" property should be a positive number');return r.schdOnMouseMove=(0,ie.schd)(r.onMouseMove),r.schdOnTouchMove=(0,ie.schd)(r.onTouchMove),r.schdOnEnd=(0,ie.schd)(r.onEnd),r.thumbRefs=n.values.map(function(){return ms.createRef()}),r.updateMarkRefs(n),r}return t.prototype.componentDidMount=function(){var n=this,r=this.props,i=r.values,o=r.min,a=r.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",n.onResize)},unobserve:function(){return window.removeEventListener("resize",n.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,ie.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(l){return(0,ie.checkBoundaries)(l,n.props.min,n.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,ie.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),i.forEach(function(l){(0,ie.isStepDivisible)(o,l,a)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},t.prototype.componentDidUpdate=function(n,r){var i=this.props,o=i.max,a=i.min,l=i.step,s=i.values,u=i.rtl;(n.max!==o||n.min!==a||n.step!==l)&&this.updateMarkRefs(this.props),(0,ie.translateThumbs)(this.getThumbs(),this.getOffsets(),u),(n.max!==o||n.min!==a||n.step!==l||r.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),s.forEach(function(c){(0,ie.isStepDivisible)(a,c,l)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentWillUnmount=function(){var n={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,n),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var n=this,r=this.props,i=r.label,o=r.labelledBy,a=r.renderTrack,l=r.renderThumb,s=r.renderMark,u=s===void 0?function(){return null}:s,c=r.values,d=r.min,h=r.max,f=r.allowOverlap,g=r.disabled,y=this.state,S=y.draggedThumbIndex,p=y.thumbZIndexes,m=y.markOffsets;return a({props:{style:{transform:"scale(1)",cursor:S>-1?"grabbing":this.props.draggableTrack?(0,ie.isVertical)(this.props.direction)?"ns-resize":"ew-resize":c.length===1&&!g?"pointer":"inherit"},onMouseDown:g?ie.voidFn:this.onMouseDownTrack,onTouchStart:g?ie.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:g,children:uv(uv([],m.map(function(x,w,E){return u({props:{style:n.props.direction===De.Direction.Left||n.props.direction===De.Direction.Right?{position:"absolute",left:"".concat(x[0],"px"),marginTop:"".concat(x[1],"px")}:{position:"absolute",top:"".concat(x[0],"px"),marginLeft:"".concat(x[1],"px")},key:"mark".concat(w),ref:n.markRefs[w]},index:w})}),!0),c.map(function(x,w){var E=n.state.draggedThumbIndex===w;return l({index:w,value:x,isDragged:E,props:{style:{position:"absolute",zIndex:p[w],cursor:g?"inherit":E?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:w,tabIndex:g?void 0:0,"aria-valuemax":f?h:c[w+1]||h,"aria-valuemin":f?d:c[w-1]||d,"aria-valuenow":x,draggable:!1,ref:n.thumbRefs[w],"aria-label":i,"aria-labelledby":o,role:"slider",onKeyDown:g?ie.voidFn:n.onKeyDown,onKeyUp:g?ie.voidFn:n.onKeyUp}})}),!0)})},t.defaultProps={label:"Accessibility label",labelledBy:null,step:1,direction:De.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(ms.Component);im.default=a$;(function(e){var t=J&&J.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.checkValuesAgainstBoundaries=e.relativeValue=e.useThumbOverlap=e.Direction=e.getTrackBackground=e.Range=void 0;var n=t(im);e.Range=n.default;var r=om;Object.defineProperty(e,"getTrackBackground",{enumerable:!0,get:function(){return r.getTrackBackground}}),Object.defineProperty(e,"useThumbOverlap",{enumerable:!0,get:function(){return r.useThumbOverlap}}),Object.defineProperty(e,"relativeValue",{enumerable:!0,get:function(){return r.relativeValue}}),Object.defineProperty(e,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return r.checkValuesAgainstBoundaries}});var i=oo;Object.defineProperty(e,"Direction",{enumerable:!0,get:function(){return i.Direction}})})(gp);const s$=T.div`
  padding: 20px 0;
`,l$=T.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,cv=T.input`
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
`;const u$=T.div`
  height: 6px;
  width: 100%;
  border-radius: 4px;
  background: ${({background:e})=>e};
`,c$=T.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #583d2d;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`,ai=1340,si=100340,Co=100,OS=()=>{const[e,t]=b.useState([ai,si]),n=(i,o)=>{const a=o===""?"":Number(o);t(l=>{const s=[...l];return s[i]=a,s})},r=i=>{t(o=>{const a=[...o];return i===0?((a[0]===""||a[0]<ai)&&(a[0]=ai),a[0]>o[1]-Co&&(a[0]=o[1]-Co)):((a[1]===""||a[1]>si)&&(a[1]=si),a[1]<o[0]+Co&&(a[1]=o[0]+Co)),a})};return v.jsxs(s$,{children:[v.jsxs(l$,{children:[v.jsx(cv,{type:"number",value:e[0],min:ai,max:e[1],onChange:i=>n(0,i.target.value),onBlur:()=>r(0)}),v.jsx(cv,{type:"number",value:e[1],min:e[0],max:si,onChange:i=>n(1,i.target.value),onBlur:()=>r(1)})]}),v.jsx(gp.Range,{values:e,step:Co,min:ai,max:si,onChange:i=>t(i),renderTrack:({props:i,children:o})=>v.jsx(u$,{...i,background:gp.getTrackBackground({values:e,colors:["#ddd","#85683d","#ddd"],min:ai,max:si}),children:o}),renderThumb:({props:i})=>v.jsx(c$,{...i})})]})},d$=({category:e,selectedFilters:t,setSelectedFilters:n})=>{const r=TS[e]||[],[i,o]=b.useState({}),a=c=>{o(d=>({...d,[c]:!d[c]}))},l=(c,d)=>{n(h=>{const f=h[c]||[];return f.includes(d)?{...h,[c]:f.filter(g=>g!==d)}:{...h,[c]:[...f,d]}})},s=Object.values(t).some(c=>Array.isArray(c)&&c.length>0),u=()=>{s&&n({})};return console.log(s),v.jsxs(W5,{children:[v.jsxs(G5,{children:["Фільтри ",v.jsx(xb,{size:20})]}),(r||[]).map(c=>{var h;const d=!!i[c.name];return v.jsxs(Y5,{children:[v.jsxs(X5,{onClick:()=>a(c.name),children:[v.jsx(q5,{children:c.label}),v.jsx(K5,{isOpen:d})]}),v.jsxs(Z5,{isOpen:d,children:[c.type==="checkbox"&&((h=c.options)==null?void 0:h.map(f=>{var g;return v.jsxs(Q5,{children:[v.jsx(mp,{checked:((g=t[c.name])==null?void 0:g.includes(f))||!1,onChange:()=>l(c.name,f)}),v.jsx(J5,{}),f]},f)})),c.type==="range"&&v.jsx(OS,{})]})]},c.name)}),v.jsx(kS,{onClick:u,disabled:!s,children:"Скинути обрані фільтри"})]})},f$=T.aside`
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
`;const p$=T.div`
  border-bottom: 1px solid #eee;
  padding: 12px;
  margin-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`,h$=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover p {
    color: #85683d;
  }
`,m$=T.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  color: #222;
  transition: color 0.2s;
`,g$=T.span`
  border: solid #555;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${e=>e.isOpen?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,v$=T.div`
  max-height: ${e=>e.isOpen?"500px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s;
  opacity: ${e=>e.isOpen?"1":"0"};
  padding: ${e=>e.isOpen?"12px":"0"};
`,y$=T.label`
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
`,x$=T.span`
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
`,b$=({category:e,selectedFilters:t,setSelectedFilters:n})=>{const r=TS[e]||[],[i,o]=b.useState({}),a=s=>{o(u=>({...u,[s]:!u[s]}))},l=(s,u)=>{n(c=>{const d=c[s]||[];return d.includes(u)?{...c,[s]:d.filter(h=>h!==u)}:{...c,[s]:[...d,u]}})};return v.jsx(f$,{children:(r||[]).map(s=>{var c;const u=!!i[s.name];return v.jsxs(p$,{children:[v.jsxs(h$,{onClick:()=>a(s.name),children:[v.jsx(m$,{children:s.label}),v.jsx(g$,{isOpen:u})]}),v.jsxs(v$,{isOpen:u,children:[s.type==="checkbox"&&((c=s.options)==null?void 0:c.map(d=>{var h;return v.jsxs(y$,{children:[v.jsx(vp,{checked:((h=t[s.name])==null?void 0:h.includes(d))||!1,onChange:()=>l(s.name,d)}),v.jsx(x$,{}),d]},d)})),s.type==="range"&&v.jsx(OS,{})]})]},s.name)})})};T.div``;const w$=T.div`
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
`,S$=T.div`
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
`,_$=T.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,E$=T.div`
  padding: 16px;
`,C$=T.p`
font-family: var(--second-font);
font-weight: 500;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 8px;
`,k$=T.p`
  font-size: 16px;
  color: #555;
`,T$=T.p`
  font-size: 16px;
  color: #555;
`,O$=T.div.attrs({className:"card-buttons"})`
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
`,dv=T.button`
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
`;const PS=gS({name:"favorites",initialState:{items:[]},reducers:{toggleFavorite:(e,t)=>{const n=t.payload;e.items.find(i=>i.id===n.id)?e.items=e.items.filter(i=>i.id!==n.id):e.items.push(n)},clearFavorite:e=>{e.items=[]}}}),{toggleFavorite:sc,clearFavorite:P$}=PS.actions,M$=PS.reducer,I$=({category:e,selectedFilters:t={}})=>{const[n,r]=b.useState([]);b.useEffect(()=>{fetch(`${{}.VITE_API_URL}/api/products?populate=*`).then(c=>c.json()).then(c=>r(c.data))},[]),console.log(n);let i=n.filter(c=>{var d;return((d=c.category)==null?void 0:d.id_title)===e});console.log(i);const o=eu(),a=to(),l=Fn(c=>c.favorites.items),s=(c,d)=>{d.stopPropagation(),a(rc({...c,quantity:1})),te.success(`${c.name} додано в кошик!`)},u=(c,d)=>{d.stopPropagation();const h=l.some(f=>f.id===c.id);a(sc(c)),h?te.warning(`${c.name} видалено з обраного`):te.info(`${c.name} додано в обране`)};return Object.keys(t).forEach(c=>{const d=t[c];Array.isArray(d)&&d.length>0&&(i=i.filter(h=>d.includes(h[c]))),(typeof d=="string"||typeof d=="number")&&c==="price"&&(i=i.filter(h=>h.price<=Number(d)))}),v.jsxs(v.Fragment,{children:[v.jsx(Fa,{autoClose:1500}),v.jsx(w$,{children:i.map(c=>{const d=l.some(h=>h.id===c.id);return v.jsxs(S$,{onClick:()=>o(`/product/${c.id}`),style:{cursor:"pointer"},children:[v.jsx(_$,{src:c.images&&c.images.length>0?`${{}.VITE_API_URL}${c.images[0].url}`:Yn,alt:c.name,onError:h=>{h.currentTarget.onerror=null,h.currentTarget.src=Yn}}),v.jsxs(E$,{children:[v.jsx(C$,{children:c.name}),v.jsxs(k$,{children:[c.price," грн"]}),c.weight&&v.jsxs(T$,{children:[c.weight," грам"]})]}),v.jsxs(O$,{children:[v.jsx(dv,{onClick:h=>s(c,h),children:v.jsx(Su,{size:24,color:"black"})}),v.jsx(dv,{onClick:h=>u(c,h),children:v.jsx(yb,{size:24,fill:d?"#ff4d4f":"none",color:d?"#ff4d4f":"#000000"})})]})]},c.id)})})]})},j$=()=>{const[e,t]=b.useState({});console.log(e);const{category:n}=D1(),[r,i]=b.useState(!1);console.log(n);const o=Object.values(e).some(l=>Array.isArray(l)&&l.length>0),a=()=>{o&&t({})};return v.jsxs(D5,{children:[v.jsxs(R5,{children:[v.jsxs(L5,{onClick:()=>i(!0),children:["Фільтр",v.jsx(A5,{children:v.jsx("use",{href:`${un}#icon-filter`})})]}),v.jsxs(F5,{onClick:()=>i(!0),children:["Сортування",v.jsx(N5,{children:v.jsx("use",{href:`${un}#icon-sort`})})]})]}),v.jsx(d$,{category:n,selectedFilters:e,setSelectedFilters:t}),v.jsx(I$,{category:n,selectedFilters:e}),r&&v.jsx(z5,{onClick:()=>i(!1),open:r,children:v.jsxs(V5,{onClick:l=>l.stopPropagation(),open:r,children:[v.jsxs(B5,{children:[v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[v.jsx(xb,{size:20}),v.jsx("h2",{children:"Фільтри"})]}),v.jsx(wb,{size:24,onClick:()=>i(!1),style:{cursor:"pointer"}})]}),v.jsx(b$,{category:n,selectedFilters:e,setSelectedFilters:t}),v.jsxs(U5,{children:[v.jsx(kS,{onClick:a,disabled:!o,children:"Скинути обрані фільтри"}),v.jsx(H5,{onClick:()=>i(!1),children:"Показати результати"})]})]})})]})},fv=T.div`
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
`,$$=T.div`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: inherit;
  }
`,D$=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,R$=T.div``;T.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #27ae60;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  z-index: 2;
`;const L$=T.img`
  width: 100%;
  border-radius: 4px;
  background: #f9f9f9;
`,A$=T.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`,F$=T.img`
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  cursor: pointer;
  object-fit: cover;
`,N$=T.div``,z$=T.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-family: var(--second-font);
  font-weight: 500;
`,V$=T.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,B$=T.span`
  color: #27ae60;
  font-size: 17px;
`,U$=T.div`
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 25px;
  border-radius: 8px;
`,H$=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 20px;
`,W$=T.span`
  font-size: 32px;
  font-weight: 700;
`;T.span`
  text-decoration: line-through;
  color: #999;
  font-size: 18px;
`;const G$=T.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-family: var(--second-font);
  font-weight: 500;
`,Y$=T.div`
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
`,X$=T.button`
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
`;const q$=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,gs=T.div`
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
`,K$=T.div`
  margin: 20px 0;
  font-size: 14px;
  color: #444;
`,Z$=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  margin-top: 20px;
`,Q$=T.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
`,pv=T.button`
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
`,J$=T.div`
  font-family: var(--second-font);
  font-weight: 500;
  padding: 15px;
  background: #fff;
`,eD=T.p`
  font-size: 20px;
  font-family: var(--second-font);
  font-weight: 300;
`,tD=T.button`
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
`,nD=T.svg`
  width: 20px;
  height: 20px;

  fill: ${({$active:e})=>e?"white":" var(--black-color)"};
`,MS="carousel",IS="controller",rD="navigation",iD="no-scroll",am="portal",oD="root",jS="toolbar",hv="zoom",bd="loading",wd="error",Sd="complete",aD="placeholder",sD=e=>`active-slide-${e}`,lD="fullsize",sm="flex_center",uD="no_scroll",$S="no_scroll_padding",lm="slide",DS="slide_wrapper",cD="slide_wrapper_interactive",Dr="prev",Rr="next",mv="swipe",Gi="close",RS="onPointerDown",LS="onPointerMove",AS="onPointerUp",FS="onPointerLeave",NS="onPointerCancel",um="onKeyDown",dD="onKeyUp",cm="onWheel",fD="Escape",pD="ArrowLeft",hD="ArrowRight",mD="button",yp="icon",zS="contain",gv="cover",VS="Unknown action type",BS="yarl__";function En(...e){return e.filter(Boolean).join(" ")}function oe(e){return`${BS}${e}`}function gt(e){return`--${BS}${e}`}function Na(e,t){return`${e}${t?`_${t}`:""}`}function dm(e){return t=>Na(e,t)}function Yi(e,t){var n;return(n=e==null?void 0:e[t])!==null&&n!==void 0?n:t}function gD(e,t,n){return Yi(e,"{index} of {total}").replace(/\{index}/g,`${gm(n,t.length)+1}`).replace(/\{total}/g,`${t.length}`)}function fm(...e){return()=>{e.forEach(t=>{t()})}}function Zn(e,t,n){return()=>{const r=b.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r}}function pm(){return typeof window<"u"}function hm(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function ao(e){return e.type===void 0||e.type==="image"}function mm(e,t){return e.imageFit===gv||e.imageFit!==zS&&t===gv}function lc(e){return typeof e=="string"?Number.parseInt(e,10):e}function Bl(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=lc(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function vD(e,t){const n=Bl(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}function yD(){return(pm()?window==null?void 0:window.devicePixelRatio:void 0)||1}function gm(e,t){return t>0?(e%t+t)%t:0}function US(e){return e.length>0}function HS(e,t){return e[gm(t,e.length)]}function xp(e,t){return US(e)?HS(e,t):void 0}function xD(e){return ao(e)?e.src:void 0}function bD(e,t,n){if(!n)return e;const{buttons:r,...i}=e,o=r.findIndex(l=>l===t),a=b.isValidElement(n)?b.cloneElement(n,{key:t},null):n;if(o>=0){const l=[...r];return l.splice(o,1,a),{buttons:l,...i}}return{buttons:[a,...r],...i}}function wD(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}const SD=Number(b.version.split(".")[0])>=19;function _D(e){return{inert:SD?e:e?"":void 0}}function ED(e){e.scrollTop}const bp={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[Gi]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:zS,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Tr(e,t){return{name:e,component:t}}function Ne(e,t){return{module:e,children:t}}function WS(e,t,n){return e.module.name===t?n(e):e.children?[Ne(e.module,e.children.flatMap(r=>{var i;return(i=WS(r,t,n))!==null&&i!==void 0?i:[]}))]:[e]}function li(e,t,n){return e.flatMap(r=>{var i;return(i=WS(r,t,n))!==null&&i!==void 0?i:[]})}function CD(e,t=[],n=[]){let r=e;const i=f=>{const g=[...r];for(;g.length>0;){const y=g.pop();if((y==null?void 0:y.module.name)===f)return!0;y!=null&&y.children&&g.push(...y.children)}return!1},o=(f,g)=>{if(f===""){r=[Ne(g,r)];return}r=li(r,f,y=>[Ne(g,[y])])},a=(f,g)=>{r=li(r,f,y=>[Ne(y.module,[Ne(g,y.children)])])},l=(f,g,y)=>{r=li(r,f,S=>{var p;return[Ne(S.module,[...y?[Ne(g)]:[],...(p=S.children)!==null&&p!==void 0?p:[],...y?[]:[Ne(g)]])]})},s=(f,g,y)=>{r=li(r,f,S=>[...y?[Ne(g)]:[],S,...y?[]:[Ne(g)]])},u=f=>{a(IS,f)},c=(f,g)=>{r=li(r,f,y=>[Ne(g,y.children)])},d=f=>{r=li(r,f,g=>g.children)},h=f=>{n.push(f)};return t.forEach(f=>{f({contains:i,addParent:o,append:a,addChild:l,addSibling:s,addModule:u,replace:c,remove:d,augment:h})}),{config:r,augmentation:f=>n.reduce((g,y)=>y(g),f)}}const GS=b.createContext(null),YS=Zn("useA11yContext","A11yContext",GS);function kD({children:e}){const[t,n]=b.useState(!1),[r,i]=b.useState(!1),o=b.useMemo(()=>({focusWithin:t,trackFocusWithin:(l,s)=>{const u=c=>d=>{var h;d.currentTarget.contains(d.relatedTarget)||n(c),(h=c?l:s)===null||h===void 0||h(d)};return{onFocus:u(!0),onBlur:u(!1)}},autoPlaying:r,setAutoPlaying:i}),[t,r]);return b.createElement(GS.Provider,{value:o},e)}const XS=b.createContext(null),uc=Zn("useDocument","DocumentContext",XS);function TD({nodeRef:e,children:t}){const n=b.useMemo(()=>{const r=o=>{var a;return((a=o||e.current)===null||a===void 0?void 0:a.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:o=>{var a;return((a=r(o))===null||a===void 0?void 0:a.defaultView)||window}}},[e]);return b.createElement(XS.Provider,{value:n},t)}const qS=b.createContext(null),cc=Zn("useEvents","EventsContext",qS);function OD({children:e}){const[t]=b.useState({});b.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=b.useMemo(()=>{const r=(a,l)=>{var s;(s=t[a])===null||s===void 0||s.splice(0,t[a].length,...t[a].filter(u=>u!==l))};return{publish:(...[a,l])=>{var s;(s=t[a])===null||s===void 0||s.forEach(u=>u(l))},subscribe:(a,l)=>(t[a]||(t[a]=[]),t[a].push(l),()=>r(a,l)),unsubscribe:r}},[t]);return b.createElement(qS.Provider,{value:n},e)}const KS=b.createContext(null),Yt=Zn("useLightboxProps","LightboxPropsContext",KS);function PD({children:e,...t}){return b.createElement(KS.Provider,{value:t},e)}const ZS=b.createContext(null),Or=Zn("useLightboxState","LightboxStateContext",ZS),QS=b.createContext(null),MD=Zn("useLightboxDispatch","LightboxDispatchContext",QS);function ID(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,i=e.globalIndex+r,o=gm(i,n.length),a=xp(n,o),l=r||t.duration!==void 0?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:o,globalIndex:i,currentSlide:a,animation:l}}case"update":return t.slides!==e.slides||t.index!==e.currentIndex?{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:xp(t.slides,t.index)}:e;default:throw new Error(VS)}}function jD({slides:e,index:t,children:n}){const[r,i]=b.useReducer(ID,{slides:e,currentIndex:t,globalIndex:t,currentSlide:xp(e,t)}),[o,a]=b.useState(e),[l,s]=b.useState(t);(e!==o||t!==l)&&(a(e),s(t),i({type:"update",slides:e,index:t}));const u=b.useMemo(()=>({...r,state:r,dispatch:i}),[r,i]);return b.createElement(QS.Provider,{value:i},b.createElement(ZS.Provider,{value:u},n))}const JS=b.createContext(null),dc=Zn("useTimeouts","TimeoutsContext",JS);function $D({children:e}){const[t]=b.useState([]);b.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=b.useMemo(()=>{const r=a=>{t.splice(0,t.length,...t.filter(l=>l!==a))};return{setTimeout:(a,l)=>{const s=window.setTimeout(()=>{r(s),a()},l);return t.push(s),s},clearTimeout:a=>{a!==void 0&&(r(a),window.clearTimeout(a))}}},[t]);return b.createElement(JS.Provider,{value:n},e)}const vm=b.forwardRef(function({label:t,className:n,icon:r,renderIcon:i,onClick:o,style:a,...l},s){const{styles:u,labels:c}=Yt(),d=Yi(c,t);return b.createElement("button",{ref:s,type:"button",title:d,"aria-label":d,className:En(oe(mD),n),onClick:o,style:{...a,...u.button},...l},i?i():b.createElement(r,{className:oe(yp),style:u.icon}))});function DD(e,t){const n=r=>b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function ti(e,t){return DD(e,b.createElement("g",{fill:"currentColor"},b.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const RD=ti("Close",b.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),LD=ti("Previous",b.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),AD=ti("Next",b.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),FD=ti("Loading",b.createElement(b.Fragment,null,Array.from({length:8}).map((e,t,n)=>b.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),ND=ti("Error",b.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Cn=pm()?b.useLayoutEffect:b.useEffect;function ym(){const[e,t]=b.useState(!1);return b.useEffect(()=>{var n,r;const i=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(i==null?void 0:i.matches);const o=a=>t(a.matches);return(r=i==null?void 0:i.addEventListener)===null||r===void 0||r.call(i,"change",o),()=>{var a;return(a=i==null?void 0:i.removeEventListener)===null||a===void 0?void 0:a.call(i,"change",o)}},[]),e}function zD(e){let t=0,n=0,r=0;const o=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(o){const a=o[1].split(",").map(lc);a.length===6?(t=a[4],n=a[5]):a.length===16&&(t=a[12],n=a[13],r=a[14])}return{x:t,y:n,z:r}}function vv(e,t){const n=b.useRef(void 0),r=b.useRef(void 0),i=ym();return Cn(()=>{var o,a,l;if(e.current&&n.current!==void 0&&!i){const{keyframes:s,duration:u,easing:c,onfinish:d}=t(n.current,e.current.getBoundingClientRect(),zD(e.current))||{};if(s&&u){(o=r.current)===null||o===void 0||o.cancel(),r.current=void 0;try{r.current=(l=(a=e.current).animate)===null||l===void 0?void 0:l.call(a,s,{duration:u,easing:c})}catch(h){console.error(h)}r.current&&(r.current.onfinish=()=>{r.current=void 0,d==null||d()})}}n.current=void 0}),{prepareAnimation:o=>{n.current=o},isAnimationPlaying:()=>{var o;return((o=r.current)===null||o===void 0?void 0:o.playState)==="running"}}}function e_(){const e=b.useRef(null),t=b.useRef(void 0),[n,r]=b.useState();return{setContainerRef:b.useCallback(o=>{e.current=o,t.current&&(t.current.disconnect(),t.current=void 0);const a=()=>{if(o){const l=window.getComputedStyle(o),s=u=>parseFloat(u)||0;r({width:Math.round(o.clientWidth-s(l.paddingLeft)-s(l.paddingRight)),height:Math.round(o.clientHeight-s(l.paddingTop)-s(l.paddingBottom))})}else r(void 0)};a(),o&&typeof ResizeObserver<"u"&&(t.current=new ResizeObserver(a),t.current.observe(o))},[]),containerRef:e,containerRect:n}}function Xs(){const e=b.useRef(void 0),{setTimeout:t,clearTimeout:n}=dc();return b.useCallback((r,i)=>{n(e.current),e.current=t(r,i>0?i:0)},[t,n])}function de(e){const t=b.useRef(e);return Cn(()=>{t.current=e}),b.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function yv(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function wp(e,t){return b.useMemo(()=>e==null&&t==null?null:n=>{yv(e,n),yv(t,n)},[e,t])}function VD(e,t=!1){const n=b.useRef(!1);Cn(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=b.useCallback(()=>{n.current=!0},[]),i=b.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:i}}function xm(){const[e,t]=b.useState(!1);return Cn(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function BD(){const[e]=b.useState({}),t=b.useCallback((i,o)=>{var a;(a=e[i])===null||a===void 0||a.forEach(l=>{o.isPropagationStopped()||l(o)})},[e]),n=b.useMemo(()=>({onPointerDown:i=>t(RS,i),onPointerMove:i=>t(LS,i),onPointerUp:i=>t(AS,i),onPointerLeave:i=>t(FS,i),onPointerCancel:i=>t(NS,i),onKeyDown:i=>t(um,i),onKeyUp:i=>t(dD,i),onWheel:i=>t(cm,i)}),[t]),r=b.useCallback((i,o)=>(e[i]||(e[i]=[]),e[i].unshift(o),()=>{const a=e[i];a&&a.splice(0,a.length,...a.filter(l=>l!==o))}),[e]);return{registerSensors:n,subscribeSensors:r}}function xv(e,t){const n=b.useRef(0),r=Xs(),i=de((...o)=>{n.current=Date.now(),e(o)});return b.useCallback((...o)=>{r(()=>{i(o)},t-(Date.now()-n.current))},[t,i,r])}const _d=dm("slide"),Ed=dm("slide_image");function Ul({slide:e,offset:t,render:n,rect:r,imageFit:i,imageProps:o,onClick:a,onLoad:l,onError:s,style:u}){var c,d,h,f,g,y,S,p;const[m,x]=b.useState(bd),{publish:w}=cc(),{setTimeout:E}=dc(),k=b.useRef(null);b.useEffect(()=>{t===0&&w(sD(m))},[t,m,w]);const _=de(z=>{("decode"in z?z.decode():Promise.resolve()).catch(()=>{}).then(()=>{z.parentNode&&(x(Sd),E(()=>{l==null||l(z)},0))})}),C=b.useCallback(z=>{k.current=z,z!=null&&z.complete&&_(z)},[_]),M=b.useCallback(z=>{_(z.currentTarget)},[_]),I=de(()=>{x(wd),s==null||s()}),$=mm(e,i),P=(z,G)=>Number.isFinite(z)?z:G,j=P(Math.max(...((d=(c=e.srcSet)===null||c===void 0?void 0:c.map(z=>z.width))!==null&&d!==void 0?d:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((h=k.current)===null||h===void 0?void 0:h.naturalWidth)||0),L=P(Math.max(...((g=(f=e.srcSet)===null||f===void 0?void 0:f.map(z=>z.height))!==null&&g!==void 0?g:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((y=k.current)===null||y===void 0?void 0:y.naturalHeight)||0),R=j&&L?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${L}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},F=(S=e.srcSet)===null||S===void 0?void 0:S.slice().sort((z,G)=>z.width-G.width).map(z=>`${z.src} ${z.width}w`).join(", "),A=()=>r&&!$&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,O=F&&r&&pm()?`${Math.round(Math.min(A(),r.width))}px`:void 0,{style:D,className:N,...B}=(typeof o=="function"?o(e):o)||{};return b.createElement(b.Fragment,null,b.createElement("img",{ref:C,onLoad:M,onError:I,onClick:a,draggable:!1,className:En(oe(Ed()),$&&oe(Ed("cover")),m!==Sd&&oe(Ed("loading")),N),style:{...R,...u,...D},...B,alt:(p=e.alt)!==null&&p!==void 0?p:"",sizes:O,srcSet:F,src:e.src}),m!==Sd&&b.createElement("div",{className:oe(_d(aD))},m===bd&&(n!=null&&n.iconLoading?n.iconLoading():b.createElement(FD,{className:En(oe(yp),oe(_d(bd)))})),m===wd&&(n!=null&&n.iconError?n.iconError():b.createElement(ND,{className:En(oe(yp),oe(_d(wd)))}))))}const UD=b.forwardRef(function({className:t,children:n,onFocus:r,onBlur:i,...o},a){const l=b.useRef(null),{trackFocusWithin:s}=YS();return b.createElement(TD,{nodeRef:l},b.createElement("div",{ref:wp(a,l),className:En(oe("root"),t),...s(r,i),...o},n))});var et;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(et||(et={}));function t_(e,t,n,r,i){b.useEffect(()=>i?()=>{}:fm(e(RS,t),e(LS,n),e(AS,r),e(FS,r),e(NS,r)),[e,t,n,r,i])}var Zt;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"})(Zt||(Zt={}));const Cd=30;function HD({disableSwipeNavigation:e,closeOnBackdropClick:t},n,r,i,o,a,l,s,u,c,d,h,f,g,y,S){const p=b.useRef(0),m=b.useRef([]),x=b.useRef(void 0),w=b.useRef(0),E=b.useRef(Zt.NONE),k=b.useCallback(j=>{x.current===j.pointerId&&(x.current=void 0,E.current=Zt.NONE);const L=m.current;L.splice(0,L.length,...L.filter(R=>R.pointerId!==j.pointerId))},[]),_=b.useCallback(j=>{k(j),j.persist(),m.current.push(j)},[k]),C=b.useCallback(j=>m.current.find(({pointerId:L})=>j.pointerId===L),[]),M=de(j=>{_(j)}),I=(j,L)=>d&&j>L||c&&j<-L,$=de(j=>{const L=C(j);if(L)if(x.current===j.pointerId){const R=Date.now()-w.current,F=p.current;E.current===Zt.SWIPE?Math.abs(F)>.3*i||Math.abs(F)>5&&R<o?s(F,R):u(F):E.current===Zt.PULL&&(I(F,2*Cd)?g(F,R):y(F)),p.current=0,E.current=Zt.NONE}else{const{target:R}=j;t&&R instanceof HTMLElement&&R===L.target&&(R.classList.contains(oe(lm))||R.classList.contains(oe(DS)))&&S()}k(j)}),P=de(j=>{const L=C(j);if(L){const R=x.current===j.pointerId;if(j.buttons===0){R&&p.current!==0?$(j):k(L);return}const F=j.clientX-L.clientX,A=j.clientY-L.clientY;if(x.current===void 0){const O=D=>{_(j),x.current=j.pointerId,w.current=Date.now(),E.current=D};Math.abs(F)>Math.abs(A)&&Math.abs(F)>Cd&&r(F)?e||(O(Zt.SWIPE),a()):Math.abs(A)>Math.abs(F)&&I(A,Cd)&&(O(Zt.PULL),h())}else R&&(E.current===Zt.SWIPE?(p.current=F,l(F)):E.current===Zt.PULL&&(p.current=A,f(A)))}});t_(n,M,P,$)}function WD({preventDefaultWheelX:e,preventDefaultWheelY:t}){const n=b.useRef(null),r=de(i=>{const o=Math.abs(i.deltaX)>Math.abs(i.deltaY);(o&&e||!o&&t||i.ctrlKey)&&i.preventDefault()});return b.useCallback(i=>{var o;i?i.addEventListener("wheel",r,{passive:!1}):(o=n.current)===null||o===void 0||o.removeEventListener("wheel",r),n.current=i},[r])}function GD(e,t,n,r,i,o,a,l,s){const u=b.useRef(0),c=b.useRef(0),d=b.useRef(void 0),h=b.useRef(void 0),f=b.useRef(0),g=b.useRef(void 0),y=b.useRef(0),{setTimeout:S,clearTimeout:p}=dc(),m=b.useCallback(()=>{d.current&&(p(d.current),d.current=void 0)},[p]),x=b.useCallback(()=>{h.current&&(p(h.current),h.current=void 0)},[p]),w=de(()=>{e!==et.SWIPE&&(u.current=0,y.current=0,m(),x())});b.useEffect(w,[e,w]);const E=de(_=>{h.current=void 0,u.current===_&&s(u.current)}),k=de(_=>{if(_.ctrlKey||Math.abs(_.deltaY)>Math.abs(_.deltaX))return;const C=M=>{f.current=M,p(g.current),g.current=M>0?S(()=>{f.current=0,g.current=void 0},300):void 0};if(e===et.NONE){if(Math.abs(_.deltaX)<=1.2*Math.abs(f.current)){C(_.deltaX);return}if(!n(-_.deltaX))return;if(c.current+=_.deltaX,m(),Math.abs(c.current)>30)c.current=0,C(0),y.current=Date.now(),o();else{const M=c.current;d.current=S(()=>{d.current=void 0,M===c.current&&(c.current=0)},i)}}else if(e===et.SWIPE){let M=u.current-_.deltaX;if(M=Math.min(Math.abs(M),r)*Math.sign(M),u.current=M,a(M),x(),Math.abs(M)>.2*r){C(_.deltaX),l(M,Date.now()-y.current);return}h.current=S(()=>E(M),2*i)}else C(_.deltaX)});b.useEffect(()=>t(cm,k),[t,k])}const bv=dm("container"),n_=b.createContext(null),Qn=Zn("useController","ControllerContext",n_);function YD({children:e,...t}){var n;const{carousel:r,animation:i,controller:o,on:a,styles:l,render:s}=t,{closeOnPullUp:u,closeOnPullDown:c,preventDefaultWheelX:d,preventDefaultWheelY:h}=o,[f,g]=b.useState(),y=Or(),S=MD(),[p,m]=b.useState(et.NONE),x=b.useRef(0),w=b.useRef(0),E=b.useRef(1),{registerSensors:k,subscribeSensors:_}=BD(),{subscribe:C,publish:M}=cc(),I=Xs(),$=Xs(),P=Xs(),{containerRef:j,setContainerRef:L,containerRect:R}=e_(),F=wp(WD({preventDefaultWheelX:d,preventDefaultWheelY:h}),L),A=b.useRef(null),O=wp(A,void 0),{getOwnerDocument:D}=uc(),N=xm(),B=H=>(N?-1:1)*(typeof H=="number"?H:1),z=de(()=>{var H;return(H=j.current)===null||H===void 0?void 0:H.focus()}),G=de(()=>t),Q=de(()=>y),Z=b.useCallback(H=>M(Dr,H),[M]),K=b.useCallback(H=>M(Rr,H),[M]),re=b.useCallback(()=>M(Gi),[M]),we=H=>!(r.finite&&(B(H)>0&&y.currentIndex===0||B(H)<0&&y.currentIndex===y.slides.length-1)),qe=H=>{var ye;x.current=H,(ye=j.current)===null||ye===void 0||ye.style.setProperty(gt("swipe_offset"),`${Math.round(H)}px`)},Oe=H=>{var ye,it;w.current=H,E.current=(()=>{const uo=(()=>c&&H>0?H:u&&H<0?-H:0)();return Math.min(Math.max(hm(1-uo/60*(1-.5),2),.5),1)})(),(ye=j.current)===null||ye===void 0||ye.style.setProperty(gt("pull_offset"),`${Math.round(H)}px`),(it=j.current)===null||it===void 0||it.style.setProperty(gt("pull_opacity"),`${E.current}`)},{prepareAnimation:Xt}=vv(A,(H,ye,it)=>{if(A.current&&R)return{keyframes:[{transform:`translate(0, ${H.rect.y-ye.y+it.y}px)`,opacity:H.opacity},{transform:"translate(0, 0)",opacity:1}],duration:H.duration,easing:i.easing.fade}}),Ft=(H,ye)=>{if(u||c){Oe(H);let it=0;A.current&&(it=i.fade*(ye?2:1),Xt({rect:A.current.getBoundingClientRect(),opacity:E.current,duration:it})),P(()=>{Oe(0),m(et.NONE)},it),m(et.ANIMATION),ye||re()}},{prepareAnimation:kt,isAnimationPlaying:ni}=vv(A,(H,ye,it)=>{var dn;if(A.current&&R&&(!((dn=y.animation)===null||dn===void 0)&&dn.duration)){const Nt=Bl(r.spacing),uo=(Nt.percent?Nt.percent*R.width/100:Nt.pixel)||0;return{keyframes:[{transform:`translate(${B(y.globalIndex-H.index)*(R.width+uo)+H.rect.x-ye.x+it.x}px, 0)`},{transform:"translate(0, 0)"}],duration:y.animation.duration,easing:y.animation.easing}}}),pt=de(H=>{var ye,it;const dn=H.offset||0,Nt=dn?i.swipe:(ye=i.navigation)!==null&&ye!==void 0?ye:i.swipe,uo=!dn&&!ni()?i.easing.navigation:i.easing.swipe;let{direction:Va}=H;const Ba=(it=H.count)!==null&&it!==void 0?it:1;let gc=et.ANIMATION,fn=Nt*Ba;if(!Va){const co=R==null?void 0:R.width,$m=H.duration||0,yc=co?Nt/co*Math.abs(dn):Nt;Ba!==0?($m<yc?fn=fn/yc*Math.max($m,yc/5):co&&(fn=Nt/co*(co-Math.abs(dn))),Va=B(dn)>0?Dr:Rr):fn=Nt/2}let vc=0;Va===Dr?we(B(1))?vc=-Ba:(gc=et.NONE,fn=Nt):Va===Rr&&(we(B(-1))?vc=Ba:(gc=et.NONE,fn=Nt)),fn=Math.round(fn),$(()=>{qe(0),m(et.NONE)},fn),A.current&&kt({rect:A.current.getBoundingClientRect(),index:y.globalIndex}),m(gc),M(mv,{type:"swipe",increment:vc,duration:fn,easing:uo})});b.useEffect(()=>{var H,ye;!((H=y.animation)===null||H===void 0)&&H.increment&&(!((ye=y.animation)===null||ye===void 0)&&ye.duration)&&I(()=>S({type:"swipe",increment:0}),y.animation.duration)},[y.animation,S,I]);const so=[_,we,(R==null?void 0:R.width)||0,i.swipe,()=>m(et.SWIPE),H=>qe(H),(H,ye)=>pt({offset:H,duration:ye,count:1}),H=>pt({offset:H,count:0})],za=[()=>{c&&m(et.PULL)},H=>Oe(H),H=>Ft(H),H=>Ft(H,!0)];HD(o,...so,u,c,...za,re),GD(p,...so);const lo=de(()=>{o.focus&&D().querySelector(`.${oe(am)} .${oe(bv())}`)&&z()});b.useEffect(lo,[lo]);const jm=de(()=>{var H;(H=a.view)===null||H===void 0||H.call(a,{index:y.currentIndex})});b.useEffect(jm,[y.globalIndex,jm]),b.useEffect(()=>fm(C(Dr,H=>pt({direction:Dr,...H})),C(Rr,H=>pt({direction:Rr,...H})),C(mv,H=>S(H))),[C,pt,S]);const X_=b.useMemo(()=>({prev:Z,next:K,close:re,focus:z,slideRect:R?vD(R,r.padding):{width:0,height:0},containerRect:R||{width:0,height:0},subscribeSensors:_,containerRef:j,setCarouselRef:O,toolbarWidth:f,setToolbarWidth:g}),[Z,K,re,z,_,R,j,O,f,g,r.padding]);return b.useImperativeHandle(o.ref,()=>({prev:Z,next:K,close:re,focus:z,getLightboxProps:G,getLightboxState:Q}),[Z,K,re,z,G,Q]),b.createElement("div",{ref:F,className:En(oe(bv()),oe(sm)),style:{...p===et.SWIPE?{[gt("swipe_offset")]:`${Math.round(x.current)}px`}:null,...p===et.PULL?{[gt("pull_offset")]:`${Math.round(w.current)}px`,[gt("pull_opacity")]:`${E.current}`}:null,...o.touchAction!=="none"?{[gt("controller_touch_action")]:o.touchAction}:null,...l.container},tabIndex:-1,...k},R&&b.createElement(n_.Provider,{value:X_},e,(n=s.controls)===null||n===void 0?void 0:n.call(s)))}const XD=Tr(IS,YD);function Pr(e){return Na(MS,e)}function wv(e){return Na(lm,e)}function qD({slide:e,offset:t}){const n=b.useRef(null),{currentIndex:r,slides:i}=Or(),{slideRect:o,focus:a}=Qn(),{render:l,carousel:{imageFit:s,imageProps:u},on:{click:c},styles:{slide:d},labels:h}=Yt(),{getOwnerDocument:f}=uc(),g=t!==0;b.useEffect(()=>{var S;g&&(!((S=n.current)===null||S===void 0)&&S.contains(f().activeElement))&&a()},[g,a,f]);const y=()=>{var S,p,m,x;let w=(S=l.slide)===null||S===void 0?void 0:S.call(l,{slide:e,offset:t,rect:o});return!w&&ao(e)&&(w=b.createElement(Ul,{slide:e,offset:t,render:l,rect:o,imageFit:s,imageProps:u,onClick:g?void 0:()=>c==null?void 0:c({index:r})})),w?b.createElement(b.Fragment,null,(p=l.slideHeader)===null||p===void 0?void 0:p.call(l,{slide:e}),((m=l.slideContainer)!==null&&m!==void 0?m:({children:E})=>E)({slide:e,children:w}),(x=l.slideFooter)===null||x===void 0?void 0:x.call(l,{slide:e})):null};return b.createElement("div",{ref:n,className:En(oe(wv()),!g&&oe(wv("current")),oe(sm)),..._D(g),style:d,role:"group","aria-roledescription":Yi(h,"Slide"),"aria-label":gD(h,i,r+t)},y())}function KD(){const e=Yt().styles.slide;return b.createElement("div",{className:oe(lm),style:e})}function ZD({carousel:e,labels:t}){const{slides:n,currentIndex:r,globalIndex:i}=Or(),{setCarouselRef:o}=Qn(),{autoPlaying:a,focusWithin:l}=YS(),s=Bl(e.spacing),u=Bl(e.padding),c=wD(e,n,1),d=[];if(US(n))for(let h=r-c;h<=r+c;h+=1){const f=HS(n,h),g=i-r+h,y=e.finite&&(h<0||h>n.length-1);d.push(y?{key:g}:{key:[`${g}`,xD(f)].filter(Boolean).join("|"),offset:h-r,slide:f})}return b.createElement("div",{ref:o,className:En(oe(Pr()),d.length>0&&oe(Pr("with_slides"))),style:{[`${gt(Pr("slides_count"))}`]:d.length,[`${gt(Pr("spacing_px"))}`]:s.pixel||0,[`${gt(Pr("spacing_percent"))}`]:s.percent||0,[`${gt(Pr("padding_px"))}`]:u.pixel||0,[`${gt(Pr("padding_percent"))}`]:u.percent||0},role:"region","aria-live":a&&!l?"off":"polite","aria-roledescription":Yi(t,"Carousel"),"aria-label":Yi(t,"Photo gallery")},d.map(({key:h,slide:f,offset:g})=>f?b.createElement(qD,{key:h,slide:f,offset:g}):b.createElement(KD,{key:h})))}const QD=Tr(MS,ZD);function r_(){const{carousel:e}=Yt(),{slides:t,currentIndex:n}=Or(),r=t.length===0||e.finite&&n===0,i=t.length===0||e.finite&&n===t.length-1;return{prevDisabled:r,nextDisabled:i}}function JD(e){var t;const n=xm(),{publish:r}=cc(),{animation:i}=Yt(),{prevDisabled:o,nextDisabled:a}=r_(),l=((t=i.navigation)!==null&&t!==void 0?t:i.swipe)/2,s=xv(()=>r(Dr),l),u=xv(()=>r(Rr),l),c=de(d=>{switch(d.key){case fD:r(Gi);break;case pD:(n?a:o)||(n?u:s)();break;case hD:(n?o:a)||(n?s:u)();break}});b.useEffect(()=>e(um,c),[e,c])}function Sv({label:e,icon:t,renderIcon:n,action:r,onClick:i,disabled:o,style:a}){return b.createElement(vm,{label:e,icon:t,renderIcon:n,className:oe(`navigation_${r}`),disabled:o,onClick:i,style:a,...VD(Qn().focus,o)})}function eR({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:i}){const{prev:o,next:a,subscribeSensors:l}=Qn(),{prevDisabled:s,nextDisabled:u}=r_();return JD(l),b.createElement(b.Fragment,null,e?e():b.createElement(Sv,{label:"Previous",action:Dr,icon:LD,renderIcon:n,style:i.navigationPrev,disabled:s,onClick:o}),t?t():b.createElement(Sv,{label:"Next",action:Rr,icon:AD,renderIcon:r,style:i.navigationNext,disabled:u,onClick:a}))}const tR=Tr(rD,eR),_v=oe(uD),nR=oe($S);function rR(e){return"style"in e}function Ev(e,t,n){const r=window.getComputedStyle(e),i=n?"padding-left":"padding-right",o=n?r.paddingLeft:r.paddingRight,a=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(lc(o)||0)+t}px`),()=>{a?e.style.setProperty(i,a):e.style.removeProperty(i)}}function iR({noScroll:{disabled:e},children:t}){const n=xm(),{getOwnerDocument:r,getOwnerWindow:i}=uc();return b.useEffect(()=>{if(e)return()=>{};const o=[],a=i(),{body:l,documentElement:s}=r(),u=Math.round(a.innerWidth-s.clientWidth);if(u>0){o.push(Ev(l,u,n));const c=l.getElementsByTagName("*");for(let d=0;d<c.length;d+=1){const h=c[d];rR(h)&&a.getComputedStyle(h).getPropertyValue("position")==="fixed"&&!h.classList.contains(nR)&&o.push(Ev(h,u,n))}}return l.classList.add(_v),()=>{l.classList.remove(_v),o.forEach(c=>c())}},[n,e,r,i]),b.createElement(b.Fragment,null,t)}const oR=Tr(iD,iR);function Cv(e){return Na(am,e)}function kv(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function aR({children:e,animation:t,styles:n,className:r,on:i,portal:o,close:a,labels:l}){const[s,u]=b.useState(!1),[c,d]=b.useState(!1),h=b.useRef([]),f=b.useRef(null),{setTimeout:g}=dc(),{subscribe:y}=cc(),p=ym()?0:t.fade;b.useEffect(()=>(u(!0),()=>{u(!1),d(!1)}),[]);const m=de(()=>{h.current.forEach(k=>k()),h.current=[]}),x=de(()=>{var k;d(!1),m(),(k=i.exiting)===null||k===void 0||k.call(i),g(()=>{var _;(_=i.exited)===null||_===void 0||_.call(i),a()},p)});b.useEffect(()=>y(Gi,x),[y,x]);const w=de(k=>{var _,C,M;ED(k),d(!0),(_=i.entering)===null||_===void 0||_.call(i);const I=(M=(C=k.parentNode)===null||C===void 0?void 0:C.children)!==null&&M!==void 0?M:[];for(let $=0;$<I.length;$+=1){const P=I[$];["TEMPLATE","SCRIPT","STYLE"].indexOf(P.tagName)===-1&&P!==k&&(h.current.push(kv(P,"inert","")),h.current.push(kv(P,"aria-hidden","true")))}h.current.push(()=>{var $,P;(P=($=f.current)===null||$===void 0?void 0:$.focus)===null||P===void 0||P.call($)}),g(()=>{var $;($=i.entered)===null||$===void 0||$.call(i)},p)}),E=b.useCallback(k=>{k?w(k):m()},[w,m]);return s?gu.createPortal(b.createElement(UD,{ref:E,className:En(r,oe(Cv()),oe($S),c&&oe(Cv("open"))),"aria-modal":!0,role:"dialog","aria-label":Yi(l,"Lightbox"),style:{...t.fade!==bp.animation.fade?{[gt("fade_animation_duration")]:`${p}ms`}:null,...t.easing.fade!==bp.animation.easing.fade?{[gt("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:k=>{f.current||(f.current=k.relatedTarget)}},e),o.root||document.body):null}const sR=Tr(am,aR);function lR({children:e}){return b.createElement(b.Fragment,null,e)}const uR=Tr(oD,lR);function cR(e){return Na(jS,e)}function dR({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:i,setToolbarWidth:o}=Qn(),{setContainerRef:a,containerRect:l}=e_();Cn(()=>{o(l==null?void 0:l.width)},[o,l==null?void 0:l.width]);const s=()=>t?t():b.createElement(vm,{key:Gi,label:"Close",icon:RD,renderIcon:n,onClick:i});return b.createElement("div",{ref:a,style:r.toolbar,className:oe(cR())},e==null?void 0:e.map(u=>u===Gi?s():u))}const fR=Tr(jS,dR);function i_(e,t){var n;return b.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>i_(r,t)))}function pR(e,t={}){const{easing:n,...r}=e,{easing:i,...o}=t;return{easing:{...n,...i},...r,...o}}function hR({carousel:e,animation:t,render:n,toolbar:r,controller:i,noScroll:o,on:a,plugins:l,slides:s,index:u,...c}){const{animation:d,carousel:h,render:f,toolbar:g,controller:y,noScroll:S,on:p,slides:m,index:x,plugins:w,...E}=bp,{config:k,augmentation:_}=CD([Ne(sR,[Ne(oR,[Ne(XD,[Ne(QD),Ne(fR),Ne(tR)])])])],l||w),C=_({animation:pR(d,t),carousel:{...h,...e},render:{...f,...n},toolbar:{...g,...r},controller:{...y,...i},noScroll:{...S,...o},on:{...p,...a},...E,...c});return C.open?b.createElement(PD,{...C},b.createElement(jD,{slides:s||m,index:lc(u||x)},b.createElement($D,null,b.createElement(OD,null,b.createElement(kD,null,i_(Ne(uR,k),C)))))):null}const mR={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function gR(e){return Math.min(Math.max(e,Number.EPSILON),1)}function o_(e){const{minZoom:t,...n}={...mR,...e};return{minZoom:gR(t),...n}}function vR(e,t,n,r){const i=b.useRef(void 0),o=b.useRef(void 0),{zoom:a}=Yt().animation,l=ym(),s=de(()=>{var u,c,d;if((u=i.current)===null||u===void 0||u.cancel(),i.current=void 0,o.current&&(r!=null&&r.current)){try{i.current=(d=(c=r.current).animate)===null||d===void 0?void 0:d.call(c,[{transform:o.current},{transform:`scale(${e}) translateX(${t}px) translateY(${n}px)`}],{duration:l?0:a??500,easing:i.current?"ease-out":"ease-in-out"})}catch(h){console.error(h)}o.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return Cn(s,[e,t,n,s]),b.useCallback(()=>{o.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function yR(e,t){const{on:n}=Yt(),r=de(()=>{var i;t||(i=n.zoom)===null||i===void 0||i.call(n,{zoom:e})});b.useEffect(r,[e,r])}function fc(){const{zoom:e}=Yt();return o_(e)}function xR(e,t){var n,r;let i={width:0,height:0},o={width:0,height:0};const{currentSlide:a}=Or(),{imageFit:l}=Yt().carousel,{maxZoomPixelRatio:s}=fc();if(e&&a){const c={...a,...t};if(ao(c)){const d=mm(c,l),h=Math.max(...(((n=c.srcSet)===null||n===void 0?void 0:n.map(g=>g.width))||[]).concat(c.width?[c.width]:[])),f=Math.max(...(((r=c.srcSet)===null||r===void 0?void 0:r.map(g=>g.height))||[]).concat(c.height?[c.height]:[]));h>0&&f>0&&e.width>0&&e.height>0&&(o=d?{width:Math.round(Math.min(h,e.width/e.height*f)),height:Math.round(Math.min(f,e.height/e.width*h))}:{width:h,height:f},o={width:o.width*s,height:o.height*s},i=d?{width:Math.min(e.width,o.width,h),height:Math.min(e.height,o.height,f)}:{width:Math.round(Math.min(e.width,e.height/f*h,h)),height:Math.round(Math.min(e.height,e.width/h*f,f))})}}const u=i.width?Math.max(hm(o.width/i.width,5),1):1;return{imageRect:i,maxZoom:u}}function Tv(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Ov(e,t,n=100,r=2){return e*Math.min(1+Math.abs(t/n),r)**Math.sign(t)}function bR(e,t,n,r,i,o,a,l,s){const u=b.useRef([]),c=b.useRef(0),d=b.useRef(void 0),{globalIndex:h}=Or(),{getOwnerWindow:f}=uc(),{containerRef:g,subscribeSensors:y}=Qn(),{keyboardMoveDistance:S,zoomInMultiplier:p,wheelZoomDistanceFactor:m,scrollToZoom:x,doubleTapDelay:w,doubleClickDelay:E,doubleClickMaxStops:k,pinchZoomDistanceFactor:_,pinchZoomV4:C}=fc(),M=b.useCallback(O=>{if(g.current){const{pageX:D,pageY:N}=O,{scrollX:B,scrollY:z}=f(),{left:G,top:Q,width:Z,height:K}=g.current.getBoundingClientRect();return[D-G-B-Z/2,N-Q-z-K/2]}return[]},[g,f]),I=de(O=>{const{key:D,metaKey:N,ctrlKey:B}=O,z=N||B,G=()=>{O.preventDefault(),O.stopPropagation()};if(e>1){const Q=(Z,K)=>{G(),l(Z,K)};D==="ArrowDown"?Q(0,S):D==="ArrowUp"?Q(0,-S):D==="ArrowLeft"?Q(-S,0):D==="ArrowRight"&&Q(S,0)}D==="+"||z&&D==="="?(G(),i()):D==="-"||z&&D==="_"?(G(),o()):z&&D==="0"&&(G(),a(1))}),$=de(O=>{if((O.ctrlKey||x)&&Math.abs(O.deltaY)>Math.abs(O.deltaX)){O.stopPropagation(),a(Ov(e,-O.deltaY,m),!0,...M(O));return}e>1&&(O.stopPropagation(),x||l(O.deltaX,O.deltaY))}),P=b.useCallback(O=>{const D=u.current;D.splice(0,D.length,...D.filter(N=>N.pointerId!==O.pointerId))},[]),j=b.useCallback(O=>{P(O),O.persist(),u.current.push(O)},[P]),L=de(O=>{var D;const N=u.current;if(O.pointerType==="mouse"&&O.buttons>1||!(!((D=s==null?void 0:s.current)===null||D===void 0)&&D.contains(O.target)))return;e>1&&O.stopPropagation();const{timeStamp:B}=O;if(N.length===0&&B-c.current<(O.pointerType==="touch"?w:E)){c.current=0;const z=e>=1?e!==n?e*Math.max(n**(1/k),p):1:e!==t?e/Math.max(t**(-1/k),p):1;a(z,!1,...M(O))}else c.current=B;if(j(O),N.length===2){const z=Tv(N[0],N[1]);d.current={previousDistance:z,initialDistance:Math.max(z,1),initialZoom:e}}}),R=de(O=>{const D=u.current,N=D.find(B=>B.pointerId===O.pointerId);if(D.length===2&&d.current){O.stopPropagation(),j(O);const B=Tv(D[0],D[1]),z=C?d.current.initialZoom/d.current.initialDistance*B:Ov(e,B-d.current.previousDistance,_);a(z,!0,...D.map(G=>M(G)).reduce((G,Q)=>Q.map((Z,K)=>G[K]+Z/2))),d.current.previousDistance=B;return}e>1&&(O.stopPropagation(),N&&(D.length===1&&l((N.clientX-O.clientX)/e,(N.clientY-O.clientY)/e),j(O)))}),F=b.useCallback(O=>{const D=u.current;D.length===2&&D.find(N=>N.pointerId===O.pointerId)&&(d.current=void 0),P(O)},[P]),A=b.useCallback(()=>{const O=u.current;O.splice(0,O.length),c.current=0,d.current=void 0},[]);t_(y,L,R,F,r),b.useEffect(A,[h,A]),b.useEffect(()=>r?()=>{}:fm(A,y(um,I),y(cm,$)),[r,y,A,I,$])}function wR(e,t,n){const[r,i]=b.useState(1),[o,a]=b.useState(0),[l,s]=b.useState(0),u=vR(r,o,l,n),{currentSlide:c,globalIndex:d}=Or(),{containerRect:h,slideRect:f}=Qn(),{minZoom:g,zoomInMultiplier:y}=fc(),S=c&&ao(c)?c.src:void 0,p=!S||!(n!=null&&n.current);Cn(()=>{i(1),a(0),s(0)},[d,S]);const m=b.useCallback((_,C,M)=>{const I=M||r,$=o-(_||0),P=l-(C||0),j=(e.width*I-f.width)/2/I,L=(e.height*I-f.height)/2/I;a(Math.min(Math.abs($),Math.max(j,0))*Math.sign($)),s(Math.min(Math.abs(P),Math.max(L,0))*Math.sign(P))},[r,o,l,f,e.width,e.height]),x=b.useCallback((_,C,M,I)=>{const $=hm(_+.01<t?_-.01>g?_:g:t,5);C||u(),m(M?M*(1/r-1/$):0,I?I*(1/r-1/$):0,$),i($)},[r,g,t,m,u]),w=de(()=>{r>1&&(r>t&&x(t,!0),m())});Cn(w,[h.width,h.height,w]);const E=b.useCallback(()=>{const _=r*y;x(r<1&&_>1?1:_)},[r,y,x]),k=b.useCallback(()=>{const _=r/y;x(r>1&&_<1?1:_)},[r,y,x]);return{zoom:r,offsetX:o,offsetY:l,disabled:p,changeOffsets:m,changeZoom:x,zoomIn:E,zoomOut:k}}const a_=b.createContext(null),bm=Zn("useZoom","ZoomControllerContext",a_);function SR({children:e}){const[t,n]=b.useState(),{slideRect:r}=Qn(),{ref:i,minZoom:o}=fc(),{imageRect:a,maxZoom:l}=xR(r,t==null?void 0:t.imageDimensions),{zoom:s,offsetX:u,offsetY:c,disabled:d,changeZoom:h,changeOffsets:f,zoomIn:g,zoomOut:y}=wR(a,l,t==null?void 0:t.zoomWrapperRef);yR(s,d),bR(s,o,l,d,g,y,h,f,t==null?void 0:t.zoomWrapperRef);const S=b.useMemo(()=>({zoom:s,minZoom:o,maxZoom:l,offsetX:u,offsetY:c,disabled:d,zoomIn:g,zoomOut:y,changeZoom:h}),[s,o,l,u,c,d,g,y,h]);b.useImperativeHandle(i,()=>S,[S]);const p=b.useMemo(()=>({...S,setZoomWrapper:n}),[S,n]);return b.createElement(a_.Provider,{value:p},e)}const _R=ti("ZoomIn",b.createElement(b.Fragment,null,b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),b.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),ER=ti("ZoomOut",b.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),Pv=b.forwardRef(function({zoomIn:t,onLoseFocus:n},r){const i=b.useRef(!1),o=b.useRef(!1),{zoom:a,minZoom:l,maxZoom:s,zoomIn:u,zoomOut:c,disabled:d}=bm(),{render:h}=Yt(),f=d||(t?a>=s:a<=l);return b.useEffect(()=>{f&&i.current&&o.current&&n(),f||(i.current=!0)},[f,n]),b.createElement(vm,{ref:r,disabled:f,label:t?"Zoom in":"Zoom out",icon:t?_R:ER,renderIcon:t?h.iconZoomIn:h.iconZoomOut,onClick:t?u:c,onFocus:()=>{o.current=!0},onBlur:()=>{o.current=!1}})});function CR(){const e=b.useRef(null),t=b.useRef(null),{focus:n}=Qn(),r=b.useCallback(a=>{var l,s;!((l=a.current)===null||l===void 0)&&l.disabled?n():(s=a.current)===null||s===void 0||s.focus()},[n]),i=b.useCallback(()=>r(e),[r]),o=b.useCallback(()=>r(t),[r]);return b.createElement(b.Fragment,null,b.createElement(Pv,{zoomIn:!0,ref:e,onLoseFocus:o}),b.createElement(Pv,{ref:t,onLoseFocus:i}))}function kR(){const{render:e}=Yt(),t=bm();return e.buttonZoom?b.createElement(b.Fragment,null,e.buttonZoom(t)):b.createElement(CR,null)}function TR(e){var t;return(((t=e.srcSet)===null||t===void 0?void 0:t.length)||0)>0}function OR({current:e,preload:t},{type:n,source:r}){switch(n){case"fetch":return e?{current:e,preload:r}:{current:r};case"done":return r===t?{current:r}:{current:e,preload:t};default:throw new Error(VS)}}function PR(e){var t,n;const[{current:r,preload:i},o]=b.useReducer(OR,{}),{slide:a,rect:l,imageFit:s,render:u,interactive:c}=e,d=a.srcSet.sort((E,k)=>E.width-k.width),h=(t=a.width)!==null&&t!==void 0?t:d[d.length-1].width,f=(n=a.height)!==null&&n!==void 0?n:d[d.length-1].height,g=mm(a,s),y=Math.max(...d.map(E=>E.width)),S=Math.min((g?Math.max:Math.min)(l.width,h*(l.height/f)),y),p=yD(),m=de(()=>{var E;const k=(E=d.find(_=>_.width>=S*p))!==null&&E!==void 0?E:d[d.length-1];(!r||d.findIndex(_=>_.src===r)<d.findIndex(_=>_===k))&&o({type:"fetch",source:k.src})});Cn(m,[l.width,l.height,p,m]);const x=de(E=>o({type:"done",source:E})),w={WebkitTransform:c?"initial":"translateZ(0)"};return g||Object.assign(w,l.width/l.height<h/f?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),b.createElement(b.Fragment,null,i&&i!==r&&b.createElement(Ul,{key:"preload",...e,offset:void 0,slide:{...a,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...w},onLoad:()=>x(i),render:{...u,iconLoading:()=>null,iconError:()=>null}}),r&&b.createElement(Ul,{key:"current",...e,slide:{...a,src:r,srcSet:void 0},style:w}))}function MR({render:e,slide:t,offset:n,rect:r}){var i;const[o,a]=b.useState(),l=b.useRef(null),{zoom:s,maxZoom:u,offsetX:c,offsetY:d,setZoomWrapper:h}=bm(),f=s>1,{carousel:g,on:y}=Yt(),{currentIndex:S}=Or();Cn(()=>n===0?(h({zoomWrapperRef:l,imageDimensions:o}),()=>h(void 0)):()=>{},[n,o,h]);let p=(i=e.slide)===null||i===void 0?void 0:i.call(e,{slide:t,offset:n,rect:r,zoom:s,maxZoom:u});if(!p&&ao(t)){const m={slide:t,offset:n,rect:r,render:e,imageFit:g.imageFit,imageProps:g.imageProps,onClick:n===0?()=>{var x;return(x=y.click)===null||x===void 0?void 0:x.call(y,{index:S})}:void 0};p=TR(t)?b.createElement(PR,{...m,slide:t,interactive:f,rect:n===0?{width:r.width*s,height:r.height*s}:r}):b.createElement(Ul,{onLoad:x=>a({width:x.naturalWidth,height:x.naturalHeight}),...m})}return p?b.createElement("div",{ref:l,className:En(oe(lD),oe(sm),oe(DS),f&&oe(cD)),style:n===0?{transform:`scale(${s}) translateX(${c}px) translateY(${d}px)`}:void 0},p):null}const IR=({augment:e,addModule:t})=>{e(({zoom:n,toolbar:r,render:i,controller:o,...a})=>{const l=o_(n);return{zoom:l,toolbar:bD(r,hv,b.createElement(kR,null)),render:{...i,slide:s=>{var u;return ao(s.slide)?b.createElement(MR,{render:i,...s}):(u=i.slide)===null||u===void 0?void 0:u.call(i,s)}},controller:{...o,preventDefaultWheelY:l.scrollToZoom},...a}}),t(Tr(hv,SR))},jR=()=>{const{id:e}=D1(),[t,n]=b.useState([]),[r,i]=b.useState(1),[o,a]=b.useState("description"),[l,s]=b.useState(null),[u,c]=b.useState(!1),[d,h]=b.useState(0),f=t.find(E=>E.id===Number(e));b.useEffect(()=>{fetch(`${{}.VITE_API_URL}/api/products?populate=*`).then(E=>E.json()).then(E=>n(E.data))},[]),console.log(t),b.useEffect(()=>{var E,k;f&&f.images&&s((k=(E=f==null?void 0:f.images)==null?void 0:E[0])!=null&&k.url?`${{}.VITE_API_URL}${f.images[0].url}`:null)},[f]);const g=f==null?void 0:f.images.map(E=>({src:`${{}.VITE_API_URL}${E.url}`}));console.log(f);const y=()=>{const E=f.images.indexOf(l);h(E),c(!0)},S=to(),m=Fn(E=>E.favorites.items).some(E=>E.id===(f==null?void 0:f.id)),x=()=>{S(rc({...f,quantity:r})),te.success(`${f.name} додано в кошик!`)},w=(E,k)=>{k.stopPropagation(),S(sc(E)),m?te.warning(`${E.name} видалено з обраного`):te.info(`${E.name} додано в обране`)};return f?f?v.jsxs(fv,{children:[" ",v.jsx(Fa,{autoClose:1500}),v.jsxs($$,{children:[v.jsx($e,{to:"/",children:"Головна"})," / ",v.jsx($e,{to:"/catalog",children:"Каталог"})," /"," ",f.name]}),v.jsxs(D$,{children:[v.jsxs(R$,{children:[v.jsx(L$,{src:l,alt:f.name,onClick:y}),v.jsx(A$,{children:f.images.map(E=>{const k=`${{}.VITE_API_URL}${E.url}`;return v.jsx(F$,{src:k,onClick:()=>s(k),style:{cursor:"pointer",opacity:l===k?1:.4}},E.id)})})]}),v.jsx(hR,{open:u,close:()=>c(!1),index:d,slides:g,controller:{closeOnBackdropClick:!0},on:{view:({index:E})=>{var k,_;h(E),(_=(k=f==null?void 0:f.images)==null?void 0:k[E])!=null&&_.url&&s(`${{}.VITE_API_URL}${f.images[E].url}`)}},plugins:[IR],zoom:{maxZoomPixelRatio:3,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:300,doubleClickEnabled:!0,pinchZoomDistanceFactor:100,scrollToZoom:!0}}),v.jsxs(N$,{children:[v.jsx(z$,{children:f.name}),v.jsx(V$,{children:v.jsx(B$,{children:"● Новий товар"})}),v.jsxs(U$,{children:[v.jsx(H$,{children:v.jsxs(W$,{children:[f.price.toLocaleString()," грн"]})}),v.jsxs(G$,{children:[v.jsxs(Y$,{children:[v.jsx("button",{onClick:()=>i(Math.max(1,r-1)),children:"-"}),v.jsx("span",{children:r}),v.jsx("button",{onClick:()=>i(r+1),children:"+"})]}),v.jsxs(X$,{onClick:x,children:[" ",v.jsx(Su,{size:25}),v.jsx("span",{children:"В КОШИК"})]}),v.jsxs(tD,{$active:m,onClick:E=>w(f,E),children:[v.jsxs(nD,{$active:m,children:[" ",v.jsx("use",{href:`${un}#icon-heart`})]}),v.jsx("span",{children:"В ОБРАНЕ"})]})]})]}),v.jsxs(K$,{children:[v.jsxs("p",{children:[v.jsx("strong",{children:"Ваше місто:"})," Київ"]}),v.jsx("p",{children:"🚚 Доставка по Україні (Розрахувати вартість)"})]})]})]}),v.jsxs(Z$,{children:[v.jsxs(Q$,{children:[v.jsx(pv,{active:o==="description",onClick:()=>a("description"),children:"Опис"}),v.jsx(pv,{active:o==="attributes",onClick:()=>a("attributes"),children:"Характеристики"})]}),v.jsxs(J$,{children:[o==="description"&&v.jsx(eD,{children:f.description}),o==="attributes"&&v.jsxs(q$,{children:[v.jsxs(gs,{children:[v.jsx("span",{children:"Розміри, мм"})," ",v.jsx("b",{children:f.size||""})]}),v.jsxs(gs,{children:[v.jsx("span",{children:"Тип"})," ",v.jsx("b",{children:f.type||""})]}),v.jsxs(gs,{children:[v.jsx("span",{children:"Колір"})," ",v.jsx("b",{children:f.color||""})]}),v.jsxs(gs,{children:[v.jsx("span",{children:"Колір"})," ",v.jsx("b",{children:f.color||""})]})]})]})]})]}):v.jsx(fv,{children:"Товар не знайдено"}):v.jsx("div",{children:"Завантаження..."})},$R=T.div`
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

  
`,DR=T.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,RR=T.h1`
  font-size:24px;
 
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  font-size:30px;
  }
  
`,LR=T.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between; 
  }
`,AR=T.div`
  flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,FR=T.div`
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
`,NR=T.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`,zR=T.div`
  h3 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
  }
`,VR=T.div`

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;
`,BR=T.div`

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
`;const UR=T.div`
  text-align: right;
 
`,HR=T.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,WR=T.button`
  background: 'none';
  border: 'none';
  cursor: 'pointer';
  color: '#ccc';
`,GR=T.div`

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
`,YR=T.div`
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
`,XR=T($e)`
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
`,qR=T.button`
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
`;const KR=T.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,ZR=T.div`
   
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
`;const QR=T.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`,JR=T.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`,eL=T.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,tL=T.button`
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
`,nL=()=>v.jsxs(v.Fragment,{children:[v.jsx(KR,{children:"Головна / Кошик"}),v.jsxs(ZR,{children:[v.jsx(QR,{src:"/Didiv/empty-cart.png",alt:"Порожній кошик"}),v.jsx(JR,{children:"Ваш кошик порожній"}),v.jsx(eL,{children:"Ви ще не додали жодного товару в кошик"}),v.jsx(tL,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до покупок"})]})]}),rL=T.div`
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
`,iL=({item:e})=>{const t=to();return v.jsxs(rL,{children:[v.jsx("button",{onClick:()=>t(Yj(e.id)),children:"-"}),v.jsx("span",{children:e.quantity}),v.jsx("button",{onClick:()=>t(Gj(e.id)),children:"+"})]})},oL=()=>{const e=to(),[t,n]=b.useState([]),r=Fn(d=>d.cart.items),i=r.reduce((d,h)=>d+h.price*(h.quantity||1),0),o=Fn(d=>d.cart.items),a=Fn(d=>d.favorites.items),l=o.length===0,s=(d,h)=>{h.stopPropagation(),console.log(d);const f=a.some(g=>g.id===d.id);e(sc(d)),f?te.warning(`${d.name} видалено з обраного`):te.info(`${d.name} додано в обране`)},u=d=>{n(h=>[...h,d.id]),setTimeout(()=>{e(Uj(d)),n(h=>h.filter(f=>f!==d.id))},300)},c=()=>{e(Hj())};return v.jsx(v.Fragment,{children:l?v.jsx(nL,{}):v.jsxs($R,{children:[v.jsx(Fa,{autoClose:1500}),v.jsxs(DR,{children:[" ",v.jsx($e,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",v.jsx($e,{to:"/cart",style:{color:"inherit",textDecoration:"none"},children:"Кошик"})]}),v.jsx(RR,{children:"Кошик"}),v.jsxs(LR,{children:[v.jsx(AR,{children:r.map((d,h)=>{var g;const f=a.some(y=>y.id===d.id);return v.jsxs(FR,{className:t.includes(d.id)?"removing":"",children:[v.jsx(NR,{src:((g=d.image)==null?void 0:g[0])||Yn,alt:d.name,onError:y=>{y.currentTarget.onerror=null,y.currentTarget.src=Yn}}),v.jsx(zR,{children:v.jsx("h3",{children:d.name})}),v.jsxs(VR,{children:[v.jsx(iL,{item:{...d,quantity:d.quantity||1}}),v.jsx(UR,{children:v.jsxs("div",{className:"current-price",children:[(d.price*(d.quantity||1)).toLocaleString()," грн"]})})]}),v.jsxs(BR,{children:[v.jsx(WR,{onClick:y=>s(d,y),style:{background:"none",border:"none",cursor:"pointer",color:"#ccc"},children:v.jsx(yb,{size:22,fill:f?"#ff4d4f":"none",color:f?"#ff4d4f":"#999"})}),v.jsx(HR,{onClick:()=>u(d),style:{background:"none",border:"none",cursor:"pointer",color:"#000000"},children:v.jsx(bb,{size:22})})]})]},`${d.id}-${h}`)})}),v.jsxs(GR,{children:[v.jsxs(YR,{children:[v.jsx("span",{children:"Всього в обраному:"}),v.jsxs("strong",{children:[a.length," шт."]}),v.jsx("span",{children:"На суму:"}),v.jsxs("strong",{children:[i," грн"]})]}),v.jsx(XR,{to:"/checkout",children:"Оформити замовлення"}),v.jsx(qR,{onClick:c,children:"Oчистити кошик"})]})]})]})})},aL=T.div`
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

  
  
`,sL=T.nav`
  font-family: var(--main-font);
  font-size: 14px;
  color: #8c8c8c;
  margin-bottom: 15px;
`,lL=T.h1`
color: var(--black-color);
 font-family: var(--main-font);
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 32px;
`,uL=T.div`
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
`,cL=T.div`
   flex: 1; 
  width: 100%;
  border: 1px solid #eee;
  border-radius: 12px;
`,dL=T.div`
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
`;const fL=T.img`
   width: 100%;
  height: auto;
  border-radius: 4px;
`,pL=T.h3`
 font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
  }
    
`,hL=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
   @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,mL=T.p`
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
`,gL=T.div`
  display: flex;
  gap: 16px;
`,Mv=T.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  padding: 8px;
  
`,vL=T.div`
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
`,yL=T.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 15px;
  color: #555;
`,xL=T.button`
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
`,bL=T.button`
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
`,wL=T.div`
  padding: 20px 40px;
  font-size: 14px;
  color: #8c8c8c;
  background-color: #fdfaf7;
`,SL=T.div`
   
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
`;const _L=T.img`
  width: 250px;
  height: auto;
  margin-bottom: 30px;
`;T.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;const EL=T.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`,CL=T.button`
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
`,kL=()=>v.jsxs(v.Fragment,{children:[v.jsx(wL,{children:"Головна / Обране"}),v.jsxs(SL,{children:[v.jsx(_L,{src:"/Didiv/sad.png",alt:"Порожній кошик"}),v.jsx(EL,{children:"Ви ще не додали жодного товару в обране"}),v.jsx(CL,{onClick:()=>window.location.href="/Didiv/catalog",children:"Перейти до вибору"})]})]}),TL=()=>{const e=to(),t=Fn(c=>c.favorites.items),[n,r]=b.useState([]),i=c=>{e(rc(c)),te.success(`${c.name} додано в кошик!`)},o=()=>{e(Wj(t)),te.success("Товари додано в кошик!")};console.log(t);const a=t.reduce((c,d)=>c+d.price,0),l=(c,d)=>{d.stopPropagation();const h=t.some(f=>f.id===c.id);r(f=>[...f,c.id]),setTimeout(()=>{e(sc(c)),r(f=>f.filter(g=>g!==c.id))},300),h?te.warning(`${c.name} видалено з обраного`):te.info(`${c.name} додано в обране`)},s=()=>{e(P$())},u=t.length===0;return v.jsx(v.Fragment,{children:u?v.jsx(kL,{}):v.jsxs(aL,{children:[v.jsx(Fa,{autoClose:1500}),v.jsxs(sL,{children:[" ",v.jsx($e,{to:"/",style:{color:"inherit",textDecoration:"none"},children:"Головна"})," ","/"," ",v.jsx($e,{to:"/favorite",style:{color:"inherit",textDecoration:"none"},children:"Обране"})]}),v.jsx(lL,{children:"Обране"}),v.jsxs(uL,{children:[v.jsx(cL,{children:t.map(c=>{var d;return v.jsxs(dL,{className:n.includes(c.id)?"removing":"",children:[v.jsx(fL,{src:((d=c.image)==null?void 0:d[0])||Yn,alt:c.name,onError:h=>{h.currentTarget.onerror=null,h.currentTarget.src=Yn}}),v.jsx(pL,{children:c.name}),v.jsxs(hL,{children:[v.jsxs(mL,{children:[c.price," грн"]}),v.jsxs(gL,{children:[v.jsx(Mv,{onClick:()=>i(c),children:v.jsx(Su,{size:30})}),v.jsx(Mv,{onClick:h=>l(c,h),children:v.jsx(bb,{size:30})})]})]})]},c.id)})}),v.jsxs(vL,{children:[v.jsxs(yL,{children:[v.jsx("span",{children:"Всього в обраному:"}),v.jsxs("strong",{children:[t.length," шт."]}),v.jsx("span",{children:"На суму:"}),v.jsxs("strong",{children:[a," грн"]})]}),v.jsx("hr",{style:{border:"0",borderTop:"1px solid #eee",margin:"20px 0"}}),v.jsx(xL,{onClick:()=>o(),children:"Додати все до кошика"}),v.jsx(bL,{onClick:s,children:"Очистити обрані"})]})]})]})})},OL=T.div`
  background-color: #fdfaf7;
  min-height: 80vh;
  padding-bottom: 60px;
`,PL=T.div`
  padding: 15px 20px;
  font-size: 12px;
  color: #8c8c8c;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    font-size: 14px;
  }
`,ML=T.article`
  max-width: 800px; // Обмежуємо ширину для зручного читання тексту
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`,IL=T.h1`
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
`;const jL=({title:e,children:t,breadcrumbPath:n})=>v.jsxs(OL,{children:[v.jsxs(PL,{children:["Головна / ",n]}),v.jsxs(ML,{children:[v.jsx(IL,{children:e}),t]})]}),Iv=T.section`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,jv=T.h2`
  font-size: 20px;
  color: #4a332a;
  margin-bottom: 15px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,$v=T.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`,Dv=T.ul`
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
`,$L=()=>v.jsxs(jL,{title:"Оплата і доставка",breadcrumbPath:"Доставка",children:[v.jsxs(Iv,{children:[v.jsx(jv,{children:"Способи доставки"}),v.jsx($v,{children:"Ми доставляємо замовлення по всій Україні за допомогою:"}),v.jsxs(Dv,{children:[v.jsx("li",{children:"Нова Пошта (у відділення або кур1єром)"}),v.jsx("li",{children:"Самовивіз з нашого магазину"}),v.jsx("li",{children:"Укрпошта"})]})]}),v.jsxs(Iv,{children:[v.jsx(jv,{children:"Варіанти оплати"}),v.jsx($v,{children:"Ви можете обрати зручний для вас спосіб оплати:"}),v.jsxs(Dv,{children:[v.jsx("li",{children:"Оплата карткою на сайті (Visa/Mastercard)"}),v.jsx("li",{children:"Післяплата (накладений платіж) при отриманні"}),v.jsx("li",{children:"Безготівковий розрахунок"})]})]})]});function Qr(e){"@babel/helpers - typeof";return Qr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qr(e)}function DL(e,t){if(Qr(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Qr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function s_(e){var t=DL(e,"string");return Qr(t)==="symbol"?t:String(t)}function Do(e,t,n){return t=s_(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rv(Object(n),!0).forEach(function(r){Do(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function RL(e){if(Array.isArray(e))return e}function LL(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(c){u=!0,i=c}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Sp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l_(e,t){if(e){if(typeof e=="string")return Sp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sp(e,t)}}function AL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zn(e,t){return RL(e)||LL(e,t)||l_(e,t)||AL()}function FL(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jn(e,t){if(e==null)return{};var n=FL(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var NL=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function zL(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,c=e.onInputChange,d=e.onMenuClose,h=e.onMenuOpen,f=e.value,g=Jn(e,NL),y=b.useState(l!==void 0?l:n),S=zn(y,2),p=S[0],m=S[1],x=b.useState(s!==void 0?s:i),w=zn(x,2),E=w[0],k=w[1],_=b.useState(f!==void 0?f:a),C=zn(_,2),M=C[0],I=C[1],$=b.useCallback(function(O,D){typeof u=="function"&&u(O,D),I(O)},[u]),P=b.useCallback(function(O,D){var N;typeof c=="function"&&(N=c(O,D)),m(N!==void 0?N:O)},[c]),j=b.useCallback(function(){typeof h=="function"&&h(),k(!0)},[h]),L=b.useCallback(function(){typeof d=="function"&&d(),k(!1)},[d]),R=l!==void 0?l:p,F=s!==void 0?s:E,A=f!==void 0?f:M;return X(X({},g),{},{inputValue:R,menuIsOpen:F,onChange:$,onInputChange:P,onMenuClose:L,onMenuOpen:j,value:A})}function VL(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,s_(r.key),r)}}function BL(e,t,n){return t&&Lv(e.prototype,t),n&&Lv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _p(e,t){return _p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},_p(e,t)}function UL(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_p(e,t)}function Hl(e){return Hl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Hl(e)}function HL(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function WL(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function GL(e,t){if(t&&(Qr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return WL(e)}function YL(e){var t=HL();return function(){var r=Hl(e),i;if(t){var o=Hl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return GL(this,i)}}function XL(e){if(Array.isArray(e))return Sp(e)}function qL(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function KL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wm(e){return XL(e)||qL(e)||l_(e)||KL()}function ZL(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const QL=Math.min,JL=Math.max,Wl=Math.round,vs=Math.floor,Gl=e=>({x:e,y:e});function eA(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function pc(){return typeof window<"u"}function u_(e){return d_(e)?(e.nodeName||"").toLowerCase():"#document"}function sn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function c_(e){var t;return(t=(d_(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function d_(e){return pc()?e instanceof Node||e instanceof sn(e).Node:!1}function Ep(e){return pc()?e instanceof Element||e instanceof sn(e).Element:!1}function Sm(e){return pc()?e instanceof HTMLElement||e instanceof sn(e).HTMLElement:!1}function Av(e){return!pc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof sn(e).ShadowRoot}function f_(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=_m(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}let kd;function tA(){return kd==null&&(kd=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),kd}function nA(e){return/^(html|body|#document)$/.test(u_(e))}function _m(e){return sn(e).getComputedStyle(e)}function rA(e){if(u_(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Av(e)&&e.host||c_(e);return Av(t)?t.host:t}function p_(e){const t=rA(e);return nA(t)?e.ownerDocument?e.ownerDocument.body:e.body:Sm(t)&&f_(t)?t:p_(t)}function Yl(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=p_(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=sn(i);if(o){const l=Cp(a);return t.concat(a,a.visualViewport||[],f_(i)?i:[],l&&n?Yl(l):[])}else return t.concat(i,Yl(i,[],n))}function Cp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function iA(e){const t=_m(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Sm(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Wl(n)!==o||Wl(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Em(e){return Ep(e)?e:e.contextElement}function Td(e){const t=Em(e);if(!Sm(t))return Gl(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=iA(t);let a=(o?Wl(n.width):n.width)/r,l=(o?Wl(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const oA=Gl(0);function aA(e){const t=sn(e);return!tA()||!t.visualViewport?oA:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function sA(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==sn(e)?!1:t}function Fv(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Em(e);let a=Gl(1);t&&(r?Ep(r)&&(a=Td(r)):a=Td(e));const l=sA(o,n,r)?aA(o):Gl(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,c=i.width/a.x,d=i.height/a.y;if(o){const h=sn(o),f=r&&Ep(r)?sn(r):r;let g=h,y=Cp(g);for(;y&&r&&f!==g;){const S=Td(y),p=y.getBoundingClientRect(),m=_m(y),x=p.left+(y.clientLeft+parseFloat(m.paddingLeft))*S.x,w=p.top+(y.clientTop+parseFloat(m.paddingTop))*S.y;s*=S.x,u*=S.y,c*=S.x,d*=S.y,s+=x,u+=w,g=sn(y),y=Cp(g)}}return eA({width:c,height:d,x:s,y:u})}function h_(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function lA(e,t){let n=null,r;const i=c_(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const u=e.getBoundingClientRect(),{left:c,top:d,width:h,height:f}=u;if(l||t(),!h||!f)return;const g=vs(d),y=vs(i.clientWidth-(c+h)),S=vs(i.clientHeight-(d+f)),p=vs(c),x={rootMargin:-g+"px "+-y+"px "+-S+"px "+-p+"px",threshold:JL(0,QL(1,s))||1};let w=!0;function E(k){const _=k[0].intersectionRatio;if(_!==s){if(!w)return a();_?a(!1,_):r=setTimeout(()=>{a(!1,1e-7)},1e3)}_===1&&!h_(u,e.getBoundingClientRect())&&a(),w=!1}try{n=new IntersectionObserver(E,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,x)}n.observe(e)}return a(!0),o}function uA(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=Em(e),c=i||o?[...u?Yl(u):[],...t?Yl(t):[]]:[];c.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),o&&p.addEventListener("resize",n)});const d=u&&l?lA(u,n):null;let h=-1,f=null;a&&(f=new ResizeObserver(p=>{let[m]=p;m&&m.target===u&&f&&t&&(f.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(t)})),n()}),u&&!s&&f.observe(u),t&&f.observe(t));let g,y=s?Fv(e):null;s&&S();function S(){const p=Fv(e);y&&!h_(y,p)&&n(),y=p,g=requestAnimationFrame(S)}return n(),()=>{var p;c.forEach(m=>{i&&m.removeEventListener("scroll",n),o&&m.removeEventListener("resize",n)}),d==null||d(),(p=f)==null||p.disconnect(),f=null,s&&cancelAnimationFrame(g)}}var kp=b.useLayoutEffect,cA=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Xl=function(){};function dA(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function fA(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(dA(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Nv=function(t){return wA(t)?t.filter(Boolean):Qr(t)==="object"&&t!==null?[t]:[]},m_=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=Jn(t,cA);return X({},n)},ke=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function hc(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function pA(e){return hc(e)?window.innerHeight:e.clientHeight}function g_(e){return hc(e)?window.pageYOffset:e.scrollTop}function ql(e,t){if(hc(e)){window.scrollTo(0,t);return}e.scrollTop=t}function hA(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function mA(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function ys(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Xl,i=g_(e),o=t-i,a=10,l=0;function s(){l+=a;var u=mA(l,i,o,n);ql(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function zv(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?ql(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&ql(e,Math.max(t.offsetTop-i,0))}function gA(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Vv(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function vA(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var v_=!1,yA={get passive(){return v_=!0}},xs=typeof window<"u"?window:{};xs.addEventListener&&xs.removeEventListener&&(xs.addEventListener("p",Xl,yA),xs.removeEventListener("p",Xl,!1));var xA=v_;function bA(e){return e!=null}function wA(e){return Array.isArray(e)}function bs(e,t,n){return e?t:n}var SA=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=zn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=zn(l,2),u=s[0],c=s[1];return a[u]=c,a},{})},_A=["children","innerProps"],EA=["children","innerProps"];function CA(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=hA(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var c=s.getBoundingClientRect(),d=c.height,h=n.getBoundingClientRect(),f=h.bottom,g=h.height,y=h.top,S=n.offsetParent.getBoundingClientRect(),p=S.top,m=a?window.innerHeight:pA(s),x=g_(s),w=parseInt(getComputedStyle(n).marginBottom,10),E=parseInt(getComputedStyle(n).marginTop,10),k=p-E,_=m-y,C=k+x,M=d-x-y,I=f-m+x+w,$=x+y-E,P=160;switch(i){case"auto":case"bottom":if(_>=g)return{placement:"bottom",maxHeight:t};if(M>=g&&!a)return o&&ys(s,I,P),{placement:"bottom",maxHeight:t};if(!a&&M>=r||a&&_>=r){o&&ys(s,I,P);var j=a?_-w:M-w;return{placement:"bottom",maxHeight:j}}if(i==="auto"||a){var L=t,R=a?k:C;return R>=r&&(L=Math.min(R-w-l,t)),{placement:"top",maxHeight:L}}if(i==="bottom")return o&&ql(s,I),{placement:"bottom",maxHeight:t};break;case"top":if(k>=g)return{placement:"top",maxHeight:t};if(C>=g&&!a)return o&&ys(s,$,P),{placement:"top",maxHeight:t};if(!a&&C>=r||a&&k>=r){var F=t;return(!a&&C>=r||a&&k>=r)&&(F=a?k-E:C-E),o&&ys(s,$,P),{placement:"top",maxHeight:F}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function kA(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var y_=function(t){return t==="auto"?"bottom":t},TA=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return X((r={label:"menu"},Do(r,kA(i),"100%"),Do(r,"position","absolute"),Do(r,"width","100%"),Do(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},x_=b.createContext(null),OA=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=b.useContext(x_)||{},c=u.setPortalPlacement,d=b.useRef(null),h=b.useState(i),f=zn(h,2),g=f[0],y=f[1],S=b.useState(null),p=zn(S,2),m=p[0],x=p[1],w=s.spacing.controlHeight;return kp(function(){var E=d.current;if(E){var k=a==="fixed",_=l&&!k,C=CA({maxHeight:i,menuEl:E,minHeight:r,placement:o,shouldScroll:_,isFixedPosition:k,controlHeight:w});y(C.maxHeight),x(C.placement),c==null||c(C.placement)}},[i,o,a,l,r,c,w]),n({ref:d,placerProps:X(X({},t),{},{placement:m||y_(o),maxHeight:g})})},PA=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return Y("div",q({},ke(t,"menu",{menu:!0}),{ref:r},i),n)},MA=PA,IA=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return X({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},jA=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return Y("div",q({},ke(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},b_=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return X({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},$A=b_,DA=b_,RA=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=Jn(t,_A);return Y("div",q({},ke(X(X({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},LA=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=Jn(t,EA);return Y("div",q({},ke(X(X({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},AA=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},FA=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=b.useRef(null),u=b.useRef(null),c=b.useState(y_(a)),d=zn(c,2),h=d[0],f=d[1],g=b.useMemo(function(){return{setPortalPlacement:f}},[]),y=b.useState(null),S=zn(y,2),p=S[0],m=S[1],x=b.useCallback(function(){if(i){var _=gA(i),C=l==="fixed"?0:window.pageYOffset,M=_[h]+C;(M!==(p==null?void 0:p.offset)||_.left!==(p==null?void 0:p.rect.left)||_.width!==(p==null?void 0:p.rect.width))&&m({offset:M,rect:_})}},[i,l,h,p==null?void 0:p.offset,p==null?void 0:p.rect.left,p==null?void 0:p.rect.width]);kp(function(){x()},[x]);var w=b.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=uA(i,s.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);kp(function(){w()},[w]);var E=b.useCallback(function(_){s.current=_,w()},[w]);if(!n&&l!=="fixed"||!p)return null;var k=Y("div",q({ref:E},ke(X(X({},t),{},{offset:p.offset,position:l,rect:p.rect}),"menuPortal",{"menu-portal":!0}),o),r);return Y(x_.Provider,{value:g},n?gu.createPortal(k,n):k)},NA=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},zA=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return Y("div",q({},ke(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},VA=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return X({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},BA=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return Y("div",q({},ke(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},UA=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},HA=function(t){var n=t.children,r=t.innerProps;return Y("div",q({},ke(t,"indicatorsContainer",{indicators:!0}),r),n)},Bv,WA=["size"],GA=["innerProps","isRtl","size"],YA={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},w_=function(t){var n=t.size,r=Jn(t,WA);return Y("svg",q({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:YA},r))},Cm=function(t){return Y(w_,q({size:20},t),Y("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},S_=function(t){return Y(w_,q({size:20},t),Y("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},__=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return X({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},XA=__,qA=function(t){var n=t.children,r=t.innerProps;return Y("div",q({},ke(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||Y(S_,null))},KA=__,ZA=function(t){var n=t.children,r=t.innerProps;return Y("div",q({},ke(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||Y(Cm,null))},QA=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return X({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},JA=function(t){var n=t.innerProps;return Y("span",q({},n,ke(t,"indicatorSeparator",{"indicator-separator":!0})))},e6=YP(Bv||(Bv=ZL([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),t6=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return X({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Od=function(t){var n=t.delay,r=t.offset;return Y("span",{css:Wh({animation:"".concat(e6," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},n6=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=Jn(t,GA);return Y("div",q({},ke(X(X({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Y(Od,{delay:0,offset:r}),Y(Od,{delay:160,offset:!0}),Y(Od,{delay:320,offset:!r}))},r6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return X({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},i6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return Y("div",q({ref:o},ke(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},o6=i6,a6=["data"],s6=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},l6=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,c=t.theme,d=t.selectProps;return Y("div",q({},ke(t,"group",{group:!0}),s),Y(a,q({},l,{selectProps:d,theme:c,getStyles:i,getClassNames:o,cx:r}),u),Y("div",null,n))},u6=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return X({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},c6=function(t){var n=m_(t);n.data;var r=Jn(n,a6);return Y("div",q({},ke(t,"groupHeading",{"group-heading":!0}),r))},d6=l6,f6=["innerRef","isDisabled","isHidden","inputClassName"],p6=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return X(X({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},h6),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},E_={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},h6={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":X({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},E_)},m6=function(t){return X({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},E_)},g6=function(t){var n=t.cx,r=t.value,i=m_(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=Jn(i,f6);return Y("div",q({},ke(t,"input",{"input-container":!0}),{"data-value":r||""}),Y("input",q({className:n({input:!0},s),ref:o,style:m6(l),disabled:a},u)))},v6=g6,y6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return X({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},x6=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return X({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},b6=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return X({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},C_=function(t){var n=t.children,r=t.innerProps;return Y("div",r,n)},w6=C_,S6=C_;function _6(e){var t=e.children,n=e.innerProps;return Y("div",q({role:"button"},n),t||Y(Cm,{size:14}))}var E6=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,c=r.Label,d=r.Remove;return Y(u,{data:i,innerProps:X(X({},ke(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},Y(c,{data:i,innerProps:X({},ke(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),Y(d,{data:i,innerProps:X(X({},ke(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},C6=E6,k6=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return X({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},T6=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return Y("div",q({},ke(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},O6=T6,P6=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return X({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},M6=function(t){var n=t.children,r=t.innerProps;return Y("div",q({},ke(t,"placeholder",{placeholder:!0}),r),n)},I6=M6,j6=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return X({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},$6=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return Y("div",q({},ke(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},D6=$6,R6={ClearIndicator:ZA,Control:o6,DropdownIndicator:qA,DownChevron:S_,CrossIcon:Cm,Group:d6,GroupHeading:c6,IndicatorsContainer:HA,IndicatorSeparator:JA,Input:v6,LoadingIndicator:n6,Menu:MA,MenuList:jA,MenuPortal:FA,LoadingMessage:LA,NoOptionsMessage:RA,MultiValue:C6,MultiValueContainer:w6,MultiValueLabel:S6,MultiValueRemove:_6,Option:O6,Placeholder:I6,SelectContainer:zA,SingleValue:D6,ValueContainer:BA},L6=function(t){return X(X({},R6),t.components)},Uv=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function A6(e,t){return!!(e===t||Uv(e)&&Uv(t))}function F6(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!A6(e[n],t[n]))return!1;return!0}function N6(e,t){t===void 0&&(t=F6);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var z6={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},V6=function(t){return Y("span",q({css:z6},t))},Hv=V6,B6={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,c=t.isAppleDevice,d=function(y,S){return y&&y.length?"".concat(y.indexOf(S)+1," of ").concat(y.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(d(l,r),".");if(n==="menu"&&c){var h=s?" disabled":"",f="".concat(u?" selected":"").concat(h);return"".concat(a).concat(f,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},U6=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,c=t.isAppleDevice,d=s.ariaLiveMessages,h=s.getOptionLabel,f=s.inputValue,g=s.isMulti,y=s.isOptionDisabled,S=s.isSearchable,p=s.menuIsOpen,m=s.options,x=s.screenReaderStatus,w=s.tabSelectsValue,E=s.isLoading,k=s["aria-label"],_=s["aria-live"],C=b.useMemo(function(){return X(X({},B6),d||{})},[d]),M=b.useMemo(function(){var R="";if(n&&C.onChange){var F=n.option,A=n.options,O=n.removedValue,D=n.removedValues,N=n.value,B=function(we){return Array.isArray(we)?null:we},z=O||F||B(N),G=z?h(z):"",Q=A||D||void 0,Z=Q?Q.map(h):[],K=X({isDisabled:z&&y(z,l),label:G,labels:Z},n);R=C.onChange(K)}return R},[n,C,y,l,h]),I=b.useMemo(function(){var R="",F=r||i,A=!!(r&&l&&l.includes(r));if(F&&C.onFocus){var O={focused:F,label:h(F),isDisabled:y(F,l),isSelected:A,options:o,context:F===r?"menu":"value",selectValue:l,isAppleDevice:c};R=C.onFocus(O)}return R},[r,i,h,y,C,o,l,c]),$=b.useMemo(function(){var R="";if(p&&m.length&&!E&&C.onFilter){var F=x({count:o.length});R=C.onFilter({inputValue:f,resultsMessage:F})}return R},[o,f,p,C,m,x,E]),P=(n==null?void 0:n.action)==="initial-input-focus",j=b.useMemo(function(){var R="";if(C.guidance){var F=i?"value":p?"menu":"input";R=C.guidance({"aria-label":k,context:F,isDisabled:r&&y(r,l),isMulti:g,isSearchable:S,tabSelectsValue:w,isInitialFocus:P})}return R},[k,r,i,g,y,S,p,C,l,w,P]),L=Y(b.Fragment,null,Y("span",{id:"aria-selection"},M),Y("span",{id:"aria-focused"},I),Y("span",{id:"aria-results"},$),Y("span",{id:"aria-guidance"},j));return Y(b.Fragment,null,Y(Hv,{id:u},P&&L),Y(Hv,{"aria-live":_,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!P&&L))},H6=U6,Tp=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],W6=new RegExp("["+Tp.map(function(e){return e.letters}).join("")+"]","g"),k_={};for(var Pd=0;Pd<Tp.length;Pd++)for(var Md=Tp[Pd],Id=0;Id<Md.letters.length;Id++)k_[Md.letters[Id]]=Md.base;var T_=function(t){return t.replace(W6,function(n){return k_[n]})},G6=N6(T_),Wv=function(t){return t.replace(/^\s+|\s+$/g,"")},Y6=function(t){return"".concat(t.label," ").concat(t.value)},X6=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=X({ignoreCase:!0,ignoreAccents:!0,stringify:Y6,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,c=s?Wv(r):r,d=s?Wv(l(n)):l(n);return o&&(c=c.toLowerCase(),d=d.toLowerCase()),a&&(c=G6(c),d=T_(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},q6=["innerRef"];function K6(e){var t=e.innerRef,n=Jn(e,q6),r=SA(n,"onExited","in","enter","exit","appear");return Y("input",q({ref:t},r,{css:Wh({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Z6=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function Q6(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=b.useRef(!1),l=b.useRef(!1),s=b.useRef(0),u=b.useRef(null),c=b.useCallback(function(S,p){if(u.current!==null){var m=u.current,x=m.scrollTop,w=m.scrollHeight,E=m.clientHeight,k=u.current,_=p>0,C=w-E-x,M=!1;C>p&&a.current&&(r&&r(S),a.current=!1),_&&l.current&&(o&&o(S),l.current=!1),_&&p>C?(n&&!a.current&&n(S),k.scrollTop=w,M=!0,a.current=!0):!_&&-p>x&&(i&&!l.current&&i(S),k.scrollTop=0,M=!0,l.current=!0),M&&Z6(S)}},[n,r,i,o]),d=b.useCallback(function(S){c(S,S.deltaY)},[c]),h=b.useCallback(function(S){s.current=S.changedTouches[0].clientY},[]),f=b.useCallback(function(S){var p=s.current-S.changedTouches[0].clientY;c(S,p)},[c]),g=b.useCallback(function(S){if(S){var p=xA?{passive:!1}:!1;S.addEventListener("wheel",d,p),S.addEventListener("touchstart",h,p),S.addEventListener("touchmove",f,p)}},[f,h,d]),y=b.useCallback(function(S){S&&(S.removeEventListener("wheel",d,!1),S.removeEventListener("touchstart",h,!1),S.removeEventListener("touchmove",f,!1))},[f,h,d]);return b.useEffect(function(){if(t){var S=u.current;return g(S),function(){y(S)}}},[t,g,y]),function(S){u.current=S}}var Gv=["boxSizing","height","overflow","paddingRight","position"],Yv={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Xv(e){e.cancelable&&e.preventDefault()}function qv(e){e.stopPropagation()}function Kv(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function Zv(){return"ontouchstart"in window||navigator.maxTouchPoints}var Qv=!!(typeof window<"u"&&window.document&&window.document.createElement),ko=0,ui={capture:!1,passive:!1};function J6(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),o=b.useRef(null),a=b.useCallback(function(s){if(Qv){var u=document.body,c=u&&u.style;if(r&&Gv.forEach(function(g){var y=c&&c[g];i.current[g]=y}),r&&ko<1){var d=parseInt(i.current.paddingRight,10)||0,h=document.body?document.body.clientWidth:0,f=window.innerWidth-h+d||0;Object.keys(Yv).forEach(function(g){var y=Yv[g];c&&(c[g]=y)}),c&&(c.paddingRight="".concat(f,"px"))}u&&Zv()&&(u.addEventListener("touchmove",Xv,ui),s&&(s.addEventListener("touchstart",Kv,ui),s.addEventListener("touchmove",qv,ui))),ko+=1}},[r]),l=b.useCallback(function(s){if(Qv){var u=document.body,c=u&&u.style;ko=Math.max(ko-1,0),r&&ko<1&&Gv.forEach(function(d){var h=i.current[d];c&&(c[d]=h)}),u&&Zv()&&(u.removeEventListener("touchmove",Xv,ui),s&&(s.removeEventListener("touchstart",Kv,ui),s.removeEventListener("touchmove",qv,ui)))}},[r]);return b.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var e8=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},t8={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function n8(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=Q6({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),c=J6({isEnabled:n}),d=function(f){u(f),c(f)};return Y(b.Fragment,null,n&&Y("div",{onClick:e8,css:t8}),t(d))}var r8={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},i8=function(t){var n=t.name,r=t.onFocus;return Y("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:r8,value:"",onChange:function(){}})},o8=i8;function km(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function a8(){return km(/^iPhone/i)}function O_(){return km(/^Mac/i)}function s8(){return km(/^iPad/i)||O_()&&navigator.maxTouchPoints>1}function l8(){return a8()||s8()}function u8(){return O_()||l8()}var c8=function(t){return t.label},d8=function(t){return t.label},f8=function(t){return t.value},p8=function(t){return!!t.isDisabled},h8={clearIndicator:KA,container:NA,control:r6,dropdownIndicator:XA,group:s6,groupHeading:u6,indicatorsContainer:UA,indicatorSeparator:QA,input:p6,loadingIndicator:t6,loadingMessage:DA,menu:TA,menuList:IA,menuPortal:AA,multiValue:y6,multiValueLabel:x6,multiValueRemove:b6,noOptionsMessage:$A,option:k6,placeholder:P6,singleValue:j6,valueContainer:VA},m8={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},g8=4,P_=4,v8=38,y8=P_*2,x8={baseUnit:P_,controlHeight:v8,menuGutter:y8},jd={borderRadius:g8,colors:m8,spacing:x8},b8={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Vv(),captureMenuScroll:!Vv(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:X6(),formatGroupLabel:c8,getOptionLabel:d8,getOptionValue:f8,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:p8,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!vA(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Jv(e,t,n,r){var i=j_(e,t,n),o=$_(e,t,n),a=I_(e,t),l=Kl(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function qs(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return Jv(e,a,t,l)}).filter(function(a){return t1(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=Jv(e,n,t,r);return t1(e,o)?o:void 0}).filter(bA)}function M_(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,wm(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function e1(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,wm(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function w8(e,t){return M_(qs(e,t))}function t1(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!R_(e)||!o)&&D_(e,{label:a,value:l,data:i},r)}function S8(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function _8(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var $d=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},I_=function(t,n){return t.getOptionLabel(n)},Kl=function(t,n){return t.getOptionValue(n)};function j_(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function $_(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Kl(e,t);return n.some(function(i){return Kl(e,i)===r})}function D_(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var R_=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},E8=1,L_=function(e){UL(n,e);var t=YL(n);function n(r){var i;if(VL(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var c=i.props,d=c.onChange,h=c.name;u.name=h,i.ariaOnChange(s,u),d(s,u)},i.setValue=function(s,u,c){var d=i.props,h=d.closeMenuOnSelect,f=d.isMulti,g=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:g}),h&&(i.setState({inputIsHiddenAfterUpdate:!f}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:c})},i.selectOption=function(s){var u=i.props,c=u.blurInputOnSelect,d=u.isMulti,h=u.name,f=i.state.selectValue,g=d&&i.isOptionSelected(s,f),y=i.isOptionDisabled(s,f);if(g){var S=i.getOptionValue(s);i.setValue(f.filter(function(p){return i.getOptionValue(p)!==S}),"deselect-option",s)}else if(!y)d?i.setValue([].concat(wm(f),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:h});return}c&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,c=i.state.selectValue,d=i.getOptionValue(s),h=c.filter(function(g){return i.getOptionValue(g)!==d}),f=bs(u,h,h[0]||null);i.onChange(f,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(bs(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),h=bs(s,d,d[0]||null);c&&i.onChange(h,{action:"pop-value",removedValue:c})},i.getFocusedOptionId=function(s){return $d(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return e1(qs(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return fA.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return I_(i.props,s)},i.getOptionValue=function(s){return Kl(i.props,s)},i.getStyles=function(s,u){var c=i.props.unstyled,d=h8[s](u,c);d.boxSizing="border-box";var h=i.props.styles[s];return h?h(d,u):d},i.getClassNames=function(s,u){var c,d;return(c=(d=i.props.classNames)[s])===null||c===void 0?void 0:c.call(d,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return L6(i.props)},i.buildCategorizedOptions=function(){return qs(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return M_(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:X({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,c=u.isMulti,d=u.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!c}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&hc(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,c=u&&u.item(0);c&&(i.initialTouchX=c.clientX,i.initialTouchY=c.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-i.initialTouchX),h=Math.abs(c.clientY-i.initialTouchY),f=5;i.userIsDragging=d>f||h>f}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,c=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(c,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),c=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:c>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return R_(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,c=u.isMulti,d=u.backspaceRemovesValue,h=u.escapeClearsValue,f=u.inputValue,g=u.isClearable,y=u.isDisabled,S=u.menuIsOpen,p=u.onKeyDown,m=u.tabSelectsValue,x=u.openMenuOnFocus,w=i.state,E=w.focusedOption,k=w.focusedValue,_=w.selectValue;if(!y&&!(typeof p=="function"&&(p(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!c||f)return;i.focusValue("previous");break;case"ArrowRight":if(!c||f)return;i.focusValue("next");break;case"Delete":case"Backspace":if(f)return;if(k)i.removeValue(k);else{if(!d)return;c?i.popValue():g&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!S||!m||!E||x&&i.isOptionSelected(E,_))return;i.selectOption(E);break;case"Enter":if(s.keyCode===229)break;if(S){if(!E||i.isComposing)return;i.selectOption(E);break}return;case"Escape":S?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:f}),i.onMenuClose()):g&&h&&i.clearValue();break;case" ":if(f)return;if(!S){i.openMenu("first");break}if(!E)return;i.selectOption(E);break;case"ArrowUp":S?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":S?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!S)return;i.focusOption("pageup");break;case"PageDown":if(!S)return;i.focusOption("pagedown");break;case"Home":if(!S)return;i.focusOption("first");break;case"End":if(!S)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++E8),i.state.selectValue=Nv(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=$d(o,a[l])}return i}return BL(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&zv(this.menuListRef,this.focusedOptionRef),u8()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(zv(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),c=i==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,c=-1;if(a.length){switch(i){case"previous":s===0?c=0:s===-1?c=u:c=s-1;break;case"next":s>-1&&s<u&&(c=s+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:a[c]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(jd):X(X({},jd),this.props.theme):jd}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,h=d.isMulti,f=d.isRtl,g=d.options,y=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:y,isMulti:h,isRtl:f,options:g,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return j_(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return $_(this.props,i,o)}},{key:"filterOption",value:function(i,o){return D_(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,c=i.form,d=i.menuIsOpen,h=i.required,f=this.getComponents(),g=f.Input,y=this.state,S=y.inputIsHidden,p=y.ariaSelection,m=this.commonProps,x=l||this.getElementId("input"),w=X(X(X({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":h,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(p==null?void 0:p.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?b.createElement(g,q({},m,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:S,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:s},w)):b.createElement(K6,q({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Xl,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:c,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,c=o.SingleValue,d=o.Placeholder,h=this.commonProps,f=this.props,g=f.controlShouldRenderValue,y=f.isDisabled,S=f.isMulti,p=f.inputValue,m=f.placeholder,x=this.state,w=x.selectValue,E=x.focusedValue,k=x.isFocused;if(!this.hasValue()||!g)return p?null:b.createElement(d,q({},h,{key:"placeholder",isDisabled:y,isFocused:k,innerProps:{id:this.getElementId("placeholder")}}),m);if(S)return w.map(function(C,M){var I=C===E,$="".concat(i.getOptionLabel(C),"-").concat(i.getOptionValue(C));return b.createElement(a,q({},h,{components:{Container:l,Label:s,Remove:u},isFocused:I,isDisabled:y,key:$,index:M,removeProps:{onClick:function(){return i.removeValue(C)},onTouchEnd:function(){return i.removeValue(C)},onMouseDown:function(j){j.preventDefault()}},data:C}),i.formatOptionLabel(C,"value"))});if(p)return null;var _=w[0];return b.createElement(c,q({},h,{data:_,isDisabled:y}),this.formatOptionLabel(_,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,q({},a,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!o||!u)return null;var d={"aria-hidden":"true"};return b.createElement(o,q({},a,{innerProps:d,isDisabled:s,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return b.createElement(a,q({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(o,q({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,c=o.MenuPortal,d=o.LoadingMessage,h=o.NoOptionsMessage,f=o.Option,g=this.commonProps,y=this.state.focusedOption,S=this.props,p=S.captureMenuScroll,m=S.inputValue,x=S.isLoading,w=S.loadingMessage,E=S.minMenuHeight,k=S.maxMenuHeight,_=S.menuIsOpen,C=S.menuPlacement,M=S.menuPosition,I=S.menuPortalTarget,$=S.menuShouldBlockScroll,P=S.menuShouldScrollIntoView,j=S.noOptionsMessage,L=S.onMenuScrollToTop,R=S.onMenuScrollToBottom;if(!_)return null;var F=function(G,Q){var Z=G.type,K=G.data,re=G.isDisabled,we=G.isSelected,qe=G.label,Oe=G.value,Xt=y===K,Ft=re?void 0:function(){return i.onOptionHover(K)},kt=re?void 0:function(){return i.selectOption(K)},ni="".concat(i.getElementId("option"),"-").concat(Q),pt={id:ni,onClick:kt,onMouseMove:Ft,onMouseOver:Ft,tabIndex:-1,role:"option","aria-selected":i.state.isAppleDevice?void 0:we};return b.createElement(f,q({},g,{innerProps:pt,data:K,isDisabled:re,isSelected:we,key:ni,label:qe,type:Z,value:Oe,isFocused:Xt,innerRef:Xt?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(G.data,"menu"))},A;if(this.hasOptions())A=this.getCategorizedOptions().map(function(z){if(z.type==="group"){var G=z.data,Q=z.options,Z=z.index,K="".concat(i.getElementId("group"),"-").concat(Z),re="".concat(K,"-heading");return b.createElement(a,q({},g,{key:K,data:G,options:Q,Heading:l,headingProps:{id:re,data:z.data},label:i.formatGroupLabel(z.data)}),z.options.map(function(we){return F(we,"".concat(Z,"-").concat(we.index))}))}else if(z.type==="option")return F(z,"".concat(z.index))});else if(x){var O=w({inputValue:m});if(O===null)return null;A=b.createElement(d,g,O)}else{var D=j({inputValue:m});if(D===null)return null;A=b.createElement(h,g,D)}var N={minMenuHeight:E,maxMenuHeight:k,menuPlacement:C,menuPosition:M,menuShouldScrollIntoView:P},B=b.createElement(OA,q({},g,N),function(z){var G=z.ref,Q=z.placerProps,Z=Q.placement,K=Q.maxHeight;return b.createElement(s,q({},g,N,{innerRef:G,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:Z}),b.createElement(n8,{captureEnabled:p,onTopArrive:L,onBottomArrive:R,lockEnabled:$},function(re){return b.createElement(u,q({},g,{innerRef:function(qe){i.getMenuListRef(qe),re(qe)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:K,focusedOption:y}),A)}))});return I||M==="fixed"?b.createElement(c,q({},g,{appendTo:I,controlElement:this.controlRef,menuPlacement:C,menuPosition:M}),B):B}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,c=o.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return b.createElement(o8,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var h=d.map(function(y){return i.getOptionValue(y)}).join(a);return b.createElement("input",{name:u,type:"hidden",value:h})}else{var f=d.length>0?d.map(function(y,S){return b.createElement("input",{key:"i-".concat(S),name:u,type:"hidden",value:i.getOptionValue(y)})}):b.createElement("input",{name:u,type:"hidden",value:""});return b.createElement("div",null,f)}else{var g=d[0]?this.getOptionValue(d[0]):"";return b.createElement("input",{name:u,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,c=o.selectValue,d=this.getFocusableOptions();return b.createElement(H6,q({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,c=u.className,d=u.id,h=u.isDisabled,f=u.menuIsOpen,g=this.state.isFocused,y=this.commonProps=this.getCommonProps();return b.createElement(l,q({},y,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:h,isFocused:g}),this.renderLiveRegion(),b.createElement(o,q({},y,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:h,isFocused:g,menuIsOpen:f}),b.createElement(s,q({},y,{isDisabled:h}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(a,q({},y,{isDisabled:h}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,c=o.isFocused,d=o.prevWasFocused,h=o.instancePrefix,f=i.options,g=i.value,y=i.menuIsOpen,S=i.inputValue,p=i.isMulti,m=Nv(g),x={};if(a&&(g!==a.value||f!==a.options||y!==a.menuIsOpen||S!==a.inputValue)){var w=y?w8(i,m):[],E=y?e1(qs(i,m),"".concat(h,"-option")):[],k=l?S8(o,m):null,_=_8(o,w),C=$d(E,_);x={selectValue:m,focusedOption:_,focusedOptionId:C,focusableOptionsWithIds:E,focusedValue:k,clearFocusValueOnUpdate:!1}}var M=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},I=u,$=c&&d;return c&&!$&&(I={value:bs(p,m,m[0]||null),options:m,action:"initial-input-focus"},$=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(I=null),X(X(X({},x),M),{},{prevProps:i,ariaSelection:I,prevWasFocused:$})}}]),n}(b.Component);L_.defaultProps=b8;var C8=b.forwardRef(function(e,t){var n=zL(e);return b.createElement(L_,q({ref:t},n))}),Zl=C8;const k8=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,T8=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,O8=({cityOptions:e,selectedCity:t,onChange:n,onInputChange:r})=>v.jsxs(k8,{children:[v.jsx(T8,{children:"Місто"}),v.jsx(Zl,{options:e,onInputChange:r,onChange:n,placeholder:"Почніть вводити місто...",value:t,noOptionsMessage:()=>"Введіть назву міста"})]}),P8=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,M8=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,I8=({options:e=[],value:t,onChange:n,selectedCity:r})=>v.jsxs(P8,{children:[v.jsx(M8,{children:"Спосіб доставки"}),v.jsx(Zl,{options:e,placeholder:"Оберіть спосіб доставки...",isDisabled:!r,value:e.find(i=>i.value===t)||null,onChange:i=>n(i.value)})]}),Dd=T.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`,Rd=T.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`,j8=({deliveryMethod:e,officeOptions:t,ukrOfficeOptions:n,selectedOffice:r,selectedUkrOffice:i,setSelectedOffice:o,setSelectedUkrOffice:a})=>e==="nova"?v.jsxs(Dd,{children:[v.jsx(Rd,{children:"Відділення Нової пошти"}),v.jsx(Zl,{options:t,onChange:l=>o(l),value:r,placeholder:"Оберіть відділення..."})]}):e==="ukr"?v.jsxs(Dd,{children:[v.jsx(Rd,{children:"Відділення Укрпошти"}),v.jsx(Zl,{options:n,onChange:l=>a(l),value:i,placeholder:"Оберіть відділення..."})]}):e==="pickup"?v.jsxs(Dd,{children:[v.jsx(Rd,{children:"Самовивіз"}),v.jsxs("div",{style:{backgroundColor:"#f9f9f9",padding:"10px",borderRadius:"6px",border:"1px solid #ddd",fontSize:"14px",color:"#333",lineHeight:"1.4"},children:[v.jsx("p",{children:"Ви обрали самовивіз."}),v.jsx("p",{children:"Адреса магазину: вул. Казармена 6Г, Київ"}),v.jsx("p",{children:"Графік роботи: Вт, Ср, Пт, Сб, Нд — 11:00–20:00; вихідні: Пн, Чт"}),v.jsx("p",{children:"Телефон: +380 99 999 99"})]})]}):null,$8=T.div`
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
`;const D8=T.button`
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
`,R8=T.ul`
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
`,L8=T.li`
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
`,A8=T.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
`,F8=T.div`
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
`,N8=({cartItems:e,totalAmount:t,totalQuantity:n,isFormValid:r,handleSubmit:i})=>v.jsxs($8,{children:[v.jsx("h3",{children:"Ваше замовлення"}),v.jsx(R8,{children:e.map((o,a)=>{var l;return v.jsxs(L8,{children:[v.jsx(A8,{src:((l=o.image)==null?void 0:l[0])||Yn,alt:o.name}),v.jsxs(F8,{children:[v.jsx("p",{className:"item-name",children:o.name}),v.jsxs("p",{className:"item-details",children:[o.quantity," шт. × ",o.price," грн"]})]}),v.jsxs("span",{className:"item-total",children:[o.price*o.quantity," грн"]})]},`${o.id}-${a}`)})}),v.jsxs("div",{className:"summary-row",children:[v.jsxs("span",{children:["Товари (",n,")"]}),v.jsxs("span",{children:[t," грн"]})]}),v.jsxs("div",{className:"summary-row",children:[v.jsx("span",{children:"Доставка"}),v.jsx("span",{children:"За тарифами перевізника"})]}),v.jsx("hr",{}),v.jsxs("div",{className:"total",children:[v.jsx("span",{children:"Всього до сплати:"}),v.jsxs("span",{children:[t," грн"]})]}),v.jsx(D8,{type:"submit",disabled:!r,onClick:i,style:{opacity:r?1:.5,cursor:r?"pointer":"not-allowed"},children:"Підтвердити замовлення"}),!r&&v.jsx("p",{style:{color:"#888",fontSize:"12px",marginTop:"10px",textAlign:"center"},children:"Заповніть всі поля правильно, щоб продовжити"})]});var A_={exports:{}};function z8(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ld=z8(b),V8=gu;function B8(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Op(){return(Op=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function U8(e,t){e.prototype=Object.create(t.prototype),B8(e.prototype.constructor=e,t)}function H8(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function ci(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var W8=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],c=0;(s=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},n1=W8;function r1(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function G8(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var Y8={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},X8="_";function i1(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=X8),n==null&&(n=Y8),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Dt(e,t){return e.permanents.indexOf(t)!==-1}function mc(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Dt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function o1(e,t){return t.split("").every(function(n,r){return Dt(e,r)||!mc(e,r,n)})}function Ro(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Dt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Dt(e,o)&&mc(e,o,a)){i=o+1;break}}return i}function F_(e,t){return Ro(e,t)===e.mask.length}function Dn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Pp(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Dt(e,t.length);)t+=r[t.length];return t}if(t)return Pp(e,Dn(e,""),t,0);for(var o=0;o<r.length;o++)Dt(e,o)?t+=r[o]:t+=n;return t}function q8(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(c,d){return d<n||i<=d?c:Dt(e,d)?a[d]:o}).join("");for(var u=i;u<s.length;u++)Dt(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),Dn(e,t)}function Pp(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=F_(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;f=u,Dt(e,h=r)&&f!==i[h];){if(r>=t.length&&(t+=i[r]),c=u,d=r,o&&Dt(e,d)&&c===o)return!0;if(++r>=i.length)return!1}var c,d,h,f;return!mc(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),Dn(e,t)):o||(t+=u),++r<i.length)}),t}function K8(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;c=s,Dt(e,u=r)&&c!==i[u];)if(++r>=i.length)return!1;var u,c;return(mc(e,r,s)||s===o)&&r++,r<i.length}),r-l}function Z8(e,t){for(var n=t;0<=n;--n)if(!Dt(e,n))return n;return null}function Xo(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Dt(e,r))return r;return null}function Ad(e){return e||e===0?e+"":""}function Q8(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",c=0,d=0,h=Math.min(i.start,n.start);return n.end>i.start?d=(c=K8(e,r,u=s.slice(i.start,n.end),h))?i.length:0:s.length<r.length&&(d=r.length-s.length),s=r,d&&(d===1&&!i.length&&(h=i.start===n.start?Xo(e,n.start):Z8(e,n.start)),s=q8(e,s,h,d)),s=Pp(e,s,u,h),(h+=c)>=o.length?h=o.length:h<a.length&&!c?h=a.length:h>=a.length&&h<l&&c&&(h=Xo(e,h)),u||(u=null),{value:s=Dn(e,s),enteredString:u,selection:{start:h,end:h}}}function J8(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function ht(e){return typeof e=="function"}function eF(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function N_(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function a1(e){return(N_()?eF():function(){return setTimeout(e,1e3/60)})(e)}function Fd(e){(N_()||clearTimeout)(e)}var tF=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=a1(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Fd(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var g=V8.findDOMNode(ci(ci(i))),y=typeof window<"u"&&g instanceof window.Element;if(g&&!y)return null;if(g.nodeName!=="INPUT"&&(g=g.querySelector("input")),!g)throw new Error("react-input-mask: inputComponent doesn't contain input node");return g},i.getInputValue=function(){var g=i.getInputDOMNode();return g?g.value:null},i.setInputValue=function(g){var y=i.getInputDOMNode();y&&(i.value=g,y.value=g)},i.setCursorToEnd=function(){var g=Ro(i.maskOptions,i.value),y=Xo(i.maskOptions,g);y!==null&&i.setCursorPosition(y)},i.setSelection=function(g,y,S){S===void 0&&(S={});var p=i.getInputDOMNode(),m=i.isFocused();p&&m&&(S.deferred||r1(p,g,y),i.selectionDeferId!==null&&Fd(i.selectionDeferId),i.selectionDeferId=a1(function(){i.selectionDeferId=null,r1(p,g,y)}),i.previousSelection={start:g,end:y,length:Math.abs(y-g)})},i.getSelection=function(){return G8(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(g){i.setSelection(g,g)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var g=i.maskOptions,y=g.mask,S=g.maskChar,p=g.permanents,m=g.formatChars;return{mask:y,maskChar:S,permanents:p,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:m}},i.isInputAutofilled=function(g,y,S,p){var m=i.getInputDOMNode();try{if(m.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||p.end<S.length&&y.end===g.length},i.onChange=function(g){var y=ci(ci(i)).beforePasteState,S=ci(ci(i)).previousSelection,p=i.props.beforeMaskedValueChange,m=i.getInputValue(),x=i.value,w=i.getSelection();i.isInputAutofilled(m,w,x,S)&&(x=Dn(i.maskOptions,""),S={start:0,end:0,length:0}),y&&(S=y.selection,x=y.value,w={start:S.start+m.length,end:S.start+m.length,length:0},m=x.slice(0,S.start)+m+x.slice(S.end),i.beforePasteState=null);var E=Q8(i.maskOptions,m,w,x,S),k=E.enteredString,_=E.selection,C=E.value;if(ht(p)){var M=p({value:C,selection:_},{value:x,selection:S},k,i.getBeforeMaskedValueChangeConfig());C=M.value,_=M.selection}i.setInputValue(C),ht(i.props.onChange)&&i.props.onChange(g),i.isWindowsPhoneBrowser?i.setSelection(_.start,_.end,{deferred:!0}):i.setSelection(_.start,_.end)},i.onFocus=function(g){var y=i.props.beforeMaskedValueChange,S=i.maskOptions,p=S.mask,m=S.prefix;if(i.focused=!0,i.mounted=!0,p){if(i.value)Ro(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var x=Dn(i.maskOptions,m),w=Dn(i.maskOptions,x),E=Ro(i.maskOptions,w),k=Xo(i.maskOptions,E),_={start:k,end:k};if(ht(y)){var C=y({value:w,selection:_},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());w=C.value,_=C.selection}var M=w!==i.getInputValue();M&&i.setInputValue(w),M&&ht(i.props.onChange)&&i.props.onChange(g),i.setSelection(_.start,_.end)}i.runSaveSelectionLoop()}ht(i.props.onFocus)&&i.props.onFocus(g)},i.onBlur=function(g){var y=i.props.beforeMaskedValueChange,S=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,S&&!i.props.alwaysShowMask&&o1(i.maskOptions,i.value)){var p="";ht(y)&&(p=y({value:p,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var m=p!==i.getInputValue();m&&i.setInputValue(p),m&&ht(i.props.onChange)&&i.props.onChange(g)}ht(i.props.onBlur)&&i.props.onBlur(g)},i.onMouseDown=function(g){if(!i.focused&&document.addEventListener){i.mouseDownX=g.clientX,i.mouseDownY=g.clientY,i.mouseDownTime=new Date().getTime();var y=function S(p){if(document.removeEventListener("mouseup",S),i.focused){var m=Math.abs(p.clientX-i.mouseDownX),x=Math.abs(p.clientY-i.mouseDownY),w=Math.max(m,x),E=new Date().getTime()-i.mouseDownTime;(w<=10&&E<=200||w<=5&&E<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",y)}ht(i.props.onMouseDown)&&i.props.onMouseDown(g)},i.onPaste=function(g){ht(i.props.onPaste)&&i.props.onPaste(g),g.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(g){i.props.children==null&&ht(i.props.inputRef)&&i.props.inputRef(g)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,c=r.defaultValue,d=r.value;i.maskOptions=i1(o,a,l),c==null&&(c=""),d==null&&(d=c);var h=Ad(d);if(i.maskOptions.mask&&(s||h)&&(h=Dn(i.maskOptions,h),ht(u))){var f=r.value;r.value==null&&(f=c),h=u({value:h,selection:null},{value:f=Ad(f),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=h,i}U8(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=J8(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,c=this.maskOptions,d=a||this.isFocused(),h=this.props.value!=null,f=h?Ad(this.props.value):this.value,g=r?r.start:null;if(this.maskOptions=i1(l,s,u),this.maskOptions.mask){!c.mask&&this.isFocused()&&this.runSaveSelectionLoop();var y=this.maskOptions.mask&&this.maskOptions.mask!==c.mask;if(c.mask||h||(f=this.getInputValue()),(y||this.maskOptions.mask&&(f||d))&&(f=Dn(this.maskOptions,f)),y){var S=Ro(this.maskOptions,f);(g===null||S<g)&&(g=F_(this.maskOptions,f)?S:Xo(this.maskOptions,S))}!this.maskOptions.mask||!o1(this.maskOptions,f)||d||h&&this.props.value||(f="");var p={start:g,end:g};if(ht(o)){var m=o({value:f,selection:p},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());f=m.value,p=m.selection}this.value=f;var x=this.getInputValue()!==this.value;x?(this.setInputValue(this.value),this.forceUpdate()):y&&this.forceUpdate();var w=!1;p.start!=null&&p.end!=null&&(w=!r||r.start!==p.start||r.end!==p.end),(w||x)&&this.setSelection(p.start,p.end)}else c.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Fd(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=H8(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){ht(o)||n1(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Op({},a);l.forEach(function(c){return delete s[c]}),r=o(s),l.filter(function(c){return r.props[c]!=null&&r.props[c]!==a[c]}).length&&n1(!1)}else r=Ld.createElement("input",Op({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Ld.cloneElement(r,u)},t}(Ld.Component),nF=tF;A_.exports=nF;var rF=A_.exports;const iF=g1(rF);T.div`
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
`,Vd=T.input`
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
`;const oF=({formData:e,setFormData:t,errors:n})=>{const r=i=>{const{name:o,value:a}=i.target;o==="phone"&&!a.startsWith("+38 (0")||t(l=>({...l,[o]:a}))};return v.jsxs(v.Fragment,{children:[v.jsx("h3",{children:"Контактні дані"}),v.jsxs(Nd,{children:[v.jsx(zd,{children:"Прізвище та ім’я"}),v.jsx(Vd,{type:"text",name:"fullName",value:e.fullName,onChange:r,placeholder:"Прізвище Ім'я",autoComplete:"name"}),n.fullName&&v.jsx(Bd,{children:n.fullName})]}),v.jsxs(Nd,{children:[v.jsx(zd,{children:"Номер телефону"}),v.jsx(iF,{mask:"+38 (099) 999-99-99",maskChar:"_",name:"phone",autoComplete:"tel",value:e.phone,onChange:r,children:i=>v.jsx(Vd,{...i,type:"tel"})}),n.phone&&v.jsx(Bd,{children:n.phone})]}),v.jsxs(Nd,{children:[v.jsx(zd,{children:"E-mail"}),v.jsx(Vd,{type:"email",name:"email",value:e.email,onChange:r,placeholder:"email@example.com",autoComplete:"email"}),n.email&&v.jsx(Bd,{children:n.email})]})]})},aF=T.div`
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
`;const sF=T.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,lF=T.div`
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
`;const uF=[{city:"Київ",address:"вул. Хрещатик, 1"},{city:"Київ",address:"вул. Січових Стрільців, 10"},{city:"Львів",address:"просп. Свободи, 5"}],s1={}.VITE_NP_API_KEY,l1="https://api.novaposhta.ua/v2.0/json/",cF=()=>{const e=Fn(R=>R.cart.items),t=eu(),[n,r]=b.useState({fullName:"",phone:"+38 (0",email:"",city:"",postOffice:""}),[i,o]=b.useState(""),[a,l]=b.useState(null),[s,u]=b.useState(null),[c,d]=b.useState(null),[h,f]=b.useState(null),[g,y]=b.useState([]),[S,p]=b.useState([]),[m,x]=b.useState([]),[w,E]=b.useState(""),k=e.reduce((R,F)=>R+F.price*F.quantity,0),_=e.reduce((R,F)=>R+F.quantity,0),C=()=>{const R=new Date().getFullYear().toString().slice(-2),F=Date.now().toString().slice(-4),A=Math.floor(100+Math.random()*900);return`${R}${F}${A}`};b.useEffect(()=>{if(i.length<2)return;const R=setTimeout(async()=>{const A=await(await fetch(l1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:s1,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:i}})})).json();y(A.data.map(O=>({value:O.Ref,label:O.Description})))},500);return()=>clearTimeout(R)},[i]),b.useEffect(()=>{if(!a||s!=="nova")return;(async()=>{const A=await(await fetch(l1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:s1,modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{CityRef:a.value}})})).json();p(A.data.map(O=>({value:O.Ref,label:O.Description})))})()},[a,s]),b.useEffect(()=>{if(s!=="ukr"||!a)return;const R=uF.filter(F=>F.city===a.label).filter(F=>F.address.toLowerCase().includes(w.toLowerCase())).slice(0,20);x(R.map((F,A)=>({value:A,label:F.address})))},[a,s,w]);const M=R=>{l(R),r(F=>({...F,city:(R==null?void 0:R.label)||"",postOffice:""})),u(null),d(null),f(null)},I=()=>{const R={};return n.fullName.trim().split(" ").length<2&&(R.fullName="Введіть прізвище та ім'я"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||(R.email="Некоректний email"),n.phone.replace(/\D/g,"").length<12&&(R.phone="Номер неповний"),a||(R.city=!0),s==="nova"&&!c&&(R.postOffice=!0),s==="ukr"&&!h&&(R.postOffice=!0),s||(R.delivery=!0),R},$=b.useMemo(I,[n,s,c,h,a]),P=Object.keys($).length===0&&e.length>0,j=async R=>{R.preventDefault();const F=C();await fetch(`${{}.VITE_API_URL}/api/orders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{name:n.fullName,phone:n.phone,email:n.email,city:n.city,products:e.map(O=>({id:O.id,name:O.name,quantity:O.quantity})),status_order:"pending",order_number:F,delivery_method:s==="nova"?"Нова Пошта":s==="ukr"?"УкрПошта":"Самовивіз",delivery_address:s==="nova"?c==null?void 0:c.label:s==="ukr"?h==null?void 0:h.label:"Самовивіз"}})});const A={...n,city:a.label,deliveryMethod:s==="nova"?"Нова Пошта":s==="ukr"?"УкрПошта":"Самовивіз",address:s==="nova"?c==null?void 0:c.label:s==="ukr"?h==null?void 0:h.label:"Самовивіз",items:e,total:k,orderNumer:C()};t("/order-confirmation",{state:{order:A}})},L=b.useMemo(()=>{const R=[{value:"nova",label:"Нова пошта"},{value:"ukr",label:"Укрпошта"}];return(a==null?void 0:a.label)==="Київ"&&R.push({value:"pickup",label:"Самовивіз"}),R},[a]);return v.jsx(aF,{children:v.jsxs(sF,{children:[v.jsxs(lF,{children:[v.jsx(oF,{formData:n,setFormData:r,errors:$}),v.jsx(O8,{cityOptions:g,selectedCity:a,onChange:M,onInputChange:o}),v.jsx(I8,{options:L,value:s,onChange:u,selectedCity:a}),v.jsx(j8,{deliveryMethod:s,officeOptions:S,ukrOfficeOptions:m,selectedOffice:c,selectedUkrOffice:h,setSelectedOffice:d,setSelectedUkrOffice:f,setUkrSearch:E})]}),v.jsx(N8,{cartItems:e,totalAmount:k,totalQuantity:_,isFormValid:P,handleSubmit:j})]})})},u1=T.div`
font-family: var(--main-font);
  max-width: 800px;
  margin: 40px auto;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: 'Inter', sans-serif;
`,dF=T.h1`
font-family: var(--main-font);
  color: var(--orange-color); 
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
`,di=T.p`
font-family: var(--main-font);
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;

  strong {
    color: #1a1a1a;
  }
`,fF=T.div`
font-family: var(--main-font);
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
  text-align: left;
  border: 1px solid #edf2f7;
`,c1=T.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 8px;
`,pF=T.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`,hF=T.li`
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
`,mF=T.div`
  background: #fff4e5; 
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #ffe3c1;
`,gF=T.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,ws=T.button`
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
`,vF=()=>{var r;const e=eu(),n=(r=Zi().state)==null?void 0:r.order;return n?v.jsxs(u1,{children:[v.jsx(dF,{children:"Дякуємо за ваше замовлення!"}),v.jsxs(di,{children:["Ваше замовлення ",v.jsxs("strong",{children:["№",n.orderNumer]})," успішно прийняте."]}),v.jsx(di,{children:"Ми зв’яжемось з Вами в найближчий час"}),v.jsxs(fF,{children:[v.jsx(c1,{children:"Деталі замовлення:"}),v.jsx(pF,{children:n.items.map(i=>v.jsxs(hF,{children:[v.jsxs("span",{className:"item-info",children:[i.name," (x",i.quantity,")"]}),v.jsxs("span",{className:"item-price",children:[i.price*i.quantity," грн"]})]},i.id))}),v.jsxs(di,{children:[v.jsx("strong",{children:"Спосіб доставки:"})," ",n.deliveryMethod]}),v.jsxs(di,{children:[v.jsx("strong",{children:"Адреса отримання:"})," ",n.city,", ",n.address]})]}),n.paymentMethod==="online"&&v.jsxs(mF,{children:[v.jsx(c1,{children:"Оплата"}),v.jsx(di,{style:{marginBottom:"15px"},children:"Натисніть кнопку нижче для миттєвої оплати:"}),v.jsx(ws,{primary:!0,onClick:()=>window.location.href=n.paymentLink,children:"Оплатити зараз"})]}),v.jsxs(gF,{children:[v.jsx(ws,{primary:!0,onClick:()=>e("/"),children:"Повернутися на головну"}),v.jsx(ws,{onClick:()=>e("/catalog"),children:"Продовжити покупки"})]})]}):v.jsxs(u1,{children:[v.jsx(di,{children:"Завантаження даних замовлення..."}),v.jsx(ws,{onClick:()=>e("/"),children:"На головну"})]})},yF=T.section`
  background-color: var(--second-background);
`,xF=T.div`
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
`,bF=T.section`
  padding: 40px 0;
  background-color: #f9f9f980;
  border-radius: 12px;
  margin-bottom: 30px;
`,wF=T.h1`
  font-family: var(--main-font);
  font-size: 28px;
  color: var(--black-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`,SF=T.p`

  font-size: 16px;
  color: #666;
`,_F=T.section`
  margin-bottom: 50px;
`,EF=T.p`
  font-family: var(--second-font);
  font-weight:400;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #444;
`,CF=T.section`
  margin-bottom: 60px;
`,kF=T.h2`
  margin-bottom: 30px;
`,TF=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Ss=T.div`
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
`,OF=()=>v.jsxs(yF,{children:[v.jsxs(xF,{children:[v.jsxs(bF,{children:[v.jsx(wF,{children:"Про Дідів Хлів"}),v.jsx(SF,{children:"Даємо друге життя якісним велозапчастинам"})]}),v.jsxs(_F,{children:[v.jsx(EF,{children:"Бізнес створений з переконанням, що обладнання може бути доступним. Ми спеціалізуємося на розборі цікавих і унікальних велосипедів, усі запчастини перевірені нами. Стараємося пропонувати тільки найкраще від Shimano, Sram, Campagnolo та інших світових брендів."}),v.jsx(CS,{})]}),v.jsxs(CF,{children:[v.jsx(kF,{children:"Наша майстерня"}),v.jsxs(TF,{children:[v.jsx(Ss,{color:"#e2e2e2",children:"Фото майстерні"}),v.jsx(Ss,{color:"#d1d1d1",children:"Процес діагностики"}),v.jsx(Ss,{color:"#bcbcbc",children:"Склад запчастин"}),v.jsx(Ss,{color:"#a8a8a8",children:"Готові велосипеди"})]})]})]})," "]}),PF=()=>{const{pathname:e}=Zi();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},MF=T.section`
  background-color:  var(--second-background);
  padding: 40px 0;
  min-height: 80vh;
`,IF=T.div`
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
`,jF=T.h1`
  font-family: var(--main-font); 
  font-size: 32px;
  color: var(--black-color);
  margin-bottom: 10px;
  text-transform: uppercase;
`,$F=T.p`
  color: #585555;
  margin-bottom: 40px;
`,DF=T.div`
font-family: var(--second-font);
font-weight: 400;
  display: grid;
  gap: 40px;
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,RF=T.div`
height: 427px;
  display: grid;
  gap: 25px;
    background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,_s=T.div`
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
`,LF=T.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
`,AF=T.h2`
  margin-bottom: 15px;
  color: var(--brown-color);
  font-size: 24px;
  font-family: var(--main-font);
`,FF=T.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`,NF=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,d1=T.a`
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
`;const zF=T.div`
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

 
`,VF=()=>v.jsx(MF,{children:v.jsxs(IF,{children:[v.jsx(jF,{children:"Контакти"}),v.jsx($F,{children:"Зв’яжіться з нами для консультації або замовлення"}),v.jsxs(DF,{children:[v.jsxs(RF,{children:[v.jsxs(_s,{children:[v.jsx("h3",{children:"Адреса"}),v.jsx("p",{children:"вул. Казармена 6Г, Київ, Україна"}),v.jsx("a",{style:{color:"black",fontWeight:"500",fontSize:"0.9rem",display:"inline-block",marginTop:"5px",cursor:"pointer"},href:"https://www.google.com/maps/search/?api=1&query=вул.+Казармена+6Г,+Київ,+Україна",target:"_blank",rel:"noopener noreferrer",children:"📍 Показати на карті"})]}),v.jsxs(_s,{children:[v.jsx("h3",{children:"Телефон"}),v.jsx("p",{children:"+38 (097) 123-45-67"})]}),v.jsxs(_s,{children:[v.jsx("h3",{children:"Email"}),v.jsx("p",{children:"didivhliv.com"})]}),v.jsxs(_s,{children:[v.jsx("h3",{children:"Графік роботи"}),v.jsx("p",{children:"З 11:00 - 20:00"}),v.jsx("p",{children:"Вихідні: Пн, Чт"})]})]}),v.jsxs(LF,{children:[v.jsx(AF,{children:"Ми в соцмережах"}),v.jsx(FF,{children:"Слідкуйте за нашими новинами, новими надходженнями та крутими вело-поїздками у зручному для вас форматі."}),v.jsxs(NF,{children:[v.jsxs(d1,{href:"https://www.instagram.com/didivxliv?igsh=MXhsNWRjdW5rajYwdQ==",target:"_blank",rel:"noopener noreferrer",children:[v.jsx("svg",{width:"20px",children:v.jsx("use",{href:`${un}#icon-instagram`})}),v.jsx("span",{children:"Instagram"})]}),v.jsxs(d1,{href:"https://t.me/didivxliv",target:"_blank",rel:"noopener noreferrer",children:[v.jsx("svg",{width:"20px",children:v.jsx("use",{href:`${un}#icon-telegram`})}),v.jsx("span",{children:"Telegram"})]})]}),v.jsx(zF,{children:"Приєднуйся до спільноти!"})]})]})]})}),BF="";function UF(){return console.log(BF),v.jsxs(p3,{children:[v.jsx(qM,{}),v.jsx(PF,{}),v.jsx(b.Suspense,{fallback:v.jsx(YM,{}),children:v.jsx(s2,{children:v.jsxs(mt,{path:"/",element:v.jsx(KO,{}),children:[v.jsx(mt,{index:!0,element:v.jsx($5,{})}),v.jsx(mt,{path:"catalog",element:v.jsx(s3,{})}),v.jsx(mt,{path:"/catalog/:category",element:v.jsx(j$,{})}),v.jsx(mt,{path:"/product/:id",element:v.jsx(jR,{})}),v.jsx(mt,{path:"cart",element:v.jsx(oL,{})}),v.jsx(mt,{path:"favorite",element:v.jsx(TL,{})}),v.jsx(mt,{path:"checkout",element:v.jsx(cF,{})}),v.jsx(mt,{path:"/order-confirmation",element:v.jsx(vF,{})}),v.jsx(mt,{path:"about",element:v.jsx(OF,{})}),v.jsx(mt,{path:"contacts",element:v.jsx(VF,{})}),v.jsx(mt,{path:"delivery",element:v.jsx($L,{})}),v.jsx(mt,{path:"*",element:v.jsx(f3,{})})]})})})]})}var Tm="persist:",z_="persist/FLUSH",Om="persist/REHYDRATE",V_="persist/PAUSE",B_="persist/PERSIST",U_="persist/PURGE",H_="persist/REGISTER",HF=-1;function Ks(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ks=function(n){return typeof n}:Ks=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ks(e)}function f1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function WF(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?f1(n,!0).forEach(function(r){GF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function GF(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function YF(e,t,n,r){r.debug;var i=WF({},n);return e&&Ks(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function XF(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:Tm).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(E){return E}:typeof e.serialize=="function"?l=e.serialize:l=qF;var s=e.writeFailHandler||null,u={},c={},d=[],h=null,f=null,g=function(E){Object.keys(E).forEach(function(k){p(k)&&u[k]!==E[k]&&d.indexOf(k)===-1&&d.push(k)}),Object.keys(u).forEach(function(k){E[k]===void 0&&p(k)&&d.indexOf(k)===-1&&u[k]!==void 0&&d.push(k)}),h===null&&(h=setInterval(y,i)),u=E};function y(){if(d.length===0){h&&clearInterval(h),h=null;return}var w=d.shift(),E=r.reduce(function(k,_){return _.in(k,w,u)},u[w]);if(E!==void 0)try{c[w]=l(E)}catch(k){console.error("redux-persist/createPersistoid: error serializing state",k)}else delete c[w];d.length===0&&S()}function S(){Object.keys(c).forEach(function(w){u[w]===void 0&&delete c[w]}),f=a.setItem(o,l(c)).catch(m)}function p(w){return!(n&&n.indexOf(w)===-1&&w!=="_persist"||t&&t.indexOf(w)!==-1)}function m(w){s&&s(w)}var x=function(){for(;d.length!==0;)y();return f||Promise.resolve()};return{update:g,flush:x}}function qF(e){return JSON.stringify(e)}function KF(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Tm).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=ZF,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,c){return c.out(u,s,l)},i(l[s]))}),a}catch(s){throw s}else return})}function ZF(e){return JSON.parse(e)}function QF(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Tm).concat(e.key);return t.removeItem(n,JF)}function JF(e){}function p1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Tn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?p1(n,!0).forEach(function(r){eN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function eN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tN(e,t){if(e==null)return{};var n=nN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function nN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var rN=5e3;function W_(e,t){var n=e.version!==void 0?e.version:HF;e.debug;var r=e.stateReconciler===void 0?YF:e.stateReconciler,i=e.getStoredState||KF,o=e.timeout!==void 0?e.timeout:rN,a=null,l=!1,s=!0,u=function(d){return d._persist.rehydrated&&a&&!s&&a.update(d),d};return function(c,d){var h=c||{},f=h._persist,g=tN(h,["_persist"]),y=g;if(d.type===B_){var S=!1,p=function(C,M){S||(d.rehydrate(e.key,C,M),S=!0)};if(o&&setTimeout(function(){!S&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),s=!1,a||(a=XF(e)),f)return Tn({},t(y,d),{_persist:f});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),i(e).then(function(_){var C=e.migrate||function(M,I){return Promise.resolve(M)};C(_,n).then(function(M){p(M)},function(M){p(void 0,M)})},function(_){p(void 0,_)}),Tn({},t(y,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===U_)return l=!0,d.result(QF(e)),Tn({},t(y,d),{_persist:f});if(d.type===z_)return d.result(a&&a.flush()),Tn({},t(y,d),{_persist:f});if(d.type===V_)s=!0;else if(d.type===Om){if(l)return Tn({},y,{_persist:Tn({},f,{rehydrated:!0})});if(d.key===e.key){var m=t(y,d),x=d.payload,w=r!==!1&&x!==void 0?r(x,c,m,e):m,E=Tn({},w,{_persist:Tn({},f,{rehydrated:!0})});return u(E)}}}if(!f)return t(c,d);var k=t(y,d);return k===y?c:u(Tn({},k,{_persist:f}))}}function h1(e){return aN(e)||oN(e)||iN()}function iN(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function oN(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function aN(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function m1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Mp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?m1(n,!0).forEach(function(r){sN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m1(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G_={registry:[],bootstrapped:!1},lN=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:G_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case H_:return Mp({},t,{registry:[].concat(h1(t.registry),[n.key])});case Om:var r=t.registry.indexOf(n.key),i=h1(t.registry);return i.splice(r,1),Mp({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function uN(e,t,n){var r=n||!1,i=em(lN,G_,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:H_,key:u})},a=function(u,c,d){var h={type:Om,payload:c,err:d,key:u};e.dispatch(h),i.dispatch(h),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Mp({},i,{purge:function(){var u=[];return e.dispatch({type:U_,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:z_,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){e.dispatch({type:V_})},persist:function(){e.dispatch({type:B_,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var Pm={},Mm={};Mm.__esModule=!0;Mm.default=fN;function Zs(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Zs=function(n){return typeof n}:Zs=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Zs(e)}function Ud(){}var cN={getItem:Ud,setItem:Ud,removeItem:Ud};function dN(e){if((typeof self>"u"?"undefined":Zs(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function fN(e){var t="".concat(e,"Storage");return dN(t)?self[t]:cN}Pm.__esModule=!0;Pm.default=mN;var pN=hN(Mm);function hN(e){return e&&e.__esModule?e:{default:e}}function mN(e){var t=(0,pN.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var Im=void 0,gN=vN(Pm);function vN(e){return e&&e.__esModule?e:{default:e}}var yN=(0,gN.default)("local");Im=yN;const xN={key:"cart",storage:Im},bN={key:"favorites",storage:Im},wN=W_(xN,Xj),SN=W_(bN,M$),Y_=Ij({reducer:{cart:wN,favorites:SN},middleware:e=>e({serializableCheck:!1})});uN(Y_);Xd.createRoot(document.getElementById("root")).render(v.jsx(lO,{store:Y_,children:v.jsx(W.StrictMode,{children:v.jsx(p2,{basename:"/Didiv/",children:v.jsx(UF,{})})})}));
